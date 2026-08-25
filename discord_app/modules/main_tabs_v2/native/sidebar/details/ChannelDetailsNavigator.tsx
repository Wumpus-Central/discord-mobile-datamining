// === Module 16156: ConnectedCreateThreadHeaderButton ===

// Module 16156 (ConnectedCreateThreadHeaderButton)
import registerAssetDefault from "registerAsset" /* 12325 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import { ChannelDetailsNavigatorScreens as closure_6 } from "ChannelDetailsNavigatorScreens" /* 9819 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { SearchNavigatorScreens } from "SearchNavigatorScreens" /* 15996 */;
import jsxProd from "jsxProd" /* 21 */;
import createNativeStackNavigator from "createNativeStackNavigator" /* 8717 */;

const require = arg1;
function ConnectedCreateThreadHeaderButton(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(647);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getChannel(channelId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { channel: null };
    obj[0] = stateFromStores;
    tmp2 = callback(CreateThreadHeaderButton, obj);
  }
  return tmp2;
}
function CreateThreadHeaderButton(channel) {
  channel = channel.channel;
  let obj = channel(5996);
  [][0] = channel;
  const canStartThread = obj.useCanStartThread(channel);
  let tmp5 = null;
  if (canStartThread) {
    obj = { accessibilityLabel: null, onPress: null, source: null };
    const intl = tmp(1236).intl;
    obj[0] = intl.string(tmp(1236).t.rBIGBL);
    obj[1] = tmp4;
    obj[2] = registerAssetDefault;
    tmp5 = callback(tmp(8539).HeaderIconButton, obj);
  }
  return tmp5;
}
let c3 = importAllResult;
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = Object.freeze({});
let closure_12 = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = importAllResult.memo((navigation) => {
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
  let guildId;
  let obj = DETAILS;
  const items = [channelId, DETAILS, source];
  const effect = DETAILS.useEffect(() => {
    const channel = guildId.getChannel(channelId);
    if (null != channel) {
      const obj = { channel_id: null, guild_id: null, channel_type: null, initial_route_name: null, source: null };
      obj[0] = channel.id;
      obj[1] = channel.getGuildId();
      obj[2] = channel.type;
      obj[3] = DETAILS;
      obj[4] = source;
      channelId(source[14]).track(closure_1_7.CHANNEL_SIDEBAR_VIEWED, obj);
      const obj2 = channelId(source[14]);
    }
  }, items);
  const items1 = [navigation];
  const effect1 = DETAILS.useEffect(() => navigation.addListener("beforeRemove", () => callback(table[15]).close()), items1);
  obj1 = navigation(source[16]);
  channelSettingsScreensStyles = obj1.useChannelSettingsScreensStyles();
  const items2 = [channelId];
  const memo = DETAILS.useMemo(() => {
    const initialParams = { channelId };
    return { initialParams };
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
      let channelSettingsScreens = navigation(source[16]).getChannelSettingsScreens(channelId, tmp, channelSettingsScreensStyles);
      const obj2 = navigation(source[16]);
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
  obj = { style: items4, children: null };
  items4 = [channelSettingsScreensStyles.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj = { id: "channel-details-navigator", screenOptions: null, initialRouteName: null, children: null };
  obj1 = { headerTitle: tmp4(tmp5[11]).renderGenericTitle, headerTitleAlign: "center" };
  let merged = Object.assign(accessibilityNativeStackOptions);
  obj[1] = obj1;
  obj[2] = DETAILS;
  obj2 = {
    initialParams: { channelId, search, expandTopic },
    name: constants.DETAILS,
    options: { headerShown: false },
    getComponent() {
      return navigation(source[21]).default;
    }
  };
  const items5 = [
    callback(closure_12.Screen, obj2),
    callback(closure_12.Screen, {
      name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
      options(route) {
        route = route.route;
        let obj = {
          header(arg0) {
            let obj = route(8539);
            obj = {};
            const merged = Object.assign(arg0);
            obj.shouldHandleSafeArea = route(500).isAndroid();
            return obj.renderHeader(obj);
          },
          headerTitle() {
            return closure_1_9(closure_1_1(closure_1_2[23]), { channelId: route.params.channelId });
          },
          headerLeft: route(source[11]).getRenderBackImage(route.navigation)
        };
        return obj;
      },
      getComponent() {
        return navigation(source[24]).default;
      }
    }),
    callback(closure_12.Screen, {
      name: constants.PINNED_MESSAGES,
      initialParams: { channelId },
      options(navigation) {
        navigation = navigation.navigation;
        const obj = { title: null, headerLeft: null };
        const intl = navigation(source[12]).intl;
        obj[0] = intl.string(navigation(source[12]).t["mp1N/2"]);
        if (DETAILS === navigation.route.name) {
          let tmpResult = tmp(tmp2[11]);
          let renderModalCloseImage = tmpResult.getRenderModalCloseImage(navigation);
        } else {
          tmpResult = tmp(tmp2[11]);
          renderModalCloseImage = tmpResult.getRenderModalBackImage(navigation);
        }
        obj[1] = renderModalCloseImage;
        return obj;
      },
      getComponent() {
        return navigation(source[25]).default;
      }
    }),
    callback(closure_12.Screen, {
      initialParams: { channelId, applicationId },
      name: constants.MUTE,
      options(navigation) {
        navigation = navigation.navigation;
        const obj = { title: null, headerLeft: null };
        const intl = navigation(source[12]).intl;
        obj[0] = intl.string(navigation(source[12]).t.w4m945);
        if (DETAILS === navigation.route.name) {
          let tmpResult = tmp(tmp2[11]);
          let renderModalCloseImage = tmpResult.getRenderModalCloseImage(navigation);
        } else {
          tmpResult = tmp(tmp2[11]);
          renderModalCloseImage = tmpResult.getRenderModalBackImage(navigation);
        }
        obj[1] = renderModalCloseImage;
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
    const intl = navigation(source[12]).intl;
    obj[0] = intl.string(navigation(source[12]).t.B2panI);
    if (DETAILS === route.name) {
      let tmpResult = tmp(tmp2[11]);
      let renderModalCloseImage = tmpResult.getRenderModalCloseImage(navigation);
    } else {
      tmpResult = tmp(tmp2[11]);
      renderModalCloseImage = tmpResult.getRenderModalBackImage(navigation);
    }
    obj[1] = renderModalCloseImage;
    obj[2] = function headerRight() {
      return closure_1_9(closure_1_13, { channelId: route.params.channelId });
    };
    return obj;
  };
  obj6.getComponent = function getComponent() {
    return navigation(source[27]).default;
  };
  items5[4] = callback(closure_12.Screen, obj6);
  const entries = Object.entries(memo1);
  items5[5] = entries.map((arg0) => {
    [tmp, ] = arg0;
    return closure_1_9(closure_1_12.Screen, {
      name: tmp,
      options(navigation) {
        navigation = navigation.navigation;
        const obj = { title: closure_1.title, headerLeft: null };
        if (closure_1_3 === closure_0) {
          let renderModalCloseImage = navigation(source[11]).getRenderModalCloseImage(navigation);
          const obj3 = navigation(source[11]);
        } else {
          renderModalCloseImage = navigation(source[11]).getRenderModalBackImage(navigation);
          const obj2 = navigation(source[11]);
        }
        obj[1] = renderModalCloseImage;
        return obj;
      },
      children(route) {
        let params = route.route.params;
        if (params == null) {
          params = closure_2_11;
        }
        return closure_1.render(params, route.navigation);
      }
    }, tmp);
  });
  obj[3] = items5;
  obj[1] = callback2(closure_12.Navigator, obj);
  return callback(channelSettingsScreensStyles, obj);
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsNavigator.tsx");

export default memoResult;