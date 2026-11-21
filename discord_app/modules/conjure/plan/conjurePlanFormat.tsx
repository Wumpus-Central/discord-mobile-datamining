// === Module 18565: conjurePlanFormat ===

// Module 18565 (conjurePlanFormat)
import Constants from "Constants" /* 1071 */;
import Server from "Server" /* 2117 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
let closure_3 = { READ_MESSAGES: "VIEW_CHANNEL", VIEW_GUILD_INSIGHTS: "VIEW_GUILD_ANALYTICS" };
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
  if (Object.hasOwn(closure_3, str)) {
    tmp2 = closure_3[str];
  }
  let tmp4 = null;
  if (Object.hasOwn(Permissions, tmp2)) {
    tmp4 = Permissions[tmp2];
  }
  let tmp5 = null;
  if (null != tmp4) {
    let title;
    if (guildPermissionSpecMap != null) {
      const tmp8 = guildPermissionSpecMap[tmp4.toString(tmp4)];
      if (tmp8 != null) {
        title = tmp8.title;
      }
    }
    tmp5 = title;
  }
  if (tmp5 == null) {
    const parts = str.split("_");
    const formatted = parts.join(" ").toLowerCase();
    let sum = formatted;
    if (0 !== formatted.length) {
      const formatted1 = formatted[0].toUpperCase();
      sum = formatted1 + formatted.slice(1);
    }
    tmp5 = sum;
    const str3 = parts.join(" ");
  }
  return tmp5;
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