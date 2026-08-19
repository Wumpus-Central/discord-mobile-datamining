// discord_app/modules/self_mod/SafetyToolsActionCreators.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import LOCATION_CONTEXT_MOBILE from "Constants.tsx";
import { asyncRequireImpl } from "../../../_runtime/02007_asyncRequireImpl.js";

let closure_3 = LOCATION_CONTEXT_MOBILE.getSafetyToolsActionSheetKey;
const result = obj132.fileFinishedImporting("modules/self_mod/SafetyToolsActionCreators.native.tsx");

export const openSafetyToolsActionSheet = function openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType) {
  const tmp = callback(channelId);
  const _require = tmp;
  const obj = {
    channelId,
    warningId,
    warningType,
    recipientId,
    onClose() {
      ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(closure_0);
    }
  };
  obj.openLazy(asyncRequireImpl(10605, dependencyMap.paths), tmp, obj);
};