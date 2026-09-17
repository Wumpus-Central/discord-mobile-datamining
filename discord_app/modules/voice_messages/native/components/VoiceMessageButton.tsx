// === Module 12406: VoiceMessageButton ===

// Module 12406 (VoiceMessageButton)
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4376 */;
import RootNavigationRef from "RootNavigationRef" /* 4498 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6766 */;
import XSmallBoldIcon from "XSmallBoldIcon" /* 8109 */;
import isChannelFocused from "isChannelFocused" /* 10239 */;
import VoiceMessageUtils from "VoiceMessageUtils" /* 12407 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4330 */;
import PendingReplyStore from "PendingReplyStore" /* 7794 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import DraftStore from "DraftStore" /* 4981 */;

const require = globalThis.__r;

require = fn;
function VoiceMessageRecordingCancelledToastIcon() {
  const obj = { style: closure_27().icon, "aria-hidden": true, children: jsx(XSmallBoldIcon.XSmallBoldIcon, { color: nativeDefault.colors.WHITE, size: "xs" }) };
  return <timestampProducer style={closure_27().icon} aria-hidden>{jsx(XSmallBoldIcon.XSmallBoldIcon, { color: nativeDefault.colors.WHITE, size: "xs" })}</timestampProducer>;
}
function triggerHapticGuarded() {
  if (value2.getState().showRecordingOverlay) {
    VoiceMessageUtils.triggerHaptic();
  }
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, AppState: closure_7 } = get_ActivityIndicator);
const VoiceMessagesUIStore = fn(12111);
({ setIsVoiceMessageButtonMounted: closure_12, setIsUsingHoldGesture: map1, setVoiceMessageAnimationState: closure_14, showVoiceMessagesTooltip: closure_15, useVoiceMessagesUIStore: closure_16, setShowRecordingOverlay: closure_17, hideVoiceMessagesTooltip: closure_18 } = VoiceMessagesUIStore);
const VoiceMessageConstants = fn(12112);
({ VoiceMessageAnimationState: closure_19, VOICE_RECORDING_MIN_DURATION_MILLIS: closure_20 } = VoiceMessageConstants);
const Constants = fn(1074);
({ ComponentActions: closure_21, ComponentActionsKeyed: closure_22, MessageFlags: closure_23 } = Constants);
const MessageSendLocation = fn(4633).MessageSendLocation;
const NativePermissionTypes = fn(4850).NativePermissionTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let obj = { icon: { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.round, padding: nativeDefault.space.PX_4, marginLeft: nativeDefault.space.PX_4 } };
let closure_27 = createStyles.createStyles(obj);
const __initData = { code: "function VoiceMessageButtonTsx1(newValue){const{voiceMessageAnimationState,runOnJS,triggerHapticGuarded}=this.__closure;if(voiceMessageAnimationState.get()[1]===newValue)return;const prevValue=voiceMessageAnimationState.get()[1];voiceMessageAnimationState.set([prevValue,newValue]);runOnJS(triggerHapticGuarded)();}" };
let closure_31 = { code: "function VoiceMessageButtonTsx2(){const{runOnJS,handleFinalize}=this.__closure;runOnJS(handleFinalize)();}" };
let closure_32 = { code: "function VoiceMessageButtonTsx3(e){const{isGestureActiveValue,LOCK_THRESHOLD,cancelThresholdX,handleUpdateValue,VoiceMessageAnimationState}=this.__closure;if(!isGestureActiveValue.get())return;if(e.translationY<=-LOCK_THRESHOLD&&e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.LOCKING);}else if(e.absoluteX<cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.CANCELLING);}else if(e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.SENDING);}}" };
let closure_33 = { code: "function VoiceMessageButtonTsx4(e){const{isGestureActiveValue,runOnJS,setIsUsingHoldGesture,voiceMessageAnimationState,VoiceMessageAnimationState,startRecording}=this.__closure;if(e.numberOfTouches>1)return;if(isGestureActiveValue.get())return;runOnJS(setIsUsingHoldGesture)(true);voiceMessageAnimationState.set([VoiceMessageAnimationState.SENDING,VoiceMessageAnimationState.SENDING]);runOnJS(startRecording)();}" };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.round, padding: nativeDefault.space.PX_4, marginLeft: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageButton.tsx");

export default noop.memo((disabled) => {
  disabled = disabled.disabled;
  _require = disabled;
  const channelId = disabled.channelId;
  let first;
  noop = undefined;
  let callback2;
  let callback3;
  c14 = undefined;
  const tmp = closure_16((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
  dependencyMap = tmp;
  const sharedValue = require("ReanimatedRexport").useSharedValue(0);
  const ref = noop.useRef(false);
  _require = ref;
  let obj = require("ReanimatedRexport");
  const sharedValue1 = require("ReanimatedRexport").useSharedValue(false);
  let items = [ref, sharedValue1];
  const items1 = [
    ref,
    sharedValue1,
    noop.useCallback((current) => {
      closure_0.current = current;
      const result = sharedValue1.set(current);
    }, items)
  ];
  let tmp5 = first(items1, 3);
  first = tmp5[0];
  noop = tmp7;
  closure_6 = tmp8;
  currentState = noop.useRef(true);
  closure_8 = noop.useRef(currentState.currentState);
  closure_9 = noop.useRef(null);
  const tmp9 = sharedValue1(11677)();
  _require = sharedValue(function*(arg0) {
    yield closure_0(12407).endAudioRecording();
    closure_129_2 = value;
    const data = closure_129_2.data;
    const startTimeMillis = closure_129_2.startTimeMillis;
    closure_1_6(false);
    if (closure_129_0) {
      closure_1_9.current = closure_129_1;
      let result = closure_0(12407).emitVoiceMessageRecorded(closure_129_1, data.durationSecs, startTimeMillis);
    }
    if (data.durationSecs < closure_2_20 / 1000) {
      const result1 = closure_0(12407).emitVoiceMessageRecorded(closure_0(12025).VoiceMessageRecordingResult.CANCELLED_DURATION, data.durationSecs, startTimeMillis);
      __initData();
    }
    const result2 = closure_0(12407).emitVoiceMessageRecorded(closure_0(12025).VoiceMessageRecordingResult.SENT, data.durationSecs, startTimeMillis);
    const channel = callback.getChannel(closure_1);
    if (null != channel) {
      const cloudUpload = new closure_0(5214).CloudUpload({ uri: data.filename, originalUri: data.filename, mimeType: "audio/ogg", filename: "voice-message.ogg", platform: closure_0(5215).UploadPlatform.REACT_NATIVE, durationSecs: data.durationSecs, waveform: data.waveform }, channel.id);
      const items = [cloudUpload];
      closure_129_6 = items;
      const pendingReply2 = pendingReply.getPendingReply(closure_1);
      const sendMessageOptionsForReply = sharedValue1(7570).getSendMessageOptionsForReply(pendingReply2);
      { uri: data.filename, originalUri: data.filename, mimeType: "audio/ogg", filename: "voice-message.ogg", platform: closure_0(5215).UploadPlatform.REACT_NATIVE, durationSecs: data.durationSecs, waveform: data.waveform };
      const id = channel.id;
      const obj17 = { flags: constants3.IS_VOICE_MESSAGE, location: constants4.VOICE_MESSAGE, attachmentsToUpload: closure_129_6, scheduledTimestamp: null, onAttachmentUploadError: null };
      const scheduledMessage = callback1.getScheduledMessage(closure_1);
      let scheduledTimestamp;
      if (scheduledMessage != null) {
        scheduledTimestamp = scheduledMessage.scheduledTimestamp;
      }
      obj17.scheduledTimestamp = scheduledTimestamp;
      obj17.onAttachmentUploadError = function onAttachmentUploadError(file, code, reason) {
        const obj = closure_0(closure_2[27]);
        const result = obj.handleUploadMessageAttachmentsErrors({ file, guildId: guildId.getGuildId(), analyticsLocations: [], code, reason });
      };
      const merged = Object.assign(sendMessageOptionsForReply);
      sharedValue1(7570).sendMessage(id, { content: "", tts: false, invalidEmojis: [], validNonShortcutEmojis: [] }, undefined, obj17);
      sharedValue1(7570);
      closure_0(11819).deletePendingReply(closure_1);
      closure_0(11819);
      sharedValue1(7570);
    }
    yield "HermesInternal";
    closure_1 = tmp2;
    ({ isCancelling: closure_129_0, cancelReason } = closure_0);
    if (cancelReason === undefined) {
      cancelReason = closure_0(12025).VoiceMessageRecordingResult.CANCELLED_USER_REQUESTED;
    }
    closure_129_1 = cancelReason;
    return "PX_16";
  });
  const items2 = [channelId, tmp5[2]];
  const callback = noop.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  const items3 = [channelId, callback];
  const effect = noop.useEffect(() => {
    let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.subscribeKeyed(constants.VOICE_MESSAGE_SEND, sharedValue1, callback);
    return () => {
      const ComponentDispatch = closure_0(closure_2[29]).ComponentDispatch;
      ComponentDispatch.unsubscribeKeyed(constants2.VOICE_MESSAGE_SEND, sharedValue1, callback);
    };
  }, items3);
  const effect1 = noop.useEffect(() => {
    callback2(true);
    return () => {
      callback2(false);
    };
  }, []);
  const effect2 = noop.useEffect(() => {
    closure_0 = closure_7.addEventListener("change", (event) => {
      const current = ref.current;
      let tmp5 = "active" !== event;
      if (!tmp5) {
        let tmp6 = "inactive" !== current;
        if (tmp6) {
          tmp6 = "background" !== current;
        }
        tmp5 = tmp6;
      }
      if (!tmp5) {
        tmp5 = ref2.current !== closure_0(dependencyMap[23]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND;
      }
      if (!tmp5) {
        const obj2 = { key: "VOICE_MESSAGE_CANCELLED_ON_BACKGROUND", content: null, icon: null, position: "bottom" };
        const intl = closure_0(dependencyMap[31]).intl;
        obj2.content = intl.string(closure_0(dependencyMap[31]).t.JM7Y2D);
        obj2.icon = function icon() {
          return closure_1_26(closure_1_28, {});
        };
        sharedValue1(dependencyMap[30]).open(obj2);
        ref2.current = null;
        const obj = sharedValue1(dependencyMap[30]);
      }
      ref.current = event;
    });
    return () => {
      closure_0.remove();
    };
  }, []);
  const items4 = [first, tmp5[2]];
  const effect3 = noop.useEffect(() => {
    closure_7.current = true;
    const current = first.current;
    return () => {
      closure_7.current = false;
      const state = value2.getState();
      let showRecordingOverlay = state.showRecordingOverlay;
      if (!showRecordingOverlay) {
        showRecordingOverlay = null != state.recordingStatus;
      }
      if (!showRecordingOverlay) {
        showRecordingOverlay = current;
      }
      if (showRecordingOverlay) {
        closure_6(false);
        VoiceMessageUtils.endAudioRecording();
      }
    };
  }, items4);
  let obj2 = require("ReanimatedRexport");
  const items5 = [first, tmp5[2], channelId];
  const isModalOpen = require("NavigationRouteUtils").useIsModalOpen();
  const effect4 = noop.useEffect(() => {
    function cancel() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    closure_1 = async function _cancel() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = tmp2;
              closure_0 = tmp5;
              closure_128_0 = undefined;
              state = state.getState();
              if (!state.showRecordingOverlay) {
                if (null == state.recordingStatus) {
                  if (!ref.current) {
                    c3 = 3;
                  }
                }
              }
              closure_1_6(false);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: cancel(12407).endAudioRecording(), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_0 = value;
            const result = cancel(12407).emitVoiceMessageRecorded(cancel(12025).VoiceMessageRecordingResult.CANCELLED_GESTURE_CONFLICT, closure_128_0.data.durationSecs, closure_128_0.startTimeMillis);
            const obj = cancel(12407);
          }
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } catch (tmp21) {
          c3 = tmp;
          throw tmp21;
        }
      }
    };
    function handleActionSheetChange() {
      if (ActionSheetStore.isOpen()) {
        cancel();
      }
    }
    function handleNavigationChange() {
      const focusedChannelId = isChannelFocused.getFocusedChannelId();
      if (null != focusedChannelId) {
        if (focusedChannelId !== sharedValue1) {
          cancel();
        }
      } else {
        cancel();
      }
    }
    cancel();
    let result = closure_8.addReactChangeListener(handleActionSheetChange);
    let rootNavigationRef = closure_0(voiceMessageAnimationState[33]).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.addListener("state", handleNavigationChange);
    }
    return () => {
      const result = ActionSheetStore.removeReactChangeListener(handleActionSheetChange);
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      if (rootNavigationRef != null) {
        rootNavigationRef.removeListener("state", handleNavigationChange);
      }
    };
  }, items5);
  const items6 = [sharedValue, isModalOpen];
  const effect5 = noop.useEffect(() => {
    closure_2_14({ currWaveHeight: sharedValue });
  }, items6);
  const items7 = [first, tmp5[2], channelId];
  const callback1 = noop.useCallback(sharedValue(function*() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_0 = tmp7;
            closure_128_0 = undefined;
            let state2;
            if (!(function isNormalModalOpen() {
              if (obj.isModalOpen()) {
                const openModalKey = closure_1_0(dependencyMap[17]).getOpenModalKey();
                let tmp5 = null == openModalKey;
                if (!tmp5) {
                  tmp5 = !closure_1_0(dependencyMap[18]).isVoiceChannelModalKey(openModalKey);
                  const tmpResult2 = closure_1_0(dependencyMap[18]);
                }
                return tmp5;
              } else {
                return false;
              }
              obj = closure_1_0(dependencyMap[17]);
            })()) {
              if (ref.current) {
                if (!open.isOpen()) {
                  if (null != channel.getChannel(sharedValue1)) {
                    closure_6(true);
                    const ComponentDispatch = closure_0(tmp54[29]).ComponentDispatch;
                    ComponentDispatch.dispatch(constants2.VOICE_MESSAGE_BUTTON_PRESSED);
                    c4 = 2;
                    c5 = 1;
                    const obj6 = { value: tmp3(tmp54[34]).requestPermission(constants3.AUDIO), done: false };
                    return obj6;
                  }
                }
              }
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_129_6(false);
          const result = closure_0(tmp54[35]).showVoiceRecordingFailed();
          c5 = 3;
          const obj8 = { value: undefined, done: true };
          return obj8;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else if (value) {
            if (closure_129_4.current) {
              closure_1_18();
              const _performance = performance;
              closure_128_0 = performance.now();
              closure_1_17(true);
              c3 = 1;
              c4 = 3;
              c5 = 1;
              const obj11 = { value: closure_0(tmp54[19]).startAudioRecording(closure_128_0), done: false };
              return obj11;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          c3 = 0;
          state2 = state.getState();
          if (state2.recordingId === closure_128_0) {
            voiceMessageAnimationState = state2.voiceMessageAnimationState;
            let tmp8;
            if (voiceMessageAnimationState != null) {
              tmp8 = voiceMessageAnimationState.get()[1];
            }
            if (tmp8 !== constants.LOCKED) {
              if (!closure_129_4.current) {
                closure_0(tmp54[19]).endAudioRecording();
                let obj = closure_0(tmp54[19]);
              }
            }
          }
          closure_0(tmp54[19]).triggerHaptic();
          const obj2 = closure_0(tmp54[19]);
        }
        c5 = 3;
      } catch (tmp54) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp54;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items7);
  class W {
    constructor(arg0) {
      obj = closure_2;
      if (closure_2.get()[1] !== disabled) {
        items = [, ];
        items[0] = obj.get()[1];
        items[1] = disabled;
        result = obj.set(items);
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj2 = closure_0(closure_2[20]);
        tmp4 = triggerHapticGuarded;
        tmp5 = obj2.runOnJS(triggerHapticGuarded)();
      }
      return;
    }
  }
  let obj3 = require("NavigationRouteUtils");
  W.__closure = { voiceMessageAnimationState: tmp, runOnJS: require("ReanimatedRexport").runOnJS, triggerHapticGuarded };
  W.__workletHash = 9127775028714;
  W.__initData = __initData;
  const items8 = [tmp];
  callback2 = noop.useCallback(W, items8);
  const items9 = [tmp, first, callback, tmp5[2]];
  callback3 = noop.useCallback(() => {
    if (first.current) {
      closure_6(false);
      const tmp6 = voiceMessageAnimationState.get()[1];
      if (VoiceMessageAnimationState.SENDING === tmp6) {
        callback({ isCancelling: false });
      } else if (VoiceMessageAnimationState.CANCELLING === tmp6) {
        callback({ isCancelling: true });
      } else if (VoiceMessageAnimationState.LOCKING === tmp6) {
        setIsUsingHoldGesture(false);
        const items = [, ];
        ({ LOCKING: arr[0], LOCKED: arr[1] } = VoiceMessageAnimationState);
        const result = voiceMessageAnimationState.set(items);
        ReanimatedRexport.runOnJS(triggerHapticGuarded)();
      } else {
        VoiceMessageUtils.endAudioRecording();
      }
    } else {
      VoiceMessageUtils.endAudioRecording();
    }
  }, items9);
  let obj4 = { voiceMessageAnimationState: tmp, runOnJS: require("ReanimatedRexport").runOnJS, triggerHapticGuarded };
  const tmp21 = sharedValue1(9910);
  let intl = require("util").intl;
  const tmp22 = sharedValue(function*() {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp4;
            c1 = 1;
            c2 = 1;
            const obj4 = { value: callback1(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          callback3(false);
          const items = [, ];
          ({ LOCKED: arr[0], LOCKED: arr[1] } = constants);
          const result = closure_128_2.set(items);
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        c2 = tmp;
        throw tmp12;
      }
    }
  });
  const sum = 0.5 * tmp9 + (sharedValue1(1478)().width - tmp9);
  c14 = sum;
  const items10 = [disabled, tmp5[1], tmp, callback1, sum, callback2, callback3];
  ({ accessibilityActions, onAccessibilityAction } = tmp21(sharedValue(function*() {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp4;
            c1 = 1;
            c2 = 1;
            const obj4 = { value: callback1(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          callback3(false);
          const items = [, ];
          ({ LOCKED: arr[0], LOCKED: arr[1] } = constants);
          const result = closure_128_2.set(items);
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        c2 = tmp;
        throw tmp12;
      }
    }
  }), intl.string(require("util").t.lwy6aX)));
  const memo = noop.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(!closure_0);
    const fn = function n(numberOfTouches) {
      value = numberOfTouches.numberOfTouches > 1;
      if (!value) {
        value = isGestureActiveValue.get();
      }
      if (!value) {
        closure_0(dependencyMap[20]).runOnJS(callback3)(true);
        const items = [, ];
        ({ SENDING: arr[0], SENDING: arr[1] } = constants);
        const result = voiceMessageAnimationState.set(items);
        const obj = closure_0(dependencyMap[20]);
        closure_0(dependencyMap[20]).runOnJS(callback1)();
        const obj2 = closure_0(dependencyMap[20]);
      }
    };
    const minDistanceResult = Gesture.Pan().enabled(!closure_0).minDistance(0);
    fn.__closure = { isGestureActiveValue, runOnJS: ReanimatedRexport.runOnJS, setIsUsingHoldGesture, voiceMessageAnimationState, VoiceMessageAnimationState, startRecording: callback1 };
    fn.__workletHash = 15771181123252;
    fn.__initData = __initData3;
    let obj = { isGestureActiveValue, runOnJS: ReanimatedRexport.runOnJS, setIsUsingHoldGesture, voiceMessageAnimationState, VoiceMessageAnimationState, startRecording: callback1 };
    const fn2 = function t(translationY) {
      if (isGestureActiveValue.get()) {
        if (translationY.translationY <= -40) {
          if (translationY.absoluteX >= cancelThresholdX) {
            callback2(constants.LOCKING);
          }
        }
        if (translationY.absoluteX < cancelThresholdX) {
          callback2(constants.CANCELLING);
        } else if (translationY.absoluteX >= tmp3) {
          callback2(constants.SENDING);
        }
      }
    };
    fn2.__closure = { isGestureActiveValue, LOCK_THRESHOLD: 40, cancelThresholdX, handleUpdateValue: callback2, VoiceMessageAnimationState };
    fn2.__workletHash = 9262214665783;
    fn2.__initData = __initData2;
    let obj2 = { isGestureActiveValue, LOCK_THRESHOLD: 40, cancelThresholdX, handleUpdateValue: callback2, VoiceMessageAnimationState };
    const onTouchesDownResult = minDistanceResult.onTouchesDown(fn);
    const fn3 = function e() {
      closure_0(dependencyMap[20]).runOnJS(callback3)();
    };
    const onUpdateResult = minDistanceResult.onTouchesDown(fn).onUpdate(fn2);
    fn3.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleFinalize: callback3 };
    fn3.__workletHash = 2411654680943;
    fn3.__initData = __initData;
    return onUpdateResult.onFinalize(fn3);
  }, items10);
  let obj5 = { gesture: memo, children: null };
  let obj6 = { ref: sharedValue1(12409)().tooltipTargetRef, IconComponent: null, active: false, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null, disabled: null };
  const tmp21Result = tmp21(sharedValue(function*() {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp4;
            c1 = 1;
            c2 = 1;
            const obj4 = { value: callback1(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          callback3(false);
          const items = [, ];
          ({ LOCKED: arr[0], LOCKED: arr[1] } = constants);
          const result = closure_128_2.set(items);
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        c2 = tmp;
        throw tmp12;
      }
    }
  }), intl.string(require("util").t.lwy6aX));
  obj6.IconComponent = require("MicrophoneIcon").MicrophoneIcon;
  const intl2 = require("util").intl;
  obj6.accessibilityLabel = intl2.string(require("util").t.lwy6aX);
  obj6.accessibilityActions = accessibilityActions;
  obj6.onAccessibilityAction = onAccessibilityAction;
  obj6.disabled = disabled;
  obj5.children = jsx(sharedValue1(12390), { ref: sharedValue1(12409)().tooltipTargetRef, IconComponent: null, active: false, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null, disabled: null });
  return jsx(require("LegacyBaseButton").GestureDetector, { gesture: memo, children: null });
});