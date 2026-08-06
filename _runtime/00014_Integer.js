// _runtime/00014_Integer.js
class Integer {
  constructor(arg0, arg1, arg2, arg3) {
    if (undefined === arg0) {
      tmp32 = Integer;
      first = Integer[0];
    } else {
      tmp33 = arg1;
      if (undefined !== arg1) {
        str = arg2;
        num = 10;
        if (10 === +arg1) {
        }
        tmp3 = parseBase;
        if (typeof parseBase !== "function") {
          str10 = "Trying to call a non-function";
          throwTypeErrorResult = HermesBuiltin.throwTypeError();
        }
        if (!str) {
          str = c1;
        }
        tmp4 = arg3;
        tmp5 = globalThis;
        _String = String;
        str2 = String(arg0);
        formatted1 = str;
        formatted = str2;
        if (!arg3) {
          formatted = str2.toLowerCase();
          formatted1 = str.toLowerCase();
        }
        length = formatted.length;
        _Math = Math;
        absolute = Math.abs(arg1);
        obj = {};
        num2 = 0;
        num3 = 1;
        num4 = 0;
        if (0 < formatted1.length) {
          do {
            obj[formatted1[num4]] = num4;
            num4 = num4 + 1;
            length2 = formatted1.length;
          } while (num4 < length2);
        }
        str3 = "1";
        str4 = "-";
        num5 = 0;
        if (0 < length) {
          while (true) {
            tmp7 = formatted[num5];
            tmp8 = num5;
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
          _Error = Error;
          str5 = " is not a valid digit in base ";
          tmp9 = new.target;
          str6 = ".";
          tmp10 = new.target;
          error = new Error(tmp7 + " is not a valid digit in base " + arg1 + ".");
          tmp12 = error;
          throw error;
        }
        tmp13 = parseValue;
        tmp15 = "-" === formatted[0];
        num6 = 0;
        tmp14 = parseValue(arg1);
        if (tmp15) {
          num6 = 1;
        }
        items = [];
        str7 = "<";
        str8 = ">";
        if (num6 < formatted.length) {
          while (true) {
            tmp16 = formatted[num6];
            tmp17 = num6;
            if (tmp16 in obj) {
              tmp26 = parseValue;
              arr = items.push(parseValue(obj[tmp16]));
              sum = num6;
            } else {
              tmp18 = num6;
              if ("<" !== tmp16) {
                break;
              } else {
                sum = tmp18 + 1;
                while (">" !== formatted[sum]) {
                  tmp18 = sum;
                  if (sum >= formatted.length) {
                    break;
                  }
                }
                tmp20 = parseValue;
                arr1 = items.push(parseValue(formatted.slice(num6 + 1, sum)));
              }
            }
            num6 = sum + 1;
          }
          _Error2 = Error;
          str9 = " is not a valid character";
          tmp22 = new.target;
          tmp23 = new.target;
          error1 = new Error(tmp16 + " is not a valid character");
          tmp25 = error1;
          throw error1;
        }
        tmp28 = Integer;
        [tmp29, obj2] = Integer;
        diff = items.length - 1;
        addResult = tmp29;
        obj4 = tmp29;
        if (0 <= diff) {
          do {
            obj5 = items[diff];
            addResult = addResult.add(obj5.times(timesResult));
            timesResult = timesResult.times(tmp14);
            diff = diff - 1;
            obj4 = addResult;
          } while (0 <= diff);
        }
        negateResult = obj4;
        if (tmp15) {
          negateResult = obj4.negate();
        }
        first = negateResult;
      }
      tmp = parseValue;
      first = parseValue(arg0);
    }
    return first;
  }
}
class BigInteger {
  constructor(arg0, arg1) {
    return;
  }
  add(arg0) {
    self = this;
    iter = parseValue(arg0);
    if (this.sign !== iter.sign) {
      return self.subtract(iter.negate());
    } else {
      value = self.value;
      value = iter.value;
      tmp17 = BigInteger;
      if (iter.isSmall) {
        tmp4 = globalThis;
        _Math = Math;
        absolute = Math.abs(value);
        length = value.length;
        _Array = Array;
        tmp6 = new.target;
        tmp7 = new.target;
        tmp8 = length;
        array = new Array(length);
        tmp10 = array;
        num2 = 0;
        num3 = 10000000;
        num4 = 1;
        num5 = 0;
        sum1 = absolute;
        num6 = 0;
        rounded1 = absolute;
        if (0 < length) {
          do {
            sum = value[num5] - 10000000 + sum1;
            _Math2 = Math;
            rounded = Math.floor(sum / 10000000);
            array[num5] = sum - rounded * 10000000;
            sum1 = rounded + 1;
            num5 = num5 + 1;
            rounded1 = sum1;
            num6 = num5;
          } while (num5 < length);
        }
        if (rounded1 > 0) {
          do {
            array[num6] = rounded1 % 10000000;
            _Math3 = Math;
            sum2 = num6 + 1;
            rounded1 = Math.floor(rounded1 / 10000000);
            num6 = sum2;
          } while (rounded1 > 0);
        }
        obj = Object.create(tmp17.prototype);
        obj1 = {};
        obj1.value = array;
        obj1.sign = self.sign;
        flag2 = false;
        obj1.isSmall = false;
        obj = obj1;
      } else {
        tmp = addAny;
        num = 0;
        tmp2 = addAny(value, value);
        obj2 = Object.create(tmp17.prototype);
        obj = {};
        obj.value = tmp2;
        obj.sign = self.sign;
        flag = false;
        obj.isSmall = false;
      }
      return obj;
    }
  }
  subtract(arg0) {
    self = this;
    iter = parseValue(arg0);
    if (this.sign !== iter.sign) {
      return self.add(iter.negate());
    } else {
      value = self.value;
      value1 = iter.value;
      if (iter.isSmall) {
        tmp12 = subtractSmall;
        tmp13 = globalThis;
        _Math = Math;
        num7 = 0;
        obj2 = subtractSmall(value, Math.abs(value1), self.sign);
      } else {
        sign = self.sign;
        if (value.length !== value1.length) {
          num5 = -1;
          if (value.length > value1.length) {
            num5 = 1;
          }
          num3 = num5;
        } else {
          num = 1;
          diff = value.length - 1;
          num2 = 0;
          num3 = 0;
          if (0 <= diff) {
            tmp2 = diff;
            while (value[diff] === value1[diff]) {
              diff = diff - 1;
              num3 = 0;
            }
            num4 = -1;
            if (value[diff] > value1[diff]) {
              num4 = 1;
            }
            num3 = num4;
          }
        }
        num6 = 0;
        if (0 <= num3) {
          tmp6 = subtract;
          tmp4 = subtract(value, value1);
          tmp5 = sign;
        } else {
          tmp3 = subtract;
          tmp4 = subtract(value1, value);
          tmp5 = !sign;
        }
        tmp7 = arrayToSmall;
        tmp8 = arrayToSmall(tmp4);
        if (typeof tmp8 === "number") {
          tmp9 = tmp8;
          if (tmp5) {
            tmp9 = -tmp8;
          }
          tmp10 = SmallInteger;
          obj = Object.create(SmallInteger.prototype);
          obj = {};
          obj.value = tmp9;
          obj.sign = tmp9 < 0;
          flag = true;
          obj.isSmall = true;
          obj2 = obj;
        } else {
          tmp14 = BigInteger;
          obj1 = Object.create(BigInteger.prototype);
          obj2 = {};
          obj2.value = tmp8;
          obj2.sign = tmp5;
          flag2 = false;
          obj2.isSmall = false;
        }
      }
      return obj2;
    }
  }
  negate() {
    sign = !this.sign;
    obj = Object.create(BigInteger.prototype);
    return { value: this.value, sign, isSmall: false };
  }
  abs() {
    obj = Object.create(BigInteger.prototype);
    return { value: this.value, sign: false, isSmall: false };
  }
  multiply(arg0) {
    self = this;
    iter = parseValue(arg0);
    value = this.value;
    value1 = iter.value;
    tmp = this.sign !== iter.sign;
    if (!iter.isSmall) {
      length = value.length;
      length2 = value1.length;
      num2 = -0.012;
      num3 = 0.012;
      num4 = 0.000015;
      num5 = 0;
      if (0 < -0.012 * length - 0.012 * length2 + 0.000015 * length * length2) {
        tmp7 = BigInteger;
        tmp8 = multiplyKaratsuba;
        tmp9 = multiplyKaratsuba(value, value1);
        obj = Object.create(BigInteger.prototype);
        obj1 = {};
        obj1.value = tmp9;
        obj1.sign = tmp;
        flag2 = false;
        obj1.isSmall = false;
        obj = obj1;
      } else {
        tmp3 = BigInteger;
        tmp4 = multiplyLong;
        tmp5 = multiplyLong(value, value1);
        obj2 = Object.create(BigInteger.prototype);
        obj = {};
        obj.value = tmp5;
        obj.sign = tmp;
        flag = false;
        obj.isSmall = false;
      }
      return obj;
    } else {
      num = 0;
      if (0 === value1) {
        tmp21 = Integer;
        return Integer[0];
      } else {
        num10 = 1;
        if (1 === value1) {
          return self;
        } else {
          num11 = -1;
          if (-1 === value1) {
            return self.negate();
          } else {
            tmp22 = globalThis;
            _Math6 = Math;
            absolute = Math.abs(value1);
            num12 = 10000000;
            if (absolute < 10000000) {
              length3 = value.length;
              _Array = Array;
              tmp12 = new.target;
              tmp13 = new.target;
              tmp14 = length3;
              tmp11 = BigInteger;
              array = new Array(length3);
              tmp16 = array;
              num6 = 0;
              num7 = 0;
              num8 = 0;
              num9 = 0;
              if (0 < length3) {
                do {
                  sum = value[num7] * absolute + num6;
                  _Math4 = Math;
                  rounded = Math.floor(sum / 10000000);
                  array[num7] = sum - rounded * 10000000;
                  num7 = num7 + 1;
                  num6 = rounded;
                  num8 = rounded;
                  num9 = num7;
                } while (num7 < length3);
              }
              if (num8 > 0) {
                do {
                  array[num9] = num8 % 10000000;
                  _Math5 = Math;
                  sum1 = num9 + 1;
                  num8 = Math.floor(num8 / 10000000);
                  num9 = sum1;
                } while (num8 > 0);
              }
              obj3 = Object.create(tmp11.prototype);
              obj4 = {};
              obj4.value = array;
              obj4.sign = tmp;
              flag3 = false;
              obj4.isSmall = false;
              return obj4;
            } else {
              if (absolute < 10000000) {
                items = [];
                items[0] = absolute;
                items2 = items;
              } else {
                num13 = 100000000000000;
                if (absolute < 100000000000000) {
                  items1 = [, ];
                  items1[0] = absolute % 10000000;
                  _Math3 = Math;
                  items1[1] = Math.floor(absolute / 10000000);
                  items2 = items1;
                } else {
                  items2 = [, , ];
                  items2[0] = absolute % 10000000;
                  _Math = Math;
                  items2[1] = Math.floor(absolute / 10000000) % 10000000;
                  _Math2 = Math;
                  items2[2] = Math.floor(absolute / 100000000000000);
                }
              }
              tmp2 = items2;
            }
          }
        }
      }
    }
    return;
  }
  _multiplyBySmall(arg0) {
    if (0 === arg0.value) {
      tmp5 = Integer;
      self2 = Integer[0];
    } else {
      self = this;
      num = 1;
      self2 = this;
      if (1 !== arg0.value) {
        num2 = -1;
        if (-1 === arg0.value) {
          negateResult = self.negate();
        } else {
          tmp = multiplySmallAndArray;
          tmp2 = globalThis;
          _Math = Math;
          negateResult = multiplySmallAndArray(Math.abs(arg0.value), self.value, self.sign !== arg0.sign);
        }
        tmp4 = negateResult;
      }
    }
    return self2;
  }
  square() {
    value = square(this.value);
    obj = Object.create(BigInteger.prototype);
    return { value, sign: false, isSmall: false };
  }
  divmod(arg0) {
    tmp = divModAny(this, arg0);
    obj = { quotient: tmp[0], remainder: tmp[1] };
    return obj;
  }
  divide(arg0) {
    return divModAny(this, arg0)[0];
  }
  mod(arg0) {
    return divModAny(this, arg0)[1];
  }
  pow(arg0) {
    self = this;
    iter = parseValue(arg0);
    value = this.value;
    value = iter.value;
    if (0 === value) {
      tmp25 = Integer;
      return Integer[1];
    } else if (0 === value) {
      tmp24 = Integer;
      return Integer[0];
    } else {
      num4 = 1;
      if (1 === value) {
        tmp23 = Integer;
        return Integer[1];
      } else {
        num5 = -1;
        if (-1 === value) {
          tmp22 = Integer;
          return iter.isEven() ? tmp22[1] : tmp22[-1];
        } else if (iter.sign) {
          tmp21 = Integer;
          return Integer[0];
        } else if (iter.isSmall) {
          if (self.isSmall) {
            tmp6 = globalThis;
            _Math = Math;
            powResult = Math.pow(value, value);
            num = -9007199254740992;
            tmp8 = -9007199254740992 < powResult;
            if (tmp8) {
              num2 = 9007199254740992;
              tmp8 = powResult < 9007199254740992;
            }
            if (tmp8) {
              tmp18 = SmallInteger;
              if (powResult > 0) {
                _Math3 = Math;
                rounded = Math.floor(powResult);
              } else {
                _Math2 = Math;
                rounded = Math.ceil(powResult);
              }
              obj = Object.create(tmp18.prototype);
              obj1 = {};
              obj1.value = rounded;
              obj1.sign = rounded < 0;
              flag2 = true;
              obj1.isSmall = true;
              return obj1;
            }
          }
          tmp9 = Integer;
          obj = Integer[1];
          flag = true;
          diff = value;
          timesResult = obj;
          if (true & value) {
            timesResult = obj.times(self);
            diff = value - 1;
          }
          num3 = 2;
          obj2 = timesResult;
          tmp12 = timesResult;
          if (0 !== diff) {
            do {
              result = diff / 2;
              squareResult = self.square();
              tmp15 = obj2;
              diff1 = result;
              timesResult1 = obj2;
              if (true & result) {
                timesResult1 = obj2.times(squareResult);
                diff1 = result - 1;
              }
              diff = diff1;
              obj2 = timesResult1;
              self = squareResult;
              tmp12 = timesResult1;
            } while (0 !== diff1);
          }
          return tmp12;
        } else {
          tmp = globalThis;
          _Error = Error;
          str = "The exponent ";
          tmp2 = new.target;
          str2 = " is too large.";
          tmp3 = new.target;
          error = new Error("The exponent " + iter.toString() + " is too large.");
          tmp5 = error;
          throw error;
        }
      }
    }
  }
  modPow(arg0, arg1) {
    obj = parseValue(arg0);
    obj2 = parseValue(arg1);
    if (obj2.isZero()) {
      tmp9 = globalThis;
      _Error = Error;
      tmp10 = new.target;
      str = "Cannot take modPow with modulus 0";
      tmp11 = new.target;
      error = new Error("Cannot take modPow with modulus 0");
      tmp13 = error;
      throw error;
    } else {
      self = this;
      tmp2 = Integer[1];
      tmp = Integer;
      modResult = this.mod(obj2);
      modInvResult = modResult;
      multiplyResult = obj;
      if (obj.isNegative()) {
        num = -1;
        multiplyResult = obj.multiply(tmp[-1]);
        modInvResult = modResult.modInv(obj2);
      }
      num2 = 2;
      obj6 = multiplyResult;
      obj7 = tmp2;
      tmp3 = tmp2;
      if (multiplyResult.isPositive()) {
        tmp4 = modInvResult;
        tmp5 = obj7;
        tmp6 = obj6;
        while (!modInvResult.isZero()) {
          modResult1 = obj7;
          if (obj6.isOdd()) {
            multiplyResult1 = obj7.multiply(modInvResult);
            modResult1 = multiplyResult1.mod(obj2);
          }
          divideResult = require("module_2");
          squareResult = modInvResult.square();
          modInvResult = squareResult.mod(obj2);
          obj7 = modResult1;
          obj6 = divideResult;
          tmp3 = modResult1;
        }
        tmp8 = Integer;
        return Integer[0];
      }
      return tmp3;
    }
  }
  compareAbs(arg0) {
    iter = parseValue(arg0);
    value = this.value;
    value1 = iter.value;
    if (iter.isSmall) {
      return 1;
    } else {
      if (value.length !== value1.length) {
        value = value.length;
        value1 = value1.length;
        num3 = -1;
        if (value > value1) {
          num3 = 1;
        }
        num2 = num3;
      } else {
        diff = value.length - 1;
        num = 0;
        num2 = 0;
        if (0 <= diff) {
          num3 = diff;
          while (value[diff] === value1[diff]) {
            diff = num3 - 1;
            num2 = 0;
          }
        }
        tmp2 = value[num3] > value1[num3];
        num3 = -1;
        if (tmp2) {
          num3 = 1;
        }
        num2 = num3;
      }
      tmp3 = num2;
    }
    return;
  }
  compare(arg0) {
    if (arg0 === Infinity) {
      num10 = -1;
      return -1;
    } else {
      num11 = -Infinity;
      if (arg0 === -Infinity) {
        num9 = 1;
        return 1;
      } else {
        self = this;
        tmp4 = parseValue;
        iter = parseValue(arg0);
        value = this.value;
        value1 = iter.value;
        if (this.sign !== iter.sign) {
          num8 = -1;
          if (iter.sign) {
            num8 = 1;
          }
          result = num8;
        } else if (iter.isSmall) {
          num7 = 1;
          if (self.sign) {
            num7 = -1;
          }
          result = num7;
        } else {
          if (value.length !== value1.length) {
            num5 = -1;
            if (value.length > value1.length) {
              num5 = 1;
            }
            num3 = num5;
          } else {
            num = 1;
            diff = value.length - 1;
            num2 = 0;
            num3 = 0;
            if (0 <= diff) {
              tmp2 = diff;
              while (value[diff] === value1[diff]) {
                diff = diff - 1;
                num3 = 0;
              }
              num4 = -1;
              if (value[diff] > value1[diff]) {
                num4 = 1;
              }
              num3 = num4;
            }
          }
          num6 = 1;
          if (self.sign) {
            num6 = -1;
          }
          result = num3 * num6;
        }
        return result;
      }
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
    obj = parseValue(arg0);
    isZeroResult = obj.isZero();
    tmp2 = !isZeroResult;
    if (!isZeroResult) {
      tmp3 = obj.isUnit();
      if (tmp3) {
        tmp2 = tmp3;
      } else {
        self = this;
        num = 2;
        num2 = 0;
        if (0 === require("module_2")) {
          isEvenResult = self.isEven();
        } else {
          modResult = self.mod(obj);
          isEvenResult = modResult.isZero();
        }
        tmp5 = isEvenResult;
      }
    }
    return tmp2;
  }
  isPrime(arg0) {
    self = this;
    absResult = this.abs();
    isUnitResult = absResult.isUnit();
    tmp2 = !isUnitResult;
    if (!isUnitResult) {
      num = 2;
      equalsResult = require("module_2");
      if (!equalsResult) {
        num2 = 3;
        equalsResult = require("module_3");
      }
      if (!equalsResult) {
        num3 = 5;
        equalsResult = require("module_5");
      }
      tmp4 = equalsResult;
      if (!tmp4) {
        isEvenResult = absResult.isEven();
        if (!isEvenResult) {
          num4 = 3;
          isEvenResult = require("module_3");
        }
        if (!isEvenResult) {
          num5 = 5;
          isEvenResult = require("module_5");
        }
        tmp6 = !isEvenResult;
        if (!isEvenResult) {
          num6 = 49;
          tmp7 = require("module_49") || undefined;
          tmp6 = tmp7;
        }
        tmp4 = tmp6;
      }
      tmp2 = tmp4;
    }
    if (tmp2 !== undefined) {
      return tmp2;
    } else {
      absResult1 = self.abs();
      bitLengthResult = absResult1.bitLength();
      num11 = 64;
      if (bitLengthResult <= 64) {
        tmp13 = millerRabinTest;
        num10 = 0;
        return millerRabinTest(absResult1, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
      } else {
        tmp14 = arg0;
        tmp15 = globalThis;
        _Math2 = Math;
        num12 = 2;
        logResult = require("module_2");
        result = logResult * bitLengthResult.toJSNumber();
        flag = true;
        result1 = result;
        if (true === arg0) {
          _Math = Math;
          result1 = 2 * Math.pow(result, 2);
        }
        rounded = Math.ceil(result1);
        items = [];
        num7 = 0;
        num8 = 1;
        for (let num9 = 0; num9 < rounded; num9 = num9 + 1) {
          tmp10 = Integer;
          arr = items.push(Integer(num9 + 2));
        }
        tmp12 = millerRabinTest;
        return millerRabinTest(absResult1, items);
      }
    }
  }
  isProbablePrime(arg0, arg1) {
    self = this;
    absResult = this.abs();
    isUnitResult = absResult.isUnit();
    tmp2 = !isUnitResult;
    if (!isUnitResult) {
      num = 2;
      equalsResult = require("module_2");
      if (!equalsResult) {
        num2 = 3;
        equalsResult = require("module_3");
      }
      if (!equalsResult) {
        num3 = 5;
        equalsResult = require("module_5");
      }
      tmp4 = equalsResult;
      if (!tmp4) {
        isEvenResult = absResult.isEven();
        if (!isEvenResult) {
          num4 = 3;
          isEvenResult = require("module_3");
        }
        if (!isEvenResult) {
          num5 = 5;
          isEvenResult = require("module_5");
        }
        tmp6 = !isEvenResult;
        if (!isEvenResult) {
          num6 = 49;
          tmp7 = require("module_49") || undefined;
          tmp6 = tmp7;
        }
        tmp4 = tmp6;
      }
      tmp2 = tmp4;
    }
    if (tmp2 !== undefined) {
      return tmp2;
    } else {
      tmp8 = arg0;
      absResult1 = self.abs();
      num7 = 5;
      if (arg0 !== undefined) {
        num7 = arg0;
      }
      items = [];
      num8 = 0;
      num9 = 2;
      num10 = 1;
      for (let num11 = 0; num11 < num7; num11 = num11 + 1) {
        tmp9 = Integer;
        arr = items.push(require("module_2"));
      }
      tmp11 = millerRabinTest;
      return millerRabinTest(absResult1, items);
    }
  }
  modInv(arg0) {
    self = this;
    ({ zero, one } = Integer);
    obj = parseValue(arg0);
    absResult = this.abs();
    tmp = absResult;
    obj3 = zero;
    obj4 = obj;
    obj5 = zero;
    if (!absResult.isZero()) {
      do {
        divideResult = obj.divide(tmp);
        subtractResult = obj3.subtract(divideResult.multiply(one));
        subtractResult1 = obj.subtract(divideResult.multiply(tmp));
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
      num = 0;
      num2 = -1;
      addResult = obj5;
      if (-1 === require("module_0")) {
        addResult = obj5.add(arg0);
      }
      negateResult = addResult;
      if (self.isNegative()) {
        negateResult = addResult.negate();
      }
      return negateResult;
    } else {
      tmp4 = globalThis;
      _Error = Error;
      str = " and ";
      text = `${self.toString()} and `;
      tmp6 = new.target;
      str2 = " are not co-prime";
      tmp7 = new.target;
      error = new Error(`${self.toString()} and ` + arg0.toString() + " are not co-prime");
      tmp9 = error;
      throw error;
    }
  }
  next() {
    self = this;
    value = this.value;
    if (this.sign) {
      tmp12 = subtractSmall;
      num8 = 1;
      num9 = 0;
      obj = subtractSmall(value, 1, self.sign);
    } else {
      length = value.length;
      tmp2 = globalThis;
      _Array = Array;
      tmp3 = new.target;
      tmp4 = new.target;
      tmp5 = length;
      tmp = BigInteger;
      array = new Array(length);
      tmp7 = array;
      num = 0;
      num2 = 1;
      num3 = 10000000;
      num4 = 0;
      num5 = 1;
      num6 = 0;
      num7 = 1;
      if (0 < length) {
        do {
          sum = value[num4] - 10000000 + num5;
          _Math = Math;
          rounded = Math.floor(sum / 10000000);
          array[num4] = sum - rounded * 10000000;
          num5 = rounded + 1;
          num4 = num4 + 1;
          num7 = num5;
          num6 = num4;
        } while (num4 < length);
      }
      if (num7 > 0) {
        do {
          array[num6] = num7 % 10000000;
          _Math2 = Math;
          sum1 = num6 + 1;
          num7 = Math.floor(num7 / 10000000);
          num6 = sum1;
        } while (num7 > 0);
      }
      obj = Object.create(tmp.prototype);
      obj = {};
      obj.value = array;
      obj.sign = self.sign;
      flag = false;
      obj.isSmall = false;
    }
    return obj;
  }
  prev() {
    value = this.value;
    if (this.sign) {
      length = value.length;
      tmp5 = globalThis;
      _Array = Array;
      tmp6 = new.target;
      tmp7 = new.target;
      tmp8 = length;
      tmp4 = BigInteger;
      array = new Array(length);
      tmp10 = array;
      num3 = 0;
      num4 = 1;
      num5 = 10000000;
      num6 = 0;
      num7 = 1;
      num8 = 0;
      num9 = 1;
      if (0 < length) {
        do {
          sum = value[num6] - 10000000 + num7;
          _Math = Math;
          rounded = Math.floor(sum / 10000000);
          array[num6] = sum - rounded * 10000000;
          num7 = rounded + 1;
          num6 = num6 + 1;
          num9 = num7;
          num8 = num6;
        } while (num6 < length);
      }
      if (num9 > 0) {
        do {
          array[num8] = num9 % 10000000;
          _Math2 = Math;
          sum1 = num8 + 1;
          num9 = Math.floor(num9 / 10000000);
          num8 = sum1;
        } while (num9 > 0);
      }
      obj = Object.create(tmp4.prototype);
      obj = {};
      obj.value = array;
      flag = true;
      obj.sign = true;
      flag2 = false;
      obj.isSmall = false;
      tmp3 = obj;
    } else {
      tmp2 = subtractSmall;
      num = 1;
      num2 = 0;
      tmp3 = subtractSmall(value, 1, tmp.sign);
    }
    return tmp3;
  }
  shiftLeft(arg0) {
    obj = parseValue(arg0);
    toJSNumberResult = obj.toJSNumber();
    if (Math.abs(toJSNumberResult) <= 10000000) {
      self = this;
      num = 0;
      if (toJSNumberResult < 0) {
        return self.shiftRight(-toJSNumberResult);
      } else if (self.isZero()) {
        return self;
      } else {
        tmp6 = length;
        num2 = 1;
        multiplyResult = self;
        diff = toJSNumberResult;
        obj3 = self;
        tmp8 = toJSNumberResult;
        if (toJSNumberResult >= length) {
          do {
            tmp9 = f65538;
            multiplyResult = multiplyResult.multiply(f65538);
            tmp10 = length;
            diff = diff - (length - 1);
            obj3 = multiplyResult;
            tmp8 = diff;
          } while (diff >= length);
        }
        tmp11 = f65538;
        return obj3.multiply(f65538[tmp8]);
      }
    } else {
      _Error = Error;
      _String = String;
      str = " is too large for shifting.";
      tmp2 = new.target;
      tmp3 = new.target;
      error = new Error(String(toJSNumberResult) + " is too large for shifting.");
      tmp5 = error;
      throw error;
    }
  }
  shiftRight(arg0) {
    obj = parseValue(arg0);
    toJSNumberResult = obj.toJSNumber();
    if (Math.abs(toJSNumberResult) <= 10000000) {
      self = this;
      num = 0;
      if (toJSNumberResult < 0) {
        return self.shiftLeft(-toJSNumberResult);
      } else {
        tmp20 = length;
        num2 = 1;
        obj4 = self;
        diff = toJSNumberResult;
        tmp14 = self;
        tmp15 = toJSNumberResult;
        if (toJSNumberResult >= length) {
          tmp6 = obj4;
          tmp7 = diff;
          while (!obj4.isZero()) {
            if (!obj4.isNegative()) {
              tmp8 = divModAny;
              tmp9 = f65538;
              tmp10 = divModAny(obj4, f65538);
              [obj3, obj2] = tmp10;
              if (obj2.isNegative()) {
                prevResult = obj3.prev();
              } else {
                prevResult = obj3;
              }
              tmp12 = length;
              diff = diff - (length - 1);
              obj4 = prevResult;
              tmp14 = prevResult;
              tmp15 = diff;
            } else if (obj4.isUnit()) {
              break;
            }
            return obj4;
          }
        }
        tmp16 = divModAny;
        tmp17 = f65538;
        tmp18 = divModAny(tmp14, f65538[tmp15]);
        [obj6, obj5] = tmp18;
        if (obj5.isNegative()) {
          prevResult1 = obj6.prev();
        } else {
          prevResult1 = obj6;
        }
        return prevResult1;
      }
    } else {
      _Error = Error;
      _String = String;
      str = " is too large for shifting.";
      tmp2 = new.target;
      tmp3 = new.target;
      error = new Error(String(toJSNumberResult) + " is too large for shifting.");
      tmp5 = error;
      throw error;
    }
  }
  not() {
    negateResult = this.negate();
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
    self = this;
    tmp = Integer;
    self2 = this;
    if (this.compareTo(require("module_0")) < 0) {
      negateResult = self.negate();
      num = 1;
      self2 = negateResult.subtract(require("module_1"));
    }
    if (0 === self2.compareTo(require("module_0"))) {
      tmpResult = require("module_0");
    } else {
      num6 = 2;
      tmpResult1 = require("module_2");
      if (tmpResult1.compareTo(self2) <= 0) {
        squareResult = tmpResult1.square(tmpResult1);
        if (squareResult.compareTo(self2) <= 0) {
          tmp2 = integerLogarithm;
          tmp3 = integerLogarithm(self2, squareResult.square(squareResult));
          ({ p, e } = tmp3);
          multiplyResult = p.multiply(squareResult);
          if (multiplyResult.compareTo(self2) <= 0) {
            obj = { p: null, e: null };
            obj[0] = multiplyResult;
            num4 = 1;
            obj[1] = num6 * e + 1;
            obj1 = obj;
          } else {
            obj1 = { p: null, e: null };
            obj1[0] = p;
            obj1[1] = num6 * e;
          }
          tmp4 = obj1;
        } else {
          obj2 = { p: null, e: 0 };
          num3 = 1;
          obj2[0] = require("module_1");
          ({ p: p2, e: e2 } = obj2);
          multiplyResult1 = p2.multiply(tmpResult1);
          if (multiplyResult1.compareTo(self2) <= 0) {
            obj3 = { p: null, e: null };
            obj3[0] = multiplyResult1;
            num5 = 1;
            num6 = num6 * e2 + 1;
            obj3[1] = num6;
            obj4 = obj3;
          } else {
            obj4 = { p: null, e: null };
            obj4[0] = p2;
            obj4[1] = num6 * e2;
          }
          tmp5 = obj4;
        }
      } else {
        obj5 = { p: null, e: 0 };
        num2 = 1;
        obj5[0] = require("module_1");
        tmpResult2 = tmp(obj5.e);
        num7 = 1;
        tmpResult = tmpResult2.add(require("module_1"));
      }
    }
    return tmpResult;
  }
  toArray(arg0) {
    return toBase(this, arg0);
  }
  toString(arg0, arg1) {
    num = arg0;
    if (arg0 === undefined) {
      num = 10;
    }
    self = this;
    if (10 !== num) {
      tmp4 = arg1;
      closure_0 = arg1;
      tmp5 = toBase;
      num2 = 0;
      iter = toBase(self, num);
      str2 = "";
      str3 = "";
      if (iter.isNegative) {
        str3 = "-";
      }
      value = iter.value;
      mapped = value.map((arg0) => {
        let arr = closure_0;
        if (!closure_0) {
          arr = outer1_1;
        }
        if (arg0 < arr.length) {
          let text = arr[arg0];
        } else {
          text = `${"<" + arg0}>`;
        }
        return text;
      });
      return str3 + mapped.join("");
    } else {
      value1 = self.value;
      tmp6 = globalThis;
      _String2 = String;
      diff = value1.length - 1;
      StringResult = String(value1[diff]);
      diff1 = diff - 1;
      num3 = 0;
      str4 = "0000000";
      sum = StringResult;
      tmp3 = StringResult;
      if (diff1 >= 0) {
        do {
          _String = String;
          StringResult1 = String(value1[diff1]);
          slice = "0000000".slice;
          sum = sum + ("0000000".slice(StringResult1.length) + StringResult1);
          diff1 = diff1 - 1;
          tmp3 = sum;
        } while (diff1 >= 0);
      }
      str = "";
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
    return;
  }
  add(arg0) {
    self = this;
    iter = parseValue(arg0);
    value = this.value;
    if (value < 0 !== iter.sign) {
      return self.subtract(iter.negate());
    } else {
      value = iter.value;
      tmp24 = value;
      if (!iter.isSmall) {
        tmp7 = globalThis;
        _Math5 = Math;
        tmp6 = BigInteger;
        absolute = Math.abs(value);
        length = value.length;
        _Array = Array;
        tmp9 = new.target;
        tmp10 = new.target;
        tmp11 = length;
        array = new Array(length);
        tmp13 = array;
        num4 = 10000000;
        num5 = 1;
        num6 = 0;
        sum1 = absolute;
        num7 = 0;
        rounded1 = absolute;
        if (0 < length) {
          do {
            sum = value[num6] - 10000000 + sum1;
            _Math6 = Math;
            rounded = Math.floor(sum / 10000000);
            array[num6] = sum - rounded * 10000000;
            sum1 = rounded + 1;
            num6 = num6 + 1;
            rounded1 = sum1;
            num7 = num6;
          } while (num6 < length);
        }
        if (rounded1 > 0) {
          do {
            array[num7] = rounded1 % 10000000;
            _Math7 = Math;
            sum2 = num7 + 1;
            rounded1 = Math.floor(rounded1 / 10000000);
            num7 = sum2;
          } while (rounded1 > 0);
        }
        tmp19 = value < 0;
        obj = Object.create(tmp6.prototype);
        obj = {};
        obj.value = array;
        obj.sign = tmp19;
        flag = false;
        obj.isSmall = false;
        return obj;
      } else {
        sum3 = value + value;
        num = -9007199254740992;
        tmp2 = -9007199254740992 < sum3;
        if (tmp2) {
          num2 = 9007199254740992;
          tmp2 = sum3 < 9007199254740992;
        }
        if (tmp2) {
          tmp21 = SmallInteger;
          sum4 = value + value;
          obj1 = Object.create(SmallInteger.prototype);
          obj2 = {};
          obj2.value = sum4;
          obj2.sign = sum4 < 0;
          flag2 = true;
          obj2.isSmall = true;
          return obj2;
        } else {
          tmp3 = globalThis;
          _Math = Math;
          absolute1 = Math.abs(value);
          num3 = 10000000;
          if (absolute1 < 10000000) {
            items = [];
            items[0] = absolute1;
            items2 = items;
          } else {
            num8 = 100000000000000;
            if (absolute1 < 100000000000000) {
              items1 = [, ];
              items1[0] = absolute1 % 10000000;
              _Math4 = Math;
              items1[1] = Math.floor(absolute1 / 10000000);
              items2 = items1;
            } else {
              items2 = [, , ];
              items2[0] = absolute1 % 10000000;
              _Math2 = Math;
              items2[1] = Math.floor(absolute1 / 10000000) % 10000000;
              _Math3 = Math;
              items2[2] = Math.floor(absolute1 / 100000000000000);
            }
          }
          tmp5 = items2;
        }
      }
    }
    return;
  }
  subtract(arg0) {
    self = this;
    iter = parseValue(arg0);
    value = this.value;
    if (value < 0 !== iter.sign) {
      return self.add(iter.negate());
    } else {
      value = iter.value;
      if (iter.isSmall) {
        tmp4 = SmallInteger;
        diff = value - value;
        obj = Object.create(SmallInteger.prototype);
        obj = {};
        obj.value = diff;
        obj.sign = diff < 0;
        flag = true;
        obj.isSmall = true;
        tmp3 = obj;
      } else {
        tmp = subtractSmall;
        tmp2 = globalThis;
        _Math = Math;
        tmp3 = subtractSmall(value, Math.abs(value), value >= 0);
      }
      return tmp3;
    }
  }
  negate() {
    tmp = -this.value;
    obj = Object.create(SmallInteger.prototype);
    obj = { value: tmp, sign: tmp < 0, isSmall: true, sign: !this.sign };
    return obj;
  }
  abs() {
    absolute = Math.abs(this.value);
    obj = Object.create(SmallInteger.prototype);
    obj = { value: absolute, sign: absolute < 0, isSmall: true };
    return obj;
  }
  _multiplyBySmall(arg0) {
    self = this;
    result = arg0.value * this.value;
    tmp2 = -9007199254740992 < result;
    if (tmp2) {
      num = 9007199254740992;
      tmp2 = result < 9007199254740992;
    }
    if (tmp2) {
      tmp8 = SmallInteger;
      result1 = arg0.value * self.value;
      obj = Object.create(SmallInteger.prototype);
      obj = {};
      obj.value = result1;
      num4 = 0;
      obj.sign = result1 < 0;
      flag = true;
      obj.isSmall = true;
      tmp3Result = obj;
    } else {
      tmp4 = globalThis;
      _Math = Math;
      tmp3 = multiplySmallAndArray;
      _Math2 = Math;
      absolute = Math.abs(arg0.value);
      absolute1 = Math.abs(self.value);
      num2 = 10000000;
      if (absolute1 < 10000000) {
        items = [];
        items[0] = absolute1;
        items2 = items;
      } else {
        num5 = 100000000000000;
        if (absolute1 < 100000000000000) {
          items1 = [, ];
          items1[0] = absolute1 % 10000000;
          _Math5 = Math;
          items1[1] = Math.floor(absolute1 / 10000000);
          items2 = items1;
        } else {
          items2 = [, , ];
          items2[0] = absolute1 % 10000000;
          _Math3 = Math;
          items2[1] = Math.floor(absolute1 / 10000000) % 10000000;
          _Math4 = Math;
          items2[2] = Math.floor(absolute1 / 100000000000000);
        }
      }
      num3 = 0;
      tmp3Result = tmp3(absolute, items2, self.sign !== arg0.sign);
    }
    return tmp3Result;
  }
  multiply(arg0) {
    obj = parseValue(arg0);
    return obj._multiplyBySmall(this);
  }
  square() {
    result = this.value * this.value;
    tmp2 = -9007199254740992 < result;
    if (tmp2) {
      num = 9007199254740992;
      tmp2 = result < 9007199254740992;
    }
    if (tmp2) {
      tmp9 = SmallInteger;
      obj = Object.create(SmallInteger.prototype);
      obj1 = {};
      obj1.value = result;
      num4 = 0;
      obj1.sign = result < 0;
      flag2 = true;
      obj1.isSmall = true;
      obj = obj1;
    } else {
      tmp5 = globalThis;
      _Math = Math;
      tmp3 = BigInteger;
      tmp4 = square;
      absolute = Math.abs(this.value);
      num2 = 10000000;
      if (absolute < 10000000) {
        items = [];
        items[0] = absolute;
        items2 = items;
      } else {
        num5 = 100000000000000;
        if (absolute < 100000000000000) {
          items1 = [, ];
          items1[0] = absolute % 10000000;
          _Math4 = Math;
          items1[1] = Math.floor(absolute / 10000000);
          items2 = items1;
        } else {
          items2 = [, , ];
          items2[0] = absolute % 10000000;
          _Math2 = Math;
          items2[1] = Math.floor(absolute / 10000000) % 10000000;
          _Math3 = Math;
          items2[2] = Math.floor(absolute / 100000000000000);
        }
      }
      num3 = 0;
      tmp4Result = tmp4(items2);
      obj2 = Object.create(tmp3.prototype);
      obj = {};
      obj.value = tmp4Result;
      flag = false;
      obj.sign = false;
      obj.isSmall = false;
    }
    return obj;
  }
  compareAbs(arg0) {
    tmp = parseValue(arg0);
    absolute = Math.abs(this.value);
    num = -1;
    num2 = -1;
    if (tmp.isSmall) {
      _Math = Math;
      absolute1 = Math.abs(tmp3);
      num3 = 0;
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
      num6 = -1;
      return -1;
    } else {
      num7 = -Infinity;
      if (arg0 === -Infinity) {
        num5 = 1;
        return 1;
      } else {
        self = this;
        tmp = parseValue;
        iter = parseValue(arg0);
        value = this.value;
        value = iter.value;
        num8 = 0;
        if (iter.isSmall) {
          num3 = 0;
          if (value != value) {
            num4 = -1;
            if (value > value) {
              num4 = 1;
            }
            num3 = num4;
          }
          num = num3;
        } else if (value < 0 !== iter.sign) {
          num2 = 1;
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
    value = this.value;
    if (value + 1 < 9007199254740992) {
      tmp4 = SmallInteger;
      sum = value + 1;
      obj = Object.create(SmallInteger.prototype);
      obj1 = {};
      obj1.value = sum;
      num = 0;
      obj1.sign = sum < 0;
      flag2 = true;
      obj1.isSmall = true;
      obj = obj1;
    } else {
      tmp = BigInteger;
      tmp2 = Integer;
      obj2 = Object.create(BigInteger.prototype);
      obj = {};
      obj.value = Integer;
      flag = false;
      obj.sign = false;
      obj.isSmall = false;
    }
    return obj;
  }
  prev() {
    value = this.value;
    if (-9007199254740992 < value - 1) {
      tmp4 = SmallInteger;
      diff = value - 1;
      obj = Object.create(SmallInteger.prototype);
      obj1 = {};
      obj1.value = diff;
      num = 0;
      obj1.sign = diff < 0;
      flag3 = true;
      obj1.isSmall = true;
      obj = obj1;
    } else {
      tmp = BigInteger;
      tmp2 = Integer;
      obj2 = Object.create(BigInteger.prototype);
      obj = {};
      obj.value = Integer;
      flag = true;
      obj.sign = true;
      flag2 = false;
      obj.isSmall = false;
    }
    return obj;
  }
  toArray(arg0) {
    return toBase(this, arg0);
  }
  toString(arg0, arg1) {
    num = arg0;
    if (arg0 === undefined) {
      num = 10;
    }
    self = this;
    if (10 != num) {
      tmp3 = arg1;
      closure_0 = arg1;
      tmp4 = toBase;
      num2 = 0;
      iter = toBase(self, num);
      str = "";
      str2 = "";
      if (iter.isNegative) {
        str2 = "-";
      }
      value = iter.value;
      mapped = value.map((arg0) => {
        let arr = closure_0;
        if (!closure_0) {
          arr = outer1_1;
        }
        if (arg0 < arr.length) {
          let text = arr[arg0];
        } else {
          text = `${"<" + arg0}>`;
        }
        return text;
      });
      sum = str2 + mapped.join("");
    } else {
      tmp = globalThis;
      _String = String;
      sum = String(self.value);
    }
    return sum;
  }
  valueOf() {
    return this.value;
  }
}
class NativeBigInt {
  constructor(arg0) {
    this.value = arg0;
    return;
  }
  add(arg0) {
    sum = this.value + parseValue(arg0).value;
    obj = Object.create(NativeBigInt.prototype);
    obj.value = sum;
    return obj;
  }
  subtract(arg0) {
    diff = this.value - parseValue(arg0).value;
    obj = Object.create(NativeBigInt.prototype);
    obj.value = diff;
    return obj;
  }
  negate() {
    tmp = -this.value;
    obj = Object.create(NativeBigInt.prototype);
    obj.value = tmp;
    return obj;
  }
  abs() {
    self = this;
    tmp = NativeBigInt;
    if (this.value >= 0) {
      value = self.value;
    } else {
      value = -self.value;
    }
    obj = Object.create(tmp.prototype);
    obj.value = value;
    return obj;
  }
  multiply(arg0) {
    result = this.value * parseValue(arg0).value;
    obj = Object.create(NativeBigInt.prototype);
    obj.value = result;
    return obj;
  }
  square(arg0) {
    result = this.value * this.value;
    obj = Object.create(NativeBigInt.prototype);
    obj.value = result;
    return obj;
  }
  pow(arg0) {
    self = this;
    iter = parseValue(arg0);
    value = this.value;
    value = iter.value;
    BigIntResult = require("module_0");
    BigIntResult1 = require("module_1");
    if (value === BigIntResult) {
      tmp18 = Integer;
      return Integer[1];
    } else if (value === BigIntResult) {
      tmp17 = Integer;
      return Integer[0];
    } else if (value === BigIntResult1) {
      tmp16 = Integer;
      return Integer[1];
    } else {
      _BigInt = BigInt;
      num = -1;
      if (value === require("module_4294967295")) {
        tmp15 = Integer;
        return iter.isEven() ? tmp15[1] : tmp15[-1];
      } else if (iter.isNegative()) {
        tmp13 = NativeBigInt;
        obj = Object.create(NativeBigInt.prototype);
        obj.value = BigIntResult;
        return obj;
      } else {
        tmp4 = Integer;
        obj = Integer[1];
        timesResult = obj;
        diff = value;
        if ((value & BigIntResult1) === BigIntResult1) {
          timesResult = obj.times(self);
          diff = value - 1;
        }
        obj2 = timesResult;
        tmp7 = timesResult;
        if (diff !== BigIntResult) {
          do {
            result = diff / tmp3;
            squareResult = self.square();
            tmp10 = obj2;
            timesResult1 = obj2;
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
    value = this.value;
    value = parseValue(arg0).value;
    tmp = value;
    if (value < 0) {
      tmp = -value;
    }
    tmp2 = value;
    if (value < 0) {
      tmp2 = -value;
    }
    num = 0;
    if (tmp !== tmp2) {
      num2 = -1;
      if (tmp > tmp2) {
        num2 = 1;
      }
      num = num2;
    }
    return num;
  }
  compare(arg0) {
    if (arg0 === Infinity) {
      num5 = -1;
      return -1;
    } else {
      num = -Infinity;
      if (arg0 === -Infinity) {
        num4 = 1;
        return 1;
      } else {
        self = this;
        value = this.value;
        tmp = parseValue;
        value = parseValue(arg0).value;
        num2 = 0;
        if (value !== value) {
          num3 = -1;
          if (value > value) {
            num3 = 1;
          }
          num2 = num3;
        }
        return num2;
      }
    }
  }
  isEven() {
    tmp = this.value & require("module_1");
    return tmp === require("module_0");
  }
  isOdd() {
    tmp = this.value & require("module_1");
    return tmp === require("module_1");
  }
  isUnit() {
    return this.abs().value === require("module_1");
  }
  isZero() {
    return this.value === require("module_0");
  }
  next() {
    sum = this.value + require("module_1");
    obj = Object.create(NativeBigInt.prototype);
    obj.value = sum;
    return obj;
  }
  prev() {
    diff = this.value - require("module_1");
    obj = Object.create(NativeBigInt.prototype);
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
    if (array.length !== Integer.length) {
      let num3 = -1;
      if (array.length > arr.length) {
        num3 = 1;
      }
      let num = num3;
    } else {
      let diff2 = array.length - 1;
      num = 0;
      if (0 <= diff2) {
        while (array[diff2] === arr[diff2]) {
          diff2 = diff2 - 1;
          num = 0;
        }
        let num2 = -1;
        if (array[diff2] > arr[diff2]) {
          num2 = 1;
        }
        num = num2;
      }
    }
    if (num < 0) {
      if (0 === length) {
        return 0;
      } else if (1 === length) {
        return array[0];
      } else if (2 === length) {
        return array[0] + array[1] * 10000000;
      } else {
        return array[0] + (array[1] + array[2] * 10000000) * 10000000;
      }
    }
  }
  return array;
}
function addAny(substr1, substr) {
  if (substr1.length >= substr.length) {
    const _Array = Array;
    let arr = new Array(length);
    let num10 = 0;
    let num11 = 0;
    let num12 = 0;
    let num13 = 0;
    if (0 < substr.length) {
      do {
        let sum = substr1[num11] + substr[num11] + num10;
        let tmp14 = num11;
        let num14 = 0;
        if (sum >= 10000000) {
          num14 = 1;
        }
        arr[num11] = sum - num14 * 10000000;
        num11 = num11 + 1;
        num10 = num14;
        num12 = num14;
        num13 = num11;
      } while (num11 < length2);
    }
    let tmp15 = num12;
    let tmp16 = num12;
    if (num13 < substr1.length) {
      do {
        let sum1 = substr1[num13] + tmp15;
        let num15 = 0;
        let tmp18 = num13;
        if (sum1 === 10000000) {
          num15 = 1;
        }
        num13 = num13 + 1;
        arr[tmp18] = sum1 - num15 * 10000000;
        tmp15 = num15;
        tmp16 = num15;
      } while (num13 < length);
    }
    let tmp7 = arr;
    if (0 < tmp16) {
      arr = arr.push(tmp16);
      tmp7 = arr;
    }
  } else {
    const _Array2 = Array;
    const array = new Array(length3);
    let num3 = 0;
    let num2 = 0;
    let num4 = 0;
    let num5 = 0;
    if (0 < substr1.length) {
      do {
        let sum2 = substr[num2] + substr1[num2] + num3;
        let tmp2 = num2;
        let num = 0;
        if (sum2 >= 10000000) {
          num = 1;
        }
        array[num2] = sum2 - num * 10000000;
        num2 = num2 + 1;
        num3 = num;
        num4 = num;
        num5 = num2;
      } while (num2 < length4);
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
      } while (num5 < length3);
    }
    tmp7 = array;
    if (0 < tmp4) {
      arr = array.push(tmp4);
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
      let tmp2 = num2;
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
    } while (num2 < length2);
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
    } while (sum2 < length);
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
  const array = new Array(length);
  let tmp2 = -arg1;
  let num = 0;
  if (0 < value.length) {
    do {
      let sum = value[num] + tmp2;
      let _Math = Math;
      let result = sum % 10000000;
      let tmp6 = num;
      let sum1 = result;
      let rounded = Math.floor(sum / 10000000);
      if (result < 0) {
        sum1 = result + 10000000;
      }
      array[num] = sum1;
      num = num + 1;
      tmp2 = rounded;
    } while (num < length);
  }
  const tmp8 = arrayToSmall(array);
  if (typeof tmp8 === "number") {
    let tmp9 = tmp8;
    if (sign) {
      tmp9 = -tmp8;
    }
    let obj = Object.create(SmallInteger.prototype);
    obj = { value: tmp9, sign: tmp9 < 0, isSmall: true };
    let obj1 = obj;
  } else {
    obj = Object.create(BigInteger.prototype);
    obj1 = { value: tmp8, sign, isSmall: false };
  }
  return obj1;
}
function multiplyLong(value, value2) {
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
    let tmp3 = num2;
    for (let num3 = 0; num3 < length2; num3 = num3 + 1) {
      let sum1 = num2 + num3;
      let sum2 = tmp2 * value2[num3] + arr[sum1];
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
function multiplyKaratsuba(substr, substr2) {
  let tmp14;
  let tmp3;
  let tmp9;
  const bound = Math.max(substr.length, substr2.length);
  if (bound <= 30) {
    return multiplyLong(substr, substr2);
  } else {
    const _Math = Math;
    const rounded = Math.ceil(bound / 2);
    substr = substr.slice(rounded);
    const substr1 = substr.slice(0, rounded);
    substr2 = substr2.slice(rounded);
    const substr3 = substr2.slice(0, rounded);
    const tmp22 = multiplyKaratsuba(substr1, substr3);
    const tmp23 = multiplyKaratsuba(substr, substr2);
    const items = [];
    let diff = tmp28 - 1;
    const tmp25 = addAny(substr1, substr);
    if (+rounded > 0) {
      do {
        let arr = items.push(0);
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3 > 0);
    }
    const result = 2 * rounded;
    const items1 = [];
    let diff1 = result - 1;
    let tmp24Result = tmp24(tmp22, items.concat(subtract(subtract(multiplyKaratsuba(addAny(substr1, substr), addAny(substr3, substr2)), tmp22), tmp23)));
    if (0 < result) {
      do {
        arr = items1.push(0);
        tmp9 = diff1;
        diff1 = diff1 - 1;
      } while (0 < tmp9);
    }
    tmp24Result = tmp24(tmp24Result, items1.concat(tmp23));
    const diff2 = tmp24Result.length - 1;
    let tmp11 = diff2;
    let tmp12 = diff2;
    if (0 === tmp24Result[diff2]) {
      do {
        let diff3 = tmp11 - 1;
        tmp11 = diff3;
        tmp12 = diff3;
        tmp14 = tmp24Result[diff3];
      } while (0 === tmp14);
    }
    tmp24Result.length = tmp12 + 1;
    return tmp24Result;
  }
}
function multiplySmallAndArray(arg0, value, sign) {
  if (arg0 < 10000000) {
    const _Array = Array;
    const array = new Array(length);
    let num4 = 0;
    let num5 = 0;
    let num6 = 0;
    let num7 = 0;
    if (0 < value.length) {
      do {
        let sum = value[num5] * arg0 + num4;
        let _Math4 = Math;
        let rounded = Math.floor(sum / 10000000);
        array[num5] = sum - rounded * 10000000;
        num5 = num5 + 1;
        num4 = rounded;
        num6 = rounded;
        num7 = num5;
      } while (num5 < length);
    }
    let tmp15Result = array;
    if (num6 > 0) {
      do {
        array[num7] = num6 % 10000000;
        let _Math5 = Math;
        let sum1 = num7 + 1;
        num6 = Math.floor(num6 / 10000000);
        num7 = sum1;
        tmp15Result = array;
      } while (num6 > 0);
    }
  } else {
    if (arg0 < 10000000) {
      const items = [arg0];
      let items2 = items;
    } else if (arg0 < 100000000000000) {
      const items1 = [arg0 % 10000000, ];
      const _Math3 = Math;
      items1[1] = Math.floor(arg0 / 10000000);
      items2 = items1;
    } else {
      items2 = [arg0 % 10000000, , ];
      const _Math = Math;
      items2[1] = Math.floor(arg0 / 10000000) % 10000000;
      const _Math2 = Math;
      items2[2] = Math.floor(arg0 / 100000000000000);
    }
    tmp15Result = multiplyLong(value, items2);
    const tmp15 = multiplyLong;
  }
  let obj = Object.create(BigInteger.prototype);
  obj = { value: tmp15Result, sign, isSmall: false };
  return obj;
}
function square(squareResult) {
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
    let tmp4 = num2;
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
function divModAny(value, closure_19) {
  let diff4;
  let length4;
  let length5;
  const iter = parseValue(closure_19);
  if (closure_2) {
    let result = NativeBigInt;
    result = value.value / iter.value;
    result = Object.create(NativeBigInt.prototype);
    result.value = result;
    const items = [result, ];
    result = value.value % iter.value;
    result = Object.create(NativeBigInt.prototype);
    result.value = result;
    items[1] = result;
    return items;
  } else {
    result = value.value;
    value = iter.value;
    if (0 === value) {
      result = globalThis;
      const _Error = Error;
      result = new.target;
      result = new.target;
      result = new Error("Cannot divide by zero");
      throw result;
    } else {
      const isSmall = iter.isSmall;
      if (value.isSmall) {
        if (isSmall) {
          result = SmallInteger;
          result = result / value;
          if (result > 0) {
            result = globalThis;
            const _Math19 = Math;
            result = Math.floor(result);
          } else {
            result = globalThis;
            const _Math18 = Math;
            result = Math.ceil(result);
          }
          result = Object.create(result.prototype);
          let obj = { value: result, sign: result < 0, isSmall: true };
          const items1 = [obj, ];
          result = result % value;
          result = Object.create(result.prototype);
          value = { value: result, sign: result < 0, isSmall: true };
          items1[1] = value;
          result = items1;
        } else {
          result = Integer;
          const items2 = [Integer[0], value];
          return items2;
        }
      } else {
        result = value;
        if (!isSmall) {
          if (result.length !== value.length) {
            let num6 = -1;
            if (result.length > value.length) {
              num6 = 1;
            }
            let num4 = num6;
          } else {
            let diff = result.length - 1;
            num4 = 0;
            if (0 <= diff) {
              while (result[diff] === value[diff]) {
                diff = diff - 1;
                num4 = 0;
              }
              let num5 = -1;
              if (result[diff] > value[diff]) {
                num5 = 1;
              }
              num4 = num5;
            }
          }
          let num7 = -1;
          if (-1 === num4) {
            const items3 = [Integer[0], value];
            return items3;
          } else if (0 === num4) {
            if (value.sign === iter.sign) {
              num7 = 1;
            }
            const items4 = [Integer[num7], Integer[0]];
            return items4;
          } else {
            if (result.length + value.length <= 200) {
              ({ length: length4, length: length5 } = value);
              const _Array2 = Array;
              let array = new Array(length5);
              for (let num19 = 0; num19 < length5; num19 = num19 + 1) {
                array[num19] = 0;
              }
              const _Math7 = Math;
              const rounded = Math.ceil(10000000 / (2 * value[length4 - 1]));
              const _Array3 = Array;
              array = new Array(length6);
              let num22 = 0;
              let num23 = 0;
              let num24 = 0;
              let num25 = 0;
              if (0 < result.length) {
                do {
                  let sum = result[num23] * rounded + num22;
                  let _Math8 = Math;
                  let rounded1 = Math.floor(sum / 10000000);
                  array[num23] = sum - rounded1 * 10000000;
                  num23 = num23 + 1;
                  num22 = rounded1;
                  num24 = rounded1;
                  num25 = num23;
                } while (num23 < length6);
              }
              if (num24 > 0) {
                do {
                  array[num25] = num24 % 10000000;
                  let _Math9 = Math;
                  let sum1 = num25 + 1;
                  num24 = Math.floor(num24 / 10000000);
                  num25 = sum1;
                } while (num24 > 0);
              }
              const _Array4 = Array;
              const array1 = new Array(length7);
              let num26 = 0;
              let num27 = 0;
              let num28 = 0;
              let num29 = 0;
              if (0 < value.length) {
                do {
                  let sum2 = value[num27] * rounded + num26;
                  let _Math10 = Math;
                  let rounded2 = Math.floor(sum2 / 10000000);
                  array1[num27] = sum2 - rounded2 * 10000000;
                  num27 = num27 + 1;
                  num26 = rounded2;
                  num28 = rounded2;
                  num29 = num27;
                } while (num27 < length7);
              }
              if (num28 > 0) {
                do {
                  array1[num29] = num28 % 10000000;
                  let _Math11 = Math;
                  let sum3 = num29 + 1;
                  num28 = Math.floor(num28 / 10000000);
                  num29 = sum3;
                } while (num28 > 0);
              }
              if (array.length <= result.length) {
                array.push(0);
              }
              array1.push(0);
              let diff1 = length3 - length4;
              if (diff1 >= 0) {
                do {
                  let tmp60 = diff1;
                  let num31 = 9999999;
                  if (array[diff1 + length4] !== tmp58) {
                    let _Math12 = Math;
                    num31 = Math.floor((array[diff1 + length4] * 10000000 + array[diff1 + length4 - 1]) / tmp58);
                  }
                  let length8 = array1.length;
                  let num32 = 0;
                  let num33 = 0;
                  let num34 = 0;
                  let num35 = 0;
                  if (0 < length8) {
                    do {
                      let sum4 = num34 + num31 * array1[num32];
                      let _Math13 = Math;
                      let rounded3 = Math.floor(sum4 / 10000000);
                      let sum5 = num33 + (array[diff1 + num32] - (sum4 - rounded3 * 10000000));
                      let tmp64 = num32;
                      if (sum5 < 0) {
                        array[diff1 + num32] = sum5 + 10000000;
                        let num36 = num7;
                      } else {
                        array[diff1 + num32] = sum5;
                        num36 = 0;
                      }
                      num32 = num32 + 1;
                      num33 = num36;
                      num34 = rounded3;
                      num35 = num36;
                    } while (num32 < length8);
                  }
                  let tmp65 = num31;
                  let tmp66 = num31;
                  if (0 !== num35) {
                    do {
                      let diff2 = tmp65 - 1;
                      let tmp68 = num35;
                      let num37 = 0;
                      let num38 = 0;
                      let num39 = 0;
                      if (0 < length8) {
                        do {
                          let sum6 = num38 + (array[diff1 + num37] - 10000000 + array1[num37]);
                          let tmp70 = num37;
                          if (sum6 < 0) {
                            array[diff1 + num37] = sum6 + 10000000;
                            let num40 = 0;
                          } else {
                            array[diff1 + num37] = sum6;
                            num40 = 1;
                          }
                          num37 = num37 + 1;
                          num38 = num40;
                          num39 = num40;
                        } while (num37 < length8);
                      }
                      num35 = num35 + num39;
                      tmp65 = diff2;
                      tmp66 = diff2;
                    } while (0 !== num35);
                  }
                  array[diff1] = tmp66;
                  diff1 = diff1 - 1;
                } while (diff1 >= 0);
              }
              const _Array5 = Array;
              const array2 = new Array(length9);
              for (let num41 = 0; num41 < length9; num41 = num41 + 1) {
                array2[num41] = 0;
              }
              let diff3 = length9 - 1;
              let num42 = 0;
              let num43 = 0;
              if (0 <= diff3) {
                do {
                  let sum7 = num42 * 10000000 + array[diff3];
                  let result1 = sum7 / rounded;
                  let tmp79 = diff3;
                  if (0 < result1) {
                    let _Math15 = Math;
                    let rounded4 = Math.floor(result1);
                  } else {
                    let _Math14 = Math;
                    rounded4 = Math.ceil(result1);
                  }
                  num42 = sum7 - rounded4 * rounded;
                  array2[diff3] = rounded4 | 0;
                  diff3 = diff3 - 1;
                  num43 = num42;
                } while (0 <= diff3);
              }
              const items5 = [array2, num43 | 0];
              const items6 = [arrayToSmall(array), arrayToSmall(items5[0])];
              let items9 = items6;
            } else {
              let length2 = result.length;
              const items7 = [];
              let items8 = [];
              result = globalThis;
              let tmp32 = items8;
              if (length2) {
                do {
                  diff4 = length2 - 1;
                  let arr1 = items8.unshift(result[diff4]);
                  let diff5 = items8.length - 1;
                  let tmp8 = items8;
                  let tmp9 = diff5;
                  let tmp10 = diff5;
                  if (0 === items8[diff5]) {
                    do {
                      let diff6 = tmp9 - 1;
                      tmp9 = diff6;
                      tmp10 = diff6;
                      tmp12 = items8[diff6];
                    } while (0 === tmp12);
                  }
                  items8.length = tmp10 + 1;
                  if (items8.length !== value.length) {
                    let num10 = num7;
                    if (items8.length > value.length) {
                      num10 = 1;
                    }
                    let num8 = num10;
                  } else {
                    let diff7 = items8.length - 1;
                    num8 = 0;
                    if (0 <= diff7) {
                      let tmp14 = diff7;
                      while (items8[diff7] === value[diff7]) {
                        diff7 = diff7 - 1;
                        num8 = 0;
                      }
                      let num9 = num7;
                      if (items8[diff7] > value[diff7]) {
                        num9 = 1;
                      }
                      num8 = num9;
                    }
                  }
                  if (num8 < 0) {
                    let arr2 = items7.push(0);
                    let tmp30 = items8;
                  } else {
                    let length12 = items8.length;
                    result = items8[length12 - 1] * 10000000 + items8[length12 - 2];
                    let result2 = result;
                    result = value[length11 - 1] * 10000000 + value[length11 - 2];
                    if (length12 > length11) {
                      result2 = (result + 1) * 10000000;
                    }
                    let _Math4 = Math;
                    let rounded5 = Math.ceil(result2 / result);
                    while (true) {
                      let length = value.length;
                      let _Array = Array;
                      let tmp17 = new.target;
                      let tmp18 = new.target;
                      let tmp19 = length;
                      let array3 = new Array(length);
                      let tmp20 = array3;
                      let tmp21 = rounded5;
                      let num11 = 0;
                      let num12 = 0;
                      let num13 = 0;
                      let num14 = 0;
                      if (0 < length) {
                        do {
                          let sum8 = value[num12] * rounded5 + num11;
                          let _Math5 = Math;
                          let rounded6 = Math.floor(sum8 / 10000000);
                          array3[num12] = sum8 - rounded6 * 10000000;
                          num12 = num12 + 1;
                          num11 = rounded6;
                          num13 = rounded6;
                          num14 = num12;
                        } while (num12 < length);
                      }
                      if (num13 > 0) {
                        do {
                          array3[num14] = num13 % 10000000;
                          let _Math6 = Math;
                          let sum9 = num14 + 1;
                          num13 = Math.floor(num13 / 10000000);
                          num14 = sum9;
                        } while (num13 > 0);
                      }
                      if (array3.length !== items8.length) {
                        let num17 = num7;
                        if (array3.length > items8.length) {
                          num17 = 1;
                        }
                        let num15 = num17;
                      } else {
                        let diff8 = array3.length - 1;
                        num15 = 0;
                        if (0 <= diff8) {
                          let tmp26 = diff8;
                          while (array3[diff8] === items8[diff8]) {
                            diff8 = diff8 - 1;
                            num15 = 0;
                          }
                          let num16 = num7;
                          if (array3[diff8] > items8[diff8]) {
                            num16 = 1;
                          }
                          num15 = num16;
                        }
                      }
                      let tmp27 = rounded5;
                      if (num15 <= 0) {
                        break;
                      } else {
                        rounded5 = rounded5 - 1;
                        tmp27 = rounded5;
                        if (!rounded5) {
                          break;
                        }
                      }
                    }
                    let arr3 = items7.push(tmp27);
                    let tmp29 = subtract;
                    tmp30 = subtract(items8, array3);
                  }
                  items8 = tmp30;
                  tmp32 = tmp30;
                  length2 = diff4;
                } while (diff4);
              }
              const reversed = items7.reverse();
              items9 = [arrayToSmall(items7), arrayToSmall(tmp32)];
            }
            const first = items9[0];
            const sign = value.sign;
            if (typeof first === "number") {
              let tmp85 = first;
              if (tmp83) {
                tmp85 = -first;
              }
              obj = Object.create(SmallInteger.prototype);
              const obj1 = { value: tmp85, sign: tmp85 < 0, isSmall: true };
              let obj2 = obj1;
            } else {
              result = BigInteger;
              result = Object.create(BigInteger.prototype);
              obj2 = { value: first, sign: tmp83, isSmall: false };
            }
            if (typeof items9[1] === "number") {
              let tmp88 = tmp84;
              if (sign) {
                tmp88 = -tmp84;
              }
              Object.create(SmallInteger.prototype);
              const obj4 = { value: tmp88, sign: tmp88 < 0, isSmall: true };
              let obj5 = obj4;
            } else {
              result = BigInteger;
              result = Object.create(BigInteger.prototype);
              obj5 = { value: tmp84, sign, isSmall: false };
            }
            const items10 = [obj2, obj5];
            return items10;
          }
        } else if (1 === value) {
          const items11 = [value, ];
          result = Integer;
          items11[1] = Integer[0];
          return items11;
        } else if (-1 == value) {
          const items12 = [value.negate(), ];
          result = Integer;
          items12[1] = Integer[0];
          return items12;
        } else {
          result = globalThis;
          const _Math20 = Math;
          result = Math.abs(value);
          if (result < 10000000) {
            const _Array6 = Array;
            const array4 = new Array(length10);
            for (let num44 = 0; num44 < length10; num44 = num44 + 1) {
              array4[num44] = 0;
            }
            let diff9 = length10 - 1;
            let num45 = 0;
            let num46 = 0;
            if (0 <= diff9) {
              do {
                result = num45 * 10000000 + result[diff9];
                result = result / result;
                result = diff9;
                if (0 < result) {
                  let _Math17 = Math;
                  result = Math.floor(result);
                } else {
                  let _Math16 = Math;
                  result = Math.ceil(result);
                }
                num45 = result - result * result;
                array4[diff9] = result | 0;
                diff9 = diff9 - 1;
                num46 = num45;
              } while (0 <= diff9);
            }
            const items13 = [array4, num46 | 0];
            result = arrayToSmall(items13[0]);
            result = items13[1];
            if (value.sign) {
              result = -result;
            }
            if (typeof result === "number") {
              if (value.sign !== iter.sign) {
                result = -result;
              }
              result = SmallInteger;
              result = Object.create(SmallInteger.prototype);
              const obj6 = { value: result, sign: result < 0, isSmall: true };
              const items14 = [obj6, ];
              result = Object.create(SmallInteger.prototype);
              const obj7 = { value: result, sign: result < 0, isSmall: true };
              items14[1] = obj7;
              let items15 = items14;
            } else {
              result = BigInteger;
              result = Object.create(BigInteger.prototype);
              const obj8 = { value: result, sign: value.sign !== iter.sign, isSmall: false };
              items15 = [obj8, ];
              result = SmallInteger;
              result = Object.create(SmallInteger.prototype);
              const obj9 = { value: result, sign: result < 0, isSmall: true };
              items15[1] = obj9;
            }
            return items15;
          } else if (result < 10000000) {
            const items16 = [result];
            let items18 = items16;
          } else if (result < 100000000000000) {
            const items17 = [result % 10000000, ];
            const _Math3 = Math;
            items17[1] = Math.floor(result / 10000000);
            items18 = items17;
          } else {
            items18 = [result % 10000000, , ];
            const _Math = Math;
            items18[1] = Math.floor(result / 10000000) % 10000000;
            const _Math2 = Math;
            items18[2] = Math.floor(result / 100000000000000);
          }
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
    while (true) {
      let tmp4 = num3;
      if (!absResult1.lesser(items[num3])) {
        let tmp5 = Integer;
        let obj4 = Integer(items[num3]);
        let modPowResult = obj4.modPow(tmp, absResult1);
        if (!modPowResult.isUnit()) {
          if (!modPowResult.equals(prevResult)) {
            let diff1 = diff;
            if (0 === diff) {
              break;
            } else {
              let squareResult = modPowResult.square();
              let modResult = squareResult.mod(absResult1);
              let tmp7 = diff1;
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
function bitwise(isNegative, arg1, arg2) {
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
  const items = [];
  let tmp3 = notResult1;
  let tmp4 = notResult;
  if (!notResult.isZero()) {
    while (true) {
      let tmp6 = closure_19;
      let tmp5 = divModAny;
      let tmp7 = divModAny(tmp4, closure_19);
      let obj4 = tmp7[1];
      let toJSNumberResult = obj4.toJSNumber();
      let tmp9 = tmp3;
      let diff = toJSNumberResult;
      if (isNegativeResult) {
        diff = tmp6 - 1 - toJSNumberResult;
      }
      let tmp5Result = tmp5(tmp3, tmp6);
      let obj5 = tmp5Result[1];
      let toJSNumberResult1 = obj5.toJSNumber();
      let diff1 = toJSNumberResult1;
      if (isNegativeResult1) {
        diff1 = tmp6 - 1 - toJSNumberResult1;
      }
      let first = tmp7[0];
      let first1 = tmp5Result[0];
      let arr = items.push(arg2(diff, diff1));
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
  if (0 !== arg2(num, num2)) {
    let tmp16 = Integer(-1);
  } else {
    tmp16 = Integer(0);
  }
  let diff2 = items.length - 1;
  let addResult = tmp16;
  let tmp19 = tmp16;
  if (0 <= diff2) {
    do {
      let tmp20 = closure_19;
      let multiplyResult = addResult.multiply(closure_19);
      let tmp21 = Integer;
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
    ({ p, e } = integerLogarithm(self2, squareResult.square(squareResult)));
    const multiplyResult = p.multiply(squareResult);
    if (multiplyResult.compareTo(self2) <= 0) {
      let obj = { p: null, e: null };
      obj[0] = multiplyResult;
      obj[1] = 2 * e + 1;
    } else {
      obj = { p: null, e: null };
      obj[0] = p;
      obj[1] = 2 * e;
    }
    return obj;
  } else {
    obj = { p: null, e: 0 };
    obj[0] = Integer(1);
    return obj;
  }
}
function gcd(absResult, absResult1) {
  let divideResult2;
  let obj16;
  let subtractResult;
  absResult = parseValue(absResult).abs();
  const obj = parseValue(absResult);
  absResult1 = parseValue(absResult1).abs();
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
          let value = iter2.value;
          let tmp5 = obj7;
          let tmp6 = iter;
          let tmp7 = iter2;
          if (typeof value === "number") {
            let tmp10 = c21;
            let tmp9 = value | c21;
          } else if (typeof value === "bigint") {
            let _BigInt = BigInt;
            let tmp8 = c21;
            tmp9 = value | BigInt(c21);
          } else {
            tmp9 = value[0] + value[1] * 10000000 | 1073758208;
          }
          value = iter.value;
          let tmp11 = tmp9 & -tmp9;
          if (typeof value === "number") {
            let tmp14 = c21;
            let tmp13 = value | c21;
          } else if (typeof value === "bigint") {
            let _BigInt2 = BigInt;
            let tmp12 = c21;
            tmp13 = value | BigInt(c21);
          } else {
            tmp13 = value[0] + value[1] * 10000000 | 1073758208;
          }
          let tmp16 = parseValue;
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
        value = iter3.value;
        let tmp20 = iter3;
        if (typeof value === "number") {
          let tmp23 = c21;
          let tmp22 = value | c21;
        } else if (typeof value === "bigint") {
          let _BigInt3 = BigInt;
          let tmp21 = c21;
          tmp22 = value | BigInt(c21);
        } else {
          tmp22 = value[0] + value[1] * 10000000 | 1073758208;
        }
        divideResult2 = iter3.divide(tmp22 & -tmp22);
        iter3 = divideResult2;
        obj11 = tmp3;
        obj12 = divideResult2;
      } while (divideResult2.isEven());
    }
    do {
      let iter4 = obj11;
      let tmp24 = obj12;
      let tmp25 = obj11;
      if (obj11.isEven()) {
        do {
          let value1 = iter4.value;
          let tmp26 = iter4;
          if (typeof value1 === "number") {
            let tmp29 = c21;
            let tmp28 = value1 | c21;
          } else if (typeof value1 === "bigint") {
            let _BigInt4 = BigInt;
            let tmp27 = c21;
            tmp28 = value1 | BigInt(c21);
          } else {
            tmp28 = value1[0] + value1[1] * 10000000 | 1073758208;
          }
          divideResult3 = iter4.divide(tmp28 & -tmp28);
          iter4 = divideResult3;
          tmp25 = divideResult3;
        } while (divideResult3.isEven());
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
  const obj3 = parseValue(absResult1);
}
function toBase(self, arg1) {
  let quotient;
  let remainder;
  let obj = Integer(arg1);
  if (obj.isZero()) {
    if (self.isZero()) {
      obj = { value: null, isNegative: false };
      obj[0] = [0];
      return obj;
    } else {
      const _Error = Error;
      const error = new Error("Cannot convert nonzero numbers to base 0.");
      throw error;
    }
  } else if (obj.equals(-1)) {
    if (self.isZero()) {
      obj = { value: null, isNegative: false };
      obj[0] = [0];
      return obj;
    } else if (self.isNegative()) {
      const obj1 = { value: null, isNegative: false };
      const concat2 = [].concat;
      const _Array6 = Array;
      const _Array7 = Array;
      const _Array8 = Array;
      obj1[0] = concat2.apply([], Array.apply(null, Array(-self.toJSNumber())).map(Array.prototype.valueOf, [1, 0]));
      return obj1;
    } else {
      const _Array3 = Array;
      const _Array4 = Array;
      const _Array5 = Array;
      const mapped = Array.apply(null, Array(self.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
      mapped.unshift([1]);
      let obj2 = { value: null, isNegative: false };
      const concat = [].concat;
      obj2[0] = concat.apply([], mapped);
      return obj2;
    }
  } else {
    let flag = false;
    let absResult = self;
    if (tmp) {
      absResult = self.abs();
      flag = true;
    }
    if (obj.isUnit()) {
      if (absResult.isZero()) {
        let obj3 = { value: null, isNegative: false };
        obj3[0] = [0];
        let obj4 = obj3;
      } else {
        obj4 = { value: null, isNegative: null };
        const _Array = Array;
        const _Array2 = Array;
        const _Number = Number;
        obj4[0] = Array.apply(null, Array(absResult.toJSNumber())).map(Number.prototype.valueOf, 1);
        obj4[1] = flag;
        const applyResult2 = Array.apply(null, Array(absResult.toJSNumber()));
      }
      return obj4;
    } else {
      const items = [];
      obj2 = absResult;
      if (absResult.isNegative()) {
        while (true) {
          let divmodResult = obj2.divmod(obj);
          ({ quotient, remainder } = divmodResult);
          let absResult1 = remainder;
          let nextResult = quotient;
          if (remainder.isNegative()) {
            let minusResult = obj.minus(remainder);
            absResult1 = minusResult.abs();
            nextResult = quotient.next();
          }
          let arr = items.push(absResult1.toJSNumber());
          obj2 = nextResult;
          if (nextResult.isNegative()) {
            continue;
          } else {
            let num3 = 0;
            obj2 = nextResult;
            obj3 = nextResult;
            if (nextResult.compareAbs(obj) < 0) {
              break;
            }
          }
          continue;
        }
      } else {
        obj2 = absResult;
        obj3 = absResult;
      }
      items.push(obj3.toJSNumber());
      const obj5 = { value: null, isNegative: null };
      obj5[0] = items.reverse();
      obj5[1] = flag;
      return obj5;
    }
    tmp = self.isNegative() && obj.isPositive();
  }
}
function parseStringValue(arr) {
  let tmp28;
  let tmp2 = -9007199254740992 < tmp;
  if (-9007199254740992 < +arr) {
    tmp2 = tmp < 9007199254740992;
  }
  if (tmp2) {
    if (0 < +arr) {
      const _Math4 = Math;
      let rounded = Math.floor(tmp51);
    } else {
      const _Math3 = Math;
      rounded = Math.ceil(tmp51);
    }
    if (+arr === rounded) {
      if (closure_2) {
        const _BigInt = BigInt;
        let obj = Object.create(NativeBigInt.prototype);
        obj.value = BigInt(tmp51);
        let obj1 = obj;
        const BigIntResult = BigInt(tmp51);
      } else {
        obj = Object.create(SmallInteger.prototype);
        obj1 = { value: tmp51, sign: tmp51 < 0, isSmall: true };
      }
      return obj1;
    } else {
      const _Error5 = Error;
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
      const error1 = new Error("Invalid integer: " + parts.join("e"));
      throw error1;
    } else {
      if (2 === parts.length) {
        let substr = arr4;
        if ("+" === parts[1][0]) {
          substr = arr4.slice(1);
        }
        if (0 < +substr) {
          const _Math2 = Math;
          let rounded1 = Math.floor(tmp5);
        } else {
          const _Math = Math;
          rounded1 = Math.ceil(tmp5);
        }
        if (+substr === rounded1) {
          let tmp9 = -9007199254740992 < tmp5;
          if (-9007199254740992 < tmp5) {
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
              const error2 = new Error("Cannot include negative exponent part for integers");
              throw error2;
            } else {
              const _Array = Array;
              const array = new Array(diff + 1);
              str2 = sum + array.join("0");
            }
          }
        }
        const _Error3 = Error;
        const error3 = new Error("Invalid integer: " + tmp5 + " is not a valid exponent.");
        throw error3;
      }
      obj = /^([0-9][0-9]*)$/;
      if (obj.test(str2)) {
        if (closure_2) {
          let text = str2;
          if (tmp3) {
            text = `-${str2}`;
          }
          const obj2 = Object.create(NativeBigInt.prototype);
          obj2.value = BigInt(text);
          return obj2;
        } else {
          const items = [];
          let length = str2.length;
          let diff1 = length - 7;
          if (length > 0) {
            do {
              arr = items.push(+str2.slice(diff1, length));
              let num10 = diff1 - 7;
              let tmp23 = length;
              if (num10 < 0) {
                num10 = 0;
              }
              length = length - 7;
              diff1 = num10;
            } while (0 < length);
          }
          const diff2 = items.length - 1;
          let tmp25 = diff2;
          let tmp26 = diff2;
          if (0 === items[diff2]) {
            do {
              let diff3 = tmp25 - 1;
              tmp25 = diff3;
              tmp26 = diff3;
              tmp28 = items[diff3];
            } while (0 === tmp28);
          }
          items.length = tmp26 + 1;
          Object.create(BigInteger.prototype);
          const obj4 = { value: items, sign: tmp3, isSmall: false };
          return obj4;
        }
      } else {
        const _Error = Error;
        const error4 = new Error("Invalid integer: " + str2);
        throw error4;
      }
    }
  }
}
function parseValue(result) {
  if (typeof result === "number") {
    if (closure_2) {
      const _BigInt = BigInt;
      let obj = Object.create(NativeBigInt.prototype);
      obj.value = BigInt(result);
      let tmp6 = obj;
      const BigIntResult = BigInt(result);
    } else {
      let tmp4 = -9007199254740992 < result;
      if (tmp4) {
        tmp4 = result < 9007199254740992;
      }
      if (!tmp4) {
        tmp6 = parseStringValue(result.toString());
      }
    }
    if (result > 0) {
      const _Math2 = Math;
      let rounded = Math.floor(result);
    } else {
      const _Math = Math;
      rounded = Math.ceil(result);
    }
    if (result !== rounded) {
      const _Error = Error;
      const error = new Error(result + " is not an integer.");
      throw error;
    } else {
      obj = Object.create(SmallInteger.prototype);
      obj = { value: result, sign: result < 0, isSmall: true };
      tmp6 = obj;
    }
  } else {
    if (typeof result === "string") {
      let tmp2 = parseStringValue(result);
    } else {
      tmp2 = result;
      if (typeof result === "bigint") {
        const obj1 = Object.create(NativeBigInt.prototype);
        obj1.value = result;
        tmp2 = obj1;
      }
    }
    return tmp2;
  }
}
let items = [4740992, Math.floor(900719925.4740992) % 10000000, Math.floor(90.07199254740992)];
const Integer = items;
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
const divide = BigInteger.prototype.divide;
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
    constructor(arg0, arg1, arg2, arg3) {
      if (undefined === arg0) {
        tmp32 = Integer;
        first = Integer[0];
      } else {
        tmp33 = arg1;
        if (undefined !== arg1) {
          str = arg2;
          num = 10;
          if (10 === +arg1) {
          }
          tmp3 = parseBase;
          if (typeof parseBase !== "function") {
            str10 = "Trying to call a non-function";
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          if (!str) {
            str = c1;
          }
          tmp4 = arg3;
          tmp5 = globalThis;
          _String = String;
          str2 = String(arg0);
          formatted1 = str;
          formatted = str2;
          if (!arg3) {
            formatted = str2.toLowerCase();
            formatted1 = str.toLowerCase();
          }
          length = formatted.length;
          _Math = Math;
          absolute = Math.abs(arg1);
          obj = {};
          num2 = 0;
          num3 = 1;
          num4 = 0;
          if (0 < formatted1.length) {
            do {
              obj[formatted1[num4]] = num4;
              num4 = num4 + 1;
              length2 = formatted1.length;
            } while (num4 < length2);
          }
          str3 = "1";
          str4 = "-";
          num5 = 0;
          if (0 < length) {
            while (true) {
              tmp7 = formatted[num5];
              tmp8 = num5;
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
            _Error = Error;
            str5 = " is not a valid digit in base ";
            tmp9 = new.target;
            str6 = ".";
            tmp10 = new.target;
            error = new Error(tmp7 + " is not a valid digit in base " + arg1 + ".");
            tmp12 = error;
            throw error;
          }
          tmp13 = parseValue;
          tmp15 = "-" === formatted[0];
          num6 = 0;
          tmp14 = parseValue(arg1);
          if (tmp15) {
            num6 = 1;
          }
          items = [];
          str7 = "<";
          str8 = ">";
          if (num6 < formatted.length) {
            while (true) {
              tmp16 = formatted[num6];
              tmp17 = num6;
              if (tmp16 in obj) {
                tmp26 = parseValue;
                arr = items.push(parseValue(obj[tmp16]));
                sum = num6;
              } else {
                tmp18 = num6;
                if ("<" !== tmp16) {
                  break;
                } else {
                  sum = tmp18 + 1;
                  while (">" !== formatted[sum]) {
                    tmp18 = sum;
                    if (sum >= formatted.length) {
                      break;
                    }
                  }
                  tmp20 = parseValue;
                  arr1 = items.push(parseValue(formatted.slice(num6 + 1, sum)));
                }
              }
              num6 = sum + 1;
            }
            _Error2 = Error;
            str9 = " is not a valid character";
            tmp22 = new.target;
            tmp23 = new.target;
            error1 = new Error(tmp16 + " is not a valid character");
            tmp25 = error1;
            throw error1;
          }
          tmp28 = Integer;
          [tmp29, obj2] = Integer;
          diff = items.length - 1;
          addResult = tmp29;
          obj4 = tmp29;
          if (0 <= diff) {
            do {
              obj5 = items[diff];
              addResult = addResult.add(obj5.times(timesResult));
              timesResult = timesResult.times(tmp14);
              diff = diff - 1;
              obj4 = addResult;
            } while (0 <= diff);
          }
          negateResult = obj4;
          if (tmp15) {
            negateResult = obj4.negate();
          }
          first = negateResult;
        }
        tmp = parseValue;
        first = parseValue(arg0);
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
while (true) {
  class Integer {
    constructor(arg0, arg1, arg2, arg3) {
      if (undefined === arg0) {
        tmp32 = Integer;
        first = Integer[0];
      } else {
        tmp33 = arg1;
        if (undefined !== arg1) {
          str = arg2;
          num = 10;
          if (10 === +arg1) {
          }
          tmp3 = parseBase;
          if (typeof parseBase !== "function") {
            str10 = "Trying to call a non-function";
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          if (!str) {
            str = c1;
          }
          tmp4 = arg3;
          tmp5 = globalThis;
          _String = String;
          str2 = String(arg0);
          formatted1 = str;
          formatted = str2;
          if (!arg3) {
            formatted = str2.toLowerCase();
            formatted1 = str.toLowerCase();
          }
          length = formatted.length;
          _Math = Math;
          absolute = Math.abs(arg1);
          obj = {};
          num2 = 0;
          num3 = 1;
          num4 = 0;
          if (0 < formatted1.length) {
            do {
              obj[formatted1[num4]] = num4;
              num4 = num4 + 1;
              length2 = formatted1.length;
            } while (num4 < length2);
          }
          str3 = "1";
          str4 = "-";
          num5 = 0;
          if (0 < length) {
            while (true) {
              tmp7 = formatted[num5];
              tmp8 = num5;
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
            _Error = Error;
            str5 = " is not a valid digit in base ";
            tmp9 = new.target;
            str6 = ".";
            tmp10 = new.target;
            error = new Error(tmp7 + " is not a valid digit in base " + arg1 + ".");
            tmp12 = error;
            throw error;
          }
          tmp13 = parseValue;
          tmp15 = "-" === formatted[0];
          num6 = 0;
          tmp14 = parseValue(arg1);
          if (tmp15) {
            num6 = 1;
          }
          items = [];
          str7 = "<";
          str8 = ">";
          if (num6 < formatted.length) {
            while (true) {
              tmp16 = formatted[num6];
              tmp17 = num6;
              if (tmp16 in obj) {
                tmp26 = parseValue;
                arr = items.push(parseValue(obj[tmp16]));
                sum = num6;
              } else {
                tmp18 = num6;
                if ("<" !== tmp16) {
                  break;
                } else {
                  sum = tmp18 + 1;
                  while (">" !== formatted[sum]) {
                    tmp18 = sum;
                    if (sum >= formatted.length) {
                      break;
                    }
                  }
                  tmp20 = parseValue;
                  arr1 = items.push(parseValue(formatted.slice(num6 + 1, sum)));
                }
              }
              num6 = sum + 1;
            }
            _Error2 = Error;
            str9 = " is not a valid character";
            tmp22 = new.target;
            tmp23 = new.target;
            error1 = new Error(tmp16 + " is not a valid character");
            tmp25 = error1;
            throw error1;
          }
          tmp28 = Integer;
          [tmp29, obj2] = Integer;
          diff = items.length - 1;
          addResult = tmp29;
          obj4 = tmp29;
          if (0 <= diff) {
            do {
              obj5 = items[diff];
              addResult = addResult.add(obj5.times(timesResult));
              timesResult = timesResult.times(tmp14);
              diff = diff - 1;
              obj4 = addResult;
            } while (0 <= diff);
          }
          negateResult = obj4;
          if (tmp15) {
            negateResult = obj4.negate();
          }
          first = negateResult;
        }
        tmp = parseValue;
        first = parseValue(arg0);
      }
      return first;
    }
  }
  let tmp = num;
  if (0 < num) {
    class Integer {
      constructor(arg0, arg1, arg2, arg3) {
        if (undefined === arg0) {
          tmp32 = Integer;
          first = Integer[0];
        } else {
          tmp33 = arg1;
          if (undefined !== arg1) {
            str = arg2;
            num = 10;
            if (10 === +arg1) {
            }
            tmp3 = parseBase;
            if (typeof parseBase !== "function") {
              str10 = "Trying to call a non-function";
              throwTypeErrorResult = HermesBuiltin.throwTypeError();
            }
            if (!str) {
              str = c1;
            }
            tmp4 = arg3;
            tmp5 = globalThis;
            _String = String;
            str2 = String(arg0);
            formatted1 = str;
            formatted = str2;
            if (!arg3) {
              formatted = str2.toLowerCase();
              formatted1 = str.toLowerCase();
            }
            length = formatted.length;
            _Math = Math;
            absolute = Math.abs(arg1);
            obj = {};
            num2 = 0;
            num3 = 1;
            num4 = 0;
            if (0 < formatted1.length) {
              do {
                obj[formatted1[num4]] = num4;
                num4 = num4 + 1;
                length2 = formatted1.length;
              } while (num4 < length2);
            }
            str3 = "1";
            str4 = "-";
            num5 = 0;
            if (0 < length) {
              while (true) {
                tmp7 = formatted[num5];
                tmp8 = num5;
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
              _Error = Error;
              str5 = " is not a valid digit in base ";
              tmp9 = new.target;
              str6 = ".";
              tmp10 = new.target;
              error = new Error(tmp7 + " is not a valid digit in base " + arg1 + ".");
              tmp12 = error;
              throw error;
            }
            tmp13 = parseValue;
            tmp15 = "-" === formatted[0];
            num6 = 0;
            tmp14 = parseValue(arg1);
            if (tmp15) {
              num6 = 1;
            }
            items = [];
            str7 = "<";
            str8 = ">";
            if (num6 < formatted.length) {
              while (true) {
                tmp16 = formatted[num6];
                tmp17 = num6;
                if (tmp16 in obj) {
                  tmp26 = parseValue;
                  arr = items.push(parseValue(obj[tmp16]));
                  sum = num6;
                } else {
                  tmp18 = num6;
                  if ("<" !== tmp16) {
                    break;
                  } else {
                    sum = tmp18 + 1;
                    while (">" !== formatted[sum]) {
                      tmp18 = sum;
                      if (sum >= formatted.length) {
                        break;
                      }
                    }
                    tmp20 = parseValue;
                    arr1 = items.push(parseValue(formatted.slice(num6 + 1, sum)));
                  }
                }
                num6 = sum + 1;
              }
              _Error2 = Error;
              str9 = " is not a valid character";
              tmp22 = new.target;
              tmp23 = new.target;
              error1 = new Error(tmp16 + " is not a valid character");
              tmp25 = error1;
              throw error1;
            }
            tmp28 = Integer;
            [tmp29, obj2] = Integer;
            diff = items.length - 1;
            addResult = tmp29;
            obj4 = tmp29;
            if (0 <= diff) {
              do {
                obj5 = items[diff];
                addResult = addResult.add(obj5.times(timesResult));
                timesResult = timesResult.times(tmp14);
                diff = diff - 1;
                obj4 = addResult;
              } while (0 <= diff);
            }
            negateResult = obj4;
            if (tmp15) {
              negateResult = obj4.negate();
            }
            first = negateResult;
          }
          tmp = parseValue;
          first = parseValue(arg0);
        }
        return first;
      }
    }
    Integer[tmp2] = parseValue(tmp2);
  }
  class BigInteger {
    constructor(arg0, arg1) {
      return;
    }
    add(arg0) {
      self = this;
      iter = parseValue(arg0);
      if (this.sign !== iter.sign) {
        return self.subtract(iter.negate());
      } else {
        value = self.value;
        value = iter.value;
        tmp17 = BigInteger;
        if (iter.isSmall) {
          tmp4 = globalThis;
          _Math = Math;
          absolute = Math.abs(value);
          length = value.length;
          _Array = Array;
          tmp6 = new.target;
          tmp7 = new.target;
          tmp8 = length;
          array = new Array(length);
          tmp10 = array;
          num2 = 0;
          num3 = 10000000;
          num4 = 1;
          num5 = 0;
          sum1 = absolute;
          num6 = 0;
          rounded1 = absolute;
          if (0 < length) {
            do {
              sum = value[num5] - 10000000 + sum1;
              _Math2 = Math;
              rounded = Math.floor(sum / 10000000);
              array[num5] = sum - rounded * 10000000;
              sum1 = rounded + 1;
              num5 = num5 + 1;
              rounded1 = sum1;
              num6 = num5;
            } while (num5 < length);
          }
          if (rounded1 > 0) {
            do {
              array[num6] = rounded1 % 10000000;
              _Math3 = Math;
              sum2 = num6 + 1;
              rounded1 = Math.floor(rounded1 / 10000000);
              num6 = sum2;
            } while (rounded1 > 0);
          }
          obj = Object.create(tmp17.prototype);
          obj1 = {};
          obj1.value = array;
          obj1.sign = self.sign;
          flag2 = false;
          obj1.isSmall = false;
          obj = obj1;
        } else {
          tmp = addAny;
          num = 0;
          tmp2 = addAny(value, value);
          obj2 = Object.create(tmp17.prototype);
          obj = {};
          obj.value = tmp2;
          obj.sign = self.sign;
          flag = false;
          obj.isSmall = false;
        }
        return obj;
      }
    }
    subtract(arg0) {
      self = this;
      iter = parseValue(arg0);
      if (this.sign !== iter.sign) {
        return self.add(iter.negate());
      } else {
        value = self.value;
        value1 = iter.value;
        if (iter.isSmall) {
          tmp12 = subtractSmall;
          tmp13 = globalThis;
          _Math = Math;
          num7 = 0;
          obj2 = subtractSmall(value, Math.abs(value1), self.sign);
        } else {
          sign = self.sign;
          if (value.length !== value1.length) {
            num5 = -1;
            if (value.length > value1.length) {
              num5 = 1;
            }
            num3 = num5;
          } else {
            num = 1;
            diff = value.length - 1;
            num2 = 0;
            num3 = 0;
            if (0 <= diff) {
              tmp2 = diff;
              while (value[diff] === value1[diff]) {
                diff = diff - 1;
                num3 = 0;
              }
              num4 = -1;
              if (value[diff] > value1[diff]) {
                num4 = 1;
              }
              num3 = num4;
            }
          }
          num6 = 0;
          if (0 <= num3) {
            tmp6 = subtract;
            tmp4 = subtract(value, value1);
            tmp5 = sign;
          } else {
            tmp3 = subtract;
            tmp4 = subtract(value1, value);
            tmp5 = !sign;
          }
          tmp7 = arrayToSmall;
          tmp8 = arrayToSmall(tmp4);
          if (typeof tmp8 === "number") {
            tmp9 = tmp8;
            if (tmp5) {
              tmp9 = -tmp8;
            }
            tmp10 = SmallInteger;
            obj = Object.create(SmallInteger.prototype);
            obj = {};
            obj.value = tmp9;
            obj.sign = tmp9 < 0;
            flag = true;
            obj.isSmall = true;
            obj2 = obj;
          } else {
            tmp14 = BigInteger;
            obj1 = Object.create(BigInteger.prototype);
            obj2 = {};
            obj2.value = tmp8;
            obj2.sign = tmp5;
            flag2 = false;
            obj2.isSmall = false;
          }
        }
        return obj2;
      }
    }
    negate() {
      sign = !this.sign;
      obj = Object.create(BigInteger.prototype);
      return { value: this.value, sign, isSmall: false };
    }
    abs() {
      obj = Object.create(BigInteger.prototype);
      return { value: this.value, sign: false, isSmall: false };
    }
    multiply(arg0) {
      self = this;
      iter = parseValue(arg0);
      value = this.value;
      value1 = iter.value;
      tmp = this.sign !== iter.sign;
      if (!iter.isSmall) {
        length = value.length;
        length2 = value1.length;
        num2 = -0.012;
        num3 = 0.012;
        num4 = 0.000015;
        num5 = 0;
        if (0 < -0.012 * length - 0.012 * length2 + 0.000015 * length * length2) {
          tmp7 = BigInteger;
          tmp8 = multiplyKaratsuba;
          tmp9 = multiplyKaratsuba(value, value1);
          obj = Object.create(BigInteger.prototype);
          obj1 = {};
          obj1.value = tmp9;
          obj1.sign = tmp;
          flag2 = false;
          obj1.isSmall = false;
          obj = obj1;
        } else {
          tmp3 = BigInteger;
          tmp4 = multiplyLong;
          tmp5 = multiplyLong(value, value1);
          obj2 = Object.create(BigInteger.prototype);
          obj = {};
          obj.value = tmp5;
          obj.sign = tmp;
          flag = false;
          obj.isSmall = false;
        }
        return obj;
      } else {
        num = 0;
        if (0 === value1) {
          tmp21 = Integer;
          return Integer[0];
        } else {
          num10 = 1;
          if (1 === value1) {
            return self;
          } else {
            num11 = -1;
            if (-1 === value1) {
              return self.negate();
            } else {
              tmp22 = globalThis;
              _Math6 = Math;
              absolute = Math.abs(value1);
              num12 = 10000000;
              if (absolute < 10000000) {
                length3 = value.length;
                _Array = Array;
                tmp12 = new.target;
                tmp13 = new.target;
                tmp14 = length3;
                tmp11 = BigInteger;
                array = new Array(length3);
                tmp16 = array;
                num6 = 0;
                num7 = 0;
                num8 = 0;
                num9 = 0;
                if (0 < length3) {
                  do {
                    sum = value[num7] * absolute + num6;
                    _Math4 = Math;
                    rounded = Math.floor(sum / 10000000);
                    array[num7] = sum - rounded * 10000000;
                    num7 = num7 + 1;
                    num6 = rounded;
                    num8 = rounded;
                    num9 = num7;
                  } while (num7 < length3);
                }
                if (num8 > 0) {
                  do {
                    array[num9] = num8 % 10000000;
                    _Math5 = Math;
                    sum1 = num9 + 1;
                    num8 = Math.floor(num8 / 10000000);
                    num9 = sum1;
                  } while (num8 > 0);
                }
                obj3 = Object.create(tmp11.prototype);
                obj4 = {};
                obj4.value = array;
                obj4.sign = tmp;
                flag3 = false;
                obj4.isSmall = false;
                return obj4;
              } else {
                if (absolute < 10000000) {
                  items = [];
                  items[0] = absolute;
                  items2 = items;
                } else {
                  num13 = 100000000000000;
                  if (absolute < 100000000000000) {
                    items1 = [, ];
                    items1[0] = absolute % 10000000;
                    _Math3 = Math;
                    items1[1] = Math.floor(absolute / 10000000);
                    items2 = items1;
                  } else {
                    items2 = [, , ];
                    items2[0] = absolute % 10000000;
                    _Math = Math;
                    items2[1] = Math.floor(absolute / 10000000) % 10000000;
                    _Math2 = Math;
                    items2[2] = Math.floor(absolute / 100000000000000);
                  }
                }
                tmp2 = items2;
              }
            }
          }
        }
      }
      return;
    }
    _multiplyBySmall(arg0) {
      if (0 === arg0.value) {
        tmp5 = Integer;
        self2 = Integer[0];
      } else {
        self = this;
        num = 1;
        self2 = this;
        if (1 !== arg0.value) {
          num2 = -1;
          if (-1 === arg0.value) {
            negateResult = self.negate();
          } else {
            tmp = multiplySmallAndArray;
            tmp2 = globalThis;
            _Math = Math;
            negateResult = multiplySmallAndArray(Math.abs(arg0.value), self.value, self.sign !== arg0.sign);
          }
          tmp4 = negateResult;
        }
      }
      return self2;
    }
    square() {
      value = square(this.value);
      obj = Object.create(BigInteger.prototype);
      return { value, sign: false, isSmall: false };
    }
    divmod(arg0) {
      tmp = divModAny(this, arg0);
      obj = { quotient: tmp[0], remainder: tmp[1] };
      return obj;
    }
    divide(arg0) {
      return divModAny(this, arg0)[0];
    }
    mod(arg0) {
      return divModAny(this, arg0)[1];
    }
    pow(arg0) {
      self = this;
      iter = parseValue(arg0);
      value = this.value;
      value = iter.value;
      if (0 === value) {
        tmp25 = Integer;
        return Integer[1];
      } else if (0 === value) {
        tmp24 = Integer;
        return Integer[0];
      } else {
        num4 = 1;
        if (1 === value) {
          tmp23 = Integer;
          return Integer[1];
        } else {
          num5 = -1;
          if (-1 === value) {
            tmp22 = Integer;
            return iter.isEven() ? tmp22[1] : tmp22[-1];
          } else if (iter.sign) {
            tmp21 = Integer;
            return Integer[0];
          } else if (iter.isSmall) {
            if (self.isSmall) {
              tmp6 = globalThis;
              _Math = Math;
              powResult = Math.pow(value, value);
              num = -9007199254740992;
              tmp8 = -9007199254740992 < powResult;
              if (tmp8) {
                num2 = 9007199254740992;
                tmp8 = powResult < 9007199254740992;
              }
              if (tmp8) {
                tmp18 = SmallInteger;
                if (powResult > 0) {
                  _Math3 = Math;
                  rounded = Math.floor(powResult);
                } else {
                  _Math2 = Math;
                  rounded = Math.ceil(powResult);
                }
                obj = Object.create(tmp18.prototype);
                obj1 = {};
                obj1.value = rounded;
                obj1.sign = rounded < 0;
                flag2 = true;
                obj1.isSmall = true;
                return obj1;
              }
            }
            tmp9 = Integer;
            obj = Integer[1];
            flag = true;
            diff = value;
            timesResult = obj;
            if (true & value) {
              timesResult = obj.times(self);
              diff = value - 1;
            }
            num3 = 2;
            obj2 = timesResult;
            tmp12 = timesResult;
            if (0 !== diff) {
              do {
                result = diff / 2;
                squareResult = self.square();
                tmp15 = obj2;
                diff1 = result;
                timesResult1 = obj2;
                if (true & result) {
                  timesResult1 = obj2.times(squareResult);
                  diff1 = result - 1;
                }
                diff = diff1;
                obj2 = timesResult1;
                self = squareResult;
                tmp12 = timesResult1;
              } while (0 !== diff1);
            }
            return tmp12;
          } else {
            tmp = globalThis;
            _Error = Error;
            str = "The exponent ";
            tmp2 = new.target;
            str2 = " is too large.";
            tmp3 = new.target;
            error = new Error("The exponent " + iter.toString() + " is too large.");
            tmp5 = error;
            throw error;
          }
        }
      }
    }
    modPow(arg0, arg1) {
      obj = parseValue(arg0);
      obj2 = parseValue(arg1);
      if (obj2.isZero()) {
        tmp9 = globalThis;
        _Error = Error;
        tmp10 = new.target;
        str = "Cannot take modPow with modulus 0";
        tmp11 = new.target;
        error = new Error("Cannot take modPow with modulus 0");
        tmp13 = error;
        throw error;
      } else {
        self = this;
        tmp2 = Integer[1];
        tmp = Integer;
        modResult = this.mod(obj2);
        modInvResult = modResult;
        multiplyResult = obj;
        if (obj.isNegative()) {
          num = -1;
          multiplyResult = obj.multiply(tmp[-1]);
          modInvResult = modResult.modInv(obj2);
        }
        num2 = 2;
        obj6 = multiplyResult;
        obj7 = tmp2;
        tmp3 = tmp2;
        if (multiplyResult.isPositive()) {
          tmp4 = modInvResult;
          tmp5 = obj7;
          tmp6 = obj6;
          while (!modInvResult.isZero()) {
            modResult1 = obj7;
            if (obj6.isOdd()) {
              multiplyResult1 = obj7.multiply(modInvResult);
              modResult1 = multiplyResult1.mod(obj2);
            }
            divideResult = require("module_2");
            squareResult = modInvResult.square();
            modInvResult = squareResult.mod(obj2);
            obj7 = modResult1;
            obj6 = divideResult;
            tmp3 = modResult1;
          }
          tmp8 = Integer;
          return Integer[0];
        }
        return tmp3;
      }
    }
    compareAbs(arg0) {
      iter = parseValue(arg0);
      value = this.value;
      value1 = iter.value;
      if (iter.isSmall) {
        return 1;
      } else {
        if (value.length !== value1.length) {
          value = value.length;
          value1 = value1.length;
          num3 = -1;
          if (value > value1) {
            num3 = 1;
          }
          num2 = num3;
        } else {
          diff = value.length - 1;
          num = 0;
          num2 = 0;
          if (0 <= diff) {
            num3 = diff;
            while (value[diff] === value1[diff]) {
              diff = num3 - 1;
              num2 = 0;
            }
          }
          tmp2 = value[num3] > value1[num3];
          num3 = -1;
          if (tmp2) {
            num3 = 1;
          }
          num2 = num3;
        }
        tmp3 = num2;
      }
      return;
    }
    compare(arg0) {
      if (arg0 === Infinity) {
        num10 = -1;
        return -1;
      } else {
        num11 = -Infinity;
        if (arg0 === -Infinity) {
          num9 = 1;
          return 1;
        } else {
          self = this;
          tmp4 = parseValue;
          iter = parseValue(arg0);
          value = this.value;
          value1 = iter.value;
          if (this.sign !== iter.sign) {
            num8 = -1;
            if (iter.sign) {
              num8 = 1;
            }
            result = num8;
          } else if (iter.isSmall) {
            num7 = 1;
            if (self.sign) {
              num7 = -1;
            }
            result = num7;
          } else {
            if (value.length !== value1.length) {
              num5 = -1;
              if (value.length > value1.length) {
                num5 = 1;
              }
              num3 = num5;
            } else {
              num = 1;
              diff = value.length - 1;
              num2 = 0;
              num3 = 0;
              if (0 <= diff) {
                tmp2 = diff;
                while (value[diff] === value1[diff]) {
                  diff = diff - 1;
                  num3 = 0;
                }
                num4 = -1;
                if (value[diff] > value1[diff]) {
                  num4 = 1;
                }
                num3 = num4;
              }
            }
            num6 = 1;
            if (self.sign) {
              num6 = -1;
            }
            result = num3 * num6;
          }
          return result;
        }
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
      obj = parseValue(arg0);
      isZeroResult = obj.isZero();
      tmp2 = !isZeroResult;
      if (!isZeroResult) {
        tmp3 = obj.isUnit();
        if (tmp3) {
          tmp2 = tmp3;
        } else {
          self = this;
          num = 2;
          num2 = 0;
          if (0 === require("module_2")) {
            isEvenResult = self.isEven();
          } else {
            modResult = self.mod(obj);
            isEvenResult = modResult.isZero();
          }
          tmp5 = isEvenResult;
        }
      }
      return tmp2;
    }
    isPrime(arg0) {
      self = this;
      absResult = this.abs();
      isUnitResult = absResult.isUnit();
      tmp2 = !isUnitResult;
      if (!isUnitResult) {
        num = 2;
        equalsResult = require("module_2");
        if (!equalsResult) {
          num2 = 3;
          equalsResult = require("module_3");
        }
        if (!equalsResult) {
          num3 = 5;
          equalsResult = require("module_5");
        }
        tmp4 = equalsResult;
        if (!tmp4) {
          isEvenResult = absResult.isEven();
          if (!isEvenResult) {
            num4 = 3;
            isEvenResult = require("module_3");
          }
          if (!isEvenResult) {
            num5 = 5;
            isEvenResult = require("module_5");
          }
          tmp6 = !isEvenResult;
          if (!isEvenResult) {
            num6 = 49;
            tmp7 = require("module_49") || undefined;
            tmp6 = tmp7;
          }
          tmp4 = tmp6;
        }
        tmp2 = tmp4;
      }
      if (tmp2 !== undefined) {
        return tmp2;
      } else {
        absResult1 = self.abs();
        bitLengthResult = absResult1.bitLength();
        num11 = 64;
        if (bitLengthResult <= 64) {
          tmp13 = millerRabinTest;
          num10 = 0;
          return millerRabinTest(absResult1, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
        } else {
          tmp14 = arg0;
          tmp15 = globalThis;
          _Math2 = Math;
          num12 = 2;
          logResult = require("module_2");
          result = logResult * bitLengthResult.toJSNumber();
          flag = true;
          result1 = result;
          if (true === arg0) {
            _Math = Math;
            result1 = 2 * Math.pow(result, 2);
          }
          rounded = Math.ceil(result1);
          items = [];
          num7 = 0;
          num8 = 1;
          for (let num9 = 0; num9 < rounded; num9 = num9 + 1) {
            tmp10 = Integer;
            arr = items.push(Integer(num9 + 2));
          }
          tmp12 = millerRabinTest;
          return millerRabinTest(absResult1, items);
        }
      }
    }
    isProbablePrime(arg0, arg1) {
      self = this;
      absResult = this.abs();
      isUnitResult = absResult.isUnit();
      tmp2 = !isUnitResult;
      if (!isUnitResult) {
        num = 2;
        equalsResult = require("module_2");
        if (!equalsResult) {
          num2 = 3;
          equalsResult = require("module_3");
        }
        if (!equalsResult) {
          num3 = 5;
          equalsResult = require("module_5");
        }
        tmp4 = equalsResult;
        if (!tmp4) {
          isEvenResult = absResult.isEven();
          if (!isEvenResult) {
            num4 = 3;
            isEvenResult = require("module_3");
          }
          if (!isEvenResult) {
            num5 = 5;
            isEvenResult = require("module_5");
          }
          tmp6 = !isEvenResult;
          if (!isEvenResult) {
            num6 = 49;
            tmp7 = require("module_49") || undefined;
            tmp6 = tmp7;
          }
          tmp4 = tmp6;
        }
        tmp2 = tmp4;
      }
      if (tmp2 !== undefined) {
        return tmp2;
      } else {
        tmp8 = arg0;
        absResult1 = self.abs();
        num7 = 5;
        if (arg0 !== undefined) {
          num7 = arg0;
        }
        items = [];
        num8 = 0;
        num9 = 2;
        num10 = 1;
        for (let num11 = 0; num11 < num7; num11 = num11 + 1) {
          tmp9 = Integer;
          arr = items.push(require("module_2"));
        }
        tmp11 = millerRabinTest;
        return millerRabinTest(absResult1, items);
      }
    }
    modInv(arg0) {
      self = this;
      ({ zero, one } = Integer);
      obj = parseValue(arg0);
      absResult = this.abs();
      tmp = absResult;
      obj3 = zero;
      obj4 = obj;
      obj5 = zero;
      if (!absResult.isZero()) {
        do {
          divideResult = obj.divide(tmp);
          subtractResult = obj3.subtract(divideResult.multiply(one));
          subtractResult1 = obj.subtract(divideResult.multiply(tmp));
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
        num = 0;
        num2 = -1;
        addResult = obj5;
        if (-1 === require("module_0")) {
          addResult = obj5.add(arg0);
        }
        negateResult = addResult;
        if (self.isNegative()) {
          negateResult = addResult.negate();
        }
        return negateResult;
      } else {
        tmp4 = globalThis;
        _Error = Error;
        str = " and ";
        text = `${self.toString()} and `;
        tmp6 = new.target;
        str2 = " are not co-prime";
        tmp7 = new.target;
        error = new Error(`${self.toString()} and ` + arg0.toString() + " are not co-prime");
        tmp9 = error;
        throw error;
      }
    }
    next() {
      self = this;
      value = this.value;
      if (this.sign) {
        tmp12 = subtractSmall;
        num8 = 1;
        num9 = 0;
        obj = subtractSmall(value, 1, self.sign);
      } else {
        length = value.length;
        tmp2 = globalThis;
        _Array = Array;
        tmp3 = new.target;
        tmp4 = new.target;
        tmp5 = length;
        tmp = BigInteger;
        array = new Array(length);
        tmp7 = array;
        num = 0;
        num2 = 1;
        num3 = 10000000;
        num4 = 0;
        num5 = 1;
        num6 = 0;
        num7 = 1;
        if (0 < length) {
          do {
            sum = value[num4] - 10000000 + num5;
            _Math = Math;
            rounded = Math.floor(sum / 10000000);
            array[num4] = sum - rounded * 10000000;
            num5 = rounded + 1;
            num4 = num4 + 1;
            num7 = num5;
            num6 = num4;
          } while (num4 < length);
        }
        if (num7 > 0) {
          do {
            array[num6] = num7 % 10000000;
            _Math2 = Math;
            sum1 = num6 + 1;
            num7 = Math.floor(num7 / 10000000);
            num6 = sum1;
          } while (num7 > 0);
        }
        obj = Object.create(tmp.prototype);
        obj = {};
        obj.value = array;
        obj.sign = self.sign;
        flag = false;
        obj.isSmall = false;
      }
      return obj;
    }
    prev() {
      value = this.value;
      if (this.sign) {
        length = value.length;
        tmp5 = globalThis;
        _Array = Array;
        tmp6 = new.target;
        tmp7 = new.target;
        tmp8 = length;
        tmp4 = BigInteger;
        array = new Array(length);
        tmp10 = array;
        num3 = 0;
        num4 = 1;
        num5 = 10000000;
        num6 = 0;
        num7 = 1;
        num8 = 0;
        num9 = 1;
        if (0 < length) {
          do {
            sum = value[num6] - 10000000 + num7;
            _Math = Math;
            rounded = Math.floor(sum / 10000000);
            array[num6] = sum - rounded * 10000000;
            num7 = rounded + 1;
            num6 = num6 + 1;
            num9 = num7;
            num8 = num6;
          } while (num6 < length);
        }
        if (num9 > 0) {
          do {
            array[num8] = num9 % 10000000;
            _Math2 = Math;
            sum1 = num8 + 1;
            num9 = Math.floor(num9 / 10000000);
            num8 = sum1;
          } while (num9 > 0);
        }
        obj = Object.create(tmp4.prototype);
        obj = {};
        obj.value = array;
        flag = true;
        obj.sign = true;
        flag2 = false;
        obj.isSmall = false;
        tmp3 = obj;
      } else {
        tmp2 = subtractSmall;
        num = 1;
        num2 = 0;
        tmp3 = subtractSmall(value, 1, tmp.sign);
      }
      return tmp3;
    }
    shiftLeft(arg0) {
      obj = parseValue(arg0);
      toJSNumberResult = obj.toJSNumber();
      if (Math.abs(toJSNumberResult) <= 10000000) {
        self = this;
        num = 0;
        if (toJSNumberResult < 0) {
          return self.shiftRight(-toJSNumberResult);
        } else if (self.isZero()) {
          return self;
        } else {
          tmp6 = length;
          num2 = 1;
          multiplyResult = self;
          diff = toJSNumberResult;
          obj3 = self;
          tmp8 = toJSNumberResult;
          if (toJSNumberResult >= length) {
            do {
              tmp9 = f65538;
              multiplyResult = multiplyResult.multiply(f65538);
              tmp10 = length;
              diff = diff - (length - 1);
              obj3 = multiplyResult;
              tmp8 = diff;
            } while (diff >= length);
          }
          tmp11 = f65538;
          return obj3.multiply(f65538[tmp8]);
        }
      } else {
        _Error = Error;
        _String = String;
        str = " is too large for shifting.";
        tmp2 = new.target;
        tmp3 = new.target;
        error = new Error(String(toJSNumberResult) + " is too large for shifting.");
        tmp5 = error;
        throw error;
      }
    }
    shiftRight(arg0) {
      obj = parseValue(arg0);
      toJSNumberResult = obj.toJSNumber();
      if (Math.abs(toJSNumberResult) <= 10000000) {
        self = this;
        num = 0;
        if (toJSNumberResult < 0) {
          return self.shiftLeft(-toJSNumberResult);
        } else {
          tmp20 = length;
          num2 = 1;
          obj4 = self;
          diff = toJSNumberResult;
          tmp14 = self;
          tmp15 = toJSNumberResult;
          if (toJSNumberResult >= length) {
            tmp6 = obj4;
            tmp7 = diff;
            while (!obj4.isZero()) {
              if (!obj4.isNegative()) {
                tmp8 = divModAny;
                tmp9 = f65538;
                tmp10 = divModAny(obj4, f65538);
                [obj3, obj2] = tmp10;
                if (obj2.isNegative()) {
                  prevResult = obj3.prev();
                } else {
                  prevResult = obj3;
                }
                tmp12 = length;
                diff = diff - (length - 1);
                obj4 = prevResult;
                tmp14 = prevResult;
                tmp15 = diff;
              } else if (obj4.isUnit()) {
                break;
              }
              return obj4;
            }
          }
          tmp16 = divModAny;
          tmp17 = f65538;
          tmp18 = divModAny(tmp14, f65538[tmp15]);
          [obj6, obj5] = tmp18;
          if (obj5.isNegative()) {
            prevResult1 = obj6.prev();
          } else {
            prevResult1 = obj6;
          }
          return prevResult1;
        }
      } else {
        _Error = Error;
        _String = String;
        str = " is too large for shifting.";
        tmp2 = new.target;
        tmp3 = new.target;
        error = new Error(String(toJSNumberResult) + " is too large for shifting.");
        tmp5 = error;
        throw error;
      }
    }
    not() {
      negateResult = this.negate();
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
      self = this;
      tmp = Integer;
      self2 = this;
      if (this.compareTo(require("module_0")) < 0) {
        negateResult = self.negate();
        num = 1;
        self2 = negateResult.subtract(require("module_1"));
      }
      if (0 === self2.compareTo(require("module_0"))) {
        tmpResult = require("module_0");
      } else {
        num6 = 2;
        tmpResult1 = require("module_2");
        if (tmpResult1.compareTo(self2) <= 0) {
          squareResult = tmpResult1.square(tmpResult1);
          if (squareResult.compareTo(self2) <= 0) {
            tmp2 = integerLogarithm;
            tmp3 = integerLogarithm(self2, squareResult.square(squareResult));
            ({ p, e } = tmp3);
            multiplyResult = p.multiply(squareResult);
            if (multiplyResult.compareTo(self2) <= 0) {
              obj = { p: null, e: null };
              obj[0] = multiplyResult;
              num4 = 1;
              obj[1] = num6 * e + 1;
              obj1 = obj;
            } else {
              obj1 = { p: null, e: null };
              obj1[0] = p;
              obj1[1] = num6 * e;
            }
            tmp4 = obj1;
          } else {
            obj2 = { p: null, e: 0 };
            num3 = 1;
            obj2[0] = require("module_1");
            ({ p: p2, e: e2 } = obj2);
            multiplyResult1 = p2.multiply(tmpResult1);
            if (multiplyResult1.compareTo(self2) <= 0) {
              obj3 = { p: null, e: null };
              obj3[0] = multiplyResult1;
              num5 = 1;
              num6 = num6 * e2 + 1;
              obj3[1] = num6;
              obj4 = obj3;
            } else {
              obj4 = { p: null, e: null };
              obj4[0] = p2;
              obj4[1] = num6 * e2;
            }
            tmp5 = obj4;
          }
        } else {
          obj5 = { p: null, e: 0 };
          num2 = 1;
          obj5[0] = require("module_1");
          tmpResult2 = tmp(obj5.e);
          num7 = 1;
          tmpResult = tmpResult2.add(require("module_1"));
        }
      }
      return tmpResult;
    }
    toArray(arg0) {
      return toBase(this, arg0);
    }
    toString(arg0, arg1) {
      num = arg0;
      if (arg0 === undefined) {
        num = 10;
      }
      self = this;
      if (10 !== num) {
        tmp4 = arg1;
        closure_0 = arg1;
        tmp5 = toBase;
        num2 = 0;
        iter = toBase(self, num);
        str2 = "";
        str3 = "";
        if (iter.isNegative) {
          str3 = "-";
        }
        value = iter.value;
        mapped = value.map((arg0) => {
          let arr = closure_0;
          if (!closure_0) {
            arr = outer1_1;
          }
          if (arg0 < arr.length) {
            let text = arr[arg0];
          } else {
            text = `${"<" + arg0}>`;
          }
          return text;
        });
        return str3 + mapped.join("");
      } else {
        value1 = self.value;
        tmp6 = globalThis;
        _String2 = String;
        diff = value1.length - 1;
        StringResult = String(value1[diff]);
        diff1 = diff - 1;
        num3 = 0;
        str4 = "0000000";
        sum = StringResult;
        tmp3 = StringResult;
        if (diff1 >= 0) {
          do {
            _String = String;
            StringResult1 = String(value1[diff1]);
            slice = "0000000".slice;
            sum = sum + ("0000000".slice(StringResult1.length) + StringResult1);
            diff1 = diff1 - 1;
            tmp3 = sum;
          } while (diff1 >= 0);
        }
        str = "";
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
      constructor(arg0, arg1, arg2, arg3) {
        if (undefined === arg0) {
          tmp32 = Integer;
          first = Integer[0];
        } else {
          tmp33 = arg1;
          if (undefined !== arg1) {
            str = arg2;
            num = 10;
            if (10 === +arg1) {
            }
            tmp3 = parseBase;
            if (typeof parseBase !== "function") {
              str10 = "Trying to call a non-function";
              throwTypeErrorResult = HermesBuiltin.throwTypeError();
            }
            if (!str) {
              str = c1;
            }
            tmp4 = arg3;
            tmp5 = globalThis;
            _String = String;
            str2 = String(arg0);
            formatted1 = str;
            formatted = str2;
            if (!arg3) {
              formatted = str2.toLowerCase();
              formatted1 = str.toLowerCase();
            }
            length = formatted.length;
            _Math = Math;
            absolute = Math.abs(arg1);
            obj = {};
            num2 = 0;
            num3 = 1;
            num4 = 0;
            if (0 < formatted1.length) {
              do {
                obj[formatted1[num4]] = num4;
                num4 = num4 + 1;
                length2 = formatted1.length;
              } while (num4 < length2);
            }
            str3 = "1";
            str4 = "-";
            num5 = 0;
            if (0 < length) {
              while (true) {
                tmp7 = formatted[num5];
                tmp8 = num5;
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
              _Error = Error;
              str5 = " is not a valid digit in base ";
              tmp9 = new.target;
              str6 = ".";
              tmp10 = new.target;
              error = new Error(tmp7 + " is not a valid digit in base " + arg1 + ".");
              tmp12 = error;
              throw error;
            }
            tmp13 = parseValue;
            tmp15 = "-" === formatted[0];
            num6 = 0;
            tmp14 = parseValue(arg1);
            if (tmp15) {
              num6 = 1;
            }
            items = [];
            str7 = "<";
            str8 = ">";
            if (num6 < formatted.length) {
              while (true) {
                tmp16 = formatted[num6];
                tmp17 = num6;
                if (tmp16 in obj) {
                  tmp26 = parseValue;
                  arr = items.push(parseValue(obj[tmp16]));
                  sum = num6;
                } else {
                  tmp18 = num6;
                  if ("<" !== tmp16) {
                    break;
                  } else {
                    sum = tmp18 + 1;
                    while (">" !== formatted[sum]) {
                      tmp18 = sum;
                      if (sum >= formatted.length) {
                        break;
                      }
                    }
                    tmp20 = parseValue;
                    arr1 = items.push(parseValue(formatted.slice(num6 + 1, sum)));
                  }
                }
                num6 = sum + 1;
              }
              _Error2 = Error;
              str9 = " is not a valid character";
              tmp22 = new.target;
              tmp23 = new.target;
              error1 = new Error(tmp16 + " is not a valid character");
              tmp25 = error1;
              throw error1;
            }
            tmp28 = Integer;
            [tmp29, obj2] = Integer;
            diff = items.length - 1;
            addResult = tmp29;
            obj4 = tmp29;
            if (0 <= diff) {
              do {
                obj5 = items[diff];
                addResult = addResult.add(obj5.times(timesResult));
                timesResult = timesResult.times(tmp14);
                diff = diff - 1;
                obj4 = addResult;
              } while (0 <= diff);
            }
            negateResult = obj4;
            if (tmp15) {
              negateResult = obj4.negate();
            }
            first = negateResult;
          }
          tmp = parseValue;
          first = parseValue(arg0);
        }
        return first;
      }
    }
  } else {
    class Integer {
      constructor(arg0, arg1, arg2, arg3) {
        if (undefined === arg0) {
          tmp32 = Integer;
          first = Integer[0];
        } else {
          tmp33 = arg1;
          if (undefined !== arg1) {
            str = arg2;
            num = 10;
            if (10 === +arg1) {
            }
            tmp3 = parseBase;
            if (typeof parseBase !== "function") {
              str10 = "Trying to call a non-function";
              throwTypeErrorResult = HermesBuiltin.throwTypeError();
            }
            if (!str) {
              str = c1;
            }
            tmp4 = arg3;
            tmp5 = globalThis;
            _String = String;
            str2 = String(arg0);
            formatted1 = str;
            formatted = str2;
            if (!arg3) {
              formatted = str2.toLowerCase();
              formatted1 = str.toLowerCase();
            }
            length = formatted.length;
            _Math = Math;
            absolute = Math.abs(arg1);
            obj = {};
            num2 = 0;
            num3 = 1;
            num4 = 0;
            if (0 < formatted1.length) {
              do {
                obj[formatted1[num4]] = num4;
                num4 = num4 + 1;
                length2 = formatted1.length;
              } while (num4 < length2);
            }
            str3 = "1";
            str4 = "-";
            num5 = 0;
            if (0 < length) {
              while (true) {
                tmp7 = formatted[num5];
                tmp8 = num5;
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
              _Error = Error;
              str5 = " is not a valid digit in base ";
              tmp9 = new.target;
              str6 = ".";
              tmp10 = new.target;
              error = new Error(tmp7 + " is not a valid digit in base " + arg1 + ".");
              tmp12 = error;
              throw error;
            }
            tmp13 = parseValue;
            tmp15 = "-" === formatted[0];
            num6 = 0;
            tmp14 = parseValue(arg1);
            if (tmp15) {
              num6 = 1;
            }
            items = [];
            str7 = "<";
            str8 = ">";
            if (num6 < formatted.length) {
              while (true) {
                tmp16 = formatted[num6];
                tmp17 = num6;
                if (tmp16 in obj) {
                  tmp26 = parseValue;
                  arr = items.push(parseValue(obj[tmp16]));
                  sum = num6;
                } else {
                  tmp18 = num6;
                  if ("<" !== tmp16) {
                    break;
                  } else {
                    sum = tmp18 + 1;
                    while (">" !== formatted[sum]) {
                      tmp18 = sum;
                      if (sum >= formatted.length) {
                        break;
                      }
                    }
                    tmp20 = parseValue;
                    arr1 = items.push(parseValue(formatted.slice(num6 + 1, sum)));
                  }
                }
                num6 = sum + 1;
              }
              _Error2 = Error;
              str9 = " is not a valid character";
              tmp22 = new.target;
              tmp23 = new.target;
              error1 = new Error(tmp16 + " is not a valid character");
              tmp25 = error1;
              throw error1;
            }
            tmp28 = Integer;
            [tmp29, obj2] = Integer;
            diff = items.length - 1;
            addResult = tmp29;
            obj4 = tmp29;
            if (0 <= diff) {
              do {
                obj5 = items[diff];
                addResult = addResult.add(obj5.times(timesResult));
                timesResult = timesResult.times(tmp14);
                diff = diff - 1;
                obj4 = addResult;
              } while (0 <= diff);
            }
            negateResult = obj4;
            if (tmp15) {
              negateResult = obj4.negate();
            }
            first = negateResult;
          }
          tmp = parseValue;
          first = parseValue(arg0);
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
  const absResult = parseValue(arg0).abs();
  const obj = parseValue(arg0);
  const absResult1 = parseValue(arg1).abs();
  const obj3 = parseValue(arg1);
  return absResult.divide(gcd(absResult, absResult1)).multiply(absResult1);
};
Integer.isInstance = (arg0) => {
  let tmp = arg0 instanceof BigInteger;
  if (!tmp) {
    tmp = arg0 instanceof SmallInteger;
  }
  if (!tmp) {
    tmp = arg0 instanceof NativeBigInt;
  }
  return tmp;
};
Integer.randBetween = function randBetween(arg0, absResult1, arg2) {
  let random = arg2;
  const tmp2 = parseValue(arg0);
  const tmp3 = parseValue(absResult1);
  if (!arg2) {
    const _Math = Math;
    random = Math.random;
  }
  let tmpResult = tmp(tmp2);
  tmpResult = tmp(tmp3);
  const tmpResult1 = parseValue(tmp2);
  let tmpResult2 = tmp(tmp3);
  if (tmpResult1.greater(tmpResult2)) {
    tmpResult2 = tmpResult1;
  }
  const addResult = tmpResult2.subtract(tmpResult).add(1);
  if (addResult.isSmall) {
    const _Math4 = Math;
    return tmpResult.add(Math.floor(random() * addResult));
  } else {
    const value = toBase(addResult, 10000000).value;
    const items = [];
    let num3 = 0;
    let flag2 = true;
    if (0 < value.length) {
      do {
        let tmp8 = num3;
        let flag3 = flag2;
        let num4 = 10000000;
        if (flag2) {
          num4 = value[num3];
        }
        let result = random() * num4;
        if (result > 0) {
          let _Math3 = Math;
          let rounded = Math.floor(result);
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
    return tmpResult.add(Integer.fromArray(items, 10000000, false));
  }
  const subtractResult = tmpResult2.subtract(tmpResult);
};
Integer.fromArray = (arr) => {
  let obj;
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
let hasOwnPropertyResult = undefined !== arg4;
if (hasOwnPropertyResult) {
  class Integer {
    constructor(arg0, arg1, arg2, arg3) {
      if (undefined === arg0) {
        tmp32 = Integer;
        first = Integer[0];
      } else {
        tmp33 = arg1;
        if (undefined !== arg1) {
          str = arg2;
          num = 10;
          if (10 === +arg1) {
          }
          tmp3 = parseBase;
          if (typeof parseBase !== "function") {
            str10 = "Trying to call a non-function";
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          if (!str) {
            str = c1;
          }
          tmp4 = arg3;
          tmp5 = globalThis;
          _String = String;
          str2 = String(arg0);
          formatted1 = str;
          formatted = str2;
          if (!arg3) {
            formatted = str2.toLowerCase();
            formatted1 = str.toLowerCase();
          }
          length = formatted.length;
          _Math = Math;
          absolute = Math.abs(arg1);
          obj = {};
          num2 = 0;
          num3 = 1;
          num4 = 0;
          if (0 < formatted1.length) {
            do {
              obj[formatted1[num4]] = num4;
              num4 = num4 + 1;
              length2 = formatted1.length;
            } while (num4 < length2);
          }
          str3 = "1";
          str4 = "-";
          num5 = 0;
          if (0 < length) {
            while (true) {
              tmp7 = formatted[num5];
              tmp8 = num5;
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
            _Error = Error;
            str5 = " is not a valid digit in base ";
            tmp9 = new.target;
            str6 = ".";
            tmp10 = new.target;
            error = new Error(tmp7 + " is not a valid digit in base " + arg1 + ".");
            tmp12 = error;
            throw error;
          }
          tmp13 = parseValue;
          tmp15 = "-" === formatted[0];
          num6 = 0;
          tmp14 = parseValue(arg1);
          if (tmp15) {
            num6 = 1;
          }
          items = [];
          str7 = "<";
          str8 = ">";
          if (num6 < formatted.length) {
            while (true) {
              tmp16 = formatted[num6];
              tmp17 = num6;
              if (tmp16 in obj) {
                tmp26 = parseValue;
                arr = items.push(parseValue(obj[tmp16]));
                sum = num6;
              } else {
                tmp18 = num6;
                if ("<" !== tmp16) {
                  break;
                } else {
                  sum = tmp18 + 1;
                  while (">" !== formatted[sum]) {
                    tmp18 = sum;
                    if (sum >= formatted.length) {
                      break;
                    }
                  }
                  tmp20 = parseValue;
                  arr1 = items.push(parseValue(formatted.slice(num6 + 1, sum)));
                }
              }
              num6 = sum + 1;
            }
            _Error2 = Error;
            str9 = " is not a valid character";
            tmp22 = new.target;
            tmp23 = new.target;
            error1 = new Error(tmp16 + " is not a valid character");
            tmp25 = error1;
            throw error1;
          }
          tmp28 = Integer;
          [tmp29, obj2] = Integer;
          diff = items.length - 1;
          addResult = tmp29;
          obj4 = tmp29;
          if (0 <= diff) {
            do {
              obj5 = items[diff];
              addResult = addResult.add(obj5.times(timesResult));
              timesResult = timesResult.times(tmp14);
              diff = diff - 1;
              obj4 = addResult;
            } while (0 <= diff);
          }
          negateResult = obj4;
          if (tmp15) {
            negateResult = obj4.negate();
          }
          first = negateResult;
        }
        tmp = parseValue;
        first = parseValue(arg0);
      }
      return first;
    }
  }
  hasOwnPropertyResult = arg4.hasOwnProperty("exports");
}
if (hasOwnPropertyResult) {
  class Integer {
    constructor(arg0, arg1, arg2, arg3) {
      if (undefined === arg0) {
        tmp32 = Integer;
        first = Integer[0];
      } else {
        tmp33 = arg1;
        if (undefined !== arg1) {
          str = arg2;
          num = 10;
          if (10 === +arg1) {
          }
          tmp3 = parseBase;
          if (typeof parseBase !== "function") {
            str10 = "Trying to call a non-function";
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          if (!str) {
            str = c1;
          }
          tmp4 = arg3;
          tmp5 = globalThis;
          _String = String;
          str2 = String(arg0);
          formatted1 = str;
          formatted = str2;
          if (!arg3) {
            formatted = str2.toLowerCase();
            formatted1 = str.toLowerCase();
          }
          length = formatted.length;
          _Math = Math;
          absolute = Math.abs(arg1);
          obj = {};
          num2 = 0;
          num3 = 1;
          num4 = 0;
          if (0 < formatted1.length) {
            do {
              obj[formatted1[num4]] = num4;
              num4 = num4 + 1;
              length2 = formatted1.length;
            } while (num4 < length2);
          }
          str3 = "1";
          str4 = "-";
          num5 = 0;
          if (0 < length) {
            while (true) {
              tmp7 = formatted[num5];
              tmp8 = num5;
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
            _Error = Error;
            str5 = " is not a valid digit in base ";
            tmp9 = new.target;
            str6 = ".";
            tmp10 = new.target;
            error = new Error(tmp7 + " is not a valid digit in base " + arg1 + ".");
            tmp12 = error;
            throw error;
          }
          tmp13 = parseValue;
          tmp15 = "-" === formatted[0];
          num6 = 0;
          tmp14 = parseValue(arg1);
          if (tmp15) {
            num6 = 1;
          }
          items = [];
          str7 = "<";
          str8 = ">";
          if (num6 < formatted.length) {
            while (true) {
              tmp16 = formatted[num6];
              tmp17 = num6;
              if (tmp16 in obj) {
                tmp26 = parseValue;
                arr = items.push(parseValue(obj[tmp16]));
                sum = num6;
              } else {
                tmp18 = num6;
                if ("<" !== tmp16) {
                  break;
                } else {
                  sum = tmp18 + 1;
                  while (">" !== formatted[sum]) {
                    tmp18 = sum;
                    if (sum >= formatted.length) {
                      break;
                    }
                  }
                  tmp20 = parseValue;
                  arr1 = items.push(parseValue(formatted.slice(num6 + 1, sum)));
                }
              }
              num6 = sum + 1;
            }
            _Error2 = Error;
            str9 = " is not a valid character";
            tmp22 = new.target;
            tmp23 = new.target;
            error1 = new Error(tmp16 + " is not a valid character");
            tmp25 = error1;
            throw error1;
          }
          tmp28 = Integer;
          [tmp29, obj2] = Integer;
          diff = items.length - 1;
          addResult = tmp29;
          obj4 = tmp29;
          if (0 <= diff) {
            do {
              obj5 = items[diff];
              addResult = addResult.add(obj5.times(timesResult));
              timesResult = timesResult.times(tmp14);
              diff = diff - 1;
              obj4 = addResult;
            } while (0 <= diff);
          }
          negateResult = obj4;
          if (tmp15) {
            negateResult = obj4.negate();
          }
          first = negateResult;
        }
        tmp = parseValue;
        first = parseValue(arg0);
      }
      return first;
    }
  }
}
let amd = typeof globalThis.define === "function";
if (typeof globalThis.define === "function") {
  class Integer {
    constructor(arg0, arg1, arg2, arg3) {
      if (undefined === arg0) {
        tmp32 = Integer;
        first = Integer[0];
      } else {
        tmp33 = arg1;
        if (undefined !== arg1) {
          str = arg2;
          num = 10;
          if (10 === +arg1) {
          }
          tmp3 = parseBase;
          if (typeof parseBase !== "function") {
            str10 = "Trying to call a non-function";
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          if (!str) {
            str = c1;
          }
          tmp4 = arg3;
          tmp5 = globalThis;
          _String = String;
          str2 = String(arg0);
          formatted1 = str;
          formatted = str2;
          if (!arg3) {
            formatted = str2.toLowerCase();
            formatted1 = str.toLowerCase();
          }
          length = formatted.length;
          _Math = Math;
          absolute = Math.abs(arg1);
          obj = {};
          num2 = 0;
          num3 = 1;
          num4 = 0;
          if (0 < formatted1.length) {
            do {
              obj[formatted1[num4]] = num4;
              num4 = num4 + 1;
              length2 = formatted1.length;
            } while (num4 < length2);
          }
          str3 = "1";
          str4 = "-";
          num5 = 0;
          if (0 < length) {
            while (true) {
              tmp7 = formatted[num5];
              tmp8 = num5;
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
            _Error = Error;
            str5 = " is not a valid digit in base ";
            tmp9 = new.target;
            str6 = ".";
            tmp10 = new.target;
            error = new Error(tmp7 + " is not a valid digit in base " + arg1 + ".");
            tmp12 = error;
            throw error;
          }
          tmp13 = parseValue;
          tmp15 = "-" === formatted[0];
          num6 = 0;
          tmp14 = parseValue(arg1);
          if (tmp15) {
            num6 = 1;
          }
          items = [];
          str7 = "<";
          str8 = ">";
          if (num6 < formatted.length) {
            while (true) {
              tmp16 = formatted[num6];
              tmp17 = num6;
              if (tmp16 in obj) {
                tmp26 = parseValue;
                arr = items.push(parseValue(obj[tmp16]));
                sum = num6;
              } else {
                tmp18 = num6;
                if ("<" !== tmp16) {
                  break;
                } else {
                  sum = tmp18 + 1;
                  while (">" !== formatted[sum]) {
                    tmp18 = sum;
                    if (sum >= formatted.length) {
                      break;
                    }
                  }
                  tmp20 = parseValue;
                  arr1 = items.push(parseValue(formatted.slice(num6 + 1, sum)));
                }
              }
              num6 = sum + 1;
            }
            _Error2 = Error;
            str9 = " is not a valid character";
            tmp22 = new.target;
            tmp23 = new.target;
            error1 = new Error(tmp16 + " is not a valid character");
            tmp25 = error1;
            throw error1;
          }
          tmp28 = Integer;
          [tmp29, obj2] = Integer;
          diff = items.length - 1;
          addResult = tmp29;
          obj4 = tmp29;
          if (0 <= diff) {
            do {
              obj5 = items[diff];
              addResult = addResult.add(obj5.times(timesResult));
              timesResult = timesResult.times(tmp14);
              diff = diff - 1;
              obj4 = addResult;
            } while (0 <= diff);
          }
          negateResult = obj4;
          if (tmp15) {
            negateResult = obj4.negate();
          }
          first = negateResult;
        }
        tmp = parseValue;
        first = parseValue(arg0);
      }
      return first;
    }
  }
  amd = globalThis.define.amd;
}
if (amd) {
  class Integer {
    constructor(arg0, arg1, arg2, arg3) {
      if (undefined === arg0) {
        tmp32 = Integer;
        first = Integer[0];
      } else {
        tmp33 = arg1;
        if (undefined !== arg1) {
          str = arg2;
          num = 10;
          if (10 === +arg1) {
          }
          tmp3 = parseBase;
          if (typeof parseBase !== "function") {
            str10 = "Trying to call a non-function";
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          if (!str) {
            str = c1;
          }
          tmp4 = arg3;
          tmp5 = globalThis;
          _String = String;
          str2 = String(arg0);
          formatted1 = str;
          formatted = str2;
          if (!arg3) {
            formatted = str2.toLowerCase();
            formatted1 = str.toLowerCase();
          }
          length = formatted.length;
          _Math = Math;
          absolute = Math.abs(arg1);
          obj = {};
          num2 = 0;
          num3 = 1;
          num4 = 0;
          if (0 < formatted1.length) {
            do {
              obj[formatted1[num4]] = num4;
              num4 = num4 + 1;
              length2 = formatted1.length;
            } while (num4 < length2);
          }
          str3 = "1";
          str4 = "-";
          num5 = 0;
          if (0 < length) {
            while (true) {
              tmp7 = formatted[num5];
              tmp8 = num5;
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
            _Error = Error;
            str5 = " is not a valid digit in base ";
            tmp9 = new.target;
            str6 = ".";
            tmp10 = new.target;
            error = new Error(tmp7 + " is not a valid digit in base " + arg1 + ".");
            tmp12 = error;
            throw error;
          }
          tmp13 = parseValue;
          tmp15 = "-" === formatted[0];
          num6 = 0;
          tmp14 = parseValue(arg1);
          if (tmp15) {
            num6 = 1;
          }
          items = [];
          str7 = "<";
          str8 = ">";
          if (num6 < formatted.length) {
            while (true) {
              tmp16 = formatted[num6];
              tmp17 = num6;
              if (tmp16 in obj) {
                tmp26 = parseValue;
                arr = items.push(parseValue(obj[tmp16]));
                sum = num6;
              } else {
                tmp18 = num6;
                if ("<" !== tmp16) {
                  break;
                } else {
                  sum = tmp18 + 1;
                  while (">" !== formatted[sum]) {
                    tmp18 = sum;
                    if (sum >= formatted.length) {
                      break;
                    }
                  }
                  tmp20 = parseValue;
                  arr1 = items.push(parseValue(formatted.slice(num6 + 1, sum)));
                }
              }
              num6 = sum + 1;
            }
            _Error2 = Error;
            str9 = " is not a valid character";
            tmp22 = new.target;
            tmp23 = new.target;
            error1 = new Error(tmp16 + " is not a valid character");
            tmp25 = error1;
            throw error1;
          }
          tmp28 = Integer;
          [tmp29, obj2] = Integer;
          diff = items.length - 1;
          addResult = tmp29;
          obj4 = tmp29;
          if (0 <= diff) {
            do {
              obj5 = items[diff];
              addResult = addResult.add(obj5.times(timesResult));
              timesResult = timesResult.times(tmp14);
              diff = diff - 1;
              obj4 = addResult;
            } while (0 <= diff);
          }
          negateResult = obj4;
          if (tmp15) {
            negateResult = obj4.negate();
          }
          first = negateResult;
        }
        tmp = parseValue;
        first = parseValue(arg0);
      }
      return first;
    }
  }
  globalThis.define(() => Integer);
}