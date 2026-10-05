// discord_app/design/void/Form/native/FormRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Form_FormCheckboxDefault from "FormCheckbox.tsx";
import FormLabelDefault from "FormLabel.tsx";
import FormSubLabelDefault from "FormSubLabel.tsx";
import FormArrowDefault from "FormArrow.tsx";
import Form_FormRadioDefault from "FormRadio.tsx";
import FormCheckmarkDefault from "FormCheckmark.tsx";
import FormIconDefault from "FormIcon.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment_mod from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let label;

let Platform;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ Platform, View: closure_4 } = react_native);
let Fragment = Fragment_mod;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles(() => {
  let obj2;
  let obj4;
  const obj = {
    container: obj2,
    label: { flexShrink: 1, flexGrow: 1, flexBasis: "30%" },
    leading: { flexGrow: 0, marginRight: 16 },
    trailing: { marginLeft: "auto", paddingLeft: 16, textAlign: "right", flexShrink: 0 },
    disabled: { opacity: 0.5 },
    error: obj4,
  };
  obj2 = { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" };
  const obj3 = { paddingHorizontal: 16, paddingVertical: 16 };
  const merged = Object.assign(obj3);
  obj4 = { borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL, borderWidth: 2 };
  const obj5 = { paddingHorizontal: 14, paddingVertical: 14 };
  const merged1 = Object.assign(obj5);
  return obj;
});
const forwardRef = react.forwardRef;
let obj = {
  Arrow: FormArrowDefault,
  Label: FormLabelDefault,
  SubLabel: FormSubLabelDefault,
  Radio: Form_FormRadioDefault,
  Checkbox: Form_FormCheckboxDefault,
  Checkmark: FormCheckmarkDefault,
  Icon: FormIconDefault,
};
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (label, ref) => {
        let DEPRECATED_style;
        let accessibilityActions;
        let accessibilityHint;
        let accessibilityLabel;
        let accessibilityRole;
        let accessibilityState;
        let accessible;
        let delayLongPress;
        let disabled;
        let end;
        let hasError;
        let items;
        let items1;
        let labelStyle;
        let num16;
        let numberOfLines;
        let onAccessibilityAction;
        let onAccessibilityTap;
        let onLongPress;
        let onPress;
        let onPressOut;
        let start;
        let str;
        let style;
        let subLabel;
        let tmp24;
        let tmp25;
        let variant;
        let obj = label(subLabel[6]);
        const cResult = obj.c(68);
        label = label.label;
        const leading = label.leading;
        ({ onPress, onLongPress, onPressOut, DEPRECATED_style, subLabel } = label);
        const trailing = label.trailing;
        ({
          disabled,
          hasError,
          accessible,
          accessibilityLabel,
          accessibilityHint,
          accessibilityRole,
          accessibilityState,
          accessibilityActions,
          onAccessibilityAction,
          onAccessibilityTap,
          numberOfLines,
        } = label);
        ({ style, labelStyle } = label);
        const trailingWrapperStyle = label.trailingWrapperStyle;
        const leadingStyle = label.leadingStyle;
        ({ delayLongPress, start, end, variant } = label);
        let tmp7 = undefined !== start && start;
        let tmp8 = undefined !== end && end;
        const tmp9 = leadingStyle();
        let closure_8 = tmp9;
        let obj2 = trailing;
        const isForm = trailing.useContext(tmp(subLabel[7]).FormContext).isForm;
        if (trailing.useContext(label(subLabel[8]).RedesignCompatContext)) {
          let tmp26;
          let tmp31;
          let tmp36;
          let tmp41;
          if (cResult[0] !== label) {
            let tmp30;
            if (typeof label === "function") {
              let tmp27 = null;
              if (null != label) {
                let tmp28 = label;
                if (!obj2.isValidElement(label)) {
                  tmp28 = labelStyle(label, {});
                }
                tmp27 = tmp28;
              }
              tmp30 = tmp27;
            } else {
              tmp30 = label;
            }
            cResult[0] = label;
            cResult[1] = tmp30;
            tmp26 = tmp30;
          } else {
            tmp26 = cResult[1];
          }
          if (cResult[2] !== subLabel) {
            if (typeof subLabel !== "function") {
              let tmp32;
              if (!obj2.isValidElement(subLabel)) {
                tmp32 = null;
                if (null != subLabel) {
                  tmp32 = subLabel;
                }
              }
              cResult[2] = subLabel;
              cResult[3] = tmp32;
              tmp31 = tmp32;
            }
            let tmp33 = null;
            if (null != subLabel) {
              let tmp34 = subLabel;
              if (!obj2.isValidElement(subLabel)) {
                tmp34 = labelStyle(subLabel, {});
              }
              tmp33 = tmp34;
            }
            tmp32 = tmp33;
          } else {
            tmp31 = cResult[3];
          }
          if (cResult[4] !== leading) {
            let tmp40;
            if (typeof leading === "function") {
              let tmp37 = null;
              if (null != leading) {
                let tmp38 = leading;
                if (!obj2.isValidElement(leading)) {
                  tmp38 = labelStyle(leading, {});
                }
                tmp37 = tmp38;
              }
              tmp40 = tmp37;
            } else {
              tmp40 = leading;
            }
            cResult[4] = leading;
            cResult[5] = tmp40;
            tmp36 = tmp40;
          } else {
            tmp36 = cResult[5];
          }
          if (cResult[6] !== trailing) {
            let tmp45;
            if (typeof trailing === "function") {
              let tmp42 = null;
              if (null != trailing) {
                let tmp43 = trailing;
                if (!obj2.isValidElement(trailing)) {
                  tmp43 = labelStyle(trailing, {});
                }
                tmp42 = tmp43;
              }
              tmp45 = tmp42;
            } else {
              tmp45 = trailing;
            }
            cResult[6] = trailing;
            cResult[7] = tmp45;
            tmp41 = tmp45;
          } else {
            tmp41 = cResult[7];
          }
          if (cResult[8] === accessibilityActions) {
            if (cResult[9] === accessibilityHint) {
              if (cResult[10] === accessibilityLabel) {
                if (cResult[11] === accessibilityRole) {
                  if (cResult[12] === accessibilityState) {
                    if (cResult[13] === (undefined === accessible || accessible)) {
                      if (cResult[14] === delayLongPress) {
                        if (cResult[15] === (undefined !== disabled && disabled)) {
                          if (cResult[16] === tmp8) {
                            if (cResult[17] === numberOfLines) {
                              if (cResult[18] === onAccessibilityAction) {
                                if (cResult[19] === onAccessibilityTap) {
                                  if (cResult[20] === onLongPress) {
                                    if (cResult[21] === onPress) {
                                      if (cResult[22] === tmp26) {
                                        if (cResult[23] === tmp36) {
                                          if (cResult[24] === tmp31) {
                                            if (cResult[25] === tmp41) {
                                              if (cResult[26] === tmp7) {
                                                let tmp46;
                                                if (cResult[27] === variant) {
                                                  tmp46 = cResult[28];
                                                }
                                                return tmp46;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          let obj3 = {
            variant,
            start: tmp7,
            end: tmp8,
            label: tmp26,
            subLabel: tmp31,
            icon: tmp36,
            trailing: tmp41,
            disabled: undefined !== disabled && disabled,
            accessible: undefined === accessible || accessible,
            accessibilityLabel,
            accessibilityHint,
            accessibilityRole,
            accessibilityState,
            accessibilityActions,
            onAccessibilityAction,
            onAccessibilityTap,
            labelLineClamp: numberOfLines,
            delayLongPress,
            onPress,
            onLongPress,
          };
          const tmp48 = labelStyle(label(subLabel[9]).TableRow, obj3);
          cResult[8] = accessibilityActions;
          cResult[9] = accessibilityHint;
          cResult[10] = accessibilityLabel;
          cResult[11] = accessibilityRole;
          cResult[12] = accessibilityState;
          cResult[13] = undefined === accessible || accessible;
          cResult[14] = delayLongPress;
          cResult[15] = undefined !== disabled && disabled;
          cResult[16] = tmp8;
          cResult[17] = numberOfLines;
          cResult[18] = onAccessibilityAction;
          cResult[19] = onAccessibilityTap;
          cResult[20] = onLongPress;
          cResult[21] = onPress;
          cResult[22] = tmp26;
          cResult[23] = tmp36;
          cResult[24] = tmp31;
          cResult[25] = tmp41;
          cResult[26] = tmp7;
          cResult[27] = variant;
          cResult[28] = tmp48;
          tmp46 = tmp48;
        } else {
          if (cResult[29] === accessibilityState) {
            let tmp10;
            if (cResult[30] === (undefined !== disabled && disabled)) {
              tmp10 = cResult[31];
            }
            if (cResult[32] === label) {
              if (cResult[33] === labelStyle) {
                if (cResult[34] === leading) {
                  if (cResult[35] === leadingStyle) {
                    if (cResult[36] === numberOfLines) {
                      if (cResult[37] === tmp9.label) {
                        if (cResult[38] === tmp9.leading) {
                          if (cResult[39] === tmp9.trailing) {
                            if (cResult[40] === subLabel) {
                              if (cResult[41] === trailing) {
                                let tmp16;
                                let tmp19Result;
                                if (cResult[42] === trailingWrapperStyle) {
                                  tmp16 = cResult[43];
                                }
                                if (cResult[44] === DEPRECATED_style) {
                                  if (cResult[45] === accessibilityActions) {
                                    if (cResult[46] === accessibilityHint) {
                                      if (cResult[47] === accessibilityLabel) {
                                        if (cResult[48] === accessibilityRole) {
                                          if (cResult[49] === tmp10) {
                                            if (cResult[50] === (undefined === accessible || accessible)) {
                                              if (cResult[51] === delayLongPress) {
                                                if (cResult[52] === (undefined !== disabled && disabled)) {
                                                  if (cResult[53] === (undefined !== hasError && hasError)) {
                                                    if (cResult[54] === isForm) {
                                                      if (cResult[55] === (null != onPress || null != onLongPress)) {
                                                        if (cResult[56] === onAccessibilityAction) {
                                                          if (cResult[57] === onAccessibilityTap) {
                                                            if (cResult[58] === onLongPress) {
                                                              if (cResult[59] === onPress) {
                                                                if (cResult[60] === onPressOut) {
                                                                  if (cResult[61] === ref) {
                                                                    if (cResult[62] === tmp16) {
                                                                      if (cResult[63] === style) {
                                                                        if (cResult[64] === tmp9.container) {
                                                                          if (cResult[65] === tmp9.disabled) {
                                                                            let tmp18;
                                                                            if (cResult[66] === tmp9.error) {
                                                                              tmp18 = cResult[67];
                                                                            }
                                                                            return tmp18;
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                if (null != onPress || null != onLongPress) {
                                  let obj4 = {
                                    ref,
                                    style: items,
                                    disabled: undefined !== disabled && disabled,
                                    accessible: true,
                                    accessibilityRole: str,
                                    accessibilityState: tmp10,
                                    accessibilityLabel,
                                    accessibilityHint,
                                    accessibilityActions,
                                    onAccessibilityAction,
                                    onAccessibilityTap: tmp24,
                                    onPress: tmp25,
                                    onLongPress,
                                    onPressOut,
                                    delayLongPress,
                                    unstable_pressDelay: num16,
                                    children: tmp16(),
                                  };
                                  items = [tmp9.container, DEPRECATED_style, style, ,];
                                  let error2 = tmp5;
                                  const PressableHighlight = tmp(subLabel[12]).PressableHighlight;
                                  if (undefined !== hasError && hasError) {
                                    error2 = tmp9.error;
                                  }
                                  items[3] = error2;
                                  let disabled1 = null;
                                  if (undefined !== disabled && disabled) {
                                    disabled1 = tmp9.disabled;
                                  }
                                  items[4] = disabled1;
                                  str = accessibilityRole;
                                  if (accessibilityRole == null) {
                                    str = "button";
                                  }
                                  tmp24 = undefined;
                                  if (!(undefined !== disabled && disabled)) {
                                    tmp24 = onAccessibilityTap;
                                  }
                                  tmp25 = undefined;
                                  if (!(undefined !== disabled && disabled)) {
                                    tmp25 = onPress;
                                  }
                                  num16 = undefined;
                                  if (isForm) {
                                    num16 = 130;
                                  }
                                  tmp19Result = labelStyle(PressableHighlight, obj4);
                                } else {
                                  let obj5 = {
                                    ref,
                                    style: items1,
                                    accessible: undefined === accessible || accessible,
                                    accessibilityRole,
                                    accessibilityState: tmp10,
                                    accessibilityLabel,
                                    accessibilityHint,
                                    accessibilityActions,
                                    onAccessibilityAction,
                                    onAccessibilityTap,
                                    children: tmp16(),
                                  };
                                  items1 = [tmp9.container, DEPRECATED_style, style, ,];
                                  let error = tmp5;
                                  if (undefined !== hasError && hasError) {
                                    error = tmp9.error;
                                  }
                                  items1[3] = error;
                                  let disabled2 = null;
                                  if (undefined !== disabled && disabled) {
                                    disabled2 = tmp9.disabled;
                                  }
                                  items1[4] = disabled2;
                                  tmp19Result = labelStyle(numberOfLines, obj5);
                                }
                                cResult[44] = DEPRECATED_style;
                                cResult[45] = accessibilityActions;
                                cResult[46] = accessibilityHint;
                                cResult[47] = accessibilityLabel;
                                cResult[48] = accessibilityRole;
                                cResult[49] = tmp10;
                                cResult[50] = undefined === accessible || accessible;
                                cResult[51] = delayLongPress;
                                cResult[52] = undefined !== disabled && disabled;
                                cResult[53] = undefined !== hasError && hasError;
                                cResult[54] = isForm;
                                cResult[55] = null != onPress || null != onLongPress;
                                cResult[56] = onAccessibilityAction;
                                cResult[57] = onAccessibilityTap;
                                cResult[58] = onLongPress;
                                cResult[59] = onPress;
                                cResult[60] = onPressOut;
                                cResult[61] = ref;
                                cResult[62] = tmp16;
                                cResult[63] = style;
                                cResult[64] = tmp9.container;
                                cResult[65] = tmp9.disabled;
                                cResult[66] = tmp9.error;
                                cResult[67] = tmp19Result;
                                tmp18 = tmp19Result;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            function se() {
              let items;
              let items2;
              let items3;
              if (typeof label !== "function") {
                let tmp7;
                if (!react.isValidElement(label)) {
                  const obj = { numberOfLines, text: label, style: labelStyle };
                  tmp7 = hasOwnProperty(FormLabelDefault, obj);
                }
                if (typeof subLabel !== "function") {
                  let tmp13;
                  let tmp27;
                  let tmp33;
                  if (!react.isValidElement(subLabel)) {
                    tmp13 = null;
                    if (null != subLabel) {
                      const obj2 = { text: subLabel, numberOfLines };
                      tmp13 = hasOwnProperty(FormSubLabelDefault, obj2);
                    }
                  }
                  if (typeof leading === "function") {
                    let tmp23 = null;
                    if (null != leading) {
                      let tmp25 = leading;
                      if (!react.isValidElement(leading)) {
                        tmp25 = hasOwnProperty(leading, {});
                      }
                      tmp23 = tmp25;
                    }
                    tmp27 = tmp23;
                  } else {
                    tmp27 = leading;
                  }
                  if (typeof trailing === "function") {
                    let tmp29 = null;
                    if (null != trailing) {
                      let tmp31 = trailing;
                      if (!react.isValidElement(trailing)) {
                        tmp31 = hasOwnProperty(trailing, {});
                      }
                      tmp29 = tmp31;
                    }
                    tmp33 = tmp29;
                  } else {
                    tmp33 = trailing;
                  }
                  let tmp37 = null;
                  const Fragment = react.Fragment;
                  if (null != leading) {
                    const obj3 = { style: items, children: tmp27 };
                    items = [closure_8.leading, leadingStyle];
                    tmp37 = hasOwnProperty(React3, obj3);
                  }
                  const items1 = [tmp37, ,];
                  const obj4 = { style: closure_8.label, children: items2 };
                  items2 = [tmp7, tmp13];
                  items1[1] = metroRequire(React3, obj4);
                  let tmp44 = null;
                  if (null != trailing) {
                    const obj5 = { style: items3, children: tmp33 };
                    items3 = [closure_8.trailing, trailingWrapperStyle];
                    tmp44 = hasOwnProperty(React3, obj5);
                  }
                  const obj6 = { children: items1 };
                  items1[2] = tmp44;
                  return metroRequire(Fragment, obj6);
                }
                let tmp18 = null;
                if (null != subLabel) {
                  let tmp20 = subLabel;
                  if (!react.isValidElement(subLabel)) {
                    tmp20 = hasOwnProperty(subLabel, {});
                  }
                  tmp18 = tmp20;
                }
                tmp13 = tmp18;
              }
              let tmp8 = null;
              if (null != label) {
                let tmp10 = label;
                if (!react.isValidElement(label)) {
                  tmp10 = hasOwnProperty(label, {});
                }
                tmp8 = tmp10;
              }
              tmp7 = tmp8;
            }
            cResult[32] = label;
            cResult[33] = labelStyle;
            cResult[34] = leading;
            cResult[35] = leadingStyle;
            cResult[36] = numberOfLines;
            cResult[37] = tmp9.label;
            cResult[38] = tmp9.leading;
            cResult[39] = tmp9.trailing;
            cResult[40] = subLabel;
            cResult[41] = trailing;
            cResult[42] = trailingWrapperStyle;
            cResult[43] = se;
            tmp16 = se;
          }
          let obj6 = { disabled: undefined !== disabled && disabled };
          const merged = Object.assign(accessibilityState);
          cResult[29] = accessibilityState;
          cResult[30] = undefined !== disabled && disabled;
          cResult[31] = obj6;
          tmp10 = obj6;
        }
      }
    : (label, ref) => {
        let DEPRECATED_style;
        let accessibilityActions;
        let accessibilityHint;
        let accessibilityLabel;
        let accessibilityRole;
        let accessibilityState;
        let closure_5;
        let closure_6;
        let delayLongPress;
        let items;
        let items1;
        let num2;
        let numberOfLines;
        let onAccessibilityAction;
        let onAccessibilityTap;
        let onLongPress;
        let onPress;
        let start;
        let str;
        let style;
        let subLabel;
        let tmp13;
        let tmp14;
        label = label.label;
        const leading = label.leading;
        ({ onPress, onLongPress, DEPRECATED_style, subLabel } = label);
        const trailing = label.trailing;
        let flag = label.disabled;
        const onPressOut = label.onPressOut;
        if (flag === undefined) {
          flag = false;
        }
        let flag2 = label.hasError;
        if (flag2 === undefined) {
          flag2 = false;
        }
        let flag3 = label.accessible;
        if (flag3 === undefined) {
          flag3 = true;
        }
        ({
          accessibilityLabel,
          accessibilityHint,
          accessibilityRole,
          accessibilityState,
          accessibilityActions,
          onAccessibilityAction,
          onAccessibilityTap,
          numberOfLines,
        } = label);
        ({
          style,
          labelStyle: closure_5,
          trailingWrapperStyle: closure_6,
          leadingStyle: closure_7,
          delayLongPress,
          start,
        } = label);
        if (start === undefined) {
          start = false;
        }
        let flag4 = label.end;
        if (flag4 === undefined) {
          flag4 = false;
        }
        const variant = label.variant;
        const tmp = closure_7();
        let closure_8 = tmp;
        let obj = trailing;
        const isForm = trailing.useContext(label(subLabel[7]).FormContext).isForm;
        if (trailing.useContext(label(subLabel[8]).RedesignCompatContext)) {
          let tmp18;
          if (typeof label === "function") {
            let tmp15 = null;
            if (null != label) {
              let tmp16 = label;
              if (!obj.isValidElement(label)) {
                tmp16 = style(label, {});
              }
              tmp15 = tmp16;
            }
            tmp18 = tmp15;
          } else {
            tmp18 = label;
          }
          if (typeof subLabel !== "function") {
            let tmp19;
            let tmp26;
            let tmp30;
            if (!obj.isValidElement(subLabel)) {
              tmp19 = null;
              if (null != subLabel) {
                tmp19 = subLabel;
              }
            }
            if (typeof leading === "function") {
              let tmp23 = null;
              if (null != leading) {
                let tmp24 = leading;
                if (!obj.isValidElement(leading)) {
                  tmp24 = style(leading, {});
                }
                tmp23 = tmp24;
              }
              tmp26 = tmp23;
            } else {
              tmp26 = leading;
            }
            if (typeof trailing === "function") {
              let tmp27 = null;
              if (null != trailing) {
                let tmp28 = trailing;
                if (!obj.isValidElement(trailing)) {
                  tmp28 = style(trailing, {});
                }
                tmp27 = tmp28;
              }
              tmp30 = tmp27;
            } else {
              tmp30 = trailing;
            }
            let obj2 = {
              variant,
              start,
              end: flag4,
              label: tmp18,
              subLabel: tmp19,
              icon: tmp26,
              trailing: tmp30,
              disabled: flag,
              accessible: flag3,
              accessibilityLabel,
              accessibilityHint,
              accessibilityRole,
              accessibilityState,
              accessibilityActions,
              onAccessibilityAction,
              onAccessibilityTap,
              labelLineClamp: numberOfLines,
              delayLongPress,
              onPress,
              onLongPress,
            };
            return style(label(subLabel[9]).TableRow, obj2);
          }
          let tmp20 = null;
          if (null != subLabel) {
            let tmp21 = subLabel;
            if (!obj.isValidElement(subLabel)) {
              tmp21 = style(subLabel, {});
            }
            tmp20 = tmp21;
          }
          tmp19 = tmp20;
        } else {
          function renderInnerView() {
            let items;
            let items2;
            let items3;
            if (typeof label !== "function") {
              let tmp7;
              if (!react.isValidElement(label)) {
                const obj = { numberOfLines, text: label, style };
                tmp7 = hasOwnProperty(FormLabelDefault, obj);
              }
              if (typeof subLabel !== "function") {
                let tmp13;
                let tmp27;
                let tmp33;
                if (!react.isValidElement(subLabel)) {
                  tmp13 = null;
                  if (null != subLabel) {
                    const obj2 = { text: subLabel, numberOfLines };
                    tmp13 = hasOwnProperty(FormSubLabelDefault, obj2);
                  }
                }
                if (typeof leading === "function") {
                  let tmp23 = null;
                  if (null != leading) {
                    let tmp25 = leading;
                    if (!react.isValidElement(leading)) {
                      tmp25 = hasOwnProperty(leading, {});
                    }
                    tmp23 = tmp25;
                  }
                  tmp27 = tmp23;
                } else {
                  tmp27 = leading;
                }
                if (typeof trailing === "function") {
                  let tmp29 = null;
                  if (null != trailing) {
                    let tmp31 = trailing;
                    if (!react.isValidElement(trailing)) {
                      tmp31 = hasOwnProperty(trailing, {});
                    }
                    tmp29 = tmp31;
                  }
                  tmp33 = tmp29;
                } else {
                  tmp33 = trailing;
                }
                let tmp37 = null;
                const Fragment = react.Fragment;
                if (null != leading) {
                  const obj3 = { style: items, children: tmp27 };
                  items = [closure_8.leading, closure_7];
                  tmp37 = hasOwnProperty(React3, obj3);
                }
                const items1 = [tmp37, ,];
                const obj4 = { style: closure_8.label, children: items2 };
                items2 = [tmp7, tmp13];
                items1[1] = metroRequire(React3, obj4);
                let tmp44 = null;
                if (null != trailing) {
                  const obj5 = { style: items3, children: tmp33 };
                  items3 = [closure_8.trailing, closure_6];
                  tmp44 = hasOwnProperty(React3, obj5);
                }
                const obj6 = { children: items1 };
                items1[2] = tmp44;
                return metroRequire(Fragment, obj6);
              }
              let tmp18 = null;
              if (null != subLabel) {
                let tmp20 = subLabel;
                if (!react.isValidElement(subLabel)) {
                  tmp20 = hasOwnProperty(subLabel, {});
                }
                tmp18 = tmp20;
              }
              tmp13 = tmp18;
            }
            let tmp8 = null;
            if (null != label) {
              let tmp10 = label;
              if (!react.isValidElement(label)) {
                tmp10 = hasOwnProperty(label, {});
              }
              tmp8 = tmp10;
            }
            tmp7 = tmp8;
          }
          let obj3 = { disabled: flag };
          const merged = Object.assign(accessibilityState);
          let tmp8 = null;
          if (null == onPress) {
            let tmp11Result;
            if (null == onLongPress) {
              let obj4 = {
                ref,
                style: items,
                accessible: flag3,
                accessibilityRole,
                accessibilityState: obj3,
                accessibilityLabel,
                accessibilityHint,
                accessibilityActions,
                onAccessibilityAction,
                onAccessibilityTap,
                children: renderInnerView(),
              };
              items = [tmp.container, DEPRECATED_style, style, ,];
              const error = flag2 && tmp.error;
              items[3] = error;
              let disabled = null;
              if (flag) {
                disabled = tmp.disabled;
              }
              items[4] = disabled;
              tmp11Result = style(numberOfLines, obj4);
            }
            return tmp11Result;
          }
          let obj5 = {
            ref,
            style: items1,
            disabled: flag,
            accessible: true,
            accessibilityRole: str,
            accessibilityState: obj3,
            accessibilityLabel,
            accessibilityHint,
            accessibilityActions,
            onAccessibilityAction,
            onAccessibilityTap: tmp13,
            onPress: tmp14,
            onLongPress,
            onPressOut,
            delayLongPress,
            unstable_pressDelay: num2,
            children: renderInnerView(),
          };
          items1 = [tmp.container, DEPRECATED_style, style, ,];
          const PressableHighlight = tmp2(subLabel[12]).PressableHighlight;
          if (flag2) {
            flag2 = tmp.error;
          }
          items1[3] = flag2;
          let disabled1 = null;
          if (flag) {
            disabled1 = tmp.disabled;
          }
          items1[4] = disabled1;
          str = accessibilityRole;
          if (accessibilityRole == null) {
            str = "button";
          }
          tmp13 = undefined;
          if (!flag) {
            tmp13 = onAccessibilityTap;
          }
          tmp14 = undefined;
          if (!flag) {
            tmp14 = onPress;
          }
          num2 = undefined;
          if (isForm) {
            num2 = 130;
          }
          tmp11Result = style(PressableHighlight, obj5);
        }
      },
);
let obj2 = assign({}, forwardRefResult, obj);
const result = size.fileFinishedImporting("design/void/Form/native/FormRow.tsx");

export default obj2;
