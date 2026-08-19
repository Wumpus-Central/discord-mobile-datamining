// === Module 14848: pressable ===

// Module 14848 (pressable)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _modDef4090 from "module_4090" /* 4090 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4330 */;
import createToggle from "createToggle" /* 10669 */;

const MarketingURLs = ME.MarketingURLs;
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["0nUKy3"]);
  },
  parent: null,
  IconComponent: CircleInformationIcon.CircleInformationIcon,
  onPress: function handleAcknowledgementsSettingPress() {
    _modDef4090.openURL(MarketingURLs.ACKNOWLEDGEMENTS);
  },
  withArrow: true
});
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AcknowledgementsSetting.tsx");

export default pressable;