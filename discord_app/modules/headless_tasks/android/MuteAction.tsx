// === Module 19542: MuteAction ===

// Module 19542 (MuteAction)
import UserSettingsConstants from "UserSettingsConstants" /* 1094 */;
import _modDef2046 from "module_2046" /* 2046 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7212 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7217 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19540 */;
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
        const obj = _modDef2046();
        toISOStringResult = _modDef2046().add(HOURS_1, "second").toISOString();
        const addResult = _modDef2046().add(HOURS_1, "second");
      }
      const obj2 = { guildId: closure_0.guildId, channelId: closure_0.channelId, settings: null, label: NotificationSettingsUtils.NotificationLabels.Muted };
      const obj4 = { muted: true, mute_config: { selected_time_window: MuteUntilSeconds.HOURS_1, end_time: toISOStringResult } };
      obj2.settings = obj4;
      const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(obj2);
      closure_0(true);
      const obj5 = { selected_time_window: MuteUntilSeconds.HOURS_1, end_time: toISOStringResult };
    });
  });
};