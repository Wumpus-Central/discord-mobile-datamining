// === Module 11435: ChatFloatingNavButton ===

// Module 11435 (ChatFloatingNavButton)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ Image: c4, Pressable: c5 } = get_ActivityIndicator);
const createCacheKey = { height: ThemesDefault.modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE, width: ThemesDefault.modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE, borderRadius: ThemesDefault.modules.button.BORDER_RADIUS, borderWidth: ThemesDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: ThemesDefault.colors.BORDER_MUTED, alignItems: "center", justifyContent: "center", overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: ThemesDefault.modules.mobile.JUMP_TO_PRESENT_ICON_SIZE, height: ThemesDefault.modules.mobile.JUMP_TO_PRESENT_ICON_SIZE };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let closure_8 = { code: "function ChatFloatingNavButtonTsx1(){const{withSpring,interpolateColor,pressed,bgColor,pressedBgColor,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[bgColor,pressedBgColor]),ON_PRESS_SPRING,'animate-always')};}" };
let result = require("obj132").fileFinishedImporting("modules/chat_input/native/ChatFloatingNavButton.tsx");

export default function ChatFloatingNavButton(arg0) {
  let sharedValue;
  let token;
  let token1;
  ({ accessibilityLabel, icon, onPress } = arg0);
  const tmp = callback();
  let obj = sharedValue(token1[5]);
  sharedValue = obj.useSharedValue(0);
  obj1 = sharedValue(token1[6]);
  token = obj1.useToken(token(token1[4]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  token1 = sharedValue(token1[6]).useToken(token(token1[4]).colors.BACKGROUND_BASE_LOWEST);
  let obj3 = sharedValue(token1[6]);
  const token2 = sharedValue(token1[6]).useToken(token(token1[4]).colors.CHAT_INPUT_ICON_DEFAULT_TINT);
  const obj4 = sharedValue(token1[6]);
  class C {
    constructor() {
      obj = { backgroundColor: null };
      obj2 = closure_0(closure_2[7]);
      obj3 = closure_0(closure_2[5]);
      items = [, ];
      items[0] = closure_1;
      items[1] = closure_2;
      interpolateColorResult = obj3.interpolateColor(closure_0.get(), [0, 1], items);
      obj[0] = obj2.withSpring(interpolateColorResult, closure_0(closure_2[8]).ON_PRESS_SPRING, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: sharedValue(token1[7]).withSpring, interpolateColor: sharedValue(token1[5]).interpolateColor, pressed: sharedValue, bgColor: token, pressedBgColor: token1, ON_PRESS_SPRING: sharedValue(token1[8]).ON_PRESS_SPRING };
  C.__closure = obj;
  C.__workletHash = 9363515218556;
  C.__initData = closure_8;
  let items = [sharedValue];
  const animatedStyle = sharedValue(token1[5]).useAnimatedStyle(C);
  const items1 = [sharedValue];
  callback = React.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  obj = {
    accessibilityRole: "button",
    accessibilityLabel,
    onPress,
    onPressIn: callback,
    onPressOut: React.useCallback(() => {
      const result = sharedValue.set(0);
    }, items1),
    children: null
  };
  obj1 = { style: items2, children: <closure_4 source={icon} style={items3} /> };
  items2 = [tmp.pill, animatedStyle];
  items3 = [tmp.icon, { tintColor: token2 }];
  obj[5] = jsx(token(token1[5]).View, { style: items2, children: <closure_4 source={icon} style={items3} /> });
  return <closure_5 accessibilityRole="button" accessibilityLabel={accessibilityLabel} onPress={onPress} onPressIn={callback} onPressOut={React.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1)}>{null}</closure_5>;
};