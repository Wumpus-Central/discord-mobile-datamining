// === Module 12268: ChatFloatingNavButton ===

// Module 12268 (ChatFloatingNavButton)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import spring from "spring" /* 4974 */;
import springPresets from "springPresets" /* 4978 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, Pressable: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
fn(4560);
const createStyles = { pill: null, icon: null };
let size = { height: nativeDefault.modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE, width: nativeDefault.modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE, borderRadius: nativeDefault.modules.button.BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: nativeDefault.colors.BORDER_MUTED, alignItems: "center", justifyContent: "center", overflow: "hidden" };
createStyles.pill = size;
const size1 = { width: nativeDefault.modules.mobile.JUMP_TO_PRESENT_ICON_SIZE, height: nativeDefault.modules.mobile.JUMP_TO_PRESENT_ICON_SIZE };
createStyles.icon = size1;
let closure_7 = createStyles.createStyles(createStyles);
const __initData = { code: "function ChatFloatingNavButtonTsx1(){const{withSpring,interpolateColor,pressed,bgColor,pressedBgColor,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[bgColor,pressedBgColor]),ON_PRESS_SPRING,'animate-always')};}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/ChatFloatingNavButton.tsx");

export default function ChatFloatingNavButton(arg0) {
  let sharedValue;
  let token;
  let token1;
  ({ accessibilityLabel, icon, onPress } = arg0);
  const tmp = closure_7();
  let obj = sharedValue(token1[5]);
  sharedValue = obj.useSharedValue(0);
  let obj1 = sharedValue(token1[6]);
  token = obj1.useToken(token(token1[4]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  let obj2 = sharedValue(token1[6]);
  token1 = obj2.useToken(token(token1[4]).colors.BACKGROUND_BASE_LOWEST);
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
      obj.backgroundColor = obj2.withSpring(interpolateColorResult, closure_0(closure_2[8]).ON_PRESS_SPRING, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: sharedValue(token1[7]).withSpring, interpolateColor: sharedValue(token1[5]).interpolateColor, pressed: sharedValue, bgColor: token, pressedBgColor: token1, ON_PRESS_SPRING: sharedValue(token1[8]).ON_PRESS_SPRING };
  C.__closure = obj;
  C.__workletHash = 9363515218556;
  C.__initData = __initData;
  let items = [sharedValue];
  const animatedStyle = sharedValue(token1[5]).useAnimatedStyle(C);
  const items1 = [sharedValue];
  const callback = noop.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  obj = {
    accessibilityRole: "button",
    accessibilityLabel,
    onPress,
    onPressIn: callback,
    onPressOut: noop.useCallback(() => {
      const result = sharedValue.set(0);
    }, items1),
    children: null
  };
  obj1 = { style: null, children: null };
  const items2 = [tmp.pill, animatedStyle];
  obj1.style = items2;
  obj2 = { source: icon, style: null };
  const items3 = [tmp.icon, { tintColor: token2 }];
  obj2.style = items3;
  obj1.children = <closure_4 source={icon} style={null} />;
  obj.children = jsx(token(token1[5]).View, { style: null, children: null });
  return <closure_5 accessibilityRole="button" accessibilityLabel={accessibilityLabel} onPress={onPress} onPressIn={callback} onPressOut={noop.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1)}>{null}</closure_5>;
};