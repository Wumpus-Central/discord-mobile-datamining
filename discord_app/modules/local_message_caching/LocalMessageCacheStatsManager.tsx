// === Module 16814: makeLogLine ===

// Module 16814 (makeLogLine)
import ME from "ME";
import "initialize";

let c3;
let obj1;
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
    const fetchLogs = importDefault(6844).fetchLogs;
    const mapped = Array.from(fetchLogs.values()).map(makeLogLine);
    let obj = importDefault(698);
    obj = { num_channels_fetch_started: null, num_channels_local_cached: null, num_channels_fetched_network: null, num_times_backgrounded: null, fetch_entries: null };
    obj[0] = importDefault(6844).channelsFetchStarted.size;
    obj[1] = importDefault(6844).channelsFetchedWithLocalMessages.size;
    obj[2] = importDefault(6844).channelsFetchedNetwork.size;
    const sum = c4 + 1;
    c4 = sum;
    obj[3] = sum;
    obj[4] = mapped;
    obj.track(constants.CACHE_STATS_RECORDED, obj);
    const arr = Array.from(fetchLogs.values());
  }
}
({ AnalyticEvents: obj1, AppStates: c3 } = ME);
let c4 = 0;
let prototype = function LocalMessageCacheStatsManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { APP_STATE_UPDATE: handleAppStateUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype = new prototype();
const result = require("expandEventProperties").fileFinishedImporting("modules/local_message_caching/LocalMessageCacheStatsManager.tsx");

export default prototype;