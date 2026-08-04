// discord_app/modules/guild_boosting/GuildBoostingProgressBarPersistedStore.tsx
import { PersistedStore } from "initialize";

let closure_0 = {};
class GuildBoostingProgressBarPersistedStore extends PersistedStore {
}
const prototype = GuildBoostingProgressBarPersistedStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    let closure_0 = arg0;
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
const guildBoostingProgressBarPersistedStore = new GuildBoostingProgressBarPersistedStore(require("dispatcher"), {
  APPLIED_GUILD_BOOST_COUNT_UPDATE: function handlePremiumCountUpdate(arg0) {
    let guildId;
    let premiumCount;
    const obj = {};
    ({ guildId, premiumCount } = arg0);
    const merged = Object.assign(obj);
    obj[guildId] = premiumCount;
  },
  APPLIED_GUILD_BOOST_COUNT_RESET: function handlePremiumCountReset() {
    let closure_0 = {};
  }
});
const result = require("set").fileFinishedImporting("modules/guild_boosting/GuildBoostingProgressBarPersistedStore.tsx");

export default guildBoostingProgressBarPersistedStore;