// === Module 19225: VoicePanelHeaderSpeaker ===

// Module 19225 (VoicePanelHeaderSpeaker)
import util from "util" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5044 */;
import NativeViewDefault from "NativeView" /* 6960 */;
import showAudioOutputSelector from "showAudioOutputSelector" /* 9228 */;
import getConsoleIconDefault from "getConsoleIcon" /* 14738 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 19143 */;
import useSpeakerTooltipsDefault from "useSpeakerTooltips" /* 19228 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 5765 */;
import AudioRouteStore from "AudioRouteStore" /* 5784 */;
import AudioRouteSwitchingStore from "AudioRouteSwitchingStore" /* 19227 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import SessionsStore from "SessionsStore" /* 5766 */;

require = fn;
let closure_3 = ["ref"];
const NativeModules = fn(17).NativeModules;
const setVoiceUpsellDismissed = fn(19226).setVoiceUpsellDismissed;
const PlatformTypes = fn(1072).PlatformTypes;
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
let closure_17 = [];
let closure_18 = noop.memo(function SpeakerTooltipEffects(arg0) {
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
  let disabled;
  closure_12 = undefined;
  closure_15 = undefined;
  let canConnect;
  let onPress;
  let stateFromStores3;
  let ref;
  let tmp3 = channelId(style[12])();
  closure_3 = tmp3;
  const maskedSpeakerStates = isConnectedToVoiceChannel(style[13]).useMaskedSpeakerStates();
  const toggleAudio = maskedSpeakerStates.toggleAudio;
  ({ routeSource: c5, isAudioRouteEnabled: c6 } = maskedSpeakerStates);
  const tmp6 = channelId(style[14])();
  closure_7 = tmp6;
  const awaitingRemoteSessionInfo = channelId(style[15])();
  let obj = isConnectedToVoiceChannel(style[13]);
  let tmp = channelId;
  let items = [awaitingRemoteSessionInfo];
  const stateFromStores = isConnectedToVoiceChannel(style[16]).useStateFromStores(items, () => awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  let obj2 = isConnectedToVoiceChannel(style[16]);
  const items1 = [disabled];
  disabled = isConnectedToVoiceChannel(style[16]).useStateFromStores(items1, () => disabled.getQueueAudioSwap());
  let obj3 = isConnectedToVoiceChannel(style[16]);
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
  let arr5 = channelId(style[18])();
  let obj4 = isConnectedToVoiceChannel(style[16]);
  const items4 = [stateFromStores1];
  const items5 = [channelId];
  const stateFromStores2 = isConnectedToVoiceChannel(style[16]).useStateFromStores(items4, () => {
    const channel = ChannelStore.getChannel(channelId);
    let flag;
    if (channel != null) {
      flag = channel.isGuildStageVoice();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }, items5);
  let tmp10 = !stateFromStores2;
  if (!stateFromStores2) {
    tmp10 = arr5.length > 0;
  }
  closure_15 = tmp10;
  let tmp11 = tmp(style[19])(channelId);
  canConnect = tmp11.canConnect;
  let tmp12 = isConnectedToVoiceChannel;
  if (!isConnectedToVoiceChannel) {
    if (canConnect) {
      canConnect = !tmp11.isAtMaxCapacity;
    }
    if (canConnect) {
      canConnect = tmp10;
    }
    tmp12 = canConnect;
  }
  canConnect = tmp12;
  const items6 = [channelId, isConnectedToVoiceChannel, toggleAudio];
  onPress = obj5.useCallback(() => {
    if (obj.isAndroid()) {
      const result = showAudioOutputSelector.showAudioOutputSelector(channelId, isConnectedToVoiceChannel);
      const tmpResult = showAudioOutputSelector;
    } else {
      toggleAudio(channelId, isConnectedToVoiceChannel);
    }
    obj = PlatformUtils;
  }, items6);
  const obj6 = isConnectedToVoiceChannel(style[16]);
  const items7 = [stateFromStores];
  stateFromStores3 = isConnectedToVoiceChannel(style[16]).useStateFromStores(items7, () => stateFromStores.getCurrentRouteType());
  const items8 = [arr5, tmp10, channelId, isConnectedToVoiceChannel, stateFromStores3, tmp6];
  const items9 = [tmp3];
  const memo = obj5.useMemo(() => {
    if (!obj.isAndroid()) {
      if (closure_15) {
        const items = [];
        let tmp4 = closure_7;
        let tmp5 = closure_7;
        if (!closure_7) {
          tmp5 = stateFromStores3 !== isConnectedToVoiceChannel(style[22]).RouteTypes.SPEAKER;
        }
        if (!tmp5) {
          let obj2 = { label: null, iconSource: null, showIconFirst: false, action: null };
          let intl = isConnectedToVoiceChannel(style[23]).intl;
          obj2.label = intl.string(isConnectedToVoiceChannel(style[23]).t.gvQIzx);
          obj2.iconSource = channelId(style[24]);
          obj2.action = function action() {
            const AudioRoutePicker = closure_1_6.AudioRoutePicker;
            let toggleSpeakerResult;
            if (AudioRoutePicker != null) {
              toggleSpeakerResult = AudioRoutePicker.toggleSpeaker(false);
            }
            return toggleSpeakerResult;
          };
          items.push(obj2);
        }
        if (!tmp4) {
          tmp4 = stateFromStores3 !== isConnectedToVoiceChannel(style[22]).RouteTypes.RECEIVER;
        }
        if (!tmp4) {
          const obj3 = { label: null, iconSource: null, showIconFirst: false, action: null };
          let intl2 = isConnectedToVoiceChannel(style[23]).intl;
          obj3.label = intl2.string(isConnectedToVoiceChannel(style[23]).t.wwTN1g);
          obj3.iconSource = channelId(style[25]);
          obj3.action = function action() {
            const AudioRoutePicker = closure_1_6.AudioRoutePicker;
            let toggleSpeakerResult;
            if (AudioRoutePicker != null) {
              toggleSpeakerResult = AudioRoutePicker.toggleSpeaker(true);
            }
            return toggleSpeakerResult;
          };
          items.push(obj3);
        }
        const obj4 = { label: null, iconSource: null, showIconFirst: false, action: null };
        const intl3 = isConnectedToVoiceChannel(style[23]).intl;
        obj4.label = intl3.string(isConnectedToVoiceChannel(style[23]).t.dnI0AL);
        obj4.iconSource = channelId(style[26]);
        obj4.action = function action() {
          const result = isConnectedToVoiceChannel(style[21]).showAudioOutputSelector(channelId, items);
        };
        arr5 = items.push(obj4);
        function _loop(iter) {
          closure_0 = iter;
          if (iter.type === PlatformTypes.XBOX) {
            let obj = { label: null, iconSource: null, showIconFirst: false, action: null };
            const intl = util.intl;
            obj.label = intl.string(util.t["qVE/VF"]);
            obj.iconSource = getConsoleIconDefault(iter.type);
            obj.action = function action() {
              const channel = stateFromStores1.getChannel(channelId);
              if (null != channel) {
                isConnectedToVoiceChannel(style[27]).onConnectToConsole(channel, closure_0);
                const obj = isConnectedToVoiceChannel(style[27]);
              }
            };
            items.push(obj);
          }
          if (iter.type === PlatformTypes.PLAYSTATION) {
            const obj2 = { label: null, iconSource: null, showIconFirst: false, action: null };
            const intl2 = util.intl;
            obj2.label = intl2.string(util.t.vzfxmY);
            obj2.iconSource = getConsoleIconDefault(iter.type);
            obj2.action = function action() {
              const channel = stateFromStores1.getChannel(channelId);
              if (null != channel) {
                isConnectedToVoiceChannel(style[27]).onConnectToConsole(channel, closure_0);
                const obj = isConnectedToVoiceChannel(style[27]);
              }
            };
            items.push(obj2);
          }
        }
        const iter = arr5[Symbol.iterator]();
        while (iter !== undefined) {
          let _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    return closure_17;
  }, items8);
  const callback = obj5.useCallback(() => {
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
    setVoiceUpsellDismissed(true);
    closure_3.lock();
  }, items9);
  ref = obj5.useRef(null);
  if (tmp12) {
    function renderButton(arg0) {
      let tmp = arg0;
      if (arg0 == null) {
        const obj = { onPress, ref: "a" };
        tmp = obj;
      }
      const obj2 = { targetRef: ref, canShowTooltip: null };
      let tmp9 = !stateFromStores2;
      if (!stateFromStores2) {
        tmp9 = canConnect;
      }
      if (tmp9) {
        tmp9 = isConnectedToVoiceChannel;
      }
      obj2.canShowTooltip = tmp9;
      const items = [closure_2_14(closure_18, obj2), ];
      const obj3 = { style, ref, children: null };
      const tmp3 = _objectWithoutProperties(tmp, closure_3);
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
      obj4.loading = null != stateFromStores;
      let tmp15 = closure_12;
      if (closure_12 == null) {
        tmp15 = c5;
      }
      const obj5 = { children: null };
      obj4.icon = tmp15;
      const intl = util.intl;
      obj4.accessibilityLabel = intl.string(util.t.dnI0AL);
      obj3.children = closure_2_14(VoicePanelIconButtonDefault, obj4);
      items[1] = closure_2_14(tmp11, obj3);
      obj5.children = items;
      return __initData2(__initData, obj5);
    }
    if (!tmp4Result2.isAndroid()) {
      if (tmp10) {
        const obj7 = { children: null };
        const obj8 = { targetRef: ref, canShowTooltip: isConnectedToVoiceChannel };
        const items10 = [stateFromStores2(stateFromStores3, obj8), ];
        const obj9 = { menuItems: memo, position: "bottom", align: "end", onRequestOpen: callback, onRequestClose: tmp3.unlock, children: renderButton };
        items10[1] = stateFromStores2(tmp4(tmp2[32]).MenuPopout, obj9);
        obj7.children = items10;
        let renderButtonResult = canConnect(closure_15, obj7);
      }
      return renderButtonResult;
    }
    renderButtonResult = renderButton();
    tmp4Result2 = tmp4(tmp2[20]);
  } else {
    return null;
  }
});