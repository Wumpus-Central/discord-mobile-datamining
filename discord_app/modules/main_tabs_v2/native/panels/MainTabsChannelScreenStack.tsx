// discord_app/modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx
import c from "../../../../../_runtime/00576_c.js";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import Link from "../../../../../_runtime/01504_Link.js";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import REAWorkaroundViewDefault from "../../../reanimated/native/REAWorkaroundView.tsx";
import useChatLayout from "../../../chat/native/useChatLayout.tsx";
import ChatInputUtils from "../../../../utils/native/ChatInputUtils.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Suspender from "../../../../../_runtime/05330_Suspender.js";
import useMountEffect from "../../../../hooks/useMountEffect.tsx";
import LegacyBaseButton from "../../../../../_runtime/06334_LegacyBaseButton.js";
import useChannelScreensFromNavigation from "useChannelScreensFromNavigation.tsx";
import useMainTabsPanelsGestureDefault from "useMainTabsPanelsGesture.tsx";
import MainTabsNavigatorPanelContext from "MainTabsNavigatorPanelContext.tsx";
import navigationTTIEnabled from "../../../tti_analytics/native/navigation/navigationTTIEnabled.tsx";
import HideCoveredChannelsExperimentDefault from "../HideCoveredChannelsExperiment.tsx";
import useMainTabsChannelScreenStyles from "useMainTabsChannelScreenStyles.tsx";
import StandaloneChannelScreenDefault from "../channel/StandaloneChannelScreen.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const useChatLayoutDefault = useChatLayout;
const MainTabsNavigatorPanelContextDefault = MainTabsNavigatorPanelContext;

require = fn;
function getKey(index) {
  return String(index.index);
}
get_ActivityIndicator = fn(17);
({ NativeModules: hasOwnProperty, StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const ONYX_BORDER_WIDTH = fn(9298).ONYX_BORDER_WIDTH;
const Constants = fn(1085);
({ AnalyticsObjectTypes: closure_8, AnalyticsObjects: closure_9, AnalyticsSections: c10 } = Constants);
let ThemeTypes = fn(1096).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5092);
let closure_14 = createStyles.createStyles({
  onyxContainerStyles: { marginTop: -ONYX_BORDER_WIDTH, marginLeft: -ONYX_BORDER_WIDTH },
});
const __initData = {
  code: "function MainTabsChannelScreenStackTsx1(){const{isStackVisible,highestFullyRenderedScreenIndex,index,alwaysVisible,translateX,maxWidth}=this.__closure;return isStackVisible&&highestFullyRenderedScreenIndex.get()<=index&&(alwaysVisible||translateX.get()<maxWidth);}",
};
const __initData2 = {
  code: "function MainTabsChannelScreenStackTsx2(visible,wasVisible){const{runOnJS,setIsVisible}=this.__closure;if(visible===wasVisible){return;}runOnJS(setIsVisible)(visible);}",
};
const __initData3 = {
  code: "function MainTabsChannelScreenStackTsx3(){const{isStackVisible,highestFullyRenderedScreenIndex,index,alwaysVisible,translateX,maxWidth}=this.__closure;return isStackVisible&&highestFullyRenderedScreenIndex.get()<=index&&(alwaysVisible||translateX.get()<maxWidth);}",
};
const __initData4 = {
  code: "function MainTabsChannelScreenStackTsx4(visible,wasVisible){const{runOnJS,setIsVisible}=this.__closure;if(visible===wasVisible)return;runOnJS(setIsVisible)(visible);}",
};
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useChannelScreenNavigationTTIVisibility(translateX) {
      const cResult = translateX(highestFullyRenderedScreenIndex[9]).c(7);
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
                const fn2 = function y() {
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
                const obj2 = {
                  isStackVisible,
                  highestFullyRenderedScreenIndex,
                  index,
                  alwaysVisible: tmp4,
                  translateX,
                  maxWidth,
                };
                fn2.__closure = obj2;
                fn2.__workletHash = 15384871148575;
                fn2.__initData = __initData;
                class T {
                  constructor(arg0, arg1) {
                    if (translateX !== arg1) {
                      tmp = closure_0;
                      tmp2 = closure_2;
                      obj = closure_0(closure_2[10]);
                      tmp3 = closure_6;
                      tmp4 = obj.runOnJS(closure_6)(translateX);
                    }
                    return;
                  }
                }
                const obj3 = { runOnJS: tmp(tmp2[10]).runOnJS, setIsVisible: tmp8[1] };
                T.__closure = obj3;
                T.__workletHash = 4812531096876;
                T.__initData = __initData2;
                const animatedReaction = tmp(tmp2[10]).useAnimatedReaction(fn2, T);
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
      let obj = translateX(highestFullyRenderedScreenIndex[9]);
    }
  : function useChannelScreenNavigationTTIVisibility(translateX) {
      translateX = translateX.translateX;
      const maxWidth = translateX.maxWidth;
      highestFullyRenderedScreenIndex = translateX.highestFullyRenderedScreenIndex;
      const index = translateX.index;
      const isStackVisible = translateX.isStackVisible;
      let flag = translateX.alwaysVisible;
      if (flag === undefined) {
        flag = false;
      }
      let tmp = index(
        isStackVisible.useState(() => {
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
        }),
        2,
      );
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
      fn.__closure = {
        isStackVisible,
        highestFullyRenderedScreenIndex,
        index,
        alwaysVisible: flag,
        translateX,
        maxWidth,
      };
      fn.__workletHash = 10825075918877;
      fn.__initData = __initData3;
      class S {
        constructor(arg0, arg1) {
          if (translateX !== arg1) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[10]);
            tmp3 = closure_6;
            tmp4 = obj.runOnJS(closure_6)(translateX);
          }
          return;
        }
      }
      let obj = translateX(highestFullyRenderedScreenIndex[10]);
      S.__closure = { runOnJS: translateX(highestFullyRenderedScreenIndex[10]).runOnJS, setIsVisible: tmp[1] };
      S.__workletHash = 17276269728204;
      S.__initData = __initData4;
      const animatedReaction = obj.useAnimatedReaction(fn, S);
      return tmp[0];
    };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EnabledChannelScreenNavigationTTIVisibility(arg0) {
      const cResult = c.c(10);
      ({ translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible, alwaysVisible, children } =
        arg0);
      if (cResult[0] === (undefined !== alwaysVisible && alwaysVisible)) {
        if (cResult[1] === highestFullyRenderedScreenIndex) {
          if (cResult[2] === index) {
            if (cResult[3] === isStackVisible) {
              if (cResult[4] === maxWidth) {
                if (cResult[5] === translateX) {
                  let tmp3 = cResult[6];
                }
                const tmp5 = closure_19(tmp3);
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
      const obj2 = {
        translateX,
        maxWidth,
        highestFullyRenderedScreenIndex,
        index,
        isStackVisible,
        alwaysVisible: undefined !== alwaysVisible && alwaysVisible,
      };
      cResult[0] = undefined !== alwaysVisible && alwaysVisible;
      cResult[1] = highestFullyRenderedScreenIndex;
      cResult[2] = index;
      cResult[3] = isStackVisible;
      cResult[4] = maxWidth;
      cResult[5] = translateX;
      cResult[6] = obj2;
      tmp3 = obj2;
    }
  : function EnabledChannelScreenNavigationTTIVisibility(alwaysVisible) {
      alwaysVisible = alwaysVisible.alwaysVisible;
      ({ translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible } = alwaysVisible);
      if (alwaysVisible === undefined) {
        alwaysVisible = false;
      }
      return alwaysVisible.children(
        closure_19({ translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible, alwaysVisible }),
      );
    };
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelScreenNavigationTTIVisibility(children) {
      const cResult = c.c(4);
      if (obj2.isNavigationTTIEnabled()) {
        if (cResult[2] !== children) {
          const obj3 = {};
          const merged = Object.assign(children);
          const tmp10 = parentFreezeValue(closure_20, obj3);
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
    }
  : function ChannelScreenNavigationTTIVisibility(children) {
      if (obj.isNavigationTTIEnabled()) {
        const obj2 = {};
        const merged = Object.assign(children);
        let childrenResult = parentFreezeValue(closure_20, obj2);
      } else {
        childrenResult = children.children(false);
      }
      return childrenResult;
    };
const __initData5 = {
  code: "function MainTabsChannelScreenStackTsx5(){const{translateX}=this.__closure;return translateX.get()>0;}",
};
const __initData6 = {
  code: "function MainTabsChannelScreenStackTsx6(isVisibleBeneath,wasVisibleBeneath){const{highestFullyRenderedScreenIndex,index}=this.__closure;if(isVisibleBeneath===wasVisibleBeneath){return;}if(isVisibleBeneath){if(highestFullyRenderedScreenIndex.get()>=index){highestFullyRenderedScreenIndex.set(index-1);}return;}if(highestFullyRenderedScreenIndex.get()<index){highestFullyRenderedScreenIndex.set(index);}}",
};
const __initData7 = {
  code: "function MainTabsChannelScreenStackTsx7(){const{enabled,highestFullyRenderedScreenIndex,index}=this.__closure;return enabled&&highestFullyRenderedScreenIndex.get()>index;}",
};
const __initData8 = {
  code: "function MainTabsChannelScreenStackTsx8(){const{translateX}=this.__closure;return translateX.get()>0;}",
};
const __initData9 = {
  code: "function MainTabsChannelScreenStackTsx9(isVisibleBeneath,wasVisibleBeneath){const{highestFullyRenderedScreenIndex,index}=this.__closure;if(isVisibleBeneath===wasVisibleBeneath)return;if(isVisibleBeneath){if(highestFullyRenderedScreenIndex.get()>=index){highestFullyRenderedScreenIndex.set(index-1);}return;}if(highestFullyRenderedScreenIndex.get()<index){highestFullyRenderedScreenIndex.set(index);}}",
};
const __initData10 = {
  code: "function MainTabsChannelScreenStackTsx10(){const{enabled,highestFullyRenderedScreenIndex,index}=this.__closure;return enabled&&highestFullyRenderedScreenIndex.get()>index;}",
};
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsCompletelyCovered(index, highestFullyRenderedScreenIndex, translateX) {
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
      const fn = function u() {
        return translateX.get() > 0;
      };
      fn.__closure = { translateX };
      fn.__workletHash = 3913618654716;
      fn.__initData = __initData5;
      const fn2 = function o(arg0, arg1) {
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
    }
  : function useIsCompletelyCovered(index, highestFullyRenderedScreenIndex, translateX) {
      closure_0 = index;
      const enabled = HideCoveredChannelsExperimentDefault.useConfig({
        location: "MainTabsChannelScreenStack",
      }).enabled;
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
      const fn3 = function o() {
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
    };
ReactCompilerGating = fn(558);
let closure_29 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function FirstChannelScreen(guildId) {
        const cResult = guildId(showCreateThread[9]).c(37);
        guildId = guildId.guildId;
        const channelId = guildId.channelId;
        showCreateThread = guildId.showCreateThread;
        const frame = guildId.frame;
        const index = guildId.index;
        ({ freeze, isDragging, translateX, containerWidth } = guildId);
        ({ isActive, isNavigationTTIStackVisible, maxWidth, focusChatPressableComponent, transitionState } = guildId);
        const cleanup = guildId.cleanup;
        ({ highestFullyRenderedScreenIndex, parentFreezeValue } = guildId);
        const obj = guildId(showCreateThread[9]);
        const tmp = guildId;
        const tmp4 = channelId;
        const tmp5 = channelId(showCreateThread[14])();
        const tmp6 = closure_14();
        const tmp7 = closure_28(index, highestFullyRenderedScreenIndex, translateX);
        const mainTabsChannelScreenStyles = guildId(showCreateThread[16]).useMainTabsChannelScreenStyles(
          isDragging,
          translateX,
          maxWidth,
          tmp7,
          parentFreezeValue,
        );
        if (cResult[0] === cleanup) {
          if (cResult[1] === transitionState) {
            let tmp9 = cResult[2];
            let tmp10 = cResult[3];
          }
          const effect = index.useEffect(tmp9, tmp10);
          if (cResult[4] !== containerWidth) {
            let tmp14 = null;
            if (null != containerWidth) {
              const obj3 = { width: containerWidth };
              tmp14 = obj3;
            }
            cResult[4] = containerWidth;
            cResult[5] = tmp14;
            let tmp13 = tmp14;
          } else {
            tmp13 = cResult[5];
          }
          let onyxContainerStyles;
          if (tmp5 === ThemeTypes.ONYX) {
            if (!channelId(showCreateThread[15])().isChatBesideChannelList) {
              onyxContainerStyles = tmp6.onyxContainerStyles;
            }
          }
          if (cResult[6] === mainTabsChannelScreenStyles) {
            if (cResult[7] === tmp13) {
              if (cResult[8] === onyxContainerStyles) {
                let tmp17 = cResult[9];
              }
              let str = "box-only";
              if (isActive) {
                str = "auto";
              }
              if (cResult[10] === channelId) {
                if (cResult[11] === containerWidth) {
                  if (cResult[12] === frame) {
                    if (cResult[13] === guildId) {
                      if (cResult[14] === index) {
                        if (cResult[15] === showCreateThread) {
                          let tmp21 = cResult[16];
                        }
                        if (cResult[17] === highestFullyRenderedScreenIndex) {
                          if (cResult[18] === index) {
                            if (cResult[19] === isNavigationTTIStackVisible) {
                              if (cResult[20] === maxWidth) {
                                if (cResult[21] === tmp21) {
                                  if (cResult[22] === tmp20) {
                                    if (cResult[23] === translateX) {
                                      let tmp22 = cResult[24];
                                    }
                                    if (cResult[25] === tmp22) {
                                      if (cResult[26] === str) {
                                        if (cResult[27] === tmp18) {
                                          if (cResult[28] === str2) {
                                            let tmp26 = cResult[29];
                                          }
                                          if (cResult[30] === freeze) {
                                            if (cResult[31] === tmp26) {
                                              let tmp31 = cResult[32];
                                            }
                                            if (cResult[33] === focusChatPressableComponent) {
                                              if (cResult[34] === tmp31) {
                                                if (cResult[35] === tmp17) {
                                                  let tmp34 = cResult[36];
                                                }
                                                return tmp34;
                                              }
                                            }
                                            const obj4 = { style: tmp17, children: null };
                                            const items = [tmp31, focusChatPressableComponent];
                                            obj4.children = items;
                                            const tmp36 = closure_13(tmp4(tmp2[20]), obj4);
                                            class G {
                                              constructor(arg0) {
                                                obj = {
                                                  guildId,
                                                  channelId,
                                                  isNavigationTTIVisible: guildId,
                                                  showCreateThread,
                                                  isNavigationScreen: null == containerWidth,
                                                  frame,
                                                  screenIndex: index,
                                                };
                                                return jsx(closure_1(closure_2[18]), obj);
                                              }
                                            }
                                            cResult[33] = focusChatPressableComponent;
                                            cResult[34] = tmp31;
                                            cResult[35] = tmp17;
                                            cResult[36] = tmp36;
                                            tmp34 = tmp36;
                                          }
                                          const obj5 = { freeze, children: tmp26 };
                                          const tmp33 = parentFreezeValue(tmp(tmp2[19]).Freeze, obj5);
                                          cResult[30] = freeze;
                                          class G {
                                            constructor(arg0) {
                                              obj = {
                                                guildId,
                                                channelId,
                                                isNavigationTTIVisible: guildId,
                                                showCreateThread,
                                                isNavigationScreen: null == containerWidth,
                                                frame,
                                                screenIndex: index,
                                              };
                                              return jsx(closure_1(closure_2[18]), obj);
                                            }
                                          }
                                          cResult[32] = tmp33;
                                          tmp31 = tmp33;
                                        }
                                      }
                                    }
                                    const obj6 = {
                                      collapsable: false,
                                      style: transitionState.absoluteFill,
                                      pointerEvents: str,
                                      accessibilityElementsHidden: tmp18,
                                      importantForAccessibility: str2,
                                      children: null,
                                    };
                                    class G {
                                      constructor(arg0) {
                                        obj = {
                                          guildId,
                                          channelId,
                                          isNavigationTTIVisible: guildId,
                                          showCreateThread,
                                          isNavigationScreen: null == containerWidth,
                                          frame,
                                          screenIndex: index,
                                        };
                                        return jsx(closure_1(closure_2[18]), obj);
                                      }
                                    }
                                    const tmp30 = parentFreezeValue(cleanup, obj6);
                                    cResult[25] = tmp22;
                                    cResult[26] = str;
                                    cResult[27] = tmp18;
                                    cResult[28] = str2;
                                    cResult[29] = tmp30;
                                    tmp26 = tmp30;
                                  }
                                }
                              }
                            }
                          }
                        }
                        const obj7 = {
                          translateX,
                          maxWidth,
                          highestFullyRenderedScreenIndex,
                          index,
                          isStackVisible: isNavigationTTIStackVisible,
                          alwaysVisible: null,
                          children: null,
                        };
                        class G {
                          constructor(arg0) {
                            obj = {
                              guildId,
                              channelId,
                              isNavigationTTIVisible: guildId,
                              showCreateThread,
                              isNavigationScreen: null == containerWidth,
                              frame,
                              screenIndex: index,
                            };
                            return jsx(closure_1(closure_2[18]), obj);
                          }
                        }
                        obj7.children = tmp21;
                        const tmp25 = parentFreezeValue(closure_21, obj7);
                        cResult[17] = highestFullyRenderedScreenIndex;
                        cResult[18] = index;
                        cResult[19] = isNavigationTTIStackVisible;
                        cResult[20] = maxWidth;
                        cResult[21] = tmp21;
                        cResult[22] = tmp20;
                        cResult[23] = translateX;
                        cResult[24] = tmp25;
                        tmp22 = tmp25;
                      }
                    }
                  }
                }
              }
              class G {
                constructor(arg0) {
                  obj = {
                    guildId,
                    channelId,
                    isNavigationTTIVisible: guildId,
                    showCreateThread,
                    isNavigationScreen: null == containerWidth,
                    frame,
                    screenIndex: index,
                  };
                  return jsx(closure_1(closure_2[18]), obj);
                }
              }
              cResult[10] = channelId;
              cResult[11] = containerWidth;
              cResult[12] = frame;
              cResult[13] = guildId;
              cResult[14] = index;
              cResult[15] = showCreateThread;
              cResult[16] = G;
              tmp21 = G;
            }
          }
          const items1 = [mainTabsChannelScreenStyles, , onyxContainerStyles];
          cResult[6] = mainTabsChannelScreenStyles;
          cResult[7] = tmp13;
          cResult[8] = onyxContainerStyles;
          cResult[9] = items1;
          tmp17 = items1;
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
        tmp10 = items2;
        tmp9 = fn;
        const obj2 = guildId(showCreateThread[16]);
      }
    : function FirstChannelScreen(cleanup) {
        ({
          guildId: require,
          channelId: importDefault,
          showCreateThread: dependencyMap,
          frame: _slicedToArray,
          index,
        } = cleanup);
        ({ isDragging, translateX, containerWidth } = cleanup);
        ({ isActive, maxWidth, transitionState } = cleanup);
        cleanup = cleanup.cleanup;
        highestFullyRenderedScreenIndex = cleanup.highestFullyRenderedScreenIndex;
        ({ freeze, isNavigationTTIStackVisible, focusChatPressableComponent, parentFreezeValue } = cleanup);
        const tmp2 = useThemeDefault();
        const tmp3 = closure_14();
        const tmp4 = closure_28(index, highestFullyRenderedScreenIndex, translateX);
        const items = [cleanup, transitionState];
        const mainTabsChannelScreenStyles = useMainTabsChannelScreenStyles.useMainTabsChannelScreenStyles(
          isDragging,
          translateX,
          maxWidth,
          tmp4,
          parentFreezeValue,
        );
        const effect = index.useEffect(() => {
          if (transitionState === native.TransitionStates.YEETED) {
            cleanup();
          }
        }, items);
        const items1 = [mainTabsChannelScreenStyles, ,];
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
        const obj5 = {
          collapsable: false,
          style: transitionState.absoluteFill,
          pointerEvents: null,
          accessibilityElementsHidden: null,
          importantForAccessibility: null,
          children: null,
        };
        let str = "box-only";
        if (isActive) {
          str = "auto";
        }
        obj5.pointerEvents = str;
        obj5.accessibilityElementsHidden = !isActive;
        obj5.importantForAccessibility = "no-hide-descendants";
        obj5.children = parentFreezeValue(closure_21, {
          translateX,
          maxWidth,
          highestFullyRenderedScreenIndex,
          index,
          isStackVisible: isNavigationTTIStackVisible,
          alwaysVisible: null != containerWidth,
          children(isNavigationTTIVisible) {
            return parentFreezeValue(StandaloneChannelScreenDefault, {
              guildId,
              channelId,
              isNavigationTTIVisible,
              showCreateThread,
              isNavigationScreen: null == containerWidth,
              frame,
              screenIndex: index,
            });
          },
        });
        obj4.children = parentFreezeValue(cleanup, obj5);
        const items2 = [parentFreezeValue(Suspender.Freeze, obj4), focusChatPressableComponent];
        obj3.children = items2;
        return closure_13(REAWorkaroundViewDefault, obj3);
      },
);
const __initData11 = {
  code: "function MainTabsChannelScreenStackTsx11(){const{translateX}=this.__closure;return translateX.get()===0;}",
};
const __initData12 = {
  code: "function MainTabsChannelScreenStackTsx12(isFullyOpen,prev){const{index,mainTabsDisallowGesture}=this.__closure;if(isFullyOpen===prev){return;}if(index!==1){return;}mainTabsDisallowGesture.set(isFullyOpen);}",
};
const __initData13 = {
  code: "function MainTabsChannelScreenStackTsx13(){const{translateX}=this.__closure;return translateX.get()===0;}",
};
const __initData14 = {
  code: "function MainTabsChannelScreenStackTsx14(isFullyOpen,prev){const{index,mainTabsDisallowGesture}=this.__closure;if(isFullyOpen===prev)return;if(index!==1)return;mainTabsDisallowGesture.set(isFullyOpen);}",
};
ReactCompilerGating = fn(558);
let closure_34 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ChannelScreen(guildId) {
        const cResult = guildId(showCreateThread[9]).c(43);
        guildId = guildId.guildId;
        const channelId = guildId.channelId;
        showCreateThread = guildId.showCreateThread;
        const transitionState = guildId.transitionState;
        const cleanup = guildId.cleanup;
        ({ isActive, isNavigationTTIStackVisible, freeze, parentFreezeValue, index } = guildId);
        highestFullyRenderedScreenIndex = guildId.highestFullyRenderedScreenIndex;
        const obj = guildId(showCreateThread[9]);
        const tmp5 = channelId(showCreateThread[14])();
        const tmp6 = closure_14();
        const navigation = guildId(showCreateThread[21]).useNavigation();
        cleanup.useRef(false);
        if (cResult[0] === cleanup) {
          if (cResult[1] === navigation) {
            let tmp8 = cResult[2];
          }
          const tmp9 = transitionState !== tmp(tmp2[17]).TransitionStates.YEETED;
          if (cResult[3] === tmp8) {
            if (cResult[4] === tmp9) {
              let tmp10 = cResult[5];
            }
            const tmp11 = tmp4(tmp2[23])(tmp10);
            ({ gesture, panelGestureContext, isDragging, translateX } = tmp11);
            ({ movePanel, maxWidth } = tmp11);
            const disallowGesture = obj3.useContext(tmp4(tmp2[24])).disallowGesture;
            const tmp13 = closure_28(index, highestFullyRenderedScreenIndex, translateX);
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
            const animatedReaction = tmp(tmp2[10]).useAnimatedReaction(X, N);
            if (cResult[6] === cleanup) {
              if (cResult[7] === movePanel) {
                let tmp17 = cResult[8];
              }
              let current = tmp17;
              ThemeTypes = obj3.useRef(tmp17);
              if (cResult[9] !== tmp17) {
                const fn2 = function j() {
                  closure_11.current = current;
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
                if (!channelId(showCreateThread[15])().isChatBesideChannelList) {
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
                      if (cResult[20] === showCreateThread) {
                        let tmp36 = cResult[21];
                      }
                      if (cResult[22] === highestFullyRenderedScreenIndex) {
                        if (cResult[23] === index) {
                          if (cResult[24] === isNavigationTTIStackVisible) {
                            if (cResult[25] === maxWidth) {
                              if (cResult[26] === tmp36) {
                                if (cResult[27] === translateX) {
                                  let tmp37 = cResult[28];
                                }
                                if (cResult[29] === freeze) {
                                  if (cResult[30] === tmp37) {
                                    let tmp41 = cResult[31];
                                  }
                                  if (cResult[32] === tmp35) {
                                    if (cResult[33] === str) {
                                      if (cResult[34] === tmp41) {
                                        if (cResult[35] === tmp34) {
                                          let tmp44 = cResult[36];
                                        }
                                        if (cResult[37] === panelGestureContext) {
                                          if (cResult[38] === tmp44) {
                                            let tmp47 = cResult[39];
                                          }
                                          if (cResult[40] === gesture) {
                                            if (cResult[41] === tmp47) {
                                              let tmp50 = cResult[42];
                                            }
                                            return tmp50;
                                          }
                                          const obj6 = { gesture, children: tmp47 };
                                          const tmp52 = parentFreezeValue(tmp(tmp2[25]).GestureDetector, obj6);
                                          cResult[40] = gesture;
                                          cResult[41] = tmp47;
                                          cResult[42] = tmp52;
                                          tmp50 = tmp52;
                                        }
                                        const obj7 = { value: panelGestureContext, children: tmp44 };
                                        const tmp49 = parentFreezeValue(
                                          tmp(tmp2[24]).MainTabsChannelScreenStackContext.Provider,
                                          obj7,
                                        );
                                        cResult[37] = panelGestureContext;
                                        cResult[38] = tmp44;
                                        cResult[39] = tmp49;
                                        tmp47 = tmp49;
                                      }
                                    }
                                  }
                                  const obj8 = {
                                    style: tmp34,
                                    accessibilityElementsHidden: tmp35,
                                    importantForAccessibility: str,
                                    children: tmp41,
                                  };
                                  const tmp46 = parentFreezeValue(tmp4(tmp2[20]), obj8);
                                  cResult[32] = tmp35;
                                  cResult[33] = str;
                                  cResult[34] = tmp41;
                                  class X {
                                    constructor() {
                                      return 0 === translateX.get();
                                    }
                                  }
                                  cResult[35] = tmp34;
                                  cResult[36] = tmp46;
                                  tmp44 = tmp46;
                                }
                                const obj9 = { freeze, children: tmp37 };
                                const tmp43 = parentFreezeValue(tmp(tmp2[19]).Freeze, obj9);
                                cResult[29] = freeze;
                                cResult[30] = tmp37;
                                cResult[31] = tmp43;
                                tmp41 = tmp43;
                              }
                            }
                          }
                        }
                      }
                      const obj10 = {
                        translateX,
                        maxWidth,
                        highestFullyRenderedScreenIndex,
                        index,
                        isStackVisible: isNavigationTTIStackVisible,
                        children: tmp36,
                      };
                      const tmp40 = parentFreezeValue(closure_21, obj10);
                      cResult[22] = highestFullyRenderedScreenIndex;
                      class X {
                        constructor() {
                          return 0 === translateX.get();
                        }
                      }
                      cResult[24] = isNavigationTTIStackVisible;
                      cResult[25] = maxWidth;
                      cResult[26] = tmp36;
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
                      cResult[28] = tmp40;
                      tmp37 = tmp40;
                    }
                  }
                }
                function ie(isNavigationTTIVisible) {
                  return parentFreezeValue(StandaloneChannelScreenDefault, {
                    guildId,
                    channelId,
                    isNavigationTTIVisible,
                    showCreateThread,
                    isNavigationScreen: true,
                    frame: null,
                    screenIndex: index,
                  });
                }
                cResult[17] = channelId;
                cResult[18] = guildId;
                cResult[19] = index;
                cResult[20] = showCreateThread;
                class X {
                  constructor() {
                    return 0 === translateX.get();
                  }
                }
                cResult[21] = ie;
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
              const tmpResult2 = tmp(tmp2[16]);
            }
            const obj11 = { cleanup, movePanel };
            cResult[6] = cleanup;
            cResult[7] = movePanel;
            cResult[8] = obj11;
            tmp17 = obj11;
            const tmpResult = tmp(tmp2[10]);
          }
          const obj12 = {
            canDrag: tmp9,
            onVisibilityChange: tmp8,
            onDragStart: tmp(tmp2[22]).dismissKeyboard,
            startShown: false,
          };
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
        const obj2 = guildId(showCreateThread[21]);
      }
    : function ChannelScreen(cleanup) {
        ({ guildId: require, channelId: importDefault, showCreateThread: dependencyMap, transitionState } = cleanup);
        cleanup = cleanup.cleanup;
        ({ isActive, index } = cleanup);
        highestFullyRenderedScreenIndex = cleanup.highestFullyRenderedScreenIndex;
        translateX = undefined;
        let obj4;
        ThemeTypes = undefined;
        ({ isNavigationTTIStackVisible, freeze, parentFreezeValue } = cleanup);
        const tmp2 = useThemeDefault();
        const tmp3 = closure_14();
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
        const tmp9 = closure_28(index, highestFullyRenderedScreenIndex, translateX);
        class I {
          constructor() {
            return 0 === translateX.get();
          }
        }
        I.__closure = { translateX };
        I.__workletHash = 279822179624;
        I.__initData = __initData13;
        const fn = function f(arg0, arg1) {
          let tmp = arg0 !== arg1;
          if (tmp) {
            tmp = 1 === index;
          }
          if (tmp) {
            const result = disallowGesture.set(arg0);
          }
        };
        fn.__closure = { index, mainTabsDisallowGesture: disallowGesture };
        fn.__workletHash = 2043595505301;
        fn.__initData = __initData14;
        const animatedReaction = ReanimatedRexport.useAnimatedReaction(I, fn);
        obj4 = { cleanup, movePanel };
        ThemeTypes = cleanup.useRef(obj4);
        const effect = cleanup.useEffect(() => {
          closure_11.current = obj4;
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
        const mainTabsChannelScreenStyles = useMainTabsChannelScreenStyles.useMainTabsChannelScreenStyles(
          isDragging,
          translateX,
          maxWidth,
          tmp9,
          parentFreezeValue,
        );
        const obj6 = { gesture, children: null };
        const obj7 = { value: panelGestureContext, children: null };
        const items2 = [mainTabsChannelScreenStyles];
        let onyxContainerStyles;
        if (tmp2 === ThemeTypes.ONYX) {
          if (!useChatLayoutDefault().isChatBesideChannelList) {
            onyxContainerStyles = tmp3.onyxContainerStyles;
          }
        }
        const obj8 = {
          style: items2,
          accessibilityElementsHidden: !isActive,
          importantForAccessibility: "no-hide-descendants",
          children: null,
        };
        items2[1] = onyxContainerStyles;
        const obj9 = {
          freeze,
          children: parentFreezeValue(closure_21, {
            translateX,
            maxWidth,
            highestFullyRenderedScreenIndex,
            index,
            isStackVisible: isNavigationTTIStackVisible,
            children(isNavigationTTIVisible) {
              return parentFreezeValue(StandaloneChannelScreenDefault, {
                guildId,
                channelId,
                isNavigationTTIVisible,
                showCreateThread,
                isNavigationScreen: true,
                frame: null,
                screenIndex: index,
              });
            },
          }),
        };
        obj8.children = parentFreezeValue(Suspender.Freeze, obj9);
        obj7.children = parentFreezeValue(REAWorkaroundViewDefault, obj8);
        obj6.children = parentFreezeValue(
          MainTabsNavigatorPanelContext.MainTabsChannelScreenStackContext.Provider,
          obj7,
        );
        return parentFreezeValue(LegacyBaseButton.GestureDetector, obj6);
      },
);
const __initData15 = {
  code: "function MainTabsChannelScreenStackTsx15(){const{translateX,maxWidth}=this.__closure;return translateX.get()===maxWidth;}",
};
const __initData16 = {
  code: "function MainTabsChannelScreenStackTsx16(value,prev){const{runOnJS,setIsHidden}=this.__closure;if(value===prev){return;}runOnJS(setIsHidden)(value);}",
};
const __initData17 = {
  code: "function MainTabsChannelScreenStackTsx17(){const{translateX,maxWidth}=this.__closure;return translateX.get()===maxWidth;}",
};
const __initData18 = {
  code: "function MainTabsChannelScreenStackTsx18(value,prev){const{runOnJS,setIsHidden}=this.__closure;if(value===prev)return;runOnJS(setIsHidden)(value);}",
};
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function MainTabsChannelScreenStack(screens) {
        const cResult = screens(navigationTTIStackVisible[9]).c(42);
        screens = screens.screens;
        const screenStackActive = screens.screenStackActive;
        navigationTTIStackVisible = screens.navigationTTIStackVisible;
        const translateX = screens.translateX;
        const isDragging = screens.isDragging;
        const maxWidth = screens.maxWidth;
        highestFullyRenderedScreenIndex = screens.highestFullyRenderedScreenIndex;
        ({ shouldFreeze, focusChatPressableComponent } = screens);
        const firstScreenWidth = screens.firstScreenWidth;
        const firstScreenFrame = screens.firstScreenFrame;
        screenStackActive(navigationTTIStackVisible[26])();
        if (cResult[0] !== translateX) {
          value = translateX.get();
          cResult[0] = translateX;
          cResult[1] = value;
          let tmp5 = value;
        } else {
          tmp5 = cResult[1];
        }
        let obj = screens(navigationTTIStackVisible[9]);
        const tmp8 = translateX(isDragging.useState(tmp5 === maxWidth), 2)[1];
        closure_10 = tmp8;
        const tmp7 = translateX(isDragging.useState(tmp5 === maxWidth), 2);
        class D {
          constructor() {
            return translateX.get() === maxWidth;
          }
        }
        D.__closure = { translateX, maxWidth };
        D.__workletHash = 13892906836978;
        D.__initData = __initData15;
        const fn = function w(arg0, arg1) {
          if (arg0 !== arg1) {
            ReanimatedRexport.runOnJS(closure_10)(arg0);
          }
        };
        const tmpResult = screens(navigationTTIStackVisible[10]);
        fn.__closure = { runOnJS: screens(navigationTTIStackVisible[10]).runOnJS, setIsHidden: tmp8 };
        fn.__workletHash = 13169088086524;
        fn.__initData = __initData16;
        const animatedReaction = tmpResult.useAnimatedReaction(D, fn);
        if (cResult[2] !== screens) {
          const atResult = screens.at(-1);
          cResult[2] = screens;
          cResult[3] = atResult;
          let tmp10 = atResult;
        } else {
          tmp10 = cResult[3];
        }
        let type;
        if (tmp10 != null) {
          type = tmp10.type;
        }
        let channelId = null;
        if (type === screens(navigationTTIStackVisible[27]).ChannelScreenType.DEFAULT) {
          channelId = tmp10.channelId;
        }
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          class W {
            constructor() {
              MediaPlayerManager = maxWidth.MediaPlayerManager;
              if (MediaPlayerManager != null) {
                pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
                if (pauseAllMediaPlayers != null) {
                  pauseAllMediaPlayersResult = pauseAllMediaPlayers();
                }
              }
              return;
            }
          }
          cResult[4] = W;
        } else {
          class W {
            constructor() {
              MediaPlayerManager = maxWidth.MediaPlayerManager;
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
        if (cResult[5] !== channelId) {
          class W {
            constructor() {
              MediaPlayerManager = maxWidth.MediaPlayerManager;
              if (MediaPlayerManager != null) {
                pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
                if (pauseAllMediaPlayers != null) {
                  pauseAllMediaPlayersResult = pauseAllMediaPlayers();
                }
              }
              return;
            }
          }
          tmp16[0] = channelId;
          cResult[5] = channelId;
          cResult[6] = tmp16;
        } else {
          class W {
            constructor() {
              MediaPlayerManager = maxWidth.MediaPlayerManager;
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
        const effect = obj2.useEffect(W, tmp16);
        closure_11 = screens[0];
        if (shouldFreeze) {
          class W {
            constructor() {
              MediaPlayerManager = maxWidth.MediaPlayerManager;
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
        if (shouldFreeze) {
          class W {
            constructor() {
              MediaPlayerManager = maxWidth.MediaPlayerManager;
              if (MediaPlayerManager != null) {
                pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
                if (pauseAllMediaPlayers != null) {
                  pauseAllMediaPlayersResult = pauseAllMediaPlayers();
                }
              }
              return;
            }
          }
          if (!tmp18) {
            class W {
              constructor() {
                MediaPlayerManager = maxWidth.MediaPlayerManager;
                if (MediaPlayerManager != null) {
                  pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
                  if (pauseAllMediaPlayers != null) {
                    pauseAllMediaPlayersResult = pauseAllMediaPlayers();
                  }
                }
                return;
              }
            }
            tmp18 = tmp19 !== tmp(tmp2[27]).ChannelScreenType.DEFAULT;
          }
          shouldFreeze = tmp18;
        }
        let obj3 = { runOnJS: screens(navigationTTIStackVisible[10]).runOnJS, setIsHidden: tmp8 };
        const sharedValue = screens(navigationTTIStackVisible[10]).useSharedValue(0);
        if (cResult[7] !== sharedValue) {
          class J {
            constructor() {
              closure_0 = setTimeout(() => {
                const result = sharedValue.set(sharedValue.get() + 1);
              }, 10);
              return () => clearTimeout(closure_0);
            }
          }
          cResult[7] = sharedValue;
          cResult[8] = J;
        } else {
          class J {
            constructor() {
              closure_0 = setTimeout(() => {
                const result = sharedValue.set(sharedValue.get() + 1);
              }, 10);
              return () => clearTimeout(closure_0);
            }
          }
        }
        if (cResult[9] === shouldFreeze) {
          class J {
            constructor() {
              closure_0 = setTimeout(() => {
                const result = sharedValue.set(sharedValue.get() + 1);
              }, 10);
              return () => clearTimeout(closure_0);
            }
          }
          const effect1 = obj2.useEffect(J, items);
          if (cResult[12] === firstScreenFrame) {
            class J {
              constructor() {
                closure_0 = setTimeout(() => {
                  const result = sharedValue.set(sharedValue.get() + 1);
                }, 10);
                return () => clearTimeout(closure_0);
              }
            }
          }
          class Y {
            constructor(arg0, arg1, arg2, arg3) {
              NumberResult = Number(screens);
              if (0 === NumberResult) {
                obj = {
                  guildId: null,
                  channelId: null,
                  showCreateThread: null,
                  focusChatPressableComponent: null,
                  index: null,
                  transitionState: null,
                  cleanup: null,
                  isDragging: null,
                  translateX: null,
                  isActive: null,
                  isNavigationTTIStackVisible: null,
                  freeze: null,
                  containerWidth: null,
                  frame: null,
                  parentFreezeValue: null,
                  maxWidth: null,
                  highestFullyRenderedScreenIndex: null,
                };
                ({ guildId: obj.guildId, channelId: obj.channelId, showCreateThread: showCreateThread2 } = arg1);
                tmp9 = null;
                tmp7 = jsx;
                tmp8 = closure_29;
                if (showCreateThread2 == null) {
                  showCreateThread2 = false;
                }
                obj.showCreateThread = showCreateThread2;
                tmp10 = closure_7;
                obj.focusChatPressableComponent = closure_7;
                obj.index = NumberResult;
                obj.transitionState = arg2;
                obj.cleanup = arg3;
                tmp11 = isDragging;
                obj.isDragging = isDragging;
                tmp12 = translateX;
                obj.translateX = translateX;
                tmp13 = screenStackActive;
                if (screenStackActive) {
                  tmp14 = screens;
                  num3 = 1;
                  tmp13 = NumberResult === screens.length - 1;
                }
                obj.isActive = tmp13;
                tmp15 = navigationTTIStackVisible;
                obj.isNavigationTTIStackVisible = navigationTTIStackVisible;
                tmp16 = screens;
                num4 = 2;
                obj.freeze = NumberResult < screens.length - 2;
                tmp17 = firstScreenWidth;
                obj.containerWidth = firstScreenWidth;
                tmp18 = firstScreenFrame;
                obj.frame = firstScreenFrame;
                tmp19 = closure_12;
                obj.parentFreezeValue = closure_12;
                tmp20 = maxWidth;
                obj.maxWidth = maxWidth;
                tmp21 = closure_6;
                obj.highestFullyRenderedScreenIndex = closure_6;
                tmp7Result = tmp7(tmp8, obj, screens);
              } else {
                obj1 = {
                  guildId: null,
                  channelId: null,
                  showCreateThread: null,
                  index: null,
                  transitionState: null,
                  parentFreezeValue: null,
                  cleanup: null,
                  isActive: null,
                  isNavigationTTIStackVisible: null,
                  freeze: null,
                  highestFullyRenderedScreenIndex: null,
                };
                ({ guildId: obj2.guildId, channelId: obj2.channelId, showCreateThread } = arg1);
                tmp24 = null;
                tmp22 = jsx;
                tmp23 = closure_34;
                if (showCreateThread == null) {
                  showCreateThread = false;
                }
                obj1.showCreateThread = showCreateThread;
                obj1.index = NumberResult;
                obj1.transitionState = arg2;
                tmp2 = closure_12;
                obj1.parentFreezeValue = closure_12;
                obj1.cleanup = arg3;
                tmp3 = screens;
                num = 1;
                obj1.isActive = NumberResult === screens.length - 1;
                tmp4 = navigationTTIStackVisible;
                obj1.isNavigationTTIStackVisible = navigationTTIStackVisible;
                num2 = 2;
                obj1.freeze = NumberResult < screens.length - 2;
                tmp5 = closure_6;
                obj1.highestFullyRenderedScreenIndex = closure_6;
                tmp7Result = tmp22(tmp23, obj1, screens);
              }
              return tmp7Result;
            }
          }
          cResult[12] = firstScreenFrame;
          cResult[13] = firstScreenWidth;
          cResult[14] = focusChatPressableComponent;
          cResult[15] = sharedValue;
          cResult[16] = highestFullyRenderedScreenIndex;
          cResult[17] = isDragging;
          cResult[18] = maxWidth;
          cResult[19] = navigationTTIStackVisible;
          cResult[20] = screenStackActive;
          cResult[21] = screens.length;
          cResult[22] = translateX;
          cResult[23] = Y;
        }
        items = [shouldFreeze, sharedValue];
        cResult[9] = shouldFreeze;
        cResult[10] = sharedValue;
        cResult[11] = items;
        const tmpResult2 = screens(navigationTTIStackVisible[10]);
      }
    : function MainTabsChannelScreenStack(screens) {
        screens = screens.screens;
        const screenStackActive = screens.screenStackActive;
        const navigationTTIStackVisible = screens.navigationTTIStackVisible;
        const translateX = screens.translateX;
        const isDragging = screens.isDragging;
        const maxWidth = screens.maxWidth;
        highestFullyRenderedScreenIndex = screens.highestFullyRenderedScreenIndex;
        ({ shouldFreeze, focusChatPressableComponent } = screens);
        const firstScreenWidth = screens.firstScreenWidth;
        const firstScreenFrame = screens.firstScreenFrame;
        let first;
        let sharedValue;
        let tmp3 = translateX(isDragging.useState(translateX.get() === maxWidth), 2);
        closure_10 = tmp4;
        const tmp2 = screenStackActive(navigationTTIStackVisible[26])();
        const fn = function k() {
          return translateX.get() === maxWidth;
        };
        fn.__closure = { translateX, maxWidth };
        fn.__workletHash = 14568525032880;
        fn.__initData = __initData17;
        class V {
          constructor(arg0, arg1) {
            if (screens !== arg1) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[10]);
              tmp3 = closure_10;
              tmp4 = obj.runOnJS(closure_10)(screens);
            }
            return;
          }
        }
        let obj2 = screens(navigationTTIStackVisible[10]);
        V.__closure = { runOnJS: screens(navigationTTIStackVisible[10]).runOnJS, setIsHidden: tmp3[1] };
        V.__workletHash = 7029914705044;
        V.__initData = __initData18;
        const animatedReaction = obj2.useAnimatedReaction(fn, V);
        const items = [screens];
        const items1 = [
          isDragging.useMemo(() => {
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
          }, items),
        ];
        const effect = isDragging.useEffect(() => {
          const MediaPlayerManager = maxWidth.MediaPlayerManager;
          if (MediaPlayerManager != null) {
            const pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
            if (pauseAllMediaPlayers != null) {
              pauseAllMediaPlayers();
            }
          }
        }, items1);
        first = screens[0];
        if (shouldFreeze) {
          shouldFreeze = tmp3[0];
        }
        if (shouldFreeze) {
          let tmp10 = null == first;
          if (!tmp10) {
            tmp10 = first.type !== tmp5(tmp[27]).ChannelScreenType.DEFAULT;
          }
          shouldFreeze = tmp10;
        }
        let obj3 = { runOnJS: screens(navigationTTIStackVisible[10]).runOnJS, setIsHidden: tmp3[1] };
        sharedValue = screens(navigationTTIStackVisible[10]).useSharedValue(0);
        const items2 = [shouldFreeze, sharedValue];
        const effect1 = obj.useEffect(() => {
          const timeout = setTimeout(() => {
            const result = sharedValue.set(sharedValue.get() + 1);
          }, 10);
          return () => clearTimeout(closure_0);
        }, items2);
        const items3 = [
          screens.length,
          focusChatPressableComponent,
          isDragging,
          translateX,
          firstScreenWidth,
          firstScreenFrame,
          maxWidth,
          sharedValue,
          screenStackActive,
          navigationTTIStackVisible,
          highestFullyRenderedScreenIndex,
        ];
        let channelId;
        const callback = obj.useCallback((arg0, arg1, transitionState, cleanup) => {
          const NumberResult = Number(arg0);
          if (0 === NumberResult) {
            const obj = {
              guildId: null,
              channelId: null,
              showCreateThread: null,
              focusChatPressableComponent: null,
              index: null,
              transitionState: null,
              cleanup: null,
              isDragging: null,
              translateX: null,
              isActive: null,
              isNavigationTTIStackVisible: null,
              freeze: null,
              containerWidth: null,
              frame: null,
              parentFreezeValue: null,
              maxWidth: null,
              highestFullyRenderedScreenIndex: null,
            };
            ({ guildId: obj.guildId, channelId: obj.channelId, showCreateThread: showCreateThread2 } = arg1);
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
            let tmp13 = screenStackActive;
            if (screenStackActive) {
              tmp13 = NumberResult === screens.length - 1;
            }
            obj.isActive = tmp13;
            obj.isNavigationTTIStackVisible = navigationTTIStackVisible;
            obj.freeze = NumberResult < screens.length - 2;
            obj.containerWidth = firstScreenWidth;
            obj.frame = firstScreenFrame;
            obj.parentFreezeValue = sharedValue;
            obj.maxWidth = maxWidth;
            obj.highestFullyRenderedScreenIndex = highestFullyRenderedScreenIndex;
            let tmp22Result = parentFreezeValue(closure_29, obj, arg0);
          } else {
            const obj3 = {
              guildId: null,
              channelId: null,
              showCreateThread: null,
              index: null,
              transitionState: null,
              parentFreezeValue: null,
              cleanup: null,
              isActive: null,
              isNavigationTTIStackVisible: null,
              freeze: null,
              highestFullyRenderedScreenIndex: null,
            };
            ({ guildId: obj2.guildId, channelId: obj2.channelId, showCreateThread } = arg1);
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
            obj3.freeze = NumberResult < screens.length - 2;
            obj3.highestFullyRenderedScreenIndex = highestFullyRenderedScreenIndex;
            tmp22Result = parentFreezeValue(closure_34, obj3, arg0);
          }
          return tmp22Result;
        }, items3);
        if (first != null) {
          channelId = first.channelId;
        }
        if (channelId == null) {
          channelId = null;
        }
        isDragging.useRef(channelId);
        isDragging.useRef(null);
        let type;
        if (first != null) {
          type = first.type;
        }
        const items4 = [type];
        let channelId1;
        if (first != null) {
          channelId1 = first.channelId;
        }
        items4[1] = channelId1;
        const effect2 = obj.useEffect(() => {
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
                const obj3 = {
                  section: constants3.CHANNEL,
                  object: constants2.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH,
                  objectType: constants.ACK_AUTOMATIC,
                };
                obj.location = obj3;
                obj.channelId = first.channelId;
                DispatcherDefault.dispatch(obj);
              }
            } else {
              tmp6.current = first.channelId;
            }
          }
        }, items4);
        const tmp5Result = screens(navigationTTIStackVisible[10]);
        screens(navigationTTIStackVisible[29]).freezeScreenIndex(shouldFreeze, 0);
        if (!shouldFreeze) {
          const obj4 = { freeze: shouldFreeze, children: null };
          const obj5 = {
            collapsable: false,
            style: highestFullyRenderedScreenIndex.absoluteFill,
            pointerEvents: "box-none",
            accessibilityElementsHidden: !screenStackActive,
            importantForAccessibility: "no-hide-descendants",
            children: null,
          };
          const obj6 = { gradient: tmp2, children: null };
          const obj7 = { items: screens, renderItem: callback, getItemKey: getKey };
          obj6.children = sharedValue(tmp5(tmp[17]).TransitionGroup, obj7);
          obj5.children = sharedValue(tmp5(tmp[17]).ThemeContextProvider, obj6);
          obj4.children = sharedValue(focusChatPressableComponent, obj5);
          let tmp21Result = tmp21(tmp5(tmp[19]).Freeze, obj4);
          const tmp24 = !screenStackActive;
        } else {
          let showCreateThread;
          if (first != null) {
            showCreateThread = first.showCreateThread;
          }
          tmp21Result = null;
        }
        return tmp21Result;
      },
);
