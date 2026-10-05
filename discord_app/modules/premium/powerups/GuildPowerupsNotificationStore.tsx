// discord_app/modules/premium/powerups/GuildPowerupsNotificationStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import getExpiringGuildEntitlements2 from "utils/getExpiringGuildEntitlements.tsx";
import GameServerStore from "../../game_server/GameServerStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import GuildPowerupsStore from "GuildPowerupsStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_5;

const hasOwnProperty = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class GuildPowerupsNotificationStore extends PersistedStore {
  getState() {
    return closure_5;
  }
  initialize(arg0) {
    this.waitFor(GameServerStore, GuildPowerupsStore, GuildStore);
    if (null != arg0) {
      closure_5 = arg0;
    }
  }
  getNotificationStateForGuild(arg0) {
    return closure_5[arg0];
  }
}
const prototype = GuildPowerupsNotificationStore.prototype;
GuildPowerupsNotificationStore.displayName = "GuildPowerupsNotificationStore";
GuildPowerupsNotificationStore.persistKey = "GuildPowerupsNotificationStore";
let items = [
  (arg0) => {
    let closure_0 = arg0;
    const entries = Object.entries(arg0);
    const item = entries.forEach((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      closure_0[tmp] = tmp2;
    });
    return arg0;
  },
];
GuildPowerupsNotificationStore.migrations = items;
let obj = {
  GUILD_POWERUPS_ACK_NOTIFICATION: function handleAckNotification(guildId) {
    let _Date1;
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
    let unlockedPowerups;
    const getExpiringGuildEntitlements = getExpiringGuildEntitlements2.getExpiringGuildEntitlements;
    const _Object = Object;
    getExpiringGuildEntitlements2;
    if (stateForGuild != null) {
      unlockedPowerups = stateForGuild.unlockedPowerups;
    }
    if (unlockedPowerups == null) {
      unlockedPowerups = {};
    }
    const items = [...values(unlockedPowerups)];
    let entitlements;
    const _Object2 = Object;
    const values2 = Object.values;
    if (stateForGuild1 != null) {
      entitlements = stateForGuild1.entitlements;
    }
    if (entitlements == null) {
      entitlements = {};
    }
    HermesBuiltin.arraySpread(items, values2(entitlements), tmp6);
    const expiringGuildEntitlements = getExpiringGuildEntitlements(items);
    const obj = {};
    const merged = Object.assign(closure_5);
    let ends_at;
    const _Date = Date;
    if (expiringGuildEntitlements[expiringGuildEntitlements.length - 1] != null) {
      ends_at = tmp9.ends_at;
    }
    if (ends_at == null) {
      const _Date2 = Date;
      ends_at = Date.now();
    }
    const obj2 = { lastSeenWarningNotification: _Date1.getTime(), lastBoostCount: num };
    _Date1 = new _Date(ends_at);
    obj[guildId] = obj2;
    closure_5 = obj;
  },
  GUILD_POWERUPS_RESET_NOTIFICATIONS: function handleResetNotifications() {
    closure_5 = {};
  },
};
const guildPowerupsNotificationStore = new GuildPowerupsNotificationStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsNotificationStore.tsx");

export default guildPowerupsNotificationStore;
