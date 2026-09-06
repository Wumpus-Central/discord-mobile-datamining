// discord_app/modules/premium/powerups/native/utils/openGuildPowerupsBottomSheet.tsx
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const GUILD_POWERUPS_BOTTOM_SHEET_KEY = "GUILD_POWERUPS_BOTTOM_SHEET_KEY";
const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsBottomSheet.tsx");

export default function openGuildPowerupsBottomSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(12518, dependencyMap.paths),
    GUILD_POWERUPS_BOTTOM_SHEET_KEY,
    arg0,
  );
}
export const GUILD_POWERUPS_BOTTOM_SHEET_KEY = "GUILD_POWERUPS_BOTTOM_SHEET_KEY";
