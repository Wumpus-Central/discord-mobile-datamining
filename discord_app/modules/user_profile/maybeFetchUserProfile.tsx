// discord_app/modules/user_profile/maybeFetchUserProfile.tsx
import UserActionCreators from "../../actions/UserActionCreators.tsx";
import preloadUserBannerImageDefault from "preloadUserBannerImage.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import UserProfileStore from "UserProfileStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/user_profile/maybeFetchUserProfile.tsx");

export default function maybeFetchUserProfile(id, guildIconURL, arg2) {
  let tmp34;
  let type;
  let withMutualGuilds;
  _require = id;
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
  let flag3 = obj.dispatchWait;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = obj.waitForRefetch;
  if (flag4 === undefined) {
    flag4 = true;
  }
  const guildId = obj.guildId;
  let obj5;
  if ("" === id) {
    return Promise.resolve();
  } else if (UserProfileStore.isFetchingProfile(id, guildId)) {
    return Promise.resolve();
  } else {
    let profileEffect;
    let profileFrame;
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
    if (tmp18) {
      if (!tmp12) {
        tmp12 = null == mutualGuilds && withMutualGuilds;
      }
      if (!tmp12) {
        tmp12 = null == mutualFriends && flag2;
      }
      if (!tmp12) {
        tmp12 = null == tmp16 && flag;
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
      profileEffect = profileEffect1;
    } else if (userProfile != null) {
      profileEffect = userProfile.profileEffect;
    }
    if (null != profileEffect) {
      const obj2 = require("CollectiblesActionCreators");
      const result = obj2.maybeFetchCollectiblesProduct(profileEffect.skuId);
    }
    if (null != guildId) {
      let profileFrame1;
      if (guildMemberProfile != null) {
        profileFrame1 = guildMemberProfile.profileFrame;
      }
      profileFrame = profileFrame1;
    } else if (userProfile != null) {
      profileFrame = userProfile.profileFrame;
    }
    if (null != profileFrame) {
      const obj3 = require("CollectiblesActionCreators");
      const result1 = obj3.maybeFetchCollectiblesProduct(profileFrame.skuId);
    }
    if (null != guildIconURL) {
      const obj4 = require("useAvatarColor");
      obj4.maybeFetchColors(guildIconURL);
    }
    obj5 = {
      type,
      withMutualGuilds,
      withMutualFriends: flag2,
      withMutualFriendsCount: flag,
      guildId,
      joinRequestId: tmp2,
      abortSignal: tmp3,
      connectionsRoleId: tmp34,
    };
    tmp34 = undefined;
    if (null != guildId) {
      const obj6 = { guildMember: GuildMemberStore.getMember(guildId, id), channel: ChannelStore.getChannel(tmp) };
      const getVisibleConnectionsRole = require("ConnectionsUtils").getVisibleConnectionsRole;
      require("ConnectionsUtils");
      const visibleConnectionsRole = getVisibleConnectionsRole(obj6);
      id = undefined;
      if (visibleConnectionsRole != null) {
        id = visibleConnectionsRole.id;
      }
      tmp34 = id;
    }
    if (flag3) {
      const obj8 = obj5(584);
      obj8.wait(() => {
        const obj = UserActionCreators;
        return obj.fetchProfile(id, obj5, preloadUserBannerImageDefault);
      });
      return Promise.resolve();
    } else {
      const obj7 = require("UserActionCreators");
      const profile = obj7.fetchProfile(id, obj5, obj5(7870));
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
