// discord_app/modules/headless_tasks/android/DismissCallAction.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CallActionCreatorsDefault from "../../../actions/CallActionCreators.tsx";
import HeadlessTaskUtilsDefault from "../HeadlessTaskUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/headless_tasks/android/DismissCallAction.tsx");

export default (arg0) => {
  closure_0 = arg0;
  return new Promise((arg0) => {
    closure_0 = arg0;
    HeadlessTaskUtilsDefault.awaitStorage(() => {
      if (closure_0.isFullscreenCallUI) {
        let obj = { action_type: "decline" };
        const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadataFromId(closure_0.channelId));
        obj.track(AnalyticEvents.CALLKIT_CLICKED, obj);
      }
      obj = {
        location: AnalyticsLocationDefault.PUSH_NOTIFICATION,
        guild_id: closure_0.guildId,
        ringer_user_id: closure_0.userId,
      };
      const obj4 = AnalyticsUtilsDefault;
      const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadataFromId(closure_0.channelId));
      obj4.track(AnalyticEvents.RING_CALL_DECLINED, obj);
      CallActionCreatorsDefault.stopRinging(closure_0.channelId);
      closure_0(true);
    });
  });
};
