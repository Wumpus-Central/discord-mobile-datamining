// discord_app/modules/app_launcher/native/screens/command_view/hooks/useOptionAnimations.tsx
import ReanimatedRexport from "../../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../../design/animation/reanimated/timing/timing.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let arr1, dependencyMap, spliceResult, tmp3;

const React3 = 300;
class LayoutAnimation {
  constructor(originY) {
    let obj2;
    const obj = { originY: obj2.withTiming(originY.targetOriginY, obj3) };
    obj2 = timing;
    return { initialValues: { originY: originY.currentOriginY }, animations: obj };
  }
}
let obj = { withTiming: timing.withTiming, OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION: 300 };
LayoutAnimation.__closure = obj;
LayoutAnimation.__workletHash = 16804895997501;
LayoutAnimation.__initData = {
  code: "function LayoutAnimation_useOptionAnimationsTsx1(values){const{withTiming,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION}=this.__closure;const animations={originY:withTiming(values.targetOriginY,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION})};const initialValues={originY:values.currentOriginY};return{initialValues:initialValues,animations:animations};}",
};
class ExitingAnimation {
  constructor(originX) {
    let bound;
    let obj2;
    let obj3;
    let obj4;
    const obj = { opacity: obj2.withTiming(0, obj3), originX: obj4.withTiming(bound, obj5) };
    bound = Math.min(originX.currentOriginX - originX.windowWidth, -originX.windowWidth);
    obj2 = timing;
    obj3 = { duration: v300 };
    obj4 = timing;
    return { initialValues: { originX: originX.currentOriginX, opacity: 1 }, animations: obj };
  }
}
let obj2 = { withTiming: timing.withTiming, OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION: 300 };
ExitingAnimation.__closure = obj2;
ExitingAnimation.__workletHash = 8977480282966;
ExitingAnimation.__initData = {
  code: "function ExitingAnimation_useOptionAnimationsTsx2(values){const{withTiming,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION}=this.__closure;const offScreenX=Math.min(values.currentOriginX-values.windowWidth,-values.windowWidth);const animations={opacity:withTiming(0,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION}),originX:withTiming(offScreenX,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION})};const initialValues={originX:values.currentOriginX,opacity:1};return{initialValues:initialValues,animations:animations};}",
};
const __initData = {
  code: "function useOptionAnimationsTsx3(){const{withTiming,Easing,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION,withDelay,runOnJS,handleMountAnimationComplete}=this.__closure;const scaleAnimation=withTiming(1,{duration:250,easing:Easing.bezier(0.25,1.75,0.25,1.25)});const opacityAnimation=withTiming(1,{duration:200});const layoutShiftDelay=OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION-100;return{animations:{opacity:withDelay(layoutShiftDelay,opacityAnimation),transform:[{scale:withDelay(layoutShiftDelay,scaleAnimation)}]},initialValues:{opacity:0,transform:[{scale:0.92}]},callback:function(){runOnJS(handleMountAnimationComplete)();}};}",
};
let closure_6 = {
  code: "function useOptionAnimationsTsx4(){const{withTiming,Easing,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION,withDelay,runOnJS,handleMountAnimationComplete}=this.__closure;const scaleAnimation=withTiming(1,{duration:250,easing:Easing.bezier(0.25,1.75,0.25,1.25)});const opacityAnimation=withTiming(1,{duration:200});const layoutShiftDelay=OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION-100;return{animations:{opacity:withDelay(layoutShiftDelay,opacityAnimation),transform:[{scale:withDelay(layoutShiftDelay,scaleAnimation)}]},initialValues:{opacity:0,transform:[{scale:0.92}]},callback:function(){runOnJS(handleMountAnimationComplete)();}};}",
};
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_1;
      let first;
      let obj4;
      let sharedValue;
      let obj = sharedValue(576);
      const cResult = obj.c(10);
      let obj2 = sharedValue(4612);
      sharedValue = obj2.useSharedValue(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      dependencyMap = react.useRef(first);
      if (cResult[1] !== sharedValue) {
        class T {
          constructor(arg0) {
            if (closure_0.get()) {
              tmp3 = arg0();
            } else {
              tmp = closure_1;
              current = closure_1.current;
              arr1 = current.push(arg0);
            }
            return;
          }
        }
        cResult[1] = sharedValue;
        cResult[2] = T;
      } else {
        class T {
          constructor(arg0) {
            if (closure_0.get()) {
              tmp3 = arg0();
            } else {
              tmp = closure_1;
              current = closure_1.current;
              arr1 = current.push(arg0);
            }
            return;
          }
        }
      }
      if (cResult[3] !== sharedValue) {
        class O {
          constructor() {
            result = closure_0.set(true);
            current = closure_1.current;
            item = current.forEach(() => {
              /* body not rendered: F141779 */
            });
            current1 = closure_1.current;
            spliceResult = current1.splice(0, closure_1.current.length);
            return;
          }
        }
        cResult[3] = sharedValue;
        cResult[4] = O;
      } else {
        class O {
          constructor() {
            result = closure_0.set(true);
            current = closure_1.current;
            item = current.forEach(() => {
              /* body not rendered: F141779 */
            });
            current1 = closure_1.current;
            spliceResult = current1.splice(0, closure_1.current.length);
            return;
          }
        }
      }
      O = tmp5;
      if (cResult[5] !== tmp5) {
        class I {
          constructor() {
            fn = function n() {
              /* body not rendered: F141780 */
            };
            obj = {
              withTiming: closure_0(closure_1[2]).withTiming,
              Easing: closure_0(closure_1[5]).Easing,
              OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION: c4,
              withDelay: closure_0(closure_1[5]).withDelay,
              runOnJS: closure_0(closure_1[5]).runOnJS,
              handleMountAnimationComplete: closure_2,
            };
            fn.__closure = obj;
            fn.__workletHash = 1048348699475;
            fn.__initData = closure_5;
            return fn;
          }
        }
        cResult[5] = tmp5;
        cResult[6] = I;
      } else {
        class I {
          constructor() {
            fn = function n() {
              /* body not rendered: F141780 */
            };
            obj = {
              withTiming: closure_0(closure_1[2]).withTiming,
              Easing: closure_0(closure_1[5]).Easing,
              OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION: c4,
              withDelay: closure_0(closure_1[5]).withDelay,
              runOnJS: closure_0(closure_1[5]).runOnJS,
              handleMountAnimationComplete: closure_2,
            };
            fn.__closure = obj;
            fn.__workletHash = 1048348699475;
            fn.__initData = closure_5;
            return fn;
          }
        }
      }
      const first1 = O(react.useState(I), 1)[0];
      if (cResult[7] === first1) {
        class I {
          constructor() {
            fn = function n() {
              /* body not rendered: F141780 */
            };
            obj = {
              withTiming: closure_0(closure_1[2]).withTiming,
              Easing: closure_0(closure_1[5]).Easing,
              OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION: c4,
              withDelay: closure_0(closure_1[5]).withDelay,
              runOnJS: closure_0(closure_1[5]).runOnJS,
              handleMountAnimationComplete: closure_2,
            };
            fn.__closure = obj;
            fn.__workletHash = 1048348699475;
            fn.__initData = closure_5;
            return fn;
          }
        }
        return obj4;
      }
      obj4 = { EnteringAnimation: first1, registerAnimationCompleteCallback: T };
      cResult[7] = first1;
      cResult[8] = T;
      cResult[9] = obj4;
    }
  : () => {
      let closure_1;
      let sharedValue;
      let obj = sharedValue(4612);
      sharedValue = obj.useSharedValue(false);
      dependencyMap = react.useRef([]);
      let items = [sharedValue];
      handleMountAnimationComplete = react.useCallback(() => {
        const result = sharedValue.set(true);
        const current = closure_1.current;
        const item = current.forEach((fn) => fn());
        const current1 = closure_1.current;
        current1.splice(0, closure_1.current.length);
      }, items);
      let obj2 = {
        EnteringAnimation: handleMountAnimationComplete(
          react.useState(() => {
            const fn = function n() {
              let Easing;
              let items;
              let items1;
              let obj4;
              let obj5;
              let obj7;
              let obj8;
              let withTimingResult1;
              const tmp = sharedValue(closure_1[2]);
              let obj = { duration: 250, easing: Easing.bezier(0.25, 1.75, 0.25, 1.25) };
              const withTiming = tmp.withTiming;
              Easing = sharedValue(closure_1[5]).Easing;
              const obj3 = {
                animations: obj4,
                initialValues: obj8,
                callback() {
                  const obj = sharedValue(closure_2_1[5]);
                  obj.runOnJS(closure_1_2)();
                },
              };
              const withTimingResult = withTiming(1, obj);
              obj4 = { opacity: obj5.withDelay(200, withTimingResult1), transform: items };
              const obj2 = sharedValue(closure_1[2]);
              withTimingResult1 = obj2.withTiming(1, { duration: 200 });
              obj5 = sharedValue(closure_1[5]);
              const obj6 = { scale: obj7.withDelay(200, withTimingResult) };
              items = [obj6];
              obj8 = { opacity: 0, transform: items1 };
              items1 = [{ scale: 0.92 }];
              obj7 = sharedValue(closure_1[5]);
              return obj3;
            };
            let obj = {
              withTiming: timing.withTiming,
              Easing: ReanimatedRexport.Easing,
              OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION,
              withDelay: ReanimatedRexport.withDelay,
              runOnJS: ReanimatedRexport.runOnJS,
              handleMountAnimationComplete,
            };
            fn.__closure = obj;
            fn.__workletHash = 2494822375156;
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
      return obj2;
    };
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/command_view/hooks/useOptionAnimations.tsx",
);

export const OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION = 300;
export { LayoutAnimation };
export { ExitingAnimation };
export const useOptionEnteringAnimation = tmp2;
