// discord_app/modules/self_mod/SafetyToolsActionCreators.native.tsx
import set from "../../../_runtime/00002_set.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import LOCATION_CONTEXT_MOBILE from "Constants.tsx";
import { asyncRequireImpl } from "../../../_runtime/02008_asyncRequireImpl.js";

let closure_3 = LOCATION_CONTEXT_MOBILE.getSafetyToolsActionSheetKey;
const result = set.fileFinishedImporting("modules/self_mod/SafetyToolsActionCreators.native.tsx");

export const openSafetyToolsActionSheet = function openSafetyToolsActionSheet(
  channelId,
  recipientId,
  warningId,
  warningType,
) {
  const tmp = callback(channelId);
  const _require = tmp;
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    channelId,
    warningId,
    warningType,
    recipientId,
    onClose() {
      closure_1_1(closure_1_2[1]).hideActionSheet(closure_0);
    },
  };
  obj.openLazy(asyncRequireImpl(11246, dependencyMap.paths), tmp, obj);
};
