// discord_app/modules/user_settings/profiles/native/maybeShowDiscardChangesAlert.tsx
import util from "../../../../intl/index.native.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/user_settings/profiles/native/maybeShowDiscardChangesAlert.tsx");

export default function maybeShowDiscardChangesAlert(onHasEdits) {
  ({ resetPending: require, onConfirm } = onHasEdits);
  onHasEdits = onHasEdits.onHasEdits;
  if (onHasEdits.hasEdits) {
    if (onHasEdits != null) {
      onHasEdits();
    }
    const obj2 = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.pvRCSu);
    const intl2 = util.intl;
    obj2.body = intl2.string(util.t.DRi46S);
    const intl3 = util.intl;
    obj2.confirmText = intl3.string(util.t["6GQDFu"]);
    const intl4 = util.intl;
    obj2.cancelText = intl4.string(util.t.DmDzZB);
    obj2.onConfirm = function onConfirm() {
      require();
      onConfirm();
    };
    obj2.onCancel = function onCancel() {
      onConfirm(dependencyMap[0]).close();
    };
    let showResult = onConfirm(4984).show(obj2);
    const obj = onConfirm(4984);
  } else {
    showResult = onConfirm();
  }
  return showResult;
}
export const showDiscardChangesAlert = function showDiscardChangesAlert(arg0) {
  ({ onConfirm, onCancel } = arg0);
  const obj2 = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.pvRCSu);
  const intl2 = util.intl;
  obj2.body = intl2.string(util.t.DRi46S);
  const intl3 = util.intl;
  obj2.confirmText = intl3.string(util.t["6GQDFu"]);
  const intl4 = util.intl;
  obj2.cancelText = intl4.string(util.t.DmDzZB);
  obj2.onConfirm = onConfirm;
  obj2.onCancel = onCancel;
  return actions_AlertActionCreatorsDefault.show(obj2);
};
