// discord_app/modules/safety_flows/pendingRequestTimestamp.tsx
import { getSystemLocale } from "../../intl/index.native.tsx";
import { getEmptyActivityFormatter } from "../parent_tools/FamilyCenterUtils.tsx";
import { messagesProxy } from "SafetyFlows.messages.js";
function SENT_TIMESTAMP_FORMATTER() {
  const obj = { seconds: null, minutes: null, hours: null, yesterday: null, days: null, date: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(messagesProxy.M4NOO3);
  obj[1] = messagesProxy["9nem85"];
  obj[2] = messagesProxy.sJjWRY;
  const intl2 = getSystemLocale.intl;
  obj[3] = intl2.string(messagesProxy["7SxW32"]);
  obj[4] = messagesProxy.tVHevX;
  obj[5] = messagesProxy.q6jzya;
  return obj;
}
const result = require("getEmptyActivityFormatter").fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export const formatPendingRequestSentText = function formatPendingRequestSentText(created_at) {
  return getEmptyActivityFormatter.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
};