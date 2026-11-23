// === Module 20157: pendingRequestTimestamp ===

// Module 20157 (pendingRequestTimestamp)
import util from "util" /* 1112 */;
import _modDef3120 from "module_3120" /* 3120 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 9139 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  const time = { seconds: null, minutes: null, hours: null, yesterday: null, days: null, date: null };
  const intl = util.intl;
  time.seconds = intl.string(_modDef3120.M4NOO3);
  time.minutes = _modDef3120["9nem85"];
  time.hours = _modDef3120.sJjWRY;
  const intl2 = util.intl;
  time.yesterday = intl2.string(_modDef3120["7SxW32"]);
  time.days = _modDef3120.tVHevX;
  time.date = _modDef3120.q6jzya;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export function formatPendingRequestSentText(created_at) {
  return FamilyCenterUtils.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
}