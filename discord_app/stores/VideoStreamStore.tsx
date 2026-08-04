// discord_app/stores/VideoStreamStore.tsx
import { NULL_STRING_GUILD_ID } from "ME";
import { MediaEngineContextTypes } from "DesktopSources";
import { Store } from "initialize";

function makeTimeoutKey(arg0, arg1) {
  return "" + arg0 + ":" + arg1;
}
function clearUser(arg0, arg1) {
  let tmp4 = arg2;
  if (arg2 === undefined) {
    tmp4 = null;
  }
  if (null != dependencyMap[arg0]) {
    let tmp19 = arg1;
    let tmp6 = arg1;
    if (arg1 == null) {
      tmp6 = NULL_STRING_GUILD_ID;
    }
    if (null != tmp5[tmp6]) {
      const _Object = Object;
      const values = Object.values(MediaEngineContextTypes);
      const iter = values[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp11 = nextResult;
        let tmp12 = tmp4 !== nextResult && null != tmp4;
        if (!tmp12) {
          let tmp13 = nextResult;
          delete tmp[tmp2];
          let tmp14 = closure_5;
          let tmp16 = tmp4;
          let tmp15 = makeTimeoutKey;
          if (tmp4 == null) {
            tmp16 = nextResult;
          }
          let tmp15Result = tmp15(tmp16, arg0);
          delete tmp3[tmp2];
        }
        continue;
      }
      if (tmp19 == null) {
        tmp19 = NULL_STRING_GUILD_ID;
      }
      dependencyMap[arg0][tmp19] = tmp7;
    }
  }
}
let c2 = null;
let c3 = null;
let closure_4 = {};
let closure_5 = {};
class VideoStreamStore extends Store {
}
const prototype = VideoStreamStore.prototype;
prototype["getStreamId"] = function getStreamId(arg0, arg1) {
  let DEFAULT = arg2;
  if (arg2 === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  let streamId;
  if (dependencyMap[arg0] != null) {
    let tmp4 = arg1;
    if (arg1 == null) {
      tmp4 = NULL_STRING_GUILD_ID;
    }
    if (tmp2[tmp4] != null) {
      if (tmp5[DEFAULT] != null) {
        streamId = tmp6.streamId;
      }
    }
  }
  return streamId;
};
prototype["getUserStreamData"] = function getUserStreamData(userId, guildId, STREAM) {
  let DEFAULT = STREAM;
  if (STREAM === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  let tmp3;
  if (dependencyMap[userId] != null) {
    let tmp4 = guildId;
    if (guildId == null) {
      tmp4 = NULL_STRING_GUILD_ID;
    }
    if (tmp2[tmp4] != null) {
      tmp3 = tmp5[DEFAULT];
    }
  }
  return tmp3;
};
prototype["getTimedoutVideos"] = function getTimedoutVideos() {
  return closure_5;
};
prototype["getTimedoutVideo"] = function getTimedoutVideo(arg0, arg1) {
  return dependencyMap2["" + arg0 + ":" + arg1];
};
VideoStreamStore.displayName = "VideoStreamStore";
const videoStreamStore = new VideoStreamStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(user) {
    const id = user.user.id;
    const sessionId = user.sessionId;
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(user) {
    const id = user.user.id;
    const sessionId = user.sessionId;
  },
  RTC_CONNECTION_VIDEO: function handleVideo(arg0) {
    let context;
    let guildId;
    let streamId;
    let userId;
    ({ userId, guildId, streamId, context } = arg0);
    if (null != streamId) {
      if (!(userId in dependencyMap)) {
        dependencyMap[userId] = {};
      }
      let tmp8 = guildId;
      if (guildId == null) {
        tmp8 = NULL_STRING_GUILD_ID;
      }
      let obj = dependencyMap[userId][tmp8];
      if (obj == null) {
        obj = {};
      }
      let tmp10 = guildId;
      if (guildId == null) {
        tmp10 = NULL_STRING_GUILD_ID;
      }
      obj = {};
      const merged = Object.assign(obj);
      obj = { streamId: null };
      obj[0] = streamId;
      obj[context] = obj;
      dependencyMap[userId][tmp10] = obj;
      const _HermesInternal = HermesInternal;
      const combined = "" + context + ":" + userId;
      delete tmp2[tmp];
    } else {
      clearUser(userId, guildId, context);
    }
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, arg1) => {
      let channelId;
      let guildId;
      let userId;
      ({ userId, channelId, guildId } = arg1);
      if (null == channelId) {
        if (userId === closure_2) {
          if (tmp !== closure_3) {
            return arg0;
          } else {
            const table = {};
            let closure_5 = {};
          }
        }
        return true;
      }
      if (null == channelId) {
        let tmp5;
        if (table[userId] != null) {
          let tmp6 = guildId;
          if (guildId == null) {
            tmp6 = closure_0;
          }
          tmp5 = tmp4[tmp6];
        }
        if (null != tmp5) {
          callback(userId, guildId);
        }
      }
      return arg0;
    }, false);
  },
  VIDEO_STREAM_READY_TIMEOUT: function handleVideoStreamReadyTimeout(arg0) {
    let mediaContext;
    let streamKey;
    let userId;
    let videoStreamId;
    ({ userId, mediaContext } = arg0);
    ({ videoStreamId, streamKey } = arg0);
    closure_5["" + mediaContext + ":" + userId] = { videoStreamId, userId, streamKey, mediaContext };
  },
  CLEAR_VIDEO_STREAM_READY_TIMEOUT: function handleClearVideoStreamTimeout(arg0) {
    if (null == dependencyMap2["" + arg0.mediaContext + ":" + arg0.userId]) {
      return false;
    } else {
      delete tmp[tmp2];
    }
  }
});
const result = require("initialize").fileFinishedImporting("stores/VideoStreamStore.tsx");

export default videoStreamStore;