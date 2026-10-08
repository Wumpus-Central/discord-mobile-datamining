// discord_app/modules/launchpad/native/LaunchPadContainer.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const LaunchPadConstants = fn(11258);
({ LAUNCH_PAD_SPRING_CONFIG: closure_4, LaunchPadTypes: hasOwnProperty } = LaunchPadConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { wrapper: null, container: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = "transparent";
obj2.wrapper = obj3;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.overflow = "hidden";
obj2.container = obj4;
let closure_8 = createStyles.createStyles(obj2);
const __initData = {
  code: "function LaunchPadContainerTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get().height;}",
};
const __initData2 = {
  code: "function LaunchPadContainerTsx2(height,lastHeight){const{updaters}=this.__closure;if(lastHeight==null){return;}if(lastHeight<=height){return;}updaters.onWindowHeightChange();}",
};
const __initData3 = {
  code: 'function LaunchPadContainerTsx3(){const{interpolate,launchPadSharedState,withSpring,windowDimensions,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;return{borderRadius:interpolate(launchPadSharedState.get(),[0,1],[0,16]),transform:[{scale:withSpring(interpolate(launchPadSharedState.get(),[0,1],[1,(windowDimensions.get().width-48)/windowDimensions.get().width]),LAUNCH_PAD_SPRING_CONFIG,"animate-always")},{translateY:withSpring(interpolate(launchPadSharedState.get(),[0,1],[0,-4]),LAUNCH_PAD_SPRING_CONFIG,"animate-always")}]};}',
};
const __initData4 = {
  code: "function LaunchPadContainerTsx4(){const{windowDimensions}=this.__closure;return windowDimensions.get().height;}",
};
const __initData5 = {
  code: "function LaunchPadContainerTsx5(height,lastHeight){const{updaters}=this.__closure;if(lastHeight==null)return;if(lastHeight<=height)return;updaters.onWindowHeightChange();}",
};
const __initData6 = {
  code: "function LaunchPadContainerTsx6(){const{interpolate,launchPadSharedState,withSpring,windowDimensions,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;return{borderRadius:interpolate(launchPadSharedState.get(),[0,1],[0,16]),transform:[{scale:withSpring(interpolate(launchPadSharedState.get(),[0,1],[1,(windowDimensions.get().width-16*3)/windowDimensions.get().width]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')},{translateY:withSpring(interpolate(launchPadSharedState.get(),[0,1],[0,-4]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')}]};}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadContainer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function LaunchPadContainer(children) {
      const cResult = launchPadSharedState(576).c(32);
      children = children.children;
      const tmp4 = closure_8();
      const tmp6 = updaters(11259)();
      const tmp7 = updaters(17693)();
      launchPadSharedState = tmp7.launchPadSharedState;
      ({ launchPadPullTabState, launchPadShown, gestureState, updaters } = tmp7);
      if (cResult[0] === gestureState) {
        if (cResult[1] === launchPadPullTabState) {
          if (cResult[2] === launchPadSharedState) {
            if (cResult[3] === launchPadShown) {
              if (cResult[4] === tmp6) {
                if (cResult[5] === updaters) {
                  let tmp8 = cResult[6];
                }
                ({ gesture, gestureRef } = updaters(17695)(tmp8));
                const tmp10 = updaters(11726)();
                dependencyMap = tmp10;
                const tmp9 = updaters(17695)(tmp8);
                class L {
                  constructor() {
                    return closure_2.get().height;
                  }
                }
                let obj2 = { windowDimensions: tmp10 };
                L.__closure = obj2;
                L.__workletHash = 9985296176902;
                L.__initData = __initData;
                class I {
                  constructor(arg0, arg1) {
                    if (null != arg1) {
                      tmp = children;
                      if (arg1 > children) {
                        tmp2 = updaters;
                        onWindowHeightChangeResult = updaters.onWindowHeightChange();
                      }
                    }
                    return;
                  }
                }
                let obj3 = { updaters };
                I.__closure = obj3;
                I.__workletHash = 13982899682783;
                I.__initData = __initData2;
                const animatedReaction = tmp(4810).useAnimatedReaction(L, I);
                const tmpResult = tmp(4810);
                const fn = function x() {
                  const obj = {
                    borderRadius: ReanimatedRexport.interpolate(launchPadSharedState.get(), [0, 1], [0, 16]),
                    transform: null,
                  };
                  const obj3 = { scale: null };
                  const obj4 = spring;
                  value = launchPadSharedState.get();
                  const diff = closure_2.get().width - 48;
                  const items = [1, diff / closure_2.get().width];
                  obj3.scale = obj4.withSpring(
                    ReanimatedRexport.interpolate(value, [0, 1], items),
                    LAUNCH_PAD_SPRING_CONFIG,
                    "animate-always",
                  );
                  const items1 = [obj3];
                  const obj6 = { translateY: null };
                  const obj7 = spring;
                  obj6.translateY = obj7.withSpring(
                    ReanimatedRexport.interpolate(launchPadSharedState.get(), [0, 1], [0, -4]),
                    LAUNCH_PAD_SPRING_CONFIG,
                    "animate-always",
                  );
                  items1[1] = obj6;
                  obj.transform = items1;
                  return obj;
                };
                let obj4 = {
                  interpolate: tmp(4810).interpolate,
                  launchPadSharedState,
                  withSpring: tmp(5374).withSpring,
                  windowDimensions: tmp10,
                  LAUNCH_PAD_SPRING_CONFIG,
                };
                fn.__closure = obj4;
                fn.__workletHash = 5904359843866;
                fn.__initData = __initData3;
                const animatedStyle = tmp(4810).useAnimatedStyle(fn);
                const _Symbol = Symbol;
                if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
                  let obj5 = { location: "guilds" };
                  cResult[7] = obj5;
                  let tmp18 = obj5;
                } else {
                  tmp18 = cResult[7];
                }
                const MobileHomeDrawerExperiment = tmp(4942).MobileHomeDrawerExperiment;
                const enableHome = MobileHomeDrawerExperiment.useConfig(tmp18).enableHome;
                if (cResult[8] === tmp4.container) {
                  if (cResult[9] === animatedStyle) {
                    let tmp19 = cResult[10];
                  }
                  if (cResult[11] === children) {
                    if (cResult[12] === tmp19) {
                      let tmp20 = cResult[13];
                    }
                    if (cResult[14] === enableHome) {
                      if (cResult[15] === gestureState) {
                        if (cResult[16] === launchPadPullTabState) {
                          if (cResult[17] === launchPadSharedState) {
                            if (cResult[18] === launchPadShown) {
                              if (cResult[19] === tmp6) {
                                if (cResult[20] === updaters) {
                                  let tmp23 = cResult[21];
                                }
                                if (cResult[22] === tmp4.wrapper) {
                                  if (cResult[23] === tmp20) {
                                    if (cResult[24] === tmp23) {
                                      let tmp27 = cResult[25];
                                    }
                                    if (cResult[26] === gesture) {
                                      if (cResult[27] === tmp27) {
                                        let tmp31 = cResult[28];
                                      }
                                      if (cResult[29] === gestureRef) {
                                        if (cResult[30] === tmp31) {
                                          let tmp34 = cResult[31];
                                        }
                                        return tmp34;
                                      }
                                      let obj6 = { value: gestureRef, children: tmp31 };
                                      const tmp36 = closure_6(updaters(16229).Provider, obj6);
                                      class L {
                                        constructor() {
                                          return closure_2.get().height;
                                        }
                                      }
                                      cResult[29] = gestureRef;
                                      cResult[30] = tmp31;
                                      cResult[31] = tmp36;
                                      tmp34 = tmp36;
                                    }
                                    let obj7 = { gesture, children: tmp27 };
                                    const tmp33 = closure_6(tmp(6326).GestureDetector, obj7);
                                    class L {
                                      constructor() {
                                        return closure_2.get().height;
                                      }
                                    }
                                    cResult[26] = gesture;
                                    cResult[27] = tmp27;
                                    cResult[28] = tmp33;
                                    tmp31 = tmp33;
                                  }
                                }
                                const obj8 = { style: tmp4.wrapper, children: null };
                                let items = [,];
                                class L {
                                  constructor() {
                                    return closure_2.get().height;
                                  }
                                }
                                items[1] = tmp23;
                                obj8.children = items;
                                const tmp30 = closure_7(closure_3, obj8);
                                cResult[22] = tmp4.wrapper;
                                cResult[23] = tmp20;
                                class I {
                                  constructor(arg0, arg1) {
                                    if (null != arg1) {
                                      tmp = children;
                                      if (arg1 > children) {
                                        tmp2 = updaters;
                                        onWindowHeightChangeResult = updaters.onWindowHeightChange();
                                      }
                                    }
                                    return;
                                  }
                                }
                                cResult[24] = tmp23;
                                cResult[25] = tmp30;
                                tmp27 = tmp30;
                              }
                            }
                          }
                        }
                      }
                    }
                    if (tmp6 !== constants.DISABLED) {
                      const obj9 = {
                        launchPadType: tmp6,
                        gestureState,
                        launchPadShown,
                        launchPadSharedState,
                        launchPadPullTabState,
                        updaters: null,
                      };
                      class L {
                        constructor() {
                          return closure_2.get().height;
                        }
                      }
                      const tmp25 = closure_6(updaters(17696), obj9);
                    }
                    cResult[14] = enableHome;
                    class L {
                      constructor() {
                        return closure_2.get().height;
                      }
                    }
                    cResult[16] = launchPadPullTabState;
                    cResult[17] = launchPadSharedState;
                    cResult[18] = launchPadShown;
                    class I {
                      constructor(arg0, arg1) {
                        if (null != arg1) {
                          tmp = children;
                          if (arg1 > children) {
                            tmp2 = updaters;
                            onWindowHeightChangeResult = updaters.onWindowHeightChange();
                          }
                        }
                        return;
                      }
                    }
                    cResult[20] = updaters;
                    cResult[21] = tmp25;
                    tmp23 = tmp25;
                  }
                  const obj10 = { style: tmp19, children };
                  const tmp22 = closure_6(updaters(4810).View, obj10);
                  class L {
                    constructor() {
                      return closure_2.get().height;
                    }
                  }
                  cResult[11] = children;
                  cResult[12] = tmp19;
                  cResult[13] = tmp22;
                  tmp20 = tmp22;
                }
                let items1 = [tmp4.container, animatedStyle];
                cResult[8] = tmp4.container;
                cResult[9] = animatedStyle;
                cResult[10] = items1;
                tmp19 = items1;
                const tmpResult2 = tmp(4810);
              }
            }
          }
        }
      }
      const obj11 = {
        launchPadType: tmp6,
        launchPadSharedState,
        launchPadPullTabState,
        launchPadShown,
        gestureState,
        updaters,
      };
      cResult[0] = gestureState;
      cResult[1] = launchPadPullTabState;
      cResult[2] = launchPadSharedState;
      cResult[3] = launchPadShown;
      cResult[4] = tmp6;
      cResult[5] = updaters;
      cResult[6] = obj11;
      tmp8 = obj11;
      let obj = launchPadSharedState(576);
    }
  : function LaunchPadContainer(children) {
      updaters = undefined;
      const tmp = closure_8();
      const tmp4 = updaters(11259)();
      const tmp5 = updaters(17693)();
      const launchPadSharedState = tmp5.launchPadSharedState;
      ({ launchPadPullTabState, launchPadShown, gestureState, updaters } = tmp5);
      ({ gesture, gestureRef } = updaters(17695)({
        launchPadType: tmp4,
        launchPadSharedState,
        launchPadPullTabState,
        launchPadShown,
        gestureState,
        updaters,
      }));
      const tmp7 = updaters(11726)();
      dependencyMap = tmp7;
      const tmp2 = updaters;
      const tmp6 = updaters(17695)({
        launchPadType: tmp4,
        launchPadSharedState,
        launchPadPullTabState,
        launchPadShown,
        gestureState,
        updaters,
      });
      const fn = function l() {
        return closure_2.get().height;
      };
      fn.__closure = { windowDimensions: tmp7 };
      fn.__workletHash = 14958452675779;
      fn.__initData = __initData4;
      const fn2 = function o(arg0, arg1) {
        if (null != arg1) {
          if (arg1 > arg0) {
            updaters.onWindowHeightChange();
          }
        }
      };
      fn2.__closure = { updaters };
      fn2.__workletHash = 8813829802392;
      fn2.__initData = __initData5;
      const animatedReaction = launchPadSharedState(4810).useAnimatedReaction(fn, fn2);
      let obj = launchPadSharedState(4810);
      class R {
        constructor() {
          obj = { borderRadius: null, transform: null };
          obj2 = closure_0(closure_2[11]);
          obj.borderRadius = obj2.interpolate(launchPadSharedState.get(), [0, 1], [0, 16]);
          obj1 = { scale: null };
          obj4 = closure_0(closure_2[12]);
          obj5 = closure_0(closure_2[11]);
          value = launchPadSharedState.get();
          diff = closure_2.get().width - 48;
          items = [1];
          items[1] = diff / closure_2.get().width;
          obj1.scale = obj4.withSpring(
            obj5.interpolate(value, [0, 1], items),
            LAUNCH_PAD_SPRING_CONFIG,
            "animate-always",
          );
          items1 = [,];
          items1[0] = obj1;
          obj9 = { translateY: null };
          obj7 = closure_0(closure_2[12]);
          obj8 = closure_0(closure_2[11]);
          obj9.translateY = obj7.withSpring(
            obj8.interpolate(launchPadSharedState.get(), [0, 1], [0, -4]),
            LAUNCH_PAD_SPRING_CONFIG,
            "animate-always",
          );
          items1[1] = obj9;
          obj.transform = items1;
          return obj;
        }
      }
      let obj2 = launchPadSharedState(4810);
      R.__closure = {
        interpolate: launchPadSharedState(4810).interpolate,
        launchPadSharedState,
        withSpring: launchPadSharedState(5374).withSpring,
        windowDimensions: tmp7,
        LAUNCH_PAD_SPRING_CONFIG,
      };
      R.__workletHash = 12045260645805;
      R.__initData = __initData6;
      const animatedStyle = obj2.useAnimatedStyle(R);
      const MobileHomeDrawerExperiment = launchPadSharedState(4942).MobileHomeDrawerExperiment;
      let obj4 = { value: gestureRef, children: null };
      let obj5 = { gesture, children: null };
      let obj6 = { style: tmp.wrapper, children: null };
      let obj7 = { style: null, children: children.children };
      let items = [tmp.container, animatedStyle];
      obj7.style = items;
      let items1 = [closure_6(updaters(4810).View, obj7)];
      if (tmp4 !== constants.DISABLED) {
        const obj8 = {
          launchPadType: tmp4,
          gestureState,
          launchPadShown,
          launchPadSharedState,
          launchPadPullTabState,
          updaters,
        };
        const tmp10Result = closure_6(tmp2(17696), obj8);
      }
      items1[1] = tmp10Result;
      obj6.children = items1;
      obj5.children = closure_7(closure_3, obj6);
      obj4.children = closure_6(launchPadSharedState(6326).GestureDetector, obj5);
      return closure_6(updaters(16229).Provider, obj4);
    };
