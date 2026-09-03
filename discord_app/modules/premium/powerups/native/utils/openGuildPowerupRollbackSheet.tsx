// discord_app/modules/premium/powerups/native/utils/openGuildPowerupRollbackSheet.tsx
import set from "../../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../../_runtime/02008_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";

const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
const result = set.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupRollbackSheet.tsx");

export default function openGuildPowerupRollbackSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(
    asyncRequireImpl(12315, dependencyMap.paths),
    GUILD_POWERUP_ROLLBACK_SHEET_KEY,
    arg0,
  );
}
export const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
