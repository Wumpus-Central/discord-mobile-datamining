// discord_app/modules/search/native/components/navigator/SearchNavigator.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_PlatformUtils from "../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import ConversationNavigatorHeader from "../../../../conversations/components/native/ConversationNavigatorHeader.tsx";
import search_tracking_TrackingDefault from "../../tracking/Tracking.tsx";
import SearchNavigatorPreviewHeaderDefault from "SearchNavigatorPreviewHeader.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_5 = fn(9284).SearchEntrypointAnalyticsLocations;
const SearchNavigatorScreens = fn(17263).SearchNavigatorScreens;
const SearchTypes = fn(1085).SearchTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5091);
let obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST } };
let closure_10 = createStyles.createStyles(obj);
const NativeStackNavigator = fn(9317);
let closure_11 = NativeStackNavigator.createNativeStackNavigator();
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigator.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function SearchNavigator(route) {
        const cResult = searchContext(576).c(30);
        searchContext = route.route.params.searchContext;
        let obj = searchContext(576);
        const tmp = searchContext;
        const accessibilityNativeStackOptions = searchContext(6686).useAccessibilityNativeStackOptions();
        if (cResult[0] !== searchContext) {
          const fn = function v() {
            if (searchContext.type === SearchTypes.GUILD) {
              let DM_LIST = constants.GUILD;
            } else {
              DM_LIST = constants.DM_LIST;
            }
            search_tracking_TrackingDefault.trackSearchOpened({ searchContext, searchLocation: DM_LIST });
            return () => {
              search_tracking_TrackingDefault.trackSearchClosed({ searchContext });
            };
          };
          const items = [searchContext];
          cResult[0] = searchContext;
          cResult[1] = fn;
          cResult[2] = items;
          let tmp6 = items;
          let tmp5 = fn;
        } else {
          tmp5 = cResult[1];
          tmp6 = cResult[2];
        }
        const effect = noop.useEffect(tmp5, tmp6);
        const tmp8 = closure_10();
        const obj2 = searchContext(6686);
        ({ left, right } = useSafeAreaInsetsDefault());
        if (cResult[3] === left) {
          if (cResult[4] === right) {
            let tmp10 = cResult[5];
          }
          if (cResult[6] === tmp8.container) {
            if (cResult[9] !== accessibilityNativeStackOptions) {
              const obj3 = {};
              const merged = Object.assign(accessibilityNativeStackOptions);
              cResult[9] = accessibilityNativeStackOptions;
              cResult[10] = obj3;
              let tmp12 = obj3;
            } else {
              tmp12 = cResult[10];
            }
            if (cResult[11] !== searchContext) {
              const obj4 = { searchContext };
              cResult[11] = searchContext;
              cResult[12] = obj4;
              let tmp16 = obj4;
            } else {
              tmp16 = cResult[12];
            }
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const obj5 = { headerShown: false, fullScreenGestureEnabled: true };
              class N {
                constructor() {
                  return searchContext(closure_1_2[14]).default;
                }
              }
              cResult[13] = N;
              cResult[14] = obj5;
              let tmp18 = N;
              const tmp19 = obj5;
            } else {
              tmp18 = cResult[13];
              class N {
                constructor() {
                  return searchContext(closure_1_2[14]).default;
                }
              }
            }
            if (cResult[15] !== tmp16) {
              class N {
                constructor() {
                  return searchContext(closure_1_2[14]).default;
                }
              }
              const obj6 = {
                initialParams: tmp16,
                name: SearchNavigatorScreens.SEARCH_TABS,
                options: tmp19,
                getComponent: tmp18,
              };
              const tmp23 = closure_8(closure_11.Screen, obj6);
              cResult[15] = tmp16;
              cResult[16] = tmp23;
              let tmp20 = tmp23;
            } else {
              tmp20 = cResult[16];
            }
            const _Symbol2 = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              class N {
                constructor() {
                  return searchContext(closure_1_2[14]).default;
                }
              }
              const obj7 = {
                name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
                options(route) {
                  route = route.route;
                  const obj = {
                    headerShown: true,
                    header: route(9270).renderHeader,
                    headerLeft: route(9270).getRenderBackImage(route.navigation),
                    headerTitle() {
                      return closure_2_8(SearchNavigatorPreviewHeaderDefault, { channelId: route.params.channelId });
                    },
                    fullScreenGestureEnabled: true,
                  };
                  return obj;
                },
                getComponent() {
                  return searchContext(17495).default;
                },
              };
              const tmp27 = closure_8(closure_11.Screen, obj7);
              cResult[17] = tmp27;
              let tmp24 = tmp27;
            } else {
              tmp24 = cResult[17];
            }
            if (cResult[18] !== searchContext) {
              class H {
                constructor(arg0) {
                  ({ route, navigation } = route);
                  obj = closure_0(closure_2[18]);
                  obj2 = closure_0(closure_2[19]);
                  isAndroidResult = obj2.isAndroid();
                  if (!isAndroidResult) {
                    tmp2 = searchContext;
                    tmp3 = SearchTypes;
                    isAndroidResult = searchContext.type === SearchTypes.GUILD;
                  }
                  return obj.conversationNavigatorFocusHeaderOptions(route, navigation, {
                    shouldHandleSafeArea: isAndroidResult,
                  });
                }
              }
              class N {
                constructor() {
                  return searchContext(closure_1_2[14]).default;
                }
              }
              cResult[18] = searchContext;
              cResult[19] = H;
            } else {
              class H {
                constructor(arg0) {
                  ({ route, navigation } = route);
                  obj = closure_0(closure_2[18]);
                  obj2 = closure_0(closure_2[19]);
                  isAndroidResult = obj2.isAndroid();
                  if (!isAndroidResult) {
                    tmp2 = searchContext;
                    tmp3 = SearchTypes;
                    isAndroidResult = searchContext.type === SearchTypes.GUILD;
                  }
                  return obj.conversationNavigatorFocusHeaderOptions(route, navigation, {
                    shouldHandleSafeArea: isAndroidResult,
                  });
                }
              }
            }
            const _Symbol3 = Symbol;
            if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
              class R {
                constructor() {
                  return searchContext(closure_1_2[20]).default;
                }
              }
              class N {
                constructor() {
                  return searchContext(closure_1_2[14]).default;
                }
              }
              cResult[20] = R;
            } else {
              class R {
                constructor() {
                  return searchContext(closure_1_2[20]).default;
                }
              }
            }
            if (cResult[21] !== H) {
              class R {
                constructor() {
                  return searchContext(closure_1_2[20]).default;
                }
              }
              class N {
                constructor() {
                  return searchContext(closure_1_2[14]).default;
                }
              }
              const obj8 = { name: tmp(9328).ConversationNavigatorScreens.FOCUS, options: H, getComponent: R };
              const tmp31 = closure_8(closure_11.Screen, obj8);
              cResult[21] = H;
              cResult[22] = tmp31;
            } else {
              class R {
                constructor() {
                  return searchContext(closure_1_2[20]).default;
                }
              }
            }
            if (cResult[23] === tmp20) {
              class R {
                constructor() {
                  return searchContext(closure_1_2[20]).default;
                }
              }
            }
            const obj9 = { id: "search-navigator", screenOptions: tmp12, children: null };
            const items1 = [tmp20, tmp24, tmp30];
            obj9.children = items1;
            const tmp35 = closure_9(closure_11.Navigator, obj9);
            cResult[23] = tmp20;
            cResult[24] = tmp30;
            cResult[25] = tmp12;
            cResult[26] = tmp35;
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
        const tmp9 = useSafeAreaInsetsDefault();
      }
    : function SearchNavigator(route) {
        const searchContext = route.route.params.searchContext;
        const accessibilityNativeStackOptions = searchContext(6686).useAccessibilityNativeStackOptions();
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
        let obj = searchContext(6686);
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
              return searchContext(17500).default;
            },
          }),
          closure_8(closure_11.Screen, {
            name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
            options(route) {
              route = route.route;
              const obj = {
                headerShown: true,
                header: route(9270).renderHeader,
                headerLeft: route(9270).getRenderBackImage(route.navigation),
                headerTitle() {
                  return closure_2_8(SearchNavigatorPreviewHeaderDefault, { channelId: route.params.channelId });
                },
                fullScreenGestureEnabled: true,
              };
              return obj;
            },
            getComponent() {
              return searchContext(17495).default;
            },
          }),
        ];
        const obj4 = {};
        const obj5 = {
          initialParams: { searchContext },
          name: SearchNavigatorScreens.SEARCH_TABS,
          options: { headerShown: false, fullScreenGestureEnabled: true },
          getComponent() {
            return searchContext(17500).default;
          },
        };
        const obj6 = {
          name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
          options(route) {
            route = route.route;
            const obj = {
              headerShown: true,
              header: route(9270).renderHeader,
              headerLeft: route(9270).getRenderBackImage(route.navigation),
              headerTitle() {
                return closure_2_8(SearchNavigatorPreviewHeaderDefault, { channelId: route.params.channelId });
              },
              fullScreenGestureEnabled: true,
            };
            return obj;
          },
          getComponent() {
            return searchContext(17495).default;
          },
        };
        const tmp3 = closure_10();
        items2[2] = closure_8(closure_11.Screen, {
          name: searchContext(9328).ConversationNavigatorScreens.FOCUS,
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
            return searchContext(17496).default;
          },
        });
        obj3.children = items2;
        obj2.children = closure_9(closure_11.Navigator, obj3);
        return closure_8(View, obj2);
      },
);
