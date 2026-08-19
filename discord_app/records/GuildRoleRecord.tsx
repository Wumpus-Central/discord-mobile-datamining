// discord_app/records/GuildRoleRecord.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import applyDefault from "../../_runtime/00012_apply.js";
import fromString from "../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import isValueEqual from "../lib/PlainRecord.tsx";

const TypeTag = isValueEqual.TypeTag;
const result = obj132.fileFinishedImporting("records/GuildRoleRecord.tsx");

export const GuildRoleRecordTypeTag = "GuildRole";
export const isEveryoneRole = function isEveryoneRole(role) {
  return role.id === role.guildId;
};
export const hasPermission = function hasPermission(permissions) {
  return fromString.has(permissions.permissions, arg1);
};
export const hasAnyPermission = function hasAnyPermission(permissions, closure_2_15) {
  return fromString.hasAny(permissions.permissions, closure_2_15);
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