// ==UserScript==
// @name         auto click
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://leetcode.com/*
// @grant        none
// ==/UserScript==


setTimeout(function(){
    document.querySelector("#cn-banner > div > div > div.cn-close-btn").click();
}, 1000); // replace 1000 with the number of milliseconds you want to wait before executing the function


