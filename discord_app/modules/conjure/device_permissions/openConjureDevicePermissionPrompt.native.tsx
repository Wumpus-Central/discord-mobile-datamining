// === Module 13154: openConjureDevicePermissionPrompt ===

// Module 13154 (openConjureDevicePermissionPrompt)
import util from "util" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import AlertModal from "AlertModal" /* 6274 */;
import conjureDevicePermissions from "conjureDevicePermissions" /* 13153 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/device_permissions/openConjureDevicePermissionPrompt.native.tsx");

export default function _default(arg0) {
  ({ appName: require, permissions: importDefault } = arg0);
  return new Promise((arg0) => {
    closure_0 = arg0;
    const obj2 = { key: "conjure-device-permission", title: null, content: null, confirmText: null, cancelText: null, variant: "primary", onConfirm: null, onCancel: null, onCloseCallback: null, dismissable: false };
    const obj = AlertModal;
    obj2.title = conjureDevicePermissions.getConjureDevicePermissionPromptTitle(closure_1_0);
    const mapped = closure_1_1.map(conjureDevicePermissions.getConjureDevicePermissionLabel);
    obj2.content = mapped.join("\n");
    const intl = util.intl;
    obj2.confirmText = intl.string(_modDef4131.xbsXd9);
    const intl2 = util.intl;
    obj2.cancelText = intl2.string(_modDef4131.rDyl56);
    obj2.onConfirm = function onConfirm() {
      return closure_0(true);
    };
    obj2.onCancel = function onCancel() {
      return closure_0(false);
    };
    obj2.onCloseCallback = function onCloseCallback() {
      return closure_0(null);
    };
    obj.showConfirmModal(obj2);
  });
};