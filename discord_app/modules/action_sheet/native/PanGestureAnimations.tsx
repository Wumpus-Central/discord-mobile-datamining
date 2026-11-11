// discord_app/modules/action_sheet/native/PanGestureAnimations.tsx
import native from "../../../design/void/native.tsx";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import LegacyBaseButton from "../../../../_runtime/05535_LegacyBaseButton.js";
import spring_spring from "../../../design/animation/reanimated/spring/spring.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = { duration: 500, easing: native.STANDARD_EASING };
let items = [
  {
    code: "(function getNearestValue_PanGestureAnimationsTsx2(array,measure,velocity=0){let[_worklet_2705794554689_init_data]=this.__closure;const unitVector=velocity<0?-1:velocity>0?1:0;const getSortedByMeasure=function getNearestValue_PanGestureAnimationsTsx2([_worklet_2705794554689_init_data]){const getSortedByMeasure=function(array,measure){const sorted=new Array(...array).sort(function(left,right){const al=Math.abs(left-measure);const ar=Math.abs(right-measure);return al<ar?-1:al>ar?1:0;});return sorted;};getSortedByMeasure.__workletHash=2705794554689;getSortedByMeasure.__initData=_worklet_2705794554689_init_data;return getSortedByMeasure;}([_worklet_2705794554689_init_data]);if(array.length===0){return measure;}const sorted=getSortedByMeasure(array,measure);if(unitVector!==0){var _sorted$find;return(_sorted$find=sorted.find(function(value){const result=unitVector<0?measure>value:measure<value;return result;}))!==null&&_sorted$find!==void 0?_sorted$find:sorted[0];}return sorted[0];})",
  },
  {
    code: "(function getSortedByMeasure_PanGestureAnimationsTsx1(array,measure){const sorted=new Array(...array).sort(function(left,right){const al=Math.abs(left-measure);const ar=Math.abs(right-measure);return al<ar?-1:al>ar?1:0;});return sorted;})",
  },
];
let closure_129_0;
[tmp2, tmp3] = items;
let obj2 = { damping: 30, mass: 1, stiffness: 250, overshootClamping: true };
function getNearestValue(arg0, arg1) {
  closure_0 = arg1;
  let num = arg2;
  if (arg2 === undefined) {
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
  items = [require];
  [tmp] = items;
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
  getSortedByMeasure.__workletHash = 2705794554689;
  getSortedByMeasure.__initData = tmp;
  if (0 === arg0.length) {
    return arg1;
  } else {
    closure_0 = arg1;
    const _Array = Array;
    const items1 = [];
    HermesBuiltin.arraySpread(arg0, 0);
    const _Array2 = Array;
    const sorted = HermesBuiltin.apply(items1).sort((arg0, arg1) => {
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
let items1 = [tmp3];
getNearestValue.__closure = items1;
getNearestValue.__workletHash = 11283262751174;
getNearestValue.__initData = tmp2;
let items2 = [
  {
    code: "(function withPanGestureSpring_PanGestureAnimationsTsx3(destination,velocity,config){let[SPRING_CONFIG,withSpring]=this.__closure;const springConfig=config!==null&&config!==void 0?config:SPRING_CONFIG;return withSpring(destination,{...springConfig,velocity:velocity});})",
  },
  obj2,
  spring_spring.withSpring,
];
let closure_130_0;
let closure_130_1;
[tmp4, tmp5, tmp6] = items2;
function withPanGestureSpring(arg0, velocity, arg2) {
  let tmp = arg2;
  if (arg2 == null) {
    tmp = require;
  }
  const obj = {};
  const merged = Object.assign(tmp);
  obj.velocity = velocity;
  return dependencyMap(arg0, obj);
}
let items3 = [tmp5, tmp6];
withPanGestureSpring.__closure = items3;
withPanGestureSpring.__workletHash = 4739899819458;
withPanGestureSpring.__initData = tmp4;
let items4 = [
  {
    code: "(function withPanGestureTiming_PanGestureAnimationsTsx4(destination,config){let[TIMING_CONFIG,withTiming]=this.__closure;const timingConfig=config!==null&&config!==void 0?config:TIMING_CONFIG;return withTiming(destination,timingConfig);})",
  },
  obj,
  timing_timing.withTiming,
];
let closure_131_0;
let closure_131_1;
[tmp7, tmp8, tmp9] = items4;
function withPanGestureTiming(arg0, arg1) {
  let tmp = arg1;
  if (arg1 == null) {
    tmp = require;
  }
  return dependencyMap(arg0, tmp);
}
let items5 = [tmp8, tmp9];
withPanGestureTiming.__closure = items5;
withPanGestureTiming.__workletHash = 1929264265377;
withPanGestureTiming.__initData = tmp7;
let closure_5 = {
  code: "(function PanGestureAnimationsTsx5(event){let[start,translate,velocity,isGestureInProgress,onStart]=this.__closure;var _onStart;start.set(translate.get());velocity.set(0);if(isGestureInProgress!=null){isGestureInProgress.set(true);}(_onStart=onStart)===null||_onStart===void 0||_onStart(event,{destination:start.get(),startPosition:start.get()});})",
};
let closure_6 = {
  code: "(function PanGestureAnimationsTsx6(event){let[start,vertical,lowerBounds,upperBounds,velocity,translate,onChange]=this.__closure;var _onChange;const{velocityY:velocityY,translationY:translationY,velocityX:velocityX,translationX:translationX}=event;let next=start.get()+(vertical?translationY:translationX);if(lowerBounds!=null&&next<lowerBounds){next=lowerBounds;}else if(upperBounds!=null&&next>upperBounds){next=upperBounds;}velocity.set(vertical?velocityY:velocityX);translate.set(next);(_onChange=onChange)===null||_onChange===void 0||_onChange(event,{destination:translate.get(),startPosition:start.get()});})",
};
let closure_7 = {
  code: "(function PanGestureAnimationsTsx7(event,success){let[start,translate,snapPositions,velocity,swipeVelocityThreshold,getNearestValue,withPanGestureSpring,withPanGestureTiming,onEnd]=this.__closure;start.set(translate.get());if(snapPositions!=null){var _onEnd;const swipeVelocity=Math.abs(velocity.get())>swipeVelocityThreshold?velocity.get():0;const snapPoint=getNearestValue(snapPositions.get(),translate.get(),swipeVelocity);if(swipeVelocity!==0){translate.set(withPanGestureSpring(snapPoint,velocity.get()));}else{translate.set(withPanGestureTiming(snapPoint));}(_onEnd=onEnd)===null||_onEnd===void 0||_onEnd(event,{success:success,destination:snapPoint,startPosition:start.get()});}})",
};
let closure_8 = {
  code: "(function PanGestureAnimationsTsx8(){let[isGestureInProgress]=this.__closure;if(isGestureInProgress!=null){isGestureInProgress.set(false);}})",
};
let result = size.fileFinishedImporting("modules/action_sheet/native/PanGestureAnimations.tsx");

export default function usePanGesture(swipeVelocityThreshold) {
  let num = swipeVelocityThreshold.swipeVelocityThreshold;
  ({ lowerBounds, upperBounds, snapPositions } = swipeVelocityThreshold);
  if (num === undefined) {
    num = 300;
  }
  ({ translate, vertical, onStart, onChange, onEnd } = swipeVelocityThreshold);
  if (vertical === undefined) {
    vertical = true;
  }
  const isGestureInProgress = swipeVelocityThreshold.isGestureInProgress;
  const sharedValue = _mod1652.useSharedValue(0);
  const sharedValue1 = _mod1652.useSharedValue(0);
  const Gesture = LegacyBaseButton.Gesture;
  items = [_undefined6, sharedValue, translate, sharedValue1, isGestureInProgress, onStart];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  class PanGestureAnimationsTsx5 {
    constructor(arg0) {
      obj = closure_0;
      result = closure_0.set(closure_1.get());
      result1 = closure_2.set(0);
      obj2 = closure_3;
      if (null != closure_3) {
        flag = true;
        result2 = obj2.set(true);
      }
      if (closure_4 != null) {
        tmp5 = swipeVelocityThreshold;
        obj1 = { destination: null, startPosition: null };
        obj1.destination = obj.get();
        obj1.startPosition = obj.get();
        tmp4Result = tmp4(swipeVelocityThreshold, obj1);
      }
      return;
    }
  }
  const items1 = [tmp4, tmp5, tmp6, tmp7, tmp8];
  PanGestureAnimationsTsx5.__closure = items1;
  PanGestureAnimationsTsx5.__workletHash = 16719111067349;
  PanGestureAnimationsTsx5.__initData = tmp3;
  const PanResult = Gesture.Pan();
  const items2 = [_undefined7, sharedValue, vertical, lowerBounds, upperBounds, sharedValue1, translate, onChange];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items2;
  class PanGestureAnimationsTsx6 {
    constructor(arg0) {
      ({ velocityX, translationX } = swipeVelocityThreshold);
      obj = closure_0;
      ({ velocityY, translationY } = swipeVelocityThreshold);
      value = closure_0.get();
      tmp2 = closure_1;
      if (closure_1) {
        translationX = translationY;
      }
      sum = value + translationX;
      tmp4 = closure_2;
      if (null == closure_2) {
        tmp5 = closure_3;
        tmp6 = null != closure_3 && sum > tmp5;
        tmp4 = sum;
        if (tmp6) {
          tmp4 = tmp5;
        }
      }
      tmp7 = closure_4;
      if (tmp2) {
        velocityX = velocityY;
      }
      result = closure_4.set(velocityX);
      obj2 = closure_5;
      result1 = closure_5.set(tmp4);
      if (closure_6 != null) {
        obj1 = { destination: null, startPosition: null };
        obj1.destination = obj2.get();
        obj1.startPosition = obj.get();
        tmp10Result = tmp10(swipeVelocityThreshold, obj1);
      }
      return;
    }
  }
  const items3 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
  PanGestureAnimationsTsx6.__closure = items3;
  PanGestureAnimationsTsx6.__workletHash = 8808113048659;
  PanGestureAnimationsTsx6.__initData = tmp9;
  const onStartResult = Gesture.Pan().onStart(PanGestureAnimationsTsx5);
  const items4 = [
    _undefined8,
    sharedValue,
    translate,
    snapPositions,
    sharedValue1,
    num,
    getNearestValue,
    withPanGestureSpring,
    withPanGestureTiming,
    onEnd,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items4;
  class PanGestureAnimationsTsx7 {
    constructor(arg0, arg1) {
      obj = closure_0;
      obj2 = closure_1;
      result = closure_0.set(closure_1.get());
      obj3 = closure_2;
      if (null != closure_2) {
        tmp13 = globalThis;
        _Math = Math;
        obj5 = closure_3;
        tmp14 = closure_4;
        num2 = 0;
        num = 0;
        if (Math.abs(closure_3.get()) > closure_4) {
          num = obj5.get();
        }
        tmp2 = closure_5;
        value = obj3.get();
        tmp4 = closure_5(value, obj2.get(), num);
        if (0 !== num) {
          tmp7 = closure_6;
          result1 = obj2.set(closure_6(tmp4, obj5.get()));
        } else {
          tmp5 = closure_7;
          result2 = obj2.set(closure_7(tmp4));
        }
        if (closure_8 != null) {
          tmp10 = swipeVelocityThreshold;
          tmp11 = arg1;
          obj1 = { success: null, destination: null, startPosition: null };
          obj1.success = arg1;
          obj1.destination = tmp4;
          obj1.startPosition = obj.get();
          tmp9Result = tmp9(swipeVelocityThreshold, obj1);
        }
      }
      return;
    }
  }
  const items5 = [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26];
  PanGestureAnimationsTsx7.__closure = items5;
  PanGestureAnimationsTsx7.__workletHash = 6885538439177;
  PanGestureAnimationsTsx7.__initData = tmp17;
  const onChangeResult = Gesture.Pan().onStart(PanGestureAnimationsTsx5).onChange(PanGestureAnimationsTsx6);
  const items6 = [closure_8, isGestureInProgress];
  c0 = undefined;
  [tmp27, tmp28] = items6;
  class PanGestureAnimationsTsx8 {
    constructor() {
      obj = closure_0;
      if (null != closure_0) {
        flag = false;
        result = obj.set(false);
      }
      return;
    }
  }
  const items7 = [tmp28];
  PanGestureAnimationsTsx8.__closure = items7;
  PanGestureAnimationsTsx8.__workletHash = 10623242754526;
  PanGestureAnimationsTsx8.__initData = tmp27;
  return Gesture.Pan()
    .onStart(PanGestureAnimationsTsx5)
    .onChange(PanGestureAnimationsTsx6)
    .onEnd(PanGestureAnimationsTsx7)
    .onFinalize(PanGestureAnimationsTsx8);
}
export const SPRING_CONFIG = obj2;
export const TIMING_CONFIG = obj;
export { withPanGestureSpring };
export { withPanGestureTiming };
