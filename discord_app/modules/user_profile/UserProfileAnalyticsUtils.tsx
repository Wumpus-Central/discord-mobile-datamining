// discord_app/modules/user_profile/UserProfileAnalyticsUtils.tsx
import map from "map";
import recomputeFromAppTokens from "recomputeFromAppTokens";
import { FetchState } from "recomputeFromAppTokens";
import recomputeAffinities from "recomputeAffinities";
import reset from "reset";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import sortActivity from "sortActivity";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import mergeGuildAvatar from "mergeGuildAvatar";
import createUserWidgetFromServer from "createUserWidgetFromServer";
import { TrackUserProfileProperties as closure_13 } from "USER_PROFILE_TOOLTIP_DELAY";
import ME from "ME";
import { StatusTypes } from "sum";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { getAvatarURL } from "../../utils/AvatarUtils.tsx";
import { collectGuildAnalyticsMetadata } from "../app_analytics/AppAnalyticsUtils.tsx";
import { isUserProfilePerformanceAnalyticsEnabled } from "experiments/UserProfilePerformanceAnalyticsExperiment.tsx";
import { useDisplayProfile } from "hooks/useDisplayProfile.tsx";

let closure_14;
let closure_15;
const require = arg1;
function getProfileProperties(guildMemberProfile) {
  let guildMember;
  let user;
  let userProfile;
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
        tmp23 = undefined !== themeColors1.find((arg0) => null !== arg0);
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
      const obj2 = getAvatarURL;
    }
  } else {
    let avatar1;
    if (user != null) {
      avatar1 = user.avatar;
    }
    items.push(getAvatarURL.isAnimatedIconHash(avatar1) ? constants.ANIMATED_AVATAR : constants.AVATAR);
    const obj = getAvatarURL;
  }
}
function getTrackUserProfileProperties(userId) {
  let guildId;
  let layout;
  let sessionId;
  let showGuildProfile;
  let sourceSessionId;
  ({ guildId, showGuildProfile } = userId);
  ({ layout, userId, sessionId, sourceSessionId } = userId);
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
    const obj1 = { guildMember: null, guildMemberProfile: null };
    obj1[0] = member;
    let _guildMemberProfile;
    if (displayProfile != null) {
      _guildMemberProfile = displayProfile._guildMemberProfile;
    }
    obj1[1] = _guildMemberProfile;
    obj[4] = getProfileProperties(obj1);
    const activities = sortActivity.getActivities(user.id);
    const mapped = activities.map((type) => type.type);
    obj[5] = mapped.filter((arg0) => undefined !== arg0);
    let found;
    if (displayProfile != null) {
      const badges = displayProfile.getBadges();
      if (badges != null) {
        const mapped1 = badges.map((id) => id.id);
        found = mapped1.filter((str) => typeof str === "string");
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
    const status = obj5.getStatus(id);
    if (status === StatusTypes.ONLINE) {
      if (obj5.isMobileOnline(id)) {
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
    if (status === tmp14.ONLINE) {
      const _HermesInternal = HermesInternal;
      combined = "" + status + "-desktop";
    }
    const obj6 = useDisplayProfile;
    tmp14 = StatusTypes;
  }
}
function trackUserProfileAction(applicationId) {
  let action;
  let analyticsLocations;
  let channelId;
  let guildId;
  let messageId;
  let roleId;
  let section;
  let widgetType;
  applicationId = applicationId.applicationId;
  ({ guildId, channelId, messageId, roleId, widgetType, analyticsLocations, action, section } = applicationId);
  let obj = expandEventProperties;
  obj = {};
  const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guildId));
  const obj3 = collectGuildAnalyticsMetadata;
  const merged1 = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadataFromId(channelId));
  const merged2 = Object.assign(getTrackUserProfileProperties(applicationId));
  const userId = applicationId.userId;
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
  const obj1 = { application_id: applicationId, application_linked: null };
  let tmp8 = null;
  if (null != applicationId) {
    tmp8 = null;
    if (store.getFetchStateForApplication(applicationId) === FetchState.FETCHED) {
      tmp8 = null != obj7.getNewestTokenForApplication(applicationId);
    }
    obj7 = store;
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
let result = require("recomputeAffinities").fileFinishedImporting("modules/user_profile/UserProfileAnalyticsUtils.tsx");

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
  let analyticsLocations;
  let channelId;
  let fetchStartedAt;
  let guildId;
  let profileUi;
  let timeToFetchMs;
  let timeToInteractiveMs;
  let timeToLoadMs;
  let viewStartedAt;
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
      let tmpResult = tmp(4539);
      const merged = Object.assign(tmpResult.collectGuildAnalyticsMetadata(guildId));
      tmpResult = tmp(4539);
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
      trackResult = expandEventProperties.track(constants3.USER_PROFILE_UI_VIEWED, trackResult);
      const obj2 = expandEventProperties;
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
  let guildId;
  let voiceChannelId;
  ({ activityType, voiceChannelId } = userId);
  ({ guildId, channelId, analyticsLocations, activityName, activityPlatform, activitySessionId, applicationId } = userId);
  let obj = expandEventProperties;
  obj = {};
  const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guildId));
  const obj3 = collectGuildAnalyticsMetadata;
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
  let action;
  let activity;
  let analyticsLocations;
  let channelId;
  let display;
  let entry;
  let guildId;
  let outbox;
  let stream;
  let voiceChannelId;
  ({ activity, entry, outbox } = userId);
  ({ guildId, channelId, analyticsLocations, action, display, stream, voiceChannelId } = userId);
  let obj = expandEventProperties;
  obj = {};
  const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guildId));
  const obj3 = collectGuildAnalyticsMetadata;
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
    mapped = entries.map((id) => id.id);
  }
  obj.item_ids = mapped;
  let mapped1;
  if (outbox != null) {
    const entries1 = outbox.entries;
    mapped1 = entries1.map((author_id) => author_id.author_id);
  }
  obj.author_ids_v2 = mapped1;
  obj.voice_channel_id = voiceChannelId;
  obj.track(constants3.USER_PROFILE_ACTIVITY_ACTION, obj);
};
export const trackUserProfileBadgeAction = function trackUserProfileBadgeAction(userId) {
  let analyticsLocations;
  let badgeAction;
  let badgeId;
  let channelId;
  let guildId;
  let position;
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
  let obj = expandEventProperties;
  obj = {};
  const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guildId));
  const obj3 = collectGuildAnalyticsMetadata;
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
  userId = undefined;
  if (displayProfile != null) {
    userId = displayProfile.userId;
  }
  let findActivityResult = null;
  if (null != userId) {
    findActivityResult = sortActivity.findActivity(userId, (type) => {
      type = type.type;
      if (null != outer1_7.getAnyStreamForUser(userId)) {
        let tmp2 = type === outer1_14.PLAYING;
      } else {
        tmp2 = type !== outer1_14.CUSTOM_STATUS;
      }
      return tmp2;
    });
  }
  let obj = expandEventProperties;
  obj = {};
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
export const trackUserProfileEditAction = function trackUserProfileEditAction(userId) {
  let action;
  let analyticsLocations;
  let applicationId;
  let channelId;
  let gameId;
  let guildId;
  let numCharacters;
  let numResults;
  let widgetEdited;
  ({ action, applicationId } = userId);
  let obj = {};
  ({ guildId, channelId, analyticsLocations, widgetEdited, gameId, numResults, numCharacters } = userId);
  const merged = Object.assign(userId);
  obj.action = action;
  trackUserProfileAction(obj);
  obj = {};
  const obj2 = expandEventProperties;
  const merged1 = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guildId));
  const obj4 = collectGuildAnalyticsMetadata;
  const merged2 = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadataFromId(channelId));
  const merged3 = Object.assign(getTrackUserProfileProperties(userId));
  obj = { application_id: applicationId, application_linked: null };
  let tmp6 = null;
  if (null != applicationId) {
    tmp6 = null;
    if (store.getFetchStateForApplication(applicationId) === FetchState.FETCHED) {
      tmp6 = null != obj7.getNewestTokenForApplication(applicationId);
    }
    obj7 = store;
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
export const trackUserProfileEditSaved = function trackUserProfileEditSaved(userId) {
  let analyticsLocations;
  let channelId;
  let gameIds;
  let guildId;
  let isWidgetRemoved;
  let numCharactersCommentary;
  let tags;
  let widgetEdited;
  let obj = {};
  ({ guildId, channelId, analyticsLocations, widgetEdited, gameIds, tags, numCharactersCommentary, isWidgetRemoved } = userId);
  const merged = Object.assign(userId);
  obj.action = "EDIT_SAVED";
  trackUserProfileAction(obj);
  obj = {};
  const obj2 = expandEventProperties;
  const merged1 = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guildId));
  const obj4 = collectGuildAnalyticsMetadata;
  const merged2 = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadataFromId(channelId));
  const merged3 = Object.assign(getTrackUserProfileProperties(userId));
  obj.location_stack = analyticsLocations;
  obj.widget_edited = widgetEdited;
  obj.game_ids = gameIds;
  obj.tags = tags;
  obj.num_characters_commentary = numCharactersCommentary;
  obj.is_widget_removed = isWidgetRemoved;
  obj2.track(constants3.USER_PROFILE_EDIT_SAVED, obj);
};
export const trackUserProfileWishlistAction = function trackUserProfileWishlistAction(userId) {
  let action;
  let analyticsLocations;
  let channelId;
  let guildId;
  let productLines;
  let skuId;
  let wishlistId;
  ({ action, productLines } = userId);
  let obj = {};
  ({ guildId, channelId, analyticsLocations, wishlistId, skuId } = userId);
  const merged = Object.assign(userId);
  obj.action = action;
  trackUserProfileAction(obj);
  obj = {};
  const obj2 = expandEventProperties;
  const merged1 = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guildId));
  const obj4 = collectGuildAnalyticsMetadata;
  const merged2 = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadataFromId(channelId));
  const merged3 = Object.assign(getTrackUserProfileProperties(userId));
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