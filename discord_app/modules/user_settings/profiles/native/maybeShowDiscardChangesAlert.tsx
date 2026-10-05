// === Module 10659: maybeShowDiscardChangesAlert ===

// Module 10659 (maybeShowDiscardChangesAlert)
import intl5 from "intl" /* 1126 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/user_settings/profiles/native/maybeShowDiscardChangesAlert.tsx");

export default function maybeShowDiscardChangesAlert(onHasEdits) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let onConfirm;
  let showResult;
  ({ resetPending: require, onConfirm } = onHasEdits);
  onHasEdits = onHasEdits.onHasEdits;
  if (onHasEdits.hasEdits) {
    if (onHasEdits != null) {
      onHasEdits();
    }
    let obj = {
      title: intl.string(intl5.t.pvRCSu),
      body: intl2.string(intl5.t.DRi46S),
      confirmText: intl3.string(intl5.t["6GQDFu"]),
      cancelText: intl4.string(intl5.t.DmDzZB),
      onConfirm() {
          require();
          onConfirm();
        },
      onCancel() {
          const obj = onConfirm(dependencyMap[0]);
          obj.close();
        },
      isDismissable: false
    };
    const show = onConfirm(5708).show;
    onConfirm(5708);
    intl = intl5.intl;
    intl2 = intl5.intl;
    intl3 = intl5.intl;
    intl4 = intl5.intl;
    showResult = show(obj);
  } else {
    showResult = onConfirm();
  }
  return showResult;
};
export const showDiscardChangesAlert = function showDiscardChangesAlert(arg0) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let onCancel;
  let onConfirm;
  ({ onConfirm, onCancel } = arg0);
  const obj = { title: intl.string(intl5.t.pvRCSu), body: intl2.string(intl5.t.DRi46S), confirmText: intl3.string(intl5.t["6GQDFu"]), cancelText: intl4.string(intl5.t.DmDzZB), onConfirm, onCancel, isDismissable: false };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl5.intl;
  intl2 = intl5.intl;
  intl3 = intl5.intl;
  intl4 = intl5.intl;
  return show(obj);
};