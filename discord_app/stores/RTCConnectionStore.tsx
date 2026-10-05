// discord_app/stores/RTCConnectionStore.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import asyncRequire from "../../_runtime/01987_asyncRequire.js";
import Constants2 from "../../discord_common/js/packages/media-engine/Constants.tsx";
import TimeUtils from "../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import VoiceStateAnalyticsDefault from "../lib/VoiceStateAnalytics.tsx";
import useSpatialAudioControlState from "../modules/spatial_audio/useSpatialAudioControlState.tsx";
import trackVideoToggle from "../modules/media_engine/trackVideoToggle.tsx";
import GameConsoleStore from "../modules/game_console/GameConsoleStore.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import SortedVoiceStateStore from "views/SortedVoiceStateStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, closure_18, closure_3, config, joinVoiceId, redux, voiceStateAnalytics;

let c10;
let c9;
let metroImportAll;
function createRTCConnection(guildId, channelId, createdTime) {
  let _default;
  if (null == sessionId) {
    const tmp = globalThis;
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Creating RTCConnection without session.");
    throw error;
  } else {
    const id = AuthenticationStore.getId();
    let obj = { userId: id, sessionId, guildId, channelId, joinVoiceId, createdTime };
    const self3 = this;
    const self4 = this;
    _default = new _default(4917).default(obj);
    _default.on(_default(4944).RTCConnectionEvent.State, (state, arg1, arg2) => {
      let closure_1 = arg1;
      let closure_2 = arg2;
      let obj = closure_1(closure_2[8]);
      obj.wait(() => {
        const dispatch = DispatcherDefault.dispatch;
        const obj = { type: "RTC_CONNECTION_STATE", state };
        DispatcherDefault;
        const merged = Object.assign(closure_1);
        const merged1 = Object.assign(closure_2);
        return dispatch(obj);
      });
    });
    _default.on(_default(4944).RTCConnectionEvent.Video, (guildId, channelId, userId, streamId, rtcServerId) => {
      let obj = DispatcherDefault;
      obj.wait(() => {
        const obj = DispatcherDefault;
        obj2 = {
          type: "RTC_CONNECTION_VIDEO",
          guildId,
          channelId,
          userId,
          streamId,
          rtcServerId,
          context: MediaEngineContextTypes.DEFAULT,
          mediaEngineConnectionId: _default.getMediaEngineConnectionId(),
        };
        return obj.dispatch(obj2);
      });
    });
    _default.on(_default(4944).RTCConnectionEvent.Ping, (pings, quality) => {
      let obj = quality(closure_2[8]);
      obj.wait(() => {
        const obj = DispatcherDefault;
        obj2 = { type: "RTC_CONNECTION_PING", pings, quality };
        return obj.dispatch(obj2);
      });
    });
    _default.on(_default(4944).RTCConnectionEvent.OutboundLossRate, (lossRate) => {
      let obj = closure_1(closure_2[8]);
      obj.wait(() => {
        const obj = DispatcherDefault;
        obj2 = { type: "RTC_CONNECTION_LOSS_RATE", lossRate };
        return obj.dispatch(obj2);
      });
    });
    _default.on(_default(4944).RTCConnectionEvent.Speaking, (userId, speaking) => {
      if (speaking != null) {
        speaking.setSpeaking(userId, speaking);
      }
    });
    _default.on(_default(4944).RTCConnectionEvent.Flags, (userId, flags) => {
      let obj = DispatcherDefault;
      obj.wait(() => {
        const obj = DispatcherDefault;
        obj2 = {
          type: "RTC_CONNECTION_FLAGS",
          flags,
          userId,
          guildId: _default.guildId,
          channelId: _default.channelId,
          context: _default.context,
        };
        obj.dispatch(obj2);
      });
    });
    _default.on(_default(4944).RTCConnectionEvent.UsersMerged, (userIds, context) => {
      const obj = DispatcherDefault;
      obj2 = { type: "RTC_CONNECTION_USERS_MERGED", userIds, context };
      obj.dispatch(obj2);
    });
    _default.on(_default(4944).RTCConnectionEvent.ClientConnect, (userIds) => {
      let obj = DispatcherDefault;
      obj.wait(() => {
        const obj = DispatcherDefault;
        obj2 = {
          type: "RTC_CONNECTION_CLIENT_CONNECT",
          userIds,
          guildId: _default.guildId,
          channelId: _default.channelId,
          context: _default.context,
        };
        obj.dispatch(obj2);
      });
    });
    _default.on(_default(4944).RTCConnectionEvent.ClientDisconnect, (userId) => {
      let obj = DispatcherDefault;
      obj.wait(() => {
        const obj = DispatcherDefault;
        obj2 = {
          type: "RTC_CONNECTION_CLIENT_DISCONNECT",
          userId,
          guildId: _default.guildId,
          channelId: _default.channelId,
          context: _default.context,
        };
        obj.dispatch(obj2);
      });
    });
    _default.on(_default(4944).RTCConnectionEvent.Platform, (userId, platform, channelId) => {
      let obj = platform(channelId[8]);
      obj.wait(() => {
        const obj = DispatcherDefault;
        obj2 = { type: "RTC_CONNECTION_PLATFORM", platform, userId, channelId };
        obj.dispatch(obj2);
      });
    });
    _default.on(_default(4944).RTCConnectionEvent.SecureFramesUpdate, () => {
      let obj = DispatcherDefault;
      obj.wait(() => {
        const obj = closure_1_1(closure_1_2[8]);
        obj.dispatch({ type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE" });
      });
    });
    _default.on(_default(4944).RTCConnectionEvent.RosterMapUpdate, (userIds) => {
      let obj = closure_1(closure_2[8]);
      obj.wait(() => {
        const obj = DispatcherDefault;
        obj2 = { type: "RTC_CONNECTION_ROSTER_MAP_UPDATE", userIds };
        obj.dispatch(obj2);
      });
    });
    const self5 = this;
    const self6 = this;
    const tmp28 = VoiceStateAnalyticsDefault;
    const speaking = new tmp28(AuthenticationStore.getId(), channelId);
    let c15 = null;
    let c18 = false;
    let c19 = false;
    const tmp282 = new tmp28(AuthenticationStore.getId(), channelId);
    return _default;
  }
}
function destroyRTCConnection(arg0) {
  let mediaSessionId;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (null == redux) {
    return false;
  } else {
    ({
      duration: redux.getDuration(),
      mediaSessionId,
      rtcConnectionId: redux.getRTCConnectionId(),
      wasEverMultiParticipant,
      wasEverRtcConnected,
      voiceStateAnalytics,
      channelId: redux.channelId,
    });
    mediaSessionId = redux.getMediaSessionId();
    if (mediaSessionId == null) {
      mediaSessionId = null;
    }
    const obj = {
      type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
      mediaEngineConnectionId: redux.getMediaEngineConnectionId(),
    };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    dispatch(obj);
    redux.destroy();
    redux = null;
    voiceStateAnalytics = null;
    c22 = false;
    if (flag) {
      closure_20 = null;
    }
  }
}
function handleClearRemoteDisconnectVoiceChannelId() {
  c14 = null;
}
function handleChannelDelete(arg0) {
  if (null != redux) {
    if (redux.channelId === tmp.id) {
      destroyRTCConnection();
    }
  }
  return false;
}
function handleRtcAction() {
  return true;
}
({ RTCConnectionStates: metroImportAll, AppStates: c9, RTCConnectionQuality: c10 } = Constants);
const MediaEngineContextTypes = Constants2.MediaEngineContextTypes;
let tmp3 = new LoggerDefault("RTCConnectionStore");
let closure_12 = tmp3;
let closure_13 = [];
let c14 = null;
let obj2 = null;
let c16 = null;
let c17 = null;
const wasEverMultiParticipant = false;
let c19 = false;
let closure_20 = null;
let closure_21 = null;
let c22 = false;
let c23 = null;
let c24 = null;
const Store = get_initializedDefault.Store;
class RTCConnectionStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, GameConsoleStore, SortedVoiceStateStore);
    const obj = trackVideoToggle;
    const result = obj.setVideoToggleAnalyticsParams(this.getRTCConnectionId, this.getMediaSessionId);
  }
  getRTCConnection() {
    return redux;
  }
  getState() {
    let DISCONNECTED;
    if (null != redux) {
      DISCONNECTED = redux.state;
    } else {
      DISCONNECTED = metroImportAll.DISCONNECTED;
    }
    return DISCONNECTED;
  }
  isConnected() {
    return this.getState() === metroImportAll.RTC_CONNECTED;
  }
  isDisconnected() {
    return this.getState() === metroImportAll.DISCONNECTED;
  }
  getRemoteDisconnectVoiceChannelId() {
    return c14;
  }
  getLastSessionVoiceChannelId() {
    return c16;
  }
  setLastSessionVoiceChannelId(arg0) {
    c16 = arg0;
  }
  getGuildId() {
    let guildId;
    if (redux != null) {
      guildId = redux.guildId;
    }
    return guildId;
  }
  getChannelId() {
    let channelId;
    if (redux != null) {
      channelId = redux.channelId;
    }
    return channelId;
  }
  getHostname() {
    let str = "";
    if (null != redux) {
      str = redux.hostname;
    }
    return str;
  }
  getQuality() {
    let UNKNOWN;
    if (null != redux) {
      UNKNOWN = redux.quality;
    } else {
      UNKNOWN = constants3.UNKNOWN;
    }
    return UNKNOWN;
  }
  getPings() {
    let pings;
    if (null != redux) {
      pings = redux.getPings();
    } else {
      pings = closure_13;
    }
    return pings;
  }
  getAveragePing() {
    let num = 0;
    if (null != redux) {
      let averagePing;
      if (redux != null) {
        averagePing = redux.getAveragePing();
      }
      num = averagePing;
    }
    return num;
  }
  getLastPing() {
    let lastPing;
    if (redux != null) {
      lastPing = redux.getLastPing();
    }
    return lastPing;
  }
  getOutboundLossRate() {
    let outboundLossRate;
    if (redux != null) {
      outboundLossRate = redux.getOutboundLossRate();
    }
    return outboundLossRate;
  }
  getMediaSessionId() {
    let mediaSessionId;
    if (redux != null) {
      mediaSessionId = redux.getMediaSessionId();
    }
    return mediaSessionId;
  }
  getRTCConnectionId() {
    let rTCConnectionId;
    if (redux != null) {
      rTCConnectionId = redux.getRTCConnectionId();
    }
    return rTCConnectionId;
  }
  getDuration() {
    let duration;
    if (redux != null) {
      duration = redux.getDuration();
    }
    if (duration == null) {
      let duration1;
      if (obj2 != null) {
        duration1 = obj2.duration;
      }
      duration = duration1;
    }
    return duration;
  }
  getLastRTCConnectionState() {
    return obj2;
  }
  getPacketStats() {
    let packetStats;
    if (redux != null) {
      packetStats = redux.getPacketStats();
    }
    return packetStats;
  }
  getVoiceStateStats() {
    let stats;
    if (voiceStateAnalytics != null) {
      stats = voiceStateAnalytics.getStats();
    }
    return stats;
  }
  getUserVoiceSettingsStats(arg0) {
    let userVoiceSettingsStats;
    if (voiceStateAnalytics != null) {
      userVoiceSettingsStats = voiceStateAnalytics.getUserVoiceSettingsStats(arg0);
    }
    return userVoiceSettingsStats;
  }
  getWasEverMultiParticipant() {
    return wasEverMultiParticipant;
  }
  getWasEverRtcConnected() {
    return c19;
  }
  getUserIds() {
    let userIds;
    if (redux != null) {
      userIds = redux.getUserIds();
    }
    return userIds;
  }
  getJoinVoiceId() {
    return c23;
  }
  isUserConnected(arg0) {
    let isUserConnected;
    if (redux != null) {
      isUserConnected = redux.getIsUserConnected(arg0);
    }
    return isUserConnected;
  }
  getSecureFramesState() {
    let secureFramesState;
    if (redux != null) {
      secureFramesState = redux.getSecureFramesState();
    }
    return secureFramesState;
  }
  getSecureFramesRosterMapEntry(arg0) {
    let secureFramesRosterMap;
    if (redux != null) {
      secureFramesRosterMap = redux.getSecureFramesRosterMap();
    }
    let value;
    if (secureFramesRosterMap != null) {
      value = secureFramesRosterMap.get(arg0);
    }
    return value;
  }
  getLastNonZeroRemoteVideoSinkWantsTime() {
    return closure_21;
  }
  getWasMoved() {
    return c22;
  }
}
const prototype = RTCConnectionStore.prototype;
RTCConnectionStore.displayName = "RTCConnectionStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(sessionId) {
    sessionId = sessionId.sessionId;
    c14 = null;
    c16 = null;
    destroyRTCConnection(false);
    if (null != config) {
      const timeout = config.timeout;
      timeout.stop();
      config = null;
    }
    return false;
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    let c4 = null;
    c14 = null;
    c16 = null;
    destroyRTCConnection(false);
    if (null != config) {
      const timeout = config.timeout;
      timeout.stop();
      config = null;
    }
  },
  LOGOUT: function handleLogout() {
    closure_20 = null;
    return false;
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionState(state) {
    if (state.state === metroImportAll.RTC_CONNECTED) {
      let c19 = true;
      if (null != redux) {
        const obj = TimeUtils;
        closure_20 = obj.now();
      }
    }
    return true;
  },
  RTC_CONNECTION_PING: function handleRtcConnectionPing() {
    if (null != redux) {
      const obj = TimeUtils;
      closure_20 = obj.now();
    }
    return true;
  },
  RTC_CONNECTION_LOSS_RATE: handleRtcAction,
  RTC_CONNECTION_UPDATE_ID: function handleRtcConnectionUpdateId(connection) {
    return connection.connection === redux;
  },
  RTC_CONNECTION_SECURE_FRAMES_UPDATE: handleRtcAction,
  RTC_CONNECTION_CLIENT_CONNECT: handleRtcAction,
  RTC_CONNECTION_CLIENT_DISCONNECT: handleRtcAction,
  RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: function handleRtcConnectionRemoteVideoSinkWants(context) {
    let tmp2 = context.context === MediaEngineContextTypes.DEFAULT;
    if (tmp2) {
      const tmp3 = globalThis;
      const _Object = Object;
      const entries = Object.entries(tmp);
      const someResult = entries.some((item) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        return "any" !== tmp && 0 !== tmp2;
      });
      if (someResult) {
        const _performance = performance;
        closure_21 = performance.now();
      }
      tmp2 = someResult;
    }
    return tmp2;
  },
  VIDEO_SIZE_UPDATE: function handleVideoSizeUpdate(arg0) {
    if (redux != null) {
      redux.setVideoSize(tmp, tmp2, tmp3);
    }
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(arg0) {
    let require;
    let voiceStates;
    ({ voiceStates, receivedAt: require } = arg0);
    return voiceStates.reduce((acc, userId) => {
      if (c17 != null) {
        c17.updateVoiceStates(userId.userId, userId.channelId);
      }
      let tmp2 = closure_18;
      if (!tmp2) {
        let num;
        if (c17 != null) {
          num = c17.getStats().max_voice_state_count;
        }
        if (num == null) {
          num = 0;
        }
        tmp2 = num > 1;
      }
      closure_18 = tmp2;
      if (AuthenticationStore.getId() !== userId.userId) {
        return acc;
      } else {
        if (null != config && userId.channelId === config.channelId) {
          if (null != config) {
            const timeout = config.timeout;
            timeout.stop();
            config = null;
          }
        }
        if (null != closure_3) {
          if (userId.sessionId === c4) {
            if (null == userId.guildId) {
              const tmp26 = userId.guildId !== closure_3.guildId && null == userId.channelId;
              if (!tmp26) {
                destroyRTCConnection();
              }
              if (null != userId.channelId) {
                let channelId = null;
                c16 = null;
                closure_3 = createRTCConnection(userId.guildId, userId.channelId, _require);
                let num9;
                if (c17 != null) {
                  num9 = c17.getStats().max_voice_state_count;
                }
                if (num9 == null) {
                  num9 = 0;
                }
                closure_18 = num9 > 1;
              }
            }
            if (null == userId.channelId) {
              destroyRTCConnection();
            } else {
              closure_3.setNextChannelId(userId.channelId);
              c22 = true;
              let c23 = null;
              closure_3.clearJoinVoiceId();
            }
          } else if (userId.guildId === closure_3.guildId) {
            const tmp19 =
              null != GameConsoleStore.getAwaitingRemoteSessionInfo() && null != GameConsoleStore.getRemoteSessionId();
            if (!tmp19) {
              channelId = closure_3.channelId;
            }
            destroyRTCConnection();
          }
        } else {
          if (userId.sessionId === c4) {
            if (null != userId.channelId) {
              if (!(null != config && userId.channelId === config.channelId)) {
                if (null != closure_20) {
                  const obj3 = TimeUtils;
                  if (obj3.now() - closure_20 >= 300000) {
                    const obj4 = DispatcherDefault;
                    obj4.wait(() => {
                      const _default = closure_1_0(closure_1_2[12]).default;
                      return _default.disconnect();
                    });
                    return acc;
                  }
                }
              }
              channelId = null;
              c16 = null;
              closure_3 = createRTCConnection(userId.guildId, userId.channelId, _require);
              let num5;
              if (c17 != null) {
                num5 = c17.getStats().max_voice_state_count;
              }
              if (num5 == null) {
                num5 = 0;
              }
              closure_18 = num5 > 1;
            }
          }
          return acc;
        }
        return true;
      }
    }, false);
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    let logger;
    let obj;
    let tmp = null == redux;
    if (!tmp) {
      tmp = null != channelId.channelId && redux.channelId === channelId.channelId;
      const tmp2 = null != channelId.channelId && redux.channelId === channelId.channelId;
    }
    if (!tmp) {
      destroyRTCConnection();
    }
    joinVoiceId = channelId.joinVoiceId;
    _require = channelId;
    if (null != obj) {
      const timeout = obj.timeout;
      timeout.stop();
      obj = null;
    }
    if (null != channelId.channelId) {
      const self = this;
      const self2 = this;
      const timeout1 = new require("Timers").Timeout();
      timeout1.start(30000, () => {
        obj = { joinVoiceId: channelId.joinVoiceId, channelId: channelId.channelId, guildId: channelId.guildId };
        logger.warn("No VOICE_STATE_UPDATE received within 30000ms of VOICE_CHANNEL_SELECT", obj);
        let c24 = null;
      });
      obj = { joinVoiceId: null, channelId: null, guildId: null, timeout: timeout1 };
      ({ joinVoiceId: obj2.joinVoiceId, channelId: obj2.channelId, guildId: obj2.guildId } = channelId);
    }
  },
  AUDIO_SET_NOISE_CANCELLATION: function handleAudioSetNoiseCancellation(enabled) {
    if (redux != null) {
      const result = redux.setNoiseCancellationEnabled(enabled.enabled);
    }
  },
  AUDIO_SET_AUDIO_MIXER_SETTINGS: function handleAudioSetAudioMixerSettings(context) {
    if (context.context !== MediaEngineContextTypes.DEFAULT) {
      return false;
    } else {
      let flag = context.settings.enabled;
      if (flag == null) {
        flag = false;
      }
      if (flag) {
        const obj = useSpatialAudioControlState;
        flag = obj.isSpatialAudioEligible("RTCConnectionStore");
      }
      if (redux != null) {
        const result = redux.setSpatialAudioEnabled(flag);
      }
    }
  },
  VOICE_SERVER_UPDATE: function handleVoiceServerUpdate(guildId) {
    let tmp = null != redux;
    if (tmp) {
      let tmp3 = null == guildId.guildId || guildId.guildId === redux.guildId;
      if (tmp3) {
        const tmp5 = null == guildId.channelId || guildId.channelId === redux.getNextChannelId();
        if (tmp5) {
          redux.connect(guildId.endpoint, guildId.token);
        }
        tmp3 = tmp5;
      }
      tmp = tmp3;
    }
    return tmp;
  },
  CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: handleClearRemoteDisconnectVoiceChannelId,
  REMOTE_SESSION_CONNECT: handleClearRemoteDisconnectVoiceChannelId,
  CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: function handleClearLastSessionVoiceChannelId() {
    c16 = null;
  },
  GUILD_DELETE: function handleGuildDelete(arg0) {
    if (null != redux) {
      if (redux.guildId === tmp.id) {
        destroyRTCConnection();
      }
    }
    return false;
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  CALL_DELETE: function handleCallDelete(arg0) {
    if (null != redux) {
      if (redux.channelId === tmp) {
        destroyRTCConnection();
      }
    }
    return false;
  },
  APP_STATE_UPDATE: function handleFocus(state) {
    const tmp = state.state === constants2.ACTIVE && null != redux;
    if (tmp) {
      redux.resetBackoff("App state is active");
    }
    return false;
  },
  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: function handleSimulcastDebugOverrideChanged(arg0) {
    if (redux != null) {
      const result = redux.setSimulcastDebugOverride(tmp, tmp2, tmp3);
    }
  },
};
const rTCConnectionStore = new RTCConnectionStore(DispatcherDefault, obj);
const promise = asyncRequire(1252, dependencyMap.paths);
promise.then((addExtraAnalyticsDecorator) => {
  let state;
  const result = addExtraAnalyticsDecorator.addExtraAnalyticsDecorator((arg0) => {
    arg0.client_rtc_state = state.getState();
  });
});
let result = size.fileFinishedImporting("stores/RTCConnectionStore.tsx");

export default rTCConnectionStore;
