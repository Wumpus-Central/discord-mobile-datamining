// === Module 17547: EncryptionSetting ===

// Module 17547 (EncryptionSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import useSecureFramesVerifiedUsers from "useSecureFramesVerifiedUsers" /* 17548 */;
import SecureFramesPersistedStore from "SecureFramesPersistedStore" /* 5861 */;

require = fn;
const SettingBuilders = fn(11962);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.x8U2eC);
  },
  useDescription: function useSecureFramesEncryptionDescription() {
    const secureFramesVerifiedUserIds = useSecureFramesVerifiedUsers.useSecureFramesVerifiedUserIds();
    const intl = util.intl;
    return intl.formatToPlainString(util.t["6vrePS"], { count: secureFramesVerifiedUserIds.length });
  },
  parent: fn(9555).MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate: function useSecureFramesPersistentCodesValue() {
    items = [SecureFramesPersistedStore];
    return initialize.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
  },
  screen: {
    route: fn(1071).UserSettingsSections.SECURE_FRAMES,
    getComponent() {
      return require("SettingsSecureFramesScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EncryptionSetting.tsx");

export default route;
export const SecureFramesEncryptionSetting = route;