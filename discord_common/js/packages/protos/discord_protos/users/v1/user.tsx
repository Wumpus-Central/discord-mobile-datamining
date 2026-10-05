// discord_common/js/packages/protos/discord_protos/users/v1/user.tsx
import _mod1198 from "../../../../../../../_runtime/metro/01198__.js";
import timestamp from "../../../google/protobuf/timestamp.tsx";
import wrappers from "../../../google/protobuf/wrappers.tsx";
import safety_state from "../../safety_common/v1/safety_state.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import size from "../../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let internalBinaryWrite,
  internalBinaryWrite2,
  internalBinaryWrite3,
  internalBinaryWrite4,
  internalBinaryWrite5,
  internalBinaryWrite6,
  internalBinaryWrite7,
  internalBinaryWrite8,
  obj;

let obj40;
let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
const T2 = function T() {
  return require("wrappers").StringValue;
};
const T3 = function T() {
  return require("wrappers").StringValue;
};
const T4 = function T() {
  return mediumUserType;
};
const T5 = function T() {
  return mediumUserType6;
};
const T6 = function T() {
  return mediumUserType5;
};
const T7 = function T() {
  return require("safety_state").SafetyState;
};
const T8 = function T() {
  return userCountryDataType;
};
const T9 = function T() {
  return require("wrappers").StringValue;
};
const T10 = function T() {
  return require("wrappers").StringValue;
};
const T11 = function T() {
  return require("wrappers").UInt32Value;
};
const T12 = function T() {
  return require("timestamp").Timestamp;
};
const T13 = function T() {
  return require("wrappers").BoolValue;
};
const T14 = function T() {
  return mediumUserType4;
};
const T15 = function T() {
  const items = ["discord_protos.users.v1.TypingSuggestion", obj5, "TYPING_SUGGESTION_"];
  return items;
};
const T16 = function T() {
  return mediumUserType1;
};
const T17 = function T() {
  return require("wrappers").UInt64Value;
};
const T18 = function T() {
  return require("wrappers").BoolValue;
};
const T19 = function T() {
  return require("wrappers").StringValue;
};
const T20 = function T() {
  return closure_1_18;
};
const T21 = function T() {
  return mediumUserType7;
};
const T22 = function T() {
  return require("timestamp").Timestamp;
};
const T23 = function T() {
  return require("timestamp").Timestamp;
};
const T24 = function T() {
  return mediumUserType10;
};
const T25 = function T() {
  return mediumUserType11;
};
const T26 = function T() {
  return mediumUserType12;
};
const T27 = function T() {
  const items = ["discord_protos.users.v1.AnonymizationStatus", obj7, "ANONYMIZATION_STATUS_"];
  return items;
};
const T28 = function T() {
  return require("wrappers").UInt64Value;
};
const T29 = function T() {
  return require("timestamp").Timestamp;
};
const T30 = function T() {
  const items = ["discord_protos.users.v1.AgeAssuranceMethod", obj9, "AGE_ASSURANCE_METHOD_"];
  return items;
};
const T31 = function T() {
  const items = ["discord_protos.users.v1.AgeAssuranceVendor", obj10, "AGE_ASSURANCE_VENDOR_"];
  return items;
};
const T32 = function T() {
  return require("timestamp").Timestamp;
};
const T33 = function T() {
  const items = ["discord_protos.users.v1.AgeAssuranceGroup", obj11];
  return items;
};
const T34 = function T() {
  return require("timestamp").Timestamp;
};
const T35 = function T() {
  const items = ["discord_protos.users.v1.UserLinkType", obj12];
  return items;
};
const T36 = function T() {
  const items = ["discord_protos.users.v1.UserLinkStatus", obj13];
  return items;
};
const T37 = function T() {
  return require("timestamp").Timestamp;
};
const T38 = function T() {
  return require("timestamp").Timestamp;
};
const T39 = function T() {
  return closure_1_36;
};
const T40 = function T() {
  return require("timestamp").Timestamp;
};
const T41 = function T() {
  const items = ["discord_protos.users.v1.PremiumSource", obj17, "PREMIUM_SOURCE_"];
  return items;
};
const T42 = function T() {
  const items = ["discord_protos.users.v1.PremiumSubscriptionGroupRole", obj19, "PREMIUM_SUBSCRIPTION_GROUP_ROLE_"];
  return items;
};
const T43 = function T() {
  return require("timestamp").Timestamp;
};
const T44 = function T() {
  const items = ["discord_protos.users.v1.PerkSource", obj21];
  return items;
};
const T45 = function T() {
  return guildShardingConfigType4;
};
const T46 = function T() {
  return guildShardingConfigType5;
};
const T47 = function T() {
  return guildShardingConfigType6;
};
const T48 = function T() {
  return guildShardingConfigType8;
};
const T49 = function T() {
  return mediumUserType2;
};
const T50 = function T() {
  return require("timestamp").Timestamp;
};
const T51 = function T() {
  return require("timestamp").Timestamp;
};
const T52 = function T() {
  return require("timestamp").Timestamp;
};
const T53 = function T() {
  return require("timestamp").Timestamp;
};
const T54 = function T() {
  return require("wrappers").StringValue;
};
const T55 = function T() {
  return vadColorsType;
};
const T56 = function T() {
  return vadColorsType;
};
const DayOfWeek = {
  DAY_OF_WEEK_UNSPECIFIED: 0,
  [0]: "DAY_OF_WEEK_UNSPECIFIED",
  MONDAY: 1,
  [1]: "MONDAY",
  TUESDAY: 2,
  [2]: "TUESDAY",
  WEDNESDAY: 3,
  [3]: "WEDNESDAY",
  THURSDAY: 4,
  [4]: "THURSDAY",
  FRIDAY: 5,
  [5]: "FRIDAY",
  SATURDAY: 6,
  [6]: "SATURDAY",
  SUNDAY: 7,
  [7]: "SUNDAY",
};
let obj2 = {
  UNSPECIFIED: 0,
  [0]: "UNSPECIFIED",
  DEFAULT: 11,
  [11]: "DEFAULT",
  BANGERS: 1,
  [1]: "BANGERS",
  BIO_RHYME: 2,
  [2]: "BIO_RHYME",
  CHERRY_BOMB: 3,
  [3]: "CHERRY_BOMB",
  CHICLE: 4,
  [4]: "CHICLE",
  COMPAGNON: 5,
  [5]: "COMPAGNON",
  MUSEO_MODERNO: 6,
  [6]: "MUSEO_MODERNO",
  NEO_CASTEL: 7,
  [7]: "NEO_CASTEL",
  PIXELIFY: 8,
  [8]: "PIXELIFY",
  RIBES: 9,
  [9]: "RIBES",
  SINISTRE: 10,
  [10]: "SINISTRE",
  ZILLA_SLAB: 12,
  [12]: "ZILLA_SLAB",
  PLAYPEN_SANS: 13,
  [13]: "PLAYPEN_SANS",
  ORBITRON: 14,
  [14]: "ORBITRON",
  NEW_ROCKER: 15,
  [15]: "NEW_ROCKER",
  KALAM: 16,
  [16]: "KALAM",
  HEXAGON: 17,
  [17]: "HEXAGON",
};
let obj3 = {
  UNSPECIFIED: 0,
  [0]: "UNSPECIFIED",
  SOLID: 1,
  [1]: "SOLID",
  GRADIENT: 2,
  [2]: "GRADIENT",
  NEON: 3,
  [3]: "NEON",
  TOON: 4,
  [4]: "TOON",
  POP: 5,
  [5]: "POP",
  GLOW: 6,
  [6]: "GLOW",
  PRISM: 7,
  [7]: "PRISM",
  GUMMY: 8,
  [8]: "GUMMY",
  TEST_1: 1001,
  [1001]: "TEST_1",
  TEST_2: 1002,
  [1002]: "TEST_2",
  TEST_3: 1003,
  [1003]: "TEST_3",
  TEST_4: 1004,
  [1004]: "TEST_4",
};
let obj4 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", PULSE: 1, [1]: "PULSE", RING: 2, [2]: "RING", WAVE: 3, [3]: "WAVE" };
let obj5 = {
  UNSPECIFIED: 0,
  [0]: "UNSPECIFIED",
  YAPPING: 1,
  [1]: "YAPPING",
  VENTING: 2,
  [2]: "VENTING",
  OVERSHARING: 3,
  [3]: "OVERSHARING",
  BARKING: 4,
  [4]: "BARKING",
  BABBLING: 5,
  [5]: "BABBLING",
  DAYDREAMING: 6,
  [6]: "DAYDREAMING",
  MEOWING: 7,
  [7]: "MEOWING",
};
const obj6 = { BADGE_TYPE_UNSPECIFIED: 0, [0]: "BADGE_TYPE_UNSPECIFIED", APRIL_FOOLS_2026: 1, [1]: "APRIL_FOOLS_2026" };
const obj7 = {
  UNSPECIFIED: 0,
  [0]: "UNSPECIFIED",
  TO_BE_ANONYMIZED_USER: 1,
  [1]: "TO_BE_ANONYMIZED_USER",
  INACCESSIBLE_ANONYMIZED_USER: 2,
  [2]: "INACCESSIBLE_ANONYMIZED_USER",
  ANONYMOUS_USER: 3,
  [3]: "ANONYMOUS_USER",
};
const obj8 = {
  AGE_ASSURANCE_TIER_UNSPECIFIED: 0,
  [0]: "AGE_ASSURANCE_TIER_UNSPECIFIED",
  AGE_ASSURANCE_TIER_1: 1,
  [1]: "AGE_ASSURANCE_TIER_1",
  AGE_ASSURANCE_TIER_2: 2,
  [2]: "AGE_ASSURANCE_TIER_2",
  AGE_ASSURANCE_TIER_3: 3,
  [3]: "AGE_ASSURANCE_TIER_3",
  AGE_ASSURANCE_TIER_4: 4,
  [4]: "AGE_ASSURANCE_TIER_4",
};
const obj9 = {
  UNSPECIFIED: 0,
  [0]: "UNSPECIFIED",
  ID_SELFIE_MATCH: 1,
  [1]: "ID_SELFIE_MATCH",
  ID_SCAN: 2,
  [2]: "ID_SCAN",
  FACIAL_AGE_ESTIMATION: 3,
  [3]: "FACIAL_AGE_ESTIMATION",
  BEHAVIORAL_INFERENCE: 4,
  [4]: "BEHAVIORAL_INFERENCE",
  CREDIT_CARD: 5,
  [5]: "CREDIT_CARD",
  EMAIL_DOMAIN: 6,
  [6]: "EMAIL_DOMAIN",
  OS_SIGNAL: 7,
  [7]: "OS_SIGNAL",
  ML_AGE_INFERENCE: 8,
  [8]: "ML_AGE_INFERENCE",
  GOOGLE_WALLET: 9,
  [9]: "GOOGLE_WALLET",
  NEW_METHOD: 10,
  [10]: "NEW_METHOD",
  MANUAL_REVIEW: 11,
  [11]: "MANUAL_REVIEW",
  OS_SIGNAL_CONFIRMED: 12,
  [12]: "OS_SIGNAL_CONFIRMED",
  TNS_DETERMINATION: 13,
  [13]: "TNS_DETERMINATION",
};
let obj10 = {
  UNSPECIFIED: 0,
  [0]: "UNSPECIFIED",
  K_ID: 1,
  [1]: "K_ID",
  PERSONA: 2,
  [2]: "PERSONA",
  INCODE: 3,
  [3]: "INCODE",
  DISCORD: 4,
  [4]: "DISCORD",
  GOOGLE_WALLET: 5,
  [5]: "GOOGLE_WALLET",
  APPLE_APP_STORE: 6,
  [6]: "APPLE_APP_STORE",
  GOOGLE_PLAY: 7,
  [7]: "GOOGLE_PLAY",
};
const obj11 = {
  AGE_ASSURANCE_GROUP_UNSPECIFIED: 0,
  [0]: "AGE_ASSURANCE_GROUP_UNSPECIFIED",
  AGE_ASSURANCE_GROUP_13: 1,
  [1]: "AGE_ASSURANCE_GROUP_13",
  AGE_ASSURANCE_GROUP_14: 2,
  [2]: "AGE_ASSURANCE_GROUP_14",
  AGE_ASSURANCE_GROUP_15: 3,
  [3]: "AGE_ASSURANCE_GROUP_15",
  AGE_ASSURANCE_GROUP_16: 4,
  [4]: "AGE_ASSURANCE_GROUP_16",
  AGE_ASSURANCE_GROUP_17: 5,
  [5]: "AGE_ASSURANCE_GROUP_17",
  AGE_ASSURANCE_GROUP_18_21: 6,
  [6]: "AGE_ASSURANCE_GROUP_18_21",
  AGE_ASSURANCE_GROUP_22_24: 7,
  [7]: "AGE_ASSURANCE_GROUP_22_24",
  AGE_ASSURANCE_GROUP_25_34: 8,
  [8]: "AGE_ASSURANCE_GROUP_25_34",
  AGE_ASSURANCE_GROUP_35_UP: 9,
  [9]: "AGE_ASSURANCE_GROUP_35_UP",
};
const obj12 = {
  USER_LINK_TYPE_UNSPECIFIED: 0,
  [0]: "USER_LINK_TYPE_UNSPECIFIED",
  PARENT: 1,
  [1]: "PARENT",
  CHILD: 2,
  [2]: "CHILD",
};
const obj13 = {
  USER_LINK_STATUS_UNSPECIFIED: 0,
  [0]: "USER_LINK_STATUS_UNSPECIFIED",
  PENDING: 1,
  [1]: "PENDING",
  ACTIVE: 2,
  [2]: "ACTIVE",
  INACTIVE: 3,
  [3]: "INACTIVE",
  DECLINED: 4,
  [4]: "DECLINED",
};
const obj14 = {
  RATE_LIMIT_TIER_UNSPECIFIED: 0,
  [0]: "RATE_LIMIT_TIER_UNSPECIFIED",
  UNLIMITED: 1,
  [1]: "UNLIMITED",
  TIER_2: 2,
  [2]: "TIER_2",
  TIER_3: 3,
  [3]: "TIER_3",
  TIER_4: 4,
  [4]: "TIER_4",
  DISABLED: 5,
  [5]: "DISABLED",
};
const obj15 = {
  FEATURE_LIMIT_NAME_UNSPECIFIED: 0,
  [0]: "FEATURE_LIMIT_NAME_UNSPECIFIED",
  GUILD_MESSAGE_SEND: 1,
  [1]: "GUILD_MESSAGE_SEND",
  DM_SEND: 2,
  [2]: "DM_SEND",
  FRIEND_REQUEST: 3,
  [3]: "FRIEND_REQUEST",
  GUILD_CREATE: 4,
  [4]: "GUILD_CREATE",
  GUILD_JOIN: 5,
  [5]: "GUILD_JOIN",
  GUILD_TEXT_CHANNEL_CREATE: 6,
  [6]: "GUILD_TEXT_CHANNEL_CREATE",
  GUILD_UPLOAD_ATTACHMENT: 7,
  [7]: "GUILD_UPLOAD_ATTACHMENT",
  DM_UPLOAD_ATTACHMENT: 8,
  [8]: "DM_UPLOAD_ATTACHMENT",
  GDM_UPLOAD_ATTACHMENT: 9,
  [9]: "GDM_UPLOAD_ATTACHMENT",
  GDM_SEND: 10,
  [10]: "GDM_SEND",
  GUILD_VOICE_CHANNEL_CREATE: 11,
  [11]: "GUILD_VOICE_CHANNEL_CREATE",
  USER_PROFILE_EDIT: 12,
  [12]: "USER_PROFILE_EDIT",
  QUEST_PARTICIPATION: 14,
  [14]: "QUEST_PARTICIPATION",
  REPORT_SUBMISSION: 15,
  [15]: "REPORT_SUBMISSION",
};
const obj16 = {
  SAFETY_FLAG_TYPE_UNSPECIFIED: 0,
  [0]: "SAFETY_FLAG_TYPE_UNSPECIFIED",
  STRANGER_DANGER: 1,
  [1]: "STRANGER_DANGER",
  LIKELY_ATO: 2,
  [2]: "LIKELY_ATO",
  PARENTAL_CONSENT_REVOKED_IOS: 3,
  [3]: "PARENTAL_CONSENT_REVOKED_IOS",
  PARENTAL_CONSENT_REVOKED_ANDROID: 4,
  [4]: "PARENTAL_CONSENT_REVOKED_ANDROID",
  REACTIVE_CHECK_APPLIED: 5,
  [5]: "REACTIVE_CHECK_APPLIED",
  PARENTAL_CONSENT_GRACE: 6,
  [6]: "PARENTAL_CONSENT_GRACE",
  ML_INFERRED_ADULT: 7,
  [7]: "ML_INFERRED_ADULT",
  ML_INFERRED_TEEN: 8,
  [8]: "ML_INFERRED_TEEN",
};
const obj17 = {
  NONE_UNSPECIFIED: 0,
  [0]: "NONE_UNSPECIFIED",
  SUBSCRIPTION: 1,
  [1]: "SUBSCRIPTION",
  FRACTIONAL_NITRO: 2,
  [2]: "FRACTIONAL_NITRO",
  REVERSE_TRIAL: 3,
  [3]: "REVERSE_TRIAL",
  SUBSCRIPTION_GROUP: 4,
  [4]: "SUBSCRIPTION_GROUP",
};
const obj18 = {
  NONE_UNSPECIFIED: 0,
  [0]: "NONE_UNSPECIFIED",
  BOOST_ONLY: 1,
  [1]: "BOOST_ONLY",
  TIER_0: 2,
  [2]: "TIER_0",
  TIER_1: 3,
  [3]: "TIER_1",
  TIER_2: 4,
  [4]: "TIER_2",
};
const obj19 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", PRIMARY: 1, [1]: "PRIMARY", MEMBER: 2, [2]: "MEMBER" };
const obj20 = {
  UNSPECIFIED: 0,
  [0]: "UNSPECIFIED",
  ANIMATED_EMOJIS: 1,
  [1]: "ANIMATED_EMOJIS",
  EMOJIS_EVERYWHERE: 2,
  [2]: "EMOJIS_EVERYWHERE",
  STICKERS_EVERYWHERE: 3,
  [3]: "STICKERS_EVERYWHERE",
  SOUNDBOARD_EVERYWHERE: 4,
  [4]: "SOUNDBOARD_EVERYWHERE",
  ANIMATED_AVATAR: 5,
  [5]: "ANIMATED_AVATAR",
  CUSTOM_DISCRIMINATOR: 6,
  [6]: "CUSTOM_DISCRIMINATOR",
  PREMIUM_GUILD_MEMBER_PROFILE: 7,
  [7]: "PREMIUM_GUILD_MEMBER_PROFILE",
  PROFILE_PREMIUM_FEATURES: 8,
  [8]: "PROFILE_PREMIUM_FEATURES",
  STREAM_MID_QUALITY: 9,
  [9]: "STREAM_MID_QUALITY",
  STREAM_HIGH_QUALITY: 10,
  [10]: "STREAM_HIGH_QUALITY",
  CUSTOM_NOTIFICATION_SOUNDS: 11,
  [11]: "CUSTOM_NOTIFICATION_SOUNDS",
  VIDEO_FILTER_ASSETS: 12,
  [12]: "VIDEO_FILTER_ASSETS",
  INCREASED_FILE_UPLOAD_SIZE: 13,
  [13]: "INCREASED_FILE_UPLOAD_SIZE",
  INCREASED_GUILD_LIMIT: 14,
  [14]: "INCREASED_GUILD_LIMIT",
  INCREASED_MESSAGE_LENGTH: 15,
  [15]: "INCREASED_MESSAGE_LENGTH",
  NITRO_REACTION_TOGGLE: 16,
  [16]: "NITRO_REACTION_TOGGLE",
  CLIENT_THEMES: 17,
  [17]: "CLIENT_THEMES",
  PREMIUM_COLLECTIBLES: 18,
  [18]: "PREMIUM_COLLECTIBLES",
  CUSTOM_CALL_SOUNDS: 19,
  [19]: "CUSTOM_CALL_SOUNDS",
  SAVED_MESSAGES: 20,
  [20]: "SAVED_MESSAGES",
  PREMIUM_VOICE_FILTERS: 21,
  [21]: "PREMIUM_VOICE_FILTERS",
  CHAT_WALLPAPERS: 22,
  [22]: "CHAT_WALLPAPERS",
  MONTHLY_ORBS: 23,
  [23]: "MONTHLY_ORBS",
  SHOP_DISCOUNTS: 24,
  [24]: "SHOP_DISCOUNTS",
  MORE_QUEST_ORBS: 25,
  [25]: "MORE_QUEST_ORBS",
  PROFILE_BADGES: 26,
  [26]: "PROFILE_BADGES",
  APP_ICONS: 27,
  [27]: "APP_ICONS",
  BOOST_DISCOUNT: 28,
  [28]: "BOOST_DISCOUNT",
  FREE_BOOSTS: 29,
  [29]: "FREE_BOOSTS",
  INSTALL_PREMIUM_APPLICATIONS: 30,
  [30]: "INSTALL_PREMIUM_APPLICATIONS",
  INCREASED_VIDEO_UPLOAD_QUALITY: 31,
  [31]: "INCREASED_VIDEO_UPLOAD_QUALITY",
  DISPLAY_NAME_STYLES: 32,
  [32]: "DISPLAY_NAME_STYLES",
};
const obj21 = {
  SOURCE_UNSPECIFIED: 0,
  [0]: "SOURCE_UNSPECIFIED",
  SOURCE_NITRO: 1,
  [1]: "SOURCE_NITRO",
  SOURCE_THIRDPARTY_CROISSANT: 2,
  [2]: "SOURCE_THIRDPARTY_CROISSANT",
  SOURCE_BOT: 3,
  [3]: "SOURCE_BOT",
  SOURCE_HEXAGON_CAMPAIGN: 4,
  [4]: "SOURCE_HEXAGON_CAMPAIGN",
};
const MessageType = _mod1198.MessageType;
class TimeOfDay$Type extends MessageType {
  constructor() {
    const items = [
      { no: 1, name: "hours", kind: "scalar", T: 5 },
      { no: 2, name: "minutes", kind: "scalar", T: 5 },
      { no: 3, name: "seconds", kind: "scalar", T: 5 },
      { no: 4, name: "nanos", kind: "scalar", T: 5 },
    ];
    const tmp2 = new tmp("discord_protos.users.v1.TimeOfDay", items, new.target);
    return tmp2;
  }
  create(arr) {
    const time = { hours: 0, minutes: 0, seconds: 0, nanos: 0 };
    const _Object = Object;
    obj = { enumerable: false, value: this };
    _Object.defineProperty(time, _mod1198.MESSAGE_TYPE, obj);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, time, arr);
    }
    return time;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.hours = pos.int32();
        } else if (2 === tmp5) {
          obj.minutes = pos.int32();
        } else if (3 === tmp5) {
          obj.seconds = pos.int32();
        } else if (4 === tmp5) {
          obj.nanos = pos.int32();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(hours, tag, writeUnknownFields) {
    if (0 !== hours.hours) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.int32(hours.hours);
    }
    if (0 !== hours.minutes) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.Varint);
      tagResult1.int32(hours.minutes);
    }
    if (0 !== hours.seconds) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
      tagResult2.int32(hours.seconds);
    }
    if (0 !== hours.nanos) {
      const tagResult3 = tag.tag(4, _mod1198.WireType.Varint);
      tagResult3.int32(hours.nanos);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, hours, tag);
    }
    return tag;
  }
}
const prototype = TimeOfDay$Type.prototype;
let items = [
  { no: 1, name: "hours", kind: "scalar", T: 5 },
  { no: 2, name: "minutes", kind: "scalar", T: 5 },
  { no: 3, name: "seconds", kind: "scalar", T: 5 },
  { no: 4, name: "nanos", kind: "scalar", T: 5 },
];
let tmp8 = new "SUBSCRIPTION_GROUP"(
  "discord_protos.users.v1.TimeOfDay",
  items,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  tmp2,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
);
const authStore4 = tmp8;
const MessageType2 = _mod1198.MessageType;
class User$Type extends MessageType2 {
  constructor() {
    const items = [
      { no: 1, name: "id", kind: "scalar", T: 4 },
      { no: 2, name: "username", kind: "scalar", T: 9 },
      { no: 3, name: "discriminator", kind: "scalar", T: 9 },
      { no: 4, name: "avatar", kind: "message", T: T2 },
      { no: 5, name: "bot", kind: "scalar", T: 8 },
      { no: 6, name: "public_flags", kind: "scalar", T: 4 },
      { no: 8, name: "global_name", kind: "message", T: T3 },
      { no: 9, name: "avatar_decoration_data", kind: "message", T: T4 },
      { no: 10, name: "primary_guild", kind: "message", T: T5 },
      { no: 11, name: "collectibles", kind: "message", T: T6 },
      { no: 12, name: "safety_state", kind: "message", T: T7 },
      ,
    ];
    obj = { no: 13, name: "display_name_styles", kind: "message", T };
    class T {
      constructor() {
        return closure_1_21;
      }
    }
    items[11] = obj;
    items[12] = { no: 14, name: "vad_colors", kind: "message", T: T8 };
    const tmp2 = new tmp("discord_protos.users.v1.User", items, T);
    return tmp2;
  }
  create(arr) {
    obj = { id: "0", username: "", discriminator: "", bot: false, publicFlags: "0" };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, arg2, arg3) {
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    if (pos.pos < pos.pos + arg1) {
      [r10019, r10020] = pos.tag();
      _slicedToArray(pos.tag(), 2);
    }
    return obj;
  }
  internalBinaryWrite(id, tag, writeUnknownFields) {
    if ("0" !== id.id) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.uint64(id.id);
    }
    if ("" !== id.username) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.string(id.username);
    }
    if ("" !== id.discriminator) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      tagResult2.string(id.discriminator);
    }
    if (id.avatar) {
      const StringValue = wrappers.StringValue;
      internalBinaryWrite = StringValue.internalBinaryWrite;
      const avatar = id.avatar;
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(avatar, tagResult3.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (false !== id.bot) {
      const tagResult4 = tag.tag(5, _mod1198.WireType.Varint);
      tagResult4.bool(id.bot);
    }
    if ("0" !== id.publicFlags) {
      const tagResult5 = tag.tag(6, _mod1198.WireType.Varint);
      tagResult5.uint64(id.publicFlags);
    }
    if (id.globalName) {
      const StringValue2 = wrappers.StringValue;
      internalBinaryWrite2 = StringValue2.internalBinaryWrite;
      const globalName = id.globalName;
      const tagResult6 = tag.tag(8, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(globalName, tagResult6.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (id.avatarDecorationData) {
      internalBinaryWrite3 = mediumUserType.internalBinaryWrite;
      const avatarDecorationData = id.avatarDecorationData;
      const tagResult7 = tag.tag(9, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(
        avatarDecorationData,
        tagResult7.fork(),
        writeUnknownFields,
      );
      const joined2 = internalBinaryWrite3Result.join();
    }
    if (id.primaryGuild) {
      internalBinaryWrite4 = mediumUserType6.internalBinaryWrite;
      const primaryGuild = id.primaryGuild;
      const tagResult8 = tag.tag(10, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(primaryGuild, tagResult8.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    if (id.collectibles) {
      internalBinaryWrite5 = mediumUserType5.internalBinaryWrite;
      const collectibles = id.collectibles;
      const tagResult9 = tag.tag(11, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(collectibles, tagResult9.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite5Result.join();
    }
    if (id.safetyState) {
      const SafetyState = safety_state.SafetyState;
      internalBinaryWrite6 = SafetyState.internalBinaryWrite;
      const safetyState = id.safetyState;
      const tagResult10 = tag.tag(12, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite6Result = internalBinaryWrite6(safetyState, tagResult10.fork(), writeUnknownFields);
      const joined5 = internalBinaryWrite6Result.join();
    }
    if (id.displayNameStyles) {
      internalBinaryWrite7 = mediumUserType2.internalBinaryWrite;
      const displayNameStyles = id.displayNameStyles;
      const tagResult11 = tag.tag(13, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite7Result = internalBinaryWrite7(
        displayNameStyles,
        tagResult11.fork(),
        writeUnknownFields,
      );
      const joined6 = internalBinaryWrite7Result.join();
    }
    if (id.vadColors) {
      internalBinaryWrite8 = userCountryDataType.internalBinaryWrite;
      const vadColors = id.vadColors;
      const tagResult12 = tag.tag(14, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite8Result = internalBinaryWrite8(vadColors, tagResult12.fork(), writeUnknownFields);
      const joined7 = internalBinaryWrite8Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, id, tag);
    }
    return tag;
  }
}
const prototype2 = User$Type.prototype;
const items1 = [
  { no: 1, name: "id", kind: "scalar", T: 4 },
  { no: 2, name: "username", kind: "scalar", T: 9 },
  { no: 3, name: "discriminator", kind: "scalar", T: 9 },
  { no: 4, name: "avatar", kind: "message", T: T2 },
  { no: 5, name: "bot", kind: "scalar", T: 8 },
  { no: 6, name: "public_flags", kind: "scalar", T: 4 },
  { no: 8, name: "global_name", kind: "message", T: T3 },
  { no: 9, name: "avatar_decoration_data", kind: "message", T: T4 },
  { no: 10, name: "primary_guild", kind: "message", T: T5 },
  { no: 11, name: "collectibles", kind: "message", T: T6 },
  { no: 12, name: "safety_state", kind: "message", T: T7 },
  {
    no: 13,
    name: "display_name_styles",
    kind: "message",
    T() {
      return mediumUserType2;
    },
  },
  { no: 14, name: "vad_colors", kind: "message", T: T8 },
];
const items38 = new items(
  "discord_protos.users.v1.User",
  items1,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
);
const MessageType3 = _mod1198.MessageType;
class MediumUser$Type extends MessageType3 {
  constructor() {
    const items = [
      { no: 1, name: "id", kind: "scalar", T: 6 },
      { no: 2, name: "username", kind: "scalar", T: 9 },
      { no: 3, name: "discriminator", kind: "scalar", T: 13 },
      { no: 4, name: "avatar_hash", kind: "message", T: T9 },
      { no: 5, name: "bot", kind: "scalar", T: 8 },
      { no: 6, name: "flags", kind: "scalar", T: 4 },
      ,
    ];
    obj = { no: 7, name: "email", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[2]).StringValue;
      }
    }
    items[6] = obj;
    items[7] = { no: 8, name: "phone", kind: "message", T: T10 };
    const tmp2 = new tmp("discord_protos.users.v1.MediumUser", items, T);
    return tmp2;
  }
  create(arr) {
    obj = { id: "0", username: "", discriminator: 0, bot: false, flags: "0" };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          let str5 = pos.fixed64();
          obj.id = str5.toString();
        } else if (2 === tmp5) {
          obj.username = pos.string();
        } else if (3 === tmp5) {
          obj.discriminator = pos.uint32();
        } else if (4 === tmp5) {
          let StringValue3 = wrappers.StringValue;
          obj.avatarHash = StringValue3.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.avatarHash);
        } else if (5 === tmp5) {
          obj.bot = pos.bool();
        } else if (6 === tmp5) {
          let str4 = pos.uint64();
          obj.flags = str4.toString();
        } else if (7 === tmp5) {
          let StringValue2 = wrappers.StringValue;
          obj.email = StringValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.email);
        } else if (8 === tmp5) {
          let StringValue = wrappers.StringValue;
          obj.phone = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.phone);
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(id, tag, writeUnknownFields) {
    if ("0" !== id.id) {
      const tagResult = tag.tag(1, _mod1198.WireType.Bit64);
      tagResult.fixed64(id.id);
    }
    if ("" !== id.username) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.string(id.username);
    }
    if (0 !== id.discriminator) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
      tagResult2.uint32(id.discriminator);
    }
    if (id.avatarHash) {
      const StringValue = wrappers.StringValue;
      internalBinaryWrite = StringValue.internalBinaryWrite;
      const avatarHash = id.avatarHash;
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(avatarHash, tagResult3.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (false !== id.bot) {
      const tagResult4 = tag.tag(5, _mod1198.WireType.Varint);
      tagResult4.bool(id.bot);
    }
    if ("0" !== id.flags) {
      const tagResult5 = tag.tag(6, _mod1198.WireType.Varint);
      tagResult5.uint64(id.flags);
    }
    if (id.email) {
      const StringValue2 = wrappers.StringValue;
      internalBinaryWrite2 = StringValue2.internalBinaryWrite;
      const email = id.email;
      const tagResult6 = tag.tag(7, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(email, tagResult6.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (id.phone) {
      const StringValue3 = wrappers.StringValue;
      internalBinaryWrite3 = StringValue3.internalBinaryWrite;
      const phone = id.phone;
      const tagResult7 = tag.tag(8, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(phone, tagResult7.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, id, tag);
    }
    return tag;
  }
}
const prototype3 = MediumUser$Type.prototype;
const items2 = [
  { no: 1, name: "id", kind: "scalar", T: 6 },
  { no: 2, name: "username", kind: "scalar", T: 9 },
  { no: 3, name: "discriminator", kind: "scalar", T: 13 },
  { no: 4, name: "avatar_hash", kind: "message", T: T9 },
  { no: 5, name: "bot", kind: "scalar", T: 8 },
  { no: 6, name: "flags", kind: "scalar", T: 4 },
  {
    no: 7,
    name: "email",
    kind: "message",
    T() {
      return require("wrappers").StringValue;
    },
  },
  { no: 8, name: "phone", kind: "message", T: T10 },
];
const items39 = new items(
  "discord_protos.users.v1.MediumUser",
  items2,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
);
const MessageType4 = _mod1198.MessageType;
class UserAvatarDecoration$Type extends MessageType4 {
  constructor() {
    const items = [{ no: 1, name: "asset", kind: "scalar", T: 9 }, ,];
    obj = { no: 2, name: "sku_id", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[2]).UInt64Value;
      }
    }
    items[1] = obj;
    items[2] = { no: 3, name: "expires_at", kind: "message", T: T11 };
    const tmp2 = new tmp("discord_protos.users.v1.UserAvatarDecoration", items, T);
    return tmp2;
  }
  create(arr) {
    obj = { asset: "" };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.asset = pos.string();
        } else if (2 === tmp5) {
          let UInt64Value = wrappers.UInt64Value;
          obj.skuId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.skuId);
        } else if (3 === tmp5) {
          let UInt32Value = wrappers.UInt32Value;
          obj.expiresAt = UInt32Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.expiresAt);
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(asset, tag, writeUnknownFields) {
    if ("" !== asset.asset) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(asset.asset);
    }
    if (asset.skuId) {
      const UInt64Value = wrappers.UInt64Value;
      internalBinaryWrite = UInt64Value.internalBinaryWrite;
      const skuId = asset.skuId;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(skuId, tagResult1.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (asset.expiresAt) {
      const UInt32Value = wrappers.UInt32Value;
      internalBinaryWrite2 = UInt32Value.internalBinaryWrite;
      const expiresAt = asset.expiresAt;
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(expiresAt, tagResult2.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, asset, tag);
    }
    return tag;
  }
}
const prototype4 = UserAvatarDecoration$Type.prototype;
const items3 = [
  { no: 1, name: "asset", kind: "scalar", T: 9 },
  {
    no: 2,
    name: "sku_id",
    kind: "message",
    T() {
      return require("wrappers").UInt64Value;
    },
  },
  { no: 3, name: "expires_at", kind: "message", T: T11 },
];
const mediumUserType = new MediumUser$Type(
  "discord_protos.users.v1.UserAvatarDecoration",
  items3,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
);
const MessageType5 = _mod1198.MessageType;
class UserNameplate$Type extends MessageType5 {
  constructor() {
    const items = [
      { no: 1, name: "asset", kind: "scalar", T: 9 },
      { no: 2, name: "palette", kind: "scalar", T: 9 },
      ,
      ,
    ];
    obj = { no: 3, name: "sku_id", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[2]).UInt64Value;
      }
    }
    items[2] = obj;
    items[3] = { no: 4, name: "expires_at", kind: "message", T: T12 };
    items[4] = { no: 5, name: "label", kind: "scalar", T: 9 };
    const tmp2 = new tmp("discord_protos.users.v1.UserNameplate", items, T);
    return tmp2;
  }
  create(arr) {
    obj = { asset: "", palette: "", label: "" };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.asset = pos.string();
        } else if (2 === tmp5) {
          obj.palette = pos.string();
        } else if (3 === tmp5) {
          let UInt64Value = wrappers.UInt64Value;
          obj.skuId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.skuId);
        } else if (4 === tmp5) {
          let Timestamp = timestamp.Timestamp;
          obj.expiresAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.expiresAt);
        } else if (5 === tmp5) {
          obj.label = pos.string();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(asset, tag, writeUnknownFields) {
    if ("" !== asset.asset) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(asset.asset);
    }
    if ("" !== asset.palette) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.string(asset.palette);
    }
    if (asset.skuId) {
      const UInt64Value = wrappers.UInt64Value;
      internalBinaryWrite = UInt64Value.internalBinaryWrite;
      const skuId = asset.skuId;
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(skuId, tagResult2.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (asset.expiresAt) {
      const Timestamp = timestamp.Timestamp;
      internalBinaryWrite2 = Timestamp.internalBinaryWrite;
      const expiresAt = asset.expiresAt;
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(expiresAt, tagResult3.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if ("" !== asset.label) {
      const tagResult4 = tag.tag(5, _mod1198.WireType.LengthDelimited);
      tagResult4.string(asset.label);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, asset, tag);
    }
    return tag;
  }
}
const prototype5 = UserNameplate$Type.prototype;
const items4 = [
  { no: 1, name: "asset", kind: "scalar", T: 9 },
  { no: 2, name: "palette", kind: "scalar", T: 9 },
  {
    no: 3,
    name: "sku_id",
    kind: "message",
    T() {
      return require("wrappers").UInt64Value;
    },
  },
  { no: 4, name: "expires_at", kind: "message", T: T12 },
  { no: 5, name: "label", kind: "scalar", T: 9 },
];
const mediumUserType1 = new MediumUser$Type(
  "discord_protos.users.v1.UserNameplate",
  items4,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
);
const MessageType6 = _mod1198.MessageType;
class DisplayNameStyles$Type extends MessageType6 {
  constructor() {
    let items = [, , ,];
    obj = {
      no: 1,
      name: "font_id",
      kind: "enum",
      T() {
        const items = ["discord_protos.users.v1.DisplayNameFont", obj2, "DISPLAY_NAME_FONT_"];
        return items;
      },
    };
    items[0] = obj;
    obj2 = { no: 2, name: "effect_id", kind: "enum", T };
    class T {
      constructor() {
        const items = ["discord_protos.users.v1.DisplayNameEffect", obj3, "DISPLAY_NAME_EFFECT_"];
        return items;
      }
    }
    items[1] = obj2;
    items[2] = { no: 3, name: "colors", kind: "scalar", repeat: 1, T: 13 };
    items[3] = { no: 4, name: "animated", kind: "message", T: T13 };
    const tmp2 = new tmp("discord_protos.users.v1.DisplayNameStyles", items, T);
    return tmp2;
  }
  create(arr) {
    obj = { fontId: 0, effectId: 0, colors: [] };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.fontId = pos.int32();
        } else if (2 === tmp5) {
          obj.effectId = pos.int32();
        } else if (3 === tmp5) {
          if (tmp6 === _mod1198.WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            if (pos.pos < sum1) {
              do {
                let colors = obj.colors;
                let arr = colors.push(pos.uint32());
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let colors1 = obj.colors;
            let arr2 = colors1.push(pos.uint32());
          }
        } else if (4 === tmp5) {
          let BoolValue = wrappers.BoolValue;
          obj.animated = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.animated);
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(fontId, tag, writeUnknownFields) {
    let length;
    if (0 !== fontId.fontId) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.int32(fontId.fontId);
    }
    if (0 !== fontId.effectId) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.Varint);
      tagResult1.int32(fontId.effectId);
    }
    if (fontId.colors.length) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      tagResult2.fork();
      let num5 = 0;
      if (0 < fontId.colors.length) {
        do {
          let uint32Result = tag.uint32(fontId.colors[num5]);
          num5 = num5 + 1;
          length = fontId.colors.length;
        } while (num5 < length);
      }
      const joined = tag.join();
    }
    if (fontId.animated) {
      const BoolValue = wrappers.BoolValue;
      internalBinaryWrite = BoolValue.internalBinaryWrite;
      const animated = fontId.animated;
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(animated, tagResult3.fork(), writeUnknownFields);
      const joined1 = internalBinaryWriteResult.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, fontId, tag);
    }
    return tag;
  }
}
const prototype6 = DisplayNameStyles$Type.prototype;
const items5 = [, , ,];
const obj22 = {
  no: 1,
  name: "font_id",
  kind: "enum",
  T() {
    const items = ["discord_protos.users.v1.DisplayNameFont", obj2, "DISPLAY_NAME_FONT_"];
    return items;
  },
};
items5[0] = obj22;
items5[1] = {
  no: 2,
  name: "effect_id",
  kind: "enum",
  T() {
    const items = ["discord_protos.users.v1.DisplayNameEffect", obj3, "DISPLAY_NAME_EFFECT_"];
    return items;
  },
};
items5[2] = { no: 3, name: "colors", kind: "scalar", repeat: 1, T: 13 };
items5[3] = { no: 4, name: "animated", kind: "message", T: T13 };
const mediumUserType2 = new MediumUser$Type(
  "discord_protos.users.v1.DisplayNameStyles",
  items5,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
);
const MessageType7 = _mod1198.MessageType;
class UserTypingIndicatorStyle$Type extends MessageType7 {
  constructor() {
    let items = [, ,];
    obj = { no: 1, name: "emojis", kind: "message", repeat: 1, T: T14 };
    items[0] = obj;
    obj2 = { no: 2, name: "animation", kind: "enum", T };
    class T {
      constructor() {
        items = ["discord_protos.users.v1.TypingIndicatorAnimation"];
        items[1] = closure_1_6;
        items[2] = "TYPING_INDICATOR_ANIMATION_";
        return items;
      }
    }
    items[1] = obj2;
    items[2] = { no: 3, name: "typing_suggestion", kind: "enum", T: T15 };
    const tmp2 = new tmp("discord_protos.users.v1.UserTypingIndicatorStyle", items, T);
    return tmp2;
  }
  create(arr) {
    obj = { emojis: [], animation: 0, typingSuggestion: 0 };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          let emojis = obj.emojis;
          let arr = emojis.push(mediumUserType4.internalBinaryRead(pos, pos.uint32(), readUnknownField));
        } else if (2 === tmp5) {
          obj.animation = pos.int32();
        } else if (3 === tmp5) {
          obj.typingSuggestion = pos.int32();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(emojis, tag, writeUnknownFields) {
    let length;
    let num = 0;
    if (0 < emojis.emojis.length) {
      do {
        internalBinaryWrite = mediumUserType4.internalBinaryWrite;
        let tmp2 = emojis.emojis[num];
        let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
        let internalBinaryWriteResult = internalBinaryWrite(tmp2, tagResult.fork(), writeUnknownFields);
        let joined = internalBinaryWriteResult.join();
        num = num + 1;
        length = emojis.emojis.length;
      } while (num < length);
    }
    if (0 !== emojis.animation) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.Varint);
      tagResult1.int32(emojis.animation);
    }
    if (0 !== emojis.typingSuggestion) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
      tagResult2.int32(emojis.typingSuggestion);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, emojis, tag);
    }
    return tag;
  }
}
const prototype7 = UserTypingIndicatorStyle$Type.prototype;
const items6 = [, ,];
const obj23 = { no: 1, name: "emojis", kind: "message", repeat: 1, T: T14 };
items6[0] = obj23;
items6[1] = {
  no: 2,
  name: "animation",
  kind: "enum",
  T() {
    const items = ["discord_protos.users.v1.TypingIndicatorAnimation", obj4, "TYPING_INDICATOR_ANIMATION_"];
    return items;
  },
};
items6[2] = { no: 3, name: "typing_suggestion", kind: "enum", T: T15 };
const mediumUserType3 = new MediumUser$Type(
  "discord_protos.users.v1.UserTypingIndicatorStyle",
  items6,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
);
const MessageType8 = _mod1198.MessageType;
class TypingIndicatorEmoji$Type extends MessageType8 {
  constructor() {
    const items = [
      { no: 1, name: "custom_emoji_id", kind: "scalar", oneof: "emoji", T: 6 },
      { no: 2, name: "unicode_emoji", kind: "scalar", oneof: "emoji", T: 9 },
      { no: 3, name: "animated", kind: "scalar", T: 8 },
    ];
    const tmp2 = new tmp("discord_protos.users.v1.TypingIndicatorEmoji", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { emoji: { oneofKind: "r" }, animated: false };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let str4;
    let tmp5;
    let tmp6;
    const self = this;
    obj2 = arg3;
    if (arg3 == null) {
      obj2 = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj4 = { oneofKind: "customEmojiId", customEmojiId: str4.toString() };
          str4 = pos.fixed64();
          obj2.emoji = obj4;
        } else if (2 === tmp5) {
          let emoji = { oneofKind: "unicodeEmoji", unicodeEmoji: pos.string() };
          obj2.emoji = emoji;
        } else if (3 === tmp5) {
          obj2.animated = pos.bool();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj2, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj2;
  }
  internalBinaryWrite(emoji, tag, writeUnknownFields) {
    if ("customEmojiId" === emoji.emoji.oneofKind) {
      const tagResult = tag.tag(1, _mod1198.WireType.Bit64);
      tagResult.fixed64(emoji.emoji.customEmojiId);
    }
    if ("unicodeEmoji" === emoji.emoji.oneofKind) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.string(emoji.emoji.unicodeEmoji);
    }
    if (false !== emoji.animated) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
      tagResult2.bool(emoji.animated);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, emoji, tag);
    }
    return tag;
  }
}
const prototype8 = TypingIndicatorEmoji$Type.prototype;
const items7 = [
  { no: 1, name: "custom_emoji_id", kind: "scalar", oneof: "emoji", T: 6 },
  { no: 2, name: "unicode_emoji", kind: "scalar", oneof: "emoji", T: 9 },
  { no: 3, name: "animated", kind: "scalar", T: 8 },
];
const mediumUserType4 = new MediumUser$Type(
  "discord_protos.users.v1.TypingIndicatorEmoji",
  items7,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
);
const MessageType9 = _mod1198.MessageType;
class UserCollectibles$Type extends MessageType9 {
  constructor() {
    const items = [];
    obj = { no: 1, name: "nameplate", kind: "message", T: T16 };
    items[0] = obj;
    const tmp2 = new tmp("discord_protos.users.v1.UserCollectibles", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = {};
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.nameplate = mediumUserType1.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.nameplate);
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(nameplate, tag, writeUnknownFields) {
    if (nameplate.nameplate) {
      internalBinaryWrite = mediumUserType1.internalBinaryWrite;
      nameplate = nameplate.nameplate;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(nameplate, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, nameplate, tag);
    }
    return tag;
  }
}
const prototype9 = UserCollectibles$Type.prototype;
const items8 = [];
const obj24 = { no: 1, name: "nameplate", kind: "message", T: T16 };
items8[0] = obj24;
const mediumUserType5 = new MediumUser$Type(
  "discord_protos.users.v1.UserCollectibles",
  items8,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
);
const MessageType10 = _mod1198.MessageType;
class UserPrimaryGuild$Type extends MessageType10 {
  constructor() {
    const items = [, , ,];
    obj = { no: 1, name: "identity_guild_id", kind: "message", T: T17 };
    items[0] = obj;
    items[1] = { no: 2, name: "identity_enabled", kind: "message", T: T18 };
    obj2 = { no: 3, name: "tag", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[2]).StringValue;
      }
    }
    items[2] = obj2;
    items[3] = { no: 4, name: "badge", kind: "message", T: T19 };
    const tmp2 = new tmp("discord_protos.users.v1.UserPrimaryGuild", items, T);
    return tmp2;
  }
  create(arr) {
    obj = {};
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          let UInt64Value = wrappers.UInt64Value;
          obj.identityGuildId = UInt64Value.internalBinaryRead(
            pos,
            pos.uint32(),
            readUnknownField,
            obj.identityGuildId,
          );
        } else if (2 === tmp5) {
          let BoolValue = wrappers.BoolValue;
          obj.identityEnabled = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.identityEnabled);
        } else if (3 === tmp5) {
          let StringValue2 = wrappers.StringValue;
          obj.tag = StringValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.tag);
        } else if (4 === tmp5) {
          let StringValue = wrappers.StringValue;
          obj.badge = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.badge);
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(identityGuildId, tag, writeUnknownFields) {
    if (identityGuildId.identityGuildId) {
      const UInt64Value = wrappers.UInt64Value;
      internalBinaryWrite = UInt64Value.internalBinaryWrite;
      identityGuildId = identityGuildId.identityGuildId;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(identityGuildId, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (identityGuildId.identityEnabled) {
      const BoolValue = wrappers.BoolValue;
      internalBinaryWrite2 = BoolValue.internalBinaryWrite;
      const identityEnabled = identityGuildId.identityEnabled;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(identityEnabled, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (identityGuildId.tag) {
      const StringValue = wrappers.StringValue;
      internalBinaryWrite3 = StringValue.internalBinaryWrite;
      tag = identityGuildId.tag;
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(tag, tagResult2.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if (identityGuildId.badge) {
      const StringValue2 = wrappers.StringValue;
      internalBinaryWrite4 = StringValue2.internalBinaryWrite;
      const badge = identityGuildId.badge;
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(badge, tagResult3.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, identityGuildId, tag);
    }
    return tag;
  }
}
const prototype10 = UserPrimaryGuild$Type.prototype;
const items9 = [, , ,];
const obj25 = { no: 1, name: "identity_guild_id", kind: "message", T: T17 };
items9[0] = obj25;
items9[1] = { no: 2, name: "identity_enabled", kind: "message", T: T18 };
items9[2] = {
  no: 3,
  name: "tag",
  kind: "message",
  T() {
    return require("wrappers").StringValue;
  },
};
items9[3] = { no: 4, name: "badge", kind: "message", T: T19 };
const mediumUserType6 = new MediumUser$Type(
  "discord_protos.users.v1.UserPrimaryGuild",
  items9,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
);
const MessageType11 = _mod1198.MessageType;
class ScheduleRule$Type extends MessageType11 {
  constructor() {
    let items = [
      { no: 1, name: "rule_id", kind: "scalar", T: 9 },
      { no: 2, name: "label", kind: "scalar", T: 9 },
      { no: 3, name: "start_time", kind: "message", T: T20 },
      ,
      ,
    ];
    obj = { no: 4, name: "end_time", kind: "message", T };
    class T {
      constructor() {
        return closure_1_18;
      }
    }
    items[3] = obj;
    items[4] = {
      no: 5,
      name: "days",
      kind: "enum",
      repeat: 1,
      T() {
        const items = ["discord_protos.users.v1.DayOfWeek", obj];
        return items;
      },
    };
    items[5] = { no: 6, name: "enabled", kind: "scalar", T: 8 };
    const tmp2 = new tmp("discord_protos.users.v1.ScheduleRule", items, T);
    return tmp2;
  }
  create(arr) {
    obj = { ruleId: "", label: "", days: [], enabled: false };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.ruleId = pos.string();
        } else if (2 === tmp5) {
          obj.label = pos.string();
        } else if (3 === tmp5) {
          obj.startTime = closure_18.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.startTime);
        } else if (4 === tmp5) {
          obj.endTime = closure_18.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.endTime);
        } else if (5 === tmp5) {
          if (tmp6 === _mod1198.WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            if (pos.pos < sum1) {
              do {
                let days = obj.days;
                let arr = days.push(pos.int32());
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let days1 = obj.days;
            let arr2 = days1.push(pos.int32());
          }
        } else if (6 === tmp5) {
          obj.enabled = pos.bool();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(ruleId, tag, writeUnknownFields) {
    let length;
    if ("" !== ruleId.ruleId) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(ruleId.ruleId);
    }
    if ("" !== ruleId.label) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.string(ruleId.label);
    }
    if (ruleId.startTime) {
      internalBinaryWrite = closure_18.internalBinaryWrite;
      const startTime = ruleId.startTime;
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(startTime, tagResult2.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (ruleId.endTime) {
      internalBinaryWrite2 = closure_18.internalBinaryWrite;
      const endTime = ruleId.endTime;
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(endTime, tagResult3.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (ruleId.days.length) {
      const tagResult4 = tag.tag(5, _mod1198.WireType.LengthDelimited);
      tagResult4.fork();
      let num6 = 0;
      if (0 < ruleId.days.length) {
        do {
          let int32Result = tag.int32(ruleId.days[num6]);
          num6 = num6 + 1;
          length = ruleId.days.length;
        } while (num6 < length);
      }
      const joined2 = tag.join();
    }
    if (false !== ruleId.enabled) {
      const tagResult5 = tag.tag(6, _mod1198.WireType.Varint);
      tagResult5.bool(ruleId.enabled);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, ruleId, tag);
    }
    return tag;
  }
}
const prototype11 = ScheduleRule$Type.prototype;
const items10 = [
  { no: 1, name: "rule_id", kind: "scalar", T: 9 },
  { no: 2, name: "label", kind: "scalar", T: 9 },
  { no: 3, name: "start_time", kind: "message", T: T20 },
  {
    no: 4,
    name: "end_time",
    kind: "message",
    T() {
      return closure_1_18;
    },
  },
  {
    no: 5,
    name: "days",
    kind: "enum",
    repeat: 1,
    T() {
      const items = ["discord_protos.users.v1.DayOfWeek", obj];
      return items;
    },
  },
  { no: 6, name: "enabled", kind: "scalar", T: 8 },
];
const mediumUserType7 = new MediumUser$Type(
  "discord_protos.users.v1.ScheduleRule",
  items10,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
);
const MessageType12 = _mod1198.MessageType;
class RestrictedSchedule$Type extends MessageType12 {
  constructor() {
    const items = [];
    obj = { no: 1, name: "rules", kind: "message", repeat: 1, T: T21 };
    items[0] = obj;
    const tmp2 = new tmp("discord_protos.users.v1.RestrictedSchedule", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { rules: [] };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          let rules = obj.rules;
          let arr = rules.push(mediumUserType7.internalBinaryRead(pos, pos.uint32(), readUnknownField));
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(rules, tag, writeUnknownFields) {
    let length;
    let num = 0;
    if (0 < rules.rules.length) {
      do {
        internalBinaryWrite = mediumUserType7.internalBinaryWrite;
        let tmp2 = rules.rules[num];
        let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
        let internalBinaryWriteResult = internalBinaryWrite(tmp2, tagResult.fork(), writeUnknownFields);
        let joined = internalBinaryWriteResult.join();
        num = num + 1;
        length = rules.rules.length;
      } while (num < length);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, rules, tag);
    }
    return tag;
  }
}
const prototype12 = RestrictedSchedule$Type.prototype;
const items11 = [];
const obj26 = { no: 1, name: "rules", kind: "message", repeat: 1, T: T21 };
items11[0] = obj26;
const mediumUserType8 = new MediumUser$Type(
  "discord_protos.users.v1.RestrictedSchedule",
  items11,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
);
const MessageType13 = _mod1198.MessageType;
class CrossPlatformRestriction$Type extends MessageType13 {
  constructor() {
    const items = [,];
    obj = { no: 1, name: "restriction_expiry", kind: "message", T: T22 };
    items[0] = obj;
    items[1] = { no: 2, name: "application_id", kind: "scalar", T: 6 };
    const tmp2 = new tmp("discord_protos.users.v1.CrossPlatformRestriction", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { applicationId: "0" };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          let Timestamp = timestamp.Timestamp;
          obj.restrictionExpiry = Timestamp.internalBinaryRead(
            pos,
            pos.uint32(),
            readUnknownField,
            obj.restrictionExpiry,
          );
        } else if (2 === tmp5) {
          let str4 = pos.fixed64();
          obj.applicationId = str4.toString();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(restrictionExpiry, tag, writeUnknownFields) {
    if (restrictionExpiry.restrictionExpiry) {
      const Timestamp = timestamp.Timestamp;
      internalBinaryWrite = Timestamp.internalBinaryWrite;
      restrictionExpiry = restrictionExpiry.restrictionExpiry;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(restrictionExpiry, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if ("0" !== restrictionExpiry.applicationId) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.Bit64);
      tagResult1.fixed64(restrictionExpiry.applicationId);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, restrictionExpiry, tag);
    }
    return tag;
  }
}
const prototype13 = CrossPlatformRestriction$Type.prototype;
const items12 = [,];
const obj27 = { no: 1, name: "restriction_expiry", kind: "message", T: T22 };
items12[0] = obj27;
items12[1] = { no: 2, name: "application_id", kind: "scalar", T: 6 };
const mediumUserType9 = new MediumUser$Type(
  "discord_protos.users.v1.CrossPlatformRestriction",
  items12,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
);
const MessageType14 = _mod1198.MessageType;
class BadgeCommon$Type extends MessageType14 {
  constructor() {
    const items = [];
    obj = { no: 1, name: "obtained_at", kind: "message", T: T23 };
    items[0] = obj;
    const tmp2 = new tmp("discord_protos.users.v1.BadgeCommon", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = {};
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          let Timestamp = timestamp.Timestamp;
          obj.obtainedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.obtainedAt);
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(obtainedAt, tag, writeUnknownFields) {
    if (obtainedAt.obtainedAt) {
      const Timestamp = timestamp.Timestamp;
      internalBinaryWrite = Timestamp.internalBinaryWrite;
      obtainedAt = obtainedAt.obtainedAt;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(obtainedAt, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, obtainedAt, tag);
    }
    return tag;
  }
}
const prototype14 = BadgeCommon$Type.prototype;
const items13 = [];
const obj28 = { no: 1, name: "obtained_at", kind: "message", T: T23 };
items13[0] = obj28;
const mediumUserType10 = new MediumUser$Type(
  "discord_protos.users.v1.BadgeCommon",
  items13,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
);
const MessageType15 = _mod1198.MessageType;
class AprilFools2026Badge$Type extends MessageType15 {
  constructor() {
    const items = [, ,];
    obj = { no: 1, name: "common", kind: "message", T: T24 };
    items[0] = obj;
    items[1] = { no: 2, name: "level", kind: "scalar", T: 5 };
    items[2] = { no: 3, name: "combat_class", kind: "scalar", T: 9 };
    const tmp2 = new tmp("discord_protos.users.v1.AprilFools2026Badge", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { level: 0, combatClass: "" };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.common = mediumUserType10.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.common);
        } else if (2 === tmp5) {
          obj.level = pos.int32();
        } else if (3 === tmp5) {
          obj.combatClass = pos.string();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(common, tag, writeUnknownFields) {
    if (common.common) {
      internalBinaryWrite = mediumUserType10.internalBinaryWrite;
      common = common.common;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(common, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (0 !== common.level) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.Varint);
      tagResult1.int32(common.level);
    }
    if ("" !== common.combatClass) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      tagResult2.string(common.combatClass);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, common, tag);
    }
    return tag;
  }
}
const prototype15 = AprilFools2026Badge$Type.prototype;
const items14 = [, ,];
const obj29 = { no: 1, name: "common", kind: "message", T: T24 };
items14[0] = obj29;
items14[1] = { no: 2, name: "level", kind: "scalar", T: 5 };
items14[2] = { no: 3, name: "combat_class", kind: "scalar", T: 9 };
const mediumUserType11 = new MediumUser$Type(
  "discord_protos.users.v1.AprilFools2026Badge",
  items14,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
);
const MessageType16 = _mod1198.MessageType;
class Badge$Type extends MessageType16 {
  constructor() {
    const items = [];
    obj = { no: 1, name: "april_fools_2026", kind: "message", oneof: "badge", T: T25 };
    items[0] = obj;
    const tmp2 = new tmp("discord_protos.users.v1.Badge", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { badge: { oneofKind: "r" } };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj2 = arg3;
    if (arg3 == null) {
      obj2 = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          let badge = {
            oneofKind: "aprilFools2026",
            aprilFools2026: mediumUserType11.internalBinaryRead(
              pos,
              pos.uint32(),
              readUnknownField,
              obj2.badge.aprilFools2026,
            ),
          };
          obj2.badge = badge;
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj2, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj2;
  }
  internalBinaryWrite(badge, tag, writeUnknownFields) {
    if ("aprilFools2026" === badge.badge.oneofKind) {
      internalBinaryWrite = mediumUserType11.internalBinaryWrite;
      const aprilFools2026 = badge.badge.aprilFools2026;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(aprilFools2026, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, badge, tag);
    }
    return tag;
  }
}
const prototype16 = Badge$Type.prototype;
const items15 = [];
const obj30 = { no: 1, name: "april_fools_2026", kind: "message", oneof: "badge", T: T25 };
items15[0] = obj30;
const mediumUserType12 = new MediumUser$Type(
  "discord_protos.users.v1.Badge",
  items15,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
);
const MessageType17 = _mod1198.MessageType;
class UserBadges$Type extends MessageType17 {
  constructor() {
    const items = [];
    obj = { no: 1, name: "badges", kind: "message", repeat: 1, T: T26 };
    items[0] = obj;
    const tmp2 = new tmp("discord_protos.users.v1.UserBadges", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { badges: [] };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          let badges = obj.badges;
          let arr = badges.push(mediumUserType12.internalBinaryRead(pos, pos.uint32(), readUnknownField));
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(badges, tag, writeUnknownFields) {
    let length;
    let num = 0;
    if (0 < badges.badges.length) {
      do {
        internalBinaryWrite = mediumUserType12.internalBinaryWrite;
        let tmp2 = badges.badges[num];
        let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
        let internalBinaryWriteResult = internalBinaryWrite(tmp2, tagResult.fork(), writeUnknownFields);
        let joined = internalBinaryWriteResult.join();
        num = num + 1;
        length = badges.badges.length;
      } while (num < length);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, badges, tag);
    }
    return tag;
  }
}
const prototype17 = UserBadges$Type.prototype;
const items16 = [];
const obj31 = { no: 1, name: "badges", kind: "message", repeat: 1, T: T26 };
items16[0] = obj31;
const mediumUserType13 = new MediumUser$Type(
  "discord_protos.users.v1.UserBadges",
  items16,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
);
const MessageType18 = _mod1198.MessageType;
class AnonymizationInfo$Type extends MessageType18 {
  constructor() {
    let items = [,];
    obj = { no: 1, name: "status", kind: "enum", T: T27 };
    items[0] = obj;
    items[1] = { no: 2, name: "anon_user_id", kind: "message", T: T28 };
    const tmp2 = new tmp("discord_protos.users.v1.AnonymizationInfo", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { status: 0 };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.status = pos.int32();
        } else if (2 === tmp5) {
          let UInt64Value = wrappers.UInt64Value;
          obj.anonUserId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.anonUserId);
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(status, tag, writeUnknownFields) {
    if (0 !== status.status) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.int32(status.status);
    }
    if (status.anonUserId) {
      const UInt64Value = wrappers.UInt64Value;
      internalBinaryWrite = UInt64Value.internalBinaryWrite;
      const anonUserId = status.anonUserId;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(anonUserId, tagResult1.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, status, tag);
    }
    return tag;
  }
}
const prototype18 = AnonymizationInfo$Type.prototype;
const items17 = [,];
const obj32 = { no: 1, name: "status", kind: "enum", T: T27 };
items17[0] = obj32;
items17[1] = { no: 2, name: "anon_user_id", kind: "message", T: T28 };
const mediumUserType14 = new MediumUser$Type(
  "discord_protos.users.v1.AnonymizationInfo",
  items17,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
);
const MessageType19 = _mod1198.MessageType;
class UserData$Type extends MessageType19 {
  constructor() {
    const items = [, , , , , , , , , , , , , , , , , , , ,];
    obj = {
      no: 1,
      name: "linked_users",
      kind: "map",
      K: 6,
      V: {
        kind: "message",
        T() {
          return closure_1_35;
        },
      },
    };
    items[0] = obj;
    obj2 = {
      no: 2,
      name: "safety_feature_limits",
      kind: "map",
      K: 13,
      V: {
        kind: "message",
        T() {
          return items201;
        },
      },
    };
    items[1] = obj2;
    obj3 = { no: 3, name: "safety_flags", kind: "map", K: 13, V: obj4 };
    obj4 = { kind: "message", T };
    class T {
      constructor() {
        return items202;
      }
    }
    items[2] = obj3;
    items[3] = {
      no: 4,
      name: "quest",
      kind: "message",
      T() {
        return guildShardingConfigType;
      },
    };
    items[4] = {
      no: 5,
      name: "primary_guild",
      kind: "message",
      T() {
        return mediumUserType6;
      },
    };
    items[5] = {
      no: 6,
      name: "cross_platform_restriction",
      kind: "message",
      T() {
        return mediumUserType9;
      },
    };
    items[6] = {
      no: 7,
      name: "collectibles",
      kind: "message",
      T() {
        return mediumUserType5;
      },
    };
    items[7] = {
      no: 8,
      name: "safety_state",
      kind: "message",
      T() {
        return require("safety_state").SafetyState;
      },
    };
    items[8] = {
      no: 9,
      name: "premium_state",
      kind: "message",
      T() {
        return guildShardingConfigType1;
      },
    };
    items[9] = {
      no: 10,
      name: "display_name_styles",
      kind: "message",
      T() {
        return mediumUserType2;
      },
    };
    items[10] = {
      no: 11,
      name: "store_country",
      kind: "message",
      T() {
        return guildShardingConfigType2;
      },
    };
    items[11] = {
      no: 12,
      name: "restricted_schedule",
      kind: "message",
      T() {
        return mediumUserType8;
      },
    };
    items[12] = {
      no: 13,
      name: "age_assurance_data",
      kind: "message",
      T() {
        return internalBinaryWrite;
      },
    };
    items[13] = {
      no: 14,
      name: "perks",
      kind: "message",
      T() {
        return items321;
      },
    };
    items[14] = {
      no: 15,
      name: "badges",
      kind: "message",
      T() {
        return mediumUserType13;
      },
    };
    items[15] = {
      no: 16,
      name: "country_data",
      kind: "message",
      T() {
        return items322;
      },
    };
    items[16] = { no: 17, name: "is_pending_required_action", kind: "scalar", T: 8 };
    items[17] = {
      no: 18,
      name: "anonymization_info",
      kind: "message",
      T() {
        return mediumUserType14;
      },
    };
    items[18] = {
      no: 19,
      name: "typing_indicator_style",
      kind: "message",
      T() {
        return mediumUserType3;
      },
    };
    items[19] = { no: 20, name: "disable_staff_discount", kind: "scalar", T: 8 };
    items[20] = {
      no: 21,
      name: "vad_colors",
      kind: "message",
      T() {
        return userCountryDataType;
      },
    };
    const tmp2 = new tmp("discord_protos.users.v1.UserData", items, T);
    return tmp2;
  }
  create(arr) {
    obj = {
      linkedUsers: {},
      safetyFeatureLimits: {},
      safetyFlags: {},
      isPendingRequiredAction: false,
      disableStaffDiscount: false,
    };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, arg2, arg3) {
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    if (pos.pos < pos.pos + arg1) {
      [r10019, r10020] = pos.tag();
      _slicedToArray(pos.tag(), 2);
    }
    return obj;
  }
  binaryReadMap1(arg0, pos, arg2) {
    let tmp2;
    let tmp3;
    let tmp7;
    const sum = pos.pos + pos.uint32();
    obj = undefined;
    let str;
    if (pos.pos < sum) {
      while (true) {
        let internalBinaryReadResult;
        let tmp6 = _slicedToArray(pos.tag(), 2);
        [tmp7, r10020] = tmp6;
        let str1 = tmp3;
        if (1 === tmp7) {
          let str3 = pos.fixed64();
          str1 = str3.toString();
          internalBinaryReadResult = tmp2;
        } else if (2 !== tmp7) {
          break;
        } else {
          internalBinaryReadResult = closure_35.internalBinaryRead(pos, pos.uint32(), arg2);
        }
        tmp2 = internalBinaryReadResult;
        tmp3 = str1;
        obj = internalBinaryReadResult;
        str = str1;
      }
      const _globalThis = globalThis;
      const self = this;
      const self2 = this;
      const error = new Error("unknown map entry field for field discord_protos.users.v1.UserData.linked_users");
      throw error;
    }
    if (str == null) {
      str = "0";
    }
    if (obj == null) {
      obj = closure_35.create();
    }
    arg0[str] = obj;
  }
  binaryReadMap2(arg0, pos, arg2) {
    let tmp2;
    let tmp3;
    let tmp7;
    const sum = pos.pos + pos.uint32();
    obj = undefined;
    let num;
    if (pos.pos < sum) {
      while (true) {
        let internalBinaryReadResult;
        let tmp6 = _slicedToArray(pos.tag(), 2);
        [tmp7, r10020] = tmp6;
        let uint32Result = tmp3;
        if (1 === tmp7) {
          uint32Result = pos.uint32();
          internalBinaryReadResult = tmp2;
        } else if (2 !== tmp7) {
          break;
        } else {
          internalBinaryReadResult = items201.internalBinaryRead(pos, pos.uint32(), arg2);
        }
        tmp2 = internalBinaryReadResult;
        tmp3 = uint32Result;
        obj = internalBinaryReadResult;
        num = uint32Result;
      }
      const _globalThis = globalThis;
      const self = this;
      const self2 = this;
      const error = new Error(
        "unknown map entry field for field discord_protos.users.v1.UserData.safety_feature_limits",
      );
      throw error;
    }
    if (num == null) {
      num = 0;
    }
    if (obj == null) {
      obj = items201.create();
    }
    arg0[num] = obj;
  }
  binaryReadMap3(arg0, pos, arg2) {
    let tmp2;
    let tmp3;
    let tmp7;
    const sum = pos.pos + pos.uint32();
    obj = undefined;
    let num;
    if (pos.pos < sum) {
      while (true) {
        let internalBinaryReadResult;
        let tmp6 = _slicedToArray(pos.tag(), 2);
        [tmp7, r10020] = tmp6;
        let uint32Result = tmp3;
        if (1 === tmp7) {
          uint32Result = pos.uint32();
          internalBinaryReadResult = tmp2;
        } else if (2 !== tmp7) {
          break;
        } else {
          internalBinaryReadResult = items202.internalBinaryRead(pos, pos.uint32(), arg2);
        }
        tmp2 = internalBinaryReadResult;
        tmp3 = uint32Result;
        obj = internalBinaryReadResult;
        num = uint32Result;
      }
      const _globalThis = globalThis;
      const self = this;
      const self2 = this;
      const error = new Error("unknown map entry field for field discord_protos.users.v1.UserData.safety_flags");
      throw error;
    }
    if (num == null) {
      num = 0;
    }
    if (obj == null) {
      obj = items202.create();
    }
    arg0[num] = obj;
  }
  internalBinaryWrite(linkedUsers, tag, writeUnknownFields) {
    const keys = Object.keys(linkedUsers.linkedUsers);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      let forkResult = tagResult.fork();
      let tagResult1 = forkResult.tag(1, _mod1198.WireType.Bit64);
      let fixed64Result = tagResult1.fixed64(nextResult);
      let tagResult2 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      let forkResult1 = tagResult2.fork();
      let internalBinaryWriteResult = closure_35.internalBinaryWrite(
        linkedUsers.linkedUsers[nextResult],
        tag,
        writeUnknownFields,
      );
      let joined = tag.join();
      let joined1 = joined.join();
      continue;
    }
    const keys1 = Object.keys(linkedUsers.safetyFeatureLimits);
    for (const item10059 of keys1) {
      let tagResult3 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      let forkResult2 = tagResult3.fork();
      let tagResult4 = forkResult2.tag(1, _mod1198.WireType.Varint);
      let _parseInt = parseInt;
      let uint32Result = tagResult4.uint32(parseInt(item10059));
      let tagResult5 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      let forkResult3 = tagResult5.fork();
      let internalBinaryWriteResult1 = items201.internalBinaryWrite(
        linkedUsers.safetyFeatureLimits[item10059],
        tag,
        writeUnknownFields,
      );
      let joined2 = tag.join();
      let joined3 = joined2.join();
      continue;
    }
    const keys2 = Object.keys(linkedUsers.safetyFlags);
    const iter2 = keys2[Symbol.iterator]();
    const nextResult1 = iter2.next();
    while (iter2 !== undefined) {
      let tagResult6 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      let forkResult4 = tagResult6.fork();
      let tagResult7 = forkResult4.tag(1, _mod1198.WireType.Varint);
      let _parseInt2 = parseInt;
      let uint32Result1 = tagResult7.uint32(parseInt(nextResult1));
      let tagResult8 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      let forkResult5 = tagResult8.fork();
      let internalBinaryWriteResult2 = items202.internalBinaryWrite(
        linkedUsers.safetyFlags[nextResult1],
        tag,
        writeUnknownFields,
      );
      let joined4 = tag.join();
      let joined5 = joined4.join();
      continue;
    }
    if (linkedUsers.quest) {
      internalBinaryWrite = guildShardingConfigType.internalBinaryWrite;
      const quest = linkedUsers.quest;
      const tagResult9 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult3 = internalBinaryWrite(quest, tagResult9.fork(), writeUnknownFields);
      const joined6 = internalBinaryWriteResult3.join();
    }
    if (linkedUsers.primaryGuild) {
      internalBinaryWrite2 = mediumUserType6.internalBinaryWrite;
      const primaryGuild = linkedUsers.primaryGuild;
      const tagResult10 = tag.tag(5, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(primaryGuild, tagResult10.fork(), writeUnknownFields);
      const joined7 = internalBinaryWrite2Result.join();
    }
    if (linkedUsers.crossPlatformRestriction) {
      internalBinaryWrite3 = mediumUserType9.internalBinaryWrite;
      const crossPlatformRestriction = linkedUsers.crossPlatformRestriction;
      const tagResult11 = tag.tag(6, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(
        crossPlatformRestriction,
        tagResult11.fork(),
        writeUnknownFields,
      );
      const joined8 = internalBinaryWrite3Result.join();
    }
    if (linkedUsers.collectibles) {
      internalBinaryWrite4 = mediumUserType5.internalBinaryWrite;
      const collectibles = linkedUsers.collectibles;
      const tagResult12 = tag.tag(7, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(collectibles, tagResult12.fork(), writeUnknownFields);
      const joined9 = internalBinaryWrite4Result.join();
    }
    if (linkedUsers.safetyState) {
      const SafetyState = safety_state.SafetyState;
      internalBinaryWrite5 = SafetyState.internalBinaryWrite;
      const safetyState = linkedUsers.safetyState;
      const tagResult13 = tag.tag(8, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(safetyState, tagResult13.fork(), writeUnknownFields);
      const joined10 = internalBinaryWrite5Result.join();
    }
    if (linkedUsers.premiumState) {
      internalBinaryWrite6 = guildShardingConfigType1.internalBinaryWrite;
      const premiumState = linkedUsers.premiumState;
      const tagResult14 = tag.tag(9, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite6Result = internalBinaryWrite6(premiumState, tagResult14.fork(), writeUnknownFields);
      const joined11 = internalBinaryWrite6Result.join();
    }
    if (linkedUsers.displayNameStyles) {
      internalBinaryWrite7 = mediumUserType2.internalBinaryWrite;
      const displayNameStyles = linkedUsers.displayNameStyles;
      const tagResult15 = tag.tag(10, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite7Result = internalBinaryWrite7(
        displayNameStyles,
        tagResult15.fork(),
        writeUnknownFields,
      );
      const joined12 = internalBinaryWrite7Result.join();
    }
    if (linkedUsers.storeCountry) {
      internalBinaryWrite8 = guildShardingConfigType2.internalBinaryWrite;
      const storeCountry = linkedUsers.storeCountry;
      const tagResult16 = tag.tag(11, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite8Result = internalBinaryWrite8(storeCountry, tagResult16.fork(), writeUnknownFields);
      const joined13 = internalBinaryWrite8Result.join();
    }
    if (linkedUsers.restrictedSchedule) {
      const internalBinaryWrite9 = mediumUserType8.internalBinaryWrite;
      const restrictedSchedule = linkedUsers.restrictedSchedule;
      const tagResult17 = tag.tag(12, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite9Result = internalBinaryWrite9(
        restrictedSchedule,
        tagResult17.fork(),
        writeUnknownFields,
      );
      const joined14 = internalBinaryWrite9Result.join();
    }
    if (linkedUsers.ageAssuranceData) {
      const internalBinaryWrite10 = internalBinaryWrite.internalBinaryWrite;
      const ageAssuranceData = linkedUsers.ageAssuranceData;
      const tagResult18 = tag.tag(13, _mod1198.WireType.LengthDelimited);
      const result = internalBinaryWrite10(ageAssuranceData, tagResult18.fork(), writeUnknownFields);
      const joined15 = result.join();
    }
    if (linkedUsers.perks) {
      const internalBinaryWrite11 = items321.internalBinaryWrite;
      const perks = linkedUsers.perks;
      const tagResult19 = tag.tag(14, _mod1198.WireType.LengthDelimited);
      const result1 = internalBinaryWrite11(perks, tagResult19.fork(), writeUnknownFields);
      const joined16 = result1.join();
    }
    if (linkedUsers.badges) {
      const internalBinaryWrite12 = mediumUserType13.internalBinaryWrite;
      const badges = linkedUsers.badges;
      const tagResult20 = tag.tag(15, _mod1198.WireType.LengthDelimited);
      const result2 = internalBinaryWrite12(badges, tagResult20.fork(), writeUnknownFields);
      const joined17 = result2.join();
    }
    if (linkedUsers.countryData) {
      const internalBinaryWrite13 = items322.internalBinaryWrite;
      const countryData = linkedUsers.countryData;
      const tagResult21 = tag.tag(16, _mod1198.WireType.LengthDelimited);
      const result3 = internalBinaryWrite13(countryData, tagResult21.fork(), writeUnknownFields);
      const joined18 = result3.join();
    }
    if (false !== linkedUsers.isPendingRequiredAction) {
      const tagResult22 = tag.tag(17, _mod1198.WireType.Varint);
      tagResult22.bool(linkedUsers.isPendingRequiredAction);
    }
    if (linkedUsers.anonymizationInfo) {
      const internalBinaryWrite14 = mediumUserType14.internalBinaryWrite;
      const anonymizationInfo = linkedUsers.anonymizationInfo;
      const tagResult23 = tag.tag(18, _mod1198.WireType.LengthDelimited);
      const result4 = internalBinaryWrite14(anonymizationInfo, tagResult23.fork(), writeUnknownFields);
      const joined19 = result4.join();
    }
    if (linkedUsers.typingIndicatorStyle) {
      const internalBinaryWrite15 = mediumUserType3.internalBinaryWrite;
      const typingIndicatorStyle = linkedUsers.typingIndicatorStyle;
      const tagResult24 = tag.tag(19, _mod1198.WireType.LengthDelimited);
      const result5 = internalBinaryWrite15(typingIndicatorStyle, tagResult24.fork(), writeUnknownFields);
      const joined20 = result5.join();
    }
    if (false !== linkedUsers.disableStaffDiscount) {
      const tagResult25 = tag.tag(20, _mod1198.WireType.Varint);
      tagResult25.bool(linkedUsers.disableStaffDiscount);
    }
    if (linkedUsers.vadColors) {
      const internalBinaryWrite16 = userCountryDataType.internalBinaryWrite;
      const vadColors = linkedUsers.vadColors;
      const tagResult26 = tag.tag(21, _mod1198.WireType.LengthDelimited);
      const result6 = internalBinaryWrite16(vadColors, tagResult26.fork(), writeUnknownFields);
      const joined21 = result6.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, linkedUsers, tag);
    }
    return tag;
  }
}
const prototype19 = UserData$Type.prototype;
const userDataType = new UserData$Type();
const MessageType20 = _mod1198.MessageType;
class AgeAssuranceData$Type extends MessageType20 {
  constructor() {
    let items = [, , , , , , , ,];
    obj = { no: 1, name: "estimated_date_of_birth", kind: "message", T: T29 };
    items[0] = obj;
    items[1] = { no: 2, name: "method", kind: "enum", T: T30 };
    items[2] = { no: 3, name: "method_version", kind: "scalar", T: 5 };
    items[3] = { no: 4, name: "vendor", kind: "enum", T: T31 };
    items[4] = { no: 5, name: "verified_at", kind: "message", T: T32 };
    items[5] = { no: 6, name: "estimated_age_group", kind: "enum", T: T33 };
    items[6] = { no: 7, name: "is_regional_adult", kind: "scalar", T: 8 };
    obj2 = { no: 8, name: "cooldown_reset_at", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[4]).Timestamp;
      }
    }
    items[7] = obj2;
    items[8] = { no: 9, name: "excluded_from_prediction_since", kind: "message", T: T34 };
    const tmp2 = new tmp("discord_protos.users.v1.AgeAssuranceData", items, T);
    return tmp2;
  }
  create(arr) {
    obj = { method: 0, methodVersion: 0, vendor: 0, estimatedAgeGroup: 0, isRegionalAdult: false };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          let Timestamp4 = timestamp.Timestamp;
          obj.estimatedDateOfBirth = Timestamp4.internalBinaryRead(
            pos,
            pos.uint32(),
            readUnknownField,
            obj.estimatedDateOfBirth,
          );
        } else if (2 === tmp5) {
          obj.method = pos.int32();
        } else if (3 === tmp5) {
          obj.methodVersion = pos.int32();
        } else if (4 === tmp5) {
          obj.vendor = pos.int32();
        } else if (5 === tmp5) {
          let Timestamp3 = timestamp.Timestamp;
          obj.verifiedAt = Timestamp3.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.verifiedAt);
        } else if (6 === tmp5) {
          obj.estimatedAgeGroup = pos.int32();
        } else if (7 === tmp5) {
          obj.isRegionalAdult = pos.bool();
        } else if (8 === tmp5) {
          let Timestamp2 = timestamp.Timestamp;
          obj.cooldownResetAt = Timestamp2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.cooldownResetAt);
        } else if (9 === tmp5) {
          let Timestamp = timestamp.Timestamp;
          obj.excludedFromPredictionSince = Timestamp.internalBinaryRead(
            pos,
            pos.uint32(),
            readUnknownField,
            obj.excludedFromPredictionSince,
          );
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(estimatedDateOfBirth, tag, writeUnknownFields) {
    if (estimatedDateOfBirth.estimatedDateOfBirth) {
      const Timestamp = timestamp.Timestamp;
      internalBinaryWrite = Timestamp.internalBinaryWrite;
      estimatedDateOfBirth = estimatedDateOfBirth.estimatedDateOfBirth;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(estimatedDateOfBirth, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (0 !== estimatedDateOfBirth.method) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.Varint);
      tagResult1.int32(estimatedDateOfBirth.method);
    }
    if (0 !== estimatedDateOfBirth.methodVersion) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
      tagResult2.int32(estimatedDateOfBirth.methodVersion);
    }
    if (0 !== estimatedDateOfBirth.vendor) {
      const tagResult3 = tag.tag(4, _mod1198.WireType.Varint);
      tagResult3.int32(estimatedDateOfBirth.vendor);
    }
    if (estimatedDateOfBirth.verifiedAt) {
      const Timestamp2 = timestamp.Timestamp;
      internalBinaryWrite2 = Timestamp2.internalBinaryWrite;
      const verifiedAt = estimatedDateOfBirth.verifiedAt;
      const tagResult4 = tag.tag(5, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(verifiedAt, tagResult4.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (0 !== estimatedDateOfBirth.estimatedAgeGroup) {
      const tagResult5 = tag.tag(6, _mod1198.WireType.Varint);
      tagResult5.int32(estimatedDateOfBirth.estimatedAgeGroup);
    }
    if (false !== estimatedDateOfBirth.isRegionalAdult) {
      const tagResult6 = tag.tag(7, _mod1198.WireType.Varint);
      tagResult6.bool(estimatedDateOfBirth.isRegionalAdult);
    }
    if (estimatedDateOfBirth.cooldownResetAt) {
      const Timestamp3 = timestamp.Timestamp;
      internalBinaryWrite3 = Timestamp3.internalBinaryWrite;
      const cooldownResetAt = estimatedDateOfBirth.cooldownResetAt;
      const tagResult7 = tag.tag(8, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(cooldownResetAt, tagResult7.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if (estimatedDateOfBirth.excludedFromPredictionSince) {
      const Timestamp4 = timestamp.Timestamp;
      internalBinaryWrite4 = Timestamp4.internalBinaryWrite;
      const excludedFromPredictionSince = estimatedDateOfBirth.excludedFromPredictionSince;
      const tagResult8 = tag.tag(9, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(
        excludedFromPredictionSince,
        tagResult8.fork(),
        writeUnknownFields,
      );
      const joined3 = internalBinaryWrite4Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, estimatedDateOfBirth, tag);
    }
    return tag;
  }
}
const prototype20 = AgeAssuranceData$Type.prototype;
const items18 = [, , , , , , , ,];
const obj33 = { no: 1, name: "estimated_date_of_birth", kind: "message", T: T29 };
items18[0] = obj33;
items18[1] = { no: 2, name: "method", kind: "enum", T: T30 };
items18[2] = { no: 3, name: "method_version", kind: "scalar", T: 5 };
items18[3] = { no: 4, name: "vendor", kind: "enum", T: T31 };
items18[4] = { no: 5, name: "verified_at", kind: "message", T: T32 };
items18[5] = { no: 6, name: "estimated_age_group", kind: "enum", T: T33 };
items18[6] = { no: 7, name: "is_regional_adult", kind: "scalar", T: 8 };
items18[7] = {
  no: 8,
  name: "cooldown_reset_at",
  kind: "message",
  T() {
    return require("timestamp").Timestamp;
  },
};
items18[8] = { no: 9, name: "excluded_from_prediction_since", kind: "message", T: T34 };
let tmp27 = new "binaryReadMap3"(
  "discord_protos.users.v1.AgeAssuranceData",
  items18,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
  obj14,
  obj15,
);
const __initData3 = tmp27;
const MessageType21 = _mod1198.MessageType;
class LinkedUser$Type extends MessageType21 {
  constructor() {
    let items = [
      { no: 1, name: "user_id", kind: "scalar", T: 6 },
      { no: 2, name: "link_type", kind: "enum", T: T35 },
      { no: 3, name: "link_status", kind: "enum", T: T36 },
      { no: 4, name: "requestor_id", kind: "scalar", T: 6 },
      ,
    ];
    obj = { no: 5, name: "created_at", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[4]).Timestamp;
      }
    }
    items[4] = obj;
    items[5] = { no: 6, name: "updated_at", kind: "message", T: T37 };
    const tmp2 = new tmp("discord_protos.users.v1.LinkedUser", items, T);
    return tmp2;
  }
  create(arr) {
    obj = { userId: "0", linkType: 0, linkStatus: 0, requestorId: "0" };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          let str5 = pos.fixed64();
          obj.userId = str5.toString();
        } else if (2 === tmp5) {
          obj.linkType = pos.int32();
        } else if (3 === tmp5) {
          obj.linkStatus = pos.int32();
        } else if (4 === tmp5) {
          let str4 = pos.fixed64();
          obj.requestorId = str4.toString();
        } else if (5 === tmp5) {
          let Timestamp2 = timestamp.Timestamp;
          obj.createdAt = Timestamp2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.createdAt);
        } else if (6 === tmp5) {
          let Timestamp = timestamp.Timestamp;
          obj.updatedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.updatedAt);
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(userId, tag, writeUnknownFields) {
    if ("0" !== userId.userId) {
      const tagResult = tag.tag(1, _mod1198.WireType.Bit64);
      tagResult.fixed64(userId.userId);
    }
    if (0 !== userId.linkType) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.Varint);
      tagResult1.int32(userId.linkType);
    }
    if (0 !== userId.linkStatus) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
      tagResult2.int32(userId.linkStatus);
    }
    if ("0" !== userId.requestorId) {
      const tagResult3 = tag.tag(4, _mod1198.WireType.Bit64);
      tagResult3.fixed64(userId.requestorId);
    }
    if (userId.createdAt) {
      const Timestamp = timestamp.Timestamp;
      internalBinaryWrite = Timestamp.internalBinaryWrite;
      const createdAt = userId.createdAt;
      const tagResult4 = tag.tag(5, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(createdAt, tagResult4.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (userId.updatedAt) {
      const Timestamp2 = timestamp.Timestamp;
      internalBinaryWrite2 = Timestamp2.internalBinaryWrite;
      const updatedAt = userId.updatedAt;
      const tagResult5 = tag.tag(6, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(updatedAt, tagResult5.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, userId, tag);
    }
    return tag;
  }
}
const prototype21 = LinkedUser$Type.prototype;
const items19 = [
  { no: 1, name: "user_id", kind: "scalar", T: 6 },
  { no: 2, name: "link_type", kind: "enum", T: T35 },
  { no: 3, name: "link_status", kind: "enum", T: T36 },
  { no: 4, name: "requestor_id", kind: "scalar", T: 6 },
  {
    no: 5,
    name: "created_at",
    kind: "message",
    T() {
      return require("timestamp").Timestamp;
    },
  },
  { no: 6, name: "updated_at", kind: "message", T: T37 },
];
let tmp28 = new "binaryReadMap3"(
  "discord_protos.users.v1.LinkedUser",
  items19,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
  obj14,
  obj15,
);
const __initData4 = tmp28;
const MessageType22 = _mod1198.MessageType;
class RateLimitData$Type extends MessageType22 {
  constructor() {
    const items = [];
    obj = { no: 1, name: "limit_expiry", kind: "message", T: T38 };
    items[0] = obj;
    const tmp2 = new tmp("discord_protos.users.v1.RateLimitData", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = {};
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          let Timestamp = timestamp.Timestamp;
          obj.limitExpiry = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.limitExpiry);
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(limitExpiry, tag, writeUnknownFields) {
    if (limitExpiry.limitExpiry) {
      const Timestamp = timestamp.Timestamp;
      internalBinaryWrite = Timestamp.internalBinaryWrite;
      limitExpiry = limitExpiry.limitExpiry;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(limitExpiry, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, limitExpiry, tag);
    }
    return tag;
  }
}
const prototype22 = RateLimitData$Type.prototype;
const items20 = [];
const obj34 = { no: 1, name: "limit_expiry", kind: "message", T: T38 };
items20[0] = obj34;
let tmp29 = new "binaryReadMap3"(
  "discord_protos.users.v1.RateLimitData",
  items20,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
  obj14,
  obj15,
);
let closure_36 = tmp29;
const MessageType23 = _mod1198.MessageType;
class FeatureLimits$Type extends MessageType23 {
  constructor() {
    const items = [];
    obj = { no: 1, name: "map", kind: "map", K: 13, V: { kind: "message", T: T39 } };
    items[0] = obj;
    const tmp2 = new tmp("discord_protos.users.v1.FeatureLimits", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { map: {} };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp4;
    let tmp5;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp3 = _slicedToArray(pos.tag(), 2);
        [tmp4, tmp5] = tmp3;
        if (1 === tmp4) {
          let binaryReadMap1Result = self.binaryReadMap1(obj.map, pos, readUnknownField);
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp14 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp4 + " (wire type " + tmp5 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp5);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp4, tmp5, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  binaryReadMap1(arg0, pos, arg2) {
    let tmp2;
    let tmp3;
    let tmp7;
    const sum = pos.pos + pos.uint32();
    obj = undefined;
    let num;
    if (pos.pos < sum) {
      while (true) {
        let internalBinaryReadResult;
        let tmp6 = _slicedToArray(pos.tag(), 2);
        [tmp7, r10020] = tmp6;
        let uint32Result = tmp3;
        if (1 === tmp7) {
          uint32Result = pos.uint32();
          internalBinaryReadResult = tmp2;
        } else if (2 !== tmp7) {
          break;
        } else {
          internalBinaryReadResult = closure_36.internalBinaryRead(pos, pos.uint32(), arg2);
        }
        tmp2 = internalBinaryReadResult;
        tmp3 = uint32Result;
        obj = internalBinaryReadResult;
        num = uint32Result;
      }
      const _globalThis = globalThis;
      const self = this;
      const self2 = this;
      const error = new Error("unknown map entry field for field discord_protos.users.v1.FeatureLimits.map");
      throw error;
    }
    if (num == null) {
      num = 0;
    }
    if (obj == null) {
      obj = closure_36.create();
    }
    arg0[num] = obj;
  }
  internalBinaryWrite(arg0, tag, writeUnknownFields) {
    const keys = Object.keys(arg0.map);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      let forkResult = tagResult.fork();
      let tagResult1 = forkResult.tag(1, _mod1198.WireType.Varint);
      let _parseInt = parseInt;
      let uint32Result = tagResult1.uint32(parseInt(nextResult));
      let tagResult2 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      let forkResult1 = tagResult2.fork();
      let internalBinaryWriteResult = closure_36.internalBinaryWrite(arg0.map[nextResult], tag, writeUnknownFields);
      let joined = tag.join();
      let joined1 = joined.join();
      continue;
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, arg0, tag);
    }
    return tag;
  }
}
const prototype23 = FeatureLimits$Type.prototype;
const items21 = [];
const obj35 = { no: 1, name: "map", kind: "map", K: 13, V: { kind: "message", T: T39 } };
items21[0] = obj35;
const items201 = new items20(
  "discord_protos.users.v1.FeatureLimits",
  items21,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
  obj14,
);
const MessageType24 = _mod1198.MessageType;
class SafetyFlag$Type extends MessageType24 {
  constructor() {
    const items = [];
    obj = { no: 1, name: "flag_expiry", kind: "message", T: T40 };
    items[0] = obj;
    const tmp2 = new tmp("discord_protos.users.v1.SafetyFlag", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = {};
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          let Timestamp = timestamp.Timestamp;
          obj.flagExpiry = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.flagExpiry);
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(flagExpiry, tag, writeUnknownFields) {
    if (flagExpiry.flagExpiry) {
      const Timestamp = timestamp.Timestamp;
      internalBinaryWrite = Timestamp.internalBinaryWrite;
      flagExpiry = flagExpiry.flagExpiry;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(flagExpiry, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, flagExpiry, tag);
    }
    return tag;
  }
}
const prototype24 = SafetyFlag$Type.prototype;
const items22 = [];
const obj36 = { no: 1, name: "flag_expiry", kind: "message", T: T40 };
items22[0] = obj36;
const items202 = new items20(
  "discord_protos.users.v1.SafetyFlag",
  items22,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
  obj14,
);
const MessageType25 = _mod1198.MessageType;
class GuildShardingConfig$Type extends MessageType25 {
  constructor() {
    const items = [{ no: 1, name: "shards", kind: "scalar", repeat: 1, T: 5 }];
    const tmp2 = new tmp("discord_protos.users.v1.GuildShardingConfig", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { shards: [] };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          if (tmp6 === _mod1198.WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            if (pos.pos < sum1) {
              do {
                let shards = obj.shards;
                let arr = shards.push(pos.int32());
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let shards1 = obj.shards;
            let arr2 = shards1.push(pos.int32());
          }
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(shards, tag, writeUnknownFields) {
    let length;
    if (shards.shards.length) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.fork();
      let num2 = 0;
      if (0 < shards.shards.length) {
        do {
          let int32Result = tag.int32(shards.shards[num2]);
          num2 = num2 + 1;
          length = shards.shards.length;
        } while (num2 < length);
      }
      const joined = tag.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, shards, tag);
    }
    return tag;
  }
}
const prototype25 = GuildShardingConfig$Type.prototype;
const items23 = [{ no: 1, name: "shards", kind: "scalar", repeat: 1, T: 5 }];
const items221 = new items22(
  "discord_protos.users.v1.GuildShardingConfig",
  items23,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
);
const MessageType26 = _mod1198.MessageType;
class QuestMetadata$Type extends MessageType26 {
  constructor() {
    const items = [{ no: 1, name: "quests_completed", kind: "scalar", T: 13 }];
    const tmp2 = new tmp("discord_protos.users.v1.QuestMetadata", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { questsCompleted: 0 };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.questsCompleted = pos.uint32();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(questsCompleted, tag, writeUnknownFields) {
    if (0 !== questsCompleted.questsCompleted) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.uint32(questsCompleted.questsCompleted);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, questsCompleted, tag);
    }
    return tag;
  }
}
const prototype26 = QuestMetadata$Type.prototype;
const items24 = [{ no: 1, name: "quests_completed", kind: "scalar", T: 13 }];
const guildShardingConfigType = new GuildShardingConfig$Type(
  "discord_protos.users.v1.QuestMetadata",
  items24,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
  obj14,
);
const MessageType27 = _mod1198.MessageType;
class PremiumState$Type extends MessageType27 {
  constructor() {
    let items = [, ,];
    obj = { no: 1, name: "premium_source", kind: "enum", T: T41 };
    items[0] = obj;
    obj2 = { no: 2, name: "premium_subscription_type", kind: "enum", T };
    class T {
      constructor() {
        items = ["discord_protos.users.v1.PremiumSubscriptionType"];
        items[1] = closure_1_15;
        items[2] = "PREMIUM_SUBSCRIPTION_TYPE_";
        return items;
      }
    }
    items[1] = obj2;
    items[2] = { no: 3, name: "premium_subscription_group_role", kind: "enum", T: T42 };
    const tmp2 = new tmp("discord_protos.users.v1.PremiumState", items, T);
    return tmp2;
  }
  create(arr) {
    obj = { premiumSource: 0, premiumSubscriptionType: 0, premiumSubscriptionGroupRole: 0 };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.premiumSource = pos.int32();
        } else if (2 === tmp5) {
          obj.premiumSubscriptionType = pos.int32();
        } else if (3 === tmp5) {
          obj.premiumSubscriptionGroupRole = pos.int32();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(premiumSource, tag, writeUnknownFields) {
    if (0 !== premiumSource.premiumSource) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.int32(premiumSource.premiumSource);
    }
    if (0 !== premiumSource.premiumSubscriptionType) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.Varint);
      tagResult1.int32(premiumSource.premiumSubscriptionType);
    }
    if (0 !== premiumSource.premiumSubscriptionGroupRole) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
      tagResult2.int32(premiumSource.premiumSubscriptionGroupRole);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, premiumSource, tag);
    }
    return tag;
  }
}
const prototype27 = PremiumState$Type.prototype;
const items25 = [, ,];
const obj37 = { no: 1, name: "premium_source", kind: "enum", T: T41 };
items25[0] = obj37;
items25[1] = {
  no: 2,
  name: "premium_subscription_type",
  kind: "enum",
  T() {
    const items = ["discord_protos.users.v1.PremiumSubscriptionType", obj18, "PREMIUM_SUBSCRIPTION_TYPE_"];
    return items;
  },
};
items25[2] = { no: 3, name: "premium_subscription_group_role", kind: "enum", T: T42 };
const guildShardingConfigType1 = new GuildShardingConfig$Type(
  "discord_protos.users.v1.PremiumState",
  items25,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
  obj14,
);
const MessageType28 = _mod1198.MessageType;
class StoreCountry$Type extends MessageType28 {
  constructor() {
    const items = [
      { no: 1, name: "country", kind: "scalar", T: 9 },
      { no: 2, name: "set_at", kind: "message", T: T43 },
    ];
    const tmp2 = new tmp("discord_protos.users.v1.StoreCountry", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { country: "" };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.country = pos.string();
        } else if (2 === tmp5) {
          let Timestamp = timestamp.Timestamp;
          obj.setAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.setAt);
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(country, tag, writeUnknownFields) {
    if ("" !== country.country) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(country.country);
    }
    if (country.setAt) {
      const Timestamp = timestamp.Timestamp;
      internalBinaryWrite = Timestamp.internalBinaryWrite;
      const setAt = country.setAt;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(setAt, tagResult1.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, country, tag);
    }
    return tag;
  }
}
const prototype28 = StoreCountry$Type.prototype;
const items26 = [
  { no: 1, name: "country", kind: "scalar", T: 9 },
  { no: 2, name: "set_at", kind: "message", T: T43 },
];
const guildShardingConfigType2 = new GuildShardingConfig$Type(
  "discord_protos.users.v1.StoreCountry",
  items26,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
  obj14,
);
const MessageType29 = _mod1198.MessageType;
class PerkConfig$Type extends MessageType29 {
  constructor() {
    let items = [, , , , ,];
    obj = { no: 1, name: "source", kind: "enum", repeat: 1, T: T44 };
    items[0] = obj;
    items[1] = { no: 2, name: "increased_file_upload_size", kind: "message", oneof: "kind", T: T45 };
    items[2] = { no: 3, name: "increased_guild_limit", kind: "message", oneof: "kind", T: T46 };
    items[3] = { no: 4, name: "display_name_styles", kind: "message", oneof: "kind", T: T47 };
    obj2 = { no: 5, name: "client_themes", kind: "message", oneof: "kind", T };
    class T {
      constructor() {
        return closure_1_46;
      }
    }
    items[4] = obj2;
    items[5] = { no: 6, name: "app_icons", kind: "message", oneof: "kind", T: T48 };
    const tmp2 = new tmp("discord_protos.users.v1.PerkConfig", items, T);
    return tmp2;
  }
  create(arr) {
    obj = { source: [], kind: { oneofKind: "r" } };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj2 = arg3;
    if (arg3 == null) {
      obj2 = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          if (tmp6 === _mod1198.WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            if (pos.pos < sum1) {
              do {
                let source = obj2.source;
                let arr = source.push(pos.int32());
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let source1 = obj2.source;
            let arr2 = source1.push(pos.int32());
          }
        } else if (2 === tmp5) {
          obj3 = {
            oneofKind: "increasedFileUploadSize",
            increasedFileUploadSize: guildShardingConfigType4.internalBinaryRead(
              pos,
              pos.uint32(),
              readUnknownField,
              obj2.kind.increasedFileUploadSize,
            ),
          };
          obj2.kind = obj3;
        } else if (3 === tmp5) {
          obj4 = {
            oneofKind: "increasedGuildLimit",
            increasedGuildLimit: guildShardingConfigType5.internalBinaryRead(
              pos,
              pos.uint32(),
              readUnknownField,
              obj2.kind.increasedGuildLimit,
            ),
          };
          obj2.kind = obj4;
        } else if (4 === tmp5) {
          obj5 = {
            oneofKind: "displayNameStyles",
            displayNameStyles: guildShardingConfigType6.internalBinaryRead(
              pos,
              pos.uint32(),
              readUnknownField,
              obj2.kind.displayNameStyles,
            ),
          };
          obj2.kind = obj5;
        } else if (5 === tmp5) {
          obj10 = {
            oneofKind: "clientThemes",
            clientThemes: guildShardingConfigType7.internalBinaryRead(
              pos,
              pos.uint32(),
              readUnknownField,
              obj2.kind.clientThemes,
            ),
          };
          obj2.kind = obj10;
        } else if (6 === tmp5) {
          let kind = {
            oneofKind: "appIcons",
            appIcons: guildShardingConfigType8.internalBinaryRead(
              pos,
              pos.uint32(),
              readUnknownField,
              obj2.kind.appIcons,
            ),
          };
          obj2.kind = kind;
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj2, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj2;
  }
  internalBinaryWrite(source, tag, writeUnknownFields) {
    let length;
    if (source.source.length) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.fork();
      let num2 = 0;
      if (0 < source.source.length) {
        do {
          let int32Result = tag.int32(source.source[num2]);
          num2 = num2 + 1;
          length = source.source.length;
        } while (num2 < length);
      }
      const joined = tag.join();
    }
    if ("increasedFileUploadSize" === source.kind.oneofKind) {
      internalBinaryWrite = guildShardingConfigType4.internalBinaryWrite;
      const increasedFileUploadSize = source.kind.increasedFileUploadSize;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(
        increasedFileUploadSize,
        tagResult1.fork(),
        writeUnknownFields,
      );
      const joined1 = internalBinaryWriteResult.join();
    }
    if ("increasedGuildLimit" === source.kind.oneofKind) {
      internalBinaryWrite2 = guildShardingConfigType5.internalBinaryWrite;
      const increasedGuildLimit = source.kind.increasedGuildLimit;
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(
        increasedGuildLimit,
        tagResult2.fork(),
        writeUnknownFields,
      );
      const joined2 = internalBinaryWrite2Result.join();
    }
    if ("displayNameStyles" === source.kind.oneofKind) {
      internalBinaryWrite3 = guildShardingConfigType6.internalBinaryWrite;
      const displayNameStyles = source.kind.displayNameStyles;
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(displayNameStyles, tagResult3.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite3Result.join();
    }
    if ("clientThemes" === source.kind.oneofKind) {
      internalBinaryWrite4 = guildShardingConfigType7.internalBinaryWrite;
      const clientThemes = source.kind.clientThemes;
      const tagResult4 = tag.tag(5, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(clientThemes, tagResult4.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite4Result.join();
    }
    if ("appIcons" === source.kind.oneofKind) {
      internalBinaryWrite5 = guildShardingConfigType8.internalBinaryWrite;
      const appIcons = source.kind.appIcons;
      const tagResult5 = tag.tag(6, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(appIcons, tagResult5.fork(), writeUnknownFields);
      const joined5 = internalBinaryWrite5Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, source, tag);
    }
    return tag;
  }
}
const prototype29 = PerkConfig$Type.prototype;
const items27 = [, , , , ,];
const obj38 = { no: 1, name: "source", kind: "enum", repeat: 1, T: T44 };
items27[0] = obj38;
items27[1] = { no: 2, name: "increased_file_upload_size", kind: "message", oneof: "kind", T: T45 };
items27[2] = { no: 3, name: "increased_guild_limit", kind: "message", oneof: "kind", T: T46 };
items27[3] = { no: 4, name: "display_name_styles", kind: "message", oneof: "kind", T: T47 };
items27[4] = {
  no: 5,
  name: "client_themes",
  kind: "message",
  oneof: "kind",
  T() {
    return guildShardingConfigType7;
  },
};
items27[5] = { no: 6, name: "app_icons", kind: "message", oneof: "kind", T: T48 };
const guildShardingConfigType3 = new GuildShardingConfig$Type(
  "discord_protos.users.v1.PerkConfig",
  items27,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
  obj14,
);
const MessageType30 = _mod1198.MessageType;
class PerkConfigIncreasedFileUploadSize$Type extends MessageType30 {
  constructor() {
    const items = [{ no: 1, name: "max_size", kind: "scalar", T: 4 }];
    const tmp2 = new tmp("discord_protos.users.v1.PerkConfigIncreasedFileUploadSize", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { maxSize: "0" };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          let str4 = pos.uint64();
          obj.maxSize = str4.toString();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(maxSize, tag, writeUnknownFields) {
    if ("0" !== maxSize.maxSize) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.uint64(maxSize.maxSize);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, maxSize, tag);
    }
    return tag;
  }
}
const prototype30 = PerkConfigIncreasedFileUploadSize$Type.prototype;
const items28 = [{ no: 1, name: "max_size", kind: "scalar", T: 4 }];
const guildShardingConfigType4 = new GuildShardingConfig$Type(
  "discord_protos.users.v1.PerkConfigIncreasedFileUploadSize",
  items28,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
  obj14,
);
const MessageType31 = _mod1198.MessageType;
class PerkConfigIncreasedGuildLimit$Type extends MessageType31 {
  constructor() {
    const items = [{ no: 1, name: "max_guilds", kind: "scalar", T: 13 }];
    const tmp2 = new tmp("discord_protos.users.v1.PerkConfigIncreasedGuildLimit", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { maxGuilds: 0 };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.maxGuilds = pos.uint32();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(maxGuilds, tag, writeUnknownFields) {
    if (0 !== maxGuilds.maxGuilds) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.uint32(maxGuilds.maxGuilds);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, maxGuilds, tag);
    }
    return tag;
  }
}
const prototype31 = PerkConfigIncreasedGuildLimit$Type.prototype;
const items29 = [{ no: 1, name: "max_guilds", kind: "scalar", T: 13 }];
const guildShardingConfigType5 = new GuildShardingConfig$Type(
  "discord_protos.users.v1.PerkConfigIncreasedGuildLimit",
  items29,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
  obj14,
);
const MessageType32 = _mod1198.MessageType;
class PerkConfigDisplayNameStyles$Type extends MessageType32 {
  constructor() {
    const items = [
      { no: 1, name: "is_restricted_to_allowed_options", kind: "scalar", T: 8 },
      { no: 2, name: "allowed_styles", kind: "message", repeat: 1, T: T49 },
    ];
    const tmp2 = new tmp("discord_protos.users.v1.PerkConfigDisplayNameStyles", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { isRestrictedToAllowedOptions: false, allowedStyles: [] };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.isRestrictedToAllowedOptions = pos.bool();
        } else if (2 === tmp5) {
          let allowedStyles = obj.allowedStyles;
          let arr = allowedStyles.push(mediumUserType2.internalBinaryRead(pos, pos.uint32(), readUnknownField));
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(isRestrictedToAllowedOptions, tag, writeUnknownFields) {
    let length;
    if (false !== isRestrictedToAllowedOptions.isRestrictedToAllowedOptions) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.bool(isRestrictedToAllowedOptions.isRestrictedToAllowedOptions);
    }
    let num2 = 0;
    if (0 < isRestrictedToAllowedOptions.allowedStyles.length) {
      do {
        internalBinaryWrite = mediumUserType2.internalBinaryWrite;
        let tmp5 = isRestrictedToAllowedOptions.allowedStyles[num2];
        let tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
        let internalBinaryWriteResult = internalBinaryWrite(tmp5, tagResult1.fork(), writeUnknownFields);
        let joined = internalBinaryWriteResult.join();
        num2 = num2 + 1;
        length = isRestrictedToAllowedOptions.allowedStyles.length;
      } while (num2 < length);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, isRestrictedToAllowedOptions, tag);
    }
    return tag;
  }
}
const prototype32 = PerkConfigDisplayNameStyles$Type.prototype;
const items30 = [
  { no: 1, name: "is_restricted_to_allowed_options", kind: "scalar", T: 8 },
  { no: 2, name: "allowed_styles", kind: "message", repeat: 1, T: T49 },
];
const guildShardingConfigType6 = new GuildShardingConfig$Type(
  "discord_protos.users.v1.PerkConfigDisplayNameStyles",
  items30,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
  obj14,
);
const MessageType33 = _mod1198.MessageType;
class PerkConfigClientThemes$Type extends MessageType33 {
  constructor() {
    const items = [
      { no: 1, name: "is_restricted_to_allowed_options", kind: "scalar", T: 8 },
      { no: 2, name: "allowed_preset_ids", kind: "scalar", repeat: 1, T: 13 },
    ];
    const tmp2 = new tmp("discord_protos.users.v1.PerkConfigClientThemes", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { isRestrictedToAllowedOptions: false, allowedPresetIds: [] };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.isRestrictedToAllowedOptions = pos.bool();
        } else if (2 === tmp5) {
          if (tmp6 === _mod1198.WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            if (pos.pos < sum1) {
              do {
                let allowedPresetIds = obj.allowedPresetIds;
                let arr = allowedPresetIds.push(pos.uint32());
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let allowedPresetIds1 = obj.allowedPresetIds;
            let arr2 = allowedPresetIds1.push(pos.uint32());
          }
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(isRestrictedToAllowedOptions, tag, writeUnknownFields) {
    let length;
    if (false !== isRestrictedToAllowedOptions.isRestrictedToAllowedOptions) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.bool(isRestrictedToAllowedOptions.isRestrictedToAllowedOptions);
    }
    if (isRestrictedToAllowedOptions.allowedPresetIds.length) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.fork();
      let num3 = 0;
      if (0 < isRestrictedToAllowedOptions.allowedPresetIds.length) {
        do {
          let uint32Result = tag.uint32(isRestrictedToAllowedOptions.allowedPresetIds[num3]);
          num3 = num3 + 1;
          length = isRestrictedToAllowedOptions.allowedPresetIds.length;
        } while (num3 < length);
      }
      const joined = tag.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, isRestrictedToAllowedOptions, tag);
    }
    return tag;
  }
}
const prototype33 = PerkConfigClientThemes$Type.prototype;
const items31 = [
  { no: 1, name: "is_restricted_to_allowed_options", kind: "scalar", T: 8 },
  { no: 2, name: "allowed_preset_ids", kind: "scalar", repeat: 1, T: 13 },
];
const guildShardingConfigType7 = new GuildShardingConfig$Type(
  "discord_protos.users.v1.PerkConfigClientThemes",
  items31,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
  obj14,
);
const MessageType34 = _mod1198.MessageType;
class PerkConfigAppIcons$Type extends MessageType34 {
  constructor() {
    const items = [
      { no: 1, name: "is_restricted_to_allowed_options", kind: "scalar", T: 8 },
      { no: 2, name: "allowed_icon_ids", kind: "scalar", repeat: 2, T: 9 },
    ];
    const tmp2 = new tmp("discord_protos.users.v1.PerkConfigAppIcons", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { isRestrictedToAllowedOptions: false, allowedIconIds: [] };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.isRestrictedToAllowedOptions = pos.bool();
        } else if (2 === tmp5) {
          let allowedIconIds = obj.allowedIconIds;
          let arr = allowedIconIds.push(pos.string());
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(isRestrictedToAllowedOptions, tag, writeUnknownFields) {
    let length;
    if (false !== isRestrictedToAllowedOptions.isRestrictedToAllowedOptions) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.bool(isRestrictedToAllowedOptions.isRestrictedToAllowedOptions);
    }
    let num2 = 0;
    if (0 < isRestrictedToAllowedOptions.allowedIconIds.length) {
      do {
        let tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
        let stringResult = tagResult1.string(isRestrictedToAllowedOptions.allowedIconIds[num2]);
        num2 = num2 + 1;
        length = isRestrictedToAllowedOptions.allowedIconIds.length;
      } while (num2 < length);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, isRestrictedToAllowedOptions, tag);
    }
    return tag;
  }
}
const prototype34 = PerkConfigAppIcons$Type.prototype;
const items32 = [
  { no: 1, name: "is_restricted_to_allowed_options", kind: "scalar", T: 8 },
  { no: 2, name: "allowed_icon_ids", kind: "scalar", repeat: 2, T: 9 },
];
const guildShardingConfigType8 = new GuildShardingConfig$Type(
  "discord_protos.users.v1.PerkConfigAppIcons",
  items32,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  tmp3,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
  obj14,
);
const MessageType35 = _mod1198.MessageType;
class Perks$Type extends MessageType35 {
  constructor() {
    const items = [{ no: 1, name: "active_perks_bitmask", kind: "scalar", repeat: 1, T: 4 }, , ,];
    obj = { no: 2, name: "config_by_perk", kind: "map", K: 13, V: obj2 };
    obj2 = { kind: "message", T };
    class T {
      constructor() {
        return closure_1_42;
      }
    }
    items[1] = obj;
    items[2] = { no: 3, name: "rules_version", kind: "scalar", T: 13 };
    items[3] = { no: 4, name: "updated_at", kind: "message", T: T50 };
    const tmp2 = new tmp("discord_protos.users.v1.Perks", items, T);
    return tmp2;
  }
  create(arr) {
    obj = { activePerksBitmask: [], configByPerk: {}, rulesVersion: 0 };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          if (tmp6 === _mod1198.WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            if (pos.pos < sum1) {
              do {
                let activePerksBitmask = obj.activePerksBitmask;
                let push2 = activePerksBitmask.push;
                let str5 = pos.uint64();
                let push2Result = push2(str5.toString());
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let activePerksBitmask1 = obj.activePerksBitmask;
            let push = activePerksBitmask1.push;
            let str4 = pos.uint64();
            let arr = push(str4.toString());
          }
        } else if (2 === tmp5) {
          let binaryReadMap2Result = self.binaryReadMap2(obj.configByPerk, pos, readUnknownField);
        } else if (3 === tmp5) {
          obj.rulesVersion = pos.uint32();
        } else if (4 === tmp5) {
          let Timestamp = timestamp.Timestamp;
          obj.updatedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.updatedAt);
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  binaryReadMap2(arg0, pos, arg2) {
    let tmp2;
    let tmp3;
    let tmp7;
    const sum = pos.pos + pos.uint32();
    obj = undefined;
    let num;
    if (pos.pos < sum) {
      while (true) {
        let internalBinaryReadResult;
        let tmp6 = _slicedToArray(pos.tag(), 2);
        [tmp7, r10020] = tmp6;
        let uint32Result = tmp3;
        if (1 === tmp7) {
          uint32Result = pos.uint32();
          internalBinaryReadResult = tmp2;
        } else if (2 !== tmp7) {
          break;
        } else {
          internalBinaryReadResult = guildShardingConfigType3.internalBinaryRead(pos, pos.uint32(), arg2);
        }
        tmp2 = internalBinaryReadResult;
        tmp3 = uint32Result;
        obj = internalBinaryReadResult;
        num = uint32Result;
      }
      const _globalThis = globalThis;
      const self = this;
      const self2 = this;
      const error = new Error("unknown map entry field for field discord_protos.users.v1.Perks.config_by_perk");
      throw error;
    }
    if (num == null) {
      num = 0;
    }
    if (obj == null) {
      obj = guildShardingConfigType3.create();
    }
    arg0[num] = obj;
  }
  internalBinaryWrite(activePerksBitmask, tag, writeUnknownFields) {
    let length;
    if (activePerksBitmask.activePerksBitmask.length) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.fork();
      let num2 = 0;
      if (0 < activePerksBitmask.activePerksBitmask.length) {
        do {
          let uint64Result = tag.uint64(activePerksBitmask.activePerksBitmask[num2]);
          num2 = num2 + 1;
          length = activePerksBitmask.activePerksBitmask.length;
        } while (num2 < length);
      }
      const joined = tag.join();
    }
    const keys = Object.keys(activePerksBitmask.configByPerk);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      let forkResult1 = tagResult1.fork();
      let tagResult2 = forkResult1.tag(1, _mod1198.WireType.Varint);
      let _parseInt = parseInt;
      let uint32Result = tagResult2.uint32(parseInt(nextResult));
      let tagResult3 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      let forkResult2 = tagResult3.fork();
      let internalBinaryWriteResult = guildShardingConfigType3.internalBinaryWrite(
        activePerksBitmask.configByPerk[nextResult],
        tag,
        writeUnknownFields,
      );
      let joined1 = tag.join();
      let joined2 = joined1.join();
      continue;
    }
    if (0 !== activePerksBitmask.rulesVersion) {
      const tagResult4 = tag.tag(3, _mod1198.WireType.Varint);
      tagResult4.uint32(activePerksBitmask.rulesVersion);
    }
    if (activePerksBitmask.updatedAt) {
      const Timestamp = timestamp.Timestamp;
      internalBinaryWrite = Timestamp.internalBinaryWrite;
      const updatedAt = activePerksBitmask.updatedAt;
      const tagResult5 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult1 = internalBinaryWrite(updatedAt, tagResult5.fork(), writeUnknownFields);
      const joined3 = internalBinaryWriteResult1.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, activePerksBitmask, tag);
    }
    return tag;
  }
}
const prototype35 = Perks$Type.prototype;
const items33 = [{ no: 1, name: "active_perks_bitmask", kind: "scalar", repeat: 1, T: 4 }, , ,];
const obj39 = { no: 2, name: "config_by_perk", kind: "map", K: 13, V: obj40 };
obj40 = { kind: "message", T };
class T {
  constructor() {
    return guildShardingConfigType3;
  }
}
items33[1] = obj39;
items33[2] = { no: 3, name: "rules_version", kind: "scalar", T: 13 };
items33[3] = { no: 4, name: "updated_at", kind: "message", T: T50 };
const items321 = new items32(
  "discord_protos.users.v1.Perks",
  items33,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  T,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
);
const MessageType36 = _mod1198.MessageType;
class UserCountryData$Type extends MessageType36 {
  constructor() {
    const items = [
      { no: 1, name: "calculated_country", kind: "scalar", T: 9 },
      { no: 2, name: "last_calculated_at", kind: "message", T: T51 },
      ,
      ,
    ];
    obj = { no: 3, name: "country_override", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[2]).StringValue;
      }
    }
    items[2] = obj;
    items[3] = { no: 4, name: "override_set_at", kind: "message", T: T52 };
    items[4] = { no: 5, name: "country_scores", kind: "map", K: 9, V: { kind: "scalar", T: 2 } };
    const tmp2 = new tmp("discord_protos.users.v1.UserCountryData", items, T);
    return tmp2;
  }
  create(arr) {
    obj = { calculatedCountry: "", countryScores: {} };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.calculatedCountry = pos.string();
        } else if (2 === tmp5) {
          let Timestamp2 = timestamp.Timestamp;
          obj.lastCalculatedAt = Timestamp2.internalBinaryRead(
            pos,
            pos.uint32(),
            readUnknownField,
            obj.lastCalculatedAt,
          );
        } else if (3 === tmp5) {
          let StringValue = wrappers.StringValue;
          obj.countryOverride = StringValue.internalBinaryRead(
            pos,
            pos.uint32(),
            readUnknownField,
            obj.countryOverride,
          );
        } else if (4 === tmp5) {
          let Timestamp = timestamp.Timestamp;
          obj.overrideSetAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.overrideSetAt);
        } else if (5 === tmp5) {
          let binaryReadMap5Result = self.binaryReadMap5(obj.countryScores, pos, readUnknownField);
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  binaryReadMap5(countryScores, pos) {
    let tmp2;
    let tmp3;
    let tmp6;
    const sum = pos.pos + pos.uint32();
    let num;
    let str;
    if (pos.pos < sum) {
      while (true) {
        let floatResult;
        let tmp5 = _slicedToArray(pos.tag(), 2);
        [tmp6, r10019] = tmp5;
        let stringResult = tmp3;
        if (1 === tmp6) {
          stringResult = pos.string();
          floatResult = tmp2;
        } else if (2 !== tmp6) {
          break;
        } else {
          floatResult = pos.float();
        }
        tmp2 = floatResult;
        tmp3 = stringResult;
        num = floatResult;
        str = stringResult;
      }
      const _globalThis = globalThis;
      const self = this;
      const self2 = this;
      const error = new Error(
        "unknown map entry field for field discord_protos.users.v1.UserCountryData.country_scores",
      );
      throw error;
    }
    if (str == null) {
      str = "";
    }
    if (num == null) {
      num = 0;
    }
    countryScores[str] = num;
  }
  internalBinaryWrite(calculatedCountry, tag, writeUnknownFields) {
    if ("" !== calculatedCountry.calculatedCountry) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(calculatedCountry.calculatedCountry);
    }
    if (calculatedCountry.lastCalculatedAt) {
      const Timestamp = timestamp.Timestamp;
      internalBinaryWrite = Timestamp.internalBinaryWrite;
      const lastCalculatedAt = calculatedCountry.lastCalculatedAt;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(lastCalculatedAt, tagResult1.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (calculatedCountry.countryOverride) {
      const StringValue = wrappers.StringValue;
      internalBinaryWrite2 = StringValue.internalBinaryWrite;
      const countryOverride = calculatedCountry.countryOverride;
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(countryOverride, tagResult2.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (calculatedCountry.overrideSetAt) {
      const Timestamp2 = timestamp.Timestamp;
      internalBinaryWrite3 = Timestamp2.internalBinaryWrite;
      const overrideSetAt = calculatedCountry.overrideSetAt;
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(overrideSetAt, tagResult3.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    const keys = Object.keys(calculatedCountry.countryScores);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tagResult4 = tag.tag(5, _mod1198.WireType.LengthDelimited);
      let forkResult = tagResult4.fork();
      let tagResult5 = forkResult.tag(1, _mod1198.WireType.LengthDelimited);
      let stringResult1 = tagResult5.string(nextResult);
      let tagResult6 = stringResult1.tag(2, _mod1198.WireType.Bit32);
      let floatResult = tagResult6.float(calculatedCountry.countryScores[nextResult]);
      let joined3 = floatResult.join();
      continue;
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, calculatedCountry, tag);
    }
    return tag;
  }
}
const prototype36 = UserCountryData$Type.prototype;
const items34 = [
  { no: 1, name: "calculated_country", kind: "scalar", T: 9 },
  { no: 2, name: "last_calculated_at", kind: "message", T: T51 },
  {
    no: 3,
    name: "country_override",
    kind: "message",
    T() {
      return require("wrappers").StringValue;
    },
  },
  { no: 4, name: "override_set_at", kind: "message", T: T52 },
];
const obj41 = { no: 5, name: "country_scores", kind: "map", K: 9, V: { kind: "scalar", T: 2 } };
items34[4] = obj41;
const items322 = new items32(
  "discord_protos.users.v1.UserCountryData",
  items34,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  tmp4,
  "internalBinaryWrite",
  UserCountryData$Type,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
  obj14,
  obj15,
  obj16,
  obj17,
  obj18,
  obj19,
  obj20,
  obj21,
  tmp8,
  this,
  items38,
  this,
  items39,
  mediumUserType,
  mediumUserType1,
  mediumUserType2,
  mediumUserType3,
  mediumUserType4,
  mediumUserType5,
  mediumUserType6,
  mediumUserType7,
  mediumUserType8,
  mediumUserType9,
  mediumUserType10,
  mediumUserType11,
  mediumUserType12,
  mediumUserType13,
  mediumUserType14,
  userDataType,
  tmp27,
  tmp28,
  tmp29,
  items201,
  items202,
  this,
  items221,
  guildShardingConfigType,
  guildShardingConfigType1,
  guildShardingConfigType2,
  guildShardingConfigType3,
  guildShardingConfigType4,
  guildShardingConfigType5,
  guildShardingConfigType6,
  guildShardingConfigType7,
  guildShardingConfigType8,
  items321,
  items32,
  items34,
  this,
  tmp,
  exports,
  obj41,
  undefined,
  4,
  3,
  2,
  1,
  0,
  16,
  15,
  14,
  13,
);
const MessageType37 = _mod1198.MessageType;
class VadColors$Type extends MessageType37 {
  constructor() {
    const items = [{ no: 1, name: "colors", kind: "scalar", repeat: 1, T: 13 }];
    const tmp2 = new tmp("discord_protos.users.v1.VadColors", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { colors: [] };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          if (tmp6 === _mod1198.WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            if (pos.pos < sum1) {
              do {
                let colors = obj.colors;
                let arr = colors.push(pos.uint32());
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let colors1 = obj.colors;
            let arr2 = colors1.push(pos.uint32());
          }
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(colors, tag, writeUnknownFields) {
    let length;
    if (colors.colors.length) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.fork();
      let num2 = 0;
      if (0 < colors.colors.length) {
        do {
          let uint32Result = tag.uint32(colors.colors[num2]);
          num2 = num2 + 1;
          length = colors.colors.length;
        } while (num2 < length);
      }
      const joined = tag.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, colors, tag);
    }
    return tag;
  }
}
const prototype37 = VadColors$Type.prototype;
const items35 = [];
const obj42 = { no: 1, name: "colors", kind: "scalar", repeat: 1, T: 13 };
items35[0] = obj42;
const userCountryDataType = new UserCountryData$Type(
  "discord_protos.users.v1.VadColors",
  items35,
  tmp6,
  tmp5,
  "create",
  "internalBinaryRead",
  VadColors$Type,
  "internalBinaryWrite",
  UserCountryData$Type,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
  obj14,
  obj15,
  obj16,
  obj17,
  obj18,
  obj19,
  obj20,
  obj21,
  tmp8,
  this,
  items38,
  this,
  items39,
  mediumUserType,
  mediumUserType1,
  mediumUserType2,
  mediumUserType3,
  mediumUserType4,
  mediumUserType5,
  mediumUserType6,
  mediumUserType7,
  mediumUserType8,
  mediumUserType9,
  mediumUserType10,
  mediumUserType11,
  mediumUserType12,
  mediumUserType13,
  mediumUserType14,
  userDataType,
  tmp27,
  tmp28,
  tmp29,
  items201,
  items202,
  this,
  items221,
  guildShardingConfigType,
  guildShardingConfigType1,
  guildShardingConfigType2,
  guildShardingConfigType3,
  guildShardingConfigType4,
  guildShardingConfigType5,
  guildShardingConfigType6,
  guildShardingConfigType7,
  guildShardingConfigType8,
  items321,
  items322,
  items35,
  this,
  tmp,
  exports,
  obj42,
  undefined,
  4,
  3,
  2,
  1,
  0,
  16,
  15,
  14,
  13,
  12,
  11,
);
const MessageType38 = _mod1198.MessageType;
class AgreementAcceptance$Type extends MessageType38 {
  constructor() {
    const items = [,];
    obj = { no: 1, name: "accepted_at", kind: "message", T: T53 };
    items[0] = obj;
    items[1] = { no: 2, name: "version", kind: "message", T: T54 };
    const tmp2 = new tmp("discord_protos.users.v1.AgreementAcceptance", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = {};
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          let Timestamp = timestamp.Timestamp;
          obj.acceptedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.acceptedAt);
        } else if (2 === tmp5) {
          let StringValue = wrappers.StringValue;
          obj.version = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.version);
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(acceptedAt, tag, writeUnknownFields) {
    if (acceptedAt.acceptedAt) {
      const Timestamp = timestamp.Timestamp;
      internalBinaryWrite = Timestamp.internalBinaryWrite;
      acceptedAt = acceptedAt.acceptedAt;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(acceptedAt, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (acceptedAt.version) {
      const StringValue = wrappers.StringValue;
      internalBinaryWrite2 = StringValue.internalBinaryWrite;
      const version = acceptedAt.version;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(version, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, acceptedAt, tag);
    }
    return tag;
  }
}
const prototype38 = AgreementAcceptance$Type.prototype;
const items36 = [,];
const obj43 = { no: 1, name: "accepted_at", kind: "message", T: T53 };
items36[0] = obj43;
const obj44 = { no: 2, name: "version", kind: "message", T: T54 };
items36[1] = obj44;
const vadColorsType = new VadColors$Type(
  "discord_protos.users.v1.AgreementAcceptance",
  items36,
  tmp6,
  AgreementAcceptance$Type,
  "create",
  "internalBinaryRead",
  VadColors$Type,
  "internalBinaryWrite",
  items36,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
  obj14,
  obj15,
  obj16,
  obj17,
  obj18,
  obj19,
  obj20,
  obj21,
  tmp8,
  this,
  items38,
  this,
  items39,
  mediumUserType,
  mediumUserType1,
  mediumUserType2,
  mediumUserType3,
  mediumUserType4,
  mediumUserType5,
  mediumUserType6,
  mediumUserType7,
  mediumUserType8,
  mediumUserType9,
  mediumUserType10,
  mediumUserType11,
  mediumUserType12,
  mediumUserType13,
  mediumUserType14,
  userDataType,
  tmp27,
  tmp28,
  tmp29,
  items201,
  items202,
  this,
  items221,
  guildShardingConfigType,
  guildShardingConfigType1,
  guildShardingConfigType2,
  guildShardingConfigType3,
  guildShardingConfigType4,
  guildShardingConfigType5,
  guildShardingConfigType6,
  guildShardingConfigType7,
  guildShardingConfigType8,
  items321,
  items322,
  userCountryDataType,
  this,
  tmp,
  exports,
  obj44,
  undefined,
  4,
  3,
  2,
  1,
  0,
  16,
  15,
  14,
  13,
  12,
  11,
  10,
  9,
  8,
);
const MessageType39 = _mod1198.MessageType;
class AgreementsHistory$Type extends MessageType39 {
  constructor() {
    const items = [,];
    obj = { no: 1, name: "terms", kind: "message", repeat: 1, T: T55 };
    items[0] = obj;
    items[1] = { no: 2, name: "privacy", kind: "message", repeat: 1, T: T56 };
    const tmp2 = new tmp("discord_protos.users.v1.AgreementsHistory", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { terms: [], privacy: [] };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          let terms = obj.terms;
          let arr = terms.push(vadColorsType.internalBinaryRead(pos, pos.uint32(), readUnknownField));
        } else if (2 === tmp5) {
          let privacy = obj.privacy;
          let arr2 = privacy.push(vadColorsType.internalBinaryRead(pos, pos.uint32(), readUnknownField));
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(terms, tag, writeUnknownFields) {
    let length;
    let length2;
    let num = 0;
    if (0 < terms.terms.length) {
      do {
        internalBinaryWrite = vadColorsType.internalBinaryWrite;
        let tmp2 = terms.terms[num];
        let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
        let internalBinaryWriteResult = internalBinaryWrite(tmp2, tagResult.fork(), writeUnknownFields);
        let joined = internalBinaryWriteResult.join();
        num = num + 1;
        length = terms.terms.length;
      } while (num < length);
    }
    let num2 = 0;
    if (0 < terms.privacy.length) {
      do {
        internalBinaryWrite2 = vadColorsType.internalBinaryWrite;
        let tmp7 = terms.privacy[num2];
        let tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
        let internalBinaryWrite2Result = internalBinaryWrite2(tmp7, tagResult1.fork(), writeUnknownFields);
        let joined1 = internalBinaryWrite2Result.join();
        num2 = num2 + 1;
        length2 = terms.privacy.length;
      } while (num2 < length2);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, terms, tag);
    }
    return tag;
  }
}
const prototype39 = AgreementsHistory$Type.prototype;
const items37 = [,];
const obj45 = { no: 1, name: "terms", kind: "message", repeat: 1, T: T55 };
items37[0] = obj45;
const obj46 = { no: 2, name: "privacy", kind: "message", repeat: 1, T: T56 };
items37[1] = obj46;
const tmp46 = new "internalBinaryWrite"(
  "discord_protos.users.v1.AgreementsHistory",
  items37,
  tmp6,
  AgreementAcceptance$Type,
  "create",
  "internalBinaryRead",
  AgreementsHistory$Type,
  "internalBinaryWrite",
  items37,
  undefined,
  require,
  dependencyMap,
  DayOfWeek,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
  obj14,
  obj15,
  obj16,
  obj17,
  obj18,
  obj19,
  obj20,
  obj21,
  tmp8,
  this,
  items38,
  this,
  items39,
  mediumUserType,
  mediumUserType1,
  mediumUserType2,
  mediumUserType3,
  mediumUserType4,
  mediumUserType5,
  mediumUserType6,
  mediumUserType7,
  mediumUserType8,
  mediumUserType9,
  mediumUserType10,
  mediumUserType11,
  mediumUserType12,
  mediumUserType13,
  mediumUserType14,
  userDataType,
  tmp27,
  tmp28,
  tmp29,
  items201,
  items202,
  this,
  items221,
  guildShardingConfigType,
  guildShardingConfigType1,
  guildShardingConfigType2,
  guildShardingConfigType3,
  guildShardingConfigType4,
  guildShardingConfigType5,
  guildShardingConfigType6,
  guildShardingConfigType7,
  guildShardingConfigType8,
  items321,
  items322,
  userCountryDataType,
  vadColorsType,
  this,
  exports,
  obj46,
  undefined,
  4,
  3,
  2,
  1,
  0,
  16,
  15,
  14,
  13,
  12,
  11,
);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx");

export { DayOfWeek };
export const DisplayNameFont = obj2;
export const DisplayNameEffect = obj3;
export const TypingIndicatorAnimation = obj4;
export const TypingSuggestion = obj5;
export const BadgeType = obj6;
export const AnonymizationStatus = obj7;
export const AgeAssuranceTier = obj8;
export const AgeAssuranceMethod = obj9;
export const AgeAssuranceVendor = obj10;
export const AgeAssuranceGroup = obj11;
export const UserLinkType = obj12;
export const UserLinkStatus = obj13;
export const RateLimitTier = obj14;
export const FeatureLimitName = obj15;
export const SafetyFlagType = obj16;
export const PremiumSource = obj17;
export const PremiumSubscriptionType = obj18;
export const PremiumSubscriptionGroupRole = obj19;
export const Perk = obj20;
export const PerkSource = obj21;
export const TimeOfDay = tmp8;
export const User = items38;
export const MediumUser = items39;
export const UserAvatarDecoration = mediumUserType;
export const UserNameplate = mediumUserType1;
export const DisplayNameStyles = mediumUserType2;
export const UserTypingIndicatorStyle = mediumUserType3;
export const TypingIndicatorEmoji = mediumUserType4;
export const UserCollectibles = mediumUserType5;
export const UserPrimaryGuild = mediumUserType6;
export const ScheduleRule = mediumUserType7;
export const RestrictedSchedule = mediumUserType8;
export const CrossPlatformRestriction = mediumUserType9;
export const BadgeCommon = mediumUserType10;
export const AprilFools2026Badge = mediumUserType11;
export const Badge = mediumUserType12;
export const UserBadges = mediumUserType13;
export const AnonymizationInfo = mediumUserType14;
export const UserData = userDataType;
export const AgeAssuranceData = tmp27;
export const LinkedUser = tmp28;
export const RateLimitData = tmp29;
export const FeatureLimits = items201;
export const SafetyFlag = items202;
export const GuildShardingConfig = items221;
export const QuestMetadata = guildShardingConfigType;
export const PremiumState = guildShardingConfigType1;
export const StoreCountry = guildShardingConfigType2;
export const PerkConfig = guildShardingConfigType3;
export const PerkConfigIncreasedFileUploadSize = guildShardingConfigType4;
export const PerkConfigIncreasedGuildLimit = guildShardingConfigType5;
export const PerkConfigDisplayNameStyles = guildShardingConfigType6;
export const PerkConfigClientThemes = guildShardingConfigType7;
export const PerkConfigAppIcons = guildShardingConfigType8;
export const Perks = items321;
export const UserCountryData = items322;
export const VadColors = userCountryDataType;
export const AgreementAcceptance = vadColorsType;
export const AgreementsHistory = tmp46;
