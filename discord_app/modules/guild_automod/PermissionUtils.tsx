// discord_app/modules/guild_automod/PermissionUtils.tsx
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = fn;
const Constants = fn(1074);
({ GuildFeatures: closure_4, Permissions: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/PermissionUtils.tsx");

export const canCurrentUserManageMessageFilters = function canCurrentUserManageMessageFilters(guild_id) {
  let tmp = null != guild_id;
  if (tmp) {
    const guild = GuildStore.getGuild(guild_id);
    let canResult = null != guild;
    if (canResult) {
      canResult = obj.can(constants2.MANAGE_GUILD, guild);
    }
    tmp = canResult;
    obj = PermissionStore;
  }
  return tmp;
};
export const canCurrentUserManageAutomod = function canCurrentUserManageAutomod(arg0) {
  const guild = GuildStore.getGuild(arg0);
  let canResult = null != guild;
  if (canResult) {
    canResult = PermissionStore.can(constants2.MANAGE_GUILD, guild);
  }
  return canResult;
};
export const useCanCurrentUserManageAutomod = function useCanCurrentUserManageAutomod(arg0) {
  _require = arg0;
  const items = [GuildStore, PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(
    items,
    () => {
      if (GuildStore !== undefined) {
        if (obj2 !== undefined) {
          const guild = GuildStore.getGuild(tmp);
          let canResult = null != guild;
          if (canResult) {
            canResult = obj2.can(constants2.MANAGE_GUILD, guild);
          }
          return canResult;
        }
      }
    },
    items1,
  );
};
export const useIsUserProfileRuleEnabled = function useIsUserProfileRuleEnabled(arg0) {
  _require = arg0;
  const items = [GuildStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const guild = GuildStore.getGuild(closure_0);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(constants.COMMUNITY);
      }
      if (!flag) {
        flag = false;
      }
      return flag;
    },
    items1,
  );
};
