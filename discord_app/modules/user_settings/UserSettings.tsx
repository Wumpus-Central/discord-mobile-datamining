// === Module 2028: UserSettings ===

// Module 2028 (UserSettings)
import _mod12 from "module_12" /* 12 */;
import get_initialized from "get initialized" /* 504 */;
import shallowEqualDefault from "shallowEqual" /* 568 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import wrappers from "wrappers" /* 1228 */;
import GuildThemeSourcePreferenceUtils from "GuildThemeSourcePreferenceUtils" /* 1236 */;
import StickersConstants from "StickersConstants" /* 2031 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5587 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 6812 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 7525 */;
import UserSettingsOverridesStore from "UserSettingsOverridesStore" /* 2029 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import DMSafetyConstants from "DMSafetyConstants" /* 2030 */;
import Constants from "Constants" /* 1085 */;
import UserSettingDefinitions_mod from "UserSettingDefinitions" /* 2032 */;
import "UserSettingDefinitions";
import size from "module_2" /* 2 */;

let ListDensityMode;
let StatusTypes;
let UserSettingsDelay;
let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
function explicitContentFromProto(settings) {
  let explicitContentFriendDm;
  let explicitContentGuilds;
  let explicitContentNonFriendDm;
  let obj = settings;
  if (settings == null) {
    obj = {};
  }
  ({ explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm } = obj);
  if (explicitContentGuilds == null) {
    explicitContentGuilds = preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  const obj2 = { explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm };
  if (explicitContentFriendDm == null) {
    explicitContentFriendDm = preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  if (explicitContentNonFriendDm == null) {
    explicitContentNonFriendDm = preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  return obj2;
}
function explicitContentToProto(explicitContentGuilds) {
  let explicitContentFriendDm;
  let explicitContentNonFriendDm;
  explicitContentGuilds = explicitContentGuilds.explicitContentGuilds;
  const obj = { explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm };
  explicitContentFriendDm = explicitContentGuilds.explicitContentFriendDm;
  explicitContentNonFriendDm = explicitContentGuilds.explicitContentNonFriendDm;
  return obj;
}
function goreContentFromProto(arg0) {
  let goreContentFriendDm;
  let goreContentGuilds;
  let goreContentNonFriendDm;
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = obj);
  if (goreContentGuilds == null) {
    goreContentGuilds = preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  const obj2 = { goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm };
  if (goreContentFriendDm == null) {
    goreContentFriendDm = preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  if (goreContentNonFriendDm == null) {
    goreContentNonFriendDm = preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  return obj2;
}
function goreContentToProto(goreContentGuilds) {
  let goreContentFriendDm;
  let goreContentNonFriendDm;
  goreContentGuilds = goreContentGuilds.goreContentGuilds;
  const obj = { goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm };
  goreContentFriendDm = goreContentGuilds.goreContentFriendDm;
  goreContentNonFriendDm = goreContentGuilds.goreContentNonFriendDm;
  return obj;
}
({ UserSettingsDelay, ListDensityMode } = UserSettingsConstants);
({ DmSpamFilterTypes: c3, ExplicitContentFilterTypes: closure_4 } = DMSafetyConstants);
({ AllFriendSourceFlags: hasOwnProperty, SpoilerRenderSetting: metroRequire, StatusTypes } = Constants);
const StickerAnimationSettings = StickersConstants.StickerAnimationSettings;
let UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult = UserSettingDefinitions.defineProtoSetting("textAndImages", "useLegacyChatInput", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult1 = UserSettingDefinitions.defineProtoSetting("textAndImages", "useRichChatInput", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult2 = UserSettingDefinitions.defineProtoSetting("textAndImages", "includeStickersInAutocomplete", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult3 = UserSettingDefinitions.defineProtoSetting("textAndImages", "includeSoundmojiInAutocomplete", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult4 = UserSettingDefinitions.defineProtoSetting("textAndImages", "includeGameMentionsInAutocomplete", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult5 = UserSettingDefinitions.defineProtoSetting("textAndImages", "inlineEmojiSuggestionsEnabled", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult6 = UserSettingDefinitions.defineProtoSetting("textAndImages", "renderSpoilers", (value) => {
  let ON_CLICK;
  if (value != null) {
    ON_CLICK = value.value;
  }
  if (ON_CLICK == null) {
    ON_CLICK = metroRequire.ON_CLICK;
  }
  return ON_CLICK;
}, (value) => {
  const StringValue = wrappers.StringValue;
  const obj = { value };
  return StringValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult7 = UserSettingDefinitions.defineProtoSetting("textAndImages", "useThreadSidebar", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult8 = UserSettingDefinitions.defineProtoSetting("notifications", "showInAppNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult9 = UserSettingDefinitions.defineProtoSetting("notifications", "reactionNotifications", (arg0) => {
  let NOTIFICATIONS_ENABLED = arg0;
  if (arg0 == null) {
    NOTIFICATIONS_ENABLED = preloaded_user_settings.ReactionNotificationType.NOTIFICATIONS_ENABLED;
  }
  return NOTIFICATIONS_ENABLED;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult10 = UserSettingDefinitions.defineProtoSetting("notifications", "customStatusPushNotifications", (arg0) => {
  let STATUS_PUSH_UNSET = arg0;
  if (arg0 == null) {
    STATUS_PUSH_UNSET = preloaded_user_settings.CustomStatusPushNotificationType.STATUS_PUSH_UNSET;
  }
  return STATUS_PUSH_UNSET;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult11 = UserSettingDefinitions.defineProtoSetting("notifications", "enableSummaryReminderNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult12 = UserSettingDefinitions.defineProtoSetting("notifications", "enableScreenDowntimeScheduleNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult13 = UserSettingDefinitions.defineProtoSetting("notifications", "enableVoiceActivityNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult14 = UserSettingDefinitions.defineProtoSetting("notifications", "enableFriendOnlineNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult15 = UserSettingDefinitions.defineProtoSetting("notifications", "enableFriendAnniversaryNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult16 = UserSettingDefinitions.defineProtoSetting("notifications", "enableServerTrendingNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult17 = UserSettingDefinitions.defineProtoSetting("notifications", "enableProfileUpdatesNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult18 = UserSettingDefinitions.defineProtoSetting("notifications", "enableFriendGamingActivityNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult19 = UserSettingDefinitions.defineProtoSetting("notifications", "enableUpcomingServerEventNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult20 = UserSettingDefinitions.defineProtoSetting("notifications", "quietMode", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
let closure_9 = [];
const defineProtoSettingResult21 = UserSettingDefinitions.defineProtoSetting("notifications", "focusModeExpiresAtMs", (arg0) => {
  let str = arg0;
  if (arg0 == null) {
    str = "0";
  }
  return str;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult22 = UserSettingDefinitions.defineProtoSetting("textAndImages", "emojiPickerCollapsedSections", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_9;
  }
  return tmp;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult23 = UserSettingDefinitions.defineProtoSetting("textAndImages", "stickerPickerCollapsedSections", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_9;
  }
  return tmp;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult24 = UserSettingDefinitions.defineProtoSetting("textAndImages", "soundboardPickerCollapsedSections", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_9;
  }
  return tmp;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult25 = UserSettingDefinitions.defineProtoSetting("textAndImages", "viewImageDescriptions", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult26 = UserSettingDefinitions.defineProtoSetting("textAndImages", "showCommandSuggestions", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult27 = UserSettingDefinitions.defineProtoSetting("voiceAndVideo", "alwaysPreviewVideo", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult28 = UserSettingDefinitions.defineProtoSetting("voiceAndVideo", "disableStreamPreviews", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult29 = UserSettingDefinitions.defineProtoSetting("notifications", "notifyFriendsOnGoLive", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult30 = UserSettingDefinitions.defineProtoSetting("notifications", "notifyFriendsOnComeOnline", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult31 = UserSettingDefinitions.defineProtoSetting("notifications", "notifyServerMembersOnGoLive", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult32 = UserSettingDefinitions.defineProtoSetting("notifications", "notifyFriendsOnProfileUpdate", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult33 = UserSettingDefinitions.defineProtoSetting("notifications", "notificationCenterAckedBeforeId", (arg0) => {
  let str = arg0;
  if (arg0 == null) {
    str = "0";
  }
  return str;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult34 = UserSettingDefinitions.defineProtoSetting("gameLibrary", "installShortcutDesktop", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult35 = UserSettingDefinitions.defineProtoSetting("gameLibrary", "installShortcutStartMenu", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult36 = UserSettingDefinitions.defineProtoSetting("privacy", "allowActivityPartyPrivacyFriends", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
let closure_10 = [];
const defineProtoSettingResult37 = UserSettingDefinitions.defineProtoSetting("privacy", "allowActivityPartyPrivacyVoiceChannel", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult38 = UserSettingDefinitions.defineProtoSetting("privacy", "messageRequestRestrictedGuildIds", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_10;
  }
  return tmp;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult39 = UserSettingDefinitions.defineProtoSetting("privacy", "defaultMessageRequestRestricted", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult40 = UserSettingDefinitions.defineProtoSetting("privacy", "nonSpamRetrainingOptIn", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (value) => {
  let obj2;
  if (null != value) {
    const BoolValue = wrappers.BoolValue;
    const obj = { value };
    obj2 = BoolValue.create(obj);
  }
  return obj2;
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult41 = UserSettingDefinitions.defineProtoSetting("privacy", "contactSyncEnabled", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult42 = UserSettingDefinitions.defineProtoSetting("privacy", "defaultGuildsRestricted", (arg0) => {
  let flag = arg0;
  if (arg0 == null) {
    flag = false;
  }
  return flag;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult43 = UserSettingDefinitions.defineProtoSetting("privacy", "defaultGuildsRestrictedV2", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult44 = UserSettingDefinitions.defineProtoSetting("privacy", "restrictedGuildIds", (arg0) => {
  let items = arg0;
  if (arg0 == null) {
    items = [];
  }
  return items;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult45 = UserSettingDefinitions.defineProtoSetting("privacy", "friendDiscoveryFlags", (value) => {
  let num;
  if (value != null) {
    num = value.value;
  }
  if (num == null) {
    num = 0;
  }
  return num;
}, (value) => {
  const UInt32Value = wrappers.UInt32Value;
  const obj = { value };
  return UInt32Value.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult46 = UserSettingDefinitions.defineProtoSetting("privacy", "friendSourceFlags", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  if (value == null) {
    value = hasOwnProperty;
  }
  return value;
}, (value) => {
  const UInt32Value = wrappers.UInt32Value;
  const obj = { value };
  return UInt32Value.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult47 = UserSettingDefinitions.defineProtoSetting("debug", "rtcPanelShowVoiceStates", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult48 = UserSettingDefinitions.defineProtoSetting("textAndImages", "convertEmoticons", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult49 = UserSettingDefinitions.defineProtoSetting("textAndImages", "messageDisplayCompact", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult50 = UserSettingDefinitions.defineProtoSetting("textAndImages", "displayCompactAvatars", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult51 = UserSettingDefinitions.defineProtoSetting("voiceAndVideo", "soundboardSettings", (arg0) => arg0, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult52 = UserSettingDefinitions.defineProtoSetting("voiceAndVideo", "soundmojiVolume", (value) => {
  let num;
  if (value != null) {
    num = value.value;
  }
  if (num == null) {
    num = 100;
  }
  return num;
}, (value) => {
  const FloatValue = wrappers.FloatValue;
  const obj = { value };
  return FloatValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult53 = UserSettingDefinitions.defineProtoSetting("voiceAndVideo", "streamNotificationsEnabled", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult54 = UserSettingDefinitions.defineProtoSetting("privacy", "dropsOptedOut", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
let closure_11 = [];
const defineProtoSettingResult55 = UserSettingDefinitions.defineProtoSetting("privacy", "quests3PDataOptedOut", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult56 = UserSettingDefinitions.defineProtoSetting("privacy", "adTopicOptOuts", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_11;
  }
  return tmp;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult57 = UserSettingDefinitions.defineProtoSetting("voiceAndVideo", "nativePhoneIntegrationEnabled", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult58 = UserSettingDefinitions.defineProtoSetting("voiceAndVideo", "afkTimeout", (value) => {
  let num;
  if (value != null) {
    num = value.value;
  }
  if (num == null) {
    num = 60;
  }
  return num;
}, (value) => {
  const UInt32Value = wrappers.UInt32Value;
  const obj = { value };
  return UInt32Value.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult59 = UserSettingDefinitions.defineProtoSetting("textAndImages", "viewNsfwGuilds", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult60 = UserSettingDefinitions.defineProtoSetting("textAndImages", "viewNsfwCommands", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult61 = UserSettingDefinitions.defineProtoSetting("privacy", "detectPlatformAccounts", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult62 = UserSettingDefinitions.defineProtoSetting("gameLibrary", "disableGamesTab", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult63 = UserSettingDefinitions.defineProtoSetting("textAndImages", "enableTtsCommand", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult64 = UserSettingDefinitions.defineProtoSetting("textAndImages", "explicitContentFilter", (value) => {
  let NON_FRIENDS;
  if (value != null) {
    NON_FRIENDS = value.value;
  }
  if (NON_FRIENDS == null) {
    NON_FRIENDS = constants2.NON_FRIENDS;
  }
  return NON_FRIENDS;
}, (value) => {
  const UInt32Value = wrappers.UInt32Value;
  const obj = { value };
  return UInt32Value.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult65 = UserSettingDefinitions.defineProtoSetting("textAndImages", "dmSpamFilter", (value) => {
  let NON_FRIENDS;
  if (value != null) {
    NON_FRIENDS = value.value;
  }
  if (NON_FRIENDS == null) {
    NON_FRIENDS = constants.NON_FRIENDS;
  }
  return NON_FRIENDS;
}, (value) => {
  const UInt32Value = wrappers.UInt32Value;
  const obj = { value };
  return UInt32Value.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult66 = UserSettingDefinitions.defineProtoSetting("textAndImages", "dmSpamFilterV2", (arg0) => {
  let DEFAULT_UNSET = arg0;
  if (arg0 == null) {
    DEFAULT_UNSET = preloaded_user_settings.DmSpamFilterV2.DEFAULT_UNSET;
  }
  return DEFAULT_UNSET;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult67 = UserSettingDefinitions.defineProtoSetting("status", "showCurrentGame", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult68 = UserSettingDefinitions.defineProtoSetting("privacy", "recentGamesEnabled", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult69 = UserSettingDefinitions.defineProtoSetting("privacy", "profileVisibility", (arg0) => {
  let FRIENDS_AND_ALL_GUILDS = arg0;
  if (null == arg0) {
    FRIENDS_AND_ALL_GUILDS = preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
  }
  return FRIENDS_AND_ALL_GUILDS;
}, (arg0) => arg0);
const set = new Set(Object.values(StatusTypes));
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult70 = UserSettingDefinitions.defineProtoSetting("status", "status", (value) => {
  if (null != value) {
    let UNKNOWN;
    if (set.has(value.value)) {
      UNKNOWN = value.value;
    }
    return UNKNOWN;
  }
  UNKNOWN = StatusTypes.UNKNOWN;
}, (value) => {
  const StringValue = wrappers.StringValue;
  const obj = { value };
  return StringValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult71 = UserSettingDefinitions.defineProtoSetting("status", "statusExpiresAtMs", (arg0) => {
  let str = arg0;
  if (arg0 == null) {
    str = "0";
  }
  return str;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult72 = UserSettingDefinitions.defineProtoSetting("status", "statusCreatedAtMs", (arg0) => arg0, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult73 = UserSettingDefinitions.defineProtoSetting("status", "customStatus", (arg0) => arg0, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult74 = UserSettingDefinitions.defineProtoSetting("clips", "allowVoiceRecording", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const wrapSettingWithSelectiveSyncing = UserSettingDefinitions.wrapSettingWithSelectiveSyncing;
UserSettingDefinitions = UserSettingDefinitions_mod;
const result = wrapSettingWithSelectiveSyncing(UserSettingDefinitions.defineProtoSetting("textAndImages", "inlineAttachmentMedia", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
}), "text", "inlineAttachmentMedia");
UserSettingDefinitions = UserSettingDefinitions_mod;
const wrapSettingWithSelectiveSyncing2 = UserSettingDefinitions.wrapSettingWithSelectiveSyncing;
UserSettingDefinitions = UserSettingDefinitions_mod;
const result1 = wrapSettingWithSelectiveSyncing2(UserSettingDefinitions.defineProtoSetting("textAndImages", "inlineEmbedMedia", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
}), "text", "inlineEmbedMedia");
UserSettingDefinitions = UserSettingDefinitions_mod;
const wrapSettingWithSelectiveSyncing3 = UserSettingDefinitions.wrapSettingWithSelectiveSyncing;
UserSettingDefinitions = UserSettingDefinitions_mod;
const result2 = wrapSettingWithSelectiveSyncing3(UserSettingDefinitions.defineProtoSetting("textAndImages", "renderEmbeds", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
}), "text", "renderEmbeds");
UserSettingDefinitions = UserSettingDefinitions_mod;
const wrapSettingWithSelectiveSyncing4 = UserSettingDefinitions.wrapSettingWithSelectiveSyncing;
UserSettingDefinitions = UserSettingDefinitions_mod;
const result3 = wrapSettingWithSelectiveSyncing4(UserSettingDefinitions.defineProtoSetting("textAndImages", "renderReactions", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
}), "text", "renderReactions");
UserSettingDefinitions = UserSettingDefinitions_mod;
const wrapSettingWithSelectiveSyncing5 = UserSettingDefinitions.wrapSettingWithSelectiveSyncing;
UserSettingDefinitions = UserSettingDefinitions_mod;
let obj = { comparator: shallowEqualDefault };
const result4 = wrapSettingWithSelectiveSyncing5(UserSettingDefinitions.defineProtoSetting("textAndImages", "defaultReactionEmoji", (disableDoubleTap) => {
  let animated;
  let emojiId;
  let emojiName;
  let flag;
  let value3;
  let value4;
  let obj = disableDoubleTap;
  if (disableDoubleTap == null) {
    obj = {};
  }
  ({ emojiId, emojiName, animated } = obj);
  let value;
  if (emojiId != null) {
    value = emojiId.value;
  }
  const obj2 = { emojiId: value, emojiName: value3, animated: value4, disableDoubleTap: flag };
  value3 = undefined;
  if (emojiName != null) {
    value3 = emojiName.value;
  }
  value4 = undefined;
  if (animated != null) {
    value4 = animated.value;
  }
  flag = undefined;
  if (disableDoubleTap != null) {
    if (disableDoubleTap.disableDoubleTap != null) {
      flag = iter.value;
    }
  }
  if (flag == null) {
    flag = false;
  }
  return obj2;
}, (arg0) => {
  let BoolValue;
  let BoolValue2;
  let StringValue;
  let UInt64Value;
  let animated;
  let disableDoubleTap;
  let emojiId;
  let emojiName;
  const obj = { emojiId: UInt64Value.create({ value: emojiId }), emojiName: StringValue.create({ value: emojiName }), animated: BoolValue.create({ value: animated }), disableDoubleTap: BoolValue2.create({ value: disableDoubleTap }) };
  ({ emojiId, emojiName, animated, disableDoubleTap } = arg0);
  UInt64Value = wrappers.UInt64Value;
  StringValue = wrappers.StringValue;
  BoolValue = wrappers.BoolValue;
  BoolValue2 = wrappers.BoolValue;
  return obj;
}, obj), "text", "defaultReactionEmoji");
UserSettingDefinitions = UserSettingDefinitions_mod;
let items = [ListDensityMode.AUTO, , ];
const defineProtoSettingResult75 = UserSettingDefinitions.defineProtoSetting("localization", "timezoneOffset", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  if (value == null) {
    value = null;
  }
  return value;
}, (arg0) => {
  let value = arg0;
  const Int32Value = wrappers.Int32Value;
  const create = Int32Value.create;
  if (arg0 == null) {
    value = 0;
  }
  return create({ value });
});
items[1] = ChannelListLayoutTypes.ChannelListLayoutTypes.COZY;
items[2] = ChannelListLayoutTypes.ChannelListLayoutTypes.COMPACT;
const set1 = new Set(items);
UserSettingDefinitions = UserSettingDefinitions_mod;
const items1 = [, , ];
const defineProtoSettingResult76 = UserSettingDefinitions.defineProtoSetting("appearance", "channelListLayout", (value) => {
  if (null != value) {
    let COZY;
    if (set1.has(value.value)) {
      COZY = value.value;
    }
    return COZY;
  }
  COZY = ChannelListLayoutTypes.ChannelListLayoutTypes.COZY;
}, (value) => {
  const StringValue = wrappers.StringValue;
  const obj = { value };
  return StringValue.create(obj);
});
items1[0] = ChannelListLayoutTypes.MessagePreviewTypes.ALL;
items1[1] = ChannelListLayoutTypes.MessagePreviewTypes.UNREADS;
items1[2] = ChannelListLayoutTypes.MessagePreviewTypes.NONE;
const set2 = new Set(items1);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult77 = UserSettingDefinitions.defineProtoSetting("appearance", "messagePreviews", (value) => {
  if (null != value) {
    let ALL;
    if (set2.has(value.value)) {
      ALL = value.value;
    }
    return ALL;
  }
  ALL = ChannelListLayoutTypes.MessagePreviewTypes.ALL;
}, (value) => {
  const StringValue = wrappers.StringValue;
  const obj = { value };
  return StringValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const wrapSettingWithSelectiveSyncing6 = UserSettingDefinitions.wrapSettingWithSelectiveSyncing;
UserSettingDefinitions = UserSettingDefinitions_mod;
const result5 = wrapSettingWithSelectiveSyncing6(UserSettingDefinitions.defineProtoSetting("appearance", "developerMode", (arg0) => {
  let flag = arg0;
  if (arg0 == null) {
    flag = false;
  }
  return flag;
}, (arg0) => arg0), "appearance", "developerMode");
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult78 = UserSettingDefinitions.defineProtoSetting("appearance", "darkSidebar", (arg0) => {
  let flag = arg0;
  if (arg0 == null) {
    flag = false;
  }
  return flag;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const wrapSettingWithSelectiveSyncing7 = UserSettingDefinitions.wrapSettingWithSelectiveSyncing;
UserSettingDefinitions = UserSettingDefinitions_mod;
let obj2 = { comparator: _mod12.isEqual };
const result6 = wrapSettingWithSelectiveSyncing7(UserSettingDefinitions.defineProtoSetting("appearance", "clientThemeSettings", (backgroundGradientPresetId) => {
  let tmp3;
  let value;
  if (backgroundGradientPresetId != null) {
    if (backgroundGradientPresetId.backgroundGradientPresetId != null) {
      value = iter.value;
    }
  }
  let prop;
  const obj = { backgroundGradientPresetId: value, customUserThemeSettings: tmp3 };
  if (backgroundGradientPresetId != null) {
    prop = backgroundGradientPresetId.customUserThemeSettings;
  }
  tmp3 = undefined;
  if (null != prop) {
    tmp3 = { colors: backgroundGradientPresetId.customUserThemeSettings.colors, gradientColorStops: backgroundGradientPresetId.customUserThemeSettings.gradientColorStops, gradientAngle: backgroundGradientPresetId.customUserThemeSettings.gradientAngle, baseMix: backgroundGradientPresetId.customUserThemeSettings.baseMix };
    const obj2 = { colors: backgroundGradientPresetId.customUserThemeSettings.colors, gradientColorStops: backgroundGradientPresetId.customUserThemeSettings.gradientColorStops, gradientAngle: backgroundGradientPresetId.customUserThemeSettings.gradientAngle, baseMix: backgroundGradientPresetId.customUserThemeSettings.baseMix };
  }
  return obj;
}, (backgroundGradientPresetId) => {
  let tmp4;
  let obj2;
  if (null != backgroundGradientPresetId.backgroundGradientPresetId) {
    const UInt32Value = wrappers.UInt32Value;
    const obj = { value: backgroundGradientPresetId.backgroundGradientPresetId };
    obj2 = UInt32Value.create(obj);
  }
  const obj3 = { backgroundGradientPresetId: obj2, customUserThemeSettings: tmp4 };
  tmp4 = undefined;
  if (null != backgroundGradientPresetId.customUserThemeSettings) {
    tmp4 = { colors: backgroundGradientPresetId.customUserThemeSettings.colors, gradientColorStops: backgroundGradientPresetId.customUserThemeSettings.gradientColorStops, gradientAngle: backgroundGradientPresetId.customUserThemeSettings.gradientAngle, baseMix: backgroundGradientPresetId.customUserThemeSettings.baseMix };
    const obj6 = { colors: backgroundGradientPresetId.customUserThemeSettings.colors, gradientColorStops: backgroundGradientPresetId.customUserThemeSettings.gradientColorStops, gradientAngle: backgroundGradientPresetId.customUserThemeSettings.gradientAngle, baseMix: backgroundGradientPresetId.customUserThemeSettings.baseMix };
  }
  return obj3;
}, obj2), "appearance", "clientThemeSettings");
UserSettingDefinitions = UserSettingDefinitions_mod;
const wrapSettingWithOverride = UserSettingDefinitions.wrapSettingWithOverride;
UserSettingDefinitions = UserSettingDefinitions_mod;
const wrapSettingWithSelectiveSyncing8 = UserSettingDefinitions.wrapSettingWithSelectiveSyncing;
UserSettingDefinitions = UserSettingDefinitions_mod;
const result7 = wrapSettingWithOverride(wrapSettingWithSelectiveSyncing8(UserSettingDefinitions.defineProtoSetting("textAndImages", "gifAutoPlay", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
}), "text", "gifAutoPlay"), "gifAutoPlay", () => {
  const iter = UserSettingsOverridesStore.getOverride("gifAutoPlay");
  let value;
  if (iter != null) {
    value = iter.value;
  }
  return value;
}, () => {
  let override;
  const items = [UserSettingsOverridesStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    const iter = override.getOverride("gifAutoPlay");
    let value;
    if (iter != null) {
      value = iter.value;
    }
    return value;
  });
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const wrapSettingWithOverride2 = UserSettingDefinitions.wrapSettingWithOverride;
UserSettingDefinitions = UserSettingDefinitions_mod;
const wrapSettingWithSelectiveSyncing9 = UserSettingDefinitions.wrapSettingWithSelectiveSyncing;
UserSettingDefinitions = UserSettingDefinitions_mod;
const result8 = wrapSettingWithOverride2(wrapSettingWithSelectiveSyncing9(UserSettingDefinitions.defineProtoSetting("textAndImages", "animateEmoji", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
}), "text", "animateEmoji"), "animateEmoji", () => {
  const iter = UserSettingsOverridesStore.getOverride("animateEmoji");
  let value;
  if (iter != null) {
    value = iter.value;
  }
  return value;
}, () => {
  let override;
  const items = [UserSettingsOverridesStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    const iter = override.getOverride("animateEmoji");
    let value;
    if (iter != null) {
      value = iter.value;
    }
    return value;
  });
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const wrapSettingWithOverride3 = UserSettingDefinitions.wrapSettingWithOverride;
UserSettingDefinitions = UserSettingDefinitions_mod;
const wrapSettingWithSelectiveSyncing10 = UserSettingDefinitions.wrapSettingWithSelectiveSyncing;
UserSettingDefinitions = UserSettingDefinitions_mod;
let closure_15 = [];
const result9 = wrapSettingWithOverride3(wrapSettingWithSelectiveSyncing10(UserSettingDefinitions.defineProtoSetting("textAndImages", "animateStickers", (value) => {
  let ALWAYS_ANIMATE;
  if (value != null) {
    ALWAYS_ANIMATE = value.value;
  }
  if (ALWAYS_ANIMATE == null) {
    ALWAYS_ANIMATE = StickerAnimationSettings.ALWAYS_ANIMATE;
  }
  return ALWAYS_ANIMATE;
}, (value) => {
  const UInt32Value = wrappers.UInt32Value;
  const obj = { value };
  return UInt32Value.create(obj);
}), "text", "animateStickers"), "animateStickers", () => {
  const iter = UserSettingsOverridesStore.getOverride("animateStickers");
  let value;
  if (iter != null) {
    value = iter.value;
  }
  return value;
}, () => {
  let override;
  const items = [UserSettingsOverridesStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    const iter = override.getOverride("animateStickers");
    let value;
    if (iter != null) {
      value = iter.value;
    }
    return value;
  });
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult79 = UserSettingDefinitions.defineProtoSetting("privacy", "activityRestrictedGuildIds", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_15;
  }
  return tmp;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
let obj3 = { delay: UserSettingsDelay.FREQUENT_USER_ACTION };
let closure_16 = [];
const defineProtoSettingResult80 = UserSettingDefinitions.defineProtoSetting("privacy", "activityRestrictedGuildIds", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_15;
  }
  return tmp;
}, (arg0) => arg0, obj3);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult81 = UserSettingDefinitions.defineProtoSetting("privacy", "activityJoiningRestrictedGuildIds", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_16;
  }
  return tmp;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const wrapSettingWithExperimentDefaults = UserSettingDefinitions.wrapSettingWithExperimentDefaults;
const obj4 = {
  baseSetting: UserSettingDefinitions.defineProtoSetting("privacy", "defaultGuildsActivityRestricted", (arg0) => arg0, (arg0) => {
    let OFF = arg0;
    if (arg0 == null) {
      OFF = preloaded_user_settings.GuildActivityStatusRestrictionDefault.OFF;
    }
    return OFF;
  }),
  isEligible() {
    const obj = RegionalFeatureConfigUtils;
    return obj.isSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.GUILD_ACTIVITY_STATUS);
  },
  useIsEligible() {
    const obj = RegionalFeatureConfigUtils;
    return obj.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.GUILD_ACTIVITY_STATUS);
  },
  ineligibleDefault: preloaded_user_settings.GuildActivityStatusRestrictionDefault.OFF,
  eligibleDefault() {
    return preloaded_user_settings.GuildActivityStatusRestrictionDefault.ON_FOR_LARGE_GUILDS;
  }
};
const result10 = wrapSettingWithExperimentDefaults(obj4);
UserSettingDefinitions = UserSettingDefinitions_mod;
const wrapSettingWithExperimentDefaults2 = UserSettingDefinitions.wrapSettingWithExperimentDefaults;
const obj5 = {
  baseSetting: UserSettingDefinitions.defineProtoSetting("privacy", "defaultGuildsActivityRestrictedV2", (arg0) => {
    let tmp = null;
    if (arg0 !== preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_UNSET) {
      tmp = arg0;
    }
    return tmp;
  }, (arg0) => {
    let ACTIVITY_STATUS_OFF = arg0;
    if (arg0 == null) {
      ACTIVITY_STATUS_OFF = preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF;
    }
    return ACTIVITY_STATUS_OFF;
  }),
  isEligible() {
    const obj = RegionalFeatureConfigUtils;
    return obj.isSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.GUILD_ACTIVITY_STATUS);
  },
  useIsEligible() {
    const obj = RegionalFeatureConfigUtils;
    return obj.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.GUILD_ACTIVITY_STATUS);
  },
  ineligibleDefault: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF,
  eligibleDefault() {
    return preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS;
  }
};
const result11 = wrapSettingWithExperimentDefaults2(obj5);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult82 = UserSettingDefinitions.defineProtoSetting("privacy", "familyCenterEnabledV2", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult83 = UserSettingDefinitions.defineProtoSetting("privacy", "hideLegacyUsername", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult84 = UserSettingDefinitions.defineProtoSetting("privacy", "allowGameFriendDmsInDiscord", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult85 = UserSettingDefinitions.defineProtoSetting("privacy", "slayerSdkReceiveDmsInGame", (arg0) => {
  let SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET = arg0;
  if (arg0 == null) {
    SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET = preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET;
  }
  return SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult86 = UserSettingDefinitions.defineProtoSetting("ads", "alwaysDeliver", (arg0) => {
  let flag = arg0;
  if (arg0 == null) {
    flag = false;
  }
  return flag;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult87 = UserSettingDefinitions.defineProtoSetting("textAndImages", "explicitContentSettings", explicitContentFromProto, explicitContentToProto);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult88 = UserSettingDefinitions.defineProtoSetting("textAndImages", "goreContentSettings", goreContentFromProto, goreContentToProto);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult89 = UserSettingDefinitions.defineProtoSetting("appearance", "searchResultExactCountEnabled", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult90 = UserSettingDefinitions.defineProtoSetting("appearance", "happeningNowCardsDisabled", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult91 = UserSettingDefinitions.defineProtoSetting("appearance", "timestampHourCycle", (arg0) => {
  let AUTO = arg0;
  if (arg0 == null) {
    AUTO = preloaded_user_settings.TimestampHourCycle.AUTO;
  }
  return AUTO;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult92 = UserSettingDefinitions.defineProtoSetting("appearance", "defaultGuildThemePreference", GuildThemeSourcePreferenceUtils.resolveDefaultGuildThemePreference, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult93 = UserSettingDefinitions.defineProtoSetting("appearance", "launchPadMode", (arg0) => {
  let LAUNCH_PAD_DISABLED = arg0;
  if (arg0 == null) {
    LAUNCH_PAD_DISABLED = preloaded_user_settings.LaunchPadMode.LAUNCH_PAD_DISABLED;
  }
  return LAUNCH_PAD_DISABLED;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult94 = UserSettingDefinitions.defineProtoSetting("appearance", "swipeRightToLeftMode", (arg0) => {
  let SWIPE_RIGHT_TO_LEFT_UNSET = arg0;
  if (arg0 == null) {
    SWIPE_RIGHT_TO_LEFT_UNSET = preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET;
  }
  return SWIPE_RIGHT_TO_LEFT_UNSET;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult95 = UserSettingDefinitions.defineProtoSetting("userContent", "lastReceivedChangelogId", (arg0) => {
  let str = arg0;
  if (arg0 == null) {
    str = "0";
  }
  return str;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult96 = UserSettingDefinitions.defineProtoSetting("safetySettings", "ignoreProfileSpeedbumpDisabled", (arg0) => {
  let flag = arg0;
  if (arg0 == null) {
    flag = false;
  }
  return flag;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult97 = UserSettingDefinitions.defineProtoSetting("appearance", "uiDensity", (arg0) => {
  let DEFAULT = arg0;
  if (arg0 === preloaded_user_settings.UIDensity.UNSET_UI_DENSITY) {
    DEFAULT = preloaded_user_settings.UIDensity.DEFAULT;
  } else if (DEFAULT == null) {
    DEFAULT = preloaded_user_settings.UIDensity.DEFAULT;
  }
  return DEFAULT;
}, (arg0) => arg0);
UserSettingDefinitions = UserSettingDefinitions_mod;
let obj6 = { delay: UserSettingsDelay.AUTOMATED };
const defineProtoSettingResult98 = UserSettingDefinitions.defineProtoSetting("inAppFeedbackSettings", "inAppFeedbackStates", (arg0) => {
  let obj = arg0;
  const mapValues = _mod12.mapValues;
  _mod12;
  if (arg0 == null) {
    obj = {};
  }
  return mapValues(obj, (arg0) => {
    const obj = _mod12;
    return obj.mapValues(arg0, (value) => {
      value = undefined;
      if (value != null) {
        value = value.value;
      }
      let NumberResult;
      if (null != value) {
        const _Number = Number;
        NumberResult = Number(value.value);
      }
      return NumberResult;
    });
  });
}, (arg0) => {
  let obj = _mod12;
  return obj.mapValues(arg0, (arg0) => {
    const obj = _mod12;
    return obj.mapValues(arg0, (arg0) => {
      const UInt64Value = closure_1_0(closure_1_1[6]).UInt64Value;
      let value;
      const create = UInt64Value.create;
      if (null != arg0) {
        const _String = String;
        value = String(arg0);
      }
      return create({ value });
    });
  });
}, obj6);
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult99 = UserSettingDefinitions.defineProtoSetting("textAndImages", "isCrossDmSearchEnabled", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
UserSettingDefinitions = UserSettingDefinitions_mod;
const defineProtoSettingResult100 = UserSettingDefinitions.defineProtoSetting("privacy", "hideFriendRequestNotes", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
const result12 = size.fileFinishedImporting("modules/user_settings/UserSettings.tsx");

export const UseLegacyChatInput = defineProtoSettingResult;
export const UseRichChatInput = defineProtoSettingResult1;
export const IncludeStickersInAutocomplete = defineProtoSettingResult2;
export const IncludeSoundmojiInAutocomplete = defineProtoSettingResult3;
export const IncludeGameMentionsInAutocomplete = defineProtoSettingResult4;
export const InlineEmojiSuggestionsEnabled = defineProtoSettingResult5;
export const RenderSpoilers = defineProtoSettingResult6;
export const UseThreadSidebar = defineProtoSettingResult7;
export const ShowInAppNotifications = defineProtoSettingResult8;
export const ReactionNotifications = defineProtoSettingResult9;
export const CustomStatusPushNotifications = defineProtoSettingResult10;
export const EnableSummaryReminderNotifications = defineProtoSettingResult11;
export const EnableScreenDowntimeScheduleNotifications = defineProtoSettingResult12;
export const EnableVoiceActivityNotifications = defineProtoSettingResult13;
export const EnableFriendOnlineNotifications = defineProtoSettingResult14;
export const EnableFriendAnniversaryNotifications = defineProtoSettingResult15;
export const EnableServerTrendingNotifications = defineProtoSettingResult16;
export const EnableProfileUpdatesNotifications = defineProtoSettingResult17;
export const EnableFriendGamingActivityNotifications = defineProtoSettingResult18;
export const EnableUpcomingServerEventNotifications = defineProtoSettingResult19;
export const FocusMode = defineProtoSettingResult20;
export const FocusModeExpiresAtSetting = defineProtoSettingResult21;
export const EmojiPickerCollapsedSections = defineProtoSettingResult22;
export const StickerPickerCollapsedSections = defineProtoSettingResult23;
export const SoundboardPickerCollapsedSections = defineProtoSettingResult24;
export const ViewImageDescriptions = defineProtoSettingResult25;
export const ShowCommandSuggestions = defineProtoSettingResult26;
export const AlwaysPreviewVideo = defineProtoSettingResult27;
export const DisableStreamPreviews = defineProtoSettingResult28;
export const NotifyFriendsOnGoLive = defineProtoSettingResult29;
export const NotifyFriendsOnComeOnline = defineProtoSettingResult30;
export const NotifyServerMembersOnGoLive = defineProtoSettingResult31;
export const NotifyFriendsOnProfileUpdate = defineProtoSettingResult32;
export const NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET = "0";
export const NotificationCenterAckedBeforeId = defineProtoSettingResult33;
export const InstallShortcutDesktop = defineProtoSettingResult34;
export const InstallShortcutStartMenu = defineProtoSettingResult35;
export const AllowActivityPartyPrivacyFriends = defineProtoSettingResult36;
export const AllowActivityPartyPrivacyVoiceChannel = defineProtoSettingResult37;
export const MessageRequestRestrictedGuildIds = defineProtoSettingResult38;
export const MessageRequestRestrictedDefault = defineProtoSettingResult39;
export const NonSpamRetrainingOptIn = defineProtoSettingResult40;
export const ContactSyncEnabled = defineProtoSettingResult41;
export const DefaultGuildsRestricted = defineProtoSettingResult42;
export const DefaultGuildsRestrictedV2 = defineProtoSettingResult43;
export const RestrictedGuildIds = defineProtoSettingResult44;
export const FriendDiscoverySettings = defineProtoSettingResult45;
export const FriendSourceFlagsSetting = defineProtoSettingResult46;
export const RtcPanelShowVoiceStates = defineProtoSettingResult47;
export const ConvertEmoticons = defineProtoSettingResult48;
export const MessageDisplayCompact = defineProtoSettingResult49;
export const DisplayCompactAvatars = defineProtoSettingResult50;
export const SoundboardSettings = defineProtoSettingResult51;
export const SoundmojiVolume = defineProtoSettingResult52;
export const StreamNotificationsEnabled = defineProtoSettingResult53;
export const DropsOptedOut = defineProtoSettingResult54;
export const Quests3PDataOptedOut = defineProtoSettingResult55;
export const AdTopicOptOuts = defineProtoSettingResult56;
export const NativePhoneIntegrationEnabled = defineProtoSettingResult57;
export const AfkTimeout = defineProtoSettingResult58;
export const ViewNsfwGuilds = defineProtoSettingResult59;
export const ViewNsfwCommands = defineProtoSettingResult60;
export const DetectPlatformAccounts = defineProtoSettingResult61;
export const DisableGamesTab = defineProtoSettingResult62;
export const EnableTTSCommand = defineProtoSettingResult63;
export const ExplicitContentFilter = defineProtoSettingResult64;
export const DmSpamFilter = defineProtoSettingResult65;
export const DmSpamFilterV2 = defineProtoSettingResult66;
export const ShowCurrentGame = defineProtoSettingResult67;
export const RecentGamesEnabled = defineProtoSettingResult68;
export const ProfileVisibility = defineProtoSettingResult69;
export const StatusSetting = defineProtoSettingResult70;
export const StatusExpiresAtSetting = defineProtoSettingResult71;
export const StatusCreatedAtSetting = defineProtoSettingResult72;
export const CustomStatusSetting = defineProtoSettingResult73;
export const ClipsAllowVoiceRecording = defineProtoSettingResult74;
export const InlineAttachmentMedia = result;
export const InlineEmbedMedia = result1;
export const RenderEmbeds = result2;
export const RenderReactions = result3;
export const DoubleTapReactionEmoji = result4;
export const TimezoneOffset = defineProtoSettingResult75;
export const ValidChannelListLayoutTypes = set1;
export const ChannelListLayoutSetting = defineProtoSettingResult76;
export const ValidMessagePreviewTypes = set2;
export const MessagePreviewSetting = defineProtoSettingResult77;
export const DeveloperMode = result5;
export const DarkSidebar = defineProtoSettingResult78;
export const ClientThemeSettings = result6;
export const GifAutoPlay = result7;
export const AnimateEmoji = result8;
export const AnimateStickers = result9;
export const ActivityRestrictedGuilds = defineProtoSettingResult79;
export const ActivityRestrictedGuildsFrequent = defineProtoSettingResult80;
export const ActivityJoiningRestrictedGuilds = defineProtoSettingResult81;
export const DefaultGuildsActivityRestricted = result10;
export const DefaultGuildsActivityRestrictedV2 = result11;
export const FamilyCenterEnabled = defineProtoSettingResult82;
export const LegacyUsernameDisabled = defineProtoSettingResult83;
export const AllowGameFriendDmsInDiscord = defineProtoSettingResult84;
export const SlayerSDKReceiveDMsInGame = defineProtoSettingResult85;
export const AlwaysDeliverAds = defineProtoSettingResult86;
export { explicitContentFromProto };
export { explicitContentToProto };
export const ExplicitContentSettings = defineProtoSettingResult87;
export { goreContentFromProto };
export { goreContentToProto };
export const GoreContentSettings = defineProtoSettingResult88;
export const SearchResultExactCountEnabled = defineProtoSettingResult89;
export const HappeningNowCardsDisabled = defineProtoSettingResult90;
export const TimestampHourCycle = defineProtoSettingResult91;
export const DefaultGuildThemePreference = defineProtoSettingResult92;
export const LaunchPadModeSetting = defineProtoSettingResult93;
export const SwipeRightToLeftModeSetting = defineProtoSettingResult94;
export const LastReceivedChangelogId = defineProtoSettingResult95;
export const IgnoreProfileSpeedbumpDisabled = defineProtoSettingResult96;
export const UIDensitySetting = defineProtoSettingResult97;
export const InAppFeedbackStates = defineProtoSettingResult98;
export const IsCrossDMSearchEnabledSetting = defineProtoSettingResult99;
export const HideFriendRequestNotes = defineProtoSettingResult100;