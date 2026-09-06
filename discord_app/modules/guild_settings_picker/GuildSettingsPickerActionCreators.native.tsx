// discord_app/modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(13889, dependencyMap.paths),
    "GuildSettingsPickerBottomSheet",
    arg0,
  );
};
