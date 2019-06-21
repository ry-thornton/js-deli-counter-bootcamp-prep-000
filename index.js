var newName;

function takeANumber (katzDeliLine, newName) {
  katzDeliLine.push(newName)
  var number = katzDeliLine.length
  
  return `Welcome, ${newName}. You are number ${number} in line.`
}

var ticketNum = 0;

function takeANumber(katzDeliLine, ticketNum) {
  ticketNum++;
  katzDeliLine.push(ticketNum)
  return `Welcome. You have ticket number ${ticketNum}.`
}


function nowServing(katzDeliLine) {
  var number = katzDeliLine.length
  if (number === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`
    }
}

var i;

function currentLine(line) {
  var currentLineArray = []
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else { for (i = 0; i < line.length; i++) {
    currentLineArray[i] = ` ${1 + i}. ${line[i]}`
  }
  
  }
  return `The line is currently:${currentLineArray}`
}
    