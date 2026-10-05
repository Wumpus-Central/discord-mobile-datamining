// discord_app/modules/voice_panel/native/controls/VoicePanelConsoleStatus.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import VoicePanelControlsConstants from "VoicePanelControlsConstants.tsx";
import VoicePanelConstants from "../../VoicePanelConstants.tsx";
import VoicePanelCardConstants from "../card/VoicePanelCardConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let obj1;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
const EDGE_GUTTER = VoicePanelCardConstants.EDGE_GUTTER;
const CONTROLS_HEIGHT = VoicePanelControlsConstants.CONTROLS_HEIGHT;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = 36;
let createStyles = createStyles_mod;
let obj = {
  consoleParentContainer: {
    zIndex: 1,
    position: "absolute",
    bottom: 0,
    overflow: "hidden",
    left: -0.5,
    right: 0,
    alignItems: "center",
  },
  consoleContainer: obj2,
  consoleItemContainer: { flexDirection: "row", alignItems: "center", height: 36, marginHorizontal: 18 },
  consoleText: { textAlign: "left", marginStart: 4, flex: 1 },
  blockingControlCover: obj3,
};
obj2 = { borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = {
  position: "absolute",
  bottom: 0,
  borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS,
  flex: 1,
  height: CONTROLS_HEIGHT,
  overflow: "hidden",
};
let closure_9 = createStyles(obj);
let obj4 = { overshootClamping: true };
let merged = Object.assign(MODE_CHANGE_PHYSICS);
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
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (cleanUp) => {
      let Text;
      let channelId;
      let color;
      let hiddenProps;
      let hiddenStyles;
      let icon;
      let items1;
      let items3;
      let mode;
      let obj8;
      let state;
      let text;
      let windowDimensions;
      let wrapperSpecs;
      let obj = state(windowDimensions[8]);
      const cResult = obj.c(39);
      ({ wrapperSpecs, state } = cleanUp);
      cleanUp = cleanUp.cleanUp;
      const accessoryHeights = cleanUp.accessoryHeights;
      const tmp4 = closure_9();
      const context = color.useContext(cleanUp(windowDimensions[9]));
      windowDimensions = context.windowDimensions;
      ({ mode, channelId } = context);
      const tmp7 = cleanUp(windowDimensions[10])(channelId);
      ({ icon, text, color } = tmp7);
      const displayCancel = tmp7.displayCancel;
      const obj3 = state(windowDimensions[11]);
      const sharedValue = obj3.useSharedValue(false);
      if (cResult[0] === sharedValue) {
        let tmp9;
        let tmp10;
        if (cResult[1] === state) {
          tmp9 = cResult[2];
          tmp10 = cResult[3];
        }
        const effect = color.useEffect(tmp9, tmp10);
        const tmp12 = cleanUp(windowDimensions[13])(mode, wrapperSpecs, accessoryHeights);
        ({ hiddenProps, hiddenStyles } = cleanUp(windowDimensions[14])(mode, wrapperSpecs));
        cleanUp(windowDimensions[14])(mode, wrapperSpecs);
        const tmpResult = state(windowDimensions[11]);
        class V {
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
            tmp3 = closure_0(closure_2[15]);
            withSpring = tmp3.withSpring;
            tmp4 = closure_4;
            num = 100;
            if (closure_4.get()) {
              num = 0;
            }
            obj1 = { translateY: null };
            fn = function n(arg0) {
              const tmp = arg0 && !sharedValue.get();
              if (tmp) {
                const obj = state(windowDimensions[11]);
                obj.runOnJS(cleanUp)();
              }
            };
            obj4 = { shouldShow: tmp4, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
            fn.__closure = obj4;
            fn.__workletHash = 9820708059867;
            fn.__initData = closure_12;
            obj1.translateY = withSpring(num, closure_10, "respect-motion-settings", fn);
            items = [];
            items[0] = obj1;
            size.transform = items;
            return size;
          }
        }
        obj4 = {
          color,
          windowDimensions,
          EDGE_GUTTER: sharedValue,
          CONTROLS_HEIGHT,
          CONSOLE_STATUS_HEIGHT,
          withSpring: state(windowDimensions[15]).withSpring,
          shouldShow: sharedValue,
          FADE_IN_MODE_PHYSICS: obj4,
          runOnJS: state(windowDimensions[11]).runOnJS,
          cleanUp,
        };
        const useAnimatedStyle = tmpResult.useAnimatedStyle;
        V.__closure = obj4;
        let num = 12149301111714;
        V.__workletHash = 12149301111714;
        V.__initData = __initData;
        const animatedStyle = useAnimatedStyle(V);
        const tmpResult2 = state(windowDimensions[11]);
        class L {
          constructor() {
            const obj = { width: windowDimensions.get().width - 2 * EDGE_GUTTER };
            return obj;
          }
        }
        const obj5 = { windowDimensions, EDGE_GUTTER: sharedValue };
        L.__closure = obj5;
        L.__workletHash = 2418678233810;
        L.__initData = __initData3;
        const animatedStyle1 = tmpResult2.useAnimatedStyle(L);
        if (cResult[4] === hiddenStyles) {
          if (cResult[5] === tmp4.consoleParentContainer) {
            let tmp23;
            let tmp24;
            let tmp25;
            if (cResult[6] === tmp12) {
              tmp23 = cResult[7];
            }
            if (cResult[8] !== tmp4.consoleContainer) {
              let items = [tmp4.consoleContainer];
              cResult[8] = tmp4.consoleContainer;
              cResult[9] = items;
              tmp24 = items;
            } else {
              tmp24 = cResult[9];
            }
            if (cResult[10] !== icon) {
              const obj6 = {
                source: icon,
                color: cleanUp(windowDimensions[6]).unsafe_rawColors.WHITE,
                size: state(windowDimensions[16]).IconSizes.SMALL,
              };
              const Icon = state(tmp2[16]).Icon;
              const tmp27 = closure_6(Icon, obj6);
              class V {
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
                  tmp3 = closure_0(closure_2[15]);
                  withSpring = tmp3.withSpring;
                  tmp4 = closure_4;
                  num = 100;
                  if (closure_4.get()) {
                    num = 0;
                  }
                  obj1 = { translateY: null };
                  fn = function n(arg0) {
                    const tmp = arg0 && !sharedValue.get();
                    if (tmp) {
                      const obj = state(windowDimensions[11]);
                      obj.runOnJS(cleanUp)();
                    }
                  };
                  obj4 = { shouldShow: tmp4, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                  fn.__closure = obj4;
                  fn.__workletHash = 9820708059867;
                  fn.__initData = closure_12;
                  obj1.translateY = withSpring(num, closure_10, "respect-motion-settings", fn);
                  items = [];
                  items[0] = obj1;
                  size.transform = items;
                  return size;
                }
              }
              cResult[10] = icon;
              cResult[11] = tmp27;
              tmp25 = tmp27;
            } else {
              tmp25 = cResult[11];
            }
            if (cResult[12] === tmp4.consoleText) {
              let tmp28;
              let tmp31;
              if (cResult[13] === text) {
                tmp28 = cResult[14];
              }
              if (cResult[15] !== displayCancel) {
                let tmp32 = null;
                if (displayCancel) {
                  const obj7 = {
                    hitSlop: 4,
                    onPress: state(windowDimensions[19]).disconnectRemote,
                    children: closure_6(Text, obj8),
                  };
                  const PressableOpacity = state(tmp2[18]).PressableOpacity;
                  obj8 = {
                    variant: "text-sm/medium",
                    color: "text-overlay-light",
                    children: tmp34(state(windowDimensions[20]).t["ETE/oC"]),
                  };
                  Text = state(tmp2[17]).Text;
                  const intl = state(tmp2[20]).intl;
                  class V {
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
                      tmp3 = closure_0(closure_2[15]);
                      withSpring = tmp3.withSpring;
                      tmp4 = closure_4;
                      num = 100;
                      if (closure_4.get()) {
                        num = 0;
                      }
                      obj1 = { translateY: null };
                      fn = function n(arg0) {
                        const tmp = arg0 && !sharedValue.get();
                        if (tmp) {
                          const obj = state(windowDimensions[11]);
                          obj.runOnJS(cleanUp)();
                        }
                      };
                      obj4 = { shouldShow: tmp4, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                      fn.__closure = obj4;
                      fn.__workletHash = 9820708059867;
                      fn.__initData = closure_12;
                      obj1.translateY = withSpring(num, closure_10, "respect-motion-settings", fn);
                      items = [];
                      items[0] = obj1;
                      size.transform = items;
                      return size;
                    }
                  }
                  tmp32 = closure_6(PressableOpacity, obj7);
                }
                cResult[15] = displayCancel;
                cResult[16] = tmp32;
                tmp31 = tmp32;
              } else {
                tmp31 = cResult[16];
              }
              if (cResult[17] === tmp4.consoleItemContainer) {
                if (cResult[18] === tmp25) {
                  if (cResult[19] === tmp28) {
                    let tmp35;
                    if (cResult[20] === tmp31) {
                      tmp35 = cResult[21];
                    }
                    if (cResult[22] === animatedStyle) {
                      let tmp38;
                      if (cResult[23] === tmp35) {
                        tmp38 = cResult[24];
                      }
                      if (cResult[25] === tmp24) {
                        let tmp41;
                        if (cResult[26] === tmp38) {
                          tmp41 = cResult[27];
                        }
                        if (cResult[28] === animatedStyle1) {
                          let tmp44;
                          let tmp46;
                          let tmp49;
                          if (cResult[29] === tmp4.blockingControlCover) {
                            tmp44 = cResult[30];
                          }
                          const _Symbol = Symbol;
                          if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                            const tmp48 = closure_6(state(windowDimensions[22]).VoicePanelVisualEffectView, {});
                            cResult[31] = tmp48;
                            tmp46 = tmp48;
                          } else {
                            tmp46 = cResult[31];
                          }
                          if (cResult[32] !== tmp44) {
                            const obj9 = { style: tmp44, children: tmp46 };
                            const tmp51 = closure_6(cleanUp(windowDimensions[11]).View, obj9);
                            cResult[32] = tmp44;
                            class V {
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
                                tmp3 = closure_0(closure_2[15]);
                                withSpring = tmp3.withSpring;
                                tmp4 = closure_4;
                                num = 100;
                                if (closure_4.get()) {
                                  num = 0;
                                }
                                obj1 = { translateY: null };
                                fn = function n(arg0) {
                                  const tmp = arg0 && !sharedValue.get();
                                  if (tmp) {
                                    const obj = state(windowDimensions[11]);
                                    obj.runOnJS(cleanUp)();
                                  }
                                };
                                obj4 = { shouldShow: tmp4, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                                fn.__closure = obj4;
                                fn.__workletHash = 9820708059867;
                                fn.__initData = closure_12;
                                obj1.translateY = withSpring(num, closure_10, "respect-motion-settings", fn);
                                items = [];
                                items[0] = obj1;
                                size.transform = items;
                                return size;
                              }
                            }
                            cResult[33] = tmp51;
                            tmp49 = tmp51;
                          } else {
                            tmp49 = cResult[33];
                          }
                          class V {
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
                              tmp3 = closure_0(closure_2[15]);
                              withSpring = tmp3.withSpring;
                              tmp4 = closure_4;
                              num = 100;
                              if (closure_4.get()) {
                                num = 0;
                              }
                              obj1 = { translateY: null };
                              fn = function n(arg0) {
                                const tmp = arg0 && !sharedValue.get();
                                if (tmp) {
                                  const obj = state(windowDimensions[11]);
                                  obj.runOnJS(cleanUp)();
                                }
                              };
                              obj4 = { shouldShow: tmp4, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                              fn.__closure = obj4;
                              fn.__workletHash = 9820708059867;
                              fn.__initData = closure_12;
                              obj1.translateY = withSpring(num, closure_10, "respect-motion-settings", fn);
                              items = [];
                              items[0] = obj1;
                              size.transform = items;
                              return size;
                            }
                          }
                          const obj10 = { style: tmp23, animatedProps: hiddenProps, children: items1 };
                          items1 = [tmp41, tmp49];
                          cResult[34] = hiddenProps;
                          cResult[35] = tmp41;
                          cResult[36] = tmp49;
                          cResult[37] = tmp23;
                          cResult[38] = closure_7(cleanUp(windowDimensions[11]).View, obj10);
                          const tmp54 = closure_7(cleanUp(windowDimensions[11]).View, obj10);
                        }
                        const items2 = [tmp4.blockingControlCover, animatedStyle1];
                        cResult[28] = animatedStyle1;
                        class V {
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
                            tmp3 = closure_0(closure_2[15]);
                            withSpring = tmp3.withSpring;
                            tmp4 = closure_4;
                            num = 100;
                            if (closure_4.get()) {
                              num = 0;
                            }
                            obj1 = { translateY: null };
                            fn = function n(arg0) {
                              const tmp = arg0 && !sharedValue.get();
                              if (tmp) {
                                const obj = state(windowDimensions[11]);
                                obj.runOnJS(cleanUp)();
                              }
                            };
                            obj4 = { shouldShow: tmp4, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                            fn.__closure = obj4;
                            fn.__workletHash = 9820708059867;
                            fn.__initData = closure_12;
                            obj1.translateY = withSpring(num, closure_10, "respect-motion-settings", fn);
                            items = [];
                            items[0] = obj1;
                            size.transform = items;
                            return size;
                          }
                        }
                        cResult[29] = tmp4.blockingControlCover;
                        cResult[30] = items2;
                        tmp44 = items2;
                      }
                      const obj11 = { style: tmp24, children: tmp38 };
                      const tmp43 = closure_6(cleanUp(windowDimensions[21]), obj11);
                      class V {
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
                          tmp3 = closure_0(closure_2[15]);
                          withSpring = tmp3.withSpring;
                          tmp4 = closure_4;
                          num = 100;
                          if (closure_4.get()) {
                            num = 0;
                          }
                          obj1 = { translateY: null };
                          fn = function n(arg0) {
                            const tmp = arg0 && !sharedValue.get();
                            if (tmp) {
                              const obj = state(windowDimensions[11]);
                              obj.runOnJS(cleanUp)();
                            }
                          };
                          obj4 = { shouldShow: tmp4, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                          fn.__closure = obj4;
                          fn.__workletHash = 9820708059867;
                          fn.__initData = closure_12;
                          obj1.translateY = withSpring(num, closure_10, "respect-motion-settings", fn);
                          items = [];
                          items[0] = obj1;
                          size.transform = items;
                          return size;
                        }
                      }
                      cResult[25] = tmp24;
                      cResult[26] = tmp38;
                      cResult[27] = tmp43;
                      tmp41 = tmp43;
                    }
                    const obj12 = { style: animatedStyle, children: tmp35 };
                    const tmp40 = closure_6(cleanUp(windowDimensions[11]).View, obj12);
                    class V {
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
                        tmp3 = closure_0(closure_2[15]);
                        withSpring = tmp3.withSpring;
                        tmp4 = closure_4;
                        num = 100;
                        if (closure_4.get()) {
                          num = 0;
                        }
                        obj1 = { translateY: null };
                        fn = function n(arg0) {
                          const tmp = arg0 && !sharedValue.get();
                          if (tmp) {
                            const obj = state(windowDimensions[11]);
                            obj.runOnJS(cleanUp)();
                          }
                        };
                        obj4 = { shouldShow: tmp4, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                        fn.__closure = obj4;
                        fn.__workletHash = 9820708059867;
                        fn.__initData = closure_12;
                        obj1.translateY = withSpring(num, closure_10, "respect-motion-settings", fn);
                        items = [];
                        items[0] = obj1;
                        size.transform = items;
                        return size;
                      }
                    }
                    cResult[22] = animatedStyle;
                    cResult[23] = tmp35;
                    cResult[24] = tmp40;
                    tmp38 = tmp40;
                  }
                }
              }
              const obj13 = { style: tmp4.consoleItemContainer, children: items3 };
              items3 = [, ,];
              class V {
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
                  tmp3 = closure_0(closure_2[15]);
                  withSpring = tmp3.withSpring;
                  tmp4 = closure_4;
                  num = 100;
                  if (closure_4.get()) {
                    num = 0;
                  }
                  obj1 = { translateY: null };
                  fn = function n(arg0) {
                    const tmp = arg0 && !sharedValue.get();
                    if (tmp) {
                      const obj = state(windowDimensions[11]);
                      obj.runOnJS(cleanUp)();
                    }
                  };
                  obj4 = { shouldShow: tmp4, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                  fn.__closure = obj4;
                  fn.__workletHash = 9820708059867;
                  fn.__initData = closure_12;
                  obj1.translateY = withSpring(num, closure_10, "respect-motion-settings", fn);
                  items = [];
                  items[0] = obj1;
                  size.transform = items;
                  return size;
                }
              }
              items3[1] = tmp28;
              items3[2] = tmp31;
              const tmp37 = closure_7(cleanUp(windowDimensions[21]), obj13);
              cResult[17] = tmp4.consoleItemContainer;
              cResult[18] = tmp25;
              cResult[19] = tmp28;
              cResult[20] = tmp31;
              cResult[21] = tmp37;
              tmp35 = tmp37;
            }
            const obj14 = {
              variant: "text-sm/medium",
              color: "text-overlay-light",
              style: tmp4.consoleText,
              children: null,
            };
            class V {
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
                tmp3 = closure_0(closure_2[15]);
                withSpring = tmp3.withSpring;
                tmp4 = closure_4;
                num = 100;
                if (closure_4.get()) {
                  num = 0;
                }
                obj1 = { translateY: null };
                fn = function n(arg0) {
                  const tmp = arg0 && !sharedValue.get();
                  if (tmp) {
                    const obj = state(windowDimensions[11]);
                    obj.runOnJS(cleanUp)();
                  }
                };
                obj4 = { shouldShow: tmp4, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                fn.__closure = obj4;
                fn.__workletHash = 9820708059867;
                fn.__initData = closure_12;
                obj1.translateY = withSpring(num, closure_10, "respect-motion-settings", fn);
                items = [];
                items[0] = obj1;
                size.transform = items;
                return size;
              }
            }
            const tmp30 = closure_6(state(windowDimensions[17]).Text, obj14);
            cResult[12] = tmp4.consoleText;
            cResult[13] = text;
            cResult[14] = tmp30;
            tmp28 = tmp30;
          }
        }
        const items4 = [tmp4.consoleParentContainer, tmp12, hiddenStyles];
        cResult[4] = hiddenStyles;
        cResult[5] = tmp4.consoleParentContainer;
        cResult[6] = tmp12;
        cResult[7] = items4;
        tmp23 = items4;
      }
      let fn = function l() {
        const result = sharedValue.set(state !== native.TransitionStates.YEETED);
      };
      const items5 = [sharedValue, state];
      cResult[0] = sharedValue;
      cResult[1] = state;
      cResult[2] = fn;
      cResult[3] = items5;
      tmp10 = items5;
      tmp9 = fn;
    }
  : (cleanUp) => {
      let Text;
      let View2;
      let channelId;
      let displayCancel;
      let hiddenProps;
      let hiddenStyles;
      let icon;
      let intl;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let mode;
      let obj12;
      let obj7;
      let obj8;
      let state;
      let text;
      let tmp16;
      let wrapperSpecs;
      ({ wrapperSpecs, state } = cleanUp);
      cleanUp = cleanUp.cleanUp;
      let windowDimensions;
      let color;
      const accessoryHeights = cleanUp.accessoryHeights;
      let tmp = closure_9();
      const tmp3 = windowDimensions;
      const context = color.useContext(cleanUp(windowDimensions[9]));
      windowDimensions = context.windowDimensions;
      ({ mode, channelId } = context);
      const tmp5 = cleanUp(windowDimensions[10])(channelId);
      color = tmp5.color;
      ({ icon, text, displayCancel } = tmp5);
      let obj = state(windowDimensions[11]);
      const sharedValue = obj.useSharedValue(false);
      let items = [sharedValue, state];
      const effect = color.useEffect(() => {
        const result = sharedValue.set(state !== native.TransitionStates.YEETED);
      }, items);
      const tmp9 = cleanUp(windowDimensions[13])(mode, wrapperSpecs, accessoryHeights);
      ({ hiddenProps, hiddenStyles } = cleanUp(windowDimensions[14])(mode, wrapperSpecs));
      cleanUp(windowDimensions[14])(mode, wrapperSpecs);
      const obj2 = state(windowDimensions[11]);
      let fn = function y() {
        let fn;
        let items;
        size = {
          backgroundColor: color,
          width: windowDimensions.get().width - 2 * EDGE_GUTTER,
          height: CONTROLS_HEIGHT + c8,
          borderRadius: 32,
          transform: items,
        };
        const withSpring = spring.withSpring;
        let num = 100;
        spring;
        if (sharedValue.get()) {
          num = 0;
        }
        let obj = { translateY: withSpring(num, obj4, "respect-motion-settings", fn) };
        fn = function n(arg0) {
          const tmp = arg0 && !sharedValue.get();
          if (tmp) {
            const obj = state(windowDimensions[11]);
            obj.runOnJS(cleanUp)();
          }
        };
        fn.__closure = { shouldShow: sharedValue, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
        fn.__workletHash = 14935952621052;
        fn.__initData = __initData;
        ({ shouldShow: sharedValue, runOnJS: ReanimatedRexport.runOnJS, cleanUp });
        items = [obj];
        return size;
      };
      fn.__closure = {
        color,
        windowDimensions,
        EDGE_GUTTER: sharedValue,
        CONTROLS_HEIGHT,
        CONSOLE_STATUS_HEIGHT,
        withSpring: state(windowDimensions[15]).withSpring,
        shouldShow: sharedValue,
        FADE_IN_MODE_PHYSICS: obj4,
        runOnJS: state(windowDimensions[11]).runOnJS,
        cleanUp,
      };
      fn.__workletHash = 5196360574855;
      fn.__initData = __initData4;
      ({
        color,
        windowDimensions,
        EDGE_GUTTER: sharedValue,
        CONTROLS_HEIGHT,
        CONSOLE_STATUS_HEIGHT,
        withSpring: state(windowDimensions[15]).withSpring,
        shouldShow: sharedValue,
        FADE_IN_MODE_PHYSICS: obj4,
        runOnJS: state(windowDimensions[11]).runOnJS,
        cleanUp,
      });
      const animatedStyle = obj2.useAnimatedStyle(fn);
      obj4 = state(windowDimensions[11]);
      const fn2 = function v() {
        const obj = { width: windowDimensions.get().width - 2 * EDGE_GUTTER };
        return obj;
      };
      fn2.__closure = { windowDimensions, EDGE_GUTTER: sharedValue };
      fn2.__workletHash = 14137865326839;
      fn2.__initData = __initData5;
      const animatedStyle1 = obj4.useAnimatedStyle(fn2);
      const obj5 = { style: items1, animatedProps: hiddenProps, children: items4 };
      items1 = [tmp.consoleParentContainer, tmp9, hiddenStyles];
      const View = cleanUp(windowDimensions[11]).View;
      const obj6 = { style: items2, children: closure_6(View2, obj7) };
      items2 = [tmp.consoleContainer];
      obj7 = { style: animatedStyle, children: closure_7(tmp16, obj8) };
      const tmp15 = cleanUp(windowDimensions[21]);
      View2 = cleanUp(windowDimensions[11]).View;
      obj8 = { style: tmp.consoleItemContainer, children: items3 };
      const obj9 = {
        source: icon,
        color: cleanUp(windowDimensions[6]).unsafe_rawColors.WHITE,
        size: state(windowDimensions[16]).IconSizes.SMALL,
      };
      tmp16 = cleanUp(windowDimensions[21]);
      const Icon = state(windowDimensions[16]).Icon;
      items3 = [closure_6(Icon, obj9), ,];
      const obj10 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.consoleText, children: text };
      items3[1] = closure_6(state(windowDimensions[17]).Text, obj10);
      let tmp14Result = null;
      const tmp2 = cleanUp;
      if (displayCancel) {
        const obj11 = { hitSlop: 4, onPress: state(tmp3[19]).disconnectRemote, children: closure_6(Text, obj12) };
        const PressableOpacity = state(tmp3[18]).PressableOpacity;
        obj12 = {
          variant: "text-sm/medium",
          color: "text-overlay-light",
          children: intl.string(state(tmp3[20]).t["ETE/oC"]),
        };
        Text = state(tmp3[17]).Text;
        intl = state(tmp3[20]).intl;
        tmp14Result = closure_6(PressableOpacity, obj11);
      }
      items3[2] = tmp14Result;
      items4 = [closure_6(tmp15, obj6)];
      const obj13 = { style: items5, children: closure_6(state(tmp3[22]).VoicePanelVisualEffectView, {}) };
      items5 = [tmp.blockingControlCover, animatedStyle1];
      const View3 = tmp2(tmp3[11]).View;
      items4[1] = closure_6(View3, obj13);
      return closure_7(View, obj5);
    };
let closure_17 = tmp5;
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelConsoleStatus.tsx");

export default tmp5;
export const CONSOLE_STATUS_HEIGHT = 36;
export const renderVoicePanelConsoleStatus = function renderVoicePanelConsoleStatus(id, arg1, state, cleanUp) {
  const obj = { state, cleanUp };
  const merged = Object.assign(arg1);
  return metroRequire(closure_17, obj, id);
};
