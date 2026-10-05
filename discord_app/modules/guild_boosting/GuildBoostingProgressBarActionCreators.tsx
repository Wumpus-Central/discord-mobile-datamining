// === Module 16154: GuildBoostingProgressBarActionCreators ===

// Module 16154 (GuildBoostingProgressBarActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

const result = size.fileFinishedImporting("modules/guild_boosting/GuildBoostingProgressBarActionCreators.tsx");

export const updateGuildPremiumSubscriptionCount = function updateGuildPremiumSubscriptionCount(guildId, premiumCount) {
  importDefault = guildId;
  dependencyMap = premiumCount;
  let obj = DispatcherDefault;
  obj.wait(() => {
    const obj = DispatcherDefault;
    const obj2 = { type: "APPLIED_GUILD_BOOST_COUNT_UPDATE", guildId, premiumCount };
    obj.dispatch(obj2);
  });
};
export const resetGuildPremiumSubscriptionCount = function resetGuildPremiumSubscriptionCount() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_RESET" });
};