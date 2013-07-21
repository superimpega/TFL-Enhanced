if (TFLEnhanced !== undefined)
    TFLEnhanced.close();
String.prototype.equalsIgnoreCase = function(other) {
    return this.toLowerCase() === other.toLowerCase();
};
var plugCubed,
TFLEnhancedModel = require('app/base/Class').extend({
    version: {
        major: 1,
        minor: 9,
        patch: 9
    },
    init: function(){
        var Lang = require('lang/Lang');
        setTimeout($.proxy(this.initCSS,this), 1500)
        $('#time-remaining-value').attr('style','color: rgb(102, 255, 255);')
                var words = {
            // Syntax: 'Search word' : 'Replace word',
            "Points" : "Points",
            "Now Playing" : "Now Playing",
            "Time Remaining" : "Time Wasted",
            "Volume" : "Crank it up!",
            "Current DJ" : "Current DJ",
            "Crowd Response" : "Crowd's Reaction",
            "Fans":"Minions"
        };
        String.prototype.prepareRegex = function() {
            return this.replace(/([\[\]\^\&\$\.\(\)\?\/\\\+\{\}\|])/g, "\\$1");
        };
        Lang.ui.buttonVotePositive = "http://i.imgur.com/xA8Pu4k.png";
        Lang.ui.buttonVotePositiveSelected = "http://i.imgur.com/dnvDuWh.png";
        Lang.ui.buttonVotePositiveDisabled = "http://i.imgur.com/xA8Pu4k.png";
        Lang.ui.buttonAddThis = "http://i.imgur.com/LxrhgJi.png";
        Lang.ui.buttonAddThisDisabled = "http://i.imgur.com/LxrhgJi.png";
        Lang.ui.buttonSkipThis  = "http://i.imgur.com/o2CQhnj.png";
        Lang.rollover.fans = "Minions"
        Lang.messages.fanEnter = "Your minion %NAME% just joined the room!"
        Lang.messages.fanOf = "You are now a minion of %NAME%."
        Lang.messages.unFanOf = "You are no longer a minion of %NAME%."
        Lang.messages.follow = "%NAME% is now your minion!"
        Lang.rollover.becomeFan = "Become a minion"
        Lang.ui.buttonDJPlay = "http://i.imgur.com/8Minrha.png";
        Lang.ui.buttonDJLeave = "http://i.imgur.com/krkSXRv.png";
        Lang.ui.buttonDJWaitlistJoin = "http://i.imgur.com/8Minrha.png";
        Lang.ui.buttonDJWaitlistLeave = "http://i.imgur.com/krkSXRv.png";
        Lang.ui.buttonDJQuitShort = "http://i.imgur.com/krkSXRv.png";
        Lang.ui.buttonDJQuit = "http://i.imgur.com/krkSXRv.png";
        Lang.ui.buttonDJPlayShort = "http://i.imgur.com/8Minrha.png";
        Lang.rollover.host = "The Boss"
        Lang.chat.help = "<strong>Chat Commands:</strong><br/>/em &nbsp; <em>Emote</em><br/>/me &nbsp; <em>Emote</em><br/>/clear &nbsp; <em>Clear Chat History</em><br/>/cap # &nbsp; <em>Limits the number of avatars rendered (1-200)</em><br/>/ts # &nbsp; <em>Chat timestamps (12, 24, 0)</em><br /> /strobe on/off &nbsp; <em>Strobe light on/off</em><br /> /rave on/off &nbsp; <em>Lights out on/off</em><br />/close &nbsp; <em>Remove TFL Enhanced script</em>"
        $('#button-vote-negative').hide();
        function isOkTag(tag) {
            return (",pre,blockquote,code,input,button,textarea".indexOf(","+tag) == -1);
        };
        var regexs=new Array(),
        replacements=new Array();
        for(var word in words) {
            if(word != "") {
                regexs.push(new RegExp("\\b"+word.prepareRegex().replace(/\*/g,'[^ ]*')+"\\b", 'gi'));
                replacements.push(words[word]);
            }
        }
        var texts = document.evaluate(".//text()[normalize-space(.)!='']",document.body,null,6,null), text="";
        for(var i=0,l=texts.snapshotLength; (this_text=texts.snapshotItem(i)); i++) {
        if(isOkTag(this_text.parentNode.tagName.toLowerCase()) && (text=this_text.textContent)) {
            for(var x=0,l=regexs.length; x<l; x++) {
                text = text.replace(regexs[x], replacements[x]);
                this_text.textContent = text;
                }
            }
        }
                this.proxy = {
            onChat: $.proxy(this.onChat, this)
        };
        API.on(API.CHAT,this.proxy.onChat)
        API.chatLog('<span style="color:#FF0000"><i>Running TFL Enhanced version ' + this.version.major + '.' + this.version.minor + '.' + this.version.patch + '</i></span>');
        API.chatLog('<span style="color:#FFFF00">Join our facebook group </span>: http://goo.gl/OKI4h')
        if (plugCubed == undefined) $.getScript("http://tatdk.github.io/plugCubed/compiled/plugCubed.min.js")

    },
    close: function(){
        $('#TFL-css').remove();
        $('#room-wheel').css('background','url("http://plug.dj/_/static/images/room_wheel2.0ea1fb92.png")');
        $('#button-vote-negative').show();
        $('#button-dj-waitlist-join').attr('style','background-image:url(http://plug.dj/_/static/images/en/ButtonDJWaitListJoin.fbffc481.png); display: block;');
        $('#button-dj-waitlist-leave').attr('style','background-image:url(http://plug.dj/_/static/images/en/ButtonDJWaitListLeave.5d5847b1.png); display: block;');
        $('#button-dj-play').attr('style','background-image:url(http://plug.dj/_/static/images/en/ButtonDJPlay.742fd499.png); display: block;');
        $('#button-dj-leave').attr('style','background-image:url(http://plug.dj/_/static/images/en/ButtonDJQuit.1a691d0c.png); display: block;');
        $('#dj-console').attr('style','background-image:url(http://plug.dj/_/static/images/DJConsole2.8acc86f0.png); display:block;');
        $('#button-add-this').attr('style','background-image:url(http://plug.dj/_/static/images/en/ButtonAddThis.175d7d45.png);');
        $('#meta-frame').show('.frame-background');
        $('#playback').show('.frame-background');
        $('#meta-frame').css('background-color','#0A0A0A');
        $('#playback').css('background-color','#0A0A0A');
        Lang.ui.buttonVotePositive = "http://plug.dj/_/static/images/en/ButtonVotePositive.85cfc5a9.png";
        Lang.ui.buttonVotePositiveSelected = "http://plug.dj/_/static/images/en/ButtonVotePositiveSelected.c9947cb3.png";
        Lang.ui.buttonVotePositiveDisabled = "http://plug.dj/_/static/images/en/ButtonVotePositiveDisabled.ce7c40b3.png";
        Lang.ui.buttonAddThis = "http://plug.dj/_/static/images/en/ButtonAddThis.175d7d45.png";
        Lang.ui.buttonAddThisDisabled ="http://plug.dj/_/static/images/en/ButtonAddThisDisabled.b121845e.png"; 
        Lang.ui.buttonSkipThis = "http://plug.dj/_/static/images/en/ButtonSkipThis.b9a1c7b7.png";
        Lang.ui.buttonDJPlay = "http://plug.dj/_/static/images/en/ButtonDJPlay.742fd499.png";
        Lang.ui.buttonDJLeave = "http://plug.dj/_/static/images/en/ButtonDJQuit.1a691d0c.png";
        Lang.ui.buttonDJWaitlistJoin = "http://plug.dj/_/static/images/en/ButtonDJWaitListJoin.fbffc481.png";
        Lang.ui.buttonDJWaitlistLeave = "http://plug.dj/_/static/images/en/ButtonDJWaitListLeave.5d5847b1.png";
        Lang.ui.buttonDJQuitShort = "http://plug.dj/_/static/images/en/ButtonDJQuitShort.8e572d1a.png";
        Lang.ui.buttonDJQuit = "http://plug.dj/_/static/images/en/ButtonDJQuit.1a691d0c.png";
        Lang.ui.buttonDJPlayShort = "http://plug.dj/_/static/images/en/ButtonDJPlayShort.b88f8f86.png";
        Lang.rollover.fans = "fans"
        Lang.messages.fanEnter = "Your fan %NAME% just joined the room!"
        Lang.messages.fanOf = "You are now a fan of %NAME%."
        Lang.messages.unFanOf = "You are no longer a fan of %NAME%." 
        Lang.messages.follow = "%NAME% is now your fan!"
        Lang.rollover.becomeFan = "Become a fan"
        Lang.chat.help = "<strong>Chat Commands:</strong><br/>/em &nbsp; <em>Emote</em><br/>/me &nbsp; <em>Emote</em><br/>/clear &nbsp; <em>Clear Chat History</em><br/>/cap # &nbsp; <em>Limits the number of avatars rendered (1-200)</em><br/>/ts # &nbsp; <em>Chat timestamps (12, 24, 0)</em>"
        API.off(API.CHAT,this.proxy.onChat)
        if(plugCubed != undefined) plugCubed.close();
        plugCubed = undefined
    },
    initCSS: function() {
        $('#room-wheel').css('background','url("https://github.com/Colgate/TFL-Enhanced/raw/master/extras/TFL.gif")');
        $('#room-wheel').css('background-repeat','no-repeat');
        $('#room-wheel').css('background-position','500px 275px');
        $('#meta-frame .frame-background').hide('.frame-background');
        $('#button-dj-waitlist-join').attr('style','background-image:url(http://i.imgur.com/8Minrha.png); display: block;');
        $('#button-dj-waitlist-leave').attr('style','background-image:url(http://i.imgur.com/krkSXRv.png); display: block;');
        $('#button-dj-play').attr('style','background-image:url(http://i.imgur.com/8Minrha.png); display: block;');
        $('#button-dj-leave').attr('style','background-image:url(http://i.imgur.com/krkSXRv.png); display: block;');
        $('#dj-console').attr('style','background-image:url(http://i.imgur.com/bLYq7gA.png); display:block; position:absolute; top:15px; width:317px;');
        $('#button-add-this').attr('style','background-image:url(http://i.imgur.com/LxrhgJi.png);');
    $('#meta-frame').css('background-color','transparent');
    $('#playback .frame-background').hide('.frame-background');
    $('#playback').css('background-color','transparent');
        $('head').append('<link href="http://fonts.googleapis.com/css?family=Faster+One" rel="stylesheet" type="text/css">'
            + '<style type="text/css" id="TFL-css">'
            + 'html{background: url("http://i.imgur.com/uEA8d5Y.jpg") no-repeat scroll center top #000000;}'
            + '#button-lobby { background-image: url("http://i.imgur.com/DNiULH5.png");}'
            + 'body {color:#66FFFF;}'
            + '#current-dj-value {color:#66FFFF;}'
            + '.chat-title {font-family: "Faster One", cursive;}'
            + '#button-dj-play.button-dj {background-image: url("http://i.imgur.com/8Minrha.png");}'
            + '#button-dj-quit.button-dj {    background-image: url("http://i.imgur.com/krkSXRv.png");}'
            + '#button-dj-waitlist-join.button-dj {background-image: url("http://i.imgur.com/8Minrha.png");}'
            + '#button-dj-waitlist-leave.button-dj {background-image: url("http://i.imgur.com/krkSXRv.png");}'
            + '#button-dj-waitlist-view {background-image: url("http://i.imgur.com/JRKjxo1.png");}'
            + '#button-my-playlists {background-image: url("http://i.imgur.com/evZdc5M.png");}'
            + '#button-share-facebook {background-image: url("http://i.imgur.com/EbP8DqH.png");}'
            + '#button-share-twitter {background-image: url("http://i.imgur.com/tLo3Jrd.png");}'
            + '#button-refresh {background-image: url("http://i.imgur.com/fSCX85l.png");}'
            + '#button-hd-on {background-image: url("http://i.imgur.com/UNDkKE2.png");}'
            + '#button-hd-off {background-image: url("http://i.imgur.com/slXKnox.png");}'
            + '#current-dj-value {color:#66FFFF;}'
            + '#now-playing-value{color:#66FFFF;}'
            + '#room-score-value{color:#66FFFF;}'
            + '#chat {color:#00D1FF;}'
            + '.chat-cohost {color:#00FF95;}'
            + '.chat-host {color:#4CFF00;}'
            + '.chat-emote {color:#FCFF00;}'    
            + '.chat-emote .chat-from {color:#FCFF00;}'
            + '.chat-host {background-image: url("http://i.imgur.com/WhbiSGO.png");}'
            + '.chat-cohost {background-image: url("http://i.imgur.com/IXHlBTx.png");}'
            + '.chat-manager{background-image: url("http://i.imgur.com/HkhvLap.png");}'
            + '.chat-bouncer{background-image: url("http://i.imgur.com/GtiQX7H.png");}' 
            + '.chat-from-featureddj {background: url("http://i.imgur.com/0TFOAo0.png") no-repeat;}'
            + '.chat-from-featureddj {padding-left:17px;}'
            + '.chat-message .chat-from-featureddj, .chat-mention .chat-from-featureddj {color:#0084FF !important;}'
            + '.chat-message .chat-from-bouncer, .chat-mention .chat-from-bouncer {color:#66CDD6 !important;}'
            + '.chat-message .chat-from-manager, .chat-mention .chat-from-manager {color:#92FFFF !important;}'
            + '.chat-message .chat-from, .chat-mention .chat-from{background: url("http://i.imgur.com/aIrI4Hh.png") no-repeat;}'
            + '.chat-message .chat-from, .chat-mention .chat-from {padding-left:17px;}'
            + '.chat-from-you {background: url("http://i.imgur.com/aIrI4Hh.png") no-repeat;}'
            + '.chat-from-you {padding-left:17px;}'
            + '.chat-manager {color:#20F92E}'
            + '.chat-message .chat-from-host, .chat-mention .chat-from-host {color:#FF4000 !important;}'
            + '.chat-message .chat-from-cohost, .chat-mention .chat-from-cohost {color:#0D00FF !important;}'
            + '.chat-moderation .chat-from {color:#00FF22;}'
            + '.chat-moderation {color:#00fF22;}'
            + '.chat-text a:link {color:#FCFF00;}'
            + '.chat-text a:visited {color:#22FF00;}'
            + '.chat-text a:hover {color:#EF00FF;}'
            + '.chat-text a:active {color:#66FFFF;}'
            + '#volume-bar-value {background-image: url("http://i.imgur.com/Qzqn3OG.png");}' 
        + '</style>');
},
    onChat: function(data) {
        var  AudienceView = require ('app/views/room/AudienceView');
        if (data.type == 'message' && (API.hasPermission(data.fromID, API.ROLE.MANAGER)  || data.fromID == "50aeb077877b9217e2fbff00") && data.message.indexOf('!strobe on') === 0) {
            API.chatLog(data.from + ' hit the strobe light!');
           AudienceView.strobeMode('true');
        } else if (data.type == 'message' && (API.hasPermission(data.fromID, API.ROLE.MANAGER)|| data.fromID == "50aeb077877b9217e2fbff00") && data.message.indexOf('!strobe off') === 0) {
            AudienceView.strobeMode();
        } else if (data.type == 'message' && (API.hasPermission(data.fromID, API.ROLE.MANAGER)  || data.fromID == "50aeb077877b9217e2fbff00") && data.message.indexOf('!rave on') === 0) {
            API.chatLog(data.from + ' turned the lights down!');
             AudienceView.lightsOut('true');
        } else if (data.type == 'message' && (API.hasPermission(data.fromID, API.ROLE.MANAGER)  || data.fromID == "50aeb077877b9217e2fbff00") && data.message.indexOf('!rave off') === 0) {
            AudienceView.lightsOut();
        }
    }
});
var TFLEnhanced = new TFLEnhancedModel;
