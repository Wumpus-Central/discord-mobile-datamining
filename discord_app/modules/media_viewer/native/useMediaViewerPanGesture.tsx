// discord_app/modules/media_viewer/native/useMediaViewerPanGesture.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import LegacyBaseButton from "../../../../_runtime/06140_LegacyBaseButton.js";
import MediaViewerAnalyticsManager from "../MediaViewerAnalyticsManager.tsx";
import useVideoControls from "useVideoControls.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let __initData, __initData2, __initData3, _require, dependencyMap, set;

let closure_4 = {
  damping: 15,
  mass: 1,
  stiffness: 250,
  overshootClamping: true,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
};
let closure_5 = {
  code: "function useMediaViewerPanGestureTsx1(){const{runOnJS,handleClose}=this.__closure;runOnJS(handleClose)();}",
};
let closure_6 = {
  code: "function useMediaViewerPanGestureTsx2(){const{runOnJS,handleClose}=this.__closure;runOnJS(handleClose)();}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = {
  code: "function useMediaViewerPanGestureTsx3(){const{isInteracting,velocity,swipeVelocityThreshold,runOnJS,dismiss,translatePos,withSpring,SPRING_CONFIG}=this.__closure;isInteracting.set(false);const willClose=Math.abs(velocity.get())>swipeVelocityThreshold;if(willClose){runOnJS(dismiss)();}else{if(translatePos.get()!==0){translatePos.set(withSpring(0,{velocity:velocity.get(),...SPRING_CONFIG}));}}}",
};
let closure_8 = {
  code: "function useMediaViewerPanGestureTsx4(_,manager){const{enabled}=this.__closure;if(!enabled.get()){manager.fail();}}",
};
let closure_9 = {
  code: "function useMediaViewerPanGestureTsx5(t2){const{translatePos,start,velocity}=this.__closure;const{velocityY:velocityY,translationY:translationY}=t2;translatePos.set(translationY+start.get().y);velocity.set(velocityY);}",
};
let closure_10 = {
  code: "function useMediaViewerPanGestureTsx6(){const{start,translatePos,isInteracting}=this.__closure;start.set({x:0,y:translatePos.get()});isInteracting.set(true);}",
};
let closure_11 = {
  code: "function useMediaViewerPanGestureTsx7(){const{isInteracting,velocity,swipeVelocityThreshold,runOnJS,dismiss,translatePos,withSpring,SPRING_CONFIG}=this.__closure;isInteracting.set(false);const willClose=Math.abs(velocity.get())>swipeVelocityThreshold;if(willClose){runOnJS(dismiss)();}else if(translatePos.get()!==0){translatePos.set(withSpring(0,{velocity:velocity.get(),...SPRING_CONFIG}));}}",
};
let closure_12 = {
  code: "function useMediaViewerPanGestureTsx8(_,manager){const{enabled}=this.__closure;if(!enabled.get()){manager.fail();}}",
};
let closure_13 = {
  code: "function useMediaViewerPanGestureTsx9({velocityY:velocityY,translationY:translationY}){const{translatePos,start,velocity}=this.__closure;translatePos.set(translationY+start.get().y);velocity.set(velocityY);}",
};
let closure_14 = {
  code: "function useMediaViewerPanGestureTsx10(){const{start,translatePos,isInteracting}=this.__closure;start.set({x:0,y:translatePos.get()});isInteracting.set(true);}",
};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, swipeVelocityThreshold, arg2) => {
      let closure_0;
      let sharedValue;
      let tmp8;
      _require = arg0;
      let closure_1 = arg2;
      let obj = require("react");
      const cResult = obj.c(17);
      let obj2 = require("ReanimatedRexport");
      sharedValue = obj2.useSharedValue(false);
      const obj3 = require("ReanimatedRexport");
      const sharedValue1 = obj3.useSharedValue(false);
      const obj4 = require("ReanimatedRexport");
      const sharedValue2 = obj4.useSharedValue(0);
      const obj5 = require("ReanimatedRexport");
      const sharedValue3 = obj5.useSharedValue(0);
      const obj6 = require("ReanimatedRexport");
      const sharedValue4 = obj6.useSharedValue({ y: 0, x: 0 });
      const obj7 = require("ReanimatedRexport");
      const sharedValue5 = obj7.useSharedValue(true);
      if (cResult[0] !== arg2) {
        let fn = function c() {
          const obj = useVideoControls;
          obj.tryPauseCurrentVideo();
          if (closure_1 != null) {
            closure_1();
          }
          const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
          MediaViewerAnalytics.markSessionCompleted();
        };
        cResult[0] = arg2;
        cResult[1] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[1];
      }
      closure_5 = tmp8;
      if (cResult[2] === arg0) {
        if (cResult[3] === tmp8) {
          if (cResult[4] === sharedValue) {
            if (cResult[5] === sharedValue2) {
              let tmp9;
              if (cResult[6] === sharedValue3) {
                tmp9 = cResult[7];
              }
              if (cResult[8] === tmp9) {
                if (cResult[9] === sharedValue) {
                  if (cResult[10] === sharedValue1) {
                    if (cResult[11] === sharedValue5) {
                      if (cResult[12] === sharedValue4) {
                        if (cResult[13] === swipeVelocityThreshold) {
                          if (cResult[14] === sharedValue2) {
                            let tmp11;
                            if (cResult[15] === sharedValue3) {
                              tmp11 = cResult[16];
                            }
                            return tmp11;
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj8 = {
                velocity: sharedValue3,
                isClosing: sharedValue,
                isInteracting: sharedValue1,
                overlayEnabled: sharedValue5,
                translatePos: sharedValue2,
                swipeVelocityThreshold,
                dismiss: tmp9,
                start: sharedValue4,
              };
              cResult[8] = tmp9;
              cResult[9] = sharedValue;
              cResult[10] = sharedValue1;
              cResult[11] = sharedValue5;
              cResult[12] = sharedValue4;
              cResult[13] = swipeVelocityThreshold;
              cResult[14] = sharedValue2;
              cResult[15] = sharedValue3;
              cResult[16] = obj8;
              tmp11 = obj8;
            }
          }
        }
      }
      const fn2 = function w() {
        let tmp2;
        const result = sharedValue.set(true);
        if (sharedValue3.get() < 0) {
          tmp2 = -closure_0;
        } else {
          tmp2 = closure_0;
        }
        set = sharedValue2.set;
        const withSpring = spring.withSpring;
        const obj2 = { velocity: sharedValue3.get() };
        const merged = Object.assign(closure_4);
        const fn = function o() {
          const obj = closure_0(sharedValue[3]);
          obj.runOnJS(closure_1_5)();
        };
        fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleClose: __initData };
        fn.__workletHash = 7033730772994;
        fn.__initData = __initData;
        ({ runOnJS: ReanimatedRexport.runOnJS, handleClose: __initData });
        const result1 = set(withSpring(tmp2, obj2, "respect-motion-settings", fn));
      };
      cResult[2] = arg0;
      cResult[3] = tmp8;
      cResult[4] = sharedValue;
      cResult[5] = sharedValue2;
      cResult[6] = sharedValue3;
      cResult[7] = fn2;
      tmp9 = fn2;
    }
  : (arg0, swipeVelocityThreshold, arg2) => {
      let closure_0;
      let closure_2;
      _require = arg0;
      dependencyMap = arg2;
      let obj = require("ReanimatedRexport");
      const sharedValue = obj.useSharedValue(false);
      let obj2 = require("ReanimatedRexport");
      const sharedValue1 = obj2.useSharedValue(false);
      const obj3 = require("ReanimatedRexport");
      const sharedValue2 = obj3.useSharedValue(0);
      const obj4 = require("ReanimatedRexport");
      const sharedValue3 = obj4.useSharedValue(0);
      const obj5 = require("ReanimatedRexport");
      const sharedValue4 = obj5.useSharedValue({ y: 0, x: 0 });
      const obj6 = require("ReanimatedRexport");
      const sharedValue5 = obj6.useSharedValue(true);
      const items = [arg2];
      const handleClose = sharedValue.useCallback(() => {
        const obj = useVideoControls;
        obj.tryPauseCurrentVideo();
        if (closure_2 != null) {
          closure_2();
        }
        const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
        MediaViewerAnalytics.markSessionCompleted();
      }, items);
      const items1 = [arg0, handleClose, sharedValue, sharedValue2, sharedValue3];
      const callback1 = sharedValue.useCallback(() => {
        let tmp2;
        const result = sharedValue.set(true);
        if (sharedValue3.get() < 0) {
          tmp2 = -closure_0;
        } else {
          tmp2 = closure_0;
        }
        set = sharedValue2.set;
        const withSpring = spring.withSpring;
        const obj2 = { velocity: sharedValue3.get() };
        const merged = Object.assign(closure_4);
        const fn = function t() {
          const obj = closure_0(closure_2[3]);
          obj.runOnJS(handleClose)();
        };
        fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleClose };
        fn.__workletHash = 14917705602881;
        fn.__initData = __initData;
        ({ runOnJS: ReanimatedRexport.runOnJS, handleClose });
        const result1 = set(withSpring(tmp2, obj2, "respect-motion-settings", fn));
      }, items1);
      const items2 = [
        sharedValue3,
        sharedValue,
        sharedValue1,
        sharedValue2,
        swipeVelocityThreshold,
        callback1,
        sharedValue4,
        sharedValue5,
      ];
      return sharedValue.useMemo(
        () => ({
          velocity: sharedValue3,
          isClosing: sharedValue,
          isInteracting: sharedValue1,
          overlayEnabled: sharedValue5,
          translatePos: sharedValue2,
          swipeVelocityThreshold,
          dismiss: callback1,
          start: sharedValue4,
        }),
        items2,
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (swipeVelocityThreshold, enabled) => {
      let SPRING_CONFIG;
      let velocity;
      _require = enabled;
      let obj = require("react");
      const cResult = obj.c(12);
      swipeVelocityThreshold = swipeVelocityThreshold.swipeVelocityThreshold;
      const tmp2 = velocity;
      velocity = swipeVelocityThreshold.velocity;
      const isInteracting = swipeVelocityThreshold.isInteracting;
      const translatePos = swipeVelocityThreshold.translatePos;
      const start = swipeVelocityThreshold.start;
      const tmp4 = swipeVelocityThreshold(velocity[7])(swipeVelocityThreshold.dismiss);
      const dismiss = tmp4;
      const tmp = _require;
      if (cResult[0] === tmp4) {
        if (cResult[1] === enabled) {
          if (cResult[2] === isInteracting) {
            if (cResult[3] === start) {
              if (cResult[4] === swipeVelocityThreshold) {
                if (cResult[5] === translatePos) {
                  let tmp5;
                  let tmp7;
                  let tmp9;
                  let tmp10;
                  if (cResult[6] === velocity) {
                    tmp5 = cResult[7];
                  }
                  __initData = tmp5;
                  const _Symbol = Symbol;
                  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
                    let Gesture = tmp(tmp2[8]).Gesture;
                    const NativeResult = Gesture.Native();
                    cResult[8] = NativeResult;
                    tmp7 = NativeResult;
                  } else {
                    tmp7 = cResult[8];
                  }
                  __initData2 = tmp7;
                  const _Symbol2 = Symbol;
                  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                    const items = [];
                    cResult[9] = items;
                    tmp9 = items;
                  } else {
                    tmp9 = cResult[9];
                  }
                  __initData3 = tmp9;
                  if (cResult[10] !== tmp5) {
                    let obj2 = {
                      panGestureGenerator(arg0) {
                        if (null != __initData3[arg0]) {
                          return __initData3[arg0];
                        } else {
                          const obj = __initData();
                          __initData3[arg0] = obj.blocksExternalGesture(__initData2);
                          return __initData3[arg0];
                        }
                      },
                      nativeGesture: tmp7,
                    };
                    cResult[10] = tmp5;
                    cResult[11] = obj2;
                    tmp10 = obj2;
                  } else {
                    tmp10 = cResult[11];
                  }
                  return tmp10;
                }
              }
            }
          }
        }
      }
      let fn = function o() {
        const Gesture = LegacyBaseButton.Gesture;
        const PanResult = Gesture.Pan();
        const maxPointersResult = PanResult.maxPointers(1);
        const activeOffsetYResult = maxPointersResult.activeOffsetY([-10, 10]);
        const failOffsetXResult = activeOffsetYResult.failOffsetX([-10, 10]);
        class P {
          constructor() {
            const point = { x: 0, y: SPRING_CONFIG.get() };
            const result = start.set(point);
            const result1 = isInteracting.set(true);
          }
        }
        const obj = { start, translatePos, isInteracting };
        P.__closure = obj;
        P.__workletHash = 4140119720326;
        P.__initData = __initData4;
        const fn = function l(arg0) {
          let translationY;
          let velocityY;
          ({ velocityY, translationY } = arg0);
          const result = SPRING_CONFIG.set(translationY + start.get().y);
          const result1 = velocity.set(velocityY);
        };
        let obj2 = { translatePos, start, velocity };
        fn.__closure = obj2;
        fn.__workletHash = 10737644915745;
        fn.__initData = __initData3;
        const fn2 = function o(arg0, fail) {
          if (!enabled.get()) {
            fail.fail();
          }
        };
        let obj3 = { enabled };
        fn2.__closure = obj3;
        fn2.__workletHash = 5688965063973;
        fn2.__initData = __initData2;
        const onStartResult = failOffsetXResult.onStart(P);
        const fn3 = function t() {
          const result = isInteracting.set(false);
          if (Math.abs(closure_1_2.get()) > swipeVelocityThreshold) {
            const obj3 = enabled(velocity[3]);
            obj3.runOnJS(dismiss)();
          } else if (0 !== SPRING_CONFIG.get()) {
            set = SPRING_CONFIG.set;
            const obj2 = { velocity: closure_1_2.get() };
            const withSpring = enabled(velocity[6]).withSpring;
            enabled(velocity[6]);
            const merged = Object.assign(translatePos);
            const result1 = set(withSpring(0, obj2));
          }
        };
        const onUpdateResult = onStartResult.onUpdate(fn);
        const onTouchesDownResult = onUpdateResult.onTouchesDown(fn2);
        fn3.__closure = {
          isInteracting,
          velocity,
          swipeVelocityThreshold,
          runOnJS: ReanimatedRexport.runOnJS,
          dismiss,
          translatePos,
          withSpring: spring.withSpring,
          SPRING_CONFIG,
        };
        fn3.__workletHash = 10674355966391;
        fn3.__initData = __initData;
        ({
          isInteracting,
          velocity,
          swipeVelocityThreshold,
          runOnJS: ReanimatedRexport.runOnJS,
          dismiss,
          translatePos,
          withSpring: spring.withSpring,
          SPRING_CONFIG,
        });
        return onTouchesDownResult.onEnd(fn3);
      };
      cResult[0] = tmp4;
      cResult[1] = enabled;
      cResult[2] = isInteracting;
      cResult[3] = start;
      cResult[4] = swipeVelocityThreshold;
      cResult[5] = translatePos;
      cResult[6] = velocity;
      cResult[7] = fn;
      tmp5 = fn;
    }
  : (swipeVelocityThreshold, enabled) => {
      let SPRING_CONFIG;
      swipeVelocityThreshold = swipeVelocityThreshold.swipeVelocityThreshold;
      const velocity = swipeVelocityThreshold.velocity;
      const isInteracting = swipeVelocityThreshold.isInteracting;
      const translatePos = swipeVelocityThreshold.translatePos;
      const start = swipeVelocityThreshold.start;
      const tmp = velocity(isInteracting[7])(swipeVelocityThreshold.dismiss);
      const dismiss = tmp;
      const items = [tmp, enabled, isInteracting, start, swipeVelocityThreshold, translatePos, velocity];
      const callback = translatePos.useCallback(() => {
        const Gesture = LegacyBaseButton.Gesture;
        const PanResult = Gesture.Pan();
        const maxPointersResult = PanResult.maxPointers(1);
        const activeOffsetYResult = maxPointersResult.activeOffsetY([-10, 10]);
        const failOffsetXResult = activeOffsetYResult.failOffsetX([-10, 10]);
        class V {
          constructor() {
            const point = { x: 0, y: translatePos.get() };
            const result = SPRING_CONFIG.set(point);
            const result1 = isInteracting.set(true);
          }
        }
        const obj = { start, translatePos, isInteracting };
        V.__closure = obj;
        V.__workletHash = 8081304250737;
        V.__initData = __initData4;
        const onStartResult = failOffsetXResult.onStart(V);
        class P {
          constructor(arg0) {
            let translationY;
            let velocityY;
            ({ velocityY, translationY } = arg0);
            const result = translatePos.set(translationY + SPRING_CONFIG.get().y);
            const result1 = velocity.set(velocityY);
          }
        }
        let obj2 = { translatePos, start, velocity };
        P.__closure = obj2;
        P.__workletHash = 11709907171278;
        P.__initData = __initData3;
        const fn = function _(arg0, fail) {
          if (!enabled.get()) {
            fail.fail();
          }
        };
        let obj3 = { enabled };
        fn.__closure = obj3;
        fn.__workletHash = 982618860329;
        fn.__initData = __initData2;
        const fn2 = function t() {
          const result = closure_1_2.set(false);
          if (Math.abs(velocity.get()) > closure_1_0) {
            const obj3 = swipeVelocityThreshold(isInteracting[3]);
            obj3.runOnJS(dismiss)();
          } else if (0 !== translatePos.get()) {
            set = translatePos.set;
            const obj2 = { velocity: velocity.get() };
            const withSpring = swipeVelocityThreshold(isInteracting[6]).withSpring;
            swipeVelocityThreshold(isInteracting[6]);
            const merged = Object.assign(start);
            const result1 = set(withSpring(0, obj2));
          }
        };
        const onUpdateResult = onStartResult.onUpdate(P);
        const onTouchesDownResult = onUpdateResult.onTouchesDown(fn);
        fn2.__closure = {
          isInteracting,
          velocity,
          swipeVelocityThreshold,
          runOnJS: ReanimatedRexport.runOnJS,
          dismiss,
          translatePos,
          withSpring: spring.withSpring,
          SPRING_CONFIG,
        };
        fn2.__workletHash = 1446317888277;
        fn2.__initData = __initData;
        ({
          isInteracting,
          velocity,
          swipeVelocityThreshold,
          runOnJS: ReanimatedRexport.runOnJS,
          dismiss,
          translatePos,
          withSpring: spring.withSpring,
          SPRING_CONFIG,
        });
        return onTouchesDownResult.onEnd(fn2);
      }, items);
      const items1 = [callback];
      return translatePos.useMemo(() => {
        const Gesture = swipeVelocityThreshold(isInteracting[8]).Gesture;
        const NativeResult = Gesture.Native();
        swipeVelocityThreshold = NativeResult;
        let closure_1 = [];
        let obj = {
          panGestureGenerator(arg0) {
            if (null != closure_1[arg0]) {
              return closure_1[arg0];
            } else {
              const obj = callback();
              closure_1[arg0] = obj.blocksExternalGesture(NativeResult);
              return closure_1[arg0];
            }
          },
          nativeGesture: NativeResult,
        };
        return obj;
      }, items1);
    };
let result = size.fileFinishedImporting("modules/media_viewer/native/useMediaViewerPanGesture.tsx");

export const useMediaViewerPanGestureConfig = tmp2;
export const useMediaViewerPanGesture = tmp3;
