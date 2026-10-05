// discord_app/modules/explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx
import Constants from "../../Constants.tsx";
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import RegionalFeatureConfigUtils from "../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import SettingsDefaultFeature from "../../../discord_common/js/shared/shared-constants/SettingsDefaultFeature.tsx";
import react from "../../../_runtime/00019_react.js";
import UserStore from "../../stores/UserStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

function resolveGoreSettingWithDefaults(isFriend) {
  let SHOW;
  let isDm;
  let setting;
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
  const obj = RegionalFeatureConfigUtils;
  if (obj.isSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.SENSITIVE_CONTENT)) {
    if (isDm === undefined) {
      isDm = false;
    }
    if (flag === undefined) {
      flag = false;
    }
    if (isDm) {
      let BLUR2;
      if (!flag) {
        BLUR2 = preloaded_user_settings.ExplicitContentRedaction.BLOCK;
      }
      SHOW = BLUR2;
    }
    BLUR2 = preloaded_user_settings.ExplicitContentRedaction.BLUR;
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
      if (flag5) {
        let BLUR;
        if (flag6) {
          BLUR = preloaded_user_settings.ExplicitContentRedaction.BLUR;
        }
        SHOW = BLUR;
      }
      const ExplicitContentRedaction2 = preloaded_user_settings.ExplicitContentRedaction;
      BLUR = flag5 ? ExplicitContentRedaction2.BLOCK : ExplicitContentRedaction2.BLUR;
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
          SHOW = preloaded_user_settings.ExplicitContentRedaction.SHOW;
        }
      }
      const ExplicitContentRedaction = preloaded_user_settings.ExplicitContentRedaction;
      SHOW = flag3 ? ExplicitContentRedaction.BLOCK : ExplicitContentRedaction.SHOW;
    }
  }
  return SHOW;
}
const HelpdeskArticles = Constants.HelpdeskArticles;
function resolveGoreSettingWithDefaultsForTeen(isDm) {
  let flag = isDm.isDm;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isDm.isFriend;
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (flag) {
    let BLUR;
    if (flag2) {
      BLUR = preloaded_user_settings.ExplicitContentRedaction.BLUR;
    }
    return BLUR;
  }
  const ExplicitContentRedaction = preloaded_user_settings.ExplicitContentRedaction;
  BLUR = flag ? ExplicitContentRedaction.BLOCK : ExplicitContentRedaction.BLUR;
}
function getGoreContentSettingOrDefault(arg0) {
  let goreContentFriendDm;
  let prop;
  let setting = arg0;
  if (arg0 == null) {
    const GoreContentSettings = UserSettings.GoreContentSettings;
    setting = GoreContentSettings.getSetting();
  }
  let goreContentGuilds;
  if (setting != null) {
    goreContentGuilds = setting.goreContentGuilds;
  }
  const obj = {
    goreContentGuilds: resolveGoreSettingWithDefaults({ setting: goreContentGuilds }),
    goreContentNonFriendDm: resolveGoreSettingWithDefaults({ setting: prop, isDm: true }),
    goreContentFriendDm: resolveGoreSettingWithDefaults({ setting: goreContentFriendDm, isDm: true, isFriend: true }),
  };
  prop = undefined;
  if (setting != null) {
    prop = setting.goreContentNonFriendDm;
  }
  goreContentFriendDm = undefined;
  if (setting != null) {
    goreContentFriendDm = setting.goreContentFriendDm;
  }
  return obj;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => HelpdeskArticles.EXPLICIT_MEDIA_REDACTION
  : () => react.useMemo(() => constants.EXPLICIT_MEDIA_REDACTION, []);
const result = size.fileFinishedImporting(
  "modules/explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx",
);

export { resolveGoreSettingWithDefaults };
export { resolveGoreSettingWithDefaultsForTeen };
export { getGoreContentSettingOrDefault };
export const updateGoreContentSetting = function updateGoreContentSetting(arg0) {
  let goreContentFriendDm;
  let prop;
  const GoreContentSettings = UserSettings.GoreContentSettings;
  const setting = GoreContentSettings.getSetting();
  let goreContentGuilds;
  if (setting != null) {
    goreContentGuilds = setting.goreContentGuilds;
  }
  const obj = {
    goreContentGuilds: resolveGoreSettingWithDefaults({ setting: goreContentGuilds }),
    goreContentNonFriendDm: resolveGoreSettingWithDefaults({ setting: prop, isDm: true }),
    goreContentFriendDm: resolveGoreSettingWithDefaults({ setting: goreContentFriendDm, isDm: true, isFriend: true }),
  };
  prop = undefined;
  if (setting != null) {
    prop = setting.goreContentNonFriendDm;
  }
  goreContentFriendDm = undefined;
  if (setting != null) {
    goreContentFriendDm = setting.goreContentFriendDm;
  }
  const GoreContentSettings2 = UserSettings.GoreContentSettings;
  const updateSetting = GoreContentSettings2.updateSetting;
  const obj2 = {};
  const merged = Object.assign(obj);
  const merged1 = Object.assign(arg0);
  updateSetting(obj2);
};
export const useSensitiveContentFilterHelpArticle = tmp2;
