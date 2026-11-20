// === Module 16830: SupportSetting ===

// Module 16830 (SupportSetting)
import util from "util" /* 1112 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 9329 */;
import SupportUtils from "SupportUtils" /* 16831 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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