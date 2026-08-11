// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsNavigator.tsx
import importAllResult from "useSafeAreaInsets";
import { View } from "useNavigatorBackPressHandler";
import ensureGuildLoaded from "ensureGuildLoaded";
import { ChannelDetailsNavigatorScreens as closure_6 } from "ChannelDetailsNavigatorScreens";
import { AnalyticEvents } from "ME";
import { SearchNavigatorScreens } from "SearchNavigatorScreens";
import jsxProd from "set";
import createNativeStackNavigator from "createNativeStackNavigator";
import { registerAsset } from "../../../../../../_runtime/12127_registerAsset.js";

let c10;
let c9;
const require = arg1;
function ConnectedCreateThreadHeaderButton(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(647);
  const items = [ensureGuildLoaded];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getChannel(channelId));
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
  let obj = channel(5889);
  [][0] = channel;
  const canStartThread = obj.useCanStartThread(channel);
  let tmp5 = null;
  if (canStartThread) {
    obj = { accessibilityLabel: null, onPress: null, source: null };
    const intl = tmp(1236).intl;
    obj[0] = intl.string(tmp(1236).t.rBIGBL);
    obj[1] = tmp4;
    obj[2] = registerAsset;
    tmp5 = callback(tmp(8388).HeaderIconButton, obj);
  }
  return tmp5;
}
let c3 = importAllResult;
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = Object.freeze({});
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = importAllResult.memo((route) => {
  let applicationId;
  let expandTopic;
  let search;
  let params = route.route.params;
  const channelId = params.channelId;
  const source = params.source;
  let DETAILS = params.initialRouteName;
  ({ applicationId, search, expandTopic } = params);
  if (DETAILS === undefined) {
    DETAILS = constants.DETAILS;
  }
  let channelSettingsScreensStyles;
  let guildId;
  let obj = channelSettingsScreensStyles;
  const items = [channelId, DETAILS, source];
  const effect = channelSettingsScreensStyles.useEffect(() => {
    const channel = outer1_5.getChannel(channelId);
    if (null != channel) {
      const obj = { channel_id: null, guild_id: null, channel_type: null, initial_route_name: null, source: null };
      obj[0] = channel.id;
      obj[1] = channel.getGuildId();
      obj[2] = channel.type;
      obj[3] = DETAILS;
      obj[4] = source;
      source(DETAILS[14]).track(outer1_7.CHANNEL_SIDEBAR_VIEWED, obj);
      const obj2 = source(DETAILS[14]);
    }
  }, items);
  let obj1 = channelId(DETAILS[15]);
  channelSettingsScreensStyles = obj1.useChannelSettingsScreensStyles();
  const items1 = [channelId];
  const memo = channelSettingsScreensStyles.useMemo(() => {
    const initialParams = { channelId };
    return { initialParams };
  }, items1);
  let obj2 = channelId(DETAILS[16]);
  const accessibilityNativeStackOptions = obj2.useAccessibilityNativeStackOptions();
  channel = channel.getChannel(channelId);
  guildId = undefined;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  const items2 = [channelId, guildId, channelSettingsScreensStyles];
  const memo1 = obj.useMemo(() => {
    if (null != guildId) {
      let channelSettingsScreens = channelId(DETAILS[15]).getChannelSettingsScreens(channelId, tmp, channelSettingsScreensStyles);
      const obj2 = channelId(DETAILS[15]);
    } else {
      channelSettingsScreens = {};
    }
    return channelSettingsScreens;
  }, items2);
  channelId(DETAILS[17]).useNavigatorBackPressHandler(() => {
    const rootNavigationRef = channelId(DETAILS[18]).getRootNavigationRef();
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
  const rect = source(tmp4[19])();
  obj = { style: items3, children: null };
  items3 = [channelSettingsScreensStyles.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj = { id: "channel-details-navigator", screenOptions: null, initialRouteName: null, children: null };
  obj1 = { headerTitle: tmp3(tmp4[11]).renderGenericTitle, headerTitleAlign: "center" };
  let merged = Object.assign(accessibilityNativeStackOptions);
  obj[1] = obj1;
  obj[2] = DETAILS;
  obj2 = {
    initialParams: { channelId, search, expandTopic },
    name: constants.DETAILS,
    options: { headerShown: false },
    getComponent() {
      return channelId(DETAILS[20]).default;
    }
  };
  const items4 = [
    callback(createNativeStackNavigator.Screen, obj2),
    callback(createNativeStackNavigator.Screen, {
      name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
      options(route) {
        route = route.route;
        let obj = {
          header(arg0) {
            let obj = route(8388);
            obj = {};
            const merged = Object.assign(arg0);
            obj.shouldHandleSafeArea = route(500).isAndroid();
            return obj.renderHeader(obj);
          },
          headerTitle() {
            return outer1_9(outer1_1(outer1_2[22]), { channelId: route.params.channelId });
          },
          headerLeft: null
        };
        obj[2] = route(DETAILS[11]).getRenderBackImage(route.navigation);
        return obj;
      },
      getComponent() {
        return channelId(DETAILS[23]).default;
      }
    }),
    callback(createNativeStackNavigator.Screen, {
      name: constants.PINNED_MESSAGES,
      initialParams: { channelId },
      options(navigation) {
        navigation = navigation.navigation;
        const obj = { title: null, headerLeft: null };
        const intl = channelId(DETAILS[12]).intl;
        obj[0] = intl.string(channelId(DETAILS[12]).t["mp1N/2"]);
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
        return channelId(DETAILS[24]).default;
      }
    }),
    callback(createNativeStackNavigator.Screen, {
      initialParams: { channelId, applicationId },
      name: constants.MUTE,
      options(navigation) {
        navigation = navigation.navigation;
        const obj = { title: null, headerLeft: null };
        const intl = channelId(DETAILS[12]).intl;
        obj[0] = intl.string(channelId(DETAILS[12]).t.w4m945);
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
        return channelId(DETAILS[25]).default;
      }
    }),
  ,

  ];
  const obj6 = {};
  const merged1 = Object.assign(memo);
  obj6.name = constants.THREADS;
  obj6.options = function options(arg0) {
    let navigation;
    let route;
    ({ navigation, route } = arg0);
    const obj = { title: null, headerLeft: null, headerRight: null };
    const intl = channelId(DETAILS[12]).intl;
    obj[0] = intl.string(channelId(DETAILS[12]).t.B2panI);
    if (DETAILS === route.name) {
      let tmpResult = tmp(tmp2[11]);
      let renderModalCloseImage = tmpResult.getRenderModalCloseImage(navigation);
    } else {
      tmpResult = tmp(tmp2[11]);
      renderModalCloseImage = tmpResult.getRenderModalBackImage(navigation);
    }
    obj[1] = renderModalCloseImage;
    obj[2] = function headerRight() {
      return outer1_9(outer1_13, { channelId: route.params.channelId });
    };
    return obj;
  };
  obj6.getComponent = function getComponent() {
    return channelId(DETAILS[26]).default;
  };
  items4[4] = callback(createNativeStackNavigator.Screen, obj6);
  const entries = Object.entries(memo1);
  items4[5] = entries.map((arg0) => {
    let tmp;
    [tmp, ] = arg0;
    return outer1_9(outer1_12.Screen, {
      name: tmp,
      options(navigation) {
        navigation = navigation.navigation;
        const obj = { title: closure_1.title, headerLeft: null };
        if (outer1_2 === closure_0) {
          let renderModalCloseImage = channelId(DETAILS[11]).getRenderModalCloseImage(navigation);
          const obj3 = channelId(DETAILS[11]);
        } else {
          renderModalCloseImage = channelId(DETAILS[11]).getRenderModalBackImage(navigation);
          const obj2 = channelId(DETAILS[11]);
        }
        obj[1] = renderModalCloseImage;
        return obj;
      },
      children(route) {
        let params = route.route.params;
        if (params == null) {
          params = outer2_11;
        }
        return closure_1.render(params, route.navigation);
      }
    }, tmp);
  });
  obj[3] = items4;
  obj[1] = callback2(createNativeStackNavigator.Navigator, obj);
  return callback(guildId, obj);
});
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsNavigator.tsx");

export default memoResult;