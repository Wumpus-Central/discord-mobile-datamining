// === Module 18211: SupportSetting ===

// Module 18211 (SupportSetting)
import util from "util" /* 1113 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 10072 */;
import SupportUtils from "SupportUtils" /* 18212 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
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