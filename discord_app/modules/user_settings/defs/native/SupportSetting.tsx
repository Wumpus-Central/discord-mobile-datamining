// === Module 15067: pressable ===

// Module 15067 (pressable)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 10792 */;
import _emailSupport from "_emailSupport" /* 15068 */;
import createToggle from "createToggle" /* 11006 */;

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
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Yl/Riu"]);
  },
  parent: null,
  IconComponent: CircleQuestionIcon.CircleQuestionIcon,
  onPress: _emailSupport.emailSupport,
  withArrow: true
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/SupportSetting.tsx");

export default pressable;