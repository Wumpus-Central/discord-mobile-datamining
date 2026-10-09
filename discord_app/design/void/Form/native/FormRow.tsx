// discord_app/design/void/Form/native/FormRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Form_FormCheckboxDefault from "FormCheckbox.tsx";
import FormLabelDefault from "FormLabel.tsx";
import FormSubLabelDefault from "FormSubLabel.tsx";
import FormArrowDefault from "FormArrow.tsx";
import Form_FormRadioDefault from "FormRadio.tsx";
import FormCheckmarkDefault from "FormCheckmark.tsx";
import FormIconDefault from "FormIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ Platform, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let closure_7 = createStyles.createStyles(() => {
  const obj = { container: null, label: null, leading: null, trailing: null, disabled: null, error: null };
  const merged = Object.assign({ paddingHorizontal: 16, paddingVertical: 16 });
  obj.container = { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" };
  obj.label = { flexShrink: 1, flexGrow: 1, flexBasis: "30%" };
  obj.leading = { flexGrow: 0, marginRight: 16 };
  obj.trailing = { marginLeft: "auto", paddingLeft: 16, textAlign: "right", flexShrink: 0 };
  obj.disabled = { opacity: 0.5 };
  const merged1 = Object.assign({ paddingHorizontal: 14, paddingVertical: 14 });
  obj.error = { borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL, borderWidth: 2 };
  return obj;
});
const ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FormRow(label) {
      const cResult = label(subLabel[6]).c(68);
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
      ({ style: disabled2, labelStyle } = label);
      const leadingStyle = label.leadingStyle;
      ({ delayLongPress, start, end, variant, ref } = label);
      let error = leadingStyle();
      const isForm = trailing.useContext(tmp(subLabel[7]).FormContext).isForm;
      if (trailing.useContext(label(subLabel[8]).RedesignCompatContext)) {
        if (cResult[0] !== label) {
          if (typeof label === "function") {
            let tmp24 = null;
            if (null != label) {
              let tmp25 = label;
              if (!obj2.isValidElement(label)) {
                tmp25 = labelStyle(label, {});
              }
              tmp24 = tmp25;
            }
            let tmp27 = tmp24;
          } else {
            tmp27 = label;
          }
          cResult[0] = label;
          cResult[1] = tmp27;
          let tmp23 = tmp27;
        } else {
          tmp23 = cResult[1];
        }
        if (cResult[2] !== subLabel) {
          if (typeof subLabel !== "function") {
            if (!obj2.isValidElement(subLabel)) {
              let tmp29 = null;
              if (null != subLabel) {
                tmp29 = subLabel;
              }
            }
            cResult[2] = subLabel;
            cResult[3] = tmp29;
          }
          let tmp30 = null;
          if (null != subLabel) {
            let tmp31 = subLabel;
            if (!obj2.isValidElement(subLabel)) {
              tmp31 = labelStyle(subLabel, {});
            }
            tmp30 = tmp31;
          }
          tmp29 = tmp30;
        } else {
          if (cResult[4] !== leading) {
            if (typeof leading === "function") {
              let tmp35 = null;
              if (null != leading) {
                let tmp36 = leading;
                if (!obj2.isValidElement(leading)) {
                  tmp36 = labelStyle(leading, {});
                }
                tmp35 = tmp36;
              }
              let tmp38 = tmp35;
            } else {
              tmp38 = leading;
            }
            cResult[4] = leading;
            cResult[5] = tmp38;
            let tmp34 = tmp38;
          } else {
            tmp34 = cResult[5];
          }
          if (cResult[6] !== trailing) {
            if (typeof trailing === "function") {
              let tmp40 = null;
              if (null != trailing) {
                let tmp41 = trailing;
                if (!obj2.isValidElement(trailing)) {
                  tmp41 = labelStyle(trailing, {});
                }
                tmp40 = tmp41;
              }
              let tmp43 = tmp40;
            } else {
              tmp43 = trailing;
            }
            cResult[6] = trailing;
            cResult[7] = tmp43;
            let tmp39 = tmp43;
          } else {
            tmp39 = cResult[7];
          }
          if (cResult[8] === accessibilityActions) {
            if (cResult[9] === accessibilityHint) {
              if (cResult[10] === accessibilityLabel) {
                if (cResult[11] === accessibilityRole) {
                  if (cResult[12] === accessibilityState) {
                    if (cResult[13] === tmp6) {
                      if (cResult[14] === delayLongPress) {
                        if (cResult[15] === tmp4) {
                          if (cResult[16] === tmp8) {
                            if (cResult[17] === numberOfLines) {
                              if (cResult[18] === onAccessibilityAction) {
                                if (cResult[19] === onAccessibilityTap) {
                                  if (cResult[20] === onLongPress) {
                                    if (cResult[21] === onPress) {
                                      if (cResult[22] === tmp23) {
                                        if (cResult[23] === tmp34) {
                                          if (cResult[24] === tmp28) {
                                            if (cResult[25] === tmp39) {
                                              if (cResult[26] === tmp7) {
                                                if (cResult[27] === variant) {
                                                  let tmp44 = cResult[28];
                                                }
                                                return tmp44;
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
            label: tmp23,
            subLabel: cResult[3],
            icon: tmp34,
            trailing: tmp39,
            disabled: tmp4,
            accessible: tmp6,
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
          const tmp46 = labelStyle(tmp(subLabel[9]).TableRow, obj3);
          cResult[8] = accessibilityActions;
          cResult[9] = accessibilityHint;
          cResult[10] = accessibilityLabel;
          cResult[11] = accessibilityRole;
          cResult[12] = accessibilityState;
          cResult[13] = tmp6;
          cResult[14] = delayLongPress;
          cResult[15] = tmp4;
          cResult[16] = tmp8;
          cResult[17] = numberOfLines;
          cResult[18] = onAccessibilityAction;
          cResult[19] = onAccessibilityTap;
          cResult[20] = onLongPress;
          cResult[21] = onPress;
          cResult[22] = tmp23;
          cResult[23] = tmp34;
          cResult[24] = cResult[3];
          cResult[25] = tmp39;
          cResult[26] = tmp7;
          cResult[27] = variant;
          cResult[28] = tmp46;
          tmp44 = tmp46;
        }
      } else {
        if (cResult[29] === accessibilityState) {
          if (cResult[30] === tmp4) {
            let tmp9 = cResult[31];
          }
          let num4 = null;
          if (cResult[32] === label) {
            if (cResult[33] === labelStyle) {
              if (cResult[34] === leading) {
                if (cResult[35] === leadingStyle) {
                  if (cResult[36] === numberOfLines) {
                    if (cResult[37] === error.label) {
                      if (cResult[38] === error.leading) {
                        if (cResult[39] === error.trailing) {
                          if (cResult[40] === subLabel) {
                            if (cResult[41] === trailing) {
                              if (cResult[42] === trailingWrapperStyle) {
                                let tmp14 = cResult[43];
                              }
                              if (cResult[44] === DEPRECATED_style) {
                                if (cResult[45] === accessibilityActions) {
                                  if (cResult[46] === accessibilityHint) {
                                    if (cResult[47] === accessibilityLabel) {
                                      if (cResult[48] === accessibilityRole) {
                                        if (cResult[49] === tmp9) {
                                          if (cResult[50] === tmp6) {
                                            if (cResult[51] === delayLongPress) {
                                              if (cResult[52] === tmp4) {
                                                if (cResult[53] === tmp5) {
                                                  if (cResult[54] === isForm) {
                                                    if (cResult[55] === tmp13) {
                                                      if (cResult[56] === onAccessibilityAction) {
                                                        if (cResult[57] === onAccessibilityTap) {
                                                          if (cResult[58] === onLongPress) {
                                                            if (cResult[59] === onPress) {
                                                              if (cResult[60] === onPressOut) {
                                                                if (cResult[61] === ref) {
                                                                  if (cResult[62] === tmp14) {
                                                                    if (cResult[63] === disabled2) {
                                                                      if (cResult[64] === error.container) {
                                                                        if (cResult[65] === error.disabled) {
                                                                          if (cResult[66] === error.error) {
                                                                            return cResult[67];
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
                              }
                              if (tmp13) {
                                let obj4 = {
                                  ref,
                                  style: null,
                                  disabled: null,
                                  accessible: true,
                                  accessibilityRole: null,
                                  accessibilityState: null,
                                  accessibilityLabel: null,
                                  accessibilityHint: null,
                                  accessibilityActions: null,
                                  onAccessibilityAction: null,
                                  onAccessibilityTap: null,
                                  onPress: null,
                                  onLongPress: null,
                                  onPressOut: null,
                                  delayLongPress: null,
                                  unstable_pressDelay: null,
                                  children: null,
                                };
                                let items = [error.container, DEPRECATED_style, disabled2, ,];
                                let error3 = tmp5;
                                if (tmp5) {
                                  error3 = error.error;
                                }
                                items[3] = error3;
                                let disabled1 = null;
                                if (tmp4) {
                                  disabled1 = error.disabled;
                                }
                                items[4] = disabled1;
                                obj4.style = items;
                                obj4.disabled = tmp4;
                                let str = accessibilityRole;
                                if (accessibilityRole == num4) {
                                  str = "button";
                                }
                                obj4.accessibilityRole = str;
                                obj4.accessibilityState = tmp9;
                                obj4.accessibilityLabel = accessibilityLabel;
                                obj4.accessibilityHint = accessibilityHint;
                                obj4.accessibilityActions = accessibilityActions;
                                obj4.onAccessibilityAction = onAccessibilityAction;
                                let tmp20;
                                if (!tmp4) {
                                  tmp20 = onAccessibilityTap;
                                }
                                obj4.onAccessibilityTap = tmp20;
                                let tmp21;
                                if (!tmp4) {
                                  tmp21 = onPress;
                                }
                                obj4.onPress = tmp21;
                                obj4.onLongPress = onLongPress;
                                obj4.onPressOut = onPressOut;
                                obj4.delayLongPress = delayLongPress;
                                num4 = undefined;
                                if (isForm) {
                                  num4 = 130;
                                }
                                obj4.unstable_pressDelay = num4;
                                obj4.children = tmp14();
                                let tmp15Result = labelStyle(tmp(subLabel[12]).PressableHighlight, obj4);
                              } else {
                                let obj5 = {
                                  ref,
                                  style: null,
                                  accessible: null,
                                  accessibilityRole: null,
                                  accessibilityState: null,
                                  accessibilityLabel: null,
                                  accessibilityHint: null,
                                  accessibilityActions: null,
                                  onAccessibilityAction: null,
                                  onAccessibilityTap: null,
                                  children: null,
                                };
                                let items1 = [error.container, DEPRECATED_style, disabled2, ,];
                                let error2 = tmp5;
                                if (tmp5) {
                                  error2 = error.error;
                                }
                                items1[3] = error2;
                                let disabled3 = null;
                                if (tmp4) {
                                  disabled3 = error.disabled;
                                }
                                items1[4] = disabled3;
                                obj5.style = items1;
                                obj5.accessible = tmp6;
                                obj5.accessibilityRole = accessibilityRole;
                                obj5.accessibilityState = tmp9;
                                obj5.accessibilityLabel = accessibilityLabel;
                                obj5.accessibilityHint = accessibilityHint;
                                obj5.accessibilityActions = accessibilityActions;
                                obj5.onAccessibilityAction = onAccessibilityAction;
                                obj5.onAccessibilityTap = onAccessibilityTap;
                                obj5.children = tmp14();
                                tmp15Result = labelStyle(numberOfLines, obj5);
                              }
                              cResult[44] = DEPRECATED_style;
                              cResult[45] = accessibilityActions;
                              cResult[46] = accessibilityHint;
                              cResult[47] = accessibilityLabel;
                              cResult[48] = accessibilityRole;
                              cResult[49] = tmp9;
                              cResult[50] = tmp6;
                              cResult[51] = delayLongPress;
                              cResult[52] = tmp4;
                              cResult[53] = tmp5;
                              cResult[54] = isForm;
                              cResult[55] = tmp13;
                              cResult[56] = onAccessibilityAction;
                              cResult[57] = onAccessibilityTap;
                              cResult[58] = onLongPress;
                              cResult[59] = onPress;
                              cResult[60] = onPressOut;
                              cResult[61] = ref;
                              cResult[62] = tmp14;
                              cResult[63] = disabled2;
                              ({ container: tmp3[64], disabled: disabled2 } = error);
                              cResult[65] = disabled2;
                              error = error.error;
                              cResult[66] = error;
                              cResult[67] = tmp15Result;
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
          function renderInnerView() {
            if (typeof label !== "function") {
              if (!noop.isValidElement(label)) {
                const obj = { numberOfLines, text: label, style: labelStyle };
                let tmp7 = hasOwnProperty(FormLabelDefault, obj);
              }
              if (typeof subLabel !== "function") {
                if (!noop.isValidElement(subLabel)) {
                  let tmp13 = null;
                  if (null != subLabel) {
                    const obj2 = { text: subLabel, numberOfLines };
                    tmp13 = hasOwnProperty(FormSubLabelDefault, obj2);
                  }
                }
                if (typeof leading === "function") {
                  let tmp23 = null;
                  if (null != leading) {
                    let tmp25 = leading;
                    if (!noop.isValidElement(leading)) {
                      tmp25 = hasOwnProperty(leading, {});
                    }
                    tmp23 = tmp25;
                  }
                  let tmp27 = tmp23;
                } else {
                  tmp27 = leading;
                }
                if (typeof trailing === "function") {
                  let tmp29 = null;
                  if (null != trailing) {
                    let tmp31 = trailing;
                    if (!noop.isValidElement(trailing)) {
                      tmp31 = hasOwnProperty(trailing, {});
                    }
                    tmp29 = tmp31;
                  }
                  let tmp33 = tmp29;
                } else {
                  tmp33 = trailing;
                }
                let tmp37 = null;
                if (null != leading) {
                  const obj3 = { style: null, children: null };
                  const items = [error.leading, leadingStyle];
                  obj3.style = items;
                  obj3.children = tmp27;
                  tmp37 = hasOwnProperty(React4, obj3);
                }
                const items1 = [tmp37, ,];
                const obj4 = { style: error.label, children: null };
                const items2 = [tmp7, tmp13];
                obj4.children = items2;
                items1[1] = timestampProducer(React4, obj4);
                let tmp44 = null;
                if (null != trailing) {
                  const obj5 = { style: null, children: null };
                  const items3 = [error.trailing, trailingWrapperStyle];
                  obj5.style = items3;
                  obj5.children = tmp33;
                  tmp44 = hasOwnProperty(React4, obj5);
                }
                const obj6 = { children: null };
                items1[2] = tmp44;
                obj6.children = items1;
                return timestampProducer(noop.Fragment, obj6);
              }
              let tmp18 = null;
              if (null != subLabel) {
                let tmp20 = subLabel;
                if (!noop.isValidElement(subLabel)) {
                  tmp20 = hasOwnProperty(subLabel, {});
                }
                tmp18 = tmp20;
              }
              tmp13 = tmp18;
            }
            let tmp8 = null;
            if (null != label) {
              let tmp10 = label;
              if (!noop.isValidElement(label)) {
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
          cResult[37] = error.label;
          cResult[38] = error.leading;
          cResult[39] = error.trailing;
          cResult[40] = subLabel;
          cResult[41] = trailing;
          cResult[42] = trailingWrapperStyle;
          cResult[43] = renderInnerView;
          tmp14 = renderInnerView;
        }
        let obj6 = { disabled: tmp4 };
        const merged = Object.assign(accessibilityState);
        cResult[29] = accessibilityState;
        cResult[30] = tmp4;
        cResult[31] = obj6;
        tmp9 = obj6;
      }
      let obj = label(subLabel[6]);
    }
  : function FormRow(label) {
      label = label.label;
      const leading = label.leading;
      ({ onPress, onLongPress, DEPRECATED_style, subLabel } = label);
      const trailing = label.trailing;
      let flag = label.disabled;
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
      const tmp = closure_7();
      closure_8 = tmp;
      if (trailing.useContext(label(subLabel[8]).RedesignCompatContext)) {
        if (typeof label === "function") {
          let tmp14 = null;
          if (null != label) {
            let tmp15 = label;
            if (!obj.isValidElement(label)) {
              tmp15 = style(label, {});
            }
            tmp14 = tmp15;
          }
          let tmp17 = tmp14;
        } else {
          tmp17 = label;
        }
        if (typeof subLabel !== "function") {
          if (!obj.isValidElement(subLabel)) {
            let tmp18 = null;
            if (null != subLabel) {
              tmp18 = subLabel;
            }
          }
          if (typeof leading === "function") {
            let tmp22 = null;
            if (null != leading) {
              let tmp23 = leading;
              if (!obj.isValidElement(leading)) {
                tmp23 = style(leading, {});
              }
              tmp22 = tmp23;
            }
            let tmp25 = tmp22;
          } else {
            tmp25 = leading;
          }
          if (typeof trailing === "function") {
            let tmp26 = null;
            if (null != trailing) {
              let tmp27 = trailing;
              if (!obj.isValidElement(trailing)) {
                tmp27 = style(trailing, {});
              }
              tmp26 = tmp27;
            }
            let tmp29 = tmp26;
          } else {
            tmp29 = trailing;
          }
          let obj2 = {
            variant: label.variant,
            start,
            end: flag4,
            label: tmp17,
            subLabel: tmp18,
            icon: tmp25,
            trailing: tmp29,
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
          return style(tmp2(subLabel[9]).TableRow, obj2);
        }
        let tmp19 = null;
        if (null != subLabel) {
          let tmp20 = subLabel;
          if (!obj.isValidElement(subLabel)) {
            tmp20 = style(subLabel, {});
          }
          tmp19 = tmp20;
        }
        tmp18 = tmp19;
      } else {
        function renderInnerView() {
          if (typeof label !== "function") {
            if (!noop.isValidElement(label)) {
              const obj = { numberOfLines, text: label, style };
              let tmp7 = hasOwnProperty(FormLabelDefault, obj);
            }
            if (typeof subLabel !== "function") {
              if (!noop.isValidElement(subLabel)) {
                let tmp13 = null;
                if (null != subLabel) {
                  const obj2 = { text: subLabel, numberOfLines };
                  tmp13 = hasOwnProperty(FormSubLabelDefault, obj2);
                }
              }
              if (typeof leading === "function") {
                let tmp23 = null;
                if (null != leading) {
                  let tmp25 = leading;
                  if (!noop.isValidElement(leading)) {
                    tmp25 = hasOwnProperty(leading, {});
                  }
                  tmp23 = tmp25;
                }
                let tmp27 = tmp23;
              } else {
                tmp27 = leading;
              }
              if (typeof trailing === "function") {
                let tmp29 = null;
                if (null != trailing) {
                  let tmp31 = trailing;
                  if (!noop.isValidElement(trailing)) {
                    tmp31 = hasOwnProperty(trailing, {});
                  }
                  tmp29 = tmp31;
                }
                let tmp33 = tmp29;
              } else {
                tmp33 = trailing;
              }
              let tmp37 = null;
              if (null != leading) {
                const obj3 = { style: null, children: null };
                const items = [closure_8.leading, closure_1_7];
                obj3.style = items;
                obj3.children = tmp27;
                tmp37 = hasOwnProperty(React4, obj3);
              }
              const items1 = [tmp37, ,];
              const obj4 = { style: closure_8.label, children: null };
              const items2 = [tmp7, tmp13];
              obj4.children = items2;
              items1[1] = timestampProducer(React4, obj4);
              let tmp44 = null;
              if (null != trailing) {
                const obj5 = { style: null, children: null };
                const items3 = [closure_8.trailing, closure_1_6];
                obj5.style = items3;
                obj5.children = tmp33;
                tmp44 = hasOwnProperty(React4, obj5);
              }
              const obj6 = { children: null };
              items1[2] = tmp44;
              obj6.children = items1;
              return timestampProducer(noop.Fragment, obj6);
            }
            let tmp18 = null;
            if (null != subLabel) {
              let tmp20 = subLabel;
              if (!noop.isValidElement(subLabel)) {
                tmp20 = hasOwnProperty(subLabel, {});
              }
              tmp18 = tmp20;
            }
            tmp13 = tmp18;
          }
          let tmp8 = null;
          if (null != label) {
            let tmp10 = label;
            if (!noop.isValidElement(label)) {
              tmp10 = hasOwnProperty(label, {});
            }
            tmp8 = tmp10;
          }
          tmp7 = tmp8;
        }
        let obj3 = { disabled: flag };
        const merged = Object.assign(accessibilityState);
        if (null == onPress) {
          if (null == onLongPress) {
            let obj4 = {
              ref,
              style: null,
              accessible: null,
              accessibilityRole: null,
              accessibilityState: null,
              accessibilityLabel: null,
              accessibilityHint: null,
              accessibilityActions: null,
              onAccessibilityAction: null,
              onAccessibilityTap: null,
              children: null,
            };
            let items = [tmp.container, DEPRECATED_style, style, ,];
            let error = flag2;
            if (flag2) {
              error = tmp.error;
            }
            items[3] = error;
            let disabled = null;
            if (flag) {
              disabled = tmp.disabled;
            }
            items[4] = disabled;
            obj4.style = items;
            obj4.accessible = flag3;
            obj4.accessibilityRole = accessibilityRole;
            obj4.accessibilityState = obj3;
            obj4.accessibilityLabel = accessibilityLabel;
            obj4.accessibilityHint = accessibilityHint;
            obj4.accessibilityActions = accessibilityActions;
            obj4.onAccessibilityAction = onAccessibilityAction;
            obj4.onAccessibilityTap = onAccessibilityTap;
            obj4.children = renderInnerView();
            let tmp10Result = style(numberOfLines, obj4);
          }
          return tmp10Result;
        }
        let obj5 = {
          ref,
          style: null,
          disabled: null,
          accessible: true,
          accessibilityRole: null,
          accessibilityState: null,
          accessibilityLabel: null,
          accessibilityHint: null,
          accessibilityActions: null,
          onAccessibilityAction: null,
          onAccessibilityTap: null,
          onPress: null,
          onLongPress: null,
          onPressOut: null,
          delayLongPress: null,
          unstable_pressDelay: null,
          children: null,
        };
        let items1 = [tmp.container, DEPRECATED_style, style, ,];
        if (flag2) {
          flag2 = tmp.error;
        }
        items1[3] = flag2;
        let disabled1 = null;
        if (flag) {
          disabled1 = tmp.disabled;
        }
        items1[4] = disabled1;
        obj5.style = items1;
        obj5.disabled = flag;
        let str = accessibilityRole;
        if (accessibilityRole == null) {
          str = "button";
        }
        obj5.accessibilityRole = str;
        obj5.accessibilityState = obj3;
        obj5.accessibilityLabel = accessibilityLabel;
        obj5.accessibilityHint = accessibilityHint;
        obj5.accessibilityActions = accessibilityActions;
        obj5.onAccessibilityAction = onAccessibilityAction;
        let tmp12;
        if (!flag) {
          tmp12 = onAccessibilityTap;
        }
        obj5.onAccessibilityTap = tmp12;
        let tmp13;
        if (!flag) {
          tmp13 = onPress;
        }
        obj5.onPress = tmp13;
        obj5.onLongPress = onLongPress;
        obj5.onPressOut = label.onPressOut;
        obj5.delayLongPress = delayLongPress;
        let num2;
        if (trailing.useContext(label(subLabel[7]).FormContext).isForm) {
          num2 = 130;
        }
        obj5.unstable_pressDelay = num2;
        obj5.children = renderInnerView();
        tmp10Result = style(tmp2(subLabel[12]).PressableHighlight, obj5);
      }
    };
tmp4.Arrow = FormArrowDefault;
tmp4.Label = FormLabelDefault;
tmp4.SubLabel = FormSubLabelDefault;
tmp4.Radio = Form_FormRadioDefault;
tmp4.Checkbox = Form_FormCheckboxDefault;
tmp4.Checkmark = FormCheckmarkDefault;
tmp4.Icon = FormIconDefault;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormRow.tsx");

export default tmp4;
