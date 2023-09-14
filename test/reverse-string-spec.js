const chai = require("chai");
const expect = chai.expect;
const reverseString = require("../problems/reverse-string.js");

describe("reverseString(string)", () => {
    it("should return the reversed output of the string", () => {
        const string1 = "fun";

        const reversed1 = reverseString(string1);

        expect(reversed1).to.equal("nuf");
    });

    it("should throw a TypeError if not a string", () => {
        const string2 = 42;

        // const reversed2 = reverseString(string2);

        expect(() => reverseString(string2)).to.throw(TypeError);
    })
});
