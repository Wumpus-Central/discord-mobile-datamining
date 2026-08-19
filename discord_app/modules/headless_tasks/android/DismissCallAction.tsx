// discord_app/modules/headless_tasks/android/DismissCallAction.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ME from "../../../Constants.tsx";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import QUICK_SWITCHERDefault from "../../app_analytics/AnalyticsLocation.tsx";
import _modDef9735 from "../../../actions/CallActionCreators.tsx";
import _modDef17148 from "../HeadlessTaskUtils.tsx";

const AnalyticEvents = ME.AnalyticEvents;
const result = obj132.fileFinishedImporting("modules/headless_tasks/android/DismissCallAction.tsx");

export default (arg0) => {
  closure_0 = arg0;
  return new Promise((arg0) => {
    closure_0 = arg0;
    _modDef17148.awaitStorage(() => {
      if (lib.isFullscreenCallUI) {
        let obj = { action_type: "decline" };
        const merged = Object.assign(lib(dependencyMap[3]).collectChannelAnalyticsMetadataFromId(lib.channelId));
        obj.track(AnalyticEvents.CALLKIT_CLICKED, obj);
        const obj3 = lib(dependencyMap[3]);
      }
      obj = { location: QUICK_SWITCHERDefault.PUSH_NOTIFICATION, guild_id: lib.guildId, ringer_user_id: lib.userId };
      const obj4 = expandEventPropertiesDefault;
      const merged1 = Object.assign(lib(dependencyMap[3]).collectChannelAnalyticsMetadataFromId(lib.channelId));
      obj4.track(AnalyticEvents.RING_CALL_DECLINED, obj);
      const obj6 = lib(dependencyMap[3]);
      _modDef9735.stopRinging(lib.channelId);
      lib(true);
    });
  });
};