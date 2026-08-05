// discord_app/records/GuildRecord.tsx
import isValueEqual from "isValueEqual";
import ME from "ME";
import set from "getAvatarURL";
import { apexExperiment } from "../modules/age_gate/ServerNSFWLevelExperiment.tsx";
import { getAvatarURL } from "../utils/AvatarUtils.tsx";
import { DISCORD_EPOCH } from "../utils/SnowflakeUtils.tsx";
import { isNullOrEmpty } from "../utils/StringUtils.tsx";

let BoostedGuildTiers;
let GuildExplicitContentFilterTypes;
let TypeTag;
let UserNotificationSettings;
let VerificationLevels;
let c3;
({ set: c3, TypeTag } = isValueEqual);
const GuildNSFWContentLevel = ME.GuildNSFWContentLevel;
const MFALevels = ME.MFALevels;
const items = [, ];
({ EXPLICIT: arr[0], AGE_RESTRICTED: arr[1] } = GuildNSFWContentLevel);
({ BoostedGuildTiers, GuildExplicitContentFilterTypes, UserNotificationSettings, VerificationLevels } = ME);
let set = new Set(items);
let obj = { mfaLevel: MFALevels.NONE, preferredLocale: "en-US", afkTimeout: 0, defaultMessageNotifications: UserNotificationSettings.ALL_MESSAGES, verificationLevel: VerificationLevels.NONE, explicitContentFilter: GuildExplicitContentFilterTypes.DISABLED, premiumProgressBarEnabled: false, premiumProgressBarEnabledUserUpdatedAt: null, systemChannelFlags: 0, maxStageVideoChannelUsers: -1, maxVideoChannelUsers: -1, maxMembers: -1, premiumTier: BoostedGuildTiers.NONE, nsfwLevel: GuildNSFWContentLevel.DEFAULT, premiumSubscriberCount: 0, features: null, description: null, icon: null, ownerId: null, systemChannelId: null, joinedAt: null, discoverySplash: null, splash: null, banner: null, homeHeader: null, afkChannelId: null, application_id: null, vanityURLCode: null, rulesChannelId: null, safetyAlertsChannelId: null, publicUpdatesChannelId: null, ownerConfiguredContentLevel: null, hubType: null, latestOnboardingQuestionId: null, profile: null, guildTheme: null, premiumFeatures: null, moderatorReporting: null, verificationRoleId: null, gameApplicationIds: null, officialMessageColor: null };
obj[15] = new Set();
const frozen = Object.freeze(obj);
const result = set.fileFinishedImporting("records/GuildRecord.tsx");

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
  let obj = getAvatarURL;
  obj = { id: id.id, size, icon: id.icon, canAnimate: flag, lossless: flag2 };
  return obj.getGuildIconURL(obj);
};
export const getGuildIconSource = function getGuildIconSource(arg0, arg1, flag) {
  let closure_0 = arg0;
  const importDefault = arg1;
  if (flag === undefined) {
    flag = false;
  }
  return getAvatarURL.getAnimatableSourceWithFallback(flag, (canAnimate) => {
    let obj = callback(outer1_2[2]);
    obj = { id: closure_0.id, size: callback, icon: closure_0.icon, canAnimate };
    return obj.getGuildIconSource(obj);
  });
};
export const getGuildAcronym = function getGuildAcronym(guild) {
  return isNullOrEmpty.getAcronym(guild.name);
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
export const getGuildEveryoneRoleId = function getGuildEveryoneRoleId(closure_7) {
  return DISCORD_EPOCH.castGuildIdAsEveryoneGuildRoleId(closure_7.id);
};
export const updateJoinedAt = function updateJoinedAt(guild, joinedAt) {
  let date = joinedAt;
  if (typeof joinedAt === "string") {
    const _Date = Date;
    date = new Date(joinedAt);
  }
  return closure_3(guild, "joinedAt", date);
};
export const updateGameApplications = function updateGameApplications(arg0, arg1) {
  return callback(arg0, "gameApplicationIds", arg1);
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
    obj = apexExperiment;
  }
};