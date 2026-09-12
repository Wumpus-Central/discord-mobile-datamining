// === Module 14781: useHighlightSettingItem ===

// Module 14781 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 14777 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
};