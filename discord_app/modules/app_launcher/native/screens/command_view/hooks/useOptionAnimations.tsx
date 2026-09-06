// discord_app/modules/app_launcher/native/screens/command_view/hooks/useOptionAnimations.tsx
import ReanimatedRexport from "../../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../../design/animation/reanimated/timing/timing.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const React4 = 300;
class LayoutAnimation {
  constructor(arg0) {
    obj = { originY: null };
    obj2 = closure_0(closure_1[2]);
    obj = { duration: c4 };
    obj.originY = obj2.withTiming(global.targetOriginY, obj);
    obj1 = { initialValues: { originY: global.currentOriginY }, animations: obj };
    return obj1;
  }
}
let obj = { withTiming: fn(4561).withTiming, OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION: 300 };
LayoutAnimation.__closure = obj;
LayoutAnimation.__workletHash = 16804895997501;
LayoutAnimation.__initData = {
  code: "function LayoutAnimation_useOptionAnimationsTsx1(values){const{withTiming,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION}=this.__closure;const animations={originY:withTiming(values.targetOriginY,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION})};const initialValues={originY:values.currentOriginY};return{initialValues:initialValues,animations:animations};}",
};
class ExitingAnimation {
  constructor(arg0) {
    obj = { opacity: null, originX: null };
    bound = Math.min(global.currentOriginX - global.windowWidth, -global.windowWidth);
    obj2 = closure_0(closure_1[2]);
    obj = { duration: c4 };
    obj.opacity = obj2.withTiming(0, obj);
    obj4 = closure_0(closure_1[2]);
    obj1 = { duration: c4 };
    obj.originX = obj4.withTiming(bound, obj1);
    obj2 = { initialValues: { originX: global.currentOriginX, opacity: 1 }, animations: obj };
    return obj2;
  }
}
obj = { withTiming: fn(4561).withTiming, OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION: 300 };
ExitingAnimation.__closure = obj;
ExitingAnimation.__workletHash = 8977480282966;
ExitingAnimation.__initData = {
  code: "function ExitingAnimation_useOptionAnimationsTsx2(values){const{withTiming,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION}=this.__closure;const offScreenX=Math.min(values.currentOriginX-values.windowWidth,-values.windowWidth);const animations={opacity:withTiming(0,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION}),originX:withTiming(offScreenX,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION})};const initialValues={originX:values.currentOriginX,opacity:1};return{initialValues:initialValues,animations:animations};}",
};
let closure_5 = {
  code: "function useOptionAnimationsTsx3(){const{withTiming,Easing,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION,withDelay,runOnJS,handleMountAnimationComplete}=this.__closure;const scaleAnimation=withTiming(1,{duration:250,easing:Easing.bezier(0.25,1.75,0.25,1.25)});const opacityAnimation=withTiming(1,{duration:200});const layoutShiftDelay=OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION-100;return{animations:{opacity:withDelay(layoutShiftDelay,opacityAnimation),transform:[{scale:withDelay(layoutShiftDelay,scaleAnimation)}]},initialValues:{opacity:0,transform:[{scale:0.92}]},callback:function(){runOnJS(handleMountAnimationComplete)();}};}",
};
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/command_view/hooks/useOptionAnimations.tsx",
);

export const OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION = 300;
export { LayoutAnimation };
export { ExitingAnimation };
export const useOptionEnteringAnimation = function useOptionEnteringAnimation() {
  let obj = sharedValue(4296);
  sharedValue = obj.useSharedValue(false);
  dependencyMap = noop.useRef([]);
  let items = [sharedValue];
  _slicedToArray = noop.useCallback(() => {
    const result = sharedValue.set(true);
    const current = closure_1.current;
    const item = current.forEach((fn) => fn());
    const current1 = closure_1.current;
    current1.splice(0, closure_1.current.length);
  }, items);
  obj = {
    EnteringAnimation: _slicedToArray(
      noop.useState(() => {
        const fn = function n() {
          sharedValue(4561);
          let obj = { duration: 250, easing: null };
          const Easing = sharedValue(4296).Easing;
          obj.easing = Easing.bezier(0.25, 1.75, 0.25, 1.25);
          let obj2 = sharedValue(4561);
          obj = { animations: null, initialValues: null, callback: null };
          const obj1 = { opacity: null, transform: null };
          const withTimingResult = obj.withTiming(1, obj);
          const withTimingResult1 = obj2.withTiming(1, { duration: 200 });
          obj1.opacity = sharedValue(4296).withDelay(200, withTimingResult1);
          obj2 = { scale: null };
          const obj6 = sharedValue(4296);
          obj2.scale = sharedValue(4296).withDelay(200, withTimingResult);
          const items = [obj2];
          obj1.transform = items;
          obj.animations = obj1;
          const obj3 = { opacity: 0, transform: null };
          const items1 = [{ scale: 0.92 }];
          obj3.transform = items1;
          obj.initialValues = obj3;
          obj.callback = function callback() {
            sharedValue(4296).runOnJS(closure_1_2)();
          };
          return obj;
        };
        fn.__closure = {
          withTiming: timing.withTiming,
          Easing: ReanimatedRexport.Easing,
          OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION,
          withDelay: ReanimatedRexport.withDelay,
          runOnJS: ReanimatedRexport.runOnJS,
          handleMountAnimationComplete,
        };
        fn.__workletHash = 1048348699475;
        fn.__initData = __initData;
        return fn;
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
  return obj;
};
