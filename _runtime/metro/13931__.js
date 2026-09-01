// _runtime/metro/13931__.js
import { shouldPolyfill } from "../13932_shouldPolyfill.js";
import { supportedValuesOf } from "../13933_supportedValuesOf.js";
const require = arg1;
const dependencyMap = arg6;
arg5.shouldPolyfill = undefined;
arg5.supportedValuesOf = undefined;
let obj = {
  enumerable: true,
  get() {
    return shouldPolyfill /* shouldPolyfill */.shouldPolyfill;
  },
};
Object.defineProperty(arg5, "shouldPolyfill", obj);
obj = {
  enumerable: true,
  get() {
    return supportedValuesOf /* supportedValuesOf */.supportedValuesOf;
  },
};
Object.defineProperty(arg5, "supportedValuesOf", obj);
