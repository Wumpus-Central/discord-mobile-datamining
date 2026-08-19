// === Module 15484: updateGuildPremiumSubscriptionCount ===

// Module 15484 (updateGuildPremiumSubscriptionCount)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("modules/guild_boosting/GuildBoostingProgressBarActionCreators.tsx");

export const updateGuildPremiumSubscriptionCount = function updateGuildPremiumSubscriptionCount(guildId, arg1) {
  importDefault = guildId;
  dependencyMap = arg1;
  dispatcherDefault.wait(() => {
    guildId(table[0]);
    const obj = { type: "APPLIED_GUILD_BOOST_COUNT_UPDATE", guildId, premiumCount: table };
    obj.dispatch(obj);
  });
};
export const resetGuildPremiumSubscriptionCount = function resetGuildPremiumSubscriptionCount() {
  dispatcherDefault.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_RESET" });
};