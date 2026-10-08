// discord_app/modules/user_settings/defs/native/GuildSettingActivityJoining.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import UserSettingsSafetySelectedGuildStore from "../../privacy_and_safety/UserSettingsSafetySelectedGuildStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ getSelectedGuildId: c2, useUserSafetySettingsSelectedGuildStore: c3 } = UserSettingsSafetySelectedGuildStore);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useValue() {
      const cResult = c.c(3);
      const selectedGuildId = React3().selectedGuildId;
      const ActivityJoiningRestrictedGuilds = UserSettings.ActivityJoiningRestrictedGuilds;
      const setting = ActivityJoiningRestrictedGuilds.useSetting();
      if (cResult[0] === selectedGuildId) {
        if (cResult[1] === setting) {
          let tmp2 = cResult[2];
        }
        return !tmp2;
      }
      const hasItem = setting.includes(selectedGuildId);
      cResult[0] = selectedGuildId;
      cResult[1] = setting;
      cResult[2] = hasItem;
      tmp2 = hasItem;
    }
  : function useValue() {
      const ActivityJoiningRestrictedGuilds = UserSettings.ActivityJoiningRestrictedGuilds;
      const setting = ActivityJoiningRestrictedGuilds.useSetting();
      return !setting.includes(React3().selectedGuildId);
    };
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["T+nevN"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["b+bVSw"]);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: ReactCompilerGating.isReactCompilerEnabled()
    ? function useValue() {
        const cResult = c.c(3);
        const selectedGuildId = React3().selectedGuildId;
        const ActivityJoiningRestrictedGuilds = UserSettings.ActivityJoiningRestrictedGuilds;
        const setting = ActivityJoiningRestrictedGuilds.useSetting();
        if (cResult[0] === selectedGuildId) {
          if (cResult[1] === setting) {
            let tmp2 = cResult[2];
          }
          return !tmp2;
        }
        const hasItem = setting.includes(selectedGuildId);
        cResult[0] = selectedGuildId;
        cResult[1] = setting;
        cResult[2] = hasItem;
        tmp2 = hasItem;
      }
    : function useValue() {
        const ActivityJoiningRestrictedGuilds = UserSettings.ActivityJoiningRestrictedGuilds;
        const setting = ActivityJoiningRestrictedGuilds.useSetting();
        return !setting.includes(React3().selectedGuildId);
      },
  onValueChange(arg0) {
    const tmp = React2();
    const sanitizedActivityJoiningRestrictedGuilds = UserSettingsUtils.getSanitizedActivityJoiningRestrictedGuilds();
    if (arg0) {
      sanitizedActivityJoiningRestrictedGuilds.delete(tmp);
    } else {
      sanitizedActivityJoiningRestrictedGuilds.add(tmp);
    }
    const ActivityJoiningRestrictedGuilds = UserSettings.ActivityJoiningRestrictedGuilds;
    const items = [...sanitizedActivityJoiningRestrictedGuilds];
    ActivityJoiningRestrictedGuilds.updateSetting(items);
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/GuildSettingActivityJoining.tsx");

export default toggle;
