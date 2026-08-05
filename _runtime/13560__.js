// _runtime/13560__.js
const exports = unsigned_long_long;
function _(arg0, context) {
  let str = "Value";
  if (context) {
    str = "Value";
    if (context.context) {
      str = context.context;
    }
  }
  return "" + str + " " + "is not a view on an DataView object" + ".";
}
function createIntegerConversion(exponent, unsigned) {
  unsigned = unsigned.unsigned;
  let closure_2 = !unsigned;
  if (64 === exponent) {
    let _Math4 = Math;
    let closure_1 = Math.pow(2, 53) - 1;
    let num9 = 0;
    if (!unsigned) {
      let _Math5 = Math;
      num9 = 1 - Math.pow(2, 53);
    }
    let closure_0 = num9;
  } else if (unsigned) {
    closure_0 = 0;
    let _Math3 = Math;
    closure_1 = Math.pow(2, exponent) - 1;
  } else {
    let _Math = Math;
    let diff = exponent - 1;
    closure_0 = -Math.pow(2, diff);
    let _Math2 = Math;
    closure_1 = Math.pow(2, diff) - 1;
  }
  let closure_3 = Math.pow(2, exponent);
  let closure_4 = Math.pow(2, exponent - 1);
  return (arg0, arg1) => {
    let obj = arg1;
    if (undefined === arg1) {
      obj = {};
    }
    let num = 0;
    if (0 !== +arg0) {
      num = tmp;
    }
    const _Number = Number;
    if (obj.enforceRange) {
      if (_Number.isFinite(num)) {
        const _Math5 = Math;
        const truncResult = Math.trunc(num);
        let num11 = 0;
        if (0 !== truncResult) {
          num11 = truncResult;
        }
        if (num11 >= closure_0) {
          if (num11 <= closure_1) {
            return num11;
          }
        }
        const _HermesInternal2 = HermesInternal;
        const combined = "is outside the accepted range of " + tmp21 + " to " + closure_1 + ", inclusive";
        let str11 = "Value";
        if (obj) {
          str11 = "Value";
          if (obj.context) {
            str11 = obj.context;
          }
        }
        const _HermesInternal3 = HermesInternal;
        const typeError = new TypeError("" + str11 + " " + combined + ".");
        throw typeError;
      } else {
        let str2 = "Value";
        if (obj) {
          str2 = "Value";
          if (obj.context) {
            str2 = obj.context;
          }
        }
        const _HermesInternal = HermesInternal;
        const typeError1 = new TypeError("" + str2 + " " + "is not a finite number" + ".");
        throw typeError1;
      }
    } else {
      if (!_Number.isNaN(num)) {
        if (obj.clamp) {
          const _Math = Math;
          const _Math2 = Math;
          const bound = Math.min(Math.max(num, closure_0), closure_1);
          if (bound > 0) {
            if (bound % 1 === 0.5) {
              let num6 = 0;
              if (0 !== rounded) {
                num6 = rounded;
              }
            }
            const _Math3 = Math;
            rounded = Math.floor(bound);
          }
          const _Math4 = Math;
          rounded = Math.round(bound);
        }
        return num6;
      }
      const _Number2 = Number;
      let num7 = 0;
      if (Number.isFinite(num)) {
        num7 = 0;
        if (0 !== num) {
          const _Math6 = Math;
          const truncResult1 = Math.trunc(num);
          let num8 = 0;
          if (0 !== truncResult1) {
            num8 = truncResult1;
          }
          if (num8 < closure_0) {
            const result = num8 % closure_3;
            let num9 = 1;
            let num10 = 1;
            if (closure_3 < 0) {
              num10 = -1;
            }
            if (result < 0) {
              num9 = -1;
            }
            let sum = result;
            if (num10 !== num9) {
              sum = result + tmp9;
            }
            let diff = sum;
            if (closure_2) {
              diff = sum;
              if (sum >= closure_4) {
                diff = sum - tmp9;
              }
            }
            let tmp8 = diff;
          } else {
            tmp8 = num8;
          }
          num7 = tmp8;
        }
      }
      num6 = num7;
    }
  };
}
function convertCallbackFunction(fn, context) {
  if (typeof fn !== "function") {
    let str2 = "Value";
    if (context) {
      str2 = "Value";
      if (context.context) {
        str2 = context.context;
      }
    }
    const _HermesInternal = HermesInternal;
    const typeError = new TypeError("" + str2 + " " + "is not a function" + ".");
    throw typeError;
  } else {
    return fn;
  }
}
function isArrayBuffer(arg0) {
  try {
    const call = get.call;
    if (typeof call === "unknown") {
      get();
    } else {
      call(arg0);
    }
    return true;
  } catch (err) {
    return false;
  }
}
unsigned_long_long.any = (arg0) => arg0;
unsigned_long_long.void = () => {

};
unsigned_long_long.boolean = (arg0) => arg0;
unsigned_long_long.byte = require("module_8");
unsigned_long_long.octet = require("module_8");
unsigned_long_long.short = require("module_16");
unsigned_long_long["unsigned short"] = require("module_16");
unsigned_long_long.long = require("module_32");
unsigned_long_long["unsigned long"] = require("module_32");
unsigned_long_long["long long"] = require("module_64");
unsigned_long_long["unsigned long long"] = require("module_64");
unsigned_long_long.double = (arg0, context) => {
  if (Number.isFinite(+arg0)) {
    return tmp;
  } else {
    let str2 = "Value";
    if (context) {
      str2 = "Value";
      if (context.context) {
        str2 = context.context;
      }
    }
    const _HermesInternal = HermesInternal;
    const typeError = new TypeError("" + str2 + " " + "is not a finite floating-point value" + ".");
    throw typeError;
  }
};
unsigned_long_long["unrestricted double"] = (arg0) => +arg0;
unsigned_long_long.float = (arg0, context) => {
  if (Number.isFinite(+arg0)) {
    const _Object = Object;
    if (Object.is(tmp, -0)) {
      return tmp;
    } else {
      const _Math = Math;
      const froundResult = Math.fround(tmp);
      const _Number = Number;
      if (Number.isFinite(froundResult)) {
        return froundResult;
      } else {
        let str8 = "Value";
        if (context) {
          str8 = "Value";
          if (context.context) {
            str8 = context.context;
          }
        }
        const _HermesInternal2 = HermesInternal;
        const typeError = new TypeError("" + str8 + " " + "is outside the range of a single-precision floating-point value" + ".");
        throw typeError;
      }
    }
  } else {
    let str2 = "Value";
    if (context) {
      str2 = "Value";
      if (context.context) {
        str2 = context.context;
      }
    }
    const _HermesInternal = HermesInternal;
    const typeError1 = new TypeError("" + str2 + " " + "is not a finite floating-point value" + ".");
    throw typeError1;
  }
};
unsigned_long_long["unrestricted float"] = (arg0) => {
  let froundResult = tmp;
  if (!isNaN(+arg0)) {
    const _Object = Object;
    froundResult = tmp;
    if (!Object.is(tmp, -0)) {
      const _Math = Math;
      froundResult = Math.fround(tmp);
    }
  }
  return froundResult;
};
unsigned_long_long.DOMString = (arg0, arg1) => {
  let obj = arg1;
  if (undefined === arg1) {
    obj = {};
  }
  if (obj.treatNullAsEmptyString) {
    if (null === arg0) {
      return "";
    }
  }
  if (typeof arg0 === "symbol") {
    let str2 = "Value";
    if (obj) {
      str2 = "Value";
      if (obj.context) {
        str2 = obj.context;
      }
    }
    const _HermesInternal = HermesInternal;
    const typeError = new TypeError("" + str2 + " " + "is a symbol, which cannot be converted to a string" + ".");
    throw typeError;
  } else {
    const _String = String;
    return String(arg0);
  }
};
unsigned_long_long.ByteString = (arg0, context) => {
  const DOMStringResult = exports.DOMString(arg0, context);
  let num = 0;
  let codePointAtResult = DOMStringResult.codePointAt(0);
  if (undefined !== codePointAtResult) {
    while (codePointAtResult <= 255) {
      let sum = num + 1;
      codePointAtResult = DOMStringResult.codePointAt(sum);
      num = sum;
    }
    let str2 = "Value";
    if (context) {
      str2 = "Value";
      if (context.context) {
        str2 = context.context;
      }
    }
    const _HermesInternal = HermesInternal;
    const typeError = new TypeError("" + str2 + " " + "is not a valid ByteString" + ".");
    throw typeError;
  }
  return DOMStringResult;
};
unsigned_long_long.USVString = (arg0, arg1) => {
  const DOMStringResult = exports.DOMString(arg0, arg1);
  const items = [];
  let num = 0;
  if (0 < DOMStringResult.length) {
    while (true) {
      let charCodeAtResult = DOMStringResult.charCodeAt(num);
      let tmp2 = num;
      if (charCodeAtResult >= 55296) {
        if (charCodeAtResult <= 57343) {
          if (56320 <= charCodeAtResult) {
            if (charCodeAtResult <= 57343) {
              let _String4 = String;
              let arr = items.push(String.fromCodePoint(65533));
              let tmp6 = num;
            }
          }
          if (num === length - 1) {
            let _String3 = String;
            arr = items.push(String.fromCodePoint(65533));
            tmp6 = num;
          } else {
            let sum = num + 1;
            let charCodeAtResult1 = DOMStringResult.charCodeAt(sum);
            if (56320 <= charCodeAtResult1) {
              if (charCodeAtResult1 <= 57343) {
                let _String2 = String;
                let arr1 = items.push(String.fromCodePoint(65536 + 1024 * (1023 & charCodeAtResult) + (1023 & charCodeAtResult1)));
                tmp6 = sum;
              }
            }
            let _String = String;
            let arr2 = items.push(String.fromCodePoint(65533));
            tmp6 = num;
          }
        }
        num = tmp6 + 1;
        if (num >= length) {
          break;
        }
      }
      let _String5 = String;
      let arr3 = items.push(String.fromCodePoint(charCodeAtResult));
      tmp6 = num;
    }
  }
  return items.join("");
};
unsigned_long_long.object = (arg0, context) => {
  let str = "Null";
  if (null !== arg0) {
    if ("undefined" === typeof arg0) {
      str = "Undefined";
    } else if ("boolean" === tmp) {
      str = "Boolean";
    } else if ("number" === tmp) {
      str = "Number";
    } else if ("string" === tmp) {
      str = "String";
    } else {
      str = "Symbol";
      if ("symbol" !== tmp) {
        str = "Object";
      }
    }
  }
  if ("Object" !== str) {
    let str8 = "Value";
    if (context) {
      str8 = "Value";
      if (context.context) {
        str8 = context.context;
      }
    }
    const _HermesInternal = HermesInternal;
    const typeError = new TypeError("" + str8 + " " + "is not an object" + ".");
    throw typeError;
  } else {
    return arg0;
  }
};
let get = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get;
unsigned_long_long.ArrayBuffer = (arg0, context) => {
  if (isArrayBuffer(arg0)) {
    return arg0;
  } else {
    let str2 = "Value";
    if (context) {
      str2 = "Value";
      if (context.context) {
        str2 = context.context;
      }
    }
    const _HermesInternal = HermesInternal;
    const typeError = new TypeError("" + str2 + " " + "is not a view on an ArrayBuffer object" + ".");
    throw typeError;
  }
};
get = Object.getOwnPropertyDescriptor(DataView.prototype, "byteLength").get;
unsigned_long_long.DataView = (arg0, arg1) => {
  try {
    const call = get.call;
    if (typeof call === "unknown") {
      get();
    } else {
      call(arg0);
    }
    return arg0;
  } catch (err) {
    const _TypeError = TypeError;
    const typeError = new TypeError(_("is not a view on an DataView object", arg1));
    throw typeError;
  }
};
let items = [Int8Array, Int16Array, Int32Array, Uint8Array, Uint16Array, Uint32Array, Uint8ClampedArray, Float32Array, Float64Array];
const item = items.forEach((name) => {
  name = name.name;
  let str = "a";
  if (obj.test(name)) {
    str = "an";
  }
  name[name] = (arg0, context) => {
    if (ArrayBuffer.isView(arg0)) {
      if (arg0.constructor.name === name) {
        return arg0;
      }
    }
    const combined = "is not " + str + " " + name + " object";
    str = "Value";
    if (context) {
      str = "Value";
      if (context.context) {
        str = context.context;
      }
    }
    const typeError = new TypeError("" + str + " " + combined + ".");
    throw typeError;
  };
});
unsigned_long_long.ArrayBufferView = (arg0, context) => {
  if (ArrayBuffer.isView(arg0)) {
    return arg0;
  } else {
    let str2 = "Value";
    if (context) {
      str2 = "Value";
      if (context.context) {
        str2 = context.context;
      }
    }
    const _HermesInternal = HermesInternal;
    const typeError = new TypeError("" + str2 + " " + "is not a view on an ArrayBuffer object" + ".");
    throw typeError;
  }
};
unsigned_long_long.BufferSource = (arg0, context) => {
  if (!ArrayBuffer.isView(arg0)) {
    if (!isArrayBuffer(arg0)) {
      let str2 = "Value";
      if (context) {
        str2 = "Value";
        if (context.context) {
          str2 = context.context;
        }
      }
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("" + str2 + " " + "is not an ArrayBuffer object or a view on one" + ".");
      throw typeError;
    }
  }
  return arg0;
};
unsigned_long_long.DOMTimeStamp = unsigned_long_long["unsigned long long"];
unsigned_long_long.Function = convertCallbackFunction;
unsigned_long_long.VoidFunction = convertCallbackFunction;