// discord_app/modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13719, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
