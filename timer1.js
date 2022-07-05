const input = process.argv.slice(2);

for(const timer of input) {
  if (timer > 0)
    setTimeout(() => {
      process.stdout.write('BEEP ' + '\n');
    }, timer * 1000)
};

