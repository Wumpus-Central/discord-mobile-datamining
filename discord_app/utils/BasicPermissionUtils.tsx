// === Module 4099: has ===

// Module 4099 (has)
import set from "set" /* 2 */;
import fromStringAll from "fromString" /* 506 */;

const result = set.fileFinishedImporting("utils/BasicPermissionUtils.tsx");
const prototype = function BasicPermissionUtils() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["has"] = function has(arg0, arg1) {
  return (arg0 & arg1) === arg1;
};
prototype["asBasicFlag"] = function asBasicFlag(permissions) {
  return fromStringAll.asUintN(24, permissions);
};
prototype["asBigFlag"] = function asBigFlag(VIEW_CHANNEL) {
  const self = this;
  if (!Object.hasOwn(this.cache, VIEW_CHANNEL)) {
    self.cache[VIEW_CHANNEL] = fromStringAll.deserialize(VIEW_CHANNEL);
    const obj = fromStringAll;
  }
  return self.cache[VIEW_CHANNEL];
};
prototype.cache = {};

export default prototype;
export const MAXIMUM_BITS = 24;