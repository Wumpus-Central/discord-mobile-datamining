// === Module 16079: trackVoicePanelTabOpened ===

// Module 16079 (trackVoicePanelTabOpened)
import generateOldThreadCutoff from "generateOldThreadCutoff";
import { AnalyticEvents } from "ME";

const result = require("expandEventProperties").fileFinishedImporting("modules/voice_panel/native/controls/trackVoicePanelTabOpened.tsx");

export default function trackVoicePanelTabOpened(arg0, tab, source) {
  let obj = generateOldThreadCutoff;
  let hasUnreadResult = generateOldThreadCutoff.hasUnread(arg0);
  if (!hasUnreadResult) {
    hasUnreadResult = obj.getMentionCount(arg0) > 0;
  }
  obj = { tab, source, is_chat_badged: hasUnreadResult };
  importDefault(698).track(AnalyticEvents.VOICE_PANEL_TAB_OPENED, obj);
};
export const VoicePanelTabAnalyticsSources = { STORE: "store", GESTURE: "gesture", PREJOIN_BUTTON: "prejoin button", CONNECTED_BUTTON: "connected button", VOICE_CONTROLS: "voice controls", HEADER_BUTTON: "header button" };