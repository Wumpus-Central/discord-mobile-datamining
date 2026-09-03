// === Module 17774: promise ===

// Module 17774 (promise)
import set from "set" /* 2 */;
import MAX_FAVORITES from "MAX_FAVORITES" /* 682 */;

const MuteUntilSeconds = MAX_FAVORITES.MuteUntilSeconds;
let result = set.fileFinishedImporting("modules/headless_tasks/android/MuteAction.tsx");

export default (arg0) => {
  closure_0 = arg0;
  return new Promise((arg0) => {
    closure_0 = arg0;
    closure_1_1(closure_1_2[1]).awaitStorage(() => {
      let toISOStringResult = null;
      if (-1 !== lib.muteTime) {
        let obj = closure_2_1(closure_2_2[2])();
        let HOURS_1 = tmp.muteTime;
        if (HOURS_1 == null) {
          HOURS_1 = closure_2_3.HOURS_1;
        }
        toISOStringResult = obj.add(HOURS_1, "second").toISOString();
        const addResult = obj.add(HOURS_1, "second");
      }
      obj = { muted: true, mute_config: obj };
      obj = { selected_time_window: closure_2_3.HOURS_1, end_time: toISOStringResult };
      const result = closure_2_1(closure_2_2[3]).updateChannelOverrideSettings(tmp.guildId, tmp.channelId, obj, lib(closure_2_2[4]).NotificationLabels.Muted);
      lib(true);
    });
  });
};