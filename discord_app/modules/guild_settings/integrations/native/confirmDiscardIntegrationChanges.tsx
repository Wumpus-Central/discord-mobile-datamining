// discord_app/modules/guild_settings/integrations/native/confirmDiscardIntegrationChanges.tsx
import util from "../../../../intl/index.native.tsx";
import AlertModal from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/native/confirmDiscardIntegrationChanges.tsx",
);

export default function confirmDiscardIntegrationChanges(arg0) {
  if (arg0) {
    let _Promise1 = new _Promise((arg0) => {
      closure_0 = arg0;
      const obj2 = {
        key: "integration-discard-changes",
        title: null,
        content: null,
        confirmText: null,
        cancelText: null,
        onConfirm: null,
        onCloseCallback: null,
      };
      const intl = util.intl;
      obj2.title = intl.string(util.t.pvRCSu);
      const intl2 = util.intl;
      obj2.content = intl2.string(util.t.DRi46S);
      const intl3 = util.intl;
      obj2.confirmText = intl3.string(util.t["6GQDFu"]);
      const intl4 = util.intl;
      obj2.cancelText = intl4.string(util.t.DmDzZB);
      obj2.onConfirm = function onConfirm() {
        return closure_0(true);
      };
      obj2.onCloseCallback = function onCloseCallback() {
        return closure_0(false);
      };
      AlertModal.showConfirmModal(obj2);
    });
  } else {
    _Promise1 = _Promise.resolve(true);
  }
  return _Promise1;
}
