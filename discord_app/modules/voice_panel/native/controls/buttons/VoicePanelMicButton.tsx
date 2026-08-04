// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelMicButton.tsx
import _slicedToArray from "_slicedToArray";
import useControlsLock from "useControlsLock";
import set from "set";
import initialize from "initialize";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import mergeGuildAvatar from "mergeGuildAvatar";
import updateVoiceState from "updateVoiceState";
import jsxProd from "setPushToTalkState";
import createCacheKey from "createCacheKey";

let closure_14;
let closure_15;
let map1;
const require = arg1;
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = new require("initialize")("VoicePanelMicButton");
let closure_17 = createCacheKey.createStyles({ text: { position: "absolute", left: 0, right: 0, bottom: 4, textAlign: "center", opacity: 0.5 } });
let closure_18 = { code: "function VoicePanelMicButtonTsx1(){const{runOnJS,handlePTTEnd}=this.__closure;runOnJS(handlePTTEnd)();}" };
let closure_19 = { code: "function VoicePanelMicButtonTsx2(event,manager){const{State,runOnJS,handleDragStart}=this.__closure;if(event.state!==State.BEGAN)return;manager.activate();runOnJS(handleDragStart)();}" };
let tmp3 = new require("initialize")("VoicePanelMicButton");
let result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelMicButton.tsx");

export const PTTButton = function PTTButton(arg0) {
  let channelId;
  let mute;
  let onPress;
  let props;
  let tmp5;
  let wrapperSpecs;
  channelId = undefined;
  let onPress2;
  let sharedValue;
  let callback;
  let React;
  callback = undefined;
  let callback1;
  let callback3;
  ({ props, wrapperSpecs } = arg0);
  let obj = React;
  channelId = React.useContext(onPress2(sharedValue[17])).channelId;
  const tmp = callback2();
  [tmp5, channelId] = callback(React.useState(false), 2);
  onPress2 = undefined;
  onPress2 = React.useRef(null);
  let obj1 = channelId(sharedValue[13]);
  const items = [ensureGuildLoaded, callback3, updateVoiceState, _detectH265HardwareDecode, getUncachedChannelPermissions, callback1, callback];
  const items1 = [channelId];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => {
    const channel = outer1_8.getChannel(mute);
    if (null != channel) {
      const obj = { channel: null, authenticationStore: null, voiceStateStore: null, mediaEngineStore: null, permissionStore: null, impersonateStore: null };
      obj[0] = channel;
      obj[1] = outer1_7;
      obj[2] = outer1_12;
      obj[3] = outer1_9;
      obj[4] = outer1_10;
      obj[5] = outer1_6;
      let muteStates = mute(voicePanelButtonStyles[14]).getMuteStates(obj);
      const obj2 = mute(voicePanelButtonStyles[14]);
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
      const currentUser = outer1_11.getCurrentUser();
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
      outer1_16.info("Self mute changed", selfMute1, ">", muteStates.selfMute);
      const tmp14 = outer1_16;
    }
    dominantMuteState.current = muteStates;
    return mute(voicePanelButtonStyles[15]).createMuteHandler(muteStates, null != outer1_5.getAwaitingRemoteSessionInfo());
  }, items1);
  ({ mute, onPress } = stateFromStoresObject);
  let obj2 = channelId(sharedValue[13]);
  const items2 = [ensureGuildLoaded, callback3, updateVoiceState, _detectH265HardwareDecode, getUncachedChannelPermissions, callback1];
  const items3 = [channelId];
  const stateFromStoresObject1 = obj2.useStateFromStoresObject(items2, () => {
    const channel = outer1_8.getChannel(channelId);
    if (null != channel) {
      const obj2 = channelId(sharedValue[16]);
      let deafStates = obj2.getDeafStates(channel, outer1_12, outer1_9, callback3);
    } else {
      deafStates = { selfDeaf: false, deaf: false };
    }
    return channelId(sharedValue[15]).createDeafHandler(deafStates);
  }, items3);
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
  callback = tmp11;
  React = obj.useRef({ active: false, dragging: false });
  const items4 = [tmp11, sharedValue, onPress2];
  callback = obj.useCallback(() => {
    if (!useControlsLock.current.active) {
      if (onPress2 != null) {
        tmp2();
      }
      tmp.current.active = true;
      const result = channelId(sharedValue[20]).triggerHapticFeedback(channelId(sharedValue[20]).HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj = channelId(sharedValue[20]);
      channelId(sharedValue[21]).setPushToTalkState(true);
      _undefined.lock();
      const result1 = sharedValue.set(true);
      channelId(true);
      const obj2 = channelId(sharedValue[21]);
    }
  }, items4);
  const items5 = [tmp11, sharedValue];
  callback1 = obj.useCallback(() => {
    if (useControlsLock.current.active) {
      tmp.current.active = false;
      tmp.current.dragging = false;
      channelId(sharedValue[21]).setPushToTalkState(false);
      _undefined.unlock();
      const result = sharedValue.set(false);
      channelId(false);
      const obj = channelId(sharedValue[21]);
    }
  }, items5);
  const items6 = [callback1];
  const items7 = [callback];
  callback2 = obj.useCallback(() => {
    if (!useControlsLock.current.dragging) {
      callback1();
    }
  }, items6);
  callback3 = obj.useCallback(() => {
    if (!useControlsLock.current.dragging) {
      useControlsLock.current.dragging = true;
      callback();
    }
  }, items7);
  const items8 = [callback3, callback1];
  const items9 = [callback1];
  const memo = obj.useMemo(() => {
    const Gesture = channelId(sharedValue[22]).Gesture;
    const PanResult = Gesture.Pan();
    const fn = function n(state, activate) {
      if (state.state === outer1_0(outer1_2[22]).State.BEGAN) {
        activate.activate();
        outer1_0(outer1_2[18]).runOnJS(fetchFingerprint)();
        const tmpResult = outer1_0(outer1_2[18]);
      }
    };
    let obj = { State: channelId(sharedValue[22]).State, runOnJS: channelId(sharedValue[18]).runOnJS, handleDragStart: callback3 };
    fn.__closure = obj;
    fn.__workletHash = 13866422602014;
    fn.__initData = outer1_19;
    const manualActivationResult = Gesture.Pan().manualActivation(true);
    const fn2 = function t() {
      outer1_0(outer1_2[18]).runOnJS(initialize)();
    };
    obj = { runOnJS: channelId(sharedValue[18]).runOnJS, handlePTTEnd: callback1 };
    fn2.__closure = obj;
    fn2.__workletHash = 12941114426646;
    fn2.__initData = outer1_18;
    return Gesture.Pan().manualActivation(true).onTouchesMove(fn).onFinalize(fn2);
  }, items8);
  const effect = obj.useEffect(() => () => callback(), items9);
  tmp6Result = tmp6(tmp3[23]);
  const voicePanelButtonStyles = tmp6Result.useVoicePanelButtonStyles(wrapperSpecs);
  obj = { gesture: memo, children: null };
  obj = { onPressIn: callback, onPressOut: callback2, props, pressed: sharedValue, accessibilityLabel: null, style: null, children: null };
  const tmp19 = closure_15;
  const tmp20 = closure_14;
  const tmp4 = callback(React.useState(false), 2);
  const intl = tmp6(tmp3[25]).intl;
  obj[4] = intl.string(channelId(sharedValue[25]).t.Q8gkVL);
  obj[5] = tmp5 ? voicePanelButtonStyles.iconBgSelected : voicePanelButtonStyles.iconBg;
  if (tmp5) {
    let color = voicePanelButtonStyles.iconFillSelected.color;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  obj1 = { children: null };
  obj[6] = closure_13(channelId(sharedValue[26]).MicrophoneIcon, { color, size: "lg" });
  obj[1] = closure_13(onPress2(sharedValue[24]), obj);
  const items10 = [closure_13(channelId(sharedValue[22]).GestureDetector, obj), ];
  obj2 = { style: items11, variant: "text-xxs/medium", children: null };
  items11 = [tmp.text, voicePanelButtonStyles.iconFill];
  const intl2 = tmp6(tmp3[25]).intl;
  obj2[2] = intl2.string(channelId(sharedValue[25]).t.Q8gkVL);
  items10[1] = closure_13(channelId(sharedValue[27]).Text, obj2);
  obj1[0] = items10;
  return tmp19(tmp20, obj1);
};
export const MicButton = function MicButton(arg0) {
  let props;
  let wrapperSpecs;
  let mute;
  let dominantMuteState;
  let voicePanelButtonStyles;
  ({ props, wrapperSpecs } = arg0);
  const channelId = React.useContext(dominantMuteState(voicePanelButtonStyles[17])).channelId;
  mute = channelId;
  dominantMuteState = undefined;
  dominantMuteState = React.useRef(null);
  let obj = mute(voicePanelButtonStyles[13]);
  const items = [ensureGuildLoaded, fetchFingerprint, updateVoiceState, _detectH265HardwareDecode, getUncachedChannelPermissions, initialize, set];
  const items1 = [channelId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const channel = outer1_8.getChannel(mute);
    if (null != channel) {
      const obj = { channel: null, authenticationStore: null, voiceStateStore: null, mediaEngineStore: null, permissionStore: null, impersonateStore: null };
      obj[0] = channel;
      obj[1] = outer1_7;
      obj[2] = outer1_12;
      obj[3] = outer1_9;
      obj[4] = outer1_10;
      obj[5] = outer1_6;
      let muteStates = mute(voicePanelButtonStyles[14]).getMuteStates(obj);
      const obj2 = mute(voicePanelButtonStyles[14]);
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
      const currentUser = outer1_11.getCurrentUser();
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
      outer1_16.info("Self mute changed", selfMute1, ">", muteStates.selfMute);
      const tmp14 = outer1_16;
    }
    dominantMuteState.current = muteStates;
    return mute(voicePanelButtonStyles[15]).createMuteHandler(muteStates, null != outer1_5.getAwaitingRemoteSessionInfo());
  }, items1);
  mute = stateFromStoresObject.mute;
  dominantMuteState = stateFromStoresObject.dominantMuteState;
  voicePanelButtonStyles = mute(voicePanelButtonStyles[23]).useVoicePanelButtonStyles(wrapperSpecs);
  const items2 = [voicePanelButtonStyles, mute, dominantMuteState];
  const memo = React.useMemo(() => {
    if (dominantMuteState === mute(voicePanelButtonStyles[15]).DominantMuteState.SERVER_MUTE) {
      let obj = { color: null };
      obj[0] = voicePanelButtonStyles.iconFillRed.color;
      let tmp3Result = outer1_13(tmp(tmp2[28]).MicrophoneDenyIcon, obj);
    } else {
      if (mute) {
        let color = tmp5.iconFillRed.color;
      } else {
        color = tmp5.iconFill.color;
      }
      obj = { color: null, muted: null };
      obj[0] = color;
      obj[1] = mute;
      tmp3Result = outer1_13(tmp(tmp2[29]).VoicePanelRiveMicButton, obj);
      const tmp3 = outer1_13;
      const tmp4 = mute;
    }
    return tmp3Result;
  }, items2);
  obj = { props, onPress: stateFromStoresObject.onPress, accessibilityLabel: null, style: null, children: null };
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
  obj[2] = stringResult;
  obj[3] = mute ? voicePanelButtonStyles.iconBgVoiceMuted : voicePanelButtonStyles.iconBg;
  obj[4] = memo;
  return tmp4(dominantMuteState(voicePanelButtonStyles[24]), obj);
};