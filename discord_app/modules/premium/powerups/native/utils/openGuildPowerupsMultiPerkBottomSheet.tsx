// discord_app/modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx",
);

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(
    asyncRequireImpl(12547, dependencyMap.paths),
    openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY,
    arg0,
  );
}
