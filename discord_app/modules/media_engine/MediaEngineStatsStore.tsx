// discord_app/modules/media_engine/MediaEngineStatsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";

function updateAveragedStatsHelper(minVersion, arr2, arg2, arr, arr2) {
  let tmp = arg2;
  const found = arr.find((type) => "video" === type.type);
  if (null == arg2) {
    const obj = {
      packetsSentOrReceived: 0,
      packetsLost: 0,
      packetLossRate: 0,
      frameRate: 0,
      resolution: 0,
      entropy: 0,
      numDatapoints: 0,
      frameRateAggregated: 0,
      resolutionAggregated: 0,
      entropyAggregated: 0,
      minVersion,
    };
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
      if (arr2 >= tmp.minVersion) {
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
  const id = AuthenticationStore.getId();
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
  arg0[arg1][id] = updateAveragedStatsHelper(
    version.version,
    num,
    arg0[arg1][id],
    version.stats.rtp.outbound,
    outbound,
  );
  const keys = Object.keys(version.stats.rtp.inbound);
  for (const item10043 of keys) {
    version = arg2.version;
    let num2;
    if (arg3 != null) {
      num2 = arg3.version;
    }
    if (num2 == null) {
      num2 = 0;
    }
    let tmp8 = arg0[arg1][item10043];
    let tmp9 = arg2.stats.rtp.inbound[item10043];
    let tmp10;
    if (arg3 != null) {
      tmp10 = arg3.stats.rtp.inbound[item10043];
    }
    arg0[arg1][item10043] = updateAveragedStatsHelper(version, num2, tmp8, tmp9, tmp10);
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
const dependencyMap = {};
const dependencyMap2 = {};
const dependencyMap3 = {};
const Store = initializeDefault.Store;
class MediaEngineStatsStore extends Store {}
const prototype = MediaEngineStatsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore);
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
prototype["getAccumulatedPerformanceStats"] = function getAccumulatedPerformanceStats(
  mediaEngineConnectionId,
  ownerId,
  long,
) {
  if (null == mediaEngineConnectionId) {
    return null;
  } else {
    const tmp2 = "long" === long ? closure_2 : closure_3[mediaEngineConnectionId];
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
const mediaEngineStatsStore = new MediaEngineStatsStore(DispatcherDefault, {
  MEDIA_ENGINE_CONNECTION_STATS: function handleMediaEngineConnectionStats(connectionStats) {
    connectionStats = connectionStats.connectionStats;
    if (0 === connectionStats.length) {
      return false;
    } else {
      const iter = connectionStats[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let prop = nextResult.mediaEngineConnectionId;
        let tmp5 = prop;
        if (0 !== prop.length) {
          obj[tmp5] = tmp4;
          if (!(tmp5 in dependencyMap)) {
            dependencyMap[tmp5] = [];
          }
          let arr3 = dependencyMap[tmp5];
          let arr = arr3.push(tmp4);
          let arr2;
          if (dependencyMap[tmp5].length > 30) {
            let arr4 = dependencyMap[tmp5];
            arr2 = arr4.shift();
          }
          let tmp14 = prop;
          let tmp15 = nextResult;
          let tmp17 = getStatsHistoryAtIndex(tmp5, 15);
          let tmp12Result = updateAveragedStats(closure_3, tmp14, tmp15, tmp17);
          let tmp12Result2 = updateAveragedStats(closure_2, tmp5, tmp4, arr2);
        }
        continue;
      }
      obj = {};
    }
  },
  MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET: function handleResetStats(mediaEngineConnectionId) {
    if (null != mediaEngineConnectionId.mediaEngineConnectionId) {
      delete tmp3[tmp2];
      delete tmp3[tmp2];
      delete tmp[tmp2];
    }
  },
  MEDIA_ENGINE_CONNECTION_USER_STATS_RESET: function handleUserStatsReset(arg0) {
    ({ mediaEngineConnectionId, userId } = arg0);
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
  },
  RTC_CONNECTION_VIDEO: function handleVideo(arg0) {
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
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_engine/MediaEngineStatsStore.tsx");

export default mediaEngineStatsStore;
