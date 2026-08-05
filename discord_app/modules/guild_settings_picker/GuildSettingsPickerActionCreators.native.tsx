// discord_app/modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  require("../action_sheet/native/ActionSheetActionCreators.tsx").openLazy(require("../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(13143, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};