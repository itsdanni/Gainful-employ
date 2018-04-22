var restify = require('restify');
var builder = require('botbuilder');
var translator = require('./translator');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {

    const text = session.message.text;
    const targetLanguage = "fr-fr";
    console.log("Text received by bot: ", text);

    // Testing
    //translator.translate(text, "fr-fr").then((translatedText) => console.log(translatedText));
    return Promise.resolve(translator.translate(text, targetLanguage))
        .then((translatedText) => {
            console.log("Text sent by bot: ", translatedText);
            session.send("You said: %s", translatedText);
        });
});
