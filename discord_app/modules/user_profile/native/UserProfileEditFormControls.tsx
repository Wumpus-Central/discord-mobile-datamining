// discord_app/modules/user_profile/native/UserProfileEditFormControls.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import TableRowArrow from "../../../design/components/TableRow/native/TableRowArrow.native.tsx";
import Input from "../../../design/components/Input/native/Input.native.tsx";
import FormSwitch from "../../../design/components/Forms/native/FormSwitch.native.tsx";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  button: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 12,
    borderColor: nativeDefault.colors.BORDER_STRONG,
    borderWidth: 1,
    borderRadius: nativeDefault.radii.md,
  },
  buttonDisabled: { opacity: 0.5 },
  buttonTextContainer: { flexGrow: 1, flexShrink: 1, flexDirection: "column" },
  formControlText: { marginRight: "auto", flexShrink: 1 },
  labelTrailing: null,
  newBadge: null,
};
let obj3 = {
  flexGrow: 1,
  flexShrink: 1,
  flexDirection: "row",
  alignItems: "center",
  gap: 12,
  padding: 12,
  borderColor: nativeDefault.colors.BORDER_STRONG,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.md,
};
obj2.labelTrailing = {
  flexDirection: "row",
  alignItems: "center",
  marginLeft: nativeDefault.space.PX_4,
  gap: nativeDefault.space.PX_4,
};
obj2.newBadge = { paddingTop: 0 };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FormControlText(text) {
      const cResult = c.c(3);
      text = text.text;
      const tmp4 = closure_8();
      if (cResult[0] === tmp4.formControlText) {
        if (cResult[1] === text) {
          let tmp5 = cResult[2];
        }
        return tmp5;
      }
      const tmp6 = timestampProducer(Text_Text.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        style: tmp4.formControlText,
        children: text,
      });
      cResult[0] = tmp4.formControlText;
      cResult[1] = text;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      const obj2 = { variant: "text-sm/medium", color: "text-default", style: tmp4.formControlText, children: text };
    }
  : function FormControlText(children) {
      const tmp = closure_8();
      return timestampProducer(Text_Text.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        style: closure_8().formControlText,
        children: children.text,
      });
    };
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FormControlSubtext(text) {
      let Text = require;
      let tmp = dependencyMap;
      const cResult = c.c(3);
      text = text.text;
      let formControlText = closure_8();
      if (null == text) {
        return null;
      } else {
        if (cResult[0] === formControlText.formControlText) {
        }
        Text = Text_Text.Text;
        const obj2 = {
          variant: "text-xs/medium",
          color: "text-muted",
          style: formControlText.formControlText,
          children: text,
        };
        tmp = timestampProducer(Text, obj2);
        formControlText = formControlText.formControlText;
        cResult[0] = formControlText;
        cResult[1] = text;
        cResult[2] = tmp;
      }
    }
  : function FormControlSubtext(text) {
      text = text.text;
      let tmp2 = null;
      if (null != text) {
        const obj = { variant: "text-xs/medium", color: "text-muted", style: tmp.formControlText, children: text };
        tmp2 = timestampProducer(Text_Text.Text, obj);
      }
      return tmp2;
    };
fn(558);
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  marginLeft: nativeDefault.space.PX_4,
  gap: nativeDefault.space.PX_4,
};
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileEditFormLabelBadges(arg0) {
      const cResult = c.c(9);
      ({ showPremiumIcon, showNewBadge } = arg0);
      let labelTrailing = closure_8();
      if (!(undefined !== showPremiumIcon && showPremiumIcon)) {
        if (!tmp5) {
          return null;
        }
      }
      if (cResult[0] !== (undefined !== showPremiumIcon && showPremiumIcon)) {
        let tmp8 = null;
        if (tmp4) {
          tmp8 = timestampProducer(NitroWheelIcon.NitroWheelIcon, { size: "xs" });
        }
        cResult[0] = tmp4;
        cResult[1] = tmp8;
        let tmp7 = tmp8;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === (undefined !== showNewBadge && showNewBadge)) {
        if (cResult[3] === labelTrailing.newBadge) {
          let tmp10 = cResult[4];
        }
        if (cResult[5] === labelTrailing.labelTrailing) {
          if (cResult[6] === tmp7) {
          }
        }
        const obj2 = { style: labelTrailing.labelTrailing, "aria-hidden": true, children: null };
        const items = [tmp7, tmp10];
        obj2.children = items;
        const tmp16 = React5(hasOwnProperty, obj2);
        labelTrailing = labelTrailing.labelTrailing;
        cResult[5] = labelTrailing;
        cResult[6] = tmp7;
        cResult[7] = tmp10;
        cResult[8] = tmp16;
      }
      let tmp11 = null;
      if (undefined !== showNewBadge && showNewBadge) {
        const obj3 = { text: null, style: null };
        const intl = util.intl;
        obj3.text = intl.string(util.t.y2b7CA);
        obj3.style = labelTrailing.newBadge;
        tmp11 = timestampProducer(native.TextBadge, obj3);
      }
      cResult[2] = undefined !== showNewBadge && showNewBadge;
      cResult[3] = labelTrailing.newBadge;
      cResult[4] = tmp11;
      tmp10 = tmp11;
    }
  : function UserProfileEditFormLabelBadges(showPremiumIcon) {
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
        const obj = { style: tmp.labelTrailing, "aria-hidden": true, children: null };
        let tmp5 = null;
        if (flag) {
          tmp5 = timestampProducer(NitroWheelIcon.NitroWheelIcon, { size: "xs" });
        }
        const items = [tmp5];
        let tmp9 = null;
        if (flag2) {
          const obj2 = { text: null, style: null };
          const intl = util.intl;
          obj2.text = intl.string(util.t.y2b7CA);
          obj2.style = tmp.newBadge;
          tmp9 = timestampProducer(native.TextBadge, obj2);
        }
        items[1] = tmp9;
        obj.children = items;
        let tmp3Result = React5(hasOwnProperty, obj);
      } else {
        tmp3Result = null;
      }
      return tmp3Result;
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileEditFormButton(arg0) {
      const cResult = c.c(31);
      ({
        label,
        labelTrailing,
        buttonText,
        buttonSubtext,
        content,
        onPress,
        leading,
        trailing,
        accessibilityValue,
        disabled,
        loading,
        hideArrow,
      } = arg0);
      const tmp7 = closure_8();
      let buttonDisabled = tmp4;
      if (undefined !== disabled && disabled) {
        buttonDisabled = tmp7.buttonDisabled;
      }
      if (cResult[0] === tmp7.button) {
        if (cResult[1] === buttonDisabled) {
          let tmp8 = cResult[2];
        }
        if (cResult[3] !== tmp4) {
          let stringResult;
          if (!tmp4) {
            const intl = util.intl;
            stringResult = intl.string(util.t["4lAcxv"]);
          }
          cResult[3] = tmp4;
          cResult[4] = stringResult;
          let tmp9 = stringResult;
        } else {
          tmp9 = cResult[4];
        }
        if (cResult[5] === tmp4) {
          if (cResult[6] === tmp5) {
            let tmp11 = cResult[7];
          }
          if (cResult[8] === buttonSubtext) {
            if (cResult[9] === buttonText) {
              if (cResult[10] === content) {
                if (cResult[11] === tmp7.buttonTextContainer) {
                  let tmp12 = cResult[12];
                }
                if (cResult[13] !== tmp6) {
                  let tmp23 = !tmp6;
                  if (!tmp6) {
                    tmp23 = timestampProducer(TableRowArrow.TableRowArrow, {});
                  }
                  cResult[13] = tmp6;
                  cResult[14] = tmp23;
                  let tmp22 = tmp23;
                } else {
                  tmp22 = cResult[14];
                }
                if (cResult[15] === accessibilityValue) {
                  if (cResult[16] === tmp4) {
                    if (cResult[17] === label) {
                      if (cResult[18] === leading) {
                        if (cResult[19] === onPress) {
                          if (cResult[20] === tmp8) {
                            if (cResult[21] === tmp9) {
                              if (cResult[22] === tmp11) {
                                if (cResult[23] === tmp12) {
                                  if (cResult[24] === tmp22) {
                                    if (cResult[25] === trailing) {
                                      let tmp25 = cResult[26];
                                    }
                                    if (cResult[27] === label) {
                                      if (cResult[28] === labelTrailing) {
                                        if (cResult[29] === tmp25) {
                                          let tmp28 = cResult[30];
                                        }
                                        return tmp28;
                                      }
                                    }
                                    const obj2 = { label, labelTrailing, children: tmp25 };
                                    const tmp30 = timestampProducer(Input.Input, obj2);
                                    cResult[27] = label;
                                    cResult[28] = labelTrailing;
                                    cResult[29] = tmp25;
                                    cResult[30] = tmp30;
                                    tmp28 = tmp30;
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
                const obj3 = {
                  onPress,
                  style: tmp8,
                  accessibilityRole: "button",
                  accessibilityLabel: label,
                  accessibilityValue,
                  accessibilityHint: tmp9,
                  accessibilityState: tmp11,
                  disabled: tmp4,
                  children: null,
                };
                const items = [leading, tmp12, trailing, tmp22];
                obj3.children = items;
                const tmp27 = React5(Pressables.PressableHighlight, obj3);
                cResult[15] = accessibilityValue;
                cResult[16] = tmp4;
                cResult[17] = label;
                cResult[18] = leading;
                cResult[19] = onPress;
                cResult[20] = tmp8;
                cResult[21] = tmp9;
                cResult[22] = tmp11;
                cResult[23] = tmp12;
                cResult[24] = tmp22;
                cResult[25] = trailing;
                cResult[26] = tmp27;
                tmp25 = tmp27;
              }
            }
          }
          let tmp15Result = content;
          if (content == null) {
            const obj4 = { style: tmp7.buttonTextContainer, children: null };
            let tmp17 = null != buttonText;
            if (tmp17) {
              const obj5 = { text: buttonText };
              tmp17 = timestampProducer(closure_9, obj5);
            }
            const items1 = [tmp17];
            const obj6 = { text: buttonSubtext };
            items1[1] = timestampProducer(closure_10, obj6);
            obj4.children = items1;
            tmp15Result = React5(hasOwnProperty, obj4);
          }
          cResult[8] = buttonSubtext;
          cResult[9] = buttonText;
          cResult[10] = content;
          cResult[11] = tmp7.buttonTextContainer;
          cResult[12] = tmp15Result;
          tmp12 = tmp15Result;
        }
        const obj7 = { disabled: tmp4, busy: tmp5 };
        cResult[5] = tmp4;
        cResult[6] = tmp5;
        cResult[7] = obj7;
        tmp11 = obj7;
      }
      const items2 = [tmp7.button, buttonDisabled];
      cResult[0] = tmp7.button;
      cResult[1] = buttonDisabled;
      cResult[2] = items2;
      tmp8 = items2;
    }
  : function UserProfileEditFormButton(loading) {
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
      const obj = { label, labelTrailing, children: null };
      const obj2 = {
        onPress,
        style: null,
        accessibilityRole: "button",
        accessibilityLabel: null,
        accessibilityValue: null,
        accessibilityHint: null,
        accessibilityState: null,
        disabled: null,
        children: null,
      };
      const items = [tmp.button];
      let buttonDisabled = disabled;
      if (disabled) {
        buttonDisabled = tmp.buttonDisabled;
      }
      items[1] = buttonDisabled;
      obj2.style = items;
      obj2.accessibilityLabel = label;
      obj2.accessibilityValue = accessibilityValue;
      let stringResult;
      if (!disabled) {
        const intl = util.intl;
        stringResult = intl.string(util.t["4lAcxv"]);
      }
      obj2.accessibilityHint = stringResult;
      obj2.accessibilityState = { disabled, busy: flag };
      obj2.disabled = disabled;
      const items1 = [leading, , ,];
      if (content == null) {
        const obj3 = { style: tmp.buttonTextContainer, children: null };
        let tmp2Result = null != buttonText;
        if (tmp2Result) {
          const obj4 = { text: buttonText };
          tmp2Result = timestampProducer(closure_9, obj4);
        }
        const items2 = [tmp2Result];
        const obj5 = { text: buttonSubtext };
        items2[1] = timestampProducer(closure_10, obj5);
        obj3.children = items2;
        content = React5(hasOwnProperty, obj3);
      }
      items1[1] = content;
      items1[2] = trailing;
      let tmp2Result2 = !flag2;
      if (!flag2) {
        tmp2Result2 = timestampProducer(TableRowArrow.TableRowArrow, {});
      }
      items1[3] = tmp2Result2;
      obj2.children = items1;
      obj.children = React5(Pressables.PressableHighlight, obj2);
      return timestampProducer(Input.Input, obj);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormControls.tsx");

export const UserProfileEditFormLabelBadges = tmp4;
export const UserProfileEditFormButton = tmp5;
export const UserProfileEditFormSwitch = ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileEditFormSwitch(onValueChange) {
      const cResult = c.c(31);
      ({ label, subLabel, value } = onValueChange);
      require = value;
      onValueChange = onValueChange.onValueChange;
      ({ accessibilityLabel, accessibilityHint, disabled } = onValueChange);
      closure_8();
      const isAndroidResult = PlatformUtils.isAndroid();
      let tmpResult = PlatformUtils;
      [tmp8, _slicedToArray] = noop.useState(value);
      if (cResult[0] === onValueChange) {
        if (cResult[1] === value) {
          let tmp9 = cResult[2];
        }
        if (cResult[3] !== value) {
          class L {
            constructor() {
              tmp = closure_2(value);
              return;
            }
          }
          const items = [value];
          cResult[3] = value;
          cResult[4] = L;
          cResult[5] = items;
          let tmp11 = items;
        } else {
          class L {
            constructor() {
              tmp = closure_2(value);
              return;
            }
          }
          tmp11 = cResult[5];
        }
        const effect = noop.useEffect(L, tmp11);
        if (cResult[6] === onValueChange) {
          class L {
            constructor() {
              tmp = closure_2(value);
              return;
            }
          }
          if (isAndroidResult) {
            class L {
              constructor() {
                tmp = closure_2(value);
                return;
              }
            }
          } else {
            class L {
              constructor() {
                tmp = closure_2(value);
                return;
              }
            }
          }
          if (isAndroidResult) {
            class L {
              constructor() {
                tmp = closure_2(value);
                return;
              }
            }
          }
          if (accessibilityLabel == null) {
            class L {
              constructor() {
                tmp = closure_2(value);
                return;
              }
            }
          }
          if (cResult[9] === tmp8) {
            class L {
              constructor() {
                tmp = closure_2(value);
                return;
              }
            }
            if (cResult[12] !== subLabel) {
              class L {
                constructor() {
                  tmp = closure_2(value);
                  return;
                }
              }
              const obj2 = { text: subLabel };
              const tmp18 = timestampProducer(closure_9, obj2);
              cResult[12] = subLabel;
              cResult[13] = tmp18;
            } else {
              class L {
                constructor() {
                  tmp = closure_2(value);
                  return;
                }
              }
            }
            if (cResult[14] === tmp4) {
              class L {
                constructor() {
                  tmp = closure_2(value);
                  return;
                }
              }
            }
            const obj4 = { "aria-hidden": true, value, onValueChange: tmp9, disabled: tmp4 };
            const tmp21 = timestampProducer(tmp(6890).FormSwitch, obj4);
            cResult[14] = tmp4;
            cResult[15] = tmp9;
            cResult[16] = value;
            cResult[17] = tmp21;
          }
          const obj5 = { disabled: tmp4, checked: tmp8 };
          cResult[9] = tmp8;
          cResult[10] = tmp4;
          cResult[11] = obj5;
        }
        function handleAccessibilityTap() {
          _slicedToArray(!value);
          const timerId = setTimeout(() => {
            if (onValueChange != null) {
              tmp(!closure_1_0);
            }
          });
        }
        cResult[6] = onValueChange;
        cResult[7] = value;
        cResult[8] = handleAccessibilityTap;
      }
      function handleOnPress() {
        let tmpResult;
        if (onValueChange != null) {
          tmpResult = tmp(!value);
        }
        return tmpResult;
      }
      cResult[0] = onValueChange;
      cResult[1] = value;
      cResult[2] = handleOnPress;
      tmp9 = handleOnPress;
      const tmp7 = _slicedToArray(noop.useState(value), 2);
    }
  : function UserProfileEditFormSwitch(arg0) {
      ({ subLabel, value } = arg0);
      require = value;
      ({ onValueChange: dependencyMap, accessibilityLabel, disabled } = arg0);
      ({ label, accessibilityHint } = arg0);
      if (disabled === undefined) {
        disabled = false;
      }
      const tmp = closure_8();
      const isAndroidResult = PlatformUtils.isAndroid();
      const tmp5 = _slicedToArray(noop.useState(value), 2);
      closure_2 = tmp5[1];
      const items = [value];
      const effect = noop.useEffect(() => {
        closure_2(value);
      }, items);
      if (isAndroidResult) {
        let PressableHighlight = tmp2(6191).PressableHighlight;
      } else {
        PressableHighlight = React4;
      }
      function handleOnPress() {
        let tmpResult;
        if (dependencyMap != null) {
          tmpResult = tmp(!value);
        }
        return tmpResult;
      }
      const obj2 = { label, children: null };
      let tmp9;
      if (isAndroidResult) {
        tmp9 = handleOnPress;
      }
      const obj3 = {
        onPress: tmp9,
        onAccessibilityTap: function handleAccessibilityTap() {
          closure_2(!value);
          const timerId = setTimeout(() => {
            if (closure_1_1 != null) {
              tmp(!closure_1_0);
            }
          });
        },
        style: tmp.button,
        accessibilityRole: "switch",
        accessibilityLabel: null,
        accessibilityHint: null,
        accessibilityState: null,
        disabled: null,
        children: null,
      };
      if (accessibilityLabel == null) {
        accessibilityLabel = subLabel;
      }
      obj3.accessibilityLabel = accessibilityLabel;
      obj3.accessibilityHint = accessibilityHint;
      obj3.accessibilityState = { disabled, checked: tmp5[0] };
      obj3.disabled = disabled;
      const items1 = [
        timestampProducer(closure_9, { text: subLabel }),
        timestampProducer(FormSwitch.FormSwitch, {
          "aria-hidden": true,
          value,
          onValueChange: handleOnPress,
          disabled,
        }),
      ];
      obj3.children = items1;
      obj2.children = React5(PressableHighlight, obj3);
      return timestampProducer(Input.Input, obj2);
    };
