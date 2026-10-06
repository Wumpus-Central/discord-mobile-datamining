// === Module 18123: pendingRequestTimestamp ===

// Module 18123 (pendingRequestTimestamp)
import intl3 from "intl" /* 1126 */;
import _modDef2815 from "module_2815" /* 2815 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8331 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef2815.M4NOO3), minutes: _modDef2815["9nem85"], hours: _modDef2815.sJjWRY, yesterday: intl2.string(_modDef2815["7SxW32"]), days: _modDef2815.tVHevX, date: _modDef2815.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export const formatPendingRequestSentText = function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
};