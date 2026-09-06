// === Module 7301: SensitiveMediaGoreRedactionSettingsUtils ===

// Module 7301 (SensitiveMediaGoreRedactionSettingsUtils)
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import UserSettings from "UserSettings" /* 1935 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 7299 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function resolveGoreSettingWithDefaults(isFriend) {
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
        const ExplicitContentRedaction3 = tmp4(1187).ExplicitContentRedaction;
        let BLUR = flag5 ? ExplicitContentRedaction3.BLOCK : ExplicitContentRedaction3.BLUR;
      }
      BLUR = tmp4(1187).ExplicitContentRedaction.BLUR;
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
        if (flag4) {
          let SHOW = tmp4(1187).ExplicitContentRedaction.SHOW;
        }
        return SHOW;
      }
      const ExplicitContentRedaction2 = tmp4(1187).ExplicitContentRedaction;
      SHOW = flag3 ? ExplicitContentRedaction2.BLOCK : ExplicitContentRedaction2.SHOW;
    }
  }
}
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const size = fn(2);
const result = size.fileFinishedImporting("modules/explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx");

export { resolveGoreSettingWithDefaults };
export const resolveGoreSettingWithDefaultsForTeen = function resolveGoreSettingWithDefaultsForTeen(isDm) {
  let flag = isDm.isDm;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isDm.isFriend;
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (flag) {
    if (flag2) {
      let BLUR = preloaded_user_settings.ExplicitContentRedaction.BLUR;
    }
    return BLUR;
  }
  const ExplicitContentRedaction = preloaded_user_settings.ExplicitContentRedaction;
  BLUR = flag ? ExplicitContentRedaction.BLOCK : ExplicitContentRedaction.BLUR;
};
export const getGoreContentSettingOrDefault = function getGoreContentSettingOrDefault(arg0) {
  let setting = arg0;
  if (arg0 == null) {
    const GoreContentSettings = UserSettings.GoreContentSettings;
    setting = GoreContentSettings.getSetting();
  }
  let goreContentGuilds;
  if (setting != null) {
    goreContentGuilds = setting.goreContentGuilds;
  }
  const obj = { goreContentGuilds: resolveGoreSettingWithDefaults({ setting: goreContentGuilds }), goreContentNonFriendDm: null, goreContentFriendDm: null };
  let prop;
  if (setting != null) {
    prop = setting.goreContentNonFriendDm;
  }
  obj.goreContentNonFriendDm = resolveGoreSettingWithDefaults({ setting: prop, isDm: true });
  let goreContentFriendDm;
  if (setting != null) {
    goreContentFriendDm = setting.goreContentFriendDm;
  }
  obj.goreContentFriendDm = resolveGoreSettingWithDefaults({ setting: goreContentFriendDm, isDm: true, isFriend: true });
  return obj;
};
export const updateGoreContentSetting = function updateGoreContentSetting(arg0) {
  const GoreContentSettings = UserSettings.GoreContentSettings;
  const setting = GoreContentSettings.getSetting();
  let goreContentGuilds;
  if (setting != null) {
    goreContentGuilds = setting.goreContentGuilds;
  }
  let obj = { goreContentGuilds: tmp4({ setting: goreContentGuilds }), goreContentNonFriendDm: null, goreContentFriendDm: null };
  let prop;
  if (setting != null) {
    prop = setting.goreContentNonFriendDm;
  }
  obj.goreContentNonFriendDm = resolveGoreSettingWithDefaults({ setting: prop, isDm: true });
  let goreContentFriendDm;
  if (setting != null) {
    goreContentFriendDm = setting.goreContentFriendDm;
  }
  obj.goreContentFriendDm = resolveGoreSettingWithDefaults({ setting: goreContentFriendDm, isDm: true, isFriend: true });
  const GoreContentSettings2 = UserSettings.GoreContentSettings;
  obj = {};
  const merged = Object.assign(obj);
  const merged1 = Object.assign(arg0);
  GoreContentSettings2.updateSetting(obj);
};
export const useSensitiveContentFilterHelpArticle = function useSensitiveContentFilterHelpArticle() {
  return noop.useMemo(() => constants.EXPLICIT_MEDIA_REDACTION, []);
};