// discord_app/modules/calls/native/SystemTelecomManager.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import v1 from "../../../../_runtime/01266_v1.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import useChannelName from "../../channel/useChannelName.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import AudioActionCreatorsDefault from "../../../actions/AudioActionCreators.tsx";
import SelectedChannelActionCreatorsDefault from "../../../actions/SelectedChannelActionCreators.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import CallActionCreatorsDefault from "../../../actions/CallActionCreators.tsx";
import RequestGatewaySocketAll from "../../gateway/RequestGatewaySocket.tsx";
import SystemTelecomPlatform from "SystemTelecomPlatform.android.tsx";
import SystemTelecomUtils from "SystemTelecomUtils.android.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import GatewayConnectionStore from "../../gateway/GatewayConnectionStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";
import SortedVoiceStateStore from "../../../stores/views/SortedVoiceStateStore.tsx";
import NativeSystemTelecomModule from "../../../../discord_common/js/packages/rtn-codegen/js/NativeSystemTelecomModule.tsx";
import LifecycleManager from "../../../lib/LifecycleManager.tsx";

require = fn;
function toHandle(getGuildId) {
  ({ type, id, recipients } = getGuildId);
  if (recipients == null) {
    recipients = [];
  }
  let num = recipients[0];
  const guildId = getGuildId.getGuildId();
  if (type === constants2.DM) {
    if (num == null) {
      num = 0;
    }
    const _HermesInternal2 = HermesInternal;
    let combined = "" + c27 + id + "." + type + "." + num;
  } else {
    let num2 = guildId;
    if (guildId == null) {
      num2 = 0;
    }
    const _HermesInternal = HermesInternal;
    combined = "" + c27 + id + "." + type + "." + num2;
  }
  return combined;
}
const AppState = fn(17).AppState;
const isMultiUserDM = fn(4996).isMultiUserDM;
let Constants = fn(1072);
({
  AnalyticEvents: closure_18,
  ChannelTypes: closure_19,
  AppStates: closure_20,
  ME: closure_21,
  RTCConnectionStates: closure_22,
} = Constants);
Constants = fn(5905);
({ Features: closure_23, MediaEngineContextTypes: closure_24 } = Constants);
let obj = new LoggerDefault("SystemTelecomManager");
obj.enableNativeLogger(true);
let closure_26 = NativeSystemTelecomModule.getConstants().isWaitingUntilRTCConnected;
let c27 = "discord:";
class SystemTelecomManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.currentUserId = null;
    obj.currentSessionId = null;
    obj.calls = {};
    obj.incomingCalls = {};
    obj.reportCallEndedTimeouts = {};
    obj.isDeleteable = {};
    obj.emitterSubscriptions = [];
    obj.handleSystemAnswerCall = function handleSystemAnswerCall(callId) {
      callId = callId.callId;
      const result = obj.clearReportCallEndedTimeout(callId);
      const findCallResult = obj.findCall(callId);
      if (null != findCallResult) {
        obj.reportRTCConnected(findCallResult);
        if (!findCallResult.connected) {
          findCallResult.ringing = false;
          findCallResult.connected = true;
          const channel = findCallResult.channel;
          const obj3 = { action_type: "join" };
          const obj2 = AnalyticsUtilsDefault;
          const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
          obj2.track(constants.CALLKIT_CLICKED, obj3);
          const obj6 = {
            location: AnalyticsLocationDefault.PUSH_NOTIFICATION,
            guild_id: channel.guild_id,
            ringer_user_id: findCallResult.ringer_user_id,
          };
          const obj5 = AnalyticsUtilsDefault;
          const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(findCallResult.channel));
          obj5.track(constants.RING_CALL_ACCEPTED, obj6);
          const obj8 = SelectedChannelActionCreatorsDefault;
          const obj9 = { lockVoiceStateForResume: !GatewayConnectionStore.isConnected() };
          const voiceChannel = obj8.selectVoiceChannel(channel.id, findCallResult.video, undefined, obj9);
          DispatcherDefault.dispatch({ type: "FORCE_INVISIBLE", invisible: false });
        }
      }
    };
    obj.handleSystemEndCall = function handleSystemEndCall(callId) {
      callId = callId.callId;
      const result = obj.clearReportCallEndedTimeout(callId);
      const popCallResult = obj.popCall(callId);
      if (null != popCallResult) {
        if ("incoming" === popCallResult.direction) {
          if (popCallResult.ringing) {
            CallActionCreatorsDefault.stopRinging(popCallResult.channel.id);
            obj.reportCallEnded(callId, popCallResult.channel.id);
            const obj4 = { action_type: "decline" };
            const obj3 = AnalyticsUtilsDefault;
            const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(popCallResult.channel));
            obj3.track(constants.CALLKIT_CLICKED, obj4);
            const obj7 = {
              location: AnalyticsLocationDefault.PUSH_NOTIFICATION,
              guild_id: popCallResult.channel.guild_id,
              ringer_user_id: popCallResult.ringer_user_id,
            };
            const obj6 = AnalyticsUtilsDefault;
            const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(popCallResult.channel));
            obj6.track(constants.RING_CALL_DECLINED, obj7);
          }
        }
        if (popCallResult.channel.id === SelectedChannelStore.getVoiceChannelId()) {
          const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(null);
        }
      } else {
        const entries = SnowflakeUtilsDefault.entries(obj.incomingCalls);
        const obj10 = entries[Symbol.iterator]();
        while (obj10 !== undefined) {
          let tmp10 = _slicedToArray(tmp7, 2);
          let first = tmp10[0];
          if (tmp10[1] === callId) {
            let incomingCalls = obj.incomingCalls;
            delete tmp2[tmp];
            let result1 = obj.updateActiveCallStatus();
            obj10.return();
            break;
          }
          break;
        }
      }
    };
    obj.handleSystemSetMuted = function handleSystemSetMuted(muted) {
      muted = muted.muted;
      if (selfMute.isSelfMute() !== muted) {
        logger.info("Updating system -> JS muted state", muted);
        AudioActionCreatorsDefault.setSelfMute(constants.DEFAULT, muted, false);
      }
    };
    closure_129_0 = undefined;
    closure_129_1 = obj;
    closure_129_0 = closure_4(async (arg0) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_2 = tmp4;
              const v0 = 0;
              closure_129_0 = undefined;
              closure_129_1 = undefined;
              ({ handle: closure_129_0, video: closure_129_1 } = closure_0);
              closure_129_2 = undefined;
              closure_129_3 = undefined;
              let type;
              let recipientId;
              let channelId;
              closure_129_7 = function selectChannel() {
                channel = channel.getChannel(closure_1_6);
                if (null != channel) {
                  const privateChannel = c1(dependencyMap[23]).selectPrivateChannel(channel.id);
                  obj = c1(dependencyMap[23]);
                }
              };
              dependencyMap = 1;
              c4 = 1;
              return { value: "flexDirection", done: true };
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                let supportsResult = closure_129_1;
                if (closure_129_1) {
                  supportsResult = selfMute.supports(constants2.VIDEO);
                }
                closure_129_2 = supportsResult;
                closure_129_3 = (function fromHandle(str) {
                  if (str.startsWith(closure_1_27)) {
                    str = str.slice(8);
                  }
                  const tmp = closure_1_5(str.split(/\.|:/), 3);
                  obj = { type: +tmp[1], recipientId: null, guildId: null, channelId: null };
                  let tmp5 = null;
                  if (+tmp[1] === constants.DM) {
                    tmp5 = tmp2;
                  }
                  obj.recipientId = tmp5;
                  let tmp6 = null;
                  if (+tmp[1] === constants.GUILD_VOICE) {
                    tmp6 = tmp2;
                  }
                  obj.guildId = tmp6;
                  obj.channelId = tmp[0];
                  return obj;
                })(closure_129_0);
                type = closure_129_3.type;
                recipientId = closure_129_3.recipientId;
                channelId = closure_129_3.channelId;
                if (null == closure_130_1.calls[channelId]) {
                  if (type === constants.DM) {
                    if (null != recipientId) {
                      dependencyMap = 2;
                      c4 = 1;
                      const obj7 = { value: v0(7627).ensurePrivateChannel(recipientId), done: false };
                      return obj7;
                    }
                  }
                  let hasChannelResult = isMultiUserDM(type);
                  if (hasChannelResult) {
                    hasChannelResult = ChannelStore.hasChannel(channelId);
                  }
                  if (hasChannelResult) {
                    const tmp55 = v0(7629);
                    const call2 = tmp55.call;
                    if (typeof call2 === "unknown") {
                      tmp55(tmp57, true);
                    } else {
                      call2(tmp56, tmp57, true);
                    }
                    closure_129_7();
                    tmp56 = channelId;
                  }
                } else {
                  v0(6053).setVideoEnabled(closure_129_2);
                  closure_129_7();
                  const obj2 = v0(6053);
                }
                c4 = 3;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 !== 2) {
              const tmp9 = v0(7629);
              const call = tmp9.call;
              if (typeof call === "unknown") {
                tmp9(tmp11, true);
              } else {
                call(tmp10, tmp11, true);
              }
              closure_129_7();
              tmp10 = channelId;
            }
            c4 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp67) {
          c4 = tmp;
          throw tmp67;
        }
      }
    });
    obj.handleSystemStartCall = function () {
      const self = this;
      const apply = obj.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj.handleIncomingCall = function handleIncomingCall(channelId) {
      const result = obj.forceInvisibleWhileInactive();
      obj.handleCallRing(channelId);
    };
    obj.handleIncomingCallEnded = function handleIncomingCallEnded(arg0) {
      const result = obj.forceInvisibleWhileInactive();
      if (null != obj.calls[arg0.channelId]) {
        obj.reportCallEnded(tmp2.uuid, tmp2.channel.id);
      }
    };
    obj.handleSessionStart = function handleSessionStart() {
      obj = obj(16533);
      obj.flushCallPushToken();
    };
    obj.handleConnectionOpen = function handleConnectionOpen(user) {
      obj.currentUserId = user.user.id;
      obj.currentSessionId = user.sessionId;
      obj = NativeSystemTelecomModule;
      obj.flushPendingEvents();
    };
    obj.handleConnectionClosed = function handleConnectionClosed() {
      obj.currentUserId = null;
      obj.currentSessionId = null;
      const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      const values = Object.values(obj.calls);
      for (const item10015 of values) {
        if (item10015.channel.id !== voiceChannelId) {
          let reportCallEndedResult = obj.reportCallEnded(item10015.uuid, item10015.channel.id);
        }
        continue;
      }
    };
    obj.handleCallCreate = function handleCallCreate(channelId) {
      channelId = channelId.channelId;
      if (null != obj.calls[channelId]) {
        tmp2.deletable = true;
      } else {
        tmp.isDeleteable[channelId] = true;
      }
    };
    obj.handleCallUpdate = function handleCallUpdate(arg0) {
      if (null != obj.calls[arg0.channelId]) {
        const _Object = Object;
        const keys = Object.keys(tmp);
        const ringing = tmp2.ringing;
        const hasItem = keys.includes(AuthenticationStore.getId());
        tmp2.ringing = hasItem;
        let tmp3 = !ringing;
        if (!ringing) {
          tmp3 = hasItem;
        }
        if (!tmp3) {
          if (tmp4) {
            obj.reportCallEnded(tmp2.uuid, tmp2.channel.id);
          }
          tmp4 = "incoming" === tmp2.direction && tmp2.deletable && !tmp2.connected && ringing && !hasItem;
        }
      }
    };
    obj.handleCallDelete = function handleCallDelete(arg0) {
      let deletable;
      if (obj.calls[arg0.channelId] != null) {
        deletable = tmp.deletable;
      }
      if (deletable) {
        obj.reportCallEnded(tmp.uuid, tmp.channel.id);
      }
    };
    obj.handleChannelDelete = function handleChannelDelete(arg0) {
      if (null != obj.calls[arg0.channel.id]) {
        obj.reportCallEnded(tmp.uuid, tmp.channel.id);
      }
    };
    obj.handleVoiceChannelSelect = function handleVoiceChannelSelect(channelId) {
      channelId = channelId.channelId;
      if (null == channelId) {
        if (null != channelId) {
          if (!obj.answerCall(channelId)) {
            obj2.startCall(channelId, tmp2);
          }
          obj2 = obj;
        } else {
          const _Object = Object;
          const values = Object.values(obj.calls);
          for (const item10023 of values) {
            if (!item10023.ringing) {
              let endCallResult = obj.endCall(tmp11.channel.id);
            }
            continue;
          }
        }
      } else {
        obj = SystemTelecomUtils;
      }
    };
    obj.handleVoiceStateUpdates = function handleVoiceStateUpdates(voiceStates) {
      voiceStates = voiceStates.voiceStates;
      const item = voiceStates.forEach((channelId) => {
        channelId = channelId.channelId;
        ({ guildId, userId, sessionId, selfVideo } = channelId);
        obj = obj(16534);
        if (obj.isSystemTelecomEnabledForChannel(guildId, channelId)) {
          if (null != channelId) {
            if (userId === currentUserId.currentUserId) {
              if (sessionId === currentUserId.currentSessionId) {
                if (null == currentUserId.calls[channelId]) {
                  if (!currentUserId.answerCall(channelId)) {
                    currentUserId.startCall(channelId, selfVideo);
                  }
                } else {
                  currentUserId.reportCall(channelId);
                }
              } else if (null != currentUserId.calls[channelId]) {
                currentUserId.reportCallEnded(tmp3.uuid, tmp3.channel.id);
              }
            } else {
              currentUserId.reportCall(channelId);
            }
          }
        }
      });
    };
    obj.handleRTCConnectionState = function handleRTCConnectionState(context) {
      if (context.context === constants6.DEFAULT) {
        if (tmp === constants4.RTC_CONNECTED) {
          if (null != obj.calls[tmp2]) {
            obj.reportRTCConnected(tmp4);
          }
        }
      }
    };
    obj.handleAudioToggleSelfMute = function handleAudioToggleSelfMute() {
      if (AppState.currentState === constants3.ACTIVE) {
        const isSelfMuteResult = MediaEngineStore.isSelfMute();
        const _Object = Object;
        const values = Object.values(obj.calls);
        const iter = values[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp4 = nextResult;
          if (nextResult.muted !== isSelfMuteResult) {
            tmp4.muted = isSelfMuteResult;
            obj = NativeSystemTelecomModule;
            let setCallMutedResult = obj.setCallMuted(tmp4.uuid, isSelfMuteResult);
            let infoResult = obj.info("Updating JS -> system muted state", isSelfMuteResult);
          }
          continue;
        }
      }
    };
    return obj;
  }
}
const prototype = SystemTelecomManager.prototype;
prototype["initialize"] = function initialize() {
  const subscription = DispatcherDefault.subscribe("START_SESSION", this.handleSessionStart);
  const subscription1 = DispatcherDefault.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
  const subscription2 = DispatcherDefault.subscribe("CONNECTION_CLOSED", this.handleConnectionClosed);
  const subscription3 = DispatcherDefault.subscribe("CALL_CREATE", this.handleCallCreate);
  const subscription4 = DispatcherDefault.subscribe("CALL_UPDATE", this.handleCallUpdate);
  const subscription5 = DispatcherDefault.subscribe("CALL_DELETE", this.handleCallDelete);
  const subscription6 = DispatcherDefault.subscribe("CHANNEL_DELETE", this.handleChannelDelete);
  const subscription7 = DispatcherDefault.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
  const subscription8 = DispatcherDefault.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
  const subscription9 = DispatcherDefault.subscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleAudioToggleSelfMute);
  const subscription10 = DispatcherDefault.subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState);
  const emitterSubscriptions = this.emitterSubscriptions;
  items = [...SystemTelecomPlatform.subscribeToCallPushToken()];
  items[tmp12] = NativeSystemTelecomModule.onIncomingCall(this.handleIncomingCall);
  const sum = tmp12 + 1;
  items[sum] = NativeSystemTelecomModule.onIncomingCallEnded(this.handleIncomingCallEnded);
  const sum1 = sum + 1;
  items[sum1] = NativeSystemTelecomModule.onSystemStartCall(this.handleSystemStartCall);
  const sum2 = sum1 + 1;
  items[sum2] = NativeSystemTelecomModule.onSystemAnswerCall(this.handleSystemAnswerCall);
  const sum3 = sum2 + 1;
  items[sum3] = NativeSystemTelecomModule.onSystemEndCall(this.handleSystemEndCall);
  items[sum3 + 1] = NativeSystemTelecomModule.onSystemSetMuted(this.handleSystemSetMuted);
  emitterSubscriptions.push.apply(items);
};
prototype["terminate"] = function terminate() {
  DispatcherDefault.unsubscribe("START_SESSION", this.handleSessionStart);
  DispatcherDefault.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
  DispatcherDefault.unsubscribe("CONNECTION_CLOSED", this.handleConnectionClosed);
  DispatcherDefault.unsubscribe("CALL_CREATE", this.handleCallCreate);
  DispatcherDefault.unsubscribe("CALL_UPDATE", this.handleCallUpdate);
  DispatcherDefault.unsubscribe("CALL_DELETE", this.handleCallDelete);
  DispatcherDefault.unsubscribe("CHANNEL_DELETE", this.handleChannelDelete);
  DispatcherDefault.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
  DispatcherDefault.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
  DispatcherDefault.unsubscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleAudioToggleSelfMute);
  DispatcherDefault.unsubscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState);
  const emitterSubscriptions = this.emitterSubscriptions;
  const item = emitterSubscriptions.forEach((remove) => remove.remove());
  this.emitterSubscriptions = [];
};
prototype["clearReportCallEndedTimeout"] = function clearReportCallEndedTimeout(callId) {
  clearTimeout(this.reportCallEndedTimeouts[callId]);
  delete tmp[tmp2];
};
prototype["findCall"] = function findCall(callId) {
  const values = Object.values(this.calls);
  for (const item10012 of values) {
    if (item10012.uuid === arg0) {
      obj.return();
      return item10012;
    }
  }
  return null;
};
prototype["popCall"] = function popCall(callId) {
  const self = this;
  const findCallResult = this.findCall(callId);
  if (null != findCallResult) {
    const _HermesInternal = HermesInternal;
    RequestGatewaySocketAll.stopRequest("call:" + findCallResult.uuid);
    const calls = self.calls;
    const id = findCallResult.channel.id;
    delete tmp2[tmp];
    const result = self.updateActiveCallStatus();
  }
  return findCallResult;
};
prototype["startCall"] = function startCall(arg0) {
  closure_0 = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const self = this;
  return (async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
            closure_128_0 = undefined;
            channel = channel.getChannel(tmp5);
            if (null != channel) {
              if (null == self.calls[tmp5]) {
                const obj6 = {
                  uuid: tmp5(1266).v4(),
                  channel,
                  handle: toHandle(channel),
                  direction: "outgoing",
                  connected: false,
                  ringing: false,
                  video: flag,
                  muted: selfMute.isSelfMute(),
                  deletable: true,
                  ringer_user_id: self.currentUserId,
                };
                closure_128_0 = obj6;
                self.calls[tmp5] = obj6;
                const result = self.updateActiveCallStatus();
                const obj9 = tmp5(1266);
                const _HermesInternal = HermesInternal;
                tmp29(10396).setRequestedBy("call:" + obj6.uuid);
                const obj10 = tmp29(10396);
                if (obj11.isSystemTelecomEnabled()) {
                  const obj2 = tmp3(16532);
                  ({ uuid, handle } = obj6);
                  const tmp42Result = tmp5(5788);
                  const startOutgoingCallResult = obj2.startOutgoingCall(
                    uuid,
                    handle,
                    tmp5(5788).computeChannelName(obj6.channel, UserStore, RelationshipStore),
                    obj6.video,
                  );
                  tmp3(16532).setCallMuted(obj6.uuid, obj6.muted);
                  dependencyMap = 1;
                  c4 = 2;
                  c5 = 1;
                  const obj7 = { value: startOutgoingCallResult, done: false };
                  return obj7;
                }
                obj11 = tmp5(16534);
              }
            }
          }
        } else {
          if (1 === tmp8) {
            dependencyMap = 0;
            closure_128_1 = tmp29;
            logger.warn("Failed to start outgoing call:", closure_128_1);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            const result1 = closure_129_2.handleOutgoingCallStarted(closure_128_0.uuid);
            dependencyMap = 0;
          }
          dependencyMap = 0;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
        c5 = 3;
      } catch (tmp29) {
        if (tmp4 === dependencyMap) {
          c5 = tmp2;
          throw tmp29;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};
prototype["handleOutgoingCallStarted"] = function handleOutgoingCallStarted(uuid) {
  const self = this;
  const findCallResult = this.findCall(uuid);
  if (null != findCallResult) {
    const result = NativeSystemTelecomModule.reportOutgoingCallConnecting(findCallResult.uuid);
    self.reportCall(findCallResult.channel.id);
  }
};
prototype["answerCall"] = function answerCall(channelId) {
  const self = this;
  if (null == this.calls[channelId]) {
    return false;
  } else {
    let ringing = tmp.ringing;
    tmp.connected = true;
    tmp.ringing = false;
    if (ringing) {
      ringing = "incoming" === tmp.direction;
    }
    if (ringing) {
      if (obj.isSystemTelecomEnabled()) {
        NativeSystemTelecomModule.answerCall(tmp.uuid);
        const result = self.clearReportCallEndedTimeout(tmp.uuid);
        self.reportRTCConnected(tmp);
      } else {
        self.reportCallEnded(tmp.uuid);
      }
      obj = SystemTelecomUtils;
    }
    return true;
  }
};
prototype["endCall"] = function endCall(arg0) {
  const self = this;
  if (null != this.calls[arg0]) {
    const calls = self.calls;
    delete tmp[tmp2];
    const result = self.updateActiveCallStatus();
    const result1 = self.clearReportCallEndedTimeout(tmp3.uuid);
    const result2 = SystemTelecomUtils.isSystemTelecomEnabled();
    const obj2 = NativeSystemTelecomModule;
    if (result2) {
      obj2.endCall(tmp3.uuid);
    } else {
      obj2.reportCallEnded(tmp3.uuid);
    }
  }
};
prototype["reportCall"] = function reportCall(channelId, callerName) {
  if (null != this.calls[channelId]) {
    const channel = ChannelStore.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (obj8.isSystemTelecomEnabledForChannel(guild_id, channelId)) {
      let type;
      if (channel != null) {
        type = channel.type;
      }
      let tmp5 = type !== constants2.GUILD_VOICE;
      if (tmp5) {
        let hasVideoResult = VoiceStateStore.hasVideo(channelId);
        if (hasVideoResult) {
          hasVideoResult = MediaEngineStore.supports(constants5.VIDEO);
        }
        tmp5 = hasVideoResult;
      }
      tmp.video = tmp5;
      if (tmp30Result.isSystemTelecomEnabled()) {
        let channelName = callerName;
        const obj2 = NativeSystemTelecomModule;
        ({ uuid, handle } = tmp);
        if (callerName == null) {
          channelName = useChannelName.computeChannelName(tmp.channel, UserStore, RelationshipStore);
          const tmp30Result3 = useChannelName;
        }
        obj2.updateCall(uuid, handle, channelName, tmp.video);
      }
      let tmp19 = "outgoing" !== tmp.direction || tmp.connected;
      if (!tmp19) {
        let flag = false;
        if (VoiceStateStore.isInChannel(channelId)) {
          const channel1 = ChannelStore.getChannel(channelId);
          let type1;
          if (channel1 != null) {
            type1 = channel1.type;
          }
          let tmp23 = type1 === constants2.GUILD_VOICE;
          if (!tmp23) {
            tmp23 = SortedVoiceStateStore.countVoiceStatesForChannel(channelId) >= 2;
          }
          flag = tmp23;
        }
        tmp19 = !flag;
      }
      if (!tmp19) {
        let tmp25 = closure_26;
        if (closure_26) {
          tmp25 = !(RTCConnectionStore.isConnected() && RTCConnectionStore.getChannelId() === channelId);
          const tmp26 = RTCConnectionStore.isConnected() && RTCConnectionStore.getChannelId() === channelId;
        }
        tmp19 = tmp25;
      }
      if (!tmp19) {
        tmp.connected = true;
        if (tmp30Result4.isSystemTelecomEnabled()) {
          const result = NativeSystemTelecomModule.reportOutgoingCallConnected(tmp.uuid);
        }
        tmp30Result4 = SystemTelecomUtils;
      }
      tmp30Result = SystemTelecomUtils;
    } else {
      return null;
    }
    obj8 = SystemTelecomUtils;
  }
};
prototype["reportCallEnded"] = function reportCallEnded(callId, arg1) {
  const self = this;
  const result = this.clearReportCallEndedTimeout(callId);
  NativeSystemTelecomModule.reportCallEnded(callId);
  if (null != arg1) {
    const calls = self.calls;
    delete tmp[tmp2];
    if (self.incomingCalls[arg1] === callId) {
      const incomingCalls = self.incomingCalls;
      delete tmp[tmp2];
    }
    const result1 = self.updateActiveCallStatus();
  }
};
prototype["createIncomingCall"] = function createIncomingCall(channelId) {
  let v4Result = callId;
  if (callId === undefined) {
    v4Result = v1.v4();
  }
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  if (obj4.isSystemTelecomEnabledForChannel(guild_id, channelId)) {
    const self = this;
    if (null == channel) {
      self.incomingCalls[channelId] = v4Result;
      const result = self.updateActiveCallStatus();
      return null;
    } else {
      const obj3 = {
        uuid: v4Result,
        handle: null,
        channel: null,
        direction: "incoming",
        ringing: true,
        connected: null,
        muted: null,
        video: null,
        deletable: null,
        ringer_user_id: null,
      };
      ({ type, id, recipients } = channel);
      if (recipients == null) {
        recipients = [];
      }
      let num = recipients[0];
      const guildId = channel.getGuildId();
      if (type === constants2.DM) {
        if (num == null) {
          num = 0;
        }
        const _HermesInternal2 = HermesInternal;
        let combined = "" + c27 + id + "." + type + "." + num;
      } else {
        let num2 = guildId;
        if (guildId == null) {
          num2 = 0;
        }
        const _HermesInternal = HermesInternal;
        combined = "" + c27 + id + "." + type + "." + num2;
      }
      obj3.handle = combined;
      obj3.channel = channel;
      let flag = false;
      if (VoiceStateStore.isInChannel(channelId)) {
        const channel1 = ChannelStore.getChannel(channelId);
        let type1;
        if (channel1 != null) {
          type1 = channel1.type;
        }
        let tmp24 = type1 === constants2.GUILD_VOICE;
        if (!tmp24) {
          tmp24 = SortedVoiceStateStore.countVoiceStatesForChannel(channelId) >= 2;
        }
        flag = tmp24;
      }
      obj3.connected = flag;
      obj3.muted = MediaEngineStore.isSelfMute();
      let tmp26 = channel.type !== constants2.GUILD_VOICE;
      if (tmp26) {
        let hasVideoResult = VoiceStateStore.hasVideo(channelId);
        if (hasVideoResult) {
          hasVideoResult = MediaEngineStore.supports(constants5.VIDEO);
        }
        tmp26 = hasVideoResult;
      }
      obj3.video = tmp26;
      obj3.deletable = true === self.isDeleteable[channelId];
      obj3.ringer_user_id = ringerUserId;
      const isDeleteable = self.isDeleteable;
      delete tmp2[tmp];
      return obj3;
    }
  } else {
    return null;
  }
  obj4 = SystemTelecomUtils;
};
prototype["handleCallRing"] = function handleCallRing(channelId) {
  const self = this;
  channelId = channelId.channelId;
  const callId = channelId.callId;
  this.reportCallEndedTimeouts[callId] = setTimeout(() => {
    self.reportCallEnded(callId, channelId);
  }, 30000);
  let tmp3 = tmp;
  if (tmp2) {
    self.reportCallEnded(tmp.uuid, tmp.channel.id);
    tmp3 = null;
  }
  let tmp5 = null == tmp3;
  if (tmp5) {
    const incomingCall = self.createIncomingCall(channelId, callId, channelId.ringerUserId);
    tmp5 = null != incomingCall;
    tmp3 = incomingCall;
  }
  if (tmp5) {
    self.calls[channelId] = tmp3;
    const result = self.updateActiveCallStatus();
    self.reportCall(channelId, channelId.callerName);
  }
  const result1 = self.preloadRingingChannel(channelId);
};
prototype["preloadRingingChannel"] = function preloadRingingChannel(channelId) {
  const basicChannel = ChannelStore.getBasicChannel(channelId);
  let guild_id;
  if (basicChannel != null) {
    guild_id = basicChannel.guild_id;
  }
  if (guild_id == null) {
    guild_id = guild;
  }
  ChannelActionCreatorsDefault.preload(guild_id, channelId);
};
prototype["forceInvisibleWhileInactive"] = function forceInvisibleWhileInactive() {
  if (AppState.currentState !== constants3.ACTIVE) {
    DispatcherDefault.dispatch({ type: "FORCE_INVISIBLE", invisible: true });
  }
};
prototype["reportRTCConnected"] = function reportRTCConnected(findCallResult) {
  let result = closure_26;
  if (closure_26) {
    result = RTCConnectionStore.isConnected() && RTCConnectionStore.getChannelId() === findCallResult.channel.id;
    const tmp2 = RTCConnectionStore.isConnected() && RTCConnectionStore.getChannelId() === findCallResult.channel.id;
  }
  if (result) {
    result = SystemTelecomUtils.isSystemTelecomEnabled();
  }
  if (result) {
    if ("incoming" === findCallResult.direction) {
      NativeSystemTelecomModule.reportCallConnected(findCallResult.uuid);
    } else if (!findCallResult.connected) {
      const self = this;
      this.reportCall(findCallResult.channel.id);
    }
  }
};
prototype["updateActiveCallStatus"] = function updateActiveCallStatus() {
  if (obj.isIOS()) {
    const _Object = Object;
    const self = this;
    let tmp2 = Object.keys(this.calls).length > 0;
    if (!tmp2) {
      const _Object2 = Object;
      tmp2 = Object.keys(self.incomingCalls).length > 0;
    }
    const result = MediaEngineStore.setHasActiveSystemTelecomCall(tmp2);
  }
  obj = PlatformUtils;
};
let closure_29 = new SystemTelecomManager();
class SystemTelecomLifecycleManager extends tmp5 {}
const prototype2 = SystemTelecomLifecycleManager.prototype;
prototype2["_initialize"] = function _initialize() {
  closure_29.initialize();
};
prototype2["_terminate"] = function _terminate() {
  closure_29.terminate();
};
const systemTelecomLifecycleManager = new SystemTelecomLifecycleManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/calls/native/SystemTelecomManager.tsx");

export default systemTelecomLifecycleManager;
