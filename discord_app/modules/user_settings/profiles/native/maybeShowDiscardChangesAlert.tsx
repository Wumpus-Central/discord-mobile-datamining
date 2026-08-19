// discord_app/modules/user_settings/profiles/native/maybeShowDiscardChangesAlert.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import _modDef4656 from "../../../../actions/native/AlertActionCreators.tsx";

const result = obj132.fileFinishedImporting("modules/user_settings/profiles/native/maybeShowDiscardChangesAlert.tsx");

export default function maybeShowDiscardChangesAlert(onHasEdits) {
  ({ resetPending: require, onConfirm } = onHasEdits);
  onHasEdits = onHasEdits.onHasEdits;
  if (onHasEdits.hasEdits) {
    if (onHasEdits != null) {
      onHasEdits();
    }
    onConfirm(4656);
    const obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.pvRCSu);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t.DRi46S);
    const intl3 = getSystemLocale.intl;
    obj[2] = intl3.string(getSystemLocale.t["6GQDFu"]);
    const intl4 = getSystemLocale.intl;
    obj[3] = intl4.string(getSystemLocale.t.DmDzZB);
    obj[4] = function onConfirm() {
      callback();
      onConfirm();
    };
    obj[5] = function onCancel() {
      onConfirm(table[0]).close();
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
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.pvRCSu);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.DRi46S);
  const intl3 = getSystemLocale.intl;
  obj[2] = intl3.string(getSystemLocale.t["6GQDFu"]);
  const intl4 = getSystemLocale.intl;
  obj[3] = intl4.string(getSystemLocale.t.DmDzZB);
  obj[4] = onConfirm;
  obj[5] = onCancel;
  return obj.show(obj);
};