// discord_app/modules/media_channel/MediaPostEmbedStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

let FetchState = {
  NOT_FETCHED: 0,
  [0]: "NOT_FETCHED",
  FETCHING: 1,
  [1]: "FETCHING",
  FETCHED: 2,
  [2]: "FETCHED",
  FAILED: 3,
  [3]: "FAILED",
};
let closure_1 = {};
let closure_2 = {};
const Store = initializeDefault.Store;
class MediaPostEmbedStore extends Store {}
const prototype = MediaPostEmbedStore.prototype;
prototype["getMediaPostEmbed"] = function getMediaPostEmbed(mediaPostEmbedChannelId) {
  if (null != mediaPostEmbedChannelId) {
    return closure_1[mediaPostEmbedChannelId];
  }
};
prototype["getEmbedFetchState"] = function getEmbedFetchState(mediaPostEmbedChannelId) {
  let NOT_FETCHED = closure_2[mediaPostEmbedChannelId];
  if (NOT_FETCHED == null) {
    NOT_FETCHED = obj.NOT_FETCHED;
  }
  return NOT_FETCHED;
};
prototype["getMediaPostEmbeds"] = function getMediaPostEmbeds() {
  return closure_1;
};
MediaPostEmbedStore.displayName = "MediaPostEmbedStore";
FetchState = {
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
    const merged = Object.assign(closure_1);
    obj[threadId] = threadId.mediaPostEmbed;
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
  },
};
const mediaPostEmbedStore = new MediaPostEmbedStore(DispatcherDefault, FetchState);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_channel/MediaPostEmbedStore.tsx");

export default mediaPostEmbedStore;
export { FetchState };
