// discord_app/modules/voice_panel/native/header/VoicePanelHeaderSpeaker.tsx
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import showAudioOutputSelector from "../../../voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx";
import useOnConnectToConsole from "../../../video_calls/native/useOnConnectToConsole.tsx";
import getConsoleIconDefault from "../../../game_console/native/getConsoleIcon.tsx";
import VoicePanelIconButtonDefault from "../shared/VoicePanelIconButton.tsx";
import useSpeakerTooltipsDefault from "../hooks/useSpeakerTooltips.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GameConsoleStore from "../../../game_console/GameConsoleStore.tsx";
import AudioRouteStore from "../../../voice_calls/AudioRouteStore.native.tsx";
import AudioRouteSwitchingStore from "../../../voice_calls/native/AudioRouteSwitchingStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import SessionsStore from "../../../../stores/SessionsStore.tsx";

require = fn;
let closure_3 = ["ref"];
let closure_4 = ["ref"];
const NativeModules = fn(17).NativeModules;
const setVoiceUpsellDismissed = fn(17793).setVoiceUpsellDismissed;
const PlatformTypes = fn(1085).PlatformTypes;
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
let closure_18 = [];
let ReactCompilerGating = fn(558);
let closure_19 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function SpeakerTooltipEffects(arg0) {
        ({ targetRef, canShowTooltip } = arg0);
        useSpeakerTooltipsDefault(targetRef, canShowTooltip);
        return null;
      }
    : function SpeakerTooltipEffects(arg0) {
        ({ targetRef, canShowTooltip } = arg0);
        useSpeakerTooltipsDefault(targetRef, canShowTooltip);
        return null;
      },
);
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderSpeaker.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function VoicePanelHeaderSpeaker(isConnectedToVoiceChannel) {
        const cResult = isConnectedToVoiceChannel(style[13]).c(53);
        isConnectedToVoiceChannel = isConnectedToVoiceChannel.isConnectedToVoiceChannel;
        const channelId = isConnectedToVoiceChannel.channelId;
        style = isConnectedToVoiceChannel.style;
        let obj = isConnectedToVoiceChannel(style[13]);
        closure_3 = channelId(style[14])();
        const tmp5 = channelId(style[14])();
        const maskedSpeakerStates = isConnectedToVoiceChannel(style[15]).useMaskedSpeakerStates();
        const toggleAudio = maskedSpeakerStates.toggleAudio;
        const routeSource = maskedSpeakerStates.routeSource;
        const isAudioRouteEnabled = maskedSpeakerStates.isAudioRouteEnabled;
        channelId(style[16])();
        const tmp8 = channelId(style[17])();
        closure_7 = tmp8;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [GameConsoleStore];
          class R {
            constructor() {
              return closure_9.getAwaitingRemoteSessionInfo();
            }
          }
          cResult[0] = items;
          cResult[1] = R;
          tmp9 = items;
        } else {
          [tmp9, tmp10] = cResult;
        }
        let obj2 = isConnectedToVoiceChannel(style[15]);
        const stateFromStores = isConnectedToVoiceChannel(style[18]).useStateFromStores(tmp9, R);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [stateFromStores3];
          class R {
            constructor() {
              return closure_9.getAwaitingRemoteSessionInfo();
            }
          }
          cResult[2] = items1;
          cResult[3] = tmp16;
          let tmp14 = tmp16;
          let tmp13 = items1;
        } else {
          tmp13 = cResult[2];
          tmp14 = cResult[3];
        }
        let tmpResult = isConnectedToVoiceChannel(style[18]);
        const stateFromStores1 = isConnectedToVoiceChannel(style[18]).useStateFromStores(tmp13, tmp14);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [SessionsStore];
          class R {
            constructor() {
              return closure_9.getAwaitingRemoteSessionInfo();
            }
          }
          cResult[4] = items2;
          let tmp18 = items2;
        } else {
          tmp18 = cResult[4];
        }
        let sessionId;
        if (tmp8 != null) {
          sessionId = tmp8.sessionId;
        }
        if (cResult[5] !== sessionId) {
          let sessionId1;
          if (tmp8 != null) {
            sessionId1 = tmp8.sessionId;
          }
          const fn = function q() {
            let str;
            if (closure_7 != null) {
              str = closure_7.sessionId;
            }
            if (str == null) {
              str = "";
            }
            return SessionsStore.getSessionById(str);
          };
          class R {
            constructor() {
              return closure_9.getAwaitingRemoteSessionInfo();
            }
          }
          cResult[5] = sessionId1;
          cResult[6] = fn;
          let tmp21 = fn;
        } else {
          tmp21 = cResult[6];
        }
        const tmpResult4 = isConnectedToVoiceChannel(style[18]);
        const stateFromStores2 = isConnectedToVoiceChannel(style[18]).useStateFromStores(tmp18, tmp21);
        GameConsoleStore = null != stateFromStores;
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
          let tmp27 = null;
          if (null != type) {
            tmp27 = tmp4(tmp2[19])(type);
          }
          class R {
            constructor() {
              return closure_9.getAwaitingRemoteSessionInfo();
            }
          }
          cResult[8] = tmp27;
          let tmp26 = tmp27;
        } else {
          tmp26 = cResult[8];
        }
        const currentRouteType = tmp26;
        const tmpResult5 = isConnectedToVoiceChannel(style[18]);
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const items3 = [canConnect];
          class R {
            constructor() {
              return closure_9.getAwaitingRemoteSessionInfo();
            }
          }
          cResult[9] = items3;
          let tmp28 = items3;
        } else {
          tmp28 = cResult[9];
        }
        if (cResult[10] !== channelId) {
          class K {
            constructor() {
              channel = closure_12.getChannel(channelId);
              flag = undefined;
              if (channel != null) {
                flag = channel.isGuildStageVoice();
              }
              if (flag == null) {
                flag = false;
              }
              return flag;
            }
          }
          const items4 = [channelId];
          class R {
            constructor() {
              return closure_9.getAwaitingRemoteSessionInfo();
            }
          }
          cResult[10] = channelId;
          cResult[11] = items4;
          cResult[12] = K;
          let tmp31 = K;
          const tmp30 = items4;
        } else {
          class K {
            constructor() {
              channel = closure_12.getChannel(channelId);
              flag = undefined;
              if (channel != null) {
                flag = channel.isGuildStageVoice();
              }
              if (flag == null) {
                flag = false;
              }
              return flag;
            }
          }
          tmp31 = cResult[12];
        }
        const arr4 = channelId(style[20])();
        stateFromStores3 = isConnectedToVoiceChannel(style[18]).useStateFromStores(tmp28, tmp31, tmp30);
        if (!stateFromStores3) {
          class K {
            constructor() {
              channel = closure_12.getChannel(channelId);
              flag = undefined;
              if (channel != null) {
                flag = channel.isGuildStageVoice();
              }
              if (flag == null) {
                flag = false;
              }
              return flag;
            }
          }
        }
        const tmpResult6 = isConnectedToVoiceChannel(style[18]);
        canConnect = channelId(style[21])(channelId).canConnect;
        let tmp35 = isConnectedToVoiceChannel;
        if (!isConnectedToVoiceChannel) {
          class K {
            constructor() {
              channel = closure_12.getChannel(channelId);
              flag = undefined;
              if (channel != null) {
                flag = channel.isGuildStageVoice();
              }
              if (flag == null) {
                flag = false;
              }
              return flag;
            }
          }
          if (canConnect) {
            class K {
              constructor() {
                channel = closure_12.getChannel(channelId);
                flag = undefined;
                if (channel != null) {
                  flag = channel.isGuildStageVoice();
                }
                if (flag == null) {
                  flag = false;
                }
                return flag;
              }
            }
          }
          tmp35 = canConnect;
        }
        canConnect = tmp35;
        if (cResult[13] === channelId) {
          class K {
            constructor() {
              channel = closure_12.getChannel(channelId);
              flag = undefined;
              if (channel != null) {
                flag = channel.isGuildStageVoice();
              }
              if (flag == null) {
                flag = false;
              }
              return flag;
            }
          }
        }
        class Z {
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
        cResult[13] = channelId;
        cResult[14] = isConnectedToVoiceChannel;
        cResult[15] = toggleAudio;
        cResult[16] = Z;
        const tmp34 = channelId(style[21])(channelId);
      }
    : function VoicePanelHeaderSpeaker(isConnectedToVoiceChannel) {
        isConnectedToVoiceChannel = isConnectedToVoiceChannel.isConnectedToVoiceChannel;
        const channelId = isConnectedToVoiceChannel.channelId;
        const style = isConnectedToVoiceChannel.style;
        c5 = undefined;
        noop = undefined;
        let stateFromStores;
        let stateFromStores1;
        closure_13 = undefined;
        closure_16 = undefined;
        let canConnect;
        let onPress;
        let stateFromStores3;
        let ref;
        let tmp3 = channelId(style[14])();
        closure_3 = tmp3;
        const maskedSpeakerStates = isConnectedToVoiceChannel(style[15]).useMaskedSpeakerStates();
        const toggleAudio = maskedSpeakerStates.toggleAudio;
        ({ routeSource: c5, isAudioRouteEnabled: c6 } = maskedSpeakerStates);
        const tmp6 = channelId(style[16])();
        closure_7 = tmp6;
        const sessionId = channelId(style[17])();
        let obj = isConnectedToVoiceChannel(style[15]);
        let tmp = channelId;
        let items = [stateFromStores];
        stateFromStores = isConnectedToVoiceChannel(style[18]).useStateFromStores(items, () =>
          stateFromStores.getAwaitingRemoteSessionInfo(),
        );
        let obj2 = isConnectedToVoiceChannel(style[18]);
        const items1 = [stateFromStores1];
        const disabled = isConnectedToVoiceChannel(style[18]).useStateFromStores(items1, () =>
          stateFromStores1.getQueueAudioSwap(),
        );
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
        let obj4 = isConnectedToVoiceChannel(style[18]);
        const items4 = [loading];
        const items5 = [channelId];
        const stateFromStores2 = isConnectedToVoiceChannel(style[18]).useStateFromStores(
          items4,
          () => {
            const channel = ChannelStore.getChannel(channelId);
            let flag;
            if (channel != null) {
              flag = channel.isGuildStageVoice();
            }
            if (flag == null) {
              flag = false;
            }
            return flag;
          },
          items5,
        );
        let tmp10 = !stateFromStores2;
        if (!stateFromStores2) {
          tmp10 = arr5.length > 0;
        }
        closure_16 = tmp10;
        let tmp11 = tmp(style[21])(channelId);
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
        const obj6 = isConnectedToVoiceChannel(style[18]);
        const items7 = [disabled];
        stateFromStores3 = isConnectedToVoiceChannel(style[18]).useStateFromStores(items7, () =>
          disabled.getCurrentRouteType(),
        );
        const items8 = [arr5, tmp10, channelId, isConnectedToVoiceChannel, stateFromStores3, tmp6];
        const items9 = [tmp3];
        const memo = obj5.useMemo(() => {
          if (!obj.isAndroid()) {
            if (closure_16) {
              const items = [];
              let tmp4 = closure_7;
              let tmp5 = closure_7;
              if (!closure_7) {
                tmp5 = stateFromStores3 !== isConnectedToVoiceChannel(style[24]).RouteTypes.SPEAKER;
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
              if (!tmp4) {
                tmp4 = stateFromStores3 !== isConnectedToVoiceChannel(style[24]).RouteTypes.RECEIVER;
              }
              if (!tmp4) {
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
              function _loop2(iter) {
                closure_0 = iter;
                if (iter.type === PlatformTypes.XBOX) {
                  let obj = { label: null, iconSource: null, showIconFirst: false, action: null };
                  const intl = util.intl;
                  obj.label = intl.string(util.t["qVE/VF"]);
                  obj.iconSource = getConsoleIconDefault(iter.type);
                  obj.action = function action() {
                    const channel = closure_12.getChannel(channelId);
                    if (null != channel) {
                      isConnectedToVoiceChannel(style[29]).onConnectToConsole(channel, closure_0);
                      const obj = isConnectedToVoiceChannel(style[29]);
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
                    const channel = closure_12.getChannel(channelId);
                    if (null != channel) {
                      isConnectedToVoiceChannel(style[29]).onConnectToConsole(channel, closure_0);
                      const obj = isConnectedToVoiceChannel(style[29]);
                    }
                  };
                  items.push(obj2);
                }
              }
              const iter = arr5[Symbol.iterator]();
              while (iter !== undefined) {
                let _loop2Result = _loop2(iter.next());
                continue;
              }
              return items;
            }
          }
          return closure_18;
        }, items8);
        const callback = obj5.useCallback(() => {
          const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
            dismissible_content.DismissibleContent.DONUT_MOBILE_NUX,
          );
          setVoiceUpsellDismissed(true);
          closure_3.lock();
        }, items9);
        ref = obj5.useRef(null);
        if (tmp12) {
          function renderButton(arg0) {
            let tmp = arg0;
            if (arg0 == null) {
              const obj = { onPress, ref: "Array" };
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
            const items = [value2(closure_19, obj2)];
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
            obj3.children = value2(VoicePanelIconButtonDefault, obj4);
            items[1] = value2(tmp11, obj3);
            obj5.children = items;
            return constants(value3, obj5);
          }
          if (!tmp4Result2.isAndroid()) {
            if (tmp10) {
              const obj7 = { children: null };
              const obj8 = { targetRef: ref, canShowTooltip: isConnectedToVoiceChannel };
              const items10 = [stateFromStores2(stateFromStores3, obj8)];
              const obj9 = {
                menuItems: memo,
                position: "bottom",
                align: "end",
                onRequestOpen: callback,
                onRequestClose: tmp3.unlock,
                children: renderButton,
              };
              items10[1] = stateFromStores2(tmp4(tmp2[34]).MenuPopout, obj9);
              obj7.children = items10;
              let renderButtonResult = canConnect(closure_16, obj7);
            }
            return renderButtonResult;
          }
          renderButtonResult = renderButton();
          tmp4Result2 = tmp4(tmp2[22]);
        } else {
          return null;
        }
      },
);
