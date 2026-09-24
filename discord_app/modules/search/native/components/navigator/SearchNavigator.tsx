// === Module 17437: SearchNavigator ===

// Module 17437 (SearchNavigator)
import nativeDefault from "native" /* 576 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import ConversationNavigatorHeader from "ConversationNavigatorHeader" /* 8258 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12701 */;
import SearchNavigatorPreviewHeaderDefault from "SearchNavigatorPreviewHeader" /* 17432 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_5 = fn(8208).SearchEntrypointAnalyticsLocations;
const SearchNavigatorScreens = fn(17211).SearchNavigatorScreens;
const SearchTypes = fn(1074).SearchTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4829);
let obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST } };
let closure_10 = createStyles.createStyles(obj);
const NativeStackNavigator = fn(8245);
let closure_11 = NativeStackNavigator.createNativeStackNavigator();
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigator.tsx");

export default noop.memo((route) => {
  const searchContext = route.route.params.searchContext;
  const accessibilityNativeStackOptions = searchContext(7333).useAccessibilityNativeStackOptions();
  const items = [searchContext];
  const effect = noop.useEffect(() => {
    if (searchContext.type === SearchTypes.GUILD) {
      let DM_LIST = constants.GUILD;
    } else {
      DM_LIST = constants.DM_LIST;
    }
    search_tracking_TrackingDefault.trackSearchOpened({ searchContext, searchLocation: DM_LIST });
    return () => {
      search_tracking_TrackingDefault.trackSearchClosed({ searchContext });
    };
  }, items);
  let obj = searchContext(7333);
  const rect = useSafeAreaInsetsDefault();
  const obj2 = { style: null, children: null };
  const items1 = [closure_10().container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj2.style = items1;
  const obj3 = { id: "search-navigator", screenOptions: null, children: null };
  const merged = Object.assign(accessibilityNativeStackOptions);
  obj3.screenOptions = {};
  const items2 = [
    closure_8(closure_11.Screen, {
      initialParams: { searchContext },
      name: SearchNavigatorScreens.SEARCH_TABS,
      options: { headerShown: false, fullScreenGestureEnabled: true },
      getComponent() {
        return searchContext(17438).default;
      }
    }),
    closure_8(closure_11.Screen, {
      name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
      options(route) {
        route = route.route;
        const obj = {
          headerShown: true,
          header: route(8194).renderHeader,
          headerLeft: route(8194).getRenderBackImage(route.navigation),
          headerTitle() {
            return closure_2_8(SearchNavigatorPreviewHeaderDefault, { channelId: route.params.channelId });
          },
          fullScreenGestureEnabled: true
        };
        return obj;
      },
      getComponent() {
        return searchContext(17433).default;
      }
    }),

  ];
  const obj4 = {};
  const obj5 = {
    initialParams: { searchContext },
    name: SearchNavigatorScreens.SEARCH_TABS,
    options: { headerShown: false, fullScreenGestureEnabled: true },
    getComponent() {
      return searchContext(17438).default;
    }
  };
  const obj6 = {
    name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
    options(route) {
      route = route.route;
      const obj = {
        headerShown: true,
        header: route(8194).renderHeader,
        headerLeft: route(8194).getRenderBackImage(route.navigation),
        headerTitle() {
          return closure_2_8(SearchNavigatorPreviewHeaderDefault, { channelId: route.params.channelId });
        },
        fullScreenGestureEnabled: true
      };
      return obj;
    },
    getComponent() {
      return searchContext(17433).default;
    }
  };
  const tmp3 = closure_10();
  items2[2] = closure_8(closure_11.Screen, {
    name: searchContext(8257).ConversationNavigatorScreens.FOCUS,
    options(arg0) {
      ({ route, navigation } = arg0);
      const obj = ConversationNavigatorHeader;
      let shouldHandleSafeArea = utils_PlatformUtils.isAndroid();
      if (!shouldHandleSafeArea) {
        shouldHandleSafeArea = searchContext.type === SearchTypes.GUILD;
      }
      return obj.conversationNavigatorFocusHeaderOptions(route, navigation, { shouldHandleSafeArea });
    },
    getComponent() {
      return searchContext(17434).default;
    }
  });
  obj3.children = items2;
  obj2.children = closure_9(closure_11.Navigator, obj3);
  return closure_8(View, obj2);
});