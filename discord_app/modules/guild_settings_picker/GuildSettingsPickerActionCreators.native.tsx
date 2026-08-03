const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  importDefault(4223).openLazy(require(1959) /* asyncRequireImpl */(13110, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};