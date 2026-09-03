// discord_app/modules/premium/native/openPremiumPlanSelectionActionSheet.tsx
import set from "../../../../_runtime/00002_set.js";
import GuildFeatures from "../PremiumConstants.tsx";
import asyncRequireImpl from "../../../../_runtime/02008_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";

let closure_3 = GuildFeatures.PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY;
const result = set.fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  }
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(7178, dependencyMap.paths), closure_3, arg0, arg1);
}
