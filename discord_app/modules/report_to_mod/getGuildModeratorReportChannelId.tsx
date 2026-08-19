// === Module 5291: getGuildModeratorReportChannelId ===

// Module 5291 (getGuildModeratorReportChannelId)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/report_to_mod/getGuildModeratorReportChannelId.tsx");

export default function getGuildModeratorReportChannelId(moderatorReporting) {
  moderatorReporting = moderatorReporting.moderatorReporting;
  let prop;
  if (moderatorReporting != null) {
    prop = moderatorReporting.moderatorReportChannelId;
  }
  if (prop == null) {
    prop = null;
  }
  return prop;
};