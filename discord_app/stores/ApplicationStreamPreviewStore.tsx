// === Module 4704: reset ===

// Module 4704 (reset)
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import dispatcherDefault from "dispatcher" /* 573 */;
import StreamIssueReportReasons from "StreamIssueReportReasons" /* 4602 */;
import isStreamKey from "isStreamKey" /* 4612 */;
import set from "set" /* 2 */;

function reset() {
  closure_4 = {};
  closure_5 = {};
}
const StreamTypes = StreamIssueReportReasons.StreamTypes;
let closure_4 = {};
let closure_5 = {};
let set = new Set();
const Store = initializeDefault.Store;
class ApplicationStreamPreviewStore extends Store {
}
const prototype = ApplicationStreamPreviewStore.prototype;
prototype["getPreviewURL"] = function getPreviewURL(closure_0, channelId, closure_2) {
  let obj = isStreamKey;
  if (null != closure_0) {
    let CALL = StreamTypes.GUILD;
  } else {
    CALL = StreamTypes.CALL;
  }
  obj = { streamType: CALL, guildId: closure_0, channelId, ownerId: closure_2 };
  const tmp3 = dependencyMap[obj.encodeStreamKey(obj, obj)];
  let url;
  if (tmp3 != null) {
    url = tmp3.url;
  }
  return url;
};
prototype["shouldFetchPreview"] = function shouldFetchPreview(c0, closure_1, closure_2) {
  let obj = isStreamKey;
  if (null != c0) {
    let CALL = StreamTypes.GUILD;
  } else {
    CALL = StreamTypes.CALL;
  }
  obj = { streamType: CALL, guildId: c0, channelId: closure_1, ownerId: closure_2 };
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
  const decodeStreamKeyResult = isStreamKey.decodeStreamKey(streamKey);
  return this.getPreviewURL(decodeStreamKeyResult.guildId, decodeStreamKeyResult.channelId, decodeStreamKeyResult.ownerId);
};
prototype["getIsPreviewLoading"] = function getIsPreviewLoading(closure_0, closure_1, closure_2) {
  let obj = isStreamKey;
  if (null != closure_0) {
    let CALL = StreamTypes.GUILD;
  } else {
    CALL = StreamTypes.CALL;
  }
  obj = { streamType: CALL, guildId: closure_0, channelId: closure_1, ownerId: closure_2 };
  return set.has(obj.encodeStreamKey(obj));
};
ApplicationStreamPreviewStore.displayName = "ApplicationStreamPreviewStore";
const applicationStreamPreviewStore = new ApplicationStreamPreviewStore(dispatcherDefault, {
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
    const isEmptyResult = applyDefault.isEmpty(closure_4);
    let reduced = !isEmptyResult;
    if (isEmptyResult) {
      reduced = !applyDefault.isEmpty(closure_5);
      const tmpResult = applyDefault;
    }
    if (reduced) {
      reduced = voiceStates.reduce((arg0, guildId) => {
        guildId = guildId.guildId;
        if (guildId.selfStream) {
          return arg0;
        } else {
          let obj = callback(table[2]);
          if (null != guildId) {
            let CALL = constants.GUILD;
          } else {
            CALL = constants.CALL;
          }
          obj = { streamType: null, guildId: null, channelId: null, ownerId: null };
          obj[0] = CALL;
          obj[1] = guildId;
          obj[2] = tmp5;
          obj[3] = tmp4;
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
const result = set.fileFinishedImporting("stores/ApplicationStreamPreviewStore.tsx");

export default applicationStreamPreviewStore;