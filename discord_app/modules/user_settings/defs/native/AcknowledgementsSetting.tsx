// === Module 15367: AcknowledgementsSetting ===

// Module 15367 (AcknowledgementsSetting)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import LinkingDefault from "Linking" /* 4565 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4812 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const MarketingURLs = Constants.MarketingURLs;
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["0nUKy3"]);
  },
  parent: null,
  IconComponent: CircleInformationIcon.CircleInformationIcon,
  onPress: function handleAcknowledgementsSettingPress() {
    LinkingDefault.openURL(MarketingURLs.ACKNOWLEDGEMENTS);
  },
  withArrow: true
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AcknowledgementsSetting.tsx");

export default pressable;