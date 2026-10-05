// discord_app/utils/GuildRecordUtils.tsx
import _modDef38 from "../../_runtime/metro/00038__.js";
import Constants from "../Constants.tsx";
import SetUtils from "../../discord_common/js/shared/utils/SetUtils.tsx";
import guildIncidentsSerialization from "../modules/guild_antiraid/guildIncidentsSerialization.tsx";
import guildThemeSerialization from "../modules/guild_themes/guildThemeSerialization.tsx";
import PlainRecord from "../lib/PlainRecord.tsx";
import GuildRecord from "../records/GuildRecord.tsx";
import size from "../../_runtime/metro/00002__.js";

let vanityURLCode;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function fromGuildPropertiesWithAdditionalFields(properties, joinedAt, guildTheme) {
  let afkTimeout;
  let afk_channel_id;
  let application_id;
  let banner;
  let date;
  let description;
  let discovery_splash;
  let explicitContentFilter;
  let game_application_ids;
  let guild_space_settings;
  let home_header;
  let hub_type;
  let icon;
  let maxMembers;
  let maxStageVideoChannelUsers;
  let maxVideoChannelUsers;
  let mfa_level;
  let nsfwLevel;
  let obj2;
  let preferredLocale;
  let premiumProgressBarEnabled;
  let premiumTier;
  let profile;
  let prop;
  let prop1;
  let prop2;
  let prop3;
  let prop4;
  let rules_channel_id;
  let splash;
  let system_channel_id;
  let tmp33;
  let tmp35;
  let tmp36;
  let tmp8Result2;
  let vanity_url_code;
  let verificationLevel;
  let verification_role_id;
  const obj = {
    id: properties.id,
    joinedAt: joinedAt.joinedAt,
    premiumSubscriberCount: joinedAt.premiumSubscriberCount,
    name: properties.name,
    description,
    icon,
    splash,
    banner,
    homeHeader: home_header,
    features: obj2.toSetInplace(properties.features),
    preferredLocale,
    ownerId: null,
    application_id,
    afkChannelId: afk_channel_id,
    afkTimeout,
    systemChannelId: system_channel_id,
    verificationLevel,
    explicitContentFilter,
    defaultMessageNotifications: null,
    mfaLevel: mfa_level,
    vanityURLCode: vanity_url_code,
    premiumTier,
    premiumProgressBarEnabled,
    premiumProgressBarEnabledUserUpdatedAt: date,
    systemChannelFlags: null,
    discoverySplash: discovery_splash,
    rulesChannelId: rules_channel_id,
    safetyAlertsChannelId: prop,
    publicUpdatesChannelId: prop1,
    maxStageVideoChannelUsers,
    maxVideoChannelUsers,
    maxMembers,
    nsfwLevel,
    ownerConfiguredContentLevel: prop2,
    hubType: hub_type,
    latestOnboardingQuestionId: prop3,
    profile,
    guildTheme: tmp33,
    premiumFeatures: tmp35,
    moderatorReporting: tmp36,
    guildSpaceSettings: guild_space_settings,
    verificationRoleId: verification_role_id,
    gameApplicationIds: game_application_ids,
    officialMessageColor: prop4,
    incidentsData: tmp8Result2.fromServerGuildIncidentsData(properties.incidents_data),
  };
  description = properties.description;
  if (description == null) {
    description = null;
  }
  icon = properties.icon;
  if (icon == null) {
    icon = null;
  }
  splash = properties.splash;
  if (splash == null) {
    splash = null;
  }
  banner = properties.banner;
  if (banner == null) {
    banner = null;
  }
  home_header = properties.home_header;
  if (home_header == null) {
    home_header = null;
  }
  preferredLocale = properties.preferred_locale;
  obj2 = SetUtils;
  if (preferredLocale == null) {
    preferredLocale = metroImportDefault.preferredLocale;
  }
  ({ owner_id: obj.ownerId, application_id } = properties);
  if (application_id == null) {
    application_id = null;
  }
  afk_channel_id = properties.afk_channel_id;
  if (afk_channel_id == null) {
    afk_channel_id = null;
  }
  afkTimeout = properties.afk_timeout;
  if (afkTimeout == null) {
    afkTimeout = metroImportDefault.afkTimeout;
  }
  system_channel_id = properties.system_channel_id;
  if (system_channel_id == null) {
    system_channel_id = null;
  }
  verificationLevel = properties.verification_level;
  if (verificationLevel == null) {
    verificationLevel = metroImportDefault.verificationLevel;
  }
  explicitContentFilter = properties.explicit_content_filter;
  if (explicitContentFilter == null) {
    explicitContentFilter = metroImportDefault.explicitContentFilter;
  }
  ({ default_message_notifications: obj.defaultMessageNotifications, mfa_level } = properties);
  if (mfa_level == null) {
    mfa_level = metroImportDefault.mfaLevel;
  }
  vanity_url_code = properties.vanity_url_code;
  if (vanity_url_code == null) {
    vanity_url_code = null;
  }
  premiumTier = properties.premium_tier;
  if (premiumTier == null) {
    premiumTier = metroImportDefault.premiumTier;
  }
  premiumProgressBarEnabled = properties.premium_progress_bar_enabled || metroImportDefault.premiumProgressBarEnabled;
  date = null;
  if (null != properties.premium_progress_bar_enabled_user_updated_at) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date = new Date(properties.premium_progress_bar_enabled_user_updated_at);
  }
  ({ system_channel_flags: obj.systemChannelFlags, discovery_splash } = properties);
  if (discovery_splash == null) {
    discovery_splash = null;
  }
  rules_channel_id = properties.rules_channel_id;
  if (rules_channel_id == null) {
    rules_channel_id = null;
  }
  prop = properties.safety_alerts_channel_id;
  if (prop == null) {
    prop = null;
  }
  prop1 = properties.public_updates_channel_id;
  if (prop1 == null) {
    prop1 = null;
  }
  maxStageVideoChannelUsers = properties.max_stage_video_channel_users;
  if (maxStageVideoChannelUsers == null) {
    maxStageVideoChannelUsers = metroImportDefault.maxStageVideoChannelUsers;
  }
  maxVideoChannelUsers = properties.max_video_channel_users;
  if (maxVideoChannelUsers == null) {
    maxVideoChannelUsers = metroImportDefault.maxVideoChannelUsers;
  }
  maxMembers = properties.max_members;
  if (maxMembers == null) {
    maxMembers = metroImportDefault.maxMembers;
  }
  nsfwLevel = properties.nsfw_level;
  if (nsfwLevel == null) {
    nsfwLevel = metroImportDefault.nsfwLevel;
  }
  prop2 = properties.owner_configured_content_level;
  if (prop2 == null) {
    prop2 = null;
  }
  hub_type = properties.hub_type;
  if (hub_type == null) {
    hub_type = null;
  }
  prop3 = properties.latest_onboarding_question_id;
  if (prop3 == null) {
    prop3 = null;
  }
  profile = properties.profile;
  if (profile == null) {
    profile = null;
  }
  const theme = properties.theme;
  if (undefined === theme) {
    guildTheme = undefined;
    if (guildTheme != null) {
      guildTheme = guildTheme.guildTheme;
    }
    if (guildTheme == null) {
      guildTheme = null;
    }
    tmp33 = guildTheme;
  } else {
    tmp33 = null;
    if (null != theme) {
      const tmp8Result = guildThemeSerialization;
      let fromServerGuildThemeResult = tmp8Result.fromServerGuildTheme(theme);
      if (fromServerGuildThemeResult == null) {
        fromServerGuildThemeResult = { enabled: false, themeSettings: null };
      }
      tmp33 = fromServerGuildThemeResult;
    }
  }
  tmp35 = null;
  if (null != properties.premium_features) {
    const obj3 = {
      features: null,
      additionalEmojiSlots: null,
      additionalStickerSlots: null,
      additionalSoundSlots: null,
    };
    ({
      features: obj5.features,
      additional_emoji_slots: obj5.additionalEmojiSlots,
      additional_sticker_slots: obj5.additionalStickerSlots,
      additional_sound_slots: obj5.additionalSoundSlots,
    } = properties.premium_features);
    tmp35 = obj3;
  }
  tmp36 = null;
  if (null != properties.moderator_reporting) {
    const obj4 = { moderatorReportingEnabled: null, moderatorReportChannelId: null };
    ({
      moderator_reporting_enabled: obj6.moderatorReportingEnabled,
      moderator_report_channel_id: obj6.moderatorReportChannelId,
    } = properties.moderator_reporting);
    tmp36 = obj4;
  }
  guild_space_settings = properties.guild_space_settings;
  if (guild_space_settings == null) {
    guild_space_settings = null;
  }
  verification_role_id = properties.verification_role_id;
  if (verification_role_id == null) {
    verification_role_id = null;
  }
  game_application_ids = properties.game_application_ids;
  if (game_application_ids == null) {
    game_application_ids = null;
  }
  prop4 = properties.official_message_color;
  if (prop4 == null) {
    prop4 = null;
  }
  tmp8Result2 = guildIncidentsSerialization;
  return metroRequire(metroImportAll, guildTheme, obj);
}
({
  constructInPlace: c3,
  merge: closure_4,
  objectIsPlainRecordOfType: hasOwnProperty,
  tryReuseExistingInPlacePlainRecord: metroRequire,
} = PlainRecord);
({ GUILD_DEFAULT_PROPERTY_VALUES: metroImportDefault, GuildRecordTypeTag: metroImportAll } = GuildRecord);
const GuildNSFWContentLevel = Constants.GuildNSFWContentLevel;
const result = size.fileFinishedImporting("utils/GuildRecordUtils.tsx");

export const isGuildRecord = function isGuildRecord(guild) {
  return hasOwnProperty(metroImportAll, guild);
};
export { fromGuildPropertiesWithAdditionalFields };
export const fromServer = function fromServer(joined_at, joinedAt) {
  let date;
  let tmp4;
  if (null != joined_at.joined_at) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date = new Date(joined_at.joined_at);
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
    const obj2 = { joinedAt: date, premiumSubscriberCount: num };
    tmp4 = React3(joinedAt, obj2);
  } else {
    const obj = { joinedAt: date, premiumSubscriberCount: num };
    tmp4 = fromGuildPropertiesWithAdditionalFields(joined_at.properties, obj, joinedAt);
  }
  return tmp4;
};
export const attachSerializedData = function attachSerializedData(guild, roles, selfMember) {
  let tmp4;
  let toISOStringResult;
  let toISOStringResult1;
  const obj = {
    joinedAt: toISOStringResult,
    premiumProgressBarEnabledUserUpdatedAt: toISOStringResult1,
    features: Array.from(guild.features),
    roles,
    member: tmp4,
  };
  const merged = Object.assign(guild);
  toISOStringResult = null;
  if (null != guild.joinedAt) {
    const joinedAt = guild.joinedAt;
    toISOStringResult = joinedAt.toISOString();
  }
  toISOStringResult1 = null;
  if (null != guild.premiumProgressBarEnabledUserUpdatedAt) {
    const premiumProgressBarEnabledUserUpdatedAt = guild.premiumProgressBarEnabledUserUpdatedAt;
    toISOStringResult1 = premiumProgressBarEnabledUserUpdatedAt.toISOString();
  }
  tmp4 = null;
  if (null != selfMember) {
    const obj3 = { userId: null, roles: null };
    ({ userId: obj2.userId, roles: obj2.roles } = selfMember);
    tmp4 = obj3;
  }
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
  let date;
  if (null != guild.joined_at) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date = new Date(guild.joined_at);
  } else {
    date = undefined;
    if (guild2 != null) {
      date = guild2.joinedAt;
    }
    if (date == null) {
      date = null;
    }
  }
  const obj = { joinedAt: date, premiumSubscriberCount: guild.premium_subscription_count };
  return fromGuildPropertiesWithAdditionalFields(guild, obj, guild2);
};
export const fromInviteGuild = function fromInviteGuild(guild) {
  let obj2;
  const obj = {
    id: guild.id,
    name: guild.name,
    description: guild.description,
    icon: guild.icon,
    splash: guild.splash,
    banner: guild.banner,
    features: obj2.toSetInplace(guild.features),
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
  obj2 = SetUtils;
  const obj3 = {};
  const merged = Object.assign(metroImportDefault);
  const merged1 = Object.assign(obj);
  return _false(metroImportAll, obj3);
};
export const fromGuildProfile = function fromGuildProfile(profile) {
  let obj2;
  let premiumSubscriberCount;
  let premiumTier;
  const obj = {
    id: profile.id,
    name: profile.name,
    description: profile.description,
    icon: profile.icon,
    premiumSubscriberCount,
    premiumTier,
    features: obj2.toSetInplace(profile.features),
  };
  premiumSubscriberCount = profile.premiumSubscriberCount;
  if (premiumSubscriberCount == null) {
    premiumSubscriberCount = metroImportDefault.premiumSubscriberCount;
  }
  premiumTier = profile.premiumTier;
  if (premiumTier == null) {
    premiumTier = metroImportDefault.premiumTier;
  }
  obj2 = SetUtils;
  const obj3 = {};
  const merged = Object.assign(metroImportDefault);
  const merged1 = Object.assign(obj);
  return _false(metroImportAll, obj3);
};
export const fromStoreListingGuild = function fromStoreListingGuild(id) {
  let icon;
  const obj = { id: id.id, name: id.name, icon };
  icon = id.icon;
  if (icon == null) {
    icon = null;
  }
  const obj2 = {};
  const merged = Object.assign(metroImportDefault);
  const merged1 = Object.assign(obj);
  return _false(metroImportAll, obj2);
};
export const fromDirectoryGuild = function fromDirectoryGuild(id) {
  let description;
  let icon;
  let obj2;
  let splash;
  const obj = { id: id.id, name: id.name, icon, description, splash, features: obj2.toSetInplace(id.features) };
  icon = id.icon;
  if (icon == null) {
    icon = null;
  }
  description = id.description;
  if (description == null) {
    description = null;
  }
  splash = id.splash;
  if (splash == null) {
    splash = null;
  }
  obj2 = SetUtils;
  const obj3 = {};
  const merged = Object.assign(metroImportDefault);
  const merged1 = Object.assign(obj);
  return _false(metroImportAll, obj3);
};
export const fromGuildDirectoryEntry = function fromGuildDirectoryEntry(entry) {
  let description;
  let icon;
  let obj2;
  let splash;
  let str;
  const obj = { id: entry.guildId, name: str, icon, description, splash, features: obj2.toSetInplace(entry.features) };
  str = entry.name;
  if (str == null) {
    str = "";
  }
  icon = entry.icon;
  if (icon == null) {
    icon = null;
  }
  description = entry.description;
  if (description == null) {
    description = null;
  }
  splash = entry.splash;
  if (splash == null) {
    splash = null;
  }
  obj2 = SetUtils;
  const obj3 = {};
  const merged = Object.assign(metroImportDefault);
  const merged1 = Object.assign(obj);
  return _false(metroImportAll, obj3);
};
export const fromVerificationGateGuild = function fromVerificationGateGuild(stateFromStores1) {
  let description;
  let icon;
  let obj2;
  let splash;
  let verificationLevel;
  const obj = {
    id: stateFromStores1.id,
    name: stateFromStores1.name,
    icon,
    description,
    splash,
    features: obj2.toSetInplace(stateFromStores1.features),
    verificationLevel,
  };
  icon = stateFromStores1.icon;
  if (icon == null) {
    icon = null;
  }
  description = stateFromStores1.description;
  if (description == null) {
    description = null;
  }
  splash = stateFromStores1.splash;
  if (splash == null) {
    splash = null;
  }
  verificationLevel = stateFromStores1.verification_level;
  obj2 = SetUtils;
  if (verificationLevel == null) {
    verificationLevel = metroImportDefault.verificationLevel;
  }
  const obj3 = {};
  const merged = Object.assign(metroImportDefault);
  const merged1 = Object.assign(obj);
  return _false(metroImportAll, obj3);
};
export const fromClientDiscoverableGuild = function fromClientDiscoverableGuild(guild) {
  let banner;
  let description;
  let discoverySplash;
  let icon;
  let obj2;
  let preferredLocale;
  let premiumSubscriberCount;
  let splash;
  const obj = {
    id: guild.id,
    name: guild.name,
    description,
    splash,
    banner,
    preferredLocale,
    icon,
    features: obj2.toSetInplace(guild.features),
    premiumSubscriberCount,
    discoverySplash,
  };
  description = guild.description;
  if (description == null) {
    description = null;
  }
  splash = guild.splash;
  if (splash == null) {
    splash = null;
  }
  banner = guild.banner;
  if (banner == null) {
    banner = null;
  }
  preferredLocale = guild.preferredLocale;
  if (preferredLocale == null) {
    preferredLocale = metroImportDefault.preferredLocale;
  }
  icon = guild.icon;
  if (icon == null) {
    icon = null;
  }
  premiumSubscriberCount = guild.premiumSubscriptionCount;
  obj2 = SetUtils;
  if (premiumSubscriberCount == null) {
    premiumSubscriberCount = metroImportDefault.premiumSubscriberCount;
  }
  discoverySplash = guild.discoverySplash;
  if (discoverySplash == null) {
    discoverySplash = null;
  }
  const obj3 = {};
  const merged = Object.assign(metroImportDefault);
  const merged1 = Object.assign(obj);
  return _false(metroImportAll, obj3);
};
export const fromGuildBasic = function fromGuildBasic(guild) {
  let description;
  let discovery_splash;
  let icon;
  let obj2;
  let splash;
  const obj = {
    id: guild.id,
    name: guild.name,
    icon,
    description,
    splash,
    discoverySplash: discovery_splash,
    features: obj2.toSetInplace(guild.features),
  };
  icon = guild.icon;
  if (icon == null) {
    icon = null;
  }
  description = guild.description;
  if (description == null) {
    description = null;
  }
  splash = guild.splash;
  if (splash == null) {
    splash = null;
  }
  discovery_splash = guild.discovery_splash;
  if (discovery_splash == null) {
    discovery_splash = null;
  }
  obj2 = SetUtils;
  const obj3 = {};
  const merged = Object.assign(metroImportDefault);
  const merged1 = Object.assign(obj);
  return _false(metroImportAll, obj3);
};
export const dangerouslyConstructGuildRecordFromUntypedObject =
  function dangerouslyConstructGuildRecordFromUntypedObject(id) {
    let date;
    let defaultMessageNotifications;
    let explicitContentFilter;
    let gameApplicationIds;
    let guildSpaceSettings;
    let guildTheme;
    let incidentsData;
    let joinedAt2;
    let latestOnboardingQuestionId;
    let maxMembers;
    let maxStageVideoChannelUsers;
    let maxVideoChannelUsers;
    let mfaLevel;
    let moderatorReporting;
    let nsfwLevel;
    let obj2;
    let officialMessageColor;
    let preferredLocale;
    let premiumFeatures;
    let premiumProgressBarEnabled;
    let premiumSubscriberCount;
    let premiumTier;
    let profile;
    let prop;
    let verificationLevel;
    let verificationRoleId;
    const obj = {
      id: id.id,
      name: id.name || "",
      description: id.description || null,
      ownerId: id.ownerId || null,
      icon: id.icon || null,
      splash: id.splash || null,
      banner: id.banner || null,
      homeHeader: id.homeHeader || null,
      features: obj2.toSetInplace(id.features),
      preferredLocale,
      afkChannelId: id.afkChannelId || null,
      afkTimeout: id.afkTimeout,
      systemChannelId: id.systemChannelId || null,
      verificationLevel,
      joinedAt: joinedAt2,
      defaultMessageNotifications,
      mfaLevel,
      application_id: id.application_id || null,
      explicitContentFilter,
      vanityURLCode: id.vanityURLCode || null,
      premiumTier,
      premiumSubscriberCount,
      premiumProgressBarEnabled,
      premiumProgressBarEnabledUserUpdatedAt: date,
      systemChannelFlags: id.systemChannelFlags,
      discoverySplash: id.discoverySplash || null,
      rulesChannelId: id.rulesChannelId || null,
      safetyAlertsChannelId: id.safetyAlertsChannelId || null,
      publicUpdatesChannelId: id.publicUpdatesChannelId || null,
      maxStageVideoChannelUsers,
      maxVideoChannelUsers,
      maxMembers,
      nsfwLevel,
      ownerConfiguredContentLevel: prop,
      hubType: null,
      latestOnboardingQuestionId,
      profile,
      guildTheme,
      premiumFeatures,
      moderatorReporting,
      guildSpaceSettings,
      gameApplicationIds,
      officialMessageColor,
      verificationRoleId,
      incidentsData,
    };
    preferredLocale = id.preferredLocale || metroImportDefault.preferredLocale;
    verificationLevel = id.verificationLevel || metroImportDefault.verificationLevel;
    const joinedAt = id.joinedAt;
    obj2 = SetUtils;
    if (id.joinedAt instanceof Date) {
      joinedAt2 = joinedAt;
    } else if (null != joinedAt) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      joinedAt2 = new Date(id.joinedAt);
    } else {
      joinedAt2 = id.joinedAt;
    }
    defaultMessageNotifications = id.defaultMessageNotifications || metroImportDefault.defaultMessageNotifications;
    mfaLevel = id.mfaLevel || metroImportDefault.mfaLevel;
    explicitContentFilter = id.explicitContentFilter || metroImportDefault.explicitContentFilter;
    premiumTier = id.premiumTier || metroImportDefault.premiumTier;
    premiumSubscriberCount = id.premiumSubscriberCount || metroImportDefault.premiumSubscriberCount;
    premiumProgressBarEnabled = id.premiumProgressBarEnabled || metroImportDefault.premiumProgressBarEnabled;
    const premiumProgressBarEnabledUserUpdatedAt = id.premiumProgressBarEnabledUserUpdatedAt;
    if (id.premiumProgressBarEnabledUserUpdatedAt instanceof Date) {
      date = premiumProgressBarEnabledUserUpdatedAt;
    } else {
      date = null;
      if (null != premiumProgressBarEnabledUserUpdatedAt) {
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        date = new Date(id.premiumProgressBarEnabledUserUpdatedAt);
      }
    }
    maxStageVideoChannelUsers = id.maxStageVideoChannelUsers || metroImportDefault.maxStageVideoChannelUsers;
    maxVideoChannelUsers = id.maxVideoChannelUsers || metroImportDefault.maxVideoChannelUsers;
    maxMembers = id.maxMembers || metroImportDefault.maxMembers;
    nsfwLevel = id.nsfwLevel;
    if (nsfwLevel == null) {
      nsfwLevel = metroImportDefault.nsfwLevel;
    }
    prop = id.ownerConfiguredContentLevel;
    if (prop == null) {
      prop = null;
    }
    ({ hubType: obj.hubType, latestOnboardingQuestionId } = id);
    if (latestOnboardingQuestionId == null) {
      latestOnboardingQuestionId = null;
    }
    profile = id.profile;
    if (profile == null) {
      profile = null;
    }
    guildTheme = id.guildTheme;
    if (guildTheme == null) {
      guildTheme = null;
    }
    premiumFeatures = id.premiumFeatures;
    if (premiumFeatures == null) {
      premiumFeatures = null;
    }
    moderatorReporting = id.moderatorReporting;
    if (moderatorReporting == null) {
      moderatorReporting = null;
    }
    guildSpaceSettings = id.guildSpaceSettings;
    if (guildSpaceSettings == null) {
      guildSpaceSettings = null;
    }
    gameApplicationIds = id.gameApplicationIds;
    if (gameApplicationIds == null) {
      gameApplicationIds = null;
    }
    officialMessageColor = id.officialMessageColor;
    if (officialMessageColor == null) {
      officialMessageColor = null;
    }
    verificationRoleId = id.verificationRoleId;
    if (verificationRoleId == null) {
      verificationRoleId = null;
    }
    incidentsData = id.incidentsData;
    if (incidentsData == null) {
      incidentsData = null;
    }
    return _false(metroImportAll, obj);
  };
export const toGuildProperties = function toGuildProperties(id) {
  let items;
  let obj6;
  let premiumProgressBarEnabledUserUpdatedAt;
  let tmp3;
  let tmp4;
  let tmp9;
  let toISOStringResult;
  const obj = {
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
    vanity_url_code: vanityURLCode,
    premium_tier: null,
    premium_progress_bar_enabled: null,
    premium_progress_bar_enabled_user_updated_at: toISOStringResult,
    premium_features: tmp3,
    system_channel_flags: null,
    discovery_splash: null,
    rules_channel_id: null,
    safety_alerts_channel_id: null,
    public_updates_channel_id: null,
    max_stage_video_channel_users: null,
    max_video_channel_users: null,
    max_members: null,
    nsfw_level: null,
    nsfw: items.includes(id.nsfwLevel),
    owner_configured_content_level: null,
    hub_type: null,
    latest_onboarding_question_id: null,
    profile: null,
    theme: tmp4,
    moderator_reporting: tmp9,
    guild_space_settings: null,
    official_message_color: null,
    incidents_data: obj6.toServerGuildIncidentsData(id.incidentsData),
    game_application_ids: null,
    verification_role_id: null,
  };
  vanityURLCode = id.vanityURLCode;
  if (vanityURLCode == null) {
    vanityURLCode = null;
  }
  ({
    premiumTier: obj.premium_tier,
    premiumProgressBarEnabled: obj.premium_progress_bar_enabled,
    premiumProgressBarEnabledUserUpdatedAt,
  } = id);
  toISOStringResult = undefined;
  if (premiumProgressBarEnabledUserUpdatedAt != null) {
    toISOStringResult = premiumProgressBarEnabledUserUpdatedAt.toISOString();
  }
  if (toISOStringResult == null) {
    toISOStringResult = null;
  }
  tmp3 = null;
  if (null != id.premiumFeatures) {
    const obj3 = {
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
    tmp3 = obj3;
  }
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
  items = [,];
  ({ AGE_RESTRICTED: arr[0], EXPLICIT: arr[1] } = GuildNSFWContentLevel);
  ({
    ownerConfiguredContentLevel: obj.owner_configured_content_level,
    hubType: obj.hub_type,
    latestOnboardingQuestionId: obj.latest_onboarding_question_id,
    profile: obj.profile,
  } = id);
  tmp4 = null;
  if (null != id.guildTheme) {
    const guildTheme = id.guildTheme;
    const obj9 = { enabled: guildTheme.enabled };
    const obj4 = guildThemeSerialization;
    const merged = Object.assign(obj4.toServerGuildThemeSettings(guildTheme.themeSettings));
    tmp4 = obj9;
  }
  tmp9 = null;
  if (null != id.moderatorReporting) {
    const obj10 = { moderator_reporting_enabled: null, moderator_report_channel_id: null };
    ({
      moderatorReportingEnabled: obj5.moderator_reporting_enabled,
      moderatorReportChannelId: obj5.moderator_report_channel_id,
    } = id.moderatorReporting);
    tmp9 = obj10;
  }
  ({ guildSpaceSettings: obj.guild_space_settings, officialMessageColor: obj.official_message_color } = id);
  ({ gameApplicationIds: obj.game_application_ids, verificationRoleId: obj.verification_role_id } = id);
  obj6 = guildIncidentsSerialization;
  return obj;
};
export const fromSerializedGuildRecord = function fromSerializedGuildRecord(item10009) {
  let date;
  let date1;
  let obj2;
  const obj = {
    features: obj2.toSetInplace(item10009.features),
    joinedAt: date,
    premiumProgressBarEnabledUserUpdatedAt: date1,
  };
  const merged = Object.assign(metroImportDefault);
  const merged1 = Object.assign(item10009);
  date = null;
  obj2 = SetUtils;
  if (null != item10009.joinedAt) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date = new Date(item10009.joinedAt);
  }
  date1 = null;
  if (null != item10009.premiumProgressBarEnabledUserUpdatedAt) {
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    date1 = new Date(item10009.premiumProgressBarEnabledUserUpdatedAt);
  }
  delete obj["roles"];
  delete obj["member"];
  return _false(metroImportAll, obj);
};
export const constructFromPartialGuildRecord = function constructFromPartialGuildRecord(arg0) {
  const obj = {};
  const merged = Object.assign(metroImportDefault);
  const merged1 = Object.assign(arg0);
  return _false(metroImportAll, obj);
};
