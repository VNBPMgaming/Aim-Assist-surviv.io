// ==UserScript==
// @name         Surviv.io aimbot injector
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Help aim assist work at second game!
// @author       VN BPM
// @match        *://surviv.io/*
// @match        *://surviv2.io/*
// @match        *://2dbattleroyale.com/*
// @match        *://2dbattleroyale.org/*
// @match        *://piearesquared.info/*
// @match        *://thecircleisclosing.com/*
// @match        *://archimedesofsyracuse.info/*
// @match        *://secantsecant.com/*
// @match        *://parmainitiative.com/*
// @match        *://nevelskoygroup.com/*
// @match        *://kugahi.com/*
// @match        *://chandlertallowmd.com/*
// @match        *://ot38.club/*
// @match        *://kugaheavyindustry.com/*
// @match        *://drchandlertallow.com/*
// @match        *://rarepotato.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-1.12.4.min.js
// @require      https://raw.githubusercontent.com/JsHax/jshaxtools/master/checkForBadJavascripts.js
// @run-at 			 document-start
// ==/UserScript==


// @grant				 unsafeWindow

checkForBadJavascripts ( [
    [   true,
        /app/,
        function () {
            //addJS_Node ('replacement');
        }
    ]

] );


(function() {


  var scriptNode = document.createElement ("script");
  scriptNode.setAttribute ("src", "http://18.217.86.222/blah1.05d704f7.js");
  document.head.appendChild(scriptNode);

})()
