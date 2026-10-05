// === Module 11157: ChannelLatestMessageLoadingStatsManager ===

// Module 11157 (ChannelLatestMessageLoadingStatsManager)
import Constants from "Constants" /* 1085 */;
import Clickstream from "Clickstream" /* 6974 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
class ChannelLatestMessageLoadingStatsManager {
  constructor(label) {
    const obj = Object.create(new.target.prototype);
    obj.label = label;
    return obj;
  }
  start(channelId) {
    this.latestChannelMessagesLoad = { channelId: channelId.channelId, startMs: Date.now() };
    ({ channelId: channelId.channelId, startMs: Date.now() });
  }
  cancel() {
    this.latestChannelMessagesLoad = undefined;
  }
  finish(channelId) {
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
        const obj2 = { load_duration_ms: diff, were_messages_cached: channelId.areMessagesCached, is_first_load: !hasItem };
        const obj = Clickstream;
        obj.trackClickstream(AnalyticEvents.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM, obj2);
        tmp.latestChannelMessagesLoad = undefined;
      }
    }
  }
}
const prototype = ChannelLatestMessageLoadingStatsManager.prototype;
ChannelLatestMessageLoadingStatsManager.seenChannelIds = new Set();
new Set();
const result = size.fileFinishedImporting("modules/messages/native/ChannelLatestMessageLoadingStatsManager.tsx");

export default ChannelLatestMessageLoadingStatsManager;