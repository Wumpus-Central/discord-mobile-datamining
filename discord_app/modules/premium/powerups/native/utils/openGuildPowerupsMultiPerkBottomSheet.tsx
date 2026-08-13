// discord_app/modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx
import { asyncRequireImpl } from "../../../../../../_runtime/02007_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import { openGuildPowerupsBottomSheet } from "openGuildPowerupsBottomSheet.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = ACTION_SHEET_HEIGHT_HALF;
  obj.openLazy(asyncRequireImpl(11968, dependencyMap.paths), openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};