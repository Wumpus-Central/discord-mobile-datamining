// _runtime/metro/13551__.js
import { shouldPolyfill } from "../13552_shouldPolyfill.js";
import { supportedValuesOf } from "../13553_supportedValuesOf.js";
const require = arg1;
const dependencyMap = arg6;
arg5.shouldPolyfill = undefined;
arg5.supportedValuesOf = undefined;
let obj = {
  enumerable: true,
  get() {
    return shouldPolyfill.shouldPolyfill;
  }
};
Object.defineProperty(arg5, "shouldPolyfill", obj);
obj = {
  enumerable: true,
  get() {
    return supportedValuesOf.supportedValuesOf;
  }
};
Object.defineProperty(arg5, "supportedValuesOf", obj);