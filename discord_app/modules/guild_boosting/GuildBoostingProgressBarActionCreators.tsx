// discord_app/modules/guild_boosting/GuildBoostingProgressBarActionCreators.tsx
const result = require("set").fileFinishedImporting("modules/guild_boosting/GuildBoostingProgressBarActionCreators.tsx");

export const updateGuildPremiumSubscriptionCount = function updateGuildPremiumSubscriptionCount(guildId, arg1) {
  const importDefault = guildId;
  const dependencyMap = arg1;
  require("../../Dispatcher.tsx").wait(() => {
    let obj = guildId(table[0]);
    obj = { type: "APPLIED_GUILD_BOOST_COUNT_UPDATE", guildId, premiumCount: table };
    obj.dispatch(obj);
  });
};
export const resetGuildPremiumSubscriptionCount = function resetGuildPremiumSubscriptionCount() {
  require("../../Dispatcher.tsx").dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_RESET" });
};