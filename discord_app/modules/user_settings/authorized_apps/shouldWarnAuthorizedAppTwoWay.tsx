// === Module 12077: isAuthorizedAppTwoWay ===

// Module 12077 (isAuthorizedAppTwoWay)
import set from "set" /* 2 */;
import set2 from "set" /* 9236 */;

const result = set.fileFinishedImporting("modules/user_settings/authorized_apps/shouldWarnAuthorizedAppTwoWay.tsx");

export default function isAuthorizedAppTwoWay(arg0) {
  let hasItem = set2.ConsoleOAuthApplications.XBOX_APPLICATION_ID === arg0;
  if (!hasItem) {
    const PLAYSTATION_APPLICATION_IDS = set2.ConsoleOAuthApplicationsSets.PLAYSTATION_APPLICATION_IDS;
    hasItem = PLAYSTATION_APPLICATION_IDS.has(arg0);
  }
  return hasItem;
};
export const useShouldWarnAuthorizedAppTwoWay = function useShouldWarnAuthorizedAppTwoWay(id) {
  let hasItem = set2.ConsoleOAuthApplications.XBOX_APPLICATION_ID === id;
  if (!hasItem) {
    const PLAYSTATION_APPLICATION_IDS = set2.ConsoleOAuthApplicationsSets.PLAYSTATION_APPLICATION_IDS;
    hasItem = PLAYSTATION_APPLICATION_IDS.has(id);
  }
  return hasItem;
};