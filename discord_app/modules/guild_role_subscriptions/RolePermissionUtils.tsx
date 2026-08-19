// discord_app/modules/guild_role_subscriptions/RolePermissionUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import fromStringAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import ME from "../../Constants.tsx";
import GuildRoleRecordTypeTag from "../../records/GuildRoleRecord.tsx";

const hasPermission = GuildRoleRecordTypeTag.hasPermission;
const Permissions = ME.Permissions;
const result = obj132.fileFinishedImporting("modules/guild_role_subscriptions/RolePermissionUtils.tsx");

export const hasViewChannelPermission = function hasViewChannelPermission(item10077) {
  return hasPermission(item10077, Permissions.VIEW_CHANNEL);
};
export const isChannelAccessDeniedBy = function isChannelAccessDeniedBy(isGuildVocal, deny) {
  let tmp = null != deny;
  if (tmp) {
    let hasItem = fromStringAll.has(deny.deny, Permissions.VIEW_CHANNEL);
    if (!hasItem) {
      let isGuildVocalResult = isGuildVocal.isGuildVocal();
      if (isGuildVocalResult) {
        isGuildVocalResult = fromStringAll.has(deny.deny, Permissions.CONNECT);
        const tmp2Result = fromStringAll;
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
      let hasItem = fromStringAll.has(deny.deny, Permissions.VIEW_CHANNEL);
      if (!hasItem) {
        let isGuildVocalResult = isGuildVocal.isGuildVocal();
        if (isGuildVocalResult) {
          isGuildVocalResult = fromStringAll.has(deny.deny, Permissions.CONNECT);
          const tmp4Result = fromStringAll;
        }
        hasItem = isGuildVocalResult;
      }
      tmp3 = hasItem;
    }
    let tmp9 = !tmp3;
    if (!tmp3) {
      let hasItem1 = fromStringAll.has(deny.allow, Permissions.VIEW_CHANNEL);
      if (hasItem1) {
        const isGuildVocalResult1 = isGuildVocal.isGuildVocal();
        hasItem = !isGuildVocalResult1;
        if (isGuildVocalResult1) {
          hasItem = fromStringAll.has(deny.allow, Permissions.CONNECT);
          const tmp10Result = fromStringAll;
        }
        hasItem1 = hasItem;
      }
      tmp9 = hasItem1;
    }
    tmp = tmp9;
  }
  return tmp;
};