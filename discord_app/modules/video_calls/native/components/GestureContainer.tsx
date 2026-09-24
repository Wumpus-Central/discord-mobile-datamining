// === Module 10368: GestureContainer ===

// Module 10368 (GestureContainer)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4561 */;
import timing from "timing" /* 4830 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const useChannelCallStore = fn(9723).useChannelCallStore;
const Constants = fn(9730);
({ PAN_GESTURE_FAIL_OFFSET_Y: hasOwnProperty, SWIPE_TO_CHAT_ACTIVE_OFFSET: metroRequire } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj2 = { background: { flex: 1, backgroundColor: nativeDefault.colors.BLACK } };
let closure_8 = createStyles.createStyles(obj2);
const __initData = { code: "function GestureContainerTsx1({velocityY:velocityY}){const{position,THRESHOLD_VELOCITY,runOnJS,ModalActionCreators,withTiming,DECELERATED_EASING}=this.__closure;if(position.get()===1||velocityY>THRESHOLD_VELOCITY){runOnJS(ModalActionCreators.pop)();}else{position.set(withTiming(0,{duration:300,easing:DECELERATED_EASING}));}}" };
const __initData2 = { code: "function GestureContainerTsx2({translationY:translationY}){const{THRESHOLD_TRANSLATE,position}=this.__closure;const boundedGestureY=Math.max(Math.min(translationY,THRESHOLD_TRANSLATE),0)/THRESHOLD_TRANSLATE;const easeOutCubic=1-Math.pow(1-boundedGestureY,3);position.set(easeOutCubic);}" };
const __initData3 = { code: "function GestureContainerTsx3(){const{interpolate,position,height}=this.__closure;return{flex:1,transform:[{translateY:interpolate(position.get(),[0,1],[0,height*0.06])},{scale:interpolate(position.get(),[0,1],[1,0.9])}]};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/GestureContainer.tsx");

export default function GestureContainer(children) {
  let sharedValue;
  const tmp = closure_8();
  const height = sharedValue(1478)().height;
  const tmp2 = useChannelCallStore((isGestureEnabled) => isGestureEnabled.isGestureEnabled);
  sharedValue = height(4561).useSharedValue(0);
  const Gesture = height(6985).Gesture;
  let obj = height(4561);
  const PanResult = Gesture.Pan();
  class S {
    constructor(arg0) {
      result = closure_1.set(1 - Math.pow(1 - Math.max(Math.min(children.translationY, 200), 0) / 200, 3));
      return;
    }
  }
  S.__closure = { THRESHOLD_TRANSLATE: 200, position: sharedValue };
  S.__workletHash = 9476726087456;
  S.__initData = __initData2;
  const enabledResult = Gesture.Pan().enabled(tmp2);
  const fn = function h(velocityY) {
    if (1 !== sharedValue.get()) {
      if (velocityY.velocityY <= 500) {
        const obj3 = { duration: 300, easing: native.DECELERATED_EASING };
        const result = sharedValue.set(timing.withTiming(0, obj3));
      }
    }
    ReanimatedRexport.runOnJS(ModalActionCreatorsDefault.pop)();
  };
  const onUpdateResult = Gesture.Pan().enabled(tmp2).onUpdate(S);
  fn.__closure = { position: sharedValue, THRESHOLD_VELOCITY: 500, runOnJS: height(4561).runOnJS, ModalActionCreators: sharedValue(5032), withTiming: height(4830).withTiming, DECELERATED_EASING: height(1177).DECELERATED_EASING };
  fn.__workletHash = 10736744030668;
  fn.__initData = __initData;
  let obj2 = { position: sharedValue, THRESHOLD_VELOCITY: 500, runOnJS: height(4561).runOnJS, ModalActionCreators: sharedValue(5032), withTiming: height(4830).withTiming, DECELERATED_EASING: height(1177).DECELERATED_EASING };
  let items = [-closure_5, closure_5];
  const onEndResult = onUpdateResult.onEnd(fn);
  let items1 = [-closure_6, closure_6];
  const activeOffsetYResult = onUpdateResult.onEnd(fn).activeOffsetY(items);
  const failOffsetXResult = onUpdateResult.onEnd(fn).activeOffsetY(items).failOffsetX(items1);
  const fn2 = function p() {
    const obj = { flex: 1, transform: null };
    const obj2 = { translateY: null };
    const items = [0, 0.06 * height];
    obj2.translateY = ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], items);
    const items1 = [obj2, ];
    const obj4 = { scale: null };
    obj4.scale = ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [1, 0.9]);
    items1[1] = obj4;
    obj.transform = items1;
    return obj;
  };
  const obj8 = height(4561);
  fn2.__closure = { interpolate: height(4561).interpolate, position: sharedValue, height };
  fn2.__workletHash = 16049033434372;
  fn2.__initData = __initData3;
  let obj4 = { style: tmp.background, children: null };
  const animatedStyle = obj8.useAnimatedStyle(fn2);
  let obj3 = { interpolate: height(4561).interpolate, position: sharedValue, height };
  obj4.children = jsx(height(6985).GestureDetector, { gesture: failOffsetXResult, children: jsx(sharedValue(4561).View, { style: animatedStyle, children: children.children }) });
  return <View style={tmp.background}>{null}</View>;
};