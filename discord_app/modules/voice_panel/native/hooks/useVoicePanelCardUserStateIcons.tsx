// === Module 17683: useVoicePanelCardUserStateIcons ===

// Module 17683 (useVoicePanelCardUserStateIcons)
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import VoiceStateIconUtils from "VoiceStateIconUtils" /* 8781 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 11035 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 11094 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11925 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 17684 */;
import noop from "module_19" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5109 */;
import VoiceStateStore from "VoiceStateStore" /* 5112 */;

const require = globalThis.__r;

require = fn;
const ParticipantTypes = fn(5114).ParticipantTypes;
const VoicePanelCardUserStateIconType = { STREAM_ICON: "STREAM_ICON", USER_VIDEO_ICON: "USER_VIDEO_ICON", MUTE_DEAFEN_ICON: "MUTE_DEAFEN_ICON", USER_DISCONNECTED_ICON: "DISCONNECTED_ICON", SPEAKER_MUTE_ICON: "SPEAKER_MUTE_ICON" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelCardUserStateIcons.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useVoicePanelCardUserStateIcons(arg0, arg1, arg2, arg3) {
  _require = arg1;
  const cResult = require("c").c(35);
  let tmp4 = null;
  if (undefined !== arg3) {
    tmp4 = arg3;
  }
  importDefault = tmp4;
  setShowFloatingCTA = muteDeafenIconState.useContext(require("VoicePanelStateContext")).setShowFloatingCTA;
  let obj = require("c");
  let tmp7;
  if (arg0 === ParticipantTypes.USER) {
    tmp7 = arg1;
  }
  muteDeafenIconState = require("VoiceStateIconUtils").useMuteDeafenIconState(tmp7, arg2);
  const tmpResult = require("VoiceStateIconUtils");
  let tmp9;
  if (arg0 === ParticipantTypes.USER) {
    tmp9 = arg1;
  }
  const videoIconState = require("VoiceStateIconUtils").useVideoIconState(tmp9, arg2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionStore];
    const fn = function _() {
      return connected.isConnected();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp11 = items;
    tmp12 = fn;
  } else {
    [tmp11, tmp12] = cResult;
  }
  const tmpResult5 = require("VoiceStateIconUtils");
  const stateFromStores = require("useStateFromStores").useStateFromStores(tmp11, tmp12);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [VoiceStateStore];
    cResult[2] = items1;
    let tmp15 = items1;
  } else {
    tmp15 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    if (cResult[4] === arg1) {
      let tmp17 = cResult[5];
      let tmp18 = cResult[6];
    }
    const stateFromStores1 = tmp(tmp2[8]).useStateFromStores(tmp15, tmp17, tmp18);
    let tmp21;
    const tmpResult7 = tmp(tmp2[8]);
    if (arg0 === ParticipantTypes.STREAM) {
      tmp21 = arg1;
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      let obj2 = { location: "useVoicePanelCardUserStateIcons" };
      cResult[7] = obj2;
      let tmp22 = obj2;
    } else {
      tmp22 = cResult[7];
    }
    const tmp5Result = tmp5(tmp2[9]);
    let showTileVolumeIndicator = tmp5(tmp2[11]).useConfig(tmp22).showTileVolumeIndicator;
    if (showTileVolumeIndicator) {
      showTileVolumeIndicator = 0 === tmp5Result(tmp21, tmp(tmp2[10]).MediaEngineContextTypes.STREAM).effectiveVolume;
    }
    if (showTileVolumeIndicator) {
      showTileVolumeIndicator = arg0 === ParticipantTypes.STREAM;
    }
    const tmp5Result2 = tmp5(tmp2[11]);
    const isRTCDisconnectedUIVisible = tmp(tmp2[12]).useIsRTCDisconnectedUIVisible(tmp4, arg1);
    if (cResult[8] !== setShowFloatingCTA) {
      const fn2 = function y() {
        setShowFloatingCTA(VoicePanelFloatingCTAUtils.OverrideFloatingCTA.BAD_CONNECTION);
      };
      cResult[8] = setShowFloatingCTA;
      cResult[9] = fn2;
    }
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor() {
          obj = closure_1(setShowFloatingCTA[14]);
          obj1 = { text: null, icon: null, iconColor: null };
          intl = closure_0(setShowFloatingCTA[15]).intl;
          obj1.text = intl.string(closure_0(setShowFloatingCTA[15]).t.HFwRpk);
          obj1.icon = closure_0(setShowFloatingCTA[16]).CircleErrorIcon;
          obj1.iconColor = closure_1(setShowFloatingCTA[17]).colors.ICON_FEEDBACK_WARNING;
          openManaResult = obj.openMana("user-disconnected-indicator", obj1);
          return;
        }
      }
      cResult[10] = P;
    } else {
      class P {
        constructor() {
          obj = closure_1(setShowFloatingCTA[14]);
          obj1 = { text: null, icon: null, iconColor: null };
          intl = closure_0(setShowFloatingCTA[15]).intl;
          obj1.text = intl.string(closure_0(setShowFloatingCTA[15]).t.HFwRpk);
          obj1.icon = closure_0(setShowFloatingCTA[16]).CircleErrorIcon;
          obj1.iconColor = closure_1(setShowFloatingCTA[17]).colors.ICON_FEEDBACK_WARNING;
          openManaResult = obj.openMana("user-disconnected-indicator", obj1);
          return;
        }
      }
    }
    if (stateFromStores) {
      class P {
        constructor() {
          obj = closure_1(setShowFloatingCTA[14]);
          obj1 = { text: null, icon: null, iconColor: null };
          intl = closure_0(setShowFloatingCTA[15]).intl;
          obj1.text = intl.string(closure_0(setShowFloatingCTA[15]).t.HFwRpk);
          obj1.icon = closure_0(setShowFloatingCTA[16]).CircleErrorIcon;
          obj1.iconColor = closure_1(setShowFloatingCTA[17]).colors.ICON_FEEDBACK_WARNING;
          openManaResult = obj.openMana("user-disconnected-indicator", obj1);
          return;
        }
      }
    } else {
      class P {
        constructor() {
          obj = closure_1(setShowFloatingCTA[14]);
          obj1 = { text: null, icon: null, iconColor: null };
          intl = closure_0(setShowFloatingCTA[15]).intl;
          obj1.text = intl.string(closure_0(setShowFloatingCTA[15]).t.HFwRpk);
          obj1.icon = closure_0(setShowFloatingCTA[16]).CircleErrorIcon;
          obj1.iconColor = closure_1(setShowFloatingCTA[17]).colors.ICON_FEEDBACK_WARNING;
          openManaResult = obj.openMana("user-disconnected-indicator", obj1);
          return;
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            obj = closure_1(setShowFloatingCTA[14]);
            obj1 = { text: null, icon: null, iconColor: null };
            intl = closure_0(setShowFloatingCTA[15]).intl;
            obj1.text = intl.string(closure_0(setShowFloatingCTA[15]).t.HFwRpk);
            obj1.icon = closure_0(setShowFloatingCTA[16]).CircleErrorIcon;
            obj1.iconColor = closure_1(setShowFloatingCTA[17]).colors.ICON_FEEDBACK_WARNING;
            openManaResult = obj.openMana("user-disconnected-indicator", obj1);
            return;
          }
        }
        cResult[11] = tmp27;
      } else {
        class P {
          constructor() {
            obj = closure_1(setShowFloatingCTA[14]);
            obj1 = { text: null, icon: null, iconColor: null };
            intl = closure_0(setShowFloatingCTA[15]).intl;
            obj1.text = intl.string(closure_0(setShowFloatingCTA[15]).t.HFwRpk);
            obj1.icon = closure_0(setShowFloatingCTA[16]).CircleErrorIcon;
            obj1.iconColor = closure_1(setShowFloatingCTA[17]).colors.ICON_FEEDBACK_WARNING;
            openManaResult = obj.openMana("user-disconnected-indicator", obj1);
            return;
          }
        }
      }
    }
    return tmp27;
  }
  class M {
    constructor() {
      voicePlatformForChannel = null;
      if (null != closure_1) {
        voicePlatformForChannel = null;
        if (null != closure_0) {
          tmp4 = closure_5;
          voicePlatformForChannel = closure_5.getVoicePlatformForChannel(tmp, tmp3);
        }
      }
      return voicePlatformForChannel;
    }
  }
  const items2 = [tmp4, arg1];
  cResult[3] = tmp4;
  cResult[4] = arg1;
  cResult[5] = M;
  cResult[6] = items2;
  tmp18 = items2;
  tmp17 = M;
  const tmpResult6 = require("useStateFromStores");
}) : (function useVoicePanelCardUserStateIcons(arg0, arg1, arg2) {
  _require = arg0;
  importDefault = arg1;
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
  if (arg0 === stateFromStores.USER) {
    tmp6 = arg1;
  }
  muteDeafenIconState = require("VoiceStateIconUtils").useMuteDeafenIconState(tmp6, arg2);
  let obj2 = require("VoiceStateIconUtils");
  let tmp8;
  if (arg0 === stateFromStores.USER) {
    tmp8 = arg1;
  }
  videoIconState = require("VoiceStateIconUtils").useVideoIconState(tmp8, arg2);
  const tmp4Result = require("VoiceStateIconUtils");
  let items = [muteDeafenIconState];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => muteDeafenIconState.isConnected());
  const tmp4Result4 = require("useStateFromStores");
  let items1 = [videoIconState];
  const items2 = [tmp, arg1];
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
  if (arg0 === stateFromStores.STREAM) {
    tmp13 = arg1;
  }
  const tmp2Result = useMuteAwareLocalVolumeDefault;
  showTileVolumeIndicator = MobileAudioOutputExperimentDefault.useConfig({ location: "useVoicePanelCardUserStateIcons" }).showTileVolumeIndicator;
  if (showTileVolumeIndicator) {
    showTileVolumeIndicator = 0 === tmp2Result(tmp13, tmp4(5136).MediaEngineContextTypes.STREAM).effectiveVolume;
  }
  if (showTileVolumeIndicator) {
    showTileVolumeIndicator = arg0 === tmp5.STREAM;
  }
  const tmp2Result2 = MobileAudioOutputExperimentDefault;
  isRTCDisconnectedUIVisible = require("RTCConnectionDesyncHooks").useIsRTCDisconnectedUIVisible(tmp, arg1);
  const items3 = [setShowFloatingCTA];
  callback = obj.useCallback(() => {
    setShowFloatingCTA(VoicePanelFloatingCTAUtils.OverrideFloatingCTA.BAD_CONNECTION);
  }, items3);
  callback1 = obj.useCallback(() => {
    const obj2 = { text: null, icon: null, iconColor: null };
    const intl = closure_0(_null[15]).intl;
    obj2.text = intl.string(closure_0(_null[15]).t.HFwRpk);
    obj2.icon = closure_0(_null[16]).CircleErrorIcon;
    obj2.iconColor = closure_1(_null[17]).colors.ICON_FEEDBACK_WARNING;
    closure_1(_null[14]).openMana("user-disconnected-indicator", obj2);
  }, []);
  const items4 = [stateFromStores, arg0, videoIconState, muteDeafenIconState, isRTCDisconnectedUIVisible, stateFromStores1, callback, arg1, callback1, showTileVolumeIndicator];
  return setShowFloatingCTA.useMemo(() => {
    if (stateFromStores) {
      if (closure_0 === ParticipantTypes.STREAM) {
        const items = [];
        if (showTileVolumeIndicator) {
          let obj2 = {
            type: obj.SPEAKER_MUTE_ICON,
            onPress() {
                    const obj2 = { key: "" + closure_1_1 + "-stream-status", content: null };
                    const intl = closure_0(1126).intl;
                    obj2.content = intl.string(closure_0(1126).t.Q8Uzof);
                    closure_1(4768).open(obj2);
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
                    if (closure_0(8781).MuteDeafenIconState.DEAFENED_SERVER === muteDeafenIconState) {
                      const obj2 = { key: null, content: null };
                      const _HermesInternal4 = HermesInternal;
                      obj2.key = "" + closure_1_1 + "-status";
                      const intl4 = closure_0(1126).intl;
                      obj2.content = intl4.string(closure_0(1126).t.btxSdB);
                      closure_1(4768).open(obj2);
                      const obj7 = closure_1(4768);
                    } else if (closure_0(8781).MuteDeafenIconState.DEAFENED === muteDeafenIconState) {
                      const obj4 = { key: null, content: null };
                      const _HermesInternal3 = HermesInternal;
                      obj4.key = "" + closure_1_1 + "-status";
                      const intl3 = closure_0(1126).intl;
                      obj4.content = intl3.string(closure_0(1126).t.NjmiOL);
                      closure_1(4768).open(obj4);
                      const obj5 = closure_1(4768);
                    } else if (closure_0(8781).MuteDeafenIconState.MUTED_SERVER === muteDeafenIconState) {
                      const obj6 = { key: null, content: null };
                      const _HermesInternal2 = HermesInternal;
                      obj6.key = "" + closure_1_1 + "-status";
                      const intl2 = closure_0(1126).intl;
                      obj6.content = intl2.string(closure_0(1126).t.uLddbQ);
                      closure_1(4768).open(obj6);
                      const obj3 = closure_1(4768);
                    } else if (closure_0(8781).MuteDeafenIconState.MUTED_LOCAL === muteDeafenIconState) {
                      const obj8 = { key: null, content: null };
                      const _HermesInternal = HermesInternal;
                      obj8.key = "" + closure_1_1 + "-status";
                      const intl = closure_0(1126).intl;
                      obj8.content = intl.string(closure_0(1126).t.Q8Uzof);
                      closure_1(4768).open(obj8);
                      const obj = closure_1(4768);
                    } else if (closure_0(8781).MuteDeafenIconState.MUTED === muteDeafenIconState) {
                      const obj10 = { key: null, content: null };
                      const _HermesInternal5 = HermesInternal;
                      obj10.key = "" + closure_1_1 + "-status";
                      const intl5 = closure_0(1126).intl;
                      obj10.content = intl5.string(closure_0(1126).t.tjtv3P);
                      closure_1(4768).open(obj10);
                      const obj9 = closure_1(4768);
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
});
export { VoicePanelCardUserStateIconType };