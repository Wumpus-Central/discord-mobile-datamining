// === Module 10247: lt ===

// Module 10247 (lt)
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

export const lt = require("module_10164")._lt;
export const lte = require("module_10164")._lte;
export const gt = require("module_10164")._gt;
export const gte = require("module_10164")._gte;
export const positive = require("module_10164")._positive;
export const negative = require("module_10164")._negative;
export const nonpositive = require("module_10164")._nonpositive;
export const nonnegative = require("module_10164")._nonnegative;
export const multipleOf = require("module_10164")._multipleOf;
export const maxSize = require("module_10164")._maxSize;
export const minSize = require("module_10164")._minSize;
export const size = require("module_10164")._size;
export const maxLength = require("module_10164")._maxLength;
export const minLength = require("module_10164")._minLength;
export const length = require("module_10164")._length;
export const regex = require("module_10164")._regex;
export const lowercase = require("module_10164")._lowercase;
export const uppercase = require("module_10164")._uppercase;
export const includes = require("module_10164")._includes;
export const startsWith = require("module_10164")._startsWith;
export const endsWith = require("module_10164")._endsWith;
export const property = require("module_10164")._property;
export const properties = require("module_10164")._properties;
export const mime = require("module_10164")._mime;
export const overwrite = require("module_10164")._overwrite;
export const normalize = require("module_10164")._normalize;
export const trim = require("module_10164")._trim;
export const toLowerCase = require("module_10164")._toLowerCase;
export const toUpperCase = require("module_10164")._toUpperCase;
export const slugify = require("module_10164")._slugify;