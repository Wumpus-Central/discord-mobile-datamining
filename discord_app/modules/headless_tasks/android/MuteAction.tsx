// === Module 18470: MuteAction ===

// Module 18470 (MuteAction)
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import _modDef4414 from "module_4414" /* 4414 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7445 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7450 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18468 */;
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
        const obj = _modDef4414();
        toISOStringResult = _modDef4414().add(HOURS_1, "second").toISOString();
        const addResult = _modDef4414().add(HOURS_1, "second");
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