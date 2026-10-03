// === Module 12008: GuildInvitesDisabledUtils ===

// Module 12008 (GuildInvitesDisabledUtils)
import GuildIncidentsStore from "GuildIncidentsStore" /* 11160 */;
import PermissionStore from "PermissionStore" /* 4509 */;

const require = fn;
const Constants = fn(1085);
({ GuildFeatures: closure_4, Permissions: hasOwnProperty } = Constants);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      let canResult = null != closure_0;
      if (canResult) {
        canResult = PermissionStore.can(constants2.MANAGE_GUILD, tmp);
      }
      return canResult;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = PermissionStore.can(constants2.MANAGE_GUILD, tmp);
    }
    return canResult;
  }, items1);
});
let closure_6 = tmp3;
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((features) => {
  _require = features;
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildIncidentsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== features) {
    const fn = function u() {
      let guildIncident = null;
      if (null != closure_0) {
        guildIncident = GuildIncidentsStore.getGuildIncident(tmp.id);
      }
      return guildIncident;
    };
    cResult[1] = features;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  let features1;
  if (features != null) {
    features1 = features.features;
  }
  if (cResult[3] === features1) {
    if (cResult[4] === stateFromStores) {
      let tmp9 = cResult[5];
    }
    return tmp9;
  }
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
    let tmp13 = null != invitesDisabledUntil;
    if (tmp13) {
      const _Date = Date;
      const date = new Date(stateFromStores.invitesDisabledUntil);
      const _Date2 = Date;
      const date1 = new Date();
      tmp13 = date > date1;
    }
    hasItem = tmp13;
  }
  let features2;
  if (features != null) {
    features2 = features.features;
  }
  cResult[3] = features2;
  cResult[4] = stateFromStores;
  cResult[5] = hasItem;
  tmp9 = hasItem;
  const tmpResult = require("initialize");
}) : ((features) => {
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
});
let closure_7 = tmp4;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/safety/GuildInvitesDisabledUtils.tsx");

export const useInvitesDisabledPermission = tmp3;
export const useInvitesDisabled = tmp4;
export const useShouldShowInvitesDisabledNotif = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp = closure_6(arg0);
  if (tmp) {
    tmp = closure_7(arg0);
  }
  return tmp;
}) : ((arg0) => {
  let tmp = closure_6(arg0);
  if (tmp) {
    tmp = closure_7(arg0);
  }
  return tmp;
});