import { MuteUntilSeconds } from "MAX_FAVORITES";

let result = require("t").fileFinishedImporting("modules/headless_tasks/android/MuteAction.tsx");

export default (arg0) => {
  let closure_0 = arg0;
  return new Promise((arg0) => {
    let closure_0 = arg0;
    outer1_1(outer1_2[1]).awaitStorage(() => {
      let toISOStringResult = null;
      if (-1 !== lib.muteTime) {
        let obj = outer2_1(outer2_2[2])();
        let HOURS_1 = tmp.muteTime;
        if (HOURS_1 == null) {
          HOURS_1 = outer2_3.HOURS_1;
        }
        toISOStringResult = obj.add(HOURS_1, "second").toISOString();
        const addResult = obj.add(HOURS_1, "second");
      }
      obj = { muted: true, mute_config: obj };
      obj = { selected_time_window: outer2_3.HOURS_1, end_time: toISOStringResult };
      const result = outer2_1(outer2_2[3]).updateChannelOverrideSettings(tmp.guildId, tmp.channelId, obj, lib(outer2_2[4]).NotificationLabels.Muted);
      lib(true);
    });
  });
};