// discord_app/modules/voice_panel/native/controls/VoicePanelConsoleStatus.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const EDGE_GUTTER = fn(11929).EDGE_GUTTER;
const CONTROLS_HEIGHT = fn(11924).CONTROLS_HEIGHT;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = 36;
const createStyles = fn(5091);
let obj2 = {
  consoleParentContainer: {
    zIndex: 1,
    position: "absolute",
    bottom: 0,
    overflow: "hidden",
    left: -0.5,
    right: 0,
    alignItems: "center",
  },
  consoleContainer: {
    borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS,
    overflow: "hidden",
  },
  consoleItemContainer: { flexDirection: "row", alignItems: "center", height: 36, marginHorizontal: 18 },
  consoleText: { textAlign: "left", marginStart: 4, flex: 1 },
  blockingControlCover: null,
};
let obj3 = { borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS, overflow: "hidden" };
obj2.blockingControlCover = {
  position: "absolute",
  bottom: 0,
  borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS,
  flex: 1,
  height: CONTROLS_HEIGHT,
  overflow: "hidden",
};
let closure_9 = createStyles.createStyles(obj2);
let obj5 = {};
let merged = Object.assign(fn(11926).MODE_CHANGE_PHYSICS);
obj5.overshootClamping = true;
const __initData = {
  code: 'function VoicePanelConsoleStatusTsx1(){const{color,windowDimensions,EDGE_GUTTER,CONTROLS_HEIGHT,CONSOLE_STATUS_HEIGHT,withSpring,shouldShow,FADE_IN_MODE_PHYSICS,runOnJS,cleanUp}=this.__closure;return{backgroundColor:color,width:windowDimensions.get().width-EDGE_GUTTER*2,height:CONTROLS_HEIGHT+CONSOLE_STATUS_HEIGHT,borderRadius:32,transform:[{translateY:withSpring(shouldShow.get()?0:100,FADE_IN_MODE_PHYSICS,"respect-motion-settings",function(finished){if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}})}]};}',
};
const __initData2 = {
  code: "function VoicePanelConsoleStatusTsx2(finished){const{shouldShow,runOnJS,cleanUp}=this.__closure;if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}}",
};
const __initData3 = {
  code: "function VoicePanelConsoleStatusTsx3(){const{windowDimensions,EDGE_GUTTER}=this.__closure;return{width:windowDimensions.get().width-EDGE_GUTTER*2};}",
};
const __initData4 = {
  code: "function VoicePanelConsoleStatusTsx4(){const{color,windowDimensions,EDGE_GUTTER,CONTROLS_HEIGHT,CONSOLE_STATUS_HEIGHT,withSpring,shouldShow,FADE_IN_MODE_PHYSICS,runOnJS,cleanUp}=this.__closure;return{backgroundColor:color,width:windowDimensions.get().width-EDGE_GUTTER*2,height:CONTROLS_HEIGHT+CONSOLE_STATUS_HEIGHT,borderRadius:32,transform:[{translateY:withSpring(shouldShow.get()?0:100,FADE_IN_MODE_PHYSICS,'respect-motion-settings',function(finished){if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}})}]};}",
};
let closure_15 = {
  code: "function VoicePanelConsoleStatusTsx5(finished){const{shouldShow,runOnJS,cleanUp}=this.__closure;if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}}",
};
const __initData5 = {
  code: "function VoicePanelConsoleStatusTsx6(){const{windowDimensions,EDGE_GUTTER}=this.__closure;return{width:windowDimensions.get().width-EDGE_GUTTER*2};}",
};
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function VoicePanelConsoleStatus(cleanUp) {
      const cResult = state(windowDimensions[8]).c(37);
      ({ wrapperSpecs, state } = cleanUp);
      cleanUp = cleanUp.cleanUp;
      const tmp4 = closure_9();
      const context = color.useContext(cleanUp(windowDimensions[9]));
      windowDimensions = context.windowDimensions;
      ({ mode, channelId } = context);
      const tmp7 = cleanUp(windowDimensions[10])(channelId);
      ({ icon, text, color } = tmp7);
      const displayCancel = tmp7.displayCancel;
      let obj = state(windowDimensions[8]);
      const sharedValue = state(windowDimensions[11]).useSharedValue(false);
      if (cResult[0] === sharedValue) {
        if (cResult[1] === state) {
          let tmp9 = cResult[2];
          let tmp10 = cResult[3];
        }
        const effect = color.useEffect(tmp9, tmp10);
        const tmp12 = tmp5(tmp2[13])(mode, wrapperSpecs, cleanUp.accessoryHeights);
        ({ hiddenProps, hiddenStyles } = tmp5(tmp2[14])(mode, wrapperSpecs));
        const tmp13 = tmp5(tmp2[14])(mode, wrapperSpecs);
        class N {
          constructor() {
            size = {
              backgroundColor: color,
              width: windowDimensions.get().width - 2 * EDGE_GUTTER,
              height: CONTROLS_HEIGHT + c8,
              borderRadius: 32,
              transform: null,
            };
            tmp = closure_0;
            tmp2 = closure_2;
            obj2 = closure_0(closure_2[15]);
            tmp3 = closure_4;
            num = 100;
            if (closure_4.get()) {
              num = 0;
            }
            obj1 = { translateY: null };
            fn = function n(arg0) {
              let tmp = arg0;
              if (arg0) {
                tmp = !sharedValue.get();
              }
              if (tmp) {
                state(windowDimensions[11]).runOnJS(cleanUp)();
                const obj = state(windowDimensions[11]);
              }
            };
            obj5 = { shouldShow: tmp3, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
            fn.__closure = obj5;
            fn.__workletHash = 9820708059867;
            fn.__initData = closure_12;
            obj1.translateY = obj2.withSpring(num, closure_10, "respect-motion-settings", fn);
            items = [];
            items[0] = obj1;
            size.transform = items;
            return size;
          }
        }
        const obj4 = {
          color,
          windowDimensions,
          EDGE_GUTTER: sharedValue,
          CONTROLS_HEIGHT,
          CONSOLE_STATUS_HEIGHT,
          withSpring: state(tmp2[15]).withSpring,
          shouldShow: sharedValue,
          FADE_IN_MODE_PHYSICS: obj5,
          runOnJS: state(tmp2[11]).runOnJS,
          cleanUp,
        };
        N.__closure = obj4;
        N.__workletHash = 12149301111714;
        N.__initData = __initData;
        const animatedStyle = state(tmp2[11]).useAnimatedStyle(N);
        const tmpResult = state(tmp2[11]);
        class L {
          constructor() {
            obj = { width: windowDimensions.get().width - 2 * EDGE_GUTTER };
            return obj;
          }
        }
        obj5 = { windowDimensions, EDGE_GUTTER: sharedValue };
        L.__closure = obj5;
        L.__workletHash = 2418678233810;
        L.__initData = __initData3;
        const animatedStyle1 = state(tmp2[11]).useAnimatedStyle(L);
        if (cResult[4] === hiddenStyles) {
          if (cResult[5] === tmp4.consoleParentContainer) {
            if (cResult[6] === tmp12) {
              let tmp22 = cResult[7];
            }
            if (cResult[8] !== icon) {
              const obj6 = {
                source: icon,
                color: tmp5(tmp2[6]).unsafe_rawColors.WHITE,
                size: state(tmp2[16]).IconSizes.SMALL,
              };
              const tmp25 = closure_6(state(tmp2[16]).Icon, obj6);
              class N {
                constructor() {
                  size = {
                    backgroundColor: color,
                    width: windowDimensions.get().width - 2 * EDGE_GUTTER,
                    height: CONTROLS_HEIGHT + c8,
                    borderRadius: 32,
                    transform: null,
                  };
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj2 = closure_0(closure_2[15]);
                  tmp3 = closure_4;
                  num = 100;
                  if (closure_4.get()) {
                    num = 0;
                  }
                  obj1 = { translateY: null };
                  fn = function n(arg0) {
                    let tmp = arg0;
                    if (arg0) {
                      tmp = !sharedValue.get();
                    }
                    if (tmp) {
                      state(windowDimensions[11]).runOnJS(cleanUp)();
                      const obj = state(windowDimensions[11]);
                    }
                  };
                  obj5 = { shouldShow: tmp3, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                  fn.__closure = obj5;
                  fn.__workletHash = 9820708059867;
                  fn.__initData = closure_12;
                  obj1.translateY = obj2.withSpring(num, closure_10, "respect-motion-settings", fn);
                  items = [];
                  items[0] = obj1;
                  size.transform = items;
                  return size;
                }
              }
              cResult[8] = icon;
              cResult[9] = tmp25;
              let tmp23 = tmp25;
            } else {
              tmp23 = cResult[9];
            }
            if (cResult[10] === tmp4.consoleText) {
              if (cResult[11] === text) {
                let tmp26 = cResult[12];
              }
              if (cResult[13] !== displayCancel) {
                let tmp30 = null;
                if (displayCancel) {
                  const obj7 = { hitSlop: 4, onPress: state(tmp2[19]).disconnectRemote, children: null };
                  const obj8 = { variant: "text-sm/medium", color: "text-overlay-light", children: null };
                  class N {
                    constructor() {
                      size = {
                        backgroundColor: color,
                        width: windowDimensions.get().width - 2 * EDGE_GUTTER,
                        height: CONTROLS_HEIGHT + c8,
                        borderRadius: 32,
                        transform: null,
                      };
                      tmp = closure_0;
                      tmp2 = closure_2;
                      obj2 = closure_0(closure_2[15]);
                      tmp3 = closure_4;
                      num = 100;
                      if (closure_4.get()) {
                        num = 0;
                      }
                      obj1 = { translateY: null };
                      fn = function n(arg0) {
                        let tmp = arg0;
                        if (arg0) {
                          tmp = !sharedValue.get();
                        }
                        if (tmp) {
                          state(windowDimensions[11]).runOnJS(cleanUp)();
                          const obj = state(windowDimensions[11]);
                        }
                      };
                      obj5 = { shouldShow: tmp3, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                      fn.__closure = obj5;
                      fn.__workletHash = 9820708059867;
                      fn.__initData = closure_12;
                      obj1.translateY = obj2.withSpring(num, closure_10, "respect-motion-settings", fn);
                      items = [];
                      items[0] = obj1;
                      size.transform = items;
                      return size;
                    }
                  }
                  obj8.children = tmp32(state(tmp2[20]).t["ETE/oC"]);
                  obj7.children = closure_6(state(tmp2[17]).Text, obj8);
                  tmp30 = closure_6(state(tmp2[18]).PressableOpacity, obj7);
                }
                cResult[13] = displayCancel;
                cResult[14] = tmp30;
                let tmp29 = tmp30;
              } else {
                tmp29 = cResult[14];
              }
              if (cResult[15] === tmp4.consoleItemContainer) {
                if (cResult[16] === tmp23) {
                  if (cResult[17] === tmp26) {
                    if (cResult[18] === tmp29) {
                      let tmp33 = cResult[19];
                    }
                    if (cResult[20] === animatedStyle) {
                      if (cResult[21] === tmp33) {
                        let tmp36 = cResult[22];
                      }
                      if (cResult[23] === tmp4.consoleContainer) {
                        if (cResult[24] === tmp36) {
                          let tmp39 = cResult[25];
                        }
                        if (cResult[26] === animatedStyle1) {
                          if (cResult[27] === tmp4.blockingControlCover) {
                            let tmp42 = cResult[28];
                          }
                          const _Symbol = Symbol;
                          if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                            const tmp46 = closure_6(state(tmp2[22]).VoicePanelVisualEffectView, {});
                            cResult[29] = tmp46;
                            let tmp44 = tmp46;
                          } else {
                            tmp44 = cResult[29];
                          }
                          if (cResult[30] !== tmp42) {
                            const obj9 = { style: tmp42, children: tmp44 };
                            const tmp49 = closure_6(tmp5(tmp2[11]).View, obj9);
                            cResult[30] = tmp42;
                            class N {
                              constructor() {
                                size = {
                                  backgroundColor: color,
                                  width: windowDimensions.get().width - 2 * EDGE_GUTTER,
                                  height: CONTROLS_HEIGHT + c8,
                                  borderRadius: 32,
                                  transform: null,
                                };
                                tmp = closure_0;
                                tmp2 = closure_2;
                                obj2 = closure_0(closure_2[15]);
                                tmp3 = closure_4;
                                num = 100;
                                if (closure_4.get()) {
                                  num = 0;
                                }
                                obj1 = { translateY: null };
                                fn = function n(arg0) {
                                  let tmp = arg0;
                                  if (arg0) {
                                    tmp = !sharedValue.get();
                                  }
                                  if (tmp) {
                                    state(windowDimensions[11]).runOnJS(cleanUp)();
                                    const obj = state(windowDimensions[11]);
                                  }
                                };
                                obj5 = { shouldShow: tmp3, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                                fn.__closure = obj5;
                                fn.__workletHash = 9820708059867;
                                fn.__initData = closure_12;
                                obj1.translateY = obj2.withSpring(num, closure_10, "respect-motion-settings", fn);
                                items = [];
                                items[0] = obj1;
                                size.transform = items;
                                return size;
                              }
                            }
                            cResult[31] = tmp49;
                            let tmp47 = tmp49;
                          } else {
                            tmp47 = cResult[31];
                          }
                          class N {
                            constructor() {
                              size = {
                                backgroundColor: color,
                                width: windowDimensions.get().width - 2 * EDGE_GUTTER,
                                height: CONTROLS_HEIGHT + c8,
                                borderRadius: 32,
                                transform: null,
                              };
                              tmp = closure_0;
                              tmp2 = closure_2;
                              obj2 = closure_0(closure_2[15]);
                              tmp3 = closure_4;
                              num = 100;
                              if (closure_4.get()) {
                                num = 0;
                              }
                              obj1 = { translateY: null };
                              fn = function n(arg0) {
                                let tmp = arg0;
                                if (arg0) {
                                  tmp = !sharedValue.get();
                                }
                                if (tmp) {
                                  state(windowDimensions[11]).runOnJS(cleanUp)();
                                  const obj = state(windowDimensions[11]);
                                }
                              };
                              obj5 = { shouldShow: tmp3, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                              fn.__closure = obj5;
                              fn.__workletHash = 9820708059867;
                              fn.__initData = closure_12;
                              obj1.translateY = obj2.withSpring(num, closure_10, "respect-motion-settings", fn);
                              items = [];
                              items[0] = obj1;
                              size.transform = items;
                              return size;
                            }
                          }
                          const obj10 = { style: tmp22, animatedProps: hiddenProps, children: null };
                          let items = [tmp39, tmp47];
                          obj10.children = items;
                          const tmp52 = closure_7(tmp5(tmp2[11]).View, obj10);
                          cResult[32] = hiddenProps;
                          cResult[33] = tmp47;
                          cResult[34] = tmp22;
                          cResult[35] = tmp39;
                          cResult[36] = tmp52;
                        }
                        const items1 = [tmp4.blockingControlCover, animatedStyle1];
                        cResult[26] = animatedStyle1;
                        class N {
                          constructor() {
                            size = {
                              backgroundColor: color,
                              width: windowDimensions.get().width - 2 * EDGE_GUTTER,
                              height: CONTROLS_HEIGHT + c8,
                              borderRadius: 32,
                              transform: null,
                            };
                            tmp = closure_0;
                            tmp2 = closure_2;
                            obj2 = closure_0(closure_2[15]);
                            tmp3 = closure_4;
                            num = 100;
                            if (closure_4.get()) {
                              num = 0;
                            }
                            obj1 = { translateY: null };
                            fn = function n(arg0) {
                              let tmp = arg0;
                              if (arg0) {
                                tmp = !sharedValue.get();
                              }
                              if (tmp) {
                                state(windowDimensions[11]).runOnJS(cleanUp)();
                                const obj = state(windowDimensions[11]);
                              }
                            };
                            obj5 = { shouldShow: tmp3, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                            fn.__closure = obj5;
                            fn.__workletHash = 9820708059867;
                            fn.__initData = closure_12;
                            obj1.translateY = obj2.withSpring(num, closure_10, "respect-motion-settings", fn);
                            items = [];
                            items[0] = obj1;
                            size.transform = items;
                            return size;
                          }
                        }
                        cResult[27] = tmp4.blockingControlCover;
                        cResult[28] = items1;
                        tmp42 = items1;
                      }
                      const obj11 = { style: tmp4.consoleContainer, children: tmp36 };
                      const tmp41 = closure_6(tmp5(tmp2[21]), obj11);
                      class N {
                        constructor() {
                          size = {
                            backgroundColor: color,
                            width: windowDimensions.get().width - 2 * EDGE_GUTTER,
                            height: CONTROLS_HEIGHT + c8,
                            borderRadius: 32,
                            transform: null,
                          };
                          tmp = closure_0;
                          tmp2 = closure_2;
                          obj2 = closure_0(closure_2[15]);
                          tmp3 = closure_4;
                          num = 100;
                          if (closure_4.get()) {
                            num = 0;
                          }
                          obj1 = { translateY: null };
                          fn = function n(arg0) {
                            let tmp = arg0;
                            if (arg0) {
                              tmp = !sharedValue.get();
                            }
                            if (tmp) {
                              state(windowDimensions[11]).runOnJS(cleanUp)();
                              const obj = state(windowDimensions[11]);
                            }
                          };
                          obj5 = { shouldShow: tmp3, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                          fn.__closure = obj5;
                          fn.__workletHash = 9820708059867;
                          fn.__initData = closure_12;
                          obj1.translateY = obj2.withSpring(num, closure_10, "respect-motion-settings", fn);
                          items = [];
                          items[0] = obj1;
                          size.transform = items;
                          return size;
                        }
                      }
                      cResult[23] = tmp4.consoleContainer;
                      cResult[24] = tmp36;
                      cResult[25] = tmp41;
                      tmp39 = tmp41;
                    }
                    const obj12 = { style: animatedStyle, children: tmp33 };
                    const tmp38 = closure_6(tmp5(tmp2[11]).View, obj12);
                    class N {
                      constructor() {
                        size = {
                          backgroundColor: color,
                          width: windowDimensions.get().width - 2 * EDGE_GUTTER,
                          height: CONTROLS_HEIGHT + c8,
                          borderRadius: 32,
                          transform: null,
                        };
                        tmp = closure_0;
                        tmp2 = closure_2;
                        obj2 = closure_0(closure_2[15]);
                        tmp3 = closure_4;
                        num = 100;
                        if (closure_4.get()) {
                          num = 0;
                        }
                        obj1 = { translateY: null };
                        fn = function n(arg0) {
                          let tmp = arg0;
                          if (arg0) {
                            tmp = !sharedValue.get();
                          }
                          if (tmp) {
                            state(windowDimensions[11]).runOnJS(cleanUp)();
                            const obj = state(windowDimensions[11]);
                          }
                        };
                        obj5 = { shouldShow: tmp3, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                        fn.__closure = obj5;
                        fn.__workletHash = 9820708059867;
                        fn.__initData = closure_12;
                        obj1.translateY = obj2.withSpring(num, closure_10, "respect-motion-settings", fn);
                        items = [];
                        items[0] = obj1;
                        size.transform = items;
                        return size;
                      }
                    }
                    cResult[20] = animatedStyle;
                    cResult[21] = tmp33;
                    cResult[22] = tmp38;
                    tmp36 = tmp38;
                  }
                }
              }
              const obj13 = { style: tmp4.consoleItemContainer, children: null };
              const items2 = [, ,];
              class N {
                constructor() {
                  size = {
                    backgroundColor: color,
                    width: windowDimensions.get().width - 2 * EDGE_GUTTER,
                    height: CONTROLS_HEIGHT + c8,
                    borderRadius: 32,
                    transform: null,
                  };
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj2 = closure_0(closure_2[15]);
                  tmp3 = closure_4;
                  num = 100;
                  if (closure_4.get()) {
                    num = 0;
                  }
                  obj1 = { translateY: null };
                  fn = function n(arg0) {
                    let tmp = arg0;
                    if (arg0) {
                      tmp = !sharedValue.get();
                    }
                    if (tmp) {
                      state(windowDimensions[11]).runOnJS(cleanUp)();
                      const obj = state(windowDimensions[11]);
                    }
                  };
                  obj5 = { shouldShow: tmp3, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                  fn.__closure = obj5;
                  fn.__workletHash = 9820708059867;
                  fn.__initData = closure_12;
                  obj1.translateY = obj2.withSpring(num, closure_10, "respect-motion-settings", fn);
                  items = [];
                  items[0] = obj1;
                  size.transform = items;
                  return size;
                }
              }
              items2[1] = tmp26;
              items2[2] = tmp29;
              obj13.children = items2;
              const tmp35 = closure_7(tmp5(tmp2[21]), obj13);
              cResult[15] = tmp4.consoleItemContainer;
              cResult[16] = tmp23;
              cResult[17] = tmp26;
              cResult[18] = tmp29;
              cResult[19] = tmp35;
              tmp33 = tmp35;
            }
            const obj14 = {
              variant: "text-sm/medium",
              color: "text-overlay-light",
              style: tmp4.consoleText,
              children: text,
            };
            class N {
              constructor() {
                size = {
                  backgroundColor: color,
                  width: windowDimensions.get().width - 2 * EDGE_GUTTER,
                  height: CONTROLS_HEIGHT + c8,
                  borderRadius: 32,
                  transform: null,
                };
                tmp = closure_0;
                tmp2 = closure_2;
                obj2 = closure_0(closure_2[15]);
                tmp3 = closure_4;
                num = 100;
                if (closure_4.get()) {
                  num = 0;
                }
                obj1 = { translateY: null };
                fn = function n(arg0) {
                  let tmp = arg0;
                  if (arg0) {
                    tmp = !sharedValue.get();
                  }
                  if (tmp) {
                    state(windowDimensions[11]).runOnJS(cleanUp)();
                    const obj = state(windowDimensions[11]);
                  }
                };
                obj5 = { shouldShow: tmp3, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                fn.__closure = obj5;
                fn.__workletHash = 9820708059867;
                fn.__initData = closure_12;
                obj1.translateY = obj2.withSpring(num, closure_10, "respect-motion-settings", fn);
                items = [];
                items[0] = obj1;
                size.transform = items;
                return size;
              }
            }
            cResult[10] = tmp4.consoleText;
            cResult[11] = text;
            cResult[12] = tmp28;
            tmp26 = tmp28;
          }
        }
        const items3 = [tmp4.consoleParentContainer, tmp12, hiddenStyles];
        cResult[4] = hiddenStyles;
        cResult[5] = tmp4.consoleParentContainer;
        cResult[6] = tmp12;
        cResult[7] = items3;
        tmp22 = items3;
        const tmpResult2 = state(tmp2[11]);
      }
      let fn = function l() {
        const result = sharedValue.set(state !== native.TransitionStates.YEETED);
      };
      const items4 = [sharedValue, state];
      cResult[0] = sharedValue;
      cResult[1] = state;
      cResult[2] = fn;
      cResult[3] = items4;
      tmp10 = items4;
      tmp9 = fn;
      const obj3 = state(windowDimensions[11]);
    }
  : function VoicePanelConsoleStatus(cleanUp) {
      ({ wrapperSpecs, state } = cleanUp);
      cleanUp = cleanUp.cleanUp;
      let windowDimensions;
      let color;
      let tmp = closure_9();
      const context = color.useContext(cleanUp(windowDimensions[9]));
      windowDimensions = context.windowDimensions;
      ({ mode, channelId } = context);
      const tmp5 = cleanUp(windowDimensions[10])(channelId);
      color = tmp5.color;
      ({ icon, text, displayCancel } = tmp5);
      const sharedValue = state(windowDimensions[11]).useSharedValue(false);
      let items = [sharedValue, state];
      const effect = color.useEffect(() => {
        const result = sharedValue.set(state !== native.TransitionStates.YEETED);
      }, items);
      let obj = state(windowDimensions[11]);
      const tmp2 = cleanUp;
      const tmp9 = cleanUp(windowDimensions[13])(mode, wrapperSpecs, cleanUp.accessoryHeights);
      ({ hiddenProps, hiddenStyles } = cleanUp(windowDimensions[14])(mode, wrapperSpecs));
      const tmp10 = cleanUp(windowDimensions[14])(mode, wrapperSpecs);
      let fn = function y() {
        const size = {
          backgroundColor: color,
          width: windowDimensions.get().width - 2 * EDGE_GUTTER,
          height: CONTROLS_HEIGHT + c8,
          borderRadius: 32,
          transform: null,
        };
        let num = 100;
        if (sharedValue.get()) {
          num = 0;
        }
        let obj = { translateY: null };
        const fn = function n(arg0) {
          let tmp = arg0;
          if (arg0) {
            tmp = !sharedValue.get();
          }
          if (tmp) {
            state(windowDimensions[11]).runOnJS(cleanUp)();
            const obj = state(windowDimensions[11]);
          }
        };
        const obj2 = spring;
        fn.__closure = { shouldShow: sharedValue, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
        fn.__workletHash = 14935952621052;
        fn.__initData = __initData;
        obj.translateY = obj2.withSpring(num, obj5, "respect-motion-settings", fn);
        const items = [obj];
        size.transform = items;
        return size;
      };
      let obj2 = state(windowDimensions[11]);
      fn.__closure = {
        color,
        windowDimensions,
        EDGE_GUTTER: sharedValue,
        CONTROLS_HEIGHT,
        CONSOLE_STATUS_HEIGHT,
        withSpring: state(windowDimensions[15]).withSpring,
        shouldShow: sharedValue,
        FADE_IN_MODE_PHYSICS: obj5,
        runOnJS: state(windowDimensions[11]).runOnJS,
        cleanUp,
      };
      fn.__workletHash = 5196360574855;
      fn.__initData = __initData4;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      const obj3 = {
        color,
        windowDimensions,
        EDGE_GUTTER: sharedValue,
        CONTROLS_HEIGHT,
        CONSOLE_STATUS_HEIGHT,
        withSpring: state(windowDimensions[15]).withSpring,
        shouldShow: sharedValue,
        FADE_IN_MODE_PHYSICS: obj5,
        runOnJS: state(windowDimensions[11]).runOnJS,
        cleanUp,
      };
      const fn2 = function v() {
        return { width: windowDimensions.get().width - 2 * EDGE_GUTTER };
      };
      fn2.__closure = { windowDimensions, EDGE_GUTTER: sharedValue };
      fn2.__workletHash = 14137865326839;
      fn2.__initData = __initData5;
      const animatedStyle1 = state(windowDimensions[11]).useAnimatedStyle(fn2);
      obj5 = { style: null, animatedProps: hiddenProps, children: null };
      const items1 = [tmp.consoleParentContainer, tmp9, hiddenStyles];
      obj5.style = items1;
      const obj6 = { style: tmp.consoleContainer, children: null };
      const obj4 = state(windowDimensions[11]);
      const obj7 = { style: animatedStyle, children: null };
      const obj8 = { style: tmp.consoleItemContainer, children: null };
      const tmp15 = cleanUp(windowDimensions[21]);
      const tmp16 = cleanUp(windowDimensions[21]);
      const items2 = [
        closure_6(state(windowDimensions[16]).Icon, {
          source: icon,
          color: cleanUp(windowDimensions[6]).unsafe_rawColors.WHITE,
          size: state(windowDimensions[16]).IconSizes.SMALL,
        }),
        closure_6(state(windowDimensions[17]).Text, {
          variant: "text-sm/medium",
          color: "text-overlay-light",
          style: tmp.consoleText,
          children: text,
        }),
      ];
      let tmp14Result = null;
      if (displayCancel) {
        const obj11 = { hitSlop: 4, onPress: state(tmp3[19]).disconnectRemote, children: null };
        const obj12 = { variant: "text-sm/medium", color: "text-overlay-light", children: null };
        const intl = state(tmp3[20]).intl;
        obj12.children = intl.string(state(tmp3[20]).t["ETE/oC"]);
        obj11.children = closure_6(state(tmp3[17]).Text, obj12);
        tmp14Result = closure_6(state(tmp3[18]).PressableOpacity, obj11);
      }
      items2[2] = tmp14Result;
      obj8.children = items2;
      obj7.children = closure_7(tmp16, obj8);
      obj6.children = closure_6(cleanUp(windowDimensions[11]).View, obj7);
      const items3 = [closure_6(tmp15, obj6)];
      const obj13 = { style: null, children: closure_6(state(windowDimensions[22]).VoicePanelVisualEffectView, {}) };
      const items4 = [tmp.blockingControlCover, animatedStyle1];
      obj13.style = items4;
      items3[1] = closure_6(tmp2(windowDimensions[11]).View, obj13);
      obj5.children = items3;
      return closure_7(cleanUp(windowDimensions[11]).View, obj5);
    };
let closure_17 = tmp4;
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelConsoleStatus.tsx");

export default tmp4;
export const CONSOLE_STATUS_HEIGHT = 36;
export const renderVoicePanelConsoleStatus = function renderVoicePanelConsoleStatus(arg0, arg1, state, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.state = state;
  obj.cleanUp = cleanUp;
  return timestampProducer(closure_17, obj, arg0);
};
