// discord_app/modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02008_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";

const result = set.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(
    asyncRequireImpl(8498, dependencyMap.paths),
    "BlockedPaymentsCountryActionSheet",
  );
}
