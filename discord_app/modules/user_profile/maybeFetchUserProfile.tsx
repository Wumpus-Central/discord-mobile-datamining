// discord_app/modules/user_profile/maybeFetchUserProfile.tsx
import closure_3 from "../../stores/ChannelStore.tsx";
import closure_4 from "../../stores/GuildMemberStore.tsx";
import closure_5 from "UserProfileStore.tsx";
import { hasFetchedColors } from "../avatar/useAvatarColor.tsx";
import { openCollectiblesShop } from "../collectibles/CollectiblesActionCreators.tsx";
import { officialApplicationIds } from "../connections/ConnectionsUtils.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/user_profile/maybeFetchUserProfile.tsx");

export default function maybeFetchUserProfile(id, closure_0, guildMember) {
  const _require = id;
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
  } else if (fetchingProfile.isFetchingProfile(id, guildId)) {
    return Promise.resolve();
  } else {
    const userProfile = obj10.getUserProfile(id);
    const guildMemberProfile = obj10.getGuildMemberProfile(id, guildId);
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
    const mutualGuilds = obj10.getMutualGuilds(id);
    const mutualFriends = obj10.getMutualFriends(id);
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
      const result = require("../collectibles/CollectiblesActionCreators.tsx").maybeFetchCollectiblesProduct(profileEffect.skuId);
      const obj2 = openCollectiblesShop;
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
      const result1 = require("../collectibles/CollectiblesActionCreators.tsx").maybeFetchCollectiblesProduct(profileFrame.skuId);
      const obj3 = openCollectiblesShop;
    }
    if (null != closure_0) {
      require("../avatar/useAvatarColor.tsx").maybeFetchColors(closure_0);
      const obj4 = hasFetchedColors;
    }
    obj = { type: null, withMutualGuilds: null, withMutualFriends: null, withMutualFriendsCount: null, guildId: null, joinRequestId: null, abortSignal: null, connectionsRoleId: null };
    obj[0] = type;
    obj[1] = withMutualGuilds;
    obj[2] = flag2;
    obj[3] = flag;
    obj[4] = guildId;
    obj[5] = tmp2;
    obj[6] = tmp3;
    let tmp34;
    if (null != guildId) {
      obj = { guildMember: null, channel: null };
      obj[0] = member.getMember(guildId, id);
      obj[1] = channel.getChannel(tmp);
      const visibleConnectionsRole = require("../connections/ConnectionsUtils.tsx").getVisibleConnectionsRole(obj);
      id = undefined;
      if (visibleConnectionsRole != null) {
        id = visibleConnectionsRole.id;
      }
      tmp34 = id;
      const obj6 = officialApplicationIds;
    }
    obj[7] = tmp34;
    if (flag3) {
      obj(709).wait(() => {
        obj = id(closure_1_2[7]);
        return obj.fetchProfile(id, obj, obj(closure_1_2[8]));
      });
      return Promise.resolve();
    } else {
      const profile = require("../../actions/UserActionCreators.tsx").fetchProfile(id, obj, obj(8458));
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
};