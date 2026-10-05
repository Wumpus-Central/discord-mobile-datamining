// === Module 7046: isOptInEnabled ===

// Module 7046 (isOptInEnabled)
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
({ GuildFeatures: metroRequire, Permissions: metroImportDefault } = Constants);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildSettingsStore, GuildStore, UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      let isOptInEnabledResult = UserGuildSettingsStore.isOptInEnabled(closure_0);
      const guild = GuildStore.getGuild(closure_0);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(metroRequire.COMMUNITY);
      }
      if (flag == null) {
        flag = false;
      }
      const currentUser = UserStore.getCurrentUser();
      let flag2;
      if (currentUser != null) {
        flag2 = currentUser.isStaff();
      }
      if (flag2 == null) {
        flag2 = false;
      }
      if (isOptInEnabledResult) {
        if (!flag) {
          flag = flag2;
        }
        isOptInEnabledResult = flag;
      }
      return isOptInEnabledResult;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp8);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [UserGuildSettingsStore, GuildStore, UserStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let isOptInEnabledResult = UserGuildSettingsStore.isOptInEnabled(closure_0);
    const guild = GuildStore.getGuild(closure_0);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(metroRequire.COMMUNITY);
    }
    if (flag == null) {
      flag = false;
    }
    const currentUser = UserStore.getCurrentUser();
    let flag2;
    if (currentUser != null) {
      flag2 = currentUser.isStaff();
    }
    if (flag2 == null) {
      flag2 = false;
    }
    if (isOptInEnabledResult) {
      if (!flag) {
        flag = flag2;
      }
      isOptInEnabledResult = flag;
    }
    return isOptInEnabledResult;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      const guild = GuildStore.getGuild(closure_0);
      let flag;
      const canResult = PermissionStore.can(metroImportDefault.MANAGE_GUILD, guild);
      const canResult1 = PermissionStore.can(metroImportDefault.MANAGE_ROLES, guild);
      if (guild != null) {
        const features = guild.features;
        flag = features.has(metroRequire.GUILD_ONBOARDING_EVER_ENABLED);
      }
      if (flag == null) {
        flag = false;
      }
      return null != guild && canResult && canResult1 && !flag;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [GuildStore, PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let flag;
    const canResult = PermissionStore.can(metroImportDefault.MANAGE_GUILD, guild);
    const canResult1 = PermissionStore.can(metroImportDefault.MANAGE_ROLES, guild);
    if (guild != null) {
      const features = guild.features;
      flag = features.has(metroRequire.GUILD_ONBOARDING_EVER_ENABLED);
    }
    if (flag == null) {
      flag = false;
    }
    return null != guild && canResult && canResult1 && !flag;
  });
});
const result = size.fileFinishedImporting("modules/opt_in_channels/isOptInEnabled.tsx");

export const useOptInEnabledForGuild = tmp3;
export const isOptInEnabledForGuild = function isOptInEnabledForGuild(guild_id) {
  const guild = GuildStore.getGuild(guild_id);
  const currentUser = UserStore.getCurrentUser();
  let tmp2 = null != guild_id && null != guild && null != currentUser;
  if (tmp2) {
    const features = guild.features;
    tmp2 = (features.has(metroRequire.COMMUNITY) || currentUser.isStaff()) && UserGuildSettingsStore.isOptInEnabled(guild_id);
    const isOptInEnabledResult = (features.has(metroRequire.COMMUNITY) || currentUser.isStaff()) && UserGuildSettingsStore.isOptInEnabled(guild_id);
  }
  return tmp2;
};
export const useShouldShowOnboardingAdminUpsellForGuild = tmp4;