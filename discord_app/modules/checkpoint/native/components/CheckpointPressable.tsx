// discord_app/modules/checkpoint/native/components/CheckpointPressable.tsx
import CheckpointConstants from "../../CheckpointConstants.tsx";
import get_ActivityIndicator from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ Pressable: closure_0, View: closure_1 } = get_ActivityIndicator);
({ jsx: c2, jsxs: c3 } = jsxProd);
let obj = {
  container: { paddingRight: 4, paddingBottom: 4 },
  shadow: {
    position: "absolute",
    top: 4,
    left: 4,
    right: 0,
    bottom: 0,
    backgroundColor: CheckpointConstants.CHECKPOINT_BUTTON_SHADOW,
  },
  pressed: null,
};
const obj2 = { transform: null };
let items = [{ translateX: 4 }, { translateY: 4 }];
obj2.transform = items;
obj.pressed = obj2;
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointPressable.tsx");

export default function CheckpointPressable(style) {
  style = style.style;
  ({ containerStyle, children } = style);
  const merged = Object.assign(style, Object.assign({ style: 0, containerStyle: 0, children: 0 }));
  const tmp2 = closure_4();
  let pressed = tmp2;
  const obj = { style: null, children: null };
  let items = [tmp2.container, containerStyle];
  obj.style = items;
  const items1 = [React2(framebus, { style: tmp2.shadow })];
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.style = function style(pressed) {
    pressed = pressed.pressed;
    const items = [style];
    if (pressed) {
      pressed = pressed.pressed;
    }
    items[1] = pressed;
    return items;
  };
  obj3.children = children;
  items1[1] = React2(React, obj3);
  obj.children = items1;
  return React3(framebus, obj);
}
export const SHADOW_OFFSET = 4;
