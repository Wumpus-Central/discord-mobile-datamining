// === Module 15298: toggle ===

// Module 15298 (toggle)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import saveGuildFoldersDefault from "saveGuildFolders" /* 8222 */;
import closure_2 from "initialize" /* 1302 */;
import createToggle from "createToggle" /* 11288 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["3340dY"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CHAT,
  useValue: function useTextAndMediaSyncSettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => closure_2.shouldSync("text"));
  },
  onValueChange: saveGuildFoldersDefault.setShouldSyncTextSettings
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/TextAndMediaSyncSetting.tsx");

export default createToggle;