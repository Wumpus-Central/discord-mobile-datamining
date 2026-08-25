// === Module 14942: pressable ===

// Module 14942 (pressable)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _modDef4094 from "module_4094" /* 4094 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4335 */;
import createToggle from "createToggle" /* 10516 */;

const MarketingURLs = ME.MarketingURLs;
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["0nUKy3"]);
  },
  parent: null,
  IconComponent: CircleInformationIcon.CircleInformationIcon,
  onPress: function handleAcknowledgementsSettingPress() {
    _modDef4094.openURL(MarketingURLs.ACKNOWLEDGEMENTS);
  },
  withArrow: true
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["0nUKy3"]);
  },
  parent: null,
  IconComponent: CircleInformationIcon.CircleInformationIcon,
  onPress: function handleAcknowledgementsSettingPress() {
    _modDef4094.openURL(MarketingURLs.ACKNOWLEDGEMENTS);
  },
  withArrow: true
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AcknowledgementsSetting.tsx");

export default pressable;