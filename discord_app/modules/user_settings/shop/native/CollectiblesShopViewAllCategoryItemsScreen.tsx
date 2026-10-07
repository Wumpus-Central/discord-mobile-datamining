// === Module 15789: CollectiblesShopViewAllCategoryItemsScreen ===

// Module 15789 (CollectiblesShopViewAllCategoryItemsScreen)
import c from "c" /* 576 */;
import useNavigation from "useNavigation" /* 1490 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6497 */;
import CollectiblesShopViewAllCategoryItemsDefault from "CollectiblesShopViewAllCategoryItems" /* 15790 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(5);
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const stackNavigation = useNavigation.useStackNavigation();
  if (cResult[0] !== stackNavigation) {
    const fn = function n() {
      stackNavigation.setOptions({ headerShown: false });
    };
    const items = [stackNavigation];
    cResult[0] = stackNavigation;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp6 = items;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const layoutEffect = noop.useLayoutEffect(tmp5, tmp6);
  if (cResult[3] !== settingNavigationRoute.params) {
    const obj4 = {};
    const merged = Object.assign(settingNavigationRoute.params);
    const tmp14 = jsx(CollectiblesShopViewAllCategoryItemsDefault, {});
    cResult[3] = settingNavigationRoute.params;
    cResult[4] = tmp14;
    let tmp8 = tmp14;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : (() => {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const stackNavigation = useNavigation.useStackNavigation();
  const items = [stackNavigation];
  const layoutEffect = noop.useLayoutEffect(() => {
    stackNavigation.setOptions({ headerShown: false });
  }, items);
  const obj3 = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(CollectiblesShopViewAllCategoryItemsDefault, {});
});