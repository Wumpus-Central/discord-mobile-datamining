// discord_app/modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import isMetaQuest from "../../../device/MetaQuestUtils.android.tsx";

const result = obj132.fileFinishedImporting("modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx");

export const isVirtualCurrencyEnabled = function isVirtualCurrencyEnabled() {
  const obj = { enabled: !isMetaQuest.isMetaQuest() };
  return obj;
};
export const useVirtualCurrencyMobileEnabled = function useVirtualCurrencyMobileEnabled() {
  const obj = { enabled: !isMetaQuest.isMetaQuest() };
  return obj;
};