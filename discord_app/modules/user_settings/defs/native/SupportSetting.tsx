// === Module 16894: SupportSetting ===

// Module 16894 (SupportSetting)
import util from "util" /* 1128 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 13963 */;
import SupportUtils from "SupportUtils" /* 16895 */;
import SettingBuilders from "SettingBuilders" /* 11208 */;
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