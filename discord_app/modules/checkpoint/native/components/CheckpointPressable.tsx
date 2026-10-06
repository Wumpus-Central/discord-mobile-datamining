// === Module 15573: CheckpointPressable ===

// Module 15573 (CheckpointPressable)
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_native from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 5121 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let style;

let CHECKPOINT_CONTROL_SIZE;
let closure_4;
let hasOwnProperty;
let items;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj5;
let obj6;
let closure_2 = ["style", "containerStyle", "children", "disabled", "onPress", "size", "shadowColor"];
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ CHECKPOINT_BUTTON_SHADOW: metroRequire, CHECKPOINT_CONTROL_SIZE } = CheckpointConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const PX_4 = nativeDefault.space.PX_4;
let obj = { sm: obj2, lg: obj3 };
obj2 = { height: 32, gap: nativeDefault.space.PX_4, textVariant: "text-md/bold" };
obj3 = { height: CHECKPOINT_CONTROL_SIZE, gap: nativeDefault.space.PX_8, textVariant: "text-lg/medium" };
let obj4 = { container: { paddingRight: PX_4, paddingBottom: PX_4 }, shadow: { position: "absolute", top: PX_4, left: PX_4, right: 0, bottom: 0 }, pressable: obj5, sm: { height: obj.sm.height, gap: obj.sm.gap }, lg: { height: obj.lg.height, gap: obj.lg.gap }, pressed: obj6 };
obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_12 };
obj6 = { transform: items };
items = [{ translateX: PX_4 }, { translateY: PX_4 }];
let closure_9 = createStyles.createStyles(obj4);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  let children;
  let containerStyle;
  let disabled;
  let items;
  let items1;
  let onPress;
  let tmp2;
  let tmp3;
  let tmp5;
  let tmp6;
  let tmp9;
  const obj = react;
  const cResult = obj.c(30);
  if (cResult[0] !== style) {
    style = style.style;
    closure_2 = style;
    ({ containerStyle, children, disabled } = style);
    let closure_0 = disabled;
    ({ onPress, size } = style);
    let closure_1 = size;
    const shadowColor = style.shadowColor;
    const tmp12 = _objectWithoutProperties(style, closure_2);
    cResult[0] = style;
    cResult[1] = children;
    cResult[2] = containerStyle;
    cResult[3] = disabled;
    cResult[4] = onPress;
    cResult[5] = tmp12;
    cResult[6] = size;
    cResult[7] = style;
    cResult[8] = shadowColor;
    tmp9 = shadowColor;
    tmp6 = tmp12;
    tmp5 = onPress;
    tmp3 = containerStyle;
    tmp2 = children;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
    closure_0 = cResult[3];
    tmp5 = cResult[4];
    tmp6 = cResult[5];
    closure_1 = cResult[6];
    closure_2 = cResult[7];
    tmp9 = cResult[8];
  }
  if (undefined === tmp9) {
    tmp9 = metroRequire;
  }
  const tmp13 = closure_9();
  let closure_3 = tmp13;
  if (cResult[9] === tmp3) {
    let tmp14;
    if (cResult[10] === tmp13.container) {
      tmp14 = cResult[11];
    }
    if (cResult[12] === disabled) {
      if (cResult[13] === tmp9) {
        let tmp15;
        if (cResult[14] === tmp13.shadow) {
          tmp15 = cResult[15];
        }
        if (cResult[16] === disabled) {
          if (cResult[17] === size) {
            if (cResult[18] === tmp8) {
              let tmp19;
              if (cResult[19] === tmp13) {
                tmp19 = cResult[20];
              }
              if (cResult[21] === tmp2) {
                if (cResult[22] === tmp5) {
                  if (cResult[23] === tmp6) {
                    let tmp20;
                    if (cResult[24] === tmp19) {
                      tmp20 = cResult[25];
                    }
                    if (cResult[26] === tmp14) {
                      if (cResult[27] === tmp15) {
                        let tmp27;
                        if (cResult[28] === tmp20) {
                          tmp27 = cResult[29];
                        }
                        return tmp27;
                      }
                    }
                    const obj2 = { style: tmp14, children: items };
                    items = [tmp15, tmp20];
                    const tmp30 = metroImportAll(hasOwnProperty, obj2);
                    cResult[26] = tmp14;
                    cResult[27] = tmp15;
                    cResult[28] = tmp20;
                    cResult[29] = tmp30;
                    tmp27 = tmp30;
                  }
                }
              }
              const obj3 = { onPress: tmp5, style: tmp19, children: tmp2 };
              const merged = Object.assign(tmp6);
              const tmp26 = metroImportDefault(React3, obj3);
              cResult[21] = tmp2;
              cResult[22] = tmp5;
              cResult[23] = tmp6;
              cResult[24] = tmp19;
              cResult[25] = tmp26;
              tmp20 = tmp26;
            }
          }
        }
        const fn = function x(pressed) {
          pressed = pressed.pressed;
          const items = [pressable.pressable, pressable[closure_1], closure_2, ];
          if (pressed) {
            pressed = !closure_0;
          }
          if (pressed) {
            pressed = pressable.pressed;
          }
          items[3] = pressed;
          return items;
        };
        cResult[16] = disabled;
        cResult[17] = size;
        cResult[18] = tmp8;
        cResult[19] = tmp13;
        cResult[20] = fn;
        tmp19 = fn;
      }
    }
    let tmp16 = !disabled;
    if (tmp16) {
      const obj4 = { style: items1 };
      items1 = [tmp13.shadow, ];
      const obj5 = { backgroundColor: tmp9 };
      items1[1] = obj5;
      tmp16 = metroImportDefault(hasOwnProperty, obj4);
    }
    cResult[12] = disabled;
    cResult[13] = tmp9;
    cResult[14] = tmp13.shadow;
    cResult[15] = tmp16;
    tmp15 = tmp16;
  }
  const items2 = [tmp13.container, tmp3];
  cResult[9] = tmp3;
  cResult[10] = tmp13.container;
  cResult[11] = items2;
  tmp14 = items2;
}) : ((arg0) => {
  let children;
  let closure_129_0;
  let closure_129_2;
  let containerStyle;
  let disabled;
  let items;
  let items1;
  let items2;
  let onPress;
  let shadowColor;
  ({ style: closure_129_0, disabled } = arg0);
  ({ size: closure_129_2, shadowColor } = arg0);
  ({ containerStyle, children, onPress } = arg0);
  if (shadowColor === undefined) {
    shadowColor = metroRequire;
  }
  const merged = Object.assign(arg0, Object.assign({ style: 0, containerStyle: 0, children: 0, disabled: 0, onPress: 0, size: 0, shadowColor: 0 }));
  const tmp2 = closure_9();
  let closure_3 = tmp2;
  const obj = { style: items, children: items2 };
  items = [tmp2.container, containerStyle];
  let tmp5 = !disabled;
  if (tmp5) {
    const obj2 = { style: items1 };
    items1 = [tmp2.shadow, ];
    const obj3 = { backgroundColor: shadowColor };
    items1[1] = obj3;
    tmp5 = metroImportDefault(hasOwnProperty, obj2);
  }
  items2 = [tmp5, ];
  const obj4 = {
    onPress,
    style(pressed) {
      pressed = pressed.pressed;
      const items = [pressable.pressable, pressable[closure_1_2], closure_1_0, ];
      if (pressed) {
        pressed = !disabled;
      }
      if (pressed) {
        pressed = pressable.pressed;
      }
      items[3] = pressed;
      return items;
    },
    children
  };
  const merged1 = Object.assign(merged);
  items2[1] = metroImportDefault(React3, obj4);
  return metroImportAll(hasOwnProperty, obj);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointPressable.tsx");

export default tmp5;
export const SHADOW_OFFSET = PX_4;
export const CHECKPOINT_PRESSABLE_SIZES = obj;