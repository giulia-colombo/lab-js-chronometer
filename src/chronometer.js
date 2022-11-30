class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;

  }


  start(printTimeCallback) { // printTimeCallback - it's like renderEverything
    this.intervalId = setInterval( () => {
      //if the printTimeCallback is not passed, it should be disregarded.
      this.currentTime++;

      if (printTimeCallback) {
        printTimeCallback();
      }
      //increment seconds in currentTime by 1

    }, 1000)
  }
 

  getMinutes() {
    let currentTimeMinutes = Math.floor(this.currentTime/60);
    return currentTimeMinutes;
  }

  getSeconds() {
    let currentTimeSeconds = this.currentTime % 60;
    return currentTimeSeconds;
  }

  computeTwoDigitNumber(value) { //value is an int so we can't iterate!
    //helper function that will convert any number into a 2-digit string representation
    //take a number as arg and return a string, where the first digit is 0 if we only have 1 number
    //eg 7 should be "07"
    let stringOfValue = "";
    if (value < 10) {
      stringOfValue = value.toString().padStart(2,'0')
      return stringOfValue
    }
    else {
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    //should return a string
    //string showing "mm:ss"format
    //get the mm
    let currentMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let currentSeconds = this.computeTwoDigitNumber(this.getSeconds());
    let splitTime = `${currentMinutes}:${currentSeconds}`
    return splitTime;

  }

}  




/* const chronometer = new Chronometer();

console.log(chronometer); */