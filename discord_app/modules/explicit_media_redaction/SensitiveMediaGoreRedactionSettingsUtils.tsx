// discord_app/modules/explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx
import create from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import explicitContentFromProto from "../user_settings/UserSettings.tsx";
import SettingsDefaultFeature from "../../../discord_common/js/shared/shared-constants/SettingsDefaultFeature.tsx";
import closure_2 from "../../../_runtime/00019_noop.js";
import closure_3 from "../../stores/UserStore.tsx";
import { HelpdeskArticles } from "../../Constants.tsx";

require = arg1;
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
    if (setting !== create.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION) {
      return setting;
    }
  }
  currentUser = currentUser.getCurrentUser();
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
        let BLUR2 = tmp4(1306).ExplicitContentRedaction.BLOCK;
      }
    }
    ExplicitContentRedaction = tmp4(1306).ExplicitContentRedaction;
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
        const ExplicitContentRedaction3 = tmp4(1306).ExplicitContentRedaction;
        let BLUR = flag5 ? ExplicitContentRedaction3.BLOCK : ExplicitContentRedaction3.BLUR;
      }
      BLUR = tmp4(1306).ExplicitContentRedaction.BLUR;
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
          let SHOW = tmp4(1306).ExplicitContentRedaction.SHOW;
        }
        return SHOW;
      }
      const ExplicitContentRedaction2 = tmp4(1306).ExplicitContentRedaction;
      SHOW = flag3 ? ExplicitContentRedaction2.BLOCK : ExplicitContentRedaction2.SHOW;
    }
  }
}
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx");

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
      let BLUR = create.ExplicitContentRedaction.BLUR;
    }
    return BLUR;
  }
  const ExplicitContentRedaction = create.ExplicitContentRedaction;
  BLUR = flag ? ExplicitContentRedaction.BLOCK : ExplicitContentRedaction.BLUR;
};
export const getGoreContentSettingOrDefault = function getGoreContentSettingOrDefault(arg0) {
  let setting = arg0;
  if (arg0 == null) {
    const GoreContentSettings = explicitContentFromProto.GoreContentSettings;
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
  obj[1] = resolveGoreSettingWithDefaults({ setting: prop, isDm: true });
  let goreContentFriendDm;
  if (setting != null) {
    goreContentFriendDm = setting.goreContentFriendDm;
  }
  obj[2] = resolveGoreSettingWithDefaults({ setting: goreContentFriendDm, isDm: true, isFriend: true });
  return obj;
};
export const updateGoreContentSetting = function updateGoreContentSetting(arg0) {
  const GoreContentSettings = explicitContentFromProto.GoreContentSettings;
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
  obj[1] = resolveGoreSettingWithDefaults({ setting: prop, isDm: true });
  let goreContentFriendDm;
  if (setting != null) {
    goreContentFriendDm = setting.goreContentFriendDm;
  }
  obj[2] = resolveGoreSettingWithDefaults({ setting: goreContentFriendDm, isDm: true, isFriend: true });
  const GoreContentSettings2 = explicitContentFromProto.GoreContentSettings;
  obj = {};
  const merged = Object.assign(obj);
  const merged1 = Object.assign(arg0);
  GoreContentSettings2.updateSetting(obj);
};
export const useSensitiveContentFilterHelpArticle = function useSensitiveContentFilterHelpArticle() {
  return React.useMemo(() => constants.EXPLICIT_MEDIA_REDACTION, []);
};