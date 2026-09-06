// discord_app/utils/GuildRecordUtils.tsx
import _modDef38 from "../../_runtime/metro/00038__.js";
import Constants from "../Constants.tsx";
import SetUtils from "../../discord_common/js/shared/utils/SetUtils.tsx";
import guildIncidentsSerialization from "../modules/guild_antiraid/guildIncidentsSerialization.tsx";
import guildThemeSerialization from "../modules/guild_themes/guildThemeSerialization.tsx";
import PlainRecord from "../lib/PlainRecord.tsx";
import GuildRecord from "../records/GuildRecord.tsx";
import size from "../../_runtime/metro/00002__.js";

function fromGuildPropertiesWithAdditionalFields(properties, joinedAt, guildTheme) {
  let obj = {
    id: properties.id,
    joinedAt: joinedAt.joinedAt,
    premiumSubscriberCount: joinedAt.premiumSubscriberCount,
    name: properties.name,
    description: null,
    icon: null,
    splash: null,
    banner: null,
    homeHeader: null,
    features: null,
    preferredLocale: null,
    ownerId: null,
    application_id: null,
    afkChannelId: null,
    afkTimeout: null,
    systemChannelId: null,
    verificationLevel: null,
    explicitContentFilter: null,
    defaultMessageNotifications: null,
    mfaLevel: null,
    vanityURLCode: null,
    premiumTier: null,
    premiumProgressBarEnabled: null,
    premiumProgressBarEnabledUserUpdatedAt: null,
    systemChannelFlags: null,
    discoverySplash: null,
    rulesChannelId: null,
    safetyAlertsChannelId: null,
    publicUpdatesChannelId: null,
    maxStageVideoChannelUsers: null,
    maxVideoChannelUsers: null,
    maxMembers: null,
    nsfwLevel: null,
    ownerConfiguredContentLevel: null,
    hubType: null,
    latestOnboardingQuestionId: null,
    profile: null,
    guildTheme: null,
    premiumFeatures: null,
    moderatorReporting: null,
    guildSpaceSettings: null,
    verificationRoleId: null,
    gameApplicationIds: null,
    officialMessageColor: null,
    incidentsData: null,
  };
  let description = properties.description;
  if (description == null) {
    description = null;
  }
  obj.description = description;
  let icon = properties.icon;
  if (icon == null) {
    icon = null;
  }
  obj.icon = icon;
  let splash = properties.splash;
  if (splash == null) {
    splash = null;
  }
  obj.splash = splash;
  let banner = properties.banner;
  if (banner == null) {
    banner = null;
  }
  obj.banner = banner;
  let home_header = properties.home_header;
  if (home_header == null) {
    home_header = null;
  }
  obj.homeHeader = home_header;
  obj.features = SetUtils.toSetInplace(properties.features);
  let preferredLocale = properties.preferred_locale;
  if (preferredLocale == null) {
    preferredLocale = React5.preferredLocale;
  }
  obj.preferredLocale = preferredLocale;
  ({ owner_id: obj.ownerId, application_id } = properties);
  if (application_id == null) {
    application_id = null;
  }
  obj.application_id = application_id;
  let afk_channel_id = properties.afk_channel_id;
  if (afk_channel_id == null) {
    afk_channel_id = null;
  }
  obj.afkChannelId = afk_channel_id;
  let afkTimeout = properties.afk_timeout;
  if (afkTimeout == null) {
    afkTimeout = React5.afkTimeout;
  }
  obj.afkTimeout = afkTimeout;
  let system_channel_id = properties.system_channel_id;
  if (system_channel_id == null) {
    system_channel_id = null;
  }
  obj.systemChannelId = system_channel_id;
  let verificationLevel = properties.verification_level;
  if (verificationLevel == null) {
    verificationLevel = React5.verificationLevel;
  }
  obj.verificationLevel = verificationLevel;
  let explicitContentFilter = properties.explicit_content_filter;
  if (explicitContentFilter == null) {
    explicitContentFilter = React5.explicitContentFilter;
  }
  obj.explicitContentFilter = explicitContentFilter;
  ({ default_message_notifications: obj.defaultMessageNotifications, mfa_level } = properties);
  if (mfa_level == null) {
    mfa_level = React5.mfaLevel;
  }
  obj.mfaLevel = mfa_level;
  let vanity_url_code = properties.vanity_url_code;
  if (vanity_url_code == null) {
    vanity_url_code = null;
  }
  obj.vanityURLCode = vanity_url_code;
  let premiumTier = properties.premium_tier;
  if (premiumTier == null) {
    premiumTier = React5.premiumTier;
  }
  obj.premiumTier = premiumTier;
  let premiumProgressBarEnabled = properties.premium_progress_bar_enabled;
  if (!premiumProgressBarEnabled) {
    premiumProgressBarEnabled = React5.premiumProgressBarEnabled;
  }
  obj.premiumProgressBarEnabled = premiumProgressBarEnabled;
  let date = null;
  if (null != properties.premium_progress_bar_enabled_user_updated_at) {
    const _Date = Date;
    date = new Date(properties.premium_progress_bar_enabled_user_updated_at);
  }
  obj.premiumProgressBarEnabledUserUpdatedAt = date;
  ({ system_channel_flags: obj.systemChannelFlags, discovery_splash } = properties);
  if (discovery_splash == null) {
    discovery_splash = null;
  }
  obj.discoverySplash = discovery_splash;
  let rules_channel_id = properties.rules_channel_id;
  if (rules_channel_id == null) {
    rules_channel_id = null;
  }
  obj.rulesChannelId = rules_channel_id;
  let prop = properties.safety_alerts_channel_id;
  if (prop == null) {
    prop = null;
  }
  obj.safetyAlertsChannelId = prop;
  let prop1 = properties.public_updates_channel_id;
  if (prop1 == null) {
    prop1 = null;
  }
  obj.publicUpdatesChannelId = prop1;
  let maxStageVideoChannelUsers = properties.max_stage_video_channel_users;
  if (maxStageVideoChannelUsers == null) {
    maxStageVideoChannelUsers = React5.maxStageVideoChannelUsers;
  }
  obj.maxStageVideoChannelUsers = maxStageVideoChannelUsers;
  let maxVideoChannelUsers = properties.max_video_channel_users;
  if (maxVideoChannelUsers == null) {
    maxVideoChannelUsers = React5.maxVideoChannelUsers;
  }
  obj.maxVideoChannelUsers = maxVideoChannelUsers;
  let maxMembers = properties.max_members;
  if (maxMembers == null) {
    maxMembers = React5.maxMembers;
  }
  obj.maxMembers = maxMembers;
  let nsfwLevel = properties.nsfw_level;
  if (nsfwLevel == null) {
    nsfwLevel = React5.nsfwLevel;
  }
  obj.nsfwLevel = nsfwLevel;
  let prop2 = properties.owner_configured_content_level;
  if (prop2 == null) {
    prop2 = null;
  }
  obj.ownerConfiguredContentLevel = prop2;
  let hub_type = properties.hub_type;
  if (hub_type == null) {
    hub_type = null;
  }
  obj.hubType = hub_type;
  let prop3 = properties.latest_onboarding_question_id;
  if (prop3 == null) {
    prop3 = null;
  }
  obj.latestOnboardingQuestionId = prop3;
  let profile = properties.profile;
  if (profile == null) {
    profile = null;
  }
  obj.profile = profile;
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
      let tmp8Result = tmp8(1978);
      let fromServerGuildThemeResult = tmp8Result.fromServerGuildTheme(theme);
      if (fromServerGuildThemeResult == null) {
        fromServerGuildThemeResult = { enabled: false, themeSettings: null };
      }
      tmp35 = fromServerGuildThemeResult;
    }
  }
  obj.guildTheme = tmp35;
  let tmp37 = null;
  if (null != properties.premium_features) {
    obj = { features: null, additionalEmojiSlots: null, additionalStickerSlots: null, additionalSoundSlots: null };
    ({
      features: obj5.features,
      additional_emoji_slots: obj5.additionalEmojiSlots,
      additional_sticker_slots: obj5.additionalStickerSlots,
      additional_sound_slots: obj5.additionalSoundSlots,
    } = properties.premium_features);
    tmp37 = obj;
  }
  obj.premiumFeatures = tmp37;
  let tmp38 = null;
  if (null != properties.moderator_reporting) {
    obj = { moderatorReportingEnabled: null, moderatorReportChannelId: null };
    ({
      moderator_reporting_enabled: obj6.moderatorReportingEnabled,
      moderator_report_channel_id: obj6.moderatorReportChannelId,
    } = properties.moderator_reporting);
    tmp38 = obj;
  }
  obj.moderatorReporting = tmp38;
  let guild_space_settings = properties.guild_space_settings;
  if (guild_space_settings == null) {
    guild_space_settings = null;
  }
  obj.guildSpaceSettings = guild_space_settings;
  let verification_role_id = properties.verification_role_id;
  if (verification_role_id == null) {
    verification_role_id = null;
  }
  obj.verificationRoleId = verification_role_id;
  let game_application_ids = properties.game_application_ids;
  if (game_application_ids == null) {
    game_application_ids = null;
  }
  obj.gameApplicationIds = game_application_ids;
  let prop4 = properties.official_message_color;
  if (prop4 == null) {
    prop4 = null;
  }
  obj.officialMessageColor = prop4;
  tmp8Result = tmp8(1977);
  obj.incidentsData = tmp8Result.fromServerGuildIncidentsData(properties.incidents_data);
  return timestampProducer(React6, guildTheme, obj);
}
({
  constructInPlace: c3,
  merge: closure_4,
  objectIsPlainRecordOfType: hasOwnProperty,
  tryReuseExistingInPlacePlainRecord: metroRequire,
} = PlainRecord);
({ GUILD_DEFAULT_PROPERTY_VALUES: closure_7, GuildRecordTypeTag: closure_8 } = GuildRecord);
const GuildNSFWContentLevel = Constants.GuildNSFWContentLevel;
const result = size.fileFinishedImporting("utils/GuildRecordUtils.tsx");

export const isGuildRecord = function isGuildRecord(has) {
  return hasOwnProperty(React6, has);
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
    let obj = { joinedAt: date, premiumSubscriberCount: num };
    let tmp6 = React4(joinedAt, obj);
  } else {
    obj = { joinedAt: date, premiumSubscriberCount: num };
    tmp6 = fromGuildPropertiesWithAdditionalFields(joined_at.properties, obj, joinedAt);
  }
  return tmp6;
};
export const attachSerializedData = function attachSerializedData(guild, roles, selfMember) {
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
  obj.roles = roles;
  let tmp4 = null;
  if (null != selfMember) {
    obj = { userId: null, roles: null };
    ({ userId: obj2.userId, roles: obj2.roles } = selfMember);
    tmp4 = obj;
  }
  obj.member = tmp4;
  return obj;
};
export const fromBackgroundSync = function fromBackgroundSync(properties, guildTheme) {
  let tmp = guildTheme;
  if (null != properties.properties) {
    const obj = { joinedAt: null, premiumSubscriberCount: null };
    ({ joinedAt: obj.joinedAt, premiumSubscriberCount: obj.premiumSubscriberCount } = guildTheme);
    tmp = fromGuildPropertiesWithAdditionalFields(properties.properties, obj, guildTheme);
  }
  return tmp;
};
export const fromGuild = function fromGuild(guild, guild2) {
  if (null != guild.joined_at) {
    const _Date = Date;
    let date = new Date(guild.joined_at);
  } else {
    date = undefined;
    if (guild2 != null) {
      date = guild2.joinedAt;
    }
    if (date == null) {
      date = null;
    }
  }
  return fromGuildPropertiesWithAdditionalFields(
    guild,
    { joinedAt: date, premiumSubscriberCount: guild.premium_subscription_count },
    guild2,
  );
};
export const fromInviteGuild = function fromInviteGuild(guild) {
  let obj = {
    id: guild.id,
    name: guild.name,
    description: guild.description,
    icon: guild.icon,
    splash: guild.splash,
    banner: guild.banner,
    features: SetUtils.toSetInplace(guild.features),
    verificationLevel: null,
    vanityURLCode: null,
    premiumSubscriberCount: null,
    nsfwLevel: null,
    premiumTier: null,
    homeHeader: null,
  };
  ({
    verification_level: obj.verificationLevel,
    vanity_url_code: obj.vanityURLCode,
    premium_subscription_count: obj.premiumSubscriberCount,
    nsfw_level: obj.nsfwLevel,
    premium_tier: obj.premiumTier,
    home_header: obj.homeHeader,
  } = guild);
  obj = {};
  const merged = Object.assign(React5);
  const merged1 = Object.assign(obj);
  return React3(React6, obj);
};
export const fromGuildProfile = function fromGuildProfile(profile) {
  let obj = {
    id: profile.id,
    name: profile.name,
    description: profile.description,
    icon: profile.icon,
    premiumSubscriberCount: null,
    premiumTier: null,
    features: null,
  };
  let premiumSubscriberCount = profile.premiumSubscriberCount;
  if (premiumSubscriberCount == null) {
    premiumSubscriberCount = React5.premiumSubscriberCount;
  }
  obj.premiumSubscriberCount = premiumSubscriberCount;
  let premiumTier = profile.premiumTier;
  if (premiumTier == null) {
    premiumTier = React5.premiumTier;
  }
  obj.premiumTier = premiumTier;
  obj.features = SetUtils.toSetInplace(profile.features);
  obj = {};
  const merged = Object.assign(React5);
  const merged1 = Object.assign(obj);
  return React3(React6, obj);
};
export const fromStoreListingGuild = function fromStoreListingGuild(id) {
  let obj = { id: id.id, name: id.name, icon: null };
  let icon = id.icon;
  if (icon == null) {
    icon = null;
  }
  obj.icon = icon;
  obj = {};
  const merged = Object.assign(React5);
  const merged1 = Object.assign(obj);
  return React3(React6, obj);
};
export const fromDirectoryGuild = function fromDirectoryGuild(id) {
  let obj = { id: id.id, name: id.name, icon: null, description: null, splash: null, features: null };
  let icon = id.icon;
  if (icon == null) {
    icon = null;
  }
  obj.icon = icon;
  let description = id.description;
  if (description == null) {
    description = null;
  }
  obj.description = description;
  let splash = id.splash;
  if (splash == null) {
    splash = null;
  }
  obj.splash = splash;
  obj.features = SetUtils.toSetInplace(id.features);
  obj = {};
  const merged = Object.assign(React5);
  const merged1 = Object.assign(obj);
  return React3(React6, obj);
};
export const fromGuildDirectoryEntry = function fromGuildDirectoryEntry(entry) {
  let obj = { id: entry.guildId, name: null, icon: null, description: null, splash: null, features: null };
  let str = entry.name;
  if (str == null) {
    str = "";
  }
  obj.name = str;
  let icon = entry.icon;
  if (icon == null) {
    icon = null;
  }
  obj.icon = icon;
  let description = entry.description;
  if (description == null) {
    description = null;
  }
  obj.description = description;
  let splash = entry.splash;
  if (splash == null) {
    splash = null;
  }
  obj.splash = splash;
  obj.features = SetUtils.toSetInplace(entry.features);
  obj = {};
  const merged = Object.assign(React5);
  const merged1 = Object.assign(obj);
  return React3(React6, obj);
};
export const fromVerificationGateGuild = function fromVerificationGateGuild(stateFromStores1) {
  let obj = {
    id: stateFromStores1.id,
    name: stateFromStores1.name,
    icon: null,
    description: null,
    splash: null,
    features: null,
    verificationLevel: null,
  };
  let icon = stateFromStores1.icon;
  if (icon == null) {
    icon = null;
  }
  obj.icon = icon;
  let description = stateFromStores1.description;
  if (description == null) {
    description = null;
  }
  obj.description = description;
  let splash = stateFromStores1.splash;
  if (splash == null) {
    splash = null;
  }
  obj.splash = splash;
  obj.features = SetUtils.toSetInplace(stateFromStores1.features);
  let verificationLevel = stateFromStores1.verification_level;
  if (verificationLevel == null) {
    verificationLevel = React5.verificationLevel;
  }
  obj.verificationLevel = verificationLevel;
  obj = {};
  const merged = Object.assign(React5);
  const merged1 = Object.assign(obj);
  return React3(React6, obj);
};
export const fromClientDiscoverableGuild = function fromClientDiscoverableGuild(guild) {
  let obj = {
    id: guild.id,
    name: guild.name,
    description: null,
    splash: null,
    banner: null,
    preferredLocale: null,
    icon: null,
    features: null,
    premiumSubscriberCount: null,
    discoverySplash: null,
  };
  let description = guild.description;
  if (description == null) {
    description = null;
  }
  obj.description = description;
  let splash = guild.splash;
  if (splash == null) {
    splash = null;
  }
  obj.splash = splash;
  let banner = guild.banner;
  if (banner == null) {
    banner = null;
  }
  obj.banner = banner;
  let preferredLocale = guild.preferredLocale;
  if (preferredLocale == null) {
    preferredLocale = React5.preferredLocale;
  }
  obj.preferredLocale = preferredLocale;
  let icon = guild.icon;
  if (icon == null) {
    icon = null;
  }
  obj.icon = icon;
  obj.features = SetUtils.toSetInplace(guild.features);
  let premiumSubscriberCount = guild.premiumSubscriptionCount;
  if (premiumSubscriberCount == null) {
    premiumSubscriberCount = React5.premiumSubscriberCount;
  }
  obj.premiumSubscriberCount = premiumSubscriberCount;
  let discoverySplash = guild.discoverySplash;
  if (discoverySplash == null) {
    discoverySplash = null;
  }
  obj.discoverySplash = discoverySplash;
  obj = {};
  const merged = Object.assign(React5);
  const merged1 = Object.assign(obj);
  return React3(React6, obj);
};
export const fromGuildBasic = function fromGuildBasic(id) {
  let obj = {
    id: id.id,
    name: id.name,
    icon: null,
    description: null,
    splash: null,
    discoverySplash: null,
    features: null,
  };
  let icon = id.icon;
  if (icon == null) {
    icon = null;
  }
  obj.icon = icon;
  let description = id.description;
  if (description == null) {
    description = null;
  }
  obj.description = description;
  let splash = id.splash;
  if (splash == null) {
    splash = null;
  }
  obj.splash = splash;
  let discovery_splash = id.discovery_splash;
  if (discovery_splash == null) {
    discovery_splash = null;
  }
  obj.discoverySplash = discovery_splash;
  obj.features = SetUtils.toSetInplace(id.features);
  obj = {};
  const merged = Object.assign(React5);
  const merged1 = Object.assign(obj);
  return React3(React6, obj);
};
export const dangerouslyConstructGuildRecordFromUntypedObject =
  function dangerouslyConstructGuildRecordFromUntypedObject(id) {
    const obj = {
      id: id.id,
      name: id.name || "",
      description: id.description || null,
      ownerId: id.ownerId || null,
      icon: id.icon || null,
      splash: id.splash || null,
      banner: id.banner || null,
      homeHeader: id.homeHeader || null,
      features: SetUtils.toSetInplace(id.features),
      preferredLocale: null,
      afkChannelId: null,
      afkTimeout: null,
      systemChannelId: null,
      verificationLevel: null,
      joinedAt: null,
      defaultMessageNotifications: null,
      mfaLevel: null,
      application_id: null,
      explicitContentFilter: null,
      vanityURLCode: null,
      premiumTier: null,
      premiumSubscriberCount: null,
      premiumProgressBarEnabled: null,
      premiumProgressBarEnabledUserUpdatedAt: null,
      systemChannelFlags: null,
      discoverySplash: null,
      rulesChannelId: null,
      safetyAlertsChannelId: null,
      publicUpdatesChannelId: null,
      maxStageVideoChannelUsers: null,
      maxVideoChannelUsers: null,
      maxMembers: null,
      nsfwLevel: null,
      ownerConfiguredContentLevel: null,
      hubType: null,
      latestOnboardingQuestionId: null,
      profile: null,
      guildTheme: null,
      premiumFeatures: null,
      moderatorReporting: null,
      guildSpaceSettings: null,
      gameApplicationIds: null,
      officialMessageColor: null,
      verificationRoleId: null,
      incidentsData: null,
    };
    let preferredLocale = id.preferredLocale;
    if (!preferredLocale) {
      preferredLocale = React5.preferredLocale;
    }
    obj.preferredLocale = preferredLocale;
    obj.afkChannelId = id.afkChannelId || null;
    obj.afkTimeout = id.afkTimeout;
    obj.systemChannelId = id.systemChannelId || null;
    let verificationLevel = id.verificationLevel;
    if (!verificationLevel) {
      verificationLevel = React5.verificationLevel;
    }
    obj.verificationLevel = verificationLevel;
    const joinedAt = id.joinedAt;
    if (id.joinedAt instanceof Date) {
      let joinedAt2 = joinedAt;
    } else if (null != joinedAt) {
      const _Date = Date;
      joinedAt2 = new Date(id.joinedAt);
    } else {
      joinedAt2 = id.joinedAt;
    }
    obj.joinedAt = joinedAt2;
    let defaultMessageNotifications = id.defaultMessageNotifications;
    if (!defaultMessageNotifications) {
      defaultMessageNotifications = React5.defaultMessageNotifications;
    }
    obj.defaultMessageNotifications = defaultMessageNotifications;
    let mfaLevel = id.mfaLevel;
    if (!mfaLevel) {
      mfaLevel = React5.mfaLevel;
    }
    obj.mfaLevel = mfaLevel;
    obj.application_id = id.application_id || null;
    let explicitContentFilter = id.explicitContentFilter;
    if (!explicitContentFilter) {
      explicitContentFilter = React5.explicitContentFilter;
    }
    obj.explicitContentFilter = explicitContentFilter;
    obj.vanityURLCode = id.vanityURLCode || null;
    let premiumTier = id.premiumTier;
    if (!premiumTier) {
      premiumTier = React5.premiumTier;
    }
    obj.premiumTier = premiumTier;
    let premiumSubscriberCount = id.premiumSubscriberCount;
    if (!premiumSubscriberCount) {
      premiumSubscriberCount = React5.premiumSubscriberCount;
    }
    obj.premiumSubscriberCount = premiumSubscriberCount;
    let premiumProgressBarEnabled = id.premiumProgressBarEnabled;
    if (!premiumProgressBarEnabled) {
      premiumProgressBarEnabled = React5.premiumProgressBarEnabled;
    }
    obj.premiumProgressBarEnabled = premiumProgressBarEnabled;
    const premiumProgressBarEnabledUserUpdatedAt = id.premiumProgressBarEnabledUserUpdatedAt;
    if (id.premiumProgressBarEnabledUserUpdatedAt instanceof Date) {
      let date = premiumProgressBarEnabledUserUpdatedAt;
    } else {
      date = null;
      if (null != premiumProgressBarEnabledUserUpdatedAt) {
        const _Date2 = Date;
        date = new Date(id.premiumProgressBarEnabledUserUpdatedAt);
      }
    }
    obj.premiumProgressBarEnabledUserUpdatedAt = date;
    obj.systemChannelFlags = id.systemChannelFlags;
    obj.discoverySplash = id.discoverySplash || null;
    obj.rulesChannelId = id.rulesChannelId || null;
    obj.safetyAlertsChannelId = id.safetyAlertsChannelId || null;
    obj.publicUpdatesChannelId = id.publicUpdatesChannelId || null;
    let maxStageVideoChannelUsers = id.maxStageVideoChannelUsers;
    if (!maxStageVideoChannelUsers) {
      maxStageVideoChannelUsers = React5.maxStageVideoChannelUsers;
    }
    obj.maxStageVideoChannelUsers = maxStageVideoChannelUsers;
    let maxVideoChannelUsers = id.maxVideoChannelUsers;
    if (!maxVideoChannelUsers) {
      maxVideoChannelUsers = React5.maxVideoChannelUsers;
    }
    obj.maxVideoChannelUsers = maxVideoChannelUsers;
    let maxMembers = id.maxMembers;
    if (!maxMembers) {
      maxMembers = React5.maxMembers;
    }
    obj.maxMembers = maxMembers;
    let nsfwLevel = id.nsfwLevel;
    if (nsfwLevel == null) {
      nsfwLevel = React5.nsfwLevel;
    }
    obj.nsfwLevel = nsfwLevel;
    let prop = id.ownerConfiguredContentLevel;
    if (prop == null) {
      prop = null;
    }
    obj.ownerConfiguredContentLevel = prop;
    ({ hubType: obj.hubType, latestOnboardingQuestionId } = id);
    if (latestOnboardingQuestionId == null) {
      latestOnboardingQuestionId = null;
    }
    obj.latestOnboardingQuestionId = latestOnboardingQuestionId;
    let profile = id.profile;
    if (profile == null) {
      profile = null;
    }
    obj.profile = profile;
    let guildTheme = id.guildTheme;
    if (guildTheme == null) {
      guildTheme = null;
    }
    obj.guildTheme = guildTheme;
    let premiumFeatures = id.premiumFeatures;
    if (premiumFeatures == null) {
      premiumFeatures = null;
    }
    obj.premiumFeatures = premiumFeatures;
    let moderatorReporting = id.moderatorReporting;
    if (moderatorReporting == null) {
      moderatorReporting = null;
    }
    obj.moderatorReporting = moderatorReporting;
    let guildSpaceSettings = id.guildSpaceSettings;
    if (guildSpaceSettings == null) {
      guildSpaceSettings = null;
    }
    obj.guildSpaceSettings = guildSpaceSettings;
    let gameApplicationIds = id.gameApplicationIds;
    if (gameApplicationIds == null) {
      gameApplicationIds = null;
    }
    obj.gameApplicationIds = gameApplicationIds;
    let officialMessageColor = id.officialMessageColor;
    if (officialMessageColor == null) {
      officialMessageColor = null;
    }
    obj.officialMessageColor = officialMessageColor;
    let verificationRoleId = id.verificationRoleId;
    if (verificationRoleId == null) {
      verificationRoleId = null;
    }
    obj.verificationRoleId = verificationRoleId;
    let incidentsData = id.incidentsData;
    if (incidentsData == null) {
      incidentsData = null;
    }
    obj.incidentsData = incidentsData;
    return React3(React6, obj);
  };
export const toGuildProperties = function toGuildProperties(id) {
  let obj = {
    id: id.id,
    name: id.name,
    description: id.description,
    icon: id.icon,
    splash: id.splash,
    banner: id.banner,
    home_header: id.homeHeader,
    features: Array.from(id.features),
    preferred_locale: id.preferredLocale,
    owner_id: id.ownerId,
    application_id: id.application_id,
    afk_channel_id: id.afkChannelId,
    afk_timeout: id.afkTimeout,
    system_channel_id: id.systemChannelId,
    verification_level: id.verificationLevel,
    explicit_content_filter: id.explicitContentFilter,
    default_message_notifications: id.defaultMessageNotifications,
    mfa_level: id.mfaLevel,
    vanity_url_code: null,
    premium_tier: null,
    premium_progress_bar_enabled: null,
    premium_progress_bar_enabled_user_updated_at: null,
    premium_features: null,
    system_channel_flags: null,
    discovery_splash: null,
    rules_channel_id: null,
    safety_alerts_channel_id: null,
    public_updates_channel_id: null,
    max_stage_video_channel_users: null,
    max_video_channel_users: null,
    max_members: null,
    nsfw_level: null,
    nsfw: null,
    owner_configured_content_level: null,
    hub_type: null,
    latest_onboarding_question_id: null,
    profile: null,
    theme: null,
    moderator_reporting: null,
    guild_space_settings: null,
    official_message_color: null,
    incidents_data: null,
    game_application_ids: null,
    verification_role_id: null,
  };
  let vanityURLCode = id.vanityURLCode;
  if (vanityURLCode == null) {
    vanityURLCode = null;
  }
  obj.vanity_url_code = vanityURLCode;
  ({
    premiumTier: obj.premium_tier,
    premiumProgressBarEnabled: obj.premium_progress_bar_enabled,
    premiumProgressBarEnabledUserUpdatedAt,
  } = id);
  let toISOStringResult;
  if (premiumProgressBarEnabledUserUpdatedAt != null) {
    toISOStringResult = premiumProgressBarEnabledUserUpdatedAt.toISOString();
  }
  if (toISOStringResult == null) {
    toISOStringResult = null;
  }
  obj.premium_progress_bar_enabled_user_updated_at = toISOStringResult;
  let tmp3 = null;
  if (null != id.premiumFeatures) {
    obj = {
      features: null,
      additional_emoji_slots: null,
      additional_sticker_slots: null,
      additional_sound_slots: null,
    };
    ({
      features: obj2.features,
      additionalEmojiSlots: obj2.additional_emoji_slots,
      additionalStickerSlots: obj2.additional_sticker_slots,
      additionalSoundSlots: obj2.additional_sound_slots,
    } = id.premiumFeatures);
    tmp3 = obj;
  }
  obj.premium_features = tmp3;
  ({
    systemChannelFlags: obj.system_channel_flags,
    discoverySplash: obj.discovery_splash,
    rulesChannelId: obj.rules_channel_id,
    safetyAlertsChannelId: obj.safety_alerts_channel_id,
    publicUpdatesChannelId: obj.public_updates_channel_id,
    maxStageVideoChannelUsers: obj.max_stage_video_channel_users,
    maxVideoChannelUsers: obj.max_video_channel_users,
    maxMembers: obj.max_members,
    nsfwLevel: obj.nsfw_level,
  } = id);
  const items = [,];
  ({ AGE_RESTRICTED: arr[0], EXPLICIT: arr[1] } = GuildNSFWContentLevel);
  obj.nsfw = items.includes(id.nsfwLevel);
  ({
    ownerConfiguredContentLevel: obj.owner_configured_content_level,
    hubType: obj.hub_type,
    latestOnboardingQuestionId: obj.latest_onboarding_question_id,
    profile: obj.profile,
  } = id);
  let tmp4 = null;
  if (null != id.guildTheme) {
    const guildTheme = id.guildTheme;
    obj = { enabled: guildTheme.enabled };
    const merged = Object.assign(guildThemeSerialization.toServerGuildThemeSettings(guildTheme.themeSettings));
    tmp4 = obj;
  }
  obj.theme = tmp4;
  let tmp9 = null;
  if (null != id.moderatorReporting) {
    ({
      moderatorReportingEnabled: obj5.moderator_reporting_enabled,
      moderatorReportChannelId: obj5.moderator_report_channel_id,
    } = id.moderatorReporting);
    tmp9 = { moderator_reporting_enabled: null, moderator_report_channel_id: null };
    const obj1 = { moderator_reporting_enabled: null, moderator_report_channel_id: null };
  }
  obj.moderator_reporting = tmp9;
  ({ guildSpaceSettings: obj.guild_space_settings, officialMessageColor: obj.official_message_color } = id);
  obj.incidents_data = guildIncidentsSerialization.toServerGuildIncidentsData(id.incidentsData);
  ({ gameApplicationIds: obj.game_application_ids, verificationRoleId: obj.verification_role_id } = id);
  return obj;
};
export const fromSerializedGuildRecord = function fromSerializedGuildRecord(item10009) {
  const obj = {};
  const merged = Object.assign(React5);
  const merged1 = Object.assign(item10009);
  obj.features = SetUtils.toSetInplace(item10009.features);
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
  return React3(React6, obj);
};
export const constructFromPartialGuildRecord = function constructFromPartialGuildRecord(arg0) {
  const merged = Object.assign(React5);
  const merged1 = Object.assign(arg0);
  return React3(React6, {});
};
