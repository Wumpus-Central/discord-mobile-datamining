// === Module 15802: ParentalControlsSensitiveContentFiltersScreen ===

// Module 15802 (ParentalControlsSensitiveContentFiltersScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import SettingLayoutDefault from "SettingLayout" /* 14499 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function getContentCategory() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items2;
  const obj = { label: intl.string(intl5.t.GYpoAq), settings: items, subLabel: intl2.string(intl5.t.Wnojv1) };
  intl = intl5.intl;
  items = [, ];
  ({ PARENTAL_CONTROLS_EXPLICIT_MEDIA_FILTERS_FRIENDS_DMS: arr[0], PARENTAL_CONTROLS_EXPLICIT_MEDIA_FILTERS_NON_FRIENDS_DMS: arr[1] } = MobileUserSettings);
  intl2 = intl5.intl;
  const items1 = [obj, ];
  const obj2 = { label: intl3.string(intl5.t["16/3Bi"]), settings: items2, subLabel: intl4.string(intl5.t.XgH9eh) };
  intl3 = intl5.intl;
  items2 = [, ];
  ({ PARENTAL_CONTROLS_GORE_MEDIA_FILTERS_FRIENDS_DMS: arr3[0], PARENTAL_CONTROLS_GORE_MEDIA_FILTERS_NON_FRIENDS_DMS: arr3[1] } = MobileUserSettings);
  intl4 = intl5.intl;
  items1[1] = obj2;
  return items1;
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items;
  let tmp11;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { sections: items };
    const createList = SettingBuilders.createList;
    items = [];
    SettingBuilders;
    HermesBuiltin.arraySpread(items, getContentCategory(), 0);
    const list = createList(obj2);
    cResult[0] = list;
    first = list;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp14 = jsx(SettingLayoutDefault, { node: first });
    cResult[1] = tmp14;
    tmp11 = tmp14;
  } else {
    tmp11 = cResult[1];
  }
  return tmp11;
}) : (() => {
  const node = react.useMemo(() => {
    let items;
    const obj2 = { sections: items };
    items = [...closure_1_6()];
    const obj = SettingBuilders;
    return obj.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/ParentalControlsSensitiveContentFiltersScreen.tsx");

export default tmp2;