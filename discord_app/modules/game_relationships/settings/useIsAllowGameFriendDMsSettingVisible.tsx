// === Module 15201: useIsAllowGameFriendDMsSettingVisible ===

// Module 15201 (useIsAllowGameFriendDMsSettingVisible)
import initialize from "initialize" /* 589 */;
import closure_2 from "recountRelationshipTypes" /* 7330 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx");

export const useIsAllowGameFriendDMsSettingVisible = function useIsAllowGameFriendDMsSettingVisible() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => gameRelationshipCount.getGameRelationshipCount() > 0);
};