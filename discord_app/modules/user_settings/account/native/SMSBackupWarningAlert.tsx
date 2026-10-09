// === Module 6764: SMSBackupWarningAlert ===

// Module 6764 (SMSBackupWarningAlert)
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5299 */;
import common_AlertDefault from "common/Alert" /* 5395 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5091);
let closure_5 = createStyles.createStyles({ title: { textAlign: "center" }, body: { marginTop: 8, textAlign: "center", lineHeight: 18 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/SMSBackupWarningAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SMSBackupWarningAlert(onConfirm) {
  const cResult = onConfirm(576).c(15);
  onConfirm = onConfirm.onConfirm;
  const tmp4 = closure_5();
  if (cResult[0] !== onConfirm) {
    function handleConfirm() {
      onConfirm();
      actions_AlertActionCreatorsDefault.close();
    }
    cResult[0] = onConfirm;
    cResult[1] = handleConfirm;
    let tmp5 = handleConfirm;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["ETE/oC"]);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.N86XcP);
    cResult[2] = stringResult;
    cResult[3] = stringResult1;
    let tmp7 = stringResult1;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function y() {
      return actions_AlertActionCreatorsDefault.close();
    };
    cResult[4] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(tmp(1126).t.Ed4XQB);
    cResult[5] = stringResult2;
    let tmp11 = stringResult2;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] !== tmp4.title) {
    const obj2 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: tmp11 };
    const tmp15 = closure_3(tmp(5087).Text, obj2);
    cResult[6] = tmp4.title;
    cResult[7] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = tmp(1126).intl;
    const stringResult3 = intl4.string(tmp(1126).t.EDU2Eg);
    cResult[8] = stringResult3;
    let tmp16 = stringResult3;
  } else {
    tmp16 = cResult[8];
  }
  if (cResult[9] !== tmp4.body) {
    const obj3 = { style: tmp4.body, variant: "text-sm/medium", color: "text-default", children: tmp16 };
    const tmp20 = closure_3(tmp(5087).Text, obj3);
    cResult[9] = tmp4.body;
    cResult[10] = tmp20;
    let tmp18 = tmp20;
  } else {
    tmp18 = cResult[10];
  }
  if (cResult[11] === tmp5) {
    if (cResult[12] === tmp18) {
      if (cResult[13] === tmp13) {
        let tmp21 = cResult[14];
      }
      return tmp21;
    }
  }
  const obj4 = { cancelText: tmp6, confirmText: tmp7, onConfirm: tmp5, onCancel: tmp10, children: null };
  const items = [tmp13, tmp18];
  obj4.children = items;
  const tmp22 = closure_4(common_AlertDefault, obj4);
  cResult[11] = tmp5;
  cResult[12] = tmp18;
  cResult[13] = tmp13;
  cResult[14] = tmp22;
  tmp21 = tmp22;
  const obj = onConfirm(576);
}) : (function SMSBackupWarningAlert(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  const tmp = closure_5();
  const obj = { cancelText: null, confirmText: null, onConfirm: null, onCancel: null, children: null };
  const intl = onConfirm(1126).intl;
  obj.cancelText = intl.string(onConfirm(1126).t["ETE/oC"]);
  const intl2 = onConfirm(1126).intl;
  obj.confirmText = intl2.string(onConfirm(1126).t.N86XcP);
  obj.onConfirm = function handleConfirm() {
    onConfirm();
    actions_AlertActionCreatorsDefault.close();
  };
  obj.onCancel = function onCancel() {
    return actions_AlertActionCreatorsDefault.close();
  };
  const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl3 = onConfirm(1126).intl;
  obj2.children = intl3.string(onConfirm(1126).t.Ed4XQB);
  const items = [closure_3(onConfirm(5087).Text, obj2), ];
  const obj3 = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: null };
  const intl4 = onConfirm(1126).intl;
  obj3.children = intl4.string(onConfirm(1126).t.EDU2Eg);
  items[1] = closure_3(onConfirm(5087).Text, obj3);
  obj.children = items;
  return closure_4(common_AlertDefault, obj);
});