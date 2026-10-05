// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsNavigator.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Constants from "../../../../../Constants.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import HeaderShared from "../../shared_components/HeaderShared.tsx";
import ChannelDetailsConstants from "ChannelDetailsConstants.tsx";
import navigateToThreadCreation from "../../../../threads/native/navigateToThreadCreation.tsx";
import AssetRegistryDefault from "../../../../../../_runtime/12442_AssetRegistry.js";
import SearchNavigatorConstants from "../../../../search/native/components/navigator/SearchNavigatorConstants.tsx";
import ChannelSettingsModal from "../../../../../components_native/channel_settings/ChannelSettingsModal.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import NativeStackView from "../../../../../../_runtime/07556_NativeStackView.js";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let obj1, tmp3, tmp4, trackResult;

let c10;
let unpackModuleId;
const View = react_native.View;
const constants = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
const AnalyticEvents = Constants.AnalyticEvents;
const SearchNavigatorScreens = SearchNavigatorConstants.SearchNavigatorScreens;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = Object.freeze({});
let closure_13 = NativeStackView.createNativeStackNavigator();
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let tmp6;
      const obj = channelId(576);
      const cResult = obj.c(5);
      const tmp = channelId;
      channelId = channelId.channelId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function o() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(573);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      let tmp8 = null;
      if (null != stateFromStores) {
        let tmp9;
        if (cResult[3] !== stateFromStores) {
          const obj2 = { channel: stateFromStores };
          const tmp12 = closure_10(closure_15, obj2);
          cResult[3] = stateFromStores;
          cResult[4] = tmp12;
          tmp9 = tmp12;
        } else {
          tmp9 = cResult[4];
        }
        tmp8 = tmp9;
      }
      return tmp8;
    }
  : (channelId) => {
      channelId = channelId.channelId;
      const items = [ChannelStore];
      const obj = channelId(573);
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
      let tmp2 = null;
      if (null != stateFromStores) {
        const obj2 = { channel: stateFromStores };
        tmp2 = closure_10(closure_15, obj2);
      }
      return tmp2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let tmp5;
      let obj = channel(576);
      const cResult = obj.c(5);
      channel = channel.channel;
      const obj2 = channel(6772);
      const canStartThread = obj2.useCanStartThread(channel);
      if (cResult[0] !== channel) {
        const fn = function t() {
          const obj = navigateToThreadCreation;
          const result = obj.navigateToThreadCreation(channel, "Thread Browser Toolbar");
        };
        cResult[0] = channel;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      let tmp6 = null;
      if (canStartThread) {
        let tmp8;
        let tmp10;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(channel(1126).t.rBIGBL);
          cResult[2] = stringResult;
          tmp8 = stringResult;
        } else {
          tmp8 = cResult[2];
        }
        if (cResult[3] !== tmp5) {
          const obj3 = { accessibilityLabel: tmp8, onPress: tmp5, source: AssetRegistryDefault };
          const HeaderIconButton = tmp(7498).HeaderIconButton;
          const tmp13 = closure_10(HeaderIconButton, obj3);
          cResult[3] = tmp5;
          cResult[4] = tmp13;
          tmp10 = tmp13;
        } else {
          tmp10 = cResult[4];
        }
        tmp6 = tmp10;
      }
      return tmp6;
    }
  : (channel) => {
      let intl;
      channel = channel.channel;
      let obj = channel(6772);
      [][0] = channel;
      const canStartThread = obj.useCanStartThread(channel);
      let tmp5 = null;
      if (canStartThread) {
        const obj2 = {
          accessibilityLabel: intl.string(channel(1126).t.rBIGBL),
          onPress: tmp4,
          source: AssetRegistryDefault,
        };
        const HeaderIconButton = tmp(7498).HeaderIconButton;
        intl = tmp(1126).intl;
        tmp5 = closure_10(HeaderIconButton, obj2);
      }
      return tmp5;
    };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (navigation) => {
        let Screen;
        let applicationId;
        let expandTopic;
        let search;
        let source;
        let tmp = navigation;
        let obj = navigation(source[10]);
        const cResult = obj.c(74);
        navigation = navigation.navigation;
        let params = navigation.route.params;
        const channelId = params.channelId;
        ({ applicationId, search, expandTopic, source } = params);
        let DETAILS = params.initialRouteName;
        if (undefined === DETAILS) {
          DETAILS = constants.DETAILS;
        }
        if (cResult[0] === channelId) {
          if (cResult[1] === DETAILS) {
            let tmp5;
            let tmp6;
            let tmp9;
            if (cResult[2] === source) {
              tmp5 = cResult[3];
              tmp6 = cResult[4];
            }
            const effect = react.useEffect(tmp5, tmp6);
            if (cResult[5] !== navigation) {
              class C {
                constructor() {
                  return navigation.addListener("beforeRemove", () => {
                    /* body not rendered: F147781 */
                  });
                }
              }
              const items = [navigation];
              cResult[5] = navigation;
              cResult[6] = C;
              cResult[7] = items;
              tmp9 = items;
            } else {
              class C {
                constructor() {
                  return navigation.addListener("beforeRemove", () => {
                    /* body not rendered: F147781 */
                  });
                }
              }
              tmp9 = cResult[7];
            }
            const effect1 = react.useEffect(C, tmp9);
            let tmpResult = tmp(source[19]);
            const channelSettingsScreensStyles = tmpResult.useChannelSettingsScreensStyles();
            if (cResult[8] !== channelId) {
              class C {
                constructor() {
                  return navigation.addListener("beforeRemove", () => {
                    /* body not rendered: F147781 */
                  });
                }
              }
              let obj3 = { channelId };
              tmp13[0] = obj3;
              cResult[8] = channelId;
              cResult[9] = tmp13;
            } else {
              class C {
                constructor() {
                  return navigation.addListener("beforeRemove", () => {
                    /* body not rendered: F147781 */
                  });
                }
              }
            }
            let tmpResult2 = tmp(source[20]);
            const accessibilityNativeStackOptions = tmpResult2.useAccessibilityNativeStackOptions();
            if (cResult[10] !== channelId) {
              class C {
                constructor() {
                  return navigation.addListener("beforeRemove", () => {
                    /* body not rendered: F147781 */
                  });
                }
              }
              let channel = ChannelStore.getChannel(channelId);
              if (channel != null) {
                class C {
                  constructor() {
                    return navigation.addListener("beforeRemove", () => {
                      /* body not rendered: F147781 */
                    });
                  }
                }
              }
              cResult[10] = channelId;
              cResult[11] = undefined;
            } else {
              class C {
                constructor() {
                  return navigation.addListener("beforeRemove", () => {
                    /* body not rendered: F147781 */
                  });
                }
              }
            }
            if (cResult[12] === channelId) {
              class C {
                constructor() {
                  return navigation.addListener("beforeRemove", () => {
                    /* body not rendered: F147781 */
                  });
                }
              }
            }
            if (null != tmp15) {
              class C {
                constructor() {
                  return navigation.addListener("beforeRemove", () => {
                    /* body not rendered: F147781 */
                  });
                }
              }
              const channelSettingsScreens = obj6.getChannelSettingsScreens(
                channelId,
                tmp15,
                channelSettingsScreensStyles,
              );
            } else {
              class C {
                constructor() {
                  return navigation.addListener("beforeRemove", () => {
                    /* body not rendered: F147781 */
                  });
                }
              }
            }
            cResult[12] = channelId;
            cResult[13] = tmp15;
            cResult[14] = channelSettingsScreensStyles;
            class N {
              constructor() {
                channel = closure_6.getChannel(channelId);
                if (null != channel) {
                  tmp = closure_1;
                  tmp2 = closure_2;
                  tmp3 = closure_1(closure_2[17]);
                  tmp4 = AnalyticEvents;
                  obj1 = {
                    channel_id: null,
                    guild_id: null,
                    channel_type: null,
                    initial_route_name: null,
                    source: null,
                  };
                  obj1.channel_id = channel.id;
                  track = tmp3.track;
                  CHANNEL_SIDEBAR_VIEWED = AnalyticEvents.CHANNEL_SIDEBAR_VIEWED;
                  obj1.guild_id = channel.getGuildId();
                  obj1.channel_type = channel.type;
                  tmp5 = DETAILS;
                  obj1.initial_route_name = DETAILS;
                  tmp6 = source;
                  obj1.source = source;
                  trackResult = track(CHANNEL_SIDEBAR_VIEWED, obj1);
                }
                return;
              }
            }
          }
        }
        class N {
          constructor() {
            channel = closure_6.getChannel(channelId);
            if (null != channel) {
              tmp = closure_1;
              tmp2 = closure_2;
              tmp3 = closure_1(closure_2[17]);
              tmp4 = AnalyticEvents;
              obj1 = { channel_id: null, guild_id: null, channel_type: null, initial_route_name: null, source: null };
              obj1.channel_id = channel.id;
              track = tmp3.track;
              CHANNEL_SIDEBAR_VIEWED = AnalyticEvents.CHANNEL_SIDEBAR_VIEWED;
              obj1.guild_id = channel.getGuildId();
              obj1.channel_type = channel.type;
              tmp5 = DETAILS;
              obj1.initial_route_name = DETAILS;
              tmp6 = source;
              obj1.source = source;
              trackResult = track(CHANNEL_SIDEBAR_VIEWED, obj1);
            }
            return;
          }
        }
        const items1 = [channelId, DETAILS, source];
        cResult[0] = channelId;
        cResult[1] = DETAILS;
        cResult[2] = source;
        cResult[3] = N;
        cResult[4] = items1;
        tmp6 = items1;
        tmp5 = N;
      }
    : (navigation) => {
        let Navigator;
        let Screen;
        let applicationId;
        let expandTopic;
        let items4;
        let items5;
        let obj5;
        let obj6;
        let search;
        navigation = navigation.navigation;
        let params = navigation.route.params;
        const channelId = params.channelId;
        const source = params.source;
        let DETAILS = params.initialRouteName;
        ({ applicationId, search, expandTopic } = params);
        if (DETAILS === undefined) {
          DETAILS = constants.DETAILS;
        }
        let channelSettingsScreensStyles;
        let obj = channelSettingsScreensStyles;
        const items = [channelId, DETAILS, source];
        const effect = channelSettingsScreensStyles.useEffect(() => {
          const channel = ChannelStore.getChannel(channelId);
          if (null != channel) {
            const obj = {
              channel_id: channel.id,
              guild_id: channel.getGuildId(),
              channel_type: channel.type,
              initial_route_name: DETAILS,
              source,
            };
            const track = AnalyticsUtilsDefault.track;
            const CHANNEL_SIDEBAR_VIEWED = AnalyticEvents.CHANNEL_SIDEBAR_VIEWED;
            AnalyticsUtilsDefault;
            track(CHANNEL_SIDEBAR_VIEWED, obj);
          }
        }, items);
        const items1 = [navigation];
        const effect1 = channelSettingsScreensStyles.useEffect(
          () =>
            navigation.addListener("beforeRemove", () => {
              const obj = channelId(source[18]);
              return obj.close();
            }),
          items1,
        );
        let obj2 = navigation(source[19]);
        channelSettingsScreensStyles = obj2.useChannelSettingsScreensStyles();
        const items2 = [channelId];
        const memo = channelSettingsScreensStyles.useMemo(() => {
          const obj = { initialParams: obj2 };
          return obj;
        }, items2);
        let obj3 = navigation(source[20]);
        const accessibilityNativeStackOptions = obj3.useAccessibilityNativeStackOptions();
        let channel = ChannelStore.getChannel(channelId);
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        const items3 = [channelId, guildId, channelSettingsScreensStyles];
        const memo1 = obj.useMemo(() => {
          let channelSettingsScreens;
          if (null != guildId) {
            const obj2 = ChannelSettingsModal;
            channelSettingsScreens = obj2.getChannelSettingsScreens(channelId, tmp, channelSettingsScreensStyles);
          } else {
            channelSettingsScreens = {};
          }
          return channelSettingsScreens;
        }, items3);
        const tmp4Result = navigation(source[22]);
        tmp4Result.useNavigatorBackPressHandler(() => {
          const obj = navigation(source[21]);
          const rootNavigationRef = obj.getRootNavigationRef();
          let tmp2 = !(null == rootNavigationRef || !rootNavigationRef.isReady());
          null == rootNavigationRef || !rootNavigationRef.isReady();
          if (tmp2) {
            let flag = rootNavigationRef.canGoBack();
            if (flag) {
              rootNavigationRef.goBack();
              flag = true;
            }
            tmp2 = flag;
          }
          return tmp2;
        });
        const rect = channelId(tmp5[23])();
        const obj4 = { style: items4, children: closure_11(Navigator, obj5) };
        items4 = [channelSettingsScreensStyles.container, { paddingLeft: rect.left, paddingRight: rect.right }];
        Navigator = Screen.Navigator;
        obj5 = { id: "channel-details-navigator", screenOptions: obj6, initialRouteName: DETAILS, children: items5 };
        obj6 = { headerTitle: navigation(source[15]).renderGenericTitle, headerTitleAlign: "center" };
        let merged = Object.assign(accessibilityNativeStackOptions);
        items5 = [, , , , , ,];
        const obj7 = {
          initialParams: { channelId, search, expandTopic },
          name: constants.DETAILS,
          options: { headerShown: false },
          getComponent() {
            return navigation(source[24]).default;
          },
        };
        items5[0] = closure_10(Screen.Screen, obj7);
        const obj8 = {
          name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
          options(route) {
            let obj2;
            route = route.route;
            let obj = {
              header(arg0) {
                let obj2;
                const obj = { shouldHandleSafeArea: obj2.isAndroid() };
                const renderHeader = route(source[15]).renderHeader;
                route(source[15]);
                const merged = Object.assign(arg0);
                obj2 = route(source[25]);
                return renderHeader(obj);
              },
              headerTitle() {
                const obj = { channelId: route.params.channelId };
                return closure_2_10(channelId(source[26]), obj);
              },
              headerLeft: obj2.getRenderBackImage(navigation),
            };
            navigation = route.navigation;
            obj2 = route(source[15]);
            return obj;
          },
          getComponent() {
            return navigation(source[27]).default;
          },
        };
        items5[1] = closure_10(Screen.Screen, obj8);
        const obj9 = {
          name: navigation(source[28]).ConversationNavigatorScreens.FOCUS,
          options(arg0) {
            let route;
            ({ route, navigation } = arg0);
            const obj = navigation(source[29]);
            return obj.conversationNavigatorFocusHeaderOptions(route, navigation);
          },
          getComponent() {
            return navigation(source[30]).default;
          },
        };
        items5[2] = closure_10(Screen.Screen, obj9);
        const obj10 = {
          name: constants.PINNED_MESSAGES,
          initialParams: { channelId },
          options(navigation) {
            let intl;
            let renderModalCloseImage;
            navigation = navigation.navigation;
            const route = navigation.route;
            const obj = { title: intl.string(intl2.t["mp1N/2"]), headerLeft: renderModalCloseImage };
            intl = intl2.intl;
            if (DETAILS === route.name) {
              const tmpResult = HeaderShared;
              renderModalCloseImage = tmpResult.getRenderModalCloseImage(navigation);
            } else {
              const tmpResult2 = HeaderShared;
              renderModalCloseImage = tmpResult2.getRenderModalBackImage(navigation);
            }
            return obj;
          },
          getComponent() {
            return navigation(source[31]).default;
          },
        };
        items5[3] = closure_10(Screen.Screen, obj10);
        const obj11 = {
          initialParams: { channelId, applicationId },
          name: constants.MUTE,
          options(navigation) {
            let intl;
            let renderModalCloseImage;
            navigation = navigation.navigation;
            const route = navigation.route;
            const obj = { title: intl.string(intl2.t.w4m945), headerLeft: renderModalCloseImage };
            intl = intl2.intl;
            if (DETAILS === route.name) {
              const tmpResult = HeaderShared;
              renderModalCloseImage = tmpResult.getRenderModalCloseImage(navigation);
            } else {
              const tmpResult2 = HeaderShared;
              renderModalCloseImage = tmpResult2.getRenderModalBackImage(navigation);
            }
            return obj;
          },
          getComponent() {
            return navigation(source[32]).default;
          },
        };
        items5[4] = closure_10(Screen.Screen, obj11);
        Screen = Screen.Screen;
        const obj12 = {
          name: constants.THREADS,
          options(arg0) {
            let intl;
            let renderModalCloseImage;
            let route;
            ({ navigation, route } = arg0);
            let obj = {
              title: intl.string(intl2.t.B2panI),
              headerLeft: renderModalCloseImage,
              headerRight() {
                const obj = { channelId: route.params.channelId };
                return closure_2_10(closure_2_14, obj);
              },
            };
            intl = intl2.intl;
            if (DETAILS === route.name) {
              const tmpResult = HeaderShared;
              renderModalCloseImage = tmpResult.getRenderModalCloseImage(navigation);
            } else {
              const tmpResult2 = HeaderShared;
              renderModalCloseImage = tmpResult2.getRenderModalBackImage(navigation);
            }
            return obj;
          },
          getComponent() {
            return navigation(source[33]).default;
          },
        };
        const merged1 = Object.assign(memo);
        items5[5] = closure_10(Screen, obj12);
        const entries = Object.entries(memo1);
        items5[6] = entries.map((item) => {
          let tmp;
          [tmp] = item;
          let obj = {
            name: tmp,
            options(navigation) {
              let renderModalCloseImage;
              navigation = navigation.navigation;
              const obj = { title: channelId.title, headerLeft: renderModalCloseImage };
              if (DETAILS === closure_1_0) {
                const obj3 = HeaderShared;
                renderModalCloseImage = obj3.getRenderModalCloseImage(navigation);
              } else {
                const obj2 = HeaderShared;
                renderModalCloseImage = obj2.getRenderModalBackImage(navigation);
              }
              return obj;
            },
            children(route) {
              let params = route.route.params;
              navigation = route.navigation;
              if (params == null) {
                params = closure_12;
              }
              return channelId.render(params, navigation);
            },
          };
          return closure_1_10(Screen.Screen, obj, tmp);
        });
        return closure_10(guildId, obj4);
      },
);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsNavigator.tsx");

export default memoResult;
