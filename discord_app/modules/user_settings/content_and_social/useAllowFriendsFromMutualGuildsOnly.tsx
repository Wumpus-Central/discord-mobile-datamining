// discord_app/modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx
import react2 from "../../../../_runtime/00576_react.js";
import UserSettings from "../UserSettings.tsx";
import UserSettingsUtils from "../../../utils/UserSettingsUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(2);
      const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
      const setting = FriendSourceFlagsSetting.useSetting();
      if (cResult[0] !== setting) {
        const tmpResult = UserSettingsUtils;
        const flags = tmpResult.computeFlags(setting);
        cResult[0] = setting;
        cResult[1] = flags;
        tmp5 = flags;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5.mutualGuilds && !tmp5.all;
    }
  : () => {
      let setting;
      const FriendSourceFlagsSetting = setting(2028).FriendSourceFlagsSetting;
      setting = FriendSourceFlagsSetting.useSetting();
      const items = [setting];
      const memo = react.useMemo(() => {
        const obj = UserSettingsUtils;
        return obj.computeFlags(setting);
      }, items);
      return memo.mutualGuilds && !memo.all;
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx",
);

export const useAllowFriendsFromMutualGuildsOnly = tmp2;
