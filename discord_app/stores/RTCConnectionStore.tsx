// === Module 4583: RTCConnectionStore ===

// Module 4583 (RTCConnectionStore)
import LoggerDefault from "Logger" /* 3 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import TimeUtils from "TimeUtils" /* 4589 */;
import VoiceStateAnalyticsDefault from "VoiceStateAnalytics" /* 13824 */;
import useSpatialAudioControlState from "useSpatialAudioControlState" /* 13825 */;
import trackVideoToggle from "trackVideoToggle" /* 13827 */;
import GameConsoleStore from "GameConsoleStore" /* 4577 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4584 */;

require = fn;
function createRTCConnection(guildId, channelId, createdTime) {
  if (null == sessionId) {
    const _Error = Error;
    const error = new Error("Creating RTCConnection without session.");
    throw error;
  } else {
    const id = AuthenticationStore.getId();
    obj = { userId: id, sessionId, guildId, channelId, joinVoiceId, createdTime };
    _default = new _default(4587).default(obj);
    _default.on(_default(4614).RTCConnectionEvent.State, (state, arg1, arg2) => {
      closure_1 = arg1;
      dependencyMap = arg2;
      closure_1(573).wait(() => {
        obj = { type: "RTC_CONNECTION_STATE", state };
        const merged = Object.assign(closure_1);
        const merged1 = Object.assign(closure_2);
        return obj.dispatch(obj);
      });
    });
    _default.on(_default(4614).RTCConnectionEvent.Video, (guildId, channelId, userId, streamId, rtcServerId) => {
      DispatcherDefault.wait(() => {
        obj = { type: "RTC_CONNECTION_VIDEO", guildId, channelId, userId, streamId, rtcServerId, context: MediaEngineContextTypes.DEFAULT, mediaEngineConnectionId: _default.getMediaEngineConnectionId() };
        return obj.dispatch(obj);
      });
    });
    _default.on(_default(4614).RTCConnectionEvent.Ping, (pings, quality) => {
      quality(573).wait(() => {
        obj = { type: "RTC_CONNECTION_PING", pings, quality };
        return obj.dispatch(obj);
      });
    });
    _default.on(_default(4614).RTCConnectionEvent.OutboundLossRate, (lossRate) => {
      closure_1(573).wait(() => {
        obj = { type: "RTC_CONNECTION_LOSS_RATE", lossRate };
        return obj.dispatch(obj);
      });
    });
    _default.on(_default(4614).RTCConnectionEvent.Speaking, (userId, speaking) => {
      if (speaking != null) {
        speaking.setSpeaking(userId, speaking);
      }
    });
    _default.on(_default(4614).RTCConnectionEvent.Flags, (userId, flags) => {
      DispatcherDefault.wait(() => {
        obj = { type: "RTC_CONNECTION_FLAGS", flags, userId, guildId: _default.guildId, channelId: _default.channelId, context: _default.context };
        obj.dispatch(obj);
      });
    });
    _default.on(_default(4614).RTCConnectionEvent.UsersMerged, (userIds, context) => {
      obj = { type: "RTC_CONNECTION_USERS_MERGED", userIds, context };
      obj.dispatch(obj);
    });
    _default.on(_default(4614).RTCConnectionEvent.ClientConnect, (userIds) => {
      DispatcherDefault.wait(() => {
        obj = { type: "RTC_CONNECTION_CLIENT_CONNECT", userIds, guildId: _default.guildId, channelId: _default.channelId, context: _default.context };
        obj.dispatch(obj);
      });
    });
    _default.on(_default(4614).RTCConnectionEvent.ClientDisconnect, (userId) => {
      DispatcherDefault.wait(() => {
        obj = { type: "RTC_CONNECTION_CLIENT_DISCONNECT", userId, guildId: _default.guildId, channelId: _default.channelId, context: _default.context };
        obj.dispatch(obj);
      });
    });
    _default.on(_default(4614).RTCConnectionEvent.Platform, (userId, platform, channelId) => {
      dependencyMap = channelId;
      platform(573).wait(() => {
        obj = { type: "RTC_CONNECTION_PLATFORM", platform, userId, channelId };
        obj.dispatch(obj);
      });
    });
    _default.on(_default(4614).RTCConnectionEvent.SecureFramesUpdate, () => {
      DispatcherDefault.wait(() => {
        closure_1_1(dependencyMap[8]).dispatch({ type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE" });
      });
    });
    _default.on(_default(4614).RTCConnectionEvent.RosterMapUpdate, (userIds) => {
      closure_1(573).wait(() => {
        obj = { type: "RTC_CONNECTION_ROSTER_MAP_UPDATE", userIds };
        obj.dispatch(obj);
      });
    });
    let tmp32 = VoiceStateAnalyticsDefault;
    tmp32 = new tmp32(AuthenticationStore.getId(), channelId);
    const speaking = tmp32;
    c15 = null;
    c18 = false;
    c19 = false;
    return _default;
  }
}
function destroyRTCConnection(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (null == redux) {
    return false;
  } else {
    obj = { duration: redux.getDuration(), mediaSessionId: null, rtcConnectionId: null, wasEverMultiParticipant: null, wasEverRtcConnected: null, voiceStateAnalytics: null, channelId: null };
    let mediaSessionId = redux.getMediaSessionId();
    if (mediaSessionId == null) {
      mediaSessionId = null;
    }
    obj.mediaSessionId = mediaSessionId;
    obj.rtcConnectionId = redux.getRTCConnectionId();
    obj.wasEverMultiParticipant = wasEverMultiParticipant;
    obj.wasEverRtcConnected = wasEverRtcConnected;
    obj.voiceStateAnalytics = voiceStateAnalytics;
    obj.channelId = redux.channelId;
    obj = { type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET", mediaEngineConnectionId: redux.getMediaEngineConnectionId() };
    obj.dispatch(obj);
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
const Constants = fn(1074);
({ RTCConnectionStates: closure_8, AppStates: closure_9, RTCConnectionQuality: c10 } = Constants);
const MediaEngineContextTypes = fn(4585).MediaEngineContextTypes;
let closure_12 = new LoggerDefault("RTCConnectionStore");
let closure_13 = [];
let c14 = null;
let obj = null;
let c16 = null;
let c17 = null;
const wasEverMultiParticipant = false;
let c19 = false;
let closure_20 = null;
let closure_21 = null;
let c22 = false;
let c23 = null;
let c24 = null;
const Store = initializeDefault.Store;
class RTCConnectionStore extends Store {
}
const prototype = RTCConnectionStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, GameConsoleStore, SortedVoiceStateStore);
  const result = trackVideoToggle.setVideoToggleAnalyticsParams(this.getRTCConnectionId, this.getMediaSessionId);
};
prototype["getRTCConnection"] = function getRTCConnection() {
  return closure_3;
};
prototype["getState"] = function getState() {
  if (null != redux) {
    let DISCONNECTED = redux.state;
  } else {
    DISCONNECTED = constants.DISCONNECTED;
  }
  return DISCONNECTED;
};
prototype["isConnected"] = function isConnected() {
  return this.getState() === constants.RTC_CONNECTED;
};
prototype["isDisconnected"] = function isDisconnected() {
  return this.getState() === constants.DISCONNECTED;
};
prototype["getRemoteDisconnectVoiceChannelId"] = function getRemoteDisconnectVoiceChannelId() {
  return c14;
};
prototype["getLastSessionVoiceChannelId"] = function getLastSessionVoiceChannelId() {
  return c16;
};
prototype["setLastSessionVoiceChannelId"] = function setLastSessionVoiceChannelId(arg0) {
  c16 = arg0;
};
prototype["getGuildId"] = function getGuildId() {
  let guildId;
  if (redux != null) {
    guildId = redux.guildId;
  }
  return guildId;
};
prototype["getChannelId"] = function getChannelId() {
  let channelId;
  if (redux != null) {
    channelId = redux.channelId;
  }
  return channelId;
};
prototype["getHostname"] = function getHostname() {
  let str = "";
  if (null != redux) {
    str = redux.hostname;
  }
  return str;
};
prototype["getQuality"] = function getQuality() {
  if (null != redux) {
    let UNKNOWN = redux.quality;
  } else {
    UNKNOWN = constants3.UNKNOWN;
  }
  return UNKNOWN;
};
prototype["getPings"] = function getPings() {
  if (null != redux) {
    let pings = redux.getPings();
  } else {
    pings = closure_13;
  }
  return pings;
};
prototype["getAveragePing"] = function getAveragePing() {
  let num = 0;
  if (null != authStore) {
    let averagePing;
    if (authStore != null) {
      averagePing = authStore.getAveragePing();
    }
    num = averagePing;
  }
  return num;
};
prototype["getLastPing"] = function getLastPing() {
  let lastPing;
  if (authStore != null) {
    lastPing = authStore.getLastPing();
  }
  return lastPing;
};
prototype["getOutboundLossRate"] = function getOutboundLossRate() {
  let outboundLossRate;
  if (authStore != null) {
    outboundLossRate = authStore.getOutboundLossRate();
  }
  return outboundLossRate;
};
prototype["getMediaSessionId"] = function getMediaSessionId() {
  let mediaSessionId;
  if (authStore != null) {
    mediaSessionId = authStore.getMediaSessionId();
  }
  return mediaSessionId;
};
prototype["getRTCConnectionId"] = function getRTCConnectionId() {
  let rTCConnectionId;
  if (authStore != null) {
    rTCConnectionId = authStore.getRTCConnectionId();
  }
  return rTCConnectionId;
};
prototype["getDuration"] = function getDuration() {
  let duration;
  if (authStore != null) {
    duration = authStore.getDuration();
  }
  if (duration == null) {
    let duration1;
    if (authStore != null) {
      duration1 = authStore.duration;
    }
    duration = duration1;
  }
  return duration;
};
prototype["getLastRTCConnectionState"] = function getLastRTCConnectionState() {
  return obj;
};
prototype["getPacketStats"] = function getPacketStats() {
  let packetStats;
  if (authStore != null) {
    packetStats = authStore.getPacketStats();
  }
  return packetStats;
};
prototype["getVoiceStateStats"] = function getVoiceStateStats() {
  let stats;
  if (voiceStateAnalytics != null) {
    stats = voiceStateAnalytics.getStats();
  }
  return stats;
};
prototype["getUserVoiceSettingsStats"] = function getUserVoiceSettingsStats(arg0) {
  let userVoiceSettingsStats;
  if (voiceStateAnalytics != null) {
    userVoiceSettingsStats = voiceStateAnalytics.getUserVoiceSettingsStats(arg0);
  }
  return userVoiceSettingsStats;
};
prototype["getWasEverMultiParticipant"] = function getWasEverMultiParticipant() {
  return closure_18;
};
prototype["getWasEverRtcConnected"] = function getWasEverRtcConnected() {
  return c19;
};
prototype["getUserIds"] = function getUserIds() {
  let userIds;
  if (authStore != null) {
    userIds = authStore.getUserIds();
  }
  return userIds;
};
prototype["getJoinVoiceId"] = function getJoinVoiceId() {
  return c23;
};
prototype["isUserConnected"] = function isUserConnected(arg0) {
  let isUserConnected;
  if (authStore != null) {
    isUserConnected = authStore.getIsUserConnected(arg0);
  }
  return isUserConnected;
};
prototype["getSecureFramesState"] = function getSecureFramesState() {
  let secureFramesState;
  if (authStore != null) {
    secureFramesState = authStore.getSecureFramesState();
  }
  return secureFramesState;
};
prototype["getSecureFramesRosterMapEntry"] = function getSecureFramesRosterMapEntry(arg0) {
  let secureFramesRosterMap;
  if (authStore != null) {
    secureFramesRosterMap = authStore.getSecureFramesRosterMap();
  }
  value = undefined;
  if (secureFramesRosterMap != null) {
    value = secureFramesRosterMap.get(arg0);
  }
  return value;
};
prototype["getLastNonZeroRemoteVideoSinkWantsTime"] = function getLastNonZeroRemoteVideoSinkWantsTime() {
  return closure_21;
};
prototype["getWasMoved"] = function getWasMoved() {
  return c22;
};
RTCConnectionStore.displayName = "RTCConnectionStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen(sessionId) {
    sessionId = sessionId.sessionId;
    c14 = null;
    c16 = null;
    destroyRTCConnection(false);
    if (null != _null) {
      const timeout = _null.timeout;
      timeout.stop();
      _null = null;
    }
    return false;
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    c4 = null;
    c14 = null;
    c16 = null;
    destroyRTCConnection(false);
    if (null != _null) {
      const timeout = _null.timeout;
      timeout.stop();
      _null = null;
    }
  },
  LOGOUT: function handleLogout() {
    closure_20 = null;
    return false;
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionState(state) {
    if (state.state === constants.RTC_CONNECTED) {
      c19 = true;
      if (null != closure_3) {
        closure_20 = TimeUtils.now();
      }
    }
    return true;
  },
  RTC_CONNECTION_PING: function handleRtcConnectionPing() {
    if (null != closure_3) {
      closure_20 = TimeUtils.now();
    }
    return true;
  },
  RTC_CONNECTION_LOSS_RATE: handleRtcAction,
  RTC_CONNECTION_UPDATE_ID: function handleRtcConnectionUpdateId(connection) {
    return connection.connection === closure_3;
  },
  RTC_CONNECTION_SECURE_FRAMES_UPDATE: handleRtcAction,
  RTC_CONNECTION_CLIENT_CONNECT: handleRtcAction,
  RTC_CONNECTION_CLIENT_DISCONNECT: handleRtcAction,
  RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: function handleRtcConnectionRemoteVideoSinkWants(context) {
    let tmp2 = context.context === MediaEngineContextTypes.DEFAULT;
    if (tmp2) {
      const _Object = Object;
      const entries = Object.entries(tmp);
      const someResult = entries.some((item) => {
        [tmp, tmp2] = item;
        let tmp3 = "any" !== tmp;
        if (tmp3) {
          tmp3 = 0 !== tmp2;
        }
        return tmp3;
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
    if (authStore != null) {
      authStore.setVideoSize(tmp, tmp2, tmp3);
    }
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(arg0) {
    ({ voiceStates, receivedAt: require } = arg0);
    return voiceStates.reduce((acc, userId) => {
      if (c17 != null) {
        c17.updateVoiceStates(userId.userId, userId.channelId);
      }
      let tmp2 = closure_18;
      if (!closure_18) {
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
        let tmp4 = null != config;
        if (tmp4) {
          tmp4 = userId.channelId === config.channelId;
        }
        if (tmp4) {
          if (null != config) {
            const timeout = config.timeout;
            timeout.stop();
            config = null;
          }
        }
        if (null != closure_3) {
          if (userId.sessionId === c4) {
            if (null == userId.guildId) {
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
              tmp26 = userId.guildId !== closure_3.guildId && null == userId.channelId;
            }
            if (null == userId.channelId) {
              destroyRTCConnection();
            } else {
              closure_3.setNextChannelId(userId.channelId);
              c22 = true;
              c23 = null;
              closure_3.clearJoinVoiceId();
            }
          } else if (userId.guildId === closure_3.guildId) {
            if (!tmp19) {
              channelId = closure_3.channelId;
            }
            destroyRTCConnection();
            tmp19 = null != GameConsoleStore.getAwaitingRemoteSessionInfo() && null != GameConsoleStore.getRemoteSessionId();
          }
        } else {
          if (userId.sessionId === c4) {
            if (null != userId.channelId) {
              if (!tmp4) {
                if (null != closure_20) {
                  if (obj3.now() - closure_20 >= 300000) {
                    DispatcherDefault.wait(() => closure_1_0(closure_1_2[12]).default.disconnect());
                    return acc;
                  }
                  obj3 = TimeUtils;
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
    let tmp = null == redux;
    if (!tmp) {
      let tmp2 = null != channelId.channelId;
      if (tmp2) {
        tmp2 = redux.channelId === channelId.channelId;
      }
      tmp = tmp2;
    }
    if (!tmp) {
      destroyRTCConnection();
    }
    joinVoiceId = channelId.joinVoiceId;
    _require = channelId;
    if (null != obj) {
      let timeout = obj.timeout;
      timeout.stop();
      obj = null;
    }
    if (null != channelId.channelId) {
      timeout = new require("Timers").Timeout();
      timeout.start(30000, () => {
        logger.warn("No VOICE_STATE_UPDATE received within 30000ms of VOICE_CHANNEL_SELECT", { joinVoiceId: channelId.joinVoiceId, channelId: channelId.channelId, guildId: channelId.guildId });
        c24 = null;
      });
      obj = { joinVoiceId: null, channelId: null, guildId: null, timeout: null };
      ({ joinVoiceId: obj2.joinVoiceId, channelId: obj2.channelId, guildId: obj2.guildId } = channelId);
      obj.timeout = timeout;
    }
  },
  AUDIO_SET_NOISE_CANCELLATION: function handleAudioSetNoiseCancellation(enabled) {
    if (authStore != null) {
      const result = authStore.setNoiseCancellationEnabled(enabled.enabled);
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
        flag = useSpatialAudioControlState.isSpatialAudioEligible("RTCConnectionStore");
      }
      if (authStore != null) {
        const result = authStore.setSpatialAudioEnabled(flag);
      }
    }
  },
  VOICE_SERVER_UPDATE: function handleVoiceServerUpdate(guildId) {
    let tmp = null != redux;
    if (tmp) {
      let tmp3 = null == guildId.guildId;
      if (!tmp3) {
        tmp3 = guildId.guildId === redux.guildId;
      }
      if (tmp3) {
        let tmp5 = null == guildId.channelId;
        if (!tmp5) {
          tmp5 = guildId.channelId === redux.getNextChannelId();
        }
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
    let tmp = state.state === constants2.ACTIVE;
    if (tmp) {
      tmp = null != redux;
    }
    if (tmp) {
      redux.resetBackoff("App state is active");
    }
    return false;
  },
  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: function handleSimulcastDebugOverrideChanged(arg0) {
    if (authStore != null) {
      const result = authStore.setSimulcastDebugOverride(tmp, tmp2, tmp3);
    }
  }
};
const rTCConnectionStore = new RTCConnectionStore(DispatcherDefault, obj);
let tmp3 = new LoggerDefault("RTCConnectionStore");
fn(1896)(1242, dependencyMap.paths).then((addExtraAnalyticsDecorator) => {
  const result = addExtraAnalyticsDecorator.addExtraAnalyticsDecorator((arg0) => {
    arg0.client_rtc_state = state.getState();
  });
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/RTCConnectionStore.tsx");

export default rTCConnectionStore;