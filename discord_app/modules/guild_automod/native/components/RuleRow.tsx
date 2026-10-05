// discord_app/modules/guild_automod/native/components/RuleRow.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import getActionInfo from "../getActionInfo.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const AutomodTriggerType = fn(11474).AutomodTriggerType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  actions: {
    marginTop: nativeDefault.space.PX_4,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: nativeDefault.space.PX_4,
  },
  actionPill: null,
  actionText: null,
};
let obj3 = {
  marginTop: nativeDefault.space.PX_4,
  flexDirection: "row",
  flexWrap: "wrap",
  gap: nativeDefault.space.PX_4,
};
obj2.actionPill = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_4,
  padding: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.actionText = { textTransform: "lowercase" };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(15);
      ({ actionType, action, triggerType } = arg0);
      const tmp4 = closure_8();
      if (cResult[0] === action) {
        if (cResult[1] === actionType) {
          if (cResult[2] === triggerType) {
            let tmp5 = cResult[3];
          }
          if (null == tmp5) {
            return null;
          } else {
            ({ headerText, helperText, icon } = tmp5);
            if (cResult[4] !== icon) {
              const obj2 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
              const tmp11 = hasOwnProperty(icon, obj2);
              cResult[4] = icon;
              cResult[5] = tmp11;
              let tmp8 = tmp11;
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
                  if (cResult[9] === str) {
                    let tmp12 = cResult[10];
                  }
                  if (cResult[11] === tmp4.actionPill) {
                    if (cResult[12] === tmp8) {
                      if (cResult[13] === tmp12) {
                        let tmp15 = cResult[14];
                      }
                      return tmp15;
                    }
                  }
                  const obj3 = { style: tmp4.actionPill, children: null };
                  const items = [tmp8, tmp12];
                  obj3.children = items;
                  const tmp18 = timestampProducer(View, obj3);
                  cResult[11] = tmp4.actionPill;
                  cResult[12] = tmp8;
                  cResult[13] = tmp12;
                  cResult[14] = tmp18;
                  tmp15 = tmp18;
                }
              }
            }
            const obj4 = { variant: "text-xs/medium", color: "text-subtle", style: tmp4.actionText, children: null };
            const items1 = [headerText, str, helperText];
            obj4.children = items1;
            const tmp14 = timestampProducer(Text_Text.Text, obj4);
            cResult[6] = headerText;
            cResult[7] = helperText;
            cResult[8] = tmp4.actionText;
            cResult[9] = str;
            cResult[10] = tmp14;
            tmp12 = tmp14;
          }
        }
      }
      const actionInfo = getActionInfo.getActionInfo(actionType, action, triggerType);
      cResult[0] = action;
      cResult[1] = actionType;
      cResult[2] = triggerType;
      cResult[3] = actionInfo;
      tmp5 = actionInfo;
      const tmpResult = getActionInfo;
    }
  : (arg0) => {
      ({ actionType, action, triggerType } = arg0);
      const tmp = closure_8();
      const actionInfo = getActionInfo.getActionInfo(actionType, action, triggerType);
      if (null == actionInfo) {
        return null;
      } else {
        const helperText = actionInfo.helperText;
        const obj2 = { style: tmp.actionPill, children: null };
        const obj3 = { size: "xs", color: null };
        ({ headerText, icon } = actionInfo);
        obj3.color = nativeDefault.colors.TEXT_MUTED;
        const items = [hasOwnProperty(icon, obj3)];
        const obj4 = { variant: "text-xs/medium", color: "text-subtle", style: tmp.actionText, children: null };
        const items1 = [headerText, ,];
        let str = null;
        if (null != helperText) {
          str = " ";
        }
        items1[1] = str;
        items1[2] = helperText;
        obj4.children = items1;
        items[1] = timestampProducer(Text_Text.Text, obj4);
        obj2.children = items;
        return timestampProducer(View, obj2);
      }
    };
ReactCompilerGating = fn(558);
let obj4 = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_4,
  padding: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/RuleRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (triggerType) => {
      const cResult = triggerType(576).c(33);
      triggerType = triggerType.triggerType;
      ({ rule, onPress } = triggerType);
      const tmp4 = closure_8();
      const obj = triggerType(576);
      const token = triggerType(4580).useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
      const obj2 = triggerType(4580);
      const token1 = triggerType(4580).useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
      if (cResult[0] === rule) {
        if (cResult[1] === triggerType) {
          let tmp7 = cResult[2];
        }
        if (null == tmp7) {
          return null;
        } else {
          ({ headerText, headerSubtext, descriptionText, icon } = tmp7);
          if (cResult[3] === rule) {
            if (cResult[4] === triggerType) {
              if (cResult[6] === cResult[5]) {
                if (cResult[7] === tmp4) {
                  let tmp12 = cResult[8];
                }
                if (cResult[9] === tmp12) {
                  if (cResult[10] === descriptionText) {
                    if (cResult[11] === rule) {
                      let tmp16 = cResult[12];
                    }
                    if (null == rule) {
                      if (cResult[13] !== triggerType) {
                        const intl2 = tmp(1126).intl;
                        if (triggerType === AutomodTriggerType.KEYWORD) {
                          let oRs6mG = tmp(1126).t.CumH4u;
                        } else {
                          oRs6mG = tmp(1126).t.oRs6mG;
                        }
                        const stringResult = intl2.string(oRs6mG);
                        cResult[13] = triggerType;
                        cResult[14] = stringResult;
                      } else {
                        if (cResult[15] === onPress) {
                        }
                        const obj4 = {
                          accessibilityRole: "none",
                          size: "sm",
                          variant: "secondary",
                          text: cResult[14],
                          onPress,
                        };
                        const tmp32 = closure_5(tmp(5594).Button, obj4);
                        cResult[15] = onPress;
                        cResult[16] = cResult[14];
                        cResult[17] = tmp32;
                      }
                    } else {
                      if (!rule.enabled) {
                        const _Symbol = Symbol;
                        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                          const obj5 = { text: null };
                          const intl = tmp(1126).intl;
                          obj5.text = intl.string(tmp(1126).t.Yl1D84);
                          const tmp24 = closure_5(tmp(5993).TableRow.TrailingText, obj5);
                          cResult[18] = tmp24;
                        }
                      }
                      if (cResult[19] === headerSubtext) {
                        if (cResult[20] === headerText) {
                          if (cResult[21] === token1) {
                            if (cResult[22] === token) {
                              let tmp34 = cResult[23];
                            }
                            if (cResult[24] !== icon) {
                              const obj6 = {};
                              const merged = Object.assign(icon);
                              const tmp43 = closure_5(tmp(5993).TableRow.Icon, obj6);
                              cResult[24] = icon;
                              cResult[25] = tmp43;
                              let tmp38 = tmp43;
                            } else {
                              tmp38 = cResult[25];
                            }
                            if (cResult[26] === tmp34) {
                              if (cResult[27] === onPress) {
                                if (cResult[28] === tmp16) {
                                  if (cResult[29] === tmp38) {
                                    if (cResult[30] === tmp44) {
                                      if (cResult[31] === tmp25) {
                                        let tmp45 = cResult[32];
                                      }
                                      return tmp45;
                                    }
                                  }
                                }
                              }
                            }
                            const obj7 = {
                              label: tmp34,
                              subLabel: tmp16,
                              icon: tmp38,
                              trailing: tmp25,
                              arrow: null != rule,
                              onPress,
                            };
                            const tmp47 = closure_5(tmp(5993).TableRow, obj7);
                            cResult[26] = tmp34;
                            cResult[27] = onPress;
                            cResult[28] = tmp16;
                            cResult[29] = tmp38;
                            cResult[30] = null != rule;
                            cResult[31] = tmp25;
                            cResult[32] = tmp47;
                            tmp45 = tmp47;
                          }
                        }
                      }
                      let tmp35 = headerText;
                      if ("" !== headerSubtext) {
                        const obj8 = { variant: token, color: token1, includeFontPadding: true, children: null };
                        const items = [headerText, " "];
                        const obj9 = {
                          variant: "text-sm/normal",
                          color: "interactive-text-default",
                          children: headerSubtext,
                        };
                        items[2] = closure_5(tmp(4886).Text, obj9);
                        obj8.children = items;
                        tmp35 = closure_6(tmp(4886).Text, obj8);
                      }
                      cResult[19] = headerSubtext;
                      cResult[20] = headerText;
                      cResult[21] = token1;
                      cResult[22] = token;
                      cResult[23] = tmp35;
                      tmp34 = tmp35;
                    }
                  }
                }
                let tmp17 = tmp12;
                if (null == rule) {
                  const obj10 = { children: null };
                  const obj11 = {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    includeFontPadding: true,
                    children: descriptionText,
                  };
                  const items1 = [closure_5(tmp(4886).Text, obj11), tmp12];
                  obj10.children = items1;
                  tmp17 = closure_6(closure_7, obj10);
                }
                cResult[9] = tmp12;
                cResult[10] = descriptionText;
                cResult[11] = rule;
                cResult[12] = tmp17;
                tmp16 = tmp17;
              }
              let tmp13 = null;
              if (cResult[5].length > 0) {
                const obj12 = { style: tmp4.actions, children: arr };
                tmp13 = closure_5(View, obj12);
              }
              cResult[6] = cResult[5];
              cResult[7] = tmp4;
              cResult[8] = tmp13;
              tmp12 = tmp13;
            }
          }
          if (null != rule) {
            const ruleActionsInOrder = tmp(17682).getRuleActionsInOrder(rule);
            let mapped = ruleActionsInOrder.map((actionType) =>
              hasOwnProperty(
                closure_9,
                { actionType: actionType.type, action: actionType, triggerType },
                actionType.type,
              ),
            );
            const tmpResult = tmp(17682);
          } else {
            const availableActionTypes = tmp(17679).getAvailableActionTypes(triggerType);
            mapped = availableActionTypes.map((actionType) =>
              hasOwnProperty(closure_9, { actionType, triggerType }, actionType),
            );
            const tmpResult3 = tmp(17679);
          }
          cResult[3] = rule;
          cResult[4] = triggerType;
          cResult[5] = mapped;
        }
      }
      const obj3 = triggerType(4580);
      const ruleInfo = triggerType(17687).getRuleInfo(triggerType, rule);
      cResult[0] = rule;
      cResult[1] = triggerType;
      cResult[2] = ruleInfo;
      tmp7 = ruleInfo;
      const tmpResult4 = triggerType(17687);
    }
  : (triggerType) => {
      triggerType = triggerType.triggerType;
      ({ rule, onPress } = triggerType);
      const tmp = closure_8();
      const token = triggerType(4580).useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
      const obj = triggerType(4580);
      const token1 = triggerType(4580).useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
      const obj2 = triggerType(4580);
      const ruleInfo = triggerType(17687).getRuleInfo(triggerType, rule);
      if (null == ruleInfo) {
        return null;
      } else {
        ({ headerText, headerSubtext, icon, descriptionText } = ruleInfo);
        if (null != rule) {
          const ruleActionsInOrder = tmp2(17682).getRuleActionsInOrder(rule);
          let mapped = ruleActionsInOrder.map((actionType) =>
            hasOwnProperty(
              closure_9,
              { actionType: actionType.type, action: actionType, triggerType },
              actionType.type,
            ),
          );
          const tmp2Result = tmp2(17682);
        } else {
          const availableActionTypes = tmp2(17679).getAvailableActionTypes(triggerType);
          mapped = availableActionTypes.map((actionType) =>
            hasOwnProperty(closure_9, { actionType, triggerType }, actionType),
          );
          const tmp2Result2 = tmp2(17679);
        }
        let tmp7 = null;
        if (mapped.length > 0) {
          const obj4 = { style: tmp.actions, children: mapped };
          tmp7 = closure_5(View, obj4);
        }
        let tmp10 = tmp7;
        if (null == rule) {
          const obj5 = { children: null };
          const obj6 = {
            variant: "text-xs/medium",
            color: "text-subtle",
            includeFontPadding: true,
            children: descriptionText,
          };
          const items = [closure_5(tmp2(4886).Text, obj6), tmp7];
          obj5.children = items;
          tmp10 = closure_6(closure_7, obj5);
        }
        if (null == rule) {
          const intl2 = tmp2(1126).intl;
          if (triggerType === AutomodTriggerType.KEYWORD) {
            let oRs6mG = tmp2(1126).t.CumH4u;
          } else {
            oRs6mG = tmp2(1126).t.oRs6mG;
          }
          const obj7 = {
            accessibilityRole: "none",
            size: "sm",
            variant: "secondary",
            text: intl2.string(oRs6mG),
            onPress,
          };
          closure_5(tmp2(5594).Button, obj7);
        } else {
          let tmp14;
          if (!rule.enabled) {
            const obj8 = { text: null };
            const intl = tmp2(1126).intl;
            obj8.text = intl.string(tmp2(1126).t.Yl1D84);
            tmp14 = closure_5(tmp2(5993).TableRow.TrailingText, obj8);
          }
          let tmp19 = headerText;
          if ("" !== headerSubtext) {
            const obj9 = { variant: token, color: token1, includeFontPadding: true, children: null };
            const items1 = [headerText, " "];
            const obj10 = { variant: "text-sm/normal", color: "interactive-text-default", children: headerSubtext };
            items1[2] = closure_5(tmp2(4886).Text, obj10);
            obj9.children = items1;
            tmp19 = closure_6(tmp2(4886).Text, obj9);
          }
          const obj11 = { label: tmp19, subLabel: tmp10, icon: null, trailing: null, arrow: null, onPress: null };
          const obj12 = {};
          const merged = Object.assign(icon);
          obj11.icon = closure_5(tmp2(5993).TableRow.Icon, obj12);
          obj11.trailing = tmp14;
          obj11.arrow = null != rule;
          obj11.onPress = onPress;
          return closure_5(tmp2(5993).TableRow, obj11);
        }
      }
      const obj3 = triggerType(17687);
    };
