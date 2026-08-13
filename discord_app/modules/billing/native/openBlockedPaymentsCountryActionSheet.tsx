// discord_app/modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx
import { asyncRequireImpl } from "../../../../_runtime/02007_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ACTION_SHEET_HEIGHT_HALF.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALF;
  ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl(7491, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};