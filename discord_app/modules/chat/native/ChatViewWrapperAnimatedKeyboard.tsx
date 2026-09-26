// === Module 10893: ChatViewWrapperAnimatedKeyboard ===

// Module 10893 (ChatViewWrapperAnimatedKeyboard)
import timing from "timing" /* 4837 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 5891 */;
import useChannelSafeAreaBottomStylesDefault from "useChannelSafeAreaBottomStyles" /* 10899 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const Easing = fn(4566).Easing;
let obj = { duration: fn(4840).timingStandardDuration, easing: Easing.bezier(0.2, 0, 0, 1) };
const __initData = { code: "function ChatViewWrapperAnimatedKeyboardTsx1(){const{animatedHeight}=this.__closure;return animatedHeight.get();}" };
const __initData2 = { code: "function ChatViewWrapperAnimatedKeyboardTsx2(height,heightPrev){const{animatedAdjustedMargin,animatedAdjustedMarginPending}=this.__closure;if(heightPrev==null){return;}if(height<heightPrev){animatedAdjustedMargin.set(height);animatedAdjustedMarginPending.set(-1);}else{animatedAdjustedMarginPending.set(height);}}" };
const __initData3 = { code: "function ChatViewWrapperAnimatedKeyboardTsx3(){const{animatedAdjustedMargin,withTiming,animatedHeight,INSET_ANIMATION_CONFIG2,animatedAdjustedMarginPending}=this.__closure;return{flex:1,marginTop:animatedAdjustedMargin.get(),transform:[{translateY:withTiming(-animatedHeight.get(),INSET_ANIMATION_CONFIG2,'respect-motion-settings',function(finished){if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}})}]};}" };
let closure_11 = { code: "function ChatViewWrapperAnimatedKeyboardTsx4(finished){const{animatedAdjustedMarginPending,animatedAdjustedMargin}=this.__closure;if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}}" };
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
    }, items)
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
  const INSET_ANIMATION_CONFIG2 = sharedValue(sharedValue1[5])();
  let tmp = sharedValue(sharedValue1[9])(channelId);
  sharedValue = INSET_ANIMATION_CONFIG2(sharedValue1[3]).useSharedValue(INSET_ANIMATION_CONFIG2.get());
  let obj2 = INSET_ANIMATION_CONFIG2(sharedValue1[3]);
  sharedValue1 = INSET_ANIMATION_CONFIG2(sharedValue1[3]).useSharedValue(-1);
  const obj3 = INSET_ANIMATION_CONFIG2(sharedValue1[3]);
  let fn = function n() {
    return obj.get();
  };
  fn.__closure = { animatedHeight: INSET_ANIMATION_CONFIG2 };
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
  const animatedReaction = INSET_ANIMATION_CONFIG2(sharedValue1[3]).useAnimatedReaction(fn, fn2);
  const obj4 = INSET_ANIMATION_CONFIG2(sharedValue1[3]);
  const fn3 = function s() {
    obj = { flex: 1, marginTop: sharedValue.get(), transform: null };
    const obj2 = { translateY: null };
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
    fn.__closure = { animatedAdjustedMarginPending: sharedValue1, animatedAdjustedMargin: sharedValue };
    fn.__workletHash = 16224255032954;
    fn.__initData = __initData;
    obj2.translateY = timing.withTiming(-obj.get(), obj, "respect-motion-settings", fn);
    const items = [obj2];
    obj.transform = items;
    return obj;
  };
  const obj5 = INSET_ANIMATION_CONFIG2(sharedValue1[3]);
  fn3.__closure = { animatedAdjustedMargin: sharedValue, withTiming: INSET_ANIMATION_CONFIG2(sharedValue1[6]).withTiming, animatedHeight: INSET_ANIMATION_CONFIG2, INSET_ANIMATION_CONFIG2, animatedAdjustedMarginPending: sharedValue1 };
  fn3.__workletHash = 7205645695043;
  fn3.__initData = __initData3;
  const animatedStyle = obj5.useAnimatedStyle(fn3);
  const obj7 = { children: null };
  const obj8 = { header: stickyHeader, style, pointerEvents: tmp, children: null };
  const obj9 = { style: animatedStyle, children: null };
  let items = [closure_5(View, { style, children }), closure_5(closure_12, { channelId })];
  obj9.children = items;
  obj8.children = closure_6(sharedValue(sharedValue1[3]).View, obj9);
  obj7.children = closure_5(INSET_ANIMATION_CONFIG2(sharedValue1[11]).StickyWrapper, obj8);
  return closure_5(INSET_ANIMATION_CONFIG2(sharedValue1[10]).LayerScope, obj7);
};