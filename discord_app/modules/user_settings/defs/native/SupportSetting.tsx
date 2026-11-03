// === Module 17676: SupportSetting ===

// Module 17676 (SupportSetting)
import util from "util" /* 1113 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 14647 */;
import SupportUtils from "SupportUtils" /* 17677 */;
import SettingBuilders from "SettingBuilders" /* 11677 */;
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