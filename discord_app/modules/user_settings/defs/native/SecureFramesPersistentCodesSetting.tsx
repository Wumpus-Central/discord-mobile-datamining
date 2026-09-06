// discord_app/modules/user_settings/defs/native/SecureFramesPersistentCodesSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import SecureFramesActionCreatorsDefault from "../../../rtc/SecureFramesActionCreators.tsx";
import SecureFramesPersistedStore from "../../../rtc/SecureFramesPersistedStore.tsx";

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["opi/XK"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.opw5ls);
  },
  parent: fn(7975).MobileUserSettings.DATA_AND_PRIVACY,
  useValue: function useSecureFramesPersistentCodesValue() {
    const items = [SecureFramesPersistedStore];
    return initialize.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
  },
  onValueChange: function handleSecureFramesPersistentCodesToggle(arg0) {
    const result = SecureFramesActionCreatorsDefault.updatePersistentCodesEnabled(arg0);
  },
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SecureFramesPersistentCodesSetting.tsx");

export default SettingBuilders;
export const DataAndPrivacySecureFramesPersistentCodesSetting = SettingBuilders;
