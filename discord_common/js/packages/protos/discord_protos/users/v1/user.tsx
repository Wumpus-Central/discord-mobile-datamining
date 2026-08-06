// discord_common/js/packages/protos/discord_protos/users/v1/user.tsx
import _slicedToArray from "_slicedToArray";
import { MessageType } from "module_1307";
import { MessageType as MessageType2 } from "module_1307";
import { MessageType as MessageType3 } from "module_1307";
import { MessageType as MessageType4 } from "module_1307";
import { MessageType as MessageType5 } from "module_1307";
import { MessageType as MessageType6 } from "module_1307";
import { MessageType as MessageType7 } from "module_1307";
import { MessageType as MessageType8 } from "module_1307";
import { MessageType as MessageType9 } from "module_1307";
import { MessageType as MessageType10 } from "module_1307";
import { MessageType as MessageType11 } from "module_1307";
import { MessageType as MessageType12 } from "module_1307";
import { MessageType as MessageType13 } from "module_1307";
import { MessageType as MessageType14 } from "module_1307";
import { MessageType as MessageType15 } from "module_1307";
import { MessageType as MessageType16 } from "module_1307";
import { MessageType as MessageType17 } from "module_1307";
import { MessageType as MessageType18 } from "module_1307";
import { MessageType as MessageType19 } from "module_1307";
import { MessageType as MessageType20 } from "module_1307";
import { MessageType as MessageType21 } from "module_1307";
import { MessageType as MessageType22 } from "module_1307";
import { MessageType as MessageType23 } from "module_1307";
import { MessageType as MessageType24 } from "module_1307";
import { MessageType as MessageType25 } from "module_1307";
import { MessageType as MessageType26 } from "module_1307";
import { MessageType as MessageType27 } from "module_1307";
import { MessageType as MessageType28 } from "module_1307";
import { MessageType as MessageType29 } from "module_1307";
import { MessageType as MessageType30 } from "module_1307";
import { MessageType as MessageType31 } from "module_1307";
import { 01307__ } from "../../../../../../../_runtime/metro/01307__.js";
import { now } from "../../../google/protobuf/timestamp.tsx";
import { defineProperty } from "../../../google/protobuf/wrappers.tsx";
import { create } from "../../safety_common/v1/safety_state.tsx";

const require = arg1;
let obj = { DAY_OF_WEEK_UNSPECIFIED: 0, [0]: "DAY_OF_WEEK_UNSPECIFIED", MONDAY: 1, [1]: "MONDAY", TUESDAY: 2, [2]: "TUESDAY", WEDNESDAY: 3, [3]: "WEDNESDAY", THURSDAY: 4, [4]: "THURSDAY", FRIDAY: 5, [5]: "FRIDAY", SATURDAY: 6, [6]: "SATURDAY", SUNDAY: 7, [7]: "SUNDAY" };
obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", DEFAULT: 11, [11]: "DEFAULT", BANGERS: 1, [1]: "BANGERS", BIO_RHYME: 2, [2]: "BIO_RHYME", CHERRY_BOMB: 3, [3]: "CHERRY_BOMB", CHICLE: 4, [4]: "CHICLE", COMPAGNON: 5, [5]: "COMPAGNON", MUSEO_MODERNO: 6, [6]: "MUSEO_MODERNO", NEO_CASTEL: 7, [7]: "NEO_CASTEL", PIXELIFY: 8, [8]: "PIXELIFY", RIBES: 9, [9]: "RIBES", SINISTRE: 10, [10]: "SINISTRE", ZILLA_SLAB: 12, [12]: "ZILLA_SLAB", PLAYPEN_SANS: 13, [13]: "PLAYPEN_SANS", ORBITRON: 14, [14]: "ORBITRON", NEW_ROCKER: 15, [15]: "NEW_ROCKER", KALAM: 16, [16]: "KALAM" };
obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", SOLID: 1, [1]: "SOLID", GRADIENT: 2, [2]: "GRADIENT", NEON: 3, [3]: "NEON", TOON: 4, [4]: "TOON", POP: 5, [5]: "POP", GLOW: 6, [6]: "GLOW", PRISM: 7, [7]: "PRISM", GUMMY: 8, [8]: "GUMMY", TEST_1: 1001, [1001]: "TEST_1", TEST_2: 1002, [1002]: "TEST_2", TEST_3: 1003, [1003]: "TEST_3", TEST_4: 1004, [1004]: "TEST_4" };
let obj1 = { BADGE_TYPE_UNSPECIFIED: 0, [0]: "BADGE_TYPE_UNSPECIFIED", APRIL_FOOLS_2026: 1, [1]: "APRIL_FOOLS_2026" };
const obj2 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", TO_BE_ANONYMIZED_USER: 1, [1]: "TO_BE_ANONYMIZED_USER", INACCESSIBLE_ANONYMIZED_USER: 2, [2]: "INACCESSIBLE_ANONYMIZED_USER", ANONYMOUS_USER: 3, [3]: "ANONYMOUS_USER" };
const obj3 = { AGE_ASSURANCE_TIER_UNSPECIFIED: 0, [0]: "AGE_ASSURANCE_TIER_UNSPECIFIED", AGE_ASSURANCE_TIER_1: 1, [1]: "AGE_ASSURANCE_TIER_1", AGE_ASSURANCE_TIER_2: 2, [2]: "AGE_ASSURANCE_TIER_2", AGE_ASSURANCE_TIER_3: 3, [3]: "AGE_ASSURANCE_TIER_3", AGE_ASSURANCE_TIER_4: 4, [4]: "AGE_ASSURANCE_TIER_4" };
const obj4 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", ID_SELFIE_MATCH: 1, [1]: "ID_SELFIE_MATCH", ID_SCAN: 2, [2]: "ID_SCAN", FACIAL_AGE_ESTIMATION: 3, [3]: "FACIAL_AGE_ESTIMATION", BEHAVIORAL_INFERENCE: 4, [4]: "BEHAVIORAL_INFERENCE", CREDIT_CARD: 5, [5]: "CREDIT_CARD", EMAIL_DOMAIN: 6, [6]: "EMAIL_DOMAIN", OS_SIGNAL: 7, [7]: "OS_SIGNAL", ML_AGE_INFERENCE: 8, [8]: "ML_AGE_INFERENCE", GOOGLE_WALLET: 9, [9]: "GOOGLE_WALLET" };
const obj5 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", K_ID: 1, [1]: "K_ID", PERSONA: 2, [2]: "PERSONA", INCODE: 3, [3]: "INCODE", DISCORD: 4, [4]: "DISCORD", GOOGLE_WALLET: 5, [5]: "GOOGLE_WALLET", APPLE_APP_STORE: 6, [6]: "APPLE_APP_STORE", GOOGLE_PLAY: 7, [7]: "GOOGLE_PLAY" };
const obj6 = { AGE_ASSURANCE_GROUP_UNSPECIFIED: 0, [0]: "AGE_ASSURANCE_GROUP_UNSPECIFIED", AGE_ASSURANCE_GROUP_13: 1, [1]: "AGE_ASSURANCE_GROUP_13", AGE_ASSURANCE_GROUP_14: 2, [2]: "AGE_ASSURANCE_GROUP_14", AGE_ASSURANCE_GROUP_15: 3, [3]: "AGE_ASSURANCE_GROUP_15", AGE_ASSURANCE_GROUP_16: 4, [4]: "AGE_ASSURANCE_GROUP_16", AGE_ASSURANCE_GROUP_17: 5, [5]: "AGE_ASSURANCE_GROUP_17", AGE_ASSURANCE_GROUP_18_21: 6, [6]: "AGE_ASSURANCE_GROUP_18_21", AGE_ASSURANCE_GROUP_22_24: 7, [7]: "AGE_ASSURANCE_GROUP_22_24", AGE_ASSURANCE_GROUP_25_34: 8, [8]: "AGE_ASSURANCE_GROUP_25_34", AGE_ASSURANCE_GROUP_35_UP: 9, [9]: "AGE_ASSURANCE_GROUP_35_UP" };
const obj7 = { USER_LINK_TYPE_UNSPECIFIED: 0, [0]: "USER_LINK_TYPE_UNSPECIFIED", PARENT: 1, [1]: "PARENT", CHILD: 2, [2]: "CHILD" };
const obj8 = { USER_LINK_STATUS_UNSPECIFIED: 0, [0]: "USER_LINK_STATUS_UNSPECIFIED", PENDING: 1, [1]: "PENDING", ACTIVE: 2, [2]: "ACTIVE", INACTIVE: 3, [3]: "INACTIVE", DECLINED: 4, [4]: "DECLINED" };
const obj9 = { RATE_LIMIT_TIER_UNSPECIFIED: 0, [0]: "RATE_LIMIT_TIER_UNSPECIFIED", UNLIMITED: 1, [1]: "UNLIMITED", TIER_2: 2, [2]: "TIER_2", TIER_3: 3, [3]: "TIER_3", TIER_4: 4, [4]: "TIER_4", DISABLED: 5, [5]: "DISABLED" };
const obj10 = { FEATURE_LIMIT_NAME_UNSPECIFIED: 0, [0]: "FEATURE_LIMIT_NAME_UNSPECIFIED", GUILD_MESSAGE_SEND: 1, [1]: "GUILD_MESSAGE_SEND", DM_SEND: 2, [2]: "DM_SEND", FRIEND_REQUEST: 3, [3]: "FRIEND_REQUEST", GUILD_CREATE: 4, [4]: "GUILD_CREATE", GUILD_JOIN: 5, [5]: "GUILD_JOIN", GUILD_TEXT_CHANNEL_CREATE: 6, [6]: "GUILD_TEXT_CHANNEL_CREATE", GUILD_UPLOAD_ATTACHMENT: 7, [7]: "GUILD_UPLOAD_ATTACHMENT", DM_UPLOAD_ATTACHMENT: 8, [8]: "DM_UPLOAD_ATTACHMENT", GDM_UPLOAD_ATTACHMENT: 9, [9]: "GDM_UPLOAD_ATTACHMENT", GDM_SEND: 10, [10]: "GDM_SEND", GUILD_VOICE_CHANNEL_CREATE: 11, [11]: "GUILD_VOICE_CHANNEL_CREATE", USER_PROFILE_EDIT: 12, [12]: "USER_PROFILE_EDIT", QUEST_PARTICIPATION: 14, [14]: "QUEST_PARTICIPATION" };
const obj11 = { SAFETY_FLAG_TYPE_UNSPECIFIED: 0, [0]: "SAFETY_FLAG_TYPE_UNSPECIFIED", STRANGER_DANGER: 1, [1]: "STRANGER_DANGER", LIKELY_ATO: 2, [2]: "LIKELY_ATO", PARENTAL_CONSENT_REVOKED_IOS: 3, [3]: "PARENTAL_CONSENT_REVOKED_IOS", PARENTAL_CONSENT_REVOKED_ANDROID: 4, [4]: "PARENTAL_CONSENT_REVOKED_ANDROID", REACTIVE_CHECK_APPLIED: 5, [5]: "REACTIVE_CHECK_APPLIED", PARENTAL_CONSENT_GRACE: 6, [6]: "PARENTAL_CONSENT_GRACE" };
const obj12 = { NONE_UNSPECIFIED: 0, [0]: "NONE_UNSPECIFIED", SUBSCRIPTION: 1, [1]: "SUBSCRIPTION", FRACTIONAL_NITRO: 2, [2]: "FRACTIONAL_NITRO", REVERSE_TRIAL: 3, [3]: "REVERSE_TRIAL", SUBSCRIPTION_GROUP: 4, [4]: "SUBSCRIPTION_GROUP" };
const obj13 = { NONE_UNSPECIFIED: 0, [0]: "NONE_UNSPECIFIED", BOOST_ONLY: 1, [1]: "BOOST_ONLY", TIER_0: 2, [2]: "TIER_0", TIER_1: 3, [3]: "TIER_1", TIER_2: 4, [4]: "TIER_2" };
const obj14 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", PRIMARY: 1, [1]: "PRIMARY", MEMBER: 2, [2]: "MEMBER" };
const obj15 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", ANIMATED_EMOJIS: 1, [1]: "ANIMATED_EMOJIS", EMOJIS_EVERYWHERE: 2, [2]: "EMOJIS_EVERYWHERE", STICKERS_EVERYWHERE: 3, [3]: "STICKERS_EVERYWHERE", SOUNDBOARD_EVERYWHERE: 4, [4]: "SOUNDBOARD_EVERYWHERE", ANIMATED_AVATAR: 5, [5]: "ANIMATED_AVATAR", CUSTOM_DISCRIMINATOR: 6, [6]: "CUSTOM_DISCRIMINATOR", PREMIUM_GUILD_MEMBER_PROFILE: 7, [7]: "PREMIUM_GUILD_MEMBER_PROFILE", PROFILE_PREMIUM_FEATURES: 8, [8]: "PROFILE_PREMIUM_FEATURES", STREAM_MID_QUALITY: 9, [9]: "STREAM_MID_QUALITY", STREAM_HIGH_QUALITY: 10, [10]: "STREAM_HIGH_QUALITY", CUSTOM_NOTIFICATION_SOUNDS: 11, [11]: "CUSTOM_NOTIFICATION_SOUNDS", VIDEO_FILTER_ASSETS: 12, [12]: "VIDEO_FILTER_ASSETS", INCREASED_FILE_UPLOAD_SIZE: 13, [13]: "INCREASED_FILE_UPLOAD_SIZE", INCREASED_GUILD_LIMIT: 14, [14]: "INCREASED_GUILD_LIMIT", INCREASED_MESSAGE_LENGTH: 15, [15]: "INCREASED_MESSAGE_LENGTH", NITRO_REACTION_TOGGLE: 16, [16]: "NITRO_REACTION_TOGGLE", CLIENT_THEMES: 17, [17]: "CLIENT_THEMES", PREMIUM_COLLECTIBLES: 18, [18]: "PREMIUM_COLLECTIBLES", CUSTOM_CALL_SOUNDS: 19, [19]: "CUSTOM_CALL_SOUNDS", SAVED_MESSAGES: 20, [20]: "SAVED_MESSAGES", PREMIUM_VOICE_FILTERS: 21, [21]: "PREMIUM_VOICE_FILTERS", CHAT_WALLPAPERS: 22, [22]: "CHAT_WALLPAPERS", MONTHLY_ORBS: 23, [23]: "MONTHLY_ORBS", SHOP_DISCOUNTS: 24, [24]: "SHOP_DISCOUNTS", MORE_QUEST_ORBS: 25, [25]: "MORE_QUEST_ORBS", PROFILE_BADGES: 26, [26]: "PROFILE_BADGES", APP_ICONS: 27, [27]: "APP_ICONS", BOOST_DISCOUNT: 28, [28]: "BOOST_DISCOUNT", FREE_BOOSTS: 29, [29]: "FREE_BOOSTS", INSTALL_PREMIUM_APPLICATIONS: 30, [30]: "INSTALL_PREMIUM_APPLICATIONS", INCREASED_VIDEO_UPLOAD_QUALITY: 31, [31]: "INCREASED_VIDEO_UPLOAD_QUALITY" };
const obj16 = { SOURCE_UNSPECIFIED: 0, [0]: "SOURCE_UNSPECIFIED", SOURCE_NITRO: 1, [1]: "SOURCE_NITRO", SOURCE_THIRDPARTY_CROISSANT: 2, [2]: "SOURCE_THIRDPARTY_CROISSANT", SOURCE_BOT: 3, [3]: "SOURCE_BOT" };
class TimeOfDay$Type extends MessageType {
  constructor() {
    items = [, , , ];
    items[0] = { no: 1, name: "hours", kind: "scalar", T: 5 };
    items[1] = { no: 2, name: "minutes", kind: "scalar", T: 5 };
    items[2] = { no: 3, name: "seconds", kind: "scalar", T: 5 };
    items[3] = { no: 4, name: "nanos", kind: "scalar", T: 5 };
    tmp = new tmp("discord_protos.users.v1.TimeOfDay", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype = TimeOfDay$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { hours: 0, minutes: 0, seconds: 0, nanos: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(hours, tag, writeUnknownFields) {
  if (0 !== hours.hours) {
    tag.tag(1, 01307__.WireType.Varint).int32(hours.hours);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  if (0 !== hours.minutes) {
    tag.tag(2, 01307__.WireType.Varint).int32(hours.minutes);
    const tagResult1 = tag.tag(2, 01307__.WireType.Varint);
  }
  if (0 !== hours.seconds) {
    tag.tag(3, 01307__.WireType.Varint).int32(hours.seconds);
    const tagResult2 = tag.tag(3, 01307__.WireType.Varint);
  }
  if (0 !== hours.nanos) {
    tag.tag(4, 01307__.WireType.Varint).int32(hours.nanos);
    const tagResult3 = tag.tag(4, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, hours, tag);
  }
  return tag;
};
let items = [{ no: 1, name: "hours", kind: "scalar", T: 5 }, { no: 2, name: "minutes", kind: "scalar", T: 5 }, { no: 3, name: "seconds", kind: "scalar", T: 5 }, { no: 4, name: "nanos", kind: "scalar", T: 5 }];
let tmp9 = new "SUBSCRIPTION_GROUP"("discord_protos.users.v1.TimeOfDay", items, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", tmp3, tmp2, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6);
// ThrowIfThisInitialized (0x7c)
let closure_16 = tmp9;
class User$Type extends MessageType2 {
  constructor() {
    items = [, , , , , , , , , , , ];
    items[0] = { no: 1, name: "id", kind: "scalar", T: 4 };
    items[1] = { no: 2, name: "username", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "discriminator", kind: "scalar", T: 9 };
    items[3] = {
      no: 4,
      name: "avatar",
      kind: "message",
      T() {
            return callback(1337).StringValue;
          }
    };
    items[4] = { no: 5, name: "bot", kind: "scalar", T: 8 };
    items[5] = { no: 6, name: "public_flags", kind: "scalar", T: 4 };
    items[6] = {
      no: 8,
      name: "global_name",
      kind: "message",
      T() {
            return callback(1337).StringValue;
          }
    };
    items[7] = {
      no: 9,
      name: "avatar_decoration_data",
      kind: "message",
      T() {
            return closure_17;
          }
    };
    items[8] = {
      no: 10,
      name: "primary_guild",
      kind: "message",
      T() {
            return closure_21;
          }
    };
    items[9] = {
      no: 11,
      name: "collectibles",
      kind: "message",
      T() {
            return closure_20;
          }
    };
    obj = { no: 12, name: "safety_state", kind: "message", T: null };
    class T {
      constructor() {
        return require("create").SafetyState;
      }
    }
    obj[3] = T;
    items[10] = obj;
    items[11] = {
      no: 13,
      name: "display_name_styles",
      kind: "message",
      T() {
            return closure_19;
          }
    };
    tmp = new tmp("discord_protos.users.v1.User", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype2 = User$Type.prototype;
prototype2["create"] = function create(arr) {
  let obj = { id: "0", username: "", discriminator: "", bot: false, publicFlags: "0" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype2["internalBinaryRead"] = function internalBinaryRead(pos) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    obj.displayNameStyles = mediumUserType2.internalBinaryRead(pos, pos.uint32(), arg2, obj.displayNameStyles);
  }
  return obj;
};
prototype2["internalBinaryWrite"] = function internalBinaryWrite(id, tag, writeUnknownFields) {
  if ("0" !== id.id) {
    tag.tag(1, 01307__.WireType.Varint).uint64(id.id);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  if ("" !== id.username) {
    tag.tag(2, 01307__.WireType.LengthDelimited).string(id.username);
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
  }
  if ("" !== id.discriminator) {
    tag.tag(3, 01307__.WireType.LengthDelimited).string(id.discriminator);
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
  }
  if (id.avatar) {
    const StringValue = defineProperty.StringValue;
    const tagResult3 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined = StringValue.internalBinaryWrite(id.avatar, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = StringValue.internalBinaryWrite(id.avatar, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (false !== id.bot) {
    tag.tag(5, 01307__.WireType.Varint).bool(id.bot);
    const tagResult4 = tag.tag(5, 01307__.WireType.Varint);
  }
  if ("0" !== id.publicFlags) {
    tag.tag(6, 01307__.WireType.Varint).uint64(id.publicFlags);
    const tagResult5 = tag.tag(6, 01307__.WireType.Varint);
  }
  if (id.globalName) {
    const StringValue2 = defineProperty.StringValue;
    const tagResult6 = tag.tag(8, 01307__.WireType.LengthDelimited);
    const joined1 = StringValue2.internalBinaryWrite(id.globalName, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = StringValue2.internalBinaryWrite(id.globalName, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (id.avatarDecorationData) {
    const tagResult7 = tag.tag(9, 01307__.WireType.LengthDelimited);
    const joined2 = mediumUserType.internalBinaryWrite(id.avatarDecorationData, tag.tag(9, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = mediumUserType.internalBinaryWrite(id.avatarDecorationData, tag.tag(9, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (id.primaryGuild) {
    const tagResult8 = tag.tag(10, 01307__.WireType.LengthDelimited);
    const joined3 = mediumUserType4.internalBinaryWrite(id.primaryGuild, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = mediumUserType4.internalBinaryWrite(id.primaryGuild, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (id.collectibles) {
    const tagResult9 = tag.tag(11, 01307__.WireType.LengthDelimited);
    const joined4 = mediumUserType3.internalBinaryWrite(id.collectibles, tag.tag(11, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = mediumUserType3.internalBinaryWrite(id.collectibles, tag.tag(11, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (id.safetyState) {
    const SafetyState = create.SafetyState;
    const tagResult10 = tag.tag(12, 01307__.WireType.LengthDelimited);
    const joined5 = SafetyState.internalBinaryWrite(id.safetyState, tag.tag(12, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult5 = SafetyState.internalBinaryWrite(id.safetyState, tag.tag(12, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (id.displayNameStyles) {
    const tagResult11 = tag.tag(13, 01307__.WireType.LengthDelimited);
    const joined6 = mediumUserType2.internalBinaryWrite(id.displayNameStyles, tag.tag(13, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult6 = mediumUserType2.internalBinaryWrite(id.displayNameStyles, tag.tag(13, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, id, tag);
  }
  return tag;
};
let items1 = [
  { no: 1, name: "id", kind: "scalar", T: 4 },
  { no: 2, name: "username", kind: "scalar", T: 9 },
  { no: 3, name: "discriminator", kind: "scalar", T: 9 },
  {
    no: 4,
    name: "avatar",
    kind: "message",
    T() {
      return callback(1337).StringValue;
    }
  },
  { no: 5, name: "bot", kind: "scalar", T: 8 },
  { no: 6, name: "public_flags", kind: "scalar", T: 4 },
  {
    no: 8,
    name: "global_name",
    kind: "message",
    T() {
      return callback(1337).StringValue;
    }
  },
  {
    no: 9,
    name: "avatar_decoration_data",
    kind: "message",
    T() {
      return closure_17;
    }
  },
  {
    no: 10,
    name: "primary_guild",
    kind: "message",
    T() {
      return closure_21;
    }
  },
  {
    no: 11,
    name: "collectibles",
    kind: "message",
    T() {
      return closure_20;
    }
  },
  {
    no: 12,
    name: "safety_state",
    kind: "message",
    T() {
      return create.SafetyState;
    }
  },
  {
    no: 13,
    name: "display_name_styles",
    kind: "message",
    T() {
      return closure_19;
    }
  }
];
items = new items("discord_protos.users.v1.User", items1, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", tmp3, undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5);
// ThrowIfThisInitialized (0x7c)
class MediumUser$Type extends MessageType3 {
  constructor() {
    items = [, , , , , , , ];
    items[0] = { no: 1, name: "id", kind: "scalar", T: 6 };
    items[1] = { no: 2, name: "username", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "discriminator", kind: "scalar", T: 13 };
    items[3] = {
      no: 4,
      name: "avatar_hash",
      kind: "message",
      T() {
            return callback(1337).StringValue;
          }
    };
    items[4] = { no: 5, name: "bot", kind: "scalar", T: 8 };
    items[5] = { no: 6, name: "flags", kind: "scalar", T: 4 };
    obj = { no: 7, name: "email", kind: "message", T: null };
    class T {
      constructor() {
        return require("defineProperty").StringValue;
      }
    }
    obj[3] = T;
    items[6] = obj;
    items[7] = {
      no: 8,
      name: "phone",
      kind: "message",
      T() {
            return callback(1337).StringValue;
          }
    };
    tmp = new tmp("discord_protos.users.v1.MediumUser", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype3 = MediumUser$Type.prototype;
prototype3["create"] = function create(arr) {
  let obj = { id: "0", username: "", discriminator: 0, bot: false, flags: "0" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype3["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let str5 = pos.fixed64();
        obj.id = str5.toString();
      } else if (2 === tmp5) {
        obj.username = pos.string();
      } else if (3 === tmp5) {
        obj.discriminator = pos.uint32();
      } else if (4 === tmp5) {
        let tmp32 = require;
        let tmp33 = dependencyMap;
        let StringValue3 = defineProperty.StringValue;
        let tmp34 = StringValue3;
        let tmp35 = pos;
        let tmp36 = readUnknownField;
        obj.avatarHash = StringValue3.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.avatarHash);
      } else if (5 === tmp5) {
        obj.bot = pos.bool();
      } else if (6 === tmp5) {
        let str4 = pos.uint64();
        obj.flags = str4.toString();
      } else if (7 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let StringValue2 = defineProperty.StringValue;
        let tmp29 = StringValue2;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.email = StringValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.email);
      } else if (8 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let StringValue = defineProperty.StringValue;
        let tmp24 = StringValue;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype3["internalBinaryWrite"] = function internalBinaryWrite(id, tag, writeUnknownFields) {
  if ("0" !== id.id) {
    tag.tag(1, 01307__.WireType.Bit64).fixed64(id.id);
    const tagResult = tag.tag(1, 01307__.WireType.Bit64);
  }
  if ("" !== id.username) {
    tag.tag(2, 01307__.WireType.LengthDelimited).string(id.username);
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
  }
  if (0 !== id.discriminator) {
    tag.tag(3, 01307__.WireType.Varint).uint32(id.discriminator);
    const tagResult2 = tag.tag(3, 01307__.WireType.Varint);
  }
  if (id.avatarHash) {
    const StringValue = defineProperty.StringValue;
    const tagResult3 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined = StringValue.internalBinaryWrite(id.avatarHash, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = StringValue.internalBinaryWrite(id.avatarHash, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (false !== id.bot) {
    tag.tag(5, 01307__.WireType.Varint).bool(id.bot);
    const tagResult4 = tag.tag(5, 01307__.WireType.Varint);
  }
  if ("0" !== id.flags) {
    tag.tag(6, 01307__.WireType.Varint).uint64(id.flags);
    const tagResult5 = tag.tag(6, 01307__.WireType.Varint);
  }
  if (id.email) {
    const StringValue2 = defineProperty.StringValue;
    const tagResult6 = tag.tag(7, 01307__.WireType.LengthDelimited);
    const joined1 = StringValue2.internalBinaryWrite(id.email, tag.tag(7, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = StringValue2.internalBinaryWrite(id.email, tag.tag(7, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (id.phone) {
    const StringValue3 = defineProperty.StringValue;
    const tagResult7 = tag.tag(8, 01307__.WireType.LengthDelimited);
    const joined2 = StringValue3.internalBinaryWrite(id.phone, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = StringValue3.internalBinaryWrite(id.phone, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, id, tag);
  }
  return tag;
};
const items2 = [
  { no: 1, name: "id", kind: "scalar", T: 6 },
  { no: 2, name: "username", kind: "scalar", T: 9 },
  { no: 3, name: "discriminator", kind: "scalar", T: 13 },
  {
    no: 4,
    name: "avatar_hash",
    kind: "message",
    T() {
      return callback(1337).StringValue;
    }
  },
  { no: 5, name: "bot", kind: "scalar", T: 8 },
  { no: 6, name: "flags", kind: "scalar", T: 4 },
  {
    no: 7,
    name: "email",
    kind: "message",
    T() {
      return defineProperty.StringValue;
    }
  },
  {
    no: 8,
    name: "phone",
    kind: "message",
    T() {
      return callback(1337).StringValue;
    }
  }
];
items1 = new items("discord_protos.users.v1.MediumUser", items2, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", tmp3, undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5);
// ThrowIfThisInitialized (0x7c)
class UserAvatarDecoration$Type extends MessageType4 {
  constructor() {
    items = [, , ];
    items[0] = { no: 1, name: "asset", kind: "scalar", T: 9 };
    obj = { no: 2, name: "sku_id", kind: "message", T: null };
    class T {
      constructor() {
        return require("defineProperty").UInt64Value;
      }
    }
    obj[3] = T;
    items[1] = obj;
    items[2] = {
      no: 3,
      name: "expires_at",
      kind: "message",
      T() {
            return callback(table[2]).UInt32Value;
          }
    };
    tmp = new tmp("discord_protos.users.v1.UserAvatarDecoration", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype4 = UserAvatarDecoration$Type.prototype;
prototype4["create"] = function create(arr) {
  let obj = { asset: "" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype4["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        obj.asset = pos.string();
      } else if (2 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let UInt64Value = defineProperty.UInt64Value;
        let tmp29 = UInt64Value;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.skuId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.skuId);
      } else if (3 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let UInt32Value = defineProperty.UInt32Value;
        let tmp24 = UInt32Value;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype4["internalBinaryWrite"] = function internalBinaryWrite(asset, tag, writeUnknownFields) {
  if ("" !== asset.asset) {
    tag.tag(1, 01307__.WireType.LengthDelimited).string(asset.asset);
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
  }
  if (asset.skuId) {
    const UInt64Value = defineProperty.UInt64Value;
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined = UInt64Value.internalBinaryWrite(asset.skuId, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = UInt64Value.internalBinaryWrite(asset.skuId, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (asset.expiresAt) {
    const UInt32Value = defineProperty.UInt32Value;
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined1 = UInt32Value.internalBinaryWrite(asset.expiresAt, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = UInt32Value.internalBinaryWrite(asset.expiresAt, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, asset, tag);
  }
  return tag;
};
const items3 = [
  { no: 1, name: "asset", kind: "scalar", T: 9 },
  {
    no: 2,
    name: "sku_id",
    kind: "message",
    T() {
      return defineProperty.UInt64Value;
    }
  },
  {
    no: 3,
    name: "expires_at",
    kind: "message",
    T() {
      return callback(table[2]).UInt32Value;
    }
  }
];
const mediumUserType = new MediumUser$Type("discord_protos.users.v1.UserAvatarDecoration", items3, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", tmp3, undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6);
// ThrowIfThisInitialized (0x7c)
class UserNameplate$Type extends MessageType5 {
  constructor() {
    items = [, , , , ];
    items[0] = { no: 1, name: "asset", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "palette", kind: "scalar", T: 9 };
    obj = { no: 3, name: "sku_id", kind: "message", T: null };
    class T {
      constructor() {
        return require("defineProperty").UInt64Value;
      }
    }
    obj[3] = T;
    items[2] = obj;
    items[3] = {
      no: 4,
      name: "expires_at",
      kind: "message",
      T() {
            return callback(table[4]).Timestamp;
          }
    };
    items[4] = { no: 5, name: "label", kind: "scalar", T: 9 };
    tmp = new tmp("discord_protos.users.v1.UserNameplate", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype5 = UserNameplate$Type.prototype;
prototype5["create"] = function create(arr) {
  let obj = { asset: "", palette: "", label: "" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype5["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        obj.asset = pos.string();
      } else if (2 === tmp5) {
        obj.palette = pos.string();
      } else if (3 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let UInt64Value = defineProperty.UInt64Value;
        let tmp29 = UInt64Value;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.skuId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.skuId);
      } else if (4 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let Timestamp = now.Timestamp;
        let tmp24 = Timestamp;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype5["internalBinaryWrite"] = function internalBinaryWrite(asset, tag, writeUnknownFields) {
  if ("" !== asset.asset) {
    tag.tag(1, 01307__.WireType.LengthDelimited).string(asset.asset);
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
  }
  if ("" !== asset.palette) {
    tag.tag(2, 01307__.WireType.LengthDelimited).string(asset.palette);
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
  }
  if (asset.skuId) {
    const UInt64Value = defineProperty.UInt64Value;
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined = UInt64Value.internalBinaryWrite(asset.skuId, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = UInt64Value.internalBinaryWrite(asset.skuId, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (asset.expiresAt) {
    const Timestamp = now.Timestamp;
    const tagResult3 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined1 = Timestamp.internalBinaryWrite(asset.expiresAt, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = Timestamp.internalBinaryWrite(asset.expiresAt, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== asset.label) {
    tag.tag(5, 01307__.WireType.LengthDelimited).string(asset.label);
    const tagResult4 = tag.tag(5, 01307__.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, asset, tag);
  }
  return tag;
};
const items4 = [
  { no: 1, name: "asset", kind: "scalar", T: 9 },
  { no: 2, name: "palette", kind: "scalar", T: 9 },
  {
    no: 3,
    name: "sku_id",
    kind: "message",
    T() {
      return defineProperty.UInt64Value;
    }
  },
  {
    no: 4,
    name: "expires_at",
    kind: "message",
    T() {
      return callback(table[4]).Timestamp;
    }
  },
  { no: 5, name: "label", kind: "scalar", T: 9 }
];
const mediumUserType1 = new MediumUser$Type("discord_protos.users.v1.UserNameplate", items4, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", tmp3, undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6);
// ThrowIfThisInitialized (0x7c)
class DisplayNameStyles$Type extends MessageType6 {
  constructor() {
    obj = {
      no: 1,
      name: "font_id",
      kind: "enum",
      T() {
            const items = ["discord_protos.users.v1.DisplayNameFont", closure_4, "DISPLAY_NAME_FONT_"];
            return items;
          }
    };
    items = [, , , ];
    items[0] = obj;
    obj = { no: 2, name: "effect_id", kind: "enum", T: null };
    class T {
      constructor() {
        items = ["discord_protos.users.v1.DisplayNameEffect"];
        items[1] = closure_5;
        items[2] = "DISPLAY_NAME_EFFECT_";
        return items;
      }
    }
    obj[3] = T;
    items[1] = obj;
    items[2] = { no: 3, name: "colors", kind: "scalar", repeat: 1, T: 13 };
    items[3] = {
      no: 4,
      name: "animated",
      kind: "message",
      T() {
            return callback(table[2]).BoolValue;
          }
    };
    tmp = new tmp("discord_protos.users.v1.DisplayNameStyles", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype6 = DisplayNameStyles$Type.prototype;
prototype6["create"] = function create(arr) {
  let obj = { fontId: 0, effectId: 0, colors: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype6["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        obj.fontId = pos.int32();
      } else if (2 === tmp5) {
        obj.effectId = pos.int32();
      } else if (3 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        if (tmp6 === 01307__.WireType.LengthDelimited) {
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
          arr = colors1.push(pos.uint32());
        }
      } else if (4 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let BoolValue = defineProperty.BoolValue;
        let tmp24 = BoolValue;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype6["internalBinaryWrite"] = function internalBinaryWrite(fontId, tag, writeUnknownFields) {
  let length;
  if (0 !== fontId.fontId) {
    tag.tag(1, 01307__.WireType.Varint).int32(fontId.fontId);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  if (0 !== fontId.effectId) {
    tag.tag(2, 01307__.WireType.Varint).int32(fontId.effectId);
    const tagResult1 = tag.tag(2, 01307__.WireType.Varint);
  }
  if (fontId.colors.length) {
    tag.tag(3, 01307__.WireType.LengthDelimited).fork();
    let num5 = 0;
    if (0 < fontId.colors.length) {
      do {
        let uint32Result = tag.uint32(fontId.colors[num5]);
        num5 = num5 + 1;
        length = fontId.colors.length;
      } while (num5 < length);
    }
    const joined = tag.join();
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
  }
  if (fontId.animated) {
    const BoolValue = defineProperty.BoolValue;
    const tagResult3 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined1 = BoolValue.internalBinaryWrite(fontId.animated, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = BoolValue.internalBinaryWrite(fontId.animated, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, fontId, tag);
  }
  return tag;
};
const items5 = [
  {
    no: 1,
    name: "font_id",
    kind: "enum",
    T() {
      const items = ["discord_protos.users.v1.DisplayNameFont", closure_4, "DISPLAY_NAME_FONT_"];
      return items;
    }
  },
  {
    no: 2,
    name: "effect_id",
    kind: "enum",
    T() {
      const items = ["discord_protos.users.v1.DisplayNameEffect", obj, "DISPLAY_NAME_EFFECT_"];
      return items;
    }
  },
  { no: 3, name: "colors", kind: "scalar", repeat: 1, T: 13 },
  {
    no: 4,
    name: "animated",
    kind: "message",
    T() {
      return callback(table[2]).BoolValue;
    }
  }
];
const mediumUserType2 = new MediumUser$Type("discord_protos.users.v1.DisplayNameStyles", items5, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", tmp3, undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6);
// ThrowIfThisInitialized (0x7c)
class UserCollectibles$Type extends MessageType7 {
  constructor() {
    obj = {
      no: 1,
      name: "nameplate",
      kind: "message",
      T() {
            return closure_18;
          }
    };
    items = [];
    items[0] = obj;
    tmp = new tmp("discord_protos.users.v1.UserCollectibles", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype7 = UserCollectibles$Type.prototype;
prototype7["create"] = function create(arr) {
  let obj = {};
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype7["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let tmp22 = mediumUserType1;
        let tmp23 = mediumUserType1;
        let tmp24 = pos;
        let tmp25 = readUnknownField;
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype7["internalBinaryWrite"] = function internalBinaryWrite(nameplate, tag, writeUnknownFields) {
  if (nameplate.nameplate) {
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = mediumUserType1.internalBinaryWrite(nameplate.nameplate, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = mediumUserType1.internalBinaryWrite(nameplate.nameplate, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, nameplate, tag);
  }
  return tag;
};
const items6 = [
  {
    no: 1,
    name: "nameplate",
    kind: "message",
    T() {
      return closure_18;
    }
  }
];
const mediumUserType3 = new MediumUser$Type("discord_protos.users.v1.UserCollectibles", items6, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", tmp3, undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6);
// ThrowIfThisInitialized (0x7c)
class UserPrimaryGuild$Type extends MessageType8 {
  constructor() {
    obj = {
      no: 1,
      name: "identity_guild_id",
      kind: "message",
      T() {
            return callback(1337).UInt64Value;
          }
    };
    items = [, , , ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "identity_enabled",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    obj = { no: 3, name: "tag", kind: "message", T: null };
    class T {
      constructor() {
        return require("defineProperty").StringValue;
      }
    }
    obj[3] = T;
    items[2] = obj;
    items[3] = {
      no: 4,
      name: "badge",
      kind: "message",
      T() {
            return callback(1337).StringValue;
          }
    };
    tmp = new tmp("discord_protos.users.v1.UserPrimaryGuild", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype8 = UserPrimaryGuild$Type.prototype;
prototype8["create"] = function create(arr) {
  let obj = {};
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype8["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let tmp37 = require;
        let tmp38 = dependencyMap;
        let UInt64Value = defineProperty.UInt64Value;
        let tmp39 = UInt64Value;
        let tmp40 = pos;
        let tmp41 = readUnknownField;
        obj.identityGuildId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.identityGuildId);
      } else if (2 === tmp5) {
        let tmp32 = require;
        let tmp33 = dependencyMap;
        let BoolValue = defineProperty.BoolValue;
        let tmp34 = BoolValue;
        let tmp35 = pos;
        let tmp36 = readUnknownField;
        obj.identityEnabled = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.identityEnabled);
      } else if (3 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let StringValue2 = defineProperty.StringValue;
        let tmp29 = StringValue2;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.tag = StringValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.tag);
      } else if (4 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let StringValue = defineProperty.StringValue;
        let tmp24 = StringValue;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype8["internalBinaryWrite"] = function internalBinaryWrite(identityGuildId, tag, writeUnknownFields) {
  if (identityGuildId.identityGuildId) {
    const UInt64Value = defineProperty.UInt64Value;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = UInt64Value.internalBinaryWrite(identityGuildId.identityGuildId, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = UInt64Value.internalBinaryWrite(identityGuildId.identityGuildId, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (identityGuildId.identityEnabled) {
    const BoolValue = defineProperty.BoolValue;
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined1 = BoolValue.internalBinaryWrite(identityGuildId.identityEnabled, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = BoolValue.internalBinaryWrite(identityGuildId.identityEnabled, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (identityGuildId.tag) {
    const StringValue = defineProperty.StringValue;
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined2 = StringValue.internalBinaryWrite(identityGuildId.tag, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = StringValue.internalBinaryWrite(identityGuildId.tag, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (identityGuildId.badge) {
    const StringValue2 = defineProperty.StringValue;
    const tagResult3 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined3 = StringValue2.internalBinaryWrite(identityGuildId.badge, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = StringValue2.internalBinaryWrite(identityGuildId.badge, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, identityGuildId, tag);
  }
  return tag;
};
const items7 = [
  {
    no: 1,
    name: "identity_guild_id",
    kind: "message",
    T() {
      return callback(1337).UInt64Value;
    }
  },
  {
    no: 2,
    name: "identity_enabled",
    kind: "message",
    T() {
      return callback(1337).BoolValue;
    }
  },
  {
    no: 3,
    name: "tag",
    kind: "message",
    T() {
      return defineProperty.StringValue;
    }
  },
  {
    no: 4,
    name: "badge",
    kind: "message",
    T() {
      return callback(1337).StringValue;
    }
  }
];
const mediumUserType4 = new MediumUser$Type("discord_protos.users.v1.UserPrimaryGuild", items7, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", tmp3, undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6);
// ThrowIfThisInitialized (0x7c)
class ScheduleRule$Type extends MessageType9 {
  constructor() {
    items = [, , , , , ];
    items[0] = { no: 1, name: "rule_id", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "label", kind: "scalar", T: 9 };
    items[2] = {
      no: 3,
      name: "start_time",
      kind: "message",
      T() {
            return closure_16;
          }
    };
    obj = { no: 4, name: "end_time", kind: "message", T: null };
    class T {
      constructor() {
        return closure_16;
      }
    }
    obj[3] = T;
    items[3] = obj;
    items[4] = {
      no: 5,
      name: "days",
      kind: "enum",
      repeat: 1,
      T() {
            const items = ["discord_protos.users.v1.DayOfWeek", closure_3];
            return items;
          }
    };
    items[5] = { no: 6, name: "enabled", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.users.v1.ScheduleRule", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype9 = ScheduleRule$Type.prototype;
prototype9["create"] = function create(arr) {
  let obj = { ruleId: "", label: "", days: [], enabled: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype9["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        obj.ruleId = pos.string();
      } else if (2 === tmp5) {
        obj.label = pos.string();
      } else if (3 === tmp5) {
        let tmp31 = tmp9;
        let tmp32 = tmp9;
        let tmp33 = pos;
        let tmp34 = readUnknownField;
        obj.startTime = tmp9.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.startTime);
      } else if (4 === tmp5) {
        let tmp27 = tmp9;
        let tmp28 = tmp9;
        let tmp29 = pos;
        let tmp30 = readUnknownField;
        obj.endTime = tmp9.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.endTime);
      } else if (5 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        if (tmp6 === 01307__.WireType.LengthDelimited) {
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
          arr = days1.push(pos.int32());
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype9["internalBinaryWrite"] = function internalBinaryWrite(ruleId, tag, writeUnknownFields) {
  let length;
  if ("" !== ruleId.ruleId) {
    tag.tag(1, 01307__.WireType.LengthDelimited).string(ruleId.ruleId);
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
  }
  if ("" !== ruleId.label) {
    tag.tag(2, 01307__.WireType.LengthDelimited).string(ruleId.label);
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
  }
  if (ruleId.startTime) {
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined = dependencyMap.internalBinaryWrite(ruleId.startTime, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = dependencyMap.internalBinaryWrite(ruleId.startTime, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (ruleId.endTime) {
    const tagResult3 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined1 = tmp9.internalBinaryWrite(ruleId.endTime, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = tmp9.internalBinaryWrite(ruleId.endTime, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (ruleId.days.length) {
    tag.tag(5, 01307__.WireType.LengthDelimited).fork();
    let num6 = 0;
    if (0 < ruleId.days.length) {
      do {
        let int32Result = tag.int32(ruleId.days[num6]);
        num6 = num6 + 1;
        length = ruleId.days.length;
      } while (num6 < length);
    }
    const joined2 = tag.join();
    const tagResult4 = tag.tag(5, 01307__.WireType.LengthDelimited);
  }
  if (false !== ruleId.enabled) {
    tag.tag(6, 01307__.WireType.Varint).bool(ruleId.enabled);
    const tagResult5 = tag.tag(6, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, ruleId, tag);
  }
  return tag;
};
const items8 = [
  { no: 1, name: "rule_id", kind: "scalar", T: 9 },
  { no: 2, name: "label", kind: "scalar", T: 9 },
  {
    no: 3,
    name: "start_time",
    kind: "message",
    T() {
      return closure_16;
    }
  },
  {
    no: 4,
    name: "end_time",
    kind: "message",
    T() {
      return closure_16;
    }
  },
  {
    no: 5,
    name: "days",
    kind: "enum",
    repeat: 1,
    T() {
      const items = ["discord_protos.users.v1.DayOfWeek", closure_3];
      return items;
    }
  },
  { no: 6, name: "enabled", kind: "scalar", T: 8 }
];
const mediumUserType5 = new MediumUser$Type("discord_protos.users.v1.ScheduleRule", items8, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", tmp3, undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6);
// ThrowIfThisInitialized (0x7c)
class RestrictedSchedule$Type extends MessageType10 {
  constructor() {
    obj = {
      no: 1,
      name: "rules",
      kind: "message",
      repeat: 1,
      T() {
            return closure_22;
          }
    };
    items = [];
    items[0] = obj;
    tmp = new tmp("discord_protos.users.v1.RestrictedSchedule", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype10 = RestrictedSchedule$Type.prototype;
prototype10["create"] = function create(arr) {
  let obj = { rules: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype10["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let rules = obj.rules;
        let tmp22 = mediumUserType5;
        let arr = rules.push(mediumUserType5.internalBinaryRead(pos, pos.uint32(), readUnknownField));
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let tmp15 = globalThis;
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          let str = ") for ";
          let str2 = " (wire type ";
          let str3 = "Unknown field ";
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype10["internalBinaryWrite"] = function internalBinaryWrite(rules, tag, writeUnknownFields) {
  let length;
  let num = 0;
  if (0 < rules.rules.length) {
    do {
      let tmp = mediumUserType5;
      let tmp2 = require;
      let tmp3 = dependencyMap;
      let tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
      let internalBinaryWriteResult = mediumUserType5.internalBinaryWrite(rules.rules[num], tagResult.fork(), writeUnknownFields);
      let joined = internalBinaryWriteResult.join();
      num = num + 1;
      length = rules.rules.length;
    } while (num < length);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, rules, tag);
  }
  return tag;
};
const items9 = [
  {
    no: 1,
    name: "rules",
    kind: "message",
    repeat: 1,
    T() {
      return closure_22;
    }
  }
];
const mediumUserType6 = new MediumUser$Type("discord_protos.users.v1.RestrictedSchedule", items9, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", tmp3, undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6);
// ThrowIfThisInitialized (0x7c)
class CrossPlatformRestriction$Type extends MessageType11 {
  constructor() {
    obj = {
      no: 1,
      name: "restriction_expiry",
      kind: "message",
      T() {
            return callback(table[4]).Timestamp;
          }
    };
    items = [, ];
    items[0] = obj;
    items[1] = { no: 2, name: "application_id", kind: "scalar", T: 6 };
    tmp = new tmp("discord_protos.users.v1.CrossPlatformRestriction", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype11 = CrossPlatformRestriction$Type.prototype;
prototype11["create"] = function create(arr) {
  let obj = { applicationId: "0" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype11["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let Timestamp = now.Timestamp;
        let tmp24 = Timestamp;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.restrictionExpiry = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.restrictionExpiry);
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype11["internalBinaryWrite"] = function internalBinaryWrite(restrictionExpiry, tag, writeUnknownFields) {
  if (restrictionExpiry.restrictionExpiry) {
    const Timestamp = now.Timestamp;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(restrictionExpiry.restrictionExpiry, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(restrictionExpiry.restrictionExpiry, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("0" !== restrictionExpiry.applicationId) {
    tag.tag(2, 01307__.WireType.Bit64).fixed64(restrictionExpiry.applicationId);
    const tagResult1 = tag.tag(2, 01307__.WireType.Bit64);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, restrictionExpiry, tag);
  }
  return tag;
};
const items10 = [
  {
    no: 1,
    name: "restriction_expiry",
    kind: "message",
    T() {
      return callback(table[4]).Timestamp;
    }
  },
  { no: 2, name: "application_id", kind: "scalar", T: 6 }
];
const mediumUserType7 = new MediumUser$Type("discord_protos.users.v1.CrossPlatformRestriction", items10, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", tmp3, undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6);
// ThrowIfThisInitialized (0x7c)
class BadgeCommon$Type extends MessageType12 {
  constructor() {
    obj = {
      no: 1,
      name: "obtained_at",
      kind: "message",
      T() {
            return callback(table[4]).Timestamp;
          }
    };
    items = [];
    items[0] = obj;
    tmp = new tmp("discord_protos.users.v1.BadgeCommon", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype12 = BadgeCommon$Type.prototype;
prototype12["create"] = function create(arr) {
  let obj = {};
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype12["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let Timestamp = now.Timestamp;
        let tmp24 = Timestamp;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype12["internalBinaryWrite"] = function internalBinaryWrite(obtainedAt, tag, writeUnknownFields) {
  if (obtainedAt.obtainedAt) {
    const Timestamp = now.Timestamp;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(obtainedAt.obtainedAt, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(obtainedAt.obtainedAt, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, obtainedAt, tag);
  }
  return tag;
};
const items11 = [
  {
    no: 1,
    name: "obtained_at",
    kind: "message",
    T() {
      return callback(table[4]).Timestamp;
    }
  }
];
const mediumUserType8 = new MediumUser$Type("discord_protos.users.v1.BadgeCommon", items11, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", tmp3, undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6);
// ThrowIfThisInitialized (0x7c)
class AprilFools2026Badge$Type extends MessageType13 {
  constructor() {
    obj = {
      no: 1,
      name: "common",
      kind: "message",
      T() {
            return closure_25;
          }
    };
    items = [, , ];
    items[0] = obj;
    items[1] = { no: 2, name: "level", kind: "scalar", T: 5 };
    items[2] = { no: 3, name: "combat_class", kind: "scalar", T: 9 };
    tmp = new tmp("discord_protos.users.v1.AprilFools2026Badge", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype13 = AprilFools2026Badge$Type.prototype;
prototype13["create"] = function create(arr) {
  let obj = { level: 0, combatClass: "" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype13["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let tmp22 = mediumUserType8;
        let tmp23 = mediumUserType8;
        let tmp24 = pos;
        let tmp25 = readUnknownField;
        obj.common = mediumUserType8.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.common);
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype13["internalBinaryWrite"] = function internalBinaryWrite(common, tag, writeUnknownFields) {
  if (common.common) {
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = mediumUserType8.internalBinaryWrite(common.common, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = mediumUserType8.internalBinaryWrite(common.common, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (0 !== common.level) {
    tag.tag(2, 01307__.WireType.Varint).int32(common.level);
    const tagResult1 = tag.tag(2, 01307__.WireType.Varint);
  }
  if ("" !== common.combatClass) {
    tag.tag(3, 01307__.WireType.LengthDelimited).string(common.combatClass);
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, common, tag);
  }
  return tag;
};
const items12 = [
  {
    no: 1,
    name: "common",
    kind: "message",
    T() {
      return closure_25;
    }
  },
  { no: 2, name: "level", kind: "scalar", T: 5 },
  { no: 3, name: "combat_class", kind: "scalar", T: 9 }
];
const mediumUserType9 = new MediumUser$Type("discord_protos.users.v1.AprilFools2026Badge", items12, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", tmp3, undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6);
// ThrowIfThisInitialized (0x7c)
class Badge$Type extends MessageType14 {
  constructor() {
    obj = {
      no: 1,
      name: "april_fools_2026",
      kind: "message",
      oneof: "badge",
      T() {
            return closure_26;
          }
    };
    items = [];
    items[0] = obj;
    tmp = new tmp("discord_protos.users.v1.Badge", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype14 = Badge$Type.prototype;
prototype14["create"] = function create(arr) {
  let obj = { badge: { oneofKind: "r" } };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype14["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        obj = { oneofKind: "aprilFools2026", aprilFools2026: null };
        let tmp22 = mediumUserType9;
        let tmp23 = mediumUserType9;
        let tmp24 = pos;
        let tmp25 = readUnknownField;
        obj[1] = mediumUserType9.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.badge.aprilFools2026);
        obj.badge = obj;
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let tmp15 = globalThis;
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          let str = ") for ";
          let str2 = " (wire type ";
          let str3 = "Unknown field ";
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype14["internalBinaryWrite"] = function internalBinaryWrite(badge, tag, writeUnknownFields) {
  if ("aprilFools2026" === badge.badge.oneofKind) {
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = mediumUserType9.internalBinaryWrite(badge.badge.aprilFools2026, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = mediumUserType9.internalBinaryWrite(badge.badge.aprilFools2026, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, badge, tag);
  }
  return tag;
};
const items13 = [
  {
    no: 1,
    name: "april_fools_2026",
    kind: "message",
    oneof: "badge",
    T() {
      return closure_26;
    }
  }
];
const mediumUserType10 = new MediumUser$Type("discord_protos.users.v1.Badge", items13, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", tmp3, undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6);
// ThrowIfThisInitialized (0x7c)
class UserBadges$Type extends MessageType15 {
  constructor() {
    obj = {
      no: 1,
      name: "badges",
      kind: "message",
      repeat: 1,
      T() {
            return closure_27;
          }
    };
    items = [];
    items[0] = obj;
    tmp = new tmp("discord_protos.users.v1.UserBadges", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype15 = UserBadges$Type.prototype;
prototype15["create"] = function create(arr) {
  let obj = { badges: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype15["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let badges = obj.badges;
        let tmp22 = mediumUserType10;
        let arr = badges.push(mediumUserType10.internalBinaryRead(pos, pos.uint32(), readUnknownField));
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let tmp15 = globalThis;
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          let str = ") for ";
          let str2 = " (wire type ";
          let str3 = "Unknown field ";
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype15["internalBinaryWrite"] = function internalBinaryWrite(badges, tag, writeUnknownFields) {
  let length;
  let num = 0;
  if (0 < badges.badges.length) {
    do {
      let tmp = mediumUserType10;
      let tmp2 = require;
      let tmp3 = dependencyMap;
      let tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
      let internalBinaryWriteResult = mediumUserType10.internalBinaryWrite(badges.badges[num], tagResult.fork(), writeUnknownFields);
      let joined = internalBinaryWriteResult.join();
      num = num + 1;
      length = badges.badges.length;
    } while (num < length);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, badges, tag);
  }
  return tag;
};
const items14 = [
  {
    no: 1,
    name: "badges",
    kind: "message",
    repeat: 1,
    T() {
      return closure_27;
    }
  }
];
const mediumUserType11 = new MediumUser$Type("discord_protos.users.v1.UserBadges", items14, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", tmp3, undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6);
// ThrowIfThisInitialized (0x7c)
class AnonymizationInfo$Type extends MessageType16 {
  constructor() {
    obj = {
      no: 1,
      name: "status",
      kind: "enum",
      T() {
            const items = ["discord_protos.users.v1.AnonymizationStatus", closure_6, "ANONYMIZATION_STATUS_"];
            return items;
          }
    };
    items = [, ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "anon_user_id",
      kind: "message",
      T() {
            return callback(table[2]).UInt64Value;
          }
    };
    tmp = new tmp("discord_protos.users.v1.AnonymizationInfo", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype16 = AnonymizationInfo$Type.prototype;
prototype16["create"] = function create(arr) {
  let obj = { status: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype16["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        obj.status = pos.int32();
      } else if (2 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let UInt64Value = defineProperty.UInt64Value;
        let tmp24 = UInt64Value;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype16["internalBinaryWrite"] = function internalBinaryWrite(status, tag, writeUnknownFields) {
  if (0 !== status.status) {
    tag.tag(1, 01307__.WireType.Varint).int32(status.status);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  if (status.anonUserId) {
    const UInt64Value = defineProperty.UInt64Value;
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined = UInt64Value.internalBinaryWrite(status.anonUserId, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = UInt64Value.internalBinaryWrite(status.anonUserId, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, status, tag);
  }
  return tag;
};
const items15 = [
  {
    no: 1,
    name: "status",
    kind: "enum",
    T() {
      const items = ["discord_protos.users.v1.AnonymizationStatus", closure_6, "ANONYMIZATION_STATUS_"];
      return items;
    }
  },
  {
    no: 2,
    name: "anon_user_id",
    kind: "message",
    T() {
      return callback(table[2]).UInt64Value;
    }
  }
];
const mediumUserType12 = new MediumUser$Type("discord_protos.users.v1.AnonymizationInfo", items15, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", tmp3, undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6);
// ThrowIfThisInitialized (0x7c)
class UserData$Type extends MessageType17 {
  constructor() {
    obj = {
      kind: "message",
      T() {
            return closure_31;
          }
    };
    items = [, , , , , , , , , , , , , , , , , ];
    items[0] = { no: 1, name: "linked_users", kind: "map", K: 6, V: obj };
    obj = {
      kind: "message",
      T() {
            return closure_33;
          }
    };
    items[1] = { no: 2, name: "safety_feature_limits", kind: "map", K: 13, V: obj };
    obj1 = { no: 3, name: "safety_flags", kind: "map", K: 13, V: null };
    obj2 = { kind: "message", T: null };
    class T {
      constructor() {
        return closure_34;
      }
    }
    obj2[1] = T;
    obj1[4] = obj2;
    items[2] = obj1;
    items[3] = {
      no: 4,
      name: "quest",
      kind: "message",
      T() {
            return closure_35;
          }
    };
    items[4] = {
      no: 5,
      name: "primary_guild",
      kind: "message",
      T() {
            return closure_21;
          }
    };
    items[5] = {
      no: 6,
      name: "cross_platform_restriction",
      kind: "message",
      T() {
            return closure_24;
          }
    };
    items[6] = {
      no: 7,
      name: "collectibles",
      kind: "message",
      T() {
            return closure_20;
          }
    };
    items[7] = {
      no: 8,
      name: "safety_state",
      kind: "message",
      T() {
            return callback(table[3]).SafetyState;
          }
    };
    items[8] = {
      no: 9,
      name: "premium_state",
      kind: "message",
      T() {
            return closure_36;
          }
    };
    items[9] = {
      no: 10,
      name: "display_name_styles",
      kind: "message",
      T() {
            return closure_19;
          }
    };
    items[10] = {
      no: 11,
      name: "store_country",
      kind: "message",
      T() {
            return closure_37;
          }
    };
    items[11] = {
      no: 12,
      name: "restricted_schedule",
      kind: "message",
      T() {
            return closure_23;
          }
    };
    items[12] = {
      no: 13,
      name: "age_assurance_data",
      kind: "message",
      T() {
            return closure_30;
          }
    };
    items[13] = {
      no: 14,
      name: "perks",
      kind: "message",
      T() {
            return closure_41;
          }
    };
    items[14] = {
      no: 15,
      name: "badges",
      kind: "message",
      T() {
            return closure_28;
          }
    };
    items[15] = {
      no: 16,
      name: "country_data",
      kind: "message",
      T() {
            return closure_42;
          }
    };
    items[16] = { no: 17, name: "is_pending_required_action", kind: "scalar", T: 8 };
    items[17] = {
      no: 18,
      name: "anonymization_info",
      kind: "message",
      T() {
            return closure_29;
          }
    };
    tmp = new tmp("discord_protos.users.v1.UserData", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype17 = UserData$Type.prototype;
prototype17["create"] = function create(arr) {
  let obj = { linkedUsers: {}, safetyFeatureLimits: {}, safetyFlags: {}, isPendingRequiredAction: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype17["internalBinaryRead"] = function internalBinaryRead(pos) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  if (pos.pos < pos.pos + arg1) {
    [r10019, r10020] = callback(pos.tag(), 2);
    const tmp3 = callback(pos.tag(), 2);
  }
  return obj;
};
prototype17["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
  let tmp7;
  const sum = pos.pos + pos.uint32();
  let obj;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp5 = callback;
      let tmp6 = callback(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let tmp8 = tmp2;
      str = tmp3;
      if (1 === tmp7) {
        let str3 = pos.fixed64();
        str = str3.toString();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        let tmp15 = tmp27;
        internalBinaryReadResult = tmp27.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = str;
      obj = internalBinaryReadResult;
    }
    const _globalThis = globalThis;
    const error = new Error("unknown map entry field for field discord_protos.users.v1.UserData.linked_users");
    throw error;
  }
  if (str == null) {
    str = "0";
  }
  if (obj == null) {
    obj = tmp27.create();
  }
  arg0[str] = obj;
};
prototype17["binaryReadMap2"] = function binaryReadMap2(arg0, pos) {
  let tmp7;
  const sum = pos.pos + pos.uint32();
  let obj;
  let num;
  if (pos.pos < sum) {
    while (true) {
      let tmp5 = callback;
      let tmp6 = callback(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let tmp8 = tmp2;
      let uint32Result = tmp3;
      if (1 === tmp7) {
        uint32Result = pos.uint32();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        let tmp15 = items18;
        internalBinaryReadResult = items18.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = uint32Result;
      obj = internalBinaryReadResult;
      num = uint32Result;
    }
    const _globalThis = globalThis;
    const error = new Error("unknown map entry field for field discord_protos.users.v1.UserData.safety_feature_limits");
    throw error;
  }
  if (num == null) {
    num = 0;
  }
  if (obj == null) {
    obj = items18.create();
  }
  arg0[num] = obj;
};
prototype17["binaryReadMap3"] = function binaryReadMap3(arg0, pos) {
  let tmp7;
  const sum = pos.pos + pos.uint32();
  let obj;
  let num;
  if (pos.pos < sum) {
    while (true) {
      let tmp5 = callback;
      let tmp6 = callback(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let tmp8 = tmp2;
      let uint32Result = tmp3;
      if (1 === tmp7) {
        uint32Result = pos.uint32();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        let tmp15 = items181;
        internalBinaryReadResult = items181.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = uint32Result;
      obj = internalBinaryReadResult;
      num = uint32Result;
    }
    const _globalThis = globalThis;
    const error = new Error("unknown map entry field for field discord_protos.users.v1.UserData.safety_flags");
    throw error;
  }
  if (num == null) {
    num = 0;
  }
  if (obj == null) {
    obj = items181.create();
  }
  arg0[num] = obj;
};
prototype17["internalBinaryWrite"] = function internalBinaryWrite(linkedUsers, tag, writeUnknownFields) {
  const keys = Object.keys(linkedUsers.linkedUsers);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, 01307__.WireType.Bit64);
    let fixed64Result = tagResult1.fixed64(nextResult);
    let tagResult2 = tag.tag(2, 01307__.WireType.LengthDelimited);
    let forkResult1 = tagResult2.fork();
    let tmp7 = tmp27;
    let internalBinaryWriteResult = tmp27.internalBinaryWrite(linkedUsers.linkedUsers[nextResult], tag, writeUnknownFields);
    let joined = tag.join();
    let joined1 = joined.join();
    continue;
  }
  const keys1 = Object.keys(linkedUsers.safetyFeatureLimits);
  for (const item10059 of keys1) {
    let tmp11 = require;
    let tmp12 = dependencyMap;
    let tagResult3 = arg1.tag(2, 01307__.WireType.LengthDelimited);
    let forkResult2 = tagResult3.fork();
    let tagResult4 = forkResult2.tag(1, 01307__.WireType.Varint);
    let _parseInt = parseInt;
    let uint32Result = tagResult4.uint32(parseInt(item10059));
    let tagResult5 = arg1.tag(2, 01307__.WireType.LengthDelimited);
    let forkResult3 = tagResult5.fork();
    let tmp15 = items18;
    let internalBinaryWriteResult1 = items18.internalBinaryWrite(arg0.safetyFeatureLimits[item10059], arg1, arg2);
    let joined2 = arg1.join();
    let joined3 = joined2.join();
    continue;
  }
  const keys2 = Object.keys(linkedUsers.safetyFlags);
  const iter2 = keys2[Symbol.iterator]();
  const nextResult1 = iter2.next();
  while (iter2 !== undefined) {
    let tmp20 = require;
    let tmp21 = dependencyMap;
    let tagResult6 = tag.tag(3, 01307__.WireType.LengthDelimited);
    let forkResult4 = tagResult6.fork();
    let tagResult7 = forkResult4.tag(1, 01307__.WireType.Varint);
    let _parseInt2 = parseInt;
    let uint32Result1 = tagResult7.uint32(parseInt(nextResult1));
    let tagResult8 = tag.tag(2, 01307__.WireType.LengthDelimited);
    let forkResult5 = tagResult8.fork();
    let tmp24 = items181;
    let internalBinaryWriteResult2 = items181.internalBinaryWrite(linkedUsers.safetyFlags[nextResult1], tag, writeUnknownFields);
    let joined4 = tag.join();
    let joined5 = joined4.join();
    continue;
  }
  if (linkedUsers.quest) {
    const tagResult9 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined6 = guildShardingConfigType.internalBinaryWrite(linkedUsers.quest, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = guildShardingConfigType.internalBinaryWrite(linkedUsers.quest, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (linkedUsers.primaryGuild) {
    const tagResult10 = tag.tag(5, 01307__.WireType.LengthDelimited);
    const joined7 = mediumUserType4.internalBinaryWrite(linkedUsers.primaryGuild, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = mediumUserType4.internalBinaryWrite(linkedUsers.primaryGuild, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (linkedUsers.crossPlatformRestriction) {
    const tagResult11 = tag.tag(6, 01307__.WireType.LengthDelimited);
    const joined8 = mediumUserType7.internalBinaryWrite(linkedUsers.crossPlatformRestriction, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult5 = mediumUserType7.internalBinaryWrite(linkedUsers.crossPlatformRestriction, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (linkedUsers.collectibles) {
    const tagResult12 = tag.tag(7, 01307__.WireType.LengthDelimited);
    const joined9 = mediumUserType3.internalBinaryWrite(linkedUsers.collectibles, tag.tag(7, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult6 = mediumUserType3.internalBinaryWrite(linkedUsers.collectibles, tag.tag(7, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (linkedUsers.safetyState) {
    const SafetyState = create.SafetyState;
    const tagResult13 = tag.tag(8, 01307__.WireType.LengthDelimited);
    const joined10 = SafetyState.internalBinaryWrite(linkedUsers.safetyState, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult7 = SafetyState.internalBinaryWrite(linkedUsers.safetyState, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (linkedUsers.premiumState) {
    const tagResult14 = tag.tag(9, 01307__.WireType.LengthDelimited);
    const joined11 = guildShardingConfigType1.internalBinaryWrite(linkedUsers.premiumState, tag.tag(9, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult8 = guildShardingConfigType1.internalBinaryWrite(linkedUsers.premiumState, tag.tag(9, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (linkedUsers.displayNameStyles) {
    const tagResult15 = tag.tag(10, 01307__.WireType.LengthDelimited);
    const joined12 = mediumUserType2.internalBinaryWrite(linkedUsers.displayNameStyles, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult9 = mediumUserType2.internalBinaryWrite(linkedUsers.displayNameStyles, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (linkedUsers.storeCountry) {
    const tagResult16 = tag.tag(11, 01307__.WireType.LengthDelimited);
    const joined13 = guildShardingConfigType2.internalBinaryWrite(linkedUsers.storeCountry, tag.tag(11, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult10 = guildShardingConfigType2.internalBinaryWrite(linkedUsers.storeCountry, tag.tag(11, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (linkedUsers.restrictedSchedule) {
    const tagResult17 = tag.tag(12, 01307__.WireType.LengthDelimited);
    const joined14 = mediumUserType6.internalBinaryWrite(linkedUsers.restrictedSchedule, tag.tag(12, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult11 = mediumUserType6.internalBinaryWrite(linkedUsers.restrictedSchedule, tag.tag(12, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (linkedUsers.ageAssuranceData) {
    const tagResult18 = tag.tag(13, 01307__.WireType.LengthDelimited);
    const joined15 = tmp26.internalBinaryWrite(linkedUsers.ageAssuranceData, tag.tag(13, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult12 = tmp26.internalBinaryWrite(linkedUsers.ageAssuranceData, tag.tag(13, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (linkedUsers.perks) {
    const tagResult19 = tag.tag(14, 01307__.WireType.LengthDelimited);
    const joined16 = perkConfigIncreasedFileUploadSizeType1.internalBinaryWrite(linkedUsers.perks, tag.tag(14, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult13 = perkConfigIncreasedFileUploadSizeType1.internalBinaryWrite(linkedUsers.perks, tag.tag(14, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (linkedUsers.badges) {
    const tagResult20 = tag.tag(15, 01307__.WireType.LengthDelimited);
    const joined17 = mediumUserType11.internalBinaryWrite(linkedUsers.badges, tag.tag(15, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult14 = mediumUserType11.internalBinaryWrite(linkedUsers.badges, tag.tag(15, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (linkedUsers.countryData) {
    const tagResult21 = tag.tag(16, 01307__.WireType.LengthDelimited);
    const joined18 = tmp39.internalBinaryWrite(linkedUsers.countryData, tag.tag(16, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult15 = tmp39.internalBinaryWrite(linkedUsers.countryData, tag.tag(16, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (false !== linkedUsers.isPendingRequiredAction) {
    tag.tag(17, 01307__.WireType.Varint).bool(linkedUsers.isPendingRequiredAction);
    const tagResult22 = tag.tag(17, 01307__.WireType.Varint);
  }
  if (linkedUsers.anonymizationInfo) {
    const tagResult23 = tag.tag(18, 01307__.WireType.LengthDelimited);
    const joined19 = mediumUserType12.internalBinaryWrite(linkedUsers.anonymizationInfo, tag.tag(18, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult16 = mediumUserType12.internalBinaryWrite(linkedUsers.anonymizationInfo, tag.tag(18, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, linkedUsers, tag);
  }
  return tag;
};
const userDataType = new UserData$Type();
class AgeAssuranceData$Type extends MessageType18 {
  constructor() {
    obj = {
      no: 1,
      name: "estimated_date_of_birth",
      kind: "message",
      T() {
            return callback(table[4]).Timestamp;
          }
    };
    items = [, , , , , , ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "method",
      kind: "enum",
      T() {
            const items = ["discord_protos.users.v1.AgeAssuranceMethod", closure_7, "AGE_ASSURANCE_METHOD_"];
            return items;
          }
    };
    items[2] = { no: 3, name: "method_version", kind: "scalar", T: 5 };
    items[3] = {
      no: 4,
      name: "vendor",
      kind: "enum",
      T() {
            const items = ["discord_protos.users.v1.AgeAssuranceVendor", closure_8, "AGE_ASSURANCE_VENDOR_"];
            return items;
          }
    };
    obj = { no: 5, name: "verified_at", kind: "message", T: null };
    class T {
      constructor() {
        return require("now").Timestamp;
      }
    }
    obj[3] = T;
    items[4] = obj;
    items[5] = {
      no: 6,
      name: "estimated_age_group",
      kind: "enum",
      T() {
            const items = ["discord_protos.users.v1.AgeAssuranceGroup", closure_9];
            return items;
          }
    };
    items[6] = { no: 7, name: "is_regional_adult", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.users.v1.AgeAssuranceData", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype18 = AgeAssuranceData$Type.prototype;
prototype18["create"] = function create(arr) {
  let obj = { method: 0, methodVersion: 0, vendor: 0, estimatedAgeGroup: 0, isRegionalAdult: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype18["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let Timestamp2 = now.Timestamp;
        let tmp29 = Timestamp2;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.estimatedDateOfBirth = Timestamp2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.estimatedDateOfBirth);
      } else if (2 === tmp5) {
        obj.method = pos.int32();
      } else if (3 === tmp5) {
        obj.methodVersion = pos.int32();
      } else if (4 === tmp5) {
        obj.vendor = pos.int32();
      } else if (5 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let Timestamp = now.Timestamp;
        let tmp24 = Timestamp;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.verifiedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.verifiedAt);
      } else if (6 === tmp5) {
        obj.estimatedAgeGroup = pos.int32();
      } else if (7 === tmp5) {
        obj.isRegionalAdult = pos.bool();
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let tmp15 = globalThis;
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          let str = ") for ";
          let str2 = " (wire type ";
          let str3 = "Unknown field ";
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype18["internalBinaryWrite"] = function internalBinaryWrite(estimatedDateOfBirth, tag, writeUnknownFields) {
  if (estimatedDateOfBirth.estimatedDateOfBirth) {
    const Timestamp = now.Timestamp;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(estimatedDateOfBirth.estimatedDateOfBirth, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(estimatedDateOfBirth.estimatedDateOfBirth, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (0 !== estimatedDateOfBirth.method) {
    tag.tag(2, 01307__.WireType.Varint).int32(estimatedDateOfBirth.method);
    const tagResult1 = tag.tag(2, 01307__.WireType.Varint);
  }
  if (0 !== estimatedDateOfBirth.methodVersion) {
    tag.tag(3, 01307__.WireType.Varint).int32(estimatedDateOfBirth.methodVersion);
    const tagResult2 = tag.tag(3, 01307__.WireType.Varint);
  }
  if (0 !== estimatedDateOfBirth.vendor) {
    tag.tag(4, 01307__.WireType.Varint).int32(estimatedDateOfBirth.vendor);
    const tagResult3 = tag.tag(4, 01307__.WireType.Varint);
  }
  if (estimatedDateOfBirth.verifiedAt) {
    const Timestamp2 = now.Timestamp;
    const tagResult4 = tag.tag(5, 01307__.WireType.LengthDelimited);
    const joined1 = Timestamp2.internalBinaryWrite(estimatedDateOfBirth.verifiedAt, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = Timestamp2.internalBinaryWrite(estimatedDateOfBirth.verifiedAt, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (0 !== estimatedDateOfBirth.estimatedAgeGroup) {
    tag.tag(6, 01307__.WireType.Varint).int32(estimatedDateOfBirth.estimatedAgeGroup);
    const tagResult5 = tag.tag(6, 01307__.WireType.Varint);
  }
  if (false !== estimatedDateOfBirth.isRegionalAdult) {
    tag.tag(7, 01307__.WireType.Varint).bool(estimatedDateOfBirth.isRegionalAdult);
    const tagResult6 = tag.tag(7, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, estimatedDateOfBirth, tag);
  }
  return tag;
};
const items16 = [
  {
    no: 1,
    name: "estimated_date_of_birth",
    kind: "message",
    T() {
      return callback(table[4]).Timestamp;
    }
  },
  {
    no: 2,
    name: "method",
    kind: "enum",
    T() {
      const items = ["discord_protos.users.v1.AgeAssuranceMethod", closure_7, "AGE_ASSURANCE_METHOD_"];
      return items;
    }
  },
  { no: 3, name: "method_version", kind: "scalar", T: 5 },
  {
    no: 4,
    name: "vendor",
    kind: "enum",
    T() {
      const items = ["discord_protos.users.v1.AgeAssuranceVendor", closure_8, "AGE_ASSURANCE_VENDOR_"];
      return items;
    }
  },
  {
    no: 5,
    name: "verified_at",
    kind: "message",
    T() {
      return now.Timestamp;
    }
  },
  {
    no: 6,
    name: "estimated_age_group",
    kind: "enum",
    T() {
      const items = ["discord_protos.users.v1.AgeAssuranceGroup", closure_9];
      return items;
    }
  },
  { no: 7, name: "is_regional_adult", kind: "scalar", T: 8 }
];
let tmp26 = new "binaryReadMap3"("discord_protos.users.v1.AgeAssuranceData", items16, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap2", undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6, obj7);
// ThrowIfThisInitialized (0x7c)
let closure_30 = tmp26;
class LinkedUser$Type extends MessageType19 {
  constructor() {
    items = [, , , , , ];
    items[0] = { no: 1, name: "user_id", kind: "scalar", T: 6 };
    items[1] = {
      no: 2,
      name: "link_type",
      kind: "enum",
      T() {
            const items = ["discord_protos.users.v1.UserLinkType", closure_10];
            return items;
          }
    };
    items[2] = {
      no: 3,
      name: "link_status",
      kind: "enum",
      T() {
            const items = ["discord_protos.users.v1.UserLinkStatus", closure_11];
            return items;
          }
    };
    items[3] = { no: 4, name: "requestor_id", kind: "scalar", T: 6 };
    obj = { no: 5, name: "created_at", kind: "message", T: null };
    class T {
      constructor() {
        return require("now").Timestamp;
      }
    }
    obj[3] = T;
    items[4] = obj;
    items[5] = {
      no: 6,
      name: "updated_at",
      kind: "message",
      T() {
            return callback(table[4]).Timestamp;
          }
    };
    tmp = new tmp("discord_protos.users.v1.LinkedUser", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype19 = LinkedUser$Type.prototype;
prototype19["create"] = function create(arr) {
  let obj = { userId: "0", linkType: 0, linkStatus: 0, requestorId: "0" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype19["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
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
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let Timestamp2 = now.Timestamp;
        let tmp29 = Timestamp2;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.createdAt = Timestamp2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.createdAt);
      } else if (6 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let Timestamp = now.Timestamp;
        let tmp24 = Timestamp;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype19["internalBinaryWrite"] = function internalBinaryWrite(userId, tag, writeUnknownFields) {
  if ("0" !== userId.userId) {
    tag.tag(1, 01307__.WireType.Bit64).fixed64(userId.userId);
    const tagResult = tag.tag(1, 01307__.WireType.Bit64);
  }
  if (0 !== userId.linkType) {
    tag.tag(2, 01307__.WireType.Varint).int32(userId.linkType);
    const tagResult1 = tag.tag(2, 01307__.WireType.Varint);
  }
  if (0 !== userId.linkStatus) {
    tag.tag(3, 01307__.WireType.Varint).int32(userId.linkStatus);
    const tagResult2 = tag.tag(3, 01307__.WireType.Varint);
  }
  if ("0" !== userId.requestorId) {
    tag.tag(4, 01307__.WireType.Bit64).fixed64(userId.requestorId);
    const tagResult3 = tag.tag(4, 01307__.WireType.Bit64);
  }
  if (userId.createdAt) {
    const Timestamp = now.Timestamp;
    const tagResult4 = tag.tag(5, 01307__.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(userId.createdAt, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(userId.createdAt, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (userId.updatedAt) {
    const Timestamp2 = now.Timestamp;
    const tagResult5 = tag.tag(6, 01307__.WireType.LengthDelimited);
    const joined1 = Timestamp2.internalBinaryWrite(userId.updatedAt, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = Timestamp2.internalBinaryWrite(userId.updatedAt, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, userId, tag);
  }
  return tag;
};
const items17 = [
  { no: 1, name: "user_id", kind: "scalar", T: 6 },
  {
    no: 2,
    name: "link_type",
    kind: "enum",
    T() {
      const items = ["discord_protos.users.v1.UserLinkType", closure_10];
      return items;
    }
  },
  {
    no: 3,
    name: "link_status",
    kind: "enum",
    T() {
      const items = ["discord_protos.users.v1.UserLinkStatus", closure_11];
      return items;
    }
  },
  { no: 4, name: "requestor_id", kind: "scalar", T: 6 },
  {
    no: 5,
    name: "created_at",
    kind: "message",
    T() {
      return now.Timestamp;
    }
  },
  {
    no: 6,
    name: "updated_at",
    kind: "message",
    T() {
      return callback(table[4]).Timestamp;
    }
  }
];
let tmp27 = new "binaryReadMap3"("discord_protos.users.v1.LinkedUser", items17, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap2", undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6, obj7);
// ThrowIfThisInitialized (0x7c)
let closure_31 = tmp27;
class RateLimitData$Type extends MessageType20 {
  constructor() {
    obj = {
      no: 1,
      name: "limit_expiry",
      kind: "message",
      T() {
            return callback(table[4]).Timestamp;
          }
    };
    items = [];
    items[0] = obj;
    tmp = new tmp("discord_protos.users.v1.RateLimitData", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype20 = RateLimitData$Type.prototype;
prototype20["create"] = function create(arr) {
  let obj = {};
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype20["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let Timestamp = now.Timestamp;
        let tmp24 = Timestamp;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype20["internalBinaryWrite"] = function internalBinaryWrite(limitExpiry, tag, writeUnknownFields) {
  if (limitExpiry.limitExpiry) {
    const Timestamp = now.Timestamp;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(limitExpiry.limitExpiry, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(limitExpiry.limitExpiry, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, limitExpiry, tag);
  }
  return tag;
};
let items18 = [
  {
    no: 1,
    name: "limit_expiry",
    kind: "message",
    T() {
      return callback(table[4]).Timestamp;
    }
  }
];
let tmp28 = new "binaryReadMap3"("discord_protos.users.v1.RateLimitData", items18, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap2", undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6, obj7);
// ThrowIfThisInitialized (0x7c)
let closure_32 = tmp28;
class FeatureLimits$Type extends MessageType21 {
  constructor() {
    obj = {
      kind: "message",
      T() {
            return closure_32;
          }
    };
    items = [];
    items[0] = { no: 1, name: "map", kind: "map", K: 13, V: obj };
    tmp = new tmp("discord_protos.users.v1.FeatureLimits", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype21 = FeatureLimits$Type.prototype;
prototype21["create"] = function create(arr) {
  let obj = { map: {} };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype21["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp4;
  let tmp5;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp2 = callback;
      let tmp3 = callback(pos.tag(), 2);
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
          let tmp15 = tmp4;
          let tmp16 = tmp5;
          let tmp17 = new.target;
          let tmp18 = new.target;
          let error = new Error("Unknown field " + tmp4 + " (wire type " + tmp5 + ") for " + self.typeName);
          let tmp20 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp5);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp7 = require;
              let tmp8 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp9 = obj;
            let tmp10 = tmp4;
            let tmp11 = tmp5;
            let tmp12 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp4, tmp5, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype21["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
  let tmp7;
  const sum = pos.pos + pos.uint32();
  let obj;
  let num;
  if (pos.pos < sum) {
    while (true) {
      let tmp5 = callback;
      let tmp6 = callback(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let tmp8 = tmp2;
      let uint32Result = tmp3;
      if (1 === tmp7) {
        uint32Result = pos.uint32();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        let tmp15 = tmp28;
        internalBinaryReadResult = tmp28.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = uint32Result;
      obj = internalBinaryReadResult;
      num = uint32Result;
    }
    const _globalThis = globalThis;
    const error = new Error("unknown map entry field for field discord_protos.users.v1.FeatureLimits.map");
    throw error;
  }
  if (num == null) {
    num = 0;
  }
  if (obj == null) {
    obj = tmp28.create();
  }
  arg0[num] = obj;
};
prototype21["internalBinaryWrite"] = function internalBinaryWrite(arg0, tag, writeUnknownFields) {
  const keys = Object.keys(arg0.map);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, 01307__.WireType.Varint);
    let _parseInt = parseInt;
    let uint32Result = tagResult1.uint32(parseInt(nextResult));
    let tagResult2 = tag.tag(2, 01307__.WireType.LengthDelimited);
    let forkResult1 = tagResult2.fork();
    let tmp7 = tmp28;
    let internalBinaryWriteResult = tmp28.internalBinaryWrite(arg0.map[nextResult], tag, writeUnknownFields);
    let joined = tag.join();
    let joined1 = joined.join();
    continue;
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, arg0, tag);
  }
  return tag;
};
const items19 = [
  {
    no: 1,
    name: "map",
    kind: "map",
    K: 13,
    V: {
      kind: "message",
      T() {
        return closure_32;
      }
    }
  }
];
items18 = new items18("discord_protos.users.v1.FeatureLimits", items19, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap2", undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6);
// ThrowIfThisInitialized (0x7c)
class SafetyFlag$Type extends MessageType22 {
  constructor() {
    obj = {
      no: 1,
      name: "flag_expiry",
      kind: "message",
      T() {
            return callback(table[4]).Timestamp;
          }
    };
    items = [];
    items[0] = obj;
    tmp = new tmp("discord_protos.users.v1.SafetyFlag", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype22 = SafetyFlag$Type.prototype;
prototype22["create"] = function create(arr) {
  let obj = {};
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype22["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let Timestamp = now.Timestamp;
        let tmp24 = Timestamp;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype22["internalBinaryWrite"] = function internalBinaryWrite(flagExpiry, tag, writeUnknownFields) {
  if (flagExpiry.flagExpiry) {
    const Timestamp = now.Timestamp;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(flagExpiry.flagExpiry, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(flagExpiry.flagExpiry, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, flagExpiry, tag);
  }
  return tag;
};
let items20 = [
  {
    no: 1,
    name: "flag_expiry",
    kind: "message",
    T() {
      return callback(table[4]).Timestamp;
    }
  }
];
const items181 = new items18("discord_protos.users.v1.SafetyFlag", items20, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap2", undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6);
// ThrowIfThisInitialized (0x7c)
class GuildShardingConfig$Type extends MessageType23 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "shards", kind: "scalar", repeat: 1, T: 5 };
    tmp = new tmp("discord_protos.users.v1.GuildShardingConfig", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype23 = GuildShardingConfig$Type.prototype;
prototype23["create"] = function create(arr) {
  let obj = { shards: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype23["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        if (tmp6 === 01307__.WireType.LengthDelimited) {
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
          arr = shards1.push(pos.int32());
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype23["internalBinaryWrite"] = function internalBinaryWrite(shards, tag, writeUnknownFields) {
  let length;
  if (shards.shards.length) {
    tag.tag(1, 01307__.WireType.LengthDelimited).fork();
    let num2 = 0;
    if (0 < shards.shards.length) {
      do {
        let int32Result = tag.int32(shards.shards[num2]);
        num2 = num2 + 1;
        length = shards.shards.length;
      } while (num2 < length);
    }
    const joined = tag.join();
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, shards, tag);
  }
  return tag;
};
const items21 = [{ no: 1, name: "shards", kind: "scalar", repeat: 1, T: 5 }];
items20 = new items20("discord_protos.users.v1.GuildShardingConfig", items21, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap2", undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5);
// ThrowIfThisInitialized (0x7c)
class QuestMetadata$Type extends MessageType24 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "quests_completed", kind: "scalar", T: 13 };
    tmp = new tmp("discord_protos.users.v1.QuestMetadata", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype24 = QuestMetadata$Type.prototype;
prototype24["create"] = function create(arr) {
  let obj = { questsCompleted: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype24["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype24["internalBinaryWrite"] = function internalBinaryWrite(questsCompleted, tag, writeUnknownFields) {
  if (0 !== questsCompleted.questsCompleted) {
    tag.tag(1, 01307__.WireType.Varint).uint32(questsCompleted.questsCompleted);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, questsCompleted, tag);
  }
  return tag;
};
const items22 = [{ no: 1, name: "quests_completed", kind: "scalar", T: 13 }];
const guildShardingConfigType = new GuildShardingConfig$Type("discord_protos.users.v1.QuestMetadata", items22, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap2", undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6);
// ThrowIfThisInitialized (0x7c)
class PremiumState$Type extends MessageType25 {
  constructor() {
    obj = {
      no: 1,
      name: "premium_source",
      kind: "enum",
      T() {
            const items = ["discord_protos.users.v1.PremiumSource", closure_12, "PREMIUM_SOURCE_"];
            return items;
          }
    };
    items = [, , ];
    items[0] = obj;
    obj = { no: 2, name: "premium_subscription_type", kind: "enum", T: null };
    class T {
      constructor() {
        items = ["discord_protos.users.v1.PremiumSubscriptionType"];
        items[1] = closure_13;
        items[2] = "PREMIUM_SUBSCRIPTION_TYPE_";
        return items;
      }
    }
    obj[3] = T;
    items[1] = obj;
    items[2] = {
      no: 3,
      name: "premium_subscription_group_role",
      kind: "enum",
      T() {
            const items = ["discord_protos.users.v1.PremiumSubscriptionGroupRole", closure_14, "PREMIUM_SUBSCRIPTION_GROUP_ROLE_"];
            return items;
          }
    };
    tmp = new tmp("discord_protos.users.v1.PremiumState", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype25 = PremiumState$Type.prototype;
prototype25["create"] = function create(arr) {
  let obj = { premiumSource: 0, premiumSubscriptionType: 0, premiumSubscriptionGroupRole: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype25["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype25["internalBinaryWrite"] = function internalBinaryWrite(premiumSource, tag, writeUnknownFields) {
  if (0 !== premiumSource.premiumSource) {
    tag.tag(1, 01307__.WireType.Varint).int32(premiumSource.premiumSource);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  if (0 !== premiumSource.premiumSubscriptionType) {
    tag.tag(2, 01307__.WireType.Varint).int32(premiumSource.premiumSubscriptionType);
    const tagResult1 = tag.tag(2, 01307__.WireType.Varint);
  }
  if (0 !== premiumSource.premiumSubscriptionGroupRole) {
    tag.tag(3, 01307__.WireType.Varint).int32(premiumSource.premiumSubscriptionGroupRole);
    const tagResult2 = tag.tag(3, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, premiumSource, tag);
  }
  return tag;
};
const items23 = [
  {
    no: 1,
    name: "premium_source",
    kind: "enum",
    T() {
      const items = ["discord_protos.users.v1.PremiumSource", closure_12, "PREMIUM_SOURCE_"];
      return items;
    }
  },
  {
    no: 2,
    name: "premium_subscription_type",
    kind: "enum",
    T() {
      const items = ["discord_protos.users.v1.PremiumSubscriptionType", obj13, "PREMIUM_SUBSCRIPTION_TYPE_"];
      return items;
    }
  },
  {
    no: 3,
    name: "premium_subscription_group_role",
    kind: "enum",
    T() {
      const items = ["discord_protos.users.v1.PremiumSubscriptionGroupRole", closure_14, "PREMIUM_SUBSCRIPTION_GROUP_ROLE_"];
      return items;
    }
  }
];
const guildShardingConfigType1 = new GuildShardingConfig$Type("discord_protos.users.v1.PremiumState", items23, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap2", undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6);
// ThrowIfThisInitialized (0x7c)
class StoreCountry$Type extends MessageType26 {
  constructor() {
    items = [, ];
    items[0] = { no: 1, name: "country", kind: "scalar", T: 9 };
    items[1] = {
      no: 2,
      name: "set_at",
      kind: "message",
      T() {
            return callback(table[4]).Timestamp;
          }
    };
    tmp = new tmp("discord_protos.users.v1.StoreCountry", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype26 = StoreCountry$Type.prototype;
prototype26["create"] = function create(arr) {
  let obj = { country: "" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype26["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        obj.country = pos.string();
      } else if (2 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let Timestamp = now.Timestamp;
        let tmp24 = Timestamp;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype26["internalBinaryWrite"] = function internalBinaryWrite(country, tag, writeUnknownFields) {
  if ("" !== country.country) {
    tag.tag(1, 01307__.WireType.LengthDelimited).string(country.country);
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
  }
  if (country.setAt) {
    const Timestamp = now.Timestamp;
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(country.setAt, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(country.setAt, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, country, tag);
  }
  return tag;
};
const items24 = [
  { no: 1, name: "country", kind: "scalar", T: 9 },
  {
    no: 2,
    name: "set_at",
    kind: "message",
    T() {
      return callback(table[4]).Timestamp;
    }
  }
];
const guildShardingConfigType2 = new GuildShardingConfig$Type("discord_protos.users.v1.StoreCountry", items24, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap2", undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6);
// ThrowIfThisInitialized (0x7c)
class PerkConfig$Type extends MessageType27 {
  constructor() {
    obj = {
      no: 1,
      name: "source",
      kind: "enum",
      repeat: 1,
      T() {
            const items = ["discord_protos.users.v1.PerkSource", closure_15];
            return items;
          }
    };
    items = [, , ];
    items[0] = obj;
    obj = { no: 2, name: "increased_file_upload_size", kind: "message", oneof: "kind", T: null };
    class T {
      constructor() {
        return closure_39;
      }
    }
    obj[4] = T;
    items[1] = obj;
    items[2] = {
      no: 3,
      name: "increased_guild_limit",
      kind: "message",
      oneof: "kind",
      T() {
            return closure_40;
          }
    };
    tmp = new tmp("discord_protos.users.v1.PerkConfig", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype27 = PerkConfig$Type.prototype;
prototype27["create"] = function create(arr) {
  let obj = { source: [], kind: { oneofKind: "r" } };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype27["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let tmp30 = require;
        let tmp31 = dependencyMap;
        if (tmp6 === 01307__.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let source = obj.source;
              let arr = source.push(pos.int32());
              pos = pos.pos;
            } while (pos < sum1);
          }
        } else {
          let source1 = obj.source;
          arr = source1.push(pos.int32());
        }
      } else if (2 === tmp5) {
        obj = { oneofKind: "increasedFileUploadSize", increasedFileUploadSize: null };
        let tmp26 = guildShardingConfigType4;
        let tmp27 = guildShardingConfigType4;
        let tmp28 = pos;
        let tmp29 = readUnknownField;
        obj[1] = guildShardingConfigType4.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.kind.increasedFileUploadSize);
        obj.kind = obj;
      } else if (3 === tmp5) {
        obj = { oneofKind: "increasedGuildLimit", increasedGuildLimit: null };
        let tmp22 = perkConfigIncreasedFileUploadSizeType;
        let tmp23 = perkConfigIncreasedFileUploadSizeType;
        let tmp24 = pos;
        let tmp25 = readUnknownField;
        obj[1] = perkConfigIncreasedFileUploadSizeType.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.kind.increasedGuildLimit);
        obj.kind = obj;
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let tmp15 = globalThis;
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          let str = ") for ";
          let str2 = " (wire type ";
          let str3 = "Unknown field ";
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype27["internalBinaryWrite"] = function internalBinaryWrite(source, tag, writeUnknownFields) {
  let length;
  if (source.source.length) {
    tag.tag(1, 01307__.WireType.LengthDelimited).fork();
    let num2 = 0;
    if (0 < source.source.length) {
      do {
        let int32Result = tag.int32(source.source[num2]);
        num2 = num2 + 1;
        length = source.source.length;
      } while (num2 < length);
    }
    const joined = tag.join();
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
  }
  if ("increasedFileUploadSize" === source.kind.oneofKind) {
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined1 = guildShardingConfigType4.internalBinaryWrite(source.kind.increasedFileUploadSize, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = guildShardingConfigType4.internalBinaryWrite(source.kind.increasedFileUploadSize, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("increasedGuildLimit" === source.kind.oneofKind) {
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined2 = perkConfigIncreasedFileUploadSizeType.internalBinaryWrite(source.kind.increasedGuildLimit, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = perkConfigIncreasedFileUploadSizeType.internalBinaryWrite(source.kind.increasedGuildLimit, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, source, tag);
  }
  return tag;
};
const items25 = [
  {
    no: 1,
    name: "source",
    kind: "enum",
    repeat: 1,
    T() {
      const items = ["discord_protos.users.v1.PerkSource", closure_15];
      return items;
    }
  },
  {
    no: 2,
    name: "increased_file_upload_size",
    kind: "message",
    oneof: "kind",
    T() {
      return guildShardingConfigType4;
    }
  },
  {
    no: 3,
    name: "increased_guild_limit",
    kind: "message",
    oneof: "kind",
    T() {
      return closure_40;
    }
  }
];
const guildShardingConfigType3 = new GuildShardingConfig$Type("discord_protos.users.v1.PerkConfig", items25, tmp7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap2", undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6);
// ThrowIfThisInitialized (0x7c)
class PerkConfigIncreasedFileUploadSize$Type extends MessageType28 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "max_size", kind: "scalar", T: 4 };
    tmp = new tmp("discord_protos.users.v1.PerkConfigIncreasedFileUploadSize", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype28 = PerkConfigIncreasedFileUploadSize$Type.prototype;
prototype28["create"] = function create(arr) {
  let obj = { maxSize: "0" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype28["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype28["internalBinaryWrite"] = function internalBinaryWrite(maxSize, tag, writeUnknownFields) {
  if ("0" !== maxSize.maxSize) {
    tag.tag(1, 01307__.WireType.Varint).uint64(maxSize.maxSize);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, maxSize, tag);
  }
  return tag;
};
const items26 = [];
const obj33 = { no: 1, name: "max_size", kind: "scalar", T: 4 };
items26[0] = obj33;
const guildShardingConfigType4 = new GuildShardingConfig$Type("discord_protos.users.v1.PerkConfigIncreasedFileUploadSize", items26, tmp7, tmp6, tmp5, "create", PerkConfigIncreasedFileUploadSize$Type, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap2", undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15, obj16, tmp9, new.target, items, new.target, items1, mediumUserType, mediumUserType1, mediumUserType2, mediumUserType3, mediumUserType4, mediumUserType5, mediumUserType6, mediumUserType7, mediumUserType8, mediumUserType9, mediumUserType10, mediumUserType11, mediumUserType12, userDataType, tmp26, tmp27, tmp28, items18, items181, new.target, items20, guildShardingConfigType, guildShardingConfigType1, guildShardingConfigType2, guildShardingConfigType3, GuildShardingConfig$Type, items26, new.target, exports, obj33, undefined, 3, 2, 1, 0, 15, 14, 13, 12, 11, 10);
// ThrowIfThisInitialized (0x7c)
class PerkConfigIncreasedGuildLimit$Type extends MessageType29 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "max_guilds", kind: "scalar", T: 13 };
    tmp = new tmp("discord_protos.users.v1.PerkConfigIncreasedGuildLimit", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype29 = PerkConfigIncreasedGuildLimit$Type.prototype;
prototype29["create"] = function create(arr) {
  let obj = { maxGuilds: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype29["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype29["internalBinaryWrite"] = function internalBinaryWrite(maxGuilds, tag, writeUnknownFields) {
  if (0 !== maxGuilds.maxGuilds) {
    tag.tag(1, 01307__.WireType.Varint).uint32(maxGuilds.maxGuilds);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, maxGuilds, tag);
  }
  return tag;
};
const items27 = [];
const obj34 = { no: 1, name: "max_guilds", kind: "scalar", T: 13 };
items27[0] = obj34;
const perkConfigIncreasedFileUploadSizeType = new PerkConfigIncreasedFileUploadSize$Type("discord_protos.users.v1.PerkConfigIncreasedGuildLimit", items27, tmp7, tmp6, PerkConfigIncreasedGuildLimit$Type, "create", PerkConfigIncreasedFileUploadSize$Type, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap2", undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15, obj16, tmp9, new.target, items, new.target, items1, mediumUserType, mediumUserType1, mediumUserType2, mediumUserType3, mediumUserType4, mediumUserType5, mediumUserType6, mediumUserType7, mediumUserType8, mediumUserType9, mediumUserType10, mediumUserType11, mediumUserType12, userDataType, tmp26, tmp27, tmp28, items18, items181, new.target, items20, guildShardingConfigType, guildShardingConfigType1, guildShardingConfigType2, guildShardingConfigType3, guildShardingConfigType4, items27, new.target, exports, obj34, undefined, 3, 2, 1, 0, 15, 14, 13, 12, 11, 10, 9, 8);
// ThrowIfThisInitialized (0x7c)
class Perks$Type extends MessageType30 {
  constructor() {
    items = [, , , ];
    items[0] = { no: 1, name: "active_perks_bitmask", kind: "scalar", repeat: 1, T: 4 };
    obj = { no: 2, name: "config_by_perk", kind: "map", K: 13, V: null };
    obj = { kind: "message", T: null };
    class T {
      constructor() {
        return closure_38;
      }
    }
    obj[1] = T;
    obj[4] = obj;
    items[1] = obj;
    items[2] = { no: 3, name: "rules_version", kind: "scalar", T: 13 };
    items[3] = {
      no: 4,
      name: "updated_at",
      kind: "message",
      T() {
            return callback(table[4]).Timestamp;
          }
    };
    tmp = new tmp("discord_protos.users.v1.Perks", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype30 = Perks$Type.prototype;
prototype30["create"] = function create(arr) {
  let obj = { activePerksBitmask: [], configByPerk: {}, rulesVersion: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype30["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let tmp28 = require;
        let tmp29 = dependencyMap;
        if (tmp6 === 01307__.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let activePerksBitmask = obj.activePerksBitmask;
              let str5 = pos.uint64();
              let arr = activePerksBitmask.push(str5.toString());
              pos = pos.pos;
            } while (pos < sum1);
          }
        } else {
          let activePerksBitmask1 = obj.activePerksBitmask;
          let str4 = pos.uint64();
          arr = activePerksBitmask1.push(str4.toString());
        }
      } else if (2 === tmp5) {
        let binaryReadMap2Result = self.binaryReadMap2(obj.configByPerk, pos, readUnknownField);
      } else if (3 === tmp5) {
        obj.rulesVersion = pos.uint32();
      } else if (4 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let Timestamp = now.Timestamp;
        let tmp24 = Timestamp;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype30["binaryReadMap2"] = function binaryReadMap2(arg0, pos) {
  let tmp7;
  const sum = pos.pos + pos.uint32();
  let obj;
  let num;
  if (pos.pos < sum) {
    while (true) {
      let tmp5 = callback;
      let tmp6 = callback(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let tmp8 = tmp2;
      let uint32Result = tmp3;
      if (1 === tmp7) {
        uint32Result = pos.uint32();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        let tmp15 = guildShardingConfigType3;
        internalBinaryReadResult = guildShardingConfigType3.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = uint32Result;
      obj = internalBinaryReadResult;
      num = uint32Result;
    }
    const _globalThis = globalThis;
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
};
prototype30["internalBinaryWrite"] = function internalBinaryWrite(activePerksBitmask, tag, writeUnknownFields) {
  let length;
  if (activePerksBitmask.activePerksBitmask.length) {
    tag.tag(1, 01307__.WireType.LengthDelimited).fork();
    let num2 = 0;
    if (0 < activePerksBitmask.activePerksBitmask.length) {
      do {
        let uint64Result = tag.uint64(activePerksBitmask.activePerksBitmask[num2]);
        num2 = num2 + 1;
        length = activePerksBitmask.activePerksBitmask.length;
      } while (num2 < length);
    }
    const joined = tag.join();
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
  }
  const keys = Object.keys(activePerksBitmask.configByPerk);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp8 = require;
    let tmp9 = dependencyMap;
    let tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    let forkResult1 = tagResult1.fork();
    let tagResult2 = forkResult1.tag(1, 01307__.WireType.Varint);
    let _parseInt = parseInt;
    let uint32Result = tagResult2.uint32(parseInt(nextResult));
    let tagResult3 = tag.tag(2, 01307__.WireType.LengthDelimited);
    let forkResult2 = tagResult3.fork();
    let tmp12 = guildShardingConfigType3;
    let internalBinaryWriteResult = guildShardingConfigType3.internalBinaryWrite(activePerksBitmask.configByPerk[nextResult], tag, writeUnknownFields);
    let joined1 = tag.join();
    let joined2 = joined1.join();
    continue;
  }
  if (0 !== activePerksBitmask.rulesVersion) {
    tag.tag(3, 01307__.WireType.Varint).uint32(activePerksBitmask.rulesVersion);
    const tagResult4 = tag.tag(3, 01307__.WireType.Varint);
  }
  if (activePerksBitmask.updatedAt) {
    const Timestamp = now.Timestamp;
    const tagResult5 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined3 = Timestamp.internalBinaryWrite(activePerksBitmask.updatedAt, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = Timestamp.internalBinaryWrite(activePerksBitmask.updatedAt, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, activePerksBitmask, tag);
  }
  return tag;
};
const items28 = [{ no: 1, name: "active_perks_bitmask", kind: "scalar", repeat: 1, T: 4 }, , , ];
const obj35 = { no: 2, name: "config_by_perk", kind: "map", K: 13, V: null };
const obj36 = { kind: "message", T: null };
class T {
  constructor() {
    return closure_38;
  }
}
obj36[1] = T;
obj35[4] = obj36;
items28[1] = obj35;
items28[2] = { no: 3, name: "rules_version", kind: "scalar", T: 13 };
const obj37 = {
  no: 4,
  name: "updated_at",
  kind: "message",
  T() {
    return callback(table[4]).Timestamp;
  }
};
items28[3] = obj37;
const perkConfigIncreasedFileUploadSizeType1 = new PerkConfigIncreasedFileUploadSize$Type("discord_protos.users.v1.Perks", items28, tmp7, T, Perks$Type, "create", PerkConfigIncreasedFileUploadSize$Type, "internalBinaryRead", "internalBinaryWrite", items28, undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15, obj16, tmp9, new.target, items, new.target, items1, mediumUserType, mediumUserType1, mediumUserType2, mediumUserType3, mediumUserType4, mediumUserType5, mediumUserType6, mediumUserType7, mediumUserType8, mediumUserType9, mediumUserType10, mediumUserType11, mediumUserType12, userDataType, tmp26, tmp27, tmp28, items18, items181, new.target, items20, guildShardingConfigType, guildShardingConfigType1, guildShardingConfigType2, guildShardingConfigType3, guildShardingConfigType4, perkConfigIncreasedFileUploadSizeType, new.target, exports, obj37, undefined, 3, 2, 1, 0, 15, 14, 13, 12, 11, 10, 9, 8);
// ThrowIfThisInitialized (0x7c)
class UserCountryData$Type extends MessageType31 {
  constructor() {
    items = [, , , , ];
    items[0] = { no: 1, name: "calculated_country", kind: "scalar", T: 9 };
    items[1] = {
      no: 2,
      name: "last_calculated_at",
      kind: "message",
      T() {
            return callback(1336).Timestamp;
          }
    };
    obj = { no: 3, name: "country_override", kind: "message", T: null };
    class T {
      constructor() {
        return require("defineProperty").StringValue;
      }
    }
    obj[3] = T;
    items[2] = obj;
    items[3] = {
      no: 4,
      name: "override_set_at",
      kind: "message",
      T() {
            return callback(1336).Timestamp;
          }
    };
    items[4] = { no: 5, name: "country_scores", kind: "map", K: 9, V: { kind: "scalar", T: 2 } };
    tmp = new tmp("discord_protos.users.v1.UserCountryData", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype31 = UserCountryData$Type.prototype;
prototype31["create"] = function create(arr) {
  let obj = { calculatedCountry: "", countryScores: {} };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype31["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  let tmp5;
  let tmp6;
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        obj.calculatedCountry = pos.string();
      } else if (2 === tmp5) {
        let tmp33 = require;
        let tmp34 = dependencyMap;
        let Timestamp2 = now.Timestamp;
        let tmp35 = Timestamp2;
        let tmp36 = pos;
        let tmp37 = readUnknownField;
        obj.lastCalculatedAt = Timestamp2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.lastCalculatedAt);
      } else if (3 === tmp5) {
        let tmp28 = require;
        let tmp29 = dependencyMap;
        let StringValue = defineProperty.StringValue;
        let tmp30 = StringValue;
        let tmp31 = pos;
        let tmp32 = readUnknownField;
        obj.countryOverride = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.countryOverride);
      } else if (4 === tmp5) {
        let tmp23 = require;
        let tmp24 = dependencyMap;
        let Timestamp = now.Timestamp;
        let tmp25 = Timestamp;
        let tmp26 = pos;
        let tmp27 = readUnknownField;
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype31["binaryReadMap5"] = function binaryReadMap5(countryScores, pos, readUnknownField) {
  let tmp6;
  const sum = pos.pos + pos.uint32();
  let num;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp4 = callback;
      let tmp5 = callback(pos.tag(), 2);
      [tmp6, r10019] = tmp5;
      let tmp7 = tmp2;
      let stringResult = tmp3;
      if (1 === tmp6) {
        stringResult = pos.string();
        let floatResult = tmp2;
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
    const error = new Error("unknown map entry field for field discord_protos.users.v1.UserCountryData.country_scores");
    throw error;
  }
  if (str == null) {
    str = "";
  }
  if (num == null) {
    num = 0;
  }
  countryScores[str] = num;
};
prototype31["internalBinaryWrite"] = function internalBinaryWrite(calculatedCountry, tag, writeUnknownFields) {
  if ("" !== calculatedCountry.calculatedCountry) {
    tag.tag(1, 01307__.WireType.LengthDelimited).string(calculatedCountry.calculatedCountry);
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
  }
  if (calculatedCountry.lastCalculatedAt) {
    const Timestamp = now.Timestamp;
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(calculatedCountry.lastCalculatedAt, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(calculatedCountry.lastCalculatedAt, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (calculatedCountry.countryOverride) {
    const StringValue = defineProperty.StringValue;
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined1 = StringValue.internalBinaryWrite(calculatedCountry.countryOverride, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = StringValue.internalBinaryWrite(calculatedCountry.countryOverride, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (calculatedCountry.overrideSetAt) {
    const Timestamp2 = now.Timestamp;
    const tagResult3 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined2 = Timestamp2.internalBinaryWrite(calculatedCountry.overrideSetAt, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = Timestamp2.internalBinaryWrite(calculatedCountry.overrideSetAt, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  const keys = Object.keys(calculatedCountry.countryScores);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp15 = require;
    let tmp16 = dependencyMap;
    let tagResult4 = tag.tag(5, 01307__.WireType.LengthDelimited);
    let forkResult = tagResult4.fork();
    let tagResult5 = forkResult.tag(1, 01307__.WireType.LengthDelimited);
    let stringResult1 = tagResult5.string(nextResult);
    let tagResult6 = stringResult1.tag(2, 01307__.WireType.Bit32);
    let floatResult = tagResult6.float(calculatedCountry.countryScores[nextResult]);
    let joined3 = floatResult.join();
    continue;
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, calculatedCountry, tag);
  }
  return tag;
};
const items29 = [
  { no: 1, name: "calculated_country", kind: "scalar", T: 9 },
  {
    no: 2,
    name: "last_calculated_at",
    kind: "message",
    T() {
      return callback(1336).Timestamp;
    }
  },
  {
    no: 3,
    name: "country_override",
    kind: "message",
    T() {
      return defineProperty.StringValue;
    }
  },
  {
    no: 4,
    name: "override_set_at",
    kind: "message",
    T() {
      return callback(1336).Timestamp;
    }
  },

];
const obj38 = { no: 5, name: "country_scores", kind: "map", K: 9, V: { kind: "scalar", T: 2 } };
items29[4] = obj38;
let tmp39 = new "binaryReadMap5"("discord_protos.users.v1.UserCountryData", items29, tmp7, T, Perks$Type, "create", UserCountryData$Type, "binaryReadMap5", items29, new.target, undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15, obj16, tmp9, new.target, items, new.target, items1, mediumUserType, mediumUserType1, mediumUserType2, mediumUserType3, mediumUserType4, mediumUserType5, mediumUserType6, mediumUserType7, mediumUserType8, mediumUserType9, mediumUserType10, mediumUserType11, mediumUserType12, userDataType, tmp26, tmp27, tmp28, items18, items181, new.target, items20, guildShardingConfigType, guildShardingConfigType1, guildShardingConfigType2, guildShardingConfigType3, guildShardingConfigType4, perkConfigIncreasedFileUploadSizeType, perkConfigIncreasedFileUploadSizeType1, exports, obj38, undefined, 3, 2, 1, 0, 15, 14, 13, 12, 11, 10);
// ThrowIfThisInitialized (0x7c)
let closure_42 = tmp39;
let result = require("defineProperty").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx");

export const DayOfWeek = obj;
export const DisplayNameFont = obj;
export const DisplayNameEffect = obj;
export const BadgeType = obj1;
export const AnonymizationStatus = obj2;
export const AgeAssuranceTier = obj3;
export const AgeAssuranceMethod = obj4;
export const AgeAssuranceVendor = obj5;
export const AgeAssuranceGroup = obj6;
export const UserLinkType = obj7;
export const UserLinkStatus = obj8;
export const RateLimitTier = obj9;
export const FeatureLimitName = obj10;
export const SafetyFlagType = obj11;
export const PremiumSource = obj12;
export const PremiumSubscriptionType = obj13;
export const PremiumSubscriptionGroupRole = obj14;
export const Perk = obj15;
export const PerkSource = obj16;
export const TimeOfDay = tmp9;
export const User = items;
export const MediumUser = items1;
export const UserAvatarDecoration = mediumUserType;
export const UserNameplate = mediumUserType1;
export const DisplayNameStyles = mediumUserType2;
export const UserCollectibles = mediumUserType3;
export const UserPrimaryGuild = mediumUserType4;
export const ScheduleRule = mediumUserType5;
export const RestrictedSchedule = mediumUserType6;
export const CrossPlatformRestriction = mediumUserType7;
export const BadgeCommon = mediumUserType8;
export const AprilFools2026Badge = mediumUserType9;
export const Badge = mediumUserType10;
export const UserBadges = mediumUserType11;
export const AnonymizationInfo = mediumUserType12;
export const UserData = userDataType;
export const AgeAssuranceData = tmp26;
export const LinkedUser = tmp27;
export const RateLimitData = tmp28;
export const FeatureLimits = items18;
export const SafetyFlag = items181;
export const GuildShardingConfig = items20;
export const QuestMetadata = guildShardingConfigType;
export const PremiumState = guildShardingConfigType1;
export const StoreCountry = guildShardingConfigType2;
export const PerkConfig = guildShardingConfigType3;
export const PerkConfigIncreasedFileUploadSize = guildShardingConfigType4;
export const PerkConfigIncreasedGuildLimit = perkConfigIncreasedFileUploadSizeType;
export const Perks = perkConfigIncreasedFileUploadSizeType1;
export const UserCountryData = tmp39;