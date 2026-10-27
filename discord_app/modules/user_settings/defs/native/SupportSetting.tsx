// === Module 16937: SupportSetting ===

// Module 16937 (SupportSetting)
import util from "util" /* 1125 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 13979 */;
import SupportUtils from "SupportUtils" /* 16938 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
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