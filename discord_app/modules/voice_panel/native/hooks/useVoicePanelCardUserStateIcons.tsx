// === Module 19213: useVoicePanelCardUserStateIcons ===

// Module 19213 (useVoicePanelCardUserStateIcons)
import VoiceStateIconUtils from "VoiceStateIconUtils" /* 9234 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11222 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 11942 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 12001 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 19159 */;
import noop from "module_19" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5764 */;
import VoiceStateStore from "VoiceStateStore" /* 5679 */;

const require = globalThis.__r;

require = fn;
const ParticipantTypes = fn(5681).ParticipantTypes;
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
    showTileVolumeIndicator = 0 === tmp2Result(tmp13, tmp4(5789).MediaEngineContextTypes.STREAM).effectiveVolume;
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
    const obj2 = { text: null, icon: null, iconColor: null };
    const intl = type(_null[13]).intl;
    obj2.text = intl.string(type(_null[13]).t.HFwRpk);
    obj2.icon = type(_null[14]).CircleErrorIcon;
    obj2.iconColor = id(_null[15]).colors.ICON_FEEDBACK_WARNING;
    id(_null[12]).open("user-disconnected-indicator", obj2);
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
                    const obj2 = { text: null };
                    const combined = "" + id + "-stream-status";
                    const intl = closure_0(1113).intl;
                    obj2.text = intl.string(closure_0(1113).t.Q8Uzof);
                    closure_1(5712).open(combined, obj2);
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
                    if (closure_0(9234).MuteDeafenIconState.DEAFENED_SERVER === muteDeafenIconState) {
                      const _HermesInternal4 = HermesInternal;
                      const obj2 = { text: null };
                      const combined = "" + id + "-status";
                      const intl4 = closure_0(1113).intl;
                      obj2.text = intl4.string(closure_0(1113).t.btxSdB);
                      closure_1(5712).open(combined, obj2);
                      const obj7 = closure_1(5712);
                    } else if (closure_0(9234).MuteDeafenIconState.DEAFENED === muteDeafenIconState) {
                      const _HermesInternal3 = HermesInternal;
                      const obj4 = { text: null };
                      const combined1 = "" + id + "-status";
                      const intl3 = closure_0(1113).intl;
                      obj4.text = intl3.string(closure_0(1113).t.NjmiOL);
                      closure_1(5712).open(combined1, obj4);
                      const obj5 = closure_1(5712);
                    } else if (closure_0(9234).MuteDeafenIconState.MUTED_SERVER === muteDeafenIconState) {
                      const _HermesInternal2 = HermesInternal;
                      const obj6 = { text: null };
                      const combined2 = "" + id + "-status";
                      const intl2 = closure_0(1113).intl;
                      obj6.text = intl2.string(closure_0(1113).t.uLddbQ);
                      closure_1(5712).open(combined2, obj6);
                      const obj3 = closure_1(5712);
                    } else if (closure_0(9234).MuteDeafenIconState.MUTED_LOCAL === muteDeafenIconState) {
                      const _HermesInternal = HermesInternal;
                      const obj8 = { text: null };
                      const combined3 = "" + id + "-status";
                      const intl = closure_0(1113).intl;
                      obj8.text = intl.string(closure_0(1113).t.Q8Uzof);
                      closure_1(5712).open(combined3, obj8);
                      const obj = closure_1(5712);
                    } else if (closure_0(9234).MuteDeafenIconState.MUTED === muteDeafenIconState) {
                      const _HermesInternal5 = HermesInternal;
                      const obj10 = { text: null };
                      const combined4 = "" + id + "-status";
                      const intl5 = closure_0(1113).intl;
                      obj10.text = intl5.string(closure_0(1113).t.tjtv3P);
                      closure_1(5712).open(combined4, obj10);
                      const obj9 = closure_1(5712);
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