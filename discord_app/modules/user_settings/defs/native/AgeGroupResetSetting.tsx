// discord_app/modules/user_settings/defs/native/AgeGroupResetSetting.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import intl2 from "../../../../intl/index.native.tsx";
import _modDef3045 from "../../../age_assurance/AgeAssurance.messages.js";
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps.tsx";
import SettingsAgeGroupResetAlert from "../../age_group/native/SettingsAgeGroupResetAlert.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3045["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3045.Gn0SAj);
  },
  onPress() {
    SettingsAgeGroupResetAlert.default;
    const openAlert = useAlertStore.openAlert;
    useAlertStore;
    openAlert(SettingsAgeGroupResetAlert.SETTINGS_AGE_GROUP_RESET_ALERT_ID, <_default />);
  },
  withArrow: true,
  usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow,
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupResetSetting.tsx");

export default pressable;
