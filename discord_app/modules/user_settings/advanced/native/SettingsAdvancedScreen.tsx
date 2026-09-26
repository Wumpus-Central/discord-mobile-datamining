// === Module 15083: SettingsAdvancedScreen ===

// Module 15083 (SettingsAdvancedScreen)
import util from "util" /* 1115 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import SettingLayoutDefault from "SettingLayout" /* 14248 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(7417).MobileUserSettings;
const MarketingURLs = fn(1074).MarketingURLs;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/advanced/native/SettingsAdvancedScreen.tsx");

export default noop.memo(() => {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj3 = { label: null, settings: null, subLabel: null };
    const intl = util.intl;
    obj3.label = intl.string(util.t["+U02+i"]);
    const items = [constants.DEVELOPER_MODE];
    obj3.settings = items;
    const intl2 = util.intl;
    obj3.subLabel = intl2.format(util.t["CY6q/Q"], { apiDocsUrl: constants2.API_DOCS });
    const items1 = [obj3, , , ];
    const obj5 = { settings: null, subLabel: null };
    const items2 = [constants.LAUNCHPAD];
    obj5.settings = items2;
    const intl3 = util.intl;
    obj5.subLabel = intl3.string(util.t.gI2GEL);
    items1[1] = obj5;
    const obj6 = { settings: null };
    const items3 = [constants.CHANNEL_LIST_LAYOUT];
    obj6.settings = items3;
    items1[2] = obj6;
    const obj7 = { label: null, settings: null };
    const intl4 = util.intl;
    obj7.label = intl4.string(util.t["jnXV/V"]);
    const items4 = [constants.ICYMI_TAB];
    obj7.settings = items4;
    items1[3] = obj7;
    obj2.sections = items1;
    return SettingBuilders.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});