// === Module 14: ? ===

// Module 14
let tmp2;
class Integer {
  constructor(items, arg1, arg2, arg3) {
    let first;
    let length2;
    let obj2;
    let timesResult;
    let tmp14;
    let tmp25;
    let tmp7;
    if (undefined === items) {
      first = Integer[0];
    } else {
      if (undefined !== arg1) {
        let str = arg2;
        if (typeof parseBase === "function") {
          if (!str) {
            str = c1;
          }
          const _String = String;
          const str2 = String(items);
          let formatted1 = str;
          let formatted = str2;
          if (!arg3) {
            formatted = str2.toLowerCase();
            formatted1 = str.toLowerCase();
          }
          const _Math = Math;
          length = formatted.length;
          const absolute = Math.abs(arg1);
          const obj = {};
          let num4 = 0;
          if (0 < formatted1.length) {
            do {
              obj[formatted1[num4]] = num4;
              num4 = num4 + 1;
              length2 = formatted1.length;
            } while (num4 < length2);
          }
          let num5 = 0;
          if (0 < length) {
            while (true) {
              tmp7 = formatted[num5];
              if ("-" !== tmp7) {
                if (tmp7 in obj) {
                  if (obj[tmp7] >= absolute) {
                    if ("1" !== tmp7) {
                      break;
                    } else if (1 !== absolute) {
                      break;
                    }
                  }
                }
              }
              num5 = num5 + 1;
            }
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error(tmp7 + " is not a valid digit in base " + arg1 + ".");
            throw error;
          }
          let num6 = 0;
          const tmp12 = parseValue(arg1);
          if ("-" === formatted[0]) {
            num6 = 1;
          }
          items = [];
          if (num6 < formatted.length) {
            while (true) {
              let sum;
              tmp14 = formatted[num6];
              if (tmp14 in obj) {
                let arr = items.push(parseValue(obj[tmp14]));
                sum = num6;
              } else {
                let tmp16 = num6;
                if ("<" !== tmp14) {
                  break;
                } else {
                  sum = tmp16 + 1;
                  while (">" !== formatted[sum]) {
                    tmp16 = sum;
                    if (sum >= formatted.length) {
                      break;
                    }
                  }
                  let arr2 = items.push(parseValue(formatted.slice(num6 + 1, sum)));
                }
              }
              num6 = sum + 1;
            }
            const _Error2 = Error;
            const self3 = this;
            const self4 = this;
            const error1 = new Error(tmp14 + " is not a valid character");
            throw error1;
          }
          [tmp25, obj2] = Integer;
          let diff = items.length - 1;
          let addResult = tmp25;
          let obj4 = tmp25;
          if (0 <= diff) {
            do {
              let obj5 = items[diff];
              addResult = addResult.add(obj5.times(timesResult));
              timesResult = timesResult.times(tmp12);
              diff = diff - 1;
              obj4 = addResult;
            } while (0 <= diff);
          }
          let negateResult = obj4;
          if ("-" === formatted[0]) {
            negateResult = obj4.negate();
          }
          first = negateResult;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      first = parseValue(items);
    }
    return first;
  }
}
class BigInteger {
  constructor(arg0, arg1) {

  }
  add(arg0) {
    const self = this;
    const iter = parseValue(arg0);
    if (this.sign !== iter.sign) {
      return self.subtract(iter.negate());
    } else {
      let obj;
      const value2 = self.value;
      const value = iter.value;
      if (iter.isSmall) {
        const _Math = Math;
        const absolute = Math.abs(value);
        const _Array = Array;
        const self2 = this;
        const self3 = this;
        const array = new Array(length);
        let num5 = 0;
        let sum1 = absolute;
        let num6 = 0;
        let rounded1 = absolute;
        if (0 < value2.length) {
          do {
            let sum = value2[num5] - 10000000 + sum1;
            let _Math2 = Math;
            let rounded = Math.floor(sum / 10000000);
            array[num5] = sum - rounded * 10000000;
            sum1 = rounded + 1;
            num5 = num5 + 1;
            rounded1 = sum1;
            num6 = num5;
          } while (num5 < value2.length);
        }
        if (rounded1 > 0) {
          do {
            array[num6] = rounded1 % 10000000;
            let _Math3 = Math;
            let sum2 = num6 + 1;
            rounded1 = Math.floor(rounded1 / 10000000);
            num6 = sum2;
          } while (rounded1 > 0);
        }
        const sign2 = self.sign;
        Object.create(BigInteger.prototype);
        obj = { value: array, sign: sign2, isSmall: false };
        const obj5 = { value: array, sign: sign2, isSmall: false };
      } else {
        const sign = self.sign;
        const tmp2 = addAny(value2, value);
        Object.create(BigInteger.prototype);
        obj = { value: tmp2, sign, isSmall: false };
      }
      return obj;
    }
  }
  subtract(arg0) {
    const self = this;
    const iter = parseValue(arg0);
    if (this.sign !== iter.sign) {
      return self.add(iter.negate());
    } else {
      let obj6;
      const value = self.value;
      const value2 = iter.value;
      if (iter.isSmall) {
        const _Math = Math;
        obj6 = subtractSmall(value, Math.abs(value2), self.sign);
      } else {
        let num3;
        let tmp4;
        let tmp5;
        const sign = self.sign;
        if (value.length !== value2.length) {
          let num5 = -1;
          if (value.length > value2.length) {
            num5 = 1;
          }
          num3 = num5;
        } else {
          let diff = value.length - 1;
          num3 = 0;
          if (0 <= diff) {
            while (value[diff] === value2[diff]) {
              diff = diff - 1;
              num3 = 0;
            }
            let num4 = -1;
            if (value[diff] > value2[diff]) {
              num4 = 1;
            }
            num3 = num4;
          }
        }
        if (0 <= num3) {
          tmp4 = subtract(value, value2);
          tmp5 = sign;
        } else {
          tmp4 = subtract(value2, value);
          tmp5 = !sign;
        }
        const tmp8 = arrayToSmall(tmp4);
        if (typeof tmp8 === "number") {
          let tmp9 = tmp8;
          if (tmp5) {
            tmp9 = -tmp8;
          }
          Object.create(SmallInteger.prototype);
          obj6 = { value: tmp9, sign: tmp9 < 0, isSmall: true };
          const obj = { value: tmp9, sign: tmp9 < 0, isSmall: true };
        } else {
          Object.create(BigInteger.prototype);
          obj6 = { value: tmp8, sign: tmp5, isSmall: false };
        }
      }
      return obj6;
    }
  }
  negate() {
    const value = this.value;
    const sign = !this.sign;
    Object.create(BigInteger.prototype);
    return { value, sign, isSmall: false };
  }
  abs() {
    const value = this.value;
    Object.create(BigInteger.prototype);
    return { value, sign: false, isSmall: false };
  }
  multiply(arg0) {
    let obj;
    const self = this;
    const iter = parseValue(arg0);
    const value2 = this.value;
    const value = iter.value;
    let arr2 = value;
    if (iter.isSmall) {
      if (0 === value) {
        return Integer[0];
      } else if (1 === value) {
        return self;
      } else if (-1 === value) {
        return self.negate();
      } else {
        const _Math6 = Math;
        const absolute = Math.abs(value);
        if (absolute < 10000000) {
          const _Array = Array;
          const self2 = this;
          const self3 = this;
          const array = new Array(length3);
          let num2 = 0;
          let num3 = 0;
          let num4 = 0;
          let num5 = 0;
          if (0 < value2.length) {
            do {
              let sum = value2[num3] * absolute + num2;
              let _Math4 = Math;
              let rounded = Math.floor(sum / 10000000);
              array[num3] = sum - rounded * 10000000;
              num3 = num3 + 1;
              num2 = rounded;
              num4 = rounded;
              num5 = num3;
            } while (num3 < value2.length);
          }
          if (num4 > 0) {
            do {
              array[num5] = num4 % 10000000;
              let _Math5 = Math;
              let sum1 = num5 + 1;
              num4 = Math.floor(num4 / 10000000);
              num5 = sum1;
            } while (num4 > 0);
          }
          Object.create(BigInteger.prototype);
          return { value: array, sign: this.sign !== iter.sign, isSmall: false };
        } else {
          let items2;
          if (absolute < 10000000) {
            items = [absolute];
            items2 = items;
          } else if (absolute < 100000000000000) {
            items1 = [absolute % 10000000, ];
            const _Math3 = Math;
            items1[1] = Math.floor(absolute / 10000000);
            items2 = items1;
          } else {
            items2 = [absolute % 10000000, , ];
            const _Math = Math;
            items2[1] = Math.floor(absolute / 10000000) % 10000000;
            const _Math2 = Math;
            items2[2] = Math.floor(absolute / 100000000000000);
          }
          arr2 = items2;
        }
      }
    }
    if (0 < -0.012 * value2.length - 0.012 * arr2.length + 0.000015 * value2.length * arr2.length) {
      const tmp8 = multiplyKaratsuba(value2, arr2);
      Object.create(BigInteger.prototype);
      obj = { value: tmp8, sign: this.sign !== iter.sign, isSmall: false };
      const obj9 = { value: tmp8, sign: this.sign !== iter.sign, isSmall: false };
    } else {
      const tmp4 = multiplyLong(value2, arr2);
      Object.create(BigInteger.prototype);
      obj = { value: tmp4, sign: this.sign !== iter.sign, isSmall: false };
    }
    return obj;
  }
  _multiplyBySmall(value) {
    let self2;
    if (0 === value.value) {
      self2 = Integer[0];
    } else {
      const self = this;
      self2 = this;
      if (1 !== value.value) {
        let negateResult;
        if (-1 === value.value) {
          negateResult = self.negate();
        } else {
          const _Math = Math;
          negateResult = multiplySmallAndArray(Math.abs(value.value), self.value, self.sign !== value.sign);
        }
        self2 = negateResult;
      }
    }
    return self2;
  }
  square() {
    const value = square(this.value);
    Object.create(BigInteger.prototype);
    return { value, sign: false, isSmall: false };
  }
  divmod(items1) {
    const tmp = divModAny(this, items1);
    return { quotient: tmp[0], remainder: tmp[1] };
  }
  divide(items1) {
    return divModAny(this, items1)[0];
  }
  mod(items1) {
    return divModAny(this, items1)[1];
  }
  pow(arg0) {
    let diff1;
    let self = this;
    const iter = parseValue(arg0);
    const value = this.value;
    const value2 = iter.value;
    if (0 === value2) {
      return Integer[1];
    } else if (0 === value) {
      return Integer[0];
    } else if (1 === value) {
      return Integer[1];
    } else if (-1 === value) {
      return iter.isEven() ? Integer[1] : Integer[-1];
    } else if (iter.sign) {
      return Integer[0];
    } else if (iter.isSmall) {
      if (self.isSmall) {
        const _Math = Math;
        const powResult = Math.pow(value, value2);
        const tmp6 = -9007199254740992 < powResult && powResult < 9007199254740992;
        if (tmp6) {
          let rounded;
          if (powResult > 0) {
            const _Math3 = Math;
            rounded = Math.floor(powResult);
          } else {
            const _Math2 = Math;
            rounded = Math.ceil(powResult);
          }
          Object.create(SmallInteger.prototype);
          return { value: rounded, sign: rounded < 0, isSmall: true };
        }
      }
      let diff = value2;
      let timesResult = obj;
      if (true & value2) {
        timesResult = obj.times(self);
        diff = value2 - 1;
      }
      let obj2 = timesResult;
      let tmp10 = timesResult;
      if (0 !== diff) {
        do {
          let result = diff / 2;
          let squareResult = self.square();
          diff1 = result;
          let timesResult1 = obj2;
          if (true & result) {
            timesResult1 = obj2.times(squareResult);
            diff1 = result - 1;
          }
          diff = diff1;
          obj2 = timesResult1;
          self = squareResult;
          tmp10 = timesResult1;
        } while (0 !== diff1);
      }
      return tmp10;
    } else {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error("The exponent " + iter.toString() + " is too large.");
      throw error;
    }
  }
  modPow(arg0, arg1) {
    const obj = parseValue(arg0);
    const obj2 = parseValue(arg1);
    if (obj2.isZero()) {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error("Cannot take modPow with modulus 0");
      throw error;
    } else {
      const self = this;
      const modResult = this.mod(obj2);
      let modInvResult = modResult;
      let multiplyResult = obj;
      if (obj.isNegative()) {
        multiplyResult = obj.multiply(Integer[-1]);
        modInvResult = modResult.modInv(obj2);
      }
      let obj6 = multiplyResult;
      let obj7 = tmp2;
      let tmp3 = tmp2;
      if (multiplyResult.isPositive()) {
        while (!modInvResult.isZero()) {
          let modResult1 = obj7;
          if (obj6.isOdd()) {
            let multiplyResult1 = obj7.multiply(modInvResult);
            modResult1 = multiplyResult1.mod(obj2);
          }
          let divideResult = obj6.divide(2);
          let squareResult = modInvResult.square();
          modInvResult = squareResult.mod(obj2);
          obj7 = modResult1;
          obj6 = divideResult;
          tmp3 = modResult1;
        }
        return Integer[0];
      }
      return tmp3;
    }
  }
  compareAbs(arg0) {
    const iter = parseValue(arg0);
    const value = this.value;
    const value2 = iter.value;
    let num = 1;
    if (!iter.isSmall) {
      let num3;
      if (value.length !== value2.length) {
        let num5 = -1;
        if (value.length > value2.length) {
          num5 = 1;
        }
        num3 = num5;
      } else {
        let diff = value.length - 1;
        num3 = 0;
        if (0 <= diff) {
          while (value[diff] === value2[diff]) {
            diff = diff - 1;
            num3 = 0;
          }
          let num4 = -1;
          if (value[diff] > value2[diff]) {
            num4 = 1;
          }
          num3 = num4;
        }
      }
      num = num3;
    }
    return num;
  }
  compare(arg0) {
    if (arg0 === Infinity) {
      return -1;
    } else if (arg0 === -Infinity) {
      return 1;
    } else {
      let result;
      const self = this;
      const iter = parseValue(arg0);
      const value = this.value;
      const value2 = iter.value;
      if (this.sign !== iter.sign) {
        let num8 = -1;
        if (iter.sign) {
          num8 = 1;
        }
        result = num8;
      } else if (iter.isSmall) {
        let num7 = 1;
        if (self.sign) {
          num7 = -1;
        }
        result = num7;
      } else {
        let num3;
        if (value.length !== value2.length) {
          let num5 = -1;
          if (value.length > value2.length) {
            num5 = 1;
          }
          num3 = num5;
        } else {
          let diff = value.length - 1;
          num3 = 0;
          if (0 <= diff) {
            while (value[diff] === value2[diff]) {
              diff = diff - 1;
              num3 = 0;
            }
            let num4 = -1;
            if (value[diff] > value2[diff]) {
              num4 = 1;
            }
            num3 = num4;
          }
        }
        let num6 = 1;
        if (self.sign) {
          num6 = -1;
        }
        result = num3 * num6;
      }
      return result;
    }
  }
  equals(arg0) {
    return 0 === this.compare(arg0);
  }
  notEquals(arg0) {
    return 0 !== this.compare(arg0);
  }
  greater(arg0) {
    return this.compare(arg0) > 0;
  }
  lesser(arg0) {
    return this.compare(arg0) < 0;
  }
  greaterOrEquals(arg0) {
    return this.compare(arg0) >= 0;
  }
  lesserOrEquals(arg0) {
    return this.compare(arg0) <= 0;
  }
  isEven() {
    return !(1 & this.value[0]);
  }
  isOdd() {
    return !(1 & ~this.value[0]);
  }
  isPositive() {
    return !this.sign;
  }
  isNegative() {
    return this.sign;
  }
  isUnit() {
  return false;
}
  isZero() {
  return false;
}
  isDivisibleBy(arg0) {
    const obj = parseValue(arg0);
    let tmp2 = !obj.isZero();
    obj.isZero();
    if (tmp2) {
      let isUnitResult = obj.isUnit();
      if (!isUnitResult) {
        let isEvenResult;
        const self = this;
        if (0 === obj.compareAbs(2)) {
          isEvenResult = self.isEven();
        } else {
          const modResult = self.mod(obj);
          isEvenResult = modResult.isZero();
        }
        isUnitResult = isEvenResult;
      }
      tmp2 = isUnitResult;
    }
    return tmp2;
  }
  isPrime(arg0) {
    const self = this;
    const absResult = this.abs();
    let tmp2 = !absResult.isUnit();
    absResult.isUnit();
    if (tmp2) {
      let tmp4 = absResult.equals(2) || absResult.equals(3) || absResult.equals(5);
      const equalsResult = absResult.equals(2) || absResult.equals(3) || absResult.equals(5);
      if (!tmp4) {
        let tmp6 = !(absResult.isEven() || absResult.isDivisibleBy(3) || absResult.isDivisibleBy(5));
        const isEvenResult = absResult.isEven() || absResult.isDivisibleBy(3) || absResult.isDivisibleBy(5);
        if (tmp6) {
          tmp6 = absResult.lesser(49) || undefined;
          absResult.lesser(49) || undefined;
        }
        tmp4 = tmp6;
      }
      tmp2 = tmp4;
    }
    if (tmp2 !== undefined) {
      return tmp2;
    } else {
      const absResult1 = self.abs();
      const bitLengthResult = absResult1.bitLength();
      if (bitLengthResult <= 64) {
        return millerRabinTest(absResult1, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
      } else {
        let num9;
        const _Math2 = Math;
        const logResult = Math.log(2);
        const result = logResult * bitLengthResult.toJSNumber();
        let result1 = result;
        const _Math3 = Math;
        if (true === arg0) {
          const _Math = Math;
          result1 = 2 * Math.pow(result, 2);
        }
        items = [];
        const ceilResult = ceil(result1);
        for (let num9 = 0; num9 < ceilResult; num9 = num9 + 1) {
          let arr = items.push(Integer(num9 + 2));
        }
        return millerRabinTest(absResult1, items);
      }
    }
  }
  isProbablePrime(arg0, arg1) {
    const self = this;
    const absResult = this.abs();
    let tmp2 = !absResult.isUnit();
    absResult.isUnit();
    if (tmp2) {
      let tmp4 = absResult.equals(2) || absResult.equals(3) || absResult.equals(5);
      const equalsResult = absResult.equals(2) || absResult.equals(3) || absResult.equals(5);
      if (!tmp4) {
        let tmp6 = !(absResult.isEven() || absResult.isDivisibleBy(3) || absResult.isDivisibleBy(5));
        const isEvenResult = absResult.isEven() || absResult.isDivisibleBy(3) || absResult.isDivisibleBy(5);
        if (tmp6) {
          tmp6 = absResult.lesser(49) || undefined;
          absResult.lesser(49) || undefined;
        }
        tmp4 = tmp6;
      }
      tmp2 = tmp4;
    }
    if (tmp2 !== undefined) {
      return tmp2;
    } else {
      const absResult1 = self.abs();
      let num7 = 5;
      if (arg0 !== undefined) {
        num7 = arg0;
      }
      items = [];
      for (let num11 = 0; num11 < num7; num11 = num11 + 1) {
        let arr = items.push(Integer.randBetween(2, absResult1.minus(2), arg1));
      }
      return millerRabinTest(absResult1, items);
    }
  }
  modInv(arg0) {
    let isZeroResult;
    let one;
    let zero;
    const self = this;
    ({ zero, one } = Integer);
    let obj = parseValue(arg0);
    const absResult = this.abs();
    let tmp = absResult;
    let obj3 = zero;
    let obj4 = obj;
    let obj5 = zero;
    if (!absResult.isZero()) {
      do {
        let divideResult = obj.divide(tmp);
        let subtractResult = obj3.subtract(divideResult.multiply(one));
        let subtractResult1 = obj.subtract(divideResult.multiply(tmp));
        obj = tmp;
        obj3 = one;
        tmp = subtractResult1;
        one = subtractResult;
        obj4 = obj;
        obj5 = obj3;
        isZeroResult = subtractResult1.isZero();
      } while (!isZeroResult);
    }
    if (obj4.isUnit()) {
      let addResult = obj5;
      if (-1 === obj5.compare(0)) {
        addResult = obj5.add(arg0);
      }
      let negateResult = addResult;
      if (self.isNegative()) {
        negateResult = addResult.negate();
      }
      return negateResult;
    } else {
      const _Error = Error;
      const text = `${self.toString()} and `;
      const self2 = this;
      const self3 = this;
      const error = new Error(`${self.toString()} and ` + arg0.toString() + " are not co-prime");
      throw error;
    }
  }
  next() {
    let obj;
    const self = this;
    const value = this.value;
    if (this.sign) {
      obj = subtractSmall(value, 1, self.sign);
    } else {
      const _Array = Array;
      const self2 = this;
      const self3 = this;
      const array = new Array(length);
      let num4 = 0;
      let num5 = 1;
      let num6 = 0;
      let num7 = 1;
      if (0 < value.length) {
        do {
          let sum = value[num4] - 10000000 + num5;
          let _Math = Math;
          let rounded = Math.floor(sum / 10000000);
          array[num4] = sum - rounded * 10000000;
          num5 = rounded + 1;
          num4 = num4 + 1;
          num7 = num5;
          num6 = num4;
        } while (num4 < value.length);
      }
      if (num7 > 0) {
        do {
          array[num6] = num7 % 10000000;
          let _Math2 = Math;
          let sum1 = num6 + 1;
          num7 = Math.floor(num7 / 10000000);
          num6 = sum1;
        } while (num7 > 0);
      }
      const sign = self.sign;
      Object.create(BigInteger.prototype);
      obj = { value: array, sign, isSmall: false };
    }
    return obj;
  }
  prev() {
    let tmp3;
    const value = this.value;
    if (this.sign) {
      const _Array = Array;
      const self = this;
      const self2 = this;
      const array = new Array(length);
      let num6 = 0;
      let num7 = 1;
      let num8 = 0;
      let num9 = 1;
      if (0 < value.length) {
        do {
          let sum = value[num6] - 10000000 + num7;
          let _Math = Math;
          let rounded = Math.floor(sum / 10000000);
          array[num6] = sum - rounded * 10000000;
          num7 = rounded + 1;
          num6 = num6 + 1;
          num9 = num7;
          num8 = num6;
        } while (num6 < value.length);
      }
      if (num9 > 0) {
        do {
          array[num8] = num9 % 10000000;
          let _Math2 = Math;
          let sum1 = num8 + 1;
          num9 = Math.floor(num9 / 10000000);
          num8 = sum1;
        } while (num9 > 0);
      }
      Object.create(BigInteger.prototype);
      tmp3 = { value: array, sign: true, isSmall: false };
      const obj = { value: array, sign: true, isSmall: false };
    } else {
      tmp3 = subtractSmall(value, 1, tmp.sign);
    }
    return tmp3;
  }
  shiftLeft(arg0) {
    const obj = parseValue(arg0);
    const toJSNumberResult = obj.toJSNumber();
    if (Math.abs(toJSNumberResult) <= 10000000) {
      const self3 = this;
      if (toJSNumberResult < 0) {
        return self3.shiftRight(-toJSNumberResult);
      } else if (self3.isZero()) {
        return self3;
      } else {
        let multiplyResult = self3;
        let diff = toJSNumberResult;
        let obj3 = self3;
        let tmp6 = toJSNumberResult;
        if (toJSNumberResult >= length) {
          do {
            multiplyResult = multiplyResult.multiply(closure_19);
            diff = diff - (length - 1);
            obj3 = multiplyResult;
            tmp6 = diff;
          } while (diff >= length);
        }
        return obj3.multiply(items1[tmp6]);
      }
    } else {
      const _Error = Error;
      const _String = String;
      const self = this;
      const self2 = this;
      const error = new Error(String(toJSNumberResult) + " is too large for shifting.");
      throw error;
    }
  }
  shiftRight(arg0) {
    let obj2;
    let obj3;
    let obj5;
    let obj6;
    const obj = parseValue(arg0);
    const toJSNumberResult = obj.toJSNumber();
    if (Math.abs(toJSNumberResult) <= 10000000) {
      const self3 = this;
      if (toJSNumberResult < 0) {
        return self3.shiftLeft(-toJSNumberResult);
      } else {
        let prevResult1;
        let obj4 = self3;
        let diff = toJSNumberResult;
        let tmp12 = self3;
        let tmp13 = toJSNumberResult;
        if (toJSNumberResult >= length) {
          while (!obj4.isZero()) {
            if (!obj4.isNegative()) {
              let prevResult;
              let tmp8 = divModAny(obj4, closure_19);
              [obj3, obj2] = tmp8;
              if (obj2.isNegative()) {
                prevResult = obj3.prev();
              } else {
                prevResult = obj3;
              }
              diff = diff - (length - 1);
              obj4 = prevResult;
              tmp12 = prevResult;
              tmp13 = diff;
            } else if (obj4.isUnit()) {
              break;
            }
            return obj4;
          }
        }
        [obj6, obj5] = divModAny(tmp12, items1[tmp13]);
        divModAny(tmp12, items1[tmp13]);
        if (obj5.isNegative()) {
          prevResult1 = obj6.prev();
        } else {
          prevResult1 = obj6;
        }
        return prevResult1;
      }
    } else {
      const _Error = Error;
      const _String = String;
      const self = this;
      const self2 = this;
      const error = new Error(String(toJSNumberResult) + " is too large for shifting.");
      throw error;
    }
  }
  not() {
    const negateResult = this.negate();
    return negateResult.prev();
  }
  and(arg0) {
    return bitwise(this, arg0, (arg0, arg1) => arg0 & arg1);
  }
  or(arg0) {
    return bitwise(this, arg0, (arg0, arg1) => arg0 | arg1);
  }
  xor(arg0) {
    return bitwise(this, arg0, (arg0, arg1) => arg0 ^ arg1);
  }
  bitLength() {
    let addResult;
    let e;
    let e2;
    let p;
    let p2;
    const self = this;
    let self2 = this;
    if (this.compareTo(Integer(0)) < 0) {
      const negateResult = self.negate();
      self2 = negateResult.subtract(Integer(1));
    }
    if (0 === self2.compareTo(Integer(0))) {
      addResult = Integer(0);
    } else {
      let obj6;
      const tmpResult3 = Integer(2);
      if (tmpResult3.compareTo(self2) <= 0) {
        let obj3;
        let obj5;
        const squareResult = tmpResult3.square(tmpResult3);
        if (squareResult.compareTo(self2) <= 0) {
          let obj2;
          ({ p, e } = integerLogarithm(self2, squareResult.square(squareResult)));
          integerLogarithm(self2, squareResult.square(squareResult));
          const multiplyResult = p.multiply(squareResult);
          if (multiplyResult.compareTo(self2) <= 0) {
            obj2 = { p: multiplyResult, e: 2 * e + 1 };
            const obj = { p: multiplyResult, e: 2 * e + 1 };
          } else {
            obj2 = { p, e: 2 * e };
          }
          obj3 = obj2;
        } else {
          obj3 = { p: Integer(1), e: 0 };
        }
        ({ p: p2, e: e2 } = obj3);
        const multiplyResult1 = p2.multiply(tmpResult3);
        if (multiplyResult1.compareTo(self2) <= 0) {
          obj5 = { p: multiplyResult1, e: 2 * e2 + 1 };
          const obj4 = { p: multiplyResult1, e: 2 * e2 + 1 };
        } else {
          obj5 = { p: p2, e: 2 * e2 };
        }
        obj6 = obj5;
      } else {
        obj6 = { p: Integer(1), e: 0 };
      }
      const tmpResult4 = Integer(obj6.e);
      addResult = tmpResult4.add(Integer(1));
    }
    return addResult;
  }
  toArray(arg0) {
    return toBase(this, arg0);
  }
  toString(arg0, arg1) {
    let num = arg0;
    if (arg0 === undefined) {
      num = 10;
    }
    const self = this;
    if (10 !== num) {
      let closure_0 = arg1;
      const iter = toBase(self, num);
      let str3 = "";
      if (iter.isNegative) {
        str3 = "-";
      }
      const value = iter.value;
      const mapped = value.map((item) => {
        let text;
        if (item < (closure_0 || c1).length) {
          text = arr[item];
        } else {
          text = `${"<" + item}>`;
        }
        return text;
      });
      return str3 + mapped.join("");
    } else {
      const value2 = self.value;
      const _String2 = String;
      const diff = value2.length - 1;
      const StringResult = String(value2[diff]);
      let diff1 = diff - 1;
      let sum = StringResult;
      let tmp3 = StringResult;
      if (diff1 >= 0) {
        do {
          let _String = String;
          let StringResult1 = String(value2[diff1]);
          let slice = "0000000".slice;
          sum = sum + ("0000000".slice(StringResult1.length) + StringResult1);
          diff1 = diff1 - 1;
          tmp3 = sum;
        } while (diff1 >= 0);
      }
      let str = "";
      if (self.sign) {
        str = "-";
      }
      return str + tmp3;
    }
  }
  valueOf() {
    return parseInt(this.toString(), 10);
  }
}
class SmallInteger {
  constructor(arg0) {

  }
  add(arg0) {
    const self = this;
    const iter = parseValue(arg0);
    const value = this.value;
    if (value < 0 !== iter.sign) {
      return self.subtract(iter.negate());
    } else {
      const value2 = iter.value;
      let arr4 = value2;
      if (iter.isSmall) {
        const sum = value + value2;
        const tmp2 = -9007199254740992 < sum && sum < 9007199254740992;
        if (tmp2) {
          const sum1 = value + value2;
          Object.create(SmallInteger.prototype);
          return { value: sum1, sign: sum1 < 0, isSmall: true };
        } else {
          let items2;
          const _Math = Math;
          const absolute = Math.abs(value2);
          if (absolute < 10000000) {
            items = [absolute];
            items2 = items;
          } else if (absolute < 100000000000000) {
            items1 = [absolute % 10000000, ];
            const _Math4 = Math;
            items1[1] = Math.floor(absolute / 10000000);
            items2 = items1;
          } else {
            items2 = [absolute % 10000000, , ];
            const _Math2 = Math;
            items2[1] = Math.floor(absolute / 10000000) % 10000000;
            const _Math3 = Math;
            items2[2] = Math.floor(absolute / 100000000000000);
          }
          arr4 = items2;
        }
      }
      const _Math5 = Math;
      const absolute1 = Math.abs(value);
      const _Array = Array;
      const self2 = this;
      const self3 = this;
      const array = new Array(length);
      let num6 = 0;
      let sum3 = absolute1;
      let num7 = 0;
      let rounded1 = absolute1;
      if (0 < arr4.length) {
        do {
          let sum2 = arr4[num6] - 10000000 + sum3;
          let _Math6 = Math;
          let rounded = Math.floor(sum2 / 10000000);
          array[num6] = sum2 - rounded * 10000000;
          sum3 = rounded + 1;
          num6 = num6 + 1;
          rounded1 = sum3;
          num7 = num6;
        } while (num6 < arr4.length);
      }
      if (rounded1 > 0) {
        do {
          array[num7] = rounded1 % 10000000;
          let _Math7 = Math;
          let sum4 = num7 + 1;
          rounded1 = Math.floor(rounded1 / 10000000);
          num7 = sum4;
        } while (rounded1 > 0);
      }
      const tmp16 = value < 0;
      Object.create(BigInteger.prototype);
      return { value: array, sign: tmp16, isSmall: false };
    }
  }
  subtract(arg0) {
    const self = this;
    const iter = parseValue(arg0);
    const value = this.value;
    if (value < 0 !== iter.sign) {
      return self.add(iter.negate());
    } else {
      let tmp3;
      const value2 = iter.value;
      if (iter.isSmall) {
        const diff = value - value2;
        Object.create(SmallInteger.prototype);
        tmp3 = { value: diff, sign: diff < 0, isSmall: true };
        const obj = { value: diff, sign: diff < 0, isSmall: true };
      } else {
        const _Math = Math;
        tmp3 = subtractSmall(value2, Math.abs(value), value >= 0);
      }
      return tmp3;
    }
  }
  negate() {
    const sign = this.sign;
    Object.create(SmallInteger.prototype);
    return { value: -this.value, sign: -this.value < 0, isSmall: true, sign: !sign };
  }
  abs() {
    const absolute = Math.abs(this.value);
    Object.create(SmallInteger.prototype);
    return { value: absolute, sign: absolute < 0, isSmall: true };
  }
  _multiplyBySmall(value) {
    let tmp3Result;
    const self = this;
    const result = value.value * this.value;
    const tmp2 = -9007199254740992 < result && result < 9007199254740992;
    if (tmp2) {
      const result1 = value.value * self.value;
      Object.create(SmallInteger.prototype);
      tmp3Result = { value: result1, sign: result1 < 0, isSmall: true };
      const obj = { value: result1, sign: result1 < 0, isSmall: true };
    } else {
      let items2;
      const _Math = Math;
      const _Math2 = Math;
      const absolute = Math.abs(value.value);
      const absolute1 = Math.abs(self.value);
      if (absolute1 < 10000000) {
        items = [absolute1];
        items2 = items;
      } else if (absolute1 < 100000000000000) {
        items1 = [absolute1 % 10000000, ];
        const _Math5 = Math;
        items1[1] = Math.floor(absolute1 / 10000000);
        items2 = items1;
      } else {
        items2 = [absolute1 % 10000000, , ];
        const _Math3 = Math;
        items2[1] = Math.floor(absolute1 / 10000000) % 10000000;
        const _Math4 = Math;
        items2[2] = Math.floor(absolute1 / 100000000000000);
      }
      tmp3Result = multiplySmallAndArray(absolute, items2, self.sign !== value.sign);
    }
    return tmp3Result;
  }
  multiply(arg0) {
    const obj = parseValue(arg0);
    return obj._multiplyBySmall(this);
  }
  square() {
    let obj;
    const result = this.value * this.value;
    const tmp2 = -9007199254740992 < result && result < 9007199254740992;
    if (tmp2) {
      Object.create(SmallInteger.prototype);
      obj = { value: result, sign: result < 0, isSmall: true };
      const obj5 = { value: result, sign: result < 0, isSmall: true };
    } else {
      let items2;
      const _Math = Math;
      const absolute = Math.abs(this.value);
      if (absolute < 10000000) {
        items = [absolute];
        items2 = items;
      } else if (absolute < 100000000000000) {
        items1 = [absolute % 10000000, ];
        const _Math4 = Math;
        items1[1] = Math.floor(absolute / 10000000);
        items2 = items1;
      } else {
        items2 = [absolute % 10000000, , ];
        const _Math2 = Math;
        items2[1] = Math.floor(absolute / 10000000) % 10000000;
        const _Math3 = Math;
        items2[2] = Math.floor(absolute / 100000000000000);
      }
      const tmp4Result = square(items2);
      Object.create(BigInteger.prototype);
      obj = { value: tmp4Result, sign: false, isSmall: false };
    }
    return obj;
  }
  compareAbs(arg0) {
    const tmp = parseValue(arg0);
    const absolute = Math.abs(this.value);
    let num = -1;
    let num2 = -1;
    if (tmp.isSmall) {
      const _Math = Math;
      const absolute1 = Math.abs(tmp3);
      let num3 = 0;
      if (absolute !== absolute1) {
        if (absolute > absolute1) {
          num = 1;
        }
        num3 = num;
      }
      num2 = num3;
    }
    return num2;
  }
  compare(arg0) {
    if (arg0 === Infinity) {
      return -1;
    } else if (arg0 === -Infinity) {
      return 1;
    } else {
      let num;
      const self = this;
      const iter = parseValue(arg0);
      const value = this.value;
      const value2 = iter.value;
      if (iter.isSmall) {
        let num3 = 0;
        if (value != value2) {
          let num4 = -1;
          if (value > value2) {
            num4 = 1;
          }
          num3 = num4;
        }
        num = num3;
      } else if (value < 0 !== iter.sign) {
        let num2 = 1;
        if (value < 0) {
          num2 = -1;
        }
        num = num2;
      } else {
        num = -1;
        if (value < 0) {
          num = 1;
        }
      }
      return num;
    }
  }
  isEven() {
    return !(1 & this.value);
  }
  isOdd() {
    return !(1 & ~this.value);
  }
  isPositive() {
    return this.value > 0;
  }
  isNegative() {
    return this.value < 0;
  }
  isUnit() {
    return 1 === Math.abs(this.value);
  }
  isZero() {
    return 0 === this.value;
  }
  next() {
    let obj;
    const value = this.value;
    if (value + 1 < 9007199254740992) {
      const sum = value + 1;
      Object.create(SmallInteger.prototype);
      obj = { value: sum, sign: sum < 0, isSmall: true };
      const obj5 = { value: sum, sign: sum < 0, isSmall: true };
    } else {
      Object.create(BigInteger.prototype);
      obj = { value: items, sign: false, isSmall: false };
    }
    return obj;
  }
  prev() {
    let obj;
    const value = this.value;
    if (-9007199254740992 < value - 1) {
      const diff = value - 1;
      Object.create(SmallInteger.prototype);
      obj = { value: diff, sign: diff < 0, isSmall: true };
      const obj5 = { value: diff, sign: diff < 0, isSmall: true };
    } else {
      Object.create(BigInteger.prototype);
      obj = { value: items, sign: true, isSmall: false };
    }
    return obj;
  }
  toArray(arg0) {
    return toBase(this, arg0);
  }
  toString(arg0, arg1) {
    let sum;
    let num = arg0;
    if (arg0 === undefined) {
      num = 10;
    }
    const self = this;
    if (10 != num) {
      let closure_0 = arg1;
      const iter = toBase(self, num);
      let str2 = "";
      if (iter.isNegative) {
        str2 = "-";
      }
      const value = iter.value;
      const mapped = value.map((item) => {
        let text;
        if (item < (closure_0 || c1).length) {
          text = arr[item];
        } else {
          text = `${"<" + item}>`;
        }
        return text;
      });
      sum = str2 + mapped.join("");
    } else {
      const _String = String;
      sum = String(self.value);
    }
    return sum;
  }
  valueOf() {
    return this.value;
  }
}
class NativeBigInt {
  constructor(value) {
    this.value = value;
  }
  add(arg0) {
    const sum = this.value + parseValue(arg0).value;
    const obj = Object.create(NativeBigInt.prototype);
    obj.value = sum;
    return obj;
  }
  subtract(arg0) {
    const diff = this.value - parseValue(arg0).value;
    const obj = Object.create(NativeBigInt.prototype);
    obj.value = diff;
    return obj;
  }
  negate() {
    const tmp = -this.value;
    const obj = Object.create(NativeBigInt.prototype);
    obj.value = tmp;
    return obj;
  }
  abs() {
    let value;
    const self = this;
    if (this.value >= 0) {
      value = self.value;
    } else {
      value = -self.value;
    }
    const obj = Object.create(NativeBigInt.prototype);
    obj.value = value;
    return obj;
  }
  multiply(arg0) {
    const result = this.value * parseValue(arg0).value;
    const obj = Object.create(NativeBigInt.prototype);
    obj.value = result;
    return obj;
  }
  square(arg0) {
    const result = this.value * this.value;
    const obj = Object.create(NativeBigInt.prototype);
    obj.value = result;
    return obj;
  }
  pow(arg0) {
    let diff1;
    let self = this;
    const iter = parseValue(arg0);
    const value = this.value;
    const value2 = iter.value;
    const BigIntResult = BigInt(0);
    const BigIntResult1 = BigInt(1);
    if (value2 === BigIntResult) {
      return Integer[1];
    } else if (value === BigIntResult) {
      return Integer[0];
    } else if (value === BigIntResult1) {
      return Integer[1];
    } else {
      const _BigInt = BigInt;
      if (value === BigInt(-1)) {
        return iter.isEven() ? Integer[1] : Integer[-1];
      } else if (iter.isNegative()) {
        const obj3 = Object.create(NativeBigInt.prototype);
        obj3.value = BigIntResult;
        return obj3;
      } else {
        let timesResult = obj;
        let diff = value2;
        if ((value2 & BigIntResult1) === BigIntResult1) {
          timesResult = obj.times(self);
          diff = value2 - 1;
        }
        let obj2 = timesResult;
        let tmp7 = timesResult;
        if (diff !== BigIntResult) {
          do {
            let result = diff / tmp3;
            let squareResult = self.square();
            let timesResult1 = obj2;
            diff1 = result;
            if ((result & BigIntResult1) === BigIntResult1) {
              timesResult1 = obj2.times(squareResult);
              diff1 = result - 1;
            }
            obj2 = timesResult1;
            diff = diff1;
            self = squareResult;
            tmp7 = timesResult1;
          } while (diff1 !== BigIntResult);
        }
        return tmp7;
      }
    }
  }
  compareAbs(arg0) {
    const value = this.value;
    const value2 = parseValue(arg0).value;
    let tmp = value;
    if (value < 0) {
      tmp = -value;
    }
    let tmp2 = value2;
    if (value2 < 0) {
      tmp2 = -value2;
    }
    let num = 0;
    if (tmp !== tmp2) {
      let num2 = -1;
      if (tmp > tmp2) {
        num2 = 1;
      }
      num = num2;
    }
    return num;
  }
  compare(arg0) {
    if (arg0 === Infinity) {
      return -1;
    } else if (arg0 === -Infinity) {
      return 1;
    } else {
      const self = this;
      const value = this.value;
      const value2 = parseValue(arg0).value;
      let num2 = 0;
      if (value !== value2) {
        let num3 = -1;
        if (value > value2) {
          num3 = 1;
        }
        num2 = num3;
      }
      return num2;
    }
  }
  isEven() {
    const tmp = this.value & BigInt(1);
    return tmp === BigInt(0);
  }
  isOdd() {
    const tmp = this.value & BigInt(1);
    return tmp === BigInt(1);
  }
  isUnit() {
    return this.abs().value === BigInt(1);
  }
  isZero() {
    return this.value === BigInt(0);
  }
  next() {
    const sum = this.value + BigInt(1);
    const obj = Object.create(NativeBigInt.prototype);
    obj.value = sum;
    return obj;
  }
  prev() {
    const diff = this.value - BigInt(1);
    const obj = Object.create(NativeBigInt.prototype);
    obj.value = diff;
    return obj;
  }
  toArray(arg0) {
    return toBase(this, arg0);
  }
}
function arrayToSmall(array) {
  let tmp5;
  const diff = array.length - 1;
  let tmp2 = diff;
  let tmp3 = diff;
  if (0 === array[diff]) {
    do {
      let diff1 = tmp2 - 1;
      tmp2 = diff1;
      tmp3 = diff1;
      tmp5 = array[diff1];
    } while (0 === tmp5);
  }
  array.length = tmp3 + 1;
  if (array.length < 4) {
    let num;
    if (array.length !== items.length) {
      let num3 = -1;
      if (array.length > items.length) {
        num3 = 1;
      }
      num = num3;
    } else {
      let diff2 = array.length - 1;
      num = 0;
      if (0 <= diff2) {
        while (array[diff2] === items[diff2]) {
          diff2 = diff2 - 1;
          num = 0;
        }
        let num2 = -1;
        if (array[diff2] > items[diff2]) {
          num2 = 1;
        }
        num = num2;
      }
    }
    if (num < 0) {
      if (0 === array.length) {
        return 0;
      } else if (1 === array.length) {
        return array[0];
      } else if (2 === array.length) {
        return array[0] + array[1] * 10000000;
      } else {
        return array[0] + (array[1] + array[2] * 10000000) * 10000000;
      }
    }
  }
  return array;
}
function addAny(substr1, substr) {
  let tmp7;
  if (substr1.length >= substr.length) {
    const _Array = Array;
    const self = this;
    const self2 = this;
    const arr = new Array(substr1.length);
    let num10 = 0;
    let num11 = 0;
    let num12 = 0;
    let num13 = 0;
    if (0 < substr.length) {
      do {
        let sum = substr1[num11] + substr[num11] + num10;
        let num14 = 0;
        if (sum >= 10000000) {
          num14 = 1;
        }
        arr[num11] = sum - num14 * 10000000;
        num11 = num11 + 1;
        num10 = num14;
        num12 = num14;
        num13 = num11;
      } while (num11 < substr.length);
    }
    let tmp13 = num12;
    let tmp14 = num12;
    if (num13 < substr1.length) {
      do {
        let sum1 = substr1[num13] + tmp13;
        let num15 = 0;
        let tmp16 = num13;
        if (sum1 === 10000000) {
          num15 = 1;
        }
        num13 = num13 + 1;
        arr[tmp16] = sum1 - num15 * 10000000;
        tmp13 = num15;
        tmp14 = num15;
      } while (num13 < substr1.length);
    }
    tmp7 = arr;
    if (0 < tmp14) {
      arr.push(tmp14);
      tmp7 = arr;
    }
  } else {
    const _Array2 = Array;
    const self3 = this;
    const self4 = this;
    const array = new Array(length3);
    let num3 = 0;
    let num2 = 0;
    let num4 = 0;
    let num5 = 0;
    if (0 < substr1.length) {
      do {
        let sum2 = substr[num2] + substr1[num2] + num3;
        let num = 0;
        if (sum2 >= 10000000) {
          num = 1;
        }
        array[num2] = sum2 - num * 10000000;
        num2 = num2 + 1;
        num3 = num;
        num4 = num;
        num5 = num2;
      } while (num2 < substr1.length);
    }
    let tmp3 = num4;
    let tmp4 = num4;
    if (num5 < substr.length) {
      do {
        let sum3 = substr[num5] + tmp3;
        let num6 = 0;
        let tmp6 = num5;
        if (sum3 === 10000000) {
          num6 = 1;
        }
        num5 = num5 + 1;
        array[tmp6] = sum3 - num6 * 10000000;
        tmp3 = num6;
        tmp4 = num6;
      } while (num5 < substr.length);
    }
    tmp7 = array;
    if (0 < tmp4) {
      array.push(tmp4);
      tmp7 = array;
    }
  }
  return tmp7;
}
function subtract(arg0, arg1) {
  let tmp13;
  const arr = new Array(arg0.length);
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < arg1.length) {
    do {
      let diff = arg0[num2] - num - arg1[num2];
      let num4 = 0;
      let sum = diff;
      if (diff < 0) {
        sum = diff + 10000000;
        num4 = 1;
      }
      arr[num2] = sum;
      num2 = num2 + 1;
      num = num4;
      num3 = num4;
    } while (num2 < arg1.length);
  }
  let sum1 = length2;
  let sum2 = length2;
  if (arg1.length < arg0.length) {
    const diff1 = arg0[sum1] - num3;
    while (diff1 < 0) {
      arr[sum1] = diff1 + 10000000;
      sum1 = sum1 + 1;
      sum2 = sum1;
    }
    sum2 = tmp8 + 1;
    arr[+sum1] = diff1;
  }
  if (sum2 < arg0.length) {
    do {
      arr[sum2] = arg0[sum2];
      sum2 = sum2 + 1;
    } while (sum2 < arg0.length);
  }
  const diff2 = arr.length - 1;
  let tmp10 = diff2;
  let tmp11 = diff2;
  if (0 === arr[diff2]) {
    do {
      let diff3 = tmp10 - 1;
      tmp10 = diff3;
      tmp11 = diff3;
      tmp13 = arr[diff3];
    } while (0 === tmp13);
  }
  arr.length = tmp11 + 1;
  return arr;
}
function subtractSmall(value, arg1, sign) {
  let obj6;
  const array = new Array(length);
  let tmp2 = -arg1;
  let num = 0;
  if (0 < value.length) {
    do {
      let sum = value[num] + tmp2;
      let _Math = Math;
      let result = sum % 10000000;
      let sum1 = result;
      let rounded = Math.floor(sum / 10000000);
      if (result < 0) {
        sum1 = result + 10000000;
      }
      array[num] = sum1;
      num = num + 1;
      tmp2 = rounded;
    } while (num < value.length);
  }
  const tmp8 = arrayToSmall(array);
  if (typeof tmp8 === "number") {
    let tmp9 = tmp8;
    if (sign) {
      tmp9 = -tmp8;
    }
    Object.create(SmallInteger.prototype);
    obj6 = { value: tmp9, sign: tmp9 < 0, isSmall: true };
    const obj = { value: tmp9, sign: tmp9 < 0, isSmall: true };
  } else {
    Object.create(BigInteger.prototype);
    obj6 = { value: tmp8, sign, isSmall: false };
  }
  return obj6;
}
function multiplyLong(value2, arr2) {
  let num2;
  let tmp12;
  const sum = length + length2;
  const arr = new Array(sum);
  let num = 0;
  if (0 < sum) {
    do {
      arr[num] = 0;
      num = num + 1;
    } while (num < sum);
  }
  for (let num2 = 0; num2 < length; num2 = num2 + 1) {
    let num3;
    for (let num3 = 0; num3 < length2; num3 = num3 + 1) {
      let sum1 = num2 + num3;
      let sum2 = tmp2 * arr2[num3] + arr[sum1];
      let _Math = Math;
      let rounded = Math.floor(sum2 / 10000000);
      arr[sum1] = sum2 - rounded * 10000000;
      let sum3 = sum1 + 1;
      arr[sum3] = arr[sum3] + rounded;
    }
  }
  const diff = arr.length - 1;
  let tmp9 = diff;
  let tmp10 = diff;
  if (0 === arr[diff]) {
    do {
      let diff1 = tmp9 - 1;
      tmp9 = diff1;
      tmp10 = diff1;
      tmp12 = arr[diff1];
    } while (0 === tmp12);
  }
  arr.length = tmp10 + 1;
  return arr;
}
function multiplyKaratsuba(substr, arr2) {
  let tmp14;
  let tmp3;
  let tmp9;
  const bound = Math.max(substr.length, arr2.length);
  if (bound <= 30) {
    return multiplyLong(substr, arr2);
  } else {
    const _Math = Math;
    const rounded = Math.ceil(bound / 2);
    substr = substr.slice(rounded);
    const substr1 = substr.slice(0, rounded);
    const substr2 = arr2.slice(rounded);
    const substr3 = arr2.slice(0, rounded);
    const tmp22 = multiplyKaratsuba(substr1, substr3);
    const tmp23 = multiplyKaratsuba(substr, substr2);
    items = [];
    let diff = tmp28 - 1;
    const tmp25 = addAny(substr1, substr);
    const tmp27 = subtract(subtract(multiplyKaratsuba(tmp25, addAny(substr3, substr2)), tmp22), tmp23);
    if (+rounded > 0) {
      do {
        let arr = items.push(0);
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3 > 0);
    }
    const result = 2 * rounded;
    items1 = [];
    let diff1 = result - 1;
    const tmp24Result = addAny(tmp22, items.concat(tmp27));
    if (0 < result) {
      do {
        arr2 = items1.push(0);
        tmp9 = diff1;
        diff1 = diff1 - 1;
      } while (0 < tmp9);
    }
    const tmp24Result2 = addAny(tmp24Result, items1.concat(tmp23));
    const diff2 = tmp24Result2.length - 1;
    let tmp11 = diff2;
    let tmp12 = diff2;
    if (0 === tmp24Result2[diff2]) {
      do {
        let diff3 = tmp11 - 1;
        tmp11 = diff3;
        tmp12 = diff3;
        tmp14 = tmp24Result2[diff3];
      } while (0 === tmp14);
    }
    tmp24Result2.length = tmp12 + 1;
    return tmp24Result2;
  }
}
function multiplySmallAndArray(absolute, value, sign) {
  let tmp13Result;
  if (absolute < 10000000) {
    const _Array = Array;
    const self = this;
    const self2 = this;
    const array = new Array(length);
    let num4 = 0;
    let num5 = 0;
    let num6 = 0;
    let num7 = 0;
    if (0 < value.length) {
      do {
        let sum = value[num5] * absolute + num4;
        let _Math4 = Math;
        let rounded = Math.floor(sum / 10000000);
        array[num5] = sum - rounded * 10000000;
        num5 = num5 + 1;
        num4 = rounded;
        num6 = rounded;
        num7 = num5;
      } while (num5 < value.length);
    }
    tmp13Result = array;
    if (num6 > 0) {
      do {
        array[num7] = num6 % 10000000;
        let _Math5 = Math;
        let sum1 = num7 + 1;
        num6 = Math.floor(num6 / 10000000);
        num7 = sum1;
        tmp13Result = array;
      } while (num6 > 0);
    }
  } else {
    let items2;
    if (absolute < 10000000) {
      items = [absolute];
      items2 = items;
    } else if (absolute < 100000000000000) {
      items1 = [absolute % 10000000, ];
      const _Math3 = Math;
      items1[1] = Math.floor(absolute / 10000000);
      items2 = items1;
    } else {
      items2 = [absolute % 10000000, , ];
      const _Math = Math;
      items2[1] = Math.floor(absolute / 10000000) % 10000000;
      const _Math2 = Math;
      items2[2] = Math.floor(absolute / 100000000000000);
    }
    tmp13Result = multiplyLong(value, items2);
  }
  Object.create(BigInteger.prototype);
  return { value: tmp13Result, sign, isSmall: false };
}
function square(squareResult) {
  let num2;
  let tmp14;
  const sum = length + length;
  const arr = new Array(sum);
  let num = 0;
  if (0 < sum) {
    do {
      arr[num] = 0;
      num = num + 1;
    } while (num < sum);
  }
  for (let num2 = 0; num2 < length; num2 = num2 + 1) {
    let tmp2 = squareResult[num2];
    let diff = 0 - tmp2 * tmp2;
    let tmp5 = diff;
    let sum3 = num2;
    if (num2 < length) {
      do {
        let sum1 = num2 + sum3;
        let sum2 = tmp2 * squareResult[sum3] * 2 + arr[sum1] + diff;
        let _Math = Math;
        let rounded = Math.floor(sum2 / 10000000);
        arr[sum1] = sum2 - rounded * 10000000;
        sum3 = sum3 + 1;
        diff = rounded;
        tmp5 = rounded;
      } while (sum3 < length);
    }
    arr[num2 + length] = tmp5;
  }
  const diff1 = arr.length - 1;
  let tmp11 = diff1;
  let tmp12 = diff1;
  if (0 === arr[diff1]) {
    do {
      let diff2 = tmp11 - 1;
      tmp11 = diff2;
      tmp12 = diff2;
      tmp14 = arr[diff2];
    } while (0 === tmp14);
  }
  arr.length = tmp12 + 1;
  return arr;
}
function divModAny(self3, items1) {
  let length4;
  let length5;
  let tmp11;
  const iter = parseValue(items1);
  if (closure_2) {
    const result = self3.value / iter.value;
    const obj2 = Object.create(NativeBigInt.prototype);
    obj2.value = result;
    items = [obj2, ];
    const result1 = self3.value % iter.value;
    const obj3 = Object.create(NativeBigInt.prototype);
    obj3.value = result1;
    items[1] = obj3;
    return items;
  } else {
    const value2 = self3.value;
    const value = iter.value;
    if (0 === value) {
      const _Error = Error;
      const self13 = this;
      const self14 = this;
      const error = new Error("Cannot divide by zero");
      throw error;
    } else {
      const isSmall = iter.isSmall;
      if (self3.isSmall) {
        let items2;
        if (isSmall) {
          let rounded;
          const result2 = value2 / value;
          if (result2 > 0) {
            const _Math19 = Math;
            rounded = Math.floor(result2);
          } else {
            const _Math18 = Math;
            rounded = Math.ceil(result2);
          }
          Object.create(SmallInteger.prototype);
          items1 = [{ value: rounded, sign: rounded < 0, isSmall: true }, ];
          const result3 = value2 % value;
          const obj5 = { value: rounded, sign: rounded < 0, isSmall: true };
          Object.create(SmallInteger.prototype);
          const obj7 = { value: result3, sign: result3 < 0, isSmall: true };
          items1[1] = obj7;
          items2 = items1;
        } else {
          items2 = [Integer[0], self3];
        }
        return items2;
      } else {
        let num4;
        let arr2 = value;
        if (isSmall) {
          if (1 === value) {
            const items3 = [self3, Integer[0]];
            return items3;
          } else if (-1 == value) {
            const items4 = [self3.negate(), Integer[0]];
            return items4;
          } else {
            const _Math20 = Math;
            const absolute = Math.abs(value);
            if (absolute < 10000000) {
              let num44;
              let items7;
              const _Array6 = Array;
              const self11 = this;
              const self12 = this;
              const array = new Array(length10);
              for (let num44 = 0; num44 < length10; num44 = num44 + 1) {
                array[num44] = 0;
              }
              let diff = length10 - 1;
              let num45 = 0;
              let num46 = 0;
              if (0 <= diff) {
                do {
                  let rounded1;
                  let sum = num45 * 10000000 + value2[diff];
                  let result4 = sum / absolute;
                  if (0 < result4) {
                    let _Math17 = Math;
                    rounded1 = Math.floor(result4);
                  } else {
                    let _Math16 = Math;
                    rounded1 = Math.ceil(result4);
                  }
                  num45 = sum - rounded1 * absolute;
                  array[diff] = rounded1 | 0;
                  diff = diff - 1;
                  num46 = num45;
                } while (0 <= diff);
              }
              const items5 = [array, num46 | 0];
              const tmp83Result = arrayToSmall(items5[0]);
              let tmp94 = tmp93;
              if (self3.sign) {
                tmp94 = -tmp93;
              }
              if (typeof tmp83Result === "number") {
                let tmp95 = tmp83Result;
                if (self3.sign !== iter.sign) {
                  tmp95 = -tmp83Result;
                }
                Object.create(SmallInteger.prototype);
                const items6 = [{ value: tmp95, sign: tmp95 < 0, isSmall: true }, ];
                const obj9 = { value: tmp95, sign: tmp95 < 0, isSmall: true };
                Object.create(SmallInteger.prototype);
                const obj31 = { value: tmp94, sign: tmp94 < 0, isSmall: true };
                items6[1] = obj31;
                items7 = items6;
              } else {
                const sign2 = self3.sign;
                const sign3 = iter.sign;
                Object.create(BigInteger.prototype);
                items7 = [{ value: tmp83Result, sign: sign2 !== sign3, isSmall: false }, ];
                const obj33 = { value: tmp83Result, sign: sign2 !== sign3, isSmall: false };
                Object.create(SmallInteger.prototype);
                const obj35 = { value: tmp94, sign: tmp94 < 0, isSmall: true };
                items7[1] = obj35;
              }
              return items7;
            } else {
              let items10;
              if (absolute < 10000000) {
                const items8 = [absolute];
                items10 = items8;
              } else if (absolute < 100000000000000) {
                const items9 = [absolute % 10000000, ];
                const _Math3 = Math;
                items9[1] = Math.floor(absolute / 10000000);
                items10 = items9;
              } else {
                items10 = [absolute % 10000000, , ];
                const _Math = Math;
                items10[1] = Math.floor(absolute / 10000000) % 10000000;
                const _Math2 = Math;
                items10[2] = Math.floor(absolute / 100000000000000);
              }
              arr2 = items10;
            }
          }
        }
        if (value2.length !== arr2.length) {
          let num6 = -1;
          if (value2.length > arr2.length) {
            num6 = 1;
          }
          num4 = num6;
        } else {
          let diff1 = value2.length - 1;
          num4 = 0;
          if (0 <= diff1) {
            while (value2[diff1] === arr2[diff1]) {
              diff1 = diff1 - 1;
              num4 = 0;
            }
            let num5 = -1;
            if (value2[diff1] > arr2[diff1]) {
              num5 = 1;
            }
            num4 = num5;
          }
        }
        let num7 = -1;
        if (-1 === num4) {
          const items11 = [Integer[0], self3];
          return items11;
        } else if (0 === num4) {
          if (self3.sign === iter.sign) {
            num7 = 1;
          }
          const items12 = [Integer[num7], Integer[0]];
          return items12;
        } else {
          let items17;
          let obj38;
          let obj42;
          if (value2.length + arr2.length <= 200) {
            let num19;
            let num41;
            ({ length: length4, length: length5 } = arr2);
            const _Array2 = Array;
            self3 = this;
            const self4 = this;
            const array6 = new Array(length5);
            for (let num19 = 0; num19 < length5; num19 = num19 + 1) {
              array6[num19] = 0;
            }
            const _Math7 = Math;
            const rounded2 = Math.ceil(10000000 / (2 * arr2[length4 - 1]));
            const _Array3 = Array;
            const self5 = this;
            const self6 = this;
            const array7 = new Array(length6);
            let num22 = 0;
            let num23 = 0;
            let num24 = 0;
            let num25 = 0;
            if (0 < value2.length) {
              do {
                let sum1 = value2[num23] * rounded2 + num22;
                let _Math8 = Math;
                let rounded3 = Math.floor(sum1 / 10000000);
                array7[num23] = sum1 - rounded3 * 10000000;
                num23 = num23 + 1;
                num22 = rounded3;
                num24 = rounded3;
                num25 = num23;
              } while (num23 < value2.length);
            }
            if (num24 > 0) {
              do {
                array7[num25] = num24 % 10000000;
                let _Math9 = Math;
                let sum2 = num25 + 1;
                num24 = Math.floor(num24 / 10000000);
                num25 = sum2;
              } while (num24 > 0);
            }
            const _Array4 = Array;
            const self7 = this;
            const self8 = this;
            const array8 = new Array(length7);
            let num26 = 0;
            let num27 = 0;
            let num28 = 0;
            let num29 = 0;
            if (0 < arr2.length) {
              do {
                let sum3 = arr2[num27] * rounded2 + num26;
                let _Math10 = Math;
                let rounded4 = Math.floor(sum3 / 10000000);
                array8[num27] = sum3 - rounded4 * 10000000;
                num27 = num27 + 1;
                num26 = rounded4;
                num28 = rounded4;
                num29 = num27;
              } while (num27 < arr2.length);
            }
            if (num28 > 0) {
              do {
                array8[num29] = num28 % 10000000;
                let _Math11 = Math;
                let sum4 = num29 + 1;
                num28 = Math.floor(num28 / 10000000);
                num29 = sum4;
              } while (num28 > 0);
            }
            if (array7.length <= value2.length) {
              array7.push(0);
            }
            array8.push(0);
            let diff2 = length3 - length4;
            if (diff2 >= 0) {
              do {
                let num31 = 9999999;
                if (array7[diff2 + length4] !== tmp49) {
                  let _Math12 = Math;
                  num31 = Math.floor((array7[diff2 + length4] * 10000000 + array7[diff2 + length4 - 1]) / tmp49);
                }
                let length8 = array8.length;
                let num32 = 0;
                let num33 = 0;
                let num34 = 0;
                let num35 = 0;
                if (0 < length8) {
                  do {
                    let num36;
                    let sum5 = num34 + num31 * array8[num32];
                    let _Math13 = Math;
                    let rounded5 = Math.floor(sum5 / 10000000);
                    let sum6 = num33 + (array7[diff2 + num32] - (sum5 - rounded5 * 10000000));
                    if (sum6 < 0) {
                      array7[diff2 + num32] = sum6 + 10000000;
                      num36 = num7;
                    } else {
                      array7[diff2 + num32] = sum6;
                      num36 = 0;
                    }
                    num32 = num32 + 1;
                    num33 = num36;
                    num34 = rounded5;
                    num35 = num36;
                  } while (num32 < length8);
                }
                let tmp56 = num31;
                let tmp57 = num31;
                if (0 !== num35) {
                  do {
                    let diff3 = tmp56 - 1;
                    let num37 = 0;
                    let num38 = 0;
                    let num39 = 0;
                    if (0 < length8) {
                      do {
                        let num40;
                        let sum7 = num38 + (array7[diff2 + num37] - 10000000 + array8[num37]);
                        if (sum7 < 0) {
                          array7[diff2 + num37] = sum7 + 10000000;
                          num40 = 0;
                        } else {
                          array7[diff2 + num37] = sum7;
                          num40 = 1;
                        }
                        num37 = num37 + 1;
                        num38 = num40;
                        num39 = num40;
                      } while (num37 < length8);
                    }
                    num35 = num35 + num39;
                    tmp56 = diff3;
                    tmp57 = diff3;
                  } while (0 !== num35);
                }
                array6[diff2] = tmp57;
                diff2 = diff2 - 1;
              } while (diff2 >= 0);
            }
            const _Array5 = Array;
            const self9 = this;
            const self10 = this;
            const array9 = new Array(length9);
            for (let num41 = 0; num41 < length9; num41 = num41 + 1) {
              array9[num41] = 0;
            }
            let diff4 = length9 - 1;
            let num42 = 0;
            let num43 = 0;
            if (0 <= diff4) {
              do {
                let rounded6;
                let sum8 = num42 * 10000000 + array7[diff4];
                let result5 = sum8 / rounded2;
                if (0 < result5) {
                  let _Math15 = Math;
                  rounded6 = Math.floor(result5);
                } else {
                  let _Math14 = Math;
                  rounded6 = Math.ceil(result5);
                }
                num42 = sum8 - rounded6 * rounded2;
                array9[diff4] = rounded6 | 0;
                diff4 = diff4 - 1;
                num43 = num42;
              } while (0 <= diff4);
            }
            const items13 = [array9, num43 | 0];
            const first = items13[0];
            const items14 = [arrayToSmall(array6), arrayToSmall(first)];
            items17 = items14;
          } else {
            let length2 = value2.length;
            const items15 = [];
            let items16 = [];
            let tmp29 = items16;
            while (length2) {
              let num8;
              let tmp27;
              let diff5 = length2 - 1;
              let arr4 = items16.unshift(value2[diff5]);
              let diff6 = items16.length - 1;
              let tmp8 = diff6;
              let tmp9 = diff6;
              if (0 === items16[diff6]) {
                do {
                  let diff7 = tmp8 - 1;
                  tmp8 = diff7;
                  tmp9 = diff7;
                  tmp11 = items16[diff7];
                } while (0 === tmp11);
              }
              items16.length = tmp9 + 1;
              if (items16.length !== arr2.length) {
                let num10 = num7;
                if (items16.length > arr2.length) {
                  num10 = 1;
                }
                num8 = num10;
              } else {
                let diff8 = items16.length - 1;
                num8 = 0;
                if (0 <= diff8) {
                  while (items16[diff8] === arr2[diff8]) {
                    diff8 = diff8 - 1;
                    num8 = 0;
                  }
                  let num9 = num7;
                  if (items16[diff8] > arr2[diff8]) {
                    num9 = 1;
                  }
                  num8 = num9;
                }
              }
              if (num8 < 0) {
                let arr5 = items15.push(0);
                tmp27 = items16;
              } else {
                let array10;
                let tmp24;
                let length12 = items16.length;
                let sum9 = items16[length12 - 1] * 10000000 + items16[length12 - 2];
                let result6 = sum9;
                let sum10 = arr2[length11 - 1] * 10000000 + arr2[length11 - 2];
                if (length12 > length11) {
                  result6 = (sum9 + 1) * 10000000;
                }
                let _Math4 = Math;
                let rounded7 = Math.ceil(result6 / sum10);
                while (true) {
                  let num15;
                  length = arr2.length;
                  let _Array = Array;
                  let self = this;
                  let self2 = this;
                  array10 = new Array(length);
                  let num11 = 0;
                  let num12 = 0;
                  let num13 = 0;
                  let num14 = 0;
                  if (0 < length) {
                    do {
                      let sum11 = arr2[num12] * rounded7 + num11;
                      let _Math5 = Math;
                      let rounded8 = Math.floor(sum11 / 10000000);
                      array10[num12] = sum11 - rounded8 * 10000000;
                      num12 = num12 + 1;
                      num11 = rounded8;
                      num13 = rounded8;
                      num14 = num12;
                    } while (num12 < length);
                  }
                  if (num13 > 0) {
                    do {
                      array10[num14] = num13 % 10000000;
                      let _Math6 = Math;
                      let sum12 = num14 + 1;
                      num13 = Math.floor(num13 / 10000000);
                      num14 = sum12;
                    } while (num13 > 0);
                  }
                  if (array10.length !== items16.length) {
                    let num17 = num7;
                    if (array10.length > items16.length) {
                      num17 = 1;
                    }
                    num15 = num17;
                  } else {
                    let diff9 = array10.length - 1;
                    num15 = 0;
                    if (0 <= diff9) {
                      while (array10[diff9] === items16[diff9]) {
                        diff9 = diff9 - 1;
                        num15 = 0;
                      }
                      let num16 = num7;
                      if (array10[diff9] > items16[diff9]) {
                        num16 = 1;
                      }
                      num15 = num16;
                    }
                  }
                  tmp24 = rounded7;
                  if (num15 <= 0) {
                    break;
                  } else {
                    rounded7 = rounded7 - 1;
                    tmp24 = rounded7;
                    if (!tmp24) {
                      break;
                    }
                  }
                }
                let arr6 = items15.push(tmp24);
                tmp27 = subtract(items16, array10);
              }
              items16 = tmp27;
              tmp29 = tmp27;
              length2 = diff5;
            }
            const reversed = items15.reverse();
            items17 = [arrayToSmall(items15), arrayToSmall(tmp29)];
          }
          const first1 = items17[0];
          const sign = self3.sign;
          if (typeof first1 === "number") {
            let tmp75 = first1;
            if (self3.sign !== iter.sign) {
              tmp75 = -first1;
            }
            Object.create(SmallInteger.prototype);
            obj38 = { value: tmp75, sign: tmp75 < 0, isSmall: true };
            const obj = { value: tmp75, sign: tmp75 < 0, isSmall: true };
          } else {
            Object.create(BigInteger.prototype);
            obj38 = { value: first1, sign: self3.sign !== iter.sign, isSmall: false };
          }
          if (typeof items17[1] === "number") {
            let tmp78 = tmp74;
            if (sign) {
              tmp78 = -tmp74;
            }
            Object.create(SmallInteger.prototype);
            obj42 = { value: tmp78, sign: tmp78 < 0, isSmall: true };
            const obj40 = { value: tmp78, sign: tmp78 < 0, isSmall: true };
          } else {
            Object.create(BigInteger.prototype);
            obj42 = { value: items17[1], sign, isSmall: false };
          }
          const items18 = [obj38, obj42];
          return items18;
        }
      }
    }
  }
}
function millerRabinTest(absResult1, items) {
  let isEvenResult;
  const prevResult = absResult1.prev();
  let num = 0;
  let obj2 = prevResult;
  let num2 = 0;
  let tmp = prevResult;
  if (prevResult.isEven()) {
    do {
      let divideResult = obj2.divide(2);
      num = num + 1;
      obj2 = divideResult;
      num2 = num;
      tmp = divideResult;
      isEvenResult = divideResult.isEven();
    } while (isEvenResult);
  }
  const diff = num2 - 1;
  let num3 = 0;
  if (0 < items.length) {
    label0:
    while (true) {
      if (!absResult1.lesser(items[num3])) {
        let obj4 = items(items[num3]);
        let modPowResult = obj4.modPow(tmp, absResult1);
        if (!modPowResult.isUnit()) {
          if (!modPowResult.equals(prevResult)) {
            let diff1 = diff;
            if (0 === diff) {
              break;
            } else {
              let squareResult = modPowResult.square();
              let modResult = squareResult.mod(absResult1);
              while (!modResult.isUnit()) {
                if (!modResult.equals(prevResult)) {
                  diff1 = diff1 - 1;
                  modPowResult = modResult;
                  if (0 !== diff1) {
                    continue;
                  } else {
                    break label0;
                  }
                  let flag = false;
                  return false;
                }
                continue;
              }
              let flag2 = false;
              return false;
            }
          }
        }
      }
      num3 = num3 + 1;
    }
  }
  return true;
}
function bitwise(isNegative, arg1, fn) {
  let tmp16;
  const obj = parseValue(arg1);
  const isNegativeResult = isNegative.isNegative();
  const isNegativeResult1 = obj.isNegative();
  let notResult = isNegative;
  if (isNegativeResult) {
    notResult = isNegative.not();
  }
  let notResult1 = obj;
  if (isNegativeResult1) {
    notResult1 = obj.not();
  }
  items = [];
  let tmp3 = notResult1;
  let tmp4 = notResult;
  if (!notResult.isZero()) {
    while (true) {
      let tmp7 = divModAny(tmp4, closure_19);
      let obj4 = tmp7[1];
      let toJSNumberResult = obj4.toJSNumber();
      let diff = toJSNumberResult;
      if (isNegativeResult) {
        diff = closure_19 - 1 - toJSNumberResult;
      }
      let tmp5Result = divModAny(tmp3, closure_19);
      let obj5 = tmp5Result[1];
      let toJSNumberResult1 = obj5.toJSNumber();
      let diff1 = toJSNumberResult1;
      if (isNegativeResult1) {
        diff1 = closure_19 - 1 - toJSNumberResult1;
      }
      let first = tmp7[0];
      let first1 = tmp5Result[0];
      let arr = items.push(fn(diff, diff1));
      tmp3 = first1;
      tmp4 = first;
      if (!first.isZero()) {
        continue;
      } else {
        tmp3 = first1;
        tmp4 = first;
        if (first1.isZero()) {
          break;
        }
      }
      continue;
    }
  } else {
    tmp3 = notResult1;
    tmp4 = notResult;
  }
  let num = 0;
  if (isNegativeResult) {
    num = 1;
  }
  let num2 = 0;
  if (isNegativeResult1) {
    num2 = 1;
  }
  if (0 !== fn(num, num2)) {
    tmp16 = Integer(-1);
  } else {
    tmp16 = Integer(0);
  }
  let diff2 = items.length - 1;
  let addResult = tmp16;
  let tmp19 = tmp16;
  if (0 <= diff2) {
    do {
      let multiplyResult = addResult.multiply(closure_19);
      addResult = multiplyResult.add(Integer(items[diff2]));
      diff2 = diff2 - 1;
      tmp19 = addResult;
    } while (0 <= diff2);
  }
  return tmp19;
}
function integerLogarithm(self2, squareResult) {
  let e;
  let p;
  if (squareResult.compareTo(self2) <= 0) {
    let obj3;
    ({ p, e } = integerLogarithm(self2, squareResult.square(squareResult)));
    integerLogarithm(self2, squareResult.square(squareResult));
    const multiplyResult = p.multiply(squareResult);
    if (multiplyResult.compareTo(self2) <= 0) {
      obj3 = { p: multiplyResult, e: 2 * e + 1 };
      const obj2 = { p: multiplyResult, e: 2 * e + 1 };
    } else {
      obj3 = { p, e: 2 * e };
    }
    return obj3;
  } else {
    const obj = { p: Integer(1), e: 0 };
    return obj;
  }
}
function gcd(absResult, absResult1) {
  let divide2Result;
  let divideResult2;
  let obj16;
  let subtractResult;
  const obj = parseValue(absResult);
  absResult = obj.abs();
  const obj3 = parseValue(absResult1);
  absResult1 = obj3.abs();
  if (absResult.equals(absResult1)) {
    return absResult;
  } else if (absResult.isZero()) {
    return absResult1;
  } else if (absResult1.isZero()) {
    return absResult;
  } else {
    let obj5 = tmp2;
    let tmp3 = absResult1;
    let obj6 = absResult;
    if (absResult.isEven()) {
      let obj7 = tmp2;
      let iter = absResult1;
      let iter2 = absResult;
      obj5 = tmp2;
      tmp3 = absResult1;
      obj6 = absResult;
      if (absResult1.isEven()) {
        while (true) {
          let tmp9;
          let tmp13;
          let value = iter2.value;
          if (typeof value === "number") {
            tmp9 = value | c21;
          } else if (typeof value === "bigint") {
            let _BigInt = BigInt;
            tmp9 = value | BigInt(c21);
          } else {
            tmp9 = value[0] + value[1] * 10000000 | 1073758208;
          }
          let value2 = iter.value;
          let tmp11 = tmp9 & -tmp9;
          if (typeof value2 === "number") {
            tmp13 = value2 | c21;
          } else if (typeof value2 === "bigint") {
            let _BigInt2 = BigInt;
            tmp13 = value2 | BigInt(c21);
          } else {
            tmp13 = value2[0] + value2[1] * 10000000 | 1073758208;
          }
          let tmp15 = tmp13 & -tmp13;
          let obj8 = parseValue(tmp11);
          let tmp17 = parseValue(tmp15);
          if (obj8.lesser(tmp17)) {
            tmp17 = obj8;
          }
          let divideResult = iter2.divide(tmp17);
          let divideResult1 = iter.divide(tmp17);
          let multiplyResult = obj7.multiply(tmp17);
          obj5 = multiplyResult;
          tmp3 = divideResult1;
          obj6 = divideResult;
          if (!divideResult.isEven()) {
            break;
          } else {
            obj7 = multiplyResult;
            iter = divideResult1;
            iter2 = divideResult;
            obj5 = multiplyResult;
            tmp3 = divideResult1;
            obj6 = divideResult;
            if (!divideResult1.isEven()) {
              break;
            }
          }
        }
      }
    }
    let iter3 = obj6;
    let obj11 = tmp3;
    let obj12 = obj6;
    if (obj6.isEven()) {
      do {
        let tmp22;
        let value3 = iter3.value;
        let divide = iter3.divide;
        if (typeof value3 === "number") {
          tmp22 = value3 | c21;
        } else if (typeof value3 === "bigint") {
          let _BigInt3 = BigInt;
          tmp22 = value3 | BigInt(c21);
        } else {
          tmp22 = value3[0] + value3[1] * 10000000 | 1073758208;
        }
        divideResult2 = divide(tmp22 & -tmp22);
        iter3 = divideResult2;
        obj11 = tmp3;
        obj12 = divideResult2;
      } while (divideResult2.isEven());
    }
    do {
      let iter4 = obj11;
      let tmp25 = obj11;
      if (obj11.isEven()) {
        do {
          let tmp28;
          let value4 = iter4.value;
          let divide2 = iter4.divide;
          if (typeof value4 === "number") {
            tmp28 = value4 | c21;
          } else if (typeof value4 === "bigint") {
            let _BigInt4 = BigInt;
            tmp28 = value4 | BigInt(c21);
          } else {
            tmp28 = value4[0] + value4[1] * 10000000 | 1073758208;
          }
          divide2Result = divide2(tmp28 & -tmp28);
          iter4 = divide2Result;
          tmp25 = divide2Result;
        } while (divide2Result.isEven());
      }
      let obj15 = tmp25;
      obj16 = obj12;
      if (obj12.greater(tmp25)) {
        obj15 = obj12;
        obj16 = tmp25;
      }
      subtractResult = obj15.subtract(obj16);
      obj11 = subtractResult;
      obj12 = obj16;
    } while (!subtractResult.isZero());
    let multiplyResult1 = obj16;
    if (!obj5.isUnit()) {
      multiplyResult1 = obj16.multiply(obj5);
    }
    return multiplyResult1;
  }
}
function toBase(self, arg1) {
  let apply;
  let applyResult;
  let applyResult2;
  let concat;
  let quotient;
  let remainder;
  const obj = items(arg1);
  if (obj.isZero()) {
    if (self.isZero()) {
      return { value: [0], isNegative: false };
    } else {
      const _Error = Error;
      self = this;
      const self2 = this;
      const error = new Error("Cannot convert nonzero numbers to base 0.");
      throw error;
    }
  } else if (obj.equals(-1)) {
    if (self.isZero()) {
      return { value: [0], isNegative: false };
    } else if (self.isNegative()) {
      const concat2 = [].concat;
      const _Array6 = Array;
      const _Array7 = Array;
      const obj6 = { value: apply([], applyResult.map(Array.prototype.valueOf, [1, 0])), isNegative: false };
      apply = concat2.apply;
      const _Array8 = Array;
      applyResult = Array.apply(null, Array(-self.toJSNumber()));
      return obj6;
    } else {
      const _Array3 = Array;
      const _Array4 = Array;
      const _Array5 = Array;
      const applyResult1 = Array.apply(null, Array(self.toJSNumber() - 1));
      const mapped = applyResult1.map(Array.prototype.valueOf, [0, 1]);
      mapped.unshift([1]);
      const obj7 = { value: concat.apply([], mapped), isNegative: false };
      concat = [].concat;
      return obj7;
    }
  } else {
    let flag = false;
    let absResult = self;
    const tmp = self.isNegative() && obj.isPositive();
    if (tmp) {
      absResult = self.abs();
      flag = true;
    }
    if (obj.isUnit()) {
      let obj9;
      if (absResult.isZero()) {
        obj9 = { value: [0], isNegative: false };
        const obj8 = { value: [0], isNegative: false };
      } else {
        obj9 = { value: applyResult2.map(Number.prototype.valueOf, 1), isNegative: flag };
        const _Array = Array;
        const _Array2 = Array;
        const _Number = Number;
        applyResult2 = Array.apply(null, Array(absResult.toJSNumber()));
      }
      return obj9;
    } else {
      let obj4;
      items = [];
      let obj3 = absResult;
      if (absResult.isNegative()) {
        while (true) {
          let divmodResult = obj3.divmod(obj);
          ({ quotient, remainder } = divmodResult);
          let absResult1 = remainder;
          let nextResult = quotient;
          if (remainder.isNegative()) {
            let minusResult = obj.minus(remainder);
            absResult1 = minusResult.abs();
            nextResult = quotient.next();
          }
          let arr2 = items.push(absResult1.toJSNumber());
          obj3 = nextResult;
          if (nextResult.isNegative()) {
            continue;
          } else {
            obj3 = nextResult;
            obj4 = nextResult;
            if (nextResult.compareAbs(obj) < 0) {
              break;
            }
          }
          continue;
        }
      } else {
        obj3 = absResult;
        obj4 = absResult;
      }
      items.push(obj4.toJSNumber());
      const obj10 = { value: items.reverse(), isNegative: flag };
      return obj10;
    }
  }
}
function parseStringValue(arr) {
  let tmp26;
  let tmp2 = -9007199254740992 < tmp;
  if (-9007199254740992 < +arr) {
    tmp2 = tmp < 9007199254740992;
  }
  if (tmp2) {
    let rounded;
    if (0 < +arr) {
      const _Math4 = Math;
      rounded = Math.floor(tmp43);
    } else {
      const _Math3 = Math;
      rounded = Math.ceil(tmp43);
    }
    if (+arr === rounded) {
      let obj4;
      if (closure_2) {
        const _BigInt2 = BigInt;
        const BigIntResult = BigInt(+arr);
        const obj2 = Object.create(NativeBigInt.prototype);
        obj2.value = BigIntResult;
        obj4 = obj2;
      } else {
        Object.create(SmallInteger.prototype);
        obj4 = { value: +arr, sign: +arr < 0, isSmall: true };
      }
      return obj4;
    } else {
      const _Error5 = Error;
      const self9 = this;
      const self10 = this;
      const error = new Error("Invalid integer: " + arr);
      throw error;
    }
  } else {
    let str2 = arr;
    if ("-" === arr[0]) {
      str2 = arr.slice(1);
    }
    const parts = str2.split(/e/i);
    if (parts.length > 2) {
      const _Error4 = Error;
      const self7 = this;
      const self8 = this;
      const error1 = new Error("Invalid integer: " + parts.join("e"));
      throw error1;
    } else {
      if (2 === parts.length) {
        let rounded1;
        let substr = arr4;
        if ("+" === parts[1][0]) {
          substr = arr4.slice(1);
        }
        if (0 < +substr) {
          const _Math2 = Math;
          rounded1 = Math.floor(tmp5);
        } else {
          const _Math = Math;
          rounded1 = Math.ceil(tmp5);
        }
        if (+substr === rounded1) {
          let tmp9 = -9007199254740992 < tmp5;
          if (-9007199254740992 < +substr) {
            tmp9 = tmp5 < 9007199254740992;
          }
          if (tmp9) {
            const first = parts[0];
            const index = first.indexOf(".");
            let sum = first;
            let diff = tmp5;
            if (index >= 0) {
              diff = tmp5 - (first.length - index - 1);
              const substr1 = first.slice(0, index);
              sum = substr1 + first.slice(index + 1);
            }
            if (diff < 0) {
              const _Error2 = Error;
              const self3 = this;
              const self4 = this;
              const error2 = new Error("Cannot include negative exponent part for integers");
              throw error2;
            } else {
              const _Array = Array;
              const self11 = this;
              const self12 = this;
              const array = new Array(diff + 1);
              str2 = sum + array.join("0");
            }
          }
        }
        const _Error3 = Error;
        const self5 = this;
        const self6 = this;
        const error3 = new Error("Invalid integer: " + tmp5 + " is not a valid exponent.");
        throw error3;
      }
      const obj = /^([0-9][0-9]*)$/;
      if (obj.test(str2)) {
        if (closure_2) {
          let text = str2;
          const _BigInt = BigInt;
          if ("-" === arr[0]) {
            text = `-${str2}`;
          }
          const _BigIntResult = _BigInt(text);
          const obj10 = Object.create(NativeBigInt.prototype);
          obj10.value = _BigIntResult;
          return obj10;
        } else {
          items = [];
          length = str2.length;
          let diff1 = length - 7;
          if (length > 0) {
            do {
              arr = items.push(+str2.slice(diff1, length));
              let num10 = diff1 - 7;
              if (num10 < 0) {
                num10 = 0;
              }
              length = length - 7;
              diff1 = num10;
            } while (0 < length);
          }
          const diff2 = items.length - 1;
          let tmp23 = diff2;
          let tmp24 = diff2;
          if (0 === items[diff2]) {
            do {
              let diff3 = tmp23 - 1;
              tmp23 = diff3;
              tmp24 = diff3;
              tmp26 = items[diff3];
            } while (0 === tmp26);
          }
          items.length = tmp24 + 1;
          Object.create(BigInteger.prototype);
          return { value: items, sign: "-" === arr[0], isSmall: false };
        }
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error4 = new Error("Invalid integer: " + str2);
        throw error4;
      }
    }
  }
}
function parseValue(value) {
  let tmp2;
  if (typeof value === "number") {
    let tmp6;
    if (closure_2) {
      const _BigInt = BigInt;
      const BigIntResult = BigInt(value);
      const obj4 = Object.create(NativeBigInt.prototype);
      obj4.value = BigIntResult;
      tmp6 = obj4;
    } else {
      const tmp4 = -9007199254740992 < value && value < 9007199254740992;
      if (tmp4) {
        let rounded;
        if (value > 0) {
          const _Math2 = Math;
          rounded = Math.floor(value);
        } else {
          const _Math = Math;
          rounded = Math.ceil(value);
        }
        if (value !== rounded) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error(value + " is not an integer.");
          throw error;
        } else {
          Object.create(SmallInteger.prototype);
          tmp6 = { value, sign: value < 0, isSmall: true };
          const obj = { value, sign: value < 0, isSmall: true };
        }
      } else {
        tmp6 = parseStringValue(value.toString());
      }
    }
    tmp2 = tmp6;
  } else if (typeof value === "string") {
    tmp2 = parseStringValue(value);
  } else {
    tmp2 = value;
    if (typeof value === "bigint") {
      const obj6 = Object.create(NativeBigInt.prototype);
      obj6.value = value;
      tmp2 = obj6;
    }
  }
  return tmp2;
}
let items = [4740992, Math.floor(900719925.4740992) % 10000000, Math.floor(90.07199254740992)];
let c1 = "0123456789abcdefghijklmnopqrstuvwxyz";
let closure_2 = typeof BigInt === "function";
BigInteger.prototype = Object.create(Integer.prototype);
SmallInteger.prototype = Object.create(Integer.prototype);
NativeBigInt.prototype = Object.create(Integer.prototype);
BigInteger.prototype.plus = BigInteger.prototype.add;
SmallInteger.prototype.plus = SmallInteger.prototype.add;
NativeBigInt.prototype.plus = NativeBigInt.prototype.add;
BigInteger.prototype.minus = BigInteger.prototype.subtract;
SmallInteger.prototype.minus = SmallInteger.prototype.subtract;
NativeBigInt.prototype.minus = NativeBigInt.prototype.subtract;
BigInteger.prototype.times = BigInteger.prototype.multiply;
SmallInteger.prototype.times = SmallInteger.prototype.multiply;
NativeBigInt.prototype.times = NativeBigInt.prototype.multiply;
const divmod = BigInteger.prototype.divmod;
SmallInteger.prototype.divmod = divmod;
NativeBigInt.prototype.divmod = divmod;
const fn = function(arg0) {
  const result = this.value / parseValue(arg0).value;
  const obj = Object.create(NativeBigInt.prototype);
  obj.value = result;
  return obj;
};
NativeBigInt.prototype.divide = fn;
NativeBigInt.prototype.over = fn;
let divide = BigInteger.prototype.divide;
BigInteger.prototype.over = divide;
SmallInteger.prototype.divide = divide;
SmallInteger.prototype.over = divide;
const fn2 = function(arg0) {
  const result = this.value % parseValue(arg0).value;
  const obj = Object.create(NativeBigInt.prototype);
  obj.value = result;
  return obj;
};
NativeBigInt.prototype.remainder = fn2;
NativeBigInt.prototype.mod = fn2;
const mod = BigInteger.prototype.mod;
BigInteger.prototype.remainder = mod;
SmallInteger.prototype.mod = mod;
SmallInteger.prototype.remainder = mod;
SmallInteger.prototype.pow = BigInteger.prototype.pow;
const modPow = BigInteger.prototype.modPow;
SmallInteger.prototype.modPow = modPow;
NativeBigInt.prototype.modPow = modPow;
BigInteger.prototype.compareTo = BigInteger.prototype.compare;
SmallInteger.prototype.compareTo = SmallInteger.prototype.compare;
NativeBigInt.prototype.compareTo = NativeBigInt.prototype.compare;
const equals = BigInteger.prototype.equals;
BigInteger.prototype.eq = equals;
SmallInteger.prototype.equals = equals;
SmallInteger.prototype.eq = equals;
NativeBigInt.prototype.equals = equals;
NativeBigInt.prototype.eq = equals;
const notEquals = BigInteger.prototype.notEquals;
BigInteger.prototype.neq = notEquals;
SmallInteger.prototype.notEquals = notEquals;
SmallInteger.prototype.neq = notEquals;
NativeBigInt.prototype.notEquals = notEquals;
NativeBigInt.prototype.neq = notEquals;
const greater = BigInteger.prototype.greater;
BigInteger.prototype.gt = greater;
SmallInteger.prototype.greater = greater;
SmallInteger.prototype.gt = greater;
NativeBigInt.prototype.greater = greater;
NativeBigInt.prototype.gt = greater;
const lesser = BigInteger.prototype.lesser;
BigInteger.prototype.lt = lesser;
SmallInteger.prototype.lesser = lesser;
SmallInteger.prototype.lt = lesser;
NativeBigInt.prototype.lesser = lesser;
NativeBigInt.prototype.lt = lesser;
const greaterOrEquals = BigInteger.prototype.greaterOrEquals;
BigInteger.prototype.geq = greaterOrEquals;
SmallInteger.prototype.greaterOrEquals = greaterOrEquals;
SmallInteger.prototype.geq = greaterOrEquals;
NativeBigInt.prototype.greaterOrEquals = greaterOrEquals;
NativeBigInt.prototype.geq = greaterOrEquals;
const lesserOrEquals = BigInteger.prototype.lesserOrEquals;
BigInteger.prototype.leq = lesserOrEquals;
SmallInteger.prototype.lesserOrEquals = lesserOrEquals;
SmallInteger.prototype.leq = lesserOrEquals;
NativeBigInt.prototype.lesserOrEquals = lesserOrEquals;
NativeBigInt.prototype.leq = lesserOrEquals;
NativeBigInt.prototype.isPositive = SmallInteger.prototype.isPositive;
NativeBigInt.prototype.isNegative = SmallInteger.prototype.isNegative;
const isDivisibleBy = BigInteger.prototype.isDivisibleBy;
SmallInteger.prototype.isDivisibleBy = isDivisibleBy;
NativeBigInt.prototype.isDivisibleBy = isDivisibleBy;
const isPrime = BigInteger.prototype.isPrime;
SmallInteger.prototype.isPrime = isPrime;
NativeBigInt.prototype.isPrime = isPrime;
const isProbablePrime = BigInteger.prototype.isProbablePrime;
SmallInteger.prototype.isProbablePrime = isProbablePrime;
NativeBigInt.prototype.isProbablePrime = isProbablePrime;
const modInv = BigInteger.prototype.modInv;
SmallInteger.prototype.modInv = modInv;
NativeBigInt.prototype.modInv = modInv;
let items1 = [1];
if (2 * items1[items1.length - 1] <= 10000000) {
  class Integer {
    constructor(items, arg1, arg2, arg3) {
      let first;
      let length2;
      let obj2;
      let timesResult;
      let tmp14;
      let tmp25;
      let tmp7;
      if (undefined === items) {
        first = Integer[0];
      } else {
        if (undefined !== arg1) {
          let str = arg2;
          if (typeof parseBase === "function") {
            if (!str) {
              str = c1;
            }
            const _String = String;
            const str2 = String(items);
            let formatted1 = str;
            let formatted = str2;
            if (!arg3) {
              formatted = str2.toLowerCase();
              formatted1 = str.toLowerCase();
            }
            const _Math = Math;
            length = formatted.length;
            const absolute = Math.abs(arg1);
            const obj = {};
            let num4 = 0;
            if (0 < formatted1.length) {
              do {
                obj[formatted1[num4]] = num4;
                num4 = num4 + 1;
                length2 = formatted1.length;
              } while (num4 < length2);
            }
            let num5 = 0;
            if (0 < length) {
              while (true) {
                tmp7 = formatted[num5];
                if ("-" !== tmp7) {
                  if (tmp7 in obj) {
                    if (obj[tmp7] >= absolute) {
                      if ("1" !== tmp7) {
                        break;
                      } else if (1 !== absolute) {
                        break;
                      }
                    }
                  }
                }
                num5 = num5 + 1;
              }
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error(tmp7 + " is not a valid digit in base " + arg1 + ".");
              throw error;
            }
            let num6 = 0;
            const tmp12 = parseValue(arg1);
            if ("-" === formatted[0]) {
              num6 = 1;
            }
            items = [];
            if (num6 < formatted.length) {
              while (true) {
                let sum;
                tmp14 = formatted[num6];
                if (tmp14 in obj) {
                  let arr = items.push(parseValue(obj[tmp14]));
                  sum = num6;
                } else {
                  let tmp16 = num6;
                  if ("<" !== tmp14) {
                    break;
                  } else {
                    sum = tmp16 + 1;
                    while (">" !== formatted[sum]) {
                      tmp16 = sum;
                      if (sum >= formatted.length) {
                        break;
                      }
                    }
                    let arr2 = items.push(parseValue(formatted.slice(num6 + 1, sum)));
                  }
                }
                num6 = sum + 1;
              }
              const _Error2 = Error;
              const self3 = this;
              const self4 = this;
              const error1 = new Error(tmp14 + " is not a valid character");
              throw error1;
            }
            [tmp25, obj2] = Integer;
            let diff = items.length - 1;
            let addResult = tmp25;
            let obj4 = tmp25;
            if (0 <= diff) {
              do {
                let obj5 = items[diff];
                addResult = addResult.add(obj5.times(timesResult));
                timesResult = timesResult.times(tmp12);
                diff = diff - 1;
                obj4 = addResult;
              } while (0 <= diff);
            }
            let negateResult = obj4;
            if ("-" === formatted[0]) {
              negateResult = obj4.negate();
            }
            first = negateResult;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        first = parseValue(items);
      }
      return first;
    }
  }
}
let length = items1.length;
let closure_19 = items1[length - 1];
const shiftLeft = BigInteger.prototype.shiftLeft;
SmallInteger.prototype.shiftLeft = shiftLeft;
NativeBigInt.prototype.shiftLeft = shiftLeft;
const shiftRight = BigInteger.prototype.shiftRight;
SmallInteger.prototype.shiftRight = shiftRight;
NativeBigInt.prototype.shiftRight = shiftRight;
const not = BigInteger.prototype.not;
SmallInteger.prototype.not = not;
NativeBigInt.prototype.not = not;
const and = BigInteger.prototype.and;
SmallInteger.prototype.and = and;
NativeBigInt.prototype.and = and;
const or = BigInteger.prototype.or;
SmallInteger.prototype.or = or;
NativeBigInt.prototype.or = or;
const xor = BigInteger.prototype.xor;
SmallInteger.prototype.xor = xor;
NativeBigInt.prototype.xor = xor;
let c21 = 1073741824;
const bitLength = BigInteger.prototype.bitLength;
SmallInteger.prototype.bitLength = bitLength;
NativeBigInt.prototype.bitLength = bitLength;
function parseBase(arg0, arg1, arg2, arg3) {

}
NativeBigInt.prototype.toString = SmallInteger.prototype.toString;
const fn3 = function() {
  return this.toString();
};
SmallInteger.prototype.toJSON = fn3;
BigInteger.prototype.toJSON = fn3;
NativeBigInt.prototype.toJSON = fn3;
BigInteger.prototype.toJSNumber = BigInteger.prototype.valueOf;
SmallInteger.prototype.toJSNumber = SmallInteger.prototype.valueOf;
const fn4 = function() {
  return parseInt(this.toString(), 10);
};
NativeBigInt.prototype.toJSNumber = fn4;
NativeBigInt.prototype.valueOf = fn4;
let num = 0;
while (true) {
  class Integer {
    constructor(items, arg1, arg2, arg3) {
      let first;
      let length2;
      let obj2;
      let timesResult;
      let tmp14;
      let tmp25;
      let tmp7;
      if (undefined === items) {
        first = Integer[0];
      } else {
        if (undefined !== arg1) {
          let str = arg2;
          if (typeof parseBase === "function") {
            if (!str) {
              str = c1;
            }
            const _String = String;
            const str2 = String(items);
            let formatted1 = str;
            let formatted = str2;
            if (!arg3) {
              formatted = str2.toLowerCase();
              formatted1 = str.toLowerCase();
            }
            const _Math = Math;
            length = formatted.length;
            const absolute = Math.abs(arg1);
            const obj = {};
            let num4 = 0;
            if (0 < formatted1.length) {
              do {
                obj[formatted1[num4]] = num4;
                num4 = num4 + 1;
                length2 = formatted1.length;
              } while (num4 < length2);
            }
            let num5 = 0;
            if (0 < length) {
              while (true) {
                tmp7 = formatted[num5];
                if ("-" !== tmp7) {
                  if (tmp7 in obj) {
                    if (obj[tmp7] >= absolute) {
                      if ("1" !== tmp7) {
                        break;
                      } else if (1 !== absolute) {
                        break;
                      }
                    }
                  }
                }
                num5 = num5 + 1;
              }
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error(tmp7 + " is not a valid digit in base " + arg1 + ".");
              throw error;
            }
            let num6 = 0;
            const tmp12 = parseValue(arg1);
            if ("-" === formatted[0]) {
              num6 = 1;
            }
            items = [];
            if (num6 < formatted.length) {
              while (true) {
                let sum;
                tmp14 = formatted[num6];
                if (tmp14 in obj) {
                  let arr = items.push(parseValue(obj[tmp14]));
                  sum = num6;
                } else {
                  let tmp16 = num6;
                  if ("<" !== tmp14) {
                    break;
                  } else {
                    sum = tmp16 + 1;
                    while (">" !== formatted[sum]) {
                      tmp16 = sum;
                      if (sum >= formatted.length) {
                        break;
                      }
                    }
                    let arr2 = items.push(parseValue(formatted.slice(num6 + 1, sum)));
                  }
                }
                num6 = sum + 1;
              }
              const _Error2 = Error;
              const self3 = this;
              const self4 = this;
              const error1 = new Error(tmp14 + " is not a valid character");
              throw error1;
            }
            [tmp25, obj2] = Integer;
            let diff = items.length - 1;
            let addResult = tmp25;
            let obj4 = tmp25;
            if (0 <= diff) {
              do {
                let obj5 = items[diff];
                addResult = addResult.add(obj5.times(timesResult));
                timesResult = timesResult.times(tmp12);
                diff = diff - 1;
                obj4 = addResult;
              } while (0 <= diff);
            }
            let negateResult = obj4;
            if ("-" === formatted[0]) {
              negateResult = obj4.negate();
            }
            first = negateResult;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        first = parseValue(items);
      }
      return first;
    }
  }
  let tmp = num;
  if (0 < num) {
    class Integer {
      constructor(items, arg1, arg2, arg3) {
        let first;
        let length2;
        let obj2;
        let timesResult;
        let tmp14;
        let tmp25;
        let tmp7;
        if (undefined === items) {
          first = Integer[0];
        } else {
          if (undefined !== arg1) {
            let str = arg2;
            if (typeof parseBase === "function") {
              if (!str) {
                str = c1;
              }
              const _String = String;
              const str2 = String(items);
              let formatted1 = str;
              let formatted = str2;
              if (!arg3) {
                formatted = str2.toLowerCase();
                formatted1 = str.toLowerCase();
              }
              const _Math = Math;
              length = formatted.length;
              const absolute = Math.abs(arg1);
              const obj = {};
              let num4 = 0;
              if (0 < formatted1.length) {
                do {
                  obj[formatted1[num4]] = num4;
                  num4 = num4 + 1;
                  length2 = formatted1.length;
                } while (num4 < length2);
              }
              let num5 = 0;
              if (0 < length) {
                while (true) {
                  tmp7 = formatted[num5];
                  if ("-" !== tmp7) {
                    if (tmp7 in obj) {
                      if (obj[tmp7] >= absolute) {
                        if ("1" !== tmp7) {
                          break;
                        } else if (1 !== absolute) {
                          break;
                        }
                      }
                    }
                  }
                  num5 = num5 + 1;
                }
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error = new Error(tmp7 + " is not a valid digit in base " + arg1 + ".");
                throw error;
              }
              let num6 = 0;
              const tmp12 = parseValue(arg1);
              if ("-" === formatted[0]) {
                num6 = 1;
              }
              items = [];
              if (num6 < formatted.length) {
                while (true) {
                  let sum;
                  tmp14 = formatted[num6];
                  if (tmp14 in obj) {
                    let arr = items.push(parseValue(obj[tmp14]));
                    sum = num6;
                  } else {
                    let tmp16 = num6;
                    if ("<" !== tmp14) {
                      break;
                    } else {
                      sum = tmp16 + 1;
                      while (">" !== formatted[sum]) {
                        tmp16 = sum;
                        if (sum >= formatted.length) {
                          break;
                        }
                      }
                      let arr2 = items.push(parseValue(formatted.slice(num6 + 1, sum)));
                    }
                  }
                  num6 = sum + 1;
                }
                const _Error2 = Error;
                const self3 = this;
                const self4 = this;
                const error1 = new Error(tmp14 + " is not a valid character");
                throw error1;
              }
              [tmp25, obj2] = Integer;
              let diff = items.length - 1;
              let addResult = tmp25;
              let obj4 = tmp25;
              if (0 <= diff) {
                do {
                  let obj5 = items[diff];
                  addResult = addResult.add(obj5.times(timesResult));
                  timesResult = timesResult.times(tmp12);
                  diff = diff - 1;
                  obj4 = addResult;
                } while (0 <= diff);
              }
              let negateResult = obj4;
              if ("-" === formatted[0]) {
                negateResult = obj4.negate();
              }
              first = negateResult;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          first = parseValue(items);
        }
        return first;
      }
    }
    Integer[tmp2] = parseValue(tmp2);
  }
  class BigInteger {
    constructor(arg0, arg1) {

    }
    add(arg0) {
      const self = this;
      const iter = parseValue(arg0);
      if (this.sign !== iter.sign) {
        return self.subtract(iter.negate());
      } else {
        let obj;
        const value2 = self.value;
        const value = iter.value;
        if (iter.isSmall) {
          const _Math = Math;
          const absolute = Math.abs(value);
          const _Array = Array;
          const self2 = this;
          const self3 = this;
          const array = new Array(length);
          let num5 = 0;
          let sum1 = absolute;
          let num6 = 0;
          let rounded1 = absolute;
          if (0 < value2.length) {
            do {
              let sum = value2[num5] - 10000000 + sum1;
              let _Math2 = Math;
              let rounded = Math.floor(sum / 10000000);
              array[num5] = sum - rounded * 10000000;
              sum1 = rounded + 1;
              num5 = num5 + 1;
              rounded1 = sum1;
              num6 = num5;
            } while (num5 < value2.length);
          }
          if (rounded1 > 0) {
            do {
              array[num6] = rounded1 % 10000000;
              let _Math3 = Math;
              let sum2 = num6 + 1;
              rounded1 = Math.floor(rounded1 / 10000000);
              num6 = sum2;
            } while (rounded1 > 0);
          }
          const sign2 = self.sign;
          Object.create(BigInteger.prototype);
          obj = { value: array, sign: sign2, isSmall: false };
          const obj5 = { value: array, sign: sign2, isSmall: false };
        } else {
          const sign = self.sign;
          const tmp2 = addAny(value2, value);
          Object.create(BigInteger.prototype);
          obj = { value: tmp2, sign, isSmall: false };
        }
        return obj;
      }
    }
    subtract(arg0) {
      const self = this;
      const iter = parseValue(arg0);
      if (this.sign !== iter.sign) {
        return self.add(iter.negate());
      } else {
        let obj6;
        const value = self.value;
        const value2 = iter.value;
        if (iter.isSmall) {
          const _Math = Math;
          obj6 = subtractSmall(value, Math.abs(value2), self.sign);
        } else {
          let num3;
          let tmp4;
          let tmp5;
          const sign = self.sign;
          if (value.length !== value2.length) {
            let num5 = -1;
            if (value.length > value2.length) {
              num5 = 1;
            }
            num3 = num5;
          } else {
            let diff = value.length - 1;
            num3 = 0;
            if (0 <= diff) {
              while (value[diff] === value2[diff]) {
                diff = diff - 1;
                num3 = 0;
              }
              let num4 = -1;
              if (value[diff] > value2[diff]) {
                num4 = 1;
              }
              num3 = num4;
            }
          }
          if (0 <= num3) {
            tmp4 = subtract(value, value2);
            tmp5 = sign;
          } else {
            tmp4 = subtract(value2, value);
            tmp5 = !sign;
          }
          const tmp8 = arrayToSmall(tmp4);
          if (typeof tmp8 === "number") {
            let tmp9 = tmp8;
            if (tmp5) {
              tmp9 = -tmp8;
            }
            Object.create(SmallInteger.prototype);
            obj6 = { value: tmp9, sign: tmp9 < 0, isSmall: true };
            const obj = { value: tmp9, sign: tmp9 < 0, isSmall: true };
          } else {
            Object.create(BigInteger.prototype);
            obj6 = { value: tmp8, sign: tmp5, isSmall: false };
          }
        }
        return obj6;
      }
    }
    negate() {
      const value = this.value;
      const sign = !this.sign;
      Object.create(BigInteger.prototype);
      return { value, sign, isSmall: false };
    }
    abs() {
      const value = this.value;
      Object.create(BigInteger.prototype);
      return { value, sign: false, isSmall: false };
    }
    multiply(arg0) {
      let obj;
      const self = this;
      const iter = parseValue(arg0);
      const value2 = this.value;
      const value = iter.value;
      let arr2 = value;
      if (iter.isSmall) {
        if (0 === value) {
          return Integer[0];
        } else if (1 === value) {
          return self;
        } else if (-1 === value) {
          return self.negate();
        } else {
          const _Math6 = Math;
          const absolute = Math.abs(value);
          if (absolute < 10000000) {
            const _Array = Array;
            const self2 = this;
            const self3 = this;
            const array = new Array(length3);
            let num2 = 0;
            let num3 = 0;
            let num4 = 0;
            let num5 = 0;
            if (0 < value2.length) {
              do {
                let sum = value2[num3] * absolute + num2;
                let _Math4 = Math;
                let rounded = Math.floor(sum / 10000000);
                array[num3] = sum - rounded * 10000000;
                num3 = num3 + 1;
                num2 = rounded;
                num4 = rounded;
                num5 = num3;
              } while (num3 < value2.length);
            }
            if (num4 > 0) {
              do {
                array[num5] = num4 % 10000000;
                let _Math5 = Math;
                let sum1 = num5 + 1;
                num4 = Math.floor(num4 / 10000000);
                num5 = sum1;
              } while (num4 > 0);
            }
            Object.create(BigInteger.prototype);
            return { value: array, sign: this.sign !== iter.sign, isSmall: false };
          } else {
            let items2;
            if (absolute < 10000000) {
              items = [absolute];
              items2 = items;
            } else if (absolute < 100000000000000) {
              items1 = [absolute % 10000000, ];
              const _Math3 = Math;
              items1[1] = Math.floor(absolute / 10000000);
              items2 = items1;
            } else {
              items2 = [absolute % 10000000, , ];
              const _Math = Math;
              items2[1] = Math.floor(absolute / 10000000) % 10000000;
              const _Math2 = Math;
              items2[2] = Math.floor(absolute / 100000000000000);
            }
            arr2 = items2;
          }
        }
      }
      if (0 < -0.012 * value2.length - 0.012 * arr2.length + 0.000015 * value2.length * arr2.length) {
        const tmp8 = multiplyKaratsuba(value2, arr2);
        Object.create(BigInteger.prototype);
        obj = { value: tmp8, sign: this.sign !== iter.sign, isSmall: false };
        const obj9 = { value: tmp8, sign: this.sign !== iter.sign, isSmall: false };
      } else {
        const tmp4 = multiplyLong(value2, arr2);
        Object.create(BigInteger.prototype);
        obj = { value: tmp4, sign: this.sign !== iter.sign, isSmall: false };
      }
      return obj;
    }
    _multiplyBySmall(value) {
      let self2;
      if (0 === value.value) {
        self2 = Integer[0];
      } else {
        const self = this;
        self2 = this;
        if (1 !== value.value) {
          let negateResult;
          if (-1 === value.value) {
            negateResult = self.negate();
          } else {
            const _Math = Math;
            negateResult = multiplySmallAndArray(Math.abs(value.value), self.value, self.sign !== value.sign);
          }
          self2 = negateResult;
        }
      }
      return self2;
    }
    square() {
      const value = square(this.value);
      Object.create(BigInteger.prototype);
      return { value, sign: false, isSmall: false };
    }
    divmod(items1) {
      const tmp = divModAny(this, items1);
      return { quotient: tmp[0], remainder: tmp[1] };
    }
    divide(items1) {
      return divModAny(this, items1)[0];
    }
    mod(items1) {
      return divModAny(this, items1)[1];
    }
    pow(arg0) {
      let diff1;
      let self = this;
      const iter = parseValue(arg0);
      const value = this.value;
      const value2 = iter.value;
      if (0 === value2) {
        return Integer[1];
      } else if (0 === value) {
        return Integer[0];
      } else if (1 === value) {
        return Integer[1];
      } else if (-1 === value) {
        return iter.isEven() ? Integer[1] : Integer[-1];
      } else if (iter.sign) {
        return Integer[0];
      } else if (iter.isSmall) {
        if (self.isSmall) {
          const _Math = Math;
          const powResult = Math.pow(value, value2);
          const tmp6 = -9007199254740992 < powResult && powResult < 9007199254740992;
          if (tmp6) {
            let rounded;
            if (powResult > 0) {
              const _Math3 = Math;
              rounded = Math.floor(powResult);
            } else {
              const _Math2 = Math;
              rounded = Math.ceil(powResult);
            }
            Object.create(SmallInteger.prototype);
            return { value: rounded, sign: rounded < 0, isSmall: true };
          }
        }
        let diff = value2;
        let timesResult = obj;
        if (true & value2) {
          timesResult = obj.times(self);
          diff = value2 - 1;
        }
        let obj2 = timesResult;
        let tmp10 = timesResult;
        if (0 !== diff) {
          do {
            let result = diff / 2;
            let squareResult = self.square();
            diff1 = result;
            let timesResult1 = obj2;
            if (true & result) {
              timesResult1 = obj2.times(squareResult);
              diff1 = result - 1;
            }
            diff = diff1;
            obj2 = timesResult1;
            self = squareResult;
            tmp10 = timesResult1;
          } while (0 !== diff1);
        }
        return tmp10;
      } else {
        const _Error = Error;
        const self2 = this;
        const self3 = this;
        const error = new Error("The exponent " + iter.toString() + " is too large.");
        throw error;
      }
    }
    modPow(arg0, arg1) {
      const obj = parseValue(arg0);
      const obj2 = parseValue(arg1);
      if (obj2.isZero()) {
        const _Error = Error;
        const self2 = this;
        const self3 = this;
        const error = new Error("Cannot take modPow with modulus 0");
        throw error;
      } else {
        const self = this;
        const modResult = this.mod(obj2);
        let modInvResult = modResult;
        let multiplyResult = obj;
        if (obj.isNegative()) {
          multiplyResult = obj.multiply(Integer[-1]);
          modInvResult = modResult.modInv(obj2);
        }
        let obj6 = multiplyResult;
        let obj7 = tmp2;
        let tmp3 = tmp2;
        if (multiplyResult.isPositive()) {
          while (!modInvResult.isZero()) {
            let modResult1 = obj7;
            if (obj6.isOdd()) {
              let multiplyResult1 = obj7.multiply(modInvResult);
              modResult1 = multiplyResult1.mod(obj2);
            }
            let divideResult = obj6.divide(2);
            let squareResult = modInvResult.square();
            modInvResult = squareResult.mod(obj2);
            obj7 = modResult1;
            obj6 = divideResult;
            tmp3 = modResult1;
          }
          return Integer[0];
        }
        return tmp3;
      }
    }
    compareAbs(arg0) {
      const iter = parseValue(arg0);
      const value = this.value;
      const value2 = iter.value;
      let num = 1;
      if (!iter.isSmall) {
        let num3;
        if (value.length !== value2.length) {
          let num5 = -1;
          if (value.length > value2.length) {
            num5 = 1;
          }
          num3 = num5;
        } else {
          let diff = value.length - 1;
          num3 = 0;
          if (0 <= diff) {
            while (value[diff] === value2[diff]) {
              diff = diff - 1;
              num3 = 0;
            }
            let num4 = -1;
            if (value[diff] > value2[diff]) {
              num4 = 1;
            }
            num3 = num4;
          }
        }
        num = num3;
      }
      return num;
    }
    compare(arg0) {
      if (arg0 === Infinity) {
        return -1;
      } else if (arg0 === -Infinity) {
        return 1;
      } else {
        let result;
        const self = this;
        const iter = parseValue(arg0);
        const value = this.value;
        const value2 = iter.value;
        if (this.sign !== iter.sign) {
          let num8 = -1;
          if (iter.sign) {
            num8 = 1;
          }
          result = num8;
        } else if (iter.isSmall) {
          let num7 = 1;
          if (self.sign) {
            num7 = -1;
          }
          result = num7;
        } else {
          let num3;
          if (value.length !== value2.length) {
            let num5 = -1;
            if (value.length > value2.length) {
              num5 = 1;
            }
            num3 = num5;
          } else {
            let diff = value.length - 1;
            num3 = 0;
            if (0 <= diff) {
              while (value[diff] === value2[diff]) {
                diff = diff - 1;
                num3 = 0;
              }
              let num4 = -1;
              if (value[diff] > value2[diff]) {
                num4 = 1;
              }
              num3 = num4;
            }
          }
          let num6 = 1;
          if (self.sign) {
            num6 = -1;
          }
          result = num3 * num6;
        }
        return result;
      }
    }
    equals(arg0) {
      return 0 === this.compare(arg0);
    }
    notEquals(arg0) {
      return 0 !== this.compare(arg0);
    }
    greater(arg0) {
      return this.compare(arg0) > 0;
    }
    lesser(arg0) {
      return this.compare(arg0) < 0;
    }
    greaterOrEquals(arg0) {
      return this.compare(arg0) >= 0;
    }
    lesserOrEquals(arg0) {
      return this.compare(arg0) <= 0;
    }
    isEven() {
      return !(1 & this.value[0]);
    }
    isOdd() {
      return !(1 & ~this.value[0]);
    }
    isPositive() {
      return !this.sign;
    }
    isNegative() {
      return this.sign;
    }
    isUnit() {
  return false;
}
    isZero() {
  return false;
}
    isDivisibleBy(arg0) {
      const obj = parseValue(arg0);
      let tmp2 = !obj.isZero();
      obj.isZero();
      if (tmp2) {
        let isUnitResult = obj.isUnit();
        if (!isUnitResult) {
          let isEvenResult;
          const self = this;
          if (0 === obj.compareAbs(2)) {
            isEvenResult = self.isEven();
          } else {
            const modResult = self.mod(obj);
            isEvenResult = modResult.isZero();
          }
          isUnitResult = isEvenResult;
        }
        tmp2 = isUnitResult;
      }
      return tmp2;
    }
    isPrime(arg0) {
      const self = this;
      const absResult = this.abs();
      let tmp2 = !absResult.isUnit();
      absResult.isUnit();
      if (tmp2) {
        let tmp4 = absResult.equals(2) || absResult.equals(3) || absResult.equals(5);
        const equalsResult = absResult.equals(2) || absResult.equals(3) || absResult.equals(5);
        if (!tmp4) {
          let tmp6 = !(absResult.isEven() || absResult.isDivisibleBy(3) || absResult.isDivisibleBy(5));
          const isEvenResult = absResult.isEven() || absResult.isDivisibleBy(3) || absResult.isDivisibleBy(5);
          if (tmp6) {
            tmp6 = absResult.lesser(49) || undefined;
            absResult.lesser(49) || undefined;
          }
          tmp4 = tmp6;
        }
        tmp2 = tmp4;
      }
      if (tmp2 !== undefined) {
        return tmp2;
      } else {
        const absResult1 = self.abs();
        const bitLengthResult = absResult1.bitLength();
        if (bitLengthResult <= 64) {
          return millerRabinTest(absResult1, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
        } else {
          let num9;
          const _Math2 = Math;
          const logResult = Math.log(2);
          const result = logResult * bitLengthResult.toJSNumber();
          let result1 = result;
          const _Math3 = Math;
          if (true === arg0) {
            const _Math = Math;
            result1 = 2 * Math.pow(result, 2);
          }
          items = [];
          const ceilResult = ceil(result1);
          for (let num9 = 0; num9 < ceilResult; num9 = num9 + 1) {
            let arr = items.push(Integer(num9 + 2));
          }
          return millerRabinTest(absResult1, items);
        }
      }
    }
    isProbablePrime(arg0, arg1) {
      const self = this;
      const absResult = this.abs();
      let tmp2 = !absResult.isUnit();
      absResult.isUnit();
      if (tmp2) {
        let tmp4 = absResult.equals(2) || absResult.equals(3) || absResult.equals(5);
        const equalsResult = absResult.equals(2) || absResult.equals(3) || absResult.equals(5);
        if (!tmp4) {
          let tmp6 = !(absResult.isEven() || absResult.isDivisibleBy(3) || absResult.isDivisibleBy(5));
          const isEvenResult = absResult.isEven() || absResult.isDivisibleBy(3) || absResult.isDivisibleBy(5);
          if (tmp6) {
            tmp6 = absResult.lesser(49) || undefined;
            absResult.lesser(49) || undefined;
          }
          tmp4 = tmp6;
        }
        tmp2 = tmp4;
      }
      if (tmp2 !== undefined) {
        return tmp2;
      } else {
        const absResult1 = self.abs();
        let num7 = 5;
        if (arg0 !== undefined) {
          num7 = arg0;
        }
        items = [];
        for (let num11 = 0; num11 < num7; num11 = num11 + 1) {
          let arr = items.push(Integer.randBetween(2, absResult1.minus(2), arg1));
        }
        return millerRabinTest(absResult1, items);
      }
    }
    modInv(arg0) {
      let isZeroResult;
      let one;
      let zero;
      const self = this;
      ({ zero, one } = Integer);
      let obj = parseValue(arg0);
      const absResult = this.abs();
      let tmp = absResult;
      let obj3 = zero;
      let obj4 = obj;
      let obj5 = zero;
      if (!absResult.isZero()) {
        do {
          let divideResult = obj.divide(tmp);
          let subtractResult = obj3.subtract(divideResult.multiply(one));
          let subtractResult1 = obj.subtract(divideResult.multiply(tmp));
          obj = tmp;
          obj3 = one;
          tmp = subtractResult1;
          one = subtractResult;
          obj4 = obj;
          obj5 = obj3;
          isZeroResult = subtractResult1.isZero();
        } while (!isZeroResult);
      }
      if (obj4.isUnit()) {
        let addResult = obj5;
        if (-1 === obj5.compare(0)) {
          addResult = obj5.add(arg0);
        }
        let negateResult = addResult;
        if (self.isNegative()) {
          negateResult = addResult.negate();
        }
        return negateResult;
      } else {
        const _Error = Error;
        const text = `${self.toString()} and `;
        const self2 = this;
        const self3 = this;
        const error = new Error(`${self.toString()} and ` + arg0.toString() + " are not co-prime");
        throw error;
      }
    }
    next() {
      let obj;
      const self = this;
      const value = this.value;
      if (this.sign) {
        obj = subtractSmall(value, 1, self.sign);
      } else {
        const _Array = Array;
        const self2 = this;
        const self3 = this;
        const array = new Array(length);
        let num4 = 0;
        let num5 = 1;
        let num6 = 0;
        let num7 = 1;
        if (0 < value.length) {
          do {
            let sum = value[num4] - 10000000 + num5;
            let _Math = Math;
            let rounded = Math.floor(sum / 10000000);
            array[num4] = sum - rounded * 10000000;
            num5 = rounded + 1;
            num4 = num4 + 1;
            num7 = num5;
            num6 = num4;
          } while (num4 < value.length);
        }
        if (num7 > 0) {
          do {
            array[num6] = num7 % 10000000;
            let _Math2 = Math;
            let sum1 = num6 + 1;
            num7 = Math.floor(num7 / 10000000);
            num6 = sum1;
          } while (num7 > 0);
        }
        const sign = self.sign;
        Object.create(BigInteger.prototype);
        obj = { value: array, sign, isSmall: false };
      }
      return obj;
    }
    prev() {
      let tmp3;
      const value = this.value;
      if (this.sign) {
        const _Array = Array;
        const self = this;
        const self2 = this;
        const array = new Array(length);
        let num6 = 0;
        let num7 = 1;
        let num8 = 0;
        let num9 = 1;
        if (0 < value.length) {
          do {
            let sum = value[num6] - 10000000 + num7;
            let _Math = Math;
            let rounded = Math.floor(sum / 10000000);
            array[num6] = sum - rounded * 10000000;
            num7 = rounded + 1;
            num6 = num6 + 1;
            num9 = num7;
            num8 = num6;
          } while (num6 < value.length);
        }
        if (num9 > 0) {
          do {
            array[num8] = num9 % 10000000;
            let _Math2 = Math;
            let sum1 = num8 + 1;
            num9 = Math.floor(num9 / 10000000);
            num8 = sum1;
          } while (num9 > 0);
        }
        Object.create(BigInteger.prototype);
        tmp3 = { value: array, sign: true, isSmall: false };
        const obj = { value: array, sign: true, isSmall: false };
      } else {
        tmp3 = subtractSmall(value, 1, tmp.sign);
      }
      return tmp3;
    }
    shiftLeft(arg0) {
      const obj = parseValue(arg0);
      const toJSNumberResult = obj.toJSNumber();
      if (Math.abs(toJSNumberResult) <= 10000000) {
        const self3 = this;
        if (toJSNumberResult < 0) {
          return self3.shiftRight(-toJSNumberResult);
        } else if (self3.isZero()) {
          return self3;
        } else {
          let multiplyResult = self3;
          let diff = toJSNumberResult;
          let obj3 = self3;
          let tmp6 = toJSNumberResult;
          if (toJSNumberResult >= length) {
            do {
              multiplyResult = multiplyResult.multiply(closure_19);
              diff = diff - (length - 1);
              obj3 = multiplyResult;
              tmp6 = diff;
            } while (diff >= length);
          }
          return obj3.multiply(items1[tmp6]);
        }
      } else {
        const _Error = Error;
        const _String = String;
        const self = this;
        const self2 = this;
        const error = new Error(String(toJSNumberResult) + " is too large for shifting.");
        throw error;
      }
    }
    shiftRight(arg0) {
      let obj2;
      let obj3;
      let obj5;
      let obj6;
      const obj = parseValue(arg0);
      const toJSNumberResult = obj.toJSNumber();
      if (Math.abs(toJSNumberResult) <= 10000000) {
        const self3 = this;
        if (toJSNumberResult < 0) {
          return self3.shiftLeft(-toJSNumberResult);
        } else {
          let prevResult1;
          let obj4 = self3;
          let diff = toJSNumberResult;
          let tmp12 = self3;
          let tmp13 = toJSNumberResult;
          if (toJSNumberResult >= length) {
            while (!obj4.isZero()) {
              if (!obj4.isNegative()) {
                let prevResult;
                let tmp8 = divModAny(obj4, closure_19);
                [obj3, obj2] = tmp8;
                if (obj2.isNegative()) {
                  prevResult = obj3.prev();
                } else {
                  prevResult = obj3;
                }
                diff = diff - (length - 1);
                obj4 = prevResult;
                tmp12 = prevResult;
                tmp13 = diff;
              } else if (obj4.isUnit()) {
                break;
              }
              return obj4;
            }
          }
          [obj6, obj5] = divModAny(tmp12, items1[tmp13]);
          divModAny(tmp12, items1[tmp13]);
          if (obj5.isNegative()) {
            prevResult1 = obj6.prev();
          } else {
            prevResult1 = obj6;
          }
          return prevResult1;
        }
      } else {
        const _Error = Error;
        const _String = String;
        const self = this;
        const self2 = this;
        const error = new Error(String(toJSNumberResult) + " is too large for shifting.");
        throw error;
      }
    }
    not() {
      const negateResult = this.negate();
      return negateResult.prev();
    }
    and(arg0) {
      return bitwise(this, arg0, (arg0, arg1) => arg0 & arg1);
    }
    or(arg0) {
      return bitwise(this, arg0, (arg0, arg1) => arg0 | arg1);
    }
    xor(arg0) {
      return bitwise(this, arg0, (arg0, arg1) => arg0 ^ arg1);
    }
    bitLength() {
      let addResult;
      let e;
      let e2;
      let p;
      let p2;
      const self = this;
      let self2 = this;
      if (this.compareTo(Integer(0)) < 0) {
        const negateResult = self.negate();
        self2 = negateResult.subtract(Integer(1));
      }
      if (0 === self2.compareTo(Integer(0))) {
        addResult = Integer(0);
      } else {
        let obj6;
        const tmpResult3 = Integer(2);
        if (tmpResult3.compareTo(self2) <= 0) {
          let obj3;
          let obj5;
          const squareResult = tmpResult3.square(tmpResult3);
          if (squareResult.compareTo(self2) <= 0) {
            let obj2;
            ({ p, e } = integerLogarithm(self2, squareResult.square(squareResult)));
            integerLogarithm(self2, squareResult.square(squareResult));
            const multiplyResult = p.multiply(squareResult);
            if (multiplyResult.compareTo(self2) <= 0) {
              obj2 = { p: multiplyResult, e: 2 * e + 1 };
              const obj = { p: multiplyResult, e: 2 * e + 1 };
            } else {
              obj2 = { p, e: 2 * e };
            }
            obj3 = obj2;
          } else {
            obj3 = { p: Integer(1), e: 0 };
          }
          ({ p: p2, e: e2 } = obj3);
          const multiplyResult1 = p2.multiply(tmpResult3);
          if (multiplyResult1.compareTo(self2) <= 0) {
            obj5 = { p: multiplyResult1, e: 2 * e2 + 1 };
            const obj4 = { p: multiplyResult1, e: 2 * e2 + 1 };
          } else {
            obj5 = { p: p2, e: 2 * e2 };
          }
          obj6 = obj5;
        } else {
          obj6 = { p: Integer(1), e: 0 };
        }
        const tmpResult4 = Integer(obj6.e);
        addResult = tmpResult4.add(Integer(1));
      }
      return addResult;
    }
    toArray(arg0) {
      return toBase(this, arg0);
    }
    toString(arg0, arg1) {
      let num = arg0;
      if (arg0 === undefined) {
        num = 10;
      }
      const self = this;
      if (10 !== num) {
        let closure_0 = arg1;
        const iter = toBase(self, num);
        let str3 = "";
        if (iter.isNegative) {
          str3 = "-";
        }
        const value = iter.value;
        const mapped = value.map((item) => {
          let text;
          if (item < (closure_0 || c1).length) {
            text = arr[item];
          } else {
            text = `${"<" + item}>`;
          }
          return text;
        });
        return str3 + mapped.join("");
      } else {
        const value2 = self.value;
        const _String2 = String;
        const diff = value2.length - 1;
        const StringResult = String(value2[diff]);
        let diff1 = diff - 1;
        let sum = StringResult;
        let tmp3 = StringResult;
        if (diff1 >= 0) {
          do {
            let _String = String;
            let StringResult1 = String(value2[diff1]);
            let slice = "0000000".slice;
            sum = sum + ("0000000".slice(StringResult1.length) + StringResult1);
            diff1 = diff1 - 1;
            tmp3 = sum;
          } while (diff1 >= 0);
        }
        let str = "";
        if (self.sign) {
          str = "-";
        }
        return str + tmp3;
      }
    }
    valueOf() {
      return parseInt(this.toString(), 10);
    }
  }
  if (num >= 1000) {
    class Integer {
      constructor(items, arg1, arg2, arg3) {
        let first;
        let length2;
        let obj2;
        let timesResult;
        let tmp14;
        let tmp25;
        let tmp7;
        if (undefined === items) {
          first = Integer[0];
        } else {
          if (undefined !== arg1) {
            let str = arg2;
            if (typeof parseBase === "function") {
              if (!str) {
                str = c1;
              }
              const _String = String;
              const str2 = String(items);
              let formatted1 = str;
              let formatted = str2;
              if (!arg3) {
                formatted = str2.toLowerCase();
                formatted1 = str.toLowerCase();
              }
              const _Math = Math;
              length = formatted.length;
              const absolute = Math.abs(arg1);
              const obj = {};
              let num4 = 0;
              if (0 < formatted1.length) {
                do {
                  obj[formatted1[num4]] = num4;
                  num4 = num4 + 1;
                  length2 = formatted1.length;
                } while (num4 < length2);
              }
              let num5 = 0;
              if (0 < length) {
                while (true) {
                  tmp7 = formatted[num5];
                  if ("-" !== tmp7) {
                    if (tmp7 in obj) {
                      if (obj[tmp7] >= absolute) {
                        if ("1" !== tmp7) {
                          break;
                        } else if (1 !== absolute) {
                          break;
                        }
                      }
                    }
                  }
                  num5 = num5 + 1;
                }
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error = new Error(tmp7 + " is not a valid digit in base " + arg1 + ".");
                throw error;
              }
              let num6 = 0;
              const tmp12 = parseValue(arg1);
              if ("-" === formatted[0]) {
                num6 = 1;
              }
              items = [];
              if (num6 < formatted.length) {
                while (true) {
                  let sum;
                  tmp14 = formatted[num6];
                  if (tmp14 in obj) {
                    let arr = items.push(parseValue(obj[tmp14]));
                    sum = num6;
                  } else {
                    let tmp16 = num6;
                    if ("<" !== tmp14) {
                      break;
                    } else {
                      sum = tmp16 + 1;
                      while (">" !== formatted[sum]) {
                        tmp16 = sum;
                        if (sum >= formatted.length) {
                          break;
                        }
                      }
                      let arr2 = items.push(parseValue(formatted.slice(num6 + 1, sum)));
                    }
                  }
                  num6 = sum + 1;
                }
                const _Error2 = Error;
                const self3 = this;
                const self4 = this;
                const error1 = new Error(tmp14 + " is not a valid character");
                throw error1;
              }
              [tmp25, obj2] = Integer;
              let diff = items.length - 1;
              let addResult = tmp25;
              let obj4 = tmp25;
              if (0 <= diff) {
                do {
                  let obj5 = items[diff];
                  addResult = addResult.add(obj5.times(timesResult));
                  timesResult = timesResult.times(tmp12);
                  diff = diff - 1;
                  obj4 = addResult;
                } while (0 <= diff);
              }
              let negateResult = obj4;
              if ("-" === formatted[0]) {
                negateResult = obj4.negate();
              }
              first = negateResult;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          first = parseValue(items);
        }
        return first;
      }
    }
  } else {
    class Integer {
      constructor(items, arg1, arg2, arg3) {
        let first;
        let length2;
        let obj2;
        let timesResult;
        let tmp14;
        let tmp25;
        let tmp7;
        if (undefined === items) {
          first = Integer[0];
        } else {
          if (undefined !== arg1) {
            let str = arg2;
            if (typeof parseBase === "function") {
              if (!str) {
                str = c1;
              }
              const _String = String;
              const str2 = String(items);
              let formatted1 = str;
              let formatted = str2;
              if (!arg3) {
                formatted = str2.toLowerCase();
                formatted1 = str.toLowerCase();
              }
              const _Math = Math;
              length = formatted.length;
              const absolute = Math.abs(arg1);
              const obj = {};
              let num4 = 0;
              if (0 < formatted1.length) {
                do {
                  obj[formatted1[num4]] = num4;
                  num4 = num4 + 1;
                  length2 = formatted1.length;
                } while (num4 < length2);
              }
              let num5 = 0;
              if (0 < length) {
                while (true) {
                  tmp7 = formatted[num5];
                  if ("-" !== tmp7) {
                    if (tmp7 in obj) {
                      if (obj[tmp7] >= absolute) {
                        if ("1" !== tmp7) {
                          break;
                        } else if (1 !== absolute) {
                          break;
                        }
                      }
                    }
                  }
                  num5 = num5 + 1;
                }
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error = new Error(tmp7 + " is not a valid digit in base " + arg1 + ".");
                throw error;
              }
              let num6 = 0;
              const tmp12 = parseValue(arg1);
              if ("-" === formatted[0]) {
                num6 = 1;
              }
              items = [];
              if (num6 < formatted.length) {
                while (true) {
                  let sum;
                  tmp14 = formatted[num6];
                  if (tmp14 in obj) {
                    let arr = items.push(parseValue(obj[tmp14]));
                    sum = num6;
                  } else {
                    let tmp16 = num6;
                    if ("<" !== tmp14) {
                      break;
                    } else {
                      sum = tmp16 + 1;
                      while (">" !== formatted[sum]) {
                        tmp16 = sum;
                        if (sum >= formatted.length) {
                          break;
                        }
                      }
                      let arr2 = items.push(parseValue(formatted.slice(num6 + 1, sum)));
                    }
                  }
                  num6 = sum + 1;
                }
                const _Error2 = Error;
                const self3 = this;
                const self4 = this;
                const error1 = new Error(tmp14 + " is not a valid character");
                throw error1;
              }
              [tmp25, obj2] = Integer;
              let diff = items.length - 1;
              let addResult = tmp25;
              let obj4 = tmp25;
              if (0 <= diff) {
                do {
                  let obj5 = items[diff];
                  addResult = addResult.add(obj5.times(timesResult));
                  timesResult = timesResult.times(tmp12);
                  diff = diff - 1;
                  obj4 = addResult;
                } while (0 <= diff);
              }
              let negateResult = obj4;
              if ("-" === formatted[0]) {
                negateResult = obj4.negate();
              }
              first = negateResult;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          first = parseValue(items);
        }
        return first;
      }
    }
  }
}
[Integer.zero, Integer.one] = Integer;
Integer.minusOne = Integer[-1];
Integer.max = function max(arg0, arg1) {
  const obj = parseValue(arg0);
  let tmp = parseValue(arg1);
  if (obj.greater(tmp)) {
    tmp = obj;
  }
  return tmp;
};
Integer.min = function min(arg0, arg1) {
  const obj = parseValue(arg0);
  let tmp = parseValue(arg1);
  if (obj.lesser(tmp)) {
    tmp = obj;
  }
  return tmp;
};
Integer.gcd = gcd;
Integer.lcm = function lcm(arg0, arg1) {
  const obj = parseValue(arg0);
  const absResult = obj.abs();
  const obj3 = parseValue(arg1);
  const absResult1 = obj3.abs();
  const divideResult = absResult.divide(gcd(absResult, absResult1));
  return divideResult.multiply(absResult1);
};
Integer.isInstance = (arg0) => arg0 instanceof BigInteger || arg0 instanceof SmallInteger || arg0 instanceof NativeBigInt;
Integer.randBetween = function randBetween(arg0, absResult1, arg2) {
  let random = arg2;
  const tmp2 = parseValue(arg0);
  const tmp3 = parseValue(absResult1);
  if (!arg2) {
    const _Math = Math;
    random = Math.random;
  }
  const tmpResult = parseValue(tmp2);
  let tmpResult4 = parseValue(tmp3);
  if (tmpResult.lesser(tmpResult4)) {
    tmpResult4 = tmpResult;
  }
  const tmpResult5 = parseValue(tmp2);
  let tmpResult6 = parseValue(tmp3);
  if (tmpResult5.greater(tmpResult6)) {
    tmpResult6 = tmpResult5;
  }
  const subtractResult = tmpResult6.subtract(tmpResult4);
  const addResult = subtractResult.add(1);
  if (addResult.isSmall) {
    const _Math4 = Math;
    return tmpResult4.add(Math.floor(random() * addResult));
  } else {
    const value = toBase(addResult, 10000000).value;
    items = [];
    let num3 = 0;
    let flag2 = true;
    if (0 < value.length) {
      do {
        let rounded;
        let flag3 = flag2;
        let num4 = 10000000;
        if (flag2) {
          num4 = value[num3];
        }
        let result = random() * num4;
        if (result > 0) {
          let _Math3 = Math;
          rounded = Math.floor(result);
        } else {
          let _Math2 = Math;
          rounded = Math.ceil(result);
        }
        let arr = items.push(rounded);
        if (rounded < num4) {
          flag3 = false;
        }
        num3 = num3 + 1;
        flag2 = flag3;
      } while (num3 < value.length);
    }
    return tmpResult4.add(Integer.fromArray(items, 10000000, false));
  }
};
Integer.fromArray = (arr, arg1, arg2) => {
  let obj;
  let timesResult;
  let tmp2;
  const mapped = arr.map(parseValue);
  [tmp2, obj] = Integer;
  let diff = mapped.length - 1;
  let addResult = tmp2;
  let obj3 = tmp2;
  if (0 <= diff) {
    do {
      let obj4 = mapped[diff];
      addResult = addResult.add(obj4.times(timesResult));
      timesResult = timesResult.times(tmp);
      diff = diff - 1;
      obj3 = addResult;
    } while (0 <= diff);
  }
  let negateResult = obj3;
  if (arg2) {
    negateResult = obj3.negate();
  }
  return negateResult;
};
let hasOwnPropertyResult = undefined !== module;
if (hasOwnPropertyResult) {
  class Integer {
    constructor(items, arg1, arg2, arg3) {
      let first;
      let length2;
      let obj2;
      let timesResult;
      let tmp14;
      let tmp25;
      let tmp7;
      if (undefined === items) {
        first = Integer[0];
      } else {
        if (undefined !== arg1) {
          let str = arg2;
          if (typeof parseBase === "function") {
            if (!str) {
              str = c1;
            }
            const _String = String;
            const str2 = String(items);
            let formatted1 = str;
            let formatted = str2;
            if (!arg3) {
              formatted = str2.toLowerCase();
              formatted1 = str.toLowerCase();
            }
            const _Math = Math;
            length = formatted.length;
            const absolute = Math.abs(arg1);
            const obj = {};
            let num4 = 0;
            if (0 < formatted1.length) {
              do {
                obj[formatted1[num4]] = num4;
                num4 = num4 + 1;
                length2 = formatted1.length;
              } while (num4 < length2);
            }
            let num5 = 0;
            if (0 < length) {
              while (true) {
                tmp7 = formatted[num5];
                if ("-" !== tmp7) {
                  if (tmp7 in obj) {
                    if (obj[tmp7] >= absolute) {
                      if ("1" !== tmp7) {
                        break;
                      } else if (1 !== absolute) {
                        break;
                      }
                    }
                  }
                }
                num5 = num5 + 1;
              }
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error(tmp7 + " is not a valid digit in base " + arg1 + ".");
              throw error;
            }
            let num6 = 0;
            const tmp12 = parseValue(arg1);
            if ("-" === formatted[0]) {
              num6 = 1;
            }
            items = [];
            if (num6 < formatted.length) {
              while (true) {
                let sum;
                tmp14 = formatted[num6];
                if (tmp14 in obj) {
                  let arr = items.push(parseValue(obj[tmp14]));
                  sum = num6;
                } else {
                  let tmp16 = num6;
                  if ("<" !== tmp14) {
                    break;
                  } else {
                    sum = tmp16 + 1;
                    while (">" !== formatted[sum]) {
                      tmp16 = sum;
                      if (sum >= formatted.length) {
                        break;
                      }
                    }
                    let arr2 = items.push(parseValue(formatted.slice(num6 + 1, sum)));
                  }
                }
                num6 = sum + 1;
              }
              const _Error2 = Error;
              const self3 = this;
              const self4 = this;
              const error1 = new Error(tmp14 + " is not a valid character");
              throw error1;
            }
            [tmp25, obj2] = Integer;
            let diff = items.length - 1;
            let addResult = tmp25;
            let obj4 = tmp25;
            if (0 <= diff) {
              do {
                let obj5 = items[diff];
                addResult = addResult.add(obj5.times(timesResult));
                timesResult = timesResult.times(tmp12);
                diff = diff - 1;
                obj4 = addResult;
              } while (0 <= diff);
            }
            let negateResult = obj4;
            if ("-" === formatted[0]) {
              negateResult = obj4.negate();
            }
            first = negateResult;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        first = parseValue(items);
      }
      return first;
    }
  }
  hasOwnPropertyResult = module.hasOwnProperty("exports");
}
if (hasOwnPropertyResult) {
  class Integer {
    constructor(items, arg1, arg2, arg3) {
      let first;
      let length2;
      let obj2;
      let timesResult;
      let tmp14;
      let tmp25;
      let tmp7;
      if (undefined === items) {
        first = Integer[0];
      } else {
        if (undefined !== arg1) {
          let str = arg2;
          if (typeof parseBase === "function") {
            if (!str) {
              str = c1;
            }
            const _String = String;
            const str2 = String(items);
            let formatted1 = str;
            let formatted = str2;
            if (!arg3) {
              formatted = str2.toLowerCase();
              formatted1 = str.toLowerCase();
            }
            const _Math = Math;
            length = formatted.length;
            const absolute = Math.abs(arg1);
            const obj = {};
            let num4 = 0;
            if (0 < formatted1.length) {
              do {
                obj[formatted1[num4]] = num4;
                num4 = num4 + 1;
                length2 = formatted1.length;
              } while (num4 < length2);
            }
            let num5 = 0;
            if (0 < length) {
              while (true) {
                tmp7 = formatted[num5];
                if ("-" !== tmp7) {
                  if (tmp7 in obj) {
                    if (obj[tmp7] >= absolute) {
                      if ("1" !== tmp7) {
                        break;
                      } else if (1 !== absolute) {
                        break;
                      }
                    }
                  }
                }
                num5 = num5 + 1;
              }
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error(tmp7 + " is not a valid digit in base " + arg1 + ".");
              throw error;
            }
            let num6 = 0;
            const tmp12 = parseValue(arg1);
            if ("-" === formatted[0]) {
              num6 = 1;
            }
            items = [];
            if (num6 < formatted.length) {
              while (true) {
                let sum;
                tmp14 = formatted[num6];
                if (tmp14 in obj) {
                  let arr = items.push(parseValue(obj[tmp14]));
                  sum = num6;
                } else {
                  let tmp16 = num6;
                  if ("<" !== tmp14) {
                    break;
                  } else {
                    sum = tmp16 + 1;
                    while (">" !== formatted[sum]) {
                      tmp16 = sum;
                      if (sum >= formatted.length) {
                        break;
                      }
                    }
                    let arr2 = items.push(parseValue(formatted.slice(num6 + 1, sum)));
                  }
                }
                num6 = sum + 1;
              }
              const _Error2 = Error;
              const self3 = this;
              const self4 = this;
              const error1 = new Error(tmp14 + " is not a valid character");
              throw error1;
            }
            [tmp25, obj2] = Integer;
            let diff = items.length - 1;
            let addResult = tmp25;
            let obj4 = tmp25;
            if (0 <= diff) {
              do {
                let obj5 = items[diff];
                addResult = addResult.add(obj5.times(timesResult));
                timesResult = timesResult.times(tmp12);
                diff = diff - 1;
                obj4 = addResult;
              } while (0 <= diff);
            }
            let negateResult = obj4;
            if ("-" === formatted[0]) {
              negateResult = obj4.negate();
            }
            first = negateResult;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        first = parseValue(items);
      }
      return first;
    }
  }
}
let amd = typeof globalThis.define === "function";
if (typeof globalThis.define === "function") {
  class Integer {
    constructor(items, arg1, arg2, arg3) {
      let first;
      let length2;
      let obj2;
      let timesResult;
      let tmp14;
      let tmp25;
      let tmp7;
      if (undefined === items) {
        first = Integer[0];
      } else {
        if (undefined !== arg1) {
          let str = arg2;
          if (typeof parseBase === "function") {
            if (!str) {
              str = c1;
            }
            const _String = String;
            const str2 = String(items);
            let formatted1 = str;
            let formatted = str2;
            if (!arg3) {
              formatted = str2.toLowerCase();
              formatted1 = str.toLowerCase();
            }
            const _Math = Math;
            length = formatted.length;
            const absolute = Math.abs(arg1);
            const obj = {};
            let num4 = 0;
            if (0 < formatted1.length) {
              do {
                obj[formatted1[num4]] = num4;
                num4 = num4 + 1;
                length2 = formatted1.length;
              } while (num4 < length2);
            }
            let num5 = 0;
            if (0 < length) {
              while (true) {
                tmp7 = formatted[num5];
                if ("-" !== tmp7) {
                  if (tmp7 in obj) {
                    if (obj[tmp7] >= absolute) {
                      if ("1" !== tmp7) {
                        break;
                      } else if (1 !== absolute) {
                        break;
                      }
                    }
                  }
                }
                num5 = num5 + 1;
              }
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error(tmp7 + " is not a valid digit in base " + arg1 + ".");
              throw error;
            }
            let num6 = 0;
            const tmp12 = parseValue(arg1);
            if ("-" === formatted[0]) {
              num6 = 1;
            }
            items = [];
            if (num6 < formatted.length) {
              while (true) {
                let sum;
                tmp14 = formatted[num6];
                if (tmp14 in obj) {
                  let arr = items.push(parseValue(obj[tmp14]));
                  sum = num6;
                } else {
                  let tmp16 = num6;
                  if ("<" !== tmp14) {
                    break;
                  } else {
                    sum = tmp16 + 1;
                    while (">" !== formatted[sum]) {
                      tmp16 = sum;
                      if (sum >= formatted.length) {
                        break;
                      }
                    }
                    let arr2 = items.push(parseValue(formatted.slice(num6 + 1, sum)));
                  }
                }
                num6 = sum + 1;
              }
              const _Error2 = Error;
              const self3 = this;
              const self4 = this;
              const error1 = new Error(tmp14 + " is not a valid character");
              throw error1;
            }
            [tmp25, obj2] = Integer;
            let diff = items.length - 1;
            let addResult = tmp25;
            let obj4 = tmp25;
            if (0 <= diff) {
              do {
                let obj5 = items[diff];
                addResult = addResult.add(obj5.times(timesResult));
                timesResult = timesResult.times(tmp12);
                diff = diff - 1;
                obj4 = addResult;
              } while (0 <= diff);
            }
            let negateResult = obj4;
            if ("-" === formatted[0]) {
              negateResult = obj4.negate();
            }
            first = negateResult;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        first = parseValue(items);
      }
      return first;
    }
  }
  amd = globalThis.define.amd;
}
if (amd) {
  class Integer {
    constructor(items, arg1, arg2, arg3) {
      let first;
      let length2;
      let obj2;
      let timesResult;
      let tmp14;
      let tmp25;
      let tmp7;
      if (undefined === items) {
        first = Integer[0];
      } else {
        if (undefined !== arg1) {
          let str = arg2;
          if (typeof parseBase === "function") {
            if (!str) {
              str = c1;
            }
            const _String = String;
            const str2 = String(items);
            let formatted1 = str;
            let formatted = str2;
            if (!arg3) {
              formatted = str2.toLowerCase();
              formatted1 = str.toLowerCase();
            }
            const _Math = Math;
            length = formatted.length;
            const absolute = Math.abs(arg1);
            const obj = {};
            let num4 = 0;
            if (0 < formatted1.length) {
              do {
                obj[formatted1[num4]] = num4;
                num4 = num4 + 1;
                length2 = formatted1.length;
              } while (num4 < length2);
            }
            let num5 = 0;
            if (0 < length) {
              while (true) {
                tmp7 = formatted[num5];
                if ("-" !== tmp7) {
                  if (tmp7 in obj) {
                    if (obj[tmp7] >= absolute) {
                      if ("1" !== tmp7) {
                        break;
                      } else if (1 !== absolute) {
                        break;
                      }
                    }
                  }
                }
                num5 = num5 + 1;
              }
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error(tmp7 + " is not a valid digit in base " + arg1 + ".");
              throw error;
            }
            let num6 = 0;
            const tmp12 = parseValue(arg1);
            if ("-" === formatted[0]) {
              num6 = 1;
            }
            items = [];
            if (num6 < formatted.length) {
              while (true) {
                let sum;
                tmp14 = formatted[num6];
                if (tmp14 in obj) {
                  let arr = items.push(parseValue(obj[tmp14]));
                  sum = num6;
                } else {
                  let tmp16 = num6;
                  if ("<" !== tmp14) {
                    break;
                  } else {
                    sum = tmp16 + 1;
                    while (">" !== formatted[sum]) {
                      tmp16 = sum;
                      if (sum >= formatted.length) {
                        break;
                      }
                    }
                    let arr2 = items.push(parseValue(formatted.slice(num6 + 1, sum)));
                  }
                }
                num6 = sum + 1;
              }
              const _Error2 = Error;
              const self3 = this;
              const self4 = this;
              const error1 = new Error(tmp14 + " is not a valid character");
              throw error1;
            }
            [tmp25, obj2] = Integer;
            let diff = items.length - 1;
            let addResult = tmp25;
            let obj4 = tmp25;
            if (0 <= diff) {
              do {
                let obj5 = items[diff];
                addResult = addResult.add(obj5.times(timesResult));
                timesResult = timesResult.times(tmp12);
                diff = diff - 1;
                obj4 = addResult;
              } while (0 <= diff);
            }
            let negateResult = obj4;
            if ("-" === formatted[0]) {
              negateResult = obj4.negate();
            }
            first = negateResult;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        first = parseValue(items);
      }
      return first;
    }
  }
  globalThis.define(() => Integer);
}