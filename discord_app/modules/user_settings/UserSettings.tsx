// discord_app/modules/user_settings/UserSettings.tsx
import apply from "../../../_runtime/00012_apply.js";
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import shallowEqualDefault from "../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import create from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import defineProperty from "../../../discord_common/js/packages/protos/google/protobuf/wrappers.tsx";
import ChannelListLayoutTypes from "../main_tabs_v2/ChannelListLayoutTypes.tsx";
import isFeatureAgeGated from "../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import SettingsDefaultFeature from "../../../discord_common/js/shared/shared-constants/SettingsDefaultFeature.tsx";
import updateExistingSettings from "UserSettingsOverridesStore.tsx";
import MAX_FAVORITES from "UserSettingsConstants.tsx";
import items from "privacy_and_safety/DMSafetyConstants.tsx";
import ME from "../../Constants.tsx";
import { StickerAnimationSettings } from "../stickers/StickersConstants.tsx";
import "obj100";
import obj100 from "UserSettingDefinitions.tsx";

require = fn;
function explicitContentFromProto(settings) {
  let obj = settings;
  if (settings == null) {
    obj = {};
  }
  ({ explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm } = obj);
  if (explicitContentGuilds == null) {
    explicitContentGuilds = create.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  obj = { explicitContentGuilds, explicitContentFriendDm: null, explicitContentNonFriendDm: null };
  if (explicitContentFriendDm == null) {
    explicitContentFriendDm = create.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  obj[1] = explicitContentFriendDm;
  if (explicitContentNonFriendDm == null) {
    explicitContentNonFriendDm = create.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  obj[2] = explicitContentNonFriendDm;
  return obj;
}
function explicitContentToProto(explicitContentGuilds, arg1) {
  explicitContentGuilds = explicitContentGuilds.explicitContentGuilds;
  const obj = { explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm };
  explicitContentFriendDm = explicitContentGuilds.explicitContentFriendDm;
  explicitContentNonFriendDm = explicitContentGuilds.explicitContentNonFriendDm;
  return obj;
}
function goreContentFromProto(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = obj);
  if (goreContentGuilds == null) {
    goreContentGuilds = create.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  obj = { goreContentGuilds, goreContentFriendDm: null, goreContentNonFriendDm: null };
  if (goreContentFriendDm == null) {
    goreContentFriendDm = create.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  obj[1] = goreContentFriendDm;
  if (goreContentNonFriendDm == null) {
    goreContentNonFriendDm = create.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  obj[2] = goreContentNonFriendDm;
  return obj;
}
function goreContentToProto(goreContentGuilds) {
  goreContentGuilds = goreContentGuilds.goreContentGuilds;
  const obj = { goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm };
  goreContentFriendDm = goreContentGuilds.goreContentFriendDm;
  goreContentNonFriendDm = goreContentGuilds.goreContentNonFriendDm;
  return obj;
}
({ UserSettingsDelay, ListDensityMode } = MAX_FAVORITES);
({ DmSpamFilterTypes: c3, ExplicitContentFilterTypes: c4 } = items);
({ AllFriendSourceFlags: c5, SpoilerRenderSetting: closure_6, StatusTypes } = ME);
const defineProtoSettingResult = obj100.defineProtoSetting("textAndImages", "useLegacyChatInput", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult1 = obj100.defineProtoSetting("textAndImages", "useRichChatInput", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult2 = obj100.defineProtoSetting("textAndImages", "includeStickersInAutocomplete", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult3 = obj100.defineProtoSetting("textAndImages", "includeSoundmojiInAutocomplete", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult4 = obj100.defineProtoSetting("textAndImages", "includeGameMentionsInAutocomplete", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult5 = obj100.defineProtoSetting("textAndImages", "renderSpoilers", (value) => {
  let ON_CLICK;
  if (value != null) {
    ON_CLICK = value.value;
  }
  if (ON_CLICK == null) {
    ON_CLICK = constants3.ON_CLICK;
  }
  return ON_CLICK;
}, (value) => {
  const StringValue = defineProperty.StringValue;
  return StringValue.create({ value });
});
const defineProtoSettingResult6 = obj100.defineProtoSetting("textAndImages", "useThreadSidebar", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult7 = obj100.defineProtoSetting("notifications", "showInAppNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult8 = obj100.defineProtoSetting("notifications", "reactionNotifications", (arg0) => {
  let NOTIFICATIONS_ENABLED = arg0;
  if (arg0 == null) {
    NOTIFICATIONS_ENABLED = create.ReactionNotificationType.NOTIFICATIONS_ENABLED;
  }
  return NOTIFICATIONS_ENABLED;
}, (arg0) => arg0);
const defineProtoSettingResult9 = obj100.defineProtoSetting("notifications", "customStatusPushNotifications", (arg0) => {
  let STATUS_PUSH_UNSET = arg0;
  if (arg0 == null) {
    STATUS_PUSH_UNSET = create.CustomStatusPushNotificationType.STATUS_PUSH_UNSET;
  }
  return STATUS_PUSH_UNSET;
}, (arg0) => arg0);
const defineProtoSettingResult10 = obj100.defineProtoSetting("notifications", "enableSummaryReminderNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult11 = obj100.defineProtoSetting("notifications", "enableScreenDowntimeScheduleNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult12 = obj100.defineProtoSetting("notifications", "enableVoiceActivityNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult13 = obj100.defineProtoSetting("notifications", "enableFriendOnlineNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult14 = obj100.defineProtoSetting("notifications", "enableFriendAnniversaryNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult15 = obj100.defineProtoSetting("notifications", "enableServerTrendingNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult16 = obj100.defineProtoSetting("notifications", "enableProfileUpdatesNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult17 = obj100.defineProtoSetting("notifications", "enableFriendGamingActivityNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult18 = obj100.defineProtoSetting("notifications", "enableUpcomingServerEventNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
let closure_9 = [];
const defineProtoSettingResult19 = obj100.defineProtoSetting("notifications", "quietMode", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult20 = obj100.defineProtoSetting("notifications", "focusModeExpiresAtMs", (arg0) => {
  let str = arg0;
  if (arg0 == null) {
    str = "0";
  }
  return str;
}, (arg0) => arg0);
const defineProtoSettingResult21 = obj100.defineProtoSetting("textAndImages", "emojiPickerCollapsedSections", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_9;
  }
  return tmp;
}, (arg0) => arg0);
const defineProtoSettingResult22 = obj100.defineProtoSetting("textAndImages", "stickerPickerCollapsedSections", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_9;
  }
  return tmp;
}, (arg0) => arg0);
const defineProtoSettingResult23 = obj100.defineProtoSetting("textAndImages", "soundboardPickerCollapsedSections", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_9;
  }
  return tmp;
}, (arg0) => arg0);
const defineProtoSettingResult24 = obj100.defineProtoSetting("textAndImages", "viewImageDescriptions", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult25 = obj100.defineProtoSetting("textAndImages", "showCommandSuggestions", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult26 = obj100.defineProtoSetting("voiceAndVideo", "alwaysPreviewVideo", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult27 = obj100.defineProtoSetting("voiceAndVideo", "disableStreamPreviews", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult28 = obj100.defineProtoSetting("notifications", "notifyFriendsOnGoLive", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult29 = obj100.defineProtoSetting("notifications", "notifyFriendsOnComeOnline", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult30 = obj100.defineProtoSetting("notifications", "notifyFriendsOnProfileUpdate", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult31 = obj100.defineProtoSetting("notifications", "notificationCenterAckedBeforeId", (arg0) => {
  let str = arg0;
  if (arg0 == null) {
    str = "0";
  }
  return str;
}, (arg0) => arg0);
const defineProtoSettingResult32 = obj100.defineProtoSetting("gameLibrary", "installShortcutDesktop", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult33 = obj100.defineProtoSetting("gameLibrary", "installShortcutStartMenu", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
let closure_10 = [];
const defineProtoSettingResult34 = obj100.defineProtoSetting("privacy", "allowActivityPartyPrivacyFriends", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult35 = obj100.defineProtoSetting("privacy", "allowActivityPartyPrivacyVoiceChannel", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult36 = obj100.defineProtoSetting("privacy", "messageRequestRestrictedGuildIds", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_10;
  }
  return tmp;
}, (arg0) => arg0);
const defineProtoSettingResult37 = obj100.defineProtoSetting("privacy", "defaultMessageRequestRestricted", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult38 = obj100.defineProtoSetting("privacy", "nonSpamRetrainingOptIn", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (arg0) => {
  let obj;
  if (null != arg0) {
    const BoolValue = defineProperty.BoolValue;
    obj = { value: null };
    obj[0] = arg0;
    obj = BoolValue.create(obj);
  }
  return obj;
});
const defineProtoSettingResult39 = obj100.defineProtoSetting("privacy", "contactSyncEnabled", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult40 = obj100.defineProtoSetting("privacy", "defaultGuildsRestricted", (arg0) => {
  let flag = arg0;
  if (arg0 == null) {
    flag = false;
  }
  return flag;
}, (arg0) => arg0);
const defineProtoSettingResult41 = obj100.defineProtoSetting("privacy", "defaultGuildsRestrictedV2", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult42 = obj100.defineProtoSetting("privacy", "restrictedGuildIds", (arg0) => {
  let items = arg0;
  if (arg0 == null) {
    items = [];
  }
  return items;
}, (arg0) => arg0);
const defineProtoSettingResult43 = obj100.defineProtoSetting("privacy", "friendDiscoveryFlags", (value) => {
  let num;
  if (value != null) {
    num = value.value;
  }
  if (num == null) {
    num = 0;
  }
  return num;
}, (value) => {
  const UInt32Value = defineProperty.UInt32Value;
  return UInt32Value.create({ value });
});
const defineProtoSettingResult44 = obj100.defineProtoSetting("privacy", "friendSourceFlags", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  if (value == null) {
    value = closure_5;
  }
  return value;
}, (value) => {
  const UInt32Value = defineProperty.UInt32Value;
  return UInt32Value.create({ value });
});
const defineProtoSettingResult45 = obj100.defineProtoSetting("debug", "rtcPanelShowVoiceStates", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult46 = obj100.defineProtoSetting("textAndImages", "convertEmoticons", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult47 = obj100.defineProtoSetting("textAndImages", "messageDisplayCompact", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult48 = obj100.defineProtoSetting("voiceAndVideo", "soundboardSettings", (arg0) => arg0, (arg0) => arg0);
const defineProtoSettingResult49 = obj100.defineProtoSetting("voiceAndVideo", "soundmojiVolume", (value) => {
  let num;
  if (value != null) {
    num = value.value;
  }
  if (num == null) {
    num = 100;
  }
  return num;
}, (value) => {
  const FloatValue = defineProperty.FloatValue;
  return FloatValue.create({ value });
});
const defineProtoSettingResult50 = obj100.defineProtoSetting("voiceAndVideo", "streamNotificationsEnabled", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
let closure_11 = [];
const defineProtoSettingResult51 = obj100.defineProtoSetting("privacy", "dropsOptedOut", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult52 = obj100.defineProtoSetting("privacy", "quests3PDataOptedOut", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult53 = obj100.defineProtoSetting("privacy", "adTopicOptOuts", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_11;
  }
  return tmp;
}, (arg0) => arg0);
const defineProtoSettingResult54 = obj100.defineProtoSetting("voiceAndVideo", "nativePhoneIntegrationEnabled", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult55 = obj100.defineProtoSetting("voiceAndVideo", "afkTimeout", (value) => {
  let num;
  if (value != null) {
    num = value.value;
  }
  if (num == null) {
    num = 60;
  }
  return num;
}, (value) => {
  const UInt32Value = defineProperty.UInt32Value;
  return UInt32Value.create({ value });
});
const defineProtoSettingResult56 = obj100.defineProtoSetting("textAndImages", "viewNsfwGuilds", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult57 = obj100.defineProtoSetting("textAndImages", "viewNsfwCommands", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult58 = obj100.defineProtoSetting("privacy", "detectPlatformAccounts", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult59 = obj100.defineProtoSetting("gameLibrary", "disableGamesTab", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult60 = obj100.defineProtoSetting("textAndImages", "enableTtsCommand", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult61 = obj100.defineProtoSetting("textAndImages", "explicitContentFilter", (value) => {
  let NON_FRIENDS;
  if (value != null) {
    NON_FRIENDS = value.value;
  }
  if (NON_FRIENDS == null) {
    NON_FRIENDS = constants2.NON_FRIENDS;
  }
  return NON_FRIENDS;
}, (value) => {
  const UInt32Value = defineProperty.UInt32Value;
  return UInt32Value.create({ value });
});
const defineProtoSettingResult62 = obj100.defineProtoSetting("textAndImages", "dmSpamFilter", (value) => {
  let NON_FRIENDS;
  if (value != null) {
    NON_FRIENDS = value.value;
  }
  if (NON_FRIENDS == null) {
    NON_FRIENDS = constants.NON_FRIENDS;
  }
  return NON_FRIENDS;
}, (value) => {
  const UInt32Value = defineProperty.UInt32Value;
  return UInt32Value.create({ value });
});
const defineProtoSettingResult63 = obj100.defineProtoSetting("textAndImages", "dmSpamFilterV2", (arg0) => {
  let DEFAULT_UNSET = arg0;
  if (arg0 == null) {
    DEFAULT_UNSET = create.DmSpamFilterV2.DEFAULT_UNSET;
  }
  return DEFAULT_UNSET;
}, (arg0) => arg0);
const defineProtoSettingResult64 = obj100.defineProtoSetting("status", "showCurrentGame", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult65 = obj100.defineProtoSetting("privacy", "recentGamesEnabled", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const set = new Set(Object.values(StatusTypes));
const defineProtoSettingResult66 = obj100.defineProtoSetting("privacy", "profileVisibility", (arg0) => {
  let FRIENDS_AND_ALL_GUILDS = arg0;
  if (null == arg0) {
    FRIENDS_AND_ALL_GUILDS = create.ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
  }
  return FRIENDS_AND_ALL_GUILDS;
}, (arg0) => arg0);
const defineProtoSettingResult67 = obj100.defineProtoSetting("status", "status", (value) => {
  if (null != value) {
    if (set.has(value.value)) {
      let UNKNOWN = value.value;
    }
    return UNKNOWN;
  }
  UNKNOWN = StatusTypes.UNKNOWN;
}, (value) => {
  const StringValue = defineProperty.StringValue;
  return StringValue.create({ value });
});
const defineProtoSettingResult68 = obj100.defineProtoSetting("status", "statusExpiresAtMs", (arg0) => {
  let str = arg0;
  if (arg0 == null) {
    str = "0";
  }
  return str;
}, (arg0) => arg0);
const defineProtoSettingResult69 = obj100.defineProtoSetting("status", "statusCreatedAtMs", (arg0) => arg0, (arg0) => arg0);
const defineProtoSettingResult70 = obj100.defineProtoSetting("status", "customStatus", (arg0) => arg0, (arg0) => arg0);
const result = obj100.wrapSettingWithSelectiveSyncing(obj100.defineProtoSetting("textAndImages", "inlineAttachmentMedia", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
}), "text", "inlineAttachmentMedia");
const result1 = obj100.wrapSettingWithSelectiveSyncing(obj100.defineProtoSetting("textAndImages", "inlineEmbedMedia", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
}), "text", "inlineEmbedMedia");
const result2 = obj100.wrapSettingWithSelectiveSyncing(obj100.defineProtoSetting("textAndImages", "renderEmbeds", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
}), "text", "renderEmbeds");
const result3 = obj100.wrapSettingWithSelectiveSyncing(obj100.defineProtoSetting("textAndImages", "renderReactions", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
}), "text", "renderReactions");
obj100 = { comparator: shallowEqualDefault };
const result4 = obj100.wrapSettingWithSelectiveSyncing(obj100.defineProtoSetting("textAndImages", "defaultReactionEmoji", (disableDoubleTap) => {
  let obj = disableDoubleTap;
  if (disableDoubleTap == null) {
    obj = {};
  }
  ({ emojiId, emojiName, animated } = obj);
  let value;
  if (emojiId != null) {
    value = emojiId.value;
  }
  obj = { emojiId: value, emojiName: null, animated: null, disableDoubleTap: null };
  value = undefined;
  if (emojiName != null) {
    value = emojiName.value;
  }
  obj[1] = value;
  let value1;
  if (animated != null) {
    value1 = animated.value;
  }
  obj[2] = value1;
  let flag;
  if (disableDoubleTap != null) {
    if (disableDoubleTap.disableDoubleTap != null) {
      flag = iter.value;
    }
  }
  if (flag == null) {
    flag = false;
  }
  obj[3] = flag;
  return obj;
}, (arg0) => {
  const obj = { emojiId: null, emojiName: null, animated: null, disableDoubleTap: null };
  ({ emojiId, emojiName, animated, disableDoubleTap } = arg0);
  const UInt64Value = defineProperty.UInt64Value;
  obj[0] = UInt64Value.create({ value: emojiId });
  const StringValue = defineProperty.StringValue;
  obj[1] = StringValue.create({ value: emojiName });
  const BoolValue = defineProperty.BoolValue;
  obj[2] = BoolValue.create({ value: animated });
  const BoolValue2 = defineProperty.BoolValue;
  obj[3] = BoolValue2.create({ value: disableDoubleTap });
  return obj;
}, obj100), "text", "defaultReactionEmoji");
items = [ListDensityMode.AUTO, , ];
const defineProtoSettingResult71 = obj100.defineProtoSetting("clips", "allowVoiceRecording", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
items[1] = require("ChannelListLayoutTypes").ChannelListLayoutTypes.COZY;
items[2] = require("ChannelListLayoutTypes").ChannelListLayoutTypes.COMPACT;
const set1 = new Set(items);
const defineProtoSettingResult72 = obj100.defineProtoSetting("localization", "timezoneOffset", (value) => {
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
  const Int32Value = defineProperty.Int32Value;
  if (arg0 == null) {
    value = 0;
  }
  return Int32Value.create({ value });
});
const items1 = [require("ChannelListLayoutTypes").MessagePreviewTypes.ALL, require("ChannelListLayoutTypes").MessagePreviewTypes.UNREADS, require("ChannelListLayoutTypes").MessagePreviewTypes.NONE];
const set2 = new Set(items1);
const defineProtoSettingResult73 = obj100.defineProtoSetting("appearance", "channelListLayout", (value) => {
  if (null != value) {
    if (set1.has(value.value)) {
      let COZY = value.value;
    }
    return COZY;
  }
  COZY = ChannelListLayoutTypes.ChannelListLayoutTypes.COZY;
}, (value) => {
  const StringValue = defineProperty.StringValue;
  return StringValue.create({ value });
});
const result5 = obj100.wrapSettingWithSelectiveSyncing(obj100.defineProtoSetting("appearance", "developerMode", (arg0) => {
  let flag = arg0;
  if (arg0 == null) {
    flag = false;
  }
  return flag;
}, (arg0) => arg0), "appearance", "developerMode");
const defineProtoSettingResult74 = obj100.defineProtoSetting("appearance", "messagePreviews", (value) => {
  if (null != value) {
    if (set2.has(value.value)) {
      let ALL = value.value;
    }
    return ALL;
  }
  ALL = ChannelListLayoutTypes.MessagePreviewTypes.ALL;
}, (value) => {
  const StringValue = defineProperty.StringValue;
  return StringValue.create({ value });
});
obj100 = { comparator: require("apply").isEqual };
const result6 = obj100.wrapSettingWithSelectiveSyncing(obj100.defineProtoSetting("appearance", "clientThemeSettings", (backgroundGradientPresetId) => {
  let value;
  if (backgroundGradientPresetId != null) {
    if (backgroundGradientPresetId.backgroundGradientPresetId != null) {
      value = iter.value;
    }
  }
  let obj = { backgroundGradientPresetId: value, customUserThemeSettings: null };
  let prop;
  if (backgroundGradientPresetId != null) {
    prop = backgroundGradientPresetId.customUserThemeSettings;
  }
  let tmp3;
  if (null != prop) {
    obj = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
    obj[0] = backgroundGradientPresetId.customUserThemeSettings.colors;
    obj[1] = backgroundGradientPresetId.customUserThemeSettings.gradientColorStops;
    obj[2] = backgroundGradientPresetId.customUserThemeSettings.gradientAngle;
    obj[3] = backgroundGradientPresetId.customUserThemeSettings.baseMix;
    tmp3 = obj;
  }
  obj[1] = tmp3;
  return obj;
}, (backgroundGradientPresetId) => {
  let obj;
  if (null != backgroundGradientPresetId.backgroundGradientPresetId) {
    const UInt32Value = defineProperty.UInt32Value;
    obj = { value: null };
    obj[0] = backgroundGradientPresetId.backgroundGradientPresetId;
    obj = UInt32Value.create(obj);
  }
  obj = { backgroundGradientPresetId: obj, customUserThemeSettings: null };
  let tmp4;
  if (null != backgroundGradientPresetId.customUserThemeSettings) {
    obj1 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
    obj1[0] = backgroundGradientPresetId.customUserThemeSettings.colors;
    obj1[1] = backgroundGradientPresetId.customUserThemeSettings.gradientColorStops;
    obj1[2] = backgroundGradientPresetId.customUserThemeSettings.gradientAngle;
    obj1[3] = backgroundGradientPresetId.customUserThemeSettings.baseMix;
    tmp4 = obj1;
  }
  obj[1] = tmp4;
  return obj;
}, obj100), "appearance", "clientThemeSettings");
const result7 = obj100.wrapSettingWithOverride(obj100.wrapSettingWithSelectiveSyncing(obj100.defineProtoSetting("textAndImages", "gifAutoPlay", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
}), "text", "gifAutoPlay"), "gifAutoPlay", () => {
  const iter = store.getOverride("gifAutoPlay");
  let value;
  if (iter != null) {
    value = iter.value;
  }
  return value;
}, () => {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => {
    const iter = override.getOverride("gifAutoPlay");
    let value;
    if (iter != null) {
      value = iter.value;
    }
    return value;
  });
});
const result8 = obj100.wrapSettingWithOverride(obj100.wrapSettingWithSelectiveSyncing(obj100.defineProtoSetting("textAndImages", "animateEmoji", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
}), "text", "animateEmoji"), "animateEmoji", () => {
  const iter = store.getOverride("animateEmoji");
  let value;
  if (iter != null) {
    value = iter.value;
  }
  return value;
}, () => {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => {
    const iter = override.getOverride("animateEmoji");
    let value;
    if (iter != null) {
      value = iter.value;
    }
    return value;
  });
});
let closure_15 = [];
const result9 = obj100.wrapSettingWithOverride(obj100.wrapSettingWithSelectiveSyncing(obj100.defineProtoSetting("textAndImages", "animateStickers", (value) => {
  let ALWAYS_ANIMATE;
  if (value != null) {
    ALWAYS_ANIMATE = value.value;
  }
  if (ALWAYS_ANIMATE == null) {
    ALWAYS_ANIMATE = StickerAnimationSettings.ALWAYS_ANIMATE;
  }
  return ALWAYS_ANIMATE;
}, (value) => {
  const UInt32Value = defineProperty.UInt32Value;
  return UInt32Value.create({ value });
}), "text", "animateStickers"), "animateStickers", () => {
  const iter = store.getOverride("animateStickers");
  let value;
  if (iter != null) {
    value = iter.value;
  }
  return value;
}, () => {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => {
    const iter = override.getOverride("animateStickers");
    let value;
    if (iter != null) {
      value = iter.value;
    }
    return value;
  });
});
const defineProtoSettingResult75 = obj100.defineProtoSetting("appearance", "darkSidebar", (arg0) => {
  let flag = arg0;
  if (arg0 == null) {
    flag = false;
  }
  return flag;
}, (arg0) => arg0);
obj100 = { delay: UserSettingsDelay.FREQUENT_USER_ACTION };
let closure_16 = [];
const defineProtoSettingResult76 = obj100.defineProtoSetting("privacy", "activityRestrictedGuildIds", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_15;
  }
  return tmp;
}, (arg0) => arg0);
const defineProtoSettingResult77 = obj100.defineProtoSetting("privacy", "activityRestrictedGuildIds", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_15;
  }
  return tmp;
}, (arg0) => arg0, obj100);
obj100[0] = obj100.defineProtoSetting("privacy", "defaultGuildsActivityRestricted", (arg0) => arg0, (arg0) => {
  let OFF = arg0;
  if (arg0 == null) {
    OFF = create.GuildActivityStatusRestrictionDefault.OFF;
  }
  return OFF;
});
obj100[1] = function isEligible() {
  return isFeatureAgeGated.isSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.GUILD_ACTIVITY_STATUS);
};
obj100[2] = function useIsEligible() {
  return isFeatureAgeGated.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.GUILD_ACTIVITY_STATUS);
};
obj100[3] = require("create").GuildActivityStatusRestrictionDefault.OFF;
obj100[4] = function eligibleDefault() {
  return create.GuildActivityStatusRestrictionDefault.ON_FOR_LARGE_GUILDS;
};
obj100.wrapSettingWithExperimentDefaults(obj100);
obj100[0] = obj100.defineProtoSetting("privacy", "defaultGuildsActivityRestrictedV2", (arg0) => {
  let tmp = null;
  if (arg0 !== create.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_UNSET) {
    tmp = arg0;
  }
  return tmp;
}, (arg0) => {
  let ACTIVITY_STATUS_OFF = arg0;
  if (arg0 == null) {
    ACTIVITY_STATUS_OFF = create.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF;
  }
  return ACTIVITY_STATUS_OFF;
});
obj100[1] = function isEligible() {
  return isFeatureAgeGated.isSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.GUILD_ACTIVITY_STATUS);
};
obj100[2] = function useIsEligible() {
  return isFeatureAgeGated.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.GUILD_ACTIVITY_STATUS);
};
obj100[3] = require("create").GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF;
obj100[4] = function eligibleDefault() {
  return create.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS;
};
obj100.wrapSettingWithExperimentDefaults(obj100);
const defineProtoSettingResult78 = obj100.defineProtoSetting("privacy", "activityJoiningRestrictedGuildIds", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_16;
  }
  return tmp;
}, (arg0) => arg0);
const defineProtoSettingResult79 = obj100.defineProtoSetting("privacy", "familyCenterEnabledV2", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult80 = obj100.defineProtoSetting("privacy", "hideLegacyUsername", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult81 = obj100.defineProtoSetting("privacy", "allowGameFriendDmsInDiscord", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult82 = obj100.defineProtoSetting("privacy", "slayerSdkReceiveDmsInGame", (arg0) => {
  let SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET = arg0;
  if (arg0 == null) {
    SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET = create.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET;
  }
  return SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET;
}, (arg0) => arg0);
const defineProtoSettingResult83 = obj100.defineProtoSetting("ads", "alwaysDeliver", (arg0) => {
  let flag = arg0;
  if (arg0 == null) {
    flag = false;
  }
  return flag;
}, (arg0) => arg0);
const defineProtoSettingResult84 = obj100.defineProtoSetting("textAndImages", "explicitContentSettings", explicitContentFromProto, explicitContentToProto);
const defineProtoSettingResult85 = obj100.defineProtoSetting("textAndImages", "goreContentSettings", goreContentFromProto, goreContentToProto);
const defineProtoSettingResult86 = obj100.defineProtoSetting("appearance", "searchResultExactCountEnabled", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult87 = obj100.defineProtoSetting("appearance", "happeningNowCardsDisabled", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult88 = obj100.defineProtoSetting("appearance", "timestampHourCycle", (arg0) => {
  let AUTO = arg0;
  if (arg0 == null) {
    AUTO = create.TimestampHourCycle.AUTO;
  }
  return AUTO;
}, (arg0) => arg0);
const defineProtoSettingResult89 = obj100.defineProtoSetting("appearance", "defaultGuildThemePreference", require("resolveDefaultGuildThemePreference").resolveDefaultGuildThemePreference, (arg0) => arg0);
const defineProtoSettingResult90 = obj100.defineProtoSetting("appearance", "launchPadMode", (arg0) => {
  let LAUNCH_PAD_DISABLED = arg0;
  if (arg0 == null) {
    LAUNCH_PAD_DISABLED = create.LaunchPadMode.LAUNCH_PAD_DISABLED;
  }
  return LAUNCH_PAD_DISABLED;
}, (arg0) => arg0);
const defineProtoSettingResult91 = obj100.defineProtoSetting("appearance", "swipeRightToLeftMode", (arg0) => {
  let SWIPE_RIGHT_TO_LEFT_UNSET = arg0;
  if (arg0 == null) {
    SWIPE_RIGHT_TO_LEFT_UNSET = create.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET;
  }
  return SWIPE_RIGHT_TO_LEFT_UNSET;
}, (arg0) => arg0);
const defineProtoSettingResult92 = obj100.defineProtoSetting("userContent", "lastReceivedChangelogId", (arg0) => {
  let str = arg0;
  if (arg0 == null) {
    str = "0";
  }
  return str;
}, (arg0) => arg0);
const defineProtoSettingResult93 = obj100.defineProtoSetting("safetySettings", "ignoreProfileSpeedbumpDisabled", (arg0) => {
  let flag = arg0;
  if (arg0 == null) {
    flag = false;
  }
  return flag;
}, (arg0) => arg0);
obj100 = { delay: UserSettingsDelay.AUTOMATED };
const defineProtoSettingResult94 = obj100.defineProtoSetting("appearance", "uiDensity", (arg0) => {
  let DEFAULT = arg0;
  if (arg0 === create.UIDensity.UNSET_UI_DENSITY) {
    DEFAULT = create.UIDensity.DEFAULT;
  } else if (DEFAULT == null) {
    DEFAULT = create.UIDensity.DEFAULT;
  }
  return DEFAULT;
}, (arg0) => arg0);
const defineProtoSettingResult95 = obj100.defineProtoSetting("inAppFeedbackSettings", "inAppFeedbackStates", (arg0) => {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  return apply.mapValues(obj, (arg0) => callback(table[10]).mapValues(arg0, (value) => {
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
  }));
}, (arg0) => apply.mapValues(arg0, (arg0) => callback(table[10]).mapValues(arg0, (arg0) => {
  const UInt64Value = callback(table[6]).UInt64Value;
  let value;
  if (null != arg0) {
    const _String = String;
    value = String(arg0);
  }
  return UInt64Value.create({ value });
})), obj100);
const defineProtoSettingResult96 = obj100.defineProtoSetting("textAndImages", "isCrossDmSearchEnabled", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult97 = obj100.defineProtoSetting("privacy", "hideFriendRequestNotes", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const result12 = require("obj132").fileFinishedImporting("modules/user_settings/UserSettings.tsx");

export const UseLegacyChatInput = defineProtoSettingResult;
export const UseRichChatInput = defineProtoSettingResult1;
export const IncludeStickersInAutocomplete = defineProtoSettingResult2;
export const IncludeSoundmojiInAutocomplete = defineProtoSettingResult3;
export const IncludeGameMentionsInAutocomplete = defineProtoSettingResult4;
export const RenderSpoilers = defineProtoSettingResult5;
export const UseThreadSidebar = defineProtoSettingResult6;
export const ShowInAppNotifications = defineProtoSettingResult7;
export const ReactionNotifications = defineProtoSettingResult8;
export const CustomStatusPushNotifications = defineProtoSettingResult9;
export const EnableSummaryReminderNotifications = defineProtoSettingResult10;
export const EnableScreenDowntimeScheduleNotifications = defineProtoSettingResult11;
export const EnableVoiceActivityNotifications = defineProtoSettingResult12;
export const EnableFriendOnlineNotifications = defineProtoSettingResult13;
export const EnableFriendAnniversaryNotifications = defineProtoSettingResult14;
export const EnableServerTrendingNotifications = defineProtoSettingResult15;
export const EnableProfileUpdatesNotifications = defineProtoSettingResult16;
export const EnableFriendGamingActivityNotifications = defineProtoSettingResult17;
export const EnableUpcomingServerEventNotifications = defineProtoSettingResult18;
export const FocusMode = defineProtoSettingResult19;
export const FocusModeExpiresAtSetting = defineProtoSettingResult20;
export const EmojiPickerCollapsedSections = defineProtoSettingResult21;
export const StickerPickerCollapsedSections = defineProtoSettingResult22;
export const SoundboardPickerCollapsedSections = defineProtoSettingResult23;
export const ViewImageDescriptions = defineProtoSettingResult24;
export const ShowCommandSuggestions = defineProtoSettingResult25;
export const AlwaysPreviewVideo = defineProtoSettingResult26;
export const DisableStreamPreviews = defineProtoSettingResult27;
export const NotifyFriendsOnGoLive = defineProtoSettingResult28;
export const NotifyFriendsOnComeOnline = defineProtoSettingResult29;
export const NotifyFriendsOnProfileUpdate = defineProtoSettingResult30;
export const NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET = "0";
export const NotificationCenterAckedBeforeId = defineProtoSettingResult31;
export const InstallShortcutDesktop = defineProtoSettingResult32;
export const InstallShortcutStartMenu = defineProtoSettingResult33;
export const AllowActivityPartyPrivacyFriends = defineProtoSettingResult34;
export const AllowActivityPartyPrivacyVoiceChannel = defineProtoSettingResult35;
export const MessageRequestRestrictedGuildIds = defineProtoSettingResult36;
export const MessageRequestRestrictedDefault = defineProtoSettingResult37;
export const NonSpamRetrainingOptIn = defineProtoSettingResult38;
export const ContactSyncEnabled = defineProtoSettingResult39;
export const DefaultGuildsRestricted = defineProtoSettingResult40;
export const DefaultGuildsRestrictedV2 = defineProtoSettingResult41;
export const RestrictedGuildIds = defineProtoSettingResult42;
export const FriendDiscoverySettings = defineProtoSettingResult43;
export const FriendSourceFlagsSetting = defineProtoSettingResult44;
export const RtcPanelShowVoiceStates = defineProtoSettingResult45;
export const ConvertEmoticons = defineProtoSettingResult46;
export const MessageDisplayCompact = defineProtoSettingResult47;
export const SoundboardSettings = defineProtoSettingResult48;
export const SoundmojiVolume = defineProtoSettingResult49;
export const StreamNotificationsEnabled = defineProtoSettingResult50;
export const DropsOptedOut = defineProtoSettingResult51;
export const Quests3PDataOptedOut = defineProtoSettingResult52;
export const AdTopicOptOuts = defineProtoSettingResult53;
export const NativePhoneIntegrationEnabled = defineProtoSettingResult54;
export const AfkTimeout = defineProtoSettingResult55;
export const ViewNsfwGuilds = defineProtoSettingResult56;
export const ViewNsfwCommands = defineProtoSettingResult57;
export const DetectPlatformAccounts = defineProtoSettingResult58;
export const DisableGamesTab = defineProtoSettingResult59;
export const EnableTTSCommand = defineProtoSettingResult60;
export const ExplicitContentFilter = defineProtoSettingResult61;
export const DmSpamFilter = defineProtoSettingResult62;
export const DmSpamFilterV2 = defineProtoSettingResult63;
export const ShowCurrentGame = defineProtoSettingResult64;
export const RecentGamesEnabled = defineProtoSettingResult65;
export const ProfileVisibility = defineProtoSettingResult66;
export const StatusSetting = defineProtoSettingResult67;
export const StatusExpiresAtSetting = defineProtoSettingResult68;
export const StatusCreatedAtSetting = defineProtoSettingResult69;
export const CustomStatusSetting = defineProtoSettingResult70;
export const ClipsAllowVoiceRecording = defineProtoSettingResult71;
export const InlineAttachmentMedia = result;
export const InlineEmbedMedia = result1;
export const RenderEmbeds = result2;
export const RenderReactions = result3;
export const DoubleTapReactionEmoji = result4;
export const TimezoneOffset = defineProtoSettingResult72;
export const ValidChannelListLayoutTypes = set1;
export const ChannelListLayoutSetting = defineProtoSettingResult73;
export const ValidMessagePreviewTypes = set2;
export const MessagePreviewSetting = defineProtoSettingResult74;
export const DeveloperMode = result5;
export const DarkSidebar = defineProtoSettingResult75;
export const ClientThemeSettings = result6;
export const GifAutoPlay = result7;
export const AnimateEmoji = result8;
export const AnimateStickers = result9;
export const ActivityRestrictedGuilds = defineProtoSettingResult76;
export const ActivityRestrictedGuildsFrequent = defineProtoSettingResult77;
export const ActivityJoiningRestrictedGuilds = defineProtoSettingResult78;
export const DefaultGuildsActivityRestricted = obj100;
export const DefaultGuildsActivityRestrictedV2 = obj100;
export const FamilyCenterEnabled = defineProtoSettingResult79;
export const LegacyUsernameDisabled = defineProtoSettingResult80;
export const AllowGameFriendDmsInDiscord = defineProtoSettingResult81;
export const SlayerSDKReceiveDMsInGame = defineProtoSettingResult82;
export const AlwaysDeliverAds = defineProtoSettingResult83;
export { explicitContentFromProto };
export { explicitContentToProto };
export const ExplicitContentSettings = defineProtoSettingResult84;
export { goreContentFromProto };
export { goreContentToProto };
export const GoreContentSettings = defineProtoSettingResult85;
export const SearchResultExactCountEnabled = defineProtoSettingResult86;
export const HappeningNowCardsDisabled = defineProtoSettingResult87;
export const TimestampHourCycle = defineProtoSettingResult88;
export const DefaultGuildThemePreference = defineProtoSettingResult89;
export const LaunchPadModeSetting = defineProtoSettingResult90;
export const SwipeRightToLeftModeSetting = defineProtoSettingResult91;
export const LastReceivedChangelogId = defineProtoSettingResult92;
export const IgnoreProfileSpeedbumpDisabled = defineProtoSettingResult93;
export const UIDensitySetting = defineProtoSettingResult94;
export const InAppFeedbackStates = defineProtoSettingResult95;
export const IsCrossDMSearchEnabledSetting = defineProtoSettingResult96;
export const HideFriendRequestNotes = defineProtoSettingResult97;