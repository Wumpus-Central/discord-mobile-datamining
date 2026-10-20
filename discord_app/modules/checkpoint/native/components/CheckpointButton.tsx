// === Module 12848: CheckpointButton ===

// Module 12848 (CheckpointButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 5213 */;
import CheckpointTextDefault from "CheckpointText" /* 12797 */;
import CheckpointPressable from "CheckpointPressable" /* 12826 */;
import noop from "module_19" /* 19 */;

const CheckpointPressableDefault = CheckpointPressable;

require = fn;
const CheckpointConstants = fn(5973);
({ CHECKPOINT_DARK_CYAN: closure_4, CHECKPOINT_PRIMARY: hasOwnProperty } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4945);
let obj2 = { container: { justifyContent: "center", marginRight: -fn(12826).SHADOW_OFFSET, marginBottom: -fn(12826).SHADOW_OFFSET }, button: null, label: null };
let obj3 = { justifyContent: "center", marginRight: -fn(12826).SHADOW_OFFSET, marginBottom: -fn(12826).SHADOW_OFFSET };
obj2.button = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2 };
obj2.label = { textTransform: "uppercase" };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointButton(arg0) {
  const cResult = c.c(28);
  ({ onPress, Icon, label, accessibilityLabel, accessibilityHint, accessibilityState, disabled, iconPosition, iconSize, color, borderColor, shadowColor, style } = arg0);
  let str = "start";
  if (undefined !== iconPosition) {
    str = iconPosition;
  }
  let str2 = "sm";
  if (undefined !== iconSize) {
    str2 = iconSize;
  }
  if (undefined === color) {
    color = hasOwnProperty;
  }
  if (undefined === borderColor) {
    borderColor = React4;
  }
  const tmp5 = closure_8();
  const token = useToken.useToken("text-subtle");
  const tmpResult = useToken;
  const token1 = useToken.useToken("border-normal");
  if (undefined !== disabled && disabled) {
    color = token;
  }
  if (undefined !== disabled && disabled) {
    borderColor = token1;
  }
  if (cResult[0] !== borderColor) {
    const obj2 = { borderColor };
    cResult[0] = borderColor;
    cResult[1] = obj2;
    let tmp8 = obj2;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== color) {
    const obj3 = { color };
    cResult[2] = color;
    cResult[3] = obj3;
    let tmp9 = obj3;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === Icon) {
    if (cResult[5] === color) {
      if (cResult[6] === str2) {
        let tmp10 = cResult[7];
      }
      if (cResult[8] === tmp8) {
        if (cResult[9] === style) {
          if (cResult[10] === tmp5.button) {
            let tmp13 = cResult[11];
          }
          if (accessibilityLabel == null) {
            accessibilityLabel = label;
          }
          if (cResult[12] === label) {
            if (cResult[13] === tmp9) {
              if (cResult[14] === tmp5.label) {
                let tmp16 = cResult[15];
              }
              if (cResult[16] === accessibilityHint) {
                if (cResult[17] === accessibilityState) {
                  if (cResult[18] === tmp4) {
                    if (cResult[19] === onPress) {
                      if (cResult[20] === shadowColor) {
                        if (cResult[21] === tmp5.container) {
                          if (cResult[22] === tmp13) {
                            if (cResult[23] === accessibilityLabel) {
                              if (cResult[24] === tmp15) {
                                if (cResult[25] === tmp16) {
                                  if (cResult[26] === tmp21) {
                                    let tmp22 = cResult[27];
                                  }
                                  return tmp22;
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
              const obj4 = { size: "lg", containerStyle: tmp5.container, style: tmp13, shadowColor, onPress, disabled: tmp4, accessibilityRole: "button", accessibilityLabel, accessibilityHint, accessibilityState, children: null };
              const items = [tmp15, tmp16, "end" === str && tmp10];
              obj4.children = items;
              const tmp25 = React5(CheckpointPressableDefault, obj4);
              cResult[16] = accessibilityHint;
              cResult[17] = accessibilityState;
              cResult[18] = tmp4;
              cResult[19] = onPress;
              cResult[20] = shadowColor;
              cResult[21] = tmp5.container;
              cResult[22] = tmp13;
              cResult[23] = accessibilityLabel;
              cResult[24] = tmp15;
              cResult[25] = tmp16;
              cResult[26] = "end" === str && tmp10;
              cResult[27] = tmp25;
              tmp22 = tmp25;
            }
          }
          let tmp17 = null != label;
          if (tmp17) {
            const obj5 = { variant: CheckpointPressable.CHECKPOINT_PRESSABLE_SIZES.lg.textVariant, style: null, children: null };
            const items1 = [tmp5.label, tmp9];
            obj5.style = items1;
            obj5.children = label;
            tmp17 = timestampProducer(CheckpointTextDefault, obj5);
          }
          cResult[12] = label;
          cResult[13] = tmp9;
          cResult[14] = tmp5.label;
          cResult[15] = tmp17;
          tmp16 = tmp17;
        }
      }
      const items2 = [tmp5.button, tmp8, style];
      cResult[8] = tmp8;
      cResult[9] = style;
      cResult[10] = tmp5.button;
      cResult[11] = items2;
      tmp13 = items2;
    }
  }
  let tmp11 = null;
  if (null != Icon) {
    const obj6 = { color, size: str2 };
    tmp11 = timestampProducer(Icon, obj6);
  }
  cResult[4] = Icon;
  cResult[5] = color;
  cResult[6] = str2;
  cResult[7] = tmp11;
  tmp10 = tmp11;
  const tmpResult2 = useToken;
}) : (function CheckpointButton(iconPosition) {
  ({ Icon, label, accessibilityLabel, disabled } = iconPosition);
  ({ onPress, accessibilityHint, accessibilityState } = iconPosition);
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
  let color = iconPosition.color;
  if (color === undefined) {
    color = hasOwnProperty;
  }
  let borderColor = iconPosition.borderColor;
  if (borderColor === undefined) {
    borderColor = React4;
  }
  color = undefined;
  ({ shadowColor, style } = iconPosition);
  const tmp = closure_8();
  const token = useToken.useToken("text-subtle");
  const token1 = useToken.useToken("border-normal");
  if (disabled) {
    color = token;
  }
  const items = [disabled, token1, borderColor];
  const items1 = [color];
  const memo = noop.useMemo(() => ({ borderColor: disabled ? token1 : borderColor }), items);
  let tmp8 = null;
  const memo1 = noop.useMemo(() => ({ color }), items1);
  if (null != Icon) {
    const obj3 = { color, size: str2 };
    tmp8 = timestampProducer(Icon, obj3);
  }
  const obj4 = { size: "lg", containerStyle: tmp.container, style: null, shadowColor, onPress, disabled, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, accessibilityState: null, children: null };
  const items2 = [tmp.button, memo, style];
  obj4.style = items2;
  if (accessibilityLabel == null) {
    accessibilityLabel = label;
  }
  obj4.accessibilityLabel = accessibilityLabel;
  obj4.accessibilityHint = accessibilityHint;
  obj4.accessibilityState = accessibilityState;
  const items3 = ["start" === str && tmp8, , ];
  let tmp14 = null != label;
  if (tmp14) {
    const obj5 = { variant: CheckpointPressable.CHECKPOINT_PRESSABLE_SIZES.lg.textVariant, style: null, children: null };
    const items4 = [tmp.label, memo1];
    obj5.style = items4;
    obj5.children = label;
    tmp14 = timestampProducer(CheckpointTextDefault, obj5);
    const tmp11Result = CheckpointTextDefault;
  }
  items3[1] = tmp14;
  items3[2] = "end" === str && tmp8;
  obj4.children = items3;
  return React5(CheckpointPressableDefault, obj4);
});