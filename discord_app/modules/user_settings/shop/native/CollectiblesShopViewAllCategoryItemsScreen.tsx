// discord_app/modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import useSettingNavigationRoute from "../../core/native/useSettingNavigationRoute.tsx";
import CollectiblesShopViewAllCategoryItemsDefault from "../../../collectibles/native/CollectiblesShopViewAllCategoryItems.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
    }
  : () => {
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
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx",
);

export default tmp2;
