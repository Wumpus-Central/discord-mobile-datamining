// === Module 3875: hasViewChannelPermission ===

// Module 3875 (hasViewChannelPermission)
import { hasPermission } from "GuildRoleRecordTypeTag";
import { Permissions } from "ME";

const result = require("fromString").fileFinishedImporting("modules/guild_role_subscriptions/RolePermissionUtils.tsx");

export const hasViewChannelPermission = function hasViewChannelPermission(arg0) {
  return hasPermission(arg0, Permissions.VIEW_CHANNEL);
};
export const isChannelAccessDeniedBy = function isChannelAccessDeniedBy(isGuildVocal, deny) {
  let tmp = null != deny;
  if (tmp) {
    let hasItem = importAll(506).has(deny.deny, Permissions.VIEW_CHANNEL);
    if (!hasItem) {
      let isGuildVocalResult = isGuildVocal.isGuildVocal();
      if (isGuildVocalResult) {
        isGuildVocalResult = tmp2(506).has(deny.deny, tmp4.CONNECT);
        const tmp2Result = tmp2(506);
      }
      hasItem = isGuildVocalResult;
    }
    tmp = hasItem;
    const obj = importAll(506);
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
      let hasItem = importAll(506).has(deny.deny, Permissions.VIEW_CHANNEL);
      if (!hasItem) {
        let isGuildVocalResult = isGuildVocal.isGuildVocal();
        if (isGuildVocalResult) {
          isGuildVocalResult = tmp4(506).has(deny.deny, tmp6.CONNECT);
          const tmp4Result = tmp4(506);
        }
        hasItem = isGuildVocalResult;
      }
      tmp3 = hasItem;
      const obj = importAll(506);
      tmp4 = importAll;
      tmp6 = Permissions;
    }
    let tmp9 = !tmp3;
    if (!tmp3) {
      let hasItem1 = importAll(506).has(deny.allow, Permissions.VIEW_CHANNEL);
      if (hasItem1) {
        const isGuildVocalResult1 = isGuildVocal.isGuildVocal();
        hasItem = !isGuildVocalResult1;
        if (isGuildVocalResult1) {
          hasItem = tmp10(506).has(deny.allow, tmp12.CONNECT);
          const tmp10Result = tmp10(506);
        }
        hasItem1 = hasItem;
      }
      tmp9 = hasItem1;
      const obj3 = importAll(506);
      tmp10 = importAll;
      tmp12 = Permissions;
    }
    tmp = tmp9;
  }
  return tmp;
};