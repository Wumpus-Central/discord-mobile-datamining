// discord_app/modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx
import zustandStore from "../../../../user_settings/UserSettingSearchStore.tsx";

const result = require("obj132").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === closure_0);
};