// === Module 2016: GuildRoleRecordTypeTag ===

// Module 2016 (GuildRoleRecordTypeTag)
import set from "set" /* 2 */;
import applyDefault from "apply" /* 12 */;
import fromString from "fromString" /* 1086 */;
import isValueEqual from "isValueEqual" /* 1972 */;

const TypeTag = isValueEqual.TypeTag;
const result = set.fileFinishedImporting("records/GuildRoleRecord.tsx");

export const GuildRoleRecordTypeTag = "GuildRole";
export const isEveryoneRole = function isEveryoneRole(role) {
  return role.id === role.guildId;
};
export const hasPermission = function hasPermission(permissions) {
  return fromString.has(permissions.permissions, arg1);
};
export const hasAnyPermission = function hasAnyPermission(permissions) {
  return fromString.hasAny(permissions.permissions, arg1);
};
export const isRoleEqual = function isRoleEqual(pickResult, arg1) {
  return applyDefault.isEqualWith(pickResult, arg1, (arg0, arg1, arg2) => {
    let equalsResult;
    if ("permissions" === arg2) {
      equalsResult = callback(table[1]).equals(arg0, arg1);
      const obj = callback(table[1]);
    }
    return equalsResult;
  });
};