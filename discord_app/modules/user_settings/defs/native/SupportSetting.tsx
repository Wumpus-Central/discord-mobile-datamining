// discord_app/modules/user_settings/defs/native/SupportSetting.tsx
import intl2 from "../../../../intl/index.native.tsx";
import CircleQuestionIcon from "../../../../design/components/Icon/native/redesign/generated/CircleQuestionIcon.tsx";
import SupportUtils from "../../../../utils/native/SupportUtils.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["Yl/Riu"]);
  },
  parent: null,
  IconComponent: CircleQuestionIcon.CircleQuestionIcon,
  onPress: SupportUtils.emailSupport,
  withArrow: true,
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SupportSetting.tsx");

export default pressable;
