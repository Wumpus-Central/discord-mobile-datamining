// === Module 9890: showChatGDMCustomizeActionSheet ===

// Module 9890 (showChatGDMCustomizeActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4411 */;
import _modDef4675 from "module_4675" /* 4675 */;

const result = set.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  _modDef4675.pushLazy(asyncRequireImpl(9891, dependencyMap.paths), closure_0, "customize-group-dm", { presentation: "modal" });
};