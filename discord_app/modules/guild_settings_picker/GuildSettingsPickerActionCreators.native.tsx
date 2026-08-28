// discord_app/modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx
import set from "../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../_runtime/02010_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";

const result = set.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(13561, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};