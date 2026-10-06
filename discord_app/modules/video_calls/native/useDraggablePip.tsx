// === Module 9109: useDraggablePip ===

// Module 9109 (useDraggablePip)
import native from "native" /* 1188 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import spring from "spring" /* 5604 */;
import ChannelCallStore from "ChannelCallStore" /* 9086 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 9110 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import Constants from "Constants" /* 9093 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set, set2;

let closure_4;
let hasOwnProperty;
const useChannelCallStore = ChannelCallStore.useChannelCallStore;
({ PIP_FOCUS_SCALE: closure_4, PIP_GESTURE_ACTIVE_OFFSET: hasOwnProperty } = Constants);
let closure_6 = { mass: 1, stiffness: 250, overshootClamping: true, restSpeedThreshold: 0.001, restDisplacementThreshold: 0.001, damping: 20 };
let __initData = { code: "function useDraggablePipTsx1(){const{withTiming,pipFocus,PIP_FOCUS_SCALE,STANDARD_EASING}=this.__closure;return withTiming(pipFocus?PIP_FOCUS_SCALE:1,{easing:STANDARD_EASING,duration:250});}" };
let closure_8 = { code: "function useDraggablePipTsx2(){const{width}=this.__closure;return width;}" };
let closure_9 = { code: "function useDraggablePipTsx3(){const{height}=this.__closure;return height;}" };
let closure_10 = { code: "function useDraggablePipTsx4(){const{pipScale,width}=this.__closure;return pipScale.get()*width;}" };
let closure_11 = { code: "function useDraggablePipTsx5(){const{pipScale,height}=this.__closure;return pipScale.get()*height;}" };
let closure_12 = { code: "function useDraggablePipTsx6(){const{containerWidth}=this.__closure;return containerWidth;}" };
let closure_13 = { code: "function useDraggablePipTsx7(){const{containerHeight}=this.__closure;return containerHeight;}" };
let closure_14 = { code: "function useDraggablePipTsx8(){const{containerWidth,scaledWidthDv,xPosition}=this.__closure;return[containerWidth-scaledWidthDv.get(),xPosition.get()];}" };
let closure_15 = { code: "function useDraggablePipTsx9(result,previous){const{cheapWorkletArrayShallowEqual,clamp,xPosition,xDestination}=this.__closure;if(cheapWorkletArrayShallowEqual(result,previous!==null&&previous!==void 0?previous:undefined)){return;}const[containerWidthNew,xPositionNew]=result;const[containerWidthOld]=previous!==null&&previous!==void 0?previous:[0,0];if(previous!=null&&containerWidthNew!==containerWidthOld){const newX=clamp(xPositionNew*(containerWidthNew/containerWidthOld),0,containerWidthNew);xPosition.set(newX);xDestination.set(newX);}}" };
let closure_16 = { code: "function useDraggablePipTsx10(){const{containerHeight,scaledHeightDv,yPosition}=this.__closure;return[containerHeight-scaledHeightDv.get(),yPosition.get()];}" };
let closure_17 = { code: "function useDraggablePipTsx11(result_0,previous_0){const{cheapWorkletArrayShallowEqual,clamp,yPosition,yDestination}=this.__closure;if(cheapWorkletArrayShallowEqual(result_0,previous_0!==null&&previous_0!==void 0?previous_0:undefined)){return;}const[containerHeightNew,yPositionNew]=result_0;const[containerHeightOld]=previous_0!==null&&previous_0!==void 0?previous_0:[0,0];if(previous_0!=null&&containerHeightNew!==containerHeightOld){const newY=clamp(yPositionNew*(containerHeightNew/containerHeightOld),0,containerHeightNew);yPosition.set(newY);yDestination.set(newY);}}" };
let closure_18 = { code: "function useDraggablePipTsx12(event_0){const{xPosition,containerWidthDv,scaledWidthDv,clamp,yPosition,containerHeightDv,scaledHeightDv,snapToCorners,withSpring,spring,xDestination,yDestination}=this.__closure;const xToss=xPosition.get()+0.0875*event_0.velocityX;const xMax=containerWidthDv.get()-scaledWidthDv.get();const targetX=clamp(xToss,0,xMax);const yToss=yPosition.get()+0.0875*event_0.velocityY;const yMax=containerHeightDv.get()-scaledHeightDv.get();const targetY=clamp(yToss,0,yMax);const top=targetY;const bottom=containerHeightDv.get()-scaledHeightDv.get()-targetY;const left=targetX;const right=containerWidthDv.get()-scaledWidthDv.get()-targetX;const minDistance=Math.min(top,bottom,left,right);let snapX=targetX;let snapY=targetY;bb67:switch(minDistance){case top:{snapY=0;if(snapToCorners){snapX=left<right?0:xMax;}break bb67;}case bottom:{snapY=yMax;if(snapToCorners){snapX=left<right?0:xMax;}break bb67;}case left:{snapX=0;if(snapToCorners){snapY=top<bottom?0:yMax;}break bb67;}case right:{snapX=xMax;if(snapToCorners){snapY=top<bottom?0:yMax;}}}xPosition.set(withSpring(snapX,{...spring,velocity:event_0.velocityX}));xDestination.set(snapX);yPosition.set(withSpring(snapY,{...spring,velocity:event_0.velocityY}));yDestination.set(snapY);}" };
let closure_19 = { code: "function useDraggablePipTsx13(event){const{xPosition,xDestination,yPosition,yDestination,trackedVoiceControlsToggleMovedForGestureSv,onMoved,runOnJS}=this.__closure;xPosition.set(xDestination.get()+event.translationX);yPosition.set(yDestination.get()+event.translationY);if(!trackedVoiceControlsToggleMovedForGestureSv.get()){if(onMoved!=null){runOnJS(onMoved)();}trackedVoiceControlsToggleMovedForGestureSv.set(true);}}" };
const __initData2 = { code: "function useDraggablePipTsx14(){const{onPress,runOnJS}=this.__closure;if(onPress!=null){runOnJS(onPress)();}}" };
const __initData3 = { code: "function useDraggablePipTsx15(){const{xPosition,scaledWidthDv,widthDv,yPosition,scaledHeightDv,heightDv,pipScale}=this.__closure;return{transform:[{translateX:xPosition.get()+(scaledWidthDv.get()-widthDv.get())/2},{translateY:yPosition.get()+(scaledHeightDv.get()-heightDv.get())/2},{scale:pipScale.get()}]};}" };
const __initData4 = { code: "function useDraggablePipTsx16(){const{withTiming,pipFocus,PIP_FOCUS_SCALE,STANDARD_EASING}=this.__closure;return withTiming(pipFocus?PIP_FOCUS_SCALE:1,{easing:STANDARD_EASING,duration:250});}" };
const __initData5 = { code: "function useDraggablePipTsx17(){const{width}=this.__closure;return width;}" };
const __initData6 = { code: "function useDraggablePipTsx18(){const{height}=this.__closure;return height;}" };
const __initData7 = { code: "function useDraggablePipTsx19(){const{pipScale,width}=this.__closure;return pipScale.get()*width;}" };
const __initData8 = { code: "function useDraggablePipTsx20(){const{pipScale,height}=this.__closure;return pipScale.get()*height;}" };
const __initData9 = { code: "function useDraggablePipTsx21(){const{containerWidth}=this.__closure;return containerWidth;}" };
const __initData10 = { code: "function useDraggablePipTsx22(){const{containerHeight}=this.__closure;return containerHeight;}" };
const __initData11 = { code: "function useDraggablePipTsx23(){const{containerWidth,scaledWidthDv,xPosition}=this.__closure;return[containerWidth-scaledWidthDv.get(),xPosition.get()];}" };
const __initData12 = { code: "function useDraggablePipTsx24(result,previous){const{cheapWorkletArrayShallowEqual,clamp,xPosition,xDestination}=this.__closure;if(cheapWorkletArrayShallowEqual(result,previous!==null&&previous!==void 0?previous:undefined))return;const[containerWidthNew,xPositionNew]=result;const[containerWidthOld]=previous!==null&&previous!==void 0?previous:[0,0];if(previous!=null&&containerWidthNew!==containerWidthOld){const newX=clamp(xPositionNew*(containerWidthNew/containerWidthOld),0,containerWidthNew);xPosition.set(newX);xDestination.set(newX);}}" };
const __initData13 = { code: "function useDraggablePipTsx25(){const{containerHeight,scaledHeightDv,yPosition}=this.__closure;return[containerHeight-scaledHeightDv.get(),yPosition.get()];}" };
const __initData14 = { code: "function useDraggablePipTsx26(result_0,previous_0){const{cheapWorkletArrayShallowEqual,clamp,yPosition,yDestination}=this.__closure;if(cheapWorkletArrayShallowEqual(result_0,previous_0!==null&&previous_0!==void 0?previous_0:undefined))return;const[containerHeightNew,yPositionNew]=result_0;const[containerHeightOld]=previous_0!==null&&previous_0!==void 0?previous_0:[0,0];if(previous_0!=null&&containerHeightNew!==containerHeightOld){const newY=clamp(yPositionNew*(containerHeightNew/containerHeightOld),0,containerHeightNew);yPosition.set(newY);yDestination.set(newY);}}" };
const __initData15 = { code: "function useDraggablePipTsx27(event_0){const{xPosition,containerWidthDv,scaledWidthDv,clamp,yPosition,containerHeightDv,scaledHeightDv,snapToCorners,withSpring,spring,xDestination,yDestination}=this.__closure;const toss=0.0875;const xToss=xPosition.get()+toss*event_0.velocityX;const xMin=0;const xMax=containerWidthDv.get()-scaledWidthDv.get();const targetX=clamp(xToss,xMin,xMax);const yToss=yPosition.get()+toss*event_0.velocityY;const yMin=0;const yMax=containerHeightDv.get()-scaledHeightDv.get();const targetY=clamp(yToss,yMin,yMax);const top=targetY;const bottom=containerHeightDv.get()-scaledHeightDv.get()-targetY;const left=targetX;const right=containerWidthDv.get()-scaledWidthDv.get()-targetX;const minDistance=Math.min(top,bottom,left,right);let snapX=targetX;let snapY=targetY;switch(minDistance){case top:snapY=yMin;if(snapToCorners){snapX=left<right?xMin:xMax;}break;case bottom:snapY=yMax;if(snapToCorners){snapX=left<right?xMin:xMax;}break;case left:snapX=xMin;if(snapToCorners){snapY=top<bottom?yMin:yMax;}break;case right:snapX=xMax;if(snapToCorners){snapY=top<bottom?yMin:yMax;}break;}xPosition.set(withSpring(snapX,{...spring,velocity:event_0.velocityX}));xDestination.set(snapX);yPosition.set(withSpring(snapY,{...spring,velocity:event_0.velocityY}));yDestination.set(snapY);}" };
const __initData16 = { code: "function useDraggablePipTsx28(event){const{xPosition,xDestination,yPosition,yDestination,trackedVoiceControlsToggleMovedForGestureSv,onMoved,runOnJS}=this.__closure;xPosition.set(xDestination.get()+event.translationX);yPosition.set(yDestination.get()+event.translationY);if(!trackedVoiceControlsToggleMovedForGestureSv.get()){if(onMoved!=null){runOnJS(onMoved)();}trackedVoiceControlsToggleMovedForGestureSv.set(true);}}" };
const __initData17 = { code: "function useDraggablePipTsx29(){const{onPress,runOnJS}=this.__closure;if(onPress!=null){runOnJS(onPress)();}}" };
const __initData18 = { code: "function useDraggablePipTsx30(){const{xPosition,scaledWidthDv,widthDv,yPosition,scaledHeightDv,heightDv,pipScale}=this.__closure;return{transform:[{translateX:xPosition.get()+(scaledWidthDv.get()-widthDv.get())/2},{translateY:yPosition.get()+(scaledHeightDv.get()-heightDv.get())/2},{scale:pipScale.get()}]};}" };
function clamp(arg0, arg1, arg2) {
  return Math.min(Math.max(arg0, arg1), arg2);
}
clamp.__closure = {};
clamp.__workletHash = 6958770079339;
clamp.__initData = { code: "function clamp_useDraggablePipTsx31(value,min,max){return Math.min(Math.max(value,min),max);}" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((width) => {
  let closure_7;
  let first;
  let height;
  let tmp19;
  const tmp = width;
  let tmp2 = height;
  let obj = width(height[4]);
  const cResult = obj.c(6);
  width = width.width;
  height = width.height;
  const containerWidth = width.containerWidth;
  const containerHeight = width.containerHeight;
  const onPress = width.onPress;
  const onMoved = width.onMoved;
  const snapToCorners = width.snapToCorners;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function b(pipFocus) {
      return pipFocus.pipFocus;
    };
    let num = 0;
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = containerHeight(first);
  __initData = tmp5;
  const tmpResult = tmp(tmp2[5]);
  class C {
    constructor() {
      let num = 1;
      const withTiming = timing.withTiming;
      timing;
      if (closure_7) {
        num = React3;
      }
      const obj = { easing: native.STANDARD_EASING, duration: 250 };
      return withTiming(num, obj);
    }
  }
  let obj2 = { withTiming: tmp(tmp2[6]).withTiming, pipFocus: tmp5, PIP_FOCUS_SCALE: onPress, STANDARD_EASING: tmp(tmp2[7]).STANDARD_EASING };
  C.__closure = obj2;
  C.__workletHash = 7848271415351;
  C.__initData = __initData;
  const derivedValue = tmpResult.useDerivedValue(C);
  const tmpResult15 = tmp(tmp2[5]);
  class V {
    constructor() {
      return width;
    }
  }
  V.__closure = { width };
  V.__workletHash = 14810909441301;
  V.__initData = derivedValue;
  const derivedValue1 = tmpResult15.useDerivedValue(V);
  const tmpResult16 = tmp(tmp2[5]);
  class G {
    constructor() {
      return height;
    }
  }
  G.__closure = { height };
  G.__workletHash = 15343935194036;
  G.__initData = derivedValue1;
  const derivedValue2 = tmpResult16.useDerivedValue(G);
  const tmpResult17 = tmp(tmp2[5]);
  class F {
    constructor() {
      return derivedValue.get() * width;
    }
  }
  F.__closure = { pipScale: derivedValue, width };
  F.__workletHash = 3468337829868;
  F.__initData = derivedValue2;
  const derivedValue3 = tmpResult17.useDerivedValue(F);
  const tmpResult18 = tmp(tmp2[5]);
  class I {
    constructor() {
      return derivedValue.get() * height;
    }
  }
  I.__closure = { pipScale: derivedValue, height };
  I.__workletHash = 7163944260205;
  I.__initData = derivedValue3;
  const derivedValue4 = tmpResult18.useDerivedValue(I);
  const fn2 = function q() {
    return containerWidth;
  };
  fn2.__closure = { containerWidth };
  fn2.__workletHash = 13449836478609;
  fn2.__initData = derivedValue4;
  const tmpResult19 = tmp(tmp2[5]);
  const derivedValue5 = tmpResult19.useDerivedValue(fn2);
  const tmpResult20 = tmp(tmp2[5]);
  class J {
    constructor() {
      return containerHeight;
    }
  }
  J.__closure = { containerHeight };
  J.__workletHash = 4105281399152;
  J.__initData = derivedValue5;
  const derivedValue6 = tmpResult20.useDerivedValue(J);
  const tmpResult21 = tmp(tmp2[5]);
  const sharedValue = tmpResult21.useSharedValue(0);
  const tmpResult22 = tmp(tmp2[5]);
  const sharedValue1 = tmpResult22.useSharedValue(sharedValue.get());
  const tmpResult23 = tmp(tmp2[5]);
  const sharedValue2 = tmpResult23.useSharedValue(0);
  const tmpResult24 = tmp(tmp2[5]);
  const sharedValue3 = tmpResult24.useSharedValue(sharedValue2.get());
  const tmpResult25 = tmp(tmp2[5]);
  const sharedValue4 = tmpResult25.useSharedValue(false);
  const tmpResult26 = tmp(tmp2[5]);
  class L {
    constructor() {
      const items = [containerWidth - derivedValue3.get(), sharedValue1.get()];
      return items;
    }
  }
  L.__closure = { containerWidth, scaledWidthDv: derivedValue3, xPosition: sharedValue1 };
  L.__workletHash = 2741340788440;
  L.__initData = derivedValue6;
  class R {
    constructor(arg0, arg1) {
      let first;
      const cheapWorkletArrayShallowEqual = cheapWorkletShallowEqual.cheapWorkletArrayShallowEqual;
      cheapWorkletShallowEqual;
      const tmp2 = arg1;
      if (!cheapWorkletArrayShallowEqual(arg0, tmp2)) {
        [first] = arg0;
        let items = arg1;
        if (arg1 == null) {
          items = [0, 0];
        }
        const first1 = _slicedToArray(items, 1)[0];
        if (null != arg1) {
          if (first !== first1) {
            if (typeof clamp === "function") {
              const _Math = Math;
              const _Math2 = Math;
              const bound = Math.min(Math.max(tmp9, 0), first);
              const result = sharedValue1.set(bound);
              const result1 = sharedValue.set(bound);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
      }
    }
  }
  let obj3 = { cheapWorkletArrayShallowEqual: tmp(tmp2[8]).cheapWorkletArrayShallowEqual, clamp, xPosition: sharedValue1, xDestination: sharedValue };
  R.__closure = obj3;
  R.__workletHash = 10272898536596;
  R.__initData = sharedValue;
  const animatedReaction = tmpResult26.useAnimatedReaction(L, R);
  const fn3 = function z() {
    const items = [containerHeight - derivedValue4.get(), sharedValue3.get()];
    return items;
  };
  fn3.__closure = { containerHeight, scaledHeightDv: derivedValue4, yPosition: sharedValue3 };
  fn3.__workletHash = 11475249153313;
  fn3.__initData = sharedValue1;
  const fn4 = function j(arg0, arg1) {
    let first;
    const cheapWorkletArrayShallowEqual = cheapWorkletShallowEqual.cheapWorkletArrayShallowEqual;
    cheapWorkletShallowEqual;
    const tmp2 = arg1;
    if (!cheapWorkletArrayShallowEqual(arg0, tmp2)) {
      [first] = arg0;
      let items = arg1;
      if (arg1 == null) {
        items = [0, 0];
      }
      const first1 = _slicedToArray(items, 1)[0];
      if (null != arg1) {
        if (first !== first1) {
          if (typeof clamp === "function") {
            const _Math = Math;
            const _Math2 = Math;
            const bound = Math.min(Math.max(tmp9, 0), first);
            const result = sharedValue3.set(bound);
            const result1 = sharedValue2.set(bound);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
    }
  };
  const tmpResult27 = tmp(tmp2[5]);
  const obj4 = { cheapWorkletArrayShallowEqual: tmp(tmp2[8]).cheapWorkletArrayShallowEqual, clamp, yPosition: sharedValue3, yDestination: sharedValue2 };
  fn4.__closure = obj4;
  fn4.__workletHash = 6281496935578;
  fn4.__initData = sharedValue2;
  const animatedReaction1 = tmpResult27.useAnimatedReaction(fn3, fn4);
  const Gesture = tmp(tmp2[9]).Gesture;
  let items = [-onMoved, onMoved];
  const items1 = [-onMoved, onMoved];
  const PanResult = Gesture.Pan();
  function le(translationX) {
    const result = sharedValue1.set(sharedValue.get() + translationX.translationX);
    const result1 = sharedValue3.set(sharedValue2.get() + translationX.translationY);
    if (!sharedValue4.get()) {
      if (null != onMoved) {
        const obj2 = ReanimatedRexport;
        obj2.runOnJS(tmp3)();
      }
      const result2 = sharedValue4.set(true);
    }
  }
  const activeOffsetXResult = PanResult.activeOffsetX(items);
  const activeOffsetYResult = activeOffsetXResult.activeOffsetY(items1);
  let obj5 = { xPosition: sharedValue1, xDestination: sharedValue, yPosition: sharedValue3, yDestination: sharedValue2, trackedVoiceControlsToggleMovedForGestureSv: sharedValue4, onMoved, runOnJS: tmp(tmp2[5]).runOnJS };
  le.__closure = obj5;
  le.__workletHash = 14964390506971;
  le.__initData = sharedValue4;
  function ce(velocityX) {
    const sum = sharedValue1.get() + 0.0875 * velocityX.velocityX;
    const value = derivedValue5.get();
    const diff = value - derivedValue3.get();
    if (typeof clamp === "function") {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.min(Math.max(sum, 0), diff);
      const sum1 = sharedValue3.get() + 0.0875 * velocityX.velocityY;
      const value4 = derivedValue6.get();
      const diff1 = value4 - derivedValue4.get();
      if (typeof tmp5 === "function") {
        let num2;
        let num3;
        const _Math3 = Math;
        const _Math4 = Math;
        const bound1 = Math.min(Math.max(sum1, 0), diff1);
        const value5 = derivedValue6.get();
        const diff2 = value5 - derivedValue4.get() - bound1;
        const value6 = derivedValue5.get();
        const diff3 = value6 - derivedValue3.get() - bound;
        const _Math5 = Math;
        const _Math6 = Math;
        const bound2 = Math.min(bound1, diff2, bound, diff3);
        if (bound1 === bound2) {
          num2 = 0;
          num3 = bound;
          if (snapToCorners) {
            let num7 = 0;
            if (bound >= diff3) {
              num7 = diff;
            }
            num3 = num7;
            num2 = 0;
          }
        } else if (diff2 === bound2) {
          num2 = diff1;
          num3 = bound;
          if (snapToCorners) {
            let num6 = 0;
            if (bound >= diff3) {
              num6 = diff;
            }
            num3 = num6;
            num2 = diff1;
          }
        } else if (bound === bound2) {
          num2 = bound1;
          num3 = 0;
          if (snapToCorners) {
            let num5 = 0;
            if (bound1 >= diff2) {
              num5 = diff1;
            }
            num2 = num5;
            num3 = 0;
          }
        } else {
          num2 = bound1;
          num3 = bound;
          if (diff3 === bound2) {
            num2 = bound1;
            num3 = diff;
            if (snapToCorners) {
              let num4 = 0;
              if (bound1 >= diff2) {
                num4 = diff1;
              }
              num2 = num4;
              num3 = diff;
            }
          }
        }
        const obj5 = { velocity: velocityX.velocityX };
        set = sharedValue1.set;
        const withSpring = spring.withSpring;
        spring;
        const merged = Object.assign(closure_6);
        const result = set(withSpring(num3, obj5));
        const result1 = sharedValue.set(num3);
        const obj6 = { velocity: velocityX.velocityY };
        set2 = sharedValue3.set;
        const withSpring2 = spring.withSpring;
        spring;
        const merged1 = Object.assign(closure_6);
        set2(withSpring2(num2, obj6));
        const result2 = sharedValue2.set(num2);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  const onUpdateResult = activeOffsetYResult.onUpdate(le);
  let obj6 = { xPosition: sharedValue1, containerWidthDv: derivedValue5, scaledWidthDv: derivedValue3, clamp, yPosition: sharedValue3, containerHeightDv: derivedValue6, scaledHeightDv: derivedValue4, snapToCorners, withSpring: tmp(tmp2[10]).withSpring, spring: snapToCorners, xDestination: sharedValue, yDestination: sharedValue2 };
  ce.__closure = obj6;
  ce.__workletHash = 7989733343271;
  ce.__initData = sharedValue3;
  const onEndResult = onUpdateResult.onEnd(ce);
  if (cResult[1] !== onPress) {
    const useDraggablePipTsx14 = /* worklet (recovered source) */ function useDraggablePipTsx14(){const{onPress,runOnJS}=this.__closure;if(onPress!=null){runOnJS(onPress)();}};
    useDraggablePipTsx14.__closure = { onPress, runOnJS: tmp(tmp2[5]).runOnJS };
    let num2 = 4692146362189;
    useDraggablePipTsx14.__workletHash = 4692146362189;
    useDraggablePipTsx14.__initData = __initData2;
    let num3 = 1;
    cResult[1] = onPress;
    let num4 = 2;
    cResult[2] = useDraggablePipTsx14;
    tmp19 = useDraggablePipTsx14;
    const obj7 = { onPress, runOnJS: tmp(tmp2[5]).runOnJS };
  } else {
    tmp19 = cResult[2];
  }
  const Gesture2 = tmp(tmp2[9]).Gesture;
  const TapResult = Gesture2.Tap();
  const onStartResult = TapResult.onStart(tmp19);
  const Gesture3 = tmp(tmp2[9]).Gesture;
  const RaceResult = Gesture3.Race(onEndResult, onStartResult);
  function he() {
    let items;
    let value;
    let value4;
    let value5;
    let value6;
    const obj = { transform: items };
    const obj2 = { translateX: value + (value4 - derivedValue1.get()) / 2 };
    value = sharedValue1.get();
    value4 = derivedValue3.get();
    items = [obj2, , ];
    const obj3 = { translateY: value5 + (value6 - derivedValue2.get()) / 2 };
    value5 = sharedValue3.get();
    value6 = derivedValue4.get();
    items[1] = obj3;
    items[2] = { scale: derivedValue.get() };
    ({ scale: derivedValue.get() });
    return obj;
  }
  he.__closure = { xPosition: sharedValue1, scaledWidthDv: derivedValue3, widthDv: derivedValue1, yPosition: sharedValue3, scaledHeightDv: derivedValue4, heightDv: derivedValue2, pipScale: derivedValue };
  he.__workletHash = 12534173786665;
  he.__initData = __initData3;
  const tmpResult28 = tmp(tmp2[5]);
  const animatedStyle = tmpResult28.useAnimatedStyle(he);
  if (cResult[3] === animatedStyle) {
    let tmp24;
    if (cResult[4] === RaceResult) {
      tmp24 = cResult[5];
    }
    return tmp24;
  }
  const obj8 = { gesture: RaceResult, draggableGridItemStyles: animatedStyle };
  cResult[3] = animatedStyle;
  cResult[4] = RaceResult;
  cResult[5] = obj8;
  tmp24 = obj8;
}) : ((width) => {
  let Gesture3;
  let ce;
  let obj29;
  let onStartResult;
  width = width.width;
  const height = width.height;
  const containerWidth = width.containerWidth;
  const containerHeight = width.containerHeight;
  const onPress = width.onPress;
  const onMoved = width.onMoved;
  const snapToCorners = width.snapToCorners;
  let derivedValue2;
  let derivedValue3;
  let derivedValue4;
  let derivedValue5;
  let derivedValue6;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  const tmp = containerHeight((pipFocus) => pipFocus.pipFocus);
  let closure_7 = tmp;
  let obj = width(height[5]);
  const fn = function x() {
    let num = 1;
    const withTiming = timing.withTiming;
    timing;
    if (closure_7) {
      num = React3;
    }
    const obj = { easing: native.STANDARD_EASING, duration: 250 };
    return withTiming(num, obj);
  };
  let obj2 = { withTiming: width(height[6]).withTiming, pipFocus: tmp, PIP_FOCUS_SCALE: onPress, STANDARD_EASING: width(height[7]).STANDARD_EASING };
  fn.__closure = obj2;
  fn.__workletHash = 5031979692865;
  fn.__initData = __initData4;
  const derivedValue = obj.useDerivedValue(fn);
  let obj3 = width(height[5]);
  const fn2 = function w() {
    return width;
  };
  fn2.__closure = { width };
  fn2.__workletHash = 4121878739489;
  fn2.__initData = __initData5;
  const derivedValue1 = obj3.useDerivedValue(fn2);
  const obj4 = width(height[5]);
  class S {
    constructor() {
      return height;
    }
  }
  S.__closure = { height };
  S.__workletHash = 15220665499310;
  S.__initData = __initData6;
  derivedValue2 = obj4.useDerivedValue(S);
  let obj5 = width(height[5]);
  class P {
    constructor() {
      return derivedValue.get() * width;
    }
  }
  P.__closure = { pipScale: derivedValue, width };
  P.__workletHash = 9619351565040;
  P.__initData = __initData7;
  derivedValue3 = obj5.useDerivedValue(P);
  let obj6 = width(height[5]);
  const fn3 = function y() {
    return derivedValue.get() * height;
  };
  fn3.__closure = { pipScale: derivedValue, height };
  fn3.__workletHash = 9882966094266;
  fn3.__initData = __initData8;
  derivedValue4 = obj6.useDerivedValue(fn3);
  const fn4 = function f() {
    return containerWidth;
  };
  fn4.__closure = { containerWidth };
  fn4.__workletHash = 11570665094660;
  fn4.__initData = __initData9;
  const obj7 = width(height[5]);
  derivedValue5 = obj7.useDerivedValue(fn4);
  const obj8 = width(height[5]);
  class T {
    constructor() {
      return containerHeight;
    }
  }
  T.__closure = { containerHeight };
  T.__workletHash = 3750221839239;
  T.__initData = __initData10;
  derivedValue6 = obj8.useDerivedValue(T);
  const obj9 = width(height[5]);
  sharedValue = obj9.useSharedValue(0);
  const obj11 = width(height[5]);
  sharedValue1 = obj11.useSharedValue(sharedValue.get());
  const obj12 = width(height[5]);
  sharedValue2 = obj12.useSharedValue(0);
  const obj14 = width(height[5]);
  sharedValue3 = obj14.useSharedValue(sharedValue2.get());
  const obj15 = width(height[5]);
  sharedValue4 = obj15.useSharedValue(false);
  const obj16 = width(height[5]);
  class W {
    constructor() {
      const items = [containerWidth - derivedValue3.get(), sharedValue1.get()];
      return items;
    }
  }
  W.__closure = { containerWidth, scaledWidthDv: derivedValue3, xPosition: sharedValue1 };
  W.__workletHash = 9975249486241;
  W.__initData = __initData11;
  class H {
    constructor(arg0, arg1) {
      let first;
      const cheapWorkletArrayShallowEqual = cheapWorkletShallowEqual.cheapWorkletArrayShallowEqual;
      cheapWorkletShallowEqual;
      const tmp2 = arg1;
      if (!cheapWorkletArrayShallowEqual(arg0, tmp2)) {
        [first] = arg0;
        let items = arg1;
        if (arg1 == null) {
          items = [0, 0];
        }
        const first1 = _slicedToArray(items, 1)[0];
        if (null != arg1) {
          if (first !== first1) {
            if (typeof clamp === "function") {
              const _Math = Math;
              const _Math2 = Math;
              const bound = Math.min(Math.max(tmp9, 0), first);
              const result = sharedValue1.set(bound);
              const result1 = sharedValue.set(bound);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
      }
    }
  }
  H.__closure = { cheapWorkletArrayShallowEqual: width(height[8]).cheapWorkletArrayShallowEqual, clamp, xPosition: sharedValue1, xDestination: sharedValue };
  H.__workletHash = 4425290890573;
  H.__initData = __initData12;
  ({ cheapWorkletArrayShallowEqual: width(height[8]).cheapWorkletArrayShallowEqual, clamp, xPosition: sharedValue1, xDestination: sharedValue });
  const animatedReaction = obj16.useAnimatedReaction(W, H);
  const obj18 = width(height[5]);
  class R {
    constructor() {
      const items = [containerHeight - derivedValue4.get(), sharedValue3.get()];
      return items;
    }
  }
  R.__closure = { containerHeight, scaledHeightDv: derivedValue4, yPosition: sharedValue3 };
  R.__workletHash = 388258399047;
  R.__initData = __initData13;
  class J {
    constructor(arg0, arg1) {
      let first;
      const cheapWorkletArrayShallowEqual = cheapWorkletShallowEqual.cheapWorkletArrayShallowEqual;
      cheapWorkletShallowEqual;
      const tmp2 = arg1;
      if (!cheapWorkletArrayShallowEqual(arg0, tmp2)) {
        [first] = arg0;
        let items = arg1;
        if (arg1 == null) {
          items = [0, 0];
        }
        const first1 = _slicedToArray(items, 1)[0];
        if (null != arg1) {
          if (first !== first1) {
            if (typeof clamp === "function") {
              const _Math = Math;
              const _Math2 = Math;
              const bound = Math.min(Math.max(tmp9, 0), first);
              const result = sharedValue3.set(bound);
              const result1 = sharedValue2.set(bound);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
      }
    }
  }
  J.__closure = { cheapWorkletArrayShallowEqual: width(height[8]).cheapWorkletArrayShallowEqual, clamp, yPosition: sharedValue3, yDestination: sharedValue2 };
  J.__workletHash = 2349485801752;
  J.__initData = __initData14;
  ({ cheapWorkletArrayShallowEqual: width(height[8]).cheapWorkletArrayShallowEqual, clamp, yPosition: sharedValue3, yDestination: sharedValue2 });
  const animatedReaction1 = obj18.useAnimatedReaction(R, J);
  const Gesture = width(height[9]).Gesture;
  let items = [-onMoved, onMoved];
  const items1 = [-onMoved, onMoved];
  const PanResult = Gesture.Pan();
  function ae(translationX) {
    const result = sharedValue1.set(sharedValue.get() + translationX.translationX);
    const result1 = sharedValue3.set(sharedValue2.get() + translationX.translationY);
    if (!sharedValue4.get()) {
      if (null != onMoved) {
        const obj2 = ReanimatedRexport;
        obj2.runOnJS(tmp3)();
      }
      const result2 = sharedValue4.set(true);
    }
  }
  const activeOffsetXResult = PanResult.activeOffsetX(items);
  const activeOffsetYResult = activeOffsetXResult.activeOffsetY(items1);
  ae.__closure = { xPosition: sharedValue1, xDestination: sharedValue, yPosition: sharedValue3, yDestination: sharedValue2, trackedVoiceControlsToggleMovedForGestureSv: sharedValue4, onMoved, runOnJS: width(height[5]).runOnJS };
  ae.__workletHash = 7258999157107;
  ae.__initData = __initData16;
  ({ xPosition: sharedValue1, xDestination: sharedValue, yPosition: sharedValue3, yDestination: sharedValue2, trackedVoiceControlsToggleMovedForGestureSv: sharedValue4, onMoved, runOnJS: width(height[5]).runOnJS });
  function se(velocityX) {
    const sum = sharedValue1.get() + 0.0875 * velocityX.velocityX;
    const value = derivedValue5.get();
    const diff = value - derivedValue3.get();
    if (typeof clamp === "function") {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.min(Math.max(sum, 0), diff);
      const sum1 = sharedValue3.get() + 0.0875 * velocityX.velocityY;
      const value4 = derivedValue6.get();
      const diff1 = value4 - derivedValue4.get();
      if (typeof tmp5 === "function") {
        let num2;
        let num3;
        const _Math3 = Math;
        const _Math4 = Math;
        const bound1 = Math.min(Math.max(sum1, 0), diff1);
        const value5 = derivedValue6.get();
        const diff2 = value5 - derivedValue4.get() - bound1;
        const value6 = derivedValue5.get();
        const diff3 = value6 - derivedValue3.get() - bound;
        const _Math5 = Math;
        const _Math6 = Math;
        const bound2 = Math.min(bound1, diff2, bound, diff3);
        if (bound1 === bound2) {
          num2 = 0;
          num3 = bound;
          if (snapToCorners) {
            let num7 = 0;
            if (bound >= diff3) {
              num7 = diff;
            }
            num3 = num7;
            num2 = 0;
          }
        } else if (diff2 === bound2) {
          num2 = diff1;
          num3 = bound;
          if (snapToCorners) {
            let num6 = 0;
            if (bound >= diff3) {
              num6 = diff;
            }
            num3 = num6;
            num2 = diff1;
          }
        } else if (bound === bound2) {
          num2 = bound1;
          num3 = 0;
          if (snapToCorners) {
            let num5 = 0;
            if (bound1 >= diff2) {
              num5 = diff1;
            }
            num2 = num5;
            num3 = 0;
          }
        } else {
          num2 = bound1;
          num3 = bound;
          if (diff3 === bound2) {
            num2 = bound1;
            num3 = diff;
            if (snapToCorners) {
              let num4 = 0;
              if (bound1 >= diff2) {
                num4 = diff1;
              }
              num2 = num4;
              num3 = diff;
            }
          }
        }
        const obj5 = { velocity: velocityX.velocityX };
        set = sharedValue1.set;
        const withSpring = spring.withSpring;
        spring;
        const merged = Object.assign(closure_6);
        const result = set(withSpring(num3, obj5));
        const result1 = sharedValue.set(num3);
        const obj6 = { velocity: velocityX.velocityY };
        set2 = sharedValue3.set;
        const withSpring2 = spring.withSpring;
        spring;
        const merged1 = Object.assign(closure_6);
        set2(withSpring2(num2, obj6));
        const result2 = sharedValue2.set(num2);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  const onUpdateResult = activeOffsetYResult.onUpdate(ae);
  se.__closure = { xPosition: sharedValue1, containerWidthDv: derivedValue5, scaledWidthDv: derivedValue3, clamp, yPosition: sharedValue3, containerHeightDv: derivedValue6, scaledHeightDv: derivedValue4, snapToCorners, withSpring: width(height[10]).withSpring, spring: snapToCorners, xDestination: sharedValue, yDestination: sharedValue2 };
  se.__workletHash = 8277512801234;
  se.__initData = __initData15;
  ({ xPosition: sharedValue1, containerWidthDv: derivedValue5, scaledWidthDv: derivedValue3, clamp, yPosition: sharedValue3, containerHeightDv: derivedValue6, scaledHeightDv: derivedValue4, snapToCorners, withSpring: width(height[10]).withSpring, spring: snapToCorners, xDestination: sharedValue, yDestination: sharedValue2 });
  const onEndResult = onUpdateResult.onEnd(se);
  const Gesture2 = width(height[9]).Gesture;
  function re() {
    if (null != onPress) {
      const obj = ReanimatedRexport;
      obj.runOnJS(tmp)();
    }
  }
  const TapResult = Gesture2.Tap();
  re.__closure = { onPress, runOnJS: width(height[5]).runOnJS };
  re.__workletHash = 3284429654755;
  re.__initData = __initData17;
  const obj21 = { gesture: Gesture3.Race(onEndResult, onStartResult), draggableGridItemStyles: obj29.useAnimatedStyle(ce) };
  ({ onPress, runOnJS: width(height[5]).runOnJS });
  onStartResult = TapResult.onStart(re);
  Gesture3 = width(height[9]).Gesture;
  ce = function ce() {
    let items;
    let value;
    let value4;
    let value5;
    let value6;
    const obj = { transform: items };
    const obj2 = { translateX: value + (value4 - derivedValue1.get()) / 2 };
    value = sharedValue1.get();
    value4 = derivedValue3.get();
    items = [obj2, , ];
    const obj3 = { translateY: value5 + (value6 - derivedValue2.get()) / 2 };
    value5 = sharedValue3.get();
    value6 = derivedValue4.get();
    items[1] = obj3;
    items[2] = { scale: derivedValue.get() };
    ({ scale: derivedValue.get() });
    return obj;
  };
  ce.__closure = { xPosition: sharedValue1, scaledWidthDv: derivedValue3, widthDv: derivedValue1, yPosition: sharedValue3, scaledHeightDv: derivedValue4, heightDv: derivedValue2, pipScale: derivedValue };
  ce.__workletHash = 7724883483118;
  ce.__initData = __initData18;
  obj29 = width(height[5]);
  return obj21;
});
let result = size.fileFinishedImporting("modules/video_calls/native/useDraggablePip.tsx");

export const useDraggablePip = tmp3;