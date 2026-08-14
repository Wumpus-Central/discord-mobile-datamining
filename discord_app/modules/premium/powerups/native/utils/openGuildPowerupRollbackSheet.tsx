// discord_app/modules/premium/powerups/native/utils/openGuildPowerupRollbackSheet.tsx
import { asyncRequireImpl } from "../../../../../../_runtime/02007_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupRollbackSheet.tsx");

export default function openGuildPowerupRollbackSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl(11955, dependencyMap.paths), GUILD_POWERUP_ROLLBACK_SHEET_KEY, arg0);
};
export const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";