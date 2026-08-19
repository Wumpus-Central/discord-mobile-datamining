// === Module 11418: VoiceMessageRecordingCancelledToastIcon ===

// Module 11418 (VoiceMessageRecordingCancelledToastIcon)
import ThemesDefault from "Themes" /* 712 */;
import XSmallBoldIcon from "XSmallBoldIcon" /* 8196 */;
import _startAudioRecording from "_startAudioRecording" /* 11419 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "setContent" /* 4086 */;
import closure_9 from "getState" /* 7434 */;
import closure_10 from "ensureGuildLoaded" /* 1391 */;
import VoiceMessageRecordingStatus from "VoiceMessageRecordingStatus" /* 11147 */;
import VoiceMessageAnimationState from "VoiceMessageAnimationState" /* 11148 */;
import ME from "ME" /* 676 */;
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING" /* 4663 */;
import { NativePermissionTypes } from "NativePermissionStatus" /* 4839 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
function VoiceMessageRecordingCancelledToastIcon() {
  let obj = { style: callback().icon, "aria-hidden": true, children: null };
  obj = { color: ThemesDefault.colors.WHITE, size: "xs" };
  obj[2] = jsx(XSmallBoldIcon.XSmallBoldIcon, { color: ThemesDefault.colors.WHITE, size: "xs" });
  return <closure_6 color={ThemesDefault.colors.WHITE} size="xs" />;
}
function triggerHapticGuarded() {
  if (state.getState().showRecordingOverlay) {
    _startAudioRecording.triggerHaptic();
    const obj = _startAudioRecording;
  }
}
let c5 = importAllResult;
({ View: closure_6, AppState: error } = get_ActivityIndicator);
({ setIsVoiceMessageButtonMounted: unpackModuleId, setIsUsingHoldGesture: closure_12, setVoiceMessageAnimationState: map1, showVoiceMessagesTooltip: closure_14, useVoiceMessagesUIStore: closure_15, setShowRecordingOverlay: closure_16, hideVoiceMessagesTooltip: closure_17 } = VoiceMessageRecordingStatus);
({ VoiceMessageAnimationState: closure_18, VOICE_RECORDING_MIN_DURATION_MILLIS: closure_19 } = VoiceMessageAnimationState);
({ ComponentActions: closure_20, ComponentActionsKeyed: closure_21, MessageFlags: closure_22 } = ME);
let obj = { icon: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: ThemesDefault.radii.round, padding: ThemesDefault.space.PX_4, marginLeft: ThemesDefault.space.PX_4 };
obj[0] = obj;
let closure_26 = createCacheKey.createStyles(obj);
createCacheKey = { themedChatInput: { backgroundColor: ThemesDefault.colors.CARD_SECONDARY_BG } };
let closure_28 = createCacheKey.createStyles(createCacheKey);
let closure_30 = { code: "function VoiceMessageButtonTsx1(newValue){const{voiceMessageAnimationState,runOnJS,triggerHapticGuarded}=this.__closure;if(voiceMessageAnimationState.get()[1]===newValue)return;const prevValue=voiceMessageAnimationState.get()[1];voiceMessageAnimationState.set([prevValue,newValue]);runOnJS(triggerHapticGuarded)();}" };
let closure_31 = { code: "function VoiceMessageButtonTsx2(){const{runOnJS,handleFinalize}=this.__closure;runOnJS(handleFinalize)();}" };
let closure_32 = { code: "function VoiceMessageButtonTsx3(e){const{isGestureActiveValue,LOCK_THRESHOLD,cancelThresholdX,handleUpdateValue,VoiceMessageAnimationState}=this.__closure;if(!isGestureActiveValue.get())return;if(e.translationY<=-LOCK_THRESHOLD&&e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.LOCKING);}else if(e.absoluteX<cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.CANCELLING);}else if(e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.SENDING);}}" };
let closure_33 = { code: "function VoiceMessageButtonTsx4(e){const{isGestureActiveValue,runOnJS,setIsUsingHoldGesture,voiceMessageAnimationState,VoiceMessageAnimationState,startRecording}=this.__closure;if(e.numberOfTouches>1)return;if(isGestureActiveValue.get())return;runOnJS(setIsUsingHoldGesture)(true);voiceMessageAnimationState.set([VoiceMessageAnimationState.SENDING,VoiceMessageAnimationState.SENDING]);runOnJS(startRecording)();}" };
let obj2 = { backgroundColor: ThemesDefault.colors.CARD_SECONDARY_BG };
const memoResult = importAllResult.memo((disabled) => {
  disabled = disabled.disabled;
  let _require = disabled;
  const channelId = disabled.channelId;
  let sharedValue1 = channelId;
  dependencyMap = undefined;
  let sharedValue;
  let first;
  importAllResult = undefined;
  closure_6 = undefined;
  let currentState;
  closure_8 = undefined;
  closure_9 = undefined;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  c14 = undefined;
  let obj = _require(1367);
  obj1 = _require(8501);
  const clientThemesOverride = obj1.useClientThemesOverride(callback2().themedChatInput);
  const tmp3 = state((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
  dependencyMap = tmp3;
  let tmp = callback2();
  sharedValue = _require(4115).useSharedValue(0);
  _require = undefined;
  sharedValue1 = undefined;
  let ref = importAllResult.useRef(false);
  _require = ref;
  let obj3 = _require(4115);
  sharedValue1 = _require(4115).useSharedValue(false);
  let items = [ref, sharedValue1];
  const items1 = [
    ref,
    sharedValue1,
    importAllResult.useCallback((current) => {
      closure_0.current = current;
      const result = sharedValue1.set(current);
    }, items)
  ];
  const tmp7 = first(items1, 3);
  first = tmp7[0];
  importAllResult = tmp9;
  closure_6 = tmp10;
  currentState = importAllResult.useRef(true);
  closure_8 = importAllResult.useRef(currentState.currentState);
  closure_9 = importAllResult.useRef(null);
  const tmp11 = sharedValue1(10718)();
  _require = undefined;
  _require = sharedValue((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (startTimeMillis === 2) {
        startTimeMillis = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          startTimeMillis = 2;
          if (0 === data) {
            if (arg0 === 1) {
              startTimeMillis = 3;
              throw arg1;
            } else if (arg0 === 2) {
              startTimeMillis = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp5;
              cancelReason = tmp2;
              c0 = undefined;
              cancelReason = undefined;
              ({ isCancelling: c0, cancelReason } = c0);
              if (cancelReason === undefined) {
                cancelReason = callback(closure_2[24]).VoiceMessageRecordingResult.CANCELLED_USER_REQUESTED;
              }
              closure_2 = undefined;
              data = undefined;
              startTimeMillis = undefined;
              let user;
              let items;
              let pendingReply2;
              let sendMessageOptionsForReply;
              data = 1;
              startTimeMillis = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              startTimeMillis = 3;
              throw arg1;
            } else if (arg0 === 2) {
              startTimeMillis = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let obj5 = callback(closure_2[18]);
              data = 2;
              startTimeMillis = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = obj5.endAudioRecording();
              return obj2;
            }
          } else if (arg0 === 1) {
            startTimeMillis = 3;
            throw arg1;
          } else if (arg0 === 2) {
            startTimeMillis = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            closure_2 = arg1;
            data = closure_2.data;
            startTimeMillis = closure_2.startTimeMillis;
            closure_1_6(false);
            if (c0) {
              closure_1_9.current = cancelReason;
              obj2 = callback(closure_2[18]);
              let result = obj2.emitVoiceMessageRecorded(cancelReason, data.durationSecs, startTimeMillis);
              startTimeMillis = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = undefined;
              return obj4;
            } else if (data.durationSecs < closure_2_19 / 1000) {
              obj = callback(closure_2[18]);
              const result1 = obj.emitVoiceMessageRecorded(callback(closure_2[24]).VoiceMessageRecordingResult.CANCELLED_DURATION, sharedValue.durationSecs, first);
              callback2();
              startTimeMillis = 3;
              obj5 = { value: null, done: true };
              obj5[0] = undefined;
              return obj5;
            } else {
              const result2 = callback(closure_2[18]).emitVoiceMessageRecorded(callback(closure_2[24]).VoiceMessageRecordingResult.SENT, sharedValue.durationSecs, first);
              const channel = callback.getChannel(closure_1_1);
              if (null != channel) {
                const obj6 = { uri: null, originalUri: null, mimeType: "audio/ogg", filename: "voice-message.ogg", platform: null, durationSecs: null, waveform: null };
                obj6[0] = data.filename;
                obj6[1] = data.filename;
                obj6[4] = callback(closure_2[26]).UploadPlatform.REACT_NATIVE;
                obj6[5] = data.durationSecs;
                obj6[6] = data.waveform;
                const cloudUpload = new callback(closure_2[25]).CloudUpload(obj6, user.id);
                items = [cloudUpload];
                pendingReply2 = pendingReply.getPendingReply(closure_1_1);
                sendMessageOptionsForReply = sharedValue1(closure_2[27]).getSendMessageOptionsForReply(pendingReply2);
                const obj14 = sharedValue1(closure_2[27]);
                const id = user.id;
                const obj7 = { content: "", tts: false, invalidEmojis: null, validNonShortcutEmojis: null };
                obj7[2] = [];
                obj7[3] = [];
                const obj8 = { flags: null, location: null, attachmentsToUpload: null, onAttachmentUploadError: null };
                obj8[0] = closure_2_22.IS_VOICE_MESSAGE;
                obj8[1] = closure_2_23.VOICE_MESSAGE;
                obj8[2] = items;
                obj8[3] = function onAttachmentUploadError(file, code, reason) {
                  let obj = _undefined(table[28]);
                  obj = { file, guildId: _undefined2.getGuildId(), analyticsLocations: [], code, reason };
                  const result = obj.handleUploadMessageAttachmentsErrors(obj);
                };
                const merged = Object.assign(sendMessageOptionsForReply);
                obj14.sendMessage(id, obj7, undefined, obj8);
                const obj13 = sharedValue1(closure_2[27]);
                callback(closure_2[29]).deletePendingReply(closure_1_1);
                const obj17 = callback(closure_2[29]);
              }
              startTimeMillis = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          }
        } catch (tmp32) {
          startTimeMillis = tmp;
          throw tmp32;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const items2 = [channelId, tmp7[2]];
  callback = importAllResult.useCallback(function() {
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
  const effect = importAllResult.useEffect(() => {
    let ComponentDispatch = callback(store[30]).ComponentDispatch;
    ComponentDispatch.subscribeKeyed(closure_1_21.VOICE_MESSAGE_SEND, sharedValue1, callback);
    return () => {
      const ComponentDispatch = closure_1_0(closure_1_2[30]).ComponentDispatch;
      ComponentDispatch.unsubscribeKeyed(closure_1_21.VOICE_MESSAGE_SEND, closure_1, closure_10);
    };
  }, items3);
  const effect1 = importAllResult.useEffect(() => {
    callback1(true);
    return () => {
      callback(false);
    };
  }, []);
  const effect2 = importAllResult.useEffect(() => {
    closure_0 = closure_7.addEventListener("change", (current) => {
      current = ref.current;
      let tmp5 = "active" !== current;
      if (!tmp5) {
        let tmp6 = "inactive" !== current;
        if (tmp6) {
          tmp6 = "background" !== current;
        }
        tmp5 = tmp6;
      }
      if (!tmp5) {
        tmp5 = ref2.current !== lib(closure_1_2[24]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND;
      }
      if (!tmp5) {
        let obj = closure_1_1(tmp4[31]);
        obj = { key: "VOICE_MESSAGE_CANCELLED_ON_BACKGROUND", content: null, icon: null, position: "bottom" };
        const intl = tmp3(tmp4[32]).intl;
        obj[1] = intl.string(tmp3(tmp4[32]).t.JM7Y2D);
        obj[2] = function icon() {
          return callback(closure_27, {});
        };
        obj.open(obj);
        ref2.current = null;
      }
      ref.current = current;
    });
    return () => {
      lib.remove();
    };
  }, []);
  const items4 = [first, tmp7[2]];
  const effect3 = importAllResult.useEffect(() => {
    closure_7.current = true;
    const current = first.current;
    return () => {
      closure_1_7.current = false;
      const state = closure_2_15.getState();
      let showRecordingOverlay = state.showRecordingOverlay;
      if (!showRecordingOverlay) {
        showRecordingOverlay = null != state.recordingStatus;
      }
      if (!showRecordingOverlay) {
        showRecordingOverlay = current;
      }
      if (showRecordingOverlay) {
        closure_1_6(false);
        current(table[18]).endAudioRecording();
        const obj = current(table[18]);
      }
    };
  }, items4);
  let obj4 = _require(4115);
  const items5 = [first, tmp7[2], channelId];
  const isModalOpen = _require(4229).useIsModalOpen();
  const effect4 = importAllResult.useEffect(() => {
    function cancel() {
      const self = this;
      const apply = _cancel.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    function _cancel() {
      const self = this;
      const tmp = sharedValue(function*() {
        if (c3 === 2) {
          c3 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = tmp2;
                closure_0 = tmp5;
                closure_0 = undefined;
                const state = closure_2_15.getState();
                if (!state.showRecordingOverlay) {
                  if (null == state.recordingStatus) {
                    if (!closure_1_4.current) {
                      c3 = 3;
                    }
                  }
                }
                closure_1_6(false);
                let obj2 = closure_2_0(closure_2_2[18]);
                c2 = 1;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj2.endAudioRecording();
                return obj1;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              closure_0 = arg1;
              obj = closure_2_0(closure_2_2[18]);
              const result = obj.emitVoiceMessageRecorded(closure_2_0(closure_2_2[24]).VoiceMessageRecordingResult.CANCELLED_GESTURE_CONFLICT, closure_0.data.durationSecs, closure_0.startTimeMillis);
            }
            c3 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } catch (tmp21) {
            c3 = tmp;
            throw tmp21;
          }
        }
      });
      closure_1 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    function handleActionSheetChange() {
      if (closure_8.isOpen()) {
        cancel();
      }
    }
    function handleNavigationChange() {
      const focusedChannelId = cancel(handleActionSheetChange[33]).getFocusedChannelId();
      if (null != focusedChannelId) {
        if (focusedChannelId !== _cancel) {
          cancel();
        }
      } else {
        cancel();
      }
    }
    cancel();
    let result = closure_8.addReactChangeListener(handleActionSheetChange);
    let rootNavigationRef = callback(store[34]).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.addListener("state", handleNavigationChange);
    }
    return () => {
      const result = closure_8.removeReactChangeListener(handleActionSheetChange);
      const rootNavigationRef = cancel(handleActionSheetChange[34]).getRootNavigationRef();
      if (rootNavigationRef != null) {
        rootNavigationRef.removeListener("state", handleNavigationChange);
      }
    };
  }, items5);
  const items6 = [sharedValue, isModalOpen];
  const effect5 = importAllResult.useEffect(() => {
    callback3({ currWaveHeight: sharedValue });
  }, items6);
  const items7 = [first, tmp7[2], channelId];
  callback1 = importAllResult.useCallback(sharedValue(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c5 = 2;
        if (0 === ref) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let state = tmp3;
            closure_0 = tmp7;
            closure_0 = undefined;
            state = undefined;
            if (!(function isNormalModalOpen() {
              if (obj.isModalOpen()) {
                let tmpResult = tmp(tmp2[16]);
                const openModalKey = tmpResult.getOpenModalKey();
                let tmp5 = null == openModalKey;
                if (!tmp5) {
                  tmpResult = tmp(tmp2[17]);
                  tmp5 = !tmpResult.isVoiceChannelModalKey(openModalKey);
                }
                return tmp5;
              } else {
                return false;
              }
              obj = callback(tmp54[16]);
            })()) {
              if (closure_1_7.current) {
                if (!closure_1_8.isOpen()) {
                  if (null != closure_1_10.getChannel(closure_1_1)) {
                    closure_1_6(true);
                    const ComponentDispatch = closure_1_0(closure_1_2[30]).ComponentDispatch;
                    ComponentDispatch.dispatch(closure_1_20.VOICE_MESSAGE_BUTTON_PRESSED);
                    ref = 2;
                    c5 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = closure_1_1(closure_1_2[35]).requestPermission(closure_1_24.AUDIO);
                    return obj1;
                  }
                }
              }
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_1_6(false);
          const result = closure_1_0(closure_1_2[36]).showVoiceRecordingFailed();
          c5 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = undefined;
          return obj2;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            let obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else if (arg1) {
            if (ref.current) {
              closure_1_17();
              const _performance = performance;
              closure_0 = performance.now();
              closure_1_16(true);
              c3 = 1;
              obj3 = closure_1_0(closure_1_2[18]);
              ref = 3;
              c5 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = obj3.startAudioRecording(closure_1_0);
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = arg1;
          return obj5;
        } else {
          c3 = 0;
          state = closure_1_15.getState();
          if (state.recordingId === closure_0) {
            const voiceMessageAnimationState = state.voiceMessageAnimationState;
            let tmp8;
            if (voiceMessageAnimationState != null) {
              tmp8 = voiceMessageAnimationState.get()[1];
            }
            if (tmp8 !== closure_1_18.LOCKED) {
              if (!ref.current) {
                obj = closure_1_0(closure_1_2[18]);
                obj.endAudioRecording();
              }
            }
          }
          obj1 = closure_1_0(closure_1_2[18]);
          obj1.triggerHaptic();
        }
        c5 = 3;
      } catch (tmp54) {
        closure_2 = tmp54;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp54;
        } else {
          ref = tmp;
        }
      }
    }
  }), items7);
  class Z {
    constructor(arg0) {
      obj = closure_2;
      if (closure_2.get()[1] !== disabled) {
        items = [, ];
        items[0] = obj.get()[1];
        items[1] = disabled;
        result = obj.set(items);
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj2 = closure_0(closure_2[19]);
        tmp4 = closure_1_29;
        tmp5 = obj2.runOnJS(closure_1_29)();
      }
      return;
    }
  }
  obj = { voiceMessageAnimationState: tmp3, runOnJS: _require(4115).runOnJS, triggerHapticGuarded };
  Z.__closure = obj;
  Z.__workletHash = 9127775028714;
  Z.__initData = closure_30;
  const items8 = [tmp3];
  callback2 = importAllResult.useCallback(Z, items8);
  const items9 = [tmp3, first, callback, tmp7[2]];
  callback3 = importAllResult.useCallback(() => {
    if (first.current) {
      callback2(false);
      const tmp6 = store.get()[1];
      if (closure_1_18.SENDING === tmp6) {
        callback({ isCancelling: false });
      } else if (tmp7.CANCELLING === tmp6) {
        callback({ isCancelling: true });
      } else if (tmp7.LOCKING === tmp6) {
        callback2(false);
        const items = [, ];
        ({ LOCKING: arr[0], LOCKED: arr[1] } = tmp7);
        const result = obj2.set(items);
        callback(store[19]).runOnJS(closure_1_29)();
      } else {
        callback(store[18]).endAudioRecording();
        const obj3 = callback(store[18]);
      }
      obj2 = store;
    } else {
      callback(store[18]).endAudioRecording();
      const obj = callback(store[18]);
    }
  }, items9);
  let obj5 = _require(4229);
  const tmp23 = sharedValue1(8866);
  let intl = _require(1236).intl;
  const tmp24 = sharedValue(function*() {
    if (c2 === 2) {
      c2 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp4;
            c1 = 1;
            c2 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_11();
            return obj1;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_1_12(false);
          const items = [, ];
          ({ LOCKED: arr[0], LOCKED: arr[1] } = closure_1_18);
          const result = c2.set(items);
          c2 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp12) {
        c2 = tmp;
        throw tmp12;
      }
    }
  });
  const sum = 0.5 * tmp11 + (sharedValue1(1494)().width - tmp11);
  c14 = sum;
  const items10 = [disabled, tmp7[1], tmp3, callback1, sum, callback2, callback3];
  ({ accessibilityActions, onAccessibilityAction } = tmp23(sharedValue(function*() {
    if (c2 === 2) {
      c2 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp4;
            c1 = 1;
            c2 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_11();
            return obj1;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_1_12(false);
          const items = [, ];
          ({ LOCKED: arr[0], LOCKED: arr[1] } = closure_1_18);
          const result = c2.set(items);
          c2 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp12) {
        c2 = tmp;
        throw tmp12;
      }
    }
  }), intl.string(_require(1236).t.lwy6aX)));
  const memo = importAllResult.useMemo(() => {
    const Gesture = callback(store[38]).Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(!callback);
    const fn = function n(numberOfTouches) {
      let value = numberOfTouches.numberOfTouches > 1;
      if (!value) {
        value = store.get();
      }
      if (!value) {
        closure_1_0(closure_1_2[19]).runOnJS(closure_1_12)(true);
        const items = [, ];
        ({ SENDING: arr[0], SENDING: arr[1] } = closure_1_18);
        const result = closure_2.set(items);
        const obj = closure_1_0(closure_1_2[19]);
        closure_1_0(closure_1_2[19]).runOnJS(closure_11)();
        const obj2 = closure_1_0(closure_1_2[19]);
      }
    };
    let obj = { isGestureActiveValue: closure_5, runOnJS: callback(store[19]).runOnJS, setIsUsingHoldGesture: callback2, voiceMessageAnimationState: store, VoiceMessageAnimationState: closure_1_18, startRecording: callback1 };
    fn.__closure = obj;
    fn.__workletHash = 15771181123252;
    fn.__initData = closure_1_33;
    const minDistanceResult = Gesture.Pan().enabled(!callback).minDistance(0);
    const fn2 = function t(translationY) {
      if (store.get()) {
        if (translationY.translationY <= -40) {
          if (translationY.absoluteX >= closure_14) {
            callback(closure_1_18.LOCKING);
          }
        }
        if (translationY.absoluteX < closure_14) {
          callback(closure_1_18.CANCELLING);
        } else if (translationY.absoluteX >= tmp3) {
          callback(closure_1_18.SENDING);
        }
      }
    };
    obj = { isGestureActiveValue: closure_5, LOCK_THRESHOLD: 40, cancelThresholdX: c14, handleUpdateValue: callback2, VoiceMessageAnimationState: closure_1_18 };
    fn2.__closure = obj;
    fn2.__workletHash = 9262214665783;
    fn2.__initData = closure_1_32;
    const onTouchesDownResult = Gesture.Pan().enabled(!callback).minDistance(0).onTouchesDown(fn);
    const fn3 = function e() {
      closure_1_0(closure_1_2[19]).runOnJS(closure_13)();
    };
    const onUpdateResult = Gesture.Pan().enabled(!callback).minDistance(0).onTouchesDown(fn).onUpdate(fn2);
    fn3.__closure = { runOnJS: callback(store[19]).runOnJS, handleFinalize: callback3 };
    fn3.__workletHash = 2411654680943;
    fn3.__initData = closure_1_31;
    return onUpdateResult.onFinalize(fn3);
  }, items10);
  obj = { gesture: memo, children: null };
  obj1 = { ref: sharedValue1(11421)().tooltipTargetRef, IconComponent: null, active: false, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null, disabled: null, style: null };
  const tmp23Result = tmp23(sharedValue(function*() {
    if (c2 === 2) {
      c2 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp4;
            c1 = 1;
            c2 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_11();
            return obj1;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_1_12(false);
          const items = [, ];
          ({ LOCKED: arr[0], LOCKED: arr[1] } = closure_1_18);
          const result = c2.set(items);
          c2 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp12) {
        c2 = tmp;
        throw tmp12;
      }
    }
  }), intl.string(_require(1236).t.lwy6aX));
  obj1[1] = _require(11422).MicrophoneIcon;
  const intl2 = _require(1236).intl;
  obj1[3] = intl2.string(_require(1236).t.lwy6aX);
  obj1[4] = accessibilityActions;
  obj1[5] = onAccessibilityAction;
  obj1[6] = disabled;
  let tmp30;
  if (!obj.useMobileVisualRefreshConfig({ location: "VoiceMessageButton" }).chatInputFloating) {
    tmp30 = clientThemesOverride;
  }
  obj1[7] = tmp30;
  obj[1] = jsx(sharedValue1(11402), { ref: sharedValue1(11421)().tooltipTargetRef, IconComponent: null, active: false, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null, disabled: null, style: null });
  return jsx(_require(6377).GestureDetector, { gesture: memo, children: null });
});
let result = require("set").fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageButton.tsx");

export default memoResult;