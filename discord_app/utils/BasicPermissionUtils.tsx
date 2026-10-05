// === Module 4518: BasicPermissionUtils ===

// Module 4518 (BasicPermissionUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/BasicPermissionUtils.tsx");
class BasicPermissionUtils {
  static has(arg0, arg1) {
    return (arg0 & arg1) === arg1;
  }
  static asBasicFlag(permissions) {
    const obj = BigFlagUtilsAll;
    return obj.asUintN(24, permissions);
  }
  static asBigFlag(VIEW_CHANNEL) {
    const self = this;
    if (!Object.hasOwn(this.cache, VIEW_CHANNEL)) {
      const cache = self.cache;
      const deserializer = BigFlagUtilsAll;
      cache[VIEW_CHANNEL] = deserializer.deserialize(VIEW_CHANNEL);
    }
    return self.cache[VIEW_CHANNEL];
  }
}
BasicPermissionUtils.cache = {};

export default BasicPermissionUtils;
export const MAXIMUM_BITS = 24;