// discord_app/modules/user_settings/defs/native/ExplicitMediaFiltersNonFriendsDMsSetting.tsx
import { MobileSetting } from "MobileSetting";
import createToggle from "createToggle";

function useObscuredContentNonFriendsDmSettingValue() {
  const obj = require("../../../explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx") /* useExplicitContentSettingOrDefault */;
  return require("../../../explicit_media_redaction/ExplicitMediaRedactionUtils.tsx") /* redactionSettingToRenderedString */.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentNonFriendDm)();
}
function onObscuredContentNonFriendsDmOnPress() {
  let obj = require("../../../explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx") /* resolveExplicitContentSettingWithDefaults */;
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  const stringResult = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.GYpoAq);
  obj = { title: stringResult, subtitle: null, handlePress: null, currentValue: null };
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["Yh+HX1"]);
  obj[2] = function handlePress(explicitContentNonFriendDm) {
    let obj = callback(table[3]);
    obj = { explicitContentNonFriendDm };
    return obj.updateExplicitContentSetting(obj);
  };
  obj[3] = obj.getExplicitContentSettingOrDefault().explicitContentNonFriendDm;
  const result = require("../../../explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx") /* handleSensitiveMediaFilterPress */.handleSensitiveMediaFilterPress(obj);
}
const pressable = createToggle.createPressable({
  useTitle: function getTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["Yh+HX1"]);
  },
  parent() {
    return MobileSetting.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: useObscuredContentNonFriendsDmSettingValue,
  onPress: onObscuredContentNonFriendsDmOnPress,
  useSearchTerms: function getSearchTerms() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const items = [intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["N/oRI+"]), , ];
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    items[1] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.QVdYsK);
    const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    items[2] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["5mnTa7"]);
    return items;
  },
  useIsDisabled: require("useSensitiveMediaSettingDisabled").useSensitiveMediaSettingDisabled
});
let obj = {
  useTitle: function getTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["Yh+HX1"]);
  },
  parent() {
    return MobileSetting.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: useObscuredContentNonFriendsDmSettingValue,
  onPress: onObscuredContentNonFriendsDmOnPress,
  useSearchTerms: function getSearchTerms() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const items = [intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["N/oRI+"]), , ];
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    items[1] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.QVdYsK);
    const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    items[2] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["5mnTa7"]);
    return items;
  },
  useIsDisabled: require("useSensitiveMediaSettingDisabled").useSensitiveMediaSettingDisabled
};
let result = require("redactionSettingToRenderedString").fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useObscuredContentNonFriendsDmSettingValue };
export { onObscuredContentNonFriendsDmOnPress };