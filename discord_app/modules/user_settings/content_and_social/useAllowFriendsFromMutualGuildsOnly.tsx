// discord_app/modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx
import UserSettingsUtils from "../../../utils/UserSettingsUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx",
);

export const useAllowFriendsFromMutualGuildsOnly = function useAllowFriendsFromMutualGuildsOnly() {
  const FriendSourceFlagsSetting = setting(1935).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items);
  return memo.mutualGuilds && !memo.all;
};
