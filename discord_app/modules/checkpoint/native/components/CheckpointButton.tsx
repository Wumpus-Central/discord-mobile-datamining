// === Module 15964: CheckpointButton ===

// Module 15964 (CheckpointButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4779 */;
import CheckpointTextDefault from "CheckpointText" /* 15934 */;
import CheckpointPressable from "CheckpointPressable" /* 15955 */;
import CheckpointConstants from "CheckpointConstants" /* 5434 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CheckpointPressableDefault = CheckpointPressable;

({ CHECKPOINT_PRIMARY: c3, CHECKPOINT_DARK_CYAN } = CheckpointConstants);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { container: { justifyContent: "center", marginRight: -CheckpointPressable.SHADOW_OFFSET, marginBottom: -CheckpointPressable.SHADOW_OFFSET }, button: null, label: null };
let obj2 = { justifyContent: "center", marginRight: -CheckpointPressable.SHADOW_OFFSET, marginBottom: -CheckpointPressable.SHADOW_OFFSET };
obj.button = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2, borderColor: CHECKPOINT_DARK_CYAN };
obj.label = { textTransform: "uppercase" };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2, borderColor: CHECKPOINT_DARK_CYAN };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointButton(arg0) {
  const cResult = c.c(26);
  ({ onPress, Icon, label, accessibilityLabel, accessibilityHint, accessibilityState, disabled, iconPosition, iconSize } = arg0);
  let str = "start";
  if (undefined !== iconPosition) {
    str = iconPosition;
  }
  let str2 = "sm";
  if (undefined !== iconSize) {
    str2 = iconSize;
  }
  const tmp5 = closure_6();
  const token = useToken.useToken("text-subtle");
  const tmpResult = useToken;
  const token1 = useToken.useToken("border-normal");
  let tmp8 = token;
  if (!(undefined !== disabled && disabled)) {
    tmp8 = React3;
  }
  if (cResult[0] === Icon) {
    if (cResult[1] === str2) {
      if (cResult[2] === tmp8) {
        let tmp9 = cResult[3];
      }
      if (cResult[4] === token1) {
        if (cResult[5] === tmp4) {
          let tmp11 = cResult[6];
        }
        if (cResult[7] === tmp5.button) {
          if (cResult[8] === tmp11) {
            let tmp13 = cResult[9];
          }
          if (accessibilityLabel == null) {
            accessibilityLabel = label;
          }
          if (cResult[10] === tmp4) {
            if (cResult[11] === label) {
              if (cResult[12] === tmp5.label) {
                if (cResult[13] === token) {
                  let tmp16 = cResult[14];
                }
                if (cResult[15] === accessibilityHint) {
                  if (cResult[16] === accessibilityState) {
                    if (cResult[17] === tmp4) {
                      if (cResult[18] === onPress) {
                        if (cResult[19] === tmp5.container) {
                          if (cResult[20] === tmp16) {
                            if (cResult[21] === tmp22) {
                              if (cResult[22] === tmp13) {
                                if (cResult[23] === accessibilityLabel) {
                                  if (cResult[24] === tmp15) {
                                    let tmp23 = cResult[25];
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
                const obj2 = { size: "lg", containerStyle: tmp5.container, style: tmp13, onPress, disabled: tmp4, accessibilityRole: "button", accessibilityLabel, accessibilityHint, accessibilityState, children: null };
                const items = [tmp15, tmp16, "end" === str && tmp9];
                obj2.children = items;
                const tmp26 = hasOwnProperty(CheckpointPressableDefault, obj2);
                cResult[15] = accessibilityHint;
                cResult[16] = accessibilityState;
                cResult[17] = tmp4;
                cResult[18] = onPress;
                cResult[19] = tmp5.container;
                cResult[20] = tmp16;
                cResult[21] = "end" === str && tmp9;
                cResult[22] = tmp13;
                cResult[23] = accessibilityLabel;
                cResult[24] = tmp15;
                cResult[25] = tmp26;
                tmp23 = tmp26;
              }
            }
          }
          let tmp18Result = null != label;
          if (tmp18Result) {
            const obj3 = { variant: CheckpointPressable.CHECKPOINT_PRESSABLE_SIZES.lg.textVariant, style: null, children: null };
            const items1 = [tmp5.label, ];
            let tmp21 = tmp4;
            if (tmp4) {
              const obj4 = { color: token };
              tmp21 = obj4;
            }
            items1[1] = tmp21;
            obj3.style = items1;
            obj3.children = label;
            tmp18Result = React4(CheckpointTextDefault, obj3);
          }
          cResult[10] = tmp4;
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
      if (tmp4) {
        const obj5 = { borderColor: token1 };
        tmp12 = obj5;
      }
      cResult[4] = token1;
      cResult[5] = tmp4;
      cResult[6] = tmp12;
      tmp11 = tmp12;
    }
  }
  const tmp10 = React4(Icon, { color: tmp8, size: str2 });
  cResult[0] = Icon;
  cResult[1] = str2;
  cResult[2] = tmp8;
  cResult[3] = tmp10;
  tmp9 = tmp10;
  const tmpResult2 = useToken;
}) : (function CheckpointButton(iconPosition) {
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
  const token = useToken.useToken("text-subtle");
  let tmp7 = token;
  const token1 = useToken.useToken("border-normal");
  if (!disabled) {
    tmp7 = React3;
  }
  const tmp6Result = React4(Icon, { color: tmp7, size: str2 });
  const obj3 = { size: "lg", containerStyle: tmp.container, style: null, onPress: null, disabled: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, accessibilityState: null, children: null };
  const items = [tmp.button, ];
  let tmp12 = disabled;
  if (disabled) {
    const obj4 = { borderColor: token1 };
    tmp12 = obj4;
  }
  items[1] = tmp12;
  obj3.style = items;
  obj3.onPress = onPress;
  obj3.disabled = disabled;
  if (accessibilityLabel == null) {
    accessibilityLabel = label;
  }
  obj3.accessibilityLabel = accessibilityLabel;
  obj3.accessibilityHint = accessibilityHint;
  obj3.accessibilityState = accessibilityState;
  const items1 = ["start" === str && tmp6Result, , ];
  let tmp6Result2 = null != label;
  if (tmp6Result2) {
    const obj5 = { variant: CheckpointPressable.CHECKPOINT_PRESSABLE_SIZES.lg.textVariant, style: null, children: null };
    const items2 = [tmp.label, ];
    if (disabled) {
      const obj6 = { color: token };
      disabled = obj6;
    }
    items2[1] = disabled;
    obj5.style = items2;
    obj5.children = label;
    tmp6Result2 = React4(CheckpointTextDefault, obj5);
    const tmp10Result = CheckpointTextDefault;
  }
  items1[1] = tmp6Result2;
  items1[2] = "end" === str && tmp6Result;
  obj3.children = items1;
  return hasOwnProperty(CheckpointPressableDefault, obj3);
});