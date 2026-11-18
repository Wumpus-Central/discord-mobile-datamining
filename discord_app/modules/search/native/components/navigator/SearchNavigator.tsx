// === Module 19049: SearchNavigator ===

// Module 19049 (SearchNavigator)
import utils_PlatformUtils from "utils/PlatformUtils" /* 1360 */;
import ConversationNavigatorHeader from "ConversationNavigatorHeader" /* 8562 */;
import TrackingDefault from "Tracking" /* 13146 */;
import AppFrameContainerDefault from "AppFrameContainer" /* 18945 */;
import SearchNavigatorPreviewHeaderDefault from "SearchNavigatorPreviewHeader" /* 19044 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = fn(8487).SearchEntrypointAnalyticsLocations;
const SearchNavigatorScreens = fn(18792).SearchNavigatorScreens;
const SearchTypes = fn(1072).SearchTypes;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const NativeStackNavigator = fn(8550);
let closure_9 = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigator.tsx");

export default noop.memo(function SearchNavigator(route) {
  const searchContext = route.route.params.searchContext;
  const accessibilityNativeStackOptions = searchContext(7003).useAccessibilityNativeStackOptions();
  items = [searchContext];
  const effect = noop.useEffect(() => {
    if (searchContext.type === SearchTypes.GUILD) {
      let DM_LIST = constants.GUILD;
    } else {
      DM_LIST = constants.DM_LIST;
    }
    TrackingDefault.trackSearchOpened({ searchContext, searchLocation: DM_LIST });
    return () => {
      TrackingDefault.trackSearchClosed({ searchContext });
    };
  }, items);
  const obj2 = { children: null };
  const obj3 = { id: "search-navigator", screenOptions: null, children: null };
  let obj = searchContext(7003);
  const obj4 = {};
  const merged = Object.assign(accessibilityNativeStackOptions);
  obj3.screenOptions = obj4;
  const items1 = [
    closure_7(closure_9.Screen, {
      initialParams: { searchContext },
      name: SearchNavigatorScreens.SEARCH_TABS,
      options: { headerShown: false, fullScreenGestureEnabled: true },
      getComponent() {
        return searchContext(19050).default;
      }
    }),
    closure_7(closure_9.Screen, {
      name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
      options(route) {
        route = route.route;
        const obj = {
          headerShown: true,
          header: route(8473).renderHeader,
          headerLeft: route(8473).getRenderBackImage(route.navigation),
          headerTitle() {
            return closure_2_7(SearchNavigatorPreviewHeaderDefault, { channelId: route.params.channelId });
          },
          fullScreenGestureEnabled: true
        };
        return obj;
      },
      getComponent() {
        return searchContext(19045).default;
      }
    }),

  ];
  const obj5 = {
    initialParams: { searchContext },
    name: SearchNavigatorScreens.SEARCH_TABS,
    options: { headerShown: false, fullScreenGestureEnabled: true },
    getComponent() {
      return searchContext(19050).default;
    }
  };
  const obj6 = {
    name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
    options(route) {
      route = route.route;
      const obj = {
        headerShown: true,
        header: route(8473).renderHeader,
        headerLeft: route(8473).getRenderBackImage(route.navigation),
        headerTitle() {
          return closure_2_7(SearchNavigatorPreviewHeaderDefault, { channelId: route.params.channelId });
        },
        fullScreenGestureEnabled: true
      };
      return obj;
    },
    getComponent() {
      return searchContext(19045).default;
    }
  };
  const tmp3 = AppFrameContainerDefault;
  items1[2] = closure_7(closure_9.Screen, {
    name: searchContext(8561).ConversationNavigatorScreens.FOCUS,
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
      return searchContext(14276).default;
    }
  });
  obj3.children = items1;
  obj2.children = closure_8(closure_9.Navigator, obj3);
  return closure_7(tmp3, obj2);
});