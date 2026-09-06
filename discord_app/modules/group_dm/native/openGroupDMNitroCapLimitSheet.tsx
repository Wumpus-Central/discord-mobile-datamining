// === Module 11595: openGroupDMNitroCapLimitSheet ===

// Module 11595 (openGroupDMNitroCapLimitSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { location };
  obj.openLazy(asyncRequireImpl(11596, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj);
};