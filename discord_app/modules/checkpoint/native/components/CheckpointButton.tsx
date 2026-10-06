// discord_app/modules/checkpoint/native/components/CheckpointButton.tsx
import react from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import CheckpointTextDefault from "CheckpointText.tsx";
import CheckpointPressable from "CheckpointPressable.tsx";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const CheckpointPressableDefault = CheckpointPressable;

let CHECKPOINT_DARK_CYAN;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
({ CHECKPOINT_PRIMARY: c3, CHECKPOINT_DARK_CYAN } = CheckpointConstants);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, button: obj3, label: { textTransform: "uppercase" } };
obj2 = {
  justifyContent: "center",
  marginRight: -CheckpointPressable.SHADOW_OFFSET,
  marginBottom: -CheckpointPressable.SHADOW_OFFSET,
};
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2, borderColor: CHECKPOINT_DARK_CYAN };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let Icon;
      let accessibilityHint;
      let accessibilityLabel;
      let accessibilityState;
      let disabled;
      let iconPosition;
      let iconSize;
      let items;
      let items1;
      let label;
      let onPress;
      const obj = react;
      const cResult = obj.c(26);
      ({
        onPress,
        Icon,
        label,
        accessibilityLabel,
        accessibilityHint,
        accessibilityState,
        disabled,
        iconPosition,
        iconSize,
      } = arg0);
      let str = "start";
      if (undefined !== iconPosition) {
        str = iconPosition;
      }
      let str2 = "sm";
      if (undefined !== iconSize) {
        str2 = iconSize;
      }
      const tmp5 = closure_6();
      const tmpResult = useToken;
      const token = tmpResult.useToken("text-subtle");
      const tmpResult2 = useToken;
      const token1 = tmpResult2.useToken("border-normal");
      let tmp8 = token;
      if (!(undefined !== disabled && disabled)) {
        tmp8 = _false;
      }
      if (cResult[0] === Icon) {
        if (cResult[1] === str2) {
          let tmp9;
          if (cResult[2] === tmp8) {
            tmp9 = cResult[3];
          }
          if (cResult[4] === token1) {
            let tmp11;
            if (cResult[5] === (undefined !== disabled && disabled)) {
              tmp11 = cResult[6];
            }
            if (cResult[7] === tmp5.button) {
              let tmp13;
              if (cResult[8] === tmp11) {
                tmp13 = cResult[9];
              }
              if (accessibilityLabel == null) {
                accessibilityLabel = label;
              }
              if (cResult[10] === (undefined !== disabled && disabled)) {
                if (cResult[11] === label) {
                  if (cResult[12] === tmp5.label) {
                    let tmp16;
                    if (cResult[13] === token) {
                      tmp16 = cResult[14];
                    }
                    if (cResult[15] === accessibilityHint) {
                      if (cResult[16] === accessibilityState) {
                        if (cResult[17] === (undefined !== disabled && disabled)) {
                          if (cResult[18] === onPress) {
                            if (cResult[19] === tmp5.container) {
                              if (cResult[20] === tmp16) {
                                if (cResult[21] === ("end" === str && tmp9)) {
                                  if (cResult[22] === tmp13) {
                                    if (cResult[23] === accessibilityLabel) {
                                      let tmp23;
                                      if (cResult[24] === ("start" === str && tmp9)) {
                                        tmp23 = cResult[25];
                                      }
                                      return tmp23;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    const obj2 = {
                      size: "lg",
                      containerStyle: tmp5.container,
                      style: tmp13,
                      onPress,
                      disabled: undefined !== disabled && disabled,
                      accessibilityRole: "button",
                      accessibilityLabel,
                      accessibilityHint,
                      accessibilityState,
                      children: items,
                    };
                    items = ["start" === str && tmp9, tmp16, "end" === str && tmp9];
                    const tmp26 = hasOwnProperty(CheckpointPressableDefault, obj2);
                    cResult[15] = accessibilityHint;
                    cResult[16] = accessibilityState;
                    cResult[17] = undefined !== disabled && disabled;
                    cResult[18] = onPress;
                    cResult[19] = tmp5.container;
                    cResult[20] = tmp16;
                    cResult[21] = "end" === str && tmp9;
                    cResult[22] = tmp13;
                    cResult[23] = accessibilityLabel;
                    cResult[24] = "start" === str && tmp9;
                    cResult[25] = tmp26;
                    tmp23 = tmp26;
                  }
                }
              }
              let tmp18Result = null != label;
              if (tmp18Result) {
                const obj3 = {
                  variant: CheckpointPressable.CHECKPOINT_PRESSABLE_SIZES.lg.textVariant,
                  style: items1,
                  children: label,
                };
                items1 = [tmp5.label];
                let tmp21 = tmp4;
                const tmp20 = CheckpointTextDefault;
                if (tmp21) {
                  tmp21 = { color: token };
                  const obj4 = { color: token };
                }
                items1[1] = tmp21;
                tmp18Result = React3(tmp20, obj3);
              }
              cResult[10] = undefined !== disabled && disabled;
              cResult[11] = label;
              cResult[12] = tmp5.label;
              cResult[13] = token;
              cResult[14] = tmp18Result;
              tmp16 = tmp18Result;
            }
            const items2 = [tmp5.button, tmp11];
            cResult[7] = tmp5.button;
            cResult[8] = tmp11;
            cResult[9] = items2;
            tmp13 = items2;
          }
          let tmp12 = tmp4;
          if (tmp12) {
            tmp12 = { borderColor: token1 };
            const obj5 = { borderColor: token1 };
          }
          cResult[4] = token1;
          cResult[5] = undefined !== disabled && disabled;
          cResult[6] = tmp12;
          tmp11 = tmp12;
        }
      }
      const tmp10 = React3(Icon, { color: tmp8, size: str2 });
      cResult[0] = Icon;
      cResult[1] = str2;
      cResult[2] = tmp8;
      cResult[3] = tmp10;
      tmp9 = tmp10;
    }
  : (iconPosition) => {
      let Icon;
      let accessibilityHint;
      let accessibilityLabel;
      let accessibilityState;
      let disabled;
      let items;
      let items1;
      let items2;
      let label;
      let onPress;
      ({ label, accessibilityLabel, disabled } = iconPosition);
      ({ onPress, Icon, accessibilityHint, accessibilityState } = iconPosition);
      if (disabled === undefined) {
        disabled = false;
      }
      let str = iconPosition.iconPosition;
      if (str === undefined) {
        str = "start";
      }
      let str2 = iconPosition.iconSize;
      if (str2 === undefined) {
        str2 = "sm";
      }
      const tmp = closure_6();
      const obj = useToken;
      const token = obj.useToken("text-subtle");
      let tmp7 = token;
      const obj2 = useToken;
      const token1 = obj2.useToken("border-normal");
      if (!disabled) {
        tmp7 = _false;
      }
      const tmp6Result = React3(Icon, { color: tmp7, size: str2 });
      const obj3 = {
        size: "lg",
        containerStyle: tmp.container,
        style: items,
        onPress,
        disabled,
        accessibilityRole: "button",
        accessibilityLabel,
        accessibilityHint,
        accessibilityState,
        children: items1,
      };
      items = [tmp.button];
      let tmp12 = disabled;
      const tmp11 = CheckpointPressableDefault;
      if (disabled) {
        tmp12 = { borderColor: token1 };
        const obj4 = { borderColor: token1 };
      }
      items[1] = tmp12;
      if (accessibilityLabel == null) {
        accessibilityLabel = label;
      }
      items1 = [, ,];
      const tmp13 = "start" === str && tmp6Result;
      items1[0] = tmp13;
      let tmp6Result2 = null != label;
      if (tmp6Result2) {
        const obj5 = {
          variant: CheckpointPressable.CHECKPOINT_PRESSABLE_SIZES.lg.textVariant,
          style: items2,
          children: label,
        };
        items2 = [tmp.label];
        const tmp10Result = CheckpointTextDefault;
        if (disabled) {
          disabled = { color: token };
          const obj6 = { color: token };
        }
        items2[1] = disabled;
        tmp6Result2 = React3(tmp10Result, obj5);
      }
      items1[1] = tmp6Result2;
      items1[2] = "end" === str && tmp6Result;
      return hasOwnProperty(tmp11, obj3);
    };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointButton.tsx");

export default tmp5;
