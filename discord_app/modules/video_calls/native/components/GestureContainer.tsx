// === Module 9705: GestureContainer ===

// Module 9705 (GestureContainer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import ChannelCallStore from "ChannelCallStore" /* 9050 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 9057 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let children, set;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const useChannelCallStore = ChannelCallStore.useChannelCallStore;
({ PAN_GESTURE_FAIL_OFFSET_Y: hasOwnProperty, SWIPE_TO_CHAT_ACTIVE_OFFSET: metroRequire } = Constants);
const jsx = Fragment.jsx;
let obj = { background: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BLACK };
let closure_8 = createStyles.createStyles(obj);
let c9 = 200;
let c10 = 500;
const __initData = { code: "function GestureContainerTsx1(t3){const{position,THRESHOLD_VELOCITY,runOnJS,ModalActionCreators,withTiming,DECELERATED_EASING}=this.__closure;const{velocityY:velocityY}=t3;if(position.get()===1||velocityY>THRESHOLD_VELOCITY){runOnJS(ModalActionCreators.pop)();}else{position.set(withTiming(0,{duration:300,easing:DECELERATED_EASING}));}}" };
const __initData2 = { code: "function GestureContainerTsx2(t2){const{THRESHOLD_TRANSLATE,position}=this.__closure;const{translationY:translationY}=t2;const boundedGestureY=Math.max(Math.min(translationY,THRESHOLD_TRANSLATE),0)/THRESHOLD_TRANSLATE;const easeOutCubic=1-Math.pow(1-boundedGestureY,3);position.set(easeOutCubic);}" };
const __initData3 = { code: "function GestureContainerTsx3(){const{interpolate,position,height}=this.__closure;return{flex:1,transform:[{translateY:interpolate(position.get(),[0,1],[0,height*0.06])},{scale:interpolate(position.get(),[0,1],[1,0.9])}]};}" };
const __initData4 = { code: "function GestureContainerTsx4({velocityY:velocityY}){const{position,THRESHOLD_VELOCITY,runOnJS,ModalActionCreators,withTiming,DECELERATED_EASING}=this.__closure;if(position.get()===1||velocityY>THRESHOLD_VELOCITY){runOnJS(ModalActionCreators.pop)();}else{position.set(withTiming(0,{duration:300,easing:DECELERATED_EASING}));}}" };
const __initData5 = { code: "function GestureContainerTsx5({translationY:translationY}){const{THRESHOLD_TRANSLATE,position}=this.__closure;const boundedGestureY=Math.max(Math.min(translationY,THRESHOLD_TRANSLATE),0)/THRESHOLD_TRANSLATE;const easeOutCubic=1-Math.pow(1-boundedGestureY,3);position.set(easeOutCubic);}" };
const __initData6 = { code: "function GestureContainerTsx6(){const{interpolate,position,height}=this.__closure;return{flex:1,transform:[{translateY:interpolate(position.get(),[0,1],[0,height*0.06])},{scale:interpolate(position.get(),[0,1],[1,0.9])}]};}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let height;
  let sharedValue;
  let tmp16;
  let obj = height(576);
  const cResult = obj.c(10);
  children = children.children;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(isGestureEnabled) {
        return isGestureEnabled.isGestureEnabled;
      }
    }
    cResult[0] = S;
  } else {
    class S {
      constructor(isGestureEnabled) {
        return isGestureEnabled.isGestureEnabled;
      }
    }
  }
  const tmp6 = useChannelCallStore(S);
  height = sharedValue(1484)().height;
  const tmp7 = sharedValue;
  const tmpResult = height(4612);
  sharedValue = tmpResult.useSharedValue(0);
  const Gesture = tmp(6140).Gesture;
  const PanResult = Gesture.Pan();
  const enabledResult = PanResult.enabled(tmp6);
  class L {
    constructor(translationY) {
      const result = sharedValue.set(1 - Math.pow(1 - Math.max(Math.min(translationY.translationY, c9), 0) / c9, 3));
    }
  }
  let obj2 = { THRESHOLD_TRANSLATE, position: sharedValue };
  L.__closure = obj2;
  L.__workletHash = 819146970851;
  L.__initData = __initData2;
  const onUpdateResult = enabledResult.onUpdate(L);
  class C {
    constructor(velocityY) {
      velocityY = velocityY.velocityY;
      if (1 !== sharedValue.get()) {
        if (velocityY <= c10) {
          set = sharedValue.set;
          const obj = { duration: 300, easing: native.DECELERATED_EASING };
          const withTiming = timing.withTiming;
          timing;
          const result = set(withTiming(0, obj));
        }
      }
      const obj2 = ReanimatedRexport;
      obj2.runOnJS(ModalActionCreatorsDefault.pop)();
    }
  }
  let obj3 = { position: sharedValue, THRESHOLD_VELOCITY, runOnJS: tmp(4612).runOnJS, ModalActionCreators: sharedValue(5093), withTiming: tmp(4891).withTiming, DECELERATED_EASING: tmp(1188).DECELERATED_EASING };
  C.__closure = obj3;
  C.__workletHash = 4811943867759;
  C.__initData = __initData;
  let items = [-closure_5, closure_5];
  let items1 = [-closure_6, closure_6];
  const onEndResult = onUpdateResult.onEnd(C);
  const activeOffsetYResult = onEndResult.activeOffsetY(items);
  const failOffsetXResult = activeOffsetYResult.failOffsetX(items1);
  const fn = function f() {
    let items;
    let items1;
    let obj3;
    let obj5;
    const obj = { flex: 1, transform: items1 };
    const obj2 = { translateY: obj3.interpolate(sharedValue.get(), [0, 1], items) };
    items = [0, 0.06 * height];
    items1 = [obj2, ];
    obj3 = ReanimatedRexport;
    const obj4 = { scale: obj5.interpolate(sharedValue.get(), [0, 1], [1, 0.9]) };
    items1[1] = obj4;
    obj5 = ReanimatedRexport;
    return obj;
  };
  const tmpResult2 = height(4612);
  let obj4 = { interpolate: tmp(4612).interpolate, position: sharedValue, height };
  fn.__closure = obj4;
  fn.__workletHash = 16049033434372;
  fn.__initData = __initData3;
  const animatedStyle = tmpResult2.useAnimatedStyle(fn);
  if (cResult[1] === animatedStyle) {
    class S {
      constructor(isGestureEnabled) {
        return isGestureEnabled.isGestureEnabled;
      }
    }
    if (cResult[4] === failOffsetXResult) {
      class S {
        constructor(isGestureEnabled) {
          return isGestureEnabled.isGestureEnabled;
        }
      }
      if (cResult[7] === tmp4.background) {
        class S {
          constructor(isGestureEnabled) {
            return isGestureEnabled.isGestureEnabled;
          }
        }
        return tmp16;
      }
      const tmp19 = <View style={tmp4.background}>{tmp13}</View>;
      cResult[7] = tmp4.background;
      cResult[8] = tmp13;
      cResult[9] = tmp19;
      tmp16 = tmp19;
    }
    cResult[4] = failOffsetXResult;
    cResult[5] = tmp11;
    cResult[6] = jsx(height(6140).GestureDetector, { gesture: failOffsetXResult, children: tmp11 });
    const tmp15 = jsx(height(6140).GestureDetector, { gesture: failOffsetXResult, children: tmp11 });
  }
  cResult[1] = animatedStyle;
  cResult[2] = children;
  cResult[3] = jsx(tmp7(4612).View, { style: animatedStyle, children });
  const tmp12 = jsx(tmp7(4612).View, { style: animatedStyle, children });
}) : ((children) => {
  let sharedValue;
  children = children.children;
  const tmp = closure_8();
  const tmp2 = useChannelCallStore((isGestureEnabled) => isGestureEnabled.isGestureEnabled);
  const height = sharedValue(1484)().height;
  let obj = height(4612);
  sharedValue = obj.useSharedValue(0);
  const Gesture = height(6140).Gesture;
  const fn = function h(translationY) {
    const result = sharedValue.set(1 - Math.pow(1 - Math.max(Math.min(translationY.translationY, c9), 0) / c9, 3));
  };
  let obj2 = { THRESHOLD_TRANSLATE, position: sharedValue };
  fn.__closure = obj2;
  fn.__workletHash = 11164351324199;
  fn.__initData = __initData5;
  const PanResult = Gesture.Pan();
  const enabledResult = PanResult.enabled(tmp2);
  const onUpdateResult = enabledResult.onUpdate(fn);
  class T {
    constructor(velocityY) {
      velocityY = velocityY.velocityY;
      if (1 !== sharedValue.get()) {
        if (velocityY <= c10) {
          set = sharedValue.set;
          const obj = { duration: 300, easing: native.DECELERATED_EASING };
          const withTiming = timing.withTiming;
          timing;
          const result = set(withTiming(0, obj));
        }
      }
      const obj2 = ReanimatedRexport;
      obj2.runOnJS(ModalActionCreatorsDefault.pop)();
    }
  }
  let obj3 = { position: sharedValue, THRESHOLD_VELOCITY, runOnJS: height(4612).runOnJS, ModalActionCreators: sharedValue(5093), withTiming: height(4891).withTiming, DECELERATED_EASING: height(1188).DECELERATED_EASING };
  T.__closure = obj3;
  T.__workletHash = 6850090802761;
  T.__initData = __initData4;
  let items = [-closure_5, closure_5];
  let items1 = [-closure_6, closure_6];
  const onEndResult = onUpdateResult.onEnd(T);
  const activeOffsetYResult = onEndResult.activeOffsetY(items);
  const fn2 = function p() {
    let items;
    let items1;
    let obj3;
    let obj5;
    const obj = { flex: 1, transform: items1 };
    const obj2 = { translateY: obj3.interpolate(sharedValue.get(), [0, 1], items) };
    items = [0, 0.06 * height];
    items1 = [obj2, ];
    obj3 = ReanimatedRexport;
    const obj4 = { scale: obj5.interpolate(sharedValue.get(), [0, 1], [1, 0.9]) };
    items1[1] = obj4;
    obj5 = ReanimatedRexport;
    return obj;
  };
  const failOffsetXResult = activeOffsetYResult.failOffsetX(items1);
  const obj9 = height(4612);
  let obj4 = { interpolate: height(4612).interpolate, position: sharedValue, height };
  fn2.__closure = obj4;
  fn2.__workletHash = 15988962645633;
  fn2.__initData = __initData6;
  const animatedStyle = obj9.useAnimatedStyle(fn2);
  const GestureDetector = height(6140).GestureDetector;
  return <View style={tmp.background}>{null}</View>;
});
let result = size.fileFinishedImporting("modules/video_calls/native/components/GestureContainer.tsx");

export default tmp4;