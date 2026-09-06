// === Module 17937: DismissCallAction ===

// Module 17937 (DismissCallAction)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 9182 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 17932 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/headless_tasks/android/DismissCallAction.tsx");

export default (arg0) => {
  closure_0 = arg0;
  return new Promise((arg0) => {
    closure_0 = arg0;
    HeadlessTaskUtilsDefault.awaitStorage(() => {
      if (closure_0.isFullscreenCallUI) {
        let obj = { action_type: "decline" };
        const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadataFromId(tmp.channelId));
        obj.track(AnalyticEvents.CALLKIT_CLICKED, obj);
      }
      obj = { location: AnalyticsLocationDefault.PUSH_NOTIFICATION, guild_id: tmp.guildId, ringer_user_id: tmp.userId };
      const obj4 = AnalyticsUtilsDefault;
      const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadataFromId(tmp.channelId));
      obj4.track(AnalyticEvents.RING_CALL_DECLINED, obj);
      CallActionCreatorsDefault.stopRinging(closure_0.channelId);
      closure_0(true);
    });
  });
};