// === Module 4704: ApplicationStreamPreviewStore ===

// Module 4704 (ApplicationStreamPreviewStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 4602 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4612 */;
import size from "module_2" /* 2 */;

function reset() {
  closure_4 = {};
  closure_5 = {};
}
const StreamTypes = Constants.StreamTypes;
const dependencyMap = {};
const dependencyMap2 = {};
const set = new Set();
const Store = initializeDefault.Store;
class ApplicationStreamPreviewStore extends Store {
}
const prototype = ApplicationStreamPreviewStore.prototype;
prototype["getPreviewURL"] = function getPreviewURL(guildId, channelId, ownerId) {
  let obj = StreamKeyUtils;
  if (null != guildId) {
    let CALL = StreamTypes.GUILD;
  } else {
    CALL = StreamTypes.CALL;
  }
  obj = { streamType: CALL, guildId, channelId, ownerId };
  const tmp3 = dependencyMap[obj.encodeStreamKey(obj, obj)];
  let url;
  if (tmp3 != null) {
    url = tmp3.url;
  }
  return url;
};
prototype["shouldFetchPreview"] = function shouldFetchPreview(guildId, channelId, ownerId) {
  let obj = StreamKeyUtils;
  if (null != guildId) {
    let CALL = StreamTypes.GUILD;
  } else {
    CALL = StreamTypes.CALL;
  }
  obj = { streamType: CALL, guildId, channelId, ownerId };
  const encodeStreamKeyResult = obj.encodeStreamKey(obj);
  let num = dependencyMap2[encodeStreamKeyResult];
  if (num == null) {
    num = 0;
  }
  let tmp5 = null != tmp4;
  if (tmp5) {
    const _Date = Date;
    tmp5 = Date.now() > tmp4.expires;
  }
  let tmp7 = null == tmp4;
  if (tmp7) {
    tmp7 = num < 5;
  }
  if (!tmp7) {
    tmp7 = tmp5;
  }
  if (tmp7) {
    tmp7 = !set.has(encodeStreamKeyResult);
  }
  return tmp7;
};
prototype["getPreviewURLForStreamKey"] = function getPreviewURLForStreamKey(streamKey) {
  const decodeStreamKeyResult = StreamKeyUtils.decodeStreamKey(streamKey);
  return this.getPreviewURL(decodeStreamKeyResult.guildId, decodeStreamKeyResult.channelId, decodeStreamKeyResult.ownerId);
};
prototype["getIsPreviewLoading"] = function getIsPreviewLoading(guildId, channelId, ownerId) {
  let obj = StreamKeyUtils;
  if (null != guildId) {
    let CALL = StreamTypes.GUILD;
  } else {
    CALL = StreamTypes.CALL;
  }
  obj = { streamType: CALL, guildId, channelId, ownerId };
  return set.has(obj.encodeStreamKey(obj));
};
ApplicationStreamPreviewStore.displayName = "ApplicationStreamPreviewStore";
const applicationStreamPreviewStore = new ApplicationStreamPreviewStore(DispatcherDefault, {
  CONNECTION_OPEN: reset,
  LOGOUT: reset,
  STREAM_PREVIEW_FETCH_START: function handleStreamPreviewFetch(streamKey) {
    streamKey = streamKey.streamKey;
    let num = dependencyMap2[streamKey];
    if (num == null) {
      num = 0;
    }
    dependencyMap2[streamKey] = num + 1;
    set.add(streamKey);
  },
  STREAM_PREVIEW_FETCH_SUCCESS: function handleStreamPreviewFetchSuccess(streamKey) {
    streamKey = streamKey.streamKey;
    closure_4[streamKey] = { url: streamKey.previewURL, expires: Date.now() + 120000 };
    closure_5[streamKey] = 0;
    set.delete(streamKey);
  },
  STREAM_PREVIEW_FETCH_FAIL: function handleStreamPreviewFetchFail(arg0) {
    ({ streamKey, retryAfter } = arg0);
    const timestamp = Date.now();
    if (null == retryAfter) {
      retryAfter = 10000 * dependencyMap2[streamKey];
    }
    closure_4[streamKey] = { url: null, expires: timestamp + retryAfter };
    set.delete(streamKey);
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    const isEmptyResult = _modDef12.isEmpty(closure_4);
    let reduced = !isEmptyResult;
    if (isEmptyResult) {
      reduced = !_modDef12.isEmpty(closure_5);
      const tmpResult = _modDef12;
    }
    if (reduced) {
      reduced = voiceStates.reduce((acc, guildId) => {
        guildId = guildId.guildId;
        if (guildId.selfStream) {
          return acc;
        } else {
          let obj = StreamKeyUtils;
          if (null != guildId) {
            let CALL = constants.GUILD;
          } else {
            CALL = constants.CALL;
          }
          obj = { streamType: CALL, guildId, channelId: tmp5, ownerId: tmp4 };
          obj.encodeStreamKey(obj);
          delete tmp3[tmp2];
          delete tmp[tmp2];
          return true;
        }
      }, false);
    }
    return reduced;
  }
});
const result = size.fileFinishedImporting("stores/ApplicationStreamPreviewStore.tsx");

export default applicationStreamPreviewStore;