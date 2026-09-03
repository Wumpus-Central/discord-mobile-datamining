// === Module 17777: promise ===

// Module 17777 (promise)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/headless_tasks/android/DismissCallAction.tsx");

export default (arg0) => {
  closure_0 = arg0;
  return new Promise((arg0) => {
    closure_0 = arg0;
    closure_1_1(closure_1_2[1]).awaitStorage(() => {
      if (lib.isFullscreenCallUI) {
        let obj = closure_2_1(closure_2_2[2]);
        obj = { action_type: "decline" };
        const merged = Object.assign(lib(closure_2_2[3]).collectChannelAnalyticsMetadataFromId(tmp.channelId));
        obj.track(closure_2_3.CALLKIT_CLICKED, obj);
        const obj3 = lib(closure_2_2[3]);
      }
      obj = { location: closure_2_1(closure_2_2[4]).PUSH_NOTIFICATION, guild_id: tmp.guildId, ringer_user_id: tmp.userId };
      const obj4 = closure_2_1(closure_2_2[2]);
      const merged1 = Object.assign(lib(closure_2_2[3]).collectChannelAnalyticsMetadataFromId(tmp.channelId));
      obj4.track(closure_2_3.RING_CALL_DECLINED, obj);
      const obj6 = lib(closure_2_2[3]);
      closure_2_1(closure_2_2[5]).stopRinging(lib.channelId);
      lib(true);
    });
  });
};