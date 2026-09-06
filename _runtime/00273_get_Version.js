// === Module 273: get Version ===

// Module 273 (get Version)
const importDefault = arg2;
const dependencyMap = arg6;
let obj = { __constants: null, OS: "android" };
Object.defineProperty(obj, "Version", {
  get: function() {
    return this.constants.Version;
  },
  set: undefined
});
Object.defineProperty(obj, "constants", {
  get: function() {
    const self = this;
    if (null == this.__constants) {
      self.__constants = require("PlatformConstants").getConstants();
      const obj = require("PlatformConstants");
    }
    return self.__constants;
  },
  set: undefined
});
Object.defineProperty(obj, "isTesting", { get: () => false, set: undefined });
Object.defineProperty(obj, "isDisableAnimations", {
  get: function() {
    let isTesting = this.constants.isDisableAnimations;
    if (isTesting == null) {
      isTesting = this.isTesting;
    }
    return isTesting;
  },
  set: undefined
});
Object.defineProperty(obj, "isTV", {
  get: function() {
    return "tv" === this.constants.uiMode;
  },
  set: undefined
});
Object.defineProperty(obj, "isVision", { get: () => false, set: undefined });
obj.select = function select(android) {
  if ("android" in android) {
    android = android.android;
  } else {
    android = "native" in android ? android.native : android.default;
  }
  return android;
};

export default obj;