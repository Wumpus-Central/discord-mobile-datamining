// discord_app/modules/video_calls/native/components/GestureContainer.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { useChannelCallStore } from "../ChannelCallStore.tsx";
import PIP_GESTURE_ACTIVE_OFFSET from "Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ PAN_GESTURE_FAIL_OFFSET_Y: c5, SWIPE_TO_CHAT_ACTIVE_OFFSET: closure_6 } = PIP_GESTURE_ACTIVE_OFFSET);
createCacheKey = { background: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BLACK };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
let closure_9 = { code: "function GestureContainerTsx1({velocityY:velocityY}){const{position,THRESHOLD_VELOCITY,runOnJS,ModalActionCreators,withTiming,DECELERATED_EASING}=this.__closure;if(position.get()===1||velocityY>THRESHOLD_VELOCITY){runOnJS(ModalActionCreators.pop)();}else{position.set(withTiming(0,{duration:300,easing:DECELERATED_EASING}));}}" };
let closure_10 = { code: "function GestureContainerTsx2({translationY:translationY}){const{THRESHOLD_TRANSLATE,position}=this.__closure;const boundedGestureY=Math.max(Math.min(translationY,THRESHOLD_TRANSLATE),0)/THRESHOLD_TRANSLATE;const easeOutCubic=1-Math.pow(1-boundedGestureY,3);position.set(easeOutCubic);}" };
let closure_11 = { code: "function GestureContainerTsx3(){const{interpolate,position,height}=this.__closure;return{flex:1,transform:[{translateY:interpolate(position.get(),[0,1],[0,height*0.06])},{scale:interpolate(position.get(),[0,1],[1,0.9])}]};}" };
let result = require("set").fileFinishedImporting("modules/video_calls/native/components/GestureContainer.tsx");

export default function GestureContainer(children) {
  let height;
  let sharedValue;
  const tmp = callback();
  height = sharedValue(1494)().height;
  let obj = height(4120);
  sharedValue = obj.useSharedValue(0);
  const Gesture = height(5533).Gesture;
  const tmp2 = useChannelCallStore((isGestureEnabled) => isGestureEnabled.isGestureEnabled);
  const PanResult = Gesture.Pan();
  class S {
    constructor(arg0) {
      result = closure_1.set(1 - Math.pow(1 - Math.max(Math.min(children.translationY, 200), 0) / 200, 3));
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
        obj[1] = height(closure_1_2[12]).DECELERATED_EASING;
        const result = obj.set(height(closure_1_2[11]).withTiming(0, obj));
        const obj2 = height(closure_1_2[11]);
      }
    }
    height(closure_1_2[8]).runOnJS(sharedValue(closure_1_2[10]).pop)();
  };
  obj = { position: sharedValue, THRESHOLD_VELOCITY: 500, runOnJS: height(4120).runOnJS, ModalActionCreators: sharedValue(4611), withTiming: height(4381).withTiming, DECELERATED_EASING: height(1297).DECELERATED_EASING };
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
    obj = { translateY: height(closure_1_2[8]).interpolate(sharedValue.get(), [0, 1], items) };
    items = [0, 0.06 * height];
    const items1 = [obj, ];
    obj = { scale: null };
    const obj3 = height(closure_1_2[8]);
    obj[0] = height(closure_1_2[8]).interpolate(sharedValue.get(), [0, 1], [1, 0.9]);
    items1[1] = obj;
    obj[1] = items1;
    return obj;
  };
  obj = { interpolate: height(4120).interpolate, position: sharedValue, height };
  fn2.__closure = obj;
  fn2.__workletHash = 16049033434372;
  fn2.__initData = closure_11;
  obj1 = { style: tmp.background, children: null };
  const animatedStyle = height(4120).useAnimatedStyle(fn2);
  const obj8 = height(4120);
  obj1[1] = jsx(height(5533).GestureDetector, { gesture: failOffsetXResult, children: jsx(sharedValue(4120).View, { style: animatedStyle, children: children.children }) });
  return <View style={tmp.background}>{null}</View>;
};