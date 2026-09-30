// === Module 12245: openGuildPowerupsMultiPerkBottomSheet ===

// Module 12245 (openGuildPowerupsMultiPerkBottomSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 12216 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(12246, dependencyMap.paths), openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};