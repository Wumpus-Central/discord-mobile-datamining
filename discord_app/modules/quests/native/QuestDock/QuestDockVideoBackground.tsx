// === Module 15019: QuestDockVideoBackground ===

// Module 15019 (QuestDockVideoBackground)
import _modDef683 from "module_683" /* 683 */;
import Constants from "Constants" /* 1085 */;
import react_nativeDefault from "react-native" /* 1886 */;
import spring from "spring" /* 5604 */;
import QuestConstants from "QuestConstants" /* 5630 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 6577 */;
import QuestDockUtils from "QuestDockUtils" /* 14911 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import QuestDockConstants from "QuestDockConstants" /* 14912 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let currentState, imageUrl, importDefault;

let StyleSheet;
let c10;
let c9;
let closure_12;
let hasOwnProperty;
let map1;
let metroRequire;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let _slicedToArray = _slicedToArray_mod;
({ AppState: hasOwnProperty, StyleSheet, View: metroRequire } = react_native);
const QuestDockMode = QuestConstants.QuestDockMode;
({ QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: c9, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: c10 } = QuestDockConstants);
const VerticalGradient = Constants.VerticalGradient;
let Fragment = Fragment_mod;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let closure_14 = [0, 0.1, 0.8, 1];
const locations = [0, 0.33, 0.76, 1];
const QuestDockBackgroundCollapsedMediaMode = { PAUSED: "paused", HIDDEN: "hidden" };
let createStyles = createStyles_mod;
let obj2 = { backgroundWrapper: obj3, backgroundImage: obj4, backgroundImageWrapper: obj5, backgroundVideo: obj6, media: obj7, backgroundGradient: obj8, backdrop: obj9 };
obj3 = { right: undefined, bottom: undefined, zIndex: 1 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { resizeMode: "cover" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj5 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj6 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj7 = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj8 = {};
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj9 = {};
const merged6 = Object.assign(StyleSheet.absoluteFillObject);
let closure_17 = createStyles(obj2);
const __initData = { code: "function QuestDockVideoBackgroundTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData2 = { code: "function QuestDockVideoBackgroundTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let activeQuestDockMode;
  let children;
  let style;
  let obj = activeQuestDockMode(576);
  const cResult = obj.c(7);
  ({ children, style } = arg0);
  const tmp3 = closure_17();
  activeQuestDockMode = react.useContext(activeQuestDockMode(14913).QuestDockGestureContext).activeQuestDockMode;
  const fn = function n() {
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    const obj = { opacity: withSpring(num, c9) };
    return obj;
  };
  const obj2 = activeQuestDockMode(4618);
  fn.__closure = { withSpring: activeQuestDockMode(5604).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn.__workletHash = 5908890006198;
  fn.__initData = __initData;
  ({ withSpring: activeQuestDockMode(5604).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === style) {
      let tmp5;
      if (cResult[2] === tmp3.media) {
        tmp5 = cResult[3];
      }
      if (cResult[4] === children) {
        let tmp6;
        if (cResult[5] === tmp5) {
          tmp6 = cResult[6];
        }
        return tmp6;
      }
      const obj4 = { style: tmp5, children };
      const tmp9 = closure_12(ReanimatedNativeViewDefault, obj4);
      let num = 4;
      cResult[4] = children;
      cResult[5] = tmp5;
      cResult[6] = tmp9;
      tmp6 = tmp9;
    }
  }
  const items = [tmp3.media, style, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = style;
  cResult[2] = tmp3.media;
  cResult[3] = items;
  tmp5 = items;
}) : ((arg0) => {
  let children;
  let items;
  let style;
  let activeQuestDockMode;
  ({ children, style } = arg0);
  const tmp = closure_17();
  activeQuestDockMode = react.useContext(activeQuestDockMode(14913).QuestDockGestureContext).activeQuestDockMode;
  let obj = activeQuestDockMode(4618);
  const fn = function s() {
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    const obj = { opacity: withSpring(num, c9) };
    return obj;
  };
  fn.__closure = { withSpring: activeQuestDockMode(5604).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn.__workletHash = 9800697298933;
  fn.__initData = __initData2;
  ({ withSpring: activeQuestDockMode(5604).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED });
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: items, children };
  items = [tmp.media, style, animatedStyle];
  return closure_12(ReanimatedNativeViewDefault, obj3);
});
const __initData3 = { code: "function QuestDockVideoBackgroundTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions}=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};}" };
const __initData4 = { code: "function QuestDockVideoBackgroundTsx4(){const{withSpring,shouldShowVideo,isVideoReadyForDisplay,isMediaHiddenWhenCollapsed,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(shouldShowVideo&&isVideoReadyForDisplay&&(isMediaHiddenWhenCollapsed||activeQuestDockMode.get()===QuestDockMode.EXPANDED)?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData5 = { code: "function QuestDockVideoBackgroundTsx5(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions}=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};}" };
const __initData6 = { code: "function QuestDockVideoBackgroundTsx6(){const{withSpring,shouldShowVideo,isVideoReadyForDisplay,isMediaHiddenWhenCollapsed,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(shouldShowVideo&&isVideoReadyForDisplay&&(isMediaHiddenWhenCollapsed||activeQuestDockMode.get()===QuestDockMode.EXPANDED)?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((imageUrl) => {
  let activeQuestDockMode;
  let backdropColor;
  let closure_1;
  let closure_5;
  let closure_6;
  let closure_9;
  let collapsedMediaMode;
  let expandedHeight;
  let first;
  let foregroundContent;
  let gradientBaseColor;
  let isVideoReadyForDisplay;
  let obj9;
  let setRestingQuestDockMode;
  let tmp10;
  let tmp11;
  let tmp30;
  let tmp44;
  let tmp45;
  let useReducedMotion;
  let videoMimetype;
  let videoUrl;
  const tmp = imageUrl;
  let tmp2 = activeQuestDockMode;
  let obj = imageUrl(activeQuestDockMode[10]);
  const cResult = obj.c(66);
  imageUrl = imageUrl.imageUrl;
  ({ videoUrl, videoMimetype, collapsedMediaMode, gradientBaseColor, backdropColor, expandedHeight, foregroundContent } = imageUrl);
  if (undefined === collapsedMediaMode) {
    collapsedMediaMode = obj.PAUSED;
  }
  importDefault = tmp5;
  const tmp6 = closure_17();
  let obj2 = setRestingQuestDockMode;
  const context = setRestingQuestDockMode.useContext(tmp(tmp2[11]).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  setRestingQuestDockMode = setRestingQuestDockMode.useContext(tmp(tmp2[15]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const isRendered = setRestingQuestDockMode.useContext(require("react")).isRendered;
  const tmp9 = require("useStateFromSharedValue")(activeQuestDockMode);
  const height = require("useWindowDimensions")().height;
  const top = require("useSafeAreaInsets")().top;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [useReducedMotion];
    const fn = function _() {
      return useReducedMotion.useReducedMotion;
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = items;
    tmp11 = fn;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const tmpResult = tmp(tmp2[20]);
  const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp11);
  if (cResult[2] === expandedHeight) {
    if (cResult[3] === top) {
      let tmp14;
      if (cResult[4] === height) {
        tmp14 = cResult[5];
      }
      if (cResult[6] !== tmp14.maxHeight) {
        let obj3 = { height: tmp14.maxHeight };
        let num3 = 6;
        cResult[6] = tmp14.maxHeight;
        cResult[7] = obj3;
      }
      if (cResult[8] !== gradientBaseColor) {
        currentState = tmp8(tmp2[22])(gradientBaseColor);
        const mapped = closure_14.map((item) => {
          const alphaResult = closure_5.alpha(item);
          return alphaResult.hex();
        });
        cResult[8] = gradientBaseColor;
        cResult[9] = mapped;
      }
      const fn2 = function $() {
        const withSpring = spring.withSpring;
        let num = 0;
        spring;
        if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
          num = -1 * authStore;
        }
        const items = [{ translateX: withSpring(num, c9) }, ];
        ({ translateX: withSpring(num, c9) });
        const withSpring2 = spring.withSpring;
        let num3 = 0;
        spring;
        if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
          num3 = -1 * authStore;
        }
        const obj3 = { transform: items, width: windowDimensions.get().width };
        items[1] = { translateY: withSpring2(num3, c9) };
        ({ translateY: withSpring2(num3, c9) });
        return obj3;
      };
      const obj4 = { withSpring: tmp(tmp2[13]).withSpring, activeQuestDockMode, QuestDockMode: isVideoReadyForDisplay, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_10, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, windowDimensions };
      const useAnimatedStyle = tmp(tmp2[12]).useAnimatedStyle;
      tmp(tmp2[12]);
      fn2.__closure = obj4;
      fn2.__workletHash = 16548193437981;
      fn2.__initData = __initData3;
      const animatedStyle = useAnimatedStyle(fn2);
      const tmp26 = require("useIsQuestDockModeActiveOrExiting")(isVideoReadyForDisplay.EXPANDED);
      [tmp30, closure_6] = windowDimensions(obj2.useState("active" !== currentState.currentState), 2);
      windowDimensions(obj2.useState("active" !== currentState.currentState), 2);
      const tmp23 = QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
      const tmp28 = windowDimensions;
      if (cResult[10] === activeQuestDockMode) {
        let tmp31;
        let tmp32;
        if (cResult[11] === setRestingQuestDockMode) {
          tmp31 = cResult[12];
          tmp32 = cResult[13];
        }
        const effect = obj2.useEffect(tmp31, tmp32);
        if (cResult[14] === tmp26) {
          if (cResult[15] === tmp30) {
            if (cResult[16] === collapsedMediaMode === obj.HIDDEN) {
              if (cResult[17] === isRendered) {
                if (cResult[18] === stateFromStores) {
                  if (cResult[19] === videoMimetype) {
                    let tmp34;
                    if (cResult[20] === videoUrl) {
                      tmp34 = cResult[21];
                    }
                    useReducedMotion = tmp34;
                    const tmp28Result = tmp28(obj2.useState(false), 2);
                    isVideoReadyForDisplay = tmp28Result[0];
                    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = tmp28Result[1];
                    const _Symbol = Symbol;
                    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                      class De {
                        constructor() {
                          closure_9(true);
                        }
                      }
                      cResult[22] = De;
                    } else {
                      class De {
                        constructor() {
                          closure_9(true);
                        }
                      }
                    }
                    const tmp40 = isVideoReadyForDisplay && !tmp34;
                    if (tmp40) {
                      class De {
                        constructor() {
                          closure_9(true);
                        }
                      }
                    }
                    let tmp42 = null != imageUrl;
                    if (tmp42) {
                      class De {
                        constructor() {
                          closure_9(true);
                        }
                      }
                      if (collapsedMediaMode === obj.HIDDEN) {
                        class De {
                          constructor() {
                            closure_9(true);
                          }
                        }
                      }
                      tmp42 = tmp43;
                    }
                    if (cResult[23] === imageUrl) {
                      class De {
                        constructor() {
                          closure_9(true);
                        }
                      }
                      const effect1 = obj2.useEffect(tmp44, tmp45);
                      function he() {
                        let num = 1;
                        const withSpring = spring.withSpring;
                        spring;
                        if (useReducedMotion) {
                          num = 1;
                          if (first) {
                            if (closure_1) {
                              num = 0;
                            } else {
                              num = 1;
                            }
                          }
                        }
                        const obj = { opacity: withSpring(num, c9) };
                        return obj;
                      }
                      const obj5 = { withSpring: tmp(tmp2[13]).withSpring, shouldShowVideo: tmp34, isVideoReadyForDisplay, isMediaHiddenWhenCollapsed: collapsedMediaMode === obj.HIDDEN, activeQuestDockMode, QuestDockMode: isVideoReadyForDisplay, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: tmp23 };
                      const useAnimatedStyle2 = tmp(tmp2[12]).useAnimatedStyle;
                      tmp(tmp2[12]);
                      he.__closure = obj5;
                      he.__workletHash = 9431878459166;
                      he.__initData = __initData4;
                      const animatedStyle2 = useAnimatedStyle2(he);
                      if (cResult[27] === tmp9) {
                        class De {
                          constructor() {
                            closure_9(true);
                          }
                        }
                      }
                      let tmp51 = null;
                      if (tmp34) {
                        class De {
                          constructor() {
                            closure_9(true);
                          }
                        }
                        const obj6 = { style: tmp6.backgroundVideo, onReadyForDisplay: De, source: obj9, paused: tmp9 !== isVideoReadyForDisplay.EXPANDED, resizeMode: "cover", muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false };
                        obj9 = { uri: videoUrl };
                        tmp51 = closure_12(tmp(tmp2[27]).VideoComponent, obj6);
                      }
                      cResult[27] = tmp9;
                      cResult[28] = tmp34;
                      cResult[29] = tmp6.backgroundVideo;
                      cResult[30] = videoUrl;
                      cResult[31] = tmp51;
                    }
                    function ge() {
                      const tmp2 = null != imageUrl && closure_1;
                      if (tmp2) {
                        const obj2 = { uri: imageUrl };
                        const obj = react_nativeDefault;
                        obj.preload(obj2);
                      }
                    }
                    const items1 = [imageUrl, collapsedMediaMode === obj.HIDDEN];
                    cResult[23] = imageUrl;
                    cResult[24] = collapsedMediaMode === obj.HIDDEN;
                    cResult[25] = ge;
                    cResult[26] = items1;
                    tmp44 = ge;
                    tmp45 = items1;
                  }
                }
              }
            }
          }
        }
        let isHeroVideoSupportedResult = !tmp30 && isRendered && !stateFromStores;
        if (isHeroVideoSupportedResult) {
          class De {
            constructor() {
              closure_9(true);
            }
          }
          isHeroVideoSupportedResult = null != videoUrl;
        }
        if (isHeroVideoSupportedResult) {
          class De {
            constructor() {
              closure_9(true);
            }
          }
          isHeroVideoSupportedResult = !obj7.isAndroid();
        }
        if (isHeroVideoSupportedResult) {
          class De {
            constructor() {
              closure_9(true);
            }
          }
          isHeroVideoSupportedResult = obj8.isHeroVideoSupported(videoMimetype);
        }
        if (isHeroVideoSupportedResult) {
          class De {
            constructor() {
              closure_9(true);
            }
          }
          if (collapsedMediaMode === obj.HIDDEN) {
            class De {
              constructor() {
                closure_9(true);
              }
            }
          }
          isHeroVideoSupportedResult = tmp36;
        }
        cResult[14] = tmp26;
        cResult[15] = tmp30;
        cResult[16] = collapsedMediaMode === obj.HIDDEN;
        cResult[17] = isRendered;
        cResult[18] = stateFromStores;
        cResult[19] = videoMimetype;
        cResult[20] = videoUrl;
        cResult[21] = isHeroVideoSupportedResult;
        tmp34 = isHeroVideoSupportedResult;
      }
      function ee() {
        let closure_0 = closure_5.addEventListener("change", (event) => {
          closure_1_6("active" !== event);
          const obj = imageUrl(activeQuestDockMode[24]);
          const tmp3 = obj.isIOS() && tmp && closure_1_2.get() === first.EXPANDED;
          if (tmp3) {
            setRestingQuestDockMode(first.COLLAPSED);
          }
        });
        return () => {
          closure_0.remove();
        };
      }
      const items2 = [activeQuestDockMode, setRestingQuestDockMode];
      cResult[10] = activeQuestDockMode;
      cResult[11] = setRestingQuestDockMode;
      cResult[12] = ee;
      cResult[13] = items2;
      tmp32 = items2;
      tmp31 = ee;
    }
  }
  const tmpResult6 = tmp(tmp2[21]);
  const questDockExpandedHeightLimits = tmpResult6.getQuestDockExpandedHeightLimits(height, top, expandedHeight);
  cResult[2] = expandedHeight;
  cResult[3] = top;
  cResult[4] = height;
  cResult[5] = questDockExpandedHeightLimits;
  tmp14 = questDockExpandedHeightLimits;
}) : ((imageUrl) => {
  let backdropColor;
  let c9;
  let closure_3;
  let collapsedMediaMode;
  let expandedHeight;
  let items10;
  let items11;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj;
  let obj10;
  let obj7;
  let obj9;
  let tmp18;
  let videoUrl;
  imageUrl = imageUrl.imageUrl;
  ({ videoUrl, collapsedMediaMode } = imageUrl);
  const videoMimetype = imageUrl.videoMimetype;
  if (collapsedMediaMode === undefined) {
    const tmp = obj;
    collapsedMediaMode = obj.PAUSED;
  }
  const gradientBaseColor = imageUrl.gradientBaseColor;
  ({ backdropColor, expandedHeight } = imageUrl);
  let activeQuestDockMode;
  QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = undefined;
  let c10;
  let isVideoReadyForDisplay;
  closure_12 = undefined;
  let tmp2 = collapsedMediaMode === obj.HIDDEN;
  _slicedToArray = tmp2;
  const foregroundContent = imageUrl.foregroundContent;
  let tmp3 = closure_17();
  obj = activeQuestDockMode;
  const context = activeQuestDockMode.useContext(imageUrl(expandedHeight[11]).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  const setRestingQuestDockMode = activeQuestDockMode.useContext(imageUrl(expandedHeight[15]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const isRendered = activeQuestDockMode.useContext(gradientBaseColor(expandedHeight[16])).isRendered;
  const tmp8 = gradientBaseColor(expandedHeight[17])(activeQuestDockMode);
  const height = gradientBaseColor(expandedHeight[18])().height;
  const top = gradientBaseColor(expandedHeight[19])().top;
  let obj2 = imageUrl(expandedHeight[20]);
  let items = [height];
  const items1 = [height, top, expandedHeight];
  const stateFromStores = obj2.useStateFromStores(items, () => height.useReducedMotion);
  const memo = activeQuestDockMode.useMemo(() => {
    let obj2;
    const obj = { height: obj2.getQuestDockExpandedHeightLimits(height, top, expandedHeight).maxHeight };
    obj2 = QuestDockUtils;
    return obj;
  }, items1);
  const items2 = [gradientBaseColor];
  const memo1 = activeQuestDockMode.useMemo(() => {
    let closure_0 = _modDef683(gradientBaseColor);
    return closure_14.map((item) => {
      const alphaResult = closure_0.alpha(item);
      return alphaResult.hex();
    });
  }, items2);
  let obj3 = imageUrl(expandedHeight[12]);
  class L {
    constructor() {
      const withSpring = spring.withSpring;
      let num = 0;
      spring;
      if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
        num = -1 * authStore;
      }
      const items = [{ translateX: withSpring(num, c9) }, ];
      ({ translateX: withSpring(num, c9) });
      const withSpring2 = spring.withSpring;
      let num3 = 0;
      spring;
      if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
        num3 = -1 * authStore;
      }
      const obj3 = { transform: items, width: windowDimensions.get().width };
      items[1] = { translateY: withSpring2(num3, c9) };
      ({ translateY: withSpring2(num3, c9) });
      return obj3;
    }
  }
  const obj4 = { withSpring: imageUrl(expandedHeight[13]).withSpring, activeQuestDockMode, QuestDockMode: top, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: c10, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, windowDimensions };
  L.__closure = obj4;
  L.__workletHash = 772757763995;
  L.__initData = __initData5;
  const animatedStyle = obj3.useAnimatedStyle(L);
  const tmp15 = gradientBaseColor(expandedHeight[23])(top.EXPANDED);
  [tmp18, c9] = activeQuestDockMode.useState("active" !== windowDimensions.currentState);
  const items3 = [activeQuestDockMode, setRestingQuestDockMode];
  _slicedToArray(activeQuestDockMode.useState("active" !== windowDimensions.currentState), 2);
  const effect = activeQuestDockMode.useEffect(() => {
    let closure_0 = windowDimensions.addEventListener("change", (event) => {
      closure_1_9("active" !== event);
      const obj = imageUrl(expandedHeight[24]);
      const tmp3 = obj.isIOS() && tmp && activeQuestDockMode.get() === top.EXPANDED;
      if (tmp3) {
        setRestingQuestDockMode(top.COLLAPSED);
      }
    });
    return () => {
      closure_0.remove();
    };
  }, items3);
  let isHeroVideoSupportedResult = !tmp18 && isRendered && !stateFromStores;
  const tmp16 = _slicedToArray;
  if (isHeroVideoSupportedResult) {
    isHeroVideoSupportedResult = null != videoUrl;
  }
  if (isHeroVideoSupportedResult) {
    const tmp4Result = imageUrl(expandedHeight[24]);
    isHeroVideoSupportedResult = !tmp4Result.isAndroid();
  }
  if (isHeroVideoSupportedResult) {
    const tmp4Result3 = imageUrl(expandedHeight[25]);
    isHeroVideoSupportedResult = tmp4Result3.isHeroVideoSupported(videoMimetype);
  }
  if (isHeroVideoSupportedResult) {
    let tmp22 = !tmp2;
    if (tmp2) {
      tmp22 = tmp15;
    }
    isHeroVideoSupportedResult = tmp22;
  }
  c10 = isHeroVideoSupportedResult;
  const tmp16Result = tmp16(obj.useState(false), 2);
  isVideoReadyForDisplay = tmp16Result[0];
  closure_12 = tmp25;
  let tmp27 = isVideoReadyForDisplay;
  const callback = obj.useCallback(() => {
    closure_12(true);
  }, []);
  if (isVideoReadyForDisplay) {
    tmp27 = !isHeroVideoSupportedResult;
  }
  if (tmp27) {
    tmp16Result[1](false);
  }
  const items4 = [imageUrl, tmp2];
  const effect1 = obj.useEffect(() => {
    const tmp2 = null != imageUrl && closure_3;
    if (tmp2) {
      const obj2 = { uri: imageUrl };
      const obj = react_nativeDefault;
      obj.preload(obj2);
    }
  }, items4);
  function se() {
    let num = 1;
    const withSpring = spring.withSpring;
    spring;
    if (c10) {
      num = 1;
      if (first) {
        if (closure_3) {
          num = 0;
        } else {
          num = 1;
        }
      }
    }
    const obj = { opacity: withSpring(num, c9) };
    return obj;
  }
  const tmp4Result4 = imageUrl(expandedHeight[12]);
  se.__closure = { withSpring: imageUrl(expandedHeight[13]).withSpring, shouldShowVideo: isHeroVideoSupportedResult, isVideoReadyForDisplay, isMediaHiddenWhenCollapsed: tmp2, activeQuestDockMode, QuestDockMode: top, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  se.__workletHash = 7848759251612;
  se.__initData = __initData6;
  let tmp32 = null;
  ({ withSpring: imageUrl(expandedHeight[13]).withSpring, shouldShowVideo: isHeroVideoSupportedResult, isVideoReadyForDisplay, isMediaHiddenWhenCollapsed: tmp2, activeQuestDockMode, QuestDockMode: top, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED });
  const animatedStyle1 = tmp4Result4.useAnimatedStyle(se);
  const Fragment = obj.Fragment;
  if (isHeroVideoSupportedResult) {
    const obj6 = { style: tmp3.backgroundVideo, onReadyForDisplay: callback, source: obj7, paused: tmp8 !== top.EXPANDED, resizeMode: "cover", muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false };
    obj7 = { uri: videoUrl };
    tmp32 = closure_12(tmp4(expandedHeight[27]).VideoComponent, obj6);
  }
  const items5 = [tmp32, ];
  let tmp34 = null;
  if (null != imageUrl) {
    if (!tmp2) {
      const obj8 = { style: items6, children: closure_12(gradientBaseColor(expandedHeight[28]), obj9) };
      items6 = [tmp3.backgroundImageWrapper, memo, animatedStyle1];
      obj9 = { style: items7, source: obj10 };
      items7 = [tmp3.backgroundImage, memo];
      obj10 = { uri: imageUrl };
      const tmp7Result = gradientBaseColor(expandedHeight[14]);
      tmp34 = closure_12(tmp7Result, obj8);
    } else {
      tmp34 = null;
    }
  }
  items5[1] = tmp34;
  const tmp31Result = closure_13(Fragment, { children: items5 });
  const obj11 = { style: items8, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items10 };
  items8 = [tmp3.backgroundWrapper, memo, animatedStyle];
  let tmp39 = null;
  const tmp7Result2 = gradientBaseColor(expandedHeight[14]);
  if (null != backdropColor) {
    const obj12 = { style: items9 };
    items9 = [tmp3.backdrop, memo, ];
    const obj13 = { backgroundColor: backdropColor };
    items9[2] = obj13;
    tmp39 = closure_12(setRestingQuestDockMode, obj12);
  }
  items10 = [tmp39, , , ];
  let tmp42 = tmp31Result;
  if (tmp2) {
    const obj14 = { style: memo, children: tmp31Result };
    tmp42 = closure_12(closure_20, obj14);
  }
  items10[1] = tmp42;
  const obj15 = { locations, style: items11, start: isVideoReadyForDisplay.START, end: isVideoReadyForDisplay.END, colors: memo1 };
  items11 = [tmp3.backgroundGradient, memo];
  items10[2] = closure_12(gradientBaseColor(expandedHeight[29]), obj15);
  items10[3] = foregroundContent;
  return closure_13(tmp7Result2, obj11);
}));
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockVideoBackground.tsx");

export default memoResult;
export { QuestDockBackgroundCollapsedMediaMode };