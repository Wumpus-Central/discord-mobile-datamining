// === Module 16863: promise ===

// Module 16863 (promise)
import { AnalyticEvents } from "ME";

const result = require("expandEventProperties").fileFinishedImporting("modules/headless_tasks/android/DismissCallAction.tsx");

export default (arg0) => {
  let closure_0 = arg0;
  return new Promise((arg0) => {
    let closure_0 = arg0;
    outer1_1(outer1_2[1]).awaitStorage(() => {
      if (lib.isFullscreenCallUI) {
        let obj = outer2_1(outer2_2[2]);
        obj = { action_type: "decline" };
        const merged = Object.assign(lib(outer2_2[3]).collectChannelAnalyticsMetadataFromId(tmp.channelId));
        obj.track(outer2_3.CALLKIT_CLICKED, obj);
        const obj3 = lib(outer2_2[3]);
      }
      obj = { location: outer2_1(outer2_2[4]).PUSH_NOTIFICATION, guild_id: tmp.guildId, ringer_user_id: tmp.userId };
      const obj4 = outer2_1(outer2_2[2]);
      const merged1 = Object.assign(lib(outer2_2[3]).collectChannelAnalyticsMetadataFromId(tmp.channelId));
      obj4.track(outer2_3.RING_CALL_DECLINED, obj);
      const obj6 = lib(outer2_2[3]);
      outer2_1(outer2_2[5]).stopRinging(lib.channelId);
      lib(true);
    });
  });
};