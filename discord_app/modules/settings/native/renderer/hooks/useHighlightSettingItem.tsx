// === Module 14698: useHighlightSettingItem ===

// Module 14698 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 14694 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
};