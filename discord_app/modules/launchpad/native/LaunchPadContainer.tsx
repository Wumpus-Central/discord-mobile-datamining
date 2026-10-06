// discord_app/modules/launchpad/native/LaunchPadContainer.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import LaunchPadConstants from "LaunchPadConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let children, dependencyMap;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ View: c3, StyleSheet } = react_native);
({ LAUNCH_PAD_SPRING_CONFIG: closure_4, LaunchPadTypes: hasOwnProperty } = LaunchPadConstants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, container: obj3 };
obj2 = { backgroundColor: "transparent" };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { overflow: "hidden" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
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
const tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      let closure_2;
      let gesture;
      let gestureRef;
      let gestureState;
      let items;
      let launchPadPullTabState;
      let launchPadSharedState;
      let launchPadShown;
      let updaters;
      const tmp = launchPadSharedState;
      let obj = launchPadSharedState(576);
      const cResult = obj.c(32);
      children = children.children;
      const tmp4 = closure_8();
      const tmp6 = updaters(11139)();
      const tmp7 = updaters(17411)();
      launchPadSharedState = tmp7.launchPadSharedState;
      ({ launchPadPullTabState, launchPadShown, gestureState, updaters } = tmp7);
      if (cResult[0] === gestureState) {
        if (cResult[1] === launchPadPullTabState) {
          if (cResult[2] === launchPadSharedState) {
            if (cResult[3] === launchPadShown) {
              if (cResult[4] === tmp6) {
                let tmp8;
                let tmp19;
                if (cResult[5] === updaters) {
                  tmp8 = cResult[6];
                }
                ({ gesture, gestureRef } = updaters(17413)(tmp8));
                updaters(17413)(tmp8);
                const tmp10 = updaters(11661)();
                dependencyMap = tmp10;
                const tmpResult = tmp(4618);
                class G {
                  constructor() {
                    return closure_2.get().height;
                  }
                }
                let obj2 = { windowDimensions: tmp10 };
                G.__closure = obj2;
                G.__workletHash = 9985296176902;
                G.__initData = __initData;
                class I {
                  constructor(arg0, arg1) {
                    if (null != arg1) {
                      if (arg1 > arg0) {
                        updaters.onWindowHeightChange();
                      }
                    }
                  }
                }
                let obj3 = { updaters };
                I.__closure = obj3;
                I.__workletHash = 13982899682783;
                I.__initData = __initData2;
                const animatedReaction = tmpResult.useAnimatedReaction(G, I);
                const fn = function x() {
                  let interpolate;
                  let items;
                  let items1;
                  let obj2;
                  let obj5;
                  let value;
                  let withSpring;
                  let withSpring2;
                  const obj = {
                    borderRadius: obj2.interpolate(launchPadSharedState.get(), [0, 1], [0, 16]),
                    transform: items1,
                  };
                  obj2 = ReanimatedRexport;
                  const obj3 = { scale: withSpring(interpolate(value, [0, 1], items), closure_4, "animate-always") };
                  withSpring = spring.withSpring;
                  spring;
                  interpolate = ReanimatedRexport.interpolate;
                  ReanimatedRexport;
                  value = launchPadSharedState.get();
                  const diff = closure_2.get().width - 48;
                  items = [1, diff / closure_2.get().width];
                  items1 = [obj3];
                  const obj4 = {
                    translateY: withSpring2(
                      obj5.interpolate(launchPadSharedState.get(), [0, 1], [0, -4]),
                      closure_4,
                      "animate-always",
                    ),
                  };
                  withSpring2 = spring.withSpring;
                  spring;
                  items1[1] = obj4;
                  obj5 = ReanimatedRexport;
                  return obj;
                };
                let obj4 = {
                  interpolate: tmp(4618).interpolate,
                  launchPadSharedState,
                  withSpring: tmp(5604).withSpring,
                  windowDimensions: tmp10,
                  LAUNCH_PAD_SPRING_CONFIG,
                };
                const useAnimatedStyle = tmp(4618).useAnimatedStyle;
                tmp(4618);
                fn.__closure = obj4;
                fn.__workletHash = 5904359843866;
                fn.__initData = __initData3;
                const animatedStyle = useAnimatedStyle(fn);
                const _Symbol = Symbol;
                if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
                  let obj5 = { location: "guilds" };
                  cResult[7] = obj5;
                  tmp19 = obj5;
                } else {
                  tmp19 = cResult[7];
                }
                const MobileHomeDrawerExperiment = tmp(4748).MobileHomeDrawerExperiment;
                const enableHome = MobileHomeDrawerExperiment.useConfig(tmp19).enableHome;
                if (cResult[8] === tmp4.container) {
                  let tmp20;
                  if (cResult[9] === animatedStyle) {
                    tmp20 = cResult[10];
                  }
                  if (cResult[11] === children) {
                    let tmp21;
                    let tmp26;
                    if (cResult[12] === tmp20) {
                      tmp21 = cResult[13];
                    }
                    if (cResult[14] === enableHome) {
                      if (cResult[15] === gestureState) {
                        if (cResult[16] === launchPadPullTabState) {
                          if (cResult[17] === launchPadSharedState) {
                            if (cResult[18] === launchPadShown) {
                              if (cResult[19] === tmp6) {
                                let tmp24;
                                if (cResult[20] === updaters) {
                                  tmp24 = cResult[21];
                                }
                                if (cResult[22] === tmp4.wrapper) {
                                  if (cResult[23] === tmp21) {
                                    let tmp28;
                                    if (cResult[24] === tmp24) {
                                      tmp28 = cResult[25];
                                    }
                                    if (cResult[26] === gesture) {
                                      let tmp32;
                                      if (cResult[27] === tmp28) {
                                        tmp32 = cResult[28];
                                      }
                                      if (cResult[29] === gestureRef) {
                                        let tmp35;
                                        if (cResult[30] === tmp32) {
                                          tmp35 = cResult[31];
                                        }
                                        return tmp35;
                                      }
                                      const obj6 = { value: gestureRef, children: tmp32 };
                                      const tmp37 = closure_6(updaters(15969).Provider, obj6);
                                      class G {
                                        constructor() {
                                          return closure_2.get().height;
                                        }
                                      }
                                      cResult[29] = gestureRef;
                                      cResult[30] = tmp32;
                                      cResult[31] = tmp37;
                                      tmp35 = tmp37;
                                    }
                                    const obj7 = { gesture, children: tmp28 };
                                    const tmp34 = closure_6(tmp(6147).GestureDetector, obj7);
                                    class G {
                                      constructor() {
                                        return closure_2.get().height;
                                      }
                                    }
                                    cResult[26] = gesture;
                                    cResult[27] = tmp28;
                                    cResult[28] = tmp34;
                                    tmp32 = tmp34;
                                  }
                                }
                                const obj8 = { style: tmp4.wrapper, children: items };
                                items = [,];
                                class G {
                                  constructor() {
                                    return closure_2.get().height;
                                  }
                                }
                                items[1] = tmp24;
                                const tmp31 = closure_7(closure_3, obj8);
                                cResult[22] = tmp4.wrapper;
                                cResult[23] = tmp21;
                                class I {
                                  constructor(arg0, arg1) {
                                    if (null != arg1) {
                                      if (arg1 > arg0) {
                                        updaters.onWindowHeightChange();
                                      }
                                    }
                                  }
                                }
                                cResult[24] = tmp24;
                                cResult[25] = tmp31;
                                tmp28 = tmp31;
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
                      class G {
                        constructor() {
                          return closure_2.get().height;
                        }
                      }
                      tmp26 = closure_6(updaters(17414), obj9);
                    }
                    cResult[14] = enableHome;
                    class G {
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
                          if (arg1 > arg0) {
                            updaters.onWindowHeightChange();
                          }
                        }
                      }
                    }
                    cResult[20] = updaters;
                    cResult[21] = tmp26;
                    tmp24 = tmp26;
                  }
                  const obj10 = { style: tmp20, children };
                  const tmp23 = closure_6(updaters(4618).View, obj10);
                  class G {
                    constructor() {
                      return closure_2.get().height;
                    }
                  }
                  cResult[11] = children;
                  cResult[12] = tmp20;
                  cResult[13] = tmp23;
                  tmp21 = tmp23;
                }
                let items1 = [tmp4.container, animatedStyle];
                cResult[8] = tmp4.container;
                cResult[9] = animatedStyle;
                cResult[10] = items1;
                tmp20 = items1;
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
    }
  : (children) => {
      let GestureDetector;
      let closure_2;
      let gesture;
      let gestureRef;
      let gestureState;
      let items;
      let items1;
      let launchPadPullTabState;
      let launchPadShown;
      let obj5;
      let obj6;
      let tmp10Result;
      let updaters;
      updaters = undefined;
      children = children.children;
      const tmp = closure_8();
      const tmp2 = updaters;
      const tmp4 = updaters(11139)();
      const tmp5 = updaters(17411)();
      const launchPadSharedState = tmp5.launchPadSharedState;
      ({ launchPadPullTabState, launchPadShown, gestureState, updaters } = tmp5);
      ({ gesture, gestureRef } = updaters(17413)({
        launchPadType: tmp4,
        launchPadSharedState,
        launchPadPullTabState,
        launchPadShown,
        gestureState,
        updaters,
      }));
      updaters(17413)({
        launchPadType: tmp4,
        launchPadSharedState,
        launchPadPullTabState,
        launchPadShown,
        gestureState,
        updaters,
      });
      const tmp7 = updaters(11661)();
      dependencyMap = tmp7;
      let obj = launchPadSharedState(4618);
      const fn = function o() {
        return closure_2.get().height;
      };
      fn.__closure = { windowDimensions: tmp7 };
      fn.__workletHash = 14958452675779;
      fn.__initData = __initData4;
      const fn2 = function l(arg0, arg1) {
        if (null != arg1) {
          if (arg1 > arg0) {
            updaters.onWindowHeightChange();
          }
        }
      };
      fn2.__closure = { updaters };
      fn2.__workletHash = 8813829802392;
      fn2.__initData = __initData5;
      const animatedReaction = obj.useAnimatedReaction(fn, fn2);
      let obj2 = launchPadSharedState(4618);
      class R {
        constructor() {
          let interpolate;
          let items;
          let items1;
          let obj2;
          let obj5;
          let value;
          let withSpring;
          let withSpring2;
          const obj = {
            borderRadius: obj2.interpolate(launchPadSharedState.get(), [0, 1], [0, 16]),
            transform: items1,
          };
          obj2 = ReanimatedRexport;
          const obj3 = { scale: withSpring(interpolate(value, [0, 1], items), closure_4, "animate-always") };
          withSpring = spring.withSpring;
          spring;
          interpolate = ReanimatedRexport.interpolate;
          ReanimatedRexport;
          value = launchPadSharedState.get();
          const diff = closure_2.get().width - 48;
          items = [1, diff / closure_2.get().width];
          items1 = [obj3];
          const obj4 = {
            translateY: withSpring2(
              obj5.interpolate(launchPadSharedState.get(), [0, 1], [0, -4]),
              closure_4,
              "animate-always",
            ),
          };
          withSpring2 = spring.withSpring;
          spring;
          items1[1] = obj4;
          obj5 = ReanimatedRexport;
          return obj;
        }
      }
      let obj3 = {
        interpolate: launchPadSharedState(4618).interpolate,
        launchPadSharedState,
        withSpring: launchPadSharedState(5604).withSpring,
        windowDimensions: tmp7,
        LAUNCH_PAD_SPRING_CONFIG,
      };
      R.__closure = obj3;
      R.__workletHash = 12045260645805;
      R.__initData = __initData6;
      const animatedStyle = obj2.useAnimatedStyle(R);
      const MobileHomeDrawerExperiment = launchPadSharedState(4748).MobileHomeDrawerExperiment;
      const enableHome = MobileHomeDrawerExperiment.useConfig({ location: "guilds" }).enableHome;
      let obj4 = { value: gestureRef, children: closure_6(GestureDetector, obj5) };
      const Provider = updaters(15969).Provider;
      obj5 = { gesture, children: closure_7(closure_3, obj6) };
      obj6 = { style: tmp.wrapper, children: items1 };
      GestureDetector = launchPadSharedState(6147).GestureDetector;
      const obj7 = { style: items, children };
      items = [tmp.container, animatedStyle];
      items1 = [closure_6(updaters(4618).View, obj7)];
      if (tmp4 !== constants.DISABLED) {
        const obj8 = {
          launchPadType: tmp4,
          gestureState,
          launchPadShown,
          launchPadSharedState,
          launchPadPullTabState,
          updaters,
        };
        tmp10Result = closure_6(tmp2(17414), obj8);
      }
      items1[1] = tmp10Result;
      return closure_6(Provider, obj4);
    };
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadContainer.tsx");

export default tmp9;
