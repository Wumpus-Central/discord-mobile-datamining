// === Module 18083: LocalMessageCacheStatsManager ===

// Module 18083 (LocalMessageCacheStatsManager)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import MessageCacheStatsDefault from "MessageCacheStats" /* 6997 */;
import Constants from "Constants" /* 1085 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
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
  let sum;
  if (state.state === constants2.BACKGROUND) {
    const _Array = Array;
    const fetchLogs = MessageCacheStatsDefault.fetchLogs;
    const fromResult = from(fetchLogs.values());
    const mapped = fromResult.map(makeLogLine);
    const obj = { num_channels_fetch_started: MessageCacheStatsDefault.channelsFetchStarted.size, num_channels_local_cached: MessageCacheStatsDefault.channelsFetchedWithLocalMessages.size, num_channels_fetched_network: MessageCacheStatsDefault.channelsFetchedNetwork.size, num_times_backgrounded: sum, fetch_entries: mapped };
    const track = AnalyticsUtilsDefault.track;
    const CACHE_STATS_RECORDED = constants.CACHE_STATS_RECORDED;
    AnalyticsUtilsDefault;
    sum = c4 + 1;
    c4 = sum;
    track(CACHE_STATS_RECORDED, obj);
  }
}
({ AnalyticEvents: c2, AppStates: c3 } = Constants);
let c4 = 0;
class LocalMessageCacheStatsManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { APP_STATE_UPDATE: handleAppStateUpdate };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const localMessageCacheStatsManager = new LocalMessageCacheStatsManager();
const result = size.fileFinishedImporting("modules/local_message_caching/LocalMessageCacheStatsManager.tsx");

export default localMessageCacheStatsManager;