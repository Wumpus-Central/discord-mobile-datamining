// discord_app/modules/user_settings/defs/native/SecureFramesPersistentCodesSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import savePersistentCodesEnabledDefault from "../../../rtc/SecureFramesActionCreators.tsx";
import closure_3 from "../../../rtc/SecureFramesPersistedStore.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["opi/XK"]);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.opw5ls);
  },
  parent: require("MobileUserSettings").MobileUserSettings.DATA_AND_PRIVACY,
  useValue: function useSecureFramesPersistentCodesValue() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
  },
  onValueChange: function handleSecureFramesPersistentCodesToggle(arg0) {
    const result = savePersistentCodesEnabledDefault.updatePersistentCodesEnabled(arg0);
  },
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting(
  "modules/user_settings/defs/native/SecureFramesPersistentCodesSetting.tsx",
);

export default createToggle;
export const DataAndPrivacySecureFramesPersistentCodesSetting = createToggle;
