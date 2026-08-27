// === Module 15085: pressable ===

// Module 15085 (pressable)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _modDef4158 from "module_4158" /* 4158 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4400 */;
import createToggle from "createToggle" /* 10988 */;

const MarketingURLs = ME.MarketingURLs;
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["0nUKy3"]);
  },
  parent: null,
  IconComponent: CircleInformationIcon.CircleInformationIcon,
  onPress: function handleAcknowledgementsSettingPress() {
    _modDef4158.openURL(MarketingURLs.ACKNOWLEDGEMENTS);
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
    _modDef4158.openURL(MarketingURLs.ACKNOWLEDGEMENTS);
  },
  withArrow: true
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AcknowledgementsSetting.tsx");

export default pressable;