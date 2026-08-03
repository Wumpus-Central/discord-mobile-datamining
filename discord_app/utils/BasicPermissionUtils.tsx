// === Module 3829: has ===

// Module 3829 (has)
const result = require("set").fileFinishedImporting("utils/BasicPermissionUtils.tsx");
const prototype = function BasicPermissionUtils() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["has"] = function has(arg0, arg1) {
  return arg0 & arg1;
};
prototype["asBasicFlag"] = function asBasicFlag(permissions) {
  return importAll(506).asUintN(20, permissions);
};
prototype["asBigFlag"] = function asBigFlag(VIEW_CHANNEL) {
  const self = this;
  if (!Object.hasOwn(this.cache, VIEW_CHANNEL)) {
    self.cache[VIEW_CHANNEL] = importAll(506).deserialize(VIEW_CHANNEL);
    const obj = importAll(506);
  }
  return self.cache[VIEW_CHANNEL];
};
prototype.cache = {};

export default prototype;