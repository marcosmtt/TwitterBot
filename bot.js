console.log('The bot is Starting!');

const twit = require('twit');

const config = require('./config');
const t = new twit(config);



let stream = t.stream('user');
stream.on('follow', followed);

function followed(eventMsg) {
    const name = event.source.name;
    const screenName = eventMsg.source.screen_name;
    tweetIt('@' + screenName + ' o/');
}

function tweetIt(msg) {
    const tweet = {
        status: msg
    }

    t.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response) {
        if (err) {
            console.log("Something went Wrong!");
        } else {
            console.log("It Works!");
        }
    }

}

//tweetIt();
//setInterval(tweetIt, 1000 * 5) //Tweet each hour