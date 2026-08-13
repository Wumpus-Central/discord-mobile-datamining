// discord_app/modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx
import { asyncRequireImpl } from "../../../../_runtime/02007_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
const result = require("ChatGDMCustomizeActionSheet").fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(closure_0) {
  ACTION_SHEET_HEIGHT_HALF.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALF;
  ModalActionCreators.pushLazy(asyncRequireImpl(9723, dependencyMap.paths), closure_0, "customize-group-dm", { presentation: "modal" });
};