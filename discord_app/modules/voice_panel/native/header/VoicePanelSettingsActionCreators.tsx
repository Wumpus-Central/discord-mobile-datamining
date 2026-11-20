// === Module 17872: VoicePanelSettingsActionCreators ===

// Module 17872 (VoicePanelSettingsActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const VoicePanelSettingsActionSheet = "VoicePanelSettingsActionSheet";
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionCreators.tsx");

export const VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY = "VoicePanelSettingsActionSheet";
export function closeVoicePanelSettingsActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(VoicePanelSettingsActionSheet);
}
export function openVoicePanelSettingsActionSheet(guildId, channelId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17873, dependencyMap.paths), VoicePanelSettingsActionSheet, { guildId, channelId });
}