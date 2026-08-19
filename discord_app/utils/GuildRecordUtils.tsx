// === Module 1430: fromGuildPropertiesWithAdditionalFields ===

// Module 1430 (fromGuildPropertiesWithAdditionalFields)
import obj132 from "obj132" /* 2 */;
import _modDef38 from "module_38" /* 38 */;
import ME from "ME" /* 676 */;
import areSetsEqual from "areSetsEqual" /* 1433 */;
import fromServerGuildIncidentsData from "fromServerGuildIncidentsData" /* 1908 */;
import cloneGuildThemeSettings from "cloneGuildThemeSettings" /* 1909 */;
import isValueEqual from "isValueEqual" /* 1431 */;
import GuildNSFWContentLevel from "GuildNSFWContentLevel" /* 1434 */;

function fromGuildPropertiesWithAdditionalFields(properties, joinedAt, guildTheme) {
  let obj = { id: properties.id, joinedAt: joinedAt.joinedAt, premiumSubscriberCount: joinedAt.premiumSubscriberCount, name: properties.name, description: null, icon: null, splash: null, banner: null, homeHeader: null, features: null, preferredLocale: null, ownerId: null, application_id: null, afkChannelId: null, afkTimeout: null, systemChannelId: null, verificationLevel: null, explicitContentFilter: null, defaultMessageNotifications: null, mfaLevel: null, vanityURLCode: null, premiumTier: null, premiumProgressBarEnabled: null, premiumProgressBarEnabledUserUpdatedAt: null, systemChannelFlags: null, discoverySplash: null, rulesChannelId: null, safetyAlertsChannelId: null, publicUpdatesChannelId: null, maxStageVideoChannelUsers: null, maxVideoChannelUsers: null, maxMembers: null, nsfwLevel: null, ownerConfiguredContentLevel: null, hubType: null, latestOnboardingQuestionId: null, profile: null, guildTheme: null, premiumFeatures: null, moderatorReporting: null, guildSpaceSettings: null, verificationRoleId: null, gameApplicationIds: null, officialMessageColor: null, incidentsData: null };
  let description = properties.description;
  if (description == null) {
    description = null;
  }
  obj[4] = description;
  let icon = properties.icon;
  if (icon == null) {
    icon = null;
  }
  obj[5] = icon;
  let splash = properties.splash;
  if (splash == null) {
    splash = null;
  }
  obj[6] = splash;
  let banner = properties.banner;
  if (banner == null) {
    banner = null;
  }
  obj[7] = banner;
  let home_header = properties.home_header;
  if (home_header == null) {
    home_header = null;
  }
  obj[8] = home_header;
  obj[9] = areSetsEqual.toSetInplace(properties.features);
  let preferredLocale = properties.preferred_locale;
  if (preferredLocale == null) {
    preferredLocale = closure_7.preferredLocale;
  }
  obj[10] = preferredLocale;
  ({ owner_id: obj[11], application_id } = properties);
  if (application_id == null) {
    application_id = null;
  }
  obj[12] = application_id;
  let afk_channel_id = properties.afk_channel_id;
  if (afk_channel_id == null) {
    afk_channel_id = null;
  }
  obj[13] = afk_channel_id;
  let afkTimeout = properties.afk_timeout;
  if (afkTimeout == null) {
    afkTimeout = closure_7.afkTimeout;
  }
  obj[14] = afkTimeout;
  let system_channel_id = properties.system_channel_id;
  if (system_channel_id == null) {
    system_channel_id = null;
  }
  obj[15] = system_channel_id;
  let verificationLevel = properties.verification_level;
  if (verificationLevel == null) {
    verificationLevel = closure_7.verificationLevel;
  }
  obj[16] = verificationLevel;
  let explicitContentFilter = properties.explicit_content_filter;
  if (explicitContentFilter == null) {
    explicitContentFilter = closure_7.explicitContentFilter;
  }
  obj[17] = explicitContentFilter;
  ({ default_message_notifications: obj[18], mfa_level } = properties);
  if (mfa_level == null) {
    mfa_level = closure_7.mfaLevel;
  }
  obj[19] = mfa_level;
  let vanity_url_code = properties.vanity_url_code;
  if (vanity_url_code == null) {
    vanity_url_code = null;
  }
  obj[20] = vanity_url_code;
  let premiumTier = properties.premium_tier;
  if (premiumTier == null) {
    premiumTier = closure_7.premiumTier;
  }
  obj[21] = premiumTier;
  let premiumProgressBarEnabled = properties.premium_progress_bar_enabled;
  if (!premiumProgressBarEnabled) {
    premiumProgressBarEnabled = closure_7.premiumProgressBarEnabled;
  }
  obj[22] = premiumProgressBarEnabled;
  let date = null;
  if (null != properties.premium_progress_bar_enabled_user_updated_at) {
    const _Date = Date;
    date = new Date(properties.premium_progress_bar_enabled_user_updated_at);
  }
  obj[23] = date;
  ({ system_channel_flags: obj[24], discovery_splash } = properties);
  if (discovery_splash == null) {
    discovery_splash = null;
  }
  obj[25] = discovery_splash;
  let rules_channel_id = properties.rules_channel_id;
  if (rules_channel_id == null) {
    rules_channel_id = null;
  }
  obj[26] = rules_channel_id;
  let prop = properties.safety_alerts_channel_id;
  if (prop == null) {
    prop = null;
  }
  obj[27] = prop;
  let prop1 = properties.public_updates_channel_id;
  if (prop1 == null) {
    prop1 = null;
  }
  obj[28] = prop1;
  let maxStageVideoChannelUsers = properties.max_stage_video_channel_users;
  if (maxStageVideoChannelUsers == null) {
    maxStageVideoChannelUsers = closure_7.maxStageVideoChannelUsers;
  }
  obj[29] = maxStageVideoChannelUsers;
  let maxVideoChannelUsers = properties.max_video_channel_users;
  if (maxVideoChannelUsers == null) {
    maxVideoChannelUsers = closure_7.maxVideoChannelUsers;
  }
  obj[30] = maxVideoChannelUsers;
  let maxMembers = properties.max_members;
  if (maxMembers == null) {
    maxMembers = closure_7.maxMembers;
  }
  obj[31] = maxMembers;
  let nsfwLevel = properties.nsfw_level;
  if (nsfwLevel == null) {
    nsfwLevel = closure_7.nsfwLevel;
  }
  obj[32] = nsfwLevel;
  let prop2 = properties.owner_configured_content_level;
  if (prop2 == null) {
    prop2 = null;
  }
  obj[33] = prop2;
  let hub_type = properties.hub_type;
  if (hub_type == null) {
    hub_type = null;
  }
  obj[34] = hub_type;
  let prop3 = properties.latest_onboarding_question_id;
  if (prop3 == null) {
    prop3 = null;
  }
  obj[35] = prop3;
  let profile = properties.profile;
  if (profile == null) {
    profile = null;
  }
  obj[36] = profile;
  const theme = properties.theme;
  if (undefined === theme) {
    guildTheme = undefined;
    if (guildTheme != null) {
      guildTheme = guildTheme.guildTheme;
    }
    if (guildTheme == null) {
      guildTheme = null;
    }
    let tmp35 = guildTheme;
  } else {
    tmp35 = null;
    if (null != theme) {
      let tmp8Result = cloneGuildThemeSettings;
      let fromServerGuildThemeResult = tmp8Result.fromServerGuildTheme(theme);
      if (fromServerGuildThemeResult == null) {
        fromServerGuildThemeResult = { enabled: false, themeSettings: null };
      }
      tmp35 = fromServerGuildThemeResult;
    }
  }
  obj[37] = tmp35;
  let tmp37 = null;
  if (null != properties.premium_features) {
    obj = { features: null, additionalEmojiSlots: null, additionalStickerSlots: null, additionalSoundSlots: null };
    ({ features: obj5[0], additional_emoji_slots: obj5[1], additional_sticker_slots: obj5[2], additional_sound_slots: obj5[3] } = properties.premium_features);
    tmp37 = obj;
  }
  obj[38] = tmp37;
  let tmp38 = null;
  if (null != properties.moderator_reporting) {
    obj = { moderatorReportingEnabled: null, moderatorReportChannelId: null };
    ({ moderator_reporting_enabled: obj6[0], moderator_report_channel_id: obj6[1] } = properties.moderator_reporting);
    tmp38 = obj;
  }
  obj[39] = tmp38;
  let guild_space_settings = properties.guild_space_settings;
  if (guild_space_settings == null) {
    guild_space_settings = null;
  }
  obj[40] = guild_space_settings;
  let verification_role_id = properties.verification_role_id;
  if (verification_role_id == null) {
    verification_role_id = null;
  }
  obj[41] = verification_role_id;
  let game_application_ids = properties.game_application_ids;
  if (game_application_ids == null) {
    game_application_ids = null;
  }
  obj[42] = game_application_ids;
  let prop4 = properties.official_message_color;
  if (prop4 == null) {
    prop4 = null;
  }
  obj[43] = prop4;
  tmp8Result = fromServerGuildIncidentsData;
  obj[44] = tmp8Result.fromServerGuildIncidentsData(properties.incidents_data);
  return lib(closure_8, guildTheme, obj);
}
({ constructInPlace: c3, merge: c4, objectIsPlainRecordOfType: c5, tryReuseExistingInPlacePlainRecord: closure_6 } = isValueEqual);
({ GUILD_DEFAULT_PROPERTY_VALUES: error, GuildRecordTypeTag: closure_8 } = GuildNSFWContentLevel);
GuildNSFWContentLevel = ME.GuildNSFWContentLevel;
const result = obj132.fileFinishedImporting("utils/GuildRecordUtils.tsx");

export const isGuildRecord = function isGuildRecord(has) {
  return callback3(closure_8, has);
};
export { fromGuildPropertiesWithAdditionalFields };
export const fromServer = function fromServer(joined_at, joinedAt) {
  if (null != joined_at.joined_at) {
    const _Date = Date;
    let date = new Date(joined_at.joined_at);
  } else {
    date = undefined;
    if (joinedAt != null) {
      date = joinedAt.joinedAt;
    }
    if (date == null) {
      date = null;
    }
  }
  let num = joined_at.premium_subscription_count;
  if (num == null) {
    num = 0;
  }
  if (null == joined_at.properties) {
    _modDef38(null != joinedAt, "If guild.properties is null, existingGuild must be passed in");
    let obj = { joinedAt: null, premiumSubscriberCount: null };
    obj[0] = date;
    obj[1] = num;
    let tmp6 = callback2(joinedAt, obj);
  } else {
    obj = { joinedAt: null, premiumSubscriberCount: null };
    obj[0] = date;
    obj[1] = num;
    tmp6 = fromGuildPropertiesWithAdditionalFields(joined_at.properties, obj, joinedAt);
  }
  return tmp6;
};
export const attachSerializedData = function attachSerializedData(guild, result, selfMember) {
  let obj = {};
  const merged = Object.assign(guild);
  let toISOStringResult = null;
  if (null != guild.joinedAt) {
    const joinedAt = guild.joinedAt;
    toISOStringResult = joinedAt.toISOString();
  }
  obj.joinedAt = toISOStringResult;
  let toISOStringResult1 = null;
  if (null != guild.premiumProgressBarEnabledUserUpdatedAt) {
    const premiumProgressBarEnabledUserUpdatedAt = guild.premiumProgressBarEnabledUserUpdatedAt;
    toISOStringResult1 = premiumProgressBarEnabledUserUpdatedAt.toISOString();
  }
  obj.premiumProgressBarEnabledUserUpdatedAt = toISOStringResult1;
  obj.features = Array.from(guild.features);
  obj.roles = result;
  let tmp4 = null;
  if (null != selfMember) {
    obj = { userId: null, roles: null };
    ({ userId: obj2[0], roles: obj2[1] } = selfMember);
    tmp4 = obj;
  }
  obj.member = tmp4;
  return obj;
};
export const fromBackgroundSync = function fromBackgroundSync(properties, guildTheme) {
  let tmp = guildTheme;
  if (null != properties.properties) {
    const obj = { joinedAt: null, premiumSubscriberCount: null };
    ({ joinedAt: obj[0], premiumSubscriberCount: obj[1] } = guildTheme);
    tmp = fromGuildPropertiesWithAdditionalFields(properties.properties, obj, guildTheme);
  }
  return tmp;
};
export const fromGuild = function fromGuild(guild, fromGuildResult) {
  if (null != guild.joined_at) {
    const _Date = Date;
    let date = new Date(guild.joined_at);
  } else {
    date = undefined;
    if (fromGuildResult != null) {
      date = fromGuildResult.joinedAt;
    }
    if (date == null) {
      date = null;
    }
  }
  return fromGuildPropertiesWithAdditionalFields(guild, { joinedAt: date, premiumSubscriberCount: guild.premium_subscription_count }, fromGuildResult);
};
export const fromInviteGuild = function fromInviteGuild(guild) {
  let obj = { id: guild.id, name: guild.name, description: guild.description, icon: guild.icon, splash: guild.splash, banner: guild.banner, features: areSetsEqual.toSetInplace(guild.features), verificationLevel: null, vanityURLCode: null, premiumSubscriberCount: null, nsfwLevel: null, premiumTier: null, homeHeader: null };
  ({ verification_level: obj[7], vanity_url_code: obj[8], premium_subscription_count: obj[9], nsfw_level: obj[10], premium_tier: obj[11], home_header: obj[12] } = guild);
  obj = {};
  const merged = Object.assign(closure_7);
  const merged1 = Object.assign(obj);
  return callback(closure_8, obj);
};
export const fromGuildProfile = function fromGuildProfile(profile) {
  let obj = { id: profile.id, name: profile.name, description: profile.description, icon: profile.icon, premiumSubscriberCount: null, premiumTier: null, features: null };
  let premiumSubscriberCount = profile.premiumSubscriberCount;
  if (premiumSubscriberCount == null) {
    premiumSubscriberCount = closure_7.premiumSubscriberCount;
  }
  obj[4] = premiumSubscriberCount;
  let premiumTier = profile.premiumTier;
  if (premiumTier == null) {
    premiumTier = closure_7.premiumTier;
  }
  obj[5] = premiumTier;
  obj[6] = areSetsEqual.toSetInplace(profile.features);
  obj = {};
  const merged = Object.assign(closure_7);
  const merged1 = Object.assign(obj);
  return callback(closure_8, obj);
};
export const fromStoreListingGuild = function fromStoreListingGuild(id) {
  let obj = { id: id.id, name: id.name, icon: null };
  let icon = id.icon;
  if (icon == null) {
    icon = null;
  }
  obj[2] = icon;
  obj = {};
  const merged = Object.assign(closure_7);
  const merged1 = Object.assign(obj);
  return callback(closure_8, obj);
};
export const fromDirectoryGuild = function fromDirectoryGuild(id) {
  let obj = { id: id.id, name: id.name, icon: null, description: null, splash: null, features: null };
  let icon = id.icon;
  if (icon == null) {
    icon = null;
  }
  obj[2] = icon;
  let description = id.description;
  if (description == null) {
    description = null;
  }
  obj[3] = description;
  let splash = id.splash;
  if (splash == null) {
    splash = null;
  }
  obj[4] = splash;
  obj[5] = areSetsEqual.toSetInplace(id.features);
  obj = {};
  const merged = Object.assign(closure_7);
  const merged1 = Object.assign(obj);
  return callback(closure_8, obj);
};
export const fromGuildDirectoryEntry = function fromGuildDirectoryEntry(entry) {
  let obj = { id: entry.guildId, name: null, icon: null, description: null, splash: null, features: null };
  let str = entry.name;
  if (str == null) {
    str = "";
  }
  obj[1] = str;
  let icon = entry.icon;
  if (icon == null) {
    icon = null;
  }
  obj[2] = icon;
  let description = entry.description;
  if (description == null) {
    description = null;
  }
  obj[3] = description;
  let splash = entry.splash;
  if (splash == null) {
    splash = null;
  }
  obj[4] = splash;
  obj[5] = areSetsEqual.toSetInplace(entry.features);
  obj = {};
  const merged = Object.assign(closure_7);
  const merged1 = Object.assign(obj);
  return callback(closure_8, obj);
};
export const fromVerificationGateGuild = function fromVerificationGateGuild(stateFromStores1) {
  let obj = { id: stateFromStores1.id, name: stateFromStores1.name, icon: null, description: null, splash: null, features: null, verificationLevel: null };
  let icon = stateFromStores1.icon;
  if (icon == null) {
    icon = null;
  }
  obj[2] = icon;
  let description = stateFromStores1.description;
  if (description == null) {
    description = null;
  }
  obj[3] = description;
  let splash = stateFromStores1.splash;
  if (splash == null) {
    splash = null;
  }
  obj[4] = splash;
  obj[5] = areSetsEqual.toSetInplace(stateFromStores1.features);
  let verificationLevel = stateFromStores1.verification_level;
  if (verificationLevel == null) {
    verificationLevel = closure_7.verificationLevel;
  }
  obj[6] = verificationLevel;
  obj = {};
  const merged = Object.assign(closure_7);
  const merged1 = Object.assign(obj);
  return callback(closure_8, obj);
};
export const fromClientDiscoverableGuild = function fromClientDiscoverableGuild(guild) {
  let obj = { id: guild.id, name: guild.name, description: null, splash: null, banner: null, preferredLocale: null, icon: null, features: null, premiumSubscriberCount: null, discoverySplash: null };
  let description = guild.description;
  if (description == null) {
    description = null;
  }
  obj[2] = description;
  let splash = guild.splash;
  if (splash == null) {
    splash = null;
  }
  obj[3] = splash;
  let banner = guild.banner;
  if (banner == null) {
    banner = null;
  }
  obj[4] = banner;
  let preferredLocale = guild.preferredLocale;
  if (preferredLocale == null) {
    preferredLocale = closure_7.preferredLocale;
  }
  obj[5] = preferredLocale;
  let icon = guild.icon;
  if (icon == null) {
    icon = null;
  }
  obj[6] = icon;
  obj[7] = areSetsEqual.toSetInplace(guild.features);
  let premiumSubscriberCount = guild.premiumSubscriptionCount;
  if (premiumSubscriberCount == null) {
    premiumSubscriberCount = closure_7.premiumSubscriberCount;
  }
  obj[8] = premiumSubscriberCount;
  let discoverySplash = guild.discoverySplash;
  if (discoverySplash == null) {
    discoverySplash = null;
  }
  obj[9] = discoverySplash;
  obj = {};
  const merged = Object.assign(closure_7);
  const merged1 = Object.assign(obj);
  return callback(closure_8, obj);
};
export const fromGuildBasic = function fromGuildBasic(closure_6) {
  let obj = { id: lib.id, name: lib.name, icon: null, description: null, splash: null, discoverySplash: null, features: null };
  let icon = lib.icon;
  if (icon == null) {
    icon = null;
  }
  obj[2] = icon;
  let description = lib.description;
  if (description == null) {
    description = null;
  }
  obj[3] = description;
  let splash = lib.splash;
  if (splash == null) {
    splash = null;
  }
  obj[4] = splash;
  let discovery_splash = lib.discovery_splash;
  if (discovery_splash == null) {
    discovery_splash = null;
  }
  obj[5] = discovery_splash;
  obj[6] = areSetsEqual.toSetInplace(lib.features);
  obj = {};
  const merged = Object.assign(closure_7);
  const merged1 = Object.assign(obj);
  return callback(closure_8, obj);
};
export const dangerouslyConstructGuildRecordFromUntypedObject = function dangerouslyConstructGuildRecordFromUntypedObject(c0) {
  const obj = { id: _require.id, name: tmp, description: tmp2, ownerId: tmp3, icon: tmp4, splash: tmp5, banner: tmp6, homeHeader: tmp7, features: areSetsEqual.toSetInplace(_require.features), preferredLocale: null, afkChannelId: null, afkTimeout: null, systemChannelId: null, verificationLevel: null, joinedAt: null, defaultMessageNotifications: null, mfaLevel: null, application_id: null, explicitContentFilter: null, vanityURLCode: null, premiumTier: null, premiumSubscriberCount: null, premiumProgressBarEnabled: null, premiumProgressBarEnabledUserUpdatedAt: null, systemChannelFlags: null, discoverySplash: null, rulesChannelId: null, safetyAlertsChannelId: null, publicUpdatesChannelId: null, maxStageVideoChannelUsers: null, maxVideoChannelUsers: null, maxMembers: null, nsfwLevel: null, ownerConfiguredContentLevel: null, hubType: null, latestOnboardingQuestionId: null, profile: null, guildTheme: null, premiumFeatures: null, moderatorReporting: null, guildSpaceSettings: null, gameApplicationIds: null, officialMessageColor: null, verificationRoleId: null, incidentsData: null };
  let preferredLocale = _require.preferredLocale;
  if (!preferredLocale) {
    preferredLocale = closure_7.preferredLocale;
  }
  obj[9] = preferredLocale;
  obj[10] = _require.afkChannelId || null;
  obj[11] = _require.afkTimeout;
  obj[12] = _require.systemChannelId || null;
  let verificationLevel = _require.verificationLevel;
  if (!verificationLevel) {
    verificationLevel = closure_7.verificationLevel;
  }
  obj[13] = verificationLevel;
  const joinedAt = _require.joinedAt;
  if (_require.joinedAt instanceof Date) {
    let joinedAt2 = joinedAt;
  } else if (null != joinedAt) {
    const _Date = Date;
    joinedAt2 = new Date(_require.joinedAt);
  } else {
    joinedAt2 = _require.joinedAt;
  }
  obj[14] = joinedAt2;
  let defaultMessageNotifications = _require.defaultMessageNotifications;
  if (!defaultMessageNotifications) {
    defaultMessageNotifications = closure_7.defaultMessageNotifications;
  }
  obj[15] = defaultMessageNotifications;
  let mfaLevel = _require.mfaLevel;
  if (!mfaLevel) {
    mfaLevel = closure_7.mfaLevel;
  }
  obj[16] = mfaLevel;
  obj[17] = _require.application_id || null;
  let explicitContentFilter = _require.explicitContentFilter;
  if (!explicitContentFilter) {
    explicitContentFilter = closure_7.explicitContentFilter;
  }
  obj[18] = explicitContentFilter;
  obj[19] = _require.vanityURLCode || null;
  let premiumTier = _require.premiumTier;
  if (!premiumTier) {
    premiumTier = closure_7.premiumTier;
  }
  obj[20] = premiumTier;
  let premiumSubscriberCount = _require.premiumSubscriberCount;
  if (!premiumSubscriberCount) {
    premiumSubscriberCount = closure_7.premiumSubscriberCount;
  }
  obj[21] = premiumSubscriberCount;
  let premiumProgressBarEnabled = _require.premiumProgressBarEnabled;
  if (!premiumProgressBarEnabled) {
    premiumProgressBarEnabled = closure_7.premiumProgressBarEnabled;
  }
  obj[22] = premiumProgressBarEnabled;
  const premiumProgressBarEnabledUserUpdatedAt = _require.premiumProgressBarEnabledUserUpdatedAt;
  if (_require.premiumProgressBarEnabledUserUpdatedAt instanceof Date) {
    let date = premiumProgressBarEnabledUserUpdatedAt;
  } else {
    date = null;
    if (null != premiumProgressBarEnabledUserUpdatedAt) {
      const _Date2 = Date;
      date = new Date(_require.premiumProgressBarEnabledUserUpdatedAt);
    }
  }
  obj[23] = date;
  obj[24] = _require.systemChannelFlags;
  obj[25] = _require.discoverySplash || null;
  obj[26] = _require.rulesChannelId || null;
  obj[27] = _require.safetyAlertsChannelId || null;
  obj[28] = _require.publicUpdatesChannelId || null;
  let maxStageVideoChannelUsers = _require.maxStageVideoChannelUsers;
  if (!maxStageVideoChannelUsers) {
    maxStageVideoChannelUsers = closure_7.maxStageVideoChannelUsers;
  }
  obj[29] = maxStageVideoChannelUsers;
  let maxVideoChannelUsers = _require.maxVideoChannelUsers;
  if (!maxVideoChannelUsers) {
    maxVideoChannelUsers = closure_7.maxVideoChannelUsers;
  }
  obj[30] = maxVideoChannelUsers;
  let maxMembers = _require.maxMembers;
  if (!maxMembers) {
    maxMembers = closure_7.maxMembers;
  }
  obj[31] = maxMembers;
  let nsfwLevel = _require.nsfwLevel;
  if (nsfwLevel == null) {
    nsfwLevel = closure_7.nsfwLevel;
  }
  obj[32] = nsfwLevel;
  let prop = _require.ownerConfiguredContentLevel;
  if (prop == null) {
    prop = null;
  }
  obj[33] = prop;
  ({ hubType: obj[34], latestOnboardingQuestionId } = _require);
  if (latestOnboardingQuestionId == null) {
    latestOnboardingQuestionId = null;
  }
  obj[35] = latestOnboardingQuestionId;
  let profile = _require.profile;
  if (profile == null) {
    profile = null;
  }
  obj[36] = profile;
  let guildTheme = _require.guildTheme;
  if (guildTheme == null) {
    guildTheme = null;
  }
  obj[37] = guildTheme;
  let premiumFeatures = _require.premiumFeatures;
  if (premiumFeatures == null) {
    premiumFeatures = null;
  }
  obj[38] = premiumFeatures;
  let moderatorReporting = _require.moderatorReporting;
  if (moderatorReporting == null) {
    moderatorReporting = null;
  }
  obj[39] = moderatorReporting;
  let guildSpaceSettings = _require.guildSpaceSettings;
  if (guildSpaceSettings == null) {
    guildSpaceSettings = null;
  }
  obj[40] = guildSpaceSettings;
  let gameApplicationIds = _require.gameApplicationIds;
  if (gameApplicationIds == null) {
    gameApplicationIds = null;
  }
  obj[41] = gameApplicationIds;
  let officialMessageColor = _require.officialMessageColor;
  if (officialMessageColor == null) {
    officialMessageColor = null;
  }
  obj[42] = officialMessageColor;
  let verificationRoleId = _require.verificationRoleId;
  if (verificationRoleId == null) {
    verificationRoleId = null;
  }
  obj[43] = verificationRoleId;
  let incidentsData = _require.incidentsData;
  if (incidentsData == null) {
    incidentsData = null;
  }
  obj[44] = incidentsData;
  return callback(closure_8, obj);
};
export const toGuildProperties = function toGuildProperties(id) {
  let obj = { id: id.id, name: id.name, description: id.description, icon: id.icon, splash: id.splash, banner: id.banner, home_header: id.homeHeader, features: Array.from(id.features), preferred_locale: id.preferredLocale, owner_id: id.ownerId, application_id: id.application_id, afk_channel_id: id.afkChannelId, afk_timeout: id.afkTimeout, system_channel_id: id.systemChannelId, verification_level: id.verificationLevel, explicit_content_filter: id.explicitContentFilter, default_message_notifications: id.defaultMessageNotifications, mfa_level: id.mfaLevel, vanity_url_code: null, premium_tier: null, premium_progress_bar_enabled: null, premium_progress_bar_enabled_user_updated_at: null, premium_features: null, system_channel_flags: null, discovery_splash: null, rules_channel_id: null, safety_alerts_channel_id: null, public_updates_channel_id: null, max_stage_video_channel_users: null, max_video_channel_users: null, max_members: null, nsfw_level: null, nsfw: null, owner_configured_content_level: null, hub_type: null, latest_onboarding_question_id: null, profile: null, theme: null, moderator_reporting: null, guild_space_settings: null, official_message_color: null, incidents_data: null, game_application_ids: null, verification_role_id: null };
  let vanityURLCode = id.vanityURLCode;
  if (vanityURLCode == null) {
    vanityURLCode = null;
  }
  obj[18] = vanityURLCode;
  ({ premiumTier: obj[19], premiumProgressBarEnabled: obj[20], premiumProgressBarEnabledUserUpdatedAt } = id);
  let toISOStringResult;
  if (premiumProgressBarEnabledUserUpdatedAt != null) {
    toISOStringResult = premiumProgressBarEnabledUserUpdatedAt.toISOString();
  }
  if (toISOStringResult == null) {
    toISOStringResult = null;
  }
  obj[21] = toISOStringResult;
  let tmp3 = null;
  if (null != id.premiumFeatures) {
    obj = { features: null, additional_emoji_slots: null, additional_sticker_slots: null, additional_sound_slots: null };
    ({ features: obj2[0], additionalEmojiSlots: obj2[1], additionalStickerSlots: obj2[2], additionalSoundSlots: obj2[3] } = id.premiumFeatures);
    tmp3 = obj;
  }
  obj[22] = tmp3;
  ({ systemChannelFlags: obj[23], discoverySplash: obj[24], rulesChannelId: obj[25], safetyAlertsChannelId: obj[26], publicUpdatesChannelId: obj[27], maxStageVideoChannelUsers: obj[28], maxVideoChannelUsers: obj[29], maxMembers: obj[30], nsfwLevel: obj[31] } = id);
  const items = [, ];
  ({ AGE_RESTRICTED: arr[0], EXPLICIT: arr[1] } = GuildNSFWContentLevel);
  obj[32] = items.includes(id.nsfwLevel);
  ({ ownerConfiguredContentLevel: obj[33], hubType: obj[34], latestOnboardingQuestionId: obj[35], profile: obj[36] } = id);
  let tmp4 = null;
  if (null != id.guildTheme) {
    const guildTheme = id.guildTheme;
    obj = { enabled: null };
    obj[0] = guildTheme.enabled;
    const merged = Object.assign(cloneGuildThemeSettings.toServerGuildThemeSettings(guildTheme.themeSettings));
    tmp4 = obj;
  }
  obj[37] = tmp4;
  let tmp9 = null;
  if (null != id.moderatorReporting) {
    ({ moderatorReportingEnabled: obj5[0], moderatorReportChannelId: obj5[1] } = id.moderatorReporting);
    tmp9 = { moderator_reporting_enabled: null, moderator_report_channel_id: null };
  }
  obj[38] = tmp9;
  ({ guildSpaceSettings: obj[39], officialMessageColor: obj[40] } = id);
  obj[41] = fromServerGuildIncidentsData.toServerGuildIncidentsData(id.incidentsData);
  ({ gameApplicationIds: obj[42], verificationRoleId: obj[43] } = id);
  return obj;
};
export const fromSerializedGuildRecord = function fromSerializedGuildRecord(item10009) {
  const obj = {};
  const merged = Object.assign(closure_7);
  const merged1 = Object.assign(item10009);
  obj.features = areSetsEqual.toSetInplace(item10009.features);
  let date = null;
  if (null != item10009.joinedAt) {
    const _Date = Date;
    date = new Date(item10009.joinedAt);
  }
  obj.joinedAt = date;
  let date1 = null;
  if (null != item10009.premiumProgressBarEnabledUserUpdatedAt) {
    const _Date2 = Date;
    date1 = new Date(item10009.premiumProgressBarEnabledUserUpdatedAt);
  }
  obj.premiumProgressBarEnabledUserUpdatedAt = date1;
  delete tmp2[tmp];
  delete tmp2[tmp];
  return callback(closure_8, obj);
};
export const constructFromPartialGuildRecord = function constructFromPartialGuildRecord(arg0) {
  const merged = Object.assign(closure_7);
  const merged1 = Object.assign(arg0);
  return callback(closure_8, {});
};