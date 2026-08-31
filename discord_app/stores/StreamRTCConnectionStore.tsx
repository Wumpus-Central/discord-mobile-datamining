// === Module 4536: initialize ===

// Module 4536 (initialize)
import applyDefault from "apply" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import initializeDefault from "initialize" /* 589 */;
import isStreamKey from "isStreamKey" /* 4514 */;
import isOwnerDefault from "isOwner" /* 4539 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4547 */;
import canSpectateDefault from "canSpectate" /* 13422 */;
import closure_4 from "initialize" /* 4471 */;
import closure_5 from "fetchFingerprint" /* 1218 */;
import importDefaultResult from "_detectH265HardwareDecode" /* 4499 */;
import closure_7 from "sortActivity" /* 4537 */;
import closure_8 from "createRTCConnection" /* 4522 */;
import ME from "ME" /* 676 */;
import { StreamTypes } from "StreamIssueReportReasons" /* 4515 */;
import importDefaultResult1 from "dispatcher" /* 709 */;

require = arg1;
({ RTCConnectionQuality: c9, StreamLayouts } = ME);
let closure_11 = {};
let closure_12 = {};
let closure_13 = {};
let closure_14 = {};
let closure_15 = {};
let closure_16 = {};
const PORTRAIT = StreamLayouts.PORTRAIT;
let closure_18 = {};
const Store = initializeDefault.Store;
class StreamRTCConnectionStore extends Store {
}
const prototype = StreamRTCConnectionStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_5, closure_6, closure_8, closure_4);
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
  if (canSpectateDefault(closure_6)) {
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
  return table4[arg0];
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
  let value;
  if (secureFramesRosterMap != null) {
    value = secureFramesRosterMap.get(arg1);
  }
  return value;
};
StreamRTCConnectionStore.displayName = "StreamRTCConnectionStore";
if (importDefaultResult.isSupported()) {
  function handleRtcAction() {
    return true;
  }
  let obj = { CONNECTION_OPEN: null, CONNECTION_CLOSED: null, RTC_CONNECTION_STATE: null, RTC_CONNECTION_PING: null, RTC_CONNECTION_LOSS_RATE: null, RTC_CONNECTION_UPDATE_ID: null, RTC_CONNECTION_SECURE_FRAMES_UPDATE: null, RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: null, STREAM_START: null, STREAM_STOP: null, STREAM_CREATE: null, STREAM_SERVER_UPDATE: null, STREAM_UPDATE: null, STREAM_DELETE: null, STREAM_LAYOUT_UPDATE: null, VIDEO_SIZE_UPDATE: null };
  obj[0] = function handleConnectionOpen(sessionId) {
    sessionId = sessionId.sessionId;
    const item = applyDefault.forEach(closure_18, (isOwner) => {
      let str = "receiver-disconnect";
      if (isOwner.isOwner) {
        str = "sender-disconnect";
      }
      isOwner.destroy(str);
      delete tmp3[tmp2];
      delete tmp[tmp2];
    });
  };
  obj[1] = function handleConnectionClosed() {
    c3 = null;
    const item = applyDefault.forEach(closure_18, (isOwner) => {
      let str = "receiver-disconnect";
      if (isOwner.isOwner) {
        str = "sender-disconnect";
      }
      isOwner.destroy(str);
      delete tmp3[tmp2];
      delete tmp[tmp2];
    });
  };
  obj[2] = handleRtcAction;
  obj[3] = handleRtcAction;
  obj[4] = handleRtcAction;
  obj[5] = function handleRtcConnectionUpdateId(arg0) {
    closure_0 = arg0;
    return applyDefault.some(closure_18, (arg0) => arg0 === connection.connection);
  };
  obj[6] = handleRtcAction;
  obj[7] = function handleRtcConnectionRemoteVideoSinkWants(guildId) {
    guildId = guildId.guildId;
    ({ context, wants, userId, channelId } = guildId);
    if (null == guildId) {
      let GUILD = StreamTypes.CALL;
    } else {
      GUILD = StreamTypes.GUILD;
    }
    const encodeStreamKeyResult = isStreamKey.encodeStreamKey({ streamType: GUILD, guildId, channelId, ownerId: userId });
    let tmp6 = context === BaseConnectionEvent.MediaEngineContextTypes.STREAM;
    if (tmp6) {
      tmp6 = null != dependencyMap3[encodeStreamKeyResult];
    }
    if (tmp6) {
      const _Object = Object;
      const entries = Object.entries(wants);
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
        closure_16[encodeStreamKeyResult] = performance.now();
      }
      tmp6 = someResult;
    }
    return tmp6;
  };
  obj[8] = function handleStreamStart(appContext) {
    appContext = appContext.appContext;
    ({ pid, nativePickerStyleUsed: importDefault, goLiveModalDurationMs } = appContext);
    ({ streamType, guildId, channelId, sourceId, sourcePid, analyticsLocations } = appContext);
    let obj = appContext(4514);
    obj = { streamType, guildId, channelId, ownerId: id.getId() };
    const encodeStreamKeyResult = obj.encodeStreamKey(obj);
    closure_11[encodeStreamKeyResult] = { appContext, analyticsLocations };
    const item = applyDefault.forEach(closure_18, (analyticsContext) => {
      analyticsContext = analyticsContext.analyticsContext;
      analyticsContext.setActionContext(appContext);
      const result = analyticsContext.setNativePickerStyleUsed(closure_1);
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
      gameForPID = gameForPID.getGameForPID(pid);
      if (null != gameForPID) {
        obj = { name: null, id: null, exe: null, distributor: null, sku: null, gameMetadata: null };
        ({ name: obj3[0], id: obj3[1], exeName: obj3[2], distributor: obj3[3], sku: obj3[4], gameMetadata: obj3[5] } = gameForPID);
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
  };
  obj[9] = function handleStreamStop(appContext) {
    appContext = appContext.appContext;
    const streamKey = appContext.streamKey;
    closure_11[streamKey] = { appContext, analyticsLocations: "Array" };
    const item = applyDefault.forEach(closure_18, (analyticsContext) => {
      analyticsContext = analyticsContext.analyticsContext;
      analyticsContext.setActionContext(appContext);
      if (analyticsContext.isOwner) {
        analyticsContext.trackEnd();
      }
    });
    closure_14[streamKey] = null;
    closure_13[streamKey] = null;
    delete tmp[tmp2];
  };
  obj[10] = function handleStreamCreate(arg0) {
    ({ streamKey, rtcServerId, viewerIds } = arg0);
    let obj = dependencyMap3[streamKey];
    ({ rtcChannelId, region } = arg0);
    obj1 = isStreamKey;
    let tmp7 = null == obj;
    if (tmp7) {
      tmp7 = null != rtcServerId;
    }
    if (tmp7) {
      if (null == table2[streamKey]) {
        dependencyMap[streamKey] = null;
      }
      let tmp11 = null == dependencyMap[streamKey];
      if (tmp11) {
        tmp11 = null == dependencyMap2[streamKey];
      }
      if (tmp11) {
        tmp10[streamKey] = tmp4(7451).getStreamerApplication(decodeStreamKeyResult, closure_7);
        const tmp4Result = tmp4(7451);
      }
      obj = { streamRegion: null, streamApplication: null, streamSourceType: null, actionContext: null, numViewers: null, goLiveModalDurationMs: null, analyticsLocations: null };
      obj[0] = region;
      obj[1] = dependencyMap[streamKey];
      let str2 = "unknown";
      if (null != dependencyMap2[streamKey]) {
        if (!tmp4(500).isPlatformEmbedded) {
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
      obj[2] = str2;
      let appContext;
      if (table[streamKey] != null) {
        appContext = tmp20.appContext;
      }
      obj[3] = appContext;
      let num = 0;
      if (null != viewerIds) {
        num = viewerIds.length;
      }
      obj[4] = num;
      obj[5] = table3[streamKey];
      let analyticsLocations;
      if (table[streamKey] != null) {
        analyticsLocations = tmp23.analyticsLocations;
      }
      obj[6] = analyticsLocations;
      const streamRTCAnalyticsContext = new tmp4(4539).StreamRTCAnalyticsContext(obj);
      _modDef38(null != closure_3, "Creating RTCConnection without session.");
      obj = { sessionId: null, streamKey: null, serverId: null, channelId: null, initialLayout: null, analyticsContext: null, parentMediaSessionId: null };
      obj[0] = closure_3;
      obj[1] = streamKey;
      obj[2] = rtcServerId;
      obj[3] = rtcChannelId;
      obj[4] = PORTRAIT;
      obj[5] = streamRTCAnalyticsContext;
      let tmp32 = isOwnerDefault;
      obj[6] = mediaSessionId.getMediaSessionId();
      tmp32 = new tmp32(obj);
      tmp3[streamKey] = tmp32;
      obj = tmp32;
      const tmp19 = table;
    }
    delete tmp[tmp2];
    decodeStreamKeyResult = obj1.decodeStreamKey(streamKey);
    tmp3 = dependencyMap3;
    obj1 = { type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET", mediaEngineConnectionId: obj.getMediaEngineConnectionId() };
    importDefaultResult1.dispatch(obj1);
  };
  obj[11] = function handleStreamServerUpdate(endpoint) {
    if (null == dependencyMap3[endpoint.streamKey]) {
      return false;
    } else {
      obj.connect(endpoint.endpoint, endpoint.token);
    }
  };
  obj[12] = function handleStreamUpdate(viewerIds) {
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
  };
  obj[13] = function handleStreamDelete(arg0) {
    let obj = dependencyMap3[arg0.streamKey];
    if (null == obj) {
      return false;
    } else {
      obj = { type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET", mediaEngineConnectionId: null };
      obj[1] = obj.getMediaEngineConnectionId();
      importDefaultResult1.dispatch(obj);
      obj.destroy("stream-end");
      delete tmp[tmp2];
    }
  };
  obj[14] = function handleLayoutUpdate(layout) {
    layout = layout.layout;
    const values = Object.values(closure_18);
    const item = values.forEach((layoutChange) => layoutChange.layoutChange(layout));
  };
  obj[15] = function handleVideoSizeUpdate(arg0) {
    ({ streamId: require, dimensions: importDefault, zoom: dependencyMap } = arg0);
    const item = applyDefault.forEach(closure_18, (setVideoSize) => {
      if (setVideoSize != null) {
        setVideoSize.setVideoSize(closure_0, closure_1, closure_2);
      }
    });
  };
} else {
  obj = {};
}
const streamRTCConnectionStore = new StreamRTCConnectionStore(importDefaultResult1, obj);
let result = require("set").fileFinishedImporting("stores/StreamRTCConnectionStore.tsx");

export default streamRTCConnectionStore;