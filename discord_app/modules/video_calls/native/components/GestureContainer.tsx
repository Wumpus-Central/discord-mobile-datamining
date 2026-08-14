// discord_app/modules/video_calls/native/components/GestureContainer.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { useChannelCallStore } from "VoiceChatDrawerState";
import PIP_GESTURE_ACTIVE_OFFSET from "PIP_GESTURE_ACTIVE_OFFSET";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ PAN_GESTURE_FAIL_OFFSET_Y: c5, SWIPE_TO_CHAT_ACTIVE_OFFSET: closure_6 } = PIP_GESTURE_ACTIVE_OFFSET);
createCacheKey = { background: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BLACK };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_9 = { code: "function GestureContainerTsx1({velocityY:velocityY}){const{position,THRESHOLD_VELOCITY,runOnJS,ModalActionCreators,withTiming,DECELERATED_EASING}=this.__closure;if(position.get()===1||velocityY>THRESHOLD_VELOCITY){runOnJS(ModalActionCreators.pop)();}else{position.set(withTiming(0,{duration:300,easing:DECELERATED_EASING}));}}" };
let closure_10 = { code: "function GestureContainerTsx2({translationY:translationY}){const{THRESHOLD_TRANSLATE,position}=this.__closure;const boundedGestureY=Math.max(Math.min(translationY,THRESHOLD_TRANSLATE),0)/THRESHOLD_TRANSLATE;const easeOutCubic=1-Math.pow(1-boundedGestureY,3);position.set(easeOutCubic);}" };
let closure_11 = { code: "function GestureContainerTsx3(){const{interpolate,position,height}=this.__closure;return{flex:1,transform:[{translateY:interpolate(position.get(),[0,1],[0,height*0.06])},{scale:interpolate(position.get(),[0,1],[1,0.9])}]};}" };
let result = require("VoiceChatDrawerState").fileFinishedImporting("modules/video_calls/native/components/GestureContainer.tsx");

export default function GestureContainer(children) {
  let height;
  let sharedValue;
  const tmp = createCacheKey();
  height = sharedValue(1493)().height;
  let obj = height(4083);
  sharedValue = obj.useSharedValue(0);
  const Gesture = height(5488).Gesture;
  const tmp2 = useChannelCallStore((isGestureEnabled) => isGestureEnabled.isGestureEnabled);
  const PanResult = Gesture.Pan();
  class S {
    constructor(arg0) {
      result = c1.set(1 - Math.pow(1 - Math.max(Math.min(children.translationY, 200), 0) / 200, 3));
      return;
    }
  }
  S.__closure = { THRESHOLD_TRANSLATE: 200, position: sharedValue };
  S.__workletHash = 9476726087456;
  S.__initData = closure_10;
  const enabledResult = Gesture.Pan().enabled(tmp2);
  const fn = function h(velocityY) {
    let obj = sharedValue;
    if (1 !== sharedValue.get()) {
      if (velocityY.velocityY <= 500) {
        obj = { duration: 300, easing: null };
        obj[1] = height(outer1_2[12]).DECELERATED_EASING;
        const result = obj.set(height(outer1_2[11]).withTiming(0, obj));
        const obj2 = height(outer1_2[11]);
      }
    }
    height(outer1_2[8]).runOnJS(sharedValue(outer1_2[10]).pop)();
  };
  obj = { position: sharedValue, THRESHOLD_VELOCITY: 500, runOnJS: height(4083).runOnJS, ModalActionCreators: sharedValue(4572), withTiming: height(4343).withTiming, DECELERATED_EASING: height(1297).DECELERATED_EASING };
  fn.__closure = obj;
  fn.__workletHash = 10736744030668;
  fn.__initData = closure_9;
  const onUpdateResult = Gesture.Pan().enabled(tmp2).onUpdate(S);
  let items = [-closure_5, closure_5];
  const onEndResult = Gesture.Pan().enabled(tmp2).onUpdate(S).onEnd(fn);
  let items1 = [-closure_6, closure_6];
  const activeOffsetYResult = Gesture.Pan().enabled(tmp2).onUpdate(S).onEnd(fn).activeOffsetY(items);
  const failOffsetXResult = Gesture.Pan().enabled(tmp2).onUpdate(S).onEnd(fn).activeOffsetY(items).failOffsetX(items1);
  const fn2 = function p() {
    let obj = { flex: 1, transform: null };
    obj = { translateY: null };
    const items = [0, 0.06 * height];
    obj[0] = height(outer1_2[8]).interpolate(sharedValue.get(), [0, 1], items);
    const items1 = [obj, ];
    obj = { scale: null };
    const obj3 = height(outer1_2[8]);
    obj[0] = height(outer1_2[8]).interpolate(sharedValue.get(), [0, 1], [1, 0.9]);
    items1[1] = obj;
    obj[1] = items1;
    return obj;
  };
  obj = { interpolate: height(4083).interpolate, position: sharedValue, height };
  fn2.__closure = obj;
  fn2.__workletHash = 16049033434372;
  fn2.__initData = closure_11;
  const obj1 = { style: tmp.background, children: null };
  const animatedStyle = height(4083).useAnimatedStyle(fn2);
  let obj2 = { gesture: failOffsetXResult, children: null };
  obj2[1] = jsx(sharedValue(4083).View, { style: animatedStyle, children: children.children });
  obj1[1] = jsx(height(5488).GestureDetector, { gesture: failOffsetXResult, children: null });
  return <View style={tmp.background}>{null}</View>;
};