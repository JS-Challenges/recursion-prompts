(function() {
  'use strict';

  describe('Exercises in Recursion in Recursion in Recursion in...', function() {

    describe('1. Factorial', function() {

      it('should return a number', function() {
        expect(typeof(factorial(5))).to.equal('number');
      });

      it('should return factorial for non-negative integers', function() {
        expect(factorial(0)).to.equal(1);
        expect(factorial(1)).to.equal(1);
        expect(factorial(4)).to.equal(24);
        expect(factorial(5)).to.equal(120);
      });

      it('should return null for negative integers', function() {
        expect(factorial(-5)).to.equal(null);
      });

      it('should use recursion by calling self', function () {
        var originalFactorial = factorial;
        factorial = sinon.spy(factorial);
        factorial(4);
        expect(factorial.callCount).to.be.above(1);
        factorial = originalFactorial;
      });

    });



    describe('2. Sum of Integers', function() {

      it('should return a number', function() {
        expect(typeof(sum([1,2,3,4,5,6]))).to.eql('number');
      });

      it('should return the sum of an array of non-negative integers', function() {
        expect(sum([1,2,3,4,5,6])).to.eql(21);
        expect(sum([12,34,56,78])).to.eql(180);
        expect(sum([3,0,34,7,18])).to.eql(62);
      });

      it('should return the sum of an array of negative integers', function() {
        expect(sum([-1,-2,-3,-4,-5,-6])).to.eql(-21);
        expect(sum([-12,-34,-56,-78])).to.eql(-180);
        expect(sum([-3,-0,-34,-7,-18])).to.eql(-62);
      });

      it('should return the sum of an array of mixed non-negative and negative integers', function() {
        expect(sum([1,-2,3,-4,5,-6])).to.eql(-3);
        expect(sum([-12,34,-56,78])).to.eql(44);
        expect(sum([3,0,-34,-7,18])).to.eql(-20);
      });

      it('should return 0 for empty array', function() {
        expect(sum([])).to.eql(0);
      });

      it('should accept an array with a single integer', function() {
        expect(sum([4])).to.eql(4);
        expect(sum([0])).to.eql(0);
        expect(sum([-37])).to.eql(-37);
      });

      it('should not mutate the input array', function() {
        var input = [1,2,3,4,5];
        var result = sum(input);
        expect(input).to.eql([1,2,3,4,5]);
      });

      it('should use recursion by calling self', function () {
        var originalSum = sum;
        sum = sinon.spy(sum);
        sum([1,2,3,4,5,6]);
        expect(sum.callCount).to.be.above(1);
        sum = originalSum;
      });

    });



    describe('3. Sum Integers in Array', function() {

      it('should return a number', function() {
        expect(typeof(arraySum([[1],[2,3],[[4]],5,6]))).to.eql('number');
      });

      it('should return the sum of an array with nested arrays of non-negative integers', function() {
        expect(arraySum([[1],[2,3],[[4]],5,6])).to.eql(21);
        expect(arraySum([[12,[[34],[56]],78]])).to.eql(180);
        expect(arraySum([3,[0,[34,[7,[18]]]]])).to.eql(62);
      });

      it('should return the sum of an array with nested arrays of negative integers', function() {
        expect(arraySum([[-1],[-2,-3],[[-4]],-5,-6])).to.eql(-21);
        expect(arraySum([[-12,[[-34],[-56]],-78]])).to.eql(-180);
        expect(arraySum([-3,[0,[-34,[-7,[-18]]]]])).to.eql(-62);
      });

      it('should return the sum of an array with nested arrays of mixed non-negative and negative integers', function() {
        expect(arraySum([[1],[-2,3],[[-4]],5,-6])).to.eql(-3);
        expect(arraySum([[-12,[[34],[-56]],78]])).to.eql(44);
        expect(arraySum([3,[0,[-34,[-7,[18]]]]])).to.eql(-20);
      });

      it('should return 0 for empty array', function() {
        expect(arraySum([])).to.eql(0);
      });

      it('should accept an array with a single integer', function() {
        expect(arraySum([4])).to.eql(4);
        expect(arraySum([0])).to.eql(0);
        expect(arraySum([-37])).to.eql(-37);
      });

      it('should not mutate the input array', function() {
        var input = [[1],[2,3],[[4]],5,6];
        var result = arraySum(input);
        expect(input).to.eql([[1],[2,3],[[4]],5,6]);
      });

      it('should use recursion by calling self', function () {
        var originalArraySum = arraySum;
        arraySum = sinon.spy(arraySum);
        arraySum([[1],[2,3],[[4]],5,6]);
        expect(arraySum.callCount).to.be.above(1);
        arraySum = originalArraySum;
      });

    });



    describe('4. Check if Even', function() {

      it('should return a boolean', function() {
        expect(typeof(isEven(5))).to.equal('boolean');
        expect(typeof(isEven(8))).to.equal('boolean');
        expect(typeof(isEven(-4))).to.equal('boolean');
      });

      it("should not use modulo", function() {
        expect(isEven.toString()).to.not.contain('%');
      });

      it('should return true for even numbers', function() {
        expect(isEven(118)).to.equal(true);
        expect(isEven(10)).to.equal(true);
        expect(isEven(0)).to.equal(true);
        expect(isEven(-34)).to.equal(true);
      });

      it('should return false for odd numbers', function() {
        expect(isEven(117)).to.equal(false);
        expect(isEven(9)).to.equal(false);
        expect(isEven(1)).to.equal(false);
        expect(isEven(-33)).to.equal(false);
      });

      it('should work with negative integers', function() {
        expect(isEven(-14)).to.equal(true);
        expect(isEven(-81)).to.equal(false);
      });

      it('should use recursion by calling self', function () {
        var originalIsEven = isEven;
        isEven = sinon.spy(isEven);
        isEven(118);
        expect(isEven.callCount).to.be.above(1);
        isEven = originalIsEven;
      });

    });



    describe('5. Sum Below', function() {

      it('should return a number', function() {
        expect(typeof(sumBelow(10))).to.eql('number');
      });

      it('should return the sum of non-negative integers below given integer', function() {
        expect(sumBelow(0)).to.eql(0);
        expect(sumBelow(1)).to.eql(0);
        expect(sumBelow(2)).to.eql(1);
        expect(sumBelow(7)).to.eql(21);
        expect(sumBelow(21)).to.eql(210);
        expect(sumBelow(92)).to.eql(4186);
      });

      it('should return the sum of an array of negative integers', function() {
        expect(sumBelow(-1)).to.eql(0);
        expect(sumBelow(-2)).to.eql(-1);
        expect(sumBelow(-6)).to.eql(-15);
        expect(sumBelow(-21)).to.eql(-210);
        expect(sumBelow(-92)).to.eql(-4186);
      });

      it('should use recursion by calling self', function () {
        var originalSumBelow = sumBelow;
        sumBelow = sinon.spy(sumBelow);
        sumBelow(10);
        expect(sumBelow.callCount).to.be.above(1);
        sumBelow = originalSumBelow;
      });

    });



    describe('6. Integer Range', function() {

      it('should return an array', function() {
        expect(Array.isArray(range(2, 7))).to.equal(true);
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

      it('should use recursion by calling self', function () {
        var originalRange = range;
        range = sinon.spy(range);
        range(3,8);
        expect(range.callCount).to.be.above(1);
        range = originalRange;
      });

    });



    describe('7. Compute Exponent', function() {

      it('should return a number', function() {
        expect(typeof(exponent(4,3))).to.eql('number');
      });

      it("should not use complex math", function() {
        expect(exponent.toString()).to.not.contain('Math');
      });

      it('should compute exponent of non-negative integers', function() {
        expect(exponent(3,4)).to.equal(81);
        expect(exponent(12,5)).to.equal(248832);
        expect(exponent(7,2)).to.equal(49);
      });

      it('returns undefined when both the base and exponent are 0', function() {
        expect(exponent(0,0)).to.equal(undefined);
      });

      it('returns 1 when exponent is 0', function() {
        expect(exponent(8,0)).to.equal(1);
        expect(exponent(244,0)).to.equal(1);
      });

      it('returns base when exponent is 1', function() {
        expect(exponent(9,1)).to.equal(9);
        expect(exponent(2300,1)).to.equal(2300);
      });

      // it('BONUS: should accept negative integer for base', function() {
      //   expect(exponent(-3,4)).to.equal(-81);
      //   expect(exponent(-12,5)).to.equal(-248832);
      //   expect(exponent(-7,2)).to.equal(-49);
      //   expect(exponent(-7,4)).to.equal(-2401);
      // });

      it('should accept negative integer for exponent', function() {
        expect(exponent(4,-2)).to.equal(0.0625);
        expect(exponent(5,-4)).to.equal(0.0016);
        expect(exponent(2,-5)).to.equal(0.03125);
      });

      it('should use recursion by calling self', function () {
        var originalExponent = exponent;
        exponent = sinon.spy(exponent);
        exponent(3,4);
        expect(exponent.callCount).to.be.above(1);
        exponent = originalExponent;
      });

    });



    describe('8. Power of Two', function() {

      it('should return a boolean', function() {
        expect(typeof(powerOfTwo(10))).to.equal('boolean');
        expect(typeof(powerOfTwo(16))).to.equal('boolean');
      });

      it('should return true for powers of two', function() {
        expect(powerOfTwo(0)).to.equal(false);
        expect(powerOfTwo(1)).to.equal(true);
        expect(powerOfTwo(2)).to.equal(true);
        expect(powerOfTwo(10)).to.equal(false);
        expect(powerOfTwo(128)).to.equal(true);
        expect(powerOfTwo(256)).to.equal(true);
      });

      it('should use recursion by calling self', function () {
        var originalPowerOfTwo = powerOfTwo;
        powerOfTwo = sinon.spy(powerOfTwo);
        powerOfTwo(32);
        expect(powerOfTwo.callCount).to.be.above(1);
        powerOfTwo = originalPowerOfTwo;
      });

    });



    describe('9. Reverse String', function() {

      it('should return a string', function() {
        expect(typeof(reverse('orangutan'))).to.equal('string');
      });

      it('should return a string in reverse', function() {
        var poem = 'Roses are red, violets are blue, all my base are belong to you.';

        expect(reverse('Racecar')).to.equal('racecaR');
        expect(reverse(poem)).to.equal('.uoy ot gnoleb era esab ym lla ,eulb era steloiv ,der era sesoR');
      });

      it('should not mutate the input string', function() {
        var input = 'orangutan';
        var result = reverse(input);
        expect(input).to.eql('orangutan');
      });

      it('should use recursion by calling self', function () {
        var originalReverse = reverse;
        reverse = sinon.spy(reverse);
        reverse('orangutan');
        expect(reverse.callCount).to.be.above(1);
        reverse = originalReverse;
      });

    });



    describe('10. Palindrome', function() {

      it('should return a boolean', function() {
        expect(typeof(palindrome('rotor'))).to.equal('boolean');
        expect(typeof(palindrome('motor'))).to.equal('boolean');
      });

      it('should return true for palindromes', function() {
        expect(palindrome('rotor')).to.eql(true);
        expect(palindrome('racecar')).to.eql(true);
        expect(palindrome('saippuakivikauppias')).to.eql(true);
      });

      it('should return false for non-palindromes', function() {
        expect(palindrome('motor')).to.eql(false);
        expect(palindrome('orangutan')).to.eql(false);
        expect(palindrome('antidisestablishmentarianism')).to.eql(false);
      });

      it('should ignore spaces and capital letters', function() {
        expect(palindrome('Rotor')).to.eql(true);
        expect(palindrome('race caR')).to.eql(true);
        expect(palindrome('sAip puaki v iKaup Pias')).to.eql(true);
      });

      it('should use recursion by calling self', function () {
        var originalPalindrome = palindrome;
        palindrome = sinon.spy(palindrome);
        palindrome('saippuakivikauppias');
        expect(palindrome.callCount).to.be.above(1);
        palindrome = originalPalindrome;
      });

    });



    describe('11. Modulo', function() {

      it('should return a number', function() {
        expect(typeof(modulo(5,2))).to.equal('number');
        expect(typeof(modulo(8,4))).to.equal('number');
      });

      it("should not use complex math", function() {
        expect(modulo.toString()).to.not.contain('*');
        expect(modulo.toString()).to.not.contain('/');
        expect(modulo.toString()).to.not.contain('%');
        expect(modulo.toString()).to.not.contain('Math');
      });

      it('should return the remainder of two integers', function() {
        expect(modulo(2, 1)).to.equal(2 % 1);
        expect(modulo(17, 5)).to.equal(17 % 5);
        expect(modulo(78, 453)).to.equal(78 % 453);
        expect(modulo(-79, 82)).to.equal(-79 % 82);
        expect(modulo(-275, -502)).to.equal(-275 % -502);
        expect(modulo(-275, -274)).to.equal(-275 % -274);
        expect(modulo(-4, 2)).to.equal(-4 % 2);
        expect(modulo(0, 32)).to.equal(0 % 32);
        expect(modulo(0, 0).toString()).to.equal('NaN');
      });

      it('should use recursion by calling self', function () {
        var originalModulo = modulo;
        modulo = sinon.spy(modulo);
        modulo(5,2);
        expect(modulo.callCount).to.be.above(1);
        modulo = originalModulo;
      });

    });



    describe('12. Multiply', function() {

      it('should return a number', function() {
        expect(typeof(multiply(5,2))).to.equal('number');
        expect(typeof(multiply(8,4))).to.equal('number');
      });

      it("should not use complex math", function() {
        expect(multiply.toString()).to.not.contain('*');
        expect(multiply.toString()).to.not.contain('/');
        expect(multiply.toString()).to.not.contain('%');
        expect(multiply.toString()).to.not.contain('Math');
      });

      it('should return the product of two integers', function() {
        expect(multiply(2, 1)).to.equal(2 * 1);
        expect(multiply(17, 5)).to.equal(17 * 5);
        expect(multiply(78, 453)).to.equal(78 * 453);
        expect(multiply(-79, 82)).to.equal(-79 * 82);
        expect(multiply(-275, -502)).to.equal(-275 * -502);
        expect(multiply(0, 32)).to.equal(0 * 32);
        expect(multiply(0, 0)).to.equal(0 * 0);
      });

      it('should use recursion by calling self', function () {
        var originalMultiply = multiply;
        multiply = sinon.spy(multiply);
        multiply(8,4);
        expect(multiply.callCount).to.be.above(1);
        multiply = originalMultiply;
      });

    });



    describe('13. Divide', function() {

      it('should return a number', function() {
        expect(typeof(divide(5,2))).to.equal('number');
        expect(typeof(divide(8,4))).to.equal('number');
      });

      it("should not use complex math", function() {
        expect(divide.toString()).to.not.contain('*');
        expect(divide.toString()).to.not.contain('/');
        expect(divide.toString()).to.not.contain('%');
        expect(divide.toString()).to.not.contain('Math');
      });

      it('should return the quotient of two integers', function() {
        expect(divide(2, 1)).to.equal(~~(2 / 1));
        expect(divide(17, 5)).to.equal(~~(17 / 5));
        expect(divide(78, 453)).to.equal(~~(78 / 453));
        expect(divide(-79, 82)).to.equal(~~(-79 / 82));
        expect(divide(-275, -582)).to.equal(~~(-275 / -582));
        expect(divide(0, 32)).to.equal(~~(0 / 32));
        expect(divide(0, 0).toString()).to.equal('NaN');
      });

      it('should use recursion by calling self', function () {
        var originalDivide = divide;
        divide = sinon.spy(divide);
        divide(17, 5);
        expect(divide.callCount).to.be.above(1);
        divide = originalDivide;
      });

    });



    describe('14. Greatest Common Divisor', function() {

      it('should return a number', function() {
        expect(typeof(gcd(4,36))).to.equal('number');
      });

      it('should return greatest common divisor of two positive integers', function() {
        expect(gcd(4,36)).to.equal(4);
        expect(gcd(24,88)).to.equal(8);
        expect(gcd(339,17)).to.equal(1);
        expect(gcd(126,900)).to.equal(18);
      });

      it('should return null for negative integers', function() {
        expect(gcd(-4, 2)).to.equal(null);
        expect(gcd(-5, 5)).to.equal(null);
        expect(gcd(5, -5)).to.equal(null);
        expect(gcd(7, -36)).to.equal(null);
        expect(gcd(-10, -58)).to.equal(null);
        expect(gcd(-92, -5)).to.equal(null);
        // expect(gcd(0, 0)).to.equal(null);
        // expect(gcd(0, 5)).to.equal(null);
        // expect(gcd(5, 0)).to.equal(null);
        // expect(gcd(-5, 0)).to.equal(null);
        // expect(gcd(0, -5)).to.equal(null);
      });

      it('should use recursion by calling self', function () {
        var originalGcd = gcd;
        gcd = sinon.spy(gcd);
        gcd(17, 5);
        expect(gcd.callCount).to.be.above(1);
        gcd = originalGcd;
      });

    });



    describe('15. Compare Strings', function() {

      it('should return a boolean', function() {
        expect(typeof(compareStr('house', 'houses'))).to.equal('boolean');
        expect(typeof(compareStr('', ''))).to.equal('boolean');
        expect(typeof(compareStr('tomato', 'tomato'))).to.equal('boolean');
      });

      it('should return true for identical strings', function() {
        expect(compareStr('house', 'houses')).to.eql(false);
        expect(compareStr('', '')).to.eql(true);
        expect(compareStr('tomato', 'tomato')).to.eql(true);
        expect(compareStr('', 'pop')).to.eql(false);
        expect(compareStr('foot', '')).to.eql(false);
        expect(compareStr('big dog', 'big dog')).to.eql(true);
      });

      it('should use recursion by calling self', function () {
        var originalCompareStr = compareStr;
        compareStr = sinon.spy(compareStr);
        compareStr('house', 'houses');
        expect(compareStr.callCount).to.be.above(1);
        compareStr = originalCompareStr;
      });

    });



    describe('16. Create array from string', function() {

      it('should return an array', function() {
        expect(Array.isArray(createArray('hello'))).to.equal(true);
      });

      it('should return an array where each index is a letter of the string', function() {
        expect(createArray('hello')).to.eql(['h','e','l','l','o']);
        expect(createArray('this is not a pipe')).to.eql(['t','h','i','s',' ','i','s',' ','n','o','t',' ','a',' ','p','i','p','e']);
        expect(createArray('hologram')).to.eql(['h','o','l','o','g','r','a','m']);
        expect(createArray('i')).to.eql(['i']);
      });

      it('should use recursion by calling self', function () {
        var originalCreateArray = createArray;
        createArray = sinon.spy(createArray);
        createArray('hello');
        expect(createArray.callCount).to.be.above(1);
        createArray = originalCreateArray;
      });

    });



    describe('17. Reverse an array', function() {

      it('should return an array', function() {
        expect(Array.isArray(reverseArr([5,4,3,2,1]))).to.equal(true);
      });

      it('should return array in reversed order', function() {
        expect(reverseArr([1,2,3,4,5])).to.eql([5,4,3,2,1]);
        expect(reverseArr([5,4,3,2,1])).to.eql([1,2,3,4,5]);
        expect(reverseArr([2,4,6,8])).to.eql([8,6,4,2]);
        expect(reverseArr([8,6,4,2])).to.eql([2,4,6,8]);
      });

      it('should use recursion by calling self', function () {
        var originalReverseArr = reverseArr;
        reverseArr = sinon.spy(reverseArr);
        reverseArr([5,4,3,2,1]);
        expect(reverseArr.callCount).to.be.above(1);
        reverseArr = originalReverseArr;
      });

    });



    describe('18. Build an array with a given value and length', function() {

      it('should return an array', function() {
        expect(Array.isArray(buildList(0,5))).to.equal(true);
      });

      it('should return array of given length with given value at each index', function() {
        expect(buildList(0, 5)).to.eql([0,0,0,0,0]);
        expect(buildList('banana', 3)).to.eql(['banana','banana','banana']);
        expect(buildList(NaN, 4)).to.eql([NaN, NaN, NaN, NaN]);
        expect(buildList(undefined, 1)).to.eql([undefined]);
        expect(buildList([], 2)).to.eql([[],[]]);
        expect(buildList({}, 4)).to.eql([{},{},{},{}]);
        expect(buildList(true, 3)).to.eql([true,true,true]);
        expect(buildList(5+5, 3)).to.eql([10,10,10]);
      });

      it('should use recursion by calling self', function () {
        var originalBuildList = buildList;
        buildList = sinon.spy(buildList);
        buildList(2,7);
        expect(buildList.callCount).to.be.above(1);
        buildList = originalBuildList;
      });

    });



    describe('19. Count value in array', function() {

      it('should return a number', function() {
        expect(typeof(countOccurrence([2,7,4,4,1,4], 4))).to.equal('number');
        expect(typeof(countOccurrence([2,'banana',4,4,1,'banana'], 'banana'))).to.equal('number');
      });

      it('should return the number of occurrences of the value', function() {
        expect(countOccurrence([2,7,4,4,1,4], 4)).to.eql(3);
        expect(countOccurrence([2,'banana',4,4,1,'banana'], 'banana')).to.eql(2);
        expect(countOccurrence([undefined,7,undefined,4,1,4], undefined)).to.eql(2);
        expect(countOccurrence(['',7,null,0,'0',false], 0)).to.eql(1);
        expect(countOccurrence(['',7,null,0,'0',false], false)).to.eql(1);
        expect(countOccurrence(['',7,null,0,'0',false], null)).to.eql(1);
        expect(countOccurrence(['',7,null,0,'0',false], '')).to.eql(1);
        // expect(countOccurrence(['',7,null,0,NaN,'0',false], NaN)).to.eql(1);
      });

      it('should use recursion by calling self', function () {
        var originalCountOccurrence = countOccurrence;
        countOccurrence = sinon.spy(countOccurrence);
        countOccurrence([2,7,4,4,1,4], 4);
        expect(countOccurrence.callCount).to.be.above(1);
        countOccurrence = originalCountOccurrence;
      });

    });



    describe('20. Recursive Map', function() {

      var timesTwo = function(n) { return n * 2; };
      var input3 = [1,2,3,4,5];

      it('should return an array', function() {
        expect(Array.isArray(rMap([1,2,3], timesTwo))).to.equal(true);
      });

      checkForNativeMethods(function() {
        rMap([1,2,3,4], timesTwo);
      });

      it('should return new array without mutating the input array', function() {
        var input = [1,2,3,4,5];
        var result = rMap(input, function(num) { /* poop */ });
        expect(input).to.eql([1,2,3,4,5]);
        expect(result).to.not.equal(input);
      });

      it('should apply a function to every value in an array', function() {
        var doubledNumbers = rMap([1,2,3], timesTwo);
        expect(doubledNumbers).to.eql([2,4,6]);
      });

      it('should use recursion by calling self', function () {
        var originalrMap = rMap;
        rMap = sinon.spy(rMap);
        rMap([1,2,3,4], timesTwo);
        expect(rMap.callCount).to.be.above(1);
        rMap = originalrMap;
      });

    });



    describe('21. Count key in object', function() {
      var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};

      it('should return a number', function() {
        expect(typeof(countKeysInObj(input, 'r'))).to.equal('number');
        expect(typeof(countKeysInObj(input, 'e'))).to.equal('number');
        expect(typeof(countKeysInObj(input, 'p'))).to.equal('number');
      });

      it('should return the number of occurrences of the property', function() {
        expect(countKeysInObj(input, 'e')).to.eql(2);
        expect(countKeysInObj(input, 'x')).to.eql(1);
        expect(countKeysInObj(input, 'y')).to.eql(2);
        expect(countKeysInObj(input, 't')).to.eql(1);
        expect(countKeysInObj(input, 'r')).to.eql(1);
        expect(countKeysInObj(input, 'p')).to.eql(1);
      });

      it('should use recursion by calling self', function () {
        var originalCountKeysInObj = countKeysInObj;
        countKeysInObj = sinon.spy(countKeysInObj);
        countKeysInObj(input, 'e');
        expect(countKeysInObj.callCount).to.be.above(1);
        countKeysInObj = originalCountKeysInObj;
      });

    });



    describe('22. Count value in object', function() {
      var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};

      it('should return a number', function() {
        expect(typeof(countValuesInObj(input, 'r'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'e'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        expect(countValuesInObj(input, 'e')).to.eql(1);
        expect(countValuesInObj(input, 'x')).to.eql(0);
        expect(countValuesInObj(input, 'y')).to.eql(1);
        expect(countValuesInObj(input, 't')).to.eql(0);
        expect(countValuesInObj(input, 'r')).to.eql(2);
        expect(countValuesInObj(input, 'p')).to.eql(0);
      });

      it('should use recursion by calling self', function () {
        var originalCountValuesInObj = countValuesInObj;
        countValuesInObj = sinon.spy(countValuesInObj);
        countValuesInObj(input, 'r');
        expect(countValuesInObj.callCount).to.be.above(1);
        countValuesInObj = originalCountValuesInObj;
      });

    });



    describe('23. Replace keys in object', function() {

      var tallyKeys = function(obj) {
        var count = 0;
        for (var k in obj) {
          if (typeof obj[k] === 'object') {
            count += tallyKeys(obj[k]);
          }
          count++;
        }
        return count;
      };

      it('should return an object', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(replaceKeysInObj(input, 'r', 'a'))).to.equal('object');
        expect(typeof(replaceKeysInObj(input, 'e', 0))).to.equal('object');
      });

      it('should return object containing renamed keys', function() {
        var input  = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}}, 'y':'e'};
        var output = replaceKeysInObj(input, 'e', 'f');

        expect(output.e).to.equal(undefined);
        expect(output.f.x).to.equal('y');
        expect(output.t.r.e).to.equal(undefined);
        expect(output.t.r.f).to.equal('r');
        expect(output.t.p.y).to.equal('r');
        expect(output.y).to.equal('e');

        expect(output.hasOwnProperty('e')).to.equal(false);
        expect(output.hasOwnProperty('f')).to.equal(true);
        expect(output.hasOwnProperty('t')).to.equal(true);
        expect(output.hasOwnProperty('y')).to.equal(true);

        expect(output.t.hasOwnProperty('r')).to.equal(true);
        expect(output.t.hasOwnProperty('p')).to.equal(true);

        expect(output.t.r.hasOwnProperty('e')).to.equal(false);
        expect(output.t.r.hasOwnProperty('f')).to.equal(true);
        expect(output.t.p.hasOwnProperty('y')).to.equal(true);
      });

      it('should return object with same number of keys', function () {
        var input  = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}}, 'y':'e'};
        var output1 = replaceKeysInObj(input, 'e', 'f');
        var output2 = replaceKeysInObj(output1, 'e', 'f');
        expect(tallyKeys(input)).to.equal(8);
        expect(tallyKeys(output1)).to.equal(8);
        expect(tallyKeys(output2)).to.equal(8);
      });

      it('should use recursion by calling self', function () {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        var originalReplaceKeysInObj = replaceKeysInObj;
        replaceKeysInObj = sinon.spy(replaceKeysInObj);
        replaceKeysInObj(input, 'r', 'a');
        expect(replaceKeysInObj.callCount).to.be.above(1);
        replaceKeysInObj = originalReplaceKeysInObj;
      });

    });


    describe('24. First n Fibonacci', function() {

      it('should return an array', function() {
        expect(Array.isArray(fibonacci(5))).to.equal(true);
      });

      it('should return first n Fibonacci numbers where n starts at index 1', function() {
        expect(fibonacci(1)).to.eql([0, 1]);
        expect(fibonacci(2)).to.eql([0, 1, 1]);
        expect(fibonacci(3)).to.eql([0, 1, 1, 2]);
        expect(fibonacci(4)).to.eql([0, 1, 1, 2, 3]);
        expect(fibonacci(5)).to.eql([0, 1, 1, 2, 3, 5]);
        expect(fibonacci(12)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);
      });

      it('should return null for zero and negative integers', function() {
        expect(fibonacci(0)).to.equal(null);
        expect(fibonacci(-7)).to.equal(null);
      });

      it('should use recursion by calling self', function () {
        var originalFibonacci = fibonacci;
        fibonacci = sinon.spy(fibonacci);
        fibonacci(5);
        expect(fibonacci.callCount).to.be.above(1);
        fibonacci = originalFibonacci;
      });

    });



    describe('25. Return nth Fibonacci', function() {

      it('should return a number', function() {
        expect(typeof(nthFibo(5))).to.equal('number');
      });

      it('should return the nth Fibonacci number', function() {
        expect(nthFibo(0)).to.eql(0);
        expect(nthFibo(1)).to.eql(1);
        expect(nthFibo(2)).to.eql(1);
        expect(nthFibo(3)).to.eql(2);
        expect(nthFibo(4)).to.eql(3);
        expect(nthFibo(5)).to.eql(5);
        expect(nthFibo(12)).to.eql(144);
      });

      it('should return null for negative integers', function() {
        expect(nthFibo(-5)).to.equal(null);
        expect(nthFibo(-7)).to.equal(null);
      });

      it('should use recursion by calling self', function () {
        var originalNthFibo = nthFibo;
        nthFibo = sinon.spy(nthFibo);
        nthFibo(5);
        expect(nthFibo.callCount).to.be.above(1);
        nthFibo = originalNthFibo;
      });

    });



    describe('26. Capitalize words in array', function() {

      it('should return an array', function() {
        expect(Array.isArray(capitalizeWords(['i','am','learning','recursion']))).to.equal(true);
      });

      it('should capitalize all words in array', function() {
        expect(capitalizeWords(['i','am','learning','recursion'])).to.eql(['I', 'AM', 'LEARNING', 'RECURSION']);
        expect(capitalizeWords(["ceci","n'est","pas","une","pipe"])).to.eql(["CECI", "N'EST", "PAS", "UNE", "PIPE"]);
      });

      it('should use recursion by calling self', function () {
        var originalCapitalizeWords = capitalizeWords;
        capitalizeWords = sinon.spy(capitalizeWords);
        capitalizeWords(["ceci","n'est","pas","une","pipe"]);
        expect(capitalizeWords.callCount).to.be.above(1);
        capitalizeWords = originalCapitalizeWords;
      });

    });



    describe('27. Capitalize first letter of words in array', function() {

      it('should return an array', function() {
        expect(Array.isArray(capitalizeFirst(['i','am','learning','recursion']))).to.equal(true);
      });

      it('should capitalize first letter of each word in array', function() {
        expect(capitalizeFirst(['i','am','learning','recursion'])).to.eql(['I', 'Am', 'Learning', 'Recursion']);
        expect(capitalizeFirst(["ceci","n'est","pas","une","pipe"])).to.eql(["Ceci", "N'est", "Pas", "Une", "Pipe"]);
      });

      it('should use recursion by calling self', function () {
        var originalCapitalizeFirst = capitalizeFirst;
        capitalizeFirst = sinon.spy(capitalizeFirst);
        capitalizeFirst(["ceci","n'est","pas","une","pipe"]);
        expect(capitalizeFirst.callCount).to.be.above(1);
        capitalizeFirst = originalCapitalizeFirst;
      });

    });



    describe('28. Sum even numbers in nested objects', function() {
      var obj = {
        a: 2,
        b: {b: 2, bb: {b: 3, bb: {b: 2}}},
        c: {c: {c: 2}, cc: 'ball', ccc: 5},
        d: 1,
        e: {e: {e: 2}, ee: 'car'}
      };

      it('should return a number', function() {
        expect(typeof(nestedEvenSum(obj))).to.equal('number');
      });

      it('should sum even numbers', function() {
        expect(nestedEvenSum(obj)).to.eql(10);
      });

      it('should use recursion by calling self', function () {
        var originalNestedEvenSum = nestedEvenSum;
        nestedEvenSum = sinon.spy(nestedEvenSum);
        nestedEvenSum(obj);
        expect(nestedEvenSum.callCount).to.be.above(1);
        nestedEvenSum = originalNestedEvenSum;
      });

    });



    describe('29. Flatten nested arrays', function() {

      it('should return an array', function() {
        expect(Array.isArray(flatten([1,[2],[3,[[4]]],5]))).to.equal(true);
      });

      it('should return flattened array', function() {
        expect(flatten([[1],[2,3],[[4]],5,6])).to.eql([1,2,3,4,5,6]);
        expect(flatten([[12,[[34],[56]],78]])).to.eql([12,34,56,78]);
        expect(flatten([3,[0,[34,[7,[18]]]]])).to.eql([3,0,34,7,18]);
        expect(flatten([[1],[2,[],3],[],[[4]],5,6])).to.eql([1,2,3,4,5,6]);
      });

      it('should use recursion by calling self', function () {
        var originalFlatten = flatten;
        flatten = sinon.spy(flatten);
        flatten([3,[0,[34,[7,[18]]]]]);
        expect(flatten.callCount).to.be.above(1);
        flatten = originalFlatten;
      });

    });



    describe('30. Tally letters in string', function() {

      it('should return an object', function() {
        expect(typeof(letterTally('orangutan'))).to.equal('object');
      });

      it('should return object containing tallies of unique letters', function() {
        var output = letterTally('potato');

        expect(output.p).to.equal(1);
        expect(output.o).to.equal(2);
        expect(output.t).to.equal(2);
        expect(output.a).to.equal(1);
      });

      it('should return object containing the number of keys corresponding to unique letters', function () {
        var output = letterTally('mississippi');
        var countKeys = Object.keys(output).length;
        expect(countKeys).to.equal(4);
      });

      it('should use recursion by calling self', function () {
        var originalLetterTally = letterTally;
        letterTally = sinon.spy(letterTally);
        letterTally('invasion');
        expect(letterTally.callCount).to.be.above(1);
        letterTally = originalLetterTally;
      });

    });



    describe('31. Eliminate consecutive duplicates', function() {
      var input1 = [1,2,2,3,4,4,5,5,5];
      var input2 = [1,2,2,3,4,4,2,5,5,5,4,4];

      it('should return an array', function() {
        expect(Array.isArray(compress(input1))).to.equal(true);
      });

      it('should remove consecutive duplicates', function() {
        expect(compress(input1)).to.eql([1,2,3,4,5]);
        expect(compress(input2)).to.eql([1,2,3,4,2,5,4]);
      });

      it('should use recursion by calling self', function () {
        var originalCompress = compress;
        compress = sinon.spy(compress);
        compress(input2);
        expect(compress.callCount).to.be.above(1);
        compress = originalCompress;
      });

    });



    describe('32. Augment each element in nested arrays', function() {

      it('should return an array', function() {
        expect(Array.isArray(augmentElements([[],[3],[7]], 5))).to.equal(true);
      });

      it('should augment each element with given value', function() {
        expect(augmentElements([[],[3],[7]], 5)).to.eql([[5],[3,5],[7,5]]);
        expect(augmentElements([[],[3],[7]], null)).to.eql([[null],[3,null],[7,null]]);
        expect(augmentElements([[],[3],[7]], '')).to.eql([[''],[3,''],[7,'']]);
      });

      it('should use recursion by calling self', function () {
        var originalAugElements = augmentElements;
        augmentElements = sinon.spy(augmentElements);
        augmentElements([[],[3],[7]], 5);
        expect(augmentElements.callCount).to.be.above(1);
        augmentElements = originalAugElements;
      });

    });



    describe('33. Minimize zeroes', function() {
      var input1 = [2,0,0,0,1,4];
      var input2 = [2,0,0,0,1,0,0,4];

      it('should return an array', function() {
        expect(Array.isArray(minimizeZeroes(input1))).to.equal(true);
      });

      it('should remove excess zeroes', function() {
        expect(minimizeZeroes(input1)).to.eql([2,0,1,4]);
        expect(minimizeZeroes(input2)).to.eql([2,0,1,0,4]);
      });

      it('should use recursion by calling self', function () {
        var originalMinZeroes = minimizeZeroes;
        minimizeZeroes = sinon.spy(minimizeZeroes);
        minimizeZeroes(input1);
        expect(minimizeZeroes.callCount).to.be.above(1);
        minimizeZeroes = originalMinZeroes;
      });

    });



    describe('34. Alternate sign', function() {
      var input1 = [2,7,8,3,1,4];
      var input2 = [-2,-7,8,3,-1,4];

      it('should return an array', function() {
        expect(Array.isArray(alternateSign(input1))).to.equal(true);
      });

      it('should remove excess zeroes', function() {
        expect(alternateSign(input1)).to.eql([2,-7,8,-3,1,-4]);
        expect(alternateSign(input2)).to.eql([2,-7,8,-3,1,-4]);
      });

      it('should use recursion by calling self', function () {
        var originalAltSign = alternateSign;
        alternateSign = sinon.spy(alternateSign);
        alternateSign(input1);
        expect(alternateSign.callCount).to.be.above(1);
        alternateSign = originalAltSign;
      });

    });



    describe('35. Convert numbers to text', function() {

      it('should return a string', function() {
        expect(typeof(numToText("I have 5 dogs and 6 ponies"))).to.equal('string');
      });

      it('should convert single digits to their word equivalent', function() {
        expect(numToText("I have 5 dogs and 6 ponies")).to.eql("I have five dogs and six ponies");
        expect(numToText("It takes 3 men to screw in 1 light bulb")).to.eql("It takes three men to screw in one light bulb");
      });

      it('should use recursion by calling self', function () {
        var originalNumToText = numToText;
        numToText = sinon.spy(numToText);
        numToText("I have 5 dogs and 6 ponies");
        expect(numToText.callCount).to.be.above(1);
        numToText = originalNumToText;
      });

    });

  });

  function checkForNativeMethods(runFunction) {
    it('should not use the native version of map', function() {
      // These spies are set up in testSupport.js
      runFunction();
      expect(Array.prototype.map.called).to.equal(false);
    });
  }

}());
