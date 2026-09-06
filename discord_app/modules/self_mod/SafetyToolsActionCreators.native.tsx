// discord_app/modules/self_mod/SafetyToolsActionCreators.native.tsx
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import Constants from "Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_3 = Constants.getSafetyToolsActionSheetKey;
const result = size.fileFinishedImporting("modules/self_mod/SafetyToolsActionCreators.native.tsx");

export const openSafetyToolsActionSheet = function openSafetyToolsActionSheet(
  channelId,
  recipientId,
  warningId,
  warningType,
) {
  const tmp = closure_3(channelId);
  _require = tmp;
  const obj = {
    channelId,
    warningId,
    warningType,
    recipientId,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(closure_0);
    },
  };
  obj.openLazy(require("asyncRequireImpl")(11392, dependencyMap.paths), tmp, obj);
};
