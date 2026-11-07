// discord_app/modules/chat_input/native/ChatFloatingNavButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import useToken from "../../../design/tokens/native/useToken.tsx";
import spring_spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
const createStyles = fn(5140);
let obj2 = { pill: null, icon: null };
let size = {
  height: nativeDefault.modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE,
  width: nativeDefault.modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE,
  borderRadius: nativeDefault.modules.button.BORDER_RADIUS,
  borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH,
  borderColor: nativeDefault.colors.BORDER_MUTED,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};
obj2.pill = size;
const size1 = {
  width: nativeDefault.modules.mobile.JUMP_TO_PRESENT_ICON_SIZE,
  height: nativeDefault.modules.mobile.JUMP_TO_PRESENT_ICON_SIZE,
};
obj2.icon = size1;
let closure_6 = createStyles.createStyles(obj2);
let closure_7 = {
  code: "(function ChatFloatingNavButtonTsx1(){let[withSpring,interpolateColor,pressed,bgColor,pressedBgColor,ON_PRESS_SPRING]=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[bgColor,pressedBgColor]),ON_PRESS_SPRING,'animate-always')};})",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/ChatFloatingNavButton.tsx");

export default function ChatFloatingNavButton(arg0) {
  ({ accessibilityLabel, icon, onPress } = arg0);
  const tmp = closure_6();
  const sharedValue = _mod1652.useSharedValue(0);
  const token = useToken.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const token1 = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  const token2 = useToken.useToken(nativeDefault.colors.CHAT_INPUT_ICON_DEFAULT_TINT);
  items = [
    closure_7,
    spring_spring.withSpring,
    _mod1652.interpolateColor,
    sharedValue,
    token,
    token1,
    springPresets.ON_PRESS_SPRING,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
  class ChatFloatingNavButtonTsx1 {
    constructor() {
      obj = { backgroundColor: null };
      items = [,];
      items[0] = closure_3;
      items[1] = closure_4;
      obj.backgroundColor = closure_0(closure_1(closure_2.get(), [0, 1], items), closure_5, "animate-always");
      return obj;
    }
  }
  const items1 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
  ChatFloatingNavButtonTsx1.__closure = items1;
  ChatFloatingNavButtonTsx1.__workletHash = 13689460805797;
  ChatFloatingNavButtonTsx1.__initData = tmp8;
  const items2 = [sharedValue];
  const animatedStyle = _mod1652.useAnimatedStyle(ChatFloatingNavButtonTsx1);
  const items3 = [sharedValue];
  const callback = noop.useCallback(() => {
    const result = _undefined.set(1);
  }, items2);
  const obj6 = {
    accessibilityRole: "button",
    accessibilityLabel,
    onPress,
    onPressIn: callback,
    onPressOut: noop.useCallback(() => {
      const result = _undefined.set(0);
    }, items3),
    children: null,
  };
  const obj7 = { style: null, children: null };
  const items4 = [tmp.pill, animatedStyle];
  obj7.style = items4;
  const obj8 = { source: icon, style: null };
  const items5 = [tmp.icon, { tintColor: token2 }];
  obj8.style = items5;
  obj7.children = jsx(FastImageDefault, { source: icon, style: null });
  obj6.children = jsx(_modDef1652.View, { style: null, children: null });
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      onPressIn={callback}
      onPressOut={noop.useCallback(() => {
        const result = _undefined.set(0);
      }, items3)}
    >
      {null}
    </Pressable>
  );
}
