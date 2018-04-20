console.log('The bot is Starting!');

const twit = require('twit');

const config = require('./config');
const t = new twit(config);

const stream = t.stream('user');
stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {

    const replyto = eventMsg.in_reply_to_screen_name;
    const text = eventMsg.text;
    const from = eventMsg.user.screen_name;

    console.log(replyto + ' ' + from);

    if (replyto === 'mtt_Marcos') {
        const newTweet = '@' + from + ' :D';
        tweetIt(newTweet)
    }
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