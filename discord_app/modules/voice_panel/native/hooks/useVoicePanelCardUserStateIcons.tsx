// === Module 16324: useVoicePanelCardUserStateIcons ===

// Module 16324 (useVoicePanelCardUserStateIcons)
import dismissPanelDefault from "dismissPanel" /* 11439 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "createRTCConnection" /* 4539 */;
import closure_5 from "updateVoiceState" /* 4542 */;
import { ParticipantTypes } from "ParticipantTypes" /* 4544 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let obj = { STREAM_ICON: "STREAM_ICON", USER_VIDEO_ICON: "USER_VIDEO_ICON", MUTE_DEAFEN_ICON: "MUTE_DEAFEN_ICON", USER_DISCONNECTED_ICON: "DISCONNECTED_ICON", SPEAKER_MUTE_ICON: "SPEAKER_MUTE_ICON" };
const result = require("set").fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelCardUserStateIcons.tsx");

export default function useVoicePanelCardUserStateIcons(arg0, id, guildId) {
  const _require = arg0;
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
  setShowFloatingCTA = setShowFloatingCTA.useContext(dismissPanelDefault).setShowFloatingCTA;
  let tmp6;
  if (arg0 === stateFromStores.USER) {
    tmp6 = id;
  }
  muteDeafenIconState = _require(9678).useMuteDeafenIconState(tmp6, guildId);
  let tmp4Result = tmp4(9678);
  let tmp8;
  if (arg0 === stateFromStores.USER) {
    tmp8 = id;
  }
  videoIconState = tmp4Result.useVideoIconState(tmp8, guildId);
  tmp4Result = tmp4(647);
  let items = [muteDeafenIconState];
  stateFromStores = tmp4Result.useStateFromStores(items, () => muteDeafenIconState.isConnected());
  let obj2 = _require(9678);
  let items1 = [videoIconState];
  const items2 = [tmp, id];
  stateFromStores1 = _require(647).useStateFromStores(items1, () => {
    let voicePlatformForChannel = null;
    if (null != c2) {
      voicePlatformForChannel = null;
      if (null != closure_1) {
        voicePlatformForChannel = videoIconState.getVoicePlatformForChannel(tmp, tmp3);
      }
    }
    return voicePlatformForChannel;
  }, items2);
  let tmp13;
  let tmp2Result = tmp2(12135);
  if (arg0 === stateFromStores.STREAM) {
    tmp13 = id;
  }
  tmp2Result = tmp2(12136);
  showTileVolumeIndicator = tmp2Result.useConfig({ location: "useVoicePanelCardUserStateIcons" }).showTileVolumeIndicator;
  if (showTileVolumeIndicator) {
    showTileVolumeIndicator = 0 === tmp2Result(tmp13, tmp4(4569).MediaEngineContextTypes.STREAM).effectiveVolume;
  }
  if (showTileVolumeIndicator) {
    showTileVolumeIndicator = arg0 === tmp5.STREAM;
  }
  const tmp4Result1 = _require(647);
  isRTCDisconnectedUIVisible = _require(15496).useIsRTCDisconnectedUIVisible(tmp, id);
  const items3 = [setShowFloatingCTA];
  callback = obj.useCallback(() => {
    setShowFloatingCTA(callback(_null[12]).OverrideFloatingCTA.BAD_CONNECTION);
  }, items3);
  callback1 = obj.useCallback(() => {
    obj = id(_null[13]);
    obj = {
      key: "user-disconnected-indicator",
      icon() {
        return callback3(callback(8074).CircleErrorIcon, { size: "xs", color: callback2(712).colors.STATUS_WARNING });
      },
      content: null
    };
    const intl = callback(_null[16]).intl;
    obj[2] = intl.string(callback(_null[16]).t.HFwRpk);
    obj.open(obj);
  }, []);
  const items4 = [stateFromStores, arg0, videoIconState, muteDeafenIconState, isRTCDisconnectedUIVisible, stateFromStores1, callback, id, callback1, showTileVolumeIndicator];
  return setShowFloatingCTA.useMemo(() => {
    if (stateFromStores) {
      if (callback === stateFromStores.STREAM) {
        const items = [];
        if (showTileVolumeIndicator) {
          obj = { type: null, onPress: null };
          obj[0] = showTileVolumeIndicator.SPEAKER_MUTE_ICON;
          obj[1] = function onPress() {
            obj = closure_1_1(closure_1_2[13]);
            obj = { key: "" + closure_1 + "-stream-status", content: null };
            const intl = closure_1_0(closure_1_2[16]).intl;
            obj[1] = intl.string(closure_1_0(closure_1_2[16]).t.Q8Uzof);
            obj.open(obj);
          };
          items.push(obj);
        }
        obj = { type: null, voicePlatform: null };
        obj[0] = showTileVolumeIndicator.STREAM_ICON;
        obj[1] = stateFromStores1;
        items.push(obj);
        return items;
      } else if (tmp !== tmp2.USER) {
        return [];
      } else {
        const items1 = [];
        if (isRTCDisconnectedUIVisible) {
          obj = { type: null, onPress: null };
          obj[0] = showTileVolumeIndicator.USER_DISCONNECTED_ICON;
          obj[1] = callback1;
          items1.push(obj);
        }
        let tmp8 = null != videoIconState;
        if (tmp8) {
          tmp8 = tmp6 !== callback(_null[6]).VideoIconState.VIDEO_ACTIVE;
        }
        if (tmp8) {
          obj1 = { type: null, videoIconState: null, onPress: null };
          obj1[0] = showTileVolumeIndicator.USER_VIDEO_ICON;
          obj1[1] = tmp6;
          let tmp14;
          if (tmp6 === callback(_null[6]).VideoIconState.VIDEO_DISABLED_LOCAL_AUTO) {
            tmp14 = callback;
          }
          obj1[2] = tmp14;
          items1.push(obj1);
        }
        if (null != muteDeafenIconState) {
          let obj2 = { type: null, muteDeafenIconState: null, withLeftMargin: null, onPress: null };
          obj2[0] = showTileVolumeIndicator.MUTE_DEAFEN_ICON;
          obj2[1] = tmp16;
          obj2[2] = items1.length > 0;
          obj2[3] = function onPress() {
            if (closure_1_0(closure_1_2[6]).MuteDeafenIconState.DEAFENED_SERVER === closure_4) {
              obj = { key: null, content: null };
              const _HermesInternal4 = HermesInternal;
              obj[0] = "" + closure_1 + "-status";
              const intl4 = tmp2(tmp3[16]).intl;
              obj[1] = intl4.string(tmp2(tmp3[16]).t.btxSdB);
              closure_1_1(tmp3[13]).open(obj);
              const obj7 = closure_1_1(tmp3[13]);
            } else if (tmp2(tmp3[6]).MuteDeafenIconState.DEAFENED === tmp) {
              obj = { key: null, content: null };
              const _HermesInternal3 = HermesInternal;
              obj[0] = "" + closure_1 + "-status";
              const intl3 = tmp2(tmp3[16]).intl;
              obj[1] = intl3.string(tmp2(tmp3[16]).t.NjmiOL);
              closure_1_1(tmp3[13]).open(obj);
              const obj5 = closure_1_1(tmp3[13]);
            } else if (tmp2(tmp3[6]).MuteDeafenIconState.MUTED_SERVER === tmp) {
              let obj2 = closure_1_1(tmp3[13]);
              obj1 = { key: null, content: null };
              const _HermesInternal2 = HermesInternal;
              obj1[0] = "" + closure_1 + "-status";
              const intl2 = tmp2(tmp3[16]).intl;
              obj1[1] = intl2.string(tmp2(tmp3[16]).t.uLddbQ);
              obj2.open(obj1);
            } else if (tmp2(tmp3[6]).MuteDeafenIconState.MUTED_LOCAL === tmp) {
              obj = closure_1_1(tmp3[13]);
              obj2 = { key: null, content: null };
              const _HermesInternal = HermesInternal;
              obj2[0] = "" + closure_1 + "-status";
              const intl = tmp2(tmp3[16]).intl;
              obj2[1] = intl.string(tmp2(tmp3[16]).t.Q8Uzof);
              obj.open(obj2);
            } else if (tmp2(tmp3[6]).MuteDeafenIconState.MUTED === tmp) {
              const obj3 = { key: null, content: null };
              const _HermesInternal5 = HermesInternal;
              obj3[0] = "" + closure_1 + "-status";
              const intl5 = tmp2(tmp3[16]).intl;
              obj3[1] = intl5.string(tmp2(tmp3[16]).t.tjtv3P);
              closure_1_1(tmp3[13]).open(obj3);
              const obj9 = closure_1_1(tmp3[13]);
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
export const VoicePanelCardUserStateIconType = obj;