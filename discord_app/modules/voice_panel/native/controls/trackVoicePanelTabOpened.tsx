// discord_app/modules/voice_panel/native/controls/trackVoicePanelTabOpened.tsx
import Constants from "../../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/trackVoicePanelTabOpened.tsx");

export default function trackVoicePanelTabOpened(arg0, tab, source) {
  const hasUnreadResult = ReadStateStore.hasUnread(arg0) || ReadStateStore.getMentionCount(arg0) > 0;
  const obj2 = AnalyticsUtilsDefault;
  const obj3 = { tab, source, is_chat_badged: hasUnreadResult };
  obj2.track(AnalyticEvents.VOICE_PANEL_TAB_OPENED, obj3);
}
export const VoicePanelTabAnalyticsSources = {
  STORE: "store",
  GESTURE: "gesture",
  PREJOIN_BUTTON: "prejoin button",
  CONNECTED_BUTTON: "connected button",
  VOICE_CONTROLS: "voice controls",
  HEADER_BUTTON: "header button",
};
