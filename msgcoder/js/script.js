var cont = true;

// encoder function
function encoder(event) {
  event.preventDefault();
  var encodeMsg = document.getElementById("encode-msg").value.split(" ");
  var confirmMsg = " is longer than 10 characters and therefore will not convert correctly. Do you understand this?";
  var encodedMsg = [];
  for (var i = 0, len = encodeMsg.length; i < len; i++) {
    if (encodeMsg[i].length > 10 && !confirm(encodeMsg[i]+confirmMsg)) {
      break;
    }

    encodedMsg[i] = parseInt(encodeMsg[i],36);

    if (encodeMsg.length == i + 1) {
      encodeForm.getElementsByClassName('result')[0].value = encodedMsg
    }
  }
}

// add submit event listener
var encodeForm = document.getElementById('encode');
encodeForm.addEventListener('submit', encoder);

// decoder function
function decoder(event) {
  event.preventDefault();
  var decodeMsg = document.getElementById("decode-msg").value.split(",");
  decodeMsg.forEach(function(element,index,array){
    array[index] = Number(element).toString(36);
  });
  if (decodeMsg == "NaN") {
    alert("Please enter \(a\) number\(s\)");
    return;
  }
  else {
    decodeForm.getElementsByClassName('result')[0].value = decodeMsg.join(' ');
  }
}

// add submit event listener
var decodeForm = document.getElementById('decode');
decodeForm.addEventListener('submit', decoder);

// highlight results on click
var results = document.getElementsByClassName('result');
for (var i = 0, len = results.length; i < len; i++) {
  results[i].addEventListener('click', function () {this.select()});
}
