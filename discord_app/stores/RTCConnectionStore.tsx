// discord_app/stores/RTCConnectionStore.tsx
import timestampDefault from "../modules/debug/Logger.tsx";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import sleep from "../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import updateVoiceStatesDefault from "../lib/VoiceStateAnalytics.tsx";
import useIsSpatialAudioAvailable from "../modules/spatial_audio/useIsSpatialAudioAvailable.tsx";
import trackVideoToggle from "../modules/media_engine/trackVideoToggle.tsx";
import closure_5 from "../modules/game_console/GameConsoleStore.tsx";
import closure_6 from "AuthenticationStore.tsx";
import closure_7 from "views/SortedVoiceStateStore.tsx";
import ME from "../Constants.tsx";
import { MediaEngineContextTypes } from "../../discord_common/js/packages/media-engine/Constants.tsx";
import promise from "../utils/AnalyticsUtils.tsx";
import { start } from "../../discord_common/js/packages/timers/Timers.tsx";

require = arg1;
function createRTCConnection(arg0, arg1) {
  if (null == closure_4) {
    const _Error = Error;
    error = new Error("Creating RTCConnection without session.");
    throw error;
  } else {
    const id = store.getId();
    let obj = { userId: null, sessionId: null, guildId: null, channelId: null, joinVoiceId: null };
    obj[0] = id;
    obj[1] = closure_4;
    obj[2] = arg0;
    obj[3] = arg1;
    obj[4] = c23;
    _default = new _default(4546).default(obj);
    _default.on(_default(4568).RTCConnectionEvent.State, (arg0, arg1, arg2) => {
      closure_0 = arg0;
      const callback = arg1;
      dependencyMap = arg2;
      callback(709).wait(() => {
        let obj = callback(table[8]);
        obj = { type: "RTC_CONNECTION_STATE", state: closure_0 };
        const merged = Object.assign(callback);
        const merged1 = Object.assign(table);
        return obj.dispatch(obj);
      });
    });
    _default.on(_default(4568).RTCConnectionEvent.Video, (arg0, arg1, arg2, arg3, arg4) => {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_2 = arg2;
      closure_3 = arg3;
      closure_4 = arg4;
      closure_1_1(closure_1_2[8]).wait(() => {
        let obj = closure_2_1(closure_2_2[8]);
        obj = { type: "RTC_CONNECTION_VIDEO", guildId: mediaEngineConnectionId, channelId: closure_1, userId: closure_2, streamId: closure_3, rtcServerId: closure_4, context: closure_2_11.DEFAULT, mediaEngineConnectionId: mediaEngineConnectionId.getMediaEngineConnectionId() };
        return obj.dispatch(obj);
      });
    });
    _default.on(_default(4568).RTCConnectionEvent.Ping, (arg0, arg1) => {
      closure_0 = arg0;
      const callback = arg1;
      callback(709).wait(() => {
        let obj = callback(closure_1_2[8]);
        obj = { type: "RTC_CONNECTION_PING", pings: closure_0, quality: callback };
        return obj.dispatch(obj);
      });
    });
    _default.on(_default(4568).RTCConnectionEvent.OutboundLossRate, (arg0) => {
      closure_0 = arg0;
      callback(709).wait(() => {
        let obj = closure_1_1(closure_1_2[8]);
        obj = { type: "RTC_CONNECTION_LOSS_RATE", lossRate: closure_0 };
        return obj.dispatch(obj);
      });
    });
    _default.on(_default(4568).RTCConnectionEvent.Speaking, (userId, speaking) => {
      if (closure_17 != null) {
        closure_17.setSpeaking(userId, speaking);
      }
    });
    _default.on(_default(4568).RTCConnectionEvent.Flags, (arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_1_1(closure_1_2[8]).wait(() => {
        let obj = closure_2_1(closure_2_2[8]);
        obj = { type: "RTC_CONNECTION_FLAGS", flags: closure_1, userId: closure_0, guildId: closure_0.guildId, channelId: closure_0.channelId, context: closure_0.context };
        obj.dispatch(obj);
      });
    });
    _default.on(_default(4568).RTCConnectionEvent.UsersMerged, (userIds, context) => {
      let obj = callback(709);
      obj = { type: "RTC_CONNECTION_USERS_MERGED", userIds, context };
      obj.dispatch(obj);
    });
    _default.on(_default(4568).RTCConnectionEvent.ClientConnect, (arg0) => {
      closure_0 = arg0;
      closure_1_1(closure_1_2[8]).wait(() => {
        let obj = closure_2_1(closure_2_2[8]);
        obj = { type: "RTC_CONNECTION_CLIENT_CONNECT", userIds: closure_0, guildId: closure_0.guildId, channelId: closure_0.channelId, context: closure_0.context };
        obj.dispatch(obj);
      });
    });
    _default.on(_default(4568).RTCConnectionEvent.ClientDisconnect, (arg0) => {
      closure_0 = arg0;
      closure_1_1(closure_1_2[8]).wait(() => {
        let obj = closure_2_1(closure_2_2[8]);
        obj = { type: "RTC_CONNECTION_CLIENT_DISCONNECT", userId: closure_0, guildId: closure_0.guildId, channelId: closure_0.channelId, context: closure_0.context };
        obj.dispatch(obj);
      });
    });
    _default.on(_default(4568).RTCConnectionEvent.Platform, (arg0, arg1, arg2) => {
      closure_0 = arg0;
      const callback = arg1;
      dependencyMap = arg2;
      callback(709).wait(() => {
        let obj = callback(table[8]);
        obj = { type: "RTC_CONNECTION_PLATFORM", platform: callback, userId: closure_0, channelId: table };
        obj.dispatch(obj);
      });
    });
    _default.on(_default(4568).RTCConnectionEvent.SecureFramesUpdate, () => {
      callback(709).wait(() => {
        callback(table[8]).dispatch({ type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE" });
      });
    });
    _default.on(_default(4568).RTCConnectionEvent.RosterMapUpdate, (arg0) => {
      closure_0 = arg0;
      callback(709).wait(() => {
        let obj = closure_1_1(closure_1_2[8]);
        obj = { type: "RTC_CONNECTION_ROSTER_MAP_UPDATE", userIds: closure_0 };
        obj.dispatch(obj);
      });
    });
    let tmp31 = updateVoiceStatesDefault;
    tmp31 = new tmp31(store.getId(), arg1);
    closure_17 = tmp31;
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
    let obj = { duration: null, mediaSessionId: null, rtcConnectionId: null, wasEverMultiParticipant: null, wasEverRtcConnected: null, voiceStateAnalytics: null, channelId: null };
    obj[0] = redux.getDuration();
    let mediaSessionId = redux.getMediaSessionId();
    if (mediaSessionId == null) {
      mediaSessionId = null;
    }
    obj[1] = mediaSessionId;
    obj[2] = redux.getRTCConnectionId();
    obj[3] = c18;
    obj[4] = c19;
    obj[5] = c17;
    obj[6] = redux.channelId;
    obj = dispatcherDefault;
    obj = { type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET", mediaEngineConnectionId: null };
    obj[1] = redux.getMediaEngineConnectionId();
    obj.dispatch(obj);
    redux.destroy();
    redux = null;
    c17 = null;
    c22 = false;
    if (flag) {
      c20 = null;
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
({ RTCConnectionStates: closure_8, AppStates: c9, RTCConnectionQuality: c10 } = ME);
let closure_12 = new timestampDefault("RTCConnectionStore");
let closure_13 = [];
let c14 = null;
let c15 = null;
let c16 = null;
let c17 = null;
let c18 = false;
let c19 = false;
let c20 = null;
let c21 = null;
let c22 = false;
let c23 = null;
let c24 = null;
const Store = initializeDefault.Store;
class RTCConnectionStore extends Store {
}
const prototype = RTCConnectionStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_6, closure_5, closure_7);
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
  closure_16 = arg0;
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
  if (null != closure_3) {
    let averagePing;
    if (closure_3 != null) {
      averagePing = obj.getAveragePing();
    }
    num = averagePing;
    obj = closure_3;
  }
  return num;
};
prototype["getLastPing"] = function getLastPing() {
  let lastPing;
  if (closure_3 != null) {
    lastPing = closure_3.getLastPing();
  }
  return lastPing;
};
prototype["getOutboundLossRate"] = function getOutboundLossRate() {
  let outboundLossRate;
  if (closure_3 != null) {
    outboundLossRate = closure_3.getOutboundLossRate();
  }
  return outboundLossRate;
};
prototype["getMediaSessionId"] = function getMediaSessionId() {
  let mediaSessionId;
  if (closure_3 != null) {
    mediaSessionId = closure_3.getMediaSessionId();
  }
  return mediaSessionId;
};
prototype["getRTCConnectionId"] = function getRTCConnectionId() {
  let rTCConnectionId;
  if (closure_3 != null) {
    rTCConnectionId = closure_3.getRTCConnectionId();
  }
  return rTCConnectionId;
};
prototype["getDuration"] = function getDuration() {
  let duration;
  if (closure_3 != null) {
    duration = closure_3.getDuration();
  }
  if (duration == null) {
    let duration1;
    if (_null != null) {
      duration1 = _null.duration;
    }
    duration = duration1;
  }
  return duration;
};
prototype["getLastRTCConnectionState"] = function getLastRTCConnectionState() {
  return c15;
};
prototype["getPacketStats"] = function getPacketStats() {
  let packetStats;
  if (closure_3 != null) {
    packetStats = closure_3.getPacketStats();
  }
  return packetStats;
};
prototype["getVoiceStateStats"] = function getVoiceStateStats() {
  let stats;
  if (c17 != null) {
    stats = c17.getStats();
  }
  return stats;
};
prototype["getUserVoiceSettingsStats"] = function getUserVoiceSettingsStats(arg0) {
  let userVoiceSettingsStats;
  if (c17 != null) {
    userVoiceSettingsStats = c17.getUserVoiceSettingsStats(arg0);
  }
  return userVoiceSettingsStats;
};
prototype["getWasEverMultiParticipant"] = function getWasEverMultiParticipant() {
  return c18;
};
prototype["getWasEverRtcConnected"] = function getWasEverRtcConnected() {
  return c19;
};
prototype["getUserIds"] = function getUserIds() {
  let userIds;
  if (closure_3 != null) {
    userIds = closure_3.getUserIds();
  }
  return userIds;
};
prototype["getJoinVoiceId"] = function getJoinVoiceId() {
  return c23;
};
prototype["isUserConnected"] = function isUserConnected(arg0) {
  let isUserConnected;
  if (closure_3 != null) {
    isUserConnected = closure_3.getIsUserConnected(arg0);
  }
  return isUserConnected;
};
prototype["getSecureFramesState"] = function getSecureFramesState() {
  let secureFramesState;
  if (closure_3 != null) {
    secureFramesState = closure_3.getSecureFramesState();
  }
  return secureFramesState;
};
prototype["getSecureFramesRosterMapEntry"] = function getSecureFramesRosterMapEntry(arg0) {
  let secureFramesRosterMap;
  if (closure_3 != null) {
    secureFramesRosterMap = closure_3.getSecureFramesRosterMap();
  }
  let value;
  if (secureFramesRosterMap != null) {
    value = secureFramesRosterMap.get(arg0);
  }
  return value;
};
prototype["getLastNonZeroRemoteVideoSinkWantsTime"] = function getLastNonZeroRemoteVideoSinkWantsTime() {
  return c21;
};
prototype["getWasMoved"] = function getWasMoved() {
  return c22;
};
RTCConnectionStore.displayName = "RTCConnectionStore";
const rTCConnectionStore = new RTCConnectionStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(sessionId) {
    sessionId = sessionId.sessionId;
    c14 = null;
    c16 = null;
    destroyRTCConnection(false);
    if (null != _null2) {
      const timeout = _null2.timeout;
      timeout.stop();
      _null2 = null;
    }
    return false;
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    c4 = null;
    c14 = null;
    c16 = null;
    destroyRTCConnection(false);
    if (null != _null2) {
      const timeout = _null2.timeout;
      timeout.stop();
      _null2 = null;
    }
  },
  LOGOUT: function handleLogout() {
    c20 = null;
    return false;
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionState(state) {
    if (state.state === constants.RTC_CONNECTED) {
      c19 = true;
      if (null != closure_3) {
        closure_20 = sleep.now();
        const obj = sleep;
      }
    }
    return true;
  },
  RTC_CONNECTION_PING: function handleRtcConnectionPing() {
    if (null != closure_3) {
      closure_20 = sleep.now();
      const obj = sleep;
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
      const someResult = entries.some((arg0) => {
        [tmp, tmp2] = arg0;
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
    if (closure_3 != null) {
      closure_3.setVideoSize(tmp, tmp2, tmp3);
    }
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, userId) => {
      if (closure_17 != null) {
        obj.updateVoiceStates(userId.userId, userId.channelId);
      }
      let tmp2 = closure_18;
      if (!closure_18) {
        let num;
        if (closure_17 != null) {
          num = obj2.getStats().max_voice_state_count;
        }
        if (num == null) {
          num = 0;
        }
        tmp2 = num > 1;
        obj2 = closure_17;
      }
      closure_18 = tmp2;
      if (id.getId() !== userId.userId) {
        return arg0;
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
          if (userId.sessionId === closure_4) {
            if (null == userId.guildId) {
              if (!tmp25) {
                callback4();
              }
              if (null != userId.channelId) {
                let channelId = null;
                c16 = null;
                closure_3 = callback3(userId.guildId, userId.channelId);
                let num9;
                if (closure_17 != null) {
                  num9 = obj7.getStats().max_voice_state_count;
                }
                if (num9 == null) {
                  num9 = 0;
                }
                closure_18 = num9 > 1;
                obj7 = closure_17;
              }
              tmp25 = userId.guildId !== closure_3.guildId && null == userId.channelId;
            }
            if (null == userId.channelId) {
              callback4();
            } else {
              closure_3.setNextChannelId(userId.channelId);
              c22 = true;
              c23 = null;
              closure_3.clearJoinVoiceId();
            }
          } else if (userId.guildId === closure_3.guildId) {
            if (!tmp18) {
              channelId = closure_3.channelId;
            }
            callback4();
            const obj6 = awaitingRemoteSessionInfo;
            tmp18 = null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo() && null != awaitingRemoteSessionInfo.getRemoteSessionId();
          }
        } else {
          if (userId.sessionId === closure_4) {
            if (null != userId.channelId) {
              if (!tmp4) {
                if (null != closure_20) {
                  if (obj3.now() - closure_20 >= 300000) {
                    callback2(tmp11[8]).wait(() => callback(table[12]).default.disconnect());
                    return arg0;
                  }
                  obj3 = callback(table[11]);
                  tmp11 = table;
                }
              }
              channelId = null;
              c16 = null;
              closure_3 = callback3(userId.guildId, userId.channelId);
              let num5;
              if (closure_17 != null) {
                num5 = obj5.getStats().max_voice_state_count;
              }
              if (num5 == null) {
                num5 = 0;
              }
              closure_18 = num5 > 1;
              obj5 = closure_17;
            }
          }
          return arg0;
        }
        return true;
      }
      obj = closure_17;
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
    const joinVoiceId = channelId.joinVoiceId;
    const _require = channelId;
    if (null != _null2) {
      let timeout = _null2.timeout;
      timeout.stop();
      _null2 = null;
    }
    if (null != channelId.channelId) {
      timeout = new _start.Timeout();
      timeout.start(30000, () => {
        closure_1_12.warn("No VOICE_STATE_UPDATE received within 30000ms of VOICE_CHANNEL_SELECT", { joinVoiceId: channelId.joinVoiceId, channelId: channelId.channelId, guildId: channelId.guildId });
        c24 = null;
      });
      const obj = { joinVoiceId: null, channelId: null, guildId: null, timeout: null };
      ({ joinVoiceId: obj2[0], channelId: obj2[1], guildId: obj2[2] } = channelId);
      obj[3] = timeout;
      _null2 = obj;
    }
  },
  AUDIO_SET_NOISE_CANCELLATION: function handleAudioSetNoiseCancellation(enabled) {
    if (closure_3 != null) {
      const result = closure_3.setNoiseCancellationEnabled(enabled.enabled);
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
        flag = useIsSpatialAudioAvailable.isSpatialAudioAvailable("RTCConnectionStore");
        const obj = useIsSpatialAudioAvailable;
      }
      if (closure_3 != null) {
        const result = closure_3.setSpatialAudioEnabled(flag);
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
    if (closure_3 != null) {
      const result = closure_3.setSimulcastDebugOverride(tmp, tmp2, tmp3);
    }
  }
});
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(sessionId) {
    sessionId = sessionId.sessionId;
    c14 = null;
    c16 = null;
    destroyRTCConnection(false);
    if (null != _null2) {
      const timeout = _null2.timeout;
      timeout.stop();
      _null2 = null;
    }
    return false;
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    c4 = null;
    c14 = null;
    c16 = null;
    destroyRTCConnection(false);
    if (null != _null2) {
      const timeout = _null2.timeout;
      timeout.stop();
      _null2 = null;
    }
  },
  LOGOUT: function handleLogout() {
    c20 = null;
    return false;
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionState(state) {
    if (state.state === constants.RTC_CONNECTED) {
      c19 = true;
      if (null != closure_3) {
        closure_20 = sleep.now();
        const obj = sleep;
      }
    }
    return true;
  },
  RTC_CONNECTION_PING: function handleRtcConnectionPing() {
    if (null != closure_3) {
      closure_20 = sleep.now();
      const obj = sleep;
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
      const someResult = entries.some((arg0) => {
        [tmp, tmp2] = arg0;
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
    if (closure_3 != null) {
      closure_3.setVideoSize(tmp, tmp2, tmp3);
    }
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, userId) => {
      if (closure_17 != null) {
        obj.updateVoiceStates(userId.userId, userId.channelId);
      }
      let tmp2 = closure_18;
      if (!closure_18) {
        let num;
        if (closure_17 != null) {
          num = obj2.getStats().max_voice_state_count;
        }
        if (num == null) {
          num = 0;
        }
        tmp2 = num > 1;
        obj2 = closure_17;
      }
      closure_18 = tmp2;
      if (id.getId() !== userId.userId) {
        return arg0;
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
          if (userId.sessionId === closure_4) {
            if (null == userId.guildId) {
              if (!tmp25) {
                callback4();
              }
              if (null != userId.channelId) {
                let channelId = null;
                c16 = null;
                closure_3 = callback3(userId.guildId, userId.channelId);
                let num9;
                if (closure_17 != null) {
                  num9 = obj7.getStats().max_voice_state_count;
                }
                if (num9 == null) {
                  num9 = 0;
                }
                closure_18 = num9 > 1;
                obj7 = closure_17;
              }
              tmp25 = userId.guildId !== closure_3.guildId && null == userId.channelId;
            }
            if (null == userId.channelId) {
              callback4();
            } else {
              closure_3.setNextChannelId(userId.channelId);
              c22 = true;
              c23 = null;
              closure_3.clearJoinVoiceId();
            }
          } else if (userId.guildId === closure_3.guildId) {
            if (!tmp18) {
              channelId = closure_3.channelId;
            }
            callback4();
            const obj6 = awaitingRemoteSessionInfo;
            tmp18 = null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo() && null != awaitingRemoteSessionInfo.getRemoteSessionId();
          }
        } else {
          if (userId.sessionId === closure_4) {
            if (null != userId.channelId) {
              if (!tmp4) {
                if (null != closure_20) {
                  if (obj3.now() - closure_20 >= 300000) {
                    callback2(tmp11[8]).wait(() => callback(table[12]).default.disconnect());
                    return arg0;
                  }
                  obj3 = callback(table[11]);
                  tmp11 = table;
                }
              }
              channelId = null;
              c16 = null;
              closure_3 = callback3(userId.guildId, userId.channelId);
              let num5;
              if (closure_17 != null) {
                num5 = obj5.getStats().max_voice_state_count;
              }
              if (num5 == null) {
                num5 = 0;
              }
              closure_18 = num5 > 1;
              obj5 = closure_17;
            }
          }
          return arg0;
        }
        return true;
      }
      obj = closure_17;
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
    const joinVoiceId = channelId.joinVoiceId;
    const _require = channelId;
    if (null != _null2) {
      let timeout = _null2.timeout;
      timeout.stop();
      _null2 = null;
    }
    if (null != channelId.channelId) {
      timeout = new _start.Timeout();
      timeout.start(30000, () => {
        closure_1_12.warn("No VOICE_STATE_UPDATE received within 30000ms of VOICE_CHANNEL_SELECT", { joinVoiceId: channelId.joinVoiceId, channelId: channelId.channelId, guildId: channelId.guildId });
        c24 = null;
      });
      const obj = { joinVoiceId: null, channelId: null, guildId: null, timeout: null };
      ({ joinVoiceId: obj2[0], channelId: obj2[1], guildId: obj2[2] } = channelId);
      obj[3] = timeout;
      _null2 = obj;
    }
  },
  AUDIO_SET_NOISE_CANCELLATION: function handleAudioSetNoiseCancellation(enabled) {
    if (closure_3 != null) {
      const result = closure_3.setNoiseCancellationEnabled(enabled.enabled);
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
        flag = useIsSpatialAudioAvailable.isSpatialAudioAvailable("RTCConnectionStore");
        const obj = useIsSpatialAudioAvailable;
      }
      if (closure_3 != null) {
        const result = closure_3.setSpatialAudioEnabled(flag);
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
    if (closure_3 != null) {
      const result = closure_3.setSimulcastDebugOverride(tmp, tmp2, tmp3);
    }
  }
};
let tmp3 = new timestampDefault("RTCConnectionStore");
require("expandEventProperties").then((addExtraAnalyticsDecorator) => {
  const result = addExtraAnalyticsDecorator.addExtraAnalyticsDecorator((arg0) => {
    arg0.client_rtc_state = state.getState();
  });
});
let result = require("set").fileFinishedImporting("stores/RTCConnectionStore.tsx");

export default rTCConnectionStore;