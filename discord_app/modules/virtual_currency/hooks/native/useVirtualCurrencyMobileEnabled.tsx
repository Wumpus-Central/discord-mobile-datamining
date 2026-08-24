// discord_app/modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx
import set from "../../../../../_runtime/00002_set.js";
import isMetaQuest from "../../../device/MetaQuestUtils.android.tsx";

const result = set.fileFinishedImporting("modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx");

export const isVirtualCurrencyEnabled = function isVirtualCurrencyEnabled() {
  const obj = { enabled: !isMetaQuest.isMetaQuest() };
  return obj;
};
export const useVirtualCurrencyMobileEnabled = function useVirtualCurrencyMobileEnabled() {
  const obj = { enabled: !isMetaQuest.isMetaQuest() };
  return obj;
};