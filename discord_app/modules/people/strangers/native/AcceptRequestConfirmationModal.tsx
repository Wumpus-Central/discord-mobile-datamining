// === Module 10204: AcceptRequestConfirmationModal ===

// Module 10204 (AcceptRequestConfirmationModal)
import nativeDefault from "native" /* 587 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5298 */;
import common_AlertDefault from "common/Alert" /* 5395 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5091);
let obj2 = { bodyText: { textAlign: "center", alignItems: "center", gap: nativeDefault.space.PX_8 }, text: { textAlign: "center" } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { textAlign: "center", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/people/strangers/native/AcceptRequestConfirmationModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AcceptRequestConfirmationModal(arg0) {
  const cResult = onConfirm(576).c(18);
  ({ onCancel, onConfirm } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = onConfirm(1126).intl;
    const stringResult = intl.string(onConfirm(1126).t.MMlhsr);
    const intl2 = onConfirm(1126).intl;
    const stringResult1 = intl2.string(onConfirm(1126).t["ETE/oC"]);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp5 = stringResult;
    tmp6 = stringResult1;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] !== onConfirm) {
    const fn = function f() {
      onConfirm();
      AlertActionCreatorsDefault.close();
    };
    cResult[2] = onConfirm;
    cResult[3] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[3];
  }
  ({ bodyText, text } = tmp4);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = onConfirm(1126).intl;
    const stringResult2 = intl3.string(onConfirm(1126).t.eJzSDT);
    cResult[4] = stringResult2;
    let tmp10 = stringResult2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== tmp4.text) {
    const obj2 = { variant: "heading-lg/bold", color: "text-strong", style: text, children: tmp10 };
    const tmp14 = closure_4(onConfirm(5087).Text, obj2);
    cResult[5] = tmp4.text;
    cResult[6] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = onConfirm(1126).intl;
    const stringResult3 = intl4.string(onConfirm(1126).t.GB4jUw);
    cResult[7] = stringResult3;
    let tmp15 = stringResult3;
  } else {
    tmp15 = cResult[7];
  }
  if (cResult[8] !== tmp4.text) {
    const obj3 = { variant: "text-md/medium", color: "text-subtle", style: tmp4.text, children: tmp15 };
    const tmp19 = closure_4(onConfirm(5087).Text, obj3);
    cResult[8] = tmp4.text;
    cResult[9] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[9];
  }
  if (cResult[10] === tmp4.bodyText) {
    if (cResult[11] === tmp17) {
      if (cResult[12] === tmp12) {
        let tmp20 = cResult[13];
      }
      if (cResult[14] === onCancel) {
        if (cResult[15] === tmp20) {
          if (cResult[16] === tmp9) {
            let tmp22 = cResult[17];
          }
          return tmp22;
        }
      }
      const obj4 = { confirmText: tmp5, cancelText: tmp6, onConfirm: tmp9, onCancel, children: tmp20 };
      const tmp25 = closure_4(common_AlertDefault, obj4);
      cResult[14] = onCancel;
      cResult[15] = tmp20;
      cResult[16] = tmp9;
      cResult[17] = tmp25;
      tmp22 = tmp25;
    }
  }
  const obj5 = { style: bodyText, children: null };
  const items = [tmp12, tmp17];
  obj5.children = items;
  const tmp21 = closure_5(View, obj5);
  cResult[10] = tmp4.bodyText;
  cResult[11] = tmp17;
  cResult[12] = tmp12;
  cResult[13] = tmp21;
  tmp20 = tmp21;
  const obj = onConfirm(576);
}) : (function AcceptRequestConfirmationModal(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  const tmp = closure_6();
  const obj = { confirmText: null, cancelText: null, onConfirm: null, onCancel: null, children: null };
  const intl = onConfirm(1126).intl;
  obj.confirmText = intl.string(onConfirm(1126).t.MMlhsr);
  const intl2 = onConfirm(1126).intl;
  obj.cancelText = intl2.string(onConfirm(1126).t["ETE/oC"]);
  obj.onConfirm = function onConfirm() {
    onConfirm();
    AlertActionCreatorsDefault.close();
  };
  obj.onCancel = onConfirm.onCancel;
  const obj2 = { style: tmp.bodyText, children: null };
  const obj3 = { variant: "heading-lg/bold", color: "text-strong", style: tmp.text, children: null };
  const intl3 = onConfirm(1126).intl;
  obj3.children = intl3.string(onConfirm(1126).t.eJzSDT);
  const items = [closure_4(onConfirm(5087).Text, obj3), ];
  const obj4 = { variant: "text-md/medium", color: "text-subtle", style: tmp.text, children: null };
  const intl4 = onConfirm(1126).intl;
  obj4.children = intl4.string(onConfirm(1126).t.GB4jUw);
  items[1] = closure_4(onConfirm(5087).Text, obj4);
  obj2.children = items;
  obj.children = closure_5(View, obj2);
  return closure_4(common_AlertDefault, obj);
});