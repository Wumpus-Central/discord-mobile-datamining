// === Module 11824: useUserProfileEmbedUsers ===

// Module 11824 (useUserProfileEmbedUsers)
import UserProfileEmbedUsers from "UserProfileEmbedUsers" /* 11825 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4766 */;
import GuildMemberStore from "GuildMemberStore" /* 4829 */;
import RelationshipStore from "RelationshipStore" /* 4859 */;
import UserStore from "UserStore" /* 1386 */;
import UserProfileStore from "UserProfileStore" /* 6037 */;

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
  const items1 = [require("ApexExperiment").ApexExperimentStore, UserStore, UserProfileStore, GuildMemberStore, memo, RelationshipStore];
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