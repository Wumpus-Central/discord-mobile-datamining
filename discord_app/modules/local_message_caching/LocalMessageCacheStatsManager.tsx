// === Module 17890: LocalMessageCacheStatsManager ===

// Module 17890 (LocalMessageCacheStatsManager)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import MessageCacheStatsDefault from "MessageCacheStats" /* 7488 */;
import Constants from "Constants" /* 1074 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;
import size from "module_2" /* 2 */;

function makeLogLine(channelId) {
  const items = [channelId.channelId, , , ];
  let str = "-1";
  let str2 = "-1";
  if (null != channelId.localMessageDetails) {
    str2 = channelId.localMessageDetails.loadTime - channelId.startTime;
  }
  items[1] = str2;
  if (null != channelId.networkMessageDetails) {
    str = channelId.networkMessageDetails.loadTime - channelId.startTime;
  }
  items[2] = str;
  let str3 = "incomplete";
  if (null != channelId.localMessageDetails) {
    str3 = "incomplete";
    if (null != channelId.networkMessageDetails) {
      let str5 = "mismatch";
      if (channelId.localMessageDetails.count === channelId.networkMessageDetails.count) {
        str5 = "mismatch";
        if (channelId.localMessageDetails.lastMessageId === channelId.networkMessageDetails.lastMessageId) {
          str5 = "match";
        }
      }
      str3 = str5;
    }
  }
  items[3] = str3;
  return items.join(":");
}
function handleAppStateUpdate(state) {
  if (state.state === constants2.BACKGROUND) {
    const _Array = Array;
    const fetchLogs = MessageCacheStatsDefault.fetchLogs;
    const mapped = Array.from(fetchLogs.values()).map(makeLogLine);
    const obj = { num_channels_fetch_started: MessageCacheStatsDefault.channelsFetchStarted.size, num_channels_local_cached: MessageCacheStatsDefault.channelsFetchedWithLocalMessages.size, num_channels_fetched_network: MessageCacheStatsDefault.channelsFetchedNetwork.size, num_times_backgrounded: null, fetch_entries: null };
    const sum = c4 + 1;
    c4 = sum;
    obj.num_times_backgrounded = sum;
    obj.fetch_entries = mapped;
    obj.track(constants.CACHE_STATS_RECORDED, obj);
    const arr = Array.from(fetchLogs.values());
  }
}
({ AnalyticEvents: c2, AppStates: c3 } = Constants);
let c4 = 0;
let prototype = function LocalMessageCacheStatsManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { APP_STATE_UPDATE: handleAppStateUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype = new prototype();
const result = size.fileFinishedImporting("modules/local_message_caching/LocalMessageCacheStatsManager.tsx");

export default prototype;