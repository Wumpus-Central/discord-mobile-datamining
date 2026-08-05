// discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx
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
import { MessageType as MessageType32 } from "module_1307";
import { MessageType as MessageType33 } from "module_1307";
import { MessageType as MessageType34 } from "module_1307";
import { MessageType as MessageType35 } from "module_1307";
import { MessageType as MessageType36 } from "module_1307";
import { MessageType as MessageType37 } from "module_1307";
import { MessageType as MessageType38 } from "module_1307";
import { MessageType as MessageType39 } from "module_1307";
import { MessageType as MessageType40 } from "module_1307";
import { MessageType as MessageType41 } from "module_1307";
import { MessageType as MessageType42 } from "module_1307";
import { MessageType as MessageType43 } from "module_1307";
import { MessageType as MessageType44 } from "module_1307";
import { MessageType as MessageType45 } from "module_1307";
import { MessageType as MessageType46 } from "module_1307";
import { MessageType as MessageType47 } from "module_1307";
import { MessageType as MessageType48 } from "module_1307";
import { MessageType as MessageType49 } from "module_1307";
import { MessageType as MessageType50 } from "module_1307";
import { MessageType as MessageType51 } from "module_1307";
import { MessageType as MessageType52 } from "module_1307";
import { MessageType as MessageType53 } from "module_1307";
import { MessageType as MessageType54 } from "module_1307";
import { 01307__ } from "../../../../../../../_runtime/metro/01307__.js";
import { now } from "../../../google/protobuf/timestamp.tsx";
import { defineProperty } from "../../../google/protobuf/wrappers.tsx";
import { create } from "user_settings_shared.tsx";

const require = arg1;
let obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", MENTIONS: 1, [1]: "MENTIONS", UNREADS: 2, [2]: "UNREADS", TODOS: 3, [3]: "TODOS", FOR_YOU: 4, [4]: "FOR_YOU", GAME_INVITES: 5, [5]: "GAME_INVITES", BOOKMARKS: 6, [6]: "BOOKMARKS", SCHEDULED: 7, [7]: "SCHEDULED", REMINDERS: 8, [8]: "REMINDERS" };
obj = { NO_PROGRESS: 0, [0]: "NO_PROGRESS", JOIN_GUILD: 1, [1]: "JOIN_GUILD", INVITE_USER: 2, [2]: "INVITE_USER", CONTACT_SYNC: 4, [4]: "CONTACT_SYNC" };
obj = { NO_GUILD_ONBOARDING: 0, [0]: "NO_GUILD_ONBOARDING", GUILD_NOTICE_SHOWN: 1, [1]: "GUILD_NOTICE_SHOWN", GUILD_NOTICE_CLEARED: 2, [2]: "GUILD_NOTICE_CLEARED" };
const obj1 = { UNSET_EXPLICIT_CONTENT_REDACTION: 0, [0]: "UNSET_EXPLICIT_CONTENT_REDACTION", SHOW: 1, [1]: "SHOW", BLUR: 2, [2]: "BLUR", BLOCK: 3, [3]: "BLOCK" };
const obj2 = { DEFAULT_UNSET: 0, [0]: "DEFAULT_UNSET", DISABLED: 1, [1]: "DISABLED", NON_FRIENDS: 2, [2]: "NON_FRIENDS", FRIENDS_AND_NON_FRIENDS: 3, [3]: "FRIENDS_AND_NON_FRIENDS" };
const obj3 = { NOTIFICATIONS_ENABLED: 0, [0]: "NOTIFICATIONS_ENABLED", ONLY_DMS: 1, [1]: "ONLY_DMS", NOTIFICATIONS_DISABLED: 2, [2]: "NOTIFICATIONS_DISABLED" };
const obj4 = { ACTIVITY_NOTIFICATIONS_UNSET: 0, [0]: "ACTIVITY_NOTIFICATIONS_UNSET", ACTIVITY_NOTIFICATIONS_DISABLED: 1, [1]: "ACTIVITY_NOTIFICATIONS_DISABLED", ACTIVITY_NOTIFICATIONS_ENABLED: 2, [2]: "ACTIVITY_NOTIFICATIONS_ENABLED", ONLY_GAMES_PLAYED: 3, [3]: "ONLY_GAMES_PLAYED" };
const obj5 = { STATUS_PUSH_UNSET: 0, [0]: "STATUS_PUSH_UNSET", STATUS_PUSH_ENABLED: 1, [1]: "STATUS_PUSH_ENABLED", STATUS_PUSH_DISABLED: 2, [2]: "STATUS_PUSH_DISABLED" };
const obj6 = { UNSET: 0, [0]: "UNSET", GOOGLE: 1, [1]: "GOOGLE", BING: 2, [2]: "BING", DUCKDUCKGO: 3, [3]: "DUCKDUCKGO", CUSTOM: 4, [4]: "CUSTOM" };
const obj7 = { OFF: 0, [0]: "OFF", ON_FOR_LARGE_GUILDS: 1, [1]: "ON_FOR_LARGE_GUILDS", ON: 2, [2]: "ON" };
const obj8 = { ACTIVITY_STATUS_UNSET: 0, [0]: "ACTIVITY_STATUS_UNSET", ACTIVITY_STATUS_OFF: 1, [1]: "ACTIVITY_STATUS_OFF", ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS: 2, [2]: "ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS", ACTIVITY_STATUS_ON: 3, [3]: "ACTIVITY_STATUS_ON" };
const obj9 = { OFF_FOR_NEW_GUILDS: 0, [0]: "OFF_FOR_NEW_GUILDS", ON_FOR_NEW_GUILDS: 1, [1]: "ON_FOR_NEW_GUILDS" };
const obj10 = { SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET: 0, [0]: "SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET", SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL: 1, [1]: "SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL", SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME: 2, [2]: "SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME", SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE: 3, [3]: "SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE" };
const obj11 = { UNSET: 0, [0]: "UNSET", FRIENDS_ONLY: 1, [1]: "FRIENDS_ONLY", FRIENDS_AND_SMALL_GUILDS: 2, [2]: "FRIENDS_AND_SMALL_GUILDS", FRIENDS_AND_ALL_GUILDS: 3, [3]: "FRIENDS_AND_ALL_GUILDS" };
const obj12 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", PERSONAL: 1, [1]: "PERSONAL", GUILD: 2, [2]: "GUILD" };
const obj13 = { UNSET_UI_DENSITY: 0, [0]: "UNSET_UI_DENSITY", COMPACT: 1, [1]: "COMPACT", COZY: 2, [2]: "COZY", RESPONSIVE: 3, [3]: "RESPONSIVE", DEFAULT: 4, [4]: "DEFAULT" };
const obj14 = { UNSET: 0, [0]: "UNSET", DARK: 1, [1]: "DARK", LIGHT: 2, [2]: "LIGHT", DARKER: 3, [3]: "DARKER", MIDNIGHT: 4, [4]: "MIDNIGHT" };
const obj15 = { MINT_APPLE: 0, [0]: "MINT_APPLE", CITRUS_SHERBERT: 1, [1]: "CITRUS_SHERBERT", RETRO_RAINCLOUD: 2, [2]: "RETRO_RAINCLOUD", HANAMI: 3, [3]: "HANAMI", SUNRISE: 4, [4]: "SUNRISE", COTTON_CANDY: 5, [5]: "COTTON_CANDY", LOFI_VIBES: 6, [6]: "LOFI_VIBES", DESERT_KHAKI: 7, [7]: "DESERT_KHAKI", SUNSET: 8, [8]: "SUNSET", CHROMA_GLOW: 9, [9]: "CHROMA_GLOW", FOREST: 10, [10]: "FOREST", CRIMSON_MOON: 11, [11]: "CRIMSON_MOON", MIDNIGHT_BLURPLE: 12, [12]: "MIDNIGHT_BLURPLE", MARS: 13, [13]: "MARS", DUSK: 14, [14]: "DUSK", UNDER_THE_SEA: 15, [15]: "UNDER_THE_SEA", EASTER_EGG: 16, [16]: "EASTER_EGG", RETRO_STORM: 17, [17]: "RETRO_STORM", NEON_NIGHTS: 18, [18]: "NEON_NIGHTS", SEPIA: 19, [19]: "SEPIA", STRAWBERRY_LEMONADE: 20, [20]: "STRAWBERRY_LEMONADE", AURORA: 21, [21]: "AURORA", BLURPLE_TWILIGHT: 22, [22]: "BLURPLE_TWILIGHT" };
const obj16 = { AUTO: 0, [0]: "AUTO", H12: 1, [1]: "H12", H23: 2, [2]: "H23" };
const obj17 = { LAUNCH_PAD_DISABLED: 0, [0]: "LAUNCH_PAD_DISABLED", LAUNCH_PAD_GESTURE_FULL_SCREEN: 1, [1]: "LAUNCH_PAD_GESTURE_FULL_SCREEN", LAUNCH_PAD_GESTURE_RIGHT_EDGE: 2, [2]: "LAUNCH_PAD_GESTURE_RIGHT_EDGE", LAUNCH_PAD_PULL_TAB: 3, [3]: "LAUNCH_PAD_PULL_TAB" };
const obj18 = { SWIPE_RIGHT_TO_LEFT_UNSET: 0, [0]: "SWIPE_RIGHT_TO_LEFT_UNSET", SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS: 1, [1]: "SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS", SWIPE_RIGHT_TO_LEFT_REPLY: 2, [2]: "SWIPE_RIGHT_TO_LEFT_REPLY" };
const obj19 = { UNSET_FAVORITE_CHANNEL_TYPE: 0, [0]: "UNSET_FAVORITE_CHANNEL_TYPE", REFERENCE_ORIGINAL: 1, [1]: "REFERENCE_ORIGINAL", CATEGORY: 2, [2]: "CATEGORY" };
const obj20 = { UNSET_SAFETY_SETTINGS_PRESET: 0, [0]: "UNSET_SAFETY_SETTINGS_PRESET", BALANCED: 1, [1]: "BALANCED", STRICT: 2, [2]: "STRICT", RELAXED: 3, [3]: "RELAXED", CUSTOM: 4, [4]: "CUSTOM" };
const obj21 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", ALL: 1, [1]: "ALL", BOOKMARKS: 2, [2]: "BOOKMARKS", REMINDERS: 3, [3]: "REMINDERS" };
const obj22 = { VOICE: 0, [0]: "VOICE", STREAM: 1, [1]: "STREAM", VIDEO_BACKGROUND: 2, [2]: "VIDEO_BACKGROUND", ACTIVITY: 3, [3]: "ACTIVITY", IN_APP_REPORTS: 4, [4]: "IN_APP_REPORTS", SEARCH_RESULTS: 8, [8]: "SEARCH_RESULTS", VIBEGRATIONS: 10, [10]: "VIBEGRATIONS" };
class PreloadedUserSettings$Type extends MessageType {
  constructor() {
    obj = {
      no: 1,
      name: "versions",
      kind: "message",
      T() {
            return callback(table[2]).Versions;
          }
    };
    items = [, , , , , , , , , , , , , , , , , , , , , , , , , ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "inbox",
      kind: "message",
      T() {
            return closure_24;
          }
    };
    items[2] = {
      no: 3,
      name: "guilds",
      kind: "message",
      T() {
            return closure_25;
          }
    };
    items[3] = {
      no: 4,
      name: "user_content",
      kind: "message",
      T() {
            return closure_32;
          }
    };
    items[4] = {
      no: 5,
      name: "voice_and_video",
      kind: "message",
      T() {
            return closure_35;
          }
    };
    items[5] = {
      no: 6,
      name: "text_and_images",
      kind: "message",
      T() {
            return closure_40;
          }
    };
    items[6] = {
      no: 7,
      name: "notifications",
      kind: "message",
      T() {
            return closure_41;
          }
    };
    items[7] = {
      no: 8,
      name: "privacy",
      kind: "message",
      T() {
            return closure_42;
          }
    };
    items[8] = {
      no: 9,
      name: "debug",
      kind: "message",
      T() {
            return closure_43;
          }
    };
    items[9] = {
      no: 10,
      name: "game_library",
      kind: "message",
      T() {
            return closure_44;
          }
    };
    items[10] = {
      no: 11,
      name: "status",
      kind: "message",
      T() {
            return closure_45;
          }
    };
    items[11] = {
      no: 12,
      name: "localization",
      kind: "message",
      T() {
            return closure_47;
          }
    };
    items[12] = {
      no: 13,
      name: "appearance",
      kind: "message",
      T() {
            return closure_49;
          }
    };
    items[13] = {
      no: 14,
      name: "guild_folders",
      kind: "message",
      T() {
            return closure_52;
          }
    };
    items[14] = {
      no: 15,
      name: "favorites",
      kind: "message",
      T() {
            return closure_54;
          }
    };
    items[15] = {
      no: 16,
      name: "audio_context_settings",
      kind: "message",
      T() {
            return closure_57;
          }
    };
    items[16] = {
      no: 17,
      name: "communities",
      kind: "message",
      T() {
            return closure_58;
          }
    };
    items[17] = {
      no: 18,
      name: "broadcast",
      kind: "message",
      T() {
            return closure_61;
          }
    };
    items[18] = {
      no: 19,
      name: "clips",
      kind: "message",
      T() {
            return closure_62;
          }
    };
    items[19] = {
      no: 20,
      name: "for_later",
      kind: "message",
      T() {
            return closure_66;
          }
    };
    items[20] = {
      no: 21,
      name: "safety_settings",
      kind: "message",
      T() {
            return closure_65;
          }
    };
    items[21] = {
      no: 22,
      name: "icymi_settings",
      kind: "message",
      T() {
            return closure_67;
          }
    };
    items[22] = {
      no: 23,
      name: "applications",
      kind: "message",
      T() {
            return closure_68;
          }
    };
    items[23] = {
      no: 24,
      name: "ads",
      kind: "message",
      T() {
            return closure_72;
          }
    };
    obj = { no: 25, name: "in_app_feedback_settings", kind: "message", T: null };
    class T {
      constructor() {
        return closure_75;
      }
    }
    obj[3] = T;
    items[24] = obj;
    items[25] = {
      no: 26,
      name: "app_version_settings",
      kind: "message",
      T() {
            return closure_76;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.PreloadedUserSettings", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype = PreloadedUserSettings$Type.prototype;
prototype["create"] = function create(arr) {
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
prototype["internalBinaryRead"] = function internalBinaryRead(pos) {
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(versions, tag, writeUnknownFields) {
  if (versions.versions) {
    let joined25 = require;
    const Versions = create.Versions;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = Versions.internalBinaryWrite(versions.versions, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Versions.internalBinaryWrite(versions.versions, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.inbox) {
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined1 = tmp9.internalBinaryWrite(versions.inbox, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = tmp9.internalBinaryWrite(versions.inbox, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.guilds) {
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined2 = dependencyMap.internalBinaryWrite(versions.guilds, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = dependencyMap.internalBinaryWrite(versions.guilds, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.userContent) {
    const tagResult3 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined3 = tmp17.internalBinaryWrite(versions.userContent, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = tmp17.internalBinaryWrite(versions.userContent, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.voiceAndVideo) {
    const tagResult4 = tag.tag(5, 01307__.WireType.LengthDelimited);
    const joined4 = tmp20.internalBinaryWrite(versions.voiceAndVideo, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = tmp20.internalBinaryWrite(versions.voiceAndVideo, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.textAndImages) {
    const tagResult5 = tag.tag(6, 01307__.WireType.LengthDelimited);
    const joined5 = textAndImagesSettingsType.internalBinaryWrite(versions.textAndImages, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult5 = textAndImagesSettingsType.internalBinaryWrite(versions.textAndImages, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.notifications) {
    const tagResult6 = tag.tag(7, 01307__.WireType.LengthDelimited);
    const joined6 = notificationSettingsType.internalBinaryWrite(versions.notifications, tag.tag(7, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult6 = notificationSettingsType.internalBinaryWrite(versions.notifications, tag.tag(7, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.privacy) {
    const tagResult7 = tag.tag(8, 01307__.WireType.LengthDelimited);
    const joined7 = privacySettingsType.internalBinaryWrite(versions.privacy, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult7 = privacySettingsType.internalBinaryWrite(versions.privacy, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.debug) {
    const tagResult8 = tag.tag(9, 01307__.WireType.LengthDelimited);
    const joined8 = tmp28.internalBinaryWrite(versions.debug, tag.tag(9, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult8 = tmp28.internalBinaryWrite(versions.debug, tag.tag(9, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.gameLibrary) {
    const tagResult9 = tag.tag(10, 01307__.WireType.LengthDelimited);
    const joined9 = tmp29.internalBinaryWrite(versions.gameLibrary, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult9 = tmp29.internalBinaryWrite(versions.gameLibrary, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.status) {
    const tagResult10 = tag.tag(11, 01307__.WireType.LengthDelimited);
    const joined10 = tmp30.internalBinaryWrite(versions.status, tag.tag(11, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult10 = tmp30.internalBinaryWrite(versions.status, tag.tag(11, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.localization) {
    const tagResult11 = tag.tag(12, 01307__.WireType.LengthDelimited);
    const joined11 = tmp32.internalBinaryWrite(versions.localization, tag.tag(12, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult11 = tmp32.internalBinaryWrite(versions.localization, tag.tag(12, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.appearance) {
    const tagResult12 = tag.tag(13, 01307__.WireType.LengthDelimited);
    const joined12 = appearanceSettingsType.internalBinaryWrite(versions.appearance, tag.tag(13, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult12 = appearanceSettingsType.internalBinaryWrite(versions.appearance, tag.tag(13, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.guildFolders) {
    const tagResult13 = tag.tag(14, 01307__.WireType.LengthDelimited);
    const joined13 = tmp37.internalBinaryWrite(versions.guildFolders, tag.tag(14, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult13 = tmp37.internalBinaryWrite(versions.guildFolders, tag.tag(14, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.favorites) {
    const tagResult14 = tag.tag(15, 01307__.WireType.LengthDelimited);
    const joined14 = tmp39.internalBinaryWrite(versions.favorites, tag.tag(15, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult14 = tmp39.internalBinaryWrite(versions.favorites, tag.tag(15, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.audioContextSettings) {
    const tagResult15 = tag.tag(16, 01307__.WireType.LengthDelimited);
    const joined15 = tmp42.internalBinaryWrite(versions.audioContextSettings, tag.tag(16, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult15 = tmp42.internalBinaryWrite(versions.audioContextSettings, tag.tag(16, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.communities) {
    const tagResult16 = tag.tag(17, 01307__.WireType.LengthDelimited);
    const joined16 = tmp43.internalBinaryWrite(versions.communities, tag.tag(17, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult16 = tmp43.internalBinaryWrite(versions.communities, tag.tag(17, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.broadcast) {
    const tagResult17 = tag.tag(18, 01307__.WireType.LengthDelimited);
    const joined17 = tmp46.internalBinaryWrite(versions.broadcast, tag.tag(18, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult17 = tmp46.internalBinaryWrite(versions.broadcast, tag.tag(18, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.clips) {
    const tagResult18 = tag.tag(19, 01307__.WireType.LengthDelimited);
    const joined18 = tmp47.internalBinaryWrite(versions.clips, tag.tag(19, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult18 = tmp47.internalBinaryWrite(versions.clips, tag.tag(19, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.forLater) {
    const tagResult19 = tag.tag(20, 01307__.WireType.LengthDelimited);
    const joined19 = tmp51.internalBinaryWrite(versions.forLater, tag.tag(20, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult19 = tmp51.internalBinaryWrite(versions.forLater, tag.tag(20, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.safetySettings) {
    const tagResult20 = tag.tag(21, 01307__.WireType.LengthDelimited);
    const joined20 = tmp50.internalBinaryWrite(versions.safetySettings, tag.tag(21, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult20 = tmp50.internalBinaryWrite(versions.safetySettings, tag.tag(21, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.icymiSettings) {
    const tagResult21 = tag.tag(22, 01307__.WireType.LengthDelimited);
    const joined21 = tmp52.internalBinaryWrite(versions.icymiSettings, tag.tag(22, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult21 = tmp52.internalBinaryWrite(versions.icymiSettings, tag.tag(22, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.applications) {
    const tagResult22 = tag.tag(23, 01307__.WireType.LengthDelimited);
    const joined22 = tmp53.internalBinaryWrite(versions.applications, tag.tag(23, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult22 = tmp53.internalBinaryWrite(versions.applications, tag.tag(23, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.ads) {
    const tagResult23 = tag.tag(24, 01307__.WireType.LengthDelimited);
    const joined23 = tmp57.internalBinaryWrite(versions.ads, tag.tag(24, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult23 = tmp57.internalBinaryWrite(versions.ads, tag.tag(24, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.inAppFeedbackSettings) {
    const tagResult24 = tag.tag(25, 01307__.WireType.LengthDelimited);
    const joined24 = inAppFeedbackStateType1.internalBinaryWrite(versions.inAppFeedbackSettings, tag.tag(25, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult24 = inAppFeedbackStateType1.internalBinaryWrite(versions.inAppFeedbackSettings, tag.tag(25, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (versions.appVersionSettings) {
    joined25 = tmp61;
    joined25 = require;
    joined25 = dependencyMap;
    const tagResult25 = tag.tag(26, 01307__.WireType.LengthDelimited);
    joined25 = tmp61.internalBinaryWrite(versions.appVersionSettings, tag.tag(26, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult25 = tmp61.internalBinaryWrite(versions.appVersionSettings, tag.tag(26, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      joined25 = require;
      joined25 = dependencyMap;
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    joined25 = onWrite(this.typeName, versions, tag);
  }
  return tag;
};
const preloadedUserSettingsType = new PreloadedUserSettings$Type();
class InboxSettings$Type extends MessageType2 {
  constructor() {
    obj = {
      no: 1,
      name: "current_tab",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.InboxTab", closure_3, "INBOX_TAB_"];
            return items;
          }
    };
    items = [, ];
    items[0] = obj;
    items[1] = { no: 2, name: "viewed_tutorial", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.discord_users.v1.InboxSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype2 = InboxSettings$Type.prototype;
prototype2["create"] = function create(arr) {
  let obj = { currentTab: 0, viewedTutorial: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype2["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        obj.currentTab = pos.int32();
      } else if (2 === tmp5) {
        obj.viewedTutorial = pos.bool();
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
prototype2["internalBinaryWrite"] = function internalBinaryWrite(currentTab, tag, writeUnknownFields) {
  if (0 !== currentTab.currentTab) {
    tag.tag(1, 01307__.WireType.Varint).int32(currentTab.currentTab);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  if (false !== currentTab.viewedTutorial) {
    tag.tag(2, 01307__.WireType.Varint).bool(currentTab.viewedTutorial);
    const tagResult1 = tag.tag(2, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, currentTab, tag);
  }
  return tag;
};
let items = [
  {
    no: 1,
    name: "current_tab",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_users.v1.InboxTab", closure_3, "INBOX_TAB_"];
      return items;
    }
  },
  { no: 2, name: "viewed_tutorial", kind: "scalar", T: 8 }
];
let tmp9 = new "CUSTOM"("discord_protos.discord_users.v1.InboxSettings", items, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", tmp3, tmp2, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_24 = tmp9;
class AllGuildSettings$Type extends MessageType3 {
  constructor() {
    obj = {
      kind: "message",
      T() {
            return closure_27;
          }
    };
    items = [];
    items[0] = { no: 1, name: "guilds", kind: "map", K: 6, V: obj };
    tmp = new tmp("discord_protos.discord_users.v1.AllGuildSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype3 = AllGuildSettings$Type.prototype;
prototype3["create"] = function create(arr) {
  let obj = { guilds: {} };
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
        let binaryReadMap1Result = self.binaryReadMap1(obj.guilds, pos, readUnknownField);
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
prototype3["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
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
        let tmp15 = guildSettingsType;
        internalBinaryReadResult = guildSettingsType.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = str;
      obj = internalBinaryReadResult;
    }
    const _globalThis = globalThis;
    const error = new Error("unknown map entry field for field discord_protos.discord_users.v1.AllGuildSettings.guilds");
    throw error;
  }
  if (str == null) {
    str = "0";
  }
  if (obj == null) {
    obj = guildSettingsType.create();
  }
  arg0[str] = obj;
};
prototype3["internalBinaryWrite"] = function internalBinaryWrite(guilds, tag, writeUnknownFields) {
  const keys = Object.keys(guilds.guilds);
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
    let tmp7 = guildSettingsType;
    let internalBinaryWriteResult = guildSettingsType.internalBinaryWrite(guilds.guilds[nextResult], tag, writeUnknownFields);
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
    onWrite(this.typeName, guilds, tag);
  }
  return tag;
};
const items1 = [
  {
    no: 1,
    name: "guilds",
    kind: "map",
    K: 6,
    V: {
      kind: "message",
      T() {
        return closure_27;
      }
    }
  }
];
let tmp10 = new "CUSTOM"("discord_protos.discord_users.v1.AllGuildSettings", items1, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_25 = tmp10;
class GuildDismissibleContentState$Type extends MessageType4 {
  constructor() {
    items = [, , , , ];
    items[0] = { no: 1, name: "dismissed", kind: "scalar", T: 8 };
    items[1] = { no: 2, name: "last_dismissed_version", kind: "scalar", T: 13 };
    items[2] = { no: 3, name: "last_dismissed_at_ms", kind: "scalar", T: 4 };
    items[3] = { no: 4, name: "last_dismissed_object_id", kind: "scalar", T: 4 };
    items[4] = { no: 5, name: "num_times_dismissed", kind: "scalar", T: 13 };
    tmp = new tmp("discord_protos.discord_users.v1.GuildDismissibleContentState", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype4 = GuildDismissibleContentState$Type.prototype;
prototype4["create"] = function create(arr) {
  let obj = { dismissed: false, lastDismissedVersion: 0, lastDismissedAtMs: "0", lastDismissedObjectId: "0", numTimesDismissed: 0 };
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
        obj.dismissed = pos.bool();
      } else if (2 === tmp5) {
        obj.lastDismissedVersion = pos.uint32();
      } else if (3 === tmp5) {
        let str5 = pos.uint64();
        obj.lastDismissedAtMs = str5.toString();
      } else if (4 === tmp5) {
        let str4 = pos.uint64();
        obj.lastDismissedObjectId = str4.toString();
      } else if (5 === tmp5) {
        obj.numTimesDismissed = pos.uint32();
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
prototype4["internalBinaryWrite"] = function internalBinaryWrite(dismissed, tag, writeUnknownFields) {
  if (false !== dismissed.dismissed) {
    tag.tag(1, 01307__.WireType.Varint).bool(dismissed.dismissed);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  if (0 !== dismissed.lastDismissedVersion) {
    tag.tag(2, 01307__.WireType.Varint).uint32(dismissed.lastDismissedVersion);
    const tagResult1 = tag.tag(2, 01307__.WireType.Varint);
  }
  if ("0" !== dismissed.lastDismissedAtMs) {
    tag.tag(3, 01307__.WireType.Varint).uint64(dismissed.lastDismissedAtMs);
    const tagResult2 = tag.tag(3, 01307__.WireType.Varint);
  }
  if ("0" !== dismissed.lastDismissedObjectId) {
    tag.tag(4, 01307__.WireType.Varint).uint64(dismissed.lastDismissedObjectId);
    const tagResult3 = tag.tag(4, 01307__.WireType.Varint);
  }
  if (0 !== dismissed.numTimesDismissed) {
    tag.tag(5, 01307__.WireType.Varint).uint32(dismissed.numTimesDismissed);
    const tagResult4 = tag.tag(5, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, dismissed, tag);
  }
  return tag;
};
const items2 = [{ no: 1, name: "dismissed", kind: "scalar", T: 8 }, { no: 2, name: "last_dismissed_version", kind: "scalar", T: 13 }, { no: 3, name: "last_dismissed_at_ms", kind: "scalar", T: 4 }, { no: 4, name: "last_dismissed_object_id", kind: "scalar", T: 4 }, { no: 5, name: "num_times_dismissed", kind: "scalar", T: 13 }];
let tmp11 = new "CUSTOM"("discord_protos.discord_users.v1.GuildDismissibleContentState", items2, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_26 = tmp11;
class GuildSettings$Type extends MessageType5 {
  constructor() {
    obj = {
      kind: "message",
      T() {
            return closure_29;
          }
    };
    items = [, , , , , , , , , , , , ];
    items[0] = { no: 1, name: "channels", kind: "map", K: 6, V: obj };
    items[1] = { no: 2, name: "hub_progress", kind: "scalar", T: 13 };
    items[2] = { no: 3, name: "guild_onboarding_progress", kind: "scalar", T: 13 };
    items[3] = {
      no: 4,
      name: "guild_recents_dismissed_at",
      kind: "message",
      T() {
            return callback(table[3]).Timestamp;
          }
    };
    items[4] = { no: 5, name: "dismissed_guild_content", kind: "scalar", T: 12 };
    items[5] = {
      no: 6,
      name: "join_sound",
      kind: "message",
      T() {
            return closure_60;
          }
    };
    items[6] = {
      no: 7,
      name: "mobile_redesign_channel_list_settings",
      kind: "message",
      T() {
            return closure_48;
          }
    };
    items[7] = { no: 8, name: "disable_raid_alert_push", kind: "scalar", T: 8 };
    items[8] = { no: 9, name: "disable_raid_alert_nag", kind: "scalar", T: 8 };
    items[9] = {
      no: 10,
      name: "custom_notification_sound_config",
      kind: "message",
      T() {
            return closure_30;
          }
    };
    items[10] = { no: 11, name: "leaderboards_disabled", kind: "scalar", T: 8 };
    obj = { no: 12, name: "guild_dismissible_content_states", kind: "map", K: 5, V: null };
    obj1 = { kind: "message", T: null };
    class T {
      constructor() {
        return closure_26;
      }
    }
    obj1[1] = T;
    obj[4] = obj1;
    items[11] = obj;
    items[12] = {
      no: 13,
      name: "guild_theme_source_preference",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.GuildThemeSourcePreference", closure_15, "GUILD_THEME_SOURCE_PREFERENCE_"];
            return items;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.GuildSettings", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype5 = GuildSettings$Type.prototype;
prototype5["create"] = function create(arr) {
  let obj = { channels: {}, hubProgress: 0, guildOnboardingProgress: 0, dismissedGuildContent: null, disableRaidAlertPush: false, disableRaidAlertNag: false, leaderboardsDisabled: false, guildDismissibleContentStates: null, guildThemeSourcePreference: 0 };
  const uint8Array = new Uint8Array(0);
  obj[3] = uint8Array;
  obj[7] = {};
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmp2Result = 01307__;
  }
  return obj;
};
prototype5["internalBinaryRead"] = function internalBinaryRead(pos) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    obj.guildThemeSourcePreference = pos.int32();
  }
  return obj;
};
prototype5["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
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
        let tmp15 = tmp14;
        internalBinaryReadResult = tmp14.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = str;
      obj = internalBinaryReadResult;
    }
    const _globalThis = globalThis;
    const error = new Error("unknown map entry field for field discord_protos.discord_users.v1.GuildSettings.channels");
    throw error;
  }
  if (str == null) {
    str = "0";
  }
  if (obj == null) {
    obj = tmp14.create();
  }
  arg0[str] = obj;
};
prototype5["binaryReadMap12"] = function binaryReadMap12(arg0, pos) {
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
      let int32Result = tmp3;
      if (1 === tmp7) {
        int32Result = pos.int32();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        let tmp15 = tmp11;
        internalBinaryReadResult = tmp11.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = int32Result;
      obj = internalBinaryReadResult;
      num = int32Result;
    }
    const _globalThis = globalThis;
    const error = new Error("unknown map entry field for field discord_protos.discord_users.v1.GuildSettings.guild_dismissible_content_states");
    throw error;
  }
  if (num == null) {
    num = 0;
  }
  if (obj == null) {
    obj = tmp11.create();
  }
  arg0[num] = obj;
};
prototype5["internalBinaryWrite"] = function internalBinaryWrite(channels, tag, writeUnknownFields) {
  let tmp45;
  const keys = Object.keys(channels.channels);
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
    let tmp7 = tmp14;
    let internalBinaryWriteResult = tmp14.internalBinaryWrite(channels.channels[nextResult], tag, writeUnknownFields);
    let joined = tag.join();
    let joined1 = joined.join();
    continue;
  }
  if (0 !== channels.hubProgress) {
    tag.tag(2, 01307__.WireType.Varint).uint32(channels.hubProgress);
    const tagResult3 = tag.tag(2, 01307__.WireType.Varint);
  }
  if (0 !== channels.guildOnboardingProgress) {
    tag.tag(3, 01307__.WireType.Varint).uint32(channels.guildOnboardingProgress);
    const tagResult4 = tag.tag(3, 01307__.WireType.Varint);
  }
  if (channels.guildRecentsDismissedAt) {
    const Timestamp = now.Timestamp;
    const tagResult5 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined2 = Timestamp.internalBinaryWrite(channels.guildRecentsDismissedAt, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = Timestamp.internalBinaryWrite(channels.guildRecentsDismissedAt, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (channels.dismissedGuildContent.length) {
    tag.tag(5, 01307__.WireType.LengthDelimited).bytes(channels.dismissedGuildContent);
    const tagResult6 = tag.tag(5, 01307__.WireType.LengthDelimited);
  }
  if (channels.joinSound) {
    const tagResult7 = tag.tag(6, 01307__.WireType.LengthDelimited);
    const joined3 = tmp45.internalBinaryWrite(channels.joinSound, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = tmp45.internalBinaryWrite(channels.joinSound, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (channels.mobileRedesignChannelListSettings) {
    const tagResult8 = tag.tag(7, 01307__.WireType.LengthDelimited);
    const joined4 = tmp33.internalBinaryWrite(channels.mobileRedesignChannelListSettings, tag.tag(7, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = tmp33.internalBinaryWrite(channels.mobileRedesignChannelListSettings, tag.tag(7, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (false !== channels.disableRaidAlertPush) {
    tag.tag(8, 01307__.WireType.Varint).bool(channels.disableRaidAlertPush);
    const tagResult9 = tag.tag(8, 01307__.WireType.Varint);
  }
  if (false !== channels.disableRaidAlertNag) {
    tag.tag(9, 01307__.WireType.Varint).bool(channels.disableRaidAlertNag);
    const tagResult10 = tag.tag(9, 01307__.WireType.Varint);
  }
  if (channels.customNotificationSoundConfig) {
    const tagResult11 = tag.tag(10, 01307__.WireType.LengthDelimited);
    const joined5 = tmp15.internalBinaryWrite(channels.customNotificationSoundConfig, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = tmp15.internalBinaryWrite(channels.customNotificationSoundConfig, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (false !== channels.leaderboardsDisabled) {
    tag.tag(11, 01307__.WireType.Varint).bool(channels.leaderboardsDisabled);
    const tagResult12 = tag.tag(11, 01307__.WireType.Varint);
  }
  const keys1 = Object.keys(channels.guildDismissibleContentStates);
  const iter2 = keys1[Symbol.iterator]();
  const nextResult1 = iter2.next();
  while (iter2 !== undefined) {
    tmp45 = require;
    let tmp46 = dependencyMap;
    let tagResult13 = tag.tag(12, 01307__.WireType.LengthDelimited);
    let forkResult2 = tagResult13.fork();
    let tagResult14 = forkResult2.tag(1, 01307__.WireType.Varint);
    let _parseInt = parseInt;
    let int32Result = tagResult14.int32(parseInt(nextResult1));
    let tagResult15 = tag.tag(2, 01307__.WireType.LengthDelimited);
    let forkResult3 = tagResult15.fork();
    let tmp49 = tmp11;
    let internalBinaryWriteResult5 = tmp11.internalBinaryWrite(channels.guildDismissibleContentStates[nextResult1], tag, writeUnknownFields);
    let joined6 = tag.join();
    let joined7 = joined6.join();
    continue;
  }
  if (0 !== channels.guildThemeSourcePreference) {
    tag.tag(13, 01307__.WireType.Varint).int32(channels.guildThemeSourcePreference);
    const tagResult16 = tag.tag(13, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, channels, tag);
  }
  return tag;
};
const guildSettingsType = new GuildSettings$Type();
class ChannelIconEmoji$Type extends MessageType6 {
  constructor() {
    obj = {
      no: 1,
      name: "id",
      kind: "message",
      T() {
            return callback(1337).UInt64Value;
          }
    };
    items = [, , ];
    items[0] = obj;
    obj = { no: 2, name: "name", kind: "message", T: null };
    class T {
      constructor() {
        return require("defineProperty").StringValue;
      }
    }
    obj[3] = T;
    items[1] = obj;
    items[2] = {
      no: 3,
      name: "color",
      kind: "message",
      T() {
            return callback(1337).UInt64Value;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.ChannelIconEmoji", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype6 = ChannelIconEmoji$Type.prototype;
prototype6["create"] = function create(arr) {
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
        let tmp32 = require;
        let tmp33 = dependencyMap;
        let UInt64Value2 = defineProperty.UInt64Value;
        let tmp34 = UInt64Value2;
        let tmp35 = pos;
        let tmp36 = readUnknownField;
        obj.id = UInt64Value2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.id);
      } else if (2 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let StringValue = defineProperty.StringValue;
        let tmp29 = StringValue;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.name = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.name);
      } else if (3 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let UInt64Value = defineProperty.UInt64Value;
        let tmp24 = UInt64Value;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.color = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.color);
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
prototype6["internalBinaryWrite"] = function internalBinaryWrite(id, tag, writeUnknownFields) {
  if (id.id) {
    const UInt64Value = defineProperty.UInt64Value;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = UInt64Value.internalBinaryWrite(id.id, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = UInt64Value.internalBinaryWrite(id.id, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (id.name) {
    const StringValue = defineProperty.StringValue;
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined1 = StringValue.internalBinaryWrite(id.name, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = StringValue.internalBinaryWrite(id.name, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (id.color) {
    const UInt64Value2 = defineProperty.UInt64Value;
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined2 = UInt64Value2.internalBinaryWrite(id.color, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = UInt64Value2.internalBinaryWrite(id.color, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
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
const items3 = [
  {
    no: 1,
    name: "id",
    kind: "message",
    T() {
      return callback(1337).UInt64Value;
    }
  },
  {
    no: 2,
    name: "name",
    kind: "message",
    T() {
      return defineProperty.StringValue;
    }
  },
  {
    no: 3,
    name: "color",
    kind: "message",
    T() {
      return callback(1337).UInt64Value;
    }
  }
];
let tmp13 = new "binaryReadMap12"("discord_protos.discord_users.v1.ChannelIconEmoji", items3, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_28 = tmp13;
class ChannelSettings$Type extends MessageType7 {
  constructor() {
    items = [, , ];
    items[0] = { no: 1, name: "collapsed_in_inbox", kind: "scalar", T: 8 };
    obj = { no: 2, name: "icon_emoji", kind: "message", T: null };
    class T {
      constructor() {
        return closure_28;
      }
    }
    obj[3] = T;
    items[1] = obj;
    items[2] = {
      no: 3,
      name: "custom_notification_sound_config",
      kind: "message",
      T() {
            return closure_30;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.ChannelSettings", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype7 = ChannelSettings$Type.prototype;
prototype7["create"] = function create(arr) {
  let obj = { collapsedInInbox: false };
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
        obj.collapsedInInbox = pos.bool();
      } else if (2 === tmp5) {
        let tmp26 = tmp13;
        let tmp27 = tmp13;
        let tmp28 = pos;
        let tmp29 = readUnknownField;
        obj.iconEmoji = tmp13.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.iconEmoji);
      } else if (3 === tmp5) {
        let tmp22 = tmp15;
        let tmp23 = tmp15;
        let tmp24 = pos;
        let tmp25 = readUnknownField;
        obj.customNotificationSoundConfig = tmp15.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.customNotificationSoundConfig);
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          tmp15 = globalThis;
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
            tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype7["internalBinaryWrite"] = function internalBinaryWrite(collapsedInInbox, tag, writeUnknownFields) {
  if (false !== collapsedInInbox.collapsedInInbox) {
    tag.tag(1, 01307__.WireType.Varint).bool(collapsedInInbox.collapsedInInbox);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  if (collapsedInInbox.iconEmoji) {
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined = tmp13.internalBinaryWrite(collapsedInInbox.iconEmoji, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = tmp13.internalBinaryWrite(collapsedInInbox.iconEmoji, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (collapsedInInbox.customNotificationSoundConfig) {
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined1 = tmp15.internalBinaryWrite(collapsedInInbox.customNotificationSoundConfig, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = tmp15.internalBinaryWrite(collapsedInInbox.customNotificationSoundConfig, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, collapsedInInbox, tag);
  }
  return tag;
};
const items4 = [
  { no: 1, name: "collapsed_in_inbox", kind: "scalar", T: 8 },
  {
    no: 2,
    name: "icon_emoji",
    kind: "message",
    T() {
      return closure_28;
    }
  },
  {
    no: 3,
    name: "custom_notification_sound_config",
    kind: "message",
    T() {
      return closure_30;
    }
  }
];
let tmp14 = new "binaryReadMap12"("discord_protos.discord_users.v1.ChannelSettings", items4, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_29 = tmp14;
class CustomNotificationSoundConfig$Type extends MessageType8 {
  constructor() {
    obj = {
      no: 1,
      name: "notification_sound_pack_id",
      kind: "message",
      T() {
            return callback(table[4]).StringValue;
          }
    };
    items = [];
    items[0] = obj;
    tmp = new tmp("discord_protos.discord_users.v1.CustomNotificationSoundConfig", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype8 = CustomNotificationSoundConfig$Type.prototype;
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
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let StringValue = defineProperty.StringValue;
        let tmp24 = StringValue;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.notificationSoundPackId = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.notificationSoundPackId);
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
prototype8["internalBinaryWrite"] = function internalBinaryWrite(notificationSoundPackId, tag, writeUnknownFields) {
  if (notificationSoundPackId.notificationSoundPackId) {
    const StringValue = defineProperty.StringValue;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = StringValue.internalBinaryWrite(notificationSoundPackId.notificationSoundPackId, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = StringValue.internalBinaryWrite(notificationSoundPackId.notificationSoundPackId, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, notificationSoundPackId, tag);
  }
  return tag;
};
const items5 = [
  {
    no: 1,
    name: "notification_sound_pack_id",
    kind: "message",
    T() {
      return callback(table[4]).StringValue;
    }
  }
];
let tmp15 = new "binaryReadMap12"("discord_protos.discord_users.v1.CustomNotificationSoundConfig", items5, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_30 = tmp15;
class RecurringDismissibleContentState$Type extends MessageType9 {
  constructor() {
    items = [, , , ];
    items[0] = { no: 1, name: "last_dismissed_version", kind: "scalar", T: 13 };
    items[1] = { no: 2, name: "last_dismissed_at_ms", kind: "scalar", T: 4 };
    items[2] = { no: 3, name: "last_dismissed_object_id", kind: "scalar", T: 4 };
    items[3] = { no: 4, name: "num_times_dismissed", kind: "scalar", T: 13 };
    tmp = new tmp("discord_protos.discord_users.v1.RecurringDismissibleContentState", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype9 = RecurringDismissibleContentState$Type.prototype;
prototype9["create"] = function create(arr) {
  let obj = { lastDismissedVersion: 0, lastDismissedAtMs: "0", lastDismissedObjectId: "0", numTimesDismissed: 0 };
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
        obj.lastDismissedVersion = pos.uint32();
      } else if (2 === tmp5) {
        let str5 = pos.uint64();
        obj.lastDismissedAtMs = str5.toString();
      } else if (3 === tmp5) {
        let str4 = pos.uint64();
        obj.lastDismissedObjectId = str4.toString();
      } else if (4 === tmp5) {
        obj.numTimesDismissed = pos.uint32();
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
prototype9["internalBinaryWrite"] = function internalBinaryWrite(lastDismissedVersion, tag, writeUnknownFields) {
  if (0 !== lastDismissedVersion.lastDismissedVersion) {
    tag.tag(1, 01307__.WireType.Varint).uint32(lastDismissedVersion.lastDismissedVersion);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  if ("0" !== lastDismissedVersion.lastDismissedAtMs) {
    tag.tag(2, 01307__.WireType.Varint).uint64(lastDismissedVersion.lastDismissedAtMs);
    const tagResult1 = tag.tag(2, 01307__.WireType.Varint);
  }
  if ("0" !== lastDismissedVersion.lastDismissedObjectId) {
    tag.tag(3, 01307__.WireType.Varint).uint64(lastDismissedVersion.lastDismissedObjectId);
    const tagResult2 = tag.tag(3, 01307__.WireType.Varint);
  }
  if (0 !== lastDismissedVersion.numTimesDismissed) {
    tag.tag(4, 01307__.WireType.Varint).uint32(lastDismissedVersion.numTimesDismissed);
    const tagResult3 = tag.tag(4, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, lastDismissedVersion, tag);
  }
  return tag;
};
const items6 = [{ no: 1, name: "last_dismissed_version", kind: "scalar", T: 13 }, { no: 2, name: "last_dismissed_at_ms", kind: "scalar", T: 4 }, { no: 3, name: "last_dismissed_object_id", kind: "scalar", T: 4 }, { no: 4, name: "num_times_dismissed", kind: "scalar", T: 13 }];
let tmp16 = new "binaryReadMap12"("discord_protos.discord_users.v1.RecurringDismissibleContentState", items6, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_31 = tmp16;
class UserContentSettings$Type extends MessageType10 {
  constructor() {
    items = [, , , , , , , ];
    items[0] = { no: 1, name: "dismissed_contents", kind: "scalar", T: 12 };
    items[1] = {
      no: 2,
      name: "last_dismissed_outbound_promotion_start_date",
      kind: "message",
      T() {
            return callback(1337).StringValue;
          }
    };
    items[2] = {
      no: 3,
      name: "premium_tier_0_modal_dismissed_at",
      kind: "message",
      T() {
            return callback(1336).Timestamp;
          }
    };
    items[3] = {
      no: 4,
      name: "guild_onboarding_upsell_dismissed_at",
      kind: "message",
      T() {
            return callback(1336).Timestamp;
          }
    };
    items[4] = {
      no: 5,
      name: "safety_user_sentiment_notice_dismissed_at",
      kind: "message",
      T() {
            return callback(1336).Timestamp;
          }
    };
    items[5] = { no: 6, name: "last_received_changelog_id", kind: "scalar", T: 6 };
    obj = { no: 7, name: "recurring_dismissible_content_states", kind: "map", K: 5, V: null };
    obj = { kind: "message", T: null };
    class T {
      constructor() {
        return closure_31;
      }
    }
    obj[1] = T;
    obj[4] = obj;
    items[6] = obj;
    items[7] = { no: 8, name: "last_gift_intent_dismissed_at_ms", kind: "scalar", T: 6 };
    tmp = new tmp("discord_protos.discord_users.v1.UserContentSettings", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype10 = UserContentSettings$Type.prototype;
prototype10["create"] = function create(arr) {
  let obj = { dismissedContents: null, lastReceivedChangelogId: "0", recurringDismissibleContentStates: null, lastGiftIntentDismissedAtMs: "0" };
  const uint8Array = new Uint8Array(0);
  obj[0] = uint8Array;
  obj[2] = {};
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmp2Result = 01307__;
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
        obj.dismissedContents = pos.bytes();
      } else if (2 === tmp5) {
        let tmp38 = require;
        let tmp39 = dependencyMap;
        let StringValue = defineProperty.StringValue;
        let tmp40 = StringValue;
        let tmp41 = pos;
        let tmp42 = readUnknownField;
        obj.lastDismissedOutboundPromotionStartDate = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.lastDismissedOutboundPromotionStartDate);
      } else if (3 === tmp5) {
        let tmp33 = require;
        let tmp34 = dependencyMap;
        let Timestamp3 = now.Timestamp;
        let tmp35 = Timestamp3;
        let tmp36 = pos;
        let tmp37 = readUnknownField;
        obj.premiumTier0ModalDismissedAt = Timestamp3.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.premiumTier0ModalDismissedAt);
      } else if (4 === tmp5) {
        let tmp28 = require;
        let tmp29 = dependencyMap;
        let Timestamp2 = now.Timestamp;
        let tmp30 = Timestamp2;
        let tmp31 = pos;
        let tmp32 = readUnknownField;
        obj.guildOnboardingUpsellDismissedAt = Timestamp2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.guildOnboardingUpsellDismissedAt);
      } else if (5 === tmp5) {
        let tmp23 = require;
        let tmp24 = dependencyMap;
        let Timestamp = now.Timestamp;
        let tmp25 = Timestamp;
        let tmp26 = pos;
        let tmp27 = readUnknownField;
        obj.safetyUserSentimentNoticeDismissedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.safetyUserSentimentNoticeDismissedAt);
      } else if (6 === tmp5) {
        let str5 = pos.fixed64();
        obj.lastReceivedChangelogId = str5.toString();
      } else if (7 === tmp5) {
        let binaryReadMap7Result = self.binaryReadMap7(obj.recurringDismissibleContentStates, pos, readUnknownField);
      } else if (8 === tmp5) {
        let str4 = pos.fixed64();
        obj.lastGiftIntentDismissedAtMs = str4.toString();
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
prototype10["binaryReadMap7"] = function binaryReadMap7(recurringDismissibleContentStates, pos, readUnknownField) {
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
      let int32Result = tmp3;
      if (1 === tmp7) {
        int32Result = pos.int32();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        let tmp15 = tmp16;
        internalBinaryReadResult = tmp16.internalBinaryRead(pos, pos.uint32(), readUnknownField);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = int32Result;
      obj = internalBinaryReadResult;
      num = int32Result;
    }
    const _globalThis = globalThis;
    const error = new Error("unknown map entry field for field discord_protos.discord_users.v1.UserContentSettings.recurring_dismissible_content_states");
    throw error;
  }
  if (num == null) {
    num = 0;
  }
  if (obj == null) {
    obj = tmp16.create();
  }
  recurringDismissibleContentStates[num] = obj;
};
prototype10["internalBinaryWrite"] = function internalBinaryWrite(dismissedContents, tag, writeUnknownFields) {
  if (dismissedContents.dismissedContents.length) {
    tag.tag(1, 01307__.WireType.LengthDelimited).bytes(dismissedContents.dismissedContents);
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
  }
  if (dismissedContents.lastDismissedOutboundPromotionStartDate) {
    const StringValue = defineProperty.StringValue;
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined = StringValue.internalBinaryWrite(dismissedContents.lastDismissedOutboundPromotionStartDate, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = StringValue.internalBinaryWrite(dismissedContents.lastDismissedOutboundPromotionStartDate, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (dismissedContents.premiumTier0ModalDismissedAt) {
    const Timestamp = now.Timestamp;
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined1 = Timestamp.internalBinaryWrite(dismissedContents.premiumTier0ModalDismissedAt, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = Timestamp.internalBinaryWrite(dismissedContents.premiumTier0ModalDismissedAt, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (dismissedContents.guildOnboardingUpsellDismissedAt) {
    const Timestamp2 = now.Timestamp;
    const tagResult3 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined2 = Timestamp2.internalBinaryWrite(dismissedContents.guildOnboardingUpsellDismissedAt, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = Timestamp2.internalBinaryWrite(dismissedContents.guildOnboardingUpsellDismissedAt, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (dismissedContents.safetyUserSentimentNoticeDismissedAt) {
    const Timestamp3 = now.Timestamp;
    const tagResult4 = tag.tag(5, 01307__.WireType.LengthDelimited);
    const joined3 = Timestamp3.internalBinaryWrite(dismissedContents.safetyUserSentimentNoticeDismissedAt, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = Timestamp3.internalBinaryWrite(dismissedContents.safetyUserSentimentNoticeDismissedAt, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("0" !== dismissedContents.lastReceivedChangelogId) {
    tag.tag(6, 01307__.WireType.Bit64).fixed64(dismissedContents.lastReceivedChangelogId);
    const tagResult5 = tag.tag(6, 01307__.WireType.Bit64);
  }
  const keys = Object.keys(dismissedContents.recurringDismissibleContentStates);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp21 = require;
    let tmp22 = dependencyMap;
    let tagResult6 = tag.tag(7, 01307__.WireType.LengthDelimited);
    let forkResult = tagResult6.fork();
    let tagResult7 = forkResult.tag(1, 01307__.WireType.Varint);
    let _parseInt = parseInt;
    let int32Result = tagResult7.int32(parseInt(nextResult));
    let tagResult8 = tag.tag(2, 01307__.WireType.LengthDelimited);
    let forkResult1 = tagResult8.fork();
    let tmp25 = tmp16;
    let internalBinaryWriteResult4 = tmp16.internalBinaryWrite(dismissedContents.recurringDismissibleContentStates[nextResult], tag, writeUnknownFields);
    let joined4 = tag.join();
    let joined5 = joined4.join();
    continue;
  }
  if ("0" !== dismissedContents.lastGiftIntentDismissedAtMs) {
    tag.tag(8, 01307__.WireType.Bit64).fixed64(dismissedContents.lastGiftIntentDismissedAtMs);
    const tagResult9 = tag.tag(8, 01307__.WireType.Bit64);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, dismissedContents, tag);
  }
  return tag;
};
const items7 = [
  { no: 1, name: "dismissed_contents", kind: "scalar", T: 12 },
  {
    no: 2,
    name: "last_dismissed_outbound_promotion_start_date",
    kind: "message",
    T() {
      return callback(1337).StringValue;
    }
  },
  {
    no: 3,
    name: "premium_tier_0_modal_dismissed_at",
    kind: "message",
    T() {
      return callback(1336).Timestamp;
    }
  },
  {
    no: 4,
    name: "guild_onboarding_upsell_dismissed_at",
    kind: "message",
    T() {
      return callback(1336).Timestamp;
    }
  },
  {
    no: 5,
    name: "safety_user_sentiment_notice_dismissed_at",
    kind: "message",
    T() {
      return callback(1336).Timestamp;
    }
  },
  { no: 6, name: "last_received_changelog_id", kind: "scalar", T: 6 },
  {
    no: 7,
    name: "recurring_dismissible_content_states",
    kind: "map",
    K: 5,
    V: {
      kind: "message",
      T() {
        return closure_31;
      }
    }
  },
  { no: 8, name: "last_gift_intent_dismissed_at_ms", kind: "scalar", T: 6 }
];
let tmp17 = new "binaryReadMap12"("discord_protos.discord_users.v1.UserContentSettings", items7, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_32 = tmp17;
class VideoFilterAsset$Type extends MessageType11 {
  constructor() {
    items = [, ];
    items[0] = { no: 1, name: "id", kind: "scalar", T: 6 };
    items[1] = { no: 2, name: "asset_hash", kind: "scalar", T: 9 };
    tmp = new tmp("discord_protos.discord_users.v1.VideoFilterAsset", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype11 = VideoFilterAsset$Type.prototype;
prototype11["create"] = function create(arr) {
  let obj = { id: "0", assetHash: "" };
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
        let str4 = pos.fixed64();
        obj.id = str4.toString();
      } else if (2 === tmp5) {
        obj.assetHash = pos.string();
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
prototype11["internalBinaryWrite"] = function internalBinaryWrite(id, tag, writeUnknownFields) {
  if ("0" !== id.id) {
    tag.tag(1, 01307__.WireType.Bit64).fixed64(id.id);
    const tagResult = tag.tag(1, 01307__.WireType.Bit64);
  }
  if ("" !== id.assetHash) {
    tag.tag(2, 01307__.WireType.LengthDelimited).string(id.assetHash);
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
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
const items8 = [{ no: 1, name: "id", kind: "scalar", T: 6 }, { no: 2, name: "asset_hash", kind: "scalar", T: 9 }];
let tmp18 = new "binaryReadMap12"("discord_protos.discord_users.v1.VideoFilterAsset", items8, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_33 = tmp18;
class VideoFilterBackgroundBlur$Type extends MessageType12 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "use_blur", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.discord_users.v1.VideoFilterBackgroundBlur", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype12 = VideoFilterBackgroundBlur$Type.prototype;
prototype12["create"] = function create(arr) {
  let obj = { useBlur: false };
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
        obj.useBlur = pos.bool();
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
prototype12["internalBinaryWrite"] = function internalBinaryWrite(useBlur, tag, writeUnknownFields) {
  if (false !== useBlur.useBlur) {
    tag.tag(1, 01307__.WireType.Varint).bool(useBlur.useBlur);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, useBlur, tag);
  }
  return tag;
};
const items9 = [{ no: 1, name: "use_blur", kind: "scalar", T: 8 }];
let tmp19 = new "binaryReadMap12"("discord_protos.discord_users.v1.VideoFilterBackgroundBlur", items9, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_34 = tmp19;
class VoiceAndVideoSettings$Type extends MessageType13 {
  constructor() {
    obj = {
      no: 1,
      name: "blur",
      kind: "message",
      oneof: "videoBackgroundFilterDesktop",
      T() {
            return closure_34;
          }
    };
    items = [, , , , , , , , , ];
    items[0] = obj;
    items[1] = { no: 2, name: "preset_option", kind: "scalar", oneof: "videoBackgroundFilterDesktop", T: 13 };
    items[2] = {
      no: 3,
      name: "custom_asset",
      kind: "message",
      oneof: "videoBackgroundFilterDesktop",
      T() {
            return closure_33;
          }
    };
    items[3] = {
      no: 5,
      name: "always_preview_video",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[4] = {
      no: 6,
      name: "afk_timeout",
      kind: "message",
      T() {
            return callback(1337).UInt32Value;
          }
    };
    items[5] = {
      no: 7,
      name: "stream_notifications_enabled",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[6] = {
      no: 8,
      name: "native_phone_integration_enabled",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[7] = {
      no: 9,
      name: "soundboard_settings",
      kind: "message",
      T() {
            return closure_59;
          }
    };
    obj = { no: 10, name: "disable_stream_previews", kind: "message", T: null };
    class T {
      constructor() {
        return require("defineProperty").BoolValue;
      }
    }
    obj[3] = T;
    items[8] = obj;
    items[9] = {
      no: 11,
      name: "soundmoji_volume",
      kind: "message",
      T() {
            return callback(1337).FloatValue;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.VoiceAndVideoSettings", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype13 = VoiceAndVideoSettings$Type.prototype;
prototype13["create"] = function create(arr) {
  let obj = { videoBackgroundFilterDesktop: { oneofKind: "r" } };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype13["internalBinaryRead"] = function internalBinaryRead(pos) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    const FloatValue = defineProperty.FloatValue;
    obj.soundmojiVolume = FloatValue.internalBinaryRead(pos, pos.uint32(), arg2, obj.soundmojiVolume);
  }
  return obj;
};
prototype13["internalBinaryWrite"] = function internalBinaryWrite(videoBackgroundFilterDesktop, tag, writeUnknownFields) {
  if ("blur" === videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.oneofKind) {
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = tmp19.internalBinaryWrite(videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.blur, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = tmp19.internalBinaryWrite(videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.blur, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("presetOption" === videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.oneofKind) {
    tag.tag(2, 01307__.WireType.Varint).uint32(videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.presetOption);
    const tagResult1 = tag.tag(2, 01307__.WireType.Varint);
  }
  if ("customAsset" === videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.oneofKind) {
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined1 = tmp18.internalBinaryWrite(videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.customAsset, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = tmp18.internalBinaryWrite(videoBackgroundFilterDesktop.videoBackgroundFilterDesktop.customAsset, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (videoBackgroundFilterDesktop.alwaysPreviewVideo) {
    const BoolValue = defineProperty.BoolValue;
    const tagResult3 = tag.tag(5, 01307__.WireType.LengthDelimited);
    const joined2 = BoolValue.internalBinaryWrite(videoBackgroundFilterDesktop.alwaysPreviewVideo, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = BoolValue.internalBinaryWrite(videoBackgroundFilterDesktop.alwaysPreviewVideo, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (videoBackgroundFilterDesktop.afkTimeout) {
    const UInt32Value = defineProperty.UInt32Value;
    const tagResult4 = tag.tag(6, 01307__.WireType.LengthDelimited);
    const joined3 = UInt32Value.internalBinaryWrite(videoBackgroundFilterDesktop.afkTimeout, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = UInt32Value.internalBinaryWrite(videoBackgroundFilterDesktop.afkTimeout, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (videoBackgroundFilterDesktop.streamNotificationsEnabled) {
    const BoolValue2 = defineProperty.BoolValue;
    const tagResult5 = tag.tag(7, 01307__.WireType.LengthDelimited);
    const joined4 = BoolValue2.internalBinaryWrite(videoBackgroundFilterDesktop.streamNotificationsEnabled, tag.tag(7, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = BoolValue2.internalBinaryWrite(videoBackgroundFilterDesktop.streamNotificationsEnabled, tag.tag(7, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (videoBackgroundFilterDesktop.nativePhoneIntegrationEnabled) {
    const BoolValue3 = defineProperty.BoolValue;
    const tagResult6 = tag.tag(8, 01307__.WireType.LengthDelimited);
    const joined5 = BoolValue3.internalBinaryWrite(videoBackgroundFilterDesktop.nativePhoneIntegrationEnabled, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult5 = BoolValue3.internalBinaryWrite(videoBackgroundFilterDesktop.nativePhoneIntegrationEnabled, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (videoBackgroundFilterDesktop.soundboardSettings) {
    const tagResult7 = tag.tag(9, 01307__.WireType.LengthDelimited);
    const joined6 = tmp44.internalBinaryWrite(videoBackgroundFilterDesktop.soundboardSettings, tag.tag(9, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult6 = tmp44.internalBinaryWrite(videoBackgroundFilterDesktop.soundboardSettings, tag.tag(9, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (videoBackgroundFilterDesktop.disableStreamPreviews) {
    const BoolValue4 = defineProperty.BoolValue;
    const tagResult8 = tag.tag(10, 01307__.WireType.LengthDelimited);
    const joined7 = BoolValue4.internalBinaryWrite(videoBackgroundFilterDesktop.disableStreamPreviews, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult7 = BoolValue4.internalBinaryWrite(videoBackgroundFilterDesktop.disableStreamPreviews, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (videoBackgroundFilterDesktop.soundmojiVolume) {
    const FloatValue = defineProperty.FloatValue;
    const tagResult9 = tag.tag(11, 01307__.WireType.LengthDelimited);
    const joined8 = FloatValue.internalBinaryWrite(videoBackgroundFilterDesktop.soundmojiVolume, tag.tag(11, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult8 = FloatValue.internalBinaryWrite(videoBackgroundFilterDesktop.soundmojiVolume, tag.tag(11, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, videoBackgroundFilterDesktop, tag);
  }
  return tag;
};
const items10 = [
  {
    no: 1,
    name: "blur",
    kind: "message",
    oneof: "videoBackgroundFilterDesktop",
    T() {
      return closure_34;
    }
  },
  { no: 2, name: "preset_option", kind: "scalar", oneof: "videoBackgroundFilterDesktop", T: 13 },
  {
    no: 3,
    name: "custom_asset",
    kind: "message",
    oneof: "videoBackgroundFilterDesktop",
    T() {
      return closure_33;
    }
  },
  {
    no: 5,
    name: "always_preview_video",
    kind: "message",
    T() {
      return callback(1337).BoolValue;
    }
  },
  {
    no: 6,
    name: "afk_timeout",
    kind: "message",
    T() {
      return callback(1337).UInt32Value;
    }
  },
  {
    no: 7,
    name: "stream_notifications_enabled",
    kind: "message",
    T() {
      return callback(1337).BoolValue;
    }
  },
  {
    no: 8,
    name: "native_phone_integration_enabled",
    kind: "message",
    T() {
      return callback(1337).BoolValue;
    }
  },
  {
    no: 9,
    name: "soundboard_settings",
    kind: "message",
    T() {
      return closure_59;
    }
  },
  {
    no: 10,
    name: "disable_stream_previews",
    kind: "message",
    T() {
      return defineProperty.BoolValue;
    }
  },
  {
    no: 11,
    name: "soundmoji_volume",
    kind: "message",
    T() {
      return callback(1337).FloatValue;
    }
  }
];
const tmp20 = new "binaryReadMap12"("discord_protos.discord_users.v1.VoiceAndVideoSettings", items10, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_35 = tmp20;
class ExplicitContentSettings$Type extends MessageType14 {
  constructor() {
    obj = {
      no: 1,
      name: "explicit_content_guilds",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", closure_4];
            return items;
          }
    };
    items = [, , ];
    items[0] = obj;
    obj = { no: 2, name: "explicit_content_friend_dm", kind: "enum", T: null };
    class T {
      constructor() {
        items = ["discord_protos.discord_users.v1.ExplicitContentRedaction"];
        items[1] = closure_4;
        return items;
      }
    }
    obj[3] = T;
    items[1] = obj;
    items[2] = {
      no: 3,
      name: "explicit_content_non_friend_dm",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", closure_4];
            return items;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.ExplicitContentSettings", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype14 = ExplicitContentSettings$Type.prototype;
prototype14["create"] = function create(arr) {
  let obj = { explicitContentGuilds: 0, explicitContentFriendDm: 0, explicitContentNonFriendDm: 0 };
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
        obj.explicitContentGuilds = pos.int32();
      } else if (2 === tmp5) {
        obj.explicitContentFriendDm = pos.int32();
      } else if (3 === tmp5) {
        obj.explicitContentNonFriendDm = pos.int32();
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
prototype14["internalBinaryWrite"] = function internalBinaryWrite(explicitContentGuilds, tag, writeUnknownFields) {
  if (0 !== explicitContentGuilds.explicitContentGuilds) {
    tag.tag(1, 01307__.WireType.Varint).int32(explicitContentGuilds.explicitContentGuilds);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  if (0 !== explicitContentGuilds.explicitContentFriendDm) {
    tag.tag(2, 01307__.WireType.Varint).int32(explicitContentGuilds.explicitContentFriendDm);
    const tagResult1 = tag.tag(2, 01307__.WireType.Varint);
  }
  if (0 !== explicitContentGuilds.explicitContentNonFriendDm) {
    tag.tag(3, 01307__.WireType.Varint).int32(explicitContentGuilds.explicitContentNonFriendDm);
    const tagResult2 = tag.tag(3, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, explicitContentGuilds, tag);
  }
  return tag;
};
const items11 = [
  {
    no: 1,
    name: "explicit_content_guilds",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", closure_4];
      return items;
    }
  },
  {
    no: 2,
    name: "explicit_content_friend_dm",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", obj1];
      return items;
    }
  },
  {
    no: 3,
    name: "explicit_content_non_friend_dm",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", closure_4];
      return items;
    }
  }
];
let tmp21 = new "binaryReadMap12"("discord_protos.discord_users.v1.ExplicitContentSettings", items11, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_36 = tmp21;
class GoreContentSettings$Type extends MessageType15 {
  constructor() {
    obj = {
      no: 1,
      name: "gore_content_guilds",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", closure_4];
            return items;
          }
    };
    items = [, , ];
    items[0] = obj;
    obj = { no: 2, name: "gore_content_friend_dm", kind: "enum", T: null };
    class T {
      constructor() {
        items = ["discord_protos.discord_users.v1.ExplicitContentRedaction"];
        items[1] = closure_4;
        return items;
      }
    }
    obj[3] = T;
    items[1] = obj;
    items[2] = {
      no: 3,
      name: "gore_content_non_friend_dm",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", closure_4];
            return items;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.GoreContentSettings", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype15 = GoreContentSettings$Type.prototype;
prototype15["create"] = function create(arr) {
  let obj = { goreContentGuilds: 0, goreContentFriendDm: 0, goreContentNonFriendDm: 0 };
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
        obj.goreContentGuilds = pos.int32();
      } else if (2 === tmp5) {
        obj.goreContentFriendDm = pos.int32();
      } else if (3 === tmp5) {
        obj.goreContentNonFriendDm = pos.int32();
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
prototype15["internalBinaryWrite"] = function internalBinaryWrite(goreContentGuilds, tag, writeUnknownFields) {
  if (0 !== goreContentGuilds.goreContentGuilds) {
    tag.tag(1, 01307__.WireType.Varint).int32(goreContentGuilds.goreContentGuilds);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  if (0 !== goreContentGuilds.goreContentFriendDm) {
    tag.tag(2, 01307__.WireType.Varint).int32(goreContentGuilds.goreContentFriendDm);
    const tagResult1 = tag.tag(2, 01307__.WireType.Varint);
  }
  if (0 !== goreContentGuilds.goreContentNonFriendDm) {
    tag.tag(3, 01307__.WireType.Varint).int32(goreContentGuilds.goreContentNonFriendDm);
    const tagResult2 = tag.tag(3, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, goreContentGuilds, tag);
  }
  return tag;
};
const items12 = [
  {
    no: 1,
    name: "gore_content_guilds",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", closure_4];
      return items;
    }
  },
  {
    no: 2,
    name: "gore_content_friend_dm",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", obj1];
      return items;
    }
  },
  {
    no: 3,
    name: "gore_content_non_friend_dm",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", closure_4];
      return items;
    }
  }
];
let tmp22 = new "binaryReadMap12"("discord_protos.discord_users.v1.GoreContentSettings", items12, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_37 = tmp22;
class SelfHarmContentSettings$Type extends MessageType16 {
  constructor() {
    obj = {
      no: 1,
      name: "self_harm_content_guilds",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", closure_4];
            return items;
          }
    };
    items = [, , ];
    items[0] = obj;
    obj = { no: 2, name: "self_harm_content_friend_dm", kind: "enum", T: null };
    class T {
      constructor() {
        items = ["discord_protos.discord_users.v1.ExplicitContentRedaction"];
        items[1] = closure_4;
        return items;
      }
    }
    obj[3] = T;
    items[1] = obj;
    items[2] = {
      no: 3,
      name: "self_harm_content_non_friend_dm",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", closure_4];
            return items;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.SelfHarmContentSettings", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype16 = SelfHarmContentSettings$Type.prototype;
prototype16["create"] = function create(arr) {
  let obj = { selfHarmContentGuilds: 0, selfHarmContentFriendDm: 0, selfHarmContentNonFriendDm: 0 };
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
        obj.selfHarmContentGuilds = pos.int32();
      } else if (2 === tmp5) {
        obj.selfHarmContentFriendDm = pos.int32();
      } else if (3 === tmp5) {
        obj.selfHarmContentNonFriendDm = pos.int32();
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
prototype16["internalBinaryWrite"] = function internalBinaryWrite(selfHarmContentGuilds, tag, writeUnknownFields) {
  if (0 !== selfHarmContentGuilds.selfHarmContentGuilds) {
    tag.tag(1, 01307__.WireType.Varint).int32(selfHarmContentGuilds.selfHarmContentGuilds);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  if (0 !== selfHarmContentGuilds.selfHarmContentFriendDm) {
    tag.tag(2, 01307__.WireType.Varint).int32(selfHarmContentGuilds.selfHarmContentFriendDm);
    const tagResult1 = tag.tag(2, 01307__.WireType.Varint);
  }
  if (0 !== selfHarmContentGuilds.selfHarmContentNonFriendDm) {
    tag.tag(3, 01307__.WireType.Varint).int32(selfHarmContentGuilds.selfHarmContentNonFriendDm);
    const tagResult2 = tag.tag(3, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, selfHarmContentGuilds, tag);
  }
  return tag;
};
const items13 = [
  {
    no: 1,
    name: "self_harm_content_guilds",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", closure_4];
      return items;
    }
  },
  {
    no: 2,
    name: "self_harm_content_friend_dm",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", obj1];
      return items;
    }
  },
  {
    no: 3,
    name: "self_harm_content_non_friend_dm",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_users.v1.ExplicitContentRedaction", closure_4];
      return items;
    }
  }
];
let tmp23 = new "binaryReadMap12"("discord_protos.discord_users.v1.SelfHarmContentSettings", items13, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_38 = tmp23;
class KeywordFilterSettings$Type extends MessageType17 {
  constructor() {
    obj = {
      no: 1,
      name: "profanity",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items = [, , ];
    items[0] = obj;
    obj = { no: 2, name: "sexual_content", kind: "message", T: null };
    class T {
      constructor() {
        return require("defineProperty").BoolValue;
      }
    }
    obj[3] = T;
    items[1] = obj;
    items[2] = {
      no: 3,
      name: "slurs",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.KeywordFilterSettings", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype17 = KeywordFilterSettings$Type.prototype;
prototype17["create"] = function create(arr) {
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
prototype17["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let tmp32 = require;
        let tmp33 = dependencyMap;
        let BoolValue3 = defineProperty.BoolValue;
        let tmp34 = BoolValue3;
        let tmp35 = pos;
        let tmp36 = readUnknownField;
        obj.profanity = BoolValue3.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.profanity);
      } else if (2 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let BoolValue2 = defineProperty.BoolValue;
        let tmp29 = BoolValue2;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.sexualContent = BoolValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.sexualContent);
      } else if (3 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let BoolValue = defineProperty.BoolValue;
        let tmp24 = BoolValue;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.slurs = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.slurs);
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
prototype17["internalBinaryWrite"] = function internalBinaryWrite(profanity, tag, writeUnknownFields) {
  if (profanity.profanity) {
    const BoolValue = defineProperty.BoolValue;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = BoolValue.internalBinaryWrite(profanity.profanity, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = BoolValue.internalBinaryWrite(profanity.profanity, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (profanity.sexualContent) {
    const BoolValue2 = defineProperty.BoolValue;
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined1 = BoolValue2.internalBinaryWrite(profanity.sexualContent, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = BoolValue2.internalBinaryWrite(profanity.sexualContent, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (profanity.slurs) {
    const BoolValue3 = defineProperty.BoolValue;
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined2 = BoolValue3.internalBinaryWrite(profanity.slurs, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = BoolValue3.internalBinaryWrite(profanity.slurs, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, profanity, tag);
  }
  return tag;
};
const items14 = [
  {
    no: 1,
    name: "profanity",
    kind: "message",
    T() {
      return callback(1337).BoolValue;
    }
  },
  {
    no: 2,
    name: "sexual_content",
    kind: "message",
    T() {
      return defineProperty.BoolValue;
    }
  },
  {
    no: 3,
    name: "slurs",
    kind: "message",
    T() {
      return callback(1337).BoolValue;
    }
  }
];
let tmp24 = new "binaryReadMap12"("discord_protos.discord_users.v1.KeywordFilterSettings", items14, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_39 = tmp24;
class TextAndImagesSettings$Type extends MessageType18 {
  constructor() {
    obj = {
      no: 1,
      name: "diversity_surrogate",
      kind: "message",
      T() {
            return callback(1337).StringValue;
          }
    };
    items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "use_rich_chat_input",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[2] = {
      no: 3,
      name: "use_thread_sidebar",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[3] = {
      no: 4,
      name: "render_spoilers",
      kind: "message",
      T() {
            return callback(1337).StringValue;
          }
    };
    items[4] = { no: 5, name: "emoji_picker_collapsed_sections", kind: "scalar", repeat: 2, T: 9 };
    items[5] = { no: 6, name: "sticker_picker_collapsed_sections", kind: "scalar", repeat: 2, T: 9 };
    items[6] = {
      no: 7,
      name: "view_image_descriptions",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[7] = {
      no: 8,
      name: "show_command_suggestions",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[8] = {
      no: 9,
      name: "inline_attachment_media",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[9] = {
      no: 10,
      name: "inline_embed_media",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[10] = {
      no: 11,
      name: "gif_auto_play",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[11] = {
      no: 12,
      name: "render_embeds",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[12] = {
      no: 13,
      name: "render_reactions",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[13] = {
      no: 14,
      name: "animate_emoji",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[14] = {
      no: 15,
      name: "animate_stickers",
      kind: "message",
      T() {
            return callback(1337).UInt32Value;
          }
    };
    items[15] = {
      no: 16,
      name: "enable_tts_command",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[16] = {
      no: 17,
      name: "message_display_compact",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[17] = {
      no: 19,
      name: "explicit_content_filter",
      kind: "message",
      T() {
            return callback(1337).UInt32Value;
          }
    };
    items[18] = {
      no: 20,
      name: "view_nsfw_guilds",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[19] = {
      no: 21,
      name: "convert_emoticons",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[20] = {
      no: 22,
      name: "expression_suggestions_enabled",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[21] = {
      no: 23,
      name: "view_nsfw_commands",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[22] = {
      no: 24,
      name: "use_legacy_chat_input",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[23] = { no: 25, name: "soundboard_picker_collapsed_sections", kind: "scalar", repeat: 2, T: 9 };
    items[24] = {
      no: 26,
      name: "dm_spam_filter",
      kind: "message",
      T() {
            return callback(1337).UInt32Value;
          }
    };
    items[25] = {
      no: 27,
      name: "dm_spam_filter_v2",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.DmSpamFilterV2", closure_5];
            return items;
          }
    };
    items[26] = {
      no: 28,
      name: "include_stickers_in_autocomplete",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[27] = {
      no: 29,
      name: "explicit_content_settings",
      kind: "message",
      T() {
            return closure_36;
          }
    };
    items[28] = {
      no: 30,
      name: "keyword_filter_settings",
      kind: "message",
      T() {
            return closure_39;
          }
    };
    items[29] = {
      no: 31,
      name: "include_soundmoji_in_autocomplete",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[30] = {
      no: 32,
      name: "gore_content_settings",
      kind: "message",
      T() {
            return closure_37;
          }
    };
    items[31] = {
      no: 33,
      name: "default_reaction_emoji",
      kind: "message",
      T() {
            return closure_74;
          }
    };
    items[32] = {
      no: 34,
      name: "show_mention_suggestions",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[33] = {
      no: 35,
      name: "self_harm_content_settings",
      kind: "message",
      T() {
            return closure_38;
          }
    };
    items[34] = {
      no: 36,
      name: "is_cross_dm_search_enabled",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[35] = {
      no: 37,
      name: "search_provider",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.SearchProvider", closure_9, "SEARCH_PROVIDER_"];
            return items;
          }
    };
    obj = { no: 38, name: "custom_search_url", kind: "message", T: null };
    class T {
      constructor() {
        return require("defineProperty").StringValue;
      }
    }
    obj[3] = T;
    items[36] = obj;
    items[37] = {
      no: 39,
      name: "include_game_mentions_in_autocomplete",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.TextAndImagesSettings", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype18 = TextAndImagesSettings$Type.prototype;
prototype18["create"] = function create(arr) {
  let obj = { emojiPickerCollapsedSections: [], stickerPickerCollapsedSections: [], soundboardPickerCollapsedSections: [], dmSpamFilterV2: 0, searchProvider: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype18["internalBinaryRead"] = function internalBinaryRead(pos) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    const BoolValue = defineProperty.BoolValue;
    obj.includeGameMentionsInAutocomplete = BoolValue.internalBinaryRead(pos, pos.uint32(), arg2, obj.includeGameMentionsInAutocomplete);
  }
  return obj;
};
prototype18["internalBinaryWrite"] = function internalBinaryWrite(diversitySurrogate, tag, writeUnknownFields) {
  let length;
  let length2;
  let length3;
  if (diversitySurrogate.diversitySurrogate) {
    let joined27 = require;
    const StringValue = defineProperty.StringValue;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = StringValue.internalBinaryWrite(diversitySurrogate.diversitySurrogate, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = StringValue.internalBinaryWrite(diversitySurrogate.diversitySurrogate, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.useRichChatInput) {
    const BoolValue = defineProperty.BoolValue;
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined1 = BoolValue.internalBinaryWrite(diversitySurrogate.useRichChatInput, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = BoolValue.internalBinaryWrite(diversitySurrogate.useRichChatInput, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.useThreadSidebar) {
    const BoolValue2 = defineProperty.BoolValue;
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined2 = BoolValue2.internalBinaryWrite(diversitySurrogate.useThreadSidebar, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = BoolValue2.internalBinaryWrite(diversitySurrogate.useThreadSidebar, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.renderSpoilers) {
    const StringValue2 = defineProperty.StringValue;
    const tagResult3 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined3 = StringValue2.internalBinaryWrite(diversitySurrogate.renderSpoilers, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = StringValue2.internalBinaryWrite(diversitySurrogate.renderSpoilers, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let num5 = 0;
  if (0 < diversitySurrogate.emojiPickerCollapsedSections.length) {
    do {
      let tmp13 = require;
      let tmp14 = dependencyMap;
      let tagResult4 = tag.tag(5, 01307__.WireType.LengthDelimited);
      let stringResult = tagResult4.string(diversitySurrogate.emojiPickerCollapsedSections[num5]);
      num5 = num5 + 1;
      length = diversitySurrogate.emojiPickerCollapsedSections.length;
    } while (num5 < length);
  }
  let num6 = 0;
  if (0 < diversitySurrogate.stickerPickerCollapsedSections.length) {
    do {
      let tmp16 = require;
      let tmp17 = dependencyMap;
      let tagResult5 = tag.tag(6, 01307__.WireType.LengthDelimited);
      let stringResult1 = tagResult5.string(diversitySurrogate.stickerPickerCollapsedSections[num6]);
      num6 = num6 + 1;
      length2 = diversitySurrogate.stickerPickerCollapsedSections.length;
    } while (num6 < length2);
  }
  if (diversitySurrogate.viewImageDescriptions) {
    const BoolValue3 = defineProperty.BoolValue;
    const tagResult6 = tag.tag(7, 01307__.WireType.LengthDelimited);
    const joined4 = BoolValue3.internalBinaryWrite(diversitySurrogate.viewImageDescriptions, tag.tag(7, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = BoolValue3.internalBinaryWrite(diversitySurrogate.viewImageDescriptions, tag.tag(7, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.showCommandSuggestions) {
    const BoolValue4 = defineProperty.BoolValue;
    const tagResult7 = tag.tag(8, 01307__.WireType.LengthDelimited);
    const joined5 = BoolValue4.internalBinaryWrite(diversitySurrogate.showCommandSuggestions, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult5 = BoolValue4.internalBinaryWrite(diversitySurrogate.showCommandSuggestions, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.inlineAttachmentMedia) {
    const BoolValue5 = defineProperty.BoolValue;
    const tagResult8 = tag.tag(9, 01307__.WireType.LengthDelimited);
    const joined6 = BoolValue5.internalBinaryWrite(diversitySurrogate.inlineAttachmentMedia, tag.tag(9, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult6 = BoolValue5.internalBinaryWrite(diversitySurrogate.inlineAttachmentMedia, tag.tag(9, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.inlineEmbedMedia) {
    const BoolValue6 = defineProperty.BoolValue;
    const tagResult9 = tag.tag(10, 01307__.WireType.LengthDelimited);
    const joined7 = BoolValue6.internalBinaryWrite(diversitySurrogate.inlineEmbedMedia, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult7 = BoolValue6.internalBinaryWrite(diversitySurrogate.inlineEmbedMedia, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.gifAutoPlay) {
    const BoolValue7 = defineProperty.BoolValue;
    const tagResult10 = tag.tag(11, 01307__.WireType.LengthDelimited);
    const joined8 = BoolValue7.internalBinaryWrite(diversitySurrogate.gifAutoPlay, tag.tag(11, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult8 = BoolValue7.internalBinaryWrite(diversitySurrogate.gifAutoPlay, tag.tag(11, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.renderEmbeds) {
    const BoolValue8 = defineProperty.BoolValue;
    const tagResult11 = tag.tag(12, 01307__.WireType.LengthDelimited);
    const joined9 = BoolValue8.internalBinaryWrite(diversitySurrogate.renderEmbeds, tag.tag(12, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult9 = BoolValue8.internalBinaryWrite(diversitySurrogate.renderEmbeds, tag.tag(12, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.renderReactions) {
    const BoolValue9 = defineProperty.BoolValue;
    const tagResult12 = tag.tag(13, 01307__.WireType.LengthDelimited);
    const joined10 = BoolValue9.internalBinaryWrite(diversitySurrogate.renderReactions, tag.tag(13, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult10 = BoolValue9.internalBinaryWrite(diversitySurrogate.renderReactions, tag.tag(13, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.animateEmoji) {
    const BoolValue10 = defineProperty.BoolValue;
    const tagResult13 = tag.tag(14, 01307__.WireType.LengthDelimited);
    const joined11 = BoolValue10.internalBinaryWrite(diversitySurrogate.animateEmoji, tag.tag(14, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult11 = BoolValue10.internalBinaryWrite(diversitySurrogate.animateEmoji, tag.tag(14, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.animateStickers) {
    const UInt32Value = defineProperty.UInt32Value;
    const tagResult14 = tag.tag(15, 01307__.WireType.LengthDelimited);
    const joined12 = UInt32Value.internalBinaryWrite(diversitySurrogate.animateStickers, tag.tag(15, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult12 = UInt32Value.internalBinaryWrite(diversitySurrogate.animateStickers, tag.tag(15, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.enableTtsCommand) {
    const BoolValue11 = defineProperty.BoolValue;
    const tagResult15 = tag.tag(16, 01307__.WireType.LengthDelimited);
    const joined13 = BoolValue11.internalBinaryWrite(diversitySurrogate.enableTtsCommand, tag.tag(16, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult13 = BoolValue11.internalBinaryWrite(diversitySurrogate.enableTtsCommand, tag.tag(16, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.messageDisplayCompact) {
    const BoolValue12 = defineProperty.BoolValue;
    const tagResult16 = tag.tag(17, 01307__.WireType.LengthDelimited);
    const joined14 = BoolValue12.internalBinaryWrite(diversitySurrogate.messageDisplayCompact, tag.tag(17, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult14 = BoolValue12.internalBinaryWrite(diversitySurrogate.messageDisplayCompact, tag.tag(17, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.explicitContentFilter) {
    const UInt32Value2 = defineProperty.UInt32Value;
    const tagResult17 = tag.tag(19, 01307__.WireType.LengthDelimited);
    const joined15 = UInt32Value2.internalBinaryWrite(diversitySurrogate.explicitContentFilter, tag.tag(19, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult15 = UInt32Value2.internalBinaryWrite(diversitySurrogate.explicitContentFilter, tag.tag(19, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.viewNsfwGuilds) {
    const BoolValue13 = defineProperty.BoolValue;
    const tagResult18 = tag.tag(20, 01307__.WireType.LengthDelimited);
    const joined16 = BoolValue13.internalBinaryWrite(diversitySurrogate.viewNsfwGuilds, tag.tag(20, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult16 = BoolValue13.internalBinaryWrite(diversitySurrogate.viewNsfwGuilds, tag.tag(20, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.convertEmoticons) {
    const BoolValue14 = defineProperty.BoolValue;
    const tagResult19 = tag.tag(21, 01307__.WireType.LengthDelimited);
    const joined17 = BoolValue14.internalBinaryWrite(diversitySurrogate.convertEmoticons, tag.tag(21, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult17 = BoolValue14.internalBinaryWrite(diversitySurrogate.convertEmoticons, tag.tag(21, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.expressionSuggestionsEnabled) {
    const BoolValue15 = defineProperty.BoolValue;
    const tagResult20 = tag.tag(22, 01307__.WireType.LengthDelimited);
    const joined18 = BoolValue15.internalBinaryWrite(diversitySurrogate.expressionSuggestionsEnabled, tag.tag(22, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult18 = BoolValue15.internalBinaryWrite(diversitySurrogate.expressionSuggestionsEnabled, tag.tag(22, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.viewNsfwCommands) {
    const BoolValue16 = defineProperty.BoolValue;
    const tagResult21 = tag.tag(23, 01307__.WireType.LengthDelimited);
    const joined19 = BoolValue16.internalBinaryWrite(diversitySurrogate.viewNsfwCommands, tag.tag(23, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult19 = BoolValue16.internalBinaryWrite(diversitySurrogate.viewNsfwCommands, tag.tag(23, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.useLegacyChatInput) {
    const BoolValue17 = defineProperty.BoolValue;
    const tagResult22 = tag.tag(24, 01307__.WireType.LengthDelimited);
    const joined20 = BoolValue17.internalBinaryWrite(diversitySurrogate.useLegacyChatInput, tag.tag(24, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult20 = BoolValue17.internalBinaryWrite(diversitySurrogate.useLegacyChatInput, tag.tag(24, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let num24 = 0;
  if (0 < diversitySurrogate.soundboardPickerCollapsedSections.length) {
    do {
      let tmp70 = require;
      let tmp71 = dependencyMap;
      let tagResult23 = tag.tag(25, 01307__.WireType.LengthDelimited);
      let stringResult2 = tagResult23.string(diversitySurrogate.soundboardPickerCollapsedSections[num24]);
      num24 = num24 + 1;
      length3 = diversitySurrogate.soundboardPickerCollapsedSections.length;
    } while (num24 < length3);
  }
  if (diversitySurrogate.dmSpamFilter) {
    const UInt32Value3 = defineProperty.UInt32Value;
    const tagResult24 = tag.tag(26, 01307__.WireType.LengthDelimited);
    const joined21 = UInt32Value3.internalBinaryWrite(diversitySurrogate.dmSpamFilter, tag.tag(26, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult21 = UInt32Value3.internalBinaryWrite(diversitySurrogate.dmSpamFilter, tag.tag(26, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (0 !== diversitySurrogate.dmSpamFilterV2) {
    tag.tag(27, 01307__.WireType.Varint).int32(diversitySurrogate.dmSpamFilterV2);
    const tagResult25 = tag.tag(27, 01307__.WireType.Varint);
  }
  if (diversitySurrogate.includeStickersInAutocomplete) {
    const BoolValue18 = defineProperty.BoolValue;
    const tagResult26 = tag.tag(28, 01307__.WireType.LengthDelimited);
    const joined22 = BoolValue18.internalBinaryWrite(diversitySurrogate.includeStickersInAutocomplete, tag.tag(28, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult22 = BoolValue18.internalBinaryWrite(diversitySurrogate.includeStickersInAutocomplete, tag.tag(28, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.explicitContentSettings) {
    const tagResult27 = tag.tag(29, 01307__.WireType.LengthDelimited);
    const joined23 = tmp21.internalBinaryWrite(diversitySurrogate.explicitContentSettings, tag.tag(29, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult23 = tmp21.internalBinaryWrite(diversitySurrogate.explicitContentSettings, tag.tag(29, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.keywordFilterSettings) {
    const tagResult28 = tag.tag(30, 01307__.WireType.LengthDelimited);
    const joined24 = tmp24.internalBinaryWrite(diversitySurrogate.keywordFilterSettings, tag.tag(30, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult24 = tmp24.internalBinaryWrite(diversitySurrogate.keywordFilterSettings, tag.tag(30, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.includeSoundmojiInAutocomplete) {
    const BoolValue19 = defineProperty.BoolValue;
    const tagResult29 = tag.tag(31, 01307__.WireType.LengthDelimited);
    const joined25 = BoolValue19.internalBinaryWrite(diversitySurrogate.includeSoundmojiInAutocomplete, tag.tag(31, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult25 = BoolValue19.internalBinaryWrite(diversitySurrogate.includeSoundmojiInAutocomplete, tag.tag(31, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.goreContentSettings) {
    const tagResult30 = tag.tag(32, 01307__.WireType.LengthDelimited);
    const joined26 = tmp22.internalBinaryWrite(diversitySurrogate.goreContentSettings, tag.tag(32, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult26 = tmp22.internalBinaryWrite(diversitySurrogate.goreContentSettings, tag.tag(32, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.defaultReactionEmoji) {
    const tagResult31 = tag.tag(33, 01307__.WireType.LengthDelimited);
    joined27 = inAppFeedbackStateType.internalBinaryWrite(diversitySurrogate.defaultReactionEmoji, tag.tag(33, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult27 = inAppFeedbackStateType.internalBinaryWrite(diversitySurrogate.defaultReactionEmoji, tag.tag(33, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.showMentionSuggestions) {
    joined27 = require;
    joined27 = dependencyMap;
    const BoolValue20 = defineProperty.BoolValue;
    const tagResult32 = tag.tag(34, 01307__.WireType.LengthDelimited);
    joined27 = BoolValue20.internalBinaryWrite(diversitySurrogate.showMentionSuggestions, tag.tag(34, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult28 = BoolValue20.internalBinaryWrite(diversitySurrogate.showMentionSuggestions, tag.tag(34, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.selfHarmContentSettings) {
    joined27 = tmp23;
    joined27 = require;
    joined27 = dependencyMap;
    const tagResult33 = tag.tag(35, 01307__.WireType.LengthDelimited);
    joined27 = tmp23.internalBinaryWrite(diversitySurrogate.selfHarmContentSettings, tag.tag(35, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult29 = tmp23.internalBinaryWrite(diversitySurrogate.selfHarmContentSettings, tag.tag(35, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.isCrossDmSearchEnabled) {
    joined27 = require;
    joined27 = dependencyMap;
    const BoolValue21 = defineProperty.BoolValue;
    const tagResult34 = tag.tag(36, 01307__.WireType.LengthDelimited);
    joined27 = BoolValue21.internalBinaryWrite(diversitySurrogate.isCrossDmSearchEnabled, tag.tag(36, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult30 = BoolValue21.internalBinaryWrite(diversitySurrogate.isCrossDmSearchEnabled, tag.tag(36, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (0 !== diversitySurrogate.searchProvider) {
    joined27 = require;
    joined27 = dependencyMap;
    joined27 = tag.tag(37, 01307__.WireType.Varint).int32(diversitySurrogate.searchProvider);
    const tagResult35 = tag.tag(37, 01307__.WireType.Varint);
  }
  if (diversitySurrogate.customSearchUrl) {
    joined27 = require;
    joined27 = dependencyMap;
    const StringValue3 = defineProperty.StringValue;
    const tagResult36 = tag.tag(38, 01307__.WireType.LengthDelimited);
    joined27 = StringValue3.internalBinaryWrite(diversitySurrogate.customSearchUrl, tag.tag(38, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult31 = StringValue3.internalBinaryWrite(diversitySurrogate.customSearchUrl, tag.tag(38, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (diversitySurrogate.includeGameMentionsInAutocomplete) {
    joined27 = require;
    joined27 = dependencyMap;
    const BoolValue22 = defineProperty.BoolValue;
    const tagResult37 = tag.tag(39, 01307__.WireType.LengthDelimited);
    joined27 = BoolValue22.internalBinaryWrite(diversitySurrogate.includeGameMentionsInAutocomplete, tag.tag(39, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult32 = BoolValue22.internalBinaryWrite(diversitySurrogate.includeGameMentionsInAutocomplete, tag.tag(39, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      joined27 = require;
      joined27 = dependencyMap;
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    joined27 = onWrite(this.typeName, diversitySurrogate, tag);
  }
  return tag;
};
const textAndImagesSettingsType = new TextAndImagesSettings$Type();
class NotificationSettings$Type extends MessageType19 {
  constructor() {
    obj = {
      no: 1,
      name: "show_in_app_notifications",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items = [, , , , , , , , , , , , , , , , , , , , , , , , ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "notify_friends_on_go_live",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[2] = { no: 3, name: "notification_center_acked_before_id", kind: "scalar", T: 6 };
    items[3] = {
      no: 4,
      name: "enable_burst_reaction_notifications",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[4] = {
      no: 5,
      name: "quiet_mode",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[5] = { no: 6, name: "focus_mode_expires_at_ms", kind: "scalar", T: 6 };
    items[6] = {
      no: 7,
      name: "reaction_notifications",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.ReactionNotificationType", closure_6];
            return items;
          }
    };
    items[7] = {
      no: 8,
      name: "game_activity_notifications",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.GameActivityNotificationType", closure_7];
            return items;
          }
    };
    items[8] = {
      no: 9,
      name: "custom_status_push_notifications",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.CustomStatusPushNotificationType", closure_8];
            return items;
          }
    };
    items[9] = {
      no: 10,
      name: "game_activity_exclude_steam_notifications",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[10] = {
      no: 11,
      name: "enable_voice_activity_notifications",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[11] = {
      no: 12,
      name: "enable_friend_online_notifications",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[12] = {
      no: 13,
      name: "enable_user_resurrection_notifications",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[13] = {
      no: 14,
      name: "enable_friend_anniversary_notifications",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[14] = {
      no: 15,
      name: "enable_game_update_notifications",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[15] = {
      no: 16,
      name: "enable_profile_updates_notifications",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[16] = {
      no: 17,
      name: "enable_server_trending_notifications",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[17] = {
      no: 18,
      name: "enable_dm_reply_nudge_reminders",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[18] = {
      no: 19,
      name: "enable_summary_reminder_notifications",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[19] = {
      no: 20,
      name: "enable_gdm_all_reaction_notifications",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[20] = {
      no: 21,
      name: "enable_friend_gaming_activity_notifications",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[21] = {
      no: 22,
      name: "enable_upcoming_server_event_notifications",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[22] = {
      no: 23,
      name: "enable_screen_downtime_schedule_notifications",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    obj = { no: 24, name: "notify_friends_on_profile_update", kind: "message", T: null };
    class T {
      constructor() {
        return require("defineProperty").BoolValue;
      }
    }
    obj[3] = T;
    items[23] = obj;
    items[24] = {
      no: 25,
      name: "notify_friends_on_come_online",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.NotificationSettings", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype19 = NotificationSettings$Type.prototype;
prototype19["create"] = function create(arr) {
  let obj = { notificationCenterAckedBeforeId: "0", focusModeExpiresAtMs: "0", reactionNotifications: 0, gameActivityNotifications: 0, customStatusPushNotifications: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype19["internalBinaryRead"] = function internalBinaryRead(pos) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    const BoolValue = defineProperty.BoolValue;
    obj.notifyFriendsOnComeOnline = BoolValue.internalBinaryRead(pos, pos.uint32(), arg2, obj.notifyFriendsOnComeOnline);
  }
  return obj;
};
prototype19["internalBinaryWrite"] = function internalBinaryWrite(showInAppNotifications, tag, writeUnknownFields) {
  if (showInAppNotifications.showInAppNotifications) {
    const BoolValue = defineProperty.BoolValue;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = BoolValue.internalBinaryWrite(showInAppNotifications.showInAppNotifications, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = BoolValue.internalBinaryWrite(showInAppNotifications.showInAppNotifications, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (showInAppNotifications.notifyFriendsOnGoLive) {
    const BoolValue2 = defineProperty.BoolValue;
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined1 = BoolValue2.internalBinaryWrite(showInAppNotifications.notifyFriendsOnGoLive, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = BoolValue2.internalBinaryWrite(showInAppNotifications.notifyFriendsOnGoLive, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("0" !== showInAppNotifications.notificationCenterAckedBeforeId) {
    tag.tag(3, 01307__.WireType.Bit64).fixed64(showInAppNotifications.notificationCenterAckedBeforeId);
    const tagResult2 = tag.tag(3, 01307__.WireType.Bit64);
  }
  if (showInAppNotifications.enableBurstReactionNotifications) {
    const BoolValue3 = defineProperty.BoolValue;
    const tagResult3 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined2 = BoolValue3.internalBinaryWrite(showInAppNotifications.enableBurstReactionNotifications, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = BoolValue3.internalBinaryWrite(showInAppNotifications.enableBurstReactionNotifications, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (showInAppNotifications.quietMode) {
    const BoolValue4 = defineProperty.BoolValue;
    const tagResult4 = tag.tag(5, 01307__.WireType.LengthDelimited);
    const joined3 = BoolValue4.internalBinaryWrite(showInAppNotifications.quietMode, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = BoolValue4.internalBinaryWrite(showInAppNotifications.quietMode, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("0" !== showInAppNotifications.focusModeExpiresAtMs) {
    tag.tag(6, 01307__.WireType.Bit64).fixed64(showInAppNotifications.focusModeExpiresAtMs);
    const tagResult5 = tag.tag(6, 01307__.WireType.Bit64);
  }
  if (0 !== showInAppNotifications.reactionNotifications) {
    tag.tag(7, 01307__.WireType.Varint).int32(showInAppNotifications.reactionNotifications);
    const tagResult6 = tag.tag(7, 01307__.WireType.Varint);
  }
  if (0 !== showInAppNotifications.gameActivityNotifications) {
    tag.tag(8, 01307__.WireType.Varint).int32(showInAppNotifications.gameActivityNotifications);
    const tagResult7 = tag.tag(8, 01307__.WireType.Varint);
  }
  if (0 !== showInAppNotifications.customStatusPushNotifications) {
    tag.tag(9, 01307__.WireType.Varint).int32(showInAppNotifications.customStatusPushNotifications);
    const tagResult8 = tag.tag(9, 01307__.WireType.Varint);
  }
  if (showInAppNotifications.gameActivityExcludeSteamNotifications) {
    const BoolValue5 = defineProperty.BoolValue;
    const tagResult9 = tag.tag(10, 01307__.WireType.LengthDelimited);
    const joined4 = BoolValue5.internalBinaryWrite(showInAppNotifications.gameActivityExcludeSteamNotifications, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = BoolValue5.internalBinaryWrite(showInAppNotifications.gameActivityExcludeSteamNotifications, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (showInAppNotifications.enableVoiceActivityNotifications) {
    const BoolValue6 = defineProperty.BoolValue;
    const tagResult10 = tag.tag(11, 01307__.WireType.LengthDelimited);
    const joined5 = BoolValue6.internalBinaryWrite(showInAppNotifications.enableVoiceActivityNotifications, tag.tag(11, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult5 = BoolValue6.internalBinaryWrite(showInAppNotifications.enableVoiceActivityNotifications, tag.tag(11, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (showInAppNotifications.enableFriendOnlineNotifications) {
    const BoolValue7 = defineProperty.BoolValue;
    const tagResult11 = tag.tag(12, 01307__.WireType.LengthDelimited);
    const joined6 = BoolValue7.internalBinaryWrite(showInAppNotifications.enableFriendOnlineNotifications, tag.tag(12, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult6 = BoolValue7.internalBinaryWrite(showInAppNotifications.enableFriendOnlineNotifications, tag.tag(12, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (showInAppNotifications.enableUserResurrectionNotifications) {
    const BoolValue8 = defineProperty.BoolValue;
    const tagResult12 = tag.tag(13, 01307__.WireType.LengthDelimited);
    const joined7 = BoolValue8.internalBinaryWrite(showInAppNotifications.enableUserResurrectionNotifications, tag.tag(13, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult7 = BoolValue8.internalBinaryWrite(showInAppNotifications.enableUserResurrectionNotifications, tag.tag(13, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (showInAppNotifications.enableFriendAnniversaryNotifications) {
    const BoolValue9 = defineProperty.BoolValue;
    const tagResult13 = tag.tag(14, 01307__.WireType.LengthDelimited);
    const joined8 = BoolValue9.internalBinaryWrite(showInAppNotifications.enableFriendAnniversaryNotifications, tag.tag(14, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult8 = BoolValue9.internalBinaryWrite(showInAppNotifications.enableFriendAnniversaryNotifications, tag.tag(14, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (showInAppNotifications.enableGameUpdateNotifications) {
    const BoolValue10 = defineProperty.BoolValue;
    const tagResult14 = tag.tag(15, 01307__.WireType.LengthDelimited);
    const joined9 = BoolValue10.internalBinaryWrite(showInAppNotifications.enableGameUpdateNotifications, tag.tag(15, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult9 = BoolValue10.internalBinaryWrite(showInAppNotifications.enableGameUpdateNotifications, tag.tag(15, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (showInAppNotifications.enableProfileUpdatesNotifications) {
    const BoolValue11 = defineProperty.BoolValue;
    const tagResult15 = tag.tag(16, 01307__.WireType.LengthDelimited);
    const joined10 = BoolValue11.internalBinaryWrite(showInAppNotifications.enableProfileUpdatesNotifications, tag.tag(16, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult10 = BoolValue11.internalBinaryWrite(showInAppNotifications.enableProfileUpdatesNotifications, tag.tag(16, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (showInAppNotifications.enableServerTrendingNotifications) {
    const BoolValue12 = defineProperty.BoolValue;
    const tagResult16 = tag.tag(17, 01307__.WireType.LengthDelimited);
    const joined11 = BoolValue12.internalBinaryWrite(showInAppNotifications.enableServerTrendingNotifications, tag.tag(17, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult11 = BoolValue12.internalBinaryWrite(showInAppNotifications.enableServerTrendingNotifications, tag.tag(17, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (showInAppNotifications.enableDmReplyNudgeReminders) {
    const BoolValue13 = defineProperty.BoolValue;
    const tagResult17 = tag.tag(18, 01307__.WireType.LengthDelimited);
    const joined12 = BoolValue13.internalBinaryWrite(showInAppNotifications.enableDmReplyNudgeReminders, tag.tag(18, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult12 = BoolValue13.internalBinaryWrite(showInAppNotifications.enableDmReplyNudgeReminders, tag.tag(18, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (showInAppNotifications.enableSummaryReminderNotifications) {
    const BoolValue14 = defineProperty.BoolValue;
    const tagResult18 = tag.tag(19, 01307__.WireType.LengthDelimited);
    const joined13 = BoolValue14.internalBinaryWrite(showInAppNotifications.enableSummaryReminderNotifications, tag.tag(19, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult13 = BoolValue14.internalBinaryWrite(showInAppNotifications.enableSummaryReminderNotifications, tag.tag(19, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (showInAppNotifications.enableGdmAllReactionNotifications) {
    const BoolValue15 = defineProperty.BoolValue;
    const tagResult19 = tag.tag(20, 01307__.WireType.LengthDelimited);
    const joined14 = BoolValue15.internalBinaryWrite(showInAppNotifications.enableGdmAllReactionNotifications, tag.tag(20, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult14 = BoolValue15.internalBinaryWrite(showInAppNotifications.enableGdmAllReactionNotifications, tag.tag(20, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (showInAppNotifications.enableFriendGamingActivityNotifications) {
    const BoolValue16 = defineProperty.BoolValue;
    const tagResult20 = tag.tag(21, 01307__.WireType.LengthDelimited);
    const joined15 = BoolValue16.internalBinaryWrite(showInAppNotifications.enableFriendGamingActivityNotifications, tag.tag(21, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult15 = BoolValue16.internalBinaryWrite(showInAppNotifications.enableFriendGamingActivityNotifications, tag.tag(21, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (showInAppNotifications.enableUpcomingServerEventNotifications) {
    const BoolValue17 = defineProperty.BoolValue;
    const tagResult21 = tag.tag(22, 01307__.WireType.LengthDelimited);
    const joined16 = BoolValue17.internalBinaryWrite(showInAppNotifications.enableUpcomingServerEventNotifications, tag.tag(22, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult16 = BoolValue17.internalBinaryWrite(showInAppNotifications.enableUpcomingServerEventNotifications, tag.tag(22, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (showInAppNotifications.enableScreenDowntimeScheduleNotifications) {
    const BoolValue18 = defineProperty.BoolValue;
    const tagResult22 = tag.tag(23, 01307__.WireType.LengthDelimited);
    const joined17 = BoolValue18.internalBinaryWrite(showInAppNotifications.enableScreenDowntimeScheduleNotifications, tag.tag(23, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult17 = BoolValue18.internalBinaryWrite(showInAppNotifications.enableScreenDowntimeScheduleNotifications, tag.tag(23, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (showInAppNotifications.notifyFriendsOnProfileUpdate) {
    const BoolValue19 = defineProperty.BoolValue;
    const tagResult23 = tag.tag(24, 01307__.WireType.LengthDelimited);
    const joined18 = BoolValue19.internalBinaryWrite(showInAppNotifications.notifyFriendsOnProfileUpdate, tag.tag(24, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult18 = BoolValue19.internalBinaryWrite(showInAppNotifications.notifyFriendsOnProfileUpdate, tag.tag(24, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (showInAppNotifications.notifyFriendsOnComeOnline) {
    const BoolValue20 = defineProperty.BoolValue;
    const tagResult24 = tag.tag(25, 01307__.WireType.LengthDelimited);
    const joined19 = BoolValue20.internalBinaryWrite(showInAppNotifications.notifyFriendsOnComeOnline, tag.tag(25, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult19 = BoolValue20.internalBinaryWrite(showInAppNotifications.notifyFriendsOnComeOnline, tag.tag(25, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, showInAppNotifications, tag);
  }
  return tag;
};
const notificationSettingsType = new NotificationSettings$Type();
class PrivacySettings$Type extends MessageType20 {
  constructor() {
    obj = {
      no: 1,
      name: "allow_activity_party_privacy_friends",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "allow_activity_party_privacy_voice_channel",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[2] = { no: 3, name: "restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 };
    items[3] = { no: 4, name: "default_guilds_restricted", kind: "scalar", T: 8 };
    items[4] = { no: 7, name: "allow_accessibility_detection", kind: "scalar", T: 8 };
    items[5] = {
      no: 8,
      name: "detect_platform_accounts",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[6] = {
      no: 9,
      name: "passwordless",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[7] = {
      no: 10,
      name: "contact_sync_enabled",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[8] = {
      no: 11,
      name: "friend_source_flags",
      kind: "message",
      T() {
            return callback(1337).UInt32Value;
          }
    };
    items[9] = {
      no: 12,
      name: "friend_discovery_flags",
      kind: "message",
      T() {
            return callback(1337).UInt32Value;
          }
    };
    items[10] = { no: 13, name: "activity_restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 };
    items[11] = {
      no: 14,
      name: "default_guilds_activity_restricted",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.GuildActivityStatusRestrictionDefault", closure_10];
            return items;
          }
    };
    items[12] = { no: 15, name: "activity_joining_restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 };
    items[13] = { no: 16, name: "message_request_restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 };
    items[14] = {
      no: 17,
      name: "default_message_request_restricted",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[15] = {
      no: 18,
      name: "drops_opted_out",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[16] = {
      no: 19,
      name: "non_spam_retraining_opt_in",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[17] = {
      no: 20,
      name: "family_center_enabled",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[18] = {
      no: 21,
      name: "family_center_enabled_v2",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[19] = {
      no: 22,
      name: "hide_legacy_username",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[20] = {
      no: 23,
      name: "inappropriate_conversation_warnings",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[21] = {
      no: 24,
      name: "recent_games_enabled",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[22] = {
      no: 25,
      name: "guilds_leaderboard_opt_out_default",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.GuildsLeaderboardOptOutDefault", closure_12];
            return items;
          }
    };
    items[23] = {
      no: 26,
      name: "allow_game_friend_dms_in_discord",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[24] = {
      no: 27,
      name: "default_guilds_restricted_v2",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[25] = {
      no: 28,
      name: "slayer_sdk_receive_dms_in_game",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.SlayerSDKReceiveInGameDMs", closure_13];
            return items;
          }
    };
    items[26] = {
      no: 29,
      name: "default_guilds_activity_restricted_v2",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.GuildActivityStatusRestrictionDefaultV2", closure_11];
            return items;
          }
    };
    items[27] = {
      no: 30,
      name: "quests_3p_data_opted_out",
      kind: "message",
      jsonName: "quests3pDataOptedOut",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[28] = {
      no: 31,
      name: "show_local_time",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    obj = { no: 32, name: "profile_visibility", kind: "enum", T: null };
    class T {
      constructor() {
        items = ["discord_protos.discord_users.v1.ProfileVisibility"];
        items[1] = closure_14;
        items[2] = "PROFILE_VISIBILITY_";
        return items;
      }
    }
    obj[3] = T;
    items[29] = obj;
    items[30] = {
      no: 33,
      name: "hide_friend_request_notes",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.PrivacySettings", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype20 = PrivacySettings$Type.prototype;
prototype20["create"] = function create(arr) {
  let obj = { restrictedGuildIds: [], defaultGuildsRestricted: false, allowAccessibilityDetection: false, activityRestrictedGuildIds: [], defaultGuildsActivityRestricted: 0, activityJoiningRestrictedGuildIds: [], messageRequestRestrictedGuildIds: [], guildsLeaderboardOptOutDefault: 0, slayerSdkReceiveDmsInGame: 0, defaultGuildsActivityRestrictedV2: 0, profileVisibility: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype20["internalBinaryRead"] = function internalBinaryRead(pos) {
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
prototype20["internalBinaryWrite"] = function internalBinaryWrite(allowActivityPartyPrivacyFriends, tag, writeUnknownFields) {
  let length;
  let length2;
  let length3;
  let length4;
  if (allowActivityPartyPrivacyFriends.allowActivityPartyPrivacyFriends) {
    let joined23 = require;
    const BoolValue = defineProperty.BoolValue;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = BoolValue.internalBinaryWrite(allowActivityPartyPrivacyFriends.allowActivityPartyPrivacyFriends, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = BoolValue.internalBinaryWrite(allowActivityPartyPrivacyFriends.allowActivityPartyPrivacyFriends, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (allowActivityPartyPrivacyFriends.allowActivityPartyPrivacyVoiceChannel) {
    const BoolValue2 = defineProperty.BoolValue;
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined1 = BoolValue2.internalBinaryWrite(allowActivityPartyPrivacyFriends.allowActivityPartyPrivacyVoiceChannel, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = BoolValue2.internalBinaryWrite(allowActivityPartyPrivacyFriends.allowActivityPartyPrivacyVoiceChannel, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (allowActivityPartyPrivacyFriends.restrictedGuildIds.length) {
    tag.tag(3, 01307__.WireType.LengthDelimited).fork();
    let num4 = 0;
    if (0 < allowActivityPartyPrivacyFriends.restrictedGuildIds.length) {
      do {
        let fixed64Result = tag.fixed64(allowActivityPartyPrivacyFriends.restrictedGuildIds[num4]);
        num4 = num4 + 1;
        length = allowActivityPartyPrivacyFriends.restrictedGuildIds.length;
      } while (num4 < length);
    }
    const joined2 = tag.join();
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
  }
  if (false !== allowActivityPartyPrivacyFriends.defaultGuildsRestricted) {
    tag.tag(4, 01307__.WireType.Varint).bool(allowActivityPartyPrivacyFriends.defaultGuildsRestricted);
    const tagResult3 = tag.tag(4, 01307__.WireType.Varint);
  }
  if (false !== allowActivityPartyPrivacyFriends.allowAccessibilityDetection) {
    tag.tag(7, 01307__.WireType.Varint).bool(allowActivityPartyPrivacyFriends.allowAccessibilityDetection);
    const tagResult4 = tag.tag(7, 01307__.WireType.Varint);
  }
  if (allowActivityPartyPrivacyFriends.detectPlatformAccounts) {
    const BoolValue3 = defineProperty.BoolValue;
    const tagResult5 = tag.tag(8, 01307__.WireType.LengthDelimited);
    const joined3 = BoolValue3.internalBinaryWrite(allowActivityPartyPrivacyFriends.detectPlatformAccounts, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = BoolValue3.internalBinaryWrite(allowActivityPartyPrivacyFriends.detectPlatformAccounts, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (allowActivityPartyPrivacyFriends.passwordless) {
    const BoolValue4 = defineProperty.BoolValue;
    const tagResult6 = tag.tag(9, 01307__.WireType.LengthDelimited);
    const joined4 = BoolValue4.internalBinaryWrite(allowActivityPartyPrivacyFriends.passwordless, tag.tag(9, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = BoolValue4.internalBinaryWrite(allowActivityPartyPrivacyFriends.passwordless, tag.tag(9, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (allowActivityPartyPrivacyFriends.contactSyncEnabled) {
    const BoolValue5 = defineProperty.BoolValue;
    const tagResult7 = tag.tag(10, 01307__.WireType.LengthDelimited);
    const joined5 = BoolValue5.internalBinaryWrite(allowActivityPartyPrivacyFriends.contactSyncEnabled, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = BoolValue5.internalBinaryWrite(allowActivityPartyPrivacyFriends.contactSyncEnabled, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (allowActivityPartyPrivacyFriends.friendSourceFlags) {
    const UInt32Value = defineProperty.UInt32Value;
    const tagResult8 = tag.tag(11, 01307__.WireType.LengthDelimited);
    const joined6 = UInt32Value.internalBinaryWrite(allowActivityPartyPrivacyFriends.friendSourceFlags, tag.tag(11, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult5 = UInt32Value.internalBinaryWrite(allowActivityPartyPrivacyFriends.friendSourceFlags, tag.tag(11, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (allowActivityPartyPrivacyFriends.friendDiscoveryFlags) {
    const UInt32Value2 = defineProperty.UInt32Value;
    const tagResult9 = tag.tag(12, 01307__.WireType.LengthDelimited);
    const joined7 = UInt32Value2.internalBinaryWrite(allowActivityPartyPrivacyFriends.friendDiscoveryFlags, tag.tag(12, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult6 = UInt32Value2.internalBinaryWrite(allowActivityPartyPrivacyFriends.friendDiscoveryFlags, tag.tag(12, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (allowActivityPartyPrivacyFriends.activityRestrictedGuildIds.length) {
    tag.tag(13, 01307__.WireType.LengthDelimited).fork();
    let num14 = 0;
    if (0 < allowActivityPartyPrivacyFriends.activityRestrictedGuildIds.length) {
      do {
        let fixed64Result1 = tag.fixed64(allowActivityPartyPrivacyFriends.activityRestrictedGuildIds[num14]);
        num14 = num14 + 1;
        length2 = allowActivityPartyPrivacyFriends.activityRestrictedGuildIds.length;
      } while (num14 < length2);
    }
    const joined8 = tag.join();
    const tagResult10 = tag.tag(13, 01307__.WireType.LengthDelimited);
  }
  if (0 !== allowActivityPartyPrivacyFriends.defaultGuildsActivityRestricted) {
    tag.tag(14, 01307__.WireType.Varint).int32(allowActivityPartyPrivacyFriends.defaultGuildsActivityRestricted);
    const tagResult11 = tag.tag(14, 01307__.WireType.Varint);
  }
  if (allowActivityPartyPrivacyFriends.activityJoiningRestrictedGuildIds.length) {
    tag.tag(15, 01307__.WireType.LengthDelimited).fork();
    let num19 = 0;
    if (0 < allowActivityPartyPrivacyFriends.activityJoiningRestrictedGuildIds.length) {
      do {
        let fixed64Result2 = tag.fixed64(allowActivityPartyPrivacyFriends.activityJoiningRestrictedGuildIds[num19]);
        num19 = num19 + 1;
        length3 = allowActivityPartyPrivacyFriends.activityJoiningRestrictedGuildIds.length;
      } while (num19 < length3);
    }
    const joined9 = tag.join();
    const tagResult12 = tag.tag(15, 01307__.WireType.LengthDelimited);
  }
  if (allowActivityPartyPrivacyFriends.messageRequestRestrictedGuildIds.length) {
    tag.tag(16, 01307__.WireType.LengthDelimited).fork();
    let num22 = 0;
    if (0 < allowActivityPartyPrivacyFriends.messageRequestRestrictedGuildIds.length) {
      do {
        let fixed64Result3 = tag.fixed64(allowActivityPartyPrivacyFriends.messageRequestRestrictedGuildIds[num22]);
        num22 = num22 + 1;
        length4 = allowActivityPartyPrivacyFriends.messageRequestRestrictedGuildIds.length;
      } while (num22 < length4);
    }
    const joined10 = tag.join();
    const tagResult13 = tag.tag(16, 01307__.WireType.LengthDelimited);
  }
  if (allowActivityPartyPrivacyFriends.defaultMessageRequestRestricted) {
    const BoolValue6 = defineProperty.BoolValue;
    const tagResult14 = tag.tag(17, 01307__.WireType.LengthDelimited);
    const joined11 = BoolValue6.internalBinaryWrite(allowActivityPartyPrivacyFriends.defaultMessageRequestRestricted, tag.tag(17, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult7 = BoolValue6.internalBinaryWrite(allowActivityPartyPrivacyFriends.defaultMessageRequestRestricted, tag.tag(17, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (allowActivityPartyPrivacyFriends.dropsOptedOut) {
    const BoolValue7 = defineProperty.BoolValue;
    const tagResult15 = tag.tag(18, 01307__.WireType.LengthDelimited);
    const joined12 = BoolValue7.internalBinaryWrite(allowActivityPartyPrivacyFriends.dropsOptedOut, tag.tag(18, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult8 = BoolValue7.internalBinaryWrite(allowActivityPartyPrivacyFriends.dropsOptedOut, tag.tag(18, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (allowActivityPartyPrivacyFriends.nonSpamRetrainingOptIn) {
    const BoolValue8 = defineProperty.BoolValue;
    const tagResult16 = tag.tag(19, 01307__.WireType.LengthDelimited);
    const joined13 = BoolValue8.internalBinaryWrite(allowActivityPartyPrivacyFriends.nonSpamRetrainingOptIn, tag.tag(19, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult9 = BoolValue8.internalBinaryWrite(allowActivityPartyPrivacyFriends.nonSpamRetrainingOptIn, tag.tag(19, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (allowActivityPartyPrivacyFriends.familyCenterEnabled) {
    const BoolValue9 = defineProperty.BoolValue;
    const tagResult17 = tag.tag(20, 01307__.WireType.LengthDelimited);
    const joined14 = BoolValue9.internalBinaryWrite(allowActivityPartyPrivacyFriends.familyCenterEnabled, tag.tag(20, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult10 = BoolValue9.internalBinaryWrite(allowActivityPartyPrivacyFriends.familyCenterEnabled, tag.tag(20, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (allowActivityPartyPrivacyFriends.familyCenterEnabledV2) {
    const BoolValue10 = defineProperty.BoolValue;
    const tagResult18 = tag.tag(21, 01307__.WireType.LengthDelimited);
    const joined15 = BoolValue10.internalBinaryWrite(allowActivityPartyPrivacyFriends.familyCenterEnabledV2, tag.tag(21, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult11 = BoolValue10.internalBinaryWrite(allowActivityPartyPrivacyFriends.familyCenterEnabledV2, tag.tag(21, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (allowActivityPartyPrivacyFriends.hideLegacyUsername) {
    const BoolValue11 = defineProperty.BoolValue;
    const tagResult19 = tag.tag(22, 01307__.WireType.LengthDelimited);
    const joined16 = BoolValue11.internalBinaryWrite(allowActivityPartyPrivacyFriends.hideLegacyUsername, tag.tag(22, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult12 = BoolValue11.internalBinaryWrite(allowActivityPartyPrivacyFriends.hideLegacyUsername, tag.tag(22, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (allowActivityPartyPrivacyFriends.inappropriateConversationWarnings) {
    const BoolValue12 = defineProperty.BoolValue;
    const tagResult20 = tag.tag(23, 01307__.WireType.LengthDelimited);
    const joined17 = BoolValue12.internalBinaryWrite(allowActivityPartyPrivacyFriends.inappropriateConversationWarnings, tag.tag(23, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult13 = BoolValue12.internalBinaryWrite(allowActivityPartyPrivacyFriends.inappropriateConversationWarnings, tag.tag(23, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (allowActivityPartyPrivacyFriends.recentGamesEnabled) {
    const BoolValue13 = defineProperty.BoolValue;
    const tagResult21 = tag.tag(24, 01307__.WireType.LengthDelimited);
    const joined18 = BoolValue13.internalBinaryWrite(allowActivityPartyPrivacyFriends.recentGamesEnabled, tag.tag(24, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult14 = BoolValue13.internalBinaryWrite(allowActivityPartyPrivacyFriends.recentGamesEnabled, tag.tag(24, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (0 !== allowActivityPartyPrivacyFriends.guildsLeaderboardOptOutDefault) {
    tag.tag(25, 01307__.WireType.Varint).int32(allowActivityPartyPrivacyFriends.guildsLeaderboardOptOutDefault);
    const tagResult22 = tag.tag(25, 01307__.WireType.Varint);
  }
  if (allowActivityPartyPrivacyFriends.allowGameFriendDmsInDiscord) {
    const BoolValue14 = defineProperty.BoolValue;
    const tagResult23 = tag.tag(26, 01307__.WireType.LengthDelimited);
    const joined19 = BoolValue14.internalBinaryWrite(allowActivityPartyPrivacyFriends.allowGameFriendDmsInDiscord, tag.tag(26, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult15 = BoolValue14.internalBinaryWrite(allowActivityPartyPrivacyFriends.allowGameFriendDmsInDiscord, tag.tag(26, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (allowActivityPartyPrivacyFriends.defaultGuildsRestrictedV2) {
    const BoolValue15 = defineProperty.BoolValue;
    const tagResult24 = tag.tag(27, 01307__.WireType.LengthDelimited);
    const joined20 = BoolValue15.internalBinaryWrite(allowActivityPartyPrivacyFriends.defaultGuildsRestrictedV2, tag.tag(27, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult16 = BoolValue15.internalBinaryWrite(allowActivityPartyPrivacyFriends.defaultGuildsRestrictedV2, tag.tag(27, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (0 !== allowActivityPartyPrivacyFriends.slayerSdkReceiveDmsInGame) {
    tag.tag(28, 01307__.WireType.Varint).int32(allowActivityPartyPrivacyFriends.slayerSdkReceiveDmsInGame);
    const tagResult25 = tag.tag(28, 01307__.WireType.Varint);
  }
  if (0 !== allowActivityPartyPrivacyFriends.defaultGuildsActivityRestrictedV2) {
    tag.tag(29, 01307__.WireType.Varint).int32(allowActivityPartyPrivacyFriends.defaultGuildsActivityRestrictedV2);
    const tagResult26 = tag.tag(29, 01307__.WireType.Varint);
  }
  if (allowActivityPartyPrivacyFriends.quests3PDataOptedOut) {
    const BoolValue16 = defineProperty.BoolValue;
    const tagResult27 = tag.tag(30, 01307__.WireType.LengthDelimited);
    const joined21 = BoolValue16.internalBinaryWrite(allowActivityPartyPrivacyFriends.quests3PDataOptedOut, tag.tag(30, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult17 = BoolValue16.internalBinaryWrite(allowActivityPartyPrivacyFriends.quests3PDataOptedOut, tag.tag(30, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (allowActivityPartyPrivacyFriends.showLocalTime) {
    const BoolValue17 = defineProperty.BoolValue;
    const tagResult28 = tag.tag(31, 01307__.WireType.LengthDelimited);
    const joined22 = BoolValue17.internalBinaryWrite(allowActivityPartyPrivacyFriends.showLocalTime, tag.tag(31, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult18 = BoolValue17.internalBinaryWrite(allowActivityPartyPrivacyFriends.showLocalTime, tag.tag(31, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (0 !== allowActivityPartyPrivacyFriends.profileVisibility) {
    tag.tag(32, 01307__.WireType.Varint).int32(allowActivityPartyPrivacyFriends.profileVisibility);
    const tagResult29 = tag.tag(32, 01307__.WireType.Varint);
  }
  if (allowActivityPartyPrivacyFriends.hideFriendRequestNotes) {
    joined23 = dependencyMap;
    const BoolValue18 = defineProperty.BoolValue;
    const tagResult30 = tag.tag(33, 01307__.WireType.LengthDelimited);
    joined23 = BoolValue18.internalBinaryWrite(allowActivityPartyPrivacyFriends.hideFriendRequestNotes, tag.tag(33, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult19 = BoolValue18.internalBinaryWrite(allowActivityPartyPrivacyFriends.hideFriendRequestNotes, tag.tag(33, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      joined23 = require;
      joined23 = dependencyMap;
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    joined23 = onWrite(this.typeName, allowActivityPartyPrivacyFriends, tag);
  }
  return tag;
};
const privacySettingsType = new PrivacySettings$Type();
class DebugSettings$Type extends MessageType21 {
  constructor() {
    obj = {
      no: 1,
      name: "rtc_panel_show_voice_states",
      kind: "message",
      T() {
            return callback(table[4]).BoolValue;
          }
    };
    items = [];
    items[0] = obj;
    tmp = new tmp("discord_protos.discord_users.v1.DebugSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype21 = DebugSettings$Type.prototype;
prototype21["create"] = function create(arr) {
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
prototype21["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let BoolValue = defineProperty.BoolValue;
        let tmp24 = BoolValue;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.rtcPanelShowVoiceStates = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.rtcPanelShowVoiceStates);
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
prototype21["internalBinaryWrite"] = function internalBinaryWrite(rtcPanelShowVoiceStates, tag, writeUnknownFields) {
  if (rtcPanelShowVoiceStates.rtcPanelShowVoiceStates) {
    const BoolValue = defineProperty.BoolValue;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = BoolValue.internalBinaryWrite(rtcPanelShowVoiceStates.rtcPanelShowVoiceStates, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = BoolValue.internalBinaryWrite(rtcPanelShowVoiceStates.rtcPanelShowVoiceStates, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, rtcPanelShowVoiceStates, tag);
  }
  return tag;
};
const items15 = [
  {
    no: 1,
    name: "rtc_panel_show_voice_states",
    kind: "message",
    T() {
      return callback(table[4]).BoolValue;
    }
  }
];
let tmp28 = new "binaryReadMap12"("discord_protos.discord_users.v1.DebugSettings", items15, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_43 = tmp28;
class GameLibrarySettings$Type extends MessageType22 {
  constructor() {
    obj = {
      no: 1,
      name: "install_shortcut_desktop",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items = [, , ];
    items[0] = obj;
    obj = { no: 2, name: "install_shortcut_start_menu", kind: "message", T: null };
    class T {
      constructor() {
        return require("defineProperty").BoolValue;
      }
    }
    obj[3] = T;
    items[1] = obj;
    items[2] = {
      no: 3,
      name: "disable_games_tab",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.GameLibrarySettings", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype22 = GameLibrarySettings$Type.prototype;
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
        let tmp32 = require;
        let tmp33 = dependencyMap;
        let BoolValue3 = defineProperty.BoolValue;
        let tmp34 = BoolValue3;
        let tmp35 = pos;
        let tmp36 = readUnknownField;
        obj.installShortcutDesktop = BoolValue3.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.installShortcutDesktop);
      } else if (2 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let BoolValue2 = defineProperty.BoolValue;
        let tmp29 = BoolValue2;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.installShortcutStartMenu = BoolValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.installShortcutStartMenu);
      } else if (3 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let BoolValue = defineProperty.BoolValue;
        let tmp24 = BoolValue;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.disableGamesTab = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.disableGamesTab);
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
prototype22["internalBinaryWrite"] = function internalBinaryWrite(installShortcutDesktop, tag, writeUnknownFields) {
  if (installShortcutDesktop.installShortcutDesktop) {
    const BoolValue = defineProperty.BoolValue;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = BoolValue.internalBinaryWrite(installShortcutDesktop.installShortcutDesktop, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = BoolValue.internalBinaryWrite(installShortcutDesktop.installShortcutDesktop, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (installShortcutDesktop.installShortcutStartMenu) {
    const BoolValue2 = defineProperty.BoolValue;
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined1 = BoolValue2.internalBinaryWrite(installShortcutDesktop.installShortcutStartMenu, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = BoolValue2.internalBinaryWrite(installShortcutDesktop.installShortcutStartMenu, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (installShortcutDesktop.disableGamesTab) {
    const BoolValue3 = defineProperty.BoolValue;
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined2 = BoolValue3.internalBinaryWrite(installShortcutDesktop.disableGamesTab, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = BoolValue3.internalBinaryWrite(installShortcutDesktop.disableGamesTab, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, installShortcutDesktop, tag);
  }
  return tag;
};
const items16 = [
  {
    no: 1,
    name: "install_shortcut_desktop",
    kind: "message",
    T() {
      return callback(1337).BoolValue;
    }
  },
  {
    no: 2,
    name: "install_shortcut_start_menu",
    kind: "message",
    T() {
      return defineProperty.BoolValue;
    }
  },
  {
    no: 3,
    name: "disable_games_tab",
    kind: "message",
    T() {
      return callback(1337).BoolValue;
    }
  }
];
let tmp29 = new "binaryReadMap12"("discord_protos.discord_users.v1.GameLibrarySettings", items16, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_44 = tmp29;
class StatusSettings$Type extends MessageType23 {
  constructor() {
    obj = {
      no: 1,
      name: "status",
      kind: "message",
      T() {
            return callback(1337).StringValue;
          }
    };
    items = [, , , , ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "custom_status",
      kind: "message",
      T() {
            return closure_46;
          }
    };
    obj = { no: 3, name: "show_current_game", kind: "message", T: null };
    class T {
      constructor() {
        return require("defineProperty").BoolValue;
      }
    }
    obj[3] = T;
    items[2] = obj;
    items[3] = { no: 4, name: "status_expires_at_ms", kind: "scalar", T: 6 };
    items[4] = {
      no: 5,
      name: "status_created_at_ms",
      kind: "message",
      T() {
            return callback(1337).UInt64Value;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.StatusSettings", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype23 = StatusSettings$Type.prototype;
prototype23["create"] = function create(arr) {
  let obj = { statusExpiresAtMs: "0" };
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
        let tmp36 = require;
        let tmp37 = dependencyMap;
        let StringValue = defineProperty.StringValue;
        let tmp38 = StringValue;
        let tmp39 = pos;
        let tmp40 = readUnknownField;
        obj.status = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.status);
      } else if (2 === tmp5) {
        let tmp32 = tmp31;
        let tmp33 = tmp31;
        let tmp34 = pos;
        let tmp35 = readUnknownField;
        obj.customStatus = tmp31.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.customStatus);
      } else if (3 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let BoolValue = defineProperty.BoolValue;
        let tmp29 = BoolValue;
        let tmp30 = pos;
        tmp31 = readUnknownField;
        obj.showCurrentGame = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.showCurrentGame);
      } else if (4 === tmp5) {
        let str4 = pos.fixed64();
        obj.statusExpiresAtMs = str4.toString();
      } else if (5 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let UInt64Value = defineProperty.UInt64Value;
        let tmp24 = UInt64Value;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.statusCreatedAtMs = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.statusCreatedAtMs);
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
prototype23["internalBinaryWrite"] = function internalBinaryWrite(status, tag, writeUnknownFields) {
  if (status.status) {
    const StringValue = defineProperty.StringValue;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = StringValue.internalBinaryWrite(status.status, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = StringValue.internalBinaryWrite(status.status, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (status.customStatus) {
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined1 = tmp31.internalBinaryWrite(status.customStatus, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = tmp31.internalBinaryWrite(status.customStatus, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (status.showCurrentGame) {
    const BoolValue = defineProperty.BoolValue;
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined2 = BoolValue.internalBinaryWrite(status.showCurrentGame, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = BoolValue.internalBinaryWrite(status.showCurrentGame, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("0" !== status.statusExpiresAtMs) {
    tag.tag(4, 01307__.WireType.Bit64).fixed64(status.statusExpiresAtMs);
    const tagResult3 = tag.tag(4, 01307__.WireType.Bit64);
  }
  if (status.statusCreatedAtMs) {
    const UInt64Value = defineProperty.UInt64Value;
    const tagResult4 = tag.tag(5, 01307__.WireType.LengthDelimited);
    const joined3 = UInt64Value.internalBinaryWrite(status.statusCreatedAtMs, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = UInt64Value.internalBinaryWrite(status.statusCreatedAtMs, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
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
const items17 = [
  {
    no: 1,
    name: "status",
    kind: "message",
    T() {
      return callback(1337).StringValue;
    }
  },
  {
    no: 2,
    name: "custom_status",
    kind: "message",
    T() {
      return closure_46;
    }
  },
  {
    no: 3,
    name: "show_current_game",
    kind: "message",
    T() {
      return defineProperty.BoolValue;
    }
  },
  { no: 4, name: "status_expires_at_ms", kind: "scalar", T: 6 },
  {
    no: 5,
    name: "status_created_at_ms",
    kind: "message",
    T() {
      return callback(1337).UInt64Value;
    }
  }
];
let tmp30 = new "binaryReadMap12"("discord_protos.discord_users.v1.StatusSettings", items17, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_45 = tmp30;
class CustomStatus$Type extends MessageType24 {
  constructor() {
    items = [, , , , , ];
    items[0] = { no: 1, name: "text", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "emoji_id", kind: "scalar", T: 6 };
    items[2] = { no: 3, name: "emoji_name", kind: "scalar", T: 9 };
    items[3] = { no: 4, name: "expires_at_ms", kind: "scalar", T: 6 };
    items[4] = { no: 5, name: "created_at_ms", kind: "scalar", T: 6 };
    items[5] = {
      no: 6,
      name: "label",
      kind: "message",
      T() {
            return callback(table[4]).StringValue;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.CustomStatus", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype24 = CustomStatus$Type.prototype;
prototype24["create"] = function create(arr) {
  let obj = { text: "", emojiId: "0", emojiName: "", expiresAtMs: "0", createdAtMs: "0" };
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
        obj.text = pos.string();
      } else if (2 === tmp5) {
        let str6 = pos.fixed64();
        obj.emojiId = str6.toString();
      } else if (3 === tmp5) {
        obj.emojiName = pos.string();
      } else if (4 === tmp5) {
        let str5 = pos.fixed64();
        obj.expiresAtMs = str5.toString();
      } else if (5 === tmp5) {
        let str4 = pos.fixed64();
        obj.createdAtMs = str4.toString();
      } else if (6 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let StringValue = defineProperty.StringValue;
        let tmp24 = StringValue;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.label = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.label);
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
prototype24["internalBinaryWrite"] = function internalBinaryWrite(text, tag, writeUnknownFields) {
  if ("" !== text.text) {
    tag.tag(1, 01307__.WireType.LengthDelimited).string(text.text);
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
  }
  if ("0" !== text.emojiId) {
    tag.tag(2, 01307__.WireType.Bit64).fixed64(text.emojiId);
    const tagResult1 = tag.tag(2, 01307__.WireType.Bit64);
  }
  if ("" !== text.emojiName) {
    tag.tag(3, 01307__.WireType.LengthDelimited).string(text.emojiName);
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
  }
  if ("0" !== text.expiresAtMs) {
    tag.tag(4, 01307__.WireType.Bit64).fixed64(text.expiresAtMs);
    const tagResult3 = tag.tag(4, 01307__.WireType.Bit64);
  }
  if ("0" !== text.createdAtMs) {
    tag.tag(5, 01307__.WireType.Bit64).fixed64(text.createdAtMs);
    const tagResult4 = tag.tag(5, 01307__.WireType.Bit64);
  }
  if (text.label) {
    const StringValue = defineProperty.StringValue;
    const tagResult5 = tag.tag(6, 01307__.WireType.LengthDelimited);
    const joined = StringValue.internalBinaryWrite(text.label, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = StringValue.internalBinaryWrite(text.label, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, text, tag);
  }
  return tag;
};
const items18 = [
  { no: 1, name: "text", kind: "scalar", T: 9 },
  { no: 2, name: "emoji_id", kind: "scalar", T: 6 },
  { no: 3, name: "emoji_name", kind: "scalar", T: 9 },
  { no: 4, name: "expires_at_ms", kind: "scalar", T: 6 },
  { no: 5, name: "created_at_ms", kind: "scalar", T: 6 },
  {
    no: 6,
    name: "label",
    kind: "message",
    T() {
      return callback(table[4]).StringValue;
    }
  }
];
let tmp31 = new "binaryReadMap12"("discord_protos.discord_users.v1.CustomStatus", items18, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_46 = tmp31;
class LocalizationSettings$Type extends MessageType25 {
  constructor() {
    obj = {
      no: 1,
      name: "locale",
      kind: "message",
      T() {
            return callback(1337).StringValue;
          }
    };
    items = [, , ];
    items[0] = obj;
    obj = { no: 2, name: "timezone_offset", kind: "message", T: null };
    class T {
      constructor() {
        return require("defineProperty").Int32Value;
      }
    }
    obj[3] = T;
    items[1] = obj;
    items[2] = {
      no: 3,
      name: "timezone_name",
      kind: "message",
      T() {
            return callback(1337).StringValue;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.LocalizationSettings", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype25 = LocalizationSettings$Type.prototype;
prototype25["create"] = function create(arr) {
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
        let tmp32 = require;
        let tmp33 = dependencyMap;
        let StringValue2 = defineProperty.StringValue;
        let tmp34 = StringValue2;
        let tmp35 = pos;
        let tmp36 = readUnknownField;
        obj.locale = StringValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.locale);
      } else if (2 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let Int32Value = defineProperty.Int32Value;
        let tmp29 = Int32Value;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.timezoneOffset = Int32Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.timezoneOffset);
      } else if (3 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let StringValue = defineProperty.StringValue;
        let tmp24 = StringValue;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.timezoneName = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.timezoneName);
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
prototype25["internalBinaryWrite"] = function internalBinaryWrite(locale, tag, writeUnknownFields) {
  if (locale.locale) {
    const StringValue = defineProperty.StringValue;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = StringValue.internalBinaryWrite(locale.locale, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = StringValue.internalBinaryWrite(locale.locale, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (locale.timezoneOffset) {
    const Int32Value = defineProperty.Int32Value;
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined1 = Int32Value.internalBinaryWrite(locale.timezoneOffset, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = Int32Value.internalBinaryWrite(locale.timezoneOffset, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (locale.timezoneName) {
    const StringValue2 = defineProperty.StringValue;
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined2 = StringValue2.internalBinaryWrite(locale.timezoneName, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = StringValue2.internalBinaryWrite(locale.timezoneName, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, locale, tag);
  }
  return tag;
};
const items19 = [
  {
    no: 1,
    name: "locale",
    kind: "message",
    T() {
      return callback(1337).StringValue;
    }
  },
  {
    no: 2,
    name: "timezone_offset",
    kind: "message",
    T() {
      return defineProperty.Int32Value;
    }
  },
  {
    no: 3,
    name: "timezone_name",
    kind: "message",
    T() {
      return callback(1337).StringValue;
    }
  }
];
let tmp32 = new "binaryReadMap12"("discord_protos.discord_users.v1.LocalizationSettings", items19, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_47 = tmp32;
class ChannelListSettings$Type extends MessageType26 {
  constructor() {
    obj = {
      no: 1,
      name: "layout",
      kind: "message",
      T() {
            return callback(1337).StringValue;
          }
    };
    items = [, ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "message_previews",
      kind: "message",
      T() {
            return callback(1337).StringValue;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.ChannelListSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype26 = ChannelListSettings$Type.prototype;
prototype26["create"] = function create(arr) {
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
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let StringValue2 = defineProperty.StringValue;
        let tmp29 = StringValue2;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.layout = StringValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.layout);
      } else if (2 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let StringValue = defineProperty.StringValue;
        let tmp24 = StringValue;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.messagePreviews = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.messagePreviews);
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
prototype26["internalBinaryWrite"] = function internalBinaryWrite(layout, tag, writeUnknownFields) {
  if (layout.layout) {
    const StringValue = defineProperty.StringValue;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = StringValue.internalBinaryWrite(layout.layout, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = StringValue.internalBinaryWrite(layout.layout, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (layout.messagePreviews) {
    const StringValue2 = defineProperty.StringValue;
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined1 = StringValue2.internalBinaryWrite(layout.messagePreviews, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = StringValue2.internalBinaryWrite(layout.messagePreviews, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, layout, tag);
  }
  return tag;
};
const items20 = [
  {
    no: 1,
    name: "layout",
    kind: "message",
    T() {
      return callback(1337).StringValue;
    }
  },
  {
    no: 2,
    name: "message_previews",
    kind: "message",
    T() {
      return callback(1337).StringValue;
    }
  }
];
let tmp33 = new "binaryReadMap12"("discord_protos.discord_users.v1.ChannelListSettings", items20, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_48 = tmp33;
class AppearanceSettings$Type extends MessageType27 {
  constructor() {
    obj = {
      no: 1,
      name: "theme",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.Theme", closure_17];
            return items;
          }
    };
    items = [, , , , , , , , , , , , , ];
    items[0] = obj;
    items[1] = { no: 2, name: "developer_mode", kind: "scalar", T: 8 };
    items[2] = {
      no: 3,
      name: "client_theme_settings",
      kind: "message",
      T() {
            return closure_51;
          }
    };
    items[3] = { no: 4, name: "mobile_redesign_disabled", kind: "scalar", T: 8 };
    items[4] = {
      no: 6,
      name: "channel_list_layout",
      kind: "message",
      T() {
            return callback(1337).StringValue;
          }
    };
    items[5] = {
      no: 7,
      name: "message_previews",
      kind: "message",
      T() {
            return callback(1337).StringValue;
          }
    };
    items[6] = {
      no: 8,
      name: "search_result_exact_count_enabled",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[7] = {
      no: 9,
      name: "timestamp_hour_cycle",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.TimestampHourCycle", closure_18];
            return items;
          }
    };
    items[8] = {
      no: 10,
      name: "happening_now_cards_disabled",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items[9] = {
      no: 11,
      name: "launch_pad_mode",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.LaunchPadMode", closure_19];
            return items;
          }
    };
    items[10] = {
      no: 12,
      name: "ui_density",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.UIDensity", closure_16];
            return items;
          }
    };
    obj = { no: 13, name: "swipe_right_to_left_mode", kind: "enum", T: null };
    class T {
      constructor() {
        items = ["discord_protos.discord_users.v1.SwipeRightToLeftMode"];
        items[1] = closure_20;
        return items;
      }
    }
    obj[3] = T;
    items[11] = obj;
    items[12] = {
      no: 14,
      name: "default_guild_theme_preference",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.GuildThemeSourcePreference", closure_15, "GUILD_THEME_SOURCE_PREFERENCE_"];
            return items;
          }
    };
    items[13] = { no: 15, name: "dark_sidebar", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.discord_users.v1.AppearanceSettings", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype27 = AppearanceSettings$Type.prototype;
prototype27["create"] = function create(arr) {
  let obj = { theme: 0, developerMode: false, mobileRedesignDisabled: false, timestampHourCycle: 0, launchPadMode: 0, uiDensity: 0, swipeRightToLeftMode: 0, defaultGuildThemePreference: 0, darkSidebar: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype27["internalBinaryRead"] = function internalBinaryRead(pos) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    obj.darkSidebar = pos.bool();
  }
  return obj;
};
prototype27["internalBinaryWrite"] = function internalBinaryWrite(theme, tag, writeUnknownFields) {
  if (0 !== theme.theme) {
    tag.tag(1, 01307__.WireType.Varint).int32(theme.theme);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  if (false !== theme.developerMode) {
    tag.tag(2, 01307__.WireType.Varint).bool(theme.developerMode);
    const tagResult1 = tag.tag(2, 01307__.WireType.Varint);
  }
  if (theme.clientThemeSettings) {
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined = tmp36.internalBinaryWrite(theme.clientThemeSettings, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = tmp36.internalBinaryWrite(theme.clientThemeSettings, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (false !== theme.mobileRedesignDisabled) {
    tag.tag(4, 01307__.WireType.Varint).bool(theme.mobileRedesignDisabled);
    const tagResult3 = tag.tag(4, 01307__.WireType.Varint);
  }
  if (theme.channelListLayout) {
    const StringValue = defineProperty.StringValue;
    const tagResult4 = tag.tag(6, 01307__.WireType.LengthDelimited);
    const joined1 = StringValue.internalBinaryWrite(theme.channelListLayout, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = StringValue.internalBinaryWrite(theme.channelListLayout, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (theme.messagePreviews) {
    const StringValue2 = defineProperty.StringValue;
    const tagResult5 = tag.tag(7, 01307__.WireType.LengthDelimited);
    const joined2 = StringValue2.internalBinaryWrite(theme.messagePreviews, tag.tag(7, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = StringValue2.internalBinaryWrite(theme.messagePreviews, tag.tag(7, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (theme.searchResultExactCountEnabled) {
    const BoolValue = defineProperty.BoolValue;
    const tagResult6 = tag.tag(8, 01307__.WireType.LengthDelimited);
    const joined3 = BoolValue.internalBinaryWrite(theme.searchResultExactCountEnabled, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = BoolValue.internalBinaryWrite(theme.searchResultExactCountEnabled, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (0 !== theme.timestampHourCycle) {
    tag.tag(9, 01307__.WireType.Varint).int32(theme.timestampHourCycle);
    const tagResult7 = tag.tag(9, 01307__.WireType.Varint);
  }
  if (theme.happeningNowCardsDisabled) {
    const BoolValue2 = defineProperty.BoolValue;
    const tagResult8 = tag.tag(10, 01307__.WireType.LengthDelimited);
    const joined4 = BoolValue2.internalBinaryWrite(theme.happeningNowCardsDisabled, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = BoolValue2.internalBinaryWrite(theme.happeningNowCardsDisabled, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (0 !== theme.launchPadMode) {
    tag.tag(11, 01307__.WireType.Varint).int32(theme.launchPadMode);
    const tagResult9 = tag.tag(11, 01307__.WireType.Varint);
  }
  if (0 !== theme.uiDensity) {
    tag.tag(12, 01307__.WireType.Varint).int32(theme.uiDensity);
    const tagResult10 = tag.tag(12, 01307__.WireType.Varint);
  }
  if (0 !== theme.swipeRightToLeftMode) {
    tag.tag(13, 01307__.WireType.Varint).int32(theme.swipeRightToLeftMode);
    const tagResult11 = tag.tag(13, 01307__.WireType.Varint);
  }
  if (0 !== theme.defaultGuildThemePreference) {
    tag.tag(14, 01307__.WireType.Varint).int32(theme.defaultGuildThemePreference);
    const tagResult12 = tag.tag(14, 01307__.WireType.Varint);
  }
  if (false !== theme.darkSidebar) {
    tag.tag(15, 01307__.WireType.Varint).bool(theme.darkSidebar);
    const tagResult13 = tag.tag(15, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, theme, tag);
  }
  return tag;
};
const appearanceSettingsType = new AppearanceSettings$Type();
class CustomUserThemeSettings$Type extends MessageType28 {
  constructor() {
    items = [, , , ];
    items[0] = { no: 1, name: "colors", kind: "scalar", repeat: 2, T: 9 };
    items[1] = { no: 2, name: "gradient_color_stops", kind: "scalar", repeat: 1, T: 2 };
    items[2] = { no: 3, name: "gradient_angle", kind: "scalar", T: 5 };
    items[3] = { no: 4, name: "base_mix", kind: "scalar", T: 5 };
    tmp = new tmp("discord_protos.discord_users.v1.CustomUserThemeSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype28 = CustomUserThemeSettings$Type.prototype;
prototype28["create"] = function create(arr) {
  let obj = { colors: [], gradientColorStops: [], gradientAngle: 0, baseMix: 0 };
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
        let colors = obj.colors;
        let arr = colors.push(pos.string());
      } else if (2 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        if (tmp6 === 01307__.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let gradientColorStops = obj.gradientColorStops;
              arr = gradientColorStops.push(pos.float());
              pos = pos.pos;
            } while (pos < sum1);
          }
        } else {
          let gradientColorStops1 = obj.gradientColorStops;
          let arr1 = gradientColorStops1.push(pos.float());
        }
      } else if (3 === tmp5) {
        obj.gradientAngle = pos.int32();
      } else if (4 === tmp5) {
        obj.baseMix = pos.int32();
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
prototype28["internalBinaryWrite"] = function internalBinaryWrite(colors, tag, writeUnknownFields) {
  let length;
  let length2;
  let num = 0;
  if (0 < colors.colors.length) {
    do {
      let tmp = require;
      let tmp2 = dependencyMap;
      let tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
      let stringResult = tagResult.string(colors.colors[num]);
      num = num + 1;
      length = colors.colors.length;
    } while (num < length);
  }
  if (colors.gradientColorStops.length) {
    tag.tag(2, 01307__.WireType.LengthDelimited).fork();
    let num3 = 0;
    if (0 < colors.gradientColorStops.length) {
      do {
        let floatResult = tag.float(colors.gradientColorStops[num3]);
        num3 = num3 + 1;
        length2 = colors.gradientColorStops.length;
      } while (num3 < length2);
    }
    const joined = tag.join();
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
  }
  if (0 !== colors.gradientAngle) {
    tag.tag(3, 01307__.WireType.Varint).int32(colors.gradientAngle);
    const tagResult2 = tag.tag(3, 01307__.WireType.Varint);
  }
  if (0 !== colors.baseMix) {
    tag.tag(4, 01307__.WireType.Varint).int32(colors.baseMix);
    const tagResult3 = tag.tag(4, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, colors, tag);
  }
  return tag;
};
const items21 = [{ no: 1, name: "colors", kind: "scalar", repeat: 2, T: 9 }, { no: 2, name: "gradient_color_stops", kind: "scalar", repeat: 1, T: 2 }, { no: 3, name: "gradient_angle", kind: "scalar", T: 5 }, { no: 4, name: "base_mix", kind: "scalar", T: 5 }];
let tmp35 = new "binaryReadMap12"("discord_protos.discord_users.v1.CustomUserThemeSettings", items21, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_50 = tmp35;
class ClientThemeSettings$Type extends MessageType29 {
  constructor() {
    obj = {
      no: 2,
      name: "background_gradient_preset_id",
      kind: "message",
      T() {
            return callback(table[4]).UInt32Value;
          }
    };
    items = [, ];
    items[0] = obj;
    items[1] = {
      no: 4,
      name: "custom_user_theme_settings",
      kind: "message",
      T() {
            return closure_50;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.ClientThemeSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype29 = ClientThemeSettings$Type.prototype;
prototype29["create"] = function create(arr) {
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
      if (2 === tmp5) {
        let tmp26 = require;
        let tmp27 = dependencyMap;
        let UInt32Value = defineProperty.UInt32Value;
        let tmp28 = UInt32Value;
        let tmp29 = pos;
        let tmp30 = readUnknownField;
        obj.backgroundGradientPresetId = UInt32Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.backgroundGradientPresetId);
      } else if (4 === tmp5) {
        let tmp22 = tmp35;
        let tmp23 = tmp35;
        let tmp24 = pos;
        let tmp25 = readUnknownField;
        obj.customUserThemeSettings = tmp35.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.customUserThemeSettings);
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
prototype29["internalBinaryWrite"] = function internalBinaryWrite(backgroundGradientPresetId, tag, writeUnknownFields) {
  if (backgroundGradientPresetId.backgroundGradientPresetId) {
    const UInt32Value = defineProperty.UInt32Value;
    const tagResult = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined = UInt32Value.internalBinaryWrite(backgroundGradientPresetId.backgroundGradientPresetId, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = UInt32Value.internalBinaryWrite(backgroundGradientPresetId.backgroundGradientPresetId, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (backgroundGradientPresetId.customUserThemeSettings) {
    const tagResult1 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined1 = tmp35.internalBinaryWrite(backgroundGradientPresetId.customUserThemeSettings, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = tmp35.internalBinaryWrite(backgroundGradientPresetId.customUserThemeSettings, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, backgroundGradientPresetId, tag);
  }
  return tag;
};
const items22 = [
  {
    no: 2,
    name: "background_gradient_preset_id",
    kind: "message",
    T() {
      return callback(table[4]).UInt32Value;
    }
  },
  {
    no: 4,
    name: "custom_user_theme_settings",
    kind: "message",
    T() {
      return closure_50;
    }
  }
];
let tmp36 = new "binaryReadMap12"("discord_protos.discord_users.v1.ClientThemeSettings", items22, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_51 = tmp36;
class GuildFolders$Type extends MessageType30 {
  constructor() {
    obj = {
      no: 1,
      name: "folders",
      kind: "message",
      repeat: 1,
      T() {
            return closure_53;
          }
    };
    items = [, ];
    items[0] = obj;
    items[1] = { no: 2, name: "guild_positions", kind: "scalar", repeat: 1, T: 6 };
    tmp = new tmp("discord_protos.discord_users.v1.GuildFolders", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype30 = GuildFolders$Type.prototype;
prototype30["create"] = function create(arr) {
  let obj = { folders: [], guildPositions: [] };
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
        let folders = obj.folders;
        let tmp27 = tmp38;
        let arr = folders.push(tmp38.internalBinaryRead(pos, pos.uint32(), readUnknownField));
      } else if (2 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        if (tmp6 === 01307__.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let guildPositions = obj.guildPositions;
              let str5 = pos.fixed64();
              arr = guildPositions.push(str5.toString());
              pos = pos.pos;
            } while (pos < sum1);
          }
        } else {
          let guildPositions1 = obj.guildPositions;
          let str4 = pos.fixed64();
          let arr1 = guildPositions1.push(str4.toString());
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
prototype30["internalBinaryWrite"] = function internalBinaryWrite(folders, tag, writeUnknownFields) {
  let length;
  let length2;
  let num = 0;
  if (0 < folders.folders.length) {
    do {
      let tmp = tmp38;
      let tmp2 = require;
      let tmp3 = dependencyMap;
      let tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
      let internalBinaryWriteResult = tmp38.internalBinaryWrite(folders.folders[num], tagResult.fork(), writeUnknownFields);
      let joined = internalBinaryWriteResult.join();
      num = num + 1;
      length = folders.folders.length;
    } while (num < length);
  }
  if (folders.guildPositions.length) {
    tag.tag(2, 01307__.WireType.LengthDelimited).fork();
    let num3 = 0;
    if (0 < folders.guildPositions.length) {
      do {
        let fixed64Result = tag.fixed64(folders.guildPositions[num3]);
        num3 = num3 + 1;
        length2 = folders.guildPositions.length;
      } while (num3 < length2);
    }
    const joined1 = tag.join();
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, folders, tag);
  }
  return tag;
};
const items23 = [
  {
    no: 1,
    name: "folders",
    kind: "message",
    repeat: 1,
    T() {
      return closure_53;
    }
  },
  { no: 2, name: "guild_positions", kind: "scalar", repeat: 1, T: 6 }
];
let tmp37 = new "binaryReadMap12"("discord_protos.discord_users.v1.GuildFolders", items23, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_52 = tmp37;
class GuildFolder$Type extends MessageType31 {
  constructor() {
    items = [, , , ];
    items[0] = { no: 1, name: "guild_ids", kind: "scalar", repeat: 1, T: 6 };
    items[1] = {
      no: 2,
      name: "id",
      kind: "message",
      T() {
            return callback(1337).Int64Value;
          }
    };
    obj = { no: 3, name: "name", kind: "message", T: null };
    class T {
      constructor() {
        return require("defineProperty").StringValue;
      }
    }
    obj[3] = T;
    items[2] = obj;
    items[3] = {
      no: 4,
      name: "color",
      kind: "message",
      T() {
            return callback(1337).UInt64Value;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.GuildFolder", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype31 = GuildFolder$Type.prototype;
prototype31["create"] = function create(arr) {
  let obj = { guildIds: [] };
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
        let tmp37 = require;
        let tmp38 = dependencyMap;
        if (tmp6 === 01307__.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let guildIds = obj.guildIds;
              let str5 = pos.fixed64();
              let arr = guildIds.push(str5.toString());
              pos = pos.pos;
            } while (pos < sum1);
          }
        } else {
          let guildIds1 = obj.guildIds;
          let str4 = pos.fixed64();
          arr = guildIds1.push(str4.toString());
        }
      } else if (2 === tmp5) {
        let tmp32 = require;
        let tmp33 = dependencyMap;
        let Int64Value = defineProperty.Int64Value;
        let tmp34 = Int64Value;
        let tmp35 = pos;
        let tmp36 = readUnknownField;
        obj.id = Int64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.id);
      } else if (3 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let StringValue = defineProperty.StringValue;
        let tmp29 = StringValue;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.name = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.name);
      } else if (4 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let UInt64Value = defineProperty.UInt64Value;
        let tmp24 = UInt64Value;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.color = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.color);
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
prototype31["internalBinaryWrite"] = function internalBinaryWrite(guildIds, tag, writeUnknownFields) {
  let length;
  if (guildIds.guildIds.length) {
    tag.tag(1, 01307__.WireType.LengthDelimited).fork();
    let num2 = 0;
    if (0 < guildIds.guildIds.length) {
      do {
        let fixed64Result = tag.fixed64(guildIds.guildIds[num2]);
        num2 = num2 + 1;
        length = guildIds.guildIds.length;
      } while (num2 < length);
    }
    const joined = tag.join();
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
  }
  if (guildIds.id) {
    const Int64Value = defineProperty.Int64Value;
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined1 = Int64Value.internalBinaryWrite(guildIds.id, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Int64Value.internalBinaryWrite(guildIds.id, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (guildIds.name) {
    const StringValue = defineProperty.StringValue;
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined2 = StringValue.internalBinaryWrite(guildIds.name, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = StringValue.internalBinaryWrite(guildIds.name, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (guildIds.color) {
    const UInt64Value = defineProperty.UInt64Value;
    const tagResult3 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined3 = UInt64Value.internalBinaryWrite(guildIds.color, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = UInt64Value.internalBinaryWrite(guildIds.color, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, guildIds, tag);
  }
  return tag;
};
const items24 = [
  { no: 1, name: "guild_ids", kind: "scalar", repeat: 1, T: 6 },
  {
    no: 2,
    name: "id",
    kind: "message",
    T() {
      return callback(1337).Int64Value;
    }
  },
  {
    no: 3,
    name: "name",
    kind: "message",
    T() {
      return defineProperty.StringValue;
    }
  },
  {
    no: 4,
    name: "color",
    kind: "message",
    T() {
      return callback(1337).UInt64Value;
    }
  }
];
let tmp38 = new "binaryReadMap12"("discord_protos.discord_users.v1.GuildFolder", items24, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_53 = tmp38;
class Favorites$Type extends MessageType32 {
  constructor() {
    obj = { no: 1, name: "favorite_channels", kind: "map", K: 6, V: null };
    obj = { kind: "message", T: null };
    class T {
      constructor() {
        return closure_55;
      }
    }
    obj[1] = T;
    obj[4] = obj;
    items = [, , ];
    items[0] = obj;
    items[1] = { no: 2, name: "muted", kind: "scalar", T: 8 };
    items[2] = {
      no: 3,
      name: "guild_visible",
      kind: "message",
      T() {
            return callback(table[4]).BoolValue;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.Favorites", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype32 = Favorites$Type.prototype;
prototype32["create"] = function create(arr) {
  let obj = { favoriteChannels: {}, muted: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype32["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let binaryReadMap1Result = self.binaryReadMap1(obj.favoriteChannels, pos, readUnknownField);
      } else if (2 === tmp5) {
        obj.muted = pos.bool();
      } else if (3 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let BoolValue = defineProperty.BoolValue;
        let tmp24 = BoolValue;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.guildVisible = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.guildVisible);
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
prototype32["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
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
        let tmp15 = tmp40;
        internalBinaryReadResult = tmp40.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = str;
      obj = internalBinaryReadResult;
    }
    const _globalThis = globalThis;
    const error = new Error("unknown map entry field for field discord_protos.discord_users.v1.Favorites.favorite_channels");
    throw error;
  }
  if (str == null) {
    str = "0";
  }
  if (obj == null) {
    obj = tmp40.create();
  }
  arg0[str] = obj;
};
prototype32["internalBinaryWrite"] = function internalBinaryWrite(favoriteChannels, tag, writeUnknownFields) {
  const keys = Object.keys(favoriteChannels.favoriteChannels);
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
    let tmp7 = tmp40;
    let internalBinaryWriteResult = tmp40.internalBinaryWrite(favoriteChannels.favoriteChannels[nextResult], tag, writeUnknownFields);
    let joined = tag.join();
    let joined1 = joined.join();
    continue;
  }
  if (false !== favoriteChannels.muted) {
    tag.tag(2, 01307__.WireType.Varint).bool(favoriteChannels.muted);
    const tagResult3 = tag.tag(2, 01307__.WireType.Varint);
  }
  if (favoriteChannels.guildVisible) {
    const BoolValue = defineProperty.BoolValue;
    const tagResult4 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined2 = BoolValue.internalBinaryWrite(favoriteChannels.guildVisible, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = BoolValue.internalBinaryWrite(favoriteChannels.guildVisible, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, favoriteChannels, tag);
  }
  return tag;
};
const items25 = [
  {
    no: 1,
    name: "favorite_channels",
    kind: "map",
    K: 6,
    V: {
      kind: "message",
      T() {
        return closure_55;
      }
    }
  },
  { no: 2, name: "muted", kind: "scalar", T: 8 },
  {
    no: 3,
    name: "guild_visible",
    kind: "message",
    T() {
      return callback(table[4]).BoolValue;
    }
  }
];
let tmp39 = new "binaryReadMap12"("discord_protos.discord_users.v1.Favorites", items25, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_54 = tmp39;
class FavoriteChannel$Type extends MessageType33 {
  constructor() {
    items = [, , , , , ];
    items[0] = { no: 1, name: "nickname", kind: "scalar", T: 9 };
    obj = { no: 2, name: "type", kind: "enum", T: null };
    class T {
      constructor() {
        items = ["discord_protos.discord_users.v1.FavoriteChannelType"];
        items[1] = closure_21;
        return items;
      }
    }
    obj[3] = T;
    items[1] = obj;
    items[2] = { no: 3, name: "position", kind: "scalar", T: 13 };
    items[3] = { no: 4, name: "parent_id", kind: "scalar", T: 6 };
    items[4] = {
      no: 5,
      name: "channel_type",
      kind: "message",
      T() {
            return callback(table[4]).UInt32Value;
          }
    };
    items[5] = { no: 6, name: "collapsed", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.discord_users.v1.FavoriteChannel", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype33 = FavoriteChannel$Type.prototype;
prototype33["create"] = function create(arr) {
  let obj = { nickname: "", type: 0, position: 0, parentId: "0", collapsed: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype33["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        obj.nickname = pos.string();
      } else if (2 === tmp5) {
        obj.type = pos.int32();
      } else if (3 === tmp5) {
        obj.position = pos.uint32();
      } else if (4 === tmp5) {
        let str4 = pos.fixed64();
        obj.parentId = str4.toString();
      } else if (5 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let UInt32Value = defineProperty.UInt32Value;
        let tmp24 = UInt32Value;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.channelType = UInt32Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.channelType);
      } else if (6 === tmp5) {
        obj.collapsed = pos.bool();
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
prototype33["internalBinaryWrite"] = function internalBinaryWrite(nickname, tag, writeUnknownFields) {
  if ("" !== nickname.nickname) {
    tag.tag(1, 01307__.WireType.LengthDelimited).string(nickname.nickname);
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
  }
  if (0 !== nickname.type) {
    tag.tag(2, 01307__.WireType.Varint).int32(nickname.type);
    const tagResult1 = tag.tag(2, 01307__.WireType.Varint);
  }
  if (0 !== nickname.position) {
    tag.tag(3, 01307__.WireType.Varint).uint32(nickname.position);
    const tagResult2 = tag.tag(3, 01307__.WireType.Varint);
  }
  if ("0" !== nickname.parentId) {
    tag.tag(4, 01307__.WireType.Bit64).fixed64(nickname.parentId);
    const tagResult3 = tag.tag(4, 01307__.WireType.Bit64);
  }
  if (nickname.channelType) {
    const UInt32Value = defineProperty.UInt32Value;
    const tagResult4 = tag.tag(5, 01307__.WireType.LengthDelimited);
    const joined = UInt32Value.internalBinaryWrite(nickname.channelType, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = UInt32Value.internalBinaryWrite(nickname.channelType, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (false !== nickname.collapsed) {
    tag.tag(6, 01307__.WireType.Varint).bool(nickname.collapsed);
    const tagResult5 = tag.tag(6, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, nickname, tag);
  }
  return tag;
};
const items26 = [
  { no: 1, name: "nickname", kind: "scalar", T: 9 },
  {
    no: 2,
    name: "type",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_users.v1.FavoriteChannelType", obj19];
      return items;
    }
  },
  { no: 3, name: "position", kind: "scalar", T: 13 },
  { no: 4, name: "parent_id", kind: "scalar", T: 6 },
  {
    no: 5,
    name: "channel_type",
    kind: "message",
    T() {
      return callback(table[4]).UInt32Value;
    }
  },
  { no: 6, name: "collapsed", kind: "scalar", T: 8 }
];
let tmp40 = new "binaryReadMap12"("discord_protos.discord_users.v1.FavoriteChannel", items26, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_55 = tmp40;
class AudioContextSetting$Type extends MessageType34 {
  constructor() {
    items = [, , , ];
    items[0] = { no: 1, name: "muted", kind: "scalar", T: 8 };
    items[1] = { no: 2, name: "volume", kind: "scalar", T: 2 };
    items[2] = { no: 3, name: "modified_at", kind: "scalar", T: 6 };
    items[3] = { no: 4, name: "soundboard_muted", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.discord_users.v1.AudioContextSetting", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype34 = AudioContextSetting$Type.prototype;
prototype34["create"] = function create(arr) {
  let obj = { muted: false, volume: 0, modifiedAt: "0", soundboardMuted: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype34["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        obj.muted = pos.bool();
      } else if (2 === tmp5) {
        obj.volume = pos.float();
      } else if (3 === tmp5) {
        let str4 = pos.fixed64();
        obj.modifiedAt = str4.toString();
      } else if (4 === tmp5) {
        obj.soundboardMuted = pos.bool();
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
prototype34["internalBinaryWrite"] = function internalBinaryWrite(muted, tag, writeUnknownFields) {
  if (false !== muted.muted) {
    tag.tag(1, 01307__.WireType.Varint).bool(muted.muted);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  if (0 !== muted.volume) {
    tag.tag(2, 01307__.WireType.Bit32).float(muted.volume);
    const tagResult1 = tag.tag(2, 01307__.WireType.Bit32);
  }
  if ("0" !== muted.modifiedAt) {
    tag.tag(3, 01307__.WireType.Bit64).fixed64(muted.modifiedAt);
    const tagResult2 = tag.tag(3, 01307__.WireType.Bit64);
  }
  if (false !== muted.soundboardMuted) {
    tag.tag(4, 01307__.WireType.Varint).bool(muted.soundboardMuted);
    const tagResult3 = tag.tag(4, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, muted, tag);
  }
  return tag;
};
const items27 = [{ no: 1, name: "muted", kind: "scalar", T: 8 }, { no: 2, name: "volume", kind: "scalar", T: 2 }, { no: 3, name: "modified_at", kind: "scalar", T: 6 }, { no: 4, name: "soundboard_muted", kind: "scalar", T: 8 }];
let tmp41 = new "binaryReadMap12"("discord_protos.discord_users.v1.AudioContextSetting", items27, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_56 = tmp41;
class AudioSettings$Type extends MessageType35 {
  constructor() {
    obj = {
      kind: "message",
      T() {
            return closure_56;
          }
    };
    items = [, ];
    items[0] = { no: 1, name: "user", kind: "map", K: 6, V: obj };
    obj = { no: 2, name: "stream", kind: "map", K: 6, V: null };
    obj1 = { kind: "message", T: null };
    class T {
      constructor() {
        return closure_56;
      }
    }
    obj1[1] = T;
    obj[4] = obj1;
    items[1] = obj;
    tmp = new tmp("discord_protos.discord_users.v1.AudioSettings", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype35 = AudioSettings$Type.prototype;
prototype35["create"] = function create(arr) {
  let obj = { user: {}, stream: {} };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype35["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let binaryReadMap1Result = self.binaryReadMap1(obj.user, pos, readUnknownField);
      } else if (2 === tmp5) {
        let binaryReadMap2Result = self.binaryReadMap2(obj.stream, pos, readUnknownField);
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
prototype35["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
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
        let tmp15 = tmp41;
        internalBinaryReadResult = tmp41.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = str;
      obj = internalBinaryReadResult;
    }
    const _globalThis = globalThis;
    const error = new Error("unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.user");
    throw error;
  }
  if (str == null) {
    str = "0";
  }
  if (obj == null) {
    obj = tmp41.create();
  }
  arg0[str] = obj;
};
prototype35["binaryReadMap2"] = function binaryReadMap2(arg0, pos) {
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
        let tmp15 = tmp41;
        internalBinaryReadResult = tmp41.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = str;
      obj = internalBinaryReadResult;
    }
    const _globalThis = globalThis;
    const error = new Error("unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.stream");
    throw error;
  }
  if (str == null) {
    str = "0";
  }
  if (obj == null) {
    obj = tmp41.create();
  }
  arg0[str] = obj;
};
prototype35["internalBinaryWrite"] = function internalBinaryWrite(user, tag, writeUnknownFields) {
  const keys = Object.keys(user.user);
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
    let tmp7 = tmp41;
    let internalBinaryWriteResult = tmp41.internalBinaryWrite(user.user[nextResult], tag, writeUnknownFields);
    let joined = tag.join();
    let joined1 = joined.join();
    continue;
  }
  const keys1 = Object.keys(user.stream);
  for (const item10059 of keys1) {
    let tmp11 = require;
    let tmp12 = dependencyMap;
    let tagResult3 = arg1.tag(2, 01307__.WireType.LengthDelimited);
    let forkResult2 = tagResult3.fork();
    let tagResult4 = forkResult2.tag(1, 01307__.WireType.Bit64);
    let fixed64Result1 = tagResult4.fixed64(item10059);
    let tagResult5 = arg1.tag(2, 01307__.WireType.LengthDelimited);
    let forkResult3 = tagResult5.fork();
    let tmp15 = tmp41;
    let internalBinaryWriteResult1 = tmp41.internalBinaryWrite(arg0.stream[item10059], arg1, arg2);
    let joined2 = arg1.join();
    let joined3 = joined2.join();
    continue;
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, user, tag);
  }
  return tag;
};
const items28 = [
  {
    no: 1,
    name: "user",
    kind: "map",
    K: 6,
    V: {
      kind: "message",
      T() {
        return closure_56;
      }
    }
  },
  {
    no: 2,
    name: "stream",
    kind: "map",
    K: 6,
    V: {
      kind: "message",
      T() {
        return closure_56;
      }
    }
  }
];
let tmp42 = new "binaryReadMap12"("discord_protos.discord_users.v1.AudioSettings", items28, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_57 = tmp42;
class CommunitiesSettings$Type extends MessageType36 {
  constructor() {
    obj = {
      no: 1,
      name: "disable_home_auto_nav",
      kind: "message",
      T() {
            return callback(table[4]).BoolValue;
          }
    };
    items = [];
    items[0] = obj;
    tmp = new tmp("discord_protos.discord_users.v1.CommunitiesSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype36 = CommunitiesSettings$Type.prototype;
prototype36["create"] = function create(arr) {
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
prototype36["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let BoolValue = defineProperty.BoolValue;
        let tmp24 = BoolValue;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.disableHomeAutoNav = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.disableHomeAutoNav);
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
prototype36["internalBinaryWrite"] = function internalBinaryWrite(disableHomeAutoNav, tag, writeUnknownFields) {
  if (disableHomeAutoNav.disableHomeAutoNav) {
    const BoolValue = defineProperty.BoolValue;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = BoolValue.internalBinaryWrite(disableHomeAutoNav.disableHomeAutoNav, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = BoolValue.internalBinaryWrite(disableHomeAutoNav.disableHomeAutoNav, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, disableHomeAutoNav, tag);
  }
  return tag;
};
const items29 = [
  {
    no: 1,
    name: "disable_home_auto_nav",
    kind: "message",
    T() {
      return callback(table[4]).BoolValue;
    }
  }
];
const tmp43 = new "binaryReadMap12"("discord_protos.discord_users.v1.CommunitiesSettings", items29, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_58 = tmp43;
class SoundboardSettings$Type extends MessageType37 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "volume", kind: "scalar", T: 2 };
    tmp = new tmp("discord_protos.discord_users.v1.SoundboardSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype37 = SoundboardSettings$Type.prototype;
prototype37["create"] = function create(arr) {
  let obj = { volume: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype37["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        obj.volume = pos.float();
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
prototype37["internalBinaryWrite"] = function internalBinaryWrite(volume, tag, writeUnknownFields) {
  if (0 !== volume.volume) {
    tag.tag(1, 01307__.WireType.Bit32).float(volume.volume);
    const tagResult = tag.tag(1, 01307__.WireType.Bit32);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, volume, tag);
  }
  return tag;
};
const items30 = [{ no: 1, name: "volume", kind: "scalar", T: 2 }];
const tmp44 = new "binaryReadMap12"("discord_protos.discord_users.v1.SoundboardSettings", items30, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_59 = tmp44;
class CustomCallSound$Type extends MessageType38 {
  constructor() {
    items = [, ];
    items[0] = { no: 1, name: "sound_id", kind: "scalar", T: 6 };
    items[1] = { no: 2, name: "guild_id", kind: "scalar", T: 6 };
    tmp = new tmp("discord_protos.discord_users.v1.CustomCallSound", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype38 = CustomCallSound$Type.prototype;
prototype38["create"] = function create(arr) {
  let obj = { soundId: "0", guildId: "0" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype38["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        obj.soundId = str5.toString();
      } else if (2 === tmp5) {
        let str4 = pos.fixed64();
        obj.guildId = str4.toString();
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
prototype38["internalBinaryWrite"] = function internalBinaryWrite(soundId, tag, writeUnknownFields) {
  if ("0" !== soundId.soundId) {
    tag.tag(1, 01307__.WireType.Bit64).fixed64(soundId.soundId);
    const tagResult = tag.tag(1, 01307__.WireType.Bit64);
  }
  if ("0" !== soundId.guildId) {
    tag.tag(2, 01307__.WireType.Bit64).fixed64(soundId.guildId);
    const tagResult1 = tag.tag(2, 01307__.WireType.Bit64);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, soundId, tag);
  }
  return tag;
};
const items31 = [{ no: 1, name: "sound_id", kind: "scalar", T: 6 }, { no: 2, name: "guild_id", kind: "scalar", T: 6 }];
let tmp45 = new "binaryReadMap12"("discord_protos.discord_users.v1.CustomCallSound", items31, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_60 = tmp45;
class BroadcastSettings$Type extends MessageType39 {
  constructor() {
    obj = {
      no: 1,
      name: "allow_friends",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    items = [, , , ];
    items[0] = obj;
    items[1] = { no: 2, name: "allowed_guild_ids", kind: "scalar", repeat: 1, T: 6 };
    items[2] = { no: 3, name: "allowed_user_ids", kind: "scalar", repeat: 1, T: 6 };
    items[3] = {
      no: 4,
      name: "auto_broadcast",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.BroadcastSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype39 = BroadcastSettings$Type.prototype;
prototype39["create"] = function create(arr) {
  let obj = { allowedGuildIds: [], allowedUserIds: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype39["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let BoolValue2 = defineProperty.BoolValue;
        let tmp39 = BoolValue2;
        let tmp40 = pos;
        let tmp41 = readUnknownField;
        obj.allowFriends = BoolValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.allowFriends);
      } else if (2 === tmp5) {
        let tmp32 = require;
        let tmp33 = dependencyMap;
        if (tmp6 === 01307__.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let allowedGuildIds = obj.allowedGuildIds;
              let str7 = pos.fixed64();
              let arr = allowedGuildIds.push(str7.toString());
              pos2 = pos.pos;
            } while (pos2 < sum1);
          }
        } else {
          let allowedGuildIds1 = obj.allowedGuildIds;
          let str6 = pos.fixed64();
          arr = allowedGuildIds1.push(str6.toString());
        }
      } else if (3 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        if (tmp6 === 01307__.WireType.LengthDelimited) {
          let sum2 = pos.int32() + pos.pos;
          if (pos.pos < sum2) {
            do {
              let allowedUserIds = obj.allowedUserIds;
              let str5 = pos.fixed64();
              let arr1 = allowedUserIds.push(str5.toString());
              pos = pos.pos;
            } while (pos < sum2);
          }
        } else {
          let allowedUserIds1 = obj.allowedUserIds;
          let str4 = pos.fixed64();
          let arr2 = allowedUserIds1.push(str4.toString());
        }
      } else if (4 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let BoolValue = defineProperty.BoolValue;
        let tmp24 = BoolValue;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.autoBroadcast = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.autoBroadcast);
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
prototype39["internalBinaryWrite"] = function internalBinaryWrite(allowFriends, tag, writeUnknownFields) {
  let length;
  let length2;
  if (allowFriends.allowFriends) {
    const BoolValue = defineProperty.BoolValue;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = BoolValue.internalBinaryWrite(allowFriends.allowFriends, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = BoolValue.internalBinaryWrite(allowFriends.allowFriends, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (allowFriends.allowedGuildIds.length) {
    tag.tag(2, 01307__.WireType.LengthDelimited).fork();
    let num3 = 0;
    if (0 < allowFriends.allowedGuildIds.length) {
      do {
        let fixed64Result = tag.fixed64(allowFriends.allowedGuildIds[num3]);
        num3 = num3 + 1;
        length = allowFriends.allowedGuildIds.length;
      } while (num3 < length);
    }
    const joined1 = tag.join();
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
  }
  if (allowFriends.allowedUserIds.length) {
    tag.tag(3, 01307__.WireType.LengthDelimited).fork();
    let num6 = 0;
    if (0 < allowFriends.allowedUserIds.length) {
      do {
        let fixed64Result1 = tag.fixed64(allowFriends.allowedUserIds[num6]);
        num6 = num6 + 1;
        length2 = allowFriends.allowedUserIds.length;
      } while (num6 < length2);
    }
    const joined2 = tag.join();
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
  }
  if (allowFriends.autoBroadcast) {
    const BoolValue2 = defineProperty.BoolValue;
    const tagResult3 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined3 = BoolValue2.internalBinaryWrite(allowFriends.autoBroadcast, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = BoolValue2.internalBinaryWrite(allowFriends.autoBroadcast, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, allowFriends, tag);
  }
  return tag;
};
const items32 = [
  {
    no: 1,
    name: "allow_friends",
    kind: "message",
    T() {
      return callback(1337).BoolValue;
    }
  },
  { no: 2, name: "allowed_guild_ids", kind: "scalar", repeat: 1, T: 6 },
  { no: 3, name: "allowed_user_ids", kind: "scalar", repeat: 1, T: 6 },
  {
    no: 4,
    name: "auto_broadcast",
    kind: "message",
    T() {
      return callback(1337).BoolValue;
    }
  }
];
let tmp46 = new "binaryReadMap12"("discord_protos.discord_users.v1.BroadcastSettings", items32, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_61 = tmp46;
class ClipsSettings$Type extends MessageType40 {
  constructor() {
    obj = {
      no: 1,
      name: "allow_voice_recording",
      kind: "message",
      T() {
            return callback(table[4]).BoolValue;
          }
    };
    items = [];
    items[0] = obj;
    tmp = new tmp("discord_protos.discord_users.v1.ClipsSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype40 = ClipsSettings$Type.prototype;
prototype40["create"] = function create(arr) {
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
prototype40["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let BoolValue = defineProperty.BoolValue;
        let tmp24 = BoolValue;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.allowVoiceRecording = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.allowVoiceRecording);
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
prototype40["internalBinaryWrite"] = function internalBinaryWrite(allowVoiceRecording, tag, writeUnknownFields) {
  if (allowVoiceRecording.allowVoiceRecording) {
    const BoolValue = defineProperty.BoolValue;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = BoolValue.internalBinaryWrite(allowVoiceRecording.allowVoiceRecording, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = BoolValue.internalBinaryWrite(allowVoiceRecording.allowVoiceRecording, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, allowVoiceRecording, tag);
  }
  return tag;
};
const items33 = [
  {
    no: 1,
    name: "allow_voice_recording",
    kind: "message",
    T() {
      return callback(table[4]).BoolValue;
    }
  }
];
const tmp47 = new "binaryReadMap12"("discord_protos.discord_users.v1.ClipsSettings", items33, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_62 = tmp47;
class SpendingLimit$Type extends MessageType41 {
  constructor() {
    items = [, ];
    items[0] = { no: 1, name: "amount", kind: "scalar", T: 4 };
    items[1] = { no: 2, name: "currency", kind: "scalar", T: 9 };
    tmp = new tmp("discord_protos.discord_users.v1.SpendingLimit", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype41 = SpendingLimit$Type.prototype;
prototype41["create"] = function create(arr) {
  let obj = { amount: "0", currency: "" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype41["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        obj.amount = str4.toString();
      } else if (2 === tmp5) {
        obj.currency = pos.string();
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
prototype41["internalBinaryWrite"] = function internalBinaryWrite(amount, tag, writeUnknownFields) {
  if ("0" !== amount.amount) {
    tag.tag(1, 01307__.WireType.Varint).uint64(amount.amount);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  if ("" !== amount.currency) {
    tag.tag(2, 01307__.WireType.LengthDelimited).string(amount.currency);
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, amount, tag);
  }
  return tag;
};
const items34 = [{ no: 1, name: "amount", kind: "scalar", T: 4 }, { no: 2, name: "currency", kind: "scalar", T: 9 }];
const tmp48 = new "binaryReadMap12"("discord_protos.discord_users.v1.SpendingLimit", items34, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_63 = tmp48;
class SpendingLimitSettings$Type extends MessageType42 {
  constructor() {
    obj = {
      no: 1,
      name: "one_time_purchase_limit",
      kind: "message",
      T() {
            return closure_63;
          }
    };
    items = [];
    items[0] = obj;
    tmp = new tmp("discord_protos.discord_users.v1.SpendingLimitSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype42 = SpendingLimitSettings$Type.prototype;
prototype42["create"] = function create(arr) {
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
prototype42["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let tmp22 = tmp48;
        let tmp23 = tmp48;
        let tmp24 = pos;
        let tmp25 = readUnknownField;
        obj.oneTimePurchaseLimit = tmp48.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.oneTimePurchaseLimit);
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
prototype42["internalBinaryWrite"] = function internalBinaryWrite(oneTimePurchaseLimit, tag, writeUnknownFields) {
  if (oneTimePurchaseLimit.oneTimePurchaseLimit) {
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = tmp48.internalBinaryWrite(oneTimePurchaseLimit.oneTimePurchaseLimit, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = tmp48.internalBinaryWrite(oneTimePurchaseLimit.oneTimePurchaseLimit, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, oneTimePurchaseLimit, tag);
  }
  return tag;
};
const items35 = [
  {
    no: 1,
    name: "one_time_purchase_limit",
    kind: "message",
    T() {
      return closure_63;
    }
  }
];
let tmp49 = new "binaryReadMap12"("discord_protos.discord_users.v1.SpendingLimitSettings", items35, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_64 = tmp49;
class SafetySettings$Type extends MessageType43 {
  constructor() {
    obj = {
      no: 1,
      name: "safety_settings_preset",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.SafetySettingsPresetType", closure_22];
            return items;
          }
    };
    items = [, , ];
    items[0] = obj;
    items[1] = { no: 2, name: "ignore_profile_speedbump_disabled", kind: "scalar", T: 8 };
    items[2] = {
      no: 3,
      name: "spending_limit_settings",
      kind: "message",
      T() {
            return closure_64;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.SafetySettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype43 = SafetySettings$Type.prototype;
prototype43["create"] = function create(arr) {
  let obj = { safetySettingsPreset: 0, ignoreProfileSpeedbumpDisabled: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype43["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        obj.safetySettingsPreset = pos.int32();
      } else if (2 === tmp5) {
        obj.ignoreProfileSpeedbumpDisabled = pos.bool();
      } else if (3 === tmp5) {
        let tmp22 = tmp49;
        let tmp23 = tmp49;
        let tmp24 = pos;
        let tmp25 = readUnknownField;
        obj.spendingLimitSettings = tmp49.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.spendingLimitSettings);
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
prototype43["internalBinaryWrite"] = function internalBinaryWrite(safetySettingsPreset, tag, writeUnknownFields) {
  if (0 !== safetySettingsPreset.safetySettingsPreset) {
    tag.tag(1, 01307__.WireType.Varint).int32(safetySettingsPreset.safetySettingsPreset);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  if (false !== safetySettingsPreset.ignoreProfileSpeedbumpDisabled) {
    tag.tag(2, 01307__.WireType.Varint).bool(safetySettingsPreset.ignoreProfileSpeedbumpDisabled);
    const tagResult1 = tag.tag(2, 01307__.WireType.Varint);
  }
  if (safetySettingsPreset.spendingLimitSettings) {
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined = tmp49.internalBinaryWrite(safetySettingsPreset.spendingLimitSettings, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = tmp49.internalBinaryWrite(safetySettingsPreset.spendingLimitSettings, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, safetySettingsPreset, tag);
  }
  return tag;
};
const items36 = [
  {
    no: 1,
    name: "safety_settings_preset",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_users.v1.SafetySettingsPresetType", closure_22];
      return items;
    }
  },
  { no: 2, name: "ignore_profile_speedbump_disabled", kind: "scalar", T: 8 },
  {
    no: 3,
    name: "spending_limit_settings",
    kind: "message",
    T() {
      return closure_64;
    }
  }
];
const tmp50 = new "binaryReadMap12"("discord_protos.discord_users.v1.SafetySettings", items36, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_65 = tmp50;
class ForLaterSettings$Type extends MessageType44 {
  constructor() {
    obj = {
      no: 1,
      name: "current_tab",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.ForLaterTab", closure_23, "FOR_LATER_TAB_"];
            return items;
          }
    };
    items = [];
    items[0] = obj;
    tmp = new tmp("discord_protos.discord_users.v1.ForLaterSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype44 = ForLaterSettings$Type.prototype;
prototype44["create"] = function create(arr) {
  let obj = { currentTab: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype44["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        obj.currentTab = pos.int32();
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
prototype44["internalBinaryWrite"] = function internalBinaryWrite(currentTab, tag, writeUnknownFields) {
  if (0 !== currentTab.currentTab) {
    tag.tag(1, 01307__.WireType.Varint).int32(currentTab.currentTab);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, currentTab, tag);
  }
  return tag;
};
const items37 = [
  {
    no: 1,
    name: "current_tab",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_users.v1.ForLaterTab", closure_23, "FOR_LATER_TAB_"];
      return items;
    }
  }
];
const tmp51 = new "binaryReadMap12"("discord_protos.discord_users.v1.ForLaterSettings", items37, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_66 = tmp51;
class ICYMISettings$Type extends MessageType45 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "feed_generated_at", kind: "scalar", T: 6 };
    tmp = new tmp("discord_protos.discord_users.v1.ICYMISettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype45 = ICYMISettings$Type.prototype;
prototype45["create"] = function create(arr) {
  let obj = { feedGeneratedAt: "0" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype45["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let str4 = pos.fixed64();
        obj.feedGeneratedAt = str4.toString();
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
prototype45["internalBinaryWrite"] = function internalBinaryWrite(feedGeneratedAt, tag, writeUnknownFields) {
  if ("0" !== feedGeneratedAt.feedGeneratedAt) {
    tag.tag(1, 01307__.WireType.Bit64).fixed64(feedGeneratedAt.feedGeneratedAt);
    const tagResult = tag.tag(1, 01307__.WireType.Bit64);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, feedGeneratedAt, tag);
  }
  return tag;
};
const items38 = [{ no: 1, name: "feed_generated_at", kind: "scalar", T: 6 }];
const tmp52 = new "binaryReadMap12"("discord_protos.discord_users.v1.ICYMISettings", items38, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_67 = tmp52;
class AllApplicationSettings$Type extends MessageType46 {
  constructor() {
    obj = {
      kind: "message",
      T() {
            return closure_69;
          }
    };
    items = [];
    items[0] = { no: 1, name: "app_settings", kind: "map", K: 6, V: obj };
    tmp = new tmp("discord_protos.discord_users.v1.AllApplicationSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype46 = AllApplicationSettings$Type.prototype;
prototype46["create"] = function create(arr) {
  let obj = { appSettings: {} };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype46["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let binaryReadMap1Result = self.binaryReadMap1(obj.appSettings, pos, readUnknownField);
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
prototype46["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
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
        let tmp15 = tmp54;
        internalBinaryReadResult = tmp54.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = str;
      obj = internalBinaryReadResult;
    }
    const _globalThis = globalThis;
    const error = new Error("unknown map entry field for field discord_protos.discord_users.v1.AllApplicationSettings.app_settings");
    throw error;
  }
  if (str == null) {
    str = "0";
  }
  if (obj == null) {
    obj = tmp54.create();
  }
  arg0[str] = obj;
};
prototype46["internalBinaryWrite"] = function internalBinaryWrite(appSettings, tag, writeUnknownFields) {
  const keys = Object.keys(appSettings.appSettings);
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
    let tmp7 = tmp54;
    let internalBinaryWriteResult = tmp54.internalBinaryWrite(appSettings.appSettings[nextResult], tag, writeUnknownFields);
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
    onWrite(this.typeName, appSettings, tag);
  }
  return tag;
};
const items39 = [
  {
    no: 1,
    name: "app_settings",
    kind: "map",
    K: 6,
    V: {
      kind: "message",
      T() {
        return closure_69;
      }
    }
  }
];
const tmp53 = new "binaryReadMap12"("discord_protos.discord_users.v1.AllApplicationSettings", items39, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_68 = tmp53;
class ApplicationSettings$Type extends MessageType47 {
  constructor() {
    obj = {
      no: 1,
      name: "app_dm_settings",
      kind: "message",
      T() {
            return closure_70;
          }
    };
    items = [, ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "app_sharing_settings",
      kind: "message",
      T() {
            return closure_71;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.ApplicationSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype47 = ApplicationSettings$Type.prototype;
prototype47["create"] = function create(arr) {
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
prototype47["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let tmp26 = tmp55;
        let tmp27 = tmp55;
        let tmp28 = pos;
        let tmp29 = readUnknownField;
        obj.appDmSettings = tmp55.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.appDmSettings);
      } else if (2 === tmp5) {
        let tmp22 = tmp56;
        let tmp23 = tmp56;
        let tmp24 = pos;
        let tmp25 = readUnknownField;
        obj.appSharingSettings = tmp56.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.appSharingSettings);
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
prototype47["internalBinaryWrite"] = function internalBinaryWrite(appDmSettings, tag, writeUnknownFields) {
  if (appDmSettings.appDmSettings) {
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = tmp55.internalBinaryWrite(appDmSettings.appDmSettings, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = tmp55.internalBinaryWrite(appDmSettings.appDmSettings, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (appDmSettings.appSharingSettings) {
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined1 = tmp56.internalBinaryWrite(appDmSettings.appSharingSettings, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = tmp56.internalBinaryWrite(appDmSettings.appSharingSettings, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, appDmSettings, tag);
  }
  return tag;
};
const items40 = [
  {
    no: 1,
    name: "app_dm_settings",
    kind: "message",
    T() {
      return closure_70;
    }
  },
  {
    no: 2,
    name: "app_sharing_settings",
    kind: "message",
    T() {
      return closure_71;
    }
  }
];
const tmp54 = new "binaryReadMap12"("discord_protos.discord_users.v1.ApplicationSettings", items40, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_69 = tmp54;
class ApplicationDMSettings$Type extends MessageType48 {
  constructor() {
    items = [];
    items[0] = { no: 2, name: "allow_mobile_push", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.discord_users.v1.ApplicationDMSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype48 = ApplicationDMSettings$Type.prototype;
prototype48["create"] = function create(arr) {
  let obj = { allowMobilePush: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype48["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
      if (2 === tmp5) {
        obj.allowMobilePush = pos.bool();
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
prototype48["internalBinaryWrite"] = function internalBinaryWrite(allowMobilePush, tag, writeUnknownFields) {
  if (false !== allowMobilePush.allowMobilePush) {
    tag.tag(2, 01307__.WireType.Varint).bool(allowMobilePush.allowMobilePush);
    const tagResult = tag.tag(2, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, allowMobilePush, tag);
  }
  return tag;
};
const items41 = [{ no: 2, name: "allow_mobile_push", kind: "scalar", T: 8 }];
const tmp55 = new "binaryReadMap12"("discord_protos.discord_users.v1.ApplicationDMSettings", items41, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_70 = tmp55;
class ApplicationSharingSettings$Type extends MessageType49 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "disable_application_activity_sharing", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.discord_users.v1.ApplicationSharingSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype49 = ApplicationSharingSettings$Type.prototype;
prototype49["create"] = function create(arr) {
  let obj = { disableApplicationActivitySharing: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype49["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        obj.disableApplicationActivitySharing = pos.bool();
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
prototype49["internalBinaryWrite"] = function internalBinaryWrite(disableApplicationActivitySharing, tag, writeUnknownFields) {
  if (false !== disableApplicationActivitySharing.disableApplicationActivitySharing) {
    tag.tag(1, 01307__.WireType.Varint).bool(disableApplicationActivitySharing.disableApplicationActivitySharing);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, disableApplicationActivitySharing, tag);
  }
  return tag;
};
const items42 = [{ no: 1, name: "disable_application_activity_sharing", kind: "scalar", T: 8 }];
const tmp56 = new "binaryReadMap12"("discord_protos.discord_users.v1.ApplicationSharingSettings", items42, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_71 = tmp56;
class AdsSettings$Type extends MessageType50 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "always_deliver", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.discord_users.v1.AdsSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype50 = AdsSettings$Type.prototype;
prototype50["create"] = function create(arr) {
  let obj = { alwaysDeliver: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype50["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        obj.alwaysDeliver = pos.bool();
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
prototype50["internalBinaryWrite"] = function internalBinaryWrite(alwaysDeliver, tag, writeUnknownFields) {
  if (false !== alwaysDeliver.alwaysDeliver) {
    tag.tag(1, 01307__.WireType.Varint).bool(alwaysDeliver.alwaysDeliver);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, alwaysDeliver, tag);
  }
  return tag;
};
const items43 = [{ no: 1, name: "always_deliver", kind: "scalar", T: 8 }];
const tmp57 = new "binaryReadMap12"("discord_protos.discord_users.v1.AdsSettings", items43, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj);
// ThrowIfThisInitialized (0x7c)
let closure_72 = tmp57;
class InAppFeedbackState$Type extends MessageType51 {
  constructor() {
    obj = {
      no: 1,
      name: "last_impression_time",
      kind: "message",
      T() {
            return callback(1337).UInt64Value;
          }
    };
    items = [, ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "opt_out_expiry_time",
      kind: "message",
      T() {
            return callback(1337).UInt64Value;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.InAppFeedbackState", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype51 = InAppFeedbackState$Type.prototype;
prototype51["create"] = function create(arr) {
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
prototype51["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let UInt64Value2 = defineProperty.UInt64Value;
        let tmp29 = UInt64Value2;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.lastImpressionTime = UInt64Value2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.lastImpressionTime);
      } else if (2 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let UInt64Value = defineProperty.UInt64Value;
        let tmp24 = UInt64Value;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.optOutExpiryTime = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.optOutExpiryTime);
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
prototype51["internalBinaryWrite"] = function internalBinaryWrite(lastImpressionTime, tag, writeUnknownFields) {
  if (lastImpressionTime.lastImpressionTime) {
    const UInt64Value = defineProperty.UInt64Value;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = UInt64Value.internalBinaryWrite(lastImpressionTime.lastImpressionTime, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = UInt64Value.internalBinaryWrite(lastImpressionTime.lastImpressionTime, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (lastImpressionTime.optOutExpiryTime) {
    const UInt64Value2 = defineProperty.UInt64Value;
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined1 = UInt64Value2.internalBinaryWrite(lastImpressionTime.optOutExpiryTime, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = UInt64Value2.internalBinaryWrite(lastImpressionTime.optOutExpiryTime, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, lastImpressionTime, tag);
  }
  return tag;
};
const items44 = [
  {
    no: 1,
    name: "last_impression_time",
    kind: "message",
    T() {
      return callback(1337).UInt64Value;
    }
  },

];
const obj52 = {
  no: 2,
  name: "opt_out_expiry_time",
  kind: "message",
  T() {
    return callback(1337).UInt64Value;
  }
};
items44[1] = obj52;
const tmp58 = new "binaryReadMap12"("discord_protos.discord_users.v1.InAppFeedbackState", items44, tmp6, tmp5, "create", InAppFeedbackState$Type, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15, obj16, obj17, obj18, obj19, obj20, obj21, obj22, preloadedUserSettingsType, tmp9, tmp10, tmp11, guildSettingsType, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, textAndImagesSettingsType, notificationSettingsType, privacySettingsType, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, appearanceSettingsType, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, "binaryReadMap12", items44, new.target, exports, obj52, undefined, 8, 4);
// ThrowIfThisInitialized (0x7c)
let closure_73 = tmp58;
class DefaultReactionEmoji$Type extends MessageType52 {
  constructor() {
    obj = {
      no: 1,
      name: "emoji_id",
      kind: "message",
      T() {
            return callback(1337).UInt64Value;
          }
    };
    items = [, , , ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "emoji_name",
      kind: "message",
      T() {
            return callback(1337).StringValue;
          }
    };
    obj = { no: 3, name: "animated", kind: "message", T: null };
    class T {
      constructor() {
        return require("defineProperty").BoolValue;
      }
    }
    obj[3] = T;
    items[2] = obj;
    items[3] = {
      no: 4,
      name: "disable_double_tap",
      kind: "message",
      T() {
            return callback(1337).BoolValue;
          }
    };
    tmp = new tmp("discord_protos.discord_users.v1.DefaultReactionEmoji", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype52 = DefaultReactionEmoji$Type.prototype;
prototype52["create"] = function create(arr) {
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
prototype52["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        obj.emojiId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.emojiId);
      } else if (2 === tmp5) {
        let tmp32 = require;
        let tmp33 = dependencyMap;
        let StringValue = defineProperty.StringValue;
        let tmp34 = StringValue;
        let tmp35 = pos;
        let tmp36 = readUnknownField;
        obj.emojiName = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.emojiName);
      } else if (3 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let BoolValue2 = defineProperty.BoolValue;
        let tmp29 = BoolValue2;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.animated = BoolValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.animated);
      } else if (4 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let BoolValue = defineProperty.BoolValue;
        let tmp24 = BoolValue;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.disableDoubleTap = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.disableDoubleTap);
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
prototype52["internalBinaryWrite"] = function internalBinaryWrite(emojiId, tag, writeUnknownFields) {
  if (emojiId.emojiId) {
    const UInt64Value = defineProperty.UInt64Value;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = UInt64Value.internalBinaryWrite(emojiId.emojiId, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = UInt64Value.internalBinaryWrite(emojiId.emojiId, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (emojiId.emojiName) {
    const StringValue = defineProperty.StringValue;
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined1 = StringValue.internalBinaryWrite(emojiId.emojiName, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = StringValue.internalBinaryWrite(emojiId.emojiName, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (emojiId.animated) {
    const BoolValue = defineProperty.BoolValue;
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined2 = BoolValue.internalBinaryWrite(emojiId.animated, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = BoolValue.internalBinaryWrite(emojiId.animated, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (emojiId.disableDoubleTap) {
    const BoolValue2 = defineProperty.BoolValue;
    const tagResult3 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined3 = BoolValue2.internalBinaryWrite(emojiId.disableDoubleTap, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = BoolValue2.internalBinaryWrite(emojiId.disableDoubleTap, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, emojiId, tag);
  }
  return tag;
};
const items45 = [
  {
    no: 1,
    name: "emoji_id",
    kind: "message",
    T() {
      return callback(1337).UInt64Value;
    }
  },
  {
    no: 2,
    name: "emoji_name",
    kind: "message",
    T() {
      return callback(1337).StringValue;
    }
  },
  {
    no: 3,
    name: "animated",
    kind: "message",
    T() {
      return defineProperty.BoolValue;
    }
  },

];
const obj54 = {
  no: 4,
  name: "disable_double_tap",
  kind: "message",
  T() {
    return callback(1337).BoolValue;
  }
};
items45[3] = obj54;
const inAppFeedbackStateType = new InAppFeedbackState$Type("discord_protos.discord_users.v1.DefaultReactionEmoji", items45, tmp6, DefaultReactionEmoji$Type, "create", InAppFeedbackState$Type, "internalBinaryRead", "internalBinaryWrite", "binaryReadMap1", undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15, obj16, obj17, obj18, obj19, obj20, obj21, obj22, preloadedUserSettingsType, tmp9, tmp10, tmp11, guildSettingsType, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, textAndImagesSettingsType, notificationSettingsType, privacySettingsType, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, appearanceSettingsType, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, items45, new.target, exports, obj54, undefined, 8, 4, 3, 2);
// ThrowIfThisInitialized (0x7c)
class InAppFeedbackSettings$Type extends MessageType53 {
  constructor() {
    obj = {
      kind: "message",
      T() {
            return closure_73;
          }
    };
    items = [];
    items[0] = { no: 1, name: "in_app_feedback_states", kind: "map", K: 5, V: obj };
    tmp = new tmp("discord_protos.discord_users.v1.InAppFeedbackSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype53 = InAppFeedbackSettings$Type.prototype;
prototype53["create"] = function create(arr) {
  let obj = { inAppFeedbackStates: {} };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype53["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let binaryReadMap1Result = self.binaryReadMap1(obj.inAppFeedbackStates, pos, readUnknownField);
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
prototype53["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
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
      let int32Result = tmp3;
      if (1 === tmp7) {
        int32Result = pos.int32();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        let tmp15 = tmp58;
        internalBinaryReadResult = tmp58.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = int32Result;
      obj = internalBinaryReadResult;
      num = int32Result;
    }
    const _globalThis = globalThis;
    const error = new Error("unknown map entry field for field discord_protos.discord_users.v1.InAppFeedbackSettings.in_app_feedback_states");
    throw error;
  }
  if (num == null) {
    num = 0;
  }
  if (obj == null) {
    obj = tmp58.create();
  }
  arg0[num] = obj;
};
prototype53["internalBinaryWrite"] = function internalBinaryWrite(inAppFeedbackStates, tag, writeUnknownFields) {
  const keys = Object.keys(inAppFeedbackStates.inAppFeedbackStates);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, 01307__.WireType.Varint);
    let _parseInt = parseInt;
    let int32Result = tagResult1.int32(parseInt(nextResult));
    let tagResult2 = tag.tag(2, 01307__.WireType.LengthDelimited);
    let forkResult1 = tagResult2.fork();
    let tmp7 = tmp58;
    let internalBinaryWriteResult = tmp58.internalBinaryWrite(inAppFeedbackStates.inAppFeedbackStates[nextResult], tag, writeUnknownFields);
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
    onWrite(this.typeName, inAppFeedbackStates, tag);
  }
  return tag;
};
const obj55 = { no: 1, name: "in_app_feedback_states", kind: "map", K: 5, V: obj56 };
const items46 = [obj55];
const inAppFeedbackStateType1 = new InAppFeedbackState$Type("discord_protos.discord_users.v1.InAppFeedbackSettings", items46, tmp6, InAppFeedbackSettings$Type, "create", InAppFeedbackState$Type, "internalBinaryRead", "internalBinaryWrite", items46, undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15, obj16, obj17, obj18, obj19, obj20, obj21, obj22, preloadedUserSettingsType, tmp9, tmp10, tmp11, guildSettingsType, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, textAndImagesSettingsType, notificationSettingsType, privacySettingsType, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, appearanceSettingsType, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, inAppFeedbackStateType, new.target, exports, obj55, undefined, 8, 4, 3, 2);
// ThrowIfThisInitialized (0x7c)
class AppVersionSettings$Type extends MessageType54 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "is_using_outdated_mobile_version", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.discord_users.v1.AppVersionSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype54 = AppVersionSettings$Type.prototype;
prototype54["create"] = function create(arr) {
  let obj = { isUsingOutdatedMobileVersion: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype54["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        obj.isUsingOutdatedMobileVersion = pos.bool();
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
prototype54["internalBinaryWrite"] = function internalBinaryWrite(isUsingOutdatedMobileVersion, tag, writeUnknownFields) {
  if (false !== isUsingOutdatedMobileVersion.isUsingOutdatedMobileVersion) {
    tag.tag(1, 01307__.WireType.Varint).bool(isUsingOutdatedMobileVersion.isUsingOutdatedMobileVersion);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, isUsingOutdatedMobileVersion, tag);
  }
  return tag;
};
const items47 = [];
const obj57 = { no: 1, name: "is_using_outdated_mobile_version", kind: "scalar", T: 8 };
items47[0] = obj57;
const tmp61 = new "internalBinaryRead"("discord_protos.discord_users.v1.AppVersionSettings", items47, tmp6, InAppFeedbackSettings$Type, "create", AppVersionSettings$Type, "internalBinaryRead", items47, new.target, undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15, obj16, obj17, obj18, obj19, obj20, obj21, obj22, preloadedUserSettingsType, tmp9, tmp10, tmp11, guildSettingsType, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, textAndImagesSettingsType, notificationSettingsType, privacySettingsType, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, appearanceSettingsType, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, inAppFeedbackStateType, inAppFeedbackStateType1, exports, obj57, undefined, 8, 4);
// ThrowIfThisInitialized (0x7c)
let closure_76 = tmp61;
let result = require("create").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx");

export const InboxTab = obj;
export const HubProgressStep = obj;
export const GuildOnboardingProgress = obj;
export const ExplicitContentRedaction = obj1;
export const DmSpamFilterV2 = obj2;
export const ReactionNotificationType = obj3;
export const GameActivityNotificationType = obj4;
export const CustomStatusPushNotificationType = obj5;
export const SearchProvider = obj6;
export const GuildActivityStatusRestrictionDefault = obj7;
export const GuildActivityStatusRestrictionDefaultV2 = obj8;
export const GuildsLeaderboardOptOutDefault = obj9;
export const SlayerSDKReceiveInGameDMs = obj10;
export const ProfileVisibility = obj11;
export const GuildThemeSourcePreference = obj12;
export const UIDensity = obj13;
export const Theme = obj14;
export const BackgroundGradientPresetId = obj15;
export const TimestampHourCycle = obj16;
export const LaunchPadMode = obj17;
export const SwipeRightToLeftMode = obj18;
export const FavoriteChannelType = obj19;
export const SafetySettingsPresetType = obj20;
export const ForLaterTab = obj21;
export const InAppFeedbackType = obj22;
export const PreloadedUserSettings = preloadedUserSettingsType;
export const InboxSettings = tmp9;
export const AllGuildSettings = tmp10;
export const GuildDismissibleContentState = tmp11;
export const GuildSettings = guildSettingsType;
export const ChannelIconEmoji = tmp13;
export const ChannelSettings = tmp14;
export const CustomNotificationSoundConfig = tmp15;
export const RecurringDismissibleContentState = tmp16;
export const UserContentSettings = tmp17;
export const VideoFilterAsset = tmp18;
export const VideoFilterBackgroundBlur = tmp19;
export const VoiceAndVideoSettings = tmp20;
export const ExplicitContentSettings = tmp21;
export const GoreContentSettings = tmp22;
export const SelfHarmContentSettings = tmp23;
export const KeywordFilterSettings = tmp24;
export const TextAndImagesSettings = textAndImagesSettingsType;
export const NotificationSettings = notificationSettingsType;
export const PrivacySettings = privacySettingsType;
export const DebugSettings = tmp28;
export const GameLibrarySettings = tmp29;
export const StatusSettings = tmp30;
export const CustomStatus = tmp31;
export const LocalizationSettings = tmp32;
export const ChannelListSettings = tmp33;
export const AppearanceSettings = appearanceSettingsType;
export const CustomUserThemeSettings = tmp35;
export const ClientThemeSettings = tmp36;
export const GuildFolders = tmp37;
export const GuildFolder = tmp38;
export const Favorites = tmp39;
export const FavoriteChannel = tmp40;
export const AudioContextSetting = tmp41;
export const AudioSettings = tmp42;
export const CommunitiesSettings = tmp43;
export const SoundboardSettings = tmp44;
export const CustomCallSound = tmp45;
export const BroadcastSettings = tmp46;
export const ClipsSettings = tmp47;
export const SpendingLimit = tmp48;
export const SpendingLimitSettings = tmp49;
export const SafetySettings = tmp50;
export const ForLaterSettings = tmp51;
export const ICYMISettings = tmp52;
export const AllApplicationSettings = tmp53;
export const ApplicationSettings = tmp54;
export const ApplicationDMSettings = tmp55;
export const ApplicationSharingSettings = tmp56;
export const AdsSettings = tmp57;
export const InAppFeedbackState = tmp58;
export const DefaultReactionEmoji = inAppFeedbackStateType;
export const InAppFeedbackSettings = inAppFeedbackStateType1;
export const AppVersionSettings = tmp61;