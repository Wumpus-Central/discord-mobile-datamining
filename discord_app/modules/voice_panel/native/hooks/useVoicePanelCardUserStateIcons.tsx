// discord_app/modules/voice_panel/native/hooks/useVoicePanelCardUserStateIcons.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import intl6 from "../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import CallConstants from "../../../calls/CallConstants.tsx";
import VoiceStateIconUtils from "../utils/VoiceStateIconUtils.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import VoicePanelFloatingCTAUtils from "../controls/utils/VoicePanelFloatingCTAUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, importDefault, obj1, openManaResult, openResult, str;

let tmp2;
const MobileAudioOutputExperimentDefault = tmp2(9660);
const useMuteAwareLocalVolumeDefault = tmp2(9701);
const ParticipantTypes = CallConstants.ParticipantTypes;
const jsx = Fragment.jsx;
const VoicePanelCardUserStateIconType = {
  STREAM_ICON: "STREAM_ICON",
  USER_VIDEO_ICON: "USER_VIDEO_ICON",
  MUTE_DEAFEN_ICON: "MUTE_DEAFEN_ICON",
  USER_DISCONNECTED_ICON: "DISCONNECTED_ICON",
  SPEAKER_MUTE_ICON: "SPEAKER_MUTE_ICON",
};
tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, arg3) => {
      let closure_0;
      let closure_1;
      let connected;
      let muteDeafenIconState;
      let setShowFloatingCTA;
      let tmp13;
      let tmp14;
      let tmp17;
      _require = arg1;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(35);
      let tmp4 = null;
      if (undefined !== arg3) {
        tmp4 = arg3;
      }
      importDefault = tmp4;
      let tmp5 = importDefault;
      setShowFloatingCTA = muteDeafenIconState.useContext(require("VoicePanelStateContext")).setShowFloatingCTA;
      let tmp8;
      const useMuteDeafenIconState = tmp(setShowFloatingCTA[8]).useMuteDeafenIconState;
      tmp(setShowFloatingCTA[8]);
      if (arg0 === ParticipantTypes.USER) {
        tmp8 = arg1;
      }
      muteDeafenIconState = useMuteDeafenIconState(tmp8, arg2);
      let tmp11;
      const useVideoIconState = tmp(setShowFloatingCTA[8]).useVideoIconState;
      tmp(setShowFloatingCTA[8]);
      if (arg0 === ParticipantTypes.USER) {
        tmp11 = arg1;
      }
      const videoIconState = useVideoIconState(tmp11, arg2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RTCConnectionStore];
        class C {
          constructor() {
            return closure_1_4.isConnected();
          }
        }
        cResult[0] = items;
        cResult[1] = C;
        tmp13 = items;
      } else {
        [tmp13, tmp14] = cResult;
      }
      const tmpResult6 = tmp(setShowFloatingCTA[9]);
      const stateFromStores = tmpResult6.useStateFromStores(tmp13, C);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [VoiceStateStore];
        class C {
          constructor() {
            return closure_1_4.isConnected();
          }
        }
        cResult[2] = items1;
        tmp17 = items1;
      } else {
        tmp17 = cResult[2];
      }
      if (cResult[3] === tmp4) {
        let tmp19;
        let tmp20;
        let tmp23;
        let tmp24;
        if (cResult[4] === arg1) {
          tmp19 = cResult[5];
          tmp20 = cResult[6];
        }
        const tmpResult7 = tmp(setShowFloatingCTA[9]);
        const stateFromStores1 = tmpResult7.useStateFromStores(tmp17, tmp19, tmp20);
        class C {
          constructor() {
            return closure_1_4.isConnected();
          }
        }
        const tmp5Result = tmp5(setShowFloatingCTA[10]);
        if (arg0 === ParticipantTypes.STREAM) {
          tmp23 = arg1;
        }
        const _Symbol = Symbol;
        const effectiveVolume = tmp5Result(tmp23, tmp(tmp2[11]).MediaEngineContextTypes.STREAM).effectiveVolume;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { location: "useVoicePanelCardUserStateIcons" };
          cResult[7] = obj2;
          class C {
            constructor() {
              return closure_1_4.isConnected();
            }
          }
        } else {
          tmp24 = cResult[7];
        }
        const tmp5Result2 = tmp5(setShowFloatingCTA[12]);
        const showTileVolumeIndicator =
          tmp5Result2.useConfig(tmp24).showTileVolumeIndicator &&
          0 === effectiveVolume &&
          arg0 === ParticipantTypes.STREAM;
        const tmpResult8 = tmp(setShowFloatingCTA[13]);
        const isRTCDisconnectedUIVisible = tmpResult8.useIsRTCDisconnectedUIVisible(tmp4, arg1);
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
              designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents(
                "useVoicePanelCardUserStateIcons",
              );
              tmp4 = closure_1;
              tmp5 = closure_1(setShowFloatingCTA[16]);
              if (designSystemsNotificationComponents) {
                obj1 = { text: null, icon: null, iconColor: null };
                openMana = tmp5.openMana;
                intl2 = tmp(tmp2[17]).intl;
                obj1.text = intl2.string(tmp(tmp2[17]).t.HFwRpk);
                obj1.icon = tmp(tmp2[18]).CircleErrorIcon;
                obj1.iconColor = tmp4(tmp2[19]).colors.ICON_FEEDBACK_WARNING;
                str = "user-disconnected-indicator";
                openManaResult = openMana("user-disconnected-indicator", obj1);
              } else {
                obj4 = { key: "user-disconnected-indicator", icon: null, content: null };
                obj4.icon = function icon() {
                  /* body not rendered: F148171 */
                };
                open = tmp5.open;
                intl = tmp(tmp2[17]).intl;
                obj4.content = intl.string(tmp(tmp2[17]).t.HFwRpk);
                openResult = open(obj4);
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
              designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents(
                "useVoicePanelCardUserStateIcons",
              );
              tmp4 = closure_1;
              tmp5 = closure_1(setShowFloatingCTA[16]);
              if (designSystemsNotificationComponents) {
                obj1 = { text: null, icon: null, iconColor: null };
                openMana = tmp5.openMana;
                intl2 = tmp(tmp2[17]).intl;
                obj1.text = intl2.string(tmp(tmp2[17]).t.HFwRpk);
                obj1.icon = tmp(tmp2[18]).CircleErrorIcon;
                obj1.iconColor = tmp4(tmp2[19]).colors.ICON_FEEDBACK_WARNING;
                str = "user-disconnected-indicator";
                openManaResult = openMana("user-disconnected-indicator", obj1);
              } else {
                obj4 = { key: "user-disconnected-indicator", icon: null, content: null };
                obj4.icon = function icon() {
                  /* body not rendered: F148171 */
                };
                open = tmp5.open;
                intl = tmp(tmp2[17]).intl;
                obj4.content = intl.string(tmp(tmp2[17]).t.HFwRpk);
                openResult = open(obj4);
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
              designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents(
                "useVoicePanelCardUserStateIcons",
              );
              tmp4 = closure_1;
              tmp5 = closure_1(setShowFloatingCTA[16]);
              if (designSystemsNotificationComponents) {
                obj1 = { text: null, icon: null, iconColor: null };
                openMana = tmp5.openMana;
                intl2 = tmp(tmp2[17]).intl;
                obj1.text = intl2.string(tmp(tmp2[17]).t.HFwRpk);
                obj1.icon = tmp(tmp2[18]).CircleErrorIcon;
                obj1.iconColor = tmp4(tmp2[19]).colors.ICON_FEEDBACK_WARNING;
                str = "user-disconnected-indicator";
                openManaResult = openMana("user-disconnected-indicator", obj1);
              } else {
                obj4 = { key: "user-disconnected-indicator", icon: null, content: null };
                obj4.icon = function icon() {
                  /* body not rendered: F148171 */
                };
                open = tmp5.open;
                intl = tmp(tmp2[17]).intl;
                obj4.content = intl.string(tmp(tmp2[17]).t.HFwRpk);
                openResult = open(obj4);
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
              designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents(
                "useVoicePanelCardUserStateIcons",
              );
              tmp4 = closure_1;
              tmp5 = closure_1(setShowFloatingCTA[16]);
              if (designSystemsNotificationComponents) {
                obj1 = { text: null, icon: null, iconColor: null };
                openMana = tmp5.openMana;
                intl2 = tmp(tmp2[17]).intl;
                obj1.text = intl2.string(tmp(tmp2[17]).t.HFwRpk);
                obj1.icon = tmp(tmp2[18]).CircleErrorIcon;
                obj1.iconColor = tmp4(tmp2[19]).colors.ICON_FEEDBACK_WARNING;
                str = "user-disconnected-indicator";
                openManaResult = openMana("user-disconnected-indicator", obj1);
              } else {
                obj4 = { key: "user-disconnected-indicator", icon: null, content: null };
                obj4.icon = function icon() {
                  /* body not rendered: F148171 */
                };
                open = tmp5.open;
                intl = tmp(tmp2[17]).intl;
                obj4.content = intl.string(tmp(tmp2[17]).t.HFwRpk);
                openResult = open(obj4);
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
                designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents(
                  "useVoicePanelCardUserStateIcons",
                );
                tmp4 = closure_1;
                tmp5 = closure_1(setShowFloatingCTA[16]);
                if (designSystemsNotificationComponents) {
                  obj1 = { text: null, icon: null, iconColor: null };
                  openMana = tmp5.openMana;
                  intl2 = tmp(tmp2[17]).intl;
                  obj1.text = intl2.string(tmp(tmp2[17]).t.HFwRpk);
                  obj1.icon = tmp(tmp2[18]).CircleErrorIcon;
                  obj1.iconColor = tmp4(tmp2[19]).colors.ICON_FEEDBACK_WARNING;
                  str = "user-disconnected-indicator";
                  openManaResult = openMana("user-disconnected-indicator", obj1);
                } else {
                  obj4 = { key: "user-disconnected-indicator", icon: null, content: null };
                  obj4.icon = function icon() {
                    /* body not rendered: F148171 */
                  };
                  open = tmp5.open;
                  intl = tmp(tmp2[17]).intl;
                  obj4.content = intl.string(tmp(tmp2[17]).t.HFwRpk);
                  openResult = open(obj4);
                }
                return;
              }
            }
            cResult[11] = tmp28;
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
                designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents(
                  "useVoicePanelCardUserStateIcons",
                );
                tmp4 = closure_1;
                tmp5 = closure_1(setShowFloatingCTA[16]);
                if (designSystemsNotificationComponents) {
                  obj1 = { text: null, icon: null, iconColor: null };
                  openMana = tmp5.openMana;
                  intl2 = tmp(tmp2[17]).intl;
                  obj1.text = intl2.string(tmp(tmp2[17]).t.HFwRpk);
                  obj1.icon = tmp(tmp2[18]).CircleErrorIcon;
                  obj1.iconColor = tmp4(tmp2[19]).colors.ICON_FEEDBACK_WARNING;
                  str = "user-disconnected-indicator";
                  openManaResult = openMana("user-disconnected-indicator", obj1);
                } else {
                  obj4 = { key: "user-disconnected-indicator", icon: null, content: null };
                  obj4.icon = function icon() {
                    /* body not rendered: F148171 */
                  };
                  open = tmp5.open;
                  intl = tmp(tmp2[17]).intl;
                  obj4.content = intl.string(tmp(tmp2[17]).t.HFwRpk);
                  openResult = open(obj4);
                }
                return;
              }
            }
          }
        }
        return tmp27;
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
      tmp20 = items2;
      tmp19 = A;
    }
  : (arg0, arg1, arg2) => {
      let _null;
      let closure_0;
      let closure_1;
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
      let obj = setShowFloatingCTA;
      const tmp2 = importDefault;
      const tmp3 = dependencyMap;
      setShowFloatingCTA = setShowFloatingCTA.useContext(VoicePanelStateContextDefault).setShowFloatingCTA;
      let tmp5 = require("VoiceStateIconUtils");
      let tmp7;
      const useMuteDeafenIconState = tmp5.useMuteDeafenIconState;
      if (arg0 === stateFromStores.USER) {
        tmp7 = arg1;
      }
      muteDeafenIconState = useMuteDeafenIconState(tmp7, arg2);
      let tmp10;
      const useVideoIconState = tmp4(9336).useVideoIconState;
      require("VoiceStateIconUtils");
      if (arg0 === stateFromStores.USER) {
        tmp10 = arg1;
      }
      videoIconState = useVideoIconState(tmp10, arg2);
      let items = [muteDeafenIconState];
      const tmp4Result4 = require("useStateFromStores");
      stateFromStores = tmp4Result4.useStateFromStores(items, () => muteDeafenIconState.isConnected());
      let items1 = [videoIconState];
      const items2 = [tmp, arg1];
      const tmp4Result5 = require("useStateFromStores");
      stateFromStores1 = tmp4Result5.useStateFromStores(
        items1,
        () => {
          let voicePlatformForChannel = null;
          if (null != c2) {
            voicePlatformForChannel = null;
            if (null != closure_1) {
              voicePlatformForChannel = VoiceStateStore.getVoicePlatformForChannel(tmp, tmp3);
            }
          }
          return voicePlatformForChannel;
        },
        items2,
      );
      let tmp15;
      const tmp2Result = useMuteAwareLocalVolumeDefault;
      if (arg0 === stateFromStores.STREAM) {
        tmp15 = arg1;
      }
      const effectiveVolume = tmp2Result(tmp15, tmp4(4945).MediaEngineContextTypes.STREAM).effectiveVolume;
      const tmp2Result2 = MobileAudioOutputExperimentDefault;
      showTileVolumeIndicator = tmp2Result2.useConfig({
        location: "useVoicePanelCardUserStateIcons",
      }).showTileVolumeIndicator;
      if (showTileVolumeIndicator) {
        showTileVolumeIndicator = 0 === effectiveVolume;
      }
      if (showTileVolumeIndicator) {
        showTileVolumeIndicator = arg0 === tmp6.STREAM;
      }
      const tmp4Result6 = require("RTCConnectionDesyncHooks");
      isRTCDisconnectedUIVisible = tmp4Result6.useIsRTCDisconnectedUIVisible(tmp, arg1);
      const items3 = [setShowFloatingCTA];
      callback = obj.useCallback(() => {
        setShowFloatingCTA(VoicePanelFloatingCTAUtils.OverrideFloatingCTA.BAD_CONNECTION);
      }, items3);
      callback1 = obj.useCallback(() => {
        let intl;
        let intl2;
        let obj = closure_0(_null[15]);
        const designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents(
          "useVoicePanelCardUserStateIcons",
        );
        const tmp5 = closure_1(_null[16]);
        if (designSystemsNotificationComponents) {
          const openMana = tmp5.openMana;
          const obj2 = {
            text: intl2.string(closure_0(_null[17]).t.HFwRpk),
            icon: closure_0(_null[18]).CircleErrorIcon,
            iconColor: closure_1(_null[19]).colors.ICON_FEEDBACK_WARNING,
          };
          intl2 = closure_0(_null[17]).intl;
          openMana("user-disconnected-indicator", obj2);
        } else {
          const open = tmp5.open;
          const obj3 = {
            key: "user-disconnected-indicator",
            icon() {
              const obj = { size: "xs", color: closure_1_1(_null[19]).colors.STATUS_WARNING };
              const CircleErrorIcon = closure_1_0(_null[18]).CircleErrorIcon;
              return stateFromStores1(CircleErrorIcon, obj);
            },
            content: intl.string(closure_0(_null[17]).t.HFwRpk),
          };
          intl = closure_0(_null[17]).intl;
          open(obj3);
        }
      }, []);
      const items4 = [
        stateFromStores,
        arg0,
        videoIconState,
        muteDeafenIconState,
        isRTCDisconnectedUIVisible,
        stateFromStores1,
        callback,
        arg1,
        callback1,
        showTileVolumeIndicator,
      ];
      return obj.useMemo(() => {
        let obj;
        let tmp15;
        if (stateFromStores) {
          if (closure_0 === ParticipantTypes.STREAM) {
            const items = [];
            if (showTileVolumeIndicator) {
              let obj2 = {
                type: obj.SPEAKER_MUTE_ICON,
                onPress() {
                  let intl;
                  const tmp = closure_1(c2[16]);
                  const open = tmp.open;
                  const obj = {
                    key: "" + closure_1_1 + "-stream-status",
                    content: intl.string(closure_0(c2[17]).t.Q8Uzof),
                  };
                  intl = closure_0(c2[17]).intl;
                  open(obj);
                },
              };
              items.push(obj2);
            }
            let obj3 = { type: obj.STREAM_ICON, voicePlatform: stateFromStores1 };
            items.push(obj3);
            return items;
          } else if (tmp2 !== tmp3.USER) {
            return [];
          } else {
            const items1 = [];
            if (isRTCDisconnectedUIVisible) {
              obj = { type: obj.USER_DISCONNECTED_ICON, onPress: callback1 };
              items1.push(obj);
            }
            const tmp9 = null != videoIconState && videoIconState !== VoiceStateIconUtils.VideoIconState.VIDEO_ACTIVE;
            if (tmp9) {
              let obj4 = { type: obj.USER_VIDEO_ICON, videoIconState, onPress: tmp15 };
              const push = items1.push;
              tmp15 = undefined;
              if (videoIconState === VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO) {
                tmp15 = callback;
              }
              push(obj4);
            }
            if (null != muteDeafenIconState) {
              let obj5 = {
                type: obj.MUTE_DEAFEN_ICON,
                muteDeafenIconState: tmp17,
                withLeftMargin: items1.length > 0,
                onPress() {
                  let intl;
                  let intl2;
                  let intl3;
                  let intl4;
                  let intl5;
                  if (closure_0(c2[8]).MuteDeafenIconState.DEAFENED_SERVER === muteDeafenIconState) {
                    const _HermesInternal4 = HermesInternal;
                    const obj2 = {
                      key: "" + closure_1_1 + "-status",
                      content: intl4.string(closure_0(c2[17]).t.btxSdB),
                    };
                    const open4 = closure_1(c2[16]).open;
                    closure_1(c2[16]);
                    intl4 = closure_0(c2[17]).intl;
                    open4(obj2);
                  } else if (closure_0(c2[8]).MuteDeafenIconState.DEAFENED === muteDeafenIconState) {
                    const _HermesInternal3 = HermesInternal;
                    const obj3 = {
                      key: "" + closure_1_1 + "-status",
                      content: intl3.string(closure_0(c2[17]).t.NjmiOL),
                    };
                    const open3 = closure_1(c2[16]).open;
                    closure_1(c2[16]);
                    intl3 = closure_0(c2[17]).intl;
                    open3(obj3);
                  } else if (closure_0(c2[8]).MuteDeafenIconState.MUTED_SERVER === muteDeafenIconState) {
                    const _HermesInternal2 = HermesInternal;
                    const obj4 = {
                      key: "" + closure_1_1 + "-status",
                      content: intl2.string(closure_0(c2[17]).t.uLddbQ),
                    };
                    const open2 = closure_1(c2[16]).open;
                    closure_1(c2[16]);
                    intl2 = closure_0(c2[17]).intl;
                    open2(obj4);
                  } else if (closure_0(c2[8]).MuteDeafenIconState.MUTED_LOCAL === muteDeafenIconState) {
                    const _HermesInternal = HermesInternal;
                    const obj = { key: "" + closure_1_1 + "-status", content: intl.string(closure_0(c2[17]).t.Q8Uzof) };
                    const open = closure_1(c2[16]).open;
                    closure_1(c2[16]);
                    intl = closure_0(c2[17]).intl;
                    open(obj);
                  } else if (closure_0(c2[8]).MuteDeafenIconState.MUTED === muteDeafenIconState) {
                    const _HermesInternal5 = HermesInternal;
                    const obj5 = {
                      key: "" + closure_1_1 + "-status",
                      content: intl5.string(closure_0(c2[17]).t.tjtv3P),
                    };
                    const open5 = closure_1(c2[16]).open;
                    closure_1(c2[16]);
                    intl5 = closure_0(c2[17]).intl;
                    open5(obj5);
                  }
                },
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
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelCardUserStateIcons.tsx");

export default tmp2;
export { VoicePanelCardUserStateIconType };
