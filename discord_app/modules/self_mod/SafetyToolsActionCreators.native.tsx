// discord_app/modules/self_mod/SafetyToolsActionCreators.native.tsx
import set from "set" /* 2 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import LOCATION_CONTEXT_MOBILE from "LOCATION_CONTEXT_MOBILE" /* 10569 */;
import { asyncRequireImpl } from "../../../_runtime/02007_asyncRequireImpl.js";

let closure_3 = LOCATION_CONTEXT_MOBILE.getSafetyToolsActionSheetKey;
const result = set.fileFinishedImporting("modules/self_mod/SafetyToolsActionCreators.native.tsx");

export const openSafetyToolsActionSheet = function openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType) {
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
    }
  };
  obj.openLazy(_asyncRequireImpl(10605, dependencyMap.paths), tmp, obj);
};