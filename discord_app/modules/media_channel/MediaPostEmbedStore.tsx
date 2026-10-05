// === Module 11085: MediaPostEmbedStore ===

// Module 11085 (MediaPostEmbedStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let closure_1, closure_2;

const FetchState = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED", FAILED: 3, [3]: "FAILED" };
const React2 = {};
const Store = get_initializedDefault.Store;
class MediaPostEmbedStore extends Store {
  getMediaPostEmbed(mediaPostEmbedChannelId) {
    if (null != mediaPostEmbedChannelId) {
      return closure_1[mediaPostEmbedChannelId];
    }
  }
  getEmbedFetchState(mediaPostEmbedChannelId) {
    let NOT_FETCHED = closure_2[mediaPostEmbedChannelId];
    if (NOT_FETCHED == null) {
      NOT_FETCHED = obj.NOT_FETCHED;
    }
    return NOT_FETCHED;
  }
  getMediaPostEmbeds() {
    return closure_1;
  }
}
const prototype = MediaPostEmbedStore.prototype;
MediaPostEmbedStore.displayName = "MediaPostEmbedStore";
const obj2 = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_1 = {};
    closure_2 = {};
  },
  MEDIA_POST_EMBED_FETCH: function handleFetchMediaPostEmbed(threadId) {
    closure_2[threadId.threadId] = obj.FETCHING;
  },
  MEDIA_POST_EMBED_FETCH_SUCCESS: function handleFetchMediaPostEmbedSuccess(threadId) {
    threadId = threadId.threadId;
    const obj = {};
    const mediaPostEmbed = threadId.mediaPostEmbed;
    const merged = Object.assign(closure_1);
    obj[threadId] = mediaPostEmbed;
    closure_1 = obj;
    closure_2[threadId] = obj.FETCHED;
  },
  MEDIA_POST_EMBED_FETCH_FAILURE: function handleFetchMediaPostFailure(threadId) {
    closure_2[threadId.threadId] = obj.FAILED;
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    if (!isSwitchingAccount.isSwitchingAccount) {
      closure_1 = {};
      closure_2 = {};
    }
  }
};
const mediaPostEmbedStore = new MediaPostEmbedStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/media_channel/MediaPostEmbedStore.tsx");

export default mediaPostEmbedStore;
export { FetchState };