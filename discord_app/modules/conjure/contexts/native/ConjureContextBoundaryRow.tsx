// === Module 12110: ConjureContextBoundaryRow ===

// Module 12110 (ConjureContextBoundaryRow)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import _modDef3865 from "module_3865" /* 3865 */;
import useAlertStore from "useAlertStore" /* 5364 */;
import AlertModal from "AlertModal" /* 5368 */;
import noop from "module_19" /* 19 */;

require = fn;
function confirmRevert(onPress) {
  const obj2 = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj2.title = intl.string(_modDef3865["i+xjZM"]);
  const intl2 = util.intl;
  obj2.content = intl2.string(_modDef3865.fMBZmD);
  const obj3 = { children: null };
  const obj4 = { variant: "destructive", text: null, onPress: null };
  const intl3 = util.intl;
  obj4.text = intl3.string(_modDef3865.i5f3Uo);
  obj4.onPress = onPress;
  const items = [React4(AlertModal.AlertActionButton, obj4), ];
  const obj5 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj5.text = intl4.string(util.t["ETE/oC"]);
  items[1] = React4(AlertModal.AlertActionButton, obj5);
  obj3.children = items;
  obj2.actions = hasOwnProperty(timestampProducer, obj3);
  useAlertStore.openAlert("ConjureContextSwitchRevert", React4(AlertModal.AlertModal, obj2));
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const createStyles = fn(5154);
let obj2 = { contextBoundary: { gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8 }, contextRule: null, contextLine: null, contextLabel: null, contextText: null, contextCentered: null };
let obj3 = { gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8 };
obj2.contextRule = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.contextLine = { flex: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_NORMAL };
let obj5 = { flex: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_NORMAL };
obj2.contextLabel = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_6, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_10, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_6, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_10, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.contextText = { alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.contextCentered = { textAlign: "center" };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/contexts/native/ConjureContextBoundaryRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureContextBoundaryRow(arg0) {
  const cResult = action(576).c(32);
  ({ projectId, contextSwitch } = arg0);
  const tmp4 = closure_7();
  const obj = action(576);
  const conjureContextSwitchRow = action(11578).useConjureContextSwitchRow(projectId, contextSwitch);
  if (null == conjureContextSwitchRow) {
    return null;
  } else {
    action = conjureContextSwitchRow.action;
    if (cResult[0] !== tmp4.contextLine) {
      const obj3 = { style: tmp4.contextLine };
      const tmp9 = closure_4(View, obj3);
      cResult[0] = tmp4.contextLine;
      cResult[1] = tmp9;
      let tmp6 = tmp9;
    } else {
      tmp6 = cResult[1];
    }
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
      const tmp14 = closure_4(tmp(11093).ChatPlusIcon, obj4);
      cResult[2] = tmp14;
      let tmp11 = tmp14;
    } else {
      tmp11 = cResult[2];
    }
    if (cResult[3] !== conjureContextSwitchRow.label) {
      const obj5 = { variant: "text-xs/semibold", color: "text-default", children: conjureContextSwitchRow.label };
      const tmp17 = closure_4(tmp(5150).Text, obj5);
      cResult[3] = conjureContextSwitchRow.label;
      cResult[4] = tmp17;
      let tmp15 = tmp17;
    } else {
      tmp15 = cResult[4];
    }
    if (cResult[5] === tmp4.contextLabel) {
      if (cResult[6] === tmp15) {
        let tmp18 = cResult[7];
      }
      if (cResult[8] !== tmp4.contextLine) {
        const obj6 = { style: tmp4.contextLine };
        const tmp25 = closure_4(View, obj6);
        cResult[8] = tmp4.contextLine;
        cResult[9] = tmp25;
        let tmp22 = tmp25;
      } else {
        tmp22 = cResult[9];
      }
      if (cResult[10] === tmp4.contextRule) {
        if (cResult[11] === tmp6) {
          if (cResult[12] === tmp18) {
            if (cResult[13] === tmp22) {
              let tmp26 = cResult[14];
            }
            if (cResult[15] !== action) {
              let tmp32Result = null;
              if (null != action) {
                let str2 = "text-link";
                if (action.disabled) {
                  str2 = "text-muted";
                }
                const obj7 = { children: null };
                const obj8 = { variant: "text-sm/medium", color: str2, accessibilityRole: "link", accessibilityLabel: action.text, accessibilityState: null, disabled: null, onPress: null, children: null };
                const obj9 = { disabled: action.disabled };
                obj8.accessibilityState = obj9;
                obj8.disabled = action.disabled;
                obj8.onPress = function onPress() {
                  if (action.confirm) {
                    confirmRevert(action.onPress);
                  } else {
                    const onPressResult = action.onPress();
                  }
                  return onPressResult;
                };
                obj8.children = action.text;
                const items = [" ", closure_4(tmp(5150).Text, obj8)];
                obj7.children = items;
                tmp32Result = closure_5(closure_6, obj7);
              }
              cResult[15] = action;
              cResult[16] = tmp32Result;
              let tmp30 = tmp32Result;
            } else {
              tmp30 = cResult[16];
            }
            if (cResult[17] === conjureContextSwitchRow.body) {
              if (cResult[18] === tmp4.contextCentered) {
                if (cResult[19] === tmp30) {
                  let tmp35 = cResult[20];
                }
                if (cResult[21] === conjureContextSwitchRow.note) {
                  if (cResult[22] === tmp4.contextCentered) {
                    let tmp38 = cResult[23];
                  }
                  if (cResult[24] === tmp4.contextText) {
                    if (cResult[25] === tmp35) {
                      if (cResult[26] === tmp38) {
                        let tmp41 = cResult[27];
                      }
                      if (cResult[28] === tmp4.contextBoundary) {
                        if (cResult[29] === tmp41) {
                          if (cResult[30] === tmp26) {
                            let tmp45 = cResult[31];
                          }
                          return tmp45;
                        }
                      }
                      const obj10 = { style: tmp4.contextBoundary, children: null };
                      const items1 = [tmp26, tmp41];
                      obj10.children = items1;
                      const tmp48 = closure_5(View, obj10);
                      cResult[28] = tmp4.contextBoundary;
                      cResult[29] = tmp41;
                      cResult[30] = tmp26;
                      cResult[31] = tmp48;
                      tmp45 = tmp48;
                    }
                  }
                  const obj11 = { style: tmp4.contextText, accessibilityLiveRegion: "polite", children: null };
                  const items2 = [tmp35, tmp38];
                  obj11.children = items2;
                  const tmp44 = closure_5(View, obj11);
                  cResult[24] = tmp4.contextText;
                  cResult[25] = tmp35;
                  cResult[26] = tmp38;
                  cResult[27] = tmp44;
                  tmp41 = tmp44;
                }
                let tmp39 = null;
                if (null != conjureContextSwitchRow.note) {
                  const obj12 = { variant: "text-xs/normal", color: "text-muted", style: tmp4.contextCentered, children: conjureContextSwitchRow.note };
                  tmp39 = closure_4(tmp(5150).Text, obj12);
                }
                cResult[21] = conjureContextSwitchRow.note;
                cResult[22] = tmp4.contextCentered;
                cResult[23] = tmp39;
                tmp38 = tmp39;
              }
            }
            const obj13 = { variant: "text-sm/normal", color: "text-muted", style: tmp4.contextCentered, children: null };
            const items3 = [conjureContextSwitchRow.body, tmp30];
            obj13.children = items3;
            const tmp37 = closure_5(tmp(5150).Text, obj13);
            cResult[17] = conjureContextSwitchRow.body;
            cResult[18] = tmp4.contextCentered;
            cResult[19] = tmp30;
            cResult[20] = tmp37;
            tmp35 = tmp37;
          }
        }
      }
      const obj14 = { style: tmp4.contextRule, children: null };
      const items4 = [tmp6, tmp18, tmp22];
      obj14.children = items4;
      const tmp29 = closure_5(View, obj14);
      cResult[10] = tmp4.contextRule;
      cResult[11] = tmp6;
      cResult[12] = tmp18;
      cResult[13] = tmp22;
      cResult[14] = tmp29;
      tmp26 = tmp29;
    }
    const obj15 = { style: tmp4.contextLabel, accessible: true, accessibilityRole: "header", children: null };
    const items5 = [tmp11, tmp15];
    obj15.children = items5;
    const tmp21 = closure_5(View, obj15);
    cResult[5] = tmp4.contextLabel;
    cResult[6] = tmp15;
    cResult[7] = tmp21;
    tmp18 = tmp21;
  }
  const obj2 = action(11578);
}) : (function ConjureContextBoundaryRow(arg0) {
  let action;
  ({ projectId, contextSwitch } = arg0);
  const tmp = closure_7();
  const conjureContextSwitchRow = action(11578).useConjureContextSwitchRow(projectId, contextSwitch);
  if (null == conjureContextSwitchRow) {
    return null;
  } else {
    action = conjureContextSwitchRow.action;
    const obj2 = { style: tmp.contextBoundary, children: null };
    const obj3 = { style: tmp.contextRule, children: null };
    const obj4 = { style: tmp.contextLine };
    const items = [closure_4(View, obj4), , ];
    const obj5 = { style: tmp.contextLabel, accessible: true, accessibilityRole: "header", children: null };
    const obj6 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
    const items1 = [closure_4(tmp2(11093).ChatPlusIcon, obj6), ];
    const obj7 = { variant: "text-xs/semibold", color: "text-default", children: conjureContextSwitchRow.label };
    items1[1] = closure_4(tmp2(5150).Text, obj7);
    obj5.children = items1;
    items[1] = closure_5(View, obj5);
    const obj8 = { style: tmp.contextLine };
    items[2] = closure_4(View, obj8);
    obj3.children = items;
    const items2 = [closure_5(View, obj3), ];
    const obj9 = { style: tmp.contextText, accessibilityLiveRegion: "polite", children: null };
    const obj10 = { variant: "text-sm/normal", color: "text-muted", style: tmp.contextCentered, children: null };
    const items3 = [conjureContextSwitchRow.body, ];
    let tmp8Result = null;
    if (null != action) {
      let str = "text-link";
      if (action.disabled) {
        str = "text-muted";
      }
      const obj11 = { children: null };
      const obj12 = { variant: "text-sm/medium", color: str, accessibilityRole: "link", accessibilityLabel: action.text, accessibilityState: null, disabled: null, onPress: null, children: null };
      const obj13 = { disabled: action.disabled };
      obj12.accessibilityState = obj13;
      obj12.disabled = action.disabled;
      obj12.onPress = function onPress() {
        if (action.confirm) {
          confirmRevert(action.onPress);
        } else {
          const onPressResult = action.onPress();
        }
        return onPressResult;
      };
      obj12.children = action.text;
      const items4 = [" ", closure_4(tmp2(5150).Text, obj12)];
      obj11.children = items4;
      tmp8Result = closure_5(closure_6, obj11);
    }
    items3[1] = tmp8Result;
    obj10.children = items3;
    const items5 = [closure_5(tmp2(5150).Text, obj10), ];
    let tmp10Result = null;
    if (null != conjureContextSwitchRow.note) {
      const obj14 = { variant: "text-xs/normal", color: "text-muted", style: tmp.contextCentered, children: conjureContextSwitchRow.note };
      tmp10Result = closure_4(tmp2(5150).Text, obj14);
    }
    items5[1] = tmp10Result;
    obj9.children = items5;
    items2[1] = closure_5(View, obj9);
    obj2.children = items2;
    return closure_5(View, obj2);
  }
  const obj = action(11578);
});