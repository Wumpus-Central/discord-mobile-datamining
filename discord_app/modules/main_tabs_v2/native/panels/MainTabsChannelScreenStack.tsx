// === Module 18488: MainTabsChannelScreenStack ===

// Module 18488 (MainTabsChannelScreenStack)
import c from "c" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Link from "Link" /* 1504 */;
import native from "native" /* 5071 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5086 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 5087 */;
import useChatLayout from "useChatLayout" /* 5190 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5192 */;
import ChatInputUtils from "ChatInputUtils" /* 5196 */;
import useThemeDefault from "useTheme" /* 5242 */;
import useMountEffect from "useMountEffect" /* 5300 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5334 */;
import Suspender from "Suspender" /* 5977 */;
import ChatViewWidthContextDefault from "ChatViewWidthContext" /* 11318 */;
import MainTabsNavigatorPanelContext from "MainTabsNavigatorPanelContext" /* 11868 */;
import useChannelScreensFromNavigation from "useChannelScreensFromNavigation" /* 17940 */;
import useMainTabsPanelsGestureDefault from "useMainTabsPanelsGesture" /* 17941 */;
import navigationTTIEnabled from "navigationTTIEnabled" /* 18490 */;
import HideCoveredChannelsExperimentDefault from "HideCoveredChannelsExperiment" /* 18492 */;
import useMainTabsChannelScreenStyles from "useMainTabsChannelScreenStyles" /* 18493 */;
import StandaloneChannelScreenDefault from "StandaloneChannelScreen" /* 18494 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const useChatLayoutDefault = useChatLayout;
const MainTabsNavigatorPanelContextDefault = MainTabsNavigatorPanelContext;

require = fn;
function getKey(index) {
  return String(index.index);
}
get_ActivityIndicator = fn(17);
({ NativeModules: hasOwnProperty, StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const setVisibleChannelScreen = fn(18489).setVisibleChannelScreen;
const ONYX_BORDER_WIDTH = fn(9766).ONYX_BORDER_WIDTH;
const Constants = fn(1084);
({ AnalyticsObjectTypes: closure_9, AnalyticsObjects: c10, AnalyticsSections: closure_11 } = Constants);
let ThemeTypes = fn(1095).ThemeTypes;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5005);
let closure_15 = createStyles.createStyles({ onyxContainerStyles: { marginTop: -ONYX_BORDER_WIDTH, marginLeft: -ONYX_BORDER_WIDTH } });
const __initData = { code: "function MainTabsChannelScreenStackTsx1(){const{isStackVisible,highestFullyRenderedScreenIndex,index,alwaysVisible,translateX,maxWidth}=this.__closure;return isStackVisible&&highestFullyRenderedScreenIndex.get()<=index&&(alwaysVisible||translateX.get()<maxWidth);}" };
const __initData2 = { code: "function MainTabsChannelScreenStackTsx2(visible,wasVisible){const{runOnJS,setIsVisible}=this.__closure;if(visible===wasVisible){return;}runOnJS(setIsVisible)(visible);}" };
const __initData3 = { code: "function MainTabsChannelScreenStackTsx3(){const{isStackVisible,highestFullyRenderedScreenIndex,index,alwaysVisible,translateX,maxWidth}=this.__closure;return isStackVisible&&highestFullyRenderedScreenIndex.get()<=index&&(alwaysVisible||translateX.get()<maxWidth);}" };
const __initData4 = { code: "function MainTabsChannelScreenStackTsx4(visible,wasVisible){const{runOnJS,setIsVisible}=this.__closure;if(visible===wasVisible)return;runOnJS(setIsVisible)(visible);}" };
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelScreenNavigationTTIVisibility(translateX) {
  const cResult = translateX(highestFullyRenderedScreenIndex[10]).c(7);
  translateX = translateX.translateX;
  const maxWidth = translateX.maxWidth;
  highestFullyRenderedScreenIndex = translateX.highestFullyRenderedScreenIndex;
  const index = translateX.index;
  const isStackVisible = translateX.isStackVisible;
  const alwaysVisible = translateX.alwaysVisible;
  closure_5 = tmp4;
  if (cResult[0] === (undefined !== alwaysVisible && alwaysVisible)) {
    if (cResult[1] === highestFullyRenderedScreenIndex) {
      if (cResult[2] === index) {
        if (cResult[3] === isStackVisible) {
          if (cResult[4] === maxWidth) {
            if (cResult[5] === translateX) {
              let tmp5 = cResult[6];
            }
            const tmp8 = index(isStackVisible.useState(tmp5), 2);
            closure_6 = tmp9;
            const fn2 = function f() {
              let tmp = isStackVisible;
              if (isStackVisible) {
                tmp = highestFullyRenderedScreenIndex.get() <= index;
              }
              if (tmp) {
                let tmp4 = closure_5;
                if (!closure_5) {
                  tmp4 = translateX.get() < maxWidth;
                }
                tmp = tmp4;
              }
              return tmp;
            };
            const obj2 = { isStackVisible, highestFullyRenderedScreenIndex, index, alwaysVisible: tmp4, translateX, maxWidth };
            fn2.__closure = obj2;
            fn2.__workletHash = 15384871148575;
            fn2.__initData = __initData;
            class T {
              constructor(arg0, arg1) {
                if (translateX !== arg1) {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj = closure_0(closure_2[11]);
                  tmp3 = closure_6;
                  tmp4 = obj.runOnJS(closure_6)(translateX);
                }
                return;
              }
            }
            const obj3 = { runOnJS: tmp(tmp2[11]).runOnJS, setIsVisible: tmp8[1] };
            T.__closure = obj3;
            T.__workletHash = 4812531096876;
            T.__initData = __initData2;
            const animatedReaction = tmp(tmp2[11]).useAnimatedReaction(fn2, T);
            return tmp8[0];
          }
        }
      }
    }
  }
  const fn = function l() {
    let tmp = isStackVisible;
    if (isStackVisible) {
      tmp = highestFullyRenderedScreenIndex.get() <= index;
    }
    if (tmp) {
      let tmp4 = closure_5;
      if (!closure_5) {
        tmp4 = translateX.get() < maxWidth;
      }
      tmp = tmp4;
    }
    return tmp;
  };
  cResult[0] = undefined !== alwaysVisible && alwaysVisible;
  cResult[1] = highestFullyRenderedScreenIndex;
  cResult[2] = index;
  cResult[3] = isStackVisible;
  cResult[4] = maxWidth;
  cResult[5] = translateX;
  cResult[6] = fn;
  tmp5 = fn;
  let obj = translateX(highestFullyRenderedScreenIndex[10]);
}) : (function useChannelScreenNavigationTTIVisibility(translateX) {
  translateX = translateX.translateX;
  const maxWidth = translateX.maxWidth;
  const highestFullyRenderedScreenIndex = translateX.highestFullyRenderedScreenIndex;
  const index = translateX.index;
  const isStackVisible = translateX.isStackVisible;
  let flag = translateX.alwaysVisible;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = index(isStackVisible.useState(() => {
    let tmp = isStackVisible;
    if (isStackVisible) {
      tmp = highestFullyRenderedScreenIndex.get() <= index;
    }
    if (tmp) {
      let tmp4 = flag;
      if (!flag) {
        tmp4 = translateX.get() < maxWidth;
      }
      tmp = tmp4;
    }
    return tmp;
  }), 2);
  closure_6 = tmp2;
  const fn = function b() {
    let tmp = isStackVisible;
    if (isStackVisible) {
      tmp = highestFullyRenderedScreenIndex.get() <= index;
    }
    if (tmp) {
      let tmp4 = flag;
      if (!flag) {
        tmp4 = translateX.get() < maxWidth;
      }
      tmp = tmp4;
    }
    return tmp;
  };
  fn.__closure = { isStackVisible, highestFullyRenderedScreenIndex, index, alwaysVisible: flag, translateX, maxWidth };
  fn.__workletHash = 10825075918877;
  fn.__initData = __initData3;
  class S {
    constructor(arg0, arg1) {
      if (translateX !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[11]);
        tmp3 = closure_6;
        tmp4 = obj.runOnJS(closure_6)(translateX);
      }
      return;
    }
  }
  let obj = translateX(highestFullyRenderedScreenIndex[11]);
  S.__closure = { runOnJS: translateX(highestFullyRenderedScreenIndex[11]).runOnJS, setIsVisible: tmp[1] };
  S.__workletHash = 17276269728204;
  S.__initData = __initData4;
  const animatedReaction = obj.useAnimatedReaction(fn, S);
  return tmp[0];
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function EnabledChannelScreenNavigationTTIVisibility(arg0) {
  const cResult = c.c(10);
  ({ translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible, alwaysVisible, children } = arg0);
  if (cResult[0] === (undefined !== alwaysVisible && alwaysVisible)) {
    if (cResult[1] === highestFullyRenderedScreenIndex) {
      if (cResult[2] === index) {
        if (cResult[3] === isStackVisible) {
          if (cResult[4] === maxWidth) {
            if (cResult[5] === translateX) {
              let tmp3 = cResult[6];
            }
            const tmp5 = closure_20(tmp3);
            if (cResult[7] === children) {
              if (cResult[8] === tmp5) {
                let tmp6 = cResult[9];
              }
              return tmp6;
            }
            const childrenResult = children(tmp5);
            cResult[7] = children;
            cResult[8] = tmp5;
            cResult[9] = childrenResult;
            tmp6 = childrenResult;
          }
        }
      }
    }
  }
  const obj2 = { translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible, alwaysVisible: undefined !== alwaysVisible && alwaysVisible };
  cResult[0] = undefined !== alwaysVisible && alwaysVisible;
  cResult[1] = highestFullyRenderedScreenIndex;
  cResult[2] = index;
  cResult[3] = isStackVisible;
  cResult[4] = maxWidth;
  cResult[5] = translateX;
  cResult[6] = obj2;
  tmp3 = obj2;
}) : (function EnabledChannelScreenNavigationTTIVisibility(alwaysVisible) {
  alwaysVisible = alwaysVisible.alwaysVisible;
  ({ translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible } = alwaysVisible);
  if (alwaysVisible === undefined) {
    alwaysVisible = false;
  }
  return alwaysVisible.children(closure_20({ translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible, alwaysVisible }));
});
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelScreenNavigationTTIVisibility(children) {
  const cResult = c.c(4);
  if (obj2.isNavigationTTIEnabled()) {
    if (cResult[2] !== children) {
      const obj3 = {};
      const merged = Object.assign(children);
      const tmp10 = map1(closure_21, obj3);
      cResult[2] = children;
      cResult[3] = tmp10;
    }
  } else {
    if (cResult[0] !== children.children) {
      const childrenResult = children.children(false);
      cResult[0] = children.children;
      cResult[1] = childrenResult;
      let tmp2 = childrenResult;
    } else {
      tmp2 = cResult[1];
    }
    return tmp2;
  }
  obj2 = navigationTTIEnabled;
}) : (function ChannelScreenNavigationTTIVisibility(children) {
  if (obj.isNavigationTTIEnabled()) {
    const obj2 = {};
    const merged = Object.assign(children);
    let childrenResult = map1(closure_21, obj2);
  } else {
    childrenResult = children.children(false);
  }
  return childrenResult;
});
const __initData5 = { code: "function MainTabsChannelScreenStackTsx5(){const{translateX}=this.__closure;return translateX.get()>0;}" };
const __initData6 = { code: "function MainTabsChannelScreenStackTsx6(isVisibleBeneath,wasVisibleBeneath){const{highestFullyRenderedScreenIndex,index}=this.__closure;if(isVisibleBeneath===wasVisibleBeneath){return;}if(isVisibleBeneath){if(highestFullyRenderedScreenIndex.get()>=index){highestFullyRenderedScreenIndex.set(index-1);}return;}if(highestFullyRenderedScreenIndex.get()<index){highestFullyRenderedScreenIndex.set(index);}}" };
const __initData7 = { code: "function MainTabsChannelScreenStackTsx7(){const{enabled,highestFullyRenderedScreenIndex,index}=this.__closure;return enabled&&highestFullyRenderedScreenIndex.get()>index;}" };
const __initData8 = { code: "function MainTabsChannelScreenStackTsx8(){const{translateX}=this.__closure;return translateX.get()>0;}" };
const __initData9 = { code: "function MainTabsChannelScreenStackTsx9(isVisibleBeneath,wasVisibleBeneath){const{highestFullyRenderedScreenIndex,index}=this.__closure;if(isVisibleBeneath===wasVisibleBeneath)return;if(isVisibleBeneath){if(highestFullyRenderedScreenIndex.get()>=index){highestFullyRenderedScreenIndex.set(index-1);}return;}if(highestFullyRenderedScreenIndex.get()<index){highestFullyRenderedScreenIndex.set(index);}}" };
const __initData10 = { code: "function MainTabsChannelScreenStackTsx10(){const{enabled,highestFullyRenderedScreenIndex,index}=this.__closure;return enabled&&highestFullyRenderedScreenIndex.get()>index;}" };
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsCompletelyCovered(index, highestFullyRenderedScreenIndex, translateX) {
  closure_0 = index;
  importDefault = highestFullyRenderedScreenIndex;
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "MainTabsChannelScreenStack" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const enabled = HideCoveredChannelsExperimentDefault.useConfig(first).enabled;
  const fn = function o() {
    return translateX.get() > 0;
  };
  fn.__closure = { translateX };
  fn.__workletHash = 3913618654716;
  fn.__initData = __initData5;
  const fn2 = function u(arg0, arg1) {
    if (arg0 !== arg1) {
      value = highestFullyRenderedScreenIndex.get();
      if (arg0) {
        if (value >= closure_0) {
          const result = highestFullyRenderedScreenIndex.set(closure_0 - 1);
        }
      } else if (value < closure_0) {
        const result1 = highestFullyRenderedScreenIndex.set(closure_0);
      }
    }
  };
  fn2.__closure = { highestFullyRenderedScreenIndex, index };
  fn2.__workletHash = 11138417682243;
  fn2.__initData = __initData6;
  const animatedReaction = ReanimatedRexport.useAnimatedReaction(fn, fn2);
  if (cResult[1] === highestFullyRenderedScreenIndex) {
    if (cResult[2] === index) {
      let tmp6 = cResult[3];
    }
    const unmountEffect = useMountEffect.useUnmountEffect(tmp6);
    const tmpResult3 = useMountEffect;
    class S {
      constructor() {
        tmp = enabled;
        if (enabled) {
          tmp2 = closure_1;
          tmp3 = closure_0;
          tmp = closure_1.get() > closure_0;
        }
        return tmp;
      }
    }
    const obj4 = { enabled, highestFullyRenderedScreenIndex, index };
    S.__closure = obj4;
    S.__workletHash = 12545989660782;
    S.__initData = __initData7;
    return ReanimatedRexport.useDerivedValue(S);
  }
  const fn3 = function h() {
    if (highestFullyRenderedScreenIndex.get() >= closure_0) {
      const result = highestFullyRenderedScreenIndex.set(tmp - 1);
    }
  };
  cResult[1] = highestFullyRenderedScreenIndex;
  cResult[2] = index;
  cResult[3] = fn3;
  tmp6 = fn3;
  const tmpResult = ReanimatedRexport;
}) : (function useIsCompletelyCovered(index, highestFullyRenderedScreenIndex, translateX) {
  closure_0 = index;
  const enabled = HideCoveredChannelsExperimentDefault.useConfig({ location: "MainTabsChannelScreenStack" }).enabled;
  const fn = function c() {
    return translateX.get() > 0;
  };
  fn.__closure = { translateX };
  fn.__workletHash = 5609946836721;
  fn.__initData = __initData8;
  const fn2 = function l(arg0, arg1) {
    if (arg0 !== arg1) {
      value = highestFullyRenderedScreenIndex.get();
      if (arg0) {
        if (value >= closure_0) {
          const result = highestFullyRenderedScreenIndex.set(closure_0 - 1);
        }
      } else if (value < closure_0) {
        const result1 = highestFullyRenderedScreenIndex.set(closure_0);
      }
    }
  };
  fn2.__closure = { highestFullyRenderedScreenIndex, index };
  fn2.__workletHash = 14278412688234;
  fn2.__initData = __initData9;
  const animatedReaction = ReanimatedRexport.useAnimatedReaction(fn, fn2);
  const unmountEffect = useMountEffect.useUnmountEffect(() => {
    if (highestFullyRenderedScreenIndex.get() >= closure_0) {
      const result = highestFullyRenderedScreenIndex.set(tmp - 1);
    }
  });
  const fn3 = function u() {
    let tmp = enabled;
    if (enabled) {
      tmp = highestFullyRenderedScreenIndex.get() > closure_0;
    }
    return tmp;
  };
  fn3.__closure = { enabled, highestFullyRenderedScreenIndex, index };
  fn3.__workletHash = 15762794544408;
  fn3.__initData = __initData10;
  return ReanimatedRexport.useDerivedValue(fn3);
});
ReactCompilerGating = fn(558);
let closure_30 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function FirstChannelScreen(guildId) {
  const cResult = guildId(showCreateThread[10]).c(39);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  showCreateThread = guildId.showCreateThread;
  const frame = guildId.frame;
  const index = guildId.index;
  ({ freeze, isDragging, translateX, containerWidth } = guildId);
  const isActive = guildId.isActive;
  ({ isNavigationTTIStackVisible, maxWidth, focusChatPressableComponent, transitionState } = guildId);
  const cleanup = guildId.cleanup;
  ({ parentFreezeValue, highestFullyRenderedScreenIndex } = guildId);
  let obj = guildId(showCreateThread[10]);
  const tmp4 = channelId(showCreateThread[15])();
  let width = containerWidth;
  if (containerWidth == null) {
    width = channelId(showCreateThread[17])().width;
  }
  const tmp5 = closure_15();
  const tmp6 = closure_29(index, highestFullyRenderedScreenIndex, translateX);
  const mainTabsChannelScreenStyles = guildId(showCreateThread[18]).useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, tmp6, parentFreezeValue);
  if (cResult[0] === cleanup) {
    if (cResult[1] === transitionState) {
      let tmp8 = cResult[2];
      let tmp9 = cResult[3];
    }
    const effect = index.useEffect(tmp8, tmp9);
    if (cResult[4] !== containerWidth) {
      let tmp13 = null;
      if (null != containerWidth) {
        const obj2 = { width: containerWidth };
        tmp13 = obj2;
      }
      cResult[4] = containerWidth;
      cResult[5] = tmp13;
      let tmp12 = tmp13;
    } else {
      tmp12 = cResult[5];
    }
    let onyxContainerStyles;
    if (tmp4 === ThemeTypes.ONYX) {
      if (!channelId(showCreateThread[16])().isChatBesideChannelList) {
        onyxContainerStyles = tmp5.onyxContainerStyles;
      }
    }
    if (cResult[6] === mainTabsChannelScreenStyles) {
      if (cResult[7] === tmp12) {
        if (cResult[8] === onyxContainerStyles) {
          let tmp16 = cResult[9];
        }
        let str = "box-only";
        if (isActive) {
          str = "auto";
        }
        if (cResult[10] === channelId) {
          if (cResult[11] === width) {
            if (cResult[12] === containerWidth) {
              if (cResult[13] === frame) {
                if (cResult[14] === guildId) {
                  if (cResult[15] === index) {
                    if (cResult[16] === isActive) {
                      if (cResult[17] === showCreateThread) {
                        let tmp19 = cResult[18];
                      }
                      if (cResult[19] === highestFullyRenderedScreenIndex) {
                        if (cResult[20] === index) {
                          if (cResult[21] === isNavigationTTIStackVisible) {
                            if (cResult[22] === maxWidth) {
                              if (cResult[23] === tmp19) {
                                if (cResult[24] === tmp18) {
                                  if (cResult[25] === translateX) {
                                    let tmp20 = cResult[26];
                                  }
                                  if (cResult[27] === tmp20) {
                                    if (cResult[28] === str) {
                                      if (cResult[29] === tmp17) {
                                        if (cResult[30] === str2) {
                                          let tmp24 = cResult[31];
                                        }
                                        if (cResult[32] === freeze) {
                                          if (cResult[33] === tmp24) {
                                            let tmp29 = cResult[34];
                                          }
                                          if (cResult[35] === focusChatPressableComponent) {
                                            if (cResult[36] === tmp29) {
                                              if (cResult[37] === tmp16) {
                                                let tmp32 = cResult[38];
                                              }
                                              return tmp32;
                                            }
                                          }
                                          const obj3 = { style: tmp16, children: null };
                                          const items = [tmp29, focusChatPressableComponent];
                                          obj3.children = items;
                                          class U {
                                            constructor(arg0) {
                                              obj = { value: width, children: null };
                                              obj1 = { guildId, channelId, isActive, isNavigationTTIVisible: guildId, showCreateThread, isNavigationScreen: null == containerWidth, frame, screenIndex: index };
                                              obj.children = jsx(closure_1(closure_2[21]), obj1);
                                              return jsx(closure_1(closure_2[20]).Provider, obj);
                                            }
                                          }
                                          cResult[35] = focusChatPressableComponent;
                                          cResult[36] = tmp29;
                                          cResult[37] = tmp16;
                                          cResult[38] = tmp34;
                                          tmp32 = tmp34;
                                        }
                                        const obj4 = { freeze, children: tmp24 };
                                        const tmp31 = closure_13(tmp(tmp2[22]).Freeze, obj4);
                                        cResult[32] = freeze;
                                        class U {
                                          constructor(arg0) {
                                            obj = { value: width, children: null };
                                            obj1 = { guildId, channelId, isActive, isNavigationTTIVisible: guildId, showCreateThread, isNavigationScreen: null == containerWidth, frame, screenIndex: index };
                                            obj.children = jsx(closure_1(closure_2[21]), obj1);
                                            return jsx(closure_1(closure_2[20]).Provider, obj);
                                          }
                                        }
                                        cResult[33] = tmp24;
                                        cResult[34] = tmp31;
                                        tmp29 = tmp31;
                                      }
                                    }
                                  }
                                  const obj5 = { collapsable: false, style: isActive.absoluteFill, pointerEvents: str, accessibilityElementsHidden: tmp17, importantForAccessibility: null, children: null };
                                  class U {
                                    constructor(arg0) {
                                      obj = { value: width, children: null };
                                      obj1 = { guildId, channelId, isActive, isNavigationTTIVisible: guildId, showCreateThread, isNavigationScreen: null == containerWidth, frame, screenIndex: index };
                                      obj.children = jsx(closure_1(closure_2[21]), obj1);
                                      return jsx(closure_1(closure_2[20]).Provider, obj);
                                    }
                                  }
                                  obj5.children = tmp20;
                                  const tmp28 = closure_13(transitionState, obj5);
                                  cResult[27] = tmp20;
                                  cResult[28] = str;
                                  cResult[29] = tmp17;
                                  cResult[30] = str2;
                                  cResult[31] = tmp28;
                                  tmp24 = tmp28;
                                }
                              }
                            }
                          }
                        }
                      }
                      const obj6 = { translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible: null, alwaysVisible: null, children: null };
                      class U {
                        constructor(arg0) {
                          obj = { value: width, children: null };
                          obj1 = { guildId, channelId, isActive, isNavigationTTIVisible: guildId, showCreateThread, isNavigationScreen: null == containerWidth, frame, screenIndex: index };
                          obj.children = jsx(closure_1(closure_2[21]), obj1);
                          return jsx(closure_1(closure_2[20]).Provider, obj);
                        }
                      }
                      obj6.alwaysVisible = tmp18;
                      obj6.children = tmp19;
                      const tmp23 = closure_13(closure_22, obj6);
                      cResult[19] = highestFullyRenderedScreenIndex;
                      cResult[20] = index;
                      cResult[21] = isNavigationTTIStackVisible;
                      cResult[22] = maxWidth;
                      cResult[23] = tmp19;
                      cResult[24] = tmp18;
                      cResult[25] = translateX;
                      cResult[26] = tmp23;
                      tmp20 = tmp23;
                    }
                  }
                }
              }
            }
          }
        }
        class U {
          constructor(arg0) {
            obj = { value: width, children: null };
            obj1 = { guildId, channelId, isActive, isNavigationTTIVisible: guildId, showCreateThread, isNavigationScreen: null == containerWidth, frame, screenIndex: index };
            obj.children = jsx(closure_1(closure_2[21]), obj1);
            return jsx(closure_1(closure_2[20]).Provider, obj);
          }
        }
        cResult[10] = channelId;
        cResult[11] = width;
        cResult[12] = containerWidth;
        cResult[13] = frame;
        cResult[14] = guildId;
        cResult[15] = index;
        cResult[16] = isActive;
        cResult[17] = showCreateThread;
        cResult[18] = U;
        tmp19 = U;
      }
    }
    const items1 = [, tmp12, onyxContainerStyles];
    cResult[6] = mainTabsChannelScreenStyles;
    cResult[7] = tmp12;
    cResult[8] = onyxContainerStyles;
    cResult[9] = items1;
    tmp16 = items1;
  }
  const fn = function s() {
    if (transitionState === native.TransitionStates.YEETED) {
      cleanup();
    }
  };
  const items2 = [cleanup, transitionState];
  cResult[0] = cleanup;
  cResult[1] = transitionState;
  cResult[2] = fn;
  cResult[3] = items2;
  tmp9 = items2;
  tmp8 = fn;
  const tmpResult = guildId(showCreateThread[18]);
}) : (function FirstChannelScreen(isActive) {
  ({ guildId: require, channelId: importDefault, showCreateThread: dependencyMap, frame: _slicedToArray, index } = isActive);
  ({ isDragging, translateX, containerWidth } = isActive);
  isActive = isActive.isActive;
  ({ maxWidth, transitionState } = isActive);
  const cleanup = isActive.cleanup;
  const highestFullyRenderedScreenIndex = isActive.highestFullyRenderedScreenIndex;
  ({ freeze, isNavigationTTIStackVisible, focusChatPressableComponent, parentFreezeValue } = isActive);
  const tmp2 = useThemeDefault();
  const width = useBaseAppContainerDimensionsDefault().width;
  const tmp3 = closure_15();
  const tmp4 = closure_29(index, highestFullyRenderedScreenIndex, translateX);
  const items = [cleanup, transitionState];
  const mainTabsChannelScreenStyles = useMainTabsChannelScreenStyles.useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, tmp4, parentFreezeValue);
  const effect = index.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      cleanup();
    }
  }, items);
  const items1 = [mainTabsChannelScreenStyles, , ];
  let tmp10 = null;
  if (null != containerWidth) {
    const obj2 = { width: containerWidth };
    tmp10 = obj2;
  }
  items1[1] = tmp10;
  let onyxContainerStyles;
  if (tmp2 === ThemeTypes.ONYX) {
    if (!useChatLayoutDefault().isChatBesideChannelList) {
      onyxContainerStyles = tmp3.onyxContainerStyles;
    }
  }
  const obj3 = { style: items1, children: null };
  items1[2] = onyxContainerStyles;
  const obj4 = { freeze, children: null };
  const obj5 = { collapsable: false, style: isActive.absoluteFill, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  let str = "box-only";
  if (isActive) {
    str = "auto";
  }
  obj5.pointerEvents = str;
  obj5.accessibilityElementsHidden = !isActive;
  obj5.importantForAccessibility = "no-hide-descendants";
  obj5.children = closure_13(closure_22, {
    translateX,
    maxWidth,
    highestFullyRenderedScreenIndex,
    index,
    isStackVisible: isNavigationTTIStackVisible,
    alwaysVisible: null != containerWidth,
    children(isNavigationTTIVisible) {
      let tmp5 = containerWidth;
      if (containerWidth == null) {
        tmp5 = width;
      }
      const obj = { value: tmp5, children: map1(StandaloneChannelScreenDefault, { guildId, channelId, isActive, isNavigationTTIVisible, showCreateThread, isNavigationScreen: null == containerWidth, frame, screenIndex: index }) };
      return map1(ChatViewWidthContextDefault.Provider, obj);
    }
  });
  obj4.children = closure_13(transitionState, obj5);
  const items2 = [closure_13(Suspender.Freeze, obj4), focusChatPressableComponent];
  obj3.children = items2;
  return closure_14(REAWorkaroundViewDefault, obj3);
}));
const __initData11 = { code: "function MainTabsChannelScreenStackTsx11(){const{translateX}=this.__closure;return translateX.get()===0;}" };
const __initData12 = { code: "function MainTabsChannelScreenStackTsx12(isFullyOpen,prev){const{index,mainTabsDisallowGesture}=this.__closure;if(isFullyOpen===prev){return;}if(index!==1){return;}mainTabsDisallowGesture.set(isFullyOpen);}" };
const __initData13 = { code: "function MainTabsChannelScreenStackTsx13(){const{translateX}=this.__closure;return translateX.get()===0;}" };
const __initData14 = { code: "function MainTabsChannelScreenStackTsx14(isFullyOpen,prev){const{index,mainTabsDisallowGesture}=this.__closure;if(isFullyOpen===prev)return;if(index!==1)return;mainTabsDisallowGesture.set(isFullyOpen);}" };
ReactCompilerGating = fn(558);
let closure_35 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelScreen(guildId) {
  const cResult = guildId(showCreateThread[10]).c(44);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  showCreateThread = guildId.showCreateThread;
  const transitionState = guildId.transitionState;
  const cleanup = guildId.cleanup;
  const isActive = guildId.isActive;
  ({ isNavigationTTIStackVisible, freeze, parentFreezeValue, index } = guildId);
  const highestFullyRenderedScreenIndex = guildId.highestFullyRenderedScreenIndex;
  const obj = guildId(showCreateThread[10]);
  const tmp5 = channelId(showCreateThread[15])();
  const tmp6 = closure_15();
  const navigation = guildId(showCreateThread[24]).useNavigation();
  cleanup.useRef(false);
  if (cResult[0] === cleanup) {
    if (cResult[1] === navigation) {
      let tmp8 = cResult[2];
    }
    const tmp9 = transitionState !== tmp(tmp2[19]).TransitionStates.YEETED;
    if (cResult[3] === tmp8) {
      if (cResult[4] === tmp9) {
        let tmp10 = cResult[5];
      }
      const tmp11 = tmp4(tmp2[26])(tmp10);
      ({ gesture, panelGestureContext, isDragging, translateX } = tmp11);
      ({ movePanel, maxWidth } = tmp11);
      const disallowGesture = obj3.useContext(tmp4(tmp2[27])).disallowGesture;
      const tmp13 = closure_29(index, highestFullyRenderedScreenIndex, translateX);
      class X {
        constructor() {
          return 0 === translateX.get();
        }
      }
      const obj4 = { translateX };
      X.__closure = obj4;
      X.__workletHash = 17200684995434;
      X.__initData = __initData11;
      class N {
        constructor(arg0, arg1) {
          tmp = guildId !== arg1;
          if (tmp) {
            tmp2 = index;
            num = 1;
            tmp = 1 === index;
          }
          if (tmp) {
            tmp3 = disallowGesture;
            result = disallowGesture.set(guildId);
          }
          return;
        }
      }
      const obj5 = { index, mainTabsDisallowGesture: disallowGesture };
      N.__closure = obj5;
      N.__workletHash = 109995460179;
      N.__initData = __initData12;
      const animatedReaction = tmp(tmp2[11]).useAnimatedReaction(X, N);
      if (cResult[6] === cleanup) {
        if (cResult[7] === movePanel) {
          let tmp17 = cResult[8];
        }
        let current = tmp17;
        ThemeTypes = obj3.useRef(tmp17);
        if (cResult[9] !== tmp17) {
          const fn2 = function j() {
            closure_12.current = current;
          };
          cResult[9] = tmp17;
          cResult[10] = fn2;
          let tmp19 = fn2;
        } else {
          tmp19 = cResult[10];
        }
        const effect = obj3.useEffect(tmp19);
        if (cResult[11] !== transitionState) {
          const fn3 = function q() {
            current = ref2.current;
            const movePanel = current.movePanel;
            if (transitionState !== native.TransitionStates.MOUNTED) {
              if (transitionState !== native.TransitionStates.ENTERED) {
                if (ref.current) {
                  current.cleanup();
                } else {
                  tmp5.current = true;
                  movePanel(false, false, 0, true);
                }
              }
            }
            movePanel(true, false, 0, false);
          };
          const items = [transitionState];
          cResult[11] = transitionState;
          cResult[12] = fn3;
          cResult[13] = items;
          let tmp22 = items;
          let tmp21 = fn3;
        } else {
          tmp21 = cResult[12];
          tmp22 = cResult[13];
        }
        const effect1 = obj3.useEffect(tmp21, tmp22);
        class X {
          constructor() {
            return 0 === translateX.get();
          }
        }
        let onyxContainerStyles;
        if (tmp5 === ThemeTypes.ONYX) {
          if (!channelId(showCreateThread[16])().isChatBesideChannelList) {
            onyxContainerStyles = tmp6.onyxContainerStyles;
          }
        }
        if (cResult[14] === tmp31) {
          if (cResult[15] === onyxContainerStyles) {
            let tmp34 = cResult[16];
          }
          if (cResult[17] === channelId) {
            if (cResult[18] === guildId) {
              if (cResult[19] === index) {
                if (cResult[20] === isActive) {
                  if (cResult[21] === showCreateThread) {
                    let tmp36 = cResult[22];
                  }
                  if (cResult[23] === highestFullyRenderedScreenIndex) {
                    if (cResult[24] === index) {
                      if (cResult[25] === isNavigationTTIStackVisible) {
                        if (cResult[26] === maxWidth) {
                          if (cResult[27] === tmp36) {
                            if (cResult[28] === translateX) {
                              let tmp37 = cResult[29];
                            }
                            if (cResult[30] === freeze) {
                              if (cResult[31] === tmp37) {
                                let tmp41 = cResult[32];
                              }
                              if (cResult[33] === tmp35) {
                                if (cResult[34] === str) {
                                  if (cResult[35] === tmp41) {
                                    if (cResult[36] === tmp34) {
                                      let tmp44 = cResult[37];
                                    }
                                    if (cResult[38] === panelGestureContext) {
                                      if (cResult[39] === tmp44) {
                                        let tmp47 = cResult[40];
                                      }
                                      if (cResult[41] === gesture) {
                                        if (cResult[42] === tmp47) {
                                          let tmp50 = cResult[43];
                                        }
                                        return tmp50;
                                      }
                                      const obj6 = { gesture, children: tmp47 };
                                      const tmp52 = closure_13(tmp(tmp2[28]).GestureDetector, obj6);
                                      cResult[41] = gesture;
                                      cResult[42] = tmp47;
                                      cResult[43] = tmp52;
                                      tmp50 = tmp52;
                                    }
                                    const obj7 = { value: panelGestureContext, children: tmp44 };
                                    const tmp49 = closure_13(tmp(tmp2[27]).MainTabsChannelScreenStackContext.Provider, obj7);
                                    cResult[38] = panelGestureContext;
                                    cResult[39] = tmp44;
                                    cResult[40] = tmp49;
                                    tmp47 = tmp49;
                                  }
                                }
                              }
                              const obj8 = { style: tmp34, accessibilityElementsHidden: tmp35, importantForAccessibility: str, children: tmp41 };
                              const tmp46 = closure_13(tmp4(tmp2[23]), obj8);
                              cResult[33] = tmp35;
                              cResult[34] = str;
                              cResult[35] = tmp41;
                              class X {
                                constructor() {
                                  return 0 === translateX.get();
                                }
                              }
                              cResult[36] = tmp34;
                              cResult[37] = tmp46;
                              tmp44 = tmp46;
                            }
                            const obj9 = { freeze, children: tmp37 };
                            const tmp43 = closure_13(tmp(tmp2[22]).Freeze, obj9);
                            cResult[30] = freeze;
                            cResult[31] = tmp37;
                            cResult[32] = tmp43;
                            tmp41 = tmp43;
                          }
                        }
                      }
                    }
                  }
                  const obj10 = { translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible: isNavigationTTIStackVisible, children: tmp36 };
                  const tmp40 = closure_13(closure_22, obj10);
                  cResult[23] = highestFullyRenderedScreenIndex;
                  class X {
                    constructor() {
                      return 0 === translateX.get();
                    }
                  }
                  cResult[25] = isNavigationTTIStackVisible;
                  cResult[26] = maxWidth;
                  cResult[27] = tmp36;
                  class N {
                    constructor(arg0, arg1) {
                      tmp = guildId !== arg1;
                      if (tmp) {
                        tmp2 = index;
                        num = 1;
                        tmp = 1 === index;
                      }
                      if (tmp) {
                        tmp3 = disallowGesture;
                        result = disallowGesture.set(guildId);
                      }
                      return;
                    }
                  }
                  cResult[29] = tmp40;
                  tmp37 = tmp40;
                }
              }
            }
          }
          function ie(isNavigationTTIVisible) {
            return map1(StandaloneChannelScreenDefault, { guildId, channelId, isActive, isNavigationTTIVisible, showCreateThread, isNavigationScreen: true, frame: null, screenIndex: index });
          }
          cResult[17] = channelId;
          cResult[18] = guildId;
          cResult[19] = index;
          cResult[20] = isActive;
          class X {
            constructor() {
              return 0 === translateX.get();
            }
          }
          cResult[21] = showCreateThread;
          cResult[22] = ie;
          tmp36 = ie;
        }
        const items1 = [tmp31, onyxContainerStyles];
        class N {
          constructor(arg0, arg1) {
            tmp = guildId !== arg1;
            if (tmp) {
              tmp2 = index;
              num = 1;
              tmp = 1 === index;
            }
            if (tmp) {
              tmp3 = disallowGesture;
              result = disallowGesture.set(guildId);
            }
            return;
          }
        }
        cResult[14] = tmp31;
        cResult[15] = onyxContainerStyles;
        cResult[16] = items1;
        tmp34 = items1;
        const tmpResult2 = tmp(tmp2[18]);
      }
      const obj11 = { cleanup, movePanel };
      cResult[6] = cleanup;
      cResult[7] = movePanel;
      cResult[8] = obj11;
      tmp17 = obj11;
      const tmpResult = tmp(tmp2[11]);
    }
    const obj12 = { canDrag: tmp9, onVisibilityChange: tmp8, onDragStart: tmp(tmp2[25]).dismissKeyboard, startShown: false };
    cResult[3] = tmp8;
    cResult[4] = tmp9;
    cResult[5] = obj12;
    tmp10 = obj12;
  }
  const fn = function s(arg0) {
    if (!arg0) {
      if (ref.current) {
        cleanup();
      } else {
        tmp.current = true;
        navigation.goBack();
      }
    }
  };
  cResult[0] = cleanup;
  cResult[1] = navigation;
  cResult[2] = fn;
  tmp8 = fn;
  const obj2 = guildId(showCreateThread[24]);
}) : (function ChannelScreen(cleanup) {
  ({ guildId: require, channelId: importDefault, showCreateThread: dependencyMap, transitionState } = cleanup);
  cleanup = cleanup.cleanup;
  const isActive = cleanup.isActive;
  const index = cleanup.index;
  const highestFullyRenderedScreenIndex = cleanup.highestFullyRenderedScreenIndex;
  translateX = undefined;
  ({ isNavigationTTIStackVisible, freeze, parentFreezeValue } = cleanup);
  const tmp2 = useThemeDefault();
  const tmp3 = closure_15();
  const navigation = Link.useNavigation();
  cleanup.useRef(false);
  const items = [cleanup, navigation];
  const callback = cleanup.useCallback((arg0) => {
    if (!arg0) {
      if (ref.current) {
        cleanup();
      } else {
        tmp.current = true;
        navigation.goBack();
      }
    }
  }, items);
  const obj2 = { canDrag: null, onVisibilityChange: null, onDragStart: null, startShown: false };
  obj2.canDrag = transitionState !== native.TransitionStates.YEETED;
  obj2.onVisibilityChange = callback;
  obj2.onDragStart = ChatInputUtils.dismissKeyboard;
  const tmp7Result = useMainTabsPanelsGestureDefault(obj2);
  ({ isDragging, translateX } = tmp7Result);
  const maxWidth = tmp7Result.maxWidth;
  ({ gesture, panelGestureContext, movePanel } = tmp7Result);
  const disallowGesture = cleanup.useContext(MainTabsNavigatorPanelContextDefault).disallowGesture;
  const tmp9 = closure_29(index, highestFullyRenderedScreenIndex, translateX);
  const fn = function v() {
    return 0 === translateX.get();
  };
  fn.__closure = { translateX };
  fn.__workletHash = 279822179624;
  fn.__initData = __initData13;
  const fn2 = function f(arg0, arg1) {
    let tmp = arg0 !== arg1;
    if (tmp) {
      tmp = 1 === index;
    }
    if (tmp) {
      const result = disallowGesture.set(arg0);
    }
  };
  fn2.__closure = { index, mainTabsDisallowGesture: disallowGesture };
  fn2.__workletHash = 2043595505301;
  fn2.__initData = __initData14;
  const animatedReaction = ReanimatedRexport.useAnimatedReaction(fn, fn2);
  const obj4 = { cleanup, movePanel };
  ThemeTypes = cleanup.useRef(obj4);
  const effect = cleanup.useEffect(() => {
    closure_12.current = obj4;
  });
  const items1 = [transitionState];
  const effect1 = cleanup.useEffect(() => {
    const current = ref2.current;
    const movePanel = current.movePanel;
    if (transitionState !== native.TransitionStates.MOUNTED) {
      if (transitionState !== native.TransitionStates.ENTERED) {
        if (ref.current) {
          current.cleanup();
        } else {
          tmp5.current = true;
          movePanel(false, false, 0, true);
        }
      }
    }
    movePanel(true, false, 0, false);
  }, items1);
  const mainTabsChannelScreenStyles = useMainTabsChannelScreenStyles.useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, tmp9, parentFreezeValue);
  const obj6 = { gesture, children: null };
  const obj7 = { value: panelGestureContext, children: null };
  const items2 = [mainTabsChannelScreenStyles, ];
  let onyxContainerStyles;
  if (tmp2 === ThemeTypes.ONYX) {
    if (!useChatLayoutDefault().isChatBesideChannelList) {
      onyxContainerStyles = tmp3.onyxContainerStyles;
    }
  }
  const obj8 = { style: items2, accessibilityElementsHidden: !isActive, importantForAccessibility: "no-hide-descendants", children: null };
  items2[1] = onyxContainerStyles;
  const obj9 = {
    freeze,
    children: closure_13(closure_22, {
      translateX,
      maxWidth,
      highestFullyRenderedScreenIndex,
      index,
      isStackVisible: isNavigationTTIStackVisible,
      children(isNavigationTTIVisible) {
        return map1(StandaloneChannelScreenDefault, { guildId, channelId, isActive, isNavigationTTIVisible, showCreateThread, isNavigationScreen: true, frame: null, screenIndex: index });
      }
    })
  };
  obj8.children = closure_13(Suspender.Freeze, obj9);
  obj7.children = closure_13(REAWorkaroundViewDefault, obj8);
  obj6.children = closure_13(MainTabsNavigatorPanelContext.MainTabsChannelScreenStackContext.Provider, obj7);
  return closure_13(LegacyBaseButton.GestureDetector, obj6);
}));
const __initData15 = { code: "function MainTabsChannelScreenStackTsx15(){const{translateX,maxWidth}=this.__closure;return translateX.get()===maxWidth;}" };
const __initData16 = { code: "function MainTabsChannelScreenStackTsx16(value,prev){const{runOnJS,setIsHidden}=this.__closure;if(value===prev){return;}runOnJS(setIsHidden)(value);}" };
const __initData17 = { code: "function MainTabsChannelScreenStackTsx17(){const{translateX,maxWidth}=this.__closure;return translateX.get()===maxWidth;}" };
const __initData18 = { code: "function MainTabsChannelScreenStackTsx18(value,prev){const{runOnJS,setIsHidden}=this.__closure;if(value===prev)return;runOnJS(setIsHidden)(value);}" };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MainTabsChannelScreenStack(screens) {
  const cResult = screens(screenStackVisible[10]).c(55);
  screens = screens.screens;
  const screenStackActive = screens.screenStackActive;
  screenStackVisible = screens.screenStackVisible;
  const navigationTTIStackVisible = screens.navigationTTIStackVisible;
  const translateX = screens.translateX;
  const isDragging = screens.isDragging;
  const maxWidth = screens.maxWidth;
  const highestFullyRenderedScreenIndex = screens.highestFullyRenderedScreenIndex;
  ({ shouldFreeze, focusChatPressableComponent } = screens);
  const firstScreenWidth = screens.firstScreenWidth;
  const firstScreenFrame = screens.firstScreenFrame;
  screenStackActive(screenStackVisible[29])();
  if (cResult[0] !== translateX) {
    value = translateX.get();
    cResult[0] = translateX;
    cResult[1] = value;
    let tmp6 = value;
  } else {
    tmp6 = cResult[1];
  }
  let obj = screens(screenStackVisible[10]);
  const tmp4 = screenStackActive;
  [tmp9, tmp10] = navigationTTIStackVisible(translateX.useState(tmp6 === maxWidth), 2);
  closure_11 = tmp10;
  const tmp8 = navigationTTIStackVisible(translateX.useState(tmp6 === maxWidth), 2);
  class N {
    constructor() {
      return translateX.get() === maxWidth;
    }
  }
  N.__closure = { translateX, maxWidth };
  N.__workletHash = 13892906836978;
  N.__initData = __initData15;
  class D {
    constructor(arg0, arg1) {
      if (screens !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[11]);
        tmp3 = closure_11;
        tmp4 = obj.runOnJS(closure_11)(screens);
      }
      return;
    }
  }
  const tmpResult = screens(screenStackVisible[11]);
  D.__closure = { runOnJS: screens(screenStackVisible[11]).runOnJS, setIsHidden: tmp10 };
  D.__workletHash = 13169088086524;
  D.__initData = __initData16;
  const animatedReaction = tmpResult.useAnimatedReaction(N, D);
  if (cResult[2] !== screens) {
    const atResult = screens.at(-1);
    cResult[2] = screens;
    cResult[3] = atResult;
    let tmp12 = atResult;
  } else {
    tmp12 = cResult[3];
  }
  let type;
  if (tmp12 != null) {
    type = tmp12.type;
  }
  let channelId = null;
  if (type === screens(screenStackVisible[30]).ChannelScreenType.DEFAULT) {
    channelId = tmp12.channelId;
  }
  if (cResult[4] === channelId) {
    if (cResult[5] === screenStackVisible) {
      let tmp16 = cResult[6];
      let tmp17 = cResult[7];
    }
    const effect = obj2.useEffect(tmp16, tmp17);
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class J {
        constructor() {
          return /* F157268 */ function() { ... };
        }
      }
      const items = [];
      cResult[8] = J;
      cResult[9] = items;
      let tmp21 = items;
    } else {
      class J {
        constructor() {
          return /* F157268 */ function() { ... };
        }
      }
      tmp21 = cResult[9];
    }
    const effect1 = obj2.useEffect(J, tmp21);
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class Y {
        constructor() {
          MediaPlayerManager = isDragging.MediaPlayerManager;
          if (MediaPlayerManager != null) {
            pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
            if (pauseAllMediaPlayers != null) {
              pauseAllMediaPlayersResult = pauseAllMediaPlayers();
            }
          }
          return;
        }
      }
      cResult[10] = Y;
    } else {
      class Y {
        constructor() {
          MediaPlayerManager = isDragging.MediaPlayerManager;
          if (MediaPlayerManager != null) {
            pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
            if (pauseAllMediaPlayers != null) {
              pauseAllMediaPlayersResult = pauseAllMediaPlayers();
            }
          }
          return;
        }
      }
    }
    if (cResult[11] !== channelId) {
      class Y {
        constructor() {
          MediaPlayerManager = isDragging.MediaPlayerManager;
          if (MediaPlayerManager != null) {
            pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
            if (pauseAllMediaPlayers != null) {
              pauseAllMediaPlayersResult = pauseAllMediaPlayers();
            }
          }
          return;
        }
      }
      tmp25[0] = channelId;
      cResult[11] = channelId;
      cResult[12] = tmp25;
    } else {
      class Y {
        constructor() {
          MediaPlayerManager = isDragging.MediaPlayerManager;
          if (MediaPlayerManager != null) {
            pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
            if (pauseAllMediaPlayers != null) {
              pauseAllMediaPlayersResult = pauseAllMediaPlayers();
            }
          }
          return;
        }
      }
    }
    const effect2 = obj2.useEffect(Y, tmp25);
    const tmp27 = tmp4(tmp2[31])();
    closure_13 = tmp27;
    const first = screens[0];
    if (cResult[13] === tmp27) {
      class Y {
        constructor() {
          MediaPlayerManager = isDragging.MediaPlayerManager;
          if (MediaPlayerManager != null) {
            pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
            if (pauseAllMediaPlayers != null) {
              pauseAllMediaPlayersResult = pauseAllMediaPlayers();
            }
          }
          return;
        }
      }
    }
    let tmp30 = shouldFreeze;
    if (shouldFreeze) {
      class Y {
        constructor() {
          MediaPlayerManager = isDragging.MediaPlayerManager;
          if (MediaPlayerManager != null) {
            pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
            if (pauseAllMediaPlayers != null) {
              pauseAllMediaPlayersResult = pauseAllMediaPlayers();
            }
          }
          return;
        }
      }
    }
    if (tmp30) {
      class Y {
        constructor() {
          MediaPlayerManager = isDragging.MediaPlayerManager;
          if (MediaPlayerManager != null) {
            pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
            if (pauseAllMediaPlayers != null) {
              pauseAllMediaPlayersResult = pauseAllMediaPlayers();
            }
          }
          return;
        }
      }
      if (!tmp31) {
        class Y {
          constructor() {
            MediaPlayerManager = isDragging.MediaPlayerManager;
            if (MediaPlayerManager != null) {
              pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
              if (pauseAllMediaPlayers != null) {
                pauseAllMediaPlayersResult = pauseAllMediaPlayers();
              }
            }
            return;
          }
        }
        tmp31 = tmp32 !== tmp(tmp2[30]).ChannelScreenType.DEFAULT;
      }
      tmp30 = tmp31;
    }
    if (tmp30) {
      class Y {
        constructor() {
          MediaPlayerManager = isDragging.MediaPlayerManager;
          if (MediaPlayerManager != null) {
            pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
            if (pauseAllMediaPlayers != null) {
              pauseAllMediaPlayersResult = pauseAllMediaPlayers();
            }
          }
          return;
        }
      }
    }
    cResult[13] = tmp27;
    cResult[14] = first;
    cResult[15] = tmp9;
    cResult[16] = screens;
    cResult[17] = shouldFreeze;
    cResult[18] = tmp30;
  }
  class P {
    constructor() {
      tmp2 = null;
      tmp = setVisibleChannelScreen;
      if (screenStackVisible) {
        tmp2 = channelId;
      }
      tmpResult = tmp(tmp2);
      return;
    }
  }
  const items1 = [screenStackVisible, channelId];
  cResult[4] = channelId;
  cResult[5] = screenStackVisible;
  cResult[6] = P;
  cResult[7] = items1;
  tmp17 = items1;
  tmp16 = P;
  let obj3 = { runOnJS: screens(screenStackVisible[11]).runOnJS, setIsHidden: tmp10 };
}) : (function MainTabsChannelScreenStack(screens) {
  screens = screens.screens;
  const screenStackActive = screens.screenStackActive;
  const screenStackVisible = screens.screenStackVisible;
  const navigationTTIStackVisible = screens.navigationTTIStackVisible;
  const translateX = screens.translateX;
  const isDragging = screens.isDragging;
  const maxWidth = screens.maxWidth;
  const highestFullyRenderedScreenIndex = screens.highestFullyRenderedScreenIndex;
  ({ shouldFreeze, focusChatPressableComponent } = screens);
  const firstScreenWidth = screens.firstScreenWidth;
  const firstScreenFrame = screens.firstScreenFrame;
  let memo;
  closure_13 = undefined;
  let first;
  let sharedValue;
  let tmp3 = navigationTTIStackVisible(translateX.useState(translateX.get() === maxWidth), 2);
  closure_11 = tmp4;
  let tmp2 = screenStackActive(screenStackVisible[29])();
  const fn = function w() {
    return translateX.get() === maxWidth;
  };
  fn.__closure = { translateX, maxWidth };
  fn.__workletHash = 14568525032880;
  fn.__initData = __initData17;
  class E {
    constructor(arg0, arg1) {
      if (screens !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[11]);
        tmp3 = closure_11;
        tmp4 = obj.runOnJS(closure_11)(screens);
      }
      return;
    }
  }
  let obj2 = screens(screenStackVisible[11]);
  E.__closure = { runOnJS: screens(screenStackVisible[11]).runOnJS, setIsHidden: tmp3[1] };
  E.__workletHash = 7029914705044;
  E.__initData = __initData18;
  const animatedReaction = obj2.useAnimatedReaction(fn, E);
  const items = [screens];
  memo = translateX.useMemo(() => {
    const atResult = screens.at(-1);
    let type;
    if (atResult != null) {
      type = atResult.type;
    }
    let channelId = null;
    if (type === useChannelScreensFromNavigation.ChannelScreenType.DEFAULT) {
      channelId = atResult.channelId;
    }
    return channelId;
  }, items);
  const items1 = [screenStackVisible, memo];
  const effect = translateX.useEffect(() => {
    let tmp2 = null;
    if (screenStackVisible) {
      tmp2 = memo;
    }
    setVisibleChannelScreen(tmp2);
  }, items1);
  const effect1 = translateX.useEffect(() => () => focusChatPressableComponent(null), []);
  const items2 = [memo];
  const effect2 = translateX.useEffect(() => {
    const MediaPlayerManager = isDragging.MediaPlayerManager;
    if (MediaPlayerManager != null) {
      const pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
      if (pauseAllMediaPlayers != null) {
        pauseAllMediaPlayers();
      }
    }
  }, items2);
  const tmp11 = screenStackActive(screenStackVisible[31])();
  closure_13 = tmp11;
  first = screens[0];
  if (shouldFreeze) {
    shouldFreeze = tmp3[0];
  }
  if (shouldFreeze) {
    let tmp14 = null == first;
    if (!tmp14) {
      tmp14 = first.type !== tmp5(tmp[30]).ChannelScreenType.DEFAULT;
    }
    shouldFreeze = tmp14;
  }
  if (shouldFreeze) {
    shouldFreeze = !screens.some((channelId) => closure_13.includes(channelId.channelId));
  }
  let obj3 = { runOnJS: screens(screenStackVisible[11]).runOnJS, setIsHidden: tmp3[1] };
  sharedValue = screens(screenStackVisible[11]).useSharedValue(0);
  const items3 = [shouldFreeze, sharedValue];
  const effect3 = obj.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = sharedValue.set(sharedValue.get() + 1);
    }, 10);
    return () => clearTimeout(closure_0);
  }, items3);
  const items4 = [screens.length, tmp11, focusChatPressableComponent, isDragging, translateX, firstScreenWidth, firstScreenFrame, maxWidth, sharedValue, screenStackActive, navigationTTIStackVisible, highestFullyRenderedScreenIndex];
  let channelId;
  const callback = obj.useCallback((arg0, channelId, transitionState, cleanup) => {
    const NumberResult = Number(arg0);
    if (0 === NumberResult) {
      const obj = { guildId: null, channelId: null, showCreateThread: null, focusChatPressableComponent: null, index: null, transitionState: null, cleanup: null, isDragging: null, translateX: null, isActive: null, isNavigationTTIStackVisible: null, freeze: null, containerWidth: null, frame: null, parentFreezeValue: null, maxWidth: null, highestFullyRenderedScreenIndex: null };
      ({ guildId: obj.guildId, channelId: obj.channelId, showCreateThread: showCreateThread2 } = channelId);
      if (showCreateThread2 == null) {
        showCreateThread2 = false;
      }
      obj.showCreateThread = showCreateThread2;
      obj.focusChatPressableComponent = focusChatPressableComponent;
      obj.index = NumberResult;
      obj.transitionState = transitionState;
      obj.cleanup = cleanup;
      obj.isDragging = isDragging;
      obj.translateX = translateX;
      let tmp15 = screenStackActive;
      if (screenStackActive) {
        tmp15 = NumberResult === screens.length - 1;
      }
      obj.isActive = tmp15;
      obj.isNavigationTTIStackVisible = navigationTTIStackVisible;
      let tmp19 = NumberResult < screens.length - 2;
      if (tmp19) {
        tmp19 = !closure_13.includes(channelId.channelId);
      }
      obj.freeze = tmp19;
      obj.containerWidth = firstScreenWidth;
      obj.frame = firstScreenFrame;
      obj.parentFreezeValue = sharedValue;
      obj.maxWidth = maxWidth;
      obj.highestFullyRenderedScreenIndex = highestFullyRenderedScreenIndex;
      let tmp26Result = map1(closure_30, obj, arg0);
    } else {
      const obj3 = { guildId: null, channelId: null, showCreateThread: null, index: null, transitionState: null, parentFreezeValue: null, cleanup: null, isActive: null, isNavigationTTIStackVisible: null, freeze: null, highestFullyRenderedScreenIndex: null };
      ({ guildId: obj2.guildId, channelId: obj2.channelId, showCreateThread } = channelId);
      if (showCreateThread == null) {
        showCreateThread = false;
      }
      obj3.showCreateThread = showCreateThread;
      obj3.index = NumberResult;
      obj3.transitionState = transitionState;
      obj3.parentFreezeValue = sharedValue;
      obj3.cleanup = cleanup;
      obj3.isActive = NumberResult === screens.length - 1;
      obj3.isNavigationTTIStackVisible = navigationTTIStackVisible;
      let tmp5 = NumberResult < screens.length - 2;
      if (tmp5) {
        tmp5 = !closure_13.includes(channelId.channelId);
      }
      obj3.freeze = tmp5;
      obj3.highestFullyRenderedScreenIndex = highestFullyRenderedScreenIndex;
      tmp26Result = map1(closure_35, obj3, arg0);
    }
    return tmp26Result;
  }, items4);
  if (first != null) {
    channelId = first.channelId;
  }
  if (channelId == null) {
    channelId = null;
  }
  translateX.useRef(channelId);
  translateX.useRef(null);
  let type;
  if (first != null) {
    type = first.type;
  }
  const items5 = [type, ];
  let channelId1;
  if (first != null) {
    channelId1 = first.channelId;
  }
  items5[1] = channelId1;
  const effect4 = obj.useEffect(() => {
    let type;
    if (first != null) {
      type = first.type;
    }
    let tmp3 = null != type;
    if (tmp3) {
      tmp3 = ref2.current !== first.type;
    }
    if (tmp3) {
      ref2.current = first.type;
      if (first.channelId === ref.current) {
        let isChatLockedOpen = first.type !== useChannelScreensFromNavigation.ChannelScreenType.DEFAULT;
        if (!isChatLockedOpen) {
          isChatLockedOpen = useChatLayout.getChatLayout().isChatLockedOpen;
          const tmp7Result = useChatLayout;
        }
        if (!isChatLockedOpen) {
          const obj = { type: "TRY_ACK", location: null, channelId: null };
          const obj3 = { section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH, objectType: constants.ACK_AUTOMATIC };
          obj.location = obj3;
          obj.channelId = first.channelId;
          DispatcherDefault.dispatch(obj);
        }
      } else {
        tmp6.current = first.channelId;
      }
    }
  }, items5);
  const tmp5Result = screens(screenStackVisible[11]);
  screens(screenStackVisible[33]).freezeScreenIndex(shouldFreeze, 0);
  if (!shouldFreeze) {
    const obj4 = { freeze: shouldFreeze, children: null };
    const obj5 = { collapsable: false, style: maxWidth.absoluteFill, pointerEvents: "box-none", accessibilityElementsHidden: !screenStackActive, importantForAccessibility: "no-hide-descendants", children: null };
    const obj6 = { gradient: tmp2, children: null };
    const obj7 = { items: screens, renderItem: callback, getItemKey: getKey };
    obj6.children = closure_13(tmp5(tmp[19]).TransitionGroup, obj7);
    obj5.children = closure_13(tmp5(tmp[19]).ThemeContextProvider, obj6);
    obj4.children = closure_13(highestFullyRenderedScreenIndex, obj5);
    let tmp25Result = tmp25(tmp5(tmp[22]).Freeze, obj4);
    const tmp28 = !screenStackActive;
  } else {
    let showCreateThread;
    if (first != null) {
      showCreateThread = first.showCreateThread;
    }
    tmp25Result = null;
  }
  return tmp25Result;
}));