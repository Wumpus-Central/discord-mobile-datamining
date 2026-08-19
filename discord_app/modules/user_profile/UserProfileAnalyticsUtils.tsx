// === Module 8935: getProfileProperties ===

// Module 8935 (getProfileProperties)
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import getAvatarURL from "getAvatarURL" /* 1435 */;
import collectGuildAnalyticsMetadata from "collectGuildAnalyticsMetadata" /* 5042 */;
import useDisplayProfile from "useDisplayProfile" /* 8416 */;
import isUserProfilePerformanceAnalyticsEnabled from "isUserProfilePerformanceAnalyticsEnabled" /* 8940 */;
import initialize from "initialize" /* 8936 */;
import recomputeFromAppTokens from "recomputeFromAppTokens" /* 5289 */;
import { FetchState } from "recomputeFromAppTokens" /* 5289 */;
import recomputeAffinities from "recomputeAffinities" /* 5407 */;
import reset from "reset" /* 4652 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import sortActivity from "sortActivity" /* 4559 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import createUserWidgetFromServer from "createUserWidgetFromServer" /* 5365 */;
import { TrackUserProfileProperties as closure_13 } from "USER_PROFILE_TOOLTIP_DELAY" /* 8931 */;
import ME from "ME" /* 676 */;
import { StatusTypes } from "sum" /* 505 */;

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
        tmp23 = undefined !== themeColors1.find((item, index) => null !== item);
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
      items.push(getAvatarURL.isAnimatedIconHash(banner1) ? constants.ANIMATED_BANNER : constants.BANNER);
    }
  } else {
    let avatar1;
    if (user != null) {
      avatar1 = user.avatar;
    }
    items.push(getAvatarURL.isAnimatedIconHash(avatar1) ? constants.ANIMATED_AVATAR : constants.AVATAR);
  }
}
function getTrackUserProfileProperties(dependencyMap) {
  ({ guildId, showGuildProfile } = dependencyMap);
  ({ layout, userId, sessionId, sourceSessionId } = dependencyMap);
  if (showGuildProfile === undefined) {
    showGuildProfile = true;
  }
  user = user.getUser(userId);
  if (null == user) {
    return {};
  } else {
    let id;
    if (user != null) {
      id = user.id;
    }
    let tmp3;
    if (showGuildProfile) {
      tmp3 = guildId;
    }
    const displayProfile = useDisplayProfile.getDisplayProfile(id, tmp3);
    let member = null;
    if (showGuildProfile) {
      member = null;
      if (null != guildId) {
        let id1;
        if (user != null) {
          id1 = user.id;
        }
        member = member.getMember(guildId, id1);
      }
    }
    let obj = { profile_layout: null, profile_session_id: null, source_profile_session_id: null, profile_properties: null, guild_profile_properties: null, profile_activity_types: null, profile_badges: null, avatar_decoration_sku_id: null, profile_effect_sku_id: null, profile_frame_sku_id: null, user_status: null, is_guild_profile: null, is_bot_profile: null, is_private_to_viewer: null };
    obj[0] = layout;
    obj[1] = sessionId;
    obj[2] = sourceSessionId;
    obj = { user: null, userProfile: null };
    obj[0] = user;
    let _userProfile;
    if (displayProfile != null) {
      _userProfile = displayProfile._userProfile;
    }
    obj[1] = _userProfile;
    obj[3] = getProfileProperties(obj);
    obj1 = { guildMember: null, guildMemberProfile: null };
    obj1[0] = member;
    let _guildMemberProfile;
    if (displayProfile != null) {
      _guildMemberProfile = displayProfile._guildMemberProfile;
    }
    obj1[1] = _guildMemberProfile;
    obj[4] = getProfileProperties(obj1);
    const activities = store.getActivities(user.id);
    const mapped = activities.map((item, index) => item.type);
    obj[5] = mapped.filter((item, index) => undefined !== item);
    let found;
    if (displayProfile != null) {
      const badges = displayProfile.getBadges();
      if (badges != null) {
        const mapped1 = badges.map((item, index) => item.id);
        found = mapped1.filter((item, index) => typeof item === "string");
      }
    }
    if (found == null) {
      found = [];
    }
    obj[6] = found;
    const avatarDecoration = user.avatarDecoration;
    let skuId;
    if (avatarDecoration != null) {
      skuId = avatarDecoration.skuId;
    }
    obj[7] = skuId;
    let skuId1;
    if (displayProfile != null) {
      const profileEffect = displayProfile.profileEffect;
      if (profileEffect != null) {
        skuId1 = profileEffect.skuId;
      }
    }
    obj[8] = skuId1;
    let skuId2;
    if (displayProfile != null) {
      const profileFrame = displayProfile.profileFrame;
      if (profileFrame != null) {
        skuId2 = profileFrame.skuId;
      }
    }
    obj[9] = skuId2;
    id = user.id;
    const status = store.getStatus(id);
    if (status === StatusTypes.ONLINE) {
      if (store.isMobileOnline(id)) {
        const _HermesInternal2 = HermesInternal;
        let combined = "" + status + "-mobile";
      }
      obj[10] = combined;
      guildId = undefined;
      if (displayProfile != null) {
        guildId = displayProfile.guildId;
      }
      obj[11] = null != guildId;
      obj[12] = user.bot;
      let flag;
      if (displayProfile != null) {
        flag = displayProfile.private;
      }
      if (flag == null) {
        flag = false;
      }
      obj[13] = flag;
      return obj;
    }
    combined = status;
    if (status === StatusTypes.ONLINE) {
      const _HermesInternal = HermesInternal;
      combined = "" + status + "-desktop";
    }
  }
}
function trackUserProfileAction(closure_2) {
  const applicationId = dependencyMap.applicationId;
  ({ guildId, channelId, messageId, roleId, widgetType, analyticsLocations, action, section } = dependencyMap);
  let obj = {};
  const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guildId));
  const merged1 = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadataFromId(channelId));
  const merged2 = Object.assign(getTrackUserProfileProperties(dependencyMap));
  const userId = dependencyMap.userId;
  if (null == userId) {
    obj = {};
  } else {
    const userAffinity = authStore.getUserAffinity(userId);
    obj = { related_user_id: null, relationship_type: null, related_since: null, num_mutual_friends: null, num_mutual_guilds: null, communication_probability: null, communication_rank: null };
    obj[0] = userId;
    obj[1] = store2.getRelationshipType(userId);
    obj[2] = store2.getSince(userId);
    obj[3] = store3.getMutualFriendsCount(userId);
    const mutualGuilds = store3.getMutualGuilds(userId);
    let length;
    if (mutualGuilds != null) {
      length = mutualGuilds.length;
    }
    obj[4] = length;
    let prop;
    if (userAffinity != null) {
      prop = userAffinity.communicationProbability;
    }
    obj[5] = prop;
    let communicationRank;
    if (userAffinity != null) {
      communicationRank = userAffinity.communicationRank;
    }
    obj[6] = communicationRank;
  }
  const merged3 = Object.assign(obj);
  obj1 = { application_id: applicationId, application_linked: null };
  let tmp8 = null;
  if (null != applicationId) {
    tmp8 = null;
    if (store.getFetchStateForApplication(applicationId) === FetchState.FETCHED) {
      tmp8 = null != store.getNewestTokenForApplication(applicationId);
    }
  }
  obj1[1] = tmp8;
  const merged4 = Object.assign(obj1);
  obj.location_stack = analyticsLocations;
  obj.profile_action = action;
  obj.profile_section = section;
  obj.source_message_id = messageId;
  obj.source_role_id = roleId;
  obj.widget_type = widgetType;
  obj.track(constants3.USER_PROFILE_ACTION, obj);
}
({ ActivityTypes: closure_14, AnalyticEvents: closure_15 } = ME);
let result = require("obj132").fileFinishedImporting("modules/user_profile/UserProfileAnalyticsUtils.tsx");

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
  userId = userId.userId;
  if (null == userId) {
    return {};
  } else {
    const userAffinity = authStore.getUserAffinity(userId);
    const obj = { related_user_id: null, relationship_type: null, related_since: null, num_mutual_friends: null, num_mutual_guilds: null, communication_probability: null, communication_rank: null };
    obj[0] = userId;
    obj[1] = store2.getRelationshipType(userId);
    obj[2] = store2.getSince(userId);
    obj[3] = store3.getMutualFriendsCount(userId);
    const mutualGuilds = store3.getMutualGuilds(userId);
    let length;
    if (mutualGuilds != null) {
      length = mutualGuilds.length;
    }
    obj[4] = length;
    let prop;
    if (userAffinity != null) {
      prop = userAffinity.communicationProbability;
    }
    obj[5] = prop;
    let communicationRank;
    if (userAffinity != null) {
      communicationRank = userAffinity.communicationRank;
    }
    obj[6] = communicationRank;
    return obj;
  }
};
export { trackUserProfileAction };
export const maybeTrackUserProfileUiViewed = function maybeTrackUserProfileUiViewed(userId) {
  let trackResult = isUserProfilePerformanceAnalyticsEnabled;
  if (trackResult.isUserProfilePerformanceAnalyticsEnabled("UserProfileAnalyticsUtils")) {
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
      trackResult = {};
      let tmpResult = collectGuildAnalyticsMetadata;
      const merged = Object.assign(tmpResult.collectGuildAnalyticsMetadata(guildId));
      tmpResult = collectGuildAnalyticsMetadata;
      const merged1 = Object.assign(tmpResult.collectChannelAnalyticsMetadataFromId(channelId));
      const merged2 = Object.assign(getTrackUserProfileProperties(userId));
      userId = userId.userId;
      if (null == userId) {
        let obj = {};
      } else {
        const userAffinity = authStore.getUserAffinity(userId);
        obj = { related_user_id: null, relationship_type: null, related_since: null, num_mutual_friends: null, num_mutual_guilds: null, communication_probability: null, communication_rank: null };
        obj[0] = userId;
        obj[1] = store2.getRelationshipType(userId);
        obj[2] = store2.getSince(userId);
        obj[3] = store3.getMutualFriendsCount(userId);
        const mutualGuilds = store3.getMutualGuilds(userId);
        let length;
        if (mutualGuilds != null) {
          length = mutualGuilds.length;
        }
        obj[4] = length;
        let prop;
        if (userAffinity != null) {
          prop = userAffinity.communicationProbability;
        }
        obj[5] = prop;
        let communicationRank;
        if (userAffinity != null) {
          communicationRank = userAffinity.communicationRank;
        }
        obj[6] = communicationRank;
      }
      const merged3 = Object.assign(obj);
      trackResult.location_stack = analyticsLocations;
      trackResult.profile_ui = profileUi;
      trackResult.view_started_at = viewStartedAt;
      trackResult.fetch_started_at = fetchStartedAt;
      trackResult.time_to_interactive_ms = timeToInteractiveMs;
      trackResult.time_to_load_ms = timeToLoadMs;
      trackResult.time_to_fetch_ms = timeToFetchMs;
      trackResult = expandEventPropertiesDefault.track(constants3.USER_PROFILE_UI_VIEWED, trackResult);
    }
  }
};
export const trackUserProfileActivityJoined = function trackUserProfileActivityJoined(userId) {
  ({ activityType, voiceChannelId } = userId);
  ({ guildId, channelId, analyticsLocations, activityName, activityPlatform, activitySessionId, applicationId } = userId);
  let obj = {};
  const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guildId));
  const merged1 = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadataFromId(channelId));
  const merged2 = Object.assign(getTrackUserProfileProperties(userId));
  userId = userId.userId;
  if (null == userId) {
    obj = {};
  } else {
    const userAffinity = authStore.getUserAffinity(userId);
    obj = { related_user_id: null, relationship_type: null, related_since: null, num_mutual_friends: null, num_mutual_guilds: null, communication_probability: null, communication_rank: null };
    obj[0] = userId;
    obj[1] = store2.getRelationshipType(userId);
    obj[2] = store2.getSince(userId);
    obj[3] = store3.getMutualFriendsCount(userId);
    const mutualGuilds = store3.getMutualGuilds(userId);
    let length;
    if (mutualGuilds != null) {
      length = mutualGuilds.length;
    }
    obj[4] = length;
    let prop;
    if (userAffinity != null) {
      prop = userAffinity.communicationProbability;
    }
    obj[5] = prop;
    let communicationRank;
    if (userAffinity != null) {
      communicationRank = userAffinity.communicationRank;
    }
    obj[6] = communicationRank;
  }
  const merged3 = Object.assign(obj);
  obj.location_stack = analyticsLocations;
  let str = "VOICE";
  if (null == voiceChannelId) {
    let tmp8 = activityType;
    if (null != activityType) {
      let str2 = "VOICE";
      if ("VOICE" !== activityType) {
        const _Object = Object;
        const _Object2 = Object;
        const keys = Object.keys(closure_14);
        const values = Object.values(closure_14);
        str2 = keys[values.indexOf(values, activityType)];
      }
      tmp8 = str2;
    }
    str = tmp8;
  }
  obj.activity_type = str;
  obj.activity_name = activityName;
  obj.activity_platform = activityPlatform;
  obj.activity_session_id = activitySessionId;
  obj.application_id = applicationId;
  obj.voice_channel_id = voiceChannelId;
  obj.track(constants3.USER_PROFILE_ACTIVITY_JOINED, obj);
};
export const trackUserProfileActivityAction = function trackUserProfileActivityAction(userId) {
  ({ activity, entry, outbox } = userId);
  ({ guildId, channelId, analyticsLocations, action, display, stream, voiceChannelId } = userId);
  let obj = {};
  const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guildId));
  const merged1 = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadataFromId(channelId));
  const merged2 = Object.assign(getTrackUserProfileProperties(userId));
  userId = userId.userId;
  if (null == userId) {
    obj = {};
  } else {
    const userAffinity = authStore.getUserAffinity(userId);
    obj = { related_user_id: null, relationship_type: null, related_since: null, num_mutual_friends: null, num_mutual_guilds: null, communication_probability: null, communication_rank: null };
    obj[0] = userId;
    obj[1] = store2.getRelationshipType(userId);
    obj[2] = store2.getSince(userId);
    obj[3] = store3.getMutualFriendsCount(userId);
    const mutualGuilds = store3.getMutualGuilds(userId);
    let length;
    if (mutualGuilds != null) {
      length = mutualGuilds.length;
    }
    obj[4] = length;
    let prop;
    if (userAffinity != null) {
      prop = userAffinity.communicationProbability;
    }
    obj[5] = prop;
    let communicationRank;
    if (userAffinity != null) {
      communicationRank = userAffinity.communicationRank;
    }
    obj[6] = communicationRank;
  }
  const merged3 = Object.assign(obj);
  obj.location_stack = analyticsLocations;
  obj.activity_action = action;
  obj.activity_display = display;
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
  obj.activity_type = tmp9;
  let name;
  if (activity != null) {
    name = activity.name;
  }
  obj.activity_name = name;
  let platform;
  if (activity != null) {
    platform = activity.platform;
  }
  obj.activity_platform = platform;
  let session_id;
  if (activity != null) {
    session_id = activity.session_id;
  }
  obj.activity_session_id = session_id;
  let application_id;
  if (activity != null) {
    application_id = activity.application_id;
  }
  obj.activity_application_id = application_id;
  let id;
  if (entry != null) {
    id = entry.id;
  }
  obj.item_id = id;
  let author_id;
  if (entry != null) {
    author_id = entry.author_id;
  }
  obj.author_id_v2 = author_id;
  let mapped;
  if (outbox != null) {
    const entries = outbox.entries;
    mapped = entries.map((item, index) => item.id);
  }
  obj.item_ids = mapped;
  let mapped1;
  if (outbox != null) {
    const entries1 = outbox.entries;
    mapped1 = entries1.map((item, index) => item.author_id);
  }
  obj.author_ids_v2 = mapped1;
  obj.voice_channel_id = voiceChannelId;
  obj.track(constants3.USER_PROFILE_ACTIVITY_ACTION, obj);
};
export const trackUserProfileBadgeAction = function trackUserProfileBadgeAction(userId) {
  ({ badgeId, userId } = userId);
  let tmp;
  ({ guildId, channelId, analyticsLocations, badgeAction, position } = userId);
  if (null != badgeId) {
    if (null != userId) {
      badgeById = badgeById.getBadgeById(badgeId, userId);
      let current_tier;
      if (badgeById != null) {
        current_tier = badgeById.current_tier;
      }
      tmp = current_tier;
    }
  }
  let obj = {};
  const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guildId));
  const merged1 = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadataFromId(channelId));
  const merged2 = Object.assign(getTrackUserProfileProperties(userId));
  const userId2 = userId.userId;
  if (null == userId2) {
    obj = {};
  } else {
    const userAffinity = authStore.getUserAffinity(userId2);
    obj = { related_user_id: null, relationship_type: null, related_since: null, num_mutual_friends: null, num_mutual_guilds: null, communication_probability: null, communication_rank: null };
    obj[0] = userId2;
    obj[1] = store2.getRelationshipType(userId2);
    obj[2] = store2.getSince(userId2);
    obj[3] = store3.getMutualFriendsCount(userId2);
    const mutualGuilds = store3.getMutualGuilds(userId2);
    let length;
    if (mutualGuilds != null) {
      length = mutualGuilds.length;
    }
    obj[4] = length;
    let prop;
    if (userAffinity != null) {
      prop = userAffinity.communicationProbability;
    }
    obj[5] = prop;
    let communicationRank;
    if (userAffinity != null) {
      communicationRank = userAffinity.communicationRank;
    }
    obj[6] = communicationRank;
  }
  const merged3 = Object.assign(obj);
  obj.location_stack = analyticsLocations;
  obj.badge_action = badgeAction;
  obj.badge_id = badgeId;
  obj.badge_tier = tmp;
  obj.position = position;
  obj.track(constants3.USER_PROFILE_BADGE_ACTION, obj);
};
export const trackDmProfileToggled = function trackDmProfileToggled(displayProfile) {
  displayProfile = displayProfile.displayProfile;
  let userId;
  if (displayProfile != null) {
    userId = displayProfile.userId;
  }
  let findActivityResult = null;
  if (null != userId) {
    findActivityResult = store.findActivity(userId, (type) => {
      type = type.type;
      if (null != closure_1_7.getAnyStreamForUser(userId)) {
        let tmp2 = type === closure_1_14.PLAYING;
      } else {
        tmp2 = type !== closure_1_14.CUSTOM_STATUS;
      }
      return tmp2;
    });
  }
  const obj = {};
  const merged = Object.assign(getTrackUserProfileProperties({ userId }));
  obj.is_profile_open = displayProfile.isProfileOpen;
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
  obj.has_images = Boolean(large_image);
  obj.is_friend = store2.isFriend(userId);
  obj.viewed_profile_user_id = userId;
  let result;
  if (displayProfile != null) {
    result = displayProfile.hasPremiumCustomization();
  }
  obj.profile_has_nitro_customization = result;
  let hasThemeColorsResult;
  if (displayProfile != null) {
    hasThemeColorsResult = displayProfile.hasThemeColors();
  }
  obj.profile_has_theme_color_customized = hasThemeColorsResult;
  let prop;
  if (displayProfile != null) {
    prop = displayProfile.popoutAnimationParticleType;
  }
  obj.profile_has_theme_animation = null != prop;
  obj.track(constants3.DM_PROFILE_TOGGLED, obj);
};
export const trackUserProfileEditAction = function trackUserProfileEditAction(dependencyMap) {
  ({ action, applicationId } = dependencyMap);
  let obj = {};
  ({ guildId, channelId, analyticsLocations, widgetEdited, gameId, numResults, numCharacters } = dependencyMap);
  const merged = Object.assign(dependencyMap);
  obj.action = action;
  trackUserProfileAction(obj);
  const obj2 = expandEventPropertiesDefault;
  const merged1 = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guildId));
  const merged2 = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadataFromId(channelId));
  const merged3 = Object.assign(getTrackUserProfileProperties(dependencyMap));
  obj = { application_id: applicationId, application_linked: null };
  let tmp6 = null;
  if (null != applicationId) {
    tmp6 = null;
    if (store.getFetchStateForApplication(applicationId) === FetchState.FETCHED) {
      tmp6 = null != store.getNewestTokenForApplication(applicationId);
    }
  }
  obj[1] = tmp6;
  const merged4 = Object.assign(obj);
  obj.location_stack = analyticsLocations;
  obj.edit_action = action;
  obj.widget_edited = widgetEdited;
  obj.game_id = gameId;
  obj.num_results = numResults;
  obj.num_characters = numCharacters;
  obj.application_id = applicationId;
  obj2.track(constants3.USER_PROFILE_EDIT_ACTION, obj);
};
export const trackUserProfileEditSaved = function trackUserProfileEditSaved(dependencyMap) {
  let obj = {};
  ({ guildId, channelId, analyticsLocations, widgetEdited, gameIds, tags, numCharactersCommentary, isWidgetRemoved } = dependencyMap);
  const merged = Object.assign(dependencyMap);
  obj.action = "EDIT_SAVED";
  trackUserProfileAction(obj);
  obj = {};
  const obj2 = expandEventPropertiesDefault;
  const merged1 = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guildId));
  const merged2 = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadataFromId(channelId));
  const merged3 = Object.assign(getTrackUserProfileProperties(dependencyMap));
  obj.location_stack = analyticsLocations;
  obj.widget_edited = widgetEdited;
  obj.game_ids = gameIds;
  obj.tags = tags;
  obj.num_characters_commentary = numCharactersCommentary;
  obj.is_widget_removed = isWidgetRemoved;
  obj2.track(constants3.USER_PROFILE_EDIT_SAVED, obj);
};
export const trackUserProfileWishlistAction = function trackUserProfileWishlistAction(dependencyMap) {
  ({ action, productLines } = dependencyMap);
  let obj = {};
  ({ guildId, channelId, analyticsLocations, wishlistId, skuId } = dependencyMap);
  const merged = Object.assign(dependencyMap);
  obj.action = action;
  trackUserProfileAction(obj);
  obj = {};
  const obj2 = expandEventPropertiesDefault;
  const merged1 = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guildId));
  const merged2 = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadataFromId(channelId));
  const merged3 = Object.assign(getTrackUserProfileProperties(dependencyMap));
  obj.location_stack = analyticsLocations;
  obj.action_type = action;
  obj.wishlist_id = wishlistId;
  obj.sku_id = skuId;
  if (null != productLines) {
    const _Array = Array;
    let items = Array.from(productLines);
  } else {
    items = [];
  }
  obj.product_lines = items;
  obj2.track(constants3.USER_PROFILE_WISHLIST_ACTION, obj);
};