// === Module 20491: pendingRequestTimestamp ===

// Module 20491 (pendingRequestTimestamp)
import util from "util" /* 1113 */;
import _modDef2960 from "module_2960" /* 2960 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8443 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  const time = { seconds: null, minutes: null, hours: null, yesterday: null, days: null, date: null };
  const intl = util.intl;
  time.seconds = intl.string(_modDef2960.M4NOO3);
  time.minutes = _modDef2960["9nem85"];
  time.hours = _modDef2960.sJjWRY;
  const intl2 = util.intl;
  time.yesterday = intl2.string(_modDef2960["7SxW32"]);
  time.days = _modDef2960.tVHevX;
  time.date = _modDef2960.q6jzya;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export function formatPendingRequestSentText(created_at) {
  return FamilyCenterUtils.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
}