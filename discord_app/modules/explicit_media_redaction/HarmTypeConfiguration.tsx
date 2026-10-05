// === Module 6798: HarmTypeConfiguration ===

// Module 6798 (HarmTypeConfiguration)
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import UserSettings from "UserSettings" /* 2028 */;
import MediaTypes from "MediaTypes" /* 5121 */;
import ObscureMediaModels from "ObscureMediaModels" /* 6799 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 6800 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 6801 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 6804 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let MessageAttachmentFlags;
let MessageEmbedFlags;
function getProtoUserSettings(textAndImages) {
  let prop;
  if (textAndImages != null) {
    textAndImages = textAndImages.textAndImages;
    if (textAndImages != null) {
      prop = textAndImages.explicitContentSettings;
    }
  }
  let prop1;
  const GUILD = ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD;
  if (prop != null) {
    prop1 = prop.explicitContentGuilds;
  }
  const obj = {};
  obj[GUILD] = prop1;
  let prop2;
  const FRIEND_DM = ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM;
  if (prop != null) {
    prop2 = prop.explicitContentFriendDm;
  }
  obj[FRIEND_DM] = prop2;
  let prop3;
  const NON_FRIEND_DM = ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM;
  if (prop != null) {
    prop3 = prop.explicitContentNonFriendDm;
  }
  obj[NON_FRIEND_DM] = prop3;
  return obj;
}
function getUserSettingsWithDefaults(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    const GUILD2 = ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD;
    const ExplicitContentSettings3 = UserSettings.ExplicitContentSettings;
    const setting = ExplicitContentSettings3.getSetting();
    let prop;
    if (setting != null) {
      prop = setting.explicitContentGuilds;
    }
    const obj = {};
    obj[GUILD2] = prop;
    const FRIEND_DM = ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM;
    const ExplicitContentSettings = UserSettings.ExplicitContentSettings;
    const setting1 = ExplicitContentSettings.getSetting();
    let prop1;
    if (setting1 != null) {
      prop1 = setting1.explicitContentFriendDm;
    }
    obj[FRIEND_DM] = prop1;
    const NON_FRIEND_DM = ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM;
    const ExplicitContentSettings2 = UserSettings.ExplicitContentSettings;
    const setting2 = ExplicitContentSettings2.getSetting();
    let prop2;
    if (setting2 != null) {
      prop2 = setting2.explicitContentNonFriendDm;
    }
    obj[NON_FRIEND_DM] = prop2;
    tmp = obj;
  }
  const GUILD = ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD;
  let tmp10;
  const resolveExplicitContentSettingWithDefaults = SensitiveMediaExplicitRedactionSettingsUtils.resolveExplicitContentSettingWithDefaults;
  SensitiveMediaExplicitRedactionSettingsUtils;
  if (tmp != null) {
    tmp10 = tmp[ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD];
  }
  const obj2 = { [GUILD]: resolveExplicitContentSettingWithDefaults({ setting: tmp10 }) };
  const FRIEND_DM2 = ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM;
  let tmp12;
  const resolveExplicitContentSettingWithDefaults2 = SensitiveMediaExplicitRedactionSettingsUtils.resolveExplicitContentSettingWithDefaults;
  SensitiveMediaExplicitRedactionSettingsUtils;
  if (tmp != null) {
    tmp12 = tmp[ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM];
  }
  obj2[FRIEND_DM2] = resolveExplicitContentSettingWithDefaults2({ setting: tmp12, isDm: true, isFriend: true });
  const NON_FRIEND_DM2 = ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM;
  let tmp14;
  const resolveExplicitContentSettingWithDefaults3 = SensitiveMediaExplicitRedactionSettingsUtils.resolveExplicitContentSettingWithDefaults;
  SensitiveMediaExplicitRedactionSettingsUtils;
  if (tmp != null) {
    tmp14 = tmp[ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM];
  }
  obj2[NON_FRIEND_DM2] = resolveExplicitContentSettingWithDefaults3({ setting: tmp14, isDm: true });
  return obj2;
}
const getProtoUserSettings2 = function getProtoUserSettings(textAndImages) {
  let goreContentSettings;
  if (textAndImages != null) {
    textAndImages = textAndImages.textAndImages;
    if (textAndImages != null) {
      goreContentSettings = textAndImages.goreContentSettings;
    }
  }
  let goreContentGuilds;
  const GUILD = ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD;
  if (goreContentSettings != null) {
    goreContentGuilds = goreContentSettings.goreContentGuilds;
  }
  const obj = {};
  obj[GUILD] = goreContentGuilds;
  let goreContentFriendDm;
  const FRIEND_DM = ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM;
  if (goreContentSettings != null) {
    goreContentFriendDm = goreContentSettings.goreContentFriendDm;
  }
  obj[FRIEND_DM] = goreContentFriendDm;
  let prop;
  const NON_FRIEND_DM = ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM;
  if (goreContentSettings != null) {
    prop = goreContentSettings.goreContentNonFriendDm;
  }
  obj[NON_FRIEND_DM] = prop;
  return obj;
};
const getUserSettingsWithDefaults2 = function getUserSettingsWithDefaults(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    const GUILD2 = ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD;
    const GoreContentSettings3 = UserSettings.GoreContentSettings;
    const setting = GoreContentSettings3.getSetting();
    let goreContentGuilds;
    if (setting != null) {
      goreContentGuilds = setting.goreContentGuilds;
    }
    const obj = {};
    obj[GUILD2] = goreContentGuilds;
    const FRIEND_DM = ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM;
    const GoreContentSettings = UserSettings.GoreContentSettings;
    const setting1 = GoreContentSettings.getSetting();
    let goreContentFriendDm;
    if (setting1 != null) {
      goreContentFriendDm = setting1.goreContentFriendDm;
    }
    obj[FRIEND_DM] = goreContentFriendDm;
    const NON_FRIEND_DM = ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM;
    const GoreContentSettings2 = UserSettings.GoreContentSettings;
    const setting2 = GoreContentSettings2.getSetting();
    let prop;
    if (setting2 != null) {
      prop = setting2.goreContentNonFriendDm;
    }
    obj[NON_FRIEND_DM] = prop;
    tmp = obj;
  }
  const GUILD = ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD;
  let tmp10;
  const resolveGoreSettingWithDefaults = SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaults;
  SensitiveMediaGoreRedactionSettingsUtils;
  if (tmp != null) {
    tmp10 = tmp[ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD];
  }
  const obj2 = { [GUILD]: resolveGoreSettingWithDefaults({ setting: tmp10 }) };
  const FRIEND_DM2 = ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM;
  let tmp12;
  const resolveGoreSettingWithDefaults2 = SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaults;
  SensitiveMediaGoreRedactionSettingsUtils;
  if (tmp != null) {
    tmp12 = tmp[ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM];
  }
  obj2[FRIEND_DM2] = resolveGoreSettingWithDefaults2({ setting: tmp12, isDm: true, isFriend: true });
  const NON_FRIEND_DM2 = ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM;
  let tmp14;
  const resolveGoreSettingWithDefaults3 = SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaults;
  SensitiveMediaGoreRedactionSettingsUtils;
  if (tmp != null) {
    tmp14 = tmp[ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM];
  }
  obj2[NON_FRIEND_DM2] = resolveGoreSettingWithDefaults3({ setting: tmp14, isDm: true });
  return obj2;
};
const getProtoUserSettings3 = function getProtoUserSettings(textAndImages) {
  let prop;
  if (textAndImages != null) {
    textAndImages = textAndImages.textAndImages;
    if (textAndImages != null) {
      prop = textAndImages.selfHarmContentSettings;
    }
  }
  let prop1;
  const GUILD = ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD;
  if (prop != null) {
    prop1 = prop.selfHarmContentGuilds;
  }
  const obj = {};
  obj[GUILD] = prop1;
  let prop2;
  const FRIEND_DM = ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM;
  if (prop != null) {
    prop2 = prop.selfHarmContentFriendDm;
  }
  obj[FRIEND_DM] = prop2;
  let prop3;
  const NON_FRIEND_DM = ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM;
  if (prop != null) {
    prop3 = prop.selfHarmContentNonFriendDm;
  }
  obj[NON_FRIEND_DM] = prop3;
  return obj;
};
const getUserSettingsWithDefaults3 = function getUserSettingsWithDefaults() {
  const obj = {};
  obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD] = preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM] = preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM] = preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  return obj;
};
({ MessageAttachmentFlags, MessageEmbedFlags } = Constants);
let obj = { EXPLICIT: "explicit", GORE: "gore", SELF_HARM: "self_harm" };
let obj2 = { NONE: 0, [0]: "NONE", EXPLICIT: 1, [1]: "EXPLICIT", GORE: 2, [2]: "GORE", SELF_HARM: 4, [4]: "SELF_HARM", ALL: 7, [7]: "ALL" };
const obj3 = {};
obj3[obj.EXPLICIT] = { harmType: obj.EXPLICIT, obscureReason: ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT, attachmentFlag: MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA, embedFlag: MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA, genericMediaFlag: MediaTypes.ContentScanFlags.EXPLICIT, bitmask: obj2.EXPLICIT, devSettingKey: "obscure_blur_effect_explicit_content_enabled", getProtoUserSettings, getUserSettingsWithDefaults };
({ harmType: obj.EXPLICIT, obscureReason: ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT, attachmentFlag: MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA, embedFlag: MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA, genericMediaFlag: MediaTypes.ContentScanFlags.EXPLICIT, bitmask: obj2.EXPLICIT, devSettingKey: "obscure_blur_effect_explicit_content_enabled", getProtoUserSettings, getUserSettingsWithDefaults });
obj3[obj.GORE] = { harmType: obj.GORE, obscureReason: ObscureMediaModels.ObscureReason.GORE_CONTENT, attachmentFlag: MessageAttachmentFlags.CONTAINS_GORE_CONTENT, embedFlag: MessageEmbedFlags.CONTAINS_GORE_CONTENT, genericMediaFlag: MediaTypes.ContentScanFlags.GORE, bitmask: obj2.GORE, devSettingKey: "obscure_blur_effect_gore_content_enabled", getProtoUserSettings: getProtoUserSettings2, getUserSettingsWithDefaults: getUserSettingsWithDefaults2 };
({ harmType: obj.GORE, obscureReason: ObscureMediaModels.ObscureReason.GORE_CONTENT, attachmentFlag: MessageAttachmentFlags.CONTAINS_GORE_CONTENT, embedFlag: MessageEmbedFlags.CONTAINS_GORE_CONTENT, genericMediaFlag: MediaTypes.ContentScanFlags.GORE, bitmask: obj2.GORE, devSettingKey: "obscure_blur_effect_gore_content_enabled", getProtoUserSettings: getProtoUserSettings2, getUserSettingsWithDefaults: getUserSettingsWithDefaults2 });
obj3[obj.SELF_HARM] = { harmType: obj.SELF_HARM, obscureReason: ObscureMediaModels.ObscureReason.SELF_HARM_CONTENT, attachmentFlag: MessageAttachmentFlags.CONTAINS_SELF_HARM_CONTENT, embedFlag: MessageEmbedFlags.CONTAINS_SELF_HARM_CONTENT, genericMediaFlag: MediaTypes.ContentScanFlags.SELF_HARM, bitmask: obj2.SELF_HARM, devSettingKey: "obscure_blur_effect_self_harm_content_enabled", getProtoUserSettings: getProtoUserSettings3, getUserSettingsWithDefaults: getUserSettingsWithDefaults3 };
({ harmType: obj.SELF_HARM, obscureReason: ObscureMediaModels.ObscureReason.SELF_HARM_CONTENT, attachmentFlag: MessageAttachmentFlags.CONTAINS_SELF_HARM_CONTENT, embedFlag: MessageEmbedFlags.CONTAINS_SELF_HARM_CONTENT, genericMediaFlag: MediaTypes.ContentScanFlags.SELF_HARM, bitmask: obj2.SELF_HARM, devSettingKey: "obscure_blur_effect_self_harm_content_enabled", getProtoUserSettings: getProtoUserSettings3, getUserSettingsWithDefaults: getUserSettingsWithDefaults3 });
const result = size.fileFinishedImporting("modules/explicit_media_redaction/HarmTypeConfiguration.tsx");

export const ContentHarmType = obj;
export const ContentHarmTypeBitMask = obj2;
export const CONTENT_SCAN_TYPE_REGISTRY = obj3;