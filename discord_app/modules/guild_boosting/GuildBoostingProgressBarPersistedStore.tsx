// === Module 16152: GuildBoostingProgressBarPersistedStore ===

// Module 16152 (GuildBoostingProgressBarPersistedStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let closure_0;

const React = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class GuildBoostingProgressBarPersistedStore extends PersistedStore {
  initialize(arg0) {
    if (null != arg0) {
      closure_0 = arg0;
    }
  }
  getState() {
    return closure_0;
  }
  getCountForGuild(guildId) {
    return closure_0[guildId];
  }
}
const prototype = GuildBoostingProgressBarPersistedStore.prototype;
GuildBoostingProgressBarPersistedStore.displayName = "GuildBoostingProgressBarPersistedStore";
GuildBoostingProgressBarPersistedStore.persistKey = "PremiumGuildProgressBarPersistedStore";
let obj = {
  APPLIED_GUILD_BOOST_COUNT_UPDATE: function handlePremiumCountUpdate(arg0) {
    let guildId;
    let premiumCount;
    const obj = {};
    ({ guildId, premiumCount } = arg0);
    const merged = Object.assign(closure_0);
    obj[guildId] = premiumCount;
    closure_0 = obj;
  },
  APPLIED_GUILD_BOOST_COUNT_RESET: function handlePremiumCountReset() {
    closure_0 = {};
  }
};
const guildBoostingProgressBarPersistedStore = new GuildBoostingProgressBarPersistedStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild_boosting/GuildBoostingProgressBarPersistedStore.tsx");

export default guildBoostingProgressBarPersistedStore;