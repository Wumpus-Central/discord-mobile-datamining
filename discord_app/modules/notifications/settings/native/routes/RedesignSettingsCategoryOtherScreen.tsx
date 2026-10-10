// === Module 16317: RedesignSettingsCategoryOtherScreen ===

// Module 16317 (RedesignSettingsCategoryOtherScreen)
import c from "c" /* 576 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import SettingLayoutDefault from "SettingLayout" /* 14942 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 16309 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryOtherScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function RedesignSettingsCategoryOtherScreen() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { sections: null };
    const tmpResult = SettingBuilders;
    const items = [MobileNotifSettingsRouteBuilders.buildCategoryOtherSettingsSection()];
    obj2.sections = items;
    const list = tmpResult.createList(obj2);
    cResult[0] = list;
    let first = list;
    const tmpResult2 = MobileNotifSettingsRouteBuilders;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { node: first };
    const tmp9 = jsx(SettingLayoutDefault, { node: first });
    cResult[1] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (function RedesignSettingsCategoryOtherScreen() {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj = SettingBuilders;
    const items = [MobileNotifSettingsRouteBuilders.buildCategoryOtherSettingsSection()];
    obj2.sections = items;
    return obj.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
}));