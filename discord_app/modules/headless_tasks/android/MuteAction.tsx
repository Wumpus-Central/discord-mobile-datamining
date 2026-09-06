// === Module 17934: MuteAction ===

// Module 17934 (MuteAction)
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import _modDef4153 from "module_4153" /* 4153 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7114 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7119 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 17932 */;
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
        let obj = _modDef4153();
        let HOURS_1 = tmp.muteTime;
        if (HOURS_1 == null) {
          HOURS_1 = MuteUntilSeconds.HOURS_1;
        }
        toISOStringResult = obj.add(HOURS_1, "second").toISOString();
        const addResult = obj.add(HOURS_1, "second");
      }
      obj = { muted: true, mute_config: null };
      obj = { selected_time_window: MuteUntilSeconds.HOURS_1, end_time: toISOStringResult };
      obj.mute_config = obj;
      const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(tmp.guildId, tmp.channelId, obj, NotificationSettingsUtils.NotificationLabels.Muted);
      closure_0(true);
    });
  });
};