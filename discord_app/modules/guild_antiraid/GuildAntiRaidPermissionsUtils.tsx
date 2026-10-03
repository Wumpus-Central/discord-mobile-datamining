// === Module 12481: GuildAntiRaidPermissionsUtils ===

// Module 12481 (GuildAntiRaidPermissionsUtils)
import PermissionStore from "PermissionStore" /* 4509 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 11160 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1085).Permissions;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      if (PermissionStore !== undefined) {
        return PermissionStore.can(Permissions.BAN_MEMBERS, closure_0) || PermissionStore.can(Permissions.KICK_MEMBERS, closure_0) || PermissionStore.can(Permissions.MODERATE_MEMBERS, closure_0) || PermissionStore.can(Permissions.MANAGE_GUILD, closure_0);
      }
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
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildIncidentsStore];
    cResult[4] = items2;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== arg0) {
    class E {
      constructor() {
        guildIncident = null;
        if (null != closure_0) {
          tmp3 = closure_3;
          guildIncident = closure_3.getGuildIncident(tmp.id);
        }
        return guildIncident;
      }
    }
    const items3 = [arg0];
    cResult[5] = arg0;
    cResult[6] = E;
    cResult[7] = items3;
    let tmp12 = items3;
  } else {
    class E {
      constructor() {
        guildIncident = null;
        if (null != closure_0) {
          tmp3 = closure_3;
          guildIncident = closure_3.getGuildIncident(tmp.id);
        }
        return guildIncident;
      }
    }
    tmp12 = cResult[7];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp9, E, tmp12);
  if (cResult[8] !== stateFromStores1) {
    class E {
      constructor() {
        guildIncident = null;
        if (null != closure_0) {
          tmp3 = closure_3;
          guildIncident = closure_3.getGuildIncident(tmp.id);
        }
        return guildIncident;
      }
    }
    let hasDetectedActivityResult = null != stateFromStores1;
    if (hasDetectedActivityResult) {
      class E {
        constructor() {
          guildIncident = null;
          if (null != closure_0) {
            tmp3 = closure_3;
            guildIncident = closure_3.getGuildIncident(tmp.id);
          }
          return guildIncident;
        }
      }
      hasDetectedActivityResult = obj4.hasDetectedActivity(stateFromStores1);
    }
    cResult[8] = stateFromStores1;
    cResult[9] = hasDetectedActivityResult;
  } else {
    class E {
      constructor() {
        guildIncident = null;
        if (null != closure_0) {
          tmp3 = closure_3;
          guildIncident = closure_3.getGuildIncident(tmp.id);
        }
        return guildIncident;
      }
    }
  }
  if (!tmp14) {
    class E {
      constructor() {
        guildIncident = null;
        if (null != closure_0) {
          tmp3 = closure_3;
          guildIncident = closure_3.getGuildIncident(tmp.id);
        }
        return guildIncident;
      }
    }
  }
  return !tmp14;
}) : ((arg0) => {
  _require = arg0;
  const items = [PermissionStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (PermissionStore !== undefined) {
      return PermissionStore.can(Permissions.BAN_MEMBERS, closure_0) || PermissionStore.can(Permissions.KICK_MEMBERS, closure_0) || PermissionStore.can(Permissions.MODERATE_MEMBERS, closure_0) || PermissionStore.can(Permissions.MANAGE_GUILD, closure_0);
    }
  }, items1);
  const obj = require("initialize");
  const tmp = _require;
  const items2 = [GuildIncidentsStore];
  const items3 = [arg0];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    let guildIncident = null;
    if (null != closure_0) {
      guildIncident = GuildIncidentsStore.getGuildIncident(tmp.id);
    }
    return guildIncident;
  }, items3);
  let hasDetectedActivityResult = null != stateFromStores1;
  if (hasDetectedActivityResult) {
    hasDetectedActivityResult = tmp(7685).hasDetectedActivity(stateFromStores1);
    const tmpResult = tmp(7685);
  }
  let tmp6 = !hasDetectedActivityResult;
  if (!hasDetectedActivityResult) {
    tmp6 = stateFromStores;
  }
  return tmp6;
});
function canReportRaid(guild) {
  let obj = PermissionStore;
  if (PermissionStore === undefined) {
    obj = PermissionStore;
  }
  let canResult = obj.can(Permissions.BAN_MEMBERS, guild);
  if (!canResult) {
    canResult = obj.can(Permissions.KICK_MEMBERS, guild);
  }
  if (!canResult) {
    canResult = obj.can(Permissions.MODERATE_MEMBERS, guild);
  }
  if (!canResult) {
    canResult = obj.can(Permissions.MANAGE_GUILD, guild);
  }
  return canResult;
}
function canEnableRaidAlerts(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = PermissionStore;
  }
  return obj.can(Permissions.MANAGE_GUILD, arg0);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidPermissionsUtils.tsx");

export { canReportRaid };
export const useCanReportRaid = tmp2;
export { canEnableRaidAlerts };
export const useCanEnableRaidAlerts = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
      if (PermissionStore !== undefined) {
        return PermissionStore.can(Permissions.MANAGE_GUILD, tmp);
      }
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
    if (PermissionStore !== undefined) {
      return PermissionStore.can(Permissions.MANAGE_GUILD, tmp);
    }
  }, items1);
});