// === Module 20033: pendingRequestTimestamp ===

// Module 20033 (pendingRequestTimestamp)
import util from "util" /* 1114 */;
import _modDef2835 from "module_2835" /* 2835 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8364 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  const time = { seconds: null, minutes: null, hours: null, yesterday: null, days: null, date: null };
  const intl = util.intl;
  time.seconds = intl.string(_modDef2835.M4NOO3);
  time.minutes = _modDef2835["9nem85"];
  time.hours = _modDef2835.sJjWRY;
  const intl2 = util.intl;
  time.yesterday = intl2.string(_modDef2835["7SxW32"]);
  time.days = _modDef2835.tVHevX;
  time.date = _modDef2835.q6jzya;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export function formatPendingRequestSentText(created_at) {
  return FamilyCenterUtils.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
}