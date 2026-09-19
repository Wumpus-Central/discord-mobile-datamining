// === Module 15805: SupportSetting ===

// Module 15805 (SupportSetting)
import util from "util" /* 1115 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 11371 */;
import SupportUtils from "SupportUtils" /* 15806 */;
import SettingBuilders from "SettingBuilders" /* 11723 */;
import size from "module_2" /* 2 */;

const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["Yl/Riu"]);
  },
  parent: null,
  IconComponent: CircleQuestionIcon.CircleQuestionIcon,
  onPress: SupportUtils.emailSupport,
  withArrow: true
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SupportSetting.tsx");

export default pressable;