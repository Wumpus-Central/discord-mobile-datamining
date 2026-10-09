// === Module 10988: GlobalStatusIndicator ===

// Module 10988 (GlobalStatusIndicator)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7481 */;
import useGlobalStatusIndicatorState from "useGlobalStatusIndicatorState" /* 10983 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4761 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6043 */;
import NativeMenuStore from "NativeMenuStore" /* 9664 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5109 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty, TouchableWithoutFeedback: metroRequire, NativeEventEmitter, NativeModules } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const nativeEventEmitter = new NativeEventEmitter(NativeModules.DCDStatusBarOverlayViewManager);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  const cResult = onPress(stateFromStores[9]).c(25);
  onPress = onPress.onPress;
  const tmp5 = require("useVoiceStateForRemoteSession")();
  importDefault = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  let channelId;
  if (tmp5 != null) {
    channelId = tmp5.channelId;
  }
  if (cResult[1] !== channelId) {
    let channelId1;
    if (tmp5 != null) {
      channelId1 = tmp5.channelId;
    }
    const fn = function c() {
      channelId = undefined;
      if (channelId != null) {
        channelId = channelId.channelId;
      }
      if (channelId == null) {
        channelId = RTCConnectionStore.getChannelId();
      }
      return channelId;
    };
    cResult[1] = channelId1;
    cResult[2] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== tmp5) {
    const items1 = [tmp5];
    cResult[3] = tmp5;
    cResult[4] = items1;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[4];
  }
  let obj = onPress(stateFromStores[9]);
  const tmp4 = importDefault;
  stateFromStores = onPress(stateFromStores[11]).useStateFromStores(first, tmp9, tmp11);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChannelStore];
    cResult[5] = items2;
    let tmp13 = items2;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== stateFromStores) {
    const fn2 = function _() {
      return ChannelStore.getChannel(stateFromStores);
    };
    const items3 = [stateFromStores];
    cResult[6] = stateFromStores;
    cResult[7] = fn2;
    cResult[8] = items3;
    let tmp16 = items3;
    let tmp15 = fn2;
  } else {
    tmp15 = cResult[7];
    tmp16 = cResult[8];
  }
  const tmpResult = onPress(stateFromStores[11]);
  const stateFromStores1 = onPress(stateFromStores[11]).useStateFromStores(tmp13, tmp15, tmp16);
  const tmpResult3 = onPress(stateFromStores[11]);
  const voiceChatNavigationContext = onPress(stateFromStores[12]).useVoiceChatNavigationContext();
  let openVoice;
  if (voiceChatNavigationContext != null) {
    openVoice = voiceChatNavigationContext.openVoice;
  }
  if (cResult[9] === stateFromStores1) {
    if (cResult[10] === onPress) {
      if (cResult[11] === openVoice) {
        let tmp20 = cResult[12];
      }
      current = tmp20;
      closure_6 = stateFromStores1.useRef(tmp20);
      if (cResult[13] !== tmp20) {
        class H {
          constructor() {
            closure_6.current = closure_5;
            return;
          }
        }
        cResult[13] = tmp20;
        cResult[14] = H;
      } else {
        class H {
          constructor() {
            closure_6.current = closure_5;
            return;
          }
        }
      }
      const effect = obj5.useEffect(H);
      const _Symbol = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            closure_0 = closure_1_15.addListener("StatusBarTapped", () => {
              ref.current();
            });
            return () => {
              if (null != closure_0) {
                closure_0.remove();
              }
            };
          }
        }
        cResult[15] = R;
      } else {
        class R {
          constructor() {
            closure_0 = closure_1_15.addListener("StatusBarTapped", () => {
              ref.current();
            });
            return () => {
              if (null != closure_0) {
                closure_0.remove();
              }
            };
          }
        }
      }
      if (cResult[16] !== stateFromStores) {
        class R {
          constructor() {
            closure_0 = closure_1_15.addListener("StatusBarTapped", () => {
              ref.current();
            });
            return () => {
              if (null != closure_0) {
                closure_0.remove();
              }
            };
          }
        }
        tmp25[0] = stateFromStores;
        cResult[16] = stateFromStores;
        cResult[17] = tmp25;
      } else {
        class R {
          constructor() {
            closure_0 = closure_1_15.addListener("StatusBarTapped", () => {
              ref.current();
            });
            return () => {
              if (null != closure_0) {
                closure_0.remove();
              }
            };
          }
        }
      }
      const effect1 = obj5.useEffect(R, tmp25);
      if (null != stateFromStores1) {
        class R {
          constructor() {
            closure_0 = closure_1_15.addListener("StatusBarTapped", () => {
              ref.current();
            });
            return () => {
              if (null != closure_0) {
                closure_0.remove();
              }
            };
          }
        }
      }
      if (cResult[18] !== stateFromStores1) {
        class R {
          constructor() {
            closure_0 = closure_1_15.addListener("StatusBarTapped", () => {
              ref.current();
            });
            return () => {
              if (null != closure_0) {
                closure_0.remove();
              }
            };
          }
        }
        if (null != stateFromStores1) {
          class R {
            constructor() {
              closure_0 = closure_1_15.addListener("StatusBarTapped", () => {
                ref.current();
              });
              return () => {
                if (null != closure_0) {
                  closure_0.remove();
                }
              };
            }
          }
          const stringResult = obj6.string(tmp(tmp2[14]).t.GaCMgX);
        }
        cResult[18] = stateFromStores1;
        cResult[19] = stringResult;
      } else {
        class R {
          constructor() {
            closure_0 = closure_1_15.addListener("StatusBarTapped", () => {
              ref.current();
            });
            return () => {
              if (null != closure_0) {
                closure_0.remove();
              }
            };
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            closure_0 = closure_1_15.addListener("StatusBarTapped", () => {
              ref.current();
            });
            return () => {
              if (null != closure_0) {
                closure_0.remove();
              }
            };
          }
        }
        const obj2 = { children: closure_12(tmp4(tmp2[15]), {}) };
        const tmp31 = closure_12(openVoice, obj2);
        cResult[20] = tmp31;
        const tmp29 = tmp31;
      } else {
        class R {
          constructor() {
            closure_0 = closure_1_15.addListener("StatusBarTapped", () => {
              ref.current();
            });
            return () => {
              if (null != closure_0) {
                closure_0.remove();
              }
            };
          }
        }
      }
      if (cResult[21] === tmp20) {
        class R {
          constructor() {
            closure_0 = closure_1_15.addListener("StatusBarTapped", () => {
              ref.current();
            });
            return () => {
              if (null != closure_0) {
                closure_0.remove();
              }
            };
          }
        }
      }
      const obj3 = { accessibilityRole: "text", accessibilityHint: tmp27, onPress: tmp20, children: tmp29 };
      const tmp35 = closure_12(closure_6, obj3);
      cResult[21] = tmp20;
      cResult[22] = "text";
      cResult[23] = tmp27;
      cResult[24] = tmp35;
    }
  }
  class E {
    constructor() {
      tmp = closure_3;
      if (null != closure_3) {
        if (null != openVoice) {
          tmp3 = closure_8;
          if (closure_8.getChatOpen(tmp.id)) {
            tmp2Result = tmp2();
          }
          if (onPress != null) {
            tmp8Result = tmp8();
          }
        }
        tmp4 = closure_0;
        tmp5 = closure_2;
        obj = closure_0(closure_2[13]);
        str = "RTC Panel";
        result = obj.navigateToVoiceChannel(tmp, "RTC Panel");
      }
      return;
    }
  }
  cResult[9] = stateFromStores1;
  cResult[10] = onPress;
  cResult[11] = openVoice;
  cResult[12] = E;
  tmp20 = E;
  const tmpResult4 = onPress(stateFromStores[12]);
}) : ((onPress) => {
  importDefault = undefined;
  let stateFromStores;
  onPress = undefined;
  closure_6 = undefined;
  const tmp3 = require("useVoiceStateForRemoteSession")();
  importDefault = tmp3;
  const items = [RTCConnectionStore];
  const items1 = [tmp3];
  stateFromStores = onPress(stateFromStores[11]).useStateFromStores(items, () => {
    channelId = undefined;
    if (channelId != null) {
      channelId = channelId.channelId;
    }
    if (channelId == null) {
      channelId = RTCConnectionStore.getChannelId();
    }
    return channelId;
  }, items1);
  let obj = onPress(stateFromStores[11]);
  const tmp = importDefault;
  const items2 = [ChannelStore];
  const items3 = [stateFromStores];
  const stateFromStores1 = onPress(stateFromStores[11]).useStateFromStores(items2, () => ChannelStore.getChannel(stateFromStores), items3);
  const obj2 = onPress(stateFromStores[11]);
  const voiceChatNavigationContext = onPress(stateFromStores[12]).useVoiceChatNavigationContext();
  let openVoice;
  if (voiceChatNavigationContext != null) {
    openVoice = voiceChatNavigationContext.openVoice;
  }
  const items4 = [stateFromStores1, onPress, openVoice];
  onPress = stateFromStores1.useCallback(() => {
    if (null != stateFromStores1) {
      if (null != openVoice) {
        if (ChannelRTCStore.getChatOpen(stateFromStores1.id)) {
          tmp2();
        }
        if (onPress != null) {
          tmp8();
        }
      }
      const result = PrivateChannelCallUtils.navigateToVoiceChannel(stateFromStores1, "RTC Panel");
    }
  }, items4);
  closure_6 = stateFromStores1.useRef(onPress);
  const effect = stateFromStores1.useEffect(() => {
    closure_6.current = current;
  });
  const items5 = [stateFromStores];
  const effect1 = stateFromStores1.useEffect(() => {
    closure_0 = nativeEventEmitter.addListener("StatusBarTapped", () => {
      ref.current();
    });
    return () => {
      if (null != closure_0) {
        closure_0.remove();
      }
    };
  }, items5);
  let str = "text";
  if (null != stateFromStores1) {
    str = "button";
  }
  const obj4 = { accessibilityRole: str, accessibilityHint: null, onPress: null, children: null };
  let stringResult;
  if (null != stateFromStores1) {
    const intl = tmp4(tmp2[14]).intl;
    stringResult = intl.string(tmp4(tmp2[14]).t.GaCMgX);
  }
  obj4.accessibilityHint = stringResult;
  obj4.onPress = onPress;
  const obj3 = onPress(stateFromStores[12]);
  const tmp13 = closure_6;
  obj4.children = closure_12(openVoice, { children: closure_12(tmp(stateFromStores[15]), {}) });
  return closure_12(tmp13, obj4);
});
fn(558);
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGlobalStatusIndicatorHeightSharedValue(height) {
  const cResult = c.c(4);
  const sharedValue = ReanimatedRexport.useSharedValue(height.height);
  if (cResult[0] === height.height) {
    if (cResult[1] === sharedValue) {
      let tmp3 = cResult[2];
      let tmp4 = cResult[3];
    }
    const effect = noop.useEffect(tmp3, tmp4);
    return sharedValue;
  }
  const fn = function l() {
    const result = sharedValue.set(height.height);
  };
  const items = [height.height, sharedValue];
  cResult[0] = height.height;
  cResult[1] = sharedValue;
  cResult[2] = fn;
  cResult[3] = items;
  tmp4 = items;
  tmp3 = fn;
}) : (function useGlobalStatusIndicatorHeightSharedValue(height) {
  const sharedValue = ReanimatedRexport.useSharedValue(height.height);
  const items = [height.height, sharedValue];
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(height.height);
  }, items);
  return sharedValue;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/connectivity/native/components/GlobalStatusIndicator.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GlobalStatusIndicator(arg0) {
  const cResult = c.c(17);
  ({ children, showWhenParticipantOnScreen, forceHide, onPress } = arg0);
  const tmp4 = undefined !== showWhenParticipantOnScreen && showWhenParticipantOnScreen;
  const globalStatusIndicatorState = useGlobalStatusIndicatorState.useGlobalStatusIndicatorState(tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ActionSheetStore];
    const fn = function s() {
      return null != content.getContent();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = useGlobalStatusIndicatorState;
  const stateFromStores = initialize.useStateFromStores(tmp7, tmp8);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [NativeMenuStore];
    class P {
      constructor() {
        return closure_1_9.isOpen();
      }
    }
    cResult[2] = items1;
    cResult[3] = P;
    let tmp12 = P;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  const tmpResult3 = initialize;
  let isVisible = globalStatusIndicatorState.isVisible;
  const stateFromStores1 = initialize.useStateFromStores(tmp11, tmp12);
  if (isVisible) {
    isVisible = !tmp5;
  }
  let tmp15 = stateFromStores;
  if (!stateFromStores) {
    tmp15 = stateFromStores1;
  }
  let str;
  if (tmp15) {
    str = "no-hide-descendants";
  }
  let num5 = 0;
  if (!(undefined !== forceHide && forceHide)) {
    num5 = globalStatusIndicatorState.height;
  }
  if (cResult[4] !== num5) {
    const items2 = [current.absoluteFill, ];
    class P {
      constructor() {
        return closure_1_9.isOpen();
      }
    }
    tmp18[0] = num5;
    items2[1] = tmp18;
    cResult[4] = num5;
    cResult[5] = items2;
    let tmp16 = items2;
  } else {
    tmp16 = cResult[5];
  }
  if (cResult[6] === children) {
    if (cResult[7] === tmp15) {
      if (cResult[8] === str) {
        if (cResult[9] === tmp16) {
          let tmp19 = cResult[10];
        }
        if (cResult[11] === isVisible) {
          if (cResult[12] === onPress) {
            let tmp21 = cResult[13];
          }
          if (cResult[14] === tmp19) {
            if (cResult[15] === tmp21) {
              let tmp23 = cResult[16];
            }
            return tmp23;
          }
          class P {
            constructor() {
              return closure_1_9.isOpen();
            }
          }
          const obj2 = { children: null };
          const items3 = [tmp19, tmp21];
          obj2.children = items3;
          const tmp25 = state(__initData2, obj2);
          cResult[14] = tmp19;
          cResult[15] = tmp21;
          cResult[16] = tmp25;
          tmp23 = tmp25;
        }
        class P {
          constructor() {
            return closure_1_9.isOpen();
          }
        }
        cResult[11] = isVisible;
        cResult[12] = onPress;
        cResult[13] = null;
        tmp21 = tmp22;
      }
    }
  }
  const tmp20 = __initData(React4, { importantForAccessibility: str, accessibilityElementsHidden: tmp15, style: tmp16, children });
  cResult[6] = children;
  cResult[7] = tmp15;
  cResult[8] = str;
  cResult[9] = tmp16;
  cResult[10] = tmp20;
  tmp19 = tmp20;
  const tmpResult4 = initialize;
}) : (function GlobalStatusIndicator(children) {
  children = children.children;
  let flag = children.showWhenParticipantOnScreen;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = children.forceHide;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const onPress = children.onPress;
  const globalStatusIndicatorState = children(onPress[17]).useGlobalStatusIndicatorState(flag);
  let obj = children(onPress[17]);
  let items = [ActionSheetStore];
  const stateFromStores = children(onPress[11]).useStateFromStores(items, () => null != content.getContent());
  let obj2 = children(onPress[11]);
  const items1 = [NativeMenuStore];
  const height = globalStatusIndicatorState.height;
  let isVisible = globalStatusIndicatorState.isVisible;
  let stateFromStores1 = children(onPress[11]).useStateFromStores(items1, () => open.isOpen());
  if (isVisible) {
    isVisible = !flag2;
  }
  let tmp4 = stateFromStores;
  if (!stateFromStores) {
    tmp4 = stateFromStores1;
  }
  stateFromStores1 = tmp4;
  const items2 = [children, tmp4, isVisible, onPress, height, flag2];
  return height.useMemo(() => {
    let str;
    if (stateFromStores1) {
      str = "no-hide-descendants";
    }
    const obj = { importantForAccessibility: str, accessibilityElementsHidden: stateFromStores1, style: null, children: null };
    const items = [current.absoluteFill, ];
    let num = 0;
    if (!flag2) {
      num = height;
    }
    items[1] = { marginTop: num, overflow: "hidden" };
    obj.style = items;
    obj.children = children;
    children = [__initData(React4, obj), ];
    let tmp3Result = null;
    if (isVisible) {
      const obj2 = { onPress };
      tmp3Result = __initData(closure_16, obj2);
    }
    children[1] = tmp3Result;
    return state(__initData2, { children });
  }, items2);
});
export const useGlobalStatusIndicatorHeightSharedValue = tmp5;