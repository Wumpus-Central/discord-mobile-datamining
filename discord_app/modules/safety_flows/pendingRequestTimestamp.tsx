// === Module 18123: pendingRequestTimestamp ===

// Module 18123 (pendingRequestTimestamp)
import util from "util" /* 1126 */;
import _modDef2815 from "module_2815" /* 2815 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8331 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  const time = { seconds: null, minutes: null, hours: null, yesterday: null, days: null, date: null };
  const intl = util.intl;
  time.seconds = intl.string(_modDef2815.M4NOO3);
  time.minutes = _modDef2815["9nem85"];
  time.hours = _modDef2815.sJjWRY;
  const intl2 = util.intl;
  time.yesterday = intl2.string(_modDef2815["7SxW32"]);
  time.days = _modDef2815.tVHevX;
  time.date = _modDef2815.q6jzya;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export const formatPendingRequestSentText = function formatPendingRequestSentText(created_at) {
  return FamilyCenterUtils.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
};