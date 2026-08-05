// discord_app/modules/user_settings/defs/native/GoreMediaFiltersNonFriendsDMsSetting.tsx
import createToggle from "createToggle";

function useGoreContentNonFriendsDmSettingValue() {
  const obj = require("../../../explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx") /* useExplicitContentSettingOrDefault */;
  return require("../../../explicit_media_redaction/ExplicitMediaRedactionUtils.tsx") /* redactionSettingToRenderedString */.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentNonFriendDm)();
}
function onGoreContentNonFriendsDmOnPress() {
  let obj = require("../../../explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx") /* resolveGoreSettingWithDefaults */;
  obj = { title: null, subtitle: null, handlePress: null, currentValue: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["16/3Bi"]);
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["Yh+HX1"]);
  obj[2] = function handlePress(goreContentNonFriendDm) {
    let obj = callback(table[3]);
    obj = { goreContentNonFriendDm };
    return obj.updateGoreContentSetting(obj);
  };
  obj[3] = obj.getGoreContentSettingOrDefault().goreContentNonFriendDm;
  const result = require("../../../explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx") /* handleSensitiveMediaFilterPress */.handleSensitiveMediaFilterPress(obj);
}
const pressable = createToggle.createPressable({
  useTitle: function getTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["Yh+HX1"]);
  },
  parent: require("MobileSetting").MobileSetting.SENSITIVE_CONTENT_FILTERS,
  useTrailing: useGoreContentNonFriendsDmSettingValue,
  onPress: onGoreContentNonFriendsDmOnPress,
  useSearchTerms() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const items = [intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["N/oRI+"]), , ];
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    items[1] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.QVdYsK);
    const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    items[2] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["K0OWP+"]);
    return items;
  },
  useIsDisabled: require("useSensitiveMediaSettingDisabled").useSensitiveMediaSettingDisabled
});
let obj = {
  useTitle: function getTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["Yh+HX1"]);
  },
  parent: require("MobileSetting").MobileSetting.SENSITIVE_CONTENT_FILTERS,
  useTrailing: useGoreContentNonFriendsDmSettingValue,
  onPress: onGoreContentNonFriendsDmOnPress,
  useSearchTerms() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const items = [intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["N/oRI+"]), , ];
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    items[1] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.QVdYsK);
    const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    items[2] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["K0OWP+"]);
    return items;
  },
  useIsDisabled: require("useSensitiveMediaSettingDisabled").useSensitiveMediaSettingDisabled
};
let result = require("redactionSettingToRenderedString").fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useGoreContentNonFriendsDmSettingValue };
export { onGoreContentNonFriendsDmOnPress };