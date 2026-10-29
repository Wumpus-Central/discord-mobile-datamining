// discord_app/modules/guild_boosting/GuildBoostingProgressBarActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_boosting/GuildBoostingProgressBarActionCreators.tsx");

export function updateGuildPremiumSubscriptionCount(guildId, premiumCount) {
  DispatcherDefault.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_UPDATE", guildId, premiumCount });
}
export function resetGuildPremiumSubscriptionCount() {
  DispatcherDefault.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_RESET" });
}
