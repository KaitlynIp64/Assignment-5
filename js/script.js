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
  var numChosen = parseInt(document.getElementById("numChosen").value);
  var pi;
  var num = 1;
  var positiveOrNegative = "minus";

  pi = 4 / num;
  while (numChosen > 1) {
    if (positiveOrNegative == "minus") {
      num = num + 2;
      pi = pi - (4 / num);
      positiveOrNegative = "plus";
    } else if (positiveOrNegative == "plus") {
      num = num + 2;
      pi = pi + (4 / num)
      positiveOrNegative = "minus";
    }
    numChosen = numChosen - 1;
  }
  positiveOrNegative = "minus";
  num = 1;
  document.getElementById("answer").innerHTML = "The answer is: " + pi;
}
