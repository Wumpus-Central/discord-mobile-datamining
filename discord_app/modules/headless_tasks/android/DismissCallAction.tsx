// === Module 17153: promise ===

// Module 17153 (promise)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 7159 */;
import _modDef9735 from "module_9735" /* 9735 */;
import _modDef17148 from "module_17148" /* 17148 */;

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