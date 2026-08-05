// discord_app/records/GuildRoleRecord.tsx
import { TypeTag } from "isValueEqual";
import { apply } from "../../_runtime/00012_apply.js";
import { fromString } from "../../discord_common/js/shared/utils/BigFlagUtils.tsx";

const result = require("apply").fileFinishedImporting("records/GuildRoleRecord.tsx");

export const GuildRoleRecordTypeTag = "GuildRole";
export const isEveryoneRole = function isEveryoneRole(role) {
  return role.id === role.guildId;
};
export const hasPermission = function hasPermission(permissions) {
  return fromString /* fromString */.has(permissions.permissions, arg1);
};
export const hasAnyPermission = function hasAnyPermission(permissions) {
  return fromString /* fromString */.hasAny(permissions.permissions, arg1);
};
export const isRoleEqual = function isRoleEqual(pickResult, arg1) {
  return apply.isEqualWith(pickResult, arg1, (arg0, arg1, arg2) => {
    let equalsResult;
    if ("permissions" === arg2) {
      equalsResult = callback(table[1]).equals(arg0, arg1);
      const obj = callback(table[1]);
    }
    return equalsResult;
  });
};