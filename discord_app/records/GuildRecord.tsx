// === Module 1975: GuildRecord ===

// Module 1975 (GuildRecord)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import StringUtils from "StringUtils" /* 1925 */;
import ServerNSFWLevelExperiment from "ServerNSFWLevelExperiment" /* 1976 */;
import PlainRecord from "PlainRecord" /* 1972 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ set: c3, TypeTag } = PlainRecord);
const GuildNSFWContentLevel = Constants.GuildNSFWContentLevel;
const MFALevels = Constants.MFALevels;
const items = [, ];
({ EXPLICIT: arr[0], AGE_RESTRICTED: arr[1] } = GuildNSFWContentLevel);
({ BoostedGuildTiers, GuildExplicitContentFilterTypes, UserNotificationSettings, VerificationLevels } = Constants);
const set = new Set(items);
let obj = { mfaLevel: MFALevels.NONE, preferredLocale: "en-US", afkTimeout: 0, defaultMessageNotifications: UserNotificationSettings.ALL_MESSAGES, verificationLevel: VerificationLevels.NONE, explicitContentFilter: GuildExplicitContentFilterTypes.DISABLED, premiumProgressBarEnabled: false, premiumProgressBarEnabledUserUpdatedAt: null, systemChannelFlags: 0, maxStageVideoChannelUsers: -1, maxVideoChannelUsers: -1, maxMembers: -1, premiumTier: BoostedGuildTiers.NONE, nsfwLevel: GuildNSFWContentLevel.DEFAULT, premiumSubscriberCount: 0, features: new Set(), description: null, icon: null, ownerId: null, systemChannelId: null, joinedAt: null, discoverySplash: null, splash: null, banner: null, homeHeader: null, afkChannelId: null, application_id: null, vanityURLCode: null, rulesChannelId: null, safetyAlertsChannelId: null, publicUpdatesChannelId: null, ownerConfiguredContentLevel: null, hubType: null, latestOnboardingQuestionId: null, profile: null, guildTheme: null, premiumFeatures: null, moderatorReporting: null, guildSpaceSettings: null, verificationRoleId: null, gameApplicationIds: null, officialMessageColor: null, incidentsData: null };
const frozen = Object.freeze(obj);
const result = size.fileFinishedImporting("records/GuildRecord.tsx");

export const GuildRecordTypeTag = "Guild";
export const RESTRICTED_CONTENT_LEVELS = set;
export const GUILD_DEFAULT_PROPERTY_VALUES = frozen;
export const getGuildIconURL = function getGuildIconURL(id, size) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let flag2 = arg3;
  if (arg3 === undefined) {
    flag2 = false;
  }
  const obj = { id: id.id, size, icon: id.icon, canAnimate: flag, lossless: flag2 };
  return obj.getGuildIconURL(obj);
};
export const getGuildIconSource = function getGuildIconSource(arg0, size) {
  closure_0 = arg0;
  importDefault = size;
  if (flag === undefined) {
    flag = false;
  }
  return AvatarUtilsDefault.getAnimatableSourceWithFallback(flag, (canAnimate) => {
    const obj = { id: closure_0.id, size, icon: closure_0.icon, canAnimate };
    return obj.getGuildIconSource(obj);
  });
};
export const getGuildAcronym = function getGuildAcronym(guild) {
  return StringUtils.getAcronym(guild.name);
};
export const isGuildOwner = function isGuildOwner(guild, currentUser) {
  let tmp = currentUser;
  if (typeof currentUser !== "string") {
    let id = null;
    if (null != currentUser) {
      id = currentUser.id;
    }
    tmp = id;
  }
  return guild.ownerId === tmp;
};
export const isGuildOwnerWithRequiredMfaLevel = function isGuildOwnerWithRequiredMfaLevel(mfaLevel, mfaEnabled) {
  mfaEnabled = mfaEnabled.mfaEnabled;
  let tmp = !mfaEnabled;
  if (!mfaEnabled) {
    tmp = mfaLevel.mfaLevel === MFALevels.ELEVATED;
  }
  let tmp3 = !tmp;
  if (!tmp) {
    let tmp4 = mfaEnabled;
    if (typeof mfaEnabled !== "string") {
      let id = null;
      if (null != mfaEnabled) {
        id = mfaEnabled.id;
      }
      tmp4 = id;
    }
    tmp3 = mfaLevel.ownerId === tmp4;
  }
  return tmp3;
};
export const isGuildLurker = function isGuildLurker(guild) {
  return null == guild.joinedAt;
};
export const getGuildEveryoneRoleId = function getGuildEveryoneRoleId(id) {
  return SnowflakeUtilsDefault.castGuildIdAsEveryoneGuildRoleId(id.id);
};
export const updateJoinedAt = function updateJoinedAt(guild, joinedAt) {
  let date = joinedAt;
  if (typeof joinedAt === "string") {
    const _Date = Date;
    date = new Date(joinedAt);
  }
  return React3(guild, "joinedAt", date);
};
export const updateGameApplications = function updateGameApplications(arg0, arg1) {
  return React3(arg0, "gameApplicationIds", arg1);
};
export const isGuildNSFW = function isGuildNSFW(guild) {
  let nsfwLevel = guild;
  if (null == guild) {
    return tmp;
  } else {
    const has = set.has;
    if (obj.isServerNSFWLevelEnabled("guild_record")) {
      nsfwLevel = nsfwLevel.nsfwLevel;
      let hasItem = has(nsfwLevel);
    } else {
      let DEFAULT = nsfwLevel.ownerConfiguredContentLevel;
      if (DEFAULT == null) {
        DEFAULT = GuildNSFWContentLevel.DEFAULT;
      }
      hasItem = has(DEFAULT);
    }
    obj = ServerNSFWLevelExperiment;
  }
};