// === Module 20561: MuteAction ===

// Module 20561 (MuteAction)
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import _modDef2166 from "module_2166" /* 2166 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7346 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7351 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20559 */;
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
        const obj = _modDef2166();
        toISOStringResult = _modDef2166().add(HOURS_1, "second").toISOString();
        const addResult = _modDef2166().add(HOURS_1, "second");
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