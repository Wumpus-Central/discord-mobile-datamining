// === Module 4029: has ===

// Module 4029 (has)
import obj132 from "obj132" /* 2 */;
import fromStringAll from "fromString" /* 506 */;

const result = obj132.fileFinishedImporting("utils/BasicPermissionUtils.tsx");
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
    const deserializer = fromStringAll;
    self.cache[VIEW_CHANNEL] = deserializer.deserialize(VIEW_CHANNEL);
  }
  return self.cache[VIEW_CHANNEL];
};
prototype.cache = {};

export default prototype;
export const MAXIMUM_BITS = 24;