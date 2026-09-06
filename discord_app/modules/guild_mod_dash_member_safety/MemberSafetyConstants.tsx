// === Module 4203: MemberSafetyPagePermissions ===

// Module 4203 (MemberSafetyPagePermissions)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import importAllResult from "fromString" /* 1086 */;

const Permissions = ME.Permissions;
const combineResult = importAllResult.combine(Permissions.ADMINISTRATOR, Permissions.MANAGE_GUILD, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS, Permissions.MANAGE_ROLES, Permissions.MANAGE_NICKNAMES);
const result = set.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyConstants.tsx");

export const MemberSafetyPagePermissions = combineResult;