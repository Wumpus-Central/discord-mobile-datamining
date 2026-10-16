// === Module 18154: VoicePanelSettingsActionCreators ===

// Module 18154 (VoicePanelSettingsActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const VoicePanelSettingsActionSheet = "VoicePanelSettingsActionSheet";
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionCreators.tsx");

export const VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY = "VoicePanelSettingsActionSheet";
export const closeVoicePanelSettingsActionSheet = function closeVoicePanelSettingsActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(VoicePanelSettingsActionSheet);
};
export const openVoicePanelSettingsActionSheet = function openVoicePanelSettingsActionSheet(guildId, channelId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18155, dependencyMap.paths), VoicePanelSettingsActionSheet, { guildId, channelId });
};