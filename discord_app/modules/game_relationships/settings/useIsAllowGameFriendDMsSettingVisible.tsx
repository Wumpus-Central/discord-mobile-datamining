// === Module 15886: useIsAllowGameFriendDMsSettingVisible ===

// Module 15886 (useIsAllowGameFriendDMsSettingVisible)
import initialize from "initialize" /* 504 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7658 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx");

export const useIsAllowGameFriendDMsSettingVisible = function useIsAllowGameFriendDMsSettingVisible() {
  const items = [GameRelationshipStore];
  return initialize.useStateFromStores(items, () => gameRelationshipCount.getGameRelationshipCount() > 0);
};