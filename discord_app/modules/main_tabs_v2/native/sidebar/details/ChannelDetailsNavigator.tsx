// === Module 16981: ChannelDetailsNavigator ===

// Module 16981 (ChannelDetailsNavigator)
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import HeaderShared from "HeaderShared" /* 7498 */;
import navigateToThreadCreation from "navigateToThreadCreation" /* 11019 */;
import _modDef12442 from "module_12442" /* 12442 */;
import ChannelSettingsModal from "ChannelSettingsModal" /* 16982 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;

require = fn;
const View = fn(17).View;
const constants = fn(10653).ChannelDetailsNavigatorScreens;
const AnalyticEvents = fn(1085).AnalyticEvents;
const SearchNavigatorScreens = fn(16813).SearchNavigatorScreens;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let closure_12 = Object.freeze({});
const NativeStackNavigator = fn(7556);
let closure_13 = NativeStackNavigator.createNativeStackNavigator();
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(576).c(5);
  channelId = channelId.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function o() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = channelId(576);
  const stateFromStores = channelId(573).useStateFromStores(first, tmp6);
  if (null == stateFromStores) {
    return null;
  } else if (cResult[3] !== stateFromStores) {
    const obj2 = { channel: stateFromStores };
    const tmp11 = closure_10(closure_15, obj2);
    cResult[3] = stateFromStores;
    cResult[4] = tmp11;
  }
  const tmpResult = channelId(573);
}) : ((channelId) => {
  channelId = channelId.channelId;
  const items = [ChannelStore];
  const stateFromStores = channelId(573).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores };
    tmp2 = closure_10(closure_15, obj2);
  }
  return tmp2;
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let HeaderIconButton = channel;
  let tmp = dependencyMap;
  const cResult = channel(576).c(5);
  channel = channel.channel;
  const obj = channel(576);
  const canStartThread = channel(6772).useCanStartThread(channel);
  if (cResult[0] !== channel) {
    const fn = function t() {
      const result = navigateToThreadCreation.navigateToThreadCreation(channel, "Thread Browser Toolbar");
    };
    cResult[0] = channel;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (!canStartThread) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = HeaderIconButton(1126).intl;
      const stringResult = intl.string(HeaderIconButton(1126).t.rBIGBL);
      cResult[2] = stringResult;
      let tmp6 = stringResult;
    } else {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== tmp4) {
      HeaderIconButton = HeaderIconButton(7498).HeaderIconButton;
      const obj3 = { accessibilityLabel: tmp6, onPress: tmp4, source: null };
      tmp = _modDef12442;
      obj3.source = tmp;
      const tmp11 = closure_10(HeaderIconButton, obj3);
      cResult[3] = tmp4;
      cResult[4] = tmp11;
    }
  }
  const obj2 = channel(6772);
}) : ((channel) => {
  channel = channel.channel;
  [][0] = channel;
  const canStartThread = channel(6772).useCanStartThread(channel);
  let tmp5 = null;
  if (canStartThread) {
    const obj2 = { accessibilityLabel: null, onPress: null, source: null };
    const intl = tmp(1126).intl;
    obj2.accessibilityLabel = intl.string(tmp(1126).t.rBIGBL);
    obj2.onPress = tmp4;
    obj2.source = _modDef12442;
    tmp5 = closure_10(tmp(7498).HeaderIconButton, obj2);
  }
  return tmp5;
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsNavigator.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((navigation) => {
  const cResult = navigation(source[10]).c(74);
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
      if (cResult[2] === source) {
        let tmp5 = cResult[3];
        let tmp6 = cResult[4];
      }
      const effect = noop.useEffect(tmp5, tmp6);
      if (cResult[5] !== navigation) {
        class C {
          constructor() {
            return navigation.addListener("beforeRemove", () => { ... });
          }
        }
        const items = [navigation];
        cResult[5] = navigation;
        cResult[6] = C;
        cResult[7] = items;
        let tmp9 = items;
      } else {
        class C {
          constructor() {
            return navigation.addListener("beforeRemove", () => { ... });
          }
        }
        tmp9 = cResult[7];
      }
      const effect1 = noop.useEffect(C, tmp9);
      const channelSettingsScreensStyles = tmp(source[19]).useChannelSettingsScreensStyles();
      if (cResult[8] !== channelId) {
        class C {
          constructor() {
            return navigation.addListener("beforeRemove", () => { ... });
          }
        }
        let obj3 = { channelId };
        tmp13[0] = obj3;
        cResult[8] = channelId;
        cResult[9] = tmp13;
      } else {
        class C {
          constructor() {
            return navigation.addListener("beforeRemove", () => { ... });
          }
        }
      }
      let tmpResult = tmp(source[19]);
      const accessibilityNativeStackOptions = tmp(source[20]).useAccessibilityNativeStackOptions();
      if (cResult[10] !== channelId) {
        class C {
          constructor() {
            return navigation.addListener("beforeRemove", () => { ... });
          }
        }
        let channel = ChannelStore.getChannel(channelId);
        if (channel != null) {
          class C {
            constructor() {
              return navigation.addListener("beforeRemove", () => { ... });
            }
          }
        }
        cResult[10] = channelId;
        cResult[11] = undefined;
      } else {
        class C {
          constructor() {
            return navigation.addListener("beforeRemove", () => { ... });
          }
        }
      }
      if (cResult[12] === channelId) {
        class C {
          constructor() {
            return navigation.addListener("beforeRemove", () => { ... });
          }
        }
      }
      if (null != tmp15) {
        class C {
          constructor() {
            return navigation.addListener("beforeRemove", () => { ... });
          }
        }
        const channelSettingsScreens = obj6.getChannelSettingsScreens(channelId, tmp15, channelSettingsScreensStyles);
      } else {
        class C {
          constructor() {
            return navigation.addListener("beforeRemove", () => { ... });
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
            obj2 = closure_1(closure_2[17]);
            tmp3 = AnalyticEvents;
            obj1 = { channel_id: null, guild_id: null, channel_type: null, initial_route_name: null, source: null };
            obj1.channel_id = channel.id;
            obj1.guild_id = channel.getGuildId();
            obj1.channel_type = channel.type;
            tmp4 = DETAILS;
            obj1.initial_route_name = DETAILS;
            tmp5 = source;
            obj1.source = source;
            trackResult = obj2.track(AnalyticEvents.CHANNEL_SIDEBAR_VIEWED, obj1);
          }
          return;
        }
      }
      let tmpResult2 = tmp(source[20]);
    }
  }
  class N {
    constructor() {
      channel = closure_6.getChannel(channelId);
      if (null != channel) {
        tmp = closure_1;
        tmp2 = closure_2;
        obj2 = closure_1(closure_2[17]);
        tmp3 = AnalyticEvents;
        obj1 = { channel_id: null, guild_id: null, channel_type: null, initial_route_name: null, source: null };
        obj1.channel_id = channel.id;
        obj1.guild_id = channel.getGuildId();
        obj1.channel_type = channel.type;
        tmp4 = DETAILS;
        obj1.initial_route_name = DETAILS;
        tmp5 = source;
        obj1.source = source;
        trackResult = obj2.track(AnalyticEvents.CHANNEL_SIDEBAR_VIEWED, obj1);
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
  let obj = navigation(source[10]);
}) : ((navigation) => {
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
  const items = [channelId, DETAILS, source];
  const effect = channelSettingsScreensStyles.useEffect(() => {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      const obj = { channel_id: channel.id, guild_id: channel.getGuildId(), channel_type: channel.type, initial_route_name: DETAILS, source };
      AnalyticsUtilsDefault.track(AnalyticEvents.CHANNEL_SIDEBAR_VIEWED, obj);
    }
  }, items);
  const items1 = [navigation];
  const effect1 = channelSettingsScreensStyles.useEffect(() => navigation.addListener("beforeRemove", () => channelId(source[18]).close()), items1);
  channelSettingsScreensStyles = navigation(source[19]).useChannelSettingsScreensStyles();
  const items2 = [channelId];
  const memo = channelSettingsScreensStyles.useMemo(() => {
    const obj = { initialParams: { channelId } };
    return obj;
  }, items2);
  let obj = channelSettingsScreensStyles;
  let obj2 = navigation(source[19]);
  const accessibilityNativeStackOptions = navigation(source[20]).useAccessibilityNativeStackOptions();
  let channel = ChannelStore.getChannel(channelId);
  let guildId;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  const items3 = [channelId, guildId, channelSettingsScreensStyles];
  const memo1 = obj.useMemo(() => {
    if (null != guildId) {
      let channelSettingsScreens = ChannelSettingsModal.getChannelSettingsScreens(channelId, tmp, channelSettingsScreensStyles);
    } else {
      channelSettingsScreens = {};
    }
    return channelSettingsScreens;
  }, items3);
  let obj3 = navigation(source[20]);
  navigation(source[22]).useNavigatorBackPressHandler(() => {
    const rootNavigationRef = navigation(source[21]).getRootNavigationRef();
    const tmp = null == rootNavigationRef || !rootNavigationRef.isReady();
    let tmp2 = !tmp;
    if (!tmp) {
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
  const obj4 = { style: null, children: null };
  const items4 = [channelSettingsScreensStyles.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj4.style = items4;
  const obj5 = { id: "channel-details-navigator", screenOptions: null, initialRouteName: null, children: null };
  const tmp4Result = navigation(source[22]);
  let merged = Object.assign(accessibilityNativeStackOptions);
  obj5.screenOptions = { headerTitle: navigation(source[15]).renderGenericTitle, headerTitleAlign: "center" };
  obj5.initialRouteName = DETAILS;
  const items5 = [
    closure_10(Screen.Screen, {
      initialParams: { channelId, search, expandTopic },
      name: constants.DETAILS,
      options: { headerShown: false },
      getComponent() {
        return navigation(source[24]).default;
      }
    }),
    closure_10(Screen.Screen, {
      name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
      options(route) {
        route = route.route;
        let obj = {
          header(arg0) {
            const obj2 = {};
            const merged = Object.assign(arg0);
            const obj = route(7498);
            obj2.shouldHandleSafeArea = route(1369).isAndroid();
            return obj.renderHeader(obj2);
          },
          headerTitle() {
            return closure_2_10(channelId(source[26]), { channelId: route.params.channelId });
          },
          headerLeft: route(source[15]).getRenderBackImage(route.navigation)
        };
        return obj;
      },
      getComponent() {
        return navigation(source[27]).default;
      }
    }),
  ,
  ,
  ,
  ,

  ];
  const obj6 = { headerTitle: navigation(source[15]).renderGenericTitle, headerTitleAlign: "center" };
  const obj7 = {
    initialParams: { channelId, search, expandTopic },
    name: constants.DETAILS,
    options: { headerShown: false },
    getComponent() {
      return navigation(source[24]).default;
    }
  };
  const obj8 = {
    name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
    options(route) {
      route = route.route;
      let obj = {
        header(arg0) {
          const obj2 = {};
          const merged = Object.assign(arg0);
          const obj = route(7498);
          obj2.shouldHandleSafeArea = route(1369).isAndroid();
          return obj.renderHeader(obj2);
        },
        headerTitle() {
          return closure_2_10(channelId(source[26]), { channelId: route.params.channelId });
        },
        headerLeft: route(source[15]).getRenderBackImage(route.navigation)
      };
      return obj;
    },
    getComponent() {
      return navigation(source[27]).default;
    }
  };
  items5[2] = closure_10(Screen.Screen, {
    name: navigation(source[28]).ConversationNavigatorScreens.FOCUS,
    options(arg0) {
      ({ route, navigation } = arg0);
      return navigation(source[29]).conversationNavigatorFocusHeaderOptions(route, navigation);
    },
    getComponent() {
      return navigation(source[30]).default;
    }
  });
  items5[3] = closure_10(Screen.Screen, {
    name: constants.PINNED_MESSAGES,
    initialParams: { channelId },
    options(navigation) {
      navigation = navigation.navigation;
      const obj = { title: null, headerLeft: null };
      const intl = util.intl;
      obj.title = intl.string(util.t["mp1N/2"]);
      if (DETAILS === navigation.route.name) {
        let renderModalCloseImage = HeaderShared.getRenderModalCloseImage(navigation);
        const tmpResult = HeaderShared;
      } else {
        renderModalCloseImage = HeaderShared.getRenderModalBackImage(navigation);
        const tmpResult2 = HeaderShared;
      }
      obj.headerLeft = renderModalCloseImage;
      return obj;
    },
    getComponent() {
      return navigation(source[31]).default;
    }
  });
  items5[4] = closure_10(Screen.Screen, {
    initialParams: { channelId, applicationId },
    name: constants.MUTE,
    options(navigation) {
      navigation = navigation.navigation;
      const obj = { title: null, headerLeft: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.w4m945);
      if (DETAILS === navigation.route.name) {
        let renderModalCloseImage = HeaderShared.getRenderModalCloseImage(navigation);
        const tmpResult = HeaderShared;
      } else {
        renderModalCloseImage = HeaderShared.getRenderModalBackImage(navigation);
        const tmpResult2 = HeaderShared;
      }
      obj.headerLeft = renderModalCloseImage;
      return obj;
    },
    getComponent() {
      return navigation(source[32]).default;
    }
  });
  const obj12 = {};
  const merged1 = Object.assign(memo);
  obj12.name = constants.THREADS;
  obj12.options = function options(arg0) {
    ({ navigation, route } = arg0);
    const obj = { title: null, headerLeft: null, headerRight: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.B2panI);
    if (DETAILS === route.name) {
      let renderModalCloseImage = HeaderShared.getRenderModalCloseImage(navigation);
      const tmpResult = HeaderShared;
    } else {
      renderModalCloseImage = HeaderShared.getRenderModalBackImage(navigation);
      const tmpResult2 = HeaderShared;
    }
    obj.headerLeft = renderModalCloseImage;
    obj.headerRight = function headerRight() {
      return closure_2_10(closure_2_14, { channelId: route.params.channelId });
    };
    return obj;
  };
  obj12.getComponent = function getComponent() {
    return navigation(source[33]).default;
  };
  items5[5] = closure_10(Screen.Screen, obj12);
  const entries = Object.entries(memo1);
  items5[6] = entries.map((item) => {
    [tmp, ] = item;
    return closure_1_10(Screen.Screen, {
      name: tmp,
      options(navigation) {
        navigation = navigation.navigation;
        const obj = { title: channelId.title, headerLeft: null };
        if (DETAILS === closure_1_0) {
          let renderModalCloseImage = HeaderShared.getRenderModalCloseImage(navigation);
        } else {
          renderModalCloseImage = HeaderShared.getRenderModalBackImage(navigation);
        }
        obj.headerLeft = renderModalCloseImage;
        return obj;
      },
      children(route) {
        let params = route.route.params;
        if (params == null) {
          params = closure_12;
        }
        return channelId.render(params, route.navigation);
      }
    }, tmp);
  });
  obj5.children = items5;
  obj4.children = closure_11(Screen.Navigator, obj5);
  return closure_10(guildId, obj4);
}));