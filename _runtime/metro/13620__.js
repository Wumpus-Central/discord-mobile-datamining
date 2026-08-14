// _runtime/metro/13620__.js
import { shouldPolyfill } from "../13621_shouldPolyfill.js";
import { supportedValuesOf } from "../13622_supportedValuesOf.js";
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