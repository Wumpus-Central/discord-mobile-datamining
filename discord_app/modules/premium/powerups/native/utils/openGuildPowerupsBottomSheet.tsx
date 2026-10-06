// discord_app/modules/premium/powerups/native/utils/openGuildPowerupsBottomSheet.tsx
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const GUILD_POWERUPS_BOTTOM_SHEET_KEY = "GUILD_POWERUPS_BOTTOM_SHEET_KEY";
const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsBottomSheet.tsx");
const GUILD_POWERUPS_BOTTOM_SHEET_KEY_export = "GUILD_POWERUPS_BOTTOM_SHEET_KEY";

export default function openGuildPowerupsBottomSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12190, dependencyMap.paths), GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
}
export { GUILD_POWERUPS_BOTTOM_SHEET_KEY_export as GUILD_POWERUPS_BOTTOM_SHEET_KEY };
