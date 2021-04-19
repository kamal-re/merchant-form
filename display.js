var selectedRow = null;
function onFormSubmit() {
  var formData = readFormData();
  if (selectedRow == null) insertNewRecord(formData);
  else updateRecord(formData);
  resetForm();
  console.log(formData);
}
function imageFile(event) {
  const image = event.target.files[0];
  document
    .getElementById("logo")
    .setAttribute("src", URL.createObjectURL(image));
}

function radiobutton() {
  var ele = document.getElementsByName("type");
  var val;
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) val = ele[i].value;
  }

  return val;
}
function selbutton() {
  var selected = [];
  for (var option of document.getElementById("category").options) {
    if (option.selected) {
      selected.push(option.value);
    }
  }

  return selected;
}
function radiobutton2() {
  var ele = document.getElementsByName("criticalaccount");
  var val;
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) val = ele[i].value;
  }

  return val;
}
function checkboxbutton() {
  var selected = new Array();

  var payment = document.getElementsByName("paymentoptions");

  var val;

  for (var i = 0; i < payment.length; i++) {
    if (payment[i].checked) {
      selected.push(payment[i].value);
    }
  }
  if (selected.length > 0) {
    val = selected.join(",");
  }
  return val;
}
function readFormData() {
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["email"] = document.getElementById("email").value;
  formData["phone"] = document.getElementById("phone").value;
  formData["website"] = document.getElementById("website").value;
  formData["contactname"] = document.getElementById("contactname").value;
  formData["contactemail"] = document.getElementById("contactemail").value;
  formData["contactphone"] = document.getElementById("contactphone").value;
  formData["notes"] = document.getElementById("notes").value;
  formData["type"] = radiobutton();
  formData["category"] = selbutton();
  formData["commissionpercentage"] = document.getElementById(
    "commissionpercentage"
  ).value;
  formData["activefrom"] = document.getElementById("activefrom").value;
  formData["logo"] = document.getElementById("logo");
  formData["criticalaccount"] = radiobutton2();
  formData["paymentoptions"] = checkboxbutton();
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("merchantform")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;
  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.email;
  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.phone;
  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.website;
  var cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.contactname;
  var cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.contactphone;
  var cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.contactemail;
  var cell8 = newRow.insertCell(7);
  cell8.innerHTML = data.notes;
  var cell9 = newRow.insertCell(8);
  cell9.innerHTML = data.type;
  var cell10 = newRow.insertCell(9);
  cell10.innerHTML = data.category;
  var cell11 = newRow.insertCell(10);
  cell11.innerHTML = data.commissionpercentage;
  var cell12 = newRow.insertCell(11);
  cell12.innerHTML = data.activefrom;
  var cell13 = newRow.insertCell(12);
  cell13.innerHTML = data.logo;
  var cell14 = newRow.insertCell(13);
  cell14.innerHTML = data.criticalaccount;
  var cell15 = newRow.insertCell(14);
  cell15.innerHTML = data.paymentoptions;
  cell15 = newRow.insertCell(15);
  cell15.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("merchant").reset();
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("email").value = selectedRow.cells[1].innerHTML;
  document.getElementById("phone").value = selectedRow.cells[2].innerHTML;
  document.getElementById("website").value = selectedRow.cells[3].innerHTML;
  document.getElementById("contactname").value = selectedRow.cells[4].innerHTML;
  document.getElementById("contactphone").value =
    selectedRow.cells[5].innerHTML;
  document.getElementById("contactemail").value =
    selectedRow.cells[6].innerHTML;
  document.getElementById("notes").value = selectedRow.cells[7].innerHTML;
  document.getElementsByName("type").value = selectedRow.cells[8].innerHTML;
  document.getElementsByName("category").value = selectedRow.cells[9].innerHTML;
  document.getElementById("commissionpercentage").value =
    selectedRow.cells[10].innerHTML;
  document.getElementById("activefrom").value = selectedRow.cells[11].innerHTML;
  document.getElementById("logo").value = selectedRow.cells[12].innerHTML;
  document.getElementsByName("criticalaccount").value =
    selectedRow.cells[13].innerHTML;
  document.getElementsByName("paymentoptions").value =
    selectedRow.cells[14].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.name;
  selectedRow.cells[1].innerHTML = formData.email;
  selectedRow.cells[2].innerHTML = formData.phone;
  selectedRow.cells[3].innerHTML = formData.website;
  selectedRow.cells[4].innerHTML = formData.contactname;
  selectedRow.cells[5].innerHTML = formData.contactphone;
  selectedRow.cells[6].innerHTML = formData.contactemail;
  selectedRow.cells[7].innerHTML = formData.notes;
  selectedRow.cells[8].innerHTML = formData.type;
  selectedRow.cells[9].innerHTML = formData.category;
  selectedRow.cells[10].innerHTML = formData.commissionpercentage;
  selectedRow.cells[11].innerHTML = formData.activefrom;
  selectedRow.cells[12].innerHTML = formData.logo;
  selectedRow.cells[13].innerHTML = formData.criticalaccount;
  selectedRow.cells[14].innerHTML = formData.paymentoptions;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("merchantform").deleteRow(row.rowIndex);
    resetForm();
  }
}

function store() {
  var name = document.getElementById("name");
  localStorage.setItem("name", name.value);
  var name1 = localStorage.getItem("name");
  alert(name1);
}
