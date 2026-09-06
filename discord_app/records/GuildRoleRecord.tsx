// === Module 2016: GuildRoleRecord ===

// Module 2016 (GuildRoleRecord)
import _modDef12 from "module_12" /* 12 */;
import BigFlagUtils from "BigFlagUtils" /* 1086 */;
import PlainRecord from "PlainRecord" /* 1972 */;
import size from "module_2" /* 2 */;

const TypeTag = PlainRecord.TypeTag;
const result = size.fileFinishedImporting("records/GuildRoleRecord.tsx");

export const GuildRoleRecordTypeTag = "GuildRole";
export const isEveryoneRole = function isEveryoneRole(role) {
  return role.id === role.guildId;
};
export const hasPermission = function hasPermission(permissions, arg1) {
  return BigFlagUtils.has(permissions.permissions, arg1);
};
export const hasAnyPermission = function hasAnyPermission(permissions, arg1) {
  return BigFlagUtils.hasAny(permissions.permissions, arg1);
};
export const isRoleEqual = function isRoleEqual(found, arg1) {
  return _modDef12.isEqualWith(found, arg1, (arg0, arg1, arg2) => {
    let equalsResult;
    if ("permissions" === arg2) {
      equalsResult = BigFlagUtils.equals(arg0, arg1);
    }
    return equalsResult;
  });
};