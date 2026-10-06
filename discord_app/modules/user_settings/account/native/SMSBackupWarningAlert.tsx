// === Module 6581: SMSBackupWarningAlert ===

// Module 6581 (SMSBackupWarningAlert)
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5715 */;
import AlertDefault from "Alert" /* 5790 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onConfirm;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ title: { textAlign: "center" }, body: { marginTop: 8, textAlign: "center", lineHeight: 18 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((onConfirm) => {
  let items;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp16;
  let tmp18;
  let tmp5;
  let tmp6;
  let tmp7;
  let obj = onConfirm(576);
  const cResult = obj.c(15);
  onConfirm = onConfirm.onConfirm;
  const tmp4 = closure_5();
  if (cResult[0] !== onConfirm) {
    const fn = function c() {
      onConfirm();
      const obj = actions_AlertActionCreatorsDefault;
      obj.close();
    };
    cResult[0] = onConfirm;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(onConfirm(1126).t["ETE/oC"]);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(onConfirm(1126).t.N86XcP);
    cResult[2] = stringResult;
    cResult[3] = stringResult1;
    tmp7 = stringResult1;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function h() {
      const obj = actions_AlertActionCreatorsDefault;
      return obj.close();
    };
    cResult[4] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
  }
  const title = tmp4.title;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(onConfirm(1126).t.Ed4XQB);
    cResult[5] = stringResult2;
    tmp11 = stringResult2;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] !== tmp4.title) {
    const obj2 = { style: title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: tmp11 };
    const tmp15 = closure_3(onConfirm(4892).Text, obj2);
    cResult[6] = tmp4.title;
    cResult[7] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[7];
  }
  const body = tmp4.body;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = tmp(1126).intl;
    const stringResult3 = intl4.string(onConfirm(1126).t.EDU2Eg);
    cResult[8] = stringResult3;
    tmp16 = stringResult3;
  } else {
    tmp16 = cResult[8];
  }
  if (cResult[9] !== tmp4.body) {
    const obj3 = { style: body, variant: "text-sm/medium", color: "text-default", children: tmp16 };
    const tmp20 = closure_3(onConfirm(4892).Text, obj3);
    cResult[9] = tmp4.body;
    cResult[10] = tmp20;
    tmp18 = tmp20;
  } else {
    tmp18 = cResult[10];
  }
  if (cResult[11] === tmp5) {
    if (cResult[12] === tmp18) {
      let tmp21;
      if (cResult[13] === tmp13) {
        tmp21 = cResult[14];
      }
      return tmp21;
    }
  }
  const obj4 = { cancelText: tmp6, confirmText: tmp7, onConfirm: tmp5, onCancel: tmp10, children: items };
  items = [tmp13, tmp18];
  const tmp22 = closure_4(AlertDefault, obj4);
  cResult[11] = tmp5;
  cResult[12] = tmp18;
  cResult[13] = tmp13;
  cResult[14] = tmp22;
  tmp21 = tmp22;
}) : ((onConfirm) => {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  onConfirm = onConfirm.onConfirm;
  const tmp = closure_5();
  let obj = {
    cancelText: intl.string(onConfirm(1126).t["ETE/oC"]),
    confirmText: intl2.string(onConfirm(1126).t.N86XcP),
    onConfirm() {
      onConfirm();
      const obj = actions_AlertActionCreatorsDefault;
      obj.close();
    },
    onCancel() {
      const obj = actions_AlertActionCreatorsDefault;
      return obj.close();
    },
    children: items
  };
  const tmp2 = AlertDefault;
  intl = onConfirm(1126).intl;
  intl2 = onConfirm(1126).intl;
  const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl3.string(onConfirm(1126).t.Ed4XQB) };
  const Text = onConfirm(4892).Text;
  intl3 = onConfirm(1126).intl;
  items = [closure_3(Text, obj2), ];
  const obj3 = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: intl4.string(onConfirm(1126).t.EDU2Eg) };
  const Text2 = onConfirm(4892).Text;
  intl4 = onConfirm(1126).intl;
  items[1] = closure_3(Text2, obj3);
  return closure_4(tmp2, obj);
});
const result = size.fileFinishedImporting("modules/user_settings/account/native/SMSBackupWarningAlert.tsx");

export default tmp4;