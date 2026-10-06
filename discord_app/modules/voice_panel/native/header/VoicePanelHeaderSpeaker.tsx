// discord_app/modules/voice_panel/native/header/VoicePanelHeaderSpeaker.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Constants from "../../../../Constants.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import showAudioOutputSelector from "../../../voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx";
import useOnConnectToConsole from "../../../video_calls/native/useOnConnectToConsole.tsx";
import getConsoleIconDefault from "../../../game_console/native/getConsoleIcon.tsx";
import VoicePanelIconButtonDefault from "../shared/VoicePanelIconButton.tsx";
import ConsoleVoiceUpsellStore from "../../../game_console/ConsoleVoiceUpsellStore.tsx";
import useSpeakerTooltipsDefault from "../hooks/useSpeakerTooltips.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import GameConsoleStore from "../../../game_console/GameConsoleStore.tsx";
import AudioRouteStore from "../../../voice_calls/AudioRouteStore.native.tsx";
import AudioRouteSwitchingStore from "../../../voice_calls/native/AudioRouteSwitchingStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import SessionsStore from "../../../../stores/SessionsStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_15;
let closure_16;
let closure_17;
let closure_3 = ["ref"];
let closure_4 = ["ref"];
let react = react_mod;
const NativeModules = react_native.NativeModules;
const setVoiceUpsellDismissed = ConsoleVoiceUpsellStore.setVoiceUpsellDismissed;
const PlatformTypes = Constants.PlatformTypes;
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = Fragment);
let closure_18 = [];
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let canShowTooltip;
        let targetRef;
        ({ targetRef, canShowTooltip } = arg0);
        useSpeakerTooltipsDefault(targetRef, canShowTooltip);
        return null;
      }
    : (arg0) => {
        let canShowTooltip;
        let targetRef;
        ({ targetRef, canShowTooltip } = arg0);
        useSpeakerTooltipsDefault(targetRef, canShowTooltip);
        return null;
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (isConnectedToVoiceChannel) => {
        let items4;
        let items5;
        let loading;
        let queueAudioSwap;
        let renderButtonResult;
        let style;
        let tmp10;
        let tmp13;
        let tmp14;
        let tmp17;
        let tmp21;
        let tmp27;
        let tmp9;
        function _loop(item10230) {
          let intl;
          let intl2;
          let closure_0 = item10230;
          if (item10230.type === ref.XBOX) {
            let obj = {
              label: intl.string(isConnectedToVoiceChannel(style[25]).t["qVE/VF"]),
              iconSource: channelId(style[19])(item10230.type),
              showIconFirst: false,
              action() {
                const channel = ChannelStore.getChannel(channelId);
                if (null != channel) {
                  const obj = useOnConnectToConsole;
                  obj.onConnectToConsole(channel, item10230);
                }
              },
            };
            const push = items4.push;
            intl = isConnectedToVoiceChannel(style[25]).intl;
            push(obj);
          }
          if (item10230.type === ref.PLAYSTATION) {
            const push2 = items4.push;
            const obj2 = {
              label: intl2.string(isConnectedToVoiceChannel(style[25]).t.vzfxmY),
              iconSource: channelId(style[19])(item10230.type),
              showIconFirst: false,
              action() {
                const channel = ChannelStore.getChannel(channelId);
                if (null != channel) {
                  const obj = useOnConnectToConsole;
                  obj.onConnectToConsole(channel, item10230);
                }
              },
            };
            intl2 = isConnectedToVoiceChannel(style[25]).intl;
            push2(obj2);
          }
        }
        let tmp = isConnectedToVoiceChannel;
        let obj = isConnectedToVoiceChannel(style[13]);
        const cResult = obj.c(48);
        isConnectedToVoiceChannel = isConnectedToVoiceChannel.isConnectedToVoiceChannel;
        const channelId = isConnectedToVoiceChannel.channelId;
        style = isConnectedToVoiceChannel.style;
        const tmp5 = channelId(style[14])();
        closure_3 = tmp5;
        let obj2 = isConnectedToVoiceChannel(style[15]);
        const maskedSpeakerStates = obj2.useMaskedSpeakerStates();
        const toggleAudio = maskedSpeakerStates.toggleAudio;
        const routeSource = maskedSpeakerStates.routeSource;
        const isAudioRouteEnabled = maskedSpeakerStates.isAudioRouteEnabled;
        const tmp7 = channelId(style[16])();
        let tmp8 = channelId(style[17])();
        let closure_7 = tmp8;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let tmp11 = loading;
          let items = [loading];
          const fn = function _() {
            return loading.getAwaitingRemoteSessionInfo();
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp9 = items;
          tmp10 = fn;
        } else {
          [tmp9, tmp10] = cResult;
        }
        let tmpResult = tmp(tmp2[18]);
        const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          let tmp15 = queueAudioSwap;
          const items1 = [queueAudioSwap];
          const fn2 = function x() {
            return queueAudioSwap.getQueueAudioSwap();
          };
          cResult[2] = items1;
          cResult[3] = fn2;
          tmp14 = fn2;
          tmp13 = items1;
        } else {
          tmp13 = cResult[2];
          tmp14 = cResult[3];
        }
        const tmpResult5 = tmp(style[18]);
        const stateFromStores1 = tmpResult5.useStateFromStores(tmp13, tmp14);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [items4];
          cResult[4] = items2;
          tmp17 = items2;
        } else {
          tmp17 = cResult[4];
        }
        let sessionId;
        const tmp19 = cResult[5];
        if (tmp8 != null) {
          sessionId = tmp8.sessionId;
        }
        if (tmp19 !== sessionId) {
          let sessionId1;
          if (tmp8 != null) {
            sessionId1 = tmp8.sessionId;
          }
          const fn3 = function q() {
            let str;
            const getSessionById = SessionsStore.getSessionById;
            if (closure_7 != null) {
              str = closure_7.sessionId;
            }
            if (str == null) {
              str = "";
            }
            return getSessionById(str);
          };
          cResult[5] = sessionId1;
          cResult[6] = fn3;
          tmp21 = fn3;
        } else {
          tmp21 = cResult[6];
        }
        const tmpResult6 = tmp(style[18]);
        const stateFromStores2 = tmpResult6.useStateFromStores(tmp17, tmp21);
        loading = tmp24;
        let type;
        if (stateFromStores != null) {
          type = stateFromStores.type;
        }
        if (type == null) {
          let os;
          if (stateFromStores2 != null) {
            const clientInfo = stateFromStores2.clientInfo;
            if (clientInfo != null) {
              os = clientInfo.os;
            }
          }
          type = os;
        }
        if (cResult[7] !== type) {
          let tmp28 = null;
          if (null != type) {
            tmp28 = tmp4(tmp2[19])(type);
          }
          cResult[7] = type;
          cResult[8] = tmp28;
          tmp27 = tmp28;
        } else {
          tmp27 = cResult[8];
        }
        const currentRouteType = tmp27;
        const arr4 = channelId(style[20])();
        const tmp30 = channelId(style[21])(channelId);
        let tmp31 = tmp30.canConnect && !tmp30.isAtMaxCapacity;
        if (tmp31) {
          tmp31 = isConnectedToVoiceChannel || arr4.length > 0;
        }
        queueAudioSwap = tmp31;
        if (cResult[9] === channelId) {
          if (cResult[10] === isConnectedToVoiceChannel) {
            let tmp33;
            let tmp35;
            let tmp34;
            if (cResult[11] === toggleAudio) {
              tmp33 = cResult[12];
            }
            const onPress = tmp33;
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const items3 = [currentRouteType];
              function oe() {
                return currentRouteType.getCurrentRouteType();
              }
              cResult[13] = oe;
              cResult[14] = items3;
              tmp35 = items3;
              tmp34 = oe;
            } else {
              tmp34 = cResult[13];
              tmp35 = cResult[14];
            }
            const tmpResult7 = tmp(style[18]);
            const stateFromStores3 = tmpResult7.useStateFromStores(tmp35, tmp34);
            const tmpResult8 = tmp(style[22]);
            if (!tmpResult8.isAndroid()) {
              let tmp38;
              let tmp54;
              if (0 !== arr4.length) {
                let tmp47;
                if (cResult[15] === channelId) {
                  if (cResult[16] === arr4) {
                    if (cResult[17] === isConnectedToVoiceChannel) {
                      if (cResult[18] === tmp7) {
                        if (cResult[19] === stateFromStores3) {
                          items4 = cResult[20];
                        }
                      }
                    }
                  }
                }
                items4 = [];
                if (!tmp7) {
                  if (stateFromStores3 === tmp(style[24]).RouteTypes.SPEAKER) {
                    let tmp39;
                    let tmp41;
                    const _Symbol7 = Symbol;
                    if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                      let intl = tmp(tmp2[25]).intl;
                      const stringResult = intl.string(tmp(style[25]).t.gvQIzx);
                      cResult[21] = stringResult;
                      tmp39 = stringResult;
                    } else {
                      tmp39 = cResult[21];
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                      let obj3 = {
                        label: tmp39,
                        iconSource: channelId(tmp2[26]),
                        showIconFirst: false,
                        action() {
                          const AudioRoutePicker = closure_7.AudioRoutePicker;
                          let toggleSpeakerResult;
                          if (AudioRoutePicker != null) {
                            toggleSpeakerResult = AudioRoutePicker.toggleSpeaker(false);
                          }
                          return toggleSpeakerResult;
                        },
                      };
                      cResult[22] = obj3;
                      tmp41 = obj3;
                    } else {
                      tmp41 = cResult[22];
                    }
                    items4.push(tmp41);
                  }
                }
                if (!tmp7) {
                  if (stateFromStores3 === tmp(style[24]).RouteTypes.RECEIVER) {
                    let tmp43;
                    let tmp45;
                    const _Symbol8 = Symbol;
                    if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                      let intl2 = tmp(tmp2[25]).intl;
                      const stringResult1 = intl2.string(tmp(style[25]).t.wwTN1g);
                      cResult[23] = stringResult1;
                      tmp43 = stringResult1;
                    } else {
                      tmp43 = cResult[23];
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                      let obj4 = {
                        label: tmp43,
                        iconSource: channelId(tmp2[27]),
                        showIconFirst: false,
                        action() {
                          const AudioRoutePicker = closure_7.AudioRoutePicker;
                          let toggleSpeakerResult;
                          if (AudioRoutePicker != null) {
                            toggleSpeakerResult = AudioRoutePicker.toggleSpeaker(true);
                          }
                          return toggleSpeakerResult;
                        },
                      };
                      cResult[24] = obj4;
                      tmp45 = obj4;
                    } else {
                      tmp45 = cResult[24];
                    }
                    items4.push(tmp45);
                  }
                }
                const _Symbol4 = Symbol;
                if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl3 = tmp(tmp2[25]).intl;
                  const stringResult2 = intl3.string(tmp(style[25]).t.dnI0AL);
                  cResult[25] = stringResult2;
                  tmp47 = stringResult2;
                } else {
                  tmp47 = cResult[25];
                }
                if (cResult[26] === channelId) {
                  let tmp49;
                  if (cResult[27] === isConnectedToVoiceChannel) {
                    tmp49 = cResult[28];
                  }
                  items4.push(tmp49);
                  for (const item10230 of arr4) {
                    let tmp53 = _loop(item10230);
                    continue;
                  }
                  cResult[15] = channelId;
                  cResult[16] = arr4;
                  cResult[17] = isConnectedToVoiceChannel;
                  cResult[18] = tmp7;
                  cResult[19] = stateFromStores3;
                  cResult[20] = items4;
                  tmp38 = items4;
                }
                let obj5 = {
                  label: tmp47,
                  iconSource: channelId(tmp2[28]),
                  showIconFirst: false,
                  action() {
                    const obj = showAudioOutputSelector;
                    const result = obj.showAudioOutputSelector(channelId, isConnectedToVoiceChannel);
                  },
                };
                cResult[26] = channelId;
                cResult[27] = isConnectedToVoiceChannel;
                cResult[28] = obj5;
                tmp49 = obj5;
              }
              if (cResult[29] !== tmp5) {
                function pe() {
                  const obj = DismissibleContentUnsafeUtils;
                  const result = obj.UNSAFE_markDismissibleContentAsDismissed(
                    dismissible_content.DismissibleContent.DONUT_MOBILE_NUX,
                  );
                  setVoiceUpsellDismissed(true);
                  closure_3.lock();
                }
                cResult[29] = tmp5;
                cResult[30] = pe;
                tmp54 = pe;
              } else {
                tmp54 = cResult[30];
              }
              const ref = isAudioRouteEnabled.useRef(null);
              if (tmp31) {
                let tmp58;
                let tmp57;
                if ((cResult[31] === null) != stateFromStores) {
                  if (cResult[32] === tmp27) {
                    if (cResult[33] === tmp33) {
                      if (cResult[34] === tmp54) {
                        if (cResult[35] === arr4.length > 0) {
                          if (cResult[36] === stateFromStores1) {
                            if (cResult[37] === isAudioRouteEnabled) {
                              if (cResult[38] === isConnectedToVoiceChannel) {
                                if (cResult[39] === tmp5.unlock) {
                                  if (cResult[40] === tmp38) {
                                    if (cResult[41] === routeSource) {
                                      if (cResult[42] === tmp31) {
                                        if (cResult[43] === style) {
                                          tmp57 = cResult[44];
                                          tmp58 = cResult[45];
                                        }
                                        const _Symbol6 = Symbol;
                                        if (tmp58 !== Symbol.for("react.early_return_sentinel")) {
                                          tmp57 = tmp58;
                                        }
                                        return tmp57;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                const _Symbol5 = Symbol;
                let str = "react.early_return_sentinel";
                function renderButton(arg0) {
                  let intl;
                  let obj4;
                  let str;
                  let tmp12;
                  let tmp15;
                  let tmp9;
                  let tmp = arg0;
                  if (arg0 == null) {
                    tmp = { onPress, ref: "Array" };
                    const obj = { onPress, ref: "Array" };
                  }
                  const obj2 = { targetRef: tmp.ref, canShowTooltip: tmp9 };
                  tmp9 = queueAudioSwap;
                  const tmp3 = _objectWithoutProperties(tmp, closure_3);
                  const tmp8 = tmp.ref;
                  if (queueAudioSwap) {
                    tmp9 = isConnectedToVoiceChannel;
                  }
                  const items = [closure_15(closure_19, obj2)];
                  const obj3 = { style, ref: tmp8, children: closure_15(tmp12, obj4) };
                  obj4 = {
                    ref: tmp.ref,
                    disabled: stateFromStores1,
                    overrideVariant: str,
                    loading,
                    icon: tmp15,
                    accessibilityLabel: intl.string(intl4.t.dnI0AL),
                  };
                  const tmp11 = NativeViewDefault;
                  tmp12 = VoicePanelIconButtonDefault;
                  const merged = Object.assign(tmp3);
                  str = undefined;
                  if (isConnectedToVoiceChannel) {
                    if (isAudioRouteEnabled) {
                      str = "primary-overlay";
                    }
                  }
                  tmp15 = currentRouteType;
                  if (currentRouteType == null) {
                    tmp15 = routeSource;
                  }
                  const obj5 = { children: items };
                  intl = intl4.intl;
                  items[1] = closure_15(tmp11, obj3);
                  return closure_17(authStore3, obj5);
                }
                const forResult = Symbol.for("react.early_return_sentinel");
                const obj11 = isConnectedToVoiceChannel(style[22]);
                const tmp60 = isConnectedToVoiceChannel;
                const tmp61 = style;
                if (!obj11.isAndroid()) {
                  let tmp69;
                  if (arr4.length > 0) {
                    let tmp62;
                    if (cResult[46] !== isConnectedToVoiceChannel) {
                      const obj6 = { targetRef: ref, canShowTooltip: isConnectedToVoiceChannel };
                      const tmp65 = closure_15(closure_19, obj6);
                      cResult[46] = isConnectedToVoiceChannel;
                      cResult[47] = tmp65;
                      tmp62 = tmp65;
                    } else {
                      tmp62 = cResult[47];
                    }
                    const obj7 = { children: items5 };
                    items5 = [tmp62];
                    const obj8 = {
                      menuItems: tmp38,
                      position: "bottom",
                      align: "end",
                      onRequestOpen: tmp54,
                      onRequestClose: tmp5.unlock,
                      children: renderButton,
                    };
                    items5[1] = closure_15(tmp60(tmp61[34]).MenuPopout, obj8);
                    tmp69 = closure_17(closure_16, obj7);
                  }
                  cResult[31] = null != stateFromStores;
                  cResult[32] = tmp27;
                  cResult[33] = tmp33;
                  cResult[34] = tmp54;
                  cResult[35] = arr4.length > 0;
                  cResult[36] = stateFromStores1;
                  cResult[37] = isAudioRouteEnabled;
                  cResult[38] = isConnectedToVoiceChannel;
                  cResult[39] = tmp5.unlock;
                  cResult[40] = tmp38;
                  cResult[41] = routeSource;
                  cResult[42] = tmp31;
                  cResult[43] = style;
                  cResult[44] = renderButtonResult;
                  cResult[45] = tmp69;
                  tmp58 = tmp69;
                  tmp57 = renderButtonResult;
                }
                renderButtonResult = renderButton();
                tmp69 = forResult;
              } else {
                return null;
              }
            }
            tmp38 = closure_18;
          }
        }
        class H {
          constructor() {
            const obj = PlatformUtils;
            if (obj.isAndroid()) {
              const tmpResult = showAudioOutputSelector;
              const result = tmpResult.showAudioOutputSelector(channelId, isConnectedToVoiceChannel);
            } else {
              toggleAudio(channelId, isConnectedToVoiceChannel);
            }
          }
        }
        cResult[9] = channelId;
        cResult[10] = isConnectedToVoiceChannel;
        cResult[11] = toggleAudio;
        cResult[12] = H;
        tmp33 = H;
      }
    : function VoicePanelHeaderSpeaker(isConnectedToVoiceChannel) {
        let c5;
        let c6;
        let items8;
        isConnectedToVoiceChannel = isConnectedToVoiceChannel.isConnectedToVoiceChannel;
        const channelId = isConnectedToVoiceChannel.channelId;
        const style = isConnectedToVoiceChannel.style;
        c5 = undefined;
        react = undefined;
        let stateFromStores;
        let stateFromStores1;
        let closure_13;
        let closure_15;
        let onPress;
        let stateFromStores2;
        let ref;
        let tmp = style;
        const tmp2 = channelId(style[14])();
        closure_3 = tmp2;
        let tmp3 = isConnectedToVoiceChannel;
        let obj = isConnectedToVoiceChannel(style[15]);
        const maskedSpeakerStates = obj.useMaskedSpeakerStates();
        const toggleAudio = maskedSpeakerStates.toggleAudio;
        ({ routeSource: c5, isAudioRouteEnabled: c6 } = maskedSpeakerStates);
        let tmp5 = channelId(style[16])();
        let closure_7 = tmp5;
        const sessionId = channelId(style[17])();
        let obj2 = isConnectedToVoiceChannel(style[18]);
        let items = [stateFromStores];
        stateFromStores = obj2.useStateFromStores(items, () => stateFromStores.getAwaitingRemoteSessionInfo());
        let obj3 = isConnectedToVoiceChannel(style[18]);
        const items1 = [stateFromStores1];
        const disabled = obj3.useStateFromStores(items1, () => stateFromStores1.getQueueAudioSwap());
        let obj4 = isConnectedToVoiceChannel(style[18]);
        const items2 = [closure_13];
        stateFromStores1 = obj4.useStateFromStores(items2, () => {
          let str;
          const getSessionById = SessionsStore.getSessionById;
          if (sessionId != null) {
            str = sessionId.sessionId;
          }
          if (str == null) {
            str = "";
          }
          return getSessionById(str);
        });
        const loading = null != stateFromStores;
        let obj5 = react;
        const items3 = [stateFromStores, stateFromStores1];
        closure_13 = react.useMemo(() => {
          let type;
          if (stateFromStores != null) {
            type = stateFromStores.type;
          }
          if (type == null) {
            let os;
            if (stateFromStores1 != null) {
              const clientInfo = stateFromStores1.clientInfo;
              if (clientInfo != null) {
                os = clientInfo.os;
              }
            }
            type = os;
          }
          let tmp3 = null;
          if (null != type) {
            tmp3 = getConsoleIconDefault(type);
          }
          return tmp3;
        }, items3);
        const arr5 = channelId(style[20])();
        let tmp8 = arr5.length > 0;
        let tmp9 = channelId(style[21])(channelId);
        let tmp10 = tmp9.canConnect && !tmp9.isAtMaxCapacity;
        if (tmp10) {
          let tmp11 = isConnectedToVoiceChannel || tmp8;
          tmp10 = tmp11;
        }
        closure_15 = tmp10;
        const items4 = [channelId, isConnectedToVoiceChannel, toggleAudio];
        onPress = obj5.useCallback(() => {
          const obj = PlatformUtils;
          if (obj.isAndroid()) {
            const tmpResult = showAudioOutputSelector;
            const result = tmpResult.showAudioOutputSelector(channelId, isConnectedToVoiceChannel);
          } else {
            toggleAudio(channelId, isConnectedToVoiceChannel);
          }
        }, items4);
        const items5 = [disabled];
        const tmp3Result = tmp3(tmp[18]);
        stateFromStores2 = tmp3Result.useStateFromStores(items5, () => disabled.getCurrentRouteType());
        const items6 = [arr5, channelId, isConnectedToVoiceChannel, stateFromStores2, tmp5];
        const items7 = [tmp2];
        const memo = obj5.useMemo(() => {
          let intl;
          let intl2;
          let intl3;
          function _loop2(item10074) {
            let intl;
            let intl2;
            let closure_0 = item10074;
            if (item10074.type === PlatformTypes.XBOX) {
              let obj = {
                label: intl.string(intl4.t["qVE/VF"]),
                iconSource: getConsoleIconDefault(item10074.type),
                showIconFirst: false,
                action() {
                  const channel = loading.getChannel(closure_2_1);
                  if (null != channel) {
                    const obj = items(style[29]);
                    obj.onConnectToConsole(channel, closure_0);
                  }
                },
              };
              const push = items.push;
              intl = intl4.intl;
              push(obj);
            }
            if (item10074.type === PlatformTypes.PLAYSTATION) {
              const push2 = items.push;
              const obj2 = {
                label: intl2.string(intl4.t.vzfxmY),
                iconSource: getConsoleIconDefault(item10074.type),
                showIconFirst: false,
                action() {
                  const channel = loading.getChannel(closure_2_1);
                  if (null != channel) {
                    const obj = items(style[29]);
                    obj.onConnectToConsole(channel, closure_0);
                  }
                },
              };
              intl2 = intl4.intl;
              push2(obj2);
            }
          }
          let obj = isConnectedToVoiceChannel(style[22]);
          if (!obj.isAndroid()) {
            if (0 !== arr5.length) {
              const items = [];
              let tmp9 = closure_7;
              const tmp5 = closure_7 || stateFromStores2 !== isConnectedToVoiceChannel(style[24]).RouteTypes.SPEAKER;
              if (!tmp5) {
                let obj2 = {
                  label: intl.string(isConnectedToVoiceChannel(style[25]).t.gvQIzx),
                  iconSource: channelId(style[26]),
                  showIconFirst: false,
                  action() {
                    const AudioRoutePicker = closure_1_7.AudioRoutePicker;
                    let toggleSpeakerResult;
                    if (AudioRoutePicker != null) {
                      toggleSpeakerResult = AudioRoutePicker.toggleSpeaker(false);
                    }
                    return toggleSpeakerResult;
                  },
                };
                let push = items.push;
                intl = isConnectedToVoiceChannel(style[25]).intl;
                push(obj2);
              }
              if (!tmp9) {
                tmp9 = stateFromStores2 !== isConnectedToVoiceChannel(style[24]).RouteTypes.RECEIVER;
              }
              if (!tmp9) {
                let push2 = items.push;
                const obj3 = {
                  label: intl2.string(isConnectedToVoiceChannel(style[25]).t.wwTN1g),
                  iconSource: channelId(style[27]),
                  showIconFirst: false,
                  action() {
                    const AudioRoutePicker = closure_1_7.AudioRoutePicker;
                    let toggleSpeakerResult;
                    if (AudioRoutePicker != null) {
                      toggleSpeakerResult = AudioRoutePicker.toggleSpeaker(true);
                    }
                    return toggleSpeakerResult;
                  },
                };
                intl2 = isConnectedToVoiceChannel(style[25]).intl;
                push2(obj3);
              }
              const push3 = items.push;
              const obj4 = {
                label: intl3.string(isConnectedToVoiceChannel(style[25]).t.dnI0AL),
                iconSource: channelId(style[28]),
                showIconFirst: false,
                action() {
                  const obj = isConnectedToVoiceChannel(style[23]);
                  const result = obj.showAudioOutputSelector(channelId, items);
                },
              };
              intl3 = isConnectedToVoiceChannel(style[25]).intl;
              push3(obj4);
              for (const item10074 of arr5) {
                let tmp16 = _loop2(item10074);
                continue;
              }
              return items;
            }
          }
          return ref;
        }, items6);
        const callback = obj5.useCallback(() => {
          const obj = DismissibleContentUnsafeUtils;
          const result = obj.UNSAFE_markDismissibleContentAsDismissed(
            dismissible_content.DismissibleContent.DONUT_MOBILE_NUX,
          );
          setVoiceUpsellDismissed(true);
          closure_3.lock();
        }, items7);
        ref = obj5.useRef(null);
        if (tmp10) {
          function renderButton(arg0) {
            let intl;
            let obj4;
            let str;
            let tmp12;
            let tmp15;
            let tmp9;
            let tmp = arg0;
            if (arg0 == null) {
              tmp = { onPress, ref: "Array" };
              const obj = { onPress, ref: "Array" };
            }
            const obj2 = { targetRef: tmp.ref, canShowTooltip: tmp9 };
            tmp9 = closure_15;
            const tmp3 = _objectWithoutProperties(tmp, closure_4);
            const tmp8 = tmp.ref;
            if (closure_15) {
              tmp9 = isConnectedToVoiceChannel;
            }
            const items = [closure_15(closure_19, obj2)];
            const obj3 = { style, ref: tmp8, children: closure_15(tmp12, obj4) };
            obj4 = {
              ref: tmp.ref,
              disabled,
              overrideVariant: str,
              loading,
              icon: tmp15,
              accessibilityLabel: intl.string(intl4.t.dnI0AL),
            };
            const tmp11 = NativeViewDefault;
            tmp12 = VoicePanelIconButtonDefault;
            const merged = Object.assign(tmp3);
            str = undefined;
            if (isConnectedToVoiceChannel) {
              if (c6) {
                str = "primary-overlay";
              }
            }
            tmp15 = closure_13;
            if (closure_13 == null) {
              tmp15 = c5;
            }
            const obj5 = { children: items };
            intl = intl4.intl;
            items[1] = closure_15(tmp11, obj3);
            return stateFromStores2(authStore3, obj5);
          }
          const tmp3Result2 = tmp3(tmp[22]);
          if (!tmp3Result2.isAndroid()) {
            let renderButtonResult;
            if (tmp8) {
              let tmp16 = stateFromStores2;
              const obj6 = { children: items8 };
              const obj7 = { targetRef: ref, canShowTooltip: isConnectedToVoiceChannel };
              items8 = [closure_15(closure_19, obj7)];
              const obj8 = {
                menuItems: memo,
                position: "bottom",
                align: "end",
                onRequestOpen: callback,
                onRequestClose: tmp2.unlock,
                children: renderButton,
              };
              items8[1] = closure_15(tmp3(tmp[34]).MenuPopout, obj8);
              renderButtonResult = stateFromStores2(onPress, obj6);
            }
            return renderButtonResult;
          }
          renderButtonResult = renderButton();
        } else {
          return null;
        }
      },
);
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderSpeaker.tsx");

export default memoResult;
