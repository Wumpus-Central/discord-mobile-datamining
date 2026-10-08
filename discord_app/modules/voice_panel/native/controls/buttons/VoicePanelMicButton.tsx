// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelMicButton.tsx
import LoggerDefault from "../../../../debug/Logger.tsx";
import c from "../../../../../../_runtime/00576_c.js";
import util from "../../../../../intl/index.native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import HapticUtils from "../../../../haptics/HapticUtils.native.tsx";
import LegacyBaseButton from "../../../../../../_runtime/06326_LegacyBaseButton.js";
import useMuteStates from "../../../../video_calls/useMuteStates.tsx";
import MicrophoneDenyIcon from "../../../../../design/components/Icon/native/redesign/generated/MicrophoneDenyIcon.tsx";
import MediaEngineActionCreators from "../../../../media_engine/MediaEngineActionCreators.tsx";
import VoiceActionUtils from "../../../../video_calls/native/VoiceActionUtils.tsx";
import VoicePanelRiveMicButton from "VoicePanelRiveMicButton.tsx";
import useDeafStates from "../../../../video_calls/useDeafStates.tsx";
import VoicePanelStateContextDefault from "../../VoicePanelStateContext.tsx";
import VoicePanelStyles from "VoicePanelStyles.tsx";
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GameConsoleStore from "../../../../game_console/GameConsoleStore.tsx";
import ImpersonateStore from "../../../../impersonate/ImpersonateStore.tsx";
import AuthenticationStore from "../../../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../../../../stores/MediaEngineStore.tsx";
import PermissionStore from "../../../../../stores/PermissionStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import VoiceStateStore from "../../../../../stores/VoiceStateStore.tsx";

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = new LoggerDefault("VoicePanelMicButton");
const createStyles = fn(5090);
let closure_17 = createStyles.createStyles({
  text: { position: "absolute", left: 0, right: 0, bottom: 4, textAlign: "center", opacity: 0.5 },
});
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMuteHandlers(arg0) {
      _require = arg0;
      const cResult = require("c").c(4);
      noop.useRef(null);
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
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function h() {
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
            let muteStates = useMuteStates.getMuteStates(obj);
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
            if (current2 != null) {
              selfMute1 = current2.selfMute;
            }
            logger.info("Self mute changed", selfMute1, ">", muteStates.selfMute);
          }
          ref.current = muteStates;
          return VoiceActionUtils.createMuteHandler(
            muteStates,
            null != GameConsoleStore.getAwaitingRemoteSessionInfo(),
          );
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp13 = items1;
        let tmp12 = fn;
      } else {
        tmp12 = cResult[2];
        tmp13 = cResult[3];
      }
      let obj = require("c");
      return require("initialize").useStateFromStoresObject(first, tmp12, tmp13);
    }
  : function useMuteHandlers(arg0) {
      _require = arg0;
      noop.useRef(null);
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
      return require("initialize").useStateFromStoresObject(
        items,
        () => {
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
            let muteStates = useMuteStates.getMuteStates(obj);
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
            if (current2 != null) {
              selfMute1 = current2.selfMute;
            }
            logger.info("Self mute changed", selfMute1, ">", muteStates.selfMute);
          }
          ref.current = muteStates;
          return VoiceActionUtils.createMuteHandler(
            muteStates,
            null != GameConsoleStore.getAwaitingRemoteSessionInfo(),
          );
        },
        items1,
      );
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDeafHandlers(arg0) {
      _require = arg0;
      const cResult = require("c").c(4);
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
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          const channel = ChannelStore.getChannel(closure_0);
          if (null != channel) {
            const obj2 = useDeafStates;
            let deafStates = obj2.getDeafStates(channel, VoiceStateStore, MediaEngineStore, AuthenticationStore);
          } else {
            deafStates = { selfDeaf: false, deaf: false };
          }
          return VoiceActionUtils.createDeafHandler(deafStates);
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp12 = items1;
        let tmp11 = fn;
      } else {
        tmp11 = cResult[2];
        tmp12 = cResult[3];
      }
      const obj = require("c");
      return require("initialize").useStateFromStoresObject(first, tmp11, tmp12);
    }
  : function useDeafHandlers(arg0) {
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
      return require("initialize").useStateFromStoresObject(
        items,
        () => {
          const channel = ChannelStore.getChannel(closure_0);
          if (null != channel) {
            const obj2 = useDeafStates;
            let deafStates = obj2.getDeafStates(channel, VoiceStateStore, MediaEngineStore, AuthenticationStore);
          } else {
            deafStates = { selfDeaf: false, deaf: false };
          }
          return VoiceActionUtils.createDeafHandler(deafStates);
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
ReactCompilerGating = fn(558);
const tmp3 = new LoggerDefault("VoicePanelMicButton");
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelMicButton.tsx");

export const PTTButton = function PTTButton(arg0) {
  _require = undefined;
  let onPress2;
  let sharedValue;
  _slicedToArray = undefined;
  noop = undefined;
  let onPressIn;
  let callback1;
  let callback3;
  ({ props, wrapperSpecs } = arg0);
  const channelId = noop.useContext(onPress2(sharedValue[19])).channelId;
  const tmp = closure_17();
  [tmp5, c0] = noop.useState(false);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  ({ mute, onPress } = closure_18(channelId));
  const tmp7 = closure_19(channelId);
  onPress2 = tmp7.onPress;
  if (!tmp7.deaf) {
    let tmp8;
    if (mute) {
      tmp8 = onPress;
    }
    onPress2 = tmp8;
  }
  const tmp6 = closure_18(channelId);
  sharedValue = require("ReanimatedRexport").useSharedValue(false);
  const tmp11 = onPress2(sharedValue[21])();
  _slicedToArray = tmp11;
  noop = obj.useRef({ active: false, dragging: false });
  const items = [tmp11, sharedValue, onPress2];
  onPressIn = obj.useCallback(() => {
    if (!closure_4.current.active) {
      if (onPress2 != null) {
        tmp2();
      }
      tmp.current.active = true;
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      MediaEngineActionCreators.setPushToTalkState(MediaEngineStore.getMediaEngine(), true);
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
      MediaEngineActionCreators.setPushToTalkState(MediaEngineStore.getMediaEngine(), false);
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
    const PanResult = Gesture.Pan();
    const fn = function n(state, activate) {
      if (state.state === c0(sharedValue[24]).State.BEGAN) {
        activate.activate();
        c0(sharedValue[20]).runOnJS(callback3)();
        const tmpResult = c0(sharedValue[20]);
      }
    };
    const manualActivationResult = Gesture.Pan().manualActivation(true);
    fn.__closure = { State: LegacyBaseButton.State, runOnJS: ReanimatedRexport.runOnJS, handleDragStart: callback3 };
    fn.__workletHash = 13866422602014;
    fn.__initData = __initData2;
    const obj = { State: LegacyBaseButton.State, runOnJS: ReanimatedRexport.runOnJS, handleDragStart: callback3 };
    const fn2 = function t() {
      c0(sharedValue[20]).runOnJS(callback1)();
    };
    const onTouchesMoveResult = manualActivationResult.onTouchesMove(fn);
    fn2.__closure = { runOnJS: ReanimatedRexport.runOnJS, handlePTTEnd: callback1 };
    fn2.__workletHash = 12941114426646;
    fn2.__initData = __initData;
    return onTouchesMoveResult.onFinalize(fn2);
  }, items4);
  const effect = obj.useEffect(() => () => callback1(), items5);
  let obj2 = require("ReanimatedRexport");
  const voicePanelButtonStyles = require("VoicePanelStyles").useVoicePanelButtonStyles(wrapperSpecs);
  const obj4 = { gesture: memo, children: null };
  const element = {
    onPressIn,
    onPressOut: callback2,
    props,
    pressed: sharedValue,
    accessibilityLabel: null,
    style: null,
    children: null,
  };
  const obj3 = require("VoicePanelStyles");
  const intl = require("util").intl;
  element.accessibilityLabel = intl.string(require("util").t.Q8gkVL);
  element.style = tmp5 ? voicePanelButtonStyles.iconBgSelected : voicePanelButtonStyles.iconBg;
  if (tmp5) {
    let color = voicePanelButtonStyles.iconFillSelected.color;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  const obj5 = { children: null };
  element.children = closure_13(require("MicrophoneIcon").MicrophoneIcon, { color, size: "lg" });
  obj4.children = closure_13(onPress2(sharedValue[26]), element);
  const items6 = [closure_13(require("LegacyBaseButton").GestureDetector, obj4)];
  const obj6 = { style: null, variant: "text-xxs/medium", children: null };
  const items7 = [tmp.text, voicePanelButtonStyles.iconFill];
  obj6.style = items7;
  const intl2 = tmp9(tmp3[27]).intl;
  obj6.children = intl2.string(require("util").t.Q8gkVL);
  items6[1] = closure_13(require("Text/Text").Text, obj6);
  obj5.children = items6;
  return closure_15(closure_14, obj5);
};
export const MicButton = ReactCompilerGating.isReactCompilerEnabled()
  ? function MicButton(props) {
      const cResult = c.c(13);
      props = props.props;
      ({ mute, onPress, dominantMuteState } = closure_18(noop.useContext(VoicePanelStateContextDefault).channelId));
      const tmp5 = closure_18(noop.useContext(VoicePanelStateContextDefault).channelId);
      const voicePanelButtonStyles = VoicePanelStyles.useVoicePanelButtonStyles(props.wrapperSpecs);
      if (dominantMuteState !== VoiceActionUtils.DominantMuteState.SERVER_MUTE) {
        if (mute) {
          let color = voicePanelButtonStyles.iconFillRed.color;
        } else {
          color = voicePanelButtonStyles.iconFill.color;
        }
        if (cResult[2] === mute) {
        }
        const obj3 = { color, muted: mute };
        const tmp12 = __initData2(VoicePanelRiveMicButton.VoicePanelRiveMicButton, obj3);
        cResult[2] = mute;
        cResult[3] = color;
        cResult[4] = tmp12;
      } else {
        if (cResult[0] !== voicePanelButtonStyles.iconFillRed.color) {
          const obj4 = { color: voicePanelButtonStyles.iconFillRed.color };
          const tmp9 = __initData2(MicrophoneDenyIcon.MicrophoneDenyIcon, obj4);
          cResult[0] = voicePanelButtonStyles.iconFillRed.color;
          cResult[1] = tmp9;
          let tmp7 = tmp9;
        } else {
          tmp7 = cResult[1];
        }
        if (cResult[5] !== mute) {
          const intl = util.intl;
          const string = intl.string;
          let YqAjXy = util.t;
          if (mute) {
            YqAjXy = YqAjXy.YqAjXy;
            let stringResult = string(YqAjXy);
          } else {
            stringResult = string(YqAjXy.w4m945);
          }
          cResult[5] = mute;
          cResult[6] = stringResult;
        } else {
          const tmp17 = mute ? voicePanelButtonStyles.iconBgVoiceMuted : voicePanelButtonStyles.iconBg;
          if (cResult[7] === tmp7) {
            if (cResult[8] === onPress) {
              if (cResult[9] === props) {
                if (cResult[10] === tmp14) {
                  if (cResult[11] === tmp17) {
                    let tmp18 = cResult[12];
                  }
                  return tmp18;
                }
              }
            }
          }
          const element = { props, onPress, accessibilityLabel: cResult[6], style: tmp17, children: tmp7 };
          const tmp20 = __initData2(VoicePanelAnimatedButtonWrapperDefault, element);
          cResult[7] = tmp7;
          cResult[8] = onPress;
          cResult[9] = props;
          cResult[10] = cResult[6];
          cResult[11] = tmp17;
          cResult[12] = tmp20;
          tmp18 = tmp20;
        }
      }
    }
  : function MicButton(arg0) {
      let dominantMuteState;
      let voicePanelButtonStyles;
      ({ props, wrapperSpecs } = arg0);
      const tmp = closure_18(noop.useContext(dominantMuteState(voicePanelButtonStyles[19])).channelId);
      const mute = tmp.mute;
      dominantMuteState = tmp.dominantMuteState;
      voicePanelButtonStyles = mute(voicePanelButtonStyles[25]).useVoicePanelButtonStyles(wrapperSpecs);
      const items = [voicePanelButtonStyles, mute, dominantMuteState];
      const memo = noop.useMemo(() => {
        if (dominantMuteState === VoiceActionUtils.DominantMuteState.SERVER_MUTE) {
          const obj2 = { color: voicePanelButtonStyles.iconFillRed.color };
          let tmp3Result = __initData2(MicrophoneDenyIcon.MicrophoneDenyIcon, obj2);
        } else {
          if (mute) {
            let color = voicePanelButtonStyles.iconFillRed.color;
          } else {
            color = voicePanelButtonStyles.iconFill.color;
          }
          const obj = { color, muted: mute };
          tmp3Result = __initData2(VoicePanelRiveMicButton.VoicePanelRiveMicButton, obj);
        }
        return tmp3Result;
      }, items);
      const element = { props, onPress: tmp.onPress, accessibilityLabel: null, style: null, children: null };
      let obj = mute(voicePanelButtonStyles[25]);
      const intl = mute(voicePanelButtonStyles[27]).intl;
      const string = intl.string;
      const t = mute(voicePanelButtonStyles[27]).t;
      if (mute) {
        let stringResult = string(t.YqAjXy);
      } else {
        stringResult = string(t.w4m945);
      }
      element.accessibilityLabel = stringResult;
      element.style = mute ? voicePanelButtonStyles.iconBgVoiceMuted : voicePanelButtonStyles.iconBg;
      element.children = memo;
      return closure_13(dominantMuteState(voicePanelButtonStyles[26]), element);
    };
