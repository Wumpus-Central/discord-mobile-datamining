// === Module 12292: getState ===

// Module 12292 (getState)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import getExpiringGuildEntitlements from "getExpiringGuildEntitlements" /* 12293 */;
import closure_2 from "handleGameServerInstanceCreated" /* 4385 */;
import closure_3 from "createGuildRecordFromRust" /* 1908 */;
import closure_4 from "calculateAppliedBoosts" /* 4364 */;

require = arg1;
let closure_5 = {};
const PersistedStore = initializeDefault.PersistedStore;
class GuildPowerupsNotificationStore extends PersistedStore {
}
const prototype = GuildPowerupsNotificationStore.prototype;
prototype["getState"] = function getState() {
  return closure_5;
};
prototype["initialize"] = function initialize(arg0) {
  this.waitFor(closure_2, closure_4, closure_3);
  if (null != arg0) {
    closure_5 = arg0;
  }
};
prototype["getNotificationStateForGuild"] = function getNotificationStateForGuild(closure_0) {
  return table[closure_0];
};
GuildPowerupsNotificationStore.displayName = "GuildPowerupsNotificationStore";
GuildPowerupsNotificationStore.persistKey = "GuildPowerupsNotificationStore";
let items = [
  (arg0) => {
    closure_0 = arg0;
    const entries = Object.entries(arg0);
    const item = entries.forEach((arg0) => {
      [tmp, tmp2] = arg0;
      closure_0[tmp] = tmp2;
    });
    return arg0;
  }
];
GuildPowerupsNotificationStore.migrations = items;
const guildPowerupsNotificationStore = new GuildPowerupsNotificationStore(dispatcherDefault, {
  GUILD_POWERUPS_ACK_NOTIFICATION: function handleAckNotification(guildId) {
    guildId = guildId.guildId;
    guild = guild.getGuild(guildId);
    let num;
    if (guild != null) {
      num = guild.premiumSubscriberCount;
    }
    if (num == null) {
      num = 0;
    }
    const stateForGuild = stateForGuild2.getStateForGuild(guildId);
    const stateForGuild1 = stateForGuild.getStateForGuild(guildId);
    let obj = getExpiringGuildEntitlements;
    let unlockedPowerups;
    if (stateForGuild != null) {
      unlockedPowerups = stateForGuild.unlockedPowerups;
    }
    if (unlockedPowerups == null) {
      unlockedPowerups = {};
    }
    const items = [...Object.values(unlockedPowerups)];
    let entitlements;
    if (stateForGuild1 != null) {
      entitlements = stateForGuild1.entitlements;
    }
    if (entitlements == null) {
      entitlements = {};
    }
    HermesBuiltin.arraySpread(Object.values(entitlements), tmp4);
    const expiringGuildEntitlements = obj.getExpiringGuildEntitlements(items);
    obj = {};
    const merged = Object.assign(obj);
    let ends_at;
    if (expiringGuildEntitlements[expiringGuildEntitlements.length - 1] != null) {
      ends_at = tmp7.ends_at;
    }
    if (ends_at == null) {
      const _Date = Date;
      ends_at = Date.now();
    }
    obj = { lastSeenWarningNotification: new Date(ends_at).getTime(), lastBoostCount: num };
    obj[guildId] = obj;
  },
  GUILD_POWERUPS_RESET_NOTIFICATIONS: function handleResetNotifications() {
    closure_5 = {};
  }
});
const result = require("set").fileFinishedImporting("modules/premium/powerups/GuildPowerupsNotificationStore.tsx");

export default guildPowerupsNotificationStore;