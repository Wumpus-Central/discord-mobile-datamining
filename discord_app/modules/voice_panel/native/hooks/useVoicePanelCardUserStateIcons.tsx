// === Module 17250: useVoicePanelCardUserStateIcons ===

// Module 17250 (useVoicePanelCardUserStateIcons)
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import VoiceStateIconUtils from "VoiceStateIconUtils" /* 9350 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 9673 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 9714 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11915 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 17251 */;
import noop from "module_19" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4919 */;
import VoiceStateStore from "VoiceStateStore" /* 4915 */;

const require = globalThis.__r;

require = fn;
const ParticipantTypes = fn(4917).ParticipantTypes;
const jsx = fn(21).jsx;
const VoicePanelCardUserStateIconType = { STREAM_ICON: "STREAM_ICON", USER_VIDEO_ICON: "USER_VIDEO_ICON", MUTE_DEAFEN_ICON: "MUTE_DEAFEN_ICON", USER_DISCONNECTED_ICON: "DISCONNECTED_ICON", SPEAKER_MUTE_ICON: "SPEAKER_MUTE_ICON" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelCardUserStateIcons.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, arg3) => {
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
    class C {
      constructor() {
        return closure_1_4.isConnected();
      }
    }
    cResult[0] = items;
    cResult[1] = C;
    tmp11 = items;
  } else {
    [tmp11, tmp12] = cResult;
  }
  const tmpResult5 = require("VoiceStateIconUtils");
  const stateFromStores = require("useStateFromStores").useStateFromStores(tmp11, C);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [VoiceStateStore];
    class C {
      constructor() {
        return closure_1_4.isConnected();
      }
    }
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
    const stateFromStores1 = tmp(tmp2[9]).useStateFromStores(tmp15, tmp17, tmp18);
    class C {
      constructor() {
        return closure_1_4.isConnected();
      }
    }
    const tmpResult7 = tmp(tmp2[9]);
    if (arg0 === ParticipantTypes.STREAM) {
      const tmp21 = arg1;
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      cResult[7] = { location: "useVoicePanelCardUserStateIcons" };
      class C {
        constructor() {
          return closure_1_4.isConnected();
        }
      }
      let obj2 = { location: "useVoicePanelCardUserStateIcons" };
    } else {
      const tmp22 = cResult[7];
    }
    const tmp5Result = tmp5(tmp2[10]);
    let showTileVolumeIndicator = tmp5(tmp2[12]).useConfig(tmp22).showTileVolumeIndicator;
    if (showTileVolumeIndicator) {
      showTileVolumeIndicator = 0 === tmp5Result(tmp21, tmp(tmp2[11]).MediaEngineContextTypes.STREAM).effectiveVolume;
    }
    if (showTileVolumeIndicator) {
      showTileVolumeIndicator = arg0 === ParticipantTypes.STREAM;
    }
    const tmp5Result2 = tmp5(tmp2[12]);
    const isRTCDisconnectedUIVisible = tmp(tmp2[13]).useIsRTCDisconnectedUIVisible(tmp4, arg1);
    if (cResult[8] !== setShowFloatingCTA) {
      class V {
        constructor() {
          tmp = setShowFloatingCTA(closure_0(closure_2[14]).OverrideFloatingCTA.BAD_CONNECTION);
          return;
        }
      }
      cResult[8] = setShowFloatingCTA;
      class C {
        constructor() {
          return closure_1_4.isConnected();
        }
      }
      cResult[9] = V;
    } else {
      class V {
        constructor() {
          tmp = setShowFloatingCTA(closure_0(closure_2[14]).OverrideFloatingCTA.BAD_CONNECTION);
          return;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor() {
          tmp = closure_0;
          tmp2 = setShowFloatingCTA;
          obj = closure_0(setShowFloatingCTA[15]);
          designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents("useVoicePanelCardUserStateIcons");
          tmp4 = closure_1;
          obj2 = closure_1(setShowFloatingCTA[16]);
          if (designSystemsNotificationComponents) {
            obj1 = { text: null, icon: null, iconColor: null };
            intl2 = tmp(tmp2[17]).intl;
            obj1.text = intl2.string(tmp(tmp2[17]).t.HFwRpk);
            obj1.icon = tmp(tmp2[18]).CircleErrorIcon;
            obj1.iconColor = tmp4(tmp2[19]).colors.ICON_FEEDBACK_WARNING;
            str = "user-disconnected-indicator";
            openManaResult = obj2.openMana("user-disconnected-indicator", obj1);
          } else {
            obj5 = { key: "user-disconnected-indicator", icon: null, content: null };
            obj5.icon = function icon() { ... };
            intl = tmp(tmp2[17]).intl;
            obj5.content = intl.string(tmp(tmp2[17]).t.HFwRpk);
            openResult = obj2.open(obj5);
          }
          return;
        }
      }
      cResult[10] = P;
      class C {
        constructor() {
          return closure_1_4.isConnected();
        }
      }
    } else {
      class P {
        constructor() {
          tmp = closure_0;
          tmp2 = setShowFloatingCTA;
          obj = closure_0(setShowFloatingCTA[15]);
          designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents("useVoicePanelCardUserStateIcons");
          tmp4 = closure_1;
          obj2 = closure_1(setShowFloatingCTA[16]);
          if (designSystemsNotificationComponents) {
            obj1 = { text: null, icon: null, iconColor: null };
            intl2 = tmp(tmp2[17]).intl;
            obj1.text = intl2.string(tmp(tmp2[17]).t.HFwRpk);
            obj1.icon = tmp(tmp2[18]).CircleErrorIcon;
            obj1.iconColor = tmp4(tmp2[19]).colors.ICON_FEEDBACK_WARNING;
            str = "user-disconnected-indicator";
            openManaResult = obj2.openMana("user-disconnected-indicator", obj1);
          } else {
            obj5 = { key: "user-disconnected-indicator", icon: null, content: null };
            obj5.icon = function icon() { ... };
            intl = tmp(tmp2[17]).intl;
            obj5.content = intl.string(tmp(tmp2[17]).t.HFwRpk);
            openResult = obj2.open(obj5);
          }
          return;
        }
      }
    }
    if (stateFromStores) {
      class P {
        constructor() {
          tmp = closure_0;
          tmp2 = setShowFloatingCTA;
          obj = closure_0(setShowFloatingCTA[15]);
          designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents("useVoicePanelCardUserStateIcons");
          tmp4 = closure_1;
          obj2 = closure_1(setShowFloatingCTA[16]);
          if (designSystemsNotificationComponents) {
            obj1 = { text: null, icon: null, iconColor: null };
            intl2 = tmp(tmp2[17]).intl;
            obj1.text = intl2.string(tmp(tmp2[17]).t.HFwRpk);
            obj1.icon = tmp(tmp2[18]).CircleErrorIcon;
            obj1.iconColor = tmp4(tmp2[19]).colors.ICON_FEEDBACK_WARNING;
            str = "user-disconnected-indicator";
            openManaResult = obj2.openMana("user-disconnected-indicator", obj1);
          } else {
            obj5 = { key: "user-disconnected-indicator", icon: null, content: null };
            obj5.icon = function icon() { ... };
            intl = tmp(tmp2[17]).intl;
            obj5.content = intl.string(tmp(tmp2[17]).t.HFwRpk);
            openResult = obj2.open(obj5);
          }
          return;
        }
      }
    } else {
      class P {
        constructor() {
          tmp = closure_0;
          tmp2 = setShowFloatingCTA;
          obj = closure_0(setShowFloatingCTA[15]);
          designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents("useVoicePanelCardUserStateIcons");
          tmp4 = closure_1;
          obj2 = closure_1(setShowFloatingCTA[16]);
          if (designSystemsNotificationComponents) {
            obj1 = { text: null, icon: null, iconColor: null };
            intl2 = tmp(tmp2[17]).intl;
            obj1.text = intl2.string(tmp(tmp2[17]).t.HFwRpk);
            obj1.icon = tmp(tmp2[18]).CircleErrorIcon;
            obj1.iconColor = tmp4(tmp2[19]).colors.ICON_FEEDBACK_WARNING;
            str = "user-disconnected-indicator";
            openManaResult = obj2.openMana("user-disconnected-indicator", obj1);
          } else {
            obj5 = { key: "user-disconnected-indicator", icon: null, content: null };
            obj5.icon = function icon() { ... };
            intl = tmp(tmp2[17]).intl;
            obj5.content = intl.string(tmp(tmp2[17]).t.HFwRpk);
            openResult = obj2.open(obj5);
          }
          return;
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            tmp = closure_0;
            tmp2 = setShowFloatingCTA;
            obj = closure_0(setShowFloatingCTA[15]);
            designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents("useVoicePanelCardUserStateIcons");
            tmp4 = closure_1;
            obj2 = closure_1(setShowFloatingCTA[16]);
            if (designSystemsNotificationComponents) {
              obj1 = { text: null, icon: null, iconColor: null };
              intl2 = tmp(tmp2[17]).intl;
              obj1.text = intl2.string(tmp(tmp2[17]).t.HFwRpk);
              obj1.icon = tmp(tmp2[18]).CircleErrorIcon;
              obj1.iconColor = tmp4(tmp2[19]).colors.ICON_FEEDBACK_WARNING;
              str = "user-disconnected-indicator";
              openManaResult = obj2.openMana("user-disconnected-indicator", obj1);
            } else {
              obj5 = { key: "user-disconnected-indicator", icon: null, content: null };
              obj5.icon = function icon() { ... };
              intl = tmp(tmp2[17]).intl;
              obj5.content = intl.string(tmp(tmp2[17]).t.HFwRpk);
              openResult = obj2.open(obj5);
            }
            return;
          }
        }
        cResult[11] = tmp26;
        class C {
          constructor() {
            return closure_1_4.isConnected();
          }
        }
      } else {
        class P {
          constructor() {
            tmp = closure_0;
            tmp2 = setShowFloatingCTA;
            obj = closure_0(setShowFloatingCTA[15]);
            designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents("useVoicePanelCardUserStateIcons");
            tmp4 = closure_1;
            obj2 = closure_1(setShowFloatingCTA[16]);
            if (designSystemsNotificationComponents) {
              obj1 = { text: null, icon: null, iconColor: null };
              intl2 = tmp(tmp2[17]).intl;
              obj1.text = intl2.string(tmp(tmp2[17]).t.HFwRpk);
              obj1.icon = tmp(tmp2[18]).CircleErrorIcon;
              obj1.iconColor = tmp4(tmp2[19]).colors.ICON_FEEDBACK_WARNING;
              str = "user-disconnected-indicator";
              openManaResult = obj2.openMana("user-disconnected-indicator", obj1);
            } else {
              obj5 = { key: "user-disconnected-indicator", icon: null, content: null };
              obj5.icon = function icon() { ... };
              intl = tmp(tmp2[17]).intl;
              obj5.content = intl.string(tmp(tmp2[17]).t.HFwRpk);
              openResult = obj2.open(obj5);
            }
            return;
          }
        }
      }
    }
    return tmp25;
  }
  class A {
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
  cResult[5] = A;
  cResult[6] = items2;
  tmp18 = items2;
  tmp17 = A;
  const tmpResult6 = require("useStateFromStores");
}) : ((arg0, arg1, arg2) => {
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
    showTileVolumeIndicator = 0 === tmp2Result(tmp13, tmp4(4951).MediaEngineContextTypes.STREAM).effectiveVolume;
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
    const designSystemsNotificationComponents = closure_0(_null[15]).getDesignSystemsNotificationComponents("useVoicePanelCardUserStateIcons");
    const obj2 = closure_1(_null[16]);
    if (designSystemsNotificationComponents) {
      const obj3 = { text: null, icon: null, iconColor: null };
      const intl2 = closure_0(_null[17]).intl;
      obj3.text = intl2.string(closure_0(_null[17]).t.HFwRpk);
      obj3.icon = closure_0(_null[18]).CircleErrorIcon;
      obj3.iconColor = closure_1(_null[19]).colors.ICON_FEEDBACK_WARNING;
      obj2.openMana("user-disconnected-indicator", obj3);
    } else {
      const obj4 = {
        key: "user-disconnected-indicator",
        icon() {
            return stateFromStores1(closure_1_0(4806).CircleErrorIcon, { size: "xs", color: closure_1_1(587).colors.STATUS_WARNING });
          },
        content: null
      };
      const intl = closure_0(_null[17]).intl;
      obj4.content = intl.string(closure_0(_null[17]).t.HFwRpk);
      obj2.open(obj4);
    }
    const obj = closure_0(_null[15]);
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
                    closure_1(4574).open(obj2);
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
                    if (closure_0(9350).MuteDeafenIconState.DEAFENED_SERVER === muteDeafenIconState) {
                      const obj2 = { key: null, content: null };
                      const _HermesInternal4 = HermesInternal;
                      obj2.key = "" + closure_1_1 + "-status";
                      const intl4 = closure_0(1126).intl;
                      obj2.content = intl4.string(closure_0(1126).t.btxSdB);
                      closure_1(4574).open(obj2);
                      const obj7 = closure_1(4574);
                    } else if (closure_0(9350).MuteDeafenIconState.DEAFENED === muteDeafenIconState) {
                      const obj4 = { key: null, content: null };
                      const _HermesInternal3 = HermesInternal;
                      obj4.key = "" + closure_1_1 + "-status";
                      const intl3 = closure_0(1126).intl;
                      obj4.content = intl3.string(closure_0(1126).t.NjmiOL);
                      closure_1(4574).open(obj4);
                      const obj5 = closure_1(4574);
                    } else if (closure_0(9350).MuteDeafenIconState.MUTED_SERVER === muteDeafenIconState) {
                      const obj6 = { key: null, content: null };
                      const _HermesInternal2 = HermesInternal;
                      obj6.key = "" + closure_1_1 + "-status";
                      const intl2 = closure_0(1126).intl;
                      obj6.content = intl2.string(closure_0(1126).t.uLddbQ);
                      closure_1(4574).open(obj6);
                      const obj3 = closure_1(4574);
                    } else if (closure_0(9350).MuteDeafenIconState.MUTED_LOCAL === muteDeafenIconState) {
                      const obj8 = { key: null, content: null };
                      const _HermesInternal = HermesInternal;
                      obj8.key = "" + closure_1_1 + "-status";
                      const intl = closure_0(1126).intl;
                      obj8.content = intl.string(closure_0(1126).t.Q8Uzof);
                      closure_1(4574).open(obj8);
                      const obj = closure_1(4574);
                    } else if (closure_0(9350).MuteDeafenIconState.MUTED === muteDeafenIconState) {
                      const obj10 = { key: null, content: null };
                      const _HermesInternal5 = HermesInternal;
                      obj10.key = "" + closure_1_1 + "-status";
                      const intl5 = closure_0(1126).intl;
                      obj10.content = intl5.string(closure_0(1126).t.tjtv3P);
                      closure_1(4574).open(obj10);
                      const obj9 = closure_1(4574);
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