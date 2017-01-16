var colors = require("colors");
var say = require("say");
var cleverbot = require("cleverbot.io");
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//go to https://cleverbot.io/keys to get your keys and replace this line
var bot = new cleverbot("YOUR_API_USER", "YOUR_API_KEY");

//if using OSX, you can set these to your machine's built in voices, otherwise this will just set the names of your bots
var voice1 = 'Victoria';
var voice2 = 'Alex';

//session variables, you can set these if you want to keep the same sessions. console log out session below.
var session1;
var session2;

//comment this out if you set the sessions manually
initializeSessions();

//don't change anything else unless you want to
initiateConversation();

function initializeSessions() {
    bot.create(function (err, session) {
        // session is your session name, it will either be as you set it previously, or cleverbot.io will generate one for you
        session1 = session;
        // Woo, you initialized cleverbot.io.  Insert further code here
    });
    bot.create(function (err, session) {
        // session is your session name, it will either be as you set it previously, or cleverbot.io will generate one for you
        session2 = session;
    });
    
}

function initiateConversation() {
    rl.question('Start the conversation: '.red, function (string) {
        t200(string);
        rl.close();
    });
};

function t100(ask) {
    bot.setNick(session1);
    say.speak(ask, voice1, 1.0, function (err) {
        if (err) {
            return console.error(err);
        }
        bot.ask(ask, function (err, response) {
            console.log(voice2.blue + ": ".blue + response.blue);
            t200(response);
        })

    });
}

function t200(ask) {
    bot.setNick(session2);
    say.speak(ask, voice2, 1.0, function (err) {
        if (err) {
            return console.error(err);
        }
        bot.ask(ask, function (err, response) {
            console.log(voice1.cyan + ": ".cyan + response.cyan);
            t100(response);
        })

    });
}
