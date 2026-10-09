// discord_app/modules/activities/panel/native/ActivityPanelFocusedView.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import EmbeddedActivityViewDefault from "../../native/EmbeddedActivityView.tsx";
import ActivityPanelStateContextDefault from "ActivityPanelStateContext.tsx";
import ActivityPanelHeaderDefault from "ActivityPanelHeader.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import EmbeddedActivitiesStore from "../../EmbeddedActivitiesStore.tsx";

const require = globalThis.__r;

require = fn;
const ActivityLayoutMode = fn(2024).ActivityLayoutMode;
const ActivityPanelConstants = fn(6074);
({
  ACTIVITY_LAYOUT_PHYSICS_GESTURE: closure_8,
  ACTIVITY_LAYOUT_PHYSICS_DEFAULT: closure_9,
  ActivityPanelModes: c10,
} = ActivityPanelConstants);
const ActivityPanelNativeConstants = fn(17633);
({
  DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG: closure_11,
  DEFAULT_PORTRAIT_LETTERBOX_CONFIG: closure_12,
  DEFAULT_LANDSCAPE_PILLERBOX_CONFIG: map1,
} = ActivityPanelNativeConstants);
const ThemeTypes = fn(1085).ThemeTypes;
const IS_IOS = fn(11926).IS_IOS;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const REDUCED_MOTION_TIMING = { duration: 300 };
const createStyles = fn(5091);
let obj = {
  wrapper: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  },
  shade: null,
};
let obj4 = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj4.backgroundColor = nativeDefault.colors.BLACK;
obj.shade = obj4;
let closure_19 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useBaseActivityPanelFocusedView(context) {
      const cResult = c.c(6);
      let right = useSafeAreaInsetsDefault();
      const wrapperDimensions = noop.useContext(context.context).wrapperDimensions;
      const isLandscape = wrapperDimensions.isLandscape;
      let isWindowLandscape = !isLandscape;
      if (!isLandscape) {
        isWindowLandscape = wrapperDimensions.isWindowLandscape;
      }
      const tmp3 = wrapperDimensions.isLandscape && !wrapperDimensions.isWindowLandscape ? __initData : closure_1_11;
      if (cResult[0] === right.right) {
        if (cResult[1] === isWindowLandscape) {
          if (cResult[3] === cResult[2]) {
            if (cResult[4] === tmp3) {
              let tmp6 = cResult[5];
            }
            return tmp6;
          }
          const obj2 = { portraitSafeAreasConfig: tmp3, landscapeSafeAreasConfig: cResult[2] };
          cResult[3] = cResult[2];
          cResult[4] = tmp3;
          cResult[5] = obj2;
          tmp6 = obj2;
        }
      }
      if (isWindowLandscape) {
        let obj3 = __initData2;
      } else {
        obj3 = { right: null };
        const obj4 = { disable: false, override: null };
        const _Math = Math;
        obj4.override = Math.max(64, right.right);
        obj3.right = obj4;
      }
      right = right.right;
      cResult[0] = right;
      cResult[1] = isWindowLandscape;
      cResult[2] = obj3;
    }
  : function useBaseActivityPanelFocusedView(context) {
      let isWindowLandscape;
      const tmp = isWindowLandscape(1631)();
      const right = tmp;
      const wrapperDimensions = noop.useContext(context.context).wrapperDimensions;
      const isLandscape = wrapperDimensions.isLandscape;
      isWindowLandscape = !isLandscape;
      if (!isLandscape) {
        isWindowLandscape = wrapperDimensions.isWindowLandscape;
      }
      let obj2 = {
        portraitSafeAreasConfig:
          wrapperDimensions.isLandscape && !wrapperDimensions.isWindowLandscape ? closure_12 : closure_11,
        landscapeSafeAreasConfig: null,
      };
      const items = [tmp.right, isWindowLandscape];
      obj2.landscapeSafeAreasConfig = noop.useMemo(() => {
        if (isWindowLandscape) {
          let obj = __initData2;
        } else {
          obj = { right: null };
          const obj2 = { disable: false, override: null };
          const _Math = Math;
          obj2.override = Math.max(64, right.right);
          obj.right = obj2;
        }
        return obj;
      }, items);
      return obj2;
    };
let closure_20 = tmp6;
const __initData = {
  code: 'function ActivityPanelFocusedViewTsx1(){const{wrapperDimensions,lg,IS_IOS,animatedKeyboardHeight,windowDimensions,safeArea,shown,wrapperOffset,transitionState,TransitionStates,runOnJS,transitionCleanUp,reduceMotion,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const topBorderRadius=!wrapperDimensions.isWindowLandscape?lg:0;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const width=windowDimensions.width;const height=windowDimensions.height-keyboardHeight-(!wrapperDimensions.isWindowLandscape?safeArea.top:0);const y=shown.get()?wrapperOffset.get().y:windowDimensions.height;const transitionComplete=function transitionComplete(t4){const finished=t4===undefined?false:t4;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}};const targetOpacity=reduceMotion&&shown.get()?1-wrapperOffset.get().y/windowDimensions.height:0;return{opacity:reduceMotion?withTiming(targetOpacity,REDUCED_MOTION_TIMING,shown.get()&&wrapperOffset.get().gestureActive?"animate-never":"animate-always",transitionComplete):1,transform:[{translateY:!reduceMotion?withSpring(y,wrapperOffset.get().gestureActive&&transitionState!==TransitionStates.YEETED?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,"animate-always",transitionComplete):0}],top:!wrapperDimensions.isWindowLandscape?safeArea.top:0,width:width,height:height,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius};}',
};
let closure_22 = {
  code: "function transitionComplete_ActivityPanelFocusedViewTsx2(t4){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;var finished=t4===undefined?false:t4;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}",
};
const __initData2 = {
  code: "function ActivityPanelFocusedViewTsx3(){const{wrapperOffset,shown,windowDimensions,withSpring,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const opacity=function(){if(!wrapperOffset.get().gestureActive){return shown.get()?1:0;}return 1-wrapperOffset.get().y/windowDimensions.height;}();return{opacity:withSpring(opacity,ACTIVITY_LAYOUT_PHYSICS_DEFAULT)};}",
};
const __initData3 = {
  code: "function ActivityPanelFocusedViewTsx4(){const{IS_IOS,animatedKeyboardHeight,wrapperDimensions}=this.__closure;const keyboardHeight_0=IS_IOS?animatedKeyboardHeight.get():0;return{width:wrapperDimensions.width,height:wrapperDimensions.height-keyboardHeight_0};}",
};
const __initData4 = {
  code: "function ActivityPanelFocusedViewTsx5(){const{wrapperDimensions,lg,IS_IOS,animatedKeyboardHeight,windowDimensions,safeArea,shown,wrapperOffset,transitionState,TransitionStates,runOnJS,transitionCleanUp,reduceMotion,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const topBorderRadius=!wrapperDimensions.isWindowLandscape?lg:0;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const width=windowDimensions.width;const height=windowDimensions.height-keyboardHeight-(!wrapperDimensions.isWindowLandscape?safeArea.top:0);const y=shown.get()?wrapperOffset.get().y:windowDimensions.height;function transitionComplete(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}const targetOpacity=reduceMotion&&shown.get()?1-wrapperOffset.get().y/windowDimensions.height:0;return{opacity:reduceMotion?withTiming(targetOpacity,REDUCED_MOTION_TIMING,shown.get()&&wrapperOffset.get().gestureActive?'animate-never':'animate-always',transitionComplete):1,transform:[{translateY:!reduceMotion?withSpring(y,wrapperOffset.get().gestureActive&&transitionState!==TransitionStates.YEETED?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',transitionComplete):0}],top:!wrapperDimensions.isWindowLandscape?safeArea.top:0,width:width,height:height,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius};}",
};
let closure_26 = {
  code: "function transitionComplete_ActivityPanelFocusedViewTsx6(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}",
};
const __initData5 = {
  code: "function ActivityPanelFocusedViewTsx7(){const{wrapperOffset,shown,windowDimensions,withSpring,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const opacity=function(){if(!wrapperOffset.get().gestureActive){return shown.get()?1:0;}return 1-wrapperOffset.get().y/windowDimensions.height;}();return{opacity:withSpring(opacity,ACTIVITY_LAYOUT_PHYSICS_DEFAULT)};}",
};
const __initData6 = {
  code: "function ActivityPanelFocusedViewTsx8(){const{IS_IOS,animatedKeyboardHeight,wrapperDimensions}=this.__closure;const keyboardHeight_0=IS_IOS?animatedKeyboardHeight.get():0;return{width:wrapperDimensions.width,height:wrapperDimensions.height-keyboardHeight_0};}",
};
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BaseActivityPanelFocusedView(transitionCleanUp) {
      const cResult = transitionState(updateActivityPanelModeToPIP[14]).c(24);
      ({ header, transitionState } = transitionCleanUp);
      transitionCleanUp = transitionCleanUp.transitionCleanUp;
      updateActivityPanelModeToPIP = transitionCleanUp.updateActivityPanelModeToPIP;
      const context = transitionCleanUp.context;
      ({ children, hasActivity } = transitionCleanUp);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [AccessibilityStore];
        const fn = function c() {
          return styles.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let obj = transitionState(updateActivityPanelModeToPIP[14]);
      const stateFromStores = transitionState(updateActivityPanelModeToPIP[16]).useStateFromStores(tmp4, tmp5);
      const tmp8 = closure_19();
      const tmp10 = transitionCleanUp(updateActivityPanelModeToPIP[17])();
      AccessibilityStore = tmp10;
      const tmp11 = transitionCleanUp(updateActivityPanelModeToPIP[15])();
      closure_5 = tmp11;
      const context1 = stateFromStores.useContext(context);
      const wrapperDimensions = context1.wrapperDimensions;
      const wrapperOffset = context1.wrapperOffset;
      if (cResult[2] === context) {
        if (cResult[3] === transitionState) {
          let tmp13 = cResult[4];
        }
        const lockedWebView = transitionState(tmp2[18]).useLockedWebView(tmp13);
        const shown = lockedWebView.shown;
        const tmp15 = tmp9(tmp2[19])();
        ACTIVITY_LAYOUT_PHYSICS_DEFAULT = tmp15;
        const lg = tmp9(tmp2[12]).radii.lg;
        const tmpResult5 = transitionState(tmp2[18]);
        const fn2 = function k() {
          let num = 0;
          if (!wrapperDimensions.isWindowLandscape) {
            num = lg;
          }
          let num2 = 0;
          if (IS_IOS) {
            num2 = closure_9.get();
          }
          let num3 = 0;
          const diff = styles.height - num2;
          if (!wrapperDimensions.isWindowLandscape) {
            num3 = closure_5.top;
          }
          const diff1 = diff - num3;
          if (shown.get()) {
            let height = wrapperOffset.get().y;
          } else {
            height = styles.height;
          }
          function transitionComplete(arg0) {
            let tmp = undefined !== arg0 && arg0;
            if (tmp) {
              tmp = closure_1_0 === transitionState(updateActivityPanelModeToPIP[21]).TransitionStates.YEETED;
            }
            if (tmp) {
              transitionState(updateActivityPanelModeToPIP[20]).runOnJS(transitionCleanUp)();
              const obj = transitionState(updateActivityPanelModeToPIP[20]);
            }
          }
          transitionComplete.__closure = {
            transitionState,
            TransitionStates: native.TransitionStates,
            runOnJS: ReanimatedRexport.runOnJS,
            transitionCleanUp,
          };
          transitionComplete.__workletHash = 12136158465037;
          transitionComplete.__initData = __initData;
          let num4 = 0;
          if (stateFromStores) {
            num4 = 0;
            if (shown.get()) {
              num4 = 1 - wrapperOffset.get().y / styles.height;
            }
          }
          let num6 = 1;
          if (stateFromStores) {
            const tmp9Result = timing;
            let str2 = "animate-always";
            if (shown.get()) {
              str2 = "animate-always";
              if (wrapperOffset.get().gestureActive) {
                str2 = "animate-never";
              }
            }
            num6 = tmp9Result.withTiming(num4, closure_18, str2, transitionComplete);
          }
          const size = {
            opacity: num6,
            transform: null,
            top: null,
            width: null,
            height: null,
            borderTopStartRadius: null,
            borderTopEndRadius: null,
          };
          if (stateFromStores) {
            const obj3 = { translateY: 0 };
            const items = [obj3];
            size.transform = items;
            let num7 = 0;
            if (!wrapperDimensions.isWindowLandscape) {
              num7 = closure_5.top;
            }
            size.top = num7;
            size.width = styles.width;
            size.height = diff1;
            size.borderTopStartRadius = num;
            size.borderTopEndRadius = num;
            return size;
          } else {
            const tmp9Result2 = spring;
            if (!wrapperOffset.get().gestureActive) {
              let tmp21 = ACTIVITY_LAYOUT_PHYSICS_DEFAULT;
              tmp9Result2.withSpring(height, tmp21, "animate-always", transitionComplete);
            }
            tmp21 = closure_2_8;
          }
          const obj2 = {
            transitionState,
            TransitionStates: native.TransitionStates,
            runOnJS: ReanimatedRexport.runOnJS,
            transitionCleanUp,
          };
        };
        let obj2 = {
          wrapperDimensions,
          lg,
          IS_IOS,
          animatedKeyboardHeight: tmp15,
          windowDimensions: tmp10,
          safeArea: tmp11,
          shown,
          wrapperOffset,
          transitionState,
          TransitionStates: transitionState(tmp2[21]).TransitionStates,
          runOnJS: transitionState(tmp2[20]).runOnJS,
          transitionCleanUp,
          reduceMotion: stateFromStores,
          withTiming: transitionState(tmp2[22]).withTiming,
          REDUCED_MOTION_TIMING,
          withSpring: transitionState(tmp2[23]).withSpring,
          ACTIVITY_LAYOUT_PHYSICS_GESTURE: shown,
          ACTIVITY_LAYOUT_PHYSICS_DEFAULT,
        };
        fn2.__closure = obj2;
        fn2.__workletHash = 16601040175668;
        fn2.__initData = __initData;
        const animatedStyle = transitionState(tmp2[20]).useAnimatedStyle(fn2);
        const tmpResult6 = transitionState(tmp2[20]);
        class W {
          constructor() {
            obj = wrapperOffset;
            if (wrapperOffset.get().gestureActive) {
              tmp2 = closure_4;
              num2 = 1;
              num = 1 - obj.get().y / closure_4.height;
            } else {
              tmp = shown;
              num = 0;
              if (shown.get()) {
                num = 1;
              }
            }
            obj1 = { opacity: null };
            obj3 = closure_0(closure_2[23]);
            obj1.opacity = obj3.withSpring(num, closure_9);
            return obj1;
          }
        }
        let obj3 = {
          wrapperOffset,
          shown,
          windowDimensions: tmp10,
          withSpring: transitionState(tmp2[23]).withSpring,
          ACTIVITY_LAYOUT_PHYSICS_DEFAULT,
        };
        W.__closure = obj3;
        W.__workletHash = 8351375063373;
        W.__initData = __initData2;
        const animatedStyle1 = transitionState(tmp2[20]).useAnimatedStyle(W);
        if (cResult[5] === tmp8.wrapper) {
          if (cResult[6] === animatedStyle) {
            let tmp24 = cResult[7];
          }
          const fn3 = function z() {
            let num = 0;
            if (IS_IOS) {
              num = closure_9.get();
            }
            const size = { width: wrapperDimensions.width, height: wrapperDimensions.height - num };
            return size;
          };
          const obj4 = { IS_IOS, animatedKeyboardHeight: tmp15, wrapperDimensions };
          fn3.__closure = obj4;
          fn3.__workletHash = 2605726008295;
          fn3.__initData = __initData3;
          const animatedStyle2 = transitionState(tmp2[20]).useAnimatedStyle(fn3);
          if (cResult[8] !== updateActivityPanelModeToPIP) {
            class Q {
              constructor() {
                tmp = closure_2();
                return;
              }
            }
            cResult[8] = updateActivityPanelModeToPIP;
            cResult[9] = Q;
          } else {
            class Q {
              constructor() {
                tmp = closure_2();
                return;
              }
            }
          }
          if (cResult[10] === animatedStyle1) {
            class Q {
              constructor() {
                tmp = closure_2();
                return;
              }
            }
            if (lockedWebView.renderWebView) {
              class Q {
                constructor() {
                  tmp = closure_2();
                  return;
                }
              }
              if (hasActivity) {
                class Q {
                  constructor() {
                    tmp = closure_2();
                    return;
                  }
                }
              }
            }
            if (cResult[13] === animatedStyle2) {
              class Q {
                constructor() {
                  tmp = closure_2();
                  return;
                }
              }
              if (cResult[16] === Q) {
                class Q {
                  constructor() {
                    tmp = closure_2();
                    return;
                  }
                }
              }
              const obj5 = {
                style: tmp24,
                nativeID: "activity-panel-focused-view",
                accessibilityViewIsModal: true,
                onAccessibilityEscape: Q,
                children: null,
              };
              const items1 = [tmp32, header];
              obj5.children = items1;
              const tmp37 = closure_17(transitionState(tmp2[24]).AccessibilityViewAnimated, obj5);
              cResult[16] = Q;
              cResult[17] = header;
              cResult[18] = tmp32;
              cResult[19] = tmp24;
              cResult[20] = tmp37;
            }
            const obj6 = { style: animatedStyle2, children: null };
            const tmp34 = closure_16(tmp9(tmp2[20]).View, obj6);
            cResult[13] = animatedStyle2;
            cResult[14] = null;
            cResult[15] = tmp34;
          }
          const obj7 = { style: null, pointerEvents: "none" };
          const items2 = [tmp8.shade, animatedStyle1];
          obj7.style = items2;
          const tmp30 = closure_16(tmp9(tmp2[20]).View, obj7);
          cResult[10] = animatedStyle1;
          cResult[11] = tmp8.shade;
          cResult[12] = tmp30;
          const tmpResult8 = transitionState(tmp2[20]);
        }
        const items3 = [tmp8.wrapper, animatedStyle];
        cResult[5] = tmp8.wrapper;
        cResult[6] = animatedStyle;
        cResult[7] = items3;
        tmp24 = items3;
        const tmpResult7 = transitionState(tmp2[20]);
      }
      const obj8 = { transitionState, context };
      cResult[3] = transitionState;
      cResult[4] = obj8;
      tmp13 = obj8;
      const tmpResult = transitionState(updateActivityPanelModeToPIP[16]);
    }
  : function BaseActivityPanelFocusedView(transitionState) {
      transitionState = transitionState.transitionState;
      const transitionCleanUp = transitionState.transitionCleanUp;
      const updateActivityPanelModeToPIP = transitionState.updateActivityPanelModeToPIP;
      const context = transitionState.context;
      closure_4 = undefined;
      ({ children, header, hasActivity } = transitionState);
      let items = [closure_4];
      const stateFromStores = transitionState(updateActivityPanelModeToPIP[16]).useStateFromStores(
        items,
        () => closure_4.useReducedMotion,
      );
      const tmp2 = closure_19();
      closure_4 = tmp2;
      const tmp3 = transitionCleanUp(updateActivityPanelModeToPIP[17])();
      ChannelStore = tmp3;
      const tmp4 = transitionCleanUp(updateActivityPanelModeToPIP[15])();
      closure_6 = tmp4;
      const context1 = stateFromStores.useContext(context);
      const wrapperDimensions = context1.wrapperDimensions;
      const wrapperOffset = context1.wrapperOffset;
      let obj = transitionState(updateActivityPanelModeToPIP[16]);
      const lockedWebView = transitionState(updateActivityPanelModeToPIP[18]).useLockedWebView({
        transitionState,
        context,
      });
      const shown = lockedWebView.shown;
      const tmp7 = transitionCleanUp(updateActivityPanelModeToPIP[19])();
      closure_10 = tmp7;
      const lg = transitionCleanUp(updateActivityPanelModeToPIP[12]).radii.lg;
      let obj2 = transitionState(updateActivityPanelModeToPIP[18]);
      const fn = function _() {
        let num = 0;
        if (!wrapperDimensions.isWindowLandscape) {
          num = lg;
        }
        let num2 = 0;
        if (IS_IOS) {
          num2 = closure_10.get();
        }
        let num3 = 0;
        const diff = styles.height - num2;
        if (!wrapperDimensions.isWindowLandscape) {
          num3 = closure_6.top;
        }
        const diff1 = diff - num3;
        if (shown.get()) {
          let height = wrapperOffset.get().y;
        } else {
          height = styles.height;
        }
        function transitionComplete() {
          let flag = arg0;
          if (arg0 === undefined) {
            flag = false;
          }
          if (flag) {
            flag = closure_1_0 === transitionState(updateActivityPanelModeToPIP[21]).TransitionStates.YEETED;
          }
          if (flag) {
            transitionState(updateActivityPanelModeToPIP[20]).runOnJS(transitionCleanUp)();
            const obj = transitionState(updateActivityPanelModeToPIP[20]);
          }
        }
        transitionComplete.__closure = {
          transitionState,
          TransitionStates: native.TransitionStates,
          runOnJS: ReanimatedRexport.runOnJS,
          transitionCleanUp,
        };
        transitionComplete.__workletHash = 17017534232725;
        transitionComplete.__initData = __initData;
        let num4 = 0;
        if (stateFromStores) {
          num4 = 0;
          if (shown.get()) {
            num4 = 1 - wrapperOffset.get().y / styles.height;
          }
        }
        let num6 = 1;
        if (stateFromStores) {
          const tmp9Result = timing;
          let str2 = "animate-always";
          if (shown.get()) {
            str2 = "animate-always";
            if (wrapperOffset.get().gestureActive) {
              str2 = "animate-never";
            }
          }
          num6 = tmp9Result.withTiming(num4, closure_18, str2, transitionComplete);
        }
        const size = {
          opacity: num6,
          transform: null,
          top: null,
          width: null,
          height: null,
          borderTopStartRadius: null,
          borderTopEndRadius: null,
        };
        if (stateFromStores) {
          const obj3 = { translateY: 0 };
          const items = [obj3];
          size.transform = items;
          let num7 = 0;
          if (!wrapperDimensions.isWindowLandscape) {
            num7 = closure_6.top;
          }
          size.top = num7;
          size.width = styles.width;
          size.height = diff1;
          size.borderTopStartRadius = num;
          size.borderTopEndRadius = num;
          return size;
        } else {
          const tmp9Result2 = spring;
          if (!wrapperOffset.get().gestureActive) {
            let tmp21 = ACTIVITY_LAYOUT_PHYSICS_DEFAULT;
            tmp9Result2.withSpring(height, tmp21, "animate-always", transitionComplete);
          }
          tmp21 = closure_2_8;
        }
        const obj2 = {
          transitionState,
          TransitionStates: native.TransitionStates,
          runOnJS: ReanimatedRexport.runOnJS,
          transitionCleanUp,
        };
      };
      let obj3 = transitionState(updateActivityPanelModeToPIP[20]);
      fn.__closure = {
        wrapperDimensions,
        lg,
        IS_IOS,
        animatedKeyboardHeight: tmp7,
        windowDimensions: tmp3,
        safeArea: tmp4,
        shown,
        wrapperOffset,
        transitionState,
        TransitionStates: transitionState(updateActivityPanelModeToPIP[21]).TransitionStates,
        runOnJS: transitionState(updateActivityPanelModeToPIP[20]).runOnJS,
        transitionCleanUp,
        reduceMotion: stateFromStores,
        withTiming: transitionState(updateActivityPanelModeToPIP[22]).withTiming,
        REDUCED_MOTION_TIMING,
        withSpring: transitionState(updateActivityPanelModeToPIP[23]).withSpring,
        ACTIVITY_LAYOUT_PHYSICS_GESTURE: wrapperOffset,
        ACTIVITY_LAYOUT_PHYSICS_DEFAULT: shown,
      };
      fn.__workletHash = 14810177926953;
      fn.__initData = __initData4;
      const animatedStyle = obj3.useAnimatedStyle(fn);
      const obj4 = {
        wrapperDimensions,
        lg,
        IS_IOS,
        animatedKeyboardHeight: tmp7,
        windowDimensions: tmp3,
        safeArea: tmp4,
        shown,
        wrapperOffset,
        transitionState,
        TransitionStates: transitionState(updateActivityPanelModeToPIP[21]).TransitionStates,
        runOnJS: transitionState(updateActivityPanelModeToPIP[20]).runOnJS,
        transitionCleanUp,
        reduceMotion: stateFromStores,
        withTiming: transitionState(updateActivityPanelModeToPIP[22]).withTiming,
        REDUCED_MOTION_TIMING,
        withSpring: transitionState(updateActivityPanelModeToPIP[23]).withSpring,
        ACTIVITY_LAYOUT_PHYSICS_GESTURE: wrapperOffset,
        ACTIVITY_LAYOUT_PHYSICS_DEFAULT: shown,
      };
      class T {
        constructor() {
          obj = wrapperOffset;
          if (wrapperOffset.get().gestureActive) {
            tmp2 = closure_5;
            num2 = 1;
            num = 1 - obj.get().y / closure_5.height;
          } else {
            tmp = shown;
            num = 0;
            if (shown.get()) {
              num = 1;
            }
          }
          obj1 = { opacity: null };
          obj3 = closure_0(closure_2[23]);
          obj1.opacity = obj3.withSpring(num, closure_9);
          return obj1;
        }
      }
      const obj5 = transitionState(updateActivityPanelModeToPIP[20]);
      T.__closure = {
        wrapperOffset,
        shown,
        windowDimensions: tmp3,
        withSpring: transitionState(updateActivityPanelModeToPIP[23]).withSpring,
        ACTIVITY_LAYOUT_PHYSICS_DEFAULT: shown,
      };
      T.__workletHash = 1926919297609;
      T.__initData = __initData5;
      const items1 = [animatedStyle, tmp2.wrapper];
      const animatedStyle1 = obj5.useAnimatedStyle(T);
      const memo = stateFromStores.useMemo(() => {
        const items = [closure_4.wrapper, animatedStyle];
        return items;
      }, items1);
      const obj6 = {
        wrapperOffset,
        shown,
        windowDimensions: tmp3,
        withSpring: transitionState(updateActivityPanelModeToPIP[23]).withSpring,
        ACTIVITY_LAYOUT_PHYSICS_DEFAULT: shown,
      };
      class A {
        constructor() {
          num = 0;
          if (IS_IOS) {
            tmp = closure_10;
            num = closure_10.get();
          }
          size = { width: wrapperDimensions.width, height: wrapperDimensions.height - num };
          return size;
        }
      }
      A.__closure = { IS_IOS, animatedKeyboardHeight: tmp7, wrapperDimensions };
      A.__workletHash = 762235971819;
      A.__initData = __initData6;
      const items2 = [updateActivityPanelModeToPIP];
      const animatedStyle2 = transitionState(updateActivityPanelModeToPIP[20]).useAnimatedStyle(A);
      const callback = stateFromStores.useCallback(() => {
        updateActivityPanelModeToPIP();
      }, items2);
      const obj8 = { theme: ThemeTypes.DARK, children: null };
      const obj9 = { style: null, pointerEvents: "none" };
      const items3 = [tmp2.shade, animatedStyle1];
      obj9.style = items3;
      const items4 = [closure_16(transitionCleanUp(updateActivityPanelModeToPIP[20]).View, obj9)];
      const obj10 = {
        style: memo,
        nativeID: "activity-panel-focused-view",
        accessibilityViewIsModal: true,
        onAccessibilityEscape: callback,
        children: null,
      };
      const obj11 = { style: animatedStyle2, children: null };
      let tmp15 = null;
      if (lockedWebView.renderWebView) {
        tmp15 = null;
        if (hasActivity) {
          tmp15 = children;
        }
      }
      obj11.children = tmp15;
      const items5 = [closure_16(transitionCleanUp(updateActivityPanelModeToPIP[20]).View, obj11), header];
      obj10.children = items5;
      items4[1] = closure_17(transitionState(updateActivityPanelModeToPIP[24]).AccessibilityViewAnimated, obj10);
      obj8.children = items4;
      return closure_17(transitionState(updateActivityPanelModeToPIP[21]).ThemeContextProvider, obj8);
    };
let closure_29 = tmp7;
ReactCompilerGating = fn(558);
let obj3 = {
  position: "absolute",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelFocusedView.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ActivityPanelFocusedView(arg0) {
        const cResult = c.c(15);
        ({ transitionState, transitionCleanUp } = arg0);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [EmbeddedActivitiesStore, ChannelStore];
          const fn = function s() {
            const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
            const selfEmbeddedActivityForLocation =
              EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
            const obj = require("embeddedActivityLocationUtils");
            return {
              channel: channel.getChannel(
                require("embeddedActivityLocationUtils").getEmbeddedActivityLocationChannelId(
                  connectedActivityLocation,
                ),
              ),
              hasActivity: null != selfEmbeddedActivityForLocation,
            };
          };
          const items1 = [];
          cResult[0] = items;
          cResult[1] = fn;
          cResult[2] = items1;
          tmp4 = items;
          tmp5 = fn;
          tmp6 = items1;
        } else {
          [tmp4, tmp5, tmp6] = cResult;
        }
        const stateFromStoresObject = initialize.useStateFromStoresObject(tmp4, tmp5, tmp6);
        ({ channel, hasActivity } = stateFromStoresObject);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { context: ActivityPanelStateContextDefault };
          cResult[3] = obj2;
          let tmp10 = obj2;
        } else {
          tmp10 = cResult[3];
        }
        const tmpResult = initialize;
        ({ portraitSafeAreasConfig, landscapeSafeAreasConfig } = closure_20(tmp10));
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp16 = value2(ActivityPanelHeaderDefault, {});
          cResult[4] = tmp16;
        }
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor() {
              obj = closure_1_0(closure_1_2[28]);
              result = obj.updateActivityPanelMode(closure_1_10.PIP);
              return;
            }
          }
          cResult[5] = E;
        } else {
          class E {
            constructor() {
              obj = closure_1_0(closure_1_2[28]);
              result = obj.updateActivityPanelMode(closure_1_10.PIP);
              return;
            }
          }
        }
        if (cResult[6] === channel) {
          class E {
            constructor() {
              obj = closure_1_0(closure_1_2[28]);
              result = obj.updateActivityPanelMode(closure_1_10.PIP);
              return;
            }
          }
        }
        const obj3 = {
          channel,
          layoutMode: ActivityLayoutMode.FOCUSED,
          portraitSafeAreasConfig,
          landscapeSafeAreasConfig,
        };
        const tmp12 = closure_20(tmp10);
        cResult[6] = channel;
        cResult[7] = landscapeSafeAreasConfig;
        cResult[8] = portraitSafeAreasConfig;
        cResult[9] = value2(EmbeddedActivityViewDefault, {
          channel,
          layoutMode: ActivityLayoutMode.FOCUSED,
          portraitSafeAreasConfig,
          landscapeSafeAreasConfig,
        });
        const tmp18 = value2(EmbeddedActivityViewDefault, {
          channel,
          layoutMode: ActivityLayoutMode.FOCUSED,
          portraitSafeAreasConfig,
          landscapeSafeAreasConfig,
        });
      }
    : function ActivityPanelFocusedView(transitionState) {
        transitionState = transitionState.transitionState;
        const transitionCleanUp = transitionState.transitionCleanUp;
        let channel;
        let landscapeSafeAreasConfig;
        let memo;
        const items = [memo, landscapeSafeAreasConfig];
        const stateFromStoresObject = transitionState(channel[16]).useStateFromStoresObject(items, () => {
          const connectedActivityLocation = memo.getConnectedActivityLocation();
          const selfEmbeddedActivityForLocation = memo.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
          const obj = transitionState(channel[25]);
          return {
            channel: landscapeSafeAreasConfig.getChannel(
              transitionState(channel[25]).getEmbeddedActivityLocationChannelId(connectedActivityLocation),
            ),
            hasActivity: null != selfEmbeddedActivityForLocation,
          };
        }, []);
        channel = stateFromStoresObject.channel;
        const hasActivity = stateFromStoresObject.hasActivity;
        let obj = transitionState(channel[16]);
        const tmp2 = closure_20({ context: transitionCleanUp(channel[26]) });
        const portraitSafeAreasConfig = tmp2.portraitSafeAreasConfig;
        landscapeSafeAreasConfig = tmp2.landscapeSafeAreasConfig;
        memo = hasActivity.useMemo(() => closure_1_16(transitionCleanUp(channel[27]), {}), []);
        const updateActivityPanelModeToPIP = hasActivity.useCallback(() => {
          const result = transitionState(channel[28]).updateActivityPanelMode(constants.PIP);
        }, []);
        const items1 = [
          transitionState,
          transitionCleanUp,
          updateActivityPanelModeToPIP,
          hasActivity,
          memo,
          channel,
          portraitSafeAreasConfig,
          landscapeSafeAreasConfig,
        ];
        return hasActivity.useMemo(() => {
          const obj = {
            transitionState,
            transitionCleanUp,
            updateActivityPanelModeToPIP,
            hasActivity,
            context: ActivityPanelStateContextDefault,
            header: memo,
            children: value2(EmbeddedActivityViewDefault, {
              channel,
              layoutMode: ActivityLayoutMode.FOCUSED,
              portraitSafeAreasConfig,
              landscapeSafeAreasConfig,
            }),
          };
          return value2(closure_29, obj);
        }, items1);
      },
);
export const useBaseActivityPanelFocusedView = tmp6;
export const BaseActivityPanelFocusedView = tmp7;
