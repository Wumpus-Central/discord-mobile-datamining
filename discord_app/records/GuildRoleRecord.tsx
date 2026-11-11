// === Module 5150: GuildRoleRecord ===

// Module 5150 (GuildRoleRecord)
import applyDefault from "apply" /* 12 */;
import BigFlagUtils from "BigFlagUtils" /* 1084 */;
import PlainRecord from "PlainRecord" /* 5107 */;
import size from "module_2" /* 2 */;

const TypeTag = PlainRecord.TypeTag;
const result = size.fileFinishedImporting("records/GuildRoleRecord.tsx");

export const GuildRoleRecordTypeTag = "GuildRole";
export function isEveryoneRole(role) {
  return role.id === role.guildId;
}
export function hasPermission(permissions, VIEW_CHANNEL) {
  return BigFlagUtils.has(permissions.permissions, VIEW_CHANNEL);
}
export function hasAnyPermission(permissions, RESTRICTED_TO_ADULT) {
  return BigFlagUtils.hasAny(permissions.permissions, RESTRICTED_TO_ADULT);
}
export function isRoleEqual(found, arg1) {
  return applyDefault.isEqualWith(found, arg1, (arg0, arg1, arg2) => {
    let equalsResult;
    if ("permissions" === arg2) {
      equalsResult = BigFlagUtils.equals(arg0, arg1);
    }
    return equalsResult;
  });
}