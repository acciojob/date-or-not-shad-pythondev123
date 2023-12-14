var isDate = function (input) {
  //   write your code here
	if (input instanceof Date) {
        // If the input is already a Date object, return true
        return true;
    } else if (typeof input === 'string') {
        // If the input is a string, attempt to parse it as a date
        const parsedDate = new Date(input);
        // Check if the parsed date is a valid date
        return !isNaN(parsedDate.getTime());
    } else {
        // If the input is neither a Date object nor a string, return false
        return false;
    }
};

// Do not change the code below.
// const input = prompt("Enter Date.");
// alert(isDate(input));
