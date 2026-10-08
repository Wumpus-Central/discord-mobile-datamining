// discord_app/modules/media_viewer/native/useMediaViewerPanGesture.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import LegacyBaseButton from "../../../../_runtime/06326_LegacyBaseButton.js";
import MediaViewerAnalyticsManager from "../MediaViewerAnalyticsManager.tsx";
import useVideoControls from "useVideoControls.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
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
fn(558);
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
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMediaViewerPanGestureConfig(arg0, swipeVelocityThreshold, arg2) {
      _require = arg0;
      closure_1 = arg2;
      const cResult = require("c").c(17);
      let obj = require("c");
      sharedValue = require("ReanimatedRexport").useSharedValue(false);
      let obj2 = require("ReanimatedRexport");
      const sharedValue1 = require("ReanimatedRexport").useSharedValue(false);
      let obj3 = require("ReanimatedRexport");
      const sharedValue2 = require("ReanimatedRexport").useSharedValue(0);
      let obj4 = require("ReanimatedRexport");
      const sharedValue3 = require("ReanimatedRexport").useSharedValue(0);
      const obj5 = require("ReanimatedRexport");
      const sharedValue4 = require("ReanimatedRexport").useSharedValue({ y: 0, x: 0 });
      const obj6 = require("ReanimatedRexport");
      const sharedValue5 = require("ReanimatedRexport").useSharedValue(true);
      if (cResult[0] !== arg2) {
        let fn = function u() {
          useVideoControls.tryPauseCurrentVideo();
          if (closure_1 != null) {
            closure_1();
          }
          const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
          MediaViewerAnalytics.markSessionCompleted();
        };
        cResult[0] = arg2;
        cResult[1] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[1];
      }
      closure_5 = tmp8;
      if (cResult[2] === arg0) {
        if (cResult[3] === tmp8) {
          if (cResult[4] === sharedValue) {
            if (cResult[5] === sharedValue2) {
              if (cResult[6] === sharedValue3) {
                let tmp9 = cResult[7];
              }
              if (cResult[8] === tmp9) {
                if (cResult[9] === sharedValue) {
                  if (cResult[10] === sharedValue1) {
                    if (cResult[11] === sharedValue5) {
                      if (cResult[12] === sharedValue4) {
                        if (cResult[13] === swipeVelocityThreshold) {
                          if (cResult[14] === sharedValue2) {
                            if (cResult[15] === sharedValue3) {
                              let tmp11 = cResult[16];
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
      class S {
        constructor() {
          result = closure_2.set(true);
          obj = closure_4;
          if (closure_4.get() < 0) {
            tmp3 = closure_0;
            tmp2 = -closure_0;
          } else {
            tmp2 = closure_0;
          }
          obj2 = closure_0(closure_2[6]);
          obj1 = { velocity: obj.get() };
          merged = Object.assign(closure_4);
          fn = function o() {
            closure_0(sharedValue[3]).runOnJS(closure_1_5)();
          };
          obj5 = { runOnJS: closure_0(closure_2[3]).runOnJS, handleClose: closure_5 };
          fn.__closure = obj5;
          fn.__workletHash = 7033730772994;
          fn.__initData = closure_5;
          result1 = closure_3.set(obj2.withSpring(tmp2, obj1, "respect-motion-settings", fn));
          return;
        }
      }
      cResult[2] = arg0;
      cResult[3] = tmp8;
      cResult[4] = sharedValue;
      cResult[5] = sharedValue2;
      cResult[6] = sharedValue3;
      cResult[7] = S;
      tmp9 = S;
    }
  : function useMediaViewerPanGestureConfig(arg0, swipeVelocityThreshold, arg2) {
      _require = arg0;
      dependencyMap = arg2;
      const sharedValue = require("ReanimatedRexport").useSharedValue(false);
      let obj = require("ReanimatedRexport");
      const sharedValue1 = require("ReanimatedRexport").useSharedValue(false);
      let obj2 = require("ReanimatedRexport");
      const sharedValue2 = require("ReanimatedRexport").useSharedValue(0);
      let obj3 = require("ReanimatedRexport");
      const sharedValue3 = require("ReanimatedRexport").useSharedValue(0);
      let obj4 = require("ReanimatedRexport");
      const sharedValue4 = require("ReanimatedRexport").useSharedValue({ y: 0, x: 0 });
      const obj5 = require("ReanimatedRexport");
      const sharedValue5 = require("ReanimatedRexport").useSharedValue(true);
      const items = [arg2];
      const handleClose = sharedValue.useCallback(() => {
        useVideoControls.tryPauseCurrentVideo();
        if (closure_2 != null) {
          closure_2();
        }
        const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
        MediaViewerAnalytics.markSessionCompleted();
      }, items);
      const items1 = [arg0, handleClose, sharedValue, sharedValue2, sharedValue3];
      const callback1 = sharedValue.useCallback(() => {
        const result = sharedValue.set(true);
        if (sharedValue3.get() < 0) {
          let tmp2 = -closure_0;
        } else {
          tmp2 = closure_0;
        }
        const obj2 = spring;
        const merged = Object.assign(closure_4);
        const fn = function t() {
          closure_0(closure_2[3]).runOnJS(handleClose)();
        };
        const obj3 = { velocity: sharedValue3.get() };
        fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleClose };
        fn.__workletHash = 14917705602881;
        fn.__initData = __initData;
        const result1 = sharedValue2.set(obj2.withSpring(tmp2, obj3, "respect-motion-settings", fn));
        const obj4 = { runOnJS: ReanimatedRexport.runOnJS, handleClose };
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/useMediaViewerPanGesture.tsx");

export const useMediaViewerPanGestureConfig = tmp2;
export const useMediaViewerPanGesture = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMediaViewerPanGesture(swipeVelocityThreshold, enabled) {
      _require = enabled;
      const cResult = require("c").c(12);
      swipeVelocityThreshold = swipeVelocityThreshold.swipeVelocityThreshold;
      velocity = swipeVelocityThreshold.velocity;
      const isInteracting = swipeVelocityThreshold.isInteracting;
      const translatePos = swipeVelocityThreshold.translatePos;
      const start = swipeVelocityThreshold.start;
      const tmp4 = swipeVelocityThreshold(velocity[7])(swipeVelocityThreshold.dismiss);
      const dismiss = tmp4;
      if (cResult[0] === tmp4) {
        if (cResult[1] === enabled) {
          if (cResult[2] === isInteracting) {
            if (cResult[3] === start) {
              if (cResult[4] === swipeVelocityThreshold) {
                if (cResult[5] === translatePos) {
                  if (cResult[6] === velocity) {
                    let tmp5 = cResult[7];
                  }
                  __initData = tmp5;
                  const _Symbol = Symbol;
                  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
                    let Gesture = require("LegacyBaseButton").Gesture;
                    const NativeResult = Gesture.Native();
                    cResult[8] = NativeResult;
                    let tmp7 = NativeResult;
                  } else {
                    tmp7 = cResult[8];
                  }
                  __initData2 = tmp7;
                  const _Symbol2 = Symbol;
                  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                    const items = [];
                    cResult[9] = items;
                    let tmp9 = items;
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
                          __initData3[arg0] = __initData().blocksExternalGesture(closure_8);
                          return __initData3[arg0];
                        }
                      },
                      nativeGesture: tmp7,
                    };
                    cResult[10] = tmp5;
                    cResult[11] = obj2;
                    let tmp10 = obj2;
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
        const maxPointersResult = Gesture.Pan().maxPointers(1);
        const activeOffsetYResult = Gesture.Pan().maxPointers(1).activeOffsetY([-10, 10]);
        class P {
          constructor() {
            point = { x: 0, y: closure_1_4.get() };
            result = closure_1_5.set(point);
            result1 = closure_1_3.set(true);
            return;
          }
        }
        P.__closure = { start, translatePos, isInteracting };
        P.__workletHash = 4140119720326;
        P.__initData = __initData4;
        const failOffsetXResult = Gesture.Pan().maxPointers(1).activeOffsetY([-10, 10]).failOffsetX([-10, 10]);
        const obj = { start, translatePos, isInteracting };
        const fn = function l(arg0) {
          ({ velocityY, translationY } = arg0);
          const result = SPRING_CONFIG.set(translationY + start.get().y);
          const result1 = velocity.set(velocityY);
        };
        fn.__closure = { translatePos, start, velocity };
        fn.__workletHash = 10737644915745;
        fn.__initData = __initData3;
        const obj2 = { translatePos, start, velocity };
        const onStartResult = Gesture.Pan().maxPointers(1).activeOffsetY([-10, 10]).failOffsetX([-10, 10]).onStart(P);
        const fn2 = function o(arg0, fail) {
          if (!enabled.get()) {
            fail.fail();
          }
        };
        fn2.__closure = { enabled };
        fn2.__workletHash = 5688965063973;
        fn2.__initData = __initData2;
        let obj3 = { enabled };
        const onUpdateResult = Gesture.Pan()
          .maxPointers(1)
          .activeOffsetY([-10, 10])
          .failOffsetX([-10, 10])
          .onStart(P)
          .onUpdate(fn);
        const fn3 = function t() {
          const result = isInteracting.set(false);
          if (Math.abs(closure_1_2.get()) > swipeVelocityThreshold) {
            closure_0(velocity[3]).runOnJS(dismiss)();
            const obj5 = closure_0(velocity[3]);
          } else if (0 !== SPRING_CONFIG.get()) {
            const obj4 = { velocity: closure_1_2.get() };
            const merged = Object.assign(translatePos);
            const result1 = SPRING_CONFIG.set(closure_0(velocity[6]).withSpring(0, obj4));
            const obj3 = closure_0(velocity[6]);
          }
        };
        const onTouchesDownResult = Gesture.Pan()
          .maxPointers(1)
          .activeOffsetY([-10, 10])
          .failOffsetX([-10, 10])
          .onStart(P)
          .onUpdate(fn)
          .onTouchesDown(fn2);
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
  : function useMediaViewerPanGesture(swipeVelocityThreshold, enabled) {
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
        const maxPointersResult = Gesture.Pan().maxPointers(1);
        const activeOffsetYResult = Gesture.Pan().maxPointers(1).activeOffsetY([-10, 10]);
        class G {
          constructor() {
            point = { x: 0, y: closure_1_3.get() };
            result = closure_1_4.set(point);
            result1 = closure_1_2.set(true);
            return;
          }
        }
        G.__closure = { start, translatePos, isInteracting };
        G.__workletHash = 8081304250737;
        G.__initData = __initData4;
        const failOffsetXResult = Gesture.Pan().maxPointers(1).activeOffsetY([-10, 10]).failOffsetX([-10, 10]);
        const obj = { start, translatePos, isInteracting };
        class P {
          constructor(arg0) {
            ({ velocityY, translationY } = arg0);
            result = closure_1_3.set(translationY + closure_1_4.get().y);
            result1 = closure_1_1.set(velocityY);
            return;
          }
        }
        P.__closure = { translatePos, start, velocity };
        P.__workletHash = 11709907171278;
        P.__initData = __initData3;
        const obj2 = { translatePos, start, velocity };
        const onStartResult = Gesture.Pan().maxPointers(1).activeOffsetY([-10, 10]).failOffsetX([-10, 10]).onStart(G);
        const fn = function _(arg0, fail) {
          if (!enabled.get()) {
            fail.fail();
          }
        };
        fn.__closure = { enabled };
        fn.__workletHash = 982618860329;
        fn.__initData = __initData2;
        let obj3 = { enabled };
        const onUpdateResult = Gesture.Pan()
          .maxPointers(1)
          .activeOffsetY([-10, 10])
          .failOffsetX([-10, 10])
          .onStart(G)
          .onUpdate(P);
        const fn2 = function t() {
          const result = closure_1_2.set(false);
          if (Math.abs(velocity.get()) > closure_1_0) {
            swipeVelocityThreshold(isInteracting[3]).runOnJS(dismiss)();
            const obj5 = swipeVelocityThreshold(isInteracting[3]);
          } else if (0 !== translatePos.get()) {
            const obj4 = { velocity: velocity.get() };
            const merged = Object.assign(start);
            const result1 = translatePos.set(swipeVelocityThreshold(isInteracting[6]).withSpring(0, obj4));
            const obj3 = swipeVelocityThreshold(isInteracting[6]);
          }
        };
        const onTouchesDownResult = Gesture.Pan()
          .maxPointers(1)
          .activeOffsetY([-10, 10])
          .failOffsetX([-10, 10])
          .onStart(G)
          .onUpdate(P)
          .onTouchesDown(fn);
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
        return onTouchesDownResult.onEnd(fn2);
      }, items);
      const items1 = [callback];
      return translatePos.useMemo(() => {
        const Gesture = swipeVelocityThreshold(isInteracting[8]).Gesture;
        const NativeResult = Gesture.Native();
        swipeVelocityThreshold = NativeResult;
        dependencyMap = [];
        return {
          panGestureGenerator(arg0) {
            if (null != dependencyMap[arg0]) {
              return dependencyMap[arg0];
            } else {
              dependencyMap[arg0] = callback().blocksExternalGesture(NativeResult);
              return dependencyMap[arg0];
            }
          },
          nativeGesture: NativeResult,
        };
      }, items1);
    };
