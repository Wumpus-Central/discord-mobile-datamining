// discord_app/modules/quests/native/QuestDock/QuestDockVideoBackground.tsx
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import NativeImageManagerModuleDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/NativeImageManagerModule.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import ReanimatedNativeViewDefault from "../../../core/native/ReanimatedNativeView.tsx";
import QuestDockUtils from "QuestDockUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ AppState: hasOwnProperty, StyleSheet, View: metroRequire } = get_ActivityIndicator);
const QuestDockMode = fn(5630).QuestDockMode;
const QuestDockConstants = fn(14912);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_9, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: c10 } =
  QuestDockConstants);
const VerticalGradient = fn(1085).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = [0, 0.1, 0.8, 1];
const locations = [0, 0.33, 0.76, 1];
const QuestDockBackgroundCollapsedMediaMode = { PAUSED: "paused", HIDDEN: "hidden" };
const createStyles = fn(4896);
let obj2 = {
  backgroundWrapper: null,
  backgroundImage: null,
  backgroundImageWrapper: null,
  backgroundVideo: null,
  media: null,
  backgroundGradient: null,
  backdrop: null,
};
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.right = undefined;
obj4.bottom = undefined;
obj4.zIndex = 1;
obj2.backgroundWrapper = obj4;
let obj5 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj5.resizeMode = "cover";
obj2.backgroundImage = obj5;
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj2.backgroundImageWrapper = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj2.backgroundVideo = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj2.media = {};
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj2.backgroundGradient = {};
const merged6 = Object.assign(StyleSheet.absoluteFillObject);
obj2.backdrop = {};
let closure_17 = createStyles.createStyles(obj2);
const __initData = {
  code: "function QuestDockVideoBackgroundTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}",
};
const __initData2 = {
  code: "function QuestDockVideoBackgroundTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}",
};
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = activeQuestDockMode(576).c(7);
      ({ children, style } = arg0);
      const tmp3 = closure_17();
      activeQuestDockMode = noop.useContext(activeQuestDockMode(14913).QuestDockGestureContext).activeQuestDockMode;
      let obj = activeQuestDockMode(576);
      const fn = function n() {
        let num = 0;
        if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
          num = 1;
        }
        return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
      };
      const obj2 = activeQuestDockMode(4618);
      fn.__closure = {
        withSpring: activeQuestDockMode(5604).withSpring,
        activeQuestDockMode,
        QuestDockMode,
        QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
      };
      fn.__workletHash = 5908890006198;
      fn.__initData = __initData;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      if (cResult[0] === animatedStyle) {
        if (cResult[1] === style) {
          if (cResult[2] === tmp3.media) {
            let tmp5 = cResult[3];
          }
          if (cResult[4] === children) {
            if (cResult[5] === tmp5) {
              let tmp6 = cResult[6];
            }
            return tmp6;
          }
          const obj4 = { style: tmp5, children };
          const tmp9 = closure_12(ReanimatedNativeViewDefault, obj4);
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
      const obj3 = {
        withSpring: activeQuestDockMode(5604).withSpring,
        activeQuestDockMode,
        QuestDockMode,
        QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
      };
    }
  : (arg0) => {
      let activeQuestDockMode;
      ({ children, style } = arg0);
      activeQuestDockMode = noop.useContext(activeQuestDockMode(14913).QuestDockGestureContext).activeQuestDockMode;
      const tmp = closure_17();
      const fn = function s() {
        let num = 0;
        if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
          num = 1;
        }
        return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
      };
      let obj = activeQuestDockMode(4618);
      fn.__closure = {
        withSpring: activeQuestDockMode(5604).withSpring,
        activeQuestDockMode,
        QuestDockMode,
        QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
      };
      fn.__workletHash = 9800697298933;
      fn.__initData = __initData2;
      const animatedStyle = obj.useAnimatedStyle(fn);
      const obj3 = { style: null, children };
      const items = [tmp.media, style, animatedStyle];
      obj3.style = items;
      return closure_12(ReanimatedNativeViewDefault, obj3);
    };
const __initData3 = {
  code: "function QuestDockVideoBackgroundTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions}=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};}",
};
const __initData4 = {
  code: "function QuestDockVideoBackgroundTsx4(){const{withSpring,shouldShowVideo,isVideoReadyForDisplay,isMediaHiddenWhenCollapsed,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(shouldShowVideo&&isVideoReadyForDisplay&&(isMediaHiddenWhenCollapsed||activeQuestDockMode.get()===QuestDockMode.EXPANDED)?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}",
};
const __initData5 = {
  code: "function QuestDockVideoBackgroundTsx5(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions}=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};}",
};
const __initData6 = {
  code: "function QuestDockVideoBackgroundTsx6(){const{withSpring,shouldShowVideo,isVideoReadyForDisplay,isMediaHiddenWhenCollapsed,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(shouldShowVideo&&isVideoReadyForDisplay&&(isMediaHiddenWhenCollapsed||activeQuestDockMode.get()===QuestDockMode.EXPANDED)?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}",
};
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockVideoBackground.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (imageUrl) => {
        let obj = imageUrl(activeQuestDockMode[10]);
        const cResult = obj.c(66);
        imageUrl = imageUrl.imageUrl;
        ({
          videoUrl,
          videoMimetype,
          collapsedMediaMode,
          gradientBaseColor,
          backdropColor,
          expandedHeight,
          foregroundContent,
        } = imageUrl);
        if (undefined === collapsedMediaMode) {
          collapsedMediaMode = obj.PAUSED;
        }
        importDefault = tmp5;
        const tmp6 = closure_17();
        const context = setRestingQuestDockMode.useContext(tmp(tmp2[11]).QuestDockGestureContext);
        activeQuestDockMode = context.activeQuestDockMode;
        const windowDimensions = context.windowDimensions;
        setRestingQuestDockMode = setRestingQuestDockMode.useContext(
          tmp(tmp2[15]).QuestDockExternalCoordinationContext,
        ).setRestingQuestDockMode;
        const isRendered = setRestingQuestDockMode.useContext(require("QuestDockVisibilityContext")).isRendered;
        const tmp9 = require("useStateFromSharedValue")(activeQuestDockMode);
        const height = require("useWindowDimensions")().height;
        const top = require("useSafeAreaInsets")().top;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [useReducedMotion];
          const fn = function _() {
            return useReducedMotion.useReducedMotion;
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp10 = items;
          tmp11 = fn;
        } else {
          [tmp10, tmp11] = cResult;
        }
        const stateFromStores = imageUrl(activeQuestDockMode[20]).useStateFromStores(tmp10, tmp11);
        if (cResult[2] === expandedHeight) {
          if (cResult[3] === top) {
            if (cResult[4] === height) {
              let tmp14 = cResult[5];
            }
            if (cResult[6] !== tmp14.maxHeight) {
              let obj3 = { height: tmp14.maxHeight };
              cResult[6] = tmp14.maxHeight;
              cResult[7] = obj3;
            }
            if (cResult[8] !== gradientBaseColor) {
              currentState = tmp8(tmp2[22])(gradientBaseColor);
              const mapped = closure_14.map((item) => closure_5.alpha(item).hex());
              cResult[8] = gradientBaseColor;
              cResult[9] = mapped;
            }
            const fn2 = function $() {
              let num = 0;
              if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
                num = -1 * v65535;
              }
              const items = [{ translateX: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) }];
              const obj3 = { translateX: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
              let num3 = 0;
              if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
                num3 = -1 * v65535;
              }
              const obj4 = { transform: null, width: null };
              const tmpResult = spring;
              items[1] = { translateY: spring.withSpring(num3, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
              obj4.transform = items;
              obj4.width = windowDimensions.get().width;
              return obj4;
            };
            let obj4 = {
              withSpring: tmp(tmp2[13]).withSpring,
              activeQuestDockMode,
              QuestDockMode: isVideoReadyForDisplay,
              QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_10,
              QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
              windowDimensions,
            };
            fn2.__closure = obj4;
            fn2.__workletHash = 16548193437981;
            fn2.__initData = __initData3;
            const animatedStyle = tmp(tmp2[12]).useAnimatedStyle(fn2);
            const tmp25 = tmp8(tmp2[23])(isVideoReadyForDisplay.EXPANDED);
            const tmp22 = QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
            const tmp27 = windowDimensions;
            const tmpResult4 = tmp(tmp2[12]);
            [tmp29, closure_6] = windowDimensions(obj2.useState("active" !== currentState.currentState), 2);
            if (cResult[10] === activeQuestDockMode) {
              if (cResult[11] === setRestingQuestDockMode) {
                let tmp30 = cResult[12];
                let tmp31 = cResult[13];
              }
              const effect = obj2.useEffect(tmp30, tmp31);
              if (cResult[14] === tmp25) {
                if (cResult[15] === tmp29) {
                  if (cResult[16] === tmp5) {
                    if (cResult[17] === isRendered) {
                      if (cResult[18] === stateFromStores) {
                        if (cResult[19] === videoMimetype) {
                          if (cResult[20] === videoUrl) {
                            let tmp33 = cResult[21];
                          }
                          useReducedMotion = tmp33;
                          const tmp27Result = tmp27(obj2.useState(false), 2);
                          isVideoReadyForDisplay = tmp27Result[0];
                          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = tmp27Result[1];
                          const _Symbol = Symbol;
                          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                            class De {
                              constructor() {
                                tmp = closure_9(true);
                                return;
                              }
                            }
                            cResult[22] = De;
                          } else {
                            class De {
                              constructor() {
                                tmp = closure_9(true);
                                return;
                              }
                            }
                          }
                          if (isVideoReadyForDisplay) {
                            class De {
                              constructor() {
                                tmp = closure_9(true);
                                return;
                              }
                            }
                          }
                          if (tmp39) {
                            class De {
                              constructor() {
                                tmp = closure_9(true);
                                return;
                              }
                            }
                          }
                          let tmp41 = null != imageUrl;
                          if (tmp41) {
                            class De {
                              constructor() {
                                tmp = closure_9(true);
                                return;
                              }
                            }
                            if (tmp5) {
                              class De {
                                constructor() {
                                  tmp = closure_9(true);
                                  return;
                                }
                              }
                            }
                            tmp41 = tmp42;
                          }
                          if (cResult[23] === imageUrl) {
                            class De {
                              constructor() {
                                tmp = closure_9(true);
                                return;
                              }
                            }
                            const effect1 = obj2.useEffect(tmp43, tmp44);
                            function he() {
                              let num = 1;
                              if (closure_7) {
                                num = 1;
                                if (first) {
                                  if (closure_1) {
                                    num = 0;
                                  } else {
                                    num = 1;
                                  }
                                }
                              }
                              return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
                            }
                            const obj5 = {
                              withSpring: tmp(tmp2[13]).withSpring,
                              shouldShowVideo: tmp33,
                              isVideoReadyForDisplay,
                              isMediaHiddenWhenCollapsed: tmp5,
                              activeQuestDockMode,
                              QuestDockMode: tmp20,
                              QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: tmp22,
                            };
                            he.__closure = obj5;
                            he.__workletHash = 9431878459166;
                            he.__initData = __initData4;
                            const animatedStyle1 = tmp(tmp2[12]).useAnimatedStyle(he);
                            if (cResult[27] === tmp9) {
                              class De {
                                constructor() {
                                  tmp = closure_9(true);
                                  return;
                                }
                              }
                            }
                            let tmp49 = null;
                            if (tmp33) {
                              class De {
                                constructor() {
                                  tmp = closure_9(true);
                                  return;
                                }
                              }
                              const obj6 = {
                                style: tmp6.backgroundVideo,
                                onReadyForDisplay: De,
                                source: null,
                                paused: null,
                                resizeMode: "cover",
                                muted: true,
                                disableFocus: true,
                                preventsDisplaySleepDuringVideoPlayback: false,
                              };
                              const obj7 = { uri: videoUrl };
                              obj6.source = obj7;
                              obj6.paused = tmp9 !== tmp20.EXPANDED;
                              tmp49 = closure_12(tmp(tmp2[27]).VideoComponent, obj6);
                            }
                            cResult[27] = tmp9;
                            cResult[28] = tmp33;
                            cResult[29] = tmp6.backgroundVideo;
                            cResult[30] = videoUrl;
                            cResult[31] = tmp49;
                            const tmpResult5 = tmp(tmp2[12]);
                          }
                          function ge() {
                            let tmp2 = null != imageUrl;
                            if (tmp2) {
                              tmp2 = closure_1;
                            }
                            if (tmp2) {
                              const obj2 = { uri: imageUrl };
                              NativeImageManagerModuleDefault.preload(obj2);
                            }
                          }
                          const items1 = [imageUrl, tmp5];
                          cResult[23] = imageUrl;
                          cResult[24] = tmp5;
                          cResult[25] = ge;
                          cResult[26] = items1;
                          tmp39 = isVideoReadyForDisplay;
                          tmp43 = ge;
                          tmp44 = items1;
                        }
                      }
                    }
                  }
                }
              }
              let isHeroVideoSupportedResult = !tmp29;
              if (!tmp29) {
                class De {
                  constructor() {
                    tmp = closure_9(true);
                    return;
                  }
                }
              }
              if (isHeroVideoSupportedResult) {
                class De {
                  constructor() {
                    tmp = closure_9(true);
                    return;
                  }
                }
              }
              if (isHeroVideoSupportedResult) {
                class De {
                  constructor() {
                    tmp = closure_9(true);
                    return;
                  }
                }
                isHeroVideoSupportedResult = null != videoUrl;
              }
              if (isHeroVideoSupportedResult) {
                class De {
                  constructor() {
                    tmp = closure_9(true);
                    return;
                  }
                }
                isHeroVideoSupportedResult = !obj8.isAndroid();
              }
              if (isHeroVideoSupportedResult) {
                class De {
                  constructor() {
                    tmp = closure_9(true);
                    return;
                  }
                }
                isHeroVideoSupportedResult = obj9.isHeroVideoSupported(videoMimetype);
              }
              if (isHeroVideoSupportedResult) {
                class De {
                  constructor() {
                    tmp = closure_9(true);
                    return;
                  }
                }
                if (tmp5) {
                  class De {
                    constructor() {
                      tmp = closure_9(true);
                      return;
                    }
                  }
                }
                isHeroVideoSupportedResult = tmp35;
              }
              cResult[14] = tmp25;
              cResult[15] = tmp29;
              cResult[16] = tmp5;
              cResult[17] = isRendered;
              cResult[18] = stateFromStores;
              cResult[19] = videoMimetype;
              cResult[20] = videoUrl;
              cResult[21] = isHeroVideoSupportedResult;
              tmp33 = isHeroVideoSupportedResult;
            }
            function ee() {
              closure_0 = closure_5.addEventListener("change", (event) => {
                closure_1_6("active" !== event);
                let tmp3 = imageUrl(activeQuestDockMode[24]).isIOS() && tmp;
                if (tmp3) {
                  tmp3 = closure_1_2.get() === first.EXPANDED;
                }
                if (tmp3) {
                  setRestingQuestDockMode(first.COLLAPSED);
                }
                const obj = imageUrl(activeQuestDockMode[24]);
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
            tmp31 = items2;
            tmp30 = ee;
            const tmp28 = windowDimensions(obj2.useState("active" !== currentState.currentState), 2);
          }
        }
        let tmpResult = imageUrl(activeQuestDockMode[20]);
        const questDockExpandedHeightLimits = imageUrl(activeQuestDockMode[21]).getQuestDockExpandedHeightLimits(
          height,
          top,
          expandedHeight,
        );
        cResult[2] = expandedHeight;
        cResult[3] = top;
        cResult[4] = height;
        cResult[5] = questDockExpandedHeightLimits;
        tmp14 = questDockExpandedHeightLimits;
        const tmpResult6 = imageUrl(activeQuestDockMode[21]);
      }
    : (imageUrl) => {
        imageUrl = imageUrl.imageUrl;
        ({ videoUrl, collapsedMediaMode } = imageUrl);
        if (collapsedMediaMode === undefined) {
          collapsedMediaMode = obj.PAUSED;
        }
        const gradientBaseColor = imageUrl.gradientBaseColor;
        ({ backdropColor, expandedHeight } = imageUrl);
        let activeQuestDockMode;
        QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = undefined;
        let isRendered;
        let isVideoReadyForDisplay;
        closure_12 = undefined;
        _slicedToArray = tmp2;
        let tmp3 = closure_17();
        const context = activeQuestDockMode.useContext(imageUrl(expandedHeight[11]).QuestDockGestureContext);
        activeQuestDockMode = context.activeQuestDockMode;
        const windowDimensions = context.windowDimensions;
        const setRestingQuestDockMode = activeQuestDockMode.useContext(
          imageUrl(expandedHeight[15]).QuestDockExternalCoordinationContext,
        ).setRestingQuestDockMode;
        const height = gradientBaseColor(expandedHeight[18])().height;
        const top = gradientBaseColor(expandedHeight[19])().top;
        const tmp8 = gradientBaseColor(expandedHeight[17])(activeQuestDockMode);
        let items = [height];
        const items1 = [height, top, expandedHeight];
        const stateFromStores = imageUrl(expandedHeight[20]).useStateFromStores(items, () => height.useReducedMotion);
        const memo = activeQuestDockMode.useMemo(() => {
          const obj = {
            height: QuestDockUtils.getQuestDockExpandedHeightLimits(height, top, expandedHeight).maxHeight,
          };
          return obj;
        }, items1);
        const items2 = [gradientBaseColor];
        const memo1 = activeQuestDockMode.useMemo(() => {
          closure_0 = _modDef683(gradientBaseColor);
          return closure_14.map((item) => closure_0.alpha(item).hex());
        }, items2);
        let obj2 = imageUrl(expandedHeight[20]);
        class L {
          constructor() {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            obj2 = activeQuestDockMode;
            num = 0;
            tmp3 = QuestDockMode;
            if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
              tmp4 = closure_10;
              num2 = -1;
              num = -1 * closure_10;
            }
            obj1 = { translateX: obj.withSpring(num, closure_9) };
            tmp5 = closure_9;
            items = [,];
            items[0] = obj1;
            tmpResult = tmp(tmp2[13]);
            num3 = 0;
            if (obj2.get() === tmp3.COLLAPSED) {
              tmp6 = closure_10;
              num4 = -1;
              num3 = -1 * closure_10;
            }
            obj7 = { transform: null, width: null };
            obj8 = { translateY: tmpResult.withSpring(num3, tmp5) };
            items[1] = obj8;
            obj7.transform = items;
            obj7.width = windowDimensions.get().width;
            return obj7;
          }
        }
        let obj3 = imageUrl(expandedHeight[12]);
        L.__closure = {
          withSpring: imageUrl(expandedHeight[13]).withSpring,
          activeQuestDockMode,
          QuestDockMode: top,
          QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: isRendered,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
          windowDimensions,
        };
        L.__workletHash = 772757763995;
        L.__initData = __initData5;
        const animatedStyle = obj3.useAnimatedStyle(L);
        let obj4 = {
          withSpring: imageUrl(expandedHeight[13]).withSpring,
          activeQuestDockMode,
          QuestDockMode: top,
          QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: isRendered,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
          windowDimensions,
        };
        const tmp13 = QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
        const tmp15 = gradientBaseColor(expandedHeight[23])(top.EXPANDED);
        const tmp16 = _slicedToArray;
        [tmp18, c9] = activeQuestDockMode.useState("active" !== windowDimensions.currentState);
        const items3 = [activeQuestDockMode, setRestingQuestDockMode];
        const effect = activeQuestDockMode.useEffect(() => {
          closure_0 = windowDimensions.addEventListener("change", (event) => {
            closure_1_9("active" !== event);
            let tmp3 = imageUrl(expandedHeight[24]).isIOS() && tmp;
            if (tmp3) {
              tmp3 = activeQuestDockMode.get() === top.EXPANDED;
            }
            if (tmp3) {
              setRestingQuestDockMode(top.COLLAPSED);
            }
            const obj = imageUrl(expandedHeight[24]);
          });
          return () => {
            closure_0.remove();
          };
        }, items3);
        isRendered = !tmp18;
        if (!tmp18) {
          isRendered = activeQuestDockMode.useContext(gradientBaseColor(expandedHeight[16])).isRendered;
        }
        if (isRendered) {
          isRendered = !stateFromStores;
        }
        if (isRendered) {
          isRendered = null != videoUrl;
        }
        if (isRendered) {
          isRendered = !tmp4(expandedHeight[24]).isAndroid();
          const tmp4Result = tmp4(expandedHeight[24]);
        }
        if (isRendered) {
          isRendered = tmp4(expandedHeight[25]).isHeroVideoSupported(imageUrl.videoMimetype);
          const tmp4Result3 = tmp4(expandedHeight[25]);
        }
        if (isRendered) {
          let tmp21 = !tmp2;
          if (tmp2) {
            tmp21 = tmp15;
          }
          isRendered = tmp21;
        }
        const tmp16Result = tmp16(activeQuestDockMode.useState(false), 2);
        isVideoReadyForDisplay = tmp16Result[0];
        closure_12 = tmp24;
        let tmp26 = isVideoReadyForDisplay;
        const callback = obj.useCallback(() => {
          closure_12(true);
        }, []);
        if (isVideoReadyForDisplay) {
          tmp26 = !isRendered;
        }
        if (tmp26) {
          tmp24(false);
        }
        const items4 = [imageUrl, collapsedMediaMode === obj.HIDDEN];
        const effect1 = obj.useEffect(() => {
          let tmp2 = null != imageUrl;
          if (tmp2) {
            tmp2 = closure_3;
          }
          if (tmp2) {
            const obj2 = { uri: imageUrl };
            NativeImageManagerModuleDefault.preload(obj2);
          }
        }, items4);
        const tmp17 = _slicedToArray(activeQuestDockMode.useState("active" !== windowDimensions.currentState), 2);
        function se() {
          let num = 1;
          if (isRendered) {
            num = 1;
            if (first) {
              if (closure_3) {
                num = 0;
              } else {
                num = 1;
              }
            }
          }
          return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
        }
        const tmp4Result4 = imageUrl(expandedHeight[12]);
        se.__closure = {
          withSpring: imageUrl(expandedHeight[13]).withSpring,
          shouldShowVideo: isRendered,
          isVideoReadyForDisplay,
          isMediaHiddenWhenCollapsed: collapsedMediaMode === activeQuestDockMode.HIDDEN,
          activeQuestDockMode,
          QuestDockMode: top,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: tmp13,
        };
        se.__workletHash = 7848759251612;
        se.__initData = __initData6;
        let tmp31 = null;
        const animatedStyle1 = tmp4Result4.useAnimatedStyle(se);
        if (isRendered) {
          const obj6 = {
            style: tmp3.backgroundVideo,
            onReadyForDisplay: callback,
            source: null,
            paused: null,
            resizeMode: "cover",
            muted: true,
            disableFocus: true,
            preventsDisplaySleepDuringVideoPlayback: false,
          };
          const obj7 = { uri: videoUrl };
          obj6.source = obj7;
          obj6.paused = tmp8 !== tmp12.EXPANDED;
          tmp31 = closure_12(tmp4(expandedHeight[27]).VideoComponent, obj6);
        }
        const items5 = [tmp31];
        let tmp33 = null;
        if (null != imageUrl) {
          if (!tmp2) {
            const obj8 = { style: null, children: null };
            const items6 = [tmp3.backgroundImageWrapper, memo, animatedStyle1];
            obj8.style = items6;
            const obj9 = { style: null, source: null };
            const items7 = [tmp3.backgroundImage, memo];
            obj9.style = items7;
            const obj10 = { uri: imageUrl };
            obj9.source = obj10;
            obj8.children = closure_12(tmp7(expandedHeight[28]), obj9);
            tmp33 = closure_12(tmp7(expandedHeight[14]), obj8);
            const tmp7Result = tmp7(expandedHeight[14]);
          } else {
            tmp33 = null;
          }
        }
        items5[1] = tmp33;
        const tmp30Result = closure_13(activeQuestDockMode.Fragment, { children: items5 });
        const obj11 = {
          style: null,
          pointerEvents: "none",
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          children: null,
        };
        const items8 = [tmp3.backgroundWrapper, memo, animatedStyle];
        obj11.style = items8;
        let tmp38 = null;
        const obj5 = {
          withSpring: imageUrl(expandedHeight[13]).withSpring,
          shouldShowVideo: isRendered,
          isVideoReadyForDisplay,
          isMediaHiddenWhenCollapsed: collapsedMediaMode === obj.HIDDEN,
          activeQuestDockMode,
          QuestDockMode: top,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: tmp13,
        };
        if (null != backdropColor) {
          const obj12 = { style: null };
          const items9 = [tmp3.backdrop, memo];
          const obj13 = { backgroundColor: backdropColor };
          items9[2] = obj13;
          obj12.style = items9;
          tmp38 = closure_12(setRestingQuestDockMode, obj12);
        }
        const items10 = [tmp38, , ,];
        let tmp41 = tmp30Result;
        if (collapsedMediaMode === obj.HIDDEN) {
          const obj14 = { style: memo, children: tmp30Result };
          tmp41 = closure_12(closure_20, obj14);
        }
        items10[1] = tmp41;
        const obj15 = {
          locations,
          style: null,
          start: isVideoReadyForDisplay.START,
          end: isVideoReadyForDisplay.END,
          colors: memo1,
        };
        const items11 = [tmp3.backgroundGradient, memo];
        obj15.style = items11;
        items10[2] = closure_12(gradientBaseColor(expandedHeight[29]), obj15);
        items10[3] = imageUrl.foregroundContent;
        obj11.children = items10;
        return closure_13(gradientBaseColor(expandedHeight[14]), obj11);
      },
);
export { QuestDockBackgroundCollapsedMediaMode };
