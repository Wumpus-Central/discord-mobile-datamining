// discord_app/modules/voice_panel/native/header/VoicePanelSettingsActionCreators.tsx
const VoicePanelSettingsActionSheet = "VoicePanelSettingsActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionCreators.tsx");

export const VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY = "VoicePanelSettingsActionSheet";
export const closeVoicePanelSettingsActionSheet = function closeVoicePanelSettingsActionSheet() {
  require("../../../action_sheet/native/ActionSheetActionCreators.tsx").hideActionSheet(VoicePanelSettingsActionSheet);
};
export const openVoicePanelSettingsActionSheet = function openVoicePanelSettingsActionSheet(guildId, channelId) {
  let obj = require("../../../action_sheet/native/ActionSheetActionCreators.tsx");
  obj = { guildId, channelId };
  obj.openLazy(require("../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(16054, dependencyMap.paths), VoicePanelSettingsActionSheet, obj);
};