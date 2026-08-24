// discord_app/modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx
import closure_0 from "../../../../user_settings/UserSettingSearchStore.tsx";

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === closure_0);
};