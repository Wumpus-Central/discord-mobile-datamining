// === Module 15089: ? ===

// Module 15089
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getClientInfo from "getClientInfo" /* 15090 */;
import createToggle from "createToggle" /* 11006 */;
import importAllResult from "getConstants" /* 1626 */;

require = arg1;
const constants = importAllResult.getConstants();
let obj = {
  useTitle: function useAppVersionSettingTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.H66MEk);
  },
  parent: null,
  IconComponent: require("ClydeIcon").ClydeIcon,
  useTrailing: function useAppVersionSettingTrailing() {
    const clientInfoString = getClientInfo.getClientInfoString(closure_3.ReleaseChannel);
    const obj = getClientInfo;
    const obj2 = getClientInfo;
    const clientInfoString1 = obj2.getClientInfoString(importAllResult.getBuildNumberLabel());
    const hasItem = clientInfoString1.includes("dev");
    const obj3 = importAllResult;
    const clientInfoString2 = getClientInfo.getClientInfoString(closure_3.Version);
    if (hasItem) {
      let combined = concat(clientInfoString2, " (", clientInfoString, ")");
    } else {
      combined = concat(clientInfoString2, " (", clientInfoString1, ") - ", clientInfoString);
    }
    return combined;
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
};
const createStaticResult = createToggle.createStatic({
  useTitle: function useAppVersionSettingTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.H66MEk);
  },
  parent: null,
  IconComponent: require("ClydeIcon").ClydeIcon,
  useTrailing: function useAppVersionSettingTrailing() {
    const clientInfoString = getClientInfo.getClientInfoString(closure_3.ReleaseChannel);
    const obj = getClientInfo;
    const obj2 = getClientInfo;
    const clientInfoString1 = obj2.getClientInfoString(importAllResult.getBuildNumberLabel());
    const hasItem = clientInfoString1.includes("dev");
    const obj3 = importAllResult;
    const clientInfoString2 = getClientInfo.getClientInfoString(closure_3.Version);
    if (hasItem) {
      let combined = concat(clientInfoString2, " (", clientInfoString, ")");
    } else {
      combined = concat(clientInfoString2, " (", clientInfoString1, ") - ", clientInfoString);
    }
    return combined;
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
});
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AppVersionSetting.tsx");

export default createStaticResult;