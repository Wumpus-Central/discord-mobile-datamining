// discord_app/modules/conjure/device_permissions/conjureDevicePermissions.tsx
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import _modDef3831 from "../intl/ConjureUntranslated.messages.js";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  screen_capture: {
    isSupported: PlatformUtils.isDesktop,
    getLabel() {
      const intl = util.intl;
      return intl.string(_modDef3831["2KIefJ"]);
    },
  },
  connect_user_to_voice: {
    isSupported() {
      return true;
    },
    getLabel() {
      const intl = util.intl;
      return intl.string(_modDef3831["5Hp3Nx"]);
    },
  },
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
  return intl.formatToPlainString(_modDef3831.vBSfKU, { app });
};
