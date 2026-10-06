// === Module 4934: MediaEngineStatsStore ===

// Module 4934 (MediaEngineStatsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4948 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4935 */;
import size from "module_2" /* 2 */;

function updateAveragedStatsHelper(minVersion, arr5, arg2, arr, arr2) {
  let tmp = arg2;
  const found = arr.find((type) => "video" === type.type);
  if (null == arg2) {
    tmp = { packetsSentOrReceived: 0, packetsLost: 0, packetLossRate: 0, frameRate: 0, resolution: 0, entropy: 0, numDatapoints: 0, frameRateAggregated: 0, resolutionAggregated: 0, entropyAggregated: 0, minVersion };
    const obj = { packetsSentOrReceived: 0, packetsLost: 0, packetLossRate: 0, frameRate: 0, resolution: 0, entropy: 0, numDatapoints: 0, frameRateAggregated: 0, resolutionAggregated: 0, entropyAggregated: 0, minVersion };
  }
  if (null == found) {
    return tmp;
  } else {
    let num;
    let num4;
    if ("packetsSent" in found) {
      let num2 = found.packetsSent;
      if (num2 == null) {
        num2 = 0;
      }
      num = num2;
    } else {
      num = found.packetsReceived;
      if (num == null) {
        num = 0;
      }
    }
    let num3 = found.packetsLost;
    if (num3 == null) {
      num3 = 0;
    }
    if ("packetsSent" in found) {
      let num5 = found.frameRateEncode;
      if (num5 == null) {
        num5 = 0;
      }
      num4 = num5;
    } else {
      num4 = found.frameRateDecode;
      if (num4 == null) {
        num4 = 0;
      }
    }
    const resolution = found.resolution;
    let num6;
    if (resolution != null) {
      num6 = resolution.height;
    }
    if (num6 == null) {
      num6 = 0;
    }
    let num7 = 0;
    if ("packetsSent" in found) {
      let num8 = found.videoEntropy;
      if (num8 == null) {
        num8 = 0;
      }
      num7 = num8;
    }
    tmp.numDatapoints = tmp.numDatapoints + 1;
    tmp.frameRateAggregated = tmp.frameRateAggregated + num4;
    tmp.resolutionAggregated = tmp.resolutionAggregated + num6;
    tmp.entropyAggregated = tmp.entropyAggregated + num7;
    let found1;
    if (arr2 != null) {
      found1 = arr2.find((type) => "video" === type.type);
    }
    if (null != found1) {
      if (arr5 >= tmp.minVersion) {
        let num10;
        let num13;
        tmp.numDatapoints = tmp.numDatapoints - 1;
        if ("packetsSent" in found1) {
          let num11 = found1.packetsSent;
          if (num11 == null) {
            num11 = 0;
          }
          num10 = num11;
        } else {
          num10 = found1.packetsReceived;
          if (num10 == null) {
            num10 = 0;
          }
        }
        let num12 = found1.packetsLost;
        if (num12 == null) {
          num12 = 0;
        }
        if ("packetsSent" in found1) {
          let num14 = found1.frameRateEncode;
          if (num14 == null) {
            num14 = 0;
          }
          num13 = num14;
        } else {
          num13 = found1.frameRateDecode;
          if (num13 == null) {
            num13 = 0;
          }
        }
        let num15 = 0;
        if ("packetsSent" in found1) {
          let num16 = found1.videoEntropy;
          if (num16 == null) {
            num16 = 0;
          }
          num15 = num16;
        }
        const resolution2 = found1.resolution;
        let num17;
        if (resolution2 != null) {
          num17 = resolution2.height;
        }
        if (num17 == null) {
          num17 = 0;
        }
        tmp.frameRateAggregated = tmp.frameRateAggregated - num13;
        tmp.resolutionAggregated = tmp.resolutionAggregated - num17;
        tmp.entropyAggregated = tmp.entropyAggregated - num15;
        tmp.packetsSentOrReceived = num - num10;
        tmp.packetsLost = num3 - num12;
      }
      tmp.frameRate = tmp.frameRateAggregated / tmp.numDatapoints;
      tmp.resolution = tmp.resolutionAggregated / tmp.numDatapoints;
      tmp.entropy = tmp.entropyAggregated / tmp.numDatapoints;
      tmp.packetLossRate = tmp.packetsLost / (tmp.packetsSentOrReceived + tmp.packetsLost);
      return tmp;
    }
    tmp.packetsSentOrReceived = num;
    tmp.packetsLost = num3;
  }
}
function updateAveragedStats(arg0, arg1, version, version2) {
  if (null == arg0[arg1]) {
    arg0[arg1] = {};
  }
  const id = AuthenticationStore.getId();
  version = version.version;
  let num;
  const tmp2 = arg0[arg1];
  if (version2 != null) {
    num = version2.version;
  }
  if (num == null) {
    num = 0;
  }
  const outbound = version.stats.rtp.outbound;
  let outbound1;
  const tmp4 = arg0[arg1][id];
  if (version2 != null) {
    outbound1 = version2.stats.rtp.outbound;
  }
  tmp2[id] = updateAveragedStatsHelper(version, num, tmp4, outbound, outbound1);
  const keys = Object.keys(version.stats.rtp.inbound);
  for (const item10043 of keys) {
    version2 = version.version;
    let num2;
    let tmp8 = arg0[arg1];
    if (version2 != null) {
      num2 = version2.version;
    }
    if (num2 == null) {
      num2 = 0;
    }
    let tmp11 = arg0[arg1][item10043];
    let tmp12 = version.stats.rtp.inbound[item10043];
    let tmp13;
    if (version2 != null) {
      tmp13 = version2.stats.rtp.inbound[item10043];
    }
    tmp8[item10043] = updateAveragedStatsHelper(version2, num2, tmp11, tmp12, tmp13);
    continue;
  }
}
function getStatsHistoryAtIndex(arg0, arg1) {
  if (null == arg0) {
    return null;
  } else {
    let tmp2 = null;
    if (null != closure_4[arg0]) {
      tmp2 = null;
      if (closure_4[arg0].length > 15) {
        tmp2 = arr[arr.length - 15 - 1];
      }
    }
    return tmp2;
  }
}
const React3 = {};
let closure_5 = {};
let closure_6 = {};
const Store = get_initializedDefault.Store;
class MediaEngineStatsStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, StreamRTCConnectionStore);
  }
  getConnectionStats(mediaEngineConnectionId) {
    let tmp = null;
    if (null != mediaEngineConnectionId) {
      let tmp3 = null;
      if (null != closure_4[mediaEngineConnectionId]) {
        tmp3 = null;
        if (closure_4[mediaEngineConnectionId].length > 0) {
          tmp3 = arr[arr.length - 1];
        }
      }
      tmp = tmp3;
    }
    return tmp;
  }
  getLastConnectionStats(mediaEngineConnectionId) {
    let tmp = null;
    if (null != mediaEngineConnectionId) {
      let tmp3 = null;
      if (null != closure_4[mediaEngineConnectionId]) {
        tmp3 = null;
        if (closure_4[mediaEngineConnectionId].length > 1) {
          tmp3 = arr[arr.length - 1 - 1];
        }
      }
      tmp = tmp3;
    }
    return tmp;
  }
  getStatsHistory(arg0) {
    let items;
    if (null == arg0) {
      items = [];
    } else {
      items = closure_4[arg0];
      if (items == null) {
        items = [];
      }
    }
    return items;
  }
  getAccumulatedPerformanceStats(mediaEngineConnectionId, ownerId, long) {
    if (null == mediaEngineConnectionId) {
      return null;
    } else {
      const tmp2 = ("long" === long ? closure_5 : closure_6)[mediaEngineConnectionId];
      let tmp3;
      if (tmp2 != null) {
        tmp3 = tmp2[ownerId];
      }
      if (tmp3 == null) {
        tmp3 = null;
      }
      return tmp3;
    }
  }
}
const prototype = MediaEngineStatsStore.prototype;
MediaEngineStatsStore.displayName = "MediaEngineStatsStore";
let obj = {
  MEDIA_ENGINE_CONNECTION_STATS: function handleMediaEngineConnectionStats(arg0) {
    const iter = arg0.connectionStats[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let prop = nextResult.mediaEngineConnectionId;
      let tmp3 = prop;
      if (0 !== prop.length) {
        ({}[tmp3]) = tmp2;
        if (!(tmp3 in closure_4)) {
          closure_4[tmp3] = [];
        }
        let arr2 = closure_4[tmp3];
        let arr = arr2.push(tmp2);
        let arr5;
        if (closure_4[tmp3].length > 30) {
          let arr3 = closure_4[tmp3];
          arr5 = arr3.shift();
        }
        let tmp12 = prop;
        let tmp13 = nextResult;
        let tmp15 = getStatsHistoryAtIndex(tmp3, 15);
        let tmp10Result = updateAveragedStats(closure_6, tmp12, tmp13, tmp15);
        let tmp10Result2 = updateAveragedStats(closure_5, tmp3, tmp2, arr5);
      }
      continue;
    }
  },
  MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET: function handleResetStats(mediaEngineConnectionId) {
    mediaEngineConnectionId = mediaEngineConnectionId.mediaEngineConnectionId;
    if (null != mediaEngineConnectionId) {
      delete closure_4[mediaEngineConnectionId];
      delete closure_5[mediaEngineConnectionId];
      delete closure_6[mediaEngineConnectionId];
    }
  },
  STREAM_UPDATE: function handleStreamUpdate(streamKey) {
    streamKey = streamKey.streamKey;
    if (streamKey.paused) {
      return false;
    } else {
      const rTCConnection = StreamRTCConnectionStore.getRTCConnection(streamKey);
      let mediaEngineConnectionId;
      if (rTCConnection != null) {
        mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
      }
      if (null == mediaEngineConnectionId) {
        return false;
      } else {
        const obj2 = StreamKeyUtils;
        const ownerId = obj2.decodeStreamKey(streamKey).ownerId;
        let tmp8;
        if (closure_5[mediaEngineConnectionId] != null) {
          tmp8 = tmp7[ownerId];
        }
        if (null != tmp8) {
          delete closure_5[tmp3][ownerId];
        }
        let tmp11;
        if (closure_6[mediaEngineConnectionId] != null) {
          tmp11 = tmp10[ownerId];
        }
        if (null != tmp11) {
          delete closure_6[tmp3][ownerId];
        }
      }
    }
  },
  RTC_CONNECTION_VIDEO: function handleVideo(arg0) {
    let mediaEngineConnectionId;
    let userId;
    ({ userId, mediaEngineConnectionId } = arg0);
    if (null == mediaEngineConnectionId) {
      return false;
    } else {
      let tmp3;
      if (closure_5[mediaEngineConnectionId] != null) {
        tmp3 = tmp2[userId];
      }
      if (null != tmp3) {
        delete closure_5[mediaEngineConnectionId][userId];
      }
      let tmp6;
      if (closure_6[mediaEngineConnectionId] != null) {
        tmp6 = tmp5[userId];
      }
      if (null != tmp6) {
        delete closure_6[mediaEngineConnectionId][userId];
      }
    }
  }
};
const mediaEngineStatsStore = new MediaEngineStatsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/media_engine/MediaEngineStatsStore.tsx");

export default mediaEngineStatsStore;