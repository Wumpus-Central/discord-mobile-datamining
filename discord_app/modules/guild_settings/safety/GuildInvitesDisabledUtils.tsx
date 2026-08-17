// discord_app/modules/guild_settings/safety/GuildInvitesDisabledUtils.tsx
import closure_2 from "computeAlertSettings" /* 10014 */;
import closure_3 from "getUncachedChannelPermissions" /* 4021 */;
import ME from "ME" /* 676 */;
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
({ GuildFeatures: c4, Permissions: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/guild_settings/safety/GuildInvitesDisabledUtils.tsx");

export const useInvitesDisabledPermission = function useInvitesDisabledPermission(guild) {
  const _require = guild;
  const items = [closure_3];
  const items1 = [guild];
  return _initialize.useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = closure_1_3.can(closure_1_5.MANAGE_GUILD, tmp);
    }
    return canResult;
  }, items1);
};
export const useInvitesDisabled = function useInvitesDisabled(features) {
  const _require = features;
  const items = [closure_2];
  const stateFromStores = _initialize.useStateFromStores(items, () => {
    let guildIncident = null;
    if (null != closure_0) {
      guildIncident = closure_1_2.getGuildIncident(tmp.id);
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
  let _require = guild;
  const items = [closure_3];
  const items1 = [guild];
  let stateFromStores = _initialize.useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = closure_1_3.can(closure_1_5.MANAGE_GUILD, tmp);
    }
    return canResult;
  }, items1);
  _require = guild;
  const obj = _initialize;
  const items2 = [closure_2];
  const stateFromStores1 = _initialize.useStateFromStores(items2, () => {
    let guildIncident = null;
    if (null != closure_0) {
      guildIncident = closure_1_2.getGuildIncident(tmp.id);
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