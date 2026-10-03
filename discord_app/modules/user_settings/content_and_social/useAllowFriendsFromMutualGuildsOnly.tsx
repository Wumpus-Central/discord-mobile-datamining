// discord_app/modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx
import c from "../../../../_runtime/00576_c.js";
import UserSettings from "../UserSettings.tsx";
import UserSettingsUtils from "../../../utils/UserSettingsUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx",
);

export const useAllowFriendsFromMutualGuildsOnly = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
      const setting = FriendSourceFlagsSetting.useSetting();
      if (cResult[0] !== setting) {
        const flags = UserSettingsUtils.computeFlags(setting);
        cResult[0] = setting;
        cResult[1] = flags;
        let tmp5 = flags;
        const tmpResult = UserSettingsUtils;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5.mutualGuilds && !tmp5.all;
    }
  : () => {
      const FriendSourceFlagsSetting = setting(2028).FriendSourceFlagsSetting;
      setting = FriendSourceFlagsSetting.useSetting();
      const items = [setting];
      const memo = noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items);
      return memo.mutualGuilds && !memo.all;
    };
