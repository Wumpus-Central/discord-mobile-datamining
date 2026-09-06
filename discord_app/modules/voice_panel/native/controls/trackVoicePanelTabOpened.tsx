// discord_app/modules/voice_panel/native/controls/trackVoicePanelTabOpened.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/trackVoicePanelTabOpened.tsx");

export default function trackVoicePanelTabOpened(arg0, tab, source) {
  let obj = ReadStateStore;
  let hasUnreadResult = ReadStateStore.hasUnread(arg0);
  if (!hasUnreadResult) {
    hasUnreadResult = obj.getMentionCount(arg0) > 0;
  }
  obj = { tab, source, is_chat_badged: hasUnreadResult };
  AnalyticsUtilsDefault.track(AnalyticEvents.VOICE_PANEL_TAB_OPENED, obj);
}
export const VoicePanelTabAnalyticsSources = {
  STORE: "store",
  GESTURE: "gesture",
  PREJOIN_BUTTON: "prejoin button",
  CONNECTED_BUTTON: "connected button",
  VOICE_CONTROLS: "voice controls",
  HEADER_BUTTON: "header button",
};
