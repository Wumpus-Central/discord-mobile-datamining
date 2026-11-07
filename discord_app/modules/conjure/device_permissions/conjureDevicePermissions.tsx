// === Module 11055: conjureDevicePermissions ===

// Module 11055 (conjureDevicePermissions)
import util from "util" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import _modDef4026 from "module_4026" /* 4026 */;
import size from "module_2" /* 2 */;

const obj = {
  screen_capture: {
    isSupported: PlatformUtils.isDesktop,
    getLabel() {
      const intl = util.intl;
      return intl.string(_modDef4026["2KIefJ"]);
    }
  },
  connect_user_to_voice: {
    isSupported() {
      return true;
    },
    getLabel() {
      const intl = util.intl;
      return intl.string(_modDef4026["5Hp3Nx"]);
    }
  }
};
const keys = Object.keys(obj);
const result = size.fileFinishedImporting("modules/conjure/device_permissions/conjureDevicePermissions.tsx");

export const CONJURE_DEVICE_PERMISSION_NAMES = keys;
export function isConjureDevicePermissionName(str) {
  let hasOwnResult = typeof str === "string";
  if (typeof str === "string") {
    const _Object = Object;
    hasOwnResult = Object.hasOwn(obj, str);
  }
  return hasOwnResult;
}
export function isConjureDevicePermissionSupported(permission) {
  return obj[permission].isSupported();
}
export function getConjureDevicePermissionLabel(permission) {
  return obj[permission].getLabel();
}
export function getConjureDevicePermissionPromptTitle(app) {
  const intl = util.intl;
  return intl.formatToPlainString(_modDef4026.vBSfKU, { app });
}