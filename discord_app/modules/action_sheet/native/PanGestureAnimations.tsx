// === Module 10977: PanGestureAnimations ===

// Module 10977 (PanGestureAnimations)
import native from "native" /* 1200 */;
import timing from "timing" /* 5091 */;
import spring from "spring" /* 5374 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const SPRING_CONFIG = { damping: 30, mass: 1, stiffness: 250, overshootClamping: true, restSpeedThreshold: 0.001, restDisplacementThreshold: 0.001 };
let obj2 = { duration: 500, easing: native.STANDARD_EASING };
const __initData = { code: "function getSortedByMeasure_PanGestureAnimationsTsx2(array,measure){const sorted=new Array(...array).sort(function(left,right){const al=Math.abs(left-measure);const ar=Math.abs(right-measure);return al<ar?-1:al>ar?1:0;});return sorted;}" };
function getNearestValue(value, translate) {
  closure_0 = translate;
  let num = sharedValue1;
  if (sharedValue1 === undefined) {
    num = 0;
  }
  let num2 = -1;
  if (num >= 0) {
    let num3 = 0;
    if (num > 0) {
      num3 = 1;
    }
    num2 = num3;
  }
  function getSortedByMeasure(arg0, arg1) {
    closure_0 = arg1;
    return Array(...arg0).sort((arg0, arg1) => {
      const absolute = Math.abs(arg0 - closure_0);
      const absolute1 = Math.abs(arg1 - closure_0);
      let num = -1;
      if (absolute >= absolute1) {
        num2 = 0;
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
  getSortedByMeasure.__initData = __initData;
  if (0 === value.length) {
    return translate;
  } else {
    closure_0 = translate;
    const _Array = Array;
    const items = [];
    HermesBuiltin.arraySpread(value, 0);
    const _Array2 = Array;
    const sorted = HermesBuiltin.apply(items).sort((arg0, arg1) => {
      const absolute = Math.abs(arg0 - closure_0);
      const absolute1 = Math.abs(arg1 - closure_0);
      let num = -1;
      if (absolute >= absolute1) {
        num2 = 0;
        if (absolute > absolute1) {
          num2 = 1;
        }
        num = num2;
      }
      return num;
    });
    if (0 !== num2) {
      let found = sorted.find((item) => {
        if (num2 < 0) {
          let tmp2 = closure_0 > item;
        } else {
          tmp2 = closure_0 < item;
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
function withPanGestureSpring(value, velocity, arg2) {
  let tmp = arg2;
  const obj = spring;
  if (arg2 == null) {
    tmp = obj;
  }
  obj2 = {};
  const merged = Object.assign(tmp);
  obj2.velocity = velocity;
  return obj.withSpring(value, obj2);
}
withPanGestureSpring.__closure = { SPRING_CONFIG, withSpring: spring.withSpring };
withPanGestureSpring.__workletHash = 12189464558811;
withPanGestureSpring.__initData = { code: "function withPanGestureSpring_PanGestureAnimationsTsx3(destination,velocity,config){const{SPRING_CONFIG,withSpring}=this.__closure;const springConfig=config!==null&&config!==void 0?config:SPRING_CONFIG;return withSpring(destination,{...springConfig,velocity:velocity});}" };
function withPanGestureTiming(value, timingStandard) {
  let tmp = timingStandard;
  if (timingStandard == null) {
    tmp = obj2;
  }
  return timing.withTiming(value, tmp);
}
let obj3 = { SPRING_CONFIG, withSpring: spring.withSpring };
withPanGestureTiming.__closure = { TIMING_CONFIG: obj2, withTiming: timing.withTiming };
withPanGestureTiming.__workletHash = 7636074551896;
withPanGestureTiming.__initData = { code: "function withPanGestureTiming_PanGestureAnimationsTsx4(destination,config){const{TIMING_CONFIG,withTiming}=this.__closure;const timingConfig=config!==null&&config!==void 0?config:TIMING_CONFIG;return withTiming(destination,timingConfig);}" };
let closure_8 = { code: "function PanGestureAnimationsTsx5(){const{isGestureInProgress}=this.__closure;if(isGestureInProgress!=null){isGestureInProgress.set(false);}}" };
let __initData2 = { code: "function PanGestureAnimationsTsx6(event_1,success){const{start,translate,snapPositions,velocity,swipeVelocityThreshold,getNearestValue,withPanGestureSpring,withPanGestureTiming,onEnd}=this.__closure;start.set(translate.get());if(snapPositions!=null){var _onEnd;const swipeVelocity=Math.abs(velocity.get())>swipeVelocityThreshold?velocity.get():0;const snapPoint=getNearestValue(snapPositions.get(),translate.get(),swipeVelocity);if(swipeVelocity!==0){translate.set(withPanGestureSpring(snapPoint,velocity.get()));}else{translate.set(withPanGestureTiming(snapPoint));}(_onEnd=onEnd)===null||_onEnd===void 0||_onEnd(event_1,{success:success,destination:snapPoint,startPosition:start.get()});}}" };
let closure_10 = { code: "function PanGestureAnimationsTsx7(event_0){const{start,vertical,lowerBounds,upperBounds,velocity,translate,onChange}=this.__closure;var _onChange;const{velocityY:velocityY,translationY:translationY,velocityX:velocityX,translationX:translationX}=event_0;let next=start.get()+(vertical?translationY:translationX);if(lowerBounds!=null&&next<lowerBounds){next=lowerBounds;}else{if(upperBounds!=null&&next>upperBounds){next=upperBounds;}}velocity.set(vertical?velocityY:velocityX);translate.set(next);(_onChange=onChange)===null||_onChange===void 0||_onChange(event_0,{destination:translate.get(),startPosition:start.get()});}" };
let closure_11 = { code: "function PanGestureAnimationsTsx8(event){const{start,translate,velocity,isGestureInProgress,onStart}=this.__closure;var _onStart;start.set(translate.get());velocity.set(0);if(isGestureInProgress!=null){isGestureInProgress.set(true);}(_onStart=onStart)===null||_onStart===void 0||_onStart(event,{destination:start.get(),startPosition:start.get()});}" };
const __initData3 = { code: "function PanGestureAnimationsTsx9(){const{isGestureInProgress}=this.__closure;if(isGestureInProgress!=null){isGestureInProgress.set(false);}}" };
const __initData4 = { code: "function PanGestureAnimationsTsx10(event_1,success){const{start,translate,snapPositions,velocity,swipeVelocityThreshold,getNearestValue,withPanGestureSpring,withPanGestureTiming,onEnd}=this.__closure;start.set(translate.get());if(snapPositions!=null){var _onEnd;const swipeVelocity=Math.abs(velocity.get())>swipeVelocityThreshold?velocity.get():0;const snapPoint=getNearestValue(snapPositions.get(),translate.get(),swipeVelocity);if(swipeVelocity!==0){translate.set(withPanGestureSpring(snapPoint,velocity.get()));}else{translate.set(withPanGestureTiming(snapPoint));}(_onEnd=onEnd)===null||_onEnd===void 0||_onEnd(event_1,{success:success,destination:snapPoint,startPosition:start.get()});}}" };
const __initData5 = { code: "function PanGestureAnimationsTsx11(event_0){const{start,vertical,lowerBounds,upperBounds,velocity,translate,onChange}=this.__closure;var _onChange;const{velocityY:velocityY,translationY:translationY,velocityX:velocityX,translationX:translationX}=event_0;let next=start.get()+(vertical?translationY:translationX);if(lowerBounds!=null&&next<lowerBounds){next=lowerBounds;}else if(upperBounds!=null&&next>upperBounds){next=upperBounds;}velocity.set(vertical?velocityY:velocityX);translate.set(next);(_onChange=onChange)===null||_onChange===void 0||_onChange(event_0,{destination:translate.get(),startPosition:start.get()});}" };
const __initData6 = { code: "function PanGestureAnimationsTsx12(event){const{start,translate,velocity,isGestureInProgress,onStart}=this.__closure;var _onStart;start.set(translate.get());velocity.set(0);if(isGestureInProgress!=null){isGestureInProgress.set(true);}(_onStart=onStart)===null||_onStart===void 0||_onStart(event,{destination:start.get(),startPosition:start.get()});}" };
let obj4 = { TIMING_CONFIG: obj2, withTiming: timing.withTiming };
let result = size.fileFinishedImporting("modules/action_sheet/native/PanGestureAnimations.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function usePanGesture(lowerBounds) {
  const cResult = lowerBounds(upperBounds[4]).c(2);
  lowerBounds = lowerBounds.lowerBounds;
  upperBounds = lowerBounds.upperBounds;
  const snapPositions = lowerBounds.snapPositions;
  ({ swipeVelocityThreshold, translate } = lowerBounds);
  const onStart = lowerBounds.onStart;
  const onChange = lowerBounds.onChange;
  const onEnd = lowerBounds.onEnd;
  ({ vertical, isGestureInProgress } = lowerBounds);
  let num = 300;
  if (undefined !== swipeVelocityThreshold) {
    num = swipeVelocityThreshold;
  }
  __initData2 = tmp4;
  const obj = lowerBounds(upperBounds[4]);
  const sharedValue = lowerBounds(upperBounds[5]).useSharedValue(0);
  const tmpResult = lowerBounds(upperBounds[5]);
  const sharedValue1 = lowerBounds(upperBounds[5]).useSharedValue(0);
  if (cResult[0] !== isGestureInProgress) {
    class PanGestureAnimationsTsx5 {
      constructor() {
        obj = isGestureInProgress;
        if (null != isGestureInProgress) {
          flag = false;
          result = obj.set(false);
        }
        return;
      }
    }
    obj2 = { isGestureInProgress };
    PanGestureAnimationsTsx5.__closure = obj2;
    PanGestureAnimationsTsx5.__workletHash = 11128244755178;
    PanGestureAnimationsTsx5.__initData = num;
    cResult[0] = isGestureInProgress;
    cResult[1] = PanGestureAnimationsTsx5;
  } else {
    class PanGestureAnimationsTsx5 {
      constructor() {
        obj = isGestureInProgress;
        if (null != isGestureInProgress) {
          flag = false;
          result = obj.set(false);
        }
        return;
      }
    }
  }
  const Gesture = tmp(tmp2[6]).Gesture;
  const tmpResult2 = lowerBounds(upperBounds[5]);
  const fn = function u(arg0) {
    const result = sharedValue.set(translate.get());
    const result1 = sharedValue1.set(0);
    if (null != isGestureInProgress) {
      const result2 = isGestureInProgress.set(true);
    }
    if (onStart != null) {
      const obj3 = { destination: sharedValue.get(), startPosition: sharedValue.get() };
      tmp4(arg0, obj3);
    }
  };
  fn.__closure = { start: sharedValue, translate, velocity: sharedValue1, isGestureInProgress, onStart };
  fn.__workletHash = 7008504704609;
  fn.__initData = sharedValue1;
  const PanResult = Gesture.Pan();
  const fn2 = function o(arg0) {
    ({ velocityX, translationX } = arg0);
    ({ velocityY, translationY } = arg0);
    value = sharedValue.get();
    if (closure_9) {
      translationX = translationY;
    }
    const sum = value + translationX;
    let tmp4 = lowerBounds;
    if (null == lowerBounds) {
      tmp4 = sum;
      if (tmp6) {
        tmp4 = upperBounds;
      }
      tmp6 = null != upperBounds && sum > upperBounds;
    }
    if (closure_9) {
      velocityX = velocityY;
    }
    const result = sharedValue1.set(velocityX);
    const result1 = translate.set(tmp4);
    if (onChange != null) {
      const obj3 = { destination: translate.get(), startPosition: sharedValue.get() };
      tmp10(arg0, obj3);
    }
  };
  fn2.__closure = { start: sharedValue, vertical: undefined === vertical || vertical, lowerBounds, upperBounds, velocity: sharedValue1, translate, onChange };
  fn2.__workletHash = 11932761286978;
  fn2.__initData = sharedValue;
  const onStartResult = Gesture.Pan().onStart(fn);
  const fn3 = function s(arg0, success) {
    const result = sharedValue.set(translate.get());
    if (null != snapPositions) {
      const _Math = Math;
      num = 0;
      if (Math.abs(sharedValue1.get()) > num) {
        num = sharedValue1.get();
      }
      value = snapPositions.get();
      const tmp4 = getNearestValue(value, translate.get(), num);
      if (0 !== num) {
        if (typeof withPanGestureSpring === "function") {
          const obj6 = {};
          const merged = Object.assign(sharedValue);
          obj6.velocity = tmp12;
          const result1 = translate.set(spring.withSpring(tmp4, obj6));
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if (typeof withPanGestureTiming === "function") {
        tmp5(timing.withTiming(tmp4, translate));
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      if (onEnd != null) {
        const obj7 = { success, destination: tmp4, startPosition: sharedValue.get() };
        tmp20(arg0, obj7);
      }
    }
  };
  fn3.__closure = { start: sharedValue, translate, snapPositions, velocity: sharedValue1, swipeVelocityThreshold: num, getNearestValue: onChange, withPanGestureSpring: onEnd, withPanGestureTiming: isGestureInProgress, onEnd };
  fn3.__workletHash = 14179326673233;
  fn3.__initData = __initData2;
  let obj3 = { start: sharedValue, translate, snapPositions, velocity: sharedValue1, swipeVelocityThreshold: num, getNearestValue: onChange, withPanGestureSpring: onEnd, withPanGestureTiming: isGestureInProgress, onEnd };
  const onChangeResult = Gesture.Pan().onStart(fn).onChange(fn2);
  return Gesture.Pan().onStart(fn).onChange(fn2).onEnd(fn3).onFinalize(PanGestureAnimationsTsx5);
}) : (function usePanGesture(lowerBounds) {
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
  const sharedValue = lowerBounds(upperBounds[5]).useSharedValue(0);
  const obj = lowerBounds(upperBounds[5]);
  const sharedValue1 = lowerBounds(upperBounds[5]).useSharedValue(0);
  const Gesture = lowerBounds(upperBounds[6]).Gesture;
  obj2 = lowerBounds(upperBounds[5]);
  const fn = function x(arg0) {
    const result = sharedValue.set(translate.get());
    const result1 = sharedValue1.set(0);
    if (null != isGestureInProgress) {
      const result2 = isGestureInProgress.set(true);
    }
    if (onStart != null) {
      const obj3 = { destination: sharedValue.get(), startPosition: sharedValue.get() };
      tmp4(arg0, obj3);
    }
  };
  fn.__closure = { start: sharedValue, translate, velocity: sharedValue1, isGestureInProgress, onStart };
  fn.__workletHash = 3799174323258;
  fn.__initData = __initData6;
  const PanResult = Gesture.Pan();
  class C {
    constructor(arg0) {
      ({ velocityX, translationX } = lowerBounds);
      obj = closure_10;
      ({ velocityY, translationY } = lowerBounds);
      value = closure_10.get();
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
      tmp7 = closure_11;
      if (tmp2) {
        velocityX = velocityY;
      }
      result = closure_11.set(velocityX);
      obj2 = translate;
      result1 = translate.set(tmp4);
      if (onChange != null) {
        obj1 = { destination: null, startPosition: null };
        obj1.destination = obj2.get();
        obj1.startPosition = obj.get();
        tmp10Result = tmp10(lowerBounds, obj1);
      }
      return;
    }
  }
  C.__closure = { start: sharedValue, vertical: flag, lowerBounds, upperBounds, velocity: sharedValue1, translate, onChange };
  C.__workletHash = 12458639225587;
  C.__initData = __initData5;
  const onStartResult = Gesture.Pan().onStart(fn);
  class T {
    constructor(arg0, arg1) {
      obj = closure_10;
      obj2 = translate;
      result = closure_10.set(translate.get());
      obj3 = snapPositions;
      if (null != snapPositions) {
        tmp24 = globalThis;
        _Math = Math;
        obj8 = closure_11;
        tmp25 = c3;
        num2 = 0;
        num = 0;
        if (Math.abs(closure_11.get()) > c3) {
          num = obj8.get();
        }
        tmp2 = getNearestValue;
        value = obj3.get();
        tmp4 = getNearestValue(value, obj2.get(), num);
        if (0 !== num) {
          tmp11 = withPanGestureSpring;
          if (typeof withPanGestureSpring === "function") {
            tmp13 = closure_0;
            tmp14 = closure_1;
            obj5 = closure_0(closure_1[1]);
            tmp15 = closure_2;
            obj1 = {};
            tmp16 = obj1;
            tmp17 = closure_2;
            merged = Object.assign(closure_2);
            obj1.velocity = tmp12;
            result1 = obj2.set(obj5.withSpring(tmp4, obj1));
          } else {
            str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          tmp6 = withPanGestureTiming;
          if (typeof withPanGestureTiming === "function") {
            tmp7 = closure_0;
            tmp8 = closure_1;
            obj4 = closure_0(closure_1[2]);
            tmp9 = closure_3;
            tmp5Result = tmp5(obj4.withTiming(tmp4, closure_3));
          } else {
            str = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        if (onEnd != null) {
          tmp21 = lowerBounds;
          tmp22 = arg1;
          obj9 = { success: null, destination: null, startPosition: null };
          obj9.success = arg1;
          obj9.destination = tmp4;
          obj9.startPosition = obj.get();
          tmp20Result = tmp20(lowerBounds, obj9);
        }
      }
      return;
    }
  }
  T.__closure = { start: sharedValue, translate, snapPositions, velocity: sharedValue1, swipeVelocityThreshold: num, getNearestValue: onStart, withPanGestureSpring: onChange, withPanGestureTiming: onEnd, onEnd };
  T.__workletHash = 8222459765830;
  T.__initData = __initData4;
  let obj3 = { start: sharedValue, translate, snapPositions, velocity: sharedValue1, swipeVelocityThreshold: num, getNearestValue: onStart, withPanGestureSpring: onChange, withPanGestureTiming: onEnd, onEnd };
  const onChangeResult = Gesture.Pan().onStart(fn).onChange(C);
  class I {
    constructor() {
      obj = isGestureInProgress;
      if (null != isGestureInProgress) {
        flag = false;
        result = obj.set(false);
      }
      return;
    }
  }
  I.__closure = { isGestureInProgress };
  I.__workletHash = 3340144820710;
  I.__initData = __initData3;
  return Gesture.Pan().onStart(fn).onChange(C).onEnd(T).onFinalize(I);
});
export { SPRING_CONFIG };
export const TIMING_CONFIG = obj2;
export { withPanGestureSpring };
export { withPanGestureTiming };