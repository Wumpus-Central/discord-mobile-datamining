// === Module 10547: getMediaPostEmbed ===

// Module 10547 (getMediaPostEmbed)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED", FAILED: 3, [3]: "FAILED" };
let closure_1 = {};
let closure_2 = {};
const Store = initializeDefault.Store;
class MediaPostEmbedStore extends Store {
}
const prototype = MediaPostEmbedStore.prototype;
prototype["getMediaPostEmbed"] = function getMediaPostEmbed(mediaPostEmbedChannelId) {
  if (null != mediaPostEmbedChannelId) {
    return table[mediaPostEmbedChannelId];
  }
};
prototype["getEmbedFetchState"] = function getEmbedFetchState(mediaPostEmbedChannelId) {
  let NOT_FETCHED = table2[mediaPostEmbedChannelId];
  if (NOT_FETCHED == null) {
    NOT_FETCHED = obj.NOT_FETCHED;
  }
  return NOT_FETCHED;
};
prototype["getMediaPostEmbeds"] = function getMediaPostEmbeds() {
  return closure_1;
};
MediaPostEmbedStore.displayName = "MediaPostEmbedStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_1 = {};
    closure_2 = {};
  },
  MEDIA_POST_EMBED_FETCH: function handleFetchMediaPostEmbed(threadId) {
    closure_2[threadId.threadId] = obj.FETCHING;
  },
  MEDIA_POST_EMBED_FETCH_SUCCESS: function handleFetchMediaPostEmbedSuccess(threadId) {
    threadId = threadId.threadId;
    obj = {};
    const merged = Object.assign(obj);
    obj[threadId] = threadId.mediaPostEmbed;
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
const mediaPostEmbedStore = new MediaPostEmbedStore(dispatcherDefault, obj);
const result = require("set").fileFinishedImporting("modules/media_channel/MediaPostEmbedStore.tsx");

export default mediaPostEmbedStore;
export const FetchState = obj;