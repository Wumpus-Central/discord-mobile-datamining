// discord_app/modules/user_settings/defs/native/UseDataToImproveDiscordSetting.tsx
import hasConsented from "hasConsented";
import { Consents } from "ME";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.XuADY2);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToImproveDiscordSettingValue() {
    const items = [hasConsented];
    return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => hasConsented.hasConsented(constants.USAGE_STATISTICS));
  },
  onValueChange: function handleUsageStatisticsChange(arg0) {
    if (arg0) {
      let items = [Consents.USAGE_STATISTICS];
      const obj3 = require("../../../../actions/ConsentActionCreators.tsx") /* handleRequestSuccess */;
      require("../../../../actions/ConsentActionCreators.tsx") /* handleRequestSuccess */.setConsents(items, []).catch((message) => callback(14006).showDataPrivacyRateLimitAlert(message.message));
      const setConsentsResult = require("../../../../actions/ConsentActionCreators.tsx") /* handleRequestSuccess */.setConsents(items, []);
    } else {
      let obj = require("../../../../actions/AlertActionCreators.tsx");
      obj = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null };
      const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
      obj[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.OdPCbN);
      const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
      obj[1] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.MGWabA);
      const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
      obj[2] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["D3+rU4"]);
      const intl4 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
      obj[3] = intl4.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.kYpG0u);
      obj[4] = require("../../../../components_native/common/Alert.tsx").Colors.RED;
      obj[5] = function onConfirm() {
        const items = [constants.USAGE_STATISTICS];
        return callback(14005).setConsents([], items);
      };
      obj.show(obj);
    }
  },
  useIsDisabled() {
    return require("../../../parent_tools/hooks/useParentalControlSettings.tsx") /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/UseDataToImproveDiscordSetting.tsx");

export default createToggle;