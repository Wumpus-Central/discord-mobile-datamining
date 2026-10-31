// === Module 13662: CheckpointPressable ===

// Module 13662 (CheckpointPressable)
import nativeDefault from "native" /* 575 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6066 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

({ Pressable: closure_0, View: closure_1 } = get_ActivityIndicator);
({ CHECKPOINT_BUTTON_SHADOW: c2, CHECKPOINT_CONTROL_SIZE } = CheckpointConstants);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const PX_4 = nativeDefault.space.PX_4;
let obj = { sm: { height: 32, gap: nativeDefault.space.PX_4, textVariant: "text-md/bold" }, lg: null };
let obj2 = { height: 32, gap: nativeDefault.space.PX_4, textVariant: "text-md/bold" };
obj.lg = { height: CHECKPOINT_CONTROL_SIZE, gap: nativeDefault.space.PX_8, textVariant: "text-lg/medium" };
let obj4 = { container: { paddingRight: PX_4, paddingBottom: PX_4 }, shadow: { position: "absolute", top: PX_4, left: PX_4, right: 0, bottom: 0 }, pressable: null, sm: null, lg: null, pressed: null };
let obj3 = { height: CHECKPOINT_CONTROL_SIZE, gap: nativeDefault.space.PX_8, textVariant: "text-lg/medium" };
obj4.pressable = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_12 };
obj4.sm = { height: obj.sm.height, gap: obj.sm.gap };
obj4.lg = { height: obj.lg.height, gap: obj.lg.gap };
const obj6 = { transform: null };
let items = [{ translateX: PX_4 }, { translateY: PX_4 }];
obj6.transform = items;
obj4.pressed = obj6;
let closure_5 = createStyles.createStyles(obj4);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointPressable.tsx");

export default function CheckpointPressable(arg0) {
  ({ style: closure_0, disabled } = arg0);
  ({ size: closure_2, shadowColor } = arg0);
  ({ containerStyle, children, onPress } = arg0);
  if (shadowColor === undefined) {
    shadowColor = React2;
  }
  const merged = Object.assign(arg0, Object.assign({ style: 0, containerStyle: 0, children: 0, disabled: 0, onPress: 0, size: 0, shadowColor: 0 }));
  const tmp2 = closure_5();
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
    tmp5 = React3(framebus, obj2);
  }
  const items2 = [tmp5, ];
  const obj4 = {};
  const merged1 = Object.assign(merged);
  obj4.onPress = onPress;
  obj4.style = function style(pressed) {
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
  };
  obj4.children = children;
  items2[1] = React3(React, obj4);
  obj.children = items2;
  return React4(framebus, obj);
};
export const SHADOW_OFFSET = PX_4;
export const CHECKPOINT_PRESSABLE_SIZES = obj;