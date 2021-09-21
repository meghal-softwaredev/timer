const commandLineArgs = function() {
  const arguments = process.argv.slice(2);
  return arguments;
}
const timer = function(arguments) {
  let numberArr = arguments.map(Number);
  let filteredArr = numberArr.filter(element => {
    return element >= 0 && typeof element === 'number'
  });
  console.log(filteredArr);
  filteredArr.sort((a,b) => a - b);
  filteredArr.map(element => {
    setTimeout(() => {
      process.stdout.write(".");
    }, element * 1000);
  });
  setTimeout(() => {
    console.log("\n");
  }, (Math.max(...filteredArr) * 1000)  + 100);
}
const args = commandLineArgs();
timer(args);