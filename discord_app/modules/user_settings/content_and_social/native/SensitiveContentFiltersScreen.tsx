// === Module 14636: SensitiveContentFiltersScreen ===

// Module 14636 (SensitiveContentFiltersScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7645 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import SettingLayoutDefault from "SettingLayout" /* 14515 */;
import SettingsScreenNotices from "SettingsScreenNotices" /* 14637 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const SettingsScreenNoticesDefault = SettingsScreenNotices;

function getContentCategory() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items2;
  const obj = { label: intl.string(intl5.t.GYpoAq), settings: items, subLabel: intl2.string(intl5.t.Wnojv1) };
  intl = intl5.intl;
  items = [, , ];
  ({ EXPLICIT_MEDIA_FILTERS_FRIENDS_DMS: arr[0], EXPLICIT_MEDIA_FILTERS_NON_FRIENDS_DMS: arr[1], EXPLICIT_MEDIA_FILTERS_GUILDS: arr[2] } = MobileUserSettings);
  intl2 = intl5.intl;
  const items1 = [obj, ];
  const obj2 = { label: intl3.string(intl5.t["16/3Bi"]), settings: items2, subLabel: intl4.string(intl5.t.XgH9eh) };
  intl3 = intl5.intl;
  items2 = [, , ];
  ({ GORE_MEDIA_FILTERS_FRIENDS_DMS: arr3[0], GORE_MEDIA_FILTERS_NON_FRIENDS_DMS: arr3[1], GORE_MEDIA_FILTERS_GUILDS: arr3[2] } = MobileUserSettings);
  intl4 = intl5.intl;
  items1[1] = obj2;
  return items1;
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const ListHeaderComponent = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    SettingsScreenNoticesDefault;
    const tmp8 = <tmp7 isListHeader screen={SettingsScreenNotices.SettingsScreen.SENSITIVE_CONTENT_FILTERS} />;
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  SettingsScreenNoticesDefault;
  return <tmp isListHeader screen={SettingsScreenNotices.SettingsScreen.SENSITIVE_CONTENT_FILTERS} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items;
  let tmp12;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { sections: items, ListHeaderComponent };
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
    const tmp15 = jsx(SettingLayoutDefault, { node: first });
    cResult[1] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[1];
  }
  return tmp12;
}) : (() => {
  const node = react.useMemo(() => {
    let items;
    const obj2 = { sections: items, ListHeaderComponent };
    items = [...closure_1_6()];
    const obj = SettingBuilders;
    return obj.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersScreen.tsx");

export default tmp2;