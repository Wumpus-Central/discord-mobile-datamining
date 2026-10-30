// discord_app/modules/voice_messages/native/components/VoiceMessageButton.tsx
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import RootNavigationRef from "../../../main_tabs_v2/RootNavigationRef.native.tsx";
import LegacyBaseButton from "../../../../../_runtime/05298_LegacyBaseButton.js";
import isChannelFocused from "../../../panels/isChannelFocused.native.tsx";
import VoiceMessageUtils from "../VoiceMessageUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ActionSheetStore from "../../../action_sheet/native/ActionSheetStore.tsx";
import PendingReplyStore from "../../../replies/PendingReplyStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import DraftStore from "../../../../stores/DraftStore.tsx";

const require = globalThis.__r;

require = fn;
function triggerHapticGuarded() {
  if (__initData.getState().showRecordingOverlay) {
    VoiceMessageUtils.triggerHaptic();
  }
}
let AppState = fn(17).AppState;
const VoiceMessagesUIStore = fn(13675);
({ setIsVoiceMessageButtonMounted: closure_11, setIsUsingHoldGesture: closure_12, setVoiceMessageAnimationState: map1, showVoiceMessagesTooltip: closure_14, useVoiceMessagesUIStore: closure_15, setShowRecordingOverlay: closure_16, hideVoiceMessagesTooltip: closure_17 } = VoiceMessagesUIStore);
const VoiceMessageConstants = fn(13676);
({ VoiceMessageAnimationState: closure_18, VOICE_RECORDING_MIN_DURATION_MILLIS: closure_19 } = VoiceMessageConstants);
const Constants = fn(1072);
({ ComponentActions: closure_20, ComponentActionsKeyed: closure_21, MessageFlags: closure_22 } = Constants);
const MessageSendLocation = fn(5014).MessageSendLocation;
const NativePermissionTypes = fn(7932).NativePermissionTypes;
const jsx = fn(21).jsx;
const __initData = { code: "function VoiceMessageButtonTsx1(newValue){const{voiceMessageAnimationState,runOnJS,triggerHapticGuarded}=this.__closure;if(voiceMessageAnimationState.get()[1]===newValue)return;const prevValue=voiceMessageAnimationState.get()[1];voiceMessageAnimationState.set([prevValue,newValue]);runOnJS(triggerHapticGuarded)();}" };
let closure_28 = { code: "function VoiceMessageButtonTsx2(){const{runOnJS,handleFinalize}=this.__closure;runOnJS(handleFinalize)();}" };
let closure_29 = { code: "function VoiceMessageButtonTsx3(e){const{isGestureActiveValue,LOCK_THRESHOLD,cancelThresholdX,handleUpdateValue,VoiceMessageAnimationState}=this.__closure;if(!isGestureActiveValue.get())return;if(e.translationY<=-LOCK_THRESHOLD&&e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.LOCKING);}else if(e.absoluteX<cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.CANCELLING);}else if(e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.SENDING);}}" };
let closure_30 = { code: "function VoiceMessageButtonTsx4(e){const{isGestureActiveValue,runOnJS,setIsUsingHoldGesture,voiceMessageAnimationState,VoiceMessageAnimationState,startRecording}=this.__closure;if(e.numberOfTouches>1)return;if(isGestureActiveValue.get())return;runOnJS(setIsUsingHoldGesture)(true);voiceMessageAnimationState.set([VoiceMessageAnimationState.SENDING,VoiceMessageAnimationState.SENDING]);runOnJS(startRecording)();}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageButton.tsx");

export default noop.memo(function VoiceMessageButton(disabled) {
  disabled = disabled.disabled;
  _require = disabled;
  const channelId = disabled.channelId;
  let first;
  noop = undefined;
  const tmp = closure_15((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
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
  AppState = tmp8;
  closure_7 = noop.useRef(true);
  closure_8 = noop.useRef(AppState.currentState);
  closure_9 = noop.useRef(null);
  const tmp9 = sharedValue1(11520)();
  _require = sharedValue(function*(arg0) {
    yield closure_0(13764).endAudioRecording();
    closure_129_2 = value;
    const data = closure_129_2.data;
    const startTimeMillis = closure_129_2.startTimeMillis;
    closure_1_6(false);
    if (closure_129_0) {
      closure_1_9.current = closure_129_1;
      let result = closure_0(13764).emitVoiceMessageRecorded(closure_129_1, data.durationSecs, startTimeMillis);
    }
    if (data.durationSecs < closure_2_19 / 1000) {
      const result1 = closure_0(13764).emitVoiceMessageRecorded(closure_0(13252).VoiceMessageRecordingResult.CANCELLED_DURATION, data.durationSecs, startTimeMillis);
      cancelThresholdX();
    }
    const result2 = closure_0(13764).emitVoiceMessageRecorded(closure_0(13252).VoiceMessageRecordingResult.SENT, data.durationSecs, startTimeMillis);
    const channel2 = channel.getChannel(closure_1);
    if (null != channel2) {
      const cloudUpload = new closure_0(8201).CloudUpload({ uri: data.filename, originalUri: data.filename, mimeType: "audio/ogg", filename: "voice-message.ogg", platform: closure_0(8203).UploadPlatform.REACT_NATIVE, durationSecs: data.durationSecs, waveform: data.waveform }, channel2.id);
      const items = [cloudUpload];
      closure_129_6 = items;
      const pendingReply2 = pendingReply.getPendingReply(closure_1);
      const sendMessageOptionsForReply = sharedValue1(7629).getSendMessageOptionsForReply(pendingReply2);
      { uri: data.filename, originalUri: data.filename, mimeType: "audio/ogg", filename: "voice-message.ogg", platform: closure_0(8203).UploadPlatform.REACT_NATIVE, durationSecs: data.durationSecs, waveform: data.waveform };
      const id = channel2.id;
      const obj17 = { flags: constants3.IS_VOICE_MESSAGE, location: constants4.VOICE_MESSAGE, attachmentsToUpload: closure_129_6, scheduledTimestamp: null, onAttachmentUploadError: null };
      const scheduledMessage = callback.getScheduledMessage(closure_1);
      let scheduledTimestamp;
      if (scheduledMessage != null) {
        scheduledTimestamp = scheduledMessage.scheduledTimestamp;
      }
      obj17.scheduledTimestamp = scheduledTimestamp;
      obj17.onAttachmentUploadError = function onAttachmentUploadError(file, code, reason) {
        const obj = closure_0(closure_2[24]);
        const result = obj.handleUploadMessageAttachmentsErrors({ file, guildId: guildId.getGuildId(), analyticsLocations: [], code, reason });
      };
      const merged = Object.assign(sendMessageOptionsForReply);
      sharedValue1(7629).sendMessage(id, { content: "", tts: false, invalidEmojis: [], validNonShortcutEmojis: [] }, undefined, obj17);
      sharedValue1(7629);
      closure_0(10181).deletePendingReply(closure_1);
      closure_0(10181);
      sharedValue1(7629);
    }
    yield "HermesInternal";
    closure_1 = tmp2;
    ({ isCancelling: closure_129_0, cancelReason } = closure_0);
    if (cancelReason === undefined) {
      cancelReason = closure_0(13252).VoiceMessageRecordingResult.CANCELLED_USER_REQUESTED;
    }
    closure_129_1 = cancelReason;
    return "flexDirection";
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
      const ComponentDispatch = closure_0(closure_2[26]).ComponentDispatch;
      ComponentDispatch.unsubscribeKeyed(constants2.VOICE_MESSAGE_SEND, sharedValue1, callback);
    };
  }, items3);
  const effect1 = noop.useEffect(() => {
    callback1(true);
    return () => {
      callback1(false);
    };
  }, []);
  const effect2 = noop.useEffect(() => {
    closure_0 = closure_6.addEventListener("change", function handleVoiceMessageRecordingCancelled(event) {
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
        tmp5 = ref2.current !== closure_0(dependencyMap[20]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND;
      }
      if (!tmp5) {
        const obj2 = { text: null, variant: "critical", position: "bottom" };
        const intl = closure_0(dependencyMap[28]).intl;
        obj2.text = intl.string(closure_0(dependencyMap[28]).t.JM7Y2D);
        sharedValue1(dependencyMap[27]).open("VOICE_MESSAGE_CANCELLED_ON_BACKGROUND", obj2);
        ref2.current = null;
        const obj = sharedValue1(dependencyMap[27]);
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
      const state = __initData.getState();
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
              const obj5 = { value: cancel(13764).endAudioRecording(), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_0 = value;
            const result = cancel(13764).emitVoiceMessageRecorded(cancel(13252).VoiceMessageRecordingResult.CANCELLED_GESTURE_CONFLICT, closure_128_0.data.durationSecs, closure_128_0.startTimeMillis);
            const obj = cancel(13764);
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
    let result = closure_7.addReactChangeListener(handleActionSheetChange);
    let rootNavigationRef = closure_0(voiceMessageAnimationState[30]).getRootNavigationRef();
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
    map1({ currWaveHeight: sharedValue });
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
                const openModalKey = closure_1_0(dependencyMap[14]).getOpenModalKey();
                let tmp5 = null == openModalKey;
                if (!tmp5) {
                  tmp5 = !closure_1_0(dependencyMap[15]).isVoiceChannelModalKey(openModalKey);
                  const tmpResult2 = closure_1_0(dependencyMap[15]);
                }
                return tmp5;
              } else {
                return false;
              }
              obj = closure_1_0(dependencyMap[14]);
            })()) {
              if (ref.current) {
                if (!ref.isOpen()) {
                  if (null != channel.getChannel(sharedValue1)) {
                    closure_6(true);
                    const ComponentDispatch = closure_0(tmp54[26]).ComponentDispatch;
                    ComponentDispatch.dispatch(constants2.VOICE_MESSAGE_BUTTON_PRESSED);
                    c4 = 2;
                    c5 = 1;
                    const obj6 = { value: tmp3(tmp54[31]).requestPermission(constants3.AUDIO), done: false };
                    return obj6;
                  }
                }
              }
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_129_6(false);
          const result = closure_0(tmp54[32]).showVoiceRecordingFailed();
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
              closure_1_17();
              const _performance = performance;
              closure_128_0 = performance.now();
              closure_1_16(true);
              c3 = 1;
              c4 = 3;
              c5 = 1;
              const obj11 = { value: closure_0(tmp54[16]).startAudioRecording(closure_128_0), done: false };
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
                closure_0(tmp54[16]).endAudioRecording();
                let obj = closure_0(tmp54[16]);
              }
            }
          }
          closure_0(tmp54[16]).triggerHaptic();
          const obj2 = closure_0(tmp54[16]);
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
  let fn = function q(arg0) {
    if (voiceMessageAnimationState.get()[1] !== arg0) {
      const items = [voiceMessageAnimationState.get()[1], arg0];
      const result = voiceMessageAnimationState.set(items);
      ReanimatedRexport.runOnJS(triggerHapticGuarded)();
    }
  };
  let obj3 = require("NavigationRouteUtils");
  fn.__closure = { voiceMessageAnimationState: tmp, runOnJS: require("ReanimatedRexport").runOnJS, triggerHapticGuarded };
  fn.__workletHash = 9127775028714;
  fn.__initData = __initData;
  const items8 = [tmp];
  const callback2 = noop.useCallback(fn, items8);
  const items9 = [tmp, first, callback, tmp5[2]];
  const callback3 = noop.useCallback(() => {
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
  const tmp21 = sharedValue1(9047);
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
          callback2(false);
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
  const sum = 0.5 * tmp9 + (sharedValue1(1492)().width - tmp9);
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
          callback2(false);
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
        closure_0(dependencyMap[17]).runOnJS(callback2)(true);
        const items = [, ];
        ({ SENDING: arr[0], SENDING: arr[1] } = constants);
        const result = voiceMessageAnimationState.set(items);
        const obj = closure_0(dependencyMap[17]);
        closure_0(dependencyMap[17]).runOnJS(callback1)();
        const obj2 = closure_0(dependencyMap[17]);
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
      closure_0(dependencyMap[17]).runOnJS(callback3)();
    };
    const onUpdateResult = minDistanceResult.onTouchesDown(fn).onUpdate(fn2);
    fn3.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleFinalize: callback3 };
    fn3.__workletHash = 2411654680943;
    fn3.__initData = __initData;
    return onUpdateResult.onFinalize(fn3);
  }, items10);
  let obj5 = { gesture: memo, children: null };
  let obj6 = { ref: sharedValue1(13766)().tooltipTargetRef, IconComponent: null, active: false, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null, disabled: null };
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
          callback2(false);
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
  obj5.children = jsx(sharedValue1(12767), { ref: sharedValue1(13766)().tooltipTargetRef, IconComponent: null, active: false, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null, disabled: null });
  return jsx(require("LegacyBaseButton").GestureDetector, { gesture: memo, children: null });
});