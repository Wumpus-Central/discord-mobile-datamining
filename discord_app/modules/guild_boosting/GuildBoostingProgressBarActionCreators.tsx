// === Module 18169: GuildBoostingProgressBarActionCreators ===

// Module 18169 (GuildBoostingProgressBarActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/GuildBoostingProgressBarActionCreators.tsx");

export function updateGuildPremiumSubscriptionCount(guildId, premiumCount) {
  DispatcherDefault.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_UPDATE", guildId, premiumCount });
}
export function resetGuildPremiumSubscriptionCount() {
  DispatcherDefault.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_RESET" });
}