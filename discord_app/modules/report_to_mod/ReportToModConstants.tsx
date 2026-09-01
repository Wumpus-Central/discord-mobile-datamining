// discord_app/modules/report_to_mod/ReportToModConstants.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import importAllResult from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";

const Permissions = ME.Permissions;
const combineResult = importAllResult.combine(
  Permissions.ADMINISTRATOR,
  Permissions.BAN_MEMBERS,
  Permissions.KICK_MEMBERS,
  Permissions.MODERATE_MEMBERS,
);
const result = set.fileFinishedImporting("modules/report_to_mod/ReportToModConstants.tsx");

export const ReportToModPermissions = combineResult;
