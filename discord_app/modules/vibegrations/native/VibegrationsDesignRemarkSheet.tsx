// === Module 16594: VibegrationsDesignRemarkSheet ===

// Module 16594 (VibegrationsDesignRemarkSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import VibegrationsDesignFeedback from "VibegrationsDesignFeedback" /* 16540 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const sendUserMessage = fn(12904).sendUserMessage;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const VibegrationsDesignRemarkSheet = "VibegrationsDesignRemarkSheet";
const createStyles = fn(4890);
let obj2 = { content: { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 }, actions: null };
let obj3 = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.actions = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsDesignRemarkSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const cResult = projectId(onClose[8]).c(41);
  projectId = projectId.projectId;
  const target = projectId.target;
  onClose = projectId.onClose;
  const tmp4 = closure_10();
  const tmp5 = value(noop.useState(""), 2);
  value = tmp5[0];
  if (cResult[0] !== onClose) {
    const fn = function u() {
      ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsDesignRemarkSheet);
      onClose();
    };
    cResult[0] = onClose;
    cResult[1] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  noop = tmp7;
  if (cResult[2] !== value) {
    const result = tmp(tmp2[10]).isVibegrationsDesignCommentUsable(value);
    cResult[2] = value;
    cResult[3] = result;
    let tmp8 = result;
    const tmpResult = tmp(tmp2[10]);
  } else {
    tmp8 = cResult[3];
  }
  closure_5 = tmp8;
  if (cResult[4] === tmp7) {
    if (cResult[5] === value) {
      if (cResult[6] === projectId) {
        if (cResult[7] === target) {
          if (cResult[8] === tmp8) {
            let tmp10 = cResult[9];
          }
          if (cResult[10] !== target) {
            const result1 = tmp(tmp2[10]).labelVibegrationsDesignTarget(target);
            cResult[10] = target;
            cResult[11] = result1;
            let tmp11 = result1;
            const tmpResult3 = tmp(tmp2[10]);
          } else {
            tmp11 = cResult[11];
          }
          const kind = tmp11.kind;
          if (cResult[12] !== target) {
            const result2 = tmp(tmp2[10]).describeVibegrationsDesignTarget(target);
            cResult[12] = target;
            cResult[13] = result2;
            let tmp13 = result2;
            const tmpResult4 = tmp(tmp2[10]);
          } else {
            tmp13 = cResult[13];
          }
          if (cResult[14] !== tmp13) {
            const obj2 = { title: tmp13 };
            const tmp17 = closure_7(tmp(tmp2[11]).BottomSheetTitleHeader, obj2);
            cResult[14] = tmp13;
            cResult[15] = tmp17;
            let tmp15 = tmp17;
          } else {
            tmp15 = cResult[15];
          }
          const _Symbol = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[12]).intl;
            const stringResult = intl.string(target(tmp2[13])["qR+sGX"]);
            cResult[16] = stringResult;
            let tmp19 = stringResult;
          } else {
            tmp19 = cResult[16];
          }
          if (cResult[17] !== kind) {
            if ("" === kind) {
              const intl2 = tmp(tmp2[12]).intl;
              let stringResult1 = intl2.string(target(tmp2[13]).FK09JH);
            } else {
              const _HermesInternal = HermesInternal;
              stringResult1 = "Edit " + kind;
            }
            cResult[17] = kind;
            cResult[18] = stringResult1;
          } else {
            if (cResult[19] === value) {
              if (cResult[20] === tmp22) {
                let tmp26 = cResult[21];
              }
              const _Symbol2 = Symbol;
              if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                const intl3 = tmp(tmp2[12]).intl;
                const stringResult2 = intl3.string(target(tmp2[13]).cLsnYH);
                cResult[22] = stringResult2;
                let tmp29 = stringResult2;
              } else {
                tmp29 = cResult[22];
              }
              if (cResult[23] !== tmp7) {
                const obj3 = { variant: "tertiary", grow: true, text: tmp29, onPress: tmp7 };
                const tmp34 = closure_7(tmp(tmp2[15]).Button, obj3);
                cResult[23] = tmp7;
                cResult[24] = tmp34;
                let tmp32 = tmp34;
              } else {
                tmp32 = cResult[24];
              }
              const _Symbol3 = Symbol;
              if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                const intl4 = tmp(tmp2[12]).intl;
                const stringResult3 = intl4.string(tmp(tmp2[12]).t.TXNS7S);
                cResult[25] = stringResult3;
                let tmp35 = stringResult3;
              } else {
                tmp35 = cResult[25];
              }
              if (cResult[26] === tmp10) {
                if (cResult[27] === tmp37) {
                  let tmp38 = cResult[28];
                }
                if (cResult[29] === tmp4.actions) {
                  if (cResult[30] === tmp32) {
                    if (cResult[31] === tmp38) {
                      let tmp41 = cResult[32];
                    }
                    if (cResult[33] === tmp4.content) {
                      if (cResult[34] === tmp26) {
                        if (cResult[35] === tmp41) {
                          let tmp45 = cResult[36];
                        }
                        if (cResult[37] === onClose) {
                          if (cResult[38] === tmp45) {
                            if (cResult[39] === tmp15) {
                              let tmp49 = cResult[40];
                            }
                            return tmp49;
                          }
                        }
                        const obj4 = { startExpanded: true, keyboardShouldPersistTaps: "handled", onDismiss: onClose, header: tmp15, children: tmp45 };
                        const tmp51 = closure_7(tmp(tmp2[16]).ActionSheet, obj4);
                        cResult[37] = onClose;
                        cResult[38] = tmp45;
                        cResult[39] = tmp15;
                        cResult[40] = tmp51;
                        tmp49 = tmp51;
                      }
                    }
                    const obj5 = { style: tmp4.content, children: null };
                    const items = [tmp26, tmp41];
                    obj5.children = items;
                    const tmp48 = closure_8(closure_5, obj5);
                    cResult[33] = tmp4.content;
                    cResult[34] = tmp26;
                    cResult[35] = tmp41;
                    cResult[36] = tmp48;
                    tmp45 = tmp48;
                  }
                }
                const obj6 = { style: tmp4.actions, children: null };
                const items1 = [tmp32, tmp38];
                obj6.children = items1;
                const tmp44 = closure_8(closure_5, obj6);
                cResult[29] = tmp4.actions;
                cResult[30] = tmp32;
                cResult[31] = tmp38;
                cResult[32] = tmp44;
                tmp41 = tmp44;
              }
              const obj7 = { variant: "primary", grow: true, text: tmp35, disabled: !tmp8, onPress: tmp10 };
              const tmp40 = closure_7(tmp(tmp2[15]).Button, obj7);
              cResult[26] = tmp10;
              cResult[27] = !tmp8;
              cResult[28] = tmp40;
              tmp38 = tmp40;
            }
            const obj8 = { autoFocus: true, label: tmp19, placeholder: cResult[18], maxLength: tmp(tmp2[10]).VIBEGRATIONS_DESIGN_COMMENT_MAX, value, onChange: tmp5[1] };
            const tmp28 = closure_7(tmp(tmp2[14]).TextArea, obj8);
            cResult[19] = value;
            cResult[20] = cResult[18];
            cResult[21] = tmp28;
            tmp26 = tmp28;
          }
        }
      }
    }
  }
  class I {
    constructor() {
      if (closure_5) {
        tmp = sendUserMessage;
        tmp2 = projectId;
        tmp3 = closure_0;
        tmp4 = closure_2;
        obj = closure_0(closure_2[10]);
        tmp5 = target;
        tmp6 = closure_3;
        tmp7 = sendUserMessage(projectId, obj.formatVibegrationsDesignRemark(target, closure_3));
        tmp8 = closure_4;
        tmp9 = closure_4();
      }
      return;
    }
  }
  cResult[4] = tmp7;
  cResult[5] = value;
  cResult[6] = projectId;
  cResult[7] = target;
  cResult[8] = tmp8;
  cResult[9] = I;
  tmp10 = I;
  let obj = projectId(onClose[8]);
}) : ((projectId) => {
  projectId = projectId.projectId;
  const target = projectId.target;
  const onClose = projectId.onClose;
  value = undefined;
  let onPress;
  const tmp = closure_10();
  const tmp2 = value(onPress.useState(""), 2);
  value = tmp2[0];
  const items = [onClose];
  onPress = onPress.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsDesignRemarkSheet);
    onClose();
  }, items);
  const result = projectId(onClose[10]).isVibegrationsDesignCommentUsable(value);
  c5 = result;
  const items1 = [result, projectId, target, value, onPress];
  const callback1 = onPress.useCallback(() => {
    if (c5) {
      sendUserMessage(projectId, VibegrationsDesignFeedback.formatVibegrationsDesignRemark(target, first));
      callback();
    }
  }, items1);
  let obj = projectId(onClose[10]);
  const kind = projectId(onClose[10]).labelVibegrationsDesignTarget(target).kind;
  const obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", onDismiss: onClose, header: null, children: null };
  const obj4 = { title: null };
  const obj2 = projectId(onClose[10]);
  obj4.title = projectId(onClose[10]).describeVibegrationsDesignTarget(target);
  obj3.header = closure_7(projectId(onClose[11]).BottomSheetTitleHeader, obj4);
  const obj6 = { style: tmp.content, children: null };
  const obj7 = { autoFocus: true, label: null, placeholder: null, maxLength: null, value: null, onChange: null };
  const intl = projectId(onClose[12]).intl;
  obj7.label = intl.string(target(onClose[13])["qR+sGX"]);
  if ("" === kind) {
    const intl2 = tmp5(tmp6[12]).intl;
    let stringResult = intl2.string(tmp12(tmp6[13]).FK09JH);
  } else {
    const _HermesInternal = HermesInternal;
    stringResult = "Edit " + kind;
  }
  obj7.placeholder = stringResult;
  obj7.maxLength = projectId(onClose[10]).VIBEGRATIONS_DESIGN_COMMENT_MAX;
  obj7.value = value;
  obj7.onChange = tmp2[1];
  const items2 = [closure_7(projectId(onClose[14]).TextArea, obj7), ];
  const obj8 = { style: tmp.actions, children: null };
  const obj9 = { variant: "tertiary", grow: true, text: null, onPress: null };
  const intl3 = tmp5(tmp6[12]).intl;
  obj9.text = intl3.string(target(onClose[13]).cLsnYH);
  obj9.onPress = onPress;
  const items3 = [closure_7(projectId(onClose[15]).Button, obj9), ];
  const obj10 = { variant: "primary", grow: true, text: null, disabled: null, onPress: null };
  const intl4 = tmp5(tmp6[12]).intl;
  obj10.text = intl4.string(projectId(onClose[12]).t.TXNS7S);
  obj10.disabled = !result;
  obj10.onPress = callback1;
  items3[1] = closure_7(projectId(onClose[15]).Button, obj10);
  obj8.children = items3;
  items2[1] = closure_8(c5, obj8);
  obj6.children = items2;
  obj3.children = closure_8(c5, obj6);
  return closure_7(projectId(onClose[16]).ActionSheet, obj3);
});
export const VIBEGRATIONS_DESIGN_REMARK_SHEET_KEY = "VibegrationsDesignRemarkSheet";