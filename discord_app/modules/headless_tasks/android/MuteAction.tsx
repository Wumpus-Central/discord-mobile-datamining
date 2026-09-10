// === Module 18025: MuteAction ===

// Module 18025 (MuteAction)
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import _modDef4196 from "module_4196" /* 4196 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7166 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7171 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18023 */;
import size from "module_2" /* 2 */;

const MuteUntilSeconds = UserSettingsConstants.MuteUntilSeconds;
let result = size.fileFinishedImporting("modules/headless_tasks/android/MuteAction.tsx");

export default (arg0) => {
  closure_0 = arg0;
  return new Promise((arg0) => {
    closure_0 = arg0;
    HeadlessTaskUtilsDefault.awaitStorage(() => {
      let toISOStringResult = null;
      if (-1 !== closure_0.muteTime) {
        let obj = _modDef4196();
        let HOURS_1 = closure_0.muteTime;
        if (HOURS_1 == null) {
          HOURS_1 = MuteUntilSeconds.HOURS_1;
        }
        toISOStringResult = obj.add(HOURS_1, "second").toISOString();
        const addResult = obj.add(HOURS_1, "second");
      }
      obj = { muted: true, mute_config: null };
      obj = { selected_time_window: MuteUntilSeconds.HOURS_1, end_time: toISOStringResult };
      obj.mute_config = obj;
      const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(closure_0.guildId, closure_0.channelId, obj, NotificationSettingsUtils.NotificationLabels.Muted);
      closure_0(true);
    });
  });
};