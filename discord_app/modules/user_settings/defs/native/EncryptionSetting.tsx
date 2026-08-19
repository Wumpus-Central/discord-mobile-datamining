// discord_app/modules/user_settings/defs/native/EncryptionSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import useSecureFramesVerifiedUserIds from "../../../rtc/hooks/useSecureFramesVerifiedUsers.tsx";
import items from "../../../rtc/SecureFramesPersistedStore.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { UserListItem } from "../../privacy_and_safety/native/SettingsSecureFramesScreen.tsx";

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
    return UserListItem /* UserListItem */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/EncryptionSetting.tsx");

export default createToggle;
export const SecureFramesEncryptionSetting = createToggle;