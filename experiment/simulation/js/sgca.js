function navNext() {
  for (let temp = 0; temp <= 7; temp++) {
    document.getElementById("canvas" + temp).style.display = "none";
  }

  simsubscreennum += 1;
  document.getElementById("canvas" + simsubscreennum).style.display = "block";
  document.getElementById("nextButton").style.display = "none";
  magic();
}
let r = 0;
let tempr = [];
// tempr.push(r);
let lastp,
  flag = 0;
let repeat = 0;
let soil = "";
let myInt = 0;
let ca;
let data = 0;
let arr = 0;
let header1 = 0;
let header2 = 0;
let questions = [
  "The positive terminal of the battery is known as ",
  "In the Schlumberger array, the electrodes are placed at equal distances?",
];

let options2 = [
  ["Anode", "Cathode ", "Electrode", "None of these"], //anode
  ["True", "False"], //false
];

let headers1 = [
  ["NO", "AB/2(m)", "MN/2(m)", "V(v)", "I(A)", "R(ohm)", "K(m)"],
  ["NO", "AB/2(m)", "MN/2(m)", "R(ohm)", "K(m)"],
];
let headers2 = [
  ["NO", "AB/2(m)", "MN/2(m)", "V(v)", "I(A)", "R(ohm)", "K(m)", "KR(ohm-m)"],
  ["NO", "AB/2(m)", "MN/2(m)", "R(ohm)", "K(m)", "KR(ohm-m)"],
];
let arr3 = [
  272.67, 376.89, 444.08, 583.5, 697.81, 722.08, 814.92, 835.74, 767.15, 760.54,
  664.42, 728.43, 808.61, 1045.12,
];
let data1 = [
  [1, 1, 0.25, 1.5, 0.028, 53.57, 5.09],
  [2, 1.5, 0.25, 0.91, 0.0332, 27.4, 13.75],
  [3, 2, 0.25, 0.79, 0.044, 17.95, 24.74],
  [4, 3, 0.25, 0.4, 0.0385, 10.39, 56.16],
  [5, 4, 0.5, 0.44, 0.0312, 14.1, 49.49],
  [6, 4, 0.25, 0.23, 0.0319, 7.21, 100.15],
  [7, 5, 0.5, 0.48, 0.0458, 10.48, 77.76],
  [8, 6, 0.5, 0.32, 0.043, 7.44, 112.33],
  [9, 8, 0.5, 0.16, 0.0418, 3.83, 200.3],
  [10, 10, 1, 0.17, 0.0347, 4.89, 155.53],
  [11, 10, 0.5, 0.08, 0.0376, 2.12, 313.41],
  [12, 15, 1, 0.09, 0.0435, 2.07, 351.9],
  [13, 20, 1, 0.05, 0.0385, 1.29, 626.83],
  [14, 30, 1, 0.02, 0.027, 0.74, 1412.3],
];

let data2 = [
  [1, 1, 0.5, 154.7, 2.4],
  [2, 1.5, 0.5, 86.9, 6],
  [3, 2, 0.5, 62.2, 12],
  [4, 3, 0.5, 37.5, 27],
  [5, 4, 0.5, 20.4, 78],
  [6, 4, 1, 40.4, 38],
  [7, 5, 1, 25.3, 75],
  [8, 6, 1, 13.07, 156],
  [9, 8, 3, 46.7, 48],
  [10, 10, 3, 18.17, 113],
  [11, 10, 3, 8.82, 205],
  [12, 15, 3, 4.63, 323],
  [13, 20, 3, 2.5, 467],
  [14, 30, 10, 5.9, 126],
];

let arr4 = [
  371.28, 521.4, 746.4, 1012.5, 1591.2, 1535.2, 1897.5, 2038.92, 2241.6,
  2053.21, 1808.1, 1495.49, 1167.5, 743.4,
];

let data3 = [
  [1, 1, 0.5, 202.6, 2.36],
  [2, 1.5, 0.5, 61.2, 6.28],
  [3, 2, 0.5, 36.9, 11.7],
  [4, 3, 0.5, 11.9, 22.47],
  [5, 4.5, 0.5, 4.518, 62.8],
  [6, 4.5, 1.5, 17.08, 18.84],
  [7, 7, 1.5, 3.933, 48.93],
  [8, 10, 1.5, 1.169, 102.4],
  [9, 15, 1.5, 0.301, 233.14],
];

let arr5 = [
  478.136, 384.336, 431.73, 267.393, 283.7304, 321.7872, 192.441, 119.7056,
  70.175,
];
let meanResistivity = document.getElementById("average-resistivity");
meanResistivity.addEventListener("mouseover", displayTooltip);
meanResistivity.addEventListener("mouseout", displayTooltip);
function displayTooltip() {
  document.querySelector(".formula-open").classList.toggle("display");
  document.querySelector(".formula-open-arrow").classList.toggle("display");
}

let popup = document.querySelector(".pop-up");
let formative = document.getElementById("formative");
let formative1 = document.getElementById("formative1");
let formative2 = document.getElementById("formative2");
formative.addEventListener("click", selectFormative);
formative1.addEventListener("click", selectFormative);
formative2.addEventListener("click", selectFormative);
formative.addEventListener("change", evalFormative);
formative1.addEventListener("change", evalFormative);
formative2.addEventListener("change", evalFormative);
function selectFormative() {
  popup.classList.toggle("pop-up-height");
}
function evalFormative(ev) {
  let formId = ev.target.id;
  console.log(formId);
  let formAnsCheck, formativeSpan, userInput, ans, correctAnsSpan;
  if (formId == "formative") {
    formativeSpan = document.getElementById("formativeSpan");
    correctAnsSpan = document.getElementById("formAns");
    userInput = formative.value;
    ans = "Potential Electrode";
  } else if (formId == "formative1") {
    formativeSpan = document.getElementById("formativeSpan1");
    correctAnsSpan = document.getElementById("formAns1");
    userInput = formative1.value;
    ans = "Anode";
  } else if (formId == "formative2") {
    formativeSpan = document.getElementById("formativeSpan2");
    correctAnsSpan = document.getElementById("formAns2");
    userInput = formative2.value;
    ans = "False";
  }
  if (userInput == ans) {
    formativeSpan.innerHTML = "✔";
    formativeSpan.classList.remove("wrongSpan");
    formativeSpan.classList.add("correctSpan");
    correctAnsSpan.innerHTML = "";
    // document.getElementById("nextButton").style.display = "block";
    setTimeout(function () {
      navNext();
    }, 1000);
  } else {
    formativeSpan.innerHTML = "⨉";
    formativeSpan.classList.remove("correctSpan");
    formativeSpan.classList.add("wrongSpan");
    correctAnsSpan.innerHTML = `Correct answer:${ans}`;
    // document.getElementById("nextButton").style.display = "block";
    setTimeout(function () {
      navNext();
    }, 1000);
  }
}
//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow() {
  if (document.getElementById("arrow1").style.display == "none")
    document.getElementById("arrow1").style.display = "block";
  else document.getElementById("arrow1").style.display = "none";
}

//stop blinking arrow
function myStopFunction() {
  clearInterval(myInt);
  document.getElementById("arrow1").style.display = "none";
}

function animateArrowATPosition(left, top, height, degg) {
  document.getElementById("arrow1").style =
    "display:block ;position:absolute; left:" +
    left +
    "px; top: " +
    top +
    "px; height:" +
    height +
    "px; z-index: 10;";
  document.getElementById("arrow1").style.WebkitTransform =
    "rotate(" + degg + "deg)";
  // Code for IE9
  document.getElementById("arrow1").style.msTransform =
    "rotate(" + degg + "deg)";
  // Standard syntax
  document.getElementById("arrow1").style.transform = "rotate(" + degg + "deg)";
}

//-------------------------------------function magic starts here----------------------------------------------------

function generateRandom() {
  // tempr.forEach(function (d) {
  //   let random = Math.floor(Math.random() * 3);
  //   console.log(d, random);
  //   while (random == d) {
  //     random = Math.floor(Math.random() * 3);
  //   }
  //   r = random;
  // });
  // console.log(r);
  // tempr.push(r);
  if (repeat == 0) {
    r = Math.floor(Math.random() * 3);
    tempr.push(r);
  }
  if (repeat == 1) {
    do {
      r = Math.floor(Math.random() * 3);
    } while (tempr[0] == r);
    tempr.push(r);
  }
  if (repeat == 2) {
    do {
      r = Math.floor(Math.random() * 3);
    } while (tempr[0] == r || tempr[1] == r);
    tempr.push(r);
  }
}
function magic() {
  if (simsubscreennum == 1) {
    generateRandom();
    if (r == 0) {
      data = data1.slice();
      arr = arr3.slice();
      header1 = headers1[0].slice();
      header2 = headers2[0].slice();
    } else if (r == 1) {
      data = data2.slice();
      arr = arr4.slice();
      header1 = headers1[1].slice();
      header2 = headers2[1].slice();
    } else if (r == 2) {
      data = data3.slice();
      arr = arr5.slice();
      header1 = headers1[1].slice();
      header2 = headers2[1].slice();
    }
    console.log(r);
    document.getElementById("trial").style.display = "block";
    repeat++;
    document.getElementById("trial").innerHTML = "Trial : " + repeat;
    document.getElementById("nextButton").style.display = "none";
    if (flag) resetAllStyles();
    document.getElementById("a23").style.display = "block";
    document.getElementById("nextButton").style.display = "none";
    document.getElementById("csoil").style.display = "block";
    document.getElementById("Source").style.display = "block";
    myInt = setInterval(function () {
      animatearrow();
    }, 500);
    animateArrowATPosition(390, 130, 30, 180);
    document.getElementById("a5").onclick = function () {
      step1();
    };
  } else if (simsubscreennum == 2) {
    if (repeat == 1) {
      let popUp = document.querySelectorAll(".pop-up")[0];
      popUp.style.display = "none";
    }
    document.getElementById("a6").style.display = "none";
    document.getElementById("trial").style.display = "block";

    document.getElementById("trial").innerHTML = "Trial : " + repeat;
    document.getElementById("b5").style.display = "block";
    document.getElementById("b24").style.display = "block";
    document.getElementById("csoil2").style.display = "block";
    document.getElementById("Source").style.display = "block";

    document.getElementById("nextButton").style.display = "none";
    myInt = setInterval(function () {
      animatearrow();
    }, 500);
    animateArrowATPosition(204, 130, 30, 180);

    document.getElementById("b5").onclick = function () {
      step2();
    };
  } else if (simsubscreennum == 3) {
    if (repeat == 2) {
      let popUp = document.querySelectorAll(".pop-up")[1];
      popUp.style.display = "none";
    }
    document.getElementById("b6").style.display = "none";
    document.getElementById("trial").style.display = "block";

    document.getElementById("trial").innerHTML = "Trial : " + repeat;
    document.getElementById("c5").style.display = "block";
    document.getElementById("c6").style.display = "block";

    document.getElementById("c23").style.display = "block";
    document.getElementById("csoil4").style.display = "block";
    document.getElementById("Source").style.display = "block";

    document.getElementById("nextButton").style.display = "none";
    myInt = setInterval(function () {
      animatearrow();
    }, 500);
    animateArrowATPosition(535, 130, 30, 180);

    document.getElementById("c5").onclick = function () {
      step3();
    };
  } else if (simsubscreennum == 4) {
    if (repeat == 3) {
      let popUp = document.querySelectorAll(".pop-up")[2];
      popUp.style.display = "none";
    }
    document.getElementById("c6").style.display = "none";
    document.getElementById("trial").style.display = "block";

    document.getElementById("trial").innerHTML = "Trial : " + repeat;
    document.getElementById("d5").style.display = "block";
    document.getElementById("d6").style.display = "block";
    document.getElementById("c21").style.display = "block";
    document.getElementById("csoil6").style.display = "block";
    document.getElementById("Source").style.display = "block";

    document.getElementById("nextButton").style.display = "none";
    myInt = setInterval(function () {
      animatearrow();
    }, 500);
    animateArrowATPosition(20, 130, 30, 180);

    document.getElementById("d5").onclick = function () {
      step4();
    };
  } else if (simsubscreennum == 5) {
    document.getElementById("d6").style.display = "none";
    document.getElementById("trial").style.display = "block";
    document.getElementById("trial").innerHTML = "Trial : " + repeat;
    document.getElementById("a8").style.display = "block";
    document.getElementById("a7").style.display = "block";
    document.getElementById("sw11").style.display = "block";

    myInt = setInterval(function () {
      animatearrow();
    }, 500);
    animateArrowATPosition(310, 400, 30, 180);

    document.getElementById("a8").onclick = function () {
      step5();
    };
  } else if (simsubscreennum == 6) {
    showNextButton(false);
    let canvas5Elements = document.getElementById("can5");
    let children = canvas5Elements.children;
    for (const element of children) {
      element.style.display = "none";
    }
    displayData();
  } else if (simsubscreennum == 7) {
    let canvas7Elements = document.getElementById("canvas6");
    let children = canvas7Elements.children;
    for (const element of children) {
      element.style.display = "none";
    }
    document.getElementById(
      "meanResult"
    ).innerHTML = `Mean Resistivity = ${average} Ω-m`;
  }
}

function step1() {
  myStopFunction();
  document.getElementById("a5").style.animation =
    "mover 1s ease-in-out  forwards";
  setTimeout(function () {
    document.getElementById("a6").style.animation =
      "movep 0.1s ease-in-out  forwards";
    document.getElementById("a23").style.display = "none";
    document.getElementById("a32").style.display = "block";
    document.getElementById("csoil1").style.display = "block";
    document.getElementById("csoil").style.display = "none";

    setTimeout(function () {
      document.getElementById("a5").style.display = "none";
      if (repeat == 1) {
        let popUp = document.querySelectorAll(".pop-up")[0];
        popUp.style.display = "block";
      } else {
        // document.getElementById("nextButton").style.display = "block";
        console.log(1);
        navNext();
      }
    }, 1000);
  }, 1000);
}

function step2() {
  myStopFunction();
  document.getElementById("b5").style.animation =
    "mover 1s ease-in-out  forwards";
  setTimeout(function () {
    document.getElementById("b6").style.animation =
      "movep 0.1s ease-in-out  forwards";
    document.getElementById("b24").style.display = "none";

    document.getElementById("b42").style.display = "block";
    document.getElementById("csoil3").style.display = "block";
    document.getElementById("csoil2").style.display = "none";
    //document.getElementById("b24").style.transform = "rotate(15deg)";
    setTimeout(function () {
      document.getElementById("b5").style.display = "none";
      // document.getElementById("nextButton").style.display = "block";
      if (repeat == 2) {
        let popUp = document.querySelectorAll(".pop-up")[1];
        popUp.style.display = "block";
      } else {
        // document.getElementById("nextButton").style.display = "block";
        console.log(1);
        navNext();
      }
    }, 1000);
  }, 1000);
}

function step3() {
  myStopFunction();
  document.getElementById("c5").style.animation =
    "mover 1s ease-in-out  forwards";
  setTimeout(function () {
    document.getElementById("c6").style.animation =
      "movep 0.1s ease-in-out  forwards";
    document.getElementById("c23").style.display = "none";

    document.getElementById("c32").style.display = "block";
    document.getElementById("csoil5").style.display = "block";
    document.getElementById("csoil4").style.display = "none";
    setTimeout(function () {
      document.getElementById("c5").style.display = "none";
      if (repeat == 3) {
        let popUp = document.querySelectorAll(".pop-up")[2];
        popUp.style.display = "block";
      } else {
        // document.getElementById("nextButton").style.display = "block";
        console.log(1);
        navNext();
      }
    }, 1000);
  }, 1000);
}

function step4() {
  myStopFunction();
  document.getElementById("d5").style.animation =
    "mover 1s ease-in-out  forwards";
  setTimeout(function () {
    document.getElementById("d6").style.animation =
      "movep 0.1s ease-in-out  forwards";
    document.getElementById("c21").style.display = "none";
    document.getElementById("c12").style.display = "block";
    document.getElementById("csoil7").style.display = "block";
    document.getElementById("csoil6").style.display = "none";
    setTimeout(function () {
      document.getElementById("d5").style.display = "none";
      // navNext();
      document.getElementById("nextButton").style.display = "block";
    }, 1000);
  }, 1000);
}

function step5() {
  myStopFunction();
  document.getElementById("a8").style.animation =
    "movek 1s ease-in-out  forwards";
  setTimeout(function () {
    document.getElementById("a8").style.display = "none";
    document.getElementById("a7").style.display = "none";
    document.getElementById("a9").style.display = "block";
    setTimeout(function () {
      document.getElementById("e8").style.display = "block";
      myInt = setInterval(function () {
        animatearrow();
      }, 500);
      animateArrowATPosition(310, 400, 30, 180);
      document.getElementById("e8").onclick = function () {
        myStopFunction();
        document.getElementById("e8").style.animation =
          "movek1 1s ease-in-out  forwards";
        setTimeout(function () {
          document.getElementById("e8").style.display = "none";
          document.getElementById("sw11").style.display = "none";
          document.getElementById("sw12").style.display = "block";
          setTimeout(function () {
            document.getElementById("tab2-1").style.display = "block";
            document.getElementById("tab22-1").style.display = "block";
            document.getElementById("progressBar").style.display = "block";
            generate_table();
          }, 500);
        }, 1000);
      };
    }, 1000);
  }, 1000);
}

function bigImg(x) {
  x.style.height = "200px";
  x.style.width = "200px";
}

function normalImg(x) {
  x.style.height = "145px";
  x.style.width = "145px";
}

function displayData() {
  let tableHead = document.getElementById("thead2");
  let thead = tableHead.insertRow(0);
  for (let i = 0; i < header2.length; i++) {
    thead.insertCell(i).innerHTML = header2[i];
  }
  let table = document.getElementById("table2");
  let tableBody = document.getElementById("table2-body");
  for (let i = 0; i < data.length; i++) {
    let row = tableBody.insertRow(-1);
    for (let j = 0; j < data[i].length + 1; j++) {
      let cell = row.insertCell(j);
      if (j !== data[i].length) {
        cell.innerHTML = data[i][j];
      } else {
        let inputBox = document.createElement("input");
        inputBox.type = "text";
        inputBox.id = `ans${i}`;
        inputBox.addEventListener("input", validate, Event);
        inputBox.classList.add("tableInput");
        cell.appendChild(inputBox);
      }
    }
    if (i === data.length - 1) {
      appendCheckButton();
    }
  }
  table.append(tableBody);
}

function validate(e) {
  e.target.value = e.target.value
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*?)\..*/g, "$1");
}

let interval = 600;
let increment = 0;
function generate_table() {
  let tableHead = document.getElementById("thead1");
  let thead = tableHead.insertRow(0);
  for (let i = 0; i < header1.length; i++) {
    thead.insertCell(i).innerHTML = header1[i];
  }
  let table = document.getElementById("tab2-body");
  for (let i = 0; i < data.length; i++) {
    let runner = setTimeout(function () {
      let rows = table.insertRow(-1);
      clearTimeout(runner);
      eachRow(rows, data[i]);
      if (i == data.length - 1) {
        showNextButton(true);
      }
    }, interval * increment);
    increment = increment + 1;
  }
}
let step = 0;
function eachRow(rows, row) {
  for (let i = 0; i < row.length; i++) {
    rows.insertCell(i).innerHTML = row[i];
  }
  document.getElementById("file").value = step;
  step += Math.floor(100 / data.length) + 1;
}

function showNextButton(visibility) {
  document.getElementById("nextButton").style.display = visibility
    ? "block"
    : "none";
}

function appendCheckButton() {
  let evaluateTable = document.getElementById("table2");
  let btnCheck = document.createElement("button");
  btnCheck.innerHTML = "CHECK";
  btnCheck.classList.add("end");
  btnCheck.addEventListener("click", evaluateAnswer);
  evaluateTable.appendChild(btnCheck);
}

function evaluateAnswer() {
  let evaluateTable = document.getElementById("table2-body");
  for (let i = 0; i < data.length; i++) {
    if (Number(document.getElementById("ans" + i).value) == arr[i]) {
      let correctSpan = document.createElement("span");
      correctSpan.innerHTML = "✔";
      correctSpan.classList.add("correctSpan");
      document.getElementById("ans" + i).parentNode.append(correctSpan);
    } else {
      let wrongSpan = document.createElement("span");
      wrongSpan.innerHTML = "⨉";
      wrongSpan.classList.add("wrongSpan");
      document.getElementById("ans" + i).parentElement.append(wrongSpan);
    }
  }
  let checkButtonInput = document.getElementById("table2");
  checkButtonInput.children[1].removeEventListener("click", evaluateAnswer);
  checkButtonInput.children[1].addEventListener("click", displayResult);
  checkButtonInput.children[1].innerHTML = "RESULT";
}

function displayResult() {
  for (let i = 0; i < data.length; i++) {
    document.getElementById("ans" + i).value = arr[i];
    document.getElementById("ans" + i).disabled = true;
    document.getElementById("ans" + i).classList.add("removeInputStyle");
    document.getElementById("ans" + i).nextElementSibling.remove();
  }
  let evaluateTable = document.getElementById("table2");
  console.log(evaluateTable.children[1]);
  evaluateTable.children[1].remove();
  document.getElementById("div1").style.display = "block";
}
let calculateAverage = document.getElementById("calculate-average");
let averageResistivity = document.getElementById("average-resistivity");
let average = 0;
calculateAverage.addEventListener("click", calculateEvaluateAverage);
averageResistivity.addEventListener("input", validate, Event);
function calculateEvaluateAverage() {
  let totalOhm = 0;
  for (const element of arr) {
    totalOhm += element;
  }
  average = Number(totalOhm / arr.length).toFixed(2);
  if (average == 680.14) {
    soil = "alluvium";
  } else if (average == 1373.12) {
    soil = "basalt";
  } else if (average == 283.27) {
    soil = "shale";
  }
  let mean = document.getElementById("average-resistivity");
  if (Number(mean.value) == average) {
    document.getElementById("cwspan").innerHTML = "✔";
    document.getElementById("cwspan").classList.add("correctSpan");
    displayAverage();
  } else {
    document.getElementById("cwspan").innerHTML = "⨉";
    document.getElementById("cwspan").classList.add("wrongSpan");
    calculateAverage.removeEventListener("click", calculateEvaluateAverage);
    calculateAverage.addEventListener("click", displayAverage);
    calculateAverage.innerHTML = "RESULT";
  }
}

function displayAverage() {
  document.getElementById("cwspan").innerHTML = "";
  let mean = document.getElementById("average-resistivity");
  mean.value = average;
  // mean.nextElementSibling.remove();
  // mean.nextElementSibling.append(appendSpan(false, true));
  mean.classList.add("removeInputStyle", "mean-style");
  mean.disabled = true;
  mean.removeEventListener("mouseover", displayTooltip);
  mean.removeEventListener("mouseout", displayTooltip);
  calculateAverage.style.display = "none";
  showNextButton(true);
}

function appendSpan(val, ohm = false) {
  let span = document.createElement("span");
  if (!ohm) {
    span.innerHTML = val ? "✔" : "⨉";
    span.classList.add(val ? "correctSpan" : "wrongSpan");
  } else {
    span.innerHTML = "Ω-m";
  }
  return span;
}

let selectOptions = document.getElementById("selectSample");
let soilSample = selectOptions.value;
selectOptions.addEventListener("change", function () {
  if (selectOptions.value != "") {
    soilSample = selectOptions.value;
  }
});
let identifySoil = document.getElementById("identify-soil");
identifySoil.addEventListener("click", identifySoilType);
function identifySoilType() {
  let ansSpan = document.getElementById("ans-eval");
  if (average == 680.14 && soilSample == "alluvium") {
    ansSpan.innerHTML = "✔";
    ansSpan.classList.add("correctSpan");
    soil = "alluvium";
    setTimeout(function () {
      displaySoilType();
    }, 500);
  } else if (average == 1373.12 && soilSample == "basalt") {
    ansSpan.innerHTML = "✔";
    ansSpan.classList.add("correctSpan");
    soil = "basalt";
    setTimeout(function () {
      displaySoilType();
    }, 500);
  } else if (average == 283.27 && soilSample == "shale") {
    ansSpan.innerHTML = "✔";
    ansSpan.classList.add("correctSpan");
    soil = "shale";
    setTimeout(function () {
      displaySoilType();
    }, 500);
  } else {
    ansSpan.innerHTML = "⨉";
    ansSpan.classList.add("wrongSpan");
    identifySoil.innerHTML = "RESULT";
    identifySoil.removeEventListener("click", identifySoilType);
    identifySoil.addEventListener("click", displaySoilType);
  }
}
function displaySoilType() {
  document.getElementById("select-div").style.display = "none";
  let soilResult = document.getElementById("soilResult");
  soilResult.innerHTML = `From the IS 15736 code, the apparent resistivity falls in the range of <span class='result'>${soil}</span>`;
  soilResult.style.opacity = "1";
  if (repeat != 3) {
    document.getElementById("trialNote").classList.add("trial-statement-final");
  }
  setTimeout(function () {
    simsubscreennum = 0;

    flag = true;
    if (repeat == 3) {
      setTimeout(function () {
        showInference();
      }, 500);
    } else {
      showNextButton(true);
    }
  }, 600);
}

function showInference() {
  let canvas7Elements = document.getElementById("canvas7");
  let children7 = canvas7Elements.children;
  for (const element of children7) {
    element.style.display = "none";
  }
  document.getElementById("trial").style.display = "none";
  let inference = document.querySelector(".inference-init");
  inference.style.display = "block";
  inference.classList.add("inference-final");
}

function resetAllStyles() {
  // canvas1
  document.getElementById("a5").style.display = "block";
  document.getElementById("a6").style.display = "block";
  document.getElementById("a5").style.animation = "";
  document.getElementById("a6").style.animation = "";
  document.getElementById("a23").style.display = "block";
  document.getElementById("a32").style.display = "none";
  document.getElementById("csoil1").style.display = "none";
  document.getElementById("csoil").style.display = "block";

  // canvas2
  document.getElementById("b5").style.display = "block";
  document.getElementById("b6").style.display = "block";
  document.getElementById("b5").style.animation = "";
  document.getElementById("b6").style.animation = "";

  document.getElementById("b24").style.display = "block";

  document.getElementById("b42").style.display = "none";
  document.getElementById("csoil3").style.display = "none";
  document.getElementById("csoil2").style.display = "block";

  // canvas3
  document.getElementById("c5").style.display = "block";
  document.getElementById("c6").style.display = "block";
  document.getElementById("c5").style.animation = "";
  document.getElementById("c6").style.animation = "";

  document.getElementById("c23").style.display = "block";

  document.getElementById("c32").style.display = "none";
  document.getElementById("csoil5").style.display = "none";
  document.getElementById("csoil4").style.display = "block";

  // canvas4
  document.getElementById("d5").style.display = "block";
  document.getElementById("d6").style.display = "block";
  document.getElementById("d5").style.animation = "";
  document.getElementById("d6").style.animation = "";
  document.getElementById("c21").style.display = "block";
  document.getElementById("c12").style.display = "none";
  document.getElementById("csoil7").style.display = "none";
  document.getElementById("csoil6").style.display = "block";

  // canvas5
  let canvas5Elements = document.getElementById("can5");
  let children = canvas5Elements.children;
  for (const element of children) {
    element.style.display = "block";
  }
  document.getElementById("e8").style.display = "none";
  document.getElementById("a9").style.display = "none";
  document.getElementById("a8").style.animation = "";
  document.getElementById("e8").style.animation = "";
  document.getElementById("sw11").style.display = "block";
  document.getElementById("sw12").style.display = "none";
  document.getElementById("tab2-1").style.display = "none";
  document.getElementById("tab22-1").style.display = "none";
  document.getElementById("progressBar").style.display = "none";
  step = 0;
  increment = 0;
  document.getElementById("file").value = step;
  document.getElementById("thead1").innerHTML = "";
  document.getElementById("tab2-body").innerHTML = "";

  // canvas6
  let canvas6Elements = document.getElementById("canvas6");
  let children6 = canvas6Elements.children;
  for (const element of children6) {
    element.style.display = "block";
  }
  document.getElementById("thead2").innerHTML = "";
  document.getElementById("table2-body").innerHTML = "";
  let mean = document.getElementById("average-resistivity");
  mean.value = average;
  mean.classList.remove("removeInputStyle", "mean-style");
  mean.disabled = false;
  mean.value = null;
  mean.addEventListener("mouseover", displayTooltip);
  mean.addEventListener("mouseout", displayTooltip);
  calculateAverage.style.display = "inline-block";
  calculateAverage.innerHTML = "CHECK";
  document.getElementById("div1").style.display = "none";
  calculateAverage.addEventListener("click", calculateEvaluateAverage);
  calculateAverage.removeEventListener("click", displayAverage);

  // canvas7
  let canvas7Elements = document.getElementById("canvas7");
  let children7 = canvas7Elements.children;
  for (const element of children7) {
    element.style.display = "block";
  }
  document.getElementById("selectSample").value = "";
  document.getElementById("soilResult").style.opacity = 0;
  document
    .getElementById("trialNote")
    .classList.remove("trial-statement-final");
  document.getElementById("trialNote").classList.add("trial-statement-init");
  let ansSpan = document.getElementById("ans-eval");
  ansSpan.innerHTML = "";
  ansSpan.classList.remove("correctSpan");
  ansSpan.classList.remove("wrongSpan");
  identifySoil.innerHTML = "CHECK";
  identifySoil.addEventListener("click", identifySoilType);
  identifySoil.removeEventListener("click", displaySoilType);
}
