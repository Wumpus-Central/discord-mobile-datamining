// discord_app/modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx
import asyncRequireImpl from "../../../../_runtime/01987_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(11093, dependencyMap.paths),
    "BlockedPaymentsCountryActionSheet",
  );
}
