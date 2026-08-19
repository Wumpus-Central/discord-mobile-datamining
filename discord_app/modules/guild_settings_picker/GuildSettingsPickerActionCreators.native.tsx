// discord_app/modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";

const result = obj132.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(13349, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};