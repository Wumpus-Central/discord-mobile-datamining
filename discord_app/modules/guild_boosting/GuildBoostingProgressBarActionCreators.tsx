// === Module 16223: GuildBoostingProgressBarActionCreators ===

// Module 16223 (GuildBoostingProgressBarActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/GuildBoostingProgressBarActionCreators.tsx");

export const updateGuildPremiumSubscriptionCount = function updateGuildPremiumSubscriptionCount(guildId, premiumCount) {
  importDefault = guildId;
  dependencyMap = premiumCount;
  DispatcherDefault.wait(() => {
    const obj = { type: "APPLIED_GUILD_BOOST_COUNT_UPDATE", guildId, premiumCount };
    obj.dispatch(obj);
  });
};
export const resetGuildPremiumSubscriptionCount = function resetGuildPremiumSubscriptionCount() {
  DispatcherDefault.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_RESET" });
};