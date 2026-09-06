// discord_app/modules/user_settings/defs/native/AgeGroupResetSetting.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import util from "../../../../intl/index.native.tsx";
import _modDef2946 from "../../../age_assurance/AgeAssurance.messages.js";
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps.tsx";
import SettingsAgeGroupResetAlert from "../../age_group/native/SettingsAgeGroupResetAlert.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2946["bD//cU"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2946.Gn0SAj);
  },
  onPress() {
    useAlertStore.openAlert(
      SettingsAgeGroupResetAlert.SETTINGS_AGE_GROUP_RESET_ALERT_ID,
      jsx(SettingsAgeGroupResetAlert.default, {}),
    );
  },
  withArrow: true,
  usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow,
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupResetSetting.tsx");

export default pressable;
