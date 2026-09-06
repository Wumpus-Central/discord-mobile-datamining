// discord_app/modules/explicit_media_redaction/HarmTypeConfiguration.tsx
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import MediaTypes from "../media/MediaTypes.tsx";
import ObscureMediaModels from "ObscureMediaModels.tsx";
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels.tsx";
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils.tsx";
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

({ MessageAttachmentFlags, MessageEmbedFlags } = Constants);
let obj = { EXPLICIT: "explicit", GORE: "gore", SELF_HARM: "self_harm" };
obj = {
  NONE: 0,
  [0]: "NONE",
  EXPLICIT: 1,
  [1]: "EXPLICIT",
  GORE: 2,
  [2]: "GORE",
  SELF_HARM: 4,
  [4]: "SELF_HARM",
  ALL: 7,
  [7]: "ALL",
};
obj = {};
obj[obj.EXPLICIT] = {
  harmType: obj.EXPLICIT,
  obscureReason: ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT,
  attachmentFlag: MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA,
  embedFlag: MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA,
  genericMediaFlag: MediaTypes.ContentScanFlags.EXPLICIT,
  bitmask: obj.EXPLICIT,
  devSettingKey: "obscure_blur_effect_explicit_content_enabled",
  getProtoUserSettings(textAndImages) {
    let prop;
    if (textAndImages != null) {
      textAndImages = textAndImages.textAndImages;
      if (textAndImages != null) {
        prop = textAndImages.explicitContentSettings;
      }
    }
    let prop1;
    if (prop != null) {
      prop1 = prop.explicitContentGuilds;
    }
    const obj = {};
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD] = prop1;
    let prop2;
    if (prop != null) {
      prop2 = prop.explicitContentFriendDm;
    }
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM] = prop2;
    let prop3;
    if (prop != null) {
      prop3 = prop.explicitContentNonFriendDm;
    }
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM] = prop3;
    return obj;
  },
  getUserSettingsWithDefaults(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      const ExplicitContentSettings3 = UserSettings.ExplicitContentSettings;
      const setting = ExplicitContentSettings3.getSetting();
      let prop;
      if (setting != null) {
        prop = setting.explicitContentGuilds;
      }
      let obj = {};
      obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD] = prop;
      const ExplicitContentSettings = UserSettings.ExplicitContentSettings;
      const setting1 = ExplicitContentSettings.getSetting();
      let prop1;
      if (setting1 != null) {
        prop1 = setting1.explicitContentFriendDm;
      }
      obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM] = prop1;
      const ExplicitContentSettings2 = UserSettings.ExplicitContentSettings;
      const setting2 = ExplicitContentSettings2.getSetting();
      let prop2;
      if (setting2 != null) {
        prop2 = setting2.explicitContentNonFriendDm;
      }
      obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM] = prop2;
      tmp = obj;
    }
    let tmp9;
    if (tmp != null) {
      tmp9 = tmp[ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD];
    }
    obj = {
      [closure_1_0(closure_1_1[3]).ContentHarmTypeChannel.GUILD]:
        SensitiveMediaExplicitRedactionSettingsUtils.resolveExplicitContentSettingWithDefaults({ setting: tmp9 }),
    };
    let tmp7Result = SensitiveMediaExplicitRedactionSettingsUtils;
    let tmp10;
    if (tmp != null) {
      tmp10 = tmp[ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM];
    }
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM] =
      tmp7Result.resolveExplicitContentSettingWithDefaults({ setting: tmp10, isDm: true, isFriend: true });
    tmp7Result = SensitiveMediaExplicitRedactionSettingsUtils;
    let tmp11;
    if (tmp != null) {
      tmp11 = tmp[ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM];
    }
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM] =
      tmp7Result.resolveExplicitContentSettingWithDefaults({ setting: tmp11, isDm: true });
    return obj;
  },
};
const obj1 = {
  harmType: obj.EXPLICIT,
  obscureReason: ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT,
  attachmentFlag: MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA,
  embedFlag: MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA,
  genericMediaFlag: MediaTypes.ContentScanFlags.EXPLICIT,
  bitmask: obj.EXPLICIT,
  devSettingKey: "obscure_blur_effect_explicit_content_enabled",
  getProtoUserSettings(textAndImages) {
    let prop;
    if (textAndImages != null) {
      textAndImages = textAndImages.textAndImages;
      if (textAndImages != null) {
        prop = textAndImages.explicitContentSettings;
      }
    }
    let prop1;
    if (prop != null) {
      prop1 = prop.explicitContentGuilds;
    }
    const obj = {};
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD] = prop1;
    let prop2;
    if (prop != null) {
      prop2 = prop.explicitContentFriendDm;
    }
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM] = prop2;
    let prop3;
    if (prop != null) {
      prop3 = prop.explicitContentNonFriendDm;
    }
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM] = prop3;
    return obj;
  },
  getUserSettingsWithDefaults(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      const ExplicitContentSettings3 = UserSettings.ExplicitContentSettings;
      const setting = ExplicitContentSettings3.getSetting();
      let prop;
      if (setting != null) {
        prop = setting.explicitContentGuilds;
      }
      let obj = {};
      obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD] = prop;
      const ExplicitContentSettings = UserSettings.ExplicitContentSettings;
      const setting1 = ExplicitContentSettings.getSetting();
      let prop1;
      if (setting1 != null) {
        prop1 = setting1.explicitContentFriendDm;
      }
      obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM] = prop1;
      const ExplicitContentSettings2 = UserSettings.ExplicitContentSettings;
      const setting2 = ExplicitContentSettings2.getSetting();
      let prop2;
      if (setting2 != null) {
        prop2 = setting2.explicitContentNonFriendDm;
      }
      obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM] = prop2;
      tmp = obj;
    }
    let tmp9;
    if (tmp != null) {
      tmp9 = tmp[ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD];
    }
    obj = {
      [closure_1_0(closure_1_1[3]).ContentHarmTypeChannel.GUILD]:
        SensitiveMediaExplicitRedactionSettingsUtils.resolveExplicitContentSettingWithDefaults({ setting: tmp9 }),
    };
    let tmp7Result = SensitiveMediaExplicitRedactionSettingsUtils;
    let tmp10;
    if (tmp != null) {
      tmp10 = tmp[ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM];
    }
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM] =
      tmp7Result.resolveExplicitContentSettingWithDefaults({ setting: tmp10, isDm: true, isFriend: true });
    tmp7Result = SensitiveMediaExplicitRedactionSettingsUtils;
    let tmp11;
    if (tmp != null) {
      tmp11 = tmp[ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM];
    }
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM] =
      tmp7Result.resolveExplicitContentSettingWithDefaults({ setting: tmp11, isDm: true });
    return obj;
  },
};
obj[obj.GORE] = {
  harmType: obj.GORE,
  obscureReason: ObscureMediaModels.ObscureReason.GORE_CONTENT,
  attachmentFlag: MessageAttachmentFlags.CONTAINS_GORE_CONTENT,
  embedFlag: MessageEmbedFlags.CONTAINS_GORE_CONTENT,
  genericMediaFlag: MediaTypes.ContentScanFlags.GORE,
  bitmask: obj.GORE,
  devSettingKey: "obscure_blur_effect_gore_content_enabled",
  getProtoUserSettings(textAndImages) {
    let goreContentSettings;
    if (textAndImages != null) {
      textAndImages = textAndImages.textAndImages;
      if (textAndImages != null) {
        goreContentSettings = textAndImages.goreContentSettings;
      }
    }
    let goreContentGuilds;
    if (goreContentSettings != null) {
      goreContentGuilds = goreContentSettings.goreContentGuilds;
    }
    const obj = {};
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD] = goreContentGuilds;
    let goreContentFriendDm;
    if (goreContentSettings != null) {
      goreContentFriendDm = goreContentSettings.goreContentFriendDm;
    }
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM] = goreContentFriendDm;
    let prop;
    if (goreContentSettings != null) {
      prop = goreContentSettings.goreContentNonFriendDm;
    }
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM] = prop;
    return obj;
  },
  getUserSettingsWithDefaults(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      const GoreContentSettings3 = UserSettings.GoreContentSettings;
      const setting = GoreContentSettings3.getSetting();
      let goreContentGuilds;
      if (setting != null) {
        goreContentGuilds = setting.goreContentGuilds;
      }
      let obj = {};
      obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD] = goreContentGuilds;
      const GoreContentSettings = UserSettings.GoreContentSettings;
      const setting1 = GoreContentSettings.getSetting();
      let goreContentFriendDm;
      if (setting1 != null) {
        goreContentFriendDm = setting1.goreContentFriendDm;
      }
      obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM] = goreContentFriendDm;
      const GoreContentSettings2 = UserSettings.GoreContentSettings;
      const setting2 = GoreContentSettings2.getSetting();
      let prop;
      if (setting2 != null) {
        prop = setting2.goreContentNonFriendDm;
      }
      obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM] = prop;
      tmp = obj;
    }
    let tmp9;
    if (tmp != null) {
      tmp9 = tmp[ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD];
    }
    obj = {
      [closure_1_0(closure_1_1[3]).ContentHarmTypeChannel.GUILD]:
        SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaults({ setting: tmp9 }),
    };
    let tmp7Result = SensitiveMediaGoreRedactionSettingsUtils;
    let tmp10;
    if (tmp != null) {
      tmp10 = tmp[ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM];
    }
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM] = tmp7Result.resolveGoreSettingWithDefaults({
      setting: tmp10,
      isDm: true,
      isFriend: true,
    });
    tmp7Result = SensitiveMediaGoreRedactionSettingsUtils;
    let tmp11;
    if (tmp != null) {
      tmp11 = tmp[ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM];
    }
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM] = tmp7Result.resolveGoreSettingWithDefaults({
      setting: tmp11,
      isDm: true,
    });
    return obj;
  },
};
const obj2 = {
  harmType: obj.GORE,
  obscureReason: ObscureMediaModels.ObscureReason.GORE_CONTENT,
  attachmentFlag: MessageAttachmentFlags.CONTAINS_GORE_CONTENT,
  embedFlag: MessageEmbedFlags.CONTAINS_GORE_CONTENT,
  genericMediaFlag: MediaTypes.ContentScanFlags.GORE,
  bitmask: obj.GORE,
  devSettingKey: "obscure_blur_effect_gore_content_enabled",
  getProtoUserSettings(textAndImages) {
    let goreContentSettings;
    if (textAndImages != null) {
      textAndImages = textAndImages.textAndImages;
      if (textAndImages != null) {
        goreContentSettings = textAndImages.goreContentSettings;
      }
    }
    let goreContentGuilds;
    if (goreContentSettings != null) {
      goreContentGuilds = goreContentSettings.goreContentGuilds;
    }
    const obj = {};
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD] = goreContentGuilds;
    let goreContentFriendDm;
    if (goreContentSettings != null) {
      goreContentFriendDm = goreContentSettings.goreContentFriendDm;
    }
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM] = goreContentFriendDm;
    let prop;
    if (goreContentSettings != null) {
      prop = goreContentSettings.goreContentNonFriendDm;
    }
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM] = prop;
    return obj;
  },
  getUserSettingsWithDefaults(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      const GoreContentSettings3 = UserSettings.GoreContentSettings;
      const setting = GoreContentSettings3.getSetting();
      let goreContentGuilds;
      if (setting != null) {
        goreContentGuilds = setting.goreContentGuilds;
      }
      let obj = {};
      obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD] = goreContentGuilds;
      const GoreContentSettings = UserSettings.GoreContentSettings;
      const setting1 = GoreContentSettings.getSetting();
      let goreContentFriendDm;
      if (setting1 != null) {
        goreContentFriendDm = setting1.goreContentFriendDm;
      }
      obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM] = goreContentFriendDm;
      const GoreContentSettings2 = UserSettings.GoreContentSettings;
      const setting2 = GoreContentSettings2.getSetting();
      let prop;
      if (setting2 != null) {
        prop = setting2.goreContentNonFriendDm;
      }
      obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM] = prop;
      tmp = obj;
    }
    let tmp9;
    if (tmp != null) {
      tmp9 = tmp[ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD];
    }
    obj = {
      [closure_1_0(closure_1_1[3]).ContentHarmTypeChannel.GUILD]:
        SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaults({ setting: tmp9 }),
    };
    let tmp7Result = SensitiveMediaGoreRedactionSettingsUtils;
    let tmp10;
    if (tmp != null) {
      tmp10 = tmp[ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM];
    }
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM] = tmp7Result.resolveGoreSettingWithDefaults({
      setting: tmp10,
      isDm: true,
      isFriend: true,
    });
    tmp7Result = SensitiveMediaGoreRedactionSettingsUtils;
    let tmp11;
    if (tmp != null) {
      tmp11 = tmp[ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM];
    }
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM] = tmp7Result.resolveGoreSettingWithDefaults({
      setting: tmp11,
      isDm: true,
    });
    return obj;
  },
};
obj[obj.SELF_HARM] = {
  harmType: obj.SELF_HARM,
  obscureReason: ObscureMediaModels.ObscureReason.SELF_HARM_CONTENT,
  attachmentFlag: MessageAttachmentFlags.CONTAINS_SELF_HARM_CONTENT,
  embedFlag: MessageEmbedFlags.CONTAINS_SELF_HARM_CONTENT,
  genericMediaFlag: MediaTypes.ContentScanFlags.SELF_HARM,
  bitmask: obj.SELF_HARM,
  devSettingKey: "obscure_blur_effect_self_harm_content_enabled",
  getProtoUserSettings(textAndImages) {
    let prop;
    if (textAndImages != null) {
      textAndImages = textAndImages.textAndImages;
      if (textAndImages != null) {
        prop = textAndImages.selfHarmContentSettings;
      }
    }
    let prop1;
    if (prop != null) {
      prop1 = prop.selfHarmContentGuilds;
    }
    const obj = {};
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD] = prop1;
    let prop2;
    if (prop != null) {
      prop2 = prop.selfHarmContentFriendDm;
    }
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM] = prop2;
    let prop3;
    if (prop != null) {
      prop3 = prop.selfHarmContentNonFriendDm;
    }
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM] = prop3;
    return obj;
  },
  getUserSettingsWithDefaults() {
    const obj = {};
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD] =
      preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM] =
      preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
    obj[ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM] =
      preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
    return obj;
  },
};
const result = size.fileFinishedImporting("modules/explicit_media_redaction/HarmTypeConfiguration.tsx");

export const ContentHarmType = obj;
export const ContentHarmTypeBitMask = obj;
export const CONTENT_SCAN_TYPE_REGISTRY = obj;
