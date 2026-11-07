// === Module 18249: useIsAllowGameFriendDMsSettingVisible ===

// Module 18249 (useIsAllowGameFriendDMsSettingVisible)
import initialize from "initialize" /* 504 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7876 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx");

export function useIsAllowGameFriendDMsSettingVisible() {
  items = [GameRelationshipStore];
  return initialize.useStateFromStores(items, () => gameRelationshipCount.getGameRelationshipCount() > 0);
}