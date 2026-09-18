// discord_app/modules/user_profile/UserProfileAnalyticsUtils.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import AvatarUtils from "../../utils/AvatarUtils.tsx";
import AppAnalyticsUtils from "../app_analytics/AppAnalyticsUtils.tsx";
import useDisplayProfile from "hooks/useDisplayProfile.tsx";
import UserProfilePerformanceAnalyticsExperiment from "experiments/UserProfilePerformanceAnalyticsExperiment.tsx";
import BadgeDirectoryStore from "../badges/BadgeDirectoryStore.tsx";
import AuthorizedAppsStore from "../oauth2/AuthorizedAppsStore.tsx";
import UserAffinitiesV2Store from "../user_affinities/UserAffinitiesV2Store.tsx";
import ApplicationStreamingStore from "../../stores/ApplicationStreamingStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import PresenceStore from "../../stores/PresenceStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import UserProfileStore from "UserProfileStore.tsx";

require = fn;
function getProfileProperties(guildMemberProfile) {
  ({ user, userProfile, guildMember } = guildMemberProfile);
  if (userProfile == null) {
    userProfile = guildMemberProfile.guildMemberProfile;
  }
  let nick;
  if (guildMember != null) {
    nick = guildMember.nick;
  }
  const items = [];
  if (Boolean(nick)) {
    items.push(constants.NICKNAME);
  }
  let pronouns;
  if (userProfile != null) {
    pronouns = userProfile.pronouns;
  }
  if (Boolean(pronouns)) {
    items.push(constants.PRONOUNS);
  }
  let avatar;
  if (user != null) {
    avatar = user.avatar;
  }
  if (!Boolean(avatar)) {
    let banner;
    if (userProfile != null) {
      banner = userProfile.banner;
    }
    if (!Boolean(banner)) {
      let bio;
      if (userProfile != null) {
        bio = userProfile.bio;
      }
      if (Boolean(bio)) {
        items.push(constants.BIO);
      }
      let themeColors;
      if (userProfile != null) {
        themeColors = userProfile.themeColors;
      }
      let tmp23 = null != themeColors;
      if (tmp23) {
        const themeColors1 = userProfile.themeColors;
        tmp23 = undefined !== themeColors1.find((item) => null !== item);
      }
      if (tmp23) {
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
    } else {
      let banner1;
      if (userProfile != null) {
        banner1 = userProfile.banner;
      }
      items.push(AvatarUtils.isAnimatedIconHash(banner1) ? constants.ANIMATED_BANNER : constants.BANNER);
    }
  } else {
    let avatar1;
    if (user != null) {
      avatar1 = user.avatar;
    }
    items.push(AvatarUtils.isAnimatedIconHash(avatar1) ? constants.ANIMATED_AVATAR : constants.AVATAR);
  }
}
function getTrackUserProfileProperties(dependencyMap) {
  ({ guildId, showGuildProfile } = dependencyMap);
  ({ layout, userId, sessionId, sourceSessionId } = dependencyMap);
  if (showGuildProfile === undefined) {
    showGuildProfile = true;
  }
  const user = UserStore.getUser(userId);
  if (null == user) {
    return {};
  } else {
    let id1;
    if (user != null) {
      id1 = user.id;
    }
    let tmp3;
    if (showGuildProfile) {
      tmp3 = guildId;
    }
    const displayProfile = useDisplayProfile.getDisplayProfile(id1, tmp3);
    let member = null;
    if (showGuildProfile) {
      member = null;
      if (null != guildId) {
        let id2;
        if (user != null) {
          id2 = user.id;
        }
        member = GuildMemberStore.getMember(guildId, id2);
      }
    }
    const obj = {
      profile_layout: layout,
      profile_session_id: sessionId,
      source_profile_session_id: sourceSessionId,
      profile_properties: null,
      guild_profile_properties: null,
      profile_activity_types: null,
      profile_badges: null,
      avatar_decoration_sku_id: null,
      profile_effect_sku_id: null,
      profile_frame_sku_id: null,
      user_status: null,
      is_guild_profile: null,
      is_bot_profile: null,
      is_private_to_viewer: null,
    };
    const obj2 = { user, userProfile: null };
    let _userProfile;
    if (displayProfile != null) {
      _userProfile = displayProfile._userProfile;
    }
    obj2.userProfile = _userProfile;
    obj.profile_properties = getProfileProperties(obj2);
    const obj3 = { guildMember: member, guildMemberProfile: null };
    let _guildMemberProfile;
    if (displayProfile != null) {
      _guildMemberProfile = displayProfile._guildMemberProfile;
    }
    obj3.guildMemberProfile = _guildMemberProfile;
    obj.guild_profile_properties = getProfileProperties(obj3);
    const activities = PresenceStore.getActivities(user.id);
    const mapped = activities.map((type) => type.type);
    obj.profile_activity_types = mapped.filter((item) => undefined !== item);
    let found;
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
    obj.profile_badges = found;
    const avatarDecoration = user.avatarDecoration;
    let skuId;
    if (avatarDecoration != null) {
      skuId = avatarDecoration.skuId;
    }
    obj.avatar_decoration_sku_id = skuId;
    let skuId1;
    if (displayProfile != null) {
      const profileEffect = displayProfile.profileEffect;
      if (profileEffect != null) {
        skuId1 = profileEffect.skuId;
      }
    }
    obj.profile_effect_sku_id = skuId1;
    let skuId2;
    if (displayProfile != null) {
      const profileFrame = displayProfile.profileFrame;
      if (profileFrame != null) {
        skuId2 = profileFrame.skuId;
      }
    }
    obj.profile_frame_sku_id = skuId2;
    const id = user.id;
    const status = PresenceStore.getStatus(id);
    if (status === StatusTypes.ONLINE) {
      if (PresenceStore.isMobileOnline(id)) {
        const _HermesInternal2 = HermesInternal;
        let combined = "" + status + "-mobile";
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
  const applicationId = dependencyMap.applicationId;
  ({ guildId, channelId, messageId, roleId, widgetType, analyticsLocations, action, section } = dependencyMap);
  const obj2 = {};
  const obj = AnalyticsUtilsDefault;
  const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
  const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadataFromId(channelId));
  const merged2 = Object.assign(getTrackUserProfileProperties(dependencyMap));
  const userId = dependencyMap.userId;
  if (null == userId) {
    let obj5 = {};
  } else {
    const userAffinity = UserAffinitiesV2Store.getUserAffinity(userId);
    obj5 = {
      related_user_id: userId,
      relationship_type: RelationshipStore.getRelationshipType(userId),
      related_since: RelationshipStore.getSince(userId),
      num_mutual_friends: UserProfileStore.getMutualFriendsCount(userId),
      num_mutual_guilds: null,
      communication_probability: null,
      communication_rank: null,
    };
    const mutualGuilds = UserProfileStore.getMutualGuilds(userId);
    let length;
    if (mutualGuilds != null) {
      length = mutualGuilds.length;
    }
    obj5.num_mutual_guilds = length;
    let prop;
    if (userAffinity != null) {
      prop = userAffinity.communicationProbability;
    }
    obj5.communication_probability = prop;
    let communicationRank;
    if (userAffinity != null) {
      communicationRank = userAffinity.communicationRank;
    }
    obj5.communication_rank = communicationRank;
  }
  const merged3 = Object.assign(obj5);
  const obj6 = { application_id: applicationId, application_linked: null };
  let tmp8 = null;
  if (null != applicationId) {
    tmp8 = null;
    if (AuthorizedAppsStore.getFetchStateForApplication(applicationId) === FetchState.FETCHED) {
      tmp8 = null != AuthorizedAppsStore.getNewestTokenForApplication(applicationId);
    }
  }
  obj6.application_linked = tmp8;
  const merged4 = Object.assign(obj6);
  obj2.location_stack = analyticsLocations;
  obj2.profile_action = action;
  obj2.profile_section = section;
  obj2.source_message_id = messageId;
  obj2.source_role_id = roleId;
  obj2.widget_type = widgetType;
  obj.track(constants3.USER_PROFILE_ACTION, obj2);
}
const FetchState = fn(7303).FetchState;
const constants = fn(8413).TrackUserProfileProperties;
const Constants = fn(1074);
({ ActivityTypes: closure_14, AnalyticEvents: closure_15 } = Constants);
const StatusTypes = fn(1085).StatusTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/UserProfileAnalyticsUtils.tsx");

export { getProfileProperties };
export const getUserStatus = function getUserStatus(id) {
  const status = PresenceStore.getStatus(id);
  if (status === StatusTypes.ONLINE) {
    if (PresenceStore.isMobileOnline(id)) {
      const _HermesInternal2 = HermesInternal;
      let combined = "" + status + "-mobile";
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
      const keys = Object.keys(constants2);
      const values = Object.values(constants2);
      str = keys[values.indexOf(values, arg0)];
    }
    tmp = str;
  }
  return tmp;
};
export const getTrackUserRelationshipProperties = function getTrackUserRelationshipProperties(userId) {
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
      num_mutual_guilds: null,
      communication_probability: null,
      communication_rank: null,
    };
    const mutualGuilds = UserProfileStore.getMutualGuilds(userId);
    let length;
    if (mutualGuilds != null) {
      length = mutualGuilds.length;
    }
    obj.num_mutual_guilds = length;
    let prop;
    if (userAffinity != null) {
      prop = userAffinity.communicationProbability;
    }
    obj.communication_probability = prop;
    let communicationRank;
    if (userAffinity != null) {
      communicationRank = userAffinity.communicationRank;
    }
    obj.communication_rank = communicationRank;
    return obj;
  }
};
export { trackUserProfileAction };
export const maybeTrackUserProfileUiViewed = function maybeTrackUserProfileUiViewed(userId) {
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
      let obj3 = {};
      const obj2 = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
      const tmpResult = AppAnalyticsUtils;
      const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadataFromId(channelId));
      const merged2 = Object.assign(getTrackUserProfileProperties(userId));
      userId = userId.userId;
      if (null == userId) {
        let obj4 = {};
      } else {
        const userAffinity = UserAffinitiesV2Store.getUserAffinity(userId);
        obj4 = {
          related_user_id: userId,
          relationship_type: RelationshipStore.getRelationshipType(userId),
          related_since: RelationshipStore.getSince(userId),
          num_mutual_friends: UserProfileStore.getMutualFriendsCount(userId),
          num_mutual_guilds: null,
          communication_probability: null,
          communication_rank: null,
        };
        const mutualGuilds = UserProfileStore.getMutualGuilds(userId);
        let length;
        if (mutualGuilds != null) {
          length = mutualGuilds.length;
        }
        obj4.num_mutual_guilds = length;
        let prop;
        if (userAffinity != null) {
          prop = userAffinity.communicationProbability;
        }
        obj4.communication_probability = prop;
        let communicationRank;
        if (userAffinity != null) {
          communicationRank = userAffinity.communicationRank;
        }
        obj4.communication_rank = communicationRank;
      }
      const merged3 = Object.assign(obj4);
      obj3.location_stack = analyticsLocations;
      obj3.profile_ui = profileUi;
      obj3.view_started_at = viewStartedAt;
      obj3.fetch_started_at = fetchStartedAt;
      obj3.time_to_interactive_ms = timeToInteractiveMs;
      obj3.time_to_load_ms = timeToLoadMs;
      obj3.time_to_fetch_ms = timeToFetchMs;
      obj3 = obj2.track(constants3.USER_PROFILE_UI_VIEWED, obj3);
      const tmpResult2 = AppAnalyticsUtils;
    }
  }
  obj = UserProfilePerformanceAnalyticsExperiment;
};
export const trackUserProfileActivityJoined = function trackUserProfileActivityJoined(userId) {
  ({ activityType, voiceChannelId } = userId);
  ({ guildId, channelId, analyticsLocations, activityName, activityPlatform, activitySessionId, applicationId } =
    userId);
  const obj2 = {};
  const obj = AnalyticsUtilsDefault;
  const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
  const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadataFromId(channelId));
  const merged2 = Object.assign(getTrackUserProfileProperties(userId));
  userId = userId.userId;
  if (null == userId) {
    let obj5 = {};
  } else {
    const userAffinity = UserAffinitiesV2Store.getUserAffinity(userId);
    obj5 = {
      related_user_id: userId,
      relationship_type: RelationshipStore.getRelationshipType(userId),
      related_since: RelationshipStore.getSince(userId),
      num_mutual_friends: UserProfileStore.getMutualFriendsCount(userId),
      num_mutual_guilds: null,
      communication_probability: null,
      communication_rank: null,
    };
    const mutualGuilds = UserProfileStore.getMutualGuilds(userId);
    let length;
    if (mutualGuilds != null) {
      length = mutualGuilds.length;
    }
    obj5.num_mutual_guilds = length;
    let prop;
    if (userAffinity != null) {
      prop = userAffinity.communicationProbability;
    }
    obj5.communication_probability = prop;
    let communicationRank;
    if (userAffinity != null) {
      communicationRank = userAffinity.communicationRank;
    }
    obj5.communication_rank = communicationRank;
  }
  const merged3 = Object.assign(obj5);
  obj2.location_stack = analyticsLocations;
  let str = "VOICE";
  if (null == voiceChannelId) {
    let tmp8 = activityType;
    if (null != activityType) {
      let str2 = "VOICE";
      if ("VOICE" !== activityType) {
        const _Object = Object;
        const _Object2 = Object;
        const keys = Object.keys(constants2);
        const values = Object.values(constants2);
        str2 = keys[values.indexOf(values, activityType)];
      }
      tmp8 = str2;
    }
    str = tmp8;
  }
  obj2.activity_type = str;
  obj2.activity_name = activityName;
  obj2.activity_platform = activityPlatform;
  obj2.activity_session_id = activitySessionId;
  obj2.application_id = applicationId;
  obj2.voice_channel_id = voiceChannelId;
  obj.track(constants3.USER_PROFILE_ACTIVITY_JOINED, obj2);
};
export const trackUserProfileActivityAction = function trackUserProfileActivityAction(userId) {
  ({ activity, entry, outbox } = userId);
  ({ guildId, channelId, analyticsLocations, action, display, stream, voiceChannelId } = userId);
  const obj2 = {};
  const obj = AnalyticsUtilsDefault;
  const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
  const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadataFromId(channelId));
  const merged2 = Object.assign(getTrackUserProfileProperties(userId));
  userId = userId.userId;
  if (null == userId) {
    let obj5 = {};
  } else {
    const userAffinity = UserAffinitiesV2Store.getUserAffinity(userId);
    obj5 = {
      related_user_id: userId,
      relationship_type: RelationshipStore.getRelationshipType(userId),
      related_since: RelationshipStore.getSince(userId),
      num_mutual_friends: UserProfileStore.getMutualFriendsCount(userId),
      num_mutual_guilds: null,
      communication_probability: null,
      communication_rank: null,
    };
    const mutualGuilds = UserProfileStore.getMutualGuilds(userId);
    let length;
    if (mutualGuilds != null) {
      length = mutualGuilds.length;
    }
    obj5.num_mutual_guilds = length;
    let prop;
    if (userAffinity != null) {
      prop = userAffinity.communicationProbability;
    }
    obj5.communication_probability = prop;
    let communicationRank;
    if (userAffinity != null) {
      communicationRank = userAffinity.communicationRank;
    }
    obj5.communication_rank = communicationRank;
  }
  const merged3 = Object.assign(obj5);
  obj2.location_stack = analyticsLocations;
  obj2.activity_action = action;
  obj2.activity_display = display;
  if (null != stream) {
    let type = constants2.STREAMING;
  } else if (activity != null) {
    type = activity.type;
  }
  let tmp9 = type;
  if (null != type) {
    let str = "VOICE";
    if ("VOICE" !== type) {
      const _Object = Object;
      const _Object2 = Object;
      const keys = Object.keys(constants2);
      const values = Object.values(constants2);
      str = keys[values.indexOf(values, type)];
    }
    tmp9 = str;
  }
  obj2.activity_type = tmp9;
  let name;
  if (activity != null) {
    name = activity.name;
  }
  obj2.activity_name = name;
  let platform;
  if (activity != null) {
    platform = activity.platform;
  }
  obj2.activity_platform = platform;
  let session_id;
  if (activity != null) {
    session_id = activity.session_id;
  }
  obj2.activity_session_id = session_id;
  let application_id;
  if (activity != null) {
    application_id = activity.application_id;
  }
  obj2.activity_application_id = application_id;
  let id;
  if (entry != null) {
    id = entry.id;
  }
  obj2.item_id = id;
  let author_id;
  if (entry != null) {
    author_id = entry.author_id;
  }
  obj2.author_id_v2 = author_id;
  let mapped;
  if (outbox != null) {
    const entries = outbox.entries;
    mapped = entries.map((id) => id.id);
  }
  obj2.item_ids = mapped;
  let mapped1;
  if (outbox != null) {
    const entries1 = outbox.entries;
    mapped1 = entries1.map((author_id) => author_id.author_id);
  }
  obj2.author_ids_v2 = mapped1;
  obj2.voice_channel_id = voiceChannelId;
  obj.track(constants3.USER_PROFILE_ACTIVITY_ACTION, obj2);
};
export const trackUserProfileBadgeAction = function trackUserProfileBadgeAction(userId) {
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
  const obj2 = {};
  const obj = AnalyticsUtilsDefault;
  const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
  const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadataFromId(channelId));
  const merged2 = Object.assign(getTrackUserProfileProperties(userId));
  const userId2 = userId.userId;
  if (null == userId2) {
    let obj5 = {};
  } else {
    const userAffinity = UserAffinitiesV2Store.getUserAffinity(userId2);
    obj5 = {
      related_user_id: userId2,
      relationship_type: RelationshipStore.getRelationshipType(userId2),
      related_since: RelationshipStore.getSince(userId2),
      num_mutual_friends: UserProfileStore.getMutualFriendsCount(userId2),
      num_mutual_guilds: null,
      communication_probability: null,
      communication_rank: null,
    };
    const mutualGuilds = UserProfileStore.getMutualGuilds(userId2);
    let length;
    if (mutualGuilds != null) {
      length = mutualGuilds.length;
    }
    obj5.num_mutual_guilds = length;
    let prop;
    if (userAffinity != null) {
      prop = userAffinity.communicationProbability;
    }
    obj5.communication_probability = prop;
    let communicationRank;
    if (userAffinity != null) {
      communicationRank = userAffinity.communicationRank;
    }
    obj5.communication_rank = communicationRank;
  }
  const merged3 = Object.assign(obj5);
  obj2.location_stack = analyticsLocations;
  obj2.badge_action = badgeAction;
  obj2.badge_id = badgeId;
  obj2.badge_tier = tmp;
  obj2.position = position;
  obj.track(constants3.USER_PROFILE_BADGE_ACTION, obj2);
};
export const trackDmProfileToggled = function trackDmProfileToggled(displayProfile) {
  displayProfile = displayProfile.displayProfile;
  let userId;
  if (displayProfile != null) {
    userId = displayProfile.userId;
  }
  let findActivityResult = null;
  if (null != userId) {
    findActivityResult = PresenceStore.findActivity(userId, (type) => {
      type = type.type;
      if (null != ApplicationStreamingStore.getAnyStreamForUser(userId)) {
        let tmp2 = type === constants2.PLAYING;
      } else {
        tmp2 = type !== constants2.CUSTOM_STATUS;
      }
      return tmp2;
    });
  }
  const obj2 = {};
  const merged = Object.assign(getTrackUserProfileProperties({ userId }));
  obj2.is_profile_open = displayProfile.isProfileOpen;
  let large_image;
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
  obj2.has_images = Boolean(large_image);
  obj2.is_friend = RelationshipStore.isFriend(userId);
  obj2.viewed_profile_user_id = userId;
  let result;
  if (displayProfile != null) {
    result = displayProfile.hasPremiumCustomization();
  }
  obj2.profile_has_nitro_customization = result;
  let hasThemeColorsResult;
  if (displayProfile != null) {
    hasThemeColorsResult = displayProfile.hasThemeColors();
  }
  obj2.profile_has_theme_color_customized = hasThemeColorsResult;
  let prop;
  if (displayProfile != null) {
    prop = displayProfile.popoutAnimationParticleType;
  }
  obj2.profile_has_theme_animation = null != prop;
  AnalyticsUtilsDefault.track(constants3.DM_PROFILE_TOGGLED, obj2);
};
export const trackUserProfileEditAction = function trackUserProfileEditAction(dependencyMap) {
  ({ action, applicationId } = dependencyMap);
  const obj = {};
  ({ guildId, channelId, analyticsLocations, widgetEdited, gameId, numResults, numCharacters } = dependencyMap);
  const merged = Object.assign(dependencyMap);
  obj.action = action;
  trackUserProfileAction(obj);
  const obj3 = {};
  const obj2 = AnalyticsUtilsDefault;
  const merged1 = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
  const merged2 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadataFromId(channelId));
  const merged3 = Object.assign(getTrackUserProfileProperties(dependencyMap));
  const obj6 = { application_id: applicationId, application_linked: null };
  let tmp6 = null;
  if (null != applicationId) {
    tmp6 = null;
    if (AuthorizedAppsStore.getFetchStateForApplication(applicationId) === FetchState.FETCHED) {
      tmp6 = null != AuthorizedAppsStore.getNewestTokenForApplication(applicationId);
    }
  }
  obj6.application_linked = tmp6;
  const merged4 = Object.assign(obj6);
  obj3.location_stack = analyticsLocations;
  obj3.edit_action = action;
  obj3.widget_edited = widgetEdited;
  obj3.game_id = gameId;
  obj3.num_results = numResults;
  obj3.num_characters = numCharacters;
  obj3.application_id = applicationId;
  obj2.track(constants3.USER_PROFILE_EDIT_ACTION, obj3);
};
export const trackUserProfileEditSaved = function trackUserProfileEditSaved(dependencyMap) {
  const obj = {};
  ({ guildId, channelId, analyticsLocations, widgetEdited, gameIds, tags, numCharactersCommentary, isWidgetRemoved } =
    dependencyMap);
  const merged = Object.assign(dependencyMap);
  obj.action = "EDIT_SAVED";
  trackUserProfileAction(obj);
  const obj3 = {};
  const obj2 = AnalyticsUtilsDefault;
  const merged1 = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
  const merged2 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadataFromId(channelId));
  const merged3 = Object.assign(getTrackUserProfileProperties(dependencyMap));
  obj3.location_stack = analyticsLocations;
  obj3.widget_edited = widgetEdited;
  obj3.game_ids = gameIds;
  obj3.tags = tags;
  obj3.num_characters_commentary = numCharactersCommentary;
  obj3.is_widget_removed = isWidgetRemoved;
  obj2.track(constants3.USER_PROFILE_EDIT_SAVED, obj3);
};
export const trackUserProfileWishlistAction = function trackUserProfileWishlistAction(dependencyMap) {
  ({ action, productLines } = dependencyMap);
  const obj = {};
  ({ guildId, channelId, analyticsLocations, wishlistId, skuId } = dependencyMap);
  const merged = Object.assign(dependencyMap);
  obj.action = action;
  trackUserProfileAction(obj);
  const obj3 = {};
  const obj2 = AnalyticsUtilsDefault;
  const merged1 = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
  const merged2 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadataFromId(channelId));
  const merged3 = Object.assign(getTrackUserProfileProperties(dependencyMap));
  obj3.location_stack = analyticsLocations;
  obj3.action_type = action;
  obj3.wishlist_id = wishlistId;
  obj3.sku_id = skuId;
  if (null != productLines) {
    const _Array = Array;
    let items = Array.from(productLines);
  } else {
    items = [];
  }
  obj3.product_lines = items;
  obj2.track(constants3.USER_PROFILE_WISHLIST_ACTION, obj3);
};
