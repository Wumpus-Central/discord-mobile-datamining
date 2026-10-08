// === Module 15842: CheckpointPressable ===

// Module 15842 (CheckpointPressable)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

require = fn;
let closure_2 = ["style", "containerStyle", "children", "disabled", "onPress", "size", "shadowColor"];
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const CheckpointConstants = fn(5433);
({ CHECKPOINT_BUTTON_SHADOW: metroRequire, CHECKPOINT_CONTROL_SIZE } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PX_4 = nativeDefault.space.PX_4;
let obj = { sm: { height: 32, gap: nativeDefault.space.PX_4, textVariant: "text-md/bold" }, lg: null };
let obj2 = { height: 32, gap: nativeDefault.space.PX_4, textVariant: "text-md/bold" };
obj.lg = { height: CHECKPOINT_CONTROL_SIZE, gap: nativeDefault.space.PX_8, textVariant: "text-lg/medium" };
const createStyles = fn(5090);
let obj5 = { container: { paddingRight: PX_4, paddingBottom: PX_4 }, shadow: { position: "absolute", top: PX_4, left: PX_4, right: 0, bottom: 0 }, pressable: null, sm: null, lg: null, pressed: null };
let obj3 = { height: CHECKPOINT_CONTROL_SIZE, gap: nativeDefault.space.PX_8, textVariant: "text-lg/medium" };
obj5.pressable = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_12 };
obj5.sm = { height: obj.sm.height, gap: obj.sm.gap };
obj5.lg = { height: obj.lg.height, gap: obj.lg.gap };
const obj7 = { transform: null };
let items = [{ translateX: PX_4 }, { translateY: PX_4 }];
obj7.transform = items;
obj5.pressed = obj7;
let closure_9 = createStyles.createStyles(obj5);
const ReactCompilerGating = fn(558);
const obj6 = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointPressable.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointPressable(style) {
  const cResult = c.c(30);
  if (cResult[0] !== style) {
    style = style.style;
    closure_2 = style;
    ({ containerStyle, children, disabled } = style);
    closure_0 = disabled;
    ({ onPress, size } = style);
    closure_1 = size;
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
    let tmp9 = shadowColor;
    let tmp6 = tmp12;
    let tmp5 = onPress;
    let tmp3 = containerStyle;
    let tmp2 = children;
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
    tmp9 = timestampProducer;
  }
  const tmp13 = closure_9();
  const pressable = tmp13;
  if (cResult[9] === tmp3) {
    if (cResult[10] === tmp13.container) {
      let tmp14 = cResult[11];
    }
    if (cResult[12] === disabled) {
      if (cResult[13] === tmp9) {
        if (cResult[14] === tmp13.shadow) {
          let tmp15 = cResult[15];
        }
        if (cResult[16] === disabled) {
          if (cResult[17] === size) {
            if (cResult[18] === tmp8) {
              if (cResult[19] === tmp13) {
                let tmp19 = cResult[20];
              }
              if (cResult[21] === tmp2) {
                if (cResult[22] === tmp5) {
                  if (cResult[23] === tmp6) {
                    if (cResult[24] === tmp19) {
                      let tmp20 = cResult[25];
                    }
                    if (cResult[26] === tmp14) {
                      if (cResult[27] === tmp15) {
                        if (cResult[28] === tmp20) {
                          let tmp27 = cResult[29];
                        }
                        return tmp27;
                      }
                    }
                    const obj2 = { style: tmp14, children: null };
                    let items = [tmp15, tmp20];
                    obj2.children = items;
                    const tmp30 = closure_1_8(hasOwnProperty, obj2);
                    cResult[26] = tmp14;
                    cResult[27] = tmp15;
                    cResult[28] = tmp20;
                    cResult[29] = tmp30;
                    tmp27 = tmp30;
                  }
                }
              }
              const obj3 = {};
              const merged = Object.assign(tmp6);
              obj3.onPress = tmp5;
              obj3.style = tmp19;
              obj3.children = tmp2;
              const tmp26 = React5(React4, obj3);
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
    if (!disabled) {
      const obj4 = { style: null };
      const items1 = [tmp13.shadow, ];
      const obj5 = { backgroundColor: tmp9 };
      items1[1] = obj5;
      obj4.style = items1;
      tmp16 = React5(hasOwnProperty, obj4);
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
}) : (function CheckpointPressable(arg0) {
  ({ style: require, disabled } = arg0);
  ({ size: closure_2, shadowColor } = arg0);
  ({ containerStyle, children, onPress } = arg0);
  if (shadowColor === undefined) {
    shadowColor = timestampProducer;
  }
  const merged = Object.assign(arg0, Object.assign({ style: 0, containerStyle: 0, children: 0, disabled: 0, onPress: 0, size: 0, shadowColor: 0 }));
  const tmp2 = closure_9();
  const pressable = tmp2;
  const obj = { style: null, children: null };
  let items = [tmp2.container, containerStyle];
  obj.style = items;
  let tmp5 = !disabled;
  if (!disabled) {
    const obj2 = { style: null };
    const items1 = [tmp2.shadow, ];
    const obj3 = { backgroundColor: shadowColor };
    items1[1] = obj3;
    obj2.style = items1;
    tmp5 = React5(hasOwnProperty, obj2);
  }
  const items2 = [tmp5, ];
  const obj4 = {};
  const merged1 = Object.assign(merged);
  obj4.onPress = onPress;
  obj4.style = function style(pressed) {
    pressed = pressed.pressed;
    const items = [pressable.pressable, pressable[closure_1_2], require, ];
    if (pressed) {
      pressed = !disabled;
    }
    if (pressed) {
      pressed = pressable.pressed;
    }
    items[3] = pressed;
    return items;
  };
  obj4.children = children;
  items2[1] = React5(React4, obj4);
  obj.children = items2;
  return closure_1_8(hasOwnProperty, obj);
});
export const SHADOW_OFFSET = PX_4;
export const CHECKPOINT_PRESSABLE_SIZES = obj;