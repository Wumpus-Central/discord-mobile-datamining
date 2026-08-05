// discord_app/modules/user_settings/UserSettings.tsx
import updateExistingSettings from "updateExistingSettings";
import MAX_FAVORITES from "MAX_FAVORITES";
import items from "items";
import ME from "ME";
import { StickerAnimationSettings } from "STICKER_PICKER_TAB_PANEL_ID";
import set from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import defineProtoSetting from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "defineProtoSetting";
import set from "items";

let ListDensityMode;
let StatusTypes;
let UserSettingsDelay;
let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
function explicitContentFromProto(arg0) {
  let explicitContentFriendDm;
  let explicitContentGuilds;
  let explicitContentNonFriendDm;
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  ({ explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm } = obj);
  if (explicitContentGuilds == null) {
    explicitContentGuilds = require(1306) /* create */.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  obj = { explicitContentGuilds, explicitContentFriendDm: null, explicitContentNonFriendDm: null };
  if (explicitContentFriendDm == null) {
    explicitContentFriendDm = require(1306) /* create */.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  obj[1] = explicitContentFriendDm;
  if (explicitContentNonFriendDm == null) {
    explicitContentNonFriendDm = require(1306) /* create */.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  obj[2] = explicitContentNonFriendDm;
  return obj;
}
function explicitContentToProto(explicitContentGuilds) {
  explicitContentGuilds = explicitContentGuilds.explicitContentGuilds;
  const obj = { explicitContentGuilds, explicitContentFriendDm: null, explicitContentNonFriendDm: null };
  const explicitContentFriendDm = explicitContentGuilds.explicitContentFriendDm;
  obj[1] = explicitContentFriendDm;
  const explicitContentNonFriendDm = explicitContentGuilds.explicitContentNonFriendDm;
  obj[2] = explicitContentNonFriendDm;
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
    goreContentGuilds = require(1306) /* create */.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  obj = { goreContentGuilds, goreContentFriendDm: null, goreContentNonFriendDm: null };
  if (goreContentFriendDm == null) {
    goreContentFriendDm = require(1306) /* create */.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  obj[1] = goreContentFriendDm;
  if (goreContentNonFriendDm == null) {
    goreContentNonFriendDm = require(1306) /* create */.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  obj[2] = goreContentNonFriendDm;
  return obj;
}
function goreContentToProto(goreContentGuilds) {
  goreContentGuilds = goreContentGuilds.goreContentGuilds;
  const obj = { goreContentGuilds, goreContentFriendDm: null, goreContentNonFriendDm: null };
  const goreContentFriendDm = goreContentGuilds.goreContentFriendDm;
  obj[1] = goreContentFriendDm;
  const goreContentNonFriendDm = goreContentGuilds.goreContentNonFriendDm;
  obj[2] = goreContentNonFriendDm;
  return obj;
}
({ UserSettingsDelay, ListDensityMode } = MAX_FAVORITES);
({ DmSpamFilterTypes: c3, ExplicitContentFilterTypes: c4 } = items);
({ AllFriendSourceFlags: c5, SpoilerRenderSetting: closure_6, StatusTypes } = ME);
const defineProtoSettingResult = set.defineProtoSetting("textAndImages", "useLegacyChatInput", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult1 = defineProtoSetting.defineProtoSetting("textAndImages", "useRichChatInput", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult2 = defineProtoSetting.defineProtoSetting("textAndImages", "includeStickersInAutocomplete", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult3 = defineProtoSetting.defineProtoSetting("textAndImages", "includeSoundmojiInAutocomplete", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult4 = defineProtoSetting.defineProtoSetting("textAndImages", "includeGameMentionsInAutocomplete", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult5 = defineProtoSetting.defineProtoSetting("textAndImages", "renderSpoilers", (value) => {
  let ON_CLICK;
  if (value != null) {
    ON_CLICK = value.value;
  }
  if (ON_CLICK == null) {
    ON_CLICK = constants3.ON_CLICK;
  }
  return ON_CLICK;
}, (value) => {
  const StringValue = require(1337) /* defineProperty */.StringValue;
  return StringValue.create({ value });
});
const defineProtoSettingResult6 = defineProtoSetting.defineProtoSetting("textAndImages", "useThreadSidebar", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult7 = defineProtoSetting.defineProtoSetting("notifications", "showInAppNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult8 = defineProtoSetting.defineProtoSetting("notifications", "reactionNotifications", (arg0) => {
  let NOTIFICATIONS_ENABLED = arg0;
  if (arg0 == null) {
    NOTIFICATIONS_ENABLED = require(1306) /* create */.ReactionNotificationType.NOTIFICATIONS_ENABLED;
  }
  return NOTIFICATIONS_ENABLED;
}, (arg0) => arg0);
const defineProtoSettingResult9 = defineProtoSetting.defineProtoSetting("notifications", "customStatusPushNotifications", (arg0) => {
  let STATUS_PUSH_UNSET = arg0;
  if (arg0 == null) {
    STATUS_PUSH_UNSET = require(1306) /* create */.CustomStatusPushNotificationType.STATUS_PUSH_UNSET;
  }
  return STATUS_PUSH_UNSET;
}, (arg0) => arg0);
const defineProtoSettingResult10 = defineProtoSetting.defineProtoSetting("notifications", "enableSummaryReminderNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult11 = defineProtoSetting.defineProtoSetting("notifications", "enableScreenDowntimeScheduleNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult12 = defineProtoSetting.defineProtoSetting("notifications", "enableVoiceActivityNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult13 = defineProtoSetting.defineProtoSetting("notifications", "enableFriendOnlineNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult14 = defineProtoSetting.defineProtoSetting("notifications", "enableFriendAnniversaryNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult15 = defineProtoSetting.defineProtoSetting("notifications", "enableServerTrendingNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult16 = defineProtoSetting.defineProtoSetting("notifications", "enableProfileUpdatesNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult17 = defineProtoSetting.defineProtoSetting("notifications", "enableFriendGamingActivityNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult18 = defineProtoSetting.defineProtoSetting("notifications", "enableUpcomingServerEventNotifications", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
let closure_9 = [];
const defineProtoSettingResult19 = defineProtoSetting.defineProtoSetting("notifications", "quietMode", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult20 = defineProtoSetting.defineProtoSetting("notifications", "focusModeExpiresAtMs", (arg0) => {
  let str = arg0;
  if (arg0 == null) {
    str = "0";
  }
  return str;
}, (arg0) => arg0);
const defineProtoSettingResult21 = defineProtoSetting.defineProtoSetting("textAndImages", "emojiPickerCollapsedSections", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_9;
  }
  return tmp;
}, (arg0) => arg0);
const defineProtoSettingResult22 = defineProtoSetting.defineProtoSetting("textAndImages", "stickerPickerCollapsedSections", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_9;
  }
  return tmp;
}, (arg0) => arg0);
const defineProtoSettingResult23 = defineProtoSetting.defineProtoSetting("textAndImages", "soundboardPickerCollapsedSections", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_9;
  }
  return tmp;
}, (arg0) => arg0);
const defineProtoSettingResult24 = defineProtoSetting.defineProtoSetting("textAndImages", "viewImageDescriptions", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult25 = defineProtoSetting.defineProtoSetting("textAndImages", "showCommandSuggestions", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult26 = defineProtoSetting.defineProtoSetting("voiceAndVideo", "alwaysPreviewVideo", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult27 = defineProtoSetting.defineProtoSetting("voiceAndVideo", "disableStreamPreviews", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult28 = defineProtoSetting.defineProtoSetting("notifications", "notifyFriendsOnGoLive", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult29 = defineProtoSetting.defineProtoSetting("notifications", "notifyFriendsOnComeOnline", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult30 = defineProtoSetting.defineProtoSetting("notifications", "notifyFriendsOnProfileUpdate", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult31 = defineProtoSetting.defineProtoSetting("notifications", "notificationCenterAckedBeforeId", (arg0) => {
  let str = arg0;
  if (arg0 == null) {
    str = "0";
  }
  return str;
}, (arg0) => arg0);
const defineProtoSettingResult32 = defineProtoSetting.defineProtoSetting("gameLibrary", "installShortcutDesktop", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult33 = defineProtoSetting.defineProtoSetting("gameLibrary", "installShortcutStartMenu", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
let closure_10 = [];
const defineProtoSettingResult34 = defineProtoSetting.defineProtoSetting("privacy", "allowActivityPartyPrivacyFriends", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult35 = defineProtoSetting.defineProtoSetting("privacy", "allowActivityPartyPrivacyVoiceChannel", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult36 = defineProtoSetting.defineProtoSetting("privacy", "messageRequestRestrictedGuildIds", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_10;
  }
  return tmp;
}, (arg0) => arg0);
const defineProtoSettingResult37 = defineProtoSetting.defineProtoSetting("privacy", "defaultMessageRequestRestricted", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult38 = defineProtoSetting.defineProtoSetting("privacy", "nonSpamRetrainingOptIn", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (arg0) => {
  let obj;
  if (null != arg0) {
    const BoolValue = require(1337) /* defineProperty */.BoolValue;
    obj = { value: null };
    obj[0] = arg0;
    obj = BoolValue.create(obj);
  }
  return obj;
});
const defineProtoSettingResult39 = defineProtoSetting.defineProtoSetting("privacy", "contactSyncEnabled", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult40 = defineProtoSetting.defineProtoSetting("privacy", "defaultGuildsRestricted", (arg0) => {
  let flag = arg0;
  if (arg0 == null) {
    flag = false;
  }
  return flag;
}, (arg0) => arg0);
const defineProtoSettingResult41 = defineProtoSetting.defineProtoSetting("privacy", "defaultGuildsRestrictedV2", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult42 = defineProtoSetting.defineProtoSetting("privacy", "restrictedGuildIds", (arg0) => {
  let items = arg0;
  if (arg0 == null) {
    items = [];
  }
  return items;
}, (arg0) => arg0);
const defineProtoSettingResult43 = defineProtoSetting.defineProtoSetting("privacy", "friendDiscoveryFlags", (value) => {
  let num;
  if (value != null) {
    num = value.value;
  }
  if (num == null) {
    num = 0;
  }
  return num;
}, (value) => {
  const UInt32Value = require(1337) /* defineProperty */.UInt32Value;
  return UInt32Value.create({ value });
});
const defineProtoSettingResult44 = defineProtoSetting.defineProtoSetting("privacy", "friendSourceFlags", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  if (value == null) {
    value = closure_5;
  }
  return value;
}, (value) => {
  const UInt32Value = require(1337) /* defineProperty */.UInt32Value;
  return UInt32Value.create({ value });
});
const defineProtoSettingResult45 = defineProtoSetting.defineProtoSetting("debug", "rtcPanelShowVoiceStates", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult46 = defineProtoSetting.defineProtoSetting("textAndImages", "convertEmoticons", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult47 = defineProtoSetting.defineProtoSetting("textAndImages", "messageDisplayCompact", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult48 = defineProtoSetting.defineProtoSetting("voiceAndVideo", "soundboardSettings", (arg0) => arg0, (arg0) => arg0);
const defineProtoSettingResult49 = defineProtoSetting.defineProtoSetting("voiceAndVideo", "soundmojiVolume", (value) => {
  let num;
  if (value != null) {
    num = value.value;
  }
  if (num == null) {
    num = 100;
  }
  return num;
}, (value) => {
  const FloatValue = require(1337) /* defineProperty */.FloatValue;
  return FloatValue.create({ value });
});
const defineProtoSettingResult50 = defineProtoSetting.defineProtoSetting("voiceAndVideo", "streamNotificationsEnabled", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult51 = defineProtoSetting.defineProtoSetting("privacy", "dropsOptedOut", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult52 = defineProtoSetting.defineProtoSetting("privacy", "quests3PDataOptedOut", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult53 = defineProtoSetting.defineProtoSetting("voiceAndVideo", "nativePhoneIntegrationEnabled", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult54 = defineProtoSetting.defineProtoSetting("voiceAndVideo", "afkTimeout", (value) => {
  let num;
  if (value != null) {
    num = value.value;
  }
  if (num == null) {
    num = 60;
  }
  return num;
}, (value) => {
  const UInt32Value = require(1337) /* defineProperty */.UInt32Value;
  return UInt32Value.create({ value });
});
const defineProtoSettingResult55 = defineProtoSetting.defineProtoSetting("textAndImages", "viewNsfwGuilds", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult56 = defineProtoSetting.defineProtoSetting("textAndImages", "viewNsfwCommands", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult57 = defineProtoSetting.defineProtoSetting("privacy", "detectPlatformAccounts", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult58 = defineProtoSetting.defineProtoSetting("gameLibrary", "disableGamesTab", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult59 = defineProtoSetting.defineProtoSetting("textAndImages", "enableTtsCommand", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult60 = defineProtoSetting.defineProtoSetting("textAndImages", "explicitContentFilter", (value) => {
  let NON_FRIENDS;
  if (value != null) {
    NON_FRIENDS = value.value;
  }
  if (NON_FRIENDS == null) {
    NON_FRIENDS = constants2.NON_FRIENDS;
  }
  return NON_FRIENDS;
}, (value) => {
  const UInt32Value = require(1337) /* defineProperty */.UInt32Value;
  return UInt32Value.create({ value });
});
const defineProtoSettingResult61 = defineProtoSetting.defineProtoSetting("textAndImages", "dmSpamFilter", (value) => {
  let NON_FRIENDS;
  if (value != null) {
    NON_FRIENDS = value.value;
  }
  if (NON_FRIENDS == null) {
    NON_FRIENDS = constants.NON_FRIENDS;
  }
  return NON_FRIENDS;
}, (value) => {
  const UInt32Value = require(1337) /* defineProperty */.UInt32Value;
  return UInt32Value.create({ value });
});
const defineProtoSettingResult62 = defineProtoSetting.defineProtoSetting("textAndImages", "dmSpamFilterV2", (arg0) => {
  let DEFAULT_UNSET = arg0;
  if (arg0 == null) {
    DEFAULT_UNSET = require(1306) /* create */.DmSpamFilterV2.DEFAULT_UNSET;
  }
  return DEFAULT_UNSET;
}, (arg0) => arg0);
const defineProtoSettingResult63 = defineProtoSetting.defineProtoSetting("status", "showCurrentGame", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
const defineProtoSettingResult64 = defineProtoSetting.defineProtoSetting("privacy", "recentGamesEnabled", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
set = new Set(Object.values(StatusTypes));
const defineProtoSettingResult65 = defineProtoSetting.defineProtoSetting("privacy", "profileVisibility", (arg0) => {
  let FRIENDS_AND_ALL_GUILDS = arg0;
  if (null == arg0) {
    FRIENDS_AND_ALL_GUILDS = require(1306) /* create */.ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
  }
  return FRIENDS_AND_ALL_GUILDS;
}, (arg0) => arg0);
const defineProtoSettingResult66 = defineProtoSetting.defineProtoSetting("status", "status", (value) => {
  if (null != value) {
    if (set.has(value.value)) {
      let UNKNOWN = value.value;
    }
    return UNKNOWN;
  }
  UNKNOWN = StatusTypes.UNKNOWN;
}, (value) => {
  const StringValue = require(1337) /* defineProperty */.StringValue;
  return StringValue.create({ value });
});
const defineProtoSettingResult67 = defineProtoSetting.defineProtoSetting("status", "statusExpiresAtMs", (arg0) => {
  let str = arg0;
  if (arg0 == null) {
    str = "0";
  }
  return str;
}, (arg0) => arg0);
const defineProtoSettingResult68 = defineProtoSetting.defineProtoSetting("status", "statusCreatedAtMs", (arg0) => arg0, (arg0) => arg0);
const defineProtoSettingResult69 = defineProtoSetting.defineProtoSetting("status", "customStatus", (arg0) => arg0, (arg0) => arg0);
const result = defineProtoSetting.wrapSettingWithSelectiveSyncing(defineProtoSetting.defineProtoSetting("textAndImages", "inlineAttachmentMedia", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
}), "text", "inlineAttachmentMedia");
const result1 = defineProtoSetting.wrapSettingWithSelectiveSyncing(defineProtoSetting.defineProtoSetting("textAndImages", "inlineEmbedMedia", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
}), "text", "inlineEmbedMedia");
const result2 = defineProtoSetting.wrapSettingWithSelectiveSyncing(defineProtoSetting.defineProtoSetting("textAndImages", "renderEmbeds", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
}), "text", "renderEmbeds");
const result3 = defineProtoSetting.wrapSettingWithSelectiveSyncing(defineProtoSetting.defineProtoSetting("textAndImages", "renderReactions", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
}), "text", "renderReactions");
set = { comparator: require("shallowEqual") };
const result4 = defineProtoSetting.wrapSettingWithSelectiveSyncing(defineProtoSetting.defineProtoSetting("textAndImages", "defaultReactionEmoji", (disableDoubleTap) => {
  let animated;
  let emojiId;
  let emojiName;
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
  let animated;
  let disableDoubleTap;
  let emojiId;
  let emojiName;
  const obj = { emojiId: null, emojiName: null, animated: null, disableDoubleTap: null };
  ({ emojiId, emojiName, animated, disableDoubleTap } = arg0);
  const UInt64Value = require(1337) /* defineProperty */.UInt64Value;
  obj[0] = UInt64Value.create({ value: emojiId });
  const StringValue = require(1337) /* defineProperty */.StringValue;
  obj[1] = StringValue.create({ value: emojiName });
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  obj[2] = BoolValue.create({ value: animated });
  const BoolValue2 = require(1337) /* defineProperty */.BoolValue;
  obj[3] = BoolValue2.create({ value: disableDoubleTap });
  return obj;
}, set), "text", "defaultReactionEmoji");
items = [ListDensityMode.AUTO, , ];
const defineProtoSettingResult70 = defineProtoSetting.defineProtoSetting("clips", "allowVoiceRecording", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
items[1] = require("ChannelListLayoutTypes").ChannelListLayoutTypes.COZY;
items[2] = require("ChannelListLayoutTypes").ChannelListLayoutTypes.COMPACT;
const set1 = new Set(items);
const defineProtoSettingResult71 = defineProtoSetting.defineProtoSetting("localization", "timezoneOffset", (value) => {
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
  const Int32Value = require(1337) /* defineProperty */.Int32Value;
  if (arg0 == null) {
    value = 0;
  }
  return Int32Value.create({ value });
});
const items1 = [require("ChannelListLayoutTypes").MessagePreviewTypes.ALL, require("ChannelListLayoutTypes").MessagePreviewTypes.UNREADS, require("ChannelListLayoutTypes").MessagePreviewTypes.NONE];
const set2 = new Set(items1);
const defineProtoSettingResult72 = defineProtoSetting.defineProtoSetting("appearance", "channelListLayout", (value) => {
  if (null != value) {
    if (set1.has(value.value)) {
      let COZY = value.value;
    }
    return COZY;
  }
  COZY = require(3963) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COZY;
}, (value) => {
  const StringValue = require(1337) /* defineProperty */.StringValue;
  return StringValue.create({ value });
});
const result5 = defineProtoSetting.wrapSettingWithSelectiveSyncing(defineProtoSetting.defineProtoSetting("appearance", "developerMode", (arg0) => {
  let flag = arg0;
  if (arg0 == null) {
    flag = false;
  }
  return flag;
}, (arg0) => arg0), "appearance", "developerMode");
const defineProtoSettingResult73 = defineProtoSetting.defineProtoSetting("appearance", "messagePreviews", (value) => {
  if (null != value) {
    if (set2.has(value.value)) {
      let ALL = value.value;
    }
    return ALL;
  }
  ALL = require(3963) /* ChannelListLayoutTypes */.MessagePreviewTypes.ALL;
}, (value) => {
  const StringValue = require(1337) /* defineProperty */.StringValue;
  return StringValue.create({ value });
});
set = { comparator: require("isFeatureAgeGated").isEqual };
const defineProtoSettingResult74 = defineProtoSetting.defineProtoSetting("appearance", "darkSidebar", (arg0) => {
  let flag = arg0;
  if (arg0 == null) {
    flag = false;
  }
  return flag;
}, (arg0) => arg0);
const result6 = defineProtoSetting.wrapSettingWithOverride(defineProtoSetting.wrapSettingWithSelectiveSyncing(defineProtoSetting.defineProtoSetting("textAndImages", "gifAutoPlay", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
}), "text", "gifAutoPlay"), "gifAutoPlay", () => {
  const iter = store.getOverride("gifAutoPlay");
  let value;
  if (iter != null) {
    value = iter.value;
  }
  return value;
}, () => {
  const items = [updateExistingSettings];
  return require(589) /* initialize */.useStateFromStores(items, () => {
    const iter = override.getOverride("gifAutoPlay");
    let value;
    if (iter != null) {
      value = iter.value;
    }
    return value;
  });
});
const result7 = defineProtoSetting.wrapSettingWithOverride(defineProtoSetting.wrapSettingWithSelectiveSyncing(defineProtoSetting.defineProtoSetting("textAndImages", "animateEmoji", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
}), "text", "animateEmoji"), "animateEmoji", () => {
  const iter = store.getOverride("animateEmoji");
  let value;
  if (iter != null) {
    value = iter.value;
  }
  return value;
}, () => {
  const items = [updateExistingSettings];
  return require(589) /* initialize */.useStateFromStores(items, () => {
    const iter = override.getOverride("animateEmoji");
    let value;
    if (iter != null) {
      value = iter.value;
    }
    return value;
  });
});
let closure_14 = [];
const result8 = defineProtoSetting.wrapSettingWithOverride(defineProtoSetting.wrapSettingWithSelectiveSyncing(defineProtoSetting.defineProtoSetting("textAndImages", "animateStickers", (value) => {
  let ALWAYS_ANIMATE;
  if (value != null) {
    ALWAYS_ANIMATE = value.value;
  }
  if (ALWAYS_ANIMATE == null) {
    ALWAYS_ANIMATE = StickerAnimationSettings.ALWAYS_ANIMATE;
  }
  return ALWAYS_ANIMATE;
}, (value) => {
  const UInt32Value = require(1337) /* defineProperty */.UInt32Value;
  return UInt32Value.create({ value });
}), "text", "animateStickers"), "animateStickers", () => {
  const iter = store.getOverride("animateStickers");
  let value;
  if (iter != null) {
    value = iter.value;
  }
  return value;
}, () => {
  const items = [updateExistingSettings];
  return require(589) /* initialize */.useStateFromStores(items, () => {
    const iter = override.getOverride("animateStickers");
    let value;
    if (iter != null) {
      value = iter.value;
    }
    return value;
  });
});
const defineProtoSettingResult75 = defineProtoSetting.defineProtoSetting("appearance", "clientThemeSettings", (backgroundGradientPresetId) => {
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
    const UInt32Value = require(1337) /* defineProperty */.UInt32Value;
    obj = { value: null };
    obj[0] = backgroundGradientPresetId.backgroundGradientPresetId;
    obj = UInt32Value.create(obj);
  }
  obj = { backgroundGradientPresetId: obj, customUserThemeSettings: null };
  let tmp4;
  if (null != backgroundGradientPresetId.customUserThemeSettings) {
    const obj1 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
    obj1[0] = backgroundGradientPresetId.customUserThemeSettings.colors;
    obj1[1] = backgroundGradientPresetId.customUserThemeSettings.gradientColorStops;
    obj1[2] = backgroundGradientPresetId.customUserThemeSettings.gradientAngle;
    obj1[3] = backgroundGradientPresetId.customUserThemeSettings.baseMix;
    tmp4 = obj1;
  }
  obj[1] = tmp4;
  return obj;
}, set);
set = { delay: UserSettingsDelay.FREQUENT_USER_ACTION };
let closure_15 = [];
const defineProtoSettingResult76 = set.defineProtoSetting("privacy", "activityRestrictedGuildIds", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_14;
  }
  return tmp;
}, (arg0) => arg0);
const defineProtoSettingResult77 = set.defineProtoSetting("privacy", "activityRestrictedGuildIds", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_14;
  }
  return tmp;
}, (arg0) => arg0, set);
set = { baseSetting: null, isEligible: null, useIsEligible: null, ineligibleDefault: null, eligibleDefault: null };
set[0] = set.defineProtoSetting("privacy", "defaultGuildsActivityRestricted", (arg0) => arg0, (arg0) => {
  let OFF = arg0;
  if (arg0 == null) {
    OFF = require(1306) /* create */.GuildActivityStatusRestrictionDefault.OFF;
  }
  return OFF;
});
set[1] = function isEligible() {
  return require(3964) /* isFeatureAgeGated */.isSettingTeenByDefault(require(3971) /* SettingsDefaultFeature */.SettingsDefaultFeature.GUILD_ACTIVITY_STATUS);
};
set[2] = function useIsEligible() {
  return require(3964) /* isFeatureAgeGated */.useIsSettingTeenByDefault(require(3971) /* SettingsDefaultFeature */.SettingsDefaultFeature.GUILD_ACTIVITY_STATUS);
};
set[3] = require("create").GuildActivityStatusRestrictionDefault.OFF;
set[4] = function eligibleDefault() {
  return require(1306) /* create */.GuildActivityStatusRestrictionDefault.ON_FOR_LARGE_GUILDS;
};
defineProtoSetting = set.wrapSettingWithExperimentDefaults(set);
set = { baseSetting: null, isEligible: null, useIsEligible: null, ineligibleDefault: null, eligibleDefault: null };
set[0] = set.defineProtoSetting("privacy", "defaultGuildsActivityRestrictedV2", (arg0) => {
  let tmp = null;
  if (arg0 !== require(1306) /* create */.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_UNSET) {
    tmp = arg0;
  }
  return tmp;
}, (arg0) => {
  let ACTIVITY_STATUS_OFF = arg0;
  if (arg0 == null) {
    ACTIVITY_STATUS_OFF = require(1306) /* create */.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF;
  }
  return ACTIVITY_STATUS_OFF;
});
set[1] = function isEligible() {
  return require(3964) /* isFeatureAgeGated */.isSettingTeenByDefault(require(3971) /* SettingsDefaultFeature */.SettingsDefaultFeature.GUILD_ACTIVITY_STATUS);
};
set[2] = function useIsEligible() {
  return require(3964) /* isFeatureAgeGated */.useIsSettingTeenByDefault(require(3971) /* SettingsDefaultFeature */.SettingsDefaultFeature.GUILD_ACTIVITY_STATUS);
};
set[3] = require("create").GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF;
set[4] = function eligibleDefault() {
  return require(1306) /* create */.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS;
};
defineProtoSetting = set.wrapSettingWithExperimentDefaults(set);
const defineProtoSettingResult78 = set.defineProtoSetting("privacy", "activityJoiningRestrictedGuildIds", (arg0) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_15;
  }
  return tmp;
}, (arg0) => arg0);
const defineProtoSettingResult79 = set.defineProtoSetting("privacy", "familyCenterEnabledV2", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
let definePropertyResult = set.defineProtoSetting("privacy", "allowGameFriendDmsInDiscord", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
definePropertyResult = set.defineProtoSetting("privacy", "slayerSdkReceiveDmsInGame", (arg0) => {
  let SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET = arg0;
  if (arg0 == null) {
    SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET = require(1306) /* create */.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET;
  }
  return SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET;
}, (arg0) => arg0);
definePropertyResult = set.defineProtoSetting("ads", "alwaysDeliver", (arg0) => {
  let flag = arg0;
  if (arg0 == null) {
    flag = false;
  }
  return flag;
}, (arg0) => arg0);
definePropertyResult = set.defineProtoSetting("textAndImages", "explicitContentSettings", explicitContentFromProto, explicitContentToProto);
definePropertyResult = set.defineProtoSetting("textAndImages", "goreContentSettings", goreContentFromProto, goreContentToProto);
definePropertyResult = set.defineProtoSetting("appearance", "searchResultExactCountEnabled", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
definePropertyResult = set.defineProtoSetting("appearance", "happeningNowCardsDisabled", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
definePropertyResult = set.defineProtoSetting("appearance", "timestampHourCycle", (arg0) => {
  let AUTO = arg0;
  if (arg0 == null) {
    AUTO = require(1306) /* create */.TimestampHourCycle.AUTO;
  }
  return AUTO;
}, (arg0) => arg0);
definePropertyResult = set.defineProtoSetting("appearance", "defaultGuildThemePreference", require("resolveDefaultGuildThemePreference").resolveDefaultGuildThemePreference, (arg0) => arg0);
definePropertyResult = set.defineProtoSetting("appearance", "launchPadMode", (arg0) => {
  let LAUNCH_PAD_DISABLED = arg0;
  if (arg0 == null) {
    LAUNCH_PAD_DISABLED = require(1306) /* create */.LaunchPadMode.LAUNCH_PAD_DISABLED;
  }
  return LAUNCH_PAD_DISABLED;
}, (arg0) => arg0);
definePropertyResult = set.defineProtoSetting("appearance", "swipeRightToLeftMode", (arg0) => {
  let SWIPE_RIGHT_TO_LEFT_UNSET = arg0;
  if (arg0 == null) {
    SWIPE_RIGHT_TO_LEFT_UNSET = require(1306) /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET;
  }
  return SWIPE_RIGHT_TO_LEFT_UNSET;
}, (arg0) => arg0);
definePropertyResult = set.defineProtoSetting("userContent", "lastReceivedChangelogId", (arg0) => {
  let str = arg0;
  if (arg0 == null) {
    str = "0";
  }
  return str;
}, (arg0) => arg0);
definePropertyResult = set.defineProtoSetting("safetySettings", "ignoreProfileSpeedbumpDisabled", (arg0) => {
  let flag = arg0;
  if (arg0 == null) {
    flag = false;
  }
  return flag;
}, (arg0) => arg0);
definePropertyResult = set.defineProtoSetting("appearance", "uiDensity", (arg0) => {
  let DEFAULT = arg0;
  if (arg0 === require(1306) /* create */.UIDensity.UNSET_UI_DENSITY) {
    DEFAULT = tmp(1306).UIDensity.DEFAULT;
  } else if (DEFAULT == null) {
    DEFAULT = tmp(1306).UIDensity.DEFAULT;
  }
  return DEFAULT;
}, (arg0) => arg0);
set = { delay: UserSettingsDelay.AUTOMATED };
definePropertyResult = set.defineProtoSetting("inAppFeedbackSettings", "inAppFeedbackStates", (arg0) => {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  return require(12) /* apply */.mapValues(obj, (arg0) => callback(table[10]).mapValues(arg0, (value) => {
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
}, (arg0) => require(12) /* apply */.mapValues(arg0, (arg0) => callback(table[10]).mapValues(arg0, (arg0) => {
  const UInt64Value = callback(table[6]).UInt64Value;
  let value;
  if (null != arg0) {
    const _String = String;
    value = String(arg0);
  }
  return UInt64Value.create({ value });
})), set);
definePropertyResult = set.defineProtoSetting("textAndImages", "isCrossDmSearchEnabled", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
definePropertyResult = set.defineProtoSetting("privacy", "hideFriendRequestNotes", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
definePropertyResult = set.fileFinishedImporting("modules/user_settings/UserSettings.tsx");

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
export const NativePhoneIntegrationEnabled = defineProtoSettingResult53;
export const AfkTimeout = defineProtoSettingResult54;
export const ViewNsfwGuilds = defineProtoSettingResult55;
export const ViewNsfwCommands = defineProtoSettingResult56;
export const DetectPlatformAccounts = defineProtoSettingResult57;
export const DisableGamesTab = defineProtoSettingResult58;
export const EnableTTSCommand = defineProtoSettingResult59;
export const ExplicitContentFilter = defineProtoSettingResult60;
export const DmSpamFilter = defineProtoSettingResult61;
export const DmSpamFilterV2 = defineProtoSettingResult62;
export const ShowCurrentGame = defineProtoSettingResult63;
export const RecentGamesEnabled = defineProtoSettingResult64;
export const ProfileVisibility = defineProtoSettingResult65;
export const StatusSetting = defineProtoSettingResult66;
export const StatusExpiresAtSetting = defineProtoSettingResult67;
export const StatusCreatedAtSetting = defineProtoSettingResult68;
export const CustomStatusSetting = defineProtoSettingResult69;
export const ClipsAllowVoiceRecording = defineProtoSettingResult70;
export const InlineAttachmentMedia = result;
export const InlineEmbedMedia = result1;
export const RenderEmbeds = result2;
export const RenderReactions = result3;
export const DoubleTapReactionEmoji = result4;
export const TimezoneOffset = defineProtoSettingResult71;
export const ValidChannelListLayoutTypes = set1;
export const ChannelListLayoutSetting = defineProtoSettingResult72;
export const ValidMessagePreviewTypes = set2;
export const MessagePreviewSetting = defineProtoSettingResult73;
export const DeveloperMode = result5;
export const DarkSidebar = defineProtoSettingResult74;
export const ClientThemeSettings = defineProtoSettingResult75;
export const GifAutoPlay = result6;
export const AnimateEmoji = result7;
export const AnimateStickers = result8;
export const ActivityRestrictedGuilds = defineProtoSettingResult76;
export const ActivityRestrictedGuildsFrequent = defineProtoSettingResult77;
export const ActivityJoiningRestrictedGuilds = defineProtoSettingResult78;
export const DefaultGuildsActivityRestricted = defineProtoSetting;
export const DefaultGuildsActivityRestrictedV2 = defineProtoSetting;
export const FamilyCenterEnabled = defineProtoSettingResult79;
export const LegacyUsernameDisabled = set.defineProtoSetting("privacy", "hideLegacyUsername", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = require(1337) /* defineProperty */.BoolValue;
  return BoolValue.create({ value });
});
export const AllowGameFriendDmsInDiscord = definePropertyResult;
export const SlayerSDKReceiveDMsInGame = definePropertyResult;
export const AlwaysDeliverAds = definePropertyResult;
export { explicitContentFromProto };
export { explicitContentToProto };
export const ExplicitContentSettings = definePropertyResult;
export { goreContentFromProto };
export { goreContentToProto };
export const GoreContentSettings = definePropertyResult;
export const SearchResultExactCountEnabled = definePropertyResult;
export const HappeningNowCardsDisabled = definePropertyResult;
export const TimestampHourCycle = definePropertyResult;
export const DefaultGuildThemePreference = definePropertyResult;
export const LaunchPadModeSetting = definePropertyResult;
export const SwipeRightToLeftModeSetting = definePropertyResult;
export const LastReceivedChangelogId = definePropertyResult;
export const IgnoreProfileSpeedbumpDisabled = definePropertyResult;
export const UIDensitySetting = definePropertyResult;
export const InAppFeedbackStates = definePropertyResult;
export const IsCrossDMSearchEnabledSetting = definePropertyResult;
export const HideFriendRequestNotes = definePropertyResult;