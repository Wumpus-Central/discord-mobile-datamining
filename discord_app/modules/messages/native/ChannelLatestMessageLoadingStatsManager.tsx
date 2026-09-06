// === Module 11541: ChannelLatestMessageLoadingStatsManager ===

// Module 11541 (ChannelLatestMessageLoadingStatsManager)
import Constants from "Constants" /* 1074 */;
import Clickstream from "Clickstream" /* 7465 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
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
        const seenChannelIds = ChannelLatestMessageLoadingStatsManager.seenChannelIds;
        seenChannelIds.add(channelId.channelId);
      }
      const obj = { load_duration_ms: diff, were_messages_cached: channelId.areMessagesCached, is_first_load: !hasItem };
      obj.trackClickstream(AnalyticEvents.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM, obj);
      tmp.latestChannelMessagesLoad = undefined;
      const tmp12 = !hasItem;
    }
  }
};
ChannelLatestMessageLoadingStatsManager.seenChannelIds = new Set();
const result = size.fileFinishedImporting("modules/messages/native/ChannelLatestMessageLoadingStatsManager.tsx");

export default ChannelLatestMessageLoadingStatsManager;