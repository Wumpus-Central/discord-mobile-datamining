// === Module 15303: GuildSettingsPickerActionCreators ===

// Module 15303 (GuildSettingsPickerActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15304, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}