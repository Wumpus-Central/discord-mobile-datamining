// === Module 17234: VoicePanelHeaderSpeaker ===

// Module 17234 (VoicePanelHeaderSpeaker)
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4698 */;
import NativeViewDefault from "NativeView" /* 5976 */;
import showAudioOutputSelector from "showAudioOutputSelector" /* 9330 */;
import useOnConnectToConsole from "useOnConnectToConsole" /* 9446 */;
import getConsoleIconDefault from "getConsoleIcon" /* 9463 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 17164 */;
import useSpeakerTooltipsDefault from "useSpeakerTooltips" /* 17237 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4907 */;
import AudioRouteStore from "AudioRouteStore" /* 9300 */;
import AudioRouteSwitchingStore from "AudioRouteSwitchingStore" /* 17236 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SessionsStore from "SessionsStore" /* 4908 */;

require = fn;
let closure_3 = ["ref"];
let closure_4 = ["ref"];
const NativeModules = fn(17).NativeModules;
const setVoiceUpsellDismissed = fn(17235).setVoiceUpsellDismissed;
const PlatformTypes = fn(1085).PlatformTypes;
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
const menuItems = [];
let ReactCompilerGating = fn(558);
let closure_19 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  ({ targetRef, canShowTooltip } = arg0);
  useSpeakerTooltipsDefault(targetRef, canShowTooltip);
  return null;
}) : ((arg0) => {
  ({ targetRef, canShowTooltip } = arg0);
  useSpeakerTooltipsDefault(targetRef, canShowTooltip);
  return null;
}));
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderSpeaker.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((isConnectedToVoiceChannel) => {
  let _loop = style;
  const cResult = isConnectedToVoiceChannel(style[13]).c(48);
  isConnectedToVoiceChannel = isConnectedToVoiceChannel.isConnectedToVoiceChannel;
  const channelId = isConnectedToVoiceChannel.channelId;
  style = isConnectedToVoiceChannel.style;
  let num = channelId(style[14])();
  let obj = isConnectedToVoiceChannel(style[13]);
  const maskedSpeakerStates = isConnectedToVoiceChannel(style[15]).useMaskedSpeakerStates();
  const toggleAudio = maskedSpeakerStates.toggleAudio;
  const routeSource = maskedSpeakerStates.routeSource;
  const isAudioRouteEnabled = maskedSpeakerStates.isAudioRouteEnabled;
  const tmp5 = channelId(style[16])();
  const tmp6 = channelId(style[17])();
  closure_7 = tmp6;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [loading];
    const fn = function _() {
      return loading.getAwaitingRemoteSessionInfo();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  let obj2 = isConnectedToVoiceChannel(style[15]);
  const stateFromStores = isConnectedToVoiceChannel(_loop[18]).useStateFromStores(tmp7, tmp8);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [queueAudioSwap];
    const fn2 = function x() {
      return queueAudioSwap.getQueueAudioSwap();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp12 = fn2;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  let tmpResult = isConnectedToVoiceChannel(_loop[18]);
  const stateFromStores1 = isConnectedToVoiceChannel(_loop[18]).useStateFromStores(tmp11, tmp12);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [items4];
    cResult[4] = items2;
    let tmp15 = items2;
  } else {
    tmp15 = cResult[4];
  }
  let sessionId;
  if (tmp6 != null) {
    sessionId = tmp6.sessionId;
  }
  if (cResult[5] !== sessionId) {
    let sessionId1;
    if (tmp6 != null) {
      sessionId1 = tmp6.sessionId;
    }
    const fn3 = function q() {
      let str;
      if (closure_7 != null) {
        str = closure_7.sessionId;
      }
      if (str == null) {
        str = "";
      }
      return SessionsStore.getSessionById(str);
    };
    cResult[5] = sessionId1;
    cResult[6] = fn3;
    let tmp18 = fn3;
  } else {
    tmp18 = cResult[6];
  }
  const tmpResult5 = isConnectedToVoiceChannel(_loop[18]);
  const stateFromStores2 = isConnectedToVoiceChannel(_loop[18]).useStateFromStores(tmp15, tmp18);
  loading = tmp21;
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
    let tmp25 = null;
    if (null != type) {
      tmp25 = tmp3(_loop[19])(type);
    }
    cResult[7] = type;
    cResult[8] = tmp25;
    let tmp24 = tmp25;
  } else {
    tmp24 = cResult[8];
  }
  const currentRouteType = tmp24;
  const arr4 = channelId(_loop[20])();
  const tmp27 = channelId(_loop[21])(channelId);
  let tmp28 = tmp27.canConnect && !tmp27.isAtMaxCapacity;
  if (tmp28) {
    let tmp29 = isConnectedToVoiceChannel;
    if (!isConnectedToVoiceChannel) {
      tmp29 = tmp26;
    }
    tmp28 = tmp29;
  }
  queueAudioSwap = tmp28;
  if (cResult[9] === channelId) {
    if (cResult[10] === isConnectedToVoiceChannel) {
      if (cResult[11] === toggleAudio) {
        let tmp30 = cResult[12];
      }
      const onPress = tmp30;
      const _Symbol = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [currentRouteType];
        function oe() {
          return currentRouteType.getCurrentRouteType();
        }
        cResult[13] = oe;
        cResult[14] = items3;
        let tmp32 = items3;
        let tmp31 = oe;
      } else {
        tmp31 = cResult[13];
        tmp32 = cResult[14];
      }
      const stateFromStores3 = tmp(_loop[18]).useStateFromStores(tmp32, tmp31);
      const tmpResult7 = tmp(_loop[18]);
      if (!tmpResult8.isAndroid()) {
        if (0 !== arr4.length) {
          if (cResult[15] === channelId) {
            if (cResult[16] === arr4) {
              if (cResult[17] === isConnectedToVoiceChannel) {
                if (cResult[18] === tmp5) {
                  if (cResult[19] === stateFromStores3) {
                    items4 = cResult[20];
                  }
                }
              }
            }
          }
          items4 = [];
          if (!tmp5) {
            if (stateFromStores3 === tmp(_loop[24]).RouteTypes.SPEAKER) {
              const _Symbol7 = Symbol;
              if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                let intl = tmp(_loop[25]).intl;
                const stringResult = intl.string(tmp(_loop[25]).t.gvQIzx);
                cResult[21] = stringResult;
                let num13 = stringResult;
              } else {
                num13 = cResult[21];
              }
              const _Symbol2 = Symbol;
              if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                let obj3 = {
                  label: num13,
                  iconSource: tmp3(_loop[26]),
                  showIconFirst: false,
                  action() {
                                  const AudioRoutePicker = closure_7.AudioRoutePicker;
                                  let toggleSpeakerResult;
                                  if (AudioRoutePicker != null) {
                                    toggleSpeakerResult = AudioRoutePicker.toggleSpeaker(false);
                                  }
                                  return toggleSpeakerResult;
                                }
                };
                num13 = 22;
                cResult[22] = obj3;
                let tmp37 = obj3;
              } else {
                tmp37 = cResult[22];
              }
              items4.push(tmp37);
            }
          }
          if (!tmp5) {
            if (stateFromStores3 === tmp(_loop[24]).RouteTypes.RECEIVER) {
              const _Symbol8 = Symbol;
              if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                let intl2 = tmp(_loop[25]).intl;
                const stringResult1 = intl2.string(tmp(_loop[25]).t.wwTN1g);
                cResult[23] = stringResult1;
                let num15 = stringResult1;
              } else {
                num15 = cResult[23];
              }
              const _Symbol3 = Symbol;
              if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                let obj4 = {
                  label: num15,
                  iconSource: tmp3(_loop[27]),
                  showIconFirst: false,
                  action() {
                                  const AudioRoutePicker = closure_7.AudioRoutePicker;
                                  let toggleSpeakerResult;
                                  if (AudioRoutePicker != null) {
                                    toggleSpeakerResult = AudioRoutePicker.toggleSpeaker(true);
                                  }
                                  return toggleSpeakerResult;
                                }
                };
                num15 = 24;
                cResult[24] = obj4;
                let tmp40 = obj4;
              } else {
                tmp40 = cResult[24];
              }
              items4.push(tmp40);
            }
          }
          const _Symbol4 = Symbol;
          if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(_loop[25]).intl;
            const stringResult2 = intl3.string(tmp(_loop[25]).t.dnI0AL);
            cResult[25] = stringResult2;
            let tmp42 = stringResult2;
          } else {
            tmp42 = cResult[25];
          }
          if (cResult[26] === channelId) {
            if (cResult[27] === isConnectedToVoiceChannel) {
              let tmp44 = cResult[28];
            }
            items4.push(tmp44);
            _loop = function _loop(type) {
              closure_0 = type;
              if (type.type === ref.XBOX) {
                let obj = { label: null, iconSource: null, showIconFirst: false, action: null };
                const intl = isConnectedToVoiceChannel(style[25]).intl;
                obj.label = intl.string(isConnectedToVoiceChannel(style[25]).t["qVE/VF"]);
                obj.iconSource = channelId(style[19])(type.type);
                obj.action = function action() {
                  const channel = ChannelStore.getChannel(channelId);
                  if (null != channel) {
                    useOnConnectToConsole.onConnectToConsole(channel, closure_0);
                  }
                };
                items4.push(obj);
              }
              if (type.type === ref.PLAYSTATION) {
                const obj2 = { label: null, iconSource: null, showIconFirst: false, action: null };
                const intl2 = isConnectedToVoiceChannel(style[25]).intl;
                obj2.label = intl2.string(isConnectedToVoiceChannel(style[25]).t.vzfxmY);
                obj2.iconSource = channelId(style[19])(type.type);
                obj2.action = function action() {
                  const channel = ChannelStore.getChannel(channelId);
                  if (null != channel) {
                    useOnConnectToConsole.onConnectToConsole(channel, closure_0);
                  }
                };
                items4.push(obj2);
              }
            };
            arr4[Symbol.iterator]();
          }
          let obj5 = {
            label: tmp42,
            iconSource: tmp3(_loop[28]),
            showIconFirst: false,
            action() {
                      const result = showAudioOutputSelector.showAudioOutputSelector(channelId, isConnectedToVoiceChannel);
                    }
          };
          cResult[26] = channelId;
          cResult[27] = isConnectedToVoiceChannel;
          cResult[28] = obj5;
          tmp44 = obj5;
        }
        if (cResult[29] !== num) {
          function pe() {
            const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
            setVoiceUpsellDismissed(true);
            num.lock();
          }
          cResult[29] = num;
          cResult[30] = pe;
          let tmp48 = pe;
        } else {
          tmp48 = cResult[30];
        }
        if (tmp28) {
          if (cResult[31] === tmp21) {
            if (cResult[32] === tmp24) {
              if (cResult[33] === tmp30) {
                if (cResult[34] === tmp48) {
                  if (cResult[35] === tmp26) {
                    if (cResult[36] === stateFromStores1) {
                      if (cResult[37] === isAudioRouteEnabled) {
                        if (cResult[38] === isConnectedToVoiceChannel) {
                          if (cResult[39] === num.unlock) {
                            if (cResult[40] === menuItems) {
                              if (cResult[41] === routeSource) {
                                if (cResult[42] === tmp28) {
                                  if (cResult[43] === style) {
                                    let tmp51 = cResult[44];
                                    const _Symbol6 = Symbol;
                                    if (cResult[45] !== Symbol.for("react.early_return_sentinel")) {
                                      tmp51 = tmp52;
                                    }
                                    return tmp51;
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
          }
          const _Symbol5 = Symbol;
          function renderButton(arg0) {
            let tmp = arg0;
            if (arg0 == null) {
              const obj = { onPress, ref: "a" };
              tmp = obj;
            }
            const obj2 = { targetRef: ref, canShowTooltip: null };
            let tmp9 = closure_11;
            if (closure_11) {
              tmp9 = isConnectedToVoiceChannel;
            }
            obj2.canShowTooltip = tmp9;
            const items = [closure_2_15(closure_19, obj2), ];
            const obj3 = { style, ref, children: null };
            const tmp3 = _objectWithoutProperties(tmp, closure_3);
            const obj4 = { ref: tmp.ref };
            const tmp11 = NativeViewDefault;
            const merged = Object.assign(tmp3);
            obj4.disabled = stateFromStores1;
            let str;
            if (isConnectedToVoiceChannel) {
              if (isAudioRouteEnabled) {
                str = "primary-overlay";
              }
            }
            obj4.overrideVariant = str;
            obj4.loading = loading;
            let tmp15 = closure_10;
            if (closure_10 == null) {
              tmp15 = routeSource;
            }
            const obj5 = { children: null };
            obj4.icon = tmp15;
            const intl = util.intl;
            obj4.accessibilityLabel = intl.string(util.t.dnI0AL);
            obj3.children = closure_2_15(VoicePanelIconButtonDefault, obj4);
            items[1] = closure_2_15(tmp11, obj3);
            obj5.children = items;
            return constants(value2, obj5);
          }
          const forResult = Symbol.for("react.early_return_sentinel");
          const tmp54 = isConnectedToVoiceChannel;
          const tmp55 = style;
          if (!obj11.isAndroid()) {
            if (tmp26) {
              if (cResult[46] !== isConnectedToVoiceChannel) {
                const obj6 = { targetRef: ref, canShowTooltip: isConnectedToVoiceChannel };
                const tmp59 = closure_15(closure_19, obj6);
                cResult[46] = isConnectedToVoiceChannel;
                cResult[47] = tmp59;
                let tmp56 = tmp59;
              } else {
                tmp56 = cResult[47];
              }
              const obj7 = { children: null };
              const items5 = [tmp56, ];
              const obj8 = { menuItems, position: "bottom", align: "end", onRequestOpen: tmp48, onRequestClose: num.unlock, children: renderButton };
              items5[1] = closure_15(tmp54(tmp55[34]).MenuPopout, obj8);
              obj7.children = items5;
              let tmp63 = closure_17(closure_16, obj7);
            }
            cResult[31] = tmp21;
            cResult[32] = tmp24;
            cResult[33] = tmp30;
            cResult[34] = tmp48;
            cResult[35] = tmp26;
            cResult[36] = stateFromStores1;
            cResult[37] = isAudioRouteEnabled;
            cResult[38] = isConnectedToVoiceChannel;
            renderButton = num.unlock;
            cResult[39] = renderButton;
            cResult[40] = menuItems;
            cResult[41] = routeSource;
            cResult[42] = tmp28;
            cResult[43] = style;
            cResult[44] = renderButtonResult;
            num = 45;
            cResult[45] = tmp63;
          }
          renderButtonResult = renderButton();
          tmp63 = forResult;
          obj11 = isConnectedToVoiceChannel(style[22]);
        } else {
          return null;
        }
        ref = isAudioRouteEnabled.useRef(null);
      }
      tmpResult8 = tmp(_loop[22]);
    }
  }
  class H {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[22]);
      if (obj.isAndroid()) {
        tmpResult = tmp(tmp2[23]);
        tmp7 = channelId;
        tmp8 = isConnectedToVoiceChannel;
        result = tmpResult.showAudioOutputSelector(channelId, isConnectedToVoiceChannel);
      } else {
        tmp3 = toggleAudio;
        tmp4 = channelId;
        tmp5 = isConnectedToVoiceChannel;
        tmp6 = toggleAudio(channelId, isConnectedToVoiceChannel);
      }
      return;
    }
  }
  cResult[9] = channelId;
  cResult[10] = isConnectedToVoiceChannel;
  cResult[11] = toggleAudio;
  cResult[12] = H;
  tmp30 = H;
  const tmpResult6 = isConnectedToVoiceChannel(_loop[18]);
}) : (function VoicePanelHeaderSpeaker(isConnectedToVoiceChannel) {
  isConnectedToVoiceChannel = isConnectedToVoiceChannel.isConnectedToVoiceChannel;
  const channelId = isConnectedToVoiceChannel.channelId;
  const style = isConnectedToVoiceChannel.style;
  c5 = undefined;
  noop = undefined;
  let stateFromStores;
  let stateFromStores1;
  closure_13 = undefined;
  closure_15 = undefined;
  let onPress;
  let stateFromStores2;
  let ref;
  const tmp2 = channelId(style[14])();
  closure_3 = tmp2;
  const maskedSpeakerStates = isConnectedToVoiceChannel(style[15]).useMaskedSpeakerStates();
  const toggleAudio = maskedSpeakerStates.toggleAudio;
  ({ routeSource: c5, isAudioRouteEnabled: c6 } = maskedSpeakerStates);
  let tmp5 = channelId(style[16])();
  closure_7 = tmp5;
  const sessionId = channelId(style[17])();
  let obj = isConnectedToVoiceChannel(style[15]);
  let items = [stateFromStores];
  stateFromStores = isConnectedToVoiceChannel(style[18]).useStateFromStores(items, () => stateFromStores.getAwaitingRemoteSessionInfo());
  let obj2 = isConnectedToVoiceChannel(style[18]);
  const items1 = [stateFromStores1];
  const disabled = isConnectedToVoiceChannel(style[18]).useStateFromStores(items1, () => stateFromStores1.getQueueAudioSwap());
  let obj3 = isConnectedToVoiceChannel(style[18]);
  const items2 = [closure_13];
  stateFromStores1 = isConnectedToVoiceChannel(style[18]).useStateFromStores(items2, () => {
    let str;
    if (sessionId != null) {
      str = sessionId.sessionId;
    }
    if (str == null) {
      str = "";
    }
    return SessionsStore.getSessionById(str);
  });
  const loading = null != stateFromStores;
  const items3 = [stateFromStores, stateFromStores1];
  closure_13 = noop.useMemo(() => {
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
  let arr5 = channelId(style[20])();
  let tmp9 = channelId(style[21])(channelId);
  let tmp10 = tmp9.canConnect && !tmp9.isAtMaxCapacity;
  if (tmp10) {
    let tmp11 = isConnectedToVoiceChannel;
    if (!isConnectedToVoiceChannel) {
      tmp11 = tmp8;
    }
    tmp10 = tmp11;
  }
  closure_15 = tmp10;
  const items4 = [channelId, isConnectedToVoiceChannel, toggleAudio];
  onPress = obj5.useCallback(() => {
    if (obj.isAndroid()) {
      const result = showAudioOutputSelector.showAudioOutputSelector(channelId, isConnectedToVoiceChannel);
      const tmpResult = showAudioOutputSelector;
    } else {
      toggleAudio(channelId, isConnectedToVoiceChannel);
    }
    obj = PlatformUtils;
  }, items4);
  let obj4 = isConnectedToVoiceChannel(style[18]);
  const items5 = [disabled];
  stateFromStores2 = isConnectedToVoiceChannel(style[18]).useStateFromStores(items5, () => disabled.getCurrentRouteType());
  const items6 = [arr5, channelId, isConnectedToVoiceChannel, stateFromStores2, tmp5];
  const items7 = [tmp2];
  const memo = obj5.useMemo(() => {
    if (!obj.isAndroid()) {
      if (0 !== arr5.length) {
        const items = [];
        let tmp9 = closure_7;
        let tmp5 = closure_7;
        if (!closure_7) {
          tmp5 = stateFromStores2 !== isConnectedToVoiceChannel(style[24]).RouteTypes.SPEAKER;
        }
        if (!tmp5) {
          let obj2 = { label: null, iconSource: null, showIconFirst: false, action: null };
          let intl = isConnectedToVoiceChannel(style[25]).intl;
          obj2.label = intl.string(isConnectedToVoiceChannel(style[25]).t.gvQIzx);
          obj2.iconSource = channelId(style[26]);
          obj2.action = function action() {
            const AudioRoutePicker = closure_1_7.AudioRoutePicker;
            let toggleSpeakerResult;
            if (AudioRoutePicker != null) {
              toggleSpeakerResult = AudioRoutePicker.toggleSpeaker(false);
            }
            return toggleSpeakerResult;
          };
          items.push(obj2);
        }
        if (!tmp9) {
          tmp9 = stateFromStores2 !== isConnectedToVoiceChannel(style[24]).RouteTypes.RECEIVER;
        }
        if (!tmp9) {
          const obj3 = { label: null, iconSource: null, showIconFirst: false, action: null };
          let intl2 = isConnectedToVoiceChannel(style[25]).intl;
          obj3.label = intl2.string(isConnectedToVoiceChannel(style[25]).t.wwTN1g);
          obj3.iconSource = channelId(style[27]);
          obj3.action = function action() {
            const AudioRoutePicker = closure_1_7.AudioRoutePicker;
            let toggleSpeakerResult;
            if (AudioRoutePicker != null) {
              toggleSpeakerResult = AudioRoutePicker.toggleSpeaker(true);
            }
            return toggleSpeakerResult;
          };
          items.push(obj3);
        }
        const obj4 = { label: null, iconSource: null, showIconFirst: false, action: null };
        const intl3 = isConnectedToVoiceChannel(style[25]).intl;
        obj4.label = intl3.string(isConnectedToVoiceChannel(style[25]).t.dnI0AL);
        obj4.iconSource = channelId(style[28]);
        obj4.action = function action() {
          const result = isConnectedToVoiceChannel(style[23]).showAudioOutputSelector(channelId, items);
        };
        arr5 = items.push(obj4);
        for (const item10074 of tmp3) {
          let tmp16 = (function _loop2(item10074) {
            closure_0 = item10074;
            if (item10074.type === PlatformTypes.XBOX) {
              let obj = { label: null, iconSource: null, showIconFirst: false, action: null };
              const intl = util.intl;
              obj.label = intl.string(util.t["qVE/VF"]);
              obj.iconSource = getConsoleIconDefault(item10074.type);
              obj.action = function action() {
                const channel = closure_12.getChannel(channelId);
                if (null != channel) {
                  isConnectedToVoiceChannel(style[29]).onConnectToConsole(channel, closure_0);
                  const obj = isConnectedToVoiceChannel(style[29]);
                }
              };
              items.push(obj);
            }
            if (item10074.type === PlatformTypes.PLAYSTATION) {
              const obj2 = { label: null, iconSource: null, showIconFirst: false, action: null };
              const intl2 = util.intl;
              obj2.label = intl2.string(util.t.vzfxmY);
              obj2.iconSource = getConsoleIconDefault(item10074.type);
              obj2.action = function action() {
                const channel = closure_12.getChannel(channelId);
                if (null != channel) {
                  isConnectedToVoiceChannel(style[29]).onConnectToConsole(channel, closure_0);
                  const obj = isConnectedToVoiceChannel(style[29]);
                }
              };
              items.push(obj2);
            }
          })(item10074);
          continue;
        }
        return items;
      }
    }
    return ref;
  }, items6);
  const callback = obj5.useCallback(() => {
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
    setVoiceUpsellDismissed(true);
    closure_3.lock();
  }, items7);
  ref = obj5.useRef(null);
  if (tmp10) {
    function renderButton(arg0) {
      let tmp = arg0;
      if (arg0 == null) {
        const obj = { onPress, ref: "a" };
        tmp = obj;
      }
      const obj2 = { targetRef: ref, canShowTooltip: null };
      let tmp9 = closure_15;
      if (closure_15) {
        tmp9 = isConnectedToVoiceChannel;
      }
      obj2.canShowTooltip = tmp9;
      const items = [closure_2_15(closure_19, obj2), ];
      const obj3 = { style, ref, children: null };
      const tmp3 = _objectWithoutProperties(tmp, closure_4);
      const obj4 = { ref: tmp.ref };
      const tmp11 = NativeViewDefault;
      const merged = Object.assign(tmp3);
      obj4.disabled = disabled;
      let str;
      if (isConnectedToVoiceChannel) {
        if (c6) {
          str = "primary-overlay";
        }
      }
      obj4.overrideVariant = str;
      obj4.loading = loading;
      let tmp15 = closure_13;
      if (closure_13 == null) {
        tmp15 = c5;
      }
      const obj5 = { children: null };
      obj4.icon = tmp15;
      const intl = util.intl;
      obj4.accessibilityLabel = intl.string(util.t.dnI0AL);
      obj3.children = closure_2_15(VoicePanelIconButtonDefault, obj4);
      items[1] = closure_2_15(tmp11, obj3);
      obj5.children = items;
      return constants(value2, obj5);
    }
    if (!tmp3Result2.isAndroid()) {
      if (tmp8) {
        const obj6 = { children: null };
        const obj7 = { targetRef: ref, canShowTooltip: isConnectedToVoiceChannel };
        const items8 = [closure_15(closure_19, obj7), ];
        const obj8 = { menuItems: memo, position: "bottom", align: "end", onRequestOpen: callback, onRequestClose: tmp2.unlock, children: renderButton };
        items8[1] = closure_15(tmp3(tmp[34]).MenuPopout, obj8);
        obj6.children = items8;
        let renderButtonResult = stateFromStores2(onPress, obj6);
      }
      return renderButtonResult;
    }
    renderButtonResult = renderButton();
    tmp3Result2 = tmp3(tmp[22]);
  } else {
    return null;
  }
  const tmp3Result = isConnectedToVoiceChannel(style[18]);
}));