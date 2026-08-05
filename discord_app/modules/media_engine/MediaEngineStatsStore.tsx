// discord_app/modules/media_engine/MediaEngineStatsStore.tsx
import fetchFingerprint from "fetchFingerprint";
import initialize from "initialize";
import { Store } from "initialize";

const require = arg1;
function updateAveragedStatsHelper(arg0, arg1, arg2, arr, arr2) {
  let tmp = arg2;
  const found = arr.find((type) => "video" === type.type);
  if (null == arg2) {
    const obj = { packetsSentOrReceived: 0, packetsLost: 0, packetLossRate: 0, frameRate: 0, resolution: 0, entropy: 0, numDatapoints: 0, frameRateAggregated: 0, resolutionAggregated: 0, entropyAggregated: 0, minVersion: null };
    obj[10] = arg0;
    tmp = obj;
  }
  if (null == found) {
    return tmp;
  } else {
    if ("packetsSent" in found) {
      let num2 = found.packetsSent;
      if (num2 == null) {
        num2 = 0;
      }
      let num = num2;
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
      let num4 = num5;
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
      if (arg1 >= tmp.minVersion) {
        tmp.numDatapoints = tmp.numDatapoints - 1;
        if ("packetsSent" in found1) {
          let num11 = found1.packetsSent;
          if (num11 == null) {
            num11 = 0;
          }
          let num10 = num11;
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
          let num13 = num14;
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
  id = id.getId();
  let num;
  if (version2 != null) {
    num = version2.version;
  }
  if (num == null) {
    num = 0;
  }
  let outbound;
  if (version2 != null) {
    outbound = version2.stats.rtp.outbound;
  }
  arg0[arg1][id] = updateAveragedStatsHelper(version.version, num, arg0[arg1][id], version.stats.rtp.outbound, outbound);
  const keys = Object.keys(version.stats.rtp.inbound);
  for (const item10043 of keys) {
    let tmp5 = item10043;
    version = arg2.version;
    let num2;
    let tmp6 = updateAveragedStatsHelper;
    if (arg3 != null) {
      num2 = arg3.version;
    }
    if (num2 == null) {
      num2 = 0;
    }
    let tmp7 = item10043;
    let tmp8 = arg0[arg1][tmp5];
    let tmp9 = arg2.stats.rtp.inbound[tmp5];
    let tmp10;
    if (arg3 != null) {
      let tmp11 = item10043;
      tmp10 = arg3.stats.rtp.inbound[tmp5];
    }
    let num3 = 0;
    let tmp12 = version;
    let tmp13 = num2;
    let tmp14 = tmp8;
    let tmp15 = tmp9;
    let tmp16 = tmp10;
    arg0[arg1][item10043] = tmp6(version, num2, tmp8, tmp9, tmp10);
    continue;
  }
}
function getStatsHistoryAtIndex(arg0, arg1) {
  if (null == arg0) {
    return null;
  } else {
    let tmp2 = null;
    if (null != dependencyMap[arg0]) {
      tmp2 = null;
      if (arr.length > 15) {
        tmp2 = arr[arr.length - 15 - 1];
      }
    }
    return tmp2;
  }
}
let closure_4 = {};
let closure_5 = {};
let closure_6 = {};
class MediaEngineStatsStore extends Store {
}
const prototype = MediaEngineStatsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(fetchFingerprint, initialize);
};
prototype["getConnectionStats"] = function getConnectionStats(mediaEngineConnectionId) {
  let tmp = null;
  if (null != mediaEngineConnectionId) {
    let tmp3 = null;
    if (null != dependencyMap[mediaEngineConnectionId]) {
      tmp3 = null;
      if (arr.length > 0) {
        tmp3 = arr[arr.length - 1];
      }
    }
    tmp = tmp3;
  }
  return tmp;
};
prototype["getLastConnectionStats"] = function getLastConnectionStats(mediaEngineConnectionId) {
  let tmp = null;
  if (null != mediaEngineConnectionId) {
    let tmp3 = null;
    if (null != dependencyMap[mediaEngineConnectionId]) {
      tmp3 = null;
      if (arr.length > 1) {
        tmp3 = arr[arr.length - 1 - 1];
      }
    }
    tmp = tmp3;
  }
  return tmp;
};
prototype["getStatsHistory"] = function getStatsHistory(arg0) {
  if (null == arg0) {
    let items = [];
  } else {
    items = dependencyMap[arg0];
    if (items == null) {
      items = [];
    }
  }
  return items;
};
prototype["getAccumulatedPerformanceStats"] = function getAccumulatedPerformanceStats(mediaEngineConnectionId, ownerId, long) {
  if (null == mediaEngineConnectionId) {
    return null;
  } else {
    const tmp2 = "long" === long ? closure_5 : closure_6[mediaEngineConnectionId];
    let tmp3;
    if (tmp2 != null) {
      tmp3 = tmp2[ownerId];
    }
    if (tmp3 == null) {
      tmp3 = null;
    }
    return tmp3;
  }
};
MediaEngineStatsStore.displayName = "MediaEngineStatsStore";
const mediaEngineStatsStore = new MediaEngineStatsStore(require("dispatcher"), {
  MEDIA_ENGINE_CONNECTION_STATS: function handleMediaEngineConnectionStats(arg0) {
    const iter = arg0.connectionStats[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let prop = nextResult.mediaEngineConnectionId;
      let tmp3 = prop;
      if (0 !== prop.length) {
        let tmp26 = prop;
        let tmp27 = nextResult;
        {}[tmp3] = tmp2;
        let tmp28 = closure_4;
        if (!(tmp3 in closure_4)) {
          let tmp4 = prop;
          tmp28[tmp3] = [];
        }
        let tmp5 = prop;
        let arr2 = tmp28[tmp3];
        let tmp6 = nextResult;
        let arr = arr2.push(tmp2);
        arr = undefined;
        if (tmp28[tmp3].length > 30) {
          let tmp9 = prop;
          let arr3 = tmp28[tmp3];
          arr = arr3.shift();
        }
        let tmp10 = updateAveragedStats;
        let tmp11 = closure_6;
        let tmp14 = getStatsHistoryAtIndex;
        let tmp12 = prop;
        let tmp13 = nextResult;
        let tmp15 = getStatsHistoryAtIndex(tmp3, 15);
        let num = 0;
        let tmp16 = tmp11;
        let tmp17 = tmp3;
        let tmp18 = tmp2;
        let tmp19 = tmp15;
        let tmp10Result = tmp10(tmp11, tmp12, tmp13, tmp15);
        let tmp21 = closure_5;
        let tmp22 = prop;
        let tmp23 = nextResult;
        let tmp24 = arr;
        tmp10Result = tmp10(closure_5, tmp3, tmp2, arr);
      }
      continue;
    }
  },
  MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET: function handleResetStats(mediaEngineConnectionId) {
    if (null != mediaEngineConnectionId.mediaEngineConnectionId) {
      delete tmp3[tmp2];
      delete tmp3[tmp2];
      delete tmp[tmp2];
    }
  },
  STREAM_UPDATE: function handleStreamUpdate(streamKey) {
    streamKey = streamKey.streamKey;
    if (streamKey.paused) {
      return false;
    } else {
      rTCConnection = rTCConnection.getRTCConnection(streamKey);
      let mediaEngineConnectionId;
      if (rTCConnection != null) {
        mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
      }
      if (null == mediaEngineConnectionId) {
        return false;
      } else {
        const ownerId = require("../go_live/utils/StreamKeyUtils.tsx") /* isStreamKey */.decodeStreamKey(streamKey).ownerId;
        let tmp11;
        if (dependencyMap2[mediaEngineConnectionId] != null) {
          tmp11 = tmp10[ownerId];
        }
        if (null != tmp11) {
          delete tmp3[tmp2];
        }
        let tmp15;
        if (dependencyMap3[mediaEngineConnectionId] != null) {
          tmp15 = tmp14[ownerId];
        }
        if (null != tmp15) {
          delete tmp[tmp2];
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
      let tmp6;
      if (dependencyMap2[mediaEngineConnectionId] != null) {
        tmp6 = tmp5[userId];
      }
      if (null != tmp6) {
        delete tmp3[tmp2];
      }
      let tmp10;
      if (dependencyMap3[mediaEngineConnectionId] != null) {
        tmp10 = tmp9[userId];
      }
      if (null != tmp10) {
        delete tmp[tmp2];
      }
    }
  }
});
const result = require("isStreamKey").fileFinishedImporting("modules/media_engine/MediaEngineStatsStore.tsx");

export default mediaEngineStatsStore;