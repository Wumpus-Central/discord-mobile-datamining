// === Module 16080: ? ===

// Module 16080
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { SearchEntrypointAnalyticsLocations as closure_5 } from "SearchEntrypointAnalyticsLocations" /* 8506 */;
import { SearchNavigatorScreens } from "SearchNavigatorScreens" /* 15867 */;
import { SearchTypes } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import createNativeStackNavigator from "createNativeStackNavigator" /* 9931 */;

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
  let obj = searchContext(6312);
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
        return searchContext(16081).default;
      }
    }),
    callback(closure_11.Screen, {
      name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
      options(route) {
        route = route.route;
        const obj = {
          headerShown: true,
          header: route(8492).renderHeader,
          headerLeft: route(8492).getRenderBackImage(route.navigation),
          headerTitle() {
            return closure_1_8(closure_1_1(closure_1_2[14]), { channelId: route.params.channelId });
          },
          fullScreenGestureEnabled: true
        };
        return obj;
      },
      getComponent() {
        return searchContext(16077).default;
      }
    })
  ];
  obj[2] = items2;
  obj[1] = callback2(closure_11.Navigator, obj);
  return callback(View, obj);
});
const result = require("set").fileFinishedImporting("modules/search/native/components/navigator/SearchNavigator.tsx");

export default memoResult;