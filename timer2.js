const timer = function(input) {
  console.log(`setting timer for ${input} seconds...`);
  setTimeout(() => {
    console.log(".")
  }, input * 1000);
}
const main = function() {
  const stdin = process.stdin;
  process.stdin.resume();
  process.stdin.setEncoding('utf-8');
  stdin.on("data", (key) => {
    if(key === 'b') {
      console.log(".");
      return;
    }
    if (key === '\u0003') {
      console.log("Thanks for using me, ciao!");
      process.exit;
    }
    timer(key);
  });
}
main();