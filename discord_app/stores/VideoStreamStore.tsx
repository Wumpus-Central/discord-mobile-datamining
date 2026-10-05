// === Module 9017: VideoStreamStore ===

// Module 9017 (VideoStreamStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 4915 */;
import size from "module_2" /* 2 */;

let closure_4, closure_5;

function makeTimeoutKey(arg0, arg1) {
  return "" + arg0 + ":" + arg1;
}
function clearUser(arg0, arg1) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  if (null != closure_4[arg0]) {
    let tmp15 = arg1;
    let tmp3 = arg1;
    if (arg1 == null) {
      tmp3 = NULL_STRING_GUILD_ID;
    }
    if (null != closure_4[arg0][tmp3]) {
      const _Object = Object;
      const values = Object.values(MediaEngineContextTypes);
      const iter = values[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp9 = tmp !== nextResult && null != tmp;
        if (!tmp9) {
          delete tmp4[tmp6];
          let tmp12 = tmp;
          if (tmp == null) {
            tmp12 = nextResult;
          }
          delete closure_5[makeTimeoutKey(0, tmp12, arg0)];
        }
        continue;
      }
      const tmp14 = closure_4[arg0];
      if (tmp15 == null) {
        tmp15 = NULL_STRING_GUILD_ID;
      }
      tmp14[tmp15] = closure_4[arg0][tmp3];
    }
  }
}
const NULL_STRING_GUILD_ID = Constants.NULL_STRING_GUILD_ID;
const MediaEngineContextTypes = Constants2.MediaEngineContextTypes;
let id = null;
let sessionId = null;
const React3 = {};
const hasOwnProperty = {};
const Store = get_initializedDefault.Store;
class VideoStreamStore extends Store {
  getStreamId(arg0, arg1) {
    let DEFAULT = arg2;
    if (arg2 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let streamId;
    if (closure_4[arg0] != null) {
      let tmp4 = arg1;
      if (arg1 == null) {
        tmp4 = NULL_STRING_GUILD_ID;
      }
      if (closure_4[arg0][tmp4] != null) {
        if (closure_4[arg0][tmp4][DEFAULT] != null) {
          streamId = tmp6.streamId;
        }
      }
    }
    return streamId;
  }
  getUserStreamData(userId, guildId) {
    let DEFAULT = STREAM;
    if (STREAM === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp3;
    if (closure_4[userId] != null) {
      let tmp4 = guildId;
      if (guildId == null) {
        tmp4 = NULL_STRING_GUILD_ID;
      }
      if (closure_4[userId][tmp4] != null) {
        tmp3 = tmp5[DEFAULT];
      }
    }
    return tmp3;
  }
  getTimedoutVideos() {
    return closure_5;
  }
  getTimedoutVideo(arg0, arg1) {
    return closure_5["" + arg0 + ":" + arg1];
  }
}
const prototype = VideoStreamStore.prototype;
VideoStreamStore.displayName = "VideoStreamStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(user) {
    id = user.user.id;
    sessionId = user.sessionId;
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(user) {
    id = user.user.id;
    sessionId = user.sessionId;
  },
  RTC_CONNECTION_VIDEO: function handleVideo(arg0) {
    let context;
    let guildId;
    let streamId;
    let userId;
    ({ userId, guildId, streamId, context } = arg0);
    if (null != streamId) {
      if (!(userId in closure_4)) {
        closure_4[userId] = {};
      }
      let tmp7 = guildId;
      const tmp6 = closure_4[userId];
      if (guildId == null) {
        tmp7 = NULL_STRING_GUILD_ID;
      }
      let obj = tmp6[tmp7];
      if (obj == null) {
        obj = {};
      }
      let tmp10 = guildId;
      const tmp9 = closure_4[userId];
      if (guildId == null) {
        tmp10 = NULL_STRING_GUILD_ID;
      }
      const obj2 = {};
      const merged = Object.assign(obj);
      const obj3 = { streamId };
      obj2[context] = obj3;
      tmp9[tmp10] = obj2;
      const _HermesInternal = HermesInternal;
      delete closure_5["" + context + ":" + userId];
    } else {
      clearUser(userId, guildId, context);
    }
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((acc, item) => {
      let channelId;
      let guildId;
      let userId;
      ({ userId, channelId, guildId } = item);
      if (null == channelId) {
        if (userId === id) {
          if (tmp !== sessionId) {
            return acc;
          } else {
            closure_4 = {};
            closure_5 = {};
          }
        }
        return true;
      }
      if (null == channelId) {
        let tmp5;
        if (closure_4[userId] != null) {
          let tmp6 = guildId;
          if (guildId == null) {
            tmp6 = NULL_STRING_GUILD_ID;
          }
          tmp5 = tmp4[tmp6];
        }
        if (null != tmp5) {
          clearUser(userId, guildId);
        }
      }
      return acc;
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
  CLEAR_VIDEO_STREAM_READY_TIMEOUT: function handleClearVideoStreamTimeout(mediaContext) {
    const combined = "" + mediaContext.mediaContext + ":" + mediaContext.userId;
    if (null == closure_5[combined]) {
      return false;
    } else {
      delete closure_5[tmp];
    }
  }
};
const videoStreamStore = new VideoStreamStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/VideoStreamStore.tsx");

export default videoStreamStore;