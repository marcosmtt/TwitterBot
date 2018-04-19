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
            console.log("Deu ruim, meu parcero!");
        } else {
            console.log("Bombarel!");
        }
    }

}

/*
const params = {
    q: 'programming',
    count: 1
};

function gotData(err, data, response) {
    let tweets = data.statuses;
    for (let i = 0; i < tweets.lenght; i++) {
        console.log(tweets[i].text);
    }
};

t.get('search/tweets', params, gotData);
*/