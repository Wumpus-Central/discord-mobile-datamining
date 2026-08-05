// discord_app/modules/user_settings/defs/native/UseDataToCustomizeDiscordSetting.tsx
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
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.MNKzyg);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToCustomizeDiscordSettingValue() {
    const items = [hasConsented];
    return initialize /* initialize */.useStateFromStores(items, () => hasConsented.hasConsented(constants.PERSONALIZATION));
  },
  onValueChange: function handlePersonalizationChange(arg0) {
    if (arg0) {
      let items = [Consents.PERSONALIZATION];
      const obj3 = handleRequestSuccess /* handleRequestSuccess */;
      handleRequestSuccess /* handleRequestSuccess */.setConsents(items, []).catch((message) => callback(14006).showDataPrivacyRateLimitAlert(message.message));
      const setConsentsResult = handleRequestSuccess /* handleRequestSuccess */.setConsents(items, []);
    } else {
      let obj = set;
      obj = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null };
      const intl = getSystemLocale /* getSystemLocale */.intl;
      obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t["9SNpzv"]);
      const intl2 = getSystemLocale /* getSystemLocale */.intl;
      obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.gJvDDh);
      const intl3 = getSystemLocale /* getSystemLocale */.intl;
      obj[2] = intl3.string(getSystemLocale /* getSystemLocale */.t["9g5UGw"]);
      const intl4 = getSystemLocale /* getSystemLocale */.intl;
      obj[3] = intl4.string(getSystemLocale /* getSystemLocale */.t["+ZLPw9"]);
      obj[4] = componentDidMount.Colors.RED;
      obj[5] = function onConfirm() {
        const items = [constants.PERSONALIZATION];
        return callback(14005).setConsents([], items);
      };
      obj.show(obj);
    }
  },
  useIsDisabled() {
    return useParentalControlledExplicitContentSettings /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/UseDataToCustomizeDiscordSetting.tsx");

export default createToggle;