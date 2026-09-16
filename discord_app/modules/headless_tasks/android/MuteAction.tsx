// discord_app/modules/headless_tasks/android/MuteAction.tsx
import UserSettingsConstants from "../../user_settings/UserSettingsConstants.tsx";
import _modDef4229 from "../../../../_runtime/metro/04229__.js";
import NotificationSettingsUtils from "../../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../actions/NotificationSettingsModalActionCreators.tsx";
import HeadlessTaskUtilsDefault from "../HeadlessTaskUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
        const obj = _modDef4229();
        toISOStringResult = _modDef4229().add(HOURS_1, "second").toISOString();
        const addResult = _modDef4229().add(HOURS_1, "second");
      }
      const obj2 = {
        muted: true,
        mute_config: { selected_time_window: MuteUntilSeconds.HOURS_1, end_time: toISOStringResult },
      };
      const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(
        closure_0.guildId,
        closure_0.channelId,
        obj2,
        NotificationSettingsUtils.NotificationLabels.Muted,
      );
      closure_0(true);
      const obj4 = { selected_time_window: MuteUntilSeconds.HOURS_1, end_time: toISOStringResult };
    });
  });
};
