// === Module 15881: EncryptionSetting ===

// Module 15881 (EncryptionSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import useSecureFramesVerifiedUsers from "useSecureFramesVerifiedUsers" /* 15882 */;
import SecureFramesPersistedStore from "SecureFramesPersistedStore" /* 9183 */;

require = fn;
fn(11500);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.x8U2eC);
  },
  useDescription: function useSecureFramesEncryptionDescription() {
    let obj = useSecureFramesVerifiedUsers;
    const secureFramesVerifiedUserIds = obj.useSecureFramesVerifiedUserIds();
    const intl = util.intl;
    obj = { count: secureFramesVerifiedUserIds.length };
    return intl.formatToPlainString(util.t["6vrePS"], obj);
  },
  parent: fn(7989).MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate: function useSecureFramesPersistentCodesValue() {
    const items = [SecureFramesPersistedStore];
    return initialize.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
  },
  screen: {
    route: fn(1074).UserSettingsSections.SECURE_FRAMES,
    getComponent() {
      return require("SettingsSecureFramesScreen").default;
    }
  }
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EncryptionSetting.tsx");

export default SettingBuilders;
export const SecureFramesEncryptionSetting = SettingBuilders;