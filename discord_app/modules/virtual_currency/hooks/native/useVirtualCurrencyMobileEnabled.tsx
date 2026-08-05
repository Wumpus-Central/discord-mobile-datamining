// discord_app/modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx
import { isMetaQuest } from "../../../device/MetaQuestUtils.android.tsx";
const result = require("set").fileFinishedImporting("modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx");

export const isVirtualCurrencyEnabled = function isVirtualCurrencyEnabled() {
  const obj = { enabled: null };
  obj[0] = !isMetaQuest /* isMetaQuest */.isMetaQuest();
  return obj;
};
export const useVirtualCurrencyMobileEnabled = function useVirtualCurrencyMobileEnabled() {
  const obj = { enabled: null };
  obj[0] = !isMetaQuest /* isMetaQuest */.isMetaQuest();
  return obj;
};