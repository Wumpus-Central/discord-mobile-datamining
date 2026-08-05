// discord_app/modules/user_settings/defs/native/EncryptionSetting.tsx
import items from "items";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.x8U2eC);
  },
  useDescription: function useSecureFramesEncryptionDescription() {
    let obj = require("../../../rtc/hooks/useSecureFramesVerifiedUsers.tsx") /* useSecureFramesVerifiedUserIds */;
    const secureFramesVerifiedUserIds = obj.useSecureFramesVerifiedUserIds();
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { count: secureFramesVerifiedUserIds.length };
    return intl.formatToPlainString(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["6vrePS"], obj);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  usePredicate: function useSecureFramesPersistentCodesValue() {
    const items = [items];
    return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.SECURE_FRAMES,
  getComponent() {
    return require("../../privacy_and_safety/native/SettingsSecureFramesScreen.tsx") /* UserListItem */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/EncryptionSetting.tsx");

export default createToggle;
export const SecureFramesEncryptionSetting = createToggle;