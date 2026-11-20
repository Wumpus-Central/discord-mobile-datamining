// discord_app/modules/explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import RegionalFeatureConfigUtils from "../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import SettingsDefaultFeature from "../../../discord_common/js/shared/shared-constants/SettingsDefaultFeature.tsx";
import AgeVerificationUtils from "../age_assurance/AgeVerificationUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import UserStore from "../../stores/UserStore.tsx";

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
    if (!tmp4Result.isVerifiedAdult()) {
      let flag2 = isDm;
      if (isDm === undefined) {
        flag2 = false;
      }
      let flag3 = flag;
      if (flag === undefined) {
        flag3 = false;
      }
      if (flag2) {
        if (!flag3) {
          let BLUR = preloaded_user_settings.ExplicitContentRedaction.BLOCK;
        }
        return BLUR;
      }
      BLUR = preloaded_user_settings.ExplicitContentRedaction.BLUR;
    }
    tmp4Result = AgeVerificationUtils;
  }
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  if (false !== nsfwAllowed) {
    let flag4 = isDm;
    if (isDm === undefined) {
      flag4 = false;
    }
    let flag5 = flag;
    if (flag === undefined) {
      flag5 = false;
    }
    if (flag4) {
      if (flag5) {
        let SHOW = preloaded_user_settings.ExplicitContentRedaction.SHOW;
      }
    }
    const ExplicitContentRedaction2 = preloaded_user_settings.ExplicitContentRedaction;
    SHOW = flag4 ? ExplicitContentRedaction2.BLOCK : ExplicitContentRedaction2.SHOW;
  }
  if (isDm === undefined) {
    isDm = false;
  }
  if (flag === undefined) {
    flag = false;
  }
  if (!isDm) {
    const ExplicitContentRedaction3 = preloaded_user_settings.ExplicitContentRedaction;
    let BLUR2 = isDm ? ExplicitContentRedaction3.BLOCK : ExplicitContentRedaction3.BLUR;
  }
  ExplicitContentRedaction = preloaded_user_settings.ExplicitContentRedaction;
  BLUR2 = ExplicitContentRedaction.BLUR;
  obj = RegionalFeatureConfigUtils;
}
const HelpdeskArticles = fn(1071).HelpdeskArticles;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx",
);

export { resolveGoreSettingWithDefaults };
export function resolveGoreSettingWithDefaultsForTeen(isDm) {
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
}
export function getGoreContentSettingOrDefault(arg0) {
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
    goreContentNonFriendDm: null,
    goreContentFriendDm: null,
  };
  let prop;
  if (setting != null) {
    prop = setting.goreContentNonFriendDm;
  }
  obj.goreContentNonFriendDm = resolveGoreSettingWithDefaults({ setting: prop, isDm: true });
  let goreContentFriendDm;
  if (setting != null) {
    goreContentFriendDm = setting.goreContentFriendDm;
  }
  obj.goreContentFriendDm = resolveGoreSettingWithDefaults({
    setting: goreContentFriendDm,
    isDm: true,
    isFriend: true,
  });
  return obj;
}
export function updateGoreContentSetting(arg0) {
  const GoreContentSettings = UserSettings.GoreContentSettings;
  const setting = GoreContentSettings.getSetting();
  let goreContentGuilds;
  if (setting != null) {
    goreContentGuilds = setting.goreContentGuilds;
  }
  const obj = {
    goreContentGuilds: resolveGoreSettingWithDefaults({ setting: goreContentGuilds }),
    goreContentNonFriendDm: null,
    goreContentFriendDm: null,
  };
  let prop;
  if (setting != null) {
    prop = setting.goreContentNonFriendDm;
  }
  obj.goreContentNonFriendDm = resolveGoreSettingWithDefaults({ setting: prop, isDm: true });
  let goreContentFriendDm;
  if (setting != null) {
    goreContentFriendDm = setting.goreContentFriendDm;
  }
  obj.goreContentFriendDm = resolveGoreSettingWithDefaults({
    setting: goreContentFriendDm,
    isDm: true,
    isFriend: true,
  });
  const GoreContentSettings2 = UserSettings.GoreContentSettings;
  const merged = Object.assign(obj);
  const merged1 = Object.assign(arg0);
  GoreContentSettings2.updateSetting({});
  const obj2 = {};
}
export function useSensitiveContentFilterHelpArticle() {
  return noop.useMemo(() => constants.EXPLICIT_MEDIA_REDACTION, []);
}
