//creating an array and pasing the number, questions, options and answers
let questions = [
  {
    numb: 1,
    question: 'Inside which HTML element do we put the JavaScript?',
    answer: '< script >',
    options: ['< javascript >', '< scripting >', '< script >', '< jsScript >'],
  },
  {
    numb: 2,
    question:
      'What is the correct JavaScript syntax to change the content of the HTML element below? \n < p id="demo">This is a demonstration.< /p >',
    answer: 'document.getElementById("demo").innerHTML="Hello World!";',
    options: [
      'document.getElementByName("p").innerHTML="Hello World!";',
      'document.getElementById("demo").innerHTML="Hello World!";',
      'document.getElement("p").innerHTML="Hello World!";',
      '#demo.innerHTML="Hello World!";',
    ],
  },
  {
    numb: 3,
    question: 'Where is the correct place to insert a JavaScript?',
    answer: 'Both the < head > section and the < body > section are correct',
    options: [
      'The < body > section',
      'Both the < head > section and the < body > section are correct',
      'The < head > section',
      'NOTA',
    ],
  },
  {
    numb: 4,
    question:
      'What is the correct syntax for referring to an external script called "xxx.js"?',
    answer: '< script src="xxx.js" >',
    options: [
      '< script href="xxx.js" >',
      '< script name="xxx.js >',
      '< script src="xxx.js" >',
      '< script src="jsfile" >',
    ],
  },
  {
    numb: 5,
    question: 'The external JavaScript file must contain the < script > tag.',
    answer: 'False',
    options: ['True', 'False', 'AOTA', 'NOTA'],
  },
  {
    numb: 6,
    question: 'How do you write "Hello World" in an alert box?',
    answer: 'alert("Hello World");',
    options: [
      'alert("Hello World");',
      'msgBox("Hello World");',
      'msg("Hello World");',
      'alertBox("Hello World");',
    ],
  },
  {
    numb: 7,
    question: 'How do you create a function in JavaScript?',
    answer: 'function myFunction()',
    options: [
      'function:myFunction()',
      'function myFunction()',
      'function = myFunction()',
      'jsfunction()',
    ],
  },
  {
    numb: 8,
    question: 'How do you call a function named "myFunction"?',
    answer: 'myFunction()',
    options: [
      'call function myFunction()',
      'call myFunction()',
      'myFunction()',
      'this myFunction()',
    ],
  },
  {
    numb: 9,
    question: 'How to write an IF statement in JavaScript?',
    answer: 'if (i == 5)',
    options: ['if i == 5 then', 'if i = 5', 'if (i == 5)', 'if i = 5 then'],
  },
  {
    numb: 10,
    question:
      'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    answer: 'if (i != 5)',
    options: ['if i <> 5', 'if (i <> 5)', 'if i =! 5 then', 'if (i != 5)'],
  },
  {
    numb: 11,
    question: 'How does a WHILE loop start?',
    answer: 'while (i <= 10)',
    options: [
      'while (i <= 10)',
      'while (i <= 10; i++)',
      'while i = 1 to 10',
      'NOTA',
    ],
  },
  {
    numb: 12,
    question: 'How does a FOR loop start?',
    answer: 'for (i = 0; i <= 5; i++)',
    options: [
      'for (i = 0; i <= 5)',
      'for (i = 0; i <= 5; i++)',
      'for (i <= 5; i++)',
      'for i = 1 to 5',
    ],
  },
  {
    numb: 13,
    question: 'How can you add a comment in a JavaScript?',
    answer: '//This is a comment',
    options: [
      "'This is a comment",
      '//This is a comment',
      '< !--This is a comment--> ',
      'NOTA',
    ],
  },
  {
    numb: 14,
    question: 'How to insert a comment that has more than one line?',
    answer: '/*This comment has \n more than one line*/',
    options: [
      '< !--This comment has \n more than one line-- >',
      '/*This comment has \n more than one line*/',
      '//This comment has \n more than one line//',
      'NOTA',
    ],
  },
  {
    numb: 15,
    question: 'What is the correct way to write a JavaScript array?',
    answer: 'var colors = ["red", "green", "blue"]',
    options: [
      'var colors = "red", "green", "blue"',
      'var colors = ["red", "green", "blue"]',
      'var colors = (1:"red", 2:"green", 3:"blue")',
      'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
    ],
  },
  {
    numb: 16,
    question: 'How do you round the number 7.25, to the nearest integer?',
    answer: 'Math.round(7.25)',
    options: ['Math.round(7.25)', 'rnd(7.25)', 'Math.rnd(7.25)', 'round(7.25)'],
  },
  {
    numb: 17,
    question: 'How do you find the number with the highest value of x and y?',
    answer: 'Math.max(x,y)',
    options: ['top(x,y)', 'Math.max(x,y)', 'Math.ceil(x,y)', 'ceil(x,y)'],
  },
  {
    numb: 18,
    question:
      'What is the correct JavaScript syntax for opening a new window called "w2"?',
    answer: 'w2=window.open("http://www.w3schools.com")',
    options: [
      'w2=window.new("http://www.w3schools.com")',
      'w2=window.open("http://www.w3schools.com")',
      'AOTA',
      'NOTA',
    ],
  },
  {
    numb: 19,
    question: 'JavaScript is the same as Java',
    answer: 'False',
    options: ['True', 'False', 'It depends', 'AOTA'],
  },
  {
    numb: 20,
    question: "How can you detect the client's browser name?",
    answer: 'navigator.appName',
    options: ['client.navName', 'browser.name', 'navigator.appName', 'NOTA'],
  },
  {
    numb: 21,
    question: 'Which event occurs when the user clicks on an HTML element?',
    answer: 'onclick',
    options: ['onmouseclick', 'onchange', 'onclick', 'onmouseover'],
  },
  {
    numb: 22,
    question: 'How do you declare a JavaScript variable?',
    answer: 'var carName',
    options: ['v carName', 'var carName', 'variable carName', 'carName'],
  },
  {
    numb: 23,
    question: 'Which operator is used to assign a value to a variable?',
    answer: '=',
    options: ['x', '*', '==', '='],
  },
  {
    numb: 24,
    question: 'What will the following code return:\n Boolean(10 > 9)?',
    answer: 'true',
    options: ['true', 'false', 'NaN', 'AOTA'],
  },
  {
    numb: 25,
    question: 'Is JavaScript case-sensitive?',
    answer: 'Yes',
    options: ['No', 'Yes', 'Sometimes', 'NOTA'],
  },
  {
    numb: 26,
    question: 'JavaScript File has an extension of:',
    answer: '.js',
    options: ['.java', '.js', '.javascript', '.xml'],
  },
  {
    numb: 27,
    question:
      'which statement cannot be used to declare a variable in JavaScript?',
    answer: 'int',
    options: ['let', 'var', 'int', 'const'],
  },
  {
    numb: 28,
    question: 'Evaluate the following: undefined + 2',
    answer: 'NaN',
    options: ['Type Error', 'NaN', 'undefined', '2'],
  },
  {
    numb: 29,
    question: 'What does JSON stand for?',
    answer: 'JavaScript Object Notation',
    options: [
      'JavaScript Oriented Notation',
      'JavaScript Object Notation',
      'JavaScript Online Notation',
      'NOTA',
    ],
  },
  {
    numb: 30,
    question: 'To convert string to number, which function do we use?',
    answer: 'parseInt',
    options: ['parseNumber', 'parseString', 'parseInt', 'parseDouble'],
  },
];
