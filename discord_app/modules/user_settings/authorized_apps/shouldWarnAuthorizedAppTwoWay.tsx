// === Module 11767: isAuthorizedAppTwoWay ===

// Module 11767 (isAuthorizedAppTwoWay)
import obj132 from "obj132" /* 2 */;
import set from "set" /* 9788 */;

const result = obj132.fileFinishedImporting("modules/user_settings/authorized_apps/shouldWarnAuthorizedAppTwoWay.tsx");

export default function isAuthorizedAppTwoWay(arg0) {
  let hasItem = set.ConsoleOAuthApplications.XBOX_APPLICATION_ID === arg0;
  if (!hasItem) {
    const PLAYSTATION_APPLICATION_IDS = set.ConsoleOAuthApplicationsSets.PLAYSTATION_APPLICATION_IDS;
    hasItem = PLAYSTATION_APPLICATION_IDS.has(arg0);
  }
  return hasItem;
};
export const useShouldWarnAuthorizedAppTwoWay = function useShouldWarnAuthorizedAppTwoWay(id) {
  let hasItem = set.ConsoleOAuthApplications.XBOX_APPLICATION_ID === id;
  if (!hasItem) {
    const PLAYSTATION_APPLICATION_IDS = set.ConsoleOAuthApplicationsSets.PLAYSTATION_APPLICATION_IDS;
    hasItem = PLAYSTATION_APPLICATION_IDS.has(id);
  }
  return hasItem;
};