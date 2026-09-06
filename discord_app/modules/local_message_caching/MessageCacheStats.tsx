// === Module 7488: MessageCacheStats ===

// Module 7488 (MessageCacheStats)
import size from "module_2" /* 2 */;

class MessageCacheStats {
  constructor() {
    merged = Object.assign({ channelsFetchStarted: null, channelsFetchedWithLocalMessages: null, channelsFetchedNetwork: null, fetchLogs: null });
    set = new Set();
    merged[0] = set;
    set1 = new Set();
    merged[1] = set1;
    set2 = new Set();
    merged[2] = set2;
    map = new Map();
    merged[3] = map;
    return merged;
  }
}
const prototype = MessageCacheStats.prototype;
prototype["recordChannelFetchStart"] = function recordChannelFetchStart(channelId, timestamp, before, after, limit) {
  let tmp = before;
  const channelsFetchStarted = this.channelsFetchStarted;
  channelsFetchStarted.add(channelId);
  const fetchLogs = this.fetchLogs;
  let tmp3 = before;
  if (before == null) {
    tmp3 = null;
  }
  let tmp4 = after;
  let tmp5 = after;
  if (after == null) {
    tmp5 = null;
  }
  const obj = { channelId, before: null, after: null, limit: null, startTime: null };
  const combined = "" + channelId + ":" + timestamp + ":" + tmp3 + ":" + tmp5 + ":" + limit;
  if (tmp == null) {
    tmp = null;
  }
  obj.before = tmp;
  if (tmp4 == null) {
    tmp4 = null;
  }
  obj.after = tmp4;
  obj.limit = limit;
  obj.startTime = Date.now();
  const result = fetchLogs.set(combined, obj);
};
prototype["recordChannelFetchedLocal"] = function recordChannelFetchedLocal(arg0, INITIAL_MESSAGE_FETCH_KEY, arg2, arg3, arg4, messages) {
  let tmp = arg2;
  const channelsFetchedWithLocalMessages = this.channelsFetchedWithLocalMessages;
  channelsFetchedWithLocalMessages.add(arg0);
  const fetchLogs = this.fetchLogs;
  if (arg2 == null) {
    tmp = null;
  }
  let tmp3 = arg3;
  if (arg3 == null) {
    tmp3 = null;
  }
  value = fetchLogs.get("" + arg0 + ":" + INITIAL_MESSAGE_FETCH_KEY + ":" + tmp + ":" + tmp3 + ":" + arg4);
  if (null != value) {
    const obj = { loadTime: null, count: null, lastMessageId: null };
    const _Date = Date;
    obj.loadTime = Date.now();
    obj.count = messages.length;
    const atResult = messages.at(-1);
    let id;
    if (atResult != null) {
      id = atResult.id;
    }
    obj.lastMessageId = id;
    value.localMessageDetails = obj;
  }
};
prototype["recordChannelFetchedNetwork"] = function recordChannelFetchedNetwork(channelId, timestamp, before, after, limit, body) {
  let tmp = before;
  const channelsFetchedNetwork = this.channelsFetchedNetwork;
  channelsFetchedNetwork.add(channelId);
  const fetchLogs = this.fetchLogs;
  if (before == null) {
    tmp = null;
  }
  let tmp3 = after;
  if (after == null) {
    tmp3 = null;
  }
  value = fetchLogs.get("" + channelId + ":" + timestamp + ":" + tmp + ":" + tmp3 + ":" + limit);
  if (null != value) {
    const obj = { loadTime: null, count: null, lastMessageId: null };
    const _Date = Date;
    obj.loadTime = Date.now();
    obj.count = body.length;
    const atResult = body.at(-1);
    let id;
    if (atResult != null) {
      id = atResult.id;
    }
    obj.lastMessageId = id;
    value.networkMessageDetails = obj;
  }
};
let merged = Object.assign({ channelsFetchStarted: null, channelsFetchedWithLocalMessages: null, channelsFetchedNetwork: null, fetchLogs: null });
merged[0] = new Set();
let set = new Set();
merged[1] = new Set();
let set1 = new Set();
merged[2] = new Set();
let set2 = new Set();
merged[3] = new Map();
let result = size.fileFinishedImporting("modules/local_message_caching/MessageCacheStats.tsx");

export default merged;
export const INITIAL_MESSAGE_FETCH_KEY = "NativeAppStartup";