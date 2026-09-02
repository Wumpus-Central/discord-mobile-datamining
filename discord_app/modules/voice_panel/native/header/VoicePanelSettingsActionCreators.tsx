// === Module 16925: VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY ===

// Module 16925 (VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const VoicePanelSettingsActionSheet = "VoicePanelSettingsActionSheet";
const result = set.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionCreators.tsx");

export const VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY = "VoicePanelSettingsActionSheet";
export const closeVoicePanelSettingsActionSheet = function closeVoicePanelSettingsActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(VoicePanelSettingsActionSheet);
};
export const openVoicePanelSettingsActionSheet = function openVoicePanelSettingsActionSheet(guildId, channelId) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { guildId, channelId };
  obj.openLazy(asyncRequireImpl(16926, dependencyMap.paths), VoicePanelSettingsActionSheet, obj);
};