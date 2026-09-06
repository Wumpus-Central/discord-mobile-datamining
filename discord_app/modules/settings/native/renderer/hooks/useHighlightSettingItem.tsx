// discord_app/modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx
import UserSettingSearchStore from "../../../../user_settings/UserSettingSearchStore.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
};
