// === Module 5436: GatewayConnectionStore ===

// Module 5436 (GatewayConnectionStore)
import LoggerDefault from "Logger" /* 3 */;
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import DiscordAppStateDefault from "DiscordAppState" /* 10015 */;
import GatewaySocketSingleton from "GatewaySocketSingleton" /* 13439 */;
import ConnectionStateDefault from "ConnectionState" /* 13456 */;
import PauseGatewaySocketAll from "PauseGatewaySocket" /* 13477 */;
import dispatchSocketMessageDefault from "dispatchSocketMessage" /* 13488 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 5437 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import RTCRegionStore from "RTCRegionStore" /* 4940 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5438 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4929 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_1, processUtils, voiceChannelId;

let closure_15;
let closure_16;
let obj = function _handleConnectionOpen() {
  obj = _asyncToGenerator(async (arg0) => {
    sessionId = arg0;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let value;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let obj7;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_1 = tmp;
              voiceChannelId = undefined;
              guildId = undefined;
              const _Date2 = Date;
              closure_20 = Date.now();
              sessionId = sessionId.sessionId;
              const localPresenceState = require("GatewaySocketSingleton").localPresenceState;
              localPresenceState.handleConnectionOpen();
              obj7 = {};
              voiceChannelId = voiceChannelId.getVoiceChannelId();
              if (null != voiceChannelId) {
                const Storage2 = require("Storage").Storage;
                value = Storage2.get("discord_watchdog_restart_timestamp");
                let tmp17 = null != value;
                if (tmp17) {
                  const _Date = Date;
                  const _parseInt = parseInt;
                  const timestamp = Date.now();
                  tmp17 = timestamp - parseInt(value, 10) < 60000;
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
                  if (!tmp17) {
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
                    return { value: lastCrash, done: false };
                  }
                }
              }
              const localVoiceState = closure_130_0(closure_130_3[13]).localVoiceState;
              localVoiceState.update(obj7, true);
              c22 = false;
              let c24 = null;
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            let rendererCrashReason;
            if (value != null) {
              rendererCrashReason = value.rendererCrashReason;
            }
            if (null == rendererCrashReason) {
              const tmp52 = c22;
              if (tmp52) {
                let tmp9 = null;
                const setLastSessionVoiceChannelId = closure_130_10.setLastSessionVoiceChannelId;
                if (null != voiceChannelId) {
                  tmp9 = voiceChannelId;
                }
                const result = setLastSessionVoiceChannelId(tmp9);
                obj = closure_130_1(closure_130_3[18]);
                const voiceChannel = obj.selectVoiceChannel(null);
              }
            }
          }
          guildId = channel.getChannel(voiceChannelId);
          if (null != guildId) {
            obj7 = { guildId: guildId.getGuildId(), channelId: voiceChannelId };
            const obj5 = closure_130_0(closure_130_3[17]);
            obj5.muteCustomJoinSound(voiceChannelId);
          }
        } catch (tmp46) {
          c4 = 3;
          throw tmp46;
        }
      }
    })();
  });
  return obj(...arguments);
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
({ RTCConnectionStates: closure_15, AppStates: closure_16 } = Constants);
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
GatewaySocketSingleton.socket.dispatcher.getDispatchHandler = dispatchSocketMessageDefault;
const tmp3 = new LoggerDefault("ConnectionStore");
let closure_19 = tmp3;
let closure_20 = 0;
let c21 = null;
let c22 = true;
let state = null;
let channelId = null;
const Store = get_initializedDefault.Store;
class GatewayConnectionStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, CallStore, ChannelStore, MediaEngineStore, RTCConnectionStore, RTCRegionStore, SelectedChannelStore, SelfPresenceStore, StreamRTCConnectionStore, UserSettingsProtoStore);
    const items = [MediaEngineStore];
    this.syncWith(items, handleMediaEngineChange);
    const items1 = [SelfPresenceStore];
    this.syncWith(items1, handleLocalPresenceChange);
  }
  getSocket() {
    return GatewaySocketSingleton.socket;
  }
  isTryingToConnect() {
    const socket = GatewaySocketSingleton.socket;
    return !socket.isClosed();
  }
  isConnected() {
    const socket = GatewaySocketSingleton.socket;
    return socket.isSessionEstablished();
  }
  isConnectedOrOverlay() {
    const socket = GatewaySocketSingleton.socket;
    const tmp = socket.isSessionEstablished() || false;
    return tmp;
  }
  lastTimeConnectedChanged() {
    return closure_20;
  }
}
const prototype = GatewayConnectionStore.prototype;
GatewayConnectionStore.displayName = "GatewayConnectionStore";
obj = {
  START_SESSION: function handleSessionStart() {
    let flag;
    const socket = GatewaySocketSingleton.socket;
    const verbose = closure_19.verbose;
    if (socket.isClosed()) {
      verbose("Socket is reconnecting because of starting new session");
      const socket2 = GatewaySocketSingleton.socket;
      flag = socket2.connect();
    } else {
      verbose("Socket is not reconnecting during a new session because it is not closed");
      flag = false;
    }
    return flag;
  },
  LOGIN_SUCCESS: function handleSessionRefresh() {
    let socket;
    const verbose = closure_19.verbose;
    obj = { isEstablished: socket.isSessionEstablished() };
    socket = GatewaySocketSingleton.socket;
    verbose("session refresh dispatched", obj);
    const socket2 = GatewaySocketSingleton.socket;
    let connectResult = socket2.isSessionEstablished();
    if (connectResult) {
      const socket3 = GatewaySocketSingleton.socket;
      socket3.close();
      const socket4 = GatewaySocketSingleton.socket;
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
      obj = PlatformUtils;
      const isIOSResult = obj.isIOS();
      let tmp6 = !isIOSResult;
      if (isIOSResult) {
        const obj2 = DiscordAppStateDefault;
        tmp6 = obj2.getState() !== constants2.BACKGROUND;
      }
      if (!tmp6) {
        tmp6 = null != GatewaySocketSingleton.localVoiceState.channelId;
      }
      if (tmp6) {
        const obj3 = PauseGatewaySocketAll;
        obj3.setIsPaused(false);
        const socket2 = GatewaySocketSingleton.socket;
        socket2.connect();
      }
    }
    return false;
  },
  CONNECTION_OPEN(arg0) {
    function handleConnectionOpen() {
      return obj(...arguments);
    }
    !handleConnectionOpen(arg0);
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
    obj = { guildId: guildId.guildId, channelId: guildId.channelId };
    localVoiceState.update(obj);
    channelId = null;
    if (guildId.lockVoiceStateForResume) {
      channelId = null;
      if (null != guildId.channelId) {
        channelId = guildId.channelId;
      }
    }
    const tmpResult = PlatformUtils;
    const isIOSResult = tmpResult.isIOS() && state === constants2.BACKGROUND;
    if (isIOSResult) {
      if (null == guildId.channelId) {
        const socket3 = GatewaySocketSingleton.socket;
        socket3.close(true);
      } else {
        const socket = GatewaySocketSingleton.socket;
        if (socket.isClosed()) {
          const obj3 = PauseGatewaySocketAll;
          obj3.setIsPaused(false);
          const socket2 = GatewaySocketSingleton.socket;
          socket2.connect();
        }
      }
    }
    return false;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    let id;
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
            obj = { guildId: null, channelId: null };
            ({ guildId: obj.guildId, channelId: obj.channelId } = userId);
            localVoiceState2.setState(obj);
          }
        } else if (userId.guildId !== require("GatewaySocketSingleton").localVoiceState.guildId) {
          return acc;
        } else {
          const localVoiceState = require("GatewaySocketSingleton").localVoiceState;
          localVoiceState.setState({ guildId: null, channelId: null });
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
  APP_STATE_UPDATE: function handleFocus(state) {
    obj = PlatformUtils;
    if (obj.isIOS()) {
      if (AuthenticationStore.isAuthenticated()) {
        if (state === constants2.INACTIVE) {
          if (state.state === constants2.BACKGROUND) {
            if (null == GatewaySocketSingleton.localVoiceState.channelId) {
              const socket4 = GatewaySocketSingleton.socket;
              socket4.close(true);
            }
          }
        }
        let isClosedResult = state === constants2.BACKGROUND && state.state === constants2.ACTIVE;
        if (isClosedResult) {
          const socket2 = GatewaySocketSingleton.socket;
          isClosedResult = socket2.isClosed();
        }
        if (isClosedResult) {
          const obj2 = PauseGatewaySocketAll;
          obj2.setIsPaused(false);
          const socket3 = GatewaySocketSingleton.socket;
          socket3.connect();
        }
      }
      state = state.state;
    } else if (state.state === constants2.ACTIVE) {
      const obj3 = PauseGatewaySocketAll;
      obj3.setIsPaused(false);
      if (AuthenticationStore.isAuthenticated()) {
        const socket = GatewaySocketSingleton.socket;
        socket.resetBackoff("App state is active");
      }
    }
    return false;
  },
  GUILD_MEMBERS_REQUEST: function handleGuildMembersRequest(userIds) {
    _require = userIds;
    let socket = require("GatewaySocketSingleton").socket;
    const tmp = _require;
    if (socket.isSessionEstablished()) {
      if ("userIds" in userIds) {
        const obj2 = _modDef12(userIds.userIds);
        const chunkResult = obj2.chunk(100);
        const item = chunkResult.forEach((userIds) => {
          const socket = GatewaySocketSingleton.socket;
          obj = { userIds, presences: userIds.presences };
          const guildMembers = socket.requestGuildMembers(userIds.guildIds, obj);
        });
      } else {
        const socket2 = tmp(13439).socket;
        obj = { query: null, limit: null, presences: userIds.presences };
        ({ query: obj.query, limit: obj.limit } = userIds);
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
    const socket = GatewaySocketSingleton.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = GatewaySocketSingleton.socket;
      obj = { query, continuationToken };
      socket2.searchRecentMembers(guildId, obj);
    }
  },
  GUILD_SUBSCRIPTIONS_FLUSH: function handleGuildSubscriptionsFlush(subscriptions) {
    subscriptions = subscriptions.subscriptions;
    const socket = GatewaySocketSingleton.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = GatewaySocketSingleton.socket;
      const result = socket2.updateGuildSubscriptions(subscriptions);
    }
    return false;
  },
  CALL_CONNECT: function handleCallConnect(channelId) {
    channelId = channelId.channelId;
    const socket = GatewaySocketSingleton.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = GatewaySocketSingleton.socket;
      socket2.callConnect(channelId);
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
    let guildId;
    let streamType;
    ({ streamType, guildId, channelId } = arg0);
    const socket = GatewaySocketSingleton.socket;
    if (socket.isSessionEstablished()) {
      let region;
      if (null != guildId) {
        const channel = ChannelStore.getChannel(channelId);
        let rtcRegion;
        if (channel != null) {
          rtcRegion = channel.rtcRegion;
        }
        region = rtcRegion;
      } else {
        const call = CallStore.getCall(channelId);
        if (call != null) {
          region = call.region;
        }
      }
      const socket2 = GatewaySocketSingleton.socket;
      const streamCreate = socket2.streamCreate;
      if (region == null) {
        region = RTCRegionStore.getPreferredRegion();
      }
      streamCreate(streamType, guildId, channelId, region);
    }
    return false;
  },
  STREAM_WATCH: function handleStreamWatch(arg0) {
    let allowMultiple;
    let closure_0;
    let id;
    let streamKey;
    ({ streamKey, allowMultiple } = arg0);
    let socket = require("GatewaySocketSingleton").socket;
    const tmp = _require;
    if (socket.isSessionEstablished()) {
      if (!allowMultiple) {
        const allActiveStreamKeys = StreamRTCConnectionStore.getAllActiveStreamKeys();
        _require = allActiveStreamKeys.find((item) => {
          obj = closure_0(dependencyMap[23]);
          return obj.decodeStreamKey(item).ownerId === id.getId();
        });
        const allActiveStreamKeys1 = StreamRTCConnectionStore.getAllActiveStreamKeys();
        const found = allActiveStreamKeys1.filter((item) => item !== closure_0);
        const item = found.forEach((item) => {
          const socket = closure_0(dependencyMap[13]).socket;
          if (socket.isSessionEstablished()) {
            const socket2 = closure_0(dependencyMap[13]).socket;
            socket2.streamDelete(item);
          }
        });
      }
      let socket2 = tmp(13439).socket;
      socket2.streamWatch(streamKey);
    }
    return false;
  },
  STREAM_STOP: function handleStreamStop(streamKey) {
    streamKey = streamKey.streamKey;
    const socket = GatewaySocketSingleton.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = GatewaySocketSingleton.socket;
      socket2.streamDelete(streamKey);
    }
    const localVoiceState = GatewaySocketSingleton.localVoiceState;
    localVoiceState.update();
    return false;
  },
  STREAM_SET_PAUSED: function handleStreamSetPaused(arg0) {
    let paused;
    let streamKey;
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
    let guildId;
    let threads;
    ({ guildId, channelId, threads } = arg0);
    const socket = GatewaySocketSingleton.socket;
    const forumUnreads = socket.requestForumUnreads(guildId, channelId, threads);
  },
  REQUEST_SOUNDBOARD_SOUNDS: function handleRequestSoundboardSounds(guildIds) {
    guildIds = guildIds.guildIds;
    const socket = GatewaySocketSingleton.socket;
    const soundboardSounds = socket.requestSoundboardSounds(guildIds);
  },
  REMOTE_COMMAND: function handleRemoteCommand(arg0) {
    let payload;
    let sessionId;
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
};
const gatewayConnectionStore = new GatewayConnectionStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/gateway/GatewayConnectionStore.tsx");

export default gatewayConnectionStore;