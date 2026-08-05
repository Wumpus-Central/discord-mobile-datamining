import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { EmailVerificationModalActionCreators } from "../../../../actions/native/EmailVerificationModalActionCreators.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
// discord_app/modules/user_settings/defs/native/AccountEmailSetting.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["w/qqKK"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing: function useAccountEmailSettingTrailing() {
    const items = [mergeGuildAvatar];
    return initialize /* initialize */.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let email;
      if (currentUser != null) {
        email = currentUser.email;
      }
      return email;
    });
  },
  onPress: function onAccountEmailSettingPress() {
    EmailVerificationModalActionCreators.open(true);
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/AccountEmailSetting.tsx");

export default createToggle;