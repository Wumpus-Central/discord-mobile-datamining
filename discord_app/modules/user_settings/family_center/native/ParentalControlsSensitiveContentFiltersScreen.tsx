// === Module 16282: ParentalControlsSensitiveContentFiltersScreen ===

// Module 16282 (ParentalControlsSensitiveContentFiltersScreen)
import util from "util" /* 1115 */;
import SettingBuilders from "SettingBuilders" /* 11805 */;
import SettingLayoutDefault from "SettingLayout" /* 15048 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(8319).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/ParentalControlsSensitiveContentFiltersScreen.tsx");

export default function UserSettingsSensitiveContentFilters() {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj3 = { label: null, settings: null, subLabel: null };
    const intl = util.intl;
    obj3.label = intl.string(util.t.GYpoAq);
    const items = [, ];
    ({ PARENTAL_CONTROLS_EXPLICIT_MEDIA_FILTERS_FRIENDS_DMS: arr[0], PARENTAL_CONTROLS_EXPLICIT_MEDIA_FILTERS_NON_FRIENDS_DMS: arr[1] } = MobileUserSettings);
    obj3.settings = items;
    const intl2 = util.intl;
    obj3.subLabel = intl2.string(util.t.Wnojv1);
    const items1 = [obj3, ];
    const obj4 = { label: null, settings: null, subLabel: null };
    const intl3 = util.intl;
    obj4.label = intl3.string(util.t["16/3Bi"]);
    const items2 = [, ];
    ({ PARENTAL_CONTROLS_GORE_MEDIA_FILTERS_FRIENDS_DMS: arr3[0], PARENTAL_CONTROLS_GORE_MEDIA_FILTERS_NON_FRIENDS_DMS: arr3[1] } = MobileUserSettings);
    obj4.settings = items2;
    const intl4 = util.intl;
    obj4.subLabel = intl4.string(util.t.XgH9eh);
    items1[1] = obj4;
    obj2.sections = items1;
    return SettingBuilders.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
};