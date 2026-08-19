// === Module 10922: getIsAskToJoin ===

// Module 10922 (getIsAskToJoin)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;

const ActivityActionTypes = ME.ActivityActionTypes;
const result = obj132.fileFinishedImporting("modules/activities/utils/getIsAskToJoin.tsx");

export const getIsAskToJoin = function getIsAskToJoin(message) {
  const activity = message.activity;
  let type;
  if (activity != null) {
    type = activity.type;
  }
  return type === ActivityActionTypes.JOIN_REQUEST;
};