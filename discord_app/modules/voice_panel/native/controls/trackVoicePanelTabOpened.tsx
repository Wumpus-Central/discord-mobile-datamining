// === Module 17007: trackVoicePanelTabOpened ===

// Module 17007 (trackVoicePanelTabOpened)
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import closure_2 from "generateOldThreadCutoff" /* 4493 */;
import { AnalyticEvents } from "ME" /* 673 */;

const result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/trackVoicePanelTabOpened.tsx");

export default function trackVoicePanelTabOpened(arg0, tab, source) {
  let obj = closure_2;
  let hasUnreadResult = closure_2.hasUnread(arg0);
  if (!hasUnreadResult) {
    hasUnreadResult = obj.getMentionCount(arg0) > 0;
  }
  obj = { tab, source, is_chat_badged: hasUnreadResult };
  expandEventPropertiesDefault.track(AnalyticEvents.VOICE_PANEL_TAB_OPENED, obj);
};
export const VoicePanelTabAnalyticsSources = { STORE: "store", GESTURE: "gesture", PREJOIN_BUTTON: "prejoin button", CONNECTED_BUTTON: "connected button", VOICE_CONTROLS: "voice controls", HEADER_BUTTON: "header button" };