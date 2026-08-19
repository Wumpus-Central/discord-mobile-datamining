// discord_app/modules/calls/native/TelecomManager.android.tsx
import timestampDefault from "../../debug/Logger.tsx";
import isMetaQuest from "../../device/MetaQuestUtils.android.tsx";
import _modDef4975 from "../../../actions/SelectedChannelActionCreators.tsx";
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeAppLifecycleModule.tsx";
import trackDeviceChangedDefault from "../../../actions/AudioActionCreators.tsx";
import _modDef9735 from "../../../actions/CallActionCreators.tsx";
import createSoundForPack from "../../sound_playback/SoundUtils.tsx";
import enforcingDefault2 from "../../../../discord_common/js/packages/rtn-codegen/js/NativeTelecomModule.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import Soundpacks from "../../soundpacks/SoundpackStore.tsx";
import reset from "../../../stores/ApplicationStreamingStore.tsx";
import fetchFingerprint from "../../../stores/AuthenticationStore.tsx";
import callConnect from "../../../stores/CallStore.tsx";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import _detectH265HardwareDecode from "../../../stores/MediaEngineStore.tsx";
import DesktopNotificationTypes from "../../../stores/NotificationSettingsStore.tsx";
import createRTCConnection from "../../../stores/RTCConnectionStore.tsx";
import markAllUserIdListsStale from "../../../stores/RelationshipStore.tsx";
import initialize from "../../../stores/StreamerModeStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import { ApplicationStreamStates } from "../../../Constants.tsx";
import { MediaEngineContextTypes } from "../../../../discord_common/js/packages/media-engine/Constants.tsx";
import { computeChannelName } from "../../channel/useChannelName.tsx";

require = fn;
({ DeviceEventEmitter: c4, NativeEventEmitter } = get_ActivityIndicator);
let c18 = "telecom-end-call-requested";
let c19 = "telecom-set-foreground-requested";
let c20 = "telecom-mic-mute-requested";
let c21 = "telecom-screen-share-requested";
let c22 = "telecom-incoming-call-answered";
let c23 = "telecom-incoming-call-rejected";
let c24 = "telecom-answer-call-requested";
let obj = new timestampDefault("TelecomManager");
obj.enableNativeLogger(true);
let closure_26 = { Ringing: 0, [0]: "Ringing", Connecting: 1, [1]: "Connecting", Connected: 2, [2]: "Connected" };
const nativeEventEmitter = new NativeEventEmitter(enforcingDefault);
initializeDefault;
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
        if (null != applyArgumentsResult.currentCall) {
          if (applyArgumentsResult.currentCall.state === closure_1_26.Ringing) {
            obj.info("Activity destroyed with ringing call, cancelling incoming call");
            applyArgumentsResult.cancelIncomingCall(applyArgumentsResult.currentCall.channelId);
          } else {
            obj.info("Activity destroyed with active call, disconnecting from voice channel");
            _modDef4975.disconnect();
          }
        }
      }
    };
    applyArgumentsResult.handleEndCallRequested = function handleEndCallRequested(callId) {
      obj.info("Received end call request from Call Bar:", callId.callId);
      if (null != applyArgumentsResult.currentCall) {
        if (callId.callId === applyArgumentsResult.currentCall.channelId) {
          if (applyArgumentsResult.currentCall.state === closure_1_26.Ringing) {
            obj.info("Rejecting ringing call from Call Bar:", applyArgumentsResult.currentCall.channelId);
            _modDef9735.stopRinging(applyArgumentsResult.currentCall.channelId);
            applyArgumentsResult.clearCall(applyArgumentsResult.currentCall.channelId);
          } else {
            _modDef4975.disconnect();
          }
          return tmp6;
        }
      }
    };
    applyArgumentsResult.handleSetForegroundRequested = function handleSetForegroundRequested(callId) {
      closure_1_25.info("Received set foreground request from Call Bar");
      if (null != applyArgumentsResult.currentCall) {
        if (callId.callId === applyArgumentsResult.currentCall.channelId) {
          const channel = closure_1_9.getChannel(applyArgumentsResult.currentCall.channelId);
          if (null != channel) {
            const result = applyArgumentsResult(dependencyMap[21]).navigateToVoiceChannel(channel, "Call Bar");
            obj = applyArgumentsResult(dependencyMap[21]);
          }
        }
      }
    };
    applyArgumentsResult.handleMicMuteRequested = function handleMicMuteRequested(callId) {
      obj.info("Received mic mute request from Call Bar:", callId.callId, "isMuted:", callId.isMuted);
      if (tmp3) {
        if (!tmp5) {
          applyArgumentsResult.pendingMutePreference = callId.isMuted;
        }
        if (closure_1_10.isSelfMute() !== callId.isMuted) {
          obj.info("Updating Call Bar -> Discord mute state:", callId.isMuted);
          trackDeviceChangedDefault.toggleSelfMute();
        }
        tmp5 = applyArgumentsResult.currentCall.state !== closure_1_26.Ringing && applyArgumentsResult.currentCall.state !== tmp4.Connecting;
      }
      tmp3 = null != applyArgumentsResult.currentCall && callId.callId === applyArgumentsResult.currentCall.channelId;
    };
    applyArgumentsResult.handleScreenShareRequested = function handleScreenShareRequested(callId) {
      obj.info("Received screen share request from Call Bar:", callId.callId, "isEnabled:", callId.isEnabled);
      if (null != applyArgumentsResult.currentCall) {
        if (callId.callId === applyArgumentsResult.currentCall.channelId) {
          const channel = closure_1_9.getChannel(applyArgumentsResult.currentCall.channelId);
          if (null != channel) {
            const currentUserActiveStream = closure_1_6.getCurrentUserActiveStream();
            let tmp4 = null != currentUserActiveStream;
            if (tmp4) {
              tmp4 = currentUserActiveStream.state === ApplicationStreamStates.ACTIVE;
            }
            if (callId.isEnabled) {
              if (!tmp4) {
                const videoPermission = applyArgumentsResult(dependencyMap[23]).getVideoPermission(channel);
                const obj2 = applyArgumentsResult(dependencyMap[23]);
                if (obj3.getOSRequirement()) {
                  if (videoPermission) {
                    obj.info("Starting screen share from Call Bar");
                    applyArgumentsResult(dependencyMap[24]).startStream();
                    const tmp5Result = applyArgumentsResult(dependencyMap[24]);
                  } else {
                    obj.warn("Cannot start screen share from Call Bar: user lacks streaming permission in this channel");
                  }
                } else {
                  obj.warn("Cannot start screen share from Call Bar: OS version does not meet requirements");
                }
                obj3 = applyArgumentsResult(dependencyMap[24]);
              }
            }
            const isEnabled = callId.isEnabled;
            let tmp12 = !isEnabled;
            if (!isEnabled) {
              tmp12 = tmp4;
            }
            if (tmp12) {
              obj.info("Stopping screen share from Call Bar");
              applyArgumentsResult(dependencyMap[24]).stopScreenshare();
              const obj5 = applyArgumentsResult(dependencyMap[24]);
            }
          }
        }
      }
    };
    applyArgumentsResult.handleAnswerCallRequested = function handleAnswerCallRequested(callId) {
      obj.info("Received answer call request from Call Bar:", callId.callId);
      if (tmp2) {
        if (applyArgumentsResult.currentCall.state === closure_1_26.Ringing) {
          applyArgumentsResult.stopRingtone();
          applyArgumentsResult.currentCall.state = tmp3.Connecting;
          obj.info("Answering incoming call, joining voice channel:", applyArgumentsResult.currentCall.channelId);
          const voiceChannel = _modDef4975.selectVoiceChannel(applyArgumentsResult.currentCall.channelId);
        } else {
          obj.warn("Answer requested but call is not ringing:", applyArgumentsResult.currentCall.state);
        }
      }
      tmp2 = null != applyArgumentsResult.currentCall && callId.callId === applyArgumentsResult.currentCall.channelId;
    };
    applyArgumentsResult.handleCallCreate = function handleCallCreate(channelId) {
      let isEnabledResult = applyArgumentsResult.isEnabled();
      if (isEnabledResult) {
        isEnabledResult = applyArgumentsResult(dependencyMap[25]).isMetaQuest();
        const obj2 = applyArgumentsResult(dependencyMap[25]);
      }
      if (isEnabledResult) {
        applyArgumentsResult.processIncomingRing(channelId.channelId, channelId.ongoingRings);
      }
    };
    applyArgumentsResult.handleCallUpdate = function handleCallUpdate(channelId) {
      let isEnabledResult = applyArgumentsResult.isEnabled();
      if (isEnabledResult) {
        isEnabledResult = applyArgumentsResult(dependencyMap[25]).isMetaQuest();
        const obj2 = applyArgumentsResult(dependencyMap[25]);
      }
      if (isEnabledResult) {
        applyArgumentsResult.processIncomingRing(channelId.channelId, channelId.ongoingRings);
      }
    };
    applyArgumentsResult.handleCallDelete = function handleCallDelete(channelId) {
      let isEnabledResult = applyArgumentsResult.isEnabled();
      if (isEnabledResult) {
        isEnabledResult = applyArgumentsResult(dependencyMap[25]).isMetaQuest();
        const obj2 = applyArgumentsResult(dependencyMap[25]);
      }
      if (isEnabledResult) {
        const currentCall = applyArgumentsResult.currentCall;
        channelId = undefined;
        if (currentCall != null) {
          channelId = currentCall.channelId;
        }
        isEnabledResult = channelId === channelId.channelId;
      }
      if (isEnabledResult) {
        isEnabledResult = applyArgumentsResult.isPendingIncomingCall(applyArgumentsResult.currentCall);
      }
      if (isEnabledResult) {
        obj.info("Pending incoming call deleted, cancelling incoming call:", channelId.channelId);
        applyArgumentsResult.cancelIncomingCall(channelId.channelId);
      }
    };
    applyArgumentsResult.handleIncomingCallAnswered = function handleIncomingCallAnswered(callId) {
      closure_1_25.info("Received incoming call answered from telecom:", callId.callId);
      const registeredIncomingCallIds = applyArgumentsResult.registeredIncomingCallIds;
      registeredIncomingCallIds.delete(callId.callId);
      enforcingDefault2.endCall(callId.callId).catch((error) => {
        logger.warn("Failed to end answered telecom call:", error);
      });
      const endCallResult = enforcingDefault2.endCall(callId.callId);
      const voiceChannel = _modDef4975.selectVoiceChannel(callId.callId);
    };
    applyArgumentsResult.handleIncomingCallRejected = function handleIncomingCallRejected(callId) {
      closure_1_25.info("Received incoming call rejected from telecom:", callId.callId);
      const registeredIncomingCallIds = applyArgumentsResult.registeredIncomingCallIds;
      registeredIncomingCallIds.delete(callId.callId);
      _modDef9735.stopRinging(callId.callId).catch((error) => {
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
      obj = enforcingDefault2;
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
  const self = this;
  const _require = channelId;
  channel = channel.getChannel(channelId);
  if (null != channel) {
    if (tmp3) {
      self.cancelIncomingCall(self.currentCall.channelId);
    }
    tmp3 = null != self.currentCall && self.currentCall.channelId !== channelId && self.isPendingIncomingCall(self.currentCall);
    channelName = require("../../channel/useChannelName.tsx").computeChannelName(channel, closure_15, closure_13);
    let guildId = channel.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    obj = { channelId: null, guildId: null, channelName: null, state: null };
    obj[0] = channelId;
    obj[1] = guildId;
    obj[2] = channelName;
    obj[3] = closure_26.Ringing;
    self.currentCall = obj;
    obj.info("Reporting incoming call to Telecom:", channelId, "callerName:", channelName);
    self.startRingtone();
    const obj2 = computeChannelName;
    let tmp19 = null;
    if (null != guildId) {
      obj = { guildId: null };
      obj[0] = guildId;
      tmp19 = obj;
    }
    const obj4 = self(16711);
    const reportIncomingCallResult = self(16711).reportIncomingCall(channelId, channelName, tmp19);
    self(16711).reportIncomingCall(channelId, channelName, tmp19).then((result) => {
      if (!result) {
        obj.warn("Failed to report incoming call: resolved false");
        self.clearCall(closure_0);
      }
    }).catch((error) => {
      obj.warn("Failed to report incoming call:", error);
      self.clearCall(closure_0);
    });
    const nextPromise = self(16711).reportIncomingCall(channelId, channelName, tmp19).then((result) => {
      if (!result) {
        obj.warn("Failed to report incoming call: resolved false");
        self.clearCall(closure_0);
      }
    });
  } else {
    obj.warn("Cannot report incoming call: channel not found:", channelId);
  }
};
prototype["cancelIncomingCall"] = function cancelIncomingCall(channelId) {
  const self = this;
  closure_0 = channelId;
  obj.info("Cancelling incoming call:", channelId);
  obj = self(16711);
  const cancelIncomingCallResult = obj.cancelIncomingCall(channelId);
  return obj.cancelIncomingCall(channelId).then((result) => {
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
    isEnabledResult = self(1625).isMetaQuest();
    obj = self(1625);
  }
  if (isEnabledResult) {
    if (null == self.reconcilePromise) {
      self.reconcilePromise = self.doReconcile().finally(() => {
        self.reconcilePromise = null;
        if (self.needsReconcile) {
          self.needsReconcile = false;
          const result = self.reconcileTelecomState();
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
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
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
            c2 = num2;
            let channel = tmp2;
            c0 = undefined;
            channel = undefined;
            c2 = undefined;
            let channelId = closure_1_12.getChannelId();
            const isConnectedResult = closure_1_12.isConnected();
            let tmp38 = null;
            if (isConnectedResult) {
              tmp38 = null;
              if (null != channelId) {
                tmp38 = channelId;
              }
            }
            c0 = tmp38;
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
            closure_1_25.info("Reconcile: rtc=", channelId, "connected=", isConnectedResult, "target=", tmp38, "current=", channelId1, "state=", state);
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
                  closure_1_25.info("Incoming call answered, transitioning to active:", tmp38);
                  self.stopRingtone();
                  self.currentCall.state = closure_1_26.Connected;
                  const result = self.setIncomingCallActive(tmp38);
                  c4 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = undefined;
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
                    const obj2 = { value: null, done: false };
                    obj2[0] = obj13.cancelIncomingCall(self.currentCall.channelId);
                    return obj2;
                  } else {
                    c3 = 1;
                    c4 = 1;
                    const obj3 = { value: null, done: false };
                    obj3[0] = obj13.endCall(self.currentCall);
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
                let obj4 = { value: null, done: false };
                obj4[0] = self.reportCallEnded();
                return obj4;
              }
            }
            c4 = 3;
            closure_1_25.info("RTCConnectionStore indicates disconnect after startCall, ending call:", channelId);
            c3 = 4;
            c4 = num2;
            const obj5 = { value: null, done: false };
            obj5[0] = self.reportCallEnded();
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
              let channelId4;
              if (currentCall != null) {
                channelId4 = currentCall.channelId;
              }
              if (channelId4 !== c2) {
                closure_1_25.info("Call state changed during startCall, ending orphaned native call:", c2);
                obj4 = closure_1_1(channelId[18]);
                obj4.endCall(c2).catch((error) => {
                  logger.warn("Failed to end orphaned call:", error);
                });
                c4 = 3;
                const obj9 = { value: null, done: true };
                obj9[0] = undefined;
                return obj9;
              } else if (closure_1_12.isConnected()) {
                if (closure_1_12.getChannelId() === channelId) {
                  self.currentCall.state = closure_1_26.Connected;
                  self.setCallActive(channelId);
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
        let channelId5;
        if (currentCall6 != null) {
          channelId5 = currentCall6.channelId;
        }
        if (channelId5 !== c0) {
          channel = closure_1_9.getChannel(c0);
          if (null == channel) {
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          } else {
            const obj12 = { channelId: null, guildId: null, channelName: null, state: null };
            obj12[0] = c0;
            const guildId = closure_1_12.getGuildId();
            c0 = guildId;
            if (guildId == null) {
              c0 = null;
            }
            obj12[1] = c0;
            obj10 = self(channelId[26]);
            obj12[2] = obj10.computeChannelName(closure_1_1, closure_1_15, closure_1_13);
            obj12[3] = closure_1_26.Connecting;
            c0.currentCall = obj12;
          }
        }
        if (c0.currentCall.state === closure_1_26.Connecting) {
          channelId = self.currentCall.channelId;
          obj13 = { channelId: null, guildId: null };
          obj13[0] = self.currentCall.channelId;
          obj13[1] = self.currentCall.guildId;
          c3 = 3;
          c4 = 1;
          const obj14 = { value: null, done: false };
          obj14[0] = self.startCall(obj13);
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
      const id = store.getId();
      const set = new Set();
      calls = calls.getCalls();
      for (const item10027 of calls) {
        let ringing = item10027.ringing;
        if (ringing.includes(id)) {
          let addResult = set.add(item10027.channelId);
        }
        continue;
      }
      let registeredIncomingCallIds = self.registeredIncomingCallIds;
      for (const item10042 of registeredIncomingCallIds) {
        if (!set.has(item10042)) {
          let registeredIncomingCallIds2 = self.registeredIncomingCallIds;
          let deleteResult = registeredIncomingCallIds2.delete(item10042);
          let obj3 = enforcingDefault2;
          let endCallResult = obj3.endCall(item10042);
          let catchPromise = endCallResult.catch((error) => {
            logger.warn("Failed to end telecom call:", error);
          });
        }
        continue;
      }
      function _loop(iter) {
        const _self = iter;
        let registeredIncomingCallIds = _self.registeredIncomingCallIds;
        if (!registeredIncomingCallIds.has(iter)) {
          const registeredIncomingCallIds2 = tmp.registeredIncomingCallIds;
          registeredIncomingCallIds2.add(iter);
          const registerIncomingCallResult = enforcingDefault2.registerIncomingCall(iter);
          enforcingDefault2.registerIncomingCall(iter).then((result) => {
            if (!result) {
              obj.warn("Failed to register incoming call with telecom: resolved false");
              const registeredIncomingCallIds = iter.registeredIncomingCallIds;
              registeredIncomingCallIds.delete(iter);
            }
          }).catch((error) => {
            obj.warn("Failed to register incoming call with telecom:", error);
            const registeredIncomingCallIds = iter.registeredIncomingCallIds;
            registeredIncomingCallIds.delete(iter);
          });
          const nextPromise = enforcingDefault2.registerIncomingCall(iter).then((result) => {
            if (!result) {
              obj.warn("Failed to register incoming call with telecom: resolved false");
              const registeredIncomingCallIds = iter.registeredIncomingCallIds;
              registeredIncomingCallIds.delete(iter);
            }
          });
        }
        tmp = _self;
      }
      const iter = set[Symbol.iterator]();
      while (iter !== undefined) {
        let _loopResult = _loop(iter.next());
        continue;
      }
    }
  }
  obj = self(1625);
};
prototype["startCall"] = function startCall(channelId, arg1) {
  closure_0 = channelId;
  const self = this;
  return callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
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
            closure_1 = tmp3;
            channelId = tmp5;
            channelId = undefined;
            closure_1 = undefined;
            channelId = closure_1_0.channelId;
            const guildId = closure_1_0.guildId;
            const currentCall = self.currentCall;
            channelId = undefined;
            if (currentCall != null) {
              channelId = currentCall.channelId;
            }
            if (channelId === channelId) {
              if (self.currentCall.state === closure_1_26.Connected) {
                closure_1_25.info("Call already active for channel:", channelId);
                c5 = 3;
                return { value: true, done: true };
              }
            }
            closure_1_25.info("Starting Telecom call:", channelId);
            c3 = 1;
            let obj2 = self(closure_1_2[18]);
            let tmp35 = null;
            if (null != guildId) {
              obj1 = { guildId: null };
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
          closure_1_25.warn("Failed to register call with Telecom:", closure_2);
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
            closure_1_25.warn("Native startCall returned false, clearing call state");
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
  closure_0 = currentCall;
  obj.info("Ending call:", currentCall.channelId);
  obj = self(16711);
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
prototype["setCallActive"] = function setCallActive(channelId, isSelfMuteResult) {
  const self = this;
  const currentCall = this.currentCall;
  channelId = undefined;
  if (currentCall != null) {
    channelId = currentCall.channelId;
  }
  if (channelId === channelId) {
    obj.info("Setting call active:", channelId);
    isSelfMuteResult = closure_10.isSelfMute();
    obj = enforcingDefault2;
    obj.setCallActive(channelId, isSelfMuteResult);
    self.lastMuteState = isSelfMuteResult;
    self.lastScreenShareActive = false;
  } else {
    obj.warn("setCallActive called for unknown channel:", channelId);
  }
};
prototype["setIncomingCallActive"] = function setIncomingCallActive(arg0, pendingMutePreference) {
  const self = this;
  const currentCall = this.currentCall;
  let channelId;
  if (currentCall != null) {
    channelId = currentCall.channelId;
  }
  if (channelId === arg0) {
    obj.info("Setting incoming call active:", arg0);
    const isSelfMuteResult = closure_10.isSelfMute();
    let tmp7 = isSelfMuteResult;
    if (null != self.pendingMutePreference) {
      pendingMutePreference = self.pendingMutePreference;
      self.pendingMutePreference = null;
      tmp7 = isSelfMuteResult;
      if (isSelfMuteResult !== pendingMutePreference) {
        obj.info("Re-applying Telecom Bar ringing-state mute preference:", pendingMutePreference);
        trackDeviceChangedDefault.setSelfMute(MediaEngineContextTypes.DEFAULT, pendingMutePreference, false);
        tmp7 = pendingMutePreference;
      }
    }
    const result = enforcingDefault2.setIncomingCallActive(arg0, tmp7);
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
        const isSelfMuteResult = closure_10.isSelfMute();
        if (self.lastMuteState !== isSelfMuteResult) {
          self.lastMuteState = isSelfMuteResult;
          obj.info("Syncing Discord -> Call Bar mute state:", isSelfMuteResult);
          obj = enforcingDefault2;
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
            obj = self(16711);
            obj.setScreenShareState(self.currentCall.channelId, true, true);
          } else {
            let channelId = self.currentCall.channelId;
            const _setTimeout = setTimeout;
            self.pendingScreenShareOffSyncTimeout = setTimeout(() => {
              self.pendingScreenShareOffSyncTimeout = null;
              let isEnabledResult = self.isEnabled();
              if (isEnabledResult) {
                const currentCall = self.currentCall;
                channelId = undefined;
                if (currentCall != null) {
                  channelId = currentCall.channelId;
                }
                isEnabledResult = channelId === channelId;
              }
              if (isEnabledResult) {
                closure_1_25.info("Syncing Discord -> Call Bar screen share state: false (delayed)");
                self(dependencyMap[18]).setScreenShareState(channelId, true, false);
                obj = self(dependencyMap[18]);
              }
            }, 400);
          }
        }
      }
    }
  }
};
const telecomManager = new TelecomManager();
let result = require("obj132").fileFinishedImporting("modules/calls/native/TelecomManager.android.tsx");

export default telecomManager;