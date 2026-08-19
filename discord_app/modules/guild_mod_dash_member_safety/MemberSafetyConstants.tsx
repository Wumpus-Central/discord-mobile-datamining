// === Module 4025: MemberSafetyPagePermissions ===

// Module 4025 (MemberSafetyPagePermissions)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import importAllResult from "fromString" /* 506 */;

const Permissions = ME.Permissions;
const combineResult = importAllResult.combine(Permissions.ADMINISTRATOR, Permissions.MANAGE_GUILD, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS, Permissions.MANAGE_ROLES, Permissions.MANAGE_NICKNAMES);
const result = obj132.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyConstants.tsx");

export const MemberSafetyPagePermissions = combineResult;