// discord_app/modules/user_settings/defs/native/UseDataToImproveDiscordSetting.tsx
import hasConsented from "hasConsented";
import { Consents } from "ME";
import createToggle from "createToggle";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { set } from "../../../../actions/AlertActionCreators.tsx";
import { handleRequestSuccess } from "../../../../actions/ConsentActionCreators.tsx";
import { componentDidMount } from "../../../../components_native/common/Alert.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { useParentalControlledExplicitContentSettings } from "../../../parent_tools/hooks/useParentalControlSettings.tsx";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.XuADY2);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToImproveDiscordSettingValue() {
    const items = [hasConsented];
    return initialize.useStateFromStores(items, () => hasConsented.hasConsented(constants.USAGE_STATISTICS));
  },
  onValueChange: function handleUsageStatisticsChange(arg0) {
    if (arg0) {
      let items = [Consents.USAGE_STATISTICS];
      const obj3 = handleRequestSuccess;
      handleRequestSuccess.setConsents(items, []).catch((message) => callback(14181).showDataPrivacyRateLimitAlert(message.message));
      const setConsentsResult = handleRequestSuccess.setConsents(items, []);
    } else {
      let obj = set;
      obj = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null };
      const intl = getSystemLocale.intl;
      obj[0] = intl.string(getSystemLocale.t.OdPCbN);
      const intl2 = getSystemLocale.intl;
      obj[1] = intl2.string(getSystemLocale.t.MGWabA);
      const intl3 = getSystemLocale.intl;
      obj[2] = intl3.string(getSystemLocale.t["D3+rU4"]);
      const intl4 = getSystemLocale.intl;
      obj[3] = intl4.string(getSystemLocale.t.kYpG0u);
      obj[4] = componentDidMount.Colors.RED;
      obj[5] = function onConfirm() {
        const items = [constants.USAGE_STATISTICS];
        return callback(14180).setConsents([], items);
      };
      obj.show(obj);
    }
  },
  useIsDisabled() {
    return useParentalControlledExplicitContentSettings.useIsParentallyControlled();
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/UseDataToImproveDiscordSetting.tsx");

export default createToggle;