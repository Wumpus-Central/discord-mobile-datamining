// discord_app/modules/messages/native/ChannelLatestMessageLoadingStatsManager.tsx
import Constants from "../../../Constants.tsx";
import Clickstream from "../../app_analytics/clickstream/Clickstream.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
      const obj = {
        load_duration_ms: diff,
        were_messages_cached: channelId.areMessagesCached,
        is_first_load: !hasItem,
      };
      obj.trackClickstream(AnalyticEvents.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM, obj);
      tmp.latestChannelMessagesLoad = undefined;
      const tmp12 = !hasItem;
    }
  }
};
ChannelLatestMessageLoadingStatsManager.seenChannelIds = new Set();
const result = size.fileFinishedImporting("modules/messages/native/ChannelLatestMessageLoadingStatsManager.tsx");

export default ChannelLatestMessageLoadingStatsManager;
