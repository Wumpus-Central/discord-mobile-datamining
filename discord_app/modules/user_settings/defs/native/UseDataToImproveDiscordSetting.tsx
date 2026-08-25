// === Module 14309: toggle ===

// Module 14309 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import setDefault from "set" /* 4744 */;
import componentDidMountDefault from "componentDidMount" /* 4833 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14279 */;
import handleRequestSuccess from "handleRequestSuccess" /* 14310 */;
import closure_3 from "hasConsented" /* 5935 */;
import { Consents } from "ME" /* 676 */;
import createToggle from "createToggle" /* 10516 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.XuADY2);
  },
  parent: require("MobileUserSettings").MobileUserSettings.DATA_AND_PRIVACY,
  useValue: function useDataToImproveDiscordSettingValue() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => closure_3.hasConsented(constants.USAGE_STATISTICS));
  },
  onValueChange: function handleUsageStatisticsChange(arg0) {
    if (arg0) {
      let items = [Consents.USAGE_STATISTICS];
      const obj3 = handleRequestSuccess;
      handleRequestSuccess.setConsents(items, []).catch((message) => callback(14311).showDataPrivacyRateLimitAlert(message.message));
      const setConsentsResult = handleRequestSuccess.setConsents(items, []);
    } else {
      let obj = setDefault;
      obj = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null };
      const intl = getSystemLocale.intl;
      obj[0] = intl.string(getSystemLocale.t.OdPCbN);
      const intl2 = getSystemLocale.intl;
      obj[1] = intl2.string(getSystemLocale.t.MGWabA);
      const intl3 = getSystemLocale.intl;
      obj[2] = intl3.string(getSystemLocale.t["D3+rU4"]);
      const intl4 = getSystemLocale.intl;
      obj[3] = intl4.string(getSystemLocale.t.kYpG0u);
      obj[4] = componentDidMountDefault.Colors.RED;
      obj[5] = function onConfirm() {
        const items = [constants.USAGE_STATISTICS];
        return callback(14310).setConsents([], items);
      };
      obj.show(obj);
    }
  },
  useIsDisabled() {
    return useParentalControlledExplicitContentSettings.useIsParentallyControlled();
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/UseDataToImproveDiscordSetting.tsx");

export default createToggle;