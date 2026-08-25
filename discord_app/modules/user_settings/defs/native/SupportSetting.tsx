// === Module 14938: pressable ===

// Module 14938 (pressable)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 10309 */;
import _emailSupport from "_emailSupport" /* 14939 */;
import createToggle from "createToggle" /* 10516 */;

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