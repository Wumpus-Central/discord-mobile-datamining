// discord_app/modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx
import set from "../../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet.tsx";

const result = set.fileFinishedImporting(
  "modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx",
);

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.openLazy(
    asyncRequireImpl(12547, dependencyMap.paths),
    openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY,
    arg0,
  );
}
