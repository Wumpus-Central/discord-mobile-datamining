// === Module 17322: VoicePanelConsoleStatus ===

// Module 17322 (VoicePanelConsoleStatus)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 4589 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import noop from "module_19" /* 19 */;

require = fn;
const EDGE_GUTTER = fn(11905).EDGE_GUTTER;
const CONTROLS_HEIGHT = fn(11900).CONTROLS_HEIGHT;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = 36;
const createStyles = fn(4890);
let obj2 = { consoleParentContainer: { zIndex: 1, position: "absolute", bottom: 0, overflow: "hidden", left: -0.5, right: 0, alignItems: "center" }, consoleContainer: { borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS, overflow: "hidden" }, consoleItemContainer: { flexDirection: "row", alignItems: "center", height: 36, marginHorizontal: 18 }, consoleText: { textAlign: "left", marginStart: 4, flex: 1 }, blockingControlCover: null };
let obj3 = { borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS, overflow: "hidden" };
obj2.blockingControlCover = { position: "absolute", bottom: 0, borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS, flex: 1, height: CONTROLS_HEIGHT, overflow: "hidden" };
let closure_9 = createStyles.createStyles(obj2);
let obj5 = {};
let merged = Object.assign(fn(11902).MODE_CHANGE_PHYSICS);
obj5.overshootClamping = true;
const __initData = { code: "function VoicePanelConsoleStatusTsx1(){const{color,windowDimensions,EDGE_GUTTER,CONTROLS_HEIGHT,CONSOLE_STATUS_HEIGHT,withSpring,shouldShow,FADE_IN_MODE_PHYSICS,runOnJS,cleanUp}=this.__closure;return{backgroundColor:color,width:windowDimensions.get().width-EDGE_GUTTER*2,height:CONTROLS_HEIGHT+CONSOLE_STATUS_HEIGHT,borderRadius:32,transform:[{translateY:withSpring(shouldShow.get()?0:100,FADE_IN_MODE_PHYSICS,\"respect-motion-settings\",function(finished){if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}})}]};}" };
const __initData2 = { code: "function VoicePanelConsoleStatusTsx2(finished){const{shouldShow,runOnJS,cleanUp}=this.__closure;if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}}" };
const __initData3 = { code: "function VoicePanelConsoleStatusTsx3(){const{windowDimensions,EDGE_GUTTER}=this.__closure;return{width:windowDimensions.get().width-EDGE_GUTTER*2};}" };
const __initData4 = { code: "function VoicePanelConsoleStatusTsx4(){const{color,windowDimensions,EDGE_GUTTER,CONTROLS_HEIGHT,CONSOLE_STATUS_HEIGHT,withSpring,shouldShow,FADE_IN_MODE_PHYSICS,runOnJS,cleanUp}=this.__closure;return{backgroundColor:color,width:windowDimensions.get().width-EDGE_GUTTER*2,height:CONTROLS_HEIGHT+CONSOLE_STATUS_HEIGHT,borderRadius:32,transform:[{translateY:withSpring(shouldShow.get()?0:100,FADE_IN_MODE_PHYSICS,'respect-motion-settings',function(finished){if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}})}]};}" };
let closure_15 = { code: "function VoicePanelConsoleStatusTsx5(finished){const{shouldShow,runOnJS,cleanUp}=this.__closure;if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}}" };
const __initData5 = { code: "function VoicePanelConsoleStatusTsx6(){const{windowDimensions,EDGE_GUTTER}=this.__closure;return{width:windowDimensions.get().width-EDGE_GUTTER*2};}" };
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((cleanUp) => {
  const cResult = state(windowDimensions[8]).c(39);
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
    class V {
      constructor() {
        size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + c8, borderRadius: 32, transform: null };
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
    const obj4 = { color, windowDimensions, EDGE_GUTTER: sharedValue, CONTROLS_HEIGHT, CONSOLE_STATUS_HEIGHT, withSpring: state(tmp2[15]).withSpring, shouldShow: sharedValue, FADE_IN_MODE_PHYSICS: obj5, runOnJS: state(tmp2[11]).runOnJS, cleanUp };
    V.__closure = obj4;
    V.__workletHash = 12149301111714;
    V.__initData = __initData;
    const animatedStyle = state(tmp2[11]).useAnimatedStyle(V);
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
        if (cResult[8] !== tmp4.consoleContainer) {
          let items = [tmp4.consoleContainer];
          cResult[8] = tmp4.consoleContainer;
          cResult[9] = items;
          let tmp23 = items;
        } else {
          tmp23 = cResult[9];
        }
        if (cResult[10] !== icon) {
          const obj6 = { source: icon, color: tmp5(tmp2[6]).unsafe_rawColors.WHITE, size: state(tmp2[16]).IconSizes.SMALL };
          const tmp26 = closure_6(state(tmp2[16]).Icon, obj6);
          class V {
            constructor() {
              size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + c8, borderRadius: 32, transform: null };
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
          cResult[10] = icon;
          cResult[11] = tmp26;
          let tmp24 = tmp26;
        } else {
          tmp24 = cResult[11];
        }
        if (cResult[12] === tmp4.consoleText) {
          if (cResult[13] === text) {
            let tmp27 = cResult[14];
          }
          if (cResult[15] !== displayCancel) {
            let tmp31 = null;
            if (displayCancel) {
              const obj7 = { hitSlop: 4, onPress: state(tmp2[19]).disconnectRemote, children: null };
              const obj8 = { variant: "text-sm/medium", color: "text-overlay-light", children: null };
              class V {
                constructor() {
                  size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + c8, borderRadius: 32, transform: null };
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
              obj8.children = tmp33(state(tmp2[20]).t["ETE/oC"]);
              obj7.children = closure_6(state(tmp2[17]).Text, obj8);
              tmp31 = closure_6(state(tmp2[18]).PressableOpacity, obj7);
            }
            cResult[15] = displayCancel;
            cResult[16] = tmp31;
            let tmp30 = tmp31;
          } else {
            tmp30 = cResult[16];
          }
          if (cResult[17] === tmp4.consoleItemContainer) {
            if (cResult[18] === tmp24) {
              if (cResult[19] === tmp27) {
                if (cResult[20] === tmp30) {
                  let tmp34 = cResult[21];
                }
                if (cResult[22] === animatedStyle) {
                  if (cResult[23] === tmp34) {
                    let tmp37 = cResult[24];
                  }
                  if (cResult[25] === tmp23) {
                    if (cResult[26] === tmp37) {
                      let tmp40 = cResult[27];
                    }
                    if (cResult[28] === animatedStyle1) {
                      if (cResult[29] === tmp4.blockingControlCover) {
                        let tmp43 = cResult[30];
                      }
                      const _Symbol = Symbol;
                      if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                        const tmp47 = closure_6(state(tmp2[22]).VoicePanelVisualEffectView, {});
                        cResult[31] = tmp47;
                        let tmp45 = tmp47;
                      } else {
                        tmp45 = cResult[31];
                      }
                      if (cResult[32] !== tmp43) {
                        const obj9 = { style: tmp43, children: tmp45 };
                        const tmp50 = closure_6(tmp5(tmp2[11]).View, obj9);
                        cResult[32] = tmp43;
                        class V {
                          constructor() {
                            size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + c8, borderRadius: 32, transform: null };
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
                        cResult[33] = tmp50;
                        let tmp48 = tmp50;
                      } else {
                        tmp48 = cResult[33];
                      }
                      class V {
                        constructor() {
                          size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + c8, borderRadius: 32, transform: null };
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
                      const items1 = [tmp40, tmp48];
                      obj10.children = items1;
                      const tmp53 = closure_7(tmp5(tmp2[11]).View, obj10);
                      cResult[34] = hiddenProps;
                      cResult[35] = tmp40;
                      cResult[36] = tmp48;
                      cResult[37] = tmp22;
                      cResult[38] = tmp53;
                    }
                    const items2 = [tmp4.blockingControlCover, animatedStyle1];
                    cResult[28] = animatedStyle1;
                    class V {
                      constructor() {
                        size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + c8, borderRadius: 32, transform: null };
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
                    cResult[29] = tmp4.blockingControlCover;
                    cResult[30] = items2;
                    tmp43 = items2;
                  }
                  const obj11 = { style: tmp23, children: tmp37 };
                  const tmp42 = closure_6(tmp5(tmp2[21]), obj11);
                  class V {
                    constructor() {
                      size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + c8, borderRadius: 32, transform: null };
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
                  cResult[25] = tmp23;
                  cResult[26] = tmp37;
                  cResult[27] = tmp42;
                  tmp40 = tmp42;
                }
                const obj12 = { style: animatedStyle, children: tmp34 };
                const tmp39 = closure_6(tmp5(tmp2[11]).View, obj12);
                class V {
                  constructor() {
                    size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + c8, borderRadius: 32, transform: null };
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
                cResult[22] = animatedStyle;
                cResult[23] = tmp34;
                cResult[24] = tmp39;
                tmp37 = tmp39;
              }
            }
          }
          const obj13 = { style: tmp4.consoleItemContainer, children: null };
          const items3 = [, , ];
          class V {
            constructor() {
              size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + c8, borderRadius: 32, transform: null };
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
          items3[1] = tmp27;
          items3[2] = tmp30;
          obj13.children = items3;
          const tmp36 = closure_7(tmp5(tmp2[21]), obj13);
          cResult[17] = tmp4.consoleItemContainer;
          cResult[18] = tmp24;
          cResult[19] = tmp27;
          cResult[20] = tmp30;
          cResult[21] = tmp36;
          tmp34 = tmp36;
        }
        const obj14 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp4.consoleText, children: null };
        class V {
          constructor() {
            size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + c8, borderRadius: 32, transform: null };
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
        const tmp29 = closure_6(state(tmp2[17]).Text, obj14);
        cResult[12] = tmp4.consoleText;
        cResult[13] = text;
        cResult[14] = tmp29;
        tmp27 = tmp29;
      }
    }
    const items4 = [tmp4.consoleParentContainer, tmp12, hiddenStyles];
    cResult[4] = hiddenStyles;
    cResult[5] = tmp4.consoleParentContainer;
    cResult[6] = tmp12;
    cResult[7] = items4;
    tmp22 = items4;
    const tmpResult2 = state(tmp2[11]);
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
  const obj3 = state(windowDimensions[11]);
}) : ((cleanUp) => {
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
    const size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + c8, borderRadius: 32, transform: null };
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
  fn.__closure = { color, windowDimensions, EDGE_GUTTER: sharedValue, CONTROLS_HEIGHT, CONSOLE_STATUS_HEIGHT, withSpring: state(windowDimensions[15]).withSpring, shouldShow: sharedValue, FADE_IN_MODE_PHYSICS: obj5, runOnJS: state(windowDimensions[11]).runOnJS, cleanUp };
  fn.__workletHash = 5196360574855;
  fn.__initData = __initData4;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj3 = { color, windowDimensions, EDGE_GUTTER: sharedValue, CONTROLS_HEIGHT, CONSOLE_STATUS_HEIGHT, withSpring: state(windowDimensions[15]).withSpring, shouldShow: sharedValue, FADE_IN_MODE_PHYSICS: obj5, runOnJS: state(windowDimensions[11]).runOnJS, cleanUp };
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
  const obj6 = { style: null, children: null };
  const items2 = [tmp.consoleContainer];
  obj6.style = items2;
  const obj4 = state(windowDimensions[11]);
  const obj7 = { style: animatedStyle, children: null };
  const obj8 = { style: tmp.consoleItemContainer, children: null };
  const tmp15 = cleanUp(windowDimensions[21]);
  const tmp16 = cleanUp(windowDimensions[21]);
  const items3 = [closure_6(state(windowDimensions[16]).Icon, { source: icon, color: cleanUp(windowDimensions[6]).unsafe_rawColors.WHITE, size: state(windowDimensions[16]).IconSizes.SMALL }), closure_6(state(windowDimensions[17]).Text, { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.consoleText, children: text }), ];
  let tmp14Result = null;
  if (displayCancel) {
    const obj11 = { hitSlop: 4, onPress: state(tmp3[19]).disconnectRemote, children: null };
    const obj12 = { variant: "text-sm/medium", color: "text-overlay-light", children: null };
    const intl = state(tmp3[20]).intl;
    obj12.children = intl.string(state(tmp3[20]).t["ETE/oC"]);
    obj11.children = closure_6(state(tmp3[17]).Text, obj12);
    tmp14Result = closure_6(state(tmp3[18]).PressableOpacity, obj11);
  }
  items3[2] = tmp14Result;
  obj8.children = items3;
  obj7.children = closure_7(tmp16, obj8);
  obj6.children = closure_6(cleanUp(windowDimensions[11]).View, obj7);
  const items4 = [closure_6(tmp15, obj6), ];
  const obj13 = { style: null, children: closure_6(state(windowDimensions[22]).VoicePanelVisualEffectView, {}) };
  const items5 = [tmp.blockingControlCover, animatedStyle1];
  obj13.style = items5;
  items4[1] = closure_6(tmp2(windowDimensions[11]).View, obj13);
  obj5.children = items4;
  return closure_7(cleanUp(windowDimensions[11]).View, obj5);
});
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