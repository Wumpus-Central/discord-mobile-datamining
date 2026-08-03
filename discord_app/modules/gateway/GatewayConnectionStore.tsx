import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import fetchFingerprint from "fetchFingerprint";
import callConnect from "callConnect";
import ensureGuildLoaded from "ensureGuildLoaded";
import closure_9 from "_detectH265HardwareDecode";
import createRTCConnection from "createRTCConnection";
import initialize from "initialize";
import handleConnectionOpen from "handleConnectionOpen";
import filterPlayingActivities from "filterPlayingActivities";
import closure_14 from "initialize";
import ME from "ME";
import { UserSettingsTypes } from "MAX_FAVORITES";
import { Store } from "initialize";

let closure_15;
let closure_16;
const require = arg1;
function _handleConnectionOpen() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0, rendererCrashReason) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw rendererCrashReason;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = rendererCrashReason;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c4 = 3;
              throw rendererCrashReason;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = rendererCrashReason;
              return obj;
            } else {
              let guildId = tmp5;
              let voiceChannelId = tmp2;
              let obj2;
              voiceChannelId = undefined;
              guildId = undefined;
              const _Date2 = Date;
              const outer1_20 = Date.now();
              const outer1_21 = obj2.sessionId;
              const localPresenceState = callback(12773).localPresenceState;
              localPresenceState.handleConnectionOpen();
              obj2 = {};
              voiceChannelId = outer1_12.getVoiceChannelId();
              if (null != voiceChannelId) {
                const Storage2 = callback(595).Storage;
                const value = Storage2.get("discord_watchdog_restart_timestamp");
                let tmp19 = null != value;
                if (tmp19) {
                  const _Date = Date;
                  const _parseInt = parseInt;
                  const timestamp = Date.now();
                  tmp19 = timestamp - parseInt(value, 10) < 60000;
                }
                const Storage = callback(595).Storage;
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
                    if (outer1_18 != null) {
                      const processUtils = outer1_18.processUtils;
                      if (processUtils != null) {
                        const getLastCrash = processUtils.getLastCrash;
                        if (getLastCrash != null) {
                          lastCrash = getLastCrash();
                        }
                      }
                    }
                    dependencyMap = 1;
                    c4 = 1;
                    const obj1 = { value: null, done: false };
                    obj1[0] = lastCrash;
                    return obj1;
                  }
                }
                guildId = outer1_8.getChannel(voiceChannelId);
                if (null != guildId) {
                  obj2 = { guildId: null, channelId: null };
                  obj2[0] = guildId.getGuildId();
                  obj2[1] = voiceChannelId;
                  callback(5852).muteCustomJoinSound(voiceChannelId);
                  const obj5 = callback(5852);
                }
              }
              const localVoiceState = callback(12773).localVoiceState;
              localVoiceState.update(obj2, true);
              const outer1_22 = false;
              const outer1_24 = null;
              c4 = 3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw rendererCrashReason;
          } else if (arg0 !== 2) {
            rendererCrashReason = undefined;
            if (rendererCrashReason != null) {
              rendererCrashReason = rendererCrashReason.rendererCrashReason;
            }
            if (null == rendererCrashReason) {
              if (closure_22) {
                let tmp11 = null;
                if (null != voiceChannelId) {
                  tmp11 = voiceChannelId;
                }
                const result = lastSessionVoiceChannelId.setLastSessionVoiceChannelId(tmp11);
                obj = voiceChannelId(5067);
                const voiceChannel = obj.selectVoiceChannel(null);
              }
            }
          }
          c4 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = rendererCrashReason;
          return obj3;
        } catch (tmp48) {
          c4 = tmp;
          throw tmp48;
        }
      }
    })();
  });
  const _handleConnectionOpen = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function handleClipsFlags() {
  const localVoiceState = require(12773) /* handleIdentify */.localVoiceState;
  localVoiceState.update();
}
function handleMediaEngineChange() {
  const localVoiceState = require(12773) /* handleIdentify */.localVoiceState;
  localVoiceState.update();
  return false;
}
function handleLocalPresenceChange() {
  const localPresenceState = require(12773) /* handleIdentify */.localPresenceState;
  localPresenceState.update();
  return false;
}
({ RTCConnectionStates: closure_15, AppStates: closure_16 } = ME);
require("handleIdentify").socket.dispatcher.getDispatchHandler = require("defineSimpleDispatch");
let closure_19 = new require("callConnect")("ConnectionStore");
let c20 = 0;
let c21 = null;
let c22 = true;
let c23 = null;
let c24 = null;
class GatewayConnectionStore extends Store {
}
const prototype = GatewayConnectionStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(fetchFingerprint, callConnect, ensureGuildLoaded, closure_9, createRTCConnection, initialize, handleConnectionOpen, filterPlayingActivities, closure_14, handleConnectionClosedOrResumed);
  const items = [closure_9];
  this.syncWith(items, handleMediaEngineChange);
  const items1 = [filterPlayingActivities];
  this.syncWith(items1, handleLocalPresenceChange);
};
prototype["getSocket"] = function getSocket() {
  return require(12773) /* handleIdentify */.socket;
};
prototype["isTryingToConnect"] = function isTryingToConnect() {
  const socket = require(12773) /* handleIdentify */.socket;
  return !socket.isClosed();
};
prototype["isConnected"] = function isConnected() {
  const socket = require(12773) /* handleIdentify */.socket;
  return socket.isSessionEstablished();
};
prototype["isConnectedOrOverlay"] = function isConnectedOrOverlay() {
  const socket = require(12773) /* handleIdentify */.socket;
  return socket.isSessionEstablished() || false;
};
prototype["lastTimeConnectedChanged"] = function lastTimeConnectedChanged() {
  return c20;
};
GatewayConnectionStore.displayName = "GatewayConnectionStore";
const gatewayConnectionStore = new GatewayConnectionStore(require("dispatcher"), {
  START_SESSION: function handleSessionStart() {
    const socket = require(12773) /* handleIdentify */.socket;
    const verbose = tmp3.verbose;
    if (socket.isClosed()) {
      verbose("Socket is reconnecting because of starting new session");
      const socket2 = require(12773) /* handleIdentify */.socket;
      let flag = socket2.connect();
    } else {
      verbose("Socket is not reconnecting during a new session because it is not closed");
      flag = false;
    }
    return flag;
  },
  LOGIN_SUCCESS: function handleSessionRefresh() {
    const obj = { isEstablished: null };
    const socket = require(12773) /* handleIdentify */.socket;
    obj[0] = socket.isSessionEstablished();
    tmp3.verbose("session refresh dispatched", obj);
    const socket2 = require(12773) /* handleIdentify */.socket;
    let connectResult = socket2.isSessionEstablished();
    if (connectResult) {
      const socket3 = tmp(12773).socket;
      socket3.close();
      const socket4 = tmp(12773).socket;
      connectResult = socket4.connect();
    }
    return connectResult;
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    if (isSwitchingAccount.isSwitchingAccount) {
      const localPresenceState = require(12773) /* handleIdentify */.localPresenceState;
      localPresenceState.handleAccountSwitch();
    }
    tmp3.verbose("Closing socket because of logout");
    const socket = require(12773) /* handleIdentify */.socket;
    socket.close();
  },
  CLEAR_CACHES: function handleClearCaches(resetSocket) {
    if (resetSocket.resetSocket) {
      const socket = require(12773) /* handleIdentify */.socket;
      socket.close();
      const dispatcher = require(12773) /* handleIdentify */.socket.dispatcher;
      dispatcher.clear();
      const socket2 = require(12773) /* handleIdentify */.socket;
      socket2.connect();
    }
    return false;
  },
  CONNECTION_OPEN(arg0) {
    !(function handleConnectionOpen(arg0) {
      const self = this;
      const apply = closure_25.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(arg0);
  },
  CONNECTION_RESUMED: function handleConnectionResumed() {
    let c24 = null;
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    tmp3.verbose("connection closed dispatched");
    let closure_20 = Date.now();
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionState(state) {
    if (state.state !== constants.DISCONNECTED) {
      return false;
    } else if (state.willReconnect) {
      if (null != state.streamKey) {
        const socket2 = require(12773) /* handleIdentify */.socket;
        socket2.streamPing(state.streamKey);
      } else {
        const socket = require(12773) /* handleIdentify */.socket;
        socket.voiceServerPing();
      }
    }
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(guildId) {
    const localVoiceState = require(12773) /* handleIdentify */.localVoiceState;
    localVoiceState.update({ guildId: guildId.guildId, channelId: guildId.channelId });
    let channelId = null;
    if (guildId.lockVoiceStateForResume) {
      channelId = null;
      if (null != guildId.channelId) {
        channelId = guildId.channelId;
      }
    }
    let isIOSResult = require(500) /* set */.isIOS();
    if (isIOSResult) {
      isIOSResult = c23 === constants2.BACKGROUND;
    }
    if (isIOSResult) {
      if (null == guildId.channelId) {
        const socket3 = tmp(12773).socket;
        socket3.close(true);
      } else {
        const socket = tmp(12773).socket;
        if (socket.isClosed()) {
          importAll(12809).setIsPaused(false);
          const socket2 = tmp(12773).socket;
          socket2.connect();
          const obj3 = importAll(12809);
        }
      }
    }
    return false;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, userId) => {
      if (id.getId() !== userId.userId) {
        return arg0;
      } else {
        if (userId.sessionId === closure_21) {
          if (null != closure_24) {
            closure_19.verbose("Ignoring voice state for own session due to VSU lock on channel:", closure_24);
            return arg0;
          } else {
            const localVoiceState2 = callback(12773).localVoiceState;
            const obj = { guildId: null, channelId: null };
            ({ guildId: obj[0], channelId: obj[1] } = userId);
            localVoiceState2.setState(obj);
          }
        } else {
          if (userId.guildId !== callback(12773).localVoiceState.guildId) {
            return arg0;
          } else {
            const localVoiceState = tmp(12773).localVoiceState;
            localVoiceState.setState({ guildId: null, channelId: null });
          }
          tmp = callback;
        }
        return true;
      }
    }, false);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    if (guild.guild.id === require(12773) /* handleIdentify */.localVoiceState.guildId) {
      const localVoiceState = require(12773) /* handleIdentify */.localVoiceState;
      localVoiceState.setState({ guildId: null, channelId: null });
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    if (channel.channel.id === require(12773) /* handleIdentify */.localVoiceState.channelId) {
      const localVoiceState = require(12773) /* handleIdentify */.localVoiceState;
      localVoiceState.setState({ guildId: null, channelId: null });
    }
  },
  CALL_DELETE: function handleCallDelete(channelId) {
    channelId = channelId.channelId;
    if (channelId === require(12773) /* handleIdentify */.localVoiceState.channelId) {
      if (c24 === channelId) {
        return false;
      } else {
        const localVoiceState = require(12773) /* handleIdentify */.localVoiceState;
        localVoiceState.setState({ guildId: null, channelId: null });
      }
    }
  },
  APP_STATE_UPDATE: function handleFocus(arg0) {
    let state = arg0;
    let socket = require;
    if (obj.isIOS()) {
      if (!fetchFingerprint.isAuthenticated()) {
        state = state.state;
      } else {
        let isClosedResult = state === tmp6.BACKGROUND && state.state === tmp6.ACTIVE;
        if (isClosedResult) {
          const socket3 = socket(12773).socket;
          isClosedResult = socket3.isClosed();
        }
        if (isClosedResult) {
          importAll(12809).setIsPaused(false);
          const socket4 = socket(12773).socket;
          socket4.connect();
          const obj2 = importAll(12809);
        }
      }
      socket = socket(12773).socket;
      socket.close(true);
    } else {
      if (state.state === constants2.ACTIVE) {
        importAll(12809).setIsPaused(false);
        if (fetchFingerprint.isAuthenticated()) {
          const socket2 = socket(12773).socket;
          socket2.resetBackoff("App state is active");
        }
        const obj3 = importAll(12809);
      }
      return false;
    }
  },
  GUILD_MEMBERS_REQUEST: function handleGuildMembersRequest(userIds) {
    const _require = userIds;
    let socket = _require(12773).socket;
    if (socket.isSessionEstablished()) {
      if ("userIds" in userIds) {
        const obj2 = importDefault(12)(userIds.userIds);
        const item = importDefault(12)(userIds.userIds).chunk(100).forEach((userIds) => {
          const socket = userIds(outer1_3[13]).socket;
          const guildMembers = socket.requestGuildMembers(userIds.guildIds, { userIds, presences: userIds.presences });
        });
        const chunkResult = importDefault(12)(userIds.userIds).chunk(100);
      } else {
        const socket2 = _require(12773).socket;
        const obj = { query: null, limit: null, presences: null };
        ({ query: obj[0], limit: obj[1] } = userIds);
        obj[2] = userIds.presences;
        let guildMembers = socket2.requestGuildMembers(userIds.guildIds, obj);
      }
    }
    return false;
  },
  GUILD_SEARCH_RECENT_MEMBERS: function handleGuildSearchRecentMembers(arg0) {
    let continuationToken;
    let guildId;
    let query;
    ({ guildId, query, continuationToken } = arg0);
    const socket = require(12773) /* handleIdentify */.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = require(12773) /* handleIdentify */.socket;
      const obj = { query: null, continuationToken: null };
      obj[0] = query;
      obj[1] = continuationToken;
      socket2.searchRecentMembers(guildId, obj);
    }
  },
  GUILD_SUBSCRIPTIONS_FLUSH: function handleGuildSubscriptionsFlush(subscriptions) {
    const socket = require(12773) /* handleIdentify */.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = require(12773) /* handleIdentify */.socket;
      const result = socket2.updateGuildSubscriptions(subscriptions.subscriptions);
    }
    return false;
  },
  CALL_CONNECT: function handleCallConnect(channelId) {
    const socket = require(12773) /* handleIdentify */.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = require(12773) /* handleIdentify */.socket;
      socket2.callConnect(channelId.channelId);
    }
    return false;
  },
  CALL_CONNECT_MULTIPLE: function handleCallConnectMultiple(channelIds) {
    channelIds = channelIds.channelIds;
    let socket = require(12773) /* handleIdentify */.socket;
    if (socket.isSessionEstablished()) {
      const item = channelIds.forEach((arg0) => {
        const socket = callback(table[13]).socket;
        socket.callConnect(arg0);
      });
    }
    return false;
  },
  STREAM_CREATE: handleClipsFlags,
  STREAM_START: function handleStreamStart(arg0) {
    let channelId;
    let guildId;
    let streamType;
    ({ streamType, guildId, channelId } = arg0);
    const socket = require(12773) /* handleIdentify */.socket;
    if (socket.isSessionEstablished()) {
      if (null != guildId) {
        channel = channel.getChannel(channelId);
        let rtcRegion;
        if (channel != null) {
          rtcRegion = channel.rtcRegion;
        }
        let region = rtcRegion;
      } else {
        call = call.getCall(channelId);
        if (call != null) {
          region = call.region;
        }
      }
      const socket2 = require(12773) /* handleIdentify */.socket;
      if (region == null) {
        region = preferredRegion.getPreferredRegion();
      }
      socket2.streamCreate(streamType, guildId, channelId, region);
    }
    return false;
  },
  STREAM_WATCH: function handleStreamWatch(arg0) {
    let allowMultiple;
    let streamKey;
    ({ streamKey, allowMultiple } = arg0);
    let socket = _require(12773).socket;
    if (socket.isSessionEstablished()) {
      if (!allowMultiple) {
        const allActiveStreamKeys = store.getAllActiveStreamKeys();
        _require = allActiveStreamKeys.find((streamKey) => callback(4319).decodeStreamKey(streamKey).ownerId === id.getId());
        const allActiveStreamKeys1 = store.getAllActiveStreamKeys();
        const found = allActiveStreamKeys1.filter((arg0) => arg0 !== closure_0);
        const item = found.forEach((streamKey) => {
          const socket = callback(12773).socket;
          if (socket.isSessionEstablished()) {
            const socket2 = callback(12773).socket;
            socket2.streamDelete(streamKey);
          }
        });
      }
      let socket2 = _require(12773).socket;
      socket2.streamWatch(streamKey);
    }
    return false;
  },
  STREAM_STOP: function handleStreamStop(streamKey) {
    const socket = require(12773) /* handleIdentify */.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = tmp(12773).socket;
      socket2.streamDelete(streamKey.streamKey);
    }
    const localVoiceState = tmp(12773).localVoiceState;
    localVoiceState.update();
    return false;
  },
  STREAM_SET_PAUSED: function handleStreamSetPaused(arg0) {
    let paused;
    let streamKey;
    ({ streamKey, paused } = arg0);
    const socket = require(12773) /* handleIdentify */.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = require(12773) /* handleIdentify */.socket;
      socket2.streamSetPaused(streamKey, paused);
    }
  },
  PUSH_NOTIFICATION_CLICK: function handlePushNotificationClick() {
    const socket = require(12773) /* handleIdentify */.socket;
    socket.expeditedHeartbeat(5000, "user clicked on notification", true);
    return false;
  },
  REQUEST_FORUM_UNREADS: function handleRequestForumUnreads(arg0) {
    let channelId;
    let guildId;
    let threads;
    ({ guildId, channelId, threads } = arg0);
    const socket = require(12773) /* handleIdentify */.socket;
    const forumUnreads = socket.requestForumUnreads(guildId, channelId, threads);
  },
  REQUEST_SOUNDBOARD_SOUNDS: function handleRequestSoundboardSounds(guildIds) {
    const socket = require(12773) /* handleIdentify */.socket;
    const soundboardSounds = socket.requestSoundboardSounds(guildIds.guildIds);
  },
  REMOTE_COMMAND: function handleRemoteCommand(arg0) {
    let payload;
    let sessionId;
    ({ sessionId, payload } = arg0);
    const socket = require(12773) /* handleIdentify */.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = require(12773) /* handleIdentify */.socket;
      socket2.remoteCommand(sessionId, payload);
    }
    return false;
  },
  RESET_SOCKET: function handleResetSocket(args) {
    if (require(12773) /* handleIdentify */.socket.connectionState !== importDefault(12788).WILL_RECONNECT) {
      const socket = require(12773) /* handleIdentify */.socket;
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
      const localVoiceState = require(12773) /* handleIdentify */.localVoiceState;
      localVoiceState.update();
    }
  }
});
let obj = {
  START_SESSION: function handleSessionStart() {
    const socket = require(12773) /* handleIdentify */.socket;
    const verbose = tmp3.verbose;
    if (socket.isClosed()) {
      verbose("Socket is reconnecting because of starting new session");
      const socket2 = require(12773) /* handleIdentify */.socket;
      let flag = socket2.connect();
    } else {
      verbose("Socket is not reconnecting during a new session because it is not closed");
      flag = false;
    }
    return flag;
  },
  LOGIN_SUCCESS: function handleSessionRefresh() {
    const obj = { isEstablished: null };
    const socket = require(12773) /* handleIdentify */.socket;
    obj[0] = socket.isSessionEstablished();
    tmp3.verbose("session refresh dispatched", obj);
    const socket2 = require(12773) /* handleIdentify */.socket;
    let connectResult = socket2.isSessionEstablished();
    if (connectResult) {
      const socket3 = tmp(12773).socket;
      socket3.close();
      const socket4 = tmp(12773).socket;
      connectResult = socket4.connect();
    }
    return connectResult;
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    if (isSwitchingAccount.isSwitchingAccount) {
      const localPresenceState = require(12773) /* handleIdentify */.localPresenceState;
      localPresenceState.handleAccountSwitch();
    }
    tmp3.verbose("Closing socket because of logout");
    const socket = require(12773) /* handleIdentify */.socket;
    socket.close();
  },
  CLEAR_CACHES: function handleClearCaches(resetSocket) {
    if (resetSocket.resetSocket) {
      const socket = require(12773) /* handleIdentify */.socket;
      socket.close();
      const dispatcher = require(12773) /* handleIdentify */.socket.dispatcher;
      dispatcher.clear();
      const socket2 = require(12773) /* handleIdentify */.socket;
      socket2.connect();
    }
    return false;
  },
  CONNECTION_OPEN(arg0) {
    !(function handleConnectionOpen(arg0) {
      const self = this;
      const apply = closure_25.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(arg0);
  },
  CONNECTION_RESUMED: function handleConnectionResumed() {
    let c24 = null;
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    tmp3.verbose("connection closed dispatched");
    let closure_20 = Date.now();
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionState(state) {
    if (state.state !== constants.DISCONNECTED) {
      return false;
    } else if (state.willReconnect) {
      if (null != state.streamKey) {
        const socket2 = require(12773) /* handleIdentify */.socket;
        socket2.streamPing(state.streamKey);
      } else {
        const socket = require(12773) /* handleIdentify */.socket;
        socket.voiceServerPing();
      }
    }
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(guildId) {
    const localVoiceState = require(12773) /* handleIdentify */.localVoiceState;
    localVoiceState.update({ guildId: guildId.guildId, channelId: guildId.channelId });
    let channelId = null;
    if (guildId.lockVoiceStateForResume) {
      channelId = null;
      if (null != guildId.channelId) {
        channelId = guildId.channelId;
      }
    }
    let isIOSResult = require(500) /* set */.isIOS();
    if (isIOSResult) {
      isIOSResult = c23 === constants2.BACKGROUND;
    }
    if (isIOSResult) {
      if (null == guildId.channelId) {
        const socket3 = tmp(12773).socket;
        socket3.close(true);
      } else {
        const socket = tmp(12773).socket;
        if (socket.isClosed()) {
          importAll(12809).setIsPaused(false);
          const socket2 = tmp(12773).socket;
          socket2.connect();
          const obj3 = importAll(12809);
        }
      }
    }
    return false;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, userId) => {
      if (id.getId() !== userId.userId) {
        return arg0;
      } else {
        if (userId.sessionId === closure_21) {
          if (null != closure_24) {
            closure_19.verbose("Ignoring voice state for own session due to VSU lock on channel:", closure_24);
            return arg0;
          } else {
            const localVoiceState2 = callback(12773).localVoiceState;
            const obj = { guildId: null, channelId: null };
            ({ guildId: obj[0], channelId: obj[1] } = userId);
            localVoiceState2.setState(obj);
          }
        } else {
          if (userId.guildId !== callback(12773).localVoiceState.guildId) {
            return arg0;
          } else {
            const localVoiceState = tmp(12773).localVoiceState;
            localVoiceState.setState({ guildId: null, channelId: null });
          }
          tmp = callback;
        }
        return true;
      }
    }, false);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    if (guild.guild.id === require(12773) /* handleIdentify */.localVoiceState.guildId) {
      const localVoiceState = require(12773) /* handleIdentify */.localVoiceState;
      localVoiceState.setState({ guildId: null, channelId: null });
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    if (channel.channel.id === require(12773) /* handleIdentify */.localVoiceState.channelId) {
      const localVoiceState = require(12773) /* handleIdentify */.localVoiceState;
      localVoiceState.setState({ guildId: null, channelId: null });
    }
  },
  CALL_DELETE: function handleCallDelete(channelId) {
    channelId = channelId.channelId;
    if (channelId === require(12773) /* handleIdentify */.localVoiceState.channelId) {
      if (c24 === channelId) {
        return false;
      } else {
        const localVoiceState = require(12773) /* handleIdentify */.localVoiceState;
        localVoiceState.setState({ guildId: null, channelId: null });
      }
    }
  },
  APP_STATE_UPDATE: function handleFocus(arg0) {
    let state = arg0;
    let socket = require;
    if (obj.isIOS()) {
      if (!fetchFingerprint.isAuthenticated()) {
        state = state.state;
      } else {
        let isClosedResult = state === tmp6.BACKGROUND && state.state === tmp6.ACTIVE;
        if (isClosedResult) {
          const socket3 = socket(12773).socket;
          isClosedResult = socket3.isClosed();
        }
        if (isClosedResult) {
          importAll(12809).setIsPaused(false);
          const socket4 = socket(12773).socket;
          socket4.connect();
          const obj2 = importAll(12809);
        }
      }
      socket = socket(12773).socket;
      socket.close(true);
    } else {
      if (state.state === constants2.ACTIVE) {
        importAll(12809).setIsPaused(false);
        if (fetchFingerprint.isAuthenticated()) {
          const socket2 = socket(12773).socket;
          socket2.resetBackoff("App state is active");
        }
        const obj3 = importAll(12809);
      }
      return false;
    }
  },
  GUILD_MEMBERS_REQUEST: function handleGuildMembersRequest(userIds) {
    const _require = userIds;
    let socket = _require(12773).socket;
    if (socket.isSessionEstablished()) {
      if ("userIds" in userIds) {
        const obj2 = importDefault(12)(userIds.userIds);
        const item = importDefault(12)(userIds.userIds).chunk(100).forEach((userIds) => {
          const socket = userIds(outer1_3[13]).socket;
          const guildMembers = socket.requestGuildMembers(userIds.guildIds, { userIds, presences: userIds.presences });
        });
        const chunkResult = importDefault(12)(userIds.userIds).chunk(100);
      } else {
        const socket2 = _require(12773).socket;
        const obj = { query: null, limit: null, presences: null };
        ({ query: obj[0], limit: obj[1] } = userIds);
        obj[2] = userIds.presences;
        let guildMembers = socket2.requestGuildMembers(userIds.guildIds, obj);
      }
    }
    return false;
  },
  GUILD_SEARCH_RECENT_MEMBERS: function handleGuildSearchRecentMembers(arg0) {
    let continuationToken;
    let guildId;
    let query;
    ({ guildId, query, continuationToken } = arg0);
    const socket = require(12773) /* handleIdentify */.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = require(12773) /* handleIdentify */.socket;
      const obj = { query: null, continuationToken: null };
      obj[0] = query;
      obj[1] = continuationToken;
      socket2.searchRecentMembers(guildId, obj);
    }
  },
  GUILD_SUBSCRIPTIONS_FLUSH: function handleGuildSubscriptionsFlush(subscriptions) {
    const socket = require(12773) /* handleIdentify */.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = require(12773) /* handleIdentify */.socket;
      const result = socket2.updateGuildSubscriptions(subscriptions.subscriptions);
    }
    return false;
  },
  CALL_CONNECT: function handleCallConnect(channelId) {
    const socket = require(12773) /* handleIdentify */.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = require(12773) /* handleIdentify */.socket;
      socket2.callConnect(channelId.channelId);
    }
    return false;
  },
  CALL_CONNECT_MULTIPLE: function handleCallConnectMultiple(channelIds) {
    channelIds = channelIds.channelIds;
    let socket = require(12773) /* handleIdentify */.socket;
    if (socket.isSessionEstablished()) {
      const item = channelIds.forEach((arg0) => {
        const socket = callback(table[13]).socket;
        socket.callConnect(arg0);
      });
    }
    return false;
  },
  STREAM_CREATE: handleClipsFlags,
  STREAM_START: function handleStreamStart(arg0) {
    let channelId;
    let guildId;
    let streamType;
    ({ streamType, guildId, channelId } = arg0);
    const socket = require(12773) /* handleIdentify */.socket;
    if (socket.isSessionEstablished()) {
      if (null != guildId) {
        channel = channel.getChannel(channelId);
        let rtcRegion;
        if (channel != null) {
          rtcRegion = channel.rtcRegion;
        }
        let region = rtcRegion;
      } else {
        call = call.getCall(channelId);
        if (call != null) {
          region = call.region;
        }
      }
      const socket2 = require(12773) /* handleIdentify */.socket;
      if (region == null) {
        region = preferredRegion.getPreferredRegion();
      }
      socket2.streamCreate(streamType, guildId, channelId, region);
    }
    return false;
  },
  STREAM_WATCH: function handleStreamWatch(arg0) {
    let allowMultiple;
    let streamKey;
    ({ streamKey, allowMultiple } = arg0);
    let socket = _require(12773).socket;
    if (socket.isSessionEstablished()) {
      if (!allowMultiple) {
        const allActiveStreamKeys = store.getAllActiveStreamKeys();
        _require = allActiveStreamKeys.find((streamKey) => callback(4319).decodeStreamKey(streamKey).ownerId === id.getId());
        const allActiveStreamKeys1 = store.getAllActiveStreamKeys();
        const found = allActiveStreamKeys1.filter((arg0) => arg0 !== closure_0);
        const item = found.forEach((streamKey) => {
          const socket = callback(12773).socket;
          if (socket.isSessionEstablished()) {
            const socket2 = callback(12773).socket;
            socket2.streamDelete(streamKey);
          }
        });
      }
      let socket2 = _require(12773).socket;
      socket2.streamWatch(streamKey);
    }
    return false;
  },
  STREAM_STOP: function handleStreamStop(streamKey) {
    const socket = require(12773) /* handleIdentify */.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = tmp(12773).socket;
      socket2.streamDelete(streamKey.streamKey);
    }
    const localVoiceState = tmp(12773).localVoiceState;
    localVoiceState.update();
    return false;
  },
  STREAM_SET_PAUSED: function handleStreamSetPaused(arg0) {
    let paused;
    let streamKey;
    ({ streamKey, paused } = arg0);
    const socket = require(12773) /* handleIdentify */.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = require(12773) /* handleIdentify */.socket;
      socket2.streamSetPaused(streamKey, paused);
    }
  },
  PUSH_NOTIFICATION_CLICK: function handlePushNotificationClick() {
    const socket = require(12773) /* handleIdentify */.socket;
    socket.expeditedHeartbeat(5000, "user clicked on notification", true);
    return false;
  },
  REQUEST_FORUM_UNREADS: function handleRequestForumUnreads(arg0) {
    let channelId;
    let guildId;
    let threads;
    ({ guildId, channelId, threads } = arg0);
    const socket = require(12773) /* handleIdentify */.socket;
    const forumUnreads = socket.requestForumUnreads(guildId, channelId, threads);
  },
  REQUEST_SOUNDBOARD_SOUNDS: function handleRequestSoundboardSounds(guildIds) {
    const socket = require(12773) /* handleIdentify */.socket;
    const soundboardSounds = socket.requestSoundboardSounds(guildIds.guildIds);
  },
  REMOTE_COMMAND: function handleRemoteCommand(arg0) {
    let payload;
    let sessionId;
    ({ sessionId, payload } = arg0);
    const socket = require(12773) /* handleIdentify */.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = require(12773) /* handleIdentify */.socket;
      socket2.remoteCommand(sessionId, payload);
    }
    return false;
  },
  RESET_SOCKET: function handleResetSocket(args) {
    if (require(12773) /* handleIdentify */.socket.connectionState !== importDefault(12788).WILL_RECONNECT) {
      const socket = require(12773) /* handleIdentify */.socket;
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
      const localVoiceState = require(12773) /* handleIdentify */.localVoiceState;
      localVoiceState.update();
    }
  }
};
const tmp3 = new require("callConnect")("ConnectionStore");
let result = require("fetchFingerprint").fileFinishedImporting("modules/gateway/GatewayConnectionStore.tsx");

export default gatewayConnectionStore;