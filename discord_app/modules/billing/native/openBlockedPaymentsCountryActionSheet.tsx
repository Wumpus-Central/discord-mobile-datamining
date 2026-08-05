// discord_app/modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  require("../../action_sheet/native/ActionSheetActionCreators.tsx").hideActionSheet();
  const obj = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
  require("../../action_sheet/native/ActionSheetActionCreators.tsx").openLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(7367, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};