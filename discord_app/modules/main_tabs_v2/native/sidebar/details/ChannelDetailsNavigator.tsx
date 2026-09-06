// === Module 16807: ChannelDetailsNavigator ===

// Module 16807 (ChannelDetailsNavigator)
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import HeaderShared from "HeaderShared" /* 7863 */;
import navigateToThreadCreation from "navigateToThreadCreation" /* 11222 */;
import _modDef12773 from "module_12773" /* 12773 */;
import ChannelSettingsModal from "ChannelSettingsModal" /* 16808 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
function ConnectedCreateThreadHeaderButton(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(563);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { channel: stateFromStores };
    tmp2 = closure_9(CreateThreadHeaderButton, obj);
  }
  return tmp2;
}
function CreateThreadHeaderButton(channel) {
  channel = channel.channel;
  let obj = channel(7269);
  [][0] = channel;
  const canStartThread = obj.useCanStartThread(channel);
  let tmp5 = null;
  if (canStartThread) {
    obj = { accessibilityLabel: null, onPress: null, source: null };
    const intl = tmp(1114).intl;
    obj.accessibilityLabel = intl.string(tmp(1114).t.rBIGBL);
    obj.onPress = tmp4;
    obj.source = _modDef12773;
    tmp5 = closure_9(tmp(7863).HeaderIconButton, obj);
  }
  return tmp5;
}
const View = fn(17).View;
const constants = fn(10916).ChannelDetailsNavigatorScreens;
const AnalyticEvents = fn(1074).AnalyticEvents;
const SearchNavigatorScreens = fn(16643).SearchNavigatorScreens;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let closure_11 = Object.freeze({});
const NativeStackNavigator = fn(7913);
let closure_12 = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsNavigator.tsx");

export default noop.memo((navigation) => {
  navigation = navigation.navigation;
  let params = navigation.route.params;
  const channelId = params.channelId;
  const source = params.source;
  let DETAILS = params.initialRouteName;
  ({ applicationId, search, expandTopic } = params);
  if (DETAILS === undefined) {
    DETAILS = constants.DETAILS;
  }
  let guildId;
  let obj = DETAILS;
  const items = [channelId, DETAILS, source];
  const effect = DETAILS.useEffect(() => {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      const obj = { channel_id: channel.id, guild_id: channel.getGuildId(), channel_type: channel.type, initial_route_name: DETAILS, source };
      AnalyticsUtilsDefault.track(AnalyticEvents.CHANNEL_SIDEBAR_VIEWED, obj);
    }
  }, items);
  const items1 = [navigation];
  const effect1 = DETAILS.useEffect(() => navigation.addListener("beforeRemove", () => channelId(source[15]).close()), items1);
  let obj1 = navigation(source[16]);
  const channelSettingsScreensStyles = obj1.useChannelSettingsScreensStyles();
  const items2 = [channelId];
  const memo = DETAILS.useMemo(() => {
    let obj = { initialParams: null };
    obj = { channelId };
    obj.initialParams = obj;
    return obj;
  }, items2);
  let obj2 = navigation(source[17]);
  const accessibilityNativeStackOptions = obj2.useAccessibilityNativeStackOptions();
  let channel = guildId.getChannel(channelId);
  guildId = undefined;
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
  navigation(source[18]).useNavigatorBackPressHandler(() => {
    const rootNavigationRef = navigation(source[19]).getRootNavigationRef();
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
  const rect = channelId(tmp5[20])();
  obj = { style: null, children: null };
  const items4 = [channelSettingsScreensStyles.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj.style = items4;
  obj = { id: "channel-details-navigator", screenOptions: null, initialRouteName: null, children: null };
  obj1 = { headerTitle: tmp4(tmp5[11]).renderGenericTitle, headerTitleAlign: "center" };
  let merged = Object.assign(accessibilityNativeStackOptions);
  obj.screenOptions = obj1;
  obj.initialRouteName = DETAILS;
  obj2 = {
    initialParams: { channelId, search, expandTopic },
    name: constants.DETAILS,
    options: { headerShown: false },
    getComponent() {
      return navigation(source[21]).default;
    }
  };
  const items5 = [
    closure_9(Screen.Screen, obj2),
    closure_9(Screen.Screen, {
      name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
      options(route) {
        route = route.route;
        let obj = {
          header(arg0) {
            route(7863);
            const obj = {};
            const merged = Object.assign(arg0);
            obj.shouldHandleSafeArea = route(1115).isAndroid();
            return obj.renderHeader(obj);
          },
          headerTitle() {
            return closure_2_9(channelId(source[23]), { channelId: route.params.channelId });
          },
          headerLeft: route(source[11]).getRenderBackImage(route.navigation)
        };
        return obj;
      },
      getComponent() {
        return navigation(source[24]).default;
      }
    }),
    closure_9(Screen.Screen, {
      name: constants.PINNED_MESSAGES,
      initialParams: { channelId },
      options(navigation) {
        navigation = navigation.navigation;
        const obj = { title: null, headerLeft: null };
        const intl = util.intl;
        obj.title = intl.string(util.t["mp1N/2"]);
        if (DETAILS === navigation.route.name) {
          let tmpResult = HeaderShared;
          let renderModalCloseImage = tmpResult.getRenderModalCloseImage(navigation);
        } else {
          tmpResult = HeaderShared;
          renderModalCloseImage = tmpResult.getRenderModalBackImage(navigation);
        }
        obj.headerLeft = renderModalCloseImage;
        return obj;
      },
      getComponent() {
        return navigation(source[25]).default;
      }
    }),
    closure_9(Screen.Screen, {
      initialParams: { channelId, applicationId },
      name: constants.MUTE,
      options(navigation) {
        navigation = navigation.navigation;
        const obj = { title: null, headerLeft: null };
        const intl = util.intl;
        obj.title = intl.string(util.t.w4m945);
        if (DETAILS === navigation.route.name) {
          let tmpResult = HeaderShared;
          let renderModalCloseImage = tmpResult.getRenderModalCloseImage(navigation);
        } else {
          tmpResult = HeaderShared;
          renderModalCloseImage = tmpResult.getRenderModalBackImage(navigation);
        }
        obj.headerLeft = renderModalCloseImage;
        return obj;
      },
      getComponent() {
        return navigation(source[26]).default;
      }
    }),
  ,

  ];
  const obj6 = {};
  const merged1 = Object.assign(memo);
  obj6.name = constants.THREADS;
  obj6.options = function options(arg0) {
    ({ navigation, route } = arg0);
    const obj = { title: null, headerLeft: null, headerRight: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.B2panI);
    if (DETAILS === route.name) {
      let tmpResult = HeaderShared;
      let renderModalCloseImage = tmpResult.getRenderModalCloseImage(navigation);
    } else {
      tmpResult = HeaderShared;
      renderModalCloseImage = tmpResult.getRenderModalBackImage(navigation);
    }
    obj.headerLeft = renderModalCloseImage;
    obj.headerRight = function headerRight() {
      return closure_2_9(ConnectedCreateThreadHeaderButton, { channelId: route.params.channelId });
    };
    return obj;
  };
  obj6.getComponent = function getComponent() {
    return navigation(source[27]).default;
  };
  items5[4] = closure_9(Screen.Screen, obj6);
  const entries = Object.entries(memo1);
  items5[5] = entries.map((item) => {
    [tmp, ] = item;
    return closure_1_9(Screen.Screen, {
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
          params = closure_11;
        }
        return channelId.render(params, route.navigation);
      }
    }, tmp);
  });
  obj.children = items5;
  obj.children = closure_10(Screen.Navigator, obj);
  return closure_9(channelSettingsScreensStyles, obj);
});