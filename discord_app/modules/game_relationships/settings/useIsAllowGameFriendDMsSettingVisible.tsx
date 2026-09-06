// discord_app/modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import GameRelationshipStore from "../GameRelationshipStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx",
);

export const useIsAllowGameFriendDMsSettingVisible = function useIsAllowGameFriendDMsSettingVisible() {
  const items = [GameRelationshipStore];
  return initialize.useStateFromStores(items, () => gameRelationshipCount.getGameRelationshipCount() > 0);
};
