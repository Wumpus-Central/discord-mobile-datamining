// === Module 10768: conjureDevicePermissions ===

// Module 10768 (conjureDevicePermissions)
import util from "util" /* 1128 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import _modDef3830 from "module_3830" /* 3830 */;
import size from "module_2" /* 2 */;

const obj = {
  screen_capture: {
    isSupported: PlatformUtils.isDesktop,
    getLabel() {
      const intl = util.intl;
      return intl.string(_modDef3830["2KIefJ"]);
    }
  }
};
const keys = Object.keys(obj);
const result = size.fileFinishedImporting("modules/conjure/device_permissions/conjureDevicePermissions.tsx");

export const CONJURE_DEVICE_PERMISSION_NAMES = keys;
export const isConjureDevicePermissionName = function isConjureDevicePermissionName(str) {
  let hasOwnResult = typeof str === "string";
  if (typeof str === "string") {
    const _Object = Object;
    hasOwnResult = Object.hasOwn(obj, str);
  }
  return hasOwnResult;
};
export const isConjureDevicePermissionSupported = function isConjureDevicePermissionSupported(permission) {
  return obj[permission].isSupported();
};
export const getConjureDevicePermissionLabel = function getConjureDevicePermissionLabel(arg0) {
  return obj[arg0].getLabel();
};
export const getConjureDevicePermissionPromptTitle = function getConjureDevicePermissionPromptTitle(app) {
  const intl = util.intl;
  return intl.formatToPlainString(_modDef3830.vBSfKU, { app });
};