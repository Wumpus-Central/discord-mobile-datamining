import getState from "getState";
import getSystemLocale from "getSystemLocale";
import importAllResult from "module_4116";
import get_ActivityIndicator from "openChannelCallModal";
import setContent from "setContent";
import closure_9 from "getState";
import ensureGuildLoaded from "ensureGuildLoaded";
import VoiceMessageRecordingStatus from "VoiceMessageRecordingStatus";
import VoiceMessageAnimationState from "VoiceMessageAnimationState";
import ME from "ME";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";
import { NativePermissionTypes } from "NativePermissionStatus";
import { jsx } from "useGradientBottom";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_6;
let error;
let map1;
let unpackModuleId;
const require = arg1;
function VoiceMessageRecordingCancelledToastIcon() {
  let obj = { style: callback().icon, "aria-hidden": true, children: null };
  obj = { color: null, size: "xs" };
  obj[0] = importDefault(712).colors.WHITE;
  obj[2] = jsx(require(7878) /* XSmallBoldIcon */.XSmallBoldIcon, { color: null, size: "xs" });
  return <closure_6 color={null} size="xs" />;
}
function triggerHapticGuarded() {
  if (state.getState().showRecordingOverlay) {
    require(11540) /* _startAudioRecording */.triggerHaptic();
    const obj = require(11540) /* _startAudioRecording */;
  }
}
let c5 = importAllResult;
({ View: closure_6, AppState: error } = get_ActivityIndicator);
({ setIsVoiceMessageButtonMounted: unpackModuleId, setIsUsingHoldGesture: closure_12, setVoiceMessageAnimationState: map1, showVoiceMessagesTooltip: closure_14, useVoiceMessagesUIStore: closure_15, setShowRecordingOverlay: closure_16, hideVoiceMessagesTooltip: closure_17 } = VoiceMessageRecordingStatus);
({ VoiceMessageAnimationState: closure_18, VOICE_RECORDING_MIN_DURATION_MILLIS: closure_19 } = VoiceMessageAnimationState);
({ ComponentActions: closure_20, ComponentActionsKeyed: closure_21, MessageFlags: closure_22 } = ME);
let obj = { icon: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: require("Themes").radii.round, padding: require("Themes").space.PX_4, marginLeft: require("Themes").space.PX_4 };
obj[0] = obj;
let closure_26 = createCacheKey.createStyles(obj);
createCacheKey = { themedChatInput: null };
createCacheKey[0] = { backgroundColor: require("Themes").colors.CARD_SECONDARY_BG };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_30 = { code: "function VoiceMessageButtonTsx1(newValue){const{voiceMessageAnimationState,runOnJS,triggerHapticGuarded}=this.__closure;if(voiceMessageAnimationState.get()[1]===newValue)return;const prevValue=voiceMessageAnimationState.get()[1];voiceMessageAnimationState.set([prevValue,newValue]);runOnJS(triggerHapticGuarded)();}" };
let closure_31 = { code: "function VoiceMessageButtonTsx2(){const{runOnJS,handleFinalize}=this.__closure;runOnJS(handleFinalize)();}" };
let closure_32 = { code: "function VoiceMessageButtonTsx3(e){const{isGestureActiveValue,LOCK_THRESHOLD,cancelThresholdX,handleUpdateValue,VoiceMessageAnimationState}=this.__closure;if(!isGestureActiveValue.get())return;if(e.translationY<=-LOCK_THRESHOLD&&e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.LOCKING);}else if(e.absoluteX<cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.CANCELLING);}else if(e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.SENDING);}}" };
let closure_33 = { code: "function VoiceMessageButtonTsx4(e){const{isGestureActiveValue,runOnJS,setIsUsingHoldGesture,voiceMessageAnimationState,VoiceMessageAnimationState,startRecording}=this.__closure;if(e.numberOfTouches>1)return;if(isGestureActiveValue.get())return;runOnJS(setIsUsingHoldGesture)(true);voiceMessageAnimationState.set([VoiceMessageAnimationState.SENDING,VoiceMessageAnimationState.SENDING]);runOnJS(startRecording)();}" };
let obj2 = { backgroundColor: require("Themes").colors.CARD_SECONDARY_BG };
const memoResult = importAllResult.memo((disabled) => {
  let accessibilityActions;
  let onAccessibilityAction;
  disabled = disabled.disabled;
  let _require = disabled;
  const channelId = disabled.channelId;
  let sharedValue1 = channelId;
  let dependencyMap;
  let sharedValue;
  let first;
  let importAllResult;
  let c6;
  let currentState;
  let setContent;
  let closure_9;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  let c14;
  let obj = _require(1348);
  let obj1 = _require(9010);
  const clientThemesOverride = obj1.useClientThemesOverride(createCacheKey().themedChatInput);
  const tmp3 = state((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
  dependencyMap = tmp3;
  let tmp = createCacheKey();
  sharedValue = _require(4116).useSharedValue(0);
  _require = undefined;
  sharedValue1 = undefined;
  let ref = importAllResult.useRef(false);
  _require = ref;
  let obj3 = _require(4116);
  sharedValue1 = _require(4116).useSharedValue(false);
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
  c6 = tmp10;
  currentState = importAllResult.useRef(true);
  setContent = importAllResult.useRef(currentState.currentState);
  closure_9 = importAllResult.useRef(null);
  const tmp11 = sharedValue1(11025)();
  _require = undefined;
  _require = sharedValue((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let cancelReason;
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
          return { value: "HermesInternal", done: null };
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
              let closure_2 = tmp5;
              cancelReason = tmp2;
              c0 = undefined;
              cancelReason = undefined;
              ({ isCancelling: c0, cancelReason } = c0);
              if (cancelReason === undefined) {
                cancelReason = callback(c2[24]).VoiceMessageRecordingResult.CANCELLED_USER_REQUESTED;
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
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              startTimeMillis = 3;
              throw arg1;
            } else if (arg0 === 2) {
              startTimeMillis = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let obj5 = callback(c2[18]);
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
            outer1_6(false);
            if (c0) {
              outer1_9.current = cancelReason;
              obj2 = callback(c2[18]);
              let result = obj2.emitVoiceMessageRecorded(cancelReason, data.durationSecs, startTimeMillis);
              startTimeMillis = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = undefined;
              return obj4;
            } else if (data.durationSecs < outer2_19 / 1000) {
              obj = callback(c2[18]);
              const result1 = obj.emitVoiceMessageRecorded(callback(c2[24]).VoiceMessageRecordingResult.CANCELLED_DURATION, sharedValue.durationSecs, first);
              callback2();
              startTimeMillis = 3;
              obj5 = { value: null, done: true };
              obj5[0] = undefined;
              return obj5;
            } else {
              const result2 = callback(c2[18]).emitVoiceMessageRecorded(callback(c2[24]).VoiceMessageRecordingResult.SENT, sharedValue.durationSecs, first);
              user = callback.getChannel(outer1_1);
              if (null != user) {
                const obj6 = { uri: null, originalUri: null, mimeType: "audio/ogg", filename: "voice-message.ogg", platform: null, durationSecs: null, waveform: null };
                obj6[0] = data.filename;
                obj6[1] = data.filename;
                obj6[4] = callback(c2[26]).UploadPlatform.REACT_NATIVE;
                obj6[5] = data.durationSecs;
                obj6[6] = data.waveform;
                const cloudUpload = new callback(c2[25]).CloudUpload(obj6, user.id);
                items = [cloudUpload];
                pendingReply2 = pendingReply.getPendingReply(outer1_1);
                sendMessageOptionsForReply = sharedValue1(c2[27]).getSendMessageOptionsForReply(pendingReply2);
                const obj14 = sharedValue1(c2[27]);
                const id = user.id;
                const obj7 = { content: "", tts: false, invalidEmojis: null, validNonShortcutEmojis: null };
                obj7[2] = [];
                obj7[3] = [];
                const obj8 = { flags: null, location: null, attachmentsToUpload: null, onAttachmentUploadError: null };
                obj8[0] = outer2_22.IS_VOICE_MESSAGE;
                obj8[1] = outer2_23.VOICE_MESSAGE;
                obj8[2] = items;
                obj8[3] = function onAttachmentUploadError(file, code, reason) {
                  let obj = _undefined(table[28]);
                  obj = { file, guildId: _undefined2.getGuildId(), analyticsLocations: [], code, reason };
                  const result = obj.handleUploadMessageAttachmentsErrors(obj);
                };
                const merged = Object.assign(sendMessageOptionsForReply);
                obj14.sendMessage(id, obj7, undefined, obj8);
                const obj13 = sharedValue1(c2[27]);
                callback(c2[29]).deletePendingReply(outer1_1);
                const obj17 = callback(c2[29]);
              }
              startTimeMillis = 3;
              return { value: "HermesInternal", done: null };
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
    let ComponentDispatch = callback(_undefined[30]).ComponentDispatch;
    ComponentDispatch.subscribeKeyed(outer1_21.VOICE_MESSAGE_SEND, sharedValue1, callback);
    return () => {
      const ComponentDispatch = outer1_0(outer1_2[30]).ComponentDispatch;
      ComponentDispatch.unsubscribeKeyed(outer1_21.VOICE_MESSAGE_SEND, closure_1, ensureGuildLoaded);
    };
  }, items3);
  const effect1 = importAllResult.useEffect(() => {
    callback1(true);
    return () => {
      callback(false);
    };
  }, []);
  const effect2 = importAllResult.useEffect(() => {
    let closure_0 = closure_7.addEventListener("change", (current) => {
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
        tmp5 = ref2.current !== lib(outer1_2[24]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND;
      }
      if (!tmp5) {
        let obj = outer1_1(tmp4[31]);
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
      outer1_7.current = false;
      const state = outer2_15.getState();
      let showRecordingOverlay = state.showRecordingOverlay;
      if (!showRecordingOverlay) {
        showRecordingOverlay = null != state.recordingStatus;
      }
      if (!showRecordingOverlay) {
        showRecordingOverlay = current;
      }
      if (showRecordingOverlay) {
        outer1_6(false);
        current(table[18]).endAudioRecording();
        const obj = current(table[18]);
      }
    };
  }, items4);
  let obj4 = _require(4116);
  const items5 = [first, tmp7[2], channelId];
  const isModalOpen = _require(4106).useIsModalOpen();
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
            return { value: "HermesInternal", done: null };
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
                let closure_1 = tmp2;
                let closure_0 = tmp5;
                closure_0 = undefined;
                const state = outer2_15.getState();
                if (!state.showRecordingOverlay) {
                  if (null == state.recordingStatus) {
                    if (!outer1_4.current) {
                      c3 = 3;
                    }
                  }
                }
                outer1_6(false);
                let obj2 = outer2_0(outer2_2[18]);
                c2 = 1;
                c3 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = obj2.endAudioRecording();
                return obj1;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              closure_0 = arg1;
              obj = outer2_0(outer2_2[18]);
              const result = obj.emitVoiceMessageRecorded(outer2_0(outer2_2[24]).VoiceMessageRecordingResult.CANCELLED_GESTURE_CONFLICT, closure_0.data.durationSecs, closure_0.startTimeMillis);
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
      const _cancel = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    function handleActionSheetChange() {
      if (setContent.isOpen()) {
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
    let result = setContent.addReactChangeListener(handleActionSheetChange);
    let rootNavigationRef = callback(_undefined[34]).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.addListener("state", handleNavigationChange);
    }
    return () => {
      const result = setContent.removeReactChangeListener(handleActionSheetChange);
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
        return { value: "HermesInternal", done: null };
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
            let closure_0 = tmp7;
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
              if (outer1_7.current) {
                if (!outer1_8.isOpen()) {
                  if (null != outer1_10.getChannel(outer1_1)) {
                    outer1_6(true);
                    const ComponentDispatch = outer1_0(outer1_2[30]).ComponentDispatch;
                    ComponentDispatch.dispatch(outer1_20.VOICE_MESSAGE_BUTTON_PRESSED);
                    ref = 2;
                    c5 = 1;
                    let obj1 = { value: null, done: false };
                    obj1[0] = outer1_1(outer1_2[35]).requestPermission(outer1_24.AUDIO);
                    return obj1;
                  }
                }
              }
            }
          }
        } else if (1 === tmp7) {
          let c3 = 0;
          outer1_6(false);
          const result = outer1_0(outer1_2[36]).showVoiceRecordingFailed();
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
              outer1_17();
              const _performance = performance;
              closure_0 = performance.now();
              outer1_16(true);
              c3 = 1;
              obj3 = outer1_0(outer1_2[18]);
              ref = 3;
              c5 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = obj3.startAudioRecording(outer1_0);
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
          state = outer1_15.getState();
          if (state.recordingId === closure_0) {
            const voiceMessageAnimationState = state.voiceMessageAnimationState;
            let tmp8;
            if (voiceMessageAnimationState != null) {
              tmp8 = voiceMessageAnimationState.get()[1];
            }
            if (tmp8 !== outer1_18.LOCKED) {
              if (!ref.current) {
                obj = outer1_0(outer1_2[18]);
                obj.endAudioRecording();
              }
            }
          }
          obj1 = outer1_0(outer1_2[18]);
          obj1.triggerHaptic();
        }
        c5 = 3;
      } catch (tmp54) {
        let closure_2 = tmp54;
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
      obj = c2;
      if (c2.get()[1] !== disabled) {
        items = [, ];
        items[0] = obj.get()[1];
        items[1] = disabled;
        result = obj.set(items);
        tmp2 = f108538;
        tmp3 = c2;
        obj2 = f108538(c2[19]);
        tmp4 = outer1_29;
        tmp5 = obj2.runOnJS(outer1_29)();
      }
      return;
    }
  }
  obj = { voiceMessageAnimationState: tmp3, runOnJS: _require(4116).runOnJS, triggerHapticGuarded };
  Z.__closure = obj;
  Z.__workletHash = 9127775028714;
  Z.__initData = closure_30;
  const items8 = [tmp3];
  callback2 = importAllResult.useCallback(Z, items8);
  const items9 = [tmp3, first, callback, tmp7[2]];
  callback3 = importAllResult.useCallback(() => {
    if (first.current) {
      _undefined2(false);
      const tmp6 = _undefined.get()[1];
      if (outer1_18.SENDING === tmp6) {
        callback({ isCancelling: false });
      } else if (tmp7.CANCELLING === tmp6) {
        callback({ isCancelling: true });
      } else if (tmp7.LOCKING === tmp6) {
        callback2(false);
        const items = [, ];
        ({ LOCKING: arr[0], LOCKED: arr[1] } = tmp7);
        const result = obj2.set(items);
        callback(_undefined[19]).runOnJS(outer1_29)();
      } else {
        callback(_undefined[18]).endAudioRecording();
        const obj3 = callback(_undefined[18]);
      }
      obj2 = _undefined;
    } else {
      callback(_undefined[18]).endAudioRecording();
      const obj = callback(_undefined[18]);
    }
  }, items9);
  let obj5 = _require(4106);
  const tmp23 = sharedValue1(8604);
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
        return { value: "HermesInternal", done: null };
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
            let closure_0 = tmp4;
            c1 = 1;
            c2 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_11();
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
          outer1_12(false);
          const items = [, ];
          ({ LOCKED: arr[0], LOCKED: arr[1] } = outer1_18);
          const result = c2.set(items);
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        c2 = tmp;
        throw tmp12;
      }
    }
  });
  const sum = 0.5 * tmp11 + (sharedValue1(1474)().width - tmp11);
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
        return { value: "HermesInternal", done: null };
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
            let closure_0 = tmp4;
            c1 = 1;
            c2 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_11();
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
          outer1_12(false);
          const items = [, ];
          ({ LOCKED: arr[0], LOCKED: arr[1] } = outer1_18);
          const result = c2.set(items);
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        c2 = tmp;
        throw tmp12;
      }
    }
  }), intl.string(_require(1236).t.lwy6aX)));
  const memo = importAllResult.useMemo(() => {
    const Gesture = callback(_undefined[38]).Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(!callback);
    const fn = function n(numberOfTouches) {
      let value = numberOfTouches.numberOfTouches > 1;
      if (!value) {
        value = store.get();
      }
      if (!value) {
        outer1_0(outer1_2[19]).runOnJS(outer1_12)(true);
        const items = [, ];
        ({ SENDING: arr[0], SENDING: arr[1] } = outer1_18);
        const result = closure_2.set(items);
        const obj = outer1_0(outer1_2[19]);
        outer1_0(outer1_2[19]).runOnJS(closure_11)();
        const obj2 = outer1_0(outer1_2[19]);
      }
    };
    let obj = { isGestureActiveValue: c5, runOnJS: callback(_undefined[19]).runOnJS, setIsUsingHoldGesture: callback2, voiceMessageAnimationState: _undefined, VoiceMessageAnimationState: outer1_18, startRecording: callback1 };
    fn.__closure = obj;
    fn.__workletHash = 15771181123252;
    fn.__initData = outer1_33;
    const minDistanceResult = Gesture.Pan().enabled(!callback).minDistance(0);
    const fn2 = function t(translationY) {
      if (store.get()) {
        if (translationY.translationY <= -40) {
          if (translationY.absoluteX >= closure_14) {
            callback(outer1_18.LOCKING);
          }
        }
        if (translationY.absoluteX < closure_14) {
          callback(outer1_18.CANCELLING);
        } else if (translationY.absoluteX >= tmp3) {
          callback(outer1_18.SENDING);
        }
      }
    };
    obj = { isGestureActiveValue: c5, LOCK_THRESHOLD: 40, cancelThresholdX: c14, handleUpdateValue: callback2, VoiceMessageAnimationState: outer1_18 };
    fn2.__closure = obj;
    fn2.__workletHash = 9262214665783;
    fn2.__initData = outer1_32;
    const onTouchesDownResult = Gesture.Pan().enabled(!callback).minDistance(0).onTouchesDown(fn);
    const fn3 = function e() {
      outer1_0(outer1_2[19]).runOnJS(closure_13)();
    };
    const onUpdateResult = Gesture.Pan().enabled(!callback).minDistance(0).onTouchesDown(fn).onUpdate(fn2);
    fn3.__closure = { runOnJS: callback(_undefined[19]).runOnJS, handleFinalize: callback3 };
    fn3.__workletHash = 2411654680943;
    fn3.__initData = outer1_31;
    return onUpdateResult.onFinalize(fn3);
  }, items10);
  obj = { gesture: memo, children: null };
  obj1 = { ref: sharedValue1(11542)().tooltipTargetRef, IconComponent: null, active: false, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null, disabled: null, style: null };
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
        return { value: "HermesInternal", done: null };
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
            let closure_0 = tmp4;
            c1 = 1;
            c2 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_11();
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
          outer1_12(false);
          const items = [, ];
          ({ LOCKED: arr[0], LOCKED: arr[1] } = outer1_18);
          const result = c2.set(items);
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        c2 = tmp;
        throw tmp12;
      }
    }
  }), intl.string(_require(1236).t.lwy6aX));
  obj1[1] = _require(10913).MicrophoneIcon;
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
  obj[1] = jsx(sharedValue1(11523), { ref: sharedValue1(11542)().tooltipTargetRef, IconComponent: null, active: false, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null, disabled: null, style: null });
  return jsx(_require(5339).GestureDetector, { gesture: memo, children: null });
});
let result = require("noop").fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageButton.tsx");

export default memoResult;