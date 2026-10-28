// discord_app/modules/voice_panel/native/VoicePanelUserActionCreators.tsx
import asyncRequireImpl from "../../../../_runtime/01999_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const VoicePanelUserActionSheet = "VoicePanelUserActionSheet";
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelUserActionCreators.tsx");

export const VOICE_PANEL_USER_ACTION_SHEET_KEY = "VoicePanelUserActionSheet";
export const closeVoicePanelUserActionSheet = function closeVoicePanelUserActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(VoicePanelUserActionSheet);
};
export const openVoicePanelUserActionSheet = function openVoicePanelUserActionSheet(guildId, channelId, userId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18852, dependencyMap.paths), VoicePanelUserActionSheet, {
    guildId,
    channelId,
    userId,
  });
};
