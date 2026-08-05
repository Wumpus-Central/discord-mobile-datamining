// discord_app/modules/safety_flows/pendingRequestTimestamp.tsx
function SENT_TIMESTAMP_FORMATTER() {
  const obj = { seconds: null, minutes: null, hours: null, yesterday: null, days: null, date: null };
  const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("SafetyFlows.messages.js").M4NOO3);
  obj[1] = require("SafetyFlows.messages.js")["9nem85"];
  obj[2] = require("SafetyFlows.messages.js").sJjWRY;
  const intl2 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[3] = intl2.string(require("SafetyFlows.messages.js")["7SxW32"]);
  obj[4] = require("SafetyFlows.messages.js").tVHevX;
  obj[5] = require("SafetyFlows.messages.js").q6jzya;
  return obj;
}
const result = require("getEmptyActivityFormatter").fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export const formatPendingRequestSentText = function formatPendingRequestSentText(created_at) {
  return require("../parent_tools/FamilyCenterUtils.tsx") /* getEmptyActivityFormatter */.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
};