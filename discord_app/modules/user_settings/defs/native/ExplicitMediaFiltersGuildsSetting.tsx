// discord_app/modules/user_settings/defs/native/ExplicitMediaFiltersGuildsSetting.tsx
import { MobileSetting } from "MobileSetting";
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle: function getTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["FP+a42"]);
  },
  parent() {
    return MobileSetting.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: function useObscuredContentGuildsSettingValue() {
    const obj = require("../../../explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx") /* useExplicitContentSettingOrDefault */;
    return require("../../../explicit_media_redaction/ExplicitMediaRedactionUtils.tsx") /* redactionSettingToRenderedString */.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentGuilds)();
  },
  onPress: function onObscuredContentGuildsOnPress() {
    let obj = require("../../../explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx") /* resolveExplicitContentSettingWithDefaults */;
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const stringResult = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.GYpoAq);
    obj = { title: stringResult, subtitle: null, handlePress: null, excluded: null, currentValue: null };
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[1] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["FP+a42"]);
    obj[2] = function handlePress(explicitContentGuilds) {
      let obj = callback(table[5]);
      obj = { explicitContentGuilds };
      return obj.updateExplicitContentSetting(obj);
    };
    const items = [require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ExplicitContentRedaction.BLOCK];
    obj[3] = items;
    obj[4] = obj.getExplicitContentSettingOrDefault().explicitContentGuilds;
    const result = require("../../../explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx") /* handleSensitiveMediaFilterPress */.handleSensitiveMediaFilterPress(obj);
  },
  useSearchTerms: function getSearchTerms() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const items = [intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["N/oRI+"]), , ];
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    items[1] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.QVdYsK);
    const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    items[2] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["5mnTa7"]);
    return items;
  },
  useIsDisabled() {
    let userIsTeen = require("../../../self_mod/hooks/useUserIsTeen.tsx") /* useUserIsTeen */.useUserIsTeen();
    const obj = require("../../../self_mod/hooks/useUserIsTeen.tsx") /* useUserIsTeen */;
    if (!userIsTeen) {
      userIsTeen = obj2.useIsParentallyControlled();
    }
    return userIsTeen;
  }
});
let result = require("useParentalControlledExplicitContentSettings").fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersGuildsSetting.tsx");

export default pressable;