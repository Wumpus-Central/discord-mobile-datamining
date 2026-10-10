// === Module 17889: HideSelfStreamAndVideoConfirmDialog ===

// Module 17889 (HideSelfStreamAndVideoConfirmDialog)
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 5260 */;
import common_AlertDefault from "common/Alert" /* 5398 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = ["type", "onConfirm"];
const View = fn(17).View;
const constants = fn(17888).SelfStreamAndVideoAlertType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let closure_9 = createStyles.createStyles({ wrapper: { padding: 16 }, body: { paddingTop: 16 }, description: { lineHeight: 18 }, ctaLink: { paddingTop: 8, textAlign: "center", textDecorationLine: "underline" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/HideSelfStreamAndVideoConfirmDialog.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function HideSelfStreamAndVideoConfirmDialog(arg0) {
  const cResult = require("c").c(33);
  if (cResult[0] !== arg0) {
    ({ type, onConfirm } = arg0);
    _require = onConfirm;
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = tmp9;
    cResult[2] = onConfirm;
    cResult[3] = type;
    let tmp6 = type;
    let tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    tmp6 = cResult[3];
  }
  const tmp10 = closure_9();
  if (cResult[4] !== onConfirm) {
    function handleDontAskAgain() {
      const result = UserSettingsActionCreatorsDefault.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: true });
      closure_0();
    }
    cResult[4] = onConfirm;
    cResult[5] = handleDontAskAgain;
    let tmp11 = handleDontAskAgain;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] !== tmp6) {
    if (tmp6 === constants.STREAM) {
      const intl2 = tmp(1126).intl;
      let stringResult = intl2.string(tmp(1126).t["/lFMWr"]);
    } else {
      const intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t.xzxhZS);
    }
    cResult[6] = tmp6;
    cResult[7] = stringResult;
  } else if (cResult[8] !== tmp6) {
    if (tmp6 === constants.STREAM) {
      const intl4 = tmp(1126).intl;
      let stringResult1 = intl4.string(tmp(1126).t.xaOX7d);
    } else {
      const intl3 = tmp(1126).intl;
      stringResult1 = intl3.string(tmp(1126).t.oU1p9O);
    }
    cResult[8] = tmp6;
    cResult[9] = stringResult1;
  } else {
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const intl5 = tmp(1126).intl;
      const stringResult2 = intl5.string(tmp(1126).t["ETE/oC"]);
      cResult[10] = stringResult2;
      let tmp21 = stringResult2;
    } else {
      tmp21 = cResult[10];
    }
    if (tmp4 != null) {
      const onClose = tmp4.onClose;
    }
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const intl6 = tmp(1126).intl;
      const stringResult3 = intl6.string(tmp(1126).t["cY+Oob"]);
      cResult[11] = stringResult3;
      let tmp24 = stringResult3;
    } else {
      tmp24 = cResult[11];
    }
    if (cResult[12] === cResult[9]) {
      if (cResult[13] === tmp10.description) {
        let tmp27 = cResult[14];
      }
      if (cResult[15] === tmp10.ctaLink) {
        if (cResult[16] === tmp10.description) {
          let tmp30 = cResult[17];
        }
        const _Symbol3 = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          const intl7 = tmp(1126).intl;
          const stringResult4 = intl7.string(tmp(1126).t["JdIQ/Y"]);
          cResult[18] = stringResult4;
          let tmp31 = stringResult4;
        } else {
          tmp31 = cResult[18];
        }
        if (cResult[19] === tmp11) {
          if (cResult[20] === tmp30) {
            let tmp33 = cResult[21];
          }
          if (cResult[22] === tmp10.body) {
            if (cResult[23] === tmp33) {
              if (cResult[24] === tmp27) {
                let tmp36 = cResult[25];
              }
              if (cResult[26] === tmp4) {
                if (cResult[27] === onConfirm) {
                  if (cResult[28] === tmp10.wrapper) {
                    if (cResult[29] === tmp36) {
                      if (cResult[30] === onClose) {
                        if (cResult[31] === tmp12) {
                          let tmp40 = cResult[32];
                        }
                        return tmp40;
                      }
                    }
                  }
                }
              }
              const obj2 = {};
              const merged = Object.assign(tmp4);
              obj2.title = tmp12;
              obj2.style = tmp10.wrapper;
              obj2.cancelText = tmp21;
              obj2.onCancel = onClose;
              obj2.confirmText = tmp24;
              obj2.onConfirm = onConfirm;
              obj2.children = tmp36;
              const tmp47 = closure_7(common_AlertDefault, obj2);
              cResult[26] = tmp4;
              cResult[27] = onConfirm;
              cResult[28] = tmp10.wrapper;
              cResult[29] = tmp36;
              cResult[30] = onClose;
              cResult[31] = tmp12;
              cResult[32] = tmp47;
              tmp40 = tmp47;
            }
          }
          const obj3 = { style: tmp26, children: null };
          const items = [tmp27, tmp33];
          obj3.children = items;
          const tmp39 = closure_8(View, obj3);
          cResult[22] = tmp10.body;
          cResult[23] = tmp33;
          cResult[24] = tmp27;
          cResult[25] = tmp39;
          tmp36 = tmp39;
        }
        const obj4 = { accessibilityRole: "link", style: tmp30, onPress: tmp11, variant: "text-sm/medium", children: tmp31 };
        const tmp35 = closure_7(tmp(5088).Text, obj4);
        cResult[19] = tmp11;
        cResult[20] = tmp30;
        cResult[21] = tmp35;
        tmp33 = tmp35;
      }
      const items1 = [, ];
      ({ ctaLink: arr[0], description: arr[1] } = tmp10);
      cResult[15] = tmp10.ctaLink;
      cResult[16] = tmp10.description;
      cResult[17] = items1;
      tmp30 = items1;
    }
    const obj5 = { style: tmp10.description, variant: "text-sm/medium", children: cResult[9] };
    const tmp29 = closure_7(tmp(5088).Text, obj5);
    cResult[12] = cResult[9];
    cResult[13] = tmp10.description;
    cResult[14] = tmp29;
    tmp27 = tmp29;
  }
  const obj = require("c");
}) : (function HideSelfStreamAndVideoConfirmDialog(arg0) {
  ({ type, onConfirm } = arg0);
  const merged = Object.assign(arg0, Object.assign({ type: 0, onConfirm: 0 }));
  const tmp2 = closure_9();
  if (type === constants.STREAM) {
    const intl2 = onConfirm(1126).intl;
    let stringResult = intl2.string(onConfirm(1126).t["/lFMWr"]);
    let tmp6 = onConfirm;
  } else {
    const intl = onConfirm(1126).intl;
    tmp6 = onConfirm;
    stringResult = intl.string(onConfirm(1126).t.xzxhZS);
  }
  if (type === constants.STREAM) {
    const intl4 = tmp6(1126).intl;
    let stringResult1 = intl4.string(tmp6(1126).t.xaOX7d);
  } else {
    const intl3 = tmp6(1126).intl;
    stringResult1 = intl3.string(tmp6(1126).t.oU1p9O);
  }
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.title = stringResult;
  obj.style = tmp2.wrapper;
  const intl5 = tmp6(1126).intl;
  obj.cancelText = intl5.string(tmp6(1126).t["ETE/oC"]);
  let onClose;
  if (merged != null) {
    onClose = merged.onClose;
  }
  obj.onCancel = onClose;
  const intl6 = tmp6(1126).intl;
  obj.confirmText = intl6.string(tmp6(1126).t["cY+Oob"]);
  obj.onConfirm = onConfirm;
  const obj2 = { style: tmp2.body, children: null };
  const items = [closure_7(tmp6(5088).Text, { style: tmp2.description, variant: "text-sm/medium", children: stringResult1 }), ];
  const obj4 = {
    accessibilityRole: "link",
    style: null,
    onPress: function handleDontAskAgain() {
      const result = UserSettingsActionCreatorsDefault.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: true });
      onConfirm();
    },
    variant: "text-sm/medium",
    children: null
  };
  const items1 = [, ];
  ({ ctaLink: arr2[0], description: arr2[1] } = tmp2);
  obj4.style = items1;
  const intl7 = tmp6(1126).intl;
  obj4.children = intl7.string(tmp6(1126).t["JdIQ/Y"]);
  items[1] = closure_7(tmp6(5088).Text, obj4);
  obj2.children = items;
  obj.children = closure_8(View, obj2);
  return closure_7(common_AlertDefault, obj);
});