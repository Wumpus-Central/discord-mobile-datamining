// === Module 14211: toggle ===

// Module 14211 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import componentDidMountDefault from "componentDidMount" /* 4763 */;
import obj132Default from "obj132" /* 4827 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14181 */;
import handleRequestSuccess from "handleRequestSuccess" /* 14212 */;
import hasConsented from "hasConsented" /* 5258 */;
import { Consents } from "ME" /* 676 */;
import "createToggle";

require = fn;
let createToggle = {
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
      handleRequestSuccess.setConsents(items, []).catch((error) => callback(14213).showDataPrivacyRateLimitAlert(error.message));
      const setConsentsResult = handleRequestSuccess.setConsents(items, []);
    } else {
      const obj = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null };
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
        return callback(14212).setConsents([], items);
      };
      obj.show(obj);
    }
  },
  useIsDisabled() {
    return useParentalControlledExplicitContentSettings.useIsParentallyControlled();
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/UseDataToImproveDiscordSetting.tsx");

export default createToggle;