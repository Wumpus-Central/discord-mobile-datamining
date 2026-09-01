// discord_app/modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import closure_2 from "../GameRelationshipStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx",
);

export const useIsAllowGameFriendDMsSettingVisible = function useIsAllowGameFriendDMsSettingVisible() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => gameRelationshipCount.getGameRelationshipCount() > 0);
};
