// === Module 15097: UserSettingsSensitiveContentFilters ===

// Module 15097 (UserSettingsSensitiveContentFilters)
import _modDef14059 from "module_14059" /* 14059 */;
import closure_3 from "noop" /* 19 */;
import { MobileUserSettings } from "MobileUserSettings" /* 8238 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/family_center/native/ParentalControlsSensitiveContentFiltersScreen.tsx");

export default function UserSettingsSensitiveContentFilters() {
  const node = React.useMemo(() => {
    let obj = callback(10708);
    obj = { sections: null };
    obj = { label: null, settings: null, subLabel: null };
    const intl = callback(1236).intl;
    obj[0] = intl.string(callback(1236).t.GYpoAq);
    const items = [, ];
    ({ PARENTAL_CONTROLS_EXPLICIT_MEDIA_FILTERS_FRIENDS_DMS: arr[0], PARENTAL_CONTROLS_EXPLICIT_MEDIA_FILTERS_NON_FRIENDS_DMS: arr[1] } = closure_4);
    obj[1] = items;
    const intl2 = callback(1236).intl;
    obj[2] = intl2.string(callback(1236).t.Wnojv1);
    const items1 = [obj, ];
    obj1 = { label: null, settings: null, subLabel: null };
    const intl3 = callback(1236).intl;
    obj1[0] = intl3.string(callback(1236).t["16/3Bi"]);
    const items2 = [, ];
    ({ PARENTAL_CONTROLS_GORE_MEDIA_FILTERS_FRIENDS_DMS: arr3[0], PARENTAL_CONTROLS_GORE_MEDIA_FILTERS_NON_FRIENDS_DMS: arr3[1] } = closure_4);
    obj1[1] = items2;
    const intl4 = callback(1236).intl;
    obj1[2] = intl4.string(callback(1236).t.XgH9eh);
    items1[1] = obj1;
    obj[0] = items1;
    return obj.createList(obj);
  }, []);
  return jsx(_modDef14059, { node });
};