// === Module 18428: GuildBoostingProgressBarActionCreators ===

// Module 18428 (GuildBoostingProgressBarActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/GuildBoostingProgressBarActionCreators.tsx");

export function updateGuildPremiumSubscriptionCount(c0, premiumCount) {
  DispatcherDefault.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_UPDATE", guildId: importDefault, premiumCount });
}
export function resetGuildPremiumSubscriptionCount() {
  DispatcherDefault.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_RESET" });
}