// === Module 11923: useUserProfileEmbedUsers ===

// Module 11923 (useUserProfileEmbedUsers)
import UserProfileEmbedUsers from "UserProfileEmbedUsers" /* 11924 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1230 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import GuildMemberStore from "GuildMemberStore" /* 4924 */;
import RelationshipStore from "RelationshipStore" /* 4954 */;
import UserStore from "UserStore" /* 1386 */;
import UserProfileStore from "UserProfileStore" /* 6132 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/useUserProfileEmbedUsers.tsx");

export default function useUserProfileEmbedUsers(arg0, arg1, arg2) {
  _require = arg0;
  dependencyMap = arg1;
  noop = arg2;
  items = [arg0];
  const memo = noop.useMemo(() => UserProfileEmbedUsers.collectUserProfileEmbedUserIds(closure_0), items);
  const items1 = [require("ApexExperiment").ApexExperimentStore, UserStore, UserProfileStore, GuildMemberStore, ChannelStore, RelationshipStore, memo];
  const items2 = [memo, arg1, arg2];
  return require("initialize").useStateFromStores(items1, () => {
    if (memo.length > 0) {
      if (obj.getIsUserProfileEmbedRenderingMobileEnabled("Messages")) {
        let NO_USER_PROFILE_EMBED_USERS = UserProfileEmbedUsers.getUserProfileEmbedUsers(tmp, closure_1, closure_2);
      }
      return NO_USER_PROFILE_EMBED_USERS;
    }
    NO_USER_PROFILE_EMBED_USERS = UserProfileEmbedUsers.NO_USER_PROFILE_EMBED_USERS;
  }, items2, require("UserProfileEmbedUsers").areUserProfileEmbedUsersEqual);
};