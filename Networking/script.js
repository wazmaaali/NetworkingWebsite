function checkValidity() {
  let inputs = document.getElementsByClassName("required");
  let btn = document.querySelector('button[type="submit"]');
  let isValid = true;
  for (let i = 0; i < inputs.length; i++) {
    let changedInput = inputs[i];
    if (changedInput.value.trim() === "" || changedInput.value === null) {
      isValid = false;
      break;
    }
  }
  return isValid;
}

const email = document.querySelector("#email");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const error = document.querySelector(".error-text");
let regExp = /^[^ ]+@["slu"]+\.["edu"]/;

function check() {
  if (email.value.match(regExp)) {
    email.style.background = "#eafaf1";
    icon1.style.display = "none";
    icon2.style.display = "block";
    error.style.display = "none";
  } else {
    email.style.background = "#fceae9";
    icon1.style.display = "block";
    icon2.style.display = "none";
    error.style.display = "block";
  }
  if (email.value === "") {
    email.style.borderColor = "lightgrey";
    email.style.background = "#f1f1f1";
    icon1.style.display = "none";
    icon2.style.display = "none";
    error.style.display = "none";
  }
}

function myFunction(e) {
  e.preventDefault();
  var valid = checkValidity();
  if (!valid) {
    alert("Form is invalid");
    return;
  }
  var fname = document.getElementById("fname").value;
  var fpaper = document.getElementById("fpaper").value;
  var lpaper = document.getElementById("lpaper").value;
  var dateId = document.getElementById("dateId").value;

  var currentdate = new Date();
  var datetime =
    currentdate.getFullYear() +
    "." +
    (currentdate.getMonth() + 1) +
    "." +
    currentdate.getDate();

  var table = document.getElementById("myTable");

  var newRow =
    '<tr style="height: 82px;">' +
    '<td class="u-border-1 u-border-grey-50 u-custom-color-1 u-table-cell u-table-cell-17">' +
    dateId +
    "</td>" +
    '<td class="u-border-1 u-border-grey-50 u-custom-color-1 u-table-cell u-table-cell-18">' +
    fname +
    "</td>" +
    '<td class="u-border-1 u-border-grey-50 u-custom-color-1 u-table-cell u-table-cell-19">' +
    fpaper +
    "</td>" +
    '<td class="u-border-1 u-border-grey-50 u-custom-color-1 u-table-cell u-table-cell-20">' +
    '  <a class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-5" href="' +
    lpaper +
    '" target="_blank">Paper</a>' +
    " </td>" +
    "</tr>";

  table.tBodies[0].insertAdjacentHTML("afterbegin", newRow);
}
