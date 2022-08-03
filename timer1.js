// Implement an alarm clock / timer which will beep after a specified amount of time has passed. 
// The user can specify an unlimited number of alarms using command line arguments


// edge cases
// 1. No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// 2. An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// 3. An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.


const args = process.argv.slice(2);

const timer = function(args) {

  for (i = 0; i < args.length; i++) {
    if (Number(args[i]) >= 0 && typeof Number(args[i]) === 'number') {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, args[i]*1000);
    } 

  }
}

timer(args);
