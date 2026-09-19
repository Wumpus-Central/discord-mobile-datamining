// === Module 7538: SensitiveMediaExplicitRedactionSettingsUtils ===

// Module 7538 (SensitiveMediaExplicitRedactionSettingsUtils)
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import UserSettings from "UserSettings" /* 2019 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5635 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 7539 */;
import SensitiveMediaRedactionSettingUtils from "SensitiveMediaRedactionSettingUtils" /* 7540 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function resolveExplicitContentSettingWithDefaults(isFriend) {
  ({ setting, isDm } = isFriend);
  if (isDm === undefined) {
    isDm = false;
  }
  let flag = isFriend.isFriend;
  if (flag === undefined) {
    flag = false;
  }
  if (null != setting) {
    if (setting !== preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION) {
      return setting;
    }
  }
  const currentUser = UserStore.getCurrentUser();
  let ExplicitContentRedaction = dependencyMap;
  obj = RegionalFeatureConfigUtils;
  if (obj.isSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.SENSITIVE_CONTENT)) {
    if (isDm === undefined) {
      isDm = false;
    }
    if (flag === undefined) {
      flag = false;
    }
    if (isDm) {
      if (!flag) {
        let BLUR2 = preloaded_user_settings.ExplicitContentRedaction.BLOCK;
      }
    }
    ExplicitContentRedaction = preloaded_user_settings.ExplicitContentRedaction;
    BLUR2 = ExplicitContentRedaction.BLUR;
  } else {
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    if (false === nsfwAllowed) {
      let flag5 = isDm;
      if (isDm === undefined) {
        flag5 = false;
      }
      let flag6 = flag;
      if (flag === undefined) {
        flag6 = false;
      }
      if (!flag5) {
        const BLUR = preloaded_user_settings.ExplicitContentRedaction.BLUR;
      }
      const ExplicitContentFilter2 = UserSettings.ExplicitContentFilter;
      const setting1 = ExplicitContentFilter2.getSetting();
    } else {
      let flag3 = isDm;
      if (isDm === undefined) {
        flag3 = false;
      }
      let flag4 = flag;
      if (flag === undefined) {
        flag4 = false;
      }
      if (flag3) {
        const ExplicitContentFilter = UserSettings.ExplicitContentFilter;
        const setting2 = ExplicitContentFilter.getSetting();
        if (flag4) {
          let SHOW = obj[setting2];
        } else {
          SHOW = obj2[setting2];
        }
      } else {
        SHOW = preloaded_user_settings.ExplicitContentRedaction.SHOW;
      }
      return SHOW;
    }
  }
}
const ExplicitContentFilterTypes = fn(2021).ExplicitContentFilterTypes;
let obj = {};
const DISABLED = ExplicitContentFilterTypes.DISABLED;
obj[DISABLED.valueOf()] = fn(1186).ExplicitContentRedaction.SHOW;
const NON_FRIENDS = ExplicitContentFilterTypes.NON_FRIENDS;
const valueOfResult = DISABLED.valueOf();
obj[NON_FRIENDS.valueOf()] = fn(1186).ExplicitContentRedaction.SHOW;
const FRIENDS_AND_NON_FRIENDS = ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS;
const valueOfResult12 = NON_FRIENDS.valueOf();
obj[FRIENDS_AND_NON_FRIENDS.valueOf()] = fn(1186).ExplicitContentRedaction.BLOCK;
let obj2 = {};
const DISABLED2 = ExplicitContentFilterTypes.DISABLED;
const valueOfResult13 = FRIENDS_AND_NON_FRIENDS.valueOf();
obj2[DISABLED2.valueOf()] = fn(1186).ExplicitContentRedaction.SHOW;
const NON_FRIENDS2 = ExplicitContentFilterTypes.NON_FRIENDS;
const valueOfResult14 = DISABLED2.valueOf();
obj2[NON_FRIENDS2.valueOf()] = fn(1186).ExplicitContentRedaction.BLOCK;
const FRIENDS_AND_NON_FRIENDS2 = ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS;
const valueOfResult15 = NON_FRIENDS2.valueOf();
obj2[FRIENDS_AND_NON_FRIENDS2.valueOf()] = fn(1186).ExplicitContentRedaction.BLOCK;
let obj3 = {};
const DISABLED3 = ExplicitContentFilterTypes.DISABLED;
const valueOfResult16 = FRIENDS_AND_NON_FRIENDS2.valueOf();
obj3[DISABLED3.valueOf()] = fn(1186).ExplicitContentRedaction.BLUR;
const NON_FRIENDS3 = ExplicitContentFilterTypes.NON_FRIENDS;
const valueOfResult17 = DISABLED3.valueOf();
obj3[NON_FRIENDS3.valueOf()] = fn(1186).ExplicitContentRedaction.BLUR;
const FRIENDS_AND_NON_FRIENDS3 = ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS;
const valueOfResult18 = NON_FRIENDS3.valueOf();
obj3[FRIENDS_AND_NON_FRIENDS3.valueOf()] = fn(1186).ExplicitContentRedaction.BLOCK;
const obj4 = {};
const DISABLED4 = ExplicitContentFilterTypes.DISABLED;
const valueOfResult19 = FRIENDS_AND_NON_FRIENDS3.valueOf();
obj4[DISABLED4.valueOf()] = fn(1186).ExplicitContentRedaction.BLUR;
const NON_FRIENDS4 = ExplicitContentFilterTypes.NON_FRIENDS;
const valueOfResult20 = DISABLED4.valueOf();
obj4[NON_FRIENDS4.valueOf()] = fn(1186).ExplicitContentRedaction.BLOCK;
const FRIENDS_AND_NON_FRIENDS4 = ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS;
const valueOfResult21 = NON_FRIENDS4.valueOf();
obj4[FRIENDS_AND_NON_FRIENDS4.valueOf()] = fn(1186).ExplicitContentRedaction.BLOCK;
const size = fn(2);
const result = size.fileFinishedImporting("modules/explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx");

export const TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM = obj3;
export const TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_NON_FRIEND_DM = obj4;
export { resolveExplicitContentSettingWithDefaults };
export const resolveSettingWithDefaultsForTeen = function resolveSettingWithDefaultsForTeen(isDm) {
  let flag = isDm.isDm;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isDm.isFriend;
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (flag) {
    const ExplicitContentFilter = UserSettings.ExplicitContentFilter;
    const setting = ExplicitContentFilter.getSetting();
    if (flag2) {
      let tmp5 = obj3[setting];
    } else {
      tmp5 = obj4[setting];
    }
    return tmp5;
  } else {
    return preloaded_user_settings.ExplicitContentRedaction.BLUR;
  }
};
export const getExplicitContentSettingOrDefault = function getExplicitContentSettingOrDefault(arg0) {
  let setting = arg0;
  if (arg0 == null) {
    const ExplicitContentSettings = UserSettings.ExplicitContentSettings;
    setting = ExplicitContentSettings.getSetting();
  }
  let prop;
  if (setting != null) {
    prop = setting.explicitContentGuilds;
  }
  obj = { explicitContentGuilds: resolveExplicitContentSettingWithDefaults({ setting: prop }), explicitContentNonFriendDm: null, explicitContentFriendDm: null };
  let prop1;
  if (setting != null) {
    prop1 = setting.explicitContentNonFriendDm;
  }
  obj.explicitContentNonFriendDm = resolveExplicitContentSettingWithDefaults({ setting: prop1, isDm: true });
  let prop2;
  if (setting != null) {
    prop2 = setting.explicitContentFriendDm;
  }
  obj.explicitContentFriendDm = resolveExplicitContentSettingWithDefaults({ setting: prop2, isDm: true, isFriend: true });
  return obj;
};
export const updateExplicitContentSetting = function updateExplicitContentSetting(arg0) {
  const ExplicitContentSettings = UserSettings.ExplicitContentSettings;
  const setting = ExplicitContentSettings.getSetting();
  let prop;
  if (setting != null) {
    prop = setting.explicitContentGuilds;
  }
  obj = { explicitContentGuilds: resolveExplicitContentSettingWithDefaults({ setting: prop }), explicitContentNonFriendDm: null, explicitContentFriendDm: null };
  let prop1;
  if (setting != null) {
    prop1 = setting.explicitContentNonFriendDm;
  }
  obj.explicitContentNonFriendDm = resolveExplicitContentSettingWithDefaults({ setting: prop1, isDm: true });
  let prop2;
  if (setting != null) {
    prop2 = setting.explicitContentFriendDm;
  }
  obj.explicitContentFriendDm = resolveExplicitContentSettingWithDefaults({ setting: prop2, isDm: true, isFriend: true });
  const ExplicitContentSettings2 = UserSettings.ExplicitContentSettings;
  const merged = Object.assign(obj);
  const merged1 = Object.assign(arg0);
  ExplicitContentSettings2.updateSetting({});
  obj2 = {};
};
export const shouldRedactMessageMediaForForum = function shouldRedactMessageMediaForForum() {
  if (null == UserStore.getCurrentUser()) {
    return false;
  } else {
    const ExplicitContentSettings = UserSettings.ExplicitContentSettings;
    const setting = ExplicitContentSettings.getSetting();
    let prop;
    if (setting != null) {
      prop = setting.explicitContentGuilds;
    }
    obj = { setting: prop };
    let prop1;
    if (setting != null) {
      prop1 = setting.explicitContentNonFriendDm;
    }
    obj2 = { setting: prop1, isDm: true };
    resolveExplicitContentSettingWithDefaults(obj2);
    let prop2;
    if (setting != null) {
      prop2 = setting.explicitContentFriendDm;
    }
    obj3 = { setting: prop2, isDm: true, isFriend: true };
    resolveExplicitContentSettingWithDefaults(obj3);
    const tmp10Result = resolveExplicitContentSettingWithDefaults(obj);
    return SensitiveMediaRedactionSettingUtils.getShouldObscureForSetting(tmp10Result);
  }
};