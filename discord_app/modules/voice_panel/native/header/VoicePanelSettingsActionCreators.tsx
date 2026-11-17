// === Module 19239: VoicePanelSettingsActionCreators ===

// Module 19239 (VoicePanelSettingsActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const VoicePanelSettingsActionSheet = "VoicePanelSettingsActionSheet";
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionCreators.tsx");

export const VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY = "VoicePanelSettingsActionSheet";
export function closeVoicePanelSettingsActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(VoicePanelSettingsActionSheet);
}
export function openVoicePanelSettingsActionSheet(guildId, channelId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(19240, dependencyMap.paths), VoicePanelSettingsActionSheet, { guildId, channelId });
}