// discord_app/modules/user_settings/defs/native/DeviceInfoSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import DCDDeviceManager from "../../../../utils/native/DeviceUtils.tsx";
import getClientInfo from "CopyClientInfoSetting.tsx";
import MobilePhoneSettingsIcon from "../../../../design/components/Icon/native/redesign/generated/MobilePhoneSettingsIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const createStaticResult = createToggle.createStatic({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: MobilePhoneSettingsIcon.MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = getClientInfo;
    const clientInfoString = obj.getClientInfoString(DCDDeviceManager.getDeviceInfo());
    const obj3 = getClientInfo;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(DCDDeviceManager.getSystemVersion()) + ")";
  },
  usePredicate: explicitContentFromProto.DeveloperMode.useSetting
});
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/DeviceInfoSetting.tsx");

export default createStaticResult;