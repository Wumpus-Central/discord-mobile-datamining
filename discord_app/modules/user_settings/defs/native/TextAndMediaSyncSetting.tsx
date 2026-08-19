// === Module 14779: toggle ===

// Module 14779 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import saveGuildFoldersDefault from "saveGuildFolders" /* 9365 */;
import "createToggle";

require = fn;
let createToggle = {
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
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/TextAndMediaSyncSetting.tsx");

export default createToggle;