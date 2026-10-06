// === Module 12023: GuildInvitesDisabledUtils ===

// Module 12023 (GuildInvitesDisabledUtils)
import GuildIncidentsStore from "GuildIncidentsStore" /* 11173 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
({ GuildFeatures: closure_4, Permissions: hasOwnProperty } = Constants);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      const canResult = null != closure_0 && PermissionStore.can(hasOwnProperty.MANAGE_GUILD, tmp);
      return canResult;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [PermissionStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const canResult = null != closure_0 && PermissionStore.can(hasOwnProperty.MANAGE_GUILD, tmp);
    return canResult;
  }, items1);
});
let closure_6 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function(features) {
  let first;
  let tmp6;
  _require = features;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildIncidentsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== features) {
    const fn = function u() {
      let guildIncident = null;
      if (null != features) {
        guildIncident = GuildIncidentsStore.getGuildIncident(tmp.id);
      }
      return guildIncident;
    };
    cResult[1] = features;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let features1;
  const tmp8 = cResult[3];
  if (features != null) {
    features1 = features.features;
  }
  if (tmp8 === features1) {
    let tmp10;
    if (cResult[4] === stateFromStores) {
      tmp10 = cResult[5];
    }
    return tmp10;
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
    let tmp14 = null != invitesDisabledUntil;
    if (tmp14) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const date = new Date(stateFromStores.invitesDisabledUntil);
      tmp14 = date > new Date();
      const date1 = new Date();
    }
    hasItem = tmp14;
  }
  let features2;
  if (features != null) {
    features2 = features.features;
  }
  cResult[3] = features2;
  cResult[4] = stateFromStores;
  cResult[5] = hasItem;
  tmp10 = hasItem;
}) : (function(features) {
  _require = features;
  const items = [GuildIncidentsStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guildIncident = null;
    if (null != features) {
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
      const self = this;
      const self2 = this;
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const date = new Date(stateFromStores.invitesDisabledUntil);
      tmp5 = date > new Date();
      const date1 = new Date();
    }
    hasItem = tmp5;
  }
  return hasItem;
});
let closure_7 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const tmp = closure_6(arg0) && closure_7(arg0);
  return tmp;
}) : ((arg0) => {
  const tmp = closure_6(arg0) && closure_7(arg0);
  return tmp;
});
const result = size.fileFinishedImporting("modules/guild_settings/safety/GuildInvitesDisabledUtils.tsx");

export const useInvitesDisabledPermission = tmp3;
export const useInvitesDisabled = tmp4;
export const useShouldShowInvitesDisabledNotif = tmp5;