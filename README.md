### Question
I wonder why webpack is not watching the jsx file. I run `npm run dev` and tried to change app/components/Html.jsx file and there is nothing changed in my app/components/statics/build/bundle.js which is output file of reactjs. 

However, when I changed port from 3000 to 3040 and nodemon is working and restart it. 

### My problem repo
https://github.com/edisonthk/fluxible-router-playground

### Results I got
```
Edisonthks-MacBook-Air:codegarage edisonthk$ npm run dev

> codegarage@0.0.0 dev /Users/edisonthk/Documents/Vagrantfile/Flux/codegarage
> nodemon --ignore app/statics/build/ -e js server & ./node_modules/.bin/webpack --watch --debug

10 Feb 19:44:16 - [nodemon] v1.3.6
10 Feb 19:44:16 - [nodemon] to restart at any time, enter `rs`
10 Feb 19:44:16 - [nodemon] watching: *.*
10 Feb 19:44:16 - [nodemon] starting `node server server.js`
Listening on port 3000
Hash: 5960085e6dcfaa96f19d
Version: webpack 1.5.3
Time: 1362ms
    Asset    Size  Chunks             Chunk Names
bundle.js  774761       0  [emitted]  main
   [0] ./app/client.js 914 {0} [built]
   [1] ./app/app.js 647 {0} [built]
   [4] ./app/routes.js 987 {0} [built]
   [5] ./app/stores/ApplicationStore.js 1926 {0} [built]
   [6] ./app/stores/TimeStore.js 854 {0} [built]
   [7] ./app/stores/PageStore.js 841 {0} [built]
 [112] ./app/actions/updateTime.js 254 {0} [built]
    + 191 hidden modules
10 Feb 19:45:04 - [nodemon] restarting due to changes...
10 Feb 19:45:04 - [nodemon] starting `node server server.js`
Listening on port 3040

```

I have moving all of my developmnet file from root to app to make my developing easier. If there is anything wrong with my configuration such as webpack.config, package.json, etc. Please let me know. 