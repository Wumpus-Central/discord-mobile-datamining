// === Module 10769: openConjureDevicePermissionPrompt ===

// Module 10769 (openConjureDevicePermissionPrompt)
import util from "util" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import AlertModal from "AlertModal" /* 5901 */;
import conjureDevicePermissions from "conjureDevicePermissions" /* 10768 */;
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
    obj2.confirmText = intl.string(_modDef3830.xbsXd9);
    const intl2 = util.intl;
    obj2.cancelText = intl2.string(_modDef3830.rDyl56);
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