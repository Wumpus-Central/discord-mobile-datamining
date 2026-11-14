// === Module 18572: useAllowFriendsFromMutualGuildsOnly ===

// Module 18572 (useAllowFriendsFromMutualGuildsOnly)
import UserSettingsUtils from "UserSettingsUtils" /* 7813 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx");

export function useAllowFriendsFromMutualGuildsOnly() {
  const FriendSourceFlagsSetting = setting(5131).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  items = [setting];
  const memo = noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items);
  return memo.mutualGuilds && !memo.all;
}