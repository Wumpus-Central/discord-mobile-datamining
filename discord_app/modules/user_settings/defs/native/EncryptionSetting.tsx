// === Module 14990: route ===

// Module 14990 (route)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useSecureFramesVerifiedUserIds from "useSecureFramesVerifiedUserIds" /* 14991 */;
import items from "items" /* 9709 */;
import createToggle from "createToggle" /* 10669 */;

require = fn;
{
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.x8U2eC);
  },
  useDescription: function useSecureFramesEncryptionDescription() {
    let obj = useSecureFramesVerifiedUserIds;
    const secureFramesVerifiedUserIds = obj.useSecureFramesVerifiedUserIds();
    const intl = getSystemLocale.intl;
    obj = { count: secureFramesVerifiedUserIds.length };
    return intl.formatToPlainString(getSystemLocale.t["6vrePS"], obj);
  },
  parent: require("MobileUserSettings").MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate: function useSecureFramesPersistentCodesValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.SECURE_FRAMES,
  getComponent() {
    return require(14992) /* UserListItem */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/EncryptionSetting.tsx");

export default createToggle;
export const SecureFramesEncryptionSetting = createToggle;