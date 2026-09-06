// === Module 13985: isActivityParticipantCurrentUserCurrentSession ===

// Module 13985 (isActivityParticipantCurrentUserCurrentSession)
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/isActivityParticipantCurrentUserCurrentSession.tsx");

export const isActivityParticipantCurrentUserCurrentSession = function isActivityParticipantCurrentUserCurrentSession(userId) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = AuthenticationStore;
  }
  const id = obj.getId();
  let tmp3 = userId.userId === id;
  if (tmp3) {
    tmp3 = null == userId.sessionId || undefined === userId.sessionId || userId.sessionId === tmp2;
    const tmp5 = null == userId.sessionId || undefined === userId.sessionId || userId.sessionId === tmp2;
  }
  return tmp3;
};