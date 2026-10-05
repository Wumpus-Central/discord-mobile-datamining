// discord_app/modules/guild_antiraid/GuildAntiRaidPermissionsUtils.tsx
import Constants from "../../Constants.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import GuildIncidentsStore from "GuildIncidentsStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp12;
      let tmp14;
      let tmp6;
      let tmp7;
      let tmp9;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(10);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          if (PermissionStore !== undefined) {
            const tmp3 =
              PermissionStore.can(Permissions.BAN_MEMBERS, closure_0) ||
              PermissionStore.can(Permissions.KICK_MEMBERS, closure_0) ||
              PermissionStore.can(Permissions.MODERATE_MEMBERS, closure_0) ||
              PermissionStore.can(Permissions.MANAGE_GUILD, closure_0);
            return tmp3;
          }
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
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildIncidentsStore];
        cResult[4] = items2;
        tmp9 = items2;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] !== arg0) {
        class E {
          constructor() {
            let guildIncident = null;
            if (null != closure_0) {
              guildIncident = GuildIncidentsStore.getGuildIncident(tmp.id);
            }
            return guildIncident;
          }
        }
        const items3 = [arg0];
        cResult[5] = arg0;
        cResult[6] = E;
        cResult[7] = items3;
        tmp12 = items3;
      } else {
        class E {
          constructor() {
            let guildIncident = null;
            if (null != closure_0) {
              guildIncident = GuildIncidentsStore.getGuildIncident(tmp.id);
            }
            return guildIncident;
          }
        }
        tmp12 = cResult[7];
      }
      const tmpResult2 = tmp(504);
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, E, tmp12);
      if (cResult[8] !== stateFromStores1) {
        class E {
          constructor() {
            let guildIncident = null;
            if (null != closure_0) {
              guildIncident = GuildIncidentsStore.getGuildIncident(tmp.id);
            }
            return guildIncident;
          }
        }
        let hasDetectedActivityResult = null != stateFromStores1;
        if (hasDetectedActivityResult) {
          class E {
            constructor() {
              let guildIncident = null;
              if (null != closure_0) {
                guildIncident = GuildIncidentsStore.getGuildIncident(tmp.id);
              }
              return guildIncident;
            }
          }
          hasDetectedActivityResult = obj4.hasDetectedActivity(stateFromStores1);
        }
        cResult[8] = stateFromStores1;
        cResult[9] = hasDetectedActivityResult;
        tmp14 = hasDetectedActivityResult;
      } else {
        class E {
          constructor() {
            let guildIncident = null;
            if (null != closure_0) {
              guildIncident = GuildIncidentsStore.getGuildIncident(tmp.id);
            }
            return guildIncident;
          }
        }
      }
      return !tmp14 && stateFromStores;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const tmp = _require;
      const items = [PermissionStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(
        items,
        () => {
          if (PermissionStore !== undefined) {
            const tmp3 =
              PermissionStore.can(Permissions.BAN_MEMBERS, closure_0) ||
              PermissionStore.can(Permissions.KICK_MEMBERS, closure_0) ||
              PermissionStore.can(Permissions.MODERATE_MEMBERS, closure_0) ||
              PermissionStore.can(Permissions.MANAGE_GUILD, closure_0);
            return tmp3;
          }
        },
        items1,
      );
      const items2 = [GuildIncidentsStore];
      const items3 = [arg0];
      const obj2 = require("get initialized");
      const stateFromStores1 = obj2.useStateFromStores(
        items2,
        () => {
          let guildIncident = null;
          if (null != closure_0) {
            guildIncident = GuildIncidentsStore.getGuildIncident(tmp.id);
          }
          return guildIncident;
        },
        items3,
      );
      let hasDetectedActivityResult = null != stateFromStores1;
      if (hasDetectedActivityResult) {
        const tmpResult = tmp(7685);
        hasDetectedActivityResult = tmpResult.hasDetectedActivity(stateFromStores1);
      }
      return !hasDetectedActivityResult && stateFromStores;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
          if (PermissionStore !== undefined) {
            return PermissionStore.can(Permissions.MANAGE_GUILD, tmp);
          }
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
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [PermissionStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => {
          if (PermissionStore !== undefined) {
            return PermissionStore.can(Permissions.MANAGE_GUILD, tmp);
          }
        },
        items1,
      );
    };
function canReportRaid(guild) {
  let obj = PermissionStore;
  if (PermissionStore === undefined) {
    obj = PermissionStore;
  }
  const canResult =
    obj.can(Permissions.BAN_MEMBERS, guild) ||
    obj.can(Permissions.KICK_MEMBERS, guild) ||
    obj.can(Permissions.MODERATE_MEMBERS, guild) ||
    obj.can(Permissions.MANAGE_GUILD, guild);
  return canResult;
}
function canEnableRaidAlerts(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = PermissionStore;
  }
  return obj.can(Permissions.MANAGE_GUILD, arg0);
}
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidPermissionsUtils.tsx");

export { canReportRaid };
export const useCanReportRaid = tmp2;
export { canEnableRaidAlerts };
export const useCanEnableRaidAlerts = tmp3;
