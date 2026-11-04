// === Module 20367: pendingRequestTimestamp ===

// Module 20367 (pendingRequestTimestamp)
import util from "util" /* 1113 */;
import _modDef2963 from "module_2963" /* 2963 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8513 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  const time = { seconds: null, minutes: null, hours: null, yesterday: null, days: null, date: null };
  const intl = util.intl;
  time.seconds = intl.string(_modDef2963.M4NOO3);
  time.minutes = _modDef2963["9nem85"];
  time.hours = _modDef2963.sJjWRY;
  const intl2 = util.intl;
  time.yesterday = intl2.string(_modDef2963["7SxW32"]);
  time.days = _modDef2963.tVHevX;
  time.date = _modDef2963.q6jzya;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export function formatPendingRequestSentText(created_at) {
  return FamilyCenterUtils.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
}