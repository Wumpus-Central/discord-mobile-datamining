// === Module 15579: initialize ===

// Module 15579 (initialize)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let closure_0 = {};
const PersistedStore = initializeDefault.PersistedStore;
class GuildBoostingProgressBarPersistedStore extends PersistedStore {
}
const prototype = GuildBoostingProgressBarPersistedStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    closure_0 = arg0;
  }
};
prototype["getState"] = function getState() {
  return closure_0;
};
prototype["getCountForGuild"] = function getCountForGuild(guildId) {
  return table[guildId];
};
GuildBoostingProgressBarPersistedStore.displayName = "GuildBoostingProgressBarPersistedStore";
GuildBoostingProgressBarPersistedStore.persistKey = "PremiumGuildProgressBarPersistedStore";
const guildBoostingProgressBarPersistedStore = new GuildBoostingProgressBarPersistedStore(dispatcherDefault, {
  APPLIED_GUILD_BOOST_COUNT_UPDATE: function handlePremiumCountUpdate(arg0) {
    const obj = {};
    ({ guildId, premiumCount } = arg0);
    const merged = Object.assign(obj);
    obj[guildId] = premiumCount;
  },
  APPLIED_GUILD_BOOST_COUNT_RESET: function handlePremiumCountReset() {
    closure_0 = {};
  }
});
const result = require("set").fileFinishedImporting("modules/guild_boosting/GuildBoostingProgressBarPersistedStore.tsx");

export default guildBoostingProgressBarPersistedStore;