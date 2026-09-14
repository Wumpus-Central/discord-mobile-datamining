// === Module 15564: SettingsWebBrowserScreen ===

// Module 15564 (SettingsWebBrowserScreen)
import SettingBuilders from "SettingBuilders" /* 11602 */;
import SettingLayoutDefault from "SettingLayout" /* 14776 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(8079).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/web_browser/native/SettingsWebBrowserScreen.tsx");

export default noop.memo(function SettingsWebBrowserScreen() {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj3 = { settings: null };
    const items = [constants.SELECT_WEB_BROWSER];
    obj3.settings = items;
    const items1 = [obj3];
    obj2.sections = items1;
    return SettingBuilders.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});