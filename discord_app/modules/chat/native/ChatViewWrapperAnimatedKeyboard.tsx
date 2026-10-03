// === Module 9771: ChatViewWrapperAnimatedKeyboard ===

// Module 9771 (ChatViewWrapperAnimatedKeyboard)
import c from "c" /* 576 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 6474 */;
import LayerScope from "LayerScope" /* 6651 */;
import useChannelSafeAreaBottomStylesDefault from "useChannelSafeAreaBottomStyles" /* 9777 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 9780 */;
import StickyWrapper from "StickyWrapper" /* 9781 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const Easing = fn(4612).Easing;
let obj = { duration: fn(4894).timingStandardDuration, easing: Easing.bezier(0.2, 0, 0, 1) };
const __initData = { code: "function ChatViewWrapperAnimatedKeyboardTsx1(){const{animatedHeight}=this.__closure;return animatedHeight.get();}" };
const __initData2 = { code: "function ChatViewWrapperAnimatedKeyboardTsx2(height,heightPrev){const{animatedAdjustedMargin,animatedAdjustedMarginPending}=this.__closure;if(heightPrev==null){return;}if(height<heightPrev){animatedAdjustedMargin.set(height);animatedAdjustedMarginPending.set(-1);}else{animatedAdjustedMarginPending.set(height);}}" };
const __initData3 = { code: "function ChatViewWrapperAnimatedKeyboardTsx3(){const{animatedAdjustedMargin,withTiming,animatedHeight,INSET_ANIMATION_CONFIG2,animatedAdjustedMarginPending}=this.__closure;return{flex:1,marginTop:animatedAdjustedMargin.get(),transform:[{translateY:withTiming(-animatedHeight.get(),INSET_ANIMATION_CONFIG2,\"respect-motion-settings\",function(finished){if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}})}]};}" };
let closure_11 = { code: "function ChatViewWrapperAnimatedKeyboardTsx4(finished){const{animatedAdjustedMarginPending,animatedAdjustedMargin}=this.__closure;if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}}" };
const __initData4 = { code: "function ChatViewWrapperAnimatedKeyboardTsx5(){const{animatedHeight}=this.__closure;return animatedHeight.get();}" };
const __initData5 = { code: "function ChatViewWrapperAnimatedKeyboardTsx6(height,heightPrev){const{animatedAdjustedMargin,animatedAdjustedMarginPending}=this.__closure;if(heightPrev==null){return;}if(height<heightPrev){animatedAdjustedMargin.set(height);animatedAdjustedMarginPending.set(-1);}else{animatedAdjustedMarginPending.set(height);}}" };
const __initData6 = { code: "function ChatViewWrapperAnimatedKeyboardTsx7(){const{animatedAdjustedMargin,withTiming,animatedHeight,INSET_ANIMATION_CONFIG2,animatedAdjustedMarginPending}=this.__closure;return{flex:1,marginTop:animatedAdjustedMargin.get(),transform:[{translateY:withTiming(-animatedHeight.get(),INSET_ANIMATION_CONFIG2,'respect-motion-settings',function(finished){if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}})}]};}" };
let closure_15 = { code: "function ChatViewWrapperAnimatedKeyboardTsx8(finished){const{animatedAdjustedMarginPending,animatedAdjustedMargin}=this.__closure;if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}}" };
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const INSET_ANIMATION_CONFIG2 = sharedValue(sharedValue1[6])();
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
  fn3.__closure = { animatedAdjustedMargin: sharedValue, withTiming: INSET_ANIMATION_CONFIG2(sharedValue1[7]).withTiming, animatedHeight: INSET_ANIMATION_CONFIG2, INSET_ANIMATION_CONFIG2, animatedAdjustedMarginPending: sharedValue1 };
  fn3.__workletHash = 10909217889027;
  fn3.__initData = __initData3;
  return obj5.useAnimatedStyle(fn3);
}) : (() => {
  const INSET_ANIMATION_CONFIG2 = sharedValue(sharedValue1[6])();
  sharedValue = INSET_ANIMATION_CONFIG2(sharedValue1[3]).useSharedValue(INSET_ANIMATION_CONFIG2.get());
  let obj2 = INSET_ANIMATION_CONFIG2(sharedValue1[3]);
  sharedValue1 = INSET_ANIMATION_CONFIG2(sharedValue1[3]).useSharedValue(-1);
  const obj3 = INSET_ANIMATION_CONFIG2(sharedValue1[3]);
  let fn = function n() {
    return obj.get();
  };
  fn.__closure = { animatedHeight: INSET_ANIMATION_CONFIG2 };
  fn.__workletHash = 5965555769838;
  fn.__initData = __initData4;
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
  fn2.__workletHash = 11887946519660;
  fn2.__initData = __initData5;
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
    fn.__workletHash = 153738036470;
    fn.__initData = __initData;
    obj2.translateY = timing.withTiming(-obj.get(), obj, "respect-motion-settings", fn);
    const items = [obj2];
    obj.transform = items;
    return obj;
  };
  const obj5 = INSET_ANIMATION_CONFIG2(sharedValue1[3]);
  fn3.__closure = { animatedAdjustedMargin: sharedValue, withTiming: INSET_ANIMATION_CONFIG2(sharedValue1[7]).withTiming, animatedHeight: INSET_ANIMATION_CONFIG2, INSET_ANIMATION_CONFIG2, animatedAdjustedMarginPending: sharedValue1 };
  fn3.__workletHash = 3956429727687;
  fn3.__initData = __initData6;
  return obj5.useAnimatedStyle(fn3);
});
ReactCompilerGating = fn(558);
let closure_17 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = c.c(6);
  const tmp2 = useCustomKeyboardHeightDefault();
  const tmp3 = useChannelSafeAreaBottomStylesDefault(channelId.channelId);
  if (cResult[0] === tmp2) {
    if (cResult[1] === tmp4) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === tmp3) {
      if (cResult[4] === tmp5) {
        let tmp6 = cResult[5];
      }
      return tmp6;
    }
    const obj2 = { style: null };
    const items = [tmp3, tmp5];
    obj2.style = items;
    const tmp9 = hasOwnProperty(View, obj2);
    cResult[3] = tmp3;
    cResult[4] = tmp5;
    cResult[5] = tmp9;
    tmp6 = tmp9;
  }
  const rect = { position: "absolute", bottom: tmp4, height: tmp2, right: 0, left: 0 };
  cResult[0] = tmp2;
  cResult[1] = -tmp2;
  cResult[2] = rect;
  tmp5 = rect;
}) : ((channelId) => {
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
}));
ReactCompilerGating = fn(558);
const bezierResult = Easing.bezier(0.2, 0, 0, 1);
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapperAnimatedKeyboard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(14);
  ({ channelId, children, stickyHeader, style } = arg0);
  const tmp5 = useChatViewPointerEventsDefault(channelId);
  const tmp6 = closure_16();
  if (cResult[0] === children) {
    if (cResult[1] === style) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] !== channelId) {
      const obj2 = { channelId };
      const tmp12 = hasOwnProperty(closure_17, obj2);
      cResult[3] = channelId;
      cResult[4] = tmp12;
      let tmp9 = tmp12;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp6) {
      if (cResult[6] === tmp7) {
        if (cResult[7] === tmp9) {
          let tmp13 = cResult[8];
        }
        if (cResult[9] === tmp5) {
          if (cResult[10] === stickyHeader) {
            if (cResult[11] === style) {
              if (cResult[12] === tmp13) {
                let tmp16 = cResult[13];
              }
              return tmp16;
            }
          }
        }
        const obj3 = { children: null };
        const obj4 = { header: stickyHeader, style, pointerEvents: tmp5, children: tmp13 };
        obj3.children = hasOwnProperty(StickyWrapper.StickyWrapper, obj4);
        const tmp18 = hasOwnProperty(LayerScope.LayerScope, obj3);
        cResult[9] = tmp5;
        cResult[10] = stickyHeader;
        cResult[11] = style;
        cResult[12] = tmp13;
        cResult[13] = tmp18;
        tmp16 = tmp18;
      }
    }
    const obj5 = { style: tmp6, children: null };
    const items = [tmp7, tmp9];
    obj5.children = items;
    const tmp15 = timestampProducer(ReanimatedRexportDefault.View, obj5);
    cResult[5] = tmp6;
    cResult[6] = tmp7;
    cResult[7] = tmp9;
    cResult[8] = tmp15;
    tmp13 = tmp15;
  }
  const tmp8 = hasOwnProperty(View, { style, children });
  cResult[0] = children;
  cResult[1] = style;
  cResult[2] = tmp8;
  tmp7 = tmp8;
}) : ((arg0) => {
  ({ channelId, style } = arg0);
  ({ children, stickyHeader } = arg0);
  const tmp = useChatViewPointerEventsDefault(channelId);
  obj = { children: null };
  const obj2 = { header: stickyHeader, style, pointerEvents: tmp, children: null };
  const obj3 = { style: closure_16(), children: null };
  const items = [hasOwnProperty(View, { style, children }), hasOwnProperty(closure_17, { channelId })];
  obj3.children = items;
  obj2.children = timestampProducer(ReanimatedRexportDefault.View, obj3);
  obj.children = hasOwnProperty(StickyWrapper.StickyWrapper, obj2);
  return hasOwnProperty(LayerScope.LayerScope, obj);
});