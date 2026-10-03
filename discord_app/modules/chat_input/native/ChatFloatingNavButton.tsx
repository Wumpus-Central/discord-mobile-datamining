// === Module 11897: ChatFloatingNavButton ===

// Module 11897 (ChatFloatingNavButton)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, Pressable: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { pill: null, icon: null };
let size = { height: nativeDefault.modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE, width: nativeDefault.modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE, borderRadius: nativeDefault.modules.button.BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: nativeDefault.colors.BORDER_MUTED, alignItems: "center", justifyContent: "center", overflow: "hidden" };
obj2.pill = size;
const size1 = { width: nativeDefault.modules.mobile.JUMP_TO_PRESENT_ICON_SIZE, height: nativeDefault.modules.mobile.JUMP_TO_PRESENT_ICON_SIZE };
obj2.icon = size1;
let closure_7 = createStyles.createStyles(obj2);
const __initData = { code: "function ChatFloatingNavButtonTsx1(){const{withSpring,interpolateColor,pressed,bgColor,pressedBgColor,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[bgColor,pressedBgColor]),ON_PRESS_SPRING,\"animate-always\")};}" };
const __initData2 = { code: "function ChatFloatingNavButtonTsx2(){const{withSpring,interpolateColor,pressed,bgColor,pressedBgColor,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[bgColor,pressedBgColor]),ON_PRESS_SPRING,'animate-always')};}" };
const ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/ChatFloatingNavButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = sharedValue(token1[6]).c(24);
  ({ accessibilityLabel, icon, onPress } = arg0);
  const tmp3 = closure_7();
  let obj = sharedValue(token1[6]);
  const tmp = token1;
  sharedValue = sharedValue(token1[7]).useSharedValue(0);
  let obj2 = sharedValue(token1[7]);
  token = sharedValue(token1[8]).useToken(token(token1[4]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  let obj3 = sharedValue(token1[8]);
  const tmp5 = token;
  token1 = sharedValue(token1[8]).useToken(token(token1[4]).colors.BACKGROUND_BASE_LOWEST);
  const obj4 = sharedValue(token1[8]);
  const token2 = sharedValue(token1[8]).useToken(token(token1[4]).colors.CHAT_INPUT_ICON_DEFAULT_TINT);
  const obj5 = sharedValue(token1[8]);
  const fn = function t() {
    const obj = { backgroundColor: null };
    const obj2 = spring;
    const items = [token, token1];
    obj.backgroundColor = obj2.withSpring(ReanimatedRexport.interpolateColor(sharedValue.get(), [0, 1], items), springPresets.ON_PRESS_SPRING, "animate-always");
    return obj;
  };
  const obj6 = sharedValue(token1[7]);
  fn.__closure = { withSpring: sharedValue(token1[9]).withSpring, interpolateColor: sharedValue(token1[7]).interpolateColor, pressed: sharedValue, bgColor: token, pressedBgColor: token1, ON_PRESS_SPRING: sharedValue(token1[10]).ON_PRESS_SPRING };
  fn.__workletHash = 6110457262684;
  fn.__initData = __initData;
  const animatedStyle = obj6.useAnimatedStyle(fn);
  if (cResult[0] !== sharedValue) {
    class S {
      constructor() {
        result = closure_0.set(1);
        return;
      }
    }
    cResult[0] = sharedValue;
    cResult[1] = S;
  } else {
    class S {
      constructor() {
        result = closure_0.set(1);
        return;
      }
    }
  }
  if (cResult[2] !== sharedValue) {
    class I {
      constructor() {
        result = closure_0.set(0);
        return;
      }
    }
    cResult[2] = sharedValue;
    cResult[3] = I;
  } else {
    class I {
      constructor() {
        result = closure_0.set(0);
        return;
      }
    }
  }
  if (cResult[4] === animatedStyle) {
    class I {
      constructor() {
        result = closure_0.set(0);
        return;
      }
    }
    if (cResult[7] !== token2) {
      class I {
        constructor() {
          result = closure_0.set(0);
          return;
        }
      }
      tmp14[0] = token2;
      cResult[7] = token2;
      cResult[8] = tmp14;
    } else {
      class I {
        constructor() {
          result = closure_0.set(0);
          return;
        }
      }
    }
    if (cResult[9] === tmp3.icon) {
      class I {
        constructor() {
          result = closure_0.set(0);
          return;
        }
      }
      if (cResult[12] === icon) {
        class I {
          constructor() {
            result = closure_0.set(0);
            return;
          }
        }
        if (cResult[15] === tmp12) {
          class I {
            constructor() {
              result = closure_0.set(0);
              return;
            }
          }
          if (cResult[18] === accessibilityLabel) {
            class I {
              constructor() {
                result = closure_0.set(0);
                return;
              }
            }
          }
          const obj8 = { accessibilityRole: "button", accessibilityLabel, onPress, onPressIn: S, onPressOut: I, children: tmp20 };
          const tmp26 = <closure_5 accessibilityRole="button" accessibilityLabel={accessibilityLabel} onPress={onPress} onPressIn={S} onPressOut={I}>{tmp20}</closure_5>;
          cResult[18] = accessibilityLabel;
          cResult[19] = S;
          cResult[20] = I;
          cResult[21] = onPress;
          cResult[22] = tmp20;
          cResult[23] = tmp26;
        }
        const obj9 = { style: tmp12, children: tmp16 };
        const tmp22 = jsx(tmp5(tmp[7]).View, { style: tmp12, children: tmp16 });
        cResult[15] = tmp12;
        cResult[16] = tmp16;
        cResult[17] = tmp22;
      }
      const obj10 = { source: icon, style: tmp15 };
      const tmp19 = <closure_4 source={icon} style={tmp15} />;
      cResult[12] = icon;
      cResult[13] = tmp15;
      cResult[14] = tmp19;
    }
    let items = [tmp3.icon, tmp14];
    cResult[9] = tmp3.icon;
    cResult[10] = tmp14;
    cResult[11] = items;
  }
  const items1 = [tmp3.pill, animatedStyle];
  cResult[4] = animatedStyle;
  cResult[5] = tmp3.pill;
  cResult[6] = items1;
  const obj7 = { withSpring: sharedValue(token1[9]).withSpring, interpolateColor: sharedValue(token1[7]).interpolateColor, pressed: sharedValue, bgColor: token, pressedBgColor: token1, ON_PRESS_SPRING: sharedValue(token1[10]).ON_PRESS_SPRING };
}) : ((arg0) => {
  let sharedValue;
  let token;
  let token1;
  ({ accessibilityLabel, icon, onPress } = arg0);
  const tmp = closure_7();
  sharedValue = sharedValue(token1[7]).useSharedValue(0);
  let obj = sharedValue(token1[7]);
  token = sharedValue(token1[8]).useToken(token(token1[4]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  let obj2 = sharedValue(token1[8]);
  token1 = sharedValue(token1[8]).useToken(token(token1[4]).colors.BACKGROUND_BASE_LOWEST);
  let obj3 = sharedValue(token1[8]);
  const token2 = sharedValue(token1[8]).useToken(token(token1[4]).colors.CHAT_INPUT_ICON_DEFAULT_TINT);
  const obj4 = sharedValue(token1[8]);
  class C {
    constructor() {
      obj = { backgroundColor: null };
      obj2 = closure_0(closure_2[9]);
      obj3 = closure_0(closure_2[7]);
      items = [, ];
      items[0] = closure_1;
      items[1] = closure_2;
      interpolateColorResult = obj3.interpolateColor(closure_0.get(), [0, 1], items);
      obj.backgroundColor = obj2.withSpring(interpolateColorResult, closure_0(closure_2[10]).ON_PRESS_SPRING, "animate-always");
      return obj;
    }
  }
  const obj5 = sharedValue(token1[7]);
  C.__closure = { withSpring: sharedValue(token1[9]).withSpring, interpolateColor: sharedValue(token1[7]).interpolateColor, pressed: sharedValue, bgColor: token, pressedBgColor: token1, ON_PRESS_SPRING: sharedValue(token1[10]).ON_PRESS_SPRING };
  C.__workletHash = 11350052873759;
  C.__initData = __initData2;
  let items = [sharedValue];
  const animatedStyle = obj5.useAnimatedStyle(C);
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
    children: null
  };
  const obj8 = { style: null, children: null };
  const items2 = [tmp.pill, animatedStyle];
  obj8.style = items2;
  const obj9 = { source: icon, style: null };
  const items3 = [tmp.icon, { tintColor: token2 }];
  obj9.style = items3;
  obj8.children = <closure_4 source={icon} style={null} />;
  obj7.children = jsx(token(token1[7]).View, { style: null, children: null });
  return <closure_5 accessibilityRole="button" accessibilityLabel={accessibilityLabel} onPress={onPress} onPressIn={callback} onPressOut={noop.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1)}>{null}</closure_5>;
});