// discord_app/modules/explicit_media_redaction/HarmTypeConfiguration.tsx
import ME from "ME";

let MessageAttachmentFlags;
let MessageEmbedFlags;
({ MessageAttachmentFlags, MessageEmbedFlags } = ME);
let obj = { EXPLICIT: "explicit", GORE: "gore", SELF_HARM: "self_harm" };
obj = { NONE: 0, [0]: "NONE", EXPLICIT: 1, [1]: "EXPLICIT", GORE: 2, [2]: "GORE", SELF_HARM: 4, [4]: "SELF_HARM", ALL: 7, [7]: "ALL" };
obj = {};
obj[obj.EXPLICIT] = {
  harmType: obj.EXPLICIT,
  obscureReason: require("ObscureReason").ObscureReason.EXPLICIT_CONTENT,
  attachmentFlag: MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA,
  embedFlag: MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA,
  genericMediaFlag: require("messageAttachmentToUnfurledMediaItem").ContentScanFlags.EXPLICIT,
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
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.GUILD] = prop1;
    let prop2;
    if (prop != null) {
      prop2 = prop.explicitContentFriendDm;
    }
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.FRIEND_DM] = prop2;
    let prop3;
    if (prop != null) {
      prop3 = prop.explicitContentNonFriendDm;
    }
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.NON_FRIEND_DM] = prop3;
    return obj;
  },
  getUserSettingsWithDefaults(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      const ExplicitContentSettings3 = require(3958) /* explicitContentFromProto */.ExplicitContentSettings;
      const setting = ExplicitContentSettings3.getSetting();
      let prop;
      if (setting != null) {
        prop = setting.explicitContentGuilds;
      }
      let obj = {};
      obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.GUILD] = prop;
      const ExplicitContentSettings = tmp12(3958).ExplicitContentSettings;
      const setting1 = ExplicitContentSettings.getSetting();
      let prop1;
      if (setting1 != null) {
        prop1 = setting1.explicitContentFriendDm;
      }
      obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.FRIEND_DM] = prop1;
      const ExplicitContentSettings2 = tmp12(3958).ExplicitContentSettings;
      const setting2 = ExplicitContentSettings2.getSetting();
      let prop2;
      if (setting2 != null) {
        prop2 = setting2.explicitContentNonFriendDm;
      }
      obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.NON_FRIEND_DM] = prop2;
      tmp = obj;
    }
    let tmp9;
    if (tmp != null) {
      tmp9 = tmp[tmp7(undefined, 5823).ContentHarmTypeChannel.GUILD];
    }
    obj = { [closure_0(closure_1[3]).ContentHarmTypeChannel.GUILD]: require(5824) /* resolveExplicitContentSettingWithDefaults */.resolveExplicitContentSettingWithDefaults({ setting: tmp9 }) };
    let tmp7Result = tmp7(5824);
    let tmp10;
    if (tmp != null) {
      tmp10 = tmp[tmp7(undefined, 5823).ContentHarmTypeChannel.FRIEND_DM];
    }
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.FRIEND_DM] = tmp7Result.resolveExplicitContentSettingWithDefaults({ setting: tmp10, isDm: true, isFriend: true });
    tmp7Result = tmp7(5824);
    let tmp11;
    if (tmp != null) {
      tmp11 = tmp[tmp7(undefined, 5823).ContentHarmTypeChannel.NON_FRIEND_DM];
    }
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.NON_FRIEND_DM] = tmp7Result.resolveExplicitContentSettingWithDefaults({ setting: tmp11, isDm: true });
    return obj;
  }
};
const obj1 = {
  harmType: obj.EXPLICIT,
  obscureReason: require("ObscureReason").ObscureReason.EXPLICIT_CONTENT,
  attachmentFlag: MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA,
  embedFlag: MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA,
  genericMediaFlag: require("messageAttachmentToUnfurledMediaItem").ContentScanFlags.EXPLICIT,
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
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.GUILD] = prop1;
    let prop2;
    if (prop != null) {
      prop2 = prop.explicitContentFriendDm;
    }
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.FRIEND_DM] = prop2;
    let prop3;
    if (prop != null) {
      prop3 = prop.explicitContentNonFriendDm;
    }
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.NON_FRIEND_DM] = prop3;
    return obj;
  },
  getUserSettingsWithDefaults(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      const ExplicitContentSettings3 = require(3958) /* explicitContentFromProto */.ExplicitContentSettings;
      const setting = ExplicitContentSettings3.getSetting();
      let prop;
      if (setting != null) {
        prop = setting.explicitContentGuilds;
      }
      let obj = {};
      obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.GUILD] = prop;
      const ExplicitContentSettings = tmp12(3958).ExplicitContentSettings;
      const setting1 = ExplicitContentSettings.getSetting();
      let prop1;
      if (setting1 != null) {
        prop1 = setting1.explicitContentFriendDm;
      }
      obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.FRIEND_DM] = prop1;
      const ExplicitContentSettings2 = tmp12(3958).ExplicitContentSettings;
      const setting2 = ExplicitContentSettings2.getSetting();
      let prop2;
      if (setting2 != null) {
        prop2 = setting2.explicitContentNonFriendDm;
      }
      obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.NON_FRIEND_DM] = prop2;
      tmp = obj;
    }
    let tmp9;
    if (tmp != null) {
      tmp9 = tmp[tmp7(undefined, 5823).ContentHarmTypeChannel.GUILD];
    }
    obj = { [closure_0(closure_1[3]).ContentHarmTypeChannel.GUILD]: require(5824) /* resolveExplicitContentSettingWithDefaults */.resolveExplicitContentSettingWithDefaults({ setting: tmp9 }) };
    let tmp7Result = tmp7(5824);
    let tmp10;
    if (tmp != null) {
      tmp10 = tmp[tmp7(undefined, 5823).ContentHarmTypeChannel.FRIEND_DM];
    }
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.FRIEND_DM] = tmp7Result.resolveExplicitContentSettingWithDefaults({ setting: tmp10, isDm: true, isFriend: true });
    tmp7Result = tmp7(5824);
    let tmp11;
    if (tmp != null) {
      tmp11 = tmp[tmp7(undefined, 5823).ContentHarmTypeChannel.NON_FRIEND_DM];
    }
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.NON_FRIEND_DM] = tmp7Result.resolveExplicitContentSettingWithDefaults({ setting: tmp11, isDm: true });
    return obj;
  }
};
obj[obj.GORE] = {
  harmType: obj.GORE,
  obscureReason: require("ObscureReason").ObscureReason.GORE_CONTENT,
  attachmentFlag: MessageAttachmentFlags.CONTAINS_GORE_CONTENT,
  embedFlag: MessageEmbedFlags.CONTAINS_GORE_CONTENT,
  genericMediaFlag: require("messageAttachmentToUnfurledMediaItem").ContentScanFlags.GORE,
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
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.GUILD] = goreContentGuilds;
    let goreContentFriendDm;
    if (goreContentSettings != null) {
      goreContentFriendDm = goreContentSettings.goreContentFriendDm;
    }
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.FRIEND_DM] = goreContentFriendDm;
    let prop;
    if (goreContentSettings != null) {
      prop = goreContentSettings.goreContentNonFriendDm;
    }
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.NON_FRIEND_DM] = prop;
    return obj;
  },
  getUserSettingsWithDefaults(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      const GoreContentSettings3 = require(3958) /* explicitContentFromProto */.GoreContentSettings;
      const setting = GoreContentSettings3.getSetting();
      let goreContentGuilds;
      if (setting != null) {
        goreContentGuilds = setting.goreContentGuilds;
      }
      let obj = {};
      obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.GUILD] = goreContentGuilds;
      const GoreContentSettings = tmp12(3958).GoreContentSettings;
      const setting1 = GoreContentSettings.getSetting();
      let goreContentFriendDm;
      if (setting1 != null) {
        goreContentFriendDm = setting1.goreContentFriendDm;
      }
      obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.FRIEND_DM] = goreContentFriendDm;
      const GoreContentSettings2 = tmp12(3958).GoreContentSettings;
      const setting2 = GoreContentSettings2.getSetting();
      let prop;
      if (setting2 != null) {
        prop = setting2.goreContentNonFriendDm;
      }
      obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.NON_FRIEND_DM] = prop;
      tmp = obj;
    }
    let tmp9;
    if (tmp != null) {
      tmp9 = tmp[tmp7(undefined, 5823).ContentHarmTypeChannel.GUILD];
    }
    obj = { [closure_0(closure_1[3]).ContentHarmTypeChannel.GUILD]: require(5826) /* resolveGoreSettingWithDefaults */.resolveGoreSettingWithDefaults({ setting: tmp9 }) };
    let tmp7Result = tmp7(5826);
    let tmp10;
    if (tmp != null) {
      tmp10 = tmp[tmp7(undefined, 5823).ContentHarmTypeChannel.FRIEND_DM];
    }
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.FRIEND_DM] = tmp7Result.resolveGoreSettingWithDefaults({ setting: tmp10, isDm: true, isFriend: true });
    tmp7Result = tmp7(5826);
    let tmp11;
    if (tmp != null) {
      tmp11 = tmp[tmp7(undefined, 5823).ContentHarmTypeChannel.NON_FRIEND_DM];
    }
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.NON_FRIEND_DM] = tmp7Result.resolveGoreSettingWithDefaults({ setting: tmp11, isDm: true });
    return obj;
  }
};
const obj2 = {
  harmType: obj.GORE,
  obscureReason: require("ObscureReason").ObscureReason.GORE_CONTENT,
  attachmentFlag: MessageAttachmentFlags.CONTAINS_GORE_CONTENT,
  embedFlag: MessageEmbedFlags.CONTAINS_GORE_CONTENT,
  genericMediaFlag: require("messageAttachmentToUnfurledMediaItem").ContentScanFlags.GORE,
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
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.GUILD] = goreContentGuilds;
    let goreContentFriendDm;
    if (goreContentSettings != null) {
      goreContentFriendDm = goreContentSettings.goreContentFriendDm;
    }
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.FRIEND_DM] = goreContentFriendDm;
    let prop;
    if (goreContentSettings != null) {
      prop = goreContentSettings.goreContentNonFriendDm;
    }
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.NON_FRIEND_DM] = prop;
    return obj;
  },
  getUserSettingsWithDefaults(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      const GoreContentSettings3 = require(3958) /* explicitContentFromProto */.GoreContentSettings;
      const setting = GoreContentSettings3.getSetting();
      let goreContentGuilds;
      if (setting != null) {
        goreContentGuilds = setting.goreContentGuilds;
      }
      let obj = {};
      obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.GUILD] = goreContentGuilds;
      const GoreContentSettings = tmp12(3958).GoreContentSettings;
      const setting1 = GoreContentSettings.getSetting();
      let goreContentFriendDm;
      if (setting1 != null) {
        goreContentFriendDm = setting1.goreContentFriendDm;
      }
      obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.FRIEND_DM] = goreContentFriendDm;
      const GoreContentSettings2 = tmp12(3958).GoreContentSettings;
      const setting2 = GoreContentSettings2.getSetting();
      let prop;
      if (setting2 != null) {
        prop = setting2.goreContentNonFriendDm;
      }
      obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.NON_FRIEND_DM] = prop;
      tmp = obj;
    }
    let tmp9;
    if (tmp != null) {
      tmp9 = tmp[tmp7(undefined, 5823).ContentHarmTypeChannel.GUILD];
    }
    obj = { [closure_0(closure_1[3]).ContentHarmTypeChannel.GUILD]: require(5826) /* resolveGoreSettingWithDefaults */.resolveGoreSettingWithDefaults({ setting: tmp9 }) };
    let tmp7Result = tmp7(5826);
    let tmp10;
    if (tmp != null) {
      tmp10 = tmp[tmp7(undefined, 5823).ContentHarmTypeChannel.FRIEND_DM];
    }
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.FRIEND_DM] = tmp7Result.resolveGoreSettingWithDefaults({ setting: tmp10, isDm: true, isFriend: true });
    tmp7Result = tmp7(5826);
    let tmp11;
    if (tmp != null) {
      tmp11 = tmp[tmp7(undefined, 5823).ContentHarmTypeChannel.NON_FRIEND_DM];
    }
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.NON_FRIEND_DM] = tmp7Result.resolveGoreSettingWithDefaults({ setting: tmp11, isDm: true });
    return obj;
  }
};
obj[obj.SELF_HARM] = {
  harmType: obj.SELF_HARM,
  obscureReason: require("ObscureReason").ObscureReason.SELF_HARM_CONTENT,
  attachmentFlag: MessageAttachmentFlags.CONTAINS_SELF_HARM_CONTENT,
  embedFlag: MessageEmbedFlags.CONTAINS_SELF_HARM_CONTENT,
  genericMediaFlag: require("messageAttachmentToUnfurledMediaItem").ContentScanFlags.SELF_HARM,
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
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.GUILD] = prop1;
    let prop2;
    if (prop != null) {
      prop2 = prop.selfHarmContentFriendDm;
    }
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.FRIEND_DM] = prop2;
    let prop3;
    if (prop != null) {
      prop3 = prop.selfHarmContentNonFriendDm;
    }
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.NON_FRIEND_DM] = prop3;
    return obj;
  },
  getUserSettingsWithDefaults() {
    const obj = {};
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.GUILD] = require(1306) /* create */.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.FRIEND_DM] = require(1306) /* create */.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.NON_FRIEND_DM] = require(1306) /* create */.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
    return obj;
  }
};
const obj3 = {
  harmType: obj.SELF_HARM,
  obscureReason: require("ObscureReason").ObscureReason.SELF_HARM_CONTENT,
  attachmentFlag: MessageAttachmentFlags.CONTAINS_SELF_HARM_CONTENT,
  embedFlag: MessageEmbedFlags.CONTAINS_SELF_HARM_CONTENT,
  genericMediaFlag: require("messageAttachmentToUnfurledMediaItem").ContentScanFlags.SELF_HARM,
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
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.GUILD] = prop1;
    let prop2;
    if (prop != null) {
      prop2 = prop.selfHarmContentFriendDm;
    }
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.FRIEND_DM] = prop2;
    let prop3;
    if (prop != null) {
      prop3 = prop.selfHarmContentNonFriendDm;
    }
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.NON_FRIEND_DM] = prop3;
    return obj;
  },
  getUserSettingsWithDefaults() {
    const obj = {};
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.GUILD] = require(1306) /* create */.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.FRIEND_DM] = require(1306) /* create */.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
    obj[require(5823) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.NON_FRIEND_DM] = require(1306) /* create */.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
    return obj;
  }
};
const result = require("messageAttachmentToUnfurledMediaItem").fileFinishedImporting("modules/explicit_media_redaction/HarmTypeConfiguration.tsx");

export const ContentHarmType = obj;
export const ContentHarmTypeBitMask = obj;
export const CONTENT_SCAN_TYPE_REGISTRY = obj;