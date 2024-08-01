const palindromes = function (str) {
 var reg = /[\W_]/g;
 str = str.toLowerCase().replace(reg, "");

 var reversed = str.split("").reverse().join("")
 if (reversed === str) return true;

 return false;
};

// Do not edit below this line
module.exports = palindromes;
