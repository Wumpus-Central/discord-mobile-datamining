// === Module 18208: DismissCallAction ===

// Module 18208 (DismissCallAction)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4820 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7296 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 9336 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18203 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/headless_tasks/android/DismissCallAction.tsx");

export default (arg0) => {
  closure_0 = arg0;
  return new Promise((arg0) => {
    closure_0 = arg0;
    HeadlessTaskUtilsDefault.awaitStorage(() => {
      if (closure_0.isFullscreenCallUI) {
        const obj2 = { action_type: "decline" };
        const obj = AnalyticsUtilsDefault;
        const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadataFromId(closure_0.channelId));
        obj.track(AnalyticEvents.CALLKIT_CLICKED, obj2);
      }
      const obj4 = AnalyticsUtilsDefault;
      const obj5 = { location: AnalyticsLocationDefault.PUSH_NOTIFICATION, guild_id: closure_0.guildId, ringer_user_id: closure_0.userId };
      const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadataFromId(closure_0.channelId));
      obj4.track(AnalyticEvents.RING_CALL_DECLINED, obj5);
      CallActionCreatorsDefault.stopRinging(closure_0.channelId);
      closure_0(true);
    });
  });
};