// discord_app/modules/user_settings/defs/native/SupportSetting.tsx
import util from "../../../../intl/index.native.tsx";
import CircleQuestionIcon from "../../../../design/components/Icon/native/redesign/generated/CircleQuestionIcon.tsx";
import SupportUtils from "../../../../utils/native/SupportUtils.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["Yl/Riu"]);
  },
  parent: null,
  IconComponent: CircleQuestionIcon.CircleQuestionIcon,
  onPress: SupportUtils.emailSupport,
  withArrow: true,
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SupportSetting.tsx");

export default pressable;
