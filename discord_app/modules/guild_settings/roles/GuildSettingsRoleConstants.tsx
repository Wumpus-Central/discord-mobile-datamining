// discord_app/modules/guild_settings/roles/GuildSettingsRoleConstants.tsx
import intl5 from "../../../intl/index.native.tsx";
import PermissionUtilsAll from "../../../utils/PermissionUtils.tsx";
import GuildSettingsRolesStore from "GuildSettingsRolesStore.tsx";
import Constants from "../../../Constants.tsx";
import EnhancedRoleColorConstants from "../../premium/powerups/constants/EnhancedRoleColorConstants.tsx";
import BigFlagUtils_mod from "../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import shims_mod from "../../../../discord_common/js/packages/tokens/shims.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let DEFAULT_GRADIENT_ROLE_COLORS;
let DEFAULT_ROLE_COLOR;
let HOLOGRAPHIC_ROLE_COLORS;
let Permissions;
let shims;
const RoleColorsStyle = GuildSettingsRolesStore.RoleColorsStyle;
({ Permissions, DEFAULT_ROLE_COLOR } = Constants);
const obj = {
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
const COSMETIC = obj.COSMETIC;
let BigFlagUtils = BigFlagUtils_mod;
const removeResult = BigFlagUtils.remove(PermissionUtilsAll.DEFAULT, Permissions.MENTION_EVERYONE);
BigFlagUtils = BigFlagUtils_mod;
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
BigFlagUtils = BigFlagUtils_mod;
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
BigFlagUtils = BigFlagUtils_mod;
const obj2 = {};
const COSMETIC2 = obj.COSMETIC;
const obj3 = {
  key: "template_cosmetic",
  color: shims.unsafe_getRawColor("BRAND_500"),
  permissions: PermissionUtilsAll.NONE,
  title() {
    const intl = intl5.intl;
    return intl.string(intl5.t.M8jQyg);
  },
  description() {
    const intl = intl5.intl;
    return intl.string(intl5.t["7nF/S/"]);
  },
  contents() {
    const intl = intl5.intl;
    const items = [intl.string(intl5.t.uwLDAb)];
    const intl2 = intl5.intl;
    items[1] = intl2.string(intl5.t.gqngN7);
    return items;
  },
  contentPreface() {
    return "";
  },
};
const addResult = BigFlagUtils.add(combineResult1, Permissions.VIEW_GUILD_ANALYTICS);
shims = shims_mod;
obj2[COSMETIC2] = obj3;
const MEMBER = obj.MEMBER;
const obj4 = {
  key: "template_member",
  color: shims.unsafe_getRawColor("GREEN_360"),
  permissions: PermissionUtilsAll.DEFAULT,
  communityPermissions: removeResult,
  title() {
    const intl = intl5.intl;
    return intl.string(intl5.t["9BsHzh"]);
  },
  description() {
    const intl = intl5.intl;
    return intl.string(intl5.t.ywKYtw);
  },
  contents() {
    const intl = intl5.intl;
    const items = [intl.string(intl5.t["9Vhbnl"]), ,];
    const intl2 = intl5.intl;
    items[1] = intl2.string(intl5.t["0xn+w1"]);
    const intl3 = intl5.intl;
    items[2] = intl3.string(intl5.t.ieWVpB);
    return items;
  },
  contentPreface() {
    return "";
  },
};
shims = shims_mod;
obj2[MEMBER] = obj4;
const MODERATOR = obj.MODERATOR;
const obj5 = {
  key: "template_moderator",
  color: shims.unsafe_getRawColor("YELLOW_300"),
  permissions: combineResult,
  title() {
    const intl = intl5.intl;
    return intl.string(intl5.t["m/GC8z"]);
  },
  description() {
    const intl = intl5.intl;
    return intl.string(intl5.t.ERrMJZ);
  },
  contents() {
    const intl = intl5.intl;
    const items = [intl.string(intl5.t.YOSxcd), , ,];
    const intl2 = intl5.intl;
    items[1] = intl2.string(intl5.t.q9H4Fm);
    const intl3 = intl5.intl;
    items[2] = intl3.string(intl5.t["9nHnCj"]);
    const intl4 = intl5.intl;
    items[3] = intl4.string(intl5.t.iqwXvc);
    return items;
  },
  contentPreface() {
    const intl = intl5.intl;
    return intl.string(intl5.t.amGM7K);
  },
};
shims = shims_mod;
obj2[MODERATOR] = obj5;
const MANAGER = obj.MANAGER;
const obj6 = {
  key: "template_manager",
  color: shims.unsafe_getRawColor("RED_400"),
  permissions: combineResult1,
  communityPermissions: addResult,
  title() {
    const intl = intl5.intl;
    return intl.string(intl5.t.qKmu3w);
  },
  description() {
    const intl = intl5.intl;
    return intl.string(intl5.t.WxWPYV);
  },
  contents() {
    const intl = intl5.intl;
    const items = [intl.string(intl5.t.Hx1Vox), , ,];
    const intl2 = intl5.intl;
    items[1] = intl2.string(intl5.t["aUZ/zD"]);
    const intl3 = intl5.intl;
    items[2] = intl3.string(intl5.t["8lQujv"]);
    const intl4 = intl5.intl;
    items[3] = intl4.string(intl5.t.cUP4pl);
    return items;
  },
  contentPreface() {
    const intl = intl5.intl;
    return intl.string(intl5.t["7Dkb62"]);
  },
};
shims = shims_mod;
obj2[MANAGER] = obj6;
let items = [
  {
    id: RoleColorsStyle.SOLID,
    colors: { primary_color: DEFAULT_ROLE_COLOR, secondary_color: null, tertiary_color: null },
    labelString: intl5.t["8Qyahn"],
  },
  ,
];
({
  id: RoleColorsStyle.SOLID,
  colors: { primary_color: DEFAULT_ROLE_COLOR, secondary_color: null, tertiary_color: null },
  labelString: intl5.t["8Qyahn"],
});
items[1] = { id: RoleColorsStyle.GRADIENT, colors: DEFAULT_GRADIENT_ROLE_COLORS, labelString: intl5.t.XpWmJz };
({ id: RoleColorsStyle.GRADIENT, colors: DEFAULT_GRADIENT_ROLE_COLORS, labelString: intl5.t.XpWmJz });
items[2] = { id: RoleColorsStyle.HOLOGRAPHIC, colors: HOLOGRAPHIC_ROLE_COLORS, labelString: intl5.t.QTKppe };
({ id: RoleColorsStyle.HOLOGRAPHIC, colors: HOLOGRAPHIC_ROLE_COLORS, labelString: intl5.t.QTKppe });
const result = size.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRoleConstants.tsx");

export const CREATE_ROLE_DESKTOP_MODAL_WIDTH = 440;
export const DEFAULT_HEADER_HEIGHT_PX = 371;
export const MAX_BULK_ROLE_MEMBERS_ADD = 30;
export const PermissionTemplateTypes = obj;
export const DEFAULT_TEMPLATE_TYPE = COSMETIC;
export const PermissionTemplates = obj2;
export const STYLE_CONFIGS = items;
