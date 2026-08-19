// discord_app/modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";

const result = obj132.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(7730, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};