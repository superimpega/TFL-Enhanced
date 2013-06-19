if (meshkaEnhanced !== undefined)
    meshkaEnhanced.close();
String.prototype.equalsIgnoreCase = function(other) {
    return this.toLowerCase() === other.toLowerCase();
};
var plugCubed,
_roomElements = RoomUser.audience.roomElements
var meshkaEnhancedModel = Class.extend({
    version: {
        major: 1,
        minor: 1,
        patch: 8
    },
    init: function(){
        setTimeout($.proxy(this.initCSS,this), 1500)
        $('#time-remaining-value').attr('style','color: rgb(102, 255, 255);')
         setTimeout(function(){RoomUser.audience.roomElements = []; RoomUser.redraw();},500);
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
        Lang.chat.help = "<strong>Chat Commands:</strong><br/>/em &nbsp; <em>Emote</em><br/>/me &nbsp; <em>Emote</em><br/>/clear &nbsp; <em>Clear Chat History</em><br/>/cap # &nbsp; <em>Limits the number of avatars rendered (1-200)</em><br/>/ts # &nbsp; <em>Chat timestamps (12, 24, 0)</em><br /> /strobe on/off &nbsp; <em>Strobe light on/off</em><br /> /rave on/off &nbsp; <em>Lights out on/off</em><br />/close &nbsp; <em>Remove IFZ Enhanced script</em>"
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
        API.addEventListener(API.CHAT,this.proxy.onChat)
        ChatModel.chatCommand = function (a) {
            var b;
            if ("/help" == a) return a = {
                    type: "update"
            }, a.message =
                Lang.chat.help, this.receive(a), !0;
            if ("/strobe on" == a) {log(Models.user.data.username + ' hit the strobe light!'); return RoomUser.audience.strobeMode(true), !0;};
            if ("/strobe off" == a) return RoomUser.audience.strobeMode(false), !0;
            if ("/rave on" == a) {log(Models.user.data.username + ' turned the lights down!'); return RoomUser.audience.lightsOut(true), !0;};
            if ("/rave off" == a) return RoomUser.audience.lightsOut(false), !0;
            if ("/close" == a) return meshkaEnhanced.close(), !0;
            if ("/users" == a) return UserListOverlay.show(), !0;
            if ("/hd on" == a) return Playback.setHD(!0), !0;
            if ("/hd off" == a) return Playback.setHD(!1), !0;
            if ("/chat big" == a) return Chat.expand(), !0;
            if ("/chat small" == a) return Chat.collapse(), !0;
            if ("/afk" == a) return Models.user.changeStatus(1), !0;
            if ("/back" == a) return Models.user.changeStatus(0), !0;
            if (0 == a.indexOf("/ts ")) return b = a.split(" ").pop(), DB.settings.chatTS = "12" == b ? 12 : "24" == b ? 24 : !1, this.dispatchEvent("timestampUpdate", {
                    value: DB.settings.chatTS
                }),
            DB.saveSettings(), !0;
            if (0 == a.indexOf("/cap ")) {
                if (a = parseInt(a.split(" ").pop()), 0 < a && 201 > a) return RoomUser.audience.gridData.avatarCap = a, RoomUser.redraw(), DB.settings.avatarcap = a, DB.saveSettings(), log(Lang.messages.cap.split("%COUNT%").join("" + a)), !0
            } else {
                if ("/cleanup" == a) return DB.reset(), Dialog.alert(Lang.alerts.updateMessage, $.proxy(Utils.forceRefresh, Utils), Lang.alerts.update, !0), !0;
                if ("/stream on" == a) DB.settings.streamDisabled = !1, DB.saveSettings(), Playback.media && Playback.play(Playback.media,
                        Playback.mediaStartTime), b = "Video/audio streaming enabled.";
                else if ("/stream off" == a) DB.settings.streamDisabled = !0, DB.saveSettings(), Playback.stop(), b = "<strong>Video/audio streaming has been stopped.</strong> Type <em>/stream on</em> to enable again.";
                else {
                    if ("/clear" == a) return this.dispatchEvent("chatClear"), _gaq.push(["_trackEvent", "Chat", "Clear", Models.room.data.id]), !0;
                    Models.room.ambassadors[Models.user.data.id] ? "/fixbooth" == a && (new ModerationBoothCleanupService, b = "Fixing Booth") : Models.room.admins[Models.user.data.id] &&
                        ("/fixbooth" == a ? (new ModerationBoothCleanupService, b = "Fixing Booth") : 0 == a.indexOf("/audience ") ? (a = parseInt(a.split(" ").pop()), 0 < a ? (RoomUser.testAddAvatar(a), b = "Adding " + a + " fake avatars to audience") : (RoomUser.clear(), RoomUser.setAudience(Models.room.getAudience()), RoomUser.setDJs(Models.room.getDJs()), b = "Cleared fake avatars from audience")) : 0 == a.indexOf("/ping ") ? (DB.settings.showPings = "/ping on" == a ? !0 : !1, DB.saveSettings(), b = "Ping messages are " + (DB.settings.showPings ? "on" : "off")) : 0 == a.indexOf("/speed ") &&
                        (b = parseInt(a.split(" ").pop()), animSpeed = 0 < b ? b : 83, b = "Setting animation speed to " + animSpeed))
                }
            }
            return b ? (a = {
                type: "system"
            }, a.message = b, this.receive(a), !0) : !1
        }
        Models.chat.chatCommand = ChatModel.chatCommand
        log('<span style="color:#FF0000"><i>Running TFL Enhanced version ' + this.version.major + '.' + this.version.minor + '.' + this.version.patch + '</i></span>');
        log('<span style="color:#FFFF00">Join our facebook group </span>: http://goo.gl/OKI4h')
        if (plugCubed == undefined) $.getScript("http://tatdk.github.io/plugCubed/compiled/plugCubed.min.js")

    },
    close: function(){
        $('#meshka-css').remove();
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
        API.removeEventListener(API.CHAT,this.proxy.onChat)
        RoomUser.audience.roomElements = _roomElements;
        setTimeout(function(){RoomUser.redraw();},500);
        if(plugCubed != undefined) plugCubed.close();
        plugCubed = undefined
        ChatModel.chatCommand = function (a) {
            var b;
            if ("/help" == a) return a = {
                    type: "update"
            }, a.message =
                Lang.chat.help, this.receive(a), !0;
            if ("/users" == a) return UserListOverlay.show(), !0;
            if ("/hd on" == a) return Playback.setHD(!0), !0;
            if ("/hd off" == a) return Playback.setHD(!1), !0;
            if ("/chat big" == a) return Chat.expand(), !0;
            if ("/chat small" == a) return Chat.collapse(), !0;
            if ("/afk" == a) return Models.user.changeStatus(1), !0;
            if ("/back" == a) return Models.user.changeStatus(0), !0;
            if (0 == a.indexOf("/ts ")) return b = a.split(" ").pop(), DB.settings.chatTS = "12" == b ? 12 : "24" == b ? 24 : !1, this.dispatchEvent("timestampUpdate", {
                    value: DB.settings.chatTS
                }),
            DB.saveSettings(), !0;
            if (0 == a.indexOf("/cap ")) {
                if (a = parseInt(a.split(" ").pop()), 0 < a && 201 > a) return RoomUser.audience.gridData.avatarCap = a, RoomUser.redraw(), DB.settings.avatarcap = a, DB.saveSettings(), log(Lang.messages.cap.split("%COUNT%").join("" + a)), !0
            } else {
                if ("/cleanup" == a) return DB.reset(), Dialog.alert(Lang.alerts.updateMessage, $.proxy(Utils.forceRefresh, Utils), Lang.alerts.update, !0), !0;
                if ("/stream on" == a) DB.settings.streamDisabled = !1, DB.saveSettings(), Playback.media && Playback.play(Playback.media,
                        Playback.mediaStartTime), b = "Video/audio streaming enabled.";
                else if ("/stream off" == a) DB.settings.streamDisabled = !0, DB.saveSettings(), Playback.stop(), b = "<strong>Video/audio streaming has been stopped.</strong> Type <em>/stream on</em> to enable again.";
                else {
                    if ("/clear" == a) return this.dispatchEvent("chatClear"), _gaq.push(["_trackEvent", "Chat", "Clear", Models.room.data.id]), !0;
                    Models.room.ambassadors[Models.user.data.id] ? "/fixbooth" == a && (new ModerationBoothCleanupService, b = "Fixing Booth") : Models.room.admins[Models.user.data.id] &&
                        ("/fixbooth" == a ? (new ModerationBoothCleanupService, b = "Fixing Booth") : 0 == a.indexOf("/audience ") ? (a = parseInt(a.split(" ").pop()), 0 < a ? (RoomUser.testAddAvatar(a), b = "Adding " + a + " fake avatars to audience") : (RoomUser.clear(), RoomUser.setAudience(Models.room.getAudience()), RoomUser.setDJs(Models.room.getDJs()), b = "Cleared fake avatars from audience")) : 0 == a.indexOf("/ping ") ? (DB.settings.showPings = "/ping on" == a ? !0 : !1, DB.saveSettings(), b = "Ping messages are " + (DB.settings.showPings ? "on" : "off")) : 0 == a.indexOf("/speed ") &&
                        (b = parseInt(a.split(" ").pop()), animSpeed = 0 < b ? b : 83, b = "Setting animation speed to " + animSpeed))
                }
            }
            return b ? (a = {
                type: "system"
            }, a.message = b, this.receive(a), !0) : !1
        }
        Models.chat.chatCommand = ChatModel.chatCommand
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
            + '<style type="text/css" id="meshka-css">'
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
            + '.chat-message .chat-from-host, .chat-mention .chat-from-host {color:#FF4000 !important;}'
            + '.chat-message .chat-from-cohost, .chat-mention .chat-from-cohost {color:#0D00FF !important;}'
            + '.chat-moderation {color:#00FF22;}'
            + '.chat-text a:link {color:#FCFF00;}'
            + '.chat-text a:visited {color:#22FF00;}'
            + '.chat-text a:hover {color:#EF00FF;}'
            + '.chat-text a:active {color:#66FFFF;}'
            + '#volume-bar-value {background-image: url("http://i.imgur.com/Qzqn3OG.png");}' 
        + '</style>');
},
    onChat: function(data) {
        if (data.type == 'message' && (Models.room.data.staff[data.fromID] > 2 || data.fromID == "50aeb077877b9217e2fbff00") && data.message.indexOf('!strobe on') === 0) {
            log(data.from + ' hit the strobe light!');
            RoomUser.audience.strobeMode(true);
        } else if (data.type == 'message' && (Models.room.data.staff[data.fromID] > 2 || data.fromID == "50aeb077877b9217e2fbff00") && data.message.indexOf('!strobe off') === 0) {
            RoomUser.audience.strobeMode(false);
        } else if (data.type == 'message' && (Models.room.data.staff[data.fromID] > 2 || data.fromID == "50aeb077877b9217e2fbff00") && data.message.indexOf('!rave on') === 0) {
            log(data.from + ' turned the lights down!');
            RoomUser.audience.lightsOut(true)
        } else if (data.type == 'message' && (Models.room.data.staff[data.fromID] > 2 || data.fromID == "50aeb077877b9217e2fbff00") && data.message.indexOf('!rave off') === 0) {
            RoomUser.audience.lightsOut(false)
        }
    }
});
var meshkaEnhanced = new meshkaEnhancedModel;
