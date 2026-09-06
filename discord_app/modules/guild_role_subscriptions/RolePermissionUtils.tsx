// discord_app/modules/guild_role_subscriptions/RolePermissionUtils.tsx
import Constants from "../../Constants.tsx";
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import GuildRoleRecord from "../../records/GuildRoleRecord.tsx";
import size from "../../../_runtime/metro/00002__.js";

const hasPermission = GuildRoleRecord.hasPermission;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/RolePermissionUtils.tsx");

export const hasViewChannelPermission = function hasViewChannelPermission(item10077) {
  return hasPermission(item10077, Permissions.VIEW_CHANNEL);
};
export const isChannelAccessDeniedBy = function isChannelAccessDeniedBy(isGuildVocal, deny) {
  let tmp = null != deny;
  if (tmp) {
    let hasItem = BigFlagUtilsAll.has(deny.deny, Permissions.VIEW_CHANNEL);
    if (!hasItem) {
      let isGuildVocalResult = isGuildVocal.isGuildVocal();
      if (isGuildVocalResult) {
        isGuildVocalResult = BigFlagUtilsAll.has(deny.deny, Permissions.CONNECT);
        const tmp2Result = BigFlagUtilsAll;
      }
      hasItem = isGuildVocalResult;
    }
    tmp = hasItem;
  }
  return tmp;
};
export const isChannelAccessGrantedBy = function isChannelAccessGrantedBy(isGuildVocal, deny) {
  let tmp = null != deny;
  if (tmp) {
    let tmp3 = null != deny;
    if (tmp3) {
      let hasItem = BigFlagUtilsAll.has(deny.deny, Permissions.VIEW_CHANNEL);
      if (!hasItem) {
        let isGuildVocalResult = isGuildVocal.isGuildVocal();
        if (isGuildVocalResult) {
          isGuildVocalResult = BigFlagUtilsAll.has(deny.deny, Permissions.CONNECT);
          const tmp4Result = BigFlagUtilsAll;
        }
        hasItem = isGuildVocalResult;
      }
      tmp3 = hasItem;
    }
    let tmp9 = !tmp3;
    if (!tmp3) {
      let hasItem1 = BigFlagUtilsAll.has(deny.allow, Permissions.VIEW_CHANNEL);
      if (hasItem1) {
        const isGuildVocalResult1 = isGuildVocal.isGuildVocal();
        hasItem = !isGuildVocalResult1;
        if (isGuildVocalResult1) {
          hasItem = BigFlagUtilsAll.has(deny.allow, Permissions.CONNECT);
          const tmp10Result = BigFlagUtilsAll;
        }
        hasItem1 = hasItem;
      }
      tmp9 = hasItem1;
    }
    tmp = tmp9;
  }
  return tmp;
};
