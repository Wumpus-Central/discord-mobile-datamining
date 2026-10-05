// discord_app/modules/connectivity/native/components/GlobalStatusIndicator.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import PrivateChannelCallUtils from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import useGlobalStatusIndicatorState from "../useGlobalStatusIndicatorState.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import ActionSheetStore from "../../../action_sheet/native/ActionSheetStore.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import NativeMenuStore from "../../../native_menu/native/NativeMenuStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let current, importDefault;

let NativeEventEmitter;
let NativeModules;
let closure_12;
let closure_14;
let closure_4;
let hasOwnProperty;
let map1;
let metroRequire;
({
  View: closure_4,
  StyleSheet: hasOwnProperty,
  TouchableWithoutFeedback: metroRequire,
  NativeEventEmitter,
  NativeModules,
} = react_native);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
const nativeEventEmitter = new NativeEventEmitter(NativeModules.DCDStatusBarOverlayViewManager);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPress) => {
      let first;
      let stateFromStores;
      let tmp10;
      let tmp12;
      let tmp14;
      let tmp16;
      let tmp17;
      const tmp2 = stateFromStores;
      let obj = onPress(stateFromStores[9]);
      const cResult = obj.c(25);
      onPress = onPress.onPress;
      const tmp5 = require("useVoiceStateForRemoteSession")();
      const tmp4 = importDefault;
      importDefault = tmp5;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RTCConnectionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      let channelId;
      const tmp8 = cResult[1];
      if (tmp5 != null) {
        channelId = tmp5.channelId;
      }
      if (tmp8 !== channelId) {
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
        tmp10 = fn;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] !== tmp5) {
        const items1 = [tmp5];
        cResult[3] = tmp5;
        cResult[4] = items1;
        tmp12 = items1;
      } else {
        tmp12 = cResult[4];
      }
      const tmpResult = onPress(tmp2[11]);
      stateFromStores = tmpResult.useStateFromStores(first, tmp10, tmp12);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ChannelStore];
        cResult[5] = items2;
        tmp14 = items2;
      } else {
        tmp14 = cResult[5];
      }
      if (cResult[6] !== stateFromStores) {
        const fn2 = function _() {
          return ChannelStore.getChannel(stateFromStores);
        };
        const items3 = [stateFromStores];
        cResult[6] = stateFromStores;
        cResult[7] = fn2;
        cResult[8] = items3;
        tmp17 = items3;
        tmp16 = fn2;
      } else {
        tmp16 = cResult[7];
        tmp17 = cResult[8];
      }
      const tmpResult3 = onPress(tmp2[11]);
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp14, tmp16, tmp17);
      const tmpResult4 = onPress(tmp2[12]);
      const voiceChatNavigationContext = tmpResult4.useVoiceChatNavigationContext();
      let openVoice;
      if (voiceChatNavigationContext != null) {
        openVoice = voiceChatNavigationContext.openVoice;
      }
      if (cResult[9] === stateFromStores1) {
        if (cResult[10] === onPress) {
          let tmp21;
          let tmp30;
          if (cResult[11] === openVoice) {
            tmp21 = cResult[12];
          }
          current = tmp21;
          let closure_6 = stateFromStores1.useRef(tmp21);
          if (cResult[13] !== tmp21) {
            class T {
              constructor() {
                closure_6.current = current;
              }
            }
            cResult[13] = tmp21;
            cResult[14] = T;
          } else {
            class T {
              constructor() {
                closure_6.current = current;
              }
            }
          }
          const effect = obj5.useEffect(T);
          const _Symbol = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
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
            cResult[15] = O;
          } else {
            class O {
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
            class O {
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
            tmp26[0] = stateFromStores;
            cResult[16] = stateFromStores;
            cResult[17] = tmp26;
          } else {
            class O {
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
          const effect1 = obj5.useEffect(O, tmp26);
          if (null != stateFromStores1) {
            class O {
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
            let stringResult;
            class O {
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
              class O {
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
              stringResult = obj6.string(onPress(tmp2[14]).t.GaCMgX);
            }
            cResult[18] = stateFromStores1;
            cResult[19] = stringResult;
          } else {
            class O {
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
            class O {
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
            const tmp32 = closure_12(openVoice, obj2);
            cResult[20] = tmp32;
            tmp30 = tmp32;
          } else {
            class O {
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
          if (cResult[21] === tmp21) {
            class O {
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
          const obj3 = { accessibilityRole: "text", accessibilityHint: tmp28, onPress: tmp21, children: tmp30 };
          cResult[21] = tmp21;
          cResult[22] = "text";
          cResult[23] = tmp28;
          cResult[24] = closure_12(closure_6, obj3);
          const tmp36 = closure_12(closure_6, obj3);
        }
      }
      class V {
        constructor() {
          if (null != stateFromStores1) {
            if (null != openVoice) {
              if (ChannelRTCStore.getChatOpen(stateFromStores1.id)) {
                tmp2();
              }
              if (onPress != null) {
                tmp8();
              }
            }
            const obj = PrivateChannelCallUtils;
            const result = obj.navigateToVoiceChannel(stateFromStores1, "RTC Panel");
          }
        }
      }
      cResult[9] = stateFromStores1;
      cResult[10] = onPress;
      cResult[11] = openVoice;
      cResult[12] = V;
      tmp21 = V;
    }
  : (onPress) => {
      let callback;
      let obj5;
      let stringResult;
      importDefault = undefined;
      let stateFromStores;
      onPress = undefined;
      let closure_6;
      const tmp2 = stateFromStores;
      const tmp3 = require("useVoiceStateForRemoteSession")();
      const tmp = importDefault;
      importDefault = tmp3;
      let obj = onPress(stateFromStores[11]);
      const items = [RTCConnectionStore];
      const items1 = [tmp3];
      stateFromStores = obj.useStateFromStores(
        items,
        () => {
          channelId = undefined;
          if (channelId != null) {
            channelId = channelId.channelId;
          }
          if (channelId == null) {
            channelId = RTCConnectionStore.getChannelId();
          }
          return channelId;
        },
        items1,
      );
      const items2 = [ChannelStore];
      const items3 = [stateFromStores];
      const obj2 = onPress(stateFromStores[11]);
      const stateFromStores1 = obj2.useStateFromStores(items2, () => ChannelStore.getChannel(stateFromStores), items3);
      const obj3 = onPress(stateFromStores[12]);
      const voiceChatNavigationContext = obj3.useVoiceChatNavigationContext();
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
          const obj = PrivateChannelCallUtils;
          const result = obj.navigateToVoiceChannel(stateFromStores1, "RTC Panel");
        }
      }, items4);
      closure_6 = stateFromStores1.useRef(onPress);
      const effect = stateFromStores1.useEffect(() => {
        closure_6.current = current;
      });
      const items5 = [stateFromStores];
      const effect1 = stateFromStores1.useEffect(() => {
        let ref;
        let closure_0 = nativeEventEmitter.addListener("StatusBarTapped", () => {
          ref.current();
        });
        return () => {
          if (null != closure_0) {
            closure_0.remove();
          }
        };
      }, items5);
      let str = "text";
      const tmp13 = closure_6;
      if (null != stateFromStores1) {
        str = "button";
      }
      const obj4 = {
        accessibilityRole: str,
        accessibilityHint: stringResult,
        onPress,
        children: closure_12(openVoice, obj5),
      };
      stringResult = undefined;
      if (null != stateFromStores1) {
        const intl = tmp4(tmp2[14]).intl;
        stringResult = intl.string(tmp4(tmp2[14]).t.GaCMgX);
      }
      obj5 = { children: closure_12(tmp(tmp2[15]), {}) };
      return closure_12(tmp13, obj4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (height) => {
      let closure_0 = height;
      const obj = react2;
      const cResult = obj.c(4);
      const obj2 = ReanimatedRexport;
      const sharedValue = obj2.useSharedValue(height.height);
      if (cResult[0] === height.height) {
        let tmp3;
        let tmp4;
        if (cResult[1] === sharedValue) {
          tmp3 = cResult[2];
          tmp4 = cResult[3];
        }
        const effect = react.useEffect(tmp3, tmp4);
        return sharedValue;
      }
      const fn = function l() {
        const result = sharedValue.set(styles.height);
      };
      const items = [height.height, sharedValue];
      cResult[0] = height.height;
      cResult[1] = sharedValue;
      cResult[2] = fn;
      cResult[3] = items;
      tmp4 = items;
      tmp3 = fn;
    }
  : (height) => {
      let closure_0 = height;
      const obj = ReanimatedRexport;
      const sharedValue = obj.useSharedValue(height.height);
      const items = [height.height, sharedValue];
      const effect = react.useEffect(() => {
        const result = sharedValue.set(styles.height);
      }, items);
      return sharedValue;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let content;
      let forceHide;
      let items3;
      let onPress;
      let open;
      let showWhenParticipantOnScreen;
      let tmp11;
      let tmp12;
      let tmp16;
      let tmp7;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(17);
      ({ children, showWhenParticipantOnScreen, forceHide, onPress } = arg0);
      const tmp4 = undefined !== showWhenParticipantOnScreen && showWhenParticipantOnScreen;
      const tmpResult = useGlobalStatusIndicatorState;
      const globalStatusIndicatorState = tmpResult.useGlobalStatusIndicatorState(tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ActionSheetStore];
        const fn = function o() {
          return null != content.getContent();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp7 = items;
        tmp8 = fn;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const tmpResult3 = get_initialized;
      const stateFromStores = tmpResult3.useStateFromStores(tmp7, tmp8);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [NativeMenuStore];
        class I {
          constructor() {
            return open.isOpen();
          }
        }
        cResult[2] = items1;
        cResult[3] = I;
        tmp12 = I;
        tmp11 = items1;
      } else {
        tmp11 = cResult[2];
        tmp12 = cResult[3];
      }
      let isVisible = globalStatusIndicatorState.isVisible;
      const tmpResult4 = get_initialized;
      const stateFromStores1 = tmpResult4.useStateFromStores(tmp11, tmp12);
      const height = globalStatusIndicatorState.height;
      if (isVisible) {
        isVisible = !tmp5;
      }
      let str;
      if (stateFromStores || stateFromStores1) {
        str = "no-hide-descendants";
      }
      let num5 = 0;
      if (!(undefined !== forceHide && forceHide)) {
        num5 = height;
      }
      if (cResult[4] !== num5) {
        const items2 = [hasOwnProperty.absoluteFill];
        class I {
          constructor() {
            return open.isOpen();
          }
        }
        tmp18[0] = num5;
        items2[1] = tmp18;
        cResult[4] = num5;
        cResult[5] = items2;
        tmp16 = items2;
      } else {
        tmp16 = cResult[5];
      }
      if (cResult[6] === children) {
        if (cResult[7] === (stateFromStores || stateFromStores1)) {
          if (cResult[8] === str) {
            let tmp19;
            if (cResult[9] === tmp16) {
              tmp19 = cResult[10];
            }
            if (cResult[11] === isVisible) {
              let tmp21;
              if (cResult[12] === onPress) {
                tmp21 = cResult[13];
              }
              if (cResult[14] === tmp19) {
                let tmp23;
                if (cResult[15] === tmp21) {
                  tmp23 = cResult[16];
                }
                return tmp23;
              }
              class I {
                constructor() {
                  return open.isOpen();
                }
              }
              const obj2 = { children: items3 };
              items3 = [tmp19, tmp21];
              const tmp25 = authStore2(map1, obj2);
              cResult[14] = tmp19;
              cResult[15] = tmp21;
              cResult[16] = tmp25;
              tmp23 = tmp25;
            }
            class I {
              constructor() {
                return open.isOpen();
              }
            }
            cResult[11] = isVisible;
            cResult[12] = onPress;
            cResult[13] = null;
            tmp21 = tmp22;
          }
        }
      }
      const tmp20 = closure_12(React3, {
        importantForAccessibility: str,
        accessibilityElementsHidden: stateFromStores || stateFromStores1,
        style: tmp16,
        children,
      });
      cResult[6] = children;
      cResult[7] = stateFromStores || stateFromStores1;
      cResult[8] = str;
      cResult[9] = tmp16;
      cResult[10] = tmp20;
      tmp19 = tmp20;
    }
  : (children) => {
      let content;
      let open;
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
      let accessibilityElementsHidden;
      let obj = children(onPress[17]);
      const globalStatusIndicatorState = obj.useGlobalStatusIndicatorState(flag);
      let obj2 = children(onPress[11]);
      let items = [ActionSheetStore];
      const stateFromStores = obj2.useStateFromStores(items, () => null != content.getContent());
      const items1 = [NativeMenuStore];
      const height = globalStatusIndicatorState.height;
      let isVisible = globalStatusIndicatorState.isVisible;
      const obj3 = children(onPress[11]);
      const stateFromStores1 = obj3.useStateFromStores(items1, () => open.isOpen());
      if (isVisible) {
        isVisible = !flag2;
      }
      accessibilityElementsHidden = tmp4;
      const items2 = [children, stateFromStores || stateFromStores1, isVisible, onPress, height, flag2];
      return height.useMemo(() => {
        let items;
        let str;
        if (accessibilityElementsHidden) {
          str = "no-hide-descendants";
        }
        const obj = { importantForAccessibility: str, accessibilityElementsHidden, style: items, children };
        items = [hasOwnProperty.absoluteFill];
        let num = 0;
        if (!flag2) {
          num = height;
        }
        items[1] = { marginTop: num, overflow: "hidden" };
        children = [closure_12(React3, obj)];
        let tmp3Result = null;
        if (isVisible) {
          const obj2 = { onPress };
          tmp3Result = closure_12(closure_16, obj2);
        }
        children[1] = tmp3Result;
        return authStore2(map1, { children });
      }, items2);
    };
let result = size.fileFinishedImporting("modules/connectivity/native/components/GlobalStatusIndicator.tsx");

export default tmp6;
export const useGlobalStatusIndicatorHeightSharedValue = tmp5;
