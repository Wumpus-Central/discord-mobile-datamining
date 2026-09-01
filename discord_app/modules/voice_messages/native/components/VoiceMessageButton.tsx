// discord_app/modules/voice_messages/native/components/VoiceMessageButton.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import XSmallBoldIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallBoldIcon.tsx";
import _startAudioRecording from "../VoiceMessageUtils.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../../action_sheet/native/ActionSheetStore.tsx";
import closure_9 from "../../../replies/PendingReplyStore.tsx";
import closure_10 from "../../../../stores/ChannelStore.tsx";
import closure_11 from "../../../../stores/DraftStore.tsx";
import VoiceMessageRecordingStatus from "../VoiceMessagesUIStore.tsx";
import VoiceMessageAnimationState from "../../VoiceMessageConstants.tsx";
import ME from "../../../../Constants.tsx";
import { MessageSendLocation } from "../../../messages/MessageConstants.tsx";
import { NativePermissionTypes } from "../../../native_permissions/NativePermissionConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { coerceMainRoute } from "../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import { ReanimatedRexport } from "../../../reanimated/ReanimatedRexport.tsx";

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
({ setIsVoiceMessageButtonMounted: closure_12, setIsUsingHoldGesture: map1, setVoiceMessageAnimationState: closure_14, showVoiceMessagesTooltip: closure_15, useVoiceMessagesUIStore: closure_16, setShowRecordingOverlay: closure_17, hideVoiceMessagesTooltip: closure_18 } = VoiceMessageRecordingStatus);
({ VoiceMessageAnimationState: closure_19, VOICE_RECORDING_MIN_DURATION_MILLIS: closure_20 } = VoiceMessageAnimationState);
({ ComponentActions: closure_21, ComponentActionsKeyed: closure_22, MessageFlags: closure_23 } = ME);
let obj = { icon: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: ThemesDefault.radii.round, padding: ThemesDefault.space.PX_4, marginLeft: ThemesDefault.space.PX_4 };
obj[0] = obj;
let closure_27 = createCacheKey.createStyles(obj);
let closure_30 = { code: "function VoiceMessageButtonTsx1(newValue){const{voiceMessageAnimationState,runOnJS,triggerHapticGuarded}=this.__closure;if(voiceMessageAnimationState.get()[1]===newValue)return;const prevValue=voiceMessageAnimationState.get()[1];voiceMessageAnimationState.set([prevValue,newValue]);runOnJS(triggerHapticGuarded)();}" };
let closure_31 = { code: "function VoiceMessageButtonTsx2(){const{runOnJS,handleFinalize}=this.__closure;runOnJS(handleFinalize)();}" };
let closure_32 = { code: "function VoiceMessageButtonTsx3(e){const{isGestureActiveValue,LOCK_THRESHOLD,cancelThresholdX,handleUpdateValue,VoiceMessageAnimationState}=this.__closure;if(!isGestureActiveValue.get())return;if(e.translationY<=-LOCK_THRESHOLD&&e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.LOCKING);}else if(e.absoluteX<cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.CANCELLING);}else if(e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.SENDING);}}" };
let closure_33 = { code: "function VoiceMessageButtonTsx4(e){const{isGestureActiveValue,runOnJS,setIsUsingHoldGesture,voiceMessageAnimationState,VoiceMessageAnimationState,startRecording}=this.__closure;if(e.numberOfTouches>1)return;if(isGestureActiveValue.get())return;runOnJS(setIsUsingHoldGesture)(true);voiceMessageAnimationState.set([VoiceMessageAnimationState.SENDING,VoiceMessageAnimationState.SENDING]);runOnJS(startRecording)();}" };
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
  let tmp = state((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
  dependencyMap = tmp;
  let obj = ReanimatedRexport;
  sharedValue = obj.useSharedValue(0);
  _require = undefined;
  sharedValue1 = undefined;
  let ref = importAllResult.useRef(false);
  _require = ref;
  obj1 = ReanimatedRexport;
  sharedValue1 = obj1.useSharedValue(false);
  let items = [ref, sharedValue1];
  const items1 = [
    ref,
    sharedValue1,
    importAllResult.useCallback((current) => {
      closure_0.current = current;
      const result = sharedValue1.set(current);
    }, items)
  ];
  let tmp5 = first(items1, 3);
  first = tmp5[0];
  importAllResult = tmp7;
  closure_6 = tmp8;
  currentState = importAllResult.useRef(true);
  closure_8 = importAllResult.useRef(currentState.currentState);
  closure_9 = importAllResult.useRef(null);
  const tmp9 = sharedValue1(11125)();
  _require = undefined;
  _require = sharedValue((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (scheduledMessage === 2) {
        scheduledMessage = 3;
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
          scheduledMessage = 2;
          if (0 === data) {
            if (arg0 === 1) {
              scheduledMessage = 3;
              throw arg1;
            } else if (arg0 === 2) {
              scheduledMessage = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp5;
              cancelReason = tmp2;
              c0 = undefined;
              cancelReason = undefined;
              scheduledMessage = c0;
              ({ isCancelling: c0, cancelReason } = c0);
              if (cancelReason === undefined) {
                cancelReason = callback(closure_2[23]).VoiceMessageRecordingResult.CANCELLED_USER_REQUESTED;
              }
              closure_2 = undefined;
              data = undefined;
              scheduledMessage = undefined;
              let user;
              let items;
              let pendingReply2;
              let sendMessageOptionsForReply;
              data = 1;
              scheduledMessage = 1;
              return { value: "PX_16", done: null };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              scheduledMessage = 3;
              throw arg1;
            } else if (arg0 === 2) {
              scheduledMessage = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let obj6 = callback(closure_2[19]);
              data = 2;
              scheduledMessage = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj6.endAudioRecording();
              return obj2;
            }
          } else if (arg0 === 1) {
            scheduledMessage = 3;
            throw arg1;
          } else if (arg0 === 2) {
            scheduledMessage = 3;
            let obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            closure_2 = arg1;
            data = closure_2.data;
            scheduledMessage = closure_2.startTimeMillis;
            closure_1_6(false);
            if (c0) {
              closure_1_9.current = cancelReason;
              obj3 = callback(closure_2[19]);
              let result = obj3.emitVoiceMessageRecorded(cancelReason, data.durationSecs, scheduledMessage);
              scheduledMessage = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = undefined;
              return obj4;
            } else if (data.durationSecs < closure_2_20 / 1000) {
              obj1 = callback(closure_2[19]);
              const result1 = obj1.emitVoiceMessageRecorded(callback(closure_2[23]).VoiceMessageRecordingResult.CANCELLED_DURATION, sharedValue.durationSecs, first);
              closure_2_15();
              scheduledMessage = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = undefined;
              return obj5;
            } else {
              const result2 = callback(closure_2[19]).emitVoiceMessageRecorded(callback(closure_2[23]).VoiceMessageRecordingResult.SENT, sharedValue.durationSecs, first);
              const channel = callback.getChannel(closure_1_1);
              if (null != channel) {
                obj6 = { uri: null, originalUri: null, mimeType: "audio/ogg", filename: "voice-message.ogg", platform: null, durationSecs: null, waveform: null };
                obj6[0] = data.filename;
                obj6[1] = data.filename;
                obj6[4] = callback(closure_2[25]).UploadPlatform.REACT_NATIVE;
                obj6[5] = data.durationSecs;
                obj6[6] = data.waveform;
                const cloudUpload = new callback(closure_2[24]).CloudUpload(obj6, user.id);
                items = [cloudUpload];
                pendingReply2 = pendingReply.getPendingReply(closure_1_1);
                sendMessageOptionsForReply = sharedValue1(closure_2[26]).getSendMessageOptionsForReply(pendingReply2);
                const obj15 = sharedValue1(closure_2[26]);
                const id = user.id;
                const obj7 = { content: "", tts: false, invalidEmojis: null, validNonShortcutEmojis: null };
                obj7[2] = [];
                obj7[3] = [];
                const obj8 = { flags: null, location: null, attachmentsToUpload: null, scheduledTimestamp: null, onAttachmentUploadError: null };
                obj8[0] = closure_2_23.IS_VOICE_MESSAGE;
                obj8[1] = closure_2_24.VOICE_MESSAGE;
                scheduledMessage = items;
                obj8[2] = items;
                scheduledMessage = callback1;
                scheduledMessage = closure_1_1;
                scheduledMessage = callback1.getScheduledMessage(closure_1_1);
                let scheduledTimestamp;
                if (scheduledMessage != null) {
                  scheduledTimestamp = scheduledMessage.scheduledTimestamp;
                }
                obj8[3] = scheduledTimestamp;
                obj8[4] = function onAttachmentUploadError(file, code, reason) {
                  let obj = _undefined(table[27]);
                  obj = { file, guildId: _undefined2.getGuildId(), analyticsLocations: [], code, reason };
                  const result = obj.handleUploadMessageAttachmentsErrors(obj);
                };
                const merged = Object.assign(sendMessageOptionsForReply);
                obj15.sendMessage(id, obj7, undefined, obj8);
                obj = callback(closure_2[28]);
                obj.deletePendingReply(closure_1_1);
                const obj14 = sharedValue1(closure_2[26]);
              }
              scheduledMessage = 3;
              return { value: "HermesInternal", done: null };
            }
          }
        } catch (tmp47) {
          throw tmp47;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const items2 = [channelId, tmp5[2]];
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
    let ComponentDispatch = callback(store[29]).ComponentDispatch;
    ComponentDispatch.subscribeKeyed(closure_1_22.VOICE_MESSAGE_SEND, sharedValue1, callback);
    return () => {
      const ComponentDispatch = closure_1_0(closure_1_2[29]).ComponentDispatch;
      ComponentDispatch.unsubscribeKeyed(closure_1_22.VOICE_MESSAGE_SEND, closure_1, closure_10);
    };
  }, items3);
  const effect1 = importAllResult.useEffect(() => {
    callback2(true);
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
        tmp5 = ref2.current !== lib(closure_1_2[23]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND;
      }
      if (!tmp5) {
        let obj = closure_1_1(tmp4[30]);
        obj = { key: "VOICE_MESSAGE_CANCELLED_ON_BACKGROUND", content: null, icon: null, position: "bottom" };
        const intl = tmp3(tmp4[31]).intl;
        obj[1] = intl.string(tmp3(tmp4[31]).t.JM7Y2D);
        obj[2] = function icon() {
          return callback(closure_28, {});
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
  const items4 = [first, tmp5[2]];
  const effect3 = importAllResult.useEffect(() => {
    closure_7.current = true;
    const current = first.current;
    return () => {
      closure_1_7.current = false;
      const state = closure_2_16.getState();
      let showRecordingOverlay = state.showRecordingOverlay;
      if (!showRecordingOverlay) {
        showRecordingOverlay = null != state.recordingStatus;
      }
      if (!showRecordingOverlay) {
        showRecordingOverlay = current;
      }
      if (showRecordingOverlay) {
        closure_1_6(false);
        current(table[19]).endAudioRecording();
        const obj = current(table[19]);
      }
    };
  }, items4);
  const items5 = [first, tmp5[2], channelId];
  const isModalOpen = require("../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx").useIsModalOpen();
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
                closure_1 = tmp2;
                closure_0 = tmp5;
                closure_0 = undefined;
                const state = closure_2_16.getState();
                if (!state.showRecordingOverlay) {
                  if (null == state.recordingStatus) {
                    if (!closure_1_4.current) {
                      c3 = 3;
                    }
                  }
                }
                closure_1_6(false);
                let obj2 = closure_2_0(closure_2_2[19]);
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
              obj = closure_2_0(closure_2_2[19]);
              const result = obj.emitVoiceMessageRecorded(closure_2_0(closure_2_2[23]).VoiceMessageRecordingResult.CANCELLED_GESTURE_CONFLICT, closure_0.data.durationSecs, closure_0.startTimeMillis);
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
      const focusedChannelId = cancel(handleActionSheetChange[32]).getFocusedChannelId();
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
    let rootNavigationRef = callback(store[33]).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.addListener("state", handleNavigationChange);
    }
    return () => {
      const result = closure_8.removeReactChangeListener(handleActionSheetChange);
      const rootNavigationRef = cancel(handleActionSheetChange[33]).getRootNavigationRef();
      if (rootNavigationRef != null) {
        rootNavigationRef.removeListener("state", handleNavigationChange);
      }
    };
  }, items5);
  const items6 = [sharedValue, isModalOpen];
  const effect5 = importAllResult.useEffect(() => {
    _undefined({ currWaveHeight: sharedValue });
  }, items6);
  const items7 = [first, tmp5[2], channelId];
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
            closure_0 = tmp7;
            closure_0 = undefined;
            state = undefined;
            if (!(function isNormalModalOpen() {
              if (obj.isModalOpen()) {
                let tmpResult = tmp(tmp2[17]);
                const openModalKey = tmpResult.getOpenModalKey();
                let tmp5 = null == openModalKey;
                if (!tmp5) {
                  tmpResult = tmp(tmp2[18]);
                  tmp5 = !tmpResult.isVoiceChannelModalKey(openModalKey);
                }
                return tmp5;
              } else {
                return false;
              }
              obj = callback(tmp54[17]);
            })()) {
              if (closure_1_7.current) {
                if (!closure_1_8.isOpen()) {
                  if (null != closure_1_10.getChannel(closure_1_1)) {
                    closure_1_6(true);
                    const ComponentDispatch = closure_1_0(closure_1_2[29]).ComponentDispatch;
                    ComponentDispatch.dispatch(closure_1_21.VOICE_MESSAGE_BUTTON_PRESSED);
                    ref = 2;
                    c5 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = closure_1_1(closure_1_2[34]).requestPermission(closure_1_25.AUDIO);
                    return obj1;
                  }
                }
              }
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_1_6(false);
          const result = closure_1_0(closure_1_2[35]).showVoiceRecordingFailed();
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
              closure_1_18();
              const _performance = performance;
              closure_0 = performance.now();
              closure_1_17(true);
              c3 = 1;
              obj3 = closure_1_0(closure_1_2[19]);
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
          state = closure_1_16.getState();
          if (state.recordingId === closure_0) {
            const voiceMessageAnimationState = state.voiceMessageAnimationState;
            let tmp8;
            if (voiceMessageAnimationState != null) {
              tmp8 = voiceMessageAnimationState.get()[1];
            }
            if (tmp8 !== closure_1_19.LOCKED) {
              if (!ref.current) {
                obj = closure_1_0(closure_1_2[19]);
                obj.endAudioRecording();
              }
            }
          }
          obj1 = closure_1_0(closure_1_2[19]);
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
        tmp4 = closure_1_29;
        tmp5 = obj2.runOnJS(closure_1_29)();
      }
      return;
    }
  }
  obj = { voiceMessageAnimationState: tmp, runOnJS: require("../../../reanimated/ReanimatedRexport.tsx").runOnJS, triggerHapticGuarded };
  W.__closure = obj;
  W.__workletHash = 9127775028714;
  W.__initData = closure_30;
  const items8 = [tmp];
  callback2 = importAllResult.useCallback(W, items8);
  const items9 = [tmp, first, callback, tmp5[2]];
  callback3 = importAllResult.useCallback(() => {
    if (first.current) {
      callback2(false);
      const tmp6 = store.get()[1];
      if (closure_1_19.SENDING === tmp6) {
        callback({ isCancelling: false });
      } else if (tmp7.CANCELLING === tmp6) {
        callback({ isCancelling: true });
      } else if (tmp7.LOCKING === tmp6) {
        callback3(false);
        const items = [, ];
        ({ LOCKING: arr[0], LOCKED: arr[1] } = tmp7);
        const result = obj2.set(items);
        callback(store[20]).runOnJS(closure_1_29)();
      } else {
        callback(store[19]).endAudioRecording();
        const obj3 = callback(store[19]);
      }
      obj2 = store;
    } else {
      callback(store[19]).endAudioRecording();
      const obj = callback(store[19]);
    }
  }, items9);
  let obj3 = coerceMainRoute;
  const tmp21 = sharedValue1(9720);
  let intl = require("../../../../intl/index.native.tsx").intl;
  const tmp22 = sharedValue(function*() {
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
          closure_1_13(false);
          const items = [, ];
          ({ LOCKED: arr[0], LOCKED: arr[1] } = closure_1_19);
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
  const sum = 0.5 * tmp9 + (sharedValue1(1493)().width - tmp9);
  c14 = sum;
  const items10 = [disabled, tmp5[1], tmp, callback1, sum, callback2, callback3];
  ({ accessibilityActions, onAccessibilityAction } = tmp21(sharedValue(function*() {
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
          closure_1_13(false);
          const items = [, ];
          ({ LOCKED: arr[0], LOCKED: arr[1] } = closure_1_19);
          const result = c2.set(items);
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        c2 = tmp;
        throw tmp12;
      }
    }
  }), intl.string(require("../../../../intl/index.native.tsx").t.lwy6aX)));
  const memo = importAllResult.useMemo(() => {
    const Gesture = callback(store[37]).Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(!callback);
    const fn = function n(numberOfTouches) {
      let value = numberOfTouches.numberOfTouches > 1;
      if (!value) {
        value = store.get();
      }
      if (!value) {
        closure_1_0(closure_1_2[20]).runOnJS(closure_1_13)(true);
        const items = [, ];
        ({ SENDING: arr[0], SENDING: arr[1] } = closure_1_19);
        const result = closure_2.set(items);
        const obj = closure_1_0(closure_1_2[20]);
        closure_1_0(closure_1_2[20]).runOnJS(closure_11)();
        const obj2 = closure_1_0(closure_1_2[20]);
      }
    };
    let obj = { isGestureActiveValue: closure_5, runOnJS: callback(store[20]).runOnJS, setIsUsingHoldGesture: callback3, voiceMessageAnimationState: store, VoiceMessageAnimationState: closure_1_19, startRecording: callback1 };
    fn.__closure = obj;
    fn.__workletHash = 15771181123252;
    fn.__initData = closure_1_33;
    const minDistanceResult = Gesture.Pan().enabled(!callback).minDistance(0);
    const fn2 = function t(translationY) {
      if (store.get()) {
        if (translationY.translationY <= -40) {
          if (translationY.absoluteX >= closure_14) {
            callback(closure_1_19.LOCKING);
          }
        }
        if (translationY.absoluteX < closure_14) {
          callback(closure_1_19.CANCELLING);
        } else if (translationY.absoluteX >= tmp3) {
          callback(closure_1_19.SENDING);
        }
      }
    };
    obj = { isGestureActiveValue: closure_5, LOCK_THRESHOLD: 40, cancelThresholdX: c14, handleUpdateValue: callback2, VoiceMessageAnimationState: closure_1_19 };
    fn2.__closure = obj;
    fn2.__workletHash = 9262214665783;
    fn2.__initData = closure_1_32;
    const onTouchesDownResult = Gesture.Pan().enabled(!callback).minDistance(0).onTouchesDown(fn);
    const fn3 = function e() {
      closure_1_0(closure_1_2[20]).runOnJS(closure_13)();
    };
    const onUpdateResult = Gesture.Pan().enabled(!callback).minDistance(0).onTouchesDown(fn).onUpdate(fn2);
    fn3.__closure = { runOnJS: callback(store[20]).runOnJS, handleFinalize: callback3 };
    fn3.__workletHash = 2411654680943;
    fn3.__initData = closure_1_31;
    return onUpdateResult.onFinalize(fn3);
  }, items10);
  obj = { gesture: memo, children: null };
  obj1 = { ref: sharedValue1(11825)().tooltipTargetRef, IconComponent: null, active: false, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null, disabled: null };
  const tmp21Result = tmp21(sharedValue(function*() {
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
          closure_1_13(false);
          const items = [, ];
          ({ LOCKED: arr[0], LOCKED: arr[1] } = closure_1_19);
          const result = c2.set(items);
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        c2 = tmp;
        throw tmp12;
      }
    }
  }), intl.string(require("../../../../intl/index.native.tsx").t.lwy6aX));
  obj1[1] = require("../../../../design/components/Icon/native/redesign/generated/MicrophoneIcon.tsx").MicrophoneIcon;
  const intl2 = require("../../../../intl/index.native.tsx").intl;
  obj1[3] = intl2.string(require("../../../../intl/index.native.tsx").t.lwy6aX);
  obj1[4] = accessibilityActions;
  obj1[5] = onAccessibilityAction;
  obj1[6] = disabled;
  obj[1] = jsx(sharedValue1(11806), { ref: sharedValue1(11825)().tooltipTargetRef, IconComponent: null, active: false, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null, disabled: null });
  return jsx(require("../../../../../_runtime/05652_LegacyBaseButton.js").GestureDetector, { gesture: memo, children: null });
});
let result = require("set").fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageButton.tsx");

export default memoResult;