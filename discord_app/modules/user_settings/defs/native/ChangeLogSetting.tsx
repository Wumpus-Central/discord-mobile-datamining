// discord_app/modules/user_settings/defs/native/ChangeLogSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import CircleInformationIcon from "../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import ChangeLogScreen from "../../../../components_native/ChangeLogModal.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const obj = {
  route: ME.UserSettingsSections.CHANGE_LOG,
  getComponent() {
    return ChangeLogScreen.ChangeLogScreen;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/ChangeLogSetting.tsx");

export default route;