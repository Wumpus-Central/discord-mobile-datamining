// === Module 9626: useDraggablePip ===

// Module 9626 (useDraggablePip)
import native from "native" /* 1177 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4376 */;
import timing from "timing" /* 4640 */;
import spring from "spring" /* 5058 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 9627 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const useChannelCallStore = fn(9599).useChannelCallStore;
const Constants = fn(9605);
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
let closure_15 = { code: "function useDraggablePipTsx9(result,previous){const{cheapWorkletArrayShallowEqual,clamp,xPosition,xDestination}=this.__closure;if(cheapWorkletArrayShallowEqual(result,previous!==null&&previous!==void 0?previous:undefined))return;const[containerWidthNew,xPositionNew]=result;const[containerWidthOld]=previous!==null&&previous!==void 0?previous:[0,0];if(previous!=null&&containerWidthNew!==containerWidthOld){const newX=clamp(xPositionNew*(containerWidthNew/containerWidthOld),0,containerWidthNew);xPosition.set(newX);xDestination.set(newX);}}" };
let closure_16 = { code: "function useDraggablePipTsx10(){const{containerHeight,scaledHeightDv,yPosition}=this.__closure;return[containerHeight-scaledHeightDv.get(),yPosition.get()];}" };
let closure_17 = { code: "function useDraggablePipTsx11(result,previous){const{cheapWorkletArrayShallowEqual,clamp,yPosition,yDestination}=this.__closure;if(cheapWorkletArrayShallowEqual(result,previous!==null&&previous!==void 0?previous:undefined))return;const[containerHeightNew,yPositionNew]=result;const[containerHeightOld]=previous!==null&&previous!==void 0?previous:[0,0];if(previous!=null&&containerHeightNew!==containerHeightOld){const newY=clamp(yPositionNew*(containerHeightNew/containerHeightOld),0,containerHeightNew);yPosition.set(newY);yDestination.set(newY);}}" };
let closure_18 = { code: "function useDraggablePipTsx12(event){const{xPosition,containerWidthDv,scaledWidthDv,clamp,yPosition,containerHeightDv,scaledHeightDv,snapToCorners,withSpring,spring,xDestination,yDestination}=this.__closure;const toss=0.0875;const xToss=xPosition.get()+toss*event.velocityX;const xMin=0;const xMax=containerWidthDv.get()-scaledWidthDv.get();const targetX=clamp(xToss,xMin,xMax);const yToss=yPosition.get()+toss*event.velocityY;const yMin=0;const yMax=containerHeightDv.get()-scaledHeightDv.get();const targetY=clamp(yToss,yMin,yMax);const top=targetY;const bottom=containerHeightDv.get()-scaledHeightDv.get()-targetY;const left=targetX;const right=containerWidthDv.get()-scaledWidthDv.get()-targetX;const minDistance=Math.min(top,bottom,left,right);let snapX=targetX;let snapY=targetY;switch(minDistance){case top:snapY=yMin;if(snapToCorners){snapX=left<right?xMin:xMax;}break;case bottom:snapY=yMax;if(snapToCorners){snapX=left<right?xMin:xMax;}break;case left:snapX=xMin;if(snapToCorners){snapY=top<bottom?yMin:yMax;}break;case right:snapX=xMax;if(snapToCorners){snapY=top<bottom?yMin:yMax;}break;}xPosition.set(withSpring(snapX,{...spring,velocity:event.velocityX}));xDestination.set(snapX);yPosition.set(withSpring(snapY,{...spring,velocity:event.velocityY}));yDestination.set(snapY);}" };
let closure_19 = { code: "function useDraggablePipTsx13(event){const{xPosition,xDestination,yPosition,yDestination,trackedVoiceControlsToggleMovedForGestureSv,onMoved,runOnJS}=this.__closure;xPosition.set(xDestination.get()+event.translationX);yPosition.set(yDestination.get()+event.translationY);if(!trackedVoiceControlsToggleMovedForGestureSv.get()){if(onMoved!=null){runOnJS(onMoved)();}trackedVoiceControlsToggleMovedForGestureSv.set(true);}}" };
const __initData2 = { code: "function useDraggablePipTsx14(){const{onPress,runOnJS}=this.__closure;if(onPress!=null){runOnJS(onPress)();}}" };
const __initData3 = { code: "function useDraggablePipTsx15(){const{xPosition,scaledWidthDv,widthDv,yPosition,scaledHeightDv,heightDv,pipScale}=this.__closure;return{transform:[{translateX:xPosition.get()+(scaledWidthDv.get()-widthDv.get())/2},{translateY:yPosition.get()+(scaledHeightDv.get()-heightDv.get())/2},{scale:pipScale.get()}]};}" };
function clamp(arg0, arg1, arg2) {
  return Math.min(Math.max(arg0, arg1), arg2);
}
clamp.__closure = {};
clamp.__workletHash = 1988116204206;
clamp.__initData = { code: "function clamp_useDraggablePipTsx16(value,min,max){return Math.min(Math.max(value,min),max);}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/useDraggablePip.tsx");

export const useDraggablePip = function useDraggablePip(size1) {
  const width = size1.width;
  const height = size1.height;
  const containerWidth = size1.containerWidth;
  const containerHeight = size1.containerHeight;
  const onPress = size1.onPress;
  const onMoved = size1.onMoved;
  const snapToCorners = size1.snapToCorners;
  let derivedValue;
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
  __initData = tmp;
  class X {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_1;
      obj = closure_0(closure_1[4]);
      num = 1;
      if (closure_7) {
        num = PIP_FOCUS_SCALE;
      }
      obj1 = { easing: tmp(tmp2[5]).STANDARD_EASING, duration: 250 };
      return obj.withTiming(num, obj1);
    }
  }
  let obj = width(height[3]);
  X.__closure = { withTiming: width(height[4]).withTiming, pipFocus: tmp, PIP_FOCUS_SCALE: onPress, STANDARD_EASING: width(height[5]).STANDARD_EASING };
  X.__workletHash = 7848271415351;
  X.__initData = __initData;
  derivedValue = obj.useDerivedValue(X);
  let obj2 = { withTiming: width(height[4]).withTiming, pipFocus: tmp, PIP_FOCUS_SCALE: onPress, STANDARD_EASING: width(height[5]).STANDARD_EASING };
  class Y {
    constructor() {
      return width;
    }
  }
  Y.__closure = { width };
  Y.__workletHash = 14810909441301;
  Y.__initData = derivedValue;
  derivedValue1 = width(height[3]).useDerivedValue(Y);
  let obj3 = width(height[3]);
  class N {
    constructor() {
      return height;
    }
  }
  N.__closure = { height };
  N.__workletHash = 15343935194036;
  N.__initData = derivedValue1;
  derivedValue2 = width(height[3]).useDerivedValue(N);
  const obj4 = width(height[3]);
  class V {
    constructor() {
      return closure_8.get() * width;
    }
  }
  V.__closure = { pipScale: derivedValue, width };
  V.__workletHash = 3468337829868;
  V.__initData = derivedValue2;
  derivedValue3 = width(height[3]).useDerivedValue(V);
  const obj5 = width(height[3]);
  class F {
    constructor() {
      return closure_8.get() * height;
    }
  }
  F.__closure = { pipScale: derivedValue, height };
  F.__workletHash = 7163944260205;
  F.__initData = derivedValue3;
  derivedValue4 = width(height[3]).useDerivedValue(F);
  const obj6 = width(height[3]);
  class G {
    constructor() {
      return containerWidth;
    }
  }
  G.__closure = { containerWidth };
  G.__workletHash = 13449836478609;
  G.__initData = derivedValue4;
  derivedValue5 = width(height[3]).useDerivedValue(G);
  let obj7 = width(height[3]);
  class I {
    constructor() {
      return containerHeight;
    }
  }
  I.__closure = { containerHeight };
  I.__workletHash = 4105281399152;
  I.__initData = derivedValue5;
  derivedValue6 = width(height[3]).useDerivedValue(I);
  let obj8 = width(height[3]);
  sharedValue = width(height[3]).useSharedValue(0);
  let obj9 = width(height[3]);
  sharedValue1 = width(height[3]).useSharedValue(sharedValue.get());
  const obj11 = width(height[3]);
  sharedValue2 = width(height[3]).useSharedValue(0);
  const obj12 = width(height[3]);
  sharedValue3 = width(height[3]).useSharedValue(sharedValue2.get());
  const obj14 = width(height[3]);
  sharedValue4 = width(height[3]).useSharedValue(false);
  const obj15 = width(height[3]);
  class J {
    constructor() {
      items = [, ];
      items[0] = containerWidth - closure_11.get();
      items[1] = closure_16.get();
      return items;
    }
  }
  J.__closure = { containerWidth, scaledWidthDv: derivedValue3, xPosition: sharedValue1 };
  J.__workletHash = 2741340788440;
  J.__initData = derivedValue6;
  const fn = function q(arg0, arg1) {
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
            const result = sharedValue1.set(bound);
            const result1 = sharedValue.set(bound);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
    }
    obj = cheapWorkletShallowEqual;
    tmp = arg1;
  };
  const obj16 = width(height[3]);
  fn.__closure = { cheapWorkletArrayShallowEqual: width(height[6]).cheapWorkletArrayShallowEqual, clamp, xPosition: sharedValue1, xDestination: sharedValue };
  fn.__workletHash = 15748808822770;
  fn.__initData = sharedValue;
  const animatedReaction = obj16.useAnimatedReaction(J, fn);
  let obj10 = { cheapWorkletArrayShallowEqual: width(height[6]).cheapWorkletArrayShallowEqual, clamp, xPosition: sharedValue1, xDestination: sharedValue };
  class U {
    constructor() {
      items = [, ];
      items[0] = containerHeight - closure_12.get();
      items[1] = closure_18.get();
      return items;
    }
  }
  U.__closure = { containerHeight, scaledHeightDv: derivedValue4, yPosition: sharedValue3 };
  U.__workletHash = 11475249153313;
  U.__initData = sharedValue1;
  class R {
    constructor(arg0, arg1) {
      obj = closure_0(closure_1[6]);
      tmp = arg1;
      if (!obj.cheapWorkletArrayShallowEqual(size1, tmp)) {
        num = 2;
        tmp2 = closure_2;
        tmp3 = closure_2(size1, 2);
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
  const obj18 = width(height[3]);
  R.__closure = { cheapWorkletArrayShallowEqual: width(height[6]).cheapWorkletArrayShallowEqual, clamp, yPosition: sharedValue3, yDestination: sharedValue2 };
  R.__workletHash = 7685377389843;
  R.__initData = sharedValue2;
  const animatedReaction1 = obj18.useAnimatedReaction(U, R);
  const Gesture = width(height[7]).Gesture;
  const obj13 = { cheapWorkletArrayShallowEqual: width(height[6]).cheapWorkletArrayShallowEqual, clamp, yPosition: sharedValue3, yDestination: sharedValue2 };
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
  ae.__closure = { xPosition: sharedValue1, xDestination: sharedValue, yPosition: sharedValue3, yDestination: sharedValue2, trackedVoiceControlsToggleMovedForGestureSv: sharedValue4, onMoved, runOnJS: width(height[3]).runOnJS };
  ae.__workletHash = 14964390506971;
  ae.__initData = sharedValue4;
  const obj17 = { xPosition: sharedValue1, xDestination: sharedValue, yPosition: sharedValue3, yDestination: sharedValue2, trackedVoiceControlsToggleMovedForGestureSv: sharedValue4, onMoved, runOnJS: width(height[3]).runOnJS };
  function se(velocityX) {
    const sum = sharedValue1.get() + 0.0875 * velocityX.velocityX;
    value = derivedValue5.get();
    const diff = value - derivedValue3.get();
    if (typeof clamp === "function") {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.min(Math.max(sum, 0), diff);
      const sum1 = sharedValue3.get() + 0.0875 * velocityX.velocityY;
      const value4 = derivedValue6.get();
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
  se.__closure = { xPosition: sharedValue1, containerWidthDv: derivedValue5, scaledWidthDv: derivedValue3, clamp, yPosition: sharedValue3, containerHeightDv: derivedValue6, scaledHeightDv: derivedValue4, snapToCorners, withSpring: width(height[8]).withSpring, spring: snapToCorners, xDestination: sharedValue, yDestination: sharedValue2 };
  se.__workletHash = 690760681755;
  se.__initData = sharedValue3;
  const obj19 = { xPosition: sharedValue1, containerWidthDv: derivedValue5, scaledWidthDv: derivedValue3, clamp, yPosition: sharedValue3, containerHeightDv: derivedValue6, scaledHeightDv: derivedValue4, snapToCorners, withSpring: width(height[8]).withSpring, spring: snapToCorners, xDestination: sharedValue, yDestination: sharedValue2 };
  const Gesture2 = width(height[7]).Gesture;
  const onEndResult = onUpdateResult.onEnd(se);
  function re() {
    if (null != onPress) {
      ReanimatedRexport.runOnJS(tmp)();
    }
  }
  const TapResult = Gesture2.Tap();
  re.__closure = { onPress, runOnJS: width(height[3]).runOnJS };
  re.__workletHash = 4692146362189;
  re.__initData = __initData2;
  const obj21 = { gesture: null, draggableGridItemStyles: null };
  const obj20 = { onPress, runOnJS: width(height[3]).runOnJS };
  const Gesture3 = width(height[7]).Gesture;
  obj21.gesture = Gesture3.Race(onEndResult, TapResult.onStart(re));
  const onStartResult = TapResult.onStart(re);
  function ce() {
    const obj = { transform: null };
    const obj2 = { translateX: null };
    value = sharedValue1.get();
    const value4 = derivedValue3.get();
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
  ce.__workletHash = 12534173786665;
  ce.__initData = __initData3;
  obj21.draggableGridItemStyles = width(height[3]).useAnimatedStyle(ce);
  return obj21;
};