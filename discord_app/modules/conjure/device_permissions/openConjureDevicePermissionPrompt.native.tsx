// discord_app/modules/conjure/device_permissions/openConjureDevicePermissionPrompt.native.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3830 from "../intl/ConjureUntranslated.messages.js";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import conjureDevicePermissions from "conjureDevicePermissions.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/conjure/device_permissions/openConjureDevicePermissionPrompt.native.tsx",
);

export default function _default(arg0) {
  ({ appName: require, permissions: importDefault } = arg0);
  return new Promise((arg0) => {
    closure_0 = arg0;
    const obj2 = {
      key: "conjure-device-permission",
      title: null,
      content: null,
      confirmText: null,
      cancelText: null,
      variant: "primary",
      onConfirm: null,
      onCancel: null,
      onCloseCallback: null,
      dismissable: false,
    };
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
}
