// discord_app/modules/guild_settings/safety/GuildInvitesDisabledUtils.tsx
import computeAlertSettings from "../../guild_antiraid/GuildIncidentsStore.tsx";
import getUncachedChannelPermissions from "../../../stores/PermissionStore.tsx";
import ME from "../../../Constants.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = fn;
({ GuildFeatures: c4, Permissions: c5 } = ME);
const result = require("obj132").fileFinishedImporting("modules/guild_settings/safety/GuildInvitesDisabledUtils.tsx");

export const useInvitesDisabledPermission = function useInvitesDisabledPermission(guild) {
  const _require = guild;
  const items = [closure_3];
  const items1 = [guild];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
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
  const stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
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
  let stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = closure_1_3.can(closure_1_5.MANAGE_GUILD, tmp);
    }
    return canResult;
  }, items1);
  _require = guild;
  const obj = initialize;
  const items2 = [closure_2];
  const stateFromStores1 = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items2, () => {
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