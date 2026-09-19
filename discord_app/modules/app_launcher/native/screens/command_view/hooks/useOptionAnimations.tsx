// === Module 12412: useOptionAnimations ===

// Module 12412 (useOptionAnimations)
import ReanimatedRexport from "ReanimatedRexport" /* 4492 */;
import timing from "timing" /* 4757 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const React4 = 300;
class LayoutAnimation {
  constructor(arg0) {
    obj = { originY: null };
    obj2 = closure_0(closure_1[2]);
    obj1 = { duration: c4 };
    obj.originY = obj2.withTiming(global.targetOriginY, obj1);
    obj5 = { initialValues: { originY: global.currentOriginY }, animations: obj };
    return obj5;
  }
}
LayoutAnimation.__closure = { withTiming: fn(4757).withTiming, OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION: 300 };
LayoutAnimation.__workletHash = 16804895997501;
LayoutAnimation.__initData = { code: "function LayoutAnimation_useOptionAnimationsTsx1(values){const{withTiming,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION}=this.__closure;const animations={originY:withTiming(values.targetOriginY,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION})};const initialValues={originY:values.currentOriginY};return{initialValues:initialValues,animations:animations};}" };
class ExitingAnimation {
  constructor(arg0) {
    obj = { opacity: null, originX: null };
    bound = Math.min(global.currentOriginX - global.windowWidth, -global.windowWidth);
    obj2 = closure_0(closure_1[2]);
    obj1 = { duration: c4 };
    obj.opacity = obj2.withTiming(0, obj1);
    obj4 = closure_0(closure_1[2]);
    obj7 = { duration: c4 };
    obj.originX = obj4.withTiming(bound, obj7);
    obj8 = { initialValues: { originX: global.currentOriginX, opacity: 1 }, animations: obj };
    return obj8;
  }
}
let obj = { withTiming: fn(4757).withTiming, OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION: 300 };
ExitingAnimation.__closure = { withTiming: fn(4757).withTiming, OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION: 300 };
ExitingAnimation.__workletHash = 8977480282966;
ExitingAnimation.__initData = { code: "function ExitingAnimation_useOptionAnimationsTsx2(values){const{withTiming,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION}=this.__closure;const offScreenX=Math.min(values.currentOriginX-values.windowWidth,-values.windowWidth);const animations={opacity:withTiming(0,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION}),originX:withTiming(offScreenX,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION})};const initialValues={originX:values.currentOriginX,opacity:1};return{initialValues:initialValues,animations:animations};}" };
let closure_5 = { code: "function useOptionAnimationsTsx3(){const{withTiming,Easing,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION,withDelay,runOnJS,handleMountAnimationComplete}=this.__closure;const scaleAnimation=withTiming(1,{duration:250,easing:Easing.bezier(0.25,1.75,0.25,1.25)});const opacityAnimation=withTiming(1,{duration:200});const layoutShiftDelay=OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION-100;return{animations:{opacity:withDelay(layoutShiftDelay,opacityAnimation),transform:[{scale:withDelay(layoutShiftDelay,scaleAnimation)}]},initialValues:{opacity:0,transform:[{scale:0.92}]},callback:function(){runOnJS(handleMountAnimationComplete)();}};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/hooks/useOptionAnimations.tsx");

export const OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION = 300;
export { LayoutAnimation };
export { ExitingAnimation };
export const useOptionEnteringAnimation = function useOptionEnteringAnimation() {
  sharedValue = sharedValue(4492).useSharedValue(false);
  dependencyMap = noop.useRef([]);
  let items = [sharedValue];
  _slicedToArray = noop.useCallback(() => {
    const result = sharedValue.set(true);
    const current = closure_1.current;
    const item = current.forEach((fn) => fn());
    const current1 = closure_1.current;
    current1.splice(0, closure_1.current.length);
  }, items);
  let obj = sharedValue(4492);
  return {
    EnteringAnimation: _slicedToArray(noop.useState(() => {
      const fn = function n() {
        const obj2 = { duration: 250, easing: null };
        const Easing = sharedValue(4492).Easing;
        obj2.easing = Easing.bezier(0.25, 1.75, 0.25, 1.25);
        const obj = sharedValue(4757);
        const withTimingResult = sharedValue(4757).withTiming(1, obj2);
        const obj4 = { animations: null, initialValues: null, callback: null };
        const obj5 = { opacity: null, transform: null };
        const obj3 = sharedValue(4757);
        const withTimingResult1 = sharedValue(4757).withTiming(1, { duration: 200 });
        obj5.opacity = sharedValue(4492).withDelay(200, withTimingResult1);
        const obj7 = { scale: null };
        const obj6 = sharedValue(4492);
        obj7.scale = sharedValue(4492).withDelay(200, withTimingResult);
        const items = [obj7];
        obj5.transform = items;
        obj4.animations = obj5;
        const obj9 = { opacity: 0, transform: null };
        const items1 = [{ scale: 0.92 }];
        obj9.transform = items1;
        obj4.initialValues = obj9;
        obj4.callback = function callback() {
          sharedValue(4492).runOnJS(closure_1_2)();
        };
        return obj4;
      };
      fn.__closure = { withTiming: timing.withTiming, Easing: ReanimatedRexport.Easing, OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION, withDelay: ReanimatedRexport.withDelay, runOnJS: ReanimatedRexport.runOnJS, handleMountAnimationComplete };
      fn.__workletHash = 1048348699475;
      fn.__initData = __initData;
      return fn;
    }), 1)[0],
    registerAnimationCompleteCallback(fn) {
      if (sharedValue.get()) {
        fn();
      } else {
        const current = closure_1.current;
        current.push(fn);
      }
    }
  };
};