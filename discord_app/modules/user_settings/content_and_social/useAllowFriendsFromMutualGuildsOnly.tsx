// === Module 18063: useAllowFriendsFromMutualGuildsOnly ===

// Module 18063 (useAllowFriendsFromMutualGuildsOnly)
import UserSettingsUtils from "UserSettingsUtils" /* 7286 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx");

export function useAllowFriendsFromMutualGuildsOnly() {
  const FriendSourceFlagsSetting = setting(4966).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  items = [setting];
  const memo = noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items);
  return memo.mutualGuilds && !memo.all;
}