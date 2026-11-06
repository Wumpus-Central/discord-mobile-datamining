// === Module 16852: useHighlightSettingItem ===

// Module 16852 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 16848 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}