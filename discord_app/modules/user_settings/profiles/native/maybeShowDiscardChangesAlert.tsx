const result = require("set").fileFinishedImporting("modules/user_settings/profiles/native/maybeShowDiscardChangesAlert.tsx");

export default function maybeShowDiscardChangesAlert(onHasEdits) {
  let onConfirm;
  let require;
  ({ resetPending: require, onConfirm } = onHasEdits);
  onHasEdits = onHasEdits.onHasEdits;
  if (onHasEdits.hasEdits) {
    if (onHasEdits != null) {
      onHasEdits();
    }
    let obj = onConfirm(4595);
    obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl.string(require(1236) /* getSystemLocale */.t.pvRCSu);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.DRi46S);
    const intl3 = require(1236) /* getSystemLocale */.intl;
    obj[2] = intl3.string(require(1236) /* getSystemLocale */.t["6GQDFu"]);
    const intl4 = require(1236) /* getSystemLocale */.intl;
    obj[3] = intl4.string(require(1236) /* getSystemLocale */.t.DmDzZB);
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
  let onCancel;
  let onConfirm;
  ({ onConfirm, onCancel } = arg0);
  let obj = importDefault(4595);
  obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.pvRCSu);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.DRi46S);
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl3.string(require(1236) /* getSystemLocale */.t["6GQDFu"]);
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl4.string(require(1236) /* getSystemLocale */.t.DmDzZB);
  obj[4] = onConfirm;
  obj[5] = onCancel;
  return obj.show(obj);
};