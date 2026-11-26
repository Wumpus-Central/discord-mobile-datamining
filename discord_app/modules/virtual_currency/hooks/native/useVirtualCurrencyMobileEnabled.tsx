// === Module 5789: useVirtualCurrencyMobileEnabled ===

// Module 5789 (useVirtualCurrencyMobileEnabled)
import MetaQuestUtils from "MetaQuestUtils" /* 1626 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx");

export function isVirtualCurrencyEnabled() {
  const obj = { enabled: !MetaQuestUtils.isMetaQuest() };
  return obj;
}
export function useVirtualCurrencyMobileEnabled() {
  const obj = { enabled: !MetaQuestUtils.isMetaQuest() };
  return obj;
}