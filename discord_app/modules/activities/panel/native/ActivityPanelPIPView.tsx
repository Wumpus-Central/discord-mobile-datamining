// === Module 17170: ActivityPanelPIPView ===

// Module 17170 (ActivityPanelPIPView)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import native2 from "native" /* 4589 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import spring from "spring" /* 5597 */;
import EmbeddedActivityViewDefault from "EmbeddedActivityView" /* 9134 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 9774 */;
import ActivityPanelStateContextDefault from "ActivityPanelStateContext" /* 17168 */;
import MorphablePanelUtils from "MorphablePanelUtils" /* 17172 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 9156 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;

require = fn;
const View = fn(17).View;
const ActivityLayoutMode = fn(2011).ActivityLayoutMode;
const ActivityPanelConstants = fn(8705);
let ACTIVITY_PIP_SIZE = ActivityPanelConstants.ACTIVITY_PIP_SIZE;
({ ActivityPanelModes: closure_11, ACTIVITY_LAYOUT_PHYSICS_GESTURE: closure_12, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: map1, LANDSCAPE_IFRAME_HORIZONTAL_MARGIN: closure_14 } = ActivityPanelConstants);
const portraitSafeAreasConfig = fn(17171).DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
const ThemeTypes = fn(1085).ThemeTypes;
const PIP_WINDOW_OFFSET = fn(11903).PIP_WINDOW_OFFSET;
const jsx = fn(21).jsx;
const REDUCED_MOTION_TIMING = { duration: 300 };
const native = fn(1188);
const boxShadowStyle = native.generateBoxShadowStyle(fn(1188).EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS);
const createStyles = fn(4890);
let obj = { wrapper: null, mask: null };
let merged = Object.assign(ACTIVITY_PIP_SIZE);
const merged1 = Object.assign(boxShadowStyle);
obj.wrapper = { borderRadius: nativeDefault.radii.lg };
let obj4 = { borderRadius: nativeDefault.radii.lg };
const merged2 = Object.assign(ACTIVITY_PIP_SIZE);
obj.mask = { flexDirection: "row", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_20 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  const tmp2 = useSafeAreaInsetsDefault();
  let num;
  if (tmp2 != null) {
    num = tmp2.right;
  }
  if (num == null) {
    num = 0;
  }
  const bound = Math.max(state, num);
  if (cResult[0] !== bound) {
    const obj2 = { right: null };
    const obj3 = { disable: false, override: bound };
    obj2.right = obj3;
    cResult[0] = bound;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp5) {
    const obj4 = { landscapeSafeAreasConfig: tmp5 };
    cResult[2] = tmp5;
    cResult[3] = obj4;
    let tmp6 = obj4;
  } else {
    tmp6 = cResult[3];
  }
  return tmp6;
}) : (() => {
  const tmp = useSafeAreaInsetsDefault();
  const right = tmp;
  let obj = { landscapeSafeAreasConfig: null };
  const items = [tmp.right];
  obj.landscapeSafeAreasConfig = noop.useMemo(() => {
    let num;
    if (right != null) {
      num = right.right;
    }
    if (num == null) {
      num = 0;
    }
    const obj = { right: { disable: false, override: Math.max(state, num) } };
    return obj;
  }, items);
  return obj;
});
let closure_21 = tmp7;
const __initData = { code: "function ActivityPanelPIPViewTsx1(){const{pipState,getClampedPIPPosition,ACTIVITY_PIP_SIZE,windowDimensions,safeArea,pipAvoidanceSpecs,wrapperOffset,disableHorizontalSafeAreas,shown,reduceMotion,PIP_WINDOW_OFFSET,transitionState,TransitionStates,runOnJS,transitionCleanUp,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const{x:pipX,y:pipY}=pipState.get();let{x:x,y:y}=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:ACTIVITY_PIP_SIZE.width,height:ACTIVITY_PIP_SIZE.height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:wrapperOffset.get().gestureActive?wrapperOffset.get():undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});if(!shown.get()&&!reduceMotion){if(pipX<0.5&&pipX>=0){x=-(ACTIVITY_PIP_SIZE.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET));}else{x=windowDimensions.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET);}}const transitionComplete=function transitionComplete(t6){const finished=t6===undefined?false:t6;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}};return{opacity:reduceMotion?withTiming(shown.get()?1:0,REDUCED_MOTION_TIMING,\"animate-always\",transitionComplete):1,transform:[{translateY:withSpring(y,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,\"animate-always\")},{translateX:withSpring(x,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,\"animate-always\",!reduceMotion?transitionComplete:undefined)}]};}" };
const __initData2 = { code: "function transitionComplete_ActivityPanelPIPViewTsx2(t6){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;var finished=t6===undefined?false:t6;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}" };
const __initData3 = { code: "function ActivityPanelPIPViewTsx3(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PANEL);}" };
const __initData4 = { code: "function ActivityPanelPIPViewTsx4(){const{pipState,getClampedPIPPosition,ACTIVITY_PIP_SIZE,windowDimensions,safeArea,pipAvoidanceSpecs,wrapperOffset,disableHorizontalSafeAreas,shown,reduceMotion,PIP_WINDOW_OFFSET,transitionState,TransitionStates,runOnJS,transitionCleanUp,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const{x:pipX,y:pipY}=pipState.get();let{x:x,y:y}=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:ACTIVITY_PIP_SIZE.width,height:ACTIVITY_PIP_SIZE.height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:wrapperOffset.get().gestureActive?wrapperOffset.get():undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});if(!shown.get()&&!reduceMotion){if(pipX<0.5&&pipX>=0){x=-(ACTIVITY_PIP_SIZE.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET));}else{x=windowDimensions.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET);}}function transitionComplete(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}return{opacity:reduceMotion?withTiming(shown.get()?1:0,REDUCED_MOTION_TIMING,'animate-always',transitionComplete):1,transform:[{translateY:withSpring(y,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always')},{translateX:withSpring(x,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',!reduceMotion?transitionComplete:undefined)}]};}" };
const __initData5 = { code: "function transitionComplete_ActivityPanelPIPViewTsx5(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}" };
const __initData6 = { code: "function ActivityPanelPIPViewTsx6(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PANEL);}" };
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((transitionCleanUp) => {
  const cResult = transitionState(stateFromStores[16]).c(41);
  ({ children, transitionState } = transitionCleanUp);
  transitionCleanUp = transitionCleanUp.transitionCleanUp;
  ({ pipOrientationLockState, context } = transitionCleanUp);
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
  let obj = transitionState(stateFromStores[16]);
  stateFromStores = transitionState(stateFromStores[18]).useStateFromStores(tmp5, tmp6);
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
  if (cResult[2] === context) {
    if (cResult[3] === transitionState) {
      let tmp13 = cResult[4];
    }
    const lockedWebView = transitionState(tmp2[20]).useLockedWebView(tmp13);
    const shown = lockedWebView.shown;
    const renderWebView = lockedWebView.renderWebView;
    if (cResult[5] !== wrapperOffset) {
      const fn2 = function k() {
        updateSharedValueIfChangedDefault(wrapperOffset, { gestureActive: false });
      };
      const items1 = [wrapperOffset];
      cResult[5] = wrapperOffset;
      cResult[6] = fn2;
      cResult[7] = items1;
      let tmp16 = items1;
      let tmp15 = fn2;
    } else {
      tmp15 = cResult[6];
      tmp16 = cResult[7];
    }
    const effect = obj3.useEffect(tmp15, tmp16);
    const tmp19 = setMode((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
    const ACTIVITY_PIP_SIZE = tmp19;
    const tmpResult3 = transitionState(tmp2[20]);
    class B {
      constructor() {
        point = pipState.get();
        x = point.x;
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[23]);
        size = { pipX: x, pipY: point.y, width: ACTIVITY_PIP_SIZE.width, height: ACTIVITY_PIP_SIZE.height, windowDimensions: closure_3, safeArea: closure_4, bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top, positionOffset: null, disableHorizontalSafeAreas: null };
        width = ACTIVITY_PIP_SIZE;
        sum1 = closure_4;
        tmp3 = closure_3;
        obj3 = wrapperOffset;
        value = undefined;
        if (wrapperOffset.get().gestureActive) {
          value = obj3.get();
        }
        size.positionOffset = value;
        size.disableHorizontalSafeAreas = closure_10;
        point2 = obj.getClampedPIPPosition(size);
        x2 = point2.x;
        obj4 = shown;
        tmp6 = shown.get() || closure_2;
        if (tmp6) {
          transitionComplete = function transitionComplete(arg0) {
            let tmp = undefined !== arg0 && arg0;
            if (tmp) {
              tmp = closure_1_0 === transitionState(stateFromStores[24]).TransitionStates.YEETED;
            }
            if (tmp) {
              transitionState(stateFromStores[22]).runOnJS(transitionCleanUp)();
              const obj = transitionState(stateFromStores[22]);
            }
          };
          obj1 = { transitionState: null, TransitionStates: null, runOnJS: null, transitionCleanUp: null };
          tmp13 = transitionState;
          obj1.transitionState = transitionState;
          obj1.TransitionStates = tmp(tmp2[24]).TransitionStates;
          obj1.runOnJS = tmp(tmp2[22]).runOnJS;
          tmp14 = transitionCleanUp;
          obj1.transitionCleanUp = transitionCleanUp;
          transitionComplete.__closure = obj1;
          num3 = 11561549591243;
          transitionComplete.__workletHash = 11561549591243;
          tmp15 = closure_23;
          transitionComplete.__initData = closure_23;
          num4 = 1;
          num5 = 1;
          tmp16 = closure_2;
          if (closure_2) {
            tmpResult = tmp(tmp2[25]);
            num6 = 0;
            if (obj4.get()) {
              num6 = 1;
            }
            tmp17 = closure_19;
            str = "animate-always";
            tmp18 = tmpResult;
            tmp19 = num6;
            tmp20 = transitionComplete;
            num5 = tmpResult.withTiming(num6, closure_19, "animate-always", transitionComplete);
          }
          obj12 = { opacity: null, transform: null };
          obj12.opacity = num5;
          tmpResult1 = tmp(tmp2[26]);
          obj13 = { translateY: null };
          str2 = "animate-always";
          obj13.translateY = tmpResult1.withSpring(point2.y, obj3.get().gestureActive ? closure_12 : closure_13, "animate-always");
          items = [, ];
          items[0] = obj13;
          tmpResult2 = tmp(tmp2[26]);
          tmp21 = obj3.get().gestureActive ? closure_12 : closure_13;
          tmp22 = undefined;
          if (!tmp16) {
            tmp22 = transitionComplete;
          }
          obj14 = { translateX: null };
          tmp23 = tmpResult2;
          tmp24 = x2;
          tmp25 = tmp21;
          str3 = "animate-always";
          tmp26 = tmp22;
          obj14.translateX = tmpResult2.withSpring(x2, tmp21, "animate-always", tmp22);
          items[1] = obj14;
          obj12.transform = items;
          return obj12;
        } else {
          num = 0.5;
          if (x >= 0.5) {
            tmp7 = globalThis;
            _Math = Math;
            tmp8 = PIP_WINDOW_OFFSET;
            sum = tmp3.width + Math.max(sum1.right, PIP_WINDOW_OFFSET);
            tmp12 = sum;
          } else {
            num2 = 0;
          }
          width = width.width;
          tmp10 = globalThis;
          _Math2 = Math;
          tmp11 = PIP_WINDOW_OFFSET;
          sum1 = width + Math.max(sum1.right, PIP_WINDOW_OFFSET);
          sum = -sum1;
        }
        return;
      }
    }
    let obj2 = { pipState, getClampedPIPPosition: transitionState(tmp2[23]).getClampedPIPPosition, ACTIVITY_PIP_SIZE, windowDimensions: tmp10, safeArea: tmp11, pipAvoidanceSpecs, wrapperOffset, disableHorizontalSafeAreas: tmp19, shown, reduceMotion: stateFromStores, PIP_WINDOW_OFFSET, transitionState, TransitionStates: transitionState(tmp2[24]).TransitionStates, runOnJS: transitionState(tmp2[22]).runOnJS, transitionCleanUp, withTiming: transitionState(tmp2[25]).withTiming, REDUCED_MOTION_TIMING, withSpring: transitionState(tmp2[26]).withSpring, ACTIVITY_LAYOUT_PHYSICS_GESTURE, ACTIVITY_LAYOUT_PHYSICS_DEFAULT };
    B.__closure = obj2;
    B.__workletHash = 6614930197456;
    B.__initData = __initData;
    const animatedStyle = transitionState(tmp2[22]).useAnimatedStyle(B);
    if (cResult[8] === pipOrientationLockState) {
      if (cResult[9] === wrapperDimensions.isLandscape) {
        let tmp27 = cResult[10];
      }
      ({ width, height } = tmp27);
      if (cResult[11] === height) {
        if (cResult[12] === width) {
          let tmp29 = cResult[13];
        }
        if (cResult[14] !== setMode) {
          function ae() {
            ReanimatedRexport.runOnJS(setMode)(ActivityPanelModes.PANEL);
          }
          const obj4 = { runOnJS: transitionState(tmp2[22]).runOnJS, setMode, ActivityPanelModes };
          ae.__closure = obj4;
          ae.__workletHash = 2951177166574;
          ae.__initData = __initData3;
          class B {
            constructor() {
              point = pipState.get();
              x = point.x;
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[23]);
              size = { pipX: x, pipY: point.y, width: ACTIVITY_PIP_SIZE.width, height: ACTIVITY_PIP_SIZE.height, windowDimensions: closure_3, safeArea: closure_4, bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top, positionOffset: null, disableHorizontalSafeAreas: null };
              width = ACTIVITY_PIP_SIZE;
              sum1 = closure_4;
              tmp3 = closure_3;
              obj3 = wrapperOffset;
              value = undefined;
              if (wrapperOffset.get().gestureActive) {
                value = obj3.get();
              }
              size.positionOffset = value;
              size.disableHorizontalSafeAreas = closure_10;
              point2 = obj.getClampedPIPPosition(size);
              x2 = point2.x;
              obj4 = shown;
              tmp6 = shown.get() || closure_2;
              if (tmp6) {
                transitionComplete = function transitionComplete(arg0) {
                  let tmp = undefined !== arg0 && arg0;
                  if (tmp) {
                    tmp = closure_1_0 === transitionState(stateFromStores[24]).TransitionStates.YEETED;
                  }
                  if (tmp) {
                    transitionState(stateFromStores[22]).runOnJS(transitionCleanUp)();
                    const obj = transitionState(stateFromStores[22]);
                  }
                };
                obj1 = { transitionState: null, TransitionStates: null, runOnJS: null, transitionCleanUp: null };
                tmp13 = transitionState;
                obj1.transitionState = transitionState;
                obj1.TransitionStates = tmp(tmp2[24]).TransitionStates;
                obj1.runOnJS = tmp(tmp2[22]).runOnJS;
                tmp14 = transitionCleanUp;
                obj1.transitionCleanUp = transitionCleanUp;
                transitionComplete.__closure = obj1;
                num3 = 11561549591243;
                transitionComplete.__workletHash = 11561549591243;
                tmp15 = closure_23;
                transitionComplete.__initData = closure_23;
                num4 = 1;
                num5 = 1;
                tmp16 = closure_2;
                if (closure_2) {
                  tmpResult = tmp(tmp2[25]);
                  num6 = 0;
                  if (obj4.get()) {
                    num6 = 1;
                  }
                  tmp17 = closure_19;
                  str = "animate-always";
                  tmp18 = tmpResult;
                  tmp19 = num6;
                  tmp20 = transitionComplete;
                  num5 = tmpResult.withTiming(num6, closure_19, "animate-always", transitionComplete);
                }
                obj12 = { opacity: null, transform: null };
                obj12.opacity = num5;
                tmpResult1 = tmp(tmp2[26]);
                obj13 = { translateY: null };
                str2 = "animate-always";
                obj13.translateY = tmpResult1.withSpring(point2.y, obj3.get().gestureActive ? closure_12 : closure_13, "animate-always");
                items = [, ];
                items[0] = obj13;
                tmpResult2 = tmp(tmp2[26]);
                tmp21 = obj3.get().gestureActive ? closure_12 : closure_13;
                tmp22 = undefined;
                if (!tmp16) {
                  tmp22 = transitionComplete;
                }
                obj14 = { translateX: null };
                tmp23 = tmpResult2;
                tmp24 = x2;
                tmp25 = tmp21;
                str3 = "animate-always";
                tmp26 = tmp22;
                obj14.translateX = tmpResult2.withSpring(x2, tmp21, "animate-always", tmp22);
                items[1] = obj14;
                obj12.transform = items;
                return obj12;
              } else {
                num = 0.5;
                if (x >= 0.5) {
                  tmp7 = globalThis;
                  _Math = Math;
                  tmp8 = PIP_WINDOW_OFFSET;
                  sum = tmp3.width + Math.max(sum1.right, PIP_WINDOW_OFFSET);
                  tmp12 = sum;
                } else {
                  num2 = 0;
                }
                width = width.width;
                tmp10 = globalThis;
                _Math2 = Math;
                tmp11 = PIP_WINDOW_OFFSET;
                sum1 = width + Math.max(sum1.right, PIP_WINDOW_OFFSET);
                sum = -sum1;
              }
              return;
            }
          }
          cResult[15] = ae;
          let tmp30 = ae;
        } else {
          tmp30 = cResult[15];
        }
        if (cResult[16] === tmp30) {
          if (cResult[17] === pipState) {
            if (cResult[18] === wrapperOffset) {
              let tmp33 = cResult[19];
            }
            const tmp34 = tmp9(tmp2[28])(tmp33);
            let tmp35 = !renderWebView;
            if (renderWebView) {
              tmp35 = !transitionCleanUp.hasActivity;
            }
            const _Symbol = Symbol;
            if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = transitionState(tmp2[29]).intl;
              const stringResult = intl.string(transitionState(tmp2[29]).t["3ejJer"]);
              cResult[20] = stringResult;
              let tmp36 = stringResult;
            } else {
              tmp36 = cResult[20];
            }
            const _Symbol2 = Symbol;
            if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
              const items2 = [{ name: "activate" }];
              cResult[21] = items2;
              let tmp38 = items2;
            } else {
              tmp38 = cResult[21];
            }
            if (cResult[22] !== setMode) {
              let obj5 = {
                accessible: true,
                accessibilityLabel: tmp36,
                accessibilityRole: "button",
                accessibilityActions: tmp38,
                onAccessibilityAction() {
                              setMode(ActivityPanelModes.PANEL);
                            }
              };
              cResult[22] = setMode;
              cResult[23] = obj5;
              let tmp39 = obj5;
            } else {
              tmp39 = cResult[23];
            }
            if (cResult[24] === tmp4.wrapper) {
              if (cResult[25] === animatedStyle) {
                let tmp40 = cResult[26];
              }
              if (cResult[27] === tmp29) {
                if (cResult[28] === children) {
                  if (cResult[31] === tmp4.mask) {
                    if (cResult[32] === tmp42) {
                      let tmp46 = cResult[33];
                    }
                    if (cResult[34] === tmp34) {
                      if (cResult[35] === tmp46) {
                        let tmp50 = cResult[36];
                      }
                      if (cResult[37] === tmp39) {
                        if (cResult[38] === tmp40) {
                          if (cResult[39] === tmp50) {
                            let tmp53 = cResult[40];
                          }
                          return tmp53;
                        }
                      }
                      let obj6 = { theme: ThemeTypes.DARK, children: null };
                      let obj7 = { style: tmp40 };
                      class B {
                        constructor() {
                          point = pipState.get();
                          x = point.x;
                          tmp = closure_0;
                          tmp2 = closure_2;
                          obj = closure_0(closure_2[23]);
                          size = { pipX: x, pipY: point.y, width: ACTIVITY_PIP_SIZE.width, height: ACTIVITY_PIP_SIZE.height, windowDimensions: closure_3, safeArea: closure_4, bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top, positionOffset: null, disableHorizontalSafeAreas: null };
                          width = ACTIVITY_PIP_SIZE;
                          sum1 = closure_4;
                          tmp3 = closure_3;
                          obj3 = wrapperOffset;
                          value = undefined;
                          if (wrapperOffset.get().gestureActive) {
                            value = obj3.get();
                          }
                          size.positionOffset = value;
                          size.disableHorizontalSafeAreas = closure_10;
                          point2 = obj.getClampedPIPPosition(size);
                          x2 = point2.x;
                          obj4 = shown;
                          tmp6 = shown.get() || closure_2;
                          if (tmp6) {
                            transitionComplete = function transitionComplete(arg0) {
                              let tmp = undefined !== arg0 && arg0;
                              if (tmp) {
                                tmp = closure_1_0 === transitionState(stateFromStores[24]).TransitionStates.YEETED;
                              }
                              if (tmp) {
                                transitionState(stateFromStores[22]).runOnJS(transitionCleanUp)();
                                const obj = transitionState(stateFromStores[22]);
                              }
                            };
                            obj1 = { transitionState: null, TransitionStates: null, runOnJS: null, transitionCleanUp: null };
                            tmp13 = transitionState;
                            obj1.transitionState = transitionState;
                            obj1.TransitionStates = tmp(tmp2[24]).TransitionStates;
                            obj1.runOnJS = tmp(tmp2[22]).runOnJS;
                            tmp14 = transitionCleanUp;
                            obj1.transitionCleanUp = transitionCleanUp;
                            transitionComplete.__closure = obj1;
                            num3 = 11561549591243;
                            transitionComplete.__workletHash = 11561549591243;
                            tmp15 = closure_23;
                            transitionComplete.__initData = closure_23;
                            num4 = 1;
                            num5 = 1;
                            tmp16 = closure_2;
                            if (closure_2) {
                              tmpResult = tmp(tmp2[25]);
                              num6 = 0;
                              if (obj4.get()) {
                                num6 = 1;
                              }
                              tmp17 = closure_19;
                              str = "animate-always";
                              tmp18 = tmpResult;
                              tmp19 = num6;
                              tmp20 = transitionComplete;
                              num5 = tmpResult.withTiming(num6, closure_19, "animate-always", transitionComplete);
                            }
                            obj12 = { opacity: null, transform: null };
                            obj12.opacity = num5;
                            tmpResult1 = tmp(tmp2[26]);
                            obj13 = { translateY: null };
                            str2 = "animate-always";
                            obj13.translateY = tmpResult1.withSpring(point2.y, obj3.get().gestureActive ? closure_12 : closure_13, "animate-always");
                            items = [, ];
                            items[0] = obj13;
                            tmpResult2 = tmp(tmp2[26]);
                            tmp21 = obj3.get().gestureActive ? closure_12 : closure_13;
                            tmp22 = undefined;
                            if (!tmp16) {
                              tmp22 = transitionComplete;
                            }
                            obj14 = { translateX: null };
                            tmp23 = tmpResult2;
                            tmp24 = x2;
                            tmp25 = tmp21;
                            str3 = "animate-always";
                            tmp26 = tmp22;
                            obj14.translateX = tmpResult2.withSpring(x2, tmp21, "animate-always", tmp22);
                            items[1] = obj14;
                            obj12.transform = items;
                            return obj12;
                          } else {
                            num = 0.5;
                            if (x >= 0.5) {
                              tmp7 = globalThis;
                              _Math = Math;
                              tmp8 = PIP_WINDOW_OFFSET;
                              sum = tmp3.width + Math.max(sum1.right, PIP_WINDOW_OFFSET);
                              tmp12 = sum;
                            } else {
                              num2 = 0;
                            }
                            width = width.width;
                            tmp10 = globalThis;
                            _Math2 = Math;
                            tmp11 = PIP_WINDOW_OFFSET;
                            sum1 = width + Math.max(sum1.right, PIP_WINDOW_OFFSET);
                            sum = -sum1;
                          }
                          return;
                        }
                      }
                      obj7.children = tmp50;
                      obj6.children = jsx(tmp9(tmp2[22]).View, { style: tmp40 });
                      const tmp58 = jsx(transitionState(tmp2[24]).ThemeContextProvider, { theme: ThemeTypes.DARK, children: null });
                      cResult[37] = tmp39;
                      cResult[38] = tmp40;
                      cResult[39] = tmp50;
                      cResult[40] = tmp58;
                      tmp53 = tmp58;
                    }
                    const obj9 = { gesture: tmp34, children: tmp46 };
                    cResult[34] = tmp34;
                    cResult[35] = tmp46;
                    class B {
                      constructor() {
                        point = pipState.get();
                        x = point.x;
                        tmp = closure_0;
                        tmp2 = closure_2;
                        obj = closure_0(closure_2[23]);
                        size = { pipX: x, pipY: point.y, width: ACTIVITY_PIP_SIZE.width, height: ACTIVITY_PIP_SIZE.height, windowDimensions: closure_3, safeArea: closure_4, bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top, positionOffset: null, disableHorizontalSafeAreas: null };
                        width = ACTIVITY_PIP_SIZE;
                        sum1 = closure_4;
                        tmp3 = closure_3;
                        obj3 = wrapperOffset;
                        value = undefined;
                        if (wrapperOffset.get().gestureActive) {
                          value = obj3.get();
                        }
                        size.positionOffset = value;
                        size.disableHorizontalSafeAreas = closure_10;
                        point2 = obj.getClampedPIPPosition(size);
                        x2 = point2.x;
                        obj4 = shown;
                        tmp6 = shown.get() || closure_2;
                        if (tmp6) {
                          transitionComplete = function transitionComplete(arg0) {
                            let tmp = undefined !== arg0 && arg0;
                            if (tmp) {
                              tmp = closure_1_0 === transitionState(stateFromStores[24]).TransitionStates.YEETED;
                            }
                            if (tmp) {
                              transitionState(stateFromStores[22]).runOnJS(transitionCleanUp)();
                              const obj = transitionState(stateFromStores[22]);
                            }
                          };
                          obj1 = { transitionState: null, TransitionStates: null, runOnJS: null, transitionCleanUp: null };
                          tmp13 = transitionState;
                          obj1.transitionState = transitionState;
                          obj1.TransitionStates = tmp(tmp2[24]).TransitionStates;
                          obj1.runOnJS = tmp(tmp2[22]).runOnJS;
                          tmp14 = transitionCleanUp;
                          obj1.transitionCleanUp = transitionCleanUp;
                          transitionComplete.__closure = obj1;
                          num3 = 11561549591243;
                          transitionComplete.__workletHash = 11561549591243;
                          tmp15 = closure_23;
                          transitionComplete.__initData = closure_23;
                          num4 = 1;
                          num5 = 1;
                          tmp16 = closure_2;
                          if (closure_2) {
                            tmpResult = tmp(tmp2[25]);
                            num6 = 0;
                            if (obj4.get()) {
                              num6 = 1;
                            }
                            tmp17 = closure_19;
                            str = "animate-always";
                            tmp18 = tmpResult;
                            tmp19 = num6;
                            tmp20 = transitionComplete;
                            num5 = tmpResult.withTiming(num6, closure_19, "animate-always", transitionComplete);
                          }
                          obj12 = { opacity: null, transform: null };
                          obj12.opacity = num5;
                          tmpResult1 = tmp(tmp2[26]);
                          obj13 = { translateY: null };
                          str2 = "animate-always";
                          obj13.translateY = tmpResult1.withSpring(point2.y, obj3.get().gestureActive ? closure_12 : closure_13, "animate-always");
                          items = [, ];
                          items[0] = obj13;
                          tmpResult2 = tmp(tmp2[26]);
                          tmp21 = obj3.get().gestureActive ? closure_12 : closure_13;
                          tmp22 = undefined;
                          if (!tmp16) {
                            tmp22 = transitionComplete;
                          }
                          obj14 = { translateX: null };
                          tmp23 = tmpResult2;
                          tmp24 = x2;
                          tmp25 = tmp21;
                          str3 = "animate-always";
                          tmp26 = tmp22;
                          obj14.translateX = tmpResult2.withSpring(x2, tmp21, "animate-always", tmp22);
                          items[1] = obj14;
                          obj12.transform = items;
                          return obj12;
                        } else {
                          num = 0.5;
                          if (x >= 0.5) {
                            tmp7 = globalThis;
                            _Math = Math;
                            tmp8 = PIP_WINDOW_OFFSET;
                            sum = tmp3.width + Math.max(sum1.right, PIP_WINDOW_OFFSET);
                            tmp12 = sum;
                          } else {
                            num2 = 0;
                          }
                          width = width.width;
                          tmp10 = globalThis;
                          _Math2 = Math;
                          tmp11 = PIP_WINDOW_OFFSET;
                          sum1 = width + Math.max(sum1.right, PIP_WINDOW_OFFSET);
                          sum = -sum1;
                        }
                        return;
                      }
                    }
                    tmp50 = jsx(transitionState(tmp2[30]).GestureDetector, { gesture: tmp34, children: tmp46 });
                    const tmp52 = jsx(transitionState(tmp2[30]).GestureDetector, { gesture: tmp34, children: tmp46 });
                  }
                  const obj10 = { style: tmp4.mask, children: tmp42 };
                  const tmp49 = <safeArea style={tmp4.mask}>{tmp42}</safeArea>;
                  cResult[31] = tmp4.mask;
                  cResult[32] = tmp42;
                  class B {
                    constructor() {
                      point = pipState.get();
                      x = point.x;
                      tmp = closure_0;
                      tmp2 = closure_2;
                      obj = closure_0(closure_2[23]);
                      size = { pipX: x, pipY: point.y, width: ACTIVITY_PIP_SIZE.width, height: ACTIVITY_PIP_SIZE.height, windowDimensions: closure_3, safeArea: closure_4, bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top, positionOffset: null, disableHorizontalSafeAreas: null };
                      width = ACTIVITY_PIP_SIZE;
                      sum1 = closure_4;
                      tmp3 = closure_3;
                      obj3 = wrapperOffset;
                      value = undefined;
                      if (wrapperOffset.get().gestureActive) {
                        value = obj3.get();
                      }
                      size.positionOffset = value;
                      size.disableHorizontalSafeAreas = closure_10;
                      point2 = obj.getClampedPIPPosition(size);
                      x2 = point2.x;
                      obj4 = shown;
                      tmp6 = shown.get() || closure_2;
                      if (tmp6) {
                        transitionComplete = function transitionComplete(arg0) {
                          let tmp = undefined !== arg0 && arg0;
                          if (tmp) {
                            tmp = closure_1_0 === transitionState(stateFromStores[24]).TransitionStates.YEETED;
                          }
                          if (tmp) {
                            transitionState(stateFromStores[22]).runOnJS(transitionCleanUp)();
                            const obj = transitionState(stateFromStores[22]);
                          }
                        };
                        obj1 = { transitionState: null, TransitionStates: null, runOnJS: null, transitionCleanUp: null };
                        tmp13 = transitionState;
                        obj1.transitionState = transitionState;
                        obj1.TransitionStates = tmp(tmp2[24]).TransitionStates;
                        obj1.runOnJS = tmp(tmp2[22]).runOnJS;
                        tmp14 = transitionCleanUp;
                        obj1.transitionCleanUp = transitionCleanUp;
                        transitionComplete.__closure = obj1;
                        num3 = 11561549591243;
                        transitionComplete.__workletHash = 11561549591243;
                        tmp15 = closure_23;
                        transitionComplete.__initData = closure_23;
                        num4 = 1;
                        num5 = 1;
                        tmp16 = closure_2;
                        if (closure_2) {
                          tmpResult = tmp(tmp2[25]);
                          num6 = 0;
                          if (obj4.get()) {
                            num6 = 1;
                          }
                          tmp17 = closure_19;
                          str = "animate-always";
                          tmp18 = tmpResult;
                          tmp19 = num6;
                          tmp20 = transitionComplete;
                          num5 = tmpResult.withTiming(num6, closure_19, "animate-always", transitionComplete);
                        }
                        obj12 = { opacity: null, transform: null };
                        obj12.opacity = num5;
                        tmpResult1 = tmp(tmp2[26]);
                        obj13 = { translateY: null };
                        str2 = "animate-always";
                        obj13.translateY = tmpResult1.withSpring(point2.y, obj3.get().gestureActive ? closure_12 : closure_13, "animate-always");
                        items = [, ];
                        items[0] = obj13;
                        tmpResult2 = tmp(tmp2[26]);
                        tmp21 = obj3.get().gestureActive ? closure_12 : closure_13;
                        tmp22 = undefined;
                        if (!tmp16) {
                          tmp22 = transitionComplete;
                        }
                        obj14 = { translateX: null };
                        tmp23 = tmpResult2;
                        tmp24 = x2;
                        tmp25 = tmp21;
                        str3 = "animate-always";
                        tmp26 = tmp22;
                        obj14.translateX = tmpResult2.withSpring(x2, tmp21, "animate-always", tmp22);
                        items[1] = obj14;
                        obj12.transform = items;
                        return obj12;
                      } else {
                        num = 0.5;
                        if (x >= 0.5) {
                          tmp7 = globalThis;
                          _Math = Math;
                          tmp8 = PIP_WINDOW_OFFSET;
                          sum = tmp3.width + Math.max(sum1.right, PIP_WINDOW_OFFSET);
                          tmp12 = sum;
                        } else {
                          num2 = 0;
                        }
                        width = width.width;
                        tmp10 = globalThis;
                        _Math2 = Math;
                        tmp11 = PIP_WINDOW_OFFSET;
                        sum1 = width + Math.max(sum1.right, PIP_WINDOW_OFFSET);
                        sum = -sum1;
                      }
                      return;
                    }
                  }
                  cResult[33] = tmp49;
                  tmp46 = tmp49;
                }
              }
              let tmp43 = !tmp35;
              if (!tmp35) {
                const obj11 = { style: tmp29, children };
                tmp43 = <safeArea style={tmp29}>{children}</safeArea>;
              }
              cResult[27] = tmp29;
              cResult[28] = children;
              cResult[29] = tmp35;
              cResult[30] = tmp43;
              class B {
                constructor() {
                  point = pipState.get();
                  x = point.x;
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj = closure_0(closure_2[23]);
                  size = { pipX: x, pipY: point.y, width: ACTIVITY_PIP_SIZE.width, height: ACTIVITY_PIP_SIZE.height, windowDimensions: closure_3, safeArea: closure_4, bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top, positionOffset: null, disableHorizontalSafeAreas: null };
                  width = ACTIVITY_PIP_SIZE;
                  sum1 = closure_4;
                  tmp3 = closure_3;
                  obj3 = wrapperOffset;
                  value = undefined;
                  if (wrapperOffset.get().gestureActive) {
                    value = obj3.get();
                  }
                  size.positionOffset = value;
                  size.disableHorizontalSafeAreas = closure_10;
                  point2 = obj.getClampedPIPPosition(size);
                  x2 = point2.x;
                  obj4 = shown;
                  tmp6 = shown.get() || closure_2;
                  if (tmp6) {
                    transitionComplete = function transitionComplete(arg0) {
                      let tmp = undefined !== arg0 && arg0;
                      if (tmp) {
                        tmp = closure_1_0 === transitionState(stateFromStores[24]).TransitionStates.YEETED;
                      }
                      if (tmp) {
                        transitionState(stateFromStores[22]).runOnJS(transitionCleanUp)();
                        const obj = transitionState(stateFromStores[22]);
                      }
                    };
                    obj1 = { transitionState: null, TransitionStates: null, runOnJS: null, transitionCleanUp: null };
                    tmp13 = transitionState;
                    obj1.transitionState = transitionState;
                    obj1.TransitionStates = tmp(tmp2[24]).TransitionStates;
                    obj1.runOnJS = tmp(tmp2[22]).runOnJS;
                    tmp14 = transitionCleanUp;
                    obj1.transitionCleanUp = transitionCleanUp;
                    transitionComplete.__closure = obj1;
                    num3 = 11561549591243;
                    transitionComplete.__workletHash = 11561549591243;
                    tmp15 = closure_23;
                    transitionComplete.__initData = closure_23;
                    num4 = 1;
                    num5 = 1;
                    tmp16 = closure_2;
                    if (closure_2) {
                      tmpResult = tmp(tmp2[25]);
                      num6 = 0;
                      if (obj4.get()) {
                        num6 = 1;
                      }
                      tmp17 = closure_19;
                      str = "animate-always";
                      tmp18 = tmpResult;
                      tmp19 = num6;
                      tmp20 = transitionComplete;
                      num5 = tmpResult.withTiming(num6, closure_19, "animate-always", transitionComplete);
                    }
                    obj12 = { opacity: null, transform: null };
                    obj12.opacity = num5;
                    tmpResult1 = tmp(tmp2[26]);
                    obj13 = { translateY: null };
                    str2 = "animate-always";
                    obj13.translateY = tmpResult1.withSpring(point2.y, obj3.get().gestureActive ? closure_12 : closure_13, "animate-always");
                    items = [, ];
                    items[0] = obj13;
                    tmpResult2 = tmp(tmp2[26]);
                    tmp21 = obj3.get().gestureActive ? closure_12 : closure_13;
                    tmp22 = undefined;
                    if (!tmp16) {
                      tmp22 = transitionComplete;
                    }
                    obj14 = { translateX: null };
                    tmp23 = tmpResult2;
                    tmp24 = x2;
                    tmp25 = tmp21;
                    str3 = "animate-always";
                    tmp26 = tmp22;
                    obj14.translateX = tmpResult2.withSpring(x2, tmp21, "animate-always", tmp22);
                    items[1] = obj14;
                    obj12.transform = items;
                    return obj12;
                  } else {
                    num = 0.5;
                    if (x >= 0.5) {
                      tmp7 = globalThis;
                      _Math = Math;
                      tmp8 = PIP_WINDOW_OFFSET;
                      sum = tmp3.width + Math.max(sum1.right, PIP_WINDOW_OFFSET);
                      tmp12 = sum;
                    } else {
                      num2 = 0;
                    }
                    width = width.width;
                    tmp10 = globalThis;
                    _Math2 = Math;
                    tmp11 = PIP_WINDOW_OFFSET;
                    sum1 = width + Math.max(sum1.right, PIP_WINDOW_OFFSET);
                    sum = -sum1;
                  }
                  return;
                }
              }
            }
            class B {
              constructor() {
                point = pipState.get();
                x = point.x;
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[23]);
                size = { pipX: x, pipY: point.y, width: ACTIVITY_PIP_SIZE.width, height: ACTIVITY_PIP_SIZE.height, windowDimensions: closure_3, safeArea: closure_4, bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top, positionOffset: null, disableHorizontalSafeAreas: null };
                width = ACTIVITY_PIP_SIZE;
                sum1 = closure_4;
                tmp3 = closure_3;
                obj3 = wrapperOffset;
                value = undefined;
                if (wrapperOffset.get().gestureActive) {
                  value = obj3.get();
                }
                size.positionOffset = value;
                size.disableHorizontalSafeAreas = closure_10;
                point2 = obj.getClampedPIPPosition(size);
                x2 = point2.x;
                obj4 = shown;
                tmp6 = shown.get() || closure_2;
                if (tmp6) {
                  transitionComplete = function transitionComplete(arg0) {
                    let tmp = undefined !== arg0 && arg0;
                    if (tmp) {
                      tmp = closure_1_0 === transitionState(stateFromStores[24]).TransitionStates.YEETED;
                    }
                    if (tmp) {
                      transitionState(stateFromStores[22]).runOnJS(transitionCleanUp)();
                      const obj = transitionState(stateFromStores[22]);
                    }
                  };
                  obj1 = { transitionState: null, TransitionStates: null, runOnJS: null, transitionCleanUp: null };
                  tmp13 = transitionState;
                  obj1.transitionState = transitionState;
                  obj1.TransitionStates = tmp(tmp2[24]).TransitionStates;
                  obj1.runOnJS = tmp(tmp2[22]).runOnJS;
                  tmp14 = transitionCleanUp;
                  obj1.transitionCleanUp = transitionCleanUp;
                  transitionComplete.__closure = obj1;
                  num3 = 11561549591243;
                  transitionComplete.__workletHash = 11561549591243;
                  tmp15 = closure_23;
                  transitionComplete.__initData = closure_23;
                  num4 = 1;
                  num5 = 1;
                  tmp16 = closure_2;
                  if (closure_2) {
                    tmpResult = tmp(tmp2[25]);
                    num6 = 0;
                    if (obj4.get()) {
                      num6 = 1;
                    }
                    tmp17 = closure_19;
                    str = "animate-always";
                    tmp18 = tmpResult;
                    tmp19 = num6;
                    tmp20 = transitionComplete;
                    num5 = tmpResult.withTiming(num6, closure_19, "animate-always", transitionComplete);
                  }
                  obj12 = { opacity: null, transform: null };
                  obj12.opacity = num5;
                  tmpResult1 = tmp(tmp2[26]);
                  obj13 = { translateY: null };
                  str2 = "animate-always";
                  obj13.translateY = tmpResult1.withSpring(point2.y, obj3.get().gestureActive ? closure_12 : closure_13, "animate-always");
                  items = [, ];
                  items[0] = obj13;
                  tmpResult2 = tmp(tmp2[26]);
                  tmp21 = obj3.get().gestureActive ? closure_12 : closure_13;
                  tmp22 = undefined;
                  if (!tmp16) {
                    tmp22 = transitionComplete;
                  }
                  obj14 = { translateX: null };
                  tmp23 = tmpResult2;
                  tmp24 = x2;
                  tmp25 = tmp21;
                  str3 = "animate-always";
                  tmp26 = tmp22;
                  obj14.translateX = tmpResult2.withSpring(x2, tmp21, "animate-always", tmp22);
                  items[1] = obj14;
                  obj12.transform = items;
                  return obj12;
                } else {
                  num = 0.5;
                  if (x >= 0.5) {
                    tmp7 = globalThis;
                    _Math = Math;
                    tmp8 = PIP_WINDOW_OFFSET;
                    sum = tmp3.width + Math.max(sum1.right, PIP_WINDOW_OFFSET);
                    tmp12 = sum;
                  } else {
                    num2 = 0;
                  }
                  width = width.width;
                  tmp10 = globalThis;
                  _Math2 = Math;
                  tmp11 = PIP_WINDOW_OFFSET;
                  sum1 = width + Math.max(sum1.right, PIP_WINDOW_OFFSET);
                  sum = -sum1;
                }
                return;
              }
            }
            tmp41[0] = tmp4.wrapper;
            tmp41[1] = animatedStyle;
            cResult[24] = tmp4.wrapper;
            cResult[25] = animatedStyle;
            cResult[26] = tmp41;
            tmp40 = tmp41;
          }
        }
        const obj12 = { panGestureEnabled: true, onTapGestureStart: tmp30, mode: transitionState(tmp2[28]).MorphablePanelModes.PIP, pipState, wrapperOffset, disableHorizontalSafeAreas: false };
        cResult[16] = tmp30;
        cResult[17] = pipState;
        class B {
          constructor() {
            point = pipState.get();
            x = point.x;
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[23]);
            size = { pipX: x, pipY: point.y, width: ACTIVITY_PIP_SIZE.width, height: ACTIVITY_PIP_SIZE.height, windowDimensions: closure_3, safeArea: closure_4, bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top, positionOffset: null, disableHorizontalSafeAreas: null };
            width = ACTIVITY_PIP_SIZE;
            sum1 = closure_4;
            tmp3 = closure_3;
            obj3 = wrapperOffset;
            value = undefined;
            if (wrapperOffset.get().gestureActive) {
              value = obj3.get();
            }
            size.positionOffset = value;
            size.disableHorizontalSafeAreas = closure_10;
            point2 = obj.getClampedPIPPosition(size);
            x2 = point2.x;
            obj4 = shown;
            tmp6 = shown.get() || closure_2;
            if (tmp6) {
              transitionComplete = function transitionComplete(arg0) {
                let tmp = undefined !== arg0 && arg0;
                if (tmp) {
                  tmp = closure_1_0 === transitionState(stateFromStores[24]).TransitionStates.YEETED;
                }
                if (tmp) {
                  transitionState(stateFromStores[22]).runOnJS(transitionCleanUp)();
                  const obj = transitionState(stateFromStores[22]);
                }
              };
              obj1 = { transitionState: null, TransitionStates: null, runOnJS: null, transitionCleanUp: null };
              tmp13 = transitionState;
              obj1.transitionState = transitionState;
              obj1.TransitionStates = tmp(tmp2[24]).TransitionStates;
              obj1.runOnJS = tmp(tmp2[22]).runOnJS;
              tmp14 = transitionCleanUp;
              obj1.transitionCleanUp = transitionCleanUp;
              transitionComplete.__closure = obj1;
              num3 = 11561549591243;
              transitionComplete.__workletHash = 11561549591243;
              tmp15 = closure_23;
              transitionComplete.__initData = closure_23;
              num4 = 1;
              num5 = 1;
              tmp16 = closure_2;
              if (closure_2) {
                tmpResult = tmp(tmp2[25]);
                num6 = 0;
                if (obj4.get()) {
                  num6 = 1;
                }
                tmp17 = closure_19;
                str = "animate-always";
                tmp18 = tmpResult;
                tmp19 = num6;
                tmp20 = transitionComplete;
                num5 = tmpResult.withTiming(num6, closure_19, "animate-always", transitionComplete);
              }
              obj12 = { opacity: null, transform: null };
              obj12.opacity = num5;
              tmpResult1 = tmp(tmp2[26]);
              obj13 = { translateY: null };
              str2 = "animate-always";
              obj13.translateY = tmpResult1.withSpring(point2.y, obj3.get().gestureActive ? closure_12 : closure_13, "animate-always");
              items = [, ];
              items[0] = obj13;
              tmpResult2 = tmp(tmp2[26]);
              tmp21 = obj3.get().gestureActive ? closure_12 : closure_13;
              tmp22 = undefined;
              if (!tmp16) {
                tmp22 = transitionComplete;
              }
              obj14 = { translateX: null };
              tmp23 = tmpResult2;
              tmp24 = x2;
              tmp25 = tmp21;
              str3 = "animate-always";
              tmp26 = tmp22;
              obj14.translateX = tmpResult2.withSpring(x2, tmp21, "animate-always", tmp22);
              items[1] = obj14;
              obj12.transform = items;
              return obj12;
            } else {
              num = 0.5;
              if (x >= 0.5) {
                tmp7 = globalThis;
                _Math = Math;
                tmp8 = PIP_WINDOW_OFFSET;
                sum = tmp3.width + Math.max(sum1.right, PIP_WINDOW_OFFSET);
                tmp12 = sum;
              } else {
                num2 = 0;
              }
              width = width.width;
              tmp10 = globalThis;
              _Math2 = Math;
              tmp11 = PIP_WINDOW_OFFSET;
              sum1 = width + Math.max(sum1.right, PIP_WINDOW_OFFSET);
              sum = -sum1;
            }
            return;
          }
        }
        cResult[18] = wrapperOffset;
        cResult[19] = obj12;
        tmp33 = obj12;
      }
      let size = { width, height, pointerEvents: "none" };
      cResult[11] = height;
      cResult[12] = width;
      class B {
        constructor() {
          point = pipState.get();
          x = point.x;
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[23]);
          size = { pipX: x, pipY: point.y, width: ACTIVITY_PIP_SIZE.width, height: ACTIVITY_PIP_SIZE.height, windowDimensions: closure_3, safeArea: closure_4, bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top, positionOffset: null, disableHorizontalSafeAreas: null };
          width = ACTIVITY_PIP_SIZE;
          sum1 = closure_4;
          tmp3 = closure_3;
          obj3 = wrapperOffset;
          value = undefined;
          if (wrapperOffset.get().gestureActive) {
            value = obj3.get();
          }
          size.positionOffset = value;
          size.disableHorizontalSafeAreas = closure_10;
          point2 = obj.getClampedPIPPosition(size);
          x2 = point2.x;
          obj4 = shown;
          tmp6 = shown.get() || closure_2;
          if (tmp6) {
            transitionComplete = function transitionComplete(arg0) {
              let tmp = undefined !== arg0 && arg0;
              if (tmp) {
                tmp = closure_1_0 === transitionState(stateFromStores[24]).TransitionStates.YEETED;
              }
              if (tmp) {
                transitionState(stateFromStores[22]).runOnJS(transitionCleanUp)();
                const obj = transitionState(stateFromStores[22]);
              }
            };
            obj1 = { transitionState: null, TransitionStates: null, runOnJS: null, transitionCleanUp: null };
            tmp13 = transitionState;
            obj1.transitionState = transitionState;
            obj1.TransitionStates = tmp(tmp2[24]).TransitionStates;
            obj1.runOnJS = tmp(tmp2[22]).runOnJS;
            tmp14 = transitionCleanUp;
            obj1.transitionCleanUp = transitionCleanUp;
            transitionComplete.__closure = obj1;
            num3 = 11561549591243;
            transitionComplete.__workletHash = 11561549591243;
            tmp15 = closure_23;
            transitionComplete.__initData = closure_23;
            num4 = 1;
            num5 = 1;
            tmp16 = closure_2;
            if (closure_2) {
              tmpResult = tmp(tmp2[25]);
              num6 = 0;
              if (obj4.get()) {
                num6 = 1;
              }
              tmp17 = closure_19;
              str = "animate-always";
              tmp18 = tmpResult;
              tmp19 = num6;
              tmp20 = transitionComplete;
              num5 = tmpResult.withTiming(num6, closure_19, "animate-always", transitionComplete);
            }
            obj12 = { opacity: null, transform: null };
            obj12.opacity = num5;
            tmpResult1 = tmp(tmp2[26]);
            obj13 = { translateY: null };
            str2 = "animate-always";
            obj13.translateY = tmpResult1.withSpring(point2.y, obj3.get().gestureActive ? closure_12 : closure_13, "animate-always");
            items = [, ];
            items[0] = obj13;
            tmpResult2 = tmp(tmp2[26]);
            tmp21 = obj3.get().gestureActive ? closure_12 : closure_13;
            tmp22 = undefined;
            if (!tmp16) {
              tmp22 = transitionComplete;
            }
            obj14 = { translateX: null };
            tmp23 = tmpResult2;
            tmp24 = x2;
            tmp25 = tmp21;
            str3 = "animate-always";
            tmp26 = tmp22;
            obj14.translateX = tmpResult2.withSpring(x2, tmp21, "animate-always", tmp22);
            items[1] = obj14;
            obj12.transform = items;
            return obj12;
          } else {
            num = 0.5;
            if (x >= 0.5) {
              tmp7 = globalThis;
              _Math = Math;
              tmp8 = PIP_WINDOW_OFFSET;
              sum = tmp3.width + Math.max(sum1.right, PIP_WINDOW_OFFSET);
              tmp12 = sum;
            } else {
              num2 = 0;
            }
            width = width.width;
            tmp10 = globalThis;
            _Math2 = Math;
            tmp11 = PIP_WINDOW_OFFSET;
            sum1 = width + Math.max(sum1.right, PIP_WINDOW_OFFSET);
            sum = -sum1;
          }
          return;
        }
      }
      tmp29 = size;
    }
    const obj13 = { pipWidth: null, pipHeight: null, pipOrientationLockState: null, isLandscape: null };
    ({ width: obj8.pipWidth, height: obj8.pipHeight } = ACTIVITY_PIP_SIZE);
    obj13.pipOrientationLockState = pipOrientationLockState;
    obj13.isLandscape = wrapperDimensions.isLandscape;
    const tmp28 = tmp9(tmp2[27])(obj13);
    cResult[8] = pipOrientationLockState;
    cResult[9] = wrapperDimensions.isLandscape;
    cResult[10] = tmp28;
    tmp27 = tmp28;
    let tmpResult4 = transitionState(tmp2[22]);
  }
  const obj14 = { transitionState, context };
  cResult[2] = context;
  cResult[3] = transitionState;
  cResult[4] = obj14;
  tmp13 = obj14;
  obj3 = windowDimensions;
  let tmpResult = transitionState(stateFromStores[18]);
}) : ((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const context = transitionState.context;
  let stateFromStores;
  let wrapperOffset;
  let width;
  let height;
  ({ children, pipOrientationLockState, hasActivity } = transitionState);
  const tmp = closure_20();
  let items = [wrapperOffset];
  stateFromStores = transitionState(stateFromStores[18]).useStateFromStores(items, () => wrapperOffset.useReducedMotion);
  const tmp3 = transitionCleanUp(stateFromStores[19])();
  windowDimensions = tmp3;
  const tmp4 = transitionCleanUp(stateFromStores[17])();
  safeArea = tmp4;
  const context1 = windowDimensions.useContext(context);
  wrapperOffset = context1.wrapperOffset;
  const setMode = context1.setMode;
  const pipState = context1.pipState;
  const pipAvoidanceSpecs = context1.pipAvoidanceSpecs;
  let obj = transitionState(stateFromStores[18]);
  const lockedWebView = transitionState(stateFromStores[20]).useLockedWebView({ transitionState, context });
  const shown = lockedWebView.shown;
  const renderWebView = lockedWebView.renderWebView;
  const items1 = [wrapperOffset];
  const effect = windowDimensions.useEffect(() => {
    updateSharedValueIfChangedDefault(wrapperOffset, { gestureActive: false });
  }, items1);
  const tmp8 = setMode((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
  const ACTIVITY_PIP_SIZE = tmp8;
  let obj2 = transitionState(stateFromStores[20]);
  class W {
    constructor() {
      point = pipState.get();
      x = point.x;
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[23]);
      size = { pipX: x, pipY: point.y, width: ACTIVITY_PIP_SIZE.width, height: ACTIVITY_PIP_SIZE.height, windowDimensions: closure_3, safeArea: closure_4, bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top, positionOffset: null, disableHorizontalSafeAreas: null };
      width = ACTIVITY_PIP_SIZE;
      sum1 = closure_4;
      tmp3 = closure_3;
      obj3 = wrapperOffset;
      value = undefined;
      if (wrapperOffset.get().gestureActive) {
        value = obj3.get();
      }
      size.positionOffset = value;
      size.disableHorizontalSafeAreas = closure_10;
      point2 = obj.getClampedPIPPosition(size);
      x2 = point2.x;
      obj4 = shown;
      tmp6 = shown.get() || closure_2;
      if (tmp6) {
        transitionComplete = function transitionComplete() {
          let flag = arg0;
          if (arg0 === undefined) {
            flag = false;
          }
          if (flag) {
            flag = closure_1_0 === transitionState(stateFromStores[24]).TransitionStates.YEETED;
          }
          if (flag) {
            transitionState(stateFromStores[22]).runOnJS(transitionCleanUp)();
            const obj = transitionState(stateFromStores[22]);
          }
        };
        obj1 = { transitionState: null, TransitionStates: null, runOnJS: null, transitionCleanUp: null };
        tmp13 = transitionState;
        obj1.transitionState = transitionState;
        obj1.TransitionStates = tmp(tmp2[24]).TransitionStates;
        obj1.runOnJS = tmp(tmp2[22]).runOnJS;
        tmp14 = transitionCleanUp;
        obj1.transitionCleanUp = transitionCleanUp;
        transitionComplete.__closure = obj1;
        num3 = 1100699381874;
        transitionComplete.__workletHash = 1100699381874;
        tmp15 = closure_26;
        transitionComplete.__initData = closure_26;
        num4 = 1;
        num5 = 1;
        tmp16 = closure_2;
        if (closure_2) {
          tmpResult = tmp(tmp2[25]);
          num6 = 0;
          if (obj4.get()) {
            num6 = 1;
          }
          tmp17 = closure_19;
          str = "animate-always";
          tmp18 = tmpResult;
          tmp19 = num6;
          tmp20 = transitionComplete;
          num5 = tmpResult.withTiming(num6, closure_19, "animate-always", transitionComplete);
        }
        obj12 = { opacity: null, transform: null };
        obj12.opacity = num5;
        tmpResult1 = tmp(tmp2[26]);
        obj13 = { translateY: null };
        str2 = "animate-always";
        obj13.translateY = tmpResult1.withSpring(point2.y, obj3.get().gestureActive ? closure_12 : closure_13, "animate-always");
        items = [, ];
        items[0] = obj13;
        tmpResult2 = tmp(tmp2[26]);
        tmp21 = obj3.get().gestureActive ? closure_12 : closure_13;
        tmp22 = undefined;
        if (!tmp16) {
          tmp22 = transitionComplete;
        }
        obj14 = { translateX: null };
        tmp23 = tmpResult2;
        tmp24 = x2;
        tmp25 = tmp21;
        str3 = "animate-always";
        tmp26 = tmp22;
        obj14.translateX = tmpResult2.withSpring(x2, tmp21, "animate-always", tmp22);
        items[1] = obj14;
        obj12.transform = items;
        return obj12;
      } else {
        num = 0.5;
        if (x >= 0.5) {
          tmp7 = globalThis;
          _Math = Math;
          tmp8 = PIP_WINDOW_OFFSET;
          sum = tmp3.width + Math.max(sum1.right, PIP_WINDOW_OFFSET);
          tmp12 = sum;
        } else {
          num2 = 0;
        }
        width = width.width;
        tmp10 = globalThis;
        _Math2 = Math;
        tmp11 = PIP_WINDOW_OFFSET;
        sum1 = width + Math.max(sum1.right, PIP_WINDOW_OFFSET);
        sum = -sum1;
      }
      return;
    }
  }
  const obj3 = transitionState(stateFromStores[22]);
  W.__closure = { pipState, getClampedPIPPosition: transitionState(stateFromStores[23]).getClampedPIPPosition, ACTIVITY_PIP_SIZE, windowDimensions: tmp3, safeArea: tmp4, pipAvoidanceSpecs, wrapperOffset, disableHorizontalSafeAreas: tmp8, shown, reduceMotion: stateFromStores, PIP_WINDOW_OFFSET, transitionState, TransitionStates: transitionState(stateFromStores[24]).TransitionStates, runOnJS: transitionState(stateFromStores[22]).runOnJS, transitionCleanUp, withTiming: transitionState(stateFromStores[25]).withTiming, REDUCED_MOTION_TIMING, withSpring: transitionState(stateFromStores[26]).withSpring, ACTIVITY_LAYOUT_PHYSICS_GESTURE: height, ACTIVITY_LAYOUT_PHYSICS_DEFAULT };
  W.__workletHash = 17034982412398;
  W.__initData = __initData4;
  const animatedStyle = obj3.useAnimatedStyle(W);
  let size = transitionCleanUp(stateFromStores[27])({ pipWidth: ACTIVITY_PIP_SIZE.width, pipHeight: ACTIVITY_PIP_SIZE.height, pipOrientationLockState, isLandscape: context1.wrapperDimensions.isLandscape });
  width = size.width;
  height = size.height;
  const items2 = [width, height];
  class G {
    constructor() {
      obj = closure_0(closure_2[22]);
      tmp = obj.runOnJS(setMode)(ActivityPanelModes.PANEL);
      return;
    }
  }
  let obj6 = { runOnJS: null, setMode: null, ActivityPanelModes: null };
  const memo = windowDimensions.useMemo(() => {
    const size = { width, height, pointerEvents: "none" };
    return size;
  }, items2);
  obj6.runOnJS = transitionState(stateFromStores[22]).runOnJS;
  obj6.setMode = setMode;
  obj6.ActivityPanelModes = width;
  G.__closure = obj6;
  G.__workletHash = 1507841633451;
  G.__initData = __initData6;
  const items3 = [setMode];
  const callback = windowDimensions.useCallback(G, items3);
  let obj7 = { panGestureEnabled: true, onTapGestureStart: callback, mode: null, pipState: null, wrapperOffset: null, disableHorizontalSafeAreas: false };
  const obj4 = { pipState, getClampedPIPPosition: transitionState(stateFromStores[23]).getClampedPIPPosition, ACTIVITY_PIP_SIZE, windowDimensions: tmp3, safeArea: tmp4, pipAvoidanceSpecs, wrapperOffset, disableHorizontalSafeAreas: tmp8, shown, reduceMotion: stateFromStores, PIP_WINDOW_OFFSET, transitionState, TransitionStates: transitionState(stateFromStores[24]).TransitionStates, runOnJS: transitionState(stateFromStores[22]).runOnJS, transitionCleanUp, withTiming: transitionState(stateFromStores[25]).withTiming, REDUCED_MOTION_TIMING, withSpring: transitionState(stateFromStores[26]).withSpring, ACTIVITY_LAYOUT_PHYSICS_GESTURE: height, ACTIVITY_LAYOUT_PHYSICS_DEFAULT };
  let obj5 = { pipWidth: ACTIVITY_PIP_SIZE.width, pipHeight: ACTIVITY_PIP_SIZE.height, pipOrientationLockState, isLandscape: context1.wrapperDimensions.isLandscape };
  obj7.mode = transitionState(stateFromStores[28]).MorphablePanelModes.PIP;
  obj7.pipState = pipState;
  obj7.wrapperOffset = wrapperOffset;
  const items4 = [setMode];
  const tmp12 = transitionCleanUp(stateFromStores[28]);
  const memo1 = windowDimensions.useMemo(() => {
    const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t["3ejJer"]);
    const items = [{ name: "activate" }];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = function onAccessibilityAction() {
      setMode(width.PANEL);
    };
    return obj;
  }, items4);
  const obj8 = { theme: ThemeTypes.DARK, children: null };
  const obj9 = { style: null };
  const items5 = [tmp.wrapper, animatedStyle];
  obj9.style = items5;
  const merged = Object.assign(memo1);
  const obj10 = { gesture: transitionCleanUp(stateFromStores[28])(obj7), children: null };
  const obj11 = { style: tmp.mask, children: null };
  let tmp18 = !renderWebView;
  if (renderWebView) {
    tmp18 = !hasActivity;
  }
  let tmp15Result = !tmp18;
  if (!tmp18) {
    const obj12 = { style: memo, children };
    tmp15Result = <tmp17 style={memo}>{children}</tmp17>;
  }
  obj11.children = tmp15Result;
  obj10.children = <safeArea style={tmp.mask}>{null}</safeArea>;
  obj9.children = jsx(transitionState(stateFromStores[30]).GestureDetector, { gesture: transitionCleanUp(stateFromStores[28])(obj7), children: null });
  obj8.children = jsx(transitionCleanUp(stateFromStores[22]).View, { style: null });
  return jsx(transitionState(stateFromStores[24]).ThemeContextProvider, { theme: ThemeTypes.DARK, children: null });
});
let closure_28 = tmp8;
ReactCompilerGating = fn(558);
let obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelPIPView.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = channelId(576).c(17);
  ({ transitionState, transitionCleanUp } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore];
    const fn = function o() {
      const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
      const obj = { channelId: channelId(dependencyMap[31]).getEmbeddedActivityLocationChannelId(connectedActivityLocation), activity: EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation) };
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = channelId(576);
  const stateFromStoresObject = channelId(504).useStateFromStoresObject(tmp4, tmp5);
  channelId = stateFromStoresObject.channelId;
  const activity = stateFromStoresObject.activity;
  let applicationId;
  if (activity != null) {
    applicationId = activity.applicationId;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [EmbeddedActivitiesStore];
    cResult[2] = items1;
    let tmp9 = items1;
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
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[4];
  }
  const tmpResult = channelId(504);
  const stateFromStores = channelId(504).useStateFromStores(tmp9, tmp11);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChannelStore];
    cResult[5] = items2;
    let tmp13 = items2;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== channelId) {
    class O {
      constructor() {
        return closure_7.getChannel(channelId);
      }
    }
    cResult[6] = channelId;
    cResult[7] = O;
  } else {
    class O {
      constructor() {
        return closure_7.getChannel(channelId);
      }
    }
  }
  const tmpResult3 = channelId(504);
  const stateFromStores1 = channelId(504).useStateFromStores(tmp13, O);
  const landscapeSafeAreasConfig = closure_21().landscapeSafeAreasConfig;
  if (cResult[8] === stateFromStores1) {
    class O {
      constructor() {
        return closure_7.getChannel(channelId);
      }
    }
    if (cResult[11] === stateFromStores) {
      class O {
        constructor() {
          return closure_7.getChannel(channelId);
        }
      }
    }
    const obj2 = { transitionState, transitionCleanUp, pipOrientationLockState: stateFromStores, hasActivity: tmp17, context: applicationId(17168), children: tmp18 };
    const tmp24 = <closure_28 transitionState={transitionState} transitionCleanUp={transitionCleanUp} pipOrientationLockState={stateFromStores} hasActivity={tmp17} context={applicationId(17168)}>{tmp18}</closure_28>;
    cResult[11] = stateFromStores;
    cResult[12] = tmp17;
    cResult[13] = tmp18;
    cResult[14] = transitionCleanUp;
    cResult[15] = transitionState;
    cResult[16] = tmp24;
  }
  const tmp19 = jsx(applicationId(9134), { channel: stateFromStores1, layoutMode: ActivityLayoutMode.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig });
  cResult[8] = stateFromStores1;
  cResult[9] = landscapeSafeAreasConfig;
  cResult[10] = tmp19;
  const obj3 = { channel: stateFromStores1, layoutMode: ActivityLayoutMode.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig };
  const tmpResult4 = channelId(504);
}) : ((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  dependencyMap = undefined;
  activity = undefined;
  let stateFromStores;
  let stateFromStores1;
  let landscapeSafeAreasConfig;
  const items = [EmbeddedActivitiesStore];
  const stateFromStoresObject = transitionState(504).useStateFromStoresObject(items, () => {
    const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
    const obj = { channelId: transitionState(_undefined[31]).getEmbeddedActivityLocationChannelId(connectedActivityLocation), activity: EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation) };
    return obj;
  });
  ({ channelId: c2, activity } = stateFromStoresObject);
  let applicationId;
  if (activity != null) {
    applicationId = activity.applicationId;
  }
  let obj = transitionState(504);
  const items1 = [EmbeddedActivitiesStore];
  stateFromStores = transitionState(504).useStateFromStores(items1, () => {
    let pipOrientationLockStateForApp;
    if (null != applicationId) {
      pipOrientationLockStateForApp = EmbeddedActivitiesStore.getPipOrientationLockStateForApp(tmp);
    }
    return pipOrientationLockStateForApp;
  });
  const tmpResult = transitionState(504);
  const items2 = [landscapeSafeAreasConfig];
  stateFromStores1 = transitionState(504).useStateFromStores(items2, () => ChannelStore.getChannel(c2));
  landscapeSafeAreasConfig = closure_21().landscapeSafeAreasConfig;
  const items3 = [activity, stateFromStores1, landscapeSafeAreasConfig, stateFromStores, transitionCleanUp, transitionState];
  return activity.useMemo(() => {
    const obj = { transitionState, transitionCleanUp, pipOrientationLockState: stateFromStores, hasActivity: null != activity, context: ActivityPanelStateContextDefault, children: jsx(EmbeddedActivityViewDefault, { channel: stateFromStores1, layoutMode: ActivityLayoutMode.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig }) };
    return <closure_28 transitionState={transitionState} transitionCleanUp={transitionCleanUp} pipOrientationLockState={stateFromStores} hasActivity={null != activity} context={ActivityPanelStateContextDefault}>{jsx(EmbeddedActivityViewDefault, { channel: stateFromStores1, layoutMode: ActivityLayoutMode.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig })}</closure_28>;
  }, items3);
}));
export const useBaseActivityPanelPIPView = tmp7;
export const BaseActivityPanelPIPView = tmp8;