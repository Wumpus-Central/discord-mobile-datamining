// === Module 12564: PanGestureAnimations ===

// Module 12564 (PanGestureAnimations)
import native from "native" /* 1188 */;
import timing from "timing" /* 4897 */;
import spring from "spring" /* 5604 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set;

const SPRING_CONFIG = { damping: 30, mass: 1, stiffness: 250, overshootClamping: true, restSpeedThreshold: 0.001, restDisplacementThreshold: 0.001 };
let obj2 = { duration: 500, easing: native.STANDARD_EASING };
const __initData = { code: "function getSortedByMeasure_PanGestureAnimationsTsx2(array,measure){const sorted=new Array(...array).sort(function(left,right){const al=Math.abs(left-measure);const ar=Math.abs(right-measure);return al<ar?-1:al>ar?1:0;});return sorted;}" };
function getNearestValue(value, translate) {
  let closure_0 = translate;
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
    let closure_0 = arg1;
    const ArrayResult = Array(...arg0);
    return ArrayResult.sort((arg0, arg1) => {
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
  getSortedByMeasure.__initData = __initData;
  if (0 === value.length) {
    return translate;
  } else {
    let first;
    closure_0 = translate;
    let tmp2 = globalThis;
    const _Array = Array;
    const items = [];
    HermesBuiltin.arraySpread(items, value, 0);
    const _Array2 = Array;
    const applyResult = HermesBuiltin.apply(Array, items);
    const sorted = applyResult.sort((arg0, arg1) => {
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
      let found = sorted.find((item) => {
        let tmp2;
        if (num2 < 0) {
          tmp2 = closure_0 > item;
        } else {
          tmp2 = closure_0 < item;
        }
        return tmp2;
      });
      if (found == null) {
        found = sorted[0];
      }
      first = found;
    } else {
      first = sorted[0];
    }
    return first;
  }
}
getNearestValue.__closure = {};
getNearestValue.__workletHash = 4186929947751;
getNearestValue.__initData = { code: "function getNearestValue_PanGestureAnimationsTsx1(array,measure,velocity=0){const unitVector=velocity<0?-1:velocity>0?1:0;function getSortedByMeasure(array,measure){'worklet';const sorted=new Array(...array).sort(function(left,right){const al=Math.abs(left-measure);const ar=Math.abs(right-measure);return al<ar?-1:al>ar?1:0;});return sorted;}if(array.length===0){return measure;}const sorted=getSortedByMeasure(array,measure);if(unitVector!==0){var _sorted$find;return(_sorted$find=sorted.find(function(value){const result=unitVector<0?measure>value:measure<value;return result;}))!==null&&_sorted$find!==void 0?_sorted$find:sorted[0];}return sorted[0];}" };
function withPanGestureSpring(arg0, velocity, arg2) {
  let obj;
  let tmp = arg2;
  const withSpring = spring.withSpring;
  spring;
  if (arg2 == null) {
    tmp = obj;
  }
  obj = { velocity };
  const merged = Object.assign(tmp);
  return withSpring(arg0, obj);
}
let obj3 = { SPRING_CONFIG, withSpring: spring.withSpring };
withPanGestureSpring.__closure = obj3;
withPanGestureSpring.__workletHash = 12189464558811;
withPanGestureSpring.__initData = { code: "function withPanGestureSpring_PanGestureAnimationsTsx3(destination,velocity,config){const{SPRING_CONFIG,withSpring}=this.__closure;const springConfig=config!==null&&config!==void 0?config:SPRING_CONFIG;return withSpring(destination,{...springConfig,velocity:velocity});}" };
function withPanGestureTiming(arg0, arg1) {
  let tmp = arg1;
  const withTiming = timing.withTiming;
  timing;
  if (arg1 == null) {
    tmp = obj2;
  }
  return withTiming(arg0, tmp);
}
let obj4 = { TIMING_CONFIG: obj2, withTiming: timing.withTiming };
withPanGestureTiming.__closure = obj4;
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
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((lowerBounds) => {
  let closure_9;
  let isGestureInProgress;
  let swipeVelocityThreshold;
  let translate;
  let upperBounds;
  let vertical;
  const obj = lowerBounds(upperBounds[4]);
  const cResult = obj.c(2);
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
  let tmp4 = undefined === vertical || vertical;
  __initData2 = tmp4;
  const tmpResult = lowerBounds(upperBounds[5]);
  const sharedValue = tmpResult.useSharedValue(0);
  const tmpResult2 = lowerBounds(upperBounds[5]);
  const sharedValue1 = tmpResult2.useSharedValue(0);
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
  const fn2 = function o(arg0) {
    let translationX;
    let translationY;
    let velocityX;
    let velocityY;
    ({ velocityX, translationX } = arg0);
    ({ velocityY, translationY } = arg0);
    const value = sharedValue.get();
    if (closure_9) {
      translationX = translationY;
    }
    const sum = value + translationX;
    let tmp4 = lowerBounds;
    if (null == lowerBounds) {
      tmp4 = sum;
      const tmp6 = null != upperBounds && sum > upperBounds;
      if (tmp6) {
        tmp4 = upperBounds;
      }
    }
    set = sharedValue1.set;
    if (closure_9) {
      velocityX = velocityY;
    }
    const result = set(velocityX);
    const result1 = translate.set(tmp4);
    if (onChange != null) {
      const obj3 = { destination: translate.get(), startPosition: sharedValue.get() };
      tmp10(arg0, obj3);
    }
  };
  fn2.__closure = { start: sharedValue, vertical: tmp4, lowerBounds, upperBounds, velocity: sharedValue1, translate, onChange };
  fn2.__workletHash = 11932761286978;
  fn2.__initData = sharedValue;
  const PanResult = Gesture.Pan();
  const fn3 = function s(arg0, success) {
    const result = sharedValue.set(translate.get());
    if (null != snapPositions) {
      const _Math = Math;
      num = 0;
      if (Math.abs(sharedValue1.get()) > num) {
        num = sharedValue1.get();
      }
      const value = snapPositions.get();
      const tmp4 = getNearestValue(value, translate.get(), num);
      if (0 !== num) {
        set = translate.set;
        if (typeof withPanGestureSpring === "function") {
          const obj5 = { velocity: tmp12 };
          const withSpring = spring.withSpring;
          spring;
          const merged = Object.assign(sharedValue);
          const result1 = set(withSpring(tmp4, obj5));
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if (typeof withPanGestureTiming === "function") {
        const obj4 = timing;
        tmp5(obj4.withTiming(tmp4, translate));
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      if (onEnd != null) {
        const obj6 = { success, destination: tmp4, startPosition: sharedValue.get() };
        tmp21(arg0, obj6);
      }
    }
  };
  let obj3 = { start: sharedValue, translate, snapPositions, velocity: sharedValue1, swipeVelocityThreshold: num, getNearestValue: onChange, withPanGestureSpring: onEnd, withPanGestureTiming: isGestureInProgress, onEnd };
  fn3.__closure = obj3;
  fn3.__workletHash = 14179326673233;
  fn3.__initData = __initData2;
  const onStartResult = PanResult.onStart(fn);
  const onChangeResult = onStartResult.onChange(fn2);
  const onEndResult = onChangeResult.onEnd(fn3);
  return onEndResult.onFinalize(PanGestureAnimationsTsx5);
}) : ((lowerBounds) => {
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
  const obj = lowerBounds(upperBounds[5]);
  const sharedValue = obj.useSharedValue(0);
  obj2 = lowerBounds(upperBounds[5]);
  const sharedValue1 = obj2.useSharedValue(0);
  const Gesture = lowerBounds(upperBounds[6]).Gesture;
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
  const onStartResult = PanResult.onStart(fn);
  class C {
    constructor(arg0) {
      let translationX;
      let translationY;
      let velocityX;
      let velocityY;
      ({ velocityX, translationX } = arg0);
      ({ velocityY, translationY } = arg0);
      const value = sharedValue.get();
      if (flag) {
        translationX = translationY;
      }
      const sum = value + translationX;
      let tmp4 = lowerBounds;
      if (null == lowerBounds) {
        tmp4 = sum;
        const tmp6 = null != upperBounds && sum > upperBounds;
        if (tmp6) {
          tmp4 = upperBounds;
        }
      }
      set = sharedValue1.set;
      if (flag) {
        velocityX = velocityY;
      }
      const result = set(velocityX);
      const result1 = translate.set(tmp4);
      if (onChange != null) {
        const obj3 = { destination: translate.get(), startPosition: sharedValue.get() };
        tmp10(arg0, obj3);
      }
    }
  }
  C.__closure = { start: sharedValue, vertical: flag, lowerBounds, upperBounds, velocity: sharedValue1, translate, onChange };
  C.__workletHash = 12458639225587;
  C.__initData = __initData5;
  const onChangeResult = onStartResult.onChange(C);
  class T {
    constructor(arg0, success) {
      const result = sharedValue.set(translate.get());
      if (null != snapPositions) {
        const _Math = Math;
        num = 0;
        if (Math.abs(sharedValue1.get()) > num) {
          num = sharedValue1.get();
        }
        const value = snapPositions.get();
        const tmp4 = getNearestValue(value, translate.get(), num);
        if (0 !== num) {
          set = translate.set;
          if (typeof withPanGestureSpring === "function") {
            const obj5 = { velocity: tmp12 };
            const withSpring = spring.withSpring;
            spring;
            const merged = Object.assign(sharedValue);
            const result1 = set(withSpring(tmp4, obj5));
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else if (typeof withPanGestureTiming === "function") {
          const obj4 = timing;
          tmp5(obj4.withTiming(tmp4, translate));
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        if (onEnd != null) {
          const obj6 = { success, destination: tmp4, startPosition: sharedValue.get() };
          tmp21(arg0, obj6);
        }
      }
    }
  }
  let obj3 = { start: sharedValue, translate, snapPositions, velocity: sharedValue1, swipeVelocityThreshold: num, getNearestValue: onStart, withPanGestureSpring: onChange, withPanGestureTiming: onEnd, onEnd };
  T.__closure = obj3;
  T.__workletHash = 8222459765830;
  T.__initData = __initData4;
  const onEndResult = onChangeResult.onEnd(T);
  class I {
    constructor() {
      if (null != isGestureInProgress) {
        const result = isGestureInProgress.set(false);
      }
    }
  }
  I.__closure = { isGestureInProgress };
  I.__workletHash = 3340144820710;
  I.__initData = __initData3;
  return onEndResult.onFinalize(I);
});
let result = size.fileFinishedImporting("modules/action_sheet/native/PanGestureAnimations.tsx");

export default tmp2;
export { SPRING_CONFIG };
export const TIMING_CONFIG = obj2;
export { withPanGestureSpring };
export { withPanGestureTiming };