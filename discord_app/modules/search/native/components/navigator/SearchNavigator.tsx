// discord_app/modules/search/native/components/navigator/SearchNavigator.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { SearchEntrypointAnalyticsLocations as closure_5 } from "../../tracking/TrackingConstants.tsx";
import { SearchNavigatorScreens } from "SearchNavigatorConstants.tsx";
import { SearchTypes } from "../../../../../Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import createNativeStackNavigator from "../../../../../../_runtime/07831_createNativeStackNavigator.js";

const require = arg1;
let c3 = importAllResult;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let obj = { container: null };
obj = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
obj[0] = obj;
let closure_10 = createCacheKey.createStyles(obj);
let closure_11 = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = importAllResult.memo((route) => {
  const searchContext = route.route.params.searchContext;
  let obj = searchContext(6016);
  const accessibilityNativeStackOptions = obj.useAccessibilityNativeStackOptions();
  const items = [searchContext];
  const effect = importAllResult.useEffect(() => {
    if (searchContext.type === closure_1_7.GUILD) {
      let DM_LIST = closure_1_5.GUILD;
    } else {
      DM_LIST = closure_1_5.DM_LIST;
    }
    closure_1_1(closure_1_2[10]).trackSearchOpened({ searchContext, searchLocation: DM_LIST });
    return () => {
      let obj = closure_1_1(closure_1_2[10]);
      obj = { searchContext: closure_0 };
      obj.trackSearchClosed(obj);
    };
  }, items);
  const rect = useSafeAreaInsetsDefault();
  obj = { style: items1, children: null };
  items1 = [callback3().container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj = { id: "search-navigator", screenOptions: null, children: null };
  const merged = Object.assign(accessibilityNativeStackOptions);
  obj[1] = {};
  const items2 = [
    callback(closure_11.Screen, {
      initialParams: { searchContext },
      name: SearchNavigatorScreens.SEARCH_TABS,
      options: { headerShown: false, fullScreenGestureEnabled: true },
      getComponent() {
        return searchContext(16680).default;
      },
    }),
    callback(closure_11.Screen, {
      name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
      options(route) {
        route = route.route;
        const obj = {
          headerShown: true,
          header: route(7617).renderHeader,
          headerLeft: route(7617).getRenderBackImage(route.navigation),
          headerTitle() {
            return closure_1_8(closure_1_1(closure_1_2[14]), { channelId: route.params.channelId });
          },
          fullScreenGestureEnabled: true,
        };
        return obj;
      },
      getComponent() {
        return searchContext(16676).default;
      },
    }),
  ];
  obj[2] = items2;
  obj[1] = callback2(closure_11.Navigator, obj);
  return callback(View, obj);
});
const result = require("set").fileFinishedImporting("modules/search/native/components/navigator/SearchNavigator.tsx");

export default memoResult;
