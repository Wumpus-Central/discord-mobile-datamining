// === Module 17677: pendingRequestTimestamp ===

// Module 17677 (pendingRequestTimestamp)
import util from "util" /* 1115 */;
import _modDef2780 from "module_2780" /* 2780 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7007 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  const time = { seconds: null, minutes: null, hours: null, yesterday: null, days: null, date: null };
  const intl = util.intl;
  time.seconds = intl.string(_modDef2780.M4NOO3);
  time.minutes = _modDef2780["9nem85"];
  time.hours = _modDef2780.sJjWRY;
  const intl2 = util.intl;
  time.yesterday = intl2.string(_modDef2780["7SxW32"]);
  time.days = _modDef2780.tVHevX;
  time.date = _modDef2780.q6jzya;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export const formatPendingRequestSentText = function formatPendingRequestSentText(created_at) {
  return FamilyCenterUtils.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
};