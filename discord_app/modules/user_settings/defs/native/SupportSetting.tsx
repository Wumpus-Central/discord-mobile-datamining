// === Module 15599: SupportSetting ===

// Module 15599 (SupportSetting)
import util from "util" /* 1114 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 11200 */;
import SupportUtils from "SupportUtils" /* 15600 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
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