// === Module 19748: pendingRequestTimestamp ===

// Module 19748 (pendingRequestTimestamp)
import util from "util" /* 1125 */;
import _modDef2833 from "module_2833" /* 2833 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8160 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  const time = { seconds: null, minutes: null, hours: null, yesterday: null, days: null, date: null };
  const intl = util.intl;
  time.seconds = intl.string(_modDef2833.M4NOO3);
  time.minutes = _modDef2833["9nem85"];
  time.hours = _modDef2833.sJjWRY;
  const intl2 = util.intl;
  time.yesterday = intl2.string(_modDef2833["7SxW32"]);
  time.days = _modDef2833.tVHevX;
  time.date = _modDef2833.q6jzya;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export const formatPendingRequestSentText = function formatPendingRequestSentText(created_at) {
  return FamilyCenterUtils.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
};