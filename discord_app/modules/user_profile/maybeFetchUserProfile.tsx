// discord_app/modules/user_profile/maybeFetchUserProfile.tsx
import ConnectionsUtils from "../connections/ConnectionsUtils.tsx";
import CollectiblesActionCreators from "../collectibles/CollectiblesActionCreators.tsx";
import useAvatarColor from "../avatar/useAvatarColor.tsx";
import UserActionCreators from "../../actions/UserActionCreators.tsx";
import preloadUserBannerImageDefault from "preloadUserBannerImage.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import UserProfileStore from "UserProfileStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/maybeFetchUserProfile.tsx");

export default function maybeFetchUserProfile(id, guildIconURL, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  ({ withMutualGuilds, type } = obj);
  if (withMutualGuilds === undefined) {
    withMutualGuilds = false;
  }
  let flag = obj.withMutualFriendsCount;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = obj.withMutualFriends;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = obj.waitForRefetch;
  if (flag3 === undefined) {
    flag3 = true;
  }
  const guildId = obj.guildId;
  if ("" === id) {
    return Promise.resolve();
  } else if (UserProfileStore.isFetchingProfile(id, guildId)) {
    return Promise.resolve();
  } else {
    const userProfile = UserProfileStore.getUserProfile(id);
    const guildMemberProfile = UserProfileStore.getGuildMemberProfile(id, guildId);
    let tmp7 = userProfile;
    if (null != guildId) {
      tmp7 = guildMemberProfile;
    }
    const _Date = Date;
    let num;
    const timestamp = Date.now();
    if (tmp7 != null) {
      num = tmp7.fetchEndedAt;
    }
    if (num == null) {
      num = 0;
    }
    let status;
    const diff = timestamp - num;
    if (tmp7 != null) {
      const fetchError = tmp7.fetchError;
      if (fetchError != null) {
        status = fetchError.status;
      }
    }
    let tmp12 = diff >= 60000;
    if (404 === status) {
      if (!tmp12) {
        return Promise.resolve();
      }
    } else {
      let status1;
      if (tmp7 != null) {
        const fetchError2 = tmp7.fetchError;
        if (fetchError2 != null) {
          status1 = fetchError2.status;
        }
      }
    }
    const mutualGuilds = UserProfileStore.getMutualGuilds(id);
    const mutualFriends = UserProfileStore.getMutualFriends(id);
    const tmp17 = null == guildId ? null == userProfile : null == guildMemberProfile;
    let tmp18 = !tmp17;
    if (!tmp17) {
      if (!tmp12) {
        tmp12 = null == mutualGuilds && withMutualGuilds;
        const tmp19 = null == mutualGuilds && withMutualGuilds;
      }
      if (!tmp12) {
        tmp12 = null == mutualFriends && flag2;
        const tmp20 = null == mutualFriends && flag2;
      }
      if (!tmp12) {
        tmp12 = null == tmp16 && flag;
        const tmp21 = null == tmp16 && flag;
      }
      tmp18 = tmp12;
    }
    if (!tmp17) {
      if (!tmp18) {
        return Promise.resolve();
      }
    }
    if (null != guildId) {
      let profileEffect1;
      if (guildMemberProfile != null) {
        profileEffect1 = guildMemberProfile.profileEffect;
      }
      let profileEffect = profileEffect1;
    } else if (userProfile != null) {
      profileEffect = userProfile.profileEffect;
    }
    if (null != profileEffect) {
      const result = CollectiblesActionCreators.maybeFetchCollectiblesProduct(profileEffect.skuId);
    }
    if (null != guildId) {
      let profileFrame1;
      if (guildMemberProfile != null) {
        profileFrame1 = guildMemberProfile.profileFrame;
      }
      let profileFrame = profileFrame1;
    } else if (userProfile != null) {
      profileFrame = userProfile.profileFrame;
    }
    if (null != profileFrame) {
      const result1 = CollectiblesActionCreators.maybeFetchCollectiblesProduct(profileFrame.skuId);
    }
    if (null != guildIconURL) {
      useAvatarColor.maybeFetchColors(guildIconURL);
    }
    const obj5 = {
      type,
      withMutualGuilds,
      withMutualFriends: flag2,
      withMutualFriendsCount: flag,
      guildId,
      joinRequestId: tmp2,
      abortSignal: tmp3,
      connectionsRoleId: null,
    };
    let tmp34;
    if (null != guildId) {
      const obj7 = { guildMember: GuildMemberStore.getMember(guildId, id), channel: ChannelStore.getChannel(tmp) };
      const visibleConnectionsRole = ConnectionsUtils.getVisibleConnectionsRole(obj7);
      id = undefined;
      if (visibleConnectionsRole != null) {
        id = visibleConnectionsRole.id;
      }
      tmp34 = id;
    }
    obj5.connectionsRoleId = tmp34;
    const profile = UserActionCreators.fetchProfile(id, obj5, preloadUserBannerImageDefault);
    let resolved = profile;
    if (tmp18) {
      resolved = profile;
      if (!flag3) {
        resolved = Promise.resolve();
      }
    }
    return resolved;
  }
}
