// discord_app/modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02008_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef5265 from "../../../actions/ModalActionCreators.tsx";

const result = set.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  _modDef5265.pushLazy(asyncRequireImpl(9966, dependencyMap.paths), closure_0, "customize-group-dm", { presentation: "modal" });
};