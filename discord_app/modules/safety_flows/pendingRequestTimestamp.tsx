// === Module 19100: pendingRequestTimestamp ===

// Module 19100 (pendingRequestTimestamp)
import util from "util" /* 1128 */;
import _modDef2885 from "module_2885" /* 2885 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8008 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  const time = { seconds: null, minutes: null, hours: null, yesterday: null, days: null, date: null };
  const intl = util.intl;
  time.seconds = intl.string(_modDef2885.M4NOO3);
  time.minutes = _modDef2885["9nem85"];
  time.hours = _modDef2885.sJjWRY;
  const intl2 = util.intl;
  time.yesterday = intl2.string(_modDef2885["7SxW32"]);
  time.days = _modDef2885.tVHevX;
  time.date = _modDef2885.q6jzya;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export const formatPendingRequestSentText = function formatPendingRequestSentText(created_at) {
  return FamilyCenterUtils.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
};