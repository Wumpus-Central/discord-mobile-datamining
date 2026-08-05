// discord_app/modules/user_settings/defs/native/SecureFramesPersistentCodesSetting.tsx
import items from "items";
import createToggle from "createToggle";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { savePersistentCodesEnabled } from "../../../rtc/SecureFramesActionCreators.tsx";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["opi/XK"]);
  },
  useDescription() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.opw5ls);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: function useSecureFramesPersistentCodesValue() {
    const items = [items];
    return initialize /* initialize */.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
  },
  onValueChange: function handleSecureFramesPersistentCodesToggle(arg0) {
    const result = savePersistentCodesEnabled.updatePersistentCodesEnabled(arg0);
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/SecureFramesPersistentCodesSetting.tsx");

export default createToggle;
export const DataAndPrivacySecureFramesPersistentCodesSetting = createToggle;