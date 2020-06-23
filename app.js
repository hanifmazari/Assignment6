// === Chapter # 21-25 Task # 1

// var fNam = prompt("Please enter the First name");
// var lNam = prompt("Please Enter the last name");
// alert("Welcom Mr/Ms. " + fNam+" "+ lNam);

// === Chapter # 21-25 Task # 2

// var fvamob = prompt("What is your favourite mobile phone");
// var chars = fvamob.length;
// document.write("My favourite phone is: "+ fvamob + "<br>" + "Length of string: "+chars);

// === Chapter # 21-25 Task # 3

// var a = "Pakistani";
// index =a.indexOf("n");
// document.write("String: "+a+"<br>");
// document.write("Index of 'n': "+index+"<br>");

// === Chapter # 21-25 Task # 4

// var a = "Hello World!";
// index =a.lastIndexOf("l");
// document.write("String: "+a+"<br>");
// document.write("Last Index of 'l': "+index+"<br>");

// === Chapter # 21-25 Task # 5

// var a = "Pakistani";
// document.write("String: "+a+"<br>");
// var b = a.charAt(3);
// document.write("Character at index 3 is : "+b+"<br>");

// === Chapter # 21-25 Task # 6

// var fNam = prompt("Please enter the First name");
// var lNam = prompt("Please Enter the last name");
// var flNam = fNam.concat(" "+lNam);
// alert("Welcom Mr/Ms. " + flNam);


// === Chapter # 21-25 Task # 7

// var text = "Hyderabad";
// var newText = text.replace(/Hyder/g,"Islam");
// alert(newText);

// === Chapter # 21-25 Task # 8

// var text = "Ali and Sami are best friends. They play cricket and Football together";
// var newText = text.replace(/and/g,"&");
// document.write(newText);

// === Chapter # 21-25 Task # 9

// var val = "472";
// var typ = typeof(val);
// var val1 = Number(val);
// var typ1 = typeof(val1);
// document.write("Value: "+ val + "<br>" + "Type: " + typ + "<br>"+"Value: "+ val1 + "<br>" + "Type: " + typ1 );

// === Chapter # 21-25 Task # 10

// var s = prompt("please enter some text");
// var d = s.toUpperCase();
// alert(d);

// === Chapter # 21-25 Task # 11

// var s = prompt("please enter some text");
// var firstCh = s.slice(0,1);
// firstCh = firstCh.toUpperCase();
// var otherCh = s.slice(1);
// otherCh = otherCh.toLocaleLowerCase();
// var comp = firstCh + otherCh;
// document.write("User input: " + s + "<br>" + "Title case: "+ firstCh + otherCh);


// === Chapter # 21-25 Task # 12

// var num = Number(35.36);
// var str = String(num);
// document.write("Number: "+ num + "<br>"+ "Result: "+ (str.replace(".","")));


// === Chapter # 21-25 Task # 13

// var a = prompt("Enter the User Name");
// var b = a.indexOf("!");
// var c = a.indexOf("@");
// var d = a.indexOf(",")
// var e = a.indexOf(".")
// if (b !== -1 || c !== -1|| d !== -1|| e !== -1){
// alert("Enter a valid username")
// }

// === Chapter # 21-25 Task # 14

// var arr = ["cake","apple pie","cookie","chips","patties"];
// var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var search1 = search.toLowerCase();
// if (arr.indexOf(search1)!==-1){
//     document.write(search + " is <b>available</b> at index "+arr.indexOf(search1) );
// }
// else{
//     document.write("We are sorry. "+search + " is <b>not available</b> in our bakery" );
// }

// === Chapter # 21-25 Task # 15

// var pasword = prompt("Please Enter the password");
// for (var i = 0; i < pasword.length; i++){
//     if (pasword.charAt(0) >= 0 || pasword.charAt(0) < 0)
//     alert("Entered password: "+pasword+"\n"+"Password cannot begin with a number\nPlease enter a valid Password");
//     else if (pasword.length < 6){
//         alert ("Entered password: "+pasword+"\n"+"Password should contain at least 6 characters")
//     }
//     else if (pasword.charCodeAt(i)>=65||pasword.charCodeAt(i)<=65||pasword.charCodeAt(i)>=97||pasword.charCodeAt(i)<=120);

//     else if (pasword.charAt(i) >= 0 ){

//         alert("Entered password: "+pasword+"\n"+"Passwor must contain a number")
//     }
//     else ("Entered password: "+pasword+"\n"+"Password must containt alphbets");
// }

// === Chapter # 21-25 Task # 16

// var university = "University of Karachi"
// uni= university.split();
// document.write(uni+"<br>");

// === Chapter # 21-25 Task # 16

// var user = "Pakistan";
// document.write(user.charAt(7));

// === Chapter # 21-25 Task # 17

// incomplete

// var str = "The quick brown fox jumps over the lazy dog";
// for (var i = 0; i < str.length; i++){
//     if (str.charAt(i) === the){
//         letter_Count += 1;
//     }
//     alert(char_count("The quick brown fox jumps over the lazy dog", "the"));
// }

// === Chapter # 26-30 Task # 1

// var s = +prompt("Enter a positive value");
// if (s < 0){
// alert("Enter a positive number")
// }
// else{
// document.write("number: "+s + "<br>");
// s1 = Math.round(s);
// document.write("round off value: "+s1+"<br>");
// s2 = Math.floor(s);
// document.write("floor value: "+s2 + "<br>");
// s3 = Math.ceil(s);
// document.write("ceil value: "+s3 + "<br>");
// }

// === Chapter # 26-30 Task # 2

// var s = +prompt("Enter a negative floating point");
// if (s > 0){
// alert("Enter a negative floating point");
// }
// else{
// document.write("number: "+s + "<br>");
// s1 = Math.round(s);
// document.write("round off value: "+s1+"<br>");
// s2 = Math.floor(s);
// document.write("floor value: "+s2 + "<br>");
// s3 = Math.ceil(s);
// document.write("ceil value: "+s3 + "<br>");
// }

// === Chapter # 26-30 Task # 3

// var s = prompt("Enter the number");
// alert(Math.abs(s));

// === Chapter # 26-30 Task # 4

// var s = Math.random();
// var t = (s*6) + 1;
// var u = Math.floor(t);
// alert("Random dice value: "+u);

// === Chapter # 26-30 Task # 6

// var s = Math.random();
// var t = (s*2) + 1;
// var u = Math.floor(t);
// if (u ===1){
// document.write(u+"<br>"+"random coin value: Tails <br>")}
// else {document.write(u+"<br>"+"random coin value: Heads <br>")}

// === Chapter # 26-30 Task # 7

// var s = Math.random();
// var t = (s*100) + 1;
// var u = Math.floor(t);
// document.write("random number between 1 and 100: " + u);

// === Chapter # 26-30 Task # 8

// var age = prompt("Enter your weight in kilograms");
// var par = parseInt(age);
// document.write("The weight of user is "+par+ " kilograms");

// === Chapter # 26-30 Task # 9

// var a = prompt("Enter a number 1 to 10");
// var aa = parseInt(a);
// var s = Math.random();
// var t = (s*10) + 1;
// var u = Math.floor(t);
// if (aa===u){
//     alert("Congratulations");
// }
// else{
//     alert("Try again"+ u);
// }

// === Chapter # 31-34 Task # 1

// var date = new Date();
// document.write(date);

// === Chapter # 31-34 Task # 2

// var monthName = ["January","Febraury","March","April","May","June","July","August","September","October","November","December"]
// var d = new Date();
// var month = d.getMonth();
// document.write("Current Month: "+monthName[month]);

// === Chapter # 31-34 Task # 3

// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
// var d = new Date();
// var day = d.getDay();
// var today = days[day];
// if (today.length > 3){
//     dayabr = today.slice(0, 3);
// }
// document.write("Today is "+dayabr);

// === Chapter # 31-34 Task # 4

// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
// var d = new Date();
// var day = d.getDay();
// var today = days[day];
// if (day === 0 || day === 6){
//     document.write("It is Fun Day");
// }
// else{
//     document.write("Today is "+ today)
// }

// === Chapter # 31-34 Task # 5

// var m = new Date();
// var d = m.getDate();
// if(m < 16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last Days of month")
// }

// === Chapter # 31-34 Task # 6

// var date = new Date();
// var mseconds = date.getTime();
// var mints = mseconds/(1000*60);
// document.write("Current date is: "+date+"<br>");
// document.write("Elapsed milliseconds since January 1, 1970: "+mseconds+"<br>");
// document.write("Elapsed milliseconds since January 1, 1970: "+mints+"<br>");

// === Chapter # 31-34 Task # 7

// var date = new Date();
// var hr = date.getHours();
// if (hr < 12){
//     alert ("It is AM")
// }
// else{
//     alert("It is PM")
// }

// === Chapter # 31-34 Task # 8

// var LaterDate = new Date(2020, 11, 31);
// document.write("Later Date: "+LaterDate);

// === Chapter # 31-34 Task # 9

// var Today = new Date();
// var firstRam = new Date("June 18, 2018")
// var todayD = Today.getTime();
// var ramD = firstRam.getTime();
// var diffD = todayD - ramD;
// var days =Math.floor(diffD/(1000*60*60*24));
// document.write(days+" days have passed since 1st Ramzan 2015");

// === Chapter # 31-34 Task # 10

// var refdate = new Date();
// var ldate = new Date ("Jan 1, 2015");
// var msrefdate = refdate.getTime();
// var msldate = ldate.getTime();
// var msDiff = msrefdate - msldate;
// var sec = msDiff/(1000);
// document.write("On Reference date "+refdate+",<br>"+sec+"seconds had passed since beginning of 2015");    

// === Chapter # 31-34 Task # 11

// var currentdat = new Date();
// var currhour = currentdat.getHours();
// var d = new Date();
// d.setHours(currhour-1)
// alert("Current date : "+ currentdat+"\n"+ "1 hour ago, it was"+d+"\n")

// === Chapter # 31-34 Task # 12

// var currentdat = new Date();
// var currentyear = currentdat.getFullYear();
// var d = new Date();
// d.setFullYear(currentyear - 100);
// alert("Current dat : "+ currentdat+"\n"+"100 year ago, it was"+d + "\n")

// === Chapter # 31-34 Task # 13

// var dob = new Date(prompt("Enter your date of borth","Jan 1, 1970"))
// var year = dob.getFullYear();
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var accage = Math.floor(diff/(1000*60*60*24*30*12));
// document.write("Your age is "+accage+"<br>"+"Your birth year is "+year);

// === Chapter # 31-34 Task # 14
//Incomplete
// document.write("<h1> K-Electric Bill<h1>")
// var currntdate = new Date();
// var month =currntdate.charAtindex[2];
// alert(month)

// === Chapter # 35-38 Task # 1

// function currentDate(){
// var d = new Date();
// alert (d);
// }
// currentDate();

// === Chapter # 35-38 Task # 2

// function greet(){
//     var fnam = prompt("Enter the First name");
//     var lname = prompt("Enter the Last name");
//     alert("Welcome Mr/Ms. "+ fnam+" "+lname);
// }
// greet();

// === Chapter # 35-38 Task # 3

// function sum(a,b){
//     var num1 = prompt("Enter the first num");
//     var num2 = prompt("Enter The second num");
//     var add = (+num1)+(+num2);
//     alert("The sum of "+ num1+" and "+ num2 +" is " +add);
// }
// sum();

// === Chapter # 35-38 Task # 4

// function calculator(num1,num2,operator){
//     var num1 = prompt("Enter number 1");
//     var num2 = prompt("Enter number 2");
//     var operator = prompt("Enter the operator");
//     if(operator==='+'){
//         alert("Sum of "+ num1 +" and "+ num2 + " is "+ ((+num1)+(+num2)))
//     }
//     else if(operator==='-'){
//         alert("Difference of "+ num1 +" and "+ num2 + " is "+ (num1 - num2))
//     }
//     else if(operator==='*'){
//         alert("Product of "+ num1 +" and "+ num2 + " is "+ (num1 * num2))
//     }
//     else if(operator==='/'){
//         alert("Ratio of "+ num1 +" and "+ num2 + " is "+ (num1 / num2))
//     }
//     else if(operator==='%'){
//         alert("Modulus of "+ num1 +" and "+ num2 + " is "+ (num1 % num2))
//     }

// }
// calculator();

// === Chapter # 35-38 Task # 5

// function square (x){
//     var x = 7*7;
//    alert(x);
// }
// square();

// === Chapter # 35-38 Task # 6

// function factorial (x){
//     var ans = 1;
//     if (x == 0 || x == 1){
//         return ans;
//     }
//     else{
//         for (var i = x; i >= 1; i--){
//             ans = ans * i;
//         }
//         return ans;
//     }
// }
// var x = 5;
// ans = factorial(x)
// alert("The factorial of " + x + " is "+ ans)

// === Chapter # 35-38 Task # 7

// function numBetwee(x, y) {
//     if (x > y) {
//         var arr = new Array(x - y + 1);
//         for (var i = 0; i < arr.length; i++, x--) {
//             resarrult[i] = x;
//         }
//         return arr;
//     }
//     else {
//         var arr1 = new Array(y - x + 1);
//         for (var j = 0; j < arr1.length; j++, x++) {
//             arr1[j] = x;
//         }
//         return arr1;
//     }
// }
// var x = prompt("write x");
// var y = prompt("write y")
// alert(numBetwee(x, y));

// === Chapter # 35-38 Task # 8

// function pythago(side1, side2){
//     return Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));
//   }
  
//   console.log(pythagorean(4, 3));
  
// === Chapter # 35-38 Task # 9

// function area (w, l){
//     return w*l;
// }
// var a = 23;
// var b = 10;
// alert(area(a,b));

// function area (w, l){
//     return w*l;
// }
// alert(area(10,23));

// === Chapter # 35-38 Task # 10

// function pall (){
//     var word = prompt("Enter the word");
//     var check="";
//     for ( var i = word.length - 1; i >= 0; i--){
//         check += word[i];
//     }
//     if( check === word){
//         console.log (word+ " Is Pallindrom")
//     }
//     else{console.log (word+ " is not Pallindrom")}
// }
// pall();

// === Chapter # 35-38 Task # 11

// function input_string(strr) {
//     var result= strr.split(" ");
    
//     for(var i = 0; i < result.length; i++) {
//     result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1, result[i.length]);
//     }
//     return result.join(" ");
//     }
//     document.write(input_string("the quick brown fox jumps")); 

// === Chapter # 35-38 Task # 12

// function findLongestWord(array) {
//     var longestWord = "";
  
//     array.forEach(function(word) {
//       if(word.length > longestWord.length) {
//         longestWord = word;
//       }
//     });
  
//     return longestWord;
//   }
  
//   var word = findLongestWord(["The","quick","brown", "fox", "jumped", "over", "the", "lazy", "dog"]);
//   console.log(word);

// === Chapter # 35-38 Task # 13
//  incomplete

// var str = "The quick brown fox jumps over the lazy dog";
// for (var i = 0; i < str.length; i++){
//     if (str.charAt(i) === the){
//         letter_Count += 1;
//     }
//     alert(char_count("The quick brown fox jumps over the lazy dog", "the"));
// }

// === Chapter # 35-38 Task # 14

// var rad = 23;
// function calCircumference (){
//     alert("Circumferece of the circle is "+(2*Math.PI*rad));
// }
// function calcArea(){
//     alert("Area of the circle is "+ (Math.PI*rad*rad));
// }

// calCircumference();
// calcArea();