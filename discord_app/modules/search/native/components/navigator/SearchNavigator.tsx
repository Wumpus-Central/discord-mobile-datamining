// discord_app/modules/search/native/components/navigator/SearchNavigator.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import search_tracking_TrackingDefault from "../../tracking/Tracking.tsx";
import SearchNavigatorPreviewHeaderDefault from "SearchNavigatorPreviewHeader.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
let closure_5 = fn(7877).SearchEntrypointAnalyticsLocations;
const SearchNavigatorScreens = fn(16643).SearchNavigatorScreens;
const SearchTypes = fn(1074).SearchTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let obj = { container: null };
obj = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.container = obj;
let closure_10 = createStyles.createStyles(obj);
const NativeStackNavigator = fn(7913);
let closure_11 = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigator.tsx");

export default noop.memo((route) => {
  const searchContext = route.route.params.searchContext;
  let obj = searchContext(7000);
  const accessibilityNativeStackOptions = obj.useAccessibilityNativeStackOptions();
  const items = [searchContext];
  const effect = noop.useEffect(() => {
    if (searchContext.type === SearchTypes.GUILD) {
      let DM_LIST = constants.GUILD;
    } else {
      DM_LIST = constants.DM_LIST;
    }
    search_tracking_TrackingDefault.trackSearchOpened({ searchContext, searchLocation: DM_LIST });
    return () => {
      const obj = { searchContext };
      obj.trackSearchClosed(obj);
    };
  }, items);
  const rect = useSafeAreaInsetsDefault();
  obj = { style: null, children: null };
  const items1 = [closure_10().container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj.style = items1;
  obj = { id: "search-navigator", screenOptions: null, children: null };
  const merged = Object.assign(accessibilityNativeStackOptions);
  obj.screenOptions = {};
  const items2 = [
    closure_8(closure_11.Screen, {
      initialParams: { searchContext },
      name: SearchNavigatorScreens.SEARCH_TABS,
      options: { headerShown: false, fullScreenGestureEnabled: true },
      getComponent() {
        return searchContext(16865).default;
      },
    }),
    closure_8(closure_11.Screen, {
      name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
      options(route) {
        route = route.route;
        const obj = {
          headerShown: true,
          header: route(7863).renderHeader,
          headerLeft: route(7863).getRenderBackImage(route.navigation),
          headerTitle() {
            return closure_2_8(SearchNavigatorPreviewHeaderDefault, { channelId: route.params.channelId });
          },
          fullScreenGestureEnabled: true,
        };
        return obj;
      },
      getComponent() {
        return searchContext(16861).default;
      },
    }),
  ];
  obj.children = items2;
  obj.children = closure_9(closure_11.Navigator, obj);
  return closure_8(View, obj);
});
