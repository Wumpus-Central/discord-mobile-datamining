// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelMicButton.tsx
import LoggerDefault from "../../../../debug/Logger.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import HapticUtils from "../../../../haptics/HapticUtils.native.tsx";
import LegacyBaseButton from "../../../../../../_runtime/06655_LegacyBaseButton.js";
import useMuteStates from "../../../../video_calls/useMuteStates.tsx";
import MediaEngineActionCreators from "../../../../media_engine/MediaEngineActionCreators.tsx";
import VoiceActionUtils from "../../../../video_calls/native/VoiceActionUtils.tsx";
import useDeafStates from "../../../../video_calls/useDeafStates.tsx";
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

require = fn;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = new LoggerDefault("VoicePanelMicButton");
const createStyles = fn(4560);
let closure_17 = createStyles.createStyles({
  text: { position: "absolute", left: 0, right: 0, bottom: 4, textAlign: "center", opacity: 0.5 },
});
let closure_18 = {
  code: "function VoicePanelMicButtonTsx1(){const{runOnJS,handlePTTEnd}=this.__closure;runOnJS(handlePTTEnd)();}",
};
let closure_19 = {
  code: "function VoicePanelMicButtonTsx2(event,manager){const{State,runOnJS,handleDragStart}=this.__closure;if(event.state!==State.BEGAN)return;manager.activate();runOnJS(handleDragStart)();}",
};
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
  let obj = noop;
  const channelId = noop.useContext(onPress2(sharedValue[17])).channelId;
  const tmp = closure_17();
  [tmp5, c0] = _slicedToArray(noop.useState(false), 2);
  closure_129_0 = channelId;
  closure_129_1 = noop.useRef(null);
  let obj1 = require("initialize");
  const items = [ChannelStore, callback3, VoiceStateStore, MediaEngineStore, PermissionStore, callback1, onPressIn];
  const items1 = [channelId];
  const stateFromStoresObject = obj1.useStateFromStoresObject(
    items,
    () => {
      const channel = ChannelStore.getChannel(mute);
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
      const current = dominantMuteState.current;
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
        const current2 = tmp9.current;
        let selfMute1;
        if (current2 != null) {
          selfMute1 = current2.selfMute;
        }
        logger.info("Self mute changed", selfMute1, ">", muteStates.selfMute);
      }
      dominantMuteState.current = muteStates;
      return VoiceActionUtils.createMuteHandler(muteStates, null != GameConsoleStore.getAwaitingRemoteSessionInfo());
    },
    items1,
  );
  closure_130_0 = channelId;
  ({ mute, onPress } = stateFromStoresObject);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  const items2 = [ChannelStore, callback3, VoiceStateStore, MediaEngineStore, PermissionStore, callback1];
  const items3 = [channelId];
  const stateFromStoresObject1 = require("initialize").useStateFromStoresObject(
    items2,
    () => {
      const channel = ChannelStore.getChannel(c0);
      if (null != channel) {
        const obj2 = useDeafStates;
        let deafStates = obj2.getDeafStates(channel, VoiceStateStore, MediaEngineStore, AuthenticationStore);
      } else {
        deafStates = { selfDeaf: false, deaf: false };
      }
      return VoiceActionUtils.createDeafHandler(deafStates);
    },
    items3,
  );
  onPress2 = stateFromStoresObject1.onPress;
  if (!stateFromStoresObject1.deaf) {
    let tmp9;
    if (mute) {
      tmp9 = onPress;
    }
    onPress2 = tmp9;
  }
  let tmp6Result = tmp6(tmp3[18]);
  sharedValue = tmp6Result.useSharedValue(false);
  const tmp11 = onPress2(sharedValue[19])();
  _slicedToArray = tmp11;
  noop = obj.useRef({ active: false, dragging: false });
  const items4 = [tmp11, sharedValue, onPress2];
  onPressIn = obj.useCallback(() => {
    if (!closure_4.current.active) {
      if (onPress2 != null) {
        tmp2();
      }
      tmp.current.active = true;
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      MediaEngineActionCreators.setPushToTalkState(true);
      closure_3.lock();
      const result1 = sharedValue.set(true);
      _undefined(true);
    }
  }, items4);
  const items5 = [tmp11, sharedValue];
  callback1 = obj.useCallback(() => {
    if (closure_4.current.active) {
      tmp.current.active = false;
      tmp.current.dragging = false;
      MediaEngineActionCreators.setPushToTalkState(false);
      closure_3.unlock();
      const result = sharedValue.set(false);
      _undefined(false);
    }
  }, items5);
  const items6 = [callback1];
  const items7 = [onPressIn];
  const callback2 = obj.useCallback(() => {
    if (!closure_4.current.dragging) {
      callback1();
    }
  }, items6);
  callback3 = obj.useCallback(() => {
    if (!closure_4.current.dragging) {
      closure_4.current.dragging = true;
      callback();
    }
  }, items7);
  const items8 = [callback3, callback1];
  const items9 = [callback1];
  const memo = obj.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const fn = function n(state, activate) {
      if (state.state === c0(sharedValue[22]).State.BEGAN) {
        activate.activate();
        c0(sharedValue[18]).runOnJS(callback3)();
        const tmpResult = c0(sharedValue[18]);
      }
    };
    let obj = { State: LegacyBaseButton.State, runOnJS: ReanimatedRexport.runOnJS, handleDragStart: callback3 };
    fn.__closure = obj;
    fn.__workletHash = 13866422602014;
    fn.__initData = __initData2;
    const manualActivationResult = Gesture.Pan().manualActivation(true);
    const fn2 = function t() {
      c0(sharedValue[18]).runOnJS(callback1)();
    };
    obj = { runOnJS: ReanimatedRexport.runOnJS, handlePTTEnd: callback1 };
    fn2.__closure = obj;
    fn2.__workletHash = 12941114426646;
    fn2.__initData = __initData;
    return Gesture.Pan().manualActivation(true).onTouchesMove(fn).onFinalize(fn2);
  }, items8);
  const effect = obj.useEffect(() => () => callback1(), items9);
  tmp6Result = tmp6(tmp3[23]);
  const voicePanelButtonStyles = tmp6Result.useVoicePanelButtonStyles(wrapperSpecs);
  obj = { gesture: memo, children: null };
  const element = {
    onPressIn,
    onPressOut: callback2,
    props,
    pressed: sharedValue,
    accessibilityLabel: null,
    style: null,
    children: null,
  };
  const obj3 = require("initialize");
  const tmp19 = closure_15;
  const tmp20 = closure_14;
  const intl = tmp6(tmp3[25]).intl;
  element.accessibilityLabel = intl.string(require("util").t.Q8gkVL);
  element.style = tmp5 ? voicePanelButtonStyles.iconBgSelected : voicePanelButtonStyles.iconBg;
  if (tmp5) {
    let color = voicePanelButtonStyles.iconFillSelected.color;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  obj = { children: null };
  element.children = closure_13(require("MicrophoneIcon").MicrophoneIcon, { color, size: "lg" });
  obj.children = closure_13(onPress2(sharedValue[24]), element);
  const items10 = [closure_13(require("LegacyBaseButton").GestureDetector, obj)];
  obj1 = { style: null, variant: "text-xxs/medium", children: null };
  const items11 = [tmp.text, voicePanelButtonStyles.iconFill];
  obj1.style = items11;
  const intl2 = tmp6(tmp3[25]).intl;
  obj1.children = intl2.string(require("util").t.Q8gkVL);
  items10[1] = closure_13(require("Text/Text").Text, obj1);
  obj.children = items10;
  return tmp19(tmp20, obj);
};
export const MicButton = function MicButton(arg0) {
  let mute;
  let dominantMuteState;
  let voicePanelButtonStyles;
  ({ props, wrapperSpecs } = arg0);
  const channelId = noop.useContext(dominantMuteState(voicePanelButtonStyles[17])).channelId;
  closure_129_0 = channelId;
  closure_129_1 = noop.useRef(null);
  const items = [
    ChannelStore,
    AuthenticationStore,
    VoiceStateStore,
    MediaEngineStore,
    PermissionStore,
    ImpersonateStore,
    GameConsoleStore,
  ];
  const items1 = [channelId];
  const stateFromStoresObject = mute(voicePanelButtonStyles[13]).useStateFromStoresObject(
    items,
    () => {
      const channel = ChannelStore.getChannel(mute);
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
      const current = dominantMuteState.current;
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
        const current2 = tmp9.current;
        let selfMute1;
        if (current2 != null) {
          selfMute1 = current2.selfMute;
        }
        logger.info("Self mute changed", selfMute1, ">", muteStates.selfMute);
      }
      dominantMuteState.current = muteStates;
      return VoiceActionUtils.createMuteHandler(muteStates, null != GameConsoleStore.getAwaitingRemoteSessionInfo());
    },
    items1,
  );
  mute = stateFromStoresObject.mute;
  dominantMuteState = stateFromStoresObject.dominantMuteState;
  let obj = mute(voicePanelButtonStyles[13]);
  voicePanelButtonStyles = mute(voicePanelButtonStyles[23]).useVoicePanelButtonStyles(wrapperSpecs);
  const items2 = [voicePanelButtonStyles, mute, dominantMuteState];
  const memo = noop.useMemo(() => {
    if (dominantMuteState === VoiceActionUtils.DominantMuteState.SERVER_MUTE) {
      let obj = { color: voicePanelButtonStyles.iconFillRed.color };
      let tmp3Result = map1(tmp(9125).MicrophoneDenyIcon, obj);
    } else {
      if (mute) {
        let color = tmp5.iconFillRed.color;
      } else {
        color = tmp5.iconFill.color;
      }
      obj = { color, muted: mute };
      tmp3Result = map1(tmp(10004).VoicePanelRiveMicButton, obj);
    }
    return tmp3Result;
  }, items2);
  const element = {
    props,
    onPress: stateFromStoresObject.onPress,
    accessibilityLabel: null,
    style: null,
    children: null,
  };
  let obj2 = mute(voicePanelButtonStyles[23]);
  let tmp4 = closure_13;
  const intl = mute(voicePanelButtonStyles[25]).intl;
  const string = intl.string;
  const t = mute(voicePanelButtonStyles[25]).t;
  if (mute) {
    let stringResult = string(t.YqAjXy);
  } else {
    stringResult = string(t.w4m945);
  }
  element.accessibilityLabel = stringResult;
  element.style = mute ? voicePanelButtonStyles.iconBgVoiceMuted : voicePanelButtonStyles.iconBg;
  element.children = memo;
  return tmp4(dominantMuteState(voicePanelButtonStyles[24]), element);
};
