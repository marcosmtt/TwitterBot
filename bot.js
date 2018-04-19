console.log('The bot is Starting!');

const twit = require('twit');

const config = require('./config');
const t = new twit(config);

function tweetIt() {
    let tweet = {
        status: '#FuckYouYouFuckingFuck'
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

setInterval(tweetIt, 1000*60*60); //Tweet each hour