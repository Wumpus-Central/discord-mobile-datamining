// discord_app/modules/guild_role_subscriptions/RolePermissionUtils.tsx
import Constants from "../../Constants.tsx";
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import GuildRoleRecord from "../../records/GuildRoleRecord.tsx";
import size from "../../../_runtime/metro/00002__.js";

const hasPermission = GuildRoleRecord.hasPermission;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/RolePermissionUtils.tsx");

export const hasViewChannelPermission = function hasViewChannelPermission(arg0) {
  return hasPermission(arg0, Permissions.VIEW_CHANNEL);
};
export const isChannelAccessDeniedBy = function isChannelAccessDeniedBy(isGuildVocal, deny) {
  let tmp = null != deny;
  if (tmp) {
    let hasItem = BigFlagUtilsAll.has(deny.deny, Permissions.VIEW_CHANNEL);
    if (!hasItem) {
      let isGuildVocalResult = isGuildVocal.isGuildVocal();
      if (isGuildVocalResult) {
        isGuildVocalResult = tmp2(1086).has(deny.deny, tmp4.CONNECT);
        const tmp2Result = tmp2(1086);
      }
      hasItem = isGuildVocalResult;
    }
    tmp = hasItem;
    tmp2 = importAll;
    tmp4 = Permissions;
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
          isGuildVocalResult = tmp4(1086).has(deny.deny, tmp6.CONNECT);
          const tmp4Result = tmp4(1086);
        }
        hasItem = isGuildVocalResult;
      }
      tmp3 = hasItem;
      tmp4 = importAll;
      tmp6 = Permissions;
    }
    let tmp9 = !tmp3;
    if (!tmp3) {
      let hasItem1 = BigFlagUtilsAll.has(deny.allow, Permissions.VIEW_CHANNEL);
      if (hasItem1) {
        const isGuildVocalResult1 = isGuildVocal.isGuildVocal();
        hasItem = !isGuildVocalResult1;
        if (isGuildVocalResult1) {
          hasItem = tmp10(1086).has(deny.allow, tmp12.CONNECT);
          const tmp10Result = tmp10(1086);
        }
        hasItem1 = hasItem;
      }
      tmp9 = hasItem1;
      tmp10 = importAll;
      tmp12 = Permissions;
    }
    tmp = tmp9;
  }
  return tmp;
};
