// === Module 17044: SearchNavigator ===

// Module 17044 (SearchNavigator)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import TrackingConstants from "TrackingConstants" /* 7512 */;
import ConversationNavigatorHeader from "ConversationNavigatorHeader" /* 7569 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11982 */;
import SearchNavigatorConstants from "SearchNavigatorConstants" /* 16813 */;
import SearchNavigatorPreviewHeaderDefault from "SearchNavigatorPreviewHeader" /* 17039 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import NativeStackView from "NativeStackView" /* 7556 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let c9;
let metroImportAll;
let obj2;
const View = react_native.View;
let closure_5 = TrackingConstants.SearchEntrypointAnalyticsLocations;
const SearchNavigatorScreens = SearchNavigatorConstants.SearchNavigatorScreens;
const SearchTypes = Constants.SearchTypes;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { container: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_10 = createStyles.createStyles(obj);
let closure_11 = NativeStackView.createNativeStackNavigator();
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((route) => {
  let items1;
  let left;
  let right;
  let searchContext;
  let tmp5;
  let tmp6;
  const tmp = searchContext;
  let obj = searchContext(576);
  const cResult = obj.c(30);
  searchContext = route.route.params.searchContext;
  let obj2 = searchContext(6496);
  const accessibilityNativeStackOptions = obj2.useAccessibilityNativeStackOptions();
  if (cResult[0] !== searchContext) {
    const fn = function v() {
      let DM_LIST;
      if (searchContext.type === SearchTypes.GUILD) {
        DM_LIST = constants.GUILD;
      } else {
        DM_LIST = constants.DM_LIST;
      }
      let obj = search_tracking_TrackingDefault;
      obj.trackSearchOpened({ searchContext, searchLocation: DM_LIST });
      return () => {
        const obj = search_tracking_TrackingDefault;
        const obj2 = { searchContext };
        obj.trackSearchClosed(obj2);
      };
    };
    const items = [searchContext];
    cResult[0] = searchContext;
    cResult[1] = fn;
    cResult[2] = items;
    tmp6 = items;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = react.useEffect(tmp5, tmp6);
  const tmp8 = closure_10();
  ({ left, right } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  if (cResult[3] === left) {
    let tmp10;
    if (cResult[4] === right) {
      tmp10 = cResult[5];
    }
    if (cResult[6] === tmp8.container) {
      let tmp12;
      let tmp16;
      let tmp18;
      let tmp19;
      let tmp20;
      let tmp24;
      if (cResult[9] !== accessibilityNativeStackOptions) {
        const obj3 = {};
        const merged = Object.assign(accessibilityNativeStackOptions);
        cResult[9] = accessibilityNativeStackOptions;
        cResult[10] = obj3;
        tmp12 = obj3;
      } else {
        tmp12 = cResult[10];
      }
      if (cResult[11] !== searchContext) {
        const obj4 = { searchContext };
        cResult[11] = searchContext;
        cResult[12] = obj4;
        tmp16 = obj4;
      } else {
        tmp16 = cResult[12];
      }
      const _Symbol = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { headerShown: false, fullScreenGestureEnabled: true };
        class N {
          constructor() {
            return searchContext(dependencyMap[14]).default;
          }
        }
        cResult[13] = N;
        cResult[14] = obj5;
        tmp18 = N;
        tmp19 = obj5;
      } else {
        tmp18 = cResult[13];
        class N {
          constructor() {
            return searchContext(dependencyMap[14]).default;
          }
        }
      }
      if (cResult[15] !== tmp16) {
        class N {
          constructor() {
            return searchContext(dependencyMap[14]).default;
          }
        }
        const obj6 = { initialParams: tmp16, name: SearchNavigatorScreens.SEARCH_TABS, options: tmp19, getComponent: tmp18 };
        const tmp23 = closure_8(closure_11.Screen, obj6);
        cResult[15] = tmp16;
        cResult[16] = tmp23;
        tmp20 = tmp23;
      } else {
        tmp20 = cResult[16];
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor() {
            return searchContext(dependencyMap[14]).default;
          }
        }
        const obj7 = {
          name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
          options(route) {
                  let obj2;
                  route = route.route;
                  let obj = {
                    headerShown: true,
                    header: route(closure_2[15]).renderHeader,
                    headerLeft: obj2.getRenderBackImage(navigation),
                    headerTitle() {
                      const obj = { channelId: route.params.channelId };
                      return closure_2_8(SearchNavigatorPreviewHeaderDefault, obj);
                    },
                    fullScreenGestureEnabled: true
                  };
                  navigation = route.navigation;
                  obj2 = route(closure_2[15]);
                  return obj;
                },
          getComponent() {
                  return searchContext(dependencyMap[17]).default;
                }
        };
        const tmp27 = closure_8(closure_11.Screen, obj7);
        cResult[17] = tmp27;
        tmp24 = tmp27;
      } else {
        tmp24 = cResult[17];
      }
      if (cResult[18] !== searchContext) {
        class H {
          constructor(arg0) {
            let route;
            ({ route, navigation } = arg0);
            const conversationNavigatorFocusHeaderOptions = ConversationNavigatorHeader.conversationNavigatorFocusHeaderOptions;
            ConversationNavigatorHeader;
            const obj = utils_PlatformUtils;
            const shouldHandleSafeArea = obj.isAndroid() || searchContext.type === SearchTypes.GUILD;
            return conversationNavigatorFocusHeaderOptions(route, navigation, { shouldHandleSafeArea });
          }
        }
        class N {
          constructor() {
            return searchContext(dependencyMap[14]).default;
          }
        }
        cResult[18] = searchContext;
        cResult[19] = H;
      } else {
        class H {
          constructor(arg0) {
            let route;
            ({ route, navigation } = arg0);
            const conversationNavigatorFocusHeaderOptions = ConversationNavigatorHeader.conversationNavigatorFocusHeaderOptions;
            ConversationNavigatorHeader;
            const obj = utils_PlatformUtils;
            const shouldHandleSafeArea = obj.isAndroid() || searchContext.type === SearchTypes.GUILD;
            return conversationNavigatorFocusHeaderOptions(route, navigation, { shouldHandleSafeArea });
          }
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            return searchContext(dependencyMap[20]).default;
          }
        }
        class N {
          constructor() {
            return searchContext(dependencyMap[14]).default;
          }
        }
        cResult[20] = R;
      } else {
        class R {
          constructor() {
            return searchContext(dependencyMap[20]).default;
          }
        }
      }
      if (cResult[21] !== H) {
        class R {
          constructor() {
            return searchContext(dependencyMap[20]).default;
          }
        }
        class N {
          constructor() {
            return searchContext(dependencyMap[14]).default;
          }
        }
        const Screen = closure_11.Screen;
        const obj8 = { name: tmp(7568).ConversationNavigatorScreens.FOCUS, options: H, getComponent: R };
        cResult[21] = H;
        cResult[22] = closure_8(Screen, obj8);
        const tmp31 = closure_8(Screen, obj8);
      } else {
        class R {
          constructor() {
            return searchContext(dependencyMap[20]).default;
          }
        }
      }
      if (cResult[23] === tmp20) {
        class R {
          constructor() {
            return searchContext(dependencyMap[20]).default;
          }
        }
      }
      const obj9 = { id: "search-navigator", screenOptions: tmp12, children: items1 };
      items1 = [tmp20, tmp24, tmp30];
      cResult[23] = tmp20;
      cResult[24] = tmp30;
      cResult[25] = tmp12;
      cResult[26] = closure_9(closure_11.Navigator, obj9);
      const tmp35 = closure_9(closure_11.Navigator, obj9);
    }
    const items2 = [tmp8.container, tmp10];
    cResult[6] = tmp8.container;
    cResult[7] = tmp10;
    cResult[8] = items2;
  }
  const obj10 = { paddingLeft: left, paddingRight: right };
  cResult[3] = left;
  cResult[4] = right;
  cResult[5] = obj10;
  tmp10 = obj10;
}) : ((route) => {
  let Navigator;
  let items1;
  let items2;
  let obj3;
  let obj4;
  const searchContext = route.route.params.searchContext;
  let obj = searchContext(6496);
  const accessibilityNativeStackOptions = obj.useAccessibilityNativeStackOptions();
  const items = [searchContext];
  const effect = react.useEffect(() => {
    let DM_LIST;
    if (searchContext.type === SearchTypes.GUILD) {
      DM_LIST = constants.GUILD;
    } else {
      DM_LIST = constants.DM_LIST;
    }
    let obj = search_tracking_TrackingDefault;
    obj.trackSearchOpened({ searchContext, searchLocation: DM_LIST });
    return () => {
      const obj = search_tracking_TrackingDefault;
      const obj2 = { searchContext };
      obj.trackSearchClosed(obj2);
    };
  }, items);
  const tmp3 = closure_10();
  const rect = useSafeAreaInsetsDefault();
  let obj2 = { style: items1, children: closure_9(Navigator, obj3) };
  items1 = [tmp3.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  Navigator = closure_11.Navigator;
  obj3 = { id: "search-navigator", screenOptions: obj4, children: items2 };
  obj4 = {};
  const merged = Object.assign(accessibilityNativeStackOptions);
  items2 = [, , ];
  const obj5 = {
    initialParams: { searchContext },
    name: SearchNavigatorScreens.SEARCH_TABS,
    options: { headerShown: false, fullScreenGestureEnabled: true },
    getComponent() {
      return searchContext(dependencyMap[14]).default;
    }
  };
  items2[0] = closure_8(closure_11.Screen, obj5);
  const obj6 = {
    name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
    options(route) {
      let obj2;
      route = route.route;
      let obj = {
        headerShown: true,
        header: route(closure_2[15]).renderHeader,
        headerLeft: obj2.getRenderBackImage(navigation),
        headerTitle() {
          const obj = { channelId: route.params.channelId };
          return closure_2_8(SearchNavigatorPreviewHeaderDefault, obj);
        },
        fullScreenGestureEnabled: true
      };
      navigation = route.navigation;
      obj2 = route(closure_2[15]);
      return obj;
    },
    getComponent() {
      return searchContext(dependencyMap[17]).default;
    }
  };
  items2[1] = closure_8(closure_11.Screen, obj6);
  const obj7 = {
    name: searchContext(7568).ConversationNavigatorScreens.FOCUS,
    options(arg0) {
      let route;
      ({ route, navigation } = arg0);
      const conversationNavigatorFocusHeaderOptions = ConversationNavigatorHeader.conversationNavigatorFocusHeaderOptions;
      ConversationNavigatorHeader;
      const obj = utils_PlatformUtils;
      const shouldHandleSafeArea = obj.isAndroid() || searchContext.type === SearchTypes.GUILD;
      return conversationNavigatorFocusHeaderOptions(route, navigation, { shouldHandleSafeArea });
    },
    getComponent() {
      return searchContext(dependencyMap[20]).default;
    }
  };
  items2[2] = closure_8(closure_11.Screen, obj7);
  return closure_8(View, obj2);
}));
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigator.tsx");

export default memoResult;