// discord_app/modules/activities/panel/native/ActivityPanelPIPView.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Constants2 from "../../Constants.tsx";
import native2 from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import updateSharedValueIfChangedDefault from "../../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import MorphablePanelConstants from "../../../panels/morphable/native/MorphablePanelConstants.tsx";
import ActivityPanelStateContextDefault from "ActivityPanelStateContext.tsx";
import ActivityPanelNativeConstants from "ActivityPanelNativeConstants.tsx";
import MorphablePanelUtils from "../../../panels/morphable/native/MorphablePanelUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import SafeAreaDisabledStore from "../../../panels/morphable/native/SafeAreaDisabledStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import EmbeddedActivitiesStore from "../../EmbeddedActivitiesStore.tsx";
import ActivityPanelConstants from "../ActivityPanelConstants.tsx";
import native from "../../../../design/void/native.tsx";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let dependencyMap, num2, obj1, obj11, obj9, str, tmp14, tmp17, tmpResult1;

let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let unpackModuleId;
let View = react_native.View;
const ActivityLayoutMode = Constants2.ActivityLayoutMode;
let ACTIVITY_PIP_SIZE = ActivityPanelConstants.ACTIVITY_PIP_SIZE;
({
  ActivityPanelModes: unpackModuleId,
  ACTIVITY_LAYOUT_PHYSICS_GESTURE: closure_12,
  ACTIVITY_LAYOUT_PHYSICS_DEFAULT: map1,
  LANDSCAPE_IFRAME_HORIZONTAL_MARGIN: closure_14,
} = ActivityPanelConstants);
const portraitSafeAreasConfig = ActivityPanelNativeConstants.DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
const ThemeTypes = Constants.ThemeTypes;
const PIP_WINDOW_OFFSET = MorphablePanelConstants.PIP_WINDOW_OFFSET;
const jsx = Fragment.jsx;
const REDUCED_MOTION_TIMING = { duration: 300 };
const boxShadowStyle = native.generateBoxShadowStyle(native.EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, mask: obj3 };
obj2 = { borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
let merged = Object.assign(ACTIVITY_PIP_SIZE);
const merged1 = Object.assign(boxShadowStyle);
obj3 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
const merged2 = Object.assign(ACTIVITY_PIP_SIZE);
let closure_20 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let obj3;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(4);
      const tmp2 = useSafeAreaInsetsDefault();
      let num;
      const _Math = Math;
      if (tmp2 != null) {
        num = tmp2.right;
      }
      if (num == null) {
        num = 0;
      }
      const maxResult = max(authStore2, num);
      if (cResult[0] !== maxResult) {
        const obj2 = { right: obj3 };
        obj3 = { disable: false, override: maxResult };
        cResult[0] = maxResult;
        cResult[1] = obj2;
        tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== tmp5) {
        const obj4 = { landscapeSafeAreasConfig: tmp5 };
        cResult[2] = tmp5;
        cResult[3] = obj4;
        tmp6 = obj4;
      } else {
        tmp6 = cResult[3];
      }
      return tmp6;
    }
  : () => {
      let items;
      const tmp = useSafeAreaInsetsDefault();
      const right = tmp;
      let obj = {
        landscapeSafeAreasConfig: react.useMemo(() => {
          let num;
          const _Math = Math;
          if (right != null) {
            num = right.right;
          }
          if (num == null) {
            num = 0;
          }
          const obj = { right: { disable: false, override: max(authStore2, num) } };
          ({ disable: false, override: max(authStore2, num) });
          return obj;
        }, items),
      };
      items = [tmp.right];
      return obj;
    };
let closure_21 = tmp9;
const __initData = {
  code: 'function ActivityPanelPIPViewTsx1(){const{pipState,getClampedPIPPosition,ACTIVITY_PIP_SIZE,windowDimensions,safeArea,pipAvoidanceSpecs,wrapperOffset,disableHorizontalSafeAreas,shown,reduceMotion,PIP_WINDOW_OFFSET,transitionState,TransitionStates,runOnJS,transitionCleanUp,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const{x:pipX,y:pipY}=pipState.get();let{x:x,y:y}=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:ACTIVITY_PIP_SIZE.width,height:ACTIVITY_PIP_SIZE.height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:wrapperOffset.get().gestureActive?wrapperOffset.get():undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});if(!shown.get()&&!reduceMotion){if(pipX<0.5&&pipX>=0){x=-(ACTIVITY_PIP_SIZE.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET));}else{x=windowDimensions.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET);}}const transitionComplete=function transitionComplete(t6){const finished=t6===undefined?false:t6;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}};return{opacity:reduceMotion?withTiming(shown.get()?1:0,REDUCED_MOTION_TIMING,"animate-always",transitionComplete):1,transform:[{translateY:withSpring(y,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,"animate-always")},{translateX:withSpring(x,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,"animate-always",!reduceMotion?transitionComplete:undefined)}]};}',
};
const __initData2 = {
  code: "function transitionComplete_ActivityPanelPIPViewTsx2(t6){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;var finished=t6===undefined?false:t6;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}",
};
const __initData3 = {
  code: "function ActivityPanelPIPViewTsx3(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PANEL);}",
};
const __initData4 = {
  code: "function ActivityPanelPIPViewTsx4(){const{pipState,getClampedPIPPosition,ACTIVITY_PIP_SIZE,windowDimensions,safeArea,pipAvoidanceSpecs,wrapperOffset,disableHorizontalSafeAreas,shown,reduceMotion,PIP_WINDOW_OFFSET,transitionState,TransitionStates,runOnJS,transitionCleanUp,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const{x:pipX,y:pipY}=pipState.get();let{x:x,y:y}=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:ACTIVITY_PIP_SIZE.width,height:ACTIVITY_PIP_SIZE.height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:wrapperOffset.get().gestureActive?wrapperOffset.get():undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});if(!shown.get()&&!reduceMotion){if(pipX<0.5&&pipX>=0){x=-(ACTIVITY_PIP_SIZE.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET));}else{x=windowDimensions.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET);}}function transitionComplete(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}return{opacity:reduceMotion?withTiming(shown.get()?1:0,REDUCED_MOTION_TIMING,'animate-always',transitionComplete):1,transform:[{translateY:withSpring(y,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always')},{translateX:withSpring(x,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',!reduceMotion?transitionComplete:undefined)}]};}",
};
const __initData5 = {
  code: "function transitionComplete_ActivityPanelPIPViewTsx5(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}",
};
const __initData6 = {
  code: "function ActivityPanelPIPViewTsx6(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PANEL);}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (transitionCleanUp) => {
      let children;
      let context;
      let height;
      let pipOrientationLockState;
      let stateFromStores;
      let tmp5;
      let tmp6;
      let transitionState;
      let width;
      let wrapperOffset;
      let obj = transitionState(stateFromStores[16]);
      const cResult = obj.c(41);
      ({ children, transitionState } = transitionCleanUp);
      transitionCleanUp = transitionCleanUp.transitionCleanUp;
      ({ pipOrientationLockState, context } = transitionCleanUp);
      const hasActivity = transitionCleanUp.hasActivity;
      const tmp4 = closure_20();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [wrapperOffset];
        const fn = function l() {
          return wrapperOffset.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let tmpResult = transitionState(tmp2[18]);
      stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      const tmp10 = transitionCleanUp(stateFromStores[19])();
      windowDimensions = tmp10;
      const tmp11 = transitionCleanUp(stateFromStores[17])();
      safeArea = tmp11;
      const context1 = windowDimensions.useContext(context);
      wrapperOffset = context1.wrapperOffset;
      const setMode = context1.setMode;
      const pipState = context1.pipState;
      const pipAvoidanceSpecs = context1.pipAvoidanceSpecs;
      const wrapperDimensions = context1.wrapperDimensions;
      const obj3 = windowDimensions;
      if (cResult[2] === context) {
        let tmp13;
        let tmp16;
        let tmp15;
        if (cResult[3] === transitionState) {
          tmp13 = cResult[4];
        }
        let tmpResult3 = transitionState(tmp2[20]);
        const lockedWebView = tmpResult3.useLockedWebView(tmp13);
        const shown = lockedWebView.shown;
        const renderWebView = lockedWebView.renderWebView;
        if (cResult[5] !== wrapperOffset) {
          const fn2 = function k() {
            updateSharedValueIfChangedDefault(wrapperOffset, { gestureActive: false });
          };
          const items1 = [wrapperOffset];
          let num3 = 5;
          cResult[5] = wrapperOffset;
          let num4 = 6;
          cResult[6] = fn2;
          cResult[7] = items1;
          tmp16 = items1;
          tmp15 = fn2;
        } else {
          tmp15 = cResult[6];
          tmp16 = cResult[7];
        }
        const effect = obj3.useEffect(tmp15, tmp16);
        const tmp19 = setMode((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
        const ACTIVITY_PIP_SIZE = tmp19;
        const tmpResult4 = transitionState(tmp2[22]);
        class B {
          constructor() {
            point = pipState.get();
            x = point.x;
            tmp = closure_0;
            tmp2 = closure_2;
            y = point.y;
            tmp3 = closure_0(closure_2[23]);
            size = {
              pipX: x,
              pipY: y,
              width: ACTIVITY_PIP_SIZE.width,
              height: ACTIVITY_PIP_SIZE.height,
              windowDimensions: closure_3,
              safeArea: closure_4,
              bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom,
              topAvoidanceRegion: pipAvoidanceSpecs.get().top,
              positionOffset: null,
              disableHorizontalSafeAreas: null,
            };
            tmp6 = closure_4;
            getClampedPIPPosition = tmp3.getClampedPIPPosition;
            tmp4 = ACTIVITY_PIP_SIZE;
            tmp5 = closure_3;
            obj2 = wrapperOffset;
            value = undefined;
            if (wrapperOffset.get().gestureActive) {
              value = obj2.get();
            }
            size.positionOffset = value;
            size.disableHorizontalSafeAreas = closure_10;
            point2 = getClampedPIPPosition(size);
            x2 = point2.x;
            obj3 = shown;
            y2 = point2.y;
            tmp8 = shown.get() || closure_2;
            if (!tmp8) {
              num = 0.5;
              if (x < 0.5) {
                num2 = 0;
                if (x >= 0) {
                  tmp12 = globalThis;
                  _Math2 = Math;
                  tmp13 = PIP_WINDOW_OFFSET;
                  sum = -tmp4.width + Math.max(tmp6.right, PIP_WINDOW_OFFSET);
                }
                x2 = sum;
              }
              tmp9 = globalThis;
              _Math = Math;
              tmp10 = PIP_WINDOW_OFFSET;
              sum = tmp5.width + Math.max(tmp6.right, PIP_WINDOW_OFFSET);
            }
            transitionComplete = function transitionComplete(arg0) {
              const tmp =
                undefined !== arg0 &&
                arg0 &&
                closure_1_0 === transitionState(stateFromStores[24]).TransitionStates.YEETED;
              if (tmp) {
                const obj = transitionState(stateFromStores[22]);
                obj.runOnJS(transitionCleanUp)();
              }
            };
            obj1 = {
              transitionState,
              TransitionStates: tmp(tmp2[24]).TransitionStates,
              runOnJS: tmp(tmp2[22]).runOnJS,
              transitionCleanUp,
            };
            transitionComplete.__closure = obj1;
            transitionComplete.__workletHash = 11561549591243;
            transitionComplete.__initData = closure_23;
            num3 = 1;
            tmp14 = closure_2;
            if (tmp14) {
              tmpResult = tmp(tmp2[25]);
              withTiming = tmpResult.withTiming;
              num4 = 0;
              if (obj3.get()) {
                num4 = 1;
              }
              tmp16 = closure_19;
              str = "animate-always";
              tmp17 = tmpResult;
              tmp18 = num4;
              tmp19 = transitionComplete;
              num3 = withTiming(num4, closure_19, "animate-always", transitionComplete);
            }
            obj9 = { opacity: num3, transform: null };
            tmpResult1 = tmp(tmp2[26]);
            obj10 = {
              translateY: tmpResult1.withSpring(
                y2,
                obj2.get().gestureActive ? closure_12 : closure_13,
                "animate-always",
              ),
            };
            items = [,];
            items[0] = obj10;
            tmpResult2 = tmp(tmp2[26]);
            withSpring = tmpResult2.withSpring;
            tmp21 = obj2.get().gestureActive ? closure_12 : closure_13;
            tmp22 = undefined;
            if (!tmp14) {
              tmp22 = transitionComplete;
            }
            obj11 = { translateX: withSpring(x2, tmp21, "animate-always", tmp22) };
            items[1] = obj11;
            obj9.transform = items;
            return obj9;
          }
        }
        const useAnimatedStyle = tmpResult4.useAnimatedStyle;
        let tmp21 = ACTIVITY_PIP_SIZE;
        B.__closure = {
          pipState,
          getClampedPIPPosition: transitionState(stateFromStores[23]).getClampedPIPPosition,
          ACTIVITY_PIP_SIZE,
          windowDimensions: tmp10,
          safeArea: tmp11,
          pipAvoidanceSpecs,
          wrapperOffset,
          disableHorizontalSafeAreas: tmp19,
          shown,
          reduceMotion: stateFromStores,
          PIP_WINDOW_OFFSET,
          transitionState,
          TransitionStates: transitionState(stateFromStores[24]).TransitionStates,
          runOnJS: transitionState(stateFromStores[22]).runOnJS,
          transitionCleanUp,
          withTiming: transitionState(stateFromStores[25]).withTiming,
          REDUCED_MOTION_TIMING,
          withSpring: transitionState(stateFromStores[26]).withSpring,
          ACTIVITY_LAYOUT_PHYSICS_GESTURE,
          ACTIVITY_LAYOUT_PHYSICS_DEFAULT,
        };
        B.__workletHash = 6614930197456;
        B.__initData = __initData;
        const obj2 = {
          pipState,
          getClampedPIPPosition: transitionState(stateFromStores[23]).getClampedPIPPosition,
          ACTIVITY_PIP_SIZE,
          windowDimensions: tmp10,
          safeArea: tmp11,
          pipAvoidanceSpecs,
          wrapperOffset,
          disableHorizontalSafeAreas: tmp19,
          shown,
          reduceMotion: stateFromStores,
          PIP_WINDOW_OFFSET,
          transitionState,
          TransitionStates: transitionState(stateFromStores[24]).TransitionStates,
          runOnJS: transitionState(stateFromStores[22]).runOnJS,
          transitionCleanUp,
          withTiming: transitionState(stateFromStores[25]).withTiming,
          REDUCED_MOTION_TIMING,
          withSpring: transitionState(stateFromStores[26]).withSpring,
          ACTIVITY_LAYOUT_PHYSICS_GESTURE,
          ACTIVITY_LAYOUT_PHYSICS_DEFAULT,
        };
        const animatedStyle = useAnimatedStyle(B);
        if (cResult[8] === pipOrientationLockState) {
          let tmp28;
          if (cResult[9] === wrapperDimensions.isLandscape) {
            tmp28 = cResult[10];
          }
          ({ width, height } = tmp28);
          if (cResult[11] === height) {
            let tmp30;
            let tmp31;
            if (cResult[12] === width) {
              tmp30 = cResult[13];
            }
            if (cResult[14] !== setMode) {
              function ae() {
                const obj = ReanimatedRexport;
                obj.runOnJS(setMode)(unpackModuleId.PANEL);
              }
              let obj4 = { runOnJS: transitionState(stateFromStores[22]).runOnJS, setMode, ActivityPanelModes };
              ae.__closure = obj4;
              ae.__workletHash = 2951177166574;
              ae.__initData = __initData3;
              class B {
                constructor() {
                  point = pipState.get();
                  x = point.x;
                  tmp = closure_0;
                  tmp2 = closure_2;
                  y = point.y;
                  tmp3 = closure_0(closure_2[23]);
                  size = {
                    pipX: x,
                    pipY: y,
                    width: ACTIVITY_PIP_SIZE.width,
                    height: ACTIVITY_PIP_SIZE.height,
                    windowDimensions: closure_3,
                    safeArea: closure_4,
                    bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom,
                    topAvoidanceRegion: pipAvoidanceSpecs.get().top,
                    positionOffset: null,
                    disableHorizontalSafeAreas: null,
                  };
                  tmp6 = closure_4;
                  getClampedPIPPosition = tmp3.getClampedPIPPosition;
                  tmp4 = ACTIVITY_PIP_SIZE;
                  tmp5 = closure_3;
                  obj2 = wrapperOffset;
                  value = undefined;
                  if (wrapperOffset.get().gestureActive) {
                    value = obj2.get();
                  }
                  size.positionOffset = value;
                  size.disableHorizontalSafeAreas = closure_10;
                  point2 = getClampedPIPPosition(size);
                  x2 = point2.x;
                  obj3 = shown;
                  y2 = point2.y;
                  tmp8 = shown.get() || closure_2;
                  if (!tmp8) {
                    num = 0.5;
                    if (x < 0.5) {
                      num2 = 0;
                      if (x >= 0) {
                        tmp12 = globalThis;
                        _Math2 = Math;
                        tmp13 = PIP_WINDOW_OFFSET;
                        sum = -tmp4.width + Math.max(tmp6.right, PIP_WINDOW_OFFSET);
                      }
                      x2 = sum;
                    }
                    tmp9 = globalThis;
                    _Math = Math;
                    tmp10 = PIP_WINDOW_OFFSET;
                    sum = tmp5.width + Math.max(tmp6.right, PIP_WINDOW_OFFSET);
                  }
                  transitionComplete = function transitionComplete(arg0) {
                    const tmp =
                      undefined !== arg0 &&
                      arg0 &&
                      closure_1_0 === transitionState(stateFromStores[24]).TransitionStates.YEETED;
                    if (tmp) {
                      const obj = transitionState(stateFromStores[22]);
                      obj.runOnJS(transitionCleanUp)();
                    }
                  };
                  obj1 = {
                    transitionState,
                    TransitionStates: tmp(tmp2[24]).TransitionStates,
                    runOnJS: tmp(tmp2[22]).runOnJS,
                    transitionCleanUp,
                  };
                  transitionComplete.__closure = obj1;
                  transitionComplete.__workletHash = 11561549591243;
                  transitionComplete.__initData = closure_23;
                  num3 = 1;
                  tmp14 = closure_2;
                  if (tmp14) {
                    tmpResult = tmp(tmp2[25]);
                    withTiming = tmpResult.withTiming;
                    num4 = 0;
                    if (obj3.get()) {
                      num4 = 1;
                    }
                    tmp16 = closure_19;
                    str = "animate-always";
                    tmp17 = tmpResult;
                    tmp18 = num4;
                    tmp19 = transitionComplete;
                    num3 = withTiming(num4, closure_19, "animate-always", transitionComplete);
                  }
                  obj9 = { opacity: num3, transform: null };
                  tmpResult1 = tmp(tmp2[26]);
                  obj10 = {
                    translateY: tmpResult1.withSpring(
                      y2,
                      obj2.get().gestureActive ? closure_12 : closure_13,
                      "animate-always",
                    ),
                  };
                  items = [,];
                  items[0] = obj10;
                  tmpResult2 = tmp(tmp2[26]);
                  withSpring = tmpResult2.withSpring;
                  tmp21 = obj2.get().gestureActive ? closure_12 : closure_13;
                  tmp22 = undefined;
                  if (!tmp14) {
                    tmp22 = transitionComplete;
                  }
                  obj11 = { translateX: withSpring(x2, tmp21, "animate-always", tmp22) };
                  items[1] = obj11;
                  obj9.transform = items;
                  return obj9;
                }
              }
              cResult[15] = ae;
              tmp31 = ae;
            } else {
              tmp31 = cResult[15];
            }
            if (cResult[16] === tmp31) {
              if (cResult[17] === pipState) {
                let tmp34;
                let tmp37;
                let tmp39;
                let tmp40;
                if (cResult[18] === wrapperOffset) {
                  tmp34 = cResult[19];
                }
                const tmp35 = transitionCleanUp(stateFromStores[28])(tmp34);
                let tmp36 = !renderWebView;
                if (renderWebView) {
                  tmp36 = !hasActivity;
                }
                const _Symbol = Symbol;
                if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = transitionState(tmp2[29]).intl;
                  const stringResult = intl.string(transitionState(stateFromStores[29]).t["3ejJer"]);
                  cResult[20] = stringResult;
                  tmp37 = stringResult;
                } else {
                  tmp37 = cResult[20];
                }
                const _Symbol2 = Symbol;
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  const items2 = [{ name: "activate" }];
                  cResult[21] = items2;
                  tmp39 = items2;
                } else {
                  tmp39 = cResult[21];
                }
                if (cResult[22] !== setMode) {
                  const obj5 = {
                    accessible: true,
                    accessibilityLabel: tmp37,
                    accessibilityRole: "button",
                    accessibilityActions: tmp39,
                    onAccessibilityAction() {
                      setMode(unpackModuleId.PANEL);
                    },
                  };
                  cResult[22] = setMode;
                  cResult[23] = obj5;
                  tmp40 = obj5;
                } else {
                  tmp40 = cResult[23];
                }
                if (cResult[24] === tmp4.wrapper) {
                  let tmp41;
                  if (cResult[25] === animatedStyle) {
                    tmp41 = cResult[26];
                  }
                  if (cResult[27] === tmp30) {
                    if (cResult[28] === children) {
                      if (cResult[31] === tmp4.mask) {
                        let tmp47;
                        if (cResult[32] === tmp43) {
                          tmp47 = cResult[33];
                        }
                        if (cResult[34] === tmp35) {
                          let tmp51;
                          if (cResult[35] === tmp47) {
                            tmp51 = cResult[36];
                          }
                          if (cResult[37] === tmp40) {
                            if (cResult[38] === tmp41) {
                              let tmp54;
                              if (cResult[39] === tmp51) {
                                tmp54 = cResult[40];
                              }
                              return tmp54;
                            }
                          }
                          const ThemeContextProvider = transitionState(tmp2[24]).ThemeContextProvider;
                          const View = tmp9(tmp2[22]).View;
                          class B {
                            constructor() {
                              point = pipState.get();
                              x = point.x;
                              tmp = closure_0;
                              tmp2 = closure_2;
                              y = point.y;
                              tmp3 = closure_0(closure_2[23]);
                              size = {
                                pipX: x,
                                pipY: y,
                                width: ACTIVITY_PIP_SIZE.width,
                                height: ACTIVITY_PIP_SIZE.height,
                                windowDimensions: closure_3,
                                safeArea: closure_4,
                                bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom,
                                topAvoidanceRegion: pipAvoidanceSpecs.get().top,
                                positionOffset: null,
                                disableHorizontalSafeAreas: null,
                              };
                              tmp6 = closure_4;
                              getClampedPIPPosition = tmp3.getClampedPIPPosition;
                              tmp4 = ACTIVITY_PIP_SIZE;
                              tmp5 = closure_3;
                              obj2 = wrapperOffset;
                              value = undefined;
                              if (wrapperOffset.get().gestureActive) {
                                value = obj2.get();
                              }
                              size.positionOffset = value;
                              size.disableHorizontalSafeAreas = closure_10;
                              point2 = getClampedPIPPosition(size);
                              x2 = point2.x;
                              obj3 = shown;
                              y2 = point2.y;
                              tmp8 = shown.get() || closure_2;
                              if (!tmp8) {
                                num = 0.5;
                                if (x < 0.5) {
                                  num2 = 0;
                                  if (x >= 0) {
                                    tmp12 = globalThis;
                                    _Math2 = Math;
                                    tmp13 = PIP_WINDOW_OFFSET;
                                    sum = -tmp4.width + Math.max(tmp6.right, PIP_WINDOW_OFFSET);
                                  }
                                  x2 = sum;
                                }
                                tmp9 = globalThis;
                                _Math = Math;
                                tmp10 = PIP_WINDOW_OFFSET;
                                sum = tmp5.width + Math.max(tmp6.right, PIP_WINDOW_OFFSET);
                              }
                              transitionComplete = function transitionComplete(arg0) {
                                const tmp =
                                  undefined !== arg0 &&
                                  arg0 &&
                                  closure_1_0 === transitionState(stateFromStores[24]).TransitionStates.YEETED;
                                if (tmp) {
                                  const obj = transitionState(stateFromStores[22]);
                                  obj.runOnJS(transitionCleanUp)();
                                }
                              };
                              obj1 = {
                                transitionState,
                                TransitionStates: tmp(tmp2[24]).TransitionStates,
                                runOnJS: tmp(tmp2[22]).runOnJS,
                                transitionCleanUp,
                              };
                              transitionComplete.__closure = obj1;
                              transitionComplete.__workletHash = 11561549591243;
                              transitionComplete.__initData = closure_23;
                              num3 = 1;
                              tmp14 = closure_2;
                              if (tmp14) {
                                tmpResult = tmp(tmp2[25]);
                                withTiming = tmpResult.withTiming;
                                num4 = 0;
                                if (obj3.get()) {
                                  num4 = 1;
                                }
                                tmp16 = closure_19;
                                str = "animate-always";
                                tmp17 = tmpResult;
                                tmp18 = num4;
                                tmp19 = transitionComplete;
                                num3 = withTiming(num4, closure_19, "animate-always", transitionComplete);
                              }
                              obj9 = { opacity: num3, transform: null };
                              tmpResult1 = tmp(tmp2[26]);
                              obj10 = {
                                translateY: tmpResult1.withSpring(
                                  y2,
                                  obj2.get().gestureActive ? closure_12 : closure_13,
                                  "animate-always",
                                ),
                              };
                              items = [,];
                              items[0] = obj10;
                              tmpResult2 = tmp(tmp2[26]);
                              withSpring = tmpResult2.withSpring;
                              tmp21 = obj2.get().gestureActive ? closure_12 : closure_13;
                              tmp22 = undefined;
                              if (!tmp14) {
                                tmp22 = transitionComplete;
                              }
                              obj11 = { translateX: withSpring(x2, tmp21, "animate-always", tmp22) };
                              items[1] = obj11;
                              obj9.transform = items;
                              return obj9;
                            }
                          }
                          const tmp59 = <ThemeContextProvider theme={ThemeTypes.DARK}>{null}</ThemeContextProvider>;
                          cResult[37] = tmp40;
                          cResult[38] = tmp41;
                          cResult[39] = tmp51;
                          cResult[40] = tmp59;
                          tmp54 = tmp59;
                        }
                        cResult[34] = tmp35;
                        cResult[35] = tmp47;
                        const tmp53 = jsx(transitionState(stateFromStores[30]).GestureDetector, {
                          gesture: tmp35,
                          children: tmp47,
                        });
                        class B {
                          constructor() {
                            point = pipState.get();
                            x = point.x;
                            tmp = closure_0;
                            tmp2 = closure_2;
                            y = point.y;
                            tmp3 = closure_0(closure_2[23]);
                            size = {
                              pipX: x,
                              pipY: y,
                              width: ACTIVITY_PIP_SIZE.width,
                              height: ACTIVITY_PIP_SIZE.height,
                              windowDimensions: closure_3,
                              safeArea: closure_4,
                              bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom,
                              topAvoidanceRegion: pipAvoidanceSpecs.get().top,
                              positionOffset: null,
                              disableHorizontalSafeAreas: null,
                            };
                            tmp6 = closure_4;
                            getClampedPIPPosition = tmp3.getClampedPIPPosition;
                            tmp4 = ACTIVITY_PIP_SIZE;
                            tmp5 = closure_3;
                            obj2 = wrapperOffset;
                            value = undefined;
                            if (wrapperOffset.get().gestureActive) {
                              value = obj2.get();
                            }
                            size.positionOffset = value;
                            size.disableHorizontalSafeAreas = closure_10;
                            point2 = getClampedPIPPosition(size);
                            x2 = point2.x;
                            obj3 = shown;
                            y2 = point2.y;
                            tmp8 = shown.get() || closure_2;
                            if (!tmp8) {
                              num = 0.5;
                              if (x < 0.5) {
                                num2 = 0;
                                if (x >= 0) {
                                  tmp12 = globalThis;
                                  _Math2 = Math;
                                  tmp13 = PIP_WINDOW_OFFSET;
                                  sum = -tmp4.width + Math.max(tmp6.right, PIP_WINDOW_OFFSET);
                                }
                                x2 = sum;
                              }
                              tmp9 = globalThis;
                              _Math = Math;
                              tmp10 = PIP_WINDOW_OFFSET;
                              sum = tmp5.width + Math.max(tmp6.right, PIP_WINDOW_OFFSET);
                            }
                            transitionComplete = function transitionComplete(arg0) {
                              const tmp =
                                undefined !== arg0 &&
                                arg0 &&
                                closure_1_0 === transitionState(stateFromStores[24]).TransitionStates.YEETED;
                              if (tmp) {
                                const obj = transitionState(stateFromStores[22]);
                                obj.runOnJS(transitionCleanUp)();
                              }
                            };
                            obj1 = {
                              transitionState,
                              TransitionStates: tmp(tmp2[24]).TransitionStates,
                              runOnJS: tmp(tmp2[22]).runOnJS,
                              transitionCleanUp,
                            };
                            transitionComplete.__closure = obj1;
                            transitionComplete.__workletHash = 11561549591243;
                            transitionComplete.__initData = closure_23;
                            num3 = 1;
                            tmp14 = closure_2;
                            if (tmp14) {
                              tmpResult = tmp(tmp2[25]);
                              withTiming = tmpResult.withTiming;
                              num4 = 0;
                              if (obj3.get()) {
                                num4 = 1;
                              }
                              tmp16 = closure_19;
                              str = "animate-always";
                              tmp17 = tmpResult;
                              tmp18 = num4;
                              tmp19 = transitionComplete;
                              num3 = withTiming(num4, closure_19, "animate-always", transitionComplete);
                            }
                            obj9 = { opacity: num3, transform: null };
                            tmpResult1 = tmp(tmp2[26]);
                            obj10 = {
                              translateY: tmpResult1.withSpring(
                                y2,
                                obj2.get().gestureActive ? closure_12 : closure_13,
                                "animate-always",
                              ),
                            };
                            items = [,];
                            items[0] = obj10;
                            tmpResult2 = tmp(tmp2[26]);
                            withSpring = tmpResult2.withSpring;
                            tmp21 = obj2.get().gestureActive ? closure_12 : closure_13;
                            tmp22 = undefined;
                            if (!tmp14) {
                              tmp22 = transitionComplete;
                            }
                            obj11 = { translateX: withSpring(x2, tmp21, "animate-always", tmp22) };
                            items[1] = obj11;
                            obj9.transform = items;
                            return obj9;
                          }
                        }
                        tmp51 = tmp53;
                      }
                      const tmp50 = <safeArea style={tmp4.mask}>{tmp43}</safeArea>;
                      cResult[31] = tmp4.mask;
                      cResult[32] = tmp43;
                      class B {
                        constructor() {
                          point = pipState.get();
                          x = point.x;
                          tmp = closure_0;
                          tmp2 = closure_2;
                          y = point.y;
                          tmp3 = closure_0(closure_2[23]);
                          size = {
                            pipX: x,
                            pipY: y,
                            width: ACTIVITY_PIP_SIZE.width,
                            height: ACTIVITY_PIP_SIZE.height,
                            windowDimensions: closure_3,
                            safeArea: closure_4,
                            bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom,
                            topAvoidanceRegion: pipAvoidanceSpecs.get().top,
                            positionOffset: null,
                            disableHorizontalSafeAreas: null,
                          };
                          tmp6 = closure_4;
                          getClampedPIPPosition = tmp3.getClampedPIPPosition;
                          tmp4 = ACTIVITY_PIP_SIZE;
                          tmp5 = closure_3;
                          obj2 = wrapperOffset;
                          value = undefined;
                          if (wrapperOffset.get().gestureActive) {
                            value = obj2.get();
                          }
                          size.positionOffset = value;
                          size.disableHorizontalSafeAreas = closure_10;
                          point2 = getClampedPIPPosition(size);
                          x2 = point2.x;
                          obj3 = shown;
                          y2 = point2.y;
                          tmp8 = shown.get() || closure_2;
                          if (!tmp8) {
                            num = 0.5;
                            if (x < 0.5) {
                              num2 = 0;
                              if (x >= 0) {
                                tmp12 = globalThis;
                                _Math2 = Math;
                                tmp13 = PIP_WINDOW_OFFSET;
                                sum = -tmp4.width + Math.max(tmp6.right, PIP_WINDOW_OFFSET);
                              }
                              x2 = sum;
                            }
                            tmp9 = globalThis;
                            _Math = Math;
                            tmp10 = PIP_WINDOW_OFFSET;
                            sum = tmp5.width + Math.max(tmp6.right, PIP_WINDOW_OFFSET);
                          }
                          transitionComplete = function transitionComplete(arg0) {
                            const tmp =
                              undefined !== arg0 &&
                              arg0 &&
                              closure_1_0 === transitionState(stateFromStores[24]).TransitionStates.YEETED;
                            if (tmp) {
                              const obj = transitionState(stateFromStores[22]);
                              obj.runOnJS(transitionCleanUp)();
                            }
                          };
                          obj1 = {
                            transitionState,
                            TransitionStates: tmp(tmp2[24]).TransitionStates,
                            runOnJS: tmp(tmp2[22]).runOnJS,
                            transitionCleanUp,
                          };
                          transitionComplete.__closure = obj1;
                          transitionComplete.__workletHash = 11561549591243;
                          transitionComplete.__initData = closure_23;
                          num3 = 1;
                          tmp14 = closure_2;
                          if (tmp14) {
                            tmpResult = tmp(tmp2[25]);
                            withTiming = tmpResult.withTiming;
                            num4 = 0;
                            if (obj3.get()) {
                              num4 = 1;
                            }
                            tmp16 = closure_19;
                            str = "animate-always";
                            tmp17 = tmpResult;
                            tmp18 = num4;
                            tmp19 = transitionComplete;
                            num3 = withTiming(num4, closure_19, "animate-always", transitionComplete);
                          }
                          obj9 = { opacity: num3, transform: null };
                          tmpResult1 = tmp(tmp2[26]);
                          obj10 = {
                            translateY: tmpResult1.withSpring(
                              y2,
                              obj2.get().gestureActive ? closure_12 : closure_13,
                              "animate-always",
                            ),
                          };
                          items = [,];
                          items[0] = obj10;
                          tmpResult2 = tmp(tmp2[26]);
                          withSpring = tmpResult2.withSpring;
                          tmp21 = obj2.get().gestureActive ? closure_12 : closure_13;
                          tmp22 = undefined;
                          if (!tmp14) {
                            tmp22 = transitionComplete;
                          }
                          obj11 = { translateX: withSpring(x2, tmp21, "animate-always", tmp22) };
                          items[1] = obj11;
                          obj9.transform = items;
                          return obj9;
                        }
                      }
                      cResult[33] = tmp50;
                      tmp47 = tmp50;
                    }
                  }
                  const tmp44 = !tmp36 && <safeArea style={tmp30}>{children}</safeArea>;
                  cResult[27] = tmp30;
                  cResult[28] = children;
                  cResult[29] = tmp36;
                  cResult[30] = tmp44;
                  class B {
                    constructor() {
                      point = pipState.get();
                      x = point.x;
                      tmp = closure_0;
                      tmp2 = closure_2;
                      y = point.y;
                      tmp3 = closure_0(closure_2[23]);
                      size = {
                        pipX: x,
                        pipY: y,
                        width: ACTIVITY_PIP_SIZE.width,
                        height: ACTIVITY_PIP_SIZE.height,
                        windowDimensions: closure_3,
                        safeArea: closure_4,
                        bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom,
                        topAvoidanceRegion: pipAvoidanceSpecs.get().top,
                        positionOffset: null,
                        disableHorizontalSafeAreas: null,
                      };
                      tmp6 = closure_4;
                      getClampedPIPPosition = tmp3.getClampedPIPPosition;
                      tmp4 = ACTIVITY_PIP_SIZE;
                      tmp5 = closure_3;
                      obj2 = wrapperOffset;
                      value = undefined;
                      if (wrapperOffset.get().gestureActive) {
                        value = obj2.get();
                      }
                      size.positionOffset = value;
                      size.disableHorizontalSafeAreas = closure_10;
                      point2 = getClampedPIPPosition(size);
                      x2 = point2.x;
                      obj3 = shown;
                      y2 = point2.y;
                      tmp8 = shown.get() || closure_2;
                      if (!tmp8) {
                        num = 0.5;
                        if (x < 0.5) {
                          num2 = 0;
                          if (x >= 0) {
                            tmp12 = globalThis;
                            _Math2 = Math;
                            tmp13 = PIP_WINDOW_OFFSET;
                            sum = -tmp4.width + Math.max(tmp6.right, PIP_WINDOW_OFFSET);
                          }
                          x2 = sum;
                        }
                        tmp9 = globalThis;
                        _Math = Math;
                        tmp10 = PIP_WINDOW_OFFSET;
                        sum = tmp5.width + Math.max(tmp6.right, PIP_WINDOW_OFFSET);
                      }
                      transitionComplete = function transitionComplete(arg0) {
                        const tmp =
                          undefined !== arg0 &&
                          arg0 &&
                          closure_1_0 === transitionState(stateFromStores[24]).TransitionStates.YEETED;
                        if (tmp) {
                          const obj = transitionState(stateFromStores[22]);
                          obj.runOnJS(transitionCleanUp)();
                        }
                      };
                      obj1 = {
                        transitionState,
                        TransitionStates: tmp(tmp2[24]).TransitionStates,
                        runOnJS: tmp(tmp2[22]).runOnJS,
                        transitionCleanUp,
                      };
                      transitionComplete.__closure = obj1;
                      transitionComplete.__workletHash = 11561549591243;
                      transitionComplete.__initData = closure_23;
                      num3 = 1;
                      tmp14 = closure_2;
                      if (tmp14) {
                        tmpResult = tmp(tmp2[25]);
                        withTiming = tmpResult.withTiming;
                        num4 = 0;
                        if (obj3.get()) {
                          num4 = 1;
                        }
                        tmp16 = closure_19;
                        str = "animate-always";
                        tmp17 = tmpResult;
                        tmp18 = num4;
                        tmp19 = transitionComplete;
                        num3 = withTiming(num4, closure_19, "animate-always", transitionComplete);
                      }
                      obj9 = { opacity: num3, transform: null };
                      tmpResult1 = tmp(tmp2[26]);
                      obj10 = {
                        translateY: tmpResult1.withSpring(
                          y2,
                          obj2.get().gestureActive ? closure_12 : closure_13,
                          "animate-always",
                        ),
                      };
                      items = [,];
                      items[0] = obj10;
                      tmpResult2 = tmp(tmp2[26]);
                      withSpring = tmpResult2.withSpring;
                      tmp21 = obj2.get().gestureActive ? closure_12 : closure_13;
                      tmp22 = undefined;
                      if (!tmp14) {
                        tmp22 = transitionComplete;
                      }
                      obj11 = { translateX: withSpring(x2, tmp21, "animate-always", tmp22) };
                      items[1] = obj11;
                      obj9.transform = items;
                      return obj9;
                    }
                  }
                }
                class B {
                  constructor() {
                    point = pipState.get();
                    x = point.x;
                    tmp = closure_0;
                    tmp2 = closure_2;
                    y = point.y;
                    tmp3 = closure_0(closure_2[23]);
                    size = {
                      pipX: x,
                      pipY: y,
                      width: ACTIVITY_PIP_SIZE.width,
                      height: ACTIVITY_PIP_SIZE.height,
                      windowDimensions: closure_3,
                      safeArea: closure_4,
                      bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom,
                      topAvoidanceRegion: pipAvoidanceSpecs.get().top,
                      positionOffset: null,
                      disableHorizontalSafeAreas: null,
                    };
                    tmp6 = closure_4;
                    getClampedPIPPosition = tmp3.getClampedPIPPosition;
                    tmp4 = ACTIVITY_PIP_SIZE;
                    tmp5 = closure_3;
                    obj2 = wrapperOffset;
                    value = undefined;
                    if (wrapperOffset.get().gestureActive) {
                      value = obj2.get();
                    }
                    size.positionOffset = value;
                    size.disableHorizontalSafeAreas = closure_10;
                    point2 = getClampedPIPPosition(size);
                    x2 = point2.x;
                    obj3 = shown;
                    y2 = point2.y;
                    tmp8 = shown.get() || closure_2;
                    if (!tmp8) {
                      num = 0.5;
                      if (x < 0.5) {
                        num2 = 0;
                        if (x >= 0) {
                          tmp12 = globalThis;
                          _Math2 = Math;
                          tmp13 = PIP_WINDOW_OFFSET;
                          sum = -tmp4.width + Math.max(tmp6.right, PIP_WINDOW_OFFSET);
                        }
                        x2 = sum;
                      }
                      tmp9 = globalThis;
                      _Math = Math;
                      tmp10 = PIP_WINDOW_OFFSET;
                      sum = tmp5.width + Math.max(tmp6.right, PIP_WINDOW_OFFSET);
                    }
                    transitionComplete = function transitionComplete(arg0) {
                      const tmp =
                        undefined !== arg0 &&
                        arg0 &&
                        closure_1_0 === transitionState(stateFromStores[24]).TransitionStates.YEETED;
                      if (tmp) {
                        const obj = transitionState(stateFromStores[22]);
                        obj.runOnJS(transitionCleanUp)();
                      }
                    };
                    obj1 = {
                      transitionState,
                      TransitionStates: tmp(tmp2[24]).TransitionStates,
                      runOnJS: tmp(tmp2[22]).runOnJS,
                      transitionCleanUp,
                    };
                    transitionComplete.__closure = obj1;
                    transitionComplete.__workletHash = 11561549591243;
                    transitionComplete.__initData = closure_23;
                    num3 = 1;
                    tmp14 = closure_2;
                    if (tmp14) {
                      tmpResult = tmp(tmp2[25]);
                      withTiming = tmpResult.withTiming;
                      num4 = 0;
                      if (obj3.get()) {
                        num4 = 1;
                      }
                      tmp16 = closure_19;
                      str = "animate-always";
                      tmp17 = tmpResult;
                      tmp18 = num4;
                      tmp19 = transitionComplete;
                      num3 = withTiming(num4, closure_19, "animate-always", transitionComplete);
                    }
                    obj9 = { opacity: num3, transform: null };
                    tmpResult1 = tmp(tmp2[26]);
                    obj10 = {
                      translateY: tmpResult1.withSpring(
                        y2,
                        obj2.get().gestureActive ? closure_12 : closure_13,
                        "animate-always",
                      ),
                    };
                    items = [,];
                    items[0] = obj10;
                    tmpResult2 = tmp(tmp2[26]);
                    withSpring = tmpResult2.withSpring;
                    tmp21 = obj2.get().gestureActive ? closure_12 : closure_13;
                    tmp22 = undefined;
                    if (!tmp14) {
                      tmp22 = transitionComplete;
                    }
                    obj11 = { translateX: withSpring(x2, tmp21, "animate-always", tmp22) };
                    items[1] = obj11;
                    obj9.transform = items;
                    return obj9;
                  }
                }
                tmp42[0] = tmp4.wrapper;
                tmp42[1] = animatedStyle;
                cResult[24] = tmp4.wrapper;
                cResult[25] = animatedStyle;
                cResult[26] = tmp42;
                tmp41 = tmp42;
              }
            }
            const obj12 = {
              panGestureEnabled: true,
              onTapGestureStart: tmp31,
              mode: transitionState(stateFromStores[28]).MorphablePanelModes.PIP,
              pipState,
              wrapperOffset,
              disableHorizontalSafeAreas: false,
            };
            cResult[16] = tmp31;
            cResult[17] = pipState;
            class B {
              constructor() {
                point = pipState.get();
                x = point.x;
                tmp = closure_0;
                tmp2 = closure_2;
                y = point.y;
                tmp3 = closure_0(closure_2[23]);
                size = {
                  pipX: x,
                  pipY: y,
                  width: ACTIVITY_PIP_SIZE.width,
                  height: ACTIVITY_PIP_SIZE.height,
                  windowDimensions: closure_3,
                  safeArea: closure_4,
                  bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom,
                  topAvoidanceRegion: pipAvoidanceSpecs.get().top,
                  positionOffset: null,
                  disableHorizontalSafeAreas: null,
                };
                tmp6 = closure_4;
                getClampedPIPPosition = tmp3.getClampedPIPPosition;
                tmp4 = ACTIVITY_PIP_SIZE;
                tmp5 = closure_3;
                obj2 = wrapperOffset;
                value = undefined;
                if (wrapperOffset.get().gestureActive) {
                  value = obj2.get();
                }
                size.positionOffset = value;
                size.disableHorizontalSafeAreas = closure_10;
                point2 = getClampedPIPPosition(size);
                x2 = point2.x;
                obj3 = shown;
                y2 = point2.y;
                tmp8 = shown.get() || closure_2;
                if (!tmp8) {
                  num = 0.5;
                  if (x < 0.5) {
                    num2 = 0;
                    if (x >= 0) {
                      tmp12 = globalThis;
                      _Math2 = Math;
                      tmp13 = PIP_WINDOW_OFFSET;
                      sum = -tmp4.width + Math.max(tmp6.right, PIP_WINDOW_OFFSET);
                    }
                    x2 = sum;
                  }
                  tmp9 = globalThis;
                  _Math = Math;
                  tmp10 = PIP_WINDOW_OFFSET;
                  sum = tmp5.width + Math.max(tmp6.right, PIP_WINDOW_OFFSET);
                }
                transitionComplete = function transitionComplete(arg0) {
                  const tmp =
                    undefined !== arg0 &&
                    arg0 &&
                    closure_1_0 === transitionState(stateFromStores[24]).TransitionStates.YEETED;
                  if (tmp) {
                    const obj = transitionState(stateFromStores[22]);
                    obj.runOnJS(transitionCleanUp)();
                  }
                };
                obj1 = {
                  transitionState,
                  TransitionStates: tmp(tmp2[24]).TransitionStates,
                  runOnJS: tmp(tmp2[22]).runOnJS,
                  transitionCleanUp,
                };
                transitionComplete.__closure = obj1;
                transitionComplete.__workletHash = 11561549591243;
                transitionComplete.__initData = closure_23;
                num3 = 1;
                tmp14 = closure_2;
                if (tmp14) {
                  tmpResult = tmp(tmp2[25]);
                  withTiming = tmpResult.withTiming;
                  num4 = 0;
                  if (obj3.get()) {
                    num4 = 1;
                  }
                  tmp16 = closure_19;
                  str = "animate-always";
                  tmp17 = tmpResult;
                  tmp18 = num4;
                  tmp19 = transitionComplete;
                  num3 = withTiming(num4, closure_19, "animate-always", transitionComplete);
                }
                obj9 = { opacity: num3, transform: null };
                tmpResult1 = tmp(tmp2[26]);
                obj10 = {
                  translateY: tmpResult1.withSpring(
                    y2,
                    obj2.get().gestureActive ? closure_12 : closure_13,
                    "animate-always",
                  ),
                };
                items = [,];
                items[0] = obj10;
                tmpResult2 = tmp(tmp2[26]);
                withSpring = tmpResult2.withSpring;
                tmp21 = obj2.get().gestureActive ? closure_12 : closure_13;
                tmp22 = undefined;
                if (!tmp14) {
                  tmp22 = transitionComplete;
                }
                obj11 = { translateX: withSpring(x2, tmp21, "animate-always", tmp22) };
                items[1] = obj11;
                obj9.transform = items;
                return obj9;
              }
            }
            cResult[18] = wrapperOffset;
            cResult[19] = obj12;
            tmp34 = obj12;
          }
          size = { width, height, pointerEvents: "none" };
          cResult[11] = height;
          cResult[12] = width;
          class B {
            constructor() {
              point = pipState.get();
              x = point.x;
              tmp = closure_0;
              tmp2 = closure_2;
              y = point.y;
              tmp3 = closure_0(closure_2[23]);
              size = {
                pipX: x,
                pipY: y,
                width: ACTIVITY_PIP_SIZE.width,
                height: ACTIVITY_PIP_SIZE.height,
                windowDimensions: closure_3,
                safeArea: closure_4,
                bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom,
                topAvoidanceRegion: pipAvoidanceSpecs.get().top,
                positionOffset: null,
                disableHorizontalSafeAreas: null,
              };
              tmp6 = closure_4;
              getClampedPIPPosition = tmp3.getClampedPIPPosition;
              tmp4 = ACTIVITY_PIP_SIZE;
              tmp5 = closure_3;
              obj2 = wrapperOffset;
              value = undefined;
              if (wrapperOffset.get().gestureActive) {
                value = obj2.get();
              }
              size.positionOffset = value;
              size.disableHorizontalSafeAreas = closure_10;
              point2 = getClampedPIPPosition(size);
              x2 = point2.x;
              obj3 = shown;
              y2 = point2.y;
              tmp8 = shown.get() || closure_2;
              if (!tmp8) {
                num = 0.5;
                if (x < 0.5) {
                  num2 = 0;
                  if (x >= 0) {
                    tmp12 = globalThis;
                    _Math2 = Math;
                    tmp13 = PIP_WINDOW_OFFSET;
                    sum = -tmp4.width + Math.max(tmp6.right, PIP_WINDOW_OFFSET);
                  }
                  x2 = sum;
                }
                tmp9 = globalThis;
                _Math = Math;
                tmp10 = PIP_WINDOW_OFFSET;
                sum = tmp5.width + Math.max(tmp6.right, PIP_WINDOW_OFFSET);
              }
              transitionComplete = function transitionComplete(arg0) {
                const tmp =
                  undefined !== arg0 &&
                  arg0 &&
                  closure_1_0 === transitionState(stateFromStores[24]).TransitionStates.YEETED;
                if (tmp) {
                  const obj = transitionState(stateFromStores[22]);
                  obj.runOnJS(transitionCleanUp)();
                }
              };
              obj1 = {
                transitionState,
                TransitionStates: tmp(tmp2[24]).TransitionStates,
                runOnJS: tmp(tmp2[22]).runOnJS,
                transitionCleanUp,
              };
              transitionComplete.__closure = obj1;
              transitionComplete.__workletHash = 11561549591243;
              transitionComplete.__initData = closure_23;
              num3 = 1;
              tmp14 = closure_2;
              if (tmp14) {
                tmpResult = tmp(tmp2[25]);
                withTiming = tmpResult.withTiming;
                num4 = 0;
                if (obj3.get()) {
                  num4 = 1;
                }
                tmp16 = closure_19;
                str = "animate-always";
                tmp17 = tmpResult;
                tmp18 = num4;
                tmp19 = transitionComplete;
                num3 = withTiming(num4, closure_19, "animate-always", transitionComplete);
              }
              obj9 = { opacity: num3, transform: null };
              tmpResult1 = tmp(tmp2[26]);
              obj10 = {
                translateY: tmpResult1.withSpring(
                  y2,
                  obj2.get().gestureActive ? closure_12 : closure_13,
                  "animate-always",
                ),
              };
              items = [,];
              items[0] = obj10;
              tmpResult2 = tmp(tmp2[26]);
              withSpring = tmpResult2.withSpring;
              tmp21 = obj2.get().gestureActive ? closure_12 : closure_13;
              tmp22 = undefined;
              if (!tmp14) {
                tmp22 = transitionComplete;
              }
              obj11 = { translateX: withSpring(x2, tmp21, "animate-always", tmp22) };
              items[1] = obj11;
              obj9.transform = items;
              return obj9;
            }
          }
          tmp30 = size;
        }
        const obj13 = {
          pipWidth: null,
          pipHeight: null,
          pipOrientationLockState,
          isLandscape: wrapperDimensions.isLandscape,
        };
        ({ width: obj7.pipWidth, height: obj7.pipHeight } = tmp21);
        const tmp29 = transitionCleanUp(stateFromStores[27])(obj13);
        cResult[8] = pipOrientationLockState;
        cResult[9] = wrapperDimensions.isLandscape;
        cResult[10] = tmp29;
        tmp28 = tmp29;
      }
      const obj14 = { transitionState, context };
      cResult[2] = context;
      cResult[3] = transitionState;
      cResult[4] = obj14;
      tmp13 = obj14;
    }
  : (transitionState) => {
      let children;
      let hasActivity;
      let pipOrientationLockState;
      transitionState = transitionState.transitionState;
      const transitionCleanUp = transitionState.transitionCleanUp;
      const context = transitionState.context;
      let stateFromStores;
      let wrapperOffset;
      let width;
      let height;
      ({ children, pipOrientationLockState, hasActivity } = transitionState);
      const tmp = closure_20();
      let obj = transitionState(stateFromStores[18]);
      let items = [wrapperOffset];
      stateFromStores = obj.useStateFromStores(items, () => wrapperOffset.useReducedMotion);
      let tmp3 = transitionCleanUp(stateFromStores[19])();
      windowDimensions = tmp3;
      const tmp4 = transitionCleanUp(stateFromStores[17])();
      safeArea = tmp4;
      const context1 = windowDimensions.useContext(context);
      wrapperOffset = context1.wrapperOffset;
      const setMode = context1.setMode;
      const pipState = context1.pipState;
      const pipAvoidanceSpecs = context1.pipAvoidanceSpecs;
      const wrapperDimensions = context1.wrapperDimensions;
      const obj2 = transitionState(stateFromStores[20]);
      const lockedWebView = obj2.useLockedWebView({ transitionState, context });
      const shown = lockedWebView.shown;
      const renderWebView = lockedWebView.renderWebView;
      const items1 = [wrapperOffset];
      const effect = windowDimensions.useEffect(() => {
        updateSharedValueIfChangedDefault(wrapperOffset, { gestureActive: false });
      }, items1);
      let tmp8 = setMode((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
      const ACTIVITY_PIP_SIZE = tmp8;
      const obj3 = transitionState(stateFromStores[22]);
      class W {
        constructor() {
          let items;
          let value;
          const point = pipState.get();
          const x = point.x;
          const y = point.y;
          const tmp3 = MorphablePanelUtils;
          size = {
            pipX: x,
            pipY: y,
            width: ACTIVITY_PIP_SIZE.width,
            height: ACTIVITY_PIP_SIZE.height,
            windowDimensions,
            safeArea,
            bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom,
            topAvoidanceRegion: pipAvoidanceSpecs.get().top,
            positionOffset: value,
            disableHorizontalSafeAreas,
          };
          const getClampedPIPPosition = tmp3.getClampedPIPPosition;
          value = undefined;
          if (wrapperOffset.get().gestureActive) {
            value = wrapperOffset.get();
          }
          const point2 = getClampedPIPPosition(size);
          let x2 = point2.x;
          const y2 = point2.y;
          const tmp8 = shown.get() || stateFromStores;
          if (!tmp8) {
            if (x < 0.5) {
              let sum;
              if (x >= 0) {
                const _Math2 = Math;
                sum = -ACTIVITY_PIP_SIZE.width + Math.max(safeArea.right, PIP_WINDOW_OFFSET);
              }
              x2 = sum;
            }
            const _Math = Math;
            sum = windowDimensions.width + Math.max(safeArea.right, PIP_WINDOW_OFFSET);
          }
          function transitionComplete() {
            let flag = arg0;
            if (arg0 === undefined) {
              flag = false;
            }
            if (flag) {
              flag = closure_1_0 === transitionState(stateFromStores[24]).TransitionStates.YEETED;
            }
            if (flag) {
              const obj = transitionState(stateFromStores[22]);
              obj.runOnJS(transitionCleanUp)();
            }
          }
          let obj = {
            transitionState,
            TransitionStates: native2.TransitionStates,
            runOnJS: ReanimatedRexport.runOnJS,
            transitionCleanUp,
          };
          transitionComplete.__closure = obj;
          transitionComplete.__workletHash = 1100699381874;
          transitionComplete.__initData = __initData;
          let num3 = 1;
          if (stateFromStores) {
            const withTiming = timing.withTiming;
            let num4 = 0;
            const tmpResult = timing;
            if (shown.get()) {
              num4 = 1;
            }
            num3 = withTiming(num4, REDUCED_MOTION_TIMING, "animate-always", transitionComplete);
          }
          const obj4 = { opacity: num3, transform: items };
          const tmpResult3 = spring;
          items = [
            {
              translateY: tmpResult3.withSpring(
                y2,
                wrapperOffset.get().gestureActive ? closure_12 : map1,
                "animate-always",
              ),
            },
          ];
          ({
            translateY: tmpResult3.withSpring(
              y2,
              wrapperOffset.get().gestureActive ? closure_12 : map1,
              "animate-always",
            ),
          });
          const withSpring = spring.withSpring;
          spring;
          let tmp22;
          const tmp21 = wrapperOffset.get().gestureActive ? closure_12 : map1;
          if (!stateFromStores) {
            tmp22 = transitionComplete;
          }
          items[1] = { translateX: withSpring(x2, tmp21, "animate-always", tmp22) };
          ({ translateX: withSpring(x2, tmp21, "animate-always", tmp22) });
          return obj4;
        }
      }
      let obj4 = {
        pipState,
        getClampedPIPPosition: transitionState(stateFromStores[23]).getClampedPIPPosition,
        ACTIVITY_PIP_SIZE,
        windowDimensions: tmp3,
        safeArea: tmp4,
        pipAvoidanceSpecs,
        wrapperOffset,
        disableHorizontalSafeAreas: tmp8,
        shown,
        reduceMotion: stateFromStores,
        PIP_WINDOW_OFFSET,
        transitionState,
        TransitionStates: transitionState(stateFromStores[24]).TransitionStates,
        runOnJS: transitionState(stateFromStores[22]).runOnJS,
        transitionCleanUp,
        withTiming: transitionState(stateFromStores[25]).withTiming,
        REDUCED_MOTION_TIMING,
        withSpring: transitionState(stateFromStores[26]).withSpring,
        ACTIVITY_LAYOUT_PHYSICS_GESTURE: height,
        ACTIVITY_LAYOUT_PHYSICS_DEFAULT,
      };
      W.__closure = obj4;
      W.__workletHash = 17034982412398;
      W.__initData = __initData4;
      const animatedStyle = obj3.useAnimatedStyle(W);
      const obj5 = {
        pipWidth: ACTIVITY_PIP_SIZE.width,
        pipHeight: ACTIVITY_PIP_SIZE.height,
        pipOrientationLockState,
        isLandscape: wrapperDimensions.isLandscape,
      };
      size = transitionCleanUp(stateFromStores[27])(obj5);
      width = size.width;
      height = size.height;
      const items2 = [width, height];
      class G {
        constructor() {
          const obj = ReanimatedRexport;
          obj.runOnJS(setMode)(unpackModuleId.PANEL);
        }
      }
      const obj6 = { runOnJS: transitionState(stateFromStores[22]).runOnJS, setMode, ActivityPanelModes: width };
      const memo = windowDimensions.useMemo(() => {
        size = { width, height, pointerEvents: "none" };
        return size;
      }, items2);
      const useCallback = windowDimensions.useCallback;
      G.__closure = obj6;
      G.__workletHash = 1507841633451;
      G.__initData = __initData6;
      const items3 = [setMode];
      const callback = useCallback(G, items3);
      const obj7 = {
        panGestureEnabled: true,
        onTapGestureStart: callback,
        mode: transitionState(stateFromStores[28]).MorphablePanelModes.PIP,
        pipState,
        wrapperOffset,
        disableHorizontalSafeAreas: false,
      };
      const items4 = [setMode];
      const tmp12 = transitionCleanUp(stateFromStores[28]);
      const tmp12Result = tmp12(obj7);
      const memo1 = windowDimensions.useMemo(() => {
        let intl;
        let items;
        const obj = {
          accessible: true,
          accessibilityLabel: intl.string(intl2.t["3ejJer"]),
          accessibilityRole: "button",
          accessibilityActions: items,
          onAccessibilityAction() {
            setMode(width.PANEL);
          },
        };
        intl = intl2.intl;
        items = [{ name: "activate" }];
        return obj;
      }, items4);
      const ThemeContextProvider = transitionState(stateFromStores[24]).ThemeContextProvider;
      const items5 = [tmp.wrapper, animatedStyle];
      const View = transitionCleanUp(stateFromStores[22]).View;
      const merged = Object.assign(memo1);
      let tmp18 = !renderWebView;
      const obj10 = { gesture: tmp12Result, children: null };
      const GestureDetector = transitionState(stateFromStores[30]).GestureDetector;
      if (renderWebView) {
        tmp18 = !hasActivity;
      }
      return <ThemeContextProvider theme={ThemeTypes.DARK}>{null}</ThemeContextProvider>;
    };
let closure_28 = tmp10;
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let channelId;
        let tmp11;
        let tmp13;
        let tmp4;
        let tmp5;
        let tmp9;
        let transitionCleanUp;
        let transitionState;
        const tmp = channelId;
        let obj = channelId(576);
        const cResult = obj.c(17);
        ({ transitionState, transitionCleanUp } = arg0);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [EmbeddedActivitiesStore];
          const fn = function o() {
            let obj2;
            const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
            const obj = {
              channelId: obj2.getEmbeddedActivityLocationChannelId(connectedActivityLocation),
              activity: EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation),
            };
            obj2 = channelId(dependencyMap[31]);
            return obj;
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        const tmpResult = tmp(504);
        const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
        channelId = stateFromStoresObject.channelId;
        const activity = stateFromStoresObject.activity;
        let applicationId;
        if (activity != null) {
          applicationId = activity.applicationId;
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [EmbeddedActivitiesStore];
          cResult[2] = items1;
          tmp9 = items1;
        } else {
          tmp9 = cResult[2];
        }
        if (cResult[3] !== applicationId) {
          const fn2 = function h() {
            let pipOrientationLockStateForApp;
            if (null != applicationId) {
              pipOrientationLockStateForApp = EmbeddedActivitiesStore.getPipOrientationLockStateForApp(tmp);
            }
            return pipOrientationLockStateForApp;
          };
          cResult[3] = applicationId;
          cResult[4] = fn2;
          tmp11 = fn2;
        } else {
          tmp11 = cResult[4];
        }
        const tmpResult3 = tmp(504);
        const stateFromStores = tmpResult3.useStateFromStores(tmp9, tmp11);
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [ChannelStore];
          cResult[5] = items2;
          tmp13 = items2;
        } else {
          tmp13 = cResult[5];
        }
        if (cResult[6] !== channelId) {
          class O {
            constructor() {
              return ChannelStore.getChannel(channelId);
            }
          }
          cResult[6] = channelId;
          cResult[7] = O;
        } else {
          class O {
            constructor() {
              return ChannelStore.getChannel(channelId);
            }
          }
        }
        const tmpResult4 = tmp(504);
        const stateFromStores1 = tmpResult4.useStateFromStores(tmp13, O);
        const landscapeSafeAreasConfig = closure_21().landscapeSafeAreasConfig;
        if (cResult[8] === stateFromStores1) {
          class O {
            constructor() {
              return ChannelStore.getChannel(channelId);
            }
          }
          if (cResult[11] === stateFromStores) {
            class O {
              constructor() {
                return ChannelStore.getChannel(channelId);
              }
            }
          }
          const tmp24 = (
            <closure_28
              transitionState={transitionState}
              transitionCleanUp={transitionCleanUp}
              pipOrientationLockState={stateFromStores}
              hasActivity={null != activity}
              context={applicationId(17197)}
            >
              {tmp18}
            </closure_28>
          );
          cResult[11] = stateFromStores;
          cResult[12] = null != activity;
          cResult[13] = tmp18;
          cResult[14] = transitionCleanUp;
          cResult[15] = transitionState;
          cResult[16] = tmp24;
        }
        cResult[8] = stateFromStores1;
        cResult[9] = landscapeSafeAreasConfig;
        cResult[10] = jsx(applicationId(9169), {
          channel: stateFromStores1,
          layoutMode: ActivityLayoutMode.PIP,
          portraitSafeAreasConfig,
          landscapeSafeAreasConfig,
        });
        const tmp19 = jsx(applicationId(9169), {
          channel: stateFromStores1,
          layoutMode: ActivityLayoutMode.PIP,
          portraitSafeAreasConfig,
          landscapeSafeAreasConfig,
        });
      }
    : (transitionState) => {
        let _undefined;
        let activity;
        let c2;
        transitionState = transitionState.transitionState;
        const transitionCleanUp = transitionState.transitionCleanUp;
        dependencyMap = undefined;
        activity = undefined;
        let stateFromStores;
        let stateFromStores1;
        let landscapeSafeAreasConfig;
        const tmp = transitionState;
        let obj = transitionState(504);
        const items = [EmbeddedActivitiesStore];
        const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
          let obj2;
          const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
          const obj = {
            channelId: obj2.getEmbeddedActivityLocationChannelId(connectedActivityLocation),
            activity: EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation),
          };
          obj2 = transitionState(c2[31]);
          return obj;
        });
        ({ channelId: c2, activity } = stateFromStoresObject);
        let applicationId;
        if (activity != null) {
          applicationId = activity.applicationId;
        }
        const items1 = [EmbeddedActivitiesStore];
        const tmpResult = tmp(504);
        stateFromStores = tmpResult.useStateFromStores(items1, () => {
          let pipOrientationLockStateForApp;
          if (null != applicationId) {
            pipOrientationLockStateForApp = EmbeddedActivitiesStore.getPipOrientationLockStateForApp(tmp);
          }
          return pipOrientationLockStateForApp;
        });
        const items2 = [landscapeSafeAreasConfig];
        const tmpResult2 = tmp(504);
        stateFromStores1 = tmpResult2.useStateFromStores(items2, () => ChannelStore.getChannel(c2));
        landscapeSafeAreasConfig = closure_21().landscapeSafeAreasConfig;
        const items3 = [
          activity,
          stateFromStores1,
          landscapeSafeAreasConfig,
          stateFromStores,
          transitionCleanUp,
          transitionState,
        ];
        return activity.useMemo(
          () => (
            <closure_28
              transitionState={transitionState}
              transitionCleanUp={transitionCleanUp}
              pipOrientationLockState={stateFromStores}
              hasActivity={null != activity}
              context={ActivityPanelStateContextDefault}
            >
              {null}
            </closure_28>
          ),
          items3,
        );
      },
);
let size = size_mod;
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelPIPView.tsx");

export default memoResult;
export const useBaseActivityPanelPIPView = tmp9;
export const BaseActivityPanelPIPView = tmp10;
