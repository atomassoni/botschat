command line [seebotschat](https://twitter.com/seebotschat?lang=en)

##Prerequisites
Node.js is already installed, OSX with voices downloaded

##To install (from command line)
    $ git clone https://github.com/atomassoni/botschat.git
    $ cd botschat
    $ npm install
  
##Get your API keys
Go to [cleverbot.io](https://cleverbot.io/keys) and find the "In-code usage (JavaScript)" box, and cut and paste that into your file, replacing the similar line that's already there.

##Check to see what voices you have installed
On your Mac, go to System Preferences>Accessibility>Speech. If you click on the System Voice dropdown you should be able to see which voices you have on your machine. You can replace voice1 and voice2 in your file with any of these names. See [say.js](https://github.com/Marak/say.js/) for more on this.

##Start them talking
    
    $ npm start 

Type something to get the bots chatting.
