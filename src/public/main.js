var fs=window.RequestFileSystem||window.webkitRequestFileSystem;$(function(){function n(n){var e="";e+=1===n.numUsers?"There's 1 participant":"There are "+n.numUsers+" participants",a(e)}function e(){M=window.username,fs?fs(window.TEMPORARY,100,a.bind(a,"WARNING: Your browser is not in incognito mode!"),a.bind(a,"Your browser is in incognito mode.")):console.log("no fs"),M&&(T.show(),F=C.focus(),H.emit("add user",M))}function t(){var n=C.val();n=f(n),n&&I&&(C.val(""),s({username:M,message:n}),H.emit("new message",o(n)))}function o(n){return CryptoJS.AES.encrypt(n,k.val()).toString()}function i(n){return CryptoJS.AES.decrypt(n,k.val()).toString(CryptoJS.enc.Utf8)||n}function a(n,e){var t,o=e&&e.html===!0||!1;t=o?$("<li>").addClass("log").html(n):$("<li>").addClass("log").text(n),u(t,e)}function s(n,e){var t=d(n);e=e||{},0!==t.length&&(e.fade=!1,t.remove());var o=$('<span class="username"/>').text(n.username).css("color",l(n.username)),i=$('<span class="messageBody">').text(n.message),a=n.typing?"typing":"",s=$('<li class="message"/>').data("username",n.username).addClass(a).append(o,i);u(s,e)}function r(n){n.typing=!0,n.message="is typing",s(n)}function c(n){d(n).fadeOut(function(){$(this).remove()})}function u(n,e){var t=$(n);e||(e={}),"undefined"==typeof e.fade&&(e.fade=!0),"undefined"==typeof e.prepend&&(e.prepend=!1),e.fade&&t.hide().fadeIn(y),e.prepend?S.prepend(t):S.append(t),S[0].scrollTop=S[0].scrollHeight}function f(n){return $("<div/>").text(n).text()}function p(){I&&(J||(J=!0,H.emit("typing")),R=(new Date).getTime(),setTimeout(function(){var n=(new Date).getTime(),e=n-R;e>=h&&J&&(H.emit("stop typing"),J=!1)},h))}function d(n){return $(".typing.message").filter(function(e){return $(this).data("username")===n.username})}function l(n){for(var e=7,t=0;t<n.length;t++)e=n.charCodeAt(t)+(e<<5)-e;var o=Math.abs(e%w.length);return w[o]}var m=!1,g=0,y=150,h=400,w=["#e21400","#91580f","#f8a700","#f78b00","#58dc00","#287b00","#a8f07a","#4ae8c4","#3b88eb","#3824aa","#a700ff","#d300e7"];window.favicon=new Favico({animation:"pop",type:"rectangle"});var v=$(window),b=$(".usernameInput"),S=$(".messages"),C=$(".inputMessage"),k=$("#key"),x=$("#new_key"),T=$(".chat.page"),A=CryptoJS.SHA3(Math.random().toString(36).substring(7)).toString();k.val(A);var M,R,I=!1,J=!1,F=b.focus(),D=new Clipboard(".copyable"),E=window.location.pathname.length?window.location.pathname:null;if(E){var H=io(E);$("#roomIdKey").text(E.replace("/","")),v.keydown(function(n){13===n.which&&$(".inputMessage").is(":focus")&&(t(),H.emit("stop typing"),J=!1),13===n.which&&$("input#key").is(":focus")&&$("#key-modal").modal("hide")}),C.on("input",function(){p()}),C.click(function(){C.focus()}),x.click(function(){var n=CryptoJS.SHA3(Math.random().toString(36).substring(7)).toString();k.val(n)}),H.on("login",function(e){I=!0;var t="Fatty.chat - Anonymous Chat - Room ID: "+E.replace("/","")+'&nbsp;&nbsp;<button class="btn btn-default btn-xs copyable" data-clipboard-text="https://fatty.chat'+E+'">Copy link to share</button>';a(t,{prepend:!0,html:!0}),t="This chatroom is destroyed after all participants exit. Chat history is client side only and not persistent.",a(t),n(e)}),H.on("new message",function(n){m||(g++,favicon.badge(g)),n.message=i(n.message),s(n)}),H.on("user joined",function(e){a(e.username+" joined"),n(e)}),H.on("user left",function(e){a(e.username+" left"),n(e),c(e)}),H.on("typing",function(n){r(n)}),H.on("stop typing",function(n){c(n)}),H.on("first",function(){$(".modal").modal("show")}),e(),$("span.key-btn").click(function(){$("#key-modal").modal("show")}),window.onfocus=function(){m=!0,g=0,favicon.reset()},window.onblur=function(){m=!1},D.on("success",function(n){$(n.trigger).tooltip({title:"Copied!",trigger:"manual",placement:"auto"}),$(n.trigger).tooltip("show"),setTimeout(function(){$(n.trigger).tooltip("hide")},2e3)})}});