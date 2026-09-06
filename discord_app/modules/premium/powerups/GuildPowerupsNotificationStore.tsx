// discord_app/modules/premium/powerups/GuildPowerupsNotificationStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import getExpiringGuildEntitlements from "utils/getExpiringGuildEntitlements.tsx";
import GameServerStore from "../../game_server/GameServerStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import GuildPowerupsStore from "GuildPowerupsStore.tsx";

require = fn;
let closure_5 = {};
const PersistedStore = initializeDefault.PersistedStore;
class GuildPowerupsNotificationStore extends PersistedStore {}
const prototype = GuildPowerupsNotificationStore.prototype;
prototype["getState"] = function getState() {
  return closure_5;
};
prototype["initialize"] = function initialize(arg0) {
  this.waitFor(GameServerStore, GuildPowerupsStore, GuildStore);
  if (null != arg0) {
    closure_5 = arg0;
  }
};
prototype["getNotificationStateForGuild"] = function getNotificationStateForGuild(arg0) {
  return closure_5[arg0];
};
GuildPowerupsNotificationStore.displayName = "GuildPowerupsNotificationStore";
GuildPowerupsNotificationStore.persistKey = "GuildPowerupsNotificationStore";
let items = [
  (arg0) => {
    closure_0 = arg0;
    const entries = Object.entries(arg0);
    const item = entries.forEach((item) => {
      [tmp, tmp2] = item;
      closure_0[tmp] = tmp2;
    });
    return arg0;
  },
];
GuildPowerupsNotificationStore.migrations = items;
const guildPowerupsNotificationStore = new GuildPowerupsNotificationStore(DispatcherDefault, {
  GUILD_POWERUPS_ACK_NOTIFICATION: function handleAckNotification(guildId) {
    guildId = guildId.guildId;
    const guild = GuildStore.getGuild(guildId);
    let num;
    if (guild != null) {
      num = guild.premiumSubscriberCount;
    }
    if (num == null) {
      num = 0;
    }
    const stateForGuild = GuildPowerupsStore.getStateForGuild(guildId);
    const stateForGuild1 = GameServerStore.getStateForGuild(guildId);
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
    const merged = Object.assign(closure_5);
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
    closure_5 = obj;
  },
  GUILD_POWERUPS_RESET_NOTIFICATIONS: function handleResetNotifications() {
    closure_5 = {};
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsNotificationStore.tsx");

export default guildPowerupsNotificationStore;
