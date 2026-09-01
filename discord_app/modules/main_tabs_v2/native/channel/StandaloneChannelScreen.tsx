// discord_app/modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../stores/ChannelStore.tsx";
import MIN_HEADER_HEIGHT from "../shared_components/MainTabsV2Constants.tsx";
import ME from "../../../../Constants.tsx";
import { StaticChannelRoute } from "../../../channel/ChannelConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function Header(channelId) {
  channelId = channelId.channelId;
  ({ screenIndex, guildId } = channelId);
  const isNavigationScreen = channelId.isNavigationScreen;
  const frame = channelId.frame;
  const showCreateThread = channelId.showCreateThread;
  let navigation;
  closure_5 = undefined;
  let top;
  let gradientTop;
  let callback;
  let stateFromStores;
  let obj = channelId(isNavigationScreen[9]);
  navigation = obj.useNavigation();
  const tmp4 = callback3();
  closure_5 = tmp4;
  top = guildId(isNavigationScreen[10])().top;
  obj1 = channelId(isNavigationScreen[11]);
  gradientTop = obj1.useGradientTop();
  let items = [, , , , , , ];
  ({ headerWrapper: arr[0], headerWithFadingFrame: arr[1], splitDivider: arr[2], splitDividerTop: arr[3] } = tmp4);
  items[4] = gradientTop;
  items[5] = frame;
  items[6] = top;
  const items1 = [navigation, isNavigationScreen];
  const memo = frame.useMemo(() => {
    const items = [channel.headerWrapper, gradientTop, , , , ];
    let prop;
    if (null != frame) {
      prop = tmp.headerWithFadingFrame;
    }
    items[2] = prop;
    let splitDivider;
    if (null != frame) {
      splitDivider = tmp.splitDivider;
    }
    items[3] = splitDivider;
    let splitDividerTop;
    if (null != frame) {
      splitDividerTop = tmp.splitDividerTop;
    }
    items[4] = splitDividerTop;
    if (null != frame) {
      let obj = { marginTop: null, minHeight: null };
      obj[0] = top;
      obj[1] = top;
    } else {
      obj = { paddingTop: null, minHeight: null };
      obj[0] = top;
      obj[1] = top + top;
    }
    items[5] = obj;
    return items;
  }, items);
  callback = frame.useCallback(() => {
    if (isNavigationScreen) {
      navigation.goBack();
    }
  }, items1);
  let obj2 = channelId(isNavigationScreen[12]);
  const items2 = [closure_5];
  const items3 = [guildId, channelId];
  stateFromStores = obj2.useStateFromStores(items2, () => {
    let tmp = guildId;
    if (obj.isFavoritesGuildId(guildId)) {
      channel = channel.getChannel(channelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      tmp = guild_id;
    }
    return tmp;
  }, items3);
  const items4 = [stateFromStores];
  obj = { IconComponent: null, label: null, action: null };
  const memo1 = frame.useMemo(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = tmp !== callback;
    }
    return tmp2;
  }, items4);
  obj[0] = channelId(isNavigationScreen[14]).ServerIcon;
  const intl = channelId(isNavigationScreen[15]).intl;
  obj[1] = intl.string(channelId(isNavigationScreen[15]).t.WYj55Y);
  obj[2] = function action() {
    let obj = channelId(isNavigationScreen[16]);
    obj = { screen: "guilds", guildId: stateFromStores, channelId, resetRoot: false, drawerOpen: false };
    obj.navigateToRootTab(obj);
  };
  const items5 = [obj];
  if (memo1) {
    obj = { triggerOnLongPress: true, align: "below", items: null, children: null };
    obj[2] = items5;
    obj[3] = function children(ref) {
      const merged = Object.assign(ref, Object.create(null));
      const obj = { ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj.onPress = callback;
      return closure_1_11(channelId(isNavigationScreen[18]).PressableNavigatorBackIcon, obj);
    };
    let tmp13Result = tmp11(tmp(tmp2[17]).ContextMenu, obj);
    let tmp13 = tmp11;
  } else {
    obj1 = { onPress: null };
    obj1[0] = callback;
    tmp13Result = tmp11(tmp(tmp2[18]).PressableNavigatorBackIcon, obj1);
    tmp13 = tmp11;
  }
  obj2 = { style: memo, children: null };
  const items6 = [tmp13(navigation, { style: tmp4.headerBottomBorder }), ];
  if (!channelId.isBackEnabled) {
    const obj4 = { style: null };
    obj4[0] = tmp4.spacer;
    tmp13Result = tmp13(tmp16, obj4);
  }
  const obj5 = { children: null };
  const obj6 = { children: null };
  const items7 = [tmp13Result, tmp13(guildId(isNavigationScreen[20]), { channelId, isNavigationScreen, screenIndex, showCreateThread }), tmp13(guildId(isNavigationScreen[21]), { containerStyle: tmp4.actions, channelId, screenIndex, showCreateThread })];
  obj6[0] = items7;
  items6[1] = closure_12(channelId(isNavigationScreen[19]).LayerScope, obj6);
  obj2[1] = items6;
  const items8 = [closure_12(navigation, obj2), frame];
  obj5[0] = items8;
  return closure_12(closure_13, obj5);
}
let c3 = importAllResult;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ MIDNIGHT_BORDER_WIDTH, MIN_HEADER_HEIGHT: closure_6 } = MIN_HEADER_HEIGHT);
({ EMPTY_STRING_SNOWFLAKE_ID: error, ME: closure_8, ThemeTypes: c9 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = jsxProd);
let obj = { container: { flex: 1 }, midnightContainerBorder: null, contentContainer: null, containerEmpty: null, headerWrapper: null, headerBottomBorder: null, headerWithFadingFrame: null, splitDivider: null, splitDividerTop: null, actions: null, spacer: null };
obj = { borderLeftWidth: MIDNIGHT_BORDER_WIDTH, borderLeftColor: ThemesDefault.colors.APP_FRAME_BORDER, borderTopWidth: MIDNIGHT_BORDER_WIDTH, borderTopColor: "transparent" };
obj[1] = obj;
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj[2] = createCacheKey;
obj[3] = { backgroundColor: ThemesDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
let obj2 = { backgroundColor: ThemesDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj[4] = { zIndex: 1, backgroundColor: ThemesDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND, flexDirection: "row", alignItems: "center", flexShrink: 0 };
let obj4 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.top = undefined;
obj4.height = 1;
obj4.backgroundColor = ThemesDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER;
obj[5] = obj4;
let obj3 = { zIndex: 1, backgroundColor: ThemesDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND, flexDirection: "row", alignItems: "center", flexShrink: 0 };
obj[6] = { borderTopLeftRadius: ThemesDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
let obj5 = { borderTopLeftRadius: ThemesDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
obj[7] = { borderLeftWidth: ThemesDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderLeftColor: ThemesDefault.colors.APP_FRAME_BORDER };
let obj6 = { borderLeftWidth: ThemesDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderLeftColor: ThemesDefault.colors.APP_FRAME_BORDER };
obj[8] = { borderTopWidth: ThemesDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: ThemesDefault.colors.APP_FRAME_BORDER };
let obj7 = { borderTopWidth: ThemesDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: ThemesDefault.colors.APP_FRAME_BORDER };
obj[9] = { marginRight: ThemesDefault.space.PX_16 };
let obj8 = { marginRight: ThemesDefault.space.PX_16 };
obj[10] = { width: ThemesDefault.space.PX_16 };
let closure_14 = createCacheKey.createStyles(obj);
let obj9 = { width: ThemesDefault.space.PX_16 };
const memoResult = importAllResult.memo(function StandaloneChannelScreen(arg0) {
  ({ guildId, channelId } = arg0);
  ({ isNavigationScreen, frame } = arg0);
  ({ showCreateThread, screenIndex } = arg0);
  dependencyMap = undefined;
  importAllResult = undefined;
  closure_4 = undefined;
  let isChatBesideChannelList;
  closure_6 = undefined;
  const tmp = callback3();
  dependencyMap = tmp;
  let obj = channelId(1500);
  importAllResult = obj.useNavigation();
  obj1 = channelId(11066);
  const isSwipeToMemberListEnabled = obj1.useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = frame(4960)(channelId).needSubscriptionToAccess;
  let obj2 = channelId(6069);
  let tmp6 = guildId;
  if (guildId == null) {
    tmp6 = closure_7;
  }
  const canSeeOnboardingHome = obj2.useCanSeeOnboardingHome(tmp6);
  const tmp9 = frame(4413)() === constants.MIDNIGHT;
  closure_4 = tmp9;
  const tmp10 = frame(4335)();
  isChatBesideChannelList = tmp10.isChatBesideChannelList;
  const isChatLockedOpen = tmp10.isChatLockedOpen;
  let items = [frame, tmp9, isChatBesideChannelList, , ];
  ({ container: arr[3], midnightContainerBorder: arr[4] } = tmp);
  const memo = importAllResult.useMemo(() => {
    const items = [closure_2.container, ];
    let prop;
    if (null == frame) {
      if (closure_4) {
        if (!isChatBesideChannelList) {
          prop = tmp.midnightContainerBorder;
        }
      }
    }
    items[1] = prop;
    return items;
  }, items);
  const items1 = [frame, , ];
  ({ contentContainer: arr2[1], splitDivider: arr2[2] } = tmp);
  const memo1 = importAllResult.useMemo(() => {
    const items = [closure_2.contentContainer, ];
    let splitDivider;
    if (null != frame) {
      splitDivider = closure_2.splitDivider;
    }
    items[1] = splitDivider;
    return items;
  }, items1);
  let tmp2Result = tmp2(12937);
  let tmp14 = !isChatLockedOpen;
  const isForumChannelSearchActive = tmp2Result.useIsForumChannelSearchActive(channelId);
  if (isChatLockedOpen) {
    tmp14 = isNavigationScreen;
  }
  if (tmp14) {
    tmp14 = !isForumChannelSearchActive;
  }
  closure_6 = tmp14;
  tmp2Result = tmp2(589);
  const items2 = [isChatBesideChannelList];
  const items3 = [channelId];
  const stateFromStores = tmp2Result.useStateFromStores(items2, () => {
    let channel = null;
    if (null != channelId) {
      channel = isChatBesideChannelList.getChannel(tmp);
    }
    return channel;
  }, items3);
  channelId(6094);
  if (null != channelId) {
    if (null != guildId) {
      obj = { channelId: null, frame: null, guildId: null, isNavigationScreen: null, screenIndex: null, showCreateThread: null, isBackEnabled: null };
      obj[0] = channelId;
      obj[1] = frame;
      obj[2] = guildId;
      obj[3] = isNavigationScreen;
      obj[4] = screenIndex;
      obj[5] = showCreateThread;
      obj[6] = tmp14;
      const tmp35 = callback(Header, obj);
      if (channelId !== StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        if (!needSubscriptionToAccess) {
          if (channelId === tmp36.GUILD_HOME) {
            obj = { style: null, children: null };
            obj[0] = memo;
            const items4 = [tmp35, ];
            obj1 = { style: null, children: null };
            obj1[0] = memo1;
            let tmp33Result = null;
            if (canSeeOnboardingHome) {
              obj2 = { guildId: null };
              obj2[0] = guildId;
              tmp33Result = tmp33(tmp5(16138), obj2);
            }
            obj1[1] = tmp33Result;
            items4[1] = tmp33(closure_4, obj1);
            obj[1] = items4;
            return callback2(closure_4, obj);
          } else if (channelId === tmp36.MEMBER_SAFETY) {
            const obj3 = { guildId: null };
            obj3[0] = guildId;
            return tmp33(tmp5(16156), obj3);
          } else if (channelId === tmp36.VIBEGRATIONS) {
            const obj4 = { guildId: null };
            obj4[0] = guildId;
            return tmp33(tmp5(16173), obj4);
          } else {
            if (tmp17) {
              if (null != stateFromStores) {
                const obj5 = { style: null, children: null };
                obj5[0] = memo;
                const items5 = [tmp35, ];
                const obj6 = { style: null, children: null };
                obj6[0] = memo1;
                const obj7 = { channel: null };
                obj7[0] = stateFromStores;
                obj6[1] = tmp33(tmp5(16198), obj7);
                items5[1] = tmp33(closure_4, obj6);
                obj5[1] = items5;
                return callback2(closure_4, obj5);
              }
            }
            if (showCreateThread) {
              const obj8 = { style: null, children: null };
              obj8[0] = memo1;
              const items6 = [tmp35, ];
              const obj9 = { channelId: null, screenIndex: null };
              obj9[0] = channelId;
              obj9[1] = screenIndex;
              items6[1] = tmp33(tmp2(16203).CreateThreadView, obj9);
              obj8[1] = items6;
              return tmp18(closure_4, obj8);
            } else {
              const obj10 = { children: null };
              const items7 = [tmp35, ];
              const obj11 = { style: null, children: null };
              obj11[0] = memo1;
              const obj12 = { guildId: null, channelId: null, chatInputRef: null, screenIndex: null };
              obj12[0] = guildId;
              obj12[1] = channelId;
              obj12[2] = ref;
              obj12[3] = screenIndex;
              obj11[1] = tmp33(tmp5(10977), obj12);
              items7[1] = tmp33(closure_4, obj11);
              obj10[0] = items7;
              const tmp18Result = tmp18(closure_13, obj10);
              if (isSwipeToMemberListEnabled) {
                const obj13 = { style: null, channelId: null, screenIndex: null, isBackEnabled: null, children: null };
                obj13[0] = memo;
                obj13[1] = channelId;
                obj13[2] = screenIndex;
                obj13[3] = tmp14;
                obj13[4] = tmp18Result;
                tmp33Result = tmp33(tmp5(16207), obj13);
              } else {
                const obj14 = { style: null, accessible: false, onAccessibilityEscape: null, children: null };
                obj14[0] = memo;
                obj14[2] = function onAccessibilityEscape() {
                  if (closure_6) {
                    navigation.goBack();
                  }
                };
                obj14[3] = tmp18Result;
                tmp33Result = tmp33(closure_4, obj14);
              }
              return tmp33Result;
            }
          }
        }
      }
      const obj15 = { style: null, children: null };
      obj15[0] = memo;
      const items8 = [tmp35, ];
      const obj16 = { style: null, children: null };
      obj16[0] = memo1;
      const items9 = [callback(tmp5(5070), { absolute: true }), ];
      const obj17 = { guildId: null, gatedChannelId: null };
      obj17[0] = guildId;
      let tmp32;
      if (needSubscriptionToAccess) {
        tmp32 = channelId;
      }
      obj17[1] = tmp32;
      items9[1] = callback(tmp5(16121), obj17);
      obj16[1] = items9;
      items8[1] = callback2(closure_4, obj16);
      obj15[1] = items8;
      return callback2(closure_4, obj15);
    }
  }
  const obj18 = { style: items10, children: null };
  items10 = [memo, tmp.containerEmpty];
  const obj19 = { title: null, body: null };
  const intl = tmp2(1236).intl;
  obj19[0] = intl.string(channelId(1236).t.ai6Lbr);
  const intl2 = tmp2(1236).intl;
  obj19[1] = intl2.string(channelId(1236).t["LTr+x9"]);
  obj18[1] = callback(channelId(1297).EmptyState, obj19);
  return callback(closure_4, obj18);
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx");

export default memoResult;