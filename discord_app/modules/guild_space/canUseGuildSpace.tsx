// discord_app/modules/guild_space/canUseGuildSpace.tsx
import Constants from "../../Constants.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
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
        const fn = function s() {
          const canResult = null != closure_0 && PermissionStore.can(Permissions.MANAGE_GUILD, tmp);
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
          const canResult = null != closure_0 && PermissionStore.can(Permissions.MANAGE_GUILD, tmp);
          return canResult;
        },
        items1,
      );
    };
let closure_5 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let first;
      let tmp10;
      let tmp9;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(7);
      const useGuildSpaceExperimentEnabled = require("GuildSpaceExperiment").useGuildSpaceExperimentEnabled;
      require("GuildSpaceExperiment");
      const guildSpaceExperimentEnabled = useGuildSpaceExperimentEnabled(arg0, arg1);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          return GuildStore.getGuild(closure_0);
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp10 = items1;
        tmp9 = fn;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = tmp(504);
      closure_5(tmpResult.useStateFromStores(first, tmp9, tmp10));
      return false;
    }
  : (arg0, arg1) => {
      let closure_0;
      _require = arg0;
      const useGuildSpaceExperimentEnabled = require("GuildSpaceExperiment").useGuildSpaceExperimentEnabled;
      require("GuildSpaceExperiment");
      const guildSpaceExperimentEnabled = useGuildSpaceExperimentEnabled(arg0, arg1);
      const items = [GuildStore];
      const items1 = [arg0];
      const tmpResult = require("get initialized");
      closure_5(tmpResult.useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1));
      return false;
    };
const result = size.fileFinishedImporting("modules/guild_space/canUseGuildSpace.tsx");

export const isGuildSpaceAdmin = function isGuildSpaceAdmin(arg0) {
  const canResult = null != arg0 && PermissionStore.can(Permissions.MANAGE_GUILD, arg0);
  return canResult;
};
export const useIsGuildSpaceAdmin = tmp2;
export function canUseGuildSpace(guild, getChannelIdForGuildTransition) {
  return false;
}
export const useCanUseGuildSpace = tmp3;
