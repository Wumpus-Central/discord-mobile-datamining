// discord_app/modules/explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import RegionalFeatureConfigUtils from "../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import SettingsDefaultFeature from "../../../discord_common/js/shared/shared-constants/SettingsDefaultFeature.tsx";
import SensitiveMediaRedactionSettingUtils from "SensitiveMediaRedactionSettingUtils.tsx";
import UserStore from "../../stores/UserStore.tsx";

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
        let BLUR2 = tmp4(1187).ExplicitContentRedaction.BLOCK;
      }
    }
    ExplicitContentRedaction = tmp4(1187).ExplicitContentRedaction;
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
        const BLUR = tmp4(1187).ExplicitContentRedaction.BLUR;
      }
      const ExplicitContentFilter2 = tmp4(1935).ExplicitContentFilter;
      setting = ExplicitContentFilter2.getSetting();
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
        const ExplicitContentFilter = tmp4(1935).ExplicitContentFilter;
        const setting1 = ExplicitContentFilter.getSetting();
        if (flag4) {
          let SHOW = obj[setting1];
        } else {
          SHOW = obj[setting1];
        }
      } else {
        SHOW = tmp4(1187).ExplicitContentRedaction.SHOW;
      }
      return SHOW;
    }
  }
}
const ExplicitContentFilterTypes = fn(1937).ExplicitContentFilterTypes;
let obj = {};
const DISABLED = ExplicitContentFilterTypes.DISABLED;
let valueOfResult = DISABLED.valueOf();
obj[valueOfResult] = fn(1187).ExplicitContentRedaction.SHOW;
const NON_FRIENDS = ExplicitContentFilterTypes.NON_FRIENDS;
valueOfResult = NON_FRIENDS.valueOf();
obj[valueOfResult] = fn(1187).ExplicitContentRedaction.SHOW;
const FRIENDS_AND_NON_FRIENDS = ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS;
obj[FRIENDS_AND_NON_FRIENDS.valueOf()] = fn(1187).ExplicitContentRedaction.BLOCK;
obj = {};
const DISABLED2 = ExplicitContentFilterTypes.DISABLED;
const valueOfResult1 = FRIENDS_AND_NON_FRIENDS.valueOf();
obj[DISABLED2.valueOf()] = fn(1187).ExplicitContentRedaction.SHOW;
const NON_FRIENDS2 = ExplicitContentFilterTypes.NON_FRIENDS;
const valueOfResult2 = DISABLED2.valueOf();
obj[NON_FRIENDS2.valueOf()] = fn(1187).ExplicitContentRedaction.BLOCK;
const FRIENDS_AND_NON_FRIENDS2 = ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS;
const valueOfResult3 = NON_FRIENDS2.valueOf();
obj[FRIENDS_AND_NON_FRIENDS2.valueOf()] = fn(1187).ExplicitContentRedaction.BLOCK;
obj = {};
const DISABLED3 = ExplicitContentFilterTypes.DISABLED;
const valueOfResult4 = FRIENDS_AND_NON_FRIENDS2.valueOf();
obj[DISABLED3.valueOf()] = fn(1187).ExplicitContentRedaction.BLUR;
const NON_FRIENDS3 = ExplicitContentFilterTypes.NON_FRIENDS;
const valueOfResult5 = DISABLED3.valueOf();
obj[NON_FRIENDS3.valueOf()] = fn(1187).ExplicitContentRedaction.BLUR;
const FRIENDS_AND_NON_FRIENDS3 = ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS;
const valueOfResult6 = NON_FRIENDS3.valueOf();
obj[FRIENDS_AND_NON_FRIENDS3.valueOf()] = fn(1187).ExplicitContentRedaction.BLOCK;
const obj1 = {};
const DISABLED4 = ExplicitContentFilterTypes.DISABLED;
const valueOfResult7 = FRIENDS_AND_NON_FRIENDS3.valueOf();
obj1[DISABLED4.valueOf()] = fn(1187).ExplicitContentRedaction.BLUR;
const NON_FRIENDS4 = ExplicitContentFilterTypes.NON_FRIENDS;
const valueOfResult8 = DISABLED4.valueOf();
obj1[NON_FRIENDS4.valueOf()] = fn(1187).ExplicitContentRedaction.BLOCK;
const FRIENDS_AND_NON_FRIENDS4 = ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS;
const valueOfResult9 = NON_FRIENDS4.valueOf();
obj1[FRIENDS_AND_NON_FRIENDS4.valueOf()] = fn(1187).ExplicitContentRedaction.BLOCK;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx",
);

export const TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM = obj;
export const TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_NON_FRIEND_DM = obj1;
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
    const ExplicitContentFilter = tmp(1935).ExplicitContentFilter;
    const setting = ExplicitContentFilter.getSetting();
    if (flag2) {
      let tmp5 = obj[setting];
    } else {
      tmp5 = obj1[setting];
    }
    return tmp5;
  } else {
    return tmp(1187).ExplicitContentRedaction.BLUR;
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
  obj = {
    explicitContentGuilds: resolveExplicitContentSettingWithDefaults({ setting: prop }),
    explicitContentNonFriendDm: null,
    explicitContentFriendDm: null,
  };
  let prop1;
  if (setting != null) {
    prop1 = setting.explicitContentNonFriendDm;
  }
  obj.explicitContentNonFriendDm = resolveExplicitContentSettingWithDefaults({ setting: prop1, isDm: true });
  let prop2;
  if (setting != null) {
    prop2 = setting.explicitContentFriendDm;
  }
  obj.explicitContentFriendDm = resolveExplicitContentSettingWithDefaults({
    setting: prop2,
    isDm: true,
    isFriend: true,
  });
  return obj;
};
export const updateExplicitContentSetting = function updateExplicitContentSetting(arg0) {
  const ExplicitContentSettings = UserSettings.ExplicitContentSettings;
  const setting = ExplicitContentSettings.getSetting();
  let prop;
  if (setting != null) {
    prop = setting.explicitContentGuilds;
  }
  obj = {
    explicitContentGuilds: tmp4({ setting: prop }),
    explicitContentNonFriendDm: null,
    explicitContentFriendDm: null,
  };
  let prop1;
  if (setting != null) {
    prop1 = setting.explicitContentNonFriendDm;
  }
  obj.explicitContentNonFriendDm = resolveExplicitContentSettingWithDefaults({ setting: prop1, isDm: true });
  let prop2;
  if (setting != null) {
    prop2 = setting.explicitContentFriendDm;
  }
  obj.explicitContentFriendDm = resolveExplicitContentSettingWithDefaults({
    setting: prop2,
    isDm: true,
    isFriend: true,
  });
  const ExplicitContentSettings2 = UserSettings.ExplicitContentSettings;
  obj = {};
  const merged = Object.assign(obj);
  const merged1 = Object.assign(arg0);
  ExplicitContentSettings2.updateSetting(obj);
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
    let tmp10Result = tmp10(obj);
    if (setting != null) {
      prop1 = setting.explicitContentNonFriendDm;
    }
    obj = { setting: prop1, isDm: true };
    tmp10Result = tmp10(obj);
    let prop2;
    if (setting != null) {
      prop2 = setting.explicitContentFriendDm;
    }
    obj = { setting: prop2, isDm: true, isFriend: true };
    resolveExplicitContentSettingWithDefaults(obj);
    return SensitiveMediaRedactionSettingUtils.getShouldObscureForSetting(tmp10Result);
  }
};
