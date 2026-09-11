// === Module 15541: SettingsWebBrowserScreen ===

// Module 15541 (SettingsWebBrowserScreen)
import SettingBuilders from "SettingBuilders" /* 11562 */;
import SettingLayoutDefault from "SettingLayout" /* 14741 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(8049).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/web_browser/native/SettingsWebBrowserScreen.tsx");

export default noop.memo(function SettingsWebBrowserScreen() {
  const node = noop.useMemo(() => {
    let obj = { sections: null };
    obj = { settings: null };
    const items = [constants.SELECT_WEB_BROWSER];
    obj.settings = items;
    const items1 = [obj];
    obj.sections = items1;
    return obj.createList(obj);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});