// === Module 11960: OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION ===

// Module 11960 (OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION)
import CONFIG_NEVER_ANIMATE_TIMING from "CONFIG_NEVER_ANIMATE_TIMING" /* 4479 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;

require = arg1;
let c4 = 300;
class LayoutAnimation {
  constructor(arg0) {
    animations = { originY: null };
    obj2 = require("CONFIG_NEVER_ANIMATE_TIMING");
    obj = { duration: c4 };
    animations[0] = obj2.withTiming(global.targetOriginY, obj);
    obj1 = { originY: global.currentOriginY };
    return { initialValues: obj1, animations };
  }
}
let obj = { withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION: 300 };
LayoutAnimation.__closure = obj;
LayoutAnimation.__workletHash = 16804895997501;
LayoutAnimation.__initData = { code: "function LayoutAnimation_useOptionAnimationsTsx1(values){const{withTiming,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION}=this.__closure;const animations={originY:withTiming(values.targetOriginY,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION})};const initialValues={originY:values.currentOriginY};return{initialValues:initialValues,animations:animations};}" };
class ExitingAnimation {
  constructor(arg0) {
    animations = { opacity: null, originX: null };
    bound = Math.min(global.currentOriginX - global.windowWidth, -global.windowWidth);
    obj2 = require("CONFIG_NEVER_ANIMATE_TIMING");
    obj = { duration: c4 };
    animations[0] = require("module_0");
    obj4 = require("CONFIG_NEVER_ANIMATE_TIMING");
    obj1 = { duration: c4 };
    animations[1] = obj4.withTiming(bound, obj1);
    obj2 = { originX: global.currentOriginX, opacity: 1 };
    return { initialValues: obj2, animations };
  }
}
obj = { withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION: 300 };
ExitingAnimation.__closure = obj;
ExitingAnimation.__workletHash = 8977480282966;
ExitingAnimation.__initData = { code: "function ExitingAnimation_useOptionAnimationsTsx2(values){const{withTiming,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION}=this.__closure;const offScreenX=Math.min(values.currentOriginX-values.windowWidth,-values.windowWidth);const animations={opacity:withTiming(0,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION}),originX:withTiming(offScreenX,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION})};const initialValues={originX:values.currentOriginX,opacity:1};return{initialValues:initialValues,animations:animations};}" };
let closure_5 = { code: "function useOptionAnimationsTsx3(){const{withTiming,Easing,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION,withDelay,runOnJS,handleMountAnimationComplete}=this.__closure;const scaleAnimation=withTiming(1,{duration:250,easing:Easing.bezier(0.25,1.75,0.25,1.25)});const opacityAnimation=withTiming(1,{duration:200});const layoutShiftDelay=OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION-100;return{animations:{opacity:withDelay(layoutShiftDelay,opacityAnimation),transform:[{scale:withDelay(layoutShiftDelay,scaleAnimation)}]},initialValues:{opacity:0,transform:[{scale:0.92}]},callback:function(){runOnJS(handleMountAnimationComplete)();}};}" };
let result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/command_view/hooks/useOptionAnimations.tsx");

export const OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION = 300;
export { LayoutAnimation };
export { ExitingAnimation };
export const useOptionEnteringAnimation = function useOptionEnteringAnimation() {
  let obj = sharedValue(4217);
  sharedValue = obj.useSharedValue(false);
  dependencyMap = React.useRef([]);
  let items = [sharedValue];
  const callback = React.useCallback(() => {
    const result = sharedValue.set(true);
    const current = closure_1.current;
    const item = current.forEach((arg0) => arg0());
    const current1 = closure_1.current;
    current1.splice(0, closure_1.current.length);
  }, items);
  obj = {
    EnteringAnimation: callback(React.useState(() => {
      const fn = function n() {
        let obj = closure_1_0(closure_1_1[2]);
        obj = { duration: 250, easing: null };
        const Easing = closure_1_0(closure_1_1[3]).Easing;
        obj[1] = Easing.bezier(0.25, 1.75, 0.25, 1.25);
        let obj2 = closure_1_0(closure_1_1[2]);
        obj = { animations: null, initialValues: null, callback: null };
        obj1 = { opacity: null, transform: null };
        const withTimingResult = obj.withTiming(1, obj);
        const withTimingResult1 = obj2.withTiming(1, { duration: 200 });
        obj1[0] = closure_1_0(closure_1_1[3]).withDelay(200, withTimingResult1);
        obj2 = { scale: null };
        const obj6 = closure_1_0(closure_1_1[3]);
        obj2[0] = closure_1_0(closure_1_1[3]).withDelay(200, withTimingResult);
        const items = [obj2];
        obj1[1] = items;
        obj[0] = obj1;
        const items1 = [{ scale: 0.92 }];
        obj[1] = { opacity: 0, transform: items1 };
        obj[2] = function callback() {
          closure_1_0(closure_1_1[3]).runOnJS(closure_2)();
        };
        return obj;
      };
      fn.__closure = { withTiming: sharedValue(closure_1[2]).withTiming, Easing: sharedValue(closure_1[3]).Easing, OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION: closure_1_4, withDelay: sharedValue(closure_1[3]).withDelay, runOnJS: sharedValue(closure_1[3]).runOnJS, handleMountAnimationComplete: closure_2 };
      fn.__workletHash = 1048348699475;
      fn.__initData = closure_1_5;
      return fn;
    }), 1)[0],
    registerAnimationCompleteCallback(arg0) {
      if (sharedValue.get()) {
        arg0();
      } else {
        const current = closure_1.current;
        current.push(arg0);
      }
    }
  };
  return obj;
};