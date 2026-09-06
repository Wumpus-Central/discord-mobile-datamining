// discord_app/modules/guild_settings/roles/GuildSettingsRoleConstants.tsx
import util from "../../../intl/index.native.tsx";
import PermissionUtilsAll from "../../../utils/PermissionUtils.tsx";
import GuildSettingsRolesStore from "GuildSettingsRolesStore.tsx";
import Constants from "../../../Constants.tsx";
import EnhancedRoleColorConstants from "../../premium/powerups/constants/EnhancedRoleColorConstants.tsx";
import "BigFlagUtils";
import BigFlagUtils from "../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import shims from "../../../../discord_common/js/packages/tokens/shims.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const RoleColorsStyle = GuildSettingsRolesStore.RoleColorsStyle;
({ Permissions, DEFAULT_ROLE_COLOR } = Constants);
let obj = {
  COSMETIC: 0,
  [0]: "COSMETIC",
  MEMBER: 1,
  [1]: "MEMBER",
  MODERATOR: 2,
  [2]: "MODERATOR",
  MANAGER: 3,
  [3]: "MANAGER",
};
({ DEFAULT_GRADIENT_ROLE_COLORS, HOLOGRAPHIC_ROLE_COLORS } = EnhancedRoleColorConstants);
const combineResult = BigFlagUtils.combine(
  PermissionUtilsAll.DEFAULT,
  Permissions.VIEW_AUDIT_LOG,
  Permissions.MANAGE_NICKNAMES,
  Permissions.KICK_MEMBERS,
  Permissions.BAN_MEMBERS,
  Permissions.MANAGE_MESSAGES,
  Permissions.MUTE_MEMBERS,
  Permissions.DEAFEN_MEMBERS,
  Permissions.MOVE_MEMBERS,
  Permissions.PRIORITY_SPEAKER,
  Permissions.MODERATE_MEMBERS,
);
const combineResult1 = BigFlagUtils.combine(
  combineResult,
  Permissions.MANAGE_CHANNELS,
  Permissions.MANAGE_THREADS,
  Permissions.MANAGE_ROLES,
  Permissions.MANAGE_GUILD_EXPRESSIONS,
  Permissions.MANAGE_GUILD,
  Permissions.MANAGE_WEBHOOKS,
  Permissions.SEND_TTS_MESSAGES,
);
obj = {};
obj = {
  key: "template_cosmetic",
  color: null,
  permissions: null,
  title: null,
  description: null,
  contents: null,
  contentPreface: null,
};
const removeResult = BigFlagUtils.remove(PermissionUtilsAll.DEFAULT, Permissions.MENTION_EVERYONE);
obj.color = shims.unsafe_getRawColor("BRAND_500");
obj.permissions = PermissionUtilsAll.NONE;
obj.title = function title() {
  const intl = util.intl;
  return intl.string(util.t.M8jQyg);
};
obj.description = function description() {
  const intl = util.intl;
  return intl.string(util.t["7nF/S/"]);
};
obj.contents = function contents() {
  const intl = util.intl;
  const items = [intl.string(util.t.uwLDAb)];
  const intl2 = util.intl;
  items[1] = intl2.string(util.t.gqngN7);
  return items;
};
obj.contentPreface = function contentPreface() {
  return "";
};
obj[obj.COSMETIC] = obj;
const obj1 = {
  key: "template_member",
  color: null,
  permissions: null,
  communityPermissions: null,
  title: null,
  description: null,
  contents: null,
  contentPreface: null,
};
obj1.color = shims.unsafe_getRawColor("GREEN_360");
obj1.permissions = PermissionUtilsAll.DEFAULT;
obj1.communityPermissions = removeResult;
obj1.title = function title() {
  const intl = util.intl;
  return intl.string(util.t["9BsHzh"]);
};
obj1.description = function description() {
  const intl = util.intl;
  return intl.string(util.t.ywKYtw);
};
obj1.contents = function contents() {
  const intl = util.intl;
  const items = [intl.string(util.t["9Vhbnl"]), ,];
  const intl2 = util.intl;
  items[1] = intl2.string(util.t["0xn+w1"]);
  const intl3 = util.intl;
  items[2] = intl3.string(util.t.ieWVpB);
  return items;
};
obj1.contentPreface = function contentPreface() {
  return "";
};
obj[obj.MEMBER] = obj1;
const obj2 = {
  key: "template_moderator",
  color: null,
  permissions: null,
  title: null,
  description: null,
  contents: null,
  contentPreface: null,
};
obj2.color = shims.unsafe_getRawColor("YELLOW_300");
obj2.permissions = combineResult;
obj2.title = function title() {
  const intl = util.intl;
  return intl.string(util.t["m/GC8z"]);
};
obj2.description = function description() {
  const intl = util.intl;
  return intl.string(util.t.ERrMJZ);
};
obj2.contents = function contents() {
  const intl = util.intl;
  const items = [intl.string(util.t.YOSxcd), , ,];
  const intl2 = util.intl;
  items[1] = intl2.string(util.t.q9H4Fm);
  const intl3 = util.intl;
  items[2] = intl3.string(util.t["9nHnCj"]);
  const intl4 = util.intl;
  items[3] = intl4.string(util.t.iqwXvc);
  return items;
};
obj2.contentPreface = function contentPreface() {
  const intl = util.intl;
  return intl.string(util.t.amGM7K);
};
obj[obj.MODERATOR] = obj2;
const obj3 = {
  key: "template_manager",
  color: null,
  permissions: null,
  communityPermissions: null,
  title: null,
  description: null,
  contents: null,
  contentPreface: null,
};
obj3.color = shims.unsafe_getRawColor("RED_400");
obj3.permissions = combineResult1;
obj3.communityPermissions = BigFlagUtils.add(combineResult1, Permissions.VIEW_GUILD_ANALYTICS);
obj3.title = function title() {
  const intl = util.intl;
  return intl.string(util.t.qKmu3w);
};
obj3.description = function description() {
  const intl = util.intl;
  return intl.string(util.t.WxWPYV);
};
obj3.contents = function contents() {
  const intl = util.intl;
  const items = [intl.string(util.t.Hx1Vox), , ,];
  const intl2 = util.intl;
  items[1] = intl2.string(util.t["aUZ/zD"]);
  const intl3 = util.intl;
  items[2] = intl3.string(util.t["8lQujv"]);
  const intl4 = util.intl;
  items[3] = intl4.string(util.t.cUP4pl);
  return items;
};
obj3.contentPreface = function contentPreface() {
  const intl = util.intl;
  return intl.string(util.t["7Dkb62"]);
};
obj[obj.MANAGER] = obj3;
const addResult = BigFlagUtils.add(combineResult1, Permissions.VIEW_GUILD_ANALYTICS);
let items = [
  {
    id: RoleColorsStyle.SOLID,
    colors: { primary_color: DEFAULT_ROLE_COLOR, secondary_color: null, tertiary_color: null },
    labelString: util.t["8Qyahn"],
  },
  ,
];
const obj4 = {
  id: RoleColorsStyle.SOLID,
  colors: { primary_color: DEFAULT_ROLE_COLOR, secondary_color: null, tertiary_color: null },
  labelString: util.t["8Qyahn"],
};
items[1] = { id: RoleColorsStyle.GRADIENT, colors: DEFAULT_GRADIENT_ROLE_COLORS, labelString: util.t.XpWmJz };
const obj5 = { id: RoleColorsStyle.GRADIENT, colors: DEFAULT_GRADIENT_ROLE_COLORS, labelString: util.t.XpWmJz };
items[2] = { id: RoleColorsStyle.HOLOGRAPHIC, colors: HOLOGRAPHIC_ROLE_COLORS, labelString: util.t.QTKppe };
const result = size.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRoleConstants.tsx");

export const CREATE_ROLE_DESKTOP_MODAL_WIDTH = 440;
export const DEFAULT_HEADER_HEIGHT_PX = 371;
export const MAX_BULK_ROLE_MEMBERS_ADD = 30;
export const PermissionTemplateTypes = obj;
export const DEFAULT_TEMPLATE_TYPE = obj.COSMETIC;
export const PermissionTemplates = obj;
export const STYLE_CONFIGS = items;
