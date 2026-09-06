// === Module 17886: SENT_TIMESTAMP_FORMATTER ===

// Module 17886 (SENT_TIMESTAMP_FORMATTER)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import messagesProxyDefault from "messagesProxy" /* 2690 */;
import getEmptyActivityFormatter from "getEmptyActivityFormatter" /* 7593 */;

function SENT_TIMESTAMP_FORMATTER() {
  const obj = { seconds: null, minutes: null, hours: null, yesterday: null, days: null, date: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(messagesProxyDefault.M4NOO3);
  obj[1] = messagesProxyDefault["9nem85"];
  obj[2] = messagesProxyDefault.sJjWRY;
  const intl2 = getSystemLocale.intl;
  obj[3] = intl2.string(messagesProxyDefault["7SxW32"]);
  obj[4] = messagesProxyDefault.tVHevX;
  obj[5] = messagesProxyDefault.q6jzya;
  return obj;
}
const result = set.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export const formatPendingRequestSentText = function formatPendingRequestSentText(created_at) {
  return getEmptyActivityFormatter.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
};