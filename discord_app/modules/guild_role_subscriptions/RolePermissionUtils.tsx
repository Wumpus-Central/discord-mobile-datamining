// === Module 4457: RolePermissionUtils ===

// Module 4457 (RolePermissionUtils)
import Constants from "Constants" /* 1074 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import GuildRoleRecord from "GuildRoleRecord" /* 2102 */;
import size from "module_2" /* 2 */;

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
      let hasItem1 = BigFlagUtilsAll.has(deny.deny, Permissions.VIEW_CHANNEL);
      if (!hasItem1) {
        let isGuildVocalResult = isGuildVocal.isGuildVocal();
        if (isGuildVocalResult) {
          isGuildVocalResult = BigFlagUtilsAll.has(deny.deny, Permissions.CONNECT);
          const tmp4Result = BigFlagUtilsAll;
        }
        hasItem1 = isGuildVocalResult;
      }
      tmp3 = hasItem1;
    }
    let tmp9 = !tmp3;
    if (!tmp3) {
      let hasItem2 = BigFlagUtilsAll.has(deny.allow, Permissions.VIEW_CHANNEL);
      if (hasItem2) {
        const isGuildVocalResult1 = isGuildVocal.isGuildVocal();
        let hasItem = !isGuildVocalResult1;
        if (isGuildVocalResult1) {
          hasItem = BigFlagUtilsAll.has(deny.allow, Permissions.CONNECT);
          const tmp10Result = BigFlagUtilsAll;
        }
        hasItem2 = hasItem;
      }
      tmp9 = hasItem2;
    }
    tmp = tmp9;
  }
  return tmp;
};