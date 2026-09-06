// === Module 17492: TelecomManager ===

// Module 17492 (TelecomManager)
import LoggerDefault from "Logger" /* 3 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4767 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5411 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9089 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 9182 */;
import NativeAppLifecycleModuleDefault from "NativeAppLifecycleModule" /* 9516 */;
import SoundUtils from "SoundUtils" /* 9902 */;
import useHasVideoPermission from "useHasVideoPermission" /* 9946 */;
import useScreenshareUtils from "useScreenshareUtils" /* 9951 */;
import NativeTelecomModuleDefault from "NativeTelecomModule" /* 17493 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import SoundpackStore from "SoundpackStore" /* 9903 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 5278 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 10081 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import StreamerModeStore from "StreamerModeStore" /* 4405 */;
import UserStore from "UserStore" /* 1371 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
get_ActivityIndicator = fn(17);
({ DeviceEventEmitter: closure_4, NativeEventEmitter } = get_ActivityIndicator);
const ApplicationStreamStates = fn(1074).ApplicationStreamStates;
const MediaEngineContextTypes = fn(4585).MediaEngineContextTypes;
let c18 = "telecom-end-call-requested";
let c19 = "telecom-set-foreground-requested";
let c20 = "telecom-mic-mute-requested";
let c21 = "telecom-screen-share-requested";
let c22 = "telecom-incoming-call-answered";
let c23 = "telecom-incoming-call-rejected";
let c24 = "telecom-answer-call-requested";
let currentCall = new LoggerDefault("TelecomManager");
currentCall.enableNativeLogger(true);
let closure_26 = { Ringing: 0, [0]: "Ringing", Connecting: 1, [1]: "Connecting", Connected: 2, [2]: "Connected" };
const nativeEventEmitter = new NativeEventEmitter(NativeAppLifecycleModuleDefault);
class TelecomManager extends tmp5 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    map = new Map();
    result = map.set(closure_12, () => applyArgumentsResult.reconcileTelecomState());
    result1 = result.set(closure_10, () => applyArgumentsResult.handleMuteStoreChange());
    result2 = result1.set(closure_6, () => applyArgumentsResult.handleScreenShareStoreChange());
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
          if (obj.currentCall.state === closure_26.Ringing) {
            obj.info("Activity destroyed with ringing call, cancelling incoming call");
            obj.cancelIncomingCall(obj.currentCall.channelId);
          } else {
            obj.info("Activity destroyed with active call, disconnecting from voice channel");
            SelectedChannelActionCreatorsDefault.disconnect();
          }
        }
      }
    };
    applyArgumentsResult.handleEndCallRequested = function handleEndCallRequested(callId) {
      obj.info("Received end call request from Call Bar:", callId.callId);
      if (null != applyArgumentsResult.currentCall) {
        if (callId.callId === obj2.currentCall.channelId) {
          if (obj2.currentCall.state === closure_26.Ringing) {
            obj.info("Rejecting ringing call from Call Bar:", obj2.currentCall.channelId);
            CallActionCreatorsDefault.stopRinging(obj2.currentCall.channelId);
            obj2.clearCall(obj2.currentCall.channelId);
          } else {
            SelectedChannelActionCreatorsDefault.disconnect();
          }
          return tmp6;
        }
      }
    };
    applyArgumentsResult.handleSetForegroundRequested = function handleSetForegroundRequested(callId) {
      obj.info("Received set foreground request from Call Bar");
      if (null != applyArgumentsResult.currentCall) {
        if (callId.callId === tmp2.currentCall.channelId) {
          const channel = ChannelStore.getChannel(tmp2.currentCall.channelId);
          if (null != channel) {
            obj = PrivateChannelCallUtils;
            const result = obj.navigateToVoiceChannel(channel, "Call Bar");
          }
        }
      }
    };
    applyArgumentsResult.handleMicMuteRequested = function handleMicMuteRequested(callId) {
      obj.info("Received mic mute request from Call Bar:", callId.callId, "isMuted:", callId.isMuted);
      if (tmp3) {
        if (!tmp5) {
          tmp2.pendingMutePreference = callId.isMuted;
        }
        if (MediaEngineStore.isSelfMute() !== callId.isMuted) {
          obj.info("Updating Call Bar -> Discord mute state:", callId.isMuted);
          AudioActionCreatorsDefault.toggleSelfMute();
        }
        tmp5 = tmp2.currentCall.state !== closure_26.Ringing && tmp2.currentCall.state !== tmp4.Connecting;
      }
    };
    applyArgumentsResult.handleScreenShareRequested = function handleScreenShareRequested(callId) {
      obj.info("Received screen share request from Call Bar:", callId.callId, "isEnabled:", callId.isEnabled);
      if (null != applyArgumentsResult.currentCall) {
        if (callId.callId === tmp2.currentCall.channelId) {
          const channel = ChannelStore.getChannel(tmp2.currentCall.channelId);
          if (null != channel) {
            const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
            let tmp4 = null != currentUserActiveStream;
            if (tmp4) {
              tmp4 = currentUserActiveStream.state === ApplicationStreamStates.ACTIVE;
            }
            if (callId.isEnabled) {
              if (!tmp4) {
                const videoPermission = useHasVideoPermission.getVideoPermission(channel);
                const tmp5 = require;
                if (obj3.getOSRequirement()) {
                  if (videoPermission) {
                    obj.info("Starting screen share from Call Bar");
                    tmp5(9951).startStream();
                    const tmp5Result = tmp5(9951);
                  } else {
                    obj.warn("Cannot start screen share from Call Bar: user lacks streaming permission in this channel");
                  }
                } else {
                  obj.warn("Cannot start screen share from Call Bar: OS version does not meet requirements");
                }
                obj3 = useScreenshareUtils;
              }
            }
            const isEnabled = callId.isEnabled;
            let tmp12 = !isEnabled;
            if (!isEnabled) {
              tmp12 = tmp4;
            }
            if (tmp12) {
              obj.info("Stopping screen share from Call Bar");
              useScreenshareUtils.stopScreenshare();
            }
          }
        }
      }
    };
    applyArgumentsResult.handleAnswerCallRequested = function handleAnswerCallRequested(callId) {
      obj.info("Received answer call request from Call Bar:", callId.callId);
      if (tmp2) {
        if (obj2.currentCall.state === closure_26.Ringing) {
          obj2.stopRingtone();
          obj2.currentCall.state = tmp3.Connecting;
          obj.info("Answering incoming call, joining voice channel:", obj2.currentCall.channelId);
          const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(obj2.currentCall.channelId);
        } else {
          obj.warn("Answer requested but call is not ringing:", obj2.currentCall.state);
        }
      }
    };
    applyArgumentsResult.handleCallCreate = function handleCallCreate(channelId) {
      let isEnabledResult = applyArgumentsResult.isEnabled();
      if (isEnabledResult) {
        isEnabledResult = MetaQuestUtils.isMetaQuest();
      }
      if (isEnabledResult) {
        applyArgumentsResult.processIncomingRing(channelId.channelId, channelId.ongoingRings);
      }
    };
    applyArgumentsResult.handleCallUpdate = function handleCallUpdate(channelId) {
      let isEnabledResult = applyArgumentsResult.isEnabled();
      if (isEnabledResult) {
        isEnabledResult = MetaQuestUtils.isMetaQuest();
      }
      if (isEnabledResult) {
        applyArgumentsResult.processIncomingRing(channelId.channelId, channelId.ongoingRings);
      }
    };
    applyArgumentsResult.handleCallDelete = function handleCallDelete(channelId) {
      let isEnabledResult = applyArgumentsResult.isEnabled();
      if (isEnabledResult) {
        isEnabledResult = MetaQuestUtils.isMetaQuest();
      }
      if (isEnabledResult) {
        currentCall = obj.currentCall;
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
        obj.info("Pending incoming call deleted, cancelling incoming call:", channelId.channelId);
        obj.cancelIncomingCall(channelId.channelId);
      }
    };
    applyArgumentsResult.handleIncomingCallAnswered = function handleIncomingCallAnswered(callId) {
      obj.info("Received incoming call answered from telecom:", callId.callId);
      const registeredIncomingCallIds = applyArgumentsResult.registeredIncomingCallIds;
      registeredIncomingCallIds.delete(callId.callId);
      obj = NativeTelecomModuleDefault;
      obj.endCall(callId.callId).catch((error) => {
        logger.warn("Failed to end answered telecom call:", error);
      });
      const endCallResult = obj.endCall(callId.callId);
      const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(callId.callId);
    };
    applyArgumentsResult.handleIncomingCallRejected = function handleIncomingCallRejected(callId) {
      obj.info("Received incoming call rejected from telecom:", callId.callId);
      const registeredIncomingCallIds = applyArgumentsResult.registeredIncomingCallIds;
      registeredIncomingCallIds.delete(callId.callId);
      obj = CallActionCreatorsDefault;
      obj.stopRinging(callId.callId).catch((error) => {
        logger.warn("Failed to stop ringing after telecom reject:", error);
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
    React4.addListener(c18, self.handleEndCallRequested);
    React4.addListener(c19, self.handleSetForegroundRequested);
    React4.addListener(c20, self.handleMicMuteRequested);
    React4.addListener(c21, self.handleScreenShareRequested);
    React4.addListener(c22, self.handleIncomingCallAnswered);
    React4.addListener(c23, self.handleIncomingCallRejected);
    React4.addListener(c24, self.handleAnswerCallRequested);
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
    React4.removeAllListeners(c18);
    React4.removeAllListeners(c19);
    React4.removeAllListeners(c20);
    React4.removeAllListeners(c21);
    React4.removeAllListeners(c22);
    React4.removeAllListeners(c23);
    React4.removeAllListeners(c24);
    const registeredIncomingCallIds = self.registeredIncomingCallIds;
    for (const item10033 of registeredIncomingCallIds) {
      let obj = NativeTelecomModuleDefault;
      let endCallResult = obj.endCall(item10033);
      let catchPromise = endCallResult.catch((error) => {
        logger.warn("Failed to end telecom incoming call on terminate:", error);
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
  const id = AuthenticationStore.getId();
  if (id in ongoingRings) {
    if (null != ongoingRings[id]) {
      const currentCall2 = self.currentCall;
      channelId = undefined;
      if (currentCall2 != null) {
        channelId = currentCall2.channelId;
      }
      if (null == RTCConnectionStore.getChannelId()) {
        const currentCall3 = self.currentCall;
        let channelId1;
        if (currentCall3 != null) {
          channelId1 = currentCall3.channelId;
        }
        self.reportIncomingCall(channelId);
      }
    }
  }
  currentCall = self.currentCall;
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
prototype["reportIncomingCall"] = function reportIncomingCall(channelId) {
  const self = this;
  _require = channelId;
  const channel = ChannelStore.getChannel(channelId);
  if (null != channel) {
    if (tmp3) {
      self.cancelIncomingCall(self.currentCall.channelId);
    }
    tmp3 = null != self.currentCall && self.currentCall.channelId !== channelId && self.isPendingIncomingCall(self.currentCall);
    const channelName = require("useChannelName").computeChannelName(channel, UserStore, RelationshipStore);
    let guildId = channel.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    currentCall = { channelId, guildId, channelName, state: closure_26.Ringing };
    self.currentCall = currentCall;
    currentCall.info("Reporting incoming call to Telecom:", channelId, "callerName:", channelName);
    self.startRingtone();
    const obj2 = require("useChannelName");
    let tmp19 = null;
    if (null != guildId) {
      currentCall = { guildId };
      tmp19 = currentCall;
    }
    const obj4 = self(17493);
    const reportIncomingCallResult = self(17493).reportIncomingCall(channelId, channelName, tmp19);
    self(17493).reportIncomingCall(channelId, channelName, tmp19).then((result) => {
      if (!result) {
        obj.warn("Failed to report incoming call: resolved false");
        self.clearCall(closure_0);
      }
    }).catch((error) => {
      obj.warn("Failed to report incoming call:", error);
      self.clearCall(closure_0);
    });
    const nextPromise = self(17493).reportIncomingCall(channelId, channelName, tmp19).then((result) => {
      if (!result) {
        obj.warn("Failed to report incoming call: resolved false");
        self.clearCall(closure_0);
      }
    });
  } else {
    currentCall.warn("Cannot report incoming call: channel not found:", channelId);
  }
};
prototype["cancelIncomingCall"] = function cancelIncomingCall(channelId) {
  const self = this;
  closure_0 = channelId;
  obj.info("Cancelling incoming call:", channelId);
  obj = self(17493);
  const cancelIncomingCallResult = obj.cancelIncomingCall(channelId);
  return obj.cancelIncomingCall(channelId).then(() => {
    self.clearCall(closure_0);
    return true;
  }).catch((error) => {
    obj.warn("Failed to cancel incoming call:", error);
    self.clearCall(closure_0);
    return false;
  });
};
prototype["isPendingIncomingCall"] = function isPendingIncomingCall(currentCall) {
  return currentCall.state === closure_26.Ringing || currentCall.state === tmp.Connecting;
};
prototype["reconcileTelecomState"] = function reconcileTelecomState() {
  const self = this;
  let isEnabledResult = this.isEnabled();
  if (isEnabledResult) {
    isEnabledResult = MetaQuestUtils.isMetaQuest();
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
  return (async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
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
        c4 = 2;
        let num2 = 0;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_129_0 = undefined;
            let channel2;
            let channelId6;
            const channelId = RTCConnectionStore.getChannelId();
            const isConnectedResult = RTCConnectionStore.isConnected();
            let tmp38 = null;
            if (isConnectedResult) {
              tmp38 = null;
              if (null != channelId) {
                tmp38 = channelId;
              }
            }
            closure_129_0 = tmp38;
            const currentCall2 = self.currentCall;
            let channelId1;
            if (currentCall2 != null) {
              channelId1 = currentCall2.channelId;
            }
            const currentCall3 = self.currentCall;
            let state;
            if (currentCall3 != null) {
              state = currentCall3.state;
            }
            logger.info("Reconcile: rtc=", channelId, "connected=", isConnectedResult, "target=", tmp38, "current=", channelId1, "state=", state);
            if (null != tmp38) {
              const currentCall4 = self.currentCall;
              let channelId2;
              if (currentCall4 != null) {
                channelId2 = currentCall4.channelId;
              }
              if (channelId2 !== tmp38) {
                const currentCall5 = self.currentCall;
                let channelId3;
                if (currentCall5 != null) {
                  channelId3 = currentCall5.channelId;
                }
                if (channelId3 === tmp38) {
                  logger.info("Incoming call answered, transitioning to active:", tmp38);
                  self.stopRingtone();
                  self.currentCall.state = closure_1_26.Connected;
                  const result = self.setIncomingCallActive(tmp38);
                  c4 = 3;
                  const obj1 = { value: undefined, done: true };
                  return obj1;
                }
                let tmp66 = null != self.currentCall;
                if (tmp66) {
                  tmp66 = self.currentCall.channelId !== tmp38;
                }
                if (tmp66) {
                  let obj13 = self;
                  if (self.isPendingIncomingCall(self.currentCall)) {
                    c3 = 2;
                    c4 = 1;
                    const obj2 = { value: obj13.cancelIncomingCall(self.currentCall.channelId), done: false };
                    return obj2;
                  } else {
                    c3 = 1;
                    c4 = 1;
                    const obj3 = { value: obj13.endCall(self.currentCall), done: false };
                    return obj3;
                  }
                }
              }
            } else {
              let tmp53 = null != self.currentCall;
              if (tmp53) {
                tmp53 = self.currentCall.state !== closure_1_26.Ringing;
              }
              if (tmp53) {
                tmp53 = self.currentCall.state !== closure_1_26.Connecting;
              }
              if (tmp53) {
                c3 = 5;
                c4 = 1;
                let obj4 = { value: self.reportCallEnded(), done: false };
                return obj4;
              }
            }
            c4 = 3;
            logger.info("RTCConnectionStore indicates disconnect after startCall, ending call:", channelId6);
            c3 = 4;
            c4 = num2;
            const obj5 = { value: closure_130_0.reportCallEnded(), done: false };
            return obj5;
          }
        } else {
          num2 = 1;
          if (1 === tmp5) {
            if (arg0 === num2) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj6 = { value, done: true };
              return obj6;
            }
          } else if (2 === tmp5) {
            if (arg0 === num2) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj7 = { value, done: true };
              return obj7;
            }
          } else if (3 === tmp5) {
            if (arg0 === num2) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else if (value) {
              currentCall = closure_130_0.currentCall;
              let channelId4;
              if (currentCall != null) {
                channelId4 = currentCall.channelId;
              }
              if (channelId4 !== channelId6) {
                logger.info("Call state changed during startCall, ending orphaned native call:", channelId6);
                obj4 = tmp2(num2[18]);
                obj4.endCall(channelId6).catch((error) => {
                  logger.warn("Failed to end orphaned call:", error);
                });
                c4 = 3;
                const obj9 = { value: undefined, done: true };
                return obj9;
              } else if (RTCConnectionStore.isConnected()) {
                if (RTCConnectionStore.getChannelId() === channelId6) {
                  closure_130_0.currentCall.state = closure_1_26.Connected;
                  closure_130_0.setCallActive(channelId6);
                }
              }
            }
          } else if (4 === tmp5) {
            if (arg0 === num2) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              let obj10 = { value, done: true };
              return obj10;
            } else {
              c4 = 3;
              const obj11 = { value: undefined, done: true };
              return obj11;
            }
          } else if (arg0 === num2) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          }
        }
        const currentCall6 = closure_130_0.currentCall;
        let channelId5;
        if (currentCall6 != null) {
          channelId5 = currentCall6.channelId;
        }
        if (channelId5 !== closure_129_0) {
          channel2 = channel.getChannel(closure_129_0);
          if (null == channel2) {
            c4 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            const obj12 = { channelId: closure_129_0, guildId: null, channelName: null, state: null };
            let guildId = RTCConnectionStore.getGuildId();
            if (guildId == null) {
              guildId = null;
            }
            obj12.guildId = guildId;
            obj10 = guildId(num2[26]);
            obj12.channelName = obj10.computeChannelName(channel2, UserStore, RelationshipStore);
            obj12.state = closure_1_26.Connecting;
            closure_130_0.currentCall = obj12;
          }
        }
        if (closure_130_0.currentCall.state === closure_1_26.Connecting) {
          channelId6 = closure_130_0.currentCall.channelId;
          obj13 = { channelId: closure_130_0.currentCall.channelId, guildId: closure_130_0.currentCall.guildId };
          c3 = 3;
          c4 = 1;
          const obj14 = { value: closure_130_0.startCall(obj13), done: false };
          return obj14;
        }
      } catch (tmp104) {
        c4 = tmp;
        throw tmp104;
      }
    }
  })();
};
prototype["handleIncomingCallStoreChange"] = function handleIncomingCallStoreChange() {
  const self = this;
  if (!obj.isMetaQuest()) {
    if (self.isEnabled()) {
      const _Set = Set;
      const id = AuthenticationStore.getId();
      const set = new Set();
      const calls = CallStore.getCalls();
      for (const item10027 of calls) {
        let ringing = item10027.ringing;
        let tmp11 = item10027;
        if (ringing.includes(id)) {
          let addResult = set.add(tmp11.channelId);
        }
        continue;
      }
      let registeredIncomingCallIds = self.registeredIncomingCallIds;
      for (const item10042 of registeredIncomingCallIds) {
        let tmp16 = item10042;
        if (!set.has(item10042)) {
          let registeredIncomingCallIds2 = self.registeredIncomingCallIds;
          let deleteResult = registeredIncomingCallIds2.delete(tmp16);
          let obj3 = NativeTelecomModuleDefault;
          let endCallResult = obj3.endCall(tmp16);
          let catchPromise = endCallResult.catch((error) => {
            logger.warn("Failed to end telecom call:", error);
          });
        }
        continue;
      }
      function _loop(iter) {
        _self = iter;
        let registeredIncomingCallIds = _self.registeredIncomingCallIds;
        if (!registeredIncomingCallIds.has(iter)) {
          const registeredIncomingCallIds2 = _self.registeredIncomingCallIds;
          registeredIncomingCallIds2.add(iter);
          const registerIncomingCallResult = NativeTelecomModuleDefault.registerIncomingCall(iter);
          NativeTelecomModuleDefault.registerIncomingCall(iter).then((result) => {
            if (!result) {
              obj.warn("Failed to register incoming call with telecom: resolved false");
              const registeredIncomingCallIds = self.registeredIncomingCallIds;
              registeredIncomingCallIds.delete(closure_0);
            }
          }).catch((error) => {
            obj.warn("Failed to register incoming call with telecom:", error);
            const registeredIncomingCallIds = self.registeredIncomingCallIds;
            registeredIncomingCallIds.delete(closure_0);
          });
          const nextPromise = NativeTelecomModuleDefault.registerIncomingCall(iter).then((result) => {
            if (!result) {
              obj.warn("Failed to register incoming call with telecom: resolved false");
              const registeredIncomingCallIds = self.registeredIncomingCallIds;
              registeredIncomingCallIds.delete(closure_0);
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
prototype["startCall"] = function startCall(channelId) {
  closure_0 = channelId;
  const self = this;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            channelId = tmp5.channelId;
            closure_128_0 = channelId;
            const guildId = tmp5.guildId;
            currentCall = self.currentCall;
            channelId = undefined;
            if (currentCall != null) {
              channelId = currentCall.channelId;
            }
            if (channelId === channelId) {
              if (self.currentCall.state === Connected.Connected) {
                logger.info("Call already active for channel:", channelId);
                c5 = 3;
                return { value: true, done: true };
              }
            }
            logger.info("Starting Telecom call:", channelId);
            c3 = 1;
            let obj2 = tmp3(tmp38[18]);
            let tmp35 = null;
            if (null != guildId) {
              const obj1 = { guildId };
              tmp35 = obj1;
            }
            c4 = 2;
            c5 = 1;
            obj2 = { value: null, done: false };
            obj2.value = obj2.startCall(channelId, tmp35);
            return obj2;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_128_2 = tmp38;
          logger.warn("Failed to register call with Telecom:", closure_128_2);
          closure_129_1.clearCall(closure_128_0);
          c5 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_128_1 = value;
          if (!closure_128_1) {
            logger.warn("Native startCall returned false, clearing call state");
            closure_129_1.clearCall(closure_128_0);
          }
          c3 = 0;
          c5 = 3;
          obj = { value: closure_128_1, done: true };
          return obj;
        }
      } catch (tmp38) {
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
  obj.info("Ending call:", currentCall.channelId);
  obj = self(17493);
  const endCallResult = obj.endCall(currentCall.channelId);
  return obj.endCall(currentCall.channelId).then((result) => {
    self.clearCall(currentCall.channelId);
    return result;
  }).catch((error) => {
    obj.warn("Failed to end call:", error);
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
prototype["setCallActive"] = function setCallActive(arg0) {
  const self = this;
  currentCall = this.currentCall;
  let channelId;
  if (currentCall != null) {
    channelId = currentCall.channelId;
  }
  if (channelId === arg0) {
    obj.info("Setting call active:", arg0);
    const isSelfMuteResult = MediaEngineStore.isSelfMute();
    obj = NativeTelecomModuleDefault;
    obj.setCallActive(arg0, isSelfMuteResult);
    self.lastMuteState = isSelfMuteResult;
    self.lastScreenShareActive = false;
  } else {
    obj.warn("setCallActive called for unknown channel:", arg0);
  }
};
prototype["setIncomingCallActive"] = function setIncomingCallActive(arg0) {
  const self = this;
  currentCall = this.currentCall;
  let channelId;
  if (currentCall != null) {
    channelId = currentCall.channelId;
  }
  if (channelId === arg0) {
    obj.info("Setting incoming call active:", arg0);
    const isSelfMuteResult = MediaEngineStore.isSelfMute();
    let tmp7 = isSelfMuteResult;
    if (null != self.pendingMutePreference) {
      const pendingMutePreference = self.pendingMutePreference;
      self.pendingMutePreference = null;
      tmp7 = isSelfMuteResult;
      if (isSelfMuteResult !== pendingMutePreference) {
        obj.info("Re-applying Telecom Bar ringing-state mute preference:", pendingMutePreference);
        AudioActionCreatorsDefault.setSelfMute(MediaEngineContextTypes.DEFAULT, pendingMutePreference, false);
        tmp7 = pendingMutePreference;
      }
    }
    const result = NativeTelecomModuleDefault.setIncomingCallActive(arg0, tmp7);
    self.lastMuteState = tmp7;
    self.lastScreenShareActive = false;
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
  currentCall = this.currentCall;
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
  let isMetaQuestResult = MetaQuestUtils.isMetaQuest();
  if (isMetaQuestResult) {
    isMetaQuestResult = null == self.ringtone;
  }
  if (isMetaQuestResult) {
    let disableSounds = StreamerModeStore.disableSounds;
    if (!disableSounds) {
      disableSounds = NotificationSettingsStore.isSoundDisabled("call_ringing");
    }
    if (!disableSounds) {
      self.ringtone = SoundUtils.createSoundForPack("call_ringing", SoundpackStore.getSoundpack());
      const ringtone = self.ringtone;
      ringtone.loop();
      const tmpResult = SoundUtils;
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
        const isSelfMuteResult = MediaEngineStore.isSelfMute();
        if (self.lastMuteState !== isSelfMuteResult) {
          self.lastMuteState = isSelfMuteResult;
          obj.info("Syncing Discord -> Call Bar mute state:", isSelfMuteResult);
          obj = NativeTelecomModuleDefault;
          obj.setMicMuted(self.currentCall.channelId, isSelfMuteResult);
        }
      }
    }
  }
};
prototype["handleScreenShareStoreChange"] = function handleScreenShareStoreChange() {
  const self = this;
  if (this.isEnabled()) {
    if (null != self.currentCall) {
      if (self.currentCall.state === closure_26.Connected) {
        const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
        let tmp3 = null != currentUserActiveStream;
        if (tmp3) {
          tmp3 = currentUserActiveStream.state === ApplicationStreamStates.ACTIVE;
        }
        if (self.lastScreenShareActive !== tmp3) {
          self.lastScreenShareActive = tmp3;
          const result = self.clearPendingScreenShareOffSync();
          if (tmp3) {
            obj.info("Syncing Discord -> Call Bar screen share state: true");
            obj = self(17493);
            obj.setScreenShareState(self.currentCall.channelId, true, true);
          } else {
            let channelId = self.currentCall.channelId;
            const _setTimeout = setTimeout;
            self.pendingScreenShareOffSyncTimeout = setTimeout(() => {
              self.pendingScreenShareOffSyncTimeout = null;
              let isEnabledResult = self.isEnabled();
              if (isEnabledResult) {
                currentCall = self.currentCall;
                channelId = undefined;
                if (currentCall != null) {
                  channelId = currentCall.channelId;
                }
                isEnabledResult = channelId === channelId;
              }
              if (isEnabledResult) {
                obj.info("Syncing Discord -> Call Bar screen share state: false (delayed)");
                obj = NativeTelecomModuleDefault;
                obj.setScreenShareState(channelId, true, false);
              }
            }, 400);
          }
        }
      }
    }
  }
};
const telecomManager = new TelecomManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/calls/native/TelecomManager.android.tsx");

export default telecomManager;