// === Module 15003: toggle ===

// Module 15003 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import saveGuildFoldersDefault from "saveGuildFolders" /* 8159 */;
import closure_2 from "initialize" /* 1303 */;
import createToggle from "createToggle" /* 11006 */;

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