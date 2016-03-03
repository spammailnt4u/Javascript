function clearform() {
  if(document.getElementById("msg").value == 'Enter Text Here') { document.getElementById("msg").value = ''; }
  else if(document.getElementById("msg").value == '') { document.getElementById("msg").value = 'Enter Text Here'; }
}

function cleardecoder() {
  if(document.getElementById("msg2").value == 'Enter Code Here') { document.getElementById("msg2").value = '';}
  else if(document.getElementById("msg2").value == '') { document.getElementById("msg2").value = 'Enter Code Here';}
}

var cont = true;

function coder() {
  var message = document.getElementById("msg").value.split(" ");
  message.forEach(msgcoder);
  if (cont == true) {document.getElementById("result").value = message}
  cont = true;
}

function msgcoder(element,index,array) {
  if (element.length > 10) {
    if (!confirm(element+" is longer than 10 characters and therefore will not convert correctly. Do you understand this?")) {
      cont = false;
      return;
    }
  }
  array[index] = parseInt(element,36)
}

function decoder() {
  var message2 = document.getElementById("msg2").value.split(",");
  message2.forEach(msgdecoder);
  if (message2 == "NaN") {
    alert("Please enter \(a\) number\(s\)");
    return;
  }
  else {
    document.getElementById("result2").value = message2.join(" ");
  }
}

function msgdecoder(element,index,array) {
  array[index] = Number(element).toString(36);
}
