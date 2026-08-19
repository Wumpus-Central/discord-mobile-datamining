// discord_app/modules/messages/native/ChannelLatestMessageLoadingStatsManager.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ME from "../../../Constants.tsx";
import isClickstreamEnabled from "../../app_analytics/clickstream/Clickstream.tsx";

const AnalyticEvents = ME.AnalyticEvents;
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
      const obj = { load_duration_ms: null, were_messages_cached: null, is_first_load: null };
      obj[0] = diff;
      obj[1] = channelId.areMessagesCached;
      obj[2] = !hasItem;
      obj.trackClickstream(AnalyticEvents.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM, obj);
      tmp.latestChannelMessagesLoad = undefined;
    }
  }
};
ChannelLatestMessageLoadingStatsManager.seenChannelIds = new Set();
const set = new Set();
const result = obj132.fileFinishedImporting("modules/messages/native/ChannelLatestMessageLoadingStatsManager.tsx");

export default ChannelLatestMessageLoadingStatsManager;