// === Module 14154: ? ===

// Module 14154
const require = arg1;
const dependencyMap = arg6;
arg5.shouldPolyfill = undefined;
arg5.supportedValuesOf = undefined;
let obj = {
  enumerable: true,
  get() {
    return require(14155) /* shouldPolyfill */.shouldPolyfill;
  }
};
Object.defineProperty(arg5, "shouldPolyfill", obj);
obj = {
  enumerable: true,
  get() {
    return require(14156) /* supportedValuesOf */.supportedValuesOf;
  }
};
Object.defineProperty(arg5, "supportedValuesOf", obj);