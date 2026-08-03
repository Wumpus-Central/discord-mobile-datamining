// === Module 16537: title ===

// Module 16537 (title)
import { RoleColorsStyle } from "handleSetSection";
import ME from "ME";
import HOLOGRAPHIC_ROLE_COLORS from "HOLOGRAPHIC_ROLE_COLORS";
import importAllResult from "fromString";
import importAllResult1 from "fromString";
import importAllResult2 from "fromString";
import importAllResult3 from "fromString";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";

let DEFAULT_GRADIENT_ROLE_COLORS;
let DEFAULT_ROLE_COLOR;
let HOLOGRAPHIC_ROLE_COLORS;
let Permissions;
({ Permissions, DEFAULT_ROLE_COLOR } = ME);
let obj = { COSMETIC: 0, [0]: "COSMETIC", MEMBER: 1, [1]: "MEMBER", MODERATOR: 2, [2]: "MODERATOR", MANAGER: 3, [3]: "MANAGER" };
({ DEFAULT_GRADIENT_ROLE_COLORS, HOLOGRAPHIC_ROLE_COLORS } = HOLOGRAPHIC_ROLE_COLORS);
const removeResult = require("fromString").remove(require("applyOverwrites").DEFAULT, Permissions.MENTION_EVERYONE);
const combineResult = require("fromString").combine(require("applyOverwrites").DEFAULT, Permissions.VIEW_AUDIT_LOG, Permissions.MANAGE_NICKNAMES, Permissions.KICK_MEMBERS, Permissions.BAN_MEMBERS, Permissions.MANAGE_MESSAGES, Permissions.MUTE_MEMBERS, Permissions.DEAFEN_MEMBERS, Permissions.MOVE_MEMBERS, Permissions.PRIORITY_SPEAKER, Permissions.MODERATE_MEMBERS);
const combineResult1 = require("fromString").combine(combineResult, Permissions.MANAGE_CHANNELS, Permissions.MANAGE_THREADS, Permissions.MANAGE_ROLES, Permissions.MANAGE_GUILD_EXPRESSIONS, Permissions.MANAGE_GUILD, Permissions.MANAGE_WEBHOOKS, Permissions.SEND_TTS_MESSAGES);
obj = {};
obj = { key: "template_cosmetic", color: null, permissions: null, title: null, description: null, contents: null, contentPreface: null };
obj[1] = unsafe_getRawColor.unsafe_getRawColor("BRAND_500");
obj[2] = require("applyOverwrites").NONE;
obj[3] = function title() {
  const intl = require(1236) /* getSystemLocale */.intl;
  return intl.string(require(1236) /* getSystemLocale */.t.M8jQyg);
};
obj[4] = function description() {
  const intl = require(1236) /* getSystemLocale */.intl;
  return intl.string(require(1236) /* getSystemLocale */.t["7nF/S/"]);
};
obj[5] = function contents() {
  const intl = require(1236) /* getSystemLocale */.intl;
  const items = [intl.string(require(1236) /* getSystemLocale */.t.uwLDAb), ];
  const intl2 = require(1236) /* getSystemLocale */.intl;
  items[1] = intl2.string(require(1236) /* getSystemLocale */.t.gqngN7);
  return items;
};
obj[6] = function contentPreface() {
  return "";
};
obj[obj.COSMETIC] = obj;
const obj1 = { key: "template_member", color: null, permissions: null, communityPermissions: null, title: null, description: null, contents: null, contentPreface: null };
obj1[1] = unsafe_getRawColor.unsafe_getRawColor("GREEN_360");
obj1[2] = require("applyOverwrites").DEFAULT;
obj1[3] = removeResult;
obj1[4] = function title() {
  const intl = require(1236) /* getSystemLocale */.intl;
  return intl.string(require(1236) /* getSystemLocale */.t["9BsHzh"]);
};
obj1[5] = function description() {
  const intl = require(1236) /* getSystemLocale */.intl;
  return intl.string(require(1236) /* getSystemLocale */.t.ywKYtw);
};
obj1[6] = function contents() {
  const intl = require(1236) /* getSystemLocale */.intl;
  const items = [intl.string(require(1236) /* getSystemLocale */.t["9Vhbnl"]), , ];
  const intl2 = require(1236) /* getSystemLocale */.intl;
  items[1] = intl2.string(require(1236) /* getSystemLocale */.t["0xn+w1"]);
  const intl3 = require(1236) /* getSystemLocale */.intl;
  items[2] = intl3.string(require(1236) /* getSystemLocale */.t.ieWVpB);
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
  const intl = require(1236) /* getSystemLocale */.intl;
  return intl.string(require(1236) /* getSystemLocale */.t["m/GC8z"]);
};
obj2[4] = function description() {
  const intl = require(1236) /* getSystemLocale */.intl;
  return intl.string(require(1236) /* getSystemLocale */.t.ERrMJZ);
};
obj2[5] = function contents() {
  const intl = require(1236) /* getSystemLocale */.intl;
  const items = [intl.string(require(1236) /* getSystemLocale */.t.YOSxcd), , , ];
  const intl2 = require(1236) /* getSystemLocale */.intl;
  items[1] = intl2.string(require(1236) /* getSystemLocale */.t.q9H4Fm);
  const intl3 = require(1236) /* getSystemLocale */.intl;
  items[2] = intl3.string(require(1236) /* getSystemLocale */.t["9nHnCj"]);
  const intl4 = require(1236) /* getSystemLocale */.intl;
  items[3] = intl4.string(require(1236) /* getSystemLocale */.t.iqwXvc);
  return items;
};
obj2[6] = function contentPreface() {
  const intl = require(1236) /* getSystemLocale */.intl;
  return intl.string(require(1236) /* getSystemLocale */.t.amGM7K);
};
obj[obj.MODERATOR] = obj2;
const obj3 = { key: "template_manager", color: null, permissions: null, communityPermissions: null, title: null, description: null, contents: null, contentPreface: null };
obj3[1] = unsafe_getRawColor.unsafe_getRawColor("RED_400");
obj3[2] = combineResult1;
obj3[3] = require("fromString").add(combineResult1, Permissions.VIEW_GUILD_ANALYTICS);
obj3[4] = function title() {
  const intl = require(1236) /* getSystemLocale */.intl;
  return intl.string(require(1236) /* getSystemLocale */.t.qKmu3w);
};
obj3[5] = function description() {
  const intl = require(1236) /* getSystemLocale */.intl;
  return intl.string(require(1236) /* getSystemLocale */.t.WxWPYV);
};
obj3[6] = function contents() {
  const intl = require(1236) /* getSystemLocale */.intl;
  const items = [intl.string(require(1236) /* getSystemLocale */.t.Hx1Vox), , , ];
  const intl2 = require(1236) /* getSystemLocale */.intl;
  items[1] = intl2.string(require(1236) /* getSystemLocale */.t["aUZ/zD"]);
  const intl3 = require(1236) /* getSystemLocale */.intl;
  items[2] = intl3.string(require(1236) /* getSystemLocale */.t["8lQujv"]);
  const intl4 = require(1236) /* getSystemLocale */.intl;
  items[3] = intl4.string(require(1236) /* getSystemLocale */.t.cUP4pl);
  return items;
};
obj3[7] = function contentPreface() {
  const intl = require(1236) /* getSystemLocale */.intl;
  return intl.string(require(1236) /* getSystemLocale */.t["7Dkb62"]);
};
obj[obj.MANAGER] = obj3;
const addResult = require("fromString").add(combineResult1, Permissions.VIEW_GUILD_ANALYTICS);
let items = [{ id: RoleColorsStyle.SOLID, colors: { primary_color: DEFAULT_ROLE_COLOR, secondary_color: null, tertiary_color: null }, labelString: require("getSystemLocale").t["8Qyahn"] }, , ];
const obj4 = { id: RoleColorsStyle.SOLID, colors: { primary_color: DEFAULT_ROLE_COLOR, secondary_color: null, tertiary_color: null }, labelString: require("getSystemLocale").t["8Qyahn"] };
items[1] = { id: RoleColorsStyle.GRADIENT, colors: DEFAULT_GRADIENT_ROLE_COLORS, labelString: require("getSystemLocale").t.XpWmJz };
const obj5 = { id: RoleColorsStyle.GRADIENT, colors: DEFAULT_GRADIENT_ROLE_COLORS, labelString: require("getSystemLocale").t.XpWmJz };
items[2] = { id: RoleColorsStyle.HOLOGRAPHIC, colors: HOLOGRAPHIC_ROLE_COLORS, labelString: require("getSystemLocale").t.QTKppe };
const obj6 = { id: RoleColorsStyle.HOLOGRAPHIC, colors: HOLOGRAPHIC_ROLE_COLORS, labelString: require("getSystemLocale").t.QTKppe };
const result = require("HOLOGRAPHIC_ROLE_COLORS").fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRoleConstants.tsx");

export const CREATE_ROLE_DESKTOP_MODAL_WIDTH = 440;
export const DEFAULT_HEADER_HEIGHT_PX = 371;
export const MAX_BULK_ROLE_MEMBERS_ADD = 30;
export const PermissionTemplateTypes = obj;
export const DEFAULT_TEMPLATE_TYPE = obj.COSMETIC;
export const PermissionTemplates = obj;
export const STYLE_CONFIGS = items;