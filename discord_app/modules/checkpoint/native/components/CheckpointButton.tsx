// === Module 13052: CheckpointButton ===

// Module 13052 (CheckpointButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 5253 */;
import CheckpointTextDefault from "CheckpointText" /* 12986 */;
import CheckpointPressable from "CheckpointPressable" /* 13026 */;
import noop from "module_19" /* 19 */;

const CheckpointPressableDefault = CheckpointPressable;

require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
const CheckpointConstants = fn(6016);
({ CHECKPOINT_DARK_CYAN: hasOwnProperty, CHECKPOINT_PRIMARY: metroRequire } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4972);
let obj2 = { container: { justifyContent: "center", marginRight: -fn(13026).SHADOW_OFFSET, marginBottom: -fn(13026).SHADOW_OFFSET }, button: null, label: null };
let obj3 = { justifyContent: "center", marginRight: -fn(13026).SHADOW_OFFSET, marginBottom: -fn(13026).SHADOW_OFFSET };
obj2.button = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2 };
obj2.label = { textTransform: "uppercase" };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointButton(arg0) {
  const cResult = c.c(29);
  ({ onPress, Icon, label, accessibilityLabel, accessibilityHint, accessibilityState, disabled, loading, iconPosition, iconSize, color, borderColor, shadowColor, style } = arg0);
  let str = "start";
  if (undefined !== iconPosition) {
    str = iconPosition;
  }
  let str2 = "sm";
  if (undefined !== iconSize) {
    str2 = iconSize;
  }
  if (undefined === color) {
    color = timestampProducer;
  }
  if (undefined === borderColor) {
    borderColor = hasOwnProperty;
  }
  const tmp6 = closure_9();
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
    let tmp9 = obj2;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== color) {
    const obj3 = { color };
    cResult[2] = color;
    cResult[3] = obj3;
    let tmp10 = obj3;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Icon) {
    if (cResult[5] === color) {
      if (cResult[6] === str2) {
        if (cResult[7] === tmp5) {
          if (cResult[9] === tmp9) {
            if (cResult[10] === style) {
              if (cResult[11] === tmp6.button) {
                let tmp16 = cResult[12];
              }
              if (accessibilityLabel == null) {
                accessibilityLabel = label;
              }
              if (cResult[13] === label) {
                if (cResult[14] === tmp10) {
                  if (cResult[15] === tmp6.label) {
                    let tmp19 = cResult[16];
                  }
                  if (cResult[17] === accessibilityHint) {
                    if (cResult[18] === accessibilityState) {
                      if (cResult[19] === tmp4) {
                        if (cResult[20] === onPress) {
                          if (cResult[21] === shadowColor) {
                            if (cResult[22] === tmp6.container) {
                              if (cResult[23] === tmp16) {
                                if (cResult[24] === accessibilityLabel) {
                                  if (cResult[25] === tmp18) {
                                    if (cResult[26] === tmp19) {
                                      if (cResult[27] === tmp24) {
                                        let tmp25 = cResult[28];
                                      }
                                      return tmp25;
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
                  const obj4 = { size: "lg", containerStyle: tmp6.container, style: tmp16, shadowColor, onPress, disabled: tmp4, accessibilityRole: "button", accessibilityLabel, accessibilityHint, accessibilityState, children: null };
                  const items = [tmp18, tmp19, "end" === str && tmp11];
                  obj4.children = items;
                  const tmp28 = closure_1_8(CheckpointPressableDefault, obj4);
                  cResult[17] = accessibilityHint;
                  cResult[18] = accessibilityState;
                  cResult[19] = tmp4;
                  cResult[20] = onPress;
                  cResult[21] = shadowColor;
                  cResult[22] = tmp6.container;
                  cResult[23] = tmp16;
                  cResult[24] = accessibilityLabel;
                  cResult[25] = tmp18;
                  cResult[26] = tmp19;
                  cResult[27] = "end" === str && tmp11;
                  cResult[28] = tmp28;
                  tmp25 = tmp28;
                }
              }
              let tmp20 = null != label;
              if (tmp20) {
                const obj5 = { variant: CheckpointPressable.CHECKPOINT_PRESSABLE_SIZES.lg.textVariant, style: null, children: null };
                const items1 = [tmp6.label, tmp10];
                obj5.style = items1;
                obj5.children = label;
                tmp20 = React5(CheckpointTextDefault, obj5);
              }
              cResult[13] = label;
              cResult[14] = tmp10;
              cResult[15] = tmp6.label;
              cResult[16] = tmp20;
              tmp19 = tmp20;
            }
          }
          const items2 = [tmp6.button, tmp9, style];
          cResult[9] = tmp9;
          cResult[10] = style;
          cResult[11] = tmp6.button;
          cResult[12] = items2;
          tmp16 = items2;
        }
      }
    }
  }
  if (undefined !== loading && loading) {
    const obj6 = { color };
    let tmp12 = React5(ActivityIndicator, obj6);
  } else {
    tmp12 = null;
    if (null != Icon) {
      const obj7 = { color, size: str2 };
      tmp12 = React5(Icon, obj7);
    }
  }
  cResult[4] = Icon;
  cResult[5] = color;
  cResult[6] = str2;
  cResult[7] = undefined !== loading && loading;
  cResult[8] = tmp12;
  const tmpResult2 = useToken;
}) : (function CheckpointButton(loading) {
  ({ Icon, label, accessibilityLabel, disabled } = loading);
  ({ onPress, accessibilityHint, accessibilityState } = loading);
  if (disabled === undefined) {
    disabled = false;
  }
  let flag = loading.loading;
  if (flag === undefined) {
    flag = false;
  }
  let str = loading.iconPosition;
  if (str === undefined) {
    str = "start";
  }
  let str2 = loading.iconSize;
  if (str2 === undefined) {
    str2 = "sm";
  }
  let color = loading.color;
  if (color === undefined) {
    color = timestampProducer;
  }
  let borderColor = loading.borderColor;
  if (borderColor === undefined) {
    borderColor = hasOwnProperty;
  }
  color = undefined;
  ({ shadowColor, style } = loading);
  const tmp = closure_9();
  const token = useToken.useToken("text-subtle");
  const token1 = useToken.useToken("border-normal");
  if (disabled) {
    color = token;
  }
  const items = [disabled, token1, borderColor];
  const items1 = [color];
  const memo = noop.useMemo(() => ({ borderColor: disabled ? token1 : borderColor }), items);
  const memo1 = noop.useMemo(() => ({ color }), items1);
  if (flag) {
    const obj3 = { color };
    let tmp8 = React5(ActivityIndicator, obj3);
  } else {
    tmp8 = null;
    if (null != Icon) {
      const obj4 = { color, size: str2 };
      tmp8 = React5(Icon, obj4);
    }
  }
  const obj5 = { size: "lg", containerStyle: tmp.container, style: null, shadowColor, onPress, disabled, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, accessibilityState: null, children: null };
  const items2 = [tmp.button, memo, style];
  obj5.style = items2;
  if (accessibilityLabel == null) {
    accessibilityLabel = label;
  }
  obj5.accessibilityLabel = accessibilityLabel;
  obj5.accessibilityHint = accessibilityHint;
  obj5.accessibilityState = accessibilityState;
  const items3 = ["start" === str && tmp8, , ];
  let tmp16 = null != label;
  if (tmp16) {
    const obj6 = { variant: CheckpointPressable.CHECKPOINT_PRESSABLE_SIZES.lg.textVariant, style: null, children: null };
    const items4 = [tmp.label, memo1];
    obj6.style = items4;
    obj6.children = label;
    tmp16 = React5(CheckpointTextDefault, obj6);
    const tmp13Result = CheckpointTextDefault;
  }
  items3[1] = tmp16;
  items3[2] = "end" === str && tmp8;
  obj5.children = items3;
  return closure_1_8(CheckpointPressableDefault, obj5);
});