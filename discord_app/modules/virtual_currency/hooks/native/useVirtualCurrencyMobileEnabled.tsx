// === Module 4380: isVirtualCurrencyEnabled ===

// Module 4380 (isVirtualCurrencyEnabled)
import obj132 from "obj132" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;

const result = obj132.fileFinishedImporting("modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx");

export const isVirtualCurrencyEnabled = function isVirtualCurrencyEnabled() {
  const obj = { enabled: !isMetaQuest.isMetaQuest() };
  return obj;
};
export const useVirtualCurrencyMobileEnabled = function useVirtualCurrencyMobileEnabled() {
  const obj = { enabled: !isMetaQuest.isMetaQuest() };
  return obj;
};