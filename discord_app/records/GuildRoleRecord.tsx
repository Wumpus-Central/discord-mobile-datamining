// discord_app/records/GuildRoleRecord.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import BigFlagUtils from "../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import PlainRecord from "../lib/PlainRecord.tsx";
import size from "../../_runtime/metro/00002__.js";

const TypeTag = PlainRecord.TypeTag;
const result = size.fileFinishedImporting("records/GuildRoleRecord.tsx");

export const GuildRoleRecordTypeTag = "GuildRole";
export const isEveryoneRole = function isEveryoneRole(role) {
  return role.id === role.guildId;
};
export const hasPermission = function hasPermission(permissions, VIEW_CHANNEL) {
  const obj = BigFlagUtils;
  return obj.has(permissions.permissions, VIEW_CHANNEL);
};
export const hasAnyPermission = function hasAnyPermission(permissions, RESTRICTED_TO_ADULT) {
  const obj = BigFlagUtils;
  return obj.hasAny(permissions.permissions, RESTRICTED_TO_ADULT);
};
export const isRoleEqual = function isRoleEqual(found, arg1) {
  let obj = _modDef12;
  return obj.isEqualWith(found, arg1, (arg0, arg1, arg2) => {
    let equalsResult;
    if ("permissions" === arg2) {
      const obj = BigFlagUtils;
      equalsResult = obj.equals(arg0, arg1);
    }
    return equalsResult;
  });
};
