(function() {
  'use strict';

  describe('Exercises in Recursion in Recursion in Recursion in...', function() {

    describe('1. Factorial', function() {

      it('should be a function', function() {
        expect(factorial).to.be.an.instanceOf(Function);
      });

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

      it('should use recursion', function () {
        var originalFactorial = factorial;
        factorial = sinon.spy(factorial);
        factorial(4);
        var firstCallCount = factorial.callCount;
        expect(firstCallCount).to.equal(4);
        factorial(6);
        var secondCallCount = factorial.callCount - firstCallCount;
        expect(secondCallCount).to.equal(6);
      });

    });



    describe('2. Sum of Integers', function() {

      it('should be a function', function() {
        expect(sum).to.be.an.instanceOf(Function);
      });

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

      it('should return undefined for an empty array', function() {
        expect(sum([])).to.eql(undefined);
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
    });



    describe('3. Sum Integers in Array', function() {

      it('should be a function', function() {
        expect(arraySum).to.be.an.instanceOf(Function);
      });

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

      it('should return undefined for an empty array', function() {
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
    });



    describe('4. Check if Even', function() {

      it('should be a function', function() {
        expect(isEven).to.be.an.instanceOf(Function);
      });

      it('should return a boolean', function() {
        expect(typeof(isEven(5))).to.equal('boolean');
        expect(typeof(isEven(8))).to.equal('boolean');
        expect(typeof(isEven(-4))).to.equal('boolean');
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
    });



    describe('5. Integer Range', function() {

      it('should be a function', function() {
        expect(range).to.be.an.instanceOf(Function);
      });

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
    });



    describe('6. Compute Exponent', function() {

      it('should be a function', function() {
        expect(exponent).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        expect(typeof(exponent(4,3))).to.eql('number');
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
    });



    describe('7. Reverse String', function() {

      it('should be a function', function() {
        expect(reverse).to.be.an.instanceOf(Function);
      });

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
    });



    describe('8. Palindrome', function() {

      it('should be a function', function() {
        expect(palindrome).to.be.an.instanceOf(Function);
      });

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
    });



    describe('9. Modulo', function() {

      it('should be a function', function() {
        expect(modulo).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        expect(typeof(modulo(5,2))).to.equal('number');
        expect(typeof(modulo(8,4))).to.equal('number');
      });

      it('should return the remainder of two integers', function() {
        expect(modulo(5,2)).to.eql(1);
        expect(modulo(17,5)).to.eql(2);
        expect(modulo(22,6)).to.eql(4);
        expect(modulo(20,5)).to.eql(0);
        expect(modulo(5,5)).to.eql(0);
      });
    });



    describe('10. Multiply', function() {

      it('should be a function', function() {
        expect(modulo).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        expect(typeof(modulo(5,2))).to.equal('number');
        expect(typeof(modulo(8,4))).to.equal('number');
      });

      it('should return the remainder of two integers', function() {
        expect(modulo(5,2)).to.eql(1);
        expect(modulo(17,5)).to.eql(2);
        expect(modulo(22,6)).to.eql(4);
        expect(modulo(20,5)).to.eql(0);
        expect(modulo(5,5)).to.eql(0);
      });
    });



    describe('11. Divide', function() {

      it('should be a function', function() {
        expect(modulo).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        expect(typeof(modulo(5,2))).to.equal('number');
        expect(typeof(modulo(8,4))).to.equal('number');
      });

      it('should return the remainder of two integers', function() {
        expect(modulo(5,2)).to.eql(1);
        expect(modulo(17,5)).to.eql(2);
        expect(modulo(22,6)).to.eql(4);
        expect(modulo(20,5)).to.eql(0);
        expect(modulo(5,5)).to.eql(0);
      });
    });



    describe('12. Greatest Common Divisor', function() {

      it('should be a function', function() {
        expect(gcd).to.be.an.instanceOf(Function);
      });

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
    });



    describe('13. Compare Strings', function() {

      it('should be a function', function() {
        expect(cmpStr).to.be.an.instanceOf(Function);
      });

      it('should return a boolean', function() {
        expect(typeof(cmpStr('house', 'houses'))).to.equal('boolean');
        expect(typeof(cmpStr('', ''))).to.equal('boolean');
        expect(typeof(cmpStr('tomato', 'tomato'))).to.equal('boolean');
      });

      it('should return true for identical strings', function() {
        expect(cmpStr('house', 'houses')).to.eql(false);
        expect(cmpStr('', '')).to.eql(true);
        expect(cmpStr('tomato', 'tomato')).to.eql(true);
        expect(cmpStr('', 'pop')).to.eql(false);
        expect(cmpStr('foot', '')).to.eql(false);
        expect(cmpStr('big dog', 'big dog')).to.eql(true);
      });
    });



    describe('14. Create array from string', function() {

      it('should be a function', function() {
        expect(createArray).to.be.an.instanceOf(Function);
      });

      it('should return an array', function() {
        expect(Array.isArray(createArray('hello'))).to.equal(true);
      });

      it('should return an array where each index is a letter of the string', function() {
        expect(createArray('hello')).to.eql(['h','e','l','l','o']);
        expect(createArray('this is not a pipe')).to.eql(['t','h','i','s',' ','i','s',' ','n','o','t',' ','a',' ','p','i','p','e']);
        expect(createArray('hologram')).to.eql(['h','o','l','o','g','r','a','m']);
        expect(createArray('i')).to.eql(['i']);
      });
    });



    describe('15. Reverse an array', function() {

      it('should be a function', function() {
        expect(reverseArr).to.be.an.instanceOf(Function);
      });

      it('should return an array', function() {
        expect(Array.isArray(reverseArr([5,4,3,2,1]))).to.equal(true);
      });

      it('should return array in reversed order', function() {
        expect(reverseArr([1,2,3,4,5])).to.eql([5,4,3,2,1]);
        expect(reverseArr([5,4,3,2,1])).to.eql([1,2,3,4,5]);
        expect(reverseArr([2,4,6,8])).to.eql([8,6,4,2]);
        expect(reverseArr([8,6,4,2])).to.eql([2,4,6,8]);
      });
    });



    describe('16. Build an array with a given value and length', function() {

      it('should be a function', function() {
        expect(countKeysInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countKeysInObj(input, 'r'))).to.equal('number');
        expect(typeof(countKeysInObj(input, 'e'))).to.equal('number');
        expect(typeof(countKeysInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countKeysInObj(input, 'e')).to.eql(2);
        expect(countKeysInObj(input, 'x')).to.eql(1);
        expect(countKeysInObj(input, 'y')).to.eql(2);
        expect(countKeysInObj(input, 't')).to.eql(1);
        expect(countKeysInObj(input, 'r')).to.eql(1);
        expect(countKeysInObj(input, 'p')).to.eql(1);
      });
    });



    describe('17. Count value in array', function() {

      it('should be a function', function() {
        expect(countKeysInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countKeysInObj(input, 'r'))).to.equal('number');
        expect(typeof(countKeysInObj(input, 'e'))).to.equal('number');
        expect(typeof(countKeysInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countKeysInObj(input, 'e')).to.eql(2);
        expect(countKeysInObj(input, 'x')).to.eql(1);
        expect(countKeysInObj(input, 'y')).to.eql(2);
        expect(countKeysInObj(input, 't')).to.eql(1);
        expect(countKeysInObj(input, 'r')).to.eql(1);
        expect(countKeysInObj(input, 'p')).to.eql(1);
      });
    });



    describe('18. Count key in object', function() {

      it('should be a function', function() {
        expect(countKeysInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countKeysInObj(input, 'r'))).to.equal('number');
        expect(typeof(countKeysInObj(input, 'e'))).to.equal('number');
        expect(typeof(countKeysInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countKeysInObj(input, 'e')).to.eql(2);
        expect(countKeysInObj(input, 'x')).to.eql(1);
        expect(countKeysInObj(input, 'y')).to.eql(2);
        expect(countKeysInObj(input, 't')).to.eql(1);
        expect(countKeysInObj(input, 'r')).to.eql(1);
        expect(countKeysInObj(input, 'p')).to.eql(1);
      });
    });



    describe('19. Count value in object', function() {

      it('should be a function', function() {
        expect(countValuesInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countValuesInObj(input, 'r'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'e'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countValuesInObj(input, 'e')).to.eql(1);
        expect(countValuesInObj(input, 'x')).to.eql(0);
        expect(countValuesInObj(input, 'y')).to.eql(1);
        expect(countValuesInObj(input, 't')).to.eql(0);
        expect(countValuesInObj(input, 'r')).to.eql(2);
        expect(countValuesInObj(input, 'p')).to.eql(0);
      });
    });



    describe('20. Replace keys in object', function() {

      it('should be a function', function() {
        expect(countValuesInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countValuesInObj(input, 'r'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'e'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countValuesInObj(input, 'e')).to.eql(1);
        expect(countValuesInObj(input, 'x')).to.eql(0);
        expect(countValuesInObj(input, 'y')).to.eql(1);
        expect(countValuesInObj(input, 't')).to.eql(0);
        expect(countValuesInObj(input, 'r')).to.eql(2);
        expect(countValuesInObj(input, 'p')).to.eql(0);
      });
    });


    describe('21. First n Fibonacci', function() {

      it('should be a function', function() {
        expect(fibonacci).to.be.an.instanceOf(Function);
      });

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
    });



    describe('22. Return nth Fibonacci', function() {

      it('should be a function', function() {
        expect(nthFibo).to.be.an.instanceOf(Function);
      });

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
    });



    describe('23. Capitalize words in array', function() {

      it('should be a function', function() {
        expect(countValuesInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countValuesInObj(input, 'r'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'e'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countValuesInObj(input, 'e')).to.eql(1);
        expect(countValuesInObj(input, 'x')).to.eql(0);
        expect(countValuesInObj(input, 'y')).to.eql(1);
        expect(countValuesInObj(input, 't')).to.eql(0);
        expect(countValuesInObj(input, 'r')).to.eql(2);
        expect(countValuesInObj(input, 'p')).to.eql(0);
      });
    });



    describe('24. Capitalize first letter of words in array', function() {

      it('should be a function', function() {
        expect(countValuesInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countValuesInObj(input, 'r'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'e'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countValuesInObj(input, 'e')).to.eql(1);
        expect(countValuesInObj(input, 'x')).to.eql(0);
        expect(countValuesInObj(input, 'y')).to.eql(1);
        expect(countValuesInObj(input, 't')).to.eql(0);
        expect(countValuesInObj(input, 'r')).to.eql(2);
        expect(countValuesInObj(input, 'p')).to.eql(0);
      });
    });



    describe('25. Sum even numbers in nested objects', function() {

      it('should be a function', function() {
        expect(countValuesInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countValuesInObj(input, 'r'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'e'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countValuesInObj(input, 'e')).to.eql(1);
        expect(countValuesInObj(input, 'x')).to.eql(0);
        expect(countValuesInObj(input, 'y')).to.eql(1);
        expect(countValuesInObj(input, 't')).to.eql(0);
        expect(countValuesInObj(input, 'r')).to.eql(2);
        expect(countValuesInObj(input, 'p')).to.eql(0);
      });
    });



    describe('26. Flatten nested arrays', function() {

      it('should be a function', function() {
        expect(countValuesInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countValuesInObj(input, 'r'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'e'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countValuesInObj(input, 'e')).to.eql(1);
        expect(countValuesInObj(input, 'x')).to.eql(0);
        expect(countValuesInObj(input, 'y')).to.eql(1);
        expect(countValuesInObj(input, 't')).to.eql(0);
        expect(countValuesInObj(input, 'r')).to.eql(2);
        expect(countValuesInObj(input, 'p')).to.eql(0);
      });
    });



    describe('27. Eliminate consecutive duplicates', function() {

      it('should be a function', function() {
        expect(countValuesInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countValuesInObj(input, 'r'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'e'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countValuesInObj(input, 'e')).to.eql(1);
        expect(countValuesInObj(input, 'x')).to.eql(0);
        expect(countValuesInObj(input, 'y')).to.eql(1);
        expect(countValuesInObj(input, 't')).to.eql(0);
        expect(countValuesInObj(input, 'r')).to.eql(2);
        expect(countValuesInObj(input, 'p')).to.eql(0);
      });
    });



    describe('28. Augment each value in nested arrays', function() {

      it('should be a function', function() {
        expect(countValuesInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countValuesInObj(input, 'r'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'e'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countValuesInObj(input, 'e')).to.eql(1);
        expect(countValuesInObj(input, 'x')).to.eql(0);
        expect(countValuesInObj(input, 'y')).to.eql(1);
        expect(countValuesInObj(input, 't')).to.eql(0);
        expect(countValuesInObj(input, 'r')).to.eql(2);
        expect(countValuesInObj(input, 'p')).to.eql(0);
      });
    });



    describe('29. Minimize zeroes', function() {

      it('should be a function', function() {
        expect(countValuesInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countValuesInObj(input, 'r'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'e'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countValuesInObj(input, 'e')).to.eql(1);
        expect(countValuesInObj(input, 'x')).to.eql(0);
        expect(countValuesInObj(input, 'y')).to.eql(1);
        expect(countValuesInObj(input, 't')).to.eql(0);
        expect(countValuesInObj(input, 'r')).to.eql(2);
        expect(countValuesInObj(input, 'p')).to.eql(0);
      });
    });



    describe('30. Alternate sign', function() {

      it('should be a function', function() {
        expect(countValuesInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countValuesInObj(input, 'r'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'e'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countValuesInObj(input, 'e')).to.eql(1);
        expect(countValuesInObj(input, 'x')).to.eql(0);
        expect(countValuesInObj(input, 'y')).to.eql(1);
        expect(countValuesInObj(input, 't')).to.eql(0);
        expect(countValuesInObj(input, 'r')).to.eql(2);
        expect(countValuesInObj(input, 'p')).to.eql(0);
      });
    });



    describe('31. Convert numbers to text', function() {

      it('should be a function', function() {
        expect(countValuesInObj).to.be.an.instanceOf(Function);
      });

      it('should return a number', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(typeof(countValuesInObj(input, 'r'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'e'))).to.equal('number');
        expect(typeof(countValuesInObj(input, 'p'))).to.equal('number');
      });

      it('should return the count of the occurrences of the property', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(countValuesInObj(input, 'e')).to.eql(1);
        expect(countValuesInObj(input, 'x')).to.eql(0);
        expect(countValuesInObj(input, 'y')).to.eql(1);
        expect(countValuesInObj(input, 't')).to.eql(0);
        expect(countValuesInObj(input, 'r')).to.eql(2);
        expect(countValuesInObj(input, 'p')).to.eql(0);
      });
    });

  });
}());
