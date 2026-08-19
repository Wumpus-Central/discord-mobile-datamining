// === Module 7266: ReportToModPermissions ===

// Module 7266 (ReportToModPermissions)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import importAllResult from "fromString" /* 506 */;

const Permissions = ME.Permissions;
const combineResult = importAllResult.combine(Permissions.ADMINISTRATOR, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS);
const result = obj132.fileFinishedImporting("modules/report_to_mod/ReportToModConstants.tsx");

export const ReportToModPermissions = combineResult;