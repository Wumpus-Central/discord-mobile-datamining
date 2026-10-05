// discord_app/modules/guild_boosting/GuildBoostingProgressBarPersistedStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  },
};
const guildBoostingProgressBarPersistedStore = new GuildBoostingProgressBarPersistedStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild_boosting/GuildBoostingProgressBarPersistedStore.tsx");

export default guildBoostingProgressBarPersistedStore;
