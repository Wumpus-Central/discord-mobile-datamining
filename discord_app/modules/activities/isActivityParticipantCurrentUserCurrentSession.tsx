// === Module 13445: isActivityParticipantCurrentUserCurrentSession ===

// Module 13445 (isActivityParticipantCurrentUserCurrentSession)
import fetchFingerprint from "fetchFingerprint" /* 1218 */;

const result = require("obj132").fileFinishedImporting("modules/activities/isActivityParticipantCurrentUserCurrentSession.tsx");

export const isActivityParticipantCurrentUserCurrentSession = function isActivityParticipantCurrentUserCurrentSession(userId) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = closure_0;
  }
  const id = obj.getId();
  let tmp3 = userId.userId === id;
  if (tmp3) {
    tmp3 = null == userId.sessionId || undefined === userId.sessionId || userId.sessionId === tmp2;
  }
  return tmp3;
};