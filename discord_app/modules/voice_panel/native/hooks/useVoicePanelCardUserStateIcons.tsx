// === Module 17106: useVoicePanelCardUserStateIcons ===

// Module 17106 (useVoicePanelCardUserStateIcons)
import VoiceStateIconUtils from "VoiceStateIconUtils" /* 9120 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 12272 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 17054 */;
import noop from "module_19" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

require = fn;
const ParticipantTypes = fn(4581).ParticipantTypes;
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
  let tmp4Result = tmp4(9120);
  let tmp8;
  if (type === stateFromStores.USER) {
    tmp8 = id;
  }
  videoIconState = tmp4Result.useVideoIconState(tmp8, guildId);
  tmp4Result = tmp4(563);
  let items = [muteDeafenIconState];
  stateFromStores = tmp4Result.useStateFromStores(items, () => muteDeafenIconState.isConnected());
  let obj2 = require("VoiceStateIconUtils");
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
  let tmp2Result = tmp2(10017);
  if (type === stateFromStores.STREAM) {
    tmp13 = id;
  }
  tmp2Result = tmp2(9982);
  showTileVolumeIndicator = tmp2Result.useConfig({ location: "useVoicePanelCardUserStateIcons" }).showTileVolumeIndicator;
  if (showTileVolumeIndicator) {
    showTileVolumeIndicator = 0 === tmp2Result(tmp13, tmp4(4615).MediaEngineContextTypes.STREAM).effectiveVolume;
  }
  if (showTileVolumeIndicator) {
    showTileVolumeIndicator = type === tmp5.STREAM;
  }
  const tmp4Result1 = require("useStateFromStores");
  isRTCDisconnectedUIVisible = require("RTCConnectionDesyncHooks").useIsRTCDisconnectedUIVisible(tmp, id);
  const items3 = [setShowFloatingCTA];
  callback = obj.useCallback(() => {
    setShowFloatingCTA(VoicePanelFloatingCTAUtils.OverrideFloatingCTA.BAD_CONNECTION);
  }, items3);
  callback1 = obj.useCallback(() => {
    id(_null[13]);
    const obj = {
      key: "user-disconnected-indicator",
      icon() {
        return stateFromStores1(type(6610).CircleErrorIcon, { size: "xs", color: id(576).colors.STATUS_WARNING });
      },
      content: null
    };
    const intl = type(_null[16]).intl;
    obj.content = intl.string(type(_null[16]).t.HFwRpk);
    obj.open(obj);
  }, []);
  const items4 = [stateFromStores, type, videoIconState, muteDeafenIconState, isRTCDisconnectedUIVisible, stateFromStores1, callback, id, callback1, showTileVolumeIndicator];
  return setShowFloatingCTA.useMemo(() => {
    if (stateFromStores) {
      if (closure_0 === ParticipantTypes.STREAM) {
        const items = [];
        if (showTileVolumeIndicator) {
          let obj = { type: null, onPress: null };
          obj.type = obj.SPEAKER_MUTE_ICON;
          obj.onPress = function onPress() {
            closure_1(4259);
            const obj = { key: "" + id + "-stream-status", content: null };
            const intl = closure_0(1114).intl;
            obj.content = intl.string(closure_0(1114).t.Q8Uzof);
            obj.open(obj);
          };
          items.push(obj);
        }
        obj = { type: null, voicePlatform: null };
        obj.type = obj.STREAM_ICON;
        obj.voicePlatform = stateFromStores1;
        items.push(obj);
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
          let obj1 = { type: obj.USER_VIDEO_ICON, videoIconState, onPress: null };
          let tmp14;
          if (videoIconState === VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO) {
            tmp14 = callback;
          }
          obj1.onPress = tmp14;
          items1.push(obj1);
        }
        if (null != muteDeafenIconState) {
          let obj2 = {
            type: obj.MUTE_DEAFEN_ICON,
            muteDeafenIconState: tmp16,
            withLeftMargin: items1.length > 0,
            onPress() {
                    if (closure_0(9120).MuteDeafenIconState.DEAFENED_SERVER === muteDeafenIconState) {
                      let obj = { key: null, content: null };
                      const _HermesInternal4 = HermesInternal;
                      obj.key = "" + id + "-status";
                      const intl4 = closure_0(1114).intl;
                      obj.content = intl4.string(closure_0(1114).t.btxSdB);
                      closure_1(4259).open(obj);
                      const obj7 = closure_1(4259);
                    } else if (closure_0(9120).MuteDeafenIconState.DEAFENED === muteDeafenIconState) {
                      obj = { key: null, content: null };
                      const _HermesInternal3 = HermesInternal;
                      obj.key = "" + id + "-status";
                      const intl3 = closure_0(1114).intl;
                      obj.content = intl3.string(closure_0(1114).t.NjmiOL);
                      closure_1(4259).open(obj);
                      const obj5 = closure_1(4259);
                    } else if (closure_0(9120).MuteDeafenIconState.MUTED_SERVER === muteDeafenIconState) {
                      let obj2 = closure_1(4259);
                      const obj1 = { key: null, content: null };
                      const _HermesInternal2 = HermesInternal;
                      obj1.key = "" + id + "-status";
                      const intl2 = closure_0(1114).intl;
                      obj1.content = intl2.string(closure_0(1114).t.uLddbQ);
                      obj2.open(obj1);
                    } else if (closure_0(9120).MuteDeafenIconState.MUTED_LOCAL === muteDeafenIconState) {
                      obj = closure_1(4259);
                      obj2 = { key: null, content: null };
                      const _HermesInternal = HermesInternal;
                      obj2.key = "" + id + "-status";
                      const intl = closure_0(1114).intl;
                      obj2.content = intl.string(closure_0(1114).t.Q8Uzof);
                      obj.open(obj2);
                    } else if (closure_0(9120).MuteDeafenIconState.MUTED === muteDeafenIconState) {
                      const obj3 = { key: null, content: null };
                      const _HermesInternal5 = HermesInternal;
                      obj3.key = "" + id + "-status";
                      const intl5 = closure_0(1114).intl;
                      obj3.content = intl5.string(closure_0(1114).t.tjtv3P);
                      closure_1(4259).open(obj3);
                      const obj9 = closure_1(4259);
                    }
                  }
          };
          items1.push(obj2);
        }
        return items1;
      }
    } else {
      return [];
    }
  }, items4);
};
export { VoicePanelCardUserStateIconType };