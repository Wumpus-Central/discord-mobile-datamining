// === Module 15297: useHighlightSettingItem ===

// Module 15297 (useHighlightSettingItem)
import closure_0 from "zustandStore" /* 14196 */;

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === closure_0);
};