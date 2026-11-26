// === Module 14640: lt ===

// Module 14640 (lt)
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

export const lt = require("module_14620")._lt;
export const lte = require("module_14620")._lte;
export const gt = require("module_14620")._gt;
export const gte = require("module_14620")._gte;
export const positive = require("module_14620")._positive;
export const negative = require("module_14620")._negative;
export const nonpositive = require("module_14620")._nonpositive;
export const nonnegative = require("module_14620")._nonnegative;
export const multipleOf = require("module_14620")._multipleOf;
export const maxSize = require("module_14620")._maxSize;
export const minSize = require("module_14620")._minSize;
export const size = require("module_14620")._size;
export const maxLength = require("module_14620")._maxLength;
export const minLength = require("module_14620")._minLength;
export const length = require("module_14620")._length;
export const regex = require("module_14620")._regex;
export const lowercase = require("module_14620")._lowercase;
export const uppercase = require("module_14620")._uppercase;
export const includes = require("module_14620")._includes;
export const startsWith = require("module_14620")._startsWith;
export const endsWith = require("module_14620")._endsWith;
export const property = require("module_14620")._property;
export const properties = require("module_14620")._properties;
export const mime = require("module_14620")._mime;
export const overwrite = require("module_14620")._overwrite;
export const normalize = require("module_14620")._normalize;
export const trim = require("module_14620")._trim;
export const toLowerCase = require("module_14620")._toLowerCase;
export const toUpperCase = require("module_14620")._toUpperCase;
export const slugify = require("module_14620")._slugify;