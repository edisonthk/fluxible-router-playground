/**
 * Copyright 2014, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 * 
 * nodeJS, server file
 */
'use strict';
require('node-jsx').install({ extension: '.jsx' });
var express = require('express');
var favicon = require('serve-favicon');
var serialize = require('serialize-javascript');
var navigateAction = require('flux-router-component').navigateAction;
var debug = require('debug')('Example');
var React = require('react');
var app = require('./app/app');
var HtmlComponent = React.createFactory(require('./app/components/Html.jsx'));

var server = express();
server.set('state namespace', 'App');
server.use(favicon(__dirname + '/app/statics/favicon.ico'));
server.use('/public', express.static(__dirname + '/app/statics'));

server.use(function (req, res, next) {
    var context = app.createContext();

    debug('Executing navigate action');
    context.getActionContext().executeAction(navigateAction, {
        url: req.url
    }, function (err) {
        if (err) {
            if (err.status && err.status === 404) {
                next();
            } else {
                next(err);
            }
            return;
        }

        debug('Exposing context state');
        var exposed = 'window.App=' + serialize(app.dehydrate(context)) + ';';

        debug('Rendering Application component into html');
        var AppComponent = app.getAppComponent();
        var html = React.renderToStaticMarkup(HtmlComponent({
            state: exposed,
            context: context.getComponentContext(),
            markup: React.renderToString(AppComponent({
                context: context.getComponentContext()
            }))
        }));

        // html 
        debug('Sending markup');
        res.write(html);
        res.end();
    });
});

var port = process.env.PORT || 3040;
server.listen(port);
console.log('Listening on port ' + port);
