let text = document.getElementById("text");
let link = document.createElement('link');
link.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html';
link.innerText = "Text was taken from here";
document.body.appendChild(link);
let c=text.innerText.split(" ").length;
let c1 = document.createElement(link);
c1.innerText = "Here " + c + " words" ;
document.body.appendChild(document.createElement("br"));
document.body.appendChild(c1);
