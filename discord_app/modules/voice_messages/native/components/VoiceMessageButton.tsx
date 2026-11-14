// discord_app/modules/voice_messages/native/components/VoiceMessageButton.tsx
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import _mod1708 from "../../../../../_runtime/metro/01708__.js";
import RootNavigationRef from "../../../main_tabs_v2/RootNavigationRef.native.tsx";
import LegacyBaseButton from "../../../../../_runtime/05598_LegacyBaseButton.js";
import isChannelFocused from "../../../panels/isChannelFocused.native.tsx";
import useAccessibilityPressDefault from "../../../a11y/native/useAccessibilityPress.tsx";
import useChatWidthDefault from "../../../chat/native/useChatWidth.tsx";
import ChatInputActionButtonDefault from "../../../chat_input/native/action_buttons/ChatInputActionButton.tsx";
import VoiceMessageUtils from "../VoiceMessageUtils.tsx";
import useVoiceMessageTooltipDefault from "../useVoiceMessageTooltip.tsx";
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
  if (colors.getState().showRecordingOverlay) {
    VoiceMessageUtils.triggerHaptic();
  }
}
let AppState = fn(17).AppState;
const VoiceMessagesUIStore = fn(14570);
({ setIsVoiceMessageButtonMounted: closure_11, setIsUsingHoldGesture: closure_12, setVoiceMessageAnimationState: map1, showVoiceMessagesTooltip: closure_14, useVoiceMessagesUIStore: closure_15, setShowRecordingOverlay: closure_16, hideVoiceMessagesTooltip: closure_17 } = VoiceMessagesUIStore);
const VoiceMessageConstants = fn(14571);
({ VoiceMessageAnimationState: closure_18, VOICE_RECORDING_MIN_DURATION_MILLIS: closure_19 } = VoiceMessageConstants);
const Constants = fn(1072);
({ ComponentActions: closure_20, ComponentActionsKeyed: closure_21, MessageFlags: closure_22 } = Constants);
const MessageSendLocation = fn(5311).MessageSendLocation;
const NativePermissionTypes = fn(6902).NativePermissionTypes;
const jsx = fn(21).jsx;
let closure_27 = { code: "(function VoiceMessageButtonTsx1(newValue){let[voiceMessageAnimationState,scheduleOnRN,triggerHapticGuarded]=this.__closure;if(voiceMessageAnimationState.get()[1]===newValue)return;const prevValue=voiceMessageAnimationState.get()[1];voiceMessageAnimationState.set([prevValue,newValue]);scheduleOnRN(triggerHapticGuarded);})" };
let closure_28 = { code: "(function VoiceMessageButtonTsx2(e){let[isGestureActiveValue,scheduleOnRN,setIsUsingHoldGesture,voiceMessageAnimationState,VoiceMessageAnimationState,startRecording]=this.__closure;if(e.numberOfTouches>1)return;if(isGestureActiveValue.get())return;scheduleOnRN(setIsUsingHoldGesture,true);voiceMessageAnimationState.set([VoiceMessageAnimationState.SENDING,VoiceMessageAnimationState.SENDING]);scheduleOnRN(startRecording);})" };
let closure_29 = { code: "(function VoiceMessageButtonTsx3(e){let[isGestureActiveValue,LOCK_THRESHOLD,cancelThresholdX,handleUpdateValue,VoiceMessageAnimationState]=this.__closure;if(!isGestureActiveValue.get())return;if(e.translationY<=-LOCK_THRESHOLD&&e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.LOCKING);}else if(e.absoluteX<cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.CANCELLING);}else if(e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.SENDING);}})" };
let closure_30 = { code: "(function VoiceMessageButtonTsx4(){let[scheduleOnRN,handleFinalize]=this.__closure;scheduleOnRN(handleFinalize);})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageButton.tsx");

export default noop.memo(function VoiceMessageButton(disabled) {
  disabled = disabled.disabled;
  _require = disabled;
  const channelId = disabled.channelId;
  let first;
  noop = undefined;
  let callback2;
  let callback3;
  c14 = undefined;
  const isMobileRTCV2Enabled = require("MobileRTCV2Experiment").useIsMobileRTCV2Enabled("VoiceMessageButton");
  const tmp4 = closure_15((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
  let obj = require("MobileRTCV2Experiment");
  const sharedValue = require("../../../../../_runtime/metro/01655__.js").useSharedValue(0);
  const ref = noop.useRef(false);
  _require = ref;
  let obj2 = require("../../../../../_runtime/metro/01655__.js");
  const sharedValue1 = require("../../../../../_runtime/metro/01655__.js").useSharedValue(false);
  items = [ref, sharedValue1];
  let items1 = [
    ref,
    sharedValue1,
    noop.useCallback((current) => {
      c0.current = current;
      const result = _undefined2.set(current);
    }, items)
  ];
  let tmp8 = first(items1, 3);
  first = tmp8[0];
  noop = tmp10;
  AppState = tmp11;
  closure_7 = noop.useRef(true);
  closure_8 = noop.useRef(AppState.currentState);
  closure_9 = noop.useRef(null);
  const tmp13 = useChatWidthDefault();
  _require = sharedValue(function*(arg0) {
    yield c0(14662).endAudioRecording();
    closure_129_2 = value;
    const data = closure_129_2.data;
    const startTimeMillis = closure_129_2.startTimeMillis;
    closure_1_6(false);
    if (closure_129_0) {
      closure_1_9.current = closure_129_1;
      let result = c0(14662).emitVoiceMessageRecorded(closure_129_1, data.durationSecs, startTimeMillis);
    }
    if (data.durationSecs < expandedHeight / 1000) {
      const result1 = c0(14662).emitVoiceMessageRecorded(c0(14176).VoiceMessageRecordingResult.CANCELLED_DURATION, data.durationSecs, startTimeMillis);
      _undefined();
    }
    const result2 = c0(14662).emitVoiceMessageRecorded(c0(14176).VoiceMessageRecordingResult.SENT, data.durationSecs, startTimeMillis);
    const channel2 = channel.getChannel(closure_1);
    if (null != channel2) {
      const cloudUpload = new c0(8873).CloudUpload({ uri: data.filename, originalUri: data.filename, mimeType: "audio/ogg", filename: "voice-message.ogg", platform: c0(8850).UploadPlatform.REACT_NATIVE, durationSecs: data.durationSecs, waveform: data.waveform }, channel2.id);
      items = [cloudUpload];
      closure_129_6 = items;
      const pendingReply2 = pendingReply.getPendingReply(closure_1);
      const sendMessageOptionsForReply = tmp2(8660).getSendMessageOptionsForReply(pendingReply2);
      { uri: data.filename, originalUri: data.filename, mimeType: "audio/ogg", filename: "voice-message.ogg", platform: c0(8850).UploadPlatform.REACT_NATIVE, durationSecs: data.durationSecs, waveform: data.waveform };
      const id = channel2.id;
      const obj17 = { flags: constants3.IS_VOICE_MESSAGE, location: constants4.VOICE_MESSAGE, attachmentsToUpload: closure_129_6, scheduledTimestamp: null, onAttachmentUploadError: null };
      const scheduledMessage = callback.getScheduledMessage(closure_1);
      let scheduledTimestamp;
      if (scheduledMessage != null) {
        scheduledTimestamp = scheduledMessage.scheduledTimestamp;
      }
      obj17.scheduledTimestamp = scheduledTimestamp;
      obj17.onAttachmentUploadError = function onAttachmentUploadError(file, code, reason) {
        const obj = closure_0(closure_2[25]);
        const result = obj.handleUploadMessageAttachmentsErrors({ file, guildId: guildId.getGuildId(), analyticsLocations: [], code, reason });
      };
      const merged = Object.assign(sendMessageOptionsForReply);
      tmp2(8660).sendMessage(id, { content: "", tts: false, invalidEmojis: [], validNonShortcutEmojis: [] }, undefined, obj17);
      tmp2(8660);
      c0(12641).deletePendingReply(closure_1);
      c0(12641);
      tmp2(8660);
    }
    yield "HermesInternal";
    closure_1 = tmp2;
    ({ isCancelling: closure_129_0, cancelReason } = closure_0);
    if (cancelReason === undefined) {
      cancelReason = c0(14176).VoiceMessageRecordingResult.CANCELLED_USER_REQUESTED;
    }
    closure_129_1 = cancelReason;
    return "Path";
  });
  let items2 = [channelId, tmp8[2]];
  const callback = noop.useCallback(function() {
    const self = this;
    const apply = c0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  let items3 = [channelId, callback];
  const effect = noop.useEffect(() => {
    let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.subscribeKeyed(constants2.VOICE_MESSAGE_SEND, c1, callback);
    return () => {
      const ComponentDispatch = c0(c2[27]).ComponentDispatch;
      ComponentDispatch.unsubscribeKeyed(constants2.VOICE_MESSAGE_SEND, _undefined2, callback);
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
        tmp5 = ref2.current !== c0(dependencyMap[21]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND;
      }
      if (!tmp5) {
        const obj2 = { text: null, variant: "critical", position: "bottom" };
        const intl = c0(dependencyMap[29]).intl;
        obj2.text = intl.string(c0(dependencyMap[29]).t.JM7Y2D);
        c1(dependencyMap[28]).open("VOICE_MESSAGE_CANCELLED_ON_BACKGROUND", obj2);
        ref2.current = null;
        const obj = c1(dependencyMap[28]);
      }
      ref.current = event;
    });
    return () => {
      closure_0.remove();
    };
  }, []);
  let items4 = [first, tmp8[2]];
  const effect3 = noop.useEffect(() => {
    closure_7.current = true;
    const current = first.current;
    return () => {
      closure_7.current = false;
      state = colors.getState();
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
  let obj4 = require("../../../../../_runtime/metro/01655__.js");
  const tmp14 = sharedValue;
  let items5 = [first, tmp8[2], channelId];
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
              const obj5 = { value: cancel(14662).endAudioRecording(), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_0 = value;
            const result = cancel(14662).emitVoiceMessageRecorded(cancel(14176).VoiceMessageRecordingResult.CANCELLED_GESTURE_CONFLICT, closure_128_0.data.durationSecs, closure_128_0.startTimeMillis);
            const obj = cancel(14662);
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
        if (focusedChannelId !== c1) {
          cancel();
        }
      } else {
        cancel();
      }
    }
    cancel();
    let result = closure_7.addReactChangeListener(handleActionSheetChange);
    let rootNavigationRef = _undefined(_undefined3[31]).getRootNavigationRef();
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
    state({ currWaveHeight: sharedValue });
  }, items6);
  const items7 = [first, tmp8[2], channelId];
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
            state2 = undefined;
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
                  if (null != channel.getChannel(c1)) {
                    closure_6(true);
                    const ComponentDispatch = closure_0(tmp54[27]).ComponentDispatch;
                    ComponentDispatch.dispatch(constants2.VOICE_MESSAGE_BUTTON_PRESSED);
                    c4 = 2;
                    c5 = 1;
                    const obj6 = { value: tmp3(tmp54[32]).requestPermission(constants3.AUDIO), done: false };
                    return obj6;
                  }
                }
              }
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_129_6(false);
          const result = closure_0(tmp54[33]).showVoiceRecordingFailed();
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
            const voiceMessageAnimationState = state2.voiceMessageAnimationState;
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
  const items8 = [closure_27, tmp4, require("../../../../../_runtime/metro/01708__.js").scheduleOnRN, triggerHapticGuarded];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp24, tmp25, tmp26, tmp27] = items8;
  class VoiceMessageButtonTsx1 {
    constructor(arg0) {
      obj = closure_0;
      if (closure_0.get()[1] !== disabled) {
        items = [, ];
        items[0] = obj.get()[1];
        items[1] = disabled;
        result = obj.set(items);
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp4 = closure_1(closure_2);
      }
      return;
    }
  }
  const items9 = [tmp25, tmp26, tmp27];
  VoiceMessageButtonTsx1.__closure = items9;
  VoiceMessageButtonTsx1.__workletHash = 5239564128434;
  VoiceMessageButtonTsx1.__initData = tmp24;
  const items10 = [tmp4];
  callback2 = noop.useCallback(VoiceMessageButtonTsx1, items10);
  const items11 = [tmp4, first, callback, tmp8[2]];
  callback3 = obj3.useCallback(() => {
    if (first.current) {
      closure_6(false);
      const tmp6 = _undefined3.get()[1];
      if (constants.SENDING === tmp6) {
        callback({ isCancelling: false });
      } else if (constants.CANCELLING === tmp6) {
        callback({ isCancelling: true });
      } else if (constants.LOCKING === tmp6) {
        application_id(false);
        items = [, ];
        ({ LOCKING: arr[0], LOCKED: arr[1] } = constants);
        const result = _undefined3.set(items);
        _mod1708.scheduleOnRN(triggerHapticGuarded);
      } else {
        VoiceMessageUtils.endAudioRecording();
      }
    } else {
      VoiceMessageUtils.endAudioRecording();
    }
  }, items11);
  let obj5 = require("NavigationRouteUtils");
  const tmp12Result = useAccessibilityPressDefault;
  let intl = tmp(1113).intl;
  const tmp14Result = tmp14(function*() {
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
            if (c0) {
              c2 = 3;
            } else {
              c1 = 1;
              c2 = 1;
              const obj4 = { value: callback1(), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 !== 2) {
          callback2(false);
          items = [, ];
          ({ LOCKED: arr[0], LOCKED: arr[1] } = constants);
          const result = closure_128_2.set(items);
        }
        c2 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp13) {
        c2 = tmp;
        throw tmp13;
      }
    }
  });
  const sum = 0.5 * tmp13 + (useWindowDimensionsDefault().width - tmp13);
  c14 = sum;
  const items12 = [disabled, tmp8[1], tmp4, callback1, sum, callback2, callback3];
  ({ accessibilityActions, onAccessibilityAction } = tmp12Result(tmp14(function*() {
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
            if (c0) {
              c2 = 3;
            } else {
              c1 = 1;
              c2 = 1;
              const obj4 = { value: callback1(), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 !== 2) {
          callback2(false);
          items = [, ];
          ({ LOCKED: arr[0], LOCKED: arr[1] } = constants);
          const result = closure_128_2.set(items);
        }
        c2 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp13) {
        c2 = tmp;
        throw tmp13;
      }
    }
  }), intl.string(require("util").t.lwy6aX)));
  const memo = obj3.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(!c0);
    items = [closure_28, closure_5, _mod1708.scheduleOnRN, application_id, c2, constants, callback1];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
    class VoiceMessageButtonTsx2 {
      constructor(arg0) {
        value = arg0.numberOfTouches > 1;
        if (!value) {
          tmp2 = closure_0;
          value = closure_0.get();
        }
        if (!value) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          flag = true;
          tmp5 = closure_1(closure_2, true);
          tmp6 = closure_3;
          tmp7 = closure_4;
          items = [, ];
          ({ SENDING: arr[0], SENDING: arr[1] } = closure_4);
          result = closure_3.set(items);
          tmp9 = closure_5;
          tmp10 = closure_1(closure_5);
        }
        return;
      }
    }
    const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
    VoiceMessageButtonTsx2.__closure = items1;
    VoiceMessageButtonTsx2.__workletHash = 956711562734;
    VoiceMessageButtonTsx2.__initData = tmp5;
    const minDistanceResult = Gesture.Pan().enabled(!c0).minDistance(0);
    const items2 = [closure_29, closure_5, 40, c14, callback2, constants];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items2;
    class VoiceMessageButtonTsx3 {
      constructor(arg0) {
        if (closure_0.get()) {
          tmp = arg0;
          tmp2 = closure_1;
          if (arg0.translationY <= -closure_1) {
            tmp3 = closure_2;
            if (arg0.absoluteX >= closure_2) {
              tmp11 = closure_3;
              tmp12 = closure_4;
              tmp13 = closure_3(closure_4.LOCKING);
            }
          }
          if (arg0.absoluteX < closure_2) {
            tmp8 = closure_3;
            tmp9 = closure_4;
            tmp10 = closure_3(closure_4.CANCELLING);
          } else if (arg0.absoluteX >= tmp4) {
            tmp5 = closure_3;
            tmp6 = closure_4;
            tmp7 = closure_3(closure_4.SENDING);
          }
        }
        return;
      }
    }
    const items3 = [tmp13, tmp14, tmp15, tmp16, tmp17];
    VoiceMessageButtonTsx3.__closure = items3;
    VoiceMessageButtonTsx3.__workletHash = 8623483491566;
    VoiceMessageButtonTsx3.__initData = tmp12;
    const onTouchesDownResult = Gesture.Pan().enabled(!c0).minDistance(0).onTouchesDown(VoiceMessageButtonTsx2);
    const items4 = [closure_30, _mod1708.scheduleOnRN, callback3];
    c0 = undefined;
    c1 = undefined;
    [tmp18, tmp19, tmp20] = items4;
    class VoiceMessageButtonTsx4 {
      constructor() {
        tmp = closure_0(closure_1);
        return;
      }
    }
    const items5 = [tmp19, tmp20];
    VoiceMessageButtonTsx4.__closure = items5;
    VoiceMessageButtonTsx4.__workletHash = 7736461965009;
    VoiceMessageButtonTsx4.__initData = tmp18;
    return Gesture.Pan().enabled(!c0).minDistance(0).onTouchesDown(VoiceMessageButtonTsx2).onUpdate(VoiceMessageButtonTsx3).onFinalize(VoiceMessageButtonTsx4);
  }, items12);
  let obj6 = { gesture: memo, children: null };
  const obj7 = { ref: useVoiceMessageTooltipDefault().tooltipTargetRef, IconComponent: null, active: false, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null, disabled: null };
  const tmp12ResultResult = tmp12Result(tmp14(function*() {
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
            if (c0) {
              c2 = 3;
            } else {
              c1 = 1;
              c2 = 1;
              const obj4 = { value: callback1(), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 !== 2) {
          callback2(false);
          items = [, ];
          ({ LOCKED: arr[0], LOCKED: arr[1] } = constants);
          const result = closure_128_2.set(items);
        }
        c2 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp13) {
        c2 = tmp;
        throw tmp13;
      }
    }
  }), intl.string(require("util").t.lwy6aX));
  if (isMobileRTCV2Enabled) {
    let MicrophoneIcon = tmp(11071).WaveformIcon;
  } else {
    MicrophoneIcon = tmp(13048).MicrophoneIcon;
  }
  obj7.IconComponent = MicrophoneIcon;
  const intl2 = tmp(1113).intl;
  obj7.accessibilityLabel = intl2.string(require("util").t.lwy6aX);
  obj7.accessibilityActions = accessibilityActions;
  obj7.onAccessibilityAction = onAccessibilityAction;
  obj7.disabled = disabled;
  obj6.children = jsx(ChatInputActionButtonDefault, { ref: useVoiceMessageTooltipDefault().tooltipTargetRef, IconComponent: null, active: false, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null, disabled: null });
  return jsx(require("LegacyBaseButton").GestureDetector, { gesture: memo, children: null });
});