// === Module 14276: ? ===

// Module 14276
const require = arg1;
const dependencyMap = arg6;
arg5.shouldPolyfill = undefined;
arg5.supportedValuesOf = undefined;
let obj = {
  enumerable: true,
  get() {
    return require(14277) /* shouldPolyfill */.shouldPolyfill;
  }
};
Object.defineProperty(arg5, "shouldPolyfill", obj);
obj = {
  enumerable: true,
  get() {
    return require(14278) /* supportedValuesOf */.supportedValuesOf;
  }
};
Object.defineProperty(arg5, "supportedValuesOf", obj);