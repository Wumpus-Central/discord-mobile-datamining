// === Module 17118: VoicePanelHeaderSpeaker ===

// Module 17118 (VoicePanelHeaderSpeaker)
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4380 */;
import NativeViewDefault from "NativeView" /* 5589 */;
import showAudioOutputSelector from "showAudioOutputSelector" /* 9114 */;
import getConsoleIconDefault from "getConsoleIcon" /* 9463 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 17035 */;
import useSpeakerTooltipsDefault from "useSpeakerTooltips" /* 17122 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4577 */;
import StageChannelAudioStore from "StageChannelAudioStore" /* 17120 */;
import AudioRouteStore from "AudioRouteStore" /* 9083 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SessionsStore from "SessionsStore" /* 4578 */;

require = fn;
let closure_3 = ["ref"];
const NativeModules = fn(17).NativeModules;
const setVoiceUpsellDismissed = fn(17119).setVoiceUpsellDismissed;
const PlatformTypes = fn(1074).PlatformTypes;
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
let closure_17 = [];
let closure_18 = noop.memo((arg0) => {
  ({ targetRef, canShowTooltip } = arg0);
  useSpeakerTooltipsDefault(targetRef, canShowTooltip);
  return null;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderSpeaker.tsx");

export default noop.memo(function VoicePanelHeaderSpeaker(isConnectedToVoiceChannel) {
  isConnectedToVoiceChannel = isConnectedToVoiceChannel.isConnectedToVoiceChannel;
  const channelId = isConnectedToVoiceChannel.channelId;
  const style = isConnectedToVoiceChannel.style;
  noop = undefined;
  c6 = undefined;
  closure_12 = undefined;
  closure_14 = undefined;
  let onPress;
  let stateFromStores2;
  let ref;
  const tmp2 = channelId(style[12])();
  closure_3 = tmp2;
  let obj = isConnectedToVoiceChannel(style[13]);
  const maskedSpeakerStates = obj.useMaskedSpeakerStates();
  const toggleAudio = maskedSpeakerStates.toggleAudio;
  ({ routeSource: c5, isAudioRouteEnabled: c6 } = maskedSpeakerStates);
  let tmp5 = channelId(style[14])();
  closure_7 = tmp5;
  const awaitingRemoteSessionInfo = channelId(style[15])();
  let obj1 = isConnectedToVoiceChannel(style[16]);
  let items = [awaitingRemoteSessionInfo];
  const stateFromStores = obj1.useStateFromStores(items, () => awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const items1 = [stateFromStores];
  const disabled = isConnectedToVoiceChannel(style[16]).useStateFromStores(items1, () => stateFromStores.getQueueAudioSwap());
  const obj3 = isConnectedToVoiceChannel(style[16]);
  const items2 = [closure_12];
  const stateFromStores1 = isConnectedToVoiceChannel(style[16]).useStateFromStores(items2, () => {
    let str;
    if (awaitingRemoteSessionInfo != null) {
      str = awaitingRemoteSessionInfo.sessionId;
    }
    if (str == null) {
      str = "";
    }
    return SessionsStore.getSessionById(str);
  });
  const items3 = [stateFromStores, stateFromStores1];
  closure_12 = noop.useMemo(() => {
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
  const arr5 = channelId(style[18])();
  let tmp9 = channelId(style[19])(channelId);
  let tmp10 = tmp9.canConnect && !tmp9.isAtMaxCapacity;
  if (tmp10) {
    let tmp11 = isConnectedToVoiceChannel;
    if (!isConnectedToVoiceChannel) {
      tmp11 = tmp8;
    }
    tmp10 = tmp11;
  }
  closure_14 = tmp10;
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
  let tmp3Result = tmp3(tmp[16]);
  const items5 = [disabled];
  stateFromStores2 = tmp3Result.useStateFromStores(items5, () => disabled.getCurrentRouteType());
  const items6 = [arr5, channelId, isConnectedToVoiceChannel, stateFromStores2, tmp5];
  const items7 = [tmp2];
  const memo = obj5.useMemo(() => {
    let obj = isConnectedToVoiceChannel(style[20]);
    if (!obj.isAndroid()) {
      if (0 !== arr5.length) {
        const items = [];
        let tmp9 = closure_7;
        let tmp5 = closure_7;
        if (!closure_7) {
          tmp5 = stateFromStores2 !== isConnectedToVoiceChannel(style[22]).RouteTypes.SPEAKER;
        }
        if (!tmp5) {
          obj = { label: null, iconSource: null, showIconFirst: false, action: null };
          let intl = isConnectedToVoiceChannel(style[23]).intl;
          obj.label = intl.string(isConnectedToVoiceChannel(style[23]).t.gvQIzx);
          obj.iconSource = channelId(style[24]);
          obj.action = function action() {
            const AudioRoutePicker = closure_1_6.AudioRoutePicker;
            let toggleSpeakerResult;
            if (AudioRoutePicker != null) {
              toggleSpeakerResult = AudioRoutePicker.toggleSpeaker(false);
            }
            return toggleSpeakerResult;
          };
          items.push(obj);
        }
        if (!tmp9) {
          tmp9 = stateFromStores2 !== isConnectedToVoiceChannel(style[22]).RouteTypes.RECEIVER;
        }
        if (!tmp9) {
          obj = { label: null, iconSource: null, showIconFirst: false, action: null };
          let intl2 = isConnectedToVoiceChannel(style[23]).intl;
          obj.label = intl2.string(isConnectedToVoiceChannel(style[23]).t.wwTN1g);
          obj.iconSource = channelId(style[25]);
          obj.action = function action() {
            const AudioRoutePicker = closure_1_6.AudioRoutePicker;
            let toggleSpeakerResult;
            if (AudioRoutePicker != null) {
              toggleSpeakerResult = AudioRoutePicker.toggleSpeaker(true);
            }
            return toggleSpeakerResult;
          };
          items.push(obj);
        }
        const obj1 = { label: null, iconSource: null, showIconFirst: false, action: null };
        const intl3 = isConnectedToVoiceChannel(style[23]).intl;
        obj1.label = intl3.string(isConnectedToVoiceChannel(style[23]).t.dnI0AL);
        obj1.iconSource = channelId(style[26]);
        obj1.action = function action() {
          const result = isConnectedToVoiceChannel(style[21]).showAudioOutputSelector(channelId, items);
        };
        items.push(obj1);
        for (const item10074 of tmp3) {
          let tmp16 = (function _loop(item10074) {
            closure_0 = item10074;
            if (item10074.type === PlatformTypes.XBOX) {
              let obj = { label: null, iconSource: null, showIconFirst: false, action: null };
              const intl = util.intl;
              obj.label = intl.string(util.t["qVE/VF"]);
              obj.iconSource = getConsoleIconDefault(item10074.type);
              obj.action = function action() {
                const channel = stateFromStores1.getChannel(channelId);
                if (null != channel) {
                  isConnectedToVoiceChannel(style[27]).onConnectToConsole(channel, closure_0);
                  const obj = isConnectedToVoiceChannel(style[27]);
                }
              };
              items.push(obj);
            }
            if (item10074.type === PlatformTypes.PLAYSTATION) {
              obj = { label: null, iconSource: null, showIconFirst: false, action: null };
              const intl2 = util.intl;
              obj.label = intl2.string(util.t.vzfxmY);
              obj.iconSource = getConsoleIconDefault(item10074.type);
              obj.action = function action() {
                const channel = stateFromStores1.getChannel(channelId);
                if (null != channel) {
                  isConnectedToVoiceChannel(style[27]).onConnectToConsole(channel, closure_0);
                  const obj = isConnectedToVoiceChannel(style[27]);
                }
              };
              items.push(obj);
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
        let obj = { onPress, ref: "a" };
        tmp = obj;
      }
      obj = { targetRef: ref, canShowTooltip: null };
      let tmp9 = closure_14;
      if (closure_14) {
        tmp9 = isConnectedToVoiceChannel;
      }
      obj.canShowTooltip = tmp9;
      const items = [closure_2_14(closure_18, obj), ];
      obj = { style, ref, children: null };
      const tmp3 = _objectWithoutProperties(tmp, closure_3);
      const obj1 = { ref: tmp.ref };
      const tmp11 = NativeViewDefault;
      const merged = Object.assign(tmp3);
      obj1.disabled = disabled;
      let str;
      if (isConnectedToVoiceChannel) {
        if (c6) {
          str = "primary-overlay";
        }
      }
      obj1.overrideVariant = str;
      obj1.loading = null != stateFromStores;
      let tmp15 = closure_12;
      if (closure_12 == null) {
        tmp15 = c5;
      }
      const obj2 = { children: null };
      obj1.icon = tmp15;
      const intl = util.intl;
      obj1.accessibilityLabel = intl.string(util.t.dnI0AL);
      obj.children = closure_2_14(VoicePanelIconButtonDefault, obj1);
      items[1] = closure_2_14(tmp11, obj);
      obj2.children = items;
      return value2(__initData, obj2);
    }
    tmp3Result = tmp3(tmp[20]);
    if (!tmp3Result.isAndroid()) {
      if (tmp8) {
        obj = { children: null };
        obj = { targetRef: ref, canShowTooltip: isConnectedToVoiceChannel };
        const items8 = [closure_14(closure_18, obj), ];
        obj1 = { menuItems: memo, position: "bottom", align: "end", onRequestOpen: callback, onRequestClose: tmp2.unlock, children: renderButton };
        items8[1] = closure_14(tmp3(tmp[32]).MenuPopout, obj1);
        obj.children = items8;
        let renderButtonResult = stateFromStores2(onPress, obj);
      }
      return renderButtonResult;
    }
    renderButtonResult = renderButton();
  } else {
    return null;
  }
  const obj4 = isConnectedToVoiceChannel(style[16]);
});