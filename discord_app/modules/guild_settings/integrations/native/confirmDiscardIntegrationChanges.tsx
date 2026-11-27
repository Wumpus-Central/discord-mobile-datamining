// === Module 20072: confirmDiscardIntegrationChanges ===

// Module 20072 (confirmDiscardIntegrationChanges)
import util from "util" /* 1112 */;
import AlertModal from "AlertModal" /* 6052 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/confirmDiscardIntegrationChanges.tsx");

export default function confirmDiscardIntegrationChanges(arg0) {
  if (arg0) {
    let _Promise1 = new _Promise((arg0) => {
      closure_0 = arg0;
      const obj2 = { key: "integration-discard-changes", title: null, content: null, confirmText: null, cancelText: null, onConfirm: null, onCloseCallback: null };
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
};