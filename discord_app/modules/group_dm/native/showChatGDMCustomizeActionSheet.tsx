// discord_app/modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx
const result = require("ChatGDMCustomizeActionSheet").fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(closure_0) {
  require("../../action_sheet/native/ActionSheetActionCreators.tsx").hideActionSheet();
  const obj = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
  require("../../../actions/ModalActionCreators.tsx").pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(9593, dependencyMap.paths), closure_0, "customize-group-dm", { presentation: "modal" });
};