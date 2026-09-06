// discord_app/modules/guild_boosting/GuildBoostingProgressBarActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
