// === Module 17680: AcknowledgementsSetting ===

// Module 17680 (AcknowledgementsSetting)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import LinkingDefault from "Linking" /* 5829 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5855 */;
import SettingBuilders from "SettingBuilders" /* 11677 */;
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