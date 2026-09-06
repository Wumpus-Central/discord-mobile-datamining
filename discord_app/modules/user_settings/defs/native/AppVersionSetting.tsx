// === Module 15556: AppVersionSetting ===

// Module 15556 (AppVersionSetting)
import util from "util" /* 1114 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 15557 */;
import ClientInfoUtils from "ClientInfoUtils" /* 1364 */;

require = fn;
const constants = ClientInfoUtils.getConstants();
const SettingBuilders = fn(11468);
let obj = {
  useTitle: function useAppVersionSettingTitle() {
    const intl = util.intl;
    return intl.string(util.t.H66MEk);
  },
  parent: null,
  IconComponent: fn(10818).ClydeIcon,
  useTrailing: function useAppVersionSettingTrailing() {
    const clientInfoString = CopyClientInfoSetting.getClientInfoString(closure_3.ReleaseChannel);
    const obj2 = CopyClientInfoSetting;
    const clientInfoString1 = obj2.getClientInfoString(ClientInfoUtils.getBuildNumberLabel());
    const hasItem = clientInfoString1.includes("dev");
    const clientInfoString2 = CopyClientInfoSetting.getClientInfoString(closure_3.Version);
    if (hasItem) {
      let combined = concat(clientInfoString2, " (", clientInfoString, ")");
    } else {
      combined = concat(clientInfoString2, " (", clientInfoString1, ") - ", clientInfoString);
    }
    return combined;
  },
  usePredicate: fn(1935).DeveloperMode.useSetting
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AppVersionSetting.tsx");

export default SettingBuilders.createStatic({
  useTitle: function useAppVersionSettingTitle() {
    const intl = util.intl;
    return intl.string(util.t.H66MEk);
  },
  parent: null,
  IconComponent: fn(10818).ClydeIcon,
  useTrailing: function useAppVersionSettingTrailing() {
    const clientInfoString = CopyClientInfoSetting.getClientInfoString(closure_3.ReleaseChannel);
    const obj2 = CopyClientInfoSetting;
    const clientInfoString1 = obj2.getClientInfoString(ClientInfoUtils.getBuildNumberLabel());
    const hasItem = clientInfoString1.includes("dev");
    const clientInfoString2 = CopyClientInfoSetting.getClientInfoString(closure_3.Version);
    if (hasItem) {
      let combined = concat(clientInfoString2, " (", clientInfoString, ")");
    } else {
      combined = concat(clientInfoString2, " (", clientInfoString1, ") - ", clientInfoString);
    }
    return combined;
  },
  usePredicate: fn(1935).DeveloperMode.useSetting
});