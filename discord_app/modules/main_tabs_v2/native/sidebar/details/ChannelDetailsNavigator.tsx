// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsNavigator.tsx
import util from "../../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import HeaderShared from "../../shared_components/HeaderShared.tsx";
import navigateToThreadCreation from "../../../../threads/native/navigateToThreadCreation.tsx";
import _modDef12271 from "../../../../../../_runtime/metro/12271__.js";
import ChannelSettingsModal from "../../../../../components_native/channel_settings/ChannelSettingsModal.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

require = fn;
function ConnectedCreateThreadHeaderButton(channelId) {
  channelId = channelId.channelId;
  const items = [ChannelStore];
  const stateFromStores = channelId(563).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores };
    tmp2 = closure_9(CreateThreadHeaderButton, obj2);
  }
  return tmp2;
}
function CreateThreadHeaderButton(channel) {
  channel = channel.channel;
  [][0] = channel;
  const canStartThread = channel(6682).useCanStartThread(channel);
  let tmp5 = null;
  if (canStartThread) {
    const obj2 = { accessibilityLabel: null, onPress: null, source: null };
    const intl = tmp(1115).intl;
    obj2.accessibilityLabel = intl.string(tmp(1115).t.rBIGBL);
    obj2.onPress = tmp4;
    obj2.source = _modDef12271;
    tmp5 = closure_9(tmp(7283).HeaderIconButton, obj2);
  }
  return tmp5;
}
const View = fn(17).View;
const constants = fn(10366).ChannelDetailsNavigatorScreens;
const AnalyticEvents = fn(1074).AnalyticEvents;
const SearchNavigatorScreens = fn(16426).SearchNavigatorScreens;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let closure_11 = Object.freeze({});
const NativeStackNavigator = fn(7334);
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
  const items = [channelId, DETAILS, source];
  const effect = DETAILS.useEffect(() => {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      const obj = {
        channel_id: channel.id,
        guild_id: channel.getGuildId(),
        channel_type: channel.type,
        initial_route_name: DETAILS,
        source,
      };
      AnalyticsUtilsDefault.track(AnalyticEvents.CHANNEL_SIDEBAR_VIEWED, obj);
    }
  }, items);
  const items1 = [navigation];
  const effect1 = DETAILS.useEffect(
    () => navigation.addListener("beforeRemove", () => channelId(source[15]).close()),
    items1,
  );
  const channelSettingsScreensStyles = navigation(source[16]).useChannelSettingsScreensStyles();
  const items2 = [channelId];
  const memo = DETAILS.useMemo(() => {
    const obj = { initialParams: { channelId } };
    return obj;
  }, items2);
  let obj = DETAILS;
  let obj2 = navigation(source[16]);
  const accessibilityNativeStackOptions = navigation(source[17]).useAccessibilityNativeStackOptions();
  let channel = guildId.getChannel(channelId);
  guildId = undefined;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  const items3 = [channelId, guildId, channelSettingsScreensStyles];
  const memo1 = obj.useMemo(() => {
    if (null != guildId) {
      let channelSettingsScreens = ChannelSettingsModal.getChannelSettingsScreens(
        channelId,
        tmp,
        channelSettingsScreensStyles,
      );
    } else {
      channelSettingsScreens = {};
    }
    return channelSettingsScreens;
  }, items3);
  let obj3 = navigation(source[17]);
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
  const obj4 = { style: null, children: null };
  const items4 = [channelSettingsScreensStyles.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj4.style = items4;
  const obj5 = { id: "channel-details-navigator", screenOptions: null, initialRouteName: null, children: null };
  const tmp4Result = navigation(source[18]);
  let merged = Object.assign(accessibilityNativeStackOptions);
  obj5.screenOptions = { headerTitle: navigation(source[11]).renderGenericTitle, headerTitleAlign: "center" };
  obj5.initialRouteName = DETAILS;
  const items5 = [
    closure_9(Screen.Screen, {
      initialParams: { channelId, search, expandTopic },
      name: constants.DETAILS,
      options: { headerShown: false },
      getComponent() {
        return navigation(source[21]).default;
      },
    }),
    closure_9(Screen.Screen, {
      name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
      options(route) {
        route = route.route;
        let obj = {
          header(arg0) {
            const obj2 = {};
            const merged = Object.assign(arg0);
            const obj = route(7283);
            obj2.shouldHandleSafeArea = route(1364).isAndroid();
            return obj.renderHeader(obj2);
          },
          headerTitle() {
            return closure_2_9(channelId(source[23]), { channelId: route.params.channelId });
          },
          headerLeft: route(source[11]).getRenderBackImage(route.navigation),
        };
        return obj;
      },
      getComponent() {
        return navigation(source[24]).default;
      },
    }),
    ,
    ,
    ,
    ,
  ];
  const obj6 = { headerTitle: navigation(source[11]).renderGenericTitle, headerTitleAlign: "center" };
  const obj7 = {
    initialParams: { channelId, search, expandTopic },
    name: constants.DETAILS,
    options: { headerShown: false },
    getComponent() {
      return navigation(source[21]).default;
    },
  };
  const obj8 = {
    name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
    options(route) {
      route = route.route;
      let obj = {
        header(arg0) {
          const obj2 = {};
          const merged = Object.assign(arg0);
          const obj = route(7283);
          obj2.shouldHandleSafeArea = route(1364).isAndroid();
          return obj.renderHeader(obj2);
        },
        headerTitle() {
          return closure_2_9(channelId(source[23]), { channelId: route.params.channelId });
        },
        headerLeft: route(source[11]).getRenderBackImage(route.navigation),
      };
      return obj;
    },
    getComponent() {
      return navigation(source[24]).default;
    },
  };
  items5[2] = closure_9(Screen.Screen, {
    name: navigation(source[25]).ConversationNavigatorScreens.FOCUS,
    options(arg0) {
      ({ route, navigation } = arg0);
      return navigation(source[26]).conversationNavigatorFocusHeaderOptions(route, navigation);
    },
    getComponent() {
      return navigation(source[27]).default;
    },
  });
  items5[3] = closure_9(Screen.Screen, {
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
      return navigation(source[28]).default;
    },
  });
  items5[4] = closure_9(Screen.Screen, {
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
      return navigation(source[29]).default;
    },
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
      return closure_2_9(ConnectedCreateThreadHeaderButton, { channelId: route.params.channelId });
    };
    return obj;
  };
  obj12.getComponent = function getComponent() {
    return navigation(source[30]).default;
  };
  items5[5] = closure_9(Screen.Screen, obj12);
  const entries = Object.entries(memo1);
  items5[6] = entries.map((item) => {
    [tmp] = item;
    return closure_1_9(
      Screen.Screen,
      {
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
        },
      },
      tmp,
    );
  });
  obj5.children = items5;
  obj4.children = closure_10(Screen.Navigator, obj5);
  return closure_9(channelSettingsScreensStyles, obj4);
});
