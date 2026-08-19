// === Module 9926: showChatGDMCustomizeActionSheet ===

// Module 9926 (showChatGDMCustomizeActionSheet)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import _modDef5260 from "module_5260" /* 5260 */;

const result = obj132.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  _modDef5260.pushLazy(asyncRequireImpl(9927, dependencyMap.paths), closure_0, "customize-group-dm", { presentation: "modal" });
};