if (meshkaEnhanced !== undefined)
    meshkaEnhanced.close();
String.prototype.equalsIgnoreCase = function(other) {
    return this.toLowerCase() === other.toLowerCase();
};
var meshkaEnhancedModel = Class.extend({
    version: {
        major: 1,
        minor: 0,
        patch: 0
    },
    init: function(){
        $('#room-wheel').hide()
        $('head').append('<style type="text/css" id="meshka-css">'
            + 'html{background: url("http://i.imgur.com/Rqy6I.jpg") no-repeat scroll center top #000000;'
            + '#userinterface { position: absolute; left:15px; top: 250px; z-index:8;}'
            + '#userinterface ul {list-style-type:none; margin:0; padding:0;}'
            + '#userinterface li {float:left;}'
            + '#userinterface p {background-color: #0b0b0b; display:block; width:75px; padding:8px; text-align:center; color: #fff; font-size: 13px; font-variant: small-caps;}'
            + '#userinterface p:hover {background-color: #3C3C3C}'
        + '</style>');
        this.proxy = {
            menu: {
                onWootClick:    $.proxy(this.onWootClick,   this),
                onJoinClick:    $.proxy(this.onJoinClick,   this),
                onVideoClick:   $.proxy(this.onVideoClick,  this),
                onStreamClick:  $.proxy(this.onStreamClick, this),
                onKillClick:    $.proxy(this.onKillClick,   this)
            },
            onDjAdvance:          $.proxy(this.onDjAdvance,     this),
        };
        API.addEventListener(API.DJ_ADVANCE,this.proxy.onDjAdvance)
        var words = {
            // Syntax: 'Search word' : 'Replace word',
            "Points" : "Points",
            "Now Playing" : "Now Playing",
            "Time Remaining" : "Time Remaining",
            "Volume" : "Crank it up!",
            "Current DJ" : "Current DJ",
            "Crowd Response" : "Crowd's Reaction",
            "Fans":"Fans"
        };
        String.prototype.prepareRegex = function() {
            return this.replace(/([\[\]\^\&\$\.\(\)\?\/\\\+\{\}\|])/g, "\\$1");
        };
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
            if ("/users" == a) return UserListOverlay.show(), !0;
            if ("/hd on" == a) return Playback.setHD(!0), !0;
            if ("/hd off" == a) return Playback.setHD(!1), !0;
            if ("/chat big" == a) return this.expand(), !0;
            if ("/chat small" == a) return this.collapse(), !0;
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
        log('<span style="color:#FF0000"><i>Running IFZ Enhanced version ' + this.version.major + '.' + this.version.minor + '.' + this.version.patch + '</i></span>');
    },
    close: function(){
        $('#meshka-css').remove();
        $('#userinterface').remove();
        $('#room-wheel').show()
        ChatModel.chatCommand = function (a) {
            var b;
            if ("/help" == a) return a = {
                    type: "update"
            }, a.message =
                Lang.chat.help, this.receive(a), !0;
            if ("/users" == a) return UserListOverlay.show(), !0;
            if ("/hd on" == a) return Playback.setHD(!0), !0;
            if ("/hd off" == a) return Playback.setHD(!1), !0;
            if ("/chat big" == a) return this.expand(), !0;
            if ("/chat small" == a) return this.collapse(), !0;
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
    data: {
        woot: true,
        join: false,
        userlist: true,
        notify: false
    }

});
var meshkaEnhanced = new meshkaEnhancedModel;
function initAPIListeners() 
{
    API.addEventListener(API.DJ_ADVANCE, djAdvanced);
    API.addEventListener(API.VOTE_UPDATE, function(obj) {
        if (userList)
            populateUserlist();
    });
    API.addEventListener(API.CURATE_UPDATE, function(obj) {
        if(meshkaEnhanced.data.notify)
        appendToChat(obj.user.username + " added " + Models.room.data.media.author + " - " + Models.room.data.media.title, null, "#00FF00");
        if (userList)
            populateUserlist();
    });
    API.addEventListener(API.USER_JOIN, function(user) {
        if (meshkaEnhanced.data.notify){
        appendToChat(user.username + " joined the room", null, "#3366FF");
        }
        if(API.getUser(user.id).mehcount===undefined){
        API.getUser(user.id).mehcount=0
        }
        if (userList)
            populateUserlist();
    });
    API.addEventListener(API.USER_LEAVE, function(user) {
        if (meshkaEnhanced.data.notify){
        appendToChat(user.username + " left the room", null, "#3366FF");
        }
        if (userList)
            populateUserlist();
    });
}

function displayUI() {
    $('#plugbot-ui').remove();
    $('#playback-container').append('<div id="plugbot-ui"></div>');
    $('#plugbot-ui').append(
        '<ul>' +
        '<li id="plugbot-btn"><p id="plugbot-btn-woot" style="color:#3FFF00";>autowoot</p></li>' +
        '<li id="plugbot-btn"><p id="plugbot-btn-queue" style="color:#ED1C24">autojoin</p></li>' +
        '<li id="plugbot-btn"><p id="plugbot-btn-userlist" style="color:#3FFF00">userlist</p></li>' +
        '<li id="plugbot-btn"><p id="plugbot-btn-notify" style="color:#ED1C24">alerts</p></li>' +
        '<li id="plugbot-btn"><p id="plugbot-btn-kill" style="color:#ED1C24">remove</p></li>' +
        '</ul>' +
        '</div>'
    );
}

function initUIListeners()
{   
    $("#plugbot-btn-userlist").on("click", function() {
        meshkaEnhanced.data.userlist = !meshkaEnhanced.data.userlist;
        $(this).css("color", meshkaEnhanced.data.userlist ? "#3FFF00" : "#ED1C24");
        $("#plugbot-userlist").css("visibility", meshkaEnhanced.data.userlist ? ("visible") : ("hidden"));
        if (!meshkaEnhanced.data.userlist)
            $("#plugbot-userlist").empty();
        else
            populateUserlist();
    });
    $("#plugbot-btn-woot").on("click", function() {
        meshkaEnhanced.data.woot = !meshkaEnhanced.data.woot;
        $(this).css("color", meshkaEnhanced.data.woot ? "#3FFF00" : "#ED1C24");
        if (meshkaEnhanced.data.woot) $("#button-vote-positive").click();
    });
    $("#plugbot-btn-queue").on("click", function() {
        meshkaEnhanced.data.join = !meshkaEnhanced.data.join;
        $(this).css("color", meshkaEnhanced.data.join ? "#3FFF00" : "#ED1C24");
        $("#button-dj-waitlist-" + (meshkaEnhanced.data.join ? "join" : "leave")).click();
    });
    $("#plugbot-btn-notify").on("click", function() {
        meshkaEnhanced.data.notify = !meshkaEnhanced.data.notify;
        $(this).css("color", meshkaEnhanced.data.notify ? "#3FFF00" : "#ED1C24");
    });
}


function djAdvanced(obj) {
    displayUI();
    setTimeout(function() {
        if (autowoot) {
            var dj = API.getDJs()[0];
            if (dj === null) return;
            if (dj == API.getSelf()) return;
            $('#button-vote-positive').click();
        }
        if ($("#button-dj-waitlist-join").css("display") === "block" && autoqueue)
            $("#button-dj-waitlist-join").click();
    },3000);
    if (userList)
        populateUserlist();
}

function populateUserlist() 
{

    $('#plugbot-userlist').html(' ');
    $('#plugbot-userlist').append('<h1 style="text-indent:12px;color:#42A5DC;font-size:14px;font-variant:small-caps;">Users: ' + API.getUsers().length + '</h1>');
    $('#plugbot-userlist').append('<p style="padding-left:12px;text-indent:0px !important;font-style:italic;color:#42A5DC;font-size:11px;">Click a username to<br />@mention them</p><br />');
    if ($('#button-dj-waitlist-view').attr('title') !== '') {
        if ($('#button-dj-waitlist-leave').css('display') === 'block' && ($.inArray(API.getDJs(), API.getSelf()) == -1)) {
            var spot = $('#button-dj-waitlist-view').attr('title').split('(')[1];
                spot = spot.substring(0, spot.indexOf(')'));
            $('#plugbot-userlist').append('<h1 id="plugbot-queuespot"><span style="font-variant:small-caps">Waitlist:</span> ' + spot + '</h3><br />');
        }
    }
    var users = new Array();
    for (user in API.getUsers())
    {
        users.push(API.getUsers()[user]);
    }
    for (user in users) 
    {
        var user = users[user];
        appendUser(user);
    }
}

function appendUser(user) 
{
    var username = user.username;
    var permission = user.permission;
    if (user.admin) {
        permission = 99;
    }
    var imagePrefix;
    switch (permission) {
        case 0:     // Normal user
        case 1:     // Featured DJ
            imagePrefix = 'normal';
            break;
        case 2:     // Bouncer
            imagePrefix = 'bouncer';
            break;
        case 3:     // Manager
            imagePrefix = 'manager';
            break;
        case 4:
        case 5:     // Co-host
            imagePrefix = 'host';
            break;
        case 99:    // Admin
            imagePrefix = 'admin';
            break;
    }
    if (API.getDJs()[0].username == username) {
        if (imagePrefix === 'normal') {
            drawUserlistItem('void', '#42A5DC', username);
        } else {
            drawUserlistItem(imagePrefix + '_current.png', '#42A5DC', username);
        }
    } else if (imagePrefix === 'normal') {
        drawUserlistItem('void', colorByVote(user.vote), username);
    } else {
        drawUserlistItem(imagePrefix + imagePrefixByVote(user.vote), colorByVote(user.vote), username);
    }
}
function colorByVote(vote) {
    if (!vote)  {
        return '#fff'; // blame Boycey
    }
    switch (vote) {
        case -1:    return '#c8303d';
        case 0:     return '#fff';
        case 1:     return '#c2e320';
    }
}
function imagePrefixByVote(vote) {
    if (!vote) {
        return '_undecided.png'; // blame boycey again
    }
    switch (vote) {
        case -1:    return '_meh.png';
        case 0:     return '_undecided.png';
        case 1:     return '_woot.png';
    }
}
function drawUserlistItem(imagePath, color, username) {
    if (imagePath !== 'void') {
        var realPath = 'http://www.theedmbasement.com/basebot/userlist/' + imagePath;
        $('#plugbot-userlist').append('<img src="' + realPath + '" align="left" style="margin-left:6px" />');
    }
    $('#plugbot-userlist').append(
        '<p style="cursor:pointer;' + (imagePath === 'void' ? '' : 'text-indent:6px !important;')
        + 'color:' + color + ';'
        + ((API.getDJs()[0].username == username) ? 'font-size:15px;font-weight:bold;' : '')
        + '" onclick="$(\'#chat-input-field\').val($(\'#chat-input-field\').val() + \'@' + username + ' \').focus();">' + username + '</p>'
    );
}

/*End of PlugBot Core - Colgate's Expansion past here*/

/*AppendToChat*/
function appendToChat(message, from, color, changeToColor){
    style = "";
    if (color) style = 'style="color:' + color + ';"';
    if (from)
        div = $('<div class="chat-message"><span class="chat-from" ' + style + '>' + from + '</span><span class="chat-text" ' + style + '>: ' + message + '</span></div>')[0];
    else
        div = $('<div class="chat-message"><span class="chat-text" ' + style + ' >' + message + '</span></div>')[0];
    scroll = false;
    if ($("#chat-messages")[0].scrollHeight - $("#chat-messages").scrollTop() == $("#chat-messages").outerHeight())
        scroll = true;
    var curChatDiv = Popout ? Popout.Chat.chatMessages : Chat.chatMessages;
    var s = curChatDiv.scrollTop()>curChatDiv[0].scrollHeight-curChatDiv.height()-20;
    curChatDiv.append(div);
    if (s)
        curChatDiv.scrollTop(curChatDiv[0].scrollHeight);
    
    if (changeToColor) {
        $(div).click(function(e) {
            this.childNodes[0].style.color = changeToColor;
        });
    }
}
/*init*/

$('#plugbot-userlist').remove();
$('#plugbot-css').remove();
$('#plugbot-js').remove();

$('body').prepend('<style type="text/css" id="plugbot-css">'
    + '#plugbot-ui { position: absolute; left:15px; top: 250px; z-index:8;}'
    + '#plugbot-ui h2 { background-color: #0b0b0b; height: 112px; width: 156px; margin: 0; color: #fff; font-size: 13px; font-variant: small-caps; padding: 8px 0 0 12px; border-top: 1px dotted #292929; }'
    + '#plugbot-ui ul {list-style-type:none; margin:0; padding:0;}'
    + '#plugbot-ui li {float:left;}'
    + '#plugbot-ui p {background-color: #0b0b0b; display:block; width:75px; padding:8px; text-align:center; color: #fff; font-size: 13px; font-variant: small-caps;}'
    + '#plugbot-ui p:hover {background-color: #3C3C3C}'
    
    + '#plugbot-userlist { border: 6px solid rgba(10, 10, 10, 0.8); border-left: 0 !important; background-color: #000000; padding: 8px 0px 20px 0px; width: 12%; }'
    + '#plugbot-userlist p { margin: 0; padding-top: 4px; text-indent: 24px; font-size: 10px; }'
    + '#plugbot-userlist p:first-child { padding-top: 0px !important; }'
    
    + '#plugbot-queuespot { color: #42A5DC; text-align: left; font-size: 15px; margin-left: 8px }'
    + '</style>');

$("#button-vote-positive").click();

initAPIListeners();
$('body').append('<div id="plugbot-userlist"></div>');
populateUserlist();
displayUI();
initUIListeners();