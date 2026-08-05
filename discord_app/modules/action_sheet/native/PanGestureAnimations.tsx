// discord_app/modules/action_sheet/native/PanGestureAnimations.tsx
import { CONFIG_NEVER_ANIMATE } from "../../../design/animation/reanimated/spring/spring.tsx";
import { CONFIG_NEVER_ANIMATE_TIMING } from "../../../design/animation/reanimated/timing/timing.tsx";
let obj = { damping: 30, mass: 1, stiffness: 250, overshootClamping: true, restSpeedThreshold: 0.001, restDisplacementThreshold: 0.001 };
obj = { duration: 500, easing: require("Button").STANDARD_EASING };
let closure_4 = { code: "function getSortedByMeasure_PanGestureAnimationsTsx2(array,measure){const sorted=new Array(...array).sort(function(left,right){const al=Math.abs(left-measure);const ar=Math.abs(right-measure);return al<ar?-1:al>ar?1:0;});return sorted;}" };
function getNearestValue(arg0, arg1) {
  let closure_0 = arg1;
  let num = arg2;
  if (arg2 === undefined) {
    num = 0;
  }
  let num2;
  num2 = -1;
  if (num >= 0) {
    let num3 = 0;
    if (num > 0) {
      num3 = 1;
    }
    num2 = num3;
  }
  function getSortedByMeasure(arg0, arg1) {
    let closure_0 = arg1;
    return Array(...arg0).sort((arg0, arg1) => {
      const absolute = Math.abs(arg0 - closure_0);
      const absolute1 = Math.abs(arg1 - closure_0);
      let num = -1;
      if (absolute >= absolute1) {
        let num2 = 0;
        if (absolute > absolute1) {
          num2 = 1;
        }
        num = num2;
      }
      return num;
    });
  }
  getSortedByMeasure.__closure = {};
  getSortedByMeasure.__workletHash = 9192847351523;
  getSortedByMeasure.__initData = closure_4;
  if (0 === arg0.length) {
    return arg1;
  } else {
    closure_0 = arg1;
    const _Array = Array;
    const items = [];
    HermesBuiltin.arraySpread(arg0, 0);
    const _Array2 = Array;
    const sorted = HermesBuiltin.apply(items).sort((arg0, arg1) => {
      const absolute = Math.abs(arg0 - closure_0);
      const absolute1 = Math.abs(arg1 - closure_0);
      let num = -1;
      if (absolute >= absolute1) {
        let num2 = 0;
        if (absolute > absolute1) {
          num2 = 1;
        }
        num = num2;
      }
      return num;
    });
    if (0 !== num2) {
      let found = sorted.find((arg0) => {
        if (num2 < 0) {
          let tmp2 = closure_0 > arg0;
        } else {
          tmp2 = closure_0 < arg0;
        }
        return tmp2;
      });
      if (found == null) {
        found = sorted[0];
      }
      let first = found;
    } else {
      first = sorted[0];
    }
    return first;
  }
}
getNearestValue.__closure = {};
getNearestValue.__workletHash = 4186929947751;
getNearestValue.__initData = { code: "function getNearestValue_PanGestureAnimationsTsx1(array,measure,velocity=0){const unitVector=velocity<0?-1:velocity>0?1:0;function getSortedByMeasure(array,measure){'worklet';const sorted=new Array(...array).sort(function(left,right){const al=Math.abs(left-measure);const ar=Math.abs(right-measure);return al<ar?-1:al>ar?1:0;});return sorted;}if(array.length===0){return measure;}const sorted=getSortedByMeasure(array,measure);if(unitVector!==0){var _sorted$find;return(_sorted$find=sorted.find(function(value){const result=unitVector<0?measure>value:measure<value;return result;}))!==null&&_sorted$find!==void 0?_sorted$find:sorted[0];}return sorted[0];}" };
function withPanGestureSpring(value, velocity) {
  let tmp = arg2;
  let obj = CONFIG_NEVER_ANIMATE;
  if (arg2 == null) {
    tmp = obj;
  }
  obj = {};
  const merged = Object.assign(tmp);
  obj.velocity = velocity;
  return obj.withSpring(value, obj);
}
obj = { SPRING_CONFIG: obj, withSpring: require("CONFIG_NEVER_ANIMATE").withSpring };
withPanGestureSpring.__closure = obj;
withPanGestureSpring.__workletHash = 12189464558811;
withPanGestureSpring.__initData = { code: "function withPanGestureSpring_PanGestureAnimationsTsx3(destination,velocity,config){const{SPRING_CONFIG,withSpring}=this.__closure;const springConfig=config!==null&&config!==void 0?config:SPRING_CONFIG;return withSpring(destination,{...springConfig,velocity:velocity});}" };
function withPanGestureTiming(value, timingStandard) {
  let tmp = timingStandard;
  const obj = CONFIG_NEVER_ANIMATE_TIMING;
  if (timingStandard == null) {
    tmp = obj;
  }
  return obj.withTiming(value, tmp);
}
withPanGestureTiming.__closure = { TIMING_CONFIG: obj, withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming };
withPanGestureTiming.__workletHash = 7636074551896;
withPanGestureTiming.__initData = { code: "function withPanGestureTiming_PanGestureAnimationsTsx4(destination,config){const{TIMING_CONFIG,withTiming}=this.__closure;const timingConfig=config!==null&&config!==void 0?config:TIMING_CONFIG;return withTiming(destination,timingConfig);}" };
let closure_8 = { code: "function PanGestureAnimationsTsx5(){const{isGestureInProgress}=this.__closure;if(isGestureInProgress!=null){isGestureInProgress.set(false);}}" };
let closure_9 = { code: "function PanGestureAnimationsTsx6(event,success){const{start,translate,snapPositions,velocity,swipeVelocityThreshold,getNearestValue,withPanGestureSpring,withPanGestureTiming,onEnd}=this.__closure;start.set(translate.get());if(snapPositions!=null){var _onEnd;const swipeVelocity=Math.abs(velocity.get())>swipeVelocityThreshold?velocity.get():0;const snapPoint=getNearestValue(snapPositions.get(),translate.get(),swipeVelocity);if(swipeVelocity!==0){translate.set(withPanGestureSpring(snapPoint,velocity.get()));}else{translate.set(withPanGestureTiming(snapPoint));}(_onEnd=onEnd)===null||_onEnd===void 0||_onEnd(event,{success:success,destination:snapPoint,startPosition:start.get()});}}" };
let closure_10 = { code: "function PanGestureAnimationsTsx7(event){const{start,vertical,lowerBounds,upperBounds,velocity,translate,onChange}=this.__closure;var _onChange;const{velocityY:velocityY,translationY:translationY,velocityX:velocityX,translationX:translationX}=event;let next=start.get()+(vertical?translationY:translationX);if(lowerBounds!=null&&next<lowerBounds){next=lowerBounds;}else if(upperBounds!=null&&next>upperBounds){next=upperBounds;}velocity.set(vertical?velocityY:velocityX);translate.set(next);(_onChange=onChange)===null||_onChange===void 0||_onChange(event,{destination:translate.get(),startPosition:start.get()});}" };
let closure_11 = { code: "function PanGestureAnimationsTsx8(event){const{start,translate,velocity,isGestureInProgress,onStart}=this.__closure;var _onStart;start.set(translate.get());velocity.set(0);if(isGestureInProgress!=null){isGestureInProgress.set(true);}(_onStart=onStart)===null||_onStart===void 0||_onStart(event,{destination:start.get(),startPosition:start.get()});}" };
const obj1 = { TIMING_CONFIG: obj, withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming };
let result = require("CONFIG_NEVER_ANIMATE_TIMING").fileFinishedImporting("modules/action_sheet/native/PanGestureAnimations.tsx");

export default function usePanGesture(lowerBounds) {
  lowerBounds = lowerBounds.lowerBounds;
  const upperBounds = lowerBounds.upperBounds;
  const snapPositions = lowerBounds.snapPositions;
  let num = lowerBounds.swipeVelocityThreshold;
  if (num === undefined) {
    num = 300;
  }
  const translate = lowerBounds.translate;
  const onStart = lowerBounds.onStart;
  const onChange = lowerBounds.onChange;
  const onEnd = lowerBounds.onEnd;
  let flag = lowerBounds.vertical;
  if (flag === undefined) {
    flag = true;
  }
  const isGestureInProgress = lowerBounds.isGestureInProgress;
  let sharedValue;
  let sharedValue1;
  let obj = lowerBounds(upperBounds[3]);
  sharedValue = obj.useSharedValue(0);
  sharedValue1 = lowerBounds(upperBounds[3]).useSharedValue(0);
  const Gesture = lowerBounds(upperBounds[4]).Gesture;
  const obj2 = lowerBounds(upperBounds[3]);
  class N {
    constructor(arg0) {
      obj = c10;
      result = c10.set(translate.get());
      result1 = c11.set(0);
      obj2 = isGestureInProgress;
      if (null != isGestureInProgress) {
        flag = true;
        result2 = obj2.set(true);
      }
      if (onStart != null) {
        tmp5 = lowerBounds;
        obj = { destination: null, startPosition: null };
        obj[0] = obj.get();
        obj[1] = obj.get();
        tmp4Result = tmp4(lowerBounds, obj);
      }
      return;
    }
  }
  N.__closure = { start: sharedValue, translate, velocity: sharedValue1, isGestureInProgress, onStart };
  N.__workletHash = 7008504704609;
  N.__initData = sharedValue1;
  const PanResult = Gesture.Pan();
  class C {
    constructor(arg0) {
      ({ velocityX, translationX } = lowerBounds);
      obj = c10;
      ({ velocityY, translationY } = lowerBounds);
      value = c10.get();
      tmp2 = c8;
      if (c8) {
        translationX = translationY;
      }
      sum = value + translationX;
      tmp4 = lowerBounds;
      if (null == lowerBounds) {
        tmp5 = upperBounds;
        tmp6 = null != upperBounds && sum > tmp5;
        tmp4 = sum;
        if (tmp6) {
          tmp4 = tmp5;
        }
      }
      tmp7 = c11;
      if (tmp2) {
        velocityX = velocityY;
      }
      result = c11.set(velocityX);
      obj2 = translate;
      result1 = translate.set(tmp4);
      if (onChange != null) {
        obj = { destination: null, startPosition: null };
        obj[0] = obj2.get();
        obj[1] = obj.get();
        tmp10Result = tmp10(lowerBounds, obj);
      }
      return;
    }
  }
  C.__closure = { start: sharedValue, vertical: flag, lowerBounds, upperBounds, velocity: sharedValue1, translate, onChange };
  C.__workletHash = 15962975179371;
  C.__initData = sharedValue;
  const onStartResult = Gesture.Pan().onStart(N);
  class T {
    constructor(arg0, arg1) {
      obj = c10;
      obj2 = translate;
      result = c10.set(translate.get());
      obj3 = snapPositions;
      if (null != snapPositions) {
        tmp23 = globalThis;
        _Math = Math;
        obj8 = c11;
        tmp24 = c3;
        num2 = 0;
        num = 0;
        if (Math.abs(c11.get()) > c3) {
          num = obj8.get();
        }
        tmp2 = onStart;
        value = obj3.get();
        tmp4 = onStart(value, obj2.get(), num);
        if (0 !== num) {
          tmp10 = onChange;
          value1 = obj8.get();
          if (typeof onChange !== "function") {
            str2 = "Trying to call a non-function";
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          tmp12 = lowerBounds;
          tmp13 = upperBounds;
          obj5 = lowerBounds(upperBounds[1]);
          tmp14 = snapPositions;
          obj = {};
          tmp15 = obj;
          tmp16 = snapPositions;
          merged = Object.assign(snapPositions);
          obj.velocity = value1;
          result1 = obj2.set(obj5.withSpring(tmp4, obj));
        } else {
          tmp5 = onEnd;
          if (typeof onEnd !== "function") {
            str = "Trying to call a non-function";
            throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
          }
          tmp6 = lowerBounds;
          tmp7 = upperBounds;
          obj4 = lowerBounds(upperBounds[2]);
          tmp8 = c3;
          result2 = obj2.set(obj4.withTiming(tmp4, c3));
        }
        if (onEnd != null) {
          tmp20 = lowerBounds;
          tmp21 = arg1;
          obj1 = { success: null, destination: null, startPosition: null };
          obj1[0] = arg1;
          obj1[1] = tmp4;
          obj1[2] = obj.get();
          tmp19Result = tmp19(lowerBounds, obj1);
        }
      }
      return;
    }
  }
  obj = { start: sharedValue, translate, snapPositions, velocity: sharedValue1, swipeVelocityThreshold: num, getNearestValue: onStart, withPanGestureSpring: onChange, withPanGestureTiming: onEnd, onEnd };
  T.__closure = obj;
  T.__workletHash = 15665959414289;
  T.__initData = isGestureInProgress;
  const onChangeResult = Gesture.Pan().onStart(N).onChange(C);
  class S {
    constructor() {
      obj = isGestureInProgress;
      if (null != isGestureInProgress) {
        flag = false;
        result = obj.set(false);
      }
      return;
    }
  }
  S.__closure = { isGestureInProgress };
  S.__workletHash = 11128244755178;
  S.__initData = flag;
  return Gesture.Pan().onStart(N).onChange(C).onEnd(T).onFinalize(S);
};
export const SPRING_CONFIG = obj;
export const TIMING_CONFIG = obj;
export { withPanGestureSpring };
export { withPanGestureTiming };