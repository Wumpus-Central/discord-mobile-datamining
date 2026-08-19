// discord_app/modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import recountRelationshipTypes from "../GameRelationshipStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx");

export const useIsAllowGameFriendDMsSettingVisible = function useIsAllowGameFriendDMsSettingVisible() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => gameRelationshipCount.getGameRelationshipCount() > 0);
};