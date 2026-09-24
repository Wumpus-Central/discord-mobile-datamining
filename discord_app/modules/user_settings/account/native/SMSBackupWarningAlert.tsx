// === Module 7410: SMSBackupWarningAlert ===

// Module 7410 (SMSBackupWarningAlert)
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5196 */;
import common_AlertDefault from "common/Alert" /* 5292 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4829);
let closure_5 = createStyles.createStyles({ title: { textAlign: "center" }, body: { marginTop: 8, textAlign: "center", lineHeight: 18 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/SMSBackupWarningAlert.tsx");

export default function SMSBackupWarningAlert(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  const tmp = closure_5();
  const obj = { cancelText: null, confirmText: null, onConfirm: null, onCancel: null, children: null };
  const intl = onConfirm(1115).intl;
  obj.cancelText = intl.string(onConfirm(1115).t["ETE/oC"]);
  const intl2 = onConfirm(1115).intl;
  obj.confirmText = intl2.string(onConfirm(1115).t.N86XcP);
  obj.onConfirm = function onConfirm() {
    onConfirm();
    actions_AlertActionCreatorsDefault.close();
  };
  obj.onCancel = function onCancel() {
    return actions_AlertActionCreatorsDefault.close();
  };
  const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl3 = onConfirm(1115).intl;
  obj2.children = intl3.string(onConfirm(1115).t.Ed4XQB);
  const items = [closure_3(onConfirm(4825).Text, obj2), ];
  const obj3 = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: null };
  const intl4 = onConfirm(1115).intl;
  obj3.children = intl4.string(onConfirm(1115).t.EDU2Eg);
  items[1] = closure_3(onConfirm(4825).Text, obj3);
  obj.children = items;
  return closure_4(common_AlertDefault, obj);
};