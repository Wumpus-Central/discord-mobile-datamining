// discord_app/modules/calls/native/TelecomManager.android.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import Constants from "../../../Constants.tsx";
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import Constants2 from "../../../../discord_common/js/packages/media-engine/Constants.tsx";
import PrivateChannelCallUtils from "../../../utils/native/PrivateChannelCallUtils.tsx";
import SelectedChannelActionCreatorsDefault from "../../../actions/SelectedChannelActionCreators.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeAppLifecycleModule.tsx";
import AudioActionCreatorsDefault from "../../../actions/AudioActionCreators.tsx";
import CallActionCreatorsDefault from "../../../actions/CallActionCreators.tsx";
import SoundUtils from "../../sound_playback/SoundUtils.tsx";
import useHasVideoPermission from "../../video_calls/useHasVideoPermission.tsx";
import useScreenshareUtils from "../../video_calls/native/useScreenshareUtils.tsx";
import react_nativeDefault2 from "../../../../discord_common/js/packages/rtn-codegen/js/NativeTelecomModule.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import SoundpackStore from "../../soundpacks/SoundpackStore.tsx";
import ApplicationStreamingStore from "../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import CallStore from "../../../stores/CallStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import NotificationSettingsStore from "../../../stores/NotificationSettingsStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import StreamerModeStore from "../../../stores/StreamerModeStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let _require, c4, c5, closure_2, map, set;

let NativeEventEmitter;
let closure_4;
({ DeviceEventEmitter: closure_4, NativeEventEmitter } = react_native);
const ApplicationStreamStates = Constants.ApplicationStreamStates;
const MediaEngineContextTypes = Constants2.MediaEngineContextTypes;
let c18 = "telecom-end-call-requested";
let c19 = "telecom-set-foreground-requested";
let c20 = "telecom-mic-mute-requested";
let c21 = "telecom-screen-share-requested";
let c22 = "telecom-incoming-call-answered";
let c23 = "telecom-incoming-call-rejected";
let c24 = "telecom-answer-call-requested";
let currentCall = new LoggerDefault("TelecomManager");
currentCall.enableNativeLogger(true);
const prioritySpeakerDucking = {
  Ringing: 0,
  [0]: "Ringing",
  Connecting: 1,
  [1]: "Connecting",
  Connected: 2,
  [2]: "Connected",
};
const nativeEventEmitter = new NativeEventEmitter(react_nativeDefault);
class TelecomManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const require = applyArgumentsResult;
    map = new Map();
    let result = map.set(RTCConnectionStore, () => require.reconcileTelecomState());
    const result1 = result.set(MediaEngineStore, () => require.handleMuteStoreChange());
    const result2 = result1.set(ApplicationStreamingStore, () => require.handleScreenShareStoreChange());
    applyArgumentsResult.stores = result2.set(CallStore, () => require.handleIncomingCallStoreChange());
    applyArgumentsResult.actions = {
      CALL_CREATE(arg0) {
        return require.handleCallCreate(arg0);
      },
      CALL_UPDATE(arg0) {
        return require.handleCallUpdate(arg0);
      },
      CALL_DELETE(arg0) {
        return require.handleCallDelete(arg0);
      },
    };
    applyArgumentsResult.currentCall = null;
    applyArgumentsResult.isInitialized = false;
    applyArgumentsResult.lastMuteState = null;
    applyArgumentsResult.registeredIncomingCallIds = new Set();
    applyArgumentsResult.lastScreenShareActive = null;
    applyArgumentsResult.pendingScreenShareOffSyncTimeout = null;
    applyArgumentsResult.reconcilePromise = null;
    applyArgumentsResult.needsReconcile = false;
    applyArgumentsResult.hostDestroySubscription = null;
    applyArgumentsResult.pendingMutePreference = null;
    applyArgumentsResult.ringtone = null;
    applyArgumentsResult.handleHostDestroy = function handleHostDestroy() {
      if (require.isEnabled()) {
        if (null != require.currentCall) {
          if (require.currentCall.state === closure_26.Ringing) {
            require.info("Activity destroyed with ringing call, cancelling incoming call");
            require.cancelIncomingCall(require.currentCall.channelId);
          } else {
            require.info("Activity destroyed with active call, disconnecting from voice channel");
            const obj2 = SelectedChannelActionCreatorsDefault;
            obj2.disconnect();
          }
        }
      }
    };
    applyArgumentsResult.handleEndCallRequested = function handleEndCallRequested(callId) {
      obj.info("Received end call request from Call Bar:", callId.callId);
      if (null != require.currentCall) {
        if (callId.callId === require.currentCall.channelId) {
          if (require.currentCall.state === closure_26.Ringing) {
            obj.info("Rejecting ringing call from Call Bar:", require.currentCall.channelId);
            const obj4 = CallActionCreatorsDefault;
            obj4.stopRinging(require.currentCall.channelId);
            require.clearCall(require.currentCall.channelId);
          } else {
            const obj3 = SelectedChannelActionCreatorsDefault;
            obj3.disconnect();
          }
          return tmp6;
        }
      }
    };
    applyArgumentsResult.handleSetForegroundRequested = function handleSetForegroundRequested(callId) {
      let obj;
      obj.info("Received set foreground request from Call Bar");
      if (null != require.currentCall) {
        if (callId.callId === require.currentCall.channelId) {
          const channel = ChannelStore.getChannel(require.currentCall.channelId);
          if (null != channel) {
            obj = PrivateChannelCallUtils;
            const result = obj.navigateToVoiceChannel(channel, "Call Bar");
          }
        }
      }
    };
    applyArgumentsResult.handleMicMuteRequested = function handleMicMuteRequested(callId) {
      obj.info("Received mic mute request from Call Bar:", callId.callId, "isMuted:", callId.isMuted);
      const tmp3 = null != require.currentCall && callId.callId === require.currentCall.channelId;
      if (tmp3) {
        const tmp5 = require.currentCall.state !== closure_26.Ringing && require.currentCall.state !== tmp4.Connecting;
        if (!tmp5) {
          require.pendingMutePreference = callId.isMuted;
        }
        if (MediaEngineStore.isSelfMute() !== callId.isMuted) {
          obj.info("Updating Call Bar -> Discord mute state:", callId.isMuted);
          const obj2 = AudioActionCreatorsDefault;
          obj2.toggleSelfMute();
        }
      }
    };
    applyArgumentsResult.handleScreenShareRequested = function handleScreenShareRequested(callId) {
      obj.info("Received screen share request from Call Bar:", callId.callId, "isEnabled:", callId.isEnabled);
      if (null != require.currentCall) {
        if (callId.callId === require.currentCall.channelId) {
          const channel = ChannelStore.getChannel(require.currentCall.channelId);
          if (null != channel) {
            const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
            if (callId.isEnabled) {
              if (
                !(null != currentUserActiveStream && currentUserActiveStream.state === ApplicationStreamStates.ACTIVE)
              ) {
                const obj2 = useHasVideoPermission;
                const videoPermission = obj2.getVideoPermission(channel);
                const obj3 = useScreenshareUtils;
                if (obj3.getOSRequirement()) {
                  if (videoPermission) {
                    obj.info("Starting screen share from Call Bar");
                    const tmp5Result = useScreenshareUtils;
                    tmp5Result.startStream();
                  } else {
                    obj.warn(
                      "Cannot start screen share from Call Bar: user lacks streaming permission in this channel",
                    );
                  }
                } else {
                  obj.warn("Cannot start screen share from Call Bar: OS version does not meet requirements");
                }
              }
            }
            const tmp12 =
              !callId.isEnabled &&
              null != currentUserActiveStream &&
              currentUserActiveStream.state === ApplicationStreamStates.ACTIVE;
            if (tmp12) {
              obj.info("Stopping screen share from Call Bar");
              const obj5 = useScreenshareUtils;
              obj5.stopScreenshare();
            }
          }
        }
      }
    };
    applyArgumentsResult.handleAnswerCallRequested = function handleAnswerCallRequested(callId) {
      obj.info("Received answer call request from Call Bar:", callId.callId);
      const tmp2 = null != require.currentCall && callId.callId === require.currentCall.channelId;
      if (tmp2) {
        if (require.currentCall.state === closure_26.Ringing) {
          require.stopRingtone();
          require.currentCall.state = tmp3.Connecting;
          obj.info("Answering incoming call, joining voice channel:", require.currentCall.channelId);
          const obj3 = SelectedChannelActionCreatorsDefault;
          const voiceChannel = obj3.selectVoiceChannel(require.currentCall.channelId);
        } else {
          obj.warn("Answer requested but call is not ringing:", require.currentCall.state);
        }
      }
    };
    applyArgumentsResult.handleCallCreate = function handleCallCreate(channelId) {
      let isEnabledResult = require.isEnabled();
      if (isEnabledResult) {
        const obj2 = MetaQuestUtils;
        isEnabledResult = obj2.isMetaQuest();
      }
      if (isEnabledResult) {
        require.processIncomingRing(channelId.channelId, channelId.ongoingRings);
      }
    };
    applyArgumentsResult.handleCallUpdate = function handleCallUpdate(channelId) {
      let isEnabledResult = require.isEnabled();
      if (isEnabledResult) {
        const obj2 = MetaQuestUtils;
        isEnabledResult = obj2.isMetaQuest();
      }
      if (isEnabledResult) {
        require.processIncomingRing(channelId.channelId, channelId.ongoingRings);
      }
    };
    applyArgumentsResult.handleCallDelete = function handleCallDelete(channelId) {
      let isEnabledResult = require.isEnabled();
      if (isEnabledResult) {
        const obj2 = MetaQuestUtils;
        isEnabledResult = obj2.isMetaQuest();
      }
      if (isEnabledResult) {
        currentCall = require.currentCall;
        channelId = undefined;
        if (currentCall != null) {
          channelId = currentCall.channelId;
        }
        isEnabledResult = channelId === channelId.channelId;
      }
      if (isEnabledResult) {
        isEnabledResult = require.isPendingIncomingCall(require.currentCall);
      }
      if (isEnabledResult) {
        require.info("Pending incoming call deleted, cancelling incoming call:", channelId.channelId);
        require.cancelIncomingCall(channelId.channelId);
      }
    };
    applyArgumentsResult.handleIncomingCallAnswered = function handleIncomingCallAnswered(callId) {
      let logger;
      let obj;
      obj.info("Received incoming call answered from telecom:", callId.callId);
      const registeredIncomingCallIds = require.registeredIncomingCallIds;
      registeredIncomingCallIds.delete(callId.callId);
      obj = react_nativeDefault2;
      const endCallResult = obj.endCall(callId.callId);
      endCallResult.catch((error) => {
        logger.warn("Failed to end answered telecom call:", error);
      });
      const obj2 = SelectedChannelActionCreatorsDefault;
      const voiceChannel = obj2.selectVoiceChannel(callId.callId);
    };
    applyArgumentsResult.handleIncomingCallRejected = function handleIncomingCallRejected(callId) {
      let logger;
      let obj;
      obj.info("Received incoming call rejected from telecom:", callId.callId);
      const registeredIncomingCallIds = require.registeredIncomingCallIds;
      registeredIncomingCallIds.delete(callId.callId);
      obj = CallActionCreatorsDefault;
      const stopRingingResult = obj.stopRinging(callId.callId);
      stopRingingResult.catch((error) => {
        logger.warn("Failed to stop ringing after telecom reject:", error);
      });
    };
    new Set();
    return applyArgumentsResult;
  }
  _initialize() {
    const self = this;
    if (!this.isInitialized) {
      obj.info("Initializing CallKitManager using Telecom framework");
      const hostDestroySubscription = self.hostDestroySubscription;
      if (hostDestroySubscription != null) {
        hostDestroySubscription.remove();
      }
      self.hostDestroySubscription = nativeEventEmitter.addListener("onHostDestroy", self.handleHostDestroy);
      React3.addListener(c18, self.handleEndCallRequested);
      React3.addListener(c19, self.handleSetForegroundRequested);
      React3.addListener(c20, self.handleMicMuteRequested);
      React3.addListener(c21, self.handleScreenShareRequested);
      React3.addListener(c22, self.handleIncomingCallAnswered);
      React3.addListener(c23, self.handleIncomingCallRejected);
      React3.addListener(c24, self.handleAnswerCallRequested);
      self.isInitialized = true;
    }
  }
  _terminate() {
    let logger;
    const self = this;
    if (this.isInitialized) {
      const hostDestroySubscription = self.hostDestroySubscription;
      if (hostDestroySubscription != null) {
        hostDestroySubscription.remove();
      }
      self.hostDestroySubscription = null;
      React3.removeAllListeners(c18);
      React3.removeAllListeners(c19);
      React3.removeAllListeners(c20);
      React3.removeAllListeners(c21);
      React3.removeAllListeners(c22);
      React3.removeAllListeners(c23);
      React3.removeAllListeners(c24);
      const registeredIncomingCallIds = self.registeredIncomingCallIds;
      for (const item10033 of registeredIncomingCallIds) {
        let obj = react_nativeDefault2;
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
  }
  isEnabled() {
    return this.isInitialized;
  }
  processIncomingRing(channelId, ongoingRings) {
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
    const tmp4 = channelId2 === channelId && self.currentCall.state === closure_26.Ringing;
    if (tmp4) {
      obj.info("Call no longer ringing, cancelling incoming call:", channelId);
      self.cancelIncomingCall(channelId);
    }
  }
  reportIncomingCall(channelId) {
    const self = this;
    _require = channelId;
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      const tmp3 =
        null != self.currentCall &&
        self.currentCall.channelId !== channelId &&
        self.isPendingIncomingCall(self.currentCall);
      if (tmp3) {
        self.cancelIncomingCall(self.currentCall.channelId);
      }
      const obj2 = require("useChannelName");
      const channelName = obj2.computeChannelName(channel, UserStore, RelationshipStore);
      let guildId = channel.getGuildId();
      if (guildId == null) {
        guildId = null;
      }
      currentCall = { channelId, guildId, channelName, state: closure_26.Ringing };
      self.currentCall = currentCall;
      currentCall.info("Reporting incoming call to Telecom:", channelId, "callerName:", channelName);
      self.startRingtone();
      let tmp20 = null;
      const reportIncomingCall = self(17633).reportIncomingCall;
      self(17633);
      if (null != guildId) {
        tmp20 = { guildId };
        const obj3 = { guildId };
      }
      const reportIncomingCallResult = reportIncomingCall(channelId, channelName, tmp20);
      const nextPromise = reportIncomingCallResult.then((result) => {
        const tmp = result;
        if (!tmp) {
          obj.warn("Failed to report incoming call: resolved false");
          self.clearCall(channelId);
        }
      });
      nextPromise.catch((error) => {
        obj.warn("Failed to report incoming call:", error);
        self.clearCall(channelId);
      });
    } else {
      let tmp = currentCall;
      currentCall.warn("Cannot report incoming call: channel not found:", channelId);
    }
  }
  cancelIncomingCall(channelId) {
    let obj;
    const self = this;
    let closure_0 = channelId;
    obj.info("Cancelling incoming call:", channelId);
    obj = self(17633);
    const cancelIncomingCallResult = obj.cancelIncomingCall(channelId);
    const nextPromise = cancelIncomingCallResult.then(() => {
      self.clearCall(channelId);
      return true;
    });
    return nextPromise.catch((error) => {
      obj.warn("Failed to cancel incoming call:", error);
      self.clearCall(channelId);
      return false;
    });
  }
  isPendingIncomingCall(currentCall) {
    return currentCall.state === closure_26.Ringing || currentCall.state === tmp.Connecting;
  }
  reconcileTelecomState() {
    const self = this;
    let isEnabledResult = this.isEnabled();
    if (isEnabledResult) {
      const obj = MetaQuestUtils;
      isEnabledResult = obj.isMetaQuest();
    }
    if (isEnabledResult) {
      if (null == self.reconcilePromise) {
        const doReconcileResult = self.doReconcile();
        self.reconcilePromise = doReconcileResult.finally(() => {
          self.reconcilePromise = null;
          if (self.needsReconcile) {
            self.needsReconcile = false;
            const result = self.reconcileTelecomState();
          }
        });
      } else {
        self.needsReconcile = true;
      }
    }
  }
  doReconcile() {
    const self = this;
    return (async () => {
      let closure_1;
      let guildId;
      let obj11;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let c2;
          let tmp;
          let channelId;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c2 = 0;
              tmp = undefined;
              channelId = RTCConnectionStore.getChannelId();
              const isConnectedResult = RTCConnectionStore.isConnected();
              let tmp36 = null;
              if (isConnectedResult) {
                tmp36 = null;
                if (null != channelId) {
                  tmp36 = channelId;
                }
              }
              channelId = tmp36;
              const currentCall2 = self.currentCall;
              let channelId1;
              const info = logger.info;
              if (currentCall2 != null) {
                channelId1 = currentCall2.channelId;
              }
              const currentCall3 = self.currentCall;
              let state;
              if (currentCall3 != null) {
                state = currentCall3.state;
              }
              info(
                "Reconcile: rtc=",
                channelId,
                "connected=",
                isConnectedResult,
                "target=",
                tmp36,
                "current=",
                channelId1,
                "state=",
                state,
              );
              if (null != tmp36) {
                const currentCall4 = self.currentCall;
                let channelId2;
                if (currentCall4 != null) {
                  channelId2 = currentCall4.channelId;
                }
                if (channelId2 !== tmp36) {
                  const currentCall5 = self.currentCall;
                  let channelId3;
                  if (currentCall5 != null) {
                    channelId3 = currentCall5.channelId;
                  }
                  if (channelId3 === tmp36) {
                    logger.info("Incoming call answered, transitioning to active:", tmp36);
                    self.stopRingtone();
                    self.currentCall.state = closure_1_26.Connected;
                    const result = self.setIncomingCallActive(tmp36);
                    c4 = 3;
                    const obj4 = { value: undefined, done: true };
                    return obj4;
                  }
                  const tmp64 = null != self.currentCall && self.currentCall.channelId !== tmp36;
                  if (tmp64) {
                    if (self.isPendingIncomingCall(self.currentCall)) {
                      c3 = 2;
                      c4 = 1;
                      const obj6 = { value: self.cancelIncomingCall(self.currentCall.channelId), done: false };
                      return obj6;
                    } else {
                      c3 = 1;
                      c4 = 1;
                      const obj7 = { value: self.endCall(self.currentCall), done: false };
                      return obj7;
                    }
                  }
                }
              } else {
                const tmp51 =
                  null != self.currentCall &&
                  self.currentCall.state !== closure_1_26.Ringing &&
                  self.currentCall.state !== closure_1_26.Connecting;
                if (tmp51) {
                  c3 = 5;
                  c4 = 1;
                  const obj8 = { value: self.reportCallEnded(), done: false };
                  return obj8;
                }
              }
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj9 = { value, done: true };
              return obj9;
            }
          } else if (2 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj10 = { value, done: true };
              return obj10;
            }
          } else if (3 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj12 = { value, done: true };
              return obj12;
            } else if (value) {
              currentCall = closure_130_0.currentCall;
              let channelId4;
              if (currentCall != null) {
                channelId4 = currentCall.channelId;
              }
              if (channelId4 !== channelId) {
                logger.info("Call state changed during startCall, ending orphaned native call:", channelId);
                const obj5 = tmp(c2[18]);
                const endCallResult = obj5.endCall(channelId);
                endCallResult.catch((error) => {
                  logger.warn("Failed to end orphaned call:", error);
                });
                c4 = 3;
                const obj13 = { value: undefined, done: true };
                return obj13;
              } else {
                if (RTCConnectionStore.isConnected()) {
                  if (RTCConnectionStore.getChannelId() === channelId) {
                    closure_130_0.currentCall.state = closure_1_26.Connected;
                    closure_130_0.setCallActive(channelId);
                  }
                }
                logger.info("RTCConnectionStore indicates disconnect after startCall, ending call:", channelId);
                c3 = 4;
                c4 = 1;
                const obj15 = { value: closure_130_0.reportCallEnded(), done: false };
                return obj15;
              }
            }
          } else if (4 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj16 = { value, done: true };
              return obj16;
            } else {
              c4 = 3;
              const obj17 = { value: undefined, done: true };
              return obj17;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          }
          const currentCall6 = closure_130_0.currentCall;
          let channelId5;
          if (currentCall6 != null) {
            channelId5 = currentCall6.channelId;
          }
          if (channelId5 !== channelId) {
            tmp = channel.getChannel(channelId);
            if (null == tmp) {
              c4 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const obj18 = {
                channelId,
                guildId,
                channelName: obj11.computeChannelName(tmp, UserStore, RelationshipStore),
                state: closure_1_26.Connecting,
              };
              guildId = RTCConnectionStore.getGuildId() ?? null;
              obj11 = guildId(c2[26]);
              closure_130_0.currentCall = obj18;
            }
          }
          if (closure_130_0.currentCall.state === closure_1_26.Connecting) {
            channelId = closure_130_0.currentCall.channelId;
            const obj19 = {
              channelId: closure_130_0.currentCall.channelId,
              guildId: closure_130_0.currentCall.guildId,
            };
            c3 = 3;
            c4 = 1;
            const obj20 = { value: closure_130_0.startCall(obj19), done: false };
            return obj20;
          }
        } catch (tmp102) {
          c4 = 3;
          throw tmp102;
        }
      }
    })();
  }
  handleIncomingCallStoreChange() {
    let logger;
    const self = this;
    let obj = self(1615);
    if (!obj.isMetaQuest()) {
      if (self.isEnabled()) {
        const _Set = Set;
        const self2 = this;
        const self3 = this;
        const id = AuthenticationStore.getId();
        set = new Set();
        const calls = CallStore.getCalls();
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
            let obj3 = react_nativeDefault2;
            let endCallResult = obj3.endCall(item10042);
            let catchPromise = endCallResult.catch((error) => {
              logger.warn("Failed to end telecom call:", error);
            });
          }
          continue;
        }
        function _loop(iter) {
          let closure_0 = iter;
          let registeredIncomingCallIds = closure_0.registeredIncomingCallIds;
          let tmp = closure_0;
          if (!registeredIncomingCallIds.has(iter)) {
            const registeredIncomingCallIds2 = tmp.registeredIncomingCallIds;
            registeredIncomingCallIds2.add(iter);
            const obj = react_nativeDefault2;
            const registerIncomingCallResult = obj.registerIncomingCall(iter);
            const nextPromise = registerIncomingCallResult.then((result) => {
              const tmp = result;
              if (!tmp) {
                obj.warn("Failed to register incoming call with telecom: resolved false");
                const registeredIncomingCallIds = self.registeredIncomingCallIds;
                registeredIncomingCallIds.delete(iter);
              }
            });
            nextPromise.catch((error) => {
              obj.warn("Failed to register incoming call with telecom:", error);
              const registeredIncomingCallIds = self.registeredIncomingCallIds;
              registeredIncomingCallIds.delete(iter);
            });
          }
        }
        const iter = tmp4[Symbol.iterator]();
        while (iter !== undefined) {
          let _loopResult = _loop(iter.next());
          continue;
        }
      }
    }
  }
  startCall(channelId) {
    let closure_0 = channelId;
    const self = this;
    return (async () => {
      let closure_1;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let tmp;
          let closure_0;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              tmp = undefined;
              closure_0 = currentCall.channelId;
              const guildId = currentCall.guildId;
              currentCall = self.currentCall;
              let channelId1;
              if (currentCall != null) {
                channelId1 = currentCall.channelId;
              }
              if (channelId1 === closure_0) {
                currentCall = Connected.Connected;
                if (self.currentCall.state === currentCall) {
                  currentCall = logger;
                  logger.info("Call already active for channel:", closure_0);
                  c5 = 3;
                  return { value: true, done: true };
                }
              }
              logger.info("Starting Telecom call:", closure_0);
              c3 = 1;
              currentCall = null;
              const startCall = tmp(closure_2[18]).startCall;
              const tmp31 = tmp(closure_2[18]);
              if (null != guildId) {
                const obj4 = { guildId };
                currentCall = obj4;
              }
              c4 = 2;
              c5 = 1;
              const obj5 = { value: startCall(closure_0, currentCall), done: false };
              return obj5;
            }
          } else if (1 === tmp4) {
            c3 = 0;
            logger.warn("Failed to register call with Telecom:", closure_2);
            closure_129_1.clearCall(closure_0);
            c5 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            tmp = value;
            currentCall = tmp;
            if (!currentCall) {
              logger.warn("Native startCall returned false, clearing call state");
              closure_129_1.clearCall(closure_0);
            }
            currentCall = tmp;
            c3 = 0;
            c5 = 3;
            const obj = { value: currentCall, done: true };
            return obj;
          }
        } catch (tmp33) {
          closure_2 = tmp33;
          if (0 === c3) {
            c5 = 3;
            throw tmp33;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  }
  endCall(channelId) {
    let obj;
    const self = this;
    obj.info("Ending call:", channelId.channelId);
    obj = self(17633);
    const endCallResult = obj.endCall(channelId.channelId);
    const nextPromise = endCallResult.then((result) => {
      self.clearCall(channelId.channelId);
      return result;
    });
    return nextPromise.catch((error) => {
      obj.warn("Failed to end call:", error);
      self.clearCall(channelId.channelId);
      return false;
    });
  }
  reportCallEnded() {
    let resolved;
    const self = this;
    obj.info("Reporting call ended");
    if (null == this.currentCall) {
      resolved = Promise.resolve(true);
    } else if (self.currentCall.state === closure_26.Ringing) {
      resolved = self.cancelIncomingCall(self.currentCall.channelId);
    } else {
      resolved = self.endCall(self.currentCall);
    }
    return resolved;
  }
  setCallActive(channelId) {
    let obj;
    const self = this;
    currentCall = this.currentCall;
    channelId = undefined;
    if (currentCall != null) {
      channelId = currentCall.channelId;
    }
    if (channelId === channelId) {
      obj.info("Setting call active:", channelId);
      const isSelfMuteResult = MediaEngineStore.isSelfMute();
      obj = react_nativeDefault2;
      obj.setCallActive(channelId, isSelfMuteResult);
      self.lastMuteState = isSelfMuteResult;
      self.lastScreenShareActive = false;
    } else {
      obj.warn("setCallActive called for unknown channel:", channelId);
    }
  }
  setIncomingCallActive(arg0) {
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
          const obj2 = AudioActionCreatorsDefault;
          obj2.setSelfMute(MediaEngineContextTypes.DEFAULT, pendingMutePreference, false);
          tmp7 = pendingMutePreference;
        }
      }
      const obj3 = react_nativeDefault2;
      const result = obj3.setIncomingCallActive(arg0, tmp7);
      self.lastMuteState = tmp7;
      self.lastScreenShareActive = false;
    } else {
      obj.warn("setIncomingCallActive called for unknown channel:", arg0);
    }
  }
  clearScreenShareState() {
    this.lastScreenShareActive = null;
  }
  clearPendingScreenShareOffSync() {
    const self = this;
    if (null != this.pendingScreenShareOffSyncTimeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.pendingScreenShareOffSyncTimeout);
      self.pendingScreenShareOffSyncTimeout = null;
    }
  }
  clearCall(channelId) {
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
  }
  startRingtone() {
    const self = this;
    const obj = MetaQuestUtils;
    const isMetaQuestResult = obj.isMetaQuest() && null == self.ringtone;
    if (isMetaQuestResult) {
      const disableSounds =
        StreamerModeStore.disableSounds || NotificationSettingsStore.isSoundDisabled("call_ringing");
      if (!disableSounds) {
        const tmpResult = SoundUtils;
        self.ringtone = tmpResult.createSoundForPack("call_ringing", SoundpackStore.getSoundpack());
        const ringtone = self.ringtone;
        ringtone.loop();
      }
    }
  }
  stopRingtone() {
    const ringtone = this.ringtone;
    if (null != ringtone) {
      this.ringtone = null;
      ringtone.stop();
    }
  }
  handleMuteStoreChange() {
    let obj;
    const self = this;
    if (this.isEnabled()) {
      if (null != self.currentCall) {
        if (self.currentCall.state === closure_26.Connected) {
          const isSelfMuteResult = MediaEngineStore.isSelfMute();
          if (self.lastMuteState !== isSelfMuteResult) {
            self.lastMuteState = isSelfMuteResult;
            obj.info("Syncing Discord -> Call Bar mute state:", isSelfMuteResult);
            obj = react_nativeDefault2;
            obj.setMicMuted(self.currentCall.channelId, isSelfMuteResult);
          }
        }
      }
    }
  }
  handleScreenShareStoreChange() {
    let obj;
    const self = this;
    if (this.isEnabled()) {
      if (null != self.currentCall) {
        if (self.currentCall.state === closure_26.Connected) {
          const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
          if (
            self.lastScreenShareActive !==
            (null != currentUserActiveStream && currentUserActiveStream.state === ApplicationStreamStates.ACTIVE)
          ) {
            self.lastScreenShareActive =
              null != currentUserActiveStream && currentUserActiveStream.state === ApplicationStreamStates.ACTIVE;
            const result = self.clearPendingScreenShareOffSync();
            if (null != currentUserActiveStream && currentUserActiveStream.state === ApplicationStreamStates.ACTIVE) {
              obj.info("Syncing Discord -> Call Bar screen share state: true");
              obj = self(17633);
              obj.setScreenShareState(self.currentCall.channelId, true, true);
            } else {
              let channelId = self.currentCall.channelId;
              const _setTimeout = setTimeout;
              self.pendingScreenShareOffSyncTimeout = setTimeout(() => {
                let obj;
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
                  obj = react_nativeDefault2;
                  obj.setScreenShareState(channelId, true, false);
                }
              }, 400);
            }
          }
        }
      }
    }
  }
}
const prototype = TelecomManager.prototype;
const telecomManager = new TelecomManager();
let result = size.fileFinishedImporting("modules/calls/native/TelecomManager.android.tsx");

export default telecomManager;
