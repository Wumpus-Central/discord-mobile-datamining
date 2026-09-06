// discord_app/stores/StreamRTCConnectionStore.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import _modDef38 from "../../_runtime/metro/00038__.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import StreamRTCConnectionDefault from "../modules/go_live/StreamRTCConnection.tsx";
import StreamKeyUtils from "../modules/go_live/utils/StreamKeyUtils.tsx";
import BaseConnectionEvent from "../../discord_common/js/packages/media-engine/index.tsx";
import canSpectateDefault from "../modules/go_live/utils/canSpectate.tsx";
import RunningGameStore from "../modules/game_detection/RunningGameStore.native.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import MediaEngineStore from "MediaEngineStore.tsx";
import PresenceStore from "PresenceStore.tsx";
import RTCConnectionStore from "RTCConnectionStore.tsx";
import Dispatcher from "../Dispatcher.tsx";

require = fn;
const Constants = fn(1074);
({ RTCConnectionQuality: closure_9, StreamLayouts } = Constants);
const StreamTypes = fn(4602).StreamTypes;
let dependencyMap = {};
dependencyMap = {};
let closure_13 = {};
const dependencyMap2 = {};
let closure_15 = {};
let closure_16 = {};
let layout = StreamLayouts.PORTRAIT;
const dependencyMap3 = {};
const Store = initializeDefault.Store;
class StreamRTCConnectionStore extends Store {}
const prototype = StreamRTCConnectionStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, MediaEngineStore, RTCConnectionStore, RunningGameStore);
};
prototype["getRTCConnections"] = function getRTCConnections() {
  return closure_18;
};
prototype["getAllActiveStreamKeys"] = function getAllActiveStreamKeys() {
  return Object.keys(closure_18);
};
prototype["getRTCConnection"] = function getRTCConnection(arg0) {
  return dependencyMap3[arg0];
};
prototype["getQuality"] = function getQuality(arg0) {
  if (canSpectateDefault(MediaEngineStore)) {
    if (null != arg0) {
      let quality;
      if (dependencyMap3[arg0] != null) {
        quality = tmp4.quality;
      }
      if (quality == null) {
        quality = constants.UNKNOWN;
      }
      let UNKNOWN = quality;
    }
    return UNKNOWN;
  }
  UNKNOWN = constants.UNKNOWN;
};
prototype["getMediaSessionId"] = function getMediaSessionId(arg0) {
  if (null == arg0) {
    return null;
  } else {
    let tmp2;
    if (null != dependencyMap3[arg0]) {
      let mediaSessionId = null;
      if (null != obj) {
        mediaSessionId = obj.getMediaSessionId();
      }
      tmp2 = mediaSessionId;
    }
    return tmp2;
  }
};
prototype["getRtcConnectionId"] = function getRtcConnectionId(encodeStreamKeyResult) {
  if (null == encodeStreamKeyResult) {
    return null;
  } else {
    let tmp2;
    if (null != dependencyMap3[encodeStreamKeyResult]) {
      let rTCConnectionId = null;
      if (null != obj) {
        rTCConnectionId = obj.getRTCConnectionId();
      }
      tmp2 = rTCConnectionId;
    }
    return tmp2;
  }
};
prototype["getVideoStats"] = function getVideoStats(arg0) {
  if (null == arg0) {
    return null;
  } else {
    let videoStats = null;
    if (null != dependencyMap3[arg0]) {
      videoStats = obj.getVideoStats();
    }
    return videoStats;
  }
};
prototype["getHostname"] = function getHostname(arg0) {
  if (null == arg0) {
    return "";
  } else {
    let str2 = "";
    if (null != dependencyMap3[arg0]) {
      str2 = "";
      if (null != tmp2.hostname) {
        str2 = tmp2.hostname;
      }
    }
    return str2;
  }
};
prototype["getRegion"] = function getRegion(arg0) {
  if (null == arg0) {
    return null;
  } else {
    let region = null;
    if (null != dependencyMap3[arg0]) {
      region = obj.getRegion();
    }
    return region;
  }
};
prototype["getMaxViewers"] = function getMaxViewers(arg0) {
  if (null == arg0) {
    return null;
  } else {
    let maxViewers = null;
    if (null != dependencyMap3[arg0]) {
      maxViewers = obj.getMaxViewers();
    }
    return maxViewers;
  }
};
prototype["getStreamSourceId"] = function getStreamSourceId(arg0) {
  return dependencyMap2[arg0];
};
prototype["getLastNonZeroRemoteVideoSinkWantsTime"] = function getLastNonZeroRemoteVideoSinkWantsTime(arg0) {
  return closure_16[arg0];
};
prototype["getUserIds"] = function getUserIds(arg0) {
  let userIds;
  if (dependencyMap3[arg0] != null) {
    userIds = obj.getUserIds();
  }
  return userIds;
};
prototype["isUserConnected"] = function isUserConnected(arg0, arg1) {
  let isUserConnected;
  if (dependencyMap3[arg0] != null) {
    isUserConnected = obj.getIsUserConnected(arg1);
  }
  return isUserConnected;
};
prototype["getSecureFramesState"] = function getSecureFramesState(arg0) {
  let secureFramesState;
  if (dependencyMap3[arg0] != null) {
    secureFramesState = obj.getSecureFramesState();
  }
  return secureFramesState;
};
prototype["getSecureFramesRosterMapEntry"] = function getSecureFramesRosterMapEntry(arg0, arg1) {
  let secureFramesRosterMap;
  if (dependencyMap3[arg0] != null) {
    secureFramesRosterMap = obj.getSecureFramesRosterMap();
  }
  value = undefined;
  if (secureFramesRosterMap != null) {
    value = secureFramesRosterMap.get(arg1);
  }
  return value;
};
StreamRTCConnectionStore.displayName = "StreamRTCConnectionStore";
if (MediaEngineStore.isSupported()) {
  function handleRtcAction() {
    return true;
  }
  let obj = {
    CONNECTION_OPEN: function handleConnectionOpen(sessionId) {
      sessionId = sessionId.sessionId;
      const item = _modDef12.forEach(closure_18, (isOwner, arg1) => {
        let str = "receiver-disconnect";
        if (isOwner.isOwner) {
          str = "sender-disconnect";
        }
        isOwner.destroy(str);
        delete tmp3[tmp2];
        delete tmp[tmp2];
      });
    },
    CONNECTION_CLOSED: function handleConnectionClosed() {
      c3 = null;
      const item = _modDef12.forEach(closure_18, (isOwner, arg1) => {
        let str = "receiver-disconnect";
        if (isOwner.isOwner) {
          str = "sender-disconnect";
        }
        isOwner.destroy(str);
        delete tmp3[tmp2];
        delete tmp[tmp2];
      });
    },
    RTC_CONNECTION_STATE: handleRtcAction,
    RTC_CONNECTION_PING: handleRtcAction,
    RTC_CONNECTION_LOSS_RATE: handleRtcAction,
    RTC_CONNECTION_UPDATE_ID: function handleRtcConnectionUpdateId(arg0) {
      const connection = arg0;
      return _modDef12.some(closure_18, (arg0) => arg0 === connection.connection);
    },
    RTC_CONNECTION_SECURE_FRAMES_UPDATE: handleRtcAction,
    RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: function handleRtcConnectionRemoteVideoSinkWants(guildId) {
      guildId = guildId.guildId;
      ({ context, wants, userId, channelId } = guildId);
      if (null == guildId) {
        let GUILD = StreamTypes.CALL;
      } else {
        GUILD = StreamTypes.GUILD;
      }
      const encodeStreamKeyResult = StreamKeyUtils.encodeStreamKey({
        streamType: GUILD,
        guildId,
        channelId,
        ownerId: userId,
      });
      let tmp6 = context === BaseConnectionEvent.MediaEngineContextTypes.STREAM;
      if (tmp6) {
        tmp6 = null != dependencyMap3[encodeStreamKeyResult];
      }
      if (tmp6) {
        const _Object = Object;
        const entries = Object.entries(wants);
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
          closure_16[encodeStreamKeyResult] = performance.now();
        }
        tmp6 = someResult;
      }
      return tmp6;
    },
    STREAM_START: function handleStreamStart(appContext) {
      appContext = appContext.appContext;
      ({ pid, nativePickerStyleUsed: importDefault, goLiveModalDurationMs } = appContext);
      ({ streamType, guildId, channelId, sourceId, sourcePid, analyticsLocations } = appContext);
      let obj = { streamType, guildId, channelId, ownerId: AuthenticationStore.getId() };
      const encodeStreamKeyResult = obj.encodeStreamKey(obj);
      closure_11[encodeStreamKeyResult] = { appContext, analyticsLocations };
      const item = _modDef12.forEach(closure_18, (analyticsContext) => {
        analyticsContext = analyticsContext.analyticsContext;
        analyticsContext.setActionContext(appContext);
        const result = analyticsContext.setNativePickerStyleUsed(importDefault);
        if (analyticsContext.isOwner) {
          analyticsContext.trackStart();
        }
      });
      if (null == pid) {
        pid = sourcePid;
      }
      closure_14[encodeStreamKeyResult] = sourceId;
      closure_13[encodeStreamKeyResult] = pid;
      if (null != pid) {
        const gameForPID = RunningGameStore.getGameForPID(pid);
        if (null != gameForPID) {
          obj = { name: null, id: null, exe: null, distributor: null, sku: null, gameMetadata: null };
          ({
            name: obj3.name,
            id: obj3.id,
            exeName: obj3.exe,
            distributor: obj3.distributor,
            sku: obj3.sku,
            gameMetadata: obj3.gameMetadata,
          } = gameForPID);
          dependencyMap[encodeStreamKeyResult] = obj;
        }
        if (tmp4[encodeStreamKeyResult] != null) {
          let analyticsContext = tmp10.analyticsContext;
          let result = analyticsContext.updateStreamApplication(dependencyMap[encodeStreamKeyResult]);
        }
      } else if (tmp4[encodeStreamKeyResult] != null) {
        const analyticsContext2 = tmp6.analyticsContext;
        const result1 = analyticsContext2.updateStreamApplication(null);
      }
      if (null != goLiveModalDurationMs) {
        closure_15[encodeStreamKeyResult] = goLiveModalDurationMs;
      } else {
        delete tmp2[tmp];
      }
    },
    STREAM_STOP: function handleStreamStop(appContext) {
      appContext = appContext.appContext;
      const streamKey = appContext.streamKey;
      closure_11[streamKey] = { appContext, analyticsLocations: "a" };
      const item = _modDef12.forEach(closure_18, (analyticsContext) => {
        analyticsContext = analyticsContext.analyticsContext;
        analyticsContext.setActionContext(appContext);
        if (analyticsContext.isOwner) {
          analyticsContext.trackEnd();
        }
      });
      closure_14[streamKey] = null;
      closure_13[streamKey] = null;
      delete tmp[tmp2];
    },
    STREAM_CREATE: function handleStreamCreate(arg0) {
      ({ streamKey, rtcServerId, viewerIds } = arg0);
      let obj = dependencyMap3[streamKey];
      ({ rtcChannelId, region } = arg0);
      let obj1 = StreamKeyUtils;
      let tmp7 = null == obj;
      if (tmp7) {
        tmp7 = null != rtcServerId;
      }
      if (tmp7) {
        if (null == closure_13[streamKey]) {
          dependencyMap[streamKey] = null;
        }
        let tmp11 = null == dependencyMap[streamKey];
        if (tmp11) {
          tmp11 = null == dependencyMap2[streamKey];
        }
        if (tmp11) {
          tmp10[streamKey] = tmp4(7738).getStreamerApplication(decodeStreamKeyResult, PresenceStore);
          const tmp4Result = tmp4(7738);
        }
        obj = {
          streamRegion: region,
          streamApplication: dependencyMap[streamKey],
          streamSourceType: null,
          actionContext: null,
          numViewers: null,
          goLiveModalDurationMs: null,
          analyticsLocations: null,
        };
        let str2 = "unknown";
        if (null != dependencyMap2[streamKey]) {
          if (!tmp4(1115).isPlatformEmbedded) {
            let name;
            if (globalThis.platform != null) {
              name = globalThis.platform.name;
            }
            if ("Chrome" !== name) {
              let name1;
              if (globalThis.platform != null) {
                name1 = globalThis.platform.name;
              }
              if ("Firefox" === name1) {
                let str6 = "screen";
                if ("" !== obj5) {
                  str6 = "window";
                }
                str2 = str6;
              } else {
                let name2;
                if (globalThis.platform != null) {
                  name2 = globalThis.platform.name;
                }
                str2 = "unknown";
                if ("Safari" === name2) {
                  str2 = "window";
                }
              }
            }
          }
          str2 = "tab";
          if (!obj5.startsWith("web-contents-media-stream:")) {
            str2 = "window";
            if (!obj5.startsWith("window:")) {
              str2 = "unknown";
              if (obj5.startsWith("screen:")) {
                str2 = "screen";
              }
            }
          }
        }
        obj.streamSourceType = str2;
        let appContext;
        if (dependencyMap[streamKey] != null) {
          appContext = tmp20.appContext;
        }
        obj.actionContext = appContext;
        let num = 0;
        if (null != viewerIds) {
          num = viewerIds.length;
        }
        obj.numViewers = num;
        obj.goLiveModalDurationMs = closure_15[streamKey];
        let analyticsLocations;
        if (dependencyMap[streamKey] != null) {
          analyticsLocations = tmp23.analyticsLocations;
        }
        obj.analyticsLocations = analyticsLocations;
        const streamRTCAnalyticsContext = new tmp4(4604).StreamRTCAnalyticsContext(obj);
        _modDef38(null != sessionId, "Creating RTCConnection without session.");
        obj = {
          sessionId,
          streamKey,
          serverId: rtcServerId,
          channelId: rtcChannelId,
          initialLayout: layout,
          analyticsContext: streamRTCAnalyticsContext,
          parentMediaSessionId: null,
        };
        let tmp32 = StreamRTCConnectionDefault;
        obj.parentMediaSessionId = RTCConnectionStore.getMediaSessionId();
        tmp32 = new tmp32(obj);
        tmp3[streamKey] = tmp32;
        obj = tmp32;
      }
      delete tmp[tmp2];
      decodeStreamKeyResult = obj1.decodeStreamKey(streamKey);
      tmp3 = dependencyMap3;
      obj1 = {
        type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
        mediaEngineConnectionId: obj.getMediaEngineConnectionId(),
      };
      Dispatcher.dispatch(obj1);
    },
    STREAM_SERVER_UPDATE: function handleStreamServerUpdate(endpoint) {
      if (null == dependencyMap3[endpoint.streamKey]) {
        return false;
      } else {
        obj.connect(endpoint.endpoint, endpoint.token);
      }
    },
    STREAM_UPDATE: function handleStreamUpdate(viewerIds) {
      viewerIds = viewerIds.viewerIds;
      if (null == dependencyMap3[viewerIds.streamKey]) {
        return false;
      } else {
        if (null != viewerIds) {
          const analyticsContext = obj.analyticsContext;
          analyticsContext.trackViewerCount(viewerIds.length);
        }
        obj.streamUpdate(tmp);
      }
    },
    STREAM_DELETE: function handleStreamDelete(arg0) {
      let obj = dependencyMap3[arg0.streamKey];
      if (null == obj) {
        return false;
      } else {
        obj = { type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET", mediaEngineConnectionId: null };
        obj.mediaEngineConnectionId = obj.getMediaEngineConnectionId();
        Dispatcher.dispatch(obj);
        obj.destroy("stream-end");
        delete tmp[tmp2];
      }
    },
    STREAM_LAYOUT_UPDATE: function handleLayoutUpdate(layout) {
      layout = layout.layout;
      const values = Object.values(closure_18);
      const item = values.forEach((layoutChange) => layoutChange.layoutChange(layout));
    },
    VIDEO_SIZE_UPDATE: function handleVideoSizeUpdate(arg0) {
      ({ streamId: require, dimensions: importDefault, zoom: dependencyMap } = arg0);
      const item = _modDef12.forEach(closure_18, (setVideoSize) => {
        if (setVideoSize != null) {
          setVideoSize.setVideoSize(require, importDefault, dependencyMap);
        }
      });
    },
  };
} else {
  obj = {};
}
const streamRTCConnectionStore = new StreamRTCConnectionStore(Dispatcher, obj);
const size = fn(2);
let result = size.fileFinishedImporting("stores/StreamRTCConnectionStore.tsx");

export default streamRTCConnectionStore;
