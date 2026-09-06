// discord_app/utils/BasicPermissionUtils.tsx
import BigFlagUtilsAll from "../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("utils/BasicPermissionUtils.tsx");
const prototype = function BasicPermissionUtils() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["has"] = function has(arg0, arg1) {
  return (arg0 & arg1) === arg1;
};
prototype["asBasicFlag"] = function asBasicFlag(permissions) {
  return BigFlagUtilsAll.asUintN(24, permissions);
};
prototype["asBigFlag"] = function asBigFlag(VIEW_CHANNEL) {
  const self = this;
  if (!Object.hasOwn(this.cache, VIEW_CHANNEL)) {
    const deserializer = BigFlagUtilsAll;
    self.cache[VIEW_CHANNEL] = deserializer.deserialize(VIEW_CHANNEL);
  }
  return self.cache[VIEW_CHANNEL];
};
prototype.cache = {};

export default prototype;
export const MAXIMUM_BITS = 24;
