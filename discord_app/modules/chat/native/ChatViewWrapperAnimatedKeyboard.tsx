// === Module 9784: ChatViewWrapperAnimatedKeyboard ===

// Module 9784 (ChatViewWrapperAnimatedKeyboard)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import timingPresets from "timingPresets" /* 4900 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 6481 */;
import LayerScope2 from "LayerScope" /* 6658 */;
import useChannelSafeAreaBottomStylesDefault from "useChannelSafeAreaBottomStyles" /* 9790 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 9793 */;
import StickyWrapper2 from "StickyWrapper" /* 9794 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;

let bezierResult;
let hasOwnProperty;
let metroRequire;
let View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const Easing = ReanimatedRexport.Easing;
let obj = { duration: timingPresets.timingStandardDuration, easing: bezierResult };
const __initData = { code: "function ChatViewWrapperAnimatedKeyboardTsx1(){const{animatedHeight}=this.__closure;return animatedHeight.get();}" };
const __initData2 = { code: "function ChatViewWrapperAnimatedKeyboardTsx2(height,heightPrev){const{animatedAdjustedMargin,animatedAdjustedMarginPending}=this.__closure;if(heightPrev==null){return;}if(height<heightPrev){animatedAdjustedMargin.set(height);animatedAdjustedMarginPending.set(-1);}else{animatedAdjustedMarginPending.set(height);}}" };
const __initData3 = { code: "function ChatViewWrapperAnimatedKeyboardTsx3(){const{animatedAdjustedMargin,withTiming,animatedHeight,INSET_ANIMATION_CONFIG2,animatedAdjustedMarginPending}=this.__closure;return{flex:1,marginTop:animatedAdjustedMargin.get(),transform:[{translateY:withTiming(-animatedHeight.get(),INSET_ANIMATION_CONFIG2,\"respect-motion-settings\",function(finished){if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}})}]};}" };
let closure_11 = { code: "function ChatViewWrapperAnimatedKeyboardTsx4(finished){const{animatedAdjustedMarginPending,animatedAdjustedMargin}=this.__closure;if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}}" };
const __initData4 = { code: "function ChatViewWrapperAnimatedKeyboardTsx5(){const{animatedHeight}=this.__closure;return animatedHeight.get();}" };
const __initData5 = { code: "function ChatViewWrapperAnimatedKeyboardTsx6(height,heightPrev){const{animatedAdjustedMargin,animatedAdjustedMarginPending}=this.__closure;if(heightPrev==null){return;}if(height<heightPrev){animatedAdjustedMargin.set(height);animatedAdjustedMarginPending.set(-1);}else{animatedAdjustedMarginPending.set(height);}}" };
const __initData6 = { code: "function ChatViewWrapperAnimatedKeyboardTsx7(){const{animatedAdjustedMargin,withTiming,animatedHeight,INSET_ANIMATION_CONFIG2,animatedAdjustedMarginPending}=this.__closure;return{flex:1,marginTop:animatedAdjustedMargin.get(),transform:[{translateY:withTiming(-animatedHeight.get(),INSET_ANIMATION_CONFIG2,'respect-motion-settings',function(finished){if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}})}]};}" };
let closure_15 = { code: "function ChatViewWrapperAnimatedKeyboardTsx8(finished){const{animatedAdjustedMarginPending,animatedAdjustedMargin}=this.__closure;if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}}" };
bezierResult = Easing.bezier(0.2, 0, 0, 1);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let sharedValue;
  let sharedValue1;
  const INSET_ANIMATION_CONFIG2 = sharedValue(sharedValue1[6])();
  let obj2 = INSET_ANIMATION_CONFIG2(sharedValue1[3]);
  sharedValue = obj2.useSharedValue(INSET_ANIMATION_CONFIG2.get());
  let obj3 = INSET_ANIMATION_CONFIG2(sharedValue1[3]);
  sharedValue1 = obj3.useSharedValue(-1);
  let obj4 = INSET_ANIMATION_CONFIG2(sharedValue1[3]);
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
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  const fn3 = function s() {
    let fn;
    let items;
    let obj3;
    obj = { flex: 1, marginTop: sharedValue.get(), transform: items };
    const obj2 = { translateY: obj3.withTiming(-obj.get(), obj, "respect-motion-settings", fn) };
    fn = function t(arg0) {
      const tmp = arg0 && -1 !== sharedValue1.get();
      if (tmp) {
        const result = sharedValue.set(sharedValue1.get());
        const result1 = sharedValue1.set(-1);
      }
    };
    const obj4 = { animatedAdjustedMarginPending: sharedValue1, animatedAdjustedMargin: sharedValue };
    fn.__closure = obj4;
    fn.__workletHash = 16224255032954;
    fn.__initData = __initData;
    items = [obj2];
    obj3 = timing;
    return obj;
  };
  const obj5 = INSET_ANIMATION_CONFIG2(sharedValue1[3]);
  fn3.__closure = { animatedAdjustedMargin: sharedValue, withTiming: INSET_ANIMATION_CONFIG2(sharedValue1[7]).withTiming, animatedHeight: INSET_ANIMATION_CONFIG2, INSET_ANIMATION_CONFIG2, animatedAdjustedMarginPending: sharedValue1 };
  fn3.__workletHash = 10909217889027;
  fn3.__initData = __initData3;
  ({ animatedAdjustedMargin: sharedValue, withTiming: INSET_ANIMATION_CONFIG2(sharedValue1[7]).withTiming, animatedHeight: INSET_ANIMATION_CONFIG2, INSET_ANIMATION_CONFIG2, animatedAdjustedMarginPending: sharedValue1 });
  return obj5.useAnimatedStyle(fn3);
}) : (() => {
  let sharedValue;
  let sharedValue1;
  const INSET_ANIMATION_CONFIG2 = sharedValue(sharedValue1[6])();
  let obj2 = INSET_ANIMATION_CONFIG2(sharedValue1[3]);
  sharedValue = obj2.useSharedValue(INSET_ANIMATION_CONFIG2.get());
  let obj3 = INSET_ANIMATION_CONFIG2(sharedValue1[3]);
  sharedValue1 = obj3.useSharedValue(-1);
  let obj4 = INSET_ANIMATION_CONFIG2(sharedValue1[3]);
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
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  const fn3 = function s() {
    let fn;
    let items;
    let obj3;
    obj = { flex: 1, marginTop: sharedValue.get(), transform: items };
    const obj2 = { translateY: obj3.withTiming(-obj.get(), obj, "respect-motion-settings", fn) };
    fn = function t(arg0) {
      const tmp = arg0 && -1 !== sharedValue1.get();
      if (tmp) {
        const result = sharedValue.set(sharedValue1.get());
        const result1 = sharedValue1.set(-1);
      }
    };
    const obj4 = { animatedAdjustedMarginPending: sharedValue1, animatedAdjustedMargin: sharedValue };
    fn.__closure = obj4;
    fn.__workletHash = 153738036470;
    fn.__initData = __initData;
    items = [obj2];
    obj3 = timing;
    return obj;
  };
  const obj5 = INSET_ANIMATION_CONFIG2(sharedValue1[3]);
  fn3.__closure = { animatedAdjustedMargin: sharedValue, withTiming: INSET_ANIMATION_CONFIG2(sharedValue1[7]).withTiming, animatedHeight: INSET_ANIMATION_CONFIG2, INSET_ANIMATION_CONFIG2, animatedAdjustedMarginPending: sharedValue1 };
  fn3.__workletHash = 3956429727687;
  fn3.__initData = __initData6;
  ({ animatedAdjustedMargin: sharedValue, withTiming: INSET_ANIMATION_CONFIG2(sharedValue1[7]).withTiming, animatedHeight: INSET_ANIMATION_CONFIG2, INSET_ANIMATION_CONFIG2, animatedAdjustedMarginPending: sharedValue1 });
  return obj5.useAnimatedStyle(fn3);
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let items;
  obj = react2;
  const cResult = obj.c(6);
  channelId = channelId.channelId;
  const tmp2 = useCustomKeyboardHeightDefault();
  const tmp3 = useChannelSafeAreaBottomStylesDefault(channelId);
  if (cResult[0] === tmp2) {
    let tmp5;
    if (cResult[1] === -tmp2) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp3) {
      let tmp6;
      if (cResult[4] === tmp5) {
        tmp6 = cResult[5];
      }
      return tmp6;
    }
    const obj2 = { style: items };
    items = [tmp3, tmp5];
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
  let items1;
  channelId = channelId.channelId;
  const tmp = useCustomKeyboardHeightDefault();
  let closure_0 = tmp;
  const items = [tmp];
  obj = { style: items1 };
  items1 = [useChannelSafeAreaBottomStylesDefault(channelId), ];
  useChannelSafeAreaBottomStylesDefault(channelId);
  items1[1] = react.useMemo(() => {
    const rect = { position: "absolute", bottom: -height, height, right: 0, left: 0 };
    return rect;
  }, items);
  return hasOwnProperty(View, obj);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channelId;
  let children;
  let items;
  let obj4;
  let stickyHeader;
  let style;
  obj = react2;
  const cResult = obj.c(14);
  ({ channelId, children, stickyHeader, style } = arg0);
  const tmp5 = useChatViewPointerEventsDefault(channelId);
  const tmp6 = closure_16();
  if (cResult[0] === children) {
    let tmp7;
    let tmp9;
    if (cResult[1] === style) {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== channelId) {
      const obj2 = { channelId };
      const tmp12 = hasOwnProperty(closure_17, obj2);
      cResult[3] = channelId;
      cResult[4] = tmp12;
      tmp9 = tmp12;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp6) {
      if (cResult[6] === tmp7) {
        let tmp13;
        if (cResult[7] === tmp9) {
          tmp13 = cResult[8];
        }
        if (cResult[9] === tmp5) {
          if (cResult[10] === stickyHeader) {
            if (cResult[11] === style) {
              let tmp16;
              if (cResult[12] === tmp13) {
                tmp16 = cResult[13];
              }
              return tmp16;
            }
          }
        }
        const obj3 = { children: hasOwnProperty(StickyWrapper2.StickyWrapper, obj4) };
        const LayerScope = LayerScope2.LayerScope;
        obj4 = { header: stickyHeader, style, pointerEvents: tmp5, children: tmp13 };
        const tmp18 = hasOwnProperty(LayerScope, obj3);
        cResult[9] = tmp5;
        cResult[10] = stickyHeader;
        cResult[11] = style;
        cResult[12] = tmp13;
        cResult[13] = tmp18;
        tmp16 = tmp18;
      }
    }
    const obj5 = { style: tmp6, children: items };
    items = [tmp7, tmp9];
    const tmp15 = metroRequire(ReanimatedRexportDefault.View, obj5);
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
  let StickyWrapper;
  let channelId;
  let children;
  let items;
  let obj2;
  let obj3;
  let stickyHeader;
  let style;
  ({ channelId, style } = arg0);
  ({ children, stickyHeader } = arg0);
  const tmp = useChatViewPointerEventsDefault(channelId);
  obj = { children: hasOwnProperty(StickyWrapper, obj2) };
  const tmp2 = closure_16();
  const LayerScope = LayerScope2.LayerScope;
  obj2 = { header: stickyHeader, style, pointerEvents: tmp, children: metroRequire(View, obj3) };
  obj3 = { style: tmp2, children: items };
  StickyWrapper = StickyWrapper2.StickyWrapper;
  View = ReanimatedRexportDefault.View;
  items = [hasOwnProperty(View, { style, children }), hasOwnProperty(closure_17, { channelId })];
  return hasOwnProperty(LayerScope, obj);
});
let result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapperAnimatedKeyboard.tsx");

export default tmp5;