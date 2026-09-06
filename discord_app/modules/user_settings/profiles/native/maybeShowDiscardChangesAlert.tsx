// === Module 10923: maybeShowDiscardChangesAlert ===

// Module 10923 (maybeShowDiscardChangesAlert)
import util from "util" /* 1114 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/profiles/native/maybeShowDiscardChangesAlert.tsx");

export default function maybeShowDiscardChangesAlert(onHasEdits) {
  ({ resetPending: require, onConfirm } = onHasEdits);
  onHasEdits = onHasEdits.onHasEdits;
  if (onHasEdits.hasEdits) {
    if (onHasEdits != null) {
      onHasEdits();
    }
    onConfirm(4905);
    const obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.pvRCSu);
    const intl2 = util.intl;
    obj.body = intl2.string(util.t.DRi46S);
    const intl3 = util.intl;
    obj.confirmText = intl3.string(util.t["6GQDFu"]);
    const intl4 = util.intl;
    obj.cancelText = intl4.string(util.t.DmDzZB);
    obj.onConfirm = function onConfirm() {
      require();
      onConfirm();
    };
    obj.onCancel = function onCancel() {
      onConfirm(dependencyMap[0]).close();
    };
    let showResult = obj.show(obj);
  } else {
    showResult = onConfirm();
  }
  return showResult;
};
export const showDiscardChangesAlert = function showDiscardChangesAlert(arg0) {
  ({ onConfirm, onCancel } = arg0);
  const obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.pvRCSu);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.DRi46S);
  const intl3 = util.intl;
  obj.confirmText = intl3.string(util.t["6GQDFu"]);
  const intl4 = util.intl;
  obj.cancelText = intl4.string(util.t.DmDzZB);
  obj.onConfirm = onConfirm;
  obj.onCancel = onCancel;
  return obj.show(obj);
};