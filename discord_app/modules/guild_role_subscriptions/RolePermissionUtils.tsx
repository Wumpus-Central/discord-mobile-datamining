// === Module 4013: hasViewChannelPermission ===

// Module 4013 (hasViewChannelPermission)
import obj132 from "obj132" /* 2 */;
import fromStringAll from "fromString" /* 506 */;
import ME from "ME" /* 676 */;
import GuildRoleRecordTypeTag from "GuildRoleRecordTypeTag" /* 1984 */;

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