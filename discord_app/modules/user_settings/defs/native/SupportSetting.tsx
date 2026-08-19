// discord_app/modules/user_settings/defs/native/SupportSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import CircleQuestionIcon from "../../../../design/components/Icon/native/redesign/generated/CircleQuestionIcon.tsx";
import _emailSupport from "../../../../utils/native/SupportUtils.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

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