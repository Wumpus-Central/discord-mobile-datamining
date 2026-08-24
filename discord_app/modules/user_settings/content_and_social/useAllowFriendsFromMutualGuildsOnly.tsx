// discord_app/modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx
import closure_2 from "../../../../_runtime/00019_noop.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx");

export const useAllowFriendsFromMutualGuildsOnly = function useAllowFriendsFromMutualGuildsOnly() {
  const FriendSourceFlagsSetting = setting(4069).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = React.useMemo(() => setting(closure_1_1[2]).computeFlags(setting), items);
  return memo.mutualGuilds && !memo.all;
};