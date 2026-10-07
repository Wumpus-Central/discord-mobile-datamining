// discord_app/modules/report_to_mod/ReportToModConstants.tsx
import Constants from "../../Constants.tsx";
import BigFlagUtils from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/report_to_mod/ReportToModConstants.tsx");

export const ReportToModPermissions = BigFlagUtils.combine(
  Permissions.ADMINISTRATOR,
  Permissions.BAN_MEMBERS,
  Permissions.KICK_MEMBERS,
  Permissions.MODERATE_MEMBERS,
);
