// === Module 17707: pendingRequestTimestamp ===

// Module 17707 (pendingRequestTimestamp)
import util from "util" /* 1115 */;
import _modDef2781 from "module_2781" /* 2781 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7012 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  const time = { seconds: null, minutes: null, hours: null, yesterday: null, days: null, date: null };
  const intl = util.intl;
  time.seconds = intl.string(_modDef2781.M4NOO3);
  time.minutes = _modDef2781["9nem85"];
  time.hours = _modDef2781.sJjWRY;
  const intl2 = util.intl;
  time.yesterday = intl2.string(_modDef2781["7SxW32"]);
  time.days = _modDef2781.tVHevX;
  time.date = _modDef2781.q6jzya;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export const formatPendingRequestSentText = function formatPendingRequestSentText(created_at) {
  return FamilyCenterUtils.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
};