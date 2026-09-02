// === Module 11550: getIsAskToJoin ===

// Module 11550 (getIsAskToJoin)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;

const ActivityActionTypes = ME.ActivityActionTypes;
const result = set.fileFinishedImporting("modules/activities/utils/getIsAskToJoin.tsx");

export const getIsAskToJoin = function getIsAskToJoin(message) {
  const activity = message.activity;
  let type;
  if (activity != null) {
    type = activity.type;
  }
  return type === ActivityActionTypes.JOIN_REQUEST;
};