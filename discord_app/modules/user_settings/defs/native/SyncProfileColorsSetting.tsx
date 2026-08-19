// === Module 14722: toggle ===

// Module 14722 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import "createToggle";

require = fn;
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["sSY+mD"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue: function useProfileColorsSettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => obj.syncProfileThemeWithUserTheme);
  },
  onValueChange: require("setFontSize").toggleSyncProfileThemeWithUserTheme
};
createToggle = createToggle.createToggle(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/SyncProfileColorsSetting.tsx");

export default createToggle;