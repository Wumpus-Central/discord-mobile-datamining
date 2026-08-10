// discord_app/modules/calls/native/TelecomManager.android.tsx
import callConnect from "callConnect";
import get_ActivityIndicator from "initialize";
import Soundpacks from "Soundpacks";
import reset from "reset";
import fetchFingerprint from "fetchFingerprint";
import closure_8 from "callConnect";
import ensureGuildLoaded from "ensureGuildLoaded";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import DesktopNotificationTypes from "DesktopNotificationTypes";
import createRTCConnection from "createRTCConnection";
import upsertRelationship from "upsertRelationship";
import initialize from "initialize";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ApplicationStreamStates } from "ME";
import { MediaEngineContextTypes } from "DesktopSources";
import "initialize";
import { enforcing } from "../../../../discord_common/js/packages/rtn-codegen/js/NativeTelecomModule.tsx";
import { trackDeviceChanged } from "../../../actions/AudioActionCreators.tsx";
import { computeChannelName } from "../../channel/useChannelName.tsx";
import { isMetaQuest } from "../../device/MetaQuestUtils.android.tsx";
import { createSoundForPack } from "../../sound_playback/SoundUtils.tsx";

let NativeEventEmitter;
let c4;
let require = arg1;
({ DeviceEventEmitter: c4, NativeEventEmitter } = get_ActivityIndicator);
let c18 = "telecom-end-call-requested";
let c19 = "telecom-set-foreground-requested";
let c20 = "telecom-mic-mute-requested";
let c21 = "telecom-screen-share-requested";
let c22 = "telecom-incoming-call-answered";
let c23 = "telecom-incoming-call-rejected";
let c24 = "telecom-answer-call-requested";
let obj = new require("reset")("TelecomManager");
obj.enableNativeLogger(true);
let closure_26 = { Ringing: 0, [0]: "Ringing", Connecting: 1, [1]: "Connecting", Connected: 2, [2]: "Connected" };
const nativeEventEmitter = new NativeEventEmitter(require("enforcing"));
class TelecomManager extends tmp5 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    map = new Map();
    result = map.set(createRTCConnection, () => applyArgumentsResult.reconcileTelecomState());
    result1 = result.set(_detectH265HardwareDecode, () => applyArgumentsResult.handleMuteStoreChange());
    result2 = result1.set(reset, () => applyArgumentsResult.handleScreenShareStoreChange());
    applyArgumentsResult.stores = result2.set(closure_8, () => applyArgumentsResult.handleIncomingCallStoreChange());
    applyArgumentsResult.actions = {
      CALL_CREATE(arg0) {
            return applyArgumentsResult.handleCallCreate(arg0);
          },
      CALL_UPDATE(arg0) {
            return applyArgumentsResult.handleCallUpdate(arg0);
          },
      CALL_DELETE(arg0) {
            return applyArgumentsResult.handleCallDelete(arg0);
          }
    };
    applyArgumentsResult.currentCall = null;
    applyArgumentsResult.isInitialized = false;
    applyArgumentsResult.lastMuteState = null;
    set = new Set();
    applyArgumentsResult.registeredIncomingCallIds = set;
    applyArgumentsResult.lastScreenShareActive = null;
    applyArgumentsResult.pendingScreenShareOffSyncTimeout = null;
    applyArgumentsResult.reconcilePromise = null;
    applyArgumentsResult.needsReconcile = false;
    applyArgumentsResult.hostDestroySubscription = null;
    applyArgumentsResult.pendingMutePreference = null;
    applyArgumentsResult.ringtone = null;
    applyArgumentsResult.handleHostDestroy = function handleHostDestroy() {
      if (applyArgumentsResult.isEnabled()) {
        if (null != obj.currentCall) {
          if (obj.currentCall.state === outer1_26.Ringing) {
            outer1_25.info("Activity destroyed with ringing call, cancelling incoming call");
            obj.cancelIncomingCall(obj.currentCall.channelId);
          } else {
            outer1_25.info("Activity destroyed with active call, disconnecting from voice channel");
            outer1_1(outer1_2[19]).disconnect();
            const obj2 = outer1_1(outer1_2[19]);
          }
        }
      }
    };
    applyArgumentsResult.handleEndCallRequested = function handleEndCallRequested(callId) {
      outer1_25.info("Received end call request from Call Bar:", callId.callId);
      if (null != applyArgumentsResult.currentCall) {
        if (callId.callId === obj2.currentCall.channelId) {
          if (obj2.currentCall.state === outer1_26.Ringing) {
            outer1_25.info("Rejecting ringing call from Call Bar:", obj2.currentCall.channelId);
            outer1_1(outer1_2[20]).stopRinging(obj2.currentCall.channelId);
            obj2.clearCall(obj2.currentCall.channelId);
            const obj4 = outer1_1(outer1_2[20]);
          } else {
            outer1_1(outer1_2[19]).disconnect();
            const obj3 = outer1_1(outer1_2[19]);
          }
          return tmp6;
        }
      }
    };
    applyArgumentsResult.handleSetForegroundRequested = function handleSetForegroundRequested(callId) {
      outer1_25.info("Received set foreground request from Call Bar");
      if (null != applyArgumentsResult.currentCall) {
        if (callId.callId === tmp2.currentCall.channelId) {
          const channel = outer1_9.getChannel(tmp2.currentCall.channelId);
          if (null != channel) {
            const result = applyArgumentsResult(outer1_2[21]).navigateToVoiceChannel(channel, "Call Bar");
            const obj = applyArgumentsResult(outer1_2[21]);
          }
        }
      }
    };
    applyArgumentsResult.handleMicMuteRequested = function handleMicMuteRequested(callId) {
      outer1_25.info("Received mic mute request from Call Bar:", callId.callId, "isMuted:", callId.isMuted);
      if (tmp3) {
        if (!tmp5) {
          tmp2.pendingMutePreference = callId.isMuted;
        }
        if (outer1_10.isSelfMute() !== callId.isMuted) {
          outer1_25.info("Updating Call Bar -> Discord mute state:", callId.isMuted);
          outer1_1(outer1_2[22]).toggleSelfMute();
          const obj2 = outer1_1(outer1_2[22]);
        }
        tmp5 = tmp2.currentCall.state !== outer1_26.Ringing && tmp2.currentCall.state !== tmp4.Connecting;
      }
    };
    applyArgumentsResult.handleScreenShareRequested = function handleScreenShareRequested(callId) {
      outer1_25.info("Received screen share request from Call Bar:", callId.callId, "isEnabled:", callId.isEnabled);
      if (null != applyArgumentsResult.currentCall) {
        if (callId.callId === tmp2.currentCall.channelId) {
          const channel = outer1_9.getChannel(tmp2.currentCall.channelId);
          if (null != channel) {
            const currentUserActiveStream = outer1_6.getCurrentUserActiveStream();
            let tmp4 = null != currentUserActiveStream;
            if (tmp4) {
              tmp4 = currentUserActiveStream.state === outer1_16.ACTIVE;
            }
            if (callId.isEnabled) {
              if (!tmp4) {
                const videoPermission = applyArgumentsResult(outer1_2[23]).getVideoPermission(channel);
                const obj2 = applyArgumentsResult(outer1_2[23]);
                const tmp5 = applyArgumentsResult;
                const tmp6 = outer1_2;
                if (obj3.getOSRequirement()) {
                  if (videoPermission) {
                    obj.info("Starting screen share from Call Bar");
                    tmp5(tmp6[24]).startStream();
                    const tmp5Result = tmp5(tmp6[24]);
                  } else {
                    obj.warn("Cannot start screen share from Call Bar: user lacks streaming permission in this channel");
                  }
                } else {
                  obj.warn("Cannot start screen share from Call Bar: OS version does not meet requirements");
                }
                obj3 = applyArgumentsResult(outer1_2[24]);
              }
            }
            const isEnabled = callId.isEnabled;
            let tmp12 = !isEnabled;
            if (!isEnabled) {
              tmp12 = tmp4;
            }
            if (tmp12) {
              obj.info("Stopping screen share from Call Bar");
              applyArgumentsResult(outer1_2[24]).stopScreenshare();
              const obj5 = applyArgumentsResult(outer1_2[24]);
            }
          }
        }
      }
    };
    applyArgumentsResult.handleAnswerCallRequested = function handleAnswerCallRequested(callId) {
      outer1_25.info("Received answer call request from Call Bar:", callId.callId);
      if (tmp2) {
        if (obj2.currentCall.state === outer1_26.Ringing) {
          obj2.stopRingtone();
          obj2.currentCall.state = tmp3.Connecting;
          obj.info("Answering incoming call, joining voice channel:", obj2.currentCall.channelId);
          const voiceChannel = outer1_1(outer1_2[19]).selectVoiceChannel(obj2.currentCall.channelId);
          const obj3 = outer1_1(outer1_2[19]);
        } else {
          obj.warn("Answer requested but call is not ringing:", obj2.currentCall.state);
        }
      }
    };
    applyArgumentsResult.handleCallCreate = function handleCallCreate(channelId) {
      let isEnabledResult = applyArgumentsResult.isEnabled();
      if (isEnabledResult) {
        isEnabledResult = applyArgumentsResult(outer1_2[25]).isMetaQuest();
        const obj2 = applyArgumentsResult(outer1_2[25]);
      }
      if (isEnabledResult) {
        applyArgumentsResult.processIncomingRing(channelId.channelId, channelId.ongoingRings);
      }
    };
    applyArgumentsResult.handleCallUpdate = function handleCallUpdate(channelId) {
      let isEnabledResult = applyArgumentsResult.isEnabled();
      if (isEnabledResult) {
        isEnabledResult = applyArgumentsResult(outer1_2[25]).isMetaQuest();
        const obj2 = applyArgumentsResult(outer1_2[25]);
      }
      if (isEnabledResult) {
        applyArgumentsResult.processIncomingRing(channelId.channelId, channelId.ongoingRings);
      }
    };
    applyArgumentsResult.handleCallDelete = function handleCallDelete(channelId) {
      let isEnabledResult = applyArgumentsResult.isEnabled();
      if (isEnabledResult) {
        isEnabledResult = applyArgumentsResult(outer1_2[25]).isMetaQuest();
        const obj2 = applyArgumentsResult(outer1_2[25]);
      }
      if (isEnabledResult) {
        const currentCall = obj.currentCall;
        channelId = undefined;
        if (currentCall != null) {
          channelId = currentCall.channelId;
        }
        isEnabledResult = channelId === channelId.channelId;
      }
      if (isEnabledResult) {
        isEnabledResult = obj.isPendingIncomingCall(obj.currentCall);
      }
      if (isEnabledResult) {
        outer1_25.info("Pending incoming call deleted, cancelling incoming call:", channelId.channelId);
        obj.cancelIncomingCall(channelId.channelId);
      }
    };
    applyArgumentsResult.handleIncomingCallAnswered = function handleIncomingCallAnswered(callId) {
      outer1_25.info("Received incoming call answered from telecom:", callId.callId);
      const registeredIncomingCallIds = applyArgumentsResult.registeredIncomingCallIds;
      registeredIncomingCallIds.delete(callId.callId);
      const obj = outer1_1(outer1_2[18]);
      outer1_1(outer1_2[18]).endCall(callId.callId).catch((arg0) => {
        logger.warn("Failed to end answered telecom call:", arg0);
      });
      const endCallResult = outer1_1(outer1_2[18]).endCall(callId.callId);
      const voiceChannel = outer1_1(outer1_2[19]).selectVoiceChannel(callId.callId);
    };
    applyArgumentsResult.handleIncomingCallRejected = function handleIncomingCallRejected(callId) {
      outer1_25.info("Received incoming call rejected from telecom:", callId.callId);
      const registeredIncomingCallIds = applyArgumentsResult.registeredIncomingCallIds;
      registeredIncomingCallIds.delete(callId.callId);
      const obj = outer1_1(outer1_2[20]);
      outer1_1(outer1_2[20]).stopRinging(callId.callId).catch((arg0) => {
        logger.warn("Failed to stop ringing after telecom reject:", arg0);
      });
    };
    return applyArgumentsResult;
  }
}
const prototype = TelecomManager.prototype;
prototype["_initialize"] = function _initialize() {
  const self = this;
  if (!this.isInitialized) {
    obj.info("Initializing CallKitManager using Telecom framework");
    const hostDestroySubscription = self.hostDestroySubscription;
    if (hostDestroySubscription != null) {
      hostDestroySubscription.remove();
    }
    self.hostDestroySubscription = nativeEventEmitter.addListener("onHostDestroy", self.handleHostDestroy);
    closure_4.addListener(c18, self.handleEndCallRequested);
    closure_4.addListener(c19, self.handleSetForegroundRequested);
    closure_4.addListener(c20, self.handleMicMuteRequested);
    closure_4.addListener(c21, self.handleScreenShareRequested);
    closure_4.addListener(c22, self.handleIncomingCallAnswered);
    closure_4.addListener(c23, self.handleIncomingCallRejected);
    closure_4.addListener(c24, self.handleAnswerCallRequested);
    self.isInitialized = true;
  }
};
prototype["_terminate"] = function _terminate() {
  const self = this;
  if (this.isInitialized) {
    const hostDestroySubscription = self.hostDestroySubscription;
    if (hostDestroySubscription != null) {
      hostDestroySubscription.remove();
    }
    self.hostDestroySubscription = null;
    closure_4.removeAllListeners(c18);
    closure_4.removeAllListeners(c19);
    closure_4.removeAllListeners(c20);
    closure_4.removeAllListeners(c21);
    closure_4.removeAllListeners(c22);
    closure_4.removeAllListeners(c23);
    closure_4.removeAllListeners(c24);
    const registeredIncomingCallIds = self.registeredIncomingCallIds;
    for (const item10033 of registeredIncomingCallIds) {
      let tmp20 = importDefault;
      let tmp21 = dependencyMap;
      let obj = enforcing;
      let endCallResult = obj.endCall(item10033);
      let catchPromise = endCallResult.catch((arg0) => {
        logger.warn("Failed to end telecom incoming call on terminate:", arg0);
      });
      continue;
    }
    const registeredIncomingCallIds2 = self.registeredIncomingCallIds;
    registeredIncomingCallIds2.clear();
    const result = self.clearPendingScreenShareOffSync();
    self.stopRingtone();
    self.reportCallEnded();
    self.reconcilePromise = null;
    self.needsReconcile = false;
    self.isInitialized = false;
  }
};
prototype["isEnabled"] = function isEnabled() {
  return this.isInitialized;
};
prototype["processIncomingRing"] = function processIncomingRing(channelId, ongoingRings) {
  const self = this;
  const id = store.getId();
  if (id in ongoingRings) {
    if (null != ongoingRings[id]) {
      const currentCall2 = self.currentCall;
      channelId = undefined;
      if (currentCall2 != null) {
        channelId = currentCall2.channelId;
      }
      if (null == channelId.getChannelId()) {
        const currentCall3 = self.currentCall;
        let channelId1;
        if (currentCall3 != null) {
          channelId1 = currentCall3.channelId;
        }
        self.reportIncomingCall(channelId);
      }
    }
  }
  const currentCall = self.currentCall;
  let channelId2;
  if (currentCall != null) {
    channelId2 = currentCall.channelId;
  }
  let tmp4 = channelId2 === channelId;
  if (tmp4) {
    tmp4 = self.currentCall.state === closure_26.Ringing;
  }
  if (tmp4) {
    obj.info("Call no longer ringing, cancelling incoming call:", channelId);
    self.cancelIncomingCall(channelId);
  }
};
prototype["reportIncomingCall"] = function reportIncomingCall(channelId, channelName, arg2) {
  let self = this;
  self = this;
  const _require = channelId;
  channel = channel.getChannel(channelId);
  if (null != channel) {
    if (tmp3) {
      self.cancelIncomingCall(self.currentCall.channelId);
    }
    tmp3 = null != self.currentCall && self.currentCall.channelId !== channelId && self.isPendingIncomingCall(self.currentCall);
    channelName = _computeChannelName.computeChannelName(channel, mergeGuildAvatar, upsertRelationship);
    let guildId = channel.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    let obj = { channelId: null, guildId: null, channelName: null, state: null };
    obj[0] = channelId;
    obj[1] = guildId;
    obj[2] = channelName;
    obj[3] = closure_26.Ringing;
    self.currentCall = obj;
    obj.info("Reporting incoming call to Telecom:", channelId, "callerName:", channelName);
    self.startRingtone();
    const obj2 = _computeChannelName;
    let tmp19 = null;
    if (null != guildId) {
      obj = { guildId: null };
      obj[0] = guildId;
      tmp19 = obj;
    }
    const obj4 = self(16580);
    const reportIncomingCallResult = self(16580).reportIncomingCall(channelId, channelName, tmp19);
    self(16580).reportIncomingCall(channelId, channelName, tmp19).then((arg0) => {
      if (!arg0) {
        outer1_25.warn("Failed to report incoming call: resolved false");
        self.clearCall(closure_0);
      }
    }).catch((arg0) => {
      outer1_25.warn("Failed to report incoming call:", arg0);
      self.clearCall(closure_0);
    });
    const nextPromise = self(16580).reportIncomingCall(channelId, channelName, tmp19).then((arg0) => {
      if (!arg0) {
        outer1_25.warn("Failed to report incoming call: resolved false");
        self.clearCall(closure_0);
      }
    });
  } else {
    obj.warn("Cannot report incoming call: channel not found:", channelId);
  }
};
prototype["cancelIncomingCall"] = function cancelIncomingCall(channelId) {
  const self = this;
  let closure_0 = channelId;
  obj.info("Cancelling incoming call:", channelId);
  obj = self(16580);
  const cancelIncomingCallResult = obj.cancelIncomingCall(channelId);
  return obj.cancelIncomingCall(channelId).then(() => {
    self.clearCall(closure_0);
    return true;
  }).catch((arg0) => {
    outer1_25.warn("Failed to cancel incoming call:", arg0);
    self.clearCall(closure_0);
    return false;
  });
};
prototype["isPendingIncomingCall"] = function isPendingIncomingCall(currentCall) {
  return currentCall.state === closure_26.Ringing || currentCall.state === tmp.Connecting;
};
prototype["reconcileTelecomState"] = function reconcileTelecomState() {
  let self = this;
  self = this;
  let isEnabledResult = this.isEnabled();
  if (isEnabledResult) {
    isEnabledResult = self(1605).isMetaQuest();
    const obj = self(1605);
  }
  if (isEnabledResult) {
    if (null == self.reconcilePromise) {
      self.reconcilePromise = self.doReconcile().finally(() => {
        self.reconcilePromise = null;
        if (self.needsReconcile) {
          obj.needsReconcile = false;
          const result = obj.reconcileTelecomState();
        }
      });
      const doReconcileResult = self.doReconcile();
    } else {
      self.needsReconcile = true;
    }
  }
};
prototype["doReconcile"] = function doReconcile() {
  const self = this;
  return callback(function*() {
    if (c4 === 2) {
      c4 = 3;
      let throwTypeErrorResult = HermesBuiltin.throwTypeError();
    } else {
      throwTypeErrorResult = arg1;
      throwTypeErrorResult = arg0;
      throwTypeErrorResult = tmp3;
      if (tmp4 === 3) {
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
          c4 = 2;
          let num2 = 0;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let c2 = num2;
              let channel = tmp2;
              let c0;
              channel = undefined;
              c2 = undefined;
              throwTypeErrorResult = outer1_12;
              throwTypeErrorResult = outer1_12.getChannelId();
              throwTypeErrorResult = outer1_12;
              throwTypeErrorResult = outer1_12.isConnected();
              throwTypeErrorResult = null;
              let tmp38 = null;
              if (throwTypeErrorResult) {
                tmp38 = null;
                if (null != throwTypeErrorResult) {
                  tmp38 = throwTypeErrorResult;
                }
              }
              c0 = tmp38;
              const currentCall2 = outer1_0.currentCall;
              let channelId;
              if (currentCall2 != null) {
                channelId = currentCall2.channelId;
              }
              const currentCall3 = outer1_0.currentCall;
              let state;
              if (currentCall3 != null) {
                state = currentCall3.state;
              }
              outer1_25.info("Reconcile: rtc=", throwTypeErrorResult, "connected=", throwTypeErrorResult, "target=", tmp38, "current=", channelId, "state=", state);
              if (null != tmp38) {
                const currentCall4 = outer1_0.currentCall;
                let channelId1;
                if (currentCall4 != null) {
                  channelId1 = currentCall4.channelId;
                }
                if (channelId1 !== tmp38) {
                  const currentCall5 = outer1_0.currentCall;
                  let channelId2;
                  if (currentCall5 != null) {
                    channelId2 = currentCall5.channelId;
                  }
                  if (channelId2 === tmp38) {
                    if (outer1_0.currentCall.state !== outer1_26.Ringing) {
                      throwTypeErrorResult = outer1_0;
                      throwTypeErrorResult = outer1_26;
                    }
                    outer1_25.info("Incoming call answered, transitioning to active:", tmp38);
                    outer1_0.stopRingtone();
                    throwTypeErrorResult = outer1_0;
                    throwTypeErrorResult = outer1_26;
                    outer1_0.currentCall.state = outer1_26.Connected;
                    throwTypeErrorResult = outer1_0;
                    throwTypeErrorResult = outer1_0.setIncomingCallActive(tmp38);
                    c4 = 3;
                    const obj1 = { value: null, done: true };
                    obj1[0] = undefined;
                    return obj1;
                  }
                  let tmp66 = null != outer1_0.currentCall;
                  if (tmp66) {
                    tmp66 = outer1_0.currentCall.channelId !== tmp38;
                  }
                  if (tmp66) {
                    let obj13 = outer1_0;
                    if (outer1_0.isPendingIncomingCall(outer1_0.currentCall)) {
                      c3 = 2;
                      c4 = 1;
                      const obj2 = { value: null, done: false };
                      obj2[0] = obj13.cancelIncomingCall(outer1_0.currentCall.channelId);
                      return obj2;
                    } else {
                      c3 = 1;
                      c4 = 1;
                      const obj3 = { value: null, done: false };
                      obj3[0] = obj13.endCall(outer1_0.currentCall);
                      return obj3;
                    }
                  }
                }
              } else {
                throwTypeErrorResult = outer1_0;
                let tmp53 = null != outer1_0.currentCall;
                if (tmp53) {
                  tmp53 = outer1_0.currentCall.state !== outer1_26.Ringing;
                }
                if (tmp53) {
                  tmp53 = outer1_0.currentCall.state !== outer1_26.Connecting;
                }
                if (tmp53) {
                  c3 = 5;
                  c4 = 1;
                  let obj4 = { value: null, done: false };
                  obj4[0] = outer1_0.reportCallEnded();
                  return obj4;
                }
              }
              c4 = 3;
              outer1_25.info("RTCConnectionStore indicates disconnect after startCall, ending call:", outer1_2);
              c3 = 4;
              c4 = num2;
              const obj5 = { value: null, done: false };
              obj5[0] = outer1_0.reportCallEnded();
              return obj5;
            }
          } else {
            num2 = 1;
            if (1 === tmp5) {
              if (arg0 === num2) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj6 = { value: null, done: true };
                obj6[0] = arg1;
                return obj6;
              }
            } else if (2 === tmp5) {
              if (arg0 === num2) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj7 = { value: null, done: true };
                obj7[0] = arg1;
                return obj7;
              }
            } else if (3 === tmp5) {
              if (arg0 === num2) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj8 = { value: null, done: true };
                obj8[0] = arg1;
                return obj8;
              } else if (arg1) {
                const currentCall = c0.currentCall;
                let channelId3;
                if (currentCall != null) {
                  channelId3 = currentCall.channelId;
                }
                if (channelId3 !== c2) {
                  outer1_25.info("Call state changed during startCall, ending orphaned native call:", c2);
                  obj4 = outer1_1(outer1_2[18]);
                  obj4.endCall(c2).catch((arg0) => {
                    logger.warn("Failed to end orphaned call:", arg0);
                  });
                  c4 = 3;
                  const obj9 = { value: null, done: true };
                  obj9[0] = undefined;
                  return obj9;
                } else {
                  throwTypeErrorResult = c2;
                  throwTypeErrorResult = outer1_12;
                  if (outer1_12.isConnected()) {
                    if (outer1_12.getChannelId() === outer1_2) {
                      outer1_0.currentCall.state = outer1_26.Connected;
                      outer1_0.setCallActive(outer1_2);
                    }
                  }
                }
              }
            } else if (4 === tmp5) {
              if (arg0 === num2) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                let obj10 = { value: null, done: true };
                obj10[0] = arg1;
                return obj10;
              } else {
                c4 = 3;
                const obj11 = { value: null, done: true };
                obj11[0] = undefined;
                return obj11;
              }
            } else if (arg0 === num2) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          }
          const currentCall6 = c0.currentCall;
          let channelId4;
          if (currentCall6 != null) {
            channelId4 = currentCall6.channelId;
          }
          if (channelId4 !== c0) {
            throwTypeErrorResult = c2;
            throwTypeErrorResult = outer1_9;
            throwTypeErrorResult = c0;
            channel = outer1_9.getChannel(c0);
            throwTypeErrorResult = channel;
            if (null == channel) {
              c4 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              throwTypeErrorResult = channel;
              throwTypeErrorResult = c2;
              const obj12 = { channelId: null, guildId: null, channelName: null, state: null };
              throwTypeErrorResult = c0;
              obj12[0] = c0;
              throwTypeErrorResult = outer1_12;
              throwTypeErrorResult = c0;
              throwTypeErrorResult = outer1_12.getGuildId();
              c0 = throwTypeErrorResult;
              if (throwTypeErrorResult == null) {
                c0 = null;
              }
              obj12[1] = c0;
              obj10 = outer1_0(outer1_2[26]);
              obj12[2] = obj10.computeChannelName(outer1_1, outer1_15, outer1_13);
              obj12[3] = outer1_26.Connecting;
              throwTypeErrorResult.currentCall = obj12;
            }
          }
          if (c0.currentCall.state === outer1_26.Connecting) {
            outer1_2 = outer1_0.currentCall.channelId;
            obj13 = { channelId: null, guildId: null };
            obj13[0] = outer1_0.currentCall.channelId;
            obj13[1] = outer1_0.currentCall.guildId;
            c3 = 3;
            c4 = 1;
            const obj14 = { value: null, done: false };
            obj14[0] = outer1_0.startCall(obj13);
            return obj14;
          }
        } catch (throwTypeErrorResult) {
          c4 = throwTypeErrorResult;
          throw throwTypeErrorResult;
        }
      }
    }
  })();
};
prototype["handleIncomingCallStoreChange"] = function handleIncomingCallStoreChange() {
  let self = this;
  self = this;
  if (!obj.isMetaQuest()) {
    if (self.isEnabled()) {
      const _Set = Set;
      const id = store.getId();
      const set = new Set();
      calls = calls.getCalls();
      for (const item10027 of calls) {
        let ringing = item10027.ringing;
        let tmp11 = item10027;
        if (ringing.includes(id)) {
          let tmp12 = item10027;
          let addResult = set.add(tmp11.channelId);
        }
        continue;
      }
      let registeredIncomingCallIds = self.registeredIncomingCallIds;
      for (const item10042 of registeredIncomingCallIds) {
        let tmp16 = item10042;
        if (!set.has(item10042)) {
          let registeredIncomingCallIds2 = self.registeredIncomingCallIds;
          let tmp17 = item10042;
          let deleteResult = registeredIncomingCallIds2.delete(tmp16);
          let tmp19 = importDefault;
          let tmp20 = dependencyMap;
          let obj3 = enforcing;
          let endCallResult = obj3.endCall(tmp16);
          let catchPromise = endCallResult.catch((arg0) => {
            logger.warn("Failed to end telecom call:", arg0);
          });
        }
        continue;
      }
      function _loop(iter) {
        const _self = iter;
        let registeredIncomingCallIds = _self.registeredIncomingCallIds;
        if (!registeredIncomingCallIds.has(iter)) {
          const registeredIncomingCallIds2 = _self.registeredIncomingCallIds;
          registeredIncomingCallIds2.add(iter);
          const obj = outer1_1(outer1_2[18]);
          const registerIncomingCallResult = outer1_1(outer1_2[18]).registerIncomingCall(iter);
          outer1_1(outer1_2[18]).registerIncomingCall(iter).then((arg0) => {
            if (!arg0) {
              outer2_25.warn("Failed to register incoming call with telecom: resolved false");
              const registeredIncomingCallIds = iter.registeredIncomingCallIds;
              registeredIncomingCallIds.delete(iter);
            }
          }).catch((arg0) => {
            outer2_25.warn("Failed to register incoming call with telecom:", arg0);
            const registeredIncomingCallIds = iter.registeredIncomingCallIds;
            registeredIncomingCallIds.delete(iter);
          });
          const nextPromise = outer1_1(outer1_2[18]).registerIncomingCall(iter).then((arg0) => {
            if (!arg0) {
              outer2_25.warn("Failed to register incoming call with telecom: resolved false");
              const registeredIncomingCallIds = iter.registeredIncomingCallIds;
              registeredIncomingCallIds.delete(iter);
            }
          });
        }
      }
      const iter = set[Symbol.iterator]();
      while (iter !== undefined) {
        let _loopResult = _loop(iter.next());
        continue;
      }
    }
  }
};
prototype["startCall"] = function startCall(channelId, arg1) {
  let closure_0 = channelId;
  const self = this;
  return callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
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
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp3;
            let channelId = tmp5;
            channelId = undefined;
            closure_1 = undefined;
            channelId = outer1_0.channelId;
            const guildId = outer1_0.guildId;
            const currentCall = outer1_1.currentCall;
            channelId = undefined;
            if (currentCall != null) {
              channelId = currentCall.channelId;
            }
            if (channelId === channelId) {
              if (outer1_1.currentCall.state === outer1_26.Connected) {
                outer1_25.info("Call already active for channel:", channelId);
                c5 = 3;
                return { value: true, done: true };
              }
            }
            outer1_25.info("Starting Telecom call:", channelId);
            let c3 = 1;
            let obj2 = outer1_1(outer1_2[18]);
            let tmp35 = null;
            if (null != guildId) {
              const obj1 = { guildId: null };
              obj1[0] = guildId;
              tmp35 = obj1;
            }
            c4 = 2;
            c5 = 1;
            obj2 = { value: null, done: false };
            obj2[0] = obj2.startCall(channelId, tmp35);
            return obj2;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          outer1_25.warn("Failed to register call with Telecom:", closure_2);
          closure_1.clearCall(channelId);
          c5 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          closure_1 = arg1;
          if (!closure_1) {
            outer1_25.warn("Native startCall returned false, clearing call state");
            closure_1.clearCall(channelId);
          }
          c3 = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = closure_1;
          return obj;
        }
      } catch (tmp38) {
        closure_2 = tmp38;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp38;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};
prototype["endCall"] = function endCall(currentCall) {
  const self = this;
  let closure_0 = currentCall;
  obj.info("Ending call:", currentCall.channelId);
  obj = self(16580);
  const endCallResult = obj.endCall(currentCall.channelId);
  return obj.endCall(currentCall.channelId).then((arg0) => {
    self.clearCall(currentCall.channelId);
    return arg0;
  }).catch((arg0) => {
    outer1_25.warn("Failed to end call:", arg0);
    self.clearCall(currentCall.channelId);
    return false;
  });
};
prototype["reportCallEnded"] = function reportCallEnded() {
  const self = this;
  obj.info("Reporting call ended");
  if (null == this.currentCall) {
    let resolved = Promise.resolve(true);
  } else if (self.currentCall.state === closure_26.Ringing) {
    resolved = self.cancelIncomingCall(self.currentCall.channelId);
  } else {
    resolved = self.endCall(self.currentCall);
  }
  return resolved;
};
prototype["setCallActive"] = function setCallActive(outer1_2, isSelfMuteResult) {
  const self = this;
  const currentCall = this.currentCall;
  let channelId;
  if (currentCall != null) {
    channelId = currentCall.channelId;
  }
  if (channelId === outer1_2) {
    obj.info("Setting call active:", outer1_2);
    isSelfMuteResult = _detectH265HardwareDecode.isSelfMute();
    obj = enforcing;
    obj.setCallActive(outer1_2, isSelfMuteResult);
    self.lastMuteState = isSelfMuteResult;
    self.lastScreenShareActive = false;
  } else {
    obj.warn("setCallActive called for unknown channel:", outer1_2);
  }
};
prototype["setIncomingCallActive"] = function setIncomingCallActive(arg0, arg1) {
  const self = this;
  const currentCall = this.currentCall;
  let channelId;
  if (currentCall != null) {
    channelId = currentCall.channelId;
  }
  if (channelId === arg0) {
    obj.info("Setting incoming call active:", arg0);
    const isSelfMuteResult = _detectH265HardwareDecode.isSelfMute();
    let tmp7 = isSelfMuteResult;
    if (null != self.pendingMutePreference) {
      const pendingMutePreference = self.pendingMutePreference;
      self.pendingMutePreference = null;
      tmp7 = isSelfMuteResult;
      if (isSelfMuteResult !== pendingMutePreference) {
        obj.info("Re-applying Telecom Bar ringing-state mute preference:", pendingMutePreference);
        trackDeviceChanged.setSelfMute(MediaEngineContextTypes.DEFAULT, pendingMutePreference, false);
        tmp7 = pendingMutePreference;
        const obj2 = trackDeviceChanged;
      }
    }
    const result = enforcing.setIncomingCallActive(arg0, tmp7);
    self.lastMuteState = tmp7;
    self.lastScreenShareActive = false;
    const obj3 = enforcing;
  } else {
    obj.warn("setIncomingCallActive called for unknown channel:", arg0);
  }
};
prototype["clearScreenShareState"] = function clearScreenShareState() {
  this.lastScreenShareActive = null;
};
prototype["clearPendingScreenShareOffSync"] = function clearPendingScreenShareOffSync() {
  const self = this;
  if (null != this.pendingScreenShareOffSyncTimeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.pendingScreenShareOffSyncTimeout);
    self.pendingScreenShareOffSyncTimeout = null;
  }
};
prototype["clearCall"] = function clearCall(channelId) {
  const self = this;
  const currentCall = this.currentCall;
  channelId = undefined;
  if (currentCall != null) {
    channelId = currentCall.channelId;
  }
  if (channelId === channelId) {
    self.stopRingtone();
    self.currentCall = null;
    self.lastMuteState = null;
    self.pendingMutePreference = null;
    const result = self.clearScreenShareState();
    const result1 = self.clearPendingScreenShareOffSync();
  }
};
prototype["startRingtone"] = function startRingtone() {
  const self = this;
  let isMetaQuestResult = isMetaQuest.isMetaQuest();
  if (isMetaQuestResult) {
    isMetaQuestResult = null == self.ringtone;
  }
  if (isMetaQuestResult) {
    disableSounds = disableSounds.disableSounds;
    if (!disableSounds) {
      disableSounds = soundDisabled.isSoundDisabled("call_ringing");
    }
    if (!disableSounds) {
      self.ringtone = createSoundForPack.createSoundForPack("call_ringing", soundpack.getSoundpack());
      const ringtone = self.ringtone;
      ringtone.loop();
      const tmpResult = createSoundForPack;
    }
  }
};
prototype["stopRingtone"] = function stopRingtone() {
  const ringtone = this.ringtone;
  if (null != ringtone) {
    this.ringtone = null;
    ringtone.stop();
  }
};
prototype["handleMuteStoreChange"] = function handleMuteStoreChange() {
  const self = this;
  if (this.isEnabled()) {
    if (null != self.currentCall) {
      if (self.currentCall.state === closure_26.Connected) {
        const isSelfMuteResult = _detectH265HardwareDecode.isSelfMute();
        if (self.lastMuteState !== isSelfMuteResult) {
          self.lastMuteState = isSelfMuteResult;
          obj.info("Syncing Discord -> Call Bar mute state:", isSelfMuteResult);
          obj = enforcing;
          obj.setMicMuted(self.currentCall.channelId, isSelfMuteResult);
        }
      }
    }
  }
};
prototype["handleScreenShareStoreChange"] = function handleScreenShareStoreChange() {
  let self = this;
  self = this;
  if (this.isEnabled()) {
    if (null != self.currentCall) {
      if (self.currentCall.state === closure_26.Connected) {
        currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
        let tmp3 = null != currentUserActiveStream;
        if (tmp3) {
          tmp3 = currentUserActiveStream.state === ApplicationStreamStates.ACTIVE;
        }
        if (self.lastScreenShareActive !== tmp3) {
          self.lastScreenShareActive = tmp3;
          const result = self.clearPendingScreenShareOffSync();
          if (tmp3) {
            obj.info("Syncing Discord -> Call Bar screen share state: true");
            obj = self(16580);
            obj.setScreenShareState(self.currentCall.channelId, true, true);
          } else {
            let channelId = self.currentCall.channelId;
            const _setTimeout = setTimeout;
            self.pendingScreenShareOffSyncTimeout = setTimeout(() => {
              self.pendingScreenShareOffSyncTimeout = null;
              let isEnabledResult = self.isEnabled();
              if (isEnabledResult) {
                const currentCall = self.currentCall;
                let channelId;
                if (currentCall != null) {
                  channelId = currentCall.channelId;
                }
                isEnabledResult = channelId === channelId;
              }
              if (isEnabledResult) {
                outer1_25.info("Syncing Discord -> Call Bar screen share state: false (delayed)");
                self(outer1_2[18]).setScreenShareState(channelId, true, false);
                const obj = self(outer1_2[18]);
              }
            }, 400);
          }
        }
      }
    }
  }
};
const telecomManager = new TelecomManager();
let result = require("Soundpacks").fileFinishedImporting("modules/calls/native/TelecomManager.android.tsx");

export default telecomManager;