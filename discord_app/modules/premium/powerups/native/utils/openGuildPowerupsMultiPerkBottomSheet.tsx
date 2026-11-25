// === Module 13484: openGuildPowerupsMultiPerkBottomSheet ===

// Module 13484 (openGuildPowerupsMultiPerkBottomSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 13452 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(13485, dependencyMap.paths), openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};