// === Module 5292: getGuildModeratorReportingEnabled ===

// Module 5292 (getGuildModeratorReportingEnabled)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/report_to_mod/getGuildModeratorReportingEnabled.tsx");

export default function getGuildModeratorReportingEnabled(moderatorReporting) {
  moderatorReporting = moderatorReporting.moderatorReporting;
  let flag;
  if (moderatorReporting != null) {
    flag = moderatorReporting.moderatorReportingEnabled;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};