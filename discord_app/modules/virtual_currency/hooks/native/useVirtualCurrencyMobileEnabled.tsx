// === Module 13030: isVirtualCurrencyEnabled ===

// Module 13030 (isVirtualCurrencyEnabled)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1623 */;

const result = set.fileFinishedImporting("modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx");

export const isVirtualCurrencyEnabled = function isVirtualCurrencyEnabled() {
  const obj = { enabled: !isMetaQuest.isMetaQuest() };
  return obj;
};
export const useVirtualCurrencyMobileEnabled = function useVirtualCurrencyMobileEnabled() {
  const obj = { enabled: !isMetaQuest.isMetaQuest() };
  return obj;
};