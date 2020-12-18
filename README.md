# babel-apps-script
Simple webapp to compile Google Apps Script projects written in ES6 to ES5 code and runtime.


Link to the webapp https://script.google.com/macros/s/AKfycbxqPY1_CJ7Amwn3oFIDVeWBeEYKQ_l39-61yL3sRPX8XNzO6_0/exec

I suggest using a script in ES6 as origin and the one you want to run in Rhino (ES5) as destination.

# Please note
1) The project is in its infancy and we hope it stays this way, meaning Apps Script development team has solved the issues that prevent some projects from being successfully ported to V8.

2) At the moment the app is not released to general public, and **you must contact me personally to add you to the app**.
I'm not planning to release (verify) the webapp as  it is a time consuming process that seems inappropriate for such project, but most of all because I really hope it is just an emergency tool and that soon there won't be the need of it.

3) When you'll try to compile for the first time, an error will be returned requiring to activate Apps Script API: just follow the url provided in the error message and activate it. Afterwards everything should work. 
