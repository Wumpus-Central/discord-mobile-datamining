// discord_app/modules/guild_settings/community/GuildSettingsAnalyticsStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import _modDef18221 from "../../../../_runtime/metro/18221__.js";

function handleFetchSuccess(arg0) {
  ({ guildId, stats } = arg0);
  c4 = null;
  const obj = {};
  const obj2 = {};
  const first = stats[0];
  dependencyMap = stats[1];
  if (null != first) {
    const item = first.forEach((item) => {
      if (null != first[item]) {
        const tmp8 = _modDef18221(item);
        let tmp2 = null != dependencyMap;
        if (tmp2) {
          tmp2 = 0 !== dependencyMap[item];
        }
        if (tmp2) {
          const _HermesInternal = HermesInternal;
          obj["" + tmp8 + "Change"] = (100 * (first[item] - dependencyMap[item])) / dependencyMap[item];
        }
        obj2[tmp8] = first[item];
      }
    });
  }
  const merged = Object.assign(obj2);
  const merged1 = Object.assign(obj);
  const merged2 = Object.assign(dependencyMap[guildId]);
  dependencyMap[guildId] = {};
}
function handleFetchFailure(error) {
  code = error.error.code;
}
let closure_2 = ["pct_retained", "new_members", "visitors", "communicators"];
let dependencyMap = {};
let code = null;
const Store = initializeDefault.Store;
class GuildSettingsAnalyticsStore extends Store {}
const prototype = GuildSettingsAnalyticsStore.prototype;
prototype["getOverviewAnalytics"] = function getOverviewAnalytics(arg0) {
  return dependencyMap[arg0];
};
prototype["getError"] = function getError() {
  return code;
};
GuildSettingsAnalyticsStore.displayName = "GuildSettingsAnalyticsStore";
const guildSettingsAnalyticsStore = new GuildSettingsAnalyticsStore(DispatcherDefault, {
  GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS: handleFetchSuccess,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS: handleFetchSuccess,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS: handleFetchSuccess,
  GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE: handleFetchFailure,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE: handleFetchFailure,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE: handleFetchFailure,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/community/GuildSettingsAnalyticsStore.tsx");

export default guildSettingsAnalyticsStore;
