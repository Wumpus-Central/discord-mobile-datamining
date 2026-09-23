// === Module 15054: useHighlightSettingItem ===

// Module 15054 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 15050 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
};