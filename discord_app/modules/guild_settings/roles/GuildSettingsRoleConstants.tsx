// === Module 17952: GuildSettingsRoleConstants ===

// Module 17952 (GuildSettingsRoleConstants)
import util from "util" /* 1115 */;
import PermissionUtilsAll from "PermissionUtils" /* 4366 */;
import GuildSettingsRolesStore from "GuildSettingsRolesStore" /* 17953 */;
import Constants from "Constants" /* 1074 */;
import EnhancedRoleColorConstants from "EnhancedRoleColorConstants" /* 17955 */;
import "BigFlagUtils";
import BigFlagUtils_mod from "BigFlagUtils" /* 1086 */;
import shims_mod from "shims" /* 575 */;
import size from "module_2" /* 2 */;

const RoleColorsStyle = GuildSettingsRolesStore.RoleColorsStyle;
({ Permissions, DEFAULT_ROLE_COLOR } = Constants);
const obj = { COSMETIC: 0, [0]: "COSMETIC", MEMBER: 1, [1]: "MEMBER", MODERATOR: 2, [2]: "MODERATOR", MANAGER: 3, [3]: "MANAGER" };
({ DEFAULT_GRADIENT_ROLE_COLORS, HOLOGRAPHIC_ROLE_COLORS } = EnhancedRoleColorConstants);
let BigFlagUtils = BigFlagUtils_mod;
const combineResult = BigFlagUtils.combine(PermissionUtilsAll.DEFAULT, Permissions.VIEW_AUDIT_LOG, Permissions.MANAGE_NICKNAMES, Permissions.KICK_MEMBERS, Permissions.BAN_MEMBERS, Permissions.MANAGE_MESSAGES, Permissions.MUTE_MEMBERS, Permissions.DEAFEN_MEMBERS, Permissions.MOVE_MEMBERS, Permissions.PRIORITY_SPEAKER, Permissions.MODERATE_MEMBERS);
let BigFlagUtils = BigFlagUtils_mod;
const combineResult1 = BigFlagUtils.combine(combineResult, Permissions.MANAGE_CHANNELS, Permissions.MANAGE_THREADS, Permissions.MANAGE_ROLES, Permissions.MANAGE_GUILD_EXPRESSIONS, Permissions.MANAGE_GUILD, Permissions.MANAGE_WEBHOOKS, Permissions.SEND_TTS_MESSAGES);
let BigFlagUtils = BigFlagUtils_mod;
const obj2 = {};
const obj3 = { key: "template_cosmetic", color: null, permissions: null, title: null, description: null, contents: null, contentPreface: null };
const removeResult = BigFlagUtils.remove(PermissionUtilsAll.DEFAULT, Permissions.MENTION_EVERYONE);
let shims = shims_mod;
obj3.color = shims.unsafe_getRawColor("BRAND_500");
obj3.permissions = PermissionUtilsAll.NONE;
obj3.title = function title() {
  const intl = util.intl;
  return intl.string(util.t.M8jQyg);
};
obj3.description = function description() {
  const intl = util.intl;
  return intl.string(util.t["7nF/S/"]);
};
obj3.contents = function contents() {
  const intl = util.intl;
  const items = [intl.string(util.t.uwLDAb), ];
  const intl2 = util.intl;
  items[1] = intl2.string(util.t.gqngN7);
  return items;
};
obj3.contentPreface = function contentPreface() {
  return "";
};
obj2[obj.COSMETIC] = obj3;
const obj4 = { key: "template_member", color: null, permissions: null, communityPermissions: null, title: null, description: null, contents: null, contentPreface: null };
let shims = shims_mod;
obj4.color = shims.unsafe_getRawColor("GREEN_360");
obj4.permissions = PermissionUtilsAll.DEFAULT;
obj4.communityPermissions = removeResult;
obj4.title = function title() {
  const intl = util.intl;
  return intl.string(util.t["9BsHzh"]);
};
obj4.description = function description() {
  const intl = util.intl;
  return intl.string(util.t.ywKYtw);
};
obj4.contents = function contents() {
  const intl = util.intl;
  const items = [intl.string(util.t["9Vhbnl"]), , ];
  const intl2 = util.intl;
  items[1] = intl2.string(util.t["0xn+w1"]);
  const intl3 = util.intl;
  items[2] = intl3.string(util.t.ieWVpB);
  return items;
};
obj4.contentPreface = function contentPreface() {
  return "";
};
obj2[obj.MEMBER] = obj4;
const obj5 = { key: "template_moderator", color: null, permissions: null, title: null, description: null, contents: null, contentPreface: null };
let shims = shims_mod;
obj5.color = shims.unsafe_getRawColor("YELLOW_300");
obj5.permissions = combineResult;
obj5.title = function title() {
  const intl = util.intl;
  return intl.string(util.t["m/GC8z"]);
};
obj5.description = function description() {
  const intl = util.intl;
  return intl.string(util.t.ERrMJZ);
};
obj5.contents = function contents() {
  const intl = util.intl;
  const items = [intl.string(util.t.YOSxcd), , , ];
  const intl2 = util.intl;
  items[1] = intl2.string(util.t.q9H4Fm);
  const intl3 = util.intl;
  items[2] = intl3.string(util.t["9nHnCj"]);
  const intl4 = util.intl;
  items[3] = intl4.string(util.t.iqwXvc);
  return items;
};
obj5.contentPreface = function contentPreface() {
  const intl = util.intl;
  return intl.string(util.t.amGM7K);
};
obj2[obj.MODERATOR] = obj5;
const obj6 = { key: "template_manager", color: null, permissions: null, communityPermissions: null, title: null, description: null, contents: null, contentPreface: null };
let shims = shims_mod;
obj6.color = shims.unsafe_getRawColor("RED_400");
obj6.permissions = combineResult1;
obj6.communityPermissions = BigFlagUtils.add(combineResult1, Permissions.VIEW_GUILD_ANALYTICS);
obj6.title = function title() {
  const intl = util.intl;
  return intl.string(util.t.qKmu3w);
};
obj6.description = function description() {
  const intl = util.intl;
  return intl.string(util.t.WxWPYV);
};
obj6.contents = function contents() {
  const intl = util.intl;
  const items = [intl.string(util.t.Hx1Vox), , , ];
  const intl2 = util.intl;
  items[1] = intl2.string(util.t["aUZ/zD"]);
  const intl3 = util.intl;
  items[2] = intl3.string(util.t["8lQujv"]);
  const intl4 = util.intl;
  items[3] = intl4.string(util.t.cUP4pl);
  return items;
};
obj6.contentPreface = function contentPreface() {
  const intl = util.intl;
  return intl.string(util.t["7Dkb62"]);
};
obj2[obj.MANAGER] = obj6;
const addResult = BigFlagUtils.add(combineResult1, Permissions.VIEW_GUILD_ANALYTICS);
let items = [{ id: RoleColorsStyle.SOLID, colors: { primary_color: DEFAULT_ROLE_COLOR, secondary_color: null, tertiary_color: null }, labelString: util.t["8Qyahn"] }, , ];
const obj7 = { id: RoleColorsStyle.SOLID, colors: { primary_color: DEFAULT_ROLE_COLOR, secondary_color: null, tertiary_color: null }, labelString: util.t["8Qyahn"] };
items[1] = { id: RoleColorsStyle.GRADIENT, colors: DEFAULT_GRADIENT_ROLE_COLORS, labelString: util.t.XpWmJz };
const obj8 = { id: RoleColorsStyle.GRADIENT, colors: DEFAULT_GRADIENT_ROLE_COLORS, labelString: util.t.XpWmJz };
items[2] = { id: RoleColorsStyle.HOLOGRAPHIC, colors: HOLOGRAPHIC_ROLE_COLORS, labelString: util.t.QTKppe };
const result = size.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRoleConstants.tsx");

export const CREATE_ROLE_DESKTOP_MODAL_WIDTH = 440;
export const DEFAULT_HEADER_HEIGHT_PX = 371;
export const MAX_BULK_ROLE_MEMBERS_ADD = 30;
export const PermissionTemplateTypes = obj;
export const DEFAULT_TEMPLATE_TYPE = obj.COSMETIC;
export const PermissionTemplates = obj2;
export const STYLE_CONFIGS = items;