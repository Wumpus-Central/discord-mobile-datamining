// discord_app/modules/local_message_caching/MessageCacheStats.tsx
import obj132 from "../../../_runtime/00002_obj132.js";

class MessageCacheStats {
  constructor() {
    obj = Object.create(new.target.prototype);
    set = new Set();
    obj[0] = set;
    set1 = new Set();
    obj[1] = set1;
    set2 = new Set();
    obj[2] = set2;
    map = new Map();
    obj[3] = map;
    return obj;
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
  obj[1] = tmp;
  if (tmp4 == null) {
    tmp4 = null;
  }
  obj[2] = tmp4;
  obj[3] = limit;
  obj[4] = Date.now();
  const result = fetchLogs.set(combined, obj);
};
prototype["recordChannelFetchedLocal"] = function recordChannelFetchedLocal(basicChannel, INITIAL_MESSAGE_FETCH_KEY, closure_2, c3, closure_4, messages) {
  let tmp = closure_2;
  const channelsFetchedWithLocalMessages = this.channelsFetchedWithLocalMessages;
  channelsFetchedWithLocalMessages.add(basicChannel);
  const fetchLogs = this.fetchLogs;
  if (closure_2 == null) {
    tmp = null;
  }
  let tmp3 = c3;
  if (c3 == null) {
    tmp3 = null;
  }
  const value = fetchLogs.get("" + basicChannel + ":" + INITIAL_MESSAGE_FETCH_KEY + ":" + tmp + ":" + tmp3 + ":" + closure_4);
  if (null != value) {
    const obj = { loadTime: null, count: null, lastMessageId: null };
    const _Date = Date;
    obj[0] = Date.now();
    obj[1] = messages.length;
    const atResult = messages.at(-1);
    let id;
    if (atResult != null) {
      id = atResult.id;
    }
    obj[2] = id;
    value.localMessageDetails = obj;
  }
};
prototype["recordChannelFetchedNetwork"] = function recordChannelFetchedNetwork(closure_0, closure_1_10, closure_1_1, closure_1_2, closure_1_3, body) {
  let tmp = closure_1_1;
  const channelsFetchedNetwork = this.channelsFetchedNetwork;
  channelsFetchedNetwork.add(closure_0);
  const fetchLogs = this.fetchLogs;
  if (closure_1_1 == null) {
    tmp = null;
  }
  let tmp3 = obj1;
  if (obj1 == null) {
    tmp3 = null;
  }
  const value = fetchLogs.get("" + closure_0 + ":" + closure_1_10 + ":" + tmp + ":" + tmp3 + ":" + closure_1_3);
  if (null != value) {
    const obj = { loadTime: null, count: null, lastMessageId: null };
    const _Date = Date;
    obj[0] = Date.now();
    obj[1] = body.length;
    const atResult = body.at(-1);
    let id;
    if (atResult != null) {
      id = atResult.id;
    }
    obj[2] = id;
    value.networkMessageDetails = obj;
  }
};
let obj = Object.create(MessageCacheStats.prototype);
obj[0] = new Set();
let set = new Set();
obj[1] = new Set();
let set1 = new Set();
obj[2] = new Set();
let set2 = new Set();
obj[3] = new Map();
const map = new Map();
let result = obj132.fileFinishedImporting("modules/local_message_caching/MessageCacheStats.tsx");

export default obj;
export const INITIAL_MESSAGE_FETCH_KEY = "NativeAppStartup";