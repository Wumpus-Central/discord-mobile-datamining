// === Module 17794: SettingsAdvancedScreen ===

// Module 17794 (SettingsAdvancedScreen)
import util from "util" /* 1113 */;
import SettingBuilders from "SettingBuilders" /* 11703 */;
import SettingLayoutDefault from "SettingLayout" /* 16846 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(8524).MobileUserSettings;
const MarketingURLs = fn(1072).MarketingURLs;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/advanced/native/SettingsAdvancedScreen.tsx");

export default noop.memo(function SettingsAdvancedScreen() {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj3 = { label: null, settings: null, subLabel: null };
    const intl = util.intl;
    obj3.label = intl.string(util.t["+U02+i"]);
    items = [constants.DEVELOPER_MODE];
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
    obj7.label = intl4.string(util.t.GwQs0C);
    const items4 = [constants.NATIVE_MARKDOWN];
    obj7.settings = items4;
    items1[3] = obj7;
    obj2.sections = items1;
    return SettingBuilders.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});