// === Module 15246: GuildSettingsPickerActionCreators ===

// Module 15246 (GuildSettingsPickerActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15247, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}