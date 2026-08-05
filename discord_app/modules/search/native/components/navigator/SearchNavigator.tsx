// discord_app/modules/search/native/components/navigator/SearchNavigator.tsx
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import { SearchEntrypointAnalyticsLocations as closure_5 } from "SearchEntrypointAnalyticsLocations";
import { SearchNavigatorScreens } from "SearchNavigatorScreens";
import { SearchTypes } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import createNativeStackNavigator from "createNativeStackNavigator";

let c9;
let metroImportAll;
const require = arg1;
let c3 = importAllResult;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let obj = { container: null };
obj = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
obj[0] = obj;
let closure_10 = createCacheKey.createStyles(obj);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = importAllResult.memo((route) => {
  const searchContext = route.route.params.searchContext;
  let obj = searchContext(5665);
  const accessibilityNativeStackOptions = obj.useAccessibilityNativeStackOptions();
  const items = [searchContext];
  const effect = importAllResult.useEffect(() => {
    if (searchContext.type === outer1_7.GUILD) {
      let DM_LIST = outer1_5.GUILD;
    } else {
      DM_LIST = outer1_5.DM_LIST;
    }
    outer1_1(outer1_2[10]).trackSearchOpened({ searchContext, searchLocation: DM_LIST });
    return () => {
      let obj = outer1_1(outer1_2[10]);
      obj = { searchContext: closure_0 };
      obj.trackSearchClosed(obj);
    };
  }, items);
  const rect = require("../../../../safe_area/useSafeAreaInsets.native.tsx")();
  obj = { style: items1, children: null };
  items1 = [callback3().container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj = { id: "search-navigator", screenOptions: null, children: null };
  const merged = Object.assign(accessibilityNativeStackOptions);
  obj[1] = {};
  const items2 = [
    callback(createNativeStackNavigator.Screen, {
      initialParams: { searchContext },
      name: SearchNavigatorScreens.SEARCH_TABS,
      options: { headerShown: false, fullScreenGestureEnabled: true },
      getComponent() {
        return searchContext(15809).default;
      }
    }),
    callback(createNativeStackNavigator.Screen, {
      name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
      options(route) {
        route = route.route;
        const obj = { headerShown: true, header: route(8193).renderHeader, headerLeft: null, headerTitle: null, fullScreenGestureEnabled: true };
        obj[2] = route(8193).getRenderBackImage(route.navigation);
        obj[3] = function headerTitle() {
          return outer1_8(outer1_1(outer1_2[14]), { channelId: route.params.channelId });
        };
        return obj;
      },
      getComponent() {
        return searchContext(15805).default;
      }
    })
  ];
  obj[2] = items2;
  obj[1] = callback2(createNativeStackNavigator.Navigator, obj);
  return callback(View, obj);
});
const result = require("SearchEntrypointAnalyticsLocations").fileFinishedImporting("modules/search/native/components/navigator/SearchNavigator.tsx");

export default memoResult;