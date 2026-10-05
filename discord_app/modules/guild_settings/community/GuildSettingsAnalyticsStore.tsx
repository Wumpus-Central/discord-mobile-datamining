// === Module 17854: GuildSettingsAnalyticsStore ===

// Module 17854 (GuildSettingsAnalyticsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import createCompounderDefault from "createCompounder" /* 17855 */;
import size from "module_2" /* 2 */;

let closure_3;

function handleFetchSuccess(arg0) {
  let guildId;
  let stats;
  ({ guildId, stats } = arg0);
  let c4 = null;
  const obj = {};
  const obj2 = {};
  const first = stats[0];
  closure_3 = stats[1];
  if (null != first) {
    let tmp2 = first;
    const item = first.forEach((item) => {
      if (null != first[item]) {
        const tmp8 = createCompounderDefault(item);
        const tmp2 = null != closure_3 && 0 !== closure_3[item];
        if (tmp2) {
          const _HermesInternal = HermesInternal;
          obj["" + tmp8 + "Change"] = 100 * (first[item] - closure_3[item]) / closure_3[item];
        }
        obj2[tmp8] = first[item];
      }
    });
  }
  const obj3 = {};
  const merged = Object.assign(obj2);
  const merged1 = Object.assign(obj);
  const merged2 = Object.assign(closure_3[guildId]);
  closure_3[guildId] = obj3;
}
function handleFetchFailure(error) {
  code = error.error.code;
}
let closure_2 = ["pct_retained", "new_members", "visitors", "communicators"];
const _false = {};
let code = null;
const Store = get_initializedDefault.Store;
class GuildSettingsAnalyticsStore extends Store {
  getOverviewAnalytics(arg0) {
    return closure_3[arg0];
  }
  getError() {
    return code;
  }
}
const prototype = GuildSettingsAnalyticsStore.prototype;
GuildSettingsAnalyticsStore.displayName = "GuildSettingsAnalyticsStore";
let obj = { GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS: handleFetchSuccess, GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS: handleFetchSuccess, GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS: handleFetchSuccess, GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE: handleFetchFailure, GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE: handleFetchFailure, GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE: handleFetchFailure };
const guildSettingsAnalyticsStore = new GuildSettingsAnalyticsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild_settings/community/GuildSettingsAnalyticsStore.tsx");

export default guildSettingsAnalyticsStore;