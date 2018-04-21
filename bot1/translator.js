'use strict';

const rp = require('request-promise');

// **********************************************
// *** Update or verify the following values. ***
// **********************************************

module.exports.translate = function(text, targetLanguage) {

    // Replace the subscriptionKey string value with your valid subscription key.
    const subscriptionKey = "cfc2b05f41a54fd7a1949ecb69c7ae9a";

    const host = 'api.microsofttranslator.com';
    const path = '/V2/Http.svc/Translate';

    const params = '?to=' + targetLanguage + '&text=' + encodeURI(text);

    const request_params = {
        method: 'GET',
        uri: 'http://' + host + path + params,
        headers : {
            'Ocp-Apim-Subscription-Key' : subscriptionKey,
        },
        resolveWithFullResponse: true
    };

    const translatedText = rp(request_params)
        .then((res) => {
            console.log("RESP BODY: ", res.body)
            const strippedText = res.body.replace(/<string(.*?)>/, '').replace(/<\/string>/, '');
            console.log("STRIPPED TEXT: ", strippedText)
            return strippedText;
        });

    return translatedText;
}

// COMMENT OUT WHEN TESTING THE APP
//console.log("RETURNED: ", module.exports.translate("Hi", "fr-fr"))
