// === Module 10840: IgnoreThermalStateAlert ===

// Module 10840 (IgnoreThermalStateAlert)
import common_AlertDefault from "common/Alert" /* 5395 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 10778 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["onConfirm"];
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let closure_7 = createStyles.createStyles({ text: { marginTop: 16, lineHeight: 20, textAlign: "center" }, header: { textAlign: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/native/IgnoreThermalStateAlert.tsx");

export const IgnoreThermalStateAlert = ReactCompilerGating.isReactCompilerEnabled() ? (function IgnoreThermalStateAlert(onConfirm) {
  const cResult = require("c").c(18);
  if (cResult[0] !== onConfirm) {
    onConfirm = onConfirm.onConfirm;
    _require = onConfirm;
    const tmp8 = _objectWithoutProperties(onConfirm, closure_3);
    cResult[0] = onConfirm;
    cResult[1] = onConfirm;
    cResult[2] = tmp8;
    let tmp5 = tmp8;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = closure_7();
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["1fRDnT"]);
    cResult[3] = stringResult;
    let tmp10 = stringResult;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== tmp4) {
    const fn = function v() {
      if (closure_0 != null) {
        tmp();
      }
      const result = EmbeddedActivitiesActionCreators.disregardSeriousThermalState();
    };
    cResult[4] = tmp4;
    cResult[5] = fn;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.oEAioF);
    cResult[6] = stringResult1;
    let tmp13 = stringResult1;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(tmp(1126).t.v5X4fZ);
    cResult[7] = stringResult2;
    let tmp15 = stringResult2;
  } else {
    tmp15 = cResult[7];
  }
  if (cResult[8] !== tmp9.header) {
    const obj2 = { style: tmp9.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: tmp15 };
    const tmp19 = closure_5(tmp(5087).Text, obj2);
    cResult[8] = tmp9.header;
    cResult[9] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = tmp(1126).intl;
    const stringResult3 = intl4.string(tmp(1126).t.VOgTjy);
    cResult[10] = stringResult3;
    let tmp20 = stringResult3;
  } else {
    tmp20 = cResult[10];
  }
  if (cResult[11] !== tmp9.text) {
    const obj3 = { style: tmp9.text, variant: "text-md/medium", children: tmp20 };
    const tmp24 = closure_5(tmp(5087).Text, obj3);
    cResult[11] = tmp9.text;
    cResult[12] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[12];
  }
  if (cResult[13] === tmp5) {
    if (cResult[14] === tmp12) {
      if (cResult[15] === tmp17) {
        if (cResult[16] === tmp22) {
          let tmp25 = cResult[17];
        }
        return tmp25;
      }
    }
  }
  const obj4 = {};
  const obj = require("c");
  const merged = Object.assign(tmp5);
  obj4.cancelText = tmp10;
  obj4.onCancel = tmp12;
  obj4.confirmText = tmp13;
  const items = [tmp17, tmp22];
  obj4.children = items;
  const tmp28 = closure_6(common_AlertDefault, obj4);
  cResult[13] = tmp5;
  cResult[14] = tmp12;
  cResult[15] = tmp17;
  cResult[16] = tmp22;
  cResult[17] = tmp28;
  tmp25 = tmp28;
}) : (function IgnoreThermalStateAlert(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  const merged = Object.assign(onConfirm, Object.assign({ onConfirm: 0 }));
  const tmp2 = closure_7();
  const obj = {};
  const merged1 = Object.assign(merged);
  const intl = onConfirm(1126).intl;
  obj.cancelText = intl.string(onConfirm(1126).t["1fRDnT"]);
  obj.onCancel = function onCancel() {
    if (onConfirm != null) {
      tmp();
    }
    const result = EmbeddedActivitiesActionCreators.disregardSeriousThermalState();
  };
  const intl2 = onConfirm(1126).intl;
  obj.confirmText = intl2.string(onConfirm(1126).t.oEAioF);
  const obj2 = { style: tmp2.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl3 = onConfirm(1126).intl;
  obj2.children = intl3.string(onConfirm(1126).t.v5X4fZ);
  const items = [closure_5(onConfirm(5087).Text, obj2), ];
  const obj3 = { style: tmp2.text, variant: "text-md/medium", children: null };
  const intl4 = onConfirm(1126).intl;
  obj3.children = intl4.string(onConfirm(1126).t.VOgTjy);
  items[1] = closure_5(onConfirm(5087).Text, obj3);
  obj.children = items;
  return closure_6(common_AlertDefault, obj);
});