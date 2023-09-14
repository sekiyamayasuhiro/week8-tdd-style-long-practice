module.exports = function reverseString(string) {
  let result = [];
  for (let char of string) {
    result.unshift(char);
  }
  return result.join("");
};
