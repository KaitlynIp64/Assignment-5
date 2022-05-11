// Copyright (c) 2022 Kaitlyn Ip All rights reserved
//
// Created by: Kaitlyn Ip
// Created on: May 2022
// This file contains xxx
"use strict"
/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Assignment-5/sw.js", {
    scope: "/Assignment-5/",
  });
}

/**
 * Input
 */
function myButtonClicked() {
  const number = parseInt(document.getElementById("number").value);
    let iterations = 400000;
    let denominator = 1;
    let multiplier = 1;
    let pi = (4 / number);

    for(let counter = 2; counter <= iterations; counter++)
    {
        pi += ( (4 / (denominator += 2)) * (multiplier *= -1) );
    }
  document.getElementById("answer").innerHTML = "The answer is: " + pi;
}