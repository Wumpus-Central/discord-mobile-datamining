// === Module 5277: GatewayConnectionStore ===

// Module 5277 (GatewayConnectionStore)
import LoggerDefault from "Logger" /* 3 */;
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import GatewaySocketSingleton from "GatewaySocketSingleton" /* 13628 */;
import ConnectionStateDefault from "ConnectionState" /* 13645 */;
import PauseGatewaySocketAll from "PauseGatewaySocket" /* 13666 */;
import dispatchSocketMessageDefault from "dispatchSocketMessage" /* 13677 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 5278 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import RTCRegionStore from "RTCRegionStore" /* 4610 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5279 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4599 */;

require = fn;
let closure_25 = async function _handleConnectionOpen(arg0) {
  let sessionId = arg0;
  c3 = 0;
  c4 = 0;
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
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp5;
            closure_1 = tmp2;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            let channel;
            const _Date2 = Date;
            closure_20 = Date.now();
            sessionId = sessionId.sessionId;
            const localPresenceState = require("GatewaySocketSingleton").localPresenceState;
            localPresenceState.handleConnectionOpen();
            closure_129_0 = {};
            voiceChannelId = voiceChannelId.getVoiceChannelId();
            closure_129_1 = voiceChannelId;
            if (null != voiceChannelId) {
              const Storage2 = require("Storage").Storage;
              value = Storage2.get("discord_watchdog_restart_timestamp");
              let tmp19 = null != value;
              if (tmp19) {
                const _Date = Date;
                const _parseInt = parseInt;
                const timestamp = Date.now();
                tmp19 = timestamp - parseInt(value, 10) < 60000;
              }
              const Storage = require("Storage").Storage;
              Storage.remove("discord_watchdog_restart_timestamp");
              let type;
              if (window != null) {
                const _performance = window.performance;
                if (_performance != null) {
                  const getEntriesByType = _performance.getEntriesByType;
                  if (getEntriesByType != null) {
                    const entriesByType = getEntriesByType("navigation");
                    if (entriesByType != null) {
                      const first = entriesByType[0];
                      if (first != null) {
                        type = first.type;
                      }
                    }
                  }
                }
              }
              if ("reload" !== type) {
                if (!tmp19) {
                  let lastCrash;
                  if (processUtils != null) {
                    processUtils = processUtils.processUtils;
                    if (processUtils != null) {
                      const getLastCrash = processUtils.getLastCrash;
                      if (getLastCrash != null) {
                        lastCrash = getLastCrash();
                      }
                    }
                  }
                  c3 = 1;
                  c4 = 1;
                  const obj1 = { value: lastCrash, done: false };
                  return obj1;
                }
              }
              channel = closure_130_8.getChannel(closure_129_1);
              if (null != channel) {
                const obj2 = { guildId: channel.getGuildId(), channelId: closure_129_1 };
                closure_129_0 = obj2;
                closure_130_0(closure_130_3[17]).muteCustomJoinSound(closure_129_1);
                const obj5 = closure_130_0(closure_130_3[17]);
              }
            }
            const localVoiceState = closure_130_0(closure_130_3[13]).localVoiceState;
            localVoiceState.update(closure_129_0, true);
            closure_130_22 = false;
            closure_130_24 = null;
            c4 = 3;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          let rendererCrashReason;
          if (value != null) {
            rendererCrashReason = value.rendererCrashReason;
          }
          if (null == rendererCrashReason) {
            if (closure_130_22) {
              let tmp11 = null;
              if (null != closure_129_1) {
                tmp11 = closure_129_1;
              }
              const result = closure_130_10.setLastSessionVoiceChannelId(tmp11);
              obj = closure_130_1(closure_130_3[18]);
              const voiceChannel = obj.selectVoiceChannel(null);
            }
          }
        }
        c4 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } catch (tmp48) {
        c4 = tmp;
        throw tmp48;
      }
    }
  })();
};
function handleClipsFlags() {
  const localVoiceState = GatewaySocketSingleton.localVoiceState;
  localVoiceState.update();
}
function handleMediaEngineChange() {
  const localVoiceState = GatewaySocketSingleton.localVoiceState;
  localVoiceState.update();
  return false;
}
function handleLocalPresenceChange() {
  const localPresenceState = GatewaySocketSingleton.localPresenceState;
  localPresenceState.update();
  return false;
}
const Constants = fn(1074);
({ RTCConnectionStates: closure_15, AppStates: closure_16 } = Constants);
const UserSettingsTypes = fn(1084).UserSettingsTypes;
fn(13628).socket.dispatcher.getDispatchHandler = dispatchSocketMessageDefault;
let closure_19 = new LoggerDefault("ConnectionStore");
let closure_20 = 0;
let c21 = null;
let c22 = true;
let state = null;
let channelId = null;
const Store = initializeDefault.Store;
class GatewayConnectionStore extends Store {
}
const prototype = GatewayConnectionStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, CallStore, ChannelStore, MediaEngineStore, RTCConnectionStore, RTCRegionStore, SelectedChannelStore, SelfPresenceStore, StreamRTCConnectionStore, UserSettingsProtoStore);
  const items = [MediaEngineStore];
  this.syncWith(items, handleMediaEngineChange);
  const items1 = [SelfPresenceStore];
  this.syncWith(items1, handleLocalPresenceChange);
};
prototype["getSocket"] = function getSocket() {
  return GatewaySocketSingleton.socket;
};
prototype["isTryingToConnect"] = function isTryingToConnect() {
  const socket = GatewaySocketSingleton.socket;
  return !socket.isClosed();
};
prototype["isConnected"] = function isConnected() {
  const socket = GatewaySocketSingleton.socket;
  return socket.isSessionEstablished();
};
prototype["isConnectedOrOverlay"] = function isConnectedOrOverlay() {
  const socket = GatewaySocketSingleton.socket;
  return socket.isSessionEstablished() || false;
};
prototype["lastTimeConnectedChanged"] = function lastTimeConnectedChanged() {
  return closure_20;
};
GatewayConnectionStore.displayName = "GatewayConnectionStore";
const gatewayConnectionStore = new GatewayConnectionStore(DispatcherDefault, {
  START_SESSION: function handleSessionStart() {
    const socket = GatewaySocketSingleton.socket;
    const verbose = closure_19.verbose;
    if (socket.isClosed()) {
      verbose("Socket is reconnecting because of starting new session");
      const socket2 = GatewaySocketSingleton.socket;
      let flag = socket2.connect();
    } else {
      verbose("Socket is not reconnecting during a new session because it is not closed");
      flag = false;
    }
    return flag;
  },
  LOGIN_SUCCESS: function handleSessionRefresh() {
    const obj = { isEstablished: null };
    const socket = GatewaySocketSingleton.socket;
    obj.isEstablished = socket.isSessionEstablished();
    closure_19.verbose("session refresh dispatched", obj);
    const socket2 = GatewaySocketSingleton.socket;
    let connectResult = socket2.isSessionEstablished();
    if (connectResult) {
      const socket3 = tmp(13628).socket;
      socket3.close();
      const socket4 = tmp(13628).socket;
      connectResult = socket4.connect();
    }
    return connectResult;
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    if (isSwitchingAccount.isSwitchingAccount) {
      const localPresenceState = GatewaySocketSingleton.localPresenceState;
      localPresenceState.handleAccountSwitch();
    }
    closure_19.verbose("Closing socket because of logout");
    const socket = GatewaySocketSingleton.socket;
    socket.close();
  },
  CLEAR_CACHES: function handleClearCaches(resetSocket) {
    if (resetSocket.resetSocket) {
      const socket = GatewaySocketSingleton.socket;
      socket.close();
      const dispatcher = GatewaySocketSingleton.socket.dispatcher;
      dispatcher.clear();
      const socket2 = GatewaySocketSingleton.socket;
      socket2.connect();
    }
    return false;
  },
  CONNECTION_OPEN(arg0) {
    !(function handleConnectionOpen() {
      const self = this;
      const apply = closure_1_25.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(arg0);
  },
  CONNECTION_RESUMED: function handleConnectionResumed() {
    channelId = null;
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    closure_19.verbose("connection closed dispatched");
    closure_20 = Date.now();
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionState(state) {
    if (state.state !== constants.DISCONNECTED) {
      return false;
    } else if (state.willReconnect) {
      if (null != state.streamKey) {
        const socket2 = GatewaySocketSingleton.socket;
        socket2.streamPing(state.streamKey);
      } else {
        const socket = GatewaySocketSingleton.socket;
        socket.voiceServerPing();
      }
    }
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(guildId) {
    const localVoiceState = GatewaySocketSingleton.localVoiceState;
    localVoiceState.update({ guildId: guildId.guildId, channelId: guildId.channelId });
    channelId = null;
    if (guildId.lockVoiceStateForResume) {
      channelId = null;
      if (null != guildId.channelId) {
        channelId = guildId.channelId;
      }
    }
    let isIOSResult = PlatformUtils.isIOS();
    if (isIOSResult) {
      isIOSResult = state === constants2.BACKGROUND;
    }
    if (isIOSResult) {
      if (null == guildId.channelId) {
        const socket3 = tmp(13628).socket;
        socket3.close(true);
      } else {
        const socket = tmp(13628).socket;
        if (socket.isClosed()) {
          PauseGatewaySocketAll.setIsPaused(false);
          const socket2 = tmp(13628).socket;
          socket2.connect();
        }
      }
    }
    return false;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((acc, userId) => {
      if (id.getId() !== userId.userId) {
        return acc;
      } else {
        if (userId.sessionId === closure_1_21) {
          if (null != channelId) {
            closure_1_19.verbose("Ignoring voice state for own session due to VSU lock on channel:", channelId);
            return acc;
          } else {
            const localVoiceState2 = require("GatewaySocketSingleton").localVoiceState;
            const obj = { guildId: null, channelId: null };
            ({ guildId: obj.guildId, channelId: obj.channelId } = userId);
            localVoiceState2.setState(obj);
          }
        } else {
          if (userId.guildId !== require("GatewaySocketSingleton").localVoiceState.guildId) {
            return acc;
          } else {
            const localVoiceState = tmp(13628).localVoiceState;
            localVoiceState.setState({ guildId: null, channelId: null });
          }
          tmp = _require;
        }
        return true;
      }
    }, false);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    if (guild.guild.id === GatewaySocketSingleton.localVoiceState.guildId) {
      const localVoiceState = GatewaySocketSingleton.localVoiceState;
      localVoiceState.setState({ guildId: null, channelId: null });
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    if (channel.channel.id === GatewaySocketSingleton.localVoiceState.channelId) {
      const localVoiceState = GatewaySocketSingleton.localVoiceState;
      localVoiceState.setState({ guildId: null, channelId: null });
    }
  },
  CALL_DELETE: function handleCallDelete(channelId) {
    channelId = channelId.channelId;
    if (channelId === GatewaySocketSingleton.localVoiceState.channelId) {
      if (channelId === channelId) {
        return false;
      } else {
        const localVoiceState = GatewaySocketSingleton.localVoiceState;
        localVoiceState.setState({ guildId: null, channelId: null });
      }
    }
  },
  APP_STATE_UPDATE: function handleFocus(arg0) {
    state = arg0;
    let socket = require;
    if (obj.isIOS()) {
      if (!AuthenticationStore.isAuthenticated()) {
        state = state.state;
      } else {
        let isClosedResult = state === tmp6.BACKGROUND && state.state === tmp6.ACTIVE;
        if (isClosedResult) {
          const socket3 = GatewaySocketSingleton.socket;
          isClosedResult = socket3.isClosed();
        }
        if (isClosedResult) {
          PauseGatewaySocketAll.setIsPaused(false);
          const socket4 = GatewaySocketSingleton.socket;
          socket4.connect();
        }
      }
      socket = GatewaySocketSingleton.socket;
      socket.close(true);
    } else {
      if (state.state === constants2.ACTIVE) {
        PauseGatewaySocketAll.setIsPaused(false);
        if (AuthenticationStore.isAuthenticated()) {
          const socket2 = GatewaySocketSingleton.socket;
          socket2.resetBackoff("App state is active");
        }
      }
      return false;
    }
  },
  GUILD_MEMBERS_REQUEST: function handleGuildMembersRequest(userIds) {
    _require = userIds;
    let socket = require("GatewaySocketSingleton").socket;
    if (socket.isSessionEstablished()) {
      if ("userIds" in userIds) {
        const obj2 = _modDef12(userIds.userIds);
        const item = _modDef12(userIds.userIds).chunk(100).forEach((userIds) => {
          const socket = GatewaySocketSingleton.socket;
          const guildMembers = socket.requestGuildMembers(userIds.guildIds, { userIds, presences: userIds.presences });
        });
        const chunkResult = _modDef12(userIds.userIds).chunk(100);
      } else {
        const socket2 = require("GatewaySocketSingleton").socket;
        const obj = { query: null, limit: null, presences: null };
        ({ query: obj.query, limit: obj.limit } = userIds);
        obj.presences = userIds.presences;
        let guildMembers = socket2.requestGuildMembers(userIds.guildIds, obj);
      }
    }
    return false;
  },
  GUILD_SEARCH_RECENT_MEMBERS: function handleGuildSearchRecentMembers(arg0) {
    ({ guildId, query, continuationToken } = arg0);
    const socket = GatewaySocketSingleton.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = GatewaySocketSingleton.socket;
      const obj = { query, continuationToken };
      socket2.searchRecentMembers(guildId, obj);
    }
  },
  GUILD_SUBSCRIPTIONS_FLUSH: function handleGuildSubscriptionsFlush(subscriptions) {
    const socket = GatewaySocketSingleton.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = GatewaySocketSingleton.socket;
      const result = socket2.updateGuildSubscriptions(subscriptions.subscriptions);
    }
    return false;
  },
  CALL_CONNECT: function handleCallConnect(channelId) {
    const socket = GatewaySocketSingleton.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = GatewaySocketSingleton.socket;
      socket2.callConnect(channelId.channelId);
    }
    return false;
  },
  CALL_CONNECT_MULTIPLE: function handleCallConnectMultiple(channelIds) {
    channelIds = channelIds.channelIds;
    let socket = GatewaySocketSingleton.socket;
    if (socket.isSessionEstablished()) {
      const item = channelIds.forEach((item) => {
        const socket = require("GatewaySocketSingleton").socket;
        socket.callConnect(item);
      });
    }
    return false;
  },
  STREAM_CREATE: handleClipsFlags,
  STREAM_START: function handleStreamStart(arg0) {
    ({ streamType, guildId, channelId } = arg0);
    const socket = GatewaySocketSingleton.socket;
    if (socket.isSessionEstablished()) {
      if (null != guildId) {
        const channel = ChannelStore.getChannel(channelId);
        let rtcRegion;
        if (channel != null) {
          rtcRegion = channel.rtcRegion;
        }
        let region = rtcRegion;
      } else {
        const call = CallStore.getCall(channelId);
        if (call != null) {
          region = call.region;
        }
      }
      const socket2 = GatewaySocketSingleton.socket;
      if (region == null) {
        region = RTCRegionStore.getPreferredRegion();
      }
      socket2.streamCreate(streamType, guildId, channelId, region);
    }
    return false;
  },
  STREAM_WATCH: function handleStreamWatch(arg0) {
    ({ streamKey, allowMultiple } = arg0);
    let socket = require("GatewaySocketSingleton").socket;
    if (socket.isSessionEstablished()) {
      if (!allowMultiple) {
        const allActiveStreamKeys = StreamRTCConnectionStore.getAllActiveStreamKeys();
        _require = allActiveStreamKeys.find((item) => closure_0(4612).decodeStreamKey(item).ownerId === id.getId());
        const allActiveStreamKeys1 = StreamRTCConnectionStore.getAllActiveStreamKeys();
        const found = allActiveStreamKeys1.filter((item) => item !== closure_0);
        const item = found.forEach((item) => {
          const socket = closure_0(13628).socket;
          if (socket.isSessionEstablished()) {
            const socket2 = closure_0(13628).socket;
            socket2.streamDelete(item);
          }
        });
      }
      let socket2 = require("GatewaySocketSingleton").socket;
      socket2.streamWatch(streamKey);
    }
    return false;
  },
  STREAM_STOP: function handleStreamStop(streamKey) {
    const socket = GatewaySocketSingleton.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = tmp(13628).socket;
      socket2.streamDelete(streamKey.streamKey);
    }
    const localVoiceState = tmp(13628).localVoiceState;
    localVoiceState.update();
    return false;
  },
  STREAM_SET_PAUSED: function handleStreamSetPaused(arg0) {
    ({ streamKey, paused } = arg0);
    const socket = GatewaySocketSingleton.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = GatewaySocketSingleton.socket;
      socket2.streamSetPaused(streamKey, paused);
    }
  },
  PUSH_NOTIFICATION_CLICK: function handlePushNotificationClick() {
    const socket = GatewaySocketSingleton.socket;
    socket.expeditedHeartbeat(5000, "user clicked on notification", true);
    return false;
  },
  REQUEST_FORUM_UNREADS: function handleRequestForumUnreads(arg0) {
    ({ guildId, channelId, threads } = arg0);
    const socket = GatewaySocketSingleton.socket;
    const forumUnreads = socket.requestForumUnreads(guildId, channelId, threads);
  },
  REQUEST_SOUNDBOARD_SOUNDS: function handleRequestSoundboardSounds(guildIds) {
    const socket = GatewaySocketSingleton.socket;
    const soundboardSounds = socket.requestSoundboardSounds(guildIds.guildIds);
  },
  REMOTE_COMMAND: function handleRemoteCommand(arg0) {
    ({ sessionId, payload } = arg0);
    const socket = GatewaySocketSingleton.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = GatewaySocketSingleton.socket;
      socket2.remoteCommand(sessionId, payload);
    }
    return false;
  },
  RESET_SOCKET: function handleResetSocket(args) {
    if (GatewaySocketSingleton.socket.connectionState !== ConnectionStateDefault.WILL_RECONNECT) {
      const socket = GatewaySocketSingleton.socket;
      const result = socket.resetSocketAndClearCacheOnError(args.args);
    }
  },
  CLIPS_SETTINGS_UPDATE: handleClipsFlags,
  RUNNING_GAMES_CHANGE: handleClipsFlags,
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    let tmp = settings.settings.type === UserSettingsTypes.PRELOADED_USER_SETTINGS;
    if (tmp) {
      const clips = settings.settings.proto.clips;
      let allowVoiceRecording;
      if (clips != null) {
        allowVoiceRecording = clips.allowVoiceRecording;
      }
      tmp = null != allowVoiceRecording;
    }
    if (tmp) {
      const localVoiceState = GatewaySocketSingleton.localVoiceState;
      localVoiceState.update();
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/gateway/GatewayConnectionStore.tsx");

export default gatewayConnectionStore;