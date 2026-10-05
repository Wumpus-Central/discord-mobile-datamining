// === Module 17684: RuleRow ===

// Module 17684 (RuleRow)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import Constants from "Constants" /* 11474 */;
import getActionInfo from "getActionInfo" /* 17685 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const AutomodTriggerType = Constants.AutomodTriggerType;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { actions: obj2, actionPill: obj3, actionText: { textTransform: "lowercase" } };
obj2 = { marginTop: nativeDefault.space.PX_4, flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let action;
  let actionType;
  let headerText;
  let helperText;
  let icon;
  let items;
  let items1;
  let triggerType;
  const obj = react2;
  const cResult = obj.c(15);
  ({ actionType, action, triggerType } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === action) {
    if (cResult[1] === actionType) {
      let tmp5;
      if (cResult[2] === triggerType) {
        tmp5 = cResult[3];
      }
      if (null == tmp5) {
        return null;
      } else {
        let tmp8;
        ({ headerText, helperText, icon } = tmp5);
        if (cResult[4] !== icon) {
          const obj2 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
          const tmp11 = hasOwnProperty(icon, obj2);
          cResult[4] = icon;
          cResult[5] = tmp11;
          tmp8 = tmp11;
        } else {
          tmp8 = cResult[5];
        }
        let str = null;
        if (null != helperText) {
          str = " ";
        }
        if (cResult[6] === headerText) {
          if (cResult[7] === helperText) {
            if (cResult[8] === tmp4.actionText) {
              let tmp12;
              if (cResult[9] === str) {
                tmp12 = cResult[10];
              }
              if (cResult[11] === tmp4.actionPill) {
                if (cResult[12] === tmp8) {
                  let tmp15;
                  if (cResult[13] === tmp12) {
                    tmp15 = cResult[14];
                  }
                  return tmp15;
                }
              }
              const obj3 = { style: tmp4.actionPill, children: items };
              items = [tmp8, tmp12];
              const tmp18 = metroRequire(View, obj3);
              cResult[11] = tmp4.actionPill;
              cResult[12] = tmp8;
              cResult[13] = tmp12;
              cResult[14] = tmp18;
              tmp15 = tmp18;
            }
          }
        }
        const obj4 = { variant: "text-xs/medium", color: "text-subtle", style: tmp4.actionText, children: items1 };
        items1 = [headerText, str, helperText];
        const tmp14 = metroRequire(Text_Text.Text, obj4);
        cResult[6] = headerText;
        cResult[7] = helperText;
        cResult[8] = tmp4.actionText;
        cResult[9] = str;
        cResult[10] = tmp14;
        tmp12 = tmp14;
      }
    }
  }
  const tmpResult = getActionInfo;
  const actionInfo = tmpResult.getActionInfo(actionType, action, triggerType);
  cResult[0] = action;
  cResult[1] = actionType;
  cResult[2] = triggerType;
  cResult[3] = actionInfo;
  tmp5 = actionInfo;
}) : ((arg0) => {
  let action;
  let actionType;
  let headerText;
  let icon;
  let items;
  let items1;
  let triggerType;
  ({ actionType, action, triggerType } = arg0);
  const tmp = closure_8();
  const obj = getActionInfo;
  const actionInfo = obj.getActionInfo(actionType, action, triggerType);
  if (null == actionInfo) {
    return null;
  } else {
    const helperText = actionInfo.helperText;
    const obj2 = { style: tmp.actionPill, children: items };
    ({ headerText, icon } = actionInfo);
    const obj3 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
    items = [hasOwnProperty(icon, obj3), ];
    const obj4 = { variant: "text-xs/medium", color: "text-subtle", style: tmp.actionText, children: items1 };
    items1 = [headerText, , ];
    let str = null;
    const Text = Text_Text.Text;
    if (null != helperText) {
      str = " ";
    }
    items1[1] = str;
    items1[2] = helperText;
    items[1] = metroRequire(Text, obj4);
    return metroRequire(View, obj2);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((triggerType) => {
  let descriptionText;
  let headerSubtext;
  let headerText;
  let icon;
  let intl;
  let items;
  let items1;
  let onPress;
  let rule;
  let obj = triggerType(576);
  const cResult = obj.c(33);
  triggerType = triggerType.triggerType;
  ({ rule, onPress } = triggerType);
  const tmp4 = closure_8();
  const obj2 = triggerType(4580);
  const token = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const obj3 = triggerType(4580);
  const token1 = obj3.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
  if (cResult[0] === rule) {
    let tmp7;
    if (cResult[1] === triggerType) {
      tmp7 = cResult[2];
    }
    if (null == tmp7) {
      return null;
    } else {
      let mapped;
      ({ headerText, headerSubtext, descriptionText, icon } = tmp7);
      if (cResult[3] === rule) {
        let arr;
        if (cResult[4] === triggerType) {
          arr = cResult[5];
        }
        if (cResult[6] === arr) {
          let tmp11;
          if (cResult[7] === tmp4) {
            tmp11 = cResult[8];
          }
          if (cResult[9] === tmp11) {
            if (cResult[10] === descriptionText) {
              let tmp15;
              let tmp24;
              if (cResult[11] === rule) {
                tmp15 = cResult[12];
              }
              if (null == rule) {
                let tmp25;
                if (cResult[13] !== triggerType) {
                  let oRs6mG;
                  const intl2 = tmp(1126).intl;
                  const string = intl2.string;
                  if (triggerType === AutomodTriggerType.KEYWORD) {
                    oRs6mG = tmp(1126).t.CumH4u;
                  } else {
                    oRs6mG = tmp(1126).t.oRs6mG;
                  }
                  const stringResult = string(oRs6mG);
                  cResult[13] = triggerType;
                  cResult[14] = stringResult;
                  tmp25 = stringResult;
                } else {
                  tmp25 = cResult[14];
                }
                if (cResult[15] === onPress) {
                  let tmp28;
                  if (cResult[16] === tmp25) {
                    tmp28 = cResult[17];
                  }
                  tmp24 = tmp28;
                }
                const obj4 = { accessibilityRole: "none", size: "sm", variant: "secondary", text: tmp25, onPress };
                const tmp30 = closure_5(triggerType(5594).Button, obj4);
                cResult[15] = onPress;
                cResult[16] = tmp25;
                cResult[17] = tmp30;
                tmp28 = tmp30;
              } else if (!rule.enabled) {
                let tmp21;
                const _Symbol = Symbol;
                if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj5 = { text: intl.string(triggerType(1126).t.Yl1D84) };
                  const TrailingText = tmp(5993).TableRow.TrailingText;
                  intl = tmp(1126).intl;
                  const tmp23 = closure_5(TrailingText, obj5);
                  cResult[18] = tmp23;
                  tmp21 = tmp23;
                } else {
                  tmp21 = cResult[18];
                }
                tmp24 = tmp21;
              }
              if (cResult[19] === headerSubtext) {
                if (cResult[20] === headerText) {
                  if (cResult[21] === token1) {
                    let tmp31;
                    let tmp35;
                    if (cResult[22] === token) {
                      tmp31 = cResult[23];
                    }
                    if (cResult[24] !== icon) {
                      const obj6 = {};
                      const Icon = tmp(5993).TableRow.Icon;
                      const merged = Object.assign(icon);
                      const tmp40 = closure_5(Icon, obj6);
                      cResult[24] = icon;
                      cResult[25] = tmp40;
                      tmp35 = tmp40;
                    } else {
                      tmp35 = cResult[25];
                    }
                    if (cResult[26] === tmp31) {
                      if (cResult[27] === onPress) {
                        if (cResult[28] === tmp15) {
                          if (cResult[29] === tmp35) {
                            if (cResult[30] === null != rule) {
                              let tmp42;
                              if (cResult[31] === tmp24) {
                                tmp42 = cResult[32];
                              }
                              return tmp42;
                            }
                          }
                        }
                      }
                    }
                    const obj7 = { label: tmp31, subLabel: tmp15, icon: tmp35, trailing: tmp24, arrow: null != rule, onPress };
                    const tmp44 = closure_5(triggerType(5993).TableRow, obj7);
                    cResult[26] = tmp31;
                    cResult[27] = onPress;
                    cResult[28] = tmp15;
                    cResult[29] = tmp35;
                    cResult[30] = null != rule;
                    cResult[31] = tmp24;
                    cResult[32] = tmp44;
                    tmp42 = tmp44;
                  }
                }
              }
              let tmp32 = headerText;
              if ("" !== headerSubtext) {
                const obj8 = { variant: token, color: token1, includeFontPadding: true, children: items };
                items = [headerText, " ", ];
                const Text = tmp(4886).Text;
                const obj9 = { variant: "text-sm/normal", color: "interactive-text-default", children: headerSubtext };
                items[2] = closure_5(triggerType(4886).Text, obj9);
                tmp32 = closure_6(Text, obj8);
              }
              cResult[19] = headerSubtext;
              cResult[20] = headerText;
              cResult[21] = token1;
              cResult[22] = token;
              cResult[23] = tmp32;
              tmp31 = tmp32;
            }
          }
          let tmp16 = tmp11;
          if (null == rule) {
            const obj10 = { children: items1 };
            const obj11 = { variant: "text-xs/medium", color: "text-subtle", includeFontPadding: true, children: descriptionText };
            items1 = [closure_5(triggerType(4886).Text, obj11), tmp11];
            tmp16 = closure_6(closure_7, obj10);
          }
          cResult[9] = tmp11;
          cResult[10] = descriptionText;
          cResult[11] = rule;
          cResult[12] = tmp16;
          tmp15 = tmp16;
        }
        let tmp12 = null;
        if (arr.length > 0) {
          const obj12 = { style: tmp4.actions, children: arr };
          tmp12 = closure_5(View, obj12);
        }
        cResult[6] = arr;
        cResult[7] = tmp4;
        cResult[8] = tmp12;
        tmp11 = tmp12;
      }
      if (null != rule) {
        const tmpResult = triggerType(17682);
        const ruleActionsInOrder = tmpResult.getRuleActionsInOrder(rule);
        mapped = ruleActionsInOrder.map((actionType) => {
          const obj = { actionType: actionType.type, action: actionType, triggerType };
          return hasOwnProperty(closure_9, obj, actionType.type);
        });
      } else {
        const tmpResult3 = triggerType(17679);
        const availableActionTypes = tmpResult3.getAvailableActionTypes(triggerType);
        mapped = availableActionTypes.map((actionType) => {
          const obj = { actionType, triggerType };
          return hasOwnProperty(closure_9, obj, actionType);
        });
      }
      cResult[3] = rule;
      cResult[4] = triggerType;
      cResult[5] = mapped;
      arr = mapped;
    }
  }
  const tmpResult4 = triggerType(17687);
  const ruleInfo = tmpResult4.getRuleInfo(triggerType, rule);
  cResult[0] = rule;
  cResult[1] = triggerType;
  cResult[2] = ruleInfo;
  tmp7 = ruleInfo;
}) : ((triggerType) => {
  let Icon;
  let descriptionText;
  let headerSubtext;
  let headerText;
  let icon;
  let intl;
  let items;
  let items1;
  let obj12;
  let onPress;
  let rule;
  triggerType = triggerType.triggerType;
  ({ rule, onPress } = triggerType);
  const tmp = closure_8();
  let obj = triggerType(4580);
  const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const obj2 = triggerType(4580);
  const token1 = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
  const obj3 = triggerType(17687);
  const ruleInfo = obj3.getRuleInfo(triggerType, rule);
  if (null == ruleInfo) {
    return null;
  } else {
    let mapped;
    let tmp16Result;
    ({ headerText, headerSubtext, icon, descriptionText } = ruleInfo);
    if (null != rule) {
      const tmp2Result = triggerType(17682);
      const ruleActionsInOrder = tmp2Result.getRuleActionsInOrder(rule);
      mapped = ruleActionsInOrder.map((actionType) => {
        const obj = { actionType: actionType.type, action: actionType, triggerType };
        return hasOwnProperty(closure_9, obj, actionType.type);
      });
    } else {
      const tmp2Result2 = triggerType(17679);
      const availableActionTypes = tmp2Result2.getAvailableActionTypes(triggerType);
      mapped = availableActionTypes.map((actionType) => {
        const obj = { actionType, triggerType };
        return hasOwnProperty(closure_9, obj, actionType);
      });
    }
    let tmp7 = null;
    if (mapped.length > 0) {
      const obj4 = { style: tmp.actions, children: mapped };
      tmp7 = closure_5(View, obj4);
    }
    let tmp10 = tmp7;
    if (null == rule) {
      const obj5 = { children: items };
      const obj6 = { variant: "text-xs/medium", color: "text-subtle", includeFontPadding: true, children: descriptionText };
      items = [closure_5(triggerType(4886).Text, obj6), tmp7];
      tmp10 = closure_6(closure_7, obj5);
    }
    if (null == rule) {
      let oRs6mG;
      const Button = tmp2(5594).Button;
      const intl2 = tmp2(1126).intl;
      const string = intl2.string;
      if (triggerType === AutomodTriggerType.KEYWORD) {
        oRs6mG = tmp2(1126).t.CumH4u;
      } else {
        oRs6mG = tmp2(1126).t.oRs6mG;
      }
      const obj7 = { accessibilityRole: "none", size: "sm", variant: "secondary", text: string(oRs6mG), onPress };
      tmp16Result = closure_5(Button, obj7);
    } else if (!rule.enabled) {
      const obj8 = { text: intl.string(triggerType(1126).t.Yl1D84) };
      const TrailingText = tmp2(5993).TableRow.TrailingText;
      intl = tmp2(1126).intl;
      tmp16Result = closure_5(TrailingText, obj8);
    }
    let tmp18 = headerText;
    if ("" !== headerSubtext) {
      const obj9 = { variant: token, color: token1, includeFontPadding: true, children: items1 };
      items1 = [headerText, " ", ];
      const Text = tmp2(4886).Text;
      const obj10 = { variant: "text-sm/normal", color: "interactive-text-default", children: headerSubtext };
      items1[2] = closure_5(triggerType(4886).Text, obj10);
      tmp18 = closure_6(Text, obj9);
    }
    const obj11 = { label: tmp18, subLabel: tmp10, icon: closure_5(Icon, obj12), trailing: tmp16Result, arrow: null != rule, onPress };
    const TableRow = tmp2(5993).TableRow;
    obj12 = {};
    Icon = tmp2(5993).TableRow.Icon;
    const merged = Object.assign(icon);
    return closure_5(TableRow, obj11);
  }
});
const result = size.fileFinishedImporting("modules/guild_automod/native/components/RuleRow.tsx");

export default tmp5;