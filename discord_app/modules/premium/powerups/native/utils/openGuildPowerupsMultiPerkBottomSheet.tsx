// === Module 12025: openGuildPowerupsMultiPerkBottomSheet ===

// Module 12025 (openGuildPowerupsMultiPerkBottomSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 11996 */;

const result = set.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.openLazy(asyncRequireImpl(12026, dependencyMap.paths), openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};