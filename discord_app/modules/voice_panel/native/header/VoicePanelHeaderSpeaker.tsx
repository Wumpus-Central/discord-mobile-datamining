// === Module 16431: ? ===

// Module 16431
import useSpeakerTooltipsDefault from "useSpeakerTooltips" /* 16435 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import importAllResult from "noop" /* 19 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import { setVoiceUpsellDismissed } from "useConsoleVoiceUpsellStore" /* 16432 */;
import closure_8 from "set" /* 4545 */;
import closure_9 from "handleAudioRouteChanged" /* 16433 */;
import closure_10 from "handleAudioRouteChanged" /* 9687 */;
import closure_11 from "ensureGuildLoaded" /* 1391 */;
import closure_12 from "handleUpdate" /* 4546 */;
import { PlatformTypes } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
let closure_3 = ["ref"];
let c5 = importAllResult;
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
let closure_17 = [];
let closure_18 = importAllResult.memo((arg0) => {
  ({ targetRef, canShowTooltip } = arg0);
  useSpeakerTooltipsDefault(targetRef, canShowTooltip);
  return null;
});
const memoResult = importAllResult.memo(function VoicePanelHeaderSpeaker(isConnectedToVoiceChannel) {
  isConnectedToVoiceChannel = isConnectedToVoiceChannel.isConnectedToVoiceChannel;
  const channelId = isConnectedToVoiceChannel.channelId;
  const style = isConnectedToVoiceChannel.style;
  closure_3 = undefined;
  let toggleAudio;
  c6 = undefined;
  closure_7 = undefined;
  closure_8 = undefined;
  let stateFromStores;
  closure_10 = undefined;
  let stateFromStores1;
  closure_12 = undefined;
  let arr5;
  let callback;
  closure_15 = undefined;
  let stateFromStores2;
  let ref;
  const tmp2 = channelId(style[12])();
  closure_3 = tmp2;
  let obj = isConnectedToVoiceChannel(style[13]);
  const maskedSpeakerStates = obj.useMaskedSpeakerStates();
  toggleAudio = maskedSpeakerStates.toggleAudio;
  ({ routeSource: c5, isAudioRouteEnabled: c6 } = maskedSpeakerStates);
  let tmp5 = channelId(style[14])();
  closure_7 = tmp5;
  closure_8 = channelId(style[15])();
  obj1 = isConnectedToVoiceChannel(style[16]);
  let items = [closure_8];
  stateFromStores = obj1.useStateFromStores(items, () => awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const items1 = [stateFromStores];
  closure_10 = isConnectedToVoiceChannel(style[16]).useStateFromStores(items1, () => stateFromStores.getQueueAudioSwap());
  const obj3 = isConnectedToVoiceChannel(style[16]);
  const items2 = [closure_12];
  stateFromStores1 = isConnectedToVoiceChannel(style[16]).useStateFromStores(items2, () => {
    let str;
    if (awaitingRemoteSessionInfo != null) {
      str = awaitingRemoteSessionInfo.sessionId;
    }
    if (str == null) {
      str = "";
    }
    return sessionById.getSessionById(str);
  });
  const items3 = [stateFromStores, stateFromStores1];
  closure_12 = importAllResult.useMemo(() => {
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
      tmp3 = channelId(style[17])(type);
    }
    return tmp3;
  }, items3);
  arr5 = channelId(style[18])();
  let tmp9 = channelId(style[19])(channelId);
  let tmp10 = tmp9.canConnect && !tmp9.isAtMaxCapacity;
  if (tmp10) {
    let tmp11 = isConnectedToVoiceChannel;
    if (!isConnectedToVoiceChannel) {
      tmp11 = tmp8;
    }
    tmp10 = tmp11;
  }
  callback = tmp10;
  const items4 = [channelId, isConnectedToVoiceChannel, toggleAudio];
  closure_15 = obj5.useCallback(() => {
    if (obj.isAndroid()) {
      const result = isConnectedToVoiceChannel(style[21]).showAudioOutputSelector(channelId, isConnectedToVoiceChannel);
      const tmpResult = isConnectedToVoiceChannel(style[21]);
    } else {
      toggleAudio(channelId, isConnectedToVoiceChannel);
    }
  }, items4);
  let tmp3Result = tmp3(tmp[16]);
  const items5 = [closure_10];
  stateFromStores2 = tmp3Result.useStateFromStores(items5, () => currentRouteType.getCurrentRouteType());
  const items6 = [arr5, channelId, isConnectedToVoiceChannel, stateFromStores2, tmp5];
  const items7 = [tmp2];
  const memo = obj5.useMemo(() => {
    let obj = isConnectedToVoiceChannel(style[20]);
    if (!obj.isAndroid()) {
      if (0 !== arr5.length) {
        let items = [];
        let tmp9 = closure_7;
        let tmp5 = closure_7;
        if (!closure_7) {
          tmp5 = stateFromStores2 !== tmp(tmp2[22]).RouteTypes.SPEAKER;
        }
        if (!tmp5) {
          obj = { label: null, iconSource: null, showIconFirst: false, action: null };
          let intl = tmp(tmp2[23]).intl;
          obj[0] = intl.string(tmp(tmp2[23]).t.gvQIzx);
          obj[1] = channelId(tmp2[24]);
          obj[3] = function action() {
            const AudioRoutePicker = closure_6.AudioRoutePicker;
            let toggleSpeakerResult;
            if (AudioRoutePicker != null) {
              toggleSpeakerResult = AudioRoutePicker.toggleSpeaker(false);
            }
            return toggleSpeakerResult;
          };
          items.push(obj);
        }
        if (!tmp9) {
          tmp9 = stateFromStores2 !== tmp(tmp2[22]).RouteTypes.RECEIVER;
        }
        if (!tmp9) {
          obj = { label: null, iconSource: null, showIconFirst: false, action: null };
          let intl2 = tmp(tmp2[23]).intl;
          obj[0] = intl2.string(tmp(tmp2[23]).t.wwTN1g);
          obj[1] = channelId(tmp2[25]);
          obj[3] = function action() {
            const AudioRoutePicker = closure_6.AudioRoutePicker;
            let toggleSpeakerResult;
            if (AudioRoutePicker != null) {
              toggleSpeakerResult = AudioRoutePicker.toggleSpeaker(true);
            }
            return toggleSpeakerResult;
          };
          items.push(obj);
        }
        obj1 = { label: null, iconSource: null, showIconFirst: false, action: null };
        const intl3 = tmp(tmp2[23]).intl;
        obj1[0] = intl3.string(tmp(tmp2[23]).t.dnI0AL);
        obj1[1] = channelId(tmp2[26]);
        obj1[3] = function action() {
          const result = items(closure_1_2[21]).showAudioOutputSelector(closure_1, items);
        };
        items.push(obj1);
        for (const item10074 of tmp3) {
          let tmp16 = (function _loop(item10074) {
            items = item10074;
            if (item10074.type === arr5.XBOX) {
              let obj = { label: null, iconSource: null, showIconFirst: false, action: null };
              const intl = isConnectedToVoiceChannel(style[23]).intl;
              obj[0] = intl.string(isConnectedToVoiceChannel(style[23]).t["qVE/VF"]);
              obj[1] = channelId(style[17])(item10074.type);
              obj[3] = function action() {
                const channel = closure_2_11.getChannel(closure_1_1);
                if (null != channel) {
                  items(closure_2_2[27]).onConnectToConsole(channel, closure_0);
                  const obj = items(closure_2_2[27]);
                }
              };
              items.push(obj);
            }
            if (item10074.type === arr5.PLAYSTATION) {
              obj = { label: null, iconSource: null, showIconFirst: false, action: null };
              const intl2 = isConnectedToVoiceChannel(style[23]).intl;
              obj[0] = intl2.string(isConnectedToVoiceChannel(style[23]).t.vzfxmY);
              obj[1] = channelId(style[17])(item10074.type);
              obj[3] = function action() {
                const channel = closure_2_11.getChannel(closure_1_1);
                if (null != channel) {
                  items(closure_2_2[27]).onConnectToConsole(channel, closure_0);
                  const obj = items(closure_2_2[27]);
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
  callback = obj5.useCallback(() => {
    const result = isConnectedToVoiceChannel(style[28]).UNSAFE_markDismissibleContentAsDismissed(isConnectedToVoiceChannel(style[29]).DismissibleContent.DONUT_MOBILE_NUX);
    callback(true);
    closure_3.lock();
  }, items7);
  ref = obj5.useRef(null);
  if (tmp10) {
    function renderButton(arg0) {
      let tmp = arg0;
      if (arg0 == null) {
        let obj = { onPress: null, ref: "r" };
        obj[0] = closure_15;
        tmp = obj;
      }
      obj = { targetRef: ref, canShowTooltip: null };
      let tmp9 = closure_14;
      if (closure_14) {
        tmp9 = isConnectedToVoiceChannel;
      }
      obj[1] = tmp9;
      const items = [closure_14(closure_1_18, obj), ];
      obj = { style, ref, children: null };
      const tmp3 = toggleAudio(tmp, closure_3);
      const tmp4 = stateFromStores2;
      const tmp5 = closure_15;
      const tmp7 = closure_1_18;
      const tmp8 = ref;
      obj1 = { ref: tmp.ref };
      const tmp11 = channelId(style[30]);
      const merged = Object.assign(tmp3);
      obj1.disabled = closure_10;
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
      const intl = isConnectedToVoiceChannel(tmp10[23]).intl;
      obj1.accessibilityLabel = intl.string(isConnectedToVoiceChannel(style[23]).t.dnI0AL);
      obj[2] = closure_14(channelId(style[31]), obj1);
      items[1] = closure_14(tmp11, obj);
      obj2[0] = items;
      return tmp4(tmp5, obj2);
    }
    tmp3Result = tmp3(tmp[20]);
    if (!tmp3Result.isAndroid()) {
      if (tmp8) {
        obj = { children: null };
        obj = { targetRef: null, canShowTooltip: null };
        obj[0] = ref;
        obj[1] = isConnectedToVoiceChannel;
        const items8 = [callback(closure_18, obj), ];
        obj1 = { menuItems: null, position: "bottom", align: "end", onRequestOpen: null, onRequestClose: null, children: null };
        obj1[0] = memo;
        obj1[3] = callback;
        obj1[4] = tmp2.unlock;
        obj1[5] = renderButton;
        items8[1] = callback(tmp3(tmp[32]).MenuPopout, obj1);
        obj[0] = items8;
        let renderButtonResult = stateFromStores2(closure_15, obj);
      }
      return renderButtonResult;
    }
    renderButtonResult = renderButton();
  } else {
    return null;
  }
});
let result = require("set").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderSpeaker.tsx");

export default memoResult;