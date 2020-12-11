# babel-apps-script
Simple webapp to compile Google Apps Script projects written in ES6 to ES5 code and runtime.


Link to the webapp https://script.google.com/macros/s/AKfycbxqPY1_CJ7Amwn3oFIDVeWBeEYKQ_l39-61yL3sRPX8XNzO6_0/exec

NB! The project is in its infancy and we hope it stays this way, meaning Apps Script development team has solved the issues that prevent some projects from being successfully ported to V8.

At the moment the app is not released to general public, and you have to contact me personally to add you to the app.
I'm not planning to release (verify) the webapp as I really hope it is just an emergency tool and that soon there won't be the need of it.

# known issues
Not everything gets compiled, like Object.assign or Object.values. I suspect many more are in the line.

To solve this I need a babel standalone version that includes plugins - if you can help, you are welcome.

