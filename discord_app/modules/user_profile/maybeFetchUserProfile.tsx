// discord_app/modules/user_profile/maybeFetchUserProfile.tsx
import UserActionCreators from "../../actions/UserActionCreators.tsx";
import preloadUserBannerImageDefault from "preloadUserBannerImage.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import UserProfileStore from "UserProfileStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/maybeFetchUserProfile.tsx");

export default function maybeFetchUserProfile(id, guildIconURL) {
  _require = id;
  let obj = guildMember;
  if (guildMember === undefined) {
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
  let flag3 = obj.dispatchWait;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = obj.waitForRefetch;
  if (flag4 === undefined) {
    flag4 = true;
  }
  const guildId = obj.guildId;
  obj = undefined;
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
      let profileEffect;
      if (guildMemberProfile != null) {
        profileEffect = guildMemberProfile.profileEffect;
      }
    } else if (userProfile != null) {
      profileEffect = userProfile.profileEffect;
    }
    if (null != profileEffect) {
      const result = require("CollectiblesActionCreators").maybeFetchCollectiblesProduct(profileEffect.skuId);
      const obj2 = require("CollectiblesActionCreators");
    }
    if (null != guildId) {
      let profileFrame;
      if (guildMemberProfile != null) {
        profileFrame = guildMemberProfile.profileFrame;
      }
    } else if (userProfile != null) {
      profileFrame = userProfile.profileFrame;
    }
    if (null != profileFrame) {
      const result1 = require("CollectiblesActionCreators").maybeFetchCollectiblesProduct(profileFrame.skuId);
      const obj3 = require("CollectiblesActionCreators");
    }
    if (null != guildIconURL) {
      require("useAvatarColor").maybeFetchColors(guildIconURL);
      const obj4 = require("useAvatarColor");
    }
    obj = {
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
      obj = { guildMember: GuildMemberStore.getMember(guildId, id), channel: ChannelStore.getChannel(tmp) };
      const visibleConnectionsRole = require("ConnectionsUtils").getVisibleConnectionsRole(obj);
      id = undefined;
      if (visibleConnectionsRole != null) {
        id = visibleConnectionsRole.id;
      }
      tmp34 = id;
      const obj6 = require("ConnectionsUtils");
    }
    obj.connectionsRoleId = tmp34;
    if (flag3) {
      obj(573).wait(() => {
        obj = UserActionCreators;
        return obj.fetchProfile(closure_0, obj, preloadUserBannerImageDefault);
      });
      return Promise.resolve();
    } else {
      const profile = require("UserActionCreators").fetchProfile(id, obj, obj(8188));
      let resolved = profile;
      if (tmp18) {
        resolved = profile;
        if (!flag4) {
          resolved = Promise.resolve();
        }
      }
      return resolved;
    }
  }
}
