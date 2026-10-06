// === Module 14162: any ===

// Module 14162 (any)
let name;

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
    let num6 = 53;
    let num7 = 2;
    let num8 = 1;
    let closure_1 = Math.pow(2, 53) - 1;
    let num9 = 0;
    if (!unsigned) {
      let _Math5 = Math;
      num9 = 1 - Math.pow(2, 53);
    }
    let closure_0 = num9;
  } else {
    const tmp = globalThis;
    if (unsigned) {
      closure_0 = 0;
      let _Math3 = Math;
      closure_1 = Math.pow(2, exponent) - 1;
    } else {
      let _Math = Math;
      let num = 1;
      let diff = exponent - 1;
      closure_0 = -Math.pow(2, diff);
      let _Math2 = Math;
      closure_1 = Math.pow(2, diff) - 1;
    }
  }
  let closure_3 = Math.pow(2, exponent);
  let closure_4 = Math.pow(2, exponent - 1);
  return function(arg0, arg1) {
    let rounded;
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
        const _TypeError2 = TypeError;
        const combined = "is outside the accepted range of " + closure_0 + " to " + closure_1 + ", inclusive";
        let str11 = "Value";
        if (obj) {
          str11 = "Value";
          if (obj.context) {
            str11 = obj.context;
          }
        }
        const _HermesInternal3 = HermesInternal;
        const self3 = this;
        const self4 = this;
        const _TypeError21 = new _TypeError2("" + str11 + " " + combined + ".");
        throw _TypeError21;
      } else {
        let str2 = "Value";
        const _TypeError = TypeError;
        if (obj) {
          str2 = "Value";
          if (obj.context) {
            str2 = obj.context;
          }
        }
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const _TypeError1 = new _TypeError("" + str2 + " " + "is not a finite number" + ".");
        throw _TypeError1;
      }
    } else {
      if (!_Number.isNaN(num)) {
        let num6;
        if (obj.clamp) {
          const _Math = Math;
          const _Math2 = Math;
          const bound = Math.min(Math.max(num, closure_0), closure_1);
          if (bound > 0) {
            if (bound % 1 === 0.5) {
              num6 = 0;
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
          let tmp8;
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
              sum = result + closure_3;
            }
            let diff = sum;
            if (closure_2) {
              diff = sum;
              if (sum >= closure_4) {
                diff = sum - closure_3;
              }
            }
            tmp8 = diff;
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
function convertCallbackFunction(binder, localeData) {
  if (typeof binder !== "function") {
    let str2 = "Value";
    const _TypeError = TypeError;
    if (localeData) {
      str2 = "Value";
      if (localeData.context) {
        str2 = localeData.context;
      }
    }
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const _TypeError1 = new _TypeError("" + str2 + " " + "is not a function" + ".");
    throw _TypeError1;
  } else {
    return binder;
  }
}
function isArrayBuffer(arg0) {
  try {
    get.call(arg0);
    return true;
  } catch (err) {
    return false;
  }
}
Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get;
const get = Object.getOwnPropertyDescriptor(DataView.prototype, "byteLength").get;
let items = [Int8Array, Int16Array, Int32Array, Uint8Array, Uint16Array, Uint32Array, Uint8ClampedArray, Float32Array, Float64Array];
const item = items.forEach((name) => {
  name = name.name;
  let str = "a";
  const obj = /^[AEIOU]/;
  if (obj.test(name)) {
    str = "an";
  }
  exports[name] = (arg0, context) => {
    if (ArrayBuffer.isView(arg0)) {
      if (arg0.constructor.name === name) {
        return arg0;
      }
    }
    const _TypeError = TypeError;
    const combined = "is not " + str + " " + name + " object";
    str = "Value";
    if (context) {
      str = "Value";
      if (context.context) {
        str = context.context;
      }
    }
    const _TypeError1 = new _TypeError("" + str + " " + combined + ".");
    throw _TypeError1;
  };
});

export const any = (arg0) => arg0;
const void_export = () => {

};
export { void_export as void };
export const boolean = (arg0) => arg0;
export const byte = createIntegerConversion(8, { unsigned: false });
export const octet = createIntegerConversion(8, { unsigned: true });
export const short = createIntegerConversion(16, { unsigned: false });
const unsigned_short_export = createIntegerConversion(16, { unsigned: true });
export { unsigned_short_export as "unsigned short" };
export const long = createIntegerConversion(32, { unsigned: false });
const unsigned_long_export = createIntegerConversion(32, { unsigned: true });
export { unsigned_long_export as "unsigned long" };
const long_long_export = createIntegerConversion(64, { unsigned: false });
export { long_long_export as "long long" };
const unsigned_long_long_export = createIntegerConversion(64, { unsigned: true });
export { unsigned_long_long_export as "unsigned long long" };
export const double = function(arg0, context) {
  if (Number.isFinite(+arg0)) {
    return +arg0;
  } else {
    let str2 = "Value";
    const _TypeError = TypeError;
    if (context) {
      str2 = "Value";
      if (context.context) {
        str2 = context.context;
      }
    }
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const _TypeError1 = new _TypeError("" + str2 + " " + "is not a finite floating-point value" + ".");
    throw _TypeError1;
  }
};
const unrestricted_double_export = (arg0) => +arg0;
export { unrestricted_double_export as "unrestricted double" };
export const float = function(arg0, context) {
  if (Number.isFinite(+arg0)) {
    const _Object = Object;
    if (Object.is(+arg0, -0)) {
      return +arg0;
    } else {
      const _Math = Math;
      const froundResult = Math.fround(+arg0);
      const _Number = Number;
      if (Number.isFinite(froundResult)) {
        return froundResult;
      } else {
        let str8 = "Value";
        const _TypeError2 = TypeError;
        if (context) {
          str8 = "Value";
          if (context.context) {
            str8 = context.context;
          }
        }
        const _HermesInternal2 = HermesInternal;
        const self3 = this;
        const self4 = this;
        const _TypeError21 = new _TypeError2("" + str8 + " " + "is outside the range of a single-precision floating-point value" + ".");
        throw _TypeError21;
      }
    }
  } else {
    let str2 = "Value";
    const _TypeError = TypeError;
    if (context) {
      str2 = "Value";
      if (context.context) {
        str2 = context.context;
      }
    }
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const _TypeError1 = new _TypeError("" + str2 + " " + "is not a finite floating-point value" + ".");
    throw _TypeError1;
  }
};
const unrestricted_float_export = (arg0) => {
  let froundResult = tmp;
  if (!isNaN(+arg0)) {
    const _Object = Object;
    froundResult = tmp;
    if (!Object.is(+arg0, -0)) {
      const _Math = Math;
      froundResult = Math.fround(tmp);
    }
  }
  return froundResult;
};
export { unrestricted_float_export as "unrestricted float" };
export const DOMString = function(item10103, context) {
  let obj = context;
  if (undefined === context) {
    obj = {};
  }
  if (obj.treatNullAsEmptyString) {
    if (null === item10103) {
      return "";
    }
  }
  if (typeof item10103 === "symbol") {
    let str2 = "Value";
    const _TypeError = TypeError;
    if (obj) {
      str2 = "Value";
      if (obj.context) {
        str2 = obj.context;
      }
    }
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const _TypeError1 = new _TypeError("" + str2 + " " + "is a symbol, which cannot be converted to a string" + ".");
    throw _TypeError1;
  } else {
    const _String = String;
    return String(item10103);
  }
};
export const ByteString = function(item10103, context) {
  const DOMStringResult = exports.DOMString(item10103, context);
  let num = 0;
  let codePointAtResult = DOMStringResult.codePointAt(0);
  if (undefined !== codePointAtResult) {
    while (codePointAtResult <= 255) {
      let sum = num + 1;
      codePointAtResult = DOMStringResult.codePointAt(sum);
      num = sum;
    }
    let str2 = "Value";
    const _TypeError = TypeError;
    if (context) {
      str2 = "Value";
      if (context.context) {
        str2 = context.context;
      }
    }
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const _TypeError1 = new _TypeError("" + str2 + " " + "is not a valid ByteString" + ".");
    throw _TypeError1;
  }
  return DOMStringResult;
};
export const USVString = (item10103, context) => {
  const DOMStringResult = exports.DOMString(item10103, context);
  const items = [];
  let num = 0;
  if (0 < DOMStringResult.length) {
    while (true) {
      let charCodeAtResult = DOMStringResult.charCodeAt(num);
      if (charCodeAtResult >= 55296) {
        let tmp6;
        if (charCodeAtResult <= 57343) {
          if (56320 <= charCodeAtResult) {
            if (charCodeAtResult <= 57343) {
              let _String4 = String;
              let arr = items.push(String.fromCodePoint(65533));
              tmp6 = num;
            }
          }
          if (num === length - 1) {
            let _String3 = String;
            let arr2 = items.push(String.fromCodePoint(65533));
            tmp6 = num;
          } else {
            let sum = num + 1;
            let charCodeAtResult1 = DOMStringResult.charCodeAt(sum);
            if (56320 <= charCodeAtResult1) {
              if (charCodeAtResult1 <= 57343) {
                let _String2 = String;
                let arr7 = items.push(String.fromCodePoint(65536 + 1024 * (1023 & charCodeAtResult) + (1023 & charCodeAtResult1)));
                tmp6 = sum;
              }
            }
            let _String = String;
            let arr8 = items.push(String.fromCodePoint(65533));
            tmp6 = num;
          }
        }
        num = tmp6 + 1;
        if (num >= length) {
          break;
        }
      }
      let _String5 = String;
      let arr9 = items.push(String.fromCodePoint(charCodeAtResult));
      tmp6 = num;
    }
  }
  return items.join("");
};
export const object = function(arg0, context) {
  let str = "Null";
  if (null !== arg0) {
    if ("undefined" === typeof arg0) {
      str = "Undefined";
    } else if ("boolean" === typeof arg0) {
      str = "Boolean";
    } else if ("number" === typeof arg0) {
      str = "Number";
    } else if ("string" === typeof arg0) {
      str = "String";
    } else {
      str = "Symbol";
      if ("symbol" !== typeof arg0) {
        str = "Object";
      }
    }
  }
  if ("Object" !== str) {
    let str8 = "Value";
    const _TypeError = TypeError;
    if (context) {
      str8 = "Value";
      if (context.context) {
        str8 = context.context;
      }
    }
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const _TypeError1 = new _TypeError("" + str8 + " " + "is not an object" + ".");
    throw _TypeError1;
  } else {
    return arg0;
  }
};
export const ArrayBuffer = function(length, arg1) {
  if (isArrayBuffer(length)) {
    return length;
  } else {
    let str2 = "Value";
    const _TypeError = TypeError;
    if (arg1) {
      str2 = "Value";
      if (arg1.context) {
        str2 = arg1.context;
      }
    }
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const _TypeError1 = new _TypeError("" + str2 + " " + "is not a view on an ArrayBuffer object" + ".");
    throw _TypeError1;
  }
};
export const DataView = function(arg0, arg1) {
  try {
    get.call(arg0);
    return arg0;
  } catch (err) {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError(_("is not a view on an DataView object", arg1));
    throw typeError;
  }
};
export const ArrayBufferView = function(arg0, context) {
  if (ArrayBuffer.isView(arg0)) {
    return arg0;
  } else {
    let str2 = "Value";
    const _TypeError = TypeError;
    if (context) {
      str2 = "Value";
      if (context.context) {
        str2 = context.context;
      }
    }
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const _TypeError1 = new _TypeError("" + str2 + " " + "is not a view on an ArrayBuffer object" + ".");
    throw _TypeError1;
  }
};
export const BufferSource = function(arg0, context) {
  if (!ArrayBuffer.isView(arg0)) {
    if (!isArrayBuffer(arg0)) {
      let str2 = "Value";
      const _TypeError = TypeError;
      if (context) {
        str2 = "Value";
        if (context.context) {
          str2 = context.context;
        }
      }
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const _TypeError1 = new _TypeError("" + str2 + " " + "is not an ArrayBuffer object or a view on one" + ".");
      throw _TypeError1;
    }
  }
  return arg0;
};
export const DOMTimeStamp = exports["unsigned long long"];
export const Function = convertCallbackFunction;
export const VoidFunction = convertCallbackFunction;