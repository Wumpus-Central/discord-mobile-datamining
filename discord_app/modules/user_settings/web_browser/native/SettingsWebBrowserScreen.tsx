// === Module 15746: SettingsWebBrowserScreen ===

// Module 15746 (SettingsWebBrowserScreen)
import SettingBuilders from "SettingBuilders" /* 11723 */;
import SettingLayoutDefault from "SettingLayout" /* 14958 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(8232).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/web_browser/native/SettingsWebBrowserScreen.tsx");

export default noop.memo(function SettingsWebBrowserScreen() {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj3 = { settings: null };
    const items = [constants.SELECT_WEB_BROWSER];
    obj3.settings = items;
    const items1 = [obj3, ];
    const obj4 = { settings: null };
    const items2 = [constants.CLEAR_WEB_BROWSER_DATA];
    obj4.settings = items2;
    items1[1] = obj4;
    obj2.sections = items1;
    return SettingBuilders.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});