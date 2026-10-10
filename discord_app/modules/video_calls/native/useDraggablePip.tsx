// === Module 10839: useDraggablePip ===

// Module 10839 (useDraggablePip)
import native from "native" /* 1200 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import timing from "timing" /* 5093 */;
import spring from "spring" /* 5378 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 9579 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const useChannelCallStore = fn(10353).useChannelCallStore;
const Constants = fn(10826);
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
const ReactCompilerGating = fn(558);
function clamp(arg0, arg1, arg2) {
  return Math.min(Math.max(arg0, arg1), arg2);
}
clamp.__closure = {};
clamp.__workletHash = 6958770079339;
clamp.__initData = { code: "function clamp_useDraggablePipTsx31(value,min,max){return Math.min(Math.max(value,min),max);}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/useDraggablePip.tsx");

export const useDraggablePip = ReactCompilerGating.isReactCompilerEnabled() ? (function useDraggablePip(width) {
  const cResult = width(height[4]).c(6);
  width = width.width;
  height = width.height;
  const containerWidth = width.containerWidth;
  const containerHeight = width.containerHeight;
  const onPress = width.onPress;
  const onMoved = width.onMoved;
  const snapToCorners = width.snapToCorners;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    class W {
      constructor(arg0) {
        return width.pipFocus;
      }
    }
    cResult[0] = W;
  } else {
    class W {
      constructor(arg0) {
        return width.pipFocus;
      }
    }
  }
  const tmp5 = containerHeight(W);
  __initData = tmp5;
  let obj = width(height[4]);
  class C {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_1;
      obj = closure_0(closure_1[6]);
      num = 1;
      if (closure_7) {
        num = PIP_FOCUS_SCALE;
      }
      obj1 = { easing: tmp(tmp2[7]).STANDARD_EASING, duration: 250 };
      return obj.withTiming(num, obj1);
    }
  }
  const tmpResult = width(height[5]);
  C.__closure = { withTiming: width(height[6]).withTiming, pipFocus: tmp5, PIP_FOCUS_SCALE: onPress, STANDARD_EASING: width(height[7]).STANDARD_EASING };
  C.__workletHash = 7848271415351;
  C.__initData = __initData;
  const derivedValue = tmpResult.useDerivedValue(C);
  let obj2 = { withTiming: width(height[6]).withTiming, pipFocus: tmp5, PIP_FOCUS_SCALE: onPress, STANDARD_EASING: width(height[7]).STANDARD_EASING };
  class V {
    constructor() {
      return width;
    }
  }
  V.__closure = { width };
  V.__workletHash = 14810909441301;
  V.__initData = derivedValue;
  const derivedValue1 = width(height[5]).useDerivedValue(V);
  const tmpResult15 = width(height[5]);
  class G {
    constructor() {
      return height;
    }
  }
  G.__closure = { height };
  G.__workletHash = 15343935194036;
  G.__initData = derivedValue1;
  const derivedValue2 = width(height[5]).useDerivedValue(G);
  const tmpResult16 = width(height[5]);
  class F {
    constructor() {
      return closure_8.get() * width;
    }
  }
  F.__closure = { pipScale: derivedValue, width };
  F.__workletHash = 3468337829868;
  F.__initData = derivedValue2;
  const derivedValue3 = width(height[5]).useDerivedValue(F);
  const tmpResult17 = width(height[5]);
  class I {
    constructor() {
      return closure_8.get() * height;
    }
  }
  I.__closure = { pipScale: derivedValue, height };
  I.__workletHash = 7163944260205;
  I.__initData = derivedValue3;
  const derivedValue4 = width(height[5]).useDerivedValue(I);
  const tmpResult18 = width(height[5]);
  const fn = function q() {
    return containerWidth;
  };
  fn.__closure = { containerWidth };
  fn.__workletHash = 13449836478609;
  fn.__initData = derivedValue4;
  const derivedValue5 = width(height[5]).useDerivedValue(fn);
  const tmpResult19 = width(height[5]);
  class J {
    constructor() {
      return containerHeight;
    }
  }
  J.__closure = { containerHeight };
  J.__workletHash = 4105281399152;
  J.__initData = derivedValue5;
  const derivedValue6 = width(height[5]).useDerivedValue(J);
  const tmpResult20 = width(height[5]);
  const sharedValue = width(height[5]).useSharedValue(0);
  const tmpResult21 = width(height[5]);
  const sharedValue1 = width(height[5]).useSharedValue(sharedValue.get());
  const tmpResult22 = width(height[5]);
  const sharedValue2 = width(height[5]).useSharedValue(0);
  const tmpResult23 = width(height[5]);
  const sharedValue3 = width(height[5]).useSharedValue(sharedValue2.get());
  const tmpResult24 = width(height[5]);
  const sharedValue4 = width(height[5]).useSharedValue(false);
  const tmpResult25 = width(height[5]);
  class L {
    constructor() {
      items = [, ];
      items[0] = containerWidth - closure_11.get();
      items[1] = closure_16.get();
      return items;
    }
  }
  L.__closure = { containerWidth, scaledWidthDv: derivedValue3, xPosition: sharedValue1 };
  L.__workletHash = 2741340788440;
  L.__initData = derivedValue6;
  class R {
    constructor(arg0, arg1) {
      obj = closure_0(closure_1[8]);
      tmp = arg1;
      if (!obj.cheapWorkletArrayShallowEqual(width, tmp)) {
        num = 2;
        tmp2 = closure_2;
        tmp3 = closure_2(width, 2);
        first = tmp3[0];
        items = arg1;
        tmp5 = tmp3[1];
        if (arg1 == null) {
          items = [0, 0];
        }
        num2 = 1;
        if (null != arg1) {
          if (first !== tmp2(items, 1)[0]) {
            tmp6 = clamp;
            if (typeof clamp === "function") {
              tmp8 = globalThis;
              _Math = Math;
              _Math2 = Math;
              num3 = 0;
              bound = Math.min(Math.max(tmp7, 0), first);
              tmp10 = closure_16;
              result = closure_16.set(bound);
              tmp12 = closure_15;
              result1 = closure_15.set(bound);
            } else {
              str = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
      }
      return;
    }
  }
  const tmpResult26 = width(height[5]);
  R.__closure = { cheapWorkletArrayShallowEqual: width(height[8]).cheapWorkletArrayShallowEqual, clamp, xPosition: sharedValue1, xDestination: sharedValue };
  R.__workletHash = 10272898536596;
  R.__initData = sharedValue;
  const animatedReaction = tmpResult26.useAnimatedReaction(L, R);
  let obj3 = { cheapWorkletArrayShallowEqual: width(height[8]).cheapWorkletArrayShallowEqual, clamp, xPosition: sharedValue1, xDestination: sharedValue };
  const fn2 = function z() {
    const items = [containerHeight - derivedValue4.get(), sharedValue3.get()];
    return items;
  };
  fn2.__closure = { containerHeight, scaledHeightDv: derivedValue4, yPosition: sharedValue3 };
  fn2.__workletHash = 11475249153313;
  fn2.__initData = sharedValue1;
  const fn3 = function j(arg0, arg1) {
    if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp)) {
      [first] = arg0;
      let items = arg1;
      if (arg1 == null) {
        items = [0, 0];
      }
      if (null != arg1) {
        if (first !== _slicedToArray(items, 1)[0]) {
          if (typeof clamp === "function") {
            const _Math = Math;
            const _Math2 = Math;
            const bound = Math.min(Math.max(tmp7, 0), first);
            const result = sharedValue3.set(bound);
            const result1 = sharedValue2.set(bound);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
    }
    obj = cheapWorkletShallowEqual;
    tmp = arg1;
  };
  const tmpResult27 = width(height[5]);
  fn3.__closure = { cheapWorkletArrayShallowEqual: width(height[8]).cheapWorkletArrayShallowEqual, clamp, yPosition: sharedValue3, yDestination: sharedValue2 };
  fn3.__workletHash = 6281496935578;
  fn3.__initData = sharedValue2;
  const animatedReaction1 = tmpResult27.useAnimatedReaction(fn2, fn3);
  const Gesture = tmp(tmp2[9]).Gesture;
  const obj4 = { cheapWorkletArrayShallowEqual: width(height[8]).cheapWorkletArrayShallowEqual, clamp, yPosition: sharedValue3, yDestination: sharedValue2 };
  let items = [-onMoved, onMoved];
  const PanResult = Gesture.Pan();
  const items1 = [-onMoved, onMoved];
  const activeOffsetXResult = Gesture.Pan().activeOffsetX(items);
  function le(translationX) {
    const result = sharedValue1.set(sharedValue.get() + translationX.translationX);
    const result1 = sharedValue3.set(sharedValue2.get() + translationX.translationY);
    if (!sharedValue4.get()) {
      if (null != onMoved) {
        ReanimatedRexport.runOnJS(tmp3)();
      }
      const result2 = sharedValue4.set(true);
    }
  }
  const activeOffsetYResult = Gesture.Pan().activeOffsetX(items).activeOffsetY(items1);
  le.__closure = { xPosition: sharedValue1, xDestination: sharedValue, yPosition: sharedValue3, yDestination: sharedValue2, trackedVoiceControlsToggleMovedForGestureSv: sharedValue4, onMoved, runOnJS: width(height[5]).runOnJS };
  le.__workletHash = 14964390506971;
  le.__initData = sharedValue4;
  const obj5 = { xPosition: sharedValue1, xDestination: sharedValue, yPosition: sharedValue3, yDestination: sharedValue2, trackedVoiceControlsToggleMovedForGestureSv: sharedValue4, onMoved, runOnJS: width(height[5]).runOnJS };
  function ce(velocityX) {
    const sum = sharedValue1.get() + 0.0875 * velocityX.velocityX;
    value = derivedValue5.get();
    const diff = value - derivedValue3.get();
    if (typeof clamp === "function") {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.min(Math.max(sum, 0), diff);
      const sum1 = sharedValue3.get() + 0.0875 * velocityX.velocityY;
      value4 = derivedValue6.get();
      const diff1 = value4 - derivedValue4.get();
      if (typeof tmp4 === "function") {
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
          let num2 = 0;
          let num3 = bound;
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
        const obj8 = {};
        const merged = Object.assign(closure_6);
        obj8.velocity = velocityX.velocityX;
        const result = sharedValue1.set(spring.withSpring(num3, obj8));
        const result1 = sharedValue.set(num3);
        const obj10 = {};
        const merged1 = Object.assign(closure_6);
        obj10.velocity = velocityX.velocityY;
        const result2 = sharedValue3.set(spring.withSpring(num2, obj10));
        const result3 = sharedValue2.set(num2);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  const onUpdateResult = activeOffsetYResult.onUpdate(le);
  ce.__closure = { xPosition: sharedValue1, containerWidthDv: derivedValue5, scaledWidthDv: derivedValue3, clamp, yPosition: sharedValue3, containerHeightDv: derivedValue6, scaledHeightDv: derivedValue4, snapToCorners, withSpring: width(height[10]).withSpring, spring: snapToCorners, xDestination: sharedValue, yDestination: sharedValue2 };
  ce.__workletHash = 7989733343271;
  ce.__initData = sharedValue3;
  const obj6 = { xPosition: sharedValue1, containerWidthDv: derivedValue5, scaledWidthDv: derivedValue3, clamp, yPosition: sharedValue3, containerHeightDv: derivedValue6, scaledHeightDv: derivedValue4, snapToCorners, withSpring: width(height[10]).withSpring, spring: snapToCorners, xDestination: sharedValue, yDestination: sharedValue2 };
  if (cResult[1] !== onPress) {
    class W {
      constructor(arg0) {
        return width.pipFocus;
      }
    }
    let obj7 = { onPress, runOnJS: tmp(tmp2[5]).runOnJS };
    tmp20.__closure = obj7;
    tmp20.__workletHash = 4692146362189;
    tmp20.__initData = __initData2;
    cResult[1] = onPress;
    cResult[2] = tmp20;
  } else {
    class W {
      constructor(arg0) {
        return width.pipFocus;
      }
    }
  }
  const Gesture2 = tmp(tmp2[9]).Gesture;
  const onEndResult = onUpdateResult.onEnd(ce);
  const TapResult = Gesture2.Tap();
  const Gesture3 = tmp(tmp2[9]).Gesture;
  const RaceResult = Gesture3.Race(onEndResult, Gesture2.Tap().onStart(tmp20));
  const onStartResult = Gesture2.Tap().onStart(tmp20);
  function he() {
    const obj = { transform: null };
    const obj2 = { translateX: null };
    value = sharedValue1.get();
    value4 = derivedValue3.get();
    obj2.translateX = value + (value4 - derivedValue1.get()) / 2;
    const items = [obj2, , ];
    const obj3 = { translateY: null };
    const value5 = sharedValue3.get();
    const value6 = derivedValue4.get();
    obj3.translateY = value5 + (value6 - derivedValue2.get()) / 2;
    items[1] = obj3;
    items[2] = { scale: derivedValue.get() };
    obj.transform = items;
    return obj;
  }
  he.__closure = { xPosition: sharedValue1, scaledWidthDv: derivedValue3, widthDv: derivedValue1, yPosition: sharedValue3, scaledHeightDv: derivedValue4, heightDv: derivedValue2, pipScale: derivedValue };
  he.__workletHash = 12534173786665;
  he.__initData = __initData3;
  const animatedStyle = width(height[5]).useAnimatedStyle(he);
  if (cResult[3] === animatedStyle) {
    class W {
      constructor(arg0) {
        return width.pipFocus;
      }
    }
    return obj8;
  }
  obj8 = { gesture: RaceResult, draggableGridItemStyles: animatedStyle };
  cResult[3] = animatedStyle;
  cResult[4] = RaceResult;
  cResult[5] = obj8;
  const tmpResult28 = width(height[5]);
}) : (function useDraggablePip(width) {
  width = width.width;
  const height = width.height;
  const containerWidth = width.containerWidth;
  const containerHeight = width.containerHeight;
  const onPress = width.onPress;
  const onMoved = width.onMoved;
  const snapToCorners = width.snapToCorners;
  let derivedValue1;
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
  let tmp = containerHeight((pipFocus) => pipFocus.pipFocus);
  closure_7 = tmp;
  const fn = function x() {
    let num = 1;
    if (closure_7) {
      num = React4;
    }
    const obj = timing;
    return obj.withTiming(num, { easing: native.STANDARD_EASING, duration: 250 });
  };
  let obj = width(height[5]);
  fn.__closure = { withTiming: width(height[6]).withTiming, pipFocus: tmp, PIP_FOCUS_SCALE: onPress, STANDARD_EASING: width(height[7]).STANDARD_EASING };
  fn.__workletHash = 5031979692865;
  fn.__initData = __initData4;
  const derivedValue = obj.useDerivedValue(fn);
  let obj2 = { withTiming: width(height[6]).withTiming, pipFocus: tmp, PIP_FOCUS_SCALE: onPress, STANDARD_EASING: width(height[7]).STANDARD_EASING };
  class P {
    constructor() {
      return width;
    }
  }
  P.__closure = { width };
  P.__workletHash = 4121878739489;
  P.__initData = __initData5;
  derivedValue1 = width(height[5]).useDerivedValue(P);
  let obj3 = width(height[5]);
  const fn2 = function w() {
    return height;
  };
  fn2.__closure = { height };
  fn2.__workletHash = 15220665499310;
  fn2.__initData = __initData6;
  derivedValue2 = width(height[5]).useDerivedValue(fn2);
  const obj4 = width(height[5]);
  class S {
    constructor() {
      return closure_8.get() * width;
    }
  }
  S.__closure = { pipScale: derivedValue, width };
  S.__workletHash = 9619351565040;
  S.__initData = __initData7;
  derivedValue3 = width(height[5]).useDerivedValue(S);
  const obj5 = width(height[5]);
  const fn3 = function y() {
    return derivedValue.get() * height;
  };
  fn3.__closure = { pipScale: derivedValue, height };
  fn3.__workletHash = 9882966094266;
  fn3.__initData = __initData8;
  derivedValue4 = width(height[5]).useDerivedValue(fn3);
  const obj6 = width(height[5]);
  const fn4 = function f() {
    return containerWidth;
  };
  fn4.__closure = { containerWidth };
  fn4.__workletHash = 11570665094660;
  fn4.__initData = __initData9;
  derivedValue5 = width(height[5]).useDerivedValue(fn4);
  let obj7 = width(height[5]);
  class T {
    constructor() {
      return containerHeight;
    }
  }
  T.__closure = { containerHeight };
  T.__workletHash = 3750221839239;
  T.__initData = __initData10;
  derivedValue6 = width(height[5]).useDerivedValue(T);
  let obj8 = width(height[5]);
  sharedValue = width(height[5]).useSharedValue(0);
  let obj9 = width(height[5]);
  sharedValue1 = width(height[5]).useSharedValue(sharedValue.get());
  const obj11 = width(height[5]);
  sharedValue2 = width(height[5]).useSharedValue(0);
  const obj12 = width(height[5]);
  sharedValue3 = width(height[5]).useSharedValue(sharedValue2.get());
  const obj14 = width(height[5]);
  sharedValue4 = width(height[5]).useSharedValue(false);
  const obj15 = width(height[5]);
  const fn5 = function b() {
    const items = [containerWidth - derivedValue3.get(), sharedValue1.get()];
    return items;
  };
  fn5.__closure = { containerWidth, scaledWidthDv: derivedValue3, xPosition: sharedValue1 };
  fn5.__workletHash = 9975249486241;
  fn5.__initData = __initData11;
  class H {
    constructor(arg0, arg1) {
      obj = closure_0(closure_1[8]);
      tmp = arg1;
      if (!obj.cheapWorkletArrayShallowEqual(width, tmp)) {
        num = 2;
        tmp2 = closure_2;
        tmp3 = closure_2(width, 2);
        first = tmp3[0];
        items = arg1;
        tmp5 = tmp3[1];
        if (arg1 == null) {
          items = [0, 0];
        }
        num2 = 1;
        if (null != arg1) {
          if (first !== tmp2(items, 1)[0]) {
            tmp6 = clamp;
            if (typeof clamp === "function") {
              tmp8 = globalThis;
              _Math = Math;
              _Math2 = Math;
              num3 = 0;
              bound = Math.min(Math.max(tmp7, 0), first);
              tmp10 = closure_16;
              result = closure_16.set(bound);
              tmp12 = closure_15;
              result1 = closure_15.set(bound);
            } else {
              str = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
      }
      return;
    }
  }
  const obj16 = width(height[5]);
  H.__closure = { cheapWorkletArrayShallowEqual: width(height[8]).cheapWorkletArrayShallowEqual, clamp, xPosition: sharedValue1, xDestination: sharedValue };
  H.__workletHash = 4425290890573;
  H.__initData = __initData12;
  const animatedReaction = obj16.useAnimatedReaction(fn5, H);
  let obj10 = { cheapWorkletArrayShallowEqual: width(height[8]).cheapWorkletArrayShallowEqual, clamp, xPosition: sharedValue1, xDestination: sharedValue };
  class R {
    constructor() {
      items = [, ];
      items[0] = containerHeight - closure_12.get();
      items[1] = closure_18.get();
      return items;
    }
  }
  R.__closure = { containerHeight, scaledHeightDv: derivedValue4, yPosition: sharedValue3 };
  R.__workletHash = 388258399047;
  R.__initData = __initData13;
  class J {
    constructor(arg0, arg1) {
      obj = closure_0(closure_1[8]);
      tmp = arg1;
      if (!obj.cheapWorkletArrayShallowEqual(width, tmp)) {
        num = 2;
        tmp2 = closure_2;
        tmp3 = closure_2(width, 2);
        first = tmp3[0];
        items = arg1;
        tmp5 = tmp3[1];
        if (arg1 == null) {
          items = [0, 0];
        }
        num2 = 1;
        if (null != arg1) {
          if (first !== tmp2(items, 1)[0]) {
            tmp6 = clamp;
            if (typeof clamp === "function") {
              tmp8 = globalThis;
              _Math = Math;
              _Math2 = Math;
              num3 = 0;
              bound = Math.min(Math.max(tmp7, 0), first);
              tmp10 = closure_18;
              result = closure_18.set(bound);
              tmp12 = closure_17;
              result1 = closure_17.set(bound);
            } else {
              str = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
      }
      return;
    }
  }
  const obj18 = width(height[5]);
  J.__closure = { cheapWorkletArrayShallowEqual: width(height[8]).cheapWorkletArrayShallowEqual, clamp, yPosition: sharedValue3, yDestination: sharedValue2 };
  J.__workletHash = 2349485801752;
  J.__initData = __initData14;
  const animatedReaction1 = obj18.useAnimatedReaction(R, J);
  const Gesture = width(height[9]).Gesture;
  const obj13 = { cheapWorkletArrayShallowEqual: width(height[8]).cheapWorkletArrayShallowEqual, clamp, yPosition: sharedValue3, yDestination: sharedValue2 };
  let items = [-onMoved, onMoved];
  const PanResult = Gesture.Pan();
  const items1 = [-onMoved, onMoved];
  const activeOffsetXResult = Gesture.Pan().activeOffsetX(items);
  function ae(translationX) {
    const result = sharedValue1.set(sharedValue.get() + translationX.translationX);
    const result1 = sharedValue3.set(sharedValue2.get() + translationX.translationY);
    if (!sharedValue4.get()) {
      if (null != onMoved) {
        ReanimatedRexport.runOnJS(tmp3)();
      }
      const result2 = sharedValue4.set(true);
    }
  }
  const activeOffsetYResult = Gesture.Pan().activeOffsetX(items).activeOffsetY(items1);
  ae.__closure = { xPosition: sharedValue1, xDestination: sharedValue, yPosition: sharedValue3, yDestination: sharedValue2, trackedVoiceControlsToggleMovedForGestureSv: sharedValue4, onMoved, runOnJS: width(height[5]).runOnJS };
  ae.__workletHash = 7258999157107;
  ae.__initData = __initData16;
  const obj17 = { xPosition: sharedValue1, xDestination: sharedValue, yPosition: sharedValue3, yDestination: sharedValue2, trackedVoiceControlsToggleMovedForGestureSv: sharedValue4, onMoved, runOnJS: width(height[5]).runOnJS };
  function se(velocityX) {
    const sum = sharedValue1.get() + 0.0875 * velocityX.velocityX;
    value = derivedValue5.get();
    const diff = value - derivedValue3.get();
    if (typeof clamp === "function") {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.min(Math.max(sum, 0), diff);
      const sum1 = sharedValue3.get() + 0.0875 * velocityX.velocityY;
      value4 = derivedValue6.get();
      const diff1 = value4 - derivedValue4.get();
      if (typeof tmp4 === "function") {
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
          let num2 = 0;
          let num3 = bound;
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
        const obj8 = {};
        const merged = Object.assign(closure_6);
        obj8.velocity = velocityX.velocityX;
        const result = sharedValue1.set(spring.withSpring(num3, obj8));
        const result1 = sharedValue.set(num3);
        const obj10 = {};
        const merged1 = Object.assign(closure_6);
        obj10.velocity = velocityX.velocityY;
        const result2 = sharedValue3.set(spring.withSpring(num2, obj10));
        const result3 = sharedValue2.set(num2);
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
  const obj19 = { xPosition: sharedValue1, containerWidthDv: derivedValue5, scaledWidthDv: derivedValue3, clamp, yPosition: sharedValue3, containerHeightDv: derivedValue6, scaledHeightDv: derivedValue4, snapToCorners, withSpring: width(height[10]).withSpring, spring: snapToCorners, xDestination: sharedValue, yDestination: sharedValue2 };
  const Gesture2 = width(height[9]).Gesture;
  const onEndResult = onUpdateResult.onEnd(se);
  function re() {
    if (null != onPress) {
      ReanimatedRexport.runOnJS(tmp)();
    }
  }
  const TapResult = Gesture2.Tap();
  re.__closure = { onPress, runOnJS: width(height[5]).runOnJS };
  re.__workletHash = 3284429654755;
  re.__initData = __initData17;
  const obj21 = { gesture: null, draggableGridItemStyles: null };
  const obj20 = { onPress, runOnJS: width(height[5]).runOnJS };
  const Gesture3 = width(height[9]).Gesture;
  obj21.gesture = Gesture3.Race(onEndResult, TapResult.onStart(re));
  const onStartResult = TapResult.onStart(re);
  function ce() {
    const obj = { transform: null };
    const obj2 = { translateX: null };
    value = sharedValue1.get();
    value4 = derivedValue3.get();
    obj2.translateX = value + (value4 - derivedValue1.get()) / 2;
    const items = [obj2, , ];
    const obj3 = { translateY: null };
    const value5 = sharedValue3.get();
    const value6 = derivedValue4.get();
    obj3.translateY = value5 + (value6 - derivedValue2.get()) / 2;
    items[1] = obj3;
    items[2] = { scale: derivedValue.get() };
    obj.transform = items;
    return obj;
  }
  ce.__closure = { xPosition: sharedValue1, scaledWidthDv: derivedValue3, widthDv: derivedValue1, yPosition: sharedValue3, scaledHeightDv: derivedValue4, heightDv: derivedValue2, pipScale: derivedValue };
  ce.__workletHash = 7724883483118;
  ce.__initData = __initData18;
  obj21.draggableGridItemStyles = width(height[5]).useAnimatedStyle(ce);
  return obj21;
});