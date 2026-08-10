// discord_app/modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx
import { asyncRequireImpl } from "../../../_runtime/01988_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../action_sheet/native/ActionSheetActionCreators.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl(13238, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};