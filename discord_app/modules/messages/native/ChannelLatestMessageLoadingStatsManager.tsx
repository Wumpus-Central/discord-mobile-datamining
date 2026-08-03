import { AnalyticEvents } from "ME";
import set from "set";

let ChannelLatestMessageLoadingStatsManager;
class ChannelLatestMessageLoadingStatsManager {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.label = global;
    return obj;
  }
}
const prototype = ChannelLatestMessageLoadingStatsManager.prototype;
prototype["start"] = function start(channelId) {
  this.latestChannelMessagesLoad = { channelId: channelId.channelId, startMs: Date.now() };
};
prototype["cancel"] = function cancel() {
  this.latestChannelMessagesLoad = undefined;
};
prototype["finish"] = function finish(channelId) {
  const latestChannelMessagesLoad = this.latestChannelMessagesLoad;
  if (null != latestChannelMessagesLoad) {
    if (latestChannelMessagesLoad.channelId === channelId.channelId) {
      const _Date = Date;
      const seenChannelIds2 = ChannelLatestMessageLoadingStatsManager.seenChannelIds;
      const diff = Date.now() - latestChannelMessagesLoad.startMs;
      const hasItem = seenChannelIds2.has(channelId.channelId);
      if (!hasItem) {
        const seenChannelIds = tmp10.seenChannelIds;
        seenChannelIds.add(channelId.channelId);
      }
      let obj = require(6823) /* isClickstreamEnabled */;
      obj = { load_duration_ms: null, were_messages_cached: null, is_first_load: null };
      obj[0] = diff;
      obj[1] = channelId.areMessagesCached;
      obj[2] = !hasItem;
      obj.trackClickstream(AnalyticEvents.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM, obj);
      tmp.latestChannelMessagesLoad = undefined;
      tmp10 = ChannelLatestMessageLoadingStatsManager;
      const tmp12 = !hasItem;
    }
  }
};
let set = new Set();
ChannelLatestMessageLoadingStatsManager.seenChannelIds = set;
const result = set.fileFinishedImporting("modules/messages/native/ChannelLatestMessageLoadingStatsManager.tsx");

export default ChannelLatestMessageLoadingStatsManager;