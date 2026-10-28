// === Module 18851: VoicePanelUserActionCreators ===

// Module 18851 (VoicePanelUserActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import size from "module_2" /* 2 */;

const VoicePanelUserActionSheet = "VoicePanelUserActionSheet";
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelUserActionCreators.tsx");

export const VOICE_PANEL_USER_ACTION_SHEET_KEY = "VoicePanelUserActionSheet";
export const closeVoicePanelUserActionSheet = function closeVoicePanelUserActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(VoicePanelUserActionSheet);
};
export const openVoicePanelUserActionSheet = function openVoicePanelUserActionSheet(guildId, channelId, userId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18852, dependencyMap.paths), VoicePanelUserActionSheet, { guildId, channelId, userId });
};