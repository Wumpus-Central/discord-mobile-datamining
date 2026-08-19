// === Module 17150: promise ===

// Module 17150 (promise)
import obj132 from "obj132" /* 2 */;
import MAX_FAVORITES from "MAX_FAVORITES" /* 685 */;
import tDefault from "t" /* 3975 */;
import _modDef6798 from "module_6798" /* 6798 */;
import _modDef17148 from "module_17148" /* 17148 */;

const MuteUntilSeconds = MAX_FAVORITES.MuteUntilSeconds;
let result = obj132.fileFinishedImporting("modules/headless_tasks/android/MuteAction.tsx");

export default (arg0) => {
  closure_0 = arg0;
  return new Promise((arg0) => {
    closure_0 = arg0;
    _modDef17148.awaitStorage(() => {
      let toISOStringResult = null;
      if (-1 !== lib.muteTime) {
        let obj = tDefault();
        let HOURS_1 = lib.muteTime;
        if (HOURS_1 == null) {
          HOURS_1 = MuteUntilSeconds.HOURS_1;
        }
        toISOStringResult = obj.add(HOURS_1, "second").toISOString();
        const addResult = obj.add(HOURS_1, "second");
      }
      obj = { selected_time_window: MuteUntilSeconds.HOURS_1, end_time: toISOStringResult };
      const result = _modDef6798.updateChannelOverrideSettings(lib.guildId, lib.channelId, obj, lib(dependencyMap[4]).NotificationLabels.Muted);
      lib(true);
    });
  });
};