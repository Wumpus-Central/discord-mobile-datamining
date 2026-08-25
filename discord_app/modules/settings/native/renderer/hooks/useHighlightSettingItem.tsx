// === Module 15154: useHighlightSettingItem ===

// Module 15154 (useHighlightSettingItem)
import closure_0 from "zustandStore" /* 14096 */;

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === closure_0);
};