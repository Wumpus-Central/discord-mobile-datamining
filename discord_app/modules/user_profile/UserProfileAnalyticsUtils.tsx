// discord_app/modules/user_profile/UserProfileAnalyticsUtils.tsx
import Constants2 from "../../../discord_common/js/shared/Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import AvatarUtils from "../../utils/AvatarUtils.tsx";
import AppAnalyticsUtils from "../app_analytics/AppAnalyticsUtils.tsx";
import AuthorizedAppsStore2 from "../oauth2/AuthorizedAppsStore.tsx";
import Constants3 from "Constants.tsx";
import useDisplayProfile from "hooks/useDisplayProfile.tsx";
import UserProfilePerformanceAnalyticsExperiment from "experiments/UserProfilePerformanceAnalyticsExperiment.tsx";
import BadgeDirectoryStore from "../badges/BadgeDirectoryStore.tsx";
import UserAffinitiesV2Store from "../user_affinities/UserAffinitiesV2Store.tsx";
import ApplicationStreamingStore from "../../stores/ApplicationStreamingStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import PresenceStore from "../../stores/PresenceStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import UserProfileStore from "UserProfileStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AuthorizedAppsStore = AuthorizedAppsStore2;

let closure_14;
let closure_15;
function getProfileProperties(guildMemberProfile) {
  let guildMember;
  let user;
  let userProfile;
  ({ user, userProfile, guildMember } = guildMemberProfile);
  if (userProfile == null) {
    userProfile = guildMemberProfile.guildMemberProfile;
  }
  let nick;
  const _Boolean = Boolean;
  if (guildMember != null) {
    nick = guildMember.nick;
  }
  const items = [];
  if (_Boolean(nick)) {
    items.push(constants.NICKNAME);
  }
  let pronouns;
  const _Boolean2 = Boolean;
  if (userProfile != null) {
    pronouns = userProfile.pronouns;
  }
  if (_Boolean2(pronouns)) {
    items.push(constants.PRONOUNS);
  }
  let avatar;
  const _Boolean3 = Boolean;
  if (user != null) {
    avatar = user.avatar;
  }
  if (_Boolean3(avatar)) {
    let avatar1;
    const isAnimatedIconHash = AvatarUtils.isAnimatedIconHash;
    AvatarUtils;
    if (user != null) {
      avatar1 = user.avatar;
    }
    items.push(isAnimatedIconHash(avatar1) ? constants.ANIMATED_AVATAR : constants.AVATAR);
  }
  let banner;
  const _Boolean4 = Boolean;
  if (userProfile != null) {
    banner = userProfile.banner;
  }
  if (_Boolean4(banner)) {
    let banner1;
    const isAnimatedIconHash2 = AvatarUtils.isAnimatedIconHash;
    AvatarUtils;
    if (userProfile != null) {
      banner1 = userProfile.banner;
    }
    items.push(isAnimatedIconHash2(banner1) ? constants.ANIMATED_BANNER : constants.BANNER);
  }
  let bio;
  const _Boolean5 = Boolean;
  if (userProfile != null) {
    bio = userProfile.bio;
  }
  if (_Boolean5(bio)) {
    items.push(constants.BIO);
  }
  let themeColors;
  if (userProfile != null) {
    themeColors = userProfile.themeColors;
  }
  let tmp25 = null != themeColors;
  if (tmp25) {
    const themeColors1 = userProfile.themeColors;
    tmp25 = undefined !== themeColors1.find((item) => null !== item);
  }
  if (tmp25) {
    items.push(constants.THEME);
  }
  let avatarDecoration;
  if (user != null) {
    avatarDecoration = user.avatarDecoration;
  }
  if (null != avatarDecoration) {
    items.push(constants.AVATAR_DECORATION);
  }
  let profileEffect;
  if (userProfile != null) {
    profileEffect = userProfile.profileEffect;
  }
  if (null != profileEffect) {
    items.push(constants.PROFILE_EFFECT);
  }
  return items;
}
function getTrackUserProfileProperties(dependencyMap) {
  let _guildMemberProfile;
  let _userProfile;
  let found;
  let guildId;
  let layout;
  let mapped;
  let obj2;
  let obj3;
  let sessionId;
  let showGuildProfile;
  let skuId;
  let skuId1;
  let skuId2;
  let sourceSessionId;
  let userId;
  ({ guildId, showGuildProfile } = dependencyMap);
  ({ layout, userId, sessionId, sourceSessionId } = dependencyMap);
  if (showGuildProfile === undefined) {
    showGuildProfile = true;
  }
  const user = UserStore.getUser(userId);
  if (null == user) {
    return {};
  } else {
    let combined;
    let id1;
    const getDisplayProfile = useDisplayProfile.getDisplayProfile;
    useDisplayProfile;
    if (user != null) {
      id1 = user.id;
    }
    let tmp3;
    if (showGuildProfile) {
      tmp3 = guildId;
    }
    const displayProfile = getDisplayProfile(id1, tmp3);
    let member = null;
    if (showGuildProfile) {
      member = null;
      if (null != guildId) {
        let id2;
        const getMember = GuildMemberStore.getMember;
        if (user != null) {
          id2 = user.id;
        }
        member = getMember(guildId, id2);
      }
    }
    const obj = {
      profile_layout: layout,
      profile_session_id: sessionId,
      source_profile_session_id: sourceSessionId,
      profile_properties: getProfileProperties(obj2),
      guild_profile_properties: getProfileProperties(obj3),
      profile_activity_types: mapped.filter((item) => undefined !== item),
      profile_badges: found,
      avatar_decoration_sku_id: skuId,
      profile_effect_sku_id: skuId1,
      profile_frame_sku_id: skuId2,
      user_status: null,
      is_guild_profile: null,
      is_bot_profile: null,
      is_private_to_viewer: null,
    };
    obj2 = { user, userProfile: _userProfile };
    _userProfile = undefined;
    if (displayProfile != null) {
      _userProfile = displayProfile._userProfile;
    }
    obj3 = { guildMember: member, guildMemberProfile: _guildMemberProfile };
    _guildMemberProfile = undefined;
    if (displayProfile != null) {
      _guildMemberProfile = displayProfile._guildMemberProfile;
    }
    const activities = PresenceStore.getActivities(user.id);
    mapped = activities.map((type) => type.type);
    found = undefined;
    if (displayProfile != null) {
      const badges = displayProfile.getBadges();
      if (badges != null) {
        const mapped1 = badges.map((id) => id.id);
        found = mapped1.filter((item) => typeof item === "string");
      }
    }
    if (found == null) {
      found = [];
    }
    const avatarDecoration = user.avatarDecoration;
    skuId = undefined;
    if (avatarDecoration != null) {
      skuId = avatarDecoration.skuId;
    }
    skuId1 = undefined;
    if (displayProfile != null) {
      const profileEffect = displayProfile.profileEffect;
      if (profileEffect != null) {
        skuId1 = profileEffect.skuId;
      }
    }
    skuId2 = undefined;
    if (displayProfile != null) {
      const profileFrame = displayProfile.profileFrame;
      if (profileFrame != null) {
        skuId2 = profileFrame.skuId;
      }
    }
    const id = user.id;
    const status = PresenceStore.getStatus(id);
    if (status === StatusTypes.ONLINE) {
      if (PresenceStore.isMobileOnline(id)) {
        const _HermesInternal2 = HermesInternal;
        combined = "" + status + "-mobile";
      }
      obj.user_status = combined;
      let guildId1;
      if (displayProfile != null) {
        guildId1 = displayProfile.guildId;
      }
      obj.is_guild_profile = null != guildId1;
      obj.is_bot_profile = user.bot;
      let flag;
      if (displayProfile != null) {
        flag = displayProfile.private;
      }
      if (flag == null) {
        flag = false;
      }
      obj.is_private_to_viewer = flag;
      return obj;
    }
    combined = status;
    if (status === StatusTypes.ONLINE) {
      const _HermesInternal = HermesInternal;
      combined = "" + status + "-desktop";
    }
  }
}
function trackUserProfileAction(dependencyMap) {
  let action;
  let analyticsLocations;
  let channelId;
  let communicationRank;
  let guildId;
  let length;
  let messageId;
  let obj4;
  let prop;
  let roleId;
  let section;
  let tmp9;
  let widgetType;
  const applicationId = dependencyMap.applicationId;
  ({ guildId, channelId, messageId, roleId, widgetType, analyticsLocations, action, section } = dependencyMap);
  const obj = {
    location_stack: analyticsLocations,
    profile_action: action,
    profile_section: section,
    source_message_id: messageId,
    source_role_id: roleId,
    widget_type: widgetType,
  };
  const track = AnalyticsUtilsDefault.track;
  const USER_PROFILE_ACTION = constants3.USER_PROFILE_ACTION;
  AnalyticsUtilsDefault;
  const obj2 = AppAnalyticsUtils;
  const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
  const obj3 = AppAnalyticsUtils;
  const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadataFromId(channelId));
  const merged2 = Object.assign(getTrackUserProfileProperties(dependencyMap));
  const userId = dependencyMap.userId;
  if (null == userId) {
    obj4 = {};
  } else {
    const userAffinity = UserAffinitiesV2Store.getUserAffinity(userId);
    obj4 = {
      related_user_id: userId,
      relationship_type: RelationshipStore.getRelationshipType(userId),
      related_since: RelationshipStore.getSince(userId),
      num_mutual_friends: UserProfileStore.getMutualFriendsCount(userId),
      num_mutual_guilds: length,
      communication_probability: prop,
      communication_rank: communicationRank,
    };
    const mutualGuilds = UserProfileStore.getMutualGuilds(userId);
    length = undefined;
    if (mutualGuilds != null) {
      length = mutualGuilds.length;
    }
    prop = undefined;
    if (userAffinity != null) {
      prop = userAffinity.communicationProbability;
    }
    communicationRank = undefined;
    if (userAffinity != null) {
      communicationRank = userAffinity.communicationRank;
    }
  }
  const merged3 = Object.assign(obj4);
  const obj5 = { application_id: applicationId, application_linked: tmp9 };
  tmp9 = null;
  if (null != applicationId) {
    tmp9 = null;
    if (AuthorizedAppsStore.getFetchStateForApplication(applicationId) === FetchState.FETCHED) {
      tmp9 = null != AuthorizedAppsStore.getNewestTokenForApplication(applicationId);
    }
  }
  const merged4 = Object.assign(obj5);
  track(USER_PROFILE_ACTION, obj);
}
const FetchState = AuthorizedAppsStore2.FetchState;
const constants = Constants3.TrackUserProfileProperties;
({ ActivityTypes: closure_14, AnalyticEvents: closure_15 } = Constants);
const StatusTypes = Constants2.StatusTypes;
let result = size.fileFinishedImporting("modules/user_profile/UserProfileAnalyticsUtils.tsx");

export { getProfileProperties };
export const getUserStatus = function getUserStatus(id) {
  let combined;
  const status = PresenceStore.getStatus(id);
  if (status === StatusTypes.ONLINE) {
    if (PresenceStore.isMobileOnline(id)) {
      const _HermesInternal2 = HermesInternal;
      combined = "" + status + "-mobile";
    }
    return combined;
  }
  combined = status;
  if (status === StatusTypes.ONLINE) {
    const _HermesInternal = HermesInternal;
    combined = "" + status + "-desktop";
  }
};
export const getActivityType = function getActivityType(arg0) {
  let tmp = arg0;
  if (null != arg0) {
    let str = "VOICE";
    if ("VOICE" !== arg0) {
      const _Object = Object;
      const _Object2 = Object;
      const keys = Object.keys(closure_14);
      const values = Object.values(closure_14);
      str = keys[values.indexOf(values, arg0)];
    }
    tmp = str;
  }
  return tmp;
};
export const getTrackUserRelationshipProperties = function getTrackUserRelationshipProperties(userId) {
  let communicationRank;
  let length;
  let prop;
  userId = userId.userId;
  if (null == userId) {
    return {};
  } else {
    const userAffinity = UserAffinitiesV2Store.getUserAffinity(userId);
    const obj = {
      related_user_id: userId,
      relationship_type: RelationshipStore.getRelationshipType(userId),
      related_since: RelationshipStore.getSince(userId),
      num_mutual_friends: UserProfileStore.getMutualFriendsCount(userId),
      num_mutual_guilds: length,
      communication_probability: prop,
      communication_rank: communicationRank,
    };
    const mutualGuilds = UserProfileStore.getMutualGuilds(userId);
    length = undefined;
    if (mutualGuilds != null) {
      length = mutualGuilds.length;
    }
    prop = undefined;
    if (userAffinity != null) {
      prop = userAffinity.communicationProbability;
    }
    communicationRank = undefined;
    if (userAffinity != null) {
      communicationRank = userAffinity.communicationRank;
    }
    return obj;
  }
};
export { trackUserProfileAction };
export const maybeTrackUserProfileUiViewed = function maybeTrackUserProfileUiViewed(userId) {
  let analyticsLocations;
  let channelId;
  let communicationRank;
  let fetchStartedAt;
  let guildId;
  let length;
  let profileUi;
  let prop;
  let timeToFetchMs;
  let timeToInteractiveMs;
  let timeToLoadMs;
  let viewStartedAt;
  const obj = UserProfilePerformanceAnalyticsExperiment;
  if (obj.isUserProfilePerformanceAnalyticsEnabled("UserProfileAnalyticsUtils")) {
    ({ timeToInteractiveMs, timeToLoadMs, timeToFetchMs } = userId);
    let num = timeToInteractiveMs;
    ({ guildId, channelId, analyticsLocations, profileUi, viewStartedAt, fetchStartedAt } = userId);
    if (timeToInteractiveMs == null) {
      num = 0;
    }
    let tmp5 = num <= 0;
    if (!tmp5) {
      let num3 = timeToLoadMs;
      if (timeToLoadMs == null) {
        num3 = 0;
      }
      tmp5 = num3 <= 0;
    }
    if (!tmp5) {
      let num4 = timeToFetchMs;
      if (timeToFetchMs == null) {
        num4 = 0;
      }
      tmp5 = num4 <= 0;
    }
    if (!tmp5) {
      let obj3;
      const obj2 = {
        location_stack: analyticsLocations,
        profile_ui: profileUi,
        view_started_at: viewStartedAt,
        fetch_started_at: fetchStartedAt,
        time_to_interactive_ms: timeToInteractiveMs,
        time_to_load_ms: timeToLoadMs,
        time_to_fetch_ms: timeToFetchMs,
      };
      const track = AnalyticsUtilsDefault.track;
      const USER_PROFILE_UI_VIEWED = constants3.USER_PROFILE_UI_VIEWED;
      AnalyticsUtilsDefault;
      const tmpResult = AppAnalyticsUtils;
      const merged = Object.assign(tmpResult.collectGuildAnalyticsMetadata(guildId));
      const tmpResult2 = AppAnalyticsUtils;
      const merged1 = Object.assign(tmpResult2.collectChannelAnalyticsMetadataFromId(channelId));
      const merged2 = Object.assign(getTrackUserProfileProperties(userId));
      userId = userId.userId;
      if (null == userId) {
        obj3 = {};
      } else {
        const userAffinity = UserAffinitiesV2Store.getUserAffinity(userId);
        obj3 = {
          related_user_id: userId,
          relationship_type: RelationshipStore.getRelationshipType(userId),
          related_since: RelationshipStore.getSince(userId),
          num_mutual_friends: UserProfileStore.getMutualFriendsCount(userId),
          num_mutual_guilds: length,
          communication_probability: prop,
          communication_rank: communicationRank,
        };
        const mutualGuilds = UserProfileStore.getMutualGuilds(userId);
        length = undefined;
        if (mutualGuilds != null) {
          length = mutualGuilds.length;
        }
        prop = undefined;
        if (userAffinity != null) {
          prop = userAffinity.communicationProbability;
        }
        communicationRank = undefined;
        if (userAffinity != null) {
          communicationRank = userAffinity.communicationRank;
        }
      }
      const merged3 = Object.assign(obj3);
      track(USER_PROFILE_UI_VIEWED, obj2);
    }
  }
};
export const trackUserProfileActivityJoined = function trackUserProfileActivityJoined(userId) {
  let activityName;
  let activityPlatform;
  let activitySessionId;
  let activityType;
  let analyticsLocations;
  let applicationId;
  let channelId;
  let communicationRank;
  let guildId;
  let length;
  let obj4;
  let prop;
  let str;
  let voiceChannelId;
  ({ activityType, voiceChannelId } = userId);
  ({ guildId, channelId, analyticsLocations, activityName, activityPlatform, activitySessionId, applicationId } =
    userId);
  const obj = {
    location_stack: analyticsLocations,
    activity_type: str,
    activity_name: activityName,
    activity_platform: activityPlatform,
    activity_session_id: activitySessionId,
    application_id: applicationId,
    voice_channel_id: voiceChannelId,
  };
  const track = AnalyticsUtilsDefault.track;
  const USER_PROFILE_ACTIVITY_JOINED = constants3.USER_PROFILE_ACTIVITY_JOINED;
  AnalyticsUtilsDefault;
  const obj2 = AppAnalyticsUtils;
  const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
  const obj3 = AppAnalyticsUtils;
  const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadataFromId(channelId));
  const merged2 = Object.assign(getTrackUserProfileProperties(userId));
  userId = userId.userId;
  if (null == userId) {
    obj4 = {};
  } else {
    const userAffinity = UserAffinitiesV2Store.getUserAffinity(userId);
    obj4 = {
      related_user_id: userId,
      relationship_type: RelationshipStore.getRelationshipType(userId),
      related_since: RelationshipStore.getSince(userId),
      num_mutual_friends: UserProfileStore.getMutualFriendsCount(userId),
      num_mutual_guilds: length,
      communication_probability: prop,
      communication_rank: communicationRank,
    };
    const mutualGuilds = UserProfileStore.getMutualGuilds(userId);
    length = undefined;
    if (mutualGuilds != null) {
      length = mutualGuilds.length;
    }
    prop = undefined;
    if (userAffinity != null) {
      prop = userAffinity.communicationProbability;
    }
    communicationRank = undefined;
    if (userAffinity != null) {
      communicationRank = userAffinity.communicationRank;
    }
  }
  const merged3 = Object.assign(obj4);
  str = "VOICE";
  if (null == voiceChannelId) {
    let tmp9 = activityType;
    if (null != activityType) {
      let str2 = "VOICE";
      if ("VOICE" !== activityType) {
        const _Object = Object;
        const _Object2 = Object;
        const keys = Object.keys(closure_14);
        const values = Object.values(closure_14);
        str2 = keys[values.indexOf(values, activityType)];
      }
      tmp9 = str2;
    }
    str = tmp9;
  }
  track(USER_PROFILE_ACTIVITY_JOINED, obj);
};
export const trackUserProfileActivityAction = function trackUserProfileActivityAction(userId) {
  let action;
  let activity;
  let analyticsLocations;
  let application_id;
  let author_id;
  let channelId;
  let communicationRank;
  let display;
  let entry;
  let guildId;
  let id;
  let length;
  let mapped;
  let mapped1;
  let name;
  let obj4;
  let outbox;
  let platform;
  let prop;
  let session_id;
  let stream;
  let tmp10;
  let type;
  let voiceChannelId;
  ({ activity, entry, outbox } = userId);
  ({ guildId, channelId, analyticsLocations, action, display, stream, voiceChannelId } = userId);
  const obj = {
    location_stack: analyticsLocations,
    activity_action: action,
    activity_display: display,
    activity_type: tmp10,
    activity_name: name,
    activity_platform: platform,
    activity_session_id: session_id,
    activity_application_id: application_id,
    item_id: id,
    author_id_v2: author_id,
    item_ids: mapped,
    author_ids_v2: mapped1,
    voice_channel_id: voiceChannelId,
  };
  const track = AnalyticsUtilsDefault.track;
  const USER_PROFILE_ACTIVITY_ACTION = constants3.USER_PROFILE_ACTIVITY_ACTION;
  AnalyticsUtilsDefault;
  const obj2 = AppAnalyticsUtils;
  const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
  const obj3 = AppAnalyticsUtils;
  const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadataFromId(channelId));
  const merged2 = Object.assign(getTrackUserProfileProperties(userId));
  userId = userId.userId;
  if (null == userId) {
    obj4 = {};
  } else {
    const userAffinity = UserAffinitiesV2Store.getUserAffinity(userId);
    obj4 = {
      related_user_id: userId,
      relationship_type: RelationshipStore.getRelationshipType(userId),
      related_since: RelationshipStore.getSince(userId),
      num_mutual_friends: UserProfileStore.getMutualFriendsCount(userId),
      num_mutual_guilds: length,
      communication_probability: prop,
      communication_rank: communicationRank,
    };
    const mutualGuilds = UserProfileStore.getMutualGuilds(userId);
    length = undefined;
    if (mutualGuilds != null) {
      length = mutualGuilds.length;
    }
    prop = undefined;
    if (userAffinity != null) {
      prop = userAffinity.communicationProbability;
    }
    communicationRank = undefined;
    if (userAffinity != null) {
      communicationRank = userAffinity.communicationRank;
    }
  }
  const merged3 = Object.assign(obj4);
  if (null != stream) {
    type = constants2.STREAMING;
  } else if (activity != null) {
    type = activity.type;
  }
  tmp10 = type;
  if (null != type) {
    let str = "VOICE";
    if ("VOICE" !== type) {
      const _Object = Object;
      const _Object2 = Object;
      const keys = Object.keys(constants2);
      const values = Object.values(constants2);
      str = keys[values.indexOf(values, type)];
    }
    tmp10 = str;
  }
  name = undefined;
  if (activity != null) {
    name = activity.name;
  }
  platform = undefined;
  if (activity != null) {
    platform = activity.platform;
  }
  session_id = undefined;
  if (activity != null) {
    session_id = activity.session_id;
  }
  application_id = undefined;
  if (activity != null) {
    application_id = activity.application_id;
  }
  id = undefined;
  if (entry != null) {
    id = entry.id;
  }
  author_id = undefined;
  if (entry != null) {
    author_id = entry.author_id;
  }
  mapped = undefined;
  if (outbox != null) {
    const entries = outbox.entries;
    mapped = entries.map((id) => id.id);
  }
  mapped1 = undefined;
  if (outbox != null) {
    const entries1 = outbox.entries;
    mapped1 = entries1.map((author_id) => author_id.author_id);
  }
  track(USER_PROFILE_ACTIVITY_ACTION, obj);
};
export const trackUserProfileBadgeAction = function trackUserProfileBadgeAction(userId) {
  let analyticsLocations;
  let badgeAction;
  let badgeId;
  let channelId;
  let communicationRank;
  let guildId;
  let length;
  let obj4;
  let position;
  let prop;
  ({ badgeId, userId } = userId);
  let tmp;
  ({ guildId, channelId, analyticsLocations, badgeAction, position } = userId);
  if (null != badgeId) {
    if (null != userId) {
      const badgeById = BadgeDirectoryStore.getBadgeById(badgeId, userId);
      let current_tier;
      if (badgeById != null) {
        current_tier = badgeById.current_tier;
      }
      tmp = current_tier;
    }
  }
  const obj = {
    location_stack: analyticsLocations,
    badge_action: badgeAction,
    badge_id: badgeId,
    badge_tier: tmp,
    position,
  };
  const track = AnalyticsUtilsDefault.track;
  const USER_PROFILE_BADGE_ACTION = constants3.USER_PROFILE_BADGE_ACTION;
  AnalyticsUtilsDefault;
  const obj2 = AppAnalyticsUtils;
  const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
  const obj3 = AppAnalyticsUtils;
  const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadataFromId(channelId));
  const merged2 = Object.assign(getTrackUserProfileProperties(userId));
  const userId2 = userId.userId;
  if (null == userId2) {
    obj4 = {};
  } else {
    const userAffinity = UserAffinitiesV2Store.getUserAffinity(userId2);
    obj4 = {
      related_user_id: userId2,
      relationship_type: RelationshipStore.getRelationshipType(userId2),
      related_since: RelationshipStore.getSince(userId2),
      num_mutual_friends: UserProfileStore.getMutualFriendsCount(userId2),
      num_mutual_guilds: length,
      communication_probability: prop,
      communication_rank: communicationRank,
    };
    const mutualGuilds = UserProfileStore.getMutualGuilds(userId2);
    length = undefined;
    if (mutualGuilds != null) {
      length = mutualGuilds.length;
    }
    prop = undefined;
    if (userAffinity != null) {
      prop = userAffinity.communicationProbability;
    }
    communicationRank = undefined;
    if (userAffinity != null) {
      communicationRank = userAffinity.communicationRank;
    }
  }
  const merged3 = Object.assign(obj4);
  track(USER_PROFILE_BADGE_ACTION, obj);
};
export const trackDmProfileToggled = function trackDmProfileToggled(displayProfile) {
  let _Boolean;
  let hasThemeColorsResult;
  let large_image;
  let prop;
  let result;
  displayProfile = displayProfile.displayProfile;
  let userId;
  const isProfileOpen = displayProfile.isProfileOpen;
  if (displayProfile != null) {
    userId = displayProfile.userId;
  }
  let findActivityResult = null;
  if (null != userId) {
    findActivityResult = PresenceStore.findActivity(userId, (type) => {
      let tmp2;
      type = type.type;
      if (null != ApplicationStreamingStore.getAnyStreamForUser(userId)) {
        tmp2 = type === constants.PLAYING;
      } else {
        tmp2 = type !== constants.CUSTOM_STATUS;
      }
      return tmp2;
    });
  }
  const obj = {
    is_profile_open: isProfileOpen,
    has_images: _Boolean(large_image),
    is_friend: RelationshipStore.isFriend(userId),
    viewed_profile_user_id: userId,
    profile_has_nitro_customization: result,
    profile_has_theme_color_customized: hasThemeColorsResult,
    profile_has_theme_animation: null != prop,
  };
  const track = AnalyticsUtilsDefault.track;
  const DM_PROFILE_TOGGLED = constants3.DM_PROFILE_TOGGLED;
  AnalyticsUtilsDefault;
  const merged = Object.assign(getTrackUserProfileProperties({ userId }));
  large_image = undefined;
  _Boolean = Boolean;
  if (findActivityResult != null) {
    const assets = findActivityResult.assets;
    if (assets != null) {
      large_image = assets.large_image;
    }
  }
  if (large_image == null) {
    let small_image;
    if (findActivityResult != null) {
      const assets2 = findActivityResult.assets;
      if (assets2 != null) {
        small_image = assets2.small_image;
      }
    }
    large_image = small_image;
  }
  result = undefined;
  if (displayProfile != null) {
    result = displayProfile.hasPremiumCustomization();
  }
  hasThemeColorsResult = undefined;
  if (displayProfile != null) {
    hasThemeColorsResult = displayProfile.hasThemeColors();
  }
  prop = undefined;
  if (displayProfile != null) {
    prop = displayProfile.popoutAnimationParticleType;
  }
  track(DM_PROFILE_TOGGLED, obj);
};
export const trackUserProfileEditAction = function trackUserProfileEditAction(dependencyMap) {
  let action;
  let analyticsLocations;
  let applicationId;
  let channelId;
  let gameId;
  let guildId;
  let numCharacters;
  let numResults;
  let tmp7;
  let widgetEdited;
  ({ action, applicationId } = dependencyMap);
  const obj = { action };
  ({ guildId, channelId, analyticsLocations, widgetEdited, gameId, numResults, numCharacters } = dependencyMap);
  const merged = Object.assign(dependencyMap);
  trackUserProfileAction(obj);
  const obj2 = {
    location_stack: analyticsLocations,
    edit_action: action,
    widget_edited: widgetEdited,
    game_id: gameId,
    num_results: numResults,
    num_characters: numCharacters,
    application_id: applicationId,
  };
  const track = AnalyticsUtilsDefault.track;
  const USER_PROFILE_EDIT_ACTION = constants3.USER_PROFILE_EDIT_ACTION;
  AnalyticsUtilsDefault;
  const obj3 = AppAnalyticsUtils;
  const merged1 = Object.assign(obj3.collectGuildAnalyticsMetadata(guildId));
  const obj4 = AppAnalyticsUtils;
  const merged2 = Object.assign(obj4.collectChannelAnalyticsMetadataFromId(channelId));
  const merged3 = Object.assign(getTrackUserProfileProperties(dependencyMap));
  const obj5 = { application_id: applicationId, application_linked: tmp7 };
  tmp7 = null;
  if (null != applicationId) {
    tmp7 = null;
    if (AuthorizedAppsStore.getFetchStateForApplication(applicationId) === FetchState.FETCHED) {
      tmp7 = null != AuthorizedAppsStore.getNewestTokenForApplication(applicationId);
    }
  }
  const merged4 = Object.assign(obj5);
  track(USER_PROFILE_EDIT_ACTION, obj2);
};
export const trackUserProfileEditSaved = function trackUserProfileEditSaved(dependencyMap) {
  let analyticsLocations;
  let channelId;
  let gameIds;
  let guildId;
  let isWidgetRemoved;
  let numCharactersCommentary;
  let tags;
  let widgetEdited;
  const obj = { action: "EDIT_SAVED" };
  ({ guildId, channelId, analyticsLocations, widgetEdited, gameIds, tags, numCharactersCommentary, isWidgetRemoved } =
    dependencyMap);
  const merged = Object.assign(dependencyMap);
  trackUserProfileAction(obj);
  const obj2 = {
    location_stack: analyticsLocations,
    widget_edited: widgetEdited,
    game_ids: gameIds,
    tags,
    num_characters_commentary: numCharactersCommentary,
    is_widget_removed: isWidgetRemoved,
  };
  const track = AnalyticsUtilsDefault.track;
  const USER_PROFILE_EDIT_SAVED = constants3.USER_PROFILE_EDIT_SAVED;
  AnalyticsUtilsDefault;
  const obj3 = AppAnalyticsUtils;
  const merged1 = Object.assign(obj3.collectGuildAnalyticsMetadata(guildId));
  const obj4 = AppAnalyticsUtils;
  const merged2 = Object.assign(obj4.collectChannelAnalyticsMetadataFromId(channelId));
  const merged3 = Object.assign(getTrackUserProfileProperties(dependencyMap));
  track(USER_PROFILE_EDIT_SAVED, obj2);
};
export const trackUserProfileWishlistAction = function trackUserProfileWishlistAction(dependencyMap) {
  let action;
  let analyticsLocations;
  let channelId;
  let guildId;
  let items;
  let productLines;
  let skuId;
  let wishlistId;
  ({ action, productLines } = dependencyMap);
  const obj = { action };
  ({ guildId, channelId, analyticsLocations, wishlistId, skuId } = dependencyMap);
  const merged = Object.assign(dependencyMap);
  trackUserProfileAction(obj);
  const obj2 = {
    location_stack: analyticsLocations,
    action_type: action,
    wishlist_id: wishlistId,
    sku_id: skuId,
    product_lines: items,
  };
  const track = AnalyticsUtilsDefault.track;
  const USER_PROFILE_WISHLIST_ACTION = constants3.USER_PROFILE_WISHLIST_ACTION;
  AnalyticsUtilsDefault;
  const obj3 = AppAnalyticsUtils;
  const merged1 = Object.assign(obj3.collectGuildAnalyticsMetadata(guildId));
  const obj4 = AppAnalyticsUtils;
  const merged2 = Object.assign(obj4.collectChannelAnalyticsMetadataFromId(channelId));
  const merged3 = Object.assign(getTrackUserProfileProperties(dependencyMap));
  if (null != productLines) {
    const _Array = Array;
    items = Array.from(productLines);
  } else {
    items = [];
  }
  track(USER_PROFILE_WISHLIST_ACTION, obj2);
};
