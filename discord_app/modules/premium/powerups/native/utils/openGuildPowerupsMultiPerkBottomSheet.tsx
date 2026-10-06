// discord_app/modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx",
);

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(12221, dependencyMap.paths);
  openLazy(tmp2, openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
}
