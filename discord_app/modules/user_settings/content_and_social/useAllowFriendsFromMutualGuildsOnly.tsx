// === Module 15019: useAllowFriendsFromMutualGuildsOnly ===

// Module 15019 (useAllowFriendsFromMutualGuildsOnly)
import noop from "noop" /* 19 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx");

export const useAllowFriendsFromMutualGuildsOnly = function useAllowFriendsFromMutualGuildsOnly() {
  const FriendSourceFlagsSetting = setting(4066).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = React.useMemo(() => setting(dependencyMap[2]).computeFlags(setting), items);
  return memo.mutualGuilds && !memo.all;
};