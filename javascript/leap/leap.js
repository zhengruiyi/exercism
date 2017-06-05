//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
  this.year = input;
}

Year.prototype.isLeap = function() {
  if(this.year % 4 == 0){
    if(this.year % 100 == 0){
      if (this.year % 400 == 0){
        return true;
      }
      return false;
    }
    return true;
  }
  return false;

  //a more elegant solution I found on stackoverflow.
  /*
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  /*/
}

module.exports = Year;
