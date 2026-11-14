// === Module 12241: lt ===

// Module 12241 (lt)
const require = globalThis.__r;

const require = arg1;
const exports = arg5;
const dependencyMap = arg6;
(() => {
  let tmp = exports;
  const ownPropertyNames = Object.getOwnPropertyNames(exports);
  let num = 0;
  if (0 < ownPropertyNames.length) {
    const _Object = Object;
    const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(exports, ownPropertyNames[num]);
    if (ownPropertyDescriptor) {
      if (ownPropertyDescriptor.get) {
        if (ownPropertyDescriptor.configurable) {
          try {
            value = ownPropertyDescriptor.get();
            if (undefined !== value) {
              const _Object2 = Object;
              const obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
              Object.defineProperty(exports, ownPropertyNames[num], obj);
            }
          } catch (err) {
          }
        }
      }
    }
    num = num + 1;
    tmp = exports;
  }
  const frozen = Object.freeze(tmp);
})();

export const lt = require("module_12158")._lt;
export const lte = require("module_12158")._lte;
export const gt = require("module_12158")._gt;
export const gte = require("module_12158")._gte;
export const positive = require("module_12158")._positive;
export const negative = require("module_12158")._negative;
export const nonpositive = require("module_12158")._nonpositive;
export const nonnegative = require("module_12158")._nonnegative;
export const multipleOf = require("module_12158")._multipleOf;
export const maxSize = require("module_12158")._maxSize;
export const minSize = require("module_12158")._minSize;
export const size = require("module_12158")._size;
export const maxLength = require("module_12158")._maxLength;
export const minLength = require("module_12158")._minLength;
export const length = require("module_12158")._length;
export const regex = require("module_12158")._regex;
export const lowercase = require("module_12158")._lowercase;
export const uppercase = require("module_12158")._uppercase;
export const includes = require("module_12158")._includes;
export const startsWith = require("module_12158")._startsWith;
export const endsWith = require("module_12158")._endsWith;
export const property = require("module_12158")._property;
export const properties = require("module_12158")._properties;
export const mime = require("module_12158")._mime;
export const overwrite = require("module_12158")._overwrite;
export const normalize = require("module_12158")._normalize;
export const trim = require("module_12158")._trim;
export const toLowerCase = require("module_12158")._toLowerCase;
export const toUpperCase = require("module_12158")._toUpperCase;
export const slugify = require("module_12158")._slugify;