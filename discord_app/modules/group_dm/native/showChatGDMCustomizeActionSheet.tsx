// === Module 11412: showChatGDMCustomizeActionSheet ===

// Module 11412 (showChatGDMCustomizeActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11413, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};