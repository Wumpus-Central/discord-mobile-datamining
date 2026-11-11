// === Module 19859: VoicePanelUserActionCreators ===

// Module 19859 (VoicePanelUserActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const VoicePanelUserActionSheet = "VoicePanelUserActionSheet";
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelUserActionCreators.tsx");

export const VOICE_PANEL_USER_ACTION_SHEET_KEY = "VoicePanelUserActionSheet";
export function closeVoicePanelUserActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(VoicePanelUserActionSheet);
}
export function openVoicePanelUserActionSheet(c1, c2, c0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(19860, dependencyMap.paths), VoicePanelUserActionSheet, { guildId: importDefault, channelId: dependencyMap, userId: _require });
}