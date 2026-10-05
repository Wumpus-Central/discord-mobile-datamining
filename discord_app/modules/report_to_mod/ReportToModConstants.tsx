// === Module 6791: ReportToModConstants ===

// Module 6791 (ReportToModConstants)
import Constants from "Constants" /* 1085 */;
import BigFlagUtils from "BigFlagUtils" /* 1097 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const combineResult = BigFlagUtils.combine(Permissions.ADMINISTRATOR, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS);
const result = size.fileFinishedImporting("modules/report_to_mod/ReportToModConstants.tsx");

export const ReportToModPermissions = combineResult;