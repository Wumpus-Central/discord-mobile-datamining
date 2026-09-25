// discord_app/modules/user_settings/UserSettings.tsx
import _mod12 from "../../../_runtime/metro/00012__.js";
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import discord_common_shallowEqualDefault from "../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import wrappers from "../../../discord_common/js/packages/protos/google/protobuf/wrappers.tsx";
import RegionalFeatureConfigUtils from "../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import SettingsDefaultFeature from "../../../discord_common/js/shared/shared-constants/SettingsDefaultFeature.tsx";
import ChannelListLayoutTypes from "../main_tabs_v2/ChannelListLayoutTypes.tsx";
import UserSettingsOverridesStore from "UserSettingsOverridesStore.tsx";

require = fn;
function explicitContentFromProto(settings) {
  let obj = settings;
  if (settings == null) {
    obj = {};
  }
  ({ explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm } = obj);
  if (explicitContentGuilds == null) {
    explicitContentGuilds = preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  const obj2 = { explicitContentGuilds, explicitContentFriendDm: null, explicitContentNonFriendDm: null };
  if (explicitContentFriendDm == null) {
    explicitContentFriendDm = preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  obj2.explicitContentFriendDm = explicitContentFriendDm;
  if (explicitContentNonFriendDm == null) {
    explicitContentNonFriendDm = preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  obj2.explicitContentNonFriendDm = explicitContentNonFriendDm;
  return obj2;
}
function explicitContentToProto(explicitContentGuilds) {
  explicitContentGuilds = explicitContentGuilds.explicitContentGuilds;
  const obj = { explicitContentGuilds, explicitContentFriendDm: null, explicitContentNonFriendDm: null };
  const explicitContentFriendDm = explicitContentGuilds.explicitContentFriendDm;
  obj.explicitContentFriendDm = explicitContentFriendDm;
  const explicitContentNonFriendDm = explicitContentGuilds.explicitContentNonFriendDm;
  obj.explicitContentNonFriendDm = explicitContentNonFriendDm;
  return obj;
}
function goreContentFromProto(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = obj);
  if (goreContentGuilds == null) {
    goreContentGuilds = preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  const obj2 = { goreContentGuilds, goreContentFriendDm: null, goreContentNonFriendDm: null };
  if (goreContentFriendDm == null) {
    goreContentFriendDm = preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  obj2.goreContentFriendDm = goreContentFriendDm;
  if (goreContentNonFriendDm == null) {
    goreContentNonFriendDm = preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  obj2.goreContentNonFriendDm = goreContentNonFriendDm;
  return obj2;
}
function goreContentToProto(goreContentGuilds) {
  goreContentGuilds = goreContentGuilds.goreContentGuilds;
  const obj = { goreContentGuilds, goreContentFriendDm: null, goreContentNonFriendDm: null };
  const goreContentFriendDm = goreContentGuilds.goreContentFriendDm;
  obj.goreContentFriendDm = goreContentFriendDm;
  const goreContentNonFriendDm = goreContentGuilds.goreContentNonFriendDm;
  obj.goreContentNonFriendDm = goreContentNonFriendDm;
  return obj;
}
const UserSettingsConstants = fn(1084);
({ UserSettingsDelay, ListDensityMode } = UserSettingsConstants);
const DMSafetyConstants = fn(2022);
({ DmSpamFilterTypes: c3, ExplicitContentFilterTypes: closure_4 } = DMSafetyConstants);
const Constants = fn(1074);
({ AllFriendSourceFlags: hasOwnProperty, SpoilerRenderSetting: metroRequire, StatusTypes } = Constants);
const StickerAnimationSettings = fn(2023).StickerAnimationSettings;
fn(2024);
let UserSettingDefinitions = fn(2024);
const defineProtoSettingResult = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "useLegacyChatInput",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult1 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "useRichChatInput",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult2 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "includeStickersInAutocomplete",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult3 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "includeSoundmojiInAutocomplete",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult4 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "includeGameMentionsInAutocomplete",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult5 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "inlineEmojiSuggestionsEnabled",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult6 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "renderSpoilers",
  (value) => {
    let ON_CLICK;
    if (value != null) {
      ON_CLICK = value.value;
    }
    if (ON_CLICK == null) {
      ON_CLICK = constants3.ON_CLICK;
    }
    return ON_CLICK;
  },
  (value) => {
    const StringValue = wrappers.StringValue;
    return StringValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult7 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "useThreadSidebar",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult8 = UserSettingDefinitions.defineProtoSetting(
  "notifications",
  "showInAppNotifications",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult9 = UserSettingDefinitions.defineProtoSetting(
  "notifications",
  "reactionNotifications",
  (arg0) => {
    let NOTIFICATIONS_ENABLED = arg0;
    if (arg0 == null) {
      NOTIFICATIONS_ENABLED = preloaded_user_settings.ReactionNotificationType.NOTIFICATIONS_ENABLED;
    }
    return NOTIFICATIONS_ENABLED;
  },
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult10 = UserSettingDefinitions.defineProtoSetting(
  "notifications",
  "customStatusPushNotifications",
  (arg0) => {
    let STATUS_PUSH_UNSET = arg0;
    if (arg0 == null) {
      STATUS_PUSH_UNSET = preloaded_user_settings.CustomStatusPushNotificationType.STATUS_PUSH_UNSET;
    }
    return STATUS_PUSH_UNSET;
  },
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult11 = UserSettingDefinitions.defineProtoSetting(
  "notifications",
  "enableSummaryReminderNotifications",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult12 = UserSettingDefinitions.defineProtoSetting(
  "notifications",
  "enableScreenDowntimeScheduleNotifications",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult13 = UserSettingDefinitions.defineProtoSetting(
  "notifications",
  "enableVoiceActivityNotifications",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult14 = UserSettingDefinitions.defineProtoSetting(
  "notifications",
  "enableFriendOnlineNotifications",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult15 = UserSettingDefinitions.defineProtoSetting(
  "notifications",
  "enableFriendAnniversaryNotifications",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult16 = UserSettingDefinitions.defineProtoSetting(
  "notifications",
  "enableServerTrendingNotifications",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult17 = UserSettingDefinitions.defineProtoSetting(
  "notifications",
  "enableProfileUpdatesNotifications",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult18 = UserSettingDefinitions.defineProtoSetting(
  "notifications",
  "enableFriendGamingActivityNotifications",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult19 = UserSettingDefinitions.defineProtoSetting(
  "notifications",
  "enableUpcomingServerEventNotifications",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
let closure_9 = [];
const defineProtoSettingResult20 = UserSettingDefinitions.defineProtoSetting(
  "notifications",
  "quietMode",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult21 = UserSettingDefinitions.defineProtoSetting(
  "notifications",
  "focusModeExpiresAtMs",
  (arg0) => {
    let str = arg0;
    if (arg0 == null) {
      str = "0";
    }
    return str;
  },
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult22 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "emojiPickerCollapsedSections",
  (arg0) => {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = closure_9;
    }
    return tmp;
  },
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult23 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "stickerPickerCollapsedSections",
  (arg0) => {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = closure_9;
    }
    return tmp;
  },
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult24 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "soundboardPickerCollapsedSections",
  (arg0) => {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = closure_9;
    }
    return tmp;
  },
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult25 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "viewImageDescriptions",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult26 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "showCommandSuggestions",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult27 = UserSettingDefinitions.defineProtoSetting(
  "voiceAndVideo",
  "alwaysPreviewVideo",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult28 = UserSettingDefinitions.defineProtoSetting(
  "voiceAndVideo",
  "disableStreamPreviews",
  (value) => {
    value = undefined;
    if (value != null) {
      value = value.value;
    }
    return value;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult29 = UserSettingDefinitions.defineProtoSetting(
  "notifications",
  "notifyFriendsOnGoLive",
  (value) => {
    value = undefined;
    if (value != null) {
      value = value.value;
    }
    return value;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult30 = UserSettingDefinitions.defineProtoSetting(
  "notifications",
  "notifyFriendsOnComeOnline",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult31 = UserSettingDefinitions.defineProtoSetting(
  "notifications",
  "notifyFriendsOnProfileUpdate",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult32 = UserSettingDefinitions.defineProtoSetting(
  "notifications",
  "notificationCenterAckedBeforeId",
  (arg0) => {
    let str = arg0;
    if (arg0 == null) {
      str = "0";
    }
    return str;
  },
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult33 = UserSettingDefinitions.defineProtoSetting(
  "gameLibrary",
  "installShortcutDesktop",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult34 = UserSettingDefinitions.defineProtoSetting(
  "gameLibrary",
  "installShortcutStartMenu",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
let closure_10 = [];
const defineProtoSettingResult35 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "allowActivityPartyPrivacyFriends",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult36 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "allowActivityPartyPrivacyVoiceChannel",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult37 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "messageRequestRestrictedGuildIds",
  (arg0) => {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = closure_10;
    }
    return tmp;
  },
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult38 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "defaultMessageRequestRestricted",
  (value) => {
    value = undefined;
    if (value != null) {
      value = value.value;
    }
    return value;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult39 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "nonSpamRetrainingOptIn",
  (value) => {
    value = undefined;
    if (value != null) {
      value = value.value;
    }
    return value;
  },
  (value) => {
    let obj2;
    if (null != value) {
      const BoolValue = wrappers.BoolValue;
      const obj = { value };
      obj2 = BoolValue.create(obj);
    }
    return obj2;
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult40 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "contactSyncEnabled",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult41 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "defaultGuildsRestricted",
  (arg0) => {
    let flag = arg0;
    if (arg0 == null) {
      flag = false;
    }
    return flag;
  },
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult42 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "defaultGuildsRestrictedV2",
  (value) => {
    value = undefined;
    if (value != null) {
      value = value.value;
    }
    return value;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult43 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "restrictedGuildIds",
  (arg0) => {
    let items = arg0;
    if (arg0 == null) {
      items = [];
    }
    return items;
  },
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult44 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "friendDiscoveryFlags",
  (value) => {
    let num;
    if (value != null) {
      num = value.value;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  },
  (value) => {
    const UInt32Value = wrappers.UInt32Value;
    return UInt32Value.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult45 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "friendSourceFlags",
  (value) => {
    value = undefined;
    if (value != null) {
      value = value.value;
    }
    if (value == null) {
      value = hasOwnProperty;
    }
    return value;
  },
  (value) => {
    const UInt32Value = wrappers.UInt32Value;
    return UInt32Value.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult46 = UserSettingDefinitions.defineProtoSetting(
  "debug",
  "rtcPanelShowVoiceStates",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult47 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "convertEmoticons",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult48 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "messageDisplayCompact",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult49 = UserSettingDefinitions.defineProtoSetting(
  "voiceAndVideo",
  "soundboardSettings",
  (arg0) => arg0,
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult50 = UserSettingDefinitions.defineProtoSetting(
  "voiceAndVideo",
  "soundmojiVolume",
  (value) => {
    let num;
    if (value != null) {
      num = value.value;
    }
    if (num == null) {
      num = 100;
    }
    return num;
  },
  (value) => {
    const FloatValue = wrappers.FloatValue;
    return FloatValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult51 = UserSettingDefinitions.defineProtoSetting(
  "voiceAndVideo",
  "streamNotificationsEnabled",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
let closure_11 = [];
const defineProtoSettingResult52 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "dropsOptedOut",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult53 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "quests3PDataOptedOut",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult54 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "adTopicOptOuts",
  (arg0) => {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = closure_11;
    }
    return tmp;
  },
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult55 = UserSettingDefinitions.defineProtoSetting(
  "voiceAndVideo",
  "nativePhoneIntegrationEnabled",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult56 = UserSettingDefinitions.defineProtoSetting(
  "voiceAndVideo",
  "afkTimeout",
  (value) => {
    let num;
    if (value != null) {
      num = value.value;
    }
    if (num == null) {
      num = 60;
    }
    return num;
  },
  (value) => {
    const UInt32Value = wrappers.UInt32Value;
    return UInt32Value.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult57 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "viewNsfwGuilds",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult58 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "viewNsfwCommands",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult59 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "detectPlatformAccounts",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult60 = UserSettingDefinitions.defineProtoSetting(
  "gameLibrary",
  "disableGamesTab",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult61 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "enableTtsCommand",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult62 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "explicitContentFilter",
  (value) => {
    let NON_FRIENDS;
    if (value != null) {
      NON_FRIENDS = value.value;
    }
    if (NON_FRIENDS == null) {
      NON_FRIENDS = constants2.NON_FRIENDS;
    }
    return NON_FRIENDS;
  },
  (value) => {
    const UInt32Value = wrappers.UInt32Value;
    return UInt32Value.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult63 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "dmSpamFilter",
  (value) => {
    let NON_FRIENDS;
    if (value != null) {
      NON_FRIENDS = value.value;
    }
    if (NON_FRIENDS == null) {
      NON_FRIENDS = constants.NON_FRIENDS;
    }
    return NON_FRIENDS;
  },
  (value) => {
    const UInt32Value = wrappers.UInt32Value;
    return UInt32Value.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult64 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "dmSpamFilterV2",
  (arg0) => {
    let DEFAULT_UNSET = arg0;
    if (arg0 == null) {
      DEFAULT_UNSET = preloaded_user_settings.DmSpamFilterV2.DEFAULT_UNSET;
    }
    return DEFAULT_UNSET;
  },
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult65 = UserSettingDefinitions.defineProtoSetting(
  "status",
  "showCurrentGame",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult66 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "recentGamesEnabled",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
const set = new Set(Object.values(StatusTypes));
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult67 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "profileVisibility",
  (arg0) => {
    let FRIENDS_AND_ALL_GUILDS = arg0;
    if (null == arg0) {
      FRIENDS_AND_ALL_GUILDS = preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
    }
    return FRIENDS_AND_ALL_GUILDS;
  },
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult68 = UserSettingDefinitions.defineProtoSetting(
  "status",
  "status",
  (value) => {
    if (null != value) {
      if (set.has(value.value)) {
        let UNKNOWN = value.value;
      }
      return UNKNOWN;
    }
    UNKNOWN = StatusTypes.UNKNOWN;
  },
  (value) => {
    const StringValue = wrappers.StringValue;
    return StringValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult69 = UserSettingDefinitions.defineProtoSetting(
  "status",
  "statusExpiresAtMs",
  (arg0) => {
    let str = arg0;
    if (arg0 == null) {
      str = "0";
    }
    return str;
  },
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult70 = UserSettingDefinitions.defineProtoSetting(
  "status",
  "statusCreatedAtMs",
  (arg0) => arg0,
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult71 = UserSettingDefinitions.defineProtoSetting(
  "status",
  "customStatus",
  (arg0) => arg0,
  (arg0) => arg0,
);
fn(2024);
UserSettingDefinitions = fn(2024);
const result = UserSettingDefinitions.wrapSettingWithSelectiveSyncing(
  UserSettingDefinitions.defineProtoSetting(
    "textAndImages",
    "inlineAttachmentMedia",
    (value) => {
      let flag;
      if (value != null) {
        flag = value.value;
      }
      if (flag == null) {
        flag = true;
      }
      return flag;
    },
    (value) => {
      const BoolValue = wrappers.BoolValue;
      return BoolValue.create({ value });
    },
  ),
  "text",
  "inlineAttachmentMedia",
);
fn(2024);
UserSettingDefinitions = fn(2024);
const result1 = UserSettingDefinitions.wrapSettingWithSelectiveSyncing(
  UserSettingDefinitions.defineProtoSetting(
    "textAndImages",
    "inlineEmbedMedia",
    (value) => {
      let flag;
      if (value != null) {
        flag = value.value;
      }
      if (flag == null) {
        flag = true;
      }
      return flag;
    },
    (value) => {
      const BoolValue = wrappers.BoolValue;
      return BoolValue.create({ value });
    },
  ),
  "text",
  "inlineEmbedMedia",
);
fn(2024);
UserSettingDefinitions = fn(2024);
const result2 = UserSettingDefinitions.wrapSettingWithSelectiveSyncing(
  UserSettingDefinitions.defineProtoSetting(
    "textAndImages",
    "renderEmbeds",
    (value) => {
      let flag;
      if (value != null) {
        flag = value.value;
      }
      if (flag == null) {
        flag = true;
      }
      return flag;
    },
    (value) => {
      const BoolValue = wrappers.BoolValue;
      return BoolValue.create({ value });
    },
  ),
  "text",
  "renderEmbeds",
);
fn(2024);
UserSettingDefinitions = fn(2024);
const result3 = UserSettingDefinitions.wrapSettingWithSelectiveSyncing(
  UserSettingDefinitions.defineProtoSetting(
    "textAndImages",
    "renderReactions",
    (value) => {
      let flag;
      if (value != null) {
        flag = value.value;
      }
      if (flag == null) {
        flag = true;
      }
      return flag;
    },
    (value) => {
      const BoolValue = wrappers.BoolValue;
      return BoolValue.create({ value });
    },
  ),
  "text",
  "renderReactions",
);
fn(2024);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult72 = UserSettingDefinitions.defineProtoSetting(
  "clips",
  "allowVoiceRecording",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
const result4 = UserSettingDefinitions.wrapSettingWithSelectiveSyncing(
  UserSettingDefinitions.defineProtoSetting(
    "textAndImages",
    "defaultReactionEmoji",
    (disableDoubleTap) => {
      let obj = disableDoubleTap;
      if (disableDoubleTap == null) {
        obj = {};
      }
      ({ emojiId, emojiName, animated } = obj);
      value = undefined;
      if (emojiId != null) {
        value = emojiId.value;
      }
      const obj2 = { emojiId: value, emojiName: null, animated: null, disableDoubleTap: null };
      let value3;
      if (emojiName != null) {
        value3 = emojiName.value;
      }
      obj2.emojiName = value3;
      let value4;
      if (animated != null) {
        value4 = animated.value;
      }
      obj2.animated = value4;
      let flag;
      if (disableDoubleTap != null) {
        if (disableDoubleTap.disableDoubleTap != null) {
          flag = iter.value;
        }
      }
      if (flag == null) {
        flag = false;
      }
      obj2.disableDoubleTap = flag;
      return obj2;
    },
    (arg0) => {
      const obj = { emojiId: null, emojiName: null, animated: null, disableDoubleTap: null };
      ({ emojiId, emojiName, animated, disableDoubleTap } = arg0);
      const UInt64Value = wrappers.UInt64Value;
      obj.emojiId = UInt64Value.create({ value: emojiId });
      const StringValue = wrappers.StringValue;
      obj.emojiName = StringValue.create({ value: emojiName });
      const BoolValue = wrappers.BoolValue;
      obj.animated = BoolValue.create({ value: animated });
      const BoolValue2 = wrappers.BoolValue;
      obj.disableDoubleTap = BoolValue2.create({ value: disableDoubleTap });
      return obj;
    },
    { comparator: discord_common_shallowEqualDefault },
  ),
  "text",
  "defaultReactionEmoji",
);
fn(2024);
let items = [ListDensityMode.AUTO, ,];
const obj84 = { comparator: discord_common_shallowEqualDefault };
items[1] = fn(7299).ChannelListLayoutTypes.COZY;
items[2] = fn(7299).ChannelListLayoutTypes.COMPACT;
const set1 = new Set(items);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult73 = UserSettingDefinitions.defineProtoSetting(
  "localization",
  "timezoneOffset",
  (value) => {
    value = undefined;
    if (value != null) {
      value = value.value;
    }
    if (value == null) {
      value = null;
    }
    return value;
  },
  (arg0) => {
    value = arg0;
    const Int32Value = wrappers.Int32Value;
    if (arg0 == null) {
      value = 0;
    }
    return Int32Value.create({ value });
  },
);
const items1 = [
  fn(7299).MessagePreviewTypes.ALL,
  fn(7299).MessagePreviewTypes.UNREADS,
  fn(7299).MessagePreviewTypes.NONE,
];
const set2 = new Set(items1);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult74 = UserSettingDefinitions.defineProtoSetting(
  "appearance",
  "channelListLayout",
  (value) => {
    if (null != value) {
      if (set1.has(value.value)) {
        let COZY = value.value;
      }
      return COZY;
    }
    COZY = ChannelListLayoutTypes.ChannelListLayoutTypes.COZY;
  },
  (value) => {
    const StringValue = wrappers.StringValue;
    return StringValue.create({ value });
  },
);
fn(2024);
UserSettingDefinitions = fn(2024);
const result5 = UserSettingDefinitions.wrapSettingWithSelectiveSyncing(
  UserSettingDefinitions.defineProtoSetting(
    "appearance",
    "developerMode",
    (arg0) => {
      let flag = arg0;
      if (arg0 == null) {
        flag = false;
      }
      return flag;
    },
    (arg0) => arg0,
  ),
  "appearance",
  "developerMode",
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult75 = UserSettingDefinitions.defineProtoSetting(
  "appearance",
  "messagePreviews",
  (value) => {
    if (null != value) {
      if (set2.has(value.value)) {
        let ALL = value.value;
      }
      return ALL;
    }
    ALL = ChannelListLayoutTypes.MessagePreviewTypes.ALL;
  },
  (value) => {
    const StringValue = wrappers.StringValue;
    return StringValue.create({ value });
  },
);
fn(2024);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult76 = UserSettingDefinitions.defineProtoSetting(
  "appearance",
  "darkSidebar",
  (arg0) => {
    let flag = arg0;
    if (arg0 == null) {
      flag = false;
    }
    return flag;
  },
  (arg0) => arg0,
);
const result6 = UserSettingDefinitions.wrapSettingWithSelectiveSyncing(
  UserSettingDefinitions.defineProtoSetting(
    "appearance",
    "clientThemeSettings",
    (backgroundGradientPresetId) => {
      value = undefined;
      if (backgroundGradientPresetId != null) {
        if (backgroundGradientPresetId.backgroundGradientPresetId != null) {
          value = iter.value;
        }
      }
      const obj = { backgroundGradientPresetId: value, customUserThemeSettings: null };
      let prop;
      if (backgroundGradientPresetId != null) {
        prop = backgroundGradientPresetId.customUserThemeSettings;
      }
      let tmp3;
      if (null != prop) {
        const obj2 = {
          colors: backgroundGradientPresetId.customUserThemeSettings.colors,
          gradientColorStops: backgroundGradientPresetId.customUserThemeSettings.gradientColorStops,
          gradientAngle: backgroundGradientPresetId.customUserThemeSettings.gradientAngle,
          baseMix: backgroundGradientPresetId.customUserThemeSettings.baseMix,
        };
        tmp3 = obj2;
      }
      obj.customUserThemeSettings = tmp3;
      return obj;
    },
    (backgroundGradientPresetId) => {
      let obj2;
      if (null != backgroundGradientPresetId.backgroundGradientPresetId) {
        const UInt32Value = wrappers.UInt32Value;
        const obj = { value: backgroundGradientPresetId.backgroundGradientPresetId };
        obj2 = UInt32Value.create(obj);
      }
      const obj3 = { backgroundGradientPresetId: obj2, customUserThemeSettings: null };
      let tmp4;
      if (null != backgroundGradientPresetId.customUserThemeSettings) {
        const obj6 = {
          colors: backgroundGradientPresetId.customUserThemeSettings.colors,
          gradientColorStops: backgroundGradientPresetId.customUserThemeSettings.gradientColorStops,
          gradientAngle: backgroundGradientPresetId.customUserThemeSettings.gradientAngle,
          baseMix: backgroundGradientPresetId.customUserThemeSettings.baseMix,
        };
        tmp4 = obj6;
      }
      obj3.customUserThemeSettings = tmp4;
      return obj3;
    },
    { comparator: fn(12).isEqual },
  ),
  "appearance",
  "clientThemeSettings",
);
fn(2024);
fn(2024);
UserSettingDefinitions = fn(2024);
const result7 = UserSettingDefinitions.wrapSettingWithOverride(
  UserSettingDefinitions.wrapSettingWithSelectiveSyncing(
    UserSettingDefinitions.defineProtoSetting(
      "textAndImages",
      "gifAutoPlay",
      (value) => {
        let flag;
        if (value != null) {
          flag = value.value;
        }
        if (flag == null) {
          flag = true;
        }
        return flag;
      },
      (value) => {
        const BoolValue = wrappers.BoolValue;
        return BoolValue.create({ value });
      },
    ),
    "text",
    "gifAutoPlay",
  ),
  "gifAutoPlay",
  () => {
    const iter = UserSettingsOverridesStore.getOverride("gifAutoPlay");
    value = undefined;
    if (iter != null) {
      value = iter.value;
    }
    return value;
  },
  () => {
    const items = [UserSettingsOverridesStore];
    return initialize.useStateFromStores(items, () => {
      const iter = override.getOverride("gifAutoPlay");
      value = undefined;
      if (iter != null) {
        value = iter.value;
      }
      return value;
    });
  },
);
fn(2024);
fn(2024);
UserSettingDefinitions = fn(2024);
const result8 = UserSettingDefinitions.wrapSettingWithOverride(
  UserSettingDefinitions.wrapSettingWithSelectiveSyncing(
    UserSettingDefinitions.defineProtoSetting(
      "textAndImages",
      "animateEmoji",
      (value) => {
        let flag;
        if (value != null) {
          flag = value.value;
        }
        if (flag == null) {
          flag = true;
        }
        return flag;
      },
      (value) => {
        const BoolValue = wrappers.BoolValue;
        return BoolValue.create({ value });
      },
    ),
    "text",
    "animateEmoji",
  ),
  "animateEmoji",
  () => {
    const iter = UserSettingsOverridesStore.getOverride("animateEmoji");
    value = undefined;
    if (iter != null) {
      value = iter.value;
    }
    return value;
  },
  () => {
    const items = [UserSettingsOverridesStore];
    return initialize.useStateFromStores(items, () => {
      const iter = override.getOverride("animateEmoji");
      value = undefined;
      if (iter != null) {
        value = iter.value;
      }
      return value;
    });
  },
);
fn(2024);
fn(2024);
UserSettingDefinitions = fn(2024);
let closure_15 = [];
const result9 = UserSettingDefinitions.wrapSettingWithOverride(
  UserSettingDefinitions.wrapSettingWithSelectiveSyncing(
    UserSettingDefinitions.defineProtoSetting(
      "textAndImages",
      "animateStickers",
      (value) => {
        let ALWAYS_ANIMATE;
        if (value != null) {
          ALWAYS_ANIMATE = value.value;
        }
        if (ALWAYS_ANIMATE == null) {
          ALWAYS_ANIMATE = StickerAnimationSettings.ALWAYS_ANIMATE;
        }
        return ALWAYS_ANIMATE;
      },
      (value) => {
        const UInt32Value = wrappers.UInt32Value;
        return UInt32Value.create({ value });
      },
    ),
    "text",
    "animateStickers",
  ),
  "animateStickers",
  () => {
    const iter = UserSettingsOverridesStore.getOverride("animateStickers");
    value = undefined;
    if (iter != null) {
      value = iter.value;
    }
    return value;
  },
  () => {
    const items = [UserSettingsOverridesStore];
    return initialize.useStateFromStores(items, () => {
      const iter = override.getOverride("animateStickers");
      value = undefined;
      if (iter != null) {
        value = iter.value;
      }
      return value;
    });
  },
);
fn(2024);
const obj93 = { comparator: fn(12).isEqual };
UserSettingDefinitions = fn(2024);
let closure_16 = [];
const defineProtoSettingResult77 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "activityRestrictedGuildIds",
  (arg0) => {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = closure_15;
    }
    return tmp;
  },
  (arg0) => arg0,
);
const obj105 = { delay: UserSettingsDelay.FREQUENT_USER_ACTION };
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult78 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "activityRestrictedGuildIds",
  (arg0) => {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = closure_15;
    }
    return tmp;
  },
  (arg0) => arg0,
  { delay: UserSettingsDelay.FREQUENT_USER_ACTION },
);
fn(2024);
const obj108 = {
  baseSetting: null,
  isEligible: null,
  useIsEligible: null,
  ineligibleDefault: null,
  eligibleDefault: null,
};
UserSettingDefinitions = fn(2024);
obj108.baseSetting = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "defaultGuildsActivityRestricted",
  (arg0) => arg0,
  (arg0) => {
    let OFF = arg0;
    if (arg0 == null) {
      OFF = preloaded_user_settings.GuildActivityStatusRestrictionDefault.OFF;
    }
    return OFF;
  },
);
obj108.isEligible = function isEligible() {
  return RegionalFeatureConfigUtils.isSettingTeenByDefault(
    SettingsDefaultFeature.SettingsDefaultFeature.GUILD_ACTIVITY_STATUS,
  );
};
obj108.useIsEligible = function useIsEligible() {
  return RegionalFeatureConfigUtils.useIsSettingTeenByDefault(
    SettingsDefaultFeature.SettingsDefaultFeature.GUILD_ACTIVITY_STATUS,
  );
};
obj108.ineligibleDefault = fn(1186).GuildActivityStatusRestrictionDefault.OFF;
obj108.eligibleDefault = function eligibleDefault() {
  return preloaded_user_settings.GuildActivityStatusRestrictionDefault.ON_FOR_LARGE_GUILDS;
};
const result10 = UserSettingDefinitions.wrapSettingWithExperimentDefaults(obj108);
fn(2024);
const obj111 = {
  baseSetting: null,
  isEligible: null,
  useIsEligible: null,
  ineligibleDefault: null,
  eligibleDefault: null,
};
UserSettingDefinitions = fn(2024);
obj111.baseSetting = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "defaultGuildsActivityRestrictedV2",
  (arg0) => {
    let tmp = null;
    if (arg0 !== preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_UNSET) {
      tmp = arg0;
    }
    return tmp;
  },
  (arg0) => {
    let ACTIVITY_STATUS_OFF = arg0;
    if (arg0 == null) {
      ACTIVITY_STATUS_OFF = preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF;
    }
    return ACTIVITY_STATUS_OFF;
  },
);
obj111.isEligible = function isEligible() {
  return RegionalFeatureConfigUtils.isSettingTeenByDefault(
    SettingsDefaultFeature.SettingsDefaultFeature.GUILD_ACTIVITY_STATUS,
  );
};
obj111.useIsEligible = function useIsEligible() {
  return RegionalFeatureConfigUtils.useIsSettingTeenByDefault(
    SettingsDefaultFeature.SettingsDefaultFeature.GUILD_ACTIVITY_STATUS,
  );
};
obj111.ineligibleDefault = fn(1186).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF;
obj111.eligibleDefault = function eligibleDefault() {
  return preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS;
};
const result11 = UserSettingDefinitions.wrapSettingWithExperimentDefaults(obj111);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult79 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "activityJoiningRestrictedGuildIds",
  (arg0) => {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = closure_16;
    }
    return tmp;
  },
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult80 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "familyCenterEnabledV2",
  (value) => {
    value = undefined;
    if (value != null) {
      value = value.value;
    }
    return value;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult81 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "hideLegacyUsername",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult82 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "allowGameFriendDmsInDiscord",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult83 = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "slayerSdkReceiveDmsInGame",
  (arg0) => {
    let SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET = arg0;
    if (arg0 == null) {
      SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET =
        preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET;
    }
    return SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET;
  },
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult84 = UserSettingDefinitions.defineProtoSetting(
  "ads",
  "alwaysDeliver",
  (arg0) => {
    let flag = arg0;
    if (arg0 == null) {
      flag = false;
    }
    return flag;
  },
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult85 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "explicitContentSettings",
  explicitContentFromProto,
  explicitContentToProto,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult86 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "goreContentSettings",
  goreContentFromProto,
  goreContentToProto,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult87 = UserSettingDefinitions.defineProtoSetting(
  "appearance",
  "searchResultExactCountEnabled",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult88 = UserSettingDefinitions.defineProtoSetting(
  "appearance",
  "happeningNowCardsDisabled",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult89 = UserSettingDefinitions.defineProtoSetting(
  "appearance",
  "timestampHourCycle",
  (arg0) => {
    let AUTO = arg0;
    if (arg0 == null) {
      AUTO = preloaded_user_settings.TimestampHourCycle.AUTO;
    }
    return AUTO;
  },
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult90 = UserSettingDefinitions.defineProtoSetting(
  "appearance",
  "defaultGuildThemePreference",
  fn(1225).resolveDefaultGuildThemePreference,
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult91 = UserSettingDefinitions.defineProtoSetting(
  "appearance",
  "launchPadMode",
  (arg0) => {
    let LAUNCH_PAD_DISABLED = arg0;
    if (arg0 == null) {
      LAUNCH_PAD_DISABLED = preloaded_user_settings.LaunchPadMode.LAUNCH_PAD_DISABLED;
    }
    return LAUNCH_PAD_DISABLED;
  },
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult92 = UserSettingDefinitions.defineProtoSetting(
  "appearance",
  "swipeRightToLeftMode",
  (arg0) => {
    let SWIPE_RIGHT_TO_LEFT_UNSET = arg0;
    if (arg0 == null) {
      SWIPE_RIGHT_TO_LEFT_UNSET = preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET;
    }
    return SWIPE_RIGHT_TO_LEFT_UNSET;
  },
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult93 = UserSettingDefinitions.defineProtoSetting(
  "userContent",
  "lastReceivedChangelogId",
  (arg0) => {
    let str = arg0;
    if (arg0 == null) {
      str = "0";
    }
    return str;
  },
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult94 = UserSettingDefinitions.defineProtoSetting(
  "safetySettings",
  "ignoreProfileSpeedbumpDisabled",
  (arg0) => {
    let flag = arg0;
    if (arg0 == null) {
      flag = false;
    }
    return flag;
  },
  (arg0) => arg0,
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult95 = UserSettingDefinitions.defineProtoSetting(
  "appearance",
  "uiDensity",
  (arg0) => {
    let DEFAULT = arg0;
    if (arg0 === preloaded_user_settings.UIDensity.UNSET_UI_DENSITY) {
      DEFAULT = preloaded_user_settings.UIDensity.DEFAULT;
    } else if (DEFAULT == null) {
      DEFAULT = preloaded_user_settings.UIDensity.DEFAULT;
    }
    return DEFAULT;
  },
  (arg0) => arg0,
);
const obj130 = { delay: UserSettingsDelay.AUTOMATED };
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult96 = UserSettingDefinitions.defineProtoSetting(
  "inAppFeedbackSettings",
  "inAppFeedbackStates",
  (arg0) => {
    let obj = arg0;
    if (arg0 == null) {
      obj = {};
    }
    return _mod12.mapValues(obj, (arg0) =>
      _mod12.mapValues(arg0, (value) => {
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
      }),
    );
  },
  (arg0) =>
    _mod12.mapValues(arg0, (arg0) =>
      _mod12.mapValues(arg0, (arg0) => {
        const UInt64Value = closure_1_0(closure_1_1[6]).UInt64Value;
        value = undefined;
        if (null != arg0) {
          const _String = String;
          value = String(arg0);
        }
        return UInt64Value.create({ value });
      }),
    ),
  { delay: UserSettingsDelay.AUTOMATED },
);
UserSettingDefinitions = fn(2024);
const defineProtoSettingResult97 = UserSettingDefinitions.defineProtoSetting(
  "textAndImages",
  "isCrossDmSearchEnabled",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
const size = fn(2);
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
export const NotifyFriendsOnProfileUpdate = defineProtoSettingResult31;
export const NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET = "0";
export const NotificationCenterAckedBeforeId = defineProtoSettingResult32;
export const InstallShortcutDesktop = defineProtoSettingResult33;
export const InstallShortcutStartMenu = defineProtoSettingResult34;
export const AllowActivityPartyPrivacyFriends = defineProtoSettingResult35;
export const AllowActivityPartyPrivacyVoiceChannel = defineProtoSettingResult36;
export const MessageRequestRestrictedGuildIds = defineProtoSettingResult37;
export const MessageRequestRestrictedDefault = defineProtoSettingResult38;
export const NonSpamRetrainingOptIn = defineProtoSettingResult39;
export const ContactSyncEnabled = defineProtoSettingResult40;
export const DefaultGuildsRestricted = defineProtoSettingResult41;
export const DefaultGuildsRestrictedV2 = defineProtoSettingResult42;
export const RestrictedGuildIds = defineProtoSettingResult43;
export const FriendDiscoverySettings = defineProtoSettingResult44;
export const FriendSourceFlagsSetting = defineProtoSettingResult45;
export const RtcPanelShowVoiceStates = defineProtoSettingResult46;
export const ConvertEmoticons = defineProtoSettingResult47;
export const MessageDisplayCompact = defineProtoSettingResult48;
export const SoundboardSettings = defineProtoSettingResult49;
export const SoundmojiVolume = defineProtoSettingResult50;
export const StreamNotificationsEnabled = defineProtoSettingResult51;
export const DropsOptedOut = defineProtoSettingResult52;
export const Quests3PDataOptedOut = defineProtoSettingResult53;
export const AdTopicOptOuts = defineProtoSettingResult54;
export const NativePhoneIntegrationEnabled = defineProtoSettingResult55;
export const AfkTimeout = defineProtoSettingResult56;
export const ViewNsfwGuilds = defineProtoSettingResult57;
export const ViewNsfwCommands = defineProtoSettingResult58;
export const DetectPlatformAccounts = defineProtoSettingResult59;
export const DisableGamesTab = defineProtoSettingResult60;
export const EnableTTSCommand = defineProtoSettingResult61;
export const ExplicitContentFilter = defineProtoSettingResult62;
export const DmSpamFilter = defineProtoSettingResult63;
export const DmSpamFilterV2 = defineProtoSettingResult64;
export const ShowCurrentGame = defineProtoSettingResult65;
export const RecentGamesEnabled = defineProtoSettingResult66;
export const ProfileVisibility = defineProtoSettingResult67;
export const StatusSetting = defineProtoSettingResult68;
export const StatusExpiresAtSetting = defineProtoSettingResult69;
export const StatusCreatedAtSetting = defineProtoSettingResult70;
export const CustomStatusSetting = defineProtoSettingResult71;
export const ClipsAllowVoiceRecording = defineProtoSettingResult72;
export const InlineAttachmentMedia = result;
export const InlineEmbedMedia = result1;
export const RenderEmbeds = result2;
export const RenderReactions = result3;
export const DoubleTapReactionEmoji = result4;
export const TimezoneOffset = defineProtoSettingResult73;
export const ValidChannelListLayoutTypes = set1;
export const ChannelListLayoutSetting = defineProtoSettingResult74;
export const ValidMessagePreviewTypes = set2;
export const MessagePreviewSetting = defineProtoSettingResult75;
export const DeveloperMode = result5;
export const DarkSidebar = defineProtoSettingResult76;
export const ClientThemeSettings = result6;
export const GifAutoPlay = result7;
export const AnimateEmoji = result8;
export const AnimateStickers = result9;
export const ActivityRestrictedGuilds = defineProtoSettingResult77;
export const ActivityRestrictedGuildsFrequent = defineProtoSettingResult78;
export const ActivityJoiningRestrictedGuilds = defineProtoSettingResult79;
export const DefaultGuildsActivityRestricted = result10;
export const DefaultGuildsActivityRestrictedV2 = result11;
export const FamilyCenterEnabled = defineProtoSettingResult80;
export const LegacyUsernameDisabled = defineProtoSettingResult81;
export const AllowGameFriendDmsInDiscord = defineProtoSettingResult82;
export const SlayerSDKReceiveDMsInGame = defineProtoSettingResult83;
export const AlwaysDeliverAds = defineProtoSettingResult84;
export { explicitContentFromProto };
export { explicitContentToProto };
export const ExplicitContentSettings = defineProtoSettingResult85;
export { goreContentFromProto };
export { goreContentToProto };
export const GoreContentSettings = defineProtoSettingResult86;
export const SearchResultExactCountEnabled = defineProtoSettingResult87;
export const HappeningNowCardsDisabled = defineProtoSettingResult88;
export const TimestampHourCycle = defineProtoSettingResult89;
export const DefaultGuildThemePreference = defineProtoSettingResult90;
export const LaunchPadModeSetting = defineProtoSettingResult91;
export const SwipeRightToLeftModeSetting = defineProtoSettingResult92;
export const LastReceivedChangelogId = defineProtoSettingResult93;
export const IgnoreProfileSpeedbumpDisabled = defineProtoSettingResult94;
export const UIDensitySetting = defineProtoSettingResult95;
export const InAppFeedbackStates = defineProtoSettingResult96;
export const IsCrossDMSearchEnabledSetting = defineProtoSettingResult97;
export const HideFriendRequestNotes = UserSettingDefinitions.defineProtoSetting(
  "privacy",
  "hideFriendRequestNotes",
  (value) => {
    value = undefined;
    if (value != null) {
      value = value.value;
    }
    return value;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    return BoolValue.create({ value });
  },
);
