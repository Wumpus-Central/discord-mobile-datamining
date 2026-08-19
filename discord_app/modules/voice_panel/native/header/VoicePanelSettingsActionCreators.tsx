// === Module 16327: VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY ===

// Module 16327 (VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

const VoicePanelSettingsActionSheet = "VoicePanelSettingsActionSheet";
const result = obj132.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionCreators.tsx");

export const VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY = "VoicePanelSettingsActionSheet";
export const closeVoicePanelSettingsActionSheet = function closeVoicePanelSettingsActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(VoicePanelSettingsActionSheet);
};
export const openVoicePanelSettingsActionSheet = function openVoicePanelSettingsActionSheet(guildId, channelId) {
  const obj = { guildId, channelId };
  obj.openLazy(asyncRequireImpl(16328, dependencyMap.paths), VoicePanelSettingsActionSheet, obj);
};