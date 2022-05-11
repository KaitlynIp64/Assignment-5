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
  let sum = 0;
  
  for (let counter = 1; counter <= number; counter++) {
    sum += counter;
  }
  document.getElementById("answer").innerHTML = "The answer is: " + sum;
}