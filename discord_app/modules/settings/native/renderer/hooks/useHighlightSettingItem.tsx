// === Module 15060: useHighlightSettingItem ===

// Module 15060 (useHighlightSettingItem)
import closure_0 from "zustandStore" /* 13993 */;

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === closure_0);
};