// === Module 14844: pressable ===

// Module 14844 (pressable)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 10415 */;
import _emailSupport from "_emailSupport" /* 14845 */;
import createToggle from "createToggle" /* 10669 */;

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Yl/Riu"]);
  },
  parent: null,
  IconComponent: CircleQuestionIcon.CircleQuestionIcon,
  onPress: _emailSupport.emailSupport,
  withArrow: true
});
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/SupportSetting.tsx");

export default pressable;