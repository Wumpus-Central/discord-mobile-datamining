// === Module 6143: ReportToModPermissions ===

// Module 6143 (ReportToModPermissions)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import importAllResult from "fromString" /* 503 */;

const Permissions = ME.Permissions;
const combineResult = importAllResult.combine(Permissions.ADMINISTRATOR, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS);
const result = set.fileFinishedImporting("modules/report_to_mod/ReportToModConstants.tsx");

export const ReportToModPermissions = combineResult;