// === Module 14123: shouldWarnAuthorizedAppTwoWay ===

// Module 14123 (shouldWarnAuthorizedAppTwoWay)
import ConsoleOAuthApplications from "ConsoleOAuthApplications" /* 14124 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/shouldWarnAuthorizedAppTwoWay.tsx");

export default function isAuthorizedAppTwoWay(arg0) {
  let hasItem = ConsoleOAuthApplications.ConsoleOAuthApplications.XBOX_APPLICATION_ID === arg0;
  if (!hasItem) {
    const PLAYSTATION_APPLICATION_IDS = ConsoleOAuthApplications.ConsoleOAuthApplicationsSets.PLAYSTATION_APPLICATION_IDS;
    hasItem = PLAYSTATION_APPLICATION_IDS.has(arg0);
  }
  return hasItem;
};
export function useShouldWarnAuthorizedAppTwoWay(id) {
  let hasItem = ConsoleOAuthApplications.ConsoleOAuthApplications.XBOX_APPLICATION_ID === id;
  if (!hasItem) {
    const PLAYSTATION_APPLICATION_IDS = ConsoleOAuthApplications.ConsoleOAuthApplicationsSets.PLAYSTATION_APPLICATION_IDS;
    hasItem = PLAYSTATION_APPLICATION_IDS.has(id);
  }
  return hasItem;
}