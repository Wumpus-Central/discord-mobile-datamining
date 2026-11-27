// discord_app/modules/conjure/plan/conjurePlanFormat.tsx
import Constants from "../../../Constants.tsx";
import Server from "../../../flow/Server.tsx";
import getGuildPermissionNameDefault from "../../permissions/getGuildPermissionName.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const Permissions = Constants.Permissions;
let closure_4 = { READ_MESSAGES: "VIEW_CHANNEL", VIEW_GUILD_INSIGHTS: "VIEW_GUILD_ANALYTICS" };
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanFormat.tsx");

export function formatConjurePlanRequirementLabel(str) {
  const parts = str.split("_");
  str = parts.join(" ");
  const formatted = str.toLowerCase();
  let sum = formatted;
  if (0 !== formatted.length) {
    const formatted1 = formatted[0].toUpperCase();
    sum = formatted1 + formatted.slice(1);
  }
  return sum;
}
export function conjurePlanPermissionLabel(str, guildPermissionSpecMap) {
  let tmp2 = str;
  if (Object.hasOwn(closure_4, str)) {
    tmp2 = closure_4[str];
  }
  let tmp4 = null;
  if (Object.hasOwn(Permissions, tmp2)) {
    tmp4 = Permissions[tmp2];
  }
  if (null != tmp4) {
    let sum = getGuildPermissionNameDefault(tmp4, guildPermissionSpecMap);
  } else {
    const parts = str.split("_");
    const formatted = parts.join(" ").toLowerCase();
    sum = formatted;
    if (0 !== formatted.length) {
      const formatted1 = formatted[0].toUpperCase();
      sum = formatted1 + formatted.slice(1);
    }
    const str3 = parts.join(" ");
  }
  return sum;
}
export function conjurePlanCommandPrefix(type) {
  let str = "\u21EA /";
  if (type.type !== Server.ApplicationCommandType.PRIMARY_ENTRY_POINT) {
    if (type.type === Server.ApplicationCommandType.USER) {
      let str2 = "";
    } else {
      str2 = "/";
    }
    str = str2;
  }
  return str;
}
