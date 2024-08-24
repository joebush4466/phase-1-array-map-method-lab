const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCaser(string){
  let sentence = string.split(" ");
  let newArray =[];
  for (let item of sentence){
    newArray.push(item[0].toUpperCase() + item.slice(1))
  }
  return newArray.join(" ");
}

function titleCased(){
return tutorials.map(titleCaser);
}