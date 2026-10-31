// discord_app/modules/chat_input/native/ChatFloatingNavButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
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
const __initData = {
  code: "function ChatFloatingNavButtonTsx1(){const{withSpring,interpolateColor,pressed,bgColor,pressedBgColor,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[bgColor,pressedBgColor]),ON_PRESS_SPRING,'animate-always')};}",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/ChatFloatingNavButton.tsx");

export default function ChatFloatingNavButton(arg0) {
  let sharedValue;
  let token;
  let token1;
  ({ accessibilityLabel, icon, onPress } = arg0);
  const tmp = closure_6();
  sharedValue = sharedValue(token1[5]).useSharedValue(0);
  let obj = sharedValue(token1[5]);
  token = sharedValue(token1[6]).useToken(token(token1[4]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  let obj2 = sharedValue(token1[6]);
  token1 = sharedValue(token1[6]).useToken(token(token1[4]).colors.BACKGROUND_BASE_LOWEST);
  let obj3 = sharedValue(token1[6]);
  const token2 = sharedValue(token1[6]).useToken(token(token1[4]).colors.CHAT_INPUT_ICON_DEFAULT_TINT);
  const obj4 = sharedValue(token1[6]);
  const fn = function c() {
    const obj = { backgroundColor: null };
    const obj2 = spring;
    const items = [token, token1];
    obj.backgroundColor = obj2.withSpring(
      ReanimatedRexport.interpolateColor(sharedValue.get(), [0, 1], items),
      springPresets.ON_PRESS_SPRING,
      "animate-always",
    );
    return obj;
  };
  const obj5 = sharedValue(token1[5]);
  fn.__closure = {
    withSpring: sharedValue(token1[7]).withSpring,
    interpolateColor: sharedValue(token1[5]).interpolateColor,
    pressed: sharedValue,
    bgColor: token,
    pressedBgColor: token1,
    ON_PRESS_SPRING: sharedValue(token1[8]).ON_PRESS_SPRING,
  };
  fn.__workletHash = 9363515218556;
  fn.__initData = __initData;
  let items = [sharedValue];
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const items1 = [sharedValue];
  const callback = noop.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const obj7 = {
    accessibilityRole: "button",
    accessibilityLabel,
    onPress,
    onPressIn: callback,
    onPressOut: noop.useCallback(() => {
      const result = sharedValue.set(0);
    }, items1),
    children: null,
  };
  const obj8 = { style: null, children: null };
  const items2 = [tmp.pill, animatedStyle];
  obj8.style = items2;
  const obj9 = { source: icon, style: null };
  const items3 = [tmp.icon, { tintColor: token2 }];
  obj9.style = items3;
  obj8.children = jsx(token(token1[9]), { source: icon, style: null });
  obj7.children = jsx(token(token1[5]).View, { style: null, children: null });
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      onPressIn={callback}
      onPressOut={noop.useCallback(() => {
        const result = sharedValue.set(0);
      }, items1)}
    >
      {null}
    </Pressable>
  );
}
