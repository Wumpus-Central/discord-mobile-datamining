// === Module 19605: useVoicePanelCardUserStateIcons ===

// Module 19605 (useVoicePanelCardUserStateIcons)
import VoiceStateIconUtils from "VoiceStateIconUtils" /* 9314 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11362 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 12109 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 12168 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 19524 */;
import noop from "module_19" /* 19 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 6812 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5893 */;
import VoiceStateStore from "VoiceStateStore" /* 5803 */;

const require = globalThis.__r;

require = fn;
const ParticipantTypes = fn(5805).ParticipantTypes;
const VoicePanelCardUserStateIconType = { STREAM_ICON: "STREAM_ICON", USER_VIDEO_ICON: "USER_VIDEO_ICON", MUTE_DEAFEN_ICON: "MUTE_DEAFEN_ICON", USER_DISCONNECTED_ICON: "DISCONNECTED_ICON", SPEAKER_MUTE_ICON: "SPEAKER_MUTE_ICON", STAGE_MODERATOR_ICON: "STAGE_MODERATOR_ICON" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelCardUserStateIcons.tsx");

export default function useVoicePanelCardUserStateIcons(type, id, guildId) {
  _require = type;
  importDefault = id;
  let tmp = channelId;
  if (channelId === undefined) {
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
  let isStageUnifiedCall;
  let stateFromStores3;
  let callback;
  let callback1;
  setShowFloatingCTA = setShowFloatingCTA.useContext(VoicePanelStateContextDefault).setShowFloatingCTA;
  let tmp6;
  if (type === showTileVolumeIndicator.USER) {
    tmp6 = id;
  }
  muteDeafenIconState = require("VoiceStateIconUtils").useMuteDeafenIconState(tmp6, guildId);
  let obj2 = require("VoiceStateIconUtils");
  let tmp8;
  if (type === showTileVolumeIndicator.USER) {
    tmp8 = id;
  }
  videoIconState = require("VoiceStateIconUtils").useVideoIconState(tmp8, guildId);
  const tmp4Result = require("VoiceStateIconUtils");
  items = [stateFromStores];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => stateFromStores.isConnected());
  const tmp4Result7 = require("useStateFromStores");
  let items1 = [stateFromStores1];
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
  const tmp4Result8 = require("useStateFromStores");
  if (type === showTileVolumeIndicator.STREAM) {
    tmp13 = id;
  }
  const tmp2Result = useMuteAwareLocalVolumeDefault;
  showTileVolumeIndicator = MobileAudioOutputExperimentDefault.useConfig({ location: "useVoicePanelCardUserStateIcons" }).showTileVolumeIndicator;
  if (showTileVolumeIndicator) {
    showTileVolumeIndicator = 0 === tmp2Result(tmp13, tmp4(5918).MediaEngineContextTypes.STREAM).effectiveVolume;
  }
  if (showTileVolumeIndicator) {
    showTileVolumeIndicator = type === tmp5.STREAM;
  }
  const tmp2Result2 = MobileAudioOutputExperimentDefault;
  isRTCDisconnectedUIVisible = require("RTCConnectionDesyncHooks").useIsRTCDisconnectedUIVisible(tmp, id);
  const tmp4Result9 = require("RTCConnectionDesyncHooks");
  const items3 = [videoIconState];
  const items4 = [tmp];
  const stateFromStores2 = require("useStateFromStores").useStateFromStores(items3, () => ChannelStore.getChannel(c2), items4);
  const tmp4Result10 = require("useStateFromStores");
  isStageUnifiedCall = require("StageChannelUnifiedCallExperiment").useIsStageUnifiedCall(stateFromStores2, "useVoicePanelCardUserStateIcons");
  const tmp4Result11 = require("StageChannelUnifiedCallExperiment");
  const items5 = [muteDeafenIconState];
  const items6 = [isStageUnifiedCall, type, id, tmp];
  stateFromStores3 = require("useStateFromStores").useStateFromStores(items5, () => {
    let isModeratorResult = isStageUnifiedCall;
    if (isStageUnifiedCall) {
      isModeratorResult = closure_0 === ParticipantTypes.USER;
    }
    if (isModeratorResult) {
      isModeratorResult = null != closure_1;
    }
    if (isModeratorResult) {
      isModeratorResult = null != c2;
    }
    if (isModeratorResult) {
      isModeratorResult = StageChannelRoleStore.isModerator(closure_1, c2);
    }
    return isModeratorResult;
  }, items6);
  const items7 = [setShowFloatingCTA];
  callback = obj.useCallback(() => {
    setShowFloatingCTA(VoicePanelFloatingCTAUtils.OverrideFloatingCTA.BAD_CONNECTION);
  }, items7);
  callback1 = obj.useCallback(() => {
    const obj2 = { text: null, icon: null, iconColor: null };
    const intl = type(_null[16]).intl;
    obj2.text = intl.string(type(_null[16]).t.HFwRpk);
    obj2.icon = type(_null[17]).CircleErrorIcon;
    obj2.iconColor = id(_null[18]).colors.ICON_FEEDBACK_WARNING;
    id(_null[15]).open("user-disconnected-indicator", obj2);
  }, []);
  const items8 = [stateFromStores, type, videoIconState, muteDeafenIconState, isRTCDisconnectedUIVisible, stateFromStores1, callback, id, callback1, showTileVolumeIndicator, stateFromStores3];
  return setShowFloatingCTA.useMemo(() => {
    if (stateFromStores) {
      if (closure_0 === ParticipantTypes.STREAM) {
        items = [];
        if (showTileVolumeIndicator) {
          let obj2 = {
            type: obj.SPEAKER_MUTE_ICON,
            onPress() {
                    const obj2 = { text: null };
                    const combined = "" + id + "-stream-status";
                    const intl = closure_0(1113).intl;
                    obj2.text = intl.string(closure_0(1113).t.Q8Uzof);
                    closure_1(5837).open(combined, obj2);
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
        if (stateFromStores3) {
          obj = { type: null };
          obj.type = obj.STAGE_MODERATOR_ICON;
          items1.push(obj);
        }
        if (isRTCDisconnectedUIVisible) {
          let obj4 = { type: obj.USER_DISCONNECTED_ICON, onPress: callback1 };
          items1.push(obj4);
        }
        let tmp11 = null != videoIconState;
        if (tmp11) {
          tmp11 = videoIconState !== VoiceStateIconUtils.VideoIconState.VIDEO_ACTIVE;
        }
        if (tmp11) {
          let obj5 = { type: obj.USER_VIDEO_ICON, videoIconState, onPress: null };
          let tmp17;
          if (videoIconState === VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO) {
            tmp17 = callback;
          }
          obj5.onPress = tmp17;
          items1.push(obj5);
        }
        if (null != muteDeafenIconState) {
          let obj6 = {
            type: obj.MUTE_DEAFEN_ICON,
            muteDeafenIconState: tmp19,
            withLeftMargin: items1.length > 0,
            onPress() {
                    if (closure_0(9314).MuteDeafenIconState.DEAFENED_SERVER === muteDeafenIconState) {
                      const _HermesInternal4 = HermesInternal;
                      const obj2 = { text: null };
                      const combined = "" + id + "-status";
                      const intl4 = closure_0(1113).intl;
                      obj2.text = intl4.string(closure_0(1113).t.btxSdB);
                      closure_1(5837).open(combined, obj2);
                      const obj7 = closure_1(5837);
                    } else if (closure_0(9314).MuteDeafenIconState.DEAFENED === muteDeafenIconState) {
                      const _HermesInternal3 = HermesInternal;
                      const obj4 = { text: null };
                      const combined1 = "" + id + "-status";
                      const intl3 = closure_0(1113).intl;
                      obj4.text = intl3.string(closure_0(1113).t.NjmiOL);
                      closure_1(5837).open(combined1, obj4);
                      const obj5 = closure_1(5837);
                    } else if (closure_0(9314).MuteDeafenIconState.MUTED_SERVER === muteDeafenIconState) {
                      const _HermesInternal2 = HermesInternal;
                      const obj6 = { text: null };
                      const combined2 = "" + id + "-status";
                      const intl2 = closure_0(1113).intl;
                      obj6.text = intl2.string(closure_0(1113).t.uLddbQ);
                      closure_1(5837).open(combined2, obj6);
                      const obj3 = closure_1(5837);
                    } else if (closure_0(9314).MuteDeafenIconState.MUTED_LOCAL === muteDeafenIconState) {
                      const _HermesInternal = HermesInternal;
                      const obj8 = { text: null };
                      const combined3 = "" + id + "-status";
                      const intl = closure_0(1113).intl;
                      obj8.text = intl.string(closure_0(1113).t.Q8Uzof);
                      closure_1(5837).open(combined3, obj8);
                      const obj = closure_1(5837);
                    } else if (closure_0(9314).MuteDeafenIconState.MUTED === muteDeafenIconState) {
                      const _HermesInternal5 = HermesInternal;
                      const obj10 = { text: null };
                      const combined4 = "" + id + "-status";
                      const intl5 = closure_0(1113).intl;
                      obj10.text = intl5.string(closure_0(1113).t.tjtv3P);
                      closure_1(5837).open(combined4, obj10);
                      const obj9 = closure_1(5837);
                    }
                  }
          };
          items1.push(obj6);
        }
        return items1;
      }
    } else {
      return [];
    }
  }, items8);
};
export { VoicePanelCardUserStateIconType };