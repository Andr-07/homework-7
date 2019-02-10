var count = true;

var logThroughOnce = (SomeText) => {
  if (count) {
    console.log(SomeText);
    count = false;
  } else {
    count =true;
  }
}
logThroughOnce("Hello World!"); 
logThroughOnce("Hello World!"); 
logThroughOnce("Hello World!"); 
logThroughOnce("Hello World!");
