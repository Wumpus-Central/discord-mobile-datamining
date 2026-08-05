import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { redactionSettingToRenderedString } from "../../../explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import { useExplicitContentSettingOrDefault } from "../../../explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx";
import { handleSensitiveMediaFilterPress } from "../../../explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx";
import { resolveGoreSettingWithDefaults } from "../../../explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx";
// discord_app/modules/user_settings/defs/native/GoreMediaFiltersFriendsDMsSetting.tsx
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle: function getTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["+uI23H"]);
  },
  parent: require("MobileSetting").MobileSetting.SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentFriendsDmSettingValue() {
    const obj = useExplicitContentSettingOrDefault /* useExplicitContentSettingOrDefault */;
    return redactionSettingToRenderedString /* redactionSettingToRenderedString */.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentFriendDm)();
  },
  onPress: function onGoreContentFriendsDmOnPress() {
    let obj = resolveGoreSettingWithDefaults /* resolveGoreSettingWithDefaults */;
    obj = { title: null, subtitle: null, handlePress: null, currentValue: null };
    const intl = getSystemLocale /* getSystemLocale */.intl;
    obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t["16/3Bi"]);
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t["+uI23H"]);
    obj[2] = function handlePress(goreContentFriendDm) {
      let obj = callback(table[3]);
      obj = { goreContentFriendDm };
      return obj.updateGoreContentSetting(obj);
    };
    obj[3] = obj.getGoreContentSettingOrDefault().goreContentFriendDm;
    const result = handleSensitiveMediaFilterPress /* handleSensitiveMediaFilterPress */.handleSensitiveMediaFilterPress(obj);
  },
  useSearchTerms() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const items = [intl.string(getSystemLocale /* getSystemLocale */.t["N/oRI+"]), , ];
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    items[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.QVdYsK);
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    items[2] = intl3.string(getSystemLocale /* getSystemLocale */.t["K0OWP+"]);
    return items;
  },
  useIsDisabled: require("useSensitiveMediaSettingDisabled").useSensitiveMediaSettingDisabled
});
let obj = {
  useTitle: function getTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["+uI23H"]);
  },
  parent: require("MobileSetting").MobileSetting.SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentFriendsDmSettingValue() {
    const obj = useExplicitContentSettingOrDefault /* useExplicitContentSettingOrDefault */;
    return redactionSettingToRenderedString /* redactionSettingToRenderedString */.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentFriendDm)();
  },
  onPress: function onGoreContentFriendsDmOnPress() {
    let obj = resolveGoreSettingWithDefaults /* resolveGoreSettingWithDefaults */;
    obj = { title: null, subtitle: null, handlePress: null, currentValue: null };
    const intl = getSystemLocale /* getSystemLocale */.intl;
    obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t["16/3Bi"]);
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t["+uI23H"]);
    obj[2] = function handlePress(goreContentFriendDm) {
      let obj = callback(table[3]);
      obj = { goreContentFriendDm };
      return obj.updateGoreContentSetting(obj);
    };
    obj[3] = obj.getGoreContentSettingOrDefault().goreContentFriendDm;
    const result = handleSensitiveMediaFilterPress /* handleSensitiveMediaFilterPress */.handleSensitiveMediaFilterPress(obj);
  },
  useSearchTerms() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const items = [intl.string(getSystemLocale /* getSystemLocale */.t["N/oRI+"]), , ];
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    items[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.QVdYsK);
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    items[2] = intl3.string(getSystemLocale /* getSystemLocale */.t["K0OWP+"]);
    return items;
  },
  useIsDisabled: require("useSensitiveMediaSettingDisabled").useSensitiveMediaSettingDisabled
};
let result = require("redactionSettingToRenderedString").fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersFriendsDMsSetting.tsx");

export default pressable;