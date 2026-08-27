// === Module 14369: UserSettingsSensitiveContentFilters ===

// Module 14369 (UserSettingsSensitiveContentFilters)
import _modDef14194 from "module_14194" /* 14194 */;
import items3 from "items" /* 14370 */;
import itemsDefault from "items" /* 14370 */;
import closure_3 from "noop" /* 19 */;
import { MobileUserSettings } from "MobileUserSettings" /* 7816 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
const result = require("set").fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersScreen.tsx");

export default function UserSettingsSensitiveContentFilters() {
  let obj = { children: null };
  const memo = React.useMemo(() => {
    let obj = callback(10988);
    obj = { sections: null };
    obj = { label: null, settings: null, subLabel: null };
    const intl = callback(1236).intl;
    obj[0] = intl.string(callback(1236).t.GYpoAq);
    const items = [, , ];
    ({ EXPLICIT_MEDIA_FILTERS_FRIENDS_DMS: arr[0], EXPLICIT_MEDIA_FILTERS_NON_FRIENDS_DMS: arr[1], EXPLICIT_MEDIA_FILTERS_GUILDS: arr[2] } = closure_4);
    obj[1] = items;
    const intl2 = callback(1236).intl;
    obj[2] = intl2.string(callback(1236).t.Wnojv1);
    const items1 = [obj, ];
    obj1 = { label: null, settings: null, subLabel: null };
    const intl3 = callback(1236).intl;
    obj1[0] = intl3.string(callback(1236).t["16/3Bi"]);
    const items2 = [, , ];
    ({ GORE_MEDIA_FILTERS_FRIENDS_DMS: arr3[0], GORE_MEDIA_FILTERS_NON_FRIENDS_DMS: arr3[1], GORE_MEDIA_FILTERS_GUILDS: arr3[2] } = closure_4);
    obj1[1] = items2;
    const intl4 = callback(1236).intl;
    obj1[2] = intl4.string(callback(1236).t.XgH9eh);
    items1[1] = obj1;
    obj[0] = items1;
    return obj.createList(obj);
  }, []);
  obj = { screen: items3.SettingsScreen.SENSITIVE_CONTENT_FILTERS };
  let items = [callback(itemsDefault, obj), callback(_modDef14194, { node: memo })];
  obj[0] = items;
  return callback2(closure_6, obj);
};