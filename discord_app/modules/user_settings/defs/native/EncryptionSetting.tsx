// === Module 18030: EncryptionSetting ===

// Module 18030 (EncryptionSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import useSecureFramesVerifiedUsers from "useSecureFramesVerifiedUsers" /* 18031 */;
import SecureFramesPersistedStore from "SecureFramesPersistedStore" /* 5902 */;

require = fn;
const SettingBuilders = fn(11677);
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
  parent: fn(8556).MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate: function useSecureFramesPersistentCodesValue() {
    items = [SecureFramesPersistedStore];
    return initialize.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
  },
  screen: {
    route: fn(1072).UserSettingsSections.SECURE_FRAMES,
    getComponent() {
      return require("SettingsSecureFramesScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EncryptionSetting.tsx");

export default route;
export const SecureFramesEncryptionSetting = route;