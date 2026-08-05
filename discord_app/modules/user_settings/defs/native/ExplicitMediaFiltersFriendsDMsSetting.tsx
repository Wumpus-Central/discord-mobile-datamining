import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { redactionSettingToRenderedString } from "../../../explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import { useExplicitContentSettingOrDefault } from "../../../explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx";
import { handleSensitiveMediaFilterPress } from "../../../explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx";
import { resolveExplicitContentSettingWithDefaults } from "../../../explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx";
// discord_app/modules/user_settings/defs/native/ExplicitMediaFiltersFriendsDMsSetting.tsx
import { MobileSetting } from "MobileSetting";
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle: function getTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["+uI23H"]);
  },
  parent() {
    return MobileSetting.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: function useObscuredContentFriendsDmSettingValue() {
    const obj = useExplicitContentSettingOrDefault /* useExplicitContentSettingOrDefault */;
    return redactionSettingToRenderedString /* redactionSettingToRenderedString */.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentFriendDm)();
  },
  onPress: function onObscuredContentFriendsDmOnPress() {
    let obj = resolveExplicitContentSettingWithDefaults /* resolveExplicitContentSettingWithDefaults */;
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const stringResult = intl.string(getSystemLocale /* getSystemLocale */.t.GYpoAq);
    obj = { title: stringResult, subtitle: null, handlePress: null, currentValue: null };
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t["+uI23H"]);
    obj[2] = function handlePress(explicitContentFriendDm) {
      let obj = callback(table[3]);
      obj = { explicitContentFriendDm };
      return obj.updateExplicitContentSetting(obj);
    };
    obj[3] = obj.getExplicitContentSettingOrDefault().explicitContentFriendDm;
    const result = handleSensitiveMediaFilterPress /* handleSensitiveMediaFilterPress */.handleSensitiveMediaFilterPress(obj);
  },
  useSearchTerms: function getSearchTerms() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const items = [intl.string(getSystemLocale /* getSystemLocale */.t["N/oRI+"]), , ];
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    items[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.QVdYsK);
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    items[2] = intl3.string(getSystemLocale /* getSystemLocale */.t["5mnTa7"]);
    return items;
  },
  useIsDisabled: require("useSensitiveMediaSettingDisabled").useSensitiveMediaSettingDisabled
});
let obj = {
  useTitle: function getTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["+uI23H"]);
  },
  parent() {
    return MobileSetting.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: function useObscuredContentFriendsDmSettingValue() {
    const obj = useExplicitContentSettingOrDefault /* useExplicitContentSettingOrDefault */;
    return redactionSettingToRenderedString /* redactionSettingToRenderedString */.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentFriendDm)();
  },
  onPress: function onObscuredContentFriendsDmOnPress() {
    let obj = resolveExplicitContentSettingWithDefaults /* resolveExplicitContentSettingWithDefaults */;
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const stringResult = intl.string(getSystemLocale /* getSystemLocale */.t.GYpoAq);
    obj = { title: stringResult, subtitle: null, handlePress: null, currentValue: null };
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t["+uI23H"]);
    obj[2] = function handlePress(explicitContentFriendDm) {
      let obj = callback(table[3]);
      obj = { explicitContentFriendDm };
      return obj.updateExplicitContentSetting(obj);
    };
    obj[3] = obj.getExplicitContentSettingOrDefault().explicitContentFriendDm;
    const result = handleSensitiveMediaFilterPress /* handleSensitiveMediaFilterPress */.handleSensitiveMediaFilterPress(obj);
  },
  useSearchTerms: function getSearchTerms() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const items = [intl.string(getSystemLocale /* getSystemLocale */.t["N/oRI+"]), , ];
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    items[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.QVdYsK);
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    items[2] = intl3.string(getSystemLocale /* getSystemLocale */.t["5mnTa7"]);
    return items;
  },
  useIsDisabled: require("useSensitiveMediaSettingDisabled").useSensitiveMediaSettingDisabled
};
let result = require("redactionSettingToRenderedString").fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersFriendsDMsSetting.tsx");

export default pressable;