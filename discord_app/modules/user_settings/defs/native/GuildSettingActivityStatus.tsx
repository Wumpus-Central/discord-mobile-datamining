// discord_app/modules/user_settings/defs/native/GuildSettingActivityStatus.tsx
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
      const ActivityRestrictedGuilds = UserSettings.ActivityRestrictedGuilds;
      const setting = ActivityRestrictedGuilds.useSetting();
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
      const ActivityRestrictedGuilds = UserSettings.ActivityRestrictedGuilds;
      const setting = ActivityRestrictedGuilds.useSetting();
      return !setting.includes(React3().selectedGuildId);
    };
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.IQO6Bi);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.TUKMak);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: ReactCompilerGating.isReactCompilerEnabled()
    ? function useValue() {
        const cResult = c.c(3);
        const selectedGuildId = React3().selectedGuildId;
        const ActivityRestrictedGuilds = UserSettings.ActivityRestrictedGuilds;
        const setting = ActivityRestrictedGuilds.useSetting();
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
        const ActivityRestrictedGuilds = UserSettings.ActivityRestrictedGuilds;
        const setting = ActivityRestrictedGuilds.useSetting();
        return !setting.includes(React3().selectedGuildId);
      },
  onValueChange(arg0) {
    const tmp = React2();
    const sanitizedActivityRestrictedGuilds = UserSettingsUtils.getSanitizedActivityRestrictedGuilds();
    if (arg0) {
      sanitizedActivityRestrictedGuilds.delete(tmp);
    } else {
      sanitizedActivityRestrictedGuilds.add(tmp);
    }
    const ActivityRestrictedGuilds = UserSettings.ActivityRestrictedGuilds;
    const items = [...sanitizedActivityRestrictedGuilds];
    ActivityRestrictedGuilds.updateSetting(items);
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/GuildSettingActivityStatus.tsx");

export default toggle;
