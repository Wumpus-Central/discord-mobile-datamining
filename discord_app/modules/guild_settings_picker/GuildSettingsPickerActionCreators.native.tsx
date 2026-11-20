// === Module 14980: GuildSettingsPickerActionCreators ===

// Module 14980 (GuildSettingsPickerActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14981, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}