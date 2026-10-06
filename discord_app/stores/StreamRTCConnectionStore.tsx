// discord_app/stores/StreamRTCConnectionStore.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import _modDef38 from "../../_runtime/metro/00038__.js";
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import PlatformUtils from "../utils/PlatformUtils.tsx";
import Constants2 from "../modules/go_live/Constants.tsx";
import StreamRTCConnection from "../modules/go_live/StreamRTCConnection.tsx";
import StreamKeyUtils from "../modules/go_live/utils/StreamKeyUtils.tsx";
import BaseConnectionEvent from "../../discord_common/js/packages/media-engine/index.tsx";
import StreamerApplicationSelectors from "../modules/go_live/utils/StreamerApplicationSelectors.tsx";
import canSpectateDefault from "../modules/go_live/utils/canSpectate.tsx";
import RunningGameStore from "../modules/game_detection/RunningGameStore.native.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import MediaEngineStore from "MediaEngineStore.tsx";
import PresenceStore from "PresenceStore.tsx";
import RTCConnectionStore from "RTCConnectionStore.tsx";
import Constants from "../Constants.tsx";
import Dispatcher from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

const StreamRTCConnectionDefault = StreamRTCConnection;

let StreamLayouts;
let c9;
let obj2;
const f89851 = (destroy, arg1) => {
  let str = "receiver-disconnect";
  destroy = destroy.destroy;
  if (destroy.isOwner) {
    str = "sender-disconnect";
  }
  destroy(str);
  delete closure_1_18[arg1];
  delete closure_1_16[arg1];
};
({ RTCConnectionQuality: c9, StreamLayouts } = Constants);
const StreamTypes = Constants2.StreamTypes;
let closure_11 = {};
let closure_12 = {};
let closure_13 = {};
const authStore2 = {};
let closure_15 = {};
const authStore3 = {};
let layout = StreamLayouts.PORTRAIT;
const authStore4 = {};
const Store = get_initializedDefault.Store;
class StreamRTCConnectionStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, MediaEngineStore, RTCConnectionStore, RunningGameStore);
  }
  getRTCConnections() {
    return closure_18;
  }
  getAllActiveStreamKeys() {
    return Object.keys(closure_18);
  }
  getRTCConnection(arg0) {
    return closure_18[arg0];
  }
  getQuality(arg0) {
    if (canSpectateDefault(MediaEngineStore)) {
      let UNKNOWN;
      if (null != arg0) {
        let quality;
        if (closure_18[arg0] != null) {
          quality = tmp4.quality;
        }
        if (quality == null) {
          quality = constants.UNKNOWN;
        }
        UNKNOWN = quality;
      }
      return UNKNOWN;
    }
    UNKNOWN = constants.UNKNOWN;
  }
  getMediaSessionId(arg0) {
    if (null == arg0) {
      return null;
    } else {
      let tmp2;
      if (null != closure_18[arg0]) {
        let mediaSessionId = null;
        if (null != closure_18[arg0]) {
          mediaSessionId = obj.getMediaSessionId();
        }
        tmp2 = mediaSessionId;
      }
      return tmp2;
    }
  }
  getRtcConnectionId(encodeStreamKeyResult) {
    if (null == encodeStreamKeyResult) {
      return null;
    } else {
      let tmp2;
      if (null != closure_18[encodeStreamKeyResult]) {
        let rTCConnectionId = null;
        if (null != closure_18[encodeStreamKeyResult]) {
          rTCConnectionId = obj.getRTCConnectionId();
        }
        tmp2 = rTCConnectionId;
      }
      return tmp2;
    }
  }
  getVideoStats(arg0) {
    if (null == arg0) {
      return null;
    } else {
      let videoStats = null;
      if (null != closure_18[arg0]) {
        videoStats = obj.getVideoStats();
      }
      return videoStats;
    }
  }
  getHostname(arg0) {
    if (null == arg0) {
      return "";
    } else {
      let str2 = "";
      if (null != closure_18[arg0]) {
        str2 = "";
        if (null != closure_18[arg0].hostname) {
          str2 = tmp2.hostname;
        }
      }
      return str2;
    }
  }
  getRegion(arg0) {
    if (null == arg0) {
      return null;
    } else {
      let region = null;
      if (null != closure_18[arg0]) {
        region = obj.getRegion();
      }
      return region;
    }
  }
  getMaxViewers(arg0) {
    if (null == arg0) {
      return null;
    } else {
      let maxViewers = null;
      if (null != closure_18[arg0]) {
        maxViewers = obj.getMaxViewers();
      }
      return maxViewers;
    }
  }
  getStreamSourceId(arg0) {
    return closure_14[arg0];
  }
  getLastNonZeroRemoteVideoSinkWantsTime(arg0) {
    return closure_16[arg0];
  }
  getUserIds(arg0) {
    let userIds;
    if (closure_18[arg0] != null) {
      userIds = obj.getUserIds();
    }
    return userIds;
  }
  isUserConnected(arg0, arg1) {
    let isUserConnected;
    if (closure_18[arg0] != null) {
      isUserConnected = obj.getIsUserConnected(arg1);
    }
    return isUserConnected;
  }
  getSecureFramesState(arg0) {
    let secureFramesState;
    if (closure_18[arg0] != null) {
      secureFramesState = obj.getSecureFramesState();
    }
    return secureFramesState;
  }
  getSecureFramesRosterMapEntry(arg0, arg1) {
    let secureFramesRosterMap;
    if (closure_18[arg0] != null) {
      secureFramesRosterMap = obj.getSecureFramesRosterMap();
    }
    let value;
    if (secureFramesRosterMap != null) {
      value = secureFramesRosterMap.get(arg1);
    }
    return value;
  }
}
const prototype = StreamRTCConnectionStore.prototype;
StreamRTCConnectionStore.displayName = "StreamRTCConnectionStore";
if (MediaEngineStore.isSupported()) {
  function handleRtcAction() {
    return true;
  }
  let obj = {
    CONNECTION_OPEN: function handleConnectionOpen(sessionId) {
      sessionId = sessionId.sessionId;
      const arr = _modDef12;
      const item = arr.forEach(closure_18, f89851);
    },
    CONNECTION_CLOSED: function handleConnectionClosed() {
      let c3 = null;
      const arr = _modDef12;
      const item = arr.forEach(closure_18, f89851);
    },
    RTC_CONNECTION_STATE: handleRtcAction,
    RTC_CONNECTION_PING: handleRtcAction,
    RTC_CONNECTION_LOSS_RATE: handleRtcAction,
    RTC_CONNECTION_UPDATE_ID: function handleRtcConnectionUpdateId(arg0) {
      let closure_0 = arg0;
      const obj = _modDef12;
      return obj.some(closure_18, (arg0) => arg0 === connection.connection);
    },
    RTC_CONNECTION_SECURE_FRAMES_UPDATE: handleRtcAction,
    RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: function handleRtcConnectionRemoteVideoSinkWants(guildId) {
      let GUILD;
      let channelId;
      let context;
      let userId;
      let wants;
      guildId = guildId.guildId;
      ({ context, wants, userId, channelId } = guildId);
      const tmp3 = StreamKeyUtils;
      const encodeStreamKey = tmp3.encodeStreamKey;
      if (null == guildId) {
        GUILD = StreamTypes.CALL;
      } else {
        GUILD = StreamTypes.GUILD;
      }
      const encodeStreamKeyResult = encodeStreamKey({ streamType: GUILD, guildId, channelId, ownerId: userId });
      let tmp7 =
        context === BaseConnectionEvent.MediaEngineContextTypes.STREAM && null != closure_18[encodeStreamKeyResult];
      if (tmp7) {
        const _Object = Object;
        const entries = Object.entries(wants);
        const someResult = entries.some((item) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          return "any" !== tmp && 0 !== tmp2;
        });
        if (someResult) {
          const _performance = performance;
          closure_16[encodeStreamKeyResult] = performance.now();
        }
        tmp7 = someResult;
      }
      return tmp7;
    },
    STREAM_START: function handleStreamStart(appContext) {
      let analyticsLocations;
      let channelId;
      let closure_129_1;
      let goLiveModalDurationMs;
      let guildId;
      let pid;
      let sourceId;
      let sourcePid;
      let streamType;
      appContext = appContext.appContext;
      ({ pid, nativePickerStyleUsed: closure_129_1, goLiveModalDurationMs } = appContext);
      ({ streamType, guildId, channelId, sourceId, sourcePid, analyticsLocations } = appContext);
      const obj = StreamKeyUtils;
      const obj2 = { streamType, guildId, channelId, ownerId: AuthenticationStore.getId() };
      const encodeStreamKeyResult = obj.encodeStreamKey(obj2);
      closure_11[encodeStreamKeyResult] = { appContext, analyticsLocations };
      const arr = _modDef12;
      const item = arr.forEach(closure_18, (analyticsContext) => {
        analyticsContext = analyticsContext.analyticsContext;
        const isOwner = analyticsContext.isOwner;
        analyticsContext.setActionContext(appContext);
        const result = analyticsContext.setNativePickerStyleUsed(closure_1_1);
        if (isOwner) {
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
          const obj5 = { name: null, id: null, exe: null, distributor: null, sku: null, gameMetadata: null };
          ({
            name: obj3.name,
            id: obj3.id,
            exeName: obj3.exe,
            distributor: obj3.distributor,
            sku: obj3.sku,
            gameMetadata: obj3.gameMetadata,
          } = gameForPID);
          closure_12[encodeStreamKeyResult] = obj5;
        }
        if (closure_18[encodeStreamKeyResult] != null) {
          let analyticsContext = tmp8.analyticsContext;
          let result = analyticsContext.updateStreamApplication(closure_12[encodeStreamKeyResult]);
        }
      } else if (closure_18[encodeStreamKeyResult] != null) {
        const analyticsContext2 = tmp4.analyticsContext;
        const result1 = analyticsContext2.updateStreamApplication(null);
      }
      if (null != goLiveModalDurationMs) {
        closure_15[encodeStreamKeyResult] = goLiveModalDurationMs;
      } else {
        delete closure_15[tmp];
      }
    },
    STREAM_STOP: function handleStreamStop(appContext) {
      appContext = appContext.appContext;
      const streamKey = appContext.streamKey;
      closure_11[streamKey] = { appContext, analyticsLocations: "Array" };
      const arr = _modDef12;
      const item = arr.forEach(closure_18, (analyticsContext) => {
        analyticsContext = analyticsContext.analyticsContext;
        const isOwner = analyticsContext.isOwner;
        analyticsContext.setActionContext(appContext);
        if (isOwner) {
          analyticsContext.trackEnd();
        }
      });
      closure_14[streamKey] = null;
      closure_13[streamKey] = null;
      delete closure_15[streamKey];
    },
    STREAM_CREATE: function handleStreamCreate(arg0) {
      let analyticsLocations;
      let appContext;
      let num;
      let region;
      let rtcChannelId;
      let rtcServerId;
      let str2;
      let streamKey;
      let viewerIds;
      ({ streamKey, rtcServerId, viewerIds } = arg0);
      let obj = closure_18[streamKey];
      ({ rtcChannelId, region } = arg0);
      let tmp5 = null == obj;
      const obj2 = StreamKeyUtils;
      const decodeStreamKeyResult = obj2.decodeStreamKey(streamKey);
      if (tmp5) {
        tmp5 = null != rtcServerId;
      }
      if (tmp5) {
        if (null == closure_13[streamKey]) {
          closure_12[streamKey] = null;
        }
        const tmp9 = null == closure_12[streamKey] && null == closure_14[streamKey];
        if (tmp9) {
          const tmp2Result = StreamerApplicationSelectors;
          closure_12[streamKey] = tmp2Result.getStreamerApplication(decodeStreamKeyResult, PresenceStore);
        }
        const obj3 = {
          streamRegion: region,
          streamApplication: closure_12[streamKey],
          streamSourceType: str2,
          actionContext: appContext,
          numViewers: num,
          goLiveModalDurationMs: closure_15[streamKey],
          analyticsLocations,
        };
        str2 = "unknown";
        const StreamRTCAnalyticsContext = StreamRTCConnection.StreamRTCAnalyticsContext;
        if (null != closure_14[streamKey]) {
          if (!PlatformUtils.isPlatformEmbedded) {
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
                if ("" !== closure_14[streamKey]) {
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
          if (!closure_14[streamKey].startsWith("web-contents-media-stream:")) {
            str2 = "window";
            if (!closure_14[streamKey].startsWith("window:")) {
              str2 = "unknown";
              if (closure_14[streamKey].startsWith("screen:")) {
                str2 = "screen";
              }
            }
          }
        }
        appContext = undefined;
        if (closure_11[streamKey] != null) {
          appContext = tmp18.appContext;
        }
        num = 0;
        if (null != viewerIds) {
          num = viewerIds.length;
        }
        analyticsLocations = undefined;
        if (closure_11[streamKey] != null) {
          analyticsLocations = tmp21.analyticsLocations;
        }
        const self = this;
        const self2 = this;
        const streamRTCAnalyticsContext = new StreamRTCAnalyticsContext(obj3);
        _modDef38(null != sessionId, "Creating RTCConnection without session.");
        const obj4 = {
          sessionId,
          streamKey,
          serverId: rtcServerId,
          channelId: rtcChannelId,
          initialLayout: layout,
          analyticsContext: streamRTCAnalyticsContext,
          parentMediaSessionId: RTCConnectionStore.getMediaSessionId(),
        };
        const self3 = this;
        const self4 = this;
        const tmp28 = StreamRTCConnectionDefault;
        const tmp282 = new tmp28(obj4);
        closure_18[streamKey] = tmp282;
        obj = tmp282;
      }
      delete closure_16[streamKey];
      const obj7 = Dispatcher;
      const obj6 = {
        type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
        mediaEngineConnectionId: obj.getMediaEngineConnectionId(),
      };
      obj7.dispatch(obj6);
    },
    STREAM_SERVER_UPDATE: function handleStreamServerUpdate(endpoint) {
      if (null == closure_18[endpoint.streamKey]) {
        return false;
      } else {
        closure_18[endpoint.streamKey].connect(endpoint.endpoint, endpoint.token);
      }
    },
    STREAM_UPDATE: function handleStreamUpdate(viewerIds) {
      viewerIds = viewerIds.viewerIds;
      if (null == closure_18[viewerIds.streamKey]) {
        return false;
      } else {
        if (null != viewerIds) {
          const analyticsContext = obj.analyticsContext;
          analyticsContext.trackViewerCount(viewerIds.length);
        }
        closure_18[viewerIds.streamKey].streamUpdate(tmp);
      }
    },
    STREAM_DELETE: function handleStreamDelete(streamKey) {
      streamKey = streamKey.streamKey;
      if (null == closure_18[streamKey]) {
        return false;
      } else {
        const obj2 = {
          type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
          mediaEngineConnectionId: closure_18[streamKey].getMediaEngineConnectionId(),
        };
        const dispatch = Dispatcher.dispatch;
        Dispatcher;
        dispatch(obj2);
        closure_18[streamKey].destroy("stream-end");
        delete tmp[streamKey];
      }
    },
    STREAM_LAYOUT_UPDATE: function handleLayoutUpdate(layout) {
      layout = layout.layout;
      const values = Object.values(closure_18);
      const item = values.forEach((layoutChange) => layoutChange.layoutChange(layout));
    },
    VIDEO_SIZE_UPDATE: function handleVideoSizeUpdate(arg0) {
      let closure_129_0;
      let closure_129_1;
      let closure_129_2;
      ({ streamId: closure_129_0, dimensions: closure_129_1, zoom: closure_129_2 } = arg0);
      const arr = _modDef12;
      const item = arr.forEach(closure_18, (setVideoSize) => {
        if (setVideoSize != null) {
          setVideoSize.setVideoSize(closure_1_0, closure_1_1, closure_1_2);
        }
      });
    },
  };
  obj2 = obj;
} else {
  obj2 = {};
}
const streamRTCConnectionStore = new StreamRTCConnectionStore(Dispatcher, obj2);
let result = size.fileFinishedImporting("stores/StreamRTCConnectionStore.tsx");

export default streamRTCConnectionStore;
