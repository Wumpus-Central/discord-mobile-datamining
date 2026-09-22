// === Module 17345: SearchNavigator ===

// Module 17345 (SearchNavigator)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12616 */;
import SearchNavigatorPreviewHeaderDefault from "SearchNavigatorPreviewHeader" /* 17340 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
let closure_5 = fn(8124).SearchEntrypointAnalyticsLocations;
const SearchNavigatorScreens = fn(17125).SearchNavigatorScreens;
const SearchTypes = fn(1074).SearchTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4757);
let obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST } };
let closure_10 = createStyles.createStyles(obj);
const NativeStackNavigator = fn(8161);
let closure_11 = NativeStackNavigator.createNativeStackNavigator();
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigator.tsx");

export default noop.memo((route) => {
  const searchContext = route.route.params.searchContext;
  const accessibilityNativeStackOptions = searchContext(7247).useAccessibilityNativeStackOptions();
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
  let obj = searchContext(7247);
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
        return searchContext(17346).default;
      }
    }),
    closure_8(closure_11.Screen, {
      name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
      options(route) {
        route = route.route;
        const obj = {
          headerShown: true,
          header: route(8110).renderHeader,
          headerLeft: route(8110).getRenderBackImage(route.navigation),
          headerTitle() {
            return closure_2_8(SearchNavigatorPreviewHeaderDefault, { channelId: route.params.channelId });
          },
          fullScreenGestureEnabled: true
        };
        return obj;
      },
      getComponent() {
        return searchContext(17341).default;
      }
    }),

  ];
  const obj4 = {};
  const obj5 = {
    initialParams: { searchContext },
    name: SearchNavigatorScreens.SEARCH_TABS,
    options: { headerShown: false, fullScreenGestureEnabled: true },
    getComponent() {
      return searchContext(17346).default;
    }
  };
  const obj6 = {
    name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
    options(route) {
      route = route.route;
      const obj = {
        headerShown: true,
        header: route(8110).renderHeader,
        headerLeft: route(8110).getRenderBackImage(route.navigation),
        headerTitle() {
          return closure_2_8(SearchNavigatorPreviewHeaderDefault, { channelId: route.params.channelId });
        },
        fullScreenGestureEnabled: true
      };
      return obj;
    },
    getComponent() {
      return searchContext(17341).default;
    }
  };
  const tmp3 = closure_10();
  items2[2] = closure_8(closure_11.Screen, {
    name: searchContext(8171).ConversationNavigatorScreens.FOCUS,
    options(arg0) {
      ({ route, navigation } = arg0);
      return searchContext(8172).conversationNavigatorFocusHeaderOptions(route, navigation);
    },
    getComponent() {
      return searchContext(17342).default;
    }
  });
  obj3.children = items2;
  obj2.children = closure_9(closure_11.Navigator, obj3);
  return closure_8(View, obj2);
});