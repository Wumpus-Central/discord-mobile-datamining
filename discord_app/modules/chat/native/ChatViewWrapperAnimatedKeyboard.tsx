import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import { Easing } from "module_4116";

let c5;
let closure_6;
const require = arg1;
let c3 = importAllResult;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { duration: null, easing: null };
obj[0] = require("timingNone").timingStandardDuration;
obj[1] = Easing.bezier(0.2, 0, 0, 1);
let closure_8 = { code: "function ChatViewWrapperAnimatedKeyboardTsx1(){const{animatedHeight}=this.__closure;return animatedHeight.get();}" };
let closure_9 = { code: "function ChatViewWrapperAnimatedKeyboardTsx2(height,heightPrev){const{animatedAdjustedMargin,animatedAdjustedMarginPending}=this.__closure;if(heightPrev==null){return;}if(height<heightPrev){animatedAdjustedMargin.set(height);animatedAdjustedMarginPending.set(-1);}else{animatedAdjustedMarginPending.set(height);}}" };
let closure_10 = { code: "function ChatViewWrapperAnimatedKeyboardTsx3(){const{animatedAdjustedMargin,withTiming,animatedHeight,INSET_ANIMATION_CONFIG2,animatedAdjustedMarginPending}=this.__closure;return{flex:1,marginTop:animatedAdjustedMargin.get(),transform:[{translateY:withTiming(-animatedHeight.get(),INSET_ANIMATION_CONFIG2,'respect-motion-settings',function(finished){if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}})}]};}" };
let closure_11 = { code: "function ChatViewWrapperAnimatedKeyboardTsx4(finished){const{animatedAdjustedMarginPending,animatedAdjustedMargin}=this.__closure;if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}}" };
let closure_12 = importAllResult.memo((channelId) => {
  let c0;
  const tmp = importDefault(5284)();
  c0 = tmp;
  const items = [tmp];
  const obj = { style: null };
  const items1 = [importDefault(10577)(channelId.channelId), importAllResult.useMemo(() => ({ position: "absolute", bottom: -c0, height: c0, right: 0, left: 0 }), items)];
  obj[0] = items1;
  return callback(View, obj);
});
const bezierResult = Easing.bezier(0.2, 0, 0, 1);
let result = require("jsxProd").fileFinishedImporting("modules/chat/native/ChatViewWrapperAnimatedKeyboard.tsx");

export default function ChatViewWrapperAnimatedKeyboard(arg0) {
  let channelId;
  let children;
  let stickyHeader;
  let style;
  ({ channelId, style } = arg0);
  ({ children, stickyHeader } = arg0);
  let obj;
  let sharedValue;
  let sharedValue1;
  obj = sharedValue(sharedValue1[5])();
  let obj1 = obj(sharedValue1[3]);
  sharedValue = obj1.useSharedValue(obj.get());
  let obj2 = obj(sharedValue1[3]);
  sharedValue1 = obj2.useSharedValue(-1);
  let tmp = sharedValue(sharedValue1[9])(channelId);
  let fn = function n() {
    return obj.get();
  };
  fn.__closure = { animatedHeight: obj };
  fn.__workletHash = 9219066704490;
  fn.__initData = closure_8;
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
  fn2.__initData = closure_9;
  const animatedReaction = obj(sharedValue1[3]).useAnimatedReaction(fn, fn2);
  const obj4 = obj(sharedValue1[3]);
  const fn3 = function s() {
    let obj = { flex: 1, marginTop: sharedValue.get(), transform: null };
    obj = { translateY: null };
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = -1 !== store.get();
      }
      if (tmp) {
        const result = closure_1.set(store.get());
        const result1 = store.set(-1);
      }
    };
    obj = { animatedAdjustedMarginPending: sharedValue1, animatedAdjustedMargin: sharedValue };
    fn.__closure = obj;
    fn.__workletHash = 16224255032954;
    fn.__initData = outer1_11;
    obj[0] = obj(sharedValue1[6]).withTiming(-obj.get(), outer1_7, "respect-motion-settings", fn);
    const items = [obj];
    obj[2] = items;
    return obj;
  };
  obj = { animatedAdjustedMargin: sharedValue, withTiming: obj(sharedValue1[6]).withTiming, animatedHeight: obj, INSET_ANIMATION_CONFIG2: obj, animatedAdjustedMarginPending: sharedValue1 };
  fn3.__closure = obj;
  fn3.__workletHash = 7205645695043;
  fn3.__initData = closure_10;
  const animatedStyle = obj(sharedValue1[3]).useAnimatedStyle(fn3);
  obj = { children: null };
  obj1 = { header: stickyHeader, style, pointerEvents: tmp, children: null };
  obj2 = { style: animatedStyle, children: null };
  let items = [callback(View, { style, children }), callback(closure_12, { channelId })];
  obj2[1] = items;
  obj1[3] = callback2(sharedValue(sharedValue1[3]).View, obj2);
  obj[0] = callback(obj(sharedValue1[11]).StickyWrapper, obj1);
  return callback(obj(sharedValue1[10]).LayerScope, obj);
};