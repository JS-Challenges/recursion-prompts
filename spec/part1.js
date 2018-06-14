/* jshint esversion: 6 */

(function() {
  'use strict';

  describe('Exercises in Recursion', function() {

    describe('1. Factorial', function() {
      var originalFactorial;

      before(function() {
        originalFactorial = factorial;
        factorial = sinon.spy(factorial);
      });

      afterEach(function() {
        factorial.reset();
      });

      after(function() {
        factorial = originalFactorial;
      });

      it('should return a number', function() {
        expect(factorial(5)).to.be.a('number');
      });

      it('should return factorial for non-negative integers', function() {
        expect(factorial(0)).to.equal(1);
        expect(factorial(1)).to.equal(1);
        expect(factorial(4)).to.equal(24);
        expect(factorial(5)).to.equal(120);
      });

      it('should return null for negative integers', function() {
        expect(factorial(-5)).to.be.null;
      });

      it('should use recursion by calling self', function() {
        factorial(4);
        expect(factorial.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        factorial(4);
        factorial.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('2. Sum of Integers', function() {
      var originalSum;

      before(function() {
        originalSum = sum;
        sum = sinon.spy(sum);
      });

      afterEach(function() {
        sum.reset();
      });

      after(function() {
        sum = originalSum;
      });

      it('should return a number', function() {
        expect(sum([1,2,3,4,5,6])).to.be.a('number');
      });

      it('should return the sum of an array of non-negative integers', function() {
        expect(sum([1,2,3,4,5,6])).to.equal(21);
        expect(sum([3,0,34,7,18])).to.equal(62);
      });

      it('should return the sum of an array of negative integers', function() {
        expect(sum([-1,-2,-3,-4,-5,-6])).to.equal(-21);
        expect(sum([-3,-0,-34,-7,-18])).to.equal(-62);
      });

      it('should return the sum of an array of mixed non-negative and negative integers', function() {
        expect(sum([1,-2,3,-4,5,-6])).to.equal(-3);
        expect(sum([-12,34,-56,78])).to.equal(44);
        expect(sum([3,0,-34,-7,18])).to.equal(-20);
      });

      it('should return 0 for empty array', function() {
        expect(sum([])).to.equal(0);
      });

      it('should accept an array with a single integer', function() {
        expect(sum([4])).to.equal(4);
        expect(sum([0])).to.equal(0);
        expect(sum([-37])).to.equal(-37);
      });

      it('should not mutate the input array', function() {
        var input = [1,2,3,4,5];
        sum(input);
        expect(input).to.eql([1,2,3,4,5]);
      });

      it('should use recursion by calling self', function() {
        sum([1,2,3,4,5,6]);
        expect(sum.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        sum([1,2,3,4,5,6]);
        sum.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('3. Sum Integers in Array', function() {
      var originalArraySum;

      before(function() {
        originalArraySum = arraySum;
        arraySum = sinon.spy(arraySum);
      });

      afterEach(function() {
        arraySum.reset();
      });

      after(function() {
        arraySum = originalArraySum;
      });

      it('should return a number', function() {
        expect(arraySum([[1],[[2]],3,4])).to.be.a('number');
      });

      it('should return the sum of nested arrays containing non-negative integers', function() {
        expect(arraySum([[1],[2,3],[[4]],5])).to.equal(15);
        expect(arraySum([[12,[[34],[56]],78]])).to.equal(180);
        expect(arraySum([3,[0,[34,[7,[18]]]]])).to.equal(62);
      });

      it('should return the sum of nested arrays containing negative integers', function() {
        expect(arraySum([[-1],[-2,-3],[[-4]],-5])).to.equal(-15);
        expect(arraySum([[-12,[[-34],[-56]],-78]])).to.equal(-180);
        expect(arraySum([-3,[0,[-34,[-7,[-18]]]]])).to.equal(-62);
      });

      it('should return the sum of nested arrays containing both non-negative and negative integers', function() {
        expect(arraySum([[1],[-2,3],[[-4]],5,-6])).to.equal(-3);
        expect(arraySum([[-12,[[34],[-56]],78]])).to.equal(44);
        expect(arraySum([3,[0,[-34,[-7,[18]]]]])).to.equal(-20);
      });

      it('should return 0 for empty array', function() {
        expect(arraySum([])).to.equal(0);
      });

      it('should accept an array with a single integer', function() {
        expect(arraySum([4])).to.equal(4);
        expect(arraySum([0])).to.equal(0);
        expect(arraySum([-37])).to.equal(-37);
      });

      it('should not mutate the input array', function() {
        var input = [[1],[[2]],3,4];
        arraySum(input);
        expect(input).to.eql([[1],[[2]],3,4]);
      });

      it('should use recursion by calling self', function() {
        arraySum([[1],[[2]],3,4]);
        expect(arraySum.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        arraySum([[1],[[2]],3,4]);
        arraySum.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('4. Check if Even', function() {
      var originalIsEven;

      before(function() {
        originalIsEven = isEven;
        isEven = sinon.spy(isEven);
      });

      afterEach(function() {
        isEven.reset();
      });

      after(function() {
        isEven = originalIsEven;
      });

      it('should return a boolean', function() {
        expect(isEven(5)).to.be.a('boolean');
        expect(isEven(8)).to.be.a('boolean');
      });

      it("should not use modulo", function() {
        var stringified = originalIsEven.toString();
        expect(stringified).to.not.contain('%');
        expect(stringified).to.not.contain('modulo');
      });

      it('should return true for even numbers', function() {
        expect(isEven(48)).to.be.true;
        expect(isEven(0)).to.be.true;
      });

      it('should return false for odd numbers', function() {
        expect(isEven(17)).to.be.false;
        expect(isEven(1)).to.be.false;
      });

      it('should work with negative integers', function() {
        expect(isEven(-14)).to.be.true;
        expect(isEven(-31)).to.be.false;
      });

      it('should use recursion by calling self', function() {
        isEven(8);
        expect(isEven.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        isEven(8);
        isEven.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('5. Sum Below', function() {
      var originalSumBelow;

      before(function() {
        originalSumBelow = sumBelow;
        sumBelow = sinon.spy(sumBelow);
      });

      afterEach(function() {
        sumBelow.reset();
      });

      after(function() {
        sumBelow = originalSumBelow;
      });

      it('should return a number', function() {
        expect(sumBelow(10)).to.be.a('number');
      });

      it('should return the sum of non-negative integers below given integer', function() {
        expect(sumBelow(0)).to.equal(0);
        expect(sumBelow(1)).to.equal(0);
        expect(sumBelow(2)).to.equal(1);
        expect(sumBelow(7)).to.equal(21);
        expect(sumBelow(12)).to.equal(66);
      });

      it('should return the sum of an array of negative integers', function() {
        expect(sumBelow(-1)).to.equal(0);
        expect(sumBelow(-2)).to.equal(-1);
        expect(sumBelow(-6)).to.equal(-15);
        expect(sumBelow(-11)).to.equal(-55);
      });

      it('should use recursion by calling self', function() {
        sumBelow(5);
        expect(sumBelow.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        sumBelow(5);
        sumBelow.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('6. Integer Range', function() {
      var originalRange;

      before(function() {
        originalRange = range;
        range = sinon.spy(range);
      });

      afterEach(function() {
        range.reset();
      });

      after(function() {
        range = originalRange;
      });

      it('should return an array', function() {
        expect(range(2,7)).to.be.an('array');
      });

      it('should return the integers between two numbers', function() {
        expect(range(3,8)).to.eql([4,5,6,7]);
        expect(range(127,131)).to.eql([128,129,130]);
      });

      it('should return empty array if no integers in range', function() {
        expect(range(5,5)).to.eql([]);
        expect(range(2,3)).to.eql([]);
      });

      it('should accept negative integers', function() {
        expect(range(-9,-4)).to.eql([-8,-7,-6,-5]);
        expect(range(-3,2)).to.eql([-2,-1,0,1]);
        expect(range(-3,-2)).to.eql([]);
        expect(range(-2,-2)).to.eql([]);
      });

      it('should accept starting integer that\'s larger than ending', function() {
        expect(range(7,2)).to.eql([6,5,4,3]);
        expect(range(3,-3)).to.eql([2,1,0,-1,-2]);
        expect(range(-9,-4)).to.eql([-8,-7,-6,-5]);
      });

      it('should use recursion by calling self', function() {
        range(3,8);
        expect(range.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        range(3,8);
        range.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('7. Compute Exponent', function() {
      var originalExponent;

      before(function() {
        originalExponent = exponent;
        exponent = sinon.spy(exponent);
      });

      afterEach(function() {
        exponent.reset();
      });

      after(function() {
        exponent = originalExponent;
      });

      it('should return a number', function() {
        expect(exponent(4,3)).to.be.a('number');
      });

      it("should not use complex math", function() {
        expect(originalExponent.toString()).to.not.contain('Math');
      });

      it('should compute exponent of non-negative integers', function() {
        expect(exponent(3,4)).to.equal(81);
        expect(exponent(12,5)).to.equal(248832);
        expect(exponent(7,2)).to.equal(49);
      });

      it('returns 1 when exponent is 0', function() {
        expect(exponent(8,0)).to.equal(1);
        expect(exponent(244,0)).to.equal(1);
      });

      it('returns base when exponent is 1', function() {
        expect(exponent(9,1)).to.equal(9);
        expect(exponent(2300,1)).to.equal(2300);
      });


      it('should accept negative integer for exponent', function() {
        expect(exponent(4,-2)).to.equal(0.0625);
        expect(exponent(5,-4)).to.equal(0.0016);
        expect(exponent(2,-5)).to.equal(0.03125);
      });

      it('should use recursion by calling self', function() {
        exponent(3,4);
        expect(exponent.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        exponent(3,4);
        exponent.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

      // remove the 'x' to enable test
      it('optimize for even numbers', function() {
        exponent(3,4);
        expect(exponent.callCount).to.be.at.most(4);

        exponent.reset();
        exponent(12,5);
        expect(exponent.callCount).to.be.at.most(5);

        exponent.reset();
        exponent(19,7);
        expect(exponent.callCount).to.be.at.most(6);
      });

      // remove the 'x' to enable test
      it('should accept negative integer for base', function() {
        expect(exponent(-3,4)).to.equal(81);
        expect(exponent(-12,5)).to.equal(-248832);
        expect(exponent(-7,2)).to.equal(49);
        expect(exponent(-7,4)).to.equal(2401);
        expect(exponent(-3,5)).to.equal(-243);
      });

    });



    describe('8. Power of Two', function() {
      var originalPowerOfTwo;

      before(function() {
        originalPowerOfTwo = powerOfTwo;
        powerOfTwo = sinon.spy(powerOfTwo);
      });

      afterEach(function() {
        powerOfTwo.reset();
      });

      after(function() {
        powerOfTwo = originalPowerOfTwo;
      });

      it('should return a boolean', function() {
        expect(powerOfTwo(5)).to.be.a('boolean');
        expect(powerOfTwo(8)).to.be.a('boolean');
      });

      it('should return true for powers of two', function() {
        expect(powerOfTwo(1)).to.be.true;
        expect(powerOfTwo(2)).to.be.true;
        expect(powerOfTwo(128)).to.be.true;
      });

      it('should return false when input is not power of two', function() {
        expect(powerOfTwo(0)).to.be.false;
        expect(powerOfTwo(10)).to.be.false;
        expect(powerOfTwo(270)).to.be.false;
      });

      it('should use recursion by calling self', function() {
        powerOfTwo(16);
        expect(powerOfTwo.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        powerOfTwo(16);
        powerOfTwo.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('9. Reverse String', function() {
      var originalReverse;

      before(function() {
        originalReverse = reverse;
        reverse = sinon.spy(reverse);
      });

      afterEach(function() {
        reverse.reset();
      });

      after(function() {
        reverse = originalReverse;
      });

      it('should return a string', function() {
        expect(reverse('traf')).to.be.a('string');
      });

      it('should return a string in reverse', function() {
        var input = 'All my base are belong to you.';
        var tupni = '.uoy ot gnoleb era esab ym llA';
        expect(reverse(input)).to.equal(tupni);
      });

      it('should not use native reverse method', function() {
        // Spying on Array.prototype.reverse in testSupport.js
        reverse('traf');
        expect(Array.prototype.reverse.called).to.be.false;
      });

      it('should use recursion by calling self', function() {
        reverse('orangutan');
        expect(reverse.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        reverse('orangutan');
        reverse.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('10. Palindrome', function() {
      var originalPalindrome;

      before(function() {
        originalPalindrome = palindrome;
        palindrome = sinon.spy(palindrome);
      });

      afterEach(function() {
        palindrome.reset();
      });

      after(function() {
        palindrome = originalPalindrome;
      });

      it('should return a boolean', function() {
        expect(palindrome('rotor')).to.be.a('boolean');
        expect(palindrome('motor')).to.be.a('boolean');
      });

      it('should not use native reverse method', function() {
        palindrome('hannah');
        expect(Array.prototype.reverse.called).to.be.false;
      });

      it('should return true for palindromes', function() {
        expect(palindrome('o')).to.be.true;
        expect(palindrome('racecar')).to.be.true;
        expect(palindrome('saippuakivikauppias')).to.be.true;
      });

      it('should return false for non-palindromes', function() {
        expect(palindrome('hi')).to.be.false;
        expect(palindrome('orangutan')).to.be.false;
      });

      it('should ignore spaces and capital letters', function() {
        expect(palindrome('Rotor')).to.be.true;
        expect(palindrome('sAip puaki v iKaup Pias')).to.be.true;
      });

      it('should use recursion by calling self', function() {
        palindrome('racecar');
        expect(palindrome.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        palindrome('racecar');
        palindrome.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('11. Modulo', function() {
      var originalModulo;

      before(function() {
        originalModulo = modulo;
        modulo = sinon.spy(modulo);
      });

      afterEach(function() {
        modulo.reset();
      });

      after(function() {
        modulo = originalModulo;
      });

      it('should return a number', function() {
        expect(modulo(5,2)).to.be.a('number');
        expect(modulo(8,4)).to.be.a('number');
      });

      it("should not use complex math", function() {
        var stringified = originalModulo.toString();
        expect(stringified).to.not.contain('*');
        expect(stringified).to.not.contain('/');
        expect(stringified).to.not.contain('%');
        expect(stringified).to.not.contain('Math');
      });

      it('should return the remainder of two integers', function() {
        expect(modulo(2, 1)).to.equal(2 % 1);
        expect(modulo(17, 5)).to.equal(17 % 5);
        expect(modulo(78, 453)).to.equal(78 % 453);
        expect(modulo(0, 32)).to.equal(0 % 32);
        expect(modulo(0, 0)).to.be.NaN;
      });

      it('should accept negative integers', function() {
        expect(modulo(-79, 82)).to.equal(-79 % 82);
        expect(modulo(-275, -502)).to.equal(-275 % -502);
        expect(modulo(-275, -274)).to.equal(-275 % -274);
        expect(modulo(-4, 2)).to.equal(-4 % 2);
      });

      it('should use recursion by calling self', function() {
        modulo(5,2);
        expect(modulo.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        modulo(5,2);
        modulo.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('12. Multiply', function() {
      var originalMultiply;

      before(function() {
        originalMultiply = multiply;
        multiply = sinon.spy(multiply);
      });

      afterEach(function() {
        multiply.reset();
      });

      after(function() {
        multiply = originalMultiply;
      });

      it('should return a number', function() {
        expect(multiply(5,2)).to.be.a('number');
        expect(multiply(8,4)).to.be.a('number');
      });

      it("should not use complex math", function() {
        var stringified = originalMultiply.toString();
        expect(stringified).to.not.contain('*');
        expect(stringified).to.not.contain('/');
        expect(stringified).to.not.contain('%');
        expect(stringified).to.not.contain('Math');
        expect(stringified).to.not.contain('modulo');
      });

      it('should return the product of two positive integers', function() {
        expect(multiply(1, 2)).to.equal(1 * 2);
        expect(multiply(17, 5)).to.equal(17 * 5);
        expect(multiply(0, 32)).to.equal(0 * 32);
        expect(multiply(0, 0)).to.equal(0 * 0);
        // expect(multiply(78, 453)).to.equal(78 * 453);
      });

      it('should return the product of two negative integers', function() {
        expect(multiply(-2, -2)).to.equal(-2 * -2);
        expect(multiply(-8, -3)).to.equal(-8 * -3);
        expect(multiply(-5, -27)).to.equal(-5 * -27);
        // expect(multiply(-79, -82)).to.equal(-79 * -82);
        // expect(multiply(-275, -502)).to.equal(-275 * -502);
        // expect(multiply(-12, -10)).to.equal(-12 * -10);
        // expect(multiply(-22, -3)).to.equal(-22 * -3);
      });

      it('should return the product of mixed positive and negative integers', function() {
        expect(multiply(-79, 82)).to.equal(-79 * 82);
        expect(multiply(79, -82)).to.equal(79 * -82);
        expect(multiply(2, -2)).to.equal(2 * -2);
        expect(multiply(5, -27)).to.equal(5 * -27);
        // expect(multiply(-275, 502)).to.equal(-275 * 502);
        // expect(multiply(275, -502)).to.equal(275 * -502);
        // expect(multiply(-8, 3)).to.equal(-8 * 3);
        // expect(multiply(12, -10)).to.equal(12 * -10);
        // expect(multiply(-22, 3)).to.equal(-22 * 3);
      });

      it('should accept parameters in any order', function() {
        expect(multiply(2, 1)).to.equal(1 * 2);
        expect(multiply(5, 17)).to.equal(5 * 17);
        expect(multiply(32, 0)).to.equal(0 * 32);
        // expect(multiply(453, 78)).to.equal(78 * 453);
      });

      it('should use recursion by calling self', function() {
        multiply(8,4);
        expect(multiply.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        multiply(8,4);
        multiply.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('13. Divide', function() {
      var originalDivide;

      before(function() {
        originalDivide = divide;
        divide = sinon.spy(divide);
      });

      afterEach(function() {
        divide.reset();
      });

      after(function() {
        divide = originalDivide;
      });

      it('should return a number', function() {
        expect(divide(5,2)).to.be.a('number');
        expect(divide(8,4)).to.be.a('number');
      });

      it("should not use complex math", function() {
        var stringified = originalDivide.toString();
        expect(stringified).to.not.contain('*');
        expect(stringified).to.not.contain('/');
        expect(stringified).to.not.contain('%');
        expect(stringified).to.not.contain('Math');
        expect(stringified).to.not.contain('modulo');
      });

      it('should return the quotient of two integers', function() {
        expect(divide(2, 1)).to.equal(~~(2 / 1));
        expect(divide(17, 5)).to.equal(~~(17 / 5));
        expect(divide(78, 453)).to.equal(~~(78 / 453));
        expect(divide(-79, 82)).to.equal(~~(-79 / 82));
        expect(divide(-275, -582)).to.equal(~~(-275 / -582));
        expect(divide(0, 32)).to.equal(~~(0 / 32));
        expect(divide(0, 0)).to.be.NaN;
      });

      it('should use recursion by calling self', function() {
        divide(17, 5);
        expect(divide.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        divide(8,4);
        divide.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('14. Greatest Common Divisor', function() {
      var originalGcd;

      before(function() {
        originalGcd = gcd;
        gcd = sinon.spy(gcd);
      });

      afterEach(function() {
        gcd.reset();
      });

      after(function() {
        gcd = originalGcd;
      });

      it('should return a number', function() {
        expect(gcd(4,36)).to.be.a('number');
      });

      it('should return greatest common divisor of two positive integers', function() {
        expect(gcd(4,36)).to.equal(4);
        expect(gcd(24,88)).to.equal(8);
        expect(gcd(339,17)).to.equal(1);
        expect(gcd(126,900)).to.equal(18);
      });

      it('should return null for negative integers', function() {
        expect(gcd(-4, 2)).to.be.null;
        expect(gcd(-5, 5)).to.be.null;
        expect(gcd(5, -5)).to.be.null;
        expect(gcd(7, -36)).to.be.null;
        expect(gcd(-10, -58)).to.be.null;
        expect(gcd(-92, -5)).to.be.null;
        // expect(gcd(0, 0)).to.be.null;
        // expect(gcd(0, 5)).to.be.null;
        // expect(gcd(5, 0)).to.be.null;
        // expect(gcd(-5, 0)).to.be.null;
        // expect(gcd(0, -5)).to.be.null;
      });

      it('should use recursion by calling self', function() {
        gcd(17, 5);
        expect(gcd.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        gcd(17,5);
        gcd.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('15. Compare Strings', function() {
      var originalCompareStr;

      before(function() {
        originalCompareStr = compareStr;
        compareStr = sinon.spy(compareStr);
      });

      afterEach(function() {
        compareStr.reset();
      });

      after(function() {
        compareStr = originalCompareStr;
      });

      it('should return a boolean', function() {
        expect(compareStr('house', 'houses')).to.be.a('boolean');
        expect(compareStr('', '')).to.be.a('boolean');
        expect(compareStr('tomato', 'tomato')).to.be.a('boolean');
      });

      it('should return true for identical strings', function() {
        expect(compareStr('house', 'houses')).to.be.false;
        expect(compareStr('', '')).to.be.true;
        expect(compareStr('tomato', 'tomato')).to.be.true;
        expect(compareStr('', 'pop')).to.be.false;
        expect(compareStr('foot', '')).to.be.false;
        expect(compareStr('big dog', 'big dog')).to.be.true;
      });

      it('should use recursion by calling self', function() {
        compareStr('house', 'houses');
        expect(compareStr.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        compareStr('house', 'houses');
        compareStr.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('16. Create array from string', function() {
      var originalCreateArray;

      before(function() {
        originalCreateArray = createArray;
        createArray = sinon.spy(createArray);
      });

      afterEach(function() {
        createArray.reset();
      });

      after(function() {
        createArray = originalCreateArray;
      });

      it('should return an array', function() {
        expect(createArray('hello')).to.be.an('array');
      });

      it('should return an array where each index is a letter of the string', function() {
        expect(createArray('this is not a pipe')).to.eql(['t','h','i','s',' ','i','s',' ','n','o','t',' ','a',' ','p','i','p','e']);
        expect(createArray('hologram')).to.eql(['h','o','l','o','g','r','a','m']);
        expect(createArray('i')).to.eql(['i']);
      });

      it('should use recursion by calling self', function() {
        createArray('hello');
        expect(createArray.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        createArray('hello');
        createArray.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('17. Reverse an array', function() {
      var originalReverseArr;

      before(function() {
        originalReverseArr = reverseArr;
        reverseArr = sinon.spy(reverseArr);
      });

      afterEach(function() {
        reverseArr.reset();
      });

      after(function() {
        reverseArr = originalReverseArr;
      });

      it('should return an array', function() {
        expect(reverseArr([3,2,1])).to.be.an('array');
      });

      it('should return array in reversed order', function() {
        expect(reverseArr([1,2,3,4,5])).to.eql([5,4,3,2,1]);
        expect(reverseArr([8,6,4,2])).to.eql([2,4,6,8]);
      });

      it('should use recursion by calling self', function() {
        reverseArr([3,2,1]);
        expect(reverseArr.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        reverseArr([5,4,3]);
        reverseArr.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('18. Build an array with a given value and length', function() {
      var originalBuildList;

      before(function() {
        originalBuildList = buildList;
        buildList = sinon.spy(buildList);
      });

      afterEach(function() {
        buildList.reset();
      });

      after(function() {
        buildList = originalBuildList;
      });

      it('should return an array', function() {
        expect(buildList(0,5)).to.be.an('array');
      });

      it('should return array of given length with given value at each index', function() {
        expect(buildList(0, 5)).to.eql([0,0,0,0,0]);
        expect(buildList('banana', 3)).to.eql(['banana','banana','banana']);
        expect(buildList(NaN, 4)).to.eql([NaN, NaN, NaN, NaN]);
        expect(buildList(undefined, 1)).to.eql([undefined]);
        expect(buildList([], 2)).to.eql([[],[]]);
        expect(buildList({}, 4)).to.eql([{},{},{},{}]);
        expect(buildList(true, 3)).to.eql([true,true,true]);
      });

      it('should use recursion by calling self', function() {
        buildList(2,4);
        expect(buildList.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        buildList('five',3);
        buildList.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('19. FizzBuzz', function() {
      var originalFizzBuzz, actualResult, expectedResult;

      before(function() {
        originalFizzBuzz = fizzBuzz;
        fizzBuzz = sinon.spy(fizzBuzz);
      });

      afterEach(function() {
        fizzBuzz.reset();
      });

      after(function() {
        fizzBuzz = originalFizzBuzz;
      });

      it('should return an array', function() {
        expect(fizzBuzz(3)).to.be.an('array');
      });

      it('should return string representations of numbers 1 to n', function() {
        actualResult = fizzBuzz(10);
        actualResult.forEach(function(value) {
          expect(value).to.be.a('string');
        });
      });

      it('should output "Fizz" for multiples of three', function() {
        actualResult = fizzBuzz(3);
        expectedResult = ['1','2','Fizz'];
        expect(actualResult).to.eql(expectedResult);
      });

      it('should output "Buzz" for multiples of five', function() {
        actualResult = fizzBuzz(12);
        expectedResult = ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz'];
        expect(actualResult).to.eql(expectedResult);
      });

      it('should output "FizzBuzz" for multiples of both three and five', function() {
        actualResult = fizzBuzz(15);
        expectedResult = ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz'];
        expect(actualResult).to.eql(expectedResult);
      });

      it('should use recursion by calling self', function() {
        fizzBuzz(5);
        expect(fizzBuzz.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        fizzBuzz(5);
        fizzBuzz.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('20. Count value in array', function() {
      var originalCountOccurrence;

      before(function() {
        originalCountOccurrence = countOccurrence;
        countOccurrence = sinon.spy(countOccurrence);
      });

      afterEach(function() {
        countOccurrence.reset();
      });

      after(function() {
        countOccurrence = originalCountOccurrence;
      });

      it('should return a number', function() {
        expect(countOccurrence([2,7,4,4,1,4], 4)).to.be.a('number');
        expect(countOccurrence([2,'banana',4,4,1,'banana'], 'banana')).to.be.a('number');
      });

      it('should return the number of occurrences of the value', function() {
        expect(countOccurrence([2,7,4,4,1,4], 4)).to.equal(3);
        expect(countOccurrence([2,'banana',4,4,1,'banana'], 'banana')).to.equal(2);
        expect(countOccurrence([undefined,7,undefined,4,1,4], undefined)).to.equal(2);
        expect(countOccurrence(['',null,0,'0',false], 0)).to.equal(1);
        expect(countOccurrence(['',null,0,'false',false], false)).to.equal(1);
        expect(countOccurrence(['',7,null,0,'0',false], null)).to.equal(1);
        expect(countOccurrence(['',7,null,0,'0',false], '')).to.equal(1);
        // expect(countOccurrence(['',7,null,0,NaN,'0',false], NaN)).to.equal(1);
      });

      it('should use recursion by calling self', function() {
        countOccurrence([2,7,4,4,1,4], 4);
        expect(countOccurrence.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        countOccurrence([2,7,4,4,1,4], 4);
        countOccurrence.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('21. Recursive Map', function() {
      var originalRMap, timesTwo, input, result;

      before(function() {
        originalRMap = rMap;
        rMap = sinon.spy(rMap);
        timesTwo = function(n) { return n * 2; };
      });

      beforeEach(function() {
        input = [1,2,3,4,5];
      });

      afterEach(function() {
        rMap.reset();
      });

      after(function() {
        rMap = originalRMap;
      });

      it('should return an array', function() {
        expect(rMap(input, timesTwo)).to.be.an('array');
      });

      it('should not use the native version of map', function() {
        // Spying on Array.prototype.map in testSupport.js
        rMap(input, timesTwo);
        expect(Array.prototype.map.called).to.be.false;
      });

      it('should return new array without mutating the input array', function() {
        result = rMap(input, num => num);
        expect(input).to.eql([1,2,3,4,5]);
        // should deeply equal input
        expect(result).to.eql(input);
        // should not be same array in memory
        expect(result).to.not.equal(input);
      });

      it('should apply a function to every value in an array', function() {
        result = rMap([1,2,3], timesTwo);
        expect(result).to.eql([2,4,6]);
      });

      it('should use recursion by calling self', function() {
        rMap([1,2,3,4], timesTwo);
        expect(rMap.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        rMap([1,2,3,4], timesTwo);
        rMap.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('22. Count key in object', function() {
      var originalCountKeysInObj, input;

      before(function() {
        originalCountKeysInObj = countKeysInObj;
        countKeysInObj = sinon.spy(countKeysInObj);
        input = {e:{x:'y'},t:{r:{e:'r'},p:{y:'r'}},y:'e'};
      });

      afterEach(function() {
        countKeysInObj.reset();
      });

      after(function() {
        countKeysInObj = originalCountKeysInObj;
      });

      it('should return a number', function() {
        expect(countKeysInObj(input, 'r')).to.be.a('number');
      });

      it('should return the number of occurrences of the property', function() {
        expect(countKeysInObj(input, 'e')).to.equal(2);
        expect(countKeysInObj(input, 'x')).to.equal(1);
        expect(countKeysInObj(input, 'y')).to.equal(2);
        expect(countKeysInObj(input, 't')).to.equal(1);
        expect(countKeysInObj(input, 'r')).to.equal(1);
        expect(countKeysInObj(input, 'p')).to.equal(1);
      });

      it('should use recursion by calling self', function() {
        countKeysInObj(input, 'e');
        expect(countKeysInObj.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        countKeysInObj(input, 'e');
        countKeysInObj.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('23. Count value in object', function() {
      var originalCountValuesInObj, input;

      before(function() {
        originalCountValuesInObj = countValuesInObj;
        countValuesInObj = sinon.spy(countValuesInObj);
        input = {e:{x:'y'},t:{r:{e:'r'},p:{y:'r'}},y:'e'};
      });

      afterEach(function() {
        countValuesInObj.reset();
      });

      after(function() {
        countValuesInObj = originalCountValuesInObj;
      });

      it('should return a number', function() {
        expect(countValuesInObj(input, 'r')).to.be.a('number');
      });

      it('should return the count of the occurrences of the property', function() {
        expect(countValuesInObj(input, 'e')).to.equal(1);
        expect(countValuesInObj(input, 'x')).to.equal(0);
        expect(countValuesInObj(input, 'y')).to.equal(1);
        expect(countValuesInObj(input, 't')).to.equal(0);
        expect(countValuesInObj(input, 'r')).to.equal(2);
        expect(countValuesInObj(input, 'p')).to.equal(0);
      });

      it('should use recursion by calling self', function() {
        countValuesInObj(input, 'r');
        expect(countValuesInObj.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        countValuesInObj(input, 'r');
        countValuesInObj.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('24. Replace keys in object', function() {
      var originalReplaceKeysInObj, input, output;

      before(function() {
        originalReplaceKeysInObj = replaceKeysInObj;
        replaceKeysInObj = sinon.spy(replaceKeysInObj);
      });

      beforeEach(function() {
        input = {e:{x:'y'},t:{r:{e:'r'},p:{y:'r'}},y:'e'};
      });

      afterEach(function() {
        replaceKeysInObj.reset();
      });

      after(function() {
        replaceKeysInObj = originalReplaceKeysInObj;
      });

      it('should return an object', function() {
        output = replaceKeysInObj(input, 'r', 'a');
        expect(output).to.be.an('object');
      });

      it('should mutate the input object', function() {
        output = replaceKeysInObj(input, 'y', 'u');
        expect(input).to.equal(output);
      });

      it('should return object containing renamed keys', function() {
        replaceKeysInObj(input, 'e', 'f');

        expect(input).to.have.all.keys('f','t','y');
        expect(input.f).to.be.an('object');
        expect(input.f).to.have.all.keys('x');

        expect(input.f.x).to.be.a('string');
        expect(input.f.x).to.equal('y');

        expect(input.t).to.be.an('object');
        expect(input.t).to.have.all.keys('r','p');

        expect(input.t.r).to.be.an('object');
        expect(input.t.r).to.have.all.keys('f');
        expect(input.t.r.f).to.be.a('string');
        expect(input.t.r.f).to.equal('r');

        expect(input.t.p).to.be.an('object');
        expect(input.t.p).to.have.all.keys('y');
        expect(input.t.p.y).to.be.a('string');
        expect(input.t.p.y).to.equal('r');

        expect(input.y).to.be.a('string');
        expect(input.y).to.equal('e');

        expect(input).to.not.have.ownProperty('e');
        expect(input.t.r).to.not.have.ownProperty('e');
      });

      it('should return object with same number of keys', function() {
        expect(analyze(input)).to.equal(8);
        output = replaceKeysInObj(input, 'e', 'f');
        expect(analyze(output)).to.equal(8);
      });

      it('should use recursion by calling self', function() {
        replaceKeysInObj(input, 'r', 'a');
        expect(replaceKeysInObj.callCount).to.be.above(1);
      });

      it('should be invoked with three arguments', function() {
        replaceKeysInObj(input, 'r', 'a');
        replaceKeysInObj.args.forEach(arg => {
          expect(arg).to.have.length(3);
        });
      });

    });



    describe('25. First n Fibonacci', function() {
      var originalFibonacci;

      before(function() {
        originalFibonacci = fibonacci;
        fibonacci = sinon.spy(fibonacci);
      });

      afterEach(function() {
        fibonacci.reset();
      });

      after(function() {
        fibonacci = originalFibonacci;
      });

      it('should return an array', function() {
        expect(fibonacci(5)).to.be.an('array');
      });

      it('should return first n Fibonacci numbers where n starts at index 1', function() {
        expect(fibonacci(1)).to.eql([0,1]);
        expect(fibonacci(2)).to.eql([0,1,1]);
        expect(fibonacci(3)).to.eql([0,1,1,2]);
        expect(fibonacci(4)).to.eql([0,1,1,2,3]);
        expect(fibonacci(5)).to.eql([0,1,1,2,3,5]);
        expect(fibonacci(8)).to.eql([0,1,1,2,3,5,8,13,21]);
      });

      it('should return null for zero and negative integers', function() {
        expect(fibonacci(0)).to.be.null;
        expect(fibonacci(-7)).to.be.null;
      });

      it('should use recursion by calling self', function() {
        fibonacci(5);
        expect(fibonacci.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        fibonacci(5);
        fibonacci.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('26. Return nth Fibonacci', function() {
      var originalNthFibo;

      before(function() {
        originalNthFibo = nthFibo;
        nthFibo = sinon.spy(nthFibo);
      });

      afterEach(function() {
        nthFibo.reset();
      });

      after(function() {
        nthFibo = originalNthFibo;
      });

      it('should return a number', function() {
        expect(nthFibo(5)).to.be.a('number');
      });

      it('should return the nth nthFibo number', function() {
        expect(nthFibo(0)).to.equal(0);
        expect(nthFibo(1)).to.equal(1);
        expect(nthFibo(2)).to.equal(1);
        expect(nthFibo(3)).to.equal(2);
        expect(nthFibo(4)).to.equal(3);
        expect(nthFibo(5)).to.equal(5);
        expect(nthFibo(8)).to.equal(21);
      });

      it('should return null for negative integers', function() {
        expect(nthFibo(-5)).to.be.null;
        expect(nthFibo(-7)).to.be.null;
      });

      it('should use recursion by calling self', function() {
        nthFibo(5);
        expect(nthFibo.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        nthFibo(5);
        nthFibo.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('27. Capitalize words in array', function() {
      var originalCapitalizeWords;

      before(function() {
        originalCapitalizeWords = capitalizeWords;
        capitalizeWords = sinon.spy(capitalizeWords);
      });

      afterEach(function() {
        capitalizeWords.reset();
      });

      after(function() {
        capitalizeWords = originalCapitalizeWords;
      });

      it('should return an array', function() {
        expect(capitalizeWords(['recursion'])).to.be.an('array');
      });

      it('should capitalize all words in array', function() {
        expect(capitalizeWords(["ceci","n'est","pas","une","pipe"])).to.eql(["CECI", "N'EST", "PAS", "UNE", "PIPE"]);
      });

      it('should use recursion by calling self', function() {
        capitalizeWords(['i','am','learning','recursion']);
        expect(capitalizeWords.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        capitalizeWords(['you','got','this']);
        capitalizeWords.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('28. Capitalize first letter of words in array', function() {
      var originalCapitalizeFirst;

      before(function() {
        originalCapitalizeFirst = capitalizeFirst;
        capitalizeFirst = sinon.spy(capitalizeFirst);
      });

      afterEach(function() {
        capitalizeFirst.reset();
      });

      after(function() {
        capitalizeFirst = originalCapitalizeFirst;
      });

      it('should return an array', function() {
        expect(capitalizeFirst(['recursion'])).to.be.an('array');
      });

      it('should capitalize first letter of each word in array', function() {
        expect(capitalizeFirst(["ceci","n'est","pas","une","pipe"])).to.eql(["Ceci", "N'est", "Pas", "Une", "Pipe"]);
      });

      it('should use recursion by calling self', function() {
        capitalizeFirst(["ceci","n'est","pas","une","pipe"]);
        expect(capitalizeFirst.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        capitalizeFirst(['you','got','this']);
        capitalizeFirst.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('29. Sum even numbers in nested objects', function() {
      var originalNestedEvenSum, input;

      before(function() {
        originalNestedEvenSum = nestedEvenSum;
        nestedEvenSum = sinon.spy(nestedEvenSum);
        input = {
          a: 2,
          b: {b: 2, bb: {b: 3, bb: {b: 2}}},
          c: {c: {c: 2}, cc: 'ball', ccc: 5},
          d: 1,
          e: {e: {e: 2}, ee: 'car'}
        };
      });

      afterEach(function() {
        nestedEvenSum.reset();
      });

      after(function() {
        nestedEvenSum = originalNestedEvenSum;
      });

      it('should return a number', function() {
        expect(nestedEvenSum(input)).to.be.a('number');
      });

      it('should sum even numbers', function() {
        expect(nestedEvenSum(input)).to.equal(10);
      });

      it('should use recursion by calling self', function() {
        nestedEvenSum(input);
        expect(nestedEvenSum.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        nestedEvenSum(input);
        nestedEvenSum.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('30. Flatten nested arrays', function() {
      var originalFlatten;

      before(function() {
        originalFlatten = flatten;
        flatten = sinon.spy(flatten);
      });

      afterEach(function() {
        flatten.reset();
      });

      after(function() {
        flatten = originalFlatten;
      });

      it('should return an array', function() {
        expect(flatten([1,[2],[[3]]])).to.be.an('array');
      });

      it('should return flattened array', function() {
        expect(flatten([[1],[2,3],[[4]],5])).to.eql([1,2,3,4,5]);
        expect(flatten([3,[0,[34,[7,[18]]]]])).to.eql([3,0,34,7,18]);
        expect(flatten([[[[[3],0],34],7],18])).to.eql([3,0,34,7,18]);
        expect(flatten([[1],[2,[],3],[],[[4]],5])).to.eql([1,2,3,4,5]);
      });

      it('should use recursion by calling self', function() {
        flatten([3,[0,[34]]]);
        expect(flatten.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        flatten([3,[0,[34]]]);
        flatten.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('31. Tally letters in string', function() {
      var originalLetterTally;

      before(function() {
        originalLetterTally = letterTally;
        letterTally = sinon.spy(letterTally);
      });

      afterEach(function() {
        letterTally.reset();
      });

      after(function() {
        letterTally = originalLetterTally;
      });

      it('should return an object', function() {
        expect(letterTally('orangutan')).to.be.an('object');
      });

      it('should return object containing tallies of unique letters', function() {
        var output = letterTally('potato');

        expect(output.p).to.equal(1);
        expect(output.o).to.equal(2);
        expect(output.t).to.equal(2);
        expect(output.a).to.equal(1);
      });

      it('should return object containing the number of keys corresponding to unique letters', function() {
        var output = letterTally('mississippi');
        var keyCount = Object.keys(output).length;
        expect(keyCount).to.equal(4);
      });

      it('should use recursion by calling self', function() {
        letterTally('invasion');
        expect(letterTally.callCount).to.be.above(1);
      });

      it('should be invoked with at most two arguments', function() {
        letterTally('invasion');
        letterTally.args.forEach(arg => {
          expect(arg).to.have.length.of.at.most(2);
        });
      });

    });



    describe('32. Eliminate consecutive duplicates', function() {
      var originalCompress, input1, input2;

      before(function() {
        originalCompress = compress;
        compress = sinon.spy(compress);
        input1 = [1,2,2,3,4,4,5,5,5];
        input2 = [1,2,2,3,4,4,2,5,5,5,4,4];
      });

      afterEach(function() {
        compress.reset();
      });

      after(function() {
        compress = originalCompress;
      });

      it('should return an array', function() {
        expect(compress(input1)).to.be.an('array');
      });

      it('should not mutate the input array', function() {
        var result = compress(input1);
        expect(input1).to.eql([1,2,2,3,4,4,5,5,5]);
        expect(input1).to.not.equal(result);
      });

      it('should remove consecutive duplicates', function() {
        expect(compress(input1)).to.eql([1,2,3,4,5]);
        expect(compress(input2)).to.eql([1,2,3,4,2,5,4]);
      });

      it('should use recursion by calling self', function() {
        compress(input1);
        expect(compress.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        compress(input1);
        compress.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('33. Augment each element in nested arrays', function() {
      var originalAugmentElements;

      before(function() {
        originalAugmentElements = augmentElements;
        augmentElements = sinon.spy(augmentElements);
      });

      afterEach(function() {
        augmentElements.reset();
      });

      after(function() {
        augmentElements = originalAugmentElements;
      });

      it('should return an array', function() {
        expect(augmentElements([[],[3]], 5)).to.be.an('array');
      });

      it('should augment each element with given value', function() {
        expect(augmentElements([[],[3],[7]], 5)).to.eql([[5],[3,5],[7,5]]);
        expect(augmentElements([[],[3],[7]], null)).to.eql([[null],[3,null],[7,null]]);
        expect(augmentElements([[],[3],[7]], '')).to.eql([[''],[3,''],[7,'']]);
        expect(augmentElements([[],[3],[7]], false)).to.eql([[false],[3,false],[7,false]]);
      });

      it('should use recursion by calling self', function() {
        augmentElements([[],[3]], 5);
        expect(augmentElements.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        augmentElements([[],[3]], 5);
        augmentElements.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('34. Minimize zeroes', function() {
      var originalMinimizeZeroes, input1, input2;

      before(function() {
        originalMinimizeZeroes = minimizeZeroes;
        minimizeZeroes = sinon.spy(minimizeZeroes);
      });

      beforeEach(function() {
        input1 = [2,0,0,0,1,4];
        input2 = [2,0,0,0,1,0,0,4];
      });

      afterEach(function() {
        minimizeZeroes.reset();
      });

      after(function() {
        minimizeZeroes = originalMinimizeZeroes;
      });

      it('should return an array', function() {
        expect(minimizeZeroes(input1)).to.be.an('array');
      });

      it('should not mutate the input array', function() {
        expect(minimizeZeroes(input2)).to.not.equal(input2);
      });

      it('should remove excess zeroes', function() {
        expect(minimizeZeroes(input1)).to.eql([2,0,1,4]);
        expect(minimizeZeroes(input2)).to.eql([2,0,1,0,4]);
      });

      it('should use recursion by calling self', function() {
        minimizeZeroes(input1);
        expect(minimizeZeroes.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        minimizeZeroes(input2);
        minimizeZeroes.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('35. Alternate sign', function() {
      var originalAlternateSign, input1, input2;

      before(function() {
        originalAlternateSign = alternateSign;
        alternateSign = sinon.spy(alternateSign);
      });

      beforeEach(function() {
        input1 = [2,7,8,3,1,4];
        input2 = [-2,-7,8,3,-1,4];
      });

      afterEach(function() {
        alternateSign.reset();
      });

      after(function() {
        alternateSign = originalAlternateSign;
      });

      it('should return an array', function() {
        expect(alternateSign(input1)).to.be.an('array');
      });

      it('should not mutate the input array', function() {
        expect(alternateSign(input2)).to.not.equal(input2);
      });

      it('should remove excess zeroes', function() {
        expect(alternateSign(input1)).to.eql([2,-7,8,-3,1,-4]);
        expect(alternateSign(input2)).to.eql([2,-7,8,-3,1,-4]);
      });

      it('should use recursion by calling self', function() {
        alternateSign(input1);
        expect(alternateSign.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        alternateSign(input2);
        alternateSign.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('36. Convert numbers to text', function() {
      var originalNumToText, input1, input2;

      before(function() {
        originalNumToText = numToText;
        numToText = sinon.spy(numToText);
      });

      beforeEach(function() {
        input1 = '5 dogs and 6 ponies';
        input2 = 'Give me 8 dollars';
      });

      afterEach(function() {
        numToText.reset();
      });

      after(function() {
        numToText = originalNumToText;
      });

      it('should return a string', function() {
        expect(numToText(input1)).to.be.a('string');
      });

      it('should convert single digits to their word equivalent', function() {
        expect(numToText(input1)).to.equal('five dogs and six ponies');
        expect(numToText(input2)).to.equal('Give me eight dollars');
      });

      it('should use recursion by calling self', function() {
        numToText(input2);
        expect(numToText.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        numToText(input2);
        numToText.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });

  });
}());
