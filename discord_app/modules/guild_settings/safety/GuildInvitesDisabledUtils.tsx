// === Module 12371: GuildInvitesDisabledUtils ===

// Module 12371 (GuildInvitesDisabledUtils)
import GuildIncidentsStore from "GuildIncidentsStore" /* 10080 */;
import PermissionStore from "PermissionStore" /* 4199 */;

const require = fn;
const Constants = fn(1074);
({ GuildFeatures: closure_4, Permissions: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/safety/GuildInvitesDisabledUtils.tsx");

export const useInvitesDisabledPermission = function useInvitesDisabledPermission(guild) {
  _require = guild;
  const items = [PermissionStore];
  const items1 = [guild];
  return require("initialize").useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = PermissionStore.can(constants2.MANAGE_GUILD, tmp);
    }
    return canResult;
  }, items1);
};
export const useInvitesDisabled = function useInvitesDisabled(features) {
  _require = features;
  const items = [GuildIncidentsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let guildIncident = null;
    if (null != closure_0) {
      guildIncident = GuildIncidentsStore.getGuildIncident(tmp.id);
    }
    return guildIncident;
  });
  let hasItem;
  if (features != null) {
    features = features.features;
    hasItem = features.has(constants.INVITES_DISABLED);
  }
  if (!hasItem) {
    let invitesDisabledUntil;
    if (stateFromStores != null) {
      invitesDisabledUntil = stateFromStores.invitesDisabledUntil;
    }
    let tmp5 = null != invitesDisabledUntil;
    if (tmp5) {
      const _Date = Date;
      const date = new Date(stateFromStores.invitesDisabledUntil);
      const _Date2 = Date;
      const date1 = new Date();
      tmp5 = date > date1;
    }
    hasItem = tmp5;
  }
  return hasItem;
};
export const useShouldShowInvitesDisabledNotif = function useShouldShowInvitesDisabledNotif(guild) {
  _require = guild;
  const items = [PermissionStore];
  const items1 = [guild];
  let stateFromStores = require("initialize").useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = PermissionStore.can(constants2.MANAGE_GUILD, tmp);
    }
    return canResult;
  }, items1);
  closure_129_0 = guild;
  const obj = require("initialize");
  const items2 = [GuildIncidentsStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    let guildIncident = null;
    if (null != closure_0) {
      guildIncident = GuildIncidentsStore.getGuildIncident(tmp.id);
    }
    return guildIncident;
  });
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(constants.INVITES_DISABLED);
  }
  if (!hasItem) {
    let invitesDisabledUntil;
    if (stateFromStores1 != null) {
      invitesDisabledUntil = stateFromStores1.invitesDisabledUntil;
    }
    let tmp6 = null != invitesDisabledUntil;
    if (tmp6) {
      const _Date = Date;
      const date = new Date(stateFromStores1.invitesDisabledUntil);
      const _Date2 = Date;
      const date1 = new Date();
      tmp6 = date > date1;
    }
    hasItem = tmp6;
  }
  if (stateFromStores) {
    stateFromStores = hasItem;
  }
  return stateFromStores;
};