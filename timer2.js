const stdin = process.stdin;
// took the below configuration settings from "Event Handling and User Input" on compass
stdin.setRawMode(true);
stdin.setEncoding('utf-8');

stdin.on('data', (key) => {
  // if user types 'b' returns BEEP!
  if (key === 'b') {
    process.stdout.write('BEEP!\n');
  }
  if (key === '\u0003') {
    // if Ctrl^C, then exits program
    process.stdout.write('Thanks for using me, ciao!\n'); 
    process.exit();
  }
  // if user types number from 1 to 9, the 'BEEP' will output after that number of seconds
  if (key >= 1 && key <= 9) {
  process.stdout.write(`Setting timer for ${key} second(s)...\n`); 
  setTimeout(() => {
    process.stdout.write('BEEP!\n')
  }, key * 1000);
}
});