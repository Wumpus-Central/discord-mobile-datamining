// === Module 16199: useAllowFriendsFromMutualGuildsOnly ===

// Module 16199 (useAllowFriendsFromMutualGuildsOnly)
import c from "c" /* 576 */;
import UserSettings from "UserSettings" /* 2041 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6682 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx");

export const useAllowFriendsFromMutualGuildsOnly = ReactCompilerGating.isReactCompilerEnabled() ? (function useAllowFriendsFromMutualGuildsOnly() {
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
}) : (function useAllowFriendsFromMutualGuildsOnly() {
  const FriendSourceFlagsSetting = setting(2041).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items);
  return memo.mutualGuilds && !memo.all;
});