// === Module 12683: ident-token ===

// Module 12683 (ident-token)
import _mod12657 from "module_12657" /* 12657 */;
import consumeB from "consumeB" /* 12684 */;
import hexSequence from "hexSequence" /* 12685 */;

let obj = { "ident-token": null, "function-token": null, "at-keyword-token": null, "hash-token": null, "string-token": null, "bad-string-token": null, "url-token": null, "bad-url-token": null, "delim-token": null, "number-token": null, "percentage-token": null, "dimension-token": null, "whitespace-token": null, "CDO-token": null, "CDC-token": null, "colon-token": null, "semicolon-token": null, "comma-token": null, "[-token": null, "]-token": null, "(-token": null, ")-token": null, "{-token": null, "}-token": null, string: null, ident: null, "custom-ident": null, "custom-property-name": null, "hex-color": null, "id-selector": null, "an-plus-b": null, urange: null, "declaration-value": null, "any-value": null, dimension: null, angle: null, decibel: null, frequency: null, flex: null, length: null, resolution: null, semitones: null, time: null, percentage: null, zero: null, number: null, integer: null, "-ms-legacy-expression": null };
const Ident = _mod12657.TYPE.Ident;
obj["ident-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const _Function = _mod12657.TYPE.Function;
obj["function-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const AtKeyword = _mod12657.TYPE.AtKeyword;
obj["at-keyword-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const Hash = _mod12657.TYPE.Hash;
obj["hash-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const _String = _mod12657.TYPE.String;
obj["string-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const BadString = _mod12657.TYPE.BadString;
obj["bad-string-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const Url = _mod12657.TYPE.Url;
obj["url-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const BadUrl = _mod12657.TYPE.BadUrl;
obj["bad-url-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const Delim = _mod12657.TYPE.Delim;
obj["delim-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
let _Number = _mod12657.TYPE.Number;
obj["number-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const Percentage = _mod12657.TYPE.Percentage;
obj["percentage-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const Dimension = _mod12657.TYPE.Dimension;
obj["dimension-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const WhiteSpace = _mod12657.TYPE.WhiteSpace;
obj["whitespace-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const CDO = _mod12657.TYPE.CDO;
obj["CDO-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const CDC = _mod12657.TYPE.CDC;
obj["CDC-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const Colon = _mod12657.TYPE.Colon;
obj["colon-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const Semicolon = _mod12657.TYPE.Semicolon;
obj["semicolon-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const Comma = _mod12657.TYPE.Comma;
obj["comma-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const LeftSquareBracket = _mod12657.TYPE.LeftSquareBracket;
obj["[-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const RightSquareBracket = _mod12657.TYPE.RightSquareBracket;
obj["]-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const LeftParenthesis = _mod12657.TYPE.LeftParenthesis;
obj["(-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const RightParenthesis = _mod12657.TYPE.RightParenthesis;
obj[")-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const LeftCurlyBracket = _mod12657.TYPE.LeftCurlyBracket;
obj["{-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const RightCurlyBracket = _mod12657.TYPE.RightCurlyBracket;
obj["}-token"] = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const _String2 = _mod12657.TYPE.String;
obj.string = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
const Ident2 = _mod12657.TYPE.Ident;
obj.ident = (type) => {
  if (null === type) {
    let num = 0;
  } else {
    num = 1;
  }
  return num;
};
obj["custom-ident"] = function customIdent(type) {
  if (null !== type) {
    if (type.type === expression(12657).TYPE.Ident) {
      const formatted = type.value.toLowerCase();
      let num4 = 1;
      let num2 = 0;
      let tmp10 = expression;
      if (0 >= length.length) {
        let flag = false;
        let tmp8 = tmp10;
      } else {
        const obj = expression(12657);
        tmp8 = expression;
        flag = true;
        while (!obj.cmpStr(formatted, 0, formatted.length, tmp)) {
          num2 = num2 + num4;
          tmp10 = expression;
          break;
        }
      }
      if (flag) {
        num4 = 0;
      } else {
        const tmp8Result = tmp8(12657);
      }
      return num4;
    }
  }
  return 0;
};
obj["custom-property-name"] = function customPropertyName(type) {
  if (null !== type) {
    if (type.type === expression(12657).TYPE.Ident) {
      value = type.value;
      let num2 = 0;
      if (0 < value.length) {
        num2 = value.charCodeAt(0);
      }
      if (45 === num2) {
        value2 = type.value;
        let num4 = 1;
        if (1 < value2.length) {
          value2.charCodeAt(num4);
        }
      }
      return num4;
    }
  }
  num4 = 0;
};
obj["hex-color"] = function hexColor(type) {
  if (null !== type) {
    if (type.type === expression(12657).TYPE.Hash) {
      if (4 !== type.value.length) {
        if (5 !== length) {
          if (7 !== length) {
            if (9 !== length) {
              return 0;
            }
          }
        }
      }
      let num6 = 1;
      if (1 < type.value.length) {
        expression(12657);
        value = type.value;
        while (tmp4(value.charCodeAt(num6))) {
          num6 = num6 + 1;
        }
        return 0;
      }
      return 1;
    }
  }
  return 0;
};
obj["id-selector"] = function idSelector(type) {
  let num = 0;
  if (null !== type) {
    num = 0;
    if (type.type === expression(12657).TYPE.Hash) {
      value = type.value;
      let num2 = 0;
      if (1 < value.length) {
        num2 = value.charCodeAt(1);
      }
      value3 = type.value;
      let num4 = 0;
      if (2 < value3.length) {
        num4 = value3.charCodeAt(2);
      }
      value4 = type.value;
      let num6 = 0;
      if (3 < value4.length) {
        num6 = value4.charCodeAt(3);
      }
      let num7 = 0;
      if (tmpResult.isIdentifierStart(num2, num4, num6)) {
        num7 = 1;
      }
      num = num7;
      tmpResult = expression(12657);
    }
  }
  return num;
};
obj["an-plus-b"] = consumeB;
obj.urange = hexSequence;
obj["declaration-value"] = function declarationValue(arg0, fn) {
  let iter = arg0;
  if (arg0) {
    const index = iter.index;
    let num2 = 0;
    let num3 = 0;
    const type = iter.type;
    let tmp6 = num3;
    while (expression(12657).TYPE.BadString !== type) {
      tmp6 = num3;
      if (expression(12657).TYPE.BadUrl === type) {
        break;
      } else {
        if (expression(12657).TYPE.RightCurlyBracket !== type) {
          if (expression(12657).TYPE.RightParenthesis !== type) {
            if (expression(12657).TYPE.RightSquareBracket !== type) {
              if (expression(12657).TYPE.Semicolon === type) {
                let sum = num2;
                tmp6 = num3;
                if (0 === num2) {
                  break;
                }
              } else if (expression(12657).TYPE.Delim === type) {
                sum = num2;
                if ("!" === iter.value) {
                  sum = num2;
                  tmp6 = num3;
                  if (0 === num2) {
                    break;
                  }
                }
                break;
              } else {
                if (expression(12657).TYPE.Function !== type) {
                  if (expression(12657).TYPE.LeftParenthesis !== type) {
                    if (expression(12657).TYPE.LeftSquareBracket !== type) {
                      sum = num2;
                    }
                  }
                }
                sum = num2 + 1;
              }
              let sum1 = num3 + 1;
              tmp6 = sum1;
              if (iter.balance <= index) {
                break;
              } else {
                iter = fn(sum1);
                num2 = sum;
                num3 = sum1;
                tmp6 = sum1;
                if (!iter) {
                  break;
                }
              }
            }
            return tmp6;
          }
        }
        tmp6 = num3;
        if (iter.balance > iter.index) {
          break;
        } else {
          tmp6 = num3;
          if (iter.balance < index) {
            break;
          } else {
            sum = num2 - 1;
          }
        }
      }
    }
  } else {
    return 0;
  }
};
obj["any-value"] = function anyValue(arg0, fn) {
  let tmp = arg0;
  if (arg0) {
    const index = tmp.index;
    let num2 = 0;
    const type = tmp.type;
    let tmp6 = num2;
    while (expression(12657).TYPE.BadString !== type) {
      tmp6 = num2;
      if (expression(12657).TYPE.BadUrl === type) {
        break;
      } else {
        if (expression(12657).TYPE.RightCurlyBracket !== type) {
          let sum = num2 + 1;
          tmp6 = sum;
          if (tmp.balance <= index) {
            break;
          } else {
            tmp = fn(sum);
            num2 = sum;
            tmp6 = sum;
            if (!tmp) {
              break;
            }
          }
        }
        tmp6 = num2;
        if (tmp.balance > tmp.index) {
          break;
        } else {
          tmp6 = num2;
          if (tmp.balance < index) {
            break;
          }
        }
      }
    }
    return tmp6;
  } else {
    return 0;
  }
};
let c0 = (type, arg1, type2) => {
  if (null !== type) {
    if (type.type === expression(12657).TYPE.Dimension) {
      const consumeNumberResult = expression(12657).consumeNumber(type.value, 0);
      if (null !== expression) {
        value = type.value;
        const index = value.indexOf("\\", consumeNumberResult);
        if (-1 !== index) {
          value3 = type.value;
          let tmp = index === value3.length - 2;
          if (tmp) {
            let isDigitResult = 92 === value3.charCodeAt(index);
            if (isDigitResult) {
              isDigitResult = expression(12657).isDigit(value3.charCodeAt(index + 1));
              const tmp7Result2 = expression(12657);
            }
            tmp = isDigitResult;
          }
          if (tmp) {
            let str2 = type.value.substring(consumeNumberResult, index);
          }
          if (false === expression.hasOwnProperty(str2.toLowerCase())) {
            return 0;
          }
        }
        str2 = type.value.substr(consumeNumberResult);
      }
      value4 = type.value;
      let flag2 = false;
      if (type2) {
        flag2 = false;
        if ("Range" === type2.type) {
          let substr = value4;
          if (undefined !== consumeNumberResult) {
            substr = value4;
            if (consumeNumberResult !== value4.length) {
              substr = value4.substr(0, consumeNumberResult);
            }
          }
          const NumberResult = Number(substr);
          const _isNaN = isNaN;
          flag2 = true;
          if (!isNaN(NumberResult)) {
            if (null === type2.min) {
              flag2 = false;
              if (null !== type2.max) {
                flag2 = false;
                if (NumberResult > type2.max) {
                  flag2 = true;
                }
              }
            } else {
              flag2 = true;
            }
          }
        }
      }
      let num4 = 1;
      if (flag2) {
        num4 = 0;
      }
      return num4;
    }
  }
  return 0;
};
obj.dimension = (arg0, fn, arg2) => {
  let iter = arg0;
  if (null === arg0) {
    return 0;
  } else {
    if (iter.type !== expression(12657).TYPE.Function) {
      const tmp10 = expression(iter, fn, arg2);
    } else {
      value = iter.value;
      let num2 = 0;
      if (0 < length2.length) {
        const obj = expression(12657);
        while (!obj.cmpStr(value, 0, value.length, tmp)) {
          let sum = num2 + 1;
          num2 = sum;
          let flag = false;
          if (sum >= length2.length) {
            break;
          }
        }
      }
    }
    let num4 = 0;
    const sum1 = num4 + 1;
    while (iter.balance > iter.index) {
      iter = fn(sum1);
      num4 = sum1;
      if (!iter) {
        break;
      }
    }
  }
};
c0 = (type, arg1, type2) => {
  if (null !== type) {
    if (type.type === expression(12657).TYPE.Dimension) {
      const consumeNumberResult = expression(12657).consumeNumber(type.value, 0);
      if (null !== expression) {
        value = type.value;
        const index = value.indexOf("\\", consumeNumberResult);
        if (-1 !== index) {
          value3 = type.value;
          let tmp = index === value3.length - 2;
          if (tmp) {
            let isDigitResult = 92 === value3.charCodeAt(index);
            if (isDigitResult) {
              isDigitResult = expression(12657).isDigit(value3.charCodeAt(index + 1));
              const tmp7Result2 = expression(12657);
            }
            tmp = isDigitResult;
          }
          if (tmp) {
            let str2 = type.value.substring(consumeNumberResult, index);
          }
          if (false === expression.hasOwnProperty(str2.toLowerCase())) {
            return 0;
          }
        }
        str2 = type.value.substr(consumeNumberResult);
      }
      value4 = type.value;
      let flag2 = false;
      if (type2) {
        flag2 = false;
        if ("Range" === type2.type) {
          let substr = value4;
          if (undefined !== consumeNumberResult) {
            substr = value4;
            if (consumeNumberResult !== value4.length) {
              substr = value4.substr(0, consumeNumberResult);
            }
          }
          const NumberResult = Number(substr);
          const _isNaN = isNaN;
          flag2 = true;
          if (!isNaN(NumberResult)) {
            if (null === type2.min) {
              flag2 = false;
              if (null !== type2.max) {
                flag2 = false;
                if (NumberResult > type2.max) {
                  flag2 = true;
                }
              }
            } else {
              flag2 = true;
            }
          }
        }
      }
      let num4 = 1;
      if (flag2) {
        num4 = 0;
      }
      return num4;
    }
  }
  return 0;
};
obj.angle = (arg0, fn, arg2) => {
  let iter = arg0;
  if (null === arg0) {
    return 0;
  } else {
    if (iter.type !== expression(12657).TYPE.Function) {
      const tmp10 = expression(iter, fn, arg2);
    } else {
      value = iter.value;
      let num2 = 0;
      if (0 < length2.length) {
        const obj = expression(12657);
        while (!obj.cmpStr(value, 0, value.length, tmp)) {
          let sum = num2 + 1;
          num2 = sum;
          let flag = false;
          if (sum >= length2.length) {
            break;
          }
        }
      }
    }
    let num4 = 0;
    const sum1 = num4 + 1;
    while (iter.balance > iter.index) {
      iter = fn(sum1);
      num4 = sum1;
      if (!iter) {
        break;
      }
    }
  }
};
c0 = (type, arg1, type2) => {
  if (null !== type) {
    if (type.type === expression(12657).TYPE.Dimension) {
      const consumeNumberResult = expression(12657).consumeNumber(type.value, 0);
      if (null !== expression) {
        value = type.value;
        const index = value.indexOf("\\", consumeNumberResult);
        if (-1 !== index) {
          value3 = type.value;
          let tmp = index === value3.length - 2;
          if (tmp) {
            let isDigitResult = 92 === value3.charCodeAt(index);
            if (isDigitResult) {
              isDigitResult = expression(12657).isDigit(value3.charCodeAt(index + 1));
              const tmp7Result2 = expression(12657);
            }
            tmp = isDigitResult;
          }
          if (tmp) {
            let str2 = type.value.substring(consumeNumberResult, index);
          }
          if (false === expression.hasOwnProperty(str2.toLowerCase())) {
            return 0;
          }
        }
        str2 = type.value.substr(consumeNumberResult);
      }
      value4 = type.value;
      let flag2 = false;
      if (type2) {
        flag2 = false;
        if ("Range" === type2.type) {
          let substr = value4;
          if (undefined !== consumeNumberResult) {
            substr = value4;
            if (consumeNumberResult !== value4.length) {
              substr = value4.substr(0, consumeNumberResult);
            }
          }
          const NumberResult = Number(substr);
          const _isNaN = isNaN;
          flag2 = true;
          if (!isNaN(NumberResult)) {
            if (null === type2.min) {
              flag2 = false;
              if (null !== type2.max) {
                flag2 = false;
                if (NumberResult > type2.max) {
                  flag2 = true;
                }
              }
            } else {
              flag2 = true;
            }
          }
        }
      }
      let num4 = 1;
      if (flag2) {
        num4 = 0;
      }
      return num4;
    }
  }
  return 0;
};
obj.decibel = (arg0, fn, arg2) => {
  let iter = arg0;
  if (null === arg0) {
    return 0;
  } else {
    if (iter.type !== expression(12657).TYPE.Function) {
      const tmp10 = expression(iter, fn, arg2);
    } else {
      value = iter.value;
      let num2 = 0;
      if (0 < length2.length) {
        const obj = expression(12657);
        while (!obj.cmpStr(value, 0, value.length, tmp)) {
          let sum = num2 + 1;
          num2 = sum;
          let flag = false;
          if (sum >= length2.length) {
            break;
          }
        }
      }
    }
    let num4 = 0;
    const sum1 = num4 + 1;
    while (iter.balance > iter.index) {
      iter = fn(sum1);
      num4 = sum1;
      if (!iter) {
        break;
      }
    }
  }
};
c0 = (type, arg1, type2) => {
  if (null !== type) {
    if (type.type === expression(12657).TYPE.Dimension) {
      const consumeNumberResult = expression(12657).consumeNumber(type.value, 0);
      if (null !== expression) {
        value = type.value;
        const index = value.indexOf("\\", consumeNumberResult);
        if (-1 !== index) {
          value3 = type.value;
          let tmp = index === value3.length - 2;
          if (tmp) {
            let isDigitResult = 92 === value3.charCodeAt(index);
            if (isDigitResult) {
              isDigitResult = expression(12657).isDigit(value3.charCodeAt(index + 1));
              const tmp7Result2 = expression(12657);
            }
            tmp = isDigitResult;
          }
          if (tmp) {
            let str2 = type.value.substring(consumeNumberResult, index);
          }
          if (false === expression.hasOwnProperty(str2.toLowerCase())) {
            return 0;
          }
        }
        str2 = type.value.substr(consumeNumberResult);
      }
      value4 = type.value;
      let flag2 = false;
      if (type2) {
        flag2 = false;
        if ("Range" === type2.type) {
          let substr = value4;
          if (undefined !== consumeNumberResult) {
            substr = value4;
            if (consumeNumberResult !== value4.length) {
              substr = value4.substr(0, consumeNumberResult);
            }
          }
          const NumberResult = Number(substr);
          const _isNaN = isNaN;
          flag2 = true;
          if (!isNaN(NumberResult)) {
            if (null === type2.min) {
              flag2 = false;
              if (null !== type2.max) {
                flag2 = false;
                if (NumberResult > type2.max) {
                  flag2 = true;
                }
              }
            } else {
              flag2 = true;
            }
          }
        }
      }
      let num4 = 1;
      if (flag2) {
        num4 = 0;
      }
      return num4;
    }
  }
  return 0;
};
obj.frequency = (arg0, fn, arg2) => {
  let iter = arg0;
  if (null === arg0) {
    return 0;
  } else {
    if (iter.type !== expression(12657).TYPE.Function) {
      const tmp10 = expression(iter, fn, arg2);
    } else {
      value = iter.value;
      let num2 = 0;
      if (0 < length2.length) {
        const obj = expression(12657);
        while (!obj.cmpStr(value, 0, value.length, tmp)) {
          let sum = num2 + 1;
          num2 = sum;
          let flag = false;
          if (sum >= length2.length) {
            break;
          }
        }
      }
    }
    let num4 = 0;
    const sum1 = num4 + 1;
    while (iter.balance > iter.index) {
      iter = fn(sum1);
      num4 = sum1;
      if (!iter) {
        break;
      }
    }
  }
};
c0 = (type, arg1, type2) => {
  if (null !== type) {
    if (type.type === expression(12657).TYPE.Dimension) {
      const consumeNumberResult = expression(12657).consumeNumber(type.value, 0);
      if (null !== expression) {
        value = type.value;
        const index = value.indexOf("\\", consumeNumberResult);
        if (-1 !== index) {
          value3 = type.value;
          let tmp = index === value3.length - 2;
          if (tmp) {
            let isDigitResult = 92 === value3.charCodeAt(index);
            if (isDigitResult) {
              isDigitResult = expression(12657).isDigit(value3.charCodeAt(index + 1));
              const tmp7Result2 = expression(12657);
            }
            tmp = isDigitResult;
          }
          if (tmp) {
            let str2 = type.value.substring(consumeNumberResult, index);
          }
          if (false === expression.hasOwnProperty(str2.toLowerCase())) {
            return 0;
          }
        }
        str2 = type.value.substr(consumeNumberResult);
      }
      value4 = type.value;
      let flag2 = false;
      if (type2) {
        flag2 = false;
        if ("Range" === type2.type) {
          let substr = value4;
          if (undefined !== consumeNumberResult) {
            substr = value4;
            if (consumeNumberResult !== value4.length) {
              substr = value4.substr(0, consumeNumberResult);
            }
          }
          const NumberResult = Number(substr);
          const _isNaN = isNaN;
          flag2 = true;
          if (!isNaN(NumberResult)) {
            if (null === type2.min) {
              flag2 = false;
              if (null !== type2.max) {
                flag2 = false;
                if (NumberResult > type2.max) {
                  flag2 = true;
                }
              }
            } else {
              flag2 = true;
            }
          }
        }
      }
      let num4 = 1;
      if (flag2) {
        num4 = 0;
      }
      return num4;
    }
  }
  return 0;
};
obj.flex = (arg0, fn, arg2) => {
  let iter = arg0;
  if (null === arg0) {
    return 0;
  } else {
    if (iter.type !== expression(12657).TYPE.Function) {
      const tmp10 = expression(iter, fn, arg2);
    } else {
      value = iter.value;
      let num2 = 0;
      if (0 < length2.length) {
        const obj = expression(12657);
        while (!obj.cmpStr(value, 0, value.length, tmp)) {
          let sum = num2 + 1;
          num2 = sum;
          let flag = false;
          if (sum >= length2.length) {
            break;
          }
        }
      }
    }
    let num4 = 0;
    const sum1 = num4 + 1;
    while (iter.balance > iter.index) {
      iter = fn(sum1);
      num4 = sum1;
      if (!iter) {
        break;
      }
    }
  }
};
c0 = (type, arg1, arg2) => {
  if (null !== type) {
    if (type.type === expression(12657).TYPE.Number) {
      const _Number = Number;
      let num = 1;
    }
    return num;
  }
  num = expression(type, arg1, arg2);
};
obj.length = (arg0, fn, arg2) => {
  let iter = arg0;
  if (null === arg0) {
    return 0;
  } else {
    if (iter.type !== expression(12657).TYPE.Function) {
      const tmp10 = expression(iter, fn, arg2);
    } else {
      value = iter.value;
      let num2 = 0;
      if (0 < length2.length) {
        const obj = expression(12657);
        while (!obj.cmpStr(value, 0, value.length, tmp)) {
          let sum = num2 + 1;
          num2 = sum;
          let flag = false;
          if (sum >= length2.length) {
            break;
          }
        }
      }
    }
    let num4 = 0;
    const sum1 = num4 + 1;
    while (iter.balance > iter.index) {
      iter = fn(sum1);
      num4 = sum1;
      if (!iter) {
        break;
      }
    }
  }
};
c0 = (type, arg1, type2) => {
  if (null !== type) {
    if (type.type === expression(12657).TYPE.Dimension) {
      const consumeNumberResult = expression(12657).consumeNumber(type.value, 0);
      if (null !== expression) {
        value = type.value;
        const index = value.indexOf("\\", consumeNumberResult);
        if (-1 !== index) {
          value3 = type.value;
          let tmp = index === value3.length - 2;
          if (tmp) {
            let isDigitResult = 92 === value3.charCodeAt(index);
            if (isDigitResult) {
              isDigitResult = expression(12657).isDigit(value3.charCodeAt(index + 1));
              const tmp7Result2 = expression(12657);
            }
            tmp = isDigitResult;
          }
          if (tmp) {
            let str2 = type.value.substring(consumeNumberResult, index);
          }
          if (false === expression.hasOwnProperty(str2.toLowerCase())) {
            return 0;
          }
        }
        str2 = type.value.substr(consumeNumberResult);
      }
      value4 = type.value;
      let flag2 = false;
      if (type2) {
        flag2 = false;
        if ("Range" === type2.type) {
          let substr = value4;
          if (undefined !== consumeNumberResult) {
            substr = value4;
            if (consumeNumberResult !== value4.length) {
              substr = value4.substr(0, consumeNumberResult);
            }
          }
          const NumberResult = Number(substr);
          const _isNaN = isNaN;
          flag2 = true;
          if (!isNaN(NumberResult)) {
            if (null === type2.min) {
              flag2 = false;
              if (null !== type2.max) {
                flag2 = false;
                if (NumberResult > type2.max) {
                  flag2 = true;
                }
              }
            } else {
              flag2 = true;
            }
          }
        }
      }
      let num4 = 1;
      if (flag2) {
        num4 = 0;
      }
      return num4;
    }
  }
  return 0;
};
obj.resolution = (arg0, fn, arg2) => {
  let iter = arg0;
  if (null === arg0) {
    return 0;
  } else {
    if (iter.type !== expression(12657).TYPE.Function) {
      const tmp10 = expression(iter, fn, arg2);
    } else {
      value = iter.value;
      let num2 = 0;
      if (0 < length2.length) {
        const obj = expression(12657);
        while (!obj.cmpStr(value, 0, value.length, tmp)) {
          let sum = num2 + 1;
          num2 = sum;
          let flag = false;
          if (sum >= length2.length) {
            break;
          }
        }
      }
    }
    let num4 = 0;
    const sum1 = num4 + 1;
    while (iter.balance > iter.index) {
      iter = fn(sum1);
      num4 = sum1;
      if (!iter) {
        break;
      }
    }
  }
};
c0 = (type, arg1, type2) => {
  if (null !== type) {
    if (type.type === expression(12657).TYPE.Dimension) {
      const consumeNumberResult = expression(12657).consumeNumber(type.value, 0);
      if (null !== expression) {
        value = type.value;
        const index = value.indexOf("\\", consumeNumberResult);
        if (-1 !== index) {
          value3 = type.value;
          let tmp = index === value3.length - 2;
          if (tmp) {
            let isDigitResult = 92 === value3.charCodeAt(index);
            if (isDigitResult) {
              isDigitResult = expression(12657).isDigit(value3.charCodeAt(index + 1));
              const tmp7Result2 = expression(12657);
            }
            tmp = isDigitResult;
          }
          if (tmp) {
            let str2 = type.value.substring(consumeNumberResult, index);
          }
          if (false === expression.hasOwnProperty(str2.toLowerCase())) {
            return 0;
          }
        }
        str2 = type.value.substr(consumeNumberResult);
      }
      value4 = type.value;
      let flag2 = false;
      if (type2) {
        flag2 = false;
        if ("Range" === type2.type) {
          let substr = value4;
          if (undefined !== consumeNumberResult) {
            substr = value4;
            if (consumeNumberResult !== value4.length) {
              substr = value4.substr(0, consumeNumberResult);
            }
          }
          const NumberResult = Number(substr);
          const _isNaN = isNaN;
          flag2 = true;
          if (!isNaN(NumberResult)) {
            if (null === type2.min) {
              flag2 = false;
              if (null !== type2.max) {
                flag2 = false;
                if (NumberResult > type2.max) {
                  flag2 = true;
                }
              }
            } else {
              flag2 = true;
            }
          }
        }
      }
      let num4 = 1;
      if (flag2) {
        num4 = 0;
      }
      return num4;
    }
  }
  return 0;
};
obj.semitones = (arg0, fn, arg2) => {
  let iter = arg0;
  if (null === arg0) {
    return 0;
  } else {
    if (iter.type !== expression(12657).TYPE.Function) {
      const tmp10 = expression(iter, fn, arg2);
    } else {
      value = iter.value;
      let num2 = 0;
      if (0 < length2.length) {
        const obj = expression(12657);
        while (!obj.cmpStr(value, 0, value.length, tmp)) {
          let sum = num2 + 1;
          num2 = sum;
          let flag = false;
          if (sum >= length2.length) {
            break;
          }
        }
      }
    }
    let num4 = 0;
    const sum1 = num4 + 1;
    while (iter.balance > iter.index) {
      iter = fn(sum1);
      num4 = sum1;
      if (!iter) {
        break;
      }
    }
  }
};
c0 = (type, arg1, type2) => {
  if (null !== type) {
    if (type.type === expression(12657).TYPE.Dimension) {
      const consumeNumberResult = expression(12657).consumeNumber(type.value, 0);
      if (null !== expression) {
        value = type.value;
        const index = value.indexOf("\\", consumeNumberResult);
        if (-1 !== index) {
          value3 = type.value;
          let tmp = index === value3.length - 2;
          if (tmp) {
            let isDigitResult = 92 === value3.charCodeAt(index);
            if (isDigitResult) {
              isDigitResult = expression(12657).isDigit(value3.charCodeAt(index + 1));
              const tmp7Result2 = expression(12657);
            }
            tmp = isDigitResult;
          }
          if (tmp) {
            let str2 = type.value.substring(consumeNumberResult, index);
          }
          if (false === expression.hasOwnProperty(str2.toLowerCase())) {
            return 0;
          }
        }
        str2 = type.value.substr(consumeNumberResult);
      }
      value4 = type.value;
      let flag2 = false;
      if (type2) {
        flag2 = false;
        if ("Range" === type2.type) {
          let substr = value4;
          if (undefined !== consumeNumberResult) {
            substr = value4;
            if (consumeNumberResult !== value4.length) {
              substr = value4.substr(0, consumeNumberResult);
            }
          }
          const NumberResult = Number(substr);
          const _isNaN = isNaN;
          flag2 = true;
          if (!isNaN(NumberResult)) {
            if (null === type2.min) {
              flag2 = false;
              if (null !== type2.max) {
                flag2 = false;
                if (NumberResult > type2.max) {
                  flag2 = true;
                }
              }
            } else {
              flag2 = true;
            }
          }
        }
      }
      let num4 = 1;
      if (flag2) {
        num4 = 0;
      }
      return num4;
    }
  }
  return 0;
};
obj.time = (arg0, fn, arg2) => {
  let iter = arg0;
  if (null === arg0) {
    return 0;
  } else {
    if (iter.type !== expression(12657).TYPE.Function) {
      const tmp10 = expression(iter, fn, arg2);
    } else {
      value = iter.value;
      let num2 = 0;
      if (0 < length2.length) {
        const obj = expression(12657);
        while (!obj.cmpStr(value, 0, value.length, tmp)) {
          let sum = num2 + 1;
          num2 = sum;
          let flag = false;
          if (sum >= length2.length) {
            break;
          }
        }
      }
    }
    let num4 = 0;
    const sum1 = num4 + 1;
    while (iter.balance > iter.index) {
      iter = fn(sum1);
      num4 = sum1;
      if (!iter) {
        break;
      }
    }
  }
};
c0 = function percentage(dependencyMap, arg1, arg2) {
  if (null !== dependencyMap) {
    if (dependencyMap.type === expression(12657).TYPE.Percentage) {
      value = dependencyMap.value;
      let num2 = 1;
      const diff = dependencyMap.value.length - 1;
      if (arg2) {
        if ("Range" === arg2.type) {
          let substr = value;
          if (diff !== value.length) {
            substr = value.substr(0, diff);
          }
          const NumberResult = Number(substr);
          const _isNaN = isNaN;
        }
      }
    }
    return num2;
  }
  num2 = 0;
};
obj.percentage = (arg0, fn, arg2) => {
  let iter = arg0;
  if (null === arg0) {
    return 0;
  } else {
    if (iter.type !== expression(12657).TYPE.Function) {
      const tmp10 = expression(iter, fn, arg2);
    } else {
      value = iter.value;
      let num2 = 0;
      if (0 < length2.length) {
        const obj = expression(12657);
        while (!obj.cmpStr(value, 0, value.length, tmp)) {
          let sum = num2 + 1;
          num2 = sum;
          let flag = false;
          if (sum >= length2.length) {
            break;
          }
        }
      }
    }
    let num4 = 0;
    const sum1 = num4 + 1;
    while (iter.balance > iter.index) {
      iter = fn(sum1);
      num4 = sum1;
      if (!iter) {
        break;
      }
    }
  }
};
c0 = undefined;
if (typeof undefined !== "function") {
  c0 = function n() {
    return 0;
  };
}
obj.zero = (type, arg1, arg2) => {
  if (null !== type) {
    if (type.type === expression(12657).TYPE.Number) {
      const _Number = Number;
      let num = 1;
    }
    return num;
  }
  num = expression(type, arg1, arg2);
};
c0 = function number(value, arg1, type) {
  if (null === value) {
    return 0;
  } else {
    const consumeNumberResult = expression(12657).consumeNumber(value.value, 0);
    if (consumeNumberResult === value.value.length) {
      value = value.value;
      let flag = false;
      if (type) {
        flag = false;
        if ("Range" === type.type) {
          let substr = value;
          if (undefined !== consumeNumberResult) {
            substr = value;
            if (consumeNumberResult !== value.length) {
              substr = value.substr(0, consumeNumberResult);
            }
          }
          const NumberResult = Number(substr);
          const _isNaN = isNaN;
          flag = true;
          if (!isNaN(NumberResult)) {
            if (null === type.min) {
              flag = false;
              if (null !== type.max) {
                flag = false;
                if (NumberResult > type.max) {
                  flag = true;
                }
              }
            } else {
              flag = true;
            }
          }
        }
      }
      let num5 = 1;
      if (flag) {
        num5 = 0;
      }
      let num4 = num5;
    } else {
      value2 = value.value;
      let tmp = consumeNumberResult === value2.length - 2;
      if (tmp) {
        let isDigitResult = 92 === value2.charCodeAt(consumeNumberResult);
        if (isDigitResult) {
          isDigitResult = expression(12657).isDigit(value2.charCodeAt(consumeNumberResult + 1));
          const tmp7Result = expression(12657);
        }
        tmp = isDigitResult;
      }
      num4 = 0;
    }
    return num4;
  }
};
obj.number = (arg0, fn, arg2) => {
  let iter = arg0;
  if (null === arg0) {
    return 0;
  } else {
    if (iter.type !== expression(12657).TYPE.Function) {
      const tmp10 = expression(iter, fn, arg2);
    } else {
      value = iter.value;
      let num2 = 0;
      if (0 < length2.length) {
        const obj = expression(12657);
        while (!obj.cmpStr(value, 0, value.length, tmp)) {
          let sum = num2 + 1;
          num2 = sum;
          let flag = false;
          if (sum >= length2.length) {
            break;
          }
        }
      }
    }
    let num4 = 0;
    const sum1 = num4 + 1;
    while (iter.balance > iter.index) {
      iter = fn(sum1);
      num4 = sum1;
      if (!iter) {
        break;
      }
    }
  }
};
c0 = function integer(type, arg1, type2) {
  if (null !== type) {
    if (type.type === expression(12657).TYPE.Number) {
      value2 = type.value;
      if (43 === value2.charCodeAt(0)) {
        let num2 = 1;
      } else {
        value = type.value;
        num2 = 0;
      }
      let num3 = 1;
      let sum = num2;
      let tmp2 = num2;
      if (num2 < type.value.length) {
        expression(12657);
        value3 = type.value;
        while (tmp6(value3.charCodeAt(sum))) {
          sum = sum + num3;
          tmp2 = sum;
        }
        return 0;
      }
      const value6 = type.value;
      let flag = false;
      if (type2) {
        flag = false;
        if ("Range" === type2.type) {
          let substr = value6;
          if (tmp2 !== value6.length) {
            substr = value6.substr(0, tmp2);
          }
          const NumberResult = Number(substr);
          const _isNaN = isNaN;
          flag = true;
          if (!isNaN(NumberResult)) {
            if (null === type2.min) {
              flag = false;
              if (null !== type2.max) {
                flag = false;
                if (NumberResult > type2.max) {
                  flag = true;
                }
              }
            } else {
              flag = true;
            }
          }
        }
      }
      if (flag) {
        num3 = 0;
      }
      return num3;
    }
  }
  return 0;
};
obj.integer = (arg0, fn, arg2) => {
  let iter = arg0;
  if (null === arg0) {
    return 0;
  } else {
    if (iter.type !== expression(12657).TYPE.Function) {
      const tmp10 = expression(iter, fn, arg2);
    } else {
      value = iter.value;
      let num2 = 0;
      if (0 < length2.length) {
        const obj = expression(12657);
        while (!obj.cmpStr(value, 0, value.length, tmp)) {
          let sum = num2 + 1;
          num2 = sum;
          let flag = false;
          if (sum >= length2.length) {
            break;
          }
        }
      }
    }
    let num4 = 0;
    const sum1 = num4 + 1;
    while (iter.balance > iter.index) {
      iter = fn(sum1);
      num4 = sum1;
      if (!iter) {
        break;
      }
    }
  }
};
c0 = "expression(";
obj["-ms-legacy-expression"] = (arg0, fn) => {
  let iter = arg0;
  let num = 0;
  if (null !== arg0) {
    value = iter.value;
    const obj = expression(12657);
    num = 0;
    if (obj.cmpStr(value, 0, value.length, c0)) {
      let num4 = 0;
      const sum = num4 + 1;
      num = sum;
      while (iter.balance > iter.index) {
        iter = fn(sum);
        num4 = sum;
        num = sum;
        if (!iter) {
          break;
        }
      }
    }
  }
  return num;
};

export default obj;