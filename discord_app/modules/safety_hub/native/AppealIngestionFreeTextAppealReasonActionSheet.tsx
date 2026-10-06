// === Module 11527: AppealIngestionFreeTextAppealReasonActionSheet ===

// Module 11527 (AppealIngestionFreeTextAppealReasonActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8139 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, onSave;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { footerText: { textAlign: "center" }, textArea: { marginTop: -16, marginBottom: 36 }, separator: obj2, closeIcon: { alignSelf: "flex-end", flexDirection: "row", marginBottom: -26 } };
obj2 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: -16 };
let closure_8 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((onSave) => {
  let freeTextAppealReason;
  let items1;
  let obj7;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp5;
  let tmp6;
  let value;
  const obj = onSave(value[8]);
  const cResult = obj.c(33);
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
  const tmpResult = onSave(value[9]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  [value, tmp11] = react.useState(stateFromStores);
  if (cResult[2] !== stateFromStores) {
    let stringResult;
    if ("" === stateFromStores) {
      const intl2 = tmp(tmp2[10]).intl;
      stringResult = intl2.string(tmp(tmp2[10]).t.uoQFIp);
    } else {
      const intl = tmp(tmp2[10]).intl;
      stringResult = intl.string(tmp(tmp2[10]).t.tnE3bZ);
    }
    cResult[2] = stateFromStores;
    cResult[3] = stringResult;
    tmp12 = stringResult;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(tmp2[10]).intl;
    const stringResult1 = intl3.string(onSave(value[10]).t["Rk+uJx"]);
    cResult[4] = stringResult1;
    tmp14 = stringResult1;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp18 = closure_6(onSave(value[11]).XSmallIcon, { size: "md" });
    cResult[5] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[5];
  }
  if (cResult[6] === onClose) {
    let tmp19;
    let tmp21;
    if (cResult[7] === tmp4.closeIcon) {
      tmp19 = cResult[8];
    }
    if (cResult[9] !== tmp12) {
      const obj2 = { headerText: tmp12, subHeaderText: tmp14 };
      const tmp23 = closure_6(onSave(value[13]).AppealIngestionModalHeader, obj2);
      cResult[9] = tmp12;
      cResult[10] = tmp23;
      tmp21 = tmp23;
    } else {
      tmp21 = cResult[10];
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(tmp2[10]).intl;
      cResult[11] = intl4.string(onSave(value[10]).t.bQrZIN);
      const stringResult2 = intl4.string(onSave(value[10]).t.bQrZIN);
    }
    if (cResult[12] === tmp4.textArea) {
      let tmp26;
      let tmp29;
      let tmp33;
      let tmp35;
      if (cResult[13] === value) {
        tmp26 = cResult[14];
      }
      if (cResult[15] !== tmp4.separator) {
        const obj3 = { style: tmp4.separator };
        cResult[15] = tmp4.separator;
        const tmp32 = closure_6(View, obj3);
        class Z {
          constructor() {
            return onSave(first);
          }
        }
        tmp29 = tmp32;
      } else {
        tmp29 = cResult[16];
      }
      const _Symbol2 = Symbol;
      const footerText = tmp4.footerText;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = tmp(tmp2[10]).intl;
        const stringResult3 = intl5.string(onSave(value[10]).t.xfNY3L);
        cResult[17] = stringResult3;
        tmp33 = stringResult3;
      } else {
        tmp33 = cResult[17];
      }
      if (cResult[18] !== tmp4.footerText) {
        const obj4 = { variant: "text-xs/medium", color: "text-default", style: footerText, children: tmp33 };
        cResult[18] = tmp4.footerText;
        const tmp37 = closure_6(onSave(value[15]).Text, obj4);
        class Z {
          constructor() {
            return onSave(first);
          }
        }
        tmp35 = tmp37;
      } else {
        tmp35 = cResult[19];
      }
      if (cResult[20] === onSave) {
        let tmp38;
        let tmp39;
        let tmp41;
        if (cResult[21] === value) {
          tmp38 = cResult[22];
        }
        const _Symbol3 = Symbol;
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          const intl6 = tmp(tmp2[10]).intl;
          const stringResult4 = intl6.string(onSave(value[10]).t["R3BPH+"]);
          cResult[23] = stringResult4;
          tmp39 = stringResult4;
        } else {
          tmp39 = cResult[23];
        }
        if (cResult[24] !== tmp38) {
          const obj5 = { onPress: tmp38, text: tmp39 };
          cResult[24] = tmp38;
          const tmp43 = closure_6(onSave(value[16]).Button, obj5);
          class Z {
            constructor() {
              return onSave(first);
            }
          }
          tmp41 = tmp43;
        } else {
          tmp41 = cResult[25];
        }
        if (cResult[26] === tmp29) {
          if (cResult[27] === tmp35) {
            if (cResult[28] === tmp41) {
              if (cResult[29] === tmp19) {
                if (cResult[30] === tmp21) {
                  let tmp44;
                  if (cResult[31] === tmp26) {
                    tmp44 = cResult[32];
                  }
                  return tmp44;
                }
              }
            }
          }
        }
        const obj6 = { startExpanded: true, children: closure_7(onSave(value[18]).Stack, obj7) };
        class Z {
          constructor() {
            return onSave(first);
          }
        }
        BottomSheet = tmp(tmp2[17]).BottomSheet;
        obj7 = { spacing: 16, children: items1 };
        items1 = [tmp19, tmp21, tmp26, tmp29, tmp35, tmp41];
        const tmp46 = closure_6(BottomSheet, obj6);
        cResult[26] = tmp29;
        cResult[27] = tmp35;
        cResult[28] = tmp41;
        cResult[29] = tmp19;
        cResult[30] = tmp21;
        cResult[31] = tmp26;
        cResult[32] = tmp46;
        tmp44 = tmp46;
      }
      class Z {
        constructor() {
          return onSave(first);
        }
      }
      cResult[20] = onSave;
      cResult[21] = value;
      cResult[22] = Z;
      tmp38 = Z;
    }
    const obj8 = { maxLength: 1024, placeholder: null, containerStyle: tmp4.textArea, value, onChange: tmp11 };
    const tmp28 = closure_6(onSave(value[14]).TextArea, obj8);
    cResult[12] = tmp4.textArea;
    cResult[13] = value;
    cResult[14] = tmp28;
    tmp26 = tmp28;
  }
  const obj9 = { onPress: onClose, style: tmp4.closeIcon, children: tmp16 };
  const tmp20 = closure_6(onSave(value[12]).PressableOpacity, obj9);
  cResult[6] = onClose;
  cResult[7] = tmp4.closeIcon;
  cResult[8] = tmp20;
  tmp19 = tmp20;
}) : ((onSave) => {
  let Stack;
  let freeTextAppealReason;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let obj3;
  let stringResult;
  let tmp7;
  let value;
  onSave = onSave.onSave;
  value = undefined;
  const onClose = onSave.onClose;
  const tmp = closure_8();
  const items = [SafetyHubStore];
  const obj = onSave(value[9]);
  const stateFromStores = obj.useStateFromStores(items, () => freeTextAppealReason.getFreeTextAppealReason());
  [value, tmp7] = react.useState(stateFromStores);
  if ("" === stateFromStores) {
    const intl2 = tmp2(tmp3[10]).intl;
    stringResult = intl2.string(tmp2(tmp3[10]).t.uoQFIp);
  } else {
    const intl = tmp2(tmp3[10]).intl;
    stringResult = intl.string(tmp2(tmp3[10]).t.tnE3bZ);
  }
  const intl3 = tmp2(tmp3[10]).intl;
  const obj2 = { startExpanded: true, children: closure_7(Stack, obj3) };
  const stringResult1 = intl3.string(onSave(value[10]).t["Rk+uJx"]);
  BottomSheet = tmp2(tmp3[17]).BottomSheet;
  obj3 = { spacing: 16, children: items1 };
  Stack = tmp2(tmp3[18]).Stack;
  const obj4 = { onPress: onClose, style: tmp.closeIcon, children: closure_6(onSave(value[11]).XSmallIcon, { size: "md" }) };
  const PressableOpacity = tmp2(tmp3[12]).PressableOpacity;
  items1 = [closure_6(PressableOpacity, obj4), closure_6(onSave(value[13]).AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: stringResult1 }), , , , ];
  const obj5 = { maxLength: 1024, placeholder: intl4.string(onSave(value[10]).t.bQrZIN), containerStyle: tmp.textArea, value, onChange: tmp7 };
  const TextArea = tmp2(tmp3[14]).TextArea;
  intl4 = tmp2(tmp3[10]).intl;
  items1[2] = closure_6(TextArea, obj5);
  const obj6 = { style: tmp.separator };
  items1[3] = closure_6(View, obj6);
  const obj7 = { variant: "text-xs/medium", color: "text-default", style: tmp.footerText, children: intl5.string(onSave(value[10]).t.xfNY3L) };
  const Text = tmp2(tmp3[15]).Text;
  intl5 = tmp2(tmp3[10]).intl;
  items1[4] = closure_6(Text, obj7);
  const obj8 = {
    onPress() {
      return onSave(first);
    },
    text: intl6.string(onSave(value[10]).t["R3BPH+"])
  };
  const Button = tmp2(tmp3[16]).Button;
  intl6 = tmp2(tmp3[10]).intl;
  items1[5] = closure_6(Button, obj8);
  return closure_6(BottomSheet, obj2);
});
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionFreeTextAppealReasonActionSheet.tsx");

export default tmp3;