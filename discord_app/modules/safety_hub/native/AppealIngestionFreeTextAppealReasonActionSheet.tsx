// === Module 11514: AppealIngestionFreeTextAppealReasonActionSheet ===

// Module 11514 (AppealIngestionFreeTextAppealReasonActionSheet)
import nativeDefault from "native" /* 587 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8106 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { footerText: { textAlign: "center" }, textArea: { marginTop: -16, marginBottom: 36 }, separator: { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: -16 }, closeIcon: { alignSelf: "flex-end", flexDirection: "row", marginBottom: -26 } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: -16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionFreeTextAppealReasonActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onSave) => {
  const cResult = onSave(value[8]).c(33);
  onSave = onSave.onSave;
  const onClose = onSave.onClose;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SafetyHubStore];
    const fn = function h() {
      return freeTextAppealReason.getFreeTextAppealReason();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj = onSave(value[8]);
  const stateFromStores = onSave(value[9]).useStateFromStores(tmp5, tmp6);
  let num3 = 2;
  const tmpResult = onSave(value[9]);
  value = _slicedToArray(noop.useState(stateFromStores), 2)[0];
  if (cResult[2] !== stateFromStores) {
    if ("" === stateFromStores) {
      const intl2 = tmp(tmp2[10]).intl;
      let stringResult = intl2.string(tmp(tmp2[10]).t.uoQFIp);
    } else {
      const intl = tmp(tmp2[10]).intl;
      stringResult = intl.string(tmp(tmp2[10]).t.tnE3bZ);
    }
    cResult[num3] = stateFromStores;
    num3 = 3;
    cResult[3] = stringResult;
  } else {
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(tmp2[10]).intl;
      const stringResult1 = intl3.string(tmp(tmp2[10]).t["Rk+uJx"]);
      cResult[4] = stringResult1;
      let tmp15 = stringResult1;
    } else {
      tmp15 = cResult[4];
    }
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp19 = closure_6(tmp(tmp2[11]).XSmallIcon, { size: "md" });
      cResult[5] = tmp19;
      let tmp17 = tmp19;
    } else {
      tmp17 = cResult[5];
    }
    if (cResult[6] === onClose) {
      if (cResult[7] === tmp4.closeIcon) {
        let tmp20 = cResult[8];
      }
      if (cResult[9] !== tmp12) {
        const obj2 = { headerText: tmp12, subHeaderText: tmp15 };
        const tmp24 = closure_6(tmp(tmp2[13]).AppealIngestionModalHeader, obj2);
        cResult[9] = tmp12;
        cResult[10] = tmp24;
        let tmp22 = tmp24;
      } else {
        tmp22 = cResult[10];
      }
      const _Symbol3 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = tmp(tmp2[10]).intl;
        const stringResult2 = intl4.string(tmp(tmp2[10]).t.bQrZIN);
        cResult[11] = stringResult2;
      }
      if (cResult[12] === tmp4.textArea) {
        if (cResult[13] === value) {
          let tmp27 = cResult[14];
        }
        if (cResult[15] !== tmp4.separator) {
          const obj3 = { style: tmp4.separator };
          cResult[15] = tmp4.separator;
          class Z {
            constructor() {
              return onSave(closure_1);
            }
          }
          let tmp30 = closure_6(View, obj3);
          const tmp33 = closure_6(View, obj3);
        } else {
          tmp30 = cResult[16];
        }
        const _Symbol4 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const intl5 = tmp(tmp2[10]).intl;
          const stringResult3 = intl5.string(tmp(tmp2[10]).t.xfNY3L);
          cResult[17] = stringResult3;
          let tmp34 = stringResult3;
        } else {
          tmp34 = cResult[17];
        }
        if (cResult[18] !== tmp4.footerText) {
          const obj4 = { variant: "text-xs/medium", color: "text-default", style: tmp4.footerText, children: tmp34 };
          cResult[18] = tmp4.footerText;
          class Z {
            constructor() {
              return onSave(closure_1);
            }
          }
          let tmp36 = closure_6(tmp(tmp2[15]).Text, obj4);
          const tmp38 = closure_6(tmp(tmp2[15]).Text, obj4);
        } else {
          tmp36 = cResult[19];
        }
        if (cResult[20] === onSave) {
          if (cResult[21] === value) {
            let tmp39 = cResult[22];
          }
          const _Symbol5 = Symbol;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            const intl6 = tmp(tmp2[10]).intl;
            const stringResult4 = intl6.string(tmp(tmp2[10]).t["R3BPH+"]);
            cResult[23] = stringResult4;
            let tmp40 = stringResult4;
          } else {
            tmp40 = cResult[23];
          }
          if (cResult[24] !== tmp39) {
            const obj5 = { onPress: tmp39, text: tmp40 };
            cResult[24] = tmp39;
            class Z {
              constructor() {
                return onSave(closure_1);
              }
            }
            let tmp42 = closure_6(tmp(tmp2[16]).Button, obj5);
            const tmp44 = closure_6(tmp(tmp2[16]).Button, obj5);
          } else {
            tmp42 = cResult[25];
          }
          if (cResult[26] === tmp30) {
            if (cResult[27] === tmp36) {
              if (cResult[28] === tmp42) {
                if (cResult[29] === tmp20) {
                  if (cResult[30] === tmp22) {
                    if (cResult[31] === tmp27) {
                      let tmp45 = cResult[32];
                    }
                    return tmp45;
                  }
                }
              }
            }
          }
          const obj6 = { startExpanded: true, children: null };
          class Z {
            constructor() {
              return onSave(closure_1);
            }
          }
          const obj7 = { spacing: 16, children: null };
          const items1 = [tmp20, tmp22, tmp27, tmp30, tmp36, tmp42];
          obj7.children = items1;
          obj6.children = closure_7(tmp(tmp2[18]).Stack, obj7);
          const tmp47 = closure_6(tmp(tmp2[17]).BottomSheet, obj6);
          cResult[26] = tmp30;
          cResult[27] = tmp36;
          cResult[28] = tmp42;
          cResult[29] = tmp20;
          cResult[30] = tmp22;
          cResult[31] = tmp27;
          cResult[32] = tmp47;
          tmp45 = tmp47;
        }
        class Z {
          constructor() {
            return onSave(closure_1);
          }
        }
        cResult[20] = onSave;
        cResult[21] = value;
        cResult[22] = Z;
        tmp39 = Z;
      }
      const obj8 = { maxLength: 1024, placeholder: null, containerStyle: tmp4.textArea, value, onChange: tmp11 };
      const tmp29 = closure_6(tmp(tmp2[14]).TextArea, obj8);
      cResult[12] = tmp4.textArea;
      cResult[13] = value;
      cResult[14] = tmp29;
      tmp27 = tmp29;
    }
    const obj9 = { onPress: onClose, style: tmp4.closeIcon, children: tmp17 };
    const tmp21 = closure_6(tmp(tmp2[12]).PressableOpacity, obj9);
    cResult[6] = onClose;
    cResult[7] = tmp4.closeIcon;
    cResult[8] = tmp21;
    tmp20 = tmp21;
  }
  const tmp9 = _slicedToArray(noop.useState(stateFromStores), 2);
}) : ((onPress) => {
  const onSave = onPress.onSave;
  value = undefined;
  const tmp = closure_8();
  const items = [SafetyHubStore];
  const stateFromStores = onSave(value[9]).useStateFromStores(items, () => freeTextAppealReason.getFreeTextAppealReason());
  [value, obj5.onChange] = noop.useState(stateFromStores);
  if ("" === stateFromStores) {
    const intl2 = tmp2(tmp3[10]).intl;
    let stringResult = intl2.string(tmp2(tmp3[10]).t.uoQFIp);
  } else {
    const intl = tmp2(tmp3[10]).intl;
    stringResult = intl.string(tmp2(tmp3[10]).t.tnE3bZ);
  }
  const intl3 = tmp2(tmp3[10]).intl;
  const obj = onSave(value[9]);
  const obj2 = { startExpanded: true, children: null };
  const obj3 = { spacing: 16, children: null };
  const stringResult1 = intl3.string(onSave(value[10]).t["Rk+uJx"]);
  const items1 = [closure_6(onSave(value[12]).PressableOpacity, { onPress: onPress.onClose, style: tmp.closeIcon, children: closure_6(onSave(value[11]).XSmallIcon, { size: "md" }) }), closure_6(onSave(value[13]).AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: stringResult1 }), , , , ];
  const obj5 = { maxLength: 1024, placeholder: null, containerStyle: null, value: null, onChange: null };
  const intl4 = tmp2(tmp3[10]).intl;
  obj5.placeholder = intl4.string(onSave(value[10]).t.bQrZIN);
  obj5.containerStyle = tmp.textArea;
  obj5.value = value;
  items1[2] = closure_6(onSave(value[14]).TextArea, obj5);
  items1[3] = closure_6(View, { style: tmp.separator });
  const obj7 = { variant: "text-xs/medium", color: "text-default", style: tmp.footerText, children: null };
  const intl5 = tmp2(tmp3[10]).intl;
  obj7.children = intl5.string(onSave(value[10]).t.xfNY3L);
  items1[4] = closure_6(onSave(value[15]).Text, obj7);
  const obj8 = {
    onPress() {
      return onSave(first);
    },
    text: null
  };
  const intl6 = tmp2(tmp3[10]).intl;
  obj8.text = intl6.string(onSave(value[10]).t["R3BPH+"]);
  items1[5] = closure_6(onSave(value[16]).Button, obj8);
  obj3.children = items1;
  obj2.children = closure_7(onSave(value[18]).Stack, obj3);
  return closure_6(onSave(value[17]).BottomSheet, obj2);
});