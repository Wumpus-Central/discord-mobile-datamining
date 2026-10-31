// === Module 20094: pendingRequestTimestamp ===

// Module 20094 (pendingRequestTimestamp)
import util from "util" /* 1113 */;
import _modDef2836 from "module_2836" /* 2836 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8372 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  const time = { seconds: null, minutes: null, hours: null, yesterday: null, days: null, date: null };
  const intl = util.intl;
  time.seconds = intl.string(_modDef2836.M4NOO3);
  time.minutes = _modDef2836["9nem85"];
  time.hours = _modDef2836.sJjWRY;
  const intl2 = util.intl;
  time.yesterday = intl2.string(_modDef2836["7SxW32"]);
  time.days = _modDef2836.tVHevX;
  time.date = _modDef2836.q6jzya;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export function formatPendingRequestSentText(created_at) {
  return FamilyCenterUtils.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
}