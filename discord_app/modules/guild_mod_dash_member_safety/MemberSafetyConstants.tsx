// === Module 4203: MemberSafetyConstants ===

// Module 4203 (MemberSafetyConstants)
import Constants from "Constants" /* 1074 */;
import BigFlagUtils from "BigFlagUtils" /* 1086 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyConstants.tsx");

export const MemberSafetyPagePermissions = BigFlagUtils.combine(Permissions.ADMINISTRATOR, Permissions.MANAGE_GUILD, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS, Permissions.MANAGE_ROLES, Permissions.MANAGE_NICKNAMES);