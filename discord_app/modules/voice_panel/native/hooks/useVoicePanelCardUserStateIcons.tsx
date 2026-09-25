// === Module 16898: useVoicePanelCardUserStateIcons ===

// Module 16898 (useVoicePanelCardUserStateIcons)
import VoiceStateIconUtils from "VoiceStateIconUtils" /* 9122 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 9426 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 9466 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11740 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 16844 */;
import noop from "module_19" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4852 */;
import VoiceStateStore from "VoiceStateStore" /* 4848 */;

const require = globalThis.__r;

require = fn;
const ParticipantTypes = fn(4850).ParticipantTypes;
const jsx = fn(21).jsx;
const VoicePanelCardUserStateIconType = { STREAM_ICON: "STREAM_ICON", USER_VIDEO_ICON: "USER_VIDEO_ICON", MUTE_DEAFEN_ICON: "MUTE_DEAFEN_ICON", USER_DISCONNECTED_ICON: "DISCONNECTED_ICON", SPEAKER_MUTE_ICON: "SPEAKER_MUTE_ICON" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelCardUserStateIcons.tsx");

export default function useVoicePanelCardUserStateIcons(type, id, guildId) {
  _require = type;
  importDefault = id;
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = null;
  }
  dependencyMap = tmp;
  let setShowFloatingCTA;
  let muteDeafenIconState;
  let videoIconState;
  let stateFromStores;
  let stateFromStores1;
  let showTileVolumeIndicator;
  let isRTCDisconnectedUIVisible;
  let callback;
  let callback1;
  setShowFloatingCTA = setShowFloatingCTA.useContext(VoicePanelStateContextDefault).setShowFloatingCTA;
  let tmp6;
  if (type === stateFromStores.USER) {
    tmp6 = id;
  }
  muteDeafenIconState = require("VoiceStateIconUtils").useMuteDeafenIconState(tmp6, guildId);
  let obj2 = require("VoiceStateIconUtils");
  let tmp8;
  if (type === stateFromStores.USER) {
    tmp8 = id;
  }
  videoIconState = require("VoiceStateIconUtils").useVideoIconState(tmp8, guildId);
  const tmp4Result = require("VoiceStateIconUtils");
  let items = [muteDeafenIconState];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => muteDeafenIconState.isConnected());
  const tmp4Result4 = require("useStateFromStores");
  let items1 = [videoIconState];
  const items2 = [tmp, id];
  stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => {
    let voicePlatformForChannel = null;
    if (null != c2) {
      voicePlatformForChannel = null;
      if (null != closure_1) {
        voicePlatformForChannel = VoiceStateStore.getVoicePlatformForChannel(tmp, tmp3);
      }
    }
    return voicePlatformForChannel;
  }, items2);
  let tmp13;
  const tmp4Result5 = require("useStateFromStores");
  if (type === stateFromStores.STREAM) {
    tmp13 = id;
  }
  const tmp2Result = useMuteAwareLocalVolumeDefault;
  showTileVolumeIndicator = MobileAudioOutputExperimentDefault.useConfig({ location: "useVoicePanelCardUserStateIcons" }).showTileVolumeIndicator;
  if (showTileVolumeIndicator) {
    showTileVolumeIndicator = 0 === tmp2Result(tmp13, tmp4(4884).MediaEngineContextTypes.STREAM).effectiveVolume;
  }
  if (showTileVolumeIndicator) {
    showTileVolumeIndicator = type === tmp5.STREAM;
  }
  const tmp2Result2 = MobileAudioOutputExperimentDefault;
  isRTCDisconnectedUIVisible = require("RTCConnectionDesyncHooks").useIsRTCDisconnectedUIVisible(tmp, id);
  const items3 = [setShowFloatingCTA];
  callback = obj.useCallback(() => {
    setShowFloatingCTA(VoicePanelFloatingCTAUtils.OverrideFloatingCTA.BAD_CONNECTION);
  }, items3);
  callback1 = obj.useCallback(() => {
    const obj2 = {
      key: "user-disconnected-indicator",
      icon() {
        return stateFromStores1(type(6023).CircleErrorIcon, { size: "xs", color: id(576).colors.STATUS_WARNING });
      },
      content: null
    };
    const intl = type(_null[16]).intl;
    obj2.content = intl.string(type(_null[16]).t.HFwRpk);
    id(_null[13]).open(obj2);
  }, []);
  const items4 = [stateFromStores, type, videoIconState, muteDeafenIconState, isRTCDisconnectedUIVisible, stateFromStores1, callback, id, callback1, showTileVolumeIndicator];
  return setShowFloatingCTA.useMemo(() => {
    if (stateFromStores) {
      if (closure_0 === ParticipantTypes.STREAM) {
        const items = [];
        if (showTileVolumeIndicator) {
          let obj2 = {
            type: obj.SPEAKER_MUTE_ICON,
            onPress() {
                    const obj2 = { key: "" + id + "-stream-status", content: null };
                    const intl = closure_0(1115).intl;
                    obj2.content = intl.string(closure_0(1115).t.Q8Uzof);
                    closure_1(4525).open(obj2);
                  }
          };
          items.push(obj2);
        }
        let obj3 = { type: obj.STREAM_ICON, voicePlatform: stateFromStores1 };
        items.push(obj3);
        return items;
      } else if (tmp !== tmp2.USER) {
        return [];
      } else {
        const items1 = [];
        if (isRTCDisconnectedUIVisible) {
          obj = { type: null, onPress: null };
          obj.type = obj.USER_DISCONNECTED_ICON;
          obj.onPress = callback1;
          items1.push(obj);
        }
        let tmp8 = null != videoIconState;
        if (tmp8) {
          tmp8 = videoIconState !== VoiceStateIconUtils.VideoIconState.VIDEO_ACTIVE;
        }
        if (tmp8) {
          let obj4 = { type: obj.USER_VIDEO_ICON, videoIconState, onPress: null };
          let tmp14;
          if (videoIconState === VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO) {
            tmp14 = callback;
          }
          obj4.onPress = tmp14;
          items1.push(obj4);
        }
        if (null != muteDeafenIconState) {
          let obj5 = {
            type: obj.MUTE_DEAFEN_ICON,
            muteDeafenIconState: tmp16,
            withLeftMargin: items1.length > 0,
            onPress() {
                    if (closure_0(9122).MuteDeafenIconState.DEAFENED_SERVER === muteDeafenIconState) {
                      const obj2 = { key: null, content: null };
                      const _HermesInternal4 = HermesInternal;
                      obj2.key = "" + id + "-status";
                      const intl4 = closure_0(1115).intl;
                      obj2.content = intl4.string(closure_0(1115).t.btxSdB);
                      closure_1(4525).open(obj2);
                      const obj7 = closure_1(4525);
                    } else if (closure_0(9122).MuteDeafenIconState.DEAFENED === muteDeafenIconState) {
                      const obj4 = { key: null, content: null };
                      const _HermesInternal3 = HermesInternal;
                      obj4.key = "" + id + "-status";
                      const intl3 = closure_0(1115).intl;
                      obj4.content = intl3.string(closure_0(1115).t.NjmiOL);
                      closure_1(4525).open(obj4);
                      const obj5 = closure_1(4525);
                    } else if (closure_0(9122).MuteDeafenIconState.MUTED_SERVER === muteDeafenIconState) {
                      const obj6 = { key: null, content: null };
                      const _HermesInternal2 = HermesInternal;
                      obj6.key = "" + id + "-status";
                      const intl2 = closure_0(1115).intl;
                      obj6.content = intl2.string(closure_0(1115).t.uLddbQ);
                      closure_1(4525).open(obj6);
                      const obj3 = closure_1(4525);
                    } else if (closure_0(9122).MuteDeafenIconState.MUTED_LOCAL === muteDeafenIconState) {
                      const obj8 = { key: null, content: null };
                      const _HermesInternal = HermesInternal;
                      obj8.key = "" + id + "-status";
                      const intl = closure_0(1115).intl;
                      obj8.content = intl.string(closure_0(1115).t.Q8Uzof);
                      closure_1(4525).open(obj8);
                      const obj = closure_1(4525);
                    } else if (closure_0(9122).MuteDeafenIconState.MUTED === muteDeafenIconState) {
                      const obj10 = { key: null, content: null };
                      const _HermesInternal5 = HermesInternal;
                      obj10.key = "" + id + "-status";
                      const intl5 = closure_0(1115).intl;
                      obj10.content = intl5.string(closure_0(1115).t.tjtv3P);
                      closure_1(4525).open(obj10);
                      const obj9 = closure_1(4525);
                    }
                  }
          };
          items1.push(obj5);
        }
        return items1;
      }
    } else {
      return [];
    }
  }, items4);
};
export { VoicePanelCardUserStateIconType };