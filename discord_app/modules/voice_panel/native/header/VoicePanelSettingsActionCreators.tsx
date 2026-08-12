// discord_app/modules/voice_panel/native/header/VoicePanelSettingsActionCreators.tsx
import { asyncRequireImpl } from "../../../../../_runtime/02007_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
const VoicePanelSettingsActionSheet = "VoicePanelSettingsActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionCreators.tsx");

export const VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY = "VoicePanelSettingsActionSheet";
export const closeVoicePanelSettingsActionSheet = function closeVoicePanelSettingsActionSheet() {
  ACTION_SHEET_HEIGHT_HALF.hideActionSheet(VoicePanelSettingsActionSheet);
};
export const openVoicePanelSettingsActionSheet = function openVoicePanelSettingsActionSheet(guildId, channelId) {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { guildId, channelId };
  obj.openLazy(asyncRequireImpl(16258, dependencyMap.paths), VoicePanelSettingsActionSheet, obj);
};