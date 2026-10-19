// === Module 7331: ReportToModConstants ===

// Module 7331 (ReportToModConstants)
import Constants from "Constants" /* 1087 */;
import BigFlagUtils from "BigFlagUtils" /* 1099 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/report_to_mod/ReportToModConstants.tsx");

export const ReportToModPermissions = BigFlagUtils.combine(Permissions.ADMINISTRATOR, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS);