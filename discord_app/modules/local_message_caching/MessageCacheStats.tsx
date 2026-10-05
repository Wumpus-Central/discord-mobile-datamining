// === Module 6997: MessageCacheStats ===

// Module 6997 (MessageCacheStats)
import size from "module_2" /* 2 */;

class MessageCacheStats {
  constructor() {
    const merged = Object.assign({ channelsFetchStarted: null, channelsFetchedWithLocalMessages: null, channelsFetchedNetwork: null, fetchLogs: null });
    merged[0] = new Set();
    new Set();
    merged[1] = new Set();
    new Set();
    merged[2] = new Set();
    new Set();
    merged[3] = new Map();
    new Map();
    return merged;
  }
  recordChannelFetchStart(channelId, timestamp, before, after, limit) {
    let tmp = before;
    const channelsFetchStarted = this.channelsFetchStarted;
    channelsFetchStarted.add(channelId);
    const fetchLogs = this.fetchLogs;
    let tmp3 = before;
    set = fetchLogs.set;
    if (before == null) {
      tmp3 = null;
    }
    let tmp4 = after;
    let tmp5 = after;
    if (after == null) {
      tmp5 = null;
    }
    const obj = { channelId, before: tmp, after: tmp4, limit, startTime: Date.now() };
    const combined = "" + channelId + ":" + timestamp + ":" + tmp3 + ":" + tmp5 + ":" + limit;
    if (tmp == null) {
      tmp = null;
    }
    if (tmp4 == null) {
      tmp4 = null;
    }
    const result = set(combined, obj);
  }
  recordChannelFetchedLocal(channelId, INITIAL_MESSAGE_FETCH_KEY, arg2, arg3, arg4, messages) {
    let id;
    let tmp = arg2;
    const channelsFetchedWithLocalMessages = this.channelsFetchedWithLocalMessages;
    channelsFetchedWithLocalMessages.add(channelId);
    const fetchLogs = this.fetchLogs;
    const get = fetchLogs.get;
    if (arg2 == null) {
      tmp = null;
    }
    let tmp3 = arg3;
    if (arg3 == null) {
      tmp3 = null;
    }
    const value = get("" + channelId + ":" + INITIAL_MESSAGE_FETCH_KEY + ":" + tmp + ":" + tmp3 + ":" + arg4);
    if (null != value) {
      const _Date = Date;
      const obj = { loadTime: Date.now(), count: messages.length, lastMessageId: id };
      const atResult = messages.at(-1);
      id = undefined;
      if (atResult != null) {
        id = atResult.id;
      }
      value.localMessageDetails = obj;
    }
  }
  recordChannelFetchedNetwork(channelId, timestamp, before, after, limit, body) {
    let id;
    let tmp = before;
    const channelsFetchedNetwork = this.channelsFetchedNetwork;
    channelsFetchedNetwork.add(channelId);
    const fetchLogs = this.fetchLogs;
    const get = fetchLogs.get;
    if (before == null) {
      tmp = null;
    }
    let tmp3 = after;
    if (after == null) {
      tmp3 = null;
    }
    const value = get("" + channelId + ":" + timestamp + ":" + tmp + ":" + tmp3 + ":" + limit);
    if (null != value) {
      const _Date = Date;
      const obj = { loadTime: Date.now(), count: body.length, lastMessageId: id };
      const atResult = body.at(-1);
      id = undefined;
      if (atResult != null) {
        id = atResult.id;
      }
      value.networkMessageDetails = obj;
    }
  }
}
const prototype = MessageCacheStats.prototype;
let merged = Object.assign({ channelsFetchStarted: null, channelsFetchedWithLocalMessages: null, channelsFetchedNetwork: null, fetchLogs: null });
let set = new Set();
merged[0] = set;
const set1 = new Set();
merged[1] = set1;
const set2 = new Set();
merged[2] = set2;
const map = new Map();
merged[3] = map;
let result = size.fileFinishedImporting("modules/local_message_caching/MessageCacheStats.tsx");

export default merged;
export const INITIAL_MESSAGE_FETCH_KEY = "NativeAppStartup";