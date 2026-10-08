// === Module 12299: openGuildPowerupsMultiPerkBottomSheet ===

// Module 12299 (openGuildPowerupsMultiPerkBottomSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 12268 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(12300, dependencyMap.paths), openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};