// discord_app/modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";

const result = obj132.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(7905, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};