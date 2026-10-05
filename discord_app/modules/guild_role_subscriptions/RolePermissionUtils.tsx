// === Module 4500: RolePermissionUtils ===

// Module 4500 (RolePermissionUtils)
import Constants from "Constants" /* 1085 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import GuildRoleRecord from "GuildRoleRecord" /* 2107 */;
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
    const obj = BigFlagUtilsAll;
    let hasItem = obj.has(deny.deny, Permissions.VIEW_CHANNEL);
    if (!hasItem) {
      let isGuildVocalResult = isGuildVocal.isGuildVocal();
      if (isGuildVocalResult) {
        const tmp2Result = BigFlagUtilsAll;
        isGuildVocalResult = tmp2Result.has(deny.deny, Permissions.CONNECT);
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
      const obj = BigFlagUtilsAll;
      let hasItem1 = obj.has(deny.deny, Permissions.VIEW_CHANNEL);
      if (!hasItem1) {
        let isGuildVocalResult = isGuildVocal.isGuildVocal();
        if (isGuildVocalResult) {
          const tmp4Result = BigFlagUtilsAll;
          isGuildVocalResult = tmp4Result.has(deny.deny, Permissions.CONNECT);
        }
        hasItem1 = isGuildVocalResult;
      }
      tmp3 = hasItem1;
    }
    let tmp9 = !tmp3;
    if (tmp9) {
      const obj3 = BigFlagUtilsAll;
      let hasItem2 = obj3.has(deny.allow, Permissions.VIEW_CHANNEL);
      if (hasItem2) {
        const isGuildVocalResult1 = isGuildVocal.isGuildVocal();
        let hasItem = !isGuildVocalResult1;
        if (isGuildVocalResult1) {
          const tmp10Result = BigFlagUtilsAll;
          hasItem = tmp10Result.has(deny.allow, Permissions.CONNECT);
        }
        hasItem2 = hasItem;
      }
      tmp9 = hasItem2;
    }
    tmp = tmp9;
  }
  return tmp;
};