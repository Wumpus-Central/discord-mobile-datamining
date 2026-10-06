// === Module 5040: ApplicationStreamPreviewStore ===

// Module 5040 (ApplicationStreamPreviewStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 4938 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4948 */;
import size from "module_2" /* 2 */;

let closure_4, closure_5;

function reset() {
  closure_4 = {};
  closure_5 = {};
}
const StreamTypes = Constants.StreamTypes;
const React3 = {};
const hasOwnProperty = {};
const set = new Set();
const Store = get_initializedDefault.Store;
class ApplicationStreamPreviewStore extends Store {
  getPreviewURL(guildId, channelId, ownerId) {
    let CALL;
    const tmp = StreamKeyUtils;
    const encodeStreamKey = tmp.encodeStreamKey;
    if (null != guildId) {
      CALL = StreamTypes.GUILD;
    } else {
      CALL = StreamTypes.CALL;
    }
    const obj = { streamType: CALL, guildId, channelId, ownerId };
    const tmp4 = closure_4[encodeStreamKey(tmp, obj)];
    let url;
    if (tmp4 != null) {
      url = tmp4.url;
    }
    return url;
  }
  shouldFetchPreview(guildId, channelId, ownerId) {
    let CALL;
    const encodeStreamKey = StreamKeyUtils.encodeStreamKey;
    StreamKeyUtils;
    if (null != guildId) {
      CALL = StreamTypes.GUILD;
    } else {
      CALL = StreamTypes.CALL;
    }
    const obj = { streamType: CALL, guildId, channelId, ownerId };
    const encodeStreamKeyResult = encodeStreamKey(obj);
    let num = closure_5[encodeStreamKeyResult];
    if (num == null) {
      num = 0;
    }
    let tmp6 = null != tmp5;
    if (tmp6) {
      const _Date = Date;
      tmp6 = Date.now() > tmp5.expires;
    }
    const tmp8 = (null == tmp5 && num < 5 || tmp6) && !set.has(encodeStreamKeyResult);
    return tmp8;
  }
  getPreviewURLForStreamKey(streamKey) {
    const obj = StreamKeyUtils;
    const decodeStreamKeyResult = obj.decodeStreamKey(streamKey);
    return this.getPreviewURL(decodeStreamKeyResult.guildId, decodeStreamKeyResult.channelId, decodeStreamKeyResult.ownerId);
  }
  getIsPreviewLoading(guildId, channelId, ownerId) {
    let CALL;
    const encodeStreamKey = StreamKeyUtils.encodeStreamKey;
    StreamKeyUtils;
    if (null != guildId) {
      CALL = StreamTypes.GUILD;
    } else {
      CALL = StreamTypes.CALL;
    }
    const obj = { streamType: CALL, guildId, channelId, ownerId };
    return set.has(encodeStreamKey(obj));
  }
}
const prototype = ApplicationStreamPreviewStore.prototype;
ApplicationStreamPreviewStore.displayName = "ApplicationStreamPreviewStore";
let obj = {
  CONNECTION_OPEN: reset,
  LOGOUT: reset,
  STREAM_PREVIEW_FETCH_START: function handleStreamPreviewFetch(streamKey) {
    streamKey = streamKey.streamKey;
    let num = closure_5[streamKey];
    if (num == null) {
      num = 0;
    }
    closure_5[streamKey] = num + 1;
    set.add(streamKey);
  },
  STREAM_PREVIEW_FETCH_SUCCESS: function handleStreamPreviewFetchSuccess(streamKey) {
    streamKey = streamKey.streamKey;
    closure_4[streamKey] = { url: streamKey.previewURL, expires: Date.now() + 120000 };
    closure_5[streamKey] = 0;
    ({ url: streamKey.previewURL, expires: Date.now() + 120000 });
    set.delete(streamKey);
  },
  STREAM_PREVIEW_FETCH_FAIL: function handleStreamPreviewFetchFail(arg0) {
    let retryAfter;
    let streamKey;
    ({ streamKey, retryAfter } = arg0);
    const timestamp = Date.now();
    if (null == retryAfter) {
      retryAfter = 10000 * closure_5[streamKey];
    }
    closure_4[streamKey] = { url: null, expires: timestamp + retryAfter };
    set.delete(streamKey);
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    let obj = _modDef12;
    const isEmptyResult = obj.isEmpty(closure_4);
    let reduced = !isEmptyResult;
    if (isEmptyResult) {
      const tmpResult = _modDef12;
      reduced = !tmpResult.isEmpty(closure_5);
    }
    if (reduced) {
      reduced = voiceStates.reduce((acc, guildId) => {
        guildId = guildId.guildId;
        if (guildId.selfStream) {
          return acc;
        } else {
          let CALL;
          const encodeStreamKey = StreamKeyUtils.encodeStreamKey;
          StreamKeyUtils;
          if (null != guildId) {
            CALL = constants.GUILD;
          } else {
            CALL = constants.CALL;
          }
          const obj = { streamType: CALL, guildId, channelId: tmp2, ownerId: tmp };
          encodeStreamKey(obj);
          delete closure_1_4[tmp9];
          delete closure_1_5[tmp9];
          return true;
        }
      }, false);
    }
    return reduced;
  }
};
const applicationStreamPreviewStore = new ApplicationStreamPreviewStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/ApplicationStreamPreviewStore.tsx");

export default applicationStreamPreviewStore;