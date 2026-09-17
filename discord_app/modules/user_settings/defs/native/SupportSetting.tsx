// === Module 15655: SupportSetting ===

// Module 15655 (SupportSetting)
import util from "util" /* 1115 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 11266 */;
import SupportUtils from "SupportUtils" /* 15656 */;
import SettingBuilders from "SettingBuilders" /* 11622 */;
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