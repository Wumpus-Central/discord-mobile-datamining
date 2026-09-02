// === Module 15368: pressable ===

// Module 15368 (pressable)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import _modDef4190 from "module_4190" /* 4190 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4433 */;
import createToggle from "createToggle" /* 11288 */;

const MarketingURLs = ME.MarketingURLs;
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["0nUKy3"]);
  },
  parent: null,
  IconComponent: CircleInformationIcon.CircleInformationIcon,
  onPress: function handleAcknowledgementsSettingPress() {
    _modDef4190.openURL(MarketingURLs.ACKNOWLEDGEMENTS);
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
    _modDef4190.openURL(MarketingURLs.ACKNOWLEDGEMENTS);
  },
  withArrow: true
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AcknowledgementsSetting.tsx");

export default pressable;