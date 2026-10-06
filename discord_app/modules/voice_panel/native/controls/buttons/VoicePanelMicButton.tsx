// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelMicButton.tsx
import LoggerDefault from "../../../../debug/Logger.tsx";
import react2 from "../../../../../../_runtime/00576_react.js";
import intl3 from "../../../../../intl/index.native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import HapticUtils from "../../../../haptics/HapticUtils.native.tsx";
import LegacyBaseButton from "../../../../../../_runtime/06147_LegacyBaseButton.js";
import useMuteStates from "../../../../video_calls/useMuteStates.tsx";
import MicrophoneDenyIcon from "../../../../../design/components/Icon/native/redesign/generated/MicrophoneDenyIcon.tsx";
import MediaEngineActionCreators from "../../../../media_engine/MediaEngineActionCreators.tsx";
import VoiceActionUtils from "../../../../video_calls/native/VoiceActionUtils.tsx";
import VoicePanelRiveMicButton2 from "VoicePanelRiveMicButton.tsx";
import useDeafStates from "../../../../video_calls/useDeafStates.tsx";
import VoicePanelStateContextDefault from "../../VoicePanelStateContext.tsx";
import VoicePanelStyles from "VoicePanelStyles.tsx";
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper.tsx";
import _slicedToArray_mod from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../../_runtime/00019_react.js";
import GameConsoleStore from "../../../../game_console/GameConsoleStore.tsx";
import ImpersonateStore from "../../../../impersonate/ImpersonateStore.tsx";
import AuthenticationStore from "../../../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../../../../stores/MediaEngineStore.tsx";
import PermissionStore from "../../../../../stores/PermissionStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import VoiceStateStore from "../../../../../stores/VoiceStateStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault, info, infoResult, obj1, str, str2, tmp14;

let closure_14;
let closure_15;
let map1;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = Fragment);
const tmp3 = new LoggerDefault("VoicePanelMicButton");
let closure_16 = tmp3;
let closure_17 = createStyles.createStyles({
  text: { position: "absolute", left: 0, right: 0, bottom: 4, textAlign: "center", opacity: 0.5 },
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let ref;
      let tmp13;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(4);
      importDefault = react.useRef(null);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [
          ChannelStore,
          AuthenticationStore,
          VoiceStateStore,
          MediaEngineStore,
          PermissionStore,
          ImpersonateStore,
          GameConsoleStore,
        ];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        class M {
          constructor() {
            channel = closure_8.getChannel(closure_0);
            if (null != channel) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj2 = closure_0(closure_2[15]);
              obj1 = {
                channel: null,
                authenticationStore: null,
                voiceStateStore: null,
                mediaEngineStore: null,
                permissionStore: null,
                impersonateStore: null,
              };
              obj1.channel = channel;
              tmp4 = closure_7;
              obj1.authenticationStore = closure_7;
              tmp5 = closure_12;
              obj1.voiceStateStore = closure_12;
              tmp6 = closure_9;
              obj1.mediaEngineStore = closure_9;
              tmp7 = closure_10;
              obj1.permissionStore = closure_10;
              tmp8 = closure_6;
              obj1.impersonateStore = closure_6;
              muteStates = obj2.getMuteStates(obj1);
            } else {
              muteStates = { selfMute: false, suppress: false, mute: false };
            }
            tmp9 = closure_1;
            current = closure_1.current;
            selfMute = undefined;
            if (current != null) {
              selfMute = current.selfMute;
            }
            tmp11 = selfMute !== muteStates.selfMute;
            if (tmp11) {
              tmp12 = closure_11;
              currentUser = closure_11.getCurrentUser();
              isStaffResult = undefined;
              if (currentUser != null) {
                isStaffResult = currentUser.isStaff();
              }
              tmp11 = isStaffResult;
            }
            if (tmp11) {
              tmp14 = closure_16;
              current2 = tmp9.current;
              selfMute1 = undefined;
              info = closure_16.info;
              if (current2 != null) {
                selfMute1 = current2.selfMute;
              }
              str = ">";
              str2 = "Self mute changed";
              tmp16 = tmp14;
              tmp17 = selfMute1;
              infoResult = info("Self mute changed", selfMute1, ">", muteStates.selfMute);
            }
            tmp9.current = muteStates;
            obj5 = closure_0(closure_2[16]);
            return obj5.createMuteHandler(muteStates, null != closure_5.getAwaitingRemoteSessionInfo());
          }
        }
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = M;
        cResult[3] = items1;
        tmp13 = items1;
      } else {
        class M {
          constructor() {
            channel = closure_8.getChannel(closure_0);
            if (null != channel) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj2 = closure_0(closure_2[15]);
              obj1 = {
                channel: null,
                authenticationStore: null,
                voiceStateStore: null,
                mediaEngineStore: null,
                permissionStore: null,
                impersonateStore: null,
              };
              obj1.channel = channel;
              tmp4 = closure_7;
              obj1.authenticationStore = closure_7;
              tmp5 = closure_12;
              obj1.voiceStateStore = closure_12;
              tmp6 = closure_9;
              obj1.mediaEngineStore = closure_9;
              tmp7 = closure_10;
              obj1.permissionStore = closure_10;
              tmp8 = closure_6;
              obj1.impersonateStore = closure_6;
              muteStates = obj2.getMuteStates(obj1);
            } else {
              muteStates = { selfMute: false, suppress: false, mute: false };
            }
            tmp9 = closure_1;
            current = closure_1.current;
            selfMute = undefined;
            if (current != null) {
              selfMute = current.selfMute;
            }
            tmp11 = selfMute !== muteStates.selfMute;
            if (tmp11) {
              tmp12 = closure_11;
              currentUser = closure_11.getCurrentUser();
              isStaffResult = undefined;
              if (currentUser != null) {
                isStaffResult = currentUser.isStaff();
              }
              tmp11 = isStaffResult;
            }
            if (tmp11) {
              tmp14 = closure_16;
              current2 = tmp9.current;
              selfMute1 = undefined;
              info = closure_16.info;
              if (current2 != null) {
                selfMute1 = current2.selfMute;
              }
              str = ">";
              str2 = "Self mute changed";
              tmp16 = tmp14;
              tmp17 = selfMute1;
              infoResult = info("Self mute changed", selfMute1, ">", muteStates.selfMute);
            }
            tmp9.current = muteStates;
            obj5 = closure_0(closure_2[16]);
            return obj5.createMuteHandler(muteStates, null != closure_5.getAwaitingRemoteSessionInfo());
          }
        }
        tmp13 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStoresObject(first, M, tmp13);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const ref = react.useRef(null);
      let obj = require("get initialized");
      const items = [
        ChannelStore,
        AuthenticationStore,
        VoiceStateStore,
        MediaEngineStore,
        PermissionStore,
        ImpersonateStore,
        GameConsoleStore,
      ];
      const items1 = [arg0];
      return obj.useStateFromStoresObject(
        items,
        () => {
          let muteStates;
          const channel = ChannelStore.getChannel(closure_0);
          if (null != channel) {
            const obj = {
              channel,
              authenticationStore: AuthenticationStore,
              voiceStateStore: VoiceStateStore,
              mediaEngineStore: MediaEngineStore,
              permissionStore: PermissionStore,
              impersonateStore: ImpersonateStore,
            };
            const obj2 = useMuteStates;
            muteStates = obj2.getMuteStates(obj);
          } else {
            muteStates = { selfMute: false, suppress: false, mute: false };
          }
          const current = ref.current;
          let selfMute;
          if (current != null) {
            selfMute = current.selfMute;
          }
          let tmp11 = selfMute !== muteStates.selfMute;
          if (tmp11) {
            const currentUser = UserStore.getCurrentUser();
            let isStaffResult;
            if (currentUser != null) {
              isStaffResult = currentUser.isStaff();
            }
            tmp11 = isStaffResult;
          }
          if (tmp11) {
            const current2 = ref.current;
            let selfMute1;
            info = info.info;
            if (current2 != null) {
              selfMute1 = current2.selfMute;
            }
            info("Self mute changed", selfMute1, ">", muteStates.selfMute);
          }
          ref.current = muteStates;
          const obj5 = VoiceActionUtils;
          return obj5.createMuteHandler(muteStates, null != GameConsoleStore.getAwaitingRemoteSessionInfo());
        },
        items1,
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp11;
      let tmp12;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [
          ChannelStore,
          AuthenticationStore,
          VoiceStateStore,
          MediaEngineStore,
          PermissionStore,
          ImpersonateStore,
        ];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          let deafStates;
          const channel = ChannelStore.getChannel(closure_0);
          if (null != channel) {
            const obj2 = useDeafStates;
            deafStates = obj2.getDeafStates(channel, VoiceStateStore, MediaEngineStore, AuthenticationStore);
          } else {
            deafStates = { selfDeaf: false, deaf: false };
          }
          const obj3 = VoiceActionUtils;
          return obj3.createDeafHandler(deafStates);
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp12 = items1;
        tmp11 = fn;
      } else {
        tmp11 = cResult[2];
        tmp12 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStoresObject(first, tmp11, tmp12);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [
        ChannelStore,
        AuthenticationStore,
        VoiceStateStore,
        MediaEngineStore,
        PermissionStore,
        ImpersonateStore,
      ];
      const items1 = [arg0];
      const obj = require("get initialized");
      return obj.useStateFromStoresObject(
        items,
        () => {
          let deafStates;
          const channel = ChannelStore.getChannel(closure_0);
          if (null != channel) {
            const obj2 = useDeafStates;
            deafStates = obj2.getDeafStates(channel, VoiceStateStore, MediaEngineStore, AuthenticationStore);
          } else {
            deafStates = { selfDeaf: false, deaf: false };
          }
          const obj3 = VoiceActionUtils;
          return obj3.createDeafHandler(deafStates);
        },
        items1,
      );
    };
let closure_20 = {
  code: "function VoicePanelMicButtonTsx1(){const{runOnJS,handlePTTEnd}=this.__closure;runOnJS(handlePTTEnd)();}",
};
let closure_21 = {
  code: "function VoicePanelMicButtonTsx2(event,manager){const{State,runOnJS,handleDragStart}=this.__closure;if(event.state!==State.BEGAN)return;manager.activate();runOnJS(handleDragStart)();}",
};
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (props) => {
      let dominantMuteState;
      let mute;
      let onPress;
      let tmp13;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(13);
      props = props.props;
      const wrapperSpecs = props.wrapperSpecs;
      ({ mute, onPress, dominantMuteState } = closure_18(react.useContext(VoicePanelStateContextDefault).channelId));
      closure_18(react.useContext(VoicePanelStateContextDefault).channelId);
      const obj2 = VoicePanelStyles;
      const voicePanelButtonStyles = obj2.useVoicePanelButtonStyles(wrapperSpecs);
      if (dominantMuteState !== VoiceActionUtils.DominantMuteState.SERVER_MUTE) {
        let color;
        if (mute) {
          color = voicePanelButtonStyles.iconFillRed.color;
        } else {
          color = voicePanelButtonStyles.iconFill.color;
        }
        if (cResult[2] === mute) {
          let tmp10;
          if (cResult[3] === color) {
            tmp10 = cResult[4];
          }
          tmp7 = tmp10;
        }
        const obj3 = { color, muted: mute };
        const tmp12 = map1(VoicePanelRiveMicButton2.VoicePanelRiveMicButton, obj3);
        cResult[2] = mute;
        cResult[3] = color;
        cResult[4] = tmp12;
        tmp10 = tmp12;
      } else if (cResult[0] !== voicePanelButtonStyles.iconFillRed.color) {
        const obj4 = { color: voicePanelButtonStyles.iconFillRed.color };
        const tmp9 = map1(MicrophoneDenyIcon.MicrophoneDenyIcon, obj4);
        cResult[0] = voicePanelButtonStyles.iconFillRed.color;
        cResult[1] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[5] !== mute) {
        let stringResult;
        const intl = intl3.intl;
        const string = intl.string;
        const t = intl3.t;
        if (mute) {
          stringResult = string(t.YqAjXy);
        } else {
          stringResult = string(t.w4m945);
        }
        cResult[5] = mute;
        cResult[6] = stringResult;
        tmp13 = stringResult;
      } else {
        tmp13 = cResult[6];
      }
      const tmp15 = mute ? voicePanelButtonStyles.iconBgVoiceMuted : voicePanelButtonStyles.iconBg;
      if (cResult[7] === tmp7) {
        if (cResult[8] === onPress) {
          if (cResult[9] === props) {
            if (cResult[10] === tmp13) {
              let tmp16;
              if (cResult[11] === tmp15) {
                tmp16 = cResult[12];
              }
              return tmp16;
            }
          }
        }
      }
      const tmp17 = map1(VoicePanelAnimatedButtonWrapperDefault, {
        props,
        onPress,
        accessibilityLabel: tmp13,
        style: tmp15,
        children: tmp7,
      });
      cResult[7] = tmp7;
      cResult[8] = onPress;
      cResult[9] = props;
      cResult[10] = tmp13;
      cResult[11] = tmp15;
      cResult[12] = tmp17;
      tmp16 = tmp17;
    }
  : (arg0) => {
      let props;
      let stringResult;
      let wrapperSpecs;
      let dominantMuteState;
      let voicePanelButtonStyles;
      ({ props, wrapperSpecs } = arg0);
      const tmp = closure_18(react.useContext(dominantMuteState(voicePanelButtonStyles[19])).channelId);
      const mute = tmp.mute;
      dominantMuteState = tmp.dominantMuteState;
      const onPress = tmp.onPress;
      let obj = mute(voicePanelButtonStyles[25]);
      voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
      const items = [voicePanelButtonStyles, mute, dominantMuteState];
      const memo = react.useMemo(() => {
        let tmp3Result;
        if (dominantMuteState === VoiceActionUtils.DominantMuteState.SERVER_MUTE) {
          const obj2 = { color: voicePanelButtonStyles.iconFillRed.color };
          tmp3Result = map1(MicrophoneDenyIcon.MicrophoneDenyIcon, obj2);
        } else {
          let color;
          const VoicePanelRiveMicButton = VoicePanelRiveMicButton2.VoicePanelRiveMicButton;
          if (mute) {
            color = voicePanelButtonStyles.iconFillRed.color;
          } else {
            color = voicePanelButtonStyles.iconFill.color;
          }
          const obj = { color, muted: mute };
          tmp3Result = map1(VoicePanelRiveMicButton, obj);
        }
        return tmp3Result;
      }, items);
      const element = {
        props,
        onPress,
        accessibilityLabel: stringResult,
        style: mute ? voicePanelButtonStyles.iconBgVoiceMuted : voicePanelButtonStyles.iconBg,
        children: memo,
      };
      const tmp5 = dominantMuteState(voicePanelButtonStyles[26]);
      const intl = mute(voicePanelButtonStyles[27]).intl;
      const string = intl.string;
      const t = mute(voicePanelButtonStyles[27]).t;
      if (mute) {
        stringResult = string(t.YqAjXy);
      } else {
        stringResult = string(t.w4m945);
      }
      return closure_13(tmp5, element);
    };
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelMicButton.tsx");

export const PTTButton = function PTTButton(arg0) {
  let MicrophoneIcon;
  let _undefined;
  let c0;
  let closure_3;
  let closure_4;
  let color;
  let element;
  let intl;
  let intl2;
  let items6;
  let items7;
  let mute;
  let onPress;
  let props;
  let tmp2Result;
  let tmp5;
  let wrapperSpecs;
  _require = undefined;
  let onPress2;
  let sharedValue;
  _slicedToArray = undefined;
  react = undefined;
  let onPressIn;
  let callback1;
  let callback3;
  ({ props, wrapperSpecs } = arg0);
  let obj = react;
  const tmp2 = onPress2;
  const tmp = closure_17();
  const channelId = react.useContext(onPress2(sharedValue[19])).channelId;
  [tmp5, c0] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  ({ mute, onPress } = closure_18(channelId));
  const tmp6 = closure_18(channelId);
  const tmp7 = closure_19(channelId);
  onPress2 = tmp7.onPress;
  if (!tmp7.deaf) {
    let tmp8;
    if (mute) {
      tmp8 = onPress;
    }
    onPress2 = tmp8;
  }
  let obj2 = require("ReanimatedRexport");
  sharedValue = obj2.useSharedValue(false);
  const tmp11 = tmp2(sharedValue[21])();
  _slicedToArray = tmp11;
  react = obj.useRef({ active: false, dragging: false });
  const items = [tmp11, sharedValue, onPress2];
  onPressIn = obj.useCallback(() => {
    if (!closure_4.current.active) {
      if (onPress2 != null) {
        tmp2();
      }
      tmp.current.active = true;
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj2 = MediaEngineActionCreators;
      obj2.setPushToTalkState(true);
      closure_3.lock();
      const result1 = sharedValue.set(true);
      _undefined(true);
    }
  }, items);
  const items1 = [tmp11, sharedValue];
  callback1 = obj.useCallback(() => {
    if (closure_4.current.active) {
      closure_4.current.active = false;
      closure_4.current.dragging = false;
      const obj = MediaEngineActionCreators;
      obj.setPushToTalkState(false);
      closure_3.unlock();
      const result = sharedValue.set(false);
      _undefined(false);
    }
  }, items1);
  const items2 = [callback1];
  const items3 = [onPressIn];
  const callback2 = obj.useCallback(() => {
    if (!closure_4.current.dragging) {
      callback1();
    }
  }, items2);
  callback3 = obj.useCallback(() => {
    if (!closure_4.current.dragging) {
      closure_4.current.dragging = true;
      callback();
    }
  }, items3);
  const items4 = [callback3, callback1];
  const items5 = [callback1];
  const memo = obj.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const fn = function n(state, activate) {
      if (state.state === c0(sharedValue[24]).State.BEGAN) {
        activate.activate();
        const tmpResult = c0(sharedValue[20]);
        tmpResult.runOnJS(callback3)();
      }
    };
    const PanResult = Gesture.Pan();
    const manualActivationResult = PanResult.manualActivation(true);
    let obj = { State: LegacyBaseButton.State, runOnJS: ReanimatedRexport.runOnJS, handleDragStart: callback3 };
    fn.__closure = obj;
    fn.__workletHash = 13866422602014;
    fn.__initData = __initData2;
    const fn2 = function t() {
      const obj = c0(sharedValue[20]);
      obj.runOnJS(callback1)();
    };
    const onTouchesMoveResult = manualActivationResult.onTouchesMove(fn);
    fn2.__closure = { runOnJS: ReanimatedRexport.runOnJS, handlePTTEnd: callback1 };
    fn2.__workletHash = 12941114426646;
    fn2.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, handlePTTEnd: callback1 });
    return onTouchesMoveResult.onFinalize(fn2);
  }, items4);
  const effect = obj.useEffect(() => () => callback1(), items5);
  const obj3 = require("VoicePanelStyles");
  const voicePanelButtonStyles = obj3.useVoicePanelButtonStyles(wrapperSpecs);
  const obj4 = { gesture: memo, children: closure_13(tmp2Result, element) };
  const GestureDetector = require("LegacyBaseButton").GestureDetector;
  element = {
    onPressIn,
    onPressOut: callback2,
    props,
    pressed: sharedValue,
    accessibilityLabel: intl.string(require("intl").t.Q8gkVL),
    style: tmp5 ? voicePanelButtonStyles.iconBgSelected : voicePanelButtonStyles.iconBg,
    children: closure_13(MicrophoneIcon, { color, size: "lg" }),
  };
  tmp2Result = tmp2(sharedValue[26]);
  intl = require("intl").intl;
  MicrophoneIcon = tmp9(tmp3[28]).MicrophoneIcon;
  if (tmp5) {
    color = voicePanelButtonStyles.iconFillSelected.color;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  const obj5 = { children: items6 };
  items6 = [closure_13(GestureDetector, obj4)];
  const obj6 = { style: items7, variant: "text-xxs/medium", children: intl2.string(require("intl").t.Q8gkVL) };
  items7 = [tmp.text, voicePanelButtonStyles.iconFill];
  const Text = tmp9(tmp3[29]).Text;
  intl2 = tmp9(tmp3[27]).intl;
  items6[1] = closure_13(Text, obj6);
  return closure_15(closure_14, obj5);
};
export const MicButton = tmp4;
