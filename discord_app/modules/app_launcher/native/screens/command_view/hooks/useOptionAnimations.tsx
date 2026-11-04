// discord_app/modules/app_launcher/native/screens/command_view/hooks/useOptionAnimations.tsx
import Discord from "../../../../../../index.native.tsx";
import _mod1652 from "../../../../../../../_runtime/metro/01652__.js";
import _mod1705 from "../../../../../../../_runtime/metro/01705__.js";
import timing_timing from "../../../../../../design/animation/reanimated/timing/timing.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
let c4 = 300;
let items = [
  {
    code: "(function LayoutAnimation_useOptionAnimationsTsx1(values){let[withTiming,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION]=this.__closure;const animations={originY:withTiming(values.targetOriginY,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION})};const initialValues={originY:values.currentOriginY};return{initialValues:initialValues,animations:animations};})",
  },
  fn(5378).withTiming,
  300,
];
let closure_129_0;
let closure_129_1;
[tmp2, tmp3, tmp4] = items;
class LayoutAnimation {
  constructor(arg0) {
    obj = { originY: null };
    obj1 = { duration: closure_1 };
    obj.originY = closure_0(global.targetOriginY, obj1);
    obj4 = { initialValues: { originY: global.currentOriginY }, animations: obj };
    return obj4;
  }
}
let items1 = [tmp3, tmp4];
LayoutAnimation.__closure = items1;
LayoutAnimation.__workletHash = 5041452333732;
LayoutAnimation.__initData = tmp2;
const items2 = [
  {
    code: "(function ExitingAnimation_useOptionAnimationsTsx2(values){let[withTiming,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION]=this.__closure;const offScreenX=Math.min(values.currentOriginX-values.windowWidth,-values.windowWidth);const animations={opacity:withTiming(0,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION}),originX:withTiming(offScreenX,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION})};const initialValues={originX:values.currentOriginX,opacity:1};return{initialValues:initialValues,animations:animations};})",
  },
  fn(5378).withTiming,
  300,
];
let closure_130_0;
let closure_130_1;
[tmp5, tmp6, tmp7] = items2;
class ExitingAnimation {
  constructor(arg0) {
    obj = { opacity: null, originX: null };
    obj1 = { duration: closure_1 };
    bound = Math.min(global.currentOriginX - global.windowWidth, -global.windowWidth);
    obj.opacity = closure_0(0, obj1);
    obj5 = { duration: closure_1 };
    obj.originX = closure_0(bound, obj5);
    obj6 = { initialValues: { originX: global.currentOriginX, opacity: 1 }, animations: obj };
    return obj6;
  }
}
const items3 = [tmp6, tmp7];
ExitingAnimation.__closure = items3;
ExitingAnimation.__workletHash = 7972612064943;
ExitingAnimation.__initData = tmp5;
let closure_5 = {
  code: "(function useOptionAnimationsTsx3(){let[withTiming,Easing,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION,withDelay,scheduleOnRN,handleMountAnimationComplete]=this.__closure;const scaleAnimation=withTiming(1,{duration:250,easing:Easing.bezier(0.25,1.75,0.25,1.25)});const opacityAnimation=withTiming(1,{duration:200});const layoutShiftDelay=OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION-100;return{animations:{opacity:withDelay(layoutShiftDelay,opacityAnimation),transform:[{scale:withDelay(layoutShiftDelay,scaleAnimation)}]},initialValues:{opacity:0,transform:[{scale:0.92}]},callback:function(){scheduleOnRN(handleMountAnimationComplete);}};})",
};
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/command_view/hooks/useOptionAnimations.tsx",
);

export const OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION = 300;
export { LayoutAnimation };
export { ExitingAnimation };
export function useOptionEnteringAnimation() {
  sharedValue = sharedValue(1652).useSharedValue(false);
  dependencyMap = noop.useRef([]);
  items = [sharedValue];
  _slicedToArray = noop.useCallback(() => {
    const result = sharedValue.set(true);
    const current = closure_1.current;
    const item = current.forEach((fn) => fn());
    const current1 = closure_1.current;
    current1.splice(0, closure_1.current.length);
  }, items);
  let obj = sharedValue(1652);
  return {
    EnteringAnimation: _slicedToArray(
      noop.useState(() => {
        items = [
          closure_5,
          timing_timing.withTiming,
          _mod1652.Easing,
          c4,
          _mod1652.withDelay,
          _mod1705.scheduleOnRN,
          closure_2,
        ];
        c0 = undefined;
        c1 = undefined;
        c2 = undefined;
        c3 = undefined;
        c4 = undefined;
        c5 = undefined;
        [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
        function useOptionAnimationsTsx3() {
          const obj = { duration: 250, easing: _undefined2.bezier(0.25, 1.75, 0.25, 1.25) };
          const diff = c2 - 100;
          const obj2 = { animations: null, initialValues: null, callback: null };
          const obj3 = { opacity: _undefined3(diff, _undefined(1, { duration: 200 })), transform: null };
          const tmp = _undefined(1, { duration: 250, easing: _undefined2.bezier(0.25, 1.75, 0.25, 1.25) });
          items = [
            {
              scale: _undefined3(
                diff,
                _undefined(1, { duration: 250, easing: _undefined2.bezier(0.25, 1.75, 0.25, 1.25) }),
              ),
            },
          ];
          obj3.transform = items;
          obj2.animations = obj3;
          const obj5 = { opacity: 0, transform: null };
          const items1 = [{ scale: 0.92 }];
          obj5.transform = items1;
          obj2.initialValues = obj5;
          obj2.callback = function callback() {
            closure_1_4(closure_1_5);
          };
          return obj2;
        }
        let items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7];
        useOptionAnimationsTsx3.__closure = items1;
        useOptionAnimationsTsx3.__workletHash = 956668104331;
        useOptionAnimationsTsx3.__initData = tmp;
        return useOptionAnimationsTsx3;
      }),
      1,
    )[0],
    registerAnimationCompleteCallback(fn) {
      if (sharedValue.get()) {
        fn();
      } else {
        const current = closure_1.current;
        current.push(fn);
      }
    },
  };
}
