// === Module 14461: UserProfileEditFormControls ===

// Module 14461 (UserProfileEditFormControls)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import Text_Text from "Text/Text" /* 4892 */;
import Pressables from "Pressables" /* 5916 */;
import TableRowArrow from "TableRowArrow" /* 6007 */;
import Input2 from "Input" /* 6430 */;
import FormSwitch from "FormSwitch" /* 6706 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8346 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onValueChange, text;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { button: obj2, buttonDisabled: { opacity: 0.5 }, buttonTextContainer: { flexGrow: 1, flexShrink: 1, flexDirection: "column" }, formControlText: { marginRight: "auto", flexShrink: 1 }, labelTrailing: obj3, newBadge: { paddingTop: 0 } };
obj2 = { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", gap: 12, padding: 12, borderColor: nativeDefault.colors.BORDER_STRONG, borderWidth: 1, borderRadius: nativeDefault.radii.md };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", marginLeft: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((text) => {
  const obj = react2;
  const cResult = obj.c(3);
  text = text.text;
  const tmp4 = closure_8();
  if (cResult[0] === tmp4.formControlText) {
    let tmp5;
    if (cResult[1] === text) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const obj2 = { variant: "text-sm/medium", color: "text-default", style: tmp4.formControlText, children: text };
  const tmp6 = metroRequire(Text_Text.Text, obj2);
  cResult[0] = tmp4.formControlText;
  cResult[1] = text;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((text) => {
  text = text.text;
  const obj = { variant: "text-sm/medium", color: "text-default", style: closure_8().formControlText, children: text };
  return metroRequire(Text_Text.Text, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((text) => {
  const obj = react2;
  const cResult = obj.c(3);
  text = text.text;
  const tmp4 = closure_8();
  let tmp5 = null;
  if (null != text) {
    if (cResult[0] === tmp4.formControlText) {
      let tmp6;
      if (cResult[1] === text) {
        tmp6 = cResult[2];
      }
      tmp5 = tmp6;
    }
    const obj2 = { variant: "text-xs/medium", color: "text-muted", style: tmp4.formControlText, children: text };
    const tmp8 = metroRequire(Text_Text.Text, obj2);
    cResult[0] = tmp4.formControlText;
    cResult[1] = text;
    cResult[2] = tmp8;
    tmp6 = tmp8;
  }
  return tmp5;
}) : ((text) => {
  text = text.text;
  let tmp2 = null;
  if (null != text) {
    const obj = { variant: "text-xs/medium", color: "text-muted", style: tmp.formControlText, children: text };
    tmp2 = metroRequire(Text_Text.Text, obj);
  }
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let intl;
  let items;
  let showNewBadge;
  let showPremiumIcon;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(9);
  ({ showPremiumIcon, showNewBadge } = arg0);
  const tmp6 = closure_8();
  if (undefined !== showPremiumIcon && showPremiumIcon) {
    let tmp8;
    if (cResult[0] !== (undefined !== showPremiumIcon && showPremiumIcon)) {
      let tmp9 = null;
      if (undefined !== showPremiumIcon && showPremiumIcon) {
        tmp9 = metroRequire(NitroWheelIcon.NitroWheelIcon, { size: "xs" });
      }
      cResult[0] = undefined !== showPremiumIcon && showPremiumIcon;
      cResult[1] = tmp9;
      tmp8 = tmp9;
    } else {
      tmp8 = cResult[1];
    }
    if (cResult[2] === (undefined !== showNewBadge && showNewBadge)) {
      let tmp11;
      if (cResult[3] === tmp6.newBadge) {
        tmp11 = cResult[4];
      }
      if (cResult[5] === tmp6.labelTrailing) {
        if (cResult[6] === tmp8) {
          let tmp14;
          if (cResult[7] === tmp11) {
            tmp14 = cResult[8];
          }
          tmp7 = tmp14;
        }
      }
      const obj2 = { style: tmp6.labelTrailing, "aria-hidden": true, children: items };
      items = [tmp8, tmp11];
      const tmp17 = metroImportDefault(hasOwnProperty, obj2);
      cResult[5] = tmp6.labelTrailing;
      cResult[6] = tmp8;
      cResult[7] = tmp11;
      cResult[8] = tmp17;
      tmp14 = tmp17;
    }
    let tmp12 = null;
    if (undefined !== showNewBadge && showNewBadge) {
      const obj3 = { text: intl.string(intl2.t.y2b7CA), style: tmp6.newBadge };
      const TextBadge = native.TextBadge;
      intl = intl2.intl;
      tmp12 = metroRequire(TextBadge, obj3);
    }
    cResult[2] = undefined !== showNewBadge && showNewBadge;
    cResult[3] = tmp6.newBadge;
    cResult[4] = tmp12;
    tmp11 = tmp12;
  } else {
    tmp7 = null;
  }
  return tmp7;
}) : ((showPremiumIcon) => {
  let intl;
  let items;
  let tmp3Result;
  let flag = showPremiumIcon.showPremiumIcon;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = showPremiumIcon.showNewBadge;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_8();
  if (flag) {
    let tmp5 = null;
    const obj = { style: tmp.labelTrailing, "aria-hidden": true, children: items };
    if (flag) {
      tmp5 = metroRequire(NitroWheelIcon.NitroWheelIcon, { size: "xs" });
    }
    items = [tmp5, ];
    let tmp9 = null;
    if (flag2) {
      const obj2 = { text: intl.string(intl2.t.y2b7CA), style: tmp.newBadge };
      const TextBadge = native.TextBadge;
      intl = intl2.intl;
      tmp9 = metroRequire(TextBadge, obj2);
    }
    items[1] = tmp9;
    tmp3Result = metroImportDefault(hasOwnProperty, obj);
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityValue;
  let buttonSubtext;
  let buttonText;
  let content;
  let disabled;
  let hideArrow;
  let items;
  let items1;
  let label;
  let labelTrailing;
  let leading;
  let loading;
  let onPress;
  let trailing;
  const obj = react2;
  const cResult = obj.c(31);
  ({ label, labelTrailing, buttonText, buttonSubtext, content, onPress, leading, trailing, accessibilityValue, disabled, loading, hideArrow } = arg0);
  const tmp7 = closure_8();
  if (cResult[0] === tmp7.button) {
    let tmp9;
    let tmp10;
    if (cResult[1] === (undefined !== disabled && disabled && tmp7.buttonDisabled)) {
      tmp9 = cResult[2];
    }
    if (cResult[3] !== (undefined !== disabled && disabled)) {
      let stringResult;
      if (!(undefined !== disabled && disabled)) {
        const intl = intl2.intl;
        stringResult = intl.string(intl2.t["4lAcxv"]);
      }
      cResult[3] = undefined !== disabled && disabled;
      cResult[4] = stringResult;
      tmp10 = stringResult;
    } else {
      tmp10 = cResult[4];
    }
    if (cResult[5] === (undefined !== disabled && disabled)) {
      let tmp12;
      if (cResult[6] === (undefined !== loading && loading)) {
        tmp12 = cResult[7];
      }
      if (cResult[8] === buttonSubtext) {
        if (cResult[9] === buttonText) {
          if (cResult[10] === content) {
            let tmp13;
            let tmp23;
            if (cResult[11] === tmp7.buttonTextContainer) {
              tmp13 = cResult[12];
            }
            if (cResult[13] !== (undefined !== hideArrow && hideArrow)) {
              const tmp24 = !tmp6 && metroRequire(TableRowArrow.TableRowArrow, {});
              cResult[13] = undefined !== hideArrow && hideArrow;
              cResult[14] = tmp24;
              tmp23 = tmp24;
            } else {
              tmp23 = cResult[14];
            }
            if (cResult[15] === accessibilityValue) {
              if (cResult[16] === (undefined !== disabled && disabled)) {
                if (cResult[17] === label) {
                  if (cResult[18] === leading) {
                    if (cResult[19] === onPress) {
                      if (cResult[20] === tmp9) {
                        if (cResult[21] === tmp10) {
                          if (cResult[22] === tmp12) {
                            if (cResult[23] === tmp13) {
                              if (cResult[24] === tmp23) {
                                let tmp26;
                                if (cResult[25] === trailing) {
                                  tmp26 = cResult[26];
                                }
                                if (cResult[27] === label) {
                                  if (cResult[28] === labelTrailing) {
                                    let tmp29;
                                    if (cResult[29] === tmp26) {
                                      tmp29 = cResult[30];
                                    }
                                    return tmp29;
                                  }
                                }
                                const obj2 = { label, labelTrailing, children: tmp26 };
                                const tmp31 = metroRequire(Input2.Input, obj2);
                                cResult[27] = label;
                                cResult[28] = labelTrailing;
                                cResult[29] = tmp26;
                                cResult[30] = tmp31;
                                tmp29 = tmp31;
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
            const obj3 = { onPress, style: tmp9, accessibilityRole: "button", accessibilityLabel: label, accessibilityValue, accessibilityHint: tmp10, accessibilityState: tmp12, disabled: undefined !== disabled && disabled, children: items };
            items = [leading, tmp13, trailing, tmp23];
            const tmp28 = metroImportDefault(Pressables.PressableHighlight, obj3);
            cResult[15] = accessibilityValue;
            cResult[16] = undefined !== disabled && disabled;
            cResult[17] = label;
            cResult[18] = leading;
            cResult[19] = onPress;
            cResult[20] = tmp9;
            cResult[21] = tmp10;
            cResult[22] = tmp12;
            cResult[23] = tmp13;
            cResult[24] = tmp23;
            cResult[25] = trailing;
            cResult[26] = tmp28;
            tmp26 = tmp28;
          }
        }
      }
      let tmp16Result = content;
      if (content == null) {
        let tmp18 = null != buttonText;
        const obj4 = { style: tmp7.buttonTextContainer, children: items1 };
        if (tmp18) {
          const obj5 = { text: buttonText };
          tmp18 = metroRequire(closure_9, obj5);
        }
        items1 = [tmp18, ];
        const obj6 = { text: buttonSubtext };
        items1[1] = metroRequire(closure_10, obj6);
        tmp16Result = metroImportDefault(hasOwnProperty, obj4);
      }
      cResult[8] = buttonSubtext;
      cResult[9] = buttonText;
      cResult[10] = content;
      cResult[11] = tmp7.buttonTextContainer;
      cResult[12] = tmp16Result;
      tmp13 = tmp16Result;
    }
    const obj7 = { disabled: undefined !== disabled && disabled, busy: undefined !== loading && loading };
    cResult[5] = undefined !== disabled && disabled;
    cResult[6] = undefined !== loading && loading;
    cResult[7] = obj7;
    tmp12 = obj7;
  }
  const items2 = [tmp7.button, undefined !== disabled && disabled && tmp7.buttonDisabled];
  cResult[0] = tmp7.button;
  cResult[1] = undefined !== disabled && disabled && tmp7.buttonDisabled;
  cResult[2] = items2;
  tmp9 = items2;
}) : ((loading) => {
  let PressableHighlight;
  let accessibilityValue;
  let buttonSubtext;
  let buttonText;
  let content;
  let disabled;
  let items;
  let items1;
  let items2;
  let label;
  let labelTrailing;
  let leading;
  let obj2;
  let onPress;
  let stringResult;
  let trailing;
  ({ label, buttonText, content, disabled } = loading);
  ({ labelTrailing, buttonSubtext, onPress, leading, trailing, accessibilityValue } = loading);
  if (disabled === undefined) {
    disabled = false;
  }
  let flag = loading.loading;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = loading.hideArrow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_8();
  const obj = { label, labelTrailing, children: metroImportDefault(PressableHighlight, obj2) };
  const Input = Input2.Input;
  obj2 = { onPress, style: items, accessibilityRole: "button", accessibilityLabel: label, accessibilityValue, accessibilityHint: stringResult, accessibilityState: { disabled, busy: flag }, disabled, children: items1 };
  items = [tmp.button, ];
  let buttonDisabled = disabled;
  PressableHighlight = Pressables.PressableHighlight;
  if (disabled) {
    buttonDisabled = tmp.buttonDisabled;
  }
  items[1] = buttonDisabled;
  stringResult = undefined;
  if (!disabled) {
    const intl = intl2.intl;
    stringResult = intl.string(intl2.t["4lAcxv"]);
  }
  items1 = [leading, , , ];
  if (content == null) {
    let tmp2Result = null != buttonText;
    const obj3 = { style: tmp.buttonTextContainer, children: items2 };
    if (tmp2Result) {
      const obj4 = { text: buttonText };
      tmp2Result = metroRequire(closure_9, obj4);
    }
    items2 = [tmp2Result, ];
    const obj5 = { text: buttonSubtext };
    items2[1] = metroRequire(closure_10, obj5);
    content = metroImportDefault(hasOwnProperty, obj3);
  }
  items1[1] = content;
  items1[2] = trailing;
  items1[3] = !flag2 && metroRequire(TableRowArrow.TableRowArrow, {});
  !flag2 && metroRequire(TableRowArrow.TableRowArrow, {});
  return metroRequire(Input, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((onValueChange) => {
  let accessibilityHint;
  let accessibilityLabel;
  let closure_129_2;
  let disabled;
  let label;
  let subLabel;
  let tmp8;
  let value;
  const obj = react2;
  const cResult = obj.c(31);
  ({ label, subLabel, value } = onValueChange);
  onValueChange = onValueChange.onValueChange;
  ({ accessibilityLabel, accessibilityHint, disabled } = onValueChange);
  closure_8();
  let tmpResult = PlatformUtils;
  const isAndroidResult = tmpResult.isAndroid();
  [tmp8, closure_129_2] = react.useState(value);
  _slicedToArray(react.useState(value), 2);
  if (cResult[0] === onValueChange) {
    let tmp9;
    let tmp11;
    if (cResult[1] === value) {
      tmp9 = cResult[2];
    }
    if (cResult[3] !== value) {
      class H {
        constructor() {
          closure_1_2(value);
        }
      }
      const items = [value];
      class V {
        constructor() {
          tmp = closure_2(!value);
          timerId = setTimeout(() => {
            if (onValueChange != null) {
              tmp(!closure_1_0);
            }
          });
          return;
        }
      }
      cResult[4] = H;
      cResult[5] = items;
      tmp11 = items;
    } else {
      class H {
        constructor() {
          closure_1_2(value);
        }
      }
      tmp11 = cResult[5];
    }
    const effect = react.useEffect(H, tmp11);
    if (cResult[6] === onValueChange) {
      class H {
        constructor() {
          closure_1_2(value);
        }
      }
      if (isAndroidResult) {
        class H {
          constructor() {
            closure_1_2(value);
          }
        }
      } else {
        class H {
          constructor() {
            closure_1_2(value);
          }
        }
      }
      if (isAndroidResult) {
        class H {
          constructor() {
            closure_1_2(value);
          }
        }
      }
      class V {
        constructor() {
          tmp = closure_2(!value);
          timerId = setTimeout(() => {
            if (onValueChange != null) {
              tmp(!closure_1_0);
            }
          });
          return;
        }
      }
      if (accessibilityLabel == null) {
        class H {
          constructor() {
            closure_1_2(value);
          }
        }
      }
      if (cResult[9] === tmp8) {
        class H {
          constructor() {
            closure_1_2(value);
          }
        }
        if (cResult[12] !== subLabel) {
          class H {
            constructor() {
              closure_1_2(value);
            }
          }
          class V {
            constructor() {
              tmp = closure_2(!value);
              timerId = setTimeout(() => {
                if (onValueChange != null) {
                  tmp(!closure_1_0);
                }
              });
              return;
            }
          }
          cResult[12] = subLabel;
          cResult[13] = tmp17;
        } else {
          class H {
            constructor() {
              closure_1_2(value);
            }
          }
        }
        if (cResult[14] === (undefined !== disabled && disabled)) {
          class H {
            constructor() {
              closure_1_2(value);
            }
          }
        }
        class V {
          constructor() {
            tmp = closure_2(!value);
            timerId = setTimeout(() => {
              if (onValueChange != null) {
                tmp(!closure_1_0);
              }
            });
            return;
          }
        }
        tmp20[1] = value;
        tmp20[2] = tmp9;
        tmp20[3] = undefined !== disabled && disabled;
        cResult[14] = undefined !== disabled && disabled;
        cResult[15] = tmp9;
        cResult[16] = value;
        cResult[17] = metroRequire(FormSwitch.FormSwitch, tmp20);
        const tmp21 = metroRequire(FormSwitch.FormSwitch, tmp20);
      }
      const obj4 = { disabled: undefined !== disabled && disabled, checked: tmp8 };
      cResult[9] = tmp8;
      cResult[10] = undefined !== disabled && disabled;
      cResult[11] = obj4;
    }
    class V {
      constructor() {
        tmp = closure_2(!value);
        timerId = setTimeout(() => {
          if (onValueChange != null) {
            tmp(!closure_1_0);
          }
        });
        return;
      }
    }
    cResult[6] = onValueChange;
    cResult[7] = value;
    cResult[8] = V;
  }
  const fn = function s() {
    let tmpResult;
    if (onValueChange != null) {
      tmpResult = tmp(!value);
    }
    return tmpResult;
  };
  cResult[0] = onValueChange;
  cResult[1] = value;
  cResult[2] = fn;
  tmp9 = fn;
}) : ((arg0) => {
  let PressableHighlight;
  let accessibilityHint;
  let accessibilityLabel;
  let closure_129_1;
  let closure_2;
  let disabled;
  let first;
  let items1;
  let label;
  let obj3;
  let subLabel;
  let value;
  ({ subLabel, value } = arg0);
  ({ onValueChange: closure_129_1, accessibilityLabel, disabled } = arg0);
  ({ label, accessibilityHint } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  closure_2 = undefined;
  let tmp = closure_8();
  const obj = PlatformUtils;
  const isAndroidResult = obj.isAndroid();
  [first, closure_2] = react.useState(value);
  const items = [value];
  const effect = react.useEffect(() => {
    closure_2(value);
  }, items);
  if (isAndroidResult) {
    PressableHighlight = Pressables.PressableHighlight;
  } else {
    PressableHighlight = React3;
  }
  function handleOnPress() {
    let tmpResult;
    if (closure_1_1 != null) {
      tmpResult = tmp(!value);
    }
    return tmpResult;
  }
  let tmp10;
  const obj2 = { label, children: metroImportDefault(PressableHighlight, obj3) };
  const Input = Input2.Input;
  if (isAndroidResult) {
    tmp10 = handleOnPress;
  }
  obj3 = {
    onPress: tmp10,
    onAccessibilityTap() {
      const tmp = closure_2(!value);
      const timerId = setTimeout(() => {
        if (closure_1_1 != null) {
          tmp(!closure_1_0);
        }
      });
    },
    style: tmp.button,
    accessibilityRole: "switch",
    accessibilityLabel,
    accessibilityHint,
    accessibilityState: { disabled, checked: first },
    disabled,
    children: items1
  };
  if (accessibilityLabel == null) {
    accessibilityLabel = subLabel;
  }
  items1 = [metroRequire(closure_9, { text: subLabel }), metroRequire(FormSwitch.FormSwitch, { "aria-hidden": true, value, onValueChange: handleOnPress, disabled })];
  return metroRequire(Input, obj2);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormControls.tsx");

export const UserProfileEditFormLabelBadges = tmp5;
export const UserProfileEditFormButton = tmp6;
export const UserProfileEditFormSwitch = tmp7;