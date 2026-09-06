// === Module 16221: GuildBoostingProgressBarPersistedStore ===

// Module 16221 (GuildBoostingProgressBarPersistedStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

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
  return closure_0[guildId];
};
GuildBoostingProgressBarPersistedStore.displayName = "GuildBoostingProgressBarPersistedStore";
GuildBoostingProgressBarPersistedStore.persistKey = "PremiumGuildProgressBarPersistedStore";
const guildBoostingProgressBarPersistedStore = new GuildBoostingProgressBarPersistedStore(DispatcherDefault, {
  APPLIED_GUILD_BOOST_COUNT_UPDATE: function handlePremiumCountUpdate(arg0) {
    const obj = {};
    ({ guildId, premiumCount } = arg0);
    const merged = Object.assign(closure_0);
    obj[guildId] = premiumCount;
    closure_0 = obj;
  },
  APPLIED_GUILD_BOOST_COUNT_RESET: function handlePremiumCountReset() {
    closure_0 = {};
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/GuildBoostingProgressBarPersistedStore.tsx");

export default guildBoostingProgressBarPersistedStore;