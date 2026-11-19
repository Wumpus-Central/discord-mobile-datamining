// === Module 20211: pendingRequestTimestamp ===

// Module 20211 (pendingRequestTimestamp)
import util from "util" /* 1113 */;
import _modDef3019 from "module_3019" /* 3019 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 9019 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  const time = { seconds: null, minutes: null, hours: null, yesterday: null, days: null, date: null };
  const intl = util.intl;
  time.seconds = intl.string(_modDef3019.M4NOO3);
  time.minutes = _modDef3019["9nem85"];
  time.hours = _modDef3019.sJjWRY;
  const intl2 = util.intl;
  time.yesterday = intl2.string(_modDef3019["7SxW32"]);
  time.days = _modDef3019.tVHevX;
  time.date = _modDef3019.q6jzya;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export function formatPendingRequestSentText(created_at) {
  return FamilyCenterUtils.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
}