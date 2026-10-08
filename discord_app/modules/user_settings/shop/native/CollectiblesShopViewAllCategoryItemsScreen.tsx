// discord_app/modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx
import c from "../../../../../_runtime/00576_c.js";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import useSettingNavigationRoute from "../../core/native/useSettingNavigationRoute.tsx";
import CollectiblesShopViewAllCategoryItemsDefault from "../../../collectibles/native/CollectiblesShopViewAllCategoryItems.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CollectiblesShopViewAllCategoryItemsScreen() {
      const cResult = c.c(5);
      const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
      const stackNavigation = useNavigation.useStackNavigation();
      if (cResult[0] !== stackNavigation) {
        const fn = function o() {
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
    }
  : function CollectiblesShopViewAllCategoryItemsScreen() {
      const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
      const stackNavigation = useNavigation.useStackNavigation();
      const items = [stackNavigation];
      const layoutEffect = noop.useLayoutEffect(() => {
        stackNavigation.setOptions({ headerShown: false });
      }, items);
      const obj3 = {};
      const merged = Object.assign(settingNavigationRoute.params);
      return jsx(CollectiblesShopViewAllCategoryItemsDefault, {});
    };
