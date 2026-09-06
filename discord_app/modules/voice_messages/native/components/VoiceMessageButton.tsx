// discord_app/modules/voice_messages/native/components/VoiceMessageButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import RootNavigationRef from "../../../main_tabs_v2/RootNavigationRef.native.tsx";
import LegacyBaseButton from "../../../../../_runtime/06655_LegacyBaseButton.js";
import XSmallBoldIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallBoldIcon.tsx";
import isChannelFocused from "../../../panels/isChannelFocused.native.tsx";
import VoiceMessageUtils from "../VoiceMessageUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ActionSheetStore from "../../../action_sheet/native/ActionSheetStore.tsx";
import PendingReplyStore from "../../../replies/PendingReplyStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import DraftStore from "../../../../stores/DraftStore.tsx";

require = fn;
function VoiceMessageRecordingCancelledToastIcon() {
  let obj = { style: closure_27().icon, "aria-hidden": true, children: null };
  obj = { color: nativeDefault.colors.WHITE, size: "xs" };
  obj.children = jsx(XSmallBoldIcon.XSmallBoldIcon, { color: nativeDefault.colors.WHITE, size: "xs" });
  return <timestampProducer color={nativeDefault.colors.WHITE} size="xs" />;
}
function triggerHapticGuarded() {
  if (value2.getState().showRecordingOverlay) {
    VoiceMessageUtils.triggerHaptic();
  }
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, AppState: closure_7 } = get_ActivityIndicator);
const VoiceMessagesUIStore = fn(11960);
({
  setIsVoiceMessageButtonMounted: closure_12,
  setIsUsingHoldGesture: map1,
  setVoiceMessageAnimationState: closure_14,
  showVoiceMessagesTooltip: closure_15,
  useVoiceMessagesUIStore: closure_16,
  setShowRecordingOverlay: closure_17,
  hideVoiceMessagesTooltip: closure_18,
} = VoiceMessagesUIStore);
const VoiceMessageConstants = fn(11961);
({ VoiceMessageAnimationState: closure_19, VOICE_RECORDING_MIN_DURATION_MILLIS: closure_20 } = VoiceMessageConstants);
const Constants = fn(1074);
({ ComponentActions: closure_21, ComponentActionsKeyed: closure_22, MessageFlags: closure_23 } = Constants);
const MessageSendLocation = fn(4553).MessageSendLocation;
const NativePermissionTypes = fn(4770).NativePermissionTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { icon: null };
obj = {
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL,
  borderRadius: nativeDefault.radii.round,
  padding: nativeDefault.space.PX_4,
  marginLeft: nativeDefault.space.PX_4,
};
obj.icon = obj;
let closure_27 = createStyles.createStyles(obj);
const __initData = {
  code: "function VoiceMessageButtonTsx1(newValue){const{voiceMessageAnimationState,runOnJS,triggerHapticGuarded}=this.__closure;if(voiceMessageAnimationState.get()[1]===newValue)return;const prevValue=voiceMessageAnimationState.get()[1];voiceMessageAnimationState.set([prevValue,newValue]);runOnJS(triggerHapticGuarded)();}",
};
let closure_31 = {
  code: "function VoiceMessageButtonTsx2(){const{runOnJS,handleFinalize}=this.__closure;runOnJS(handleFinalize)();}",
};
let closure_32 = {
  code: "function VoiceMessageButtonTsx3(e){const{isGestureActiveValue,LOCK_THRESHOLD,cancelThresholdX,handleUpdateValue,VoiceMessageAnimationState}=this.__closure;if(!isGestureActiveValue.get())return;if(e.translationY<=-LOCK_THRESHOLD&&e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.LOCKING);}else if(e.absoluteX<cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.CANCELLING);}else if(e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.SENDING);}}",
};
let closure_33 = {
  code: "function VoiceMessageButtonTsx4(e){const{isGestureActiveValue,runOnJS,setIsUsingHoldGesture,voiceMessageAnimationState,VoiceMessageAnimationState,startRecording}=this.__closure;if(e.numberOfTouches>1)return;if(isGestureActiveValue.get())return;runOnJS(setIsUsingHoldGesture)(true);voiceMessageAnimationState.set([VoiceMessageAnimationState.SENDING,VoiceMessageAnimationState.SENDING]);runOnJS(startRecording)();}",
};
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
  let obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue(0);
  const ref = noop.useRef(false);
  _require = ref;
  let obj1 = require("ReanimatedRexport");
  const sharedValue1 = obj1.useSharedValue(false);
  let items = [ref, sharedValue1];
  const items1 = [
    ref,
    sharedValue1,
    noop.useCallback((current) => {
      closure_0.current = current;
      const result = sharedValue1.set(current);
    }, items),
  ];
  let tmp5 = first(items1, 3);
  first = tmp5[0];
  noop = tmp7;
  closure_6 = tmp8;
  currentState = noop.useRef(true);
  closure_8 = noop.useRef(currentState.currentState);
  closure_9 = noop.useRef(null);
  const tmp9 = sharedValue1(11527)();
  _require = sharedValue(function* (arg0) {
    let obj6 = closure_0(12256);
    yield obj6.endAudioRecording();
    closure_129_2 = value;
    const data = closure_129_2.data;
    const startTimeMillis = closure_129_2.startTimeMillis;
    closure_1_6(false);
    if (closure_129_0) {
      closure_1_9.current = closure_129_1;
      let result = closure_0(12256).emitVoiceMessageRecorded(closure_129_1, data.durationSecs, startTimeMillis);
    }
    if (data.durationSecs < closure_2_20 / 1000) {
      const result1 = closure_0(12256).emitVoiceMessageRecorded(
        closure_0(11873).VoiceMessageRecordingResult.CANCELLED_DURATION,
        data.durationSecs,
        startTimeMillis,
      );
      __initData();
    }
    const result2 = closure_0(12256).emitVoiceMessageRecorded(
      closure_0(11873).VoiceMessageRecordingResult.SENT,
      data.durationSecs,
      startTimeMillis,
    );
    const channel = callback.getChannel(closure_1);
    if (null != channel) {
      obj6 = {
        uri: data.filename,
        originalUri: data.filename,
        mimeType: "audio/ogg",
        filename: "voice-message.ogg",
        platform: closure_0(5128).UploadPlatform.REACT_NATIVE,
        durationSecs: data.durationSecs,
        waveform: data.waveform,
      };
      const cloudUpload = new closure_0(5127).CloudUpload(obj6, channel.id);
      const items = [cloudUpload];
      closure_129_6 = items;
      const pendingReply2 = pendingReply.getPendingReply(closure_1);
      const sendMessageOptionsForReply = sharedValue1(7456).getSendMessageOptionsForReply(pendingReply2);
      const id = channel.id;
      const obj8 = {
        flags: constants3.IS_VOICE_MESSAGE,
        location: constants4.VOICE_MESSAGE,
        attachmentsToUpload: closure_129_6,
        scheduledTimestamp: null,
        onAttachmentUploadError: null,
      };
      const scheduledMessage = callback1.getScheduledMessage(closure_1);
      let scheduledTimestamp;
      if (scheduledMessage != null) {
        scheduledTimestamp = scheduledMessage.scheduledTimestamp;
      }
      obj8.scheduledTimestamp = scheduledTimestamp;
      obj8.onAttachmentUploadError = function onAttachmentUploadError(file, code, reason) {
        closure_0(closure_2[27]);
        const obj = { file, guildId: guildId.getGuildId(), analyticsLocations: [], code, reason };
        const result = obj.handleUploadMessageAttachmentsErrors(obj);
      };
      const merged = Object.assign(sendMessageOptionsForReply);
      sharedValue1(7456).sendMessage(
        id,
        { content: "", tts: false, invalidEmojis: [], validNonShortcutEmojis: [] },
        undefined,
        obj8,
      );
      sharedValue1(7456);
      closure_0(11669).deletePendingReply(closure_1);
      sharedValue1(7456);
      closure_0(11669);
    }
    yield "HermesInternal";
    closure_1 = tmp2;
    ({ isCancelling: closure_129_0, cancelReason } = closure_0);
    if (cancelReason === undefined) {
      cancelReason = closure_0(11873).VoiceMessageRecordingResult.CANCELLED_USER_REQUESTED;
    }
    closure_129_1 = cancelReason;
    return "PX_16";
  });
  const items2 = [channelId, tmp5[2]];
  const callback = noop.useCallback(function () {
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
        sharedValue1(dependencyMap[30]);
        const obj = { key: "VOICE_MESSAGE_CANCELLED_ON_BACKGROUND", content: null, icon: null, position: "bottom" };
        const intl = closure_0(dependencyMap[31]).intl;
        obj.content = intl.string(closure_0(dependencyMap[31]).t.JM7Y2D);
        obj.icon = function icon() {
          return closure_1_26(closure_1_28, {});
        };
        obj.open(obj);
        ref2.current = null;
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
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
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
              let obj2 = cancel(12256);
              c2 = 1;
              c3 = 1;
              const obj1 = { value: obj2.endAudioRecording(), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_0 = value;
            obj = cancel(12256);
            const result = obj.emitVoiceMessageRecorded(
              cancel(11873).VoiceMessageRecordingResult.CANCELLED_GESTURE_CONFLICT,
              closure_128_0.data.durationSecs,
              closure_128_0.startTimeMillis,
            );
          }
          c3 = 3;
          obj2 = { value, done: true };
          return obj2;
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
  const callback1 = noop.useCallback(
    sharedValue(function* () {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = tmp7;
              closure_128_0 = undefined;
              let state2;
              if (
                !(function isNormalModalOpen() {
                  if (obj.isModalOpen()) {
                    let tmpResult = closure_1_0(dependencyMap[17]);
                    const openModalKey = tmpResult.getOpenModalKey();
                    let tmp5 = null == openModalKey;
                    if (!tmp5) {
                      tmpResult = closure_1_0(dependencyMap[18]);
                      tmp5 = !tmpResult.isVoiceChannelModalKey(openModalKey);
                    }
                    return tmp5;
                  } else {
                    return false;
                  }
                  obj = closure_1_0(dependencyMap[17]);
                })()
              ) {
                if (ref.current) {
                  if (!open.isOpen()) {
                    if (null != channel.getChannel(sharedValue1)) {
                      closure_6(true);
                      const ComponentDispatch = closure_0(tmp54[29]).ComponentDispatch;
                      ComponentDispatch.dispatch(constants2.VOICE_MESSAGE_BUTTON_PRESSED);
                      c4 = 2;
                      c5 = 1;
                      let obj1 = { value: tmp3(tmp54[34]).requestPermission(constants3.AUDIO), done: false };
                      return obj1;
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
            const obj2 = { value: undefined, done: true };
            return obj2;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else if (value) {
              if (closure_129_4.current) {
                closure_1_18();
                const _performance = performance;
                closure_128_0 = performance.now();
                closure_1_17(true);
                c3 = 1;
                obj3 = closure_0(tmp54[19]);
                c4 = 3;
                c5 = 1;
                const obj4 = { value: obj3.startAudioRecording(closure_128_0), done: false };
                return obj4;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
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
                  obj = closure_0(tmp54[19]);
                  obj.endAudioRecording();
                }
              }
            }
            obj1 = closure_0(tmp54[19]);
            obj1.triggerHaptic();
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
    }),
    items7,
  );
  class W {
    constructor(arg0) {
      obj = closure_2;
      if (closure_2.get()[1] !== disabled) {
        items = [,];
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
  obj = { voiceMessageAnimationState: tmp, runOnJS: require("ReanimatedRexport").runOnJS, triggerHapticGuarded };
  W.__closure = obj;
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
        const items = [,];
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
  let obj3 = require("NavigationRouteUtils");
  const tmp21 = sharedValue1(9759);
  let intl = require("util").intl;
  const tmp22 = sharedValue(function* () {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp4;
            c1 = 1;
            c2 = 1;
            const obj1 = { value: callback1(), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          callback3(false);
          const items = [,];
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
  const sum = 0.5 * tmp9 + (sharedValue1(1477)().width - tmp9);
  c14 = sum;
  const items10 = [disabled, tmp5[1], tmp, callback1, sum, callback2, callback3];
  ({ accessibilityActions, onAccessibilityAction } = tmp21(
    sharedValue(function* () {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = tmp4;
              c1 = 1;
              c2 = 1;
              const obj1 = { value: callback1(), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            callback3(false);
            const items = [,];
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
    }),
    intl.string(require("util").t.lwy6aX),
  ));
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
        const items = [,];
        ({ SENDING: arr[0], SENDING: arr[1] } = constants);
        const result = voiceMessageAnimationState.set(items);
        const obj = closure_0(dependencyMap[20]);
        closure_0(dependencyMap[20]).runOnJS(callback1)();
        const obj2 = closure_0(dependencyMap[20]);
      }
    };
    let obj = {
      isGestureActiveValue,
      runOnJS: ReanimatedRexport.runOnJS,
      setIsUsingHoldGesture,
      voiceMessageAnimationState,
      VoiceMessageAnimationState,
      startRecording: callback1,
    };
    fn.__closure = obj;
    fn.__workletHash = 15771181123252;
    fn.__initData = __initData3;
    const minDistanceResult = Gesture.Pan().enabled(!closure_0).minDistance(0);
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
    obj = {
      isGestureActiveValue,
      LOCK_THRESHOLD: 40,
      cancelThresholdX,
      handleUpdateValue: callback2,
      VoiceMessageAnimationState,
    };
    fn2.__closure = obj;
    fn2.__workletHash = 9262214665783;
    fn2.__initData = __initData2;
    const onTouchesDownResult = Gesture.Pan().enabled(!closure_0).minDistance(0).onTouchesDown(fn);
    const fn3 = function e() {
      closure_0(dependencyMap[20]).runOnJS(callback3)();
    };
    const onUpdateResult = Gesture.Pan().enabled(!closure_0).minDistance(0).onTouchesDown(fn).onUpdate(fn2);
    fn3.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleFinalize: callback3 };
    fn3.__workletHash = 2411654680943;
    fn3.__initData = __initData;
    return onUpdateResult.onFinalize(fn3);
  }, items10);
  obj = { gesture: memo, children: null };
  obj1 = {
    ref: sharedValue1(12258)().tooltipTargetRef,
    IconComponent: null,
    active: false,
    accessibilityLabel: null,
    accessibilityActions: null,
    onAccessibilityAction: null,
    disabled: null,
  };
  const tmp21Result = tmp21(
    sharedValue(function* () {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = tmp4;
              c1 = 1;
              c2 = 1;
              const obj1 = { value: callback1(), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            callback3(false);
            const items = [,];
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
    }),
    intl.string(require("util").t.lwy6aX),
  );
  obj1.IconComponent = require("MicrophoneIcon").MicrophoneIcon;
  const intl2 = require("util").intl;
  obj1.accessibilityLabel = intl2.string(require("util").t.lwy6aX);
  obj1.accessibilityActions = accessibilityActions;
  obj1.onAccessibilityAction = onAccessibilityAction;
  obj1.disabled = disabled;
  obj.children = jsx(sharedValue1(12239), {
    ref: sharedValue1(12258)().tooltipTargetRef,
    IconComponent: null,
    active: false,
    accessibilityLabel: null,
    accessibilityActions: null,
    onAccessibilityAction: null,
    disabled: null,
  });
  return jsx(require("LegacyBaseButton").GestureDetector, { gesture: memo, children: null });
});
