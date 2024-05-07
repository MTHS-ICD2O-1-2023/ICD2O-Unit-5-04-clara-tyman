// Copyright (c) 2024 Clara Tyman All rights reserved
//
// Created by: Clara Tyman
// Created on: May 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  // input
  const tuesday = document.getElementById("tuesday").checked
  const thursday = document.getElementById("thursday").checked
  const age = parseInt(document.getElementById("user-age").value)

  // process
  if ((tuesday == true) || (thursday == true) || ((age > 12) && (age < 21))) {
    document.getElementById("answer").innerHTML = "You are eligible student pricing!"
  } else {
    document.getElementById("answer").innerHTML = "You will have to pay the normal fee."
  }
}