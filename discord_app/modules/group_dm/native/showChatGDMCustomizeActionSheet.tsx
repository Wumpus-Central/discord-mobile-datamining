// discord_app/modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef5260 from "../../../actions/ModalActionCreators.tsx";

const result = obj132.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  _modDef5260.pushLazy(asyncRequireImpl(9927, dependencyMap.paths), closure_0, "customize-group-dm", { presentation: "modal" });
};