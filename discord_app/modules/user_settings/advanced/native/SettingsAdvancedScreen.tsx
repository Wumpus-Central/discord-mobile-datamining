// === Module 15528: SettingsAdvancedScreen ===

// Module 15528 (SettingsAdvancedScreen)
import util from "util" /* 1114 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import SettingLayoutDefault from "SettingLayout" /* 14689 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(7975).MobileUserSettings;
const MarketingURLs = fn(1074).MarketingURLs;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/advanced/native/SettingsAdvancedScreen.tsx");

export default noop.memo(() => {
  const node = noop.useMemo(() => {
    let obj = { sections: null };
    obj = { label: null, settings: null, subLabel: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["+U02+i"]);
    const items = [constants.DEVELOPER_MODE];
    obj.settings = items;
    const intl2 = util.intl;
    obj.subLabel = intl2.format(util.t["CY6q/Q"], { apiDocsUrl: constants2.API_DOCS });
    const items1 = [obj, , , ];
    const obj2 = { settings: null, subLabel: null };
    const items2 = [constants.LAUNCHPAD];
    obj2.settings = items2;
    const intl3 = util.intl;
    obj2.subLabel = intl3.string(util.t.gI2GEL);
    items1[1] = obj2;
    const obj3 = { settings: null };
    const items3 = [constants.CHANNEL_LIST_LAYOUT];
    obj3.settings = items3;
    items1[2] = obj3;
    const obj4 = { label: null, settings: null };
    const intl4 = util.intl;
    obj4.label = intl4.string(util.t["jnXV/V"]);
    const items4 = [constants.ICYMI_TAB];
    obj4.settings = items4;
    items1[3] = obj4;
    obj.sections = items1;
    return obj.createList(obj);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});