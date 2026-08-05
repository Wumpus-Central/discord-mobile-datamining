// discord_app/modules/user_settings/authorized_apps/shouldWarnAuthorizedAppTwoWay.tsx
const result = require("set").fileFinishedImporting("modules/user_settings/authorized_apps/shouldWarnAuthorizedAppTwoWay.tsx");

export default function isAuthorizedAppTwoWay(arg0) {
  let hasItem = require("../../../../discord_common/js/shared/shared-constants/ConsoleOAuthApplications.tsx") /* set */.ConsoleOAuthApplications.XBOX_APPLICATION_ID === arg0;
  if (!hasItem) {
    const PLAYSTATION_APPLICATION_IDS = require("../../../../discord_common/js/shared/shared-constants/ConsoleOAuthApplications.tsx") /* set */.ConsoleOAuthApplicationsSets.PLAYSTATION_APPLICATION_IDS;
    hasItem = PLAYSTATION_APPLICATION_IDS.has(arg0);
  }
  return hasItem;
};
export const useShouldWarnAuthorizedAppTwoWay = function useShouldWarnAuthorizedAppTwoWay(id) {
  let hasItem = require("../../../../discord_common/js/shared/shared-constants/ConsoleOAuthApplications.tsx") /* set */.ConsoleOAuthApplications.XBOX_APPLICATION_ID === id;
  if (!hasItem) {
    const PLAYSTATION_APPLICATION_IDS = require("../../../../discord_common/js/shared/shared-constants/ConsoleOAuthApplications.tsx") /* set */.ConsoleOAuthApplicationsSets.PLAYSTATION_APPLICATION_IDS;
    hasItem = PLAYSTATION_APPLICATION_IDS.has(id);
  }
  return hasItem;
};