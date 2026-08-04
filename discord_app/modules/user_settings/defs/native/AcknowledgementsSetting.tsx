import { MarketingURLs } from "ME";
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["0nUKy3"]);
  },
  parent: null,
  IconComponent: require("CircleInformationIcon").CircleInformationIcon,
  onPress: function handleAcknowledgementsSettingPress() {
    importDefault(3982).openURL(MarketingURLs.ACKNOWLEDGEMENTS);
  },
  withArrow: true
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["0nUKy3"]);
  },
  parent: null,
  IconComponent: require("CircleInformationIcon").CircleInformationIcon,
  onPress: function handleAcknowledgementsSettingPress() {
    importDefault(3982).openURL(MarketingURLs.ACKNOWLEDGEMENTS);
  },
  withArrow: true
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AcknowledgementsSetting.tsx");

export default pressable;