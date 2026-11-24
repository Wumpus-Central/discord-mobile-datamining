// discord_app/modules/user_profile/native/useUserProfileEmbedUsers.tsx
import UserProfileEmbedUsers from "UserProfileEmbedUsers.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import UserProfileStore from "../UserProfileStore.tsx";

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
  const items1 = [
    require("ApexExperiment").ApexExperimentStore,
    UserStore,
    UserProfileStore,
    GuildMemberStore,
    memo,
    RelationshipStore,
  ];
  const items2 = [memo, arg1, arg2];
  return require("initialize").useStateFromStores(
    items1,
    () => {
      if (memo.length > 0) {
        if (obj.getIsUserProfileEmbedRenderingMobileEnabled("Messages")) {
          let NO_USER_PROFILE_EMBED_USERS = UserProfileEmbedUsers.getUserProfileEmbedUsers(tmp, closure_1, closure_2);
        }
        return NO_USER_PROFILE_EMBED_USERS;
      }
      NO_USER_PROFILE_EMBED_USERS = UserProfileEmbedUsers.NO_USER_PROFILE_EMBED_USERS;
    },
    items2,
    require("UserProfileEmbedUsers").areUserProfileEmbedUsersEqual,
  );
}
