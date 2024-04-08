//first function

const checkPalindrom = (testSring) => {
  const isPalindrom  =  testSring.toLowerCase().replaceAll(' ', '');
  let reverseString = '';
  for(let  i = isPalindrom.length -1; i >= 0; i--){
    reverseString += isPalindrom.at(i);
  }
  console.log(reverseString);
  let result = isPalindrom === reverseString;
  console.log(result)
  return result;
}
checkPalindrom('топот');
checkPalindrom('ДовОд');
checkPalindrom('Кекс');
checkPalindrom('Лёша на полке клопа нашёл ');

//second function

const extractNumber = (string) => {
  if(typeof string === 'number'){
    return string;
  }
  let result = '';
  for(let i = 0; i < string.length; i++){
  if(!Number.isNaN(parseInt(string.at(i), 10))){
    result += string.at(i);
  }
}
let isNumber = parseInt(result, 10)
console.log(isNumber)
return isNumber;
}
extractNumber('2023 год');
extractNumber('ECMAScript 2022');
extractNumber('1 кефир, 0.5 батона');
extractNumber('агент 007');
extractNumber('а я томат');

//third function

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;

  if (actualPad <= 0 ) {
    return string
  }
  console.log(pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string)
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
}

myPadStart('1', 2, '0');
myPadStart('1', 4, '0');
myPadStart('q', 4, 'werty');
myPadStart('q', 4, 'we');

//fourth function

const isShortOrLong = (srting, length) => {
  let result = srting.length <= length;
  console.log(result)
  return result
}
isShortOrLong('проверяемая строка', 20);
isShortOrLong('проверяемая строка', 18);
isShortOrLong('проверяемая строка', 10);



