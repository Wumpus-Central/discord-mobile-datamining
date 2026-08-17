// discord_app/modules/guild_settings/roles/GuildSettingsRoleConstants.tsx
import set from "../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import applyOverwritesAll from "../../../utils/PermissionUtils.tsx";
import handleSetSection from "GuildSettingsRolesStore.tsx";
import ME from "../../../Constants.tsx";
import HOLOGRAPHIC_ROLE_COLORS from "../../premium/powerups/constants/EnhancedRoleColorConstants.tsx";
import importAllResult from "../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import unsafe_getRawColor from "../../../../discord_common/js/packages/tokens/shims.native.tsx";

const RoleColorsStyle = handleSetSection.RoleColorsStyle;
({ Permissions, DEFAULT_ROLE_COLOR } = ME);
let obj = { COSMETIC: 0, [0]: "COSMETIC", MEMBER: 1, [1]: "MEMBER", MODERATOR: 2, [2]: "MODERATOR", MANAGER: 3, [3]: "MANAGER" };
({ DEFAULT_GRADIENT_ROLE_COLORS, HOLOGRAPHIC_ROLE_COLORS } = HOLOGRAPHIC_ROLE_COLORS);
const removeResult = importAllResult.remove(applyOverwritesAll.DEFAULT, Permissions.MENTION_EVERYONE);
const combineResult = importAllResult.combine(applyOverwritesAll.DEFAULT, Permissions.VIEW_AUDIT_LOG, Permissions.MANAGE_NICKNAMES, Permissions.KICK_MEMBERS, Permissions.BAN_MEMBERS, Permissions.MANAGE_MESSAGES, Permissions.MUTE_MEMBERS, Permissions.DEAFEN_MEMBERS, Permissions.MOVE_MEMBERS, Permissions.PRIORITY_SPEAKER, Permissions.MODERATE_MEMBERS);
const importAllResult1 = importAllResult;
const combineResult1 = importAllResult.combine(combineResult, Permissions.MANAGE_CHANNELS, Permissions.MANAGE_THREADS, Permissions.MANAGE_ROLES, Permissions.MANAGE_GUILD_EXPRESSIONS, Permissions.MANAGE_GUILD, Permissions.MANAGE_WEBHOOKS, Permissions.SEND_TTS_MESSAGES);
const importAllResult2 = importAllResult;
obj = {};
obj = { key: "template_cosmetic", color: null, permissions: null, title: null, description: null, contents: null, contentPreface: null };
const importAllResult3 = importAllResult;
obj[1] = unsafe_getRawColor.unsafe_getRawColor("BRAND_500");
obj[2] = applyOverwritesAll.NONE;
obj[3] = function title() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t.M8jQyg);
};
obj[4] = function description() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t["7nF/S/"]);
};
obj[5] = function contents() {
  const intl = getSystemLocale.intl;
  const items = [intl.string(getSystemLocale.t.uwLDAb), ];
  const intl2 = getSystemLocale.intl;
  items[1] = intl2.string(getSystemLocale.t.gqngN7);
  return items;
};
obj[6] = function contentPreface() {
  return "";
};
obj[obj.COSMETIC] = obj;
const obj1 = { key: "template_member", color: null, permissions: null, communityPermissions: null, title: null, description: null, contents: null, contentPreface: null };
obj1[1] = unsafe_getRawColor.unsafe_getRawColor("GREEN_360");
obj1[2] = applyOverwritesAll.DEFAULT;
obj1[3] = removeResult;
obj1[4] = function title() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t["9BsHzh"]);
};
obj1[5] = function description() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t.ywKYtw);
};
obj1[6] = function contents() {
  const intl = getSystemLocale.intl;
  const items = [intl.string(getSystemLocale.t["9Vhbnl"]), , ];
  const intl2 = getSystemLocale.intl;
  items[1] = intl2.string(getSystemLocale.t["0xn+w1"]);
  const intl3 = getSystemLocale.intl;
  items[2] = intl3.string(getSystemLocale.t.ieWVpB);
  return items;
};
obj1[7] = function contentPreface() {
  return "";
};
obj[obj.MEMBER] = obj1;
const obj2 = { key: "template_moderator", color: null, permissions: null, title: null, description: null, contents: null, contentPreface: null };
obj2[1] = unsafe_getRawColor.unsafe_getRawColor("YELLOW_300");
obj2[2] = combineResult;
obj2[3] = function title() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t["m/GC8z"]);
};
obj2[4] = function description() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t.ERrMJZ);
};
obj2[5] = function contents() {
  const intl = getSystemLocale.intl;
  const items = [intl.string(getSystemLocale.t.YOSxcd), , , ];
  const intl2 = getSystemLocale.intl;
  items[1] = intl2.string(getSystemLocale.t.q9H4Fm);
  const intl3 = getSystemLocale.intl;
  items[2] = intl3.string(getSystemLocale.t["9nHnCj"]);
  const intl4 = getSystemLocale.intl;
  items[3] = intl4.string(getSystemLocale.t.iqwXvc);
  return items;
};
obj2[6] = function contentPreface() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t.amGM7K);
};
obj[obj.MODERATOR] = obj2;
const obj3 = { key: "template_manager", color: null, permissions: null, communityPermissions: null, title: null, description: null, contents: null, contentPreface: null };
obj3[1] = unsafe_getRawColor.unsafe_getRawColor("RED_400");
obj3[2] = combineResult1;
obj3[3] = importAllResult.add(combineResult1, Permissions.VIEW_GUILD_ANALYTICS);
obj3[4] = function title() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t.qKmu3w);
};
obj3[5] = function description() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t.WxWPYV);
};
obj3[6] = function contents() {
  const intl = getSystemLocale.intl;
  const items = [intl.string(getSystemLocale.t.Hx1Vox), , , ];
  const intl2 = getSystemLocale.intl;
  items[1] = intl2.string(getSystemLocale.t["aUZ/zD"]);
  const intl3 = getSystemLocale.intl;
  items[2] = intl3.string(getSystemLocale.t["8lQujv"]);
  const intl4 = getSystemLocale.intl;
  items[3] = intl4.string(getSystemLocale.t.cUP4pl);
  return items;
};
obj3[7] = function contentPreface() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t["7Dkb62"]);
};
obj[obj.MANAGER] = obj3;
const addResult = importAllResult.add(combineResult1, Permissions.VIEW_GUILD_ANALYTICS);
let items = [{ id: RoleColorsStyle.SOLID, colors: { primary_color: DEFAULT_ROLE_COLOR, secondary_color: null, tertiary_color: null }, labelString: getSystemLocale.t["8Qyahn"] }, , ];
const obj4 = { id: RoleColorsStyle.SOLID, colors: { primary_color: DEFAULT_ROLE_COLOR, secondary_color: null, tertiary_color: null }, labelString: getSystemLocale.t["8Qyahn"] };
items[1] = { id: RoleColorsStyle.GRADIENT, colors: DEFAULT_GRADIENT_ROLE_COLORS, labelString: getSystemLocale.t.XpWmJz };
const obj5 = { id: RoleColorsStyle.GRADIENT, colors: DEFAULT_GRADIENT_ROLE_COLORS, labelString: getSystemLocale.t.XpWmJz };
items[2] = { id: RoleColorsStyle.HOLOGRAPHIC, colors: HOLOGRAPHIC_ROLE_COLORS, labelString: getSystemLocale.t.QTKppe };
const obj6 = { id: RoleColorsStyle.HOLOGRAPHIC, colors: HOLOGRAPHIC_ROLE_COLORS, labelString: getSystemLocale.t.QTKppe };
const result = set.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRoleConstants.tsx");

export const CREATE_ROLE_DESKTOP_MODAL_WIDTH = 440;
export const DEFAULT_HEADER_HEIGHT_PX = 371;
export const MAX_BULK_ROLE_MEMBERS_ADD = 30;
export const PermissionTemplateTypes = obj;
export const DEFAULT_TEMPLATE_TYPE = obj.COSMETIC;
export const PermissionTemplates = obj;
export const STYLE_CONFIGS = items;