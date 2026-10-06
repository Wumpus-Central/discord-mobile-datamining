// === Module 15789: CollectiblesShopViewAllCategoryItemsScreen ===

// Module 15789 (CollectiblesShopViewAllCategoryItemsScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useNavigation from "useNavigation" /* 1490 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6497 */;
import CollectiblesShopViewAllCategoryItemsDefault from "CollectiblesShopViewAllCategoryItems" /* 15790 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  let tmp6;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(5);
  const obj2 = useSettingNavigationRoute;
  const settingNavigationRoute = obj2.useSettingNavigationRoute();
  const obj3 = useNavigation;
  const stackNavigation = obj3.useStackNavigation();
  if (cResult[0] !== stackNavigation) {
    const fn = function n() {
      stackNavigation.setOptions({ headerShown: false });
    };
    const items = [stackNavigation];
    cResult[0] = stackNavigation;
    cResult[1] = fn;
    cResult[2] = items;
    tmp6 = items;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const layoutEffect = react.useLayoutEffect(tmp5, tmp6);
  if (cResult[3] !== settingNavigationRoute.params) {
    CollectiblesShopViewAllCategoryItemsDefault;
    const merged = Object.assign(settingNavigationRoute.params);
    const tmp14 = <tmp11 />;
    cResult[3] = settingNavigationRoute.params;
    cResult[4] = tmp14;
    tmp8 = tmp14;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : (() => {
  const obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const obj2 = useNavigation;
  const stackNavigation = obj2.useStackNavigation();
  const items = [stackNavigation];
  const layoutEffect = react.useLayoutEffect(() => {
    stackNavigation.setOptions({ headerShown: false });
  }, items);
  CollectiblesShopViewAllCategoryItemsDefault;
  const merged = Object.assign(settingNavigationRoute.params);
  return <tmp4 />;
});
const result = size.fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx");

export default tmp2;