// discord_app/modules/chat/native/ChatViewWrapperAnimatedKeyboard.tsx
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import useCustomKeyboardHeightDefault from "../../keyboard/native/useCustomKeyboardHeight.tsx";
import useChannelSafeAreaBottomStylesDefault from "../../main_tabs_v2/native/channel/useChannelSafeAreaBottomStyles.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const Easing = fn(4296).Easing;
let obj = { duration: fn(4564).timingStandardDuration, easing: Easing.bezier(0.2, 0, 0, 1) };
const __initData = {
  code: "function ChatViewWrapperAnimatedKeyboardTsx1(){const{animatedHeight}=this.__closure;return animatedHeight.get();}",
};
const __initData2 = {
  code: "function ChatViewWrapperAnimatedKeyboardTsx2(height,heightPrev){const{animatedAdjustedMargin,animatedAdjustedMarginPending}=this.__closure;if(heightPrev==null){return;}if(height<heightPrev){animatedAdjustedMargin.set(height);animatedAdjustedMarginPending.set(-1);}else{animatedAdjustedMarginPending.set(height);}}",
};
const __initData3 = {
  code: "function ChatViewWrapperAnimatedKeyboardTsx3(){const{animatedAdjustedMargin,withTiming,animatedHeight,INSET_ANIMATION_CONFIG2,animatedAdjustedMarginPending}=this.__closure;return{flex:1,marginTop:animatedAdjustedMargin.get(),transform:[{translateY:withTiming(-animatedHeight.get(),INSET_ANIMATION_CONFIG2,'respect-motion-settings',function(finished){if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}})}]};}",
};
let closure_11 = {
  code: "function ChatViewWrapperAnimatedKeyboardTsx4(finished){const{animatedAdjustedMarginPending,animatedAdjustedMargin}=this.__closure;if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}}",
};
let closure_12 = noop.memo((channelId) => {
  const tmp = useCustomKeyboardHeightDefault();
  const height = tmp;
  const items = [tmp];
  obj = { style: null };
  const items1 = [
    useChannelSafeAreaBottomStylesDefault(channelId.channelId),
    noop.useMemo(() => {
      const rect = { position: "absolute", bottom: -height, height, right: 0, left: 0 };
      return rect;
    }, items),
  ];
  obj.style = items1;
  return hasOwnProperty(View, obj);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapperAnimatedKeyboard.tsx");

export default function ChatViewWrapperAnimatedKeyboard(arg0) {
  ({ channelId, style } = arg0);
  ({ children, stickyHeader } = arg0);
  let sharedValue;
  let sharedValue1;
  let __closure = sharedValue(sharedValue1[5])();
  let obj1 = __closure(sharedValue1[3]);
  sharedValue = obj1.useSharedValue(__closure.get());
  let obj2 = __closure(sharedValue1[3]);
  sharedValue1 = obj2.useSharedValue(-1);
  let tmp = sharedValue(sharedValue1[9])(channelId);
  let fn = function n() {
    return obj.get();
  };
  fn.__closure = { animatedHeight: __closure };
  fn.__workletHash = 9219066704490;
  fn.__initData = __initData;
  const fn2 = function t(arg0, arg1) {
    if (null != arg1) {
      if (arg0 < arg1) {
        const result = sharedValue.set(arg0);
        const result1 = sharedValue1.set(-1);
      } else {
        const result2 = sharedValue1.set(arg0);
      }
    }
  };
  fn2.__closure = { animatedAdjustedMargin: sharedValue, animatedAdjustedMarginPending: sharedValue1 };
  fn2.__workletHash = 15141457454312;
  fn2.__initData = __initData2;
  const animatedReaction = __closure(sharedValue1[3]).useAnimatedReaction(fn, fn2);
  const obj4 = __closure(sharedValue1[3]);
  const fn3 = function s() {
    let __closure = { flex: 1, marginTop: sharedValue.get(), transform: null };
    __closure = { translateY: null };
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = -1 !== sharedValue1.get();
      }
      if (tmp) {
        const result = sharedValue.set(sharedValue1.get());
        const result1 = sharedValue1.set(-1);
      }
    };
    __closure = { animatedAdjustedMarginPending: sharedValue1, animatedAdjustedMargin: sharedValue };
    fn.__closure = __closure;
    fn.__workletHash = 16224255032954;
    fn.__initData = __initData;
    __closure.translateY = timing.withTiming(-__closure.get(), __closure, "respect-motion-settings", fn);
    const items = [__closure];
    __closure.transform = items;
    return __closure;
  };
  __closure = {
    animatedAdjustedMargin: sharedValue,
    withTiming: __closure(sharedValue1[6]).withTiming,
    animatedHeight: __closure,
    INSET_ANIMATION_CONFIG2: __closure,
    animatedAdjustedMarginPending: sharedValue1,
  };
  fn3.__closure = __closure;
  fn3.__workletHash = 7205645695043;
  fn3.__initData = __initData3;
  const animatedStyle = __closure(sharedValue1[3]).useAnimatedStyle(fn3);
  __closure = { children: null };
  obj1 = { header: stickyHeader, style, pointerEvents: tmp, children: null };
  obj2 = { style: animatedStyle, children: null };
  let items = [closure_5(View, { style, children }), closure_5(closure_12, { channelId })];
  obj2.children = items;
  obj1.children = closure_6(sharedValue(sharedValue1[3]).View, obj2);
  __closure.children = closure_5(__closure(sharedValue1[11]).StickyWrapper, obj1);
  return closure_5(__closure(sharedValue1[10]).LayerScope, __closure);
}
