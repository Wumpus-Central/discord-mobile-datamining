// === Module 18047: MuteAction ===

// Module 18047 (MuteAction)
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import _modDef4228 from "module_4228" /* 4228 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7217 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7222 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18045 */;
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
        let HOURS_1 = closure_0.muteTime;
        if (HOURS_1 == null) {
          HOURS_1 = MuteUntilSeconds.HOURS_1;
        }
        const obj = _modDef4228();
        toISOStringResult = _modDef4228().add(HOURS_1, "second").toISOString();
        const addResult = _modDef4228().add(HOURS_1, "second");
      }
      const obj2 = { muted: true, mute_config: { selected_time_window: MuteUntilSeconds.HOURS_1, end_time: toISOStringResult } };
      const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(closure_0.guildId, closure_0.channelId, obj2, NotificationSettingsUtils.NotificationLabels.Muted);
      closure_0(true);
      const obj4 = { selected_time_window: MuteUntilSeconds.HOURS_1, end_time: toISOStringResult };
    });
  });
};