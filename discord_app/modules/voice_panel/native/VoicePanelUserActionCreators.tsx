// === Module 19084: VoicePanelUserActionCreators ===

// Module 19084 (VoicePanelUserActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const VoicePanelUserActionSheet = "VoicePanelUserActionSheet";
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelUserActionCreators.tsx");

export const VOICE_PANEL_USER_ACTION_SHEET_KEY = "VoicePanelUserActionSheet";
export function closeVoicePanelUserActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(VoicePanelUserActionSheet);
}
export function openVoicePanelUserActionSheet(guildId, channelId, userId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(19085, dependencyMap.paths), VoicePanelUserActionSheet, { guildId, channelId, userId });
}