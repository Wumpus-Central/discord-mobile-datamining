// === Module 16214: ParentalControlsSensitiveContentFiltersScreen ===

// Module 16214 (ParentalControlsSensitiveContentFiltersScreen)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import SettingLayoutDefault from "SettingLayout" /* 14883 */;
import noop from "module_19" /* 19 */;

require = fn;
function getContentCategory() {
  const obj = { label: null, settings: null, subLabel: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.GYpoAq);
  const items = [, ];
  ({ PARENTAL_CONTROLS_EXPLICIT_MEDIA_FILTERS_FRIENDS_DMS: arr[0], PARENTAL_CONTROLS_EXPLICIT_MEDIA_FILTERS_NON_FRIENDS_DMS: arr[1] } = MobileUserSettings);
  obj.settings = items;
  const intl2 = util.intl;
  obj.subLabel = intl2.string(util.t.Wnojv1);
  const items1 = [obj, ];
  const obj2 = { label: null, settings: null, subLabel: null };
  const intl3 = util.intl;
  obj2.label = intl3.string(util.t["16/3Bi"]);
  const items2 = [, ];
  ({ PARENTAL_CONTROLS_GORE_MEDIA_FILTERS_FRIENDS_DMS: arr3[0], PARENTAL_CONTROLS_GORE_MEDIA_FILTERS_NON_FRIENDS_DMS: arr3[1] } = MobileUserSettings);
  obj2.settings = items2;
  const intl4 = util.intl;
  obj2.subLabel = intl4.string(util.t.XgH9eh);
  items1[1] = obj2;
  return items1;
}
const MobileUserSettings = fn(7974).MobileUserSettings;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/ParentalControlsSensitiveContentFiltersScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsSensitiveContentFilters() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { sections: null };
    const items = [];
    HermesBuiltin.arraySpread(getContentCategory(), 0);
    obj2.sections = items;
    const list = SettingBuilders.createList(obj2);
    cResult[0] = list;
    let first = list;
    const tmpResult = SettingBuilders;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { node: first };
    const tmp12 = jsx(SettingLayoutDefault, { node: first });
    cResult[1] = tmp12;
    let tmp9 = tmp12;
  } else {
    tmp9 = cResult[1];
  }
  return tmp9;
}) : (function UserSettingsSensitiveContentFilters() {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const items = [...closure_1_6()];
    obj2.sections = items;
    return SettingBuilders.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});