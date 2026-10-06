// === Module 12709: useModalPanGesture ===

// Module 12709 (useModalPanGesture)
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import spring from "spring" /* 5604 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj1, obj5, obj6, set, set2, set2Result, tmp10, tmp12, tmp13, tmp14, tmp15, tmp3, tmp4, tmp8, tmp9;

let closure_3 = { code: "function useModalPanGestureTsx1(){const{runOnJS,ModalActionCreators}=this.__closure;runOnJS(ModalActionCreators.pop)();}" };
let closure_4 = { code: "function useModalPanGestureTsx2(t4){const{translateY,thresholdTranslate,thresholdVelocity,withSpring,height,runOnJS,ModalActionCreators,_worklet_11729446781846_init_data,onClose,onEnd}=this.__closure;var velocityY=t4.velocityY;var config={damping:15,mass:1,stiffness:250,overshootClamping:true,restSpeedThreshold:0.001,restDisplacementThreshold:0.001,velocity:velocityY};if(translateY.get()>=thresholdTranslate||velocityY>=thresholdVelocity){translateY.set(withSpring(height,config,\"respect-motion-settings\",function(){var useModalPanGestureTsx1=function(){runOnJS(ModalActionCreators.pop)();};useModalPanGestureTsx1.__closure={runOnJS:runOnJS,ModalActionCreators:ModalActionCreators};useModalPanGestureTsx1.__workletHash=11729446781846;useModalPanGestureTsx1.__initData=_worklet_11729446781846_init_data;return useModalPanGestureTsx1;}()));if(onClose!=null){runOnJS(onClose)();}}else{translateY.set(withSpring(0,config));}if(onEnd!=null){runOnJS(onEnd)();}}" };
let closure_5 = { code: "function useModalPanGestureTsx3(t2){const{translateY,interpolate,start,maxTranslate,Extrapolate}=this.__closure;const{translationY:translationY}=t2;translateY.set(interpolate(start.get().y+translationY,[0,maxTranslate],[0,maxTranslate],Extrapolate.CLAMP));}" };
let closure_6 = { code: "function useModalPanGestureTsx4(){const{onStart,runOnJS,start,translateY}=this.__closure;if(onStart!=null){runOnJS(onStart)();}start.set({y:translateY.get()});}" };
let closure_7 = { code: "function useModalPanGestureTsx5({velocityY:velocityY}){const{translateY,thresholdTranslate,thresholdVelocity,withSpring,height,runOnJS,ModalActionCreators,onClose,onEnd}=this.__closure;const config={damping:15,mass:1,stiffness:250,overshootClamping:true,restSpeedThreshold:0.001,restDisplacementThreshold:0.001,velocity:velocityY};if(translateY.get()>=thresholdTranslate||velocityY>=thresholdVelocity){translateY.set(withSpring(height,config,'respect-motion-settings',function(){runOnJS(ModalActionCreators.pop)();}));if(onClose!=null){runOnJS(onClose)();}}else{translateY.set(withSpring(0,config));}if(onEnd!=null){runOnJS(onEnd)();}}" };
let closure_8 = { code: "function useModalPanGestureTsx6({translationY:translationY}){const{translateY,interpolate,start,maxTranslate,Extrapolate}=this.__closure;translateY.set(interpolate(start.get().y+translationY,[0,maxTranslate],[0,maxTranslate],Extrapolate.CLAMP));}" };
const __initData = { code: "function useModalPanGestureTsx7(){const{onStart,runOnJS,start,translateY}=this.__closure;if(onStart!=null){runOnJS(onStart)();}start.set({y:translateY.get()});}" };
const __initData2 = { code: "function useModalPanGestureTsx8(){const{runOnJS,ModalActionCreators}=this.__closure;runOnJS(ModalActionCreators.pop)();}" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((thresholdTranslate) => {
  let height;
  let maxTranslate;
  let thresholdVelocity;
  const tmp = maxTranslate;
  let obj = maxTranslate(height[1]);
  const cResult = obj.c(7);
  ({ thresholdVelocity, maxTranslate } = thresholdTranslate);
  thresholdTranslate = thresholdTranslate.thresholdTranslate;
  height = thresholdTranslate.height;
  const translateY = thresholdTranslate.translateY;
  const onStart = thresholdTranslate.onStart;
  const onEnd = thresholdTranslate.onEnd;
  const onClose = thresholdTranslate.onClose;
  let num = 500;
  const gestureEnabled = thresholdTranslate.gestureEnabled;
  if (undefined !== thresholdVelocity) {
    num = thresholdVelocity;
  }
  const tmpResult = tmp(height[2]);
  const sharedValue = tmpResult.useSharedValue({ y: 0 });
  if (cResult[0] === height) {
    if (cResult[1] === onClose) {
      if (cResult[2] === onEnd) {
        if (cResult[3] === thresholdTranslate) {
          if (cResult[4] === num) {
            let tmp5;
            if (cResult[5] === translateY) {
              tmp5 = cResult[6];
            }
            const Gesture = tmp(tmp2[5]).Gesture;
            const PanResult = Gesture.Pan();
            let fn = function h() {
              if (null != onStart) {
                const obj = ReanimatedRexport;
                obj.runOnJS(tmp)();
              }
              const obj2 = { y: translateY.get() };
              const result = sharedValue.set(obj2);
            };
            let obj2 = { onStart, runOnJS: tmp(tmp2[2]).runOnJS, start: sharedValue, translateY };
            const onStart2 = PanResult.enabled(gestureEnabled).onStart;
            PanResult.enabled(gestureEnabled);
            fn.__closure = obj2;
            fn.__workletHash = 8128980099190;
            const tmp7 = onClose;
            fn.__initData = onClose;
            const fn2 = function c(translationY) {
              translationY = translationY.translationY;
              set = translateY.set;
              const interpolate = ReanimatedRexport.interpolate;
              ReanimatedRexport;
              const sum = sharedValue.get().y + translationY;
              const items = [0, maxTranslate];
              const items1 = [0, maxTranslate];
              const result = set(interpolate(sum, items, items1, ReanimatedRexport.Extrapolate.CLAMP));
            };
            let obj3 = { translateY, interpolate: tmp(tmp2[2]).interpolate, start: sharedValue, maxTranslate, Extrapolate: tmp(tmp2[2]).Extrapolate };
            const onUpdate = onStart2(fn).onUpdate;
            onStart2(fn);
            fn2.__closure = obj3;
            fn2.__workletHash = 10121791739934;
            fn2.__initData = onEnd;
            const onUpdateResult = onUpdate(fn2);
            const onEndResult = onUpdateResult.onEnd(tmp5);
            const failOffsetYResult = onEndResult.failOffsetY(-0.01);
            return failOffsetYResult.activeOffsetY([-5, 15]);
          }
        }
      }
    }
  }
  const useModalPanGestureTsx2 = /* worklet (recovered source) */ function useModalPanGestureTsx2(t4){const{translateY,thresholdTranslate,thresholdVelocity,withSpring,height,runOnJS,ModalActionCreators,_worklet_11729446781846_init_data,onClose,onEnd}=this.__closure;var velocityY=t4.velocityY;var config={damping:15,mass:1,stiffness:250,overshootClamping:true,restSpeedThreshold:0.001,restDisplacementThreshold:0.001,velocity:velocityY};if(translateY.get()>=thresholdTranslate||velocityY>=thresholdVelocity){translateY.set(withSpring(height,config,"respect-motion-settings",function(){var useModalPanGestureTsx1=function(){runOnJS(ModalActionCreators.pop)();};useModalPanGestureTsx1.__closure={runOnJS:runOnJS,ModalActionCreators:ModalActionCreators};useModalPanGestureTsx1.__workletHash=11729446781846;useModalPanGestureTsx1.__initData=_worklet_11729446781846_init_data;return useModalPanGestureTsx1;}()));if(onClose!=null){runOnJS(onClose)();}}else{translateY.set(withSpring(0,config));}if(onEnd!=null){runOnJS(onEnd)();}};
  const obj4 = { translateY, thresholdTranslate, thresholdVelocity: num, withSpring: tmp(tmp2[3]).withSpring, height, runOnJS: tmp(tmp2[2]).runOnJS, ModalActionCreators: thresholdTranslate(tmp2[4]), _worklet_11729446781846_init_data: translateY, onClose, onEnd };
  useModalPanGestureTsx2.__closure = obj4;
  useModalPanGestureTsx2.__workletHash = 1405951289958;
  useModalPanGestureTsx2.__initData = onStart;
  cResult[0] = height;
  cResult[1] = onClose;
  cResult[2] = onEnd;
  cResult[3] = thresholdTranslate;
  cResult[4] = num;
  cResult[5] = translateY;
  cResult[6] = useModalPanGestureTsx2;
  tmp5 = useModalPanGestureTsx2;
}) : ((thresholdVelocity) => {
  let num = thresholdVelocity.thresholdVelocity;
  if (num === undefined) {
    num = 500;
  }
  const maxTranslate = thresholdVelocity.maxTranslate;
  const thresholdTranslate = thresholdVelocity.thresholdTranslate;
  const height = thresholdVelocity.height;
  const translateY = thresholdVelocity.translateY;
  const onStart = thresholdVelocity.onStart;
  const onEnd = thresholdVelocity.onEnd;
  const onClose = thresholdVelocity.onClose;
  const gestureEnabled = thresholdVelocity.gestureEnabled;
  let obj = num(thresholdTranslate[2]);
  const sharedValue = obj.useSharedValue({ y: 0 });
  const Gesture = num(thresholdTranslate[5]).Gesture;
  const PanResult = Gesture.Pan();
  const enabledResult = PanResult.enabled(gestureEnabled);
  class J {
    constructor() {
      if (null != onStart) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[2]);
        tmp4 = obj.runOnJS(tmp)();
      }
      obj1 = { y: translateY.get() };
      result = closure_8.set(obj1);
      return;
    }
  }
  let obj2 = { onStart, runOnJS: num(thresholdTranslate[2]).runOnJS, start: sharedValue, translateY };
  J.__closure = obj2;
  J.__workletHash = 4849633224053;
  J.__initData = __initData;
  const onStartResult = enabledResult.onStart(J);
  class T {
    constructor(arg0) {
      translationY = thresholdVelocity.translationY;
      set = translateY.set;
      tmp = closure_0(closure_2[2]);
      interpolate = tmp.interpolate;
      sum = closure_8.get().y + translationY;
      items = [0];
      items[1] = maxTranslate;
      items1 = [0];
      items1[1] = maxTranslate;
      result = set(interpolate(sum, items, items1, closure_0(closure_2[2]).Extrapolate.CLAMP));
      return;
    }
  }
  let obj3 = { translateY, interpolate: num(thresholdTranslate[2]).interpolate, start: sharedValue, maxTranslate, Extrapolate: num(thresholdTranslate[2]).Extrapolate };
  T.__closure = obj3;
  T.__workletHash = 211051716536;
  T.__initData = sharedValue;
  const onUpdateResult = onStartResult.onUpdate(T);
  class O {
    constructor(arg0) {
      velocityY = thresholdVelocity.velocityY;
      obj = { damping: 15, mass: 1, stiffness: 250, overshootClamping: true, restSpeedThreshold: 0.001, restDisplacementThreshold: 0.001, velocity: velocityY };
      tmp = translateY;
      if (translateY.get() < thresholdTranslate) {
        tmp2 = c0;
        if (velocityY < c0) {
          tmp3 = closure_0;
          tmp4 = closure_2;
          set = tmp.set;
          obj2 = closure_0(closure_2[3]);
          num = 0;
          result = set(obj2.withSpring(0, obj));
        }
        tmp12 = null;
        if (null != onEnd) {
          tmp13 = closure_0;
          tmp14 = closure_2;
          obj6 = closure_0(closure_2[2]);
          tmp15 = obj6.runOnJS(tmp11)();
        }
        return;
      }
      set2 = tmp.set;
      obj3 = closure_0(closure_2[3]);
      fn = function o() { /* body not rendered: F142992 */ };
      obj1 = { runOnJS: closure_0(closure_2[2]).runOnJS, ModalActionCreators: closure_1(closure_2[4]) };
      fn.__closure = obj1;
      fn.__workletHash = 16884819962399;
      fn.__initData = closure_10;
      set2Result = set2(obj3.withSpring(height, obj, "respect-motion-settings", fn));
      if (null != onClose) {
        tmp8 = closure_0;
        tmp9 = closure_2;
        obj5 = closure_0(closure_2[2]);
        tmp10 = obj5.runOnJS(tmp7)();
      }
      return;
    }
  }
  const obj4 = { translateY, thresholdTranslate, thresholdVelocity: num, withSpring: num(thresholdTranslate[3]).withSpring, height, runOnJS: num(thresholdTranslate[2]).runOnJS, ModalActionCreators: maxTranslate(thresholdTranslate[4]), onClose, onEnd };
  O.__closure = obj4;
  O.__workletHash = 5882673167981;
  O.__initData = onClose;
  const onEndResult = onUpdateResult.onEnd(O);
  const failOffsetYResult = onEndResult.failOffsetY(-0.01);
  return failOffsetYResult.activeOffsetY([-5, 15]);
});
let result = size.fileFinishedImporting("modules/video_calls/native/components/useModalPanGesture.tsx");

export default tmp2;